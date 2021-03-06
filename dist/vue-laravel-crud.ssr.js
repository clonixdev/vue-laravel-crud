'use strict';var draggable=require('vuedraggable'),axios=require('axios');function _interopDefaultLegacy(e){return e&&typeof e==='object'&&'default'in e?e:{'default':e}}var draggable__default=/*#__PURE__*/_interopDefaultLegacy(draggable);var axios__default=/*#__PURE__*/_interopDefaultLegacy(axios);function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {
  try {
    var info = gen[key](arg);
    var value = info.value;
  } catch (error) {
    reject(error);
    return;
  }

  if (info.done) {
    resolve(value);
  } else {
    Promise.resolve(value).then(_next, _throw);
  }
}

function _asyncToGenerator(fn) {
  return function () {
    var self = this,
        args = arguments;
    return new Promise(function (resolve, reject) {
      var gen = fn.apply(self, args);

      function _next(value) {
        asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value);
      }

      function _throw(err) {
        asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err);
      }

      _next(undefined);
    });
  };
}

function _slicedToArray(arr, i) {
  return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest();
}

function _arrayWithHoles(arr) {
  if (Array.isArray(arr)) return arr;
}

function _iterableToArrayLimit(arr, i) {
  if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return;
  var _arr = [];
  var _n = true;
  var _d = false;
  var _e = undefined;

  try {
    for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) {
      _arr.push(_s.value);

      if (i && _arr.length === i) break;
    }
  } catch (err) {
    _d = true;
    _e = err;
  } finally {
    try {
      if (!_n && _i["return"] != null) _i["return"]();
    } finally {
      if (_d) throw _e;
    }
  }

  return _arr;
}

function _unsupportedIterableToArray(o, minLen) {
  if (!o) return;
  if (typeof o === "string") return _arrayLikeToArray(o, minLen);
  var n = Object.prototype.toString.call(o).slice(8, -1);
  if (n === "Object" && o.constructor) n = o.constructor.name;
  if (n === "Map" || n === "Set") return Array.from(o);
  if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);
}

function _arrayLikeToArray(arr, len) {
  if (len == null || len > arr.length) len = arr.length;

  for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i];

  return arr2;
}

