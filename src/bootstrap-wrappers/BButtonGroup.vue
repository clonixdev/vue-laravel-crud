<template>
  <div :class="groupClasses" :role="role">
    <slot></slot>
  </div>
</template>

<style>
/* Asegurar que todos los botones en el grupo tengan el mismo tamaño */
.btn-group > .btn,
.btn-group-vertical > .btn {
  flex: 0 0 auto;
}
</style>

<style scoped>
/* Asegurar que todos los botones en el grupo tengan el mismo tamaño */
::v-deep .btn-group > .btn,
::v-deep .btn-group-vertical > .btn {
  flex: 0 0 auto;
  width: auto;
}
</style>

<script>
export default {
  name: 'BButtonGroup',
  props: {
    size: {
      type: String,
      default: null,
      validator: (value) => !value || ['sm', 'lg'].includes(value)
    },
    vertical: {
      type: Boolean,
      default: false
    },
    role: {
      type: String,
      default: 'group'
    }
  },
  computed: {
    groupClasses() {
      const classes = ['btn-group'];
      
      if (this.vertical) {
        classes.push('btn-group-vertical');
      }
      
      if (this.size) {
        classes.push(`btn-group-${this.size}`);
      }
      
      return classes.join(' ');
    }
  }
};
</script>
