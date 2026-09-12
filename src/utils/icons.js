/**
 * Registro de iconos b-icon-* compatibles con bootstrap-vue / Bootstrap Icons.
 */
import { defineComponent, h } from 'vue';

/**
 * Iconos usados por el paquete + aliases comunes de bootstrap-vue.
 * Cualquier nombre adicional se puede pasar a registerBootstrapIcons(app, { icons: [...] }).
 */
export const DEFAULT_ICON_NAMES = [
  'arrow-clockwise',
  'arrow-down',
  'arrow-left',
  'arrow-right',
  'arrow-up',
  'card-list',
  'check',
  'check-circle',
  'check-square',
  'clipboard',
  'clipboard-check',
  'cloud-download',
  'cloud-upload',
  'download',
  'eye',
  'file-earmark',
  'file-text',
  'funnel',
  'gear',
  'github',
  'grid',
  'grid-3x3-gap',
  'kanban',
  'list',
  'pencil',
  'plus',
  'puzzle',
  'search',
  'sort-down',
  'sort-numeric-down',
  'sort-numeric-up',
  'sort-up',
  'table',
  'trash',
  'x-circle',
];

/**
 * Mapeo de nombres bootstrap-vue / legacy → Bootstrap Icons.
 */
export const ICON_NAME_MAP = {
  eye: 'eye',
  pencil: 'pencil',
  trash: 'trash',
  plus: 'plus',
  search: 'search',
  'arrow-clockwise': 'arrow-clockwise',
  'card-list': 'grid-3x3-gap',
  table: 'table',
  'cloud-upload': 'cloud-upload',
  'cloud-download': 'cloud-download',
  'sort-numeric-down': 'sort-numeric-down',
  'sort-numeric-up': 'sort-numeric-up',
  'check-circle': 'check-circle',
  check: 'check',
  'x-circle': 'x-circle',
  github: 'github',
  'grid-3x3-gap': 'grid-3x3-gap',
  'file-text': 'file-text',
  list: 'list',
  'sort-up': 'arrow-up',
  'sort-down': 'arrow-down',
  clipboard: 'clipboard',
  'clipboard-check': 'clipboard-check',
};

/**
 * Convierte kebab-case a PascalCase: sort-numeric-down → SortNumericDown
 */
export function iconNameToPascal(iconName) {
  return String(iconName)
    .split('-')
    .filter(Boolean)
    .map((part) => part.charAt(0).toUpperCase() + part.slice(1))
    .join('');
}

/**
 * Resuelve el nombre real de Bootstrap Icons.
 */
export function resolveBootstrapIconName(iconName) {
  return ICON_NAME_MAP[iconName] || iconName;
}

/**
 * Crea un wrapper <b-icon-{name}> alrededor de BIcon.
 */
export function createIconWrapper(BIconComponent, iconName) {
  const pascal = iconNameToPascal(iconName);
  return defineComponent({
    name: `BIcon${pascal}`,
    props: {
      icon: {
        type: String,
        default: iconName,
      },
    },
    setup(props, { attrs, slots }) {
      return () =>
        h(
          BIconComponent,
          { ...attrs, icon: props.icon || iconName },
          slots
        );
    },
  });
}

/**
 * Registra BIcon, b-icon y todos los b-icon-* en la app Vue.
 * Idempotente: no sobrescribe componentes ya registrados.
 *
 * @param {import('vue').App} app
 * @param {object} options
 * @param {object} options.BIcon - componente BIcon
 * @param {string[]} [options.icons] - lista extra de nombres kebab-case
 */
export function registerBootstrapIcons(app, options = {}) {
  if (!app || !options.BIcon) {
    return;
  }

  const BIconComponent = options.BIcon;
  const icons = Array.from(
    new Set([...(options.icons || []), ...DEFAULT_ICON_NAMES])
  );

  if (!app._context.components.BIcon) {
    app.component('BIcon', BIconComponent);
  }
  if (!app._context.components['b-icon']) {
    app.component('b-icon', BIconComponent);
  }

  icons.forEach((iconName) => {
    const pascal = iconNameToPascal(iconName);
    const iconComponentName = `BIcon${pascal}`;
    const iconKebabName = `b-icon-${iconName}`;

    if (
      app._context.components[iconComponentName] ||
      app._context.components[iconKebabName]
    ) {
      return;
    }

    const IconWrapper = createIconWrapper(BIconComponent, iconName);
    app.component(iconComponentName, IconWrapper);
    app.component(iconKebabName, IconWrapper);
  });
}
