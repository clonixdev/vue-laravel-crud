<template>
  <div v-if="currentDisplayMode == displayModes.MODE_CARDS" class="crud-cards">
    <CrudSkeleton
      v-if="isInitialLoading"
      :columns="columnsList"
      :message="messageLoading"
      show-table
      :row-count="4"
    />

    <template v-else>
      <div class="row g-3">
        <div
          v-for="(element, index) in cardItems"
          :key="element.id || index"
          class="item"
          :class="colClasses"
        >
          <slot name="card" v-bind:item="element">
            <ItemCard
              :item="element"
              :columns="columns"
              :index="index"
              :cardClass="cardClass"
              :cardHideFooter="cardHideFooter"
              :itemValue="itemValue"
              :getStateValue="getStateValue"
              :getStateOptions="getStateOptions"
              :getStateBadgeVariant="getStateBadgeVariant"
              :getArrayValue="getArrayValue"
              :showItem="showItem"
              :updateItem="updateItem"
              :removeItem="removeItem"
            >
              <template v-for="(_, name) in $slots" v-slot:[name]="slotProps">
                <slot :name="name" v-bind="slotProps" />
              </template>
            </ItemCard>
          </slot>
        </div>
      </div>

      <CrudEmptyState
        v-if="firstLoadValue && itemsList && itemsList.length == 0 && !infiniteScroll"
        :message="messageEmptyResults"
        icon="inbox"
      />
    </template>
  </div>
</template>

<script>
import ItemCard from '../ItemCard.vue';
import CrudSkeleton from './CrudSkeleton.vue';
import CrudEmptyState from './CrudEmptyState.vue';

export default {
  name: 'CrudCards',
  components: {
    ItemCard,
    CrudSkeleton,
    CrudEmptyState,
  },
  inject: {
    bootstrapFactory: { default: null },
    displayMode: { default: null },
    getDisplayMode: { default: null },
    displayModes: { default: () => ({ MODE_TABLE: 1, MODE_CARDS: 2 }) },
    columns: { default: () => [] },
    items: { default: () => [] },
    itemsList: { default: () => [] },
    loading: { default: null },
    firstLoad: { default: null },
    infiniteScroll: { default: false },
    messageEmptyResults: { default: '' },
    messageLoading: { default: '' },
    colXs: { default: 12 },
    colSm: { default: 6 },
    colMd: { default: 4 },
    colLg: { default: 3 },
    colXl: { default: 3 },
    cardClass: { default: '' },
    cardHideFooter: { default: false },
    itemValue: { default: null },
    getStateValue: { default: null },
    getStateOptions: { default: null },
    getStateBadgeVariant: { default: null },
    getArrayValue: { default: null },
    showItem: { default: () => {} },
    updateItem: { default: () => {} },
    removeItem: { default: () => {} },
  },
  computed: {
    currentDisplayMode() {
      if (typeof this.getDisplayMode === 'function') {
        return this.getDisplayMode();
      }
      if (!this.displayMode) return 1;
      if (this.displayMode.value !== undefined) {
        return this.displayMode.value;
      }
      if (typeof this.displayMode === 'function') {
        return this.displayMode();
      }
      return this.displayMode;
    },
    colClasses() {
      const xs = this.colXs || 12;
      const sm = this.colSm || 6;
      const md = this.colMd || 4;
      const lg = this.colLg || 3;
      const xl = this.colXl || lg;
      return [
        `col-${xs}`,
        `col-sm-${sm}`,
        `col-md-${md}`,
        `col-lg-${lg}`,
        `col-xl-${xl}`,
      ];
    },
    loadingValue() {
      return this.loading && this.loading.value !== undefined ? this.loading.value : this.loading;
    },
    firstLoadValue() {
      return this.firstLoad && this.firstLoad.value !== undefined ? this.firstLoad.value : this.firstLoad;
    },
    isInitialLoading() {
      return this.loadingValue && !this.firstLoadValue;
    },
    columnsList() {
      return Array.isArray(this.columns) ? this.columns : [];
    },
    cardItems() {
      if (Array.isArray(this.itemsList) && this.itemsList.length) {
        return this.itemsList;
      }
      return Array.isArray(this.items) ? this.items : [];
    },
  },
};
</script>
