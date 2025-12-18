# vue-laravel-crud

Componente Vue.js para crear interfaces CRUD (Create, Read, Update, Delete) completas con integración a APIs Laravel o cualquier API REST estándar.

## Instalación

```bash
npm install vue-laravel-crud
```

## Dependencias

Este componente requiere las siguientes dependencias:

* `bootstrap-vue` - Framework de componentes UI
* `axios` - Cliente HTTP para peticiones AJAX
* `vuedraggable` - Para funcionalidad de drag & drop
* `moment` - Para formateo de fechas
* `vue-infinite-loading` - Para scroll infinito (opcional)

## ¿Cómo funciona?

Este componente implementa una tabla completa con acciones para crear, modificar y eliminar elementos mediante llamadas a una API estándar.

### Endpoints API requeridos:

* `GET apiUrl/modelName` - Obtener listado paginado
* `POST apiUrl/modelName` - Crear nuevo elemento
* `PUT apiUrl/modelName/:id` - Actualizar elemento existente
* `DELETE apiUrl/modelName/:id` - Eliminar elemento

## Ejemplo Básico

### JavaScript

```js
import VueLaravelCrud from "vue-laravel-crud";

export default {
  components: { 
    VueLaravelCrud 
  },
  data() {
    return {
      title: "Gestión de Usuarios",
      modelName: 'users',
      model: {
        name: "",
        email: "",
        age: null,
      },
      columns: [
        { label: "ID", prop: "id", type: "number", width: "80px" },
        { label: "Nombre", prop: "name", type: "text" },
        { label: "Email", prop: "email", type: "text" },
        { label: "Edad", prop: "age", type: "number" },
        { label: "Acciones", prop: "actions", type: "actions" }
      ],
      selected: null,
    };
  },
  methods: {
    onSelect(item) {
      this.selected = item;
    }
  }
};
```

### Template HTML

```html
<template>
  <div>
    <vue-laravel-crud 
      :title="title" 
      :modelName="modelName" 
      :model="model" 
      :columns="columns"
      :apiUrl="'http://localhost:8000/api'"
      @select="onSelect"
    >
      <!-- Slot para personalizar el formulario -->
      <template v-slot:form="slotProps">
        <b-form-group label="Nombre:" description="Nombre completo del usuario">
          <b-form-input
            v-model="slotProps.item.name"
            type="text"
            required
            placeholder="Ingrese el nombre"
          ></b-form-input>
        </b-form-group>
        
        <b-form-group label="Email:" description="Correo electrónico">
          <b-form-input
            v-model="slotProps.item.email"
            type="email"
            required
            placeholder="usuario@ejemplo.com"
          ></b-form-input>
        </b-form-group>
        
        <b-form-group label="Edad:" description="Edad en años">
          <b-form-input
            v-model="slotProps.item.age"
            type="number"
            min="1"
            max="120"
            placeholder="25"
          ></b-form-input>
        </b-form-group>
      </template>
      
      <!-- Slot para personalizar la vista de detalle -->
      <template v-slot:show="slotProps">
        <b-list-group>
          <b-list-group-item class="d-flex justify-content-between align-items-center">
            ID
            <b-badge variant="primary" pill>{{ slotProps.item.id }}</b-badge>
          </b-list-group-item>
          <b-list-group-item class="d-flex justify-content-between align-items-center">
            Nombre
            <b-badge variant="info" pill>{{ slotProps.item.name }}</b-badge>
          </b-list-group-item>
          <b-list-group-item class="d-flex justify-content-between align-items-center">
            Email
            <b-badge variant="secondary" pill>{{ slotProps.item.email }}</b-badge>
          </b-list-group-item>
        </b-list-group>
      </template>
    </vue-laravel-crud>
  </div>
</template>
```

## Ejemplo Avanzado con Slots Personalizados

```html
<template>
  <div>
    <p>Seleccionado: {{ selected ? selected.name : 'ninguno' }}</p>
    
    <vue-laravel-crud 
      :title="title" 
      :modelName="modelName" 
      :model="model" 
      :columns="columns"
      :apiUrl="'http://localhost:8000/api'"
      @select="onSelect"
    >
      <!-- Personalizar celda específica -->
      <template slot="cell-name" slot-scope="slotProps">
        <span class="badge badge-primary">{{ slotProps.item.name }}</span>
      </template>

      <!-- Acciones personalizadas en la tabla -->
      <template v-slot:tableActions="slotProps">
        <b-button variant="info" size="sm">Acción Personalizada</b-button>
      </template>
      
      <template v-slot:tableActionsRight="slotProps">
        <b-button variant="success" size="sm">Acción Derecha</b-button>
      </template>

      <!-- Acciones personalizadas por fila -->
      <template v-slot:rowAction="slotProps">
        <b-button 
          variant="primary" 
          size="sm"
          @click="slotProps.showItem(slotProps.item.id, slotProps.index)"
        >
          <b-icon-eye></b-icon-eye> Ver
        </b-button>
      </template>

      <!-- Formulario personalizado -->
      <template v-slot:form="slotProps">
        <b-form-group label="Nombre:" description="Nombre completo">
          <b-form-input
            v-model="slotProps.item.name"
            type="text"
            required
            placeholder="Ingrese el nombre"
          ></b-form-input>
        </b-form-group>
        
        <b-form-group label="Email:" description="Correo electrónico">
          <b-form-input
            v-model="slotProps.item.email"
            type="email"
            required
            placeholder="usuario@ejemplo.com"
          ></b-form-input>
        </b-form-group>
      </template>

      <!-- Vista de detalle personalizada -->
      <template v-slot:show="slotProps">
        <b-list-group>
          <b-list-group-item class="d-flex justify-content-between align-items-center">
            ID
            <b-badge variant="primary" pill>{{ slotProps.item.id }}</b-badge>
          </b-list-group-item>
          <b-list-group-item class="d-flex justify-content-between align-items-center">
            Nombre
            <b-badge variant="info" pill>{{ slotProps.item.name }}</b-badge>
          </b-list-group-item>
        </b-list-group>
      </template>
    </vue-laravel-crud>
  </div>
</template>
```

