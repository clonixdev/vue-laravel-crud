<template>
  <div class="crud-header" v-if="showHeader">
    <div class="crud-header__main">
      <div class="crud-header__heading">
        <h4 class="crud-title" v-if="showTitle">{{ title }}</h4>
        <CrudQuickFilters v-if="showQuickFiltersWithTitle">
          <template v-for="(_, name) in $slots" v-slot:[name]="slotProps">
            <slot :name="name" v-bind="slotProps" />
          </template>
        </CrudQuickFilters>
      </div>

      <div class="table-options">
        <slot name="tableActions" v-bind:createItem="createItem" v-bind:toggleDisplayMode="toggleDisplayMode"
          v-bind:loading="loading">
          <div class="crud-toolbar">
            <div class="crud-toolbar__prepend">
              <slot name="tableActionsPrepend" v-bind:loading="loading"></slot>
              <CrudQuickFilters v-if="showQuickFiltersInToolbar">
                <template v-for="(_, name) in $slots" v-slot:[name]="slotProps">
                  <slot :name="name" v-bind="slotProps" />
                </template>
              </CrudQuickFilters>
            </div>

            <div class="btn-group crud-toolbar__actions" role="group">
              <b-button variant="info" @click="showImportModal()" v-if="showImport" :disabled="loadingValue">
                <b-icon-cloud-upload></b-icon-cloud-upload>{{ messageImport }}
              </b-button>
              <b-button variant="info" @click="showExportModal()" v-if="showExport" :disabled="loadingValue">
                <b-icon-cloud-download></b-icon-cloud-download>{{ messageExport }}
              </b-button>
              <b-button variant="info" v-if="showPrincipalSortBtn" @click="togglePrincipalSort()" :disabled="loadingValue">
                <b-icon-sort-numeric-down v-if="principalSort"></b-icon-sort-numeric-down>
                <b-icon-sort-numeric-up v-else></b-icon-sort-numeric-up>
              </b-button>
              <b-button variant="danger" @click="confirmBulkDelete()" v-if="bulkDelete" :disabled="loadingValue">
                <b-icon-trash></b-icon-trash>
              </b-button>
              <b-button variant="success" v-if="showCreateBtn" @click="createItem()" :disabled="loadingValue">
                <b-icon-plus></b-icon-plus>{{ messageNew }}
              </b-button>
              <b-button variant="info" v-if="enableFilters" @click="toggleFilters()" :disabled="loadingValue">Filtros</b-button>
              <b-button variant="info" @click="toggleDisplayMode()" :disabled="loadingValue" v-if="displayModeToggler">
                <b-icon-card-list v-if="currentDisplayMode == displayModes.MODE_TABLE"></b-icon-card-list>
                <b-icon-table v-else></b-icon-table>
              </b-button>
              <b-button variant="info" @click="refresh()" :disabled="loadingValue">
                <b-icon-arrow-clockwise></b-icon-arrow-clockwise>
              </b-button>
            </div>

            <div
              class="crud-search input-group"
              :class="{ 'is-open': displaySearchValue }"
              v-if="showSearch"
            >
              <button
                type="button"
                class="btn btn-info crud-search__toggle"
                :class="{ open: displaySearchValue }"
                @click="toggleSearchField"
                aria-label="Buscar"
                :disabled="loadingValue"
              >
                <b-icon-search></b-icon-search>
              </button>
              <input
                v-if="displaySearchValue"
                v-model="searchInput"
                class="form-control crud-search__input"
                type="search"
                :placeholder="searchPlaceholder"
                :disabled="loadingValue"
              />
            </div>

            <div class="crud-toolbar__append">
              <slot name="tableActionsAppend" v-bind:loading="loading"></slot>
            </div>
          </div>
        </slot>
      </div>
    </div>

    <CrudQuickFilters v-if="showQuickFiltersBelowTitle" class="crud-header__quick-filters-row">
      <template v-for="(_, name) in $slots" v-slot:[name]="slotProps">
        <slot :name="name" v-bind="slotProps" />
      </template>
    </CrudQuickFilters>

    <b-sidebar
      :id="filtersSidebarId"
      v-model="sidebarOpen"
      title="Filtrar"
      right
      shadow
    >
      <CrudFilters />
    </b-sidebar>
  </div>
</template>

<script>
import CrudFilters from './CrudFilters.vue';
import CrudQuickFilters from './CrudQuickFilters.vue';

