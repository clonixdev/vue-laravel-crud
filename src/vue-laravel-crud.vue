<script>
import { getCurrentInstance } from 'vue';
import CrudHeader from "./components/CrudHeader.vue";
import CrudTable from "./components/CrudTable.vue";
import CrudCards from "./components/CrudCards.vue";
import CrudKanban from "./components/CrudKanban.vue";
import CrudCustom from "./components/CrudCustom.vue";
import CrudModals from "./components/CrudModals.vue";
import CrudPagination from "./components/CrudPagination.vue";
import CrudDetailView from "./components/CrudDetailView.vue";

// Import mixins
import crudData from "./mixins/crudData.js";
import crudApi from "./mixins/crudApi.js";
import crudFilters from "./mixins/crudFilters.js";
import crudValidation from "./mixins/crudValidation.js";
import crudHelpers from "./mixins/crudHelpers.js";
import crudUrlSync from "./mixins/crudUrlSync.js";

// Import Bootstrap version utilities
import { normalizeBootstrapVersion } from "./utils/bootstrap-version.js";
import { getBootstrapComponent, getBootstrapComponents } from "./utils/bootstrap-factory.js";
// Import toast plugin
import ToastPlugin from "./utils/toast.js";
import { registerBootstrapIcons } from "./utils/icons.js";

