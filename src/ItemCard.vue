<template>
    <div :class="itemClass">
      <b-card :title="item.title" tag="article" class="mb-2 card-crud" :class="cardClass" :hide-footer="cardHideFooter">
        <slot name="card" v-bind:item="item">
          <div v-for="(column, indexc) in columns" :key="indexc">
            <b-card-text v-if="column.type !== 'actions'">
              {{ column.label }}:
              <slot :name="'cell-' + column.prop" v-bind:item="item" v-bind:index="index" v-bind:itemindex="index"
                v-bind:columnindex="indexc">
                <span v-if="column.type === 'boolean'">
                  <b-badge variant="success" v-if="itemValue(column, item)"><b-icon-check-circle></b-icon-check-circle></b-badge>
                  <b-badge variant="danger" v-else><b-icon-x-circle></b-icon-x-circle></b-badge>
                </span>
                <span v-else-if="column.type === 'date'">
                  {{ itemValue(column, item) }}
                </span>
                <span v-else-if="column.type === 'state'">
                  {{ getStateValue(itemValue(column, item), column.options) }}
                </span>
                <span v-else-if="column.type === 'array'">
                  {{ getArrayValue(itemValue(column, item), column.displayProp, column.options) }}
                </span>
                <span v-else>
                  {{ itemValue(column, item) }}
                </span>
              </slot>
            </b-card-text>
          </div>
        </slot>
        <template v-slot:footer>
          <b-button-group>
            <slot name="rowAction" v-bind:item="item" v-bind:index="index" v-bind:showItem="showItem"
              v-bind:updateItem="updateItem" v-bind:removeItem="removeItem">
              <b-button variant="primary" @click="showItem(item.id, index)"><b-icon-eye></b-icon-eye></b-button>
              <b-button variant="secondary" @click="updateItem(item.id, index)"><b-icon-pencil></b-icon-pencil></b-button>
              <b-button variant="danger" @click="removeItem(item.id, index)"><b-icon-trash></b-icon-trash></b-button>
            </slot>
          </b-button-group>
        </template>
      </b-card>
    </div>
  </template>
  
  <script>
  export default {
    props: {
      item: Object,
      columns: Array,
      index: Number,
      itemClass: {
        type: String,
        default: 'item',
      },
      cardClass: String,
      cardHideFooter: Boolean,
      itemValue: Function,
      getStateValue: Function,
      getArrayValue: Function,
      showItem: Function,
      updateItem: Function,
      removeItem: Function,
    },
  };
  </script>
  