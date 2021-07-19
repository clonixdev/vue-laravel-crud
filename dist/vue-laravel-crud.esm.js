import draggable from 'vuedraggable';
import axios from 'axios';

var script = /*#__PURE__*/{
  name: "VueLaravelCrud",
  components: {
    draggable
  },

  data() {
    return {
      filterSidebarOpen: false,
      forceRecomputeCounter: 0,
      filtersVisible: false,
      loading: false,
      items: [],
      displaySearch: false,
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
    enableFilters: {
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
    showCreateBtn: {
      type: Boolean,
      default: true
    },
    showSearch: {
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
        if (column.type == "date") {
          this.internalFilters.push({
            column: column.prop + "_from",
            op: column.filterOp ? column.filterOp : "=",
            value: null
          });
          this.internalFilters.push({
            column: column.prop + "_to",
            op: column.filterOp ? column.filterOp : "=",
            value: null
          });
        } else {
          this.internalFilters.push({
            column: column.prop,
            op: column.filterOp ? column.filterOp : "=",
            value: null
          });
        }
      }
    });
    this.fetchItems();
  },

  computed: {
    itemValue() {
      return (column, item) => {
        if (column.prop && column.prop.split(".").length > 1 && column.prop.split(".")[1]) {
          return item[column.prop.split(".")[0]] && item[column.prop.split(".")[0]][column.prop.split(".")[1]] ? item[column.prop.split(".")[0]][column.prop.split(".")[1]] : "";
        } else {
          return item[column.prop];
        }
      };
    },

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
    },

    internalFilterByProp() {
      return prop => {
        return this.internalFilters.find(inf => inf.column == prop);
      };
    }

  },
  methods: {
    toggleFilters() {
      this.filtersVisible = !this.filtersVisible;

      if (this.displayMode == this.displayModes.MODE_CARDS) {
        this.filterSidebarOpen = this.filtersVisible;
      } else {
        this.filterSidebarOpen = false;
      }
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
      return column && !column.hideFilter && column.type != "actions";
    },

    setFilter(column, value) {
      let filter = this.filter.find(f => f.column == column);
      filter.value = value;
      this.forceRecomputeCounter++;
      setTimeout(() => {
        this.refresh();
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

      this.$bvModal.msgBoxConfirm(_this.messageRemoveConfirm, {
        size: "sm",
        buttonSize: "sm",
        okVariant: "danger",
        okTitle: _this.messageRemove,
        cancelTitle: "NO",
        centered: true
      }).then(value => {
        if (value) {
          _this.loading = true;
          axios.delete(_this.apiUrl + "/" + _this.modelName + "/" + id).then(function (response) {
            _this.items.splice(index, 1);

            _this.toastSuccess("Elemento eliminado.");

            _this.loading = false;
          }).catch(function (error) {
            _this.toastError(error);

            _this.loading = false;
          });
        }
      }).catch(error => {
        _this.toastError(error);

        _this.loading = false;
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

          _this.toastSuccess("Orden Actualizado");

          _this.loading = false;
        }).catch(function (error) {
          //console.debug(error);
          _this.toastError(error);

          _this.loading = false;
        });
      }
    },

    getStateValue(value, options) {
      if (!options) return value;
      let ops = options.filter(option => {
        if (Array.isArray(value)) {
          return value.includes(option.id);
        } else {
          return option.id == value;
        }
      });
      return ops.join(", ");
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

          _this.toastSuccess("Elemento Modificado");
        }).catch(function (error) {
          _this.toastError(error);

          _this.loading = false;
        });
      } else {
        if (this.createMultipart) {
          const formData = new FormData();
          Object.keys(_this.item).forEach(key => {
            if (_this.item[key][0] && _this.item[key][0].name) {
              console.log(_this.item[key]);
              let files = _this.item[key];

              for (var x = 0; x < files.length; x++) {
                formData.append(key + "[]", _this.item[key][x], _this.item[key][x].name);
              }
            } else formData.append(key, _this.item[key]);
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

            _this.toastSuccess("Elemento Creado");
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

            _this.toastSuccess("Elemento Creado");
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

    onChangeFilter(event) {
      this.forceRecomputeCounter++;
      setTimeout(() => {
        this.refresh();
      }, 1);
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
      "title": "Filtrar",
      "right": "",
      "shadow": ""
    },
    model: {
      value: _vm.filterSidebarOpen,
      callback: function ($$v) {
        _vm.filterSidebarOpen = $$v;
      },
      expression: "filterSidebarOpen"
    }
  }, [_vm._t("sidebarFilters", [_c('div', {
    staticClass: "px-3 py-2"
  }, _vm._l(_vm.columns, function (column, indexc) {
    return _c('div', {
      key: indexc
    }, [_vm.isColumnHasFilter(column) ? _c('div', [_vm.internalFilterByProp(column.prop) ? _vm._t('sidebar-filter-' + column.prop, [column.type == 'boolean' ? _c('div', {
      staticClass: "form-group"
    }, [_c('label', [_vm._v(_vm._s(column.label))]), _vm._v(" "), _c('select', {
      directives: [{
        name: "model",
        rawName: "v-model",
        value: _vm.internalFilterByProp(column.prop).value,
        expression: "internalFilterByProp(column.prop).value"
      }],
      staticClass: "form-control",
      on: {
        "change": [function ($event) {
          var $$selectedVal = Array.prototype.filter.call($event.target.options, function (o) {
            return o.selected;
          }).map(function (o) {
            var val = "_value" in o ? o._value : o.value;
            return val;
          });

          _vm.$set(_vm.internalFilterByProp(column.prop), "value", $event.target.multiple ? $$selectedVal : $$selectedVal[0]);
        }, function ($event) {
          return _vm.onChangeFilter($event);
        }]
      }
    }, [_c('option', {
      attrs: {
        "value": ""
      }
    }), _vm._v(" "), _c('option', {
      attrs: {
        "value": "1"
      }
    }, [_vm._v("Sí")]), _vm._v(" "), _c('option', {
      attrs: {
        "value": "0"
      }
    }, [_vm._v("No")])])]) : column.type == 'date' ? _c('div', {
      staticClass: "form-group"
    }, [_c('div', {
      staticClass: "row"
    }, [_c('div', {
      staticClass: "col-6"
    }, [_c('b-form-datepicker', {
      attrs: {
        "today-button": "",
        "reset-button": "",
        "close-button": "",
        "locale": "es"
      },
      model: {
        value: _vm.internalFilterByProp(column.prop + '_from').value,
        callback: function ($$v) {
          _vm.$set(_vm.internalFilterByProp(column.prop + '_from'), "value", $$v);
        },
        expression: "\n                          internalFilterByProp(column.prop + '_from').value\n                        "
      }
    })], 1), _vm._v(" "), _c('div', {
      staticClass: "col-6"
    }, [_c('b-form-datepicker', {
      attrs: {
        "today-button": "",
        "reset-button": "",
        "close-button": "",
        "locale": "es"
      },
      model: {
        value: _vm.internalFilterByProp(column.prop + '_to').value,
        callback: function ($$v) {
          _vm.$set(_vm.internalFilterByProp(column.prop + '_to'), "value", $$v);
        },
        expression: "\n                          internalFilterByProp(column.prop + '_to').value\n                        "
      }
    })], 1)])]) : column.type == 'state' ? _c('div', {
      staticClass: "form-group"
    }, [_c('select', {
      directives: [{
        name: "model",
        rawName: "v-model",
        value: _vm.internalFilterByProp(column.prop).value,
        expression: "internalFilterByProp(column.prop).value"
      }],
      staticClass: "form-control",
      on: {
        "change": [function ($event) {
          var $$selectedVal = Array.prototype.filter.call($event.target.options, function (o) {
            return o.selected;
          }).map(function (o) {
            var val = "_value" in o ? o._value : o.value;
            return val;
          });

          _vm.$set(_vm.internalFilterByProp(column.prop), "value", $event.target.multiple ? $$selectedVal : $$selectedVal[0]);
        }, function ($event) {
          return _vm.onChangeFilter($event);
        }]
      }
    }, [_c('option', {
      attrs: {
        "value": ""
      }
    }), _vm._v(" "), _vm._l(column.options, function (option, indexo) {
      return _c('option', {
        key: indexo,
        domProps: {
          "value": option.id
        }
      }, [_vm._v("\n                      " + _vm._s(option.text) + "\n                    ")]);
    })], 2)]) : _c('div', {
      staticClass: "form-group"
    }, [_c('label', [_vm._v(_vm._s(column.label))]), _vm._v(" "), _c('input', {
      directives: [{
        name: "model",
        rawName: "v-model.lazy",
        value: _vm.internalFilterByProp(column.prop).value,
        expression: "internalFilterByProp(column.prop).value",
        modifiers: {
          "lazy": true
        }
      }],
      staticClass: "form-control",
      domProps: {
        "value": _vm.internalFilterByProp(column.prop).value
      },
      on: {
        "change": [function ($event) {
          _vm.$set(_vm.internalFilterByProp(column.prop), "value", $event.target.value);
        }, function ($event) {
          return _vm.onChangeFilter($event);
        }]
      }
    })])], {
      "column": column,
      "filter": _vm.filter,
      "internalFilterByProp": _vm.internalFilterByProp
    }) : _vm._e()], 2) : _vm._e()]);
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
  }, [_vm._t("tableActions", [_vm.showCreateBtn ? _c('b-button', {
    attrs: {
      "variant": "success",
      "disabled": _vm.loading
    },
    on: {
      "click": function ($event) {
        return _vm.createItem();
      }
    }
  }, [_c('b-icon-plus'), _vm._v(_vm._s(_vm.messageNew) + "\n          ")], 1) : _vm._e(), _vm._v(" "), _vm.enableFilters ? _c('b-button', {
    on: {
      "click": function ($event) {
        return _vm.toggleFilters();
      }
    }
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
  }, [_vm.displayMode == _vm.displayModes.MODE_TABLE ? _c('b-icon-card-list') : _vm._e(), _vm._v(" "), _vm.displayMode == _vm.displayModes.MODE_CARDS ? _c('b-icon-table') : _vm._e()], 1) : _vm._e(), _vm._v(" "), _vm.showSearch ? _c('div', {
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
  }) : _vm._e()], 1)], 1) : _vm._e()], {
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
      key: indexc,
      attrs: {
        "scope": "col"
      }
    }, [_vm.enableFilters && _vm.filtersVisible && _vm.isColumnHasFilter(column) && _vm.internalFilterByProp(column.prop) ? _vm._t('filter-' + column.prop, [column.type == 'boolean' ? _c('select', {
      directives: [{
        name: "model",
        rawName: "v-model",
        value: _vm.internalFilterByProp(column.prop).value,
        expression: "internalFilterByProp(column.prop).value"
      }],
      staticClass: "form-control",
      on: {
        "change": [function ($event) {
          var $$selectedVal = Array.prototype.filter.call($event.target.options, function (o) {
            return o.selected;
          }).map(function (o) {
            var val = "_value" in o ? o._value : o.value;
            return val;
          });

          _vm.$set(_vm.internalFilterByProp(column.prop), "value", $event.target.multiple ? $$selectedVal : $$selectedVal[0]);
        }, function ($event) {
          return _vm.onChangeFilter($event);
        }]
      }
    }, [_c('option', {
      attrs: {
        "value": ""
      }
    }, [_vm._v(_vm._s(column.label))]), _vm._v(" "), _c('option', {
      attrs: {
        "value": "1"
      }
    }, [_vm._v("Sí")]), _vm._v(" "), _c('option', {
      attrs: {
        "value": "0"
      }
    }, [_vm._v("No")])]) : column.type == 'date' ? _c('div', {
      staticClass: "row"
    }, [_c('div', {
      staticClass: "col-6"
    }, [_c('b-form-datepicker', {
      attrs: {
        "today-button": "",
        "reset-button": "",
        "close-button": "",
        "locale": "es"
      },
      model: {
        value: _vm.internalFilterByProp(column.prop + '_from').value,
        callback: function ($$v) {
          _vm.$set(_vm.internalFilterByProp(column.prop + '_from'), "value", $$v);
        },
        expression: "\n                          internalFilterByProp(column.prop + '_from').value\n                        "
      }
    })], 1), _vm._v(" "), _c('div', {
      staticClass: "col-6"
    }, [_c('b-form-datepicker', {
      attrs: {
        "today-button": "",
        "reset-button": "",
        "close-button": "",
        "locale": "es"
      },
      model: {
        value: _vm.internalFilterByProp(column.prop + '_to').value,
        callback: function ($$v) {
          _vm.$set(_vm.internalFilterByProp(column.prop + '_to'), "value", $$v);
        },
        expression: "\n                          internalFilterByProp(column.prop + '_to').value\n                        "
      }
    })], 1)]) : column.type == 'state' ? _c('select', {
      directives: [{
        name: "model",
        rawName: "v-model",
        value: _vm.internalFilterByProp(column.prop).value,
        expression: "internalFilterByProp(column.prop).value"
      }],
      staticClass: "form-control",
      on: {
        "change": [function ($event) {
          var $$selectedVal = Array.prototype.filter.call($event.target.options, function (o) {
            return o.selected;
          }).map(function (o) {
            var val = "_value" in o ? o._value : o.value;
            return val;
          });

          _vm.$set(_vm.internalFilterByProp(column.prop), "value", $event.target.multiple ? $$selectedVal : $$selectedVal[0]);
        }, function ($event) {
          return _vm.onChangeFilter($event);
        }]
      }
    }, [_c('option', {
      attrs: {
        "value": ""
      }
    }, [_vm._v(_vm._s(column.label))]), _vm._v(" "), _vm._l(column.options, function (option, indexo) {
      return _c('option', {
        key: indexo,
        domProps: {
          "value": option.id
        }
      }, [_vm._v("\n                      " + _vm._s(option.text) + "\n                    ")]);
    })], 2) : _c('input', {
      directives: [{
        name: "model",
        rawName: "v-model",
        value: _vm.internalFilterByProp(column.prop).value,
        expression: "internalFilterByProp(column.prop).value"
      }],
      staticClass: "form-control",
      attrs: {
        "placeholder": column.label
      },
      domProps: {
        "value": _vm.internalFilterByProp(column.prop).value
      },
      on: {
        "change": function ($event) {
          return _vm.onChangeFilter($event);
        },
        "input": function ($event) {
          if ($event.target.composing) {
            return;
          }

          _vm.$set(_vm.internalFilterByProp(column.prop), "value", $event.target.value);
        }
      }
    })], {
      "column": column,
      "filter": _vm.filter,
      "internalFilterByProp": _vm.internalFilterByProp
    }) : _c('span', [_vm._v(_vm._s(column.label))])], 2);
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
        key: indexc,
        attrs: {
          "scope": column.prop == 'id' ? 'row' : ''
        }
      }, [_vm._t('cell-' + column.prop, [column.type == 'boolean' ? _c('span', [!!_vm.itemValue(column, item) ? _c('b-badge', {
        attrs: {
          "variant": "success"
        }
      }, [_c('b-icon-check-circle')], 1) : _vm._e(), _vm._v(" "), !_vm.itemValue(column, item) ? _c('b-badge', {
        attrs: {
          "variant": "danger"
        }
      }, [_c('b-icon-x-circle')], 1) : _vm._e()], 1) : column.type == 'date' ? _c('span', [_vm._v("\n                    " + _vm._s(_vm.itemValue(column, item)) + "\n                  ")]) : column.type == 'state' ? _c('span', [_vm._v("\n                    " + _vm._s(_vm.getStateValue(_vm.itemValue(column, item), column.options)) + "\n                  ")]) : _c('span', [_vm._v("\n                    " + _vm._s(_vm.itemValue(column, item)) + "\n                  ")])], {
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
      }, [column.type != 'actions' ? _c('b-card-text', [_vm._v(_vm._s(column.label) + ":\n                  "), _vm._t('cell-' + column.prop, [column.type == 'boolean' ? _c('span', [!!_vm.itemValue(column, item) ? _c('b-badge', {
        attrs: {
          "variant": "success"
        }
      }, [_c('b-icon-check-circle')], 1) : _vm._e(), _vm._v(" "), !_vm.itemValue(column, item) ? _c('b-badge', {
        attrs: {
          "variant": "danger"
        }
      }, [_c('b-icon-x-circle')], 1) : _vm._e()], 1) : column.type == 'date' ? _c('span', [_vm._v("\n                      " + _vm._s(_vm.itemValue(column, item)) + "\n                    ")]) : column.type == 'state' ? _c('span', [_vm._v("\n                      " + _vm._s(_vm.getStateValue(_vm.itemValue(column, item), column.options)) + "\n                    ")]) : _c('span', [_vm._v("\n                      " + _vm._s(_vm.itemValue(column, item)) + "\n                    ")])], {
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
  inject("data-v-17725916_0", {
    source: "tr td[data-v-17725916]:first-child,tr td[data-v-17725916]:last-child{width:1%;white-space:nowrap}.crud-pagination[data-v-17725916]{display:flex;justify-content:center}.crud-header[data-v-17725916]{display:flex;justify-content:space-between;max-height:3rem}.crud-header .crud-title[data-v-17725916]{margin:0}.crud-header .crud-search[data-v-17725916]{max-width:15rem}.crud-header .crud-search .btn[data-v-17725916]{border-top-left-radius:0;border-bottom-left-radius:0;border-top-right-radius:.375rem;border-bottom-right-radius:.375rem}.crud-header .crud-search .btn.open[data-v-17725916]{border-top-right-radius:0;border-bottom-right-radius:0}.crud-header .table-options[data-v-17725916]{margin-bottom:1rem;display:flex;align-items:center;justify-content:flex-end}@media (min-width:992px){.table[data-v-17725916]{table-layout:auto}.table tbody td[data-v-17725916]{overflow:scroll;-ms-overflow-style:none;scrollbar-width:none}.table tbody td[data-v-17725916]::-webkit-scrollbar{display:none}}",
    map: undefined,
    media: undefined
  });
};
/* scoped */


const __vue_scope_id__ = "data-v-17725916";
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
