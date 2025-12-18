<!--
  EJEMPLO: Mensajes Personalizados
  
  Este ejemplo demuestra cómo personalizar todos los mensajes del componente,
  incluyendo botones, confirmaciones, placeholders y mensajes de estado.
  
  CONFIGURACIONES DEMOSTRADAS:
  - messageNew: Texto del botón "Nuevo"
  - messageSave: Texto del botón "Guardar"
  - messageRemove: Texto del botón "Eliminar"
  - messageRemoveConfirm: Mensaje de confirmación para eliminar
  - messageRemoveBulkConfirm: Mensaje de confirmación para eliminación masiva
  - messageImport: Texto del botón "Importar"
  - messageExport: Texto del botón "Exportar"
  - messageEmptyResults: Mensaje cuando no hay resultados
  - messageNoMore: Mensaje cuando no hay más elementos (scroll infinito)
  - messageLoading: Mensaje mientras carga
  - messageDefaultValidationError: Mensaje de error de validación
  - searchPlaceholder: Placeholder del campo de búsqueda
  
  USO:
  Personaliza estos mensajes para adaptar el componente a tu idioma o estilo
  de aplicación.
-->
<template>
  <div>
    <h6 class="mb-3">Ejemplo con mensajes personalizados</h6>
    
    <VueLaravelCrud
      :title="title"
      :modelName="modelName"
      :model="model"
      :models="localData"
      :columns="columns"
      :ajax="ajax"
      :apiUrl="apiUrl"
      :showImport="true"
      :showExport="true"
      :bulkDelete="true"
      :messageNew="messageNew"
      :messageSave="messageSave"
      :messageRemove="messageRemove"
      :messageImport="messageImport"
      :messageExport="messageExport"
      :messageRemoveConfirm="messageRemoveConfirm"
      :messageRemoveBulkConfirm="messageRemoveBulkConfirm"
      :messageEmptyResults="messageEmptyResults"
      :messageNoMore="messageNoMore"
      :messageLoading="messageLoading"
      :messageDefaultValidationError="messageDefaultValidationError"
      :searchPlaceholder="searchPlaceholder"
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
    
    <!-- Panel de personalización de mensajes -->
    <b-card class="mt-4">
      <b-card-header>
        <h6 class="mb-0">Personalizar Mensajes</h6>
      </b-card-header>
      <b-card-body>
        <b-row>
          <b-col md="6">
            <h6>Botones</h6>
            <b-form-group label="Botón Nuevo:">
              <b-form-input v-model="messageNew"></b-form-input>
            </b-form-group>
            <b-form-group label="Botón Guardar:">
              <b-form-input v-model="messageSave"></b-form-input>
            </b-form-group>
            <b-form-group label="Botón Eliminar:">
              <b-form-input v-model="messageRemove"></b-form-input>
            </b-form-group>
            <b-form-group label="Botón Importar:">
              <b-form-input v-model="messageImport"></b-form-input>
            </b-form-group>
            <b-form-group label="Botón Exportar:">
              <b-form-input v-model="messageExport"></b-form-input>
            </b-form-group>
          </b-col>
          <b-col md="6">
            <h6>Mensajes</h6>
            <b-form-group label="Sin resultados:">
              <b-form-input v-model="messageEmptyResults"></b-form-input>
            </b-form-group>
            <b-form-group label="Cargando:">
              <b-form-input v-model="messageLoading"></b-form-input>
            </b-form-group>
            <b-form-group label="Confirmar eliminar:">
              <b-form-textarea v-model="messageRemoveConfirm" rows="2"></b-form-textarea>
            </b-form-group>
            <b-form-group label="Confirmar eliminar masivo:">
              <b-form-textarea v-model="messageRemoveBulkConfirm" rows="2"></b-form-textarea>
            </b-form-group>
            <b-form-group label="Placeholder búsqueda:">
              <b-form-input v-model="searchPlaceholder"></b-form-input>
            </b-form-group>
          </b-col>
        </b-row>
        <b-alert variant="info" class="mt-3" show>
          <strong>Nota:</strong> Los cambios en los mensajes se aplicarán inmediatamente.
          Prueba a cambiar los textos y verás cómo se actualizan en la interfaz.
        </b-alert>
      </b-card-body>
    </b-card>
  </div>
</template>

<script>
import VueLaravelCrud from '../../../src/vue-laravel-crud.vue';
import { isStaticMode } from '../utils/staticMode.js';
import { generateMockData } from '../data/mockData.js';

export default {
  name: 'CustomMessagesExample',
  components: {
    VueLaravelCrud
  },
  data() {
    const staticMode = isStaticMode();
    
    return {
      title: "Mensajes Personalizados",
      modelName: "users",
      ajax: !staticMode,
      apiUrl: staticMode ? "" : "http://localhost:3001/api",
      localData: staticMode ? generateMockData('users', 20) : [],
      selectedItem: null,
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
        { label: "Creado", prop: "created_at", type: "date", format: "DD/MM/YYYY" },
        { label: "Acciones", prop: "actions", type: "actions" }
      ],
      
      // MENSAJES DE BOTONES
      messageNew: "➕ Agregar Nuevo",
      messageSave: "💾 Guardar Cambios",
      messageRemove: "🗑️ ELIMINAR",
      messageImport: "📥 Importar Datos",
      messageExport: "📤 Exportar Datos",
      
      // MENSAJES DE CONFIRMACIÓN
      messageRemoveConfirm: "⚠️ ¿Estás completamente seguro de que deseas eliminar este elemento? Esta acción no se puede deshacer.",
      messageRemoveBulkConfirm: "⚠️ ¿Estás seguro de eliminar los elementos seleccionados? Esta acción afectará a múltiples registros.",
      
      // MENSAJES DE ESTADO
      messageEmptyResults: "🔍 No se encontraron resultados que coincidan con tu búsqueda.",
      messageNoMore: "✅ Has visto todos los elementos disponibles.",
      messageLoading: "⏳ Cargando información, por favor espera...",
      messageDefaultValidationError: "❌ Por favor revisa el formulario, contiene algunos errores que deben corregirse.",
      
      // MENSAJES DE INTERFAZ
      searchPlaceholder: "🔎 Buscar usuarios..."
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

