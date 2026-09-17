<template>
  <option :value="value" :disabled="disabled">
    <slot>{{ label }}</slot>
  </option>
</template>

<script>
export default {
  name: 'BFormSelectOption',
  props: {
    value: {
      default: null
    },
    label: {
      type: String,
      default: ''
    },
    disabled: {
      type: Boolean,
      default: false
    }
  }
};
</script>
