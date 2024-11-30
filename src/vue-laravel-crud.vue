<script>
import draggable from "vuedraggable";
import moment from "moment";
import InfiniteLoading from 'vue-infinite-loading';
import VueMasonry from 'vue-masonry-css'



export default /*#__PURE__*/ {
  name: "VueLaravelCrud",
  components: {
    draggable,
    InfiniteLoading,
    VueMasonry
  },
  data() {
    return {

      crudUuid:"",
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
  props: {
    modelName: String,

    title: String,
    model: {
      type: Object | Function,
      default() {
        return { id: 0 };
      },
    },
    models: {
      type: Array,
      default: () => [],
    },
    ajax: {
      type: Boolean,
      default: true,
    },
    useVuexORM: {
      type: Boolean,
      default: false,
    },
    vuexInitRelations: {
      type: Boolean | Array,
      default: true,
    },
    vuexLocalforage: {
      type: Boolean,
      default: false,
    },

    columns: {
      type: Array,

      default() {
        return [{ label: "Id", prop: "id", type: "number" }];
      },
    },
    filter: {
      type: Array,
      default: () => [],
    },
    enableFilters: {
      type: Boolean,
      default: false,
    },

    infiniteScroll: {
      type: Boolean,
      default: false,
    },
    sortable: {
      type: Boolean,
      default: false,
    },
    orderable: {
      type: Boolean,
      default: false,
    },
    validate: {
      type: Boolean,
      default: false,
    },
    orderProp: {
      type: String,
      default: "order",
    },
    createMultipart: {
      type: Boolean,
      default: false,
    },
    apiUrl: {
      type: String,
      default: "/api",
    },
    search: {
      type: String,
      default: "",
    },
    hideModalAfterSave: {
      type: Boolean,
      default: true,
    },
    hideModalAfterCreate: {
      type: Boolean,
      default: false,
    },
    hideModalAfterUpdate: {
      type: Boolean,
      default: false,
    },
    refreshAfterSave: {
      type: Boolean,
      default: true,
    },
    showPaginator: {
      type: Boolean,
      default: true,
    },
    showCreateBtn: {
      type: Boolean,
      default: true,
    },
    showSearch: {
      type: Boolean,
      default: true,
    },
    showPrincipalSortBtn: {
      type: Boolean,
      default: false,
    },

    showHeader: {
      type: Boolean,
      default: true,
    },
    showTitle: {
      type: Boolean,
      default: true,
    },
    limit: {
      type: Number,
      default: 20,
    },
    displayMode: {
      type: Number,
      default: 1,
    },
    displayModeToggler: {
      type: Boolean,
      default: false,
    },

    colXs: {
      default: 12,
      type: Number,
    },
    colSm: {
      default: 12,
      type: Number,
    },
    colMd: {
      default: 6,
      type: Number,
    },
    colLg: {
      default: 4,
      type: Number,
    },
    colXl: {
      default: 4,
      type: Number,
    },

    selectHover: {
      type: Boolean,
      default: false,
    },
    selectClick: {
      type: Boolean,
      default: false,
    },

    cardClass: {
      type: String,
      default: "",
    },

    listContainerClass: {
      type: String,
      default: "",
    },

    listItemClass: {
      type: String,
      default: "",
    },

    cardHideFooter: {
      type: Boolean,
      default: false,
    },

    messageRemoveConfirm: {
      type: String,
      default: "¿Esta seguro de borrar este elemento?",
    },
    messageRemoveBulkConfirm: {
      type: String,
      default: "¿Esta seguro de borrar los elementos seleccionados?",
    },
    messageRemove: {
      type: String,
      default: "BORRAR",
    },
    messageNew: {
      type: String,
      default: "Nuevo",
    },
    messageImport: {
      type: String,
      default: "Importar",
    },
    messageExport: {
      type: String,
      default: "Exportar",
    },
    messageEmptyResults: {
      type: String,
      default: "No se han encontrado resultados",
    },
    messageNoMore: {
      type: String,
      default: "No hay más elementos para mostrar.",
    },
    messageLoading: {
      type: String,
      default: "Cargando...",
    },
    messageSave: {
      type: String,
      default: "Guardar",
    },
    messageDefaultValidationError: {
      type: String,
      default: "Por favor controle el formulario, contiene errores.",
    },
    searchPlaceholder: {
      type: String,
      default: "Buscar...",
    },

    tableContainerClass: {
      type: String,
      default: "",
    },
    tableClass: {
      type: String,
      default: "",
    },
    grouped: {
      type: Boolean,
      default: false,
    },
    groupedAttribute: {
      type: String,
      default: "name",
    },
    groupedLabelPre: {
      type: String,
      default: "",
    },
    groupedLabelAfter: {
      type: String,
      default: "",
    },

    draggableGroup: {
      type: String,
      default: "people",
    },

    draggableOptions: {
      type: Object,
      default: function () {
        return { clone: false };
      }

    },
    masonryEnabled: {
      type: Boolean,
      default: false,
    },

    masonrySort: {
      type: Boolean,
      default: false,
    },
    masonryColumns: {
      type: Number,
      default: 3,
    },

    principalSortColumn: {
      type: String,
      default: "id",
    },

    bulkDelete: {
      type: Boolean,
      default: false,
    },

    showImport: {
      type: Boolean,
      default: false,
    },

    showExport: {
      type: Boolean,
      default: false,
    },
    markDirty: {
      type: Boolean,
      default: true,
    }
  },

  mounted() {
    const now = Math.floor(Date.now() / 1000);
    this.crudUuid = ''+now;
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
        
        if (field.type === 'relation') {
          // Si es una relación, inicializa como un objeto vacío.

          if (this.vuexInitRelations == true || (Array.isArray(this.vuexInitRelations) && this.vuexInitRelations.includes(fieldName))) {
            itemDefault[fieldName] = {};
          }

        } else {
          // Si es un campo, verifica si tiene un valor por defecto definido
          if (field.default !== undefined) {
            itemDefault[fieldName] = field.default;
          } else {
            // Si no tiene un valor por defecto definido, inicializa según su tipo
            switch (field.constructor.name) {
              case 'StringField':
                itemDefault[fieldName] = '';
                break;
              case 'NumberField':
                itemDefault[fieldName] = 0;
                break;
              // Agrega más casos según los tipos de campos que uses en tu modelo
              default:
                // Tipo de campo no reconocido, puedes manejarlo de acuerdo a tus necesidades
                itemDefault[fieldName] = null;
            }
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
        ...this.sortFilter
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

      }
    }
  },
  methods: {
    handleResize() {
      // Actualizar isMobile cuando cambia el tamaño de la pantalla
      this.isMobile = window.matchMedia("(max-width: 1024px)").matches;
    },

    togglePrincipalSort() {
      this.principalSort = !this.principalSort;
      setTimeout(() => {
        this.refresh();
      }, 1);
    },
    infiniteHandler($state) {


      const hasNextPage = (this.pagination.total > 0 || !this.firstLoad) && (!this.firstLoad || (this.pagination.current_page * this.pagination.per_page) <= this.pagination.total);
      console.debug("Has next page", hasNextPage, this.pagination);
      if (hasNextPage) {
        const page = this.pagination.current_page + 1;
        this.fetchItems(page, true).then(() => {
          console.debug("infinite handler then");
          $state.loaded();
        }).catch(error => {
          console.debug("infinite handler error", error);
          $state.error();
        });
      } else {
        $state.complete();
      }
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
    onDraggableAdded(event) {
      this.$emit("draggableAdded", event);
    },
    onDraggableChange(event) {
      this.$emit("draggableChange", event);
    },
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
    toggleDisplayMode() {
      if (this.displayMode == this.displayModes.MODE_TABLE)
        this.displayMode = this.displayModes.MODE_CARDS;
      else if (this.displayMode == this.displayModes.MODE_CARDS)
        this.displayMode = this.displayModes.MODE_TABLE;
    },
    onRowHover(item, itemIndex) {
      if (this.selectHover) {
        this.item = this.items[itemIndex];
        this.selectItem();
        this.onSelect();
      }
    },
    onRowClick(item, itemIndex) {
      if (this.selectClick) {
        this.item = this.items[itemIndex];
        this.selectItem();
        this.onSelect();
      }
    },
    onSort() {
      let event = {};
      let i =
        1 +
        (this.pagination.current_page * this.pagination.per_page -
          this.pagination.per_page);
      this.items.forEach((item, index) => {
        //console.debug(s, i);
        item[this.orderProp] = i;
        i++;
      });
      this.$emit("sort", event);
    },
    onCheckSelect(value, item) {
      console.debug("ON CHECK SELECT", value, item);
      if (value) {
        this.item = item;
        this.selectItem();
      } else {
        this.unSelectItem(item);
      }
      this.onSelect();
      console.debug("Selected Items", this.selectedItems);
    },
    toggleAll(value) {


      if (value) {
        this.selectedItems = this.items;

        this.selectedItems.forEach(
          (item) => item.selected = true
        );
      } else {
        this.selectedItems.forEach(
          (item) => item.selected = false
        );
        this.items.forEach(
          (item) => item.selected = false
        );
        this.selectedItems = [];

      }

      this.onSelect();

      console.debug("toggle all", this.selectedItems);
      this.$forceUpdate();
    },
    unSelectItem(item) {

      item.selected = false;

      this.selectedItems = this.selectedItems.filter(
        (e) => e.id != item.id
      );

    },
    selectItem() {
      let sitem = this.selectedItems.find((e) => e.id == this.item.id);
      if (sitem) {
        this.item.selected = false;
        this.selectedItems = this.selectedItems.filter(
          (e) => e.id != this.item.id
        );
      } else {
        this.item.selected = true;
        this.selectedItems.push(this.item);
      }
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
    getSelectedItems() {
      return this.selectedItems;
    },
    onSelect() {
      this.$emit("select", this.item);
      this.$emit("selectItems", this.selectedItems);
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
    showItem(id, itemIndex = null) {
      if (itemIndex == null) {
        let item = this.items.find((it) => it.id == id);
        this.item = item;
      } else {
        this.item = this.items[itemIndex];
      }
      this.onSelect();
      this.$bvModal.show("modal-show-item-" + this.modelName);
    },
    createItem() {
      if (this.useVuexORM) {

        if (this.vuexLocalforage) {
          this.item = JSON.parse(JSON.stringify(this.itemDefault));
        } else {
          this.item = new this.model(JSON.parse(JSON.stringify(this.itemDefault)));
        }

      } else {
        this.item = JSON.parse(JSON.stringify(this.itemDefault));
      }
      this.onSelect();
      this.$bvModal.show("modal-form-item-" + this.modelName);
    },
    updateItem(id, itemIndex = null) {
      if (itemIndex == null) {
        let item = this.items.find((it) => it.id == id);
        this.item = item;
      } else {
        this.item = this.items[itemIndex];
      }
      //console.debug(itemIndex);
      this.onSelect();
      this.$bvModal.show("modal-form-item-" + this.modelName);
    },

    refresh() {
      this.$emit("refresh", {});
     
      if (this.infiniteScroll) {
        this.pagination.current_page = 1;
        this.infiniteScrollKey++;
      }

      const fetchPromise = this.fetchItems(this.pagination.current_page);

      if (this.infiniteScroll && fetchPromise) {
        this.refreshing = true;
        fetchPromise.then(() => {
          const infiniteLoadingRef = this.$refs.infiniteLoading;
          if (infiniteLoadingRef) {
            infiniteLoadingRef.stateChanger.reset();
          } else {
            console.debug("infiniteLoadingRef not set");
          }
          this.refreshing = false;
        });
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
    async fetchItemsVuex(page = 1, concat = false) {
      this.loading = true;
      this.$emit("beforeFetch", {});

      let result;

      if (this.vuexLocalforage) {
        await this.model.$fetch();

      } else {
        this.model.deleteAll();

        result = await this.model.api().get('', {
          params: {
            page: page,
            limit: this.pagination.perPage,
            filters: JSON.stringify(this.finalFilters),
          }
        });


      }


      let itemsResult = this.model.query().withAll().get();
      //let itemsResult = result.entities[this.model.entity];

      if (itemsResult) {
        this.items = itemsResult;
      }
      console.debug("fetch page vuex ", itemsResult, page, this.items, result);
      this.loading = false;
      this.firstLoad = true;
    },
    fetchItemsLocal(){
      if (this.grouped) {
        this.groupItems(this.models);
      } else {
        this.items = this.models;
      }

      this.pagination.total = this.items.length;
      this.firstLoad = true;

    },
    fetchItems(page = 1, concat = false) {
   
      
      this.$emit("beforeFetch", {});
      if (this.useVuexORM) {
        return this.fetchItemsVuex(page, concat);
      }


      if (!this.ajax) {
        return this.fetchItemsLocal(page,concat);
      }

      this.loading = true;
      return axios
        .get(this.apiUrl + "/" + this.modelName, {
          params: {
            page: page,
            limit: this.limit,
            filters: JSON.stringify(this.finalFilters),
          },
        })
        .then((response) => {
          this.makePagination(response.data);
          let items = response.data.data;
          if (this.grouped) {
            this.groupItems(items, concat);
          } else {
            if (concat) {
              this.items = this.items.concat(items);
            } else {
              this.items = items;
            }
          }

          this.loading = false;
          this.firstLoad = true;
          this.$emit("afterFetch", {});
        })
        .catch((error) => {
          //console.debug(error);
          this.toastError(error);
          this.loading = false;
          this.firstLoad = true;
          this.fetchError = true;
        });
    },

    groupItems(items, concat = false) {
      let itemswithgroup = [];
      let lastcomparevalue = null;
      let compareattr = this.groupedAttribute;
      let groupLabelPre = this.groupedLabelPre;
      let groupLabelAfter = this.groupedLabelAfter;
      items.forEach((item, key) => {
        if (Array.isArray(item)) {
          itemswithgroup.push({
            label: groupLabelPre + key + groupLabelAfter,
            group: true,
          });

          item.forEach((sitem) => {
            itemswithgroup.push(sitem);
          });
        } else {
          if (lastcomparevalue != item[compareattr]) {
            lastcomparevalue = item[compareattr];
            itemswithgroup.push({
              crudgrouplabel: groupLabelPre + lastcomparevalue + groupLabelAfter,
              crudgroup: true,
            });
          }
          itemswithgroup.push(item);
        }
      });
      if (concat) {
        this.items = this.items.concat(itemswithgroup);
      } else {
        this.items = itemswithgroup;
      }
    },
    removeItem(id, index) {
      this.$bvModal
        .msgBoxConfirm(this.messageRemoveConfirm, {
          size: "sm",
          buttonSize: "sm",
          okVariant: "danger",
          okTitle: this.messageRemove,
          cancelTitle: "NO",
          centered: true,
        })
        .then((value) => {
          if (value) {
            this.deleteItem(id, index);
          }
        })
        .catch((error) => {
          this.toastError(error);
          this.loading = false;
        });
    },

    confirmBulkDelete() {
      this.$bvModal
        .msgBoxConfirm(this.messageRemoveBulkConfirm, {
          size: "sm",
          buttonSize: "sm",
          okVariant: "danger",
          okTitle: this.messageRemove,
          cancelTitle: "NO",
          centered: true,
        })
        .then((value) => {
          if (value) {
            this.deleteItemBulk();
          }
        })
        .catch((error) => {
          this.toastError(error);
          this.loading = false;
        });
    },
    deleteItemBulk() {
      if (this.useVuexORM) {
        return this.deleteItemBulkVuex();
      }

      if (!this.ajax) {
        return this.deleteItemBulkLocal();
      }


      let ids = this.selectedItems.map(it => it.id);

      this.loading = true;
      axios
        .delete(this.apiUrl + "/" + this.modelName + "/bulk-destroy", { params: { ids: ids }, })
        .then((response) => {
          this.items = this.items.filter(it => !ids.includes(it.id));
          this.toastSuccess("Elemento/s eliminado.");
          this.$emit("itemDeleted", {});
          this.loading = false;
        })
        .catch((error) => {
          this.toastError(error);
          this.loading = false;
        });
    },
    async deleteItemBulkLocal() {
      let ids = this.selectedItems.map(it => it.id);
      this.items = this.items.filter(it => !ids.includes(it.id));
      this.item = null;
      this.toastSuccess("Elemento Eliminado");
      this.$emit("itemDeleted", {});
      this.loading = false;
    },
    async deleteItemBulkVuex() {

      let ids = this.selectedItems.map(it => it.id);


      if (this.vuexLocalforage) {
        await this.model.$delete(ids);

      } else {
        let result = await this.model.api().delete('/bulk-destroy' , {
          params: { ids: ids},
          delete: ids
        });

        console.debug("delete item vuex", result);
        let responseStatus = result.response.status;

        if (result.response.data.error) {
          this.toastError(result.response.data.error);
          this.loading = false;
          return;
        }
      }
      
      this.toastSuccess("Elemento eliminados.");
    },
    deleteItem(id, index) {

      if (this.useVuexORM) {
        return this.deleteItemVuex(id, index);
      }

      if (!this.ajax) {
        return this.deleteItemLocal(id, index);
      }

      this.loading = true;
      axios
        .delete(this.apiUrl + "/" + this.modelName + "/" + id)
        .then((response) => {
          this.items.splice(index, 1);
          this.toastSuccess("Elemento eliminado.");
          this.$emit("itemDeleted", {});
          this.loading = false;
        })
        .catch((error) => {
          this.toastError(error);
          this.loading = false;
        });
    },


    async deleteItemLocal(id, index) {
      if (id || index) {
        let itemIndex;

        if (id) {
          itemIndex = this.items.findIndex((item) => item.id == this.item.id);
        } else {
          itemIndex = index;
        }

        // Assuming this.items is an array
        this.items.splice(itemIndex, 1);
        this.item = null;
        this.toastSuccess("Elemento Eliminado");
        this.$emit("itemDeleted", {});

      } else {
        // Handle the case where there's no item.id or item.index
        console.error("Cannot delete item without ID or index");
        // You might want to show an error message or handle it in a way that fits your application.
      }

      this.loading = false;
    },
    async deleteItemVuex(id, index) {


      if (this.vuexLocalforage) {
        await this.model.$delete(id);

      } else {
        let result = await this.model.api().delete('/' + id, {
          delete: 1
        });

        console.debug("delete item vuex", result);
        let responseStatus = result.response.status;

        if (result.response.data.error) {
          this.toastError(result.response.data.error);
          this.loading = false;
          return;
        }
      }



      this.toastSuccess("Elemento eliminado.");
    },
    saveSort() {
      if (this.orderable) {
        this.loading = true;
        let order = [];
        this.items.forEach((v, k) => {
          order.push({ id: v.id, order: v[this.orderProp] });
        });

        if (!this.ajax) {
          return;
        }
        axios
          .post(this.apiUrl + "/" + this.modelName + "/sort", {
            order: order,
          })
          .then((response) => {
            let data = response.data;
            this.toastSuccess("Orden Actualizado");
            if (this.refreshAfterSave) this.refresh();
            this.loading = false;
          })
          .catch((error) => {
            //console.debug(error);
            this.toastError(error);
            this.loading = false;
          });
      }
    },

    showExportModal(){
      this.$refs["modal-export"].show();
    },


    exportItems() {
      if (this.useVuexORM) {
        return;
      }

      if (!this.ajax) {
        return;
      }

      let exportItems = true;
      let params;
      let ids = this.selectedItems.map(it => it.id);
      if (ids.length) {
        params = { ids: ids, exportItems: exportItems, };
      } else {
        params = { filters: JSON.stringify(this.finalFilters), exportItems: exportItems, };
      }
      params.format = this.exportFormat;
      this.loading = true;
      axios
        .get(this.apiUrl + "/" + this.modelName + "/export", { params: params, responseType: "blob", })
        .then((response) => {
          this.downloadBlobResponse(response);
          this.loading = false;
        })
        .catch((error) => {
          this.toastError(error);
          this.loading = false;
        });
    },


    showImportModal(){
      this.$refs["modal-import"].show();
    },
    importItems() {
      let formData = new FormData();
      formData.append("file", this.fileImport);
      axios
        .post(this.apiUrl + "/" + this.modelName + "/import", formData, {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        })
        .then((response) => {
          if (response && response.data && response.data.success == true) {
            this.$refs["modal-import"].hide();
            this.toastSuccess("Datos Importados con Éxito");
            this.refresh();
          } else {
            this.toastError("No se pudo importar los datos.");
          }
        })
        .catch((error) => {
          console.error(error);
          this.toastError(error);

        });
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
    },
    async saveItemVuex(event = null) {
      console.debug("save item 1", this.item);
      let result;
      let create = false;


      if (this.vuexLocalforage) {

        if(this.markDirty){
          this.item.dirty = true;
        }

        if (this.item.id) {
         
          result = await this.model.$create({ data:this.item});
          console.debug("save item 4", this.item,result);
          create = false;
        } else {

          result = await this.model.$create({ data:this.item});
          console.debug("save item 5", this.item,result);
          create = true;
        }

      } else {

        let jsondata = this.item.$toJson();
        console.debug("save item 2", this.item, jsondata);
        if (this.item.id) {
          result = await this.model.api().put('/' + this.item.id, jsondata);
          create = false;
        } else {
          result = await this.model.api().post('', jsondata);
          create = true;
        }


        let responseStatus = result.response.status;
        if (result.response.data.error) {
          this.toastError(result.response.data.error);
          this.loading = false;
          return;
          //throw new Error('Something is wrong.')
        }

        result.save();
      }


      if (this.refreshAfterSave) this.refresh();
      this.loading = false;
      this.toastSuccess("Elemento Modificado");

      if (this.hideModalAfterSave || ((create && this.hideModalAfterCreate) || (!create && this.hideModalAfterUpdate))) {
        this.$bvModal.hide("modal-form-item-" + this.modelName);
      }

    },

    async saveItemLocal(event = null) {

      const itemSave = JSON.parse(JSON.stringify(this.item));
      if (this.item.id || this.item.index) {

        let itemIndex;

        if (this.item.id) {
          itemIndex = this.items.findIndex(
            (item) => item.id == this.item.id
          );
        } else {

          itemIndex = this.items.findIndex(
            (item) => item.index == this.item.index
          );
        }

        this.items[itemIndex] = itemSave;
        if (this.hideModalAfterSave || this.hideModalAfterUpdate) {
          this.$bvModal.hide("modal-form-item-" + this.modelName);
        }
      } else {

        itemSave.index = this.items.length + 1;
        this.items.push(itemSave);
        if (this.hideModalAfterSave || this.hideModalAfterCreate) {
          this.$bvModal.hide("modal-form-item-" + this.modelName);
        }
      }
      this.toastSuccess("Elemento Modificado");
      this.loading = false;

    },
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
    async saveItem(event = null) {
      this.loading = true;
      if (this.validate) {
        let validation_result = true;
        let validation_error_message = this.messageDefaultValidationError;
        if (!validation_result) {
          this.toastError(validation_error_message);
          return;
        }
      } else {
        if (event) event.preventDefault();
      }

      if (this.useVuexORM) {
        return this.saveItemVuex(event);
      }

      if (!this.ajax) {
        return this.saveItemLocal(event);
      }
      if (this.item.id) {
        axios
          .put(
            this.apiUrl + "/" + this.modelName + "/" + this.item.id,
            this.item
          )
          .then((response) => {
            if (this.hideModalAfterSave || this.hideModalAfterUpdate) {
              this.$bvModal.hide("modal-form-item-" + this.modelName);
            }
            let itemSv = response.data;
            let itemIndex = this.items.findIndex(
              (item) => item.id == this.item.id
            );
            this.items[itemIndex] = itemSv;
            this.item = itemSv;
            this.loading = false;
            if (this.refreshAfterSave) this.refresh();
            this.toastSuccess("Elemento Modificado");
            this.$emit("itemSaved", { item: this.item });
            this.$emit("itemUpdated", { item: this.item });
          })
          .catch((error) => {
            this.toastError(error);
            this.loading = false;
          });
      } else {
        if (this.createMultipart) {
          const formData = new FormData();
          Object.keys(this.item).forEach((key) => {
            if (this.item[key][0] && this.item[key][0].name) {
              let files = this.item[key];
              for (var x = 0; x < files.length; x++) {
                formData.append(
                  key + "[]",
                  this.item[key][x],
                  this.item[key][x].name
                );
              }
            } else formData.append(key, this.item[key]);
          });

          axios
            .post(this.apiUrl + "/" + this.modelName, formData)
            .then((response) => {
              this.loading = false;
              if (this.hideModalAfterSave || this.hideModalAfterCreate) {
                this.$bvModal.hide("modal-form-item-" + this.modelName);
              }
              if (response.data.success) {
                if (response.data.message) {
                  this.toastSuccess(response.data.message);
                }
                return;
              }
              let itemSv = response.data;
              this.items.push(itemSv);
              this.item = itemSv;
              if (this.refreshAfterSave) this.refresh();
              this.toastSuccess("Elemento Creado");
              this.$emit("itemSaved", { item: this.item });
              this.$emit("itemCreated", { item: this.item });
            })
            .catch((error) => {
              this.toastError(error);
              this.loading = false;
            });
        } else {
          axios
            .post(this.apiUrl + "/" + this.modelName, this.item)
            .then((response) => {
              this.loading = false;
              if (this.hideModalAfterSave || this.hideModalAfterUpdate) {
                this.$bvModal.hide("modal-form-item-" + this.modelName);
              }
              if (response.data.success) {
                if (response.data.message) {
                  this.toastSuccess(response.data.message);
                }
                return;
              }

              let itemSv = response.data;
              this.items.push(itemSv);
              this.item = itemSv;
              if (this.refreshAfterSave) this.refresh();
              this.toastSuccess("Elemento Creado");
              this.$emit("itemSaved", { item: this.item });
              this.$emit("itemCreated", { item: this.item });
            })
            .catch((error) => {
              this.toastError(error);
              this.loading = false;
            });
        }
      }
      if (event) event.preventDefault();
    },
    clearItems() {
      this.items = [];
    },

    toastError(error) {
      let error_message = "Ha ocurrido un error";

      if (typeof error === "string") {
        error_message = error;
      } else if (error.response) {
        // handle API errors
        if (error.response.status === 401) {
          error_message = "No estás autorizado para realizar esta acción";
        } else if (error.response.status === 404) {
          error_message = "El recurso solicitado no se encontró";
        } else if (error.response.status >= 400 && error.response.status < 500) {
          error_message = "Hubo un problema con la solicitud realizada";
        } else if (error.response.status >= 500) {
          error_message = "El servidor no pudo procesar la solicitud";
        }

        if (error.response.data) {
          if (typeof error.response.data === "object") {
            if (error.response.data.errors) {
              let errors = error.response.data.errors;
              this.responseErrors = errors;
              error_message = Object.values(errors)[0][0];
            } else if (error.response.data.message) {
              error_message = error.response.data.message;
            }
          } else if (typeof error.response.data === "string") {
            error_message = error.response.data;
          }
        }
      } else if (error.request) {
        // handle network errors
        error_message = "No se pudo conectar con el servidor. Verifique su conexión a Internet.";
      } else if (error.message) {
        // handle other errors
        error_message = error.message;
      }



      this.$bvToast.toast(error_message, {
        title: `Error`,
        toaster: "b-toaster-bottom-right",
        variant: "danger",
        solid: true,
        appendToast: true,
      });
    },
    toastSuccess(message) {
      this.$bvToast.toast(message, {
        title: `Listo`,
        toaster: "b-toaster-bottom-right",
        variant: "success",
        solid: true,
        appendToast: true,
      });
    },
    downloadBlobResponse(response, extension = null) {
      const url = window.URL.createObjectURL(new Blob([response.data]));
      const link = document.createElement("a");
      link.href = url;

      let contentdisposition = response.headers['content-disposition'];
      let filename = "Export";


      if (contentdisposition) {
        filename = contentdisposition.split('filename=')[1].split('.')[0];
        filename = filename.replace('_', '');
        filename = filename.replace('"', '');
        extension = contentdisposition.split('.')[1].split(';')[0];
        extension = extension.replace('_', '');
        extension = extension.replace('"', '');
      }


      console.debug("DOWNLOAD ", filename, extension);
      link.setAttribute("download", filename + '.' + extension);
      document.body.appendChild(link);
      link.click();
    },
    onChangeFilter(event) {
      this.forceRecomputeCounter++;
      console.debug("Filters debug ", this.finalFilters, this.internalFilter, this.internalFilters, this.filter, this.filters);
      setTimeout(() => {
        this.refresh();
      }, 1);
    },
    onPaginationChange(page) {
      this.fetchItems(page);
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
  },

  beforeDestroy() {
    // Eliminar el oyente de eventos al destruir el componente para evitar pérdidas de memoria
    window.removeEventListener("resize", this.handleResize);
  },
};
</script>

<template>
  <div class="crud">
    <div class="crud-header" v-if="showHeader">
      <h4 class="crud-title" v-if="showTitle">{{ title }}</h4>
      <b-sidebar v-model="filterSidebarOpen" title="Filtrar" right shadow>
        <slot name="sidebarFilters" v-bind:createItem="createItem" v-bind:toggleDisplayMode="toggleDisplayMode"
          v-bind:loading="loading" v-bind:isColumnHasFilter="isColumnHasFilter" v-bind:setFilter="setFilter">
          <div class="px-3 py-2">
            <div v-for="(column, indexc) in columns" :key="indexc">
              <div v-if="isColumnHasFilter(column)">
                <slot :name="'sidebar-filter-' + column.prop" v-bind:column="column" v-bind:filter="filter"
                  v-bind:internalFilterByProp="internalFilterByProp" v-if="internalFilterByProp(column.prop)">
                  <div class="form-group" v-if="column.type == 'boolean'">
                    <label>{{ column.label }}</label>

                    <select class="form-control" v-model="internalFilterByProp(column.prop).value"
                      @change="onChangeFilter($event)">
                      <option value=""></option>
                      <option value="1">Sí</option>
                      <option value="0">No</option>
                    </select>
                  </div>
                  <div class="form-group" v-else-if="column.type == 'date'">
                    <div class="row">
                      <div class="col-6">
                        <b-form-datepicker v-model="internalFilterByProp(column.prop + '_from').value
                          " today-button reset-button close-button locale="es"></b-form-datepicker>
                      </div>
                      <div class="col-6">
                        <b-form-datepicker v-model="internalFilterByProp(column.prop + '_to').value
                          " today-button reset-button close-button locale="es"></b-form-datepicker>
                      </div>
                    </div>
                  </div>

                  <div class="form-group" v-else-if="column.type == 'state'">
                    <label>{{ column.label }}</label>

                    <select class="form-control" v-model="internalFilterByProp(column.prop).value"
                      @change="onChangeFilter($event)" v-if="optionsLoaded">
                      <option value=""></option>
                      <option :value="option.id ? option.id : option.value" v-for="option in column.options"
                        :key="option.id ? option.id : option.value">
                        {{
                          option.text
                            ? option.text
                            : option.label
                              ? option.label
                              : ""
                        }}
                      </option>
                    </select>
                  </div>

                  <div class="form-group" v-else-if="column.type == 'array'">
                    <label>{{ column.label }}</label>

                    <select class="form-control" v-model="internalFilterByProp(column.prop).value"
                      @change="onChangeFilter($event)" v-if="optionsLoaded">
                      <option value=""></option>
                      <template v-if="column.options">
                        <option :value="option.id ? option.id : option.value" v-for="option in column.options"
                          :key="option.id ? option.id : option.value">
                          {{
                            option.text
                              ? option.text
                              : option.label
                                ? option.label
                                : ""
                          }}
                        </option>
                      </template>
                    </select>
                  </div>


                  <div class="form-group" v-else>
                    <label>{{ column.label }}</label>

                    <input class="form-control" v-model.lazy="internalFilterByProp(column.prop).value"
                      @change="onChangeFilter($event)" />
                  </div>
                </slot>
              </div>
            </div>

            <div class="mt-3 d-flex justify-content-center">
              <button class="btn btn-light" @click="resetFilters()">
                Reset
              </button>
              <button class="btn btn-info" @click="onChangeFilter($event)">
                Filtrar
              </button>
            </div>
          </div>
        </slot>
      </b-sidebar>

      <div class="table-options">
        <b-button-group class="mr-1">
          <slot name="tableActions" v-bind:createItem="createItem" v-bind:toggleDisplayMode="toggleDisplayMode"
            v-bind:loading="loading">
            <slot name="tableActionsPrepend" v-bind:loading="loading"> </slot>

            <b-button variant="info" @click="showImportModal()" v-if="showImport">
              <b-icon-cloud-upload></b-icon-cloud-upload>{{ messageImport }}
            </b-button>
            <b-button variant="info" @click="showExportModal()" v-if="showExport">
              <b-icon-cloud-download></b-icon-cloud-download>{{ messageExport }}
            </b-button>
            <b-button variant="info" v-if="showPrincipalSortBtn" @click="togglePrincipalSort()" :disabled="loading">
              <b-icon-sort-numeric-down v-if="principalSort"></b-icon-sort-numeric-down>
              <b-icon-sort-numeric-up v-else></b-icon-sort-numeric-up>
            </b-button>
            <b-button variant="danger" @click="confirmBulkDelete()"
              v-if="bulkDelete"><b-icon-trash></b-icon-trash></b-button>
            <b-button variant="success" v-if="showCreateBtn" @click="createItem()" :disabled="loading">
              <b-icon-plus></b-icon-plus>{{ messageNew }}
            </b-button>
            <b-button variant="info" v-if="enableFilters" @click="toggleFilters()">Filtros</b-button>
            <b-button variant="info" @click="refresh()"><b-icon-arrow-clockwise></b-icon-arrow-clockwise></b-button>
            <b-button variant="info" @click="toggleDisplayMode()" :disabled="loading" v-if="displayModeToggler">
              <b-icon-card-list v-if="displayMode == displayModes.MODE_TABLE"></b-icon-card-list>
              <b-icon-table v-if="displayMode == displayModes.MODE_CARDS"></b-icon-table>
            </b-button>

            <div class="crud-search m-0" v-if="showSearch">
              <b-input-group>
                <b-input-group-prepend>
                  <b-button variant="info" @click="displaySearch = !displaySearch"
                    :class="{ open: displaySearch }"><b-icon-search></b-icon-search></b-button>
                </b-input-group-prepend>
                <b-form-input v-if="displaySearch" v-model="search" class="pl-2" type="search" required
                  :placeholder="searchPlaceholder" debounce="500"></b-form-input>
              </b-input-group>

              <slot name="tableActionsAppend" v-bind:loading="loading"> </slot>
            </div>
          </slot>
        </b-button-group>
      </div>
    </div>

    <div :class="['table-responsive', tableContainerClass]" v-if="displayMode == displayModes.MODE_TABLE">
      <table :class="['table table-hover table-striped w-100', tableClass]">
        <thead class="thead-light">
          <tr>
            <slot name="rowHead">
              <th v-for="(column, indexc) in columns" :key="indexc"
                :style="{ width: column.width ? column.width : 'inherit' }" scope="col">
                <slot :name="'filter-' + column.prop" v-bind:column="column" v-bind:filter="filter"
                  v-bind:internalFilterByProp="internalFilterByProp" v-if="enableFilters &&
                    filtersVisible &&
                    isColumnHasFilter(column) &&
                    internalFilterByProp(column.prop)
                  ">

                  <div class="form-group">
                    <select v-if="column.type == 'boolean'" class="form-control form-control-md p-2"
                      v-model="internalFilterByProp(column.prop).value" @change="onChangeFilter($event)">
                      <option value="">{{ column.label }}</option>
                      <option value="1">Sí</option>
                      <option value="0">No</option>
                    </select>

                    <div class="row" v-else-if="column.type == 'date'">
                      <div class="col-6">
                        <b-form-datepicker v-model="internalFilterByProp(column.prop + '_from').value
                          " today-button reset-button close-button locale="es"
                          class="form-control-md p-2"></b-form-datepicker>
                      </div>
                      <div class="col-6">
                        <b-form-datepicker v-model="internalFilterByProp(column.prop + '_to').value
                          " today-button reset-button close-button locale="es"
                          class="form-control-md p-2"></b-form-datepicker>
                      </div>
                    </div>

                    <select v-else-if="column.type == 'state' && optionsLoaded" class="form-control form-control-md p-2"
                      v-model="internalFilterByProp(column.prop).value" @change="onChangeFilter($event)"
                      :placeholder="column.label">
                      <option value="">{{ column.label }}</option>
                      <option :value="option.id" v-for="(option, indexo) in column.options" :key="indexo">
                        {{
                          option.text
                            ? option.text
                            : option.label
                              ? option.label
                              : ""
                        }}
                      </option>
                    </select>

                    <select v-else-if="column.type == 'array' && optionsLoaded" class="form-control form-control-md p-2"
                      v-model="internalFilterByProp(column.prop).value" @change="onChangeFilter($event)"
                      :placeholder="column.label">
                      <option value="">{{ column.label }}</option>
                      <option :value="option.id" v-for="(option, indexo) in column.options" :key="indexo">
                        {{
                          option.text
                            ? option.text
                            : option.label
                              ? option.label
                              : ""
                        }}
                      </option>
                    </select>

                    <b-form-checkbox v-else-if="column.type == 'checkbox'" name="select-all"
                      @change="toggleAll($event)">
                    </b-form-checkbox>

                    <b-form-checkbox v-else-if="column.type == 'select'" name="select-all" @change="toggleAll($event)">
                    </b-form-checkbox>

                    <input v-else class="form-control form-control-md p-2"
                      v-model="internalFilterByProp(column.prop).value" :placeholder="column.label"
                      @change="onChangeFilter($event)" />

                  </div>
                </slot>
                <span v-else-if="column.type == 'select'">
                  <b-form-checkbox name="select-all" @change="toggleAll($event)"></b-form-checkbox>
                </span>
                <span v-else>{{ column.label }}</span>


                <span
                  v-if="sortable && column.type != 'select' && column.type != 'checkbox' && internalFilterByProp(column.prop + '_sort')"
                  class="sort-filter" @click="toggleSortFilter(column)"><b-icon-sort-down
                    v-if="!internalFilterByProp(column.prop + '_sort').value"></b-icon-sort-down><b-icon-sort-up
                    v-if="internalFilterByProp(column.prop + '_sort').value == 'ASC'"></b-icon-sort-up>
                  <b-icon-sort-down
                    v-if="internalFilterByProp(column.prop + '_sort').value == 'DESC'"></b-icon-sort-down>
                </span>
              </th>
            </slot>
          </tr>
        </thead>

        <draggable v-model="items" :group="draggableGroup" tag="tbody" :draggable="orderable ? '.item' : '.none'"
          @start="drag = true" @end="drag = false" @sort="onSort()" @add="onDraggableAdded($event)"
          @change="onDraggableChange($event)" :options="draggableOptions">
          <tr v-for="(item, index) in itemsList" v-bind:key="index" @mouseover="onRowHover(item, index)"
            @click="onRowClick(item, index)" class="item">

            <th :colspan="columns.length" v-if="grouped && item.crudgroup">
              <span>{{ item.crudgrouplabel }}</span>
            </th>


            <slot name="row" v-bind:item="item" v-else>
              <td v-for="(column, indexc) in columns" :key="indexc" :scope="column.prop == 'id' ? 'row' : ''">
                <slot :name="'cell-' + column.prop" v-bind:item="item" v-bind:index="index" v-bind:itemindex="index"
                  v-bind:columnindex="indexc">
                  <span v-if="column.type == 'boolean'">
                    <b-badge variant="success" v-if="itemValue(column, item) == 'true' ||
                      itemValue(column, item) == 1 ||
                      itemValue(column, item) == '1'
                    "><b-icon-check-circle></b-icon-check-circle></b-badge>
                    <b-badge variant="danger" v-if="!itemValue(column, item) ||
                      itemValue(column, item) == '0' ||
                      itemValue(column, item) == 'false'
                    "><b-icon-x-circle></b-icon-x-circle></b-badge>
                  </span>
                  <span v-else-if="column.type == 'date'">
                    {{
                      itemValue(column, item)
                        ? moment(itemValue(column, item)).format(
                          column.format ? column.format : 'L LT'
                        )
                        : itemValue(column, item)
                    }}
                  </span>
                  <span v-else-if="column.type == 'select'">
                    <b-form-checkbox v-model="item.selected" @change="onCheckSelect($event, item)">
                    </b-form-checkbox>
                  </span>
                  <span v-else-if="column.type == 'state' && optionsLoaded">
                    {{
                      getStateValue(itemValue(column, item), column.options)
                    }}
                  </span>
                  <span v-else-if="column.type == 'array' && optionsLoaded">
                    {{
                      getArrayValue(
                        itemValue(column, item),
                        column.displayProp,
                        column.options
                      )
                    }}
                  </span>
                  <span v-else>
                    {{ itemValue(column, item) }}
                  </span>
                </slot>

                <b-button-group v-if="column.type == 'actions'">
                  <slot name="rowAction" v-bind:item="item" v-bind:index="index" v-bind:showItem="showItem"
                    v-bind:updateItem="updateItem" v-bind:removeItem="removeItem">
                    <b-button variant="primary" @click="showItem(item.id, index)">
                      <b-icon-eye></b-icon-eye>
                    </b-button>
                    <b-button variant="secondary" @click="updateItem(item.id, index)">
                      <b-icon-pencil></b-icon-pencil>
                    </b-button>
                    <b-button variant="danger" @click="removeItem(item.id, index)">
                      <b-icon-trash></b-icon-trash>
                    </b-button>
                  </slot>
                </b-button-group>
              </td>
            </slot>

          </tr>

        </draggable>

      </table>
      <p v-if="!loading && items && items.length == 0 && !infiniteScroll" class="p-3">
        {{ messageEmptyResults }}
      </p>
    </div>

    <div v-if="displayMode == displayModes.MODE_CARDS">
      <draggable v-model="items" :group="draggableGroup" :draggable="orderable ? '.item' : '.none'" @start="drag = true"
        @end="drag = false" @sort="onSort()" @add="onDraggableAdded($event)" @change="onDraggableChange($event)"
        :options="draggableOptions">
        <masonry
          :cols="{ default: 12 / colLg, 1400: 12 / colXl, 1200: 12 / colLg, 1000: 12 / colMd, 700: 12 / colSm, 400: 12 / colXs }"
          :gutter="{ default: '15px', 700: '15px' }">

          <div v-for="(item, index) in itemsList" v-bind:key="index" class="item">
            <b-card :title="item.title" tag="article" class="mb-2 card-crud" :class="cardClass"
              :hideFooter="cardHideFooter">
              <slot name="card" v-bind:item="item">
                <div v-for="(column, indexc) in columns" :key="indexc">
                  <b-card-text v-if="column.type != 'actions'">{{ column.label }}:
                    <slot :name="'cell-' + column.prop" v-bind:item="item" v-bind:index="index" v-bind:itemindex="index"
                      v-bind:columnindex="indexc">
                      <span v-if="column.type == 'boolean'">
                        <b-badge variant="success" v-if="itemValue(column, item) == 'true' ||
                          itemValue(column, item) == 1 ||
                          itemValue(column, item) == '1'
                        "><b-icon-check-circle></b-icon-check-circle></b-badge>
                        <b-badge variant="danger" v-if="!itemValue(column, item) ||
                          itemValue(column, item) == '0' ||
                          itemValue(column, item) == 'false'
                        "><b-icon-x-circle></b-icon-x-circle></b-badge>
                      </span>
                      <span v-else-if="column.type == 'date'">
                        {{ itemValue(column, item) }}
                      </span>
                      <span v-else-if="column.type == 'state'">
                        {{
                          getStateValue(itemValue(column, item), column.options)
                        }}
                      </span>
                      <span v-else-if="column.type == 'array'">
                        {{
                          getArrayValue(
                            itemValue(column, item),
                            column.displayProp,
                            column.options
                          )
                        }}
                      </span>
                      <span v-else>
                        {{ itemValue(column, item) }}
                      </span>
                    </slot>
                  </b-card-text>
                </div>
              </slot>

              <template v-slot:footer>
                <b-button-group>
                  <slot name="rowAction" v-bind:item="item" v-bind:index="index" v-bind:showItem="showItem"
                    v-bind:updateItem="updateItem" v-bind:removeItem="removeItem">
                    <b-button variant="primary" @click="showItem(item.id, index)">
                      <b-icon-eye></b-icon-eye>
                    </b-button>
                    <b-button variant="secondary" @click="updateItem(item.id, index)">
                      <b-icon-pencil></b-icon-pencil>
                    </b-button>
                    <b-button variant="danger" @click="removeItem(item.id, index)">
                      <b-icon-trash></b-icon-trash>
                    </b-button>
                  </slot>
                </b-button-group>
              </template>
            </b-card>
          </div>
        </masonry>
      </draggable>

      <p v-if="!loading && items && items.length == 0 && !infiniteScroll" class="p-3">
        {{ messageEmptyResults }}
      </p>

    </div>

    <div v-if="displayMode == displayModes.MODE_CUSTOM">
      <div :class="listContainerClass">
        <p v-if="!loading && items && items.length == 0 && !infiniteScroll" class="p-3">
          {{ messageEmptyResults }}
        </p>
        <div :class="listItemClass" v-for="(item, index) in itemsList" v-bind:key="index">
          <slot name="card" v-bind:item="item"> </slot>
        </div>
      </div>
    </div>
    <b-overlay :show="loading" rounded="sm"></b-overlay>
    <infinite-loading ref="infiniteLoading" @infinite="infiniteHandler" v-if="infiniteScroll"
      :forceUseInfiniteWrapper="true" :key="infiniteScrollKey">
      <div slot="spinner">
        <div class="text-center">{{ messageLoading }}</div>
      </div>
      <div slot="no-more">
        <div class="text-center" v-if="!loading">{{ messageNoMore }}</div>
      </div>
      <div slot="no-results">
        <div class="text-center" v-if="!loading">{{ items.length == 0 ? messageEmptyResults : messageNoMore }}</div>
      </div>
    </infinite-loading>
    <div class="paginator-data" v-if="!infiniteScroll">
      Filas: {{ pagination.total }} | xPág: {{ pagination.per_page }} | Pág: {{ pagination.current_page }} |
      Seleccionados:
      {{
        selectedItems.length }}
    </div>
    <div class="crud-paginator" v-if="!infiniteScroll">
      <b-pagination v-if="showPaginator" v-model="pagination.current_page" :total-rows="pagination.total"
        :per-page="pagination.per_page" @change="onPaginationChange($event)"></b-pagination>
    </div>
    <b-modal :id="'modal-form-item-' + modelName" hide-footer size="xl" :title="title" no-close-on-backdrop>
      <b-overlay :show="loading" rounded="sm">
        <template v-if="validate">
          <form @submit="saveItem">
            <slot name="form" v-bind:item="item" v-if="item">
              <b-form-group label="Nombre:" description="Nombre ">
                <b-form-input v-model="item.title" type="text" required placeholder="Nombre"></b-form-input>
              </b-form-group>
            </slot>
            <b-button block type="submit" variant="success" :disabled="loading">
              <b-spinner small v-if="loading"></b-spinner>{{ messageSave }}
            </b-button>
          </form>
        </template>
        <template v-if="!validate">
          <slot name="form" v-bind:item="item" v-if="item">
            <b-form-group :label="key" v-for="(value, key) in item" :key="key">
              <b-form-input v-model="item[key]" type="text" required></b-form-input>
            </b-form-group>
          </slot>
          <b-button block type="submit" variant="success" :disabled="loading" @click="saveItem()">
            <b-spinner small v-if="loading"></b-spinner>{{ messageSave }}
          </b-button>
        </template>
      </b-overlay>
    </b-modal>
    <b-modal :id="'modal-show-item-' + modelName" hide-footer size="xl" :title="title" no-close-on-backdrop>
      <slot name="show" v-bind:item="item" v-if="item">
        <b-list-group>
          <b-list-group-item v-for="(value, key) in item" :key="key">
            <b-row class="w-100">
              <b-col cols="4" class="font-weight-bold">{{ key }}</b-col>
              <b-col cols="8">{{ JSON.stringify(value) }}</b-col>
            </b-row>
          </b-list-group-item>
        </b-list-group>
      </slot>
    </b-modal>


    <b-modal ref="modal-import" title="Importar" hide-footer v-if="showImport">
      <slot name="import" v-bind:item="item" v-if="item">
        <b-overlay :show="loading" rounded="sm">
          <b-form-file v-model="fileImport" :state="Boolean(fileImport)" browse-text="Explorar"
            placeholder="Importar..." drop-placeholder="Arrastrar Archivo aquí..."></b-form-file>
          <div class="text-center mt-3">
            <b-button variant="info" v-on:click="importItems()" :disabled="loading">
              <b-icon-cloud-upload></b-icon-cloud-upload>
              {{ loading ? "Cargando..." : "Importar" }}
            </b-button>
          </div>
        </b-overlay>
      </slot>
    </b-modal>

    <b-modal ref="modal-export" title="Exportar" hide-footer v-if="showExport">
      <slot name="export" v-bind:item="item" v-if="item">
        <b-overlay :show="loading" rounded="sm">

          <p v-if="selectedItems.length">Se exportará {{ selectedItems.length }} elementos.</p>
          <p v-else>Se exportará la consulta actual.</p>

          <select class="form-control" v-model="exportFormat">
            <option value="JSON">JSON</option>
            <option value="XLSX">XLSX</option>
          </select>

          <div class="text-center mt-3">
            <b-button variant="info" v-on:click="exportItems()" :disabled="loading">
              <b-icon-cloud-upload></b-icon-cloud-upload>
              {{ loading ? "Cargando..." : "Exportar" }}
            </b-button>
          </div>
        </b-overlay>
      </slot>
    </b-modal>
  </div>
</template>

<style lang="scss" scoped>
tr td:last-child,
tr td:first-child {
  width: 1%;
  white-space: nowrap;
}

.crud-pagination {
  display: flex;
  align-items: center;
  width: 100%;
  justify-content: center;
  margin-top: 1rem;
}

.crud-header {
  display: flex;
  justify-content: space-between;
  max-height: 3rem;

  .crud-title {
    margin: 0;
  }

  .crud-search {
    max-width: 15rem;

    .btn {
      border-top-left-radius: 0;
      border-bottom-left-radius: 0;
      border-top-right-radius: 0.375rem;
      border-bottom-right-radius: 0.375rem;

      &.open {
        border-top-right-radius: 0;
        border-bottom-right-radius: 0;
      }
    }
  }

  .table-options {
    margin-bottom: 1rem;
    display: flex;
    align-items: center;
    justify-content: flex-end;
  }
}

.custom-control {
  position: relative;
}


@media (min-width: 992px) {
  .table {
    table-layout: auto;

    tbody {
      td {
        overflow: scroll;
        -ms-overflow-style: none;
        /* IE and Edge */
        scrollbar-width: none;
        /* Firefox */
      }

      td::-webkit-scrollbar {
        display: none;
      }
    }
  }
}
</style>