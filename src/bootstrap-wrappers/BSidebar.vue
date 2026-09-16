<template>
  <Teleport to="body">
    <div class="b-sidebar-root">
      <div
        :class="sidebarClasses"
        :id="id"
        tabindex="-1"
        :aria-labelledby="titleId"
        :aria-hidden="!isShown"
        :style="sidebarStyles"
      >
        <div :class="headerClasses">
          <h5 v-if="title" :id="titleId" :class="titleClasses">{{ title }}</h5>
          <button
            type="button"
            :class="closeButtonClasses"
            :aria-label="closeLabel"
            @click="hide"
          >
            <span v-if="!isBootstrap5" aria-hidden="true">&times;</span>
          </button>
        </div>
        <div :class="bodyClasses">
          <slot></slot>
        </div>
        <div v-if="$slots.footer" :class="footerClasses">
          <slot name="footer" :hide="hide"></slot>
        </div>
      </div>
      <div
        v-if="isShown && !isBootstrap5"
        :id="`${id}-backdrop`"
        class="modal-backdrop fade show"
        @click="hide"
      ></div>
    </div>
  </Teleport>
</template>

<script>
/**
 * Compatibilidad bootstrap-vue <b-sidebar> sobre Bootstrap 5 Offcanvas.
 * Soporta v-model / :visible y slot #footer. Teleport a body para evitar clipping.
 */
