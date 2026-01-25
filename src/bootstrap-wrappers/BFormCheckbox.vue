<template>
  <div :class="checkboxClasses">
    <input
      :type="'checkbox'"
      :class="inputClasses"
      :id="id"
      :name="name"
      :value="value"
      :checked="isChecked"
      :disabled="disabled"
      :required="required"
      :indeterminate="indeterminate"
      @change="handleChange"
      @input="handleInput"
    />
    <label :for="id" class="form-check-label" v-if="$slots.default || label">
      <slot></slot>
      <template v-if="!$slots.default && label">{{ label }}</template>
    </label>
  </div>
</template>

<script>
export default {
  name: 'BFormCheckbox',
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
      type: [String, Number, Boolean],
      default: true
    },
    checked: {
      type: Boolean,
      default: false
    },
    disabled: {
      type: Boolean,
      default: false
    },
    required: {
      type: Boolean,
      default: false
    },
    indeterminate: {
      type: Boolean,
      default: false
    },
    inline: {
      type: Boolean,
      default: false
    },
    button: {
      type: Boolean,
      default: false
    },
    buttonVariant: {
      type: String,
      default: 'primary'
    },
    state: {
      type: [Boolean, String],
      default: null
    },
    label: {
      type: String,
      default: null
    },
    size: {
      type: String,
      default: null,
      validator: (value) => !value || ['sm', 'lg'].includes(value)
    }
  },
  computed: {
    checkboxClasses() {
      const classes = ['form-check'];
      
      if (this.inline) {
        classes.push('form-check-inline');
      }
      
      if (this.button) {
        classes.push('btn-check');
      }
      
      if (this.size) {
        classes.push(`form-check-${this.size}`);
      }
      
      return classes.join(' ');
    },
    inputClasses() {
      const classes = ['form-check-input'];
      
      if (this.button) {
        classes.push('btn', `btn-${this.buttonVariant}`);
      }
      
      if (this.state === true || this.state === 'valid') {
        classes.push('is-valid');
      } else if (this.state === false || this.state === 'invalid') {
        classes.push('is-invalid');
      }
      
      return classes.join(' ');
    },
    isChecked() {
      return this.checked;
    }
  },
  watch: {
    indeterminate(newVal) {
      if (this.$el && this.$el.querySelector('input')) {
        this.$el.querySelector('input').indeterminate = newVal;
      }
    }
  },
  mounted() {
    if (this.indeterminate && this.$el && this.$el.querySelector('input')) {
      this.$el.querySelector('input').indeterminate = true;
    }
  },
  methods: {
    handleChange(event) {
      const checked = event.target.checked;
      this.$emit('change', checked ? this.value : null);
      this.$emit('input', checked ? this.value : null);
    },
    handleInput(event) {
      const checked = event.target.checked;
      this.$emit('input', checked ? this.value : null);
    }
  }
};
</script>
