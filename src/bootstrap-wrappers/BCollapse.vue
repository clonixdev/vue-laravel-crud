<template>
  <div :id="id" :class="collapseClasses">
    <slot></slot>
  </div>
</template>

<script>
/**
 * Compatibilidad bootstrap-vue <b-collapse> sobre Bootstrap Collapse.
 */
export default {
  name: 'BCollapse',
  emits: ['update:modelValue', 'update:visible', 'show', 'shown', 'hide', 'hidden'],
  props: {
    id: {
      type: String,
      default: null,
    },
    modelValue: {
      type: Boolean,
      default: undefined,
    },
    visible: {
      type: Boolean,
      default: false,
    },
    accordion: {
      type: String,
      default: null,
    },
    tag: {
      type: String,
      default: 'div',
    },
  },
  data() {
    return {
      isShown: false,
      collapseInstance: null,
      boundOnShown: null,
      boundOnHidden: null,
      autoId: `b-collapse-${Math.random().toString(36).slice(2, 9)}`,
    };
  },
  computed: {
    collapseId() {
      return this.id || this.autoId;
    },
    propVisible() {
      if (this.modelValue !== undefined) {
        return !!this.modelValue;
      }
      return !!this.visible;
    },
    isBootstrap5() {
      return typeof window !== 'undefined' && !!(window.bootstrap && window.bootstrap.Collapse);
    },
    collapseClasses() {
      const classes = ['collapse'];
      if (this.isShown || this.propVisible) {
        classes.push('show');
      }
      return classes.join(' ');
    },
  },
  watch: {
    propVisible(newVal) {
      if (newVal === this.isShown) {
        return;
      }
      if (newVal) {
        this.show();
      } else {
        this.hide();
      }
    },
  },
  mounted() {
    this.isShown = this.propVisible;

    this.boundOnShown = () => {
      this.isShown = true;
      this.$emit('show');
      this.$emit('shown');
      this.$emit('update:modelValue', true);
      this.$emit('update:visible', true);
    };
    this.boundOnHidden = () => {
      this.isShown = false;
      this.$emit('hide');
      this.$emit('hidden');
      this.$emit('update:modelValue', false);
      this.$emit('update:visible', false);
    };

    const el = this.$el;
    if (el && this.isBootstrap5) {
      if (this.id) {
        el.id = this.id;
      }
      el.addEventListener('shown.bs.collapse', this.boundOnShown);
      el.addEventListener('hidden.bs.collapse', this.boundOnHidden);
    }

    if (this.propVisible) {
      this.$nextTick(() => this.show());
    }
  },
  beforeUnmount() {
    const el = this.$el;
    if (el && this.isBootstrap5) {
      el.removeEventListener('shown.bs.collapse', this.boundOnShown);
      el.removeEventListener('hidden.bs.collapse', this.boundOnHidden);
    }
    if (this.collapseInstance && typeof this.collapseInstance.dispose === 'function') {
      this.collapseInstance.dispose();
    }
  },
  methods: {
    show() {
      const el = this.$el;
      if (!el) {
        return;
      }

      if (this.isBootstrap5) {
        if (!this.collapseInstance) {
          const Collapse = window.bootstrap.Collapse;
          this.collapseInstance =
            typeof Collapse.getOrCreateInstance === 'function'
              ? Collapse.getOrCreateInstance(el, { toggle: false })
              : new Collapse(el, { toggle: false });
        }
        this.collapseInstance.show();
        return;
      }

      this.isShown = true;
      this.$emit('update:modelValue', true);
      this.$emit('update:visible', true);
    },
    hide() {
      const el = this.$el;
      if (!el) {
        return;
      }

      if (this.isBootstrap5) {
        if (!this.collapseInstance && window.bootstrap?.Collapse) {
          this.collapseInstance =
            window.bootstrap.Collapse.getInstance(el) ||
            (typeof window.bootstrap.Collapse.getOrCreateInstance === 'function'
              ? window.bootstrap.Collapse.getOrCreateInstance(el, { toggle: false })
              : new window.bootstrap.Collapse(el, { toggle: false }));
        }
        if (this.collapseInstance) {
          this.collapseInstance.hide();
        }
        return;
      }

      this.isShown = false;
      this.$emit('update:modelValue', false);
      this.$emit('update:visible', false);
    },
    toggle() {
      if (this.isShown) {
        this.hide();
      } else {
        this.show();
      }
    },
  },
};
</script>
