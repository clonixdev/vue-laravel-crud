<template>
  <tr @mouseover="onRowHover(item, index)" @click="onRowClick(item, index)" class="item">
    <th :colspan="columns.length" v-if="grouped && item.crudgroup">
      <span>{{ item.crudgrouplabel }}</span>
    </th>

    <slot name="row" v-bind:item="item" v-else>
      <TableCell 
        v-for="(column, indexc) in columns" 
        :key="indexc"
        :column="column"
        :item="item"
        :index="index"
        :columnIndex="indexc"
      />
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
    'onRowClick'
  ]
};
</script>