function _nonIterableRest() {
  throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}var script = /*#__PURE__*/{
  name: "VueLaravelCrud",
  components: {
    draggable: draggable__default['default']
  },
  data: function data() {
    return {
      filterSidebarOpen: false,
      forceRecomputeCounter: 0,
      filtersVisible: false,
      loading: false,
      items: [],
      selectedItems: [],
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
    search: function search(val) {
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
    refreshAfterSave: {
      type: Boolean,
      default: true
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
      default: "??Esta seguro de borrar este elemento?"
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
  mounted: function mounted() {
    var _this2 = this;

    this.item = this.model;
    this.itemDefault = JSON.parse(JSON.stringify(this.item));
    this.internalFilters = [];
    this.columns.forEach(function (column) {
      if (_this2.isColumnHasFilter(column)) {
        if (column.type == "date") {
          _this2.internalFilters.push({
            column: column.prop + "_from",
            op: column.filterOp ? column.filterOp : "=",
            value: null
          });

          _this2.internalFilters.push({
            column: column.prop + "_to",
            op: column.filterOp ? column.filterOp : "=",
            value: null
          });
        } else {
          _this2.internalFilters.push({
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
    itemValue: function itemValue() {
      return function (column, item) {
        if (column.prop && column.prop.split(".").length > 1 && column.prop.split(".")[1]) {
          return item[column.prop.split(".")[0]] && item[column.prop.split(".")[0]][column.prop.split(".")[1]] ? item[column.prop.split(".")[0]][column.prop.split(".")[1]] : "";
        } else {
          return item[column.prop];
        }
      };
    },
    filteredItems: function filteredItems() {
      return this.items;
    },
    finalFilters: function finalFilters() {
      return this.filters.concat(this.filter).concat(this.internalFilter);
    },
    internalFilter: function internalFilter() {
      var filter = [];
      this.forceRecomputeCounter;
      this.internalFilters.forEach(function (f) {
        if (f.value) filter.push([f.column, f.op, f.value]);
      });
      return filter;
    },
    internalFilterByProp: function internalFilterByProp() {
      var _this3 = this;

      return function (prop) {
        return _this3.internalFilters.find(function (inf) {
          return inf.column == prop;
        });
      };
    }
  },
  methods: {
    toggleFilters: function toggleFilters() {
      this.filtersVisible = !this.filtersVisible;

      if (this.displayMode == this.displayModes.MODE_CARDS) {
        this.filterSidebarOpen = this.filtersVisible;
      } else {
        this.filterSidebarOpen = false;
      }
    },
    toggleDisplayMode: function toggleDisplayMode() {
      if (this.displayMode == this.displayModes.MODE_TABLE) this.displayMode = this.displayModes.MODE_CARDS;else if (this.displayMode == this.displayModes.MODE_CARDS) this.displayMode = this.displayModes.MODE_TABLE;
    },
    onRowHover: function onRowHover(item, itemIndex) {
      if (this.selectHover) {
        this.item = this.items[itemIndex];
        this.selectItem();
        this.onSelect();
      }
    },
    onRowClick: function onRowClick(item, itemIndex) {
      if (this.selectClick) {
        this.item = this.items[itemIndex];
        this.selectItem();
        this.onSelect();
      }
    },
    onCheckSelect: function onCheckSelect(value, item) {
      console.debug("ON CHECK SELECT", value, item);
      this.item = item;
      this.selectItem();
      this.onSelect();
    },
    toggleAll: function toggleAll() {
      if (this.selectedItems.length > 0) {
        this.selectedItems = [];
      } else {
        this.selectedItems = this.items;
      }
    },
    selectItem: function selectItem() {
      var _this4 = this;

      var sitem = this.selectedItems.find(function (e) {
        return e.id == _this4.item.id;
      });

      if (sitem) {
        this.item.selected = false;
        this.selectedItems = this.selectedItems.filter(function (e) {
          return e.id != _this4.item.id;
        });
      } else {
        this.item.selected = true;
        this.selectedItems.push(this.item);
      }
    },
    getSelectedItems: function getSelectedItems() {
      return this.selectedItems;
    },
    onSelect: function onSelect() {
      this.$emit("select", this.item);
    },
    showItem: function showItem(id, itemIndex) {
      this.item = this.items[itemIndex];
      this.onSelect();
      this.$bvModal.show("modal-show-item-" + this.modelName);
    },
    createItem: function createItem() {
      this.item = JSON.parse(JSON.stringify(this.itemDefault));
      this.onSelect();
      this.$bvModal.show("modal-form-item-" + this.modelName);
    },
    updateItem: function updateItem(id, itemIndex) {
      this.item = this.items[itemIndex]; //console.debug(itemIndex);

      this.onSelect();
      this.$bvModal.show("modal-form-item-" + this.modelName);
    },
    refresh: function refresh() {
      this.fetchItems();
    },
    isColumnHasFilter: function isColumnHasFilter(column) {
      return column && !column.hideFilter && column.type != "actions";
    },
    setFilter: function setFilter(column, value) {
      var _this5 = this;

      var filter = this.filter.find(function (f) {
        return f.column == column;
      });
      filter.value = value;
      this.forceRecomputeCounter++;
      setTimeout(function () {
        _this5.refresh();
      }, 1);
    },
    fetchItems: function fetchItems() {
      var page = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 1;

      var _this = this;

      _this.loading = true;
      axios__default['default'].get(this.apiUrl + "/" + this.modelName, {
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
    removeItem: function removeItem(id, index) {
      var _this = this;

      this.$bvModal.msgBoxConfirm(_this.messageRemoveConfirm, {
        size: "sm",
        buttonSize: "sm",
        okVariant: "danger",
        okTitle: _this.messageRemove,
        cancelTitle: "NO",
        centered: true
      }).then(function (value) {
        if (value) {
          _this.loading = true;
          axios__default['default'].delete(_this.apiUrl + "/" + _this.modelName + "/" + id).then(function (response) {
            _this.items.splice(index, 1);

            _this.toastSuccess("Elemento eliminado.");

            _this.loading = false;
          }).catch(function (error) {
            _this.toastError(error);

            _this.loading = false;
          });
        }
      }).catch(function (error) {
        _this.toastError(error);

        _this.loading = false;
      });
    },
    saveSort: function saveSort() {
      if (this.sorteable) {
        var _this = this;

        _this.loading = true;
        var order = [];
        this.items.forEach(function (v, k) {
          order.push({
            id: v.id,
            order: k + 1
          });
          v.order = k + 1;
        });
        axios__default['default'].post(this.apiUrl + "/" + _this.modelName + "/sort", {
          order: order
        }).then(function (response) {
          response.data;

          _this.toastSuccess("Orden Actualizado");

          if (_this.refreshAfterSave) _this.refresh();
          _this.loading = false;
        }).catch(function (error) {
          //console.debug(error);
          _this.toastError(error);

          _this.loading = false;
        });
      }
    },
    getStateValue: function getStateValue(value, options) {
      if (!options) return value;
      var ops = options.filter(function (option) {
        if (Array.isArray(value)) {
          return value.includes(option.id);
        } else {
          return option.id == value;
        }
      });
      ops = ops.map(function (option) {
        return option.text ? option.text : option.label ? option.label : "";
      });
      return ops.join(", ");
    },
    saveItem: function saveItem() {
      var _this6 = this;

      return _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
        var _this, formData;

        return regeneratorRuntime.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _this = _this6;
                _this.loading = true;

                if (_this6.item.id) {
                  axios__default['default'].put(_this6.apiUrl + "/" + _this.modelName + "/" + _this.item.id, _this.item).then(function (response) {
                    _this.$bvModal.hide("modal-form-item-" + _this.modelName);

                    var itemSv = response.data;

                    var itemIndex = _this.items.findIndex(function (item) {
                      return item.id == _this.item.id;
                    });

                    _this.items[itemIndex] = itemSv;
                    _this.item = itemSv;
                    _this.loading = false;
                    if (_this.refreshAfterSave) _this.refresh();

                    _this.toastSuccess("Elemento Modificado");
                  }).catch(function (error) {
                    _this.toastError(error);

                    _this.loading = false;
                  });
                } else {
                  if (_this6.createMultipart) {
                    formData = new FormData();
                    Object.keys(_this.item).forEach(function (key) {
                      if (_this.item[key][0] && _this.item[key][0].name) {
                        console.log(_this.item[key]);
                        var files = _this.item[key];

                        for (var x = 0; x < files.length; x++) {
                          formData.append(key + "[]", _this.item[key][x], _this.item[key][x].name);
                        }
                      } else formData.append(key, _this.item[key]);
                    });
                    axios__default['default'].post(_this6.apiUrl + "/" + _this.modelName, formData).then(function (response) {
                      _this.loading = false;

                      _this.$bvModal.hide("modal-form-item-" + _this.modelName);

                      if (response.data.success) {
                        if (response.data.message) {
                          _this.toastSuccess(response.data.message);
                        }

                        return;
                      }

                      var itemSv = response.data;

                      _this.items.push(itemSv);

                      _this.item = itemSv;
                      if (_this.refreshAfterSave) _this.refresh();

                      _this.toastSuccess("Elemento Creado");
                    }).catch(function (error) {
                      _this.toastError(error);

                      _this.loading = false;
                    });
                  } else {
                    axios__default['default'].post(_this6.apiUrl + "/" + _this.modelName, _this.item).then(function (response) {
                      _this.loading = false;

                      _this.$bvModal.hide("modal-form-item-" + _this.modelName);

                      if (response.data.success) {
                        if (response.data.message) {
                          _this.toastSuccess(response.data.message);
                        }

                        return;
                      }

                      var itemSv = response.data;

                      _this.items.push(itemSv);

                      _this.item = itemSv;
                      if (_this.refreshAfterSave) _this.refresh();

                      _this.toastSuccess("Elemento Creado");
                    }).catch(function (error) {
                      _this.toastError(error);

                      _this.loading = false;
                    });
                  }
                }

              case 3:
              case "end":
                return _context.stop();
            }
          }
        }, _callee);
      }))();
    },
    toastError: function toastError(error) {
      this.$bvToast.toast(error.message, {
        title: "Error",
        toaster: "b-toaster-bottom-right",
        variant: "danger",
        solid: true,
        appendToast: true
      });
    },
    toastSuccess: function toastSuccess(message) {
      this.$bvToast.toast(message, {
        title: "Listo",
        toaster: "b-toaster-bottom-right",
        variant: "success",
        solid: true,
        appendToast: true
      });
    },
    onChangeFilter: function onChangeFilter(event) {
      var _this7 = this;

      this.forceRecomputeCounter++;
      setTimeout(function () {
        _this7.refresh();
      }, 1);
    },
    onPaginationChange: function onPaginationChange(page) {
      this.fetchItems(page);
    },
    makePagination: function makePagination(data) {
      var pagination = {
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
};function normalizeComponent(template, style, script, scopeId, isFunctionalTemplate, moduleIdentifier /* server only */, shadowMode, createInjector, createInjectorSSR, createInjectorShadow) {
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
}function createInjectorSSR(context) {
    if (!context && typeof __VUE_SSR_CONTEXT__ !== 'undefined') {
        context = __VUE_SSR_CONTEXT__;
    }
    if (!context)
        return () => { };
    if (!('styles' in context)) {
        context._styles = context._styles || {};
        Object.defineProperty(context, 'styles', {
            enumerable: true,
            get: () => context._renderStyles(context._styles)
        });
        context._renderStyles = context._renderStyles || renderStyles;
    }
    return (id, style) => addStyle(id, style, context);
}
function addStyle(id, css, context) {
    const group = css.media || 'default' ;
    const style = context._styles[group] || (context._styles[group] = { ids: [], css: '' });
    if (!style.ids.includes(id)) {
        style.media = css.media;
        style.ids.push(id);
        let code = css.source;
        style.css += code + '\n';
    }
}
function renderStyles(styles) {
    let css = '';
    for (const key in styles) {
        const style = styles[key];
        css +=
            '<style data-vue-ssr-id="' +
                Array.from(style.ids).join(' ') +
                '"' +
                (style.media ? ' media="' + style.media + '"' : '') +
                '>' +
                style.css +
                '</style>';
    }
    return css;
}/* script */
var __vue_script__ = script;
/* template */

var __vue_render__ = function __vue_render__() {
  var _vm = this;

  var _h = _vm.$createElement;

  var _c = _vm._self._c || _h;

  return _c('div', {
    staticClass: "crud"
  }, [_vm.showHeader ? _vm._ssrNode("<div class=\"crud-header\" data-v-0ba5f000>", "</div>", [_vm._ssrNode((_vm.showTitle ? "<h4 class=\"crud-title\" data-v-0ba5f000>" + _vm._ssrEscape(_vm._s(_vm.title)) + "</h4>" : "<!---->") + " "), _c('b-sidebar', {
    attrs: {
      "title": "Filtrar",
      "right": "",
      "shadow": ""
    },
    model: {
      value: _vm.filterSidebarOpen,
      callback: function callback($$v) {
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
    }, [_vm._v("S??")]), _vm._v(" "), _c('option', {
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
        callback: function callback($$v) {
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
        callback: function callback($$v) {
          _vm.$set(_vm.internalFilterByProp(column.prop + '_to'), "value", $$v);
        },
        expression: "\n                          internalFilterByProp(column.prop + '_to').value\n                        "
      }
    })], 1)])]) : column.type == 'state' ? _c('div', {
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
    }), _vm._v(" "), _vm._l(column.options, function (option, indexo) {
      return _c('option', {
        key: indexo,
        domProps: {
          "value": option.id
        }
      }, [_vm._v("\n                      " + _vm._s(option.text ? option.text : option.label ? option.label : "") + "\n                    ")]);
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
  })], 2), _vm._ssrNode(" "), _vm._ssrNode("<div class=\"table-options\" data-v-0ba5f000>", "</div>", [_c('b-button-group', {
    staticClass: "mr-1"
  }, [_vm._t("tableActions", [_vm._t("tableActionsPrepend", null, {
    "loading": _vm.loading
  }), _vm._v(" "), _vm.showCreateBtn ? _c('b-button', {
    attrs: {
      "variant": "success",
      "disabled": _vm.loading
    },
    on: {
      "click": function click($event) {
        return _vm.createItem();
      }
    }
  }, [_c('b-icon-plus'), _vm._v(_vm._s(_vm.messageNew) + "\n          ")], 1) : _vm._e(), _vm._v(" "), _vm.enableFilters ? _c('b-button', {
    on: {
      "click": function click($event) {
        return _vm.toggleFilters();
      }
    }
  }, [_vm._v("Filtros")]) : _vm._e(), _vm._v(" "), _c('b-button', {
    on: {
      "click": function click($event) {
        return _vm.refresh();
      }
    }
  }, [_c('b-icon-arrow-clockwise')], 1), _vm._v(" "), _vm.displayModeToggler ? _c('b-button', {
    attrs: {
      "variant": "info",
      "disabled": _vm.loading
    },
    on: {
      "click": function click($event) {
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
      "click": function click($event) {
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
      callback: function callback($$v) {
        _vm.search = $$v;
      },
      expression: "search"
    }
  }) : _vm._e()], 1), _vm._v(" "), _vm._t("tableActionsAppend", null, {
    "loading": _vm.loading
  })], 2) : _vm._e()], {
    "createItem": _vm.createItem,
    "toggleDisplayMode": _vm.toggleDisplayMode,
    "loading": _vm.loading
  })], 2)], 1)], 2) : _vm._e(), _vm._ssrNode(" "), _c('b-overlay', {
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
    }, [_vm._v("S??")]), _vm._v(" "), _c('option', {
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
        callback: function callback($$v) {
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
        callback: function callback($$v) {
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
      }, [_vm._v("\n                      " + _vm._s(option.text ? option.text : option.label ? option.label : "") + "\n                    ")]);
    })], 2) : column.type == 'checkbox' ? _c('b-form-checkbox', {
      attrs: {
        "name": "select-all"
      },
      on: {
        "change": function change($event) {
          return _vm.toggleAll();
        }
      }
    }) : _c('input', {
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
        "change": function change($event) {
          return _vm.onChangeFilter($event);
        },
        "input": function input($event) {
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
        "mouseover": function mouseover($event) {
          return _vm.onRowHover(item, index);
        },
        "click": function click($event) {
          return _vm.onRowClick(item, index);
        }
      }
    }, [_vm._t("row", _vm._l(_vm.columns, function (column, indexc) {
      return _c('td', {
        key: indexc,
        attrs: {
          "scope": column.prop == 'id' ? 'row' : ''
        }
      }, [_vm._t('cell-' + column.prop, [column.type == 'boolean' ? _c('span', [_vm.itemValue(column, item) == 'true' || _vm.itemValue(column, item) == 1 || _vm.itemValue(column, item) == '1' ? _c('b-badge', {
        attrs: {
          "variant": "success"
        }
      }, [_c('b-icon-check-circle')], 1) : _vm._e(), _vm._v(" "), !_vm.itemValue(column, item) || _vm.itemValue(column, item) == '0' || _vm.itemValue(column, item) == 'false' ? _c('b-badge', {
        attrs: {
          "variant": "danger"
        }
      }, [_c('b-icon-x-circle')], 1) : _vm._e()], 1) : column.type == 'date' ? _c('span', [_vm._v("\n                    " + _vm._s(_vm.itemValue(column, item)) + "\n                  ")]) : column.type == 'checkbox' ? _c('span', [_c('b-form-checkbox', {
        on: {
          "change": function change($event) {
            return _vm.onCheckSelect($event, item);
          }
        },
        model: {
          value: item.selected,
          callback: function callback($$v) {
            _vm.$set(item, "selected", $$v);
          },
          expression: "item.selected"
        }
      })], 1) : column.type == 'state' ? _c('span', [_vm._v("\n                    " + _vm._s(_vm.getStateValue(_vm.itemValue(column, item), column.options)) + "\n                  ")]) : _c('span', [_vm._v("\n                    " + _vm._s(_vm.itemValue(column, item)) + "\n                  ")])], {
        "item": item
      }), _vm._v(" "), column.type == 'actions' ? _c('b-button-group', [_vm._t("rowAction", [_c('b-button', {
        attrs: {
          "variant": "primary"
        },
        on: {
          "click": function click($event) {
            return _vm.showItem(item.id, index);
          }
        }
      }, [_c('b-icon-eye')], 1), _vm._v(" "), _c('b-button', {
        attrs: {
          "variant": "secondary"
        },
        on: {
          "click": function click($event) {
            return _vm.updateItem(item.id, index);
          }
        }
      }, [_c('b-icon-pencil')], 1), _vm._v(" "), _c('b-button', {
        attrs: {
          "variant": "danger"
        },
        on: {
          "click": function click($event) {
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
      "start": function start($event) {
        _vm.drag = true;
      },
      "end": function end($event) {
        _vm.drag = false;
      },
      "sort": function sort($event) {
        return _vm.onSort();
      }
    },
    model: {
      value: _vm.items,
      callback: function callback($$v) {
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
        fn: function fn() {
          return [_c('b-button-group', [_vm._t("rowAction", [_c('b-button', {
            attrs: {
              "variant": "primary"
            },
            on: {
              "click": function click($event) {
                return _vm.showItem(item.id, index);
              }
            }
          }, [_c('b-icon-eye')], 1), _vm._v(" "), _c('b-button', {
            attrs: {
              "variant": "secondary"
            },
            on: {
              "click": function click($event) {
                return _vm.updateItem(item.id, index);
              }
            }
          }, [_c('b-icon-pencil')], 1), _vm._v(" "), _c('b-button', {
            attrs: {
              "variant": "danger"
            },
            on: {
              "click": function click($event) {
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
      }, [column.type != 'actions' ? _c('b-card-text', [_vm._v(_vm._s(column.label) + ":\n                  "), _vm._t('cell-' + column.prop, [column.type == 'boolean' ? _c('span', [_vm.itemValue(column, item) == 'true' || _vm.itemValue(column, item) == 1 || _vm.itemValue(column, item) == '1' ? _c('b-badge', {
        attrs: {
          "variant": "success"
        }
      }, [_c('b-icon-check-circle')], 1) : _vm._e(), _vm._v(" "), !_vm.itemValue(column, item) || _vm.itemValue(column, item) == '0' || _vm.itemValue(column, item) == 'false' ? _c('b-badge', {
        attrs: {
          "variant": "danger"
        }
      }, [_c('b-icon-x-circle')], 1) : _vm._e()], 1) : column.type == 'date' ? _c('span', [_vm._v("\n                      " + _vm._s(_vm.itemValue(column, item)) + "\n                    ")]) : column.type == 'state' ? _c('span', [_vm._v("\n                      " + _vm._s(_vm.getStateValue(_vm.itemValue(column, item), column.options)) + "\n                    ")]) : _c('span', [_vm._v("\n                      " + _vm._s(_vm.itemValue(column, item)) + "\n                    ")])], {
        "item": item
      })], 2) : _vm._e()], 1);
    }), {
      "item": item
    })], 2)], 1);
  }), 1)], 1) : _vm._e()]), _vm._ssrNode(" "), _vm._ssrNode("<div class=\"crud-paginator\" data-v-0ba5f000>", "</div>", [_vm.showPaginator ? _c('b-pagination', {
    attrs: {
      "total-rows": _vm.pagination.total,
      "per-page": _vm.pagination.per_page
    },
    on: {
      "change": function change($event) {
        return _vm.onPaginationChange($event);
      }
    },
    model: {
      value: _vm.pagination.current_page,
      callback: function callback($$v) {
        _vm.$set(_vm.pagination, "current_page", $$v);
      },
      expression: "pagination.current_page"
    }
  }) : _vm._e()], 1), _vm._ssrNode(" "), _c('b-modal', {
    attrs: {
      "id": 'modal-form-item-' + _vm.modelName,
      "hide-footer": "",
      "size": "xl",
      "title": _vm.title,
      "no-close-on-backdrop": ""
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
      callback: function callback($$v) {
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
      "click": function click($event) {
        return _vm.saveItem();
      }
    }
  }, [_vm.loading ? _c('b-spinner', {
    attrs: {
      "small": ""
    }
  }) : _vm._e(), _vm._v(_vm._s(_vm.messageSave) + "\n      ")], 1)], 2)], 1), _vm._ssrNode(" "), _c('b-modal', {
    attrs: {
      "id": 'modal-show-item-' + _vm.modelName,
      "hide-footer": "",
      "size": "xl",
      "title": _vm.title,
      "no-close-on-backdrop": ""
    }
  }, [_vm._t("show", [_c('p', {
    staticClass: "my-4"
  }, [_vm._v("Show")])], {
    "item": _vm.item
  })], 2)], 2);
};

var __vue_staticRenderFns__ = [];
/* style */

var __vue_inject_styles__ = function __vue_inject_styles__(inject) {
  if (!inject) return;
  inject("data-v-0ba5f000_0", {
    source: "tr td[data-v-0ba5f000]:first-child,tr td[data-v-0ba5f000]:last-child{width:1%;white-space:nowrap}.crud-pagination[data-v-0ba5f000]{display:flex;justify-content:center}.crud-header[data-v-0ba5f000]{display:flex;justify-content:space-between;max-height:3rem}.crud-header .crud-title[data-v-0ba5f000]{margin:0}.crud-header .crud-search[data-v-0ba5f000]{max-width:15rem}.crud-header .crud-search .btn[data-v-0ba5f000]{border-top-left-radius:0;border-bottom-left-radius:0;border-top-right-radius:.375rem;border-bottom-right-radius:.375rem}.crud-header .crud-search .btn.open[data-v-0ba5f000]{border-top-right-radius:0;border-bottom-right-radius:0}.crud-header .table-options[data-v-0ba5f000]{margin-bottom:1rem;display:flex;align-items:center;justify-content:flex-end}.custom-control[data-v-0ba5f000]{position:relative;top:-15px}@media (min-width:992px){.table[data-v-0ba5f000]{table-layout:auto}.table tbody td[data-v-0ba5f000]{overflow:scroll;-ms-overflow-style:none;scrollbar-width:none}.table tbody td[data-v-0ba5f000]::-webkit-scrollbar{display:none}}",
    map: undefined,
    media: undefined
  });
};
/* scoped */


var __vue_scope_id__ = "data-v-0ba5f000";
/* module identifier */

var __vue_module_identifier__ = "data-v-0ba5f000";
/* functional template */

var __vue_is_functional_template__ = false;
/* style inject shadow dom */

var __vue_component__ = /*#__PURE__*/normalizeComponent({
  render: __vue_render__,
  staticRenderFns: __vue_staticRenderFns__
}, __vue_inject_styles__, __vue_script__, __vue_scope_id__, __vue_is_functional_template__, __vue_module_identifier__, false, undefined, createInjectorSSR, undefined);// Import vue component
// IIFE injects install function into component, allowing component
// to be registered via Vue.use() as well as Vue.component(),

var component = /*#__PURE__*/(function () {
  // Get component instance
  var installable = __vue_component__; // Attach install function executed by Vue.use()

  installable.install = function (Vue) {
    Vue.component('VueLaravelCrud', installable);
  };

  return installable;
})(); // It's possible to expose named exports when writing components that can
// also be used as directives, etc. - eg. import { RollupDemoDirective } from 'rollup-demo';
// export const RollupDemoDirective = directive;
var namedExports=/*#__PURE__*/Object.freeze({__proto__:null,'default': component});// only expose one global var, with named exports exposed as properties of
// that global var (eg. plugin.namedExport)

Object.entries(namedExports).forEach(function (_ref) {
  var _ref2 = _slicedToArray(_ref, 2),
      exportName = _ref2[0],
      exported = _ref2[1];

  if (exportName !== 'default') component[exportName] = exported;
});module.exports=component;