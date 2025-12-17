<template>
  <div class="kanban-column">
    <div class="kanban-column-header">
      <div class="d-flex justify-content-between align-items-center">
        <span>{{ column.groupLabel }}</span>
        <b-badge variant="secondary">{{ column.items.length }}</b-badge>
      </div>
    </div>

    <draggable 
      v-model="column.items" 
      group="kanban" 
      class="kanban-column-body" 
      @end="onDragEnd"
      :data-column="column.groupKey"
    >
      <div v-for="(item, itemIndex) in column.items" v-bind:key="itemIndex" class="item">
        <slot name="card" v-bind:item="item">
          <KanbanCard 
            :key="itemIndex" 
            :item="item" 
            :columns="columns" 
            :index="itemIndex"
            :cardClass="cardClass" 
            :cardHideFooter="cardHideFooter" 
            :itemValue="itemValue"
            :getStateValue="getStateValue" 
            :getArrayValue="getArrayValue" 
            :showItem="showItem"
            :updateItem="updateItem" 
            :removeItem="removeItem" 
          />
        </slot>
      </div>
    </draggable>
  </div>
</template>

<script>
import draggable from "vuedraggable";
import KanbanCard from './KanbanCard.vue';

export default {
  name: 'KanbanColumn',
  components: {
    draggable,
    KanbanCard
  },
  props: {
    column: Object,
    colIndex: Number,
    groupedAttribute: String,
    columns: Array,
    itemValue: Function,
    getStateValue: Function,
    getArrayValue: Function,
    showItem: Function,
    updateItem: Function,
    removeItem: Function,
    cardClass: String,
    cardHideFooter: Boolean
  },
  methods: {
    onDragEnd(event) {
      // Handle drag end for Kanban
      if (event.added || event.moved) {
        const item = event.item.__vue__.$parent.item || event.item.__vue__.item;
        const newColumn = event.to.parentElement.getAttribute('data-column');
        
        if (item && newColumn) {
          // Update the item's grouped attribute
          item[this.groupedAttribute] = newColumn;
          
          // Emit the change event
          this.$emit('draggableChange', event);
        }
      }
    }
  }
};
</script>

<style scoped>
.kanban-column {
  background: #f4f5f7;
  border-radius: 8px;
  width: 300px;
  display: flex;
  flex-direction: column;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

.kanban-column-header {
  font-weight: bold;
  padding: 0.5rem;
  background: #dfe1e6;
  border-radius: 8px 8px 0 0;
  text-align: center;
}

.kanban-column-body {
  padding: 0.5rem;
  min-height: 100px;
  background: #ffffff;
  border-radius: 0 0 8px 8px;
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
}
</style>
