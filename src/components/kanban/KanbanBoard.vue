<template>
  <div class="kanban-board">
    <div v-for="(column, colIndex) in items" :key="colIndex" class="kanban-column">
      <KanbanColumn 
        :column="column" 
        :colIndex="colIndex"
        :groupedAttribute="groupedAttribute"
        :columns="columns"
        :itemValue="itemValue"
        :getStateValue="getStateValue"
        :getStateOptions="getStateOptions"
        :getStateBadgeVariant="getStateBadgeVariant"
        :getArrayValue="getArrayValue"
        :showItem="showItem"
        :updateItem="updateItem"
        :removeItem="removeItem"
        :cardClass="cardClass"
        :cardHideFooter="cardHideFooter"
        @draggableChange="onDraggableChange"
      >
        <template v-for="(slot, name) in $scopedSlots" v-slot:[name]="slotProps">
          <slot :name="name" v-bind="slotProps" />
        </template>
      </KanbanColumn>
    </div>
  </div>
</template>

<script>
import KanbanColumn from './KanbanColumn.vue';

export default {
  name: 'KanbanBoard',
  components: {
    KanbanColumn
  },
  inject: [
    'items',
    'groupedAttribute',
    'columns',
    'itemValue',
    'getStateValue',
    'getStateOptions',
    'getStateBadgeVariant',
    'getArrayValue',
    'showItem',
    'updateItem',
    'removeItem',
    'cardClass',
    'cardHideFooter',
    'onDraggableChange'
  ]
};
</script>

<style scoped>
.kanban-board {
  display: flex;
  gap: 1rem;
  overflow-x: auto;
  padding: 1rem;
}

.kanban-column {
  background: #f4f5f7;
  border-radius: 8px;
  width: 300px;
  display: flex;
  flex-direction: column;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  min-width: 300px;
}
</style>
