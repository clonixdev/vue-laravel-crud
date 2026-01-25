<template>
  <button
    :type="type"
    :class="buttonClasses"
    :disabled="disabled"
    @click="$emit('click', $event)"
  >
    <slot></slot>
  </button>
</template>

<script>
export default {
  name: 'BButton',
  props: {
    variant: {
      type: String,
      default: 'primary',
      validator: (value) => [
        'primary', 'secondary', 'success', 'danger', 'warning', 'info',
        'light', 'dark', 'outline-primary', 'outline-secondary', 'outline-success',
        'outline-danger', 'outline-warning', 'outline-info', 'outline-light', 'outline-dark'
      ].includes(value)
    },
    size: {
      type: String,
      default: null,
      validator: (value) => !value || ['sm', 'lg'].includes(value)
    },
    type: {
      type: String,
      default: 'button'
    },
    disabled: {
      type: Boolean,
      default: false
    },
    block: {
      type: Boolean,
      default: false
    },
    pill: {
      type: Boolean,
      default: false
    },
    squared: {
      type: Boolean,
      default: false
    }
  },
  computed: {
    buttonClasses() {
      const classes = ['btn'];
      
      // Variant
      if (this.variant.startsWith('outline-')) {
        classes.push(`btn-outline-${this.variant.replace('outline-', '')}`);
      } else {
        classes.push(`btn-${this.variant}`);
      }
      
      // Size
      if (this.size) {
        classes.push(`btn-${this.size}`);
      }
      
      // Block
      if (this.block) {
        // Bootstrap 4 usa btn-block, Bootstrap 5 usa w-100
        // Usar ambas para compatibilidad
        classes.push('btn-block');
        classes.push('w-100');
      }
      
      // Pill
      if (this.pill) {
        // Bootstrap 4 usa rounded-pill, Bootstrap 5 también
        classes.push('rounded-pill');
      }
      
      // Squared
      if (this.squared) {
        classes.push('rounded-0');
      }
      
      return classes.join(' ');
    }
  }
};
</script>
