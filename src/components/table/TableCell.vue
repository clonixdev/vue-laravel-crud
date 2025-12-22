<template>
  <td :scope="column.prop == 'id' ? 'row' : ''" 
      :class="{ 'actions-cell': column.type == 'actions' }">
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
      <span v-else-if="column.type == 'state'">
        <template v-if="stateOptions.length > 0">
          <b-badge 
            v-for="(option, optIndex) in stateOptions" 
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
      <span v-else-if="column.type == 'array' && optionsLoaded">
        {{
          getArrayValue(
            itemValue(column, item),
            column.displayProp,
            column.options
          )
        }}
      </span>
      <span v-else-if="column.type == 'money' || column.type == 'price'">
        {{ formatMoney(itemValue(column, item), column) }}
      </span>
      <span v-else-if="column.type == 'number' && (column.thousandsSeparator || column.decimalSeparator || column.decimals !== undefined)">
        {{ formatNumber(itemValue(column, item), column) }}
      </span>
      <span v-else>
      
        {{ itemValue(column, item) }}
      </span>
    </slot>

    <!-- Modo dropdown cuando useDropdown está activo -->
    <b-dropdown v-if="column.type == 'actions' && column.useDropdown" 
                variant="secondary" 
                size="sm" 
                class="actions-dropdown">
      <template #button-content>
        <b-icon-list></b-icon-list>
      </template>
      <slot name="rowActions" v-bind:item="item" v-bind:index="index" v-bind:showItem="showItem"
        v-bind:updateItem="updateItem" v-bind:removeItem="removeItem">
        <slot name="rowAction" v-bind:item="item" v-bind:index="index" v-bind:showItem="showItem"
          v-bind:updateItem="updateItem" v-bind:removeItem="removeItem">
          <b-dropdown-item @click="showItem(item.id, index)">
            <b-icon-eye></b-icon-eye> Ver
          </b-dropdown-item>
          <b-dropdown-item @click="updateItem(item.id, index)">
            <b-icon-pencil></b-icon-pencil> Editar
          </b-dropdown-item>
          <b-dropdown-item @click="removeItem(item.id, index)" class="text-danger">
            <b-icon-trash></b-icon-trash> Eliminar
          </b-dropdown-item>
        </slot>
      </slot>
    </b-dropdown>
    
    <!-- Modo botones normal (comportamiento original) -->
    <b-button-group v-else-if="column.type == 'actions'" class="actions-button-group">
      <slot name="rowActions" v-bind:item="item" v-bind:index="index" v-bind:showItem="showItem"
        v-bind:updateItem="updateItem" v-bind:removeItem="removeItem">
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
    'getStateOptions',
    'getStateBadgeVariant',
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
  },
  computed: {
    stateOptions() {
      // Permitir usar opciones incluso si optionsLoaded es false, ya que getStateOptions normaliza internamente
      if (this.column.type === 'state' && this.column.options && Array.isArray(this.column.options)) {
        const itemVal = this.itemValue(this.column, this.item);
        const options = this.column.options;
        const result = this.getStateOptions(itemVal, options);
        return result;
      }
      return [];
    }
  },
  methods: {
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
/* Fijar ancho de la columna de acciones */
.actions-cell {
  width: 1%;
  white-space: nowrap;
}

.actions-button-group {
  display: inline-flex;
  flex-wrap: nowrap;
}

.actions-dropdown {
  display: inline-block;
}

/* Asegurar que los botones no se expandan */
.actions-button-group .btn {
  flex-shrink: 0;
}
</style>
