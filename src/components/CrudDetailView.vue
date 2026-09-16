<template>
  <div class="crud-detail-view" v-if="isOpen">
    <div class="crud-detail-view__header">
      <div>
        <h4 class="mb-1">{{ title }}</h4>
        <div class="text-muted small">{{ modeLabel }}</div>
      </div>
      <div class="d-flex gap-2">
        <b-button variant="outline-secondary" @click="closeUi()">
          Volver
        </b-button>
        <b-button
          v-if="mode === 'show' && item?.id"
          variant="secondary"
          @click="updateItem(item.id)"
        >
          Editar
        </b-button>
      </div>
    </div>

    <b-overlay :show="loadingValue" rounded="sm">
      <div class="crud-detail-view__body card shadow-sm">
        <div class="card-body">
          <template v-if="mode === 'show'">
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

          <template v-else>
            <form :id="formId" @submit.prevent="saveItem">
              <slot name="form" v-bind:item="reactiveItem">
                <b-form-group :label="key" v-for="(value, key) in reactiveItem" :key="key">
                  <b-form-input v-model="reactiveItem[key]" type="text"></b-form-input>
                </b-form-group>
              </slot>
            </form>
          </template>
        </div>

        <div class="card-footer d-flex justify-content-end gap-2" v-if="mode !== 'show'">
          <slot name="modal-footer" v-bind="footerSlotProps">
            <b-button variant="secondary" @click="closeUi()">Cancelar</b-button>
            <b-button type="submit" :form="formId" variant="success" :disabled="loadingValue">
              <b-spinner small v-if="loadingValue"></b-spinner>{{ messageSave }}
            </b-button>
          </slot>
        </div>

        <div class="card-footer d-flex justify-content-end gap-2" v-else>
          <slot name="show-modal-footer" v-bind="{ hide: closeUi, item: reactiveItem }">
            <b-button variant="secondary" @click="closeUi()">Cerrar</b-button>
          </slot>
        </div>
      </div>
    </b-overlay>
  </div>
</template>

<script>
export default {
  name: 'CrudDetailView',
  inject: {
    modelName: { default: '' },
    title: { default: '' },
    loading: { default: null },
    item: { default: () => ({}) },
    getItem: { default: null },
    messageSave: { default: 'Guardar' },
    saveItem: { default: () => {} },
    closeUi: { default: () => {} },
    updateItem: { default: () => {} },
    uiMode: { default: null },
  },
  computed: {
    mode() {
      if (this.uiMode && this.uiMode.value !== undefined) {
        return this.uiMode.value;
      }
      return this.uiMode;
    },
    isOpen() {
      return !!this.mode;
    },
    modeLabel() {
      if (this.mode === 'create') return 'Crear';
      if (this.mode === 'edit') return 'Editar';
      if (this.mode === 'show') return 'Detalle';
      return '';
    },
    formId() {
      return 'crud-form-page-' + this.modelName;
    },
    reactiveItem() {
      if (this.getItem && typeof this.getItem === 'function') {
        try {
          return this.getItem() || {};
        } catch (e) {
          return this.item || {};
        }
      }
      return this.item || {};
    },
    loadingValue() {
      return this.loading && this.loading.value !== undefined ? this.loading.value : this.loading;
    },
    footerSlotProps() {
      return {
        save: this.saveItem,
        loading: this.loadingValue,
        hide: this.closeUi,
        messageSave: this.messageSave,
        item: this.reactiveItem,
        formId: this.formId,
      };
    },
  },
};
</script>

<style scoped>
.crud-detail-view__header {
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  gap: 1rem;
  margin-bottom: 1rem;
}

.crud-detail-view__body {
  border: 0;
}
</style>
