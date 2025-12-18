<template>
  <div>
    <!-- Infinite Loading -->
    <infinite-loading 
      ref="infiniteLoading" 
      @infinite="infiniteHandler" 
      v-if="infiniteScroll"
      :forceUseInfiniteWrapper="true" 
      :key="infiniteScrollKey"
    >
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

    <!-- Paginador -->
    <div class="paginator-container" v-if="!infiniteScroll">
      <div class="paginator-data">
        <span class="paginator-badge">
          <span class="paginator-label">Filas:</span>
          <span class="paginator-value">{{ pagination.total }}</span>
        </span>
        <span class="paginator-badge">
          <span class="paginator-label">xPág:</span>
          <span class="paginator-value">{{ pagination.per_page }}</span>
        </span>
        <span class="paginator-badge">
          <span class="paginator-label">Pág:</span>
          <span class="paginator-value">{{ pagination.current_page }}</span>
        </span>
        <span class="paginator-badge" v-if="selectedItems.length > 0">
          <span class="paginator-label">Seleccionados:</span>
          <span class="paginator-value">{{ selectedItems.length }}</span>
        </span>
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
import InfiniteLoading from 'vue-infinite-loading';

export default {
  name: 'CrudPagination',
  components: {
    InfiniteLoading
  },
  inject: [
    'infiniteScroll',
    'infiniteScrollKey',
    'messageLoading',
    'messageNoMore',
    'messageEmptyResults',
    'loading',
    'items',
    'pagination',
    'selectedItems',
    'showPaginator',
    'infiniteHandler',
    'onPaginationChange'
  ]
};
</script>

<style scoped>
.paginator-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  margin-top: 1rem;
  gap: 0.75rem;
}

.paginator-data {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  gap: 0.5rem;
  font-size: 0.875rem;
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

.crud-paginator {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
}
</style>
