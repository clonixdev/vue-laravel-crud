<template>
  <div :class="formGroupClasses">
    <label v-if="label" :for="id" class="form-label">
      {{ label }}
    </label>
    <input
      ref="fileInput"
      :type="'file'"
      :class="inputClasses"
      :id="id"
      :name="name"
      :disabled="disabled"
      :required="required"
      :multiple="multiple"
      :accept="accept"
      @change="handleChange"
    />
    <div v-if="state === false || state === 'invalid'" class="invalid-feedback">
      {{ invalidFeedback }}
    </div>
    <div v-if="state === true || state === 'valid'" class="valid-feedback">
      {{ validFeedback }}
    </div>
  </div>
</template>

<script>
export default {
  name: 'BFormFile',
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
    modelValue: {
      type: [Object, Array],
      default: undefined
    },
    label: {
      type: String,
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
    multiple: {
      type: Boolean,
      default: false
    },
    accept: {
      type: String,
      default: null
    },
    placeholder: {
      type: String,
      default: 'Choose file...'
    },
    dropPlaceholder: {
      type: String,
      default: 'Drop file here...'
    },
    browseText: {
      type: String,
      default: 'Browse'
    },
    state: {
      type: [Boolean, String],
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
    size: {
      type: String,
      default: null,
      validator: (value) => !value || ['sm', 'lg'].includes(value)
    }
  },
  data() {
    return {
      file: null
    };
  },
  computed: {
    formGroupClasses() {
      return ['mb-3'];
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
  watch: {
    modelValue(value) {
      if ((value === null || value === undefined) && this.$refs.fileInput) {
        this.$refs.fileInput.value = '';
        this.file = null;
      }
    }
  },
  methods: {
    handleChange(event) {
      this.file = event.target.files[0] || (this.multiple ? event.target.files : null);
      this.$emit('input', this.file);
      this.$emit('update:modelValue', this.file);
      this.$emit('change', event);
    }
  }
};
</script>
