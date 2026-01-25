<template>
  <component
    :is="tag"
    :class="cardClasses"
    :id="id"
  >
    <slot name="header">
      <BCardHeader v-if="header || $slots['header']">
        <slot name="header"></slot>
      </BCardHeader>
    </slot>
    
    <slot name="body">
      <BCardBody v-if="body || $slots['body']">
        <slot name="body"></slot>
      </BCardBody>
    </slot>
    
    <slot></slot>
    
    <slot name="footer">
      <BCardFooter v-if="footer && !hideFooter">
        <slot name="footer"></slot>
      </BCardFooter>
    </slot>
  </component>
</template>

<script>
import BCardHeader from './BCardHeader.vue';
import BCardBody from './BCardBody.vue';
import BCardFooter from './BCardFooter.vue';

export default {
  name: 'BCard',
  components: {
    BCardHeader,
    BCardBody,
    BCardFooter
  },
  props: {
    tag: {
      type: String,
      default: 'div'
    },
    id: {
      type: String,
      default: null
    },
    title: {
      type: String,
      default: null
    },
    header: {
      type: [String, Boolean],
      default: false
    },
    body: {
      type: Boolean,
      default: true
    },
    footer: {
      type: [String, Boolean],
      default: false
    },
    hideFooter: {
      type: Boolean,
      default: false
    },
    imgSrc: {
      type: String,
      default: null
    },
    imgTop: {
      type: Boolean,
      default: false
    },
    imgBottom: {
      type: Boolean,
      default: false
    },
    imgAlt: {
      type: String,
      default: null
    }
  },
  computed: {
    cardClasses() {
      const classes = ['card'];
      return classes.join(' ');
    }
  }
};
</script>