export default {
  name: 'BSidebar',
  emits: [
    'update:modelValue',
    'update:visible',
    'change',
    'show',
    'shown',
    'hide',
    'hidden',
  ],
  props: {
    id: {
      type: String,
      required: true,
    },
    title: {
      type: String,
      default: null,
    },
    modelValue: {
      type: Boolean,
      default: undefined,
    },
    visible: {
      type: Boolean,
      default: undefined,
    },
    right: {
      type: Boolean,
      default: false,
    },
    left: {
      type: Boolean,
      default: false,
    },
    top: {
      type: Boolean,
      default: false,
    },
    bottom: {
      type: Boolean,
      default: false,
    },
    shadow: {
      type: Boolean,
      default: true,
    },
    closeLabel: {
      type: String,
      default: 'Close',
    },
  },
  data() {
    return {
      isShown: false,
      sidebarInstance: null,
      syncingFromProp: false,
      boundOnShown: null,
      boundOnHidden: null,
    };
  },
  computed: {
    titleId() {
      return `${this.id}-title`;
    },
    isBootstrap5() {
      return typeof window !== 'undefined' && !!(window.bootstrap && window.bootstrap.Offcanvas);
    },
    propVisible() {
      if (this.modelValue !== undefined) {
        return !!this.modelValue;
      }
      if (this.visible !== undefined) {
        return !!this.visible;
      }
      return false;
    },
    sidebarStyles() {
      if (!this.isBootstrap5 && this.isShown) {
        return {
          position: 'fixed',
          top: '0',
          [this.right ? 'right' : 'left']: '0',
          bottom: '0',
          width: '320px',
          maxWidth: '100vw',
          zIndex: '1055',
          display: 'flex',
          flexDirection: 'column',
          backgroundColor: 'var(--bs-body-bg, #fff)',
        };
      }
      return {
        zIndex: '1055',
      };
    },
    headerClasses() {
      return this.isBootstrap5 ? 'offcanvas-header' : 'b-sidebar-header';
    },
    titleClasses() {
      return this.isBootstrap5 ? 'offcanvas-title' : 'b-sidebar-title';
    },
    bodyClasses() {
      return this.isBootstrap5 ? 'offcanvas-body' : 'b-sidebar-body';
    },
    footerClasses() {
      return this.isBootstrap5 ? 'offcanvas-footer border-top' : 'b-sidebar-footer';
    },
    closeButtonClasses() {
      return this.isBootstrap5 ? 'btn-close' : 'close';
    },
    sidebarClasses() {
      const classes = [];

      if (this.isBootstrap5) {
        classes.push('offcanvas');
        if (this.right) {
          classes.push('offcanvas-end');
        } else if (this.left) {
          classes.push('offcanvas-start');
        } else if (this.top) {
          classes.push('offcanvas-top');
        } else if (this.bottom) {
          classes.push('offcanvas-bottom');
        } else {
          classes.push('offcanvas-end');
        }
      } else {
        classes.push('b-sidebar', 'b-sidebar-fallback');
        if (this.right || !this.left) {
          classes.push('b-sidebar-right');
        } else {
          classes.push('b-sidebar-left');
        }
      }

      if (this.isShown) {
        classes.push('show');
      }

      return classes.join(' ');
    },
  },
  watch: {
    propVisible: {
      immediate: true,
      handler(newVal) {
        this.$nextTick(() => {
          if (newVal === this.isShown) {
            return;
          }
          this.syncingFromProp = true;
          if (newVal) {
            this.show();
          } else {
            this.hide();
          }
          this.$nextTick(() => {
            this.syncingFromProp = false;
          });
        });
      },
    },
  },
  mounted() {
    this.boundOnShown = () => {
      this.isShown = true;
      this.$emit('show');
      this.$emit('shown');
      this.emitVisible(true);
    };
    this.boundOnHidden = () => {
      this.isShown = false;
      this.$emit('hide');
      this.$emit('hidden');
      this.emitVisible(false);
    };

    this.$nextTick(() => {
      const sidebarEl = this.getSidebarEl();
      if (sidebarEl && this.isBootstrap5) {
        sidebarEl.addEventListener('shown.bs.offcanvas', this.boundOnShown);
        sidebarEl.addEventListener('hidden.bs.offcanvas', this.boundOnHidden);
      }
      if (this.propVisible) {
        this.show();
      }
    });
  },
  beforeUnmount() {
    const sidebarEl = this.getSidebarEl();
    if (sidebarEl && this.isBootstrap5) {
      sidebarEl.removeEventListener('shown.bs.offcanvas', this.boundOnShown);
      sidebarEl.removeEventListener('hidden.bs.offcanvas', this.boundOnHidden);
    }
    if (this.sidebarInstance && typeof this.sidebarInstance.dispose === 'function') {
      this.sidebarInstance.dispose();
      this.sidebarInstance = null;
    }
    this.removeFallbackBackdrop();
  },
  methods: {
    getSidebarEl() {
      if (typeof document === 'undefined') {
        return null;
      }
      return document.getElementById(this.id);
    },
    emitVisible(val) {
      if (this.syncingFromProp) {
        return;
      }
      this.$emit('update:modelValue', val);
      this.$emit('update:visible', val);
      this.$emit('change', val);
    },
    show() {
      const sidebarEl = this.getSidebarEl();
      if (!sidebarEl) {
        this.isShown = true;
        this.emitVisible(true);
        return;
      }

      if (this.isBootstrap5) {
        try {
          if (!this.sidebarInstance) {
            const Offcanvas = window.bootstrap.Offcanvas;
            this.sidebarInstance =
              typeof Offcanvas.getOrCreateInstance === 'function'
                ? Offcanvas.getOrCreateInstance(sidebarEl)
                : new Offcanvas(sidebarEl);
          }
          this.sidebarInstance.show();
          // fallback visual por si el evento tarda
          this.isShown = true;
          return;
        } catch (e) {
          console.warn('BSidebar Offcanvas show failed, using fallback', e);
        }
      }

      this.isShown = true;
      sidebarEl.setAttribute('aria-hidden', 'false');
      document.body.classList.add('modal-open');
      this.$emit('show');
      this.$emit('shown');
      this.emitVisible(true);
    },
    hide() {
      const sidebarEl = this.getSidebarEl();

      if (this.isBootstrap5 && sidebarEl) {
        try {
          if (!this.sidebarInstance && window.bootstrap?.Offcanvas) {
            this.sidebarInstance =
              window.bootstrap.Offcanvas.getInstance(sidebarEl) ||
              (typeof window.bootstrap.Offcanvas.getOrCreateInstance === 'function'
                ? window.bootstrap.Offcanvas.getOrCreateInstance(sidebarEl)
                : new window.bootstrap.Offcanvas(sidebarEl));
          }
          if (this.sidebarInstance) {
            this.sidebarInstance.hide();
            this.isShown = false;
            return;
          }
        } catch (e) {
          console.warn('BSidebar Offcanvas hide failed, using fallback', e);
        }
      }

      this.isShown = false;
      if (sidebarEl) {
        sidebarEl.setAttribute('aria-hidden', 'true');
      }
      document.body.classList.remove('modal-open');
      this.removeFallbackBackdrop();
      this.$emit('hide');
      this.$emit('hidden');
      this.emitVisible(false);
    },
    toggle() {
      if (this.isShown || this.propVisible) {
        this.hide();
      } else {
        this.show();
      }
    },
    removeFallbackBackdrop() {
      const backdrop = document.getElementById(`${this.id}-backdrop`);
      if (backdrop && backdrop.parentNode) {
        backdrop.parentNode.removeChild(backdrop);
      }
    },
  },
};
</script>

<style scoped>
.b-sidebar-root {
  /* Teleport a body: no clipping del layout admin */
}

.offcanvas {
  visibility: hidden;
}

.offcanvas.show {
  visibility: visible;
}

.b-sidebar-fallback {
  position: fixed;
  top: 0;
  bottom: 0;
  width: 320px;
  max-width: 100vw;
  z-index: 1055;
  display: none;
  flex-direction: column;
  background: #fff;
  box-shadow: 0 0.5rem 1rem rgba(0, 0, 0, 0.15);
}

.b-sidebar-fallback.show {
  display: flex;
}

.b-sidebar-right {
  right: 0;
  left: auto;
}

.b-sidebar-left {
  left: 0;
  right: auto;
}

.b-sidebar-header,
.offcanvas-footer,
.b-sidebar-footer {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0.75rem 1rem;
}

.b-sidebar-body {
  flex: 1 1 auto;
  overflow-y: auto;
  padding: 1rem;
}

.b-sidebar-header .close {
  background: transparent;
  border: 0;
  font-size: 1.5rem;
  line-height: 1;
  opacity: 0.7;
  cursor: pointer;
}
</style>
