/**
 * Sistema de toasts unificado (Bootstrap 5 toast API)
 * Compatible con bootstrap-vue $bvToast
 */

import {
  resolveModalElement,
  resolveVueComponentFromEl,
  showBootstrapModal,
  hideBootstrapModal,
  cleanupModalArtifacts,
} from './modal.js';

const DEDUPE_WINDOW_MS = 1800;
const recentToasts = new Map();

function toastFingerprint(message, title, variant) {
  return `${variant}::${title}::${String(message)}`.slice(0, 500);
}

function shouldSkipDuplicate(fingerprint) {
  const now = Date.now();
  for (const [key, ts] of recentToasts.entries()) {
    if (now - ts > DEDUPE_WINDOW_MS) {
      recentToasts.delete(key);
    }
  }
  const last = recentToasts.get(fingerprint);
  if (last && now - last < DEDUPE_WINDOW_MS) {
    return true;
  }
  recentToasts.set(fingerprint, now);
  return false;
}

function ensureToasterContainer(toaster = 'b-toaster-bottom-right') {
  // Unificar contenedores legacy (app-toast-container / vue-laravel-crud-toaster)
  const legacy = document.getElementById('app-toast-container');
  if (legacy && legacy.id !== 'vue-laravel-crud-toaster') {
    legacy.remove();
  }

  let toasterContainer = document.getElementById('vue-laravel-crud-toaster');
  if (!toasterContainer) {
    toasterContainer = document.createElement('div');
    toasterContainer.id = 'vue-laravel-crud-toaster';
    toasterContainer.className = 'toast-container position-fixed p-3 vue-laravel-crud-toaster';

    if (toaster.includes('bottom-left')) {
      toasterContainer.classList.add('bottom-0', 'start-0');
    } else if (toaster.includes('top-right')) {
      toasterContainer.classList.add('top-0', 'end-0');
    } else if (toaster.includes('top-left')) {
      toasterContainer.classList.add('top-0', 'start-0');
    } else {
      toasterContainer.classList.add('bottom-0', 'end-0');
    }

    toasterContainer.style.zIndex = '1090';
    toasterContainer.style.maxWidth = '360px';
    document.body.appendChild(toasterContainer);
  }

  return toasterContainer;
}

/**
 * Crea y muestra un toast
 * @param {string} message - Mensaje a mostrar
 * @param {Object} options - Opciones del toast
 */
export function showToast(message, options = {}) {
  // Compat: showToast(message, title, variant) desde mixins legacy
  if (typeof options === 'string') {
    const title = options;
    const variant = arguments[2] || 'info';
    options = { title, variant, solid: true };
  }

  const {
    title = '',
    variant = 'info',
    toaster = 'b-toaster-bottom-right',
    solid = true,
    appendToast = true,
    delay = 5000,
  } = options;

  const fingerprint = toastFingerprint(message, title, variant);
  if (shouldSkipDuplicate(fingerprint)) {
    return null;
  }

  const toasterContainer = ensureToasterContainer(toaster);

  if (!appendToast) {
    toasterContainer.innerHTML = '';
  }

  const toastId = `toast-${Date.now()}-${Math.random().toString(36).slice(2, 9)}`;
  const toast = document.createElement('div');
  toast.id = toastId;
  toast.className = 'toast align-items-center border-0 shadow mb-2';
  toast.setAttribute('role', 'alert');
  toast.setAttribute('aria-live', 'assertive');
  toast.setAttribute('aria-atomic', 'true');
  toast.dataset.fingerprint = fingerprint;

  let bgClass = 'bg-secondary';
  let textClass = 'text-white';
  if (variant === 'success') {
    bgClass = 'bg-success';
  } else if (variant === 'danger') {
    bgClass = 'bg-danger';
  } else if (variant === 'warning') {
    bgClass = 'bg-warning';
    textClass = 'text-dark';
  } else if (variant === 'info') {
    bgClass = 'bg-info';
    textClass = 'text-dark';
  }

  if (solid) {
    toast.classList.add(bgClass, textClass);
  } else {
    toast.classList.add(`border-${variant || 'secondary'}`);
  }

  toast.innerHTML = `
    <div class="d-flex">
      <div class="toast-body">
        ${title ? `<strong class="d-block mb-1">${title}</strong>` : ''}
        <div>${message}</div>
      </div>
      <button type="button" class="btn-close ${textClass === 'text-white' ? 'btn-close-white' : ''} me-2 m-auto" data-bs-dismiss="toast" aria-label="Close"></button>
    </div>
  `;

  toasterContainer.appendChild(toast);

  if (typeof window !== 'undefined' && window.bootstrap && window.bootstrap.Toast) {
    const bsToast = new window.bootstrap.Toast(toast, {
      autohide: true,
      delay,
    });
    bsToast.show();

    toast.addEventListener('hidden.bs.toast', () => {
      if (toast.parentNode) {
        toast.remove();
      }
    });
  } else {
    toast.classList.add('show');
    setTimeout(() => {
      toast.classList.remove('show');
      setTimeout(() => {
        if (toast.parentNode) {
          toast.remove();
        }
      }, 300);
    }, delay);
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

    app.config.globalProperties.$bvToast = {
      toast: showToast
    };

    app.config.globalProperties.$bvModal = modalHelper;
  }
};
