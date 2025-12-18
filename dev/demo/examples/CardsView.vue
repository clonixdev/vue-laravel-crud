<!--
  EJEMPLO: Vista de Tarjetas (Cards View)
  
  Este ejemplo demuestra la visualización en formato de tarjetas con layout responsivo.
  Las tarjetas se organizan en un grid que se adapta según el tamaño de pantalla.
  
  CONFIGURACIONES UTILIZADAS:
  - displayMode: 2 = Vista de tarjetas (1=Tabla, 2=Tarjetas, 3=Lista, 4=Kanban)
  - colXs, colSm, colMd, colLg: Columnas de Bootstrap para diferentes breakpoints
  - title, modelName, model, columns: Configuraciones básicas
  
  CONFIGURACIONES DISPONIBLES ADICIONALES:
  - colXl: Columnas para pantallas extra grandes - Por defecto: 4
  - masonryEnabled: Habilitar layout masonry (ladrillo) - Por defecto: false
  - masonrySort: Ordenar en layout masonry - Por defecto: false
  - masonryColumns: Número de columnas en masonry - Por defecto: 3
  - cardClass: Clases CSS adicionales para las tarjetas
  - cardHideFooter: Ocultar footer de las tarjetas - Por defecto: false
  - listContainerClass: Clases CSS para el contenedor de tarjetas
  - listItemClass: Clases CSS para cada tarjeta individual
-->
<template>
  <div>
    <h6 class="mb-3">Vista de tarjetas con layout masonry</h6>
    
    <VueLaravelCrud
      :title="title"
      :modelName="modelName"
      :model="model"
      :models="localData"
      :columns="columns"
      :ajax="ajax"
      :apiUrl="apiUrl"
      :displayMode="2"
      :colLg="3"
      :colMd="4"
      :colSm="6"
      :colXs="12"
      @select="onSelect"
      @itemSaved="onItemSaved"
      @itemDeleted="onItemDeleted"
    >
      <template v-slot:form="slotProps">
        <b-form-group label="Nombre:" description="Nombre del producto">
          <b-form-input
            v-model="slotProps.item.name"
            type="text"
            required
            placeholder="Ingrese el nombre del producto"
          ></b-form-input>
        </b-form-group>
        
        <b-form-group label="Precio:" description="Precio en USD">
          <b-form-input
            v-model="slotProps.item.price"
            type="number"
            step="0.01"
            min="0"
            placeholder="0.00"
          ></b-form-input>
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
    
    <CodeSnippet :code="exampleCode" />
  </div>
</template>

<script>
import VueLaravelCrud from '../../../src/vue-laravel-crud.vue';
import CodeSnippet from '../components/CodeSnippet.vue';
import { isStaticMode } from '../utils/staticMode.js';
import { generateMockData } from '../data/mockData.js';

export default {
  name: 'CardsView',
  components: {
    VueLaravelCrud,
    CodeSnippet
  },
  data() {
    const staticMode = isStaticMode();
    
    return {
      title: "Catálogo de Productos",
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
        { label: "ID", prop: "id", type: "number" },
        { label: "Nombre", prop: "name", type: "text" },
        { label: "Precio", prop: "price", type: "number" },
        { label: "Categoría", prop: "category", type: "text" },
        { label: "Stock", prop: "stock", type: "number" },
        { label: "Activo", prop: "active", type: "boolean" },
        { label: "Acciones", prop: "actions", type: "actions" }
      ]
      // NOTA: Las configuraciones de columnas (colXs, colSm, etc.) están en el template
      // :colXs="12"  - 1 columna en móviles extra pequeños
      // :colSm="6"   - 2 columnas en móviles pequeños
      // :colMd="4"   - 3 columnas en tablets
      // :colLg="3"   - 4 columnas en pantallas grandes
    };
  },
  computed: {
    exampleCode() {
      return `<template>
  <div>
    <VueLaravelCrud
      title="Catálogo de Productos"
      modelName="products"
      :model="model"
      :columns="columns"
      :ajax="true"
      apiUrl="http://localhost:3001/api"
      :displayMode="2"
      :colLg="3"
      :colMd="4"
      :colSm="6"
      :colXs="12"
      @select="onSelect"
      @itemSaved="onItemSaved"
      @itemDeleted="onItemDeleted"
    >
      <template v-slot:form="slotProps">
        <b-form-group label="Nombre:" description="Nombre del producto">
          <b-form-input
            v-model="slotProps.item.name"
            type="text"
            required
            placeholder="Ingrese el nombre del producto"
          ></b-form-input>
        </b-form-group>
        
        <b-form-group label="Precio:" description="Precio en USD">
          <b-form-input
            v-model="slotProps.item.price"
            type="number"
            step="0.01"
            min="0"
            placeholder="0.00"
          ></b-form-input>
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
        { label: "ID", prop: "id", type: "number" },
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
      console.log('Producto seleccionado:', item);
    },
    onItemSaved(data) {
      console.log('Producto guardado:', data);
    },
    onItemDeleted() {
      console.log('Producto eliminado');
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
