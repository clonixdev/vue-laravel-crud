<template>
  <component :is="tag" :class="listGroupClasses">
    <slot></slot>
  </component>
</template>

<script>
export default {
  name: 'BListGroup',
  props: {
    tag: {
      type: String,
      default: 'ul'
    },
    flush: {
      type: Boolean,
      default: false
    },
    horizontal: {
      type: [Boolean, String],
      default: false
    }
  },
  computed: {
    listGroupClasses() {
      const classes = ['list-group'];
      
      if (this.flush) {
        classes.push('list-group-flush');
      }
      
      if (this.horizontal) {
        if (this.horizontal === true) {
          classes.push('list-group-horizontal');
        } else {
          classes.push(`list-group-horizontal-${this.horizontal}`);
        }
      }
      
      return classes.join(' ');
    }
  }
};
</script>
