<!--
  EJEMPLO: Configuraciones Avanzadas
  
  Este ejemplo demuestra todas las configuraciones avanzadas disponibles
  en el componente vue-laravel-crud, incluyendo comportamientos personalizados,
  mensajes personalizados, estilos y opciones avanzadas.
  
  CONFIGURACIONES DEMOSTRADAS:
  - Comportamiento de modales (hideModalAfterSave, hideModalAfterCreate, etc.)
  - Mensajes personalizados (messageNew, messageSave, messageRemoveConfirm, etc.)
  - Configuraciones de selección (selectHover, selectClick)
  - Estilos personalizados (cardClass, tableClass, etc.)
  - Configuraciones de paginación y límites
  - Configuraciones de visualización avanzadas
-->
<template>
  <div>
    <h6 class="mb-3">Ejemplo con todas las configuraciones avanzadas</h6>
    
    <VueLaravelCrud
      :title="title"
      :modelName="modelName"
      :model="model"
      :columns="columns"
      :ajax="ajax"
      :apiUrl="apiUrl"
      :hideModalAfterSave="hideModalAfterSave"
      :hideModalAfterCreate="hideModalAfterCreate"
      :hideModalAfterUpdate="hideModalAfterUpdate"
      :refreshAfterSave="refreshAfterSave"
      :limit="limit"
      :showPaginator="showPaginator"
      :showCreateBtn="showCreateBtn"
      :showSearch="showSearch"
      :showHeader="showHeader"
      :showTitle="showTitle"
      :displayModeToggler="displayModeToggler"
      :selectHover="selectHover"
      :selectClick="selectClick"
      :cardClass="cardClass"
      :tableClass="tableClass"
      :tableContainerClass="tableContainerClass"
      :messageNew="messageNew"
      :messageSave="messageSave"
      :messageRemoveConfirm="messageRemoveConfirm"
      :messageRemoveBulkConfirm="messageRemoveBulkConfirm"
      :messageEmptyResults="messageEmptyResults"
      :messageLoading="messageLoading"
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
    
    <!-- Panel de configuración -->
    <b-card class="mt-4">
      <b-card-header>
        <h6 class="mb-0">Panel de Configuración</h6>
      </b-card-header>
      <b-card-body>
        <b-row>
          <b-col md="6">
            <h6>Comportamiento</h6>
            <b-form-checkbox v-model="hideModalAfterSave">
              Ocultar modal después de guardar
            </b-form-checkbox>
            <b-form-checkbox v-model="hideModalAfterCreate">
              Ocultar modal después de crear
            </b-form-checkbox>
            <b-form-checkbox v-model="hideModalAfterUpdate">
              Ocultar modal después de actualizar
            </b-form-checkbox>
            <b-form-checkbox v-model="refreshAfterSave">
              Refrescar después de guardar
            </b-form-checkbox>
            <b-form-group label="Límite por página:" class="mt-2">
              <b-form-input v-model.number="limit" type="number" min="1" max="100"></b-form-input>
            </b-form-group>
          </b-col>
          <b-col md="6">
            <h6>Visualización</h6>
            <b-form-checkbox v-model="showPaginator">
              Mostrar paginación
            </b-form-checkbox>
            <b-form-checkbox v-model="showCreateBtn">
              Mostrar botón crear
            </b-form-checkbox>
            <b-form-checkbox v-model="showSearch">
              Mostrar búsqueda
            </b-form-checkbox>
            <b-form-checkbox v-model="showHeader">
              Mostrar header
            </b-form-checkbox>
            <b-form-checkbox v-model="showTitle">
              Mostrar título
            </b-form-checkbox>
            <b-form-checkbox v-model="displayModeToggler">
              Mostrar selector de modo
            </b-form-checkbox>
          </b-col>
        </b-row>
        <b-row class="mt-3">
          <b-col md="6">
            <h6>Selección</h6>
            <b-form-checkbox v-model="selectHover">
              Seleccionar al pasar el mouse
            </b-form-checkbox>
            <b-form-checkbox v-model="selectClick">
              Seleccionar al hacer click
            </b-form-checkbox>
          </b-col>
          <b-col md="6">
            <h6>Estilos</h6>
            <b-form-group label="Clase de tabla:">
              <b-form-input v-model="tableClass" placeholder="table-striped table-hover"></b-form-input>
            </b-form-group>
            <b-form-group label="Clase de tarjeta:">
              <b-form-input v-model="cardClass" placeholder="shadow-sm"></b-form-input>
            </b-form-group>
          </b-col>
        </b-row>
      </b-card-body>
    </b-card>
  </div>
</template>

<script>
import VueLaravelCrud from '../../../src/vue-laravel-crud.vue';

export default {
  name: 'AdvancedConfigurations',
  components: {
    VueLaravelCrud
  },
  data() {
    return {
      title: "Configuraciones Avanzadas",
      modelName: "users",
      ajax: true,
      apiUrl: "http://localhost:3001/api",
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
      
      // CONFIGURACIONES DE COMPORTAMIENTO
      hideModalAfterSave: true,
      hideModalAfterCreate: false,
      hideModalAfterUpdate: false,
      refreshAfterSave: true,
      limit: 20,
      
      // CONFIGURACIONES DE VISUALIZACIÓN
      showPaginator: true,
      showCreateBtn: true,
      showSearch: true,
      showHeader: true,
      showTitle: true,
      displayModeToggler: false,
      
      // CONFIGURACIONES DE SELECCIÓN
      selectHover: false,
      selectClick: false,
      
      // CONFIGURACIONES DE ESTILOS
      cardClass: "",
      tableClass: "",
      tableContainerClass: "",
      
      // CONFIGURACIONES DE MENSAJES
      messageNew: "Nuevo",
      messageSave: "Guardar",
      messageRemoveConfirm: "¿Esta seguro de borrar este elemento?",
      messageRemoveBulkConfirm: "¿Esta seguro de borrar los elementos seleccionados?",
      messageEmptyResults: "No se han encontrado resultados",
      messageLoading: "Cargando...",
      searchPlaceholder: "Buscar..."
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

