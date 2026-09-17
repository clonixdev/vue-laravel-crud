<template>
  <div v-if="visible" :class="alertClasses" role="alert">
    <slot></slot>
    <button
      v-if="dismissible"
      type="button"
      class="btn-close"
      :aria-label="dismissLabel"
      @click="dismiss"
    ></button>
  </div>
</template>

<script>
export default {
  name: 'BAlert',
  emits: ['dismissed', 'update:show'],
  props: {
    variant: {
      type: String,
      default: 'info'
    },
    show: {
      type: Boolean,
      default: false
    },
    dismissible: {
      type: Boolean,
      default: false
    },
    dismissLabel: {
      type: String,
      default: 'Cerrar'
    },
    fade: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {
      visible: this.show
    };
  },
  computed: {
    alertClasses() {
      const classes = ['alert', `alert-${this.variant}`];
      if (this.dismissible) {
        classes.push('alert-dismissible');
      }
      if (this.fade) {
        classes.push('fade', 'show');
      }
      return classes.join(' ');
    }
  },
  watch: {
    show(value) {
      this.visible = value;
    }
  },
  methods: {
    dismiss() {
      this.visible = false;
      this.$emit('update:show', false);
      this.$emit('dismissed');
    }
  }
};
</script>
