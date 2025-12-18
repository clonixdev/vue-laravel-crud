<!--
  EJEMPLO: Selección con Checkboxes
  
  Este ejemplo demuestra cómo usar la columna de tipo 'checkbox' para seleccionar
  múltiples filas en la tabla. Incluye:
  - Columna de tipo 'checkbox' para selección de filas
  - Checkbox en el header para seleccionar/deseleccionar todas las filas
  - Visualización de los items seleccionados
  - Evento @selectItems para manejar la selección
  
  CONFIGURACIONES UTILIZADAS:
  - columns: Incluye una columna de tipo 'checkbox' para selección
  - @selectItems: Evento que se dispara cuando cambian los items seleccionados
-->
<template>
  <div>
    <h6 class="mb-3">Selección de filas con checkboxes</h6>
    
    <b-alert v-if="selectedItemsCount > 0" variant="info" class="mb-3" show>
      <strong>{{ selectedItemsCount }}</strong> item(s) seleccionado(s)
      <b-button 
        variant="outline-danger" 
        size="sm" 
        class="ml-2"
        @click="clearSelection"
      >
        Limpiar selección
      </b-button>
    </b-alert>
    
    <VueLaravelCrud
      :title="title"
      :modelName="modelName"
      :model="model"
      :columns="columns"
      :ajax="ajax"
      :apiUrl="apiUrl"
      @select="onSelect"
      @selectItems="onSelectItems"
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
    
    <b-card v-if="selectedItems.length > 0" class="mt-3">
      <b-card-header>
        <h6 class="mb-0">Items Seleccionados</h6>
      </b-card-header>
      <b-card-body>
        <b-list-group>
          <b-list-group-item 
            v-for="item in selectedItems" 
            :key="item.id"
            class="d-flex justify-content-between align-items-center"
          >
            <div>
              <strong>{{ item.name }}</strong> - {{ item.email }}
            </div>
            <b-badge :variant="getStatusVariant(item.status)" pill>
              {{ getStatusText(item.status) }}
            </b-badge>
          </b-list-group-item>
        </b-list-group>
      </b-card-body>
    </b-card>
  </div>
</template>

<script>
import VueLaravelCrud from '../../../src/vue-laravel-crud.vue';
import CodeSnippet from '../components/CodeSnippet.vue';

export default {
  name: 'CheckboxSelectionExample',
  components: {
    VueLaravelCrud,
    CodeSnippet
  },
  data() {
    return {
      // CONFIGURACIÓN: Título del componente
      title: "Gestión de Usuarios con Selección",
      
      // CONFIGURACIÓN: Nombre del modelo para las peticiones API
      modelName: "users",
      
      // CONFIGURACIÓN: Habilitar peticiones AJAX
      ajax: true,
      
      // CONFIGURACIÓN: URL base de la API
      apiUrl: "http://localhost:3001/api",
      
      selectedItem: null,
      selectedItems: [],
      
      // CONFIGURACIÓN: Estructura del modelo para formularios
      model: {
        name: "",
        email: "",
        age: null,
        status: "active"
      },
      
      // CONFIGURACIÓN: Columnas de la tabla
      // IMPORTANTE: La primera columna debe ser de tipo 'checkbox' para habilitar la selección
      columns: [
        { 
          label: "", 
          prop: "selected", 
          type: "checkbox",  // Tipo especial para checkbox de selección
          width: "50px" 
        },
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
  computed: {
    selectedItemsCount() {
      return this.selectedItems.length;
    },
    exampleCode() {
      return `<template>
  <div>
    <VueLaravelCrud
      title="Gestión de Usuarios con Selección"
      modelName="users"
      :model="model"
      :columns="columns"
      :ajax="true"
      apiUrl="http://localhost:3001/api"
      @selectItems="onSelectItems"
    >
      <!-- Slots personalizados opcionales -->
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
      // IMPORTANTE: La primera columna debe ser de tipo 'checkbox'
      columns: [
        { 
          label: "", 
          prop: "selected", 
          type: "checkbox",  // Tipo para checkbox de selección
          width: "50px" 
        },
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
          label: "Acciones", 
          prop: "actions", 
          type: "actions"
        }
      ]
    };
  },
  methods: {
    onSelectItems(selectedItems) {
      // Manejar los items seleccionados
      console.log('Items seleccionados:', selectedItems);
      this.selectedItems = selectedItems;
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
    onSelectItems(items) {
      // Este evento se dispara cuando cambian los items seleccionados
      this.selectedItems = items;
      console.log('Items seleccionados:', items);
    },
    onItemSaved(data) {
      console.log('Item guardado:', data);
    },
    onItemDeleted() {
      console.log('Item eliminado');
      this.selectedItem = null;
    },
    clearSelection() {
      // Limpiar selección manualmente
      this.selectedItems = [];
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

