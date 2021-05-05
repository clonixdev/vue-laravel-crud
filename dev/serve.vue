<script>
import Vue from 'vue';
import VueLaravelCrud from '@/vue-laravel-crud.vue';

export default Vue.extend({
  name: 'ServeDev',
  components: {
    VueLaravelCrud
  }
});
</script>

<template>
  <div id="app">
    <vue-laravel-crud />
  </div>
</template>
