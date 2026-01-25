<template>
  <div :class="headerClasses">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: 'BCardHeader',
  props: {
    headerTag: {
      type: String,
      default: 'div'
    }
  },
  computed: {
    headerClasses() {
      return ['card-header'];
    }
  }
};
</script>
