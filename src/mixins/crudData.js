import moment from "moment";

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
      displayModes: {
        MODE_TABLE: 1,
        MODE_CARDS: 2,
        MODE_CUSTOM: 3,
        MODE_KANBAN: 4
      },
      infiniteScrollKey: 1,
      optionsLoaded: false,
      isMobile: false,
      refreshing: false,
      fetchError: false,
      principalSort: false,
      exportFormat: 'JSON',
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
      return this.displayMode == this.displayModes.MODE_KANBAN;
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
          filter.push([colname, f.op, f.value]);
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
      let pagination = {
        current_page: data.current_page,
        last_page: data.last_page,
        next_page_url: data.next_page_url,
        prev_page_url: data.prev_page_url,
        total: data.total,
        per_page: data.per_page,
      };
      this.pagination = pagination;
    },
  }
};
