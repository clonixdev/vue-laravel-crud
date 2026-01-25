<template>
  <div
    v-if="!tag || tag === 'div'"
    :class="spinnerClasses"
    :role="role"
    :aria-label="label"
  >
    <span v-if="label" class="sr-only visually-hidden">{{ label }}</span>
  </div>
  <span
    v-else
    :class="spinnerClasses"
    :role="role"
    :aria-label="label"
  >
    <span v-if="label" class="sr-only visually-hidden">{{ label }}</span>
  </span>
</template>

<script>
export default {
  name: 'BSpinner',
  props: {
    variant: {
      type: String,
      default: 'primary',
      validator: (value) => [
        'primary', 'secondary', 'success', 'danger', 'warning', 'info',
        'light', 'dark'
      ].includes(value)
    },
    type: {
      type: String,
      default: 'border',
      validator: (value) => ['border', 'grow'].includes(value)
    },
    small: {
      type: Boolean,
      default: false
    },
    label: {
      type: String,
      default: null
    },
    tag: {
      type: String,
      default: 'div'
    },
    role: {
      type: String,
      default: 'status'
    }
  },
  computed: {
    spinnerClasses() {
      const classes = [];
      
      if (this.type === 'border') {
        // Bootstrap 4 usa spinner-border, Bootstrap 5 también
        classes.push('spinner-border');
      } else {
        // Bootstrap 4 no tiene spinner-grow, pero Bootstrap 5 sí
        // Usar spinner-border como fallback para BS4
        classes.push('spinner-grow');
      }
      
      classes.push(`text-${this.variant}`);
      
      if (this.small) {
        if (this.type === 'border') {
          classes.push('spinner-border-sm');
        } else if (this.type === 'grow') {
          classes.push('spinner-grow-sm');
        }
      }
      
      return classes.join(' ');
    }
  }
};
</script>