## Configuración de Props

### Props Requeridas

| Propiedad | Descripción | Tipo | Ejemplo |
|:----------|:------------|:-----|:--------|
| `modelName` | Nombre del modelo para las peticiones API | `String` | `"users"` |
| `model` | Estructura del modelo para formularios | `Object` | `{ name: "", email: "" }` |
| `columns` | Array de columnas de la tabla | `Array` | Ver ejemplo abajo |

### Props Opcionales - Configuración General

| Propiedad | Descripción | Tipo | Valor por defecto |
|:----------|:------------|:-----|:------------------|
| `title` | Título del componente | `String` | `""` |
| `ajax` | Habilitar llamadas AJAX | `Boolean` | `true` |
| `apiUrl` | URL base de la API | `String` | `"/api"` |
| `useVuexORM` | Usar Vuex ORM | `Boolean` | `false` |
| `models` | Lista de modelos (cuando `ajax=false`) | `Array` | `[]` |

### Props Opcionales - Visualización

| Propiedad | Descripción | Tipo | Valor por defecto |
|:----------|:------------|:-----|:------------------|
| `displayMode` | Modo de visualización (1=Tabla, 2=Tarjetas, 3=Lista, 4=Kanban) | `Number` | `1` |
| `displayModeToggler` | Habilitar selector de modo | `Boolean` | `false` |
| `limit` | Elementos por página | `Number` | `20` |
| `showPaginator` | Mostrar paginador | `Boolean` | `true` |
| `showCreateBtn` | Mostrar botón de crear | `Boolean` | `true` |
| `showSearch` | Mostrar campo de búsqueda | `Boolean` | `true` |
| `showHeader` | Mostrar encabezado completo | `Boolean` | `true` |
| `showTitle` | Mostrar título | `Boolean` | `true` |
| `searchPlaceholder` | Placeholder del buscador | `String` | `"Buscar..."` |

### Props Opcionales - Filtros y Ordenamiento

| Propiedad | Descripción | Tipo | Valor por defecto |
|:----------|:------------|:-----|:------------------|
| `filter` | Filtros de búsqueda predefinidos | `Array` | `[]` |
| `enableFilters` | Habilitar panel de filtros avanzados | `Boolean` | `false` |
| `sortable` | Habilitar ordenamiento de columnas | `Boolean` | `false` |
| `orderable` | Habilitar reordenamiento drag & drop | `Boolean` | `false` |
| `orderProp` | Propiedad para ordenamiento | `String` | `"order"` |
| `infiniteScroll` | Habilitar scroll infinito | `Boolean` | `false` |

### Props Opcionales - Comportamiento

| Propiedad | Descripción | Tipo | Valor por defecto |
|:----------|:------------|:-----|:------------------|
| `hideModalAfterSave` | Ocultar modal después de guardar | `Boolean` | `true` |
| `hideModalAfterCreate` | Ocultar modal después de crear | `Boolean` | `false` |
| `hideModalAfterUpdate` | Ocultar modal después de actualizar | `Boolean` | `false` |
| `refreshAfterSave` | Actualizar datos después de guardar | `Boolean` | `true` |
| `validate` | Habilitar validación de formularios | `Boolean` | `false` |
| `createMultipart` | Crear elementos con multipart/form-data | `Boolean` | `false` |

### Props Opcionales - Selección

| Propiedad | Descripción | Tipo | Valor por defecto |
|:----------|:------------|:-----|:------------------|
| `selectHover` | Seleccionar al pasar el mouse | `Boolean` | `false` |
| `selectClick` | Seleccionar al hacer clic | `Boolean` | `false` |

### Props Opcionales - Estilos

