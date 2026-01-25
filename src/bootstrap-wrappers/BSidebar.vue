<template>
  <div>
    <div
      :class="sidebarClasses"
      :id="id"
      tabindex="-1"
      :aria-labelledby="titleId"
      :aria-hidden="!visible"
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
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
      <div :class="bodyClasses">
        <slot></slot>
      </div>
    </div>
    <div
      v-if="visible && shadow"
      :class="backdropClasses"
      @click="hide"
    ></div>
  </div>
</template>

<script>
export default {
  name: 'BSidebar',
  props: {
    id: {
      type: String,
      required: true
    },
    title: {
      type: String,
      default: null
    },
    visible: {
      type: Boolean,
      default: false
    },
    right: {
      type: Boolean,
      default: false
    },
    left: {
      type: Boolean,
      default: false
    },
    top: {
      type: Boolean,
      default: false
    },
    bottom: {
      type: Boolean,
      default: false
    },
    shadow: {
      type: Boolean,
      default: true
    },
    closeLabel: {
      type: String,
      default: 'Close'
    }
  },
  data() {
    return {
      sidebarInstance: null
    };
  },
  computed: {
    titleId() {
      return `${this.id}-title`;
    },
    isBootstrap5() {
      return typeof window !== 'undefined' && window.bootstrap;
    },
    sidebarStyles() {
      if (!this.isBootstrap5 && this.visible) {
        // Bootstrap 4 - estilos inline para sidebar
        return {
          position: 'fixed',
          top: '0',
          [this.right ? 'right' : 'left']: '0',
          bottom: '0',
          width: '300px',
          zIndex: '1050',
          display: 'block'
        };
      }
      return {};
    },
    headerClasses() {
      return this.isBootstrap5 ? 'offcanvas-header' : 'modal-header';
    },
    titleClasses() {
      return this.isBootstrap5 ? 'offcanvas-title' : 'modal-title';
    },
    bodyClasses() {
      return this.isBootstrap5 ? 'offcanvas-body' : 'modal-body';
    },
    closeButtonClasses() {
      if (this.isBootstrap5) {
        return 'btn-close';
      }
      return 'close';
    },
    backdropClasses() {
      if (this.isBootstrap5) {
        return 'offcanvas-backdrop fade show';
      }
      return 'modal-backdrop fade show';
    },
    sidebarClasses() {
      // Bootstrap 4 no tiene offcanvas, usar modal-sidebar como alternativa
      // Bootstrap 5 usa offcanvas
      const classes = [];
      
      if (typeof window !== 'undefined' && window.bootstrap) {
        // Bootstrap 5
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
        // Bootstrap 4 - usar clases de modal para simular sidebar
        classes.push('modal', 'fade');
        if (this.right || !this.left) {
          classes.push('modal-right');
        }
      }
      
      if (this.visible) {
        classes.push('show');
        if (!window.bootstrap) {
          classes.push('d-block');
        }
      }
      
      return classes.join(' ');
    }
  },
  watch: {
    visible(newVal) {
      if (newVal) {
        this.show();
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
  },
  beforeDestroy() {
    if (this.sidebarInstance) {
      this.sidebarInstance.dispose();
    }
  },
  methods: {
    show() {
      const sidebarEl = document.getElementById(this.id);
      if (!sidebarEl) return;
      
      if (this.isBootstrap5) {
        // Bootstrap 5
        if (!this.sidebarInstance) {
          this.sidebarInstance = new window.bootstrap.Offcanvas(sidebarEl);
        }
        this.sidebarInstance.show();
        this.$emit('show');
      } else {
        // Bootstrap 4 - mostrar manualmente
        sidebarEl.classList.add('show', 'd-block');
        sidebarEl.setAttribute('aria-hidden', 'false');
        document.body.classList.add('modal-open');
        
        // Crear backdrop
        if (this.shadow) {
          let backdrop = document.getElementById(`${this.id}-backdrop`);
          if (!backdrop) {
            backdrop = document.createElement('div');
            backdrop.className = 'modal-backdrop fade show';
            backdrop.id = `${this.id}-backdrop`;
            backdrop.addEventListener('click', () => this.hide());
            document.body.appendChild(backdrop);
          }
        }
        
        this.$emit('show');
      }
    },
    hide() {
      const sidebarEl = document.getElementById(this.id);
      if (!sidebarEl) return;
      
      if (this.sidebarInstance) {
        // Bootstrap 5
        this.sidebarInstance.hide();
        this.$emit('hide');
        this.$emit('hidden');
      } else {
        // Bootstrap 4 - ocultar manualmente
        sidebarEl.classList.remove('show', 'd-block');
        sidebarEl.setAttribute('aria-hidden', 'true');
        document.body.classList.remove('modal-open');
        
        // Remover backdrop
        const backdrop = document.getElementById(`${this.id}-backdrop`);
        if (backdrop) {
          backdrop.classList.remove('show');
          setTimeout(() => {
            if (backdrop.parentNode) {
              backdrop.remove();
            }
          }, 150);
        }
        
        this.$emit('hide');
        this.$emit('hidden');
      }
    }
  }
};
</script>

<style scoped>
.offcanvas.show {
  visibility: visible;
}

/* Bootstrap 4 compatibility */
.modal-right {
  right: 0;
  left: auto;
}

.modal-right .modal-dialog {
  margin: 0;
  height: 100%;
  max-width: 300px;
}

.modal-right .modal-content {
  height: 100%;
  border: 0;
  border-radius: 0;
}
</style>
