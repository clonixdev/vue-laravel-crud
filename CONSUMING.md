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

## Build de dist (opcional)

```bash
npm install
npm run build
```

Publicación npm: versionar como `3.x` desde la rama `vue3`.
