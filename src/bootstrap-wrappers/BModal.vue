<template>
  <div
    :class="modalClasses"
    :id="modalId"
    tabindex="-1"
    :aria-labelledby="titleId"
    :aria-hidden="!visible"
    @click.self="handleBackdropClick"
  >
    <div :class="dialogClasses">
      <div class="modal-content">
        <div v-if="title || $slots['modal-header']" class="modal-header">
          <slot name="modal-header">
            <h5 v-if="title" :id="titleId" class="modal-title">{{ title }}</h5>
            <button
              type="button"
              :class="closeButtonClasses"
              :aria-label="closeLabel"
              @click="hide"
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
export default {
  name: 'BModal',
  props: {
    id: {
      type: String,
      required: true
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
      escKeyHandler: null
    };
  },
  computed: {
    modalId() {
      return this.id;
    },
    titleId() {
      return `${this.id}-title`;
    },
    isBootstrap5() {
      return typeof window !== 'undefined' && window.bootstrap;
    },
    closeButtonClasses() {
      // Bootstrap 5 usa btn-close, Bootstrap 4 usa close
      if (this.isBootstrap5) {
        return 'btn-close';
      }
      return 'close';
    },
    modalClasses() {
      const classes = ['modal', 'fade'];
      if (this.visible) {
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
        this.$nextTick(() => {
          this.show();
        });
      } else {
        this.hide();
      }
    }
  },
  mounted() {
    if (this.visible) {
      this.$nextTick(() => {
        this.show();
      });
    }
    
    // Escuchar eventos de cierre del modal
    const modalEl = document.getElementById(this.modalId);
    if (modalEl) {
      // Bootstrap 5 eventos
      modalEl.addEventListener('hidden.bs.modal', () => {
        this.$emit('hide');
        this.$emit('hidden');
        // Limpiar instancia si existe
        if (this.modalInstance) {
          this.modalInstance = null;
        }
      });
      modalEl.addEventListener('shown.bs.modal', () => {
        this.$emit('show');
        this.$emit('shown');
      });
      
      // Bootstrap 4 eventos (jQuery)
      if (typeof window !== 'undefined' && window.$) {
        window.$(modalEl).on('hidden.bs.modal', () => {
          this.$emit('hide');
          this.$emit('hidden');
        });
        window.$(modalEl).on('shown.bs.modal', () => {
          this.$emit('show');
          this.$emit('shown');
        });
      }
      
      // Agregar listener para tecla ESC
      this.escKeyHandler = (event) => {
        if (event.key === 'Escape' && this.visible && !this.noCloseOnBackdrop) {
          this.hide();
        }
      };
      document.addEventListener('keydown', this.escKeyHandler);
    }
  },
  beforeDestroy() {
    if (this.modalInstance) {
      this.modalInstance.dispose();
    }
    // Remover listener de tecla ESC
    if (this.escKeyHandler) {
      document.removeEventListener('keydown', this.escKeyHandler);
      this.escKeyHandler = null;
    }
  },
  methods: {
    show() {
      const modalEl = document.getElementById(this.modalId);
      if (!modalEl) return;
      
      // Agregar listener para tecla ESC si no existe
      if (!this.escKeyHandler) {
        this.escKeyHandler = (event) => {
          if (event.key === 'Escape' && this.visible && !this.noCloseOnBackdrop) {
            this.hide();
          }
        };
        document.addEventListener('keydown', this.escKeyHandler);
      }
      
      // Intentar usar Bootstrap JavaScript API (BS4 usa jQuery, BS5 usa vanilla JS)
      if (typeof window !== 'undefined' && window.bootstrap && window.bootstrap.Modal) {
        // Bootstrap 5 JavaScript API
        if (!this.modalInstance) {
          this.modalInstance = new window.bootstrap.Modal(modalEl, {
            backdrop: this.noCloseOnBackdrop ? 'static' : true,
            keyboard: !this.noCloseOnBackdrop
          });
        }
        this.modalInstance.show();
        this.$emit('show');
      } else if (typeof window !== 'undefined' && window.$ && window.$(modalEl)) {
        // Bootstrap 4 usa jQuery
        window.$(modalEl).modal({
          backdrop: this.noCloseOnBackdrop ? 'static' : true,
          keyboard: !this.noCloseOnBackdrop
        });
        window.$(modalEl).modal('show');
        this.$emit('show');
      } else {
        // Fallback: mostrar modal manualmente (para cuando Bootstrap JS no está disponible)
        modalEl.classList.add('show', 'd-block');
        modalEl.setAttribute('aria-hidden', 'false');
        modalEl.setAttribute('aria-modal', 'true');
        modalEl.style.display = 'block';
        document.body.classList.add('modal-open');
        
        // Crear backdrop si no existe
        let backdrop = document.getElementById(`${this.modalId}-backdrop`);
        if (!backdrop) {
          backdrop = document.createElement('div');
          backdrop.className = 'modal-backdrop fade show';
          backdrop.id = `${this.modalId}-backdrop`;
          backdrop.addEventListener('click', () => {
            if (!this.noCloseOnBackdrop) {
              this.hide();
            }
          });
          document.body.appendChild(backdrop);
        }
        
        this.$emit('show');
      }
    },
    hide() {
      const modalEl = document.getElementById(this.modalId);
      if (!modalEl) return;
      
      // Emitir evento hide primero
      this.$emit('hide');
      
      if (this.modalInstance) {
        // Bootstrap 5
        this.modalInstance.hide();
        // El evento hidden se emitirá cuando el modal se oculte completamente
      } else if (typeof window !== 'undefined' && window.$ && window.$(modalEl)) {
        // Bootstrap 4 con jQuery
        window.$(modalEl).modal('hide');
        // Escuchar el evento hidden de Bootstrap 4
        window.$(modalEl).one('hidden.bs.modal', () => {
          this.$emit('hidden');
        });
      } else {
        // Fallback: ocultar modal manualmente
        modalEl.classList.remove('show', 'd-block');
        modalEl.setAttribute('aria-hidden', 'true');
        modalEl.removeAttribute('aria-modal');
        modalEl.style.display = 'none';
        document.body.classList.remove('modal-open');
        
        const backdrop = document.getElementById(`${this.modalId}-backdrop`);
        if (backdrop) {
          backdrop.classList.remove('show');
          setTimeout(() => {
            if (backdrop.parentNode) {
              backdrop.remove();
            }
            this.$emit('hidden');
          }, 150); // Esperar a que termine la animación fade
        } else {
          // Si no hay backdrop, emitir hidden inmediatamente
          this.$nextTick(() => {
            this.$emit('hidden');
          });
        }
      }
    },
    handleBackdropClick(event) {
      // Solo cerrar si se hace click directamente en el backdrop (no en el contenido)
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
  display: block !important;
}

.modal.show.d-block {
  display: block !important;
}

/* Asegurar que el botón de cerrar sea visible y funcional */
.modal-header .close,
.modal-header .btn-close {
  opacity: 1;
  cursor: pointer;
}

.modal-header .close:hover {
  opacity: 0.75;
}

.modal-header .btn-close:hover {
  opacity: 0.75;
}
</style>
