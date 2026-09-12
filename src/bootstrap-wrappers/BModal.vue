<template>
  <div
    :class="modalClasses"
    :id="modalId"
    tabindex="-1"
    role="dialog"
    :aria-labelledby="titleId"
    :aria-hidden="!isShown"
    :aria-modal="isShown ? 'true' : undefined"
    @click.self="handleBackdropClick"
  >
    <div :class="dialogClasses" role="document">
      <div class="modal-content">
        <div v-if="title || $slots['modal-header']" class="modal-header">
          <slot name="modal-header">
            <h5 v-if="title" :id="titleId" class="modal-title">{{ title }}</h5>
            <button
              type="button"
              :class="closeButtonClasses"
              :aria-label="closeLabel"
              @click.prevent="hide"
            >
              <span v-if="!isBootstrap5" aria-hidden="true">&times;</span>
            </button>
          </slot>
        </div>
        <div class="modal-body">
          <slot></slot>
        </div>
        <div v-if="!hideFooter && ($slots['modal-footer'] || showFooter)" class="modal-footer">
          <slot name="modal-footer">
            <button type="button" class="btn btn-secondary" @click="hide">{{ cancelLabel }}</button>
            <button type="button" class="btn btn-primary" @click="ok">{{ okLabel }}</button>
          </slot>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import {
  getBootstrapModal,
  showBootstrapModal,
  hideBootstrapModal,
  disposeBootstrapModal,
  cleanupModalArtifacts,
} from '../utils/modal.js';

