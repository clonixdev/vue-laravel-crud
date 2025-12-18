<!--
  EJEMPLO: Validación de Formularios
  
  Este ejemplo demuestra cómo habilitar y usar la validación de formularios
  en el componente vue-laravel-crud.
  
  CONFIGURACIONES UTILIZADAS:
  - validate: true = Habilita la validación de formularios
  
  FUNCIONAMIENTO:
  - La validación se realiza antes de enviar el formulario
  - Los campos con atributo "required" se validan automáticamente
  - Se puede personalizar el mensaje de error con messageDefaultValidationError
  
  CONFIGURACIONES DISPONIBLES:
  - validate: Habilitar validación - Por defecto: false
  - messageDefaultValidationError: Mensaje de error por defecto
    Por defecto: "Por favor controle el formulario, contiene errores."
-->
<template>
  <div>
    <h6 class="mb-3">Ejemplo con validación de formularios</h6>
    
    <VueLaravelCrud
      :title="title"
      :modelName="modelName"
      :model="model"
      :models="localData"
      :columns="columns"
      :ajax="ajax"
      :apiUrl="apiUrl"
      :validate="validate"
      :messageDefaultValidationError="messageDefaultValidationError"
      @select="onSelect"
      @itemSaved="onItemSaved"
      @itemDeleted="onItemDeleted"
    >
      <template v-slot:form="slotProps">
        <!-- Campo requerido - se validará automáticamente -->
        <b-form-group 
          label="Nombre:" 
          description="Nombre completo del usuario (requerido)"
          :invalid-feedback="getFieldError(slotProps.item, 'name')"
          :state="getFieldState(slotProps.item, 'name')"
        >
          <b-form-input
            v-model="slotProps.item.name"
            type="text"
            required
            placeholder="Ingrese el nombre"
            :state="getFieldState(slotProps.item, 'name')"
          ></b-form-input>
        </b-form-group>
        
        <!-- Campo requerido con validación de email -->
        <b-form-group 
          label="Email:" 
          description="Correo electrónico (requerido)"
          :invalid-feedback="getFieldError(slotProps.item, 'email')"
          :state="getFieldState(slotProps.item, 'email')"
        >
          <b-form-input
            v-model="slotProps.item.email"
            type="email"
            required
            placeholder="usuario@ejemplo.com"
            :state="getFieldState(slotProps.item, 'email')"
          ></b-form-input>
        </b-form-group>
        
        <!-- Campo opcional con validación de rango -->
        <b-form-group 
          label="Edad:" 
          description="Edad en años (1-120)"
          :invalid-feedback="getFieldError(slotProps.item, 'age')"
          :state="getFieldState(slotProps.item, 'age')"
        >
          <b-form-input
            v-model.number="slotProps.item.age"
            type="number"
            min="1"
            max="120"
            placeholder="25"
            :state="getFieldState(slotProps.item, 'age')"
          ></b-form-input>
        </b-form-group>
        
        <!-- Campo requerido con opciones -->
        <b-form-group 
          label="Estado:" 
          description="Estado del usuario (requerido)"
          :invalid-feedback="getFieldError(slotProps.item, 'status')"
          :state="getFieldState(slotProps.item, 'status')"
        >
          <b-form-select 
            v-model="slotProps.item.status"
            :state="getFieldState(slotProps.item, 'status')"
            required
          >
            <option value="">Seleccione un estado</option>
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
            <b-badge variant="warning" pill>{{ slotProps.item.age || 'N/A' }} años</b-badge>
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
    
    <!-- Panel de información -->
    <b-alert variant="info" class="mt-3" show>
      <strong>Validación habilitada:</strong> Los campos marcados como "required" 
      se validarán automáticamente antes de guardar. Intenta guardar sin completar 
      los campos requeridos para ver la validación en acción.
    </b-alert>
  </div>
</template>

<script>
import VueLaravelCrud from '../../../src/vue-laravel-crud.vue';
import { isStaticMode } from '../utils/staticMode.js';
import { generateMockData } from '../data/mockData.js';

export default {
  name: 'ValidationExample',
  components: {
    VueLaravelCrud
  },
  data() {
    const staticMode = isStaticMode();
    
    return {
      title: "Validación de Formularios",
      modelName: "users",
      ajax: !staticMode,
      apiUrl: staticMode ? "" : "http://localhost:3001/api",
      localData: staticMode ? generateMockData('users', 20) : [],
      selectedItem: null,
      model: {
        name: "",
        email: "",
        age: null,
        status: ""
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
        { label: "Creado", prop: "created_at", type: "date", format: "DD/MM/YYYY" },
        { label: "Acciones", prop: "actions", type: "actions" }
      ],
      
      // CONFIGURACIÓN: Habilitar validación
      validate: true,
      
      // CONFIGURACIÓN: Mensaje de error personalizado
      messageDefaultValidationError: "Por favor complete todos los campos requeridos correctamente."
    };
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
    getFieldState(item, field) {
      // Validación personalizada para mostrar el estado del campo
      if (field === 'name') {
        return item.name && item.name.length > 0 ? true : null;
      }
      if (field === 'email') {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return item.email && emailRegex.test(item.email) ? true : null;
      }
      if (field === 'age') {
        if (!item.age) return null;
        return item.age >= 1 && item.age <= 120 ? true : false;
      }
      if (field === 'status') {
        return item.status && item.status.length > 0 ? true : null;
      }
      return null;
    },
    getFieldError(item, field) {
      // Mensajes de error personalizados
      if (field === 'name' && (!item.name || item.name.length === 0)) {
        return 'El nombre es requerido';
      }
      if (field === 'email') {
        if (!item.email || item.email.length === 0) {
          return 'El email es requerido';
        }
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(item.email)) {
          return 'El email no es válido';
        }
      }
      if (field === 'age' && item.age) {
        if (item.age < 1 || item.age > 120) {
          return 'La edad debe estar entre 1 y 120 años';
        }
      }
      if (field === 'status' && (!item.status || item.status.length === 0)) {
        return 'El estado es requerido';
      }
      return '';
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
        default: return status || 'Sin estado';
      }
    }
  }
};
</script>

