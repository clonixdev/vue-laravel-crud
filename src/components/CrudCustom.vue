<template>
  <div v-if="displayMode == displayModes.MODE_CUSTOM">
    <div :class="listContainerClass">
      <p v-if="!loading && itemsList && itemsList.length == 0 && !infiniteScroll" class="p-3">
        {{ messageEmptyResults }}
      </p>
      <div :class="listItemClass" v-for="(item, index) in itemsList" v-bind:key="index">
        <slot name="card" v-bind:item="item"> </slot>
      </div>
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
    'items',
    'infiniteScroll',
    'messageEmptyResults',
    'itemsList'
  ]
};
</script>
