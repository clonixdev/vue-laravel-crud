<template>
  <i :class="iconClasses" :aria-label="ariaLabel"></i>
</template>

<script>
export default {
  name: 'BIcon',
  props: {
    icon: {
      type: String,
      required: true
    },
    variant: {
      type: String,
      default: null
    },
    scale: {
      type: [String, Number],
      default: 1
    },
    rotate: {
      type: [String, Number],
      default: 0
    },
    flipH: {
      type: Boolean,
      default: false
    },
    flipV: {
      type: Boolean,
      default: false
    },
    animation: {
      type: String,
      default: null,
      validator: (value) => !value || ['spin', 'pulse'].includes(value)
    },
    ariaLabel: {
      type: String,
      default: null
    }
  },
  computed: {
    iconClasses() {
      const classes = ['bi'];
      
      // Mapear iconos de BootstrapVue a Bootstrap Icons
      const iconMap = {
        'eye': 'eye',
        'pencil': 'pencil',
        'trash': 'trash',
        'plus': 'plus',
        'search': 'search',
        'arrow-clockwise': 'arrow-clockwise',
        'card-list': 'grid-3x3-gap',
        'table': 'table',
        'cloud-upload': 'cloud-upload',
        'cloud-download': 'cloud-download',
        'sort-numeric-down': 'sort-numeric-down',
        'sort-numeric-up': 'sort-numeric-up',
        'check-circle': 'check-circle',
        'check': 'check',
        'x-circle': 'x-circle',
        'github': 'github',
        'grid-3x3-gap': 'grid-3x3-gap',
        'file-text': 'file-text',
        'list': 'list',
        'sort-up': 'arrow-up',
        'sort-down': 'arrow-down',
        'clipboard': 'clipboard',
        'clipboard-check': 'clipboard-check'
      };
      
      const iconName = iconMap[this.icon] || this.icon;
      classes.push(`bi-${iconName}`);
      
      if (this.animation) {
        classes.push(`bi-${this.animation}`);
      }
      
      if (this.variant) {
        classes.push(`text-${this.variant}`);
      }
      
      return classes.join(' ');
    }
  }
};
</script>

