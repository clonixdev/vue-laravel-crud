<template>
  <i
    :class="iconClasses"
    :style="iconStyle"
    :aria-label="ariaLabel"
    :aria-hidden="ariaLabel ? undefined : 'true'"
  ></i>
</template>

<script>
import { resolveBootstrapIconName } from '../utils/icons.js';

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
    resolvedIcon() {
      return resolveBootstrapIconName(this.icon);
    },
    iconClasses() {
      const classes = ['bi', `bi-${this.resolvedIcon}`];

      if (this.animation) {
        classes.push(`bi-${this.animation}`);
      }

      if (this.variant) {
        classes.push(`text-${this.variant}`);
      }

      return classes.join(' ');
    },
    iconStyle() {
      const transforms = [];
      const scale = Number(this.scale);
      const rotate = Number(this.rotate);

      if (scale && scale !== 1) {
        transforms.push(`scale(${scale})`);
      }
      if (rotate) {
        transforms.push(`rotate(${rotate}deg)`);
      }
      if (this.flipH) {
        transforms.push('scaleX(-1)');
      }
      if (this.flipV) {
        transforms.push('scaleY(-1)');
      }

      if (!transforms.length) {
        return undefined;
      }

      return {
        display: 'inline-block',
        transform: transforms.join(' '),
        transformOrigin: 'center',
      };
    }
  }
};
</script>
