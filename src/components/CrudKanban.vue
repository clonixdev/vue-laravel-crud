<template>
  <div v-if="currentDisplayMode == displayModes.MODE_KANBAN">
    <KanbanBoard>
      <template v-for="(_, name) in $slots" v-slot:[name]="slotProps">
        <slot :name="name" v-bind="slotProps" />
      </template>
    </KanbanBoard>
  </div>
</template>

<script>
import KanbanBoard from './kanban/KanbanBoard.vue';

export default {
  name: 'CrudKanban',
  components: {
    KanbanBoard
  },
  inject: {
    displayMode: { default: null },
    getDisplayMode: { default: null },
    displayModes: { default: () => ({ MODE_TABLE: 1, MODE_CARDS: 2, MODE_KANBAN: 3, MODE_CUSTOM: 4 }) },
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
    }
  }
};
</script>
