<template>
  <div class="container-fluid px-4">
    <div class="card shadow-sm mt-4">
      <div class="card-body">
        <vue-laravel-crud
          ref="crud"
          :title="tabletitle"
          :modelName="modelName"
          :model="item"
          :columns="columns"
          :displayModeToggler="displayModeToggler"
          :apiUrl="apiUrl"
          :bootstrap-version="bootstrapVersion"
          :view-mode="viewMode"
          :url-sync="urlSync"
          :crud-action="crudAction"
          :id="id"
        >
          <template v-slot:form="slotProps">
            <div class="row g-3">
              <div class="col-md-6">
                <b-form-group label="Nombre" description="Nombre visible del usuario.">
                  <b-form-input
                    v-model="slotProps.item.name"
                    type="text"
                    required
                    placeholder="Nombre"
                  ></b-form-input>
                </b-form-group>
              </div>
              <div class="col-md-6">
                <b-form-group label="Email">
                  <b-form-input
                    v-model="slotProps.item.email"
                    type="email"
                    required
                    placeholder="Email"
                  ></b-form-input>
                </b-form-group>
              </div>
              <div class="col-md-6">
                <b-form-group
                  label="Contraseña"
                  :description="slotProps.item.id ? 'Dejar vacío para no cambiarla.' : 'Obligatoria al crear.'"
                >
                  <b-form-input
                    v-model="slotProps.item.password"
                    type="password"
                    :required="!slotProps.item.id"
                    placeholder="Contraseña"
                    autocomplete="new-password"
                  ></b-form-input>
                </b-form-group>
              </div>
              <div class="col-md-6">
                <b-form-group
                  label="Rol"
                  description="Define el conjunto base de permisos del usuario."
                >
                  <b-form-select
                    v-model="slotProps.item.role_name"
                    :options="rolesSelectOptions"
                  ></b-form-select>
                </b-form-group>
              </div>
            </div>

            <hr class="my-4" />

            <div class="d-flex justify-content-between align-items-center mb-2">
              <div>
                <h5 class="mb-1">Permisos individuales</h5>
                <p class="text-muted small mb-0">
                  Se suman al rol. Los marcados como “vía rol” ya los aporta el rol asignado.
                </p>
              </div>
            </div>

            <permission-tree-editor
              v-if="permissions.length"
              v-model="slotProps.item.permissions"
              :permissions="permissions"
              :via-role-permissions="viaRolePermissions(slotProps.item)"
            />
            <div v-else class="text-muted small">Cargando permisos...</div>
          </template>

          <template v-slot:show="slotProps">
            <div class="row g-3 mb-3">
              <div class="col-md-6">
                <div class="border rounded p-3 h-100">
                  <div class="text-muted small">ID</div>
                  <div class="fw-semibold">{{ slotProps.item.id }}</div>
                </div>
              </div>
              <div class="col-md-6">
                <div class="border rounded p-3 h-100">
                  <div class="text-muted small">Rol</div>
                  <div class="fw-semibold">{{ slotProps.item.role_name || '—' }}</div>
                </div>
              </div>
              <div class="col-md-6">
                <div class="border rounded p-3 h-100">
                  <div class="text-muted small">Nombre</div>
                  <div class="fw-semibold">{{ slotProps.item.name }}</div>
                </div>
              </div>
              <div class="col-md-6">
                <div class="border rounded p-3 h-100">
                  <div class="text-muted small">Email</div>
                  <div class="fw-semibold">{{ slotProps.item.email }}</div>
                </div>
              </div>
            </div>

            <h5 class="mb-2">Permisos directos</h5>
            <permission-tree-editor
              :permissions="permissions"
              :model-value="slotProps.item.permissions || []"
              :via-role-permissions="slotProps.item.permissions_via_roles || []"
              readonly
            />
          </template>
        </vue-laravel-crud>
      </div>
    </div>
  </div>
</template>

<script>
import VueLaravelCrud from '../vue-laravel-crud.vue'
import PermissionTreeEditor from './PermissionTreeEditor.vue'

export default {
  name: 'UsersCrud',
  components: { VueLaravelCrud, PermissionTreeEditor },
  props: {
    apiUrl: { type: String, default: '/api' },
    usersEndpoint: { type: String, default: 'v1/users' },
    rolesEndpoint: { type: String, default: 'v1/roles' },
    permissionsEndpoint: { type: String, default: 'v1/permissions' },
    bootstrapVersion: { type: [Number, String], default: 5 },
    displayModeToggler: { type: Boolean, default: true },
    title: { type: String, default: 'Usuarios' },
    viewMode: { type: String, default: 'page' },
    urlSync: { type: [Boolean, Object], default: true },
    crudAction: { type: String, default: null },
    id: { type: [String, Number], default: null },
  },
  data() {
    return {
      tabletitle: this.title,
      modelName: this.usersEndpoint,
      item: {
        name: '',
        email: '',
        password: '',
        role_name: null,
        permissions: [],
      },
      columns: [
        { label: 'Id', prop: 'id', type: 'number' },
        { label: 'Nombre', prop: 'name', type: 'text' },
        { label: 'Email', prop: 'email', type: 'text' },
        { label: 'Rol', prop: 'role_name', type: 'text' },
        { label: 'Acciones', type: 'actions' },
      ],
      roles: [],
      permissions: [],
    }
  },
  computed: {
    rolesSelectOptions() {
      return [
        { text: 'Sin rol', value: null },
        ...this.roles.map((role) => ({ text: role.name, value: role.name })),
      ]
    },
  },
  mounted() {
    this.fetchRoles()
    this.fetchPermissions()
  },
  methods: {
    apiPath(endpoint) {
      const base = String(this.apiUrl || '/api').replace(/\/?$/, '')
      return `${base}/${String(endpoint || '').replace(/^\//, '')}`
    },
    viaRolePermissions(item) {
      if (Array.isArray(item?.permissions_via_roles) && item.permissions_via_roles.length) {
        return item.permissions_via_roles
      }
      const role = this.roles.find((r) => r.name === item?.role_name)
      return role?.permissions || []
    },
    fetchRoles() {
      axios.get(this.apiPath(this.rolesEndpoint) + '?all=true').then((response) => {
        const rows = Array.isArray(response.data) ? response.data : response.data?.data || []
        this.roles = rows
      })
    },
    fetchPermissions() {
      axios
        .get(this.apiPath(this.permissionsEndpoint) + '?all=true')
        .then((response) => {
          this.permissions = Array.isArray(response.data)
            ? response.data
            : response.data?.data || []
        })
        .catch((error) => this.toastError?.(error))
    },
  },
}
</script>
