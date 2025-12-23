<template>
  <div :class="['table-responsive', tableContainerClass]" v-if="currentDisplayMode == displayModes.MODE_TABLE">
    <!-- Spinner durante la carga inicial -->
    <div v-if="loadingValue || !firstLoadValue" class="text-center p-5">
      <b-spinner variant="primary" label="Cargando..."></b-spinner>
      <p class="mt-2">{{ messageLoading }}</p>
    </div>

    <!-- Tabla con datos -->
    <template v-else>
      <table :class="['table table-hover table-striped w-100', tableClass]">
        <TableHeader />
        
        <draggable 
          :list="items" 
          :group="draggableGroup" 
          tag="tbody" 
          :draggable="orderable ? '.item' : '.none'"
          @start="drag = true" 
          @end="drag = false" 
          @sort="onSort()" 
          @add="onDraggableAdded($event)"
          @change="onDraggableChange($event)" 
          :options="draggableOptions"
        >
          <TableRow 
            v-for="(item, index) in itemsList" 
            v-bind:key="index"
            :item="item"
            :index="index"
            :grouped="grouped"
          >
            <template v-for="(slot, name) in $scopedSlots" v-slot:[name]="slotProps">
              <slot :name="name" v-bind="slotProps" />
            </template>
          </TableRow>
        </draggable>
      </table>
      
      <p v-if="firstLoadValue && itemsList && itemsList.length == 0 && !infiniteScroll" class="p-3">
        {{ messageEmptyResults }}
      </p>
    </template>
  </div>
</template>

<script>
import draggable from "vuedraggable";
import TableHeader from './table/TableHeader.vue';
import TableRow from './table/TableRow.vue';

export default {
  name: 'CrudTable',
  components: {
    draggable,
    TableHeader,
    TableRow
  },
  inject: [
    'displayMode',
    'displayModes',
    'tableContainerClass',
    'tableClass',
    'items',
    'draggableGroup',
    'orderable',
    'draggableOptions',
    'itemsList',
    'grouped',
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
