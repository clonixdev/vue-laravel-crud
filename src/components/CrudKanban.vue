<template>
  <div v-if="currentDisplayMode == displayModes.MODE_KANBAN">
    <KanbanBoard>
      <template v-for="(slot, name) in $scopedSlots" v-slot:[name]="slotProps">
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
  inject: [
    'displayMode',
    'displayModes'
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
    }
  }
};
</script>