export default /*#__PURE__*/ {
  name: "VueLaravelCrud",
  components: {
    CrudHeader,
    CrudTable,
    CrudCards,
    CrudKanban,
    CrudCustom,
    CrudModals,
    CrudPagination,
    CrudDetailView,
  },
  mixins: [
    crudData,
    crudApi,
    crudFilters,
    crudValidation,
    crudHelpers,
    crudUrlSync,
  ],
  computed: {
    normalizedBootstrapVersion() {
      return normalizeBootstrapVersion(this.bootstrapVersion);
    },
    bootstrapFactory() {
      return {
        getComponent: (name) => getBootstrapComponent(name, this.normalizedBootstrapVersion),
        getComponents: () => getBootstrapComponents(this.normalizedBootstrapVersion),
        version: this.normalizedBootstrapVersion
      };
    },
    effectiveCrudItemId() {
      return this.crudItemId != null ? this.crudItemId : this.id;
    },
  },
  created() {
    // Instalar plugin de toasts si no está instalado
    try {
      const instance = getCurrentInstance();
      if (instance && instance.appContext && !instance.appContext.config.globalProperties.$toast) {
        instance.appContext.app.use(ToastPlugin);
      }
    } catch (e) {
      console.debug('Could not install ToastPlugin:', e);
    }
    
    // Registrar componentes de Bootstrap globalmente según la versión
    // Esto permite que todos los componentes hijos usen <b-button>, etc.
    // Solo registrar si no están ya registrados (para evitar sobrescribir bootstrap-vue si está disponible)
    if (this.bootstrapFactory) {
      try {
        const instance = getCurrentInstance();
        if (!instance || !instance.appContext) {
          console.debug('getCurrentInstance not available, skipping component registration');
          return;
        }
        
        const components = this.bootstrapFactory.getComponents();
        const version = this.normalizedBootstrapVersion;
        const app = instance.appContext.app;
        
        if (!app) return;
      
      // Registrar todos los componentes
      Object.keys(components).forEach(key => {
        if (components[key] && typeof components[key] === 'object') {
          // Registrar con nombre PascalCase (BButton)
          if (!app._context.components[key]) {
            app.component(key, components[key]);
          }
          
          // También registrar con prefijo 'b-' (b-button)
          const prefixedName = 'b-' + key.slice(1).replace(/([A-Z])/g, '-$1').toLowerCase();
          if (!app._context.components[prefixedName]) {
            app.component(prefixedName, components[key]);
          }
          
          // También registrar con nombre camelCase (bButton) para compatibilidad
          const camelName = key.charAt(0).toLowerCase() + key.slice(1);
          if (!app._context.components[camelName]) {
            app.component(camelName, components[key]);
          }
        }
      });
      
      // Registrar componente BIcon para iconos dinámicos (b-icon-*)
      if (components.BIcon) {
        registerBootstrapIcons(app, { BIcon: components.BIcon });
      }
      } catch (e) {
        console.warn('Could not register Bootstrap components:', e);
      }
    }
  },
  mounted() {
    // Verificar que Bootstrap JavaScript esté disponible después de que todo se haya montado
    this.$nextTick(() => {
      if (typeof window !== 'undefined') {
        const version = this.normalizedBootstrapVersion;
        if (version === 5 && !window.bootstrap) {
          console.warn('Bootstrap 5 JavaScript no está disponible. Algunos componentes pueden no funcionar correctamente.');
        } else if (version === 4 && !window.$) {
          console.warn('Bootstrap 4 requiere jQuery. Algunos componentes pueden no funcionar correctamente.');
        }
      }
    });
  },
  provide() {
    const vm = this;
    return {
      // Bootstrap version and factory
      bootstrapVersion: this.normalizedBootstrapVersion,
      bootstrapFactory: this.bootstrapFactory,
      
      // Props
      modelName: this.modelName,
      title: this.title,
      model: this.model,
      models: this.models,
      ajax: this.ajax,
      useVuexORM: this.useVuexORM,
      vuexInitRelations: this.vuexInitRelations,
      vuexLocalforage: this.vuexLocalforage,
      columns: this.columns,
      filter: this.filter,
      customFilters: this.customFilters,
      enableFilters: this.enableFilters,
      quickFilters: this.quickFilters,
      quickFiltersPlacement: this.quickFiltersPlacement,
      quickFiltersVariant: this.quickFiltersVariant,
      quickFiltersClass: this.quickFiltersClass,
      quickFiltersAriaLabel: this.quickFiltersAriaLabel,
      activeQuickFilterKey: this.activeQuickFilterKeyReactive,
      selectQuickFilter: this.selectQuickFilter,
      infiniteScroll: this.infiniteScroll,
      sortable: this.sortable,
      orderable: this.orderable,
      validate: this.validate,
      orderProp: this.orderProp,
      createMultipart: this.createMultipart,
      apiUrl: this.apiUrl,
      search: this.searchReactive,
      displaySearch: this.displaySearchReactive,
      hideModalAfterSave: this.hideModalAfterSave,
      hideModalAfterCreate: this.hideModalAfterCreate,
      hideModalAfterUpdate: this.hideModalAfterUpdate,
      refreshAfterSave: this.refreshAfterSave,
      showPaginator: this.showPaginator,
      showCreateBtn: this.showCreateBtn,
      showSearch: this.showSearch,
      showPrincipalSortBtn: this.showPrincipalSortBtn,
      showHeader: this.showHeader,
      showTitle: this.showTitle,
      limit: this.limit,
      // Objeto reactivo mutable (no ComputedRef) para inject Options API
      displayMode: this.displayModeReactive,
      getDisplayMode: () => vm._displayMode,
      displayModeToggler: this.displayModeToggler,
      colXs: this.colXs,
      colSm: this.colSm,
      colMd: this.colMd,
      colLg: this.colLg,
      colXl: this.colXl,
      selectHover: this.selectHover,
      selectClick: this.selectClick,
      cardClass: this.cardClass,
      listContainerClass: this.listContainerClass,
      listItemClass: this.listItemClass,
      cardHideFooter: this.cardHideFooter,
      messageRemoveConfirm: this.messageRemoveConfirm,
      messageRemoveBulkConfirm: this.messageRemoveBulkConfirm,
      messageRemove: this.messageRemove,
      messageNew: this.messageNew,
      messageImport: this.messageImport,
      messageExport: this.messageExport,
      messageEmptyResults: this.messageEmptyResults,
      messageNoMore: this.messageNoMore,
      messageLoading: this.messageLoading,
      messageSave: this.messageSave,
      messageDefaultValidationError: this.messageDefaultValidationError,
      searchPlaceholder: this.searchPlaceholder,
      tableContainerClass: this.tableContainerClass,
      tableClass: this.tableClass,
      grouped: this.grouped,
      groupedAttribute: this.groupedAttribute,
      groupedLabelPre: this.groupedLabelPre,
      groupedLabelAfter: this.groupedLabelAfter,
      groupedSplit: this.groupedSplit,
      draggableGroup: this.draggableGroup,
      draggableOptions: this.draggableOptions,
      masonryEnabled: this.masonryEnabled,
      masonrySort: this.masonrySort,
      masonryColumns: this.masonryColumns,
      principalSortColumn: this.principalSortColumn,
      bulkDelete: this.bulkDelete,
      showImport: this.showImport,
      showExport: this.showExport,
      fileImport: this.fileImport,
      markDirty: this.markDirty,

      // Data from mixins
      crudUuid: this.crudUuid,
      // dayjs sustituye a moment (mantenemos alias moment por compatibilidad)
      dayjs: this.dayjs,
      moment: this.dayjs,
      loading: this.loadingReactive,
      firstLoad: this.firstLoadReactive,
      // Proporcionar item como función getter para reactividad
      getItem: () => this.item,
      item: this.item,
      items: this.items,
      selectedItems: this.selectedItems,
      pagination: this.pagination,
      itemDefault: this.itemDefault,
      filters: this.filters,
      filtersVisible: this.filtersVisibleReactive,
      filterSidebarOpen: this.filterSidebarOpenReactive,
      setFilterSidebarOpen: (val) => {
        const open = !!val;
        vm.filtersVisible = open;
        vm.filterSidebarOpen = open;
        if (open && (!vm.internalFilters || vm.internalFilters.length === 0)) {
          vm.setupFilters();
        }
      },
      internalFilters: this.internalFilters,
      forceRecomputeCounter: this.forceRecomputeCounter,
      displayModes: this.displayModes,
      infiniteScrollKey: this.infiniteScrollKey,
      optionsLoaded: this.optionsLoaded,
      isMobile: this.isMobile,
      refreshing: this.refreshing,
      fetchError: this.fetchError,
      principalSort: this.principalSort,
      exportFormat: this.exportFormatReactive,

      // Computed from mixins
      itemValue: this.itemValue,
      isSplitGroups: this.isSplitGroups,
      itemsList: this.itemsList,
      paginationIndexStart: this.paginationIndexStart,
      paginationIndexEnd: this.paginationIndexEnd,
      finalFilters: this.finalFilters,
      sortFilter: this.sortFilter,
      groupFilter: this.groupFilter,
      internalFilter: this.internalFilter,
      internalFilterByProp: this.internalFilterByProp,
      columnOptions: this.columnOptions,
      isAllSelected: this.isAllSelected,

      // Methods from mixins
      handleResize: this.handleResize,
      rearrangeArray: this.rearrangeArray,
      clearItems: this.clearItems,
      updateData: this.updateData,
      externalUpdate: this.externalUpdate,
      makePagination: this.makePagination,
      fetchItemsVuex: this.fetchItemsVuex,
      fetchItemsLocal: this.fetchItemsLocal,
      fetchItems: this.fetchItems,
      groupItems: this.groupItems,
      saveItemVuex: this.saveItemVuex,
      saveItemLocal: this.saveItemLocal,
      saveItem: this.saveItem,
      deleteItem: this.deleteItem,
      deleteItemLocal: this.deleteItemLocal,
      deleteItemVuex: this.deleteItemVuex,
      deleteItemBulk: this.deleteItemBulk,
      deleteItemBulkLocal: this.deleteItemBulkLocal,
      deleteItemBulkVuex: this.deleteItemBulkVuex,
      saveSort: this.saveSort,
      exportItems: this.exportItems,
      importItems: this.importItems,
      refresh: this.refresh,
      onPaginationChange: this.onPaginationChange,
      onPerPageChange: this.onPerPageChange,
      infiniteHandler: this.infiniteHandler,
      setupFilters: this.setupFilters,
      toggleSortFilter: this.toggleSortFilter,
      getSortPriority: this.getSortPriority,
      toggleFilters: this.toggleFilters,
      resetFilters: this.resetFilters,
      activeFilters: this.activeFilters,
      clearActiveFilter: this.clearActiveFilter,
      isColumnHasFilter: this.isColumnHasFilter,
      isColumnVisibleInTable: this.isColumnVisibleInTable,
      isCustomFilterEnabled: this.isCustomFilterEnabled,
      setFilter: this.setFilter,
      onChangeFilter: this.onChangeFilter,
      togglePrincipalSort: this.togglePrincipalSort,
      loadOptions: this.loadOptions,
      getArrayValue: this.getArrayValue,
      getStateValue: this.getStateValue,
      getStateOptions: this.getStateOptions,
      getStateBadgeVariant: this.getStateBadgeVariant,
      onRowHover: this.onRowHover,
      onRowClick: this.onRowClick,
      onSort: this.onSort,
      onCheckSelect: this.onCheckSelect,
      toggleAll: this.toggleAll,
      unSelectItem: this.unSelectItem,
      selectItem: this.selectItem,
      getSelectedItems: this.getSelectedItems,
      clearSelection: this.clearSelection,
      onSelect: this.onSelect,
      showItem: this.showItem,
      createItem: this.createItem,
      updateItem: this.updateItem,
      removeItem: this.removeItem,
      confirmBulkDelete: this.confirmBulkDelete,
      toggleDisplayMode: this.toggleDisplayMode,
      closeUi: this.closeUi,
      openUi: this.openUi,
      uiMode: this.uiModeReactive,
      isPageViewMode: () => this.isPageViewMode,
      isModalViewMode: () => this.isModalViewMode,
      showExportModal: this.showExportModal,
      showImportModal: this.showImportModal,
      onDraggableAdded: this.onDraggableAdded,
      onDraggableChange: this.onDraggableChange,
      onDragEnd: this.onDragEnd,
      toastError: this.toastError,
      toastSuccess: this.toastSuccess,
      downloadBlobResponse: this.downloadBlobResponse
    };
  },
  props: {
    modelName: String,
    
    bootstrapVersion: {
      type: [Number, String],
      default: 5,
      validator: (value) => value === 'auto' || value === 4 || value === 5
    },

    title: String,
    model: {
      type: [Object, Function],
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
      type: [Boolean, Array],
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
    customFilters: {
      type: Array,
      default: () => [],
    },
    enableFilters: {
      type: Boolean,
      default: false,
    },
    /**
     * Filtros rápidos (pills/tabs) junto al título u otras ubicaciones.
     * [{ key, label, icon?, variant?, count?, filter?, apply?, default?, disabled?, class? }]
     */
    quickFilters: {
      type: Array,
      default: () => [],
    },
    /** v-model:quickFilter — key activa */
    quickFilter: {
      type: [String, Number],
      default: null,
    },
    /** title | toolbar | below */
    quickFiltersPlacement: {
      type: String,
      default: 'title',
    },
    /** pills | tabs | segmented */
    quickFiltersVariant: {
      type: String,
      default: 'pills',
    },
    quickFiltersClass: {
      type: String,
      default: '',
    },
    quickFiltersAriaLabel: {
      type: String,
      default: 'Filtros rápidos',
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
    groupedSplit: {
      type: Boolean,
      default: false,
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
    },
    /**
     * Cómo mostrar create/show/edit:
     * - modal: comportamiento clásico (default)
     * - page: vista dedicada reutilizando slots form/show
     */
    viewMode: {
      type: String,
      default: 'modal',
      validator: (v) => ['modal', 'page'].includes(String(v || '').toLowerCase()),
    },
    /**
     * Sincronizar create/show/edit con la URL.
     * true => path (/resource/create, /resource/:id, /resource/:id/edit)
     * o { strategy: 'query'|'path', ... }
     */
    urlSync: {
      type: [Boolean, Object],
      default: false,
    },
    /** Acción inicial desde props de ruta (create|show|edit) */
    crudAction: {
      type: String,
      default: null,
    },
    /** Id inicial desde props de ruta */
    crudItemId: {
      type: [String, Number],
      default: null,
    },
    /** Alias conveniente: id de ruta */
    id: {
      type: [String, Number],
      default: null,
    },
  },

};
</script>

<template>
  <div class="crud">
    <CrudDetailView v-if="isPageViewMode && isDetailOpen">
      <template v-for="(_, name) in $slots" v-slot:[name]="slotProps">
        <slot :name="name" v-bind="slotProps" />
      </template>
    </CrudDetailView>

    <template v-if="listVisible">
      <CrudHeader>
        <template v-for="(_, name) in $slots" v-slot:[name]="slotProps">
          <slot :name="name" v-bind="slotProps" />
        </template>
      </CrudHeader>

      <div class="crud-active-filters" v-if="enableFilters && activeFilters.length > 0">
        <span class="crud-active-filters-label text-muted">
          <b-icon-funnel class="me-1"></b-icon-funnel>
          Filtros activos:
        </span>
        <div class="crud-active-filters-list">
          <b-badge
            v-for="af in activeFilters"
            :key="af.key"
            variant="primary"
            class="crud-active-filter-badge"
          >
            <strong>{{ af.label }}:</strong> {{ af.displayValue }}
            <button
              type="button"
              class="crud-active-filter-remove ms-1"
              aria-label="Quitar filtro"
              @click="clearActiveFilter(af.key)"
            >&times;</button>
          </b-badge>
          <b-button
            v-if="activeFilters.length > 1"
            variant="link"
            size="sm"
            class="text-danger p-0"
            @click="resetFilters()"
          >
            Limpiar todos
          </b-button>
        </div>
      </div>

      <div class="crud-body">
        <CrudTable>
          <template v-for="(_, name) in $slots" v-slot:[name]="slotProps">
            <slot :name="name" v-bind="slotProps" />
          </template>
        </CrudTable>
        <CrudCards>
          <template v-for="(_, name) in $slots" v-slot:[name]="slotProps">
            <slot :name="name" v-bind="slotProps" />
          </template>
        </CrudCards>
        <CrudKanban>
          <template v-for="(_, name) in $slots" v-slot:[name]="slotProps">
            <slot :name="name" v-bind="slotProps" />
          </template>
        </CrudKanban>
        <CrudCustom />
      </div>

      <CrudPagination />
    </template>

    <CrudModals v-if="isModalViewMode" ref="crudModals">
      <template v-for="(_, name) in $slots" v-slot:[name]="slotProps">
        <slot :name="name" v-bind="slotProps" />
      </template>
    </CrudModals>
  </div>
</template>

<style lang="scss" scoped>
.crud {
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
  margin: 0;
  padding: 0;
}

.crud-body {
  margin: 0;
  padding: 0;
  min-width: 0;
}

.crud-active-filters {
  display: flex;
  justify-content: flex-start;
  align-items: center;
  flex-wrap: wrap;
  gap: 0.4rem 0.5rem;
  width: 100%;
  padding: 0.15rem 0 0.35rem;
}

.crud-active-filters-label {
  flex: 0 0 auto;
  font-size: 0.875rem;
  font-weight: 600;
  margin: 0;
}

.crud-active-filters-list {
  display: inline-flex;
  justify-content: flex-start;
  align-items: center;
  flex-wrap: wrap;
  gap: 0.35rem;
  flex: 0 1 auto;
  margin: 0;
}

.crud-active-filter-badge {
  display: inline-flex;
  align-items: center;
  font-size: 0.875rem;
  font-weight: 400;
  padding: 0.35rem 0.5rem;
  margin: 0;
}

.crud-active-filter-remove {
  background: transparent;
  border: 0;
  color: inherit;
  opacity: 0.75;
  font-size: 1rem;
  line-height: 1;
  padding: 0;
  cursor: pointer;
}

.crud-active-filter-remove:hover {
  opacity: 1;
}

.crud :deep(.table-responsive) {
  margin: 0;
}

.crud :deep(.table) {
  margin-bottom: 0;
}

.crud :deep(.paginator-container) {
  margin-top: 0;
  padding-top: 0.25rem;
}

tr td:last-child,
tr td:first-child {
  width: 1%;
  white-space: nowrap;
}

tbody tr.selected {
  background-color: #e3f2fd !important;
  
  td {
    background-color: transparent !important;
  }
  
  &:hover {
    background-color: #bbdefb !important;
    
    td {
      background-color: transparent !important;
    }
  }
}

.table-striped tbody tr.selected:nth-of-type(odd) {
  background-color: #e3f2fd !important;
  
  td {
    background-color: transparent !important;
  }
}

.table-striped tbody tr.selected:nth-of-type(even) {
  background-color: #e3f2fd !important;
  
  td {
    background-color: transparent !important;
  }
}

.crud-pagination {
  display: flex;
  align-items: center;
  width: 100%;
  justify-content: center;
  margin-top: 0;
}

.crud-header {
  display: flex;
  flex-wrap: wrap;
  align-items: flex-start;
  justify-content: space-between;
  gap: 0.75rem 1rem;
  margin: 0;
  padding: 0;

  .crud-title {
    margin: 0;
    padding: 0.25rem 0;
  }

  .table-options {
    margin: 0;
    padding: 0;
    display: flex;
    align-items: center;
    justify-content: flex-end;
    width: 100%;
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


.kanban-board {
  display: flex;
  gap: 1rem;
  overflow-x: auto;
  padding: 1rem;
}

.kanban-column {
  background: #f4f5f7;
  border-radius: 8px;
  width: 300px;
  display: flex;
  flex-direction: column;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

.kanban-column-header {
  font-weight: bold;
  padding: 0.5rem;
  background: #dfe1e6;
  border-radius: 8px 8px 0 0;
  text-align: center;
}

.kanban-column-body {
  padding: 0.5rem;
  min-height: 100px;
  background: #ffffff;
  border-radius: 0 0 8px 8px;
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
}

.kanban-card {
  background: #ffffff;
  border-radius: 4px;
  padding: 1rem;
  box-shadow: 0 1px 2px rgba(0, 0, 0, 0.1);
  cursor: grab;
}
</style>