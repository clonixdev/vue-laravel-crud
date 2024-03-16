<script>
import Vue from 'vue';
import VueLaravelCrud from '@/vue-laravel-crud.vue';
import { BootstrapVue, BootstrapVueIcons } from 'bootstrap-vue'

Vue.use(BootstrapVue)
Vue.use(BootstrapVueIcons)
export default Vue.extend({
  name: 'ServeDev',
  components: {
    VueLaravelCrud
  }
});
</script>

<template>
  <div id="app">
    <vue-laravel-crud ref="crud" title="Posts Categorías" :modelName="'post-categories'" :model="item" :columns="columns"
                    :showCreateBtn="true">
                    <template v-slot:show="slotProps">

                    </template>

                    <template v-slot:form="slotProps">
                        <b-form-group label="Nombre:" description="Nombre">
                            <b-form-input v-model="slotProps.item.name" type="text" required
                                placeholder="Nombre"></b-form-input>
                        </b-form-group>
                    </template>


                    <template v-slot:rowAction="slotProps">
                        <!--  <b-button variant="primary" @click="slotProps.showItem(slotProps.item.id, slotProps.index)">
                <b-icon-eye></b-icon-eye>
            </b-button> -->
                        <b-button variant="secondary" @click="slotProps.updateItem(slotProps.item.id, slotProps.index)">
                            <b-icon-pencil></b-icon-pencil>
                        </b-button>

                        <b-button variant="danger" @click="slotProps.removeItem(slotProps.item.id, slotProps.index)">
                            <b-icon-trash></b-icon-trash>
                        </b-button>
                    </template>



                </vue-laravel-crud>
  </div>
</template>
