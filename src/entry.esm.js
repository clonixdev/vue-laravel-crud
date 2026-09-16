
// Import vue component
import component from './vue-laravel-crud.vue';
import PermissionTreeEditor from './components/PermissionTreeEditor.vue';
import { crudRoutes, normalizeUrlSync } from './mixins/crudUrlSync.js';

// Default export is installable instance of component.
export default /*#__PURE__*/(() => {
  const installable = component;

  installable.install = (app) => {
    app.component('VueLaravelCrud', installable);
    app.component('PermissionTreeEditor', PermissionTreeEditor);
  };
  return installable;
})();

export { PermissionTreeEditor, crudRoutes, normalizeUrlSync };
