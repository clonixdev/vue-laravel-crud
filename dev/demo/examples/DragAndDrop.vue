<!--
  EJEMPLO: Drag & Drop para Ordenamiento
  
  Este ejemplo demuestra cómo habilitar el ordenamiento de filas mediante
  drag & drop. Los elementos se pueden arrastrar para cambiar su orden.
  
  CONFIGURACIONES UTILIZADAS:
  - orderable: true = Habilita el ordenamiento drag & drop
  - orderProp: "order" = Nombre de la propiedad que almacena el orden
  
  FUNCIONAMIENTO:
  - Al arrastrar una fila, se actualiza el campo especificado en orderProp
  - Si ajax=true, se envía una petición POST a /api/{modelName}/sort
  - Si ajax=false, se actualiza el orden en los datos locales
  
  CONFIGURACIONES DISPONIBLES ADICIONALES:
  - draggableGroup: Nombre del grupo para drag & drop - Por defecto: "people"
  - draggableOptions: Opciones de configuración para drag & drop - Por defecto: { clone: false }
  - createMultipart: Usar FormData para peticiones (útil con archivos) - Por defecto: false
  
  EVENTOS:
  - @sort: Se dispara cuando se cambia el orden
  - @draggableChange: Se dispara durante el arrastre
-->
<template>
  <div>
    <h6 class="mb-3">Ejemplo con ordenamiento drag & drop</h6>
    
    <VueLaravelCrud
      :title="title"
      :modelName="modelName"
      :model="model"
      :models="localData"
      :columns="columns"
      :ajax="ajax"
      :apiUrl="apiUrl"
      :orderable="true"
      :orderProp="'order'"
      @select="onSelect"
      @itemSaved="onItemSaved"
      @itemDeleted="onItemDeleted"
      @sort="onSort"
    >
      <template v-slot:form="slotProps">
        <b-form-group label="Título:" description="Título de la tarea">
          <b-form-input
            v-model="slotProps.item.title"
            type="text"
            required
            placeholder="Ingrese el título de la tarea"
          ></b-form-input>
        </b-form-group>
        
        <b-form-group label="Descripción:" description="Descripción detallada">
          <b-form-textarea
            v-model="slotProps.item.description"
            rows="3"
            placeholder="Descripción de la tarea..."
          ></b-form-textarea>
        </b-form-group>
        
        <b-form-group label="Estado:" description="Estado actual de la tarea">
          <b-form-select v-model="slotProps.item.status">
            <option value="todo">Por Hacer</option>
            <option value="in_progress">En Progreso</option>
            <option value="done">Completado</option>
          </b-form-select>
        </b-form-group>
        
        <b-form-group label="Prioridad:" description="Nivel de prioridad">
          <b-form-select v-model="slotProps.item.priority">
            <option value="low">Baja</option>
            <option value="medium">Media</option>
            <option value="high">Alta</option>
          </b-form-select>
        </b-form-group>
        
        <b-form-group label="Asignado:" description="Persona responsable">
          <b-form-input
            v-model="slotProps.item.assignee"
            type="text"
            placeholder="Nombre del responsable"
          ></b-form-input>
        </b-form-group>
      </template>
      
      <template v-slot:show="slotProps">
        <b-list-group>
          <b-list-group-item class="d-flex justify-content-between align-items-center">
            ID
            <b-badge variant="primary" pill>{{ slotProps.item.id }}</b-badge>
          </b-list-group-item>
          <b-list-group-item class="d-flex justify-content-between align-items-center">
            Título
            <b-badge variant="info" pill>{{ slotProps.item.title }}</b-badge>
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
            Prioridad
            <b-badge 
              :variant="getPriorityVariant(slotProps.item.priority)" 
              pill
            >
              {{ getPriorityText(slotProps.item.priority) }}
            </b-badge>
          </b-list-group-item>
          <b-list-group-item class="d-flex justify-content-between align-items-center">
            Asignado
            <b-badge variant="secondary" pill>{{ slotProps.item.assignee }}</b-badge>
          </b-list-group-item>
          <b-list-group-item class="d-flex justify-content-between align-items-center">
            Orden
            <b-badge variant="warning" pill>{{ slotProps.item.order || 'N/A' }}</b-badge>
          </b-list-group-item>
        </b-list-group>
      </template>
    </VueLaravelCrud>
    
    <div v-if="selectedItem" class="mt-3">
      <b-alert variant="info" show>
        <strong>Tarea seleccionada:</strong> {{ selectedItem.title }} - {{ getStatusText(selectedItem.status) }}
      </b-alert>
    </div>
  </div>
</template>

<script>
import VueLaravelCrud from '../../../src/vue-laravel-crud.vue';
import { isStaticMode } from '../utils/staticMode.js';
import { generateMockData } from '../data/mockData.js';

export default {
  name: 'DragAndDrop',
  components: {
    VueLaravelCrud
  },
  data() {
    const staticMode = isStaticMode();
    
    return {
      title: "Tareas con Drag & Drop",
      modelName: "tasks",
      ajax: !staticMode,
      apiUrl: staticMode ? "" : "http://localhost:3001/api",
      localData: staticMode ? generateMockData('tasks', 15) : [],
      selectedItem: null,
      model: {
        title: "",
        description: "",
        status: "todo",
        priority: "medium",
        assignee: "",
        order: null // Campo que almacena el orden (orderProp)
      },
      columns: [
        { label: "ID", prop: "id", type: "number", width: "60px" },
        { label: "Título", prop: "title", type: "text" },
        { label: "Descripción", prop: "description", type: "text" },
        { 
          label: "Estado", 
          prop: "status", 
          type: "state",
          options: [
            { id: "todo", text: "Por Hacer" },
            { id: "in_progress", text: "En Progreso" },
            { id: "done", text: "Completado" }
          ]
        },
        { 
          label: "Prioridad", 
          prop: "priority", 
          type: "state",
          options: [
            { id: "low", text: "Baja" },
            { id: "medium", text: "Media" },
            { id: "high", text: "Alta" }
          ]
        },
        { label: "Asignado", prop: "assignee", type: "text" },
        { label: "Orden", prop: "order", type: "number" },
        { label: "Acciones", prop: "actions", type: "actions" }
      ]
    };
  },
  methods: {
    onSelect(item) {
      this.selectedItem = item;
    },
    onItemSaved(data) {
      console.log('Tarea guardada:', data);
    },
    onItemDeleted() {
      console.log('Tarea eliminada');
      this.selectedItem = null;
    },
    onSort(event) {
      console.log('Ordenamiento actualizado:', event);
    },
    getStatusVariant(status) {
      switch (status) {
        case 'todo': return 'secondary';
        case 'in_progress': return 'warning';
        case 'done': return 'success';
        default: return 'secondary';
      }
    },
    getStatusText(status) {
      switch (status) {
        case 'todo': return 'Por Hacer';
        case 'in_progress': return 'En Progreso';
        case 'done': return 'Completado';
        default: return status;
      }
    },
    getPriorityVariant(priority) {
      switch (priority) {
        case 'low': return 'success';
        case 'medium': return 'warning';
        case 'high': return 'danger';
        default: return 'secondary';
      }
    },
    getPriorityText(priority) {
      switch (priority) {
        case 'low': return 'Baja';
        case 'medium': return 'Media';
        case 'high': return 'Alta';
        default: return priority;
      }
    }
  }
};
</script>
