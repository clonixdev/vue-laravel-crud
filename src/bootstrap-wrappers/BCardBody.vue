<template>
  <div :class="bodyClasses">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: 'BCardBody',
  computed: {
    bodyClasses() {
      return ['card-body'];
    }
  }
};
</script>
