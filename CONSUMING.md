# Consumir vue-laravel-crud v3 (Vue 3 + Bootstrap 5)

## Desde plantillas locales (recomendado en desarrollo)

En `package.json` del consumidor:

```json
"vue-laravel-crud": "file:../vue-laravel-crud"
```

El campo `exports` apunta a `src/entry.esm.js` para que **Vite** compile los SFC del paquete.

## Dependencias peer

```bash
npm install vue@^3.4 bootstrap@^5.3 bootstrap-icons@^1.11
# Vuex 4 solo si usás useVuexORM
npm install vuex@^4.1 @vuex-orm/core @vuex-orm/plugin-axios
```

En el entry del consumidor:

```js
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import 'bootstrap-icons/font/bootstrap-icons.css';
import VueLaravelCrud from 'vue-laravel-crud';

app.use(VueLaravelCrud);
// o: app.component('VueLaravelCrud', VueLaravelCrud);
```

`bootstrapVersion` por defecto es **5**.

## Fixes 3.0.3

- `filtersVisible` / `filterSidebarOpen` se proveen como objetos reactivos (mismo patrón que `loading`), para que sidebar, filtros inline y `hideColumn` reaccionen al abrir/cerrar.
- Cleanup forzado de backdrop al desmontar `BModal`.

## Fixes 3.0.2

- `hideColumn` en columnas de tabla (parche portado desde easy2 / 1.8.4): oculta la columna y mantiene alineación cuando los filtros inline están abiertos.

## Fixes 3.0.1

- Backdrop del modal: limpieza correcta al cerrar (Vue 3 + Bootstrap 5).
- Iconos: `BootstrapPlugin` registra `b-icon-*` usados por el CRUD (Bootstrap Icons).

## Build de dist (opcional)

```bash
npm install
npm run build
```

## Publicar en npm

Desde la rama `vue3` del repo del paquete:

```bash
cd /ruta/a/vue-laravel-crud
npm login
npm run build
npm version patch   # o minor/major según el cambio
npm publish --access public
```

Publicación npm: versionar como `3.x` desde la rama `vue3`.
