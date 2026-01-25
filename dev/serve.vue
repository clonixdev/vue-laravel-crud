<script>
import Vue from 'vue';
import VueLaravelCrud from '@/vue-laravel-crud.vue';

// ============================================
// CONFIGURACIÓN DE BOOTSTRAP
// ============================================
// El componente vue-laravel-crud soporta Bootstrap 4 y 5
// Los wrappers internos emulan la API de bootstrap-vue (sin necesidad de bootstrap-vue)

// OPCIÓN 1: Bootstrap 4
// import 'bootstrap/dist/css/bootstrap.min.css';
// import 'bootstrap/dist/js/bootstrap.bundle.min.js';
// Nota: Bootstrap 4 requiere jQuery

// OPCIÓN 2: Bootstrap 5 (actual)
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
// Bootstrap Icons (compatible con Bootstrap 4 y 5)
import 'bootstrap-icons/font/bootstrap-icons.css';
export default Vue.extend({
  name: 'ServeDev',
  components: {
    VueLaravelCrud
  }
});
</script>
<template>
  <div id="app">
    <vue-laravel-crud 
      ref="crud" 
      title="Posts Categorías" 
      :modelName="'post-categories'" 
      :model="item"
      :columns="columns" 
      :showCreateBtn="true"
      :bootstrapVersion="'auto'"
      >
      <template v-slot:show="slotProps">
      </template>
      <template v-slot:form="slotProps">
        <b-form-group label="Nombre:" description="Nombre">
          <b-form-input v-model="slotProps.item.name" type="text" required placeholder="Nombre"></b-form-input>
        </b-form-group>
      </template>
      <template v-slot:rowAction="slotProps">
        <!--  <b-button variant="primary" @click="slotProps.showItem(slotProps.item.id, slotProps.index)">
                <b-icon-eye></b-icon-eye>
            </b-button> -->
        <b-button variant="secondary" @click="slotProps.updateItem(slotProps.item.id, slotProps.index)">
          <b-icon-pencil></b-icon-pencil>
        </b-button>
        <b-button variant="danger" @click="slotProps.removeItem(slotProps.item.id, slotProps.index)">
          <b-icon-trash></b-icon-trash>
        </b-button>
      </template>
    </vue-laravel-crud>
  </div>
</template>
