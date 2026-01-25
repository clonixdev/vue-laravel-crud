import Vue from 'vue';
import DemoApp from './DemoApp.vue';

// ============================================
// CONFIGURACIÓN DE BOOTSTRAP
// ============================================
// El componente vue-laravel-crud soporta Bootstrap 4 y 5
// Los wrappers internos emulan la API de bootstrap-vue (sin necesidad de bootstrap-vue)

// Determinar qué versión de Bootstrap cargar
const getBootstrapVersion = () => {
  if (typeof window !== 'undefined') {
    // Primero verificar URL parameter
    const urlParams = new URLSearchParams(window.location.search);
    const versionFromUrl = urlParams.get('bootstrap');
    if (versionFromUrl === '4' || versionFromUrl === '5') {
      return parseInt(versionFromUrl);
    }
    // Luego verificar localStorage
    const versionFromStorage = localStorage.getItem('bootstrap-version');
    if (versionFromStorage === '4' || versionFromStorage === '5') {
      return parseInt(versionFromStorage);
    }
  }
  return 5; // Por defecto Bootstrap 5
};

const bootstrapVersion = getBootstrapVersion();

// Cargar Bootstrap según la versión seleccionada
if (bootstrapVersion === 4) {
  // Bootstrap 4 requiere jQuery y Popper.js
  // Nota: jQuery debe estar cargado antes de Bootstrap 4
  try {
    require('bootstrap/dist/css/bootstrap.min.css');
    // Bootstrap 4 JS se carga desde CDN o debe estar disponible globalmente
    // Si no está disponible, se usará el fallback manual
  } catch (e) {
    console.warn('Bootstrap 4 CSS no encontrado, usando fallback');
  }
} else {
  // Bootstrap 5 (por defecto)
  import('bootstrap/dist/css/bootstrap.min.css');
  import('bootstrap/dist/js/bootstrap.bundle.min.js');
}

// Bootstrap Icons (compatible con Bootstrap 4 y 5)
import('bootstrap-icons/font/bootstrap-icons.css');

// ============================================
// REGISTRAR COMPONENTES BOOTSTRAP GLOBALMENTE
// ============================================
// Importar y registrar los wrappers Bootstrap para que estén disponibles
// en toda la aplicación, incluso antes de que se monte vue-laravel-crud
import BootstrapPlugin, { Bootstrap } from '../../src/bootstrap-wrappers/index.js';

// Instalar el plugin Bootstrap para registrar todos los componentes
Vue.use(BootstrapPlugin);

// Debug: Verificar que los componentes se registraron
console.log('Bootstrap components registered:', Object.keys(Bootstrap || {}).length, 'components');

// Obtener el componente BIcon para crear wrappers de iconos
const BIconComponent = Bootstrap?.BIcon || BootstrapPlugin.BIcon || BootstrapPlugin.bIcon;

// Registrar iconos dinámicos adicionales que se usan en la demo
const commonIcons = ['clipboard', 'check', 'eye', 'pencil', 'trash', 'plus', 'search', 'github', 'grid-3x3-gap', 'table', 'grid', 'kanban', 'funnel', 'puzzle', 'database', 'arrows-move', 'download', 'gear', 'check-square'];
if (BIconComponent) {
  commonIcons.forEach(iconName => {
    const iconComponentName = `BIcon${iconName.charAt(0).toUpperCase() + iconName.slice(1).replace(/-([a-z])/g, (g) => g[1].toUpperCase())}`;
    const iconKebabName = `b-icon-${iconName}`;
    
    if (!Vue.options.components[iconComponentName] && !Vue.options.components[iconKebabName]) {
      const IconWrapper = Vue.extend({
        name: iconComponentName,
        extends: BIconComponent,
        props: {
          icon: {
            type: String,
            default: iconName
          }
        }
      });
      
      Vue.component(iconComponentName, IconWrapper);
      Vue.component(iconKebabName, IconWrapper);
    }
  });
}

Vue.config.productionTip = false;

new Vue({
  render: (h) => h(DemoApp),
}).$mount('#app');

