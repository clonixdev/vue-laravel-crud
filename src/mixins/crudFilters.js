export default {
  methods: {
    setupFilters() {
      this.columns.forEach((column) => {
        if (this.isColumnHasFilter(column)) {
          if (column.type == "date") {
            this.internalFilters.push({
              column: column.prop + "_from",
              op: column.filterOp ? column.filterOp : "=",
              value: null,
            });

            this.internalFilters.push({
              column: column.prop + "_to",
              op: column.filterOp ? column.filterOp : "=",
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
    },

    toggleFilters() {
      this.filtersVisible = !this.filtersVisible;
      if (this.displayMode == this.displayModes.MODE_CARDS) {
        this.filterSidebarOpen = this.filtersVisible;
      } else {
        this.filterSidebarOpen = false;
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
