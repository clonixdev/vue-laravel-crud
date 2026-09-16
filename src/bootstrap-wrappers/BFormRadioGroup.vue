<template>
  <div :class="groupClasses" role="radiogroup">
    <div
      v-for="(option, index) in normalizedOptions"
      :key="option.value + '-' + index"
      :class="optionWrapperClasses"
    >
      <input
        :id="optionId(index)"
        class="form-check-input"
        type="radio"
        :name="name || groupName"
        :value="option.value"
        :checked="isSelected(option.value)"
        :disabled="disabled || option.disabled"
        @change="onSelect(option.value)"
      />
      <label class="form-check-label" :for="optionId(index)">
        {{ option.text }}
      </label>
    </div>
    <slot></slot>
  </div>
</template>

<script>
/**
 * Compatibilidad bootstrap-vue <b-form-radio-group>.
 */
export default {
  name: 'BFormRadioGroup',
  emits: ['update:modelValue', 'input', 'change'],
  props: {
    modelValue: {
      type: [String, Number, Boolean, Object],
      default: null,
    },
    value: {
      type: [String, Number, Boolean, Object],
      default: undefined,
    },
    options: {
      type: Array,
      default: () => [],
    },
    name: {
      type: String,
      default: null,
    },
    disabled: {
      type: Boolean,
      default: false,
    },
    stacked: {
      type: Boolean,
      default: false,
    },
    buttons: {
      type: Boolean,
      default: false,
    },
    buttonVariant: {
      type: String,
      default: 'secondary',
    },
  },
  data() {
    return {
      groupName: `radio-group-${Math.random().toString(36).slice(2, 9)}`,
    };
  },
  computed: {
    selected() {
      return this.modelValue !== undefined && this.modelValue !== null
        ? this.modelValue
        : this.value;
    },
    normalizedOptions() {
      return (this.options || []).map((opt) => {
        if (opt !== null && typeof opt === 'object') {
          return {
            value: opt.value !== undefined ? opt.value : opt,
            text: opt.text !== undefined ? opt.text : String(opt.value !== undefined ? opt.value : opt),
            disabled: !!opt.disabled,
          };
        }
        return { value: opt, text: String(opt), disabled: false };
      });
    },
    groupClasses() {
      if (this.buttons) {
        return 'btn-group';
      }
      return this.stacked ? 'b-form-radio-group' : 'b-form-radio-group d-flex flex-wrap gap-3';
    },
    optionWrapperClasses() {
      if (this.buttons) {
        return `btn btn-${this.buttonVariant}`;
      }
      return 'form-check';
    },
  },
  methods: {
    optionId(index) {
      return `${this.name || this.groupName}-${index}`;
    },
    isSelected(value) {
      return this.selected === value;
    },
    onSelect(value) {
      this.$emit('update:modelValue', value);
      this.$emit('input', value);
      this.$emit('change', value);
    },
  },
};
</script>
