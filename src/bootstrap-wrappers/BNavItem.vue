<template>
  <li class="nav-item">
    <a :class="itemClasses" :href="href" @click="handleClick">
      <slot></slot>
    </a>
  </li>
</template>

<script>
export default {
  name: 'BNavItem',
  props: {
    href: {
      type: String,
      default: '#'
    },
    active: {
      type: Boolean,
      default: false
    },
    disabled: {
      type: Boolean,
      default: false
    }
  },
  computed: {
    itemClasses() {
      const classes = ['nav-link'];
      
      if (this.active) {
        classes.push('active');
      }
      
      if (this.disabled) {
        classes.push('disabled');
      }
      
      return classes.join(' ');
    }
  },
  methods: {
    handleClick(event) {
      if (this.disabled) {
        event.preventDefault();
        return;
      }
      this.$emit('click', event);
    }
  }
};
</script>
