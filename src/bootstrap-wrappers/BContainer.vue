<template>
  <div :class="containerClasses">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: 'BContainer',
  props: {
    fluid: {
      type: Boolean,
      default: false
    },
    fluidSm: {
      type: Boolean,
      default: false
    },
    fluidMd: {
      type: Boolean,
      default: false
    },
    fluidLg: {
      type: Boolean,
      default: false
    },
    fluidXl: {
      type: Boolean,
      default: false
    }
  },
  computed: {
    containerClasses() {
      const classes = [];
      
      if (this.fluid) {
        classes.push('container-fluid');
      } else if (this.fluidSm) {
        classes.push('container-sm');
      } else if (this.fluidMd) {
        classes.push('container-md');
      } else if (this.fluidLg) {
        classes.push('container-lg');
      } else if (this.fluidXl) {
        classes.push('container-xl');
      } else {
        classes.push('container');
      }
      
      return classes.join(' ');
    }
  }
};
</script>
