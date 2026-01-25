<template>
  <span :class="badgeClasses">
    <slot></slot>
  </span>
</template>

<script>
export default {
  name: 'BBadge',
  props: {
    variant: {
      type: String,
      default: 'primary',
      validator: (value) => [
        'primary', 'secondary', 'success', 'danger', 'warning', 'info',
        'light', 'dark'
      ].includes(value)
    },
    pill: {
      type: Boolean,
      default: false
    }
  },
  computed: {
    badgeClasses() {
      const classes = ['badge'];
      // Bootstrap 4 usa badge-*, Bootstrap 5 usa bg-*
      // Usar ambas para compatibilidad
      classes.push(`badge-${this.variant}`);
      classes.push(`bg-${this.variant}`);
      
      if (this.pill) {
        classes.push('rounded-pill');
      }
      
      return classes.join(' ');
    }
  }
};
</script>
