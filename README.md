# vue-laravel-crud

npm i vue-laravel-crud

DEV STATUS
Stable version to 1.1

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

# Configuration


| Property | Description | Type | Value
|:--|:--|:--|:--|
| modelName | Model name | `String` | required ej: users |
| model | Model structure | `Object` | required ej: { name: "" , email: ""} |
| columns | Array of columns | `Array` | required ej: [{ label:"Id" , prop: "id" , type:"number"}] |
| title | Title | `String` | required |
| sorteable | Enable sortable function | `Boolean` | optional, default: false |
| apiUrl | Api base url | `String` | optional, default: /api |
| showPaginator | Paginator visibility | `Boolean` | optional, default: true |
| showHeader | Header visibility | `Boolean` | optional, default: true |
| limit | Items per page | `Number` | optional, default: 20 |
| displayMode | Mode Display| `Number` | optional, default: 1 , options: 1- Table , 2 - Cards |
| enableDraggable | Enable drag items | `Boolean` | optional, default: false |
| selectHover | Select row on hover | `Boolean` | optional, default: false |
| selectClick | Select row on click | `Boolean` | optional, default: false |

# Messages


| Property | Message
|:--|:--|
| messageRemoveConfirm | "¿Esta seguro de borrar este elemento?" |
| messageRemove | "BORRAR" |
| messageNew | "Nuevo"|
| messageEmptyResults | "No se han encontrado resultados"|
| messageSave | "Guardar" |
