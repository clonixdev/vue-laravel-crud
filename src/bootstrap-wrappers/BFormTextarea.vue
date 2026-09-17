<template>
  <textarea
    :class="inputClasses"
    :id="id"
    :name="name"
    :value="localValue"
    :rows="rows"
    :placeholder="placeholder"
    :required="required"
    :disabled="disabled"
    :readonly="readonly"
    :wrap="wrap"
    :maxlength="maxlength"
    :minlength="minlength"
    @input="handleInput"
    @change="$emit('change', $event)"
    @blur="$emit('blur', $event)"
    @focus="$emit('focus', $event)"
  ></textarea>
</template>

<script>
export default {
  name: 'BFormTextarea',
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
    value: {
      type: [String, Number],
      default: null
    },
    modelValue: {
      type: [String, Number],
      default: undefined
    },
    rows: {
      type: [String, Number],
      default: 2
    },
    maxRows: {
      type: [String, Number],
      default: null
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
    wrap: {
      type: String,
      default: 'soft'
    },
    maxlength: {
      type: [String, Number],
      default: null
    },
    minlength: {
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
