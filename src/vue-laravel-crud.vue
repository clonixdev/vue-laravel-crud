<script>
import draggable from "vuedraggable";
import axios from "axios";

export default /*#__PURE__*/ {
  name: "VueLaravelCrud", // vue component name
  components: {
    draggable,
  },
  data() {
    return {
      forceRecomputeCounter: 0,
      loading: false,
      items: [],
      displaySearch: false,

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
      internalFilters: [],
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

    filter: {
      type: Array,
      default: [],
    },

    enableFilters: {
      type: Boolean,
      default: false,
    },

    sorteable: {
      type: Boolean,
      default: false,
    },

    createMultipart: {
      type: Boolean,
      default: false,
    },

    apiUrl: {
      type: String,
      default: "/api",
    },

    search: {
      type: String,
      default: "",
    },

    showPaginator: {
      type: Boolean,
      default: true,
    },

    showHeader: {
      type: Boolean,
      default: true,
    },
    showTitle: {
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

    displayModeToggler: {
      type: Boolean,
      default: false,
    },

    colXs: {
      default: 12,
      type: Number,
    },
    colSm: {
      default: 12,
      type: Number,
    },
    colMd: {
      default: 6,
      type: Number,
    },
    colLg: {
      default: 4,
      type: Number,
    },
    colXl: {
      default: 3,
      type: Number,
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
    searchPlaceholder: {
      type: String,
      default: "Buscar...",
    },
  },

  mounted() {
    this.item = this.model;
    this.itemDefault = JSON.parse(JSON.stringify(this.item));

    this.internalFilters = [];
    this.columns.forEach((column) => {
      if (this.isColumnHasFilter(column)) {
        this.internalFilters.push({
          column: column.prop,
          op: column.filterOp ? column.filterOp : "=",
          value: -1,
        });
      }
    });
    this.fetchItems();
  },
  computed: {
    filteredItems() {
      return this.items;
    },

    finalFilters() {
      return this.filters.concat(this.filter).concat(this.internalFilter);
    },

    internalFilter() {
      let filter = [];
      this.forceRecomputeCounter;
      this.internalFilters.forEach((f) => {
        if (f.value > 0) filter.push([f.column, f.op, f.value]);
      });

      return filter;
    },
  },
  methods: {
    getInternalFilterByProp(prop) {
      return this.internalFilters.find((inf) => inf.prop == prop);
    },

    toggleDisplayMode() {
      if (this.displayMode == this.displayModes.MODE_TABLE)
        this.displayMode = this.displayModes.MODE_CARDS;
      else if (this.displayMode == this.displayModes.MODE_CARDS)
        this.displayMode = this.displayModes.MODE_TABLE;
    },
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
    isColumnHasFilter(column) {
      return column && column.type != "actions";
    },
    setFilter(column, value) {
      let filter = this.filter.find((f) => f.column == column);
      filter.value = value;
      this.forceRecomputeCounter++;
      setTimeout(() => {
        this.$refs.crud.refresh();
      }, 1);
    },
    fetchItems(page = 1) {
      let _this = this;
      _this.loading = true;
      axios
        .get(this.apiUrl + "/" + this.modelName, {
          params: {
            page: page,
            limit: this.limit,
            filters: JSON.stringify(this.finalFilters),
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
          .post(this.apiUrl + "/" + _this.modelName + "/sort", {
            order: order,
          })
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
        if (this.createMultipart) {
          const formData = new FormData();

          formData.append("avatar", this.FILE, this.FILE.name);
          formData.append("name", this.name);

          Object.keys(_this.item).forEach((key) => {
            formData.append(key, _this.item[key]);
          });

          axios
            .post(this.apiUrl + "/" + _this.modelName, formData)
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
    <div class="crud-header" v-if="showHeader">
      <h4 class="crud-title" v-if="showTitle">{{ title }}</h4>

      <b-sidebar id="sidebar-filters" title="Filtrar" right shadow>
        <slot
          name="sidebarFilters"
          v-bind:createItem="createItem"
          v-bind:toggleDisplayMode="toggleDisplayMode"
          v-bind:loading="loading"
          v-bind:isColumnHasFilter="isColumnHasFilter"
          v-bind:setFilter="setFilter"
        >
          <div class="px-3 py-2">
            <div v-for="(column, indexc) in columns" :key="indexc">
              <div v-if="isColumnHasFilter(column)">
                <slot
                  :name="'sidebar-filter-' + column.prop"
                  v-bind:column="column"
                  v-bind:filter="filter"
                  v-bind:getInternalFilterByProp="getInternalFilterByProp"
                >
                  <div class="form-group">
                    <label>{{ column.label }}</label>
                    <input
                      class="form-control"
                      v-model="getInternalFilterByProp(column.prop).value"
                    />
                  </div>
                </slot>
              </div>
            </div>
          </div>
        </slot>
      </b-sidebar>

      <div class="table-options">
        <b-button-group class="mr-1">
          <slot
            name="tableActions"
            v-bind:createItem="createItem"
            v-bind:toggleDisplayMode="toggleDisplayMode"
            v-bind:loading="loading"
          >
            <b-button
              variant="success"
              @click="createItem()"
              :disabled="loading"
            >
              <b-icon-plus></b-icon-plus>{{ messageNew }}
            </b-button>

            <b-button v-if="enableFilters" v-b-toggle.sidebar-filters
              >Filtros</b-button
            >

            <b-button
              variant="info"
              @click="toggleDisplayMode()"
              :disabled="loading"
              v-if="displayModeToggler"
            >
              <b-icon-card-list
                v-if="displayMode == displayModes.MODE_TABLE"
              ></b-icon-card-list>
              <b-icon-table
                v-if="displayMode == displayModes.MODE_CARDS"
              ></b-icon-table>
            </b-button>

            <div class="crud-search m-0">
              <b-input-group>
                <b-input-group-prepend>
                  <b-button
                    variant="info"
                    @click="displaySearch = !displaySearch"
                    :class="{ open: displaySearch }"
                    ><b-icon-search></b-icon-search
                  ></b-button>
                </b-input-group-prepend>
                <b-form-input
                  v-if="displaySearch"
                  v-model="search"
                  class="pl-2"
                  type="search"
                  required
                  :placeholder="searchPlaceholder"
                  debounce="500"
                ></b-form-input>
              </b-input-group>
            </div>
          </slot>
        </b-button-group>
      </div>
    </div>
    <b-overlay :show="loading" rounded="sm">
      <div
        class="table-responsive"
        v-if="displayMode == displayModes.MODE_TABLE"
      >
        <table class="table table-hover table-striped w-100">
          <thead class="thead-light">
            <tr>
              <slot name="rowHead">
                <th v-for="(column, indexc) in columns" :key="indexc">
                  <slot
                    :name="'filter-' + column.prop"
                    v-bind:column="column"
                    v-bind:filter="filter"
                    v-bind:getInternalFilterByProp="getInternalFilterByProp"
                    v-if="enableFilters && filtersVisible && isColumnHasFilter(column)"
                  >
                    <input
                      class="form-control"
                      v-model="getInternalFilterByProp(column.prop).value"
                      :placeholder="column.label"
                    />
                  </slot>

                  <span
                    v-if="!enableFilters || (enableFilters && !filtersVisible) || !isColumnHasFilter(column)"
                    >{{ column.label }}</span
                  >
                </th>
              </slot>
            </tr>
          </thead>

          <tbody>
            <tr
              v-for="(item, index) in filteredItems"
              v-bind:key="index"
              @mouseover="onRowHover(item, index)"
              @click="onRowClick(item, index)"
            >
              <slot name="row" v-bind:item="item">
                <td v-for="(column, indexc) in columns" :key="indexc">
                  <slot :name="'cell-' + column.prop" v-bind:item="item">
                    <span
                      v-if="
                        column.prop &&
                        column.prop.split('.').length > 1 &&
                        column.prop.split('.')[1]
                      "
                    >
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
        <p v-if="items.length == 0" class="p-3">
          {{ messageEmptyResults }}
        </p>
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
          <b-col
            v-for="(item, index) in filteredItems"
            v-bind:key="index"
            :cols="colXs"
            :sm="colSm"
            :md="colMd"
            :lg="colLg"
            :xl="colXl"
          >
            <b-card :title="item.title" tag="article" class="mb-2">
              <slot name="card" v-bind:item="item">
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
        </draggable>
      </div>
    </b-overlay>
    <div class="crud-paginator">
      <b-pagination
        v-if="showPaginator"
        v-model="pagination.current_page"
        :total-rows="pagination.total"
        :per-page="pagination.per_page"
        @change="onPaginationChange($event)"
      ></b-pagination>
    </div>
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
.crud-pagination {
  display: flex;
  justify-content: center;
}
.crud-header {
  display: flex;
  justify-content: space-between;
  max-height: 3rem;

  .crud-title {
    margin: 0;
  }

  .crud-search {
    max-width: 15rem;

    .btn {
      border-top-left-radius: 0;
      border-bottom-left-radius: 0;
      border-top-right-radius: 0.375rem;
      border-bottom-right-radius: 0.375rem;

      &.open {
        border-top-right-radius: 0;
        border-bottom-right-radius: 0;
      }
    }
  }
  .table-options {
    margin-bottom: 1rem;
    display: flex;
    align-items: center;
    justify-content: flex-end;
  }
}
</style>