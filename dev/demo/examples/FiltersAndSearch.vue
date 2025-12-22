<!--
  EJEMPLO: Filtros Avanzados y Búsqueda
  
  Este ejemplo demuestra las funcionalidades de filtrado avanzado y búsqueda global.
  Los filtros permiten filtrar por columnas específicas y la búsqueda busca en todos los campos.
  
  CONFIGURACIONES UTILIZADAS:
  - enableFilters: true = Habilita el panel de filtros avanzados
  - showSearch: true = Muestra el campo de búsqueda global
  - sortable: true = Permite ordenar las columnas haciendo click en los encabezados
  
  CONFIGURACIONES DISPONIBLES ADICIONALES:
  - filter: Array de filtros predefinidos - Por defecto: []
  - customFilters: Array de filtros personalizados para columnas no visibles - Por defecto: []
  - search: Texto de búsqueda inicial - Por defecto: ""
  - searchPlaceholder: Placeholder del campo de búsqueda - Por defecto: "Buscar..."
  - showPrincipalSortBtn: Mostrar botón de ordenamiento principal - Por defecto: false
  - principalSortColumn: Columna para ordenamiento principal - Por defecto: "id"
  
  NOTA: Los filtros custom pueden usar tipos string (text, number, date, boolean, etc.) 
  o un callback que recibe (h, props) y retorna un VNode para renderizado personalizado.
-->
<template>
  <div>
    <h6 class="mb-3">Ejemplo con filtros avanzados y búsqueda</h6>
    
    <VueLaravelCrud
      :title="title"
      :modelName="modelName"
      :model="model"
      :models="localData"
      :columns="columns"
      :customFilters="customFilters"
      :ajax="ajax"
      :apiUrl="apiUrl"
      :enableFilters="true"
      :showSearch="true"
      :sortable="true"
      @select="onSelect"
      @itemSaved="onItemSaved"
      @itemDeleted="onItemDeleted"
    >
      <template v-slot:form="slotProps">
        <b-form-group label="Nombre:" description="Nombre completo del usuario">
          <b-form-input
            v-model="slotProps.item.name"
            type="text"
            required
            placeholder="Ingrese el nombre"
          ></b-form-input>
        </b-form-group>
        
        <b-form-group label="Email:" description="Correo electrónico">
          <b-form-input
            v-model="slotProps.item.email"
            type="email"
            required
            placeholder="usuario@ejemplo.com"
          ></b-form-input>
        </b-form-group>
        
        <b-form-group label="Edad:" description="Edad en años">
          <b-form-input
            v-model="slotProps.item.age"
            type="number"
            min="1"
            max="120"
            placeholder="25"
          ></b-form-input>
        </b-form-group>
        
        <b-form-group label="Estado:" description="Estado del usuario">
          <b-form-select v-model="slotProps.item.status">
            <option value="active">Activo</option>
            <option value="inactive">Inactivo</option>
            <option value="pending">Pendiente</option>
          </b-form-select>
        </b-form-group>
        
        <b-form-group label="Activo:" description="Usuario activo en el sistema">
          <b-form-checkbox v-model="slotProps.item.is_active" :value="true" :unchecked-value="false">
            Usuario activo
          </b-form-checkbox>
        </b-form-group>
      </template>
      
      <template v-slot:show="slotProps">
        <b-list-group>
          <b-list-group-item class="d-flex justify-content-between align-items-center">
            ID
            <b-badge variant="primary" pill>{{ slotProps.item.id }}</b-badge>
          </b-list-group-item>
          <b-list-group-item class="d-flex justify-content-between align-items-center">
            Nombre
            <b-badge variant="info" pill>{{ slotProps.item.name }}</b-badge>
          </b-list-group-item>
          <b-list-group-item class="d-flex justify-content-between align-items-center">
            Email
            <b-badge variant="secondary" pill>{{ slotProps.item.email }}</b-badge>
          </b-list-group-item>
          <b-list-group-item class="d-flex justify-content-between align-items-center">
            Edad
            <b-badge variant="warning" pill>{{ slotProps.item.age }} años</b-badge>
          </b-list-group-item>
          <b-list-group-item class="d-flex justify-content-between align-items-center">
            Estado
            <b-badge 
              :variant="getStatusVariant(slotProps.item.status)" 
              pill
            >
              {{ getStatusText(slotProps.item.status) }}
            </b-badge>
          </b-list-group-item>
          <b-list-group-item class="d-flex justify-content-between align-items-center">
            Activo
            <b-badge :variant="slotProps.item.is_active ? 'success' : 'secondary'" pill>
              {{ slotProps.item.is_active ? 'Sí' : 'No' }}
            </b-badge>
          </b-list-group-item>
        </b-list-group>
      </template>
    </VueLaravelCrud>
    
    <CodeSnippet :code="exampleCode" />
  </div>
