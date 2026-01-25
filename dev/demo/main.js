import Vue from 'vue';
import DemoApp from './DemoApp.vue';

// ============================================
// CONFIGURACIÓN DE BOOTSTRAP
// ============================================
// El componente vue-laravel-crud soporta Bootstrap 4 y 5
// Los wrappers internos emulan la API de bootstrap-vue (sin necesidad de bootstrap-vue)

// ============================================
// CONFIGURACIÓN DE BOOTSTRAP
// ============================================
// Nota: Los imports estáticos se evalúan en tiempo de compilación
// Para cambiar entre Bootstrap 4 y 5, se recarga la página
// Los wrappers detectan automáticamente qué versión está disponible

// Por defecto cargamos Bootstrap 5
// Si el usuario selecciona Bootstrap 4, se recarga la página
// y los wrappers funcionarán con la versión que esté disponible
import 'bootstrap/dist/css/bootstrap.min.css';
// Importar Bootstrap 5 JS - se expone automáticamente en window.bootstrap
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
// Bootstrap Icons (compatible con Bootstrap 4 y 5)
import 'bootstrap-icons/font/bootstrap-icons.css';

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
const commonIcons = ['clipboard', 'check', 'eye', 'pencil', 'trash', 'plus', 'search', 'github', 'grid-3x3-gap', 'table', 'grid', 'kanban', 'funnel', 'puzzle', 'database', 'arrows-move', 'download', 'gear', 'check-square', 'arrow-clockwise', 'cloud-upload', 'cloud-download', 'sort-numeric-down', 'sort-numeric-up', 'card-list'];
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

