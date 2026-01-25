<template>
  <div :class="rowClasses">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: 'BRow',
  props: {
    noGutters: {
      type: Boolean,
      default: false
    },
    alignV: {
      type: String,
      default: null,
      validator: (value) => !value || ['start', 'center', 'end', 'baseline', 'stretch'].includes(value)
    },
    alignH: {
      type: String,
      default: null,
      validator: (value) => !value || ['start', 'center', 'end', 'around', 'between'].includes(value)
    }
  },
  computed: {
    rowClasses() {
      const classes = ['row'];
      
      if (this.noGutters) {
        classes.push('g-0');
      }
      
      if (this.alignV) {
        classes.push(`align-items-${this.alignV}`);
      }
      
      if (this.alignH) {
        const map = {
          'start': 'justify-content-start',
          'center': 'justify-content-center',
          'end': 'justify-content-end',
          'around': 'justify-content-around',
          'between': 'justify-content-between'
        };
        classes.push(map[this.alignH]);
      }
      
      return classes.join(' ');
    }
  }
};
</script>
