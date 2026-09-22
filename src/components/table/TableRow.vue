<template>
  <tr 
    @mouseover="onRowHover(item, index)" 
    @click="onRowClick(item, index)" 
    :class="['item', { 'selected': item.selected }]"
  >
    <th :colspan="visibleColumnsCount" v-if="grouped && item.crudgroup">
      <span>{{ item.crudgrouplabel }}</span>
    </th>

    <slot name="row" v-bind:item="item" v-else>
      <template v-for="(column, indexc) in columns">
      <TableCell 
        v-if="isColumnVisibleInTable(column)"
        :key="'td-' + (column.prop || indexc)"
        :column="column"
        :item="item"
        :index="index"
        :columnIndex="indexc"
      >
        <template v-for="(_, name) in $slots" v-slot:[name]="slotProps">
          <slot :name="name" v-bind="slotProps" />
        </template>
      </TableCell>
      </template>
    </slot>
  </tr>
</template>

<script>
import TableCell from './TableCell.vue';

export default {
  name: 'TableRow',
  components: {
    TableCell
  },
  props: {
    item: Object,
    index: Number,
    grouped: Boolean
  },
  inject: [
    'columns',
    'onRowHover',
    'onRowClick',
    'isColumnVisibleInTable'
  ],
  computed: {
    visibleColumnsCount() {
      if (!this.columns || !this.isColumnVisibleInTable) {
        return (this.columns && this.columns.length) || 1;
      }
      return this.columns.filter((column) => this.isColumnVisibleInTable(column)).length || 1;
    }
  }
};
</script>
