import { createApp } from 'vue';
import DemoApp from './DemoApp.vue';

// ============================================
// CONFIGURACIÓN DE BOOTSTRAP
// ============================================
// El componente vue-laravel-crud soporta Bootstrap 4 y 5
// Los wrappers internos emulan la API de bootstrap-vue (sin necesidad de bootstrap-vue)

import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import 'bootstrap-icons/font/bootstrap-icons.css';

import BootstrapPlugin, { Bootstrap, registerBootstrapIcons } from '../../src/bootstrap-wrappers/index.js';

const app = createApp(DemoApp);

app.use(BootstrapPlugin);

// Iconos extra solo usados en la demo (el plugin ya registra los del CRUD)
registerBootstrapIcons(app, {
  BIcon: Bootstrap?.BIcon || BootstrapPlugin.BIcon,
  icons: ['database', 'arrows-move'],
});

console.log('Bootstrap components registered:', Object.keys(Bootstrap || {}).length, 'components');

app.mount('#app');
