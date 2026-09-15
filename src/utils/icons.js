/**
 * Registro de iconos b-icon-* compatibles con bootstrap-vue / Bootstrap Icons.
 */
import { defineComponent, h } from 'vue';

/**
 * Iconos usados por el paquete + aliases comunes de bootstrap-vue / consumidores.
 * Cualquier nombre adicional se puede pasar a registerBootstrapIcons(app, { icons: [...] })
 * o se registra on-demand vía installOnDemandIconResolver.
 */
export const DEFAULT_ICON_NAMES = [
  'arrow-clockwise',
  'arrow-down',
  'arrow-left',
  'arrow-right',
  'arrow-up',
  'asterisk',
  'bar-chart',
  'card-list',
  'cart-check',
  'check',
  'check-all',
  'check-circle',
  'check-square',
  'clipboard',
  'clipboard-check',
  'clock-history',
  'cloud-download',
  'cloud-upload',
  'download',
  'eye',
  'facebook',
  'file-earmark',
  'file-text',
  'funnel',
  'gear',
  'github',
  'grid',
  'grid-3x3-gap',
  'info-circle',
  'instagram',
  'kanban',
  'list',
  'pencil',
  'people-fill',
  'person',
  'plus',
  'puzzle',
  'search',
  'sort-down',
  'sort-numeric-down',
  'sort-numeric-up',
  'sort-up',
  'table',
  'telephone',
  'tools',
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

const ICON_RESOLVER_INSTALLED = new WeakMap();

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
 * Convierte el sufijo Pascal de BIcon* a kebab-case: PeopleFill → people-fill
 */
export function pascalIconToKebab(pascal) {
  return String(pascal)
    .replace(/([a-z0-9])([A-Z])/g, '$1-$2')
    .replace(/([A-Z])([A-Z][a-z])/g, '$1-$2')
    .toLowerCase();
}

/**
 * Resuelve el nombre real de Bootstrap Icons.
 */
export function resolveBootstrapIconName(iconName) {
  return ICON_NAME_MAP[iconName] || iconName;
}

/**
 * Extrae el nombre kebab del icono desde un nombre de componente Vue.
 * @returns {string|null}
 */
export function parseIconComponentName(componentName) {
  if (typeof componentName !== 'string') {
    return null;
  }
  if (componentName === 'b-icon' || componentName === 'BIcon') {
    return null;
  }
  const kebabMatch = componentName.match(/^b-icon-(.+)$/);
  if (kebabMatch) {
    return kebabMatch[1];
  }
  const pascalMatch = componentName.match(/^BIcon(.+)$/);
  if (pascalMatch) {
    return pascalIconToKebab(pascalMatch[1]);
  }
  return null;
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
 * Registra un único b-icon-* / BIcon* si aún no existe.
 *
 * @returns {object|null} el wrapper registrado o null
 */
export function ensureIconRegistered(app, BIconComponent, iconName) {
  if (!app || !BIconComponent || !iconName) {
    return null;
  }

  const pascal = iconNameToPascal(iconName);
  const iconComponentName = `BIcon${pascal}`;
  const iconKebabName = `b-icon-${iconName}`;
  const registry = app._context.components;

  if (registry[iconComponentName] || registry[iconKebabName]) {
    return registry[iconComponentName] || registry[iconKebabName];
  }

  const IconWrapper = createIconWrapper(BIconComponent, iconName);
  app.component(iconComponentName, IconWrapper);
  app.component(iconKebabName, IconWrapper);
  return IconWrapper;
}

/**
 * Proxy sobre el registro de componentes para crear b-icon-* on-demand.
 * Así cualquier <b-icon-foo> funciona sin whitelist previa.
 * Registra directo en el target para evitar recursión del Proxy.
 */
export function installOnDemandIconResolver(app, BIconComponent) {
  if (!app || !BIconComponent || ICON_RESOLVER_INSTALLED.get(app)) {
    return;
  }

  const original = app._context.components;
  app._context.components = new Proxy(original, {
    get(target, prop, receiver) {
      if (typeof prop === 'string') {
        const iconName = parseIconComponentName(prop);
        if (iconName) {
          const pascalName = `BIcon${iconNameToPascal(iconName)}`;
          const kebabName = `b-icon-${iconName}`;
          if (
            !Object.prototype.hasOwnProperty.call(target, kebabName) &&
            !Object.prototype.hasOwnProperty.call(target, pascalName)
          ) {
            const IconWrapper = createIconWrapper(BIconComponent, iconName);
            target[pascalName] = IconWrapper;
            target[kebabName] = IconWrapper;
          }
        }
      }
      return Reflect.get(target, prop, receiver);
    },
    has(target, prop) {
      if (typeof prop === 'string' && parseIconComponentName(prop)) {
        return true;
      }
      return Reflect.has(target, prop);
    },
  });

  ICON_RESOLVER_INSTALLED.set(app, true);
}

/**
 * Registra BIcon, b-icon y todos los b-icon-* en la app Vue.
 * Idempotente: no sobrescribe componentes ya registrados.
 * También instala resolución on-demand para cualquier b-icon-* no listado.
 *
 * @param {import('vue').App} app
 * @param {object} options
 * @param {object} options.BIcon - componente BIcon
 * @param {string[]} [options.icons] - lista extra de nombres kebab-case
 * @param {boolean} [options.onDemand=true] - registrar iconos desconocidos al resolver
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
    ensureIconRegistered(app, BIconComponent, iconName);
  });

  if (options.onDemand !== false) {
    installOnDemandIconResolver(app, BIconComponent);
  }
}
