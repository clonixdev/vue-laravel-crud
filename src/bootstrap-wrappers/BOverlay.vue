<template>
  <div :class="overlayClasses" :style="overlayStyles">
    <div v-if="show" class="overlay-backdrop" :class="{ 'show': show }"></div>
    <div :class="wrapperClasses">
      <slot></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: 'BOverlay',
  props: {
    show: {
      type: Boolean,
      default: false
    },
    rounded: {
      type: [Boolean, String],
      default: false
    },
    opacity: {
      type: Number,
      default: 0.85
    },
    blur: {
      type: String,
      default: '2px'
    },
    zIndex: {
      type: Number,
      default: 10
    }
  },
  computed: {
    overlayClasses() {
      const classes = ['position-relative'];
      
      if (this.rounded) {
        if (this.rounded === true) {
          classes.push('rounded');
        } else {
          classes.push(`rounded-${this.rounded}`);
        }
      }
      
      return classes.join(' ');
    },
    wrapperClasses() {
      return this.show ? 'overlay-wrapper' : '';
    },
    overlayStyles() {
      return {
        '--bs-overlay-opacity': this.opacity,
        '--bs-overlay-blur': this.blur,
        '--bs-overlay-z-index': this.zIndex
      };
    }
  }
};
</script>

<style scoped>
.overlay-backdrop {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, var(--bs-overlay-opacity, 0.85));
  backdrop-filter: blur(var(--bs-overlay-blur, 2px));
  z-index: var(--bs-overlay-z-index, 10);
  border-radius: inherit;
  opacity: 0;
  transition: opacity 0.15s linear;
}

.overlay-backdrop.show {
  opacity: 1;
}

.overlay-wrapper {
  position: relative;
  z-index: calc(var(--bs-overlay-z-index, 10) + 1);
}
</style>
