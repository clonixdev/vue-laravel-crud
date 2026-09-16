<template>
  <div class="perm-tree-editor">
    <div class="perm-tree-editor__toolbar" v-if="!readonly">
      <div class="input-group input-group-sm perm-tree-editor__search">
        <span class="input-group-text"><i class="bi bi-search"></i></span>
        <input
          v-model="search"
          type="search"
          class="form-control"
          placeholder="Buscar permiso o grupo..."
        />
      </div>
      <div class="btn-group btn-group-sm">
        <button type="button" class="btn btn-outline-secondary" @click="expandAll">Expandir</button>
        <button type="button" class="btn btn-outline-secondary" @click="collapseAll">Colapsar</button>
        <button type="button" class="btn btn-outline-success" @click="grantVisible">Habilitar visibles</button>
        <button type="button" class="btn btn-outline-danger" @click="denyVisible">Quitar visibles</button>
      </div>
    </div>

    <div class="perm-tree-editor__meta text-muted small mb-2">
      <span>{{ grantedCount }} habilitados</span>
      <span class="mx-1">·</span>
      <span>{{ permissionsList.length }} totales</span>
      <span v-if="viaRoleNames.length" class="ms-2">
        ({{ viaRoleNames.length }} vía rol)
      </span>
    </div>

    <div class="perm-tree-editor__tree">
      <div v-if="!filteredTree.length" class="text-muted text-center py-4">
        No hay permisos para mostrar
      </div>
      <ul v-else class="perm-tree list-unstyled mb-0">
        <perm-tree-node
          v-for="node in filteredTree"
          :key="node.path"
          :node="node"
          :depth="0"
          :expanded-map="effectiveExpandedMap"
          :granted-set="grantedSet"
          :via-role-set="viaRoleSet"
          :readonly="readonly"
          @toggle-expand="toggleExpand"
          @toggle-permission="togglePermission"
          @toggle-group="toggleGroup"
        />
      </ul>
    </div>
  </div>
</template>

<script>
import { defineComponent, h } from 'vue'

const PermTreeNode = defineComponent({
  name: 'PermTreeNode',
  props: {
    node: { type: Object, required: true },
    depth: { type: Number, default: 0 },
    expandedMap: { type: Object, required: true },
    grantedSet: { type: Object, required: true },
    viaRoleSet: { type: Object, required: true },
    readonly: { type: Boolean, default: false },
  },
  emits: ['toggle-expand', 'toggle-permission', 'toggle-group'],
  computed: {
    expanded() {
      return !!this.expandedMap[this.node.path]
    },
    hasChildren() {
      return Array.isArray(this.node.children) && this.node.children.length > 0
    },
    leafNames() {
      const names = []
      const walk = (n) => {
        if (n.permission?.name) names.push(n.permission.name)
        ;(n.children || []).forEach(walk)
      }
      walk(this.node)
      return names
    },
    grantedLeaves() {
      return this.leafNames.filter((n) => this.grantedSet[n])
    },
    groupState() {
      const total = this.leafNames.length
      const granted = this.grantedLeaves.length
      if (!total || granted === 0) return 'none'
      if (granted === total) return 'all'
      return 'some'
    },
    viaRole() {
      return this.node.permission?.name ? !!this.viaRoleSet[this.node.permission.name] : false
    },
  },
  methods: {
    onGroupChange(event) {
      this.$emit('toggle-group', {
        names: this.leafNames,
        grant: event.target.checked,
      })
    },
    onLeafChange(event) {
      this.$emit('toggle-permission', {
        name: this.node.permission.name,
        grant: event.target.checked,
      })
    },
  },
  render() {
    const pad = { paddingLeft: `${this.depth * 1.1}rem` }
    const children = []

    if (this.hasChildren) {
      children.push(
        h('div', { class: 'perm-tree__row perm-tree__row--group', style: pad }, [
          h(
            'button',
            {
              type: 'button',
              class: 'btn btn-sm btn-link perm-tree__toggle p-0 me-1',
              onClick: () => this.$emit('toggle-expand', this.node.path),
            },
            this.expanded ? '▾' : '▸'
          ),
          h('input', {
            class: 'form-check-input me-2',
            type: 'checkbox',
            checked: this.groupState === 'all',
            disabled: this.readonly,
            onChange: this.onGroupChange,
            onVnodeMounted: (vnode) => {
              if (vnode.el) vnode.el.indeterminate = this.groupState === 'some'
            },
            onVnodeUpdated: (vnode) => {
              if (vnode.el) vnode.el.indeterminate = this.groupState === 'some'
            },
          }),
          h('span', { class: 'perm-tree__label fw-semibold' }, this.node.label),
          h(
            'span',
            { class: 'badge text-bg-light ms-2' },
            `${this.grantedLeaves.length}/${this.leafNames.length}`
          ),
        ])
      )

      if (this.expanded) {
        children.push(
          h(
            'ul',
            { class: 'list-unstyled mb-0' },
            this.node.children.map((child) =>
              h(PermTreeNode, {
                key: child.path,
                node: child,
                depth: this.depth + 1,
                expandedMap: this.expandedMap,
                grantedSet: this.grantedSet,
                viaRoleSet: this.viaRoleSet,
                readonly: this.readonly,
                onToggleExpand: (p) => this.$emit('toggle-expand', p),
                onTogglePermission: (p) => this.$emit('toggle-permission', p),
                onToggleGroup: (p) => this.$emit('toggle-group', p),
              })
            )
          )
        )
      }
    } else if (this.node.permission) {
      children.push(
        h('div', { class: 'perm-tree__row', style: pad }, [
          h('input', {
            class: 'form-check-input me-2',
            type: 'checkbox',
            checked: !!this.grantedSet[this.node.permission.name],
            disabled: this.readonly,
            onChange: this.onLeafChange,
          }),
          h('span', { class: 'perm-tree__label' }, this.node.permission.name),
          this.viaRole
            ? h('span', { class: 'badge text-bg-info ms-2' }, 'vía rol')
            : null,
        ])
      )
    }

    return h('li', { class: 'perm-tree__node' }, children)
  },
})

