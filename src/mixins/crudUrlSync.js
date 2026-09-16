/**
 * Sincronización de create/show/edit con la URL (query o path).
 * Reutiliza createItem/showItem/updateItem; solo cambia cómo se refleja en el router.
 */
export function normalizeUrlSync(urlSync) {
  if (!urlSync) {
    return null;
  }
  const defaults = {
    strategy: 'path', // 'path' | 'query'
    paramAction: 'action',
    paramId: 'id',
    replace: false,
    actions: {
      create: 'create',
      show: 'show',
      edit: 'edit',
    },
  };
  if (urlSync === true) {
    return { ...defaults };
  }
  return {
    ...defaults,
    ...urlSync,
    actions: { ...defaults.actions, ...(urlSync.actions || {}) },
  };
}

/**
 * Genera rutas Vue Router para deep-link de un CRUD.
 * Uso: ...crudRoutes('/products', 'products', () => import('...'), { meta })
 */
export function crudRoutes(basePath, name, component, options = {}) {
  const meta = options.meta || {};
  const props = options.props;
  const base = String(basePath || '').replace(/\/$/, '') || '/';

  return [
    {
      path: base,
      name,
      component,
      props,
      meta,
    },
    {
      path: `${base}/create`,
      name: `${name}-create`,
      component,
      props: (route) => ({
        ...(typeof props === 'function' ? props(route) : props || {}),
        crudAction: 'create',
      }),
      meta: { ...meta, crudAction: 'create' },
    },
    {
      path: `${base}/:id/edit`,
      name: `${name}-edit`,
      component,
      props: (route) => ({
        ...(typeof props === 'function' ? props(route) : props || {}),
        id: route.params.id,
        crudAction: 'edit',
      }),
      meta: { ...meta, crudAction: 'edit' },
    },
    {
      path: `${base}/:id`,
      name: `${name}-show`,
      component,
      props: (route) => ({
        ...(typeof props === 'function' ? props(route) : props || {}),
        id: route.params.id,
        crudAction: 'show',
      }),
      meta: { ...meta, crudAction: 'show' },
    },
  ];
}

