<script>
import Vue from 'vue';
import CrudHeader from "./components/CrudHeader.vue";
import CrudTable from "./components/CrudTable.vue";
import CrudCards from "./components/CrudCards.vue";
import CrudKanban from "./components/CrudKanban.vue";
import CrudCustom from "./components/CrudCustom.vue";
import CrudModals from "./components/CrudModals.vue";
import CrudPagination from "./components/CrudPagination.vue";

// Import mixins
import crudData from "./mixins/crudData.js";
import crudApi from "./mixins/crudApi.js";
import crudFilters from "./mixins/crudFilters.js";
import crudValidation from "./mixins/crudValidation.js";
import crudHelpers from "./mixins/crudHelpers.js";

export default /*#__PURE__*/ {
  name: "VueLaravelCrud",
  components: {
    CrudHeader,
    CrudTable,
    CrudCards,
    CrudKanban,
    CrudCustom,
    CrudModals,
    CrudPagination
  },
  mixins: [
    crudData,
    crudApi,
    crudFilters,
    crudValidation,
    crudHelpers
  ],
  provide() {
    return {
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
      infiniteScroll: this.infiniteScroll,
      sortable: this.sortable,
      orderable: this.orderable,
      validate: this.validate,
      orderProp: this.orderProp,
      createMultipart: this.createMultipart,
      apiUrl: this.apiUrl,
      search: this.search,
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
      displayMode: this.displayModeReactive,
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
      moment: this.moment,
      loading: this.loading,
      firstLoad: this.firstLoad,
      // Proporcionar item como función getter para reactividad
      getItem: () => this.item,
      item: this.item,
      items: this.items,
      selectedItems: this.selectedItems,
      pagination: this.pagination,
      displaySearch: this.displaySearch,
      itemDefault: this.itemDefault,
      filters: this.filters,
      filtersVisible: this.filtersVisible,
      filterSidebarOpen: this.filterSidebarOpen,
      internalFilters: this.internalFilters,
      forceRecomputeCounter: this.forceRecomputeCounter,
      displayModes: this.displayModes,
      infiniteScrollKey: this.infiniteScrollKey,
      optionsLoaded: this.optionsLoaded,
      isMobile: this.isMobile,
      refreshing: this.refreshing,
      fetchError: this.fetchError,
      principalSort: this.principalSort,
      exportFormat: this.exportFormat,

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
      toggleFilters: this.toggleFilters,
      resetFilters: this.resetFilters,
      isColumnHasFilter: this.isColumnHasFilter,
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
    customFilters: {
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
    }
  },

};
</script>

<template>
  <div class="crud">
    <CrudHeader />
    
    <CrudTable>
      <template v-for="(slot, name) in $scopedSlots" v-slot:[name]="slotProps">
        <slot :name="name" v-bind="slotProps" />
      </template>
    </CrudTable>
    <CrudCards>
      <template v-for="(slot, name) in $scopedSlots" v-slot:[name]="slotProps">
        <slot :name="name" v-bind="slotProps" />
      </template>
    </CrudCards>
    <CrudKanban>
      <template v-for="(slot, name) in $scopedSlots" v-slot:[name]="slotProps">
        <slot :name="name" v-bind="slotProps" />
      </template>
    </CrudKanban>
    <CrudCustom />
    
    <b-overlay :show="loading" rounded="sm"></b-overlay>
    
    <CrudPagination />
    <CrudModals>
      <template v-for="(slot, name) in $scopedSlots" v-slot:[name]="slotProps">
        <slot :name="name" v-bind="slotProps" />
      </template>
    </CrudModals>
  </div>
</template>

<style lang="scss" scoped>
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