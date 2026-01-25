/**
 * Utilidades para detectar y validar la versión de Bootstrap
 */

/**
 * Detecta la versión de Bootstrap instalada
 * @returns {number|string} 4, 5, o 'unknown'
 */
export function detectBootstrapVersion() {
  try {
    // Intentar detectar Bootstrap 5
    if (typeof window !== 'undefined' && window.bootstrap) {
      // Bootstrap 5 expone window.bootstrap
      return 5;
    }
    
    // Intentar detectar bootstrap-vue (Bootstrap 4)
    if (typeof window !== 'undefined' && window.Vue) {
      // Verificar si bootstrap-vue está registrado
      const vue = window.Vue;
      if (vue.options && vue.options._base) {
        // Verificar componentes de bootstrap-vue
        if (vue.options._base.options.components && vue.options._base.options.components['b-button']) {
          return 4;
        }
      }
    }
    
    // Verificar por clases CSS en el DOM
    if (typeof document !== 'undefined') {
      const testEl = document.createElement('div');
      testEl.className = 'd-flex';
      document.body.appendChild(testEl);
      const styles = window.getComputedStyle(testEl);
      // Bootstrap 5 usa diferentes valores por defecto
      // Esta es una heurística simple
      document.body.removeChild(testEl);
    }
    
    return 'unknown';
  } catch (e) {
    console.warn('Error detecting Bootstrap version:', e);
    return 'unknown';
  }
}

/**
 * Valida si una versión de Bootstrap es válida
 * @param {number|string} version - Versión a validar (4, 5, o 'auto')
 * @returns {boolean}
 */
export function isValidBootstrapVersion(version) {
  return version === 4 || version === 5 || version === 'auto' || version === 'unknown';
}

/**
 * Normaliza la versión de Bootstrap
 * Si es 'auto', intenta detectarla, si no puede, retorna 4 como fallback (compatibilidad)
 * @param {number|string} version - Versión a normalizar
 * @returns {number} 4 o 5
 */
export function normalizeBootstrapVersion(version) {
  if (version === 'auto' || version === 'unknown') {
    const detected = detectBootstrapVersion();
    if (detected === 4 || detected === 5) {
      return detected;
    }
    // Fallback a Bootstrap 4 por compatibilidad
    return 4;
  }
  
  if (version === 4 || version === 5) {
    return version;
  }
  
  // Fallback a Bootstrap 4
  return 4;
}

/**
 * Verifica si bootstrap-vue está disponible (Bootstrap 4)
 * @returns {boolean}
 */
export function hasBootstrapVue() {
  try {
    // Intentar importar bootstrap-vue dinámicamente
    // En tiempo de ejecución, verificamos si está disponible
    if (typeof require !== 'undefined') {
      try {
        require.resolve('bootstrap-vue');
        return true;
      } catch (e) {
        return false;
      }
    }
    return false;
  } catch (e) {
    return false;
  }
}

/**
 * Verifica si Bootstrap 5 está disponible
 * @returns {boolean}
 */
export function hasBootstrap5() {
  try {
    if (typeof window !== 'undefined' && window.bootstrap) {
      return true;
    }
    if (typeof require !== 'undefined') {
      try {
        require.resolve('bootstrap');
        // Verificar versión del paquete
        const pkg = require('bootstrap/package.json');
        return pkg && parseInt(pkg.version.split('.')[0]) >= 5;
      } catch (e) {
        return false;
      }
    }
    return false;
  } catch (e) {
    return false;
  }
}
