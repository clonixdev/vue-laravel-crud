/**
 * Sistema de toasts simple compatible con Bootstrap 4 y 5
 * Reemplaza la funcionalidad de bootstrap-vue $bvToast
 */

import {
  resolveModalElement,
  resolveVueComponentFromEl,
  showBootstrapModal,
  hideBootstrapModal,
  cleanupModalArtifacts,
} from './modal.js';

/**
 * Crea y muestra un toast
 * @param {string} message - Mensaje a mostrar
 * @param {Object} options - Opciones del toast
 * @param {string} options.title - Título del toast
 * @param {string} options.variant - Variante (success, danger, warning, info)
 * @param {string} options.toaster - Posición (no usado, mantenido por compatibilidad)
 * @param {boolean} options.solid - Si es true, usa fondo sólido
 * @param {boolean} options.appendToast - Si es true, agrega al contenedor existente
 */
export function showToast(message, options = {}) {
  const {
    title = '',
    variant = 'info',
    toaster = 'b-toaster-bottom-right',
    solid = false,
    appendToast = true
  } = options;

  // Crear contenedor de toasts si no existe
  let toasterContainer = document.getElementById('vue-laravel-crud-toaster');
  if (!toasterContainer) {
    toasterContainer = document.createElement('div');
    toasterContainer.id = 'vue-laravel-crud-toaster';
    toasterContainer.className = 'vue-laravel-crud-toaster';
    
    // Determinar posición basada en toaster
    if (toaster.includes('bottom-right')) {
      toasterContainer.style.cssText = 'position: fixed; bottom: 0; right: 0; z-index: 9999; padding: 1rem; max-width: 350px;';
    } else if (toaster.includes('bottom-left')) {
      toasterContainer.style.cssText = 'position: fixed; bottom: 0; left: 0; z-index: 9999; padding: 1rem; max-width: 350px;';
    } else if (toaster.includes('top-right')) {
      toasterContainer.style.cssText = 'position: fixed; top: 0; right: 0; z-index: 9999; padding: 1rem; max-width: 350px;';
    } else if (toaster.includes('top-left')) {
      toasterContainer.style.cssText = 'position: fixed; top: 0; left: 0; z-index: 9999; padding: 1rem; max-width: 350px;';
    } else {
      // Default: bottom-right
      toasterContainer.style.cssText = 'position: fixed; bottom: 0; right: 0; z-index: 9999; padding: 1rem; max-width: 350px;';
    }
    
    document.body.appendChild(toasterContainer);
  }

  // Crear elemento toast
  const toastId = `toast-${Date.now()}-${Math.random().toString(36).substr(2, 9)}`;
  const toast = document.createElement('div');
  toast.id = toastId;
  toast.className = 'toast';
  toast.setAttribute('role', 'alert');
  toast.setAttribute('aria-live', 'assertive');
  toast.setAttribute('aria-atomic', 'true');
  
  // Determinar clases según variant
  let bgClass = '';
  let textClass = '';
  if (variant === 'success') {
    bgClass = solid ? 'bg-success' : 'border-success';
    textClass = solid ? 'text-white' : 'text-success';
  } else if (variant === 'danger') {
    bgClass = solid ? 'bg-danger' : 'border-danger';
    textClass = solid ? 'text-white' : 'text-danger';
  } else if (variant === 'warning') {
    bgClass = solid ? 'bg-warning' : 'border-warning';
    textClass = solid ? 'text-white' : 'text-warning';
  } else if (variant === 'info') {
    bgClass = solid ? 'bg-info' : 'border-info';
    textClass = solid ? 'text-white' : 'text-info';
  } else {
    bgClass = solid ? 'bg-secondary' : 'border-secondary';
    textClass = solid ? 'text-white' : 'text-secondary';
  }

  // Construir HTML del toast
  toast.innerHTML = `
    <div class="toast-header ${solid ? bgClass + ' ' + textClass : ''}" style="${solid ? '' : 'border-bottom-color: inherit;'}">
      ${title ? `<strong class="me-auto">${title}</strong>` : ''}
      <button type="button" class="btn-close ${solid ? '' : 'btn-close-white'}" data-bs-dismiss="toast" aria-label="Close"></button>
    </div>
    <div class="toast-body ${solid ? bgClass + ' ' + textClass : textClass}">
      ${message}
    </div>
  `;

  // Agregar clases adicionales
  if (!solid) {
    toast.classList.add('border');
  }

  // Agregar al contenedor
  toasterContainer.appendChild(toast);

  // Inicializar y mostrar toast
  // Bootstrap 5
  if (typeof window !== 'undefined' && window.bootstrap && window.bootstrap.Toast) {
    const bsToast = new window.bootstrap.Toast(toast, {
      autohide: true,
      delay: 5000
    });
    bsToast.show();
    
    // Remover del DOM cuando se oculte
    toast.addEventListener('hidden.bs.toast', () => {
      if (toast.parentNode) {
        toast.remove();
      }
    });
  } else {
    // Bootstrap 4 o fallback manual
    toast.classList.add('show');
    
    // Auto-ocultar después de 5 segundos
    setTimeout(() => {
      toast.classList.remove('show');
      setTimeout(() => {
        if (toast.parentNode) {
          toast.remove();
        }
      }, 300);
    }, 5000);
  }

  return toast;
}

