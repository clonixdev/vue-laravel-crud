<template>
  <div class="container-fluid px-4">
    <div class="card shadow-sm mt-4">
      <div class="card-body">
        <vue-laravel-crud
          ref="crud"
          :title="title"
          :modelName="modelName"
          :model="item"
          :columns="columns"
          :displayModeToggler="displayModeToggler"
          :col-md="3"
          :col-xl="3"
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
                <b-form-group label="Nombre">
                  <b-form-input
                    v-model="slotProps.item.name"
                    type="text"
                    required
                    placeholder="Nombre del rol"
                  ></b-form-input>
                </b-form-group>
              </div>
              <div class="col-md-6">
                <b-form-group label="Guard" description="Canal de autenticación (ej. web, sanctum).">
                  <b-form-input
                    v-model="slotProps.item.guard_name"
                    type="text"
                    required
                    placeholder="web"
                  ></b-form-input>
                </b-form-group>
              </div>
            </div>

            <hr class="my-4" />

            <div class="d-flex flex-wrap justify-content-between align-items-end gap-2 mb-3">
              <div>
                <h5 class="mb-1">Permisos del rol</h5>
                <p class="text-muted small mb-0">
                  Árbol por recurso. Podés habilitar grupos enteros o permisos sueltos.
                </p>
              </div>
              <div class="d-flex flex-wrap gap-2 align-items-end" v-if="slotProps.item.id">
                <b-form-group label="Copiar permisos desde" class="mb-0">
                  <b-form-select
                    v-model="copyRoleId"
                    :options="copyRoleOptions(slotProps.item.id)"
                  ></b-form-select>
                </b-form-group>
                <b-button
                  variant="success"
                  :disabled="!copyRoleId"
                  @click="copyPerms(slotProps.item)"
                >
                  Copiar permisos
                </b-button>
              </div>
            </div>

            <permission-tree-editor
              v-if="permissions.length"
              v-model="slotProps.item.permissions"
              :permissions="permissions"
            />
            <div v-else class="text-muted small">Cargando permisos...</div>
          </template>

          <template v-slot:show="slotProps">
            <div class="row g-3 mb-3">
              <div class="col-md-4">
                <div class="border rounded p-3 h-100">
                  <div class="text-muted small">ID</div>
                  <div class="fw-semibold">{{ slotProps.item.id }}</div>
                </div>
              </div>
              <div class="col-md-4">
                <div class="border rounded p-3 h-100">
                  <div class="text-muted small">Nombre</div>
                  <div class="fw-semibold">{{ slotProps.item.name }}</div>
                </div>
              </div>
              <div class="col-md-4">
                <div class="border rounded p-3 h-100">
                  <div class="text-muted small">Guard</div>
                  <div class="fw-semibold">{{ slotProps.item.guard_name }}</div>
                </div>
              </div>
            </div>

            <h5 class="mb-2">Permisos</h5>
            <permission-tree-editor
              :permissions="permissions"
              :model-value="slotProps.item.permissions || []"
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
  name: 'RolesCrud',
  components: { VueLaravelCrud, PermissionTreeEditor },
  props: {
    apiUrl: { type: String, default: '/api' },
    rolesEndpoint: { type: String, default: 'v1/roles' },
    permissionsEndpoint: { type: String, default: 'v1/permissions' },
    copyPermsPath: { type: String, default: null },
    bootstrapVersion: { type: [Number, String], default: 5 },
    displayModeToggler: { type: Boolean, default: true },
    title: { type: String, default: 'Roles' },
    viewMode: { type: String, default: 'page' },
    urlSync: { type: [Boolean, Object], default: true },
    crudAction: { type: String, default: null },
    id: { type: [String, Number], default: null },
  },
  data() {
    return {
      modelName: this.rolesEndpoint,
      columns: [
        { label: 'Id', prop: 'id', type: 'number' },
        { label: 'Nombre', prop: 'name', type: 'text' },
        { label: 'Guard', prop: 'guard_name', type: 'text' },
        { label: 'Acciones', type: 'actions' },
      ],
      item: {
        id: null,
        name: '',
        guard_name: 'web',
        permissions: [],
      },
      permissions: [],
      roles: [],
      copyRoleId: null,
    }
  },
  mounted() {
    this.fetchPermissions()
    this.fetchRoles()
  },
  methods: {
    apiPath(endpoint) {
      const base = String(this.apiUrl || '/api').replace(/\/?$/, '')
      return `${base}/${String(endpoint || '').replace(/^\//, '')}`
    },
    copyRoleOptions(currentId) {
      return [
        { text: 'Seleccionar rol...', value: null },
        ...this.roles
          .filter((r) => r.id !== currentId)
          .map((r) => ({ text: r.name, value: r.id })),
      ]
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
    fetchRoles() {
      axios
        .get(this.apiPath(this.rolesEndpoint) + '?all=true')
        .then((response) => {
          this.roles = Array.isArray(response.data)
            ? response.data
            : response.data?.data || []
        })
        .catch(() => {})
    },
    copyPerms(role) {
      if (!this.copyRoleId) return
      const path =
        this.copyPermsPath ||
        `${this.apiPath(this.rolesEndpoint)}/${role.id}/copy-perms`
      axios
        .post(path, { role_id: this.copyRoleId })
        .then((response) => {
          this.toastSuccess?.('Permisos copiados')
          this.copyRoleId = null
          const copied = response?.data?.permissions
          if (copied && this.$refs.crud?.item?.id === role.id) {
            this.$refs.crud.item.permissions = copied
          }
          this.fetchRoles()
          this.$refs.crud?.refresh?.()
        })
        .catch((error) => this.toastError?.(error))
    },
  },
}
</script>
