export default {
  methods: {
    setupFilters() {
      this.columns.forEach((column) => {
        if (this.isColumnHasFilter(column)) {
          if (column.type == "date" || column.type == "number" || column.type == "money") {
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
              if (customFilter.type == "date" || customFilter.type == "number" || customFilter.type == "money") {
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
      let value = this.internalFilterByProp(column.prop + "_sort").value;
      if (!value) {
        this.internalFilterByProp(column.prop + "_sort").value = "ASC";
      } else if (value == "ASC") {
        this.internalFilterByProp(column.prop + "_sort").value = "DESC";
      } else if (value == "DESC") {
        this.internalFilterByProp(column.prop + "_sort").value = null;
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
