/**
 * Helpers de modal compatibles con Bootstrap 4 (jQuery) y Bootstrap 5.
 * Evitan backdrops huérfanos y sincronizan instancias Vue 3 / Bootstrap.
 */

/**
 * Obtiene el elemento DOM del modal.
 * @param {string|HTMLElement} modalRef
 * @returns {HTMLElement|null}
 */
export function resolveModalElement(modalRef) {
  if (!modalRef) return null;
  if (typeof modalRef !== 'string') return modalRef;
  if (typeof document === 'undefined') return null;
  return document.getElementById(modalRef);
}

/**
 * Resuelve el proxy público de un componente Vue 3/2 desde un elemento DOM.
 * @param {HTMLElement} el
 * @returns {object|null}
 */
export function resolveVueComponentFromEl(el) {
  if (!el) return null;

  // Vue 2
  if (el.__vue__) {
    return el.__vue__;
  }

  // Vue 3: InternalInstance en __vueParentComponent
  let inst = el.__vueParentComponent;
  while (inst) {
    const proxy = inst.proxy;
    if (
      proxy &&
      typeof proxy.show === 'function' &&
      typeof proxy.hide === 'function' &&
      (proxy.$options?.name === 'BModal' || proxy.modalId !== undefined)
    ) {
      return proxy;
    }
    inst = inst.parent;
  }

  // Fallback: el root del SFC suele ser el propio modal
  const rootProxy = el.__vueParentComponent?.proxy;
  if (rootProxy && typeof rootProxy.show === 'function' && typeof rootProxy.hide === 'function') {
    return rootProxy;
  }

  return null;
}

/**
 * @param {string|HTMLElement} modalRef
 * @returns {import('bootstrap').Modal|null}
 */
export function getBootstrapModal(modalRef) {
  const modalEl = resolveModalElement(modalRef);
  if (!modalEl) return null;
  if (typeof window === 'undefined' || !window.bootstrap?.Modal) return null;
  return window.bootstrap.Modal.getInstance(modalEl) || null;
}

/**
 * @param {string|HTMLElement} modalRef
 * @param {object} [options]
 * @returns {import('bootstrap').Modal|null}
 */
export function getOrCreateBootstrapModal(modalRef, options = {}) {
  const modalEl = resolveModalElement(modalRef);
  if (!modalEl) return null;
  if (typeof window === 'undefined' || !window.bootstrap?.Modal) return null;

  if (typeof window.bootstrap.Modal.getOrCreateInstance === 'function') {
    return window.bootstrap.Modal.getOrCreateInstance(modalEl, options);
  }

  let instance = window.bootstrap.Modal.getInstance(modalEl);
  if (!instance) {
    instance = new window.bootstrap.Modal(modalEl, options);
  }
  return instance;
}

/**
 * Limpia backdrops y clases residuales de body cuando no queda ningún modal abierto.
 * @param {object} [options]
 * @param {boolean} [options.force=false] - forzar limpieza aunque haya .modal.show
 */
export function cleanupModalArtifacts(options = {}) {
  if (typeof document === 'undefined') return;

  const { force = false } = options;
  const openModals = document.querySelectorAll('.modal.show');

  if (!force && openModals.length > 0) {
    return;
  }

  document.querySelectorAll('.modal-backdrop').forEach((backdrop) => {
    backdrop.parentNode?.removeChild(backdrop);
  });

  document.body.classList.remove('modal-open');
  document.body.style.removeProperty('overflow');
  document.body.style.removeProperty('padding-right');
  document.body.removeAttribute('data-bs-overflow');
  document.body.removeAttribute('data-bs-padding-right');
}

/**
 * Muestra un modal con la API disponible (BS5 / jQuery / fallback manual).
 * @param {string|HTMLElement} modalRef
 * @param {object} [options]
 */
export function showBootstrapModal(modalRef, options = {}) {
  const modalEl = resolveModalElement(modalRef);
  if (!modalEl) return null;

  const opts = {
    backdrop: options.backdrop === undefined ? true : options.backdrop,
    keyboard: options.keyboard === undefined ? true : options.keyboard,
  };

  if (typeof window !== 'undefined' && window.bootstrap?.Modal) {
    const instance = getOrCreateBootstrapModal(modalEl, opts);
    instance?.show();
    return instance;
  }

  if (typeof window !== 'undefined' && window.$) {
    window.$(modalEl).modal(opts);
    window.$(modalEl).modal('show');
    return null;
  }

  // Fallback manual
  modalEl.classList.add('show', 'd-block');
  modalEl.style.display = 'block';
  modalEl.setAttribute('aria-hidden', 'false');
  modalEl.setAttribute('aria-modal', 'true');
  document.body.classList.add('modal-open');

  const backdropId = `${modalEl.id || 'modal'}-backdrop`;
  let backdrop = document.getElementById(backdropId);
  if (!backdrop) {
    backdrop = document.createElement('div');
    backdrop.className = 'modal-backdrop fade show';
    backdrop.id = backdropId;
    document.body.appendChild(backdrop);
  }

  return null;
}

/**
 * Oculta un modal y limpia artefactos residuales.
 * @param {string|HTMLElement} modalRef
 */
export function hideBootstrapModal(modalRef) {
  const modalEl = resolveModalElement(modalRef);
  if (!modalEl) {
    cleanupModalArtifacts({ force: true });
    return;
  }

  if (typeof window !== 'undefined' && window.bootstrap?.Modal) {
    const instance = getBootstrapModal(modalEl);
    if (instance) {
      const onHidden = () => {
        modalEl.removeEventListener('hidden.bs.modal', onHidden);
        cleanupModalArtifacts();
      };
      modalEl.addEventListener('hidden.bs.modal', onHidden);
      instance.hide();
      // Safety net if hidden event never fires
      setTimeout(() => cleanupModalArtifacts(), 400);
      return;
    }

    // Sin instancia BS: limpieza manual del DOM
    modalEl.classList.remove('show', 'd-block');
    modalEl.style.display = 'none';
    modalEl.setAttribute('aria-hidden', 'true');
    modalEl.removeAttribute('aria-modal');
    cleanupModalArtifacts({ force: true });
    return;
  }

  if (typeof window !== 'undefined' && window.$) {
    window.$(modalEl).one('hidden.bs.modal', () => cleanupModalArtifacts());
    window.$(modalEl).modal('hide');
    setTimeout(() => cleanupModalArtifacts(), 400);
    return;
  }

  modalEl.classList.remove('show', 'd-block');
  modalEl.style.display = 'none';
  modalEl.setAttribute('aria-hidden', 'true');
  modalEl.removeAttribute('aria-modal');
  cleanupModalArtifacts({ force: true });
}

/**
 * Dispose seguro de instancia Bootstrap Modal.
 * @param {string|HTMLElement} modalRef
 */
export function disposeBootstrapModal(modalRef) {
  const modalEl = resolveModalElement(modalRef);
  if (!modalEl) return;

  const instance = getBootstrapModal(modalEl);
  if (instance && typeof instance.dispose === 'function') {
    try {
      instance.dispose();
    } catch (e) {
      // ignore
    }
  }
  cleanupModalArtifacts({ force: true });
}
