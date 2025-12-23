<template>
  <div class="crud-header" v-if="showHeader">
    <h4 class="crud-title" v-if="showTitle">{{ title }}</h4>
    
    <b-sidebar :visible="sidebarVisible" @hidden="closeSidebar" title="Filtrar" right shadow>
      <CrudFilters />
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
            <b-icon-card-list v-if="currentDisplayMode == displayModes.MODE_TABLE"></b-icon-card-list>
            <b-icon-table v-else-if="currentDisplayMode == displayModes.MODE_CARDS"></b-icon-table>
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
</template>

<script>
import CrudFilters from './CrudFilters.vue';

export default {
  name: 'CrudHeader',
  components: {
    CrudFilters
  },
  inject: [
    'showHeader',
    'showTitle',
    'title',
    'filterSidebarOpen',
    'showImport',
    'showExport',
    'showPrincipalSortBtn',
    'principalSort',
    'bulkDelete',
    'showCreateBtn',
    'enableFilters',
    'displayModeToggler',
    'displayMode',
    'displayModes',
    'showSearch',
    'displaySearch',
    'search',
    'searchPlaceholder',
    'loading',
    'messageImport',
    'messageExport',
    'messageNew',
    'createItem',
    'toggleDisplayMode',
    'togglePrincipalSort',
    'confirmBulkDelete',
    'toggleFilters',
    'refresh',
    'showImportModal',
    'showExportModal'
  ],
  computed: {
    sidebarVisible() {
      // Acceder directamente al componente padre para obtener reactividad
      return this.$parent ? this.$parent.filterSidebarOpen : this.filterSidebarOpen;
    },
    currentDisplayMode() {
      if (!this.displayMode) return 1;
      if (this.displayMode.value !== undefined) {
        return this.displayMode.value;
      }
      if (typeof this.displayMode === 'function') {
        return this.displayMode();
      }
      return this.displayMode;
    }
  },
  methods: {
    closeSidebar() {
      if (this.filterSidebarOpen) {
        this.toggleFilters();
      }
    }
  }
};
</script>

<style scoped>
.crud-header {
  display: flex;
  justify-content: space-between;
  max-height: 3rem;
}

.crud-title {
  margin: 0;
}

.crud-search {
  max-width: 15rem;
}

.crud-search .btn {
  border-top-left-radius: 0;
  border-bottom-left-radius: 0;
  border-top-right-radius: 0.375rem;
  border-bottom-right-radius: 0.375rem;
}

.crud-search .btn.open {
  border-top-right-radius: 0;
  border-bottom-right-radius: 0;
}

.table-options {
  margin-bottom: 1rem;
  display: flex;
  align-items: center;
  justify-content: flex-end;
}
</style>
