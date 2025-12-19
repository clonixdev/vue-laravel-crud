<template>
  <thead class="thead-light">
    <tr>
      <slot name="rowHead">
        <th v-for="(column, indexc) in columns" :key="indexc"
          :style="{ width: column.width ? column.width : (column.type == 'actions' ? '1%' : 'inherit') }" 
          :class="{ 'actions-header': column.type == 'actions' }"
          scope="col"
          @mouseenter="hoveredColumn = column.prop"
          @mouseleave="hoveredColumn = null">
          <slot :name="'filter-' + column.prop" v-bind:column="column" v-bind:filter="filter"
            v-bind:internalFilterByProp="internalFilterByProp" v-if="enableFilters &&
              filtersVisible &&
              isColumnHasFilter(column) &&
              (internalFilterByProp(column.prop) || internalFilterByProp(column.prop + '_from'))
            ">

            <div class="form-group">
              <select v-if="column.type == 'boolean'" class="form-control form-control-md p-2"
                v-model="internalFilterByProp(column.prop).value" @change="onChangeFilter($event)">
                <option value="">{{ column.label }}</option>
                <option value="1">Sí</option>
                <option value="0">No</option>
              </select>

              <div class="row" v-else-if="column.type == 'date'">
                <div class="col-6">
                  <b-form-datepicker v-model="internalFilterByProp(column.prop + '_from').value
                    " today-button reset-button close-button locale="es"
                    class="form-control-md p-2"></b-form-datepicker>
                </div>
                <div class="col-6">
                  <b-form-datepicker v-model="internalFilterByProp(column.prop + '_to').value
                    " today-button reset-button close-button locale="es"
                    class="form-control-md p-2"></b-form-datepicker>
                </div>
              </div>

              <div class="row" v-else-if="column.type == 'number' || column.type == 'money'">
                <div class="col-6">
                  <input 
                    type="number" 
                    class="form-control form-control-md p-2" 
                    v-model.number="internalFilterByProp(column.prop + '_from').value"
                    :step="column.type == 'money' ? '0.01' : '1'"
                    @change="onChangeFilter($event)"
                    placeholder="Desde" />
                </div>
                <div class="col-6">
                  <input 
                    type="number" 
                    class="form-control form-control-md p-2" 
                    v-model.number="internalFilterByProp(column.prop + '_to').value"
                    :step="column.type == 'money' ? '0.01' : '1'"
                    @change="onChangeFilter($event)"
                    placeholder="Hasta" />
                </div>
              </div>

              <select v-else-if="column.type == 'state' && column.options && Array.isArray(column.options)" class="form-control form-control-md p-2"
                v-model="internalFilterByProp(column.prop).value" @change="onChangeFilter($event)"
                :placeholder="column.label">
                <option value="">{{ column.label }}</option>
                <option :value="option.value" v-for="(option, indexo) in column.options" :key="indexo">
                  {{ option.text }}
                </option>
              </select>

              <select v-else-if="column.type == 'array' && column.options && Array.isArray(column.options)" class="form-control form-control-md p-2"
                v-model="internalFilterByProp(column.prop).value" @change="onChangeFilter($event)"
                :placeholder="column.label">
                <option value="">{{ column.label }}</option>
                <option :value="option.value" v-for="(option, indexo) in column.options" :key="indexo">
                  {{ option.text }}
                </option>
              </select>

              <b-form-checkbox v-else-if="column.type == 'checkbox'" name="select-all"
                :checked="isAllSelected"
                @change="toggleAll">
              </b-form-checkbox>

              <b-form-checkbox v-else-if="column.type == 'select'" name="select-all" 
                :checked="isAllSelected"
                @change="toggleAll">
              </b-form-checkbox>

              <input v-else class="form-control form-control-md p-2"
                v-model="internalFilterByProp(column.prop).value" :placeholder="column.label"
                @change="onChangeFilter($event)" />

            </div>
          </slot>
          <span v-else-if="column.type == 'select'">
            <b-form-checkbox name="select-all" 
              :checked="isAllSelected"
              @change="toggleAll"></b-form-checkbox>
          </span>
          <span v-else-if="column.type == 'checkbox'">
            <b-form-checkbox name="select-all" 
              :checked="isAllSelected"
              @change="toggleAll"></b-form-checkbox>
          </span>
          <span v-else>{{ column.label }}</span>

          <span
            v-if="isSortableColumn(column) && shouldShowSortIcon(column)"
            class="sort-filter" @click="toggleSortFilter(column)">
            <b-icon-sort-up
              v-if="getSortIconDirection(column) === 'up'"></b-icon-sort-up>
            <b-icon-sort-down
              v-if="getSortIconDirection(column) === 'down'"></b-icon-sort-down>
          </span>
        </th>
      </slot>
    </tr>
  </thead>
</template>

<script>
export default {
  name: 'TableHeader',
  inject: [
    'columns',
    'enableFilters',
    'filtersVisible',
    'isColumnHasFilter',
    'internalFilterByProp',
    'onChangeFilter',
    'toggleAll',
    'toggleSortFilter',
    'sortable',
    'optionsLoaded',
    'isAllSelected'
  ],
  data() {
    return {
      hoveredColumn: null
    };
  },
  methods: {
    isSortableColumn(column) {
      return this.sortable && 
             column.type != 'select' && 
             column.type != 'checkbox' && 
             this.internalFilterByProp(column.prop + '_sort');
    },
    shouldShowSortIcon(column) {
      const sortFilter = this.internalFilterByProp(column.prop + '_sort');
      return this.hoveredColumn === column.prop || sortFilter.value;
    },
    getSortIconDirection(column) {
      const sortFilter = this.internalFilterByProp(column.prop + '_sort');
      const sortValue = sortFilter.value;
      
      if (sortValue === 'DESC') {
        return 'down';
      } else if (sortValue === 'ASC') {
        return 'up';
      } else if (this.hoveredColumn === column.prop) {
        return 'up';
      }
      return null;
    }
  }
};
</script>

<style scoped>
/* Fijar ancho de la columna de acciones en el header */
.actions-header {
  width: 1%;
  white-space: nowrap;
}
</style>
