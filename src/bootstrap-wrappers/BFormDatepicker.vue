<template>
  <div class="mb-3">
    <label v-if="label" :for="id" class="form-label">{{ label }}</label>
    <input
      :type="'date'"
      :class="inputClasses"
      :id="id"
      :name="name"
      :value="formattedValue"
      :disabled="disabled"
      :required="required"
      :min="min"
      :max="max"
      @input="handleInput"
      @change="handleChange"
    />
    <div v-if="state === false || state === 'invalid'" class="invalid-feedback">
      {{ invalidFeedback }}
    </div>
  </div>
</template>

<script>
export default {
  name: 'BFormDatepicker',
  emits: ['input', 'change', 'update:modelValue'],
  props: {
    id: {
      type: String,
      default: null
    },
    name: {
      type: String,
      default: null
    },
    label: {
      type: String,
      default: null
    },
    value: {
      type: [String, Date],
      default: null
    },
    modelValue: {
      type: [String, Date],
      default: undefined
    },
    disabled: {
      type: Boolean,
      default: false
    },
    required: {
      type: Boolean,
      default: false
    },
    min: {
      type: [String, Date],
      default: null
    },
    max: {
      type: [String, Date],
      default: null
    },
    locale: {
      type: String,
      default: 'en'
    },
    todayButton: {
      type: Boolean,
      default: false
    },
    resetButton: {
      type: Boolean,
      default: false
    },
    closeButton: {
      type: Boolean,
      default: false
    },
    state: {
      type: [Boolean, String],
      default: null
    },
    invalidFeedback: {
      type: String,
      default: null
    }
  },
  computed: {
    localValue() {
      return this.modelValue !== undefined ? this.modelValue : this.value;
    },
    inputClasses() {
      const classes = ['form-control'];
      
      if (this.state === false || this.state === 'invalid') {
        classes.push('is-invalid');
      } else if (this.state === true || this.state === 'valid') {
        classes.push('is-valid');
      }
      
      return classes.join(' ');
    },
    formattedValue() {
      if (!this.localValue) return '';
      
      if (this.localValue instanceof Date) {
        return this.localValue.toISOString().split('T')[0];
      }
      
      // Si es string, intentar parsearlo
      const date = new Date(this.localValue);
      if (!isNaN(date.getTime())) {
        return date.toISOString().split('T')[0];
      }
      
      return this.localValue;
    }
  },
  methods: {
    handleInput(event) {
      this.$emit('input', event.target.value);
      this.$emit('update:modelValue', event.target.value);
    },
    handleChange(event) {
      this.$emit('change', event.target.value);
    }
  }
};
</script>
