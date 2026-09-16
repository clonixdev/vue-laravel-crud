<template>
  <div>
    <!-- Modal de formulario -->
    <b-modal
      ref="formModal"
      :id="formModalId"
      size="xl"
      :title="title"
      @hidden="onFormHidden"
    >
      <b-overlay :show="loadingValue" rounded="sm">
        <template v-if="validate">
          <form :id="formId" @submit.prevent="saveItem">
            <template v-if="reactiveItem">
              <slot name="form" v-bind:item="reactiveItem">
                <b-form-group label="Nombre:" description="Nombre ">
                  <b-form-input v-model="reactiveItem.title" type="text" required placeholder="Nombre"></b-form-input>
                </b-form-group>
              </slot>
            </template>
          </form>
        </template>
        <template v-else>
          <form :id="formId" @submit.prevent="saveItem">
            <template v-if="reactiveItem">
              <slot name="form" v-bind:item="reactiveItem">
                <b-form-group :label="key" v-for="(value, key) in reactiveItem" :key="key">
                  <b-form-input v-model="reactiveItem[key]" type="text" required></b-form-input>
                </b-form-group>
              </slot>
            </template>
          </form>
        </template>
      </b-overlay>
      <template #modal-footer>
        <slot name="modal-footer" v-bind="footerSlotProps">
          <slot name="modal-footer-prepend" v-bind="footerSlotProps" />
          <b-button variant="secondary" @click="hideFormModal">
            Cancelar
          </b-button>
          <b-button
            type="submit"
            :form="formId"
            variant="success"
            :disabled="loadingValue"
            @click="onFooterSaveClick"
          >
            <b-spinner small v-if="loadingValue"></b-spinner>{{ messageSave }}
          </b-button>
          <slot name="modal-footer-append" v-bind="footerSlotProps" />
        </slot>
      </template>
    </b-modal>

    <!-- Modal de visualización -->
    <b-modal
      ref="showModal"
      :id="'modal-show-item-' + modelName"
      size="xl"
      :title="title"
      @hidden="onShowHidden"
    >
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
      <template #modal-footer>
        <slot name="show-modal-footer" v-bind="{ hide: hideShowModal, item: reactiveItem }">
          <b-button variant="secondary" @click="hideShowModal">
            Cerrar
          </b-button>
        </slot>
      </template>
    </b-modal>

    <!-- Modal de importación -->
    <b-modal ref="modal-import" title="Importar" v-if="showImport">
      <slot name="import" v-bind:item="item" v-if="item">
        <b-overlay :show="loadingValue" rounded="sm">
          <b-form-file v-model="fileImport" :state="Boolean(fileImport)" browse-text="Explorar"
            placeholder="Importar..." drop-placeholder="Arrastrar Archivo aquí..."></b-form-file>
        </b-overlay>
      </slot>
      <template #modal-footer>
        <slot name="import-modal-footer" v-bind="{ importItems, loading: loadingValue, hide: hideImportModal }">
          <b-button variant="secondary" @click="hideImportModal">
            Cancelar
          </b-button>
          <b-button variant="info" @click="importItems()" :disabled="loadingValue">
            <b-icon-cloud-upload></b-icon-cloud-upload>
            {{ loadingValue ? "Cargando..." : "Importar" }}
          </b-button>
        </slot>
      </template>
    </b-modal>

    <!-- Modal de exportación -->
    <b-modal ref="modal-export" title="Exportar" v-if="showExport">
      <slot name="export" v-bind:item="item" v-if="item">
        <b-overlay :show="loadingValue" rounded="sm">
          <p v-if="selectedItems.length">Se exportará {{ selectedItems.length }} elementos.</p>
          <p v-else>Se exportará la consulta actual.</p>

          <b-form-group label="Seleccione el formato de exportación:" class="mt-3">
            <div class="export-format-options">
              <b-form-radio
                v-model="exportFormatValue"
                value="JSON"
                class="export-format-radio"
              >
                <b-icon-file-text class="mr-2"></b-icon-file-text>
                JSON
              </b-form-radio>
              <b-form-radio
                v-model="exportFormatValue"
                value="XLSX"
                class="export-format-radio"
              >
                <b-icon-table class="mr-2"></b-icon-table>
                XLSX
              </b-form-radio>
            </div>
          </b-form-group>
        </b-overlay>
      </slot>
      <template #modal-footer>
        <slot name="export-modal-footer" v-bind="{ exportItems, loading: loadingValue, hide: hideExportModal }">
          <b-button variant="secondary" @click="hideExportModal">
            Cancelar
          </b-button>
          <b-button variant="info" @click="exportItems()" :disabled="loadingValue">
            <b-icon-cloud-upload></b-icon-cloud-upload>
            {{ loadingValue ? "Cargando..." : "Exportar" }}
          </b-button>
        </slot>
      </template>
    </b-modal>
  </div>
</template>

<script>
export default {
  name: 'CrudModals',
  inject: [
    'bootstrapFactory',
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
    'exportItems',
    'closeUi',
    'uiMode',
  ],
  computed: {
    formModalId() {
      return 'modal-form-item-' + this.modelName;
    },
    formId() {
      return 'crud-form-' + this.modelName;
    },
    reactiveItem() {
      if (this.getItem && typeof this.getItem === 'function') {
        try {
          return this.getItem();
        } catch (e) {
          console.debug('Error getting item from getItem function:', e);
          return this.item || {};
        }
      }
      return this.item || {};
    },
    loadingValue() {
      return this.loading && this.loading.value !== undefined ? this.loading.value : this.loading;
    },
    exportFormatValue: {
      get() {
        return this.exportFormat && this.exportFormat.value !== undefined ? this.exportFormat.value : this.exportFormat;
      },
      set(value) {
        if (this.exportFormat && this.exportFormat.value !== undefined) {
          this.exportFormat.value = value;
        }
      }
    },
    footerSlotProps() {
      return {
        save: this.saveItem,
        loading: this.loadingValue,
        hide: this.hideFormModal,
        messageSave: this.messageSave,
        item: this.reactiveItem,
        formId: this.formId,
      };
    }
  },
  methods: {
    hideFormModal() {
      if (typeof this.closeUi === 'function') {
        this.closeUi();
        return;
      }
      this.$refs.formModal?.hide?.();
    },
    hideShowModal() {
      if (typeof this.closeUi === 'function') {
        this.closeUi();
        return;
      }
      this.$refs.showModal?.hide?.();
    },
    onFormHidden() {
      const mode = this.uiMode && this.uiMode.value !== undefined ? this.uiMode.value : this.uiMode;
      if (mode === 'create' || mode === 'edit') {
        this.closeUi?.();
      }
    },
    onShowHidden() {
      const mode = this.uiMode && this.uiMode.value !== undefined ? this.uiMode.value : this.uiMode;
      if (mode === 'show') {
        this.closeUi?.();
      }
    },
    hideImportModal() {
      this.$refs['modal-import']?.hide?.();
    },
    hideExportModal() {
      this.$refs['modal-export']?.hide?.();
    },
    onFooterSaveClick(event) {
      // Si el botón está fuera del form (p.ej. browsers sin soporte form=), guardar igual.
      if (!this.validate) {
        event.preventDefault();
        this.saveItem();
      }
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
