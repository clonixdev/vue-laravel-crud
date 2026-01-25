# Compatibilidad Bootstrap 4 y 5

El componente `vue-laravel-crud` soporta tanto **Bootstrap 4** como **Bootstrap 5** **sin necesidad de `bootstrap-vue`**. Los wrappers internos emulan la API de bootstrap-vue pero funcionan directamente con Bootstrap.

## Configuración

### Bootstrap 4

Para usar Bootstrap 4, instala Bootstrap 4 y Bootstrap Icons:

```bash
npm install bootstrap@^4.6.2 bootstrap-icons
```

Luego configura tu aplicación:

```javascript
import Vue from 'vue';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import 'bootstrap-icons/font/bootstrap-icons.css';
// Nota: Bootstrap 4 requiere jQuery
```

Y usa el componente:

```vue
<template>
  <vue-laravel-crud 
    :bootstrapVersion="4"
    :modelName="'users'"
    :model="model"
    :columns="columns"
  />
</template>
```

### Bootstrap 5

Para usar Bootstrap 5, instala Bootstrap 5 y Bootstrap Icons:

```bash
npm install bootstrap@^5.3.0 bootstrap-icons
```

Luego configura tu aplicación:

```javascript
import Vue from 'vue';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import 'bootstrap-icons/font/bootstrap-icons.css';
```

Y usa el componente especificando la versión:

```vue
<template>
  <vue-laravel-crud 
    :bootstrapVersion="5"
    :modelName="'users'"
    :model="model"
    :columns="columns"
  />
</template>
```

### Detección Automática

También puedes usar detección automática:

```vue
<template>
  <vue-laravel-crud 
    :bootstrapVersion="'auto'"
    :modelName="'users'"
    :model="model"
    :columns="columns"
  />
</template>
```

El componente intentará detectar automáticamente qué versión de Bootstrap está instalada.

## Prop `bootstrapVersion`

- **Tipo**: `Number | String`
- **Valores válidos**: `4`, `5`, o `'auto'`
- **Por defecto**: `'auto'`

## Componentes Soportados

Los siguientes componentes de Bootstrap están disponibles en ambas versiones:

- ✅ `b-button`, `b-button-group`
- ✅ `b-form-group`, `b-form-input`, `b-form-file`, `b-form-radio`, `b-form-checkbox`, `b-form-datepicker`
- ✅ `b-modal`
- ✅ `b-dropdown`, `b-dropdown-item`
- ✅ `b-pagination`
- ✅ `b-spinner`
- ✅ `b-card`, `b-card-header`, `b-card-body`, `b-card-text`, `b-card-footer`
- ✅ `b-row`, `b-col`
- ✅ `b-badge`
- ✅ `b-list-group`, `b-list-group-item`
- ✅ `b-input-group`, `b-input-group-prepend`
- ✅ `b-overlay`
- ✅ `b-sidebar`
- ✅ `b-navbar`, `b-navbar-brand`, `b-navbar-nav`, `b-nav-item`
- ✅ `b-icon` (mapeado a Bootstrap Icons en BS5)

## Diferencias entre Bootstrap 4 y 5

### Clases CSS

Bootstrap 5 cambió algunas clases CSS. El componente maneja esto automáticamente en los wrappers, pero si usas clases personalizadas, ten en cuenta:

- `ml-*` → `ms-*` (margin-left → margin-start)
- `mr-*` → `me-*` (margin-right → margin-end)
- `pl-*` → `ps-*` (padding-left → padding-start)
- `pr-*` → `pe-*` (padding-right → padding-end)

### JavaScript

Bootstrap 5 eliminó jQuery y usa JavaScript vanilla. Los wrappers de Bootstrap 5 usan la API nativa de Bootstrap 5.

### Iconos

- **Bootstrap 4**: BootstrapVue Icons
- **Bootstrap 5**: Bootstrap Icons

El componente mapea automáticamente los iconos de BootstrapVue a Bootstrap Icons cuando se usa Bootstrap 5.

## Migración

### De bootstrap-vue a wrappers nativos

Si estás migrando desde una versión anterior que usaba `bootstrap-vue`:

1. **Elimina bootstrap-vue**:
   ```bash
   npm uninstall bootstrap-vue
   ```

2. **Instala Bootstrap directamente** (4 o 5 según prefieras):
   ```bash
   # Para Bootstrap 4
   npm install bootstrap@^4.6.2
   
   # O para Bootstrap 5
   npm install bootstrap@^5.3.0
   ```

3. **Actualiza tus imports**:
   ```javascript
   // Elimina
   import { BootstrapVue, BootstrapVueIcons } from 'bootstrap-vue';
   import 'bootstrap-vue/dist/bootstrap-vue.css';
   
   // Agrega (Bootstrap 4)
   import 'bootstrap/dist/css/bootstrap.min.css';
   import 'bootstrap/dist/js/bootstrap.bundle.min.js';
   
   // O (Bootstrap 5)
   import 'bootstrap/dist/css/bootstrap.min.css';
   import 'bootstrap/dist/js/bootstrap.bundle.min.js';
   import 'bootstrap-icons/font/bootstrap-icons.css'; // Opcional
   ```

4. **El componente funcionará automáticamente** - no necesitas cambiar nada más. Los wrappers internos emulan la API de bootstrap-vue.

### De Bootstrap 4 a Bootstrap 5

1. Instala Bootstrap 5:
   ```bash
   npm install bootstrap@^5.3.0
   ```

2. Actualiza tus imports:
   ```javascript
   import 'bootstrap/dist/css/bootstrap.min.css';
   import 'bootstrap/dist/js/bootstrap.bundle.min.js';
   import 'bootstrap-icons/font/bootstrap-icons.css'; // Opcional
   ```

3. Actualiza el componente:
   ```vue
   <vue-laravel-crud :bootstrapVersion="5" ... />
   ```

4. Revisa clases CSS personalizadas que usen `ml-*`, `mr-*`, `pl-*`, `pr-*` y actualízalas si es necesario.

## Notas Importantes

- **NO necesitas `bootstrap-vue`** - Los wrappers internos emulan su API
- **Bootstrap Icons es compatible con Bootstrap 4 y 5** - Se recomienda instalarlo para tener iconos completos
- Los componentes mantienen la misma API en ambas versiones
- No hay breaking changes en la API del componente
- El componente detecta automáticamente la versión de Bootstrap instalada
- Los wrappers funcionan directamente con Bootstrap 4 o 5

## Troubleshooting

### Los componentes no se muestran correctamente

1. Verifica que la versión de Bootstrap esté instalada correctamente
2. Asegúrate de importar los estilos CSS de Bootstrap
3. Verifica que `bootstrapVersion` esté configurado correctamente
4. Revisa la consola del navegador para ver advertencias

### Bootstrap 5 JavaScript no funciona

Asegúrate de importar el JavaScript de Bootstrap 5:
```javascript
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
```

### Los iconos no se muestran

Bootstrap Icons es compatible con Bootstrap 4 y 5. Para mostrar iconos correctamente, instala Bootstrap Icons:

```bash
npm install bootstrap-icons
```

Y luego importa el CSS:

```javascript
import 'bootstrap-icons/font/bootstrap-icons.css';
```
