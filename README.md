# vue-laravel-crud

npm i vue-laravel-crud


# How its work?:
This component implements a table and actions to create, modify, delete by calling a standard api

* GET apiUrl/modelName - Retrieve paginated listing
* POST apiUrl/modelName/:id - Create item
* PUT apiUrl/modelName/:id - Update item
* DELETE apiUrl/modelName/:id - Delete item

# Dependency:

* bootstrap-vue
* axios
* vuedraggable

# Full Example:

### JavaScript

```js


import VueLaravelCrud from "vue-laravel-crud";

export default {
    
  components: { VueLaravelCrud },
  data() {
    return {
        title: "Crud Title",
        modelName: 'users'
        model: {
            name: "",
            email: "",
        },
        columns: [
            { label: "Name", prop: "name", type: "text" },
            { label: "Email", prop: "age", type: "number" },
        ],
        selected: null,
        //....
    };
  },
  methods:{
      onSelect(item){
          this.selected = item;
      }
     //....

  },

};

```

### HTML

```html
<vue-laravel-crud :title="title" :modelName="modelName" :model="model" :columns="columns">
    <template v-slot:form="slotProps">
        <b-form-group label="Name:" description="Your Name">
            <b-form-input
            v-model="slotProps.item.name"
            type="text"
            required
            placeholder="Name"
            ></b-form-input>
        </b-form-group>
    </template>
    <template v-slot:show="slotProps">
        <b-list-group>
            <b-list-group-item class="d-flex justify-content-between align-items-center">Id<b-badge variant="primary" pill>{{ slotProps.item.id }}</b-badge></b-list-group-item>
            <b-list-group-item class="d-flex justify-content-between align-items-center">Nombre<b-badge variant="primary" pill>{{ slotProps.item.title }}</b-badge></b-list-group-item>
        </b-list-group>
    </template>
</vue-laravel-crud>

```

### HTML

```html

Selected: {{ selected ? selected.name : 'none' }}
<vue-laravel-crud :title="title" :modelName="modelName" :model="model" :columns="columns" @select="onSelect($event)">

    <template slot="cell-name" slot-scope="slotProps">
            <!-- Custom Cell Template cell-(prop) -->
        <span class="bg-primary">{{ slotProps.item.name }}</span> 
    </template>


    <template v-slot:tableActions="slotProps">
        <span>Slot Actions</span>
    </template>
    <template v-slot:tableActionsRight="slotProps">
        <span>Slot Right Actions</span>
    </template>

    <template v-slot:rowAction="slotProps">
        <b-button variant="primary" @click="slotProps.showItem(slotProps.item.id, slotProps.index)"><b-icon-eye></b-icon-eye></b-button>
    </template>

    <template v-slot:form="slotProps">
        <b-form-group label="Name:" description="Your Name">
            <b-form-input
            v-model="slotProps.item.name"
            type="text"
            required
            placeholder="Name"
            ></b-form-input>
        </b-form-group>
    </template>

    <template v-slot:show="slotProps">
        <b-list-group>
            <b-list-group-item class="d-flex justify-content-between align-items-center">Id<b-badge variant="primary" pill>{{ slotProps.item.id }}</b-badge></b-list-group-item>
            <b-list-group-item class="d-flex justify-content-between align-items-center">Nombre<b-badge variant="primary" pill>{{ slotProps.item.title }}</b-badge></b-list-group-item>
        </b-list-group>
    </template>
</vue-laravel-crud>

```

## Configuration

