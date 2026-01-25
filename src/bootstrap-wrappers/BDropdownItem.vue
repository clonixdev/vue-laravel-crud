<template>
  <li>
    <a
      v-if="!button"
      :class="itemClasses"
      :href="href || '#'"
      :disabled="disabled"
      @click="handleClick"
    >
      <slot></slot>
    </a>
    <button
      v-else
      :class="itemClasses"
      type="button"
      :disabled="disabled"
      @click="handleClick"
    >
      <slot></slot>
    </button>
  </li>
</template>

<script>
export default {
  name: 'BDropdownItem',
  props: {
    href: {
      type: String,
      default: '#'
    },
    button: {
      type: Boolean,
      default: false
    },
    disabled: {
      type: Boolean,
      default: false
    },
    active: {
      type: Boolean,
      default: false
    }
  },
  computed: {
    itemClasses() {
      const classes = ['dropdown-item'];
      
      if (this.disabled) {
        classes.push('disabled');
      }
      
      if (this.active) {
        classes.push('active');
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
