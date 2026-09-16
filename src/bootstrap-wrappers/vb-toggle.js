/**
 * Directiva v-b-toggle compatible con bootstrap-vue.
 * Uso: v-b-toggle="'sidebar-cart'" o v-b-toggle.sidebar-cart
 */

function resolveTargetIds(binding) {
  const ids = [];

  if (typeof binding.value === 'string' && binding.value) {
    ids.push(binding.value);
  } else if (Array.isArray(binding.value)) {
    binding.value.forEach((v) => {
      if (v) ids.push(String(v));
    });
  }

  Object.keys(binding.modifiers || {}).forEach((mod) => {
    if (mod) ids.push(mod);
  });

  return [...new Set(ids)];
}

function resolveToggleTarget(el) {
  if (!el) return null;

  // Preferir componente Vue (BSidebar / BCollapse / BModal)
  let inst = el.__vueParentComponent;
  while (inst) {
    const proxy = inst.proxy;
    if (proxy && typeof proxy.toggle === 'function') {
      return { type: 'vue', proxy };
    }
    if (proxy && typeof proxy.show === 'function' && typeof proxy.hide === 'function') {
      return { type: 'vue-showhide', proxy };
    }
    inst = inst.parent;
  }

  if (typeof window !== 'undefined' && window.bootstrap) {
    if (el.classList.contains('offcanvas') && window.bootstrap.Offcanvas) {
      const instance =
        typeof window.bootstrap.Offcanvas.getOrCreateInstance === 'function'
          ? window.bootstrap.Offcanvas.getOrCreateInstance(el)
          : window.bootstrap.Offcanvas.getInstance(el) || new window.bootstrap.Offcanvas(el);
      return { type: 'bs', instance };
    }
    if (el.classList.contains('collapse') && window.bootstrap.Collapse) {
      const instance =
        typeof window.bootstrap.Collapse.getOrCreateInstance === 'function'
          ? window.bootstrap.Collapse.getOrCreateInstance(el, { toggle: false })
          : window.bootstrap.Collapse.getInstance(el) ||
            new window.bootstrap.Collapse(el, { toggle: false });
      return { type: 'bs', instance };
    }
    if (el.classList.contains('modal') && window.bootstrap.Modal) {
      const instance =
        typeof window.bootstrap.Modal.getOrCreateInstance === 'function'
          ? window.bootstrap.Modal.getOrCreateInstance(el)
          : window.bootstrap.Modal.getInstance(el) || new window.bootstrap.Modal(el);
      return { type: 'bs', instance };
    }
  }

  return null;
}

function toggleTargets(ids) {
  ids.forEach((id) => {
    const el = typeof document !== 'undefined' ? document.getElementById(id) : null;
    if (!el) return;

    const target = resolveToggleTarget(el);
    if (!target) return;

    if (target.type === 'vue') {
      target.proxy.toggle();
      return;
    }

    if (target.type === 'vue-showhide') {
      const shown =
        target.proxy.isShown === true ||
        target.proxy.propVisible === true ||
        target.proxy.modelValue === true ||
        target.proxy.visible === true;
      if (shown) {
        target.proxy.hide();
      } else {
        target.proxy.show();
      }
      return;
    }

    if (target.type === 'bs' && target.instance && typeof target.instance.toggle === 'function') {
      target.instance.toggle();
    }
  });
}

function onClick(event) {
  const el = event.currentTarget;
  const ids = el.__vbToggleIds || [];
  if (!ids.length) return;
  event.preventDefault();
  toggleTargets(ids);
}

export const VBToggle = {
  name: 'b-toggle',
  mounted(el, binding) {
    el.__vbToggleIds = resolveTargetIds(binding);
    el.addEventListener('click', onClick);
  },
  updated(el, binding) {
    el.__vbToggleIds = resolveTargetIds(binding);
  },
  unmounted(el) {
    el.removeEventListener('click', onClick);
    delete el.__vbToggleIds;
  },
};

export default VBToggle;
