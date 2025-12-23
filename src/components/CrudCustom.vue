<template>
  <div v-if="currentDisplayMode == displayModes.MODE_CUSTOM">
    <div :class="listContainerClass">
      <!-- Spinner durante la carga inicial -->
      <div v-if="loadingValue || !firstLoadValue" class="text-center p-5">
        <b-spinner variant="primary" label="Cargando..."></b-spinner>
        <p class="mt-2">{{ messageLoading }}</p>
      </div>

      <!-- Contenido con datos -->
      <template v-else>
        <p v-if="firstLoadValue && itemsList && itemsList.length == 0 && !infiniteScroll" class="p-3">
          {{ messageEmptyResults }}
        </p>
        <div :class="listItemClass" v-for="(item, index) in itemsList" v-bind:key="index">
          <slot name="card" v-bind:item="item"> </slot>
        </div>
      </template>
    </div>
  </div>
</template>

<script>
export default {
  name: 'CrudCustom',
  inject: [
    'displayMode',
    'displayModes',
    'listContainerClass',
    'listItemClass',
    'loading',
    'firstLoad',
    'items',
    'infiniteScroll',
    'messageEmptyResults',
    'messageLoading',
    'itemsList'
  ],
  computed: {
    currentDisplayMode() {
      if (!this.displayMode) return 1;
      if (this.displayMode.value !== undefined) {
        return this.displayMode.value;
      }
      if (typeof this.displayMode === 'function') {
        return this.displayMode();
      }
      return this.displayMode;
    },
    loadingValue() {
      return this.loading && this.loading.value !== undefined ? this.loading.value : this.loading;
    },
    firstLoadValue() {
      return this.firstLoad && this.firstLoad.value !== undefined ? this.firstLoad.value : this.firstLoad;
    }
  }
};
</script>
