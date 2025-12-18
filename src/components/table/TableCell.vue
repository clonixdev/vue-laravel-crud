<template>
  <td :scope="column.prop == 'id' ? 'row' : ''">
    <slot :name="'cell-' + column.prop" v-bind:item="item" v-bind:index="index" v-bind:itemindex="index"
      v-bind:columnindex="columnIndex">
      <span v-if="column.type == 'boolean'">
        <b-badge variant="success" v-if="itemValue(column, item) == 'true' ||
          itemValue(column, item) == 1 ||
          itemValue(column, item) == '1'
        "><b-icon-check-circle></b-icon-check-circle></b-badge>
        <b-badge variant="danger" v-if="!itemValue(column, item) ||
          itemValue(column, item) == '0' ||
          itemValue(column, item) == 'false'
        "><b-icon-x-circle></b-icon-x-circle></b-badge>
      </span>
      <span v-else-if="column.type == 'date'">
        {{
          itemValue(column, item)
            ? moment(itemValue(column, item)).format(
              column.format ? column.format : 'L LT'
            )
            : itemValue(column, item)
        }}
      </span>
      <span v-else-if="column.type == 'select'">
        <b-form-checkbox v-model="item.selected" @change="onCheckSelect($event, item)">
        </b-form-checkbox>
      </span>
      <span v-else-if="column.type == 'checkbox'">
        <b-form-checkbox v-model="item.selected" @change="onCheckSelect($event, item)">
        </b-form-checkbox>
      </span>
      <span v-else-if="column.type == 'state' && optionsLoaded">
        {{
          getStateValue(itemValue(column, item), column.options)
        }}
      </span>
      <span v-else-if="column.type == 'array' && optionsLoaded">
        {{
          getArrayValue(
            itemValue(column, item),
            column.displayProp,
            column.options
          )
        }}
      </span>
      <span v-else>
        {{ itemValue(column, item) }}
      </span>
    </slot>

    <b-button-group v-if="column.type == 'actions'">
      <slot name="rowAction" v-bind:item="item" v-bind:index="index" v-bind:showItem="showItem"
        v-bind:updateItem="updateItem" v-bind:removeItem="removeItem">
        <b-button variant="primary" @click="showItem(item.id, index)">
          <b-icon-eye></b-icon-eye>
        </b-button>
        <b-button variant="secondary" @click="updateItem(item.id, index)">
          <b-icon-pencil></b-icon-pencil>
        </b-button>
        <b-button variant="danger" @click="removeItem(item.id, index)">
          <b-icon-trash></b-icon-trash>
        </b-button>
      </slot>
    </b-button-group>
  </td>
</template>

<script>
import moment from "moment";

export default {
  name: 'TableCell',
  props: {
    column: Object,
    item: Object,
    index: Number,
    columnIndex: Number
  },
  inject: [
    'itemValue',
    'getStateValue',
    'getArrayValue',
    'onCheckSelect',
    'showItem',
    'updateItem',
    'removeItem',
    'optionsLoaded'
  ],
  data() {
    return {
      moment: moment
    };
  }
};
</script>
