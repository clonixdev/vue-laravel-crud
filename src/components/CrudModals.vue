<template>
  <div>
    <!-- Modal de formulario -->
    <b-modal :id="'modal-form-item-' + modelName" hide-footer size="xl" :title="title" no-close-on-backdrop>
      <b-overlay :show="loading" rounded="sm">
        <template v-if="validate">
          <form @submit="saveItem">
            <slot name="form" v-bind:item="item" v-if="item">
              <b-form-group label="Nombre:" description="Nombre ">
                <b-form-input v-model="item.title" type="text" required placeholder="Nombre"></b-form-input>
              </b-form-group>
            </slot>
            <b-button block type="submit" variant="success" :disabled="loading">
              <b-spinner small v-if="loading"></b-spinner>{{ messageSave }}
            </b-button>
          </form>
        </template>
        <template v-if="!validate">
          <slot name="form" v-bind:item="item" v-if="item">
            <b-form-group :label="key" v-for="(value, key) in item" :key="key">
              <b-form-input v-model="item[key]" type="text" required></b-form-input>
            </b-form-group>
          </slot>
          <b-button block type="submit" variant="success" :disabled="loading" @click="saveItem()">
            <b-spinner small v-if="loading"></b-spinner>{{ messageSave }}
          </b-button>
        </template>
      </b-overlay>
    </b-modal>

    <!-- Modal de visualización -->
    <b-modal :id="'modal-show-item-' + modelName" hide-footer size="xl" :title="title" no-close-on-backdrop>
      <slot name="show" v-bind:item="item" v-if="item">
        <b-list-group>
          <b-list-group-item v-for="(value, key) in item" :key="key">
            <b-row class="w-100">
              <b-col cols="4" class="font-weight-bold">{{ key }}</b-col>
              <b-col cols="8">{{ JSON.stringify(value) }}</b-col>
            </b-row>
          </b-list-group-item>
        </b-list-group>
      </slot>
    </b-modal>

    <!-- Modal de importación -->
    <b-modal ref="modal-import" title="Importar" hide-footer v-if="showImport">
      <slot name="import" v-bind:item="item" v-if="item">
        <b-overlay :show="loading" rounded="sm">
          <b-form-file v-model="fileImport" :state="Boolean(fileImport)" browse-text="Explorar"
            placeholder="Importar..." drop-placeholder="Arrastrar Archivo aquí..."></b-form-file>
          <div class="text-center mt-3">
            <b-button variant="info" v-on:click="importItems()" :disabled="loading">
              <b-icon-cloud-upload></b-icon-cloud-upload>
              {{ loading ? "Cargando..." : "Importar" }}
            </b-button>
          </div>
        </b-overlay>
      </slot>
    </b-modal>

    <!-- Modal de exportación -->
    <b-modal ref="modal-export" title="Exportar" hide-footer v-if="showExport">
      <slot name="export" v-bind:item="item" v-if="item">
        <b-overlay :show="loading" rounded="sm">

          <p v-if="selectedItems.length">Se exportará {{ selectedItems.length }} elementos.</p>
          <p v-else>Se exportará la consulta actual.</p>

          <select class="form-control" v-model="exportFormat">
            <option value="JSON">JSON</option>
            <option value="XLSX">XLSX</option>
          </select>

          <div class="text-center mt-3">
            <b-button variant="info" v-on:click="exportItems()" :disabled="loading">
              <b-icon-cloud-upload></b-icon-cloud-upload>
              {{ loading ? "Cargando..." : "Exportar" }}
            </b-button>
          </div>
        </b-overlay>
      </slot>
    </b-modal>
  </div>
</template>

<script>
export default {
  name: 'CrudModals',
  inject: [
    'modelName',
    'title',
    'loading',
    'validate',
    'item',
    'messageSave',
    'showImport',
    'showExport',
    'fileImport',
    'selectedItems',
    'exportFormat',
    'saveItem',
    'importItems',
    'exportItems'
  ]
};
</script>
