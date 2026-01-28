/**
 * Plugin Vue para componentes Bootstrap (compatible con Bootstrap 4 y 5)
 * Emula la API de bootstrap-vue pero usando Bootstrap directamente (sin bootstrap-vue)
 */

import BButton from './BButton.vue';
import BButtonGroup from './BButtonGroup.vue';
import BFormGroup from './BFormGroup.vue';
import BFormInput from './BFormInput.vue';
import BFormSelect from './BFormSelect.vue';
import BModal from './BModal.vue';
import BDropdown from './BDropdown.vue';
import BDropdownItem from './BDropdownItem.vue';
import BPagination from './BPagination.vue';
import BSpinner from './BSpinner.vue';
import BCard from './BCard.vue';
import BCardHeader from './BCardHeader.vue';
import BCardBody from './BCardBody.vue';
import BCardText from './BCardText.vue';
import BCardFooter from './BCardFooter.vue';
import BContainer from './BContainer.vue';
import BRow from './BRow.vue';
import BCol from './BCol.vue';
import BBadge from './BBadge.vue';
import BListGroup from './BListGroup.vue';
import BListGroupItem from './BListGroupItem.vue';
import BInputGroup from './BInputGroup.vue';
import BInputGroupPrepend from './BInputGroupPrepend.vue';
import BOverlay from './BOverlay.vue';
import BFormFile from './BFormFile.vue';
import BFormRadio from './BFormRadio.vue';
import BFormCheckbox from './BFormCheckbox.vue';
import BFormDatepicker from './BFormDatepicker.vue';
import BIcon from './BIcon.vue';
import BNavbar from './BNavbar.vue';
import BNavbarBrand from './BNavbarBrand.vue';
import BNavbarNav from './BNavbarNav.vue';
import BNavItem from './BNavItem.vue';
import BSidebar from './BSidebar.vue';

// Exportar todos los componentes como objeto (similar a bootstrap-vue)
const BootstrapComponents = {
  BButton,
  BButtonGroup,
  BContainer,
  BFormGroup,
  BFormInput,
  BFormSelect,
  BModal,
  BDropdown,
  BDropdownItem,
  BPagination,
  BSpinner,
  BCard,
  BCardHeader,
  BCardBody,
  BCardText,
  BCardFooter,
  BRow,
  BCol,
  BBadge,
  BListGroup,
  BListGroupItem,
  BInputGroup,
  BInputGroupPrepend,
  BOverlay,
  BFormFile,
  BFormRadio,
  BFormCheckbox,
  BFormDatepicker,
  BIcon,
  BNavbar,
  BNavbarBrand,
  BNavbarNav,
  BNavItem,
  BSidebar,
};

// También exportar con prefijo 'b-' para compatibilidad
const componentsWithPrefix = {};
Object.keys(BootstrapComponents).forEach(key => {
  const prefixedKey = key.charAt(0).toLowerCase() + key.slice(1); // bButton, bFormGroup, etc.
  componentsWithPrefix[prefixedKey] = BootstrapComponents[key];
});

// Plugin Vue
const BootstrapPlugin = {
  install(app) {
    // Registrar todos los componentes globalmente
    Object.keys(BootstrapComponents).forEach(key => {
      app.component(key, BootstrapComponents[key]);
      // También registrar con prefijo 'b-'
      const prefixedName = 'b-' + key.slice(1).replace(/([A-Z])/g, '-$1').toLowerCase();
      app.component(prefixedName, BootstrapComponents[key]);
    });
  },
  ...BootstrapComponents,
  ...componentsWithPrefix,
};

// Export default (para plugin Vue)
export default BootstrapPlugin;

// También exportar como objeto plano para acceso directo a componentes
export const Bootstrap = {
  ...BootstrapComponents,
  ...componentsWithPrefix,
};

// Alias para compatibilidad
export const Bootstrap5 = Bootstrap;

// Exportar componentes individuales
export {
  BButton,
  BButtonGroup,
  BContainer,
  BFormGroup,
  BFormInput,
  BFormSelect,
  BModal,
  BDropdown,
  BDropdownItem,
  BPagination,
  BSpinner,
  BCard,
  BCardHeader,
  BCardBody,
  BCardText,
  BCardFooter,
  BRow,
  BCol,
  BBadge,
  BListGroup,
  BListGroupItem,
  BInputGroup,
  BInputGroupPrepend,
  BOverlay,
  BFormFile,
  BFormRadio,
  BFormCheckbox,
  BFormDatepicker,
  BIcon,
  BNavbar,
  BNavbarBrand,
  BNavbarNav,
  BNavItem,
  BSidebar,
};
