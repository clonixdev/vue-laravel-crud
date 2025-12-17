<template>
  <div id="app">
    <b-navbar type="dark" variant="primary" class="mb-4">
      <b-navbar-brand href="#">
        <b-icon-grid-3x3-gap></b-icon-grid-3x3-gap>
        Vue Laravel CRUD - Demo
      </b-navbar-brand>
      <b-navbar-nav class="ml-auto">
        <b-nav-item href="https://github.com/clonixdev/vue-laravel-crud" target="_blank">
          <b-icon-github></b-icon-github> GitHub
        </b-nav-item>
      </b-navbar-nav>
    </b-navbar>

    <b-container fluid>
      <b-row>
        <b-col md="3" lg="2">
          <b-card class="mb-4">
            <b-card-header>
              <h6 class="mb-0">Ejemplos</h6>
            </b-card-header>
            <b-list-group flush>
              <b-list-group-item 
                v-for="example in examples" 
                :key="example.id"
                :active="currentExample === example.id"
                @click="setCurrentExample(example.id)"
                button
              >
                <b-icon :icon="example.icon" class="mr-2"></b-icon>
                {{ example.name }}
              </b-list-group-item>
            </b-list-group>
          </b-card>

          <b-card>
            <b-card-header>
              <h6 class="mb-0">Información</h6>
            </b-card-header>
            <b-card-body>
              <small class="text-muted">
                <p><strong>Versión:</strong> 1.8.5</p>
                <p><strong>Modo:</strong> {{ currentExampleData.mode }}</p>
                <p><strong>Modelo:</strong> {{ currentExampleData.modelName }}</p>
                <p><strong>API:</strong> {{ currentExampleData.ajax ? 'Habilitada' : 'Deshabilitada' }}</p>
              </small>
            </b-card-body>
          </b-card>
        </b-col>

        <b-col md="9" lg="10">
          <b-card>
            <b-card-header>
              <h5 class="mb-0">
                <b-icon :icon="currentExampleData.icon" class="mr-2"></b-icon>
                {{ currentExampleData.name }}
              </h5>
              <small class="text-muted">{{ currentExampleData.description }}</small>
            </b-card-header>
            <b-card-body>
              <component :is="currentExampleData.component" />
            </b-card-body>
          </b-card>
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>

<script>
import BasicTable from './examples/BasicTable.vue';
import CardsView from './examples/CardsView.vue';
import KanbanView from './examples/KanbanView.vue';
import FiltersAndSearch from './examples/FiltersAndSearch.vue';
import CustomSlots from './examples/CustomSlots.vue';
import LocalData from './examples/LocalData.vue';
import DragAndDrop from './examples/DragAndDrop.vue';
import ImportExport from './examples/ImportExport.vue';

export default {
  name: 'DemoApp',
  components: {
    BasicTable,
    CardsView,
    KanbanView,
    FiltersAndSearch,
    CustomSlots,
    LocalData,
    DragAndDrop,
    ImportExport
  },
  data() {
    return {
      currentExample: 'basic-table',
      examples: [
        {
          id: 'basic-table',
          name: 'Tabla Básica',
          icon: 'table',
          component: 'BasicTable',
          description: 'Ejemplo básico de tabla con CRUD completo',
          mode: 'Tabla',
          modelName: 'users',
          ajax: true
        },
        {
          id: 'cards-view',
          name: 'Vista de Tarjetas',
          icon: 'grid',
          component: 'CardsView',
          description: 'Vista de tarjetas con layout masonry',
          mode: 'Tarjetas',
          modelName: 'products',
          ajax: true
        },
        {
          id: 'kanban-view',
          name: 'Vista Kanban',
          icon: 'kanban',
          component: 'KanbanView',
          description: 'Vista Kanban con drag & drop entre columnas',
          mode: 'Kanban',
          modelName: 'tasks',
          ajax: true
        },
        {
          id: 'filters-search',
          name: 'Filtros y Búsqueda',
          icon: 'funnel',
          component: 'FiltersAndSearch',
          description: 'Ejemplo con filtros avanzados y búsqueda',
          mode: 'Tabla',
          modelName: 'users',
          ajax: true
        },
        {
          id: 'custom-slots',
          name: 'Slots Personalizados',
          icon: 'puzzle',
          component: 'CustomSlots',
          description: 'Ejemplo con slots personalizados para formularios y celdas',
          mode: 'Tabla',
          modelName: 'products',
          ajax: true
        },
        {
          id: 'local-data',
          name: 'Datos Locales',
          icon: 'database',
          component: 'LocalData',
          description: 'Ejemplo sin AJAX usando datos locales',
          mode: 'Tabla',
          modelName: 'users',
          ajax: false
        },
        {
          id: 'drag-drop',
          name: 'Drag & Drop',
          icon: 'arrows-move',
          component: 'DragAndDrop',
          description: 'Ejemplo con ordenamiento drag & drop',
          mode: 'Tabla',
          modelName: 'tasks',
          ajax: true
        },
        {
          id: 'import-export',
          name: 'Importar/Exportar',
          icon: 'download',
          component: 'ImportExport',
          description: 'Ejemplo con funcionalidades de importación y exportación',
          mode: 'Tabla',
          modelName: 'products',
          ajax: true
        }
      ]
    };
  },
  computed: {
    currentExampleData() {
      return this.examples.find(example => example.id === this.currentExample) || this.examples[0];
    }
  },
  methods: {
    setCurrentExample(exampleId) {
      this.currentExample = exampleId;
    }
  }
};
</script>

<style>
#app {
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
}

.navbar-brand {
  font-weight: 600;
}

.list-group-item {
  cursor: pointer;
  transition: all 0.2s ease;
}

.list-group-item:hover {
  background-color: #f8f9fa;
}

.list-group-item.active {
  background-color: #007bff;
  border-color: #007bff;
}

.card-header h5, .card-header h6 {
  margin: 0;
}

.text-muted {
  font-size: 0.875rem;
}
</style>
