<template>
  <div class="b-tabs">
    <ul class="nav nav-tabs" :class="navClasses" role="tablist">
      <li
        v-for="tab in tabs"
        :key="tab.key"
        class="nav-item"
        role="presentation"
      >
        <a
          class="nav-link"
          :class="{ active: tab.key === activeKey, disabled: tab.disabled }"
          href="#"
          role="tab"
          :aria-selected="tab.key === activeKey ? 'true' : 'false'"
          @click.prevent="activate(tab.key)"
        >
          {{ tab.title }}
        </a>
      </li>
    </ul>
    <div :class="contentClass">
      <slot></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: 'BTabs',
  props: {
    contentClass: {
      type: [String, Array, Object],
      default: null
    },
    align: {
      type: String,
      default: null,
      validator: (value) => !value || ['left', 'center', 'right', 'fill', 'justified'].includes(value)
    },
    pills: {
      type: Boolean,
      default: false
    },
    vertical: {
      type: Boolean,
      default: false
    },
    card: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {
      tabs: [],
      activeKey: null
    };
  },
  provide() {
    return { bTabs: this };
  },
  computed: {
    navClasses() {
      const classes = [];
      if (this.pills) {
        classes.push('nav-pills');
      }
      if (this.vertical) {
        classes.push('flex-column');
      }
      if (this.align === 'center') {
        classes.push('justify-content-center');
      } else if (this.align === 'right') {
        classes.push('justify-content-end');
      } else if (this.align === 'fill') {
        classes.push('nav-fill');
      } else if (this.align === 'justified') {
        classes.push('nav-justified');
      }
      return classes.join(' ');
    }
  },
  methods: {
    registerTab(tab) {
      if (this.tabs.indexOf(tab) !== -1) {
        return;
      }
      this.tabs.push(tab);
      if (tab.active) {
        this.activeKey = tab.key;
      } else if (this.activeKey === null) {
        this.activeKey = tab.key;
      }
    },
    unregisterTab(tab) {
      const index = this.tabs.indexOf(tab);
      if (index !== -1) {
        this.tabs.splice(index, 1);
      }
      if (this.activeKey === tab.key) {
        this.activeKey = this.tabs.length ? this.tabs[0].key : null;
      }
    },
    activate(key) {
      const tab = this.tabs.find((t) => t.key === key);
      if (tab && tab.disabled) {
        return;
      }
      this.activeKey = key;
    }
  }
};
</script>

<style scoped>
.b-tabs .nav-link {
  cursor: pointer;
}
</style>
