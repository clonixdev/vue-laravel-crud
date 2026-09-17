<template>
  <form :class="formClasses" :novalidate="novalidate" @submit="handleSubmit">
    <slot></slot>
  </form>
</template>

<script>
export default {
  name: 'BForm',
  emits: ['submit'],
  props: {
    inline: {
      type: Boolean,
      default: false
    },
    novalidate: {
      type: Boolean,
      default: false
    },
    validated: {
      type: Boolean,
      default: false
    }
  },
  computed: {
    formClasses() {
      const classes = [];
      if (this.inline) {
        classes.push('form-inline');
      }
      if (this.validated) {
        classes.push('was-validated');
      }
      return classes.join(' ');
    }
  },
  methods: {
    handleSubmit(event) {
      this.$emit('submit', event);
    }
  }
};
</script>
