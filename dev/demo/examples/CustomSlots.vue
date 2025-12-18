<!--
  EJEMPLO: Slots Personalizados
  
  Este ejemplo demuestra cómo usar slots personalizados para personalizar completamente
  el renderizado de formularios y celdas de la tabla.
  
  SLOTS DISPONIBLES:
  - form: Slot para personalizar el formulario de crear/editar
  - show: Slot para personalizar la vista de detalle (modal)
  - cell-{prop}: Slot para personalizar el renderizado de una celda específica
    Ejemplo: v-slot:cell-price para personalizar la columna "price"
  
  CONFIGURACIONES RELACIONADAS:
  - model: Define la estructura del formulario
  - columns: Define las columnas, pero los slots permiten personalizar su renderizado
-->
<template>
  <div>
    <h6 class="mb-3">Ejemplo con slots personalizados para formularios y celdas</h6>
    
    <VueLaravelCrud
      :title="title"
      :modelName="modelName"
      :model="model"
      :models="localData"
      :columns="columns"
      :ajax="ajax"
      :apiUrl="apiUrl"
      @select="onSelect"
      @itemSaved="onItemSaved"
      @itemDeleted="onItemDeleted"
    >
      <!-- SLOT: form - Personaliza el formulario de crear/editar -->
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
      
      <!-- SLOT: cell-price - Personaliza el renderizado de la columna "price" -->
      <template v-slot:cell-price="slotProps">
        <span class="font-weight-bold text-success">
          ${{ slotProps.item.price }}
        </span>
      </template>
      
      <!-- SLOT: cell-stock - Personaliza el renderizado de la columna "stock" -->
      <template v-slot:cell-stock="slotProps">
        <b-badge 
          :variant="slotProps.item.stock > 10 ? 'success' : slotProps.item.stock > 0 ? 'warning' : 'danger'"
          pill
        >
          {{ slotProps.item.stock }}
        </b-badge>
      </template>
      
      <!-- SLOT: cell-category - Personaliza el renderizado de la columna "category" -->
      <template v-slot:cell-category="slotProps">
        <b-badge variant="info">
          {{ slotProps.item.category }}
        </b-badge>
      </template>
      
      <!-- SLOT: show - Personaliza la vista de detalle en el modal -->
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
    
    <CodeSnippet :code="exampleCode" />
  </div>
</template>

<script>
import VueLaravelCrud from '../../../src/vue-laravel-crud.vue';
import CodeSnippet from '../components/CodeSnippet.vue';
import { isStaticMode } from '../utils/staticMode.js';
import { generateMockData } from '../data/mockData.js';

export default {
  name: 'CustomSlots',
  components: {
    VueLaravelCrud,
    CodeSnippet
  },
  data() {
    const staticMode = isStaticMode();
    
    return {
      title: "Productos con Slots Personalizados",
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
  computed: {
    exampleCode() {
      return `<template>
  <div>
    <VueLaravelCrud
      title="Productos con Slots Personalizados"
      modelName="products"
      :model="model"
      :columns="columns"
      :ajax="true"
      apiUrl="http://localhost:3001/api"
      @select="onSelect"
      @itemSaved="onItemSaved"
      @itemDeleted="onItemDeleted"
    >
      <template v-slot:form="slotProps">
        <b-form-group label="Nombre del Producto:">
          <b-form-input
            v-model="slotProps.item.name"
            type="text"
            required
            placeholder="Ingrese el nombre del producto"
          ></b-form-input>
        </b-form-group>
        
        <b-form-group label="Precio:">
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
      </template>
      
      <!-- Slot para personalizar celda de precio -->
      <template v-slot:cell-price="slotProps">
        <span class="font-weight-bold text-success">
          ${{ slotProps.item.price }}
        </span>
      </template>
      
      <!-- Slot para personalizar celda de stock -->
      <template v-slot:cell-stock="slotProps">
        <b-badge 
          :variant="slotProps.item.stock > 10 ? 'success' : slotProps.item.stock > 0 ? 'warning' : 'danger'"
          pill
        >
          {{ slotProps.item.stock }}
        </b-badge>
      </template>
      
      <!-- Slot para personalizar celda de categoría -->
      <template v-slot:cell-category="slotProps">
        <b-badge variant="info">
          {{ slotProps.item.category }}
        </b-badge>
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
        </b-list-group>
      </template>
    </VueLaravelCrud>
  </div>
</template>

<script>
import VueLaravelCrud from "vue-laravel-crud";

export default {
  components: {
    VueLaravelCrud
  },
  data() {
    return {
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
      console.log('Item seleccionado:', item);
    },
    onItemSaved(data) {
      console.log('Item guardado:', data);
    },
    onItemDeleted() {
      console.log('Item eliminado');
    }
  }
};
<\/script>`;
    }
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