function buildPermissionTree(permissions) {
  const root = { path: '', label: 'root', children: [], map: {} }

  const ensure = (parent, segment, path) => {
    if (!parent.map[segment]) {
      const node = {
        path,
        label: segment,
        children: [],
        map: {},
        permission: null,
      }
      parent.map[segment] = node
      parent.children.push(node)
    }
    return parent.map[segment]
  }

  ;(permissions || []).forEach((perm) => {
    const name = typeof perm === 'string' ? perm : perm?.name
    if (!name) return
    const segments = String(name).split('.').filter(Boolean)
    if (!segments.length) return

    let current = root
    let path = ''
    segments.forEach((segment, idx) => {
      path = path ? `${path}.${segment}` : segment
      current = ensure(current, segment, path)
      if (idx === segments.length - 1) {
        current.permission = typeof perm === 'string' ? { name: perm } : perm
      }
    })
  })

  const sortNodes = (nodes) => {
    nodes.sort((a, b) => a.label.localeCompare(b.label))
    nodes.forEach((n) => sortNodes(n.children || []))
  }
  sortNodes(root.children)
  return root.children
}

function filterTree(nodes, query) {
  if (!query) return nodes
  const q = query.toLowerCase()
  const walk = (list) => {
    const out = []
    list.forEach((node) => {
      const childMatches = walk(node.children || [])
      const selfMatch =
        (node.label && node.label.toLowerCase().includes(q)) ||
        (node.permission?.name && node.permission.name.toLowerCase().includes(q))
      if (selfMatch || childMatches.length) {
        out.push({
          ...node,
          children: selfMatch ? node.children : childMatches,
        })
      }
    })
    return out
  }
  return walk(nodes)
}

function collectPaths(nodes, acc = []) {
  nodes.forEach((n) => {
    acc.push(n.path)
    collectPaths(n.children || [], acc)
  })
  return acc
}

function normalizePermissionNames(value) {
  if (!Array.isArray(value)) return []
  return value
    .map((p) => (typeof p === 'string' ? p : p?.name))
    .filter(Boolean)
}

