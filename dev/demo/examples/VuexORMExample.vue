<template>
  <div class="vuexorm-example">
    <VueLaravelCrud
      ref="crud"
      title="Usuarios (VuexORM)"
      modelName="demo_users"
      :model="model"
      :columns="columns"
      :useVuexORM="true"
    >
      <template v-slot:cell(status)="row">
        <b-badge :variant="row.value === 'active' ? 'success' : 'secondary'">
          {{ row.value }}
        </b-badge>
      </template>
    </VueLaravelCrud>
  </div>
</template>

<script>
import VueLaravelCrud from '../../src/vue-laravel-crud.vue';
import DemoUser from '../models/DemoUser';

export default {
  name: 'VuexORMExample',
  data() {
    return {
      model: DemoUser,
      columns: [
        { label: 'ID', prop: 'id', type: 'number' },
        { label: 'Nombre', prop: 'name', type: 'text' },
        { label: 'Email', prop: 'email', type: 'text' },
        { label: 'Rol', prop: 'role', type: 'text' },
        { label: 'Status', prop: 'status', type: 'text' },
        { label: 'Acciones', type: 'actions' }
      ]
    };
  },
  components: {
    VueLaravelCrud
  }
};
</script>