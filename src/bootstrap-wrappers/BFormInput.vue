<template>
  <input
    :type="type"
    :class="inputClasses"
    :id="id"
    :name="name"
    :value="localValue"
    :placeholder="placeholder"
    :required="required"
    :disabled="disabled"
    :readonly="readonly"
    :min="min"
    :max="max"
    :step="step"
    :size="size"
    :state="state"
    @input="handleInput"
    @change="$emit('change', $event)"
    @blur="$emit('blur', $event)"
    @focus="$emit('focus', $event)"
  />
</template>

<script>
export default {
  name: 'BFormInput',
  emits: ['input', 'change', 'blur', 'focus', 'update:modelValue'],
  props: {
    id: {
      type: String,
      default: null
    },
    name: {
      type: String,
      default: null
    },
    type: {
      type: String,
      default: 'text'
    },
    value: {
      type: [String, Number],
      default: null
    },
    modelValue: {
      type: [String, Number],
      default: undefined
    },
    placeholder: {
      type: String,
      default: null
    },
    required: {
      type: Boolean,
      default: false
    },
    disabled: {
      type: Boolean,
      default: false
    },
    readonly: {
      type: Boolean,
      default: false
    },
    min: {
      type: [String, Number],
      default: null
    },
    max: {
      type: [String, Number],
      default: null
    },
    step: {
      type: [String, Number],
      default: null
    },
    size: {
      type: String,
      default: null,
      validator: (value) => !value || ['sm', 'lg'].includes(value)
    },
    state: {
      type: [Boolean, String],
      default: null,
      validator: (value) => value === null || value === true || value === false || value === 'valid' || value === 'invalid'
    },
    debounce: {
      type: [String, Number],
      default: null
    }
  },
  computed: {
    localValue() {
      return this.modelValue !== undefined ? this.modelValue : this.value;
    },
    inputClasses() {
      const classes = ['form-control'];
      
      if (this.size) {
        classes.push(`form-control-${this.size}`);
      }
      
      if (this.state === true || this.state === 'valid') {
        classes.push('is-valid');
      } else if (this.state === false || this.state === 'invalid') {
        classes.push('is-invalid');
      }
      
      return classes.join(' ');
    }
  },
  methods: {
    handleInput(event) {
      const value = event.target.value;
      this.$emit('input', value);
      this.$emit('update:modelValue', value);
    }
  }
};
</script>
