<template>
  <a :class="brandClasses" :href="href">
    <slot></slot>
  </a>
</template>

<script>
export default {
  name: 'BNavbarBrand',
  props: {
    href: {
      type: String,
      default: '#'
    }
  },
  computed: {
    brandClasses() {
      return ['navbar-brand'];
    }
  }
};
</script>
