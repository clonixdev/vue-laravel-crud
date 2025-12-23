<template>
  <div v-if="currentDisplayMode == displayModes.MODE_CARDS">
    <!-- Spinner durante la carga inicial -->
    <div v-if="loadingValue || !firstLoadValue" class="text-center p-5">
      <b-spinner variant="primary" label="Cargando..."></b-spinner>
      <p class="mt-2">{{ messageLoading }}</p>
    </div>

    <!-- Cards con datos -->
    <template v-else>
      <draggable 
        v-model="items" 
        :group="draggableGroup" 
        :draggable="orderable ? '.item' : '.none'" 
        @start="drag = true"
        @end="drag = false" 
        @sort="onSort()" 
        @add="onDraggableAdded($event)" 
        @change="onDraggableChange($event)"
        :options="draggableOptions"
      >
        <masonry
          :cols="{ default: 12 / colLg, 1400: 12 / colXl, 1200: 12 / colLg, 1000: 12 / colMd, 700: 12 / colSm, 400: 12 / colXs }"
          :gutter="{ default: '15px', 700: '15px' }"
        >
          <div v-for="(item, itemIndex) in itemsList" v-bind:key="itemIndex" class="item">
            <slot name="card" v-bind:item="item">
              <ItemCard 
                :item="item" 
                :columns="columns" 
                :index="itemIndex"
                :cardClass="cardClass" 
                :cardHideFooter="cardHideFooter" 
                :itemValue="itemValue"
                :getStateValue="getStateValue"
                :getStateOptions="getStateOptions"
                :getStateBadgeVariant="getStateBadgeVariant"
                :getArrayValue="getArrayValue" 
                :showItem="showItem"
                :updateItem="updateItem" 
                :removeItem="removeItem"
              >
                <template v-for="(slot, name) in $scopedSlots" v-slot:[name]="slotProps">
                  <slot :name="name" v-bind="slotProps" />
                </template>
              </ItemCard>
            </slot>
          </div>
        </masonry>
      </draggable>

      <p v-if="firstLoadValue && itemsList && itemsList.length == 0 && !infiniteScroll" class="p-3">
        {{ messageEmptyResults }}
      </p>
    </template>
  </div>
</template>

<script>
import Vue from 'vue';
import draggable from "vuedraggable";
import VueMasonry from 'vue-masonry-css';
import ItemCard from '../ItemCard.vue';

// Registrar el componente masonry usando el Plugin
Vue.use(VueMasonry);

export default {
  name: 'CrudCards',
  components: {
    draggable,
    ItemCard
  },
  inject: [
    'displayMode',
    'displayModes',
    'items',
    'draggableGroup',
    'orderable',
    'draggableOptions',
    'itemsList',
    'colLg',
    'colXl',
    'colMd',
    'colSm',
    'colXs',
    'columns',
    'cardClass',
    'cardHideFooter',
    'itemValue',
    'getStateValue',
    'getStateOptions',
    'getStateBadgeVariant',
    'getArrayValue',
    'showItem',
    'updateItem',
    'removeItem',
    'loading',
    'firstLoad',
    'infiniteScroll',
    'messageEmptyResults',
    'messageLoading',
    'onSort',
    'onDraggableAdded',
    'onDraggableChange'
  ],
  data() {
    return {
      drag: false
    };
  },
  computed: {
    currentDisplayMode() {
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
    }
  }
};
</script>
