import draggable from 'vuedraggable';
import axios from 'axios';

var script = /*#__PURE__*/{
  name: "VueLaravelCrud",
  // vue component name
  components: {
    draggable
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
        total: 0
      },
      itemDefault: null,
      filters: [],
      internalFilters: [],
      item: {
        id: null
      },
      displayModes: {
        MODE_TABLE: 1,
        MODE_CARDS: 2
      }
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
    }

  },
  props: {
    modelName: String,
    model: Object,
    title: String,
    columns: {
      type: Array,
      default: [{
        label: "Id",
        prop: "id",
        type: "number"
      }]
    },
    filter: {
      type: Array,
      default: []
    },
    filterSidebar: {
      type: Boolean,
      default: false
    },
    sorteable: {
      type: Boolean,
      default: false
    },
    createMultipart: {
      type: Boolean,
      default: false
    },
    apiUrl: {
      type: String,
      default: "/api"
    },
    search: {
      type: String,
      default: ""
    },
    showPaginator: {
      type: Boolean,
      default: true
    },
    showHeader: {
      type: Boolean,
      default: true
    },
    showTitle: {
      type: Boolean,
      default: true
    },
    limit: {
      type: Number,
      default: 20
    },
    displayMode: {
      type: Number,
      default: 1
    },
    displayModeToggler: {
      type: Boolean,
      default: false
    },
    colXs: {
      default: 12,
      type: Number
    },
    colSm: {
      default: 12,
      type: Number
    },
    colMd: {
      default: 6,
      type: Number
    },
    colLg: {
      default: 4,
      type: Number
    },
    colXl: {
      default: 3,
      type: Number
    },
    enableDraggable: {
      type: Boolean,
      default: false
    },
    selectHover: {
      type: Boolean,
      default: false
    },
    selectClick: {
      type: Boolean,
      default: false
    },
    messageRemoveConfirm: {
      type: String,
      default: "¿Esta seguro de borrar este elemento?"
    },
    messageRemove: {
      type: String,
      default: "BORRAR"
    },
    messageNew: {
      type: String,
      default: "Nuevo"
    },
    messageEmptyResults: {
      type: String,
      default: "No se han encontrado resultados"
    },
    messageSave: {
      type: String,
      default: "Guardar"
    },
    searchPlaceholder: {
      type: String,
      default: "Buscar..."
    }
  },

  mounted() {
    this.item = this.model;
    this.itemDefault = JSON.parse(JSON.stringify(this.item));
    this.internalFilters = [];
    this.columns.forEach(column => {
      if (this.isColumnHasFilter(column)) {
        this.internalFilters.push({
          column: column.prop,
          op: column.filterOp ? column.filterOp : "=",
          value: -1
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
      this.internalFilters.forEach(f => {
        if (f.value > 0) filter.push([f.column, f.op, f.value]);
      });
      return filter;
    }

  },
  methods: {
    getInternalFilterByProp(prop) {
      return this.internalFilters.find(inf => inf.prop == prop);
    },

    toggleDisplayMode() {
      if (this.displayMode == this.displayModes.MODE_TABLE) this.displayMode = this.displayModes.MODE_CARDS;else if (this.displayMode == this.displayModes.MODE_CARDS) this.displayMode = this.displayModes.MODE_TABLE;
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
      this.item = this.items[itemIndex]; //console.debug(itemIndex);

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
      let filter = this.filter.find(f => f.column == column);
      filter.value = value;
      this.forceRecomputeCounter++;
      setTimeout(() => {
        this.$refs.crud.refresh();
      }, 1);
    },

    fetchItems(page = 1) {
      let _this = this;

      _this.loading = true;
      axios.get(this.apiUrl + "/" + this.modelName, {
        params: {
          page: page,
          limit: this.limit,
          filters: JSON.stringify(this.finalFilters)
        }
      }).then(function (response) {
        _this.makePagination(response.data);

        _this.items = response.data.data;
        _this.loading = false;
      }).catch(function (error) {
        //console.debug(error);
        _this.toastError(error);

        _this.loading = false;
      });
    },

    removeItem: function (id, index) {
      let _this = this;

      this.$bvModal.msgBoxConfirm(messageRemoveConfirm, {
        size: "sm",
        buttonSize: "sm",
        okVariant: "danger",
        okTitle: messageRemove,
        cancelTitle: "NO",
        centered: true
      }).then(value => {
        if (value) {
          _this.loading = true;
          axios.delete(apiUrl + "/" + _this.modelName + "/" + id).then(function (response) {
            _this.items.splice(index, 1);

            _this.loading = false;
          }).catch(function (error) {
            _this.toastError(error);

            _this.loading = false;
          });
        }
      }).catch(err => {
        _this.toastError(error);
      });
    },

    saveSort() {
      if (this.sorteable) {
        let _this = this;

        _this.loading = true;
        let order = [];
        this.items.forEach((v, k) => {
          order.push({
            id: v.id,
            order: k + 1
          });
          v.order = k + 1;
        });
        axios.post(this.apiUrl + "/" + _this.modelName + "/sort", {
          order: order
        }).then(function (response) {
          response.data;
          _this.loading = false;
        }).catch(function (error) {
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
        axios.put(this.apiUrl + "/" + _this.modelName + "/" + _this.item.id, _this.item).then(function (response) {
          _this.$bvModal.hide("modal-form-item-" + _this.modelName);

          let itemSv = response.data;

          let itemIndex = _this.items.findIndex(item => item.id == _this.item.id);

          _this.items[itemIndex] = itemSv;
          _this.item = itemSv;
          _this.loading = false;
        }).catch(function (error) {
          _this.toastError(error);

          _this.loading = false;
        });
      } else {
        if (this.createMultipart) {
          const formData = new FormData();
          formData.append("avatar", this.FILE, this.FILE.name);
          formData.append("name", this.name);
          Object.keys(_this.item).forEach(key => {
            formData.append(key, _this.item[key]);
          });
          axios.post(this.apiUrl + "/" + _this.modelName, formData).then(function (response) {
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
          }).catch(function (error) {
            _this.toastError(error);

            _this.loading = false;
          });
        } else {
          axios.post(this.apiUrl + "/" + _this.modelName, _this.item).then(function (response) {
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
          }).catch(function (error) {
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
        appendToast: true
      });
    },

    toastSuccess(message) {
      this.$bvToast.toast(message, {
        title: `Listo`,
        toaster: "b-toaster-bottom-right",
        variant: "success",
        solid: true,
        appendToast: true
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
        per_page: data.per_page
      };
      this.pagination = pagination;
    }
  }
};

function normalizeComponent(template, style, script, scopeId, isFunctionalTemplate, moduleIdentifier /* server only */, shadowMode, createInjector, createInjectorSSR, createInjectorShadow) {
    if (typeof shadowMode !== 'boolean') {
        createInjectorSSR = createInjector;
        createInjector = shadowMode;
        shadowMode = false;
    }
    // Vue.extend constructor export interop.
    const options = typeof script === 'function' ? script.options : script;
    // render functions
    if (template && template.render) {
        options.render = template.render;
        options.staticRenderFns = template.staticRenderFns;
        options._compiled = true;
        // functional template
        if (isFunctionalTemplate) {
            options.functional = true;
        }
    }
    // scopedId
    if (scopeId) {
        options._scopeId = scopeId;
    }
    let hook;
    if (moduleIdentifier) {
        // server build
        hook = function (context) {
            // 2.3 injection
            context =
                context || // cached call
                    (this.$vnode && this.$vnode.ssrContext) || // stateful
                    (this.parent && this.parent.$vnode && this.parent.$vnode.ssrContext); // functional
            // 2.2 with runInNewContext: true
            if (!context && typeof __VUE_SSR_CONTEXT__ !== 'undefined') {
                context = __VUE_SSR_CONTEXT__;
            }
            // inject component styles
            if (style) {
                style.call(this, createInjectorSSR(context));
            }
            // register component module identifier for async chunk inference
            if (context && context._registeredComponents) {
                context._registeredComponents.add(moduleIdentifier);
            }
        };
        // used by ssr in case component is cached and beforeCreate
        // never gets called
        options._ssrRegister = hook;
    }
    else if (style) {
        hook = shadowMode
            ? function (context) {
                style.call(this, createInjectorShadow(context, this.$root.$options.shadowRoot));
            }
            : function (context) {
                style.call(this, createInjector(context));
            };
    }
    if (hook) {
        if (options.functional) {
            // register for functional component in vue file
            const originalRender = options.render;
            options.render = function renderWithStyleInjection(h, context) {
                hook.call(context);
                return originalRender(h, context);
            };
        }
        else {
            // inject component registration as beforeCreate hook
            const existing = options.beforeCreate;
            options.beforeCreate = existing ? [].concat(existing, hook) : [hook];
        }
    }
    return script;
}

const isOldIE = typeof navigator !== 'undefined' &&
    /msie [6-9]\\b/.test(navigator.userAgent.toLowerCase());
function createInjector(context) {
    return (id, style) => addStyle(id, style);
}
let HEAD;
const styles = {};
function addStyle(id, css) {
    const group = isOldIE ? css.media || 'default' : id;
    const style = styles[group] || (styles[group] = { ids: new Set(), styles: [] });
    if (!style.ids.has(id)) {
        style.ids.add(id);
        let code = css.source;
        if (css.map) {
            // https://developer.chrome.com/devtools/docs/javascript-debugging
            // this makes source maps inside style tags work properly in Chrome
            code += '\n/*# sourceURL=' + css.map.sources[0] + ' */';
            // http://stackoverflow.com/a/26603875
            code +=
                '\n/*# sourceMappingURL=data:application/json;base64,' +
                    btoa(unescape(encodeURIComponent(JSON.stringify(css.map)))) +
                    ' */';
        }
        if (!style.element) {
            style.element = document.createElement('style');
            style.element.type = 'text/css';
            if (css.media)
                style.element.setAttribute('media', css.media);
            if (HEAD === undefined) {
                HEAD = document.head || document.getElementsByTagName('head')[0];
            }
            HEAD.appendChild(style.element);
        }
        if ('styleSheet' in style.element) {
            style.styles.push(code);
            style.element.styleSheet.cssText = style.styles
                .filter(Boolean)
                .join('\n');
        }
        else {
            const index = style.ids.size - 1;
            const textNode = document.createTextNode(code);
            const nodes = style.element.childNodes;
            if (nodes[index])
                style.element.removeChild(nodes[index]);
            if (nodes.length)
                style.element.insertBefore(textNode, nodes[index]);
            else
                style.element.appendChild(textNode);
        }
    }
}

/* script */
const __vue_script__ = script;
/* template */

var __vue_render__ = function () {
  var _vm = this;

  var _h = _vm.$createElement;

  var _c = _vm._self._c || _h;

  return _c('div', {
    staticClass: "crud"
  }, [_vm.showHeader ? _c('div', {
    staticClass: "crud-header"
  }, [_vm.showTitle ? _c('h4', {
    staticClass: "crud-title"
  }, [_vm._v(_vm._s(_vm.title))]) : _vm._e(), _vm._v(" "), _c('b-sidebar', {
    attrs: {
      "id": "sidebar-filters",
      "title": "Filtrar",
      "right": "",
      "shadow": ""
    }
  }, [_vm._t("sidebarFilters", [_c('div', {
    staticClass: "px-3 py-2"
  }, _vm._l(_vm.columns, function (column, indexc) {
    return _c('div', {
      key: indexc
    }, [_vm.isColumnHasFilter(column) ? _c('div', [_vm._t('filter-' + column.prop, [_c('div', {
      staticClass: "form-group"
    }, [_c('label', [_vm._v(_vm._s(column.label))]), _vm._v(" "), _c('input', {
      directives: [{
        name: "model",
        rawName: "v-model",
        value: _vm.getInternalFilterByProp(column.prop).value,
        expression: "getInternalFilterByProp(column.prop).value"
      }],
      staticClass: "form-control",
      domProps: {
        "value": _vm.getInternalFilterByProp(column.prop).value
      },
      on: {
        "input": function ($event) {
          if ($event.target.composing) {
            return;
          }

          _vm.$set(_vm.getInternalFilterByProp(column.prop), "value", $event.target.value);
        }
      }
    })])], {
      "column": column,
      "filter": _vm.filter,
      "getInternalFilterByProp": _vm.getInternalFilterByProp
    })], 2) : _vm._e()]);
  }), 0)], {
    "createItem": _vm.createItem,
    "toggleDisplayMode": _vm.toggleDisplayMode,
    "loading": _vm.loading,
    "isColumnHasFilter": _vm.isColumnHasFilter,
    "setFilter": _vm.setFilter
  })], 2), _vm._v(" "), _c('div', {
    staticClass: "table-options"
  }, [_c('b-button-group', {
    staticClass: "mr-1"
  }, [_vm._t("tableActions", [_c('b-button', {
    attrs: {
      "variant": "success",
      "disabled": _vm.loading
    },
    on: {
      "click": function ($event) {
        return _vm.createItem();
      }
    }
  }, [_c('b-icon-plus'), _vm._v(_vm._s(_vm.messageNew) + "\n          ")], 1), _vm._v(" "), _vm.filterSidebar ? _c('b-button', {
    directives: [{
      name: "b-toggle",
      rawName: "v-b-toggle.sidebar-filters",
      modifiers: {
        "sidebar-filters": true
      }
    }]
  }, [_vm._v("Filtros")]) : _vm._e(), _vm._v(" "), _vm.displayModeToggler ? _c('b-button', {
    attrs: {
      "variant": "info",
      "disabled": _vm.loading
    },
    on: {
      "click": function ($event) {
        return _vm.toggleDisplayMode();
      }
    }
  }, [_vm.displayMode == _vm.displayModes.MODE_TABLE ? _c('b-icon-card-list') : _vm._e(), _vm._v(" "), _vm.displayMode == _vm.displayModes.MODE_CARDS ? _c('b-icon-table') : _vm._e()], 1) : _vm._e(), _vm._v(" "), _c('div', {
    staticClass: "crud-search m-0"
  }, [_c('b-input-group', [_c('b-input-group-prepend', [_c('b-button', {
    class: {
      open: _vm.displaySearch
    },
    attrs: {
      "variant": "info"
    },
    on: {
      "click": function ($event) {
        _vm.displaySearch = !_vm.displaySearch;
      }
    }
  }, [_c('b-icon-search')], 1)], 1), _vm._v(" "), _vm.displaySearch ? _c('b-form-input', {
    staticClass: "pl-2",
    attrs: {
      "type": "search",
      "required": "",
      "placeholder": _vm.searchPlaceholder,
      "debounce": "500"
    },
    model: {
      value: _vm.search,
      callback: function ($$v) {
        _vm.search = $$v;
      },
      expression: "search"
    }
  }) : _vm._e()], 1)], 1)], {
    "createItem": _vm.createItem,
    "toggleDisplayMode": _vm.toggleDisplayMode,
    "loading": _vm.loading
  })], 2)], 1)], 1) : _vm._e(), _vm._v(" "), _c('b-overlay', {
    attrs: {
      "show": _vm.loading,
      "rounded": "sm"
    }
  }, [_vm.displayMode == _vm.displayModes.MODE_TABLE ? _c('div', {
    staticClass: "table-responsive"
  }, [_c('table', {
    staticClass: "table table-hover table-striped w-100"
  }, [_c('thead', {
    staticClass: "thead-light"
  }, [_c('tr', [_vm._t("rowHead", _vm._l(_vm.columns, function (column, indexc) {
    return _c('th', {
      key: indexc
    }, [_vm._v("\n                " + _vm._s(column.label) + "\n              ")]);
  }))], 2)]), _vm._v(" "), _c('tbody', _vm._l(_vm.filteredItems, function (item, index) {
    return _c('tr', {
      key: index,
      on: {
        "mouseover": function ($event) {
          return _vm.onRowHover(item, index);
        },
        "click": function ($event) {
          return _vm.onRowClick(item, index);
        }
      }
    }, [_vm._t("row", _vm._l(_vm.columns, function (column, indexc) {
      return _c('td', {
        key: indexc
      }, [_vm._t('cell-' + column.prop, [column.prop && column.prop.split('.').length > 1 && column.prop.split('.')[1] ? _c('span', [_vm._v("\n                    " + _vm._s(item[column.prop.split(".")[0]][column.prop.split(".")[1]]))]) : _c('span', [_vm._v(" " + _vm._s(item[column.prop]))])], {
        "item": item
      }), _vm._v(" "), column.type == 'actions' ? _c('b-button-group', [_vm._t("rowAction", [_c('b-button', {
        attrs: {
          "variant": "primary"
        },
        on: {
          "click": function ($event) {
            return _vm.showItem(item.id, index);
          }
        }
      }, [_c('b-icon-eye')], 1), _vm._v(" "), _c('b-button', {
        attrs: {
          "variant": "secondary"
        },
        on: {
          "click": function ($event) {
            return _vm.updateItem(item.id, index);
          }
        }
      }, [_c('b-icon-pencil')], 1), _vm._v(" "), _c('b-button', {
        attrs: {
          "variant": "danger"
        },
        on: {
          "click": function ($event) {
            return _vm.removeItem(item.id, index);
          }
        }
      }, [_c('b-icon-trash')], 1)], {
        "item": item,
        "index": index,
        "showItem": _vm.showItem,
        "updateItem": _vm.updateItem,
        "removeItem": _vm.removeItem
      })], 2) : _vm._e()], 2);
    }), {
      "item": item
    })], 2);
  }), 0)]), _vm._v(" "), _vm.items.length == 0 ? _c('p', {
    staticClass: "p-3"
  }, [_vm._v("\n        " + _vm._s(_vm.messageEmptyResults) + "\n      ")]) : _vm._e()]) : _vm._e(), _vm._v(" "), _vm.displayMode == _vm.displayModes.MODE_CARDS ? _c('div', [_vm.items.length == 0 ? _c('p', {
    staticClass: "p-3"
  }, [_vm._v("\n        " + _vm._s(_vm.messageEmptyResults) + "\n      ")]) : _vm._e(), _vm._v(" "), _c('draggable', {
    staticClass: "row",
    attrs: {
      "group": "people"
    },
    on: {
      "start": function ($event) {
        _vm.drag = true;
      },
      "end": function ($event) {
        _vm.drag = false;
      },
      "sort": function ($event) {
        return _vm.onSort();
      }
    },
    model: {
      value: _vm.items,
      callback: function ($$v) {
        _vm.items = $$v;
      },
      expression: "items"
    }
  }, _vm._l(_vm.filteredItems, function (item, index) {
    return _c('b-col', {
      key: index,
      attrs: {
        "cols": _vm.colXs,
        "sm": _vm.colSm,
        "md": _vm.colMd,
        "lg": _vm.colLg,
        "xl": _vm.colXl
      }
    }, [_c('b-card', {
      staticClass: "mb-2",
      attrs: {
        "title": item.title,
        "tag": "article"
      },
      scopedSlots: _vm._u([{
        key: "footer",
        fn: function () {
          return [_c('b-button-group', [_vm._t("rowAction", [_c('b-button', {
            attrs: {
              "variant": "primary"
            },
            on: {
              "click": function ($event) {
                return _vm.showItem(item.id, index);
              }
            }
          }, [_c('b-icon-eye')], 1), _vm._v(" "), _c('b-button', {
            attrs: {
              "variant": "secondary"
            },
            on: {
              "click": function ($event) {
                return _vm.updateItem(item.id, index);
              }
            }
          }, [_c('b-icon-pencil')], 1), _vm._v(" "), _c('b-button', {
            attrs: {
              "variant": "danger"
            },
            on: {
              "click": function ($event) {
                return _vm.removeItem(item.id, index);
              }
            }
          }, [_c('b-icon-trash')], 1)], {
            "item": item,
            "index": index,
            "showItem": _vm.showItem,
            "updateItem": _vm.updateItem,
            "removeItem": _vm.removeItem
          })], 2)];
        },
        proxy: true
      }], null, true)
    }, [_vm._t("card", _vm._l(_vm.columns, function (column, indexc) {
      return _c('div', {
        key: indexc
      }, [column.type != 'actions' ? _c('b-card-text', [_vm._v(_vm._s(column.label) + ":\n                  "), _vm._t('cell-' + column.prop, [_vm._v("\n                    " + _vm._s(item[column.prop]) + "\n                  ")], {
        "item": item
      })], 2) : _vm._e()], 1);
    }), {
      "item": item
    })], 2)], 1);
  }), 1)], 1) : _vm._e()]), _vm._v(" "), _c('div', {
    staticClass: "crud-paginator"
  }, [_vm.showPaginator ? _c('b-pagination', {
    attrs: {
      "total-rows": _vm.pagination.total,
      "per-page": _vm.pagination.per_page
    },
    on: {
      "change": function ($event) {
        return _vm.onPaginationChange($event);
      }
    },
    model: {
      value: _vm.pagination.current_page,
      callback: function ($$v) {
        _vm.$set(_vm.pagination, "current_page", $$v);
      },
      expression: "pagination.current_page"
    }
  }) : _vm._e()], 1), _vm._v(" "), _c('b-modal', {
    attrs: {
      "id": 'modal-form-item-' + _vm.modelName,
      "hide-footer": "",
      "size": "xl",
      "title": _vm.title
    }
  }, [_c('b-overlay', {
    attrs: {
      "show": _vm.loading,
      "rounded": "sm"
    }
  }, [_vm._t("form", [_c('b-form-group', {
    attrs: {
      "label": "Nombre:",
      "description": "Nombre "
    }
  }, [_c('b-form-input', {
    attrs: {
      "type": "text",
      "required": "",
      "placeholder": "Nombre"
    },
    model: {
      value: _vm.item.title,
      callback: function ($$v) {
        _vm.$set(_vm.item, "title", $$v);
      },
      expression: "item.title"
    }
  })], 1)], {
    "item": _vm.item
  }), _vm._v(" "), _c('b-button', {
    attrs: {
      "block": "",
      "type": "submit",
      "variant": "success",
      "disabled": _vm.loading
    },
    on: {
      "click": function ($event) {
        return _vm.saveItem();
      }
    }
  }, [_vm.loading ? _c('b-spinner', {
    attrs: {
      "small": ""
    }
  }) : _vm._e(), _vm._v(_vm._s(_vm.messageSave) + "\n      ")], 1)], 2)], 1), _vm._v(" "), _c('b-modal', {
    attrs: {
      "id": 'modal-show-item-' + _vm.modelName,
      "hide-footer": "",
      "size": "xl",
      "title": _vm.title
    }
  }, [_vm._t("show", [_c('p', {
    staticClass: "my-4"
  }, [_vm._v("Show")])], {
    "item": _vm.item
  })], 2)], 1);
};

var __vue_staticRenderFns__ = [];
/* style */

const __vue_inject_styles__ = function (inject) {
  if (!inject) return;
  inject("data-v-33636f9c_0", {
    source: "tr td[data-v-33636f9c]:first-child,tr td[data-v-33636f9c]:last-child{width:1%;white-space:nowrap}.crud-pagination[data-v-33636f9c]{display:flex;justify-content:center}.crud-header[data-v-33636f9c]{display:flex;justify-content:space-between;max-height:3rem}.crud-header .crud-title[data-v-33636f9c]{margin:0}.crud-header .crud-search[data-v-33636f9c]{max-width:15rem}.crud-header .crud-search .btn[data-v-33636f9c]{border-top-left-radius:0;border-bottom-left-radius:0;border-top-right-radius:.375rem;border-bottom-right-radius:.375rem}.crud-header .crud-search .btn.open[data-v-33636f9c]{border-top-right-radius:0;border-bottom-right-radius:0}.crud-header .table-options[data-v-33636f9c]{margin-bottom:1rem;display:flex;align-items:center;justify-content:flex-end}",
    map: undefined,
    media: undefined
  });
};
/* scoped */


const __vue_scope_id__ = "data-v-33636f9c";
/* module identifier */

const __vue_module_identifier__ = undefined;
/* functional template */

const __vue_is_functional_template__ = false;
/* style inject SSR */

/* style inject shadow dom */

const __vue_component__ = /*#__PURE__*/normalizeComponent({
  render: __vue_render__,
  staticRenderFns: __vue_staticRenderFns__
}, __vue_inject_styles__, __vue_script__, __vue_scope_id__, __vue_is_functional_template__, __vue_module_identifier__, false, createInjector, undefined, undefined);

// Import vue component
// IIFE injects install function into component, allowing component
// to be registered via Vue.use() as well as Vue.component(),

var entry_esm = /*#__PURE__*/(() => {
  // Get component instance
  const installable = __vue_component__; // Attach install function executed by Vue.use()

  installable.install = Vue => {
    Vue.component('VueLaravelCrud', installable);
  };

  return installable;
})(); // It's possible to expose named exports when writing components that can
// also be used as directives, etc. - eg. import { RollupDemoDirective } from 'rollup-demo';
// export const RollupDemoDirective = directive;

export default entry_esm;
