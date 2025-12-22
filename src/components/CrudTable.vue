<template>
  <div :class="['table-responsive', tableContainerClass]" v-if="currentDisplayMode == displayModes.MODE_TABLE">
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
    
    <p v-if="!loading && itemsList && itemsList.length == 0 && !infiniteScroll" class="p-3">
      {{ messageEmptyResults }}
    </p>
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
    }
  }
};
</script>
