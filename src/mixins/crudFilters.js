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
        if (this.sortable && column.type != 'actions' && column.type != 'checkbox' && column.type != 'select') {
          this.internalFilters.push({
            column: column.prop + "_sort",
            op: column.filterOp ? column.filterOp : "=",
            value: null,
            sortPriority: null,
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
      const sortEntry = this.internalFilterByProp(column.prop + '_sort');
      if (!sortEntry) {
        return;
      }

      let value = sortEntry.value;
      if (!value) {
        sortEntry.value = 'ASC';
        sortEntry.sortPriority = this.nextSortPriority();
      } else if (value == 'ASC') {
        sortEntry.value = 'DESC';
        if (!sortEntry.sortPriority) {
          sortEntry.sortPriority = this.nextSortPriority();
        }
      } else if (value == 'DESC') {
        sortEntry.value = null;
        sortEntry.sortPriority = null;
        this.normalizeSortPriorities();
      }
      this.forceRecomputeCounter++;
      setTimeout(() => {
        this.refresh();
      }, 1);
    },

    nextSortPriority() {
      const priorities = this.internalFilters
        .filter((f) => f.column.endsWith('_sort') && f.value && f.sortPriority)
        .map((f) => f.sortPriority);
      return priorities.length ? Math.max(...priorities) + 1 : 1;
    },

    normalizeSortPriorities() {
      const active = this.internalFilters
        .filter((f) => f.column.endsWith('_sort') && f.value)
        .sort((a, b) => (a.sortPriority || 0) - (b.sortPriority || 0));
      active.forEach((f, idx) => {
        f.sortPriority = idx + 1;
      });
    },

    getSortPriority(column) {
      const sortEntry = this.internalFilterByProp(column.prop + '_sort');
      if (!sortEntry || !sortEntry.value) {
        return null;
      }
      return sortEntry.sortPriority || null;
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
      return (
        column &&
        !column.hideFilter &&
        column.type != 'actions' &&
        column.type != 'checkbox' &&
        column.type != 'select'
      );
    },

    /**
     * Visible en tabla: columnas normales, o hideColumn solo mientras
     * los filtros inline estén abiertos y la columna tenga filtro
     * (para alinear header vacío / celda vacía con el row de filtros).
     * Parche portado desde easy2 (vue-laravel-crud@1.8.4).
     */
    isColumnVisibleInTable(column) {
      if (!column) return false;
      if (!column.hideColumn) return true;
      return !!(
        this.enableFilters &&
        this.filtersVisible &&
        this.isColumnHasFilter(column)
      );
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
    },

    initQuickFilterState() {
      const fromProp = this.quickFilter != null && this.quickFilter !== ''
        ? String(this.quickFilter)
        : null;
      if (fromProp) {
        this.activeQuickFilterKey = fromProp;
        this.activeQuickFilterKeyReactive.value = fromProp;
        return;
      }
      this.ensureActiveQuickFilter();
    },

    ensureActiveQuickFilter() {
      const items = Array.isArray(this.quickFilters) ? this.quickFilters : [];
      if (!items.length) {
        this.activeQuickFilterKey = null;
        this.activeQuickFilterKeyReactive.value = null;
        return;
      }
      if (this.activeQuickFilterKey && this.findQuickFilterItem(this.activeQuickFilterKey)) {
        return;
      }
      const preferred = items.find((item) => item && item.default)
        || items.find((item) => item && (item.filter == null || (Array.isArray(item.filter) && item.filter.length === 0)))
        || items[0];
      const key = this.normalizeQuickFilterKey(preferred);
      this.activeQuickFilterKey = key;
      this.activeQuickFilterKeyReactive.value = key;
    },

    normalizeQuickFilterKey(item) {
      if (!item) return null;
      if (item.key != null) return String(item.key);
      if (item.value != null) return String(item.value);
      if (item.id != null) return String(item.id);
      return null;
    },

    findQuickFilterItem(key) {
      if (key == null || key === '') return null;
      const list = Array.isArray(this.quickFilters) ? this.quickFilters : [];
      return list.find((item) => this.normalizeQuickFilterKey(item) === String(key)) || null;
    },

    resolveQuickFilterPayload(item) {
      if (!item) return [];
      if (typeof item.apply === 'function') {
        try {
          const result = item.apply(item, this);
          return Array.isArray(result) ? result : [];
        } catch (e) {
          console.warn('quickFilter.apply failed', e);
          return [];
        }
      }
      if (item.filter == null) return [];
      if (typeof item.filter === 'function') {
        try {
          const result = item.filter(item, this);
          return Array.isArray(result) ? result : [];
        } catch (e) {
          console.warn('quickFilter.filter failed', e);
          return [];
        }
      }
      return Array.isArray(item.filter) ? item.filter : [];
    },

    selectQuickFilter(key, item = null) {
      const resolved = item || this.findQuickFilterItem(key);
      const normalizedKey = resolved
        ? this.normalizeQuickFilterKey(resolved)
        : (key != null ? String(key) : null);

      if (!normalizedKey) {
        return;
      }

      if (this.activeQuickFilterKey === normalizedKey) {
        this.$emit('quick-filter-click', {
          key: normalizedKey,
          item: resolved,
          filter: this.resolveQuickFilterPayload(resolved),
        });
        return;
      }

      this.activeQuickFilterKey = normalizedKey;
      this.activeQuickFilterKeyReactive.value = normalizedKey;
      this.forceRecomputeCounter++;

      const payload = {
        key: normalizedKey,
        item: resolved,
        filter: this.resolveQuickFilterPayload(resolved),
      };

      this.$emit('update:quickFilter', normalizedKey);
      this.$emit('quick-filter-change', payload);
      this.$emit('quick-filter-click', payload);

      setTimeout(() => {
        this.refresh();
      }, 1);
    },
  },
};
