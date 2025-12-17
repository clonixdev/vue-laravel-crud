export default {
  methods: {
    async loadOptions() {
      for (let i = 0; i < this.columns.length; i++) {
        const column = this.columns[i];

        if (column.options instanceof Promise) {
          // Si las opciones son una función (promesa), esperar y actualizar
          const options = await column.options;
          this.$set(this.columns, i, { ...column, options });

          console.debug("Options promise", this.columns);
        }
      }

      this.optionsLoaded = true;
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

    getStateValue(value, options) {
      if (!options) {
        console.debug(
          "State Column Not hast options returning value",
          value,
          options
        );
        return value;
      }
      let ops = options.filter((option) => {
        if (Array.isArray(value)) {
          return value.includes(option.id);
        } else {
          return option.id == value;
        }
      });
      ops = ops.map((option) => {
        return option.text ? option.text : option.label ? option.label : "";
      });
      return ops.join(", ");
    }
  }
};
