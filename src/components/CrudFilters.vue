<template>
  <div class="px-3 py-2">
    <div v-for="(column, indexc) in columns" :key="indexc">
      <div v-if="isColumnHasFilter(column)">
        <slot :name="'sidebar-filter-' + column.prop" v-bind:column="column" v-bind:filter="filter"
          v-bind:internalFilterByProp="internalFilterByProp" v-bind:getFilterForColumn="getFilterForColumn">
          <div class="form-group" v-if="column.type == 'boolean'">
            <label>{{ column.label }}</label>

            <select class="form-control" v-model="getFilterForColumn(column).value"
              @change="onChangeFilter($event)">
              <option value=""></option>
              <option value="1">Sí</option>
              <option value="0">No</option>
            </select>
          </div>
          <div class="form-group" v-else-if="column.type == 'date'">
            <div class="row">
              <div class="col-6">
                <b-form-datepicker v-model="getFilterForDateFrom(column).value
                  " today-button reset-button close-button locale="es"></b-form-datepicker>
              </div>
              <div class="col-6">
                <b-form-datepicker v-model="getFilterForDateTo(column).value
                  " today-button reset-button close-button locale="es"></b-form-datepicker>
              </div>
            </div>
          </div>

          <div class="form-group" v-else-if="column.type == 'number' || column.type == 'money'">
            <label>{{ column.label }}</label>
            <div class="row">
              <div class="col-6">
                <input 
                  type="number" 
                  class="form-control" 
                  v-model.number="getFilterForDateFrom(column).value"
                  :step="column.type == 'money' ? '0.01' : '1'"
                  @change="onChangeFilter($event)"
                  placeholder="Desde" />
              </div>
              <div class="col-6">
                <input 
                  type="number" 
                  class="form-control" 
                  v-model.number="getFilterForDateTo(column).value"
                  :step="column.type == 'money' ? '0.01' : '1'"
                  @change="onChangeFilter($event)"
                  placeholder="Hasta" />
              </div>
            </div>
          </div>

          <div class="form-group" v-else-if="column.type == 'state'">
            <label>{{ column.label }}</label>

            <select class="form-control" v-model="getFilterForColumn(column).value"
              @change="onChangeFilter($event)" v-if="column.options && Array.isArray(column.options)">
              <option value=""></option>
              <option :value="option.value" v-for="option in column.options"
                :key="option.value || option.id">
                {{ option.text }}
              </option>
            </select>
          </div>

          <div class="form-group" v-else-if="column.type == 'array'">
            <label>{{ column.label }}</label>

            <select class="form-control" v-model="getFilterForColumn(column).value"
              @change="onChangeFilter($event)" v-if="column.options && Array.isArray(column.options)">
              <option value=""></option>
              <option :value="option.value" v-for="option in column.options"
                :key="option.value || option.id">
                {{ option.text }}
              </option>
            </select>
          </div>

          <div class="form-group" v-else>
            <label>{{ column.label }}</label>

            <input class="form-control" v-model.lazy="getFilterForColumn(column).value"
              @change="onChangeFilter($event)" />
          </div>
        </slot>
      </div>
    </div>

    <!-- Filtros custom -->
    <div v-for="(customFilter, indexcf) in customFilters" :key="'custom-' + indexcf">
      <div v-if="isCustomFilterEnabled(customFilter)">
        <!-- Slot personalizado para filtro custom -->
        <slot :name="'sidebar-filter-custom-' + customFilter.prop" v-bind:column="customFilter" v-bind:filter="filter"
          v-bind:internalFilterByProp="internalFilterByProp" v-bind:getFilterForColumn="getFilterForColumn">
          
          <!-- Si type es una función callback -->
          <RenderCustomFilter 
            v-if="typeof customFilter.type === 'function'"
            :render-function="customFilter.type"
            :custom-filter="customFilter"
            :filter="filter"
            :internal-filter-by-prop="internalFilterByProp"
            :get-filter-for-column="getFilterForColumn"
            :on-change-filter="onChangeFilter"
          />

          <!-- Si type es string, usar la misma lógica que las columnas -->
          <template v-else>
            <div class="form-group" v-if="customFilter.type == 'boolean'">
              <label>{{ customFilter.label }}</label>

              <select class="form-control" v-model="getFilterForColumn(customFilter).value"
                @change="onChangeFilter($event)">
                <option value=""></option>
                <option value="1">Sí</option>
                <option value="0">No</option>
              </select>
            </div>

            <div class="form-group" v-else-if="customFilter.type == 'date'">
              <label>{{ customFilter.label }}</label>
              <div class="row">
                <div class="col-6">
                  <b-form-datepicker v-model="getFilterForDateFrom(customFilter).value
                    " today-button reset-button close-button locale="es"></b-form-datepicker>
                </div>
                <div class="col-6">
                  <b-form-datepicker v-model="getFilterForDateTo(customFilter).value
                    " today-button reset-button close-button locale="es"></b-form-datepicker>
                </div>
              </div>
            </div>

            <div class="form-group" v-else-if="customFilter.type == 'number' || customFilter.type == 'money'">
              <label>{{ customFilter.label }}</label>
              <div class="row">
                <div class="col-6">
                  <input 
                    type="number" 
                    class="form-control" 
                    v-model.number="getFilterForDateFrom(customFilter).value"
                    :step="customFilter.type == 'money' ? '0.01' : '1'"
                    @change="onChangeFilter($event)"
                    placeholder="Desde" />
                </div>
                <div class="col-6">
                  <input 
                    type="number" 
                    class="form-control" 
                    v-model.number="getFilterForDateTo(customFilter).value"
                    :step="customFilter.type == 'money' ? '0.01' : '1'"
                    @change="onChangeFilter($event)"
                    placeholder="Hasta" />
                </div>
              </div>
            </div>

            <div class="form-group" v-else-if="customFilter.type == 'state'">
              <label>{{ customFilter.label }}</label>

              <select class="form-control" v-model="getFilterForColumn(customFilter).value"
                @change="onChangeFilter($event)" v-if="customFilter.options && Array.isArray(customFilter.options)">
                <option value=""></option>
                <option :value="option.value" v-for="option in customFilter.options"
                  :key="option.value || option.id">
                  {{ option.text }}
                </option>
              </select>
            </div>

            <div class="form-group" v-else-if="customFilter.type == 'array'">
              <label>{{ customFilter.label }}</label>

              <select class="form-control" v-model="getFilterForColumn(customFilter).value"
                @change="onChangeFilter($event)" v-if="customFilter.options && Array.isArray(customFilter.options)">
                <option value=""></option>
                <option :value="option.value" v-for="option in customFilter.options"
                  :key="option.value || option.id">
                  {{ option.text }}
                </option>
              </select>
            </div>

            <div class="form-group" v-else>
              <label>{{ customFilter.label }}</label>

              <input class="form-control" v-model.lazy="getFilterForColumn(customFilter).value"
                @change="onChangeFilter($event)" />
            </div>
          </template>
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
// Componente funcional para renderizar filtros custom con callback
const RenderCustomFilter = {
  functional: true,
  props: {
    renderFunction: {
      type: Function,
      required: true
    },
    customFilter: {
      type: Object,
      required: true
    },
    filter: {
      type: Array,
      default: () => []
    },
    internalFilterByProp: {
      type: Function,
      required: true
    },
    getFilterForColumn: {
      type: Function,
      required: true
    },
    onChangeFilter: {
      type: Function,
      required: true
    }
  },
  render(h, context) {
    const { renderFunction, customFilter, filter, internalFilterByProp, getFilterForColumn, onChangeFilter } = context.props;
    return renderFunction(h, {
      column: customFilter,
      filter: filter,
      internalFilterByProp: internalFilterByProp,
      getFilterForColumn: getFilterForColumn,
      onChangeFilter: onChangeFilter
    });
  }
};

