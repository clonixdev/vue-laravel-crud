export default {
  methods: {
    normalizeOptions(options) {
      if (!Array.isArray(options)) {
        return options;
      }

      return options.map((option) => {
        const normalized = { ...option };

        // Asegurar que siempre tenga id, value y text
        if (normalized.id === undefined && normalized.value !== undefined) {
          normalized.id = normalized.value;
        } else if (normalized.value === undefined && normalized.id !== undefined) {
          normalized.value = normalized.id;
        } else if (normalized.id === undefined && normalized.value === undefined) {
          // Si no tiene ni id ni value, usar text o label como valor por defecto
          normalized.id = normalized.text || normalized.label || "";
          normalized.value = normalized.id;
        }

        // Asegurar que siempre tenga text
        if (normalized.text === undefined) {
          normalized.text = normalized.label !== undefined ? normalized.label : "";
        }

        return normalized;
      });
    },

    async loadOptions() {
      // Establecer bandera para evitar que el watcher de columns se dispare
      this.isLoadingOptions = true;

      try {
        for (let i = 0; i < this.columns.length; i++) {
          const column = this.columns[i];

          if (column.options instanceof Promise) {
            // Si las opciones son una función (promesa), esperar y actualizar
            const options = await column.options;
            // Solo actualizar si las opciones realmente cambiaron
            if (JSON.stringify(column.options) !== JSON.stringify(options)) {
              this.$set(this.columns, i, { ...column, options });
              console.debug("Options promise", this.columns);
            }
          }

          // Normalizar opciones para columnas tipo state y array
          if ((column.type === 'state' || column.type === 'array') && Array.isArray(column.options)) {
            const normalizedOptions = this.normalizeOptions(column.options);
            // Solo actualizar si las opciones normalizadas son diferentes
            const currentOptionsStr = JSON.stringify(column.options);
            const normalizedOptionsStr = JSON.stringify(normalizedOptions);
            if (currentOptionsStr !== normalizedOptionsStr) {
              this.$set(this.columns, i, { ...column, options: normalizedOptions });
            }
          }
        }

        this.optionsLoaded = true;
      } finally {
        // Restaurar bandera al finalizar, incluso si hay errores
        this.isLoadingOptions = false;
      }
    },

    getArrayValue(value, displayProp, options = []) {
      if (!Array.isArray(value)) return "N/A";
      let values = [];
      let valuesFinal = [];

      if (value.length > 0) {
        if (typeof value[0] === "object" && displayProp) {
          values = value.map((vv) => vv[displayProp]);
        } else {
          values = value.join(",");
        }
      } else {
        return "";
      }

      values.forEach(val => {
        valuesFinal.push(this.getStateValue(val, options));
      })

      return values.join(",");
    },

    getStateOptions(value, options) {
      if (!options || !Array.isArray(options) || options.length === 0) {
        return [];
      }
      
      // Asegurar que las opciones estén normalizadas (por si loadOptions no se ha ejecutado aún)
      const normalizedOptions = this.normalizeOptions(options);
      
      // Si el valor es null o undefined, no hay coincidencias
      if (value === null || value === undefined) {
        return [];
      }
      
      // Normalizar el valor para comparación (convertir a string)
      const normalizedValue = String(value).trim();
      
      return normalizedOptions.filter((option) => {
        // Después de normalizar, las opciones siempre tienen id, value y text
        // Comparar tanto con id como con value para asegurar compatibilidad
        const optionId = option.id !== undefined && option.id !== null ? String(option.id).trim() : null;
        const optionValue = option.value !== undefined && option.value !== null ? String(option.value).trim() : null;
        
        if (Array.isArray(value)) {
          // Para arrays, verificar si alguno de los valores coincide
          return value.some(val => {
            if (val === null || val === undefined) return false;
            const normalizedVal = String(val).trim();
            return (optionId && normalizedVal === optionId) || (optionValue && normalizedVal === optionValue);
          });
        } else {
          // Comparación estricta para valores únicos - comparar con ambos id y value
          return (optionId && optionId === normalizedValue) || (optionValue && optionValue === normalizedValue);
        }
      });
    },

    getStateValue(value, options) {
      if (!options) {
        console.debug(
          "State Column Not hast options returning value",
          value,
          options
        );
        return value;
      }
      const ops = this.getStateOptions(value, options);
      return ops.map((option) => {
        // Usar text directamente (ya normalizado)
        return option.text !== undefined ? option.text : "";
      }).join(", ");
    },

    getStateBadgeVariant(option) {
      // Si la opción tiene una propiedad variant, usarla
      if (option.variant) {
        return option.variant;
      }
      // Si no, intentar inferir del id/value común
      const idValue = String(option.id || option.value || '').toLowerCase();
      if (idValue.includes('active') || idValue.includes('activo')) {
        return 'success';
      } else if (idValue.includes('inactive') || idValue.includes('inactivo')) {
        return 'secondary';
      } else if (idValue.includes('pending') || idValue.includes('pendiente')) {
        return 'warning';
      } else if (idValue.includes('done') || idValue.includes('completado')) {
        return 'success';
      } else if (idValue.includes('error') || idValue.includes('error')) {
        return 'danger';
      }
      // Variante por defecto
      return 'primary';
    }
  }
};
