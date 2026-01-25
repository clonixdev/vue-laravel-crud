<template>
  <div :class="dropdownClasses">
    <button
      v-if="!split"
      :class="buttonClasses"
      type="button"
      :id="toggleId"
      :disabled="disabled"
      @click="toggle"
    >
      {{ text }}
      <slot name="button-content"></slot>
    </button>
    <div
      v-if="split"
      class="btn-group"
    >
      <button
        :class="buttonClasses"
        type="button"
        :disabled="disabled"
        @click="$emit('click', $event)"
      >
        {{ text }}
      </button>
      <button
        :class="['btn', `btn-${variant}`, 'dropdown-toggle', 'dropdown-toggle-split']"
        type="button"
        :id="toggleId"
        :disabled="disabled"
        @click="toggle"
      >
        <span class="visually-hidden">Toggle Dropdown</span>
      </button>
    </div>
    <ul
      :class="menuClasses"
      :aria-labelledby="toggleId"
    >
      <slot></slot>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'BDropdown',
  props: {
    id: {
      type: String,
      default: null
    },
    text: {
      type: String,
      default: ''
    },
    variant: {
      type: String,
      default: 'secondary'
    },
    size: {
      type: String,
      default: null,
      validator: (value) => !value || ['sm', 'lg'].includes(value)
    },
    split: {
      type: Boolean,
      default: false
    },
    disabled: {
      type: Boolean,
      default: false
    },
    dropup: {
      type: Boolean,
      default: false
    },
    dropright: {
      type: Boolean,
      default: false
    },
    dropleft: {
      type: Boolean,
      default: false
    },
    right: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {
      isOpen: false,
      dropdownInstance: null
    };
  },
  computed: {
    toggleId() {
      return this.id || `dropdown-${this._uid}`;
    },
    dropdownClasses() {
      const classes = ['dropdown'];
      
      if (this.dropup) {
        classes.push('dropup');
      }
      if (this.dropright) {
        classes.push('dropend');
      }
      if (this.dropleft) {
        classes.push('dropstart');
      }
      
      return classes.join(' ');
    },
    buttonClasses() {
      const classes = ['btn', `btn-${this.variant}`, 'dropdown-toggle'];
      
      if (this.size) {
        classes.push(`btn-${this.size}`);
      }
      
      return classes.join(' ');
    },
    menuClasses() {
      const classes = ['dropdown-menu'];
      
      if (this.isOpen) {
        classes.push('show');
      }
      
      if (this.right) {
        // Bootstrap 4 usa dropdown-menu-right, Bootstrap 5 usa dropdown-menu-end
        classes.push('dropdown-menu-right');
        classes.push('dropdown-menu-end');
      }
      
      return classes.join(' ');
    }
  },
  mounted() {
    // Bootstrap 5 usa window.bootstrap, Bootstrap 4 usa jQuery
    if (typeof window !== 'undefined') {
      const toggleEl = document.getElementById(this.toggleId);
      if (toggleEl) {
        if (window.bootstrap && window.bootstrap.Dropdown) {
          // Bootstrap 5
          this.dropdownInstance = new window.bootstrap.Dropdown(toggleEl);
        } else if (window.$ && window.$(toggleEl)) {
          // Bootstrap 4 con jQuery - inicializar manualmente
          // Los dropdowns de BS4 se inicializan automáticamente con data-toggle
          toggleEl.setAttribute('data-toggle', 'dropdown');
        }
      }
    }
  },
  beforeDestroy() {
    if (this.dropdownInstance) {
      this.dropdownInstance.dispose();
    }
  },
  methods: {
    toggle() {
      const toggleEl = document.getElementById(this.toggleId);
      if (this.dropdownInstance) {
        // Bootstrap 5
        this.dropdownInstance.toggle();
        this.isOpen = !this.isOpen;
      } else if (window.$ && window.$(toggleEl)) {
        // Bootstrap 4 con jQuery
        window.$(toggleEl).dropdown('toggle');
        this.isOpen = !this.isOpen;
      } else {
        // Fallback manual
        this.isOpen = !this.isOpen;
      }
      this.$emit('toggle', this.isOpen);
    },
    show() {
      if (this.dropdownInstance) {
        this.dropdownInstance.show();
      }
      this.isOpen = true;
    },
    hide() {
      if (this.dropdownInstance) {
        this.dropdownInstance.hide();
      }
      this.isOpen = false;
    }
  }
};
</script>
