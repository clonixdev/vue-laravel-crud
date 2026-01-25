<template>
  <input
    :type="type"
    :class="inputClasses"
    :id="id"
    :name="name"
    :value="value"
    :placeholder="placeholder"
    :required="required"
    :disabled="disabled"
    :readonly="readonly"
    :min="min"
    :max="max"
    :step="step"
    :size="size"
    :state="state"
    @input="$emit('input', $event.target.value)"
    @change="$emit('change', $event)"
    @blur="$emit('blur', $event)"
    @focus="$emit('focus', $event)"
  />
</template>

<script>
export default {
  name: 'BFormInput',
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
  }
};
</script>
