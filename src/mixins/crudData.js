import moment from "moment";
import Vue from "vue";

export default {
  data() {
    return {
      crudUuid: "",
      moment: moment,
      loading: false,
      firstLoad: false,
      item: {
        id: null,
      },
      items: [],
      selectedItems: [],
      pagination: {
        current_page: 1,
        last_page: 1,
        next_page_url: "",
        prev_page_url: "",
        per_page: 20,
        total: 0,
      },
      displaySearch: false,
      itemDefault: null,
      filters: [],
      filtersVisible: false,
      filterSidebarOpen: false,
      internalFilters: [],
      forceRecomputeCounter: 0,
      _displayMode: 1, // Propiedad local para displayMode (se inicializará desde la prop en created())
      displayModeReactive: Vue.observable({ value: 1 }), // Objeto reactivo para provide/inject
      loadingReactive: Vue.observable({ value: false }), // Objeto reactivo para loading
      firstLoadReactive: Vue.observable({ value: false }), // Objeto reactivo para firstLoad
      displayModes: {
        MODE_TABLE: 1,
        MODE_CARDS: 2,
        MODE_CUSTOM: 3,
        MODE_KANBAN: 4
      },
      infiniteScrollKey: 1,
      optionsLoaded: false,
      isLoadingOptions: false,
      isMobile: false,
      refreshing: false,
      fetchError: false,
      principalSort: false,
      exportFormat: 'JSON',
      fileImport: null,
    };
  },
  computed: {
    itemValue() {
      return (column, item) => {
        if (
          column.prop &&
          column.prop.split(".").length > 1 &&
          column.prop.split(".")[1]
        ) {
          return item[column.prop.split(".")[0]] &&
            item[column.prop.split(".")[0]][column.prop.split(".")[1]]
            ? item[column.prop.split(".")[0]][column.prop.split(".")[1]]
            : "";
        } else {
          return item[column.prop];
        }
      };
    },

    isSplitGroups(){
      if(this.groupedSplit){
        return true;
      }
      return this._displayMode == this.displayModes.MODE_KANBAN;
    },

    itemsList() {
      const items = this.ajax ? this.items : this.items.slice(this.paginationIndexStart, this.paginationIndexEnd);
      if (this.masonrySort && !this.isMobile) {
        return this.rearrangeArray(items, this.masonryColumns);
      }
      return items;
    },

    paginationIndexStart() {
      return (this.pagination.current_page - 1) * this.pagination.per_page;
    },

    paginationIndexEnd() {
      return this.paginationIndexStart + this.pagination.per_page;
    },

    finalFilters() {
      return [
        ...this.filters,
        ...this.filter,
        ...this.internalFilter,
        ...this.sortFilter,
        ...this.groupFilter
      ];
    },

    sortFilter() {
      if (this.showPrincipalSortBtn) {
        if (this.principalSort) {
          return [[this.principalSortColumn, 'SORTASC', '']];
        } else {
          return [[this.principalSortColumn, 'SORTDESC', '']];
        }
      } else {
        return [];
      }
    },

    groupFilter() {
      if (this.grouped && this.groupedAttribute) {
        return [['', 'GROUPBY', this.groupedAttribute]];
      } else {
        return [];
      }
    },

    internalFilter() {
      let filter = [];
      this.forceRecomputeCounter;
      this.internalFilters.forEach((f) => {
        if (f.value) {
          let colname = f.column.replace("_sort", "").replace("_from", "").replace("_to", "");
          let op = f.op;
          
          // Aplicar operadores automáticamente para filtros de rango
          if (f.column.endsWith("_from")) {
            op = ">=";
          } else if (f.column.endsWith("_to")) {
            op = "<=";
          } else if (f.column.endsWith("_sort")) {
            // Aplicar operadores correctos para filtros de ordenamiento
            if (f.value === "ASC") {
              op = "SORTASC";
            } else if (f.value === "DESC") {
              op = "SORTDESC";
            }
          }
          
          filter.push([colname, op, f.value]);
        }
      });
      return filter;
    },

    internalFilterByProp() {
      return (prop) => {
        return this.internalFilters.find((inf) => inf.column == prop);
      };
    },

    columnOptions() {
      return (column) => {
        // Placeholder for column options logic
      }
    }
  },

  watch: {
    search(val) {
      if (val && val != "") {
        this.filters = [];
        this.filters.push(["search", "LIKE", val]);
        this.fetchItems();
      } else {
        this.filters = [];
        this.fetchItems();
      }
    },

    models(val) {
      if (!this.ajax) {
        this.items = val;
      }
    },

    limit(val) {
      if (val && val > 0) {
        this.pagination.per_page = val;
        // Resetear a la primera página y recargar datos
        this.pagination.current_page = 1;
        this.fetchItems();
      }
    },

    // Watcher para la prop displayMode (sincroniza cuando cambia desde el componente padre)
    displayMode(newVal) {
      // Usar $props para acceder a la prop y evitar conflictos con data properties
      const propValue = this.$props && this.$props.displayMode !== undefined ? this.$props.displayMode : newVal;
      if (propValue !== undefined && this._displayMode !== propValue) {
        this._displayMode = propValue;
        if (this.displayModeReactive) {
          this.displayModeReactive.value = propValue;
        }
      }
    },

    // Watcher para la propiedad local _displayMode (para forzar re-renderizado)
    _displayMode(newVal) {
      // Actualizar el objeto reactivo si existe
      if (this.displayModeReactive) {
        this.displayModeReactive.value = newVal;
      }
      // Forzar re-renderizado cuando cambia el modo de visualización
      this.$nextTick(() => {
        this.forceRecomputeCounter++;
      });
    },

    showPaginator() {
      // Forzar re-renderizado cuando cambia la visibilidad del paginador
      this.$nextTick(() => {
        this.forceRecomputeCounter++;
      });
    },

    showSearch() {
      // Forzar re-renderizado cuando cambia la visibilidad de la búsqueda
      this.$nextTick(() => {
        this.forceRecomputeCounter++;
      });
    },

    showCreateBtn() {
      // Forzar re-renderizado cuando cambia la visibilidad del botón crear
      this.$nextTick(() => {
        this.forceRecomputeCounter++;
      });
    },

    showHeader() {
      // Forzar re-renderizado cuando cambia la visibilidad del header
      this.$nextTick(() => {
        this.forceRecomputeCounter++;
      });
    },

    tableClass() {
      // Forzar re-renderizado cuando cambian las clases de la tabla
      this.$nextTick(() => {
        this.forceRecomputeCounter++;
      });
    },

    cardClass() {
      // Forzar re-renderizado cuando cambian las clases de las tarjetas
      this.$nextTick(() => {
        this.forceRecomputeCounter++;
      });
    },

    tableContainerClass() {
      // Forzar re-renderizado cuando cambian las clases del contenedor
      this.$nextTick(() => {
        this.forceRecomputeCounter++;
      });
    },

    columns: {
      handler() {
        // Evitar bucle infinito: no ejecutar si loadOptions() está modificando las columnas
        if (this.isLoadingOptions) {
          return;
        }
        // Recargar opciones cuando cambian las columnas
        this.loadOptions();
        // Forzar re-renderizado
        this.$nextTick(() => {
          this.forceRecomputeCounter++;
        });
      },
      deep: true
    },
    loading: {
      handler(newVal) {
        this.loadingReactive.value = newVal;
      },
      immediate: true
    },
    firstLoad: {
      handler(newVal) {
        this.firstLoadReactive.value = newVal;
      },
      immediate: true
    }
  },

  created() {
    // Inicializar _displayMode desde la prop displayMode en created() para que esté disponible en provide()
    if (this.$props && this.$props.displayMode !== undefined) {
      this._displayMode = this.$props.displayMode;
      this.displayModeReactive.value = this._displayMode;
    }
    // Inicializar valores reactivos
    this.loadingReactive.value = this.loading;
    this.firstLoadReactive.value = this.firstLoad;
  },

  mounted() {
    const now = Math.floor(Date.now() / 1000);
    this.crudUuid = '' + now;
    this.isMobile = window.matchMedia("(max-width: 1024px)").matches;

    // Agregar un oyente de eventos para actualizar isMobile cuando cambia el tamaño de la pantalla
    window.addEventListener("resize", this.handleResize);

    if (this.useVuexORM) {
      if (this.vuexLocalforage) {
        this.item = {};
      } else {
        this.item = new this.model();
      }
      let itemVuexOrmDefault = {};
      const fields = this.model.fields();
      // Inicializa el objeto "itemDefault" con los valores por defecto
      const itemDefault = {};
      const primaryKey = this.model.primaryKey;

      for (const fieldName of Object.keys(fields)) {
        const field = fields[fieldName];
        if (fieldName === primaryKey) {
          continue; // Salta este campo
        }

        console.debug("debug field", field);

        if (field.type === 'relation') {
          // Si es una relación, inicializa como un objeto vacío.
          console.debug("Relation", field);

          if (this.vuexInitRelations == true || (Array.isArray(this.vuexInitRelations) && this.vuexInitRelations.includes(fieldName))) {
            itemDefault[fieldName] = {};
          }
        } else {
          console.debug("Field", field);

          if (typeof field.value === 'function') {
            itemDefault[fieldName] = field.value();
          } else if (field.value) {
            itemDefault[fieldName] = field.value;
          } else {
            itemDefault[fieldName] = null;
          }
        }
      }

      this.itemDefault = JSON.parse(JSON.stringify(itemDefault));
    } else {
      this.item = this.model;
      this.itemDefault = JSON.parse(JSON.stringify(this.item));
    }

    console.debug("crud mounted columns", this.columns);
    this.internalFilters = [];
    this.setupFilters();
    this.fetchItems();
    this.loadOptions();
  },

  beforeDestroy() {
    // Eliminar el oyente de eventos al destruir el componente para evitar pérdidas de memoria
    window.removeEventListener("resize", this.handleResize);
  },

  methods: {
    handleResize() {
      // Actualizar isMobile cuando cambia el tamaño de la pantalla
      this.isMobile = window.matchMedia("(max-width: 1024px)").matches;
    },

    rearrangeArray(originalArray, columns = 3) {
      const rearrangedArray = [];
      for (let i = 0; i < columns; i++) {
        for (let j = i; j < originalArray.length; j += columns) {
          rearrangedArray.push(originalArray[j]);
        }
      }
      return rearrangedArray;
    },

    clearItems() {
      this.items = [];
    },

    updateData(data, allowCreate = true) {
      // Convertir this.items a un mapa para acceso rápido por id
      const itemsMap = new Map(this.items.map(item => [item.id, item]));

      // Recorrer cada elemento de data
      data.forEach(newItem => {
        if (itemsMap.has(newItem.id)) {
          // Actualizar el item existente
          const existingItem = itemsMap.get(newItem.id);
          Object.assign(existingItem, newItem);
        } else if (allowCreate) {
          // Agregar el nuevo item si allowCreate es true
          this.items.push(newItem);
        }
      });

      // Convertir el mapa de vuelta a un array, si es necesario
      this.items = Array.from(itemsMap.values());
    },

    externalUpdate(itemsUpdate, addIfNotExist = true, key = 'id') {
      itemsUpdate.forEach(itemUpdate => {
        let itemInList = this.items.find(item => item[key] === itemUpdate[key]);
        if (itemInList) Object.assign(itemInList, itemUpdate);
        else {
          if (addIfNotExist) {
            this.items.push(itemUpdate);
          }
        }
      });
    },

    makePagination: function (data) {
      // Mutar propiedades existentes para mantener reactividad con provide/inject
      this.pagination.current_page = data.current_page ?? 1;
      this.pagination.last_page = data.last_page ?? 1;
      this.pagination.next_page_url = data.next_page_url ?? "";
      this.pagination.prev_page_url = data.prev_page_url ?? "";
      this.pagination.total = data.total ?? 0;
      this.pagination.per_page = data.per_page ?? 20;
    },
  }
};
