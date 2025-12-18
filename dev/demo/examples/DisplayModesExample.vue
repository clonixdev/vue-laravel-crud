<!--
  EJEMPLO: Modos de Visualización
  
  Este ejemplo demuestra todos los modos de visualización disponibles
  en el componente vue-laravel-crud y cómo cambiar entre ellos.
  
  MODOS DISPONIBLES:
  - displayMode: 1 = Tabla (Table)
  - displayMode: 2 = Tarjetas (Cards)
  - displayMode: 3 = Lista (List)
  - displayMode: 4 = Kanban
  
  CONFIGURACIONES UTILIZADAS:
  - displayMode: Modo de visualización actual
  - displayModeToggler: true = Muestra botones para cambiar entre modos
  - colXs, colSm, colMd, colLg, colXl: Columnas para vista de tarjetas
  
  CONFIGURACIONES ADICIONALES PARA TARJETAS:
  - masonryEnabled: Habilitar layout masonry
  - masonrySort: Ordenar en layout masonry
  - masonryColumns: Número de columnas en masonry
-->
<template>
  <div>
    <h6 class="mb-3">Ejemplo mostrando todos los modos de visualización</h6>
    
    <!-- Selector de modo -->
    <b-card class="mb-3">
      <b-card-body>
        <b-form-group label="Seleccionar modo de visualización:">
          <b-form-radio-group
            v-model="displayMode"
            :options="displayModeOptions"
            buttons
            button-variant="outline-primary"
          ></b-form-radio-group>
        </b-form-group>
        <b-alert variant="info" show class="mt-2">
          <strong>Modo actual:</strong> {{ getDisplayModeName(displayMode) }}
        </b-alert>
      </b-card-body>
    </b-card>
    
    <VueLaravelCrud
      :title="title"
      :modelName="modelName"
      :model="model"
      :columns="columns"
      :ajax="ajax"
      :apiUrl="apiUrl"
      :displayMode="displayMode"
      :displayModeToggler="displayModeToggler"
      :colXs="colXs"
      :colSm="colSm"
      :colMd="colMd"
      :colLg="colLg"
      :colXl="colXl"
      :masonryEnabled="masonryEnabled"
      :masonrySort="masonrySort"
      :masonryColumns="masonryColumns"
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
    
    <!-- Panel de configuración para tarjetas -->
    <b-card class="mt-4" v-if="displayMode === 2">
      <b-card-header>
        <h6 class="mb-0">Configuración de Tarjetas</h6>
      </b-card-header>
      <b-card-body>
        <b-row>
          <b-col md="6">
            <h6>Columnas Responsivas</h6>
            <b-form-group label="Extra pequeño (xs):">
              <b-form-input v-model.number="colXs" type="number" min="1" max="12"></b-form-input>
            </b-form-group>
            <b-form-group label="Pequeño (sm):">
              <b-form-input v-model.number="colSm" type="number" min="1" max="12"></b-form-input>
            </b-form-group>
            <b-form-group label="Mediano (md):">
              <b-form-input v-model.number="colMd" type="number" min="1" max="12"></b-form-input>
            </b-form-group>
            <b-form-group label="Grande (lg):">
              <b-form-input v-model.number="colLg" type="number" min="1" max="12"></b-form-input>
            </b-form-group>
            <b-form-group label="Extra grande (xl):">
              <b-form-input v-model.number="colXl" type="number" min="1" max="12"></b-form-input>
            </b-form-group>
          </b-col>
          <b-col md="6">
            <h6>Layout Masonry</h6>
            <b-form-checkbox v-model="masonryEnabled">
              Habilitar layout masonry
            </b-form-checkbox>
            <b-form-checkbox v-model="masonrySort" :disabled="!masonryEnabled">
              Ordenar en masonry
            </b-form-checkbox>
            <b-form-group label="Columnas masonry:" v-if="masonryEnabled">
              <b-form-input 
                v-model.number="masonryColumns" 
                type="number" 
                min="1" 
                max="6"
              ></b-form-input>
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
  name: 'DisplayModesExample',
  components: {
    VueLaravelCrud
  },
  data() {
    return {
      title: "Modos de Visualización",
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
      
      // CONFIGURACIÓN: Modo de visualización
      // 1 = Tabla, 2 = Tarjetas, 3 = Lista, 4 = Kanban
      displayMode: 1,
      
      // CONFIGURACIÓN: Mostrar botones para cambiar modo
      displayModeToggler: false,
      
      // CONFIGURACIÓN: Columnas para vista de tarjetas
      colXs: 12,
      colSm: 6,
      colMd: 4,
      colLg: 3,
      colXl: 3,
      
      // CONFIGURACIÓN: Layout masonry
      masonryEnabled: false,
      masonrySort: false,
      masonryColumns: 3,
      
      // Opciones para el selector
      displayModeOptions: [
        { value: 1, text: '📊 Tabla' },
        { value: 2, text: '🃏 Tarjetas' },
        { value: 3, text: '📋 Lista' },
        { value: 4, text: '📌 Kanban' }
      ]
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
    getDisplayModeName(mode) {
      const modes = {
        1: 'Tabla',
        2: 'Tarjetas',
        3: 'Lista',
        4: 'Kanban'
      };
      return modes[mode] || 'Desconocido';
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

