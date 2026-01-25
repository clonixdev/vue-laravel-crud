<template>
  <div :class="colClasses">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: 'BCol',
  props: {
    cols: {
      type: [String, Number],
      default: null
    },
    sm: {
      type: [String, Number],
      default: null
    },
    md: {
      type: [String, Number],
      default: null
    },
    lg: {
      type: [String, Number],
      default: null
    },
    xl: {
      type: [String, Number],
      default: null
    },
    xxl: {
      type: [String, Number],
      default: null
    },
    offset: {
      type: [String, Number],
      default: null
    },
    offsetSm: {
      type: [String, Number],
      default: null
    },
    offsetMd: {
      type: [String, Number],
      default: null
    },
    offsetLg: {
      type: [String, Number],
      default: null
    },
    offsetXl: {
      type: [String, Number],
      default: null
    },
    order: {
      type: [String, Number],
      default: null
    },
    alignSelf: {
      type: String,
      default: null,
      validator: (value) => !value || ['auto', 'start', 'end', 'center', 'baseline', 'stretch'].includes(value)
    }
  },
  computed: {
    colClasses() {
      const classes = [];
      
      // Base column
      if (this.cols !== null) {
        classes.push(`col-${this.cols}`);
      } else {
        classes.push('col');
      }
      
      // Responsive columns
      if (this.sm !== null) classes.push(`col-sm-${this.sm}`);
      if (this.md !== null) classes.push(`col-md-${this.md}`);
      if (this.lg !== null) classes.push(`col-lg-${this.lg}`);
      if (this.xl !== null) classes.push(`col-xl-${this.xl}`);
      if (this.xxl !== null) classes.push(`col-xxl-${this.xxl}`);
      
      // Offsets
      if (this.offset !== null) classes.push(`offset-${this.offset}`);
      if (this.offsetSm !== null) classes.push(`offset-sm-${this.offsetSm}`);
      if (this.offsetMd !== null) classes.push(`offset-md-${this.offsetMd}`);
      if (this.offsetLg !== null) classes.push(`offset-lg-${this.offsetLg}`);
      if (this.offsetXl !== null) classes.push(`offset-xl-${this.offsetXl}`);
      
      // Order
      if (this.order !== null) classes.push(`order-${this.order}`);
      
      // Align self
      if (this.alignSelf) {
        classes.push(`align-self-${this.alignSelf}`);
      }
      
      return classes.join(' ');
    }
  }
};
</script>
