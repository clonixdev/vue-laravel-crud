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
    'onPaginationChange',
    'onPerPageChange'
  ],
  data() {
    return {
      perPageOptions: [10, 20, 50, 100]
    };
  }
};
</script>

<style scoped>
.paginator-container {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
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
  flex: 0 0 auto;
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
  flex: 1 1 auto;
}
</style>
