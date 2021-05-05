<script>
import draggable from "vuedraggable";

export default /*#__PURE__*/ {
  name: "VueLaravelCrud", // vue component name
  components: {
    draggable,
  },
  data() {
    return {
      loading: false,
      items: [],
      search: "",

      // modelName: "products",
      pagination: {
        current_page: 1,
        last_page: 1,
        next_page_url: "",
        prev_page_url: "",
        per_page: 20,
        total: 0,
      },
      itemDefault: null,
      filters: [],
      item: {
        id: null,
      },
      displayModes: {
        MODE_TABLE: 1,
        MODE_CARDS: 2,
      },
    };
  },
  watch: {
    search(val) {
      if (val && val != "") {
        this.filters = [];
        this.filters.push(["search", "LIKE", val]);
        this.fetchItems();
      } else {
        this.filters = [];
        this.fetchItems();
      }
    },
  },
  props: {
    modelName: String,
    model: Object,

    title: String,

    columns: {
      type: Array,
      default: [{ label: "Id", prop: "id", type: "number" }],
    },
    sorteable: {
      type: Boolean,
      default: false,
    },
    apiUrl: {
      type: String,
      default: "/api",
    },
    showPaginator: {
      type: Boolean,
      default: true,
    },
    showHeader: {
      type: Boolean,
      default: true,
    },
    limit: {
      type: Number,
      default: 20,
    },

    displayMode: {
      type: Number,
      default: 1,
    },

    enableDraggable: {
      type: Boolean,
      default: false,
    },

    selectHover: {
      type: Boolean,
      default: false,
    },
    selectClick: {
      type: Boolean,
      default: false,
    },
    messageRemoveConfirm: {
      type: String,
      default: "¿Esta seguro de borrar este elemento?",
    },

    messageRemove: {
      type: String,
      default: "BORRAR",
    },

    messageNew: {
      type: String,
      default: "Nuevo",
    },

    messageEmptyResults: {
      type: String,
      default: "No se han encontrado resultados",
    },
    messageSave: {
      type: String,
      default: "Guardar",
    },
  },

  mounted() {
    this.item = this.model;
    this.itemDefault = JSON.parse(JSON.stringify(this.item));
    this.fetchItems();
  },
  computed: {
    filteredItems() {
      return this.items;
    },
  },
  methods: {
    onRowHover(item, itemIndex) {
      if (this.selectHover) {
        this.item = this.items[itemIndex];
        this.onSelect();
      }
  
    },
    onRowClick(item, itemIndex) {
      if (this.selectClick) {
        this.item = this.items[itemIndex];
        this.onSelect();
      }
     
    },

    onSelect() {
      this.$emit("select", this.item);
    },
    showItem(id, itemIndex) {
      this.item = this.items[itemIndex];
      this.onSelect();
      this.$bvModal.show("modal-show-item-" + this.modelName);
    },
    createItem() {
      this.item = JSON.parse(JSON.stringify(this.itemDefault));
      this.onSelect();
      this.$bvModal.show("modal-form-item-" + this.modelName);
    },
    updateItem(id, itemIndex) {
      this.item = this.items[itemIndex];
      //console.debug(itemIndex);
      this.onSelect();
      this.$bvModal.show("modal-form-item-" + this.modelName);
    },

    refresh() {
      this.fetchItems();
    },
    fetchItems(page = 1) {
      let _this = this;
      _this.loading = true;
      axios
        .get(this.apiUrl + "/" + this.modelName, {
          params: {
            page: page,
            limit: this.limit,
            filters: JSON.stringify(this.filters),
          },
        })
        .then(function (response) {
          _this.makePagination(response.data);
          _this.items = response.data.data;
          _this.loading = false;
        })
        .catch(function (error) {
          //console.debug(error);
          _this.toastError(error);
          _this.loading = false;
        });
    },

    removeItem: function (id, index) {
      let _this = this;

      this.$bvModal
        .msgBoxConfirm(messageRemoveConfirm, {
          size: "sm",
          buttonSize: "sm",
          okVariant: "danger",
          okTitle: messageRemove,
          cancelTitle: "NO",
          centered: true,
        })
        .then((value) => {
          if (value) {
            _this.loading = true;
            axios
              .delete(apiUrl + "/" + _this.modelName + "/" + id)
              .then(function (response) {
                _this.items.splice(index, 1);
                _this.loading = false;
              })
              .catch(function (error) {
                _this.toastError(error);
                _this.loading = false;
              });
          }
        })
        .catch((err) => {
          _this.toastError(error);
        });
    },

    saveSort() {
      if (this.sorteable) {
        let _this = this;
        _this.loading = true;

        let order = [];

        this.items.forEach((v, k) => {
          order.push({ id: v.id, order: k + 1 });
          v.order = k + 1;
        });
        axios
          .post(this.apiUrl + "/" + _this.modelName + "/sort", { order: order })
          .then(function (response) {
            let data = response.data;

            _this.loading = false;
          })
          .catch(function (error) {
            //console.debug(error);
            _this.toastError(error);
            _this.loading = false;
          });
      }
    },
    async saveItem() {
      let _this = this;
      _this.loading = true;

      if (this.item.id) {
        axios
          .put(
            this.apiUrl + "/" + _this.modelName + "/" + _this.item.id,
            _this.item
          )
          .then(function (response) {
            _this.$bvModal.hide("modal-form-item-" + _this.modelName);
            let itemSv = response.data;
            let itemIndex = _this.items.findIndex(
              (item) => item.id == _this.item.id
            );
            _this.items[itemIndex] = itemSv;
            _this.item = itemSv;
            _this.loading = false;
          })
          .catch(function (error) {
            _this.toastError(error);
            _this.loading = false;
          });
      } else {
        axios
          .post(this.apiUrl + "/" + _this.modelName, _this.item)
          .then(function (response) {
            _this.loading = false;
            _this.$bvModal.hide("modal-form-item-" + _this.modelName);
            if (response.data.success) {
              if (response.data.message) {
                _this.toastSuccess(response.data.message);
              }
              return;
            }

            let itemSv = response.data;

            _this.items.push(itemSv);
            _this.item = itemSv;
          })
          .catch(function (error) {
            _this.toastError(error);
            _this.loading = false;
          });
      }
    },

    toastError(error) {
      this.$bvToast.toast(error.message, {
        title: `Error`,
        toaster: "b-toaster-bottom-right",
        variant: "danger",
        solid: true,
        appendToast: true,
      });
    },
    toastSuccess(message) {
      this.$bvToast.toast(message, {
        title: `Listo`,
        toaster: "b-toaster-bottom-right",
        variant: "success",
        solid: true,
        appendToast: true,
      });
    },

    onPaginationChange(page) {
      this.fetchItems(page);
    },
    makePagination: function (data) {
      let pagination = {
        current_page: data.current_page,
        last_page: data.last_page,
        next_page_url: data.next_page_url,
        prev_page_url: data.prev_page_url,
        total: data.total,
        per_page: data.per_page,
      };
      this.pagination = pagination;
    },
  },
};
</script>

