<template>
  <div class="b-form-tags" :class="wrapperClasses">
    <div class="form-control d-flex flex-wrap align-items-center gap-1">
      <span
        v-for="(tag, index) in tags"
        :key="`${tag}-${index}`"
        class="badge bg-secondary text-white d-inline-flex align-items-center gap-1"
        :class="tagClass"
      >
        {{ tag }}
        <button
          type="button"
          class="btn-close btn-close-white"
          style="font-size: 0.55rem"
          :disabled="disabled"
          :aria-label="removeButtonText"
          @click.prevent="removeTag(index)"
        ></button>
      </span>
      <input
        :id="inputId"
        ref="tagInput"
        type="text"
        class="flex-grow-1 border-0"
        style="outline: none; min-width: 6rem"
        :value="newTag"
        :placeholder="tags.length ? '' : placeholder"
        :disabled="disabled"
        :aria-label="placeholder"
        @input="handleInput"
        @keydown="handleKeydown"
        @blur="handleBlur"
      />
      <button
        v-if="addButtonText"
        type="button"
        class="btn btn-sm btn-outline-secondary"
        :disabled="disabled || !newTag.trim()"
        @click.prevent="addTag(newTag)"
      >
        {{ addButtonText }}
      </button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'BFormTags',
  emits: ['input', 'change', 'update:modelValue'],
  props: {
    value: {
      type: [Array, String],
      default: () => []
    },
    modelValue: {
      type: [Array, String],
      default: undefined
    },
    inputId: {
      type: String,
      default: null
    },
    placeholder: {
      type: String,
      default: 'Agregar...'
    },
    addButtonText: {
      type: String,
      default: null
    },
    removeButtonText: {
      type: String,
      default: 'Quitar'
    },
    tagClass: {
      type: [String, Array, Object],
      default: null
    },
    disabled: {
      type: Boolean,
      default: false
    },
    max: {
      type: [Number, String],
      default: null
    },
    duplicate: {
      type: Boolean,
      default: false
    },
    state: {
      type: [Boolean, String],
      default: null
    }
  },
  data() {
    return {
      newTag: ''
    };
  },
  computed: {
    localValue() {
      return this.modelValue !== undefined ? this.modelValue : this.value;
    },
    tags() {
      const value = this.localValue;
      if (Array.isArray(value)) {
        return value.filter((tag) => tag !== null && tag !== undefined && String(tag) !== '');
      }
      if (typeof value === 'string' && value !== '') {
        return value.split(',').map((tag) => tag.trim()).filter(Boolean);
      }
      return [];
    },
    wrapperClasses() {
      return {
        'is-invalid': this.state === false || this.state === 'invalid',
        'is-valid': this.state === true || this.state === 'valid'
      };
    }
  },
  methods: {
    emitTags(tags) {
      this.$emit('input', tags);
      this.$emit('update:modelValue', tags);
      this.$emit('change', tags);
    },
    addTag(tag) {
      tag = String(tag || '').trim();
      if (!tag || this.disabled) {
        this.newTag = '';
        return;
      }
      if (this.max && this.tags.length >= Number(this.max)) {
        this.newTag = '';
        return;
      }
      if (!this.duplicate && this.tags.includes(tag)) {
        this.newTag = '';
        return;
      }
      this.emitTags(this.tags.concat([tag]));
      this.newTag = '';
    },
    removeTag(index) {
      if (this.disabled) {
        return;
      }
      const next = this.tags.slice();
      next.splice(index, 1);
      this.emitTags(next);
    },
    handleInput(event) {
      const value = event.target.value;
      if (value.includes(',')) {
        value.split(',').forEach((tag) => this.addTag(tag));
        this.newTag = '';
      } else {
        this.newTag = value;
      }
    },
    handleKeydown(event) {
      if (event.key === 'Enter' || event.key === ',') {
        event.preventDefault();
        this.addTag(this.newTag);
      } else if (event.key === 'Backspace' && !this.newTag && this.tags.length) {
        this.removeTag(this.tags.length - 1);
      }
    },
    handleBlur() {
      if (this.newTag.trim()) {
        this.addTag(this.newTag);
      }
    }
  }
};
</script>
