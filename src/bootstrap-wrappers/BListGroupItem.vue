<template>
  <component
    :is="tag"
    :class="itemClasses"
    :active="active"
    :disabled="disabled"
    :href="href"
    :to="to"
    @click="$emit('click', $event)"
  >
    <slot></slot>
  </component>
</template>

<script>
export default {
  name: 'BListGroupItem',
  props: {
    tag: {
      type: String,
      default: 'li'
    },
    active: {
      type: Boolean,
      default: false
    },
    disabled: {
      type: Boolean,
      default: false
    },
    href: {
      type: String,
      default: null
    },
    to: {
      type: [String, Object],
      default: null
    },
    variant: {
      type: String,
      default: null,
      validator: (value) => !value || [
        'primary', 'secondary', 'success', 'danger', 'warning', 'info',
        'light', 'dark'
      ].includes(value)
    },
    action: {
      type: Boolean,
      default: false
    }
  },
  computed: {
    itemClasses() {
      const classes = ['list-group-item'];
      
      if (this.active) {
        classes.push('active');
      }
      
      if (this.disabled) {
        classes.push('disabled');
      }
      
      if (this.variant) {
        classes.push(`list-group-item-${this.variant}`);
      }
      
      if (this.action || this.href || this.to) {
        classes.push('list-group-item-action');
      }
      
      return classes.join(' ');
    }
  }
};
</script>