export default {
  name: 'BModal',
  props: {
    id: {
      type: String,
      default: null
    },
    title: {
      type: String,
      default: null
    },
    size: {
      type: String,
      default: null,
      validator: (value) => !value || ['sm', 'lg', 'xl'].includes(value)
    },
    centered: {
      type: Boolean,
      default: false
    },
    scrollable: {
      type: Boolean,
      default: false
    },
    hideFooter: {
      type: Boolean,
      default: false
    },
    showFooter: {
      type: Boolean,
      default: false
    },
    noCloseOnBackdrop: {
      type: Boolean,
      default: false
    },
    visible: {
      type: Boolean,
      default: false
    },
    okLabel: {
      type: String,
      default: 'OK'
    },
    cancelLabel: {
      type: String,
      default: 'Cancel'
    },
    closeLabel: {
      type: String,
      default: 'Close'
    }
  },
  data() {
    return {
      modalInstance: null,
      escKeyHandler: null,
      isShown: false,
      isHiding: false,
      boundOnShown: null,
      boundOnHidden: null,
      autoId: `b-modal-${Math.random().toString(36).slice(2, 9)}`,
    };
  },
  computed: {
    modalId() {
      return this.id || this.autoId;
    },
    titleId() {
      return `${this.id}-title`;
    },
    isBootstrap5() {
      return typeof window !== 'undefined' && !!(window.bootstrap && window.bootstrap.Modal);
    },
    closeButtonClasses() {
      if (this.isBootstrap5) {
        return 'btn-close';
      }
      return 'close';
    },
    modalClasses() {
      const classes = ['modal', 'fade'];
      if (this.isShown || this.visible) {
        classes.push('show');
      }
      return classes.join(' ');
    },
    dialogClasses() {
      const classes = ['modal-dialog'];

      if (this.size) {
        classes.push(`modal-${this.size}`);
      }

      if (this.centered) {
        classes.push('modal-dialog-centered');
      }

      if (this.scrollable) {
        classes.push('modal-dialog-scrollable');
      }

      return classes.join(' ');
    }
  },
  watch: {
    visible(newVal) {
      if (newVal) {
        this.$nextTick(() => this.show());
      } else if (this.isShown) {
        this.hide();
      }
    }
  },
  mounted() {
    this.boundOnShown = () => {
      this.isShown = true;
      this.isHiding = false;
      this.$emit('show');
      this.$emit('shown');
    };
    this.boundOnHidden = () => {
      this.isShown = false;
      this.isHiding = false;
      this.modalInstance = null;
      cleanupModalArtifacts();
      this.$emit('hidden');
    };

    const modalEl = this.getModalEl();
    if (modalEl) {
      modalEl.addEventListener('shown.bs.modal', this.boundOnShown);
      modalEl.addEventListener('hidden.bs.modal', this.boundOnHidden);

      if (typeof window !== 'undefined' && window.$) {
        window.$(modalEl).on('shown.bs.modal.bmodal', this.boundOnShown);
        window.$(modalEl).on('hidden.bs.modal.bmodal', this.boundOnHidden);
      }
    }

    this.escKeyHandler = (event) => {
      if (event.key === 'Escape' && this.isShown && !this.noCloseOnBackdrop) {
        this.hide();
      }
    };
    document.addEventListener('keydown', this.escKeyHandler);

    if (this.visible) {
      this.$nextTick(() => this.show());
    }
  },
  beforeUnmount() {
    const modalEl = this.getModalEl();
    if (modalEl) {
      modalEl.removeEventListener('shown.bs.modal', this.boundOnShown);
      modalEl.removeEventListener('hidden.bs.modal', this.boundOnHidden);
      if (typeof window !== 'undefined' && window.$) {
        window.$(modalEl).off('shown.bs.modal.bmodal');
        window.$(modalEl).off('hidden.bs.modal.bmodal');
      }
    }

    disposeBootstrapModal(modalEl || this.modalId);
    this.modalInstance = null;
    // Forzar limpieza: al desmontar no debe quedar backdrop/modal-open
    cleanupModalArtifacts({ force: true });

    if (this.escKeyHandler) {
      document.removeEventListener('keydown', this.escKeyHandler);
      this.escKeyHandler = null;
    }
  },
  methods: {
    getModalEl() {
      return this.$el && this.$el.nodeType === 1
        ? this.$el
        : (typeof document !== 'undefined' ? document.getElementById(this.modalId) : null);
    },
    show() {
      const modalEl = this.getModalEl();
      if (!modalEl) return;

      this.isHiding = false;
      this.modalInstance = showBootstrapModal(modalEl, {
        backdrop: this.noCloseOnBackdrop ? 'static' : true,
        keyboard: !this.noCloseOnBackdrop,
      });

      // Fallback path already sets isShown via class; sync if Bootstrap API used
      if (!this.isBootstrap5 && !(typeof window !== 'undefined' && window.$)) {
        this.isShown = true;
        this.$emit('show');
      }
    },
    hide() {
      if (this.isHiding) return;

      const modalEl = this.getModalEl();
      if (!modalEl) {
        cleanupModalArtifacts();
        return;
      }

      this.isHiding = true;
      this.$emit('hide');

      // Prefer instance opened by Bootstrap (even if opened via $bvModal helper)
      const existing = getBootstrapModal(modalEl);
      if (existing) {
        this.modalInstance = existing;
      }

      hideBootstrapModal(modalEl);

      // If Bootstrap/jQuery aren't managing the modal, clean immediately
      if (!getBootstrapModal(modalEl) && !(typeof window !== 'undefined' && window.$)) {
        this.isShown = false;
        this.isHiding = false;
        cleanupModalArtifacts();
        this.$emit('hidden');
      }
    },
    handleBackdropClick(event) {
      if (!this.noCloseOnBackdrop && event.target === event.currentTarget) {
        this.hide();
      }
    },
    ok() {
      this.$emit('ok');
      this.hide();
    }
  }
};
</script>

<style scoped>
.modal.show {
  display: block;
}

.modal-header .close,
.modal-header .btn-close {
  opacity: 1;
  cursor: pointer;
}

.modal-header .close:hover,
.modal-header .btn-close:hover {
  opacity: 0.75;
}
</style>
