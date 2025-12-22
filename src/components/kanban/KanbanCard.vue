<template>
  <div class="kanban-card">
    <b-card 
      :title="item.title || item.name || `Item ${item.id}`" 
      tag="article" 
      class="mb-2 card-crud" 
      :class="cardClass" 
      :hide-footer="cardHideFooter"
    >
      <slot name="card" v-bind:item="item">
        <div v-for="(column, indexc) in columns" :key="indexc">
          <b-card-text v-if="column.type !== 'actions' && column.prop !== 'id'">
            <small class="text-muted">{{ column.label }}:</small>
            <div class="mb-1">
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
                  <template v-if="getStateOptionsForColumn(column, item).length > 0">
                    <b-badge 
                      v-for="(option, optIndex) in getStateOptionsForColumn(column, item)" 
                      :key="optIndex" 
                      :variant="getStateBadgeVariant(option)"
                      class="mr-1"
                    >
                      {{ option.text }}
                    </b-badge>
                  </template>
                  <span v-else>
                    {{ itemValue(column, item) }}
                  </span>
                </span>
                <span v-else-if="column.type === 'array'">
                  {{ getArrayValue(itemValue(column, item), column.displayProp, column.options) }}
                </span>
                <span v-else-if="column.type === 'money' || column.type === 'price'">
                  {{ formatMoney(itemValue(column, item), column) }}
                </span>
                <span v-else-if="column.type === 'number' && (column.thousandsSeparator || column.decimalSeparator || column.decimals !== undefined)">
                  {{ formatNumber(itemValue(column, item), column) }}
                </span>
                <span v-else>
                  {{ itemValue(column, item) }}
                </span>
              </slot>
            </div>
          </b-card-text>
        </div>
      </slot>
      
      <template v-slot:footer>
        <b-button-group size="sm">
          <slot name="rowActions" v-bind:item="item" v-bind:index="index" v-bind:showItem="showItem"
            v-bind:updateItem="updateItem" v-bind:removeItem="removeItem">
            <slot name="rowAction" v-bind:item="item" v-bind:index="index" v-bind:showItem="showItem"
              v-bind:updateItem="updateItem" v-bind:removeItem="removeItem">
              <b-button variant="primary" @click="showItem(item.id, index)"><b-icon-eye></b-icon-eye></b-button>
              <b-button variant="secondary" @click="updateItem(item.id, index)"><b-icon-pencil></b-icon-pencil></b-button>
              <b-button variant="danger" @click="removeItem(item.id, index)"><b-icon-trash></b-icon-trash></b-button>
            </slot>
          </slot>
        </b-button-group>
      </template>
    </b-card>
  </div>
</template>

<script>
export default {
  name: 'KanbanCard',
  props: {
    item: Object,
    columns: Array,
    index: Number,
    cardClass: String,
    cardHideFooter: Boolean,
    itemValue: Function,
    getStateValue: Function,
    getStateOptions: Function,
    getStateBadgeVariant: Function,
    getArrayValue: Function,
    showItem: Function,
    updateItem: Function,
    removeItem: Function,
  },
  methods: {
    getStateOptionsForColumn(column, item) {
      if (column.type === 'state' && column.options) {
        return this.getStateOptions(this.itemValue(column, item), column.options);
      }
      return [];
    },
    formatNumber(value, column) {
      if (value === null || value === undefined || value === '') {
        return '';
      }
      
      const numValue = parseFloat(value);
      if (isNaN(numValue)) {
        return value;
      }
      
      const thousandsSep = column.thousandsSeparator || '.';
      const decimalSep = column.decimalSeparator || ',';
      const decimals = column.decimals !== undefined ? column.decimals : (numValue % 1 === 0 ? 0 : 2);
      
      // Formatear número con separadores
      const parts = numValue.toFixed(decimals).split('.');
      const integerPart = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, thousandsSep);
      const decimalPart = parts[1] || '';
      
      if (decimals > 0 && decimalPart) {
        return `${integerPart}${decimalSep}${decimalPart}`;
      }
      return integerPart;
    },
    formatMoney(value, column) {
      const formatted = this.formatNumber(value, column);
      if (formatted === '') {
        return '';
      }
      const symbol = column.symbol || '$';
      return `${symbol}${formatted}`;
    }
  }
};
</script>

<style scoped>
.kanban-card {
  background: #ffffff;
  border-radius: 4px;
  padding: 0.5rem;
  box-shadow: 0 1px 2px rgba(0, 0, 0, 0.1);
  cursor: grab;
  transition: box-shadow 0.2s ease;
}

.kanban-card:hover {
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.15);
}

.kanban-card:active {
  cursor: grabbing;
}

.card-crud {
  border: 1px solid #e1e5e9;
}

.card-crud .card-title {
  font-size: 0.9rem;
  margin-bottom: 0.5rem;
}

.card-crud .card-text {
  font-size: 0.8rem;
  margin-bottom: 0.25rem;
}
</style>
