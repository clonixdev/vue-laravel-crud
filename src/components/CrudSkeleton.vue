<template>
  <div class="crud-skeleton" aria-busy="true" aria-live="polite">
    <div v-if="showToolbar" class="crud-skeleton__toolbar placeholder-glow">
      <span class="placeholder col-4 crud-skeleton__bar"></span>
      <span class="placeholder col-3 crud-skeleton__bar"></span>
      <span class="placeholder col-2 crud-skeleton__bar"></span>
    </div>

    <div v-if="showTable" class="crud-skeleton__table-wrap">
      <table class="table table-borderless mb-0">
        <thead>
          <tr>
            <th v-for="(col, idx) in skeletonColumns" :key="'h-' + idx" scope="col">
              <span class="placeholder col-8"></span>
            </th>
          </tr>
        </thead>
        <tbody class="placeholder-glow">
          <tr v-for="row in rowCount" :key="'r-' + row">
            <td v-for="(col, idx) in skeletonColumns" :key="'c-' + row + '-' + idx">
              <span class="placeholder" :class="cellPlaceholderClass(idx)"></span>
            </td>
          </tr>
        </tbody>
      </table>
      <div class="crud-skeleton__overlay">
        <b-spinner variant="primary" label="Cargando"></b-spinner>
        <p v-if="message" class="crud-skeleton__message">{{ message }}</p>
      </div>
    </div>

    <div v-if="showPaginator" class="crud-skeleton__paginator placeholder-glow">
      <span class="placeholder col-2 crud-skeleton__bar"></span>
      <span class="placeholder col-3 crud-skeleton__bar"></span>
    </div>
  </div>
</template>

<script>
export default {
  name: 'CrudSkeleton',
  props: {
    columns: {
      type: Array,
      default: () => [],
    },
    rowCount: {
      type: Number,
      default: 5,
    },
    showToolbar: {
      type: Boolean,
      default: false,
    },
    showTable: {
      type: Boolean,
      default: true,
    },
    showPaginator: {
      type: Boolean,
      default: false,
    },
    message: {
      type: String,
      default: '',
    },
    isColumnVisibleInTable: {
      type: Function,
      default: null,
    },
  },
  computed: {
    skeletonColumns() {
      const cols = Array.isArray(this.columns) ? this.columns : [];
      const visible = cols.filter((col) => {
        if (typeof this.isColumnVisibleInTable === 'function') {
          return this.isColumnVisibleInTable(col);
        }
        return col && col.type !== 'hidden';
      });
      const count = visible.length || 4;
      return Array.from({ length: count }, (_, i) => visible[i] || { label: `col-${i}` });
    },
  },
  methods: {
    cellPlaceholderClass(idx) {
      if (idx === this.skeletonColumns.length - 1) {
        return 'col-4';
      }
      return idx % 2 === 0 ? 'col-10' : 'col-7';
    },
  },
};
</script>

<style scoped>
.crud-skeleton__toolbar {
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-end;
  gap: 0.5rem;
  margin-bottom: 1rem;
}

.crud-skeleton__bar {
  display: inline-block;
  height: 2.25rem;
  border-radius: 0.375rem;
  min-width: 4rem;
}

.crud-skeleton__table-wrap {
  position: relative;
  min-height: 14rem;
  border: 1px solid #e9ecef;
  border-radius: 0.375rem;
  overflow: hidden;
  background: #fff;
}

.crud-skeleton__table-wrap table {
  margin-bottom: 0;
}

.crud-skeleton__table-wrap th,
.crud-skeleton__table-wrap td {
  vertical-align: middle;
}

.crud-skeleton__overlay {
  position: absolute;
  inset: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background: rgba(255, 255, 255, 0.72);
  backdrop-filter: blur(1px);
  z-index: 2;
}

.crud-skeleton__message {
  margin: 0.75rem 0 0;
  color: #495057;
  font-size: 0.9rem;
}

.crud-skeleton__paginator {
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 1rem;
  margin-top: 1rem;
}
</style>