/**
 * Helper para controlar modales programáticamente
 * Compatible con bootstrap-vue $bvModal API (Vue 3 + Bootstrap 5)
 */
export const modalHelper = {
  show(modalId) {
    const modalEl = resolveModalElement(modalId);
    if (!modalEl) {
      console.warn(`Modal with id "${modalId}" not found`);
      return;
    }

    const vueInstance = resolveVueComponentFromEl(modalEl);
    if (vueInstance && typeof vueInstance.show === 'function') {
      vueInstance.show();
      return;
    }

    if (vueInstance && 'visible' in vueInstance) {
      vueInstance.visible = true;
      return;
    }

    showBootstrapModal(modalEl);
  },

  hide(modalId) {
    const modalEl = resolveModalElement(modalId);
    if (!modalEl) {
      console.warn(`Modal with id "${modalId}" not found`);
      cleanupModalArtifacts({ force: true });
      return;
    }

    const vueInstance = resolveVueComponentFromEl(modalEl);
    if (vueInstance && typeof vueInstance.hide === 'function') {
      vueInstance.hide();
      return;
    }

    if (vueInstance && vueInstance.$refs && vueInstance.$refs[modalId]) {
      const refComponent = vueInstance.$refs[modalId];
      if (typeof refComponent.hide === 'function') {
        refComponent.hide();
        return;
      }
    }

    hideBootstrapModal(modalEl);
  },

  msgBoxConfirm(message, options = {}) {
    return new Promise((resolve) => {
      const confirmId = 'confirm-modal-' + Date.now();
      const modal = document.createElement('div');
      modal.id = confirmId;
      modal.className = 'modal fade';
      modal.innerHTML = `
        <div class="modal-dialog modal-sm">
          <div class="modal-content">
            <div class="modal-header">
              <h5 class="modal-title">${options.title || 'Confirmar'}</h5>
              <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div class="modal-body">
              <p>${message}</p>
            </div>
            <div class="modal-footer">
              <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">${options.cancelTitle || 'Cancelar'}</button>
              <button type="button" class="btn btn-${options.okVariant || 'primary'}" id="${confirmId}-ok">${options.okTitle || 'Aceptar'}</button>
            </div>
          </div>
        </div>
      `;

      document.body.appendChild(modal);

      let settled = false;
      const finish = (result) => {
        if (settled) return;
        settled = true;
        hideBootstrapModal(modal);
        setTimeout(() => {
          if (modal.parentNode) {
            modal.remove();
          }
          cleanupModalArtifacts();
        }, 200);
        resolve(result);
      };

      const okButton = document.getElementById(`${confirmId}-ok`);
      const cancelButton = modal.querySelector('.btn-secondary');
      const closeButton = modal.querySelector('.btn-close');

      okButton?.addEventListener('click', () => finish(true));
      cancelButton?.addEventListener('click', () => finish(false));
      closeButton?.addEventListener('click', () => finish(false));

      showBootstrapModal(modal);
      modal.addEventListener('hidden.bs.modal', () => {
        if (modal.parentNode) {
          modal.remove();
        }
        cleanupModalArtifacts();
        if (!settled) {
          settled = true;
          resolve(false);
        }
      });
    });
  }
};

/**
 * Plugin Vue para agregar $toast y $bvModal a las instancias
 */
export default {
  install(app) {
    app.config.globalProperties.$toast = showToast;
    
    // Compatibilidad con bootstrap-vue API
    app.config.globalProperties.$bvToast = {
      toast: showToast
    };
    
    // Helper para modales
    app.config.globalProperties.$bvModal = modalHelper;
  }
};