| Propiedad | Descripción | Tipo | Valor por defecto |
|:----------|:------------|:-----|:------------------|
| `tableClass` | Clases CSS adicionales para la tabla | `String` | `""` |
| `tableContainerClass` | Clases CSS para el contenedor de tabla | `String` | `""` |
| `cardClass` | Clases CSS para las tarjetas | `String` | `""` |
| `listContainerClass` | Clases CSS para contenedor de lista | `String` | `""` |
| `listItemClass` | Clases CSS para elementos de lista | `String` | `""` |
| `cardHideFooter` | Ocultar pie de tarjeta | `Boolean` | `false` |

### Props Opcionales - Agrupación y Drag & Drop

| Propiedad | Descripción | Tipo | Valor por defecto |
|:----------|:------------|:-----|:------------------|
| `grouped` | Agrupar elementos | `Boolean` | `false` |
| `groupedAttribute` | Atributo para agrupación | `String` | `"name"` |
| `groupedLabelPre` | Etiqueta antes del grupo | `String` | `""` |
| `groupedLabelAfter` | Etiqueta después del grupo | `String` | `""` |
| `groupedSplit` | Dividir grupos | `Boolean` | `false` |
| `draggableGroup` | Grupo para drag & drop | `String` | `"people"` |
| `draggableOptions` | Opciones de drag & drop | `Object` | `{ clone: false }` |

### Props Opcionales - Columnas Responsivas (Vista Tarjetas)

| Propiedad | Descripción | Tipo | Valor por defecto |
|:----------|:------------|:-----|:------------------|
| `colXs` | Columnas en pantallas XS | `Number` | `12` |
| `colSm` | Columnas en pantallas SM | `Number` | `12` |
| `colMd` | Columnas en pantallas MD | `Number` | `6` |
| `colLg` | Columnas en pantallas LG | `Number` | `4` |
| `colXl` | Columnas en pantallas XL | `Number` | `3` |

### Props Opcionales - Importación/Exportación

| Propiedad | Descripción | Tipo | Valor por defecto |
|:----------|:------------|:-----|:------------------|
| `showImport` | Mostrar botón de importar | `Boolean` | `false` |
| `showExport` | Mostrar botón de exportar | `Boolean` | `false` |
| `bulkDelete` | Habilitar eliminación masiva | `Boolean` | `false` |
| `markDirty` | Marcar elementos como modificados | `Boolean` | `true` |

## Mensajes Personalizables

| Propiedad | Descripción | Tipo | Valor por defecto |
|:----------|:------------|:-----|:------------------|
| `messageRemoveConfirm` | Mensaje de confirmación de eliminación | `String` | `"¿Está seguro de borrar este elemento?"` |
| `messageRemove` | Texto del botón eliminar | `String` | `"BORRAR"` |
| `messageNew` | Texto del botón nuevo | `String` | `"Nuevo"` |
| `messageSave` | Texto del botón guardar | `String` | `"Guardar"` |
| `messageEmptyResults` | Mensaje cuando no hay resultados | `String` | `"No se han encontrado resultados"` |
| `messageNoMore` | Mensaje de fin de resultados | `String` | `"No hay más elementos para mostrar."` |
| `messageLoading` | Mensaje de carga | `String` | `"Cargando..."` |
| `messageDefaultValidationError` | Mensaje de error de validación | `String` | `"Por favor controle el formulario, contiene errores."` |
| `messageImport` | Texto del botón importar | `String` | `"Importar"` |
| `messageExport` | Texto del botón exportar | `String` | `"Exportar"` |

## Configuración de Columnas

Las columnas se definen como un array de objetos con las siguientes propiedades:

```js
columns: [
  {
    label: "ID",              // Texto del encabezado
    prop: "id",               // Propiedad del objeto a mostrar
    type: "number",           // Tipo: text, number, date, boolean, state, actions
    width: "80px",            // Ancho de la columna (opcional)
    format: "DD/MM/YYYY",     // Formato para fechas (opcional)
    options: [                // Opciones para tipo "state"
      { id: "active", text: "Activo" },
      { id: "inactive", text: "Inactivo" }
    ]
  }
]
```

### Tipos de Columna Disponibles:

- `text` - Texto simple
- `number` - Número
- `date` - Fecha (usa moment.js para formateo)
- `boolean` - Valor booleano
- `state` - Estado con badges de colores (requiere `options`)
- `actions` - Columna especial con botones Ver/Editar/Eliminar

## Eventos

El componente emite los siguientes eventos:

- `@select` - Cuando se selecciona un elemento
- `@itemSaved` - Cuando se guarda un elemento
- `@itemDeleted` - Cuando se elimina un elemento
- `@refresh` - Cuando se refrescan los datos

## Slots Disponibles

- `form` - Personalizar el formulario de crear/editar
- `show` - Personalizar la vista de detalle
- `cell-{prop}` - Personalizar una celda específica (ej: `cell-name`)
- `tableActions` - Acciones personalizadas en la tabla (lado izquierdo)
- `tableActionsRight` - Acciones personalizadas en la tabla (lado derecho)
- `rowAction` - Acciones personalizadas por fila

## Ejemplos Adicionales

Para ver más ejemplos y demos completos, visita el directorio `dev/demo/examples/` en el repositorio.

## Licencia

MIT
