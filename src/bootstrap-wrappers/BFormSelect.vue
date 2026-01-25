<template>
  <select
    :class="selectClasses"
    :id="id"
    :name="name"
    :disabled="disabled"
    :required="required"
    :multiple="multiple"
    :size="size"
    @change="$emit('change', $event)"
    @input="$emit('input', $event.target.value)"
  >
    <option v-if="placeholder" value="" disabled>{{ placeholder }}</option>
    <slot>
      <option
        v-for="option in options"
        :key="option.value || option"
        :value="option.value !== undefined ? option.value : option"
        :selected="isSelected(option)"
      >
        {{ option.text !== undefined ? option.text : option.label !== undefined ? option.label : option }}
      </option>
    </slot>
  </select>
</template>

<script>
export default {
  name: 'BFormSelect',
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
      type: [String, Number, Array],
      default: null
    },
    options: {
      type: Array,
      default: () => []
    },
    disabled: {
      type: Boolean,
      default: false
    },
    required: {
      type: Boolean,
      default: false
    },
    multiple: {
      type: Boolean,
      default: false
    },
    size: {
      type: [String, Number],
      default: null
    },
    placeholder: {
      type: String,
      default: null
    },
    state: {
      type: [Boolean, String],
      default: null,
      validator: (value) => value === null || value === true || value === false || value === 'valid' || value === 'invalid'
    }
  },
  computed: {
    selectClasses() {
      const classes = ['form-select']; // Bootstrap 5 usa form-select
      
      // Bootstrap 4 usa form-control, pero también acepta form-select en algunas versiones
      // Usar ambas para compatibilidad
      classes.push('form-control');
      
      if (this.state === true || this.state === 'valid') {
        classes.push('is-valid');
      } else if (this.state === false || this.state === 'invalid') {
        classes.push('is-invalid');
      }
      
      if (this.size) {
        classes.push(`form-select-${this.size}`);
      }
      
      return classes.join(' ');
    }
  },
  methods: {
    isSelected(option) {
      const optionValue = option.value !== undefined ? option.value : option;
      if (this.multiple && Array.isArray(this.value)) {
        return this.value.includes(optionValue);
      }
      return this.value === optionValue;
    }
  }
};
</script>

<style scoped>
/* Asegurar que form-select funcione en Bootstrap 4 */
.form-select {
  display: block;
  width: 100%;
  padding: 0.375rem 2.25rem 0.375rem 0.75rem;
  font-size: 1rem;
  font-weight: 400;
  line-height: 1.5;
  color: #212529;
  background-color: #fff;
  background-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16'%3e%3cpath fill='none' stroke='%23343a40' stroke-linecap='round' stroke-linejoin='round' stroke-width='2' d='M2 5l6 6 6-6'/%3e%3c/svg%3e");
  background-repeat: no-repeat;
  background-position: right 0.75rem center;
  background-size: 16px 12px;
  border: 1px solid #ced4da;
  border-radius: 0.375rem;
  transition: border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;
}

.form-select:focus {
  border-color: #86b7fe;
  outline: 0;
  box-shadow: 0 0 0 0.25rem rgba(13, 110, 253, 0.25);
}

.form-select[disabled] {
  background-color: #e9ecef;
  opacity: 1;
}
</style>
