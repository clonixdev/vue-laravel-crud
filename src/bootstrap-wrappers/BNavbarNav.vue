<template>
  <ul :class="navClasses">
    <slot></slot>
  </ul>
</template>

<script>
export default {
  name: 'BNavbarNav',
  computed: {
    navClasses() {
      return ['navbar-nav'];
    }
  }
};
</script>
