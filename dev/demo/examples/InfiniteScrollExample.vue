<!--
  EJEMPLO: Scroll Infinito (Infinite Scroll)
  
  Este ejemplo demuestra cómo habilitar el scroll infinito para cargar
  más elementos automáticamente al llegar al final de la lista.
  
  CONFIGURACIONES UTILIZADAS:
  - infiniteScroll: true = Habilita el scroll infinito
  - limit: Número de elementos a cargar por cada "página"
  
  FUNCIONAMIENTO:
  - Al hacer scroll hasta el final, se cargan automáticamente más elementos
  - Si ajax=true, se hace una petición GET con parámetros de paginación
  - Si ajax=false, se cargan más elementos del array local
  
  CONFIGURACIONES DISPONIBLES:
  - infiniteScroll: Habilitar scroll infinito - Por defecto: false
  - limit: Elementos por carga - Por defecto: 20
  - messageNoMore: Mensaje cuando no hay más elementos
    Por defecto: "No hay más elementos para mostrar."
  - messageLoading: Mensaje mientras carga - Por defecto: "Cargando..."
  
  NOTA: Cuando infiniteScroll=true, showPaginator se deshabilita automáticamente
-->
<template>
  <div>
    <h6 class="mb-3">Ejemplo con scroll infinito</h6>
    
    <VueLaravelCrud
      :title="title"
      :modelName="modelName"
      :model="model"
      :models="localData"
      :columns="columns"
      :ajax="ajax"
      :apiUrl="apiUrl"
      :infiniteScroll="infiniteScroll"
      :limit="limit"
      :messageNoMore="messageNoMore"
      :messageLoading="messageLoading"
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
        <h6 class="mb-0">Configuración de Scroll Infinito</h6>
      </b-card-header>
      <b-card-body>
        <b-form-group label="Habilitar scroll infinito:">
          <b-form-checkbox v-model="infiniteScroll">
            Activar scroll infinito
          </b-form-checkbox>
        </b-form-group>
        <b-form-group label="Elementos por carga:">
          <b-form-input 
            v-model.number="limit" 
            type="number" 
            min="1" 
            max="100"
            :disabled="!infiniteScroll"
          ></b-form-input>
          <small class="text-muted">
            Número de elementos que se cargarán cada vez que llegues al final
          </small>
        </b-form-group>
        <b-alert variant="info" show>
          <strong>Instrucciones:</strong> Haz scroll hacia abajo en la tabla 
          para cargar más elementos automáticamente. Cuando no haya más elementos, 
          se mostrará el mensaje "No hay más elementos para mostrar."
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
  name: 'InfiniteScrollExample',
  components: {
    VueLaravelCrud
  },
  data() {
    const staticMode = isStaticMode();
    
    return {
      title: "Scroll Infinito",
      modelName: "users",
      ajax: !staticMode,
      apiUrl: staticMode ? "" : "http://localhost:3001/api",
      localData: staticMode ? generateMockData('users', 75) : [],
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
      
      // CONFIGURACIÓN: Habilitar scroll infinito
      infiniteScroll: true,
      
      // CONFIGURACIÓN: Elementos por carga
      limit: 10,
      
      // CONFIGURACIÓN: Mensajes personalizados
      messageNoMore: "No hay más elementos para mostrar.",
      messageLoading: "Cargando más elementos..."
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

