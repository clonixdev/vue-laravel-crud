export default {
  methods: {
    hasFilterValue(value) {
      return value !== null && value !== undefined && value !== '';
    },

    isRangeFilterColumn(column) {
      return (
        column &&
        (column.type == 'date' ||
          column.type == 'number' ||
          column.type == 'money' ||
          column.type == 'price')
      );
    },

    formatFilterDisplayValue(column, value) {
      if (column.type == 'boolean') {
        return value == 1 || value == '1' || value === true ? 'Sí' : 'No';
      }
      if ((column.type == 'state' || column.type == 'array') && column.options) {
        const option = column.options.find(
          (o) => String(o.id !== undefined ? o.id : o.value) === String(value)
        );
        if (option) {
          return option.text || option.label || String(value);
        }
      }
      return String(value);
    },

    formatRangeDisplayValue(column, fromVal, toVal) {
      const hasFrom = this.hasFilterValue(fromVal);
      const hasTo = this.hasFilterValue(toVal);
      const formatOne = (v) => {
        if (column.type == 'date' && v) {
          return this.moment(v).format(column.format ? column.format : 'L');
        }
        return String(v);
      };
      if (hasFrom && hasTo) {
        return formatOne(fromVal) + ' – ' + formatOne(toVal);
      }
      if (hasFrom) {
        return 'Desde: ' + formatOne(fromVal);
      }
      if (hasTo) {
        return 'Hasta: ' + formatOne(toVal);
      }
      return '';
    },

    clearActiveFilter(key) {
      const column = (this.columns || []).find((c) => c.prop === key);
      if (column && this.isRangeFilterColumn(column)) {
        const from = this.internalFilterByProp(key + '_from');
        const to = this.internalFilterByProp(key + '_to');
        if (from) from.value = null;
        if (to) to.value = null;
      } else {
        const f = this.internalFilterByProp(key);
        if (f) f.value = null;
      }
      this.forceRecomputeCounter++;
      setTimeout(() => {
        this.refresh();
      }, 1);
    },

    setupFilters() {
      this.columns.forEach((column) => {
        if (this.isColumnHasFilter(column)) {
          if (this.isRangeFilterColumn(column)) {
            this.internalFilters.push({
              column: column.prop + "_from",
              op: ">=",
              value: null,
            });

            this.internalFilters.push({
              column: column.prop + "_to",
              op: "<=",
              value: null,
            });
          } else {
            this.internalFilters.push({
              column: column.prop,
              op: column.filterOp ? column.filterOp : "=",
              value: null,
            });
          }
        }
        if (this.sortable) {
          this.internalFilters.push({
            column: column.prop + "_sort",
            op: column.filterOp ? column.filterOp : "=",
            value: null,
          });
        }
      });

      // Procesar filtros custom
      if (this.customFilters && Array.isArray(this.customFilters)) {
        this.customFilters.forEach((customFilter) => {
          if (this.isCustomFilterEnabled(customFilter)) {
            // Si el tipo es función (callback), no procesamos automáticamente
            // El callback se encargará del renderizado y gestión del filtro
            if (typeof customFilter.type === 'string') {
              if (this.isRangeFilterColumn(customFilter)) {
                this.internalFilters.push({
                  column: customFilter.prop + "_from",
                  op: ">=",
                  value: null,
                });

                this.internalFilters.push({
                  column: customFilter.prop + "_to",
                  op: "<=",
                  value: null,
                });
              } else {
                this.internalFilters.push({
                  column: customFilter.prop,
                  op: customFilter.filterOp ? customFilter.filterOp : "=",
                  value: null,
                });
              }
            } else if (typeof customFilter.type === 'function') {
              // Para callbacks, solo creamos el filtro interno si no existe
              // El callback se encargará del renderizado
              if (!this.internalFilterByProp(customFilter.prop)) {
                this.internalFilters.push({
                  column: customFilter.prop,
                  op: customFilter.filterOp ? customFilter.filterOp : "=",
                  value: null,
                });
              }
            }
          }
        });
      }
    },

    toggleSortFilter(column) {
      const sortEntry = this.internalFilterByProp(column.prop + "_sort");
      if (!sortEntry) {
        return;
      }
      let value = sortEntry.value;
      if (!value) {
        sortEntry.value = "ASC";
      } else if (value == "ASC") {
        sortEntry.value = "DESC";
      } else if (value == "DESC") {
        sortEntry.value = null;
      }
      this.forceRecomputeCounter++;
      setTimeout(() => {
        this.refresh();
      }, 1);
    },

    toggleFilters() {
      this.filtersVisible = !this.filtersVisible;
      this.filterSidebarOpen = this.filtersVisible;
      
      // Si se está abriendo el sidebar y los filtros no están inicializados, inicializarlos
      if (this.filtersVisible && this.internalFilters.length === 0) {
        this.setupFilters();
      }
    },

    resetFilters(refresh = true) {
      this.internalFilters = [];
      this.setupFilters();
      this.forceRecomputeCounter++;

      if (refresh) {
        setTimeout(() => {
          this.refresh();
        }, 1);
      }
    },

    isColumnHasFilter(column) {
      return column && !column.hideFilter && column.type != "actions";
    },

    isCustomFilterEnabled(customFilter) {
      return customFilter && customFilter.prop && !customFilter.hideFilter && customFilter.type != "actions";
    },

    setFilter(column, value) {
      let filter = this.filter.find((f) => f.column == column);
      filter.value = value;
      this.forceRecomputeCounter++;
      setTimeout(() => {
        this.refresh();
      }, 1);
    },

    onChangeFilter(event) {
      this.forceRecomputeCounter++;
      console.debug("Filters debug ", this.finalFilters, this.internalFilter, this.internalFilters, this.filter, this.filters);
      setTimeout(() => {
        this.refresh();
      }, 1);
    },

    togglePrincipalSort() {
      this.principalSort = !this.principalSort;
      setTimeout(() => {
        this.refresh();
      }, 1);
    }
  }
};
