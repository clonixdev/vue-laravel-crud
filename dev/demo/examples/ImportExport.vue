<!--
  EJEMPLO: Importación y Exportación
  
  Este ejemplo demuestra las funcionalidades de importar y exportar datos,
  así como la eliminación masiva de elementos.
  
  CONFIGURACIONES UTILIZADAS:
  - showImport: true = Muestra el botón de importar
  - showExport: true = Muestra el botón de exportar
  - bulkDelete: true = Habilita la eliminación masiva de elementos seleccionados
  
  FUNCIONALIDADES:
  - Exportar: Permite exportar los datos a JSON o XLSX
  - Importar: Permite importar datos desde un archivo
  - Eliminación masiva: Permite eliminar múltiples elementos seleccionados
  
  CONFIGURACIONES DISPONIBLES ADICIONALES:
  - messageImport: Texto del botón importar - Por defecto: "Importar"
  - messageExport: Texto del botón exportar - Por defecto: "Exportar"
  - messageRemoveBulkConfirm: Mensaje de confirmación para eliminación masiva
    Por defecto: "¿Esta seguro de borrar los elementos seleccionados?"
  - fileImport: Configuración del archivo de importación (opcional)
  - markDirty: Marcar elementos como modificados - Por defecto: true
  
  ENDPOINTS API REQUERIDOS (si ajax=true):
  - GET /api/{modelName}/export - Para exportar datos
  - POST /api/{modelName}/import - Para importar datos
  - DELETE /api/{modelName}/bulk-destroy - Para eliminación masiva
-->
<template>
  <div>
    <h6 class="mb-3">Ejemplo con funcionalidades de importación y exportación</h6>
    
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
      @select="onSelect"
      @itemSaved="onItemSaved"
      @itemDeleted="onItemDeleted"
    >
      <template v-slot:form="slotProps">
        <b-form-group label="Nombre del Producto:" description="Nombre del producto">
          <b-form-input
            v-model="slotProps.item.name"
            type="text"
            required
            placeholder="Ingrese el nombre del producto"
          ></b-form-input>
        </b-form-group>
        
        <b-form-group label="Precio:" description="Precio en USD">
          <b-input-group prepend="$">
            <b-form-input
              v-model="slotProps.item.price"
              type="number"
              step="0.01"
              min="0"
              placeholder="0.00"
            ></b-form-input>
          </b-input-group>
        </b-form-group>
        
        <b-form-group label="Categoría:" description="Categoría del producto">
          <b-form-select v-model="slotProps.item.category">
            <option value="Electronics">Electrónicos</option>
            <option value="Accessories">Accesorios</option>
            <option value="Clothing">Ropa</option>
            <option value="Books">Libros</option>
          </b-form-select>
        </b-form-group>
        
        <b-form-group label="Stock:" description="Cantidad en inventario">
          <b-form-input
            v-model="slotProps.item.stock"
            type="number"
            min="0"
            placeholder="0"
          ></b-form-input>
        </b-form-group>
        
        <b-form-group>
          <b-form-checkbox v-model="slotProps.item.active">
            Producto activo
          </b-form-checkbox>
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
            Precio
            <b-badge variant="success" pill>${{ slotProps.item.price }}</b-badge>
          </b-list-group-item>
          <b-list-group-item class="d-flex justify-content-between align-items-center">
            Categoría
            <b-badge variant="secondary" pill>{{ slotProps.item.category }}</b-badge>
          </b-list-group-item>
          <b-list-group-item class="d-flex justify-content-between align-items-center">
            Stock
            <b-badge 
              :variant="slotProps.item.stock > 0 ? 'success' : 'danger'" 
              pill
            >
              {{ slotProps.item.stock }}
            </b-badge>
          </b-list-group-item>
          <b-list-group-item class="d-flex justify-content-between align-items-center">
            Estado
            <b-badge 
              :variant="slotProps.item.active ? 'success' : 'danger'" 
              pill
            >
              {{ slotProps.item.active ? 'Activo' : 'Inactivo' }}
            </b-badge>
          </b-list-group-item>
        </b-list-group>
      </template>
    </VueLaravelCrud>
    
    <div v-if="selectedItem" class="mt-3">
      <b-alert variant="info" show>
        <strong>Producto seleccionado:</strong> {{ selectedItem.name }} - ${{ selectedItem.price }}
      </b-alert>
    </div>
  </div>
</template>

<script>
import VueLaravelCrud from '../../../src/vue-laravel-crud.vue';
import { isStaticMode } from '../utils/staticMode.js';
import { generateMockData } from '../data/mockData.js';

export default {
  name: 'ImportExport',
  components: {
    VueLaravelCrud
  },
  data() {
    const staticMode = isStaticMode();
    
    return {
      title: "Productos con Import/Export",
      modelName: "products",
      ajax: !staticMode,
      apiUrl: staticMode ? "" : "http://localhost:3001/api",
      localData: staticMode ? generateMockData('products', 15) : [],
      selectedItem: null,
      model: {
        name: "",
        price: null,
        category: "Electronics",
        stock: 0,
        active: true
      },
      columns: [
        { label: "ID", prop: "id", type: "number", width: "80px" },
        { label: "Nombre", prop: "name", type: "text" },
        { label: "Precio", prop: "price", type: "number" },
        { label: "Categoría", prop: "category", type: "text" },
        { label: "Stock", prop: "stock", type: "number" },
        { label: "Activo", prop: "active", type: "boolean" },
        { label: "Acciones", prop: "actions", type: "actions" }
      ]
    };
  },
  methods: {
    onSelect(item) {
      this.selectedItem = item;
    },
    onItemSaved(data) {
      console.log('Producto guardado:', data);
    },
    onItemDeleted() {
      console.log('Producto eliminado');
      this.selectedItem = null;
    }
  }
};
</script>
