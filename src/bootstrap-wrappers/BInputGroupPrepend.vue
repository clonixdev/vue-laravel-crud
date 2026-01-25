<template>
  <span :class="prependClasses">
    <slot></slot>
  </span>
</template>

<script>
export default {
  name: 'BInputGroupPrepend',
  computed: {
    prependClasses() {
      return ['input-group-text'];
    }
  }
};
</script>
