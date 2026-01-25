/**
 * Factory para obtener componentes de Bootstrap según la versión
 */

import { normalizeBootstrapVersion } from './bootstrap-version.js';

// Import estático de wrappers Bootstrap (se resuelve en build time si están disponibles)
// Nota: En contextos ESM, esto puede fallar, pero el factory tiene fallbacks
let BootstrapWrappersStatic = null;
try {
  if (typeof require !== 'undefined') {
    BootstrapWrappersStatic = require('../bootstrap-wrappers');
  }
} catch (e) {
  // Los wrappers no están disponibles en este contexto
  BootstrapWrappersStatic = null;
}

// Cache para wrappers Bootstrap (compatibles con BS4 y BS5)
let bootstrapComponents = null;
let bootstrapAvailable = null;

/**
 * Carga wrappers de Bootstrap (compatibles con BS4 y BS5)
 * @returns {Object|null}
 */
function loadBootstrapComponents() {
  if (bootstrapAvailable !== null) {
    return bootstrapComponents;
  }
  
  // Usar el import estático si está disponible
  if (BootstrapWrappersStatic) {
    // El módulo puede exportar como default (plugin) o como objeto
    const module = BootstrapWrappersStatic.default || BootstrapWrappersStatic;
    
    // Si es el plugin, extraer los componentes
    if (module.Bootstrap) {
      bootstrapComponents = module.Bootstrap;
    } else if (module.Bootstrap5) {
      // Compatibilidad con nombre anterior
      bootstrapComponents = module.Bootstrap5;
    } else {
      // Si es un plugin Vue, extraer los componentes del objeto
      // Los plugins Vue exportan los componentes como propiedades del objeto
      bootstrapComponents = {};
      Object.keys(module).forEach(key => {
        // Excluir propiedades especiales del plugin
        if (key !== 'install' && key !== 'Bootstrap' && key !== 'Bootstrap5') {
          const component = module[key];
          // Verificar que sea un componente Vue válido
          if (component && (typeof component === 'object' || typeof component === 'function')) {
            // Si tiene name, __file, render o template, es un componente Vue
            if (component.name || component.__file || component.render || component.template || (component.options && component.options.name)) {
              bootstrapComponents[key] = component;
              // También agregar con prefijo 'b-' si es un nombre PascalCase
              if (key.startsWith('B') && key.length > 1) {
                const prefixedName = 'b-' + key.slice(1).replace(/([A-Z])/g, '-$1').toLowerCase();
                bootstrapComponents[prefixedName] = component;
              }
              // También agregar con nombre camelCase
              const camelName = key.charAt(0).toLowerCase() + key.slice(1);
              bootstrapComponents[camelName] = component;
            }
          }
        }
      });
    }
    bootstrapAvailable = true;
    return bootstrapComponents;
  }
  
  // Intentar require dinámico como fallback
  try {
    if (typeof require !== 'undefined') {
      const BootstrapWrappers = require('../bootstrap-wrappers');
      const module = BootstrapWrappers.default || BootstrapWrappers;
      
      if (module.Bootstrap) {
        bootstrapComponents = module.Bootstrap;
      } else if (module.Bootstrap5) {
        bootstrapComponents = module.Bootstrap5;
      } else {
        // Extraer componentes del plugin
        bootstrapComponents = {};
        Object.keys(module).forEach(key => {
          if (key !== 'install' && key !== 'Bootstrap' && key !== 'Bootstrap5') {
            const component = module[key];
            if (component && (typeof component === 'object' || typeof component === 'function')) {
              if (component.name || component.__file || component.render || component.template || (component.options && component.options.name)) {
                bootstrapComponents[key] = component;
                if (key.startsWith('B') && key.length > 1) {
                  const prefixedName = 'b-' + key.slice(1).replace(/([A-Z])/g, '-$1').toLowerCase();
                  bootstrapComponents[prefixedName] = component;
                }
                const camelName = key.charAt(0).toLowerCase() + key.slice(1);
                bootstrapComponents[camelName] = component;
              }
            }
          }
        });
      }
      bootstrapAvailable = true;
      return bootstrapComponents;
    }
  } catch (e) {
    // Wrappers Bootstrap no están disponibles
    console.warn('Error loading Bootstrap components:', e);
  }
  
  bootstrapAvailable = false;
  return null;
}

/**
 * Obtiene un componente de Bootstrap según la versión
 * @param {string} componentName - Nombre del componente (ej: 'b-button' o 'BButton')
 * @param {number|string} version - Versión de Bootstrap (4, 5, o 'auto')
 * @returns {Object|null} Componente Vue o null si no está disponible
 */
export function getBootstrapComponent(componentName, version = 'auto') {
  const normalizedVersion = normalizeBootstrapVersion(version);
  
  // Normalizar nombre del componente (b-button -> BButton, BButton -> BButton)
  const normalizedName = componentName.charAt(0).toUpperCase() + componentName.slice(1).replace(/-([a-z])/g, (g) => g[1].toUpperCase());
  const prefixedName = 'b-' + componentName.replace(/^b-/, '').replace(/([A-Z])/g, '-$1').toLowerCase();
  
  // Los wrappers son compatibles con Bootstrap 4 y 5
  const BootstrapWrappers = loadBootstrapComponents();
  if (BootstrapWrappers) {
    if (BootstrapWrappers[normalizedName]) return BootstrapWrappers[normalizedName];
    if (BootstrapWrappers[componentName]) return BootstrapWrappers[componentName];
    if (BootstrapWrappers[prefixedName]) return BootstrapWrappers[prefixedName];
  }
  
  console.error(`Component ${componentName} not found for Bootstrap ${normalizedVersion}`);
  return null;
}

/**
 * Obtiene todos los componentes de Bootstrap según la versión
 * @param {number|string} version - Versión de Bootstrap (4, 5, o 'auto')
 * @returns {Object} Objeto con todos los componentes disponibles
 */
export function getBootstrapComponents(version = 'auto') {
  const normalizedVersion = normalizeBootstrapVersion(version);
  
  // Los wrappers funcionan con Bootstrap 4 y 5
  const BootstrapWrappers = loadBootstrapComponents();
  if (BootstrapWrappers) {
    return BootstrapWrappers;
  }
  
  return {};
}

/**
 * Verifica si un componente está disponible para una versión específica
 * @param {string} componentName - Nombre del componente
 * @param {number|string} version - Versión de Bootstrap
 * @returns {boolean}
 */
export function hasComponent(componentName, version = 'auto') {
  const component = getBootstrapComponent(componentName, version);
  return component !== null;
}
