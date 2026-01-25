<template>
  <p :class="textClasses">
    <slot></slot>
  </p>
</template>

<script>
export default {
  name: 'BCardText',
  computed: {
    textClasses() {
      return ['card-text'];
    }
  }
};
</script>
