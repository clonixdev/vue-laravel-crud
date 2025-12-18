<!--
  EJEMPLO: Tabla Básica con CRUD Completo
  
  Este ejemplo demuestra la configuración básica del componente vue-laravel-crud
  con operaciones CRUD (Crear, Leer, Actualizar, Eliminar) completas.
  
  CONFIGURACIONES UTILIZADAS:
  - title: Título que se muestra en el header del componente
  - modelName: Nombre del modelo para las peticiones API (ej: "users")
  - model: Objeto con la estructura de datos del formulario
  - columns: Array de columnas que se mostrarán en la tabla
  - ajax: Habilita/deshabilita las peticiones AJAX (true = API, false = datos locales)
  - apiUrl: URL base para las peticiones API
  
  CONFIGURACIONES DISPONIBLES NO UTILIZADAS EN ESTE EJEMPLO:
  - displayMode: Modo de visualización (1=Tabla, 2=Tarjetas, 3=Lista, 4=Kanban) - Por defecto: 1
  - limit: Número de elementos por página - Por defecto: 20
  - showPaginator: Mostrar/ocultar paginación - Por defecto: true
  - showCreateBtn: Mostrar/ocultar botón de crear - Por defecto: true
  - showSearch: Mostrar/ocultar búsqueda - Por defecto: true
  - showHeader: Mostrar/ocultar header completo - Por defecto: true
  - showTitle: Mostrar/ocultar título - Por defecto: true
  - hideModalAfterSave: Ocultar modal después de guardar - Por defecto: true
  - refreshAfterSave: Refrescar datos después de guardar - Por defecto: true
  - enableFilters: Habilitar filtros avanzados - Por defecto: false
  - sortable: Habilitar ordenamiento de columnas - Por defecto: false
  - orderable: Habilitar drag & drop para ordenar - Por defecto: false
  - validate: Habilitar validación de formularios - Por defecto: false
  - selectHover: Seleccionar al pasar el mouse - Por defecto: false
  - selectClick: Seleccionar al hacer click - Por defecto: false
  - searchPlaceholder: Texto placeholder del buscador - Por defecto: "Buscar..."
  - messageNew: Texto del botón nuevo - Por defecto: "Nuevo"
  - messageSave: Texto del botón guardar - Por defecto: "Guardar"
  - messageRemoveConfirm: Mensaje de confirmación para eliminar - Por defecto: "¿Esta seguro de borrar este elemento?"
  - tableClass: Clases CSS adicionales para la tabla
  - tableContainerClass: Clases CSS adicionales para el contenedor de la tabla
-->
<template>
  <div>
    <h6 class="mb-3">Tabla básica con operaciones CRUD completas</h6>
    
    <VueLaravelCrud
      :title="title"
      :modelName="modelName"
      :model="model"
      :models="localData"
      :columns="columns"
      :ajax="ajax"
      :apiUrl="apiUrl"
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
        </b-list-group>
      </template>
    </VueLaravelCrud>
    
    <CodeSnippet :code="exampleCode" />
  </div>
</template>

<script>
import VueLaravelCrud from '../../../src/vue-laravel-crud.vue';
import CodeSnippet from '../components/CodeSnippet.vue';
import { isStaticMode, getMockDataForModel } from '../utils/staticMode.js';
import { generateMockData } from '../data/mockData.js';

export default {
  name: 'BasicTable',
  components: {
    VueLaravelCrud,
    CodeSnippet
  },
  data() {
    const staticMode = isStaticMode();
    
    return {
      // CONFIGURACIÓN: Título del componente
      title: "Gestión de Usuarios",
      
      // CONFIGURACIÓN: Nombre del modelo para las peticiones API
      // Se usará para construir las URLs: GET /api/users, POST /api/users, etc.
      modelName: "users",
      
      // CONFIGURACIÓN: Habilitar peticiones AJAX
      // En modo estático (GitHub Pages) usamos datos locales
      ajax: !staticMode,
      
      // CONFIGURACIÓN: URL base de la API
      // Las peticiones se harán a: {apiUrl}/{modelName}
      apiUrl: staticMode ? "" : "http://localhost:3001/api",
      
      // CONFIGURACIÓN: Datos locales para modo estático
      localData: staticMode ? generateMockData('users', 20) : [],
      
      selectedItem: null,
      
      // CONFIGURACIÓN: Estructura del modelo para formularios
      // Define los campos que tendrá el formulario de crear/editar
      model: {
        name: "",
        email: "",
        age: null,
        status: "active"
      },
      
      // CONFIGURACIÓN: Columnas de la tabla
      // Cada columna puede tener:
      // - label: Texto del encabezado
      // - prop: Propiedad del objeto a mostrar
      // - type: Tipo de dato (text, number, date, boolean, state, actions)
      // - width: Ancho de la columna (opcional)
      // - format: Formato para fechas (opcional, ej: "DD/MM/YYYY")
      // - options: Opciones para tipo "state" (array de {id, text})
      columns: [
        { label: "ID", prop: "id", type: "number", width: "80px" },
        { label: "Nombre", prop: "name", type: "text" },
        { label: "Email", prop: "email", type: "text" },
        { label: "Edad", prop: "age", type: "number" },
        { 
          label: "Estado", 
          prop: "status", 
          type: "state", // Tipo especial que muestra badges con colores
          options: [
            { id: "active", text: "Activo" },
            { id: "inactive", text: "Inactivo" },
            { id: "pending", text: "Pendiente" }
          ]
        },
        { 
          label: "Creado", 
          prop: "created_at", 
          type: "date", 
          format: "DD/MM/YYYY" // Formato de fecha usando moment.js
        },
        { 
          label: "Acciones", 
          prop: "actions", 
          type: "actions" // Columna especial con botones Ver/Editar/Eliminar
        }
      ]
    };
  },
  computed: {
    exampleCode() {
      return `<template>
  <div>
    <VueLaravelCrud
      title="Gestión de Usuarios"
      modelName="users"
      :model="model"
      :columns="columns"
      :ajax="true"
      apiUrl="http://localhost:3001/api"
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
        status: "active"
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
        { 
          label: "Creado", 
          prop: "created_at", 
          type: "date", 
          format: "DD/MM/YYYY"
        },
        { 
          label: "Acciones", 
          prop: "actions", 
          type: "actions"
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
