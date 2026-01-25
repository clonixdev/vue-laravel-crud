/**
 * Utilidades para compatibilidad de clases CSS entre Bootstrap 4 y 5
 */

/**
 * Convierte clases de Bootstrap 4 a Bootstrap 5
 * Bootstrap 5 cambió algunas clases:
 * - ml-* → ms-* (margin-left → margin-start)
 * - mr-* → me-* (margin-right → margin-end)
 * - pl-* → ps-* (padding-left → padding-start)
 * - pr-* → pe-* (padding-right → padding-end)
 * - text-left → text-start
 * - text-right → text-end
 * - float-left → float-start
 * - float-right → float-end
 * - border-left → border-start
 * - border-right → border-end
 * 
 * @param {string} classes - Clases CSS a convertir
 * @param {number} targetVersion - Versión objetivo (4 o 5)
 * @returns {string} Clases convertidas
 */
export function convertBootstrapClasses(classes, targetVersion = 5) {
  if (!classes || typeof classes !== 'string') {
    return classes;
  }
  
  if (targetVersion === 5) {
    // Convertir de Bootstrap 4 a 5
    return classes
      .replace(/\bml-(\w+)/g, 'ms-$1')  // margin-left → margin-start
      .replace(/\bmr-(\w+)/g, 'me-$1')  // margin-right → margin-end
      .replace(/\bpl-(\w+)/g, 'ps-$1')  // padding-left → padding-start
      .replace(/\bpr-(\w+)/g, 'pe-$1')  // padding-right → padding-end
      .replace(/\btext-left\b/g, 'text-start')
      .replace(/\btext-right\b/g, 'text-end')
      .replace(/\bfloat-left\b/g, 'float-start')
      .replace(/\bfloat-right\b/g, 'float-end')
      .replace(/\bborder-left\b/g, 'border-start')
      .replace(/\bborder-right\b/g, 'border-end')
      .replace(/\bborder-left-(\w+)/g, 'border-start-$1')
      .replace(/\bborder-right-(\w+)/g, 'border-end-$1')
      .replace(/\brounded-left\b/g, 'rounded-start')
      .replace(/\brounded-right\b/g, 'rounded-end');
  } else if (targetVersion === 4) {
    // Convertir de Bootstrap 5 a 4 (revertir)
    return classes
      .replace(/\bms-(\w+)/g, 'ml-$1')
      .replace(/\bme-(\w+)/g, 'mr-$1')
      .replace(/\bps-(\w+)/g, 'pl-$1')
      .replace(/\bpe-(\w+)/g, 'pr-$1')
      .replace(/\btext-start\b/g, 'text-left')
      .replace(/\btext-end\b/g, 'text-right')
      .replace(/\bfloat-start\b/g, 'float-left')
      .replace(/\bfloat-end\b/g, 'float-right')
      .replace(/\bborder-start\b/g, 'border-left')
      .replace(/\bborder-end\b/g, 'border-right')
      .replace(/\bborder-start-(\w+)/g, 'border-left-$1')
      .replace(/\bborder-end-(\w+)/g, 'border-right-$1')
      .replace(/\brounded-start\b/g, 'rounded-left')
      .replace(/\brounded-end\b/g, 'rounded-right');
  }
  
  return classes;
}

/**
 * Normaliza clases CSS según la versión de Bootstrap
 * @param {string} classes - Clases CSS
 * @param {number} currentVersion - Versión actual de Bootstrap
 * @param {number} targetVersion - Versión objetivo
 * @returns {string} Clases normalizadas
 */
export function normalizeBootstrapClasses(classes, currentVersion, targetVersion) {
  if (currentVersion === targetVersion) {
    return classes;
  }
  
  return convertBootstrapClasses(classes, targetVersion);
}