export default {
  name: 'PermissionTreeEditor',
  components: { PermTreeNode },
  props: {
    permissions: { type: Array, default: () => [] },
    modelValue: { type: Array, default: () => [] },
    viaRolePermissions: { type: Array, default: () => [] },
    readonly: { type: Boolean, default: false },
  },
  emits: ['update:modelValue'],
  data() {
    return {
      search: '',
      expandedMap: {},
    }
  },
  computed: {
    permissionsList() {
      return Array.isArray(this.permissions) ? this.permissions : []
    },
    tree() {
      return buildPermissionTree(this.permissionsList)
    },
    filteredTree() {
      return filterTree(this.tree, this.search.trim())
    },
    effectiveExpandedMap() {
      // Con búsqueda activa, expandir coincidencias para poder trabajar
      if (this.search.trim()) {
        const map = { ...this.expandedMap }
        collectPaths(this.filteredTree).forEach((p) => {
          map[p] = true
        })
        return map
      }
      return this.expandedMap
    },
    grantedNames() {
      return normalizePermissionNames(this.modelValue)
    },
    grantedSet() {
      const set = {}
      this.grantedNames.forEach((n) => {
        set[n] = true
      })
      return set
    },
    viaRoleNames() {
      return normalizePermissionNames(this.viaRolePermissions)
    },
    viaRoleSet() {
      const set = {}
      this.viaRoleNames.forEach((n) => {
        set[n] = true
      })
      return set
    },
    grantedCount() {
      return this.grantedNames.length
    },
  },
  methods: {
    emitNames(names) {
      const unique = [...new Set(names)]
      const byName = {}
      this.permissionsList.forEach((p) => {
        const name = typeof p === 'string' ? p : p?.name
        if (name) byName[name] = typeof p === 'string' ? { name: p } : p
      })
      this.$emit(
        'update:modelValue',
        unique.map((name) => byName[name] || { name })
      )
    },
    toggleExpand(path) {
      this.expandedMap = {
        ...this.expandedMap,
        [path]: !this.expandedMap[path],
      }
    },
    expandAll() {
      const map = {}
      collectPaths(this.filteredTree).forEach((p) => {
        map[p] = true
      })
      this.expandedMap = { ...this.expandedMap, ...map }
    },
    collapseAll() {
      this.expandedMap = {}
    },
    togglePermission({ name, grant }) {
      const set = new Set(this.grantedNames)
      if (grant) set.add(name)
      else set.delete(name)
      this.emitNames([...set])
    },
    toggleGroup({ names, grant }) {
      const set = new Set(this.grantedNames)
      names.forEach((n) => {
        if (grant) set.add(n)
        else set.delete(n)
      })
      this.emitNames([...set])
    },
    visibleLeafNames() {
      const names = []
      const walk = (nodes) => {
        nodes.forEach((n) => {
          if (n.permission?.name) names.push(n.permission.name)
          walk(n.children || [])
        })
      }
      walk(this.filteredTree)
      return names
    },
    grantVisible() {
      const set = new Set(this.grantedNames)
      this.visibleLeafNames().forEach((n) => set.add(n))
      this.emitNames([...set])
    },
    denyVisible() {
      const deny = new Set(this.visibleLeafNames())
      this.emitNames(this.grantedNames.filter((n) => !deny.has(n)))
    },
  },
}
</script>

<style scoped>
.perm-tree-editor {
  border: 1px solid #e9ecef;
  border-radius: 0.5rem;
  padding: 0.75rem;
  background: #fff;
}

.perm-tree-editor__toolbar {
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 0.75rem;
}

.perm-tree-editor__search {
  max-width: 18rem;
  flex: 1 1 14rem;
}

.perm-tree-editor__tree {
  max-height: 28rem;
  overflow: auto;
  border: 1px solid #f1f3f5;
  border-radius: 0.375rem;
  padding: 0.5rem 0.75rem;
  background: #fafbfc;
}

.perm-tree__row {
  display: flex;
  align-items: center;
  min-height: 1.9rem;
  padding: 0.15rem 0;
}

.perm-tree__toggle {
  width: 1.25rem;
  line-height: 1;
  text-decoration: none;
  color: #495057;
}

.perm-tree__label {
  font-size: 0.875rem;
  word-break: break-word;
}
</style>
