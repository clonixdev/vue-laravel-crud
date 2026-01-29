<template>
  <div>
    <!-- Infinite Loading -->
    <div 
      v-if="infiniteScroll"
      ref="infiniteLoadingTrigger"
      class="infinite-loading-trigger"
      :key="infiniteScrollKey"
    >
      <div v-if="loadingValue" class="text-center p-3">
        <b-spinner variant="primary" label="Cargando..."></b-spinner>
        <div class="mt-2">{{ messageLoading }}</div>
      </div>
      <div v-else-if="!hasMorePages && firstLoadValue" class="text-center p-3">
        <div v-if="items.length == 0">{{ messageEmptyResults }}</div>
        <div v-else>{{ messageNoMore }}</div>
      </div>
    </div>

    <!-- Paginador -->
    <div class="paginator-container" v-if="!infiniteScroll">
      <div class="paginator-data">
        <span class="paginator-badge">
          <span class="paginator-label">Filas:</span>
          <span class="paginator-value">{{ pagination.total }}</span>
        </span>
        <b-dropdown 
          variant="outline-secondary" 
          size="sm" 
          class="paginator-dropdown"
          :text="`xPág: ${pagination.per_page}`"
        >
          <b-dropdown-item 
            v-for="option in perPageOptions" 
            :key="option"
            @click="onPerPageChange(option)"
            :active="pagination.per_page === option"
          >
            {{ option }}
          </b-dropdown-item>
        </b-dropdown>
        <b-dropdown 
          v-if="selectedItemsCount > 0"
          variant="outline-secondary" 
          size="sm" 
          class="paginator-dropdown paginator-badge-dropdown"
          :text="`Seleccionados: ${selectedItemsCount}`"
        >
          <b-dropdown-item @click="clearSelection">
            <b-icon-x-circle class="mr-1"></b-icon-x-circle>
            Limpiar selección
          </b-dropdown-item>
        </b-dropdown>
      </div>
      
      <div class="crud-paginator">
        <b-pagination 
          v-if="showPaginator" 
          v-model="pagination.current_page" 
          :total-rows="pagination.total"
          :per-page="pagination.per_page" 
          @change="onPaginationChange($event)"
        ></b-pagination>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'CrudPagination',
  inject: [
    'bootstrapFactory',
    'infiniteScroll',
    'infiniteScrollKey',
    'messageLoading',
    'messageNoMore',
    'messageEmptyResults',
    'loading',
    'firstLoad',
    'items',
    'pagination',
    'selectedItems',
    'showPaginator',
    'infiniteHandler',
    'onPaginationChange',
    'onPerPageChange',
    'clearSelection'
  ],
  data() {
    return {
      perPageOptions: [10, 20, 50, 100],
      observer: null
    };
  },
  computed: {
    selectedItemsCount() {
      // Computed para forzar reactividad del contador
      return this.selectedItems ? this.selectedItems.length : 0;
    },
    loadingValue() {
      return this.loading && this.loading.value !== undefined ? this.loading.value : this.loading;
    },
    firstLoadValue() {
      return this.firstLoad && this.firstLoad.value !== undefined ? this.firstLoad.value : this.firstLoad;
    },
    hasMorePages() {
      if (!this.firstLoadValue) return true;
      return (this.pagination.current_page * this.pagination.per_page) < this.pagination.total;
    }
  },
  mounted() {
    if (this.infiniteScroll) {
      this.setupInfiniteScroll();
    }
  },
  beforeUnmount() {
    if (this.observer) {
      this.observer.disconnect();
      this.observer = null;
    }
  },
  watch: {
    infiniteScroll(newVal) {
      if (newVal) {
        this.$nextTick(() => {
          this.setupInfiniteScroll();
        });
      } else {
        if (this.observer) {
          this.observer.disconnect();
          this.observer = null;
        }
      }
    },
    infiniteScrollKey() {
      if (this.infiniteScroll) {
        this.$nextTick(() => {
          this.setupInfiniteScroll();
        });
      }
    }
  },
  methods: {
    setupInfiniteScroll() {
      if (!this.infiniteScroll) return;
      
      // Limpiar observer anterior si existe
      if (this.observer) {
        this.observer.disconnect();
        this.observer = null;
      }
      
      this.$nextTick(() => {
        const trigger = this.$refs.infiniteLoadingTrigger;
        if (!trigger) return;
        
        // Crear IntersectionObserver
        this.observer = new IntersectionObserver((entries) => {
          entries.forEach(entry => {
            if (entry.isIntersecting && !this.loadingValue && this.hasMorePages) {
              // Simular el objeto $state para compatibilidad con infiniteHandler
              const $state = {
                loaded: () => {},
                complete: () => {},
                error: () => {}
              };
              this.infiniteHandler($state);
            }
          });
        }, {
          root: null,
          rootMargin: '100px',
          threshold: 0.1
        });
        
        this.observer.observe(trigger);
      });
    }
  }
};
</script>

<style scoped>
.paginator-container {
  display: grid;
  grid-template-columns: 1fr auto 1fr;
  align-items: center;
  width: 100%;
  margin-top: 1rem;
  gap: 1rem;
}

.paginator-data {
  display: flex;
  flex-wrap: nowrap;
  justify-content: flex-start;
  align-items: center;
  gap: 0.5rem;
  font-size: 0.875rem;
  grid-column: 1;
}

.paginator-badge {
  display: inline-flex;
  align-items: center;
  gap: 0.25rem;
  padding: 0.375rem 0.625rem;
  background-color: #f8f9fa;
  border: 1px solid #dee2e6;
  border-radius: 0.375rem;
  color: #495057;
  transition: all 0.2s ease;
}

.paginator-badge:hover {
  background-color: #e9ecef;
  border-color: #ced4da;
}

.paginator-label {
  font-weight: 500;
  color: #6c757d;
}

.paginator-value {
  font-weight: 600;
  color: #212529;
}

.paginator-dropdown {
  font-size: 0.875rem;
}

.paginator-dropdown >>> .btn {
  padding: 0.375rem 0.625rem;
  font-size: 0.875rem;
  background-color: #f8f9fa;
  border: 1px solid #dee2e6;
  color: #495057;
}

.paginator-dropdown >>> .btn:hover {
  background-color: #e9ecef;
  border-color: #ced4da;
}

.crud-paginator {
  display: flex;
  justify-content: center;
  align-items: center;
  grid-column: 2;
}

.paginator-badge-dropdown {
  z-index: 1;
  position: relative;
}

.paginator-badge-dropdown >>> .btn {
  padding: 0.375rem 0.625rem;
  font-size: 0.875rem;
  background-color: #f8f9fa;
  border: 1px solid #dee2e6;
  color: #495057;
  display: inline-flex;
  align-items: center;
  gap: 0.25rem;
}

.paginator-badge-dropdown >>> .btn:hover {
  background-color: #e9ecef;
  border-color: #ced4da;
}

.infinite-loading-trigger {
  min-height: 50px;
  margin-top: 1rem;
}
</style>
