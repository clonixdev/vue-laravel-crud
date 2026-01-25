<template>
  <div :class="formGroupClasses">
    <label
      v-if="label"
      :for="id"
      :class="labelClasses"
    >
      {{ label }}
      <span v-if="required" class="text-danger">*</span>
    </label>
    <div v-if="description" class="form-text">{{ description }}</div>
    <slot></slot>
    <div v-if="invalidFeedback" class="invalid-feedback">
      {{ invalidFeedback }}
    </div>
    <div v-if="validFeedback" class="valid-feedback">
      {{ validFeedback }}
    </div>
  </div>
</template>

<script>
export default {
  name: 'BFormGroup',
  props: {
    id: {
      type: String,
      default: null
    },
    label: {
      type: String,
      default: null
    },
    labelFor: {
      type: String,
      default: null
    },
    description: {
      type: String,
      default: null
    },
    invalidFeedback: {
      type: String,
      default: null
    },
    validFeedback: {
      type: String,
      default: null
    },
    labelCols: {
      type: [String, Number],
      default: null
    },
    labelColsSm: {
      type: [String, Number],
      default: null
    },
    labelColsMd: {
      type: [String, Number],
      default: null
    },
    labelColsLg: {
      type: [String, Number],
      default: null
    },
    labelColsXl: {
      type: [String, Number],
      default: null
    },
    contentCols: {
      type: [String, Number],
      default: null
    },
    contentColsSm: {
      type: [String, Number],
      default: null
    },
    contentColsMd: {
      type: [String, Number],
      default: null
    },
    contentColsLg: {
      type: [String, Number],
      default: null
    },
    contentColsXl: {
      type: [String, Number],
      default: null
    },
    required: {
      type: Boolean,
      default: false
    }
  },
  computed: {
    formGroupClasses() {
      return ['mb-3'];
    },
    labelClasses() {
      return ['form-label'];
    }
  }
};
</script>
