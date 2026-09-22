<template>
  <div :class="['table-responsive', tableContainerClass]" v-if="currentDisplayMode == displayModes.MODE_TABLE">
    <CrudSkeleton
      v-if="isInitialLoading"
      :columns="columnsList"
      :message="messageLoading"
      :is-column-visible-in-table="isColumnVisibleInTableFn"
      show-table
    />

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
          v-bind="draggableOptions"
          item-key="id"
        >
          <template #item="{ element, index }">
            <TableRow
              :item="element"
              :index="index"
              :grouped="grouped"
              class="item"
            >
              <template v-for="(_, name) in $slots" v-slot:[name]="slotProps">
                <slot :name="name" v-bind="slotProps" />
              </template>
            </TableRow>
          </template>
        </draggable>
      </table>

      <CrudEmptyState
        v-if="firstLoadValue && itemsList && itemsList.length == 0 && !infiniteScroll"
        :message="messageEmptyResults"
        icon="inbox"
      />
    </template>
  </div>
</template>

<script>
import draggable from 'vuedraggable';
import TableHeader from './table/TableHeader.vue';
import TableRow from './table/TableRow.vue';
import CrudSkeleton from './CrudSkeleton.vue';
import CrudEmptyState from './CrudEmptyState.vue';

export default {
  name: 'CrudTable',
  components: {
    draggable,
    TableHeader,
    TableRow,
    CrudSkeleton,
    CrudEmptyState,
  },
  inject: {
    bootstrapFactory: { default: null },
    displayMode: { default: null },
    getDisplayMode: { default: null },
    displayModes: { default: () => ({ MODE_TABLE: 1, MODE_CARDS: 2 }) },
    tableContainerClass: { default: '' },
    tableClass: { default: '' },
    columns: { default: () => [] },
    items: { default: () => [] },
    draggableGroup: { default: null },
    orderable: { default: false },
    draggableOptions: { default: () => ({}) },
    itemsList: { default: () => [] },
    grouped: { default: false },
    loading: { default: null },
    firstLoad: { default: null },
    infiniteScroll: { default: false },
    messageEmptyResults: { default: '' },
    messageLoading: { default: '' },
    isColumnVisibleInTable: { default: null },
    onSort: { default: () => {} },
    onDraggableAdded: { default: () => {} },
    onDraggableChange: { default: () => {} },
  },
  data() {
    return {
      drag: false,
    };
  },
  computed: {
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
    columnsList() {
      return Array.isArray(this.columns) ? this.columns : [];
    },
    isColumnVisibleInTableFn() {
      return typeof this.isColumnVisibleInTable === 'function'
        ? this.isColumnVisibleInTable
        : null;
    },
  },
};
</script>