| Propiedad               | Descripción                   | Tipo      | Valor                                           |
|:------------------------|:------------------------------|:----------|:------------------------------------------------|
| modelName               | Nombre del modelo             | `String`  | requerido (ej.: users)                         |
| model                   | Estructura del modelo         | `Object`  | requerido (ej.: `{ id: 0 }`)                  |
| models                  | Lista de modelos              | `Array`   | requerido (ej.: `[]`)                         |
| ajax                    | Habilitar llamadas AJAX       | `Boolean` | opcional, predeterminado: `true`              |
| useVuexORM              | Usar Vuex ORM                | `Boolean` | opcional, predeterminado: `false`             |
| columns                 | Array de columnas             | `Array`   | requerido (ej.: `[{ label:"Id", prop: "id", type: "number" }]`) |
| filter                  | Filtros de búsqueda           | `Array`   | opcional, predeterminado: `[]`                |
| enableFilters           | Habilitar filtros             | `Boolean` | opcional, predeterminado: `false`             |
| infiniteScroll          | Desplazamiento infinito       | `Boolean` | opcional, predeterminado: `false`             |
| sortable                | Habilitar ordenamiento        | `Boolean` | opcional, predeterminado: `false`             |
| orderable               | Habilitar reordenamiento      | `Boolean` | opcional, predeterminado: `false`             |
| validate                | Validación de elementos       | `Boolean` | opcional, predeterminado: `false`             |
| orderProp               | Propiedad de ordenamiento     | `String`  | opcional, predeterminado: `"order"`           |
| createMultipart         | Crear elementos multipart    | `Boolean` | opcional, predeterminado: `false`             |
| apiUrl                  | URL base de la API            | `String`  | opcional, predeterminado: `"/api"`            |
| search                  | Término de búsqueda           | `String`  | opcional, predeterminado: `""`                |
| hideModalAfterSave      | Ocultar modal después de guardar | `Boolean` | opcional, predeterminado: `true`           |
| refreshAfterSave        | Actualizar después de guardar  | `Boolean` | opcional, predeterminado: `true`           |
| showPaginator           | Mostrar paginador             | `Boolean` | opcional, predeterminado: `true`           |
| showCreateBtn           | Mostrar botón de creación     | `Boolean` | opcional, predeterminado: `true`           |
| showSearch              | Mostrar campo de búsqueda     | `Boolean` | opcional, predeterminado: `true`           |
| showHeader              | Mostrar encabezado            | `Boolean` | opcional, predeterminado: `true`           |
| showTitle               | Mostrar título               | `Boolean` | opcional, predeterminado: `true`           |
| limit                   | Elementos por página         | `Number`  | opcional, predeterminado: `20`             |
| displayMode             | Modo de visualización        | `Number`  | opcional, predeterminado: `1`              |
| displayModeToggler      | Habilitar cambio de modo      | `Boolean` | opcional, predeterminado: `false`          |
| colXs                   | Columnas en pantallas XS      | `Number`  | opcional, predeterminado: `12`             |
| colSm                   | Columnas en pantallas SM      | `Number`  | opcional, predeterminado: `12`             |
| colMd                   | Columnas en pantallas MD      | `Number`  | opcional, predeterminado: `6`              |
| colLg                   | Columnas en pantallas LG      | `Number`  | opcional, predeterminado: `4`              |
| colXl                   | Columnas en pantallas XL      | `Number`  | opcional, predeterminado: `3`              |
| selectHover             | Seleccionar al pasar el mouse  | `Boolean` | opcional, predeterminado: `false`          |
| selectClick             | Seleccionar al hacer clic     | `Boolean` | opcional, predeterminado: `false`          |
| cardClass               | Clase de tarjeta              | `String`  | opcional, predeterminado: `""`             |
| listContainerClass      | Clase de contenedor de lista  | `String`  | opcional, predeterminado: `""`             |
| listItemClass           | Clase de elemento de lista    | `String`  | opcional, predeterminado: `""`             |
| cardHideFooter          | Ocultar pie de tarjeta        | `Boolean` | opcional, predeterminado: `false`          |
| searchPlaceholder       | Marcador de posición de búsqueda | `String` | opcional, predeterminado: "Buscar..."    |
| tableContainerClass     | Clase de contenedor de tabla  | `String`  | opcional, predeterminado: `""`             |
| tableClass             | Clase de tabla               | `String`  | opcional, predeterminado: `""`             |
| grouped                | Agrupar elementos            | `Boolean` | opcional, predeterminado: `false`          |
| groupedAttribute       | Atributo de agrupación       | `String`  | opcional, predeterminado: "name"          |
| groupedLabelPre        | Etiqueta de grupo anterior   | `String`  | opcional, predeterminado: `""`             |
| groupedLabelAfter      | Etiqueta de grupo posterior  | `String`  | opcional, predeterminado: `""`             |
| draggableGroup         | Grupo arrastrable            | `String`  | opcional, predeterminado: "people"        |
| draggableOptions       | Opciones de arrastre         | `Object`  | opcional, predeterminado: `{ clone: false }` |

## Messages


| Propiedad               | Descripción                   | Tipo      | Valor                                           |
|:------------------------|:------------------------------|:----------|:------------------------------------------------|
| messageRemoveConfirm    | Mensaje de confirmación de eliminación | `String` | opcional, predeterminado: "¿Está seguro de borrar este elemento?" |
| messageRemove           | Mensaje de eliminación         | `String`  | opcional, predeterminado: "BORRAR"         |
| messageNew              | Mensaje de nuevo elemento     | `String`  | opcional, predeterminado: "Nuevo"          |
| messageEmptyResults     | Mensaje de resultados vacíos   | `String`  | opcional, predeterminado: "No se han encontrado resultados" |
| messageNoMore           | Mensaje de fin de resultados   | `String`  | opcional, predeterminado: "No hay más elementos para mostrar." |
| messageLoading          | Mensaje de carga              | `String`  | opcional, predeterminado: "Cargando..."    |
| messageSave             | Mensaje de guardar            | `String`  | opcional, predeterminado: "Guardar"       |
| messageDefaultValidationError | Mensaje de error de validación por defecto | `String` | opcional, predeterminado: "Por favor controle el formulario, contiene errores." |
