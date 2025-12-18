# Configuración para GitHub Pages

Este proyecto está configurado para publicar la demo en GitHub Pages sin necesidad de un servidor API.

## Características

- ✅ **Modo estático**: Los ejemplos funcionan completamente sin servidor API
- ✅ **Datos mockeados**: Todos los ejemplos usan datos locales cuando están en producción
- ✅ **Build automático**: GitHub Actions construye y despliega automáticamente

## Configuración

### 1. Configurar el repositorio

1. Ve a **Settings** > **Pages** en tu repositorio de GitHub
2. Selecciona la fuente: **Deploy from a branch**
3. Selecciona la rama: **main** (o **master**)
4. Selecciona la carpeta: **/docs**
5. Guarda los cambios

### 2. Actualizar la ruta base (si es necesario)

Si tu repositorio NO se llama `vue-laravel-crud`, actualiza `vue.config.js`:

```js
publicPath: process.env.NODE_ENV === 'production' 
  ? '/tu-nombre-repositorio/'  // Cambia esto
  : '/',
```

### 3. Construir y desplegar

#### Opción A: Automático (recomendado)

El workflow de GitHub Actions se ejecutará automáticamente cuando hagas push a la rama main/master.

#### Opción B: Manual

```bash
# Construir la demo
npm run build:gh-pages

# Los archivos se generarán en la carpeta docs/
# Haz commit y push de los cambios
git add docs/
git commit -m "Deploy demo to GitHub Pages"
git push
```

## Estructura

```
docs/                    # Carpeta de salida para GitHub Pages
  ├── index.html
  ├── static/
  └── .nojekyll         # Evita que Jekyll procese el sitio

.github/
  └── workflows/
      └── deploy-gh-pages.yml  # Workflow de GitHub Actions

dev/
  ├── demo/             # Código fuente de la demo
  │   ├── data/
  │   │   └── mockData.js      # Datos mockeados
  │   └── utils/
  │       └── staticMode.js    # Detección de modo estático
  └── api/              # Solo para desarrollo local
```

## Cómo funciona

1. **Detección automática**: El código detecta si está en GitHub Pages
2. **Datos locales**: Cuando está en modo estático, usa datos mockeados en lugar de la API
3. **Sin servidor**: Todo funciona completamente en el cliente

## Desarrollo local

Para desarrollo local con API:

```bash
npm run demo
```

Para probar el build estático localmente:

```bash
npm run build:gh-pages
# Luego sirve la carpeta docs/ con un servidor estático
npx serve docs
```

## Notas

- Los datos se guardan solo en memoria (no persisten al recargar)
- Las operaciones CRUD funcionan completamente en el cliente
- Todos los ejemplos están disponibles y funcionan sin API

