<template>
  <div
    v-show="isActive"
    class="tab-pane"
    :class="{ active: isActive, 'card-body': noBody }"
    role="tabpanel"
  >
    <slot></slot>
  </div>
</template>

<script>
let uid = 0;

export default {
  name: 'BTab',
  inject: {
    bTabs: { default: null }
  },
  props: {
    title: {
      type: String,
      default: ''
    },
    active: {
      type: Boolean,
      default: false
    },
    disabled: {
      type: Boolean,
      default: false
    },
    id: {
      type: String,
      default: null
    },
    noBody: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {
      key: this.id || `btab-${++uid}`,
      localActive: this.active
    };
  },
  computed: {
    isActive() {
      if (this.bTabs) {
        if (this.bTabs.activeKey === null) {
          return this.active;
        }
        return this.bTabs.activeKey === this.key;
      }
      return this.localActive;
    }
  },
  mounted() {
    if (this.bTabs) {
      this.bTabs.registerTab(this);
    } else {
      this.localActive = true;
    }
  },
  beforeUnmount() {
    if (this.bTabs) {
      this.bTabs.unregisterTab(this);
    }
  }
};
</script>