<template>
  <div class="crud">
    <div class="table-options" v-if="showHeader">
      <b-row>
        <b-col>
          <b-button-group>
            <slot
              name="tableActions"
              v-bind:createItem="createItem"
              v-bind:loading="loading"
            >
              <b-button
                variant="success"
                @click="createItem()"
                :disabled="loading"
              >
                <b-icon-plus></b-icon-plus>{{ messageNew }}
              </b-button>
            </slot>
          </b-button-group>
        </b-col>
        <b-col xs="6" md="4" xl="3">
          <b-form-input
            v-model="search"
            type="search"
            required
            placeholder="Buscar..."
            debounce="500"
          ></b-form-input>
        </b-col>
      </b-row>
    </div>

    <b-overlay :show="loading" rounded="sm">
      <div v-if="displayMode == displayModes.MODE_TABLE">
        <table class="table table-responsive table-hover table-striped w-100">
          <thead class="thead-dark">
            <tr>
              <slot name="rowHead">
                <th v-for="(column, indexc) in columns" :key="indexc">
                  {{ column.label }}
                </th>
              </slot>
            </tr>
          </thead>

          <tbody>
            <p v-if="items.length == 0" class="p-3">
              {{ messageEmptyResults }}
            </p>
            <tr
              v-for="(item, index) in filteredItems"
              v-bind:key="index"
              @mouseover="onRowHover(item, index)"
              @click="onRowClick(item, index)"
            >
              <slot name="row" v-bind:item="item">
                <td v-for="(column, indexc) in columns" :key="indexc">
                  <slot :name="'cell-' + column.prop" v-bind:item="item">
                    <span v-if="column.prop &&  column.prop.split('.').length > 1 && column.prop.split('.')[1]">
                      {{
                        item[column.prop.split(".")[0]][
                          column.prop.split(".")[1]
                        ]
                      }}</span
                    >
                    <span v-else> {{ item[column.prop] }}</span>
                  </slot>

                  <b-button-group v-if="column.type == 'actions'">
                    <slot
                      name="rowAction"
                      v-bind:item="item"
                      v-bind:index="index"
                      v-bind:showItem="showItem"
                      v-bind:updateItem="updateItem"
                      v-bind:removeItem="removeItem"
                    >
                      <b-button
                        variant="primary"
                        @click="showItem(item.id, index)"
                      >
                        <b-icon-eye></b-icon-eye>
                      </b-button>
                      <b-button
                        variant="secondary"
                        @click="updateItem(item.id, index)"
                      >
                        <b-icon-pencil></b-icon-pencil>
                      </b-button>
                      <b-button
                        variant="danger"
                        @click="removeItem(item.id, index)"
                      >
                        <b-icon-trash></b-icon-trash>
                      </b-button>
                    </slot>
                  </b-button-group>
                </td>
              </slot>
            </tr>
          </tbody>
        </table>
      </div>

      <div v-if="displayMode == displayModes.MODE_CARDS">
        <p v-if="items.length == 0" class="p-3">
          {{ messageEmptyResults }}
        </p>

        <draggable
          v-model="items"
          group="people"
          class="row"
          @start="drag = true"
          @end="drag = false"
          @sort="onSort()"
        >
          <b-row>
            <!-- :cols="colXs" :sm="colSm" :md="colMd" :lg="colMd" :xl="colXl" -->
            <b-col v-for="(item, index) in filteredItems" v-bind:key="index">
              <b-card :title="item.title" tag="article" class="mb-2">
                <slot name="row" v-bind:item="item">
                  <div v-for="(column, indexc) in columns" :key="indexc">
                    <b-card-text v-if="column.type != 'actions'"
                      >{{ column.label }}:
                      <slot :name="'cell-' + column.prop" v-bind:item="item">
                        {{ item[column.prop] }}
                      </slot>
                    </b-card-text>
                  </div>
                </slot>

                <template v-slot:footer>
                  <b-button-group>
                    <slot
                      name="rowAction"
                      v-bind:item="item"
                      v-bind:index="index"
                      v-bind:showItem="showItem"
                      v-bind:updateItem="updateItem"
                      v-bind:removeItem="removeItem"
                    >
                      <b-button
                        variant="primary"
                        @click="showItem(item.id, index)"
                      >
                        <b-icon-eye></b-icon-eye>
                      </b-button>
                      <b-button
                        variant="secondary"
                        @click="updateItem(item.id, index)"
                      >
                        <b-icon-pencil></b-icon-pencil>
                      </b-button>
                      <b-button
                        variant="danger"
                        @click="removeItem(item.id, index)"
                      >
                        <b-icon-trash></b-icon-trash>
                      </b-button>
                    </slot>
                  </b-button-group>
                </template>
              </b-card>
            </b-col>
          </b-row>
        </draggable>
      </div>
    </b-overlay>
    <b-pagination
      v-if="showPaginator"
      v-model="pagination.current_page"
      :total-rows="pagination.total"
      :per-page="pagination.per_page"
      @change="onPaginationChange($event)"
    ></b-pagination>

    <b-modal
      :id="'modal-form-item-' + modelName"
      hide-footer
      size="xl"
      :title="title"
    >
      <b-overlay :show="loading" rounded="sm">
        <slot name="form" v-bind:item="item">
          <b-form-group label="Nombre:" description="Nombre ">
            <b-form-input
              v-model="item.title"
              type="text"
              required
              placeholder="Nombre"
            ></b-form-input>
          </b-form-group>
        </slot>

        <b-button
          block
          type="submit"
          variant="success"
          @click="saveItem()"
          :disabled="loading"
        >
          <b-spinner small v-if="loading"></b-spinner>{{ messageSave }}
        </b-button>
      </b-overlay>
    </b-modal>
    <b-modal
      :id="'modal-show-item-' + modelName"
      hide-footer
      size="xl"
      :title="title"
    >
      <slot name="show" v-bind:item="item">
        <p class="my-4">Show</p>
      </slot>
    </b-modal>
  </div>
</template>

<style lang="scss" scoped>
tr td:last-child,
tr td:first-child {
  width: 1%;
  white-space: nowrap;
}

.table-options {
  margin-bottom: 1rem;
}
</style>