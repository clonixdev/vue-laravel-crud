<template>
  <div
    v-if="hasItems"
    class="crud-quick-filters"
    :class="[rootClass, `crud-quick-filters--${normalizedVariant}`]"
    role="tablist"
    :aria-label="ariaLabel"
  >
    <slot
      name="quickFilters"
      v-bind="slotScope"
    >
      <button
        v-for="item in normalizedItems"
        :key="item.key"
        type="button"
        role="tab"
        class="crud-quick-filter"
        :class="[
          item.class,
          `crud-quick-filter--${item.tone}`,
          {
            'is-active': item.key === activeKey,
            'is-disabled': item.disabled,
          },
        ]"
        :aria-selected="item.key === activeKey"
        :disabled="item.disabled || loadingValue"
        @click="select(item)"
      >
        <slot
          name="quickFilterItem"
          v-bind="{ item, active: item.key === activeKey, select: () => select(item) }"
        >
          <b-icon
            v-if="item.icon"
            :icon="item.icon"
            class="crud-quick-filter__icon"
          ></b-icon>
          <span class="crud-quick-filter__label">{{ item.label }}</span>
          <span
            v-if="item.count != null"
            class="crud-quick-filter__count"
          >{{ item.count }}</span>
        </slot>
      </button>
    </slot>
  </div>
</template>

<script>
export default {
  name: 'CrudQuickFilters',
  inject: {
    quickFilters: { default: () => [] },
    quickFiltersVariant: { default: 'pills' },
    quickFiltersAriaLabel: { default: 'Filtros rápidos' },
    quickFiltersClass: { default: '' },
    activeQuickFilterKey: { default: null },
    selectQuickFilter: { default: () => {} },
    loading: { default: null },
  },
  computed: {
    items() {
      const list = this.quickFilters;
      return Array.isArray(list) ? list : [];
    },
    hasItems() {
      return this.normalizedItems.length > 0;
    },
    normalizedVariant() {
      const v = String(this.quickFiltersVariant || 'pills').toLowerCase();
      return ['pills', 'tabs', 'segmented'].includes(v) ? v : 'pills';
    },
    ariaLabel() {
      return this.quickFiltersAriaLabel || 'Filtros rápidos';
    },
    rootClass() {
      return this.quickFiltersClass || '';
    },
    activeKey() {
      if (this.activeQuickFilterKey && this.activeQuickFilterKey.value !== undefined) {
        return this.activeQuickFilterKey.value;
      }
      return this.activeQuickFilterKey;
    },
    loadingValue() {
      return this.loading && this.loading.value !== undefined
        ? this.loading.value
        : this.loading;
    },
    normalizedItems() {
      return this.items
        .filter((item) => item && (item.key != null || item.value != null || item.id != null))
        .map((item) => {
          const key = String(item.key != null ? item.key : (item.value != null ? item.value : item.id));
          return {
            ...item,
            key,
            label: item.label != null ? String(item.label) : key,
            icon: item.icon || null,
            tone: String(item.variant || item.tone || 'secondary').toLowerCase(),
            count: item.count,
            disabled: !!item.disabled,
            class: item.class || '',
            filter: item.filter,
          };
        });
    },
    slotScope() {
      return {
        items: this.normalizedItems,
        active: this.activeKey,
        select: this.select,
        loading: this.loadingValue,
      };
    },
  },
  methods: {
    select(item) {
      if (!item || item.disabled || this.loadingValue) {
        return;
      }
      if (typeof this.selectQuickFilter === 'function') {
        this.selectQuickFilter(item.key, item);
      }
    },
  },
};
</script>

<style scoped>
.crud-quick-filters {
  display: inline-flex;
  flex-wrap: wrap;
  align-items: center;
  gap: 0.35rem;
  min-width: 0;
}

.crud-quick-filters--segmented {
  gap: 0;
  padding: 0.2rem;
  border-radius: 999px;
  background: rgba(15, 23, 42, 0.05);
}

.crud-quick-filters--segmented .crud-quick-filter {
  border-radius: 999px;
  border-color: transparent;
  background: transparent;
}

.crud-quick-filters--tabs {
  gap: 0;
  border-bottom: 1px solid rgba(15, 23, 42, 0.08);
  padding-bottom: 0;
}

.crud-quick-filters--tabs .crud-quick-filter {
  border: 0;
  border-bottom: 2px solid transparent;
  border-radius: 0;
  background: transparent;
  padding: 0.35rem 0.75rem;
}

.crud-quick-filter {
  display: inline-flex;
  align-items: center;
  gap: 0.35rem;
  margin: 0;
  padding: 0.3rem 0.75rem;
  border: 1px solid rgba(15, 23, 42, 0.12);
  border-radius: 999px;
  background: #fff;
  color: #334155;
  font-size: 0.8125rem;
  font-weight: 500;
  line-height: 1.2;
  white-space: nowrap;
  cursor: pointer;
  transition: background-color 0.15s ease, border-color 0.15s ease, color 0.15s ease, box-shadow 0.15s ease;
}

.crud-quick-filter:hover:not(:disabled):not(.is-active) {
  background: rgba(15, 23, 42, 0.04);
  border-color: rgba(15, 23, 42, 0.2);
}

.crud-quick-filter:focus-visible {
  outline: 2px solid rgba(13, 110, 253, 0.45);
  outline-offset: 1px;
}

.crud-quick-filter:disabled,
.crud-quick-filter.is-disabled {
  opacity: 0.55;
  cursor: not-allowed;
}

.crud-quick-filter__icon {
  font-size: 0.95em;
  opacity: 0.9;
}

.crud-quick-filter__count {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  min-width: 1.25rem;
  padding: 0.05rem 0.35rem;
  border-radius: 999px;
  background: rgba(15, 23, 42, 0.08);
  font-size: 0.75em;
  font-weight: 600;
}

.crud-quick-filter.is-active {
  color: #fff;
  border-color: transparent;
  box-shadow: 0 1px 2px rgba(15, 23, 42, 0.12);
}

.crud-quick-filter.is-active .crud-quick-filter__count {
  background: rgba(255, 255, 255, 0.22);
}

.crud-quick-filter--secondary.is-active,
.crud-quick-filter--default.is-active {
  background: #475569;
}

.crud-quick-filter--primary.is-active {
  background: #0d6efd;
}

.crud-quick-filter--info.is-active {
  background: #0dcaf0;
  color: #053b4a;
}

.crud-quick-filter--success.is-active {
  background: #198754;
}

.crud-quick-filter--warning.is-active {
  background: #ffc107;
  color: #5c4400;
}

.crud-quick-filter--danger.is-active {
  background: #dc3545;
}

.crud-quick-filters--tabs .crud-quick-filter.is-active {
  background: transparent;
  color: #0d6efd;
  border-bottom-color: #0d6efd;
  box-shadow: none;
}

.crud-quick-filters--tabs .crud-quick-filter--success.is-active {
  color: #198754;
  border-bottom-color: #198754;
}

.crud-quick-filters--tabs .crud-quick-filter--warning.is-active {
  color: #b58100;
  border-bottom-color: #ffc107;
}

.crud-quick-filters--tabs .crud-quick-filter--danger.is-active {
  color: #dc3545;
  border-bottom-color: #dc3545;
}

.crud-quick-filters--tabs .crud-quick-filter--info.is-active {
  color: #087990;
  border-bottom-color: #0dcaf0;
}
</style>
