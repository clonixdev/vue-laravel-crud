<template>
  <div v-if="displayMode == displayModes.MODE_KANBAN">
    <KanbanBoard />
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
  ]
};
</script>
