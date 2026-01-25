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
      if (!this.value) return '';
      
      if (this.value instanceof Date) {
        return this.value.toISOString().split('T')[0];
      }
      
      // Si es string, intentar parsearlo
      const date = new Date(this.value);
      if (!isNaN(date.getTime())) {
        return date.toISOString().split('T')[0];
      }
      
      return this.value;
    }
  },
  methods: {
    handleInput(event) {
      this.$emit('input', event.target.value);
    },
    handleChange(event) {
      this.$emit('change', event.target.value);
    }
  }
};
</script>
