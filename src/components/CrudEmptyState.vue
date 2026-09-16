<template>
  <div class="crud-empty-state">
    <div class="crud-empty-state__icon" aria-hidden="true">
      <i :class="iconClass"></i>
    </div>
    <p class="crud-empty-state__message">{{ message }}</p>
    <div v-if="$slots.default" class="crud-empty-state__actions">
      <slot></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: 'CrudEmptyState',
  props: {
    message: {
      type: String,
      default: 'No hay resultados',
    },
    icon: {
      type: String,
      default: 'inbox',
    },
  },
  computed: {
    iconClass() {
      return `bi bi-${this.icon}`;
    },
  },
};
</script>

<style scoped>
.crud-empty-state {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  padding: 2.5rem 1.5rem;
  color: #6c757d;
}

.crud-empty-state__icon {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 3.5rem;
  height: 3.5rem;
  margin-bottom: 0.75rem;
  border-radius: 50%;
  background: #f1f3f5;
  color: #868e96;
  font-size: 1.5rem;
}

.crud-empty-state__message {
  margin: 0;
  max-width: 28rem;
  font-size: 0.95rem;
  line-height: 1.5;
}

.crud-empty-state__actions {
  margin-top: 1rem;
}
</style>