export default {
  data() {
    return {
      // null | 'create' | 'show' | 'edit'
      uiMode: null,
      uiModeReactive: { value: null },
      _urlSyncApplying: false,
      _urlSyncReady: false,
    };
  },
  computed: {
    urlSyncConfig() {
      return normalizeUrlSync(this.urlSync);
    },
    urlSyncEnabled() {
      return !!this.urlSyncConfig;
    },
    isDetailOpen() {
      return !!this.uiMode;
    },
    isPageViewMode() {
      return String(this.viewMode || 'modal').toLowerCase() === 'page';
    },
    isModalViewMode() {
      return !this.isPageViewMode;
    },
    listVisible() {
      // En modo página, al abrir detalle se oculta el listado
      if (this.isPageViewMode && this.isDetailOpen) {
        return false;
      }
      return true;
    },
  },
  watch: {
    uiMode(val) {
      this.uiModeReactive.value = val;
    },
    '$route'(to, from) {
      if (!this.urlSyncEnabled || this._urlSyncApplying) {
        return;
      }
      this.applyRouteToUi(to);
    },
  },
  methods: {
    getRouter() {
      return this.$router || null;
    },
    getRoute() {
      return this.$route || null;
    },
    crudIndexPath() {
      const route = this.getRoute();
      if (!route) {
        return null;
      }
      const cfg = this.urlSyncConfig;
      if (!cfg || cfg.strategy !== 'path') {
        return route.path;
      }
      // Quitar /create, /:id, /:id/edit del path actual
      let path = route.path.replace(/\/$/, '');
      path = path.replace(/\/create$/i, '');
      path = path.replace(/\/[^/]+\/edit$/i, '');
      // si quedó .../123 (show), quitar id
      const baseFromName = this.resolveCrudBasePath();
      if (baseFromName) {
        return baseFromName;
      }
      // fallback: parent path segments
      const parts = path.split('/').filter(Boolean);
      if (parts.length >= 2 && route.params && route.params.id) {
        parts.pop();
        return '/' + parts.join('/');
      }
      return path || '/';
    },
    resolveCrudBasePath() {
      const route = this.getRoute();
      const router = this.getRouter();
      if (!route || !router) {
        return null;
      }
      // Si la ruta se llama products-show / products-edit / products-create → base name products
      const name = String(route.name || '');
      const baseName = name.replace(/-(create|show|edit)$/i, '');
      if (baseName && baseName !== name) {
        try {
          const resolved = router.resolve({ name: baseName });
          if (resolved && resolved.href) {
            return resolved.path || resolved.href.replace(/^#/, '');
          }
        } catch (e) {
          /* ignore */
        }
      }
      return null;
    },
    parseRouteAction(route = this.getRoute()) {
      if (!route || !this.urlSyncConfig) {
        return { action: null, id: null };
      }
      const cfg = this.urlSyncConfig;
      if (cfg.strategy === 'query') {
        const action = route.query[cfg.paramAction] || null;
        const id = route.query[cfg.paramId] || null;
        return { action: action ? String(action) : null, id };
      }
      // path
      const name = String(route.name || '');
      if (name.endsWith('-create') || route.meta?.crudAction === 'create') {
        return { action: 'create', id: null };
      }
      if (name.endsWith('-edit') || route.meta?.crudAction === 'edit') {
        return { action: 'edit', id: route.params?.id ?? null };
      }
      if (name.endsWith('-show') || route.meta?.crudAction === 'show') {
        return { action: 'show', id: route.params?.id ?? null };
      }
      // path heuristics
      const path = String(route.path || '');
      if (/\/create\/?$/i.test(path)) {
        return { action: 'create', id: null };
      }
      const editMatch = path.match(/\/([^/]+)\/edit\/?$/i);
      if (editMatch) {
        return { action: 'edit', id: editMatch[1] };
      }
      if (route.params?.id) {
        return { action: 'show', id: route.params.id };
      }
      return { action: null, id: null };
    },
    buildRouteLocation(action, id = null) {
      const cfg = this.urlSyncConfig;
      const route = this.getRoute();
      const router = this.getRouter();
      if (!cfg || !route || !router) {
        return null;
      }

      if (cfg.strategy === 'query') {
        const query = { ...route.query };
        if (!action) {
          delete query[cfg.paramAction];
          delete query[cfg.paramId];
        } else {
          query[cfg.paramAction] = cfg.actions[action] || action;
          if (id != null) {
            query[cfg.paramId] = String(id);
          } else {
            delete query[cfg.paramId];
          }
        }
        return { path: route.path, query, hash: route.hash };
      }

      // path strategy via named routes when possible
      const baseName = String(route.name || '').replace(/-(create|show|edit)$/i, '') || null;
      if (baseName) {
        if (!action) {
          return { name: baseName };
        }
        if (action === 'create') {
          return { name: `${baseName}-create` };
        }
        if (action === 'edit') {
          return { name: `${baseName}-edit`, params: { id: String(id) } };
        }
        if (action === 'show') {
          return { name: `${baseName}-show`, params: { id: String(id) } };
        }
      }

      const base = this.crudIndexPath() || '/';
      if (!action) {
        return { path: base };
      }
      if (action === 'create') {
        return { path: `${base}/create` };
      }
      if (action === 'edit') {
        return { path: `${base}/${id}/edit` };
      }
      return { path: `${base}/${id}` };
    },
    syncUrlFromUi(action = this.uiMode, id = this.item?.id) {
      if (!this.urlSyncEnabled || this._urlSyncApplying) {
        return;
      }
      const router = this.getRouter();
      if (!router) {
        return;
      }
      const location = this.buildRouteLocation(action, id);
      if (!location) {
        return;
      }
      const current = this.getRoute();
      const resolved = router.resolve(location);
      if (current && resolved && resolved.fullPath === current.fullPath) {
        return;
      }
      this._urlSyncApplying = true;
      const nav = this.urlSyncConfig.replace ? router.replace(location) : router.push(location);
      Promise.resolve(nav)
        .catch(() => {})
        .finally(() => {
          this.$nextTick(() => {
            this._urlSyncApplying = false;
          });
        });
    },
    applyRouteToUi(route = this.getRoute()) {
      if (!this.urlSyncEnabled || !route) {
        return;
      }
      const { action, id } = this.parseRouteAction(route);
      const normalized = action === this.urlSyncConfig.actions.create
        ? 'create'
        : action === this.urlSyncConfig.actions.edit
          ? 'edit'
          : action === this.urlSyncConfig.actions.show
            ? 'show'
            : action;

      if (!normalized) {
        if (this.uiMode) {
          this.closeUi({ skipUrl: true });
        }
        return;
      }

      if (normalized === 'create') {
        if (this.uiMode !== 'create') {
          this.createItem({ skipUrl: true });
        }
        return;
      }

      if (normalized === 'show' || normalized === 'edit') {
        if (this.uiMode === normalized && String(this.item?.id) === String(id)) {
          return;
        }
        const opener = normalized === 'show' ? this.showItem : this.updateItem;
        opener.call(this, id, null, { skipUrl: true, fetchIfMissing: true });
      }
    },
  },
  mounted() {
    this.$nextTick(() => {
      this._urlSyncReady = true;
      if (this.urlSyncEnabled) {
        this.applyRouteToUi(this.getRoute());
      }
      // Props externas (crudAction / id) desde rutas con props:true
      if (this.crudAction) {
        const action = this.crudAction;
        const itemId = this.effectiveCrudItemId != null ? this.effectiveCrudItemId : this.id;
        if (action === 'create') {
          this.createItem({ skipUrl: true });
        } else if ((action === 'show' || action === 'edit') && itemId != null) {
          const opener = action === 'show' ? this.showItem : this.updateItem;
          opener.call(this, itemId, null, { skipUrl: true, fetchIfMissing: true });
        }
      }
    });
  },
};
