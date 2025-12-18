<!--
  EJEMPLO: Vista Kanban con Drag & Drop
  
  Este ejemplo demuestra la vista Kanban con agrupación por estado y funcionalidad
  de drag & drop para mover elementos entre columnas.
  
  CONFIGURACIONES UTILIZADAS:
  - displayMode: 4 = Vista Kanban
  - grouped: true = Habilitar agrupación de elementos
  - groupedAttribute: Campo por el cual agrupar (ej: "status")
  - groupedLabelPre: Texto antes del label del grupo (opcional)
  - groupedLabelAfter: Texto después del label del grupo (opcional)
  - groupedSplit: true = Separar grupos en columnas diferentes
  
  CONFIGURACIONES DISPONIBLES ADICIONALES:
  - draggableGroup: Nombre del grupo para drag & drop - Por defecto: "people"
  - draggableOptions: Opciones de configuración para drag & drop - Por defecto: { clone: false }
  - orderable: Habilitar ordenamiento drag & drop dentro de grupos - Por defecto: false
  - orderProp: Propiedad que almacena el orden - Por defecto: "order"
-->
<template>
  <div>
    <h6 class="mb-3">Vista Kanban con drag & drop entre columnas</h6>
    
    <VueLaravelCrud
      :title="title"
      :modelName="modelName"
      :model="model"
      :models="localData"
      :columns="columns"
      :ajax="ajax"
      :apiUrl="apiUrl"
      :displayMode="4"
      :grouped="true"
      :groupedAttribute="'status'"
      :groupedLabelPre="''"
      :groupedLabelAfter="''"
      :groupedSplit="true"
      @select="onSelect"
      @itemSaved="onItemSaved"
      @itemDeleted="onItemDeleted"
      @draggableChange="onDraggableChange"
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
  name: 'KanbanView',
  components: {
    VueLaravelCrud
  },
  data() {
    const staticMode = isStaticMode();
    
    return {
      title: "Tablero Kanban de Tareas",
      modelName: "tasks",
      ajax: !staticMode,
      apiUrl: staticMode ? "" : "http://localhost:3001/api",
      localData: staticMode ? generateMockData('tasks', 15) : [],
      selectedItem: null,
      model: {
        title: "",
        description: "",
        status: "todo", // Este campo se usa para agrupar (groupedAttribute)
        priority: "medium",
        assignee: ""
      },
      // CONFIGURACIÓN KANBAN:
      // - grouped: true habilita la agrupación
      // - groupedAttribute: "status" agrupa por el campo status
      // - groupedSplit: true crea columnas separadas para cada grupo
      // - displayMode: 4 activa la vista Kanban
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
    onDraggableChange(event) {
      console.log('Drag & drop event:', event);
      // Aquí se puede manejar la lógica adicional cuando se mueve una tarea
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
