<template>
  <div>
    <!-- Modal de formulario -->
    <b-modal :id="'modal-form-item-' + modelName" hide-footer size="xl" :title="title" no-close-on-backdrop>
      <b-overlay :show="loadingValue" rounded="sm">
        <template v-if="validate">
          <form @submit="saveItem">
            <template v-if="reactiveItem">
              <slot name="form" v-bind:item="reactiveItem">
                <b-form-group label="Nombre:" description="Nombre ">
                  <b-form-input v-model="reactiveItem.title" type="text" required placeholder="Nombre"></b-form-input>
                </b-form-group>
              </slot>
            </template>
            <b-button block type="submit" variant="success" :disabled="loadingValue">
              <b-spinner small v-if="loadingValue"></b-spinner>{{ messageSave }}
            </b-button>
          </form>
        </template>
        <template v-if="!validate">
          <template v-if="reactiveItem">
            <slot name="form" v-bind:item="reactiveItem">
              <b-form-group :label="key" v-for="(value, key) in reactiveItem" :key="key">
                <b-form-input v-model="reactiveItem[key]" type="text" required></b-form-input>
              </b-form-group>
            </slot>
          </template>
          <b-button block type="submit" variant="success" :disabled="loadingValue" @click="saveItem()">
            <b-spinner small v-if="loadingValue"></b-spinner>{{ messageSave }}
          </b-button>
        </template>
      </b-overlay>
    </b-modal>

    <!-- Modal de visualización -->
    <b-modal :id="'modal-show-item-' + modelName" hide-footer size="xl" :title="title" no-close-on-backdrop>
      <template v-if="reactiveItem">
        <slot name="show" v-bind:item="reactiveItem">
          <b-list-group>
            <b-list-group-item v-for="(value, key) in reactiveItem" :key="key">
              <b-row class="w-100">
                <b-col cols="4" class="font-weight-bold">{{ key }}</b-col>
                <b-col cols="8">{{ JSON.stringify(value) }}</b-col>
              </b-row>
            </b-list-group-item>
          </b-list-group>
        </slot>
      </template>
    </b-modal>

    <!-- Modal de importación -->
    <b-modal ref="modal-import" title="Importar" hide-footer v-if="showImport">
      <slot name="import" v-bind:item="item" v-if="item">
        <b-overlay :show="loadingValue" rounded="sm">
          <b-form-file v-model="fileImport" :state="Boolean(fileImport)" browse-text="Explorar"
            placeholder="Importar..." drop-placeholder="Arrastrar Archivo aquí..."></b-form-file>
          <div class="text-center mt-3">
            <b-button variant="info" v-on:click="importItems()" :disabled="loadingValue">
              <b-icon-cloud-upload></b-icon-cloud-upload>
              {{ loadingValue ? "Cargando..." : "Importar" }}
            </b-button>
          </div>
        </b-overlay>
      </slot>
    </b-modal>

    <!-- Modal de exportación -->
    <b-modal ref="modal-export" title="Exportar" hide-footer v-if="showExport">
      <slot name="export" v-bind:item="item" v-if="item">
        <b-overlay :show="loadingValue" rounded="sm">

          <p v-if="selectedItems.length">Se exportará {{ selectedItems.length }} elementos.</p>
          <p v-else>Se exportará la consulta actual.</p>

          <b-form-group label="Seleccione el formato de exportación:" class="mt-3">
            <div class="export-format-options">
              <b-form-radio
                v-model="exportFormat"
                value="JSON"
                class="export-format-radio"
              >
                <b-icon-file-text class="mr-2"></b-icon-file-text>
                JSON
              </b-form-radio>
              <b-form-radio
                v-model="exportFormat"
                value="XLSX"
                class="export-format-radio"
              >
                <b-icon-table class="mr-2"></b-icon-table>
                XLSX
              </b-form-radio>
            </div>
          </b-form-group>

          <div class="text-center mt-3">
            <b-button variant="info" v-on:click="exportItems()" :disabled="loadingValue">
              <b-icon-cloud-upload></b-icon-cloud-upload>
              {{ loadingValue ? "Cargando..." : "Exportar" }}
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
    'getItem',
    'messageSave',
    'showImport',
    'showExport',
    'fileImport',
    'selectedItems',
    'exportFormat',
    'saveItem',
    'importItems',
    'exportItems'
  ],
  computed: {
    // Computed property para asegurar reactividad del item inyectado
    reactiveItem() {
      // Si hay una función getItem, usarla para obtener el item actual
      if (this.getItem && typeof this.getItem === 'function') {
        return this.getItem();
      }
      // Si no, usar el item inyectado directamente
      return this.item;
    },
    // Computed property para manejar loading como objeto reactivo o booleano
    loadingValue() {
      return this.loading && this.loading.value !== undefined ? this.loading.value : this.loading;
    }
  },
  watch: {
    // Watch el item inyectado para forzar actualización
    item: {
      handler() {
        this.$forceUpdate();
      },
      deep: true,
      immediate: true
    }
  }
};
</script>

<style scoped>
.export-format-options {
  display: flex;
  gap: 1rem;
  justify-content: center;
  flex-wrap: wrap;
}

.export-format-radio {
  flex: 1;
  min-width: 150px;
  padding: 1rem;
  border: 2px solid #dee2e6;
  border-radius: 0.5rem;
  cursor: pointer;
  transition: all 0.3s ease;
  text-align: center;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #fff;
}

.export-format-radio:hover {
  border-color: #007bff;
  background-color: #f8f9fa;
  transform: translateY(-2px);
  box-shadow: 0 2px 8px rgba(0, 123, 255, 0.2);
}

.export-format-radio >>> .custom-control-input:checked ~ .custom-control-label {
  color: #007bff;
  font-weight: 600;
}

.export-format-radio >>> .custom-control-input:checked ~ .custom-control-label::before {
  border-color: #007bff;
  background-color: #007bff;
}

.export-format-radio >>> .custom-control-label {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  cursor: pointer;
  font-size: 1rem;
}

.export-format-radio >>> .custom-control-label::before {
  margin-right: 0.5rem;
}

.export-format-radio >>> svg {
  font-size: 1.5rem;
  color: #495057;
}

.export-format-radio >>> .custom-control-input:checked ~ .custom-control-label svg {
  color: #007bff;
}
</style>