export default {
  name: 'CrudFilters',
  components: {
    RenderCustomFilter
  },
  inject: [
    'columns',
    'customFilters',
    'isColumnHasFilter',
    'isCustomFilterEnabled',
    'filter',
    'internalFilterByProp',
    'optionsLoaded',
    'onChangeFilter',
    'resetFilters',
    'setupFilters',
    'internalFilters'
  ],
  methods: {
    // Método helper para obtener el filtro de forma segura, creándolo si no existe
    getFilterForColumn(column) {
      let filter = this.internalFilterByProp(column.prop);
      
      // Si el filtro no existe, intentar inicializar los filtros
      if (!filter) {
        // Verificar si hay filtros inicializados
        if (this.internalFilters && this.internalFilters.length === 0) {
          this.setupFilters();
          // Intentar obtener el filtro nuevamente después de inicializar
          filter = this.internalFilterByProp(column.prop);
        }
      }
      
      // Si aún no existe, crear un objeto temporal para evitar errores
      if (!filter) {
        return {
          value: null
        };
      }
      
      return filter;
    },
    
    // Método helper específico para campos de fecha (from)
    getFilterForDateFrom(column) {
      const filter = this.internalFilterByProp(column.prop + '_from');
      if (!filter) {
        if (this.internalFilters && this.internalFilters.length === 0) {
          this.setupFilters();
          return this.internalFilterByProp(column.prop + '_from') || { value: null };
        }
        return { value: null };
      }
      return filter;
    },
    
    // Método helper específico para campos de fecha (to)
    getFilterForDateTo(column) {
      const filter = this.internalFilterByProp(column.prop + '_to');
      if (!filter) {
        if (this.internalFilters && this.internalFilters.length === 0) {
          this.setupFilters();
          return this.internalFilterByProp(column.prop + '_to') || { value: null };
        }
        return { value: null };
      }
      return filter;
    }
  }
};
</script>
