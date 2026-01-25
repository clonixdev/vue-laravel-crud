<template>
  <nav :class="navbarClasses" :role="role">
    <slot></slot>
  </nav>
</template>

<script>
export default {
  name: 'BNavbar',
  props: {
    type: {
      type: String,
      default: 'light',
      validator: (value) => ['light', 'dark'].includes(value)
    },
    variant: {
      type: String,
      default: null,
      validator: (value) => !value || [
        'primary', 'secondary', 'success', 'danger', 'warning', 'info',
        'light', 'dark'
      ].includes(value)
    },
    toggleable: {
      type: [Boolean, String],
      default: false
    },
    fixed: {
      type: String,
      default: null,
      validator: (value) => !value || ['top', 'bottom'].includes(value)
    },
    sticky: {
      type: String,
      default: null,
      validator: (value) => !value || ['top', 'bottom'].includes(value)
    },
    role: {
      type: String,
      default: 'navigation'
    }
  },
  computed: {
    navbarClasses() {
      const classes = ['navbar'];
      
      // Bootstrap 4 usa navbar-dark/navbar-light, Bootstrap 5 usa bg-* con data-bs-theme
      // Usar ambas para compatibilidad
      if (this.variant) {
        classes.push(`bg-${this.variant}`);
        // También agregar navbar-dark si variant es dark
        if (this.type === 'dark' || this.variant === 'dark') {
          classes.push('navbar-dark');
        } else {
          classes.push('navbar-light');
        }
      } else {
        classes.push(`navbar-${this.type}`);
      }
      
      if (this.toggleable) {
        const breakpoint = this.toggleable === true ? 'lg' : this.toggleable;
        classes.push(`navbar-expand-${breakpoint}`);
      } else {
        classes.push('navbar-expand');
      }
      
      if (this.fixed) {
        classes.push(`fixed-${this.fixed}`);
      }
      
      if (this.sticky) {
        classes.push(`sticky-${this.sticky}`);
      }
      
      return classes.join(' ');
    }
  }
};
</script>