export default {
  name: 'CrudHeader',
  components: {
    CrudFilters,
    CrudQuickFilters,
  },
  data() {
    return {
      searchInput: '',
      searchTimer: null,
    };
  },
  inject: {
    bootstrapFactory: { default: null },
    showHeader: { default: true },
    showTitle: { default: true },
    title: { default: '' },
    filterSidebarOpen: { default: null },
    setFilterSidebarOpen: { default: null },
    crudUuid: { default: 'default' },
    showImport: { default: false },
    showExport: { default: false },
    showPrincipalSortBtn: { default: false },
    principalSort: { default: false },
    bulkDelete: { default: false },
    showCreateBtn: { default: true },
    enableFilters: { default: false },
    displayModeToggler: { default: false },
    displayMode: { default: null },
    getDisplayMode: { default: null },
    displayModes: { default: () => ({ MODE_TABLE: 1, MODE_CARDS: 2 }) },
    showSearch: { default: true },
    displaySearch: { default: null },
    search: { default: null },
    searchPlaceholder: { default: 'Buscar...' },
    loading: { default: null },
    firstLoad: { default: null },
    messageImport: { default: 'Importar' },
    messageExport: { default: 'Exportar' },
    messageNew: { default: 'Nuevo' },
    createItem: { default: () => {} },
    toggleDisplayMode: { default: () => {} },
    togglePrincipalSort: { default: () => {} },
    confirmBulkDelete: { default: () => {} },
    toggleFilters: { default: () => {} },
    refresh: { default: () => {} },
    showImportModal: { default: () => {} },
    showExportModal: { default: () => {} },
    quickFilters: { default: () => [] },
    quickFiltersPlacement: { default: 'title' },
  },
  computed: {
    filtersSidebarId() {
      return `crud-filters-sidebar-${this.crudUuid || 'default'}`;
    },
    quickFiltersPlacementValue() {
      return String(this.quickFiltersPlacement || 'title').toLowerCase();
    },
    hasQuickFilters() {
      return Array.isArray(this.quickFilters) && this.quickFilters.length > 0;
    },
    showQuickFiltersWithTitle() {
      return this.hasQuickFilters && ['title', 'with-title', 'heading'].includes(this.quickFiltersPlacementValue);
    },
    showQuickFiltersInToolbar() {
      return this.hasQuickFilters && ['toolbar', 'actions'].includes(this.quickFiltersPlacementValue);
    },
    showQuickFiltersBelowTitle() {
      return this.hasQuickFilters && ['below', 'below-title', 'row'].includes(this.quickFiltersPlacementValue);
    },
    sidebarOpen: {
      get() {
        if (this.filterSidebarOpen && this.filterSidebarOpen.value !== undefined) {
          return !!this.filterSidebarOpen.value;
        }
        return false;
      },
      set(val) {
        if (typeof this.setFilterSidebarOpen === 'function') {
          this.setFilterSidebarOpen(!!val);
          return;
        }
        if (this.filterSidebarOpen && this.filterSidebarOpen.value !== undefined) {
          this.filterSidebarOpen.value = !!val;
        }
      },
    },
    currentDisplayMode() {
      if (typeof this.getDisplayMode === 'function') {
        return this.getDisplayMode();
      }
      if (!this.displayMode) return 1;
      if (this.displayMode.value !== undefined) {
        return this.displayMode.value;
      }
      if (typeof this.displayMode === 'function') {
        return this.displayMode();
      }
      return this.displayMode;
    },
    loadingValue() {
      return this.loading && this.loading.value !== undefined ? this.loading.value : this.loading;
    },
    firstLoadValue() {
      return this.firstLoad && this.firstLoad.value !== undefined ? this.firstLoad.value : this.firstLoad;
    },
    isInitialLoading() {
      return this.loadingValue && !this.firstLoadValue;
    },
    displaySearchValue() {
      if (this.displaySearch && this.displaySearch.value !== undefined) {
        return !!this.displaySearch.value;
      }
      return !!this.displaySearch;
    },
    searchReactiveValue() {
      if (this.search && this.search.value !== undefined) {
        return this.search.value;
      }
      return this.search || '';
    },
  },
  watch: {
    searchInput(val) {
      if (this.searchTimer) {
        clearTimeout(this.searchTimer);
      }
      this.searchTimer = setTimeout(() => {
        if (this.search && typeof this.search === 'object' && 'value' in this.search) {
          this.search.value = val;
        }
      }, 500);
    },
    searchReactiveValue(val) {
      if (val !== this.searchInput) {
        this.searchInput = val || '';
      }
    },
  },
  mounted() {
    this.searchInput = this.searchReactiveValue || '';
  },
  methods: {
    toggleSearchField() {
      if (this.displaySearch && typeof this.displaySearch === 'object' && 'value' in this.displaySearch) {
        this.displaySearch.value = !this.displaySearch.value;
        return;
      }
      if (this.$parent && this.$parent.displaySearch !== undefined) {
        this.$parent.displaySearch = !this.$parent.displaySearch;
      }
    },
  },
  beforeUnmount() {
    if (this.searchTimer) {
      clearTimeout(this.searchTimer);
    }
  },
};
</script>

<style scoped>
.crud-header {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  margin: 0 0 0.25rem;
  padding: 0;
}

.crud-header__main {
  display: flex;
  flex-wrap: wrap;
  align-items: flex-start;
  justify-content: space-between;
  gap: 0.75rem 1rem;
}

.crud-header__heading {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: 0.65rem 0.85rem;
  min-width: 0;
  flex: 1 1 auto;
  margin-right: auto;
}

.crud-title {
  margin: 0;
  flex: 0 1 auto;
  min-width: 0;
  white-space: nowrap;
  padding: 0.25rem 0;
}

.crud-header__quick-filters-row {
  width: 100%;
}

.table-options {
  flex: 1 1 100%;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  margin: 0 0 0 auto;
  padding: 0;
}

@media (min-width: 768px) {
  .table-options {
    flex: 0 0 auto;
    max-width: 100%;
  }
}

.crud-toolbar {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: flex-end;
  gap: 0.5rem;
  width: 100%;
}

.crud-toolbar__prepend,
.crud-toolbar__append {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: 0.5rem;
}

.crud-toolbar__actions {
  flex-wrap: wrap;
}

.crud-search {
  width: auto;
  flex: 0 0 auto;
}

.crud-search.is-open {
  width: min(100%, 16rem);
  flex: 0 1 16rem;
}

.crud-search__toggle.open {
  border-top-right-radius: 0;
  border-bottom-right-radius: 0;
}

.crud-search__input {
  border-top-left-radius: 0;
  border-bottom-left-radius: 0;
}
</style>
