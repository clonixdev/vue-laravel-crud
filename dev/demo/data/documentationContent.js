// Contenido de la documentación en formato markdown
// Este archivo se genera automáticamente desde CONFIGURACIONES.md
export const documentationContent = `# Documentación Completa de Configuraciones - Vue Laravel CRUD

Este documento contiene la referencia completa de todas las props y configuraciones disponibles en el componente \`vue-laravel-crud\`.

## Índice

1. [Configuraciones Básicas](#configuraciones-básicas)
2. [Configuraciones de Visualización](#configuraciones-de-visualización)
3. [Configuraciones de Funcionalidad](#configuraciones-de-funcionalidad)
4. [Configuraciones de Comportamiento](#configuraciones-de-comportamiento)
5. [Configuraciones de Mensajes](#configuraciones-de-mensajes)
6. [Configuraciones de Estilos](#configuraciones-de-estilos)
7. [Configuraciones Avanzadas](#configuraciones-avanzadas)
8. [Slots Disponibles](#slots-disponibles)
9. [Eventos Disponibles](#eventos-disponibles)

---

## Configuraciones Básicas

### \`title\`
- **Tipo:** \`String\`
- **Requerido:** No
- **Descripción:** Título que se muestra en el header del componente
- **Ejemplo:**
\`\`\`vue
<VueLaravelCrud title="Gestión de Usuarios" />
\`\`\`

### \`modelName\`
- **Tipo:** \`String\`
- **Requerido:** Sí (si \`ajax=true\`)
- **Descripción:** Nombre del modelo para las peticiones API. Se usa para construir las URLs: \`GET /api/{modelName}\`, \`POST /api/{modelName}\`, etc.
- **Ejemplo:**
\`\`\`vue
<VueLaravelCrud modelName="users" />
\`\`\`

### \`model\`
- **Tipo:** \`Object | Function\`
- **Requerido:** Sí
- **Default:** \`{ id: 0 }\`
- **Descripción:** Objeto con la estructura de datos del formulario. Define los campos que tendrá el formulario de crear/editar.
- **Ejemplo:**
\`\`\`vue
<VueLaravelCrud :model="{ name: '', email: '', age: null }" />
\`\`\`

### \`models\`
- **Tipo:** \`Array\`
- **Requerido:** Sí (si \`ajax=false\`)
- **Default:** \`[]\`
- **Descripción:** Array de datos locales que se usarán cuando \`ajax=false\`. Las operaciones CRUD se realizan en memoria.
- **Ejemplo:**
\`\`\`vue
<VueLaravelCrud :models="localData" :ajax="false" />
\`\`\`

### \`ajax\`
- **Tipo:** \`Boolean\`
- **Requerido:** No
- **Default:** \`true\`
- **Descripción:** Habilita/deshabilita las peticiones AJAX. \`true\` = usa API (requiere \`apiUrl\`), \`false\` = usa datos locales (requiere \`models\`)
- **Ejemplo:**
\`\`\`vue
<VueLaravelCrud :ajax="true" apiUrl="/api" />
\`\`\`

### \`apiUrl\`
- **Tipo:** \`String\`
- **Requerido:** Sí (si \`ajax=true\`)
- **Default:** \`"/api"\`
- **Descripción:** URL base de la API. Las peticiones se harán a: \`{apiUrl}/{modelName}\`
- **Ejemplo:**
\`\`\`vue
<VueLaravelCrud apiUrl="http://localhost:3001/api" />
\`\`\`

### \`columns\`
- **Tipo:** \`Array\`
- **Requerido:** Sí
- **Default:** \`[{ label: "Id", prop: "id", type: "number" }]\`
- **Descripción:** Array de columnas que se mostrarán en la tabla. Cada columna puede tener:
  - \`label\`: Texto del encabezado
  - \`prop\`: Propiedad del objeto a mostrar
  - \`type\`: Tipo de dato (\`text\`, \`number\`, \`date\`, \`boolean\`, \`state\`, \`actions\`)
  - \`width\`: Ancho de la columna (opcional)
  - \`format\`: Formato para fechas (opcional, ej: \`"DD/MM/YYYY"\`)
  - \`options\`: Opciones para tipo \`state\` (array de \`{id, text}\`)
- **Ejemplo:**
\`\`\`vue
<VueLaravelCrud :columns="[
  { label: 'ID', prop: 'id', type: 'number', width: '80px' },
  { label: 'Nombre', prop: 'name', type: 'text' },
  { label: 'Estado', prop: 'status', type: 'state', options: [
    { id: 'active', text: 'Activo' },
    { id: 'inactive', text: 'Inactivo' }
  ]},
  { label: 'Creado', prop: 'created_at', type: 'date', format: 'DD/MM/YYYY' },
  { label: 'Acciones', prop: 'actions', type: 'actions' }
]" />
\`\`\`

### \`filter\`
- **Tipo:** \`Array\`
- **Requerido:** No
- **Default:** \`[]\`
- **Descripción:** Array de filtros predefinidos
- **Ejemplo:**
\`\`\`vue
<VueLaravelCrud :filter="[
  { prop: 'status', value: 'active' }
]" />
\`\`\`

---

## Configuraciones de Visualización

### \`displayMode\`
- **Tipo:** \`Number\`
- **Requerido:** No
- **Default:** \`1\`
- **Descripción:** Modo de visualización:
  - \`1\` = Tabla (Table)
  - \`2\` = Tarjetas (Cards)
  - \`3\` = Lista (List)
  - \`4\` = Kanban
- **Ejemplo:**
\`\`\`vue
<VueLaravelCrud :displayMode="2" />
\`\`\`

### \`displayModeToggler\`
- **Tipo:** \`Boolean\`
- **Requerido:** No
- **Default:** \`false\`
- **Descripción:** Muestra botones para cambiar entre modos de visualización
- **Ejemplo:**
\`\`\`vue
<VueLaravelCrud :displayModeToggler="true" />
\`\`\`

### \`colXs\`, \`colSm\`, \`colMd\`, \`colLg\`, \`colXl\`
- **Tipo:** \`Number\`
- **Requerido:** No
- **Default:** \`colXs: 12\`, \`colSm: 12\`, \`colMd: 6\`, \`colLg: 4\`, \`colXl: 4\`
- **Descripción:** Columnas de Bootstrap para diferentes breakpoints en vista de tarjetas
- **Ejemplo:**
\`\`\`vue
<VueLaravelCrud 
  :colXs="12"
  :colSm="6"
  :colMd="4"
  :colLg="3"
  :colXl="3"
/>
\`\`\`

### \`masonryEnabled\`
- **Tipo:** \`Boolean\`
- **Requerido:** No
- **Default:** \`false\`
- **Descripción:** Habilita layout masonry (ladrillo) para tarjetas
- **Ejemplo:**
\`\`\`vue
<VueLaravelCrud :masonryEnabled="true" />
\`\`\`

### \`masonrySort\`
- **Tipo:** \`Boolean\`
- **Requerido:** No
- **Default:** \`false\`
- **Descripción:** Ordena elementos en layout masonry
- **Ejemplo:**
\`\`\`vue
<VueLaravelCrud :masonrySort="true" />
\`\`\`

### \`masonryColumns\`
- **Tipo:** \`Number\`
- **Requerido:** No
- **Default:** \`3\`
- **Descripción:** Número de columnas en layout masonry
- **Ejemplo:**
\`\`\`vue
<VueLaravelCrud :masonryColumns="4" />
\`\`\`

---

## Configuraciones de Funcionalidad

### \`enableFilters\`
- **Tipo:** \`Boolean\`
- **Requerido:** No
- **Default:** \`false\`
- **Descripción:** Habilita el panel de filtros avanzados
- **Ejemplo:**
\`\`\`vue
<VueLaravelCrud :enableFilters="true" />
\`\`\`

### \`showSearch\`
- **Tipo:** \`Boolean\`
- **Requerido:** No
- **Default:** \`true\`
- **Descripción:** Muestra el campo de búsqueda global
- **Ejemplo:**
\`\`\`vue
<VueLaravelCrud :showSearch="true" />
\`\`\`

### \`search\`
- **Tipo:** \`String\`
- **Requerido:** No
- **Default:** \`""\`
- **Descripción:** Texto de búsqueda inicial
- **Ejemplo:**
\`\`\`vue
<VueLaravelCrud :search="'Juan'" />
\`\`\`

### \`searchPlaceholder\`
- **Tipo:** \`String\`
- **Requerido:** No
- **Default:** \`"Buscar..."\`
- **Descripción:** Placeholder del campo de búsqueda
- **Ejemplo:**
\`\`\`vue
<VueLaravelCrud searchPlaceholder="Buscar usuarios..." />
\`\`\`

### \`sortable\`
- **Tipo:** \`Boolean\`
- **Requerido:** No
- **Default:** \`false\`
- **Descripción:** Permite ordenar las columnas haciendo click en los encabezados
- **Ejemplo:**
\`\`\`vue
<VueLaravelCrud :sortable="true" />
\`\`\`

### \`orderable\`
- **Tipo:** \`Boolean\`
- **Requerido:** No
- **Default:** \`false\`
- **Descripción:** Habilita el ordenamiento de filas mediante drag & drop
- **Ejemplo:**
\`\`\`vue
<VueLaravelCrud :orderable="true" orderProp="order" />
\`\`\`

### \`orderProp\`
- **Tipo:** \`String\`
- **Requerido:** No
- **Default:** \`"order"\`
- **Descripción:** Nombre de la propiedad que almacena el orden
- **Ejemplo:**
\`\`\`vue
<VueLaravelCrud :orderable="true" orderProp="position" />
\`\`\`

### \`infiniteScroll\`
- **Tipo:** \`Boolean\`
- **Requerido:** No
- **Default:** \`false\`
- **Descripción:** Habilita el scroll infinito para cargar más elementos automáticamente
- **Ejemplo:**
\`\`\`vue
<VueLaravelCrud :infiniteScroll="true" :limit="10" />
\`\`\`

### \`validate\`
- **Tipo:** \`Boolean\`
- **Requerido:** No
- **Default:** \`false\`
- **Descripción:** Habilita la validación de formularios
- **Ejemplo:**
\`\`\`vue
<VueLaravelCrud :validate="true" />
\`\`\`

### \`grouped\`
- **Tipo:** \`Boolean\`
- **Requerido:** No
- **Default:** \`false\`
- **Descripción:** Habilita la agrupación de elementos
- **Ejemplo:**
\`\`\`vue
<VueLaravelCrud :grouped="true" groupedAttribute="status" />
\`\`\`

### \`groupedAttribute\`
- **Tipo:** \`String\`
- **Requerido:** No
- **Default:** \`"name"\`
- **Descripción:** Campo por el cual agrupar los elementos
- **Ejemplo:**
\`\`\`vue
<VueLaravelCrud :grouped="true" groupedAttribute="status" />
\`\`\`

### \`groupedLabelPre\`
- **Tipo:** \`String\`
- **Requerido:** No
- **Default:** \`""\`
- **Descripción:** Texto antes del label del grupo
- **Ejemplo:**
\`\`\`vue
<VueLaravelCrud groupedLabelPre="Estado: " />
\`\`\`

### \`groupedLabelAfter\`
- **Tipo:** \`String\`
- **Requerido:** No
- **Default:** \`""\`
- **Descripción:** Texto después del label del grupo
- **Ejemplo:**
\`\`\`vue
<VueLaravelCrud groupedLabelAfter=" elementos" />
\`\`\`

### \`groupedSplit\`
- **Tipo:** \`Boolean\`
- **Requerido:** No
- **Default:** \`false\`
- **Descripción:** Separa grupos en columnas diferentes (útil para Kanban)
- **Ejemplo:**
\`\`\`vue
<VueLaravelCrud :grouped="true" :groupedSplit="true" />
\`\`\`

### \`bulkDelete\`
- **Tipo:** \`Boolean\`
- **Requerido:** No
- **Default:** \`false\`
- **Descripción:** Habilita la eliminación masiva de elementos seleccionados
- **Ejemplo:**
\`\`\`vue
<VueLaravelCrud :bulkDelete="true" />
\`\`\`

### \`showImport\`
- **Tipo:** \`Boolean\`
- **Requerido:** No
- **Default:** \`false\`
- **Descripción:** Muestra el botón de importar datos
- **Ejemplo:**
\`\`\`vue
<VueLaravelCrud :showImport="true" />
\`\`\`

### \`showExport\`
- **Tipo:** \`Boolean\`
- **Requerido:** No
- **Default:** \`false\`
- **Descripción:** Muestra el botón de exportar datos
- **Ejemplo:**
\`\`\`vue
<VueLaravelCrud :showExport="true" />
\`\`\`

---

## Configuraciones de Comportamiento

### \`hideModalAfterSave\`
- **Tipo:** \`Boolean\`
- **Requerido:** No
- **Default:** \`true\`
- **Descripción:** Oculta el modal después de guardar (crear o actualizar)
- **Ejemplo:**
\`\`\`vue
<VueLaravelCrud :hideModalAfterSave="true" />
\`\`\`

### \`hideModalAfterCreate\`
- **Tipo:** \`Boolean\`
- **Requerido:** No
- **Default:** \`false\`
- **Descripción:** Oculta el modal solo después de crear
- **Ejemplo:**
\`\`\`vue
<VueLaravelCrud :hideModalAfterCreate="true" />
\`\`\`

### \`hideModalAfterUpdate\`
- **Tipo:** \`Boolean\`
- **Requerido:** No
- **Default:** \`false\`
- **Descripción:** Oculta el modal solo después de actualizar
- **Ejemplo:**
\`\`\`vue
<VueLaravelCrud :hideModalAfterUpdate="true" />
\`\`\`

### \`refreshAfterSave\`
- **Tipo:** \`Boolean\`
- **Requerido:** No
- **Default:** \`true\`
- **Descripción:** Refresca los datos después de guardar
- **Ejemplo:**
\`\`\`vue
<VueLaravelCrud :refreshAfterSave="true" />
\`\`\`

### \`showPaginator\`
- **Tipo:** \`Boolean\`
- **Requerido:** No
- **Default:** \`true\`
- **Descripción:** Muestra/oculta la paginación
- **Ejemplo:**
\`\`\`vue
<VueLaravelCrud :showPaginator="true" />
\`\`\`

### \`showCreateBtn\`
- **Tipo:** \`Boolean\`
- **Requerido:** No
- **Default:** \`true\`
- **Descripción:** Muestra/oculta el botón de crear
- **Ejemplo:**
\`\`\`vue
<VueLaravelCrud :showCreateBtn="true" />
\`\`\`

### \`showHeader\`
- **Tipo:** \`Boolean\`
- **Requerido:** No
- **Default:** \`true\`
- **Descripción:** Muestra/oculta el header completo
- **Ejemplo:**
\`\`\`vue
<VueLaravelCrud :showHeader="true" />
\`\`\`

### \`showTitle\`
- **Tipo:** \`Boolean\`
- **Requerido:** No
- **Default:** \`true\`
- **Descripción:** Muestra/oculta el título
- **Ejemplo:**
\`\`\`vue
<VueLaravelCrud :showTitle="true" />
\`\`\`

### \`limit\`
- **Tipo:** \`Number\`
- **Requerido:** No
- **Default:** \`20\`
- **Descripción:** Número de elementos por página
- **Ejemplo:**
\`\`\`vue
<VueLaravelCrud :limit="10" />
\`\`\`

### \`selectHover\`
- **Tipo:** \`Boolean\`
- **Requerido:** No
- **Default:** \`false\`
- **Descripción:** Selecciona elementos al pasar el mouse sobre ellos
- **Ejemplo:**
\`\`\`vue
<VueLaravelCrud :selectHover="true" />
\`\`\`

### \`selectClick\`
- **Tipo:** \`Boolean\`
- **Requerido:** No
- **Default:** \`false\`
- **Descripción:** Selecciona elementos al hacer click en ellos
- **Ejemplo:**
\`\`\`vue
<VueLaravelCrud :selectClick="true" />
\`\`\`

### \`showPrincipalSortBtn\`
- **Tipo:** \`Boolean\`
- **Requerido:** No
- **Default:** \`false\`
- **Descripción:** Muestra botón de ordenamiento principal
- **Ejemplo:**
\`\`\`vue
<VueLaravelCrud :showPrincipalSortBtn="true" principalSortColumn="name" />
\`\`\`

### \`principalSortColumn\`
- **Tipo:** \`String\`
- **Requerido:** No
- **Default:** \`"id"\`
- **Descripción:** Columna para ordenamiento principal
- **Ejemplo:**
\`\`\`vue
<VueLaravelCrud principalSortColumn="name" />
\`\`\`

---

## Configuraciones de Mensajes

### \`messageNew\`
- **Tipo:** \`String\`
- **Requerido:** No
- **Default:** \`"Nuevo"\`
- **Descripción:** Texto del botón "Nuevo"
- **Ejemplo:**
\`\`\`vue
<VueLaravelCrud messageNew="➕ Agregar Nuevo" />
\`\`\`

### \`messageSave\`
- **Tipo:** \`String\`
- **Requerido:** No
- **Default:** \`"Guardar"\`
- **Descripción:** Texto del botón "Guardar"
- **Ejemplo:**
\`\`\`vue
<VueLaravelCrud messageSave="💾 Guardar Cambios" />
\`\`\`

### \`messageRemove\`
- **Tipo:** \`String\`
- **Requerido:** No
- **Default:** \`"BORRAR"\`
- **Descripción:** Texto del botón "Eliminar"
- **Ejemplo:**
\`\`\`vue
<VueLaravelCrud messageRemove="🗑️ ELIMINAR" />
\`\`\`

### \`messageRemoveConfirm\`
- **Tipo:** \`String\`
- **Requerido:** No
- **Default:** \`"¿Esta seguro de borrar este elemento?"\`
- **Descripción:** Mensaje de confirmación para eliminar un elemento
- **Ejemplo:**
\`\`\`vue
<VueLaravelCrud messageRemoveConfirm="⚠️ ¿Estás seguro de eliminar este elemento?" />
\`\`\`

### \`messageRemoveBulkConfirm\`
- **Tipo:** \`String\`
- **Requerido:** No
- **Default:** \`"¿Esta seguro de borrar los elementos seleccionados?"\`
- **Descripción:** Mensaje de confirmación para eliminación masiva
- **Ejemplo:**
\`\`\`vue
<VueLaravelCrud messageRemoveBulkConfirm="⚠️ ¿Eliminar los elementos seleccionados?" />
\`\`\`

### \`messageImport\`
- **Tipo:** \`String\`
- **Requerido:** No
- **Default:** \`"Importar"\`
- **Descripción:** Texto del botón "Importar"
- **Ejemplo:**
\`\`\`vue
<VueLaravelCrud messageImport="📥 Importar Datos" />
\`\`\`

### \`messageExport\`
- **Tipo:** \`String\`
- **Requerido:** No
- **Default:** \`"Exportar"\`
- **Descripción:** Texto del botón "Exportar"
- **Ejemplo:**
\`\`\`vue
<VueLaravelCrud messageExport="📤 Exportar Datos" />
\`\`\`

### \`messageEmptyResults\`
- **Tipo:** \`String\`
- **Requerido:** No
- **Default:** \`"No se han encontrado resultados"\`
- **Descripción:** Mensaje cuando no hay resultados
- **Ejemplo:**
\`\`\`vue
<VueLaravelCrud messageEmptyResults="🔍 No se encontraron resultados" />
\`\`\`

### \`messageNoMore\`
- **Tipo:** \`String\`
- **Requerido:** No
- **Default:** \`"No hay más elementos para mostrar."\`
- **Descripción:** Mensaje cuando no hay más elementos (scroll infinito)
- **Ejemplo:**
\`\`\`vue
<VueLaravelCrud messageNoMore="✅ Has visto todos los elementos" />
\`\`\`

### \`messageLoading\`
- **Tipo:** \`String\`
- **Requerido:** No
- **Default:** \`"Cargando..."\`
- **Descripción:** Mensaje mientras carga
- **Ejemplo:**
\`\`\`vue
<VueLaravelCrud messageLoading="⏳ Cargando información..." />
\`\`\`

### \`messageDefaultValidationError\`
- **Tipo:** \`String\`
- **Requerido:** No
- **Default:** \`"Por favor controle el formulario, contiene errores."\`
- **Descripción:** Mensaje de error de validación por defecto
- **Ejemplo:**
\`\`\`vue
<VueLaravelCrud messageDefaultValidationError="❌ Por favor complete todos los campos requeridos" />
\`\`\`

---

## Configuraciones de Estilos

### \`cardClass\`
- **Tipo:** \`String\`
- **Requerido:** No
- **Default:** \`""\`
- **Descripción:** Clases CSS adicionales para las tarjetas
- **Ejemplo:**
\`\`\`vue
<VueLaravelCrud cardClass="shadow-sm border-primary" />
\`\`\`

### \`listContainerClass\`
- **Tipo:** \`String\`
- **Requerido:** No
- **Default:** \`""\`
- **Descripción:** Clases CSS para el contenedor de tarjetas/lista
- **Ejemplo:**
\`\`\`vue
<VueLaravelCrud listContainerClass="p-3 bg-light" />
\`\`\`

### \`listItemClass\`
- **Tipo:** \`String\`
- **Requerido:** No
- **Default:** \`""\`
- **Descripción:** Clases CSS para cada tarjeta/elemento individual
- **Ejemplo:**
\`\`\`vue
<VueLaravelCrud listItemClass="mb-3" />
\`\`\`

### \`tableContainerClass\`
- **Tipo:** \`String\`
- **Requerido:** No
- **Default:** \`""\`
- **Descripción:** Clases CSS adicionales para el contenedor de la tabla
- **Ejemplo:**
\`\`\`vue
<VueLaravelCrud tableContainerClass="table-responsive" />
\`\`\`

### \`tableClass\`
- **Tipo:** \`String\`
- **Requerido:** No
- **Default:** \`""\`
- **Descripción:** Clases CSS adicionales para la tabla
- **Ejemplo:**
\`\`\`vue
<VueLaravelCrud tableClass="table-striped table-hover" />
\`\`\`

### \`cardHideFooter\`
- **Tipo:** \`Boolean\`
- **Requerido:** No
- **Default:** \`false\`
- **Descripción:** Oculta el footer de las tarjetas
- **Ejemplo:**
\`\`\`vue
<VueLaravelCrud :cardHideFooter="true" />
\`\`\`

---

## Configuraciones Avanzadas

### \`useVuexORM\`
- **Tipo:** \`Boolean\`
- **Requerido:** No
- **Default:** \`false\`
- **Descripción:** Usa Vuex ORM para gestión de datos
- **Ejemplo:**
\`\`\`vue
<VueLaravelCrud :useVuexORM="true" />
\`\`\`

### \`vuexInitRelations\`
- **Tipo:** \`Boolean | Array\`
- **Requerido:** No
- **Default:** \`true\`
- **Descripción:** Inicializa relaciones en Vuex ORM
- **Ejemplo:**
\`\`\`vue
<VueLaravelCrud :vuexInitRelations="true" />
\`\`\`

### \`vuexLocalforage\`
- **Tipo:** \`Boolean\`
- **Requerido:** No
- **Default:** \`false\`
- **Descripción:** Usa localforage con Vuex ORM
- **Ejemplo:**
\`\`\`vue
<VueLaravelCrud :vuexLocalforage="true" />
\`\`\`

### \`createMultipart\`
- **Tipo:** \`Boolean\`
- **Requerido:** No
- **Default:** \`false\`
- **Descripción:** Usa FormData para peticiones (útil con archivos)
- **Ejemplo:**
\`\`\`vue
<VueLaravelCrud :createMultipart="true" />
\`\`\`

### \`markDirty\`
- **Tipo:** \`Boolean\`
- **Requerido:** No
- **Default:** \`true\`
- **Descripción:** Marca elementos como modificados
- **Ejemplo:**
\`\`\`vue
<VueLaravelCrud :markDirty="true" />
\`\`\`

### \`draggableGroup\`
- **Tipo:** \`String\`
- **Requerido:** No
- **Default:** \`"people"\`
- **Descripción:** Nombre del grupo para drag & drop
- **Ejemplo:**
\`\`\`vue
<VueLaravelCrud draggableGroup="tasks" />
\`\`\`

### \`draggableOptions\`
- **Tipo:** \`Object\`
- **Requerido:** No
- **Default:** \`{ clone: false }\`
- **Descripción:** Opciones de configuración para drag & drop
- **Ejemplo:**
\`\`\`vue
<VueLaravelCrud :draggableOptions="{ clone: false, animation: 200 }" />
\`\`\`

---

## Slots Disponibles

### \`form\`
Personaliza el formulario de crear/editar.

**Props disponibles:** \`slotProps.item\` (objeto del formulario)

**Ejemplo:**
\`\`\`vue
<template v-slot:form="slotProps">
  <b-form-group label="Nombre:">
    <b-form-input v-model="slotProps.item.name"></b-form-input>
  </b-form-group>
</template>
\`\`\`

### \`show\`
Personaliza la vista de detalle en el modal.

**Props disponibles:** \`slotProps.item\` (objeto a mostrar)

**Ejemplo:**
\`\`\`vue
<template v-slot:show="slotProps">
  <b-list-group>
    <b-list-group-item>
      ID: {{ slotProps.item.id }}
    </b-list-group-item>
  </b-list-group>
</template>
\`\`\`

### \`cell-{prop}\`
Personaliza el renderizado de una celda específica.

**Props disponibles:** \`slotProps.item\` (objeto completo), \`slotProps.value\` (valor de la celda)

**Ejemplo:**
\`\`\`vue
<template v-slot:cell-price="slotProps">
  <span class="text-success font-weight-bold">
    $\\{\\{ slotProps.item.price \\}\\}
  </span>
</template>
\`\`\`

---

## Eventos Disponibles

### \`@select\`
Se dispara cuando se selecciona un elemento.

**Parámetros:** \`item\` (elemento seleccionado)

**Ejemplo:**
\`\`\`vue
<VueLaravelCrud @select="onSelect" />
\`\`\`

### \`@itemSaved\`
Se dispara cuando se guarda un elemento (crear o actualizar).

**Parámetros:** \`data\` (datos guardados)

**Ejemplo:**
\`\`\`vue
<VueLaravelCrud @itemSaved="onItemSaved" />
\`\`\`

### \`@itemDeleted\`
Se dispara cuando se elimina un elemento.

**Ejemplo:**
\`\`\`vue
<VueLaravelCrud @itemDeleted="onItemDeleted" />
\`\`\`

### \`@sort\`
Se dispara cuando se cambia el orden (drag & drop).

**Parámetros:** \`event\` (información del ordenamiento)

**Ejemplo:**
\`\`\`vue
<VueLaravelCrud @sort="onSort" />
\`\`\`

### \`@draggableChange\`
Se dispara durante el arrastre de elementos.

**Parámetros:** \`event\` (información del drag & drop)

**Ejemplo:**
\`\`\`vue
<VueLaravelCrud @draggableChange="onDraggableChange" />
\`\`\`

---

## Ejemplos Completos

### Ejemplo Básico
\`\`\`vue
<template>
  <VueLaravelCrud
    title="Gestión de Usuarios"
    modelName="users"
    :model="{ name: '', email: '' }"
    :columns="[
      { label: 'ID', prop: 'id', type: 'number' },
      { label: 'Nombre', prop: 'name', type: 'text' },
      { label: 'Email', prop: 'email', type: 'text' },
      { label: 'Acciones', prop: 'actions', type: 'actions' }
    ]"
    apiUrl="/api"
  />
</template>
\`\`\`

### Ejemplo con Tarjetas
\`\`\`vue
<template>
  <VueLaravelCrud
    title="Catálogo de Productos"
    modelName="products"
    :model="{ name: '', price: null }"
    :columns="columns"
    :displayMode="2"
    :colLg="3"
    :colMd="4"
    :colSm="6"
    :colXs="12"
    apiUrl="/api"
  />
</template>
\`\`\`

### Ejemplo con Kanban
\`\`\`vue
<template>
  <VueLaravelCrud
    title="Tablero Kanban"
    modelName="tasks"
    :model="{ title: '', status: 'todo' }"
    :columns="columns"
    :displayMode="4"
    :grouped="true"
    :groupedAttribute="'status'"
    :groupedSplit="true"
    apiUrl="/api"
  />
</template>
\`\`\`

---

## Notas Importantes

1. **Modo AJAX vs Local:** Cuando \`ajax=false\`, no se requieren \`apiUrl\` ni \`modelName\` para peticiones, pero sí se requiere el prop \`models\` con los datos.

2. **Scroll Infinito:** Cuando \`infiniteScroll=true\`, \`showPaginator\` se deshabilita automáticamente.

3. **Validación:** La validación se realiza automáticamente en campos con atributo \`required\`. Usa \`validate=true\` para habilitar la validación completa.

4. **Drag & Drop:** Para ordenamiento, usa \`orderable=true\` y especifica \`orderProp\`. Para Kanban, usa \`grouped=true\` con \`groupedSplit=true\`.

5. **Endpoints API:** Si usas \`ajax=true\`, asegúrate de que tu API tenga los siguientes endpoints:
   - \`GET /api/{modelName}\` - Listar
   - \`GET /api/{modelName}/:id\` - Obtener
   - \`POST /api/{modelName}\` - Crear
   - \`PUT /api/{modelName}/:id\` - Actualizar
   - \`DELETE /api/{modelName}/:id\` - Eliminar
   - \`DELETE /api/{modelName}/bulk-destroy\` - Eliminación masiva (si \`bulkDelete=true\`)
   - \`POST /api/{modelName}/sort\` - Ordenar (si \`orderable=true\`)
   - \`GET /api/{modelName}/export\` - Exportar (si \`showExport=true\`)
   - \`POST /api/{modelName}/import\` - Importar (si \`showImport=true\`)

---

**Última actualización:** 2024
`;

