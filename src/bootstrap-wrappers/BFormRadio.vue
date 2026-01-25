<template>
  <div :class="radioClasses">
    <input
      :type="'radio'"
      :class="inputClasses"
      :id="id"
      :name="name"
      :value="value"
      :checked="isChecked"
      :disabled="disabled"
      :required="required"
      @change="handleChange"
    />
    <label :for="id" class="form-check-label">
      <slot></slot>
    </label>
  </div>
</template>

<script>
export default {
  name: 'BFormRadio',
  props: {
    id: {
      type: String,
      default: null
    },
    name: {
      type: String,
      required: true
    },
    value: {
      type: [String, Number, Boolean],
      required: true
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
    }
  },
  computed: {
    radioClasses() {
      const classes = ['form-check'];
      
      if (this.inline) {
        classes.push('form-check-inline');
      }
      
      if (this.button) {
        classes.push('btn-check');
      }
      
      return classes.join(' ');
    },
    inputClasses() {
      const classes = ['form-check-input'];
      
      if (this.button) {
        classes.push(`btn`, `btn-${this.buttonVariant}`);
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
  methods: {
    handleChange(event) {
      this.$emit('change', event);
      this.$emit('input', this.value);
    }
  }
};
</script>
