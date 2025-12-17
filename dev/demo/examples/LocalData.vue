<template>
  <div>
    <h6 class="mb-3">Ejemplo con datos locales (sin AJAX)</h6>
    
    <VueLaravelCrud
      :title="title"
      :modelName="modelName"
      :model="model"
      :models="localData"
      :columns="columns"
      :ajax="false"
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
    
    <div v-if="selectedItem" class="mt-3">
      <b-alert variant="info" show>
        <strong>Elemento seleccionado:</strong> {{ selectedItem.name }} ({{ selectedItem.email }})
      </b-alert>
    </div>
  </div>
</template>

<script>
import VueLaravelCrud from '../../src/vue-laravel-crud.vue';

export default {
  name: 'LocalData',
  components: {
    VueLaravelCrud
  },
  data() {
    return {
      title: "Usuarios Locales",
      modelName: "users",
      selectedItem: null,
      model: {
        name: "",
        email: "",
        age: null,
        status: "active"
      },
      localData: [
        {
          id: 1,
          name: "Juan Pérez",
          email: "juan@example.com",
          age: 30,
          status: "active",
          created_at: "2023-01-15T10:30:00Z",
          updated_at: "2023-01-15T10:30:00Z"
        },
        {
          id: 2,
          name: "María García",
          email: "maria@example.com",
          age: 25,
          status: "inactive",
          created_at: "2023-01-16T14:20:00Z",
          updated_at: "2023-01-16T14:20:00Z"
        },
        {
          id: 3,
          name: "Carlos López",
          email: "carlos@example.com",
          age: 35,
          status: "active",
          created_at: "2023-01-17T09:15:00Z",
          updated_at: "2023-01-17T09:15:00Z"
        },
        {
          id: 4,
          name: "Ana Martínez",
          email: "ana@example.com",
          age: 28,
          status: "pending",
          created_at: "2023-01-18T16:45:00Z",
          updated_at: "2023-01-18T16:45:00Z"
        },
        {
          id: 5,
          name: "Luis Rodríguez",
          email: "luis@example.com",
          age: 42,
          status: "active",
          created_at: "2023-01-19T11:30:00Z",
          updated_at: "2023-01-19T11:30:00Z"
        }
      ],
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
      ]
    };
  },
  methods: {
    onSelect(item) {
      this.selectedItem = item;
    },
    onItemSaved(data) {
      console.log('Item guardado localmente:', data);
    },
    onItemDeleted() {
      console.log('Item eliminado localmente');
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
