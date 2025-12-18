// Utilidad para detectar si estamos en modo estático (GitHub Pages)
// En modo estático, no hay servidor API, así que usamos datos locales

export function isStaticMode() {
  // Detectar si estamos en GitHub Pages o en producción sin API
  if (typeof window === 'undefined') {
    return process.env.NODE_ENV === 'production';
  }
  
  // En desarrollo, solo usar modo estático si no hay localhost
  if (process.env.NODE_ENV === 'development') {
    return false; // En desarrollo siempre usar API si está disponible
  }
  
  return (
    process.env.NODE_ENV === 'production' ||
    window.location.hostname.includes('github.io') ||
    (window.location.hostname.includes('github.com') && window.location.pathname.includes('/vue-laravel-crud/'))
  );
}