</template>

<script>
import VueLaravelCrud from '../../../src/vue-laravel-crud.vue';
import CodeSnippet from '../components/CodeSnippet.vue';
import { isStaticMode } from '../utils/staticMode.js';
import { generateMockData } from '../data/mockData.js';

export default {
  name: 'FiltersAndSearch',
  components: {
    VueLaravelCrud,
    CodeSnippet
  },
  data() {
    const staticMode = isStaticMode();
    
    return {
      title: "Usuarios con Filtros",
      modelName: "users",
      ajax: !staticMode,
      apiUrl: staticMode ? "" : "http://localhost:3001/api",
      localData: staticMode ? generateMockData('users', 20) : [],
      selectedItem: null,
      model: {
        name: "",
        email: "",
        age: null,
        status: "active",
        is_active: true
      },
      columns: [
        { label: "ID", prop: "id", type: "number", width: "80px" },
        { label: "Nombre", prop: "name", type: "text" },
        { label: "Email", prop: "email", type: "text" },
        { label: "Edad", prop: "age", type: "number" },
        { 
          label: "Estado", 
          prop: "status", 
          type: "state",
          options: [
            { id: "active", text: "Activo" },
            { id: "inactive", text: "Inactivo" },
            { id: "pending", text: "Pendiente" }
          ]
        },
        { label: "Activo", prop: "is_active", type: "boolean" },
        { label: "Creado", prop: "created_at", type: "date", format: "DD/MM/YYYY" },
        { label: "Acciones", prop: "actions", type: "actions" }
      ],
      customFilters: [
        // Filtro custom con tipo string (similar a las columnas)
        // Este filtro permite buscar por un campo "department" que no está en la tabla
        {
          prop: "department",
          label: "Departamento",
          type: "text",
          filterOp: "LIKE"
        },
        // Filtro custom con callback para un filtro más complejo personalizado
        // Este ejemplo muestra cómo crear un filtro completamente personalizado
        {
          prop: "phone",
          label: "Teléfono",
          type: (h, props) => {
            const filterObj = props.getFilterForColumn(props.column);
            return h('div', { class: 'form-group' }, [
              h('label', props.column.label),
              h('input', {
                class: 'form-control',
                attrs: {
                  type: 'tel',
                  placeholder: 'Buscar por teléfono...'
                },
                domProps: {
                  value: filterObj.value || ''
                },
                on: {
                  input: (e) => {
                    filterObj.value = e.target.value;
                  },
                  change: props.onChangeFilter
                }
              })
            ]);
          }
        }
      ]
    };
  },
  computed: {
    exampleCode() {
      return `<template>
  <div>
    <VueLaravelCrud
      title="Usuarios con Filtros"
      modelName="users"
      :model="model"
      :columns="columns"
      :customFilters="customFilters"
      :ajax="true"
      apiUrl="http://localhost:3001/api"
      :enableFilters="true"
      :showSearch="true"
      :sortable="true"
      @select="onSelect"
      @itemSaved="onItemSaved"
      @itemDeleted="onItemDeleted"
    >
      <template v-slot:form="slotProps">
        <b-form-group label="Nombre:" description="Nombre completo del usuario">
          <b-form-input
            v-model="slotProps.item.name"
            type="text"
            required
            placeholder="Ingrese el nombre"
          ></b-form-input>
        </b-form-group>
        
        <b-form-group label="Email:" description="Correo electrónico">
          <b-form-input
            v-model="slotProps.item.email"
            type="email"
            required
            placeholder="usuario@ejemplo.com"
          ></b-form-input>
        </b-form-group>
        
        <b-form-group label="Edad:" description="Edad en años">
          <b-form-input
            v-model="slotProps.item.age"
            type="number"
            min="1"
            max="120"
            placeholder="25"
          ></b-form-input>
        </b-form-group>
        
        <b-form-group label="Estado:" description="Estado del usuario">
          <b-form-select v-model="slotProps.item.status">
            <option value="active">Activo</option>
            <option value="inactive">Inactivo</option>
            <option value="pending">Pendiente</option>
          </b-form-select>
        </b-form-group>
      </template>
      
      <template v-slot:show="slotProps">
        <b-list-group>
          <b-list-group-item class="d-flex justify-content-between align-items-center">
            ID
            <b-badge variant="primary" pill>{{ slotProps.item.id }}</b-badge>
          </b-list-group-item>
          <b-list-group-item class="d-flex justify-content-between align-items-center">
            Nombre
            <b-badge variant="info" pill>{{ slotProps.item.name }}</b-badge>
          </b-list-group-item>
        </b-list-group>
      </template>
    </VueLaravelCrud>
  </div>
</template>

<script>
import VueLaravelCrud from "vue-laravel-crud";

export default {
  components: {
    VueLaravelCrud
  },
  data() {
    return {
      model: {
        name: "",
        email: "",
        age: null,
        status: "active",
        is_active: true
      },
      columns: [
        { label: "ID", prop: "id", type: "number", width: "80px" },
        { label: "Nombre", prop: "name", type: "text" },
        { label: "Email", prop: "email", type: "text" },
        { label: "Edad", prop: "age", type: "number" },
        { 
          label: "Estado", 
          prop: "status", 
          type: "state",
          options: [
            { id: "active", text: "Activo" },
            { id: "inactive", text: "Inactivo" },
            { id: "pending", text: "Pendiente" }
          ]
        },
        { label: "Activo", prop: "is_active", type: "boolean" },
        { label: "Creado", prop: "created_at", type: "date", format: "DD/MM/YYYY" },
        { label: "Acciones", prop: "actions", type: "actions" }
      ],
      customFilters: [
        // Filtro custom con tipo string
        {
          prop: "department",
          label: "Departamento",
          type: "text",
          filterOp: "LIKE"
        },
        // Filtro custom con callback para renderizado personalizado
        {
          prop: "phone",
          label: "Teléfono",
          type: (h, props) => {
            const filterObj = props.getFilterForColumn(props.column);
            return h('div', { class: 'form-group' }, [
              h('label', props.column.label),
              h('input', {
                class: 'form-control',
                attrs: { type: 'tel', placeholder: 'Buscar por teléfono...' },
                domProps: { value: filterObj.value || '' },
                on: {
                  input: (e) => { filterObj.value = e.target.value; },
                  change: props.onChangeFilter
                }
              })
            ]);
          }
        }
      ]
    };
  },
  methods: {
    onSelect(item) {
      console.log('Item seleccionado:', item);
    },
    onItemSaved(data) {
      console.log('Item guardado:', data);
    },
    onItemDeleted() {
      console.log('Item eliminado');
    }
  }
};
<\/script>`;
    }
  },
  methods: {
    onSelect(item) {
      this.selectedItem = item;
    },
    onItemSaved(data) {
      console.log('Item guardado:', data);
    },
    onItemDeleted() {
      console.log('Item eliminado');
      this.selectedItem = null;
    },
    getStatusVariant(status) {
      switch (status) {
        case 'active': return 'success';
        case 'inactive': return 'danger';
        case 'pending': return 'warning';
        default: return 'secondary';
      }
    },
    getStatusText(status) {
      switch (status) {
        case 'active': return 'Activo';
        case 'inactive': return 'Inactivo';
        case 'pending': return 'Pendiente';
        default: return status;
      }
    }
  }
};
</script>
