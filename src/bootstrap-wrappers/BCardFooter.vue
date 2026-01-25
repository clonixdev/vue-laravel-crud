<template>
  <div :class="footerClasses">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: 'BCardFooter',
  computed: {
    footerClasses() {
      return ['card-footer'];
    }
  }
};
</script>
