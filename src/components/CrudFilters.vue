<template>
  <div class="px-3 py-2">
    <div v-for="(column, indexc) in columns" :key="indexc">
      <div v-if="isColumnHasFilter(column)">
        <slot :name="'sidebar-filter-' + column.prop" v-bind:column="column" v-bind:filter="filter"
          v-bind:internalFilterByProp="internalFilterByProp" v-if="internalFilterByProp(column.prop)">
          <div class="form-group" v-if="column.type == 'boolean'">
            <label>{{ column.label }}</label>

            <select class="form-control" v-model="internalFilterByProp(column.prop).value"
              @change="onChangeFilter($event)">
              <option value=""></option>
              <option value="1">Sí</option>
              <option value="0">No</option>
            </select>
          </div>
          <div class="form-group" v-else-if="column.type == 'date'">
            <div class="row">
              <div class="col-6">
                <b-form-datepicker v-model="internalFilterByProp(column.prop + '_from').value
                  " today-button reset-button close-button locale="es"></b-form-datepicker>
              </div>
              <div class="col-6">
                <b-form-datepicker v-model="internalFilterByProp(column.prop + '_to').value
                  " today-button reset-button close-button locale="es"></b-form-datepicker>
              </div>
            </div>
          </div>

          <div class="form-group" v-else-if="column.type == 'state'">
            <label>{{ column.label }}</label>

            <select class="form-control" v-model="internalFilterByProp(column.prop).value"
              @change="onChangeFilter($event)" v-if="optionsLoaded">
              <option value=""></option>
              <option :value="option.id ? option.id : option.value" v-for="option in column.options"
                :key="option.id ? option.id : option.value">
                {{
                  option.text
                    ? option.text
                    : option.label
                      ? option.label
                      : ""
                }}
              </option>
            </select>
          </div>

          <div class="form-group" v-else-if="column.type == 'array'">
            <label>{{ column.label }}</label>

            <select class="form-control" v-model="internalFilterByProp(column.prop).value"
              @change="onChangeFilter($event)" v-if="optionsLoaded">
              <option value=""></option>
              <template v-if="column.options">
                <option :value="option.id ? option.id : option.value" v-for="option in column.options"
                  :key="option.id ? option.id : option.value">
                  {{
                    option.text
                      ? option.text
                      : option.label
                        ? option.label
                        : ""
                  }}
                </option>
              </template>
            </select>
          </div>

          <div class="form-group" v-else>
            <label>{{ column.label }}</label>

            <input class="form-control" v-model.lazy="internalFilterByProp(column.prop).value"
              @change="onChangeFilter($event)" />
          </div>
        </slot>
      </div>
    </div>

    <div class="mt-3 d-flex justify-content-center">
      <button class="btn btn-light" @click="resetFilters()">
        Reset
      </button>
      <button class="btn btn-info" @click="onChangeFilter($event)">
        Filtrar
      </button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'CrudFilters',
  inject: [
    'columns',
    'isColumnHasFilter',
    'filter',
    'internalFilterByProp',
    'optionsLoaded',
    'onChangeFilter',
    'resetFilters'
  ]
};
</script>
