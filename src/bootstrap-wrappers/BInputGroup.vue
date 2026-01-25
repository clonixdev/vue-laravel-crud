<template>
  <div :class="inputGroupClasses" :size="size">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: 'BInputGroup',
  props: {
    size: {
      type: String,
      default: null,
      validator: (value) => !value || ['sm', 'lg'].includes(value)
    },
    prepend: {
      type: String,
      default: null
    },
    append: {
      type: String,
      default: null
    }
  },
  computed: {
    inputGroupClasses() {
      const classes = ['input-group'];
      
      if (this.size) {
        classes.push(`input-group-${this.size}`);
      }
      
      return classes.join(' ');
    }
  }
};
</script>
