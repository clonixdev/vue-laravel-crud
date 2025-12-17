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
    <div class="paginator-data" v-if="!infiniteScroll">
      Filas: {{ pagination.total }} | xPág: {{ pagination.per_page }} | Pág: {{ pagination.current_page }} |
      Seleccionados: {{ selectedItems.length }}
    </div>
    
    <div class="crud-paginator" v-if="!infiniteScroll">
      <b-pagination 
        v-if="showPaginator" 
        v-model="pagination.current_page" 
        :total-rows="pagination.total"
        :per-page="pagination.per_page" 
        @change="onPaginationChange($event)"
      ></b-pagination>
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
.crud-pagination {
  display: flex;
  align-items: center;
  width: 100%;
  justify-content: center;
  margin-top: 1rem;
}
</style>
