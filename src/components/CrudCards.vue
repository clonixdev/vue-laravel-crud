<template>
  <div v-if="displayMode == displayModes.MODE_CARDS">
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
              :getArrayValue="getArrayValue" 
              :showItem="showItem"
              :updateItem="updateItem" 
              :removeItem="removeItem" 
            />
          </slot>
        </div>
      </masonry>
    </draggable>

    <p v-if="!loading && itemsList && itemsList.length == 0 && !infiniteScroll" class="p-3">
      {{ messageEmptyResults }}
    </p>
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
    'getArrayValue',
    'showItem',
    'updateItem',
    'removeItem',
    'loading',
    'infiniteScroll',
    'messageEmptyResults',
    'onSort',
    'onDraggableAdded',
    'onDraggableChange'
  ],
  data() {
    return {
      drag: false
    };
  }
};
</script>
