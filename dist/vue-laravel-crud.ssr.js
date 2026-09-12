'use strict';var require$$0=require('vue');function _interopDefaultLegacy(e){return e&&typeof e==='object'&&'default'in e?e:{'default':e}}var require$$0__default=/*#__PURE__*/_interopDefaultLegacy(require$$0);function _arrayLikeToArray$1(r, a) {
  (null == a || a > r.length) && (a = r.length);
  for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e];
  return n;
}
function _arrayWithHoles(r) {
  if (Array.isArray(r)) return r;
}
function _arrayWithoutHoles$1(r) {
  if (Array.isArray(r)) return _arrayLikeToArray$1(r);
}
function asyncGeneratorStep(n, t, e, r, o, a, c) {
  try {
    var i = n[a](c),
      u = i.value;
  } catch (n) {
    return void e(n);
  }
  i.done ? t(u) : Promise.resolve(u).then(r, o);
}
function _asyncToGenerator(n) {
  return function () {
    var t = this,
      e = arguments;
    return new Promise(function (r, o) {
      var a = n.apply(t, e);
      function _next(n) {
        asyncGeneratorStep(a, r, o, _next, _throw, "next", n);
      }
      function _throw(n) {
        asyncGeneratorStep(a, r, o, _next, _throw, "throw", n);
      }
      _next(void 0);
    });
  };
}
function _defineProperty$1(e, r, t) {
  return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, {
    value: t,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[r] = t, e;
}
function _iterableToArray$1(r) {
  if ("undefined" != typeof Symbol && null != r[Symbol.iterator] || null != r["@@iterator"]) return Array.from(r);
}
function _iterableToArrayLimit(r, l) {
  var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"];
  if (null != t) {
    var e,
      n,
      i,
      u,
      a = [],
      f = !0,
      o = !1;
    try {
      if (i = (t = t.call(r)).next, 0 === l) {
        if (Object(t) !== t) return;
        f = !1;
      } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0);
    } catch (r) {
      o = !0, n = r;
    } finally {
      try {
        if (!f && null != t.return && (u = t.return(), Object(u) !== u)) return;
      } finally {
        if (o) throw n;
      }
    }
    return a;
  }
}
function _nonIterableRest() {
  throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
function _nonIterableSpread$1() {
  throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
function ownKeys$1(e, r) {
  var t = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var o = Object.getOwnPropertySymbols(e);
    r && (o = o.filter(function (r) {
      return Object.getOwnPropertyDescriptor(e, r).enumerable;
    })), t.push.apply(t, o);
  }
  return t;
}
function _objectSpread2$1(e) {
  for (var r = 1; r < arguments.length; r++) {
    var t = null != arguments[r] ? arguments[r] : {};
    r % 2 ? ownKeys$1(Object(t), !0).forEach(function (r) {
      _defineProperty$1(e, r, t[r]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys$1(Object(t)).forEach(function (r) {
      Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r));
    });
  }
  return e;
}
function _regenerator() {
  /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/babel/babel/blob/main/packages/babel-helpers/LICENSE */
  var e,
    t,
    r = "function" == typeof Symbol ? Symbol : {},
    n = r.iterator || "@@iterator",
    o = r.toStringTag || "@@toStringTag";
  function i(r, n, o, i) {
    var c = n && n.prototype instanceof Generator ? n : Generator,
      u = Object.create(c.prototype);
    return _regeneratorDefine(u, "_invoke", function (r, n, o) {
      var i,
        c,
        u,
        f = 0,
        p = o || [],
        y = !1,
        G = {
          p: 0,
          n: 0,
          v: e,
          a: d,
          f: d.bind(e, 4),
          d: function (t, r) {
            return i = t, c = 0, u = e, G.n = r, a;
          }
        };
      function d(r, n) {
        for (c = r, u = n, t = 0; !y && f && !o && t < p.length; t++) {
          var o,
            i = p[t],
            d = G.p,
            l = i[2];
          r > 3 ? (o = l === n) && (u = i[(c = i[4]) ? 5 : (c = 3, 3)], i[4] = i[5] = e) : i[0] <= d && ((o = r < 2 && d < i[1]) ? (c = 0, G.v = n, G.n = i[1]) : d < l && (o = r < 3 || i[0] > n || n > l) && (i[4] = r, i[5] = n, G.n = l, c = 0));
        }
        if (o || r > 1) return a;
        throw y = !0, n;
      }
      return function (o, p, l) {
        if (f > 1) throw TypeError("Generator is already running");
        for (y && 1 === p && d(p, l), c = p, u = l; (t = c < 2 ? e : u) || !y;) {
          i || (c ? c < 3 ? (c > 1 && (G.n = -1), d(c, u)) : G.n = u : G.v = u);
          try {
            if (f = 2, i) {
              if (c || (o = "next"), t = i[o]) {
                if (!(t = t.call(i, u))) throw TypeError("iterator result is not an object");
                if (!t.done) return t;
                u = t.value, c < 2 && (c = 0);
              } else 1 === c && (t = i.return) && t.call(i), c < 2 && (u = TypeError("The iterator does not provide a '" + o + "' method"), c = 1);
              i = e;
            } else if ((t = (y = G.n < 0) ? u : r.call(n, G)) !== a) break;
          } catch (t) {
            i = e, c = 1, u = t;
          } finally {
            f = 1;
          }
        }
        return {
          value: t,
          done: y
        };
      };
    }(r, o, i), !0), u;
  }
  var a = {};
  function Generator() {}
  function GeneratorFunction() {}
  function GeneratorFunctionPrototype() {}
  t = Object.getPrototypeOf;
  var c = [][n] ? t(t([][n]())) : (_regeneratorDefine(t = {}, n, function () {
      return this;
    }), t),
    u = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(c);
  function f(e) {
    return Object.setPrototypeOf ? Object.setPrototypeOf(e, GeneratorFunctionPrototype) : (e.__proto__ = GeneratorFunctionPrototype, _regeneratorDefine(e, o, "GeneratorFunction")), e.prototype = Object.create(u), e;
  }
  return GeneratorFunction.prototype = GeneratorFunctionPrototype, _regeneratorDefine(u, "constructor", GeneratorFunctionPrototype), _regeneratorDefine(GeneratorFunctionPrototype, "constructor", GeneratorFunction), GeneratorFunction.displayName = "GeneratorFunction", _regeneratorDefine(GeneratorFunctionPrototype, o, "GeneratorFunction"), _regeneratorDefine(u), _regeneratorDefine(u, o, "Generator"), _regeneratorDefine(u, n, function () {
    return this;
  }), _regeneratorDefine(u, "toString", function () {
    return "[object Generator]";
  }), (_regenerator = function () {
    return {
      w: i,
      m: f
    };
  })();
}
function _regeneratorDefine(e, r, n, t) {
  var i = Object.defineProperty;
  try {
    i({}, "", {});
  } catch (e) {
    i = 0;
  }
  _regeneratorDefine = function (e, r, n, t) {
    function o(r, n) {
      _regeneratorDefine(e, r, function (e) {
        return this._invoke(r, n, e);
      });
    }
    r ? i ? i(e, r, {
      value: n,
      enumerable: !t,
      configurable: !t,
      writable: !t
    }) : e[r] = n : (o("next", 0), o("throw", 1), o("return", 2));
  }, _regeneratorDefine(e, r, n, t);
}
function _slicedToArray(r, e) {
  return _arrayWithHoles(r) || _iterableToArrayLimit(r, e) || _unsupportedIterableToArray$1(r, e) || _nonIterableRest();
}
function _toConsumableArray$1(r) {
  return _arrayWithoutHoles$1(r) || _iterableToArray$1(r) || _unsupportedIterableToArray$1(r) || _nonIterableSpread$1();
}
function _toPrimitive(t, r) {
  if ("object" != typeof t || !t) return t;
  var e = t[Symbol.toPrimitive];
  if (void 0 !== e) {
    var i = e.call(t, r || "default");
    if ("object" != typeof i) return i;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return ("string" === r ? String : Number)(t);
}
function _toPropertyKey(t) {
  var i = _toPrimitive(t, "string");
  return "symbol" == typeof i ? i : i + "";
}
function _typeof$1(o) {
  "@babel/helpers - typeof";

  return _typeof$1 = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) {
    return typeof o;
  } : function (o) {
    return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o;
  }, _typeof$1(o);
}
function _unsupportedIterableToArray$1(r, a) {
  if (r) {
    if ("string" == typeof r) return _arrayLikeToArray$1(r, a);
    var t = {}.toString.call(r).slice(8, -1);
    return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray$1(r, a) : void 0;
  }
}var _export_sfc = (sfc, props) => {
  const target = sfc.__vccOpts || sfc;
  for (const [key, val] of props) {
    target[key] = val;
  }
  return target;
};// Componente para renderizar filtros custom con callback
// En Vue 3, usamos defineComponent con setup
var RenderCustomFilter = require$$0.defineComponent({
  name: 'RenderCustomFilter',
  props: {
    renderFunction: {
      type: Function,
      required: true
    },
    customFilter: {
      type: Object,
      required: true
    },
    filter: {
      type: Array,
      default: function _default() {
        return [];
      }
    },
    internalFilterByProp: {
      type: Function,
      required: true
    },
    getFilterForColumn: {
      type: Function,
      required: true
    },
    onChangeFilter: {
      type: Function,
      required: true
    }
  },
  setup: function setup(props) {
    return function () {
      var renderFunction = props.renderFunction,
        customFilter = props.customFilter,
        filter = props.filter,
        internalFilterByProp = props.internalFilterByProp,
        getFilterForColumn = props.getFilterForColumn,
        onChangeFilter = props.onChangeFilter;
      if (!renderFunction || typeof renderFunction !== 'function') {
        console.warn('RenderCustomFilter: renderFunction is not a function', renderFunction);
        return null;
      }
      try {
        return renderFunction(require$$0.h, {
          column: customFilter,
          filter: filter,
          internalFilterByProp: internalFilterByProp,
          getFilterForColumn: getFilterForColumn,
          onChangeFilter: onChangeFilter
        });
      } catch (error) {
        console.error('Error rendering custom filter:', error);
        return null;
      }
    };
  }
});
var _sfc_main$f = {
  name: 'CrudFilters',
  components: {
    RenderCustomFilter: RenderCustomFilter
  },
  inject: ['bootstrapFactory', 'columns', 'customFilters', 'isColumnHasFilter', 'isCustomFilterEnabled', 'filter', 'internalFilterByProp', 'optionsLoaded', 'onChangeFilter', 'resetFilters', 'setupFilters', 'internalFilters'],
  methods: {
    // Método helper para obtener el filtro de forma segura, creándolo si no existe
    getFilterForColumn: function getFilterForColumn(column) {
      var filter = this.internalFilterByProp(column.prop);

      // Si el filtro no existe, intentar inicializar los filtros
      if (!filter) {
        // Verificar si hay filtros inicializados
        if (this.internalFilters && this.internalFilters.length === 0) {
          this.setupFilters();
          // Intentar obtener el filtro nuevamente después de inicializar
          filter = this.internalFilterByProp(column.prop);
        }
      }

      // Si aún no existe, crear un objeto temporal para evitar errores
      if (!filter) {
        return {
          value: null
        };
      }
      return filter;
    },
    // Método helper específico para campos de fecha (from)
    getFilterForDateFrom: function getFilterForDateFrom(column) {
      var filter = this.internalFilterByProp(column.prop + '_from');
      if (!filter) {
        if (this.internalFilters && this.internalFilters.length === 0) {
          this.setupFilters();
          return this.internalFilterByProp(column.prop + '_from') || {
            value: null
          };
        }
        return {
          value: null
        };
      }
      return filter;
    },
    // Método helper específico para campos de fecha (to)
    getFilterForDateTo: function getFilterForDateTo(column) {
      var filter = this.internalFilterByProp(column.prop + '_to');
      if (!filter) {
        if (this.internalFilters && this.internalFilters.length === 0) {
          this.setupFilters();
          return this.internalFilterByProp(column.prop + '_to') || {
            value: null
          };
        }
        return {
          value: null
        };
      }
      return filter;
    }
  }
};
var _hoisted_1$f = {
  class: "px-3 py-2"
};
var _hoisted_2$b = {
  key: 0
};
var _hoisted_3$b = {
  key: 0,
  class: "form-group"
};
var _hoisted_4$a = ["onUpdate:modelValue"];
var _hoisted_5$7 = {
  key: 1,
  class: "form-group"
};
var _hoisted_6$5 = {
  class: "row"
};
var _hoisted_7$5 = {
  class: "col-6"
};
var _hoisted_8$5 = {
  class: "col-6"
};
var _hoisted_9$4 = {
  key: 2,
  class: "form-group"
};
var _hoisted_10$4 = {
  class: "row"
};
var _hoisted_11$3 = {
  class: "col-6"
};
var _hoisted_12$1 = ["onUpdate:modelValue", "step"];
var _hoisted_13$1 = {
  class: "col-6"
};
var _hoisted_14$1 = ["onUpdate:modelValue", "step"];
var _hoisted_15$1 = {
  key: 3,
  class: "form-group"
};
var _hoisted_16$1 = ["onUpdate:modelValue"];
var _hoisted_17$1 = ["value"];
var _hoisted_18$1 = {
  key: 4,
  class: "form-group"
};
var _hoisted_19$1 = ["onUpdate:modelValue"];
var _hoisted_20$1 = ["value"];
var _hoisted_21$1 = {
  key: 5,
  class: "form-group"
};
var _hoisted_22$1 = ["onUpdate:modelValue"];
var _hoisted_23$1 = {
  key: 0
};
var _hoisted_24$1 = {
  key: 0,
  class: "form-group"
};
var _hoisted_25 = ["onUpdate:modelValue"];
var _hoisted_26 = {
  key: 1,
  class: "form-group"
};
var _hoisted_27 = {
  class: "row"
};
var _hoisted_28 = {
  class: "col-6"
};
var _hoisted_29 = {
  class: "col-6"
};
var _hoisted_30 = {
  key: 2,
  class: "form-group"
};
var _hoisted_31 = {
  class: "row"
};
var _hoisted_32 = {
  class: "col-6"
};
var _hoisted_33 = ["onUpdate:modelValue", "step"];
var _hoisted_34 = {
  class: "col-6"
};
var _hoisted_35 = ["onUpdate:modelValue", "step"];
var _hoisted_36 = {
  key: 3,
  class: "form-group"
};
var _hoisted_37 = ["onUpdate:modelValue"];
var _hoisted_38 = ["value"];
var _hoisted_39 = {
  key: 4,
  class: "form-group"
};
var _hoisted_40 = ["onUpdate:modelValue"];
var _hoisted_41 = ["value"];
var _hoisted_42 = {
  key: 5,
  class: "form-group"
};
var _hoisted_43 = ["onUpdate:modelValue"];
var _hoisted_44 = {
  class: "mt-3 d-flex justify-content-center"
};
function _sfc_render$f(_ctx, _cache, $props, $setup, $data, $options) {
  var _component_b_form_datepicker = require$$0.resolveComponent("b-form-datepicker");
  var _component_RenderCustomFilter = require$$0.resolveComponent("RenderCustomFilter");
  return require$$0.openBlock(), require$$0.createElementBlock("div", _hoisted_1$f, [(require$$0.openBlock(true), require$$0.createElementBlock(require$$0.Fragment, null, require$$0.renderList($options.columns, function (column, indexc) {
    return require$$0.openBlock(), require$$0.createElementBlock("div", {
      key: indexc
    }, [$options.isColumnHasFilter(column) ? (require$$0.openBlock(), require$$0.createElementBlock("div", _hoisted_2$b, [require$$0.renderSlot(_ctx.$slots, 'sidebar-filter-' + column.prop, {
      column: column,
      filter: $options.filter,
      internalFilterByProp: $options.internalFilterByProp,
      getFilterForColumn: $options.getFilterForColumn
    }, function () {
      return [column.type == 'boolean' ? (require$$0.openBlock(), require$$0.createElementBlock("div", _hoisted_3$b, [require$$0.createElementVNode("label", null, require$$0.toDisplayString(column.label), 1 /* TEXT */), require$$0.withDirectives(require$$0.createElementVNode("select", {
        class: "form-control",
        "onUpdate:modelValue": function onUpdateModelValue($event) {
          return $options.getFilterForColumn(column).value = $event;
        },
        onChange: _cache[0] || (_cache[0] = function ($event) {
          return $options.onChangeFilter($event);
        })
      }, _toConsumableArray$1(_cache[14] || (_cache[14] = [require$$0.createElementVNode("option", {
        value: ""
      }, null, -1 /* CACHED */), require$$0.createElementVNode("option", {
        value: "1"
      }, "Sí", -1 /* CACHED */), require$$0.createElementVNode("option", {
        value: "0"
      }, "No", -1 /* CACHED */)])), 40 /* PROPS, NEED_HYDRATION */, _hoisted_4$a), [[require$$0.vModelSelect, $options.getFilterForColumn(column).value]])])) : column.type == 'date' ? (require$$0.openBlock(), require$$0.createElementBlock("div", _hoisted_5$7, [require$$0.createElementVNode("div", _hoisted_6$5, [require$$0.createElementVNode("div", _hoisted_7$5, [require$$0.createVNode(_component_b_form_datepicker, {
        modelValue: $options.getFilterForDateFrom(column).value,
        "onUpdate:modelValue": function onUpdateModelValue($event) {
          return $options.getFilterForDateFrom(column).value = $event;
        },
        "today-button": "",
        "reset-button": "",
        "close-button": "",
        locale: "es"
      }, null, 8 /* PROPS */, ["modelValue", "onUpdate:modelValue"])]), require$$0.createElementVNode("div", _hoisted_8$5, [require$$0.createVNode(_component_b_form_datepicker, {
        modelValue: $options.getFilterForDateTo(column).value,
        "onUpdate:modelValue": function onUpdateModelValue($event) {
          return $options.getFilterForDateTo(column).value = $event;
        },
        "today-button": "",
        "reset-button": "",
        "close-button": "",
        locale: "es"
      }, null, 8 /* PROPS */, ["modelValue", "onUpdate:modelValue"])])])])) : column.type == 'number' || column.type == 'money' ? (require$$0.openBlock(), require$$0.createElementBlock("div", _hoisted_9$4, [require$$0.createElementVNode("label", null, require$$0.toDisplayString(column.label), 1 /* TEXT */), require$$0.createElementVNode("div", _hoisted_10$4, [require$$0.createElementVNode("div", _hoisted_11$3, [require$$0.withDirectives(require$$0.createElementVNode("input", {
        type: "number",
        class: "form-control",
        "onUpdate:modelValue": function onUpdateModelValue($event) {
          return $options.getFilterForDateFrom(column).value = $event;
        },
        step: column.type == 'money' ? '0.01' : '1',
        onChange: _cache[1] || (_cache[1] = function ($event) {
          return $options.onChangeFilter($event);
        }),
        placeholder: "Desde"
      }, null, 40 /* PROPS, NEED_HYDRATION */, _hoisted_12$1), [[require$$0.vModelText, $options.getFilterForDateFrom(column).value, void 0, {
        number: true
      }]])]), require$$0.createElementVNode("div", _hoisted_13$1, [require$$0.withDirectives(require$$0.createElementVNode("input", {
        type: "number",
        class: "form-control",
        "onUpdate:modelValue": function onUpdateModelValue($event) {
          return $options.getFilterForDateTo(column).value = $event;
        },
        step: column.type == 'money' ? '0.01' : '1',
        onChange: _cache[2] || (_cache[2] = function ($event) {
          return $options.onChangeFilter($event);
        }),
        placeholder: "Hasta"
      }, null, 40 /* PROPS, NEED_HYDRATION */, _hoisted_14$1), [[require$$0.vModelText, $options.getFilterForDateTo(column).value, void 0, {
        number: true
      }]])])])])) : column.type == 'state' ? (require$$0.openBlock(), require$$0.createElementBlock("div", _hoisted_15$1, [require$$0.createElementVNode("label", null, require$$0.toDisplayString(column.label), 1 /* TEXT */), column.options && Array.isArray(column.options) ? require$$0.withDirectives((require$$0.openBlock(), require$$0.createElementBlock("select", {
        key: 0,
        class: "form-control",
        "onUpdate:modelValue": function onUpdateModelValue($event) {
          return $options.getFilterForColumn(column).value = $event;
        },
        onChange: _cache[3] || (_cache[3] = function ($event) {
          return $options.onChangeFilter($event);
        })
      }, [_cache[15] || (_cache[15] = require$$0.createElementVNode("option", {
        value: ""
      }, null, -1 /* CACHED */)), (require$$0.openBlock(true), require$$0.createElementBlock(require$$0.Fragment, null, require$$0.renderList(column.options, function (option) {
        return require$$0.openBlock(), require$$0.createElementBlock("option", {
          value: option.value,
          key: option.value || option.id
        }, require$$0.toDisplayString(option.text), 9 /* TEXT, PROPS */, _hoisted_17$1);
      }), 128 /* KEYED_FRAGMENT */))], 40 /* PROPS, NEED_HYDRATION */, _hoisted_16$1)), [[require$$0.vModelSelect, $options.getFilterForColumn(column).value]]) : require$$0.createCommentVNode("v-if", true)])) : column.type == 'array' ? (require$$0.openBlock(), require$$0.createElementBlock("div", _hoisted_18$1, [require$$0.createElementVNode("label", null, require$$0.toDisplayString(column.label), 1 /* TEXT */), column.options && Array.isArray(column.options) ? require$$0.withDirectives((require$$0.openBlock(), require$$0.createElementBlock("select", {
        key: 0,
        class: "form-control",
        "onUpdate:modelValue": function onUpdateModelValue($event) {
          return $options.getFilterForColumn(column).value = $event;
        },
        onChange: _cache[4] || (_cache[4] = function ($event) {
          return $options.onChangeFilter($event);
        })
      }, [_cache[16] || (_cache[16] = require$$0.createElementVNode("option", {
        value: ""
      }, null, -1 /* CACHED */)), (require$$0.openBlock(true), require$$0.createElementBlock(require$$0.Fragment, null, require$$0.renderList(column.options, function (option) {
        return require$$0.openBlock(), require$$0.createElementBlock("option", {
          value: option.value,
          key: option.value || option.id
        }, require$$0.toDisplayString(option.text), 9 /* TEXT, PROPS */, _hoisted_20$1);
      }), 128 /* KEYED_FRAGMENT */))], 40 /* PROPS, NEED_HYDRATION */, _hoisted_19$1)), [[require$$0.vModelSelect, $options.getFilterForColumn(column).value]]) : require$$0.createCommentVNode("v-if", true)])) : (require$$0.openBlock(), require$$0.createElementBlock("div", _hoisted_21$1, [require$$0.createElementVNode("label", null, require$$0.toDisplayString(column.label), 1 /* TEXT */), require$$0.withDirectives(require$$0.createElementVNode("input", {
        class: "form-control",
        "onUpdate:modelValue": function onUpdateModelValue($event) {
          return $options.getFilterForColumn(column).value = $event;
        },
        onChange: _cache[5] || (_cache[5] = function ($event) {
          return $options.onChangeFilter($event);
        })
      }, null, 40 /* PROPS, NEED_HYDRATION */, _hoisted_22$1), [[require$$0.vModelText, $options.getFilterForColumn(column).value, void 0, {
        lazy: true
      }]])]))];
    })])) : require$$0.createCommentVNode("v-if", true)]);
  }), 128 /* KEYED_FRAGMENT */)), require$$0.createCommentVNode(" Filtros custom "), (require$$0.openBlock(true), require$$0.createElementBlock(require$$0.Fragment, null, require$$0.renderList($options.customFilters, function (customFilter, indexcf) {
    return require$$0.openBlock(), require$$0.createElementBlock("div", {
      key: 'custom-' + indexcf
    }, [$options.isCustomFilterEnabled(customFilter) ? (require$$0.openBlock(), require$$0.createElementBlock("div", _hoisted_23$1, [require$$0.createCommentVNode(" Slot personalizado para filtro custom "), require$$0.renderSlot(_ctx.$slots, 'sidebar-filter-custom-' + customFilter.prop, {
      column: customFilter,
      filter: $options.filter,
      internalFilterByProp: $options.internalFilterByProp,
      getFilterForColumn: $options.getFilterForColumn
    }, function () {
      return [require$$0.createCommentVNode(" Si type es una función callback "), typeof customFilter.type === 'function' ? (require$$0.openBlock(), require$$0.createBlock(_component_RenderCustomFilter, {
        key: 0,
        "render-function": customFilter.type,
        "custom-filter": customFilter,
        filter: $options.filter,
        "internal-filter-by-prop": $options.internalFilterByProp,
        "get-filter-for-column": $options.getFilterForColumn,
        "on-change-filter": $options.onChangeFilter
      }, null, 8 /* PROPS */, ["render-function", "custom-filter", "filter", "internal-filter-by-prop", "get-filter-for-column", "on-change-filter"])) : (require$$0.openBlock(), require$$0.createElementBlock(require$$0.Fragment, {
        key: 1
      }, [require$$0.createCommentVNode(" Si type es string, usar la misma lógica que las columnas "), customFilter.type == 'boolean' ? (require$$0.openBlock(), require$$0.createElementBlock("div", _hoisted_24$1, [require$$0.createElementVNode("label", null, require$$0.toDisplayString(customFilter.label), 1 /* TEXT */), require$$0.withDirectives(require$$0.createElementVNode("select", {
        class: "form-control",
        "onUpdate:modelValue": function onUpdateModelValue($event) {
          return $options.getFilterForColumn(customFilter).value = $event;
        },
        onChange: _cache[6] || (_cache[6] = function ($event) {
          return $options.onChangeFilter($event);
        })
      }, _toConsumableArray$1(_cache[17] || (_cache[17] = [require$$0.createElementVNode("option", {
        value: ""
      }, null, -1 /* CACHED */), require$$0.createElementVNode("option", {
        value: "1"
      }, "Sí", -1 /* CACHED */), require$$0.createElementVNode("option", {
        value: "0"
      }, "No", -1 /* CACHED */)])), 40 /* PROPS, NEED_HYDRATION */, _hoisted_25), [[require$$0.vModelSelect, $options.getFilterForColumn(customFilter).value]])])) : customFilter.type == 'date' ? (require$$0.openBlock(), require$$0.createElementBlock("div", _hoisted_26, [require$$0.createElementVNode("label", null, require$$0.toDisplayString(customFilter.label), 1 /* TEXT */), require$$0.createElementVNode("div", _hoisted_27, [require$$0.createElementVNode("div", _hoisted_28, [require$$0.createVNode(_component_b_form_datepicker, {
        modelValue: $options.getFilterForDateFrom(customFilter).value,
        "onUpdate:modelValue": function onUpdateModelValue($event) {
          return $options.getFilterForDateFrom(customFilter).value = $event;
        },
        "today-button": "",
        "reset-button": "",
        "close-button": "",
        locale: "es"
      }, null, 8 /* PROPS */, ["modelValue", "onUpdate:modelValue"])]), require$$0.createElementVNode("div", _hoisted_29, [require$$0.createVNode(_component_b_form_datepicker, {
        modelValue: $options.getFilterForDateTo(customFilter).value,
        "onUpdate:modelValue": function onUpdateModelValue($event) {
          return $options.getFilterForDateTo(customFilter).value = $event;
        },
        "today-button": "",
        "reset-button": "",
        "close-button": "",
        locale: "es"
      }, null, 8 /* PROPS */, ["modelValue", "onUpdate:modelValue"])])])])) : customFilter.type == 'number' || customFilter.type == 'money' ? (require$$0.openBlock(), require$$0.createElementBlock("div", _hoisted_30, [require$$0.createElementVNode("label", null, require$$0.toDisplayString(customFilter.label), 1 /* TEXT */), require$$0.createElementVNode("div", _hoisted_31, [require$$0.createElementVNode("div", _hoisted_32, [require$$0.withDirectives(require$$0.createElementVNode("input", {
        type: "number",
        class: "form-control",
        "onUpdate:modelValue": function onUpdateModelValue($event) {
          return $options.getFilterForDateFrom(customFilter).value = $event;
        },
        step: customFilter.type == 'money' ? '0.01' : '1',
        onChange: _cache[7] || (_cache[7] = function ($event) {
          return $options.onChangeFilter($event);
        }),
        placeholder: "Desde"
      }, null, 40 /* PROPS, NEED_HYDRATION */, _hoisted_33), [[require$$0.vModelText, $options.getFilterForDateFrom(customFilter).value, void 0, {
        number: true
      }]])]), require$$0.createElementVNode("div", _hoisted_34, [require$$0.withDirectives(require$$0.createElementVNode("input", {
        type: "number",
        class: "form-control",
        "onUpdate:modelValue": function onUpdateModelValue($event) {
          return $options.getFilterForDateTo(customFilter).value = $event;
        },
        step: customFilter.type == 'money' ? '0.01' : '1',
        onChange: _cache[8] || (_cache[8] = function ($event) {
          return $options.onChangeFilter($event);
        }),
        placeholder: "Hasta"
      }, null, 40 /* PROPS, NEED_HYDRATION */, _hoisted_35), [[require$$0.vModelText, $options.getFilterForDateTo(customFilter).value, void 0, {
        number: true
      }]])])])])) : customFilter.type == 'state' ? (require$$0.openBlock(), require$$0.createElementBlock("div", _hoisted_36, [require$$0.createElementVNode("label", null, require$$0.toDisplayString(customFilter.label), 1 /* TEXT */), customFilter.options && Array.isArray(customFilter.options) ? require$$0.withDirectives((require$$0.openBlock(), require$$0.createElementBlock("select", {
        key: 0,
        class: "form-control",
        "onUpdate:modelValue": function onUpdateModelValue($event) {
          return $options.getFilterForColumn(customFilter).value = $event;
        },
        onChange: _cache[9] || (_cache[9] = function ($event) {
          return $options.onChangeFilter($event);
        })
      }, [_cache[18] || (_cache[18] = require$$0.createElementVNode("option", {
        value: ""
      }, null, -1 /* CACHED */)), (require$$0.openBlock(true), require$$0.createElementBlock(require$$0.Fragment, null, require$$0.renderList(customFilter.options, function (option) {
        return require$$0.openBlock(), require$$0.createElementBlock("option", {
          value: option.value,
          key: option.value || option.id
        }, require$$0.toDisplayString(option.text), 9 /* TEXT, PROPS */, _hoisted_38);
      }), 128 /* KEYED_FRAGMENT */))], 40 /* PROPS, NEED_HYDRATION */, _hoisted_37)), [[require$$0.vModelSelect, $options.getFilterForColumn(customFilter).value]]) : require$$0.createCommentVNode("v-if", true)])) : customFilter.type == 'array' ? (require$$0.openBlock(), require$$0.createElementBlock("div", _hoisted_39, [require$$0.createElementVNode("label", null, require$$0.toDisplayString(customFilter.label), 1 /* TEXT */), customFilter.options && Array.isArray(customFilter.options) ? require$$0.withDirectives((require$$0.openBlock(), require$$0.createElementBlock("select", {
        key: 0,
        class: "form-control",
        "onUpdate:modelValue": function onUpdateModelValue($event) {
          return $options.getFilterForColumn(customFilter).value = $event;
        },
        onChange: _cache[10] || (_cache[10] = function ($event) {
          return $options.onChangeFilter($event);
        })
      }, [_cache[19] || (_cache[19] = require$$0.createElementVNode("option", {
        value: ""
      }, null, -1 /* CACHED */)), (require$$0.openBlock(true), require$$0.createElementBlock(require$$0.Fragment, null, require$$0.renderList(customFilter.options, function (option) {
        return require$$0.openBlock(), require$$0.createElementBlock("option", {
          value: option.value,
          key: option.value || option.id
        }, require$$0.toDisplayString(option.text), 9 /* TEXT, PROPS */, _hoisted_41);
      }), 128 /* KEYED_FRAGMENT */))], 40 /* PROPS, NEED_HYDRATION */, _hoisted_40)), [[require$$0.vModelSelect, $options.getFilterForColumn(customFilter).value]]) : require$$0.createCommentVNode("v-if", true)])) : (require$$0.openBlock(), require$$0.createElementBlock("div", _hoisted_42, [require$$0.createElementVNode("label", null, require$$0.toDisplayString(customFilter.label), 1 /* TEXT */), require$$0.withDirectives(require$$0.createElementVNode("input", {
        class: "form-control",
        "onUpdate:modelValue": function onUpdateModelValue($event) {
          return $options.getFilterForColumn(customFilter).value = $event;
        },
        onChange: _cache[11] || (_cache[11] = function ($event) {
          return $options.onChangeFilter($event);
        })
      }, null, 40 /* PROPS, NEED_HYDRATION */, _hoisted_43), [[require$$0.vModelText, $options.getFilterForColumn(customFilter).value, void 0, {
        lazy: true
      }]])]))], 64 /* STABLE_FRAGMENT */))];
    })])) : require$$0.createCommentVNode("v-if", true)]);
  }), 128 /* KEYED_FRAGMENT */)), require$$0.createElementVNode("div", _hoisted_44, [require$$0.createElementVNode("button", {
    class: "btn btn-light",
    onClick: _cache[12] || (_cache[12] = function ($event) {
      return $options.resetFilters();
    })
  }, " Reset "), require$$0.createElementVNode("button", {
    class: "btn btn-info",
    onClick: _cache[13] || (_cache[13] = function ($event) {
      return $options.onChangeFilter($event);
    })
  }, " Filtrar ")])]);
}
var CrudFilters = /*#__PURE__*/_export_sfc(_sfc_main$f, [['render', _sfc_render$f]]);var e=[],t=[];function n(n,r){if(n&&"undefined"!=typeof document){var a,s=!0===r.prepend?"prepend":"append",d=!0===r.singleTag,i="string"==typeof r.container?document.querySelector(r.container):document.getElementsByTagName("head")[0];if(d){var u=e.indexOf(i);-1===u&&(u=e.push(i)-1,t[u]={}),a=t[u]&&t[u][s]?t[u][s]:t[u][s]=c();}else a=c();65279===n.charCodeAt(0)&&(n=n.substring(1)),a.styleSheet?a.styleSheet.cssText+=n:a.appendChild(document.createTextNode(n));}function c(){var e=document.createElement("style");if(e.setAttribute("type","text/css"),r.attributes)for(var t=Object.keys(r.attributes),n=0;n<t.length;n++)e.setAttribute(t[n],r.attributes[t[n]]);var a="prepend"===s?"afterbegin":"beforeend";return i.insertAdjacentElement(a,e),e}}var css$9 = "\n.crud-header[data-v-b1534978] {\r\n  display: flex;\r\n  justify-content: space-between;\r\n  max-height: 3rem;\n}\n.crud-title[data-v-b1534978] {\r\n  margin: 0;\n}\n.crud-search[data-v-b1534978] {\r\n  max-width: 15rem;\n}\n.crud-search .btn[data-v-b1534978] {\r\n  border-top-left-radius: 0;\r\n  border-bottom-left-radius: 0;\r\n  border-top-right-radius: 0.375rem;\r\n  border-bottom-right-radius: 0.375rem;\n}\n.crud-search .btn.open[data-v-b1534978] {\r\n  border-top-right-radius: 0;\r\n  border-bottom-right-radius: 0;\n}\n.table-options[data-v-b1534978] {\r\n  margin-bottom: 1rem;\r\n  display: flex;\r\n  align-items: center;\r\n  justify-content: flex-end;\n}\r\n";
n(css$9, {});var _sfc_main$e = {
  name: 'CrudHeader',
  components: {
    CrudFilters: CrudFilters
  },
  inject: ['bootstrapFactory', 'showHeader', 'showTitle', 'title', 'filterSidebarOpen', 'showImport', 'showExport', 'showPrincipalSortBtn', 'principalSort', 'bulkDelete', 'showCreateBtn', 'enableFilters', 'displayModeToggler', 'displayMode', 'displayModes', 'showSearch', 'displaySearch', 'search', 'searchPlaceholder', 'loading', 'messageImport', 'messageExport', 'messageNew', 'createItem', 'toggleDisplayMode', 'togglePrincipalSort', 'confirmBulkDelete', 'toggleFilters', 'refresh', 'showImportModal', 'showExportModal'],
  computed: {
    sidebarVisible: function sidebarVisible() {
      if (this.filterSidebarOpen && this.filterSidebarOpen.value !== undefined) {
        return !!this.filterSidebarOpen.value;
      }
      return !!(this.$parent && this.$parent.filterSidebarOpen);
    },
    currentDisplayMode: function currentDisplayMode() {
      if (!this.displayMode) return 1;
      if (this.displayMode.value !== undefined) {
        return this.displayMode.value;
      }
      if (typeof this.displayMode === 'function') {
        return this.displayMode();
      }
      return this.displayMode;
    },
    // Computed property para manejar loading como objeto reactivo o booleano
    loadingValue: function loadingValue() {
      return this.loading && this.loading.value !== undefined ? this.loading.value : this.loading;
    }
  },
  methods: {
    closeSidebar: function closeSidebar() {
      // Usar el estado vivo (reactive provide o padre), no el booleano estático del inject
      if (this.sidebarVisible) {
        this.toggleFilters();
      }
    }
  }
};
var _hoisted_1$e = {
  key: 0,
  class: "crud-header"
};
var _hoisted_2$a = {
  key: 0,
  class: "crud-title"
};
var _hoisted_3$a = {
  class: "table-options"
};
var _hoisted_4$9 = {
  key: 7,
  class: "crud-search m-0"
};
function _sfc_render$e(_ctx, _cache, $props, $setup, $data, $options) {
  var _component_CrudFilters = require$$0.resolveComponent("CrudFilters");
  var _component_b_sidebar = require$$0.resolveComponent("b-sidebar");
  var _component_b_icon_cloud_upload = require$$0.resolveComponent("b-icon-cloud-upload");
  var _component_b_button = require$$0.resolveComponent("b-button");
  var _component_b_icon_cloud_download = require$$0.resolveComponent("b-icon-cloud-download");
  var _component_b_icon_sort_numeric_down = require$$0.resolveComponent("b-icon-sort-numeric-down");
  var _component_b_icon_sort_numeric_up = require$$0.resolveComponent("b-icon-sort-numeric-up");
  var _component_b_icon_trash = require$$0.resolveComponent("b-icon-trash");
  var _component_b_icon_plus = require$$0.resolveComponent("b-icon-plus");
  var _component_b_icon_arrow_clockwise = require$$0.resolveComponent("b-icon-arrow-clockwise");
  var _component_b_icon_card_list = require$$0.resolveComponent("b-icon-card-list");
  var _component_b_icon_table = require$$0.resolveComponent("b-icon-table");
  var _component_b_icon_search = require$$0.resolveComponent("b-icon-search");
  var _component_b_input_group_prepend = require$$0.resolveComponent("b-input-group-prepend");
  var _component_b_form_input = require$$0.resolveComponent("b-form-input");
  var _component_b_input_group = require$$0.resolveComponent("b-input-group");
  var _component_b_button_group = require$$0.resolveComponent("b-button-group");
  return $options.showHeader ? (require$$0.openBlock(), require$$0.createElementBlock("div", _hoisted_1$e, [$options.showTitle ? (require$$0.openBlock(), require$$0.createElementBlock("h4", _hoisted_2$a, require$$0.toDisplayString($options.title), 1 /* TEXT */)) : require$$0.createCommentVNode("v-if", true), require$$0.createVNode(_component_b_sidebar, {
    id: "crud-filters-sidebar",
    visible: $options.sidebarVisible,
    onHidden: $options.closeSidebar,
    title: "Filtrar",
    right: "",
    shadow: ""
  }, {
    default: require$$0.withCtx(function () {
      return [require$$0.createVNode(_component_CrudFilters)];
    }),
    _: 1 /* STABLE */
  }, 8 /* PROPS */, ["visible", "onHidden"]), require$$0.createElementVNode("div", _hoisted_3$a, [require$$0.createVNode(_component_b_button_group, {
    class: "mr-1"
  }, {
    default: require$$0.withCtx(function () {
      return [require$$0.renderSlot(_ctx.$slots, "tableActions", {
        createItem: $options.createItem,
        toggleDisplayMode: $options.toggleDisplayMode,
        loading: $options.loading
      }, function () {
        return [require$$0.renderSlot(_ctx.$slots, "tableActionsPrepend", {
          loading: $options.loading
        }, undefined, true), $options.showImport ? (require$$0.openBlock(), require$$0.createBlock(_component_b_button, {
          key: 0,
          variant: "info",
          onClick: _cache[0] || (_cache[0] = function ($event) {
            return $options.showImportModal();
          })
        }, {
          default: require$$0.withCtx(function () {
            return [require$$0.createVNode(_component_b_icon_cloud_upload), require$$0.createTextVNode(require$$0.toDisplayString($options.messageImport), 1 /* TEXT */)];
          }),
          _: 1 /* STABLE */
        })) : require$$0.createCommentVNode("v-if", true), $options.showExport ? (require$$0.openBlock(), require$$0.createBlock(_component_b_button, {
          key: 1,
          variant: "info",
          onClick: _cache[1] || (_cache[1] = function ($event) {
            return $options.showExportModal();
          })
        }, {
          default: require$$0.withCtx(function () {
            return [require$$0.createVNode(_component_b_icon_cloud_download), require$$0.createTextVNode(require$$0.toDisplayString($options.messageExport), 1 /* TEXT */)];
          }),
          _: 1 /* STABLE */
        })) : require$$0.createCommentVNode("v-if", true), $options.showPrincipalSortBtn ? (require$$0.openBlock(), require$$0.createBlock(_component_b_button, {
          key: 2,
          variant: "info",
          onClick: _cache[2] || (_cache[2] = function ($event) {
            return $options.togglePrincipalSort();
          }),
          disabled: $options.loadingValue
        }, {
          default: require$$0.withCtx(function () {
            return [$options.principalSort ? (require$$0.openBlock(), require$$0.createBlock(_component_b_icon_sort_numeric_down, {
              key: 0
            })) : (require$$0.openBlock(), require$$0.createBlock(_component_b_icon_sort_numeric_up, {
              key: 1
            }))];
          }),
          _: 1 /* STABLE */
        }, 8 /* PROPS */, ["disabled"])) : require$$0.createCommentVNode("v-if", true), $options.bulkDelete ? (require$$0.openBlock(), require$$0.createBlock(_component_b_button, {
          key: 3,
          variant: "danger",
          onClick: _cache[3] || (_cache[3] = function ($event) {
            return $options.confirmBulkDelete();
          })
        }, {
          default: require$$0.withCtx(function () {
            return [require$$0.createVNode(_component_b_icon_trash)];
          }),
          _: 1 /* STABLE */
        })) : require$$0.createCommentVNode("v-if", true), $options.showCreateBtn ? (require$$0.openBlock(), require$$0.createBlock(_component_b_button, {
          key: 4,
          variant: "success",
          onClick: _cache[4] || (_cache[4] = function ($event) {
            return $options.createItem();
          }),
          disabled: $options.loadingValue
        }, {
          default: require$$0.withCtx(function () {
            return [require$$0.createVNode(_component_b_icon_plus), require$$0.createTextVNode(require$$0.toDisplayString($options.messageNew), 1 /* TEXT */)];
          }),
          _: 1 /* STABLE */
        }, 8 /* PROPS */, ["disabled"])) : require$$0.createCommentVNode("v-if", true), $options.enableFilters ? (require$$0.openBlock(), require$$0.createBlock(_component_b_button, {
          key: 5,
          variant: "info",
          onClick: _cache[5] || (_cache[5] = function ($event) {
            return $options.toggleFilters();
          })
        }, {
          default: require$$0.withCtx(function () {
            return _toConsumableArray$1(_cache[10] || (_cache[10] = [require$$0.createTextVNode("Filtros", -1 /* CACHED */)]));
          }),
          _: 1 /* STABLE */
        })) : require$$0.createCommentVNode("v-if", true), require$$0.createVNode(_component_b_button, {
          variant: "info",
          onClick: _cache[6] || (_cache[6] = function ($event) {
            return $options.refresh();
          })
        }, {
          default: require$$0.withCtx(function () {
            return [require$$0.createVNode(_component_b_icon_arrow_clockwise)];
          }),
          _: 1 /* STABLE */
        }), $options.displayModeToggler ? (require$$0.openBlock(), require$$0.createBlock(_component_b_button, {
          key: 6,
          variant: "info",
          onClick: _cache[7] || (_cache[7] = function ($event) {
            return $options.toggleDisplayMode();
          }),
          disabled: $options.loadingValue
        }, {
          default: require$$0.withCtx(function () {
            return [$options.currentDisplayMode == $options.displayModes.MODE_TABLE ? (require$$0.openBlock(), require$$0.createBlock(_component_b_icon_card_list, {
              key: 0
            })) : $options.currentDisplayMode == $options.displayModes.MODE_CARDS ? (require$$0.openBlock(), require$$0.createBlock(_component_b_icon_table, {
              key: 1
            })) : require$$0.createCommentVNode("v-if", true)];
          }),
          _: 1 /* STABLE */
        }, 8 /* PROPS */, ["disabled"])) : require$$0.createCommentVNode("v-if", true), $options.showSearch ? (require$$0.openBlock(), require$$0.createElementBlock("div", _hoisted_4$9, [require$$0.createVNode(_component_b_input_group, null, {
          default: require$$0.withCtx(function () {
            return [require$$0.createVNode(_component_b_input_group_prepend, null, {
              default: require$$0.withCtx(function () {
                return [require$$0.createVNode(_component_b_button, {
                  variant: "info",
                  onClick: _cache[8] || (_cache[8] = function ($event) {
                    return $options.displaySearch = !$options.displaySearch;
                  }),
                  class: require$$0.normalizeClass({
                    open: $options.displaySearch
                  })
                }, {
                  default: require$$0.withCtx(function () {
                    return [require$$0.createVNode(_component_b_icon_search)];
                  }),
                  _: 1 /* STABLE */
                }, 8 /* PROPS */, ["class"])];
              }),
              _: 1 /* STABLE */
            }), $options.displaySearch ? (require$$0.openBlock(), require$$0.createBlock(_component_b_form_input, {
              key: 0,
              modelValue: $options.search,
              "onUpdate:modelValue": _cache[9] || (_cache[9] = function ($event) {
                return $options.search = $event;
              }),
              class: "pl-2",
              type: "search",
              required: "",
              placeholder: $options.searchPlaceholder,
              debounce: "500"
            }, null, 8 /* PROPS */, ["modelValue", "placeholder"])) : require$$0.createCommentVNode("v-if", true)];
          }),
          _: 1 /* STABLE */
        }), require$$0.renderSlot(_ctx.$slots, "tableActionsAppend", {
          loading: $options.loading
        }, undefined, true)])) : require$$0.createCommentVNode("v-if", true)];
      }, true)];
    }),
    _: 3 /* FORWARDED */
  })])])) : require$$0.createCommentVNode("v-if", true);
}
var CrudHeader = /*#__PURE__*/_export_sfc(_sfc_main$e, [['render', _sfc_render$e], ['__scopeId', "data-v-b1534978"]]);var commonjsGlobal = typeof globalThis !== 'undefined' ? globalThis : typeof window !== 'undefined' ? window : typeof global !== 'undefined' ? global : typeof self !== 'undefined' ? self : {};

function getDefaultExportFromCjs (x) {
	return x && x.__esModule && Object.prototype.hasOwnProperty.call(x, 'default') ? x['default'] : x;
}

function getAugmentedNamespace(n) {
  if (n.__esModule) return n;
  var f = n.default;
	if (typeof f == "function") {
		var a = function a () {
			if (this instanceof a) {
				var args = [null];
				args.push.apply(args, arguments);
				var Ctor = Function.bind.apply(f, args);
				return new Ctor();
			}
			return f.apply(this, arguments);
		};
		a.prototype = f.prototype;
  } else a = {};
  Object.defineProperty(a, '__esModule', {value: true});
	Object.keys(n).forEach(function (k) {
		var d = Object.getOwnPropertyDescriptor(n, k);
		Object.defineProperty(a, k, d.get ? d : {
			enumerable: true,
			get: function () {
				return n[k];
			}
		});
	});
	return a;
}var vuedraggable_umd = {exports: {}};/**!
 * Sortable 1.14.0
 * @author	RubaXa   <trash@rubaxa.org>
 * @author	owenm    <owen23355@gmail.com>
 * @license MIT
 */
function ownKeys(object, enumerableOnly) {
  var keys = Object.keys(object);

  if (Object.getOwnPropertySymbols) {
    var symbols = Object.getOwnPropertySymbols(object);

    if (enumerableOnly) {
      symbols = symbols.filter(function (sym) {
        return Object.getOwnPropertyDescriptor(object, sym).enumerable;
      });
    }

    keys.push.apply(keys, symbols);
  }

  return keys;
}

function _objectSpread2(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i] != null ? arguments[i] : {};

    if (i % 2) {
      ownKeys(Object(source), true).forEach(function (key) {
        _defineProperty(target, key, source[key]);
      });
    } else if (Object.getOwnPropertyDescriptors) {
      Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));
    } else {
      ownKeys(Object(source)).forEach(function (key) {
        Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
      });
    }
  }

  return target;
}

function _typeof(obj) {
  "@babel/helpers - typeof";

  if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
    _typeof = function (obj) {
      return typeof obj;
    };
  } else {
    _typeof = function (obj) {
      return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
    };
  }

  return _typeof(obj);
}

function _defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
}

function _extends() {
  _extends = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  return _extends.apply(this, arguments);
}

function _objectWithoutPropertiesLoose(source, excluded) {
  if (source == null) return {};
  var target = {};
  var sourceKeys = Object.keys(source);
  var key, i;

  for (i = 0; i < sourceKeys.length; i++) {
    key = sourceKeys[i];
    if (excluded.indexOf(key) >= 0) continue;
    target[key] = source[key];
  }

  return target;
}

function _objectWithoutProperties(source, excluded) {
  if (source == null) return {};

  var target = _objectWithoutPropertiesLoose(source, excluded);

  var key, i;

  if (Object.getOwnPropertySymbols) {
    var sourceSymbolKeys = Object.getOwnPropertySymbols(source);

    for (i = 0; i < sourceSymbolKeys.length; i++) {
      key = sourceSymbolKeys[i];
      if (excluded.indexOf(key) >= 0) continue;
      if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue;
      target[key] = source[key];
    }
  }

  return target;
}

function _toConsumableArray(arr) {
  return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread();
}

function _arrayWithoutHoles(arr) {
  if (Array.isArray(arr)) return _arrayLikeToArray(arr);
}

function _iterableToArray(iter) {
  if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter);
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

function _nonIterableSpread() {
  throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}

var version$1 = "1.14.0";

function userAgent(pattern) {
  if (typeof window !== 'undefined' && window.navigator) {
    return !! /*@__PURE__*/navigator.userAgent.match(pattern);
  }
}

var IE11OrLess = userAgent(/(?:Trident.*rv[ :]?11\.|msie|iemobile|Windows Phone)/i);
var Edge = userAgent(/Edge/i);
var FireFox = userAgent(/firefox/i);
var Safari = userAgent(/safari/i) && !userAgent(/chrome/i) && !userAgent(/android/i);
var IOS = userAgent(/iP(ad|od|hone)/i);
var ChromeForAndroid = userAgent(/chrome/i) && userAgent(/android/i);

var captureMode = {
  capture: false,
  passive: false
};

function on$1(el, event, fn) {
  el.addEventListener(event, fn, !IE11OrLess && captureMode);
}

function off$1(el, event, fn) {
  el.removeEventListener(event, fn, !IE11OrLess && captureMode);
}

function matches(
/**HTMLElement*/
el,
/**String*/
selector) {
  if (!selector) return;
  selector[0] === '>' && (selector = selector.substring(1));

  if (el) {
    try {
      if (el.matches) {
        return el.matches(selector);
      } else if (el.msMatchesSelector) {
        return el.msMatchesSelector(selector);
      } else if (el.webkitMatchesSelector) {
        return el.webkitMatchesSelector(selector);
      }
    } catch (_) {
      return false;
    }
  }

  return false;
}

function getParentOrHost(el) {
  return el.host && el !== document && el.host.nodeType ? el.host : el.parentNode;
}

function closest(
/**HTMLElement*/
el,
/**String*/
selector,
/**HTMLElement*/
ctx, includeCTX) {
  if (el) {
    ctx = ctx || document;

    do {
      if (selector != null && (selector[0] === '>' ? el.parentNode === ctx && matches(el, selector) : matches(el, selector)) || includeCTX && el === ctx) {
        return el;
      }

      if (el === ctx) break;
      /* jshint boss:true */
    } while (el = getParentOrHost(el));
  }

  return null;
}

var R_SPACE = /\s+/g;

function toggleClass(el, name, state) {
  if (el && name) {
    if (el.classList) {
      el.classList[state ? 'add' : 'remove'](name);
    } else {
      var className = (' ' + el.className + ' ').replace(R_SPACE, ' ').replace(' ' + name + ' ', ' ');
      el.className = (className + (state ? ' ' + name : '')).replace(R_SPACE, ' ');
    }
  }
}

function css$8(el, prop, val) {
  var style = el && el.style;

  if (style) {
    if (val === void 0) {
      if (document.defaultView && document.defaultView.getComputedStyle) {
        val = document.defaultView.getComputedStyle(el, '');
      } else if (el.currentStyle) {
        val = el.currentStyle;
      }

      return prop === void 0 ? val : val[prop];
    } else {
      if (!(prop in style) && prop.indexOf('webkit') === -1) {
        prop = '-webkit-' + prop;
      }

      style[prop] = val + (typeof val === 'string' ? '' : 'px');
    }
  }
}

function matrix(el, selfOnly) {
  var appliedTransforms = '';

  if (typeof el === 'string') {
    appliedTransforms = el;
  } else {
    do {
      var transform = css$8(el, 'transform');

      if (transform && transform !== 'none') {
        appliedTransforms = transform + ' ' + appliedTransforms;
      }
      /* jshint boss:true */

    } while (!selfOnly && (el = el.parentNode));
  }

  var matrixFn = window.DOMMatrix || window.WebKitCSSMatrix || window.CSSMatrix || window.MSCSSMatrix;
  /*jshint -W056 */

  return matrixFn && new matrixFn(appliedTransforms);
}

function find(ctx, tagName, iterator) {
  if (ctx) {
    var list = ctx.getElementsByTagName(tagName),
        i = 0,
        n = list.length;

    if (iterator) {
      for (; i < n; i++) {
        iterator(list[i], i);
      }
    }

    return list;
  }

  return [];
}

function getWindowScrollingElement() {
  var scrollingElement = document.scrollingElement;

  if (scrollingElement) {
    return scrollingElement;
  } else {
    return document.documentElement;
  }
}
/**
 * Returns the "bounding client rect" of given element
 * @param  {HTMLElement} el                       The element whose boundingClientRect is wanted
 * @param  {[Boolean]} relativeToContainingBlock  Whether the rect should be relative to the containing block of (including) the container
 * @param  {[Boolean]} relativeToNonStaticParent  Whether the rect should be relative to the relative parent of (including) the contaienr
 * @param  {[Boolean]} undoScale                  Whether the container's scale() should be undone
 * @param  {[HTMLElement]} container              The parent the element will be placed in
 * @return {Object}                               The boundingClientRect of el, with specified adjustments
 */


function getRect(el, relativeToContainingBlock, relativeToNonStaticParent, undoScale, container) {
  if (!el.getBoundingClientRect && el !== window) return;
  var elRect, top, left, bottom, right, height, width;

  if (el !== window && el.parentNode && el !== getWindowScrollingElement()) {
    elRect = el.getBoundingClientRect();
    top = elRect.top;
    left = elRect.left;
    bottom = elRect.bottom;
    right = elRect.right;
    height = elRect.height;
    width = elRect.width;
  } else {
    top = 0;
    left = 0;
    bottom = window.innerHeight;
    right = window.innerWidth;
    height = window.innerHeight;
    width = window.innerWidth;
  }

  if ((relativeToContainingBlock || relativeToNonStaticParent) && el !== window) {
    // Adjust for translate()
    container = container || el.parentNode; // solves #1123 (see: https://stackoverflow.com/a/37953806/6088312)
    // Not needed on <= IE11

    if (!IE11OrLess) {
      do {
        if (container && container.getBoundingClientRect && (css$8(container, 'transform') !== 'none' || relativeToNonStaticParent && css$8(container, 'position') !== 'static')) {
          var containerRect = container.getBoundingClientRect(); // Set relative to edges of padding box of container

          top -= containerRect.top + parseInt(css$8(container, 'border-top-width'));
          left -= containerRect.left + parseInt(css$8(container, 'border-left-width'));
          bottom = top + elRect.height;
          right = left + elRect.width;
          break;
        }
        /* jshint boss:true */

      } while (container = container.parentNode);
    }
  }

  if (undoScale && el !== window) {
    // Adjust for scale()
    var elMatrix = matrix(container || el),
        scaleX = elMatrix && elMatrix.a,
        scaleY = elMatrix && elMatrix.d;

    if (elMatrix) {
      top /= scaleY;
      left /= scaleX;
      width /= scaleX;
      height /= scaleY;
      bottom = top + height;
      right = left + width;
    }
  }

  return {
    top: top,
    left: left,
    bottom: bottom,
    right: right,
    width: width,
    height: height
  };
}
/**
 * Checks if a side of an element is scrolled past a side of its parents
 * @param  {HTMLElement}  el           The element who's side being scrolled out of view is in question
 * @param  {String}       elSide       Side of the element in question ('top', 'left', 'right', 'bottom')
 * @param  {String}       parentSide   Side of the parent in question ('top', 'left', 'right', 'bottom')
 * @return {HTMLElement}               The parent scroll element that the el's side is scrolled past, or null if there is no such element
 */


function isScrolledPast(el, elSide, parentSide) {
  var parent = getParentAutoScrollElement(el, true),
      elSideVal = getRect(el)[elSide];
  /* jshint boss:true */

  while (parent) {
    var parentSideVal = getRect(parent)[parentSide],
        visible = void 0;

    if (parentSide === 'top' || parentSide === 'left') {
      visible = elSideVal >= parentSideVal;
    } else {
      visible = elSideVal <= parentSideVal;
    }

    if (!visible) return parent;
    if (parent === getWindowScrollingElement()) break;
    parent = getParentAutoScrollElement(parent, false);
  }

  return false;
}
/**
 * Gets nth child of el, ignoring hidden children, sortable's elements (does not ignore clone if it's visible)
 * and non-draggable elements
 * @param  {HTMLElement} el       The parent element
 * @param  {Number} childNum      The index of the child
 * @param  {Object} options       Parent Sortable's options
 * @return {HTMLElement}          The child at index childNum, or null if not found
 */


function getChild(el, childNum, options, includeDragEl) {
  var currentChild = 0,
      i = 0,
      children = el.children;

  while (i < children.length) {
    if (children[i].style.display !== 'none' && children[i] !== Sortable.ghost && (includeDragEl || children[i] !== Sortable.dragged) && closest(children[i], options.draggable, el, false)) {
      if (currentChild === childNum) {
        return children[i];
      }

      currentChild++;
    }

    i++;
  }

  return null;
}
/**
 * Gets the last child in the el, ignoring ghostEl or invisible elements (clones)
 * @param  {HTMLElement} el       Parent element
 * @param  {selector} selector    Any other elements that should be ignored
 * @return {HTMLElement}          The last child, ignoring ghostEl
 */


function lastChild(el, selector) {
  var last = el.lastElementChild;

  while (last && (last === Sortable.ghost || css$8(last, 'display') === 'none' || selector && !matches(last, selector))) {
    last = last.previousElementSibling;
  }

  return last || null;
}
/**
 * Returns the index of an element within its parent for a selected set of
 * elements
 * @param  {HTMLElement} el
 * @param  {selector} selector
 * @return {number}
 */


function index(el, selector) {
  var index = 0;

  if (!el || !el.parentNode) {
    return -1;
  }
  /* jshint boss:true */


  while (el = el.previousElementSibling) {
    if (el.nodeName.toUpperCase() !== 'TEMPLATE' && el !== Sortable.clone && (!selector || matches(el, selector))) {
      index++;
    }
  }

  return index;
}
/**
 * Returns the scroll offset of the given element, added with all the scroll offsets of parent elements.
 * The value is returned in real pixels.
 * @param  {HTMLElement} el
 * @return {Array}             Offsets in the format of [left, top]
 */


function getRelativeScrollOffset(el) {
  var offsetLeft = 0,
      offsetTop = 0,
      winScroller = getWindowScrollingElement();

  if (el) {
    do {
      var elMatrix = matrix(el),
          scaleX = elMatrix.a,
          scaleY = elMatrix.d;
      offsetLeft += el.scrollLeft * scaleX;
      offsetTop += el.scrollTop * scaleY;
    } while (el !== winScroller && (el = el.parentNode));
  }

  return [offsetLeft, offsetTop];
}
/**
 * Returns the index of the object within the given array
 * @param  {Array} arr   Array that may or may not hold the object
 * @param  {Object} obj  An object that has a key-value pair unique to and identical to a key-value pair in the object you want to find
 * @return {Number}      The index of the object in the array, or -1
 */


function indexOfObject(arr, obj) {
  for (var i in arr) {
    if (!arr.hasOwnProperty(i)) continue;

    for (var key in obj) {
      if (obj.hasOwnProperty(key) && obj[key] === arr[i][key]) return Number(i);
    }
  }

  return -1;
}

function getParentAutoScrollElement(el, includeSelf) {
  // skip to window
  if (!el || !el.getBoundingClientRect) return getWindowScrollingElement();
  var elem = el;
  var gotSelf = false;

  do {
    // we don't need to get elem css if it isn't even overflowing in the first place (performance)
    if (elem.clientWidth < elem.scrollWidth || elem.clientHeight < elem.scrollHeight) {
      var elemCSS = css$8(elem);

      if (elem.clientWidth < elem.scrollWidth && (elemCSS.overflowX == 'auto' || elemCSS.overflowX == 'scroll') || elem.clientHeight < elem.scrollHeight && (elemCSS.overflowY == 'auto' || elemCSS.overflowY == 'scroll')) {
        if (!elem.getBoundingClientRect || elem === document.body) return getWindowScrollingElement();
        if (gotSelf || includeSelf) return elem;
        gotSelf = true;
      }
    }
    /* jshint boss:true */

  } while (elem = elem.parentNode);

  return getWindowScrollingElement();
}

function extend$1(dst, src) {
  if (dst && src) {
    for (var key in src) {
      if (src.hasOwnProperty(key)) {
        dst[key] = src[key];
      }
    }
  }

  return dst;
}

function isRectEqual(rect1, rect2) {
  return Math.round(rect1.top) === Math.round(rect2.top) && Math.round(rect1.left) === Math.round(rect2.left) && Math.round(rect1.height) === Math.round(rect2.height) && Math.round(rect1.width) === Math.round(rect2.width);
}

var _throttleTimeout;

function throttle$1(callback, ms) {
  return function () {
    if (!_throttleTimeout) {
      var args = arguments,
          _this = this;

      if (args.length === 1) {
        callback.call(_this, args[0]);
      } else {
        callback.apply(_this, args);
      }

      _throttleTimeout = setTimeout(function () {
        _throttleTimeout = void 0;
      }, ms);
    }
  };
}

function cancelThrottle() {
  clearTimeout(_throttleTimeout);
  _throttleTimeout = void 0;
}

function scrollBy(el, x, y) {
  el.scrollLeft += x;
  el.scrollTop += y;
}

function clone(el) {
  var Polymer = window.Polymer;
  var $ = window.jQuery || window.Zepto;

  if (Polymer && Polymer.dom) {
    return Polymer.dom(el).cloneNode(true);
  } else if ($) {
    return $(el).clone(true)[0];
  } else {
    return el.cloneNode(true);
  }
}

function setRect(el, rect) {
  css$8(el, 'position', 'absolute');
  css$8(el, 'top', rect.top);
  css$8(el, 'left', rect.left);
  css$8(el, 'width', rect.width);
  css$8(el, 'height', rect.height);
}

function unsetRect(el) {
  css$8(el, 'position', '');
  css$8(el, 'top', '');
  css$8(el, 'left', '');
  css$8(el, 'width', '');
  css$8(el, 'height', '');
}

var expando = 'Sortable' + new Date().getTime();

function AnimationStateManager() {
  var animationStates = [],
      animationCallbackId;
  return {
    captureAnimationState: function captureAnimationState() {
      animationStates = [];
      if (!this.options.animation) return;
      var children = [].slice.call(this.el.children);
      children.forEach(function (child) {
        if (css$8(child, 'display') === 'none' || child === Sortable.ghost) return;
        animationStates.push({
          target: child,
          rect: getRect(child)
        });

        var fromRect = _objectSpread2({}, animationStates[animationStates.length - 1].rect); // If animating: compensate for current animation


        if (child.thisAnimationDuration) {
          var childMatrix = matrix(child, true);

          if (childMatrix) {
            fromRect.top -= childMatrix.f;
            fromRect.left -= childMatrix.e;
          }
        }

        child.fromRect = fromRect;
      });
    },
    addAnimationState: function addAnimationState(state) {
      animationStates.push(state);
    },
    removeAnimationState: function removeAnimationState(target) {
      animationStates.splice(indexOfObject(animationStates, {
        target: target
      }), 1);
    },
    animateAll: function animateAll(callback) {
      var _this = this;

      if (!this.options.animation) {
        clearTimeout(animationCallbackId);
        if (typeof callback === 'function') callback();
        return;
      }

      var animating = false,
          animationTime = 0;
      animationStates.forEach(function (state) {
        var time = 0,
            target = state.target,
            fromRect = target.fromRect,
            toRect = getRect(target),
            prevFromRect = target.prevFromRect,
            prevToRect = target.prevToRect,
            animatingRect = state.rect,
            targetMatrix = matrix(target, true);

        if (targetMatrix) {
          // Compensate for current animation
          toRect.top -= targetMatrix.f;
          toRect.left -= targetMatrix.e;
        }

        target.toRect = toRect;

        if (target.thisAnimationDuration) {
          // Could also check if animatingRect is between fromRect and toRect
          if (isRectEqual(prevFromRect, toRect) && !isRectEqual(fromRect, toRect) && // Make sure animatingRect is on line between toRect & fromRect
          (animatingRect.top - toRect.top) / (animatingRect.left - toRect.left) === (fromRect.top - toRect.top) / (fromRect.left - toRect.left)) {
            // If returning to same place as started from animation and on same axis
            time = calculateRealTime(animatingRect, prevFromRect, prevToRect, _this.options);
          }
        } // if fromRect != toRect: animate


        if (!isRectEqual(toRect, fromRect)) {
          target.prevFromRect = fromRect;
          target.prevToRect = toRect;

          if (!time) {
            time = _this.options.animation;
          }

          _this.animate(target, animatingRect, toRect, time);
        }

        if (time) {
          animating = true;
          animationTime = Math.max(animationTime, time);
          clearTimeout(target.animationResetTimer);
          target.animationResetTimer = setTimeout(function () {
            target.animationTime = 0;
            target.prevFromRect = null;
            target.fromRect = null;
            target.prevToRect = null;
            target.thisAnimationDuration = null;
          }, time);
          target.thisAnimationDuration = time;
        }
      });
      clearTimeout(animationCallbackId);

      if (!animating) {
        if (typeof callback === 'function') callback();
      } else {
        animationCallbackId = setTimeout(function () {
          if (typeof callback === 'function') callback();
        }, animationTime);
      }

      animationStates = [];
    },
    animate: function animate(target, currentRect, toRect, duration) {
      if (duration) {
        css$8(target, 'transition', '');
        css$8(target, 'transform', '');
        var elMatrix = matrix(this.el),
            scaleX = elMatrix && elMatrix.a,
            scaleY = elMatrix && elMatrix.d,
            translateX = (currentRect.left - toRect.left) / (scaleX || 1),
            translateY = (currentRect.top - toRect.top) / (scaleY || 1);
        target.animatingX = !!translateX;
        target.animatingY = !!translateY;
        css$8(target, 'transform', 'translate3d(' + translateX + 'px,' + translateY + 'px,0)');
        this.forRepaintDummy = repaint(target); // repaint

        css$8(target, 'transition', 'transform ' + duration + 'ms' + (this.options.easing ? ' ' + this.options.easing : ''));
        css$8(target, 'transform', 'translate3d(0,0,0)');
        typeof target.animated === 'number' && clearTimeout(target.animated);
        target.animated = setTimeout(function () {
          css$8(target, 'transition', '');
          css$8(target, 'transform', '');
          target.animated = false;
          target.animatingX = false;
          target.animatingY = false;
        }, duration);
      }
    }
  };
}

function repaint(target) {
  return target.offsetWidth;
}

function calculateRealTime(animatingRect, fromRect, toRect, options) {
  return Math.sqrt(Math.pow(fromRect.top - animatingRect.top, 2) + Math.pow(fromRect.left - animatingRect.left, 2)) / Math.sqrt(Math.pow(fromRect.top - toRect.top, 2) + Math.pow(fromRect.left - toRect.left, 2)) * options.animation;
}

var plugins = [];
var defaults$1 = {
  initializeByDefault: true
};
var PluginManager = {
  mount: function mount(plugin) {
    // Set default static properties
    for (var option in defaults$1) {
      if (defaults$1.hasOwnProperty(option) && !(option in plugin)) {
        plugin[option] = defaults$1[option];
      }
    }

    plugins.forEach(function (p) {
      if (p.pluginName === plugin.pluginName) {
        throw "Sortable: Cannot mount plugin ".concat(plugin.pluginName, " more than once");
      }
    });
    plugins.push(plugin);
  },
  pluginEvent: function pluginEvent(eventName, sortable, evt) {
    var _this = this;

    this.eventCanceled = false;

    evt.cancel = function () {
      _this.eventCanceled = true;
    };

    var eventNameGlobal = eventName + 'Global';
    plugins.forEach(function (plugin) {
      if (!sortable[plugin.pluginName]) return; // Fire global events if it exists in this sortable

      if (sortable[plugin.pluginName][eventNameGlobal]) {
        sortable[plugin.pluginName][eventNameGlobal](_objectSpread2({
          sortable: sortable
        }, evt));
      } // Only fire plugin event if plugin is enabled in this sortable,
      // and plugin has event defined


      if (sortable.options[plugin.pluginName] && sortable[plugin.pluginName][eventName]) {
        sortable[plugin.pluginName][eventName](_objectSpread2({
          sortable: sortable
        }, evt));
      }
    });
  },
  initializePlugins: function initializePlugins(sortable, el, defaults, options) {
    plugins.forEach(function (plugin) {
      var pluginName = plugin.pluginName;
      if (!sortable.options[pluginName] && !plugin.initializeByDefault) return;
      var initialized = new plugin(sortable, el, sortable.options);
      initialized.sortable = sortable;
      initialized.options = sortable.options;
      sortable[pluginName] = initialized; // Add default options from plugin

      _extends(defaults, initialized.defaults);
    });

    for (var option in sortable.options) {
      if (!sortable.options.hasOwnProperty(option)) continue;
      var modified = this.modifyOption(sortable, option, sortable.options[option]);

      if (typeof modified !== 'undefined') {
        sortable.options[option] = modified;
      }
    }
  },
  getEventProperties: function getEventProperties(name, sortable) {
    var eventProperties = {};
    plugins.forEach(function (plugin) {
      if (typeof plugin.eventProperties !== 'function') return;

      _extends(eventProperties, plugin.eventProperties.call(sortable[plugin.pluginName], name));
    });
    return eventProperties;
  },
  modifyOption: function modifyOption(sortable, name, value) {
    var modifiedValue;
    plugins.forEach(function (plugin) {
      // Plugin must exist on the Sortable
      if (!sortable[plugin.pluginName]) return; // If static option listener exists for this option, call in the context of the Sortable's instance of this plugin

      if (plugin.optionListeners && typeof plugin.optionListeners[name] === 'function') {
        modifiedValue = plugin.optionListeners[name].call(sortable[plugin.pluginName], value);
      }
    });
    return modifiedValue;
  }
};

function dispatchEvent(_ref) {
  var sortable = _ref.sortable,
      rootEl = _ref.rootEl,
      name = _ref.name,
      targetEl = _ref.targetEl,
      cloneEl = _ref.cloneEl,
      toEl = _ref.toEl,
      fromEl = _ref.fromEl,
      oldIndex = _ref.oldIndex,
      newIndex = _ref.newIndex,
      oldDraggableIndex = _ref.oldDraggableIndex,
      newDraggableIndex = _ref.newDraggableIndex,
      originalEvent = _ref.originalEvent,
      putSortable = _ref.putSortable,
      extraEventProperties = _ref.extraEventProperties;
  sortable = sortable || rootEl && rootEl[expando];
  if (!sortable) return;
  var evt,
      options = sortable.options,
      onName = 'on' + name.charAt(0).toUpperCase() + name.substr(1); // Support for new CustomEvent feature

  if (window.CustomEvent && !IE11OrLess && !Edge) {
    evt = new CustomEvent(name, {
      bubbles: true,
      cancelable: true
    });
  } else {
    evt = document.createEvent('Event');
    evt.initEvent(name, true, true);
  }

  evt.to = toEl || rootEl;
  evt.from = fromEl || rootEl;
  evt.item = targetEl || rootEl;
  evt.clone = cloneEl;
  evt.oldIndex = oldIndex;
  evt.newIndex = newIndex;
  evt.oldDraggableIndex = oldDraggableIndex;
  evt.newDraggableIndex = newDraggableIndex;
  evt.originalEvent = originalEvent;
  evt.pullMode = putSortable ? putSortable.lastPutMode : undefined;

  var allEventProperties = _objectSpread2(_objectSpread2({}, extraEventProperties), PluginManager.getEventProperties(name, sortable));

  for (var option in allEventProperties) {
    evt[option] = allEventProperties[option];
  }

  if (rootEl) {
    rootEl.dispatchEvent(evt);
  }

  if (options[onName]) {
    options[onName].call(sortable, evt);
  }
}

var _excluded = ["evt"];

var pluginEvent = function pluginEvent(eventName, sortable) {
  var _ref = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {},
      originalEvent = _ref.evt,
      data = _objectWithoutProperties(_ref, _excluded);

  PluginManager.pluginEvent.bind(Sortable)(eventName, sortable, _objectSpread2({
    dragEl: dragEl,
    parentEl: parentEl,
    ghostEl: ghostEl,
    rootEl: rootEl,
    nextEl: nextEl,
    lastDownEl: lastDownEl,
    cloneEl: cloneEl,
    cloneHidden: cloneHidden,
    dragStarted: moved,
    putSortable: putSortable,
    activeSortable: Sortable.active,
    originalEvent: originalEvent,
    oldIndex: oldIndex,
    oldDraggableIndex: oldDraggableIndex,
    newIndex: newIndex,
    newDraggableIndex: newDraggableIndex,
    hideGhostForTarget: _hideGhostForTarget,
    unhideGhostForTarget: _unhideGhostForTarget,
    cloneNowHidden: function cloneNowHidden() {
      cloneHidden = true;
    },
    cloneNowShown: function cloneNowShown() {
      cloneHidden = false;
    },
    dispatchSortableEvent: function dispatchSortableEvent(name) {
      _dispatchEvent({
        sortable: sortable,
        name: name,
        originalEvent: originalEvent
      });
    }
  }, data));
};

function _dispatchEvent(info) {
  dispatchEvent(_objectSpread2({
    putSortable: putSortable,
    cloneEl: cloneEl,
    targetEl: dragEl,
    rootEl: rootEl,
    oldIndex: oldIndex,
    oldDraggableIndex: oldDraggableIndex,
    newIndex: newIndex,
    newDraggableIndex: newDraggableIndex
  }, info));
}

var dragEl,
    parentEl,
    ghostEl,
    rootEl,
    nextEl,
    lastDownEl,
    cloneEl,
    cloneHidden,
    oldIndex,
    newIndex,
    oldDraggableIndex,
    newDraggableIndex,
    activeGroup,
    putSortable,
    awaitingDragStarted = false,
    ignoreNextClick = false,
    sortables = [],
    tapEvt,
    touchEvt,
    lastDx,
    lastDy,
    tapDistanceLeft,
    tapDistanceTop,
    moved,
    lastTarget,
    lastDirection,
    pastFirstInvertThresh = false,
    isCircumstantialInvert = false,
    targetMoveDistance,
    // For positioning ghost absolutely
ghostRelativeParent,
    ghostRelativeParentInitialScroll = [],
    // (left, top)
_silent = false,
    savedInputChecked = [];
/** @const */

var documentExists = typeof document !== 'undefined',
    PositionGhostAbsolutely = IOS,
    CSSFloatProperty = Edge || IE11OrLess ? 'cssFloat' : 'float',
    // This will not pass for IE9, because IE9 DnD only works on anchors
supportDraggable = documentExists && !ChromeForAndroid && !IOS && 'draggable' in document.createElement('div'),
    supportCssPointerEvents = function () {
  if (!documentExists) return; // false when <= IE11

  if (IE11OrLess) {
    return false;
  }

  var el = document.createElement('x');
  el.style.cssText = 'pointer-events:auto';
  return el.style.pointerEvents === 'auto';
}(),
    _detectDirection = function _detectDirection(el, options) {
  var elCSS = css$8(el),
      elWidth = parseInt(elCSS.width) - parseInt(elCSS.paddingLeft) - parseInt(elCSS.paddingRight) - parseInt(elCSS.borderLeftWidth) - parseInt(elCSS.borderRightWidth),
      child1 = getChild(el, 0, options),
      child2 = getChild(el, 1, options),
      firstChildCSS = child1 && css$8(child1),
      secondChildCSS = child2 && css$8(child2),
      firstChildWidth = firstChildCSS && parseInt(firstChildCSS.marginLeft) + parseInt(firstChildCSS.marginRight) + getRect(child1).width,
      secondChildWidth = secondChildCSS && parseInt(secondChildCSS.marginLeft) + parseInt(secondChildCSS.marginRight) + getRect(child2).width;

  if (elCSS.display === 'flex') {
    return elCSS.flexDirection === 'column' || elCSS.flexDirection === 'column-reverse' ? 'vertical' : 'horizontal';
  }

  if (elCSS.display === 'grid') {
    return elCSS.gridTemplateColumns.split(' ').length <= 1 ? 'vertical' : 'horizontal';
  }

  if (child1 && firstChildCSS["float"] && firstChildCSS["float"] !== 'none') {
    var touchingSideChild2 = firstChildCSS["float"] === 'left' ? 'left' : 'right';
    return child2 && (secondChildCSS.clear === 'both' || secondChildCSS.clear === touchingSideChild2) ? 'vertical' : 'horizontal';
  }

  return child1 && (firstChildCSS.display === 'block' || firstChildCSS.display === 'flex' || firstChildCSS.display === 'table' || firstChildCSS.display === 'grid' || firstChildWidth >= elWidth && elCSS[CSSFloatProperty] === 'none' || child2 && elCSS[CSSFloatProperty] === 'none' && firstChildWidth + secondChildWidth > elWidth) ? 'vertical' : 'horizontal';
},
    _dragElInRowColumn = function _dragElInRowColumn(dragRect, targetRect, vertical) {
  var dragElS1Opp = vertical ? dragRect.left : dragRect.top,
      dragElS2Opp = vertical ? dragRect.right : dragRect.bottom,
      dragElOppLength = vertical ? dragRect.width : dragRect.height,
      targetS1Opp = vertical ? targetRect.left : targetRect.top,
      targetS2Opp = vertical ? targetRect.right : targetRect.bottom,
      targetOppLength = vertical ? targetRect.width : targetRect.height;
  return dragElS1Opp === targetS1Opp || dragElS2Opp === targetS2Opp || dragElS1Opp + dragElOppLength / 2 === targetS1Opp + targetOppLength / 2;
},

/**
 * Detects first nearest empty sortable to X and Y position using emptyInsertThreshold.
 * @param  {Number} x      X position
 * @param  {Number} y      Y position
 * @return {HTMLElement}   Element of the first found nearest Sortable
 */
_detectNearestEmptySortable = function _detectNearestEmptySortable(x, y) {
  var ret;
  sortables.some(function (sortable) {
    var threshold = sortable[expando].options.emptyInsertThreshold;
    if (!threshold || lastChild(sortable)) return;
    var rect = getRect(sortable),
        insideHorizontally = x >= rect.left - threshold && x <= rect.right + threshold,
        insideVertically = y >= rect.top - threshold && y <= rect.bottom + threshold;

    if (insideHorizontally && insideVertically) {
      return ret = sortable;
    }
  });
  return ret;
},
    _prepareGroup = function _prepareGroup(options) {
  function toFn(value, pull) {
    return function (to, from, dragEl, evt) {
      var sameGroup = to.options.group.name && from.options.group.name && to.options.group.name === from.options.group.name;

      if (value == null && (pull || sameGroup)) {
        // Default pull value
        // Default pull and put value if same group
        return true;
      } else if (value == null || value === false) {
        return false;
      } else if (pull && value === 'clone') {
        return value;
      } else if (typeof value === 'function') {
        return toFn(value(to, from, dragEl, evt), pull)(to, from, dragEl, evt);
      } else {
        var otherGroup = (pull ? to : from).options.group.name;
        return value === true || typeof value === 'string' && value === otherGroup || value.join && value.indexOf(otherGroup) > -1;
      }
    };
  }

  var group = {};
  var originalGroup = options.group;

  if (!originalGroup || _typeof(originalGroup) != 'object') {
    originalGroup = {
      name: originalGroup
    };
  }

  group.name = originalGroup.name;
  group.checkPull = toFn(originalGroup.pull, true);
  group.checkPut = toFn(originalGroup.put);
  group.revertClone = originalGroup.revertClone;
  options.group = group;
},
    _hideGhostForTarget = function _hideGhostForTarget() {
  if (!supportCssPointerEvents && ghostEl) {
    css$8(ghostEl, 'display', 'none');
  }
},
    _unhideGhostForTarget = function _unhideGhostForTarget() {
  if (!supportCssPointerEvents && ghostEl) {
    css$8(ghostEl, 'display', '');
  }
}; // #1184 fix - Prevent click event on fallback if dragged but item not changed position


if (documentExists) {
  document.addEventListener('click', function (evt) {
    if (ignoreNextClick) {
      evt.preventDefault();
      evt.stopPropagation && evt.stopPropagation();
      evt.stopImmediatePropagation && evt.stopImmediatePropagation();
      ignoreNextClick = false;
      return false;
    }
  }, true);
}

var nearestEmptyInsertDetectEvent = function nearestEmptyInsertDetectEvent(evt) {
  if (dragEl) {
    evt = evt.touches ? evt.touches[0] : evt;

    var nearest = _detectNearestEmptySortable(evt.clientX, evt.clientY);

    if (nearest) {
      // Create imitation event
      var event = {};

      for (var i in evt) {
        if (evt.hasOwnProperty(i)) {
          event[i] = evt[i];
        }
      }

      event.target = event.rootEl = nearest;
      event.preventDefault = void 0;
      event.stopPropagation = void 0;

      nearest[expando]._onDragOver(event);
    }
  }
};

var _checkOutsideTargetEl = function _checkOutsideTargetEl(evt) {
  if (dragEl) {
    dragEl.parentNode[expando]._isOutsideThisEl(evt.target);
  }
};
/**
 * @class  Sortable
 * @param  {HTMLElement}  el
 * @param  {Object}       [options]
 */


function Sortable(el, options) {
  if (!(el && el.nodeType && el.nodeType === 1)) {
    throw "Sortable: `el` must be an HTMLElement, not ".concat({}.toString.call(el));
  }

  this.el = el; // root element

  this.options = options = _extends({}, options); // Export instance

  el[expando] = this;
  var defaults = {
    group: null,
    sort: true,
    disabled: false,
    store: null,
    handle: null,
    draggable: /^[uo]l$/i.test(el.nodeName) ? '>li' : '>*',
    swapThreshold: 1,
    // percentage; 0 <= x <= 1
    invertSwap: false,
    // invert always
    invertedSwapThreshold: null,
    // will be set to same as swapThreshold if default
    removeCloneOnHide: true,
    direction: function direction() {
      return _detectDirection(el, this.options);
    },
    ghostClass: 'sortable-ghost',
    chosenClass: 'sortable-chosen',
    dragClass: 'sortable-drag',
    ignore: 'a, img',
    filter: null,
    preventOnFilter: true,
    animation: 0,
    easing: null,
    setData: function setData(dataTransfer, dragEl) {
      dataTransfer.setData('Text', dragEl.textContent);
    },
    dropBubble: false,
    dragoverBubble: false,
    dataIdAttr: 'data-id',
    delay: 0,
    delayOnTouchOnly: false,
    touchStartThreshold: (Number.parseInt ? Number : window).parseInt(window.devicePixelRatio, 10) || 1,
    forceFallback: false,
    fallbackClass: 'sortable-fallback',
    fallbackOnBody: false,
    fallbackTolerance: 0,
    fallbackOffset: {
      x: 0,
      y: 0
    },
    supportPointer: Sortable.supportPointer !== false && 'PointerEvent' in window && !Safari,
    emptyInsertThreshold: 5
  };
  PluginManager.initializePlugins(this, el, defaults); // Set default options

  for (var name in defaults) {
    !(name in options) && (options[name] = defaults[name]);
  }

  _prepareGroup(options); // Bind all private methods


  for (var fn in this) {
    if (fn.charAt(0) === '_' && typeof this[fn] === 'function') {
      this[fn] = this[fn].bind(this);
    }
  } // Setup drag mode


  this.nativeDraggable = options.forceFallback ? false : supportDraggable;

  if (this.nativeDraggable) {
    // Touch start threshold cannot be greater than the native dragstart threshold
    this.options.touchStartThreshold = 1;
  } // Bind events


  if (options.supportPointer) {
    on$1(el, 'pointerdown', this._onTapStart);
  } else {
    on$1(el, 'mousedown', this._onTapStart);
    on$1(el, 'touchstart', this._onTapStart);
  }

  if (this.nativeDraggable) {
    on$1(el, 'dragover', this);
    on$1(el, 'dragenter', this);
  }

  sortables.push(this.el); // Restore sorting

  options.store && options.store.get && this.sort(options.store.get(this) || []); // Add animation state manager

  _extends(this, AnimationStateManager());
}

Sortable.prototype =
/** @lends Sortable.prototype */
{
  constructor: Sortable,
  _isOutsideThisEl: function _isOutsideThisEl(target) {
    if (!this.el.contains(target) && target !== this.el) {
      lastTarget = null;
    }
  },
  _getDirection: function _getDirection(evt, target) {
    return typeof this.options.direction === 'function' ? this.options.direction.call(this, evt, target, dragEl) : this.options.direction;
  },
  _onTapStart: function _onTapStart(
  /** Event|TouchEvent */
  evt) {
    if (!evt.cancelable) return;

    var _this = this,
        el = this.el,
        options = this.options,
        preventOnFilter = options.preventOnFilter,
        type = evt.type,
        touch = evt.touches && evt.touches[0] || evt.pointerType && evt.pointerType === 'touch' && evt,
        target = (touch || evt).target,
        originalTarget = evt.target.shadowRoot && (evt.path && evt.path[0] || evt.composedPath && evt.composedPath()[0]) || target,
        filter = options.filter;

    _saveInputCheckedState(el); // Don't trigger start event when an element is been dragged, otherwise the evt.oldindex always wrong when set option.group.


    if (dragEl) {
      return;
    }

    if (/mousedown|pointerdown/.test(type) && evt.button !== 0 || options.disabled) {
      return; // only left button and enabled
    } // cancel dnd if original target is content editable


    if (originalTarget.isContentEditable) {
      return;
    } // Safari ignores further event handling after mousedown


    if (!this.nativeDraggable && Safari && target && target.tagName.toUpperCase() === 'SELECT') {
      return;
    }

    target = closest(target, options.draggable, el, false);

    if (target && target.animated) {
      return;
    }

    if (lastDownEl === target) {
      // Ignoring duplicate `down`
      return;
    } // Get the index of the dragged element within its parent


    oldIndex = index(target);
    oldDraggableIndex = index(target, options.draggable); // Check filter

    if (typeof filter === 'function') {
      if (filter.call(this, evt, target, this)) {
        _dispatchEvent({
          sortable: _this,
          rootEl: originalTarget,
          name: 'filter',
          targetEl: target,
          toEl: el,
          fromEl: el
        });

        pluginEvent('filter', _this, {
          evt: evt
        });
        preventOnFilter && evt.cancelable && evt.preventDefault();
        return; // cancel dnd
      }
    } else if (filter) {
      filter = filter.split(',').some(function (criteria) {
        criteria = closest(originalTarget, criteria.trim(), el, false);

        if (criteria) {
          _dispatchEvent({
            sortable: _this,
            rootEl: criteria,
            name: 'filter',
            targetEl: target,
            fromEl: el,
            toEl: el
          });

          pluginEvent('filter', _this, {
            evt: evt
          });
          return true;
        }
      });

      if (filter) {
        preventOnFilter && evt.cancelable && evt.preventDefault();
        return; // cancel dnd
      }
    }

    if (options.handle && !closest(originalTarget, options.handle, el, false)) {
      return;
    } // Prepare `dragstart`


    this._prepareDragStart(evt, touch, target);
  },
  _prepareDragStart: function _prepareDragStart(
  /** Event */
  evt,
  /** Touch */
  touch,
  /** HTMLElement */
  target) {
    var _this = this,
        el = _this.el,
        options = _this.options,
        ownerDocument = el.ownerDocument,
        dragStartFn;

    if (target && !dragEl && target.parentNode === el) {
      var dragRect = getRect(target);
      rootEl = el;
      dragEl = target;
      parentEl = dragEl.parentNode;
      nextEl = dragEl.nextSibling;
      lastDownEl = target;
      activeGroup = options.group;
      Sortable.dragged = dragEl;
      tapEvt = {
        target: dragEl,
        clientX: (touch || evt).clientX,
        clientY: (touch || evt).clientY
      };
      tapDistanceLeft = tapEvt.clientX - dragRect.left;
      tapDistanceTop = tapEvt.clientY - dragRect.top;
      this._lastX = (touch || evt).clientX;
      this._lastY = (touch || evt).clientY;
      dragEl.style['will-change'] = 'all';

      dragStartFn = function dragStartFn() {
        pluginEvent('delayEnded', _this, {
          evt: evt
        });

        if (Sortable.eventCanceled) {
          _this._onDrop();

          return;
        } // Delayed drag has been triggered
        // we can re-enable the events: touchmove/mousemove


        _this._disableDelayedDragEvents();

        if (!FireFox && _this.nativeDraggable) {
          dragEl.draggable = true;
        } // Bind the events: dragstart/dragend


        _this._triggerDragStart(evt, touch); // Drag start event


        _dispatchEvent({
          sortable: _this,
          name: 'choose',
          originalEvent: evt
        }); // Chosen item


        toggleClass(dragEl, options.chosenClass, true);
      }; // Disable "draggable"


      options.ignore.split(',').forEach(function (criteria) {
        find(dragEl, criteria.trim(), _disableDraggable);
      });
      on$1(ownerDocument, 'dragover', nearestEmptyInsertDetectEvent);
      on$1(ownerDocument, 'mousemove', nearestEmptyInsertDetectEvent);
      on$1(ownerDocument, 'touchmove', nearestEmptyInsertDetectEvent);
      on$1(ownerDocument, 'mouseup', _this._onDrop);
      on$1(ownerDocument, 'touchend', _this._onDrop);
      on$1(ownerDocument, 'touchcancel', _this._onDrop); // Make dragEl draggable (must be before delay for FireFox)

      if (FireFox && this.nativeDraggable) {
        this.options.touchStartThreshold = 4;
        dragEl.draggable = true;
      }

      pluginEvent('delayStart', this, {
        evt: evt
      }); // Delay is impossible for native DnD in Edge or IE

      if (options.delay && (!options.delayOnTouchOnly || touch) && (!this.nativeDraggable || !(Edge || IE11OrLess))) {
        if (Sortable.eventCanceled) {
          this._onDrop();

          return;
        } // If the user moves the pointer or let go the click or touch
        // before the delay has been reached:
        // disable the delayed drag


        on$1(ownerDocument, 'mouseup', _this._disableDelayedDrag);
        on$1(ownerDocument, 'touchend', _this._disableDelayedDrag);
        on$1(ownerDocument, 'touchcancel', _this._disableDelayedDrag);
        on$1(ownerDocument, 'mousemove', _this._delayedDragTouchMoveHandler);
        on$1(ownerDocument, 'touchmove', _this._delayedDragTouchMoveHandler);
        options.supportPointer && on$1(ownerDocument, 'pointermove', _this._delayedDragTouchMoveHandler);
        _this._dragStartTimer = setTimeout(dragStartFn, options.delay);
      } else {
        dragStartFn();
      }
    }
  },
  _delayedDragTouchMoveHandler: function _delayedDragTouchMoveHandler(
  /** TouchEvent|PointerEvent **/
  e) {
    var touch = e.touches ? e.touches[0] : e;

    if (Math.max(Math.abs(touch.clientX - this._lastX), Math.abs(touch.clientY - this._lastY)) >= Math.floor(this.options.touchStartThreshold / (this.nativeDraggable && window.devicePixelRatio || 1))) {
      this._disableDelayedDrag();
    }
  },
  _disableDelayedDrag: function _disableDelayedDrag() {
    dragEl && _disableDraggable(dragEl);
    clearTimeout(this._dragStartTimer);

    this._disableDelayedDragEvents();
  },
  _disableDelayedDragEvents: function _disableDelayedDragEvents() {
    var ownerDocument = this.el.ownerDocument;
    off$1(ownerDocument, 'mouseup', this._disableDelayedDrag);
    off$1(ownerDocument, 'touchend', this._disableDelayedDrag);
    off$1(ownerDocument, 'touchcancel', this._disableDelayedDrag);
    off$1(ownerDocument, 'mousemove', this._delayedDragTouchMoveHandler);
    off$1(ownerDocument, 'touchmove', this._delayedDragTouchMoveHandler);
    off$1(ownerDocument, 'pointermove', this._delayedDragTouchMoveHandler);
  },
  _triggerDragStart: function _triggerDragStart(
  /** Event */
  evt,
  /** Touch */
  touch) {
    touch = touch || evt.pointerType == 'touch' && evt;

    if (!this.nativeDraggable || touch) {
      if (this.options.supportPointer) {
        on$1(document, 'pointermove', this._onTouchMove);
      } else if (touch) {
        on$1(document, 'touchmove', this._onTouchMove);
      } else {
        on$1(document, 'mousemove', this._onTouchMove);
      }
    } else {
      on$1(dragEl, 'dragend', this);
      on$1(rootEl, 'dragstart', this._onDragStart);
    }

    try {
      if (document.selection) {
        // Timeout neccessary for IE9
        _nextTick(function () {
          document.selection.empty();
        });
      } else {
        window.getSelection().removeAllRanges();
      }
    } catch (err) {}
  },
  _dragStarted: function _dragStarted(fallback, evt) {

    awaitingDragStarted = false;

    if (rootEl && dragEl) {
      pluginEvent('dragStarted', this, {
        evt: evt
      });

      if (this.nativeDraggable) {
        on$1(document, 'dragover', _checkOutsideTargetEl);
      }

      var options = this.options; // Apply effect

      !fallback && toggleClass(dragEl, options.dragClass, false);
      toggleClass(dragEl, options.ghostClass, true);
      Sortable.active = this;
      fallback && this._appendGhost(); // Drag start event

      _dispatchEvent({
        sortable: this,
        name: 'start',
        originalEvent: evt
      });
    } else {
      this._nulling();
    }
  },
  _emulateDragOver: function _emulateDragOver() {
    if (touchEvt) {
      this._lastX = touchEvt.clientX;
      this._lastY = touchEvt.clientY;

      _hideGhostForTarget();

      var target = document.elementFromPoint(touchEvt.clientX, touchEvt.clientY);
      var parent = target;

      while (target && target.shadowRoot) {
        target = target.shadowRoot.elementFromPoint(touchEvt.clientX, touchEvt.clientY);
        if (target === parent) break;
        parent = target;
      }

      dragEl.parentNode[expando]._isOutsideThisEl(target);

      if (parent) {
        do {
          if (parent[expando]) {
            var inserted = void 0;
            inserted = parent[expando]._onDragOver({
              clientX: touchEvt.clientX,
              clientY: touchEvt.clientY,
              target: target,
              rootEl: parent
            });

            if (inserted && !this.options.dragoverBubble) {
              break;
            }
          }

          target = parent; // store last element
        }
        /* jshint boss:true */
        while (parent = parent.parentNode);
      }

      _unhideGhostForTarget();
    }
  },
  _onTouchMove: function _onTouchMove(
  /**TouchEvent*/
  evt) {
    if (tapEvt) {
      var options = this.options,
          fallbackTolerance = options.fallbackTolerance,
          fallbackOffset = options.fallbackOffset,
          touch = evt.touches ? evt.touches[0] : evt,
          ghostMatrix = ghostEl && matrix(ghostEl, true),
          scaleX = ghostEl && ghostMatrix && ghostMatrix.a,
          scaleY = ghostEl && ghostMatrix && ghostMatrix.d,
          relativeScrollOffset = PositionGhostAbsolutely && ghostRelativeParent && getRelativeScrollOffset(ghostRelativeParent),
          dx = (touch.clientX - tapEvt.clientX + fallbackOffset.x) / (scaleX || 1) + (relativeScrollOffset ? relativeScrollOffset[0] - ghostRelativeParentInitialScroll[0] : 0) / (scaleX || 1),
          dy = (touch.clientY - tapEvt.clientY + fallbackOffset.y) / (scaleY || 1) + (relativeScrollOffset ? relativeScrollOffset[1] - ghostRelativeParentInitialScroll[1] : 0) / (scaleY || 1); // only set the status to dragging, when we are actually dragging

      if (!Sortable.active && !awaitingDragStarted) {
        if (fallbackTolerance && Math.max(Math.abs(touch.clientX - this._lastX), Math.abs(touch.clientY - this._lastY)) < fallbackTolerance) {
          return;
        }

        this._onDragStart(evt, true);
      }

      if (ghostEl) {
        if (ghostMatrix) {
          ghostMatrix.e += dx - (lastDx || 0);
          ghostMatrix.f += dy - (lastDy || 0);
        } else {
          ghostMatrix = {
            a: 1,
            b: 0,
            c: 0,
            d: 1,
            e: dx,
            f: dy
          };
        }

        var cssMatrix = "matrix(".concat(ghostMatrix.a, ",").concat(ghostMatrix.b, ",").concat(ghostMatrix.c, ",").concat(ghostMatrix.d, ",").concat(ghostMatrix.e, ",").concat(ghostMatrix.f, ")");
        css$8(ghostEl, 'webkitTransform', cssMatrix);
        css$8(ghostEl, 'mozTransform', cssMatrix);
        css$8(ghostEl, 'msTransform', cssMatrix);
        css$8(ghostEl, 'transform', cssMatrix);
        lastDx = dx;
        lastDy = dy;
        touchEvt = touch;
      }

      evt.cancelable && evt.preventDefault();
    }
  },
  _appendGhost: function _appendGhost() {
    // Bug if using scale(): https://stackoverflow.com/questions/2637058
    // Not being adjusted for
    if (!ghostEl) {
      var container = this.options.fallbackOnBody ? document.body : rootEl,
          rect = getRect(dragEl, true, PositionGhostAbsolutely, true, container),
          options = this.options; // Position absolutely

      if (PositionGhostAbsolutely) {
        // Get relatively positioned parent
        ghostRelativeParent = container;

        while (css$8(ghostRelativeParent, 'position') === 'static' && css$8(ghostRelativeParent, 'transform') === 'none' && ghostRelativeParent !== document) {
          ghostRelativeParent = ghostRelativeParent.parentNode;
        }

        if (ghostRelativeParent !== document.body && ghostRelativeParent !== document.documentElement) {
          if (ghostRelativeParent === document) ghostRelativeParent = getWindowScrollingElement();
          rect.top += ghostRelativeParent.scrollTop;
          rect.left += ghostRelativeParent.scrollLeft;
        } else {
          ghostRelativeParent = getWindowScrollingElement();
        }

        ghostRelativeParentInitialScroll = getRelativeScrollOffset(ghostRelativeParent);
      }

      ghostEl = dragEl.cloneNode(true);
      toggleClass(ghostEl, options.ghostClass, false);
      toggleClass(ghostEl, options.fallbackClass, true);
      toggleClass(ghostEl, options.dragClass, true);
      css$8(ghostEl, 'transition', '');
      css$8(ghostEl, 'transform', '');
      css$8(ghostEl, 'box-sizing', 'border-box');
      css$8(ghostEl, 'margin', 0);
      css$8(ghostEl, 'top', rect.top);
      css$8(ghostEl, 'left', rect.left);
      css$8(ghostEl, 'width', rect.width);
      css$8(ghostEl, 'height', rect.height);
      css$8(ghostEl, 'opacity', '0.8');
      css$8(ghostEl, 'position', PositionGhostAbsolutely ? 'absolute' : 'fixed');
      css$8(ghostEl, 'zIndex', '100000');
      css$8(ghostEl, 'pointerEvents', 'none');
      Sortable.ghost = ghostEl;
      container.appendChild(ghostEl); // Set transform-origin

      css$8(ghostEl, 'transform-origin', tapDistanceLeft / parseInt(ghostEl.style.width) * 100 + '% ' + tapDistanceTop / parseInt(ghostEl.style.height) * 100 + '%');
    }
  },
  _onDragStart: function _onDragStart(
  /**Event*/
  evt,
  /**boolean*/
  fallback) {
    var _this = this;

    var dataTransfer = evt.dataTransfer;
    var options = _this.options;
    pluginEvent('dragStart', this, {
      evt: evt
    });

    if (Sortable.eventCanceled) {
      this._onDrop();

      return;
    }

    pluginEvent('setupClone', this);

    if (!Sortable.eventCanceled) {
      cloneEl = clone(dragEl);
      cloneEl.draggable = false;
      cloneEl.style['will-change'] = '';

      this._hideClone();

      toggleClass(cloneEl, this.options.chosenClass, false);
      Sortable.clone = cloneEl;
    } // #1143: IFrame support workaround


    _this.cloneId = _nextTick(function () {
      pluginEvent('clone', _this);
      if (Sortable.eventCanceled) return;

      if (!_this.options.removeCloneOnHide) {
        rootEl.insertBefore(cloneEl, dragEl);
      }

      _this._hideClone();

      _dispatchEvent({
        sortable: _this,
        name: 'clone'
      });
    });
    !fallback && toggleClass(dragEl, options.dragClass, true); // Set proper drop events

    if (fallback) {
      ignoreNextClick = true;
      _this._loopId = setInterval(_this._emulateDragOver, 50);
    } else {
      // Undo what was set in _prepareDragStart before drag started
      off$1(document, 'mouseup', _this._onDrop);
      off$1(document, 'touchend', _this._onDrop);
      off$1(document, 'touchcancel', _this._onDrop);

      if (dataTransfer) {
        dataTransfer.effectAllowed = 'move';
        options.setData && options.setData.call(_this, dataTransfer, dragEl);
      }

      on$1(document, 'drop', _this); // #1276 fix:

      css$8(dragEl, 'transform', 'translateZ(0)');
    }

    awaitingDragStarted = true;
    _this._dragStartId = _nextTick(_this._dragStarted.bind(_this, fallback, evt));
    on$1(document, 'selectstart', _this);
    moved = true;

    if (Safari) {
      css$8(document.body, 'user-select', 'none');
    }
  },
  // Returns true - if no further action is needed (either inserted or another condition)
  _onDragOver: function _onDragOver(
  /**Event*/
  evt) {
    var el = this.el,
        target = evt.target,
        dragRect,
        targetRect,
        revert,
        options = this.options,
        group = options.group,
        activeSortable = Sortable.active,
        isOwner = activeGroup === group,
        canSort = options.sort,
        fromSortable = putSortable || activeSortable,
        vertical,
        _this = this,
        completedFired = false;

    if (_silent) return;

    function dragOverEvent(name, extra) {
      pluginEvent(name, _this, _objectSpread2({
        evt: evt,
        isOwner: isOwner,
        axis: vertical ? 'vertical' : 'horizontal',
        revert: revert,
        dragRect: dragRect,
        targetRect: targetRect,
        canSort: canSort,
        fromSortable: fromSortable,
        target: target,
        completed: completed,
        onMove: function onMove(target, after) {
          return _onMove(rootEl, el, dragEl, dragRect, target, getRect(target), evt, after);
        },
        changed: changed
      }, extra));
    } // Capture animation state


    function capture() {
      dragOverEvent('dragOverAnimationCapture');

      _this.captureAnimationState();

      if (_this !== fromSortable) {
        fromSortable.captureAnimationState();
      }
    } // Return invocation when dragEl is inserted (or completed)


    function completed(insertion) {
      dragOverEvent('dragOverCompleted', {
        insertion: insertion
      });

      if (insertion) {
        // Clones must be hidden before folding animation to capture dragRectAbsolute properly
        if (isOwner) {
          activeSortable._hideClone();
        } else {
          activeSortable._showClone(_this);
        }

        if (_this !== fromSortable) {
          // Set ghost class to new sortable's ghost class
          toggleClass(dragEl, putSortable ? putSortable.options.ghostClass : activeSortable.options.ghostClass, false);
          toggleClass(dragEl, options.ghostClass, true);
        }

        if (putSortable !== _this && _this !== Sortable.active) {
          putSortable = _this;
        } else if (_this === Sortable.active && putSortable) {
          putSortable = null;
        } // Animation


        if (fromSortable === _this) {
          _this._ignoreWhileAnimating = target;
        }

        _this.animateAll(function () {
          dragOverEvent('dragOverAnimationComplete');
          _this._ignoreWhileAnimating = null;
        });

        if (_this !== fromSortable) {
          fromSortable.animateAll();
          fromSortable._ignoreWhileAnimating = null;
        }
      } // Null lastTarget if it is not inside a previously swapped element


      if (target === dragEl && !dragEl.animated || target === el && !target.animated) {
        lastTarget = null;
      } // no bubbling and not fallback


      if (!options.dragoverBubble && !evt.rootEl && target !== document) {
        dragEl.parentNode[expando]._isOutsideThisEl(evt.target); // Do not detect for empty insert if already inserted


        !insertion && nearestEmptyInsertDetectEvent(evt);
      }

      !options.dragoverBubble && evt.stopPropagation && evt.stopPropagation();
      return completedFired = true;
    } // Call when dragEl has been inserted


    function changed() {
      newIndex = index(dragEl);
      newDraggableIndex = index(dragEl, options.draggable);

      _dispatchEvent({
        sortable: _this,
        name: 'change',
        toEl: el,
        newIndex: newIndex,
        newDraggableIndex: newDraggableIndex,
        originalEvent: evt
      });
    }

    if (evt.preventDefault !== void 0) {
      evt.cancelable && evt.preventDefault();
    }

    target = closest(target, options.draggable, el, true);
    dragOverEvent('dragOver');
    if (Sortable.eventCanceled) return completedFired;

    if (dragEl.contains(evt.target) || target.animated && target.animatingX && target.animatingY || _this._ignoreWhileAnimating === target) {
      return completed(false);
    }

    ignoreNextClick = false;

    if (activeSortable && !options.disabled && (isOwner ? canSort || (revert = parentEl !== rootEl) // Reverting item into the original list
    : putSortable === this || (this.lastPutMode = activeGroup.checkPull(this, activeSortable, dragEl, evt)) && group.checkPut(this, activeSortable, dragEl, evt))) {
      vertical = this._getDirection(evt, target) === 'vertical';
      dragRect = getRect(dragEl);
      dragOverEvent('dragOverValid');
      if (Sortable.eventCanceled) return completedFired;

      if (revert) {
        parentEl = rootEl; // actualization

        capture();

        this._hideClone();

        dragOverEvent('revert');

        if (!Sortable.eventCanceled) {
          if (nextEl) {
            rootEl.insertBefore(dragEl, nextEl);
          } else {
            rootEl.appendChild(dragEl);
          }
        }

        return completed(true);
      }

      var elLastChild = lastChild(el, options.draggable);

      if (!elLastChild || _ghostIsLast(evt, vertical, this) && !elLastChild.animated) {
        // Insert to end of list
        // If already at end of list: Do not insert
        if (elLastChild === dragEl) {
          return completed(false);
        } // if there is a last element, it is the target


        if (elLastChild && el === evt.target) {
          target = elLastChild;
        }

        if (target) {
          targetRect = getRect(target);
        }

        if (_onMove(rootEl, el, dragEl, dragRect, target, targetRect, evt, !!target) !== false) {
          capture();
          el.appendChild(dragEl);
          parentEl = el; // actualization

          changed();
          return completed(true);
        }
      } else if (elLastChild && _ghostIsFirst(evt, vertical, this)) {
        // Insert to start of list
        var firstChild = getChild(el, 0, options, true);

        if (firstChild === dragEl) {
          return completed(false);
        }

        target = firstChild;
        targetRect = getRect(target);

        if (_onMove(rootEl, el, dragEl, dragRect, target, targetRect, evt, false) !== false) {
          capture();
          el.insertBefore(dragEl, firstChild);
          parentEl = el; // actualization

          changed();
          return completed(true);
        }
      } else if (target.parentNode === el) {
        targetRect = getRect(target);
        var direction = 0,
            targetBeforeFirstSwap,
            differentLevel = dragEl.parentNode !== el,
            differentRowCol = !_dragElInRowColumn(dragEl.animated && dragEl.toRect || dragRect, target.animated && target.toRect || targetRect, vertical),
            side1 = vertical ? 'top' : 'left',
            scrolledPastTop = isScrolledPast(target, 'top', 'top') || isScrolledPast(dragEl, 'top', 'top'),
            scrollBefore = scrolledPastTop ? scrolledPastTop.scrollTop : void 0;

        if (lastTarget !== target) {
          targetBeforeFirstSwap = targetRect[side1];
          pastFirstInvertThresh = false;
          isCircumstantialInvert = !differentRowCol && options.invertSwap || differentLevel;
        }

        direction = _getSwapDirection(evt, target, targetRect, vertical, differentRowCol ? 1 : options.swapThreshold, options.invertedSwapThreshold == null ? options.swapThreshold : options.invertedSwapThreshold, isCircumstantialInvert, lastTarget === target);
        var sibling;

        if (direction !== 0) {
          // Check if target is beside dragEl in respective direction (ignoring hidden elements)
          var dragIndex = index(dragEl);

          do {
            dragIndex -= direction;
            sibling = parentEl.children[dragIndex];
          } while (sibling && (css$8(sibling, 'display') === 'none' || sibling === ghostEl));
        } // If dragEl is already beside target: Do not insert


        if (direction === 0 || sibling === target) {
          return completed(false);
        }

        lastTarget = target;
        lastDirection = direction;
        var nextSibling = target.nextElementSibling,
            after = false;
        after = direction === 1;

        var moveVector = _onMove(rootEl, el, dragEl, dragRect, target, targetRect, evt, after);

        if (moveVector !== false) {
          if (moveVector === 1 || moveVector === -1) {
            after = moveVector === 1;
          }

          _silent = true;
          setTimeout(_unsilent, 30);
          capture();

          if (after && !nextSibling) {
            el.appendChild(dragEl);
          } else {
            target.parentNode.insertBefore(dragEl, after ? nextSibling : target);
          } // Undo chrome's scroll adjustment (has no effect on other browsers)


          if (scrolledPastTop) {
            scrollBy(scrolledPastTop, 0, scrollBefore - scrolledPastTop.scrollTop);
          }

          parentEl = dragEl.parentNode; // actualization
          // must be done before animation

          if (targetBeforeFirstSwap !== undefined && !isCircumstantialInvert) {
            targetMoveDistance = Math.abs(targetBeforeFirstSwap - getRect(target)[side1]);
          }

          changed();
          return completed(true);
        }
      }

      if (el.contains(dragEl)) {
        return completed(false);
      }
    }

    return false;
  },
  _ignoreWhileAnimating: null,
  _offMoveEvents: function _offMoveEvents() {
    off$1(document, 'mousemove', this._onTouchMove);
    off$1(document, 'touchmove', this._onTouchMove);
    off$1(document, 'pointermove', this._onTouchMove);
    off$1(document, 'dragover', nearestEmptyInsertDetectEvent);
    off$1(document, 'mousemove', nearestEmptyInsertDetectEvent);
    off$1(document, 'touchmove', nearestEmptyInsertDetectEvent);
  },
  _offUpEvents: function _offUpEvents() {
    var ownerDocument = this.el.ownerDocument;
    off$1(ownerDocument, 'mouseup', this._onDrop);
    off$1(ownerDocument, 'touchend', this._onDrop);
    off$1(ownerDocument, 'pointerup', this._onDrop);
    off$1(ownerDocument, 'touchcancel', this._onDrop);
    off$1(document, 'selectstart', this);
  },
  _onDrop: function _onDrop(
  /**Event*/
  evt) {
    var el = this.el,
        options = this.options; // Get the index of the dragged element within its parent

    newIndex = index(dragEl);
    newDraggableIndex = index(dragEl, options.draggable);
    pluginEvent('drop', this, {
      evt: evt
    });
    parentEl = dragEl && dragEl.parentNode; // Get again after plugin event

    newIndex = index(dragEl);
    newDraggableIndex = index(dragEl, options.draggable);

    if (Sortable.eventCanceled) {
      this._nulling();

      return;
    }

    awaitingDragStarted = false;
    isCircumstantialInvert = false;
    pastFirstInvertThresh = false;
    clearInterval(this._loopId);
    clearTimeout(this._dragStartTimer);

    _cancelNextTick(this.cloneId);

    _cancelNextTick(this._dragStartId); // Unbind events


    if (this.nativeDraggable) {
      off$1(document, 'drop', this);
      off$1(el, 'dragstart', this._onDragStart);
    }

    this._offMoveEvents();

    this._offUpEvents();

    if (Safari) {
      css$8(document.body, 'user-select', '');
    }

    css$8(dragEl, 'transform', '');

    if (evt) {
      if (moved) {
        evt.cancelable && evt.preventDefault();
        !options.dropBubble && evt.stopPropagation();
      }

      ghostEl && ghostEl.parentNode && ghostEl.parentNode.removeChild(ghostEl);

      if (rootEl === parentEl || putSortable && putSortable.lastPutMode !== 'clone') {
        // Remove clone(s)
        cloneEl && cloneEl.parentNode && cloneEl.parentNode.removeChild(cloneEl);
      }

      if (dragEl) {
        if (this.nativeDraggable) {
          off$1(dragEl, 'dragend', this);
        }

        _disableDraggable(dragEl);

        dragEl.style['will-change'] = ''; // Remove classes
        // ghostClass is added in dragStarted

        if (moved && !awaitingDragStarted) {
          toggleClass(dragEl, putSortable ? putSortable.options.ghostClass : this.options.ghostClass, false);
        }

        toggleClass(dragEl, this.options.chosenClass, false); // Drag stop event

        _dispatchEvent({
          sortable: this,
          name: 'unchoose',
          toEl: parentEl,
          newIndex: null,
          newDraggableIndex: null,
          originalEvent: evt
        });

        if (rootEl !== parentEl) {
          if (newIndex >= 0) {
            // Add event
            _dispatchEvent({
              rootEl: parentEl,
              name: 'add',
              toEl: parentEl,
              fromEl: rootEl,
              originalEvent: evt
            }); // Remove event


            _dispatchEvent({
              sortable: this,
              name: 'remove',
              toEl: parentEl,
              originalEvent: evt
            }); // drag from one list and drop into another


            _dispatchEvent({
              rootEl: parentEl,
              name: 'sort',
              toEl: parentEl,
              fromEl: rootEl,
              originalEvent: evt
            });

            _dispatchEvent({
              sortable: this,
              name: 'sort',
              toEl: parentEl,
              originalEvent: evt
            });
          }

          putSortable && putSortable.save();
        } else {
          if (newIndex !== oldIndex) {
            if (newIndex >= 0) {
              // drag & drop within the same list
              _dispatchEvent({
                sortable: this,
                name: 'update',
                toEl: parentEl,
                originalEvent: evt
              });

              _dispatchEvent({
                sortable: this,
                name: 'sort',
                toEl: parentEl,
                originalEvent: evt
              });
            }
          }
        }

        if (Sortable.active) {
          /* jshint eqnull:true */
          if (newIndex == null || newIndex === -1) {
            newIndex = oldIndex;
            newDraggableIndex = oldDraggableIndex;
          }

          _dispatchEvent({
            sortable: this,
            name: 'end',
            toEl: parentEl,
            originalEvent: evt
          }); // Save sorting


          this.save();
        }
      }
    }

    this._nulling();
  },
  _nulling: function _nulling() {
    pluginEvent('nulling', this);
    rootEl = dragEl = parentEl = ghostEl = nextEl = cloneEl = lastDownEl = cloneHidden = tapEvt = touchEvt = moved = newIndex = newDraggableIndex = oldIndex = oldDraggableIndex = lastTarget = lastDirection = putSortable = activeGroup = Sortable.dragged = Sortable.ghost = Sortable.clone = Sortable.active = null;
    savedInputChecked.forEach(function (el) {
      el.checked = true;
    });
    savedInputChecked.length = lastDx = lastDy = 0;
  },
  handleEvent: function handleEvent(
  /**Event*/
  evt) {
    switch (evt.type) {
      case 'drop':
      case 'dragend':
        this._onDrop(evt);

        break;

      case 'dragenter':
      case 'dragover':
        if (dragEl) {
          this._onDragOver(evt);

          _globalDragOver(evt);
        }

        break;

      case 'selectstart':
        evt.preventDefault();
        break;
    }
  },

  /**
   * Serializes the item into an array of string.
   * @returns {String[]}
   */
  toArray: function toArray() {
    var order = [],
        el,
        children = this.el.children,
        i = 0,
        n = children.length,
        options = this.options;

    for (; i < n; i++) {
      el = children[i];

      if (closest(el, options.draggable, this.el, false)) {
        order.push(el.getAttribute(options.dataIdAttr) || _generateId(el));
      }
    }

    return order;
  },

  /**
   * Sorts the elements according to the array.
   * @param  {String[]}  order  order of the items
   */
  sort: function sort(order, useAnimation) {
    var items = {},
        rootEl = this.el;
    this.toArray().forEach(function (id, i) {
      var el = rootEl.children[i];

      if (closest(el, this.options.draggable, rootEl, false)) {
        items[id] = el;
      }
    }, this);
    useAnimation && this.captureAnimationState();
    order.forEach(function (id) {
      if (items[id]) {
        rootEl.removeChild(items[id]);
        rootEl.appendChild(items[id]);
      }
    });
    useAnimation && this.animateAll();
  },

  /**
   * Save the current sorting
   */
  save: function save() {
    var store = this.options.store;
    store && store.set && store.set(this);
  },

  /**
   * For each element in the set, get the first element that matches the selector by testing the element itself and traversing up through its ancestors in the DOM tree.
   * @param   {HTMLElement}  el
   * @param   {String}       [selector]  default: `options.draggable`
   * @returns {HTMLElement|null}
   */
  closest: function closest$1(el, selector) {
    return closest(el, selector || this.options.draggable, this.el, false);
  },

  /**
   * Set/get option
   * @param   {string} name
   * @param   {*}      [value]
   * @returns {*}
   */
  option: function option(name, value) {
    var options = this.options;

    if (value === void 0) {
      return options[name];
    } else {
      var modifiedValue = PluginManager.modifyOption(this, name, value);

      if (typeof modifiedValue !== 'undefined') {
        options[name] = modifiedValue;
      } else {
        options[name] = value;
      }

      if (name === 'group') {
        _prepareGroup(options);
      }
    }
  },

  /**
   * Destroy
   */
  destroy: function destroy() {
    pluginEvent('destroy', this);
    var el = this.el;
    el[expando] = null;
    off$1(el, 'mousedown', this._onTapStart);
    off$1(el, 'touchstart', this._onTapStart);
    off$1(el, 'pointerdown', this._onTapStart);

    if (this.nativeDraggable) {
      off$1(el, 'dragover', this);
      off$1(el, 'dragenter', this);
    } // Remove draggable attributes


    Array.prototype.forEach.call(el.querySelectorAll('[draggable]'), function (el) {
      el.removeAttribute('draggable');
    });

    this._onDrop();

    this._disableDelayedDragEvents();

    sortables.splice(sortables.indexOf(this.el), 1);
    this.el = el = null;
  },
  _hideClone: function _hideClone() {
    if (!cloneHidden) {
      pluginEvent('hideClone', this);
      if (Sortable.eventCanceled) return;
      css$8(cloneEl, 'display', 'none');

      if (this.options.removeCloneOnHide && cloneEl.parentNode) {
        cloneEl.parentNode.removeChild(cloneEl);
      }

      cloneHidden = true;
    }
  },
  _showClone: function _showClone(putSortable) {
    if (putSortable.lastPutMode !== 'clone') {
      this._hideClone();

      return;
    }

    if (cloneHidden) {
      pluginEvent('showClone', this);
      if (Sortable.eventCanceled) return; // show clone at dragEl or original position

      if (dragEl.parentNode == rootEl && !this.options.group.revertClone) {
        rootEl.insertBefore(cloneEl, dragEl);
      } else if (nextEl) {
        rootEl.insertBefore(cloneEl, nextEl);
      } else {
        rootEl.appendChild(cloneEl);
      }

      if (this.options.group.revertClone) {
        this.animate(dragEl, cloneEl);
      }

      css$8(cloneEl, 'display', '');
      cloneHidden = false;
    }
  }
};

function _globalDragOver(
/**Event*/
evt) {
  if (evt.dataTransfer) {
    evt.dataTransfer.dropEffect = 'move';
  }

  evt.cancelable && evt.preventDefault();
}

function _onMove(fromEl, toEl, dragEl, dragRect, targetEl, targetRect, originalEvent, willInsertAfter) {
  var evt,
      sortable = fromEl[expando],
      onMoveFn = sortable.options.onMove,
      retVal; // Support for new CustomEvent feature

  if (window.CustomEvent && !IE11OrLess && !Edge) {
    evt = new CustomEvent('move', {
      bubbles: true,
      cancelable: true
    });
  } else {
    evt = document.createEvent('Event');
    evt.initEvent('move', true, true);
  }

  evt.to = toEl;
  evt.from = fromEl;
  evt.dragged = dragEl;
  evt.draggedRect = dragRect;
  evt.related = targetEl || toEl;
  evt.relatedRect = targetRect || getRect(toEl);
  evt.willInsertAfter = willInsertAfter;
  evt.originalEvent = originalEvent;
  fromEl.dispatchEvent(evt);

  if (onMoveFn) {
    retVal = onMoveFn.call(sortable, evt, originalEvent);
  }

  return retVal;
}

function _disableDraggable(el) {
  el.draggable = false;
}

function _unsilent() {
  _silent = false;
}

function _ghostIsFirst(evt, vertical, sortable) {
  var rect = getRect(getChild(sortable.el, 0, sortable.options, true));
  var spacer = 10;
  return vertical ? evt.clientX < rect.left - spacer || evt.clientY < rect.top && evt.clientX < rect.right : evt.clientY < rect.top - spacer || evt.clientY < rect.bottom && evt.clientX < rect.left;
}

function _ghostIsLast(evt, vertical, sortable) {
  var rect = getRect(lastChild(sortable.el, sortable.options.draggable));
  var spacer = 10;
  return vertical ? evt.clientX > rect.right + spacer || evt.clientX <= rect.right && evt.clientY > rect.bottom && evt.clientX >= rect.left : evt.clientX > rect.right && evt.clientY > rect.top || evt.clientX <= rect.right && evt.clientY > rect.bottom + spacer;
}

function _getSwapDirection(evt, target, targetRect, vertical, swapThreshold, invertedSwapThreshold, invertSwap, isLastTarget) {
  var mouseOnAxis = vertical ? evt.clientY : evt.clientX,
      targetLength = vertical ? targetRect.height : targetRect.width,
      targetS1 = vertical ? targetRect.top : targetRect.left,
      targetS2 = vertical ? targetRect.bottom : targetRect.right,
      invert = false;

  if (!invertSwap) {
    // Never invert or create dragEl shadow when target movemenet causes mouse to move past the end of regular swapThreshold
    if (isLastTarget && targetMoveDistance < targetLength * swapThreshold) {
      // multiplied only by swapThreshold because mouse will already be inside target by (1 - threshold) * targetLength / 2
      // check if past first invert threshold on side opposite of lastDirection
      if (!pastFirstInvertThresh && (lastDirection === 1 ? mouseOnAxis > targetS1 + targetLength * invertedSwapThreshold / 2 : mouseOnAxis < targetS2 - targetLength * invertedSwapThreshold / 2)) {
        // past first invert threshold, do not restrict inverted threshold to dragEl shadow
        pastFirstInvertThresh = true;
      }

      if (!pastFirstInvertThresh) {
        // dragEl shadow (target move distance shadow)
        if (lastDirection === 1 ? mouseOnAxis < targetS1 + targetMoveDistance // over dragEl shadow
        : mouseOnAxis > targetS2 - targetMoveDistance) {
          return -lastDirection;
        }
      } else {
        invert = true;
      }
    } else {
      // Regular
      if (mouseOnAxis > targetS1 + targetLength * (1 - swapThreshold) / 2 && mouseOnAxis < targetS2 - targetLength * (1 - swapThreshold) / 2) {
        return _getInsertDirection(target);
      }
    }
  }

  invert = invert || invertSwap;

  if (invert) {
    // Invert of regular
    if (mouseOnAxis < targetS1 + targetLength * invertedSwapThreshold / 2 || mouseOnAxis > targetS2 - targetLength * invertedSwapThreshold / 2) {
      return mouseOnAxis > targetS1 + targetLength / 2 ? 1 : -1;
    }
  }

  return 0;
}
/**
 * Gets the direction dragEl must be swapped relative to target in order to make it
 * seem that dragEl has been "inserted" into that element's position
 * @param  {HTMLElement} target       The target whose position dragEl is being inserted at
 * @return {Number}                   Direction dragEl must be swapped
 */


function _getInsertDirection(target) {
  if (index(dragEl) < index(target)) {
    return 1;
  } else {
    return -1;
  }
}
/**
 * Generate id
 * @param   {HTMLElement} el
 * @returns {String}
 * @private
 */


function _generateId(el) {
  var str = el.tagName + el.className + el.src + el.href + el.textContent,
      i = str.length,
      sum = 0;

  while (i--) {
    sum += str.charCodeAt(i);
  }

  return sum.toString(36);
}

function _saveInputCheckedState(root) {
  savedInputChecked.length = 0;
  var inputs = root.getElementsByTagName('input');
  var idx = inputs.length;

  while (idx--) {
    var el = inputs[idx];
    el.checked && savedInputChecked.push(el);
  }
}

function _nextTick(fn) {
  return setTimeout(fn, 0);
}

function _cancelNextTick(id) {
  return clearTimeout(id);
} // Fixed #973:


if (documentExists) {
  on$1(document, 'touchmove', function (evt) {
    if ((Sortable.active || awaitingDragStarted) && evt.cancelable) {
      evt.preventDefault();
    }
  });
} // Export utils


Sortable.utils = {
  on: on$1,
  off: off$1,
  css: css$8,
  find: find,
  is: function is(el, selector) {
    return !!closest(el, selector, el, false);
  },
  extend: extend$1,
  throttle: throttle$1,
  closest: closest,
  toggleClass: toggleClass,
  clone: clone,
  index: index,
  nextTick: _nextTick,
  cancelNextTick: _cancelNextTick,
  detectDirection: _detectDirection,
  getChild: getChild
};
/**
 * Get the Sortable instance of an element
 * @param  {HTMLElement} element The element
 * @return {Sortable|undefined}         The instance of Sortable
 */

Sortable.get = function (element) {
  return element[expando];
};
/**
 * Mount a plugin to Sortable
 * @param  {...SortablePlugin|SortablePlugin[]} plugins       Plugins being mounted
 */


Sortable.mount = function () {
  for (var _len = arguments.length, plugins = new Array(_len), _key = 0; _key < _len; _key++) {
    plugins[_key] = arguments[_key];
  }

  if (plugins[0].constructor === Array) plugins = plugins[0];
  plugins.forEach(function (plugin) {
    if (!plugin.prototype || !plugin.prototype.constructor) {
      throw "Sortable: Mounted plugin must be a constructor function, not ".concat({}.toString.call(plugin));
    }

    if (plugin.utils) Sortable.utils = _objectSpread2(_objectSpread2({}, Sortable.utils), plugin.utils);
    PluginManager.mount(plugin);
  });
};
/**
 * Create sortable instance
 * @param {HTMLElement}  el
 * @param {Object}      [options]
 */


Sortable.create = function (el, options) {
  return new Sortable(el, options);
}; // Export


Sortable.version = version$1;

var autoScrolls = [],
    scrollEl,
    scrollRootEl,
    scrolling = false,
    lastAutoScrollX,
    lastAutoScrollY,
    touchEvt$1,
    pointerElemChangedInterval;

function AutoScrollPlugin() {
  function AutoScroll() {
    this.defaults = {
      scroll: true,
      forceAutoScrollFallback: false,
      scrollSensitivity: 30,
      scrollSpeed: 10,
      bubbleScroll: true
    }; // Bind all private methods

    for (var fn in this) {
      if (fn.charAt(0) === '_' && typeof this[fn] === 'function') {
        this[fn] = this[fn].bind(this);
      }
    }
  }

  AutoScroll.prototype = {
    dragStarted: function dragStarted(_ref) {
      var originalEvent = _ref.originalEvent;

      if (this.sortable.nativeDraggable) {
        on$1(document, 'dragover', this._handleAutoScroll);
      } else {
        if (this.options.supportPointer) {
          on$1(document, 'pointermove', this._handleFallbackAutoScroll);
        } else if (originalEvent.touches) {
          on$1(document, 'touchmove', this._handleFallbackAutoScroll);
        } else {
          on$1(document, 'mousemove', this._handleFallbackAutoScroll);
        }
      }
    },
    dragOverCompleted: function dragOverCompleted(_ref2) {
      var originalEvent = _ref2.originalEvent;

      // For when bubbling is canceled and using fallback (fallback 'touchmove' always reached)
      if (!this.options.dragOverBubble && !originalEvent.rootEl) {
        this._handleAutoScroll(originalEvent);
      }
    },
    drop: function drop() {
      if (this.sortable.nativeDraggable) {
        off$1(document, 'dragover', this._handleAutoScroll);
      } else {
        off$1(document, 'pointermove', this._handleFallbackAutoScroll);
        off$1(document, 'touchmove', this._handleFallbackAutoScroll);
        off$1(document, 'mousemove', this._handleFallbackAutoScroll);
      }

      clearPointerElemChangedInterval();
      clearAutoScrolls();
      cancelThrottle();
    },
    nulling: function nulling() {
      touchEvt$1 = scrollRootEl = scrollEl = scrolling = pointerElemChangedInterval = lastAutoScrollX = lastAutoScrollY = null;
      autoScrolls.length = 0;
    },
    _handleFallbackAutoScroll: function _handleFallbackAutoScroll(evt) {
      this._handleAutoScroll(evt, true);
    },
    _handleAutoScroll: function _handleAutoScroll(evt, fallback) {
      var _this = this;

      var x = (evt.touches ? evt.touches[0] : evt).clientX,
          y = (evt.touches ? evt.touches[0] : evt).clientY,
          elem = document.elementFromPoint(x, y);
      touchEvt$1 = evt; // IE does not seem to have native autoscroll,
      // Edge's autoscroll seems too conditional,
      // MACOS Safari does not have autoscroll,
      // Firefox and Chrome are good

      if (fallback || this.options.forceAutoScrollFallback || Edge || IE11OrLess || Safari) {
        autoScroll(evt, this.options, elem, fallback); // Listener for pointer element change

        var ogElemScroller = getParentAutoScrollElement(elem, true);

        if (scrolling && (!pointerElemChangedInterval || x !== lastAutoScrollX || y !== lastAutoScrollY)) {
          pointerElemChangedInterval && clearPointerElemChangedInterval(); // Detect for pointer elem change, emulating native DnD behaviour

          pointerElemChangedInterval = setInterval(function () {
            var newElem = getParentAutoScrollElement(document.elementFromPoint(x, y), true);

            if (newElem !== ogElemScroller) {
              ogElemScroller = newElem;
              clearAutoScrolls();
            }

            autoScroll(evt, _this.options, newElem, fallback);
          }, 10);
          lastAutoScrollX = x;
          lastAutoScrollY = y;
        }
      } else {
        // if DnD is enabled (and browser has good autoscrolling), first autoscroll will already scroll, so get parent autoscroll of first autoscroll
        if (!this.options.bubbleScroll || getParentAutoScrollElement(elem, true) === getWindowScrollingElement()) {
          clearAutoScrolls();
          return;
        }

        autoScroll(evt, this.options, getParentAutoScrollElement(elem, false), false);
      }
    }
  };
  return _extends(AutoScroll, {
    pluginName: 'scroll',
    initializeByDefault: true
  });
}

function clearAutoScrolls() {
  autoScrolls.forEach(function (autoScroll) {
    clearInterval(autoScroll.pid);
  });
  autoScrolls = [];
}

function clearPointerElemChangedInterval() {
  clearInterval(pointerElemChangedInterval);
}

var autoScroll = throttle$1(function (evt, options, rootEl, isFallback) {
  // Bug: https://bugzilla.mozilla.org/show_bug.cgi?id=505521
  if (!options.scroll) return;
  var x = (evt.touches ? evt.touches[0] : evt).clientX,
      y = (evt.touches ? evt.touches[0] : evt).clientY,
      sens = options.scrollSensitivity,
      speed = options.scrollSpeed,
      winScroller = getWindowScrollingElement();
  var scrollThisInstance = false,
      scrollCustomFn; // New scroll root, set scrollEl

  if (scrollRootEl !== rootEl) {
    scrollRootEl = rootEl;
    clearAutoScrolls();
    scrollEl = options.scroll;
    scrollCustomFn = options.scrollFn;

    if (scrollEl === true) {
      scrollEl = getParentAutoScrollElement(rootEl, true);
    }
  }

  var layersOut = 0;
  var currentParent = scrollEl;

  do {
    var el = currentParent,
        rect = getRect(el),
        top = rect.top,
        bottom = rect.bottom,
        left = rect.left,
        right = rect.right,
        width = rect.width,
        height = rect.height,
        canScrollX = void 0,
        canScrollY = void 0,
        scrollWidth = el.scrollWidth,
        scrollHeight = el.scrollHeight,
        elCSS = css$8(el),
        scrollPosX = el.scrollLeft,
        scrollPosY = el.scrollTop;

    if (el === winScroller) {
      canScrollX = width < scrollWidth && (elCSS.overflowX === 'auto' || elCSS.overflowX === 'scroll' || elCSS.overflowX === 'visible');
      canScrollY = height < scrollHeight && (elCSS.overflowY === 'auto' || elCSS.overflowY === 'scroll' || elCSS.overflowY === 'visible');
    } else {
      canScrollX = width < scrollWidth && (elCSS.overflowX === 'auto' || elCSS.overflowX === 'scroll');
      canScrollY = height < scrollHeight && (elCSS.overflowY === 'auto' || elCSS.overflowY === 'scroll');
    }

    var vx = canScrollX && (Math.abs(right - x) <= sens && scrollPosX + width < scrollWidth) - (Math.abs(left - x) <= sens && !!scrollPosX);
    var vy = canScrollY && (Math.abs(bottom - y) <= sens && scrollPosY + height < scrollHeight) - (Math.abs(top - y) <= sens && !!scrollPosY);

    if (!autoScrolls[layersOut]) {
      for (var i = 0; i <= layersOut; i++) {
        if (!autoScrolls[i]) {
          autoScrolls[i] = {};
        }
      }
    }

    if (autoScrolls[layersOut].vx != vx || autoScrolls[layersOut].vy != vy || autoScrolls[layersOut].el !== el) {
      autoScrolls[layersOut].el = el;
      autoScrolls[layersOut].vx = vx;
      autoScrolls[layersOut].vy = vy;
      clearInterval(autoScrolls[layersOut].pid);

      if (vx != 0 || vy != 0) {
        scrollThisInstance = true;
        /* jshint loopfunc:true */

        autoScrolls[layersOut].pid = setInterval(function () {
          // emulate drag over during autoscroll (fallback), emulating native DnD behaviour
          if (isFallback && this.layer === 0) {
            Sortable.active._onTouchMove(touchEvt$1); // To move ghost if it is positioned absolutely

          }

          var scrollOffsetY = autoScrolls[this.layer].vy ? autoScrolls[this.layer].vy * speed : 0;
          var scrollOffsetX = autoScrolls[this.layer].vx ? autoScrolls[this.layer].vx * speed : 0;

          if (typeof scrollCustomFn === 'function') {
            if (scrollCustomFn.call(Sortable.dragged.parentNode[expando], scrollOffsetX, scrollOffsetY, evt, touchEvt$1, autoScrolls[this.layer].el) !== 'continue') {
              return;
            }
          }

          scrollBy(autoScrolls[this.layer].el, scrollOffsetX, scrollOffsetY);
        }.bind({
          layer: layersOut
        }), 24);
      }
    }

    layersOut++;
  } while (options.bubbleScroll && currentParent !== winScroller && (currentParent = getParentAutoScrollElement(currentParent, false)));

  scrolling = scrollThisInstance; // in case another function catches scrolling as false in between when it is not
}, 30);

var drop = function drop(_ref) {
  var originalEvent = _ref.originalEvent,
      putSortable = _ref.putSortable,
      dragEl = _ref.dragEl,
      activeSortable = _ref.activeSortable,
      dispatchSortableEvent = _ref.dispatchSortableEvent,
      hideGhostForTarget = _ref.hideGhostForTarget,
      unhideGhostForTarget = _ref.unhideGhostForTarget;
  if (!originalEvent) return;
  var toSortable = putSortable || activeSortable;
  hideGhostForTarget();
  var touch = originalEvent.changedTouches && originalEvent.changedTouches.length ? originalEvent.changedTouches[0] : originalEvent;
  var target = document.elementFromPoint(touch.clientX, touch.clientY);
  unhideGhostForTarget();

  if (toSortable && !toSortable.el.contains(target)) {
    dispatchSortableEvent('spill');
    this.onSpill({
      dragEl: dragEl,
      putSortable: putSortable
    });
  }
};

function Revert() {}

Revert.prototype = {
  startIndex: null,
  dragStart: function dragStart(_ref2) {
    var oldDraggableIndex = _ref2.oldDraggableIndex;
    this.startIndex = oldDraggableIndex;
  },
  onSpill: function onSpill(_ref3) {
    var dragEl = _ref3.dragEl,
        putSortable = _ref3.putSortable;
    this.sortable.captureAnimationState();

    if (putSortable) {
      putSortable.captureAnimationState();
    }

    var nextSibling = getChild(this.sortable.el, this.startIndex, this.options);

    if (nextSibling) {
      this.sortable.el.insertBefore(dragEl, nextSibling);
    } else {
      this.sortable.el.appendChild(dragEl);
    }

    this.sortable.animateAll();

    if (putSortable) {
      putSortable.animateAll();
    }
  },
  drop: drop
};

_extends(Revert, {
  pluginName: 'revertOnSpill'
});

function Remove() {}

Remove.prototype = {
  onSpill: function onSpill(_ref4) {
    var dragEl = _ref4.dragEl,
        putSortable = _ref4.putSortable;
    var parentSortable = putSortable || this.sortable;
    parentSortable.captureAnimationState();
    dragEl.parentNode && dragEl.parentNode.removeChild(dragEl);
    parentSortable.animateAll();
  },
  drop: drop
};

_extends(Remove, {
  pluginName: 'removeOnSpill'
});

var lastSwapEl;

function SwapPlugin() {
  function Swap() {
    this.defaults = {
      swapClass: 'sortable-swap-highlight'
    };
  }

  Swap.prototype = {
    dragStart: function dragStart(_ref) {
      var dragEl = _ref.dragEl;
      lastSwapEl = dragEl;
    },
    dragOverValid: function dragOverValid(_ref2) {
      var completed = _ref2.completed,
          target = _ref2.target,
          onMove = _ref2.onMove,
          activeSortable = _ref2.activeSortable,
          changed = _ref2.changed,
          cancel = _ref2.cancel;
      if (!activeSortable.options.swap) return;
      var el = this.sortable.el,
          options = this.options;

      if (target && target !== el) {
        var prevSwapEl = lastSwapEl;

        if (onMove(target) !== false) {
          toggleClass(target, options.swapClass, true);
          lastSwapEl = target;
        } else {
          lastSwapEl = null;
        }

        if (prevSwapEl && prevSwapEl !== lastSwapEl) {
          toggleClass(prevSwapEl, options.swapClass, false);
        }
      }

      changed();
      completed(true);
      cancel();
    },
    drop: function drop(_ref3) {
      var activeSortable = _ref3.activeSortable,
          putSortable = _ref3.putSortable,
          dragEl = _ref3.dragEl;
      var toSortable = putSortable || this.sortable;
      var options = this.options;
      lastSwapEl && toggleClass(lastSwapEl, options.swapClass, false);

      if (lastSwapEl && (options.swap || putSortable && putSortable.options.swap)) {
        if (dragEl !== lastSwapEl) {
          toSortable.captureAnimationState();
          if (toSortable !== activeSortable) activeSortable.captureAnimationState();
          swapNodes(dragEl, lastSwapEl);
          toSortable.animateAll();
          if (toSortable !== activeSortable) activeSortable.animateAll();
        }
      }
    },
    nulling: function nulling() {
      lastSwapEl = null;
    }
  };
  return _extends(Swap, {
    pluginName: 'swap',
    eventProperties: function eventProperties() {
      return {
        swapItem: lastSwapEl
      };
    }
  });
}

function swapNodes(n1, n2) {
  var p1 = n1.parentNode,
      p2 = n2.parentNode,
      i1,
      i2;
  if (!p1 || !p2 || p1.isEqualNode(n2) || p2.isEqualNode(n1)) return;
  i1 = index(n1);
  i2 = index(n2);

  if (p1.isEqualNode(p2) && i1 < i2) {
    i2++;
  }

  p1.insertBefore(n2, p1.children[i1]);
  p2.insertBefore(n1, p2.children[i2]);
}

var multiDragElements = [],
    multiDragClones = [],
    lastMultiDragSelect,
    // for selection with modifier key down (SHIFT)
multiDragSortable,
    initialFolding = false,
    // Initial multi-drag fold when drag started
folding = false,
    // Folding any other time
dragStarted = false,
    dragEl$1,
    clonesFromRect,
    clonesHidden;

function MultiDragPlugin() {
  function MultiDrag(sortable) {
    // Bind all private methods
    for (var fn in this) {
      if (fn.charAt(0) === '_' && typeof this[fn] === 'function') {
        this[fn] = this[fn].bind(this);
      }
    }

    if (sortable.options.supportPointer) {
      on$1(document, 'pointerup', this._deselectMultiDrag);
    } else {
      on$1(document, 'mouseup', this._deselectMultiDrag);
      on$1(document, 'touchend', this._deselectMultiDrag);
    }

    on$1(document, 'keydown', this._checkKeyDown);
    on$1(document, 'keyup', this._checkKeyUp);
    this.defaults = {
      selectedClass: 'sortable-selected',
      multiDragKey: null,
      setData: function setData(dataTransfer, dragEl) {
        var data = '';

        if (multiDragElements.length && multiDragSortable === sortable) {
          multiDragElements.forEach(function (multiDragElement, i) {
            data += (!i ? '' : ', ') + multiDragElement.textContent;
          });
        } else {
          data = dragEl.textContent;
        }

        dataTransfer.setData('Text', data);
      }
    };
  }

  MultiDrag.prototype = {
    multiDragKeyDown: false,
    isMultiDrag: false,
    delayStartGlobal: function delayStartGlobal(_ref) {
      var dragged = _ref.dragEl;
      dragEl$1 = dragged;
    },
    delayEnded: function delayEnded() {
      this.isMultiDrag = ~multiDragElements.indexOf(dragEl$1);
    },
    setupClone: function setupClone(_ref2) {
      var sortable = _ref2.sortable,
          cancel = _ref2.cancel;
      if (!this.isMultiDrag) return;

      for (var i = 0; i < multiDragElements.length; i++) {
        multiDragClones.push(clone(multiDragElements[i]));
        multiDragClones[i].sortableIndex = multiDragElements[i].sortableIndex;
        multiDragClones[i].draggable = false;
        multiDragClones[i].style['will-change'] = '';
        toggleClass(multiDragClones[i], this.options.selectedClass, false);
        multiDragElements[i] === dragEl$1 && toggleClass(multiDragClones[i], this.options.chosenClass, false);
      }

      sortable._hideClone();

      cancel();
    },
    clone: function clone(_ref3) {
      var sortable = _ref3.sortable,
          rootEl = _ref3.rootEl,
          dispatchSortableEvent = _ref3.dispatchSortableEvent,
          cancel = _ref3.cancel;
      if (!this.isMultiDrag) return;

      if (!this.options.removeCloneOnHide) {
        if (multiDragElements.length && multiDragSortable === sortable) {
          insertMultiDragClones(true, rootEl);
          dispatchSortableEvent('clone');
          cancel();
        }
      }
    },
    showClone: function showClone(_ref4) {
      var cloneNowShown = _ref4.cloneNowShown,
          rootEl = _ref4.rootEl,
          cancel = _ref4.cancel;
      if (!this.isMultiDrag) return;
      insertMultiDragClones(false, rootEl);
      multiDragClones.forEach(function (clone) {
        css$8(clone, 'display', '');
      });
      cloneNowShown();
      clonesHidden = false;
      cancel();
    },
    hideClone: function hideClone(_ref5) {
      var _this = this;

      _ref5.sortable;
          var cloneNowHidden = _ref5.cloneNowHidden,
          cancel = _ref5.cancel;
      if (!this.isMultiDrag) return;
      multiDragClones.forEach(function (clone) {
        css$8(clone, 'display', 'none');

        if (_this.options.removeCloneOnHide && clone.parentNode) {
          clone.parentNode.removeChild(clone);
        }
      });
      cloneNowHidden();
      clonesHidden = true;
      cancel();
    },
    dragStartGlobal: function dragStartGlobal(_ref6) {
      _ref6.sortable;

      if (!this.isMultiDrag && multiDragSortable) {
        multiDragSortable.multiDrag._deselectMultiDrag();
      }

      multiDragElements.forEach(function (multiDragElement) {
        multiDragElement.sortableIndex = index(multiDragElement);
      }); // Sort multi-drag elements

      multiDragElements = multiDragElements.sort(function (a, b) {
        return a.sortableIndex - b.sortableIndex;
      });
      dragStarted = true;
    },
    dragStarted: function dragStarted(_ref7) {
      var _this2 = this;

      var sortable = _ref7.sortable;
      if (!this.isMultiDrag) return;

      if (this.options.sort) {
        // Capture rects,
        // hide multi drag elements (by positioning them absolute),
        // set multi drag elements rects to dragRect,
        // show multi drag elements,
        // animate to rects,
        // unset rects & remove from DOM
        sortable.captureAnimationState();

        if (this.options.animation) {
          multiDragElements.forEach(function (multiDragElement) {
            if (multiDragElement === dragEl$1) return;
            css$8(multiDragElement, 'position', 'absolute');
          });
          var dragRect = getRect(dragEl$1, false, true, true);
          multiDragElements.forEach(function (multiDragElement) {
            if (multiDragElement === dragEl$1) return;
            setRect(multiDragElement, dragRect);
          });
          folding = true;
          initialFolding = true;
        }
      }

      sortable.animateAll(function () {
        folding = false;
        initialFolding = false;

        if (_this2.options.animation) {
          multiDragElements.forEach(function (multiDragElement) {
            unsetRect(multiDragElement);
          });
        } // Remove all auxiliary multidrag items from el, if sorting enabled


        if (_this2.options.sort) {
          removeMultiDragElements();
        }
      });
    },
    dragOver: function dragOver(_ref8) {
      var target = _ref8.target,
          completed = _ref8.completed,
          cancel = _ref8.cancel;

      if (folding && ~multiDragElements.indexOf(target)) {
        completed(false);
        cancel();
      }
    },
    revert: function revert(_ref9) {
      var fromSortable = _ref9.fromSortable,
          rootEl = _ref9.rootEl,
          sortable = _ref9.sortable,
          dragRect = _ref9.dragRect;

      if (multiDragElements.length > 1) {
        // Setup unfold animation
        multiDragElements.forEach(function (multiDragElement) {
          sortable.addAnimationState({
            target: multiDragElement,
            rect: folding ? getRect(multiDragElement) : dragRect
          });
          unsetRect(multiDragElement);
          multiDragElement.fromRect = dragRect;
          fromSortable.removeAnimationState(multiDragElement);
        });
        folding = false;
        insertMultiDragElements(!this.options.removeCloneOnHide, rootEl);
      }
    },
    dragOverCompleted: function dragOverCompleted(_ref10) {
      var sortable = _ref10.sortable,
          isOwner = _ref10.isOwner,
          insertion = _ref10.insertion,
          activeSortable = _ref10.activeSortable,
          parentEl = _ref10.parentEl,
          putSortable = _ref10.putSortable;
      var options = this.options;

      if (insertion) {
        // Clones must be hidden before folding animation to capture dragRectAbsolute properly
        if (isOwner) {
          activeSortable._hideClone();
        }

        initialFolding = false; // If leaving sort:false root, or already folding - Fold to new location

        if (options.animation && multiDragElements.length > 1 && (folding || !isOwner && !activeSortable.options.sort && !putSortable)) {
          // Fold: Set all multi drag elements's rects to dragEl's rect when multi-drag elements are invisible
          var dragRectAbsolute = getRect(dragEl$1, false, true, true);
          multiDragElements.forEach(function (multiDragElement) {
            if (multiDragElement === dragEl$1) return;
            setRect(multiDragElement, dragRectAbsolute); // Move element(s) to end of parentEl so that it does not interfere with multi-drag clones insertion if they are inserted
            // while folding, and so that we can capture them again because old sortable will no longer be fromSortable

            parentEl.appendChild(multiDragElement);
          });
          folding = true;
        } // Clones must be shown (and check to remove multi drags) after folding when interfering multiDragElements are moved out


        if (!isOwner) {
          // Only remove if not folding (folding will remove them anyways)
          if (!folding) {
            removeMultiDragElements();
          }

          if (multiDragElements.length > 1) {
            var clonesHiddenBefore = clonesHidden;

            activeSortable._showClone(sortable); // Unfold animation for clones if showing from hidden


            if (activeSortable.options.animation && !clonesHidden && clonesHiddenBefore) {
              multiDragClones.forEach(function (clone) {
                activeSortable.addAnimationState({
                  target: clone,
                  rect: clonesFromRect
                });
                clone.fromRect = clonesFromRect;
                clone.thisAnimationDuration = null;
              });
            }
          } else {
            activeSortable._showClone(sortable);
          }
        }
      }
    },
    dragOverAnimationCapture: function dragOverAnimationCapture(_ref11) {
      var dragRect = _ref11.dragRect,
          isOwner = _ref11.isOwner,
          activeSortable = _ref11.activeSortable;
      multiDragElements.forEach(function (multiDragElement) {
        multiDragElement.thisAnimationDuration = null;
      });

      if (activeSortable.options.animation && !isOwner && activeSortable.multiDrag.isMultiDrag) {
        clonesFromRect = _extends({}, dragRect);
        var dragMatrix = matrix(dragEl$1, true);
        clonesFromRect.top -= dragMatrix.f;
        clonesFromRect.left -= dragMatrix.e;
      }
    },
    dragOverAnimationComplete: function dragOverAnimationComplete() {
      if (folding) {
        folding = false;
        removeMultiDragElements();
      }
    },
    drop: function drop(_ref12) {
      var evt = _ref12.originalEvent,
          rootEl = _ref12.rootEl,
          parentEl = _ref12.parentEl,
          sortable = _ref12.sortable,
          dispatchSortableEvent = _ref12.dispatchSortableEvent,
          oldIndex = _ref12.oldIndex,
          putSortable = _ref12.putSortable;
      var toSortable = putSortable || this.sortable;
      if (!evt) return;
      var options = this.options,
          children = parentEl.children; // Multi-drag selection

      if (!dragStarted) {
        if (options.multiDragKey && !this.multiDragKeyDown) {
          this._deselectMultiDrag();
        }

        toggleClass(dragEl$1, options.selectedClass, !~multiDragElements.indexOf(dragEl$1));

        if (!~multiDragElements.indexOf(dragEl$1)) {
          multiDragElements.push(dragEl$1);
          dispatchEvent({
            sortable: sortable,
            rootEl: rootEl,
            name: 'select',
            targetEl: dragEl$1,
            originalEvt: evt
          }); // Modifier activated, select from last to dragEl

          if (evt.shiftKey && lastMultiDragSelect && sortable.el.contains(lastMultiDragSelect)) {
            var lastIndex = index(lastMultiDragSelect),
                currentIndex = index(dragEl$1);

            if (~lastIndex && ~currentIndex && lastIndex !== currentIndex) {
              // Must include lastMultiDragSelect (select it), in case modified selection from no selection
              // (but previous selection existed)
              var n, i;

              if (currentIndex > lastIndex) {
                i = lastIndex;
                n = currentIndex;
              } else {
                i = currentIndex;
                n = lastIndex + 1;
              }

              for (; i < n; i++) {
                if (~multiDragElements.indexOf(children[i])) continue;
                toggleClass(children[i], options.selectedClass, true);
                multiDragElements.push(children[i]);
                dispatchEvent({
                  sortable: sortable,
                  rootEl: rootEl,
                  name: 'select',
                  targetEl: children[i],
                  originalEvt: evt
                });
              }
            }
          } else {
            lastMultiDragSelect = dragEl$1;
          }

          multiDragSortable = toSortable;
        } else {
          multiDragElements.splice(multiDragElements.indexOf(dragEl$1), 1);
          lastMultiDragSelect = null;
          dispatchEvent({
            sortable: sortable,
            rootEl: rootEl,
            name: 'deselect',
            targetEl: dragEl$1,
            originalEvt: evt
          });
        }
      } // Multi-drag drop


      if (dragStarted && this.isMultiDrag) {
        folding = false; // Do not "unfold" after around dragEl if reverted

        if ((parentEl[expando].options.sort || parentEl !== rootEl) && multiDragElements.length > 1) {
          var dragRect = getRect(dragEl$1),
              multiDragIndex = index(dragEl$1, ':not(.' + this.options.selectedClass + ')');
          if (!initialFolding && options.animation) dragEl$1.thisAnimationDuration = null;
          toSortable.captureAnimationState();

          if (!initialFolding) {
            if (options.animation) {
              dragEl$1.fromRect = dragRect;
              multiDragElements.forEach(function (multiDragElement) {
                multiDragElement.thisAnimationDuration = null;

                if (multiDragElement !== dragEl$1) {
                  var rect = folding ? getRect(multiDragElement) : dragRect;
                  multiDragElement.fromRect = rect; // Prepare unfold animation

                  toSortable.addAnimationState({
                    target: multiDragElement,
                    rect: rect
                  });
                }
              });
            } // Multi drag elements are not necessarily removed from the DOM on drop, so to reinsert
            // properly they must all be removed


            removeMultiDragElements();
            multiDragElements.forEach(function (multiDragElement) {
              if (children[multiDragIndex]) {
                parentEl.insertBefore(multiDragElement, children[multiDragIndex]);
              } else {
                parentEl.appendChild(multiDragElement);
              }

              multiDragIndex++;
            }); // If initial folding is done, the elements may have changed position because they are now
            // unfolding around dragEl, even though dragEl may not have his index changed, so update event
            // must be fired here as Sortable will not.

            if (oldIndex === index(dragEl$1)) {
              var update = false;
              multiDragElements.forEach(function (multiDragElement) {
                if (multiDragElement.sortableIndex !== index(multiDragElement)) {
                  update = true;
                  return;
                }
              });

              if (update) {
                dispatchSortableEvent('update');
              }
            }
          } // Must be done after capturing individual rects (scroll bar)


          multiDragElements.forEach(function (multiDragElement) {
            unsetRect(multiDragElement);
          });
          toSortable.animateAll();
        }

        multiDragSortable = toSortable;
      } // Remove clones if necessary


      if (rootEl === parentEl || putSortable && putSortable.lastPutMode !== 'clone') {
        multiDragClones.forEach(function (clone) {
          clone.parentNode && clone.parentNode.removeChild(clone);
        });
      }
    },
    nullingGlobal: function nullingGlobal() {
      this.isMultiDrag = dragStarted = false;
      multiDragClones.length = 0;
    },
    destroyGlobal: function destroyGlobal() {
      this._deselectMultiDrag();

      off$1(document, 'pointerup', this._deselectMultiDrag);
      off$1(document, 'mouseup', this._deselectMultiDrag);
      off$1(document, 'touchend', this._deselectMultiDrag);
      off$1(document, 'keydown', this._checkKeyDown);
      off$1(document, 'keyup', this._checkKeyUp);
    },
    _deselectMultiDrag: function _deselectMultiDrag(evt) {
      if (typeof dragStarted !== "undefined" && dragStarted) return; // Only deselect if selection is in this sortable

      if (multiDragSortable !== this.sortable) return; // Only deselect if target is not item in this sortable

      if (evt && closest(evt.target, this.options.draggable, this.sortable.el, false)) return; // Only deselect if left click

      if (evt && evt.button !== 0) return;

      while (multiDragElements.length) {
        var el = multiDragElements[0];
        toggleClass(el, this.options.selectedClass, false);
        multiDragElements.shift();
        dispatchEvent({
          sortable: this.sortable,
          rootEl: this.sortable.el,
          name: 'deselect',
          targetEl: el,
          originalEvt: evt
        });
      }
    },
    _checkKeyDown: function _checkKeyDown(evt) {
      if (evt.key === this.options.multiDragKey) {
        this.multiDragKeyDown = true;
      }
    },
    _checkKeyUp: function _checkKeyUp(evt) {
      if (evt.key === this.options.multiDragKey) {
        this.multiDragKeyDown = false;
      }
    }
  };
  return _extends(MultiDrag, {
    // Static methods & properties
    pluginName: 'multiDrag',
    utils: {
      /**
       * Selects the provided multi-drag item
       * @param  {HTMLElement} el    The element to be selected
       */
      select: function select(el) {
        var sortable = el.parentNode[expando];
        if (!sortable || !sortable.options.multiDrag || ~multiDragElements.indexOf(el)) return;

        if (multiDragSortable && multiDragSortable !== sortable) {
          multiDragSortable.multiDrag._deselectMultiDrag();

          multiDragSortable = sortable;
        }

        toggleClass(el, sortable.options.selectedClass, true);
        multiDragElements.push(el);
      },

      /**
       * Deselects the provided multi-drag item
       * @param  {HTMLElement} el    The element to be deselected
       */
      deselect: function deselect(el) {
        var sortable = el.parentNode[expando],
            index = multiDragElements.indexOf(el);
        if (!sortable || !sortable.options.multiDrag || !~index) return;
        toggleClass(el, sortable.options.selectedClass, false);
        multiDragElements.splice(index, 1);
      }
    },
    eventProperties: function eventProperties() {
      var _this3 = this;

      var oldIndicies = [],
          newIndicies = [];
      multiDragElements.forEach(function (multiDragElement) {
        oldIndicies.push({
          multiDragElement: multiDragElement,
          index: multiDragElement.sortableIndex
        }); // multiDragElements will already be sorted if folding

        var newIndex;

        if (folding && multiDragElement !== dragEl$1) {
          newIndex = -1;
        } else if (folding) {
          newIndex = index(multiDragElement, ':not(.' + _this3.options.selectedClass + ')');
        } else {
          newIndex = index(multiDragElement);
        }

        newIndicies.push({
          multiDragElement: multiDragElement,
          index: newIndex
        });
      });
      return {
        items: _toConsumableArray(multiDragElements),
        clones: [].concat(multiDragClones),
        oldIndicies: oldIndicies,
        newIndicies: newIndicies
      };
    },
    optionListeners: {
      multiDragKey: function multiDragKey(key) {
        key = key.toLowerCase();

        if (key === 'ctrl') {
          key = 'Control';
        } else if (key.length > 1) {
          key = key.charAt(0).toUpperCase() + key.substr(1);
        }

        return key;
      }
    }
  });
}

function insertMultiDragElements(clonesInserted, rootEl) {
  multiDragElements.forEach(function (multiDragElement, i) {
    var target = rootEl.children[multiDragElement.sortableIndex + (clonesInserted ? Number(i) : 0)];

    if (target) {
      rootEl.insertBefore(multiDragElement, target);
    } else {
      rootEl.appendChild(multiDragElement);
    }
  });
}
/**
 * Insert multi-drag clones
 * @param  {[Boolean]} elementsInserted  Whether the multi-drag elements are inserted
 * @param  {HTMLElement} rootEl
 */


function insertMultiDragClones(elementsInserted, rootEl) {
  multiDragClones.forEach(function (clone, i) {
    var target = rootEl.children[clone.sortableIndex + (elementsInserted ? Number(i) : 0)];

    if (target) {
      rootEl.insertBefore(clone, target);
    } else {
      rootEl.appendChild(clone);
    }
  });
}

function removeMultiDragElements() {
  multiDragElements.forEach(function (multiDragElement) {
    if (multiDragElement === dragEl$1) return;
    multiDragElement.parentNode && multiDragElement.parentNode.removeChild(multiDragElement);
  });
}

Sortable.mount(new AutoScrollPlugin());
Sortable.mount(Remove, Revert);var sortable_esm=/*#__PURE__*/Object.freeze({__proto__:null,'default':Sortable,MultiDrag:MultiDragPlugin,Sortable:Sortable,Swap:SwapPlugin});var require$$1 = /*@__PURE__*/getAugmentedNamespace(sortable_esm);vuedraggable_umd.exports;

(function (module, exports) {
	(function webpackUniversalModuleDefinition(root, factory) {
		module.exports = factory(require$$0__default["default"], require$$1);
	})((typeof self !== 'undefined' ? self : commonjsGlobal), function(__WEBPACK_EXTERNAL_MODULE__8bbf__, __WEBPACK_EXTERNAL_MODULE_a352__) {
	return /******/ (function(modules) { // webpackBootstrap
	/******/ 	// The module cache
	/******/ 	var installedModules = {};
	/******/
	/******/ 	// The require function
	/******/ 	function __webpack_require__(moduleId) {
	/******/
	/******/ 		// Check if module is in cache
	/******/ 		if(installedModules[moduleId]) {
	/******/ 			return installedModules[moduleId].exports;
	/******/ 		}
	/******/ 		// Create a new module (and put it into the cache)
	/******/ 		var module = installedModules[moduleId] = {
	/******/ 			i: moduleId,
	/******/ 			l: false,
	/******/ 			exports: {}
	/******/ 		};
	/******/
	/******/ 		// Execute the module function
	/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
	/******/
	/******/ 		// Flag the module as loaded
	/******/ 		module.l = true;
	/******/
	/******/ 		// Return the exports of the module
	/******/ 		return module.exports;
	/******/ 	}
	/******/
	/******/
	/******/ 	// expose the modules object (__webpack_modules__)
	/******/ 	__webpack_require__.m = modules;
	/******/
	/******/ 	// expose the module cache
	/******/ 	__webpack_require__.c = installedModules;
	/******/
	/******/ 	// define getter function for harmony exports
	/******/ 	__webpack_require__.d = function(exports, name, getter) {
	/******/ 		if(!__webpack_require__.o(exports, name)) {
	/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
	/******/ 		}
	/******/ 	};
	/******/
	/******/ 	// define __esModule on exports
	/******/ 	__webpack_require__.r = function(exports) {
	/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
	/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
	/******/ 		}
	/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
	/******/ 	};
	/******/
	/******/ 	// create a fake namespace object
	/******/ 	// mode & 1: value is a module id, require it
	/******/ 	// mode & 2: merge all properties of value into the ns
	/******/ 	// mode & 4: return value when already ns object
	/******/ 	// mode & 8|1: behave like require
	/******/ 	__webpack_require__.t = function(value, mode) {
	/******/ 		if(mode & 1) value = __webpack_require__(value);
	/******/ 		if(mode & 8) return value;
	/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
	/******/ 		var ns = Object.create(null);
	/******/ 		__webpack_require__.r(ns);
	/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
	/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
	/******/ 		return ns;
	/******/ 	};
	/******/
	/******/ 	// getDefaultExport function for compatibility with non-harmony modules
	/******/ 	__webpack_require__.n = function(module) {
	/******/ 		var getter = module && module.__esModule ?
	/******/ 			function getDefault() { return module['default']; } :
	/******/ 			function getModuleExports() { return module; };
	/******/ 		__webpack_require__.d(getter, 'a', getter);
	/******/ 		return getter;
	/******/ 	};
	/******/
	/******/ 	// Object.prototype.hasOwnProperty.call
	/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
	/******/
	/******/ 	// __webpack_public_path__
	/******/ 	__webpack_require__.p = "";
	/******/
	/******/
	/******/ 	// Load entry module and return exports
	/******/ 	return __webpack_require__(__webpack_require__.s = "fb15");
	/******/ })
	/************************************************************************/
	/******/ ({

	/***/ "00ee":
	/***/ (function(module, exports, __webpack_require__) {

	var wellKnownSymbol = __webpack_require__("b622");

	var TO_STRING_TAG = wellKnownSymbol('toStringTag');
	var test = {};

	test[TO_STRING_TAG] = 'z';

	module.exports = String(test) === '[object z]';


	/***/ }),

	/***/ "0366":
	/***/ (function(module, exports, __webpack_require__) {

	var aFunction = __webpack_require__("1c0b");

	// optional / simple context binding
	module.exports = function (fn, that, length) {
	  aFunction(fn);
	  if (that === undefined) return fn;
	  switch (length) {
	    case 0: return function () {
	      return fn.call(that);
	    };
	    case 1: return function (a) {
	      return fn.call(that, a);
	    };
	    case 2: return function (a, b) {
	      return fn.call(that, a, b);
	    };
	    case 3: return function (a, b, c) {
	      return fn.call(that, a, b, c);
	    };
	  }
	  return function (/* ...args */) {
	    return fn.apply(that, arguments);
	  };
	};


	/***/ }),

	/***/ "057f":
	/***/ (function(module, exports, __webpack_require__) {

	var toIndexedObject = __webpack_require__("fc6a");
	var nativeGetOwnPropertyNames = __webpack_require__("241c").f;

	var toString = {}.toString;

	var windowNames = typeof window == 'object' && window && Object.getOwnPropertyNames
	  ? Object.getOwnPropertyNames(window) : [];

	var getWindowNames = function (it) {
	  try {
	    return nativeGetOwnPropertyNames(it);
	  } catch (error) {
	    return windowNames.slice();
	  }
	};

	// fallback for IE11 buggy Object.getOwnPropertyNames with iframe and window
	module.exports.f = function getOwnPropertyNames(it) {
	  return windowNames && toString.call(it) == '[object Window]'
	    ? getWindowNames(it)
	    : nativeGetOwnPropertyNames(toIndexedObject(it));
	};


	/***/ }),

	/***/ "06cf":
	/***/ (function(module, exports, __webpack_require__) {

	var DESCRIPTORS = __webpack_require__("83ab");
	var propertyIsEnumerableModule = __webpack_require__("d1e7");
	var createPropertyDescriptor = __webpack_require__("5c6c");
	var toIndexedObject = __webpack_require__("fc6a");
	var toPrimitive = __webpack_require__("c04e");
	var has = __webpack_require__("5135");
	var IE8_DOM_DEFINE = __webpack_require__("0cfb");

	var nativeGetOwnPropertyDescriptor = Object.getOwnPropertyDescriptor;

	// `Object.getOwnPropertyDescriptor` method
	// https://tc39.github.io/ecma262/#sec-object.getownpropertydescriptor
	exports.f = DESCRIPTORS ? nativeGetOwnPropertyDescriptor : function getOwnPropertyDescriptor(O, P) {
	  O = toIndexedObject(O);
	  P = toPrimitive(P, true);
	  if (IE8_DOM_DEFINE) try {
	    return nativeGetOwnPropertyDescriptor(O, P);
	  } catch (error) { /* empty */ }
	  if (has(O, P)) return createPropertyDescriptor(!propertyIsEnumerableModule.f.call(O, P), O[P]);
	};


	/***/ }),

	/***/ "0cfb":
	/***/ (function(module, exports, __webpack_require__) {

	var DESCRIPTORS = __webpack_require__("83ab");
	var fails = __webpack_require__("d039");
	var createElement = __webpack_require__("cc12");

	// Thank's IE8 for his funny defineProperty
	module.exports = !DESCRIPTORS && !fails(function () {
	  return Object.defineProperty(createElement('div'), 'a', {
	    get: function () { return 7; }
	  }).a != 7;
	});


	/***/ }),

	/***/ "13d5":
	/***/ (function(module, exports, __webpack_require__) {

	var $ = __webpack_require__("23e7");
	var $reduce = __webpack_require__("d58f").left;
	var arrayMethodIsStrict = __webpack_require__("a640");
	var arrayMethodUsesToLength = __webpack_require__("ae40");

	var STRICT_METHOD = arrayMethodIsStrict('reduce');
	var USES_TO_LENGTH = arrayMethodUsesToLength('reduce', { 1: 0 });

	// `Array.prototype.reduce` method
	// https://tc39.github.io/ecma262/#sec-array.prototype.reduce
	$({ target: 'Array', proto: true, forced: !STRICT_METHOD || !USES_TO_LENGTH }, {
	  reduce: function reduce(callbackfn /* , initialValue */) {
	    return $reduce(this, callbackfn, arguments.length, arguments.length > 1 ? arguments[1] : undefined);
	  }
	});


	/***/ }),

	/***/ "14c3":
	/***/ (function(module, exports, __webpack_require__) {

	var classof = __webpack_require__("c6b6");
	var regexpExec = __webpack_require__("9263");

	// `RegExpExec` abstract operation
	// https://tc39.github.io/ecma262/#sec-regexpexec
	module.exports = function (R, S) {
	  var exec = R.exec;
	  if (typeof exec === 'function') {
	    var result = exec.call(R, S);
	    if (typeof result !== 'object') {
	      throw TypeError('RegExp exec method returned something other than an Object or null');
	    }
	    return result;
	  }

	  if (classof(R) !== 'RegExp') {
	    throw TypeError('RegExp#exec called on incompatible receiver');
	  }

	  return regexpExec.call(R, S);
	};



	/***/ }),

	/***/ "159b":
	/***/ (function(module, exports, __webpack_require__) {

	var global = __webpack_require__("da84");
	var DOMIterables = __webpack_require__("fdbc");
	var forEach = __webpack_require__("17c2");
	var createNonEnumerableProperty = __webpack_require__("9112");

	for (var COLLECTION_NAME in DOMIterables) {
	  var Collection = global[COLLECTION_NAME];
	  var CollectionPrototype = Collection && Collection.prototype;
	  // some Chrome versions have non-configurable methods on DOMTokenList
	  if (CollectionPrototype && CollectionPrototype.forEach !== forEach) try {
	    createNonEnumerableProperty(CollectionPrototype, 'forEach', forEach);
	  } catch (error) {
	    CollectionPrototype.forEach = forEach;
	  }
	}


	/***/ }),

	/***/ "17c2":
	/***/ (function(module, exports, __webpack_require__) {

	var $forEach = __webpack_require__("b727").forEach;
	var arrayMethodIsStrict = __webpack_require__("a640");
	var arrayMethodUsesToLength = __webpack_require__("ae40");

	var STRICT_METHOD = arrayMethodIsStrict('forEach');
	var USES_TO_LENGTH = arrayMethodUsesToLength('forEach');

	// `Array.prototype.forEach` method implementation
	// https://tc39.github.io/ecma262/#sec-array.prototype.foreach
	module.exports = (!STRICT_METHOD || !USES_TO_LENGTH) ? function forEach(callbackfn /* , thisArg */) {
	  return $forEach(this, callbackfn, arguments.length > 1 ? arguments[1] : undefined);
	} : [].forEach;


	/***/ }),

	/***/ "1be4":
	/***/ (function(module, exports, __webpack_require__) {

	var getBuiltIn = __webpack_require__("d066");

	module.exports = getBuiltIn('document', 'documentElement');


	/***/ }),

	/***/ "1c0b":
	/***/ (function(module, exports) {

	module.exports = function (it) {
	  if (typeof it != 'function') {
	    throw TypeError(String(it) + ' is not a function');
	  } return it;
	};


	/***/ }),

	/***/ "1c7e":
	/***/ (function(module, exports, __webpack_require__) {

	var wellKnownSymbol = __webpack_require__("b622");

	var ITERATOR = wellKnownSymbol('iterator');
	var SAFE_CLOSING = false;

	try {
	  var called = 0;
	  var iteratorWithReturn = {
	    next: function () {
	      return { done: !!called++ };
	    },
	    'return': function () {
	      SAFE_CLOSING = true;
	    }
	  };
	  iteratorWithReturn[ITERATOR] = function () {
	    return this;
	  };
	  // eslint-disable-next-line no-throw-literal
	  Array.from(iteratorWithReturn, function () { throw 2; });
	} catch (error) { /* empty */ }

	module.exports = function (exec, SKIP_CLOSING) {
	  if (!SKIP_CLOSING && !SAFE_CLOSING) return false;
	  var ITERATION_SUPPORT = false;
	  try {
	    var object = {};
	    object[ITERATOR] = function () {
	      return {
	        next: function () {
	          return { done: ITERATION_SUPPORT = true };
	        }
	      };
	    };
	    exec(object);
	  } catch (error) { /* empty */ }
	  return ITERATION_SUPPORT;
	};


	/***/ }),

	/***/ "1d80":
	/***/ (function(module, exports) {

	// `RequireObjectCoercible` abstract operation
	// https://tc39.github.io/ecma262/#sec-requireobjectcoercible
	module.exports = function (it) {
	  if (it == undefined) throw TypeError("Can't call method on " + it);
	  return it;
	};


	/***/ }),

	/***/ "1dde":
	/***/ (function(module, exports, __webpack_require__) {

	var fails = __webpack_require__("d039");
	var wellKnownSymbol = __webpack_require__("b622");
	var V8_VERSION = __webpack_require__("2d00");

	var SPECIES = wellKnownSymbol('species');

	module.exports = function (METHOD_NAME) {
	  // We can't use this feature detection in V8 since it causes
	  // deoptimization and serious performance degradation
	  // https://github.com/zloirock/core-js/issues/677
	  return V8_VERSION >= 51 || !fails(function () {
	    var array = [];
	    var constructor = array.constructor = {};
	    constructor[SPECIES] = function () {
	      return { foo: 1 };
	    };
	    return array[METHOD_NAME](Boolean).foo !== 1;
	  });
	};


	/***/ }),

	/***/ "23cb":
	/***/ (function(module, exports, __webpack_require__) {

	var toInteger = __webpack_require__("a691");

	var max = Math.max;
	var min = Math.min;

	// Helper for a popular repeating case of the spec:
	// Let integer be ? ToInteger(index).
	// If integer < 0, let result be max((length + integer), 0); else let result be min(integer, length).
	module.exports = function (index, length) {
	  var integer = toInteger(index);
	  return integer < 0 ? max(integer + length, 0) : min(integer, length);
	};


	/***/ }),

	/***/ "23e7":
	/***/ (function(module, exports, __webpack_require__) {

	var global = __webpack_require__("da84");
	var getOwnPropertyDescriptor = __webpack_require__("06cf").f;
	var createNonEnumerableProperty = __webpack_require__("9112");
	var redefine = __webpack_require__("6eeb");
	var setGlobal = __webpack_require__("ce4e");
	var copyConstructorProperties = __webpack_require__("e893");
	var isForced = __webpack_require__("94ca");

	/*
	  options.target      - name of the target object
	  options.global      - target is the global object
	  options.stat        - export as static methods of target
	  options.proto       - export as prototype methods of target
	  options.real        - real prototype method for the `pure` version
	  options.forced      - export even if the native feature is available
	  options.bind        - bind methods to the target, required for the `pure` version
	  options.wrap        - wrap constructors to preventing global pollution, required for the `pure` version
	  options.unsafe      - use the simple assignment of property instead of delete + defineProperty
	  options.sham        - add a flag to not completely full polyfills
	  options.enumerable  - export as enumerable property
	  options.noTargetGet - prevent calling a getter on target
	*/
	module.exports = function (options, source) {
	  var TARGET = options.target;
	  var GLOBAL = options.global;
	  var STATIC = options.stat;
	  var FORCED, target, key, targetProperty, sourceProperty, descriptor;
	  if (GLOBAL) {
	    target = global;
	  } else if (STATIC) {
	    target = global[TARGET] || setGlobal(TARGET, {});
	  } else {
	    target = (global[TARGET] || {}).prototype;
	  }
	  if (target) for (key in source) {
	    sourceProperty = source[key];
	    if (options.noTargetGet) {
	      descriptor = getOwnPropertyDescriptor(target, key);
	      targetProperty = descriptor && descriptor.value;
	    } else targetProperty = target[key];
	    FORCED = isForced(GLOBAL ? key : TARGET + (STATIC ? '.' : '#') + key, options.forced);
	    // contained in target
	    if (!FORCED && targetProperty !== undefined) {
	      if (typeof sourceProperty === typeof targetProperty) continue;
	      copyConstructorProperties(sourceProperty, targetProperty);
	    }
	    // add a flag to not completely full polyfills
	    if (options.sham || (targetProperty && targetProperty.sham)) {
	      createNonEnumerableProperty(sourceProperty, 'sham', true);
	    }
	    // extend global
	    redefine(target, key, sourceProperty, options);
	  }
	};


	/***/ }),

	/***/ "241c":
	/***/ (function(module, exports, __webpack_require__) {

	var internalObjectKeys = __webpack_require__("ca84");
	var enumBugKeys = __webpack_require__("7839");

	var hiddenKeys = enumBugKeys.concat('length', 'prototype');

	// `Object.getOwnPropertyNames` method
	// https://tc39.github.io/ecma262/#sec-object.getownpropertynames
	exports.f = Object.getOwnPropertyNames || function getOwnPropertyNames(O) {
	  return internalObjectKeys(O, hiddenKeys);
	};


	/***/ }),

	/***/ "25f0":
	/***/ (function(module, exports, __webpack_require__) {

	var redefine = __webpack_require__("6eeb");
	var anObject = __webpack_require__("825a");
	var fails = __webpack_require__("d039");
	var flags = __webpack_require__("ad6d");

	var TO_STRING = 'toString';
	var RegExpPrototype = RegExp.prototype;
	var nativeToString = RegExpPrototype[TO_STRING];

	var NOT_GENERIC = fails(function () { return nativeToString.call({ source: 'a', flags: 'b' }) != '/a/b'; });
	// FF44- RegExp#toString has a wrong name
	var INCORRECT_NAME = nativeToString.name != TO_STRING;

	// `RegExp.prototype.toString` method
	// https://tc39.github.io/ecma262/#sec-regexp.prototype.tostring
	if (NOT_GENERIC || INCORRECT_NAME) {
	  redefine(RegExp.prototype, TO_STRING, function toString() {
	    var R = anObject(this);
	    var p = String(R.source);
	    var rf = R.flags;
	    var f = String(rf === undefined && R instanceof RegExp && !('flags' in RegExpPrototype) ? flags.call(R) : rf);
	    return '/' + p + '/' + f;
	  }, { unsafe: true });
	}


	/***/ }),

	/***/ "2ca0":
	/***/ (function(module, exports, __webpack_require__) {

	var $ = __webpack_require__("23e7");
	var getOwnPropertyDescriptor = __webpack_require__("06cf").f;
	var toLength = __webpack_require__("50c4");
	var notARegExp = __webpack_require__("5a34");
	var requireObjectCoercible = __webpack_require__("1d80");
	var correctIsRegExpLogic = __webpack_require__("ab13");
	var IS_PURE = __webpack_require__("c430");

	var nativeStartsWith = ''.startsWith;
	var min = Math.min;

	var CORRECT_IS_REGEXP_LOGIC = correctIsRegExpLogic('startsWith');
	// https://github.com/zloirock/core-js/pull/702
	var MDN_POLYFILL_BUG = !IS_PURE && !CORRECT_IS_REGEXP_LOGIC && !!function () {
	  var descriptor = getOwnPropertyDescriptor(String.prototype, 'startsWith');
	  return descriptor && !descriptor.writable;
	}();

	// `String.prototype.startsWith` method
	// https://tc39.github.io/ecma262/#sec-string.prototype.startswith
	$({ target: 'String', proto: true, forced: !MDN_POLYFILL_BUG && !CORRECT_IS_REGEXP_LOGIC }, {
	  startsWith: function startsWith(searchString /* , position = 0 */) {
	    var that = String(requireObjectCoercible(this));
	    notARegExp(searchString);
	    var index = toLength(min(arguments.length > 1 ? arguments[1] : undefined, that.length));
	    var search = String(searchString);
	    return nativeStartsWith
	      ? nativeStartsWith.call(that, search, index)
	      : that.slice(index, index + search.length) === search;
	  }
	});


	/***/ }),

	/***/ "2d00":
	/***/ (function(module, exports, __webpack_require__) {

	var global = __webpack_require__("da84");
	var userAgent = __webpack_require__("342f");

	var process = global.process;
	var versions = process && process.versions;
	var v8 = versions && versions.v8;
	var match, version;

	if (v8) {
	  match = v8.split('.');
	  version = match[0] + match[1];
	} else if (userAgent) {
	  match = userAgent.match(/Edge\/(\d+)/);
	  if (!match || match[1] >= 74) {
	    match = userAgent.match(/Chrome\/(\d+)/);
	    if (match) version = match[1];
	  }
	}

	module.exports = version && +version;


	/***/ }),

	/***/ "342f":
	/***/ (function(module, exports, __webpack_require__) {

	var getBuiltIn = __webpack_require__("d066");

	module.exports = getBuiltIn('navigator', 'userAgent') || '';


	/***/ }),

	/***/ "35a1":
	/***/ (function(module, exports, __webpack_require__) {

	var classof = __webpack_require__("f5df");
	var Iterators = __webpack_require__("3f8c");
	var wellKnownSymbol = __webpack_require__("b622");

	var ITERATOR = wellKnownSymbol('iterator');

	module.exports = function (it) {
	  if (it != undefined) return it[ITERATOR]
	    || it['@@iterator']
	    || Iterators[classof(it)];
	};


	/***/ }),

	/***/ "37e8":
	/***/ (function(module, exports, __webpack_require__) {

	var DESCRIPTORS = __webpack_require__("83ab");
	var definePropertyModule = __webpack_require__("9bf2");
	var anObject = __webpack_require__("825a");
	var objectKeys = __webpack_require__("df75");

	// `Object.defineProperties` method
	// https://tc39.github.io/ecma262/#sec-object.defineproperties
	module.exports = DESCRIPTORS ? Object.defineProperties : function defineProperties(O, Properties) {
	  anObject(O);
	  var keys = objectKeys(Properties);
	  var length = keys.length;
	  var index = 0;
	  var key;
	  while (length > index) definePropertyModule.f(O, key = keys[index++], Properties[key]);
	  return O;
	};


	/***/ }),

	/***/ "3bbe":
	/***/ (function(module, exports, __webpack_require__) {

	var isObject = __webpack_require__("861d");

	module.exports = function (it) {
	  if (!isObject(it) && it !== null) {
	    throw TypeError("Can't set " + String(it) + ' as a prototype');
	  } return it;
	};


	/***/ }),

	/***/ "3ca3":
	/***/ (function(module, exports, __webpack_require__) {

	var charAt = __webpack_require__("6547").charAt;
	var InternalStateModule = __webpack_require__("69f3");
	var defineIterator = __webpack_require__("7dd0");

	var STRING_ITERATOR = 'String Iterator';
	var setInternalState = InternalStateModule.set;
	var getInternalState = InternalStateModule.getterFor(STRING_ITERATOR);

	// `String.prototype[@@iterator]` method
	// https://tc39.github.io/ecma262/#sec-string.prototype-@@iterator
	defineIterator(String, 'String', function (iterated) {
	  setInternalState(this, {
	    type: STRING_ITERATOR,
	    string: String(iterated),
	    index: 0
	  });
	// `%StringIteratorPrototype%.next` method
	// https://tc39.github.io/ecma262/#sec-%stringiteratorprototype%.next
	}, function next() {
	  var state = getInternalState(this);
	  var string = state.string;
	  var index = state.index;
	  var point;
	  if (index >= string.length) return { value: undefined, done: true };
	  point = charAt(string, index);
	  state.index += point.length;
	  return { value: point, done: false };
	});


	/***/ }),

	/***/ "3f8c":
	/***/ (function(module, exports) {

	module.exports = {};


	/***/ }),

	/***/ "4160":
	/***/ (function(module, exports, __webpack_require__) {

	var $ = __webpack_require__("23e7");
	var forEach = __webpack_require__("17c2");

	// `Array.prototype.forEach` method
	// https://tc39.github.io/ecma262/#sec-array.prototype.foreach
	$({ target: 'Array', proto: true, forced: [].forEach != forEach }, {
	  forEach: forEach
	});


	/***/ }),

	/***/ "428f":
	/***/ (function(module, exports, __webpack_require__) {

	var global = __webpack_require__("da84");

	module.exports = global;


	/***/ }),

	/***/ "44ad":
	/***/ (function(module, exports, __webpack_require__) {

	var fails = __webpack_require__("d039");
	var classof = __webpack_require__("c6b6");

	var split = ''.split;

	// fallback for non-array-like ES3 and non-enumerable old V8 strings
	module.exports = fails(function () {
	  // throws an error in rhino, see https://github.com/mozilla/rhino/issues/346
	  // eslint-disable-next-line no-prototype-builtins
	  return !Object('z').propertyIsEnumerable(0);
	}) ? function (it) {
	  return classof(it) == 'String' ? split.call(it, '') : Object(it);
	} : Object;


	/***/ }),

	/***/ "44d2":
	/***/ (function(module, exports, __webpack_require__) {

	var wellKnownSymbol = __webpack_require__("b622");
	var create = __webpack_require__("7c73");
	var definePropertyModule = __webpack_require__("9bf2");

	var UNSCOPABLES = wellKnownSymbol('unscopables');
	var ArrayPrototype = Array.prototype;

	// Array.prototype[@@unscopables]
	// https://tc39.github.io/ecma262/#sec-array.prototype-@@unscopables
	if (ArrayPrototype[UNSCOPABLES] == undefined) {
	  definePropertyModule.f(ArrayPrototype, UNSCOPABLES, {
	    configurable: true,
	    value: create(null)
	  });
	}

	// add a key to Array.prototype[@@unscopables]
	module.exports = function (key) {
	  ArrayPrototype[UNSCOPABLES][key] = true;
	};


	/***/ }),

	/***/ "44e7":
	/***/ (function(module, exports, __webpack_require__) {

	var isObject = __webpack_require__("861d");
	var classof = __webpack_require__("c6b6");
	var wellKnownSymbol = __webpack_require__("b622");

	var MATCH = wellKnownSymbol('match');

	// `IsRegExp` abstract operation
	// https://tc39.github.io/ecma262/#sec-isregexp
	module.exports = function (it) {
	  var isRegExp;
	  return isObject(it) && ((isRegExp = it[MATCH]) !== undefined ? !!isRegExp : classof(it) == 'RegExp');
	};


	/***/ }),

	/***/ "4930":
	/***/ (function(module, exports, __webpack_require__) {

	var fails = __webpack_require__("d039");

	module.exports = !!Object.getOwnPropertySymbols && !fails(function () {
	  // Chrome 38 Symbol has incorrect toString conversion
	  // eslint-disable-next-line no-undef
	  return !String(Symbol());
	});


	/***/ }),

	/***/ "4d64":
	/***/ (function(module, exports, __webpack_require__) {

	var toIndexedObject = __webpack_require__("fc6a");
	var toLength = __webpack_require__("50c4");
	var toAbsoluteIndex = __webpack_require__("23cb");

	// `Array.prototype.{ indexOf, includes }` methods implementation
	var createMethod = function (IS_INCLUDES) {
	  return function ($this, el, fromIndex) {
	    var O = toIndexedObject($this);
	    var length = toLength(O.length);
	    var index = toAbsoluteIndex(fromIndex, length);
	    var value;
	    // Array#includes uses SameValueZero equality algorithm
	    // eslint-disable-next-line no-self-compare
	    if (IS_INCLUDES && el != el) while (length > index) {
	      value = O[index++];
	      // eslint-disable-next-line no-self-compare
	      if (value != value) return true;
	    // Array#indexOf ignores holes, Array#includes - not
	    } else for (;length > index; index++) {
	      if ((IS_INCLUDES || index in O) && O[index] === el) return IS_INCLUDES || index || 0;
	    } return !IS_INCLUDES && -1;
	  };
	};

	module.exports = {
	  // `Array.prototype.includes` method
	  // https://tc39.github.io/ecma262/#sec-array.prototype.includes
	  includes: createMethod(true),
	  // `Array.prototype.indexOf` method
	  // https://tc39.github.io/ecma262/#sec-array.prototype.indexof
	  indexOf: createMethod(false)
	};


	/***/ }),

	/***/ "4de4":
	/***/ (function(module, exports, __webpack_require__) {

	var $ = __webpack_require__("23e7");
	var $filter = __webpack_require__("b727").filter;
	var arrayMethodHasSpeciesSupport = __webpack_require__("1dde");
	var arrayMethodUsesToLength = __webpack_require__("ae40");

	var HAS_SPECIES_SUPPORT = arrayMethodHasSpeciesSupport('filter');
	// Edge 14- issue
	var USES_TO_LENGTH = arrayMethodUsesToLength('filter');

	// `Array.prototype.filter` method
	// https://tc39.github.io/ecma262/#sec-array.prototype.filter
	// with adding support of @@species
	$({ target: 'Array', proto: true, forced: !HAS_SPECIES_SUPPORT || !USES_TO_LENGTH }, {
	  filter: function filter(callbackfn /* , thisArg */) {
	    return $filter(this, callbackfn, arguments.length > 1 ? arguments[1] : undefined);
	  }
	});


	/***/ }),

	/***/ "4df4":
	/***/ (function(module, exports, __webpack_require__) {

	var bind = __webpack_require__("0366");
	var toObject = __webpack_require__("7b0b");
	var callWithSafeIterationClosing = __webpack_require__("9bdd");
	var isArrayIteratorMethod = __webpack_require__("e95a");
	var toLength = __webpack_require__("50c4");
	var createProperty = __webpack_require__("8418");
	var getIteratorMethod = __webpack_require__("35a1");

	// `Array.from` method implementation
	// https://tc39.github.io/ecma262/#sec-array.from
	module.exports = function from(arrayLike /* , mapfn = undefined, thisArg = undefined */) {
	  var O = toObject(arrayLike);
	  var C = typeof this == 'function' ? this : Array;
	  var argumentsLength = arguments.length;
	  var mapfn = argumentsLength > 1 ? arguments[1] : undefined;
	  var mapping = mapfn !== undefined;
	  var iteratorMethod = getIteratorMethod(O);
	  var index = 0;
	  var length, result, step, iterator, next, value;
	  if (mapping) mapfn = bind(mapfn, argumentsLength > 2 ? arguments[2] : undefined, 2);
	  // if the target is not iterable or it's an array with the default iterator - use a simple case
	  if (iteratorMethod != undefined && !(C == Array && isArrayIteratorMethod(iteratorMethod))) {
	    iterator = iteratorMethod.call(O);
	    next = iterator.next;
	    result = new C();
	    for (;!(step = next.call(iterator)).done; index++) {
	      value = mapping ? callWithSafeIterationClosing(iterator, mapfn, [step.value, index], true) : step.value;
	      createProperty(result, index, value);
	    }
	  } else {
	    length = toLength(O.length);
	    result = new C(length);
	    for (;length > index; index++) {
	      value = mapping ? mapfn(O[index], index) : O[index];
	      createProperty(result, index, value);
	    }
	  }
	  result.length = index;
	  return result;
	};


	/***/ }),

	/***/ "4fad":
	/***/ (function(module, exports, __webpack_require__) {

	var $ = __webpack_require__("23e7");
	var $entries = __webpack_require__("6f53").entries;

	// `Object.entries` method
	// https://tc39.github.io/ecma262/#sec-object.entries
	$({ target: 'Object', stat: true }, {
	  entries: function entries(O) {
	    return $entries(O);
	  }
	});


	/***/ }),

	/***/ "50c4":
	/***/ (function(module, exports, __webpack_require__) {

	var toInteger = __webpack_require__("a691");

	var min = Math.min;

	// `ToLength` abstract operation
	// https://tc39.github.io/ecma262/#sec-tolength
	module.exports = function (argument) {
	  return argument > 0 ? min(toInteger(argument), 0x1FFFFFFFFFFFFF) : 0; // 2 ** 53 - 1 == 9007199254740991
	};


	/***/ }),

	/***/ "5135":
	/***/ (function(module, exports) {

	var hasOwnProperty = {}.hasOwnProperty;

	module.exports = function (it, key) {
	  return hasOwnProperty.call(it, key);
	};


	/***/ }),

	/***/ "5319":
	/***/ (function(module, exports, __webpack_require__) {

	var fixRegExpWellKnownSymbolLogic = __webpack_require__("d784");
	var anObject = __webpack_require__("825a");
	var toObject = __webpack_require__("7b0b");
	var toLength = __webpack_require__("50c4");
	var toInteger = __webpack_require__("a691");
	var requireObjectCoercible = __webpack_require__("1d80");
	var advanceStringIndex = __webpack_require__("8aa5");
	var regExpExec = __webpack_require__("14c3");

	var max = Math.max;
	var min = Math.min;
	var floor = Math.floor;
	var SUBSTITUTION_SYMBOLS = /\$([$&'`]|\d\d?|<[^>]*>)/g;
	var SUBSTITUTION_SYMBOLS_NO_NAMED = /\$([$&'`]|\d\d?)/g;

	var maybeToString = function (it) {
	  return it === undefined ? it : String(it);
	};

	// @@replace logic
	fixRegExpWellKnownSymbolLogic('replace', 2, function (REPLACE, nativeReplace, maybeCallNative, reason) {
	  var REGEXP_REPLACE_SUBSTITUTES_UNDEFINED_CAPTURE = reason.REGEXP_REPLACE_SUBSTITUTES_UNDEFINED_CAPTURE;
	  var REPLACE_KEEPS_$0 = reason.REPLACE_KEEPS_$0;
	  var UNSAFE_SUBSTITUTE = REGEXP_REPLACE_SUBSTITUTES_UNDEFINED_CAPTURE ? '$' : '$0';

	  return [
	    // `String.prototype.replace` method
	    // https://tc39.github.io/ecma262/#sec-string.prototype.replace
	    function replace(searchValue, replaceValue) {
	      var O = requireObjectCoercible(this);
	      var replacer = searchValue == undefined ? undefined : searchValue[REPLACE];
	      return replacer !== undefined
	        ? replacer.call(searchValue, O, replaceValue)
	        : nativeReplace.call(String(O), searchValue, replaceValue);
	    },
	    // `RegExp.prototype[@@replace]` method
	    // https://tc39.github.io/ecma262/#sec-regexp.prototype-@@replace
	    function (regexp, replaceValue) {
	      if (
	        (!REGEXP_REPLACE_SUBSTITUTES_UNDEFINED_CAPTURE && REPLACE_KEEPS_$0) ||
	        (typeof replaceValue === 'string' && replaceValue.indexOf(UNSAFE_SUBSTITUTE) === -1)
	      ) {
	        var res = maybeCallNative(nativeReplace, regexp, this, replaceValue);
	        if (res.done) return res.value;
	      }

	      var rx = anObject(regexp);
	      var S = String(this);

	      var functionalReplace = typeof replaceValue === 'function';
	      if (!functionalReplace) replaceValue = String(replaceValue);

	      var global = rx.global;
	      if (global) {
	        var fullUnicode = rx.unicode;
	        rx.lastIndex = 0;
	      }
	      var results = [];
	      while (true) {
	        var result = regExpExec(rx, S);
	        if (result === null) break;

	        results.push(result);
	        if (!global) break;

	        var matchStr = String(result[0]);
	        if (matchStr === '') rx.lastIndex = advanceStringIndex(S, toLength(rx.lastIndex), fullUnicode);
	      }

	      var accumulatedResult = '';
	      var nextSourcePosition = 0;
	      for (var i = 0; i < results.length; i++) {
	        result = results[i];

	        var matched = String(result[0]);
	        var position = max(min(toInteger(result.index), S.length), 0);
	        var captures = [];
	        // NOTE: This is equivalent to
	        //   captures = result.slice(1).map(maybeToString)
	        // but for some reason `nativeSlice.call(result, 1, result.length)` (called in
	        // the slice polyfill when slicing native arrays) "doesn't work" in safari 9 and
	        // causes a crash (https://pastebin.com/N21QzeQA) when trying to debug it.
	        for (var j = 1; j < result.length; j++) captures.push(maybeToString(result[j]));
	        var namedCaptures = result.groups;
	        if (functionalReplace) {
	          var replacerArgs = [matched].concat(captures, position, S);
	          if (namedCaptures !== undefined) replacerArgs.push(namedCaptures);
	          var replacement = String(replaceValue.apply(undefined, replacerArgs));
	        } else {
	          replacement = getSubstitution(matched, S, position, captures, namedCaptures, replaceValue);
	        }
	        if (position >= nextSourcePosition) {
	          accumulatedResult += S.slice(nextSourcePosition, position) + replacement;
	          nextSourcePosition = position + matched.length;
	        }
	      }
	      return accumulatedResult + S.slice(nextSourcePosition);
	    }
	  ];

	  // https://tc39.github.io/ecma262/#sec-getsubstitution
	  function getSubstitution(matched, str, position, captures, namedCaptures, replacement) {
	    var tailPos = position + matched.length;
	    var m = captures.length;
	    var symbols = SUBSTITUTION_SYMBOLS_NO_NAMED;
	    if (namedCaptures !== undefined) {
	      namedCaptures = toObject(namedCaptures);
	      symbols = SUBSTITUTION_SYMBOLS;
	    }
	    return nativeReplace.call(replacement, symbols, function (match, ch) {
	      var capture;
	      switch (ch.charAt(0)) {
	        case '$': return '$';
	        case '&': return matched;
	        case '`': return str.slice(0, position);
	        case "'": return str.slice(tailPos);
	        case '<':
	          capture = namedCaptures[ch.slice(1, -1)];
	          break;
	        default: // \d\d?
	          var n = +ch;
	          if (n === 0) return match;
	          if (n > m) {
	            var f = floor(n / 10);
	            if (f === 0) return match;
	            if (f <= m) return captures[f - 1] === undefined ? ch.charAt(1) : captures[f - 1] + ch.charAt(1);
	            return match;
	          }
	          capture = captures[n - 1];
	      }
	      return capture === undefined ? '' : capture;
	    });
	  }
	});


	/***/ }),

	/***/ "5692":
	/***/ (function(module, exports, __webpack_require__) {

	var IS_PURE = __webpack_require__("c430");
	var store = __webpack_require__("c6cd");

	(module.exports = function (key, value) {
	  return store[key] || (store[key] = value !== undefined ? value : {});
	})('versions', []).push({
	  version: '3.6.5',
	  mode: IS_PURE ? 'pure' : 'global',
	  copyright: '© 2020 Denis Pushkarev (zloirock.ru)'
	});


	/***/ }),

	/***/ "56ef":
	/***/ (function(module, exports, __webpack_require__) {

	var getBuiltIn = __webpack_require__("d066");
	var getOwnPropertyNamesModule = __webpack_require__("241c");
	var getOwnPropertySymbolsModule = __webpack_require__("7418");
	var anObject = __webpack_require__("825a");

	// all object keys, includes non-enumerable and symbols
	module.exports = getBuiltIn('Reflect', 'ownKeys') || function ownKeys(it) {
	  var keys = getOwnPropertyNamesModule.f(anObject(it));
	  var getOwnPropertySymbols = getOwnPropertySymbolsModule.f;
	  return getOwnPropertySymbols ? keys.concat(getOwnPropertySymbols(it)) : keys;
	};


	/***/ }),

	/***/ "5a34":
	/***/ (function(module, exports, __webpack_require__) {

	var isRegExp = __webpack_require__("44e7");

	module.exports = function (it) {
	  if (isRegExp(it)) {
	    throw TypeError("The method doesn't accept regular expressions");
	  } return it;
	};


	/***/ }),

	/***/ "5c6c":
	/***/ (function(module, exports) {

	module.exports = function (bitmap, value) {
	  return {
	    enumerable: !(bitmap & 1),
	    configurable: !(bitmap & 2),
	    writable: !(bitmap & 4),
	    value: value
	  };
	};


	/***/ }),

	/***/ "5db7":
	/***/ (function(module, exports, __webpack_require__) {

	var $ = __webpack_require__("23e7");
	var flattenIntoArray = __webpack_require__("a2bf");
	var toObject = __webpack_require__("7b0b");
	var toLength = __webpack_require__("50c4");
	var aFunction = __webpack_require__("1c0b");
	var arraySpeciesCreate = __webpack_require__("65f0");

	// `Array.prototype.flatMap` method
	// https://github.com/tc39/proposal-flatMap
	$({ target: 'Array', proto: true }, {
	  flatMap: function flatMap(callbackfn /* , thisArg */) {
	    var O = toObject(this);
	    var sourceLen = toLength(O.length);
	    var A;
	    aFunction(callbackfn);
	    A = arraySpeciesCreate(O, 0);
	    A.length = flattenIntoArray(A, O, O, sourceLen, 0, 1, callbackfn, arguments.length > 1 ? arguments[1] : undefined);
	    return A;
	  }
	});


	/***/ }),

	/***/ "6547":
	/***/ (function(module, exports, __webpack_require__) {

	var toInteger = __webpack_require__("a691");
	var requireObjectCoercible = __webpack_require__("1d80");

	// `String.prototype.{ codePointAt, at }` methods implementation
	var createMethod = function (CONVERT_TO_STRING) {
	  return function ($this, pos) {
	    var S = String(requireObjectCoercible($this));
	    var position = toInteger(pos);
	    var size = S.length;
	    var first, second;
	    if (position < 0 || position >= size) return CONVERT_TO_STRING ? '' : undefined;
	    first = S.charCodeAt(position);
	    return first < 0xD800 || first > 0xDBFF || position + 1 === size
	      || (second = S.charCodeAt(position + 1)) < 0xDC00 || second > 0xDFFF
	        ? CONVERT_TO_STRING ? S.charAt(position) : first
	        : CONVERT_TO_STRING ? S.slice(position, position + 2) : (first - 0xD800 << 10) + (second - 0xDC00) + 0x10000;
	  };
	};

	module.exports = {
	  // `String.prototype.codePointAt` method
	  // https://tc39.github.io/ecma262/#sec-string.prototype.codepointat
	  codeAt: createMethod(false),
	  // `String.prototype.at` method
	  // https://github.com/mathiasbynens/String.prototype.at
	  charAt: createMethod(true)
	};


	/***/ }),

	/***/ "65f0":
	/***/ (function(module, exports, __webpack_require__) {

	var isObject = __webpack_require__("861d");
	var isArray = __webpack_require__("e8b5");
	var wellKnownSymbol = __webpack_require__("b622");

	var SPECIES = wellKnownSymbol('species');

	// `ArraySpeciesCreate` abstract operation
	// https://tc39.github.io/ecma262/#sec-arrayspeciescreate
	module.exports = function (originalArray, length) {
	  var C;
	  if (isArray(originalArray)) {
	    C = originalArray.constructor;
	    // cross-realm fallback
	    if (typeof C == 'function' && (C === Array || isArray(C.prototype))) C = undefined;
	    else if (isObject(C)) {
	      C = C[SPECIES];
	      if (C === null) C = undefined;
	    }
	  } return new (C === undefined ? Array : C)(length === 0 ? 0 : length);
	};


	/***/ }),

	/***/ "69f3":
	/***/ (function(module, exports, __webpack_require__) {

	var NATIVE_WEAK_MAP = __webpack_require__("7f9a");
	var global = __webpack_require__("da84");
	var isObject = __webpack_require__("861d");
	var createNonEnumerableProperty = __webpack_require__("9112");
	var objectHas = __webpack_require__("5135");
	var sharedKey = __webpack_require__("f772");
	var hiddenKeys = __webpack_require__("d012");

	var WeakMap = global.WeakMap;
	var set, get, has;

	var enforce = function (it) {
	  return has(it) ? get(it) : set(it, {});
	};

	var getterFor = function (TYPE) {
	  return function (it) {
	    var state;
	    if (!isObject(it) || (state = get(it)).type !== TYPE) {
	      throw TypeError('Incompatible receiver, ' + TYPE + ' required');
	    } return state;
	  };
	};

	if (NATIVE_WEAK_MAP) {
	  var store = new WeakMap();
	  var wmget = store.get;
	  var wmhas = store.has;
	  var wmset = store.set;
	  set = function (it, metadata) {
	    wmset.call(store, it, metadata);
	    return metadata;
	  };
	  get = function (it) {
	    return wmget.call(store, it) || {};
	  };
	  has = function (it) {
	    return wmhas.call(store, it);
	  };
	} else {
	  var STATE = sharedKey('state');
	  hiddenKeys[STATE] = true;
	  set = function (it, metadata) {
	    createNonEnumerableProperty(it, STATE, metadata);
	    return metadata;
	  };
	  get = function (it) {
	    return objectHas(it, STATE) ? it[STATE] : {};
	  };
	  has = function (it) {
	    return objectHas(it, STATE);
	  };
	}

	module.exports = {
	  set: set,
	  get: get,
	  has: has,
	  enforce: enforce,
	  getterFor: getterFor
	};


	/***/ }),

	/***/ "6eeb":
	/***/ (function(module, exports, __webpack_require__) {

	var global = __webpack_require__("da84");
	var createNonEnumerableProperty = __webpack_require__("9112");
	var has = __webpack_require__("5135");
	var setGlobal = __webpack_require__("ce4e");
	var inspectSource = __webpack_require__("8925");
	var InternalStateModule = __webpack_require__("69f3");

	var getInternalState = InternalStateModule.get;
	var enforceInternalState = InternalStateModule.enforce;
	var TEMPLATE = String(String).split('String');

	(module.exports = function (O, key, value, options) {
	  var unsafe = options ? !!options.unsafe : false;
	  var simple = options ? !!options.enumerable : false;
	  var noTargetGet = options ? !!options.noTargetGet : false;
	  if (typeof value == 'function') {
	    if (typeof key == 'string' && !has(value, 'name')) createNonEnumerableProperty(value, 'name', key);
	    enforceInternalState(value).source = TEMPLATE.join(typeof key == 'string' ? key : '');
	  }
	  if (O === global) {
	    if (simple) O[key] = value;
	    else setGlobal(key, value);
	    return;
	  } else if (!unsafe) {
	    delete O[key];
	  } else if (!noTargetGet && O[key]) {
	    simple = true;
	  }
	  if (simple) O[key] = value;
	  else createNonEnumerableProperty(O, key, value);
	// add fake Function#toString for correct work wrapped methods / constructors with methods like LoDash isNative
	})(Function.prototype, 'toString', function toString() {
	  return typeof this == 'function' && getInternalState(this).source || inspectSource(this);
	});


	/***/ }),

	/***/ "6f53":
	/***/ (function(module, exports, __webpack_require__) {

	var DESCRIPTORS = __webpack_require__("83ab");
	var objectKeys = __webpack_require__("df75");
	var toIndexedObject = __webpack_require__("fc6a");
	var propertyIsEnumerable = __webpack_require__("d1e7").f;

	// `Object.{ entries, values }` methods implementation
	var createMethod = function (TO_ENTRIES) {
	  return function (it) {
	    var O = toIndexedObject(it);
	    var keys = objectKeys(O);
	    var length = keys.length;
	    var i = 0;
	    var result = [];
	    var key;
	    while (length > i) {
	      key = keys[i++];
	      if (!DESCRIPTORS || propertyIsEnumerable.call(O, key)) {
	        result.push(TO_ENTRIES ? [key, O[key]] : O[key]);
	      }
	    }
	    return result;
	  };
	};

	module.exports = {
	  // `Object.entries` method
	  // https://tc39.github.io/ecma262/#sec-object.entries
	  entries: createMethod(true),
	  // `Object.values` method
	  // https://tc39.github.io/ecma262/#sec-object.values
	  values: createMethod(false)
	};


	/***/ }),

	/***/ "73d9":
	/***/ (function(module, exports, __webpack_require__) {

	// this method was added to unscopables after implementation
	// in popular engines, so it's moved to a separate module
	var addToUnscopables = __webpack_require__("44d2");

	addToUnscopables('flatMap');


	/***/ }),

	/***/ "7418":
	/***/ (function(module, exports) {

	exports.f = Object.getOwnPropertySymbols;


	/***/ }),

	/***/ "746f":
	/***/ (function(module, exports, __webpack_require__) {

	var path = __webpack_require__("428f");
	var has = __webpack_require__("5135");
	var wrappedWellKnownSymbolModule = __webpack_require__("e538");
	var defineProperty = __webpack_require__("9bf2").f;

	module.exports = function (NAME) {
	  var Symbol = path.Symbol || (path.Symbol = {});
	  if (!has(Symbol, NAME)) defineProperty(Symbol, NAME, {
	    value: wrappedWellKnownSymbolModule.f(NAME)
	  });
	};


	/***/ }),

	/***/ "7839":
	/***/ (function(module, exports) {

	// IE8- don't enum bug keys
	module.exports = [
	  'constructor',
	  'hasOwnProperty',
	  'isPrototypeOf',
	  'propertyIsEnumerable',
	  'toLocaleString',
	  'toString',
	  'valueOf'
	];


	/***/ }),

	/***/ "7b0b":
	/***/ (function(module, exports, __webpack_require__) {

	var requireObjectCoercible = __webpack_require__("1d80");

	// `ToObject` abstract operation
	// https://tc39.github.io/ecma262/#sec-toobject
	module.exports = function (argument) {
	  return Object(requireObjectCoercible(argument));
	};


	/***/ }),

	/***/ "7c73":
	/***/ (function(module, exports, __webpack_require__) {

	var anObject = __webpack_require__("825a");
	var defineProperties = __webpack_require__("37e8");
	var enumBugKeys = __webpack_require__("7839");
	var hiddenKeys = __webpack_require__("d012");
	var html = __webpack_require__("1be4");
	var documentCreateElement = __webpack_require__("cc12");
	var sharedKey = __webpack_require__("f772");

	var GT = '>';
	var LT = '<';
	var PROTOTYPE = 'prototype';
	var SCRIPT = 'script';
	var IE_PROTO = sharedKey('IE_PROTO');

	var EmptyConstructor = function () { /* empty */ };

	var scriptTag = function (content) {
	  return LT + SCRIPT + GT + content + LT + '/' + SCRIPT + GT;
	};

	// Create object with fake `null` prototype: use ActiveX Object with cleared prototype
	var NullProtoObjectViaActiveX = function (activeXDocument) {
	  activeXDocument.write(scriptTag(''));
	  activeXDocument.close();
	  var temp = activeXDocument.parentWindow.Object;
	  activeXDocument = null; // avoid memory leak
	  return temp;
	};

	// Create object with fake `null` prototype: use iframe Object with cleared prototype
	var NullProtoObjectViaIFrame = function () {
	  // Thrash, waste and sodomy: IE GC bug
	  var iframe = documentCreateElement('iframe');
	  var JS = 'java' + SCRIPT + ':';
	  var iframeDocument;
	  iframe.style.display = 'none';
	  html.appendChild(iframe);
	  // https://github.com/zloirock/core-js/issues/475
	  iframe.src = String(JS);
	  iframeDocument = iframe.contentWindow.document;
	  iframeDocument.open();
	  iframeDocument.write(scriptTag('document.F=Object'));
	  iframeDocument.close();
	  return iframeDocument.F;
	};

	// Check for document.domain and active x support
	// No need to use active x approach when document.domain is not set
	// see https://github.com/es-shims/es5-shim/issues/150
	// variation of https://github.com/kitcambridge/es5-shim/commit/4f738ac066346
	// avoid IE GC bug
	var activeXDocument;
	var NullProtoObject = function () {
	  try {
	    /* global ActiveXObject */
	    activeXDocument = document.domain && new ActiveXObject('htmlfile');
	  } catch (error) { /* ignore */ }
	  NullProtoObject = activeXDocument ? NullProtoObjectViaActiveX(activeXDocument) : NullProtoObjectViaIFrame();
	  var length = enumBugKeys.length;
	  while (length--) delete NullProtoObject[PROTOTYPE][enumBugKeys[length]];
	  return NullProtoObject();
	};

	hiddenKeys[IE_PROTO] = true;

	// `Object.create` method
	// https://tc39.github.io/ecma262/#sec-object.create
	module.exports = Object.create || function create(O, Properties) {
	  var result;
	  if (O !== null) {
	    EmptyConstructor[PROTOTYPE] = anObject(O);
	    result = new EmptyConstructor();
	    EmptyConstructor[PROTOTYPE] = null;
	    // add "__proto__" for Object.getPrototypeOf polyfill
	    result[IE_PROTO] = O;
	  } else result = NullProtoObject();
	  return Properties === undefined ? result : defineProperties(result, Properties);
	};


	/***/ }),

	/***/ "7dd0":
	/***/ (function(module, exports, __webpack_require__) {

	var $ = __webpack_require__("23e7");
	var createIteratorConstructor = __webpack_require__("9ed3");
	var getPrototypeOf = __webpack_require__("e163");
	var setPrototypeOf = __webpack_require__("d2bb");
	var setToStringTag = __webpack_require__("d44e");
	var createNonEnumerableProperty = __webpack_require__("9112");
	var redefine = __webpack_require__("6eeb");
	var wellKnownSymbol = __webpack_require__("b622");
	var IS_PURE = __webpack_require__("c430");
	var Iterators = __webpack_require__("3f8c");
	var IteratorsCore = __webpack_require__("ae93");

	var IteratorPrototype = IteratorsCore.IteratorPrototype;
	var BUGGY_SAFARI_ITERATORS = IteratorsCore.BUGGY_SAFARI_ITERATORS;
	var ITERATOR = wellKnownSymbol('iterator');
	var KEYS = 'keys';
	var VALUES = 'values';
	var ENTRIES = 'entries';

	var returnThis = function () { return this; };

	module.exports = function (Iterable, NAME, IteratorConstructor, next, DEFAULT, IS_SET, FORCED) {
	  createIteratorConstructor(IteratorConstructor, NAME, next);

	  var getIterationMethod = function (KIND) {
	    if (KIND === DEFAULT && defaultIterator) return defaultIterator;
	    if (!BUGGY_SAFARI_ITERATORS && KIND in IterablePrototype) return IterablePrototype[KIND];
	    switch (KIND) {
	      case KEYS: return function keys() { return new IteratorConstructor(this, KIND); };
	      case VALUES: return function values() { return new IteratorConstructor(this, KIND); };
	      case ENTRIES: return function entries() { return new IteratorConstructor(this, KIND); };
	    } return function () { return new IteratorConstructor(this); };
	  };

	  var TO_STRING_TAG = NAME + ' Iterator';
	  var INCORRECT_VALUES_NAME = false;
	  var IterablePrototype = Iterable.prototype;
	  var nativeIterator = IterablePrototype[ITERATOR]
	    || IterablePrototype['@@iterator']
	    || DEFAULT && IterablePrototype[DEFAULT];
	  var defaultIterator = !BUGGY_SAFARI_ITERATORS && nativeIterator || getIterationMethod(DEFAULT);
	  var anyNativeIterator = NAME == 'Array' ? IterablePrototype.entries || nativeIterator : nativeIterator;
	  var CurrentIteratorPrototype, methods, KEY;

	  // fix native
	  if (anyNativeIterator) {
	    CurrentIteratorPrototype = getPrototypeOf(anyNativeIterator.call(new Iterable()));
	    if (IteratorPrototype !== Object.prototype && CurrentIteratorPrototype.next) {
	      if (!IS_PURE && getPrototypeOf(CurrentIteratorPrototype) !== IteratorPrototype) {
	        if (setPrototypeOf) {
	          setPrototypeOf(CurrentIteratorPrototype, IteratorPrototype);
	        } else if (typeof CurrentIteratorPrototype[ITERATOR] != 'function') {
	          createNonEnumerableProperty(CurrentIteratorPrototype, ITERATOR, returnThis);
	        }
	      }
	      // Set @@toStringTag to native iterators
	      setToStringTag(CurrentIteratorPrototype, TO_STRING_TAG, true, true);
	      if (IS_PURE) Iterators[TO_STRING_TAG] = returnThis;
	    }
	  }

	  // fix Array#{values, @@iterator}.name in V8 / FF
	  if (DEFAULT == VALUES && nativeIterator && nativeIterator.name !== VALUES) {
	    INCORRECT_VALUES_NAME = true;
	    defaultIterator = function values() { return nativeIterator.call(this); };
	  }

	  // define iterator
	  if ((!IS_PURE || FORCED) && IterablePrototype[ITERATOR] !== defaultIterator) {
	    createNonEnumerableProperty(IterablePrototype, ITERATOR, defaultIterator);
	  }
	  Iterators[NAME] = defaultIterator;

	  // export additional methods
	  if (DEFAULT) {
	    methods = {
	      values: getIterationMethod(VALUES),
	      keys: IS_SET ? defaultIterator : getIterationMethod(KEYS),
	      entries: getIterationMethod(ENTRIES)
	    };
	    if (FORCED) for (KEY in methods) {
	      if (BUGGY_SAFARI_ITERATORS || INCORRECT_VALUES_NAME || !(KEY in IterablePrototype)) {
	        redefine(IterablePrototype, KEY, methods[KEY]);
	      }
	    } else $({ target: NAME, proto: true, forced: BUGGY_SAFARI_ITERATORS || INCORRECT_VALUES_NAME }, methods);
	  }

	  return methods;
	};


	/***/ }),

	/***/ "7f9a":
	/***/ (function(module, exports, __webpack_require__) {

	var global = __webpack_require__("da84");
	var inspectSource = __webpack_require__("8925");

	var WeakMap = global.WeakMap;

	module.exports = typeof WeakMap === 'function' && /native code/.test(inspectSource(WeakMap));


	/***/ }),

	/***/ "825a":
	/***/ (function(module, exports, __webpack_require__) {

	var isObject = __webpack_require__("861d");

	module.exports = function (it) {
	  if (!isObject(it)) {
	    throw TypeError(String(it) + ' is not an object');
	  } return it;
	};


	/***/ }),

	/***/ "83ab":
	/***/ (function(module, exports, __webpack_require__) {

	var fails = __webpack_require__("d039");

	// Thank's IE8 for his funny defineProperty
	module.exports = !fails(function () {
	  return Object.defineProperty({}, 1, { get: function () { return 7; } })[1] != 7;
	});


	/***/ }),

	/***/ "8418":
	/***/ (function(module, exports, __webpack_require__) {

	var toPrimitive = __webpack_require__("c04e");
	var definePropertyModule = __webpack_require__("9bf2");
	var createPropertyDescriptor = __webpack_require__("5c6c");

	module.exports = function (object, key, value) {
	  var propertyKey = toPrimitive(key);
	  if (propertyKey in object) definePropertyModule.f(object, propertyKey, createPropertyDescriptor(0, value));
	  else object[propertyKey] = value;
	};


	/***/ }),

	/***/ "861d":
	/***/ (function(module, exports) {

	module.exports = function (it) {
	  return typeof it === 'object' ? it !== null : typeof it === 'function';
	};


	/***/ }),

	/***/ "8875":
	/***/ (function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;// addapted from the document.currentScript polyfill by Adam Miller
	// MIT license
	// source: https://github.com/amiller-gh/currentScript-polyfill

	// added support for Firefox https://bugzilla.mozilla.org/show_bug.cgi?id=1620505

	(function (root, factory) {
	  {
	    !(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
					__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
					(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
					__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
	  }
	}(typeof self !== 'undefined' ? self : this, function () {
	  function getCurrentScript () {
	    var descriptor = Object.getOwnPropertyDescriptor(document, 'currentScript');
	    // for chrome
	    if (!descriptor && 'currentScript' in document && document.currentScript) {
	      return document.currentScript
	    }

	    // for other browsers with native support for currentScript
	    if (descriptor && descriptor.get !== getCurrentScript && document.currentScript) {
	      return document.currentScript
	    }
	  
	    // IE 8-10 support script readyState
	    // IE 11+ & Firefox support stack trace
	    try {
	      throw new Error();
	    }
	    catch (err) {
	      // Find the second match for the "at" string to get file src url from stack.
	      var ieStackRegExp = /.*at [^(]*\((.*):(.+):(.+)\)$/ig,
	        ffStackRegExp = /@([^@]*):(\d+):(\d+)\s*$/ig,
	        stackDetails = ieStackRegExp.exec(err.stack) || ffStackRegExp.exec(err.stack),
	        scriptLocation = (stackDetails && stackDetails[1]) || false,
	        line = (stackDetails && stackDetails[2]) || false,
	        currentLocation = document.location.href.replace(document.location.hash, ''),
	        pageSource,
	        inlineScriptSourceRegExp,
	        inlineScriptSource,
	        scripts = document.getElementsByTagName('script'); // Live NodeList collection
	  
	      if (scriptLocation === currentLocation) {
	        pageSource = document.documentElement.outerHTML;
	        inlineScriptSourceRegExp = new RegExp('(?:[^\\n]+?\\n){0,' + (line - 2) + '}[^<]*<script>([\\d\\D]*?)<\\/script>[\\d\\D]*', 'i');
	        inlineScriptSource = pageSource.replace(inlineScriptSourceRegExp, '$1').trim();
	      }
	  
	      for (var i = 0; i < scripts.length; i++) {
	        // If ready state is interactive, return the script tag
	        if (scripts[i].readyState === 'interactive') {
	          return scripts[i];
	        }
	  
	        // If src matches, return the script tag
	        if (scripts[i].src === scriptLocation) {
	          return scripts[i];
	        }
	  
	        // If inline source matches, return the script tag
	        if (
	          scriptLocation === currentLocation &&
	          scripts[i].innerHTML &&
	          scripts[i].innerHTML.trim() === inlineScriptSource
	        ) {
	          return scripts[i];
	        }
	      }
	  
	      // If no match, return null
	      return null;
	    }
	  }
	  return getCurrentScript
	}));


	/***/ }),

	/***/ "8925":
	/***/ (function(module, exports, __webpack_require__) {

	var store = __webpack_require__("c6cd");

	var functionToString = Function.toString;

	// this helper broken in `3.4.1-3.4.4`, so we can't use `shared` helper
	if (typeof store.inspectSource != 'function') {
	  store.inspectSource = function (it) {
	    return functionToString.call(it);
	  };
	}

	module.exports = store.inspectSource;


	/***/ }),

	/***/ "8aa5":
	/***/ (function(module, exports, __webpack_require__) {

	var charAt = __webpack_require__("6547").charAt;

	// `AdvanceStringIndex` abstract operation
	// https://tc39.github.io/ecma262/#sec-advancestringindex
	module.exports = function (S, index, unicode) {
	  return index + (unicode ? charAt(S, index).length : 1);
	};


	/***/ }),

	/***/ "8bbf":
	/***/ (function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE__8bbf__;

	/***/ }),

	/***/ "90e3":
	/***/ (function(module, exports) {

	var id = 0;
	var postfix = Math.random();

	module.exports = function (key) {
	  return 'Symbol(' + String(key === undefined ? '' : key) + ')_' + (++id + postfix).toString(36);
	};


	/***/ }),

	/***/ "9112":
	/***/ (function(module, exports, __webpack_require__) {

	var DESCRIPTORS = __webpack_require__("83ab");
	var definePropertyModule = __webpack_require__("9bf2");
	var createPropertyDescriptor = __webpack_require__("5c6c");

	module.exports = DESCRIPTORS ? function (object, key, value) {
	  return definePropertyModule.f(object, key, createPropertyDescriptor(1, value));
	} : function (object, key, value) {
	  object[key] = value;
	  return object;
	};


	/***/ }),

	/***/ "9263":
	/***/ (function(module, exports, __webpack_require__) {

	var regexpFlags = __webpack_require__("ad6d");
	var stickyHelpers = __webpack_require__("9f7f");

	var nativeExec = RegExp.prototype.exec;
	// This always refers to the native implementation, because the
	// String#replace polyfill uses ./fix-regexp-well-known-symbol-logic.js,
	// which loads this file before patching the method.
	var nativeReplace = String.prototype.replace;

	var patchedExec = nativeExec;

	var UPDATES_LAST_INDEX_WRONG = (function () {
	  var re1 = /a/;
	  var re2 = /b*/g;
	  nativeExec.call(re1, 'a');
	  nativeExec.call(re2, 'a');
	  return re1.lastIndex !== 0 || re2.lastIndex !== 0;
	})();

	var UNSUPPORTED_Y = stickyHelpers.UNSUPPORTED_Y || stickyHelpers.BROKEN_CARET;

	// nonparticipating capturing group, copied from es5-shim's String#split patch.
	var NPCG_INCLUDED = /()??/.exec('')[1] !== undefined;

	var PATCH = UPDATES_LAST_INDEX_WRONG || NPCG_INCLUDED || UNSUPPORTED_Y;

	if (PATCH) {
	  patchedExec = function exec(str) {
	    var re = this;
	    var lastIndex, reCopy, match, i;
	    var sticky = UNSUPPORTED_Y && re.sticky;
	    var flags = regexpFlags.call(re);
	    var source = re.source;
	    var charsAdded = 0;
	    var strCopy = str;

	    if (sticky) {
	      flags = flags.replace('y', '');
	      if (flags.indexOf('g') === -1) {
	        flags += 'g';
	      }

	      strCopy = String(str).slice(re.lastIndex);
	      // Support anchored sticky behavior.
	      if (re.lastIndex > 0 && (!re.multiline || re.multiline && str[re.lastIndex - 1] !== '\n')) {
	        source = '(?: ' + source + ')';
	        strCopy = ' ' + strCopy;
	        charsAdded++;
	      }
	      // ^(? + rx + ) is needed, in combination with some str slicing, to
	      // simulate the 'y' flag.
	      reCopy = new RegExp('^(?:' + source + ')', flags);
	    }

	    if (NPCG_INCLUDED) {
	      reCopy = new RegExp('^' + source + '$(?!\\s)', flags);
	    }
	    if (UPDATES_LAST_INDEX_WRONG) lastIndex = re.lastIndex;

	    match = nativeExec.call(sticky ? reCopy : re, strCopy);

	    if (sticky) {
	      if (match) {
	        match.input = match.input.slice(charsAdded);
	        match[0] = match[0].slice(charsAdded);
	        match.index = re.lastIndex;
	        re.lastIndex += match[0].length;
	      } else re.lastIndex = 0;
	    } else if (UPDATES_LAST_INDEX_WRONG && match) {
	      re.lastIndex = re.global ? match.index + match[0].length : lastIndex;
	    }
	    if (NPCG_INCLUDED && match && match.length > 1) {
	      // Fix browsers whose `exec` methods don't consistently return `undefined`
	      // for NPCG, like IE8. NOTE: This doesn' work for /(.?)?/
	      nativeReplace.call(match[0], reCopy, function () {
	        for (i = 1; i < arguments.length - 2; i++) {
	          if (arguments[i] === undefined) match[i] = undefined;
	        }
	      });
	    }

	    return match;
	  };
	}

	module.exports = patchedExec;


	/***/ }),

	/***/ "94ca":
	/***/ (function(module, exports, __webpack_require__) {

	var fails = __webpack_require__("d039");

	var replacement = /#|\.prototype\./;

	var isForced = function (feature, detection) {
	  var value = data[normalize(feature)];
	  return value == POLYFILL ? true
	    : value == NATIVE ? false
	    : typeof detection == 'function' ? fails(detection)
	    : !!detection;
	};

	var normalize = isForced.normalize = function (string) {
	  return String(string).replace(replacement, '.').toLowerCase();
	};

	var data = isForced.data = {};
	var NATIVE = isForced.NATIVE = 'N';
	var POLYFILL = isForced.POLYFILL = 'P';

	module.exports = isForced;


	/***/ }),

	/***/ "99af":
	/***/ (function(module, exports, __webpack_require__) {

	var $ = __webpack_require__("23e7");
	var fails = __webpack_require__("d039");
	var isArray = __webpack_require__("e8b5");
	var isObject = __webpack_require__("861d");
	var toObject = __webpack_require__("7b0b");
	var toLength = __webpack_require__("50c4");
	var createProperty = __webpack_require__("8418");
	var arraySpeciesCreate = __webpack_require__("65f0");
	var arrayMethodHasSpeciesSupport = __webpack_require__("1dde");
	var wellKnownSymbol = __webpack_require__("b622");
	var V8_VERSION = __webpack_require__("2d00");

	var IS_CONCAT_SPREADABLE = wellKnownSymbol('isConcatSpreadable');
	var MAX_SAFE_INTEGER = 0x1FFFFFFFFFFFFF;
	var MAXIMUM_ALLOWED_INDEX_EXCEEDED = 'Maximum allowed index exceeded';

	// We can't use this feature detection in V8 since it causes
	// deoptimization and serious performance degradation
	// https://github.com/zloirock/core-js/issues/679
	var IS_CONCAT_SPREADABLE_SUPPORT = V8_VERSION >= 51 || !fails(function () {
	  var array = [];
	  array[IS_CONCAT_SPREADABLE] = false;
	  return array.concat()[0] !== array;
	});

	var SPECIES_SUPPORT = arrayMethodHasSpeciesSupport('concat');

	var isConcatSpreadable = function (O) {
	  if (!isObject(O)) return false;
	  var spreadable = O[IS_CONCAT_SPREADABLE];
	  return spreadable !== undefined ? !!spreadable : isArray(O);
	};

	var FORCED = !IS_CONCAT_SPREADABLE_SUPPORT || !SPECIES_SUPPORT;

	// `Array.prototype.concat` method
	// https://tc39.github.io/ecma262/#sec-array.prototype.concat
	// with adding support of @@isConcatSpreadable and @@species
	$({ target: 'Array', proto: true, forced: FORCED }, {
	  concat: function concat(arg) { // eslint-disable-line no-unused-vars
	    var O = toObject(this);
	    var A = arraySpeciesCreate(O, 0);
	    var n = 0;
	    var i, k, length, len, E;
	    for (i = -1, length = arguments.length; i < length; i++) {
	      E = i === -1 ? O : arguments[i];
	      if (isConcatSpreadable(E)) {
	        len = toLength(E.length);
	        if (n + len > MAX_SAFE_INTEGER) throw TypeError(MAXIMUM_ALLOWED_INDEX_EXCEEDED);
	        for (k = 0; k < len; k++, n++) if (k in E) createProperty(A, n, E[k]);
	      } else {
	        if (n >= MAX_SAFE_INTEGER) throw TypeError(MAXIMUM_ALLOWED_INDEX_EXCEEDED);
	        createProperty(A, n++, E);
	      }
	    }
	    A.length = n;
	    return A;
	  }
	});


	/***/ }),

	/***/ "9bdd":
	/***/ (function(module, exports, __webpack_require__) {

	var anObject = __webpack_require__("825a");

	// call something on iterator step with safe closing on error
	module.exports = function (iterator, fn, value, ENTRIES) {
	  try {
	    return ENTRIES ? fn(anObject(value)[0], value[1]) : fn(value);
	  // 7.4.6 IteratorClose(iterator, completion)
	  } catch (error) {
	    var returnMethod = iterator['return'];
	    if (returnMethod !== undefined) anObject(returnMethod.call(iterator));
	    throw error;
	  }
	};


	/***/ }),

	/***/ "9bf2":
	/***/ (function(module, exports, __webpack_require__) {

	var DESCRIPTORS = __webpack_require__("83ab");
	var IE8_DOM_DEFINE = __webpack_require__("0cfb");
	var anObject = __webpack_require__("825a");
	var toPrimitive = __webpack_require__("c04e");

	var nativeDefineProperty = Object.defineProperty;

	// `Object.defineProperty` method
	// https://tc39.github.io/ecma262/#sec-object.defineproperty
	exports.f = DESCRIPTORS ? nativeDefineProperty : function defineProperty(O, P, Attributes) {
	  anObject(O);
	  P = toPrimitive(P, true);
	  anObject(Attributes);
	  if (IE8_DOM_DEFINE) try {
	    return nativeDefineProperty(O, P, Attributes);
	  } catch (error) { /* empty */ }
	  if ('get' in Attributes || 'set' in Attributes) throw TypeError('Accessors not supported');
	  if ('value' in Attributes) O[P] = Attributes.value;
	  return O;
	};


	/***/ }),

	/***/ "9ed3":
	/***/ (function(module, exports, __webpack_require__) {

	var IteratorPrototype = __webpack_require__("ae93").IteratorPrototype;
	var create = __webpack_require__("7c73");
	var createPropertyDescriptor = __webpack_require__("5c6c");
	var setToStringTag = __webpack_require__("d44e");
	var Iterators = __webpack_require__("3f8c");

	var returnThis = function () { return this; };

	module.exports = function (IteratorConstructor, NAME, next) {
	  var TO_STRING_TAG = NAME + ' Iterator';
	  IteratorConstructor.prototype = create(IteratorPrototype, { next: createPropertyDescriptor(1, next) });
	  setToStringTag(IteratorConstructor, TO_STRING_TAG, false, true);
	  Iterators[TO_STRING_TAG] = returnThis;
	  return IteratorConstructor;
	};


	/***/ }),

	/***/ "9f7f":
	/***/ (function(module, exports, __webpack_require__) {


	var fails = __webpack_require__("d039");

	// babel-minify transpiles RegExp('a', 'y') -> /a/y and it causes SyntaxError,
	// so we use an intermediate function.
	function RE(s, f) {
	  return RegExp(s, f);
	}

	exports.UNSUPPORTED_Y = fails(function () {
	  // babel-minify transpiles RegExp('a', 'y') -> /a/y and it causes SyntaxError
	  var re = RE('a', 'y');
	  re.lastIndex = 2;
	  return re.exec('abcd') != null;
	});

	exports.BROKEN_CARET = fails(function () {
	  // https://bugzilla.mozilla.org/show_bug.cgi?id=773687
	  var re = RE('^r', 'gy');
	  re.lastIndex = 2;
	  return re.exec('str') != null;
	});


	/***/ }),

	/***/ "a2bf":
	/***/ (function(module, exports, __webpack_require__) {

	var isArray = __webpack_require__("e8b5");
	var toLength = __webpack_require__("50c4");
	var bind = __webpack_require__("0366");

	// `FlattenIntoArray` abstract operation
	// https://tc39.github.io/proposal-flatMap/#sec-FlattenIntoArray
	var flattenIntoArray = function (target, original, source, sourceLen, start, depth, mapper, thisArg) {
	  var targetIndex = start;
	  var sourceIndex = 0;
	  var mapFn = mapper ? bind(mapper, thisArg, 3) : false;
	  var element;

	  while (sourceIndex < sourceLen) {
	    if (sourceIndex in source) {
	      element = mapFn ? mapFn(source[sourceIndex], sourceIndex, original) : source[sourceIndex];

	      if (depth > 0 && isArray(element)) {
	        targetIndex = flattenIntoArray(target, original, element, toLength(element.length), targetIndex, depth - 1) - 1;
	      } else {
	        if (targetIndex >= 0x1FFFFFFFFFFFFF) throw TypeError('Exceed the acceptable array length');
	        target[targetIndex] = element;
	      }

	      targetIndex++;
	    }
	    sourceIndex++;
	  }
	  return targetIndex;
	};

	module.exports = flattenIntoArray;


	/***/ }),

	/***/ "a352":
	/***/ (function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_a352__;

	/***/ }),

	/***/ "a434":
	/***/ (function(module, exports, __webpack_require__) {

	var $ = __webpack_require__("23e7");
	var toAbsoluteIndex = __webpack_require__("23cb");
	var toInteger = __webpack_require__("a691");
	var toLength = __webpack_require__("50c4");
	var toObject = __webpack_require__("7b0b");
	var arraySpeciesCreate = __webpack_require__("65f0");
	var createProperty = __webpack_require__("8418");
	var arrayMethodHasSpeciesSupport = __webpack_require__("1dde");
	var arrayMethodUsesToLength = __webpack_require__("ae40");

	var HAS_SPECIES_SUPPORT = arrayMethodHasSpeciesSupport('splice');
	var USES_TO_LENGTH = arrayMethodUsesToLength('splice', { ACCESSORS: true, 0: 0, 1: 2 });

	var max = Math.max;
	var min = Math.min;
	var MAX_SAFE_INTEGER = 0x1FFFFFFFFFFFFF;
	var MAXIMUM_ALLOWED_LENGTH_EXCEEDED = 'Maximum allowed length exceeded';

	// `Array.prototype.splice` method
	// https://tc39.github.io/ecma262/#sec-array.prototype.splice
	// with adding support of @@species
	$({ target: 'Array', proto: true, forced: !HAS_SPECIES_SUPPORT || !USES_TO_LENGTH }, {
	  splice: function splice(start, deleteCount /* , ...items */) {
	    var O = toObject(this);
	    var len = toLength(O.length);
	    var actualStart = toAbsoluteIndex(start, len);
	    var argumentsLength = arguments.length;
	    var insertCount, actualDeleteCount, A, k, from, to;
	    if (argumentsLength === 0) {
	      insertCount = actualDeleteCount = 0;
	    } else if (argumentsLength === 1) {
	      insertCount = 0;
	      actualDeleteCount = len - actualStart;
	    } else {
	      insertCount = argumentsLength - 2;
	      actualDeleteCount = min(max(toInteger(deleteCount), 0), len - actualStart);
	    }
	    if (len + insertCount - actualDeleteCount > MAX_SAFE_INTEGER) {
	      throw TypeError(MAXIMUM_ALLOWED_LENGTH_EXCEEDED);
	    }
	    A = arraySpeciesCreate(O, actualDeleteCount);
	    for (k = 0; k < actualDeleteCount; k++) {
	      from = actualStart + k;
	      if (from in O) createProperty(A, k, O[from]);
	    }
	    A.length = actualDeleteCount;
	    if (insertCount < actualDeleteCount) {
	      for (k = actualStart; k < len - actualDeleteCount; k++) {
	        from = k + actualDeleteCount;
	        to = k + insertCount;
	        if (from in O) O[to] = O[from];
	        else delete O[to];
	      }
	      for (k = len; k > len - actualDeleteCount + insertCount; k--) delete O[k - 1];
	    } else if (insertCount > actualDeleteCount) {
	      for (k = len - actualDeleteCount; k > actualStart; k--) {
	        from = k + actualDeleteCount - 1;
	        to = k + insertCount - 1;
	        if (from in O) O[to] = O[from];
	        else delete O[to];
	      }
	    }
	    for (k = 0; k < insertCount; k++) {
	      O[k + actualStart] = arguments[k + 2];
	    }
	    O.length = len - actualDeleteCount + insertCount;
	    return A;
	  }
	});


	/***/ }),

	/***/ "a4d3":
	/***/ (function(module, exports, __webpack_require__) {

	var $ = __webpack_require__("23e7");
	var global = __webpack_require__("da84");
	var getBuiltIn = __webpack_require__("d066");
	var IS_PURE = __webpack_require__("c430");
	var DESCRIPTORS = __webpack_require__("83ab");
	var NATIVE_SYMBOL = __webpack_require__("4930");
	var USE_SYMBOL_AS_UID = __webpack_require__("fdbf");
	var fails = __webpack_require__("d039");
	var has = __webpack_require__("5135");
	var isArray = __webpack_require__("e8b5");
	var isObject = __webpack_require__("861d");
	var anObject = __webpack_require__("825a");
	var toObject = __webpack_require__("7b0b");
	var toIndexedObject = __webpack_require__("fc6a");
	var toPrimitive = __webpack_require__("c04e");
	var createPropertyDescriptor = __webpack_require__("5c6c");
	var nativeObjectCreate = __webpack_require__("7c73");
	var objectKeys = __webpack_require__("df75");
	var getOwnPropertyNamesModule = __webpack_require__("241c");
	var getOwnPropertyNamesExternal = __webpack_require__("057f");
	var getOwnPropertySymbolsModule = __webpack_require__("7418");
	var getOwnPropertyDescriptorModule = __webpack_require__("06cf");
	var definePropertyModule = __webpack_require__("9bf2");
	var propertyIsEnumerableModule = __webpack_require__("d1e7");
	var createNonEnumerableProperty = __webpack_require__("9112");
	var redefine = __webpack_require__("6eeb");
	var shared = __webpack_require__("5692");
	var sharedKey = __webpack_require__("f772");
	var hiddenKeys = __webpack_require__("d012");
	var uid = __webpack_require__("90e3");
	var wellKnownSymbol = __webpack_require__("b622");
	var wrappedWellKnownSymbolModule = __webpack_require__("e538");
	var defineWellKnownSymbol = __webpack_require__("746f");
	var setToStringTag = __webpack_require__("d44e");
	var InternalStateModule = __webpack_require__("69f3");
	var $forEach = __webpack_require__("b727").forEach;

	var HIDDEN = sharedKey('hidden');
	var SYMBOL = 'Symbol';
	var PROTOTYPE = 'prototype';
	var TO_PRIMITIVE = wellKnownSymbol('toPrimitive');
	var setInternalState = InternalStateModule.set;
	var getInternalState = InternalStateModule.getterFor(SYMBOL);
	var ObjectPrototype = Object[PROTOTYPE];
	var $Symbol = global.Symbol;
	var $stringify = getBuiltIn('JSON', 'stringify');
	var nativeGetOwnPropertyDescriptor = getOwnPropertyDescriptorModule.f;
	var nativeDefineProperty = definePropertyModule.f;
	var nativeGetOwnPropertyNames = getOwnPropertyNamesExternal.f;
	var nativePropertyIsEnumerable = propertyIsEnumerableModule.f;
	var AllSymbols = shared('symbols');
	var ObjectPrototypeSymbols = shared('op-symbols');
	var StringToSymbolRegistry = shared('string-to-symbol-registry');
	var SymbolToStringRegistry = shared('symbol-to-string-registry');
	var WellKnownSymbolsStore = shared('wks');
	var QObject = global.QObject;
	// Don't use setters in Qt Script, https://github.com/zloirock/core-js/issues/173
	var USE_SETTER = !QObject || !QObject[PROTOTYPE] || !QObject[PROTOTYPE].findChild;

	// fallback for old Android, https://code.google.com/p/v8/issues/detail?id=687
	var setSymbolDescriptor = DESCRIPTORS && fails(function () {
	  return nativeObjectCreate(nativeDefineProperty({}, 'a', {
	    get: function () { return nativeDefineProperty(this, 'a', { value: 7 }).a; }
	  })).a != 7;
	}) ? function (O, P, Attributes) {
	  var ObjectPrototypeDescriptor = nativeGetOwnPropertyDescriptor(ObjectPrototype, P);
	  if (ObjectPrototypeDescriptor) delete ObjectPrototype[P];
	  nativeDefineProperty(O, P, Attributes);
	  if (ObjectPrototypeDescriptor && O !== ObjectPrototype) {
	    nativeDefineProperty(ObjectPrototype, P, ObjectPrototypeDescriptor);
	  }
	} : nativeDefineProperty;

	var wrap = function (tag, description) {
	  var symbol = AllSymbols[tag] = nativeObjectCreate($Symbol[PROTOTYPE]);
	  setInternalState(symbol, {
	    type: SYMBOL,
	    tag: tag,
	    description: description
	  });
	  if (!DESCRIPTORS) symbol.description = description;
	  return symbol;
	};

	var isSymbol = USE_SYMBOL_AS_UID ? function (it) {
	  return typeof it == 'symbol';
	} : function (it) {
	  return Object(it) instanceof $Symbol;
	};

	var $defineProperty = function defineProperty(O, P, Attributes) {
	  if (O === ObjectPrototype) $defineProperty(ObjectPrototypeSymbols, P, Attributes);
	  anObject(O);
	  var key = toPrimitive(P, true);
	  anObject(Attributes);
	  if (has(AllSymbols, key)) {
	    if (!Attributes.enumerable) {
	      if (!has(O, HIDDEN)) nativeDefineProperty(O, HIDDEN, createPropertyDescriptor(1, {}));
	      O[HIDDEN][key] = true;
	    } else {
	      if (has(O, HIDDEN) && O[HIDDEN][key]) O[HIDDEN][key] = false;
	      Attributes = nativeObjectCreate(Attributes, { enumerable: createPropertyDescriptor(0, false) });
	    } return setSymbolDescriptor(O, key, Attributes);
	  } return nativeDefineProperty(O, key, Attributes);
	};

	var $defineProperties = function defineProperties(O, Properties) {
	  anObject(O);
	  var properties = toIndexedObject(Properties);
	  var keys = objectKeys(properties).concat($getOwnPropertySymbols(properties));
	  $forEach(keys, function (key) {
	    if (!DESCRIPTORS || $propertyIsEnumerable.call(properties, key)) $defineProperty(O, key, properties[key]);
	  });
	  return O;
	};

	var $create = function create(O, Properties) {
	  return Properties === undefined ? nativeObjectCreate(O) : $defineProperties(nativeObjectCreate(O), Properties);
	};

	var $propertyIsEnumerable = function propertyIsEnumerable(V) {
	  var P = toPrimitive(V, true);
	  var enumerable = nativePropertyIsEnumerable.call(this, P);
	  if (this === ObjectPrototype && has(AllSymbols, P) && !has(ObjectPrototypeSymbols, P)) return false;
	  return enumerable || !has(this, P) || !has(AllSymbols, P) || has(this, HIDDEN) && this[HIDDEN][P] ? enumerable : true;
	};

	var $getOwnPropertyDescriptor = function getOwnPropertyDescriptor(O, P) {
	  var it = toIndexedObject(O);
	  var key = toPrimitive(P, true);
	  if (it === ObjectPrototype && has(AllSymbols, key) && !has(ObjectPrototypeSymbols, key)) return;
	  var descriptor = nativeGetOwnPropertyDescriptor(it, key);
	  if (descriptor && has(AllSymbols, key) && !(has(it, HIDDEN) && it[HIDDEN][key])) {
	    descriptor.enumerable = true;
	  }
	  return descriptor;
	};

	var $getOwnPropertyNames = function getOwnPropertyNames(O) {
	  var names = nativeGetOwnPropertyNames(toIndexedObject(O));
	  var result = [];
	  $forEach(names, function (key) {
	    if (!has(AllSymbols, key) && !has(hiddenKeys, key)) result.push(key);
	  });
	  return result;
	};

	var $getOwnPropertySymbols = function getOwnPropertySymbols(O) {
	  var IS_OBJECT_PROTOTYPE = O === ObjectPrototype;
	  var names = nativeGetOwnPropertyNames(IS_OBJECT_PROTOTYPE ? ObjectPrototypeSymbols : toIndexedObject(O));
	  var result = [];
	  $forEach(names, function (key) {
	    if (has(AllSymbols, key) && (!IS_OBJECT_PROTOTYPE || has(ObjectPrototype, key))) {
	      result.push(AllSymbols[key]);
	    }
	  });
	  return result;
	};

	// `Symbol` constructor
	// https://tc39.github.io/ecma262/#sec-symbol-constructor
	if (!NATIVE_SYMBOL) {
	  $Symbol = function Symbol() {
	    if (this instanceof $Symbol) throw TypeError('Symbol is not a constructor');
	    var description = !arguments.length || arguments[0] === undefined ? undefined : String(arguments[0]);
	    var tag = uid(description);
	    var setter = function (value) {
	      if (this === ObjectPrototype) setter.call(ObjectPrototypeSymbols, value);
	      if (has(this, HIDDEN) && has(this[HIDDEN], tag)) this[HIDDEN][tag] = false;
	      setSymbolDescriptor(this, tag, createPropertyDescriptor(1, value));
	    };
	    if (DESCRIPTORS && USE_SETTER) setSymbolDescriptor(ObjectPrototype, tag, { configurable: true, set: setter });
	    return wrap(tag, description);
	  };

	  redefine($Symbol[PROTOTYPE], 'toString', function toString() {
	    return getInternalState(this).tag;
	  });

	  redefine($Symbol, 'withoutSetter', function (description) {
	    return wrap(uid(description), description);
	  });

	  propertyIsEnumerableModule.f = $propertyIsEnumerable;
	  definePropertyModule.f = $defineProperty;
	  getOwnPropertyDescriptorModule.f = $getOwnPropertyDescriptor;
	  getOwnPropertyNamesModule.f = getOwnPropertyNamesExternal.f = $getOwnPropertyNames;
	  getOwnPropertySymbolsModule.f = $getOwnPropertySymbols;

	  wrappedWellKnownSymbolModule.f = function (name) {
	    return wrap(wellKnownSymbol(name), name);
	  };

	  if (DESCRIPTORS) {
	    // https://github.com/tc39/proposal-Symbol-description
	    nativeDefineProperty($Symbol[PROTOTYPE], 'description', {
	      configurable: true,
	      get: function description() {
	        return getInternalState(this).description;
	      }
	    });
	    if (!IS_PURE) {
	      redefine(ObjectPrototype, 'propertyIsEnumerable', $propertyIsEnumerable, { unsafe: true });
	    }
	  }
	}

	$({ global: true, wrap: true, forced: !NATIVE_SYMBOL, sham: !NATIVE_SYMBOL }, {
	  Symbol: $Symbol
	});

	$forEach(objectKeys(WellKnownSymbolsStore), function (name) {
	  defineWellKnownSymbol(name);
	});

	$({ target: SYMBOL, stat: true, forced: !NATIVE_SYMBOL }, {
	  // `Symbol.for` method
	  // https://tc39.github.io/ecma262/#sec-symbol.for
	  'for': function (key) {
	    var string = String(key);
	    if (has(StringToSymbolRegistry, string)) return StringToSymbolRegistry[string];
	    var symbol = $Symbol(string);
	    StringToSymbolRegistry[string] = symbol;
	    SymbolToStringRegistry[symbol] = string;
	    return symbol;
	  },
	  // `Symbol.keyFor` method
	  // https://tc39.github.io/ecma262/#sec-symbol.keyfor
	  keyFor: function keyFor(sym) {
	    if (!isSymbol(sym)) throw TypeError(sym + ' is not a symbol');
	    if (has(SymbolToStringRegistry, sym)) return SymbolToStringRegistry[sym];
	  },
	  useSetter: function () { USE_SETTER = true; },
	  useSimple: function () { USE_SETTER = false; }
	});

	$({ target: 'Object', stat: true, forced: !NATIVE_SYMBOL, sham: !DESCRIPTORS }, {
	  // `Object.create` method
	  // https://tc39.github.io/ecma262/#sec-object.create
	  create: $create,
	  // `Object.defineProperty` method
	  // https://tc39.github.io/ecma262/#sec-object.defineproperty
	  defineProperty: $defineProperty,
	  // `Object.defineProperties` method
	  // https://tc39.github.io/ecma262/#sec-object.defineproperties
	  defineProperties: $defineProperties,
	  // `Object.getOwnPropertyDescriptor` method
	  // https://tc39.github.io/ecma262/#sec-object.getownpropertydescriptors
	  getOwnPropertyDescriptor: $getOwnPropertyDescriptor
	});

	$({ target: 'Object', stat: true, forced: !NATIVE_SYMBOL }, {
	  // `Object.getOwnPropertyNames` method
	  // https://tc39.github.io/ecma262/#sec-object.getownpropertynames
	  getOwnPropertyNames: $getOwnPropertyNames,
	  // `Object.getOwnPropertySymbols` method
	  // https://tc39.github.io/ecma262/#sec-object.getownpropertysymbols
	  getOwnPropertySymbols: $getOwnPropertySymbols
	});

	// Chrome 38 and 39 `Object.getOwnPropertySymbols` fails on primitives
	// https://bugs.chromium.org/p/v8/issues/detail?id=3443
	$({ target: 'Object', stat: true, forced: fails(function () { getOwnPropertySymbolsModule.f(1); }) }, {
	  getOwnPropertySymbols: function getOwnPropertySymbols(it) {
	    return getOwnPropertySymbolsModule.f(toObject(it));
	  }
	});

	// `JSON.stringify` method behavior with symbols
	// https://tc39.github.io/ecma262/#sec-json.stringify
	if ($stringify) {
	  var FORCED_JSON_STRINGIFY = !NATIVE_SYMBOL || fails(function () {
	    var symbol = $Symbol();
	    // MS Edge converts symbol values to JSON as {}
	    return $stringify([symbol]) != '[null]'
	      // WebKit converts symbol values to JSON as null
	      || $stringify({ a: symbol }) != '{}'
	      // V8 throws on boxed symbols
	      || $stringify(Object(symbol)) != '{}';
	  });

	  $({ target: 'JSON', stat: true, forced: FORCED_JSON_STRINGIFY }, {
	    // eslint-disable-next-line no-unused-vars
	    stringify: function stringify(it, replacer, space) {
	      var args = [it];
	      var index = 1;
	      var $replacer;
	      while (arguments.length > index) args.push(arguments[index++]);
	      $replacer = replacer;
	      if (!isObject(replacer) && it === undefined || isSymbol(it)) return; // IE8 returns string on undefined
	      if (!isArray(replacer)) replacer = function (key, value) {
	        if (typeof $replacer == 'function') value = $replacer.call(this, key, value);
	        if (!isSymbol(value)) return value;
	      };
	      args[1] = replacer;
	      return $stringify.apply(null, args);
	    }
	  });
	}

	// `Symbol.prototype[@@toPrimitive]` method
	// https://tc39.github.io/ecma262/#sec-symbol.prototype-@@toprimitive
	if (!$Symbol[PROTOTYPE][TO_PRIMITIVE]) {
	  createNonEnumerableProperty($Symbol[PROTOTYPE], TO_PRIMITIVE, $Symbol[PROTOTYPE].valueOf);
	}
	// `Symbol.prototype[@@toStringTag]` property
	// https://tc39.github.io/ecma262/#sec-symbol.prototype-@@tostringtag
	setToStringTag($Symbol, SYMBOL);

	hiddenKeys[HIDDEN] = true;


	/***/ }),

	/***/ "a630":
	/***/ (function(module, exports, __webpack_require__) {

	var $ = __webpack_require__("23e7");
	var from = __webpack_require__("4df4");
	var checkCorrectnessOfIteration = __webpack_require__("1c7e");

	var INCORRECT_ITERATION = !checkCorrectnessOfIteration(function (iterable) {
	  Array.from(iterable);
	});

	// `Array.from` method
	// https://tc39.github.io/ecma262/#sec-array.from
	$({ target: 'Array', stat: true, forced: INCORRECT_ITERATION }, {
	  from: from
	});


	/***/ }),

	/***/ "a640":
	/***/ (function(module, exports, __webpack_require__) {

	var fails = __webpack_require__("d039");

	module.exports = function (METHOD_NAME, argument) {
	  var method = [][METHOD_NAME];
	  return !!method && fails(function () {
	    // eslint-disable-next-line no-useless-call,no-throw-literal
	    method.call(null, argument || function () { throw 1; }, 1);
	  });
	};


	/***/ }),

	/***/ "a691":
	/***/ (function(module, exports) {

	var ceil = Math.ceil;
	var floor = Math.floor;

	// `ToInteger` abstract operation
	// https://tc39.github.io/ecma262/#sec-tointeger
	module.exports = function (argument) {
	  return isNaN(argument = +argument) ? 0 : (argument > 0 ? floor : ceil)(argument);
	};


	/***/ }),

	/***/ "ab13":
	/***/ (function(module, exports, __webpack_require__) {

	var wellKnownSymbol = __webpack_require__("b622");

	var MATCH = wellKnownSymbol('match');

	module.exports = function (METHOD_NAME) {
	  var regexp = /./;
	  try {
	    '/./'[METHOD_NAME](regexp);
	  } catch (e) {
	    try {
	      regexp[MATCH] = false;
	      return '/./'[METHOD_NAME](regexp);
	    } catch (f) { /* empty */ }
	  } return false;
	};


	/***/ }),

	/***/ "ac1f":
	/***/ (function(module, exports, __webpack_require__) {

	var $ = __webpack_require__("23e7");
	var exec = __webpack_require__("9263");

	$({ target: 'RegExp', proto: true, forced: /./.exec !== exec }, {
	  exec: exec
	});


	/***/ }),

	/***/ "ad6d":
	/***/ (function(module, exports, __webpack_require__) {

	var anObject = __webpack_require__("825a");

	// `RegExp.prototype.flags` getter implementation
	// https://tc39.github.io/ecma262/#sec-get-regexp.prototype.flags
	module.exports = function () {
	  var that = anObject(this);
	  var result = '';
	  if (that.global) result += 'g';
	  if (that.ignoreCase) result += 'i';
	  if (that.multiline) result += 'm';
	  if (that.dotAll) result += 's';
	  if (that.unicode) result += 'u';
	  if (that.sticky) result += 'y';
	  return result;
	};


	/***/ }),

	/***/ "ae40":
	/***/ (function(module, exports, __webpack_require__) {

	var DESCRIPTORS = __webpack_require__("83ab");
	var fails = __webpack_require__("d039");
	var has = __webpack_require__("5135");

	var defineProperty = Object.defineProperty;
	var cache = {};

	var thrower = function (it) { throw it; };

	module.exports = function (METHOD_NAME, options) {
	  if (has(cache, METHOD_NAME)) return cache[METHOD_NAME];
	  if (!options) options = {};
	  var method = [][METHOD_NAME];
	  var ACCESSORS = has(options, 'ACCESSORS') ? options.ACCESSORS : false;
	  var argument0 = has(options, 0) ? options[0] : thrower;
	  var argument1 = has(options, 1) ? options[1] : undefined;

	  return cache[METHOD_NAME] = !!method && !fails(function () {
	    if (ACCESSORS && !DESCRIPTORS) return true;
	    var O = { length: -1 };

	    if (ACCESSORS) defineProperty(O, 1, { enumerable: true, get: thrower });
	    else O[1] = 1;

	    method.call(O, argument0, argument1);
	  });
	};


	/***/ }),

	/***/ "ae93":
	/***/ (function(module, exports, __webpack_require__) {

	var getPrototypeOf = __webpack_require__("e163");
	var createNonEnumerableProperty = __webpack_require__("9112");
	var has = __webpack_require__("5135");
	var wellKnownSymbol = __webpack_require__("b622");
	var IS_PURE = __webpack_require__("c430");

	var ITERATOR = wellKnownSymbol('iterator');
	var BUGGY_SAFARI_ITERATORS = false;

	var returnThis = function () { return this; };

	// `%IteratorPrototype%` object
	// https://tc39.github.io/ecma262/#sec-%iteratorprototype%-object
	var IteratorPrototype, PrototypeOfArrayIteratorPrototype, arrayIterator;

	if ([].keys) {
	  arrayIterator = [].keys();
	  // Safari 8 has buggy iterators w/o `next`
	  if (!('next' in arrayIterator)) BUGGY_SAFARI_ITERATORS = true;
	  else {
	    PrototypeOfArrayIteratorPrototype = getPrototypeOf(getPrototypeOf(arrayIterator));
	    if (PrototypeOfArrayIteratorPrototype !== Object.prototype) IteratorPrototype = PrototypeOfArrayIteratorPrototype;
	  }
	}

	if (IteratorPrototype == undefined) IteratorPrototype = {};

	// 25.1.2.1.1 %IteratorPrototype%[@@iterator]()
	if (!IS_PURE && !has(IteratorPrototype, ITERATOR)) {
	  createNonEnumerableProperty(IteratorPrototype, ITERATOR, returnThis);
	}

	module.exports = {
	  IteratorPrototype: IteratorPrototype,
	  BUGGY_SAFARI_ITERATORS: BUGGY_SAFARI_ITERATORS
	};


	/***/ }),

	/***/ "b041":
	/***/ (function(module, exports, __webpack_require__) {

	var TO_STRING_TAG_SUPPORT = __webpack_require__("00ee");
	var classof = __webpack_require__("f5df");

	// `Object.prototype.toString` method implementation
	// https://tc39.github.io/ecma262/#sec-object.prototype.tostring
	module.exports = TO_STRING_TAG_SUPPORT ? {}.toString : function toString() {
	  return '[object ' + classof(this) + ']';
	};


	/***/ }),

	/***/ "b0c0":
	/***/ (function(module, exports, __webpack_require__) {

	var DESCRIPTORS = __webpack_require__("83ab");
	var defineProperty = __webpack_require__("9bf2").f;

	var FunctionPrototype = Function.prototype;
	var FunctionPrototypeToString = FunctionPrototype.toString;
	var nameRE = /^\s*function ([^ (]*)/;
	var NAME = 'name';

	// Function instances `.name` property
	// https://tc39.github.io/ecma262/#sec-function-instances-name
	if (DESCRIPTORS && !(NAME in FunctionPrototype)) {
	  defineProperty(FunctionPrototype, NAME, {
	    configurable: true,
	    get: function () {
	      try {
	        return FunctionPrototypeToString.call(this).match(nameRE)[1];
	      } catch (error) {
	        return '';
	      }
	    }
	  });
	}


	/***/ }),

	/***/ "b622":
	/***/ (function(module, exports, __webpack_require__) {

	var global = __webpack_require__("da84");
	var shared = __webpack_require__("5692");
	var has = __webpack_require__("5135");
	var uid = __webpack_require__("90e3");
	var NATIVE_SYMBOL = __webpack_require__("4930");
	var USE_SYMBOL_AS_UID = __webpack_require__("fdbf");

	var WellKnownSymbolsStore = shared('wks');
	var Symbol = global.Symbol;
	var createWellKnownSymbol = USE_SYMBOL_AS_UID ? Symbol : Symbol && Symbol.withoutSetter || uid;

	module.exports = function (name) {
	  if (!has(WellKnownSymbolsStore, name)) {
	    if (NATIVE_SYMBOL && has(Symbol, name)) WellKnownSymbolsStore[name] = Symbol[name];
	    else WellKnownSymbolsStore[name] = createWellKnownSymbol('Symbol.' + name);
	  } return WellKnownSymbolsStore[name];
	};


	/***/ }),

	/***/ "b64b":
	/***/ (function(module, exports, __webpack_require__) {

	var $ = __webpack_require__("23e7");
	var toObject = __webpack_require__("7b0b");
	var nativeKeys = __webpack_require__("df75");
	var fails = __webpack_require__("d039");

	var FAILS_ON_PRIMITIVES = fails(function () { nativeKeys(1); });

	// `Object.keys` method
	// https://tc39.github.io/ecma262/#sec-object.keys
	$({ target: 'Object', stat: true, forced: FAILS_ON_PRIMITIVES }, {
	  keys: function keys(it) {
	    return nativeKeys(toObject(it));
	  }
	});


	/***/ }),

	/***/ "b727":
	/***/ (function(module, exports, __webpack_require__) {

	var bind = __webpack_require__("0366");
	var IndexedObject = __webpack_require__("44ad");
	var toObject = __webpack_require__("7b0b");
	var toLength = __webpack_require__("50c4");
	var arraySpeciesCreate = __webpack_require__("65f0");

	var push = [].push;

	// `Array.prototype.{ forEach, map, filter, some, every, find, findIndex }` methods implementation
	var createMethod = function (TYPE) {
	  var IS_MAP = TYPE == 1;
	  var IS_FILTER = TYPE == 2;
	  var IS_SOME = TYPE == 3;
	  var IS_EVERY = TYPE == 4;
	  var IS_FIND_INDEX = TYPE == 6;
	  var NO_HOLES = TYPE == 5 || IS_FIND_INDEX;
	  return function ($this, callbackfn, that, specificCreate) {
	    var O = toObject($this);
	    var self = IndexedObject(O);
	    var boundFunction = bind(callbackfn, that, 3);
	    var length = toLength(self.length);
	    var index = 0;
	    var create = specificCreate || arraySpeciesCreate;
	    var target = IS_MAP ? create($this, length) : IS_FILTER ? create($this, 0) : undefined;
	    var value, result;
	    for (;length > index; index++) if (NO_HOLES || index in self) {
	      value = self[index];
	      result = boundFunction(value, index, O);
	      if (TYPE) {
	        if (IS_MAP) target[index] = result; // map
	        else if (result) switch (TYPE) {
	          case 3: return true;              // some
	          case 5: return value;             // find
	          case 6: return index;             // findIndex
	          case 2: push.call(target, value); // filter
	        } else if (IS_EVERY) return false;  // every
	      }
	    }
	    return IS_FIND_INDEX ? -1 : IS_SOME || IS_EVERY ? IS_EVERY : target;
	  };
	};

	module.exports = {
	  // `Array.prototype.forEach` method
	  // https://tc39.github.io/ecma262/#sec-array.prototype.foreach
	  forEach: createMethod(0),
	  // `Array.prototype.map` method
	  // https://tc39.github.io/ecma262/#sec-array.prototype.map
	  map: createMethod(1),
	  // `Array.prototype.filter` method
	  // https://tc39.github.io/ecma262/#sec-array.prototype.filter
	  filter: createMethod(2),
	  // `Array.prototype.some` method
	  // https://tc39.github.io/ecma262/#sec-array.prototype.some
	  some: createMethod(3),
	  // `Array.prototype.every` method
	  // https://tc39.github.io/ecma262/#sec-array.prototype.every
	  every: createMethod(4),
	  // `Array.prototype.find` method
	  // https://tc39.github.io/ecma262/#sec-array.prototype.find
	  find: createMethod(5),
	  // `Array.prototype.findIndex` method
	  // https://tc39.github.io/ecma262/#sec-array.prototype.findIndex
	  findIndex: createMethod(6)
	};


	/***/ }),

	/***/ "c04e":
	/***/ (function(module, exports, __webpack_require__) {

	var isObject = __webpack_require__("861d");

	// `ToPrimitive` abstract operation
	// https://tc39.github.io/ecma262/#sec-toprimitive
	// instead of the ES6 spec version, we didn't implement @@toPrimitive case
	// and the second argument - flag - preferred type is a string
	module.exports = function (input, PREFERRED_STRING) {
	  if (!isObject(input)) return input;
	  var fn, val;
	  if (PREFERRED_STRING && typeof (fn = input.toString) == 'function' && !isObject(val = fn.call(input))) return val;
	  if (typeof (fn = input.valueOf) == 'function' && !isObject(val = fn.call(input))) return val;
	  if (!PREFERRED_STRING && typeof (fn = input.toString) == 'function' && !isObject(val = fn.call(input))) return val;
	  throw TypeError("Can't convert object to primitive value");
	};


	/***/ }),

	/***/ "c430":
	/***/ (function(module, exports) {

	module.exports = false;


	/***/ }),

	/***/ "c6b6":
	/***/ (function(module, exports) {

	var toString = {}.toString;

	module.exports = function (it) {
	  return toString.call(it).slice(8, -1);
	};


	/***/ }),

	/***/ "c6cd":
	/***/ (function(module, exports, __webpack_require__) {

	var global = __webpack_require__("da84");
	var setGlobal = __webpack_require__("ce4e");

	var SHARED = '__core-js_shared__';
	var store = global[SHARED] || setGlobal(SHARED, {});

	module.exports = store;


	/***/ }),

	/***/ "c740":
	/***/ (function(module, exports, __webpack_require__) {

	var $ = __webpack_require__("23e7");
	var $findIndex = __webpack_require__("b727").findIndex;
	var addToUnscopables = __webpack_require__("44d2");
	var arrayMethodUsesToLength = __webpack_require__("ae40");

	var FIND_INDEX = 'findIndex';
	var SKIPS_HOLES = true;

	var USES_TO_LENGTH = arrayMethodUsesToLength(FIND_INDEX);

	// Shouldn't skip holes
	if (FIND_INDEX in []) Array(1)[FIND_INDEX](function () { SKIPS_HOLES = false; });

	// `Array.prototype.findIndex` method
	// https://tc39.github.io/ecma262/#sec-array.prototype.findindex
	$({ target: 'Array', proto: true, forced: SKIPS_HOLES || !USES_TO_LENGTH }, {
	  findIndex: function findIndex(callbackfn /* , that = undefined */) {
	    return $findIndex(this, callbackfn, arguments.length > 1 ? arguments[1] : undefined);
	  }
	});

	// https://tc39.github.io/ecma262/#sec-array.prototype-@@unscopables
	addToUnscopables(FIND_INDEX);


	/***/ }),

	/***/ "c8ba":
	/***/ (function(module, exports) {

	var g;

	// This works in non-strict mode
	g = (function() {
		return this;
	})();

	try {
		// This works if eval is allowed (see CSP)
		g = g || new Function("return this")();
	} catch (e) {
		// This works if the window reference is available
		if (typeof window === "object") g = window;
	}

	// g can still be undefined, but nothing to do about it...
	// We return undefined, instead of nothing here, so it's
	// easier to handle this case. if(!global) { ...}

	module.exports = g;


	/***/ }),

	/***/ "c975":
	/***/ (function(module, exports, __webpack_require__) {

	var $ = __webpack_require__("23e7");
	var $indexOf = __webpack_require__("4d64").indexOf;
	var arrayMethodIsStrict = __webpack_require__("a640");
	var arrayMethodUsesToLength = __webpack_require__("ae40");

	var nativeIndexOf = [].indexOf;

	var NEGATIVE_ZERO = !!nativeIndexOf && 1 / [1].indexOf(1, -0) < 0;
	var STRICT_METHOD = arrayMethodIsStrict('indexOf');
	var USES_TO_LENGTH = arrayMethodUsesToLength('indexOf', { ACCESSORS: true, 1: 0 });

	// `Array.prototype.indexOf` method
	// https://tc39.github.io/ecma262/#sec-array.prototype.indexof
	$({ target: 'Array', proto: true, forced: NEGATIVE_ZERO || !STRICT_METHOD || !USES_TO_LENGTH }, {
	  indexOf: function indexOf(searchElement /* , fromIndex = 0 */) {
	    return NEGATIVE_ZERO
	      // convert -0 to +0
	      ? nativeIndexOf.apply(this, arguments) || 0
	      : $indexOf(this, searchElement, arguments.length > 1 ? arguments[1] : undefined);
	  }
	});


	/***/ }),

	/***/ "ca84":
	/***/ (function(module, exports, __webpack_require__) {

	var has = __webpack_require__("5135");
	var toIndexedObject = __webpack_require__("fc6a");
	var indexOf = __webpack_require__("4d64").indexOf;
	var hiddenKeys = __webpack_require__("d012");

	module.exports = function (object, names) {
	  var O = toIndexedObject(object);
	  var i = 0;
	  var result = [];
	  var key;
	  for (key in O) !has(hiddenKeys, key) && has(O, key) && result.push(key);
	  // Don't enum bug & hidden keys
	  while (names.length > i) if (has(O, key = names[i++])) {
	    ~indexOf(result, key) || result.push(key);
	  }
	  return result;
	};


	/***/ }),

	/***/ "caad":
	/***/ (function(module, exports, __webpack_require__) {

	var $ = __webpack_require__("23e7");
	var $includes = __webpack_require__("4d64").includes;
	var addToUnscopables = __webpack_require__("44d2");
	var arrayMethodUsesToLength = __webpack_require__("ae40");

	var USES_TO_LENGTH = arrayMethodUsesToLength('indexOf', { ACCESSORS: true, 1: 0 });

	// `Array.prototype.includes` method
	// https://tc39.github.io/ecma262/#sec-array.prototype.includes
	$({ target: 'Array', proto: true, forced: !USES_TO_LENGTH }, {
	  includes: function includes(el /* , fromIndex = 0 */) {
	    return $includes(this, el, arguments.length > 1 ? arguments[1] : undefined);
	  }
	});

	// https://tc39.github.io/ecma262/#sec-array.prototype-@@unscopables
	addToUnscopables('includes');


	/***/ }),

	/***/ "cc12":
	/***/ (function(module, exports, __webpack_require__) {

	var global = __webpack_require__("da84");
	var isObject = __webpack_require__("861d");

	var document = global.document;
	// typeof document.createElement is 'object' in old IE
	var EXISTS = isObject(document) && isObject(document.createElement);

	module.exports = function (it) {
	  return EXISTS ? document.createElement(it) : {};
	};


	/***/ }),

	/***/ "ce4e":
	/***/ (function(module, exports, __webpack_require__) {

	var global = __webpack_require__("da84");
	var createNonEnumerableProperty = __webpack_require__("9112");

	module.exports = function (key, value) {
	  try {
	    createNonEnumerableProperty(global, key, value);
	  } catch (error) {
	    global[key] = value;
	  } return value;
	};


	/***/ }),

	/***/ "d012":
	/***/ (function(module, exports) {

	module.exports = {};


	/***/ }),

	/***/ "d039":
	/***/ (function(module, exports) {

	module.exports = function (exec) {
	  try {
	    return !!exec();
	  } catch (error) {
	    return true;
	  }
	};


	/***/ }),

	/***/ "d066":
	/***/ (function(module, exports, __webpack_require__) {

	var path = __webpack_require__("428f");
	var global = __webpack_require__("da84");

	var aFunction = function (variable) {
	  return typeof variable == 'function' ? variable : undefined;
	};

	module.exports = function (namespace, method) {
	  return arguments.length < 2 ? aFunction(path[namespace]) || aFunction(global[namespace])
	    : path[namespace] && path[namespace][method] || global[namespace] && global[namespace][method];
	};


	/***/ }),

	/***/ "d1e7":
	/***/ (function(module, exports, __webpack_require__) {

	var nativePropertyIsEnumerable = {}.propertyIsEnumerable;
	var getOwnPropertyDescriptor = Object.getOwnPropertyDescriptor;

	// Nashorn ~ JDK8 bug
	var NASHORN_BUG = getOwnPropertyDescriptor && !nativePropertyIsEnumerable.call({ 1: 2 }, 1);

	// `Object.prototype.propertyIsEnumerable` method implementation
	// https://tc39.github.io/ecma262/#sec-object.prototype.propertyisenumerable
	exports.f = NASHORN_BUG ? function propertyIsEnumerable(V) {
	  var descriptor = getOwnPropertyDescriptor(this, V);
	  return !!descriptor && descriptor.enumerable;
	} : nativePropertyIsEnumerable;


	/***/ }),

	/***/ "d28b":
	/***/ (function(module, exports, __webpack_require__) {

	var defineWellKnownSymbol = __webpack_require__("746f");

	// `Symbol.iterator` well-known symbol
	// https://tc39.github.io/ecma262/#sec-symbol.iterator
	defineWellKnownSymbol('iterator');


	/***/ }),

	/***/ "d2bb":
	/***/ (function(module, exports, __webpack_require__) {

	var anObject = __webpack_require__("825a");
	var aPossiblePrototype = __webpack_require__("3bbe");

	// `Object.setPrototypeOf` method
	// https://tc39.github.io/ecma262/#sec-object.setprototypeof
	// Works with __proto__ only. Old v8 can't work with null proto objects.
	/* eslint-disable no-proto */
	module.exports = Object.setPrototypeOf || ('__proto__' in {} ? function () {
	  var CORRECT_SETTER = false;
	  var test = {};
	  var setter;
	  try {
	    setter = Object.getOwnPropertyDescriptor(Object.prototype, '__proto__').set;
	    setter.call(test, []);
	    CORRECT_SETTER = test instanceof Array;
	  } catch (error) { /* empty */ }
	  return function setPrototypeOf(O, proto) {
	    anObject(O);
	    aPossiblePrototype(proto);
	    if (CORRECT_SETTER) setter.call(O, proto);
	    else O.__proto__ = proto;
	    return O;
	  };
	}() : undefined);


	/***/ }),

	/***/ "d3b7":
	/***/ (function(module, exports, __webpack_require__) {

	var TO_STRING_TAG_SUPPORT = __webpack_require__("00ee");
	var redefine = __webpack_require__("6eeb");
	var toString = __webpack_require__("b041");

	// `Object.prototype.toString` method
	// https://tc39.github.io/ecma262/#sec-object.prototype.tostring
	if (!TO_STRING_TAG_SUPPORT) {
	  redefine(Object.prototype, 'toString', toString, { unsafe: true });
	}


	/***/ }),

	/***/ "d44e":
	/***/ (function(module, exports, __webpack_require__) {

	var defineProperty = __webpack_require__("9bf2").f;
	var has = __webpack_require__("5135");
	var wellKnownSymbol = __webpack_require__("b622");

	var TO_STRING_TAG = wellKnownSymbol('toStringTag');

	module.exports = function (it, TAG, STATIC) {
	  if (it && !has(it = STATIC ? it : it.prototype, TO_STRING_TAG)) {
	    defineProperty(it, TO_STRING_TAG, { configurable: true, value: TAG });
	  }
	};


	/***/ }),

	/***/ "d58f":
	/***/ (function(module, exports, __webpack_require__) {

	var aFunction = __webpack_require__("1c0b");
	var toObject = __webpack_require__("7b0b");
	var IndexedObject = __webpack_require__("44ad");
	var toLength = __webpack_require__("50c4");

	// `Array.prototype.{ reduce, reduceRight }` methods implementation
	var createMethod = function (IS_RIGHT) {
	  return function (that, callbackfn, argumentsLength, memo) {
	    aFunction(callbackfn);
	    var O = toObject(that);
	    var self = IndexedObject(O);
	    var length = toLength(O.length);
	    var index = IS_RIGHT ? length - 1 : 0;
	    var i = IS_RIGHT ? -1 : 1;
	    if (argumentsLength < 2) while (true) {
	      if (index in self) {
	        memo = self[index];
	        index += i;
	        break;
	      }
	      index += i;
	      if (IS_RIGHT ? index < 0 : length <= index) {
	        throw TypeError('Reduce of empty array with no initial value');
	      }
	    }
	    for (;IS_RIGHT ? index >= 0 : length > index; index += i) if (index in self) {
	      memo = callbackfn(memo, self[index], index, O);
	    }
	    return memo;
	  };
	};

	module.exports = {
	  // `Array.prototype.reduce` method
	  // https://tc39.github.io/ecma262/#sec-array.prototype.reduce
	  left: createMethod(false),
	  // `Array.prototype.reduceRight` method
	  // https://tc39.github.io/ecma262/#sec-array.prototype.reduceright
	  right: createMethod(true)
	};


	/***/ }),

	/***/ "d784":
	/***/ (function(module, exports, __webpack_require__) {

	// TODO: Remove from `core-js@4` since it's moved to entry points
	__webpack_require__("ac1f");
	var redefine = __webpack_require__("6eeb");
	var fails = __webpack_require__("d039");
	var wellKnownSymbol = __webpack_require__("b622");
	var regexpExec = __webpack_require__("9263");
	var createNonEnumerableProperty = __webpack_require__("9112");

	var SPECIES = wellKnownSymbol('species');

	var REPLACE_SUPPORTS_NAMED_GROUPS = !fails(function () {
	  // #replace needs built-in support for named groups.
	  // #match works fine because it just return the exec results, even if it has
	  // a "grops" property.
	  var re = /./;
	  re.exec = function () {
	    var result = [];
	    result.groups = { a: '7' };
	    return result;
	  };
	  return ''.replace(re, '$<a>') !== '7';
	});

	// IE <= 11 replaces $0 with the whole match, as if it was $&
	// https://stackoverflow.com/questions/6024666/getting-ie-to-replace-a-regex-with-the-literal-string-0
	var REPLACE_KEEPS_$0 = (function () {
	  return 'a'.replace(/./, '$0') === '$0';
	})();

	var REPLACE = wellKnownSymbol('replace');
	// Safari <= 13.0.3(?) substitutes nth capture where n>m with an empty string
	var REGEXP_REPLACE_SUBSTITUTES_UNDEFINED_CAPTURE = (function () {
	  if (/./[REPLACE]) {
	    return /./[REPLACE]('a', '$0') === '';
	  }
	  return false;
	})();

	// Chrome 51 has a buggy "split" implementation when RegExp#exec !== nativeExec
	// Weex JS has frozen built-in prototypes, so use try / catch wrapper
	var SPLIT_WORKS_WITH_OVERWRITTEN_EXEC = !fails(function () {
	  var re = /(?:)/;
	  var originalExec = re.exec;
	  re.exec = function () { return originalExec.apply(this, arguments); };
	  var result = 'ab'.split(re);
	  return result.length !== 2 || result[0] !== 'a' || result[1] !== 'b';
	});

	module.exports = function (KEY, length, exec, sham) {
	  var SYMBOL = wellKnownSymbol(KEY);

	  var DELEGATES_TO_SYMBOL = !fails(function () {
	    // String methods call symbol-named RegEp methods
	    var O = {};
	    O[SYMBOL] = function () { return 7; };
	    return ''[KEY](O) != 7;
	  });

	  var DELEGATES_TO_EXEC = DELEGATES_TO_SYMBOL && !fails(function () {
	    // Symbol-named RegExp methods call .exec
	    var execCalled = false;
	    var re = /a/;

	    if (KEY === 'split') {
	      // We can't use real regex here since it causes deoptimization
	      // and serious performance degradation in V8
	      // https://github.com/zloirock/core-js/issues/306
	      re = {};
	      // RegExp[@@split] doesn't call the regex's exec method, but first creates
	      // a new one. We need to return the patched regex when creating the new one.
	      re.constructor = {};
	      re.constructor[SPECIES] = function () { return re; };
	      re.flags = '';
	      re[SYMBOL] = /./[SYMBOL];
	    }

	    re.exec = function () { execCalled = true; return null; };

	    re[SYMBOL]('');
	    return !execCalled;
	  });

	  if (
	    !DELEGATES_TO_SYMBOL ||
	    !DELEGATES_TO_EXEC ||
	    (KEY === 'replace' && !(
	      REPLACE_SUPPORTS_NAMED_GROUPS &&
	      REPLACE_KEEPS_$0 &&
	      !REGEXP_REPLACE_SUBSTITUTES_UNDEFINED_CAPTURE
	    )) ||
	    (KEY === 'split' && !SPLIT_WORKS_WITH_OVERWRITTEN_EXEC)
	  ) {
	    var nativeRegExpMethod = /./[SYMBOL];
	    var methods = exec(SYMBOL, ''[KEY], function (nativeMethod, regexp, str, arg2, forceStringMethod) {
	      if (regexp.exec === regexpExec) {
	        if (DELEGATES_TO_SYMBOL && !forceStringMethod) {
	          // The native String method already delegates to @@method (this
	          // polyfilled function), leasing to infinite recursion.
	          // We avoid it by directly calling the native @@method method.
	          return { done: true, value: nativeRegExpMethod.call(regexp, str, arg2) };
	        }
	        return { done: true, value: nativeMethod.call(str, regexp, arg2) };
	      }
	      return { done: false };
	    }, {
	      REPLACE_KEEPS_$0: REPLACE_KEEPS_$0,
	      REGEXP_REPLACE_SUBSTITUTES_UNDEFINED_CAPTURE: REGEXP_REPLACE_SUBSTITUTES_UNDEFINED_CAPTURE
	    });
	    var stringMethod = methods[0];
	    var regexMethod = methods[1];

	    redefine(String.prototype, KEY, stringMethod);
	    redefine(RegExp.prototype, SYMBOL, length == 2
	      // 21.2.5.8 RegExp.prototype[@@replace](string, replaceValue)
	      // 21.2.5.11 RegExp.prototype[@@split](string, limit)
	      ? function (string, arg) { return regexMethod.call(string, this, arg); }
	      // 21.2.5.6 RegExp.prototype[@@match](string)
	      // 21.2.5.9 RegExp.prototype[@@search](string)
	      : function (string) { return regexMethod.call(string, this); }
	    );
	  }

	  if (sham) createNonEnumerableProperty(RegExp.prototype[SYMBOL], 'sham', true);
	};


	/***/ }),

	/***/ "d81d":
	/***/ (function(module, exports, __webpack_require__) {

	var $ = __webpack_require__("23e7");
	var $map = __webpack_require__("b727").map;
	var arrayMethodHasSpeciesSupport = __webpack_require__("1dde");
	var arrayMethodUsesToLength = __webpack_require__("ae40");

	var HAS_SPECIES_SUPPORT = arrayMethodHasSpeciesSupport('map');
	// FF49- issue
	var USES_TO_LENGTH = arrayMethodUsesToLength('map');

	// `Array.prototype.map` method
	// https://tc39.github.io/ecma262/#sec-array.prototype.map
	// with adding support of @@species
	$({ target: 'Array', proto: true, forced: !HAS_SPECIES_SUPPORT || !USES_TO_LENGTH }, {
	  map: function map(callbackfn /* , thisArg */) {
	    return $map(this, callbackfn, arguments.length > 1 ? arguments[1] : undefined);
	  }
	});


	/***/ }),

	/***/ "da84":
	/***/ (function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(global) {var check = function (it) {
	  return it && it.Math == Math && it;
	};

	// https://github.com/zloirock/core-js/issues/86#issuecomment-115759028
	module.exports =
	  // eslint-disable-next-line no-undef
	  check(typeof globalThis == 'object' && globalThis) ||
	  check(typeof window == 'object' && window) ||
	  check(typeof self == 'object' && self) ||
	  check(typeof global == 'object' && global) ||
	  // eslint-disable-next-line no-new-func
	  Function('return this')();

	/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__("c8ba")));

	/***/ }),

	/***/ "dbb4":
	/***/ (function(module, exports, __webpack_require__) {

	var $ = __webpack_require__("23e7");
	var DESCRIPTORS = __webpack_require__("83ab");
	var ownKeys = __webpack_require__("56ef");
	var toIndexedObject = __webpack_require__("fc6a");
	var getOwnPropertyDescriptorModule = __webpack_require__("06cf");
	var createProperty = __webpack_require__("8418");

	// `Object.getOwnPropertyDescriptors` method
	// https://tc39.github.io/ecma262/#sec-object.getownpropertydescriptors
	$({ target: 'Object', stat: true, sham: !DESCRIPTORS }, {
	  getOwnPropertyDescriptors: function getOwnPropertyDescriptors(object) {
	    var O = toIndexedObject(object);
	    var getOwnPropertyDescriptor = getOwnPropertyDescriptorModule.f;
	    var keys = ownKeys(O);
	    var result = {};
	    var index = 0;
	    var key, descriptor;
	    while (keys.length > index) {
	      descriptor = getOwnPropertyDescriptor(O, key = keys[index++]);
	      if (descriptor !== undefined) createProperty(result, key, descriptor);
	    }
	    return result;
	  }
	});


	/***/ }),

	/***/ "dbf1":
	/***/ (function(module, __webpack_exports__, __webpack_require__) {
	/* WEBPACK VAR INJECTION */(function(global) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return console; });
	function getConsole() {
	  if (typeof window !== "undefined") {
	    return window.console;
	  }

	  return global.console;
	}

	var console = getConsole();

	/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__("c8ba")));

	/***/ }),

	/***/ "ddb0":
	/***/ (function(module, exports, __webpack_require__) {

	var global = __webpack_require__("da84");
	var DOMIterables = __webpack_require__("fdbc");
	var ArrayIteratorMethods = __webpack_require__("e260");
	var createNonEnumerableProperty = __webpack_require__("9112");
	var wellKnownSymbol = __webpack_require__("b622");

	var ITERATOR = wellKnownSymbol('iterator');
	var TO_STRING_TAG = wellKnownSymbol('toStringTag');
	var ArrayValues = ArrayIteratorMethods.values;

	for (var COLLECTION_NAME in DOMIterables) {
	  var Collection = global[COLLECTION_NAME];
	  var CollectionPrototype = Collection && Collection.prototype;
	  if (CollectionPrototype) {
	    // some Chrome versions have non-configurable methods on DOMTokenList
	    if (CollectionPrototype[ITERATOR] !== ArrayValues) try {
	      createNonEnumerableProperty(CollectionPrototype, ITERATOR, ArrayValues);
	    } catch (error) {
	      CollectionPrototype[ITERATOR] = ArrayValues;
	    }
	    if (!CollectionPrototype[TO_STRING_TAG]) {
	      createNonEnumerableProperty(CollectionPrototype, TO_STRING_TAG, COLLECTION_NAME);
	    }
	    if (DOMIterables[COLLECTION_NAME]) for (var METHOD_NAME in ArrayIteratorMethods) {
	      // some Chrome versions have non-configurable methods on DOMTokenList
	      if (CollectionPrototype[METHOD_NAME] !== ArrayIteratorMethods[METHOD_NAME]) try {
	        createNonEnumerableProperty(CollectionPrototype, METHOD_NAME, ArrayIteratorMethods[METHOD_NAME]);
	      } catch (error) {
	        CollectionPrototype[METHOD_NAME] = ArrayIteratorMethods[METHOD_NAME];
	      }
	    }
	  }
	}


	/***/ }),

	/***/ "df75":
	/***/ (function(module, exports, __webpack_require__) {

	var internalObjectKeys = __webpack_require__("ca84");
	var enumBugKeys = __webpack_require__("7839");

	// `Object.keys` method
	// https://tc39.github.io/ecma262/#sec-object.keys
	module.exports = Object.keys || function keys(O) {
	  return internalObjectKeys(O, enumBugKeys);
	};


	/***/ }),

	/***/ "e01a":
	/***/ (function(module, exports, __webpack_require__) {
	// `Symbol.prototype.description` getter
	// https://tc39.github.io/ecma262/#sec-symbol.prototype.description

	var $ = __webpack_require__("23e7");
	var DESCRIPTORS = __webpack_require__("83ab");
	var global = __webpack_require__("da84");
	var has = __webpack_require__("5135");
	var isObject = __webpack_require__("861d");
	var defineProperty = __webpack_require__("9bf2").f;
	var copyConstructorProperties = __webpack_require__("e893");

	var NativeSymbol = global.Symbol;

	if (DESCRIPTORS && typeof NativeSymbol == 'function' && (!('description' in NativeSymbol.prototype) ||
	  // Safari 12 bug
	  NativeSymbol().description !== undefined
	)) {
	  var EmptyStringDescriptionStore = {};
	  // wrap Symbol constructor for correct work with undefined description
	  var SymbolWrapper = function Symbol() {
	    var description = arguments.length < 1 || arguments[0] === undefined ? undefined : String(arguments[0]);
	    var result = this instanceof SymbolWrapper
	      ? new NativeSymbol(description)
	      // in Edge 13, String(Symbol(undefined)) === 'Symbol(undefined)'
	      : description === undefined ? NativeSymbol() : NativeSymbol(description);
	    if (description === '') EmptyStringDescriptionStore[result] = true;
	    return result;
	  };
	  copyConstructorProperties(SymbolWrapper, NativeSymbol);
	  var symbolPrototype = SymbolWrapper.prototype = NativeSymbol.prototype;
	  symbolPrototype.constructor = SymbolWrapper;

	  var symbolToString = symbolPrototype.toString;
	  var native = String(NativeSymbol('test')) == 'Symbol(test)';
	  var regexp = /^Symbol\((.*)\)[^)]+$/;
	  defineProperty(symbolPrototype, 'description', {
	    configurable: true,
	    get: function description() {
	      var symbol = isObject(this) ? this.valueOf() : this;
	      var string = symbolToString.call(symbol);
	      if (has(EmptyStringDescriptionStore, symbol)) return '';
	      var desc = native ? string.slice(7, -1) : string.replace(regexp, '$1');
	      return desc === '' ? undefined : desc;
	    }
	  });

	  $({ global: true, forced: true }, {
	    Symbol: SymbolWrapper
	  });
	}


	/***/ }),

	/***/ "e163":
	/***/ (function(module, exports, __webpack_require__) {

	var has = __webpack_require__("5135");
	var toObject = __webpack_require__("7b0b");
	var sharedKey = __webpack_require__("f772");
	var CORRECT_PROTOTYPE_GETTER = __webpack_require__("e177");

	var IE_PROTO = sharedKey('IE_PROTO');
	var ObjectPrototype = Object.prototype;

	// `Object.getPrototypeOf` method
	// https://tc39.github.io/ecma262/#sec-object.getprototypeof
	module.exports = CORRECT_PROTOTYPE_GETTER ? Object.getPrototypeOf : function (O) {
	  O = toObject(O);
	  if (has(O, IE_PROTO)) return O[IE_PROTO];
	  if (typeof O.constructor == 'function' && O instanceof O.constructor) {
	    return O.constructor.prototype;
	  } return O instanceof Object ? ObjectPrototype : null;
	};


	/***/ }),

	/***/ "e177":
	/***/ (function(module, exports, __webpack_require__) {

	var fails = __webpack_require__("d039");

	module.exports = !fails(function () {
	  function F() { /* empty */ }
	  F.prototype.constructor = null;
	  return Object.getPrototypeOf(new F()) !== F.prototype;
	});


	/***/ }),

	/***/ "e260":
	/***/ (function(module, exports, __webpack_require__) {

	var toIndexedObject = __webpack_require__("fc6a");
	var addToUnscopables = __webpack_require__("44d2");
	var Iterators = __webpack_require__("3f8c");
	var InternalStateModule = __webpack_require__("69f3");
	var defineIterator = __webpack_require__("7dd0");

	var ARRAY_ITERATOR = 'Array Iterator';
	var setInternalState = InternalStateModule.set;
	var getInternalState = InternalStateModule.getterFor(ARRAY_ITERATOR);

	// `Array.prototype.entries` method
	// https://tc39.github.io/ecma262/#sec-array.prototype.entries
	// `Array.prototype.keys` method
	// https://tc39.github.io/ecma262/#sec-array.prototype.keys
	// `Array.prototype.values` method
	// https://tc39.github.io/ecma262/#sec-array.prototype.values
	// `Array.prototype[@@iterator]` method
	// https://tc39.github.io/ecma262/#sec-array.prototype-@@iterator
	// `CreateArrayIterator` internal method
	// https://tc39.github.io/ecma262/#sec-createarrayiterator
	module.exports = defineIterator(Array, 'Array', function (iterated, kind) {
	  setInternalState(this, {
	    type: ARRAY_ITERATOR,
	    target: toIndexedObject(iterated), // target
	    index: 0,                          // next index
	    kind: kind                         // kind
	  });
	// `%ArrayIteratorPrototype%.next` method
	// https://tc39.github.io/ecma262/#sec-%arrayiteratorprototype%.next
	}, function () {
	  var state = getInternalState(this);
	  var target = state.target;
	  var kind = state.kind;
	  var index = state.index++;
	  if (!target || index >= target.length) {
	    state.target = undefined;
	    return { value: undefined, done: true };
	  }
	  if (kind == 'keys') return { value: index, done: false };
	  if (kind == 'values') return { value: target[index], done: false };
	  return { value: [index, target[index]], done: false };
	}, 'values');

	// argumentsList[@@iterator] is %ArrayProto_values%
	// https://tc39.github.io/ecma262/#sec-createunmappedargumentsobject
	// https://tc39.github.io/ecma262/#sec-createmappedargumentsobject
	Iterators.Arguments = Iterators.Array;

	// https://tc39.github.io/ecma262/#sec-array.prototype-@@unscopables
	addToUnscopables('keys');
	addToUnscopables('values');
	addToUnscopables('entries');


	/***/ }),

	/***/ "e439":
	/***/ (function(module, exports, __webpack_require__) {

	var $ = __webpack_require__("23e7");
	var fails = __webpack_require__("d039");
	var toIndexedObject = __webpack_require__("fc6a");
	var nativeGetOwnPropertyDescriptor = __webpack_require__("06cf").f;
	var DESCRIPTORS = __webpack_require__("83ab");

	var FAILS_ON_PRIMITIVES = fails(function () { nativeGetOwnPropertyDescriptor(1); });
	var FORCED = !DESCRIPTORS || FAILS_ON_PRIMITIVES;

	// `Object.getOwnPropertyDescriptor` method
	// https://tc39.github.io/ecma262/#sec-object.getownpropertydescriptor
	$({ target: 'Object', stat: true, forced: FORCED, sham: !DESCRIPTORS }, {
	  getOwnPropertyDescriptor: function getOwnPropertyDescriptor(it, key) {
	    return nativeGetOwnPropertyDescriptor(toIndexedObject(it), key);
	  }
	});


	/***/ }),

	/***/ "e538":
	/***/ (function(module, exports, __webpack_require__) {

	var wellKnownSymbol = __webpack_require__("b622");

	exports.f = wellKnownSymbol;


	/***/ }),

	/***/ "e893":
	/***/ (function(module, exports, __webpack_require__) {

	var has = __webpack_require__("5135");
	var ownKeys = __webpack_require__("56ef");
	var getOwnPropertyDescriptorModule = __webpack_require__("06cf");
	var definePropertyModule = __webpack_require__("9bf2");

	module.exports = function (target, source) {
	  var keys = ownKeys(source);
	  var defineProperty = definePropertyModule.f;
	  var getOwnPropertyDescriptor = getOwnPropertyDescriptorModule.f;
	  for (var i = 0; i < keys.length; i++) {
	    var key = keys[i];
	    if (!has(target, key)) defineProperty(target, key, getOwnPropertyDescriptor(source, key));
	  }
	};


	/***/ }),

	/***/ "e8b5":
	/***/ (function(module, exports, __webpack_require__) {

	var classof = __webpack_require__("c6b6");

	// `IsArray` abstract operation
	// https://tc39.github.io/ecma262/#sec-isarray
	module.exports = Array.isArray || function isArray(arg) {
	  return classof(arg) == 'Array';
	};


	/***/ }),

	/***/ "e95a":
	/***/ (function(module, exports, __webpack_require__) {

	var wellKnownSymbol = __webpack_require__("b622");
	var Iterators = __webpack_require__("3f8c");

	var ITERATOR = wellKnownSymbol('iterator');
	var ArrayPrototype = Array.prototype;

	// check on default Array iterator
	module.exports = function (it) {
	  return it !== undefined && (Iterators.Array === it || ArrayPrototype[ITERATOR] === it);
	};


	/***/ }),

	/***/ "f5df":
	/***/ (function(module, exports, __webpack_require__) {

	var TO_STRING_TAG_SUPPORT = __webpack_require__("00ee");
	var classofRaw = __webpack_require__("c6b6");
	var wellKnownSymbol = __webpack_require__("b622");

	var TO_STRING_TAG = wellKnownSymbol('toStringTag');
	// ES3 wrong here
	var CORRECT_ARGUMENTS = classofRaw(function () { return arguments; }()) == 'Arguments';

	// fallback for IE11 Script Access Denied error
	var tryGet = function (it, key) {
	  try {
	    return it[key];
	  } catch (error) { /* empty */ }
	};

	// getting tag from ES6+ `Object.prototype.toString`
	module.exports = TO_STRING_TAG_SUPPORT ? classofRaw : function (it) {
	  var O, tag, result;
	  return it === undefined ? 'Undefined' : it === null ? 'Null'
	    // @@toStringTag case
	    : typeof (tag = tryGet(O = Object(it), TO_STRING_TAG)) == 'string' ? tag
	    // builtinTag case
	    : CORRECT_ARGUMENTS ? classofRaw(O)
	    // ES3 arguments fallback
	    : (result = classofRaw(O)) == 'Object' && typeof O.callee == 'function' ? 'Arguments' : result;
	};


	/***/ }),

	/***/ "f772":
	/***/ (function(module, exports, __webpack_require__) {

	var shared = __webpack_require__("5692");
	var uid = __webpack_require__("90e3");

	var keys = shared('keys');

	module.exports = function (key) {
	  return keys[key] || (keys[key] = uid(key));
	};


	/***/ }),

	/***/ "fb15":
	/***/ (function(module, __webpack_exports__, __webpack_require__) {
	// ESM COMPAT FLAG
	__webpack_require__.r(__webpack_exports__);

	// CONCATENATED MODULE: ./node_modules/@vue/cli-service/lib/commands/build/setPublicPath.js
	// This file is imported into lib/wc client bundles.

	if (typeof window !== 'undefined') {
	  var currentScript = window.document.currentScript;
	  {
	    var getCurrentScript = __webpack_require__("8875");
	    currentScript = getCurrentScript();

	    // for backward compatibility, because previously we directly included the polyfill
	    if (!('currentScript' in document)) {
	      Object.defineProperty(document, 'currentScript', { get: getCurrentScript });
	    }
	  }

	  var src = currentScript && currentScript.src.match(/(.+\/)[^/]+\.js(\?.*)?$/);
	  if (src) {
	    __webpack_require__.p = src[1]; // eslint-disable-line
	  }
	}

	// EXTERNAL MODULE: ./node_modules/core-js/modules/es.array.concat.js
	__webpack_require__("99af");

	// EXTERNAL MODULE: ./node_modules/core-js/modules/es.array.filter.js
	__webpack_require__("4de4");

	// EXTERNAL MODULE: ./node_modules/core-js/modules/es.array.for-each.js
	__webpack_require__("4160");

	// EXTERNAL MODULE: ./node_modules/core-js/modules/es.array.index-of.js
	__webpack_require__("c975");

	// EXTERNAL MODULE: ./node_modules/core-js/modules/es.array.map.js
	__webpack_require__("d81d");

	// EXTERNAL MODULE: ./node_modules/core-js/modules/es.array.splice.js
	__webpack_require__("a434");

	// EXTERNAL MODULE: ./node_modules/core-js/modules/web.dom-collections.for-each.js
	__webpack_require__("159b");

	// EXTERNAL MODULE: ./node_modules/core-js/modules/es.symbol.js
	__webpack_require__("a4d3");

	// EXTERNAL MODULE: ./node_modules/core-js/modules/es.object.get-own-property-descriptor.js
	__webpack_require__("e439");

	// EXTERNAL MODULE: ./node_modules/core-js/modules/es.object.get-own-property-descriptors.js
	__webpack_require__("dbb4");

	// EXTERNAL MODULE: ./node_modules/core-js/modules/es.object.keys.js
	__webpack_require__("b64b");

	// CONCATENATED MODULE: ./node_modules/@babel/runtime/helpers/esm/defineProperty.js
	function _defineProperty(obj, key, value) {
	  if (key in obj) {
	    Object.defineProperty(obj, key, {
	      value: value,
	      enumerable: true,
	      configurable: true,
	      writable: true
	    });
	  } else {
	    obj[key] = value;
	  }

	  return obj;
	}
	// CONCATENATED MODULE: ./node_modules/@babel/runtime/helpers/esm/objectSpread2.js









	function ownKeys(object, enumerableOnly) {
	  var keys = Object.keys(object);

	  if (Object.getOwnPropertySymbols) {
	    var symbols = Object.getOwnPropertySymbols(object);
	    if (enumerableOnly) symbols = symbols.filter(function (sym) {
	      return Object.getOwnPropertyDescriptor(object, sym).enumerable;
	    });
	    keys.push.apply(keys, symbols);
	  }

	  return keys;
	}

	function _objectSpread2(target) {
	  for (var i = 1; i < arguments.length; i++) {
	    var source = arguments[i] != null ? arguments[i] : {};

	    if (i % 2) {
	      ownKeys(Object(source), true).forEach(function (key) {
	        _defineProperty(target, key, source[key]);
	      });
	    } else if (Object.getOwnPropertyDescriptors) {
	      Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));
	    } else {
	      ownKeys(Object(source)).forEach(function (key) {
	        Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
	      });
	    }
	  }

	  return target;
	}
	// CONCATENATED MODULE: ./node_modules/@babel/runtime/helpers/esm/arrayWithHoles.js
	function _arrayWithHoles(arr) {
	  if (Array.isArray(arr)) return arr;
	}
	// EXTERNAL MODULE: ./node_modules/core-js/modules/es.symbol.description.js
	__webpack_require__("e01a");

	// EXTERNAL MODULE: ./node_modules/core-js/modules/es.symbol.iterator.js
	__webpack_require__("d28b");

	// EXTERNAL MODULE: ./node_modules/core-js/modules/es.array.iterator.js
	__webpack_require__("e260");

	// EXTERNAL MODULE: ./node_modules/core-js/modules/es.object.to-string.js
	__webpack_require__("d3b7");

	// EXTERNAL MODULE: ./node_modules/core-js/modules/es.string.iterator.js
	__webpack_require__("3ca3");

	// EXTERNAL MODULE: ./node_modules/core-js/modules/web.dom-collections.iterator.js
	__webpack_require__("ddb0");

	// CONCATENATED MODULE: ./node_modules/@babel/runtime/helpers/esm/iterableToArrayLimit.js







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
	// EXTERNAL MODULE: ./node_modules/core-js/modules/es.array.from.js
	__webpack_require__("a630");

	// EXTERNAL MODULE: ./node_modules/core-js/modules/es.array.slice.js
	__webpack_require__("fb6a");

	// EXTERNAL MODULE: ./node_modules/core-js/modules/es.function.name.js
	__webpack_require__("b0c0");

	// EXTERNAL MODULE: ./node_modules/core-js/modules/es.regexp.to-string.js
	__webpack_require__("25f0");

	// CONCATENATED MODULE: ./node_modules/@babel/runtime/helpers/esm/arrayLikeToArray.js
	function _arrayLikeToArray(arr, len) {
	  if (len == null || len > arr.length) len = arr.length;

	  for (var i = 0, arr2 = new Array(len); i < len; i++) {
	    arr2[i] = arr[i];
	  }

	  return arr2;
	}
	// CONCATENATED MODULE: ./node_modules/@babel/runtime/helpers/esm/unsupportedIterableToArray.js







	function _unsupportedIterableToArray(o, minLen) {
	  if (!o) return;
	  if (typeof o === "string") return _arrayLikeToArray(o, minLen);
	  var n = Object.prototype.toString.call(o).slice(8, -1);
	  if (n === "Object" && o.constructor) n = o.constructor.name;
	  if (n === "Map" || n === "Set") return Array.from(o);
	  if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);
	}
	// CONCATENATED MODULE: ./node_modules/@babel/runtime/helpers/esm/nonIterableRest.js
	function _nonIterableRest() {
	  throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
	}
	// CONCATENATED MODULE: ./node_modules/@babel/runtime/helpers/esm/slicedToArray.js




	function _slicedToArray(arr, i) {
	  return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest();
	}
	// CONCATENATED MODULE: ./node_modules/@babel/runtime/helpers/esm/arrayWithoutHoles.js

	function _arrayWithoutHoles(arr) {
	  if (Array.isArray(arr)) return _arrayLikeToArray(arr);
	}
	// CONCATENATED MODULE: ./node_modules/@babel/runtime/helpers/esm/iterableToArray.js








	function _iterableToArray(iter) {
	  if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter);
	}
	// CONCATENATED MODULE: ./node_modules/@babel/runtime/helpers/esm/nonIterableSpread.js
	function _nonIterableSpread() {
	  throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
	}
	// CONCATENATED MODULE: ./node_modules/@babel/runtime/helpers/esm/toConsumableArray.js




	function _toConsumableArray(arr) {
	  return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread();
	}
	// EXTERNAL MODULE: external {"commonjs":"sortablejs","commonjs2":"sortablejs","amd":"sortablejs","root":"Sortable"}
	var external_commonjs_sortablejs_commonjs2_sortablejs_amd_sortablejs_root_Sortable_ = __webpack_require__("a352");
	var external_commonjs_sortablejs_commonjs2_sortablejs_amd_sortablejs_root_Sortable_default = /*#__PURE__*/__webpack_require__.n(external_commonjs_sortablejs_commonjs2_sortablejs_amd_sortablejs_root_Sortable_);

	// CONCATENATED MODULE: ./src/util/htmlHelper.js
	function removeNode(node) {
	  if (node.parentElement !== null) {
	    node.parentElement.removeChild(node);
	  }
	}

	function insertNodeAt(fatherNode, node, position) {
	  var refNode = position === 0 ? fatherNode.children[0] : fatherNode.children[position - 1].nextSibling;
	  fatherNode.insertBefore(node, refNode);
	}


	// EXTERNAL MODULE: ./src/util/console.js
	var console = __webpack_require__("dbf1");

	// EXTERNAL MODULE: ./node_modules/core-js/modules/es.array.reduce.js
	__webpack_require__("13d5");

	// EXTERNAL MODULE: ./node_modules/core-js/modules/es.object.entries.js
	__webpack_require__("4fad");

	// EXTERNAL MODULE: ./node_modules/core-js/modules/es.regexp.exec.js
	__webpack_require__("ac1f");

	// EXTERNAL MODULE: ./node_modules/core-js/modules/es.string.replace.js
	__webpack_require__("5319");

	// CONCATENATED MODULE: ./src/util/string.js



	function cached(fn) {
	  var cache = Object.create(null);
	  return function cachedFn(str) {
	    var hit = cache[str];
	    return hit || (cache[str] = fn(str));
	  };
	}

	var regex = /-(\w)/g;
	var camelize = cached(function (str) {
	  return str.replace(regex, function (_, c) {
	    return c.toUpperCase();
	  });
	});

	// EXTERNAL MODULE: ./node_modules/core-js/modules/es.array.flat-map.js
	__webpack_require__("5db7");

	// EXTERNAL MODULE: ./node_modules/core-js/modules/es.array.unscopables.flat-map.js
	__webpack_require__("73d9");

	// CONCATENATED MODULE: ./src/core/sortableEvents.js




	var manageAndEmit = ["Start", "Add", "Remove", "Update", "End"];
	var emit = ["Choose", "Unchoose", "Sort", "Filter", "Clone"];
	var manage = ["Move"];
	var eventHandlerNames = [manage, manageAndEmit, emit].flatMap(function (events) {
	  return events;
	}).map(function (evt) {
	  return "on".concat(evt);
	});
	var events = {
	  manage: manage,
	  manageAndEmit: manageAndEmit,
	  emit: emit
	};

	function isReadOnly(eventName) {
	  return eventHandlerNames.indexOf(eventName) !== -1;
	}


	// EXTERNAL MODULE: ./node_modules/core-js/modules/es.array.includes.js
	__webpack_require__("caad");

	// EXTERNAL MODULE: ./node_modules/core-js/modules/es.string.starts-with.js
	__webpack_require__("2ca0");

	// CONCATENATED MODULE: ./src/util/tags.js


	var tags = ["a", "abbr", "address", "area", "article", "aside", "audio", "b", "base", "bdi", "bdo", "blockquote", "body", "br", "button", "canvas", "caption", "cite", "code", "col", "colgroup", "data", "datalist", "dd", "del", "details", "dfn", "dialog", "div", "dl", "dt", "em", "embed", "fieldset", "figcaption", "figure", "footer", "form", "h1", "h2", "h3", "h4", "h5", "h6", "head", "header", "hgroup", "hr", "html", "i", "iframe", "img", "input", "ins", "kbd", "label", "legend", "li", "link", "main", "map", "mark", "math", "menu", "menuitem", "meta", "meter", "nav", "noscript", "object", "ol", "optgroup", "option", "output", "p", "param", "picture", "pre", "progress", "q", "rb", "rp", "rt", "rtc", "ruby", "s", "samp", "script", "section", "select", "slot", "small", "source", "span", "strong", "style", "sub", "summary", "sup", "svg", "table", "tbody", "td", "template", "textarea", "tfoot", "th", "thead", "time", "title", "tr", "track", "u", "ul", "var", "video", "wbr"];

	function isHtmlTag(name) {
	  return tags.includes(name);
	}

	function isTransition(name) {
	  return ["transition-group", "TransitionGroup"].includes(name);
	}

	function isHtmlAttribute(value) {
	  return ["id", "class", "role", "style"].includes(value) || value.startsWith("data-") || value.startsWith("aria-") || value.startsWith("on");
	}


	// CONCATENATED MODULE: ./src/core/componentBuilderHelper.js












	function project(entries) {
	  return entries.reduce(function (res, _ref) {
	    var _ref2 = _slicedToArray(_ref, 2),
	        key = _ref2[0],
	        value = _ref2[1];

	    res[key] = value;
	    return res;
	  }, {});
	}

	function getComponentAttributes(_ref3) {
	  var $attrs = _ref3.$attrs,
	      _ref3$componentData = _ref3.componentData,
	      componentData = _ref3$componentData === void 0 ? {} : _ref3$componentData;
	  var attributes = project(Object.entries($attrs).filter(function (_ref4) {
	    var _ref5 = _slicedToArray(_ref4, 2),
	        key = _ref5[0];
	        _ref5[1];

	    return isHtmlAttribute(key);
	  }));
	  return _objectSpread2(_objectSpread2({}, attributes), componentData);
	}

	function createSortableOption(_ref6) {
	  var $attrs = _ref6.$attrs,
	      callBackBuilder = _ref6.callBackBuilder;
	  var options = project(getValidSortableEntries($attrs));
	  Object.entries(callBackBuilder).forEach(function (_ref7) {
	    var _ref8 = _slicedToArray(_ref7, 2),
	        eventType = _ref8[0],
	        eventBuilder = _ref8[1];

	    events[eventType].forEach(function (event) {
	      options["on".concat(event)] = eventBuilder(event);
	    });
	  });
	  var draggable = "[data-draggable]".concat(options.draggable || "");
	  return _objectSpread2(_objectSpread2({}, options), {}, {
	    draggable: draggable
	  });
	}

	function getValidSortableEntries(value) {
	  return Object.entries(value).filter(function (_ref9) {
	    var _ref10 = _slicedToArray(_ref9, 2),
	        key = _ref10[0];
	        _ref10[1];

	    return !isHtmlAttribute(key);
	  }).map(function (_ref11) {
	    var _ref12 = _slicedToArray(_ref11, 2),
	        key = _ref12[0],
	        value = _ref12[1];

	    return [camelize(key), value];
	  }).filter(function (_ref13) {
	    var _ref14 = _slicedToArray(_ref13, 2),
	        key = _ref14[0];
	        _ref14[1];

	    return !isReadOnly(key);
	  });
	}


	// EXTERNAL MODULE: ./node_modules/core-js/modules/es.array.find-index.js
	__webpack_require__("c740");

	// CONCATENATED MODULE: ./node_modules/@babel/runtime/helpers/esm/classCallCheck.js
	function _classCallCheck(instance, Constructor) {
	  if (!(instance instanceof Constructor)) {
	    throw new TypeError("Cannot call a class as a function");
	  }
	}
	// CONCATENATED MODULE: ./node_modules/@babel/runtime/helpers/esm/createClass.js
	function _defineProperties(target, props) {
	  for (var i = 0; i < props.length; i++) {
	    var descriptor = props[i];
	    descriptor.enumerable = descriptor.enumerable || false;
	    descriptor.configurable = true;
	    if ("value" in descriptor) descriptor.writable = true;
	    Object.defineProperty(target, descriptor.key, descriptor);
	  }
	}

	function _createClass(Constructor, protoProps, staticProps) {
	  if (protoProps) _defineProperties(Constructor.prototype, protoProps);
	  if (staticProps) _defineProperties(Constructor, staticProps);
	  return Constructor;
	}
	// CONCATENATED MODULE: ./src/core/componentStructure.js








	var getHtmlElementFromNode = function getHtmlElementFromNode(_ref) {
	  var el = _ref.el;
	  return el;
	};

	var addContext = function addContext(domElement, context) {
	  return domElement.__draggable_context = context;
	};

	var getContext = function getContext(domElement) {
	  return domElement.__draggable_context;
	};

	var componentStructure_ComponentStructure = /*#__PURE__*/function () {
	  function ComponentStructure(_ref2) {
	    var _ref2$nodes = _ref2.nodes,
	        header = _ref2$nodes.header,
	        defaultNodes = _ref2$nodes.default,
	        footer = _ref2$nodes.footer,
	        root = _ref2.root,
	        realList = _ref2.realList;

	    _classCallCheck(this, ComponentStructure);

	    this.defaultNodes = defaultNodes;
	    this.children = [].concat(_toConsumableArray(header), _toConsumableArray(defaultNodes), _toConsumableArray(footer));
	    this.externalComponent = root.externalComponent;
	    this.rootTransition = root.transition;
	    this.tag = root.tag;
	    this.realList = realList;
	  }

	  _createClass(ComponentStructure, [{
	    key: "render",
	    value: function render(h, attributes) {
	      var tag = this.tag,
	          children = this.children,
	          _isRootComponent = this._isRootComponent;
	      var option = !_isRootComponent ? children : {
	        default: function _default() {
	          return children;
	        }
	      };
	      return h(tag, attributes, option);
	    }
	  }, {
	    key: "updated",
	    value: function updated() {
	      var defaultNodes = this.defaultNodes,
	          realList = this.realList;
	      defaultNodes.forEach(function (node, index) {
	        addContext(getHtmlElementFromNode(node), {
	          element: realList[index],
	          index: index
	        });
	      });
	    }
	  }, {
	    key: "getUnderlyingVm",
	    value: function getUnderlyingVm(domElement) {
	      return getContext(domElement);
	    }
	  }, {
	    key: "getVmIndexFromDomIndex",
	    value: function getVmIndexFromDomIndex(domIndex, element) {
	      var defaultNodes = this.defaultNodes;
	      var length = defaultNodes.length;
	      var domChildren = element.children;
	      var domElement = domChildren.item(domIndex);

	      if (domElement === null) {
	        return length;
	      }

	      var context = getContext(domElement);

	      if (context) {
	        return context.index;
	      }

	      if (length === 0) {
	        return 0;
	      }

	      var firstDomListElement = getHtmlElementFromNode(defaultNodes[0]);

	      var indexFirstDomListElement = _toConsumableArray(domChildren).findIndex(function (element) {
	        return element === firstDomListElement;
	      });

	      return domIndex < indexFirstDomListElement ? 0 : length;
	    }
	  }, {
	    key: "_isRootComponent",
	    get: function get() {
	      return this.externalComponent || this.rootTransition;
	    }
	  }]);

	  return ComponentStructure;
	}();


	// EXTERNAL MODULE: external {"commonjs":"vue","commonjs2":"vue","root":"Vue"}
	var external_commonjs_vue_commonjs2_vue_root_Vue_ = __webpack_require__("8bbf");

	// CONCATENATED MODULE: ./src/core/renderHelper.js









	function getSlot(slots, key) {
	  var slotValue = slots[key];
	  return slotValue ? slotValue() : [];
	}

	function computeNodes(_ref) {
	  var $slots = _ref.$slots,
	      realList = _ref.realList,
	      getKey = _ref.getKey;
	  var normalizedList = realList || [];

	  var _map = ["header", "footer"].map(function (name) {
	    return getSlot($slots, name);
	  }),
	      _map2 = _slicedToArray(_map, 2),
	      header = _map2[0],
	      footer = _map2[1];

	  var item = $slots.item;

	  if (!item) {
	    throw new Error("draggable element must have an item slot");
	  }

	  var defaultNodes = normalizedList.flatMap(function (element, index) {
	    return item({
	      element: element,
	      index: index
	    }).map(function (node) {
	      node.key = getKey(element);
	      node.props = _objectSpread2(_objectSpread2({}, node.props || {}), {}, {
	        "data-draggable": true
	      });
	      return node;
	    });
	  });

	  if (defaultNodes.length !== normalizedList.length) {
	    throw new Error("Item slot must have only one child");
	  }

	  return {
	    header: header,
	    footer: footer,
	    default: defaultNodes
	  };
	}

	function getRootInformation(tag) {
	  var transition = isTransition(tag);
	  var externalComponent = !isHtmlTag(tag) && !transition;
	  return {
	    transition: transition,
	    externalComponent: externalComponent,
	    tag: externalComponent ? Object(external_commonjs_vue_commonjs2_vue_root_Vue_["resolveComponent"])(tag) : transition ? external_commonjs_vue_commonjs2_vue_root_Vue_["TransitionGroup"] : tag
	  };
	}

	function computeComponentStructure(_ref2) {
	  var $slots = _ref2.$slots,
	      tag = _ref2.tag,
	      realList = _ref2.realList,
	      getKey = _ref2.getKey;
	  var nodes = computeNodes({
	    $slots: $slots,
	    realList: realList,
	    getKey: getKey
	  });
	  var root = getRootInformation(tag);
	  return new componentStructure_ComponentStructure({
	    nodes: nodes,
	    root: root,
	    realList: realList
	  });
	}


	// CONCATENATED MODULE: ./src/vuedraggable.js


















	function _emit(evtName, evtData) {
	  var _this = this;

	  Object(external_commonjs_vue_commonjs2_vue_root_Vue_["nextTick"])(function () {
	    return _this.$emit(evtName.toLowerCase(), evtData);
	  });
	}

	function _manage(evtName) {
	  var _this2 = this;

	  return function (evtData, originalElement) {
	    if (_this2.realList !== null) {
	      return _this2["onDrag".concat(evtName)](evtData, originalElement);
	    }
	  };
	}

	function _manageAndEmit(evtName) {
	  var _this3 = this;

	  var delegateCallBack = _manage.call(this, evtName);

	  return function (evtData, originalElement) {
	    delegateCallBack.call(_this3, evtData, originalElement);

	    _emit.call(_this3, evtName, evtData);
	  };
	}

	var draggingElement = null;
	var props = {
	  list: {
	    type: Array,
	    required: false,
	    default: null
	  },
	  modelValue: {
	    type: Array,
	    required: false,
	    default: null
	  },
	  itemKey: {
	    type: [String, Function],
	    required: true
	  },
	  clone: {
	    type: Function,
	    default: function _default(original) {
	      return original;
	    }
	  },
	  tag: {
	    type: String,
	    default: "div"
	  },
	  move: {
	    type: Function,
	    default: null
	  },
	  componentData: {
	    type: Object,
	    required: false,
	    default: null
	  }
	};
	var emits = ["update:modelValue", "change"].concat(_toConsumableArray([].concat(_toConsumableArray(events.manageAndEmit), _toConsumableArray(events.emit)).map(function (evt) {
	  return evt.toLowerCase();
	})));
	var draggableComponent = Object(external_commonjs_vue_commonjs2_vue_root_Vue_["defineComponent"])({
	  name: "draggable",
	  inheritAttrs: false,
	  props: props,
	  emits: emits,
	  data: function data() {
	    return {
	      error: false
	    };
	  },
	  render: function render() {
	    try {
	      this.error = false;
	      var $slots = this.$slots,
	          $attrs = this.$attrs,
	          tag = this.tag,
	          componentData = this.componentData,
	          realList = this.realList,
	          getKey = this.getKey;
	      var componentStructure = computeComponentStructure({
	        $slots: $slots,
	        tag: tag,
	        realList: realList,
	        getKey: getKey
	      });
	      this.componentStructure = componentStructure;
	      var attributes = getComponentAttributes({
	        $attrs: $attrs,
	        componentData: componentData
	      });
	      return componentStructure.render(external_commonjs_vue_commonjs2_vue_root_Vue_["h"], attributes);
	    } catch (err) {
	      this.error = true;
	      return Object(external_commonjs_vue_commonjs2_vue_root_Vue_["h"])("pre", {
	        style: {
	          color: "red"
	        }
	      }, err.stack);
	    }
	  },
	  created: function created() {
	    if (this.list !== null && this.modelValue !== null) {
	      console["a" /* console */].error("modelValue and list props are mutually exclusive! Please set one or another.");
	    }
	  },
	  mounted: function mounted() {
	    var _this4 = this;

	    if (this.error) {
	      return;
	    }

	    var $attrs = this.$attrs,
	        $el = this.$el,
	        componentStructure = this.componentStructure;
	    componentStructure.updated();
	    var sortableOptions = createSortableOption({
	      $attrs: $attrs,
	      callBackBuilder: {
	        manageAndEmit: function manageAndEmit(event) {
	          return _manageAndEmit.call(_this4, event);
	        },
	        emit: function emit(event) {
	          return _emit.bind(_this4, event);
	        },
	        manage: function manage(event) {
	          return _manage.call(_this4, event);
	        }
	      }
	    });
	    var targetDomElement = $el.nodeType === 1 ? $el : $el.parentElement;
	    this._sortable = new external_commonjs_sortablejs_commonjs2_sortablejs_amd_sortablejs_root_Sortable_default.a(targetDomElement, sortableOptions);
	    this.targetDomElement = targetDomElement;
	    targetDomElement.__draggable_component__ = this;
	  },
	  updated: function updated() {
	    this.componentStructure.updated();
	  },
	  beforeUnmount: function beforeUnmount() {
	    if (this._sortable !== undefined) this._sortable.destroy();
	  },
	  computed: {
	    realList: function realList() {
	      var list = this.list;
	      return list ? list : this.modelValue;
	    },
	    getKey: function getKey() {
	      var itemKey = this.itemKey;

	      if (typeof itemKey === "function") {
	        return itemKey;
	      }

	      return function (element) {
	        return element[itemKey];
	      };
	    }
	  },
	  watch: {
	    $attrs: {
	      handler: function handler(newOptionValue) {
	        var _sortable = this._sortable;
	        if (!_sortable) return;
	        getValidSortableEntries(newOptionValue).forEach(function (_ref) {
	          var _ref2 = _slicedToArray(_ref, 2),
	              key = _ref2[0],
	              value = _ref2[1];

	          _sortable.option(key, value);
	        });
	      },
	      deep: true
	    }
	  },
	  methods: {
	    getUnderlyingVm: function getUnderlyingVm(domElement) {
	      return this.componentStructure.getUnderlyingVm(domElement) || null;
	    },
	    getUnderlyingPotencialDraggableComponent: function getUnderlyingPotencialDraggableComponent(htmElement) {
	      //TODO check case where you need to see component children
	      return htmElement.__draggable_component__;
	    },
	    emitChanges: function emitChanges(evt) {
	      var _this5 = this;

	      Object(external_commonjs_vue_commonjs2_vue_root_Vue_["nextTick"])(function () {
	        return _this5.$emit("change", evt);
	      });
	    },
	    alterList: function alterList(onList) {
	      if (this.list) {
	        onList(this.list);
	        return;
	      }

	      var newList = _toConsumableArray(this.modelValue);

	      onList(newList);
	      this.$emit("update:modelValue", newList);
	    },
	    spliceList: function spliceList() {
	      var _arguments = arguments;

	      var spliceList = function spliceList(list) {
	        return list.splice.apply(list, _toConsumableArray(_arguments));
	      };

	      this.alterList(spliceList);
	    },
	    updatePosition: function updatePosition(oldIndex, newIndex) {
	      var updatePosition = function updatePosition(list) {
	        return list.splice(newIndex, 0, list.splice(oldIndex, 1)[0]);
	      };

	      this.alterList(updatePosition);
	    },
	    getRelatedContextFromMoveEvent: function getRelatedContextFromMoveEvent(_ref3) {
	      var to = _ref3.to,
	          related = _ref3.related;
	      var component = this.getUnderlyingPotencialDraggableComponent(to);

	      if (!component) {
	        return {
	          component: component
	        };
	      }

	      var list = component.realList;
	      var context = {
	        list: list,
	        component: component
	      };

	      if (to !== related && list) {
	        var destination = component.getUnderlyingVm(related) || {};
	        return _objectSpread2(_objectSpread2({}, destination), context);
	      }

	      return context;
	    },
	    getVmIndexFromDomIndex: function getVmIndexFromDomIndex(domIndex) {
	      return this.componentStructure.getVmIndexFromDomIndex(domIndex, this.targetDomElement);
	    },
	    onDragStart: function onDragStart(evt) {
	      this.context = this.getUnderlyingVm(evt.item);
	      evt.item._underlying_vm_ = this.clone(this.context.element);
	      draggingElement = evt.item;
	    },
	    onDragAdd: function onDragAdd(evt) {
	      var element = evt.item._underlying_vm_;

	      if (element === undefined) {
	        return;
	      }

	      removeNode(evt.item);
	      var newIndex = this.getVmIndexFromDomIndex(evt.newIndex);
	      this.spliceList(newIndex, 0, element);
	      var added = {
	        element: element,
	        newIndex: newIndex
	      };
	      this.emitChanges({
	        added: added
	      });
	    },
	    onDragRemove: function onDragRemove(evt) {
	      insertNodeAt(this.$el, evt.item, evt.oldIndex);

	      if (evt.pullMode === "clone") {
	        removeNode(evt.clone);
	        return;
	      }

	      var _this$context = this.context,
	          oldIndex = _this$context.index,
	          element = _this$context.element;
	      this.spliceList(oldIndex, 1);
	      var removed = {
	        element: element,
	        oldIndex: oldIndex
	      };
	      this.emitChanges({
	        removed: removed
	      });
	    },
	    onDragUpdate: function onDragUpdate(evt) {
	      removeNode(evt.item);
	      insertNodeAt(evt.from, evt.item, evt.oldIndex);
	      var oldIndex = this.context.index;
	      var newIndex = this.getVmIndexFromDomIndex(evt.newIndex);
	      this.updatePosition(oldIndex, newIndex);
	      var moved = {
	        element: this.context.element,
	        oldIndex: oldIndex,
	        newIndex: newIndex
	      };
	      this.emitChanges({
	        moved: moved
	      });
	    },
	    computeFutureIndex: function computeFutureIndex(relatedContext, evt) {
	      if (!relatedContext.element) {
	        return 0;
	      }

	      var domChildren = _toConsumableArray(evt.to.children).filter(function (el) {
	        return el.style["display"] !== "none";
	      });

	      var currentDomIndex = domChildren.indexOf(evt.related);
	      var currentIndex = relatedContext.component.getVmIndexFromDomIndex(currentDomIndex);
	      var draggedInList = domChildren.indexOf(draggingElement) !== -1;
	      return draggedInList || !evt.willInsertAfter ? currentIndex : currentIndex + 1;
	    },
	    onDragMove: function onDragMove(evt, originalEvent) {
	      var move = this.move,
	          realList = this.realList;

	      if (!move || !realList) {
	        return true;
	      }

	      var relatedContext = this.getRelatedContextFromMoveEvent(evt);
	      var futureIndex = this.computeFutureIndex(relatedContext, evt);

	      var draggedContext = _objectSpread2(_objectSpread2({}, this.context), {}, {
	        futureIndex: futureIndex
	      });

	      var sendEvent = _objectSpread2(_objectSpread2({}, evt), {}, {
	        relatedContext: relatedContext,
	        draggedContext: draggedContext
	      });

	      return move(sendEvent, originalEvent);
	    },
	    onDragEnd: function onDragEnd() {
	      draggingElement = null;
	    }
	  }
	});
	/* harmony default export */ var vuedraggable = (draggableComponent);
	// CONCATENATED MODULE: ./node_modules/@vue/cli-service/lib/commands/build/entry-lib.js


	/* harmony default export */ __webpack_exports__["default"] = (vuedraggable);



	/***/ }),

	/***/ "fb6a":
	/***/ (function(module, exports, __webpack_require__) {

	var $ = __webpack_require__("23e7");
	var isObject = __webpack_require__("861d");
	var isArray = __webpack_require__("e8b5");
	var toAbsoluteIndex = __webpack_require__("23cb");
	var toLength = __webpack_require__("50c4");
	var toIndexedObject = __webpack_require__("fc6a");
	var createProperty = __webpack_require__("8418");
	var wellKnownSymbol = __webpack_require__("b622");
	var arrayMethodHasSpeciesSupport = __webpack_require__("1dde");
	var arrayMethodUsesToLength = __webpack_require__("ae40");

	var HAS_SPECIES_SUPPORT = arrayMethodHasSpeciesSupport('slice');
	var USES_TO_LENGTH = arrayMethodUsesToLength('slice', { ACCESSORS: true, 0: 0, 1: 2 });

	var SPECIES = wellKnownSymbol('species');
	var nativeSlice = [].slice;
	var max = Math.max;

	// `Array.prototype.slice` method
	// https://tc39.github.io/ecma262/#sec-array.prototype.slice
	// fallback for not array-like ES3 strings and DOM objects
	$({ target: 'Array', proto: true, forced: !HAS_SPECIES_SUPPORT || !USES_TO_LENGTH }, {
	  slice: function slice(start, end) {
	    var O = toIndexedObject(this);
	    var length = toLength(O.length);
	    var k = toAbsoluteIndex(start, length);
	    var fin = toAbsoluteIndex(end === undefined ? length : end, length);
	    // inline `ArraySpeciesCreate` for usage native `Array#slice` where it's possible
	    var Constructor, result, n;
	    if (isArray(O)) {
	      Constructor = O.constructor;
	      // cross-realm fallback
	      if (typeof Constructor == 'function' && (Constructor === Array || isArray(Constructor.prototype))) {
	        Constructor = undefined;
	      } else if (isObject(Constructor)) {
	        Constructor = Constructor[SPECIES];
	        if (Constructor === null) Constructor = undefined;
	      }
	      if (Constructor === Array || Constructor === undefined) {
	        return nativeSlice.call(O, k, fin);
	      }
	    }
	    result = new (Constructor === undefined ? Array : Constructor)(max(fin - k, 0));
	    for (n = 0; k < fin; k++, n++) if (k in O) createProperty(result, n, O[k]);
	    result.length = n;
	    return result;
	  }
	});


	/***/ }),

	/***/ "fc6a":
	/***/ (function(module, exports, __webpack_require__) {

	// toObject with fallback for non-array-like ES3 strings
	var IndexedObject = __webpack_require__("44ad");
	var requireObjectCoercible = __webpack_require__("1d80");

	module.exports = function (it) {
	  return IndexedObject(requireObjectCoercible(it));
	};


	/***/ }),

	/***/ "fdbc":
	/***/ (function(module, exports) {

	// iterable DOM collections
	// flag - `iterable` interface - 'entries', 'keys', 'values', 'forEach' methods
	module.exports = {
	  CSSRuleList: 0,
	  CSSStyleDeclaration: 0,
	  CSSValueList: 0,
	  ClientRectList: 0,
	  DOMRectList: 0,
	  DOMStringList: 0,
	  DOMTokenList: 1,
	  DataTransferItemList: 0,
	  FileList: 0,
	  HTMLAllCollection: 0,
	  HTMLCollection: 0,
	  HTMLFormElement: 0,
	  HTMLSelectElement: 0,
	  MediaList: 0,
	  MimeTypeArray: 0,
	  NamedNodeMap: 0,
	  NodeList: 1,
	  PaintRequestList: 0,
	  Plugin: 0,
	  PluginArray: 0,
	  SVGLengthList: 0,
	  SVGNumberList: 0,
	  SVGPathSegList: 0,
	  SVGPointList: 0,
	  SVGStringList: 0,
	  SVGTransformList: 0,
	  SourceBufferList: 0,
	  StyleSheetList: 0,
	  TextTrackCueList: 0,
	  TextTrackList: 0,
	  TouchList: 0
	};


	/***/ }),

	/***/ "fdbf":
	/***/ (function(module, exports, __webpack_require__) {

	var NATIVE_SYMBOL = __webpack_require__("4930");

	module.exports = NATIVE_SYMBOL
	  // eslint-disable-next-line no-undef
	  && !Symbol.sham
	  // eslint-disable-next-line no-undef
	  && typeof Symbol.iterator == 'symbol';


	/***/ })

	/******/ })["default"];
	});
	
} (vuedraggable_umd, vuedraggable_umd.exports));

var vuedraggable_umdExports = vuedraggable_umd.exports;
var draggable = /*@__PURE__*/getDefaultExportFromCjs(vuedraggable_umdExports);var css$7 = "\r\n/* Fijar ancho de la columna de acciones en el header */\n.actions-header[data-v-92534bce] {\r\n  width: 1%;\r\n  white-space: nowrap;\n}\r\n\r\n/* Alinear checkbox en el header */\n.checkbox-header[data-v-92534bce] {\r\n  vertical-align: middle !important;\r\n  text-align: center;\n}\n.header-checkbox-wrapper[data-v-92534bce] {\r\n  display: inline-flex;\r\n  align-items: center;\r\n  vertical-align: middle;\n}\r\n\r\n/* Asegurar que el form-check dentro del header esté alineado */\n.checkbox-header[data-v-92534bce] .form-check {\r\n  margin: 0 !important;\r\n  display: inline-flex;\r\n  align-items: center;\r\n  min-height: auto;\r\n  padding: 0;\r\n  vertical-align: middle;\n}\n.checkbox-header[data-v-92534bce] .form-check-input {\r\n  margin: 0 !important;\r\n  margin-top: 0 !important;\r\n  margin-right: 0.5rem !important;\r\n  vertical-align: middle;\r\n  position: relative;\r\n  float: none;\r\n  top: 0;\r\n  align-self: center;\n}\n.checkbox-header[data-v-92534bce] .form-check-label {\r\n  margin-left: 0;\r\n  margin-bottom: 0;\r\n  vertical-align: middle;\r\n  display: inline;\r\n  align-self: center;\n}\n.sort-filter[data-v-92534bce] {\r\n  cursor: pointer;\r\n  visibility: hidden;\r\n  display: inline-block;\n}\n.sort-filter-visible[data-v-92534bce] {\r\n  visibility: visible;\n}\r\n";
n(css$7, {});var _sfc_main$d = {
  name: 'TableHeader',
  inject: ['bootstrapFactory', 'columns', 'enableFilters', 'filtersVisible', 'isColumnHasFilter', 'isColumnVisibleInTable', 'internalFilterByProp', 'onChangeFilter', 'toggleAll', 'toggleSortFilter', 'sortable', 'optionsLoaded', 'isAllSelected'],
  data: function data() {
    return {
      hoveredColumn: null
    };
  },
  computed: {
    filtersVisibleValue: function filtersVisibleValue() {
      if (this.filtersVisible && this.filtersVisible.value !== undefined) {
        return !!this.filtersVisible.value;
      }
      return !!this.filtersVisible;
    }
  },
  methods: {
    isSortableColumn: function isSortableColumn(column) {
      return this.sortable && column.type != 'select' && column.type != 'checkbox' && this.internalFilterByProp(column.prop + '_sort');
    },
    shouldShowSortIcon: function shouldShowSortIcon(column) {
      var sortFilter = this.internalFilterByProp(column.prop + '_sort');
      return this.hoveredColumn === column.prop || sortFilter.value;
    },
    getSortIconDirection: function getSortIconDirection(column) {
      var sortFilter = this.internalFilterByProp(column.prop + '_sort');
      var sortValue = sortFilter.value;
      if (sortValue === 'DESC') {
        return 'down';
      } else if (sortValue === 'ASC') {
        return 'up';
      } else if (this.hoveredColumn === column.prop) {
        return 'up';
      }
      return null;
    }
  }
};
var _hoisted_1$d = {
  class: "thead-light"
};
var _hoisted_2$9 = ["onMouseenter"];
var _hoisted_3$9 = {
  class: "form-group"
};
var _hoisted_4$8 = ["onUpdate:modelValue"];
var _hoisted_5$6 = {
  value: ""
};
var _hoisted_6$4 = {
  key: 1,
  class: "row"
};
var _hoisted_7$4 = {
  class: "col-6"
};
var _hoisted_8$4 = {
  class: "col-6"
};
var _hoisted_9$3 = {
  key: 2,
  class: "row"
};
var _hoisted_10$3 = {
  class: "col-6"
};
var _hoisted_11$2 = ["onUpdate:modelValue", "step"];
var _hoisted_12 = {
  class: "col-6"
};
var _hoisted_13 = ["onUpdate:modelValue", "step"];
var _hoisted_14 = ["onUpdate:modelValue", "placeholder"];
var _hoisted_15 = {
  value: ""
};
var _hoisted_16 = ["value"];
var _hoisted_17 = ["onUpdate:modelValue", "placeholder"];
var _hoisted_18 = {
  value: ""
};
var _hoisted_19 = ["value"];
var _hoisted_20 = ["onUpdate:modelValue", "placeholder"];
var _hoisted_21 = {
  key: 1,
  class: "header-checkbox-wrapper"
};
var _hoisted_22 = {
  key: 2,
  class: "header-checkbox-wrapper"
};
var _hoisted_23 = {
  key: 3
};
var _hoisted_24 = ["onClick"];
function _sfc_render$d(_ctx, _cache, $props, $setup, $data, $options) {
  var _component_b_form_datepicker = require$$0.resolveComponent("b-form-datepicker");
  var _component_b_form_checkbox = require$$0.resolveComponent("b-form-checkbox");
  var _component_b_icon_sort_up = require$$0.resolveComponent("b-icon-sort-up");
  var _component_b_icon_sort_down = require$$0.resolveComponent("b-icon-sort-down");
  return require$$0.openBlock(), require$$0.createElementBlock("thead", _hoisted_1$d, [require$$0.createElementVNode("tr", null, [require$$0.renderSlot(_ctx.$slots, "rowHead", {}, function () {
    return [(require$$0.openBlock(true), require$$0.createElementBlock(require$$0.Fragment, null, require$$0.renderList($options.columns, function (column, indexc) {
      return require$$0.openBlock(), require$$0.createElementBlock(require$$0.Fragment, {
        key: indexc
      }, [$options.isColumnVisibleInTable(column) ? (require$$0.openBlock(), require$$0.createElementBlock("th", {
        key: 0,
        style: require$$0.normalizeStyle({
          width: column.width ? column.width : column.type == 'actions' ? '1%' : 'inherit'
        }),
        class: require$$0.normalizeClass({
          'actions-header': column.type == 'actions',
          'checkbox-header': column.type == 'checkbox' || column.type == 'select'
        }),
        scope: "col",
        onMouseenter: function onMouseenter($event) {
          return $data.hoveredColumn = column.prop;
        },
        onMouseleave: _cache[6] || (_cache[6] = function ($event) {
          return $data.hoveredColumn = null;
        })
      }, [$options.enableFilters && $options.filtersVisibleValue && $options.isColumnHasFilter(column) && ($options.internalFilterByProp(column.prop) || $options.internalFilterByProp(column.prop + '_from')) ? require$$0.renderSlot(_ctx.$slots, 'filter-' + column.prop, {
        key: 0,
        column: column,
        filter: _ctx.filter,
        internalFilterByProp: $options.internalFilterByProp
      }, function () {
        return [require$$0.createElementVNode("div", _hoisted_3$9, [column.type == 'boolean' ? require$$0.withDirectives((require$$0.openBlock(), require$$0.createElementBlock("select", {
          key: 0,
          class: "form-control form-control-md p-2",
          "onUpdate:modelValue": function onUpdateModelValue($event) {
            return $options.internalFilterByProp(column.prop).value = $event;
          },
          onChange: _cache[0] || (_cache[0] = function ($event) {
            return $options.onChangeFilter($event);
          })
        }, [require$$0.createElementVNode("option", _hoisted_5$6, require$$0.toDisplayString(column.label), 1 /* TEXT */), _cache[7] || (_cache[7] = require$$0.createElementVNode("option", {
          value: "1"
        }, "Sí", -1 /* CACHED */)), _cache[8] || (_cache[8] = require$$0.createElementVNode("option", {
          value: "0"
        }, "No", -1 /* CACHED */))], 40 /* PROPS, NEED_HYDRATION */, _hoisted_4$8)), [[require$$0.vModelSelect, $options.internalFilterByProp(column.prop).value]]) : column.type == 'date' ? (require$$0.openBlock(), require$$0.createElementBlock("div", _hoisted_6$4, [require$$0.createElementVNode("div", _hoisted_7$4, [require$$0.createVNode(_component_b_form_datepicker, {
          modelValue: $options.internalFilterByProp(column.prop + '_from').value,
          "onUpdate:modelValue": function onUpdateModelValue($event) {
            return $options.internalFilterByProp(column.prop + '_from').value = $event;
          },
          "today-button": "",
          "reset-button": "",
          "close-button": "",
          locale: "es",
          class: "form-control-md p-2"
        }, null, 8 /* PROPS */, ["modelValue", "onUpdate:modelValue"])]), require$$0.createElementVNode("div", _hoisted_8$4, [require$$0.createVNode(_component_b_form_datepicker, {
          modelValue: $options.internalFilterByProp(column.prop + '_to').value,
          "onUpdate:modelValue": function onUpdateModelValue($event) {
            return $options.internalFilterByProp(column.prop + '_to').value = $event;
          },
          "today-button": "",
          "reset-button": "",
          "close-button": "",
          locale: "es",
          class: "form-control-md p-2"
        }, null, 8 /* PROPS */, ["modelValue", "onUpdate:modelValue"])])])) : column.type == 'number' || column.type == 'money' || column.type == 'price' ? (require$$0.openBlock(), require$$0.createElementBlock("div", _hoisted_9$3, [require$$0.createElementVNode("div", _hoisted_10$3, [require$$0.withDirectives(require$$0.createElementVNode("input", {
          type: "number",
          class: "form-control form-control-md p-2",
          "onUpdate:modelValue": function onUpdateModelValue($event) {
            return $options.internalFilterByProp(column.prop + '_from').value = $event;
          },
          step: column.type == 'money' || column.type == 'price' ? '0.01' : '1',
          onChange: _cache[1] || (_cache[1] = function ($event) {
            return $options.onChangeFilter($event);
          }),
          placeholder: "Desde"
        }, null, 40 /* PROPS, NEED_HYDRATION */, _hoisted_11$2), [[require$$0.vModelText, $options.internalFilterByProp(column.prop + '_from').value, void 0, {
          number: true
        }]])]), require$$0.createElementVNode("div", _hoisted_12, [require$$0.withDirectives(require$$0.createElementVNode("input", {
          type: "number",
          class: "form-control form-control-md p-2",
          "onUpdate:modelValue": function onUpdateModelValue($event) {
            return $options.internalFilterByProp(column.prop + '_to').value = $event;
          },
          step: column.type == 'money' || column.type == 'price' ? '0.01' : '1',
          onChange: _cache[2] || (_cache[2] = function ($event) {
            return $options.onChangeFilter($event);
          }),
          placeholder: "Hasta"
        }, null, 40 /* PROPS, NEED_HYDRATION */, _hoisted_13), [[require$$0.vModelText, $options.internalFilterByProp(column.prop + '_to').value, void 0, {
          number: true
        }]])])])) : column.type == 'state' && column.options && Array.isArray(column.options) ? require$$0.withDirectives((require$$0.openBlock(), require$$0.createElementBlock("select", {
          key: 3,
          class: "form-control form-control-md p-2",
          "onUpdate:modelValue": function onUpdateModelValue($event) {
            return $options.internalFilterByProp(column.prop).value = $event;
          },
          onChange: _cache[3] || (_cache[3] = function ($event) {
            return $options.onChangeFilter($event);
          }),
          placeholder: column.label
        }, [require$$0.createElementVNode("option", _hoisted_15, require$$0.toDisplayString(column.label), 1 /* TEXT */), (require$$0.openBlock(true), require$$0.createElementBlock(require$$0.Fragment, null, require$$0.renderList(column.options, function (option, indexo) {
          return require$$0.openBlock(), require$$0.createElementBlock("option", {
            value: option.value,
            key: indexo
          }, require$$0.toDisplayString(option.text), 9 /* TEXT, PROPS */, _hoisted_16);
        }), 128 /* KEYED_FRAGMENT */))], 40 /* PROPS, NEED_HYDRATION */, _hoisted_14)), [[require$$0.vModelSelect, $options.internalFilterByProp(column.prop).value]]) : column.type == 'array' && column.options && Array.isArray(column.options) ? require$$0.withDirectives((require$$0.openBlock(), require$$0.createElementBlock("select", {
          key: 4,
          class: "form-control form-control-md p-2",
          "onUpdate:modelValue": function onUpdateModelValue($event) {
            return $options.internalFilterByProp(column.prop).value = $event;
          },
          onChange: _cache[4] || (_cache[4] = function ($event) {
            return $options.onChangeFilter($event);
          }),
          placeholder: column.label
        }, [require$$0.createElementVNode("option", _hoisted_18, require$$0.toDisplayString(column.label), 1 /* TEXT */), (require$$0.openBlock(true), require$$0.createElementBlock(require$$0.Fragment, null, require$$0.renderList(column.options, function (option, indexo) {
          return require$$0.openBlock(), require$$0.createElementBlock("option", {
            value: option.value,
            key: indexo
          }, require$$0.toDisplayString(option.text), 9 /* TEXT, PROPS */, _hoisted_19);
        }), 128 /* KEYED_FRAGMENT */))], 40 /* PROPS, NEED_HYDRATION */, _hoisted_17)), [[require$$0.vModelSelect, $options.internalFilterByProp(column.prop).value]]) : column.type == 'checkbox' ? (require$$0.openBlock(), require$$0.createBlock(_component_b_form_checkbox, {
          key: 5,
          name: "select-all",
          checked: $options.isAllSelected,
          onChange: $options.toggleAll
        }, null, 8 /* PROPS */, ["checked", "onChange"])) : column.type == 'select' ? (require$$0.openBlock(), require$$0.createBlock(_component_b_form_checkbox, {
          key: 6,
          name: "select-all",
          checked: $options.isAllSelected,
          onChange: $options.toggleAll
        }, null, 8 /* PROPS */, ["checked", "onChange"])) : require$$0.withDirectives((require$$0.openBlock(), require$$0.createElementBlock("input", {
          key: 7,
          class: "form-control form-control-md p-2",
          "onUpdate:modelValue": function onUpdateModelValue($event) {
            return $options.internalFilterByProp(column.prop).value = $event;
          },
          placeholder: column.label,
          onChange: _cache[5] || (_cache[5] = function ($event) {
            return $options.onChangeFilter($event);
          })
        }, null, 40 /* PROPS, NEED_HYDRATION */, _hoisted_20)), [[require$$0.vModelText, $options.internalFilterByProp(column.prop).value]])])];
      }, true) : column.type == 'select' ? (require$$0.openBlock(), require$$0.createElementBlock("span", _hoisted_21, [require$$0.createVNode(_component_b_form_checkbox, {
        name: "select-all",
        checked: $options.isAllSelected,
        onChange: $options.toggleAll
      }, null, 8 /* PROPS */, ["checked", "onChange"])])) : column.type == 'checkbox' ? (require$$0.openBlock(), require$$0.createElementBlock("span", _hoisted_22, [require$$0.createVNode(_component_b_form_checkbox, {
        name: "select-all",
        checked: $options.isAllSelected,
        onChange: $options.toggleAll
      }, null, 8 /* PROPS */, ["checked", "onChange"])])) : (require$$0.openBlock(), require$$0.createElementBlock("span", _hoisted_23, require$$0.toDisplayString(column.label), 1 /* TEXT */)), $options.isSortableColumn(column) ? (require$$0.openBlock(), require$$0.createElementBlock("span", {
        key: 4,
        class: require$$0.normalizeClass(["sort-filter ml-1", {
          'sort-filter-visible': $options.shouldShowSortIcon(column)
        }]),
        onClick: function onClick($event) {
          return $options.toggleSortFilter(column);
        }
      }, [$options.getSortIconDirection(column) === 'up' ? (require$$0.openBlock(), require$$0.createBlock(_component_b_icon_sort_up, {
        key: 0
      })) : $options.getSortIconDirection(column) === 'down' ? (require$$0.openBlock(), require$$0.createBlock(_component_b_icon_sort_down, {
        key: 1
      })) : (require$$0.openBlock(), require$$0.createBlock(_component_b_icon_sort_up, {
        key: 2,
        style: {
          "visibility": "hidden"
        }
      }))], 10 /* CLASS, PROPS */, _hoisted_24)) : require$$0.createCommentVNode("v-if", true)], 46 /* CLASS, STYLE, PROPS, NEED_HYDRATION */, _hoisted_2$9)) : require$$0.createCommentVNode("v-if", true)], 64 /* STABLE_FRAGMENT */);
    }), 128 /* KEYED_FRAGMENT */))];
  }, true)])]);
}
var TableHeader = /*#__PURE__*/_export_sfc(_sfc_main$d, [['render', _sfc_render$d], ['__scopeId', "data-v-92534bce"]]);function commonjsRequire(path) {
	throw new Error('Could not dynamically require "' + path + '". Please configure the dynamicRequireTargets or/and ignoreDynamicRequires option of @rollup/plugin-commonjs appropriately for this require call to work.');
}var moment$1 = {exports: {}};moment$1.exports;

(function (module, exports) {
(function (global, factory) {
	    module.exports = factory() ;
	}(commonjsGlobal, (function () {
	    var hookCallback;

	    function hooks() {
	        return hookCallback.apply(null, arguments);
	    }

	    // This is done to register the method called with moment()
	    // without creating circular dependencies.
	    function setHookCallback(callback) {
	        hookCallback = callback;
	    }

	    function isArray(input) {
	        return (
	            input instanceof Array ||
	            Object.prototype.toString.call(input) === '[object Array]'
	        );
	    }

	    function isObject(input) {
	        // IE8 will treat undefined and null as object if it wasn't for
	        // input != null
	        return (
	            input != null &&
	            Object.prototype.toString.call(input) === '[object Object]'
	        );
	    }

	    function hasOwnProp(a, b) {
	        return Object.prototype.hasOwnProperty.call(a, b);
	    }

	    function isObjectEmpty(obj) {
	        if (Object.getOwnPropertyNames) {
	            return Object.getOwnPropertyNames(obj).length === 0;
	        } else {
	            var k;
	            for (k in obj) {
	                if (hasOwnProp(obj, k)) {
	                    return false;
	                }
	            }
	            return true;
	        }
	    }

	    function isUndefined(input) {
	        return input === void 0;
	    }

	    function isNumber(input) {
	        return (
	            typeof input === 'number' ||
	            Object.prototype.toString.call(input) === '[object Number]'
	        );
	    }

	    function isDate(input) {
	        return (
	            input instanceof Date ||
	            Object.prototype.toString.call(input) === '[object Date]'
	        );
	    }

	    function map(arr, fn) {
	        var res = [],
	            i,
	            arrLen = arr.length;
	        for (i = 0; i < arrLen; ++i) {
	            res.push(fn(arr[i], i));
	        }
	        return res;
	    }

	    function extend(a, b) {
	        for (var i in b) {
	            if (hasOwnProp(b, i)) {
	                a[i] = b[i];
	            }
	        }

	        if (hasOwnProp(b, 'toString')) {
	            a.toString = b.toString;
	        }

	        if (hasOwnProp(b, 'valueOf')) {
	            a.valueOf = b.valueOf;
	        }

	        return a;
	    }

	    function createUTC(input, format, locale, strict) {
	        return createLocalOrUTC(input, format, locale, strict, true).utc();
	    }

	    function defaultParsingFlags() {
	        // We need to deep clone this object.
	        return {
	            empty: false,
	            unusedTokens: [],
	            unusedInput: [],
	            overflow: -2,
	            charsLeftOver: 0,
	            nullInput: false,
	            invalidEra: null,
	            invalidMonth: null,
	            invalidFormat: false,
	            userInvalidated: false,
	            iso: false,
	            parsedDateParts: [],
	            era: null,
	            meridiem: null,
	            rfc2822: false,
	            weekdayMismatch: false,
	        };
	    }

	    function getParsingFlags(m) {
	        if (m._pf == null) {
	            m._pf = defaultParsingFlags();
	        }
	        return m._pf;
	    }

	    var some;
	    if (Array.prototype.some) {
	        some = Array.prototype.some;
	    } else {
	        some = function (fun) {
	            var t = Object(this),
	                len = t.length >>> 0,
	                i;

	            for (i = 0; i < len; i++) {
	                if (i in t && fun.call(this, t[i], i, t)) {
	                    return true;
	                }
	            }

	            return false;
	        };
	    }

	    function isValid(m) {
	        var flags = null,
	            parsedParts = false,
	            isNowValid = m._d && !isNaN(m._d.getTime());
	        if (isNowValid) {
	            flags = getParsingFlags(m);
	            parsedParts = some.call(flags.parsedDateParts, function (i) {
	                return i != null;
	            });
	            isNowValid =
	                flags.overflow < 0 &&
	                !flags.empty &&
	                !flags.invalidEra &&
	                !flags.invalidMonth &&
	                !flags.invalidWeekday &&
	                !flags.weekdayMismatch &&
	                !flags.nullInput &&
	                !flags.invalidFormat &&
	                !flags.userInvalidated &&
	                (!flags.meridiem || (flags.meridiem && parsedParts));
	            if (m._strict) {
	                isNowValid =
	                    isNowValid &&
	                    flags.charsLeftOver === 0 &&
	                    flags.unusedTokens.length === 0 &&
	                    flags.bigHour === undefined;
	            }
	        }
	        if (Object.isFrozen == null || !Object.isFrozen(m)) {
	            m._isValid = isNowValid;
	        } else {
	            return isNowValid;
	        }
	        return m._isValid;
	    }

	    function createInvalid(flags) {
	        var m = createUTC(NaN);
	        if (flags != null) {
	            extend(getParsingFlags(m), flags);
	        } else {
	            getParsingFlags(m).userInvalidated = true;
	        }

	        return m;
	    }

	    // Plugins that add properties should also add the key here (null value),
	    // so we can properly clone ourselves.
	    var momentProperties = (hooks.momentProperties = []),
	        updateInProgress = false;

	    function copyConfig(to, from) {
	        var i,
	            prop,
	            val,
	            momentPropertiesLen = momentProperties.length;

	        if (!isUndefined(from._isAMomentObject)) {
	            to._isAMomentObject = from._isAMomentObject;
	        }
	        if (!isUndefined(from._i)) {
	            to._i = from._i;
	        }
	        if (!isUndefined(from._f)) {
	            to._f = from._f;
	        }
	        if (!isUndefined(from._l)) {
	            to._l = from._l;
	        }
	        if (!isUndefined(from._strict)) {
	            to._strict = from._strict;
	        }
	        if (!isUndefined(from._tzm)) {
	            to._tzm = from._tzm;
	        }
	        if (!isUndefined(from._isUTC)) {
	            to._isUTC = from._isUTC;
	        }
	        if (!isUndefined(from._offset)) {
	            to._offset = from._offset;
	        }
	        if (!isUndefined(from._pf)) {
	            to._pf = getParsingFlags(from);
	        }
	        if (!isUndefined(from._locale)) {
	            to._locale = from._locale;
	        }

	        if (momentPropertiesLen > 0) {
	            for (i = 0; i < momentPropertiesLen; i++) {
	                prop = momentProperties[i];
	                val = from[prop];
	                if (!isUndefined(val)) {
	                    to[prop] = val;
	                }
	            }
	        }

	        return to;
	    }

	    // Moment prototype object
	    function Moment(config) {
	        copyConfig(this, config);
	        this._d = new Date(config._d != null ? config._d.getTime() : NaN);
	        if (!this.isValid()) {
	            this._d = new Date(NaN);
	        }
	        // Prevent infinite loop in case updateOffset creates new moment
	        // objects.
	        if (updateInProgress === false) {
	            updateInProgress = true;
	            hooks.updateOffset(this);
	            updateInProgress = false;
	        }
	    }

	    function isMoment(obj) {
	        return (
	            obj instanceof Moment || (obj != null && obj._isAMomentObject != null)
	        );
	    }

	    function warn(msg) {
	        if (
	            hooks.suppressDeprecationWarnings === false &&
	            typeof console !== 'undefined' &&
	            console.warn
	        ) {
	            console.warn('Deprecation warning: ' + msg);
	        }
	    }

	    function deprecate(msg, fn) {
	        var firstTime = true;

	        return extend(function () {
	            if (hooks.deprecationHandler != null) {
	                hooks.deprecationHandler(null, msg);
	            }
	            if (firstTime) {
	                var args = [],
	                    arg,
	                    i,
	                    key,
	                    argLen = arguments.length;
	                for (i = 0; i < argLen; i++) {
	                    arg = '';
	                    if (typeof arguments[i] === 'object') {
	                        arg += '\n[' + i + '] ';
	                        for (key in arguments[0]) {
	                            if (hasOwnProp(arguments[0], key)) {
	                                arg += key + ': ' + arguments[0][key] + ', ';
	                            }
	                        }
	                        arg = arg.slice(0, -2); // Remove trailing comma and space
	                    } else {
	                        arg = arguments[i];
	                    }
	                    args.push(arg);
	                }
	                warn(
	                    msg +
	                        '\nArguments: ' +
	                        Array.prototype.slice.call(args).join('') +
	                        '\n' +
	                        new Error().stack
	                );
	                firstTime = false;
	            }
	            return fn.apply(this, arguments);
	        }, fn);
	    }

	    var deprecations = {};

	    function deprecateSimple(name, msg) {
	        if (hooks.deprecationHandler != null) {
	            hooks.deprecationHandler(name, msg);
	        }
	        if (!deprecations[name]) {
	            warn(msg);
	            deprecations[name] = true;
	        }
	    }

	    hooks.suppressDeprecationWarnings = false;
	    hooks.deprecationHandler = null;

	    function isFunction(input) {
	        return (
	            (typeof Function !== 'undefined' && input instanceof Function) ||
	            Object.prototype.toString.call(input) === '[object Function]'
	        );
	    }

	    function set(config) {
	        var prop, i;
	        for (i in config) {
	            if (hasOwnProp(config, i)) {
	                prop = config[i];
	                if (isFunction(prop)) {
	                    this[i] = prop;
	                } else {
	                    this['_' + i] = prop;
	                }
	            }
	        }
	        this._config = config;
	        // Lenient ordinal parsing accepts just a number in addition to
	        // number + (possibly) stuff coming from _dayOfMonthOrdinalParse.
	        // TODO: Remove "ordinalParse" fallback in next major release.
	        this._dayOfMonthOrdinalParseLenient = new RegExp(
	            (this._dayOfMonthOrdinalParse.source || this._ordinalParse.source) +
	                '|' +
	                /\d{1,2}/.source
	        );
	    }

	    function mergeConfigs(parentConfig, childConfig) {
	        var res = extend({}, parentConfig),
	            prop;
	        for (prop in childConfig) {
	            if (hasOwnProp(childConfig, prop)) {
	                if (isObject(parentConfig[prop]) && isObject(childConfig[prop])) {
	                    res[prop] = {};
	                    extend(res[prop], parentConfig[prop]);
	                    extend(res[prop], childConfig[prop]);
	                } else if (childConfig[prop] != null) {
	                    res[prop] = childConfig[prop];
	                } else {
	                    delete res[prop];
	                }
	            }
	        }
	        for (prop in parentConfig) {
	            if (
	                hasOwnProp(parentConfig, prop) &&
	                !hasOwnProp(childConfig, prop) &&
	                isObject(parentConfig[prop])
	            ) {
	                // make sure changes to properties don't modify parent config
	                res[prop] = extend({}, res[prop]);
	            }
	        }
	        return res;
	    }

	    function Locale(config) {
	        if (config != null) {
	            this.set(config);
	        }
	    }

	    var keys;

	    if (Object.keys) {
	        keys = Object.keys;
	    } else {
	        keys = function (obj) {
	            var i,
	                res = [];
	            for (i in obj) {
	                if (hasOwnProp(obj, i)) {
	                    res.push(i);
	                }
	            }
	            return res;
	        };
	    }

	    var defaultCalendar = {
	        sameDay: '[Today at] LT',
	        nextDay: '[Tomorrow at] LT',
	        nextWeek: 'dddd [at] LT',
	        lastDay: '[Yesterday at] LT',
	        lastWeek: '[Last] dddd [at] LT',
	        sameElse: 'L',
	    };

	    function calendar(key, mom, now) {
	        var output = this._calendar[key] || this._calendar['sameElse'];
	        return isFunction(output) ? output.call(mom, now) : output;
	    }

	    function zeroFill(number, targetLength, forceSign) {
	        var absNumber = '' + Math.abs(number),
	            zerosToFill = targetLength - absNumber.length,
	            sign = number >= 0;
	        return (
	            (sign ? (forceSign ? '+' : '') : '-') +
	            Math.pow(10, Math.max(0, zerosToFill)).toString().substr(1) +
	            absNumber
	        );
	    }

	    var formattingTokens =
	            /(\[[^\[]*\])|(\\)?([Hh]mm(ss)?|Mo|MM?M?M?|Do|DDDo|DD?D?D?|ddd?d?|do?|w[o|w]?|W[o|W]?|Qo?|N{1,5}|YYYYYY|YYYYY|YYYY|YY|y{2,4}|yo?|gg(ggg?)?|GG(GGG?)?|e|E|a|A|hh?|HH?|kk?|mm?|ss?|S{1,9}|x|X|zz?|ZZ?|.)/g,
	        localFormattingTokens = /(\[[^\[]*\])|(\\)?(LTS|LT|LL?L?L?|l{1,4})/g,
	        formatFunctions = {},
	        formatTokenFunctions = {};

	    // token:    'M'
	    // padded:   ['MM', 2]
	    // ordinal:  'Mo'
	    // callback: function () { this.month() + 1 }
	    function addFormatToken(token, padded, ordinal, callback) {
	        var func = callback;
	        if (typeof callback === 'string') {
	            func = function () {
	                return this[callback]();
	            };
	        }
	        if (token) {
	            formatTokenFunctions[token] = func;
	        }
	        if (padded) {
	            formatTokenFunctions[padded[0]] = function () {
	                return zeroFill(func.apply(this, arguments), padded[1], padded[2]);
	            };
	        }
	        if (ordinal) {
	            formatTokenFunctions[ordinal] = function () {
	                return this.localeData().ordinal(
	                    func.apply(this, arguments),
	                    token
	                );
	            };
	        }
	    }

	    function removeFormattingTokens(input) {
	        if (input.match(/\[[\s\S]/)) {
	            return input.replace(/^\[|\]$/g, '');
	        }
	        return input.replace(/\\/g, '');
	    }

	    function makeFormatFunction(format) {
	        var array = format.match(formattingTokens),
	            i,
	            length;

	        for (i = 0, length = array.length; i < length; i++) {
	            if (formatTokenFunctions[array[i]]) {
	                array[i] = formatTokenFunctions[array[i]];
	            } else {
	                array[i] = removeFormattingTokens(array[i]);
	            }
	        }

	        return function (mom) {
	            var output = '',
	                i;
	            for (i = 0; i < length; i++) {
	                output += isFunction(array[i])
	                    ? array[i].call(mom, format)
	                    : array[i];
	            }
	            return output;
	        };
	    }

	    // format date using native date object
	    function formatMoment(m, format) {
	        if (!m.isValid()) {
	            return m.localeData().invalidDate();
	        }

	        format = expandFormat(format, m.localeData());
	        formatFunctions[format] =
	            formatFunctions[format] || makeFormatFunction(format);

	        return formatFunctions[format](m);
	    }

	    function expandFormat(format, locale) {
	        var i = 5;

	        function replaceLongDateFormatTokens(input) {
	            return locale.longDateFormat(input) || input;
	        }

	        localFormattingTokens.lastIndex = 0;
	        while (i >= 0 && localFormattingTokens.test(format)) {
	            format = format.replace(
	                localFormattingTokens,
	                replaceLongDateFormatTokens
	            );
	            localFormattingTokens.lastIndex = 0;
	            i -= 1;
	        }

	        return format;
	    }

	    var defaultLongDateFormat = {
	        LTS: 'h:mm:ss A',
	        LT: 'h:mm A',
	        L: 'MM/DD/YYYY',
	        LL: 'MMMM D, YYYY',
	        LLL: 'MMMM D, YYYY h:mm A',
	        LLLL: 'dddd, MMMM D, YYYY h:mm A',
	    };

	    function longDateFormat(key) {
	        var format = this._longDateFormat[key],
	            formatUpper = this._longDateFormat[key.toUpperCase()];

	        if (format || !formatUpper) {
	            return format;
	        }

	        this._longDateFormat[key] = formatUpper
	            .match(formattingTokens)
	            .map(function (tok) {
	                if (
	                    tok === 'MMMM' ||
	                    tok === 'MM' ||
	                    tok === 'DD' ||
	                    tok === 'dddd'
	                ) {
	                    return tok.slice(1);
	                }
	                return tok;
	            })
	            .join('');

	        return this._longDateFormat[key];
	    }

	    var defaultInvalidDate = 'Invalid date';

	    function invalidDate() {
	        return this._invalidDate;
	    }

	    var defaultOrdinal = '%d',
	        defaultDayOfMonthOrdinalParse = /\d{1,2}/;

	    function ordinal(number) {
	        return this._ordinal.replace('%d', number);
	    }

	    var defaultRelativeTime = {
	        future: 'in %s',
	        past: '%s ago',
	        s: 'a few seconds',
	        ss: '%d seconds',
	        m: 'a minute',
	        mm: '%d minutes',
	        h: 'an hour',
	        hh: '%d hours',
	        d: 'a day',
	        dd: '%d days',
	        w: 'a week',
	        ww: '%d weeks',
	        M: 'a month',
	        MM: '%d months',
	        y: 'a year',
	        yy: '%d years',
	    };

	    function relativeTime(number, withoutSuffix, string, isFuture) {
	        var output = this._relativeTime[string];
	        return isFunction(output)
	            ? output(number, withoutSuffix, string, isFuture)
	            : output.replace(/%d/i, number);
	    }

	    function pastFuture(diff, output) {
	        var format = this._relativeTime[diff > 0 ? 'future' : 'past'];
	        return isFunction(format) ? format(output) : format.replace(/%s/i, output);
	    }

	    var aliases = {
	        D: 'date',
	        dates: 'date',
	        date: 'date',
	        d: 'day',
	        days: 'day',
	        day: 'day',
	        e: 'weekday',
	        weekdays: 'weekday',
	        weekday: 'weekday',
	        E: 'isoWeekday',
	        isoweekdays: 'isoWeekday',
	        isoweekday: 'isoWeekday',
	        DDD: 'dayOfYear',
	        dayofyears: 'dayOfYear',
	        dayofyear: 'dayOfYear',
	        h: 'hour',
	        hours: 'hour',
	        hour: 'hour',
	        ms: 'millisecond',
	        milliseconds: 'millisecond',
	        millisecond: 'millisecond',
	        m: 'minute',
	        minutes: 'minute',
	        minute: 'minute',
	        M: 'month',
	        months: 'month',
	        month: 'month',
	        Q: 'quarter',
	        quarters: 'quarter',
	        quarter: 'quarter',
	        s: 'second',
	        seconds: 'second',
	        second: 'second',
	        gg: 'weekYear',
	        weekyears: 'weekYear',
	        weekyear: 'weekYear',
	        GG: 'isoWeekYear',
	        isoweekyears: 'isoWeekYear',
	        isoweekyear: 'isoWeekYear',
	        w: 'week',
	        weeks: 'week',
	        week: 'week',
	        W: 'isoWeek',
	        isoweeks: 'isoWeek',
	        isoweek: 'isoWeek',
	        y: 'year',
	        years: 'year',
	        year: 'year',
	    };

	    function normalizeUnits(units) {
	        return typeof units === 'string'
	            ? aliases[units] || aliases[units.toLowerCase()]
	            : undefined;
	    }

	    function normalizeObjectUnits(inputObject) {
	        var normalizedInput = {},
	            normalizedProp,
	            prop;

	        for (prop in inputObject) {
	            if (hasOwnProp(inputObject, prop)) {
	                normalizedProp = normalizeUnits(prop);
	                if (normalizedProp) {
	                    normalizedInput[normalizedProp] = inputObject[prop];
	                }
	            }
	        }

	        return normalizedInput;
	    }

	    var priorities = {
	        date: 9,
	        day: 11,
	        weekday: 11,
	        isoWeekday: 11,
	        dayOfYear: 4,
	        hour: 13,
	        millisecond: 16,
	        minute: 14,
	        month: 8,
	        quarter: 7,
	        second: 15,
	        weekYear: 1,
	        isoWeekYear: 1,
	        week: 5,
	        isoWeek: 5,
	        year: 1,
	    };

	    function getPrioritizedUnits(unitsObj) {
	        var units = [],
	            u;
	        for (u in unitsObj) {
	            if (hasOwnProp(unitsObj, u)) {
	                units.push({ unit: u, priority: priorities[u] });
	            }
	        }
	        units.sort(function (a, b) {
	            return a.priority - b.priority;
	        });
	        return units;
	    }

	    var match1 = /\d/, //       0 - 9
	        match2 = /\d\d/, //      00 - 99
	        match3 = /\d{3}/, //     000 - 999
	        match4 = /\d{4}/, //    0000 - 9999
	        match6 = /[+-]?\d{6}/, // -999999 - 999999
	        match1to2 = /\d\d?/, //       0 - 99
	        match3to4 = /\d\d\d\d?/, //     999 - 9999
	        match5to6 = /\d\d\d\d\d\d?/, //   99999 - 999999
	        match1to3 = /\d{1,3}/, //       0 - 999
	        match1to4 = /\d{1,4}/, //       0 - 9999
	        match1to6 = /[+-]?\d{1,6}/, // -999999 - 999999
	        matchUnsigned = /\d+/, //       0 - inf
	        matchSigned = /[+-]?\d+/, //    -inf - inf
	        matchOffset = /Z|[+-]\d\d:?\d\d/gi, // +00:00 -00:00 +0000 -0000 or Z
	        matchShortOffset = /Z|[+-]\d\d(?::?\d\d)?/gi, // +00 -00 +00:00 -00:00 +0000 -0000 or Z
	        matchTimestamp = /[+-]?\d+(\.\d{1,3})?/, // 123456789 123456789.123
	        // any word (or two) characters or numbers including two/three word month in arabic.
	        // includes scottish gaelic two word and hyphenated months
	        matchWord =
	            /[0-9]{0,256}['a-z\u00A0-\u05FF\u0700-\uD7FF\uF900-\uFDCF\uFDF0-\uFF07\uFF10-\uFFEF]{1,256}|[\u0600-\u06FF\/]{1,256}(\s*?[\u0600-\u06FF]{1,256}){1,2}/i,
	        match1to2NoLeadingZero = /^[1-9]\d?/, //         1-99
	        match1to2HasZero = /^([1-9]\d|\d)/, //           0-99
	        regexes;

	    regexes = {};

	    function addRegexToken(token, regex, strictRegex) {
	        regexes[token] = isFunction(regex)
	            ? regex
	            : function (isStrict, localeData) {
	                  return isStrict && strictRegex ? strictRegex : regex;
	              };
	    }

	    function getParseRegexForToken(token, config) {
	        if (!hasOwnProp(regexes, token)) {
	            return new RegExp(unescapeFormat(token));
	        }

	        return regexes[token](config._strict, config._locale);
	    }

	    // Code from http://stackoverflow.com/questions/3561493/is-there-a-regexp-escape-function-in-javascript
	    function unescapeFormat(s) {
	        return regexEscape(
	            s
	                .replace('\\', '')
	                .replace(
	                    /\\(\[)|\\(\])|\[([^\]\[]*)\]|\\(.)/g,
	                    function (matched, p1, p2, p3, p4) {
	                        return p1 || p2 || p3 || p4;
	                    }
	                )
	        );
	    }

	    function regexEscape(s) {
	        return s.replace(/[-\/\\^$*+?.()|[\]{}]/g, '\\$&');
	    }

	    function absFloor(number) {
	        if (number < 0) {
	            // -0 -> 0
	            return Math.ceil(number) || 0;
	        } else {
	            return Math.floor(number);
	        }
	    }

	    function toInt(argumentForCoercion) {
	        var coercedNumber = +argumentForCoercion,
	            value = 0;

	        if (coercedNumber !== 0 && isFinite(coercedNumber)) {
	            value = absFloor(coercedNumber);
	        }

	        return value;
	    }

	    var tokens = {};

	    function addParseToken(token, callback) {
	        var i,
	            func = callback,
	            tokenLen;
	        if (typeof token === 'string') {
	            token = [token];
	        }
	        if (isNumber(callback)) {
	            func = function (input, array) {
	                array[callback] = toInt(input);
	            };
	        }
	        tokenLen = token.length;
	        for (i = 0; i < tokenLen; i++) {
	            tokens[token[i]] = func;
	        }
	    }

	    function addWeekParseToken(token, callback) {
	        addParseToken(token, function (input, array, config, token) {
	            config._w = config._w || {};
	            callback(input, config._w, config, token);
	        });
	    }

	    function addTimeToArrayFromToken(token, input, config) {
	        if (input != null && hasOwnProp(tokens, token)) {
	            tokens[token](input, config._a, config, token);
	        }
	    }

	    function isLeapYear(year) {
	        return (year % 4 === 0 && year % 100 !== 0) || year % 400 === 0;
	    }

	    var YEAR = 0,
	        MONTH = 1,
	        DATE = 2,
	        HOUR = 3,
	        MINUTE = 4,
	        SECOND = 5,
	        MILLISECOND = 6,
	        WEEK = 7,
	        WEEKDAY = 8;

	    // FORMATTING

	    addFormatToken('Y', 0, 0, function () {
	        var y = this.year();
	        return y <= 9999 ? zeroFill(y, 4) : '+' + y;
	    });

	    addFormatToken(0, ['YY', 2], 0, function () {
	        return this.year() % 100;
	    });

	    addFormatToken(0, ['YYYY', 4], 0, 'year');
	    addFormatToken(0, ['YYYYY', 5], 0, 'year');
	    addFormatToken(0, ['YYYYYY', 6, true], 0, 'year');

	    // PARSING

	    addRegexToken('Y', matchSigned);
	    addRegexToken('YY', match1to2, match2);
	    addRegexToken('YYYY', match1to4, match4);
	    addRegexToken('YYYYY', match1to6, match6);
	    addRegexToken('YYYYYY', match1to6, match6);

	    addParseToken(['YYYYY', 'YYYYYY'], YEAR);
	    addParseToken('YYYY', function (input, array) {
	        array[YEAR] =
	            input.length === 2 ? hooks.parseTwoDigitYear(input) : toInt(input);
	    });
	    addParseToken('YY', function (input, array) {
	        array[YEAR] = hooks.parseTwoDigitYear(input);
	    });
	    addParseToken('Y', function (input, array) {
	        array[YEAR] = parseInt(input, 10);
	    });

	    // HELPERS

	    function daysInYear(year) {
	        return isLeapYear(year) ? 366 : 365;
	    }

	    // HOOKS

	    hooks.parseTwoDigitYear = function (input) {
	        return toInt(input) + (toInt(input) > 68 ? 1900 : 2000);
	    };

	    // MOMENTS

	    var getSetYear = makeGetSet('FullYear', true);

	    function getIsLeapYear() {
	        return isLeapYear(this.year());
	    }

	    function makeGetSet(unit, keepTime) {
	        return function (value) {
	            if (value != null) {
	                set$1(this, unit, value);
	                hooks.updateOffset(this, keepTime);
	                return this;
	            } else {
	                return get(this, unit);
	            }
	        };
	    }

	    function get(mom, unit) {
	        if (!mom.isValid()) {
	            return NaN;
	        }

	        var d = mom._d,
	            isUTC = mom._isUTC;

	        switch (unit) {
	            case 'Milliseconds':
	                return isUTC ? d.getUTCMilliseconds() : d.getMilliseconds();
	            case 'Seconds':
	                return isUTC ? d.getUTCSeconds() : d.getSeconds();
	            case 'Minutes':
	                return isUTC ? d.getUTCMinutes() : d.getMinutes();
	            case 'Hours':
	                return isUTC ? d.getUTCHours() : d.getHours();
	            case 'Date':
	                return isUTC ? d.getUTCDate() : d.getDate();
	            case 'Day':
	                return isUTC ? d.getUTCDay() : d.getDay();
	            case 'Month':
	                return isUTC ? d.getUTCMonth() : d.getMonth();
	            case 'FullYear':
	                return isUTC ? d.getUTCFullYear() : d.getFullYear();
	            default:
	                return NaN; // Just in case
	        }
	    }

	    function set$1(mom, unit, value) {
	        var d, isUTC, year, month, date;

	        if (!mom.isValid() || isNaN(value)) {
	            return;
	        }

	        d = mom._d;
	        isUTC = mom._isUTC;

	        switch (unit) {
	            case 'Milliseconds':
	                return void (isUTC
	                    ? d.setUTCMilliseconds(value)
	                    : d.setMilliseconds(value));
	            case 'Seconds':
	                return void (isUTC ? d.setUTCSeconds(value) : d.setSeconds(value));
	            case 'Minutes':
	                return void (isUTC ? d.setUTCMinutes(value) : d.setMinutes(value));
	            case 'Hours':
	                return void (isUTC ? d.setUTCHours(value) : d.setHours(value));
	            case 'Date':
	                return void (isUTC ? d.setUTCDate(value) : d.setDate(value));
	            // case 'Day': // Not real
	            //    return void (isUTC ? d.setUTCDay(value) : d.setDay(value));
	            // case 'Month': // Not used because we need to pass two variables
	            //     return void (isUTC ? d.setUTCMonth(value) : d.setMonth(value));
	            case 'FullYear':
	                break; // See below ...
	            default:
	                return; // Just in case
	        }

	        year = value;
	        month = mom.month();
	        date = mom.date();
	        date = date === 29 && month === 1 && !isLeapYear(year) ? 28 : date;
	        void (isUTC
	            ? d.setUTCFullYear(year, month, date)
	            : d.setFullYear(year, month, date));
	    }

	    // MOMENTS

	    function stringGet(units) {
	        units = normalizeUnits(units);
	        if (isFunction(this[units])) {
	            return this[units]();
	        }
	        return this;
	    }

	    function stringSet(units, value) {
	        if (typeof units === 'object') {
	            units = normalizeObjectUnits(units);
	            var prioritized = getPrioritizedUnits(units),
	                i,
	                prioritizedLen = prioritized.length;
	            for (i = 0; i < prioritizedLen; i++) {
	                this[prioritized[i].unit](units[prioritized[i].unit]);
	            }
	        } else {
	            units = normalizeUnits(units);
	            if (isFunction(this[units])) {
	                return this[units](value);
	            }
	        }
	        return this;
	    }

	    function mod(n, x) {
	        return ((n % x) + x) % x;
	    }

	    var indexOf;

	    if (Array.prototype.indexOf) {
	        indexOf = Array.prototype.indexOf;
	    } else {
	        indexOf = function (o) {
	            // I know
	            var i;
	            for (i = 0; i < this.length; ++i) {
	                if (this[i] === o) {
	                    return i;
	                }
	            }
	            return -1;
	        };
	    }

	    function daysInMonth(year, month) {
	        if (isNaN(year) || isNaN(month)) {
	            return NaN;
	        }
	        var modMonth = mod(month, 12);
	        year += (month - modMonth) / 12;
	        return modMonth === 1
	            ? isLeapYear(year)
	                ? 29
	                : 28
	            : 31 - ((modMonth % 7) % 2);
	    }

	    // FORMATTING

	    addFormatToken('M', ['MM', 2], 'Mo', function () {
	        return this.month() + 1;
	    });

	    addFormatToken('MMM', 0, 0, function (format) {
	        return this.localeData().monthsShort(this, format);
	    });

	    addFormatToken('MMMM', 0, 0, function (format) {
	        return this.localeData().months(this, format);
	    });

	    // PARSING

	    addRegexToken('M', match1to2, match1to2NoLeadingZero);
	    addRegexToken('MM', match1to2, match2);
	    addRegexToken('MMM', function (isStrict, locale) {
	        return locale.monthsShortRegex(isStrict);
	    });
	    addRegexToken('MMMM', function (isStrict, locale) {
	        return locale.monthsRegex(isStrict);
	    });

	    addParseToken(['M', 'MM'], function (input, array) {
	        array[MONTH] = toInt(input) - 1;
	    });

	    addParseToken(['MMM', 'MMMM'], function (input, array, config, token) {
	        var month = config._locale.monthsParse(input, token, config._strict);
	        // if we didn't find a month name, mark the date as invalid.
	        if (month != null) {
	            array[MONTH] = month;
	        } else {
	            getParsingFlags(config).invalidMonth = input;
	        }
	    });

	    // LOCALES

	    var defaultLocaleMonths =
	            'January_February_March_April_May_June_July_August_September_October_November_December'.split(
	                '_'
	            ),
	        defaultLocaleMonthsShort =
	            'Jan_Feb_Mar_Apr_May_Jun_Jul_Aug_Sep_Oct_Nov_Dec'.split('_'),
	        MONTHS_IN_FORMAT = /D[oD]?(\[[^\[\]]*\]|\s)+MMMM?/,
	        defaultMonthsShortRegex = matchWord,
	        defaultMonthsRegex = matchWord;

	    function localeMonths(m, format) {
	        if (!m) {
	            return isArray(this._months)
	                ? this._months
	                : this._months['standalone'];
	        }
	        return isArray(this._months)
	            ? this._months[m.month()]
	            : this._months[
	                  (this._months.isFormat || MONTHS_IN_FORMAT).test(format)
	                      ? 'format'
	                      : 'standalone'
	              ][m.month()];
	    }

	    function localeMonthsShort(m, format) {
	        if (!m) {
	            return isArray(this._monthsShort)
	                ? this._monthsShort
	                : this._monthsShort['standalone'];
	        }
	        return isArray(this._monthsShort)
	            ? this._monthsShort[m.month()]
	            : this._monthsShort[
	                  MONTHS_IN_FORMAT.test(format) ? 'format' : 'standalone'
	              ][m.month()];
	    }

	    function handleStrictParse(monthName, format, strict) {
	        var i,
	            ii,
	            mom,
	            llc = monthName.toLocaleLowerCase();
	        if (!this._monthsParse) {
	            // this is not used
	            this._monthsParse = [];
	            this._longMonthsParse = [];
	            this._shortMonthsParse = [];
	            for (i = 0; i < 12; ++i) {
	                mom = createUTC([2000, i]);
	                this._shortMonthsParse[i] = this.monthsShort(
	                    mom,
	                    ''
	                ).toLocaleLowerCase();
	                this._longMonthsParse[i] = this.months(mom, '').toLocaleLowerCase();
	            }
	        }

	        if (strict) {
	            if (format === 'MMM') {
	                ii = indexOf.call(this._shortMonthsParse, llc);
	                return ii !== -1 ? ii : null;
	            } else {
	                ii = indexOf.call(this._longMonthsParse, llc);
	                return ii !== -1 ? ii : null;
	            }
	        } else {
	            if (format === 'MMM') {
	                ii = indexOf.call(this._shortMonthsParse, llc);
	                if (ii !== -1) {
	                    return ii;
	                }
	                ii = indexOf.call(this._longMonthsParse, llc);
	                return ii !== -1 ? ii : null;
	            } else {
	                ii = indexOf.call(this._longMonthsParse, llc);
	                if (ii !== -1) {
	                    return ii;
	                }
	                ii = indexOf.call(this._shortMonthsParse, llc);
	                return ii !== -1 ? ii : null;
	            }
	        }
	    }

	    function localeMonthsParse(monthName, format, strict) {
	        var i, mom, regex;

	        if (this._monthsParseExact) {
	            return handleStrictParse.call(this, monthName, format, strict);
	        }

	        if (!this._monthsParse) {
	            this._monthsParse = [];
	            this._longMonthsParse = [];
	            this._shortMonthsParse = [];
	        }

	        // TODO: add sorting
	        // Sorting makes sure if one month (or abbr) is a prefix of another
	        // see sorting in computeMonthsParse
	        for (i = 0; i < 12; i++) {
	            // make the regex if we don't have it already
	            mom = createUTC([2000, i]);
	            if (strict && !this._longMonthsParse[i]) {
	                this._longMonthsParse[i] = new RegExp(
	                    '^' + this.months(mom, '').replace('.', '') + '$',
	                    'i'
	                );
	                this._shortMonthsParse[i] = new RegExp(
	                    '^' + this.monthsShort(mom, '').replace('.', '') + '$',
	                    'i'
	                );
	            }
	            if (!strict && !this._monthsParse[i]) {
	                regex =
	                    '^' + this.months(mom, '') + '|^' + this.monthsShort(mom, '');
	                this._monthsParse[i] = new RegExp(regex.replace('.', ''), 'i');
	            }
	            // test the regex
	            if (
	                strict &&
	                format === 'MMMM' &&
	                this._longMonthsParse[i].test(monthName)
	            ) {
	                return i;
	            } else if (
	                strict &&
	                format === 'MMM' &&
	                this._shortMonthsParse[i].test(monthName)
	            ) {
	                return i;
	            } else if (!strict && this._monthsParse[i].test(monthName)) {
	                return i;
	            }
	        }
	    }

	    // MOMENTS

	    function setMonth(mom, value) {
	        if (!mom.isValid()) {
	            // No op
	            return mom;
	        }

	        if (typeof value === 'string') {
	            if (/^\d+$/.test(value)) {
	                value = toInt(value);
	            } else {
	                value = mom.localeData().monthsParse(value);
	                // TODO: Another silent failure?
	                if (!isNumber(value)) {
	                    return mom;
	                }
	            }
	        }

	        var month = value,
	            date = mom.date();

	        date = date < 29 ? date : Math.min(date, daysInMonth(mom.year(), month));
	        void (mom._isUTC
	            ? mom._d.setUTCMonth(month, date)
	            : mom._d.setMonth(month, date));
	        return mom;
	    }

	    function getSetMonth(value) {
	        if (value != null) {
	            setMonth(this, value);
	            hooks.updateOffset(this, true);
	            return this;
	        } else {
	            return get(this, 'Month');
	        }
	    }

	    function getDaysInMonth() {
	        return daysInMonth(this.year(), this.month());
	    }

	    function monthsShortRegex(isStrict) {
	        if (this._monthsParseExact) {
	            if (!hasOwnProp(this, '_monthsRegex')) {
	                computeMonthsParse.call(this);
	            }
	            if (isStrict) {
	                return this._monthsShortStrictRegex;
	            } else {
	                return this._monthsShortRegex;
	            }
	        } else {
	            if (!hasOwnProp(this, '_monthsShortRegex')) {
	                this._monthsShortRegex = defaultMonthsShortRegex;
	            }
	            return this._monthsShortStrictRegex && isStrict
	                ? this._monthsShortStrictRegex
	                : this._monthsShortRegex;
	        }
	    }

	    function monthsRegex(isStrict) {
	        if (this._monthsParseExact) {
	            if (!hasOwnProp(this, '_monthsRegex')) {
	                computeMonthsParse.call(this);
	            }
	            if (isStrict) {
	                return this._monthsStrictRegex;
	            } else {
	                return this._monthsRegex;
	            }
	        } else {
	            if (!hasOwnProp(this, '_monthsRegex')) {
	                this._monthsRegex = defaultMonthsRegex;
	            }
	            return this._monthsStrictRegex && isStrict
	                ? this._monthsStrictRegex
	                : this._monthsRegex;
	        }
	    }

	    function computeMonthsParse() {
	        function cmpLenRev(a, b) {
	            return b.length - a.length;
	        }

	        var shortPieces = [],
	            longPieces = [],
	            mixedPieces = [],
	            i,
	            mom,
	            shortP,
	            longP;
	        for (i = 0; i < 12; i++) {
	            // make the regex if we don't have it already
	            mom = createUTC([2000, i]);
	            shortP = regexEscape(this.monthsShort(mom, ''));
	            longP = regexEscape(this.months(mom, ''));
	            shortPieces.push(shortP);
	            longPieces.push(longP);
	            mixedPieces.push(longP);
	            mixedPieces.push(shortP);
	        }
	        // Sorting makes sure if one month (or abbr) is a prefix of another it
	        // will match the longer piece.
	        shortPieces.sort(cmpLenRev);
	        longPieces.sort(cmpLenRev);
	        mixedPieces.sort(cmpLenRev);

	        this._monthsRegex = new RegExp('^(' + mixedPieces.join('|') + ')', 'i');
	        this._monthsShortRegex = this._monthsRegex;
	        this._monthsStrictRegex = new RegExp(
	            '^(' + longPieces.join('|') + ')',
	            'i'
	        );
	        this._monthsShortStrictRegex = new RegExp(
	            '^(' + shortPieces.join('|') + ')',
	            'i'
	        );
	    }

	    function createDate(y, m, d, h, M, s, ms) {
	        // can't just apply() to create a date:
	        // https://stackoverflow.com/q/181348
	        var date;
	        // the date constructor remaps years 0-99 to 1900-1999
	        if (y < 100 && y >= 0) {
	            // preserve leap years using a full 400 year cycle, then reset
	            date = new Date(y + 400, m, d, h, M, s, ms);
	            if (isFinite(date.getFullYear())) {
	                date.setFullYear(y);
	            }
	        } else {
	            date = new Date(y, m, d, h, M, s, ms);
	        }

	        return date;
	    }

	    function createUTCDate(y) {
	        var date, args;
	        // the Date.UTC function remaps years 0-99 to 1900-1999
	        if (y < 100 && y >= 0) {
	            args = Array.prototype.slice.call(arguments);
	            // preserve leap years using a full 400 year cycle, then reset
	            args[0] = y + 400;
	            date = new Date(Date.UTC.apply(null, args));
	            if (isFinite(date.getUTCFullYear())) {
	                date.setUTCFullYear(y);
	            }
	        } else {
	            date = new Date(Date.UTC.apply(null, arguments));
	        }

	        return date;
	    }

	    // start-of-first-week - start-of-year
	    function firstWeekOffset(year, dow, doy) {
	        var // first-week day -- which january is always in the first week (4 for iso, 1 for other)
	            fwd = 7 + dow - doy,
	            // first-week day local weekday -- which local weekday is fwd
	            fwdlw = (7 + createUTCDate(year, 0, fwd).getUTCDay() - dow) % 7;

	        return -fwdlw + fwd - 1;
	    }

	    // https://en.wikipedia.org/wiki/ISO_week_date#Calculating_a_date_given_the_year.2C_week_number_and_weekday
	    function dayOfYearFromWeeks(year, week, weekday, dow, doy) {
	        var localWeekday = (7 + weekday - dow) % 7,
	            weekOffset = firstWeekOffset(year, dow, doy),
	            dayOfYear = 1 + 7 * (week - 1) + localWeekday + weekOffset,
	            resYear,
	            resDayOfYear;

	        if (dayOfYear <= 0) {
	            resYear = year - 1;
	            resDayOfYear = daysInYear(resYear) + dayOfYear;
	        } else if (dayOfYear > daysInYear(year)) {
	            resYear = year + 1;
	            resDayOfYear = dayOfYear - daysInYear(year);
	        } else {
	            resYear = year;
	            resDayOfYear = dayOfYear;
	        }

	        return {
	            year: resYear,
	            dayOfYear: resDayOfYear,
	        };
	    }

	    function weekOfYear(mom, dow, doy) {
	        var weekOffset = firstWeekOffset(mom.year(), dow, doy),
	            week = Math.floor((mom.dayOfYear() - weekOffset - 1) / 7) + 1,
	            resWeek,
	            resYear;

	        if (week < 1) {
	            resYear = mom.year() - 1;
	            resWeek = week + weeksInYear(resYear, dow, doy);
	        } else if (week > weeksInYear(mom.year(), dow, doy)) {
	            resWeek = week - weeksInYear(mom.year(), dow, doy);
	            resYear = mom.year() + 1;
	        } else {
	            resYear = mom.year();
	            resWeek = week;
	        }

	        return {
	            week: resWeek,
	            year: resYear,
	        };
	    }

	    function weeksInYear(year, dow, doy) {
	        var weekOffset = firstWeekOffset(year, dow, doy),
	            weekOffsetNext = firstWeekOffset(year + 1, dow, doy);
	        return (daysInYear(year) - weekOffset + weekOffsetNext) / 7;
	    }

	    // FORMATTING

	    addFormatToken('w', ['ww', 2], 'wo', 'week');
	    addFormatToken('W', ['WW', 2], 'Wo', 'isoWeek');

	    // PARSING

	    addRegexToken('w', match1to2, match1to2NoLeadingZero);
	    addRegexToken('ww', match1to2, match2);
	    addRegexToken('W', match1to2, match1to2NoLeadingZero);
	    addRegexToken('WW', match1to2, match2);

	    addWeekParseToken(
	        ['w', 'ww', 'W', 'WW'],
	        function (input, week, config, token) {
	            week[token.substr(0, 1)] = toInt(input);
	        }
	    );

	    // HELPERS

	    // LOCALES

	    function localeWeek(mom) {
	        return weekOfYear(mom, this._week.dow, this._week.doy).week;
	    }

	    var defaultLocaleWeek = {
	        dow: 0, // Sunday is the first day of the week.
	        doy: 6, // The week that contains Jan 6th is the first week of the year.
	    };

	    function localeFirstDayOfWeek() {
	        return this._week.dow;
	    }

	    function localeFirstDayOfYear() {
	        return this._week.doy;
	    }

	    // MOMENTS

	    function getSetWeek(input) {
	        var week = this.localeData().week(this);
	        return input == null ? week : this.add((input - week) * 7, 'd');
	    }

	    function getSetISOWeek(input) {
	        var week = weekOfYear(this, 1, 4).week;
	        return input == null ? week : this.add((input - week) * 7, 'd');
	    }

	    // FORMATTING

	    addFormatToken('d', 0, 'do', 'day');

	    addFormatToken('dd', 0, 0, function (format) {
	        return this.localeData().weekdaysMin(this, format);
	    });

	    addFormatToken('ddd', 0, 0, function (format) {
	        return this.localeData().weekdaysShort(this, format);
	    });

	    addFormatToken('dddd', 0, 0, function (format) {
	        return this.localeData().weekdays(this, format);
	    });

	    addFormatToken('e', 0, 0, 'weekday');
	    addFormatToken('E', 0, 0, 'isoWeekday');

	    // PARSING

	    addRegexToken('d', match1to2);
	    addRegexToken('e', match1to2);
	    addRegexToken('E', match1to2);
	    addRegexToken('dd', function (isStrict, locale) {
	        return locale.weekdaysMinRegex(isStrict);
	    });
	    addRegexToken('ddd', function (isStrict, locale) {
	        return locale.weekdaysShortRegex(isStrict);
	    });
	    addRegexToken('dddd', function (isStrict, locale) {
	        return locale.weekdaysRegex(isStrict);
	    });

	    addWeekParseToken(['dd', 'ddd', 'dddd'], function (input, week, config, token) {
	        var weekday = config._locale.weekdaysParse(input, token, config._strict);
	        // if we didn't get a weekday name, mark the date as invalid
	        if (weekday != null) {
	            week.d = weekday;
	        } else {
	            getParsingFlags(config).invalidWeekday = input;
	        }
	    });

	    addWeekParseToken(['d', 'e', 'E'], function (input, week, config, token) {
	        week[token] = toInt(input);
	    });

	    // HELPERS

	    function parseWeekday(input, locale) {
	        if (typeof input !== 'string') {
	            return input;
	        }

	        if (!isNaN(input)) {
	            return parseInt(input, 10);
	        }

	        input = locale.weekdaysParse(input);
	        if (typeof input === 'number') {
	            return input;
	        }

	        return null;
	    }

	    function parseIsoWeekday(input, locale) {
	        if (typeof input === 'string') {
	            return locale.weekdaysParse(input) % 7 || 7;
	        }
	        return isNaN(input) ? null : input;
	    }

	    // LOCALES
	    function shiftWeekdays(ws, n) {
	        return ws.slice(n, 7).concat(ws.slice(0, n));
	    }

	    var defaultLocaleWeekdays =
	            'Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday'.split('_'),
	        defaultLocaleWeekdaysShort = 'Sun_Mon_Tue_Wed_Thu_Fri_Sat'.split('_'),
	        defaultLocaleWeekdaysMin = 'Su_Mo_Tu_We_Th_Fr_Sa'.split('_'),
	        defaultWeekdaysRegex = matchWord,
	        defaultWeekdaysShortRegex = matchWord,
	        defaultWeekdaysMinRegex = matchWord;

	    function localeWeekdays(m, format) {
	        var weekdays = isArray(this._weekdays)
	            ? this._weekdays
	            : this._weekdays[
	                  m && m !== true && this._weekdays.isFormat.test(format)
	                      ? 'format'
	                      : 'standalone'
	              ];
	        return m === true
	            ? shiftWeekdays(weekdays, this._week.dow)
	            : m
	              ? weekdays[m.day()]
	              : weekdays;
	    }

	    function localeWeekdaysShort(m) {
	        return m === true
	            ? shiftWeekdays(this._weekdaysShort, this._week.dow)
	            : m
	              ? this._weekdaysShort[m.day()]
	              : this._weekdaysShort;
	    }

	    function localeWeekdaysMin(m) {
	        return m === true
	            ? shiftWeekdays(this._weekdaysMin, this._week.dow)
	            : m
	              ? this._weekdaysMin[m.day()]
	              : this._weekdaysMin;
	    }

	    function handleStrictParse$1(weekdayName, format, strict) {
	        var i,
	            ii,
	            mom,
	            llc = weekdayName.toLocaleLowerCase();
	        if (!this._weekdaysParse) {
	            this._weekdaysParse = [];
	            this._shortWeekdaysParse = [];
	            this._minWeekdaysParse = [];

	            for (i = 0; i < 7; ++i) {
	                mom = createUTC([2000, 1]).day(i);
	                this._minWeekdaysParse[i] = this.weekdaysMin(
	                    mom,
	                    ''
	                ).toLocaleLowerCase();
	                this._shortWeekdaysParse[i] = this.weekdaysShort(
	                    mom,
	                    ''
	                ).toLocaleLowerCase();
	                this._weekdaysParse[i] = this.weekdays(mom, '').toLocaleLowerCase();
	            }
	        }

	        if (strict) {
	            if (format === 'dddd') {
	                ii = indexOf.call(this._weekdaysParse, llc);
	                return ii !== -1 ? ii : null;
	            } else if (format === 'ddd') {
	                ii = indexOf.call(this._shortWeekdaysParse, llc);
	                return ii !== -1 ? ii : null;
	            } else {
	                ii = indexOf.call(this._minWeekdaysParse, llc);
	                return ii !== -1 ? ii : null;
	            }
	        } else {
	            if (format === 'dddd') {
	                ii = indexOf.call(this._weekdaysParse, llc);
	                if (ii !== -1) {
	                    return ii;
	                }
	                ii = indexOf.call(this._shortWeekdaysParse, llc);
	                if (ii !== -1) {
	                    return ii;
	                }
	                ii = indexOf.call(this._minWeekdaysParse, llc);
	                return ii !== -1 ? ii : null;
	            } else if (format === 'ddd') {
	                ii = indexOf.call(this._shortWeekdaysParse, llc);
	                if (ii !== -1) {
	                    return ii;
	                }
	                ii = indexOf.call(this._weekdaysParse, llc);
	                if (ii !== -1) {
	                    return ii;
	                }
	                ii = indexOf.call(this._minWeekdaysParse, llc);
	                return ii !== -1 ? ii : null;
	            } else {
	                ii = indexOf.call(this._minWeekdaysParse, llc);
	                if (ii !== -1) {
	                    return ii;
	                }
	                ii = indexOf.call(this._weekdaysParse, llc);
	                if (ii !== -1) {
	                    return ii;
	                }
	                ii = indexOf.call(this._shortWeekdaysParse, llc);
	                return ii !== -1 ? ii : null;
	            }
	        }
	    }

	    function localeWeekdaysParse(weekdayName, format, strict) {
	        var i, mom, regex;

	        if (this._weekdaysParseExact) {
	            return handleStrictParse$1.call(this, weekdayName, format, strict);
	        }

	        if (!this._weekdaysParse) {
	            this._weekdaysParse = [];
	            this._minWeekdaysParse = [];
	            this._shortWeekdaysParse = [];
	            this._fullWeekdaysParse = [];
	        }

	        for (i = 0; i < 7; i++) {
	            // make the regex if we don't have it already

	            mom = createUTC([2000, 1]).day(i);
	            if (strict && !this._fullWeekdaysParse[i]) {
	                this._fullWeekdaysParse[i] = new RegExp(
	                    '^' + this.weekdays(mom, '').replace('.', '\\.?') + '$',
	                    'i'
	                );
	                this._shortWeekdaysParse[i] = new RegExp(
	                    '^' + this.weekdaysShort(mom, '').replace('.', '\\.?') + '$',
	                    'i'
	                );
	                this._minWeekdaysParse[i] = new RegExp(
	                    '^' + this.weekdaysMin(mom, '').replace('.', '\\.?') + '$',
	                    'i'
	                );
	            }
	            if (!this._weekdaysParse[i]) {
	                regex =
	                    '^' +
	                    this.weekdays(mom, '') +
	                    '|^' +
	                    this.weekdaysShort(mom, '') +
	                    '|^' +
	                    this.weekdaysMin(mom, '');
	                this._weekdaysParse[i] = new RegExp(regex.replace('.', ''), 'i');
	            }
	            // test the regex
	            if (
	                strict &&
	                format === 'dddd' &&
	                this._fullWeekdaysParse[i].test(weekdayName)
	            ) {
	                return i;
	            } else if (
	                strict &&
	                format === 'ddd' &&
	                this._shortWeekdaysParse[i].test(weekdayName)
	            ) {
	                return i;
	            } else if (
	                strict &&
	                format === 'dd' &&
	                this._minWeekdaysParse[i].test(weekdayName)
	            ) {
	                return i;
	            } else if (!strict && this._weekdaysParse[i].test(weekdayName)) {
	                return i;
	            }
	        }
	    }

	    // MOMENTS

	    function getSetDayOfWeek(input) {
	        if (!this.isValid()) {
	            return input != null ? this : NaN;
	        }

	        var day = get(this, 'Day');
	        if (input != null) {
	            input = parseWeekday(input, this.localeData());
	            return this.add(input - day, 'd');
	        } else {
	            return day;
	        }
	    }

	    function getSetLocaleDayOfWeek(input) {
	        if (!this.isValid()) {
	            return input != null ? this : NaN;
	        }
	        var weekday = (this.day() + 7 - this.localeData()._week.dow) % 7;
	        return input == null ? weekday : this.add(input - weekday, 'd');
	    }

	    function getSetISODayOfWeek(input) {
	        if (!this.isValid()) {
	            return input != null ? this : NaN;
	        }

	        // behaves the same as moment#day except
	        // as a getter, returns 7 instead of 0 (1-7 range instead of 0-6)
	        // as a setter, sunday should belong to the previous week.

	        if (input != null) {
	            var weekday = parseIsoWeekday(input, this.localeData());
	            return this.day(this.day() % 7 ? weekday : weekday - 7);
	        } else {
	            return this.day() || 7;
	        }
	    }

	    function weekdaysRegex(isStrict) {
	        if (this._weekdaysParseExact) {
	            if (!hasOwnProp(this, '_weekdaysRegex')) {
	                computeWeekdaysParse.call(this);
	            }
	            if (isStrict) {
	                return this._weekdaysStrictRegex;
	            } else {
	                return this._weekdaysRegex;
	            }
	        } else {
	            if (!hasOwnProp(this, '_weekdaysRegex')) {
	                this._weekdaysRegex = defaultWeekdaysRegex;
	            }
	            return this._weekdaysStrictRegex && isStrict
	                ? this._weekdaysStrictRegex
	                : this._weekdaysRegex;
	        }
	    }

	    function weekdaysShortRegex(isStrict) {
	        if (this._weekdaysParseExact) {
	            if (!hasOwnProp(this, '_weekdaysRegex')) {
	                computeWeekdaysParse.call(this);
	            }
	            if (isStrict) {
	                return this._weekdaysShortStrictRegex;
	            } else {
	                return this._weekdaysShortRegex;
	            }
	        } else {
	            if (!hasOwnProp(this, '_weekdaysShortRegex')) {
	                this._weekdaysShortRegex = defaultWeekdaysShortRegex;
	            }
	            return this._weekdaysShortStrictRegex && isStrict
	                ? this._weekdaysShortStrictRegex
	                : this._weekdaysShortRegex;
	        }
	    }

	    function weekdaysMinRegex(isStrict) {
	        if (this._weekdaysParseExact) {
	            if (!hasOwnProp(this, '_weekdaysRegex')) {
	                computeWeekdaysParse.call(this);
	            }
	            if (isStrict) {
	                return this._weekdaysMinStrictRegex;
	            } else {
	                return this._weekdaysMinRegex;
	            }
	        } else {
	            if (!hasOwnProp(this, '_weekdaysMinRegex')) {
	                this._weekdaysMinRegex = defaultWeekdaysMinRegex;
	            }
	            return this._weekdaysMinStrictRegex && isStrict
	                ? this._weekdaysMinStrictRegex
	                : this._weekdaysMinRegex;
	        }
	    }

	    function computeWeekdaysParse() {
	        function cmpLenRev(a, b) {
	            return b.length - a.length;
	        }

	        var minPieces = [],
	            shortPieces = [],
	            longPieces = [],
	            mixedPieces = [],
	            i,
	            mom,
	            minp,
	            shortp,
	            longp;
	        for (i = 0; i < 7; i++) {
	            // make the regex if we don't have it already
	            mom = createUTC([2000, 1]).day(i);
	            minp = regexEscape(this.weekdaysMin(mom, ''));
	            shortp = regexEscape(this.weekdaysShort(mom, ''));
	            longp = regexEscape(this.weekdays(mom, ''));
	            minPieces.push(minp);
	            shortPieces.push(shortp);
	            longPieces.push(longp);
	            mixedPieces.push(minp);
	            mixedPieces.push(shortp);
	            mixedPieces.push(longp);
	        }
	        // Sorting makes sure if one weekday (or abbr) is a prefix of another it
	        // will match the longer piece.
	        minPieces.sort(cmpLenRev);
	        shortPieces.sort(cmpLenRev);
	        longPieces.sort(cmpLenRev);
	        mixedPieces.sort(cmpLenRev);

	        this._weekdaysRegex = new RegExp('^(' + mixedPieces.join('|') + ')', 'i');
	        this._weekdaysShortRegex = this._weekdaysRegex;
	        this._weekdaysMinRegex = this._weekdaysRegex;

	        this._weekdaysStrictRegex = new RegExp(
	            '^(' + longPieces.join('|') + ')',
	            'i'
	        );
	        this._weekdaysShortStrictRegex = new RegExp(
	            '^(' + shortPieces.join('|') + ')',
	            'i'
	        );
	        this._weekdaysMinStrictRegex = new RegExp(
	            '^(' + minPieces.join('|') + ')',
	            'i'
	        );
	    }

	    // FORMATTING

	    function hFormat() {
	        return this.hours() % 12 || 12;
	    }

	    function kFormat() {
	        return this.hours() || 24;
	    }

	    addFormatToken('H', ['HH', 2], 0, 'hour');
	    addFormatToken('h', ['hh', 2], 0, hFormat);
	    addFormatToken('k', ['kk', 2], 0, kFormat);

	    addFormatToken('hmm', 0, 0, function () {
	        return '' + hFormat.apply(this) + zeroFill(this.minutes(), 2);
	    });

	    addFormatToken('hmmss', 0, 0, function () {
	        return (
	            '' +
	            hFormat.apply(this) +
	            zeroFill(this.minutes(), 2) +
	            zeroFill(this.seconds(), 2)
	        );
	    });

	    addFormatToken('Hmm', 0, 0, function () {
	        return '' + this.hours() + zeroFill(this.minutes(), 2);
	    });

	    addFormatToken('Hmmss', 0, 0, function () {
	        return (
	            '' +
	            this.hours() +
	            zeroFill(this.minutes(), 2) +
	            zeroFill(this.seconds(), 2)
	        );
	    });

	    function meridiem(token, lowercase) {
	        addFormatToken(token, 0, 0, function () {
	            return this.localeData().meridiem(
	                this.hours(),
	                this.minutes(),
	                lowercase
	            );
	        });
	    }

	    meridiem('a', true);
	    meridiem('A', false);

	    // PARSING

	    function matchMeridiem(isStrict, locale) {
	        return locale._meridiemParse;
	    }

	    addRegexToken('a', matchMeridiem);
	    addRegexToken('A', matchMeridiem);
	    addRegexToken('H', match1to2, match1to2HasZero);
	    addRegexToken('h', match1to2, match1to2NoLeadingZero);
	    addRegexToken('k', match1to2, match1to2NoLeadingZero);
	    addRegexToken('HH', match1to2, match2);
	    addRegexToken('hh', match1to2, match2);
	    addRegexToken('kk', match1to2, match2);

	    addRegexToken('hmm', match3to4);
	    addRegexToken('hmmss', match5to6);
	    addRegexToken('Hmm', match3to4);
	    addRegexToken('Hmmss', match5to6);

	    addParseToken(['H', 'HH'], HOUR);
	    addParseToken(['k', 'kk'], function (input, array, config) {
	        var kInput = toInt(input);
	        array[HOUR] = kInput === 24 ? 0 : kInput;
	    });
	    addParseToken(['a', 'A'], function (input, array, config) {
	        config._isPm = config._locale.isPM(input);
	        config._meridiem = input;
	    });
	    addParseToken(['h', 'hh'], function (input, array, config) {
	        array[HOUR] = toInt(input);
	        getParsingFlags(config).bigHour = true;
	    });
	    addParseToken('hmm', function (input, array, config) {
	        var pos = input.length - 2;
	        array[HOUR] = toInt(input.substr(0, pos));
	        array[MINUTE] = toInt(input.substr(pos));
	        getParsingFlags(config).bigHour = true;
	    });
	    addParseToken('hmmss', function (input, array, config) {
	        var pos1 = input.length - 4,
	            pos2 = input.length - 2;
	        array[HOUR] = toInt(input.substr(0, pos1));
	        array[MINUTE] = toInt(input.substr(pos1, 2));
	        array[SECOND] = toInt(input.substr(pos2));
	        getParsingFlags(config).bigHour = true;
	    });
	    addParseToken('Hmm', function (input, array, config) {
	        var pos = input.length - 2;
	        array[HOUR] = toInt(input.substr(0, pos));
	        array[MINUTE] = toInt(input.substr(pos));
	    });
	    addParseToken('Hmmss', function (input, array, config) {
	        var pos1 = input.length - 4,
	            pos2 = input.length - 2;
	        array[HOUR] = toInt(input.substr(0, pos1));
	        array[MINUTE] = toInt(input.substr(pos1, 2));
	        array[SECOND] = toInt(input.substr(pos2));
	    });

	    // LOCALES

	    function localeIsPM(input) {
	        // IE8 Quirks Mode & IE7 Standards Mode do not allow accessing strings like arrays
	        // Using charAt should be more compatible.
	        return (input + '').toLowerCase().charAt(0) === 'p';
	    }

	    var defaultLocaleMeridiemParse = /[ap]\.?m?\.?/i,
	        // Setting the hour should keep the time, because the user explicitly
	        // specified which hour they want. So trying to maintain the same hour (in
	        // a new timezone) makes sense. Adding/subtracting hours does not follow
	        // this rule.
	        getSetHour = makeGetSet('Hours', true);

	    function localeMeridiem(hours, minutes, isLower) {
	        if (hours > 11) {
	            return isLower ? 'pm' : 'PM';
	        } else {
	            return isLower ? 'am' : 'AM';
	        }
	    }

	    var baseConfig = {
	        calendar: defaultCalendar,
	        longDateFormat: defaultLongDateFormat,
	        invalidDate: defaultInvalidDate,
	        ordinal: defaultOrdinal,
	        dayOfMonthOrdinalParse: defaultDayOfMonthOrdinalParse,
	        relativeTime: defaultRelativeTime,

	        months: defaultLocaleMonths,
	        monthsShort: defaultLocaleMonthsShort,

	        week: defaultLocaleWeek,

	        weekdays: defaultLocaleWeekdays,
	        weekdaysMin: defaultLocaleWeekdaysMin,
	        weekdaysShort: defaultLocaleWeekdaysShort,

	        meridiemParse: defaultLocaleMeridiemParse,
	    };

	    // internal storage for locale config files
	    var locales = {},
	        localeFamilies = {},
	        globalLocale;

	    function commonPrefix(arr1, arr2) {
	        var i,
	            minl = Math.min(arr1.length, arr2.length);
	        for (i = 0; i < minl; i += 1) {
	            if (arr1[i] !== arr2[i]) {
	                return i;
	            }
	        }
	        return minl;
	    }

	    function normalizeLocale(key) {
	        return key ? key.toLowerCase().replace('_', '-') : key;
	    }

	    // pick the locale from the array
	    // try ['en-au', 'en-gb'] as 'en-au', 'en-gb', 'en', as in move through the list trying each
	    // substring from most specific to least, but move to the next array item if it's a more specific variant than the current root
	    function chooseLocale(names) {
	        var i = 0,
	            j,
	            next,
	            locale,
	            split;

	        while (i < names.length) {
	            split = normalizeLocale(names[i]).split('-');
	            j = split.length;
	            next = normalizeLocale(names[i + 1]);
	            next = next ? next.split('-') : null;
	            while (j > 0) {
	                locale = loadLocale(split.slice(0, j).join('-'));
	                if (locale) {
	                    return locale;
	                }
	                if (
	                    next &&
	                    next.length >= j &&
	                    commonPrefix(split, next) >= j - 1
	                ) {
	                    //the next array item is better than a shallower substring of this one
	                    break;
	                }
	                j--;
	            }
	            i++;
	        }
	        return globalLocale;
	    }

	    function isLocaleNameSane(name) {
	        // Prevent names that look like filesystem paths, i.e contain '/' or '\'
	        // Ensure name is available and function returns boolean
	        return !!(name && name.match('^[^/\\\\]*$'));
	    }

	    function loadLocale(name) {
	        var oldLocale = null,
	            aliasedRequire;
	        // TODO: Find a better way to register and load all the locales in Node
	        if (
	            locales[name] === undefined &&
	            'object' !== 'undefined' &&
	            module &&
	            module.exports &&
	            isLocaleNameSane(name)
	        ) {
	            try {
	                oldLocale = globalLocale._abbr;
	                aliasedRequire = commonjsRequire;
	                aliasedRequire('./locale/' + name);
	                getSetGlobalLocale(oldLocale);
	            } catch (e) {
	                // mark as not found to avoid repeating expensive file require call causing high CPU
	                // when trying to find en-US, en_US, en-us for every format call
	                locales[name] = null; // null means not found
	            }
	        }
	        return locales[name];
	    }

	    // This function will load locale and then set the global locale.  If
	    // no arguments are passed in, it will simply return the current global
	    // locale key.
	    function getSetGlobalLocale(key, values) {
	        var data;
	        if (key) {
	            if (isUndefined(values)) {
	                data = getLocale(key);
	            } else {
	                data = defineLocale(key, values);
	            }

	            if (data) {
	                // moment.duration._locale = moment._locale = data;
	                globalLocale = data;
	            } else {
	                if (typeof console !== 'undefined' && console.warn) {
	                    //warn user if arguments are passed but the locale could not be set
	                    console.warn(
	                        'Locale ' + key + ' not found. Did you forget to load it?'
	                    );
	                }
	            }
	        }

	        return globalLocale._abbr;
	    }

	    function defineLocale(name, config) {
	        if (config !== null) {
	            var locale,
	                parentConfig = baseConfig;
	            config.abbr = name;
	            if (locales[name] != null) {
	                deprecateSimple(
	                    'defineLocaleOverride',
	                    'use moment.updateLocale(localeName, config) to change ' +
	                        'an existing locale. moment.defineLocale(localeName, ' +
	                        'config) should only be used for creating a new locale ' +
	                        'See http://momentjs.com/guides/#/warnings/define-locale/ for more info.'
	                );
	                parentConfig = locales[name]._config;
	            } else if (config.parentLocale != null) {
	                if (locales[config.parentLocale] != null) {
	                    parentConfig = locales[config.parentLocale]._config;
	                } else {
	                    locale = loadLocale(config.parentLocale);
	                    if (locale != null) {
	                        parentConfig = locale._config;
	                    } else {
	                        if (!localeFamilies[config.parentLocale]) {
	                            localeFamilies[config.parentLocale] = [];
	                        }
	                        localeFamilies[config.parentLocale].push({
	                            name: name,
	                            config: config,
	                        });
	                        return null;
	                    }
	                }
	            }
	            locales[name] = new Locale(mergeConfigs(parentConfig, config));

	            if (localeFamilies[name]) {
	                localeFamilies[name].forEach(function (x) {
	                    defineLocale(x.name, x.config);
	                });
	            }

	            // backwards compat for now: also set the locale
	            // make sure we set the locale AFTER all child locales have been
	            // created, so we won't end up with the child locale set.
	            getSetGlobalLocale(name);

	            return locales[name];
	        } else {
	            // useful for testing
	            delete locales[name];
	            return null;
	        }
	    }

	    function updateLocale(name, config) {
	        if (config != null) {
	            var locale,
	                tmpLocale,
	                parentConfig = baseConfig;

	            if (locales[name] != null && locales[name].parentLocale != null) {
	                // Update existing child locale in-place to avoid memory-leaks
	                locales[name].set(mergeConfigs(locales[name]._config, config));
	            } else {
	                // MERGE
	                tmpLocale = loadLocale(name);
	                if (tmpLocale != null) {
	                    parentConfig = tmpLocale._config;
	                }
	                config = mergeConfigs(parentConfig, config);
	                if (tmpLocale == null) {
	                    // updateLocale is called for creating a new locale
	                    // Set abbr so it will have a name (getters return
	                    // undefined otherwise).
	                    config.abbr = name;
	                }
	                locale = new Locale(config);
	                locale.parentLocale = locales[name];
	                locales[name] = locale;
	            }

	            // backwards compat for now: also set the locale
	            getSetGlobalLocale(name);
	        } else {
	            // pass null for config to unupdate, useful for tests
	            if (locales[name] != null) {
	                if (locales[name].parentLocale != null) {
	                    locales[name] = locales[name].parentLocale;
	                    if (name === getSetGlobalLocale()) {
	                        getSetGlobalLocale(name);
	                    }
	                } else if (locales[name] != null) {
	                    delete locales[name];
	                }
	            }
	        }
	        return locales[name];
	    }

	    // returns locale data
	    function getLocale(key) {
	        var locale;

	        if (key && key._locale && key._locale._abbr) {
	            key = key._locale._abbr;
	        }

	        if (!key) {
	            return globalLocale;
	        }

	        if (!isArray(key)) {
	            //short-circuit everything else
	            locale = loadLocale(key);
	            if (locale) {
	                return locale;
	            }
	            key = [key];
	        }

	        return chooseLocale(key);
	    }

	    function listLocales() {
	        return keys(locales);
	    }

	    function checkOverflow(m) {
	        var overflow,
	            a = m._a;

	        if (a && getParsingFlags(m).overflow === -2) {
	            overflow =
	                a[MONTH] < 0 || a[MONTH] > 11
	                    ? MONTH
	                    : a[DATE] < 1 || a[DATE] > daysInMonth(a[YEAR], a[MONTH])
	                      ? DATE
	                      : a[HOUR] < 0 ||
	                          a[HOUR] > 24 ||
	                          (a[HOUR] === 24 &&
	                              (a[MINUTE] !== 0 ||
	                                  a[SECOND] !== 0 ||
	                                  a[MILLISECOND] !== 0))
	                        ? HOUR
	                        : a[MINUTE] < 0 || a[MINUTE] > 59
	                          ? MINUTE
	                          : a[SECOND] < 0 || a[SECOND] > 59
	                            ? SECOND
	                            : a[MILLISECOND] < 0 || a[MILLISECOND] > 999
	                              ? MILLISECOND
	                              : -1;

	            if (
	                getParsingFlags(m)._overflowDayOfYear &&
	                (overflow < YEAR || overflow > DATE)
	            ) {
	                overflow = DATE;
	            }
	            if (getParsingFlags(m)._overflowWeeks && overflow === -1) {
	                overflow = WEEK;
	            }
	            if (getParsingFlags(m)._overflowWeekday && overflow === -1) {
	                overflow = WEEKDAY;
	            }

	            getParsingFlags(m).overflow = overflow;
	        }

	        return m;
	    }

	    // iso 8601 regex
	    // 0000-00-00 0000-W00 or 0000-W00-0 + T + 00 or 00:00 or 00:00:00 or 00:00:00.000 + +00:00 or +0000 or +00)
	    var extendedIsoRegex =
	            /^\s*((?:[+-]\d{6}|\d{4})-(?:\d\d-\d\d|W\d\d-\d|W\d\d|\d\d\d|\d\d))(?:(T| )(\d\d(?::\d\d(?::\d\d(?:[.,]\d+)?)?)?)([+-]\d\d(?::?\d\d)?|\s*Z)?)?$/,
	        basicIsoRegex =
	            /^\s*((?:[+-]\d{6}|\d{4})(?:\d\d\d\d|W\d\d\d|W\d\d|\d\d\d|\d\d|))(?:(T| )(\d\d(?:\d\d(?:\d\d(?:[.,]\d+)?)?)?)([+-]\d\d(?::?\d\d)?|\s*Z)?)?$/,
	        tzRegex = /Z|[+-]\d\d(?::?\d\d)?/,
	        isoDates = [
	            ['YYYYYY-MM-DD', /[+-]\d{6}-\d\d-\d\d/],
	            ['YYYY-MM-DD', /\d{4}-\d\d-\d\d/],
	            ['GGGG-[W]WW-E', /\d{4}-W\d\d-\d/],
	            ['GGGG-[W]WW', /\d{4}-W\d\d/, false],
	            ['YYYY-DDD', /\d{4}-\d{3}/],
	            ['YYYY-MM', /\d{4}-\d\d/, false],
	            ['YYYYYYMMDD', /[+-]\d{10}/],
	            ['YYYYMMDD', /\d{8}/],
	            ['GGGG[W]WWE', /\d{4}W\d{3}/],
	            ['GGGG[W]WW', /\d{4}W\d{2}/, false],
	            ['YYYYDDD', /\d{7}/],
	            ['YYYYMM', /\d{6}/, false],
	            ['YYYY', /\d{4}/, false],
	        ],
	        // iso time formats and regexes
	        isoTimes = [
	            ['HH:mm:ss.SSSS', /\d\d:\d\d:\d\d\.\d+/],
	            ['HH:mm:ss,SSSS', /\d\d:\d\d:\d\d,\d+/],
	            ['HH:mm:ss', /\d\d:\d\d:\d\d/],
	            ['HH:mm', /\d\d:\d\d/],
	            ['HHmmss.SSSS', /\d\d\d\d\d\d\.\d+/],
	            ['HHmmss,SSSS', /\d\d\d\d\d\d,\d+/],
	            ['HHmmss', /\d\d\d\d\d\d/],
	            ['HHmm', /\d\d\d\d/],
	            ['HH', /\d\d/],
	        ],
	        aspNetJsonRegex = /^\/?Date\((-?\d+)/i,
	        // RFC 2822 regex: For details see https://tools.ietf.org/html/rfc2822#section-3.3
	        rfc2822 =
	            /^(?:(Mon|Tue|Wed|Thu|Fri|Sat|Sun),?\s)?(\d{1,2})\s(Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec)\s(\d{2,4})\s(\d\d):(\d\d)(?::(\d\d))?\s(?:(UT|GMT|[ECMP][SD]T)|([Zz])|([+-]\d{4}))$/,
	        obsOffsets = {
	            UT: 0,
	            GMT: 0,
	            EDT: -4 * 60,
	            EST: -5 * 60,
	            CDT: -5 * 60,
	            CST: -6 * 60,
	            MDT: -6 * 60,
	            MST: -7 * 60,
	            PDT: -7 * 60,
	            PST: -8 * 60,
	        };

	    // date from iso format
	    function configFromISO(config) {
	        var i,
	            l,
	            string = config._i,
	            match = extendedIsoRegex.exec(string) || basicIsoRegex.exec(string),
	            allowTime,
	            dateFormat,
	            timeFormat,
	            tzFormat,
	            isoDatesLen = isoDates.length,
	            isoTimesLen = isoTimes.length;

	        if (match) {
	            getParsingFlags(config).iso = true;
	            for (i = 0, l = isoDatesLen; i < l; i++) {
	                if (isoDates[i][1].exec(match[1])) {
	                    dateFormat = isoDates[i][0];
	                    allowTime = isoDates[i][2] !== false;
	                    break;
	                }
	            }
	            if (dateFormat == null) {
	                config._isValid = false;
	                return;
	            }
	            if (match[3]) {
	                for (i = 0, l = isoTimesLen; i < l; i++) {
	                    if (isoTimes[i][1].exec(match[3])) {
	                        // match[2] should be 'T' or space
	                        timeFormat = (match[2] || ' ') + isoTimes[i][0];
	                        break;
	                    }
	                }
	                if (timeFormat == null) {
	                    config._isValid = false;
	                    return;
	                }
	            }
	            if (!allowTime && timeFormat != null) {
	                config._isValid = false;
	                return;
	            }
	            if (match[4]) {
	                if (tzRegex.exec(match[4])) {
	                    tzFormat = 'Z';
	                } else {
	                    config._isValid = false;
	                    return;
	                }
	            }
	            config._f = dateFormat + (timeFormat || '') + (tzFormat || '');
	            configFromStringAndFormat(config);
	        } else {
	            config._isValid = false;
	        }
	    }

	    function extractFromRFC2822Strings(
	        yearStr,
	        monthStr,
	        dayStr,
	        hourStr,
	        minuteStr,
	        secondStr
	    ) {
	        var result = [
	            untruncateYear(yearStr),
	            defaultLocaleMonthsShort.indexOf(monthStr),
	            parseInt(dayStr, 10),
	            parseInt(hourStr, 10),
	            parseInt(minuteStr, 10),
	        ];

	        if (secondStr) {
	            result.push(parseInt(secondStr, 10));
	        }

	        return result;
	    }

	    function untruncateYear(yearStr) {
	        var year = parseInt(yearStr, 10);
	        if (year <= 49) {
	            return 2000 + year;
	        } else if (year <= 999) {
	            return 1900 + year;
	        }
	        return year;
	    }

	    function preprocessRFC2822(s) {
	        // Remove comments and folding whitespace and replace multiple-spaces with a single space
	        return s
	            .replace(/\([^()]*\)|[\n\t]/g, ' ')
	            .replace(/(\s\s+)/g, ' ')
	            .replace(/^\s\s*/, '')
	            .replace(/\s\s*$/, '');
	    }

	    function checkWeekday(weekdayStr, parsedInput, config) {
	        if (weekdayStr) {
	            // TODO: Replace the vanilla JS Date object with an independent day-of-week check.
	            var weekdayProvided = defaultLocaleWeekdaysShort.indexOf(weekdayStr),
	                weekdayActual = new Date(
	                    parsedInput[0],
	                    parsedInput[1],
	                    parsedInput[2]
	                ).getDay();
	            if (weekdayProvided !== weekdayActual) {
	                getParsingFlags(config).weekdayMismatch = true;
	                config._isValid = false;
	                return false;
	            }
	        }
	        return true;
	    }

	    function calculateOffset(obsOffset, militaryOffset, numOffset) {
	        if (obsOffset) {
	            return obsOffsets[obsOffset];
	        } else if (militaryOffset) {
	            // the only allowed military tz is Z
	            return 0;
	        } else {
	            var hm = parseInt(numOffset, 10),
	                m = hm % 100,
	                h = (hm - m) / 100;
	            return h * 60 + m;
	        }
	    }

	    // date and time from ref 2822 format
	    function configFromRFC2822(config) {
	        var match = rfc2822.exec(preprocessRFC2822(config._i)),
	            parsedArray;
	        if (match) {
	            parsedArray = extractFromRFC2822Strings(
	                match[4],
	                match[3],
	                match[2],
	                match[5],
	                match[6],
	                match[7]
	            );
	            if (!checkWeekday(match[1], parsedArray, config)) {
	                return;
	            }

	            config._a = parsedArray;
	            config._tzm = calculateOffset(match[8], match[9], match[10]);

	            config._d = createUTCDate.apply(null, config._a);
	            config._d.setUTCMinutes(config._d.getUTCMinutes() - config._tzm);

	            getParsingFlags(config).rfc2822 = true;
	        } else {
	            config._isValid = false;
	        }
	    }

	    // date from 1) ASP.NET, 2) ISO, 3) RFC 2822 formats, or 4) optional fallback if parsing isn't strict
	    function configFromString(config) {
	        var matched = aspNetJsonRegex.exec(config._i);
	        if (matched !== null) {
	            config._d = new Date(+matched[1]);
	            return;
	        }

	        configFromISO(config);
	        if (config._isValid === false) {
	            delete config._isValid;
	        } else {
	            return;
	        }

	        configFromRFC2822(config);
	        if (config._isValid === false) {
	            delete config._isValid;
	        } else {
	            return;
	        }

	        if (config._strict) {
	            config._isValid = false;
	        } else {
	            // Final attempt, use Input Fallback
	            hooks.createFromInputFallback(config);
	        }
	    }

	    hooks.createFromInputFallback = deprecate(
	        'value provided is not in a recognized RFC2822 or ISO format. moment construction falls back to js Date(), ' +
	            'which is not reliable across all browsers and versions. Non RFC2822/ISO date formats are ' +
	            'discouraged. Please refer to http://momentjs.com/guides/#/warnings/js-date/ for more info.',
	        function (config) {
	            config._d = new Date(config._i + (config._useUTC ? ' UTC' : ''));
	        }
	    );

	    // Pick the first defined of two or three arguments.
	    function defaults(a, b, c) {
	        if (a != null) {
	            return a;
	        }
	        if (b != null) {
	            return b;
	        }
	        return c;
	    }

	    function currentDateArray(config) {
	        // hooks is actually the exported moment object
	        var nowValue = new Date(hooks.now());
	        if (config._useUTC) {
	            return [
	                nowValue.getUTCFullYear(),
	                nowValue.getUTCMonth(),
	                nowValue.getUTCDate(),
	            ];
	        }
	        return [nowValue.getFullYear(), nowValue.getMonth(), nowValue.getDate()];
	    }

	    // convert an array to a date.
	    // the array should mirror the parameters below
	    // note: all values past the year are optional and will default to the lowest possible value.
	    // [year, month, day , hour, minute, second, millisecond]
	    function configFromArray(config) {
	        var i,
	            date,
	            input = [],
	            currentDate,
	            expectedWeekday,
	            yearToUse;

	        if (config._d) {
	            return;
	        }

	        currentDate = currentDateArray(config);

	        //compute day of the year from weeks and weekdays
	        if (config._w && config._a[DATE] == null && config._a[MONTH] == null) {
	            dayOfYearFromWeekInfo(config);
	        }

	        //if the day of the year is set, figure out what it is
	        if (config._dayOfYear != null) {
	            yearToUse = defaults(config._a[YEAR], currentDate[YEAR]);

	            if (
	                config._dayOfYear > daysInYear(yearToUse) ||
	                config._dayOfYear === 0
	            ) {
	                getParsingFlags(config)._overflowDayOfYear = true;
	            }

	            date = createUTCDate(yearToUse, 0, config._dayOfYear);
	            config._a[MONTH] = date.getUTCMonth();
	            config._a[DATE] = date.getUTCDate();
	        }

	        // Default to current date.
	        // * if no year, month, day of month are given, default to today
	        // * if day of month is given, default month and year
	        // * if month is given, default only year
	        // * if year is given, don't default anything
	        for (i = 0; i < 3 && config._a[i] == null; ++i) {
	            config._a[i] = input[i] = currentDate[i];
	        }

	        // Zero out whatever was not defaulted, including time
	        for (; i < 7; i++) {
	            config._a[i] = input[i] =
	                config._a[i] == null ? (i === 2 ? 1 : 0) : config._a[i];
	        }

	        // Check for 24:00:00.000
	        if (
	            config._a[HOUR] === 24 &&
	            config._a[MINUTE] === 0 &&
	            config._a[SECOND] === 0 &&
	            config._a[MILLISECOND] === 0
	        ) {
	            config._nextDay = true;
	            config._a[HOUR] = 0;
	        }

	        config._d = (config._useUTC ? createUTCDate : createDate).apply(
	            null,
	            input
	        );
	        expectedWeekday = config._useUTC
	            ? config._d.getUTCDay()
	            : config._d.getDay();

	        // Apply timezone offset from input. The actual utcOffset can be changed
	        // with parseZone.
	        if (config._tzm != null) {
	            config._d.setUTCMinutes(config._d.getUTCMinutes() - config._tzm);
	        }

	        if (config._nextDay) {
	            config._a[HOUR] = 24;
	        }

	        // check for mismatching day of week
	        if (
	            config._w &&
	            typeof config._w.d !== 'undefined' &&
	            config._w.d !== expectedWeekday
	        ) {
	            getParsingFlags(config).weekdayMismatch = true;
	        }
	    }

	    function dayOfYearFromWeekInfo(config) {
	        var w, weekYear, week, weekday, dow, doy, temp, weekdayOverflow, curWeek;

	        w = config._w;
	        if (w.GG != null || w.W != null || w.E != null) {
	            dow = 1;
	            doy = 4;

	            // TODO: We need to take the current isoWeekYear, but that depends on
	            // how we interpret now (local, utc, fixed offset). So create
	            // a now version of current config (take local/utc/offset flags, and
	            // create now).
	            weekYear = defaults(
	                w.GG,
	                config._a[YEAR],
	                weekOfYear(createLocal(), 1, 4).year
	            );
	            week = defaults(w.W, 1);
	            weekday = defaults(w.E, 1);
	            if (weekday < 1 || weekday > 7) {
	                weekdayOverflow = true;
	            }
	        } else {
	            dow = config._locale._week.dow;
	            doy = config._locale._week.doy;

	            curWeek = weekOfYear(createLocal(), dow, doy);

	            weekYear = defaults(w.gg, config._a[YEAR], curWeek.year);

	            // Default to current week.
	            week = defaults(w.w, curWeek.week);

	            if (w.d != null) {
	                // weekday -- low day numbers are considered next week
	                weekday = w.d;
	                if (weekday < 0 || weekday > 6) {
	                    weekdayOverflow = true;
	                }
	            } else if (w.e != null) {
	                // local weekday -- counting starts from beginning of week
	                weekday = w.e + dow;
	                if (w.e < 0 || w.e > 6) {
	                    weekdayOverflow = true;
	                }
	            } else {
	                // default to beginning of week
	                weekday = dow;
	            }
	        }
	        if (week < 1 || week > weeksInYear(weekYear, dow, doy)) {
	            getParsingFlags(config)._overflowWeeks = true;
	        } else if (weekdayOverflow != null) {
	            getParsingFlags(config)._overflowWeekday = true;
	        } else {
	            temp = dayOfYearFromWeeks(weekYear, week, weekday, dow, doy);
	            config._a[YEAR] = temp.year;
	            config._dayOfYear = temp.dayOfYear;
	        }
	    }

	    // constant that refers to the ISO standard
	    hooks.ISO_8601 = function () {};

	    // constant that refers to the RFC 2822 form
	    hooks.RFC_2822 = function () {};

	    // date from string and format string
	    function configFromStringAndFormat(config) {
	        // TODO: Move this to another part of the creation flow to prevent circular deps
	        if (config._f === hooks.ISO_8601) {
	            configFromISO(config);
	            return;
	        }
	        if (config._f === hooks.RFC_2822) {
	            configFromRFC2822(config);
	            return;
	        }
	        config._a = [];
	        getParsingFlags(config).empty = true;

	        // This array is used to make a Date, either with `new Date` or `Date.UTC`
	        var string = '' + config._i,
	            i,
	            parsedInput,
	            tokens,
	            token,
	            skipped,
	            stringLength = string.length,
	            totalParsedInputLength = 0,
	            era,
	            tokenLen;

	        tokens =
	            expandFormat(config._f, config._locale).match(formattingTokens) || [];
	        tokenLen = tokens.length;
	        for (i = 0; i < tokenLen; i++) {
	            token = tokens[i];
	            parsedInput = (string.match(getParseRegexForToken(token, config)) ||
	                [])[0];
	            if (parsedInput) {
	                skipped = string.substr(0, string.indexOf(parsedInput));
	                if (skipped.length > 0) {
	                    getParsingFlags(config).unusedInput.push(skipped);
	                }
	                string = string.slice(
	                    string.indexOf(parsedInput) + parsedInput.length
	                );
	                totalParsedInputLength += parsedInput.length;
	            }
	            // don't parse if it's not a known token
	            if (formatTokenFunctions[token]) {
	                if (parsedInput) {
	                    getParsingFlags(config).empty = false;
	                } else {
	                    getParsingFlags(config).unusedTokens.push(token);
	                }
	                addTimeToArrayFromToken(token, parsedInput, config);
	            } else if (config._strict && !parsedInput) {
	                getParsingFlags(config).unusedTokens.push(token);
	            }
	        }

	        // add remaining unparsed input length to the string
	        getParsingFlags(config).charsLeftOver =
	            stringLength - totalParsedInputLength;
	        if (string.length > 0) {
	            getParsingFlags(config).unusedInput.push(string);
	        }

	        // clear _12h flag if hour is <= 12
	        if (
	            config._a[HOUR] <= 12 &&
	            getParsingFlags(config).bigHour === true &&
	            config._a[HOUR] > 0
	        ) {
	            getParsingFlags(config).bigHour = undefined;
	        }

	        getParsingFlags(config).parsedDateParts = config._a.slice(0);
	        getParsingFlags(config).meridiem = config._meridiem;
	        // handle meridiem
	        config._a[HOUR] = meridiemFixWrap(
	            config._locale,
	            config._a[HOUR],
	            config._meridiem
	        );

	        // handle era
	        era = getParsingFlags(config).era;
	        if (era !== null) {
	            config._a[YEAR] = config._locale.erasConvertYear(era, config._a[YEAR]);
	        }

	        configFromArray(config);
	        checkOverflow(config);
	    }

	    function meridiemFixWrap(locale, hour, meridiem) {
	        var isPm;

	        if (meridiem == null) {
	            // nothing to do
	            return hour;
	        }
	        if (locale.meridiemHour != null) {
	            return locale.meridiemHour(hour, meridiem);
	        } else if (locale.isPM != null) {
	            // Fallback
	            isPm = locale.isPM(meridiem);
	            if (isPm && hour < 12) {
	                hour += 12;
	            }
	            if (!isPm && hour === 12) {
	                hour = 0;
	            }
	            return hour;
	        } else {
	            // this is not supposed to happen
	            return hour;
	        }
	    }

	    // date from string and array of format strings
	    function configFromStringAndArray(config) {
	        var tempConfig,
	            bestMoment,
	            scoreToBeat,
	            i,
	            currentScore,
	            validFormatFound,
	            bestFormatIsValid = false,
	            configfLen = config._f.length;

	        if (configfLen === 0) {
	            getParsingFlags(config).invalidFormat = true;
	            config._d = new Date(NaN);
	            return;
	        }

	        for (i = 0; i < configfLen; i++) {
	            currentScore = 0;
	            validFormatFound = false;
	            tempConfig = copyConfig({}, config);
	            if (config._useUTC != null) {
	                tempConfig._useUTC = config._useUTC;
	            }
	            tempConfig._f = config._f[i];
	            configFromStringAndFormat(tempConfig);

	            if (isValid(tempConfig)) {
	                validFormatFound = true;
	            }

	            // if there is any input that was not parsed add a penalty for that format
	            currentScore += getParsingFlags(tempConfig).charsLeftOver;

	            //or tokens
	            currentScore += getParsingFlags(tempConfig).unusedTokens.length * 10;

	            getParsingFlags(tempConfig).score = currentScore;

	            if (!bestFormatIsValid) {
	                if (
	                    scoreToBeat == null ||
	                    currentScore < scoreToBeat ||
	                    validFormatFound
	                ) {
	                    scoreToBeat = currentScore;
	                    bestMoment = tempConfig;
	                    if (validFormatFound) {
	                        bestFormatIsValid = true;
	                    }
	                }
	            } else {
	                if (currentScore < scoreToBeat) {
	                    scoreToBeat = currentScore;
	                    bestMoment = tempConfig;
	                }
	            }
	        }

	        extend(config, bestMoment || tempConfig);
	    }

	    function configFromObject(config) {
	        if (config._d) {
	            return;
	        }

	        var i = normalizeObjectUnits(config._i),
	            dayOrDate = i.day === undefined ? i.date : i.day;
	        config._a = map(
	            [i.year, i.month, dayOrDate, i.hour, i.minute, i.second, i.millisecond],
	            function (obj) {
	                return obj && parseInt(obj, 10);
	            }
	        );

	        configFromArray(config);
	    }

	    function createFromConfig(config) {
	        var res = new Moment(checkOverflow(prepareConfig(config)));
	        if (res._nextDay) {
	            // Adding is smart enough around DST
	            res.add(1, 'd');
	            res._nextDay = undefined;
	        }

	        return res;
	    }

	    function prepareConfig(config) {
	        var input = config._i,
	            format = config._f;

	        config._locale = config._locale || getLocale(config._l);

	        if (input === null || (format === undefined && input === '')) {
	            return createInvalid({ nullInput: true });
	        }

	        if (typeof input === 'string') {
	            config._i = input = config._locale.preparse(input);
	        }

	        if (isMoment(input)) {
	            return new Moment(checkOverflow(input));
	        } else if (isDate(input)) {
	            config._d = input;
	        } else if (isArray(format)) {
	            configFromStringAndArray(config);
	        } else if (format) {
	            configFromStringAndFormat(config);
	        } else {
	            configFromInput(config);
	        }

	        if (!isValid(config)) {
	            config._d = null;
	        }

	        return config;
	    }

	    function configFromInput(config) {
	        var input = config._i;
	        if (isUndefined(input)) {
	            config._d = new Date(hooks.now());
	        } else if (isDate(input)) {
	            config._d = new Date(input.valueOf());
	        } else if (typeof input === 'string') {
	            configFromString(config);
	        } else if (isArray(input)) {
	            config._a = map(input.slice(0), function (obj) {
	                return parseInt(obj, 10);
	            });
	            configFromArray(config);
	        } else if (isObject(input)) {
	            configFromObject(config);
	        } else if (isNumber(input)) {
	            // from milliseconds
	            config._d = new Date(input);
	        } else {
	            hooks.createFromInputFallback(config);
	        }
	    }

	    function createLocalOrUTC(input, format, locale, strict, isUTC) {
	        var c = {};

	        if (format === true || format === false) {
	            strict = format;
	            format = undefined;
	        }

	        if (locale === true || locale === false) {
	            strict = locale;
	            locale = undefined;
	        }

	        if (
	            (isObject(input) && isObjectEmpty(input)) ||
	            (isArray(input) && input.length === 0)
	        ) {
	            input = undefined;
	        }
	        // object construction must be done this way.
	        // https://github.com/moment/moment/issues/1423
	        c._isAMomentObject = true;
	        c._useUTC = c._isUTC = isUTC;
	        c._l = locale;
	        c._i = input;
	        c._f = format;
	        c._strict = strict;

	        return createFromConfig(c);
	    }

	    function createLocal(input, format, locale, strict) {
	        return createLocalOrUTC(input, format, locale, strict, false);
	    }

	    var prototypeMin = deprecate(
	            'moment().min is deprecated, use moment.max instead. http://momentjs.com/guides/#/warnings/min-max/',
	            function () {
	                var other = createLocal.apply(null, arguments);
	                if (this.isValid() && other.isValid()) {
	                    return other < this ? this : other;
	                } else {
	                    return createInvalid();
	                }
	            }
	        ),
	        prototypeMax = deprecate(
	            'moment().max is deprecated, use moment.min instead. http://momentjs.com/guides/#/warnings/min-max/',
	            function () {
	                var other = createLocal.apply(null, arguments);
	                if (this.isValid() && other.isValid()) {
	                    return other > this ? this : other;
	                } else {
	                    return createInvalid();
	                }
	            }
	        );

	    // Pick a moment m from moments so that m[fn](other) is true for all
	    // other. This relies on the function fn to be transitive.
	    //
	    // moments should either be an array of moment objects or an array, whose
	    // first element is an array of moment objects.
	    function pickBy(fn, moments) {
	        var res, i;
	        if (moments.length === 1 && isArray(moments[0])) {
	            moments = moments[0];
	        }
	        if (!moments.length) {
	            return createLocal();
	        }
	        res = moments[0];
	        for (i = 1; i < moments.length; ++i) {
	            if (!moments[i].isValid() || moments[i][fn](res)) {
	                res = moments[i];
	            }
	        }
	        return res;
	    }

	    // TODO: Use [].sort instead?
	    function min() {
	        var args = [].slice.call(arguments, 0);

	        return pickBy('isBefore', args);
	    }

	    function max() {
	        var args = [].slice.call(arguments, 0);

	        return pickBy('isAfter', args);
	    }

	    var now = function () {
	        return Date.now ? Date.now() : +new Date();
	    };

	    var ordering = [
	        'year',
	        'quarter',
	        'month',
	        'week',
	        'day',
	        'hour',
	        'minute',
	        'second',
	        'millisecond',
	    ];

	    function isDurationValid(m) {
	        var key,
	            unitHasDecimal = false,
	            i,
	            orderLen = ordering.length;
	        for (key in m) {
	            if (
	                hasOwnProp(m, key) &&
	                !(
	                    indexOf.call(ordering, key) !== -1 &&
	                    (m[key] == null || !isNaN(m[key]))
	                )
	            ) {
	                return false;
	            }
	        }

	        for (i = 0; i < orderLen; ++i) {
	            if (m[ordering[i]]) {
	                if (unitHasDecimal) {
	                    return false; // only allow non-integers for smallest unit
	                }
	                if (parseFloat(m[ordering[i]]) !== toInt(m[ordering[i]])) {
	                    unitHasDecimal = true;
	                }
	            }
	        }

	        return true;
	    }

	    function isValid$1() {
	        return this._isValid;
	    }

	    function createInvalid$1() {
	        return createDuration(NaN);
	    }

	    function Duration(duration) {
	        var normalizedInput = normalizeObjectUnits(duration),
	            years = normalizedInput.year || 0,
	            quarters = normalizedInput.quarter || 0,
	            months = normalizedInput.month || 0,
	            weeks = normalizedInput.week || normalizedInput.isoWeek || 0,
	            days = normalizedInput.day || 0,
	            hours = normalizedInput.hour || 0,
	            minutes = normalizedInput.minute || 0,
	            seconds = normalizedInput.second || 0,
	            milliseconds = normalizedInput.millisecond || 0;

	        this._isValid = isDurationValid(normalizedInput);

	        // representation for dateAddRemove
	        this._milliseconds =
	            +milliseconds +
	            seconds * 1e3 + // 1000
	            minutes * 6e4 + // 1000 * 60
	            hours * 1000 * 60 * 60; //using 1000 * 60 * 60 instead of 36e5 to avoid floating point rounding errors https://github.com/moment/moment/issues/2978
	        // Because of dateAddRemove treats 24 hours as different from a
	        // day when working around DST, we need to store them separately
	        this._days = +days + weeks * 7;
	        // It is impossible to translate months into days without knowing
	        // which months you are are talking about, so we have to store
	        // it separately.
	        this._months = +months + quarters * 3 + years * 12;

	        this._data = {};

	        this._locale = getLocale();

	        this._bubble();
	    }

	    function isDuration(obj) {
	        return obj instanceof Duration;
	    }

	    function absRound(number) {
	        if (number < 0) {
	            return Math.round(-1 * number) * -1;
	        } else {
	            return Math.round(number);
	        }
	    }

	    // compare two arrays, return the number of differences
	    function compareArrays(array1, array2, dontConvert) {
	        var len = Math.min(array1.length, array2.length),
	            lengthDiff = Math.abs(array1.length - array2.length),
	            diffs = 0,
	            i;
	        for (i = 0; i < len; i++) {
	            if (
	                (dontConvert && array1[i] !== array2[i]) ||
	                (!dontConvert && toInt(array1[i]) !== toInt(array2[i]))
	            ) {
	                diffs++;
	            }
	        }
	        return diffs + lengthDiff;
	    }

	    // FORMATTING

	    function offset(token, separator) {
	        addFormatToken(token, 0, 0, function () {
	            var offset = this.utcOffset(),
	                sign = '+';
	            if (offset < 0) {
	                offset = -offset;
	                sign = '-';
	            }
	            return (
	                sign +
	                zeroFill(~~(offset / 60), 2) +
	                separator +
	                zeroFill(~~offset % 60, 2)
	            );
	        });
	    }

	    offset('Z', ':');
	    offset('ZZ', '');

	    // PARSING

	    addRegexToken('Z', matchShortOffset);
	    addRegexToken('ZZ', matchShortOffset);
	    addParseToken(['Z', 'ZZ'], function (input, array, config) {
	        config._useUTC = true;
	        config._tzm = offsetFromString(matchShortOffset, input);
	    });

	    // HELPERS

	    // timezone chunker
	    // '+10:00' > ['10',  '00']
	    // '-1530'  > ['-15', '30']
	    var chunkOffset = /([\+\-]|\d\d)/gi;

	    function offsetFromString(matcher, string) {
	        var matches = (string || '').match(matcher),
	            chunk,
	            parts,
	            minutes;

	        if (matches === null) {
	            return null;
	        }

	        chunk = matches[matches.length - 1] || [];
	        parts = (chunk + '').match(chunkOffset) || ['-', 0, 0];
	        minutes = +(parts[1] * 60) + toInt(parts[2]);

	        return minutes === 0 ? 0 : parts[0] === '+' ? minutes : -minutes;
	    }

	    // Return a moment from input, that is local/utc/zone equivalent to model.
	    function cloneWithOffset(input, model) {
	        var res, diff;
	        if (model._isUTC) {
	            res = model.clone();
	            diff =
	                (isMoment(input) || isDate(input)
	                    ? input.valueOf()
	                    : createLocal(input).valueOf()) - res.valueOf();
	            // Use low-level api, because this fn is low-level api.
	            res._d.setTime(res._d.valueOf() + diff);
	            hooks.updateOffset(res, false);
	            return res;
	        } else {
	            return createLocal(input).local();
	        }
	    }

	    function getDateOffset(m) {
	        // On Firefox.24 Date#getTimezoneOffset returns a floating point.
	        // https://github.com/moment/moment/pull/1871
	        return -Math.round(m._d.getTimezoneOffset());
	    }

	    // HOOKS

	    // This function will be called whenever a moment is mutated.
	    // It is intended to keep the offset in sync with the timezone.
	    hooks.updateOffset = function () {};

	    // MOMENTS

	    // keepLocalTime = true means only change the timezone, without
	    // affecting the local hour. So 5:31:26 +0300 --[utcOffset(2, true)]-->
	    // 5:31:26 +0200 It is possible that 5:31:26 doesn't exist with offset
	    // +0200, so we adjust the time as needed, to be valid.
	    //
	    // Keeping the time actually adds/subtracts (one hour)
	    // from the actual represented time. That is why we call updateOffset
	    // a second time. In case it wants us to change the offset again
	    // _changeInProgress == true case, then we have to adjust, because
	    // there is no such time in the given timezone.
	    function getSetOffset(input, keepLocalTime, keepMinutes) {
	        var offset = this._offset || 0,
	            localAdjust;
	        if (!this.isValid()) {
	            return input != null ? this : NaN;
	        }
	        if (input != null) {
	            if (typeof input === 'string') {
	                input = offsetFromString(matchShortOffset, input);
	                if (input === null) {
	                    return this;
	                }
	            } else if (Math.abs(input) < 16 && !keepMinutes) {
	                input = input * 60;
	            }
	            if (!this._isUTC && keepLocalTime) {
	                localAdjust = getDateOffset(this);
	            }
	            this._offset = input;
	            this._isUTC = true;
	            if (localAdjust != null) {
	                this.add(localAdjust, 'm');
	            }
	            if (offset !== input) {
	                if (!keepLocalTime || this._changeInProgress) {
	                    addSubtract(
	                        this,
	                        createDuration(input - offset, 'm'),
	                        1,
	                        false
	                    );
	                } else if (!this._changeInProgress) {
	                    this._changeInProgress = true;
	                    hooks.updateOffset(this, true);
	                    this._changeInProgress = null;
	                }
	            }
	            return this;
	        } else {
	            return this._isUTC ? offset : getDateOffset(this);
	        }
	    }

	    function getSetZone(input, keepLocalTime) {
	        if (input != null) {
	            if (typeof input !== 'string') {
	                input = -input;
	            }

	            this.utcOffset(input, keepLocalTime);

	            return this;
	        } else {
	            return -this.utcOffset();
	        }
	    }

	    function setOffsetToUTC(keepLocalTime) {
	        return this.utcOffset(0, keepLocalTime);
	    }

	    function setOffsetToLocal(keepLocalTime) {
	        if (this._isUTC) {
	            this.utcOffset(0, keepLocalTime);
	            this._isUTC = false;

	            if (keepLocalTime) {
	                this.subtract(getDateOffset(this), 'm');
	            }
	        }
	        return this;
	    }

	    function setOffsetToParsedOffset() {
	        if (this._tzm != null) {
	            this.utcOffset(this._tzm, false, true);
	        } else if (typeof this._i === 'string') {
	            var tZone = offsetFromString(matchOffset, this._i);
	            if (tZone != null) {
	                this.utcOffset(tZone);
	            } else {
	                this.utcOffset(0, true);
	            }
	        }
	        return this;
	    }

	    function hasAlignedHourOffset(input) {
	        if (!this.isValid()) {
	            return false;
	        }
	        input = input ? createLocal(input).utcOffset() : 0;

	        return (this.utcOffset() - input) % 60 === 0;
	    }

	    function isDaylightSavingTime() {
	        return (
	            this.utcOffset() > this.clone().month(0).utcOffset() ||
	            this.utcOffset() > this.clone().month(5).utcOffset()
	        );
	    }

	    function isDaylightSavingTimeShifted() {
	        if (!isUndefined(this._isDSTShifted)) {
	            return this._isDSTShifted;
	        }

	        var c = {},
	            other;

	        copyConfig(c, this);
	        c = prepareConfig(c);

	        if (c._a) {
	            other = c._isUTC ? createUTC(c._a) : createLocal(c._a);
	            this._isDSTShifted =
	                this.isValid() && compareArrays(c._a, other.toArray()) > 0;
	        } else {
	            this._isDSTShifted = false;
	        }

	        return this._isDSTShifted;
	    }

	    function isLocal() {
	        return this.isValid() ? !this._isUTC : false;
	    }

	    function isUtcOffset() {
	        return this.isValid() ? this._isUTC : false;
	    }

	    function isUtc() {
	        return this.isValid() ? this._isUTC && this._offset === 0 : false;
	    }

	    // ASP.NET json date format regex
	    var aspNetRegex = /^(-|\+)?(?:(\d*)[. ])?(\d+):(\d+)(?::(\d+)(\.\d*)?)?$/,
	        // from http://docs.closure-library.googlecode.com/git/closure_goog_date_date.js.source.html
	        // somewhat more in line with 4.4.3.2 2004 spec, but allows decimal anywhere
	        // and further modified to allow for strings containing both week and day
	        isoRegex =
	            /^(-|\+)?P(?:([-+]?[0-9,.]*)Y)?(?:([-+]?[0-9,.]*)M)?(?:([-+]?[0-9,.]*)W)?(?:([-+]?[0-9,.]*)D)?(?:T(?:([-+]?[0-9,.]*)H)?(?:([-+]?[0-9,.]*)M)?(?:([-+]?[0-9,.]*)S)?)?$/;

	    function createDuration(input, key) {
	        var duration = input,
	            // matching against regexp is expensive, do it on demand
	            match = null,
	            sign,
	            ret,
	            diffRes;

	        if (isDuration(input)) {
	            duration = {
	                ms: input._milliseconds,
	                d: input._days,
	                M: input._months,
	            };
	        } else if (isNumber(input) || !isNaN(+input)) {
	            duration = {};
	            if (key) {
	                duration[key] = +input;
	            } else {
	                duration.milliseconds = +input;
	            }
	        } else if ((match = aspNetRegex.exec(input))) {
	            sign = match[1] === '-' ? -1 : 1;
	            duration = {
	                y: 0,
	                d: toInt(match[DATE]) * sign,
	                h: toInt(match[HOUR]) * sign,
	                m: toInt(match[MINUTE]) * sign,
	                s: toInt(match[SECOND]) * sign,
	                ms: toInt(absRound(match[MILLISECOND] * 1000)) * sign, // the millisecond decimal point is included in the match
	            };
	        } else if ((match = isoRegex.exec(input))) {
	            sign = match[1] === '-' ? -1 : 1;
	            duration = {
	                y: parseIso(match[2], sign),
	                M: parseIso(match[3], sign),
	                w: parseIso(match[4], sign),
	                d: parseIso(match[5], sign),
	                h: parseIso(match[6], sign),
	                m: parseIso(match[7], sign),
	                s: parseIso(match[8], sign),
	            };
	        } else if (duration == null) {
	            // checks for null or undefined
	            duration = {};
	        } else if (
	            typeof duration === 'object' &&
	            ('from' in duration || 'to' in duration)
	        ) {
	            diffRes = momentsDifference(
	                createLocal(duration.from),
	                createLocal(duration.to)
	            );

	            duration = {};
	            duration.ms = diffRes.milliseconds;
	            duration.M = diffRes.months;
	        }

	        ret = new Duration(duration);

	        if (isDuration(input) && hasOwnProp(input, '_locale')) {
	            ret._locale = input._locale;
	        }

	        if (isDuration(input) && hasOwnProp(input, '_isValid')) {
	            ret._isValid = input._isValid;
	        }

	        return ret;
	    }

	    createDuration.fn = Duration.prototype;
	    createDuration.invalid = createInvalid$1;

	    function parseIso(inp, sign) {
	        // We'd normally use ~~inp for this, but unfortunately it also
	        // converts floats to ints.
	        // inp may be undefined, so careful calling replace on it.
	        var res = inp && parseFloat(inp.replace(',', '.'));
	        // apply sign while we're at it
	        return (isNaN(res) ? 0 : res) * sign;
	    }

	    function positiveMomentsDifference(base, other) {
	        var res = {};

	        res.months =
	            other.month() - base.month() + (other.year() - base.year()) * 12;
	        if (base.clone().add(res.months, 'M').isAfter(other)) {
	            --res.months;
	        }

	        res.milliseconds = +other - +base.clone().add(res.months, 'M');

	        return res;
	    }

	    function momentsDifference(base, other) {
	        var res;
	        if (!(base.isValid() && other.isValid())) {
	            return { milliseconds: 0, months: 0 };
	        }

	        other = cloneWithOffset(other, base);
	        if (base.isBefore(other)) {
	            res = positiveMomentsDifference(base, other);
	        } else {
	            res = positiveMomentsDifference(other, base);
	            res.milliseconds = -res.milliseconds;
	            res.months = -res.months;
	        }

	        return res;
	    }

	    // TODO: remove 'name' arg after deprecation is removed
	    function createAdder(direction, name) {
	        return function (val, period) {
	            var dur, tmp;
	            //invert the arguments, but complain about it
	            if (period !== null && !isNaN(+period)) {
	                deprecateSimple(
	                    name,
	                    'moment().' +
	                        name +
	                        '(period, number) is deprecated. Please use moment().' +
	                        name +
	                        '(number, period). ' +
	                        'See http://momentjs.com/guides/#/warnings/add-inverted-param/ for more info.'
	                );
	                tmp = val;
	                val = period;
	                period = tmp;
	            }

	            dur = createDuration(val, period);
	            addSubtract(this, dur, direction);
	            return this;
	        };
	    }

	    function addSubtract(mom, duration, isAdding, updateOffset) {
	        var milliseconds = duration._milliseconds,
	            days = absRound(duration._days),
	            months = absRound(duration._months);

	        if (!mom.isValid()) {
	            // No op
	            return;
	        }

	        updateOffset = updateOffset == null ? true : updateOffset;

	        if (months) {
	            setMonth(mom, get(mom, 'Month') + months * isAdding);
	        }
	        if (days) {
	            set$1(mom, 'Date', get(mom, 'Date') + days * isAdding);
	        }
	        if (milliseconds) {
	            mom._d.setTime(mom._d.valueOf() + milliseconds * isAdding);
	        }
	        if (updateOffset) {
	            hooks.updateOffset(mom, days || months);
	        }
	    }

	    var add = createAdder(1, 'add'),
	        subtract = createAdder(-1, 'subtract');

	    function isString(input) {
	        return typeof input === 'string' || input instanceof String;
	    }

	    // type MomentInput = Moment | Date | string | number | (number | string)[] | MomentInputObject | void; // null | undefined
	    function isMomentInput(input) {
	        return (
	            isMoment(input) ||
	            isDate(input) ||
	            isString(input) ||
	            isNumber(input) ||
	            isNumberOrStringArray(input) ||
	            isMomentInputObject(input) ||
	            input === null ||
	            input === undefined
	        );
	    }

	    function isMomentInputObject(input) {
	        var objectTest = isObject(input) && !isObjectEmpty(input),
	            propertyTest = false,
	            properties = [
	                'years',
	                'year',
	                'y',
	                'months',
	                'month',
	                'M',
	                'days',
	                'day',
	                'd',
	                'dates',
	                'date',
	                'D',
	                'hours',
	                'hour',
	                'h',
	                'minutes',
	                'minute',
	                'm',
	                'seconds',
	                'second',
	                's',
	                'milliseconds',
	                'millisecond',
	                'ms',
	            ],
	            i,
	            property,
	            propertyLen = properties.length;

	        for (i = 0; i < propertyLen; i += 1) {
	            property = properties[i];
	            propertyTest = propertyTest || hasOwnProp(input, property);
	        }

	        return objectTest && propertyTest;
	    }

	    function isNumberOrStringArray(input) {
	        var arrayTest = isArray(input),
	            dataTypeTest = false;
	        if (arrayTest) {
	            dataTypeTest =
	                input.filter(function (item) {
	                    return !isNumber(item) && isString(input);
	                }).length === 0;
	        }
	        return arrayTest && dataTypeTest;
	    }

	    function isCalendarSpec(input) {
	        var objectTest = isObject(input) && !isObjectEmpty(input),
	            propertyTest = false,
	            properties = [
	                'sameDay',
	                'nextDay',
	                'lastDay',
	                'nextWeek',
	                'lastWeek',
	                'sameElse',
	            ],
	            i,
	            property;

	        for (i = 0; i < properties.length; i += 1) {
	            property = properties[i];
	            propertyTest = propertyTest || hasOwnProp(input, property);
	        }

	        return objectTest && propertyTest;
	    }

	    function getCalendarFormat(myMoment, now) {
	        var diff = myMoment.diff(now, 'days', true);
	        return diff < -6
	            ? 'sameElse'
	            : diff < -1
	              ? 'lastWeek'
	              : diff < 0
	                ? 'lastDay'
	                : diff < 1
	                  ? 'sameDay'
	                  : diff < 2
	                    ? 'nextDay'
	                    : diff < 7
	                      ? 'nextWeek'
	                      : 'sameElse';
	    }

	    function calendar$1(time, formats) {
	        // Support for single parameter, formats only overload to the calendar function
	        if (arguments.length === 1) {
	            if (!arguments[0]) {
	                time = undefined;
	                formats = undefined;
	            } else if (isMomentInput(arguments[0])) {
	                time = arguments[0];
	                formats = undefined;
	            } else if (isCalendarSpec(arguments[0])) {
	                formats = arguments[0];
	                time = undefined;
	            }
	        }
	        // We want to compare the start of today, vs this.
	        // Getting start-of-today depends on whether we're local/utc/offset or not.
	        var now = time || createLocal(),
	            sod = cloneWithOffset(now, this).startOf('day'),
	            format = hooks.calendarFormat(this, sod) || 'sameElse',
	            output =
	                formats &&
	                (isFunction(formats[format])
	                    ? formats[format].call(this, now)
	                    : formats[format]);

	        return this.format(
	            output || this.localeData().calendar(format, this, createLocal(now))
	        );
	    }

	    function clone() {
	        return new Moment(this);
	    }

	    function isAfter(input, units) {
	        var localInput = isMoment(input) ? input : createLocal(input);
	        if (!(this.isValid() && localInput.isValid())) {
	            return false;
	        }
	        units = normalizeUnits(units) || 'millisecond';
	        if (units === 'millisecond') {
	            return this.valueOf() > localInput.valueOf();
	        } else {
	            return localInput.valueOf() < this.clone().startOf(units).valueOf();
	        }
	    }

	    function isBefore(input, units) {
	        var localInput = isMoment(input) ? input : createLocal(input);
	        if (!(this.isValid() && localInput.isValid())) {
	            return false;
	        }
	        units = normalizeUnits(units) || 'millisecond';
	        if (units === 'millisecond') {
	            return this.valueOf() < localInput.valueOf();
	        } else {
	            return this.clone().endOf(units).valueOf() < localInput.valueOf();
	        }
	    }

	    function isBetween(from, to, units, inclusivity) {
	        var localFrom = isMoment(from) ? from : createLocal(from),
	            localTo = isMoment(to) ? to : createLocal(to);
	        if (!(this.isValid() && localFrom.isValid() && localTo.isValid())) {
	            return false;
	        }
	        inclusivity = inclusivity || '()';
	        return (
	            (inclusivity[0] === '('
	                ? this.isAfter(localFrom, units)
	                : !this.isBefore(localFrom, units)) &&
	            (inclusivity[1] === ')'
	                ? this.isBefore(localTo, units)
	                : !this.isAfter(localTo, units))
	        );
	    }

	    function isSame(input, units) {
	        var localInput = isMoment(input) ? input : createLocal(input),
	            inputMs;
	        if (!(this.isValid() && localInput.isValid())) {
	            return false;
	        }
	        units = normalizeUnits(units) || 'millisecond';
	        if (units === 'millisecond') {
	            return this.valueOf() === localInput.valueOf();
	        } else {
	            inputMs = localInput.valueOf();
	            return (
	                this.clone().startOf(units).valueOf() <= inputMs &&
	                inputMs <= this.clone().endOf(units).valueOf()
	            );
	        }
	    }

	    function isSameOrAfter(input, units) {
	        return this.isSame(input, units) || this.isAfter(input, units);
	    }

	    function isSameOrBefore(input, units) {
	        return this.isSame(input, units) || this.isBefore(input, units);
	    }

	    function diff(input, units, asFloat) {
	        var that, zoneDelta, output;

	        if (!this.isValid()) {
	            return NaN;
	        }

	        that = cloneWithOffset(input, this);

	        if (!that.isValid()) {
	            return NaN;
	        }

	        zoneDelta = (that.utcOffset() - this.utcOffset()) * 6e4;

	        units = normalizeUnits(units);

	        switch (units) {
	            case 'year':
	                output = monthDiff(this, that) / 12;
	                break;
	            case 'month':
	                output = monthDiff(this, that);
	                break;
	            case 'quarter':
	                output = monthDiff(this, that) / 3;
	                break;
	            case 'second':
	                output = (this - that) / 1e3;
	                break; // 1000
	            case 'minute':
	                output = (this - that) / 6e4;
	                break; // 1000 * 60
	            case 'hour':
	                output = (this - that) / 36e5;
	                break; // 1000 * 60 * 60
	            case 'day':
	                output = (this - that - zoneDelta) / 864e5;
	                break; // 1000 * 60 * 60 * 24, negate dst
	            case 'week':
	                output = (this - that - zoneDelta) / 6048e5;
	                break; // 1000 * 60 * 60 * 24 * 7, negate dst
	            default:
	                output = this - that;
	        }

	        return asFloat ? output : absFloor(output);
	    }

	    function monthDiff(a, b) {
	        if (a.date() < b.date()) {
	            // end-of-month calculations work correct when the start month has more
	            // days than the end month.
	            return -monthDiff(b, a);
	        }
	        // difference in months
	        var wholeMonthDiff = (b.year() - a.year()) * 12 + (b.month() - a.month()),
	            // b is in (anchor - 1 month, anchor + 1 month)
	            anchor = a.clone().add(wholeMonthDiff, 'months'),
	            anchor2,
	            adjust;

	        if (b - anchor < 0) {
	            anchor2 = a.clone().add(wholeMonthDiff - 1, 'months');
	            // linear across the month
	            adjust = (b - anchor) / (anchor - anchor2);
	        } else {
	            anchor2 = a.clone().add(wholeMonthDiff + 1, 'months');
	            // linear across the month
	            adjust = (b - anchor) / (anchor2 - anchor);
	        }

	        //check for negative zero, return zero if negative zero
	        return -(wholeMonthDiff + adjust) || 0;
	    }

	    hooks.defaultFormat = 'YYYY-MM-DDTHH:mm:ssZ';
	    hooks.defaultFormatUtc = 'YYYY-MM-DDTHH:mm:ss[Z]';

	    function toString() {
	        return this.clone().locale('en').format('ddd MMM DD YYYY HH:mm:ss [GMT]ZZ');
	    }

	    function toISOString(keepOffset) {
	        if (!this.isValid()) {
	            return null;
	        }
	        var utc = keepOffset !== true,
	            m = utc ? this.clone().utc() : this;
	        if (m.year() < 0 || m.year() > 9999) {
	            return formatMoment(
	                m,
	                utc
	                    ? 'YYYYYY-MM-DD[T]HH:mm:ss.SSS[Z]'
	                    : 'YYYYYY-MM-DD[T]HH:mm:ss.SSSZ'
	            );
	        }
	        if (isFunction(Date.prototype.toISOString)) {
	            // native implementation is ~50x faster, use it when we can
	            if (utc) {
	                return this.toDate().toISOString();
	            } else {
	                return new Date(this.valueOf() + this.utcOffset() * 60 * 1000)
	                    .toISOString()
	                    .replace('Z', formatMoment(m, 'Z'));
	            }
	        }
	        return formatMoment(
	            m,
	            utc ? 'YYYY-MM-DD[T]HH:mm:ss.SSS[Z]' : 'YYYY-MM-DD[T]HH:mm:ss.SSSZ'
	        );
	    }

	    /**
	     * Return a human readable representation of a moment that can
	     * also be evaluated to get a new moment which is the same
	     *
	     * @link https://nodejs.org/dist/latest/docs/api/util.html#util_custom_inspect_function_on_objects
	     */
	    function inspect() {
	        if (!this.isValid()) {
	            return 'moment.invalid(/* ' + this._i + ' */)';
	        }
	        var func = 'moment',
	            zone = '',
	            prefix,
	            year,
	            datetime,
	            suffix;
	        if (!this.isLocal()) {
	            func = this.utcOffset() === 0 ? 'moment.utc' : 'moment.parseZone';
	            zone = 'Z';
	        }
	        prefix = '[' + func + '("]';
	        year = 0 <= this.year() && this.year() <= 9999 ? 'YYYY' : 'YYYYYY';
	        datetime = '-MM-DD[T]HH:mm:ss.SSS';
	        suffix = zone + '[")]';

	        return this.format(prefix + year + datetime + suffix);
	    }

	    function format(inputString) {
	        if (!inputString) {
	            inputString = this.isUtc()
	                ? hooks.defaultFormatUtc
	                : hooks.defaultFormat;
	        }
	        var output = formatMoment(this, inputString);
	        return this.localeData().postformat(output);
	    }

	    function from(time, withoutSuffix) {
	        if (
	            this.isValid() &&
	            ((isMoment(time) && time.isValid()) || createLocal(time).isValid())
	        ) {
	            return createDuration({ to: this, from: time })
	                .locale(this.locale())
	                .humanize(!withoutSuffix);
	        } else {
	            return this.localeData().invalidDate();
	        }
	    }

	    function fromNow(withoutSuffix) {
	        return this.from(createLocal(), withoutSuffix);
	    }

	    function to(time, withoutSuffix) {
	        if (
	            this.isValid() &&
	            ((isMoment(time) && time.isValid()) || createLocal(time).isValid())
	        ) {
	            return createDuration({ from: this, to: time })
	                .locale(this.locale())
	                .humanize(!withoutSuffix);
	        } else {
	            return this.localeData().invalidDate();
	        }
	    }

	    function toNow(withoutSuffix) {
	        return this.to(createLocal(), withoutSuffix);
	    }

	    // If passed a locale key, it will set the locale for this
	    // instance.  Otherwise, it will return the locale configuration
	    // variables for this instance.
	    function locale(key) {
	        var newLocaleData;

	        if (key === undefined) {
	            return this._locale._abbr;
	        } else {
	            newLocaleData = getLocale(key);
	            if (newLocaleData != null) {
	                this._locale = newLocaleData;
	            }
	            return this;
	        }
	    }

	    var lang = deprecate(
	        'moment().lang() is deprecated. Instead, use moment().localeData() to get the language configuration. Use moment().locale() to change languages.',
	        function (key) {
	            if (key === undefined) {
	                return this.localeData();
	            } else {
	                return this.locale(key);
	            }
	        }
	    );

	    function localeData() {
	        return this._locale;
	    }

	    var MS_PER_SECOND = 1000,
	        MS_PER_MINUTE = 60 * MS_PER_SECOND,
	        MS_PER_HOUR = 60 * MS_PER_MINUTE,
	        MS_PER_400_YEARS = (365 * 400 + 97) * 24 * MS_PER_HOUR;

	    // actual modulo - handles negative numbers (for dates before 1970):
	    function mod$1(dividend, divisor) {
	        return ((dividend % divisor) + divisor) % divisor;
	    }

	    function localStartOfDate(y, m, d) {
	        // the date constructor remaps years 0-99 to 1900-1999
	        if (y < 100 && y >= 0) {
	            // preserve leap years using a full 400 year cycle, then reset
	            return new Date(y + 400, m, d) - MS_PER_400_YEARS;
	        } else {
	            return new Date(y, m, d).valueOf();
	        }
	    }

	    function utcStartOfDate(y, m, d) {
	        // Date.UTC remaps years 0-99 to 1900-1999
	        if (y < 100 && y >= 0) {
	            // preserve leap years using a full 400 year cycle, then reset
	            return Date.UTC(y + 400, m, d) - MS_PER_400_YEARS;
	        } else {
	            return Date.UTC(y, m, d);
	        }
	    }

	    function startOf(units) {
	        var time, startOfDate;
	        units = normalizeUnits(units);
	        if (units === undefined || units === 'millisecond' || !this.isValid()) {
	            return this;
	        }

	        startOfDate = this._isUTC ? utcStartOfDate : localStartOfDate;

	        switch (units) {
	            case 'year':
	                time = startOfDate(this.year(), 0, 1);
	                break;
	            case 'quarter':
	                time = startOfDate(
	                    this.year(),
	                    this.month() - (this.month() % 3),
	                    1
	                );
	                break;
	            case 'month':
	                time = startOfDate(this.year(), this.month(), 1);
	                break;
	            case 'week':
	                time = startOfDate(
	                    this.year(),
	                    this.month(),
	                    this.date() - this.weekday()
	                );
	                break;
	            case 'isoWeek':
	                time = startOfDate(
	                    this.year(),
	                    this.month(),
	                    this.date() - (this.isoWeekday() - 1)
	                );
	                break;
	            case 'day':
	            case 'date':
	                time = startOfDate(this.year(), this.month(), this.date());
	                break;
	            case 'hour':
	                time = this._d.valueOf();
	                time -= mod$1(
	                    time + (this._isUTC ? 0 : this.utcOffset() * MS_PER_MINUTE),
	                    MS_PER_HOUR
	                );
	                break;
	            case 'minute':
	                time = this._d.valueOf();
	                time -= mod$1(time, MS_PER_MINUTE);
	                break;
	            case 'second':
	                time = this._d.valueOf();
	                time -= mod$1(time, MS_PER_SECOND);
	                break;
	        }

	        this._d.setTime(time);
	        hooks.updateOffset(this, true);
	        return this;
	    }

	    function endOf(units) {
	        var time, startOfDate;
	        units = normalizeUnits(units);
	        if (units === undefined || units === 'millisecond' || !this.isValid()) {
	            return this;
	        }

	        startOfDate = this._isUTC ? utcStartOfDate : localStartOfDate;

	        switch (units) {
	            case 'year':
	                time = startOfDate(this.year() + 1, 0, 1) - 1;
	                break;
	            case 'quarter':
	                time =
	                    startOfDate(
	                        this.year(),
	                        this.month() - (this.month() % 3) + 3,
	                        1
	                    ) - 1;
	                break;
	            case 'month':
	                time = startOfDate(this.year(), this.month() + 1, 1) - 1;
	                break;
	            case 'week':
	                time =
	                    startOfDate(
	                        this.year(),
	                        this.month(),
	                        this.date() - this.weekday() + 7
	                    ) - 1;
	                break;
	            case 'isoWeek':
	                time =
	                    startOfDate(
	                        this.year(),
	                        this.month(),
	                        this.date() - (this.isoWeekday() - 1) + 7
	                    ) - 1;
	                break;
	            case 'day':
	            case 'date':
	                time = startOfDate(this.year(), this.month(), this.date() + 1) - 1;
	                break;
	            case 'hour':
	                time = this._d.valueOf();
	                time +=
	                    MS_PER_HOUR -
	                    mod$1(
	                        time + (this._isUTC ? 0 : this.utcOffset() * MS_PER_MINUTE),
	                        MS_PER_HOUR
	                    ) -
	                    1;
	                break;
	            case 'minute':
	                time = this._d.valueOf();
	                time += MS_PER_MINUTE - mod$1(time, MS_PER_MINUTE) - 1;
	                break;
	            case 'second':
	                time = this._d.valueOf();
	                time += MS_PER_SECOND - mod$1(time, MS_PER_SECOND) - 1;
	                break;
	        }

	        this._d.setTime(time);
	        hooks.updateOffset(this, true);
	        return this;
	    }

	    function valueOf() {
	        return this._d.valueOf() - (this._offset || 0) * 60000;
	    }

	    function unix() {
	        return Math.floor(this.valueOf() / 1000);
	    }

	    function toDate() {
	        return new Date(this.valueOf());
	    }

	    function toArray() {
	        var m = this;
	        return [
	            m.year(),
	            m.month(),
	            m.date(),
	            m.hour(),
	            m.minute(),
	            m.second(),
	            m.millisecond(),
	        ];
	    }

	    function toObject() {
	        var m = this;
	        return {
	            years: m.year(),
	            months: m.month(),
	            date: m.date(),
	            hours: m.hours(),
	            minutes: m.minutes(),
	            seconds: m.seconds(),
	            milliseconds: m.milliseconds(),
	        };
	    }

	    function toJSON() {
	        // new Date(NaN).toJSON() === null
	        return this.isValid() ? this.toISOString() : null;
	    }

	    function isValid$2() {
	        return isValid(this);
	    }

	    function parsingFlags() {
	        return extend({}, getParsingFlags(this));
	    }

	    function invalidAt() {
	        return getParsingFlags(this).overflow;
	    }

	    function creationData() {
	        return {
	            input: this._i,
	            format: this._f,
	            locale: this._locale,
	            isUTC: this._isUTC,
	            strict: this._strict,
	        };
	    }

	    addFormatToken('N', 0, 0, 'eraAbbr');
	    addFormatToken('NN', 0, 0, 'eraAbbr');
	    addFormatToken('NNN', 0, 0, 'eraAbbr');
	    addFormatToken('NNNN', 0, 0, 'eraName');
	    addFormatToken('NNNNN', 0, 0, 'eraNarrow');

	    addFormatToken('y', ['y', 1], 'yo', 'eraYear');
	    addFormatToken('y', ['yy', 2], 0, 'eraYear');
	    addFormatToken('y', ['yyy', 3], 0, 'eraYear');
	    addFormatToken('y', ['yyyy', 4], 0, 'eraYear');

	    addRegexToken('N', matchEraAbbr);
	    addRegexToken('NN', matchEraAbbr);
	    addRegexToken('NNN', matchEraAbbr);
	    addRegexToken('NNNN', matchEraName);
	    addRegexToken('NNNNN', matchEraNarrow);

	    addParseToken(
	        ['N', 'NN', 'NNN', 'NNNN', 'NNNNN'],
	        function (input, array, config, token) {
	            var era = config._locale.erasParse(input, token, config._strict);
	            if (era) {
	                getParsingFlags(config).era = era;
	            } else {
	                getParsingFlags(config).invalidEra = input;
	            }
	        }
	    );

	    addRegexToken('y', matchUnsigned);
	    addRegexToken('yy', matchUnsigned);
	    addRegexToken('yyy', matchUnsigned);
	    addRegexToken('yyyy', matchUnsigned);
	    addRegexToken('yo', matchEraYearOrdinal);

	    addParseToken(['y', 'yy', 'yyy', 'yyyy'], YEAR);
	    addParseToken(['yo'], function (input, array, config, token) {
	        var match;
	        if (config._locale._eraYearOrdinalRegex) {
	            match = input.match(config._locale._eraYearOrdinalRegex);
	        }

	        if (config._locale.eraYearOrdinalParse) {
	            array[YEAR] = config._locale.eraYearOrdinalParse(input, match);
	        } else {
	            array[YEAR] = parseInt(input, 10);
	        }
	    });

	    function localeEras(m, format) {
	        var i,
	            l,
	            date,
	            eras = this._eras || getLocale('en')._eras;
	        for (i = 0, l = eras.length; i < l; ++i) {
	            switch (typeof eras[i].since) {
	                case 'string':
	                    // truncate time
	                    date = hooks(eras[i].since).startOf('day');
	                    eras[i].since = date.valueOf();
	                    break;
	            }

	            switch (typeof eras[i].until) {
	                case 'undefined':
	                    eras[i].until = +Infinity;
	                    break;
	                case 'string':
	                    // truncate time
	                    date = hooks(eras[i].until).startOf('day').valueOf();
	                    eras[i].until = date.valueOf();
	                    break;
	            }
	        }
	        return eras;
	    }

	    function localeErasParse(eraName, format, strict) {
	        var i,
	            l,
	            eras = this.eras(),
	            name,
	            abbr,
	            narrow;
	        eraName = eraName.toUpperCase();

	        for (i = 0, l = eras.length; i < l; ++i) {
	            name = eras[i].name.toUpperCase();
	            abbr = eras[i].abbr.toUpperCase();
	            narrow = eras[i].narrow.toUpperCase();

	            if (strict) {
	                switch (format) {
	                    case 'N':
	                    case 'NN':
	                    case 'NNN':
	                        if (abbr === eraName) {
	                            return eras[i];
	                        }
	                        break;

	                    case 'NNNN':
	                        if (name === eraName) {
	                            return eras[i];
	                        }
	                        break;

	                    case 'NNNNN':
	                        if (narrow === eraName) {
	                            return eras[i];
	                        }
	                        break;
	                }
	            } else if ([name, abbr, narrow].indexOf(eraName) >= 0) {
	                return eras[i];
	            }
	        }
	    }

	    function localeErasConvertYear(era, year) {
	        var dir = era.since <= era.until ? +1 : -1;
	        if (year === undefined) {
	            return hooks(era.since).year();
	        } else {
	            return hooks(era.since).year() + (year - era.offset) * dir;
	        }
	    }

	    function getEraName() {
	        var i,
	            l,
	            val,
	            eras = this.localeData().eras();
	        for (i = 0, l = eras.length; i < l; ++i) {
	            // truncate time
	            val = this.clone().startOf('day').valueOf();

	            if (eras[i].since <= val && val <= eras[i].until) {
	                return eras[i].name;
	            }
	            if (eras[i].until <= val && val <= eras[i].since) {
	                return eras[i].name;
	            }
	        }

	        return '';
	    }

	    function getEraNarrow() {
	        var i,
	            l,
	            val,
	            eras = this.localeData().eras();
	        for (i = 0, l = eras.length; i < l; ++i) {
	            // truncate time
	            val = this.clone().startOf('day').valueOf();

	            if (eras[i].since <= val && val <= eras[i].until) {
	                return eras[i].narrow;
	            }
	            if (eras[i].until <= val && val <= eras[i].since) {
	                return eras[i].narrow;
	            }
	        }

	        return '';
	    }

	    function getEraAbbr() {
	        var i,
	            l,
	            val,
	            eras = this.localeData().eras();
	        for (i = 0, l = eras.length; i < l; ++i) {
	            // truncate time
	            val = this.clone().startOf('day').valueOf();

	            if (eras[i].since <= val && val <= eras[i].until) {
	                return eras[i].abbr;
	            }
	            if (eras[i].until <= val && val <= eras[i].since) {
	                return eras[i].abbr;
	            }
	        }

	        return '';
	    }

	    function getEraYear() {
	        var i,
	            l,
	            dir,
	            val,
	            eras = this.localeData().eras();
	        for (i = 0, l = eras.length; i < l; ++i) {
	            dir = eras[i].since <= eras[i].until ? +1 : -1;

	            // truncate time
	            val = this.clone().startOf('day').valueOf();

	            if (
	                (eras[i].since <= val && val <= eras[i].until) ||
	                (eras[i].until <= val && val <= eras[i].since)
	            ) {
	                return (
	                    (this.year() - hooks(eras[i].since).year()) * dir +
	                    eras[i].offset
	                );
	            }
	        }

	        return this.year();
	    }

	    function erasNameRegex(isStrict) {
	        if (!hasOwnProp(this, '_erasNameRegex')) {
	            computeErasParse.call(this);
	        }
	        return isStrict ? this._erasNameRegex : this._erasRegex;
	    }

	    function erasAbbrRegex(isStrict) {
	        if (!hasOwnProp(this, '_erasAbbrRegex')) {
	            computeErasParse.call(this);
	        }
	        return isStrict ? this._erasAbbrRegex : this._erasRegex;
	    }

	    function erasNarrowRegex(isStrict) {
	        if (!hasOwnProp(this, '_erasNarrowRegex')) {
	            computeErasParse.call(this);
	        }
	        return isStrict ? this._erasNarrowRegex : this._erasRegex;
	    }

	    function matchEraAbbr(isStrict, locale) {
	        return locale.erasAbbrRegex(isStrict);
	    }

	    function matchEraName(isStrict, locale) {
	        return locale.erasNameRegex(isStrict);
	    }

	    function matchEraNarrow(isStrict, locale) {
	        return locale.erasNarrowRegex(isStrict);
	    }

	    function matchEraYearOrdinal(isStrict, locale) {
	        return locale._eraYearOrdinalRegex || matchUnsigned;
	    }

	    function computeErasParse() {
	        var abbrPieces = [],
	            namePieces = [],
	            narrowPieces = [],
	            mixedPieces = [],
	            i,
	            l,
	            erasName,
	            erasAbbr,
	            erasNarrow,
	            eras = this.eras();

	        for (i = 0, l = eras.length; i < l; ++i) {
	            erasName = regexEscape(eras[i].name);
	            erasAbbr = regexEscape(eras[i].abbr);
	            erasNarrow = regexEscape(eras[i].narrow);

	            namePieces.push(erasName);
	            abbrPieces.push(erasAbbr);
	            narrowPieces.push(erasNarrow);
	            mixedPieces.push(erasName);
	            mixedPieces.push(erasAbbr);
	            mixedPieces.push(erasNarrow);
	        }

	        this._erasRegex = new RegExp('^(' + mixedPieces.join('|') + ')', 'i');
	        this._erasNameRegex = new RegExp('^(' + namePieces.join('|') + ')', 'i');
	        this._erasAbbrRegex = new RegExp('^(' + abbrPieces.join('|') + ')', 'i');
	        this._erasNarrowRegex = new RegExp(
	            '^(' + narrowPieces.join('|') + ')',
	            'i'
	        );
	    }

	    // FORMATTING

	    addFormatToken(0, ['gg', 2], 0, function () {
	        return this.weekYear() % 100;
	    });

	    addFormatToken(0, ['GG', 2], 0, function () {
	        return this.isoWeekYear() % 100;
	    });

	    function addWeekYearFormatToken(token, getter) {
	        addFormatToken(0, [token, token.length], 0, getter);
	    }

	    addWeekYearFormatToken('gggg', 'weekYear');
	    addWeekYearFormatToken('ggggg', 'weekYear');
	    addWeekYearFormatToken('GGGG', 'isoWeekYear');
	    addWeekYearFormatToken('GGGGG', 'isoWeekYear');

	    // ALIASES

	    // PARSING

	    addRegexToken('G', matchSigned);
	    addRegexToken('g', matchSigned);
	    addRegexToken('GG', match1to2, match2);
	    addRegexToken('gg', match1to2, match2);
	    addRegexToken('GGGG', match1to4, match4);
	    addRegexToken('gggg', match1to4, match4);
	    addRegexToken('GGGGG', match1to6, match6);
	    addRegexToken('ggggg', match1to6, match6);

	    addWeekParseToken(
	        ['gggg', 'ggggg', 'GGGG', 'GGGGG'],
	        function (input, week, config, token) {
	            week[token.substr(0, 2)] = toInt(input);
	        }
	    );

	    addWeekParseToken(['gg', 'GG'], function (input, week, config, token) {
	        week[token] = hooks.parseTwoDigitYear(input);
	    });

	    // MOMENTS

	    function getSetWeekYear(input) {
	        return getSetWeekYearHelper.call(
	            this,
	            input,
	            this.week(),
	            this.weekday() + this.localeData()._week.dow,
	            this.localeData()._week.dow,
	            this.localeData()._week.doy
	        );
	    }

	    function getSetISOWeekYear(input) {
	        return getSetWeekYearHelper.call(
	            this,
	            input,
	            this.isoWeek(),
	            this.isoWeekday(),
	            1,
	            4
	        );
	    }

	    function getISOWeeksInYear() {
	        return weeksInYear(this.year(), 1, 4);
	    }

	    function getISOWeeksInISOWeekYear() {
	        return weeksInYear(this.isoWeekYear(), 1, 4);
	    }

	    function getWeeksInYear() {
	        var weekInfo = this.localeData()._week;
	        return weeksInYear(this.year(), weekInfo.dow, weekInfo.doy);
	    }

	    function getWeeksInWeekYear() {
	        var weekInfo = this.localeData()._week;
	        return weeksInYear(this.weekYear(), weekInfo.dow, weekInfo.doy);
	    }

	    function getSetWeekYearHelper(input, week, weekday, dow, doy) {
	        var weeksTarget;
	        if (input == null) {
	            return weekOfYear(this, dow, doy).year;
	        } else {
	            weeksTarget = weeksInYear(input, dow, doy);
	            if (week > weeksTarget) {
	                week = weeksTarget;
	            }
	            return setWeekAll.call(this, input, week, weekday, dow, doy);
	        }
	    }

	    function setWeekAll(weekYear, week, weekday, dow, doy) {
	        var dayOfYearData = dayOfYearFromWeeks(weekYear, week, weekday, dow, doy),
	            date = createUTCDate(dayOfYearData.year, 0, dayOfYearData.dayOfYear);

	        this.year(date.getUTCFullYear());
	        this.month(date.getUTCMonth());
	        this.date(date.getUTCDate());
	        return this;
	    }

	    // FORMATTING

	    addFormatToken('Q', 0, 'Qo', 'quarter');

	    // PARSING

	    addRegexToken('Q', match1);
	    addParseToken('Q', function (input, array) {
	        array[MONTH] = (toInt(input) - 1) * 3;
	    });

	    // MOMENTS

	    function getSetQuarter(input) {
	        return input == null
	            ? Math.ceil((this.month() + 1) / 3)
	            : this.month((input - 1) * 3 + (this.month() % 3));
	    }

	    // FORMATTING

	    addFormatToken('D', ['DD', 2], 'Do', 'date');

	    // PARSING

	    addRegexToken('D', match1to2, match1to2NoLeadingZero);
	    addRegexToken('DD', match1to2, match2);
	    addRegexToken('Do', function (isStrict, locale) {
	        // TODO: Remove "ordinalParse" fallback in next major release.
	        return isStrict
	            ? locale._dayOfMonthOrdinalParse || locale._ordinalParse
	            : locale._dayOfMonthOrdinalParseLenient;
	    });

	    addParseToken(['D', 'DD'], DATE);
	    addParseToken('Do', function (input, array) {
	        array[DATE] = toInt(input.match(match1to2)[0]);
	    });

	    // MOMENTS

	    var getSetDayOfMonth = makeGetSet('Date', true);

	    // FORMATTING

	    addFormatToken('DDD', ['DDDD', 3], 'DDDo', 'dayOfYear');

	    // PARSING

	    addRegexToken('DDD', match1to3);
	    addRegexToken('DDDD', match3);
	    addParseToken(['DDD', 'DDDD'], function (input, array, config) {
	        config._dayOfYear = toInt(input);
	    });

	    // HELPERS

	    // MOMENTS

	    function getSetDayOfYear(input) {
	        var dayOfYear =
	            Math.round(
	                (this.clone().startOf('day') - this.clone().startOf('year')) / 864e5
	            ) + 1;
	        return input == null ? dayOfYear : this.add(input - dayOfYear, 'd');
	    }

	    // FORMATTING

	    addFormatToken('m', ['mm', 2], 0, 'minute');

	    // PARSING

	    addRegexToken('m', match1to2, match1to2HasZero);
	    addRegexToken('mm', match1to2, match2);
	    addParseToken(['m', 'mm'], MINUTE);

	    // MOMENTS

	    var getSetMinute = makeGetSet('Minutes', false);

	    // FORMATTING

	    addFormatToken('s', ['ss', 2], 0, 'second');

	    // PARSING

	    addRegexToken('s', match1to2, match1to2HasZero);
	    addRegexToken('ss', match1to2, match2);
	    addParseToken(['s', 'ss'], SECOND);

	    // MOMENTS

	    var getSetSecond = makeGetSet('Seconds', false);

	    // FORMATTING

	    addFormatToken('S', 0, 0, function () {
	        return ~~(this.millisecond() / 100);
	    });

	    addFormatToken(0, ['SS', 2], 0, function () {
	        return ~~(this.millisecond() / 10);
	    });

	    addFormatToken(0, ['SSS', 3], 0, 'millisecond');
	    addFormatToken(0, ['SSSS', 4], 0, function () {
	        return this.millisecond() * 10;
	    });
	    addFormatToken(0, ['SSSSS', 5], 0, function () {
	        return this.millisecond() * 100;
	    });
	    addFormatToken(0, ['SSSSSS', 6], 0, function () {
	        return this.millisecond() * 1000;
	    });
	    addFormatToken(0, ['SSSSSSS', 7], 0, function () {
	        return this.millisecond() * 10000;
	    });
	    addFormatToken(0, ['SSSSSSSS', 8], 0, function () {
	        return this.millisecond() * 100000;
	    });
	    addFormatToken(0, ['SSSSSSSSS', 9], 0, function () {
	        return this.millisecond() * 1000000;
	    });

	    // PARSING

	    addRegexToken('S', match1to3, match1);
	    addRegexToken('SS', match1to3, match2);
	    addRegexToken('SSS', match1to3, match3);

	    var token, getSetMillisecond;
	    for (token = 'SSSS'; token.length <= 9; token += 'S') {
	        addRegexToken(token, matchUnsigned);
	    }

	    function parseMs(input, array) {
	        array[MILLISECOND] = toInt(('0.' + input) * 1000);
	    }

	    for (token = 'S'; token.length <= 9; token += 'S') {
	        addParseToken(token, parseMs);
	    }

	    getSetMillisecond = makeGetSet('Milliseconds', false);

	    // FORMATTING

	    addFormatToken('z', 0, 0, 'zoneAbbr');
	    addFormatToken('zz', 0, 0, 'zoneName');

	    // MOMENTS

	    function getZoneAbbr() {
	        return this._isUTC ? 'UTC' : '';
	    }

	    function getZoneName() {
	        return this._isUTC ? 'Coordinated Universal Time' : '';
	    }

	    var proto = Moment.prototype;

	    proto.add = add;
	    proto.calendar = calendar$1;
	    proto.clone = clone;
	    proto.diff = diff;
	    proto.endOf = endOf;
	    proto.format = format;
	    proto.from = from;
	    proto.fromNow = fromNow;
	    proto.to = to;
	    proto.toNow = toNow;
	    proto.get = stringGet;
	    proto.invalidAt = invalidAt;
	    proto.isAfter = isAfter;
	    proto.isBefore = isBefore;
	    proto.isBetween = isBetween;
	    proto.isSame = isSame;
	    proto.isSameOrAfter = isSameOrAfter;
	    proto.isSameOrBefore = isSameOrBefore;
	    proto.isValid = isValid$2;
	    proto.lang = lang;
	    proto.locale = locale;
	    proto.localeData = localeData;
	    proto.max = prototypeMax;
	    proto.min = prototypeMin;
	    proto.parsingFlags = parsingFlags;
	    proto.set = stringSet;
	    proto.startOf = startOf;
	    proto.subtract = subtract;
	    proto.toArray = toArray;
	    proto.toObject = toObject;
	    proto.toDate = toDate;
	    proto.toISOString = toISOString;
	    proto.inspect = inspect;
	    if (typeof Symbol !== 'undefined' && Symbol.for != null) {
	        proto[Symbol.for('nodejs.util.inspect.custom')] = function () {
	            return 'Moment<' + this.format() + '>';
	        };
	    }
	    proto.toJSON = toJSON;
	    proto.toString = toString;
	    proto.unix = unix;
	    proto.valueOf = valueOf;
	    proto.creationData = creationData;
	    proto.eraName = getEraName;
	    proto.eraNarrow = getEraNarrow;
	    proto.eraAbbr = getEraAbbr;
	    proto.eraYear = getEraYear;
	    proto.year = getSetYear;
	    proto.isLeapYear = getIsLeapYear;
	    proto.weekYear = getSetWeekYear;
	    proto.isoWeekYear = getSetISOWeekYear;
	    proto.quarter = proto.quarters = getSetQuarter;
	    proto.month = getSetMonth;
	    proto.daysInMonth = getDaysInMonth;
	    proto.week = proto.weeks = getSetWeek;
	    proto.isoWeek = proto.isoWeeks = getSetISOWeek;
	    proto.weeksInYear = getWeeksInYear;
	    proto.weeksInWeekYear = getWeeksInWeekYear;
	    proto.isoWeeksInYear = getISOWeeksInYear;
	    proto.isoWeeksInISOWeekYear = getISOWeeksInISOWeekYear;
	    proto.date = getSetDayOfMonth;
	    proto.day = proto.days = getSetDayOfWeek;
	    proto.weekday = getSetLocaleDayOfWeek;
	    proto.isoWeekday = getSetISODayOfWeek;
	    proto.dayOfYear = getSetDayOfYear;
	    proto.hour = proto.hours = getSetHour;
	    proto.minute = proto.minutes = getSetMinute;
	    proto.second = proto.seconds = getSetSecond;
	    proto.millisecond = proto.milliseconds = getSetMillisecond;
	    proto.utcOffset = getSetOffset;
	    proto.utc = setOffsetToUTC;
	    proto.local = setOffsetToLocal;
	    proto.parseZone = setOffsetToParsedOffset;
	    proto.hasAlignedHourOffset = hasAlignedHourOffset;
	    proto.isDST = isDaylightSavingTime;
	    proto.isLocal = isLocal;
	    proto.isUtcOffset = isUtcOffset;
	    proto.isUtc = isUtc;
	    proto.isUTC = isUtc;
	    proto.zoneAbbr = getZoneAbbr;
	    proto.zoneName = getZoneName;
	    proto.dates = deprecate(
	        'dates accessor is deprecated. Use date instead.',
	        getSetDayOfMonth
	    );
	    proto.months = deprecate(
	        'months accessor is deprecated. Use month instead',
	        getSetMonth
	    );
	    proto.years = deprecate(
	        'years accessor is deprecated. Use year instead',
	        getSetYear
	    );
	    proto.zone = deprecate(
	        'moment().zone is deprecated, use moment().utcOffset instead. http://momentjs.com/guides/#/warnings/zone/',
	        getSetZone
	    );
	    proto.isDSTShifted = deprecate(
	        'isDSTShifted is deprecated. See http://momentjs.com/guides/#/warnings/dst-shifted/ for more information',
	        isDaylightSavingTimeShifted
	    );

	    function createUnix(input) {
	        return createLocal(input * 1000);
	    }

	    function createInZone() {
	        return createLocal.apply(null, arguments).parseZone();
	    }

	    function preParsePostFormat(string) {
	        return string;
	    }

	    var proto$1 = Locale.prototype;

	    proto$1.calendar = calendar;
	    proto$1.longDateFormat = longDateFormat;
	    proto$1.invalidDate = invalidDate;
	    proto$1.ordinal = ordinal;
	    proto$1.preparse = preParsePostFormat;
	    proto$1.postformat = preParsePostFormat;
	    proto$1.relativeTime = relativeTime;
	    proto$1.pastFuture = pastFuture;
	    proto$1.set = set;
	    proto$1.eras = localeEras;
	    proto$1.erasParse = localeErasParse;
	    proto$1.erasConvertYear = localeErasConvertYear;
	    proto$1.erasAbbrRegex = erasAbbrRegex;
	    proto$1.erasNameRegex = erasNameRegex;
	    proto$1.erasNarrowRegex = erasNarrowRegex;

	    proto$1.months = localeMonths;
	    proto$1.monthsShort = localeMonthsShort;
	    proto$1.monthsParse = localeMonthsParse;
	    proto$1.monthsRegex = monthsRegex;
	    proto$1.monthsShortRegex = monthsShortRegex;
	    proto$1.week = localeWeek;
	    proto$1.firstDayOfYear = localeFirstDayOfYear;
	    proto$1.firstDayOfWeek = localeFirstDayOfWeek;

	    proto$1.weekdays = localeWeekdays;
	    proto$1.weekdaysMin = localeWeekdaysMin;
	    proto$1.weekdaysShort = localeWeekdaysShort;
	    proto$1.weekdaysParse = localeWeekdaysParse;

	    proto$1.weekdaysRegex = weekdaysRegex;
	    proto$1.weekdaysShortRegex = weekdaysShortRegex;
	    proto$1.weekdaysMinRegex = weekdaysMinRegex;

	    proto$1.isPM = localeIsPM;
	    proto$1.meridiem = localeMeridiem;

	    function get$1(format, index, field, setter) {
	        var locale = getLocale(),
	            utc = createUTC().set(setter, index);
	        return locale[field](utc, format);
	    }

	    function listMonthsImpl(format, index, field) {
	        if (isNumber(format)) {
	            index = format;
	            format = undefined;
	        }

	        format = format || '';

	        if (index != null) {
	            return get$1(format, index, field, 'month');
	        }

	        var i,
	            out = [];
	        for (i = 0; i < 12; i++) {
	            out[i] = get$1(format, i, field, 'month');
	        }
	        return out;
	    }

	    // ()
	    // (5)
	    // (fmt, 5)
	    // (fmt)
	    // (true)
	    // (true, 5)
	    // (true, fmt, 5)
	    // (true, fmt)
	    function listWeekdaysImpl(localeSorted, format, index, field) {
	        if (typeof localeSorted === 'boolean') {
	            if (isNumber(format)) {
	                index = format;
	                format = undefined;
	            }

	            format = format || '';
	        } else {
	            format = localeSorted;
	            index = format;
	            localeSorted = false;

	            if (isNumber(format)) {
	                index = format;
	                format = undefined;
	            }

	            format = format || '';
	        }

	        var locale = getLocale(),
	            shift = localeSorted ? locale._week.dow : 0,
	            i,
	            out = [];

	        if (index != null) {
	            return get$1(format, (index + shift) % 7, field, 'day');
	        }

	        for (i = 0; i < 7; i++) {
	            out[i] = get$1(format, (i + shift) % 7, field, 'day');
	        }
	        return out;
	    }

	    function listMonths(format, index) {
	        return listMonthsImpl(format, index, 'months');
	    }

	    function listMonthsShort(format, index) {
	        return listMonthsImpl(format, index, 'monthsShort');
	    }

	    function listWeekdays(localeSorted, format, index) {
	        return listWeekdaysImpl(localeSorted, format, index, 'weekdays');
	    }

	    function listWeekdaysShort(localeSorted, format, index) {
	        return listWeekdaysImpl(localeSorted, format, index, 'weekdaysShort');
	    }

	    function listWeekdaysMin(localeSorted, format, index) {
	        return listWeekdaysImpl(localeSorted, format, index, 'weekdaysMin');
	    }

	    getSetGlobalLocale('en', {
	        eras: [
	            {
	                since: '0001-01-01',
	                until: +Infinity,
	                offset: 1,
	                name: 'Anno Domini',
	                narrow: 'AD',
	                abbr: 'AD',
	            },
	            {
	                since: '0000-12-31',
	                until: -Infinity,
	                offset: 1,
	                name: 'Before Christ',
	                narrow: 'BC',
	                abbr: 'BC',
	            },
	        ],
	        dayOfMonthOrdinalParse: /\d{1,2}(th|st|nd|rd)/,
	        ordinal: function (number) {
	            var b = number % 10,
	                output =
	                    toInt((number % 100) / 10) === 1
	                        ? 'th'
	                        : b === 1
	                          ? 'st'
	                          : b === 2
	                            ? 'nd'
	                            : b === 3
	                              ? 'rd'
	                              : 'th';
	            return number + output;
	        },
	    });

	    // Side effect imports

	    hooks.lang = deprecate(
	        'moment.lang is deprecated. Use moment.locale instead.',
	        getSetGlobalLocale
	    );
	    hooks.langData = deprecate(
	        'moment.langData is deprecated. Use moment.localeData instead.',
	        getLocale
	    );

	    var mathAbs = Math.abs;

	    function abs() {
	        var data = this._data;

	        this._milliseconds = mathAbs(this._milliseconds);
	        this._days = mathAbs(this._days);
	        this._months = mathAbs(this._months);

	        data.milliseconds = mathAbs(data.milliseconds);
	        data.seconds = mathAbs(data.seconds);
	        data.minutes = mathAbs(data.minutes);
	        data.hours = mathAbs(data.hours);
	        data.months = mathAbs(data.months);
	        data.years = mathAbs(data.years);

	        return this;
	    }

	    function addSubtract$1(duration, input, value, direction) {
	        var other = createDuration(input, value);

	        duration._milliseconds += direction * other._milliseconds;
	        duration._days += direction * other._days;
	        duration._months += direction * other._months;

	        return duration._bubble();
	    }

	    // supports only 2.0-style add(1, 's') or add(duration)
	    function add$1(input, value) {
	        return addSubtract$1(this, input, value, 1);
	    }

	    // supports only 2.0-style subtract(1, 's') or subtract(duration)
	    function subtract$1(input, value) {
	        return addSubtract$1(this, input, value, -1);
	    }

	    function absCeil(number) {
	        if (number < 0) {
	            return Math.floor(number);
	        } else {
	            return Math.ceil(number);
	        }
	    }

	    function bubble() {
	        var milliseconds = this._milliseconds,
	            days = this._days,
	            months = this._months,
	            data = this._data,
	            seconds,
	            minutes,
	            hours,
	            years,
	            monthsFromDays;

	        // if we have a mix of positive and negative values, bubble down first
	        // check: https://github.com/moment/moment/issues/2166
	        if (
	            !(
	                (milliseconds >= 0 && days >= 0 && months >= 0) ||
	                (milliseconds <= 0 && days <= 0 && months <= 0)
	            )
	        ) {
	            milliseconds += absCeil(monthsToDays(months) + days) * 864e5;
	            days = 0;
	            months = 0;
	        }

	        // The following code bubbles up values, see the tests for
	        // examples of what that means.
	        data.milliseconds = milliseconds % 1000;

	        seconds = absFloor(milliseconds / 1000);
	        data.seconds = seconds % 60;

	        minutes = absFloor(seconds / 60);
	        data.minutes = minutes % 60;

	        hours = absFloor(minutes / 60);
	        data.hours = hours % 24;

	        days += absFloor(hours / 24);

	        // convert days to months
	        monthsFromDays = absFloor(daysToMonths(days));
	        months += monthsFromDays;
	        days -= absCeil(monthsToDays(monthsFromDays));

	        // 12 months -> 1 year
	        years = absFloor(months / 12);
	        months %= 12;

	        data.days = days;
	        data.months = months;
	        data.years = years;

	        return this;
	    }

	    function daysToMonths(days) {
	        // 400 years have 146097 days (taking into account leap year rules)
	        // 400 years have 12 months === 4800
	        return (days * 4800) / 146097;
	    }

	    function monthsToDays(months) {
	        // the reverse of daysToMonths
	        return (months * 146097) / 4800;
	    }

	    function as(units) {
	        if (!this.isValid()) {
	            return NaN;
	        }
	        var days,
	            months,
	            milliseconds = this._milliseconds;

	        units = normalizeUnits(units);

	        if (units === 'month' || units === 'quarter' || units === 'year') {
	            days = this._days + milliseconds / 864e5;
	            months = this._months + daysToMonths(days);
	            switch (units) {
	                case 'month':
	                    return months;
	                case 'quarter':
	                    return months / 3;
	                case 'year':
	                    return months / 12;
	            }
	        } else {
	            // handle milliseconds separately because of floating point math errors (issue #1867)
	            days = this._days + Math.round(monthsToDays(this._months));
	            switch (units) {
	                case 'week':
	                    return days / 7 + milliseconds / 6048e5;
	                case 'day':
	                    return days + milliseconds / 864e5;
	                case 'hour':
	                    return days * 24 + milliseconds / 36e5;
	                case 'minute':
	                    return days * 1440 + milliseconds / 6e4;
	                case 'second':
	                    return days * 86400 + milliseconds / 1000;
	                // Math.floor prevents floating point math errors here
	                case 'millisecond':
	                    return Math.floor(days * 864e5) + milliseconds;
	                default:
	                    throw new Error('Unknown unit ' + units);
	            }
	        }
	    }

	    function makeAs(alias) {
	        return function () {
	            return this.as(alias);
	        };
	    }

	    var asMilliseconds = makeAs('ms'),
	        asSeconds = makeAs('s'),
	        asMinutes = makeAs('m'),
	        asHours = makeAs('h'),
	        asDays = makeAs('d'),
	        asWeeks = makeAs('w'),
	        asMonths = makeAs('M'),
	        asQuarters = makeAs('Q'),
	        asYears = makeAs('y'),
	        valueOf$1 = asMilliseconds;

	    function clone$1() {
	        return createDuration(this);
	    }

	    function get$2(units) {
	        units = normalizeUnits(units);
	        return this.isValid() ? this[units + 's']() : NaN;
	    }

	    function makeGetter(name) {
	        return function () {
	            return this.isValid() ? this._data[name] : NaN;
	        };
	    }

	    var milliseconds = makeGetter('milliseconds'),
	        seconds = makeGetter('seconds'),
	        minutes = makeGetter('minutes'),
	        hours = makeGetter('hours'),
	        days = makeGetter('days'),
	        months = makeGetter('months'),
	        years = makeGetter('years');

	    function weeks() {
	        return absFloor(this.days() / 7);
	    }

	    var round = Math.round,
	        thresholds = {
	            ss: 44, // a few seconds to seconds
	            s: 45, // seconds to minute
	            m: 45, // minutes to hour
	            h: 22, // hours to day
	            d: 26, // days to month/week
	            w: null, // weeks to month
	            M: 11, // months to year
	        };

	    // helper function for moment.fn.from, moment.fn.fromNow, and moment.duration.fn.humanize
	    function substituteTimeAgo(string, number, withoutSuffix, isFuture, locale) {
	        return locale.relativeTime(number || 1, !!withoutSuffix, string, isFuture);
	    }

	    function relativeTime$1(posNegDuration, withoutSuffix, thresholds, locale) {
	        var duration = createDuration(posNegDuration).abs(),
	            seconds = round(duration.as('s')),
	            minutes = round(duration.as('m')),
	            hours = round(duration.as('h')),
	            days = round(duration.as('d')),
	            months = round(duration.as('M')),
	            weeks = round(duration.as('w')),
	            years = round(duration.as('y')),
	            a =
	                (seconds <= thresholds.ss && ['s', seconds]) ||
	                (seconds < thresholds.s && ['ss', seconds]) ||
	                (minutes <= 1 && ['m']) ||
	                (minutes < thresholds.m && ['mm', minutes]) ||
	                (hours <= 1 && ['h']) ||
	                (hours < thresholds.h && ['hh', hours]) ||
	                (days <= 1 && ['d']) ||
	                (days < thresholds.d && ['dd', days]);

	        if (thresholds.w != null) {
	            a =
	                a ||
	                (weeks <= 1 && ['w']) ||
	                (weeks < thresholds.w && ['ww', weeks]);
	        }
	        a = a ||
	            (months <= 1 && ['M']) ||
	            (months < thresholds.M && ['MM', months]) ||
	            (years <= 1 && ['y']) || ['yy', years];

	        a[2] = withoutSuffix;
	        a[3] = +posNegDuration > 0;
	        a[4] = locale;
	        return substituteTimeAgo.apply(null, a);
	    }

	    // This function allows you to set the rounding function for relative time strings
	    function getSetRelativeTimeRounding(roundingFunction) {
	        if (roundingFunction === undefined) {
	            return round;
	        }
	        if (typeof roundingFunction === 'function') {
	            round = roundingFunction;
	            return true;
	        }
	        return false;
	    }

	    // This function allows you to set a threshold for relative time strings
	    function getSetRelativeTimeThreshold(threshold, limit) {
	        if (thresholds[threshold] === undefined) {
	            return false;
	        }
	        if (limit === undefined) {
	            return thresholds[threshold];
	        }
	        thresholds[threshold] = limit;
	        if (threshold === 's') {
	            thresholds.ss = limit - 1;
	        }
	        return true;
	    }

	    function humanize(argWithSuffix, argThresholds) {
	        if (!this.isValid()) {
	            return this.localeData().invalidDate();
	        }

	        var withSuffix = false,
	            th = thresholds,
	            locale,
	            output;

	        if (typeof argWithSuffix === 'object') {
	            argThresholds = argWithSuffix;
	            argWithSuffix = false;
	        }
	        if (typeof argWithSuffix === 'boolean') {
	            withSuffix = argWithSuffix;
	        }
	        if (typeof argThresholds === 'object') {
	            th = Object.assign({}, thresholds, argThresholds);
	            if (argThresholds.s != null && argThresholds.ss == null) {
	                th.ss = argThresholds.s - 1;
	            }
	        }

	        locale = this.localeData();
	        output = relativeTime$1(this, !withSuffix, th, locale);

	        if (withSuffix) {
	            output = locale.pastFuture(+this, output);
	        }

	        return locale.postformat(output);
	    }

	    var abs$1 = Math.abs;

	    function sign(x) {
	        return (x > 0) - (x < 0) || +x;
	    }

	    function toISOString$1() {
	        // for ISO strings we do not use the normal bubbling rules:
	        //  * milliseconds bubble up until they become hours
	        //  * days do not bubble at all
	        //  * months bubble up until they become years
	        // This is because there is no context-free conversion between hours and days
	        // (think of clock changes)
	        // and also not between days and months (28-31 days per month)
	        if (!this.isValid()) {
	            return this.localeData().invalidDate();
	        }

	        var seconds = abs$1(this._milliseconds) / 1000,
	            days = abs$1(this._days),
	            months = abs$1(this._months),
	            minutes,
	            hours,
	            years,
	            s,
	            total = this.asSeconds(),
	            totalSign,
	            ymSign,
	            daysSign,
	            hmsSign;

	        if (!total) {
	            // this is the same as C#'s (Noda) and python (isodate)...
	            // but not other JS (goog.date)
	            return 'P0D';
	        }

	        // 3600 seconds -> 60 minutes -> 1 hour
	        minutes = absFloor(seconds / 60);
	        hours = absFloor(minutes / 60);
	        seconds %= 60;
	        minutes %= 60;

	        // 12 months -> 1 year
	        years = absFloor(months / 12);
	        months %= 12;

	        // inspired by https://github.com/dordille/moment-isoduration/blob/master/moment.isoduration.js
	        s = seconds ? seconds.toFixed(3).replace(/\.?0+$/, '') : '';

	        totalSign = total < 0 ? '-' : '';
	        ymSign = sign(this._months) !== sign(total) ? '-' : '';
	        daysSign = sign(this._days) !== sign(total) ? '-' : '';
	        hmsSign = sign(this._milliseconds) !== sign(total) ? '-' : '';

	        return (
	            totalSign +
	            'P' +
	            (years ? ymSign + years + 'Y' : '') +
	            (months ? ymSign + months + 'M' : '') +
	            (days ? daysSign + days + 'D' : '') +
	            (hours || minutes || seconds ? 'T' : '') +
	            (hours ? hmsSign + hours + 'H' : '') +
	            (minutes ? hmsSign + minutes + 'M' : '') +
	            (seconds ? hmsSign + s + 'S' : '')
	        );
	    }

	    var proto$2 = Duration.prototype;

	    proto$2.isValid = isValid$1;
	    proto$2.abs = abs;
	    proto$2.add = add$1;
	    proto$2.subtract = subtract$1;
	    proto$2.as = as;
	    proto$2.asMilliseconds = asMilliseconds;
	    proto$2.asSeconds = asSeconds;
	    proto$2.asMinutes = asMinutes;
	    proto$2.asHours = asHours;
	    proto$2.asDays = asDays;
	    proto$2.asWeeks = asWeeks;
	    proto$2.asMonths = asMonths;
	    proto$2.asQuarters = asQuarters;
	    proto$2.asYears = asYears;
	    proto$2.valueOf = valueOf$1;
	    proto$2._bubble = bubble;
	    proto$2.clone = clone$1;
	    proto$2.get = get$2;
	    proto$2.milliseconds = milliseconds;
	    proto$2.seconds = seconds;
	    proto$2.minutes = minutes;
	    proto$2.hours = hours;
	    proto$2.days = days;
	    proto$2.weeks = weeks;
	    proto$2.months = months;
	    proto$2.years = years;
	    proto$2.humanize = humanize;
	    proto$2.toISOString = toISOString$1;
	    proto$2.toString = toISOString$1;
	    proto$2.toJSON = toISOString$1;
	    proto$2.locale = locale;
	    proto$2.localeData = localeData;

	    proto$2.toIsoString = deprecate(
	        'toIsoString() is deprecated. Please use toISOString() instead (notice the capitals)',
	        toISOString$1
	    );
	    proto$2.lang = lang;

	    // FORMATTING

	    addFormatToken('X', 0, 0, 'unix');
	    addFormatToken('x', 0, 0, 'valueOf');

	    // PARSING

	    addRegexToken('x', matchSigned);
	    addRegexToken('X', matchTimestamp);
	    addParseToken('X', function (input, array, config) {
	        config._d = new Date(parseFloat(input) * 1000);
	    });
	    addParseToken('x', function (input, array, config) {
	        config._d = new Date(toInt(input));
	    });

	    //! moment.js

	    hooks.version = '2.30.1';

	    setHookCallback(createLocal);

	    hooks.fn = proto;
	    hooks.min = min;
	    hooks.max = max;
	    hooks.now = now;
	    hooks.utc = createUTC;
	    hooks.unix = createUnix;
	    hooks.months = listMonths;
	    hooks.isDate = isDate;
	    hooks.locale = getSetGlobalLocale;
	    hooks.invalid = createInvalid;
	    hooks.duration = createDuration;
	    hooks.isMoment = isMoment;
	    hooks.weekdays = listWeekdays;
	    hooks.parseZone = createInZone;
	    hooks.localeData = getLocale;
	    hooks.isDuration = isDuration;
	    hooks.monthsShort = listMonthsShort;
	    hooks.weekdaysMin = listWeekdaysMin;
	    hooks.defineLocale = defineLocale;
	    hooks.updateLocale = updateLocale;
	    hooks.locales = listLocales;
	    hooks.weekdaysShort = listWeekdaysShort;
	    hooks.normalizeUnits = normalizeUnits;
	    hooks.relativeTimeRounding = getSetRelativeTimeRounding;
	    hooks.relativeTimeThreshold = getSetRelativeTimeThreshold;
	    hooks.calendarFormat = getCalendarFormat;
	    hooks.prototype = proto;

	    // currently HTML5 input type only supports 24-hour formats
	    hooks.HTML5_FMT = {
	        DATETIME_LOCAL: 'YYYY-MM-DDTHH:mm', // <input type="datetime-local" />
	        DATETIME_LOCAL_SECONDS: 'YYYY-MM-DDTHH:mm:ss', // <input type="datetime-local" step="1" />
	        DATETIME_LOCAL_MS: 'YYYY-MM-DDTHH:mm:ss.SSS', // <input type="datetime-local" step="0.001" />
	        DATE: 'YYYY-MM-DD', // <input type="date" />
	        TIME: 'HH:mm', // <input type="time" />
	        TIME_SECONDS: 'HH:mm:ss', // <input type="time" step="1" />
	        TIME_MS: 'HH:mm:ss.SSS', // <input type="time" step="0.001" />
	        WEEK: 'GGGG-[W]WW', // <input type="week" />
	        MONTH: 'YYYY-MM', // <input type="month" />
	    };

	    return hooks;

	}))); 
} (moment$1, moment$1.exports));

var momentExports = moment$1.exports;
var moment = /*@__PURE__*/getDefaultExportFromCjs(momentExports);var css$6 = "\r\n/* Fijar ancho de la columna de acciones */\n.actions-cell[data-v-36cccca8] {\r\n  width: 1%;\r\n  white-space: nowrap;\n}\n.actions-button-group[data-v-36cccca8] {\r\n  display: inline-flex;\r\n  flex-wrap: nowrap;\n}\n.actions-dropdown[data-v-36cccca8] {\r\n  display: inline-block;\n}\r\n\r\n/* Asegurar que los botones no se expandan */\n.actions-button-group .btn[data-v-36cccca8] {\r\n  flex-shrink: 0;\n}\r\n";
n(css$6, {});var _sfc_main$c = {
  name: 'TableCell',
  props: {
    column: Object,
    item: Object,
    index: Number,
    columnIndex: Number
  },
  inject: ['bootstrapFactory', 'itemValue', 'getStateValue', 'getStateOptions', 'getStateBadgeVariant', 'getArrayValue', 'onCheckSelect', 'showItem', 'updateItem', 'removeItem', 'optionsLoaded'],
  data: function data() {
    return {
      moment: moment
    };
  },
  computed: {
    stateOptions: function stateOptions() {
      // Permitir usar opciones incluso si optionsLoaded es false, ya que getStateOptions normaliza internamente
      if (this.column.type === 'state' && this.column.options && Array.isArray(this.column.options)) {
        var itemVal = this.itemValue(this.column, this.item);
        var options = this.column.options;
        var result = this.getStateOptions(itemVal, options);
        return result;
      }
      return [];
    }
  },
  methods: {
    formatNumber: function formatNumber(value, column) {
      if (value === null || value === undefined || value === '') {
        return '';
      }
      var numValue = parseFloat(value);
      if (isNaN(numValue)) {
        return value;
      }
      var thousandsSep = column.thousandsSeparator || '.';
      var decimalSep = column.decimalSeparator || ',';
      var decimals = column.decimals !== undefined ? column.decimals : numValue % 1 === 0 ? 0 : 2;

      // Formatear número con separadores
      var parts = numValue.toFixed(decimals).split('.');
      var integerPart = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, thousandsSep);
      var decimalPart = parts[1] || '';
      if (decimals > 0 && decimalPart) {
        return "".concat(integerPart).concat(decimalSep).concat(decimalPart);
      }
      return integerPart;
    },
    formatMoney: function formatMoney(value, column) {
      var formatted = this.formatNumber(value, column);
      if (formatted === '') {
        return '';
      }
      var symbol = column.symbol || '$';
      return "".concat(symbol).concat(formatted);
    }
  }
};
var _hoisted_1$c = ["scope"];
var _hoisted_2$8 = {
  key: 0
};
var _hoisted_3$8 = {
  key: 1
};
var _hoisted_4$7 = {
  key: 2
};
var _hoisted_5$5 = {
  key: 3
};
var _hoisted_6$3 = {
  key: 4
};
var _hoisted_7$3 = {
  key: 1
};
var _hoisted_8$3 = {
  key: 5
};
var _hoisted_9$2 = {
  key: 6
};
var _hoisted_10$2 = {
  key: 7
};
var _hoisted_11$1 = {
  key: 8
};
function _sfc_render$c(_ctx, _cache, $props, $setup, $data, $options) {
  var _component_b_icon_check_circle = require$$0.resolveComponent("b-icon-check-circle");
  var _component_b_badge = require$$0.resolveComponent("b-badge");
  var _component_b_icon_x_circle = require$$0.resolveComponent("b-icon-x-circle");
  var _component_b_form_checkbox = require$$0.resolveComponent("b-form-checkbox");
  var _component_b_icon_list = require$$0.resolveComponent("b-icon-list");
  var _component_b_icon_eye = require$$0.resolveComponent("b-icon-eye");
  var _component_b_dropdown_item = require$$0.resolveComponent("b-dropdown-item");
  var _component_b_icon_pencil = require$$0.resolveComponent("b-icon-pencil");
  var _component_b_icon_trash = require$$0.resolveComponent("b-icon-trash");
  var _component_b_dropdown = require$$0.resolveComponent("b-dropdown");
  var _component_b_button = require$$0.resolveComponent("b-button");
  var _component_b_button_group = require$$0.resolveComponent("b-button-group");
  return require$$0.openBlock(), require$$0.createElementBlock("td", {
    scope: $props.column.prop == 'id' ? 'row' : '',
    class: require$$0.normalizeClass({
      'actions-cell': $props.column.type == 'actions'
    })
  }, [!$props.column.hideColumn ? (require$$0.openBlock(), require$$0.createElementBlock(require$$0.Fragment, {
    key: 0
  }, [require$$0.renderSlot(_ctx.$slots, 'cell-' + $props.column.prop, {
    item: $props.item,
    index: $props.index,
    itemindex: $props.index,
    columnindex: $props.columnIndex
  }, function () {
    return [$props.column.type == 'boolean' ? (require$$0.openBlock(), require$$0.createElementBlock("span", _hoisted_2$8, [$options.itemValue($props.column, $props.item) == 'true' || $options.itemValue($props.column, $props.item) == 1 || $options.itemValue($props.column, $props.item) == '1' ? (require$$0.openBlock(), require$$0.createBlock(_component_b_badge, {
      key: 0,
      variant: "success"
    }, {
      default: require$$0.withCtx(function () {
        return [require$$0.createVNode(_component_b_icon_check_circle)];
      }),
      _: 1 /* STABLE */
    })) : require$$0.createCommentVNode("v-if", true), !$options.itemValue($props.column, $props.item) || $options.itemValue($props.column, $props.item) == '0' || $options.itemValue($props.column, $props.item) == 'false' ? (require$$0.openBlock(), require$$0.createBlock(_component_b_badge, {
      key: 1,
      variant: "danger"
    }, {
      default: require$$0.withCtx(function () {
        return [require$$0.createVNode(_component_b_icon_x_circle)];
      }),
      _: 1 /* STABLE */
    })) : require$$0.createCommentVNode("v-if", true)])) : $props.column.type == 'date' ? (require$$0.openBlock(), require$$0.createElementBlock("span", _hoisted_3$8, require$$0.toDisplayString($options.itemValue($props.column, $props.item) ? $data.moment($options.itemValue($props.column, $props.item)).format($props.column.format ? $props.column.format : 'L LT') : $options.itemValue($props.column, $props.item)), 1 /* TEXT */)) : $props.column.type == 'select' ? (require$$0.openBlock(), require$$0.createElementBlock("span", _hoisted_4$7, [require$$0.createVNode(_component_b_form_checkbox, {
      modelValue: $props.item.selected,
      "onUpdate:modelValue": _cache[0] || (_cache[0] = function ($event) {
        return $props.item.selected = $event;
      }),
      onChange: _cache[1] || (_cache[1] = function ($event) {
        return $options.onCheckSelect($event, $props.item);
      })
    }, null, 8 /* PROPS */, ["modelValue"])])) : $props.column.type == 'checkbox' ? (require$$0.openBlock(), require$$0.createElementBlock("span", _hoisted_5$5, [require$$0.createVNode(_component_b_form_checkbox, {
      modelValue: $props.item.selected,
      "onUpdate:modelValue": _cache[2] || (_cache[2] = function ($event) {
        return $props.item.selected = $event;
      }),
      onChange: _cache[3] || (_cache[3] = function ($event) {
        return $options.onCheckSelect($event, $props.item);
      })
    }, null, 8 /* PROPS */, ["modelValue"])])) : $props.column.type == 'state' ? (require$$0.openBlock(), require$$0.createElementBlock("span", _hoisted_6$3, [$options.stateOptions.length > 0 ? (require$$0.openBlock(true), require$$0.createElementBlock(require$$0.Fragment, {
      key: 0
    }, require$$0.renderList($options.stateOptions, function (option, optIndex) {
      return require$$0.openBlock(), require$$0.createBlock(_component_b_badge, {
        key: optIndex,
        variant: $options.getStateBadgeVariant(option),
        class: "mr-1"
      }, {
        default: require$$0.withCtx(function () {
          return [require$$0.createTextVNode(require$$0.toDisplayString(option.text), 1 /* TEXT */)];
        }),
        _: 2 /* DYNAMIC */
      }, 1032 /* PROPS, DYNAMIC_SLOTS */, ["variant"]);
    }), 128 /* KEYED_FRAGMENT */)) : (require$$0.openBlock(), require$$0.createElementBlock("span", _hoisted_7$3, require$$0.toDisplayString($options.itemValue($props.column, $props.item)), 1 /* TEXT */))])) : $props.column.type == 'array' && $options.optionsLoaded ? (require$$0.openBlock(), require$$0.createElementBlock("span", _hoisted_8$3, require$$0.toDisplayString($options.getArrayValue($options.itemValue($props.column, $props.item), $props.column.displayProp, $props.column.options)), 1 /* TEXT */)) : $props.column.type == 'money' || $props.column.type == 'price' ? (require$$0.openBlock(), require$$0.createElementBlock("span", _hoisted_9$2, require$$0.toDisplayString($options.formatMoney($options.itemValue($props.column, $props.item), $props.column)), 1 /* TEXT */)) : $props.column.type == 'number' && ($props.column.thousandsSeparator || $props.column.decimalSeparator || $props.column.decimals !== undefined) ? (require$$0.openBlock(), require$$0.createElementBlock("span", _hoisted_10$2, require$$0.toDisplayString($options.formatNumber($options.itemValue($props.column, $props.item), $props.column)), 1 /* TEXT */)) : (require$$0.openBlock(), require$$0.createElementBlock("span", _hoisted_11$1, require$$0.toDisplayString($options.itemValue($props.column, $props.item)), 1 /* TEXT */))];
  }, true), require$$0.createCommentVNode(" Modo dropdown cuando useDropdown está activo "), $props.column.type == 'actions' && $props.column.useDropdown ? (require$$0.openBlock(), require$$0.createBlock(_component_b_dropdown, {
    key: 0,
    variant: "secondary",
    size: "sm",
    class: "actions-dropdown"
  }, {
    "button-content": require$$0.withCtx(function () {
      return [require$$0.createVNode(_component_b_icon_list)];
    }),
    default: require$$0.withCtx(function () {
      return [require$$0.renderSlot(_ctx.$slots, "rowActions", {
        item: $props.item,
        index: $props.index,
        showItem: $options.showItem,
        updateItem: $options.updateItem,
        removeItem: $options.removeItem
      }, function () {
        return [require$$0.renderSlot(_ctx.$slots, "rowAction", {
          item: $props.item,
          index: $props.index,
          showItem: $options.showItem,
          updateItem: $options.updateItem,
          removeItem: $options.removeItem
        }, function () {
          return [require$$0.createVNode(_component_b_dropdown_item, {
            onClick: _cache[4] || (_cache[4] = function ($event) {
              return $options.showItem($props.item.id, $props.index);
            })
          }, {
            default: require$$0.withCtx(function () {
              return [require$$0.createVNode(_component_b_icon_eye), _cache[10] || (_cache[10] = require$$0.createTextVNode(" Ver ", -1 /* CACHED */))];
            }),
            _: 1 /* STABLE */
          }), require$$0.createVNode(_component_b_dropdown_item, {
            onClick: _cache[5] || (_cache[5] = function ($event) {
              return $options.updateItem($props.item.id, $props.index);
            })
          }, {
            default: require$$0.withCtx(function () {
              return [require$$0.createVNode(_component_b_icon_pencil), _cache[11] || (_cache[11] = require$$0.createTextVNode(" Editar ", -1 /* CACHED */))];
            }),
            _: 1 /* STABLE */
          }), require$$0.createVNode(_component_b_dropdown_item, {
            onClick: _cache[6] || (_cache[6] = function ($event) {
              return $options.removeItem($props.item.id, $props.index);
            }),
            class: "text-danger"
          }, {
            default: require$$0.withCtx(function () {
              return [require$$0.createVNode(_component_b_icon_trash), _cache[12] || (_cache[12] = require$$0.createTextVNode(" Eliminar ", -1 /* CACHED */))];
            }),
            _: 1 /* STABLE */
          })];
        }, true)];
      }, true)];
    }),
    _: 3 /* FORWARDED */
  })) : $props.column.type == 'actions' ? (require$$0.openBlock(), require$$0.createElementBlock(require$$0.Fragment, {
    key: 1
  }, [require$$0.createCommentVNode(" Modo botones normal (comportamiento original) "), require$$0.createVNode(_component_b_button_group, {
    class: "actions-button-group"
  }, {
    default: require$$0.withCtx(function () {
      return [require$$0.renderSlot(_ctx.$slots, "rowActions", {
        item: $props.item,
        index: $props.index,
        showItem: $options.showItem,
        updateItem: $options.updateItem,
        removeItem: $options.removeItem
      }, function () {
        return [require$$0.renderSlot(_ctx.$slots, "rowAction", {
          item: $props.item,
          index: $props.index,
          showItem: $options.showItem,
          updateItem: $options.updateItem,
          removeItem: $options.removeItem
        }, function () {
          return [require$$0.createVNode(_component_b_button, {
            variant: "primary",
            onClick: _cache[7] || (_cache[7] = function ($event) {
              return $options.showItem($props.item.id, $props.index);
            })
          }, {
            default: require$$0.withCtx(function () {
              return [require$$0.createVNode(_component_b_icon_eye)];
            }),
            _: 1 /* STABLE */
          }), require$$0.createVNode(_component_b_button, {
            variant: "secondary",
            onClick: _cache[8] || (_cache[8] = function ($event) {
              return $options.updateItem($props.item.id, $props.index);
            })
          }, {
            default: require$$0.withCtx(function () {
              return [require$$0.createVNode(_component_b_icon_pencil)];
            }),
            _: 1 /* STABLE */
          }), require$$0.createVNode(_component_b_button, {
            variant: "danger",
            onClick: _cache[9] || (_cache[9] = function ($event) {
              return $options.removeItem($props.item.id, $props.index);
            })
          }, {
            default: require$$0.withCtx(function () {
              return [require$$0.createVNode(_component_b_icon_trash)];
            }),
            _: 1 /* STABLE */
          })];
        }, true)];
      }, true)];
    }),
    _: 3 /* FORWARDED */
  })], 2112 /* STABLE_FRAGMENT, DEV_ROOT_FRAGMENT */)) : require$$0.createCommentVNode("v-if", true)], 64 /* STABLE_FRAGMENT */)) : require$$0.createCommentVNode("v-if", true)], 10 /* CLASS, PROPS */, _hoisted_1$c);
}
var TableCell = /*#__PURE__*/_export_sfc(_sfc_main$c, [['render', _sfc_render$c], ['__scopeId', "data-v-36cccca8"]]);var _sfc_main$b = {
  name: 'TableRow',
  components: {
    TableCell: TableCell
  },
  props: {
    item: Object,
    index: Number,
    grouped: Boolean
  },
  inject: ['columns', 'onRowHover', 'onRowClick', 'isColumnVisibleInTable'],
  computed: {
    visibleColumnsCount: function visibleColumnsCount() {
      var _this = this;
      if (!this.columns || !this.isColumnVisibleInTable) {
        return this.columns && this.columns.length || 1;
      }
      return this.columns.filter(function (column) {
        return _this.isColumnVisibleInTable(column);
      }).length || 1;
    }
  }
};
var _hoisted_1$b = ["colspan"];
function _sfc_render$b(_ctx, _cache, $props, $setup, $data, $options) {
  var _component_TableCell = require$$0.resolveComponent("TableCell");
  return require$$0.openBlock(), require$$0.createElementBlock("tr", {
    onMouseover: _cache[0] || (_cache[0] = function ($event) {
      return $options.onRowHover($props.item, $props.index);
    }),
    onClick: _cache[1] || (_cache[1] = function ($event) {
      return $options.onRowClick($props.item, $props.index);
    }),
    class: require$$0.normalizeClass(['item', {
      'selected': $props.item.selected
    }])
  }, [$props.grouped && $props.item.crudgroup ? (require$$0.openBlock(), require$$0.createElementBlock("th", {
    key: 0,
    colspan: $options.visibleColumnsCount
  }, [require$$0.createElementVNode("span", null, require$$0.toDisplayString($props.item.crudgrouplabel), 1 /* TEXT */)], 8 /* PROPS */, _hoisted_1$b)) : require$$0.renderSlot(_ctx.$slots, "row", {
    key: 1,
    item: $props.item
  }, function () {
    return [(require$$0.openBlock(true), require$$0.createElementBlock(require$$0.Fragment, null, require$$0.renderList($options.columns, function (column, indexc) {
      return require$$0.openBlock(), require$$0.createElementBlock(require$$0.Fragment, {
        key: indexc
      }, [$options.isColumnVisibleInTable(column) ? (require$$0.openBlock(), require$$0.createBlock(_component_TableCell, {
        key: 0,
        column: column,
        item: $props.item,
        index: $props.index,
        columnIndex: indexc
      }, require$$0.createSlots({
        _: 2 /* DYNAMIC */
      }, [require$$0.renderList(_ctx.$slots, function (_, name) {
        return {
          name: name,
          fn: require$$0.withCtx(function (slotProps) {
            return [require$$0.renderSlot(_ctx.$slots, name, require$$0.mergeProps({
              ref_for: true
            }, slotProps))];
          })
        };
      })]), 1032 /* PROPS, DYNAMIC_SLOTS */, ["column", "item", "index", "columnIndex"])) : require$$0.createCommentVNode("v-if", true)], 64 /* STABLE_FRAGMENT */);
    }), 128 /* KEYED_FRAGMENT */))];
  })], 34 /* CLASS, NEED_HYDRATION */);
}
var TableRow = /*#__PURE__*/_export_sfc(_sfc_main$b, [['render', _sfc_render$b]]);var _sfc_main$a = {
  name: 'CrudTable',
  components: {
    draggable: draggable,
    TableHeader: TableHeader,
    TableRow: TableRow
  },
  inject: ['bootstrapFactory', 'displayMode', 'displayModes', 'tableContainerClass', 'tableClass', 'items', 'draggableGroup', 'orderable', 'draggableOptions', 'itemsList', 'grouped', 'loading', 'firstLoad', 'infiniteScroll', 'messageEmptyResults', 'messageLoading', 'onSort', 'onDraggableAdded', 'onDraggableChange'],
  data: function data() {
    return {
      drag: false
    };
  },
  computed: {
    currentDisplayMode: function currentDisplayMode() {
      if (!this.displayMode) return 1;
      if (this.displayMode.value !== undefined) {
        return this.displayMode.value;
      }
      if (typeof this.displayMode === 'function') {
        return this.displayMode();
      }
      return this.displayMode;
    },
    loadingValue: function loadingValue() {
      return this.loading && this.loading.value !== undefined ? this.loading.value : this.loading;
    },
    firstLoadValue: function firstLoadValue() {
      return this.firstLoad && this.firstLoad.value !== undefined ? this.firstLoad.value : this.firstLoad;
    }
  }
};
var _hoisted_1$a = {
  key: 0,
  class: "text-center p-5"
};
var _hoisted_2$7 = {
  class: "mt-2"
};
var _hoisted_3$7 = {
  key: 0,
  class: "p-3"
};
function _sfc_render$a(_ctx, _cache, $props, $setup, $data, $options) {
  var _component_b_spinner = require$$0.resolveComponent("b-spinner");
  var _component_TableHeader = require$$0.resolveComponent("TableHeader");
  var _component_TableRow = require$$0.resolveComponent("TableRow");
  var _component_draggable = require$$0.resolveComponent("draggable");
  return $options.currentDisplayMode == $options.displayModes.MODE_TABLE ? (require$$0.openBlock(), require$$0.createElementBlock("div", {
    key: 0,
    class: require$$0.normalizeClass(['table-responsive', $options.tableContainerClass])
  }, [require$$0.createCommentVNode(" Spinner durante la carga inicial "), $options.loadingValue || !$options.firstLoadValue ? (require$$0.openBlock(), require$$0.createElementBlock("div", _hoisted_1$a, [require$$0.createVNode(_component_b_spinner, {
    variant: "primary",
    label: "Cargando..."
  }), require$$0.createElementVNode("p", _hoisted_2$7, require$$0.toDisplayString($options.messageLoading), 1 /* TEXT */)])) : (require$$0.openBlock(), require$$0.createElementBlock(require$$0.Fragment, {
    key: 1
  }, [require$$0.createCommentVNode(" Tabla con datos "), require$$0.createElementVNode("table", {
    class: require$$0.normalizeClass(['table table-hover table-striped w-100', $options.tableClass])
  }, [require$$0.createVNode(_component_TableHeader), require$$0.createVNode(_component_draggable, {
    list: $options.items,
    group: $options.draggableGroup,
    tag: "tbody",
    draggable: $options.orderable ? '.item' : '.none',
    onStart: _cache[0] || (_cache[0] = function ($event) {
      return $data.drag = true;
    }),
    onEnd: _cache[1] || (_cache[1] = function ($event) {
      return $data.drag = false;
    }),
    onSort: _cache[2] || (_cache[2] = function ($event) {
      return $options.onSort();
    }),
    onAdd: _cache[3] || (_cache[3] = function ($event) {
      return $options.onDraggableAdded($event);
    }),
    onChange: _cache[4] || (_cache[4] = function ($event) {
      return $options.onDraggableChange($event);
    }),
    options: $options.draggableOptions,
    "item-key": "id"
  }, {
    item: require$$0.withCtx(function (_ref) {
      var element = _ref.element,
        index = _ref.index;
      return [require$$0.createVNode(_component_TableRow, {
        item: element,
        index: index,
        grouped: $options.grouped,
        class: "item"
      }, require$$0.createSlots({
        _: 2 /* DYNAMIC */
      }, [require$$0.renderList(_ctx.$slots, function (_, name) {
        return {
          name: name,
          fn: require$$0.withCtx(function (slotProps) {
            return [require$$0.renderSlot(_ctx.$slots, name, require$$0.normalizeProps(require$$0.guardReactiveProps(slotProps)))];
          })
        };
      })]), 1032 /* PROPS, DYNAMIC_SLOTS */, ["item", "index", "grouped"])];
    }),
    _: 3 /* FORWARDED */
  }, 8 /* PROPS */, ["list", "group", "draggable", "options"])], 2 /* CLASS */), $options.firstLoadValue && $options.itemsList && $options.itemsList.length == 0 && !$options.infiniteScroll ? (require$$0.openBlock(), require$$0.createElementBlock("p", _hoisted_3$7, require$$0.toDisplayString($options.messageEmptyResults), 1 /* TEXT */)) : require$$0.createCommentVNode("v-if", true)], 64 /* STABLE_FRAGMENT */))], 2 /* CLASS */)) : require$$0.createCommentVNode("v-if", true);
}
var CrudTable = /*#__PURE__*/_export_sfc(_sfc_main$a, [['render', _sfc_render$a]]);var _sfc_main$9 = {
  inject: ['bootstrapFactory'],
  props: {
    item: Object,
    columns: Array,
    index: Number,
    itemClass: {
      type: String,
      default: 'item'
    },
    cardClass: String,
    cardHideFooter: Boolean,
    itemValue: Function,
    getStateValue: Function,
    getStateOptions: Function,
    getStateBadgeVariant: Function,
    getArrayValue: Function,
    showItem: Function,
    updateItem: Function,
    removeItem: Function
  },
  methods: {
    getStateOptionsForColumn: function getStateOptionsForColumn(column, item) {
      if (column.type === 'state' && column.options) {
        return this.getStateOptions(this.itemValue(column, item), column.options);
      }
      return [];
    },
    formatNumber: function formatNumber(value, column) {
      if (value === null || value === undefined || value === '') {
        return '';
      }
      var numValue = parseFloat(value);
      if (isNaN(numValue)) {
        return value;
      }
      var thousandsSep = column.thousandsSeparator || '.';
      var decimalSep = column.decimalSeparator || ',';
      var decimals = column.decimals !== undefined ? column.decimals : numValue % 1 === 0 ? 0 : 2;

      // Formatear número con separadores
      var parts = numValue.toFixed(decimals).split('.');
      var integerPart = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, thousandsSep);
      var decimalPart = parts[1] || '';
      if (decimals > 0 && decimalPart) {
        return "".concat(integerPart).concat(decimalSep).concat(decimalPart);
      }
      return integerPart;
    },
    formatMoney: function formatMoney(value, column) {
      var formatted = this.formatNumber(value, column);
      if (formatted === '') {
        return '';
      }
      var symbol = column.symbol || '$';
      return "".concat(symbol).concat(formatted);
    }
  }
};
var _hoisted_1$9 = {
  key: 0
};
var _hoisted_2$6 = {
  key: 1
};
var _hoisted_3$6 = {
  key: 2
};
var _hoisted_4$6 = {
  key: 1
};
var _hoisted_5$4 = {
  key: 3
};
var _hoisted_6$2 = {
  key: 4
};
var _hoisted_7$2 = {
  key: 5
};
var _hoisted_8$2 = {
  key: 6
};
function _sfc_render$9(_ctx, _cache, $props, $setup, $data, $options) {
  var _component_b_icon_check_circle = require$$0.resolveComponent("b-icon-check-circle");
  var _component_b_badge = require$$0.resolveComponent("b-badge");
  var _component_b_icon_x_circle = require$$0.resolveComponent("b-icon-x-circle");
  var _component_b_card_text = require$$0.resolveComponent("b-card-text");
  var _component_b_icon_eye = require$$0.resolveComponent("b-icon-eye");
  var _component_b_button = require$$0.resolveComponent("b-button");
  var _component_b_icon_pencil = require$$0.resolveComponent("b-icon-pencil");
  var _component_b_icon_trash = require$$0.resolveComponent("b-icon-trash");
  var _component_b_button_group = require$$0.resolveComponent("b-button-group");
  var _component_b_card = require$$0.resolveComponent("b-card");
  return require$$0.openBlock(), require$$0.createElementBlock("div", {
    class: require$$0.normalizeClass($props.itemClass)
  }, [require$$0.createVNode(_component_b_card, {
    title: $props.item.title,
    tag: "article",
    class: require$$0.normalizeClass(["mb-2 card-crud", $props.cardClass]),
    "hide-footer": $props.cardHideFooter
  }, {
    footer: require$$0.withCtx(function () {
      return [require$$0.createVNode(_component_b_button_group, null, {
        default: require$$0.withCtx(function () {
          return [require$$0.renderSlot(_ctx.$slots, "rowActions", {
            item: $props.item,
            index: $props.index,
            showItem: $props.showItem,
            updateItem: $props.updateItem,
            removeItem: $props.removeItem
          }, function () {
            return [require$$0.renderSlot(_ctx.$slots, "rowAction", {
              item: $props.item,
              index: $props.index,
              showItem: $props.showItem,
              updateItem: $props.updateItem,
              removeItem: $props.removeItem
            }, function () {
              return [require$$0.createVNode(_component_b_button, {
                variant: "primary",
                onClick: _cache[0] || (_cache[0] = function ($event) {
                  return $props.showItem($props.item.id, $props.index);
                })
              }, {
                default: require$$0.withCtx(function () {
                  return [require$$0.createVNode(_component_b_icon_eye)];
                }),
                _: 1 /* STABLE */
              }), require$$0.createVNode(_component_b_button, {
                variant: "secondary",
                onClick: _cache[1] || (_cache[1] = function ($event) {
                  return $props.updateItem($props.item.id, $props.index);
                })
              }, {
                default: require$$0.withCtx(function () {
                  return [require$$0.createVNode(_component_b_icon_pencil)];
                }),
                _: 1 /* STABLE */
              }), require$$0.createVNode(_component_b_button, {
                variant: "danger",
                onClick: _cache[2] || (_cache[2] = function ($event) {
                  return $props.removeItem($props.item.id, $props.index);
                })
              }, {
                default: require$$0.withCtx(function () {
                  return [require$$0.createVNode(_component_b_icon_trash)];
                }),
                _: 1 /* STABLE */
              })];
            })];
          })];
        }),
        _: 3 /* FORWARDED */
      })];
    }),
    default: require$$0.withCtx(function () {
      return [require$$0.renderSlot(_ctx.$slots, "card", {
        item: $props.item
      }, function () {
        return [(require$$0.openBlock(true), require$$0.createElementBlock(require$$0.Fragment, null, require$$0.renderList($props.columns, function (column, indexc) {
          return require$$0.openBlock(), require$$0.createElementBlock("div", {
            key: indexc
          }, [column.type !== 'actions' ? (require$$0.openBlock(), require$$0.createBlock(_component_b_card_text, {
            key: 0
          }, {
            default: require$$0.withCtx(function () {
              return [require$$0.createTextVNode(require$$0.toDisplayString(column.label) + ": ", 1 /* TEXT */), require$$0.renderSlot(_ctx.$slots, 'cell-' + column.prop, {
                item: $props.item,
                index: $props.index,
                itemindex: $props.index,
                columnindex: indexc
              }, function () {
                return [column.type === 'boolean' ? (require$$0.openBlock(), require$$0.createElementBlock("span", _hoisted_1$9, [$props.itemValue(column, $props.item) ? (require$$0.openBlock(), require$$0.createBlock(_component_b_badge, {
                  key: 0,
                  variant: "success"
                }, {
                  default: require$$0.withCtx(function () {
                    return [require$$0.createVNode(_component_b_icon_check_circle)];
                  }),
                  _: 1 /* STABLE */
                })) : (require$$0.openBlock(), require$$0.createBlock(_component_b_badge, {
                  key: 1,
                  variant: "danger"
                }, {
                  default: require$$0.withCtx(function () {
                    return [require$$0.createVNode(_component_b_icon_x_circle)];
                  }),
                  _: 1 /* STABLE */
                }))])) : column.type === 'date' ? (require$$0.openBlock(), require$$0.createElementBlock("span", _hoisted_2$6, require$$0.toDisplayString($props.itemValue(column, $props.item)), 1 /* TEXT */)) : column.type === 'state' ? (require$$0.openBlock(), require$$0.createElementBlock("span", _hoisted_3$6, [$options.getStateOptionsForColumn(column, $props.item).length > 0 ? (require$$0.openBlock(true), require$$0.createElementBlock(require$$0.Fragment, {
                  key: 0
                }, require$$0.renderList($options.getStateOptionsForColumn(column, $props.item), function (option, optIndex) {
                  return require$$0.openBlock(), require$$0.createBlock(_component_b_badge, {
                    key: optIndex,
                    variant: $props.getStateBadgeVariant(option),
                    class: "mr-1"
                  }, {
                    default: require$$0.withCtx(function () {
                      return [require$$0.createTextVNode(require$$0.toDisplayString(option.text), 1 /* TEXT */)];
                    }),
                    _: 2 /* DYNAMIC */
                  }, 1032 /* PROPS, DYNAMIC_SLOTS */, ["variant"]);
                }), 128 /* KEYED_FRAGMENT */)) : (require$$0.openBlock(), require$$0.createElementBlock("span", _hoisted_4$6, require$$0.toDisplayString($props.itemValue(column, $props.item)), 1 /* TEXT */))])) : column.type === 'array' ? (require$$0.openBlock(), require$$0.createElementBlock("span", _hoisted_5$4, require$$0.toDisplayString($props.getArrayValue($props.itemValue(column, $props.item), column.displayProp, column.options)), 1 /* TEXT */)) : column.type === 'money' || column.type === 'price' ? (require$$0.openBlock(), require$$0.createElementBlock("span", _hoisted_6$2, require$$0.toDisplayString($options.formatMoney($props.itemValue(column, $props.item), column)), 1 /* TEXT */)) : column.type === 'number' && (column.thousandsSeparator || column.decimalSeparator || column.decimals !== undefined) ? (require$$0.openBlock(), require$$0.createElementBlock("span", _hoisted_7$2, require$$0.toDisplayString($options.formatNumber($props.itemValue(column, $props.item), column)), 1 /* TEXT */)) : (require$$0.openBlock(), require$$0.createElementBlock("span", _hoisted_8$2, require$$0.toDisplayString($props.itemValue(column, $props.item)), 1 /* TEXT */))];
              })];
            }),
            _: 2 /* DYNAMIC */
          }, 1024 /* DYNAMIC_SLOTS */)) : require$$0.createCommentVNode("v-if", true)]);
        }), 128 /* KEYED_FRAGMENT */))];
      })];
    }),
    _: 3 /* FORWARDED */
  }, 8 /* PROPS */, ["title", "class", "hide-footer"])], 2 /* CLASS */);
}
var ItemCard = /*#__PURE__*/_export_sfc(_sfc_main$9, [['render', _sfc_render$9]]);// vue-masonry-css only ships a Vue 2-style plugin (default export). Use a light layout wrapper.
var MasonryLayout = {
  name: 'MasonryLayout',
  props: {
    cols: {
      type: [Object, Number, String],
      default: 2
    },
    gutter: {
      type: [Object, Number, String],
      default: 0
    },
    tag: {
      type: String,
      default: 'div'
    }
  },
  render: function render() {
    var _this$$slots$default, _this$$slots;
    return require$$0.h(this.tag, {
      class: 'vlc-masonry-layout'
    }, (_this$$slots$default = (_this$$slots = this.$slots).default) === null || _this$$slots$default === void 0 ? void 0 : _this$$slots$default.call(_this$$slots));
  }
};
var _sfc_main$8 = {
  name: 'CrudCards',
  components: {
    draggable: draggable,
    ItemCard: ItemCard,
    masonry: MasonryLayout
  },
  inject: ['bootstrapFactory', 'displayMode', 'displayModes', 'items', 'draggableGroup', 'orderable', 'draggableOptions', 'itemsList', 'colLg', 'colXl', 'colMd', 'colSm', 'colXs', 'columns', 'cardClass', 'cardHideFooter', 'itemValue', 'getStateValue', 'getStateOptions', 'getStateBadgeVariant', 'getArrayValue', 'showItem', 'updateItem', 'removeItem', 'loading', 'firstLoad', 'infiniteScroll', 'messageEmptyResults', 'messageLoading', 'onSort', 'onDraggableAdded', 'onDraggableChange'],
  data: function data() {
    return {
      drag: false
    };
  },
  computed: {
    currentDisplayMode: function currentDisplayMode() {
      if (!this.displayMode) return 1;
      if (this.displayMode.value !== undefined) {
        return this.displayMode.value;
      }
      if (typeof this.displayMode === 'function') {
        return this.displayMode();
      }
      return this.displayMode;
    },
    loadingValue: function loadingValue() {
      return this.loading && this.loading.value !== undefined ? this.loading.value : this.loading;
    },
    firstLoadValue: function firstLoadValue() {
      return this.firstLoad && this.firstLoad.value !== undefined ? this.firstLoad.value : this.firstLoad;
    }
  }
};
var _hoisted_1$8 = {
  key: 0
};
var _hoisted_2$5 = {
  key: 0,
  class: "text-center p-5"
};
var _hoisted_3$5 = {
  class: "mt-2"
};
var _hoisted_4$5 = {
  class: "item"
};
var _hoisted_5$3 = {
  key: 0,
  class: "p-3"
};
function _sfc_render$8(_ctx, _cache, $props, $setup, $data, $options) {
  var _component_b_spinner = require$$0.resolveComponent("b-spinner");
  var _component_ItemCard = require$$0.resolveComponent("ItemCard");
  var _component_draggable = require$$0.resolveComponent("draggable");
  var _component_masonry = require$$0.resolveComponent("masonry");
  return $options.currentDisplayMode == $options.displayModes.MODE_CARDS ? (require$$0.openBlock(), require$$0.createElementBlock("div", _hoisted_1$8, [require$$0.createCommentVNode(" Spinner durante la carga inicial "), $options.loadingValue || !$options.firstLoadValue ? (require$$0.openBlock(), require$$0.createElementBlock("div", _hoisted_2$5, [require$$0.createVNode(_component_b_spinner, {
    variant: "primary",
    label: "Cargando..."
  }), require$$0.createElementVNode("p", _hoisted_3$5, require$$0.toDisplayString($options.messageLoading), 1 /* TEXT */)])) : (require$$0.openBlock(), require$$0.createElementBlock(require$$0.Fragment, {
    key: 1
  }, [require$$0.createCommentVNode(" Cards con datos "), require$$0.createVNode(_component_masonry, {
    cols: {
      default: 12 / $options.colLg,
      1400: 12 / $options.colXl,
      1200: 12 / $options.colLg,
      1000: 12 / $options.colMd,
      700: 12 / $options.colSm,
      400: 12 / $options.colXs
    },
    gutter: {
      default: '15px',
      700: '15px'
    }
  }, {
    default: require$$0.withCtx(function () {
      return [require$$0.createVNode(_component_draggable, {
        list: $options.items,
        group: $options.draggableGroup,
        draggable: $options.orderable ? '.item' : '.none',
        onStart: _cache[0] || (_cache[0] = function ($event) {
          return $data.drag = true;
        }),
        onEnd: _cache[1] || (_cache[1] = function ($event) {
          return $data.drag = false;
        }),
        onSort: _cache[2] || (_cache[2] = function ($event) {
          return $options.onSort();
        }),
        onAdd: _cache[3] || (_cache[3] = function ($event) {
          return $options.onDraggableAdded($event);
        }),
        onChange: _cache[4] || (_cache[4] = function ($event) {
          return $options.onDraggableChange($event);
        }),
        options: $options.draggableOptions,
        "item-key": "id"
      }, {
        item: require$$0.withCtx(function (_ref) {
          var element = _ref.element,
            index = _ref.index;
          return [require$$0.createElementVNode("div", _hoisted_4$5, [require$$0.renderSlot(_ctx.$slots, "card", {
            item: element
          }, function () {
            return [require$$0.createVNode(_component_ItemCard, {
              item: element,
              columns: $options.columns,
              index: index,
              cardClass: $options.cardClass,
              cardHideFooter: $options.cardHideFooter,
              itemValue: $options.itemValue,
              getStateValue: $options.getStateValue,
              getStateOptions: $options.getStateOptions,
              getStateBadgeVariant: $options.getStateBadgeVariant,
              getArrayValue: $options.getArrayValue,
              showItem: $options.showItem,
              updateItem: $options.updateItem,
              removeItem: $options.removeItem
            }, require$$0.createSlots({
              _: 2 /* DYNAMIC */
            }, [require$$0.renderList(_ctx.$slots, function (_, name) {
              return {
                name: name,
                fn: require$$0.withCtx(function (slotProps) {
                  return [require$$0.renderSlot(_ctx.$slots, name, require$$0.normalizeProps(require$$0.guardReactiveProps(slotProps)))];
                })
              };
            })]), 1032 /* PROPS, DYNAMIC_SLOTS */, ["item", "columns", "index", "cardClass", "cardHideFooter", "itemValue", "getStateValue", "getStateOptions", "getStateBadgeVariant", "getArrayValue", "showItem", "updateItem", "removeItem"])];
          })])];
        }),
        _: 3 /* FORWARDED */
      }, 8 /* PROPS */, ["list", "group", "draggable", "options"])];
    }),
    _: 3 /* FORWARDED */
  }, 8 /* PROPS */, ["cols"]), $options.firstLoadValue && $options.itemsList && $options.itemsList.length == 0 && !$options.infiniteScroll ? (require$$0.openBlock(), require$$0.createElementBlock("p", _hoisted_5$3, require$$0.toDisplayString($options.messageEmptyResults), 1 /* TEXT */)) : require$$0.createCommentVNode("v-if", true)], 64 /* STABLE_FRAGMENT */))])) : require$$0.createCommentVNode("v-if", true);
}
var CrudCards = /*#__PURE__*/_export_sfc(_sfc_main$8, [['render', _sfc_render$8]]);var css$5 = "\n.kanban-card[data-v-57f270bd] {\r\n  background: #ffffff;\r\n  border-radius: 4px;\r\n  padding: 0.5rem;\r\n  box-shadow: 0 1px 2px rgba(0, 0, 0, 0.1);\r\n  cursor: grab;\r\n  transition: box-shadow 0.2s ease;\n}\n.kanban-card[data-v-57f270bd]:hover {\r\n  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.15);\n}\n.kanban-card[data-v-57f270bd]:active {\r\n  cursor: grabbing;\n}\n.card-crud[data-v-57f270bd] {\r\n  border: 1px solid #e1e5e9;\n}\n.card-crud .card-title[data-v-57f270bd] {\r\n  font-size: 0.9rem;\r\n  margin-bottom: 0.5rem;\n}\n.card-crud .card-text[data-v-57f270bd] {\r\n  font-size: 0.8rem;\r\n  margin-bottom: 0.25rem;\n}\r\n";
n(css$5, {});var _sfc_main$7 = {
  name: 'KanbanCard',
  inject: ['bootstrapFactory'],
  props: {
    item: Object,
    columns: Array,
    index: Number,
    cardClass: String,
    cardHideFooter: Boolean,
    itemValue: Function,
    getStateValue: Function,
    getStateOptions: Function,
    getStateBadgeVariant: Function,
    getArrayValue: Function,
    showItem: Function,
    updateItem: Function,
    removeItem: Function
  },
  methods: {
    getStateOptionsForColumn: function getStateOptionsForColumn(column, item) {
      if (column.type === 'state' && column.options) {
        return this.getStateOptions(this.itemValue(column, item), column.options);
      }
      return [];
    },
    formatNumber: function formatNumber(value, column) {
      if (value === null || value === undefined || value === '') {
        return '';
      }
      var numValue = parseFloat(value);
      if (isNaN(numValue)) {
        return value;
      }
      var thousandsSep = column.thousandsSeparator || '.';
      var decimalSep = column.decimalSeparator || ',';
      var decimals = column.decimals !== undefined ? column.decimals : numValue % 1 === 0 ? 0 : 2;

      // Formatear número con separadores
      var parts = numValue.toFixed(decimals).split('.');
      var integerPart = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, thousandsSep);
      var decimalPart = parts[1] || '';
      if (decimals > 0 && decimalPart) {
        return "".concat(integerPart).concat(decimalSep).concat(decimalPart);
      }
      return integerPart;
    },
    formatMoney: function formatMoney(value, column) {
      var formatted = this.formatNumber(value, column);
      if (formatted === '') {
        return '';
      }
      var symbol = column.symbol || '$';
      return "".concat(symbol).concat(formatted);
    }
  }
};
var _hoisted_1$7 = {
  class: "kanban-card"
};
var _hoisted_2$4 = {
  class: "text-muted"
};
var _hoisted_3$4 = {
  class: "mb-1"
};
var _hoisted_4$4 = {
  key: 0
};
var _hoisted_5$2 = {
  key: 1
};
var _hoisted_6$1 = {
  key: 2
};
var _hoisted_7$1 = {
  key: 1
};
var _hoisted_8$1 = {
  key: 3
};
var _hoisted_9$1 = {
  key: 4
};
var _hoisted_10$1 = {
  key: 5
};
var _hoisted_11 = {
  key: 6
};
function _sfc_render$7(_ctx, _cache, $props, $setup, $data, $options) {
  var _component_b_icon_check_circle = require$$0.resolveComponent("b-icon-check-circle");
  var _component_b_badge = require$$0.resolveComponent("b-badge");
  var _component_b_icon_x_circle = require$$0.resolveComponent("b-icon-x-circle");
  var _component_b_card_text = require$$0.resolveComponent("b-card-text");
  var _component_b_icon_eye = require$$0.resolveComponent("b-icon-eye");
  var _component_b_button = require$$0.resolveComponent("b-button");
  var _component_b_icon_pencil = require$$0.resolveComponent("b-icon-pencil");
  var _component_b_icon_trash = require$$0.resolveComponent("b-icon-trash");
  var _component_b_button_group = require$$0.resolveComponent("b-button-group");
  var _component_b_card = require$$0.resolveComponent("b-card");
  return require$$0.openBlock(), require$$0.createElementBlock("div", _hoisted_1$7, [require$$0.createVNode(_component_b_card, {
    title: $props.item.title || $props.item.name || "Item ".concat($props.item.id),
    tag: "article",
    class: require$$0.normalizeClass(["mb-2 card-crud", $props.cardClass]),
    "hide-footer": $props.cardHideFooter
  }, {
    footer: require$$0.withCtx(function () {
      return [require$$0.createVNode(_component_b_button_group, {
        size: "sm"
      }, {
        default: require$$0.withCtx(function () {
          return [require$$0.renderSlot(_ctx.$slots, "rowActions", {
            item: $props.item,
            index: $props.index,
            showItem: $props.showItem,
            updateItem: $props.updateItem,
            removeItem: $props.removeItem
          }, function () {
            return [require$$0.renderSlot(_ctx.$slots, "rowAction", {
              item: $props.item,
              index: $props.index,
              showItem: $props.showItem,
              updateItem: $props.updateItem,
              removeItem: $props.removeItem
            }, function () {
              return [require$$0.createVNode(_component_b_button, {
                variant: "primary",
                onClick: _cache[0] || (_cache[0] = function ($event) {
                  return $props.showItem($props.item.id, $props.index);
                })
              }, {
                default: require$$0.withCtx(function () {
                  return [require$$0.createVNode(_component_b_icon_eye)];
                }),
                _: 1 /* STABLE */
              }), require$$0.createVNode(_component_b_button, {
                variant: "secondary",
                onClick: _cache[1] || (_cache[1] = function ($event) {
                  return $props.updateItem($props.item.id, $props.index);
                })
              }, {
                default: require$$0.withCtx(function () {
                  return [require$$0.createVNode(_component_b_icon_pencil)];
                }),
                _: 1 /* STABLE */
              }), require$$0.createVNode(_component_b_button, {
                variant: "danger",
                onClick: _cache[2] || (_cache[2] = function ($event) {
                  return $props.removeItem($props.item.id, $props.index);
                })
              }, {
                default: require$$0.withCtx(function () {
                  return [require$$0.createVNode(_component_b_icon_trash)];
                }),
                _: 1 /* STABLE */
              })];
            }, true)];
          }, true)];
        }),
        _: 3 /* FORWARDED */
      })];
    }),
    default: require$$0.withCtx(function () {
      return [require$$0.renderSlot(_ctx.$slots, "card", {
        item: $props.item
      }, function () {
        return [(require$$0.openBlock(true), require$$0.createElementBlock(require$$0.Fragment, null, require$$0.renderList($props.columns, function (column, indexc) {
          return require$$0.openBlock(), require$$0.createElementBlock("div", {
            key: indexc
          }, [column.type !== 'actions' && column.prop !== 'id' ? (require$$0.openBlock(), require$$0.createBlock(_component_b_card_text, {
            key: 0
          }, {
            default: require$$0.withCtx(function () {
              return [require$$0.createElementVNode("small", _hoisted_2$4, require$$0.toDisplayString(column.label) + ":", 1 /* TEXT */), require$$0.createElementVNode("div", _hoisted_3$4, [require$$0.renderSlot(_ctx.$slots, 'cell-' + column.prop, {
                item: $props.item,
                index: $props.index,
                itemindex: $props.index,
                columnindex: indexc
              }, function () {
                return [column.type === 'boolean' ? (require$$0.openBlock(), require$$0.createElementBlock("span", _hoisted_4$4, [$props.itemValue(column, $props.item) ? (require$$0.openBlock(), require$$0.createBlock(_component_b_badge, {
                  key: 0,
                  variant: "success"
                }, {
                  default: require$$0.withCtx(function () {
                    return [require$$0.createVNode(_component_b_icon_check_circle)];
                  }),
                  _: 1 /* STABLE */
                })) : (require$$0.openBlock(), require$$0.createBlock(_component_b_badge, {
                  key: 1,
                  variant: "danger"
                }, {
                  default: require$$0.withCtx(function () {
                    return [require$$0.createVNode(_component_b_icon_x_circle)];
                  }),
                  _: 1 /* STABLE */
                }))])) : column.type === 'date' ? (require$$0.openBlock(), require$$0.createElementBlock("span", _hoisted_5$2, require$$0.toDisplayString($props.itemValue(column, $props.item)), 1 /* TEXT */)) : column.type === 'state' ? (require$$0.openBlock(), require$$0.createElementBlock("span", _hoisted_6$1, [$options.getStateOptionsForColumn(column, $props.item).length > 0 ? (require$$0.openBlock(true), require$$0.createElementBlock(require$$0.Fragment, {
                  key: 0
                }, require$$0.renderList($options.getStateOptionsForColumn(column, $props.item), function (option, optIndex) {
                  return require$$0.openBlock(), require$$0.createBlock(_component_b_badge, {
                    key: optIndex,
                    variant: $props.getStateBadgeVariant(option),
                    class: "mr-1"
                  }, {
                    default: require$$0.withCtx(function () {
                      return [require$$0.createTextVNode(require$$0.toDisplayString(option.text), 1 /* TEXT */)];
                    }),
                    _: 2 /* DYNAMIC */
                  }, 1032 /* PROPS, DYNAMIC_SLOTS */, ["variant"]);
                }), 128 /* KEYED_FRAGMENT */)) : (require$$0.openBlock(), require$$0.createElementBlock("span", _hoisted_7$1, require$$0.toDisplayString($props.itemValue(column, $props.item)), 1 /* TEXT */))])) : column.type === 'array' ? (require$$0.openBlock(), require$$0.createElementBlock("span", _hoisted_8$1, require$$0.toDisplayString($props.getArrayValue($props.itemValue(column, $props.item), column.displayProp, column.options)), 1 /* TEXT */)) : column.type === 'money' || column.type === 'price' ? (require$$0.openBlock(), require$$0.createElementBlock("span", _hoisted_9$1, require$$0.toDisplayString($options.formatMoney($props.itemValue(column, $props.item), column)), 1 /* TEXT */)) : column.type === 'number' && (column.thousandsSeparator || column.decimalSeparator || column.decimals !== undefined) ? (require$$0.openBlock(), require$$0.createElementBlock("span", _hoisted_10$1, require$$0.toDisplayString($options.formatNumber($props.itemValue(column, $props.item), column)), 1 /* TEXT */)) : (require$$0.openBlock(), require$$0.createElementBlock("span", _hoisted_11, require$$0.toDisplayString($props.itemValue(column, $props.item)), 1 /* TEXT */))];
              }, true)])];
            }),
            _: 2 /* DYNAMIC */
          }, 1024 /* DYNAMIC_SLOTS */)) : require$$0.createCommentVNode("v-if", true)]);
        }), 128 /* KEYED_FRAGMENT */))];
      }, true)];
    }),
    _: 3 /* FORWARDED */
  }, 8 /* PROPS */, ["title", "class", "hide-footer"])]);
}
var KanbanCard = /*#__PURE__*/_export_sfc(_sfc_main$7, [['render', _sfc_render$7], ['__scopeId', "data-v-57f270bd"]]);var css$4 = "\n.kanban-column[data-v-81291b30] {\r\n  background: #f4f5f7;\r\n  border-radius: 8px;\r\n  width: 300px;\r\n  display: flex;\r\n  flex-direction: column;\r\n  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);\n}\n.kanban-column-header[data-v-81291b30] {\r\n  font-weight: bold;\r\n  padding: 0.5rem;\r\n  background: #dfe1e6;\r\n  border-radius: 8px 8px 0 0;\r\n  text-align: center;\n}\n.kanban-column-body[data-v-81291b30] {\r\n  padding: 0.5rem;\r\n  min-height: 100px;\r\n  background: #ffffff;\r\n  border-radius: 0 0 8px 8px;\r\n  display: flex;\r\n  flex-direction: column;\r\n  gap: 0.5rem;\n}\r\n";
n(css$4, {});var _sfc_main$6 = {
  name: 'KanbanColumn',
  components: {
    draggable: draggable,
    KanbanCard: KanbanCard
  },
  inject: ['bootstrapFactory'],
  props: {
    column: Object,
    colIndex: Number,
    groupedAttribute: String,
    columns: Array,
    itemValue: Function,
    getStateValue: Function,
    getStateOptions: Function,
    getStateBadgeVariant: Function,
    getArrayValue: Function,
    showItem: Function,
    updateItem: Function,
    removeItem: Function,
    cardClass: String,
    cardHideFooter: Boolean
  },
  methods: {
    onDragEnd: function onDragEnd(event) {
      // Handle drag end for Kanban
      if (event.added || event.moved) {
        var item = event.item.__vue__.$parent.item || event.item.__vue__.item;
        var newColumn = event.to.parentElement.getAttribute('data-column');
        if (item && newColumn) {
          // Update the item's grouped attribute
          item[this.groupedAttribute] = newColumn;

          // Emit the change event
          this.$emit('draggableChange', event);
        }
      }
    }
  }
};
var _hoisted_1$6 = {
  class: "kanban-column"
};
var _hoisted_2$3 = {
  class: "kanban-column-header"
};
var _hoisted_3$3 = {
  class: "d-flex justify-content-between align-items-center"
};
var _hoisted_4$3 = {
  class: "item"
};
function _sfc_render$6(_ctx, _cache, $props, $setup, $data, $options) {
  var _component_b_badge = require$$0.resolveComponent("b-badge");
  var _component_KanbanCard = require$$0.resolveComponent("KanbanCard");
  var _component_draggable = require$$0.resolveComponent("draggable");
  return require$$0.openBlock(), require$$0.createElementBlock("div", _hoisted_1$6, [require$$0.createElementVNode("div", _hoisted_2$3, [require$$0.createElementVNode("div", _hoisted_3$3, [require$$0.createElementVNode("span", null, require$$0.toDisplayString($props.column.groupLabel), 1 /* TEXT */), require$$0.createVNode(_component_b_badge, {
    variant: "secondary"
  }, {
    default: require$$0.withCtx(function () {
      return [require$$0.createTextVNode(require$$0.toDisplayString($props.column.items.length), 1 /* TEXT */)];
    }),
    _: 1 /* STABLE */
  })])]), require$$0.createVNode(_component_draggable, {
    modelValue: $props.column.items,
    "onUpdate:modelValue": _cache[0] || (_cache[0] = function ($event) {
      return $props.column.items = $event;
    }),
    group: "kanban",
    class: "kanban-column-body",
    onEnd: $options.onDragEnd,
    "data-column": $props.column.groupKey,
    "item-key": "id"
  }, {
    item: require$$0.withCtx(function (_ref) {
      var element = _ref.element,
        index = _ref.index;
      return [require$$0.createElementVNode("div", _hoisted_4$3, [require$$0.renderSlot(_ctx.$slots, "card", {
        item: element
      }, function () {
        return [require$$0.createVNode(_component_KanbanCard, {
          item: element,
          columns: $props.columns,
          index: index,
          cardClass: $props.cardClass,
          cardHideFooter: $props.cardHideFooter,
          itemValue: $props.itemValue,
          getStateValue: $props.getStateValue,
          getStateOptions: $props.getStateOptions,
          getStateBadgeVariant: $props.getStateBadgeVariant,
          getArrayValue: $props.getArrayValue,
          showItem: $props.showItem,
          updateItem: $props.updateItem,
          removeItem: $props.removeItem
        }, require$$0.createSlots({
          _: 2 /* DYNAMIC */
        }, [require$$0.renderList(_ctx.$slots, function (_, name) {
          return {
            name: name,
            fn: require$$0.withCtx(function (slotProps) {
              return [require$$0.renderSlot(_ctx.$slots, name, require$$0.normalizeProps(require$$0.guardReactiveProps(slotProps)), undefined, true)];
            })
          };
        })]), 1032 /* PROPS, DYNAMIC_SLOTS */, ["item", "columns", "index", "cardClass", "cardHideFooter", "itemValue", "getStateValue", "getStateOptions", "getStateBadgeVariant", "getArrayValue", "showItem", "updateItem", "removeItem"])];
      }, true)])];
    }),
    _: 3 /* FORWARDED */
  }, 8 /* PROPS */, ["modelValue", "onEnd", "data-column"])]);
}
var KanbanColumn = /*#__PURE__*/_export_sfc(_sfc_main$6, [['render', _sfc_render$6], ['__scopeId', "data-v-81291b30"]]);var css$3 = "\n.kanban-board[data-v-0f90608c] {\r\n  display: flex;\r\n  gap: 1rem;\r\n  overflow-x: auto;\r\n  padding: 1rem;\n}\n.kanban-column[data-v-0f90608c] {\r\n  background: #f4f5f7;\r\n  border-radius: 8px;\r\n  width: 300px;\r\n  display: flex;\r\n  flex-direction: column;\r\n  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);\r\n  min-width: 300px;\n}\r\n";
n(css$3, {});var _sfc_main$5 = {
  name: 'KanbanBoard',
  components: {
    KanbanColumn: KanbanColumn
  },
  inject: ['items', 'groupedAttribute', 'columns', 'itemValue', 'getStateValue', 'getStateOptions', 'getStateBadgeVariant', 'getArrayValue', 'showItem', 'updateItem', 'removeItem', 'cardClass', 'cardHideFooter', 'onDraggableChange']
};
var _hoisted_1$5 = {
  class: "kanban-board"
};
function _sfc_render$5(_ctx, _cache, $props, $setup, $data, $options) {
  var _component_KanbanColumn = require$$0.resolveComponent("KanbanColumn");
  return require$$0.openBlock(), require$$0.createElementBlock("div", _hoisted_1$5, [(require$$0.openBlock(true), require$$0.createElementBlock(require$$0.Fragment, null, require$$0.renderList($options.items, function (column, colIndex) {
    return require$$0.openBlock(), require$$0.createElementBlock("div", {
      key: colIndex,
      class: "kanban-column"
    }, [require$$0.createVNode(_component_KanbanColumn, {
      column: column,
      colIndex: colIndex,
      groupedAttribute: $options.groupedAttribute,
      columns: $options.columns,
      itemValue: $options.itemValue,
      getStateValue: $options.getStateValue,
      getStateOptions: $options.getStateOptions,
      getStateBadgeVariant: $options.getStateBadgeVariant,
      getArrayValue: $options.getArrayValue,
      showItem: $options.showItem,
      updateItem: $options.updateItem,
      removeItem: $options.removeItem,
      cardClass: $options.cardClass,
      cardHideFooter: $options.cardHideFooter,
      onDraggableChange: $options.onDraggableChange
    }, require$$0.createSlots({
      _: 2 /* DYNAMIC */
    }, [require$$0.renderList(_ctx.$slots, function (_, name) {
      return {
        name: name,
        fn: require$$0.withCtx(function (slotProps) {
          return [require$$0.renderSlot(_ctx.$slots, name, require$$0.mergeProps({
            ref_for: true
          }, slotProps), undefined, true)];
        })
      };
    })]), 1032 /* PROPS, DYNAMIC_SLOTS */, ["column", "colIndex", "groupedAttribute", "columns", "itemValue", "getStateValue", "getStateOptions", "getStateBadgeVariant", "getArrayValue", "showItem", "updateItem", "removeItem", "cardClass", "cardHideFooter", "onDraggableChange"])]);
  }), 128 /* KEYED_FRAGMENT */))]);
}
var KanbanBoard = /*#__PURE__*/_export_sfc(_sfc_main$5, [['render', _sfc_render$5], ['__scopeId', "data-v-0f90608c"]]);var _sfc_main$4 = {
  name: 'CrudKanban',
  components: {
    KanbanBoard: KanbanBoard
  },
  inject: ['displayMode', 'displayModes'],
  computed: {
    currentDisplayMode: function currentDisplayMode() {
      if (!this.displayMode) return 1;
      if (this.displayMode.value !== undefined) {
        return this.displayMode.value;
      }
      if (typeof this.displayMode === 'function') {
        return this.displayMode();
      }
      return this.displayMode;
    }
  }
};
var _hoisted_1$4 = {
  key: 0
};
function _sfc_render$4(_ctx, _cache, $props, $setup, $data, $options) {
  var _component_KanbanBoard = require$$0.resolveComponent("KanbanBoard");
  return $options.currentDisplayMode == $options.displayModes.MODE_KANBAN ? (require$$0.openBlock(), require$$0.createElementBlock("div", _hoisted_1$4, [require$$0.createVNode(_component_KanbanBoard, null, require$$0.createSlots({
    _: 2 /* DYNAMIC */
  }, [require$$0.renderList(_ctx.$slots, function (_, name) {
    return {
      name: name,
      fn: require$$0.withCtx(function (slotProps) {
        return [require$$0.renderSlot(_ctx.$slots, name, require$$0.normalizeProps(require$$0.guardReactiveProps(slotProps)))];
      })
    };
  })]), 1024 /* DYNAMIC_SLOTS */)])) : require$$0.createCommentVNode("v-if", true);
}
var CrudKanban = /*#__PURE__*/_export_sfc(_sfc_main$4, [['render', _sfc_render$4]]);var _sfc_main$3 = {
  name: 'CrudCustom',
  inject: ['bootstrapFactory', 'displayMode', 'displayModes', 'listContainerClass', 'listItemClass', 'loading', 'firstLoad', 'items', 'infiniteScroll', 'messageEmptyResults', 'messageLoading', 'itemsList'],
  computed: {
    currentDisplayMode: function currentDisplayMode() {
      if (!this.displayMode) return 1;
      if (this.displayMode.value !== undefined) {
        return this.displayMode.value;
      }
      if (typeof this.displayMode === 'function') {
        return this.displayMode();
      }
      return this.displayMode;
    },
    loadingValue: function loadingValue() {
      return this.loading && this.loading.value !== undefined ? this.loading.value : this.loading;
    },
    firstLoadValue: function firstLoadValue() {
      return this.firstLoad && this.firstLoad.value !== undefined ? this.firstLoad.value : this.firstLoad;
    }
  }
};
var _hoisted_1$3 = {
  key: 0
};
var _hoisted_2$2 = {
  key: 0,
  class: "text-center p-5"
};
var _hoisted_3$2 = {
  class: "mt-2"
};
var _hoisted_4$2 = {
  key: 0,
  class: "p-3"
};
function _sfc_render$3(_ctx, _cache, $props, $setup, $data, $options) {
  var _component_b_spinner = require$$0.resolveComponent("b-spinner");
  return $options.currentDisplayMode == $options.displayModes.MODE_CUSTOM ? (require$$0.openBlock(), require$$0.createElementBlock("div", _hoisted_1$3, [require$$0.createElementVNode("div", {
    class: require$$0.normalizeClass($options.listContainerClass)
  }, [require$$0.createCommentVNode(" Spinner durante la carga inicial "), $options.loadingValue || !$options.firstLoadValue ? (require$$0.openBlock(), require$$0.createElementBlock("div", _hoisted_2$2, [require$$0.createVNode(_component_b_spinner, {
    variant: "primary",
    label: "Cargando..."
  }), require$$0.createElementVNode("p", _hoisted_3$2, require$$0.toDisplayString($options.messageLoading), 1 /* TEXT */)])) : (require$$0.openBlock(), require$$0.createElementBlock(require$$0.Fragment, {
    key: 1
  }, [require$$0.createCommentVNode(" Contenido con datos "), $options.firstLoadValue && $options.itemsList && $options.itemsList.length == 0 && !$options.infiniteScroll ? (require$$0.openBlock(), require$$0.createElementBlock("p", _hoisted_4$2, require$$0.toDisplayString($options.messageEmptyResults), 1 /* TEXT */)) : require$$0.createCommentVNode("v-if", true), (require$$0.openBlock(true), require$$0.createElementBlock(require$$0.Fragment, null, require$$0.renderList($options.itemsList, function (item, index) {
    return require$$0.openBlock(), require$$0.createElementBlock("div", {
      class: require$$0.normalizeClass($options.listItemClass),
      key: index
    }, [require$$0.renderSlot(_ctx.$slots, "card", {
      item: item
    })], 2 /* CLASS */);
  }), 128 /* KEYED_FRAGMENT */))], 64 /* STABLE_FRAGMENT */))], 2 /* CLASS */)])) : require$$0.createCommentVNode("v-if", true);
}
var CrudCustom = /*#__PURE__*/_export_sfc(_sfc_main$3, [['render', _sfc_render$3]]);var css$2 = "\n.export-format-options[data-v-267d6a56] {\r\n  display: flex;\r\n  gap: 1rem;\r\n  justify-content: center;\r\n  flex-wrap: wrap;\n}\n.export-format-radio[data-v-267d6a56] {\r\n  flex: 1;\r\n  min-width: 150px;\r\n  padding: 1rem;\r\n  border: 2px solid #dee2e6;\r\n  border-radius: 0.5rem;\r\n  cursor: pointer;\r\n  transition: all 0.3s ease;\r\n  text-align: center;\r\n  display: flex;\r\n  align-items: center;\r\n  justify-content: center;\r\n  background-color: #fff;\n}\n.export-format-radio[data-v-267d6a56]:hover {\r\n  border-color: #007bff;\r\n  background-color: #f8f9fa;\r\n  transform: translateY(-2px);\r\n  box-shadow: 0 2px 8px rgba(0, 123, 255, 0.2);\n}\n.export-format-radio[data-v-267d6a56] .custom-control-input:checked ~ .custom-control-label {\r\n  color: #007bff;\r\n  font-weight: 600;\n}\n.export-format-radio[data-v-267d6a56] .custom-control-input:checked ~ .custom-control-label::before {\r\n  border-color: #007bff;\r\n  background-color: #007bff;\n}\n.export-format-radio[data-v-267d6a56] .custom-control-label {\r\n  display: flex;\r\n  align-items: center;\r\n  justify-content: center;\r\n  width: 100%;\r\n  cursor: pointer;\r\n  font-size: 1rem;\n}\n.export-format-radio[data-v-267d6a56] .custom-control-label::before {\r\n  margin-right: 0.5rem;\n}\n.export-format-radio[data-v-267d6a56] svg {\r\n  font-size: 1.5rem;\r\n  color: #495057;\n}\n.export-format-radio[data-v-267d6a56] .custom-control-input:checked ~ .custom-control-label svg {\r\n  color: #007bff;\n}\r\n";
n(css$2, {});var _sfc_main$2 = {
  name: 'CrudModals',
  inject: ['bootstrapFactory', 'modelName', 'title', 'loading', 'validate', 'item', 'getItem', 'messageSave', 'showImport', 'showExport', 'fileImport', 'selectedItems', 'exportFormat', 'saveItem', 'importItems', 'exportItems'],
  computed: {
    // Computed property para asegurar reactividad del item inyectado
    reactiveItem: function reactiveItem() {
      // Si hay una función getItem, usarla para obtener el item actual
      if (this.getItem && typeof this.getItem === 'function') {
        try {
          return this.getItem();
        } catch (e) {
          console.debug('Error getting item from getItem function:', e);
          return this.item || {};
        }
      }
      // Si no, usar el item inyectado directamente, con fallback a objeto vacío
      return this.item || {};
    },
    // Computed property para manejar loading como objeto reactivo o booleano
    loadingValue: function loadingValue() {
      return this.loading && this.loading.value !== undefined ? this.loading.value : this.loading;
    },
    // Computed property para manejar exportFormat como objeto reactivo
    exportFormatValue: {
      get: function get() {
        return this.exportFormat && this.exportFormat.value !== undefined ? this.exportFormat.value : this.exportFormat;
      },
      set: function set(value) {
        if (this.exportFormat && this.exportFormat.value !== undefined) {
          this.exportFormat.value = value;
        }
      }
    }
  }
  // Eliminamos el watcher problemático - Vue 3 maneja la reactividad automáticamente
  // El computed reactiveItem se actualizará cuando cambie el item inyectado
};
var _hoisted_1$2 = {
  class: "text-center mt-3"
};
var _hoisted_2$1 = {
  key: 0
};
var _hoisted_3$1 = {
  key: 1
};
var _hoisted_4$1 = {
  class: "export-format-options"
};
var _hoisted_5$1 = {
  class: "text-center mt-3"
};
function _sfc_render$2(_ctx, _cache, $props, $setup, $data, $options) {
  var _component_b_form_input = require$$0.resolveComponent("b-form-input");
  var _component_b_form_group = require$$0.resolveComponent("b-form-group");
  var _component_b_spinner = require$$0.resolveComponent("b-spinner");
  var _component_b_button = require$$0.resolveComponent("b-button");
  var _component_b_overlay = require$$0.resolveComponent("b-overlay");
  var _component_b_modal = require$$0.resolveComponent("b-modal");
  var _component_b_col = require$$0.resolveComponent("b-col");
  var _component_b_row = require$$0.resolveComponent("b-row");
  var _component_b_list_group_item = require$$0.resolveComponent("b-list-group-item");
  var _component_b_list_group = require$$0.resolveComponent("b-list-group");
  var _component_b_form_file = require$$0.resolveComponent("b-form-file");
  var _component_b_icon_cloud_upload = require$$0.resolveComponent("b-icon-cloud-upload");
  var _component_b_icon_file_text = require$$0.resolveComponent("b-icon-file-text");
  var _component_b_form_radio = require$$0.resolveComponent("b-form-radio");
  var _component_b_icon_table = require$$0.resolveComponent("b-icon-table");
  return require$$0.openBlock(), require$$0.createElementBlock("div", null, [require$$0.createCommentVNode(" Modal de formulario "), require$$0.createVNode(_component_b_modal, {
    id: 'modal-form-item-' + $options.modelName,
    "hide-footer": "",
    size: "xl",
    title: $options.title
  }, {
    default: require$$0.withCtx(function () {
      return [require$$0.createVNode(_component_b_overlay, {
        show: $options.loadingValue,
        rounded: "sm"
      }, {
        default: require$$0.withCtx(function () {
          return [$options.validate ? (require$$0.openBlock(), require$$0.createElementBlock("form", {
            key: 0,
            onSubmit: _cache[1] || (_cache[1] = function () {
              return $options.saveItem && $options.saveItem.apply($options, arguments);
            })
          }, [$options.reactiveItem ? require$$0.renderSlot(_ctx.$slots, "form", {
            key: 0,
            item: $options.reactiveItem
          }, function () {
            return [require$$0.createVNode(_component_b_form_group, {
              label: "Nombre:",
              description: "Nombre "
            }, {
              default: require$$0.withCtx(function () {
                return [require$$0.createVNode(_component_b_form_input, {
                  modelValue: $options.reactiveItem.title,
                  "onUpdate:modelValue": _cache[0] || (_cache[0] = function ($event) {
                    return $options.reactiveItem.title = $event;
                  }),
                  type: "text",
                  required: "",
                  placeholder: "Nombre"
                }, null, 8 /* PROPS */, ["modelValue"])];
              }),
              _: 1 /* STABLE */
            })];
          }, true) : require$$0.createCommentVNode("v-if", true), require$$0.createVNode(_component_b_button, {
            block: "",
            type: "submit",
            variant: "success",
            disabled: $options.loadingValue
          }, {
            default: require$$0.withCtx(function () {
              return [$options.loadingValue ? (require$$0.openBlock(), require$$0.createBlock(_component_b_spinner, {
                key: 0,
                small: ""
              })) : require$$0.createCommentVNode("v-if", true), require$$0.createTextVNode(require$$0.toDisplayString($options.messageSave), 1 /* TEXT */)];
            }),
            _: 1 /* STABLE */
          }, 8 /* PROPS */, ["disabled"])], 32 /* NEED_HYDRATION */)) : require$$0.createCommentVNode("v-if", true), !$options.validate ? (require$$0.openBlock(), require$$0.createElementBlock(require$$0.Fragment, {
            key: 1
          }, [$options.reactiveItem ? require$$0.renderSlot(_ctx.$slots, "form", {
            key: 0,
            item: $options.reactiveItem
          }, function () {
            return [(require$$0.openBlock(true), require$$0.createElementBlock(require$$0.Fragment, null, require$$0.renderList($options.reactiveItem, function (value, key) {
              return require$$0.openBlock(), require$$0.createBlock(_component_b_form_group, {
                label: key,
                key: key
              }, {
                default: require$$0.withCtx(function () {
                  return [require$$0.createVNode(_component_b_form_input, {
                    modelValue: $options.reactiveItem[key],
                    "onUpdate:modelValue": function onUpdateModelValue($event) {
                      return $options.reactiveItem[key] = $event;
                    },
                    type: "text",
                    required: ""
                  }, null, 8 /* PROPS */, ["modelValue", "onUpdate:modelValue"])];
                }),
                _: 2 /* DYNAMIC */
              }, 1032 /* PROPS, DYNAMIC_SLOTS */, ["label"]);
            }), 128 /* KEYED_FRAGMENT */))];
          }, true) : require$$0.createCommentVNode("v-if", true), require$$0.createVNode(_component_b_button, {
            block: "",
            type: "submit",
            variant: "success",
            disabled: $options.loadingValue,
            onClick: _cache[2] || (_cache[2] = function ($event) {
              return $options.saveItem();
            })
          }, {
            default: require$$0.withCtx(function () {
              return [$options.loadingValue ? (require$$0.openBlock(), require$$0.createBlock(_component_b_spinner, {
                key: 0,
                small: ""
              })) : require$$0.createCommentVNode("v-if", true), require$$0.createTextVNode(require$$0.toDisplayString($options.messageSave), 1 /* TEXT */)];
            }),
            _: 1 /* STABLE */
          }, 8 /* PROPS */, ["disabled"])], 64 /* STABLE_FRAGMENT */)) : require$$0.createCommentVNode("v-if", true)];
        }),
        _: 3 /* FORWARDED */
      }, 8 /* PROPS */, ["show"])];
    }),
    _: 3 /* FORWARDED */
  }, 8 /* PROPS */, ["id", "title"]), require$$0.createCommentVNode(" Modal de visualización "), require$$0.createVNode(_component_b_modal, {
    id: 'modal-show-item-' + $options.modelName,
    "hide-footer": "",
    size: "xl",
    title: $options.title
  }, {
    default: require$$0.withCtx(function () {
      return [$options.reactiveItem ? require$$0.renderSlot(_ctx.$slots, "show", {
        key: 0,
        item: $options.reactiveItem
      }, function () {
        return [require$$0.createVNode(_component_b_list_group, null, {
          default: require$$0.withCtx(function () {
            return [(require$$0.openBlock(true), require$$0.createElementBlock(require$$0.Fragment, null, require$$0.renderList($options.reactiveItem, function (value, key) {
              return require$$0.openBlock(), require$$0.createBlock(_component_b_list_group_item, {
                key: key
              }, {
                default: require$$0.withCtx(function () {
                  return [require$$0.createVNode(_component_b_row, {
                    class: "w-100"
                  }, {
                    default: require$$0.withCtx(function () {
                      return [require$$0.createVNode(_component_b_col, {
                        cols: "4",
                        class: "font-weight-bold"
                      }, {
                        default: require$$0.withCtx(function () {
                          return [require$$0.createTextVNode(require$$0.toDisplayString(key), 1 /* TEXT */)];
                        }),
                        _: 2 /* DYNAMIC */
                      }, 1024 /* DYNAMIC_SLOTS */), require$$0.createVNode(_component_b_col, {
                        cols: "8"
                      }, {
                        default: require$$0.withCtx(function () {
                          return [require$$0.createTextVNode(require$$0.toDisplayString(JSON.stringify(value)), 1 /* TEXT */)];
                        }),
                        _: 2 /* DYNAMIC */
                      }, 1024 /* DYNAMIC_SLOTS */)];
                    }),
                    _: 2 /* DYNAMIC */
                  }, 1024 /* DYNAMIC_SLOTS */)];
                }),
                _: 2 /* DYNAMIC */
              }, 1024 /* DYNAMIC_SLOTS */);
            }), 128 /* KEYED_FRAGMENT */))];
          }),
          _: 1 /* STABLE */
        })];
      }, true) : require$$0.createCommentVNode("v-if", true)];
    }),
    _: 3 /* FORWARDED */
  }, 8 /* PROPS */, ["id", "title"]), require$$0.createCommentVNode(" Modal de importación "), $options.showImport ? (require$$0.openBlock(), require$$0.createBlock(_component_b_modal, {
    key: 0,
    ref: "modal-import",
    title: "Importar",
    "hide-footer": ""
  }, {
    default: require$$0.withCtx(function () {
      return [$options.item ? require$$0.renderSlot(_ctx.$slots, "import", {
        key: 0,
        item: $options.item
      }, function () {
        return [require$$0.createVNode(_component_b_overlay, {
          show: $options.loadingValue,
          rounded: "sm"
        }, {
          default: require$$0.withCtx(function () {
            return [require$$0.createVNode(_component_b_form_file, {
              modelValue: $options.fileImport,
              "onUpdate:modelValue": _cache[3] || (_cache[3] = function ($event) {
                return $options.fileImport = $event;
              }),
              state: Boolean($options.fileImport),
              "browse-text": "Explorar",
              placeholder: "Importar...",
              "drop-placeholder": "Arrastrar Archivo aquí..."
            }, null, 8 /* PROPS */, ["modelValue", "state"]), require$$0.createElementVNode("div", _hoisted_1$2, [require$$0.createVNode(_component_b_button, {
              variant: "info",
              onClick: _cache[4] || (_cache[4] = function ($event) {
                return $options.importItems();
              }),
              disabled: $options.loadingValue
            }, {
              default: require$$0.withCtx(function () {
                return [require$$0.createVNode(_component_b_icon_cloud_upload), require$$0.createTextVNode(" " + require$$0.toDisplayString($options.loadingValue ? "Cargando..." : "Importar"), 1 /* TEXT */)];
              }),
              _: 1 /* STABLE */
            }, 8 /* PROPS */, ["disabled"])])];
          }),
          _: 1 /* STABLE */
        }, 8 /* PROPS */, ["show"])];
      }, true) : require$$0.createCommentVNode("v-if", true)];
    }),
    _: 3 /* FORWARDED */
  }, 512 /* NEED_PATCH */)) : require$$0.createCommentVNode("v-if", true), require$$0.createCommentVNode(" Modal de exportación "), $options.showExport ? (require$$0.openBlock(), require$$0.createBlock(_component_b_modal, {
    key: 1,
    ref: "modal-export",
    title: "Exportar",
    "hide-footer": ""
  }, {
    default: require$$0.withCtx(function () {
      return [$options.item ? require$$0.renderSlot(_ctx.$slots, "export", {
        key: 0,
        item: $options.item
      }, function () {
        return [require$$0.createVNode(_component_b_overlay, {
          show: $options.loadingValue,
          rounded: "sm"
        }, {
          default: require$$0.withCtx(function () {
            return [$options.selectedItems.length ? (require$$0.openBlock(), require$$0.createElementBlock("p", _hoisted_2$1, "Se exportará " + require$$0.toDisplayString($options.selectedItems.length) + " elementos.", 1 /* TEXT */)) : (require$$0.openBlock(), require$$0.createElementBlock("p", _hoisted_3$1, "Se exportará la consulta actual.")), require$$0.createVNode(_component_b_form_group, {
              label: "Seleccione el formato de exportación:",
              class: "mt-3"
            }, {
              default: require$$0.withCtx(function () {
                return [require$$0.createElementVNode("div", _hoisted_4$1, [require$$0.createVNode(_component_b_form_radio, {
                  modelValue: $options.exportFormatValue,
                  "onUpdate:modelValue": _cache[5] || (_cache[5] = function ($event) {
                    return $options.exportFormatValue = $event;
                  }),
                  value: "JSON",
                  class: "export-format-radio"
                }, {
                  default: require$$0.withCtx(function () {
                    return [require$$0.createVNode(_component_b_icon_file_text, {
                      class: "mr-2"
                    }), _cache[8] || (_cache[8] = require$$0.createTextVNode(" JSON ", -1 /* CACHED */))];
                  }),
                  _: 1 /* STABLE */
                }, 8 /* PROPS */, ["modelValue"]), require$$0.createVNode(_component_b_form_radio, {
                  modelValue: $options.exportFormatValue,
                  "onUpdate:modelValue": _cache[6] || (_cache[6] = function ($event) {
                    return $options.exportFormatValue = $event;
                  }),
                  value: "XLSX",
                  class: "export-format-radio"
                }, {
                  default: require$$0.withCtx(function () {
                    return [require$$0.createVNode(_component_b_icon_table, {
                      class: "mr-2"
                    }), _cache[9] || (_cache[9] = require$$0.createTextVNode(" XLSX ", -1 /* CACHED */))];
                  }),
                  _: 1 /* STABLE */
                }, 8 /* PROPS */, ["modelValue"])])];
              }),
              _: 1 /* STABLE */
            }), require$$0.createElementVNode("div", _hoisted_5$1, [require$$0.createVNode(_component_b_button, {
              variant: "info",
              onClick: _cache[7] || (_cache[7] = function ($event) {
                return $options.exportItems();
              }),
              disabled: $options.loadingValue
            }, {
              default: require$$0.withCtx(function () {
                return [require$$0.createVNode(_component_b_icon_cloud_upload), require$$0.createTextVNode(" " + require$$0.toDisplayString($options.loadingValue ? "Cargando..." : "Exportar"), 1 /* TEXT */)];
              }),
              _: 1 /* STABLE */
            }, 8 /* PROPS */, ["disabled"])])];
          }),
          _: 1 /* STABLE */
        }, 8 /* PROPS */, ["show"])];
      }, true) : require$$0.createCommentVNode("v-if", true)];
    }),
    _: 3 /* FORWARDED */
  }, 512 /* NEED_PATCH */)) : require$$0.createCommentVNode("v-if", true)]);
}
var CrudModals = /*#__PURE__*/_export_sfc(_sfc_main$2, [['render', _sfc_render$2], ['__scopeId', "data-v-267d6a56"]]);var css$1 = "\n.paginator-container[data-v-3be00b06] {\r\n  display: grid;\r\n  grid-template-columns: 1fr auto 1fr;\r\n  align-items: center;\r\n  width: 100%;\r\n  margin-top: 1rem;\r\n  gap: 1rem;\n}\n.paginator-data[data-v-3be00b06] {\r\n  display: flex;\r\n  flex-wrap: nowrap;\r\n  justify-content: flex-start;\r\n  align-items: center;\r\n  gap: 0.5rem;\r\n  font-size: 0.875rem;\r\n  grid-column: 1;\n}\n.paginator-badge[data-v-3be00b06] {\r\n  display: inline-flex;\r\n  align-items: center;\r\n  gap: 0.25rem;\r\n  padding: 0.375rem 0.625rem;\r\n  background-color: #f8f9fa;\r\n  border: 1px solid #dee2e6;\r\n  border-radius: 0.375rem;\r\n  color: #495057;\r\n  transition: all 0.2s ease;\n}\n.paginator-badge[data-v-3be00b06]:hover {\r\n  background-color: #e9ecef;\r\n  border-color: #ced4da;\n}\n.paginator-label[data-v-3be00b06] {\r\n  font-weight: 500;\r\n  color: #6c757d;\n}\n.paginator-value[data-v-3be00b06] {\r\n  font-weight: 600;\r\n  color: #212529;\n}\n.paginator-dropdown[data-v-3be00b06] {\r\n  font-size: 0.875rem;\n}\n.paginator-dropdown[data-v-3be00b06] .btn {\r\n  padding: 0.375rem 0.625rem;\r\n  font-size: 0.875rem;\r\n  background-color: #f8f9fa;\r\n  border: 1px solid #dee2e6;\r\n  color: #495057;\n}\n.paginator-dropdown[data-v-3be00b06] .btn:hover {\r\n  background-color: #e9ecef;\r\n  border-color: #ced4da;\n}\n.crud-paginator[data-v-3be00b06] {\r\n  display: flex;\r\n  justify-content: center;\r\n  align-items: center;\r\n  grid-column: 2;\n}\n.paginator-badge-dropdown[data-v-3be00b06] {\r\n  z-index: 1;\r\n  position: relative;\n}\n.paginator-badge-dropdown[data-v-3be00b06] .btn {\r\n  padding: 0.375rem 0.625rem;\r\n  font-size: 0.875rem;\r\n  background-color: #f8f9fa;\r\n  border: 1px solid #dee2e6;\r\n  color: #495057;\r\n  display: inline-flex;\r\n  align-items: center;\r\n  gap: 0.25rem;\n}\n.paginator-badge-dropdown[data-v-3be00b06] .btn:hover {\r\n  background-color: #e9ecef;\r\n  border-color: #ced4da;\n}\n.infinite-loading-trigger[data-v-3be00b06] {\r\n  min-height: 50px;\r\n  margin-top: 1rem;\n}\r\n";
n(css$1, {});var _sfc_main$1 = {
  name: 'CrudPagination',
  inject: ['bootstrapFactory', 'infiniteScroll', 'infiniteScrollKey', 'messageLoading', 'messageNoMore', 'messageEmptyResults', 'loading', 'firstLoad', 'items', 'pagination', 'selectedItems', 'showPaginator', 'infiniteHandler', 'onPaginationChange', 'onPerPageChange', 'clearSelection'],
  data: function data() {
    return {
      perPageOptions: [10, 20, 50, 100],
      observer: null
    };
  },
  computed: {
    selectedItemsCount: function selectedItemsCount() {
      // Computed para forzar reactividad del contador
      return this.selectedItems ? this.selectedItems.length : 0;
    },
    loadingValue: function loadingValue() {
      return this.loading && this.loading.value !== undefined ? this.loading.value : this.loading;
    },
    firstLoadValue: function firstLoadValue() {
      return this.firstLoad && this.firstLoad.value !== undefined ? this.firstLoad.value : this.firstLoad;
    },
    hasMorePages: function hasMorePages() {
      if (!this.firstLoadValue) return true;
      return this.pagination.current_page * this.pagination.per_page < this.pagination.total;
    }
  },
  mounted: function mounted() {
    if (this.infiniteScroll) {
      this.setupInfiniteScroll();
    }
  },
  beforeUnmount: function beforeUnmount() {
    if (this.observer) {
      this.observer.disconnect();
      this.observer = null;
    }
  },
  watch: {
    infiniteScroll: function infiniteScroll(newVal) {
      var _this = this;
      if (newVal) {
        this.$nextTick(function () {
          _this.setupInfiniteScroll();
        });
      } else {
        if (this.observer) {
          this.observer.disconnect();
          this.observer = null;
        }
      }
    },
    infiniteScrollKey: function infiniteScrollKey() {
      var _this2 = this;
      if (this.infiniteScroll) {
        this.$nextTick(function () {
          _this2.setupInfiniteScroll();
        });
      }
    }
  },
  methods: {
    setupInfiniteScroll: function setupInfiniteScroll() {
      var _this3 = this;
      if (!this.infiniteScroll) return;

      // Limpiar observer anterior si existe
      if (this.observer) {
        this.observer.disconnect();
        this.observer = null;
      }
      this.$nextTick(function () {
        var trigger = _this3.$refs.infiniteLoadingTrigger;
        if (!trigger) return;

        // Crear IntersectionObserver
        _this3.observer = new IntersectionObserver(function (entries) {
          entries.forEach(function (entry) {
            if (entry.isIntersecting && !_this3.loadingValue && _this3.hasMorePages) {
              // Simular el objeto $state para compatibilidad con infiniteHandler
              var $state = {
                loaded: function loaded() {},
                complete: function complete() {},
                error: function error() {}
              };
              _this3.infiniteHandler($state);
            }
          });
        }, {
          root: null,
          rootMargin: '100px',
          threshold: 0.1
        });
        _this3.observer.observe(trigger);
      });
    }
  }
};
var _hoisted_1$1 = {
  key: 0,
  class: "text-center p-3"
};
var _hoisted_2 = {
  class: "mt-2"
};
var _hoisted_3 = {
  key: 1,
  class: "text-center p-3"
};
var _hoisted_4 = {
  key: 0
};
var _hoisted_5 = {
  key: 1
};
var _hoisted_6 = {
  key: 1,
  class: "paginator-container"
};
var _hoisted_7 = {
  class: "paginator-data"
};
var _hoisted_8 = {
  class: "paginator-badge"
};
var _hoisted_9 = {
  class: "paginator-value"
};
var _hoisted_10 = {
  class: "crud-paginator"
};
function _sfc_render$1(_ctx, _cache, $props, $setup, $data, $options) {
  var _component_b_spinner = require$$0.resolveComponent("b-spinner");
  var _component_b_dropdown_item = require$$0.resolveComponent("b-dropdown-item");
  var _component_b_dropdown = require$$0.resolveComponent("b-dropdown");
  var _component_b_icon_x_circle = require$$0.resolveComponent("b-icon-x-circle");
  var _component_b_pagination = require$$0.resolveComponent("b-pagination");
  return require$$0.openBlock(), require$$0.createElementBlock("div", null, [require$$0.createCommentVNode(" Infinite Loading "), $options.infiniteScroll ? (require$$0.openBlock(), require$$0.createElementBlock("div", {
    ref: "infiniteLoadingTrigger",
    class: "infinite-loading-trigger",
    key: $options.infiniteScrollKey
  }, [$options.loadingValue ? (require$$0.openBlock(), require$$0.createElementBlock("div", _hoisted_1$1, [require$$0.createVNode(_component_b_spinner, {
    variant: "primary",
    label: "Cargando..."
  }), require$$0.createElementVNode("div", _hoisted_2, require$$0.toDisplayString($options.messageLoading), 1 /* TEXT */)])) : !$options.hasMorePages && $options.firstLoadValue ? (require$$0.openBlock(), require$$0.createElementBlock("div", _hoisted_3, [$options.items.length == 0 ? (require$$0.openBlock(), require$$0.createElementBlock("div", _hoisted_4, require$$0.toDisplayString($options.messageEmptyResults), 1 /* TEXT */)) : (require$$0.openBlock(), require$$0.createElementBlock("div", _hoisted_5, require$$0.toDisplayString($options.messageNoMore), 1 /* TEXT */))])) : require$$0.createCommentVNode("v-if", true)])) : require$$0.createCommentVNode("v-if", true), require$$0.createCommentVNode(" Paginador "), !$options.infiniteScroll ? (require$$0.openBlock(), require$$0.createElementBlock("div", _hoisted_6, [require$$0.createElementVNode("div", _hoisted_7, [require$$0.createElementVNode("span", _hoisted_8, [_cache[2] || (_cache[2] = require$$0.createElementVNode("span", {
    class: "paginator-label"
  }, "Filas:", -1 /* CACHED */)), require$$0.createElementVNode("span", _hoisted_9, require$$0.toDisplayString($options.pagination.total), 1 /* TEXT */)]), require$$0.createVNode(_component_b_dropdown, {
    variant: "outline-secondary",
    size: "sm",
    class: "paginator-dropdown",
    text: "xP\xE1g: ".concat($options.pagination.per_page)
  }, {
    default: require$$0.withCtx(function () {
      return [(require$$0.openBlock(true), require$$0.createElementBlock(require$$0.Fragment, null, require$$0.renderList($data.perPageOptions, function (option) {
        return require$$0.openBlock(), require$$0.createBlock(_component_b_dropdown_item, {
          key: option,
          onClick: function onClick($event) {
            return $options.onPerPageChange(option);
          },
          active: $options.pagination.per_page === option
        }, {
          default: require$$0.withCtx(function () {
            return [require$$0.createTextVNode(require$$0.toDisplayString(option), 1 /* TEXT */)];
          }),
          _: 2 /* DYNAMIC */
        }, 1032 /* PROPS, DYNAMIC_SLOTS */, ["onClick", "active"]);
      }), 128 /* KEYED_FRAGMENT */))];
    }),
    _: 1 /* STABLE */
  }, 8 /* PROPS */, ["text"]), $options.selectedItemsCount > 0 ? (require$$0.openBlock(), require$$0.createBlock(_component_b_dropdown, {
    key: 0,
    variant: "outline-secondary",
    size: "sm",
    class: "paginator-dropdown paginator-badge-dropdown",
    text: "Seleccionados: ".concat($options.selectedItemsCount)
  }, {
    default: require$$0.withCtx(function () {
      return [require$$0.createVNode(_component_b_dropdown_item, {
        onClick: $options.clearSelection
      }, {
        default: require$$0.withCtx(function () {
          return [require$$0.createVNode(_component_b_icon_x_circle, {
            class: "mr-1"
          }), _cache[3] || (_cache[3] = require$$0.createTextVNode(" Limpiar selección ", -1 /* CACHED */))];
        }),
        _: 1 /* STABLE */
      }, 8 /* PROPS */, ["onClick"])];
    }),
    _: 1 /* STABLE */
  }, 8 /* PROPS */, ["text"])) : require$$0.createCommentVNode("v-if", true)]), require$$0.createElementVNode("div", _hoisted_10, [$options.showPaginator ? (require$$0.openBlock(), require$$0.createBlock(_component_b_pagination, {
    key: 0,
    modelValue: $options.pagination.current_page,
    "onUpdate:modelValue": _cache[0] || (_cache[0] = function ($event) {
      return $options.pagination.current_page = $event;
    }),
    "total-rows": $options.pagination.total,
    "per-page": $options.pagination.per_page,
    onChange: _cache[1] || (_cache[1] = function ($event) {
      return $options.onPaginationChange($event);
    })
  }, null, 8 /* PROPS */, ["modelValue", "total-rows", "per-page"])) : require$$0.createCommentVNode("v-if", true)])])) : require$$0.createCommentVNode("v-if", true)]);
}
var CrudPagination = /*#__PURE__*/_export_sfc(_sfc_main$1, [['render', _sfc_render$1], ['__scopeId', "data-v-3be00b06"]]);var crudData = {
  data: function data() {
    return {
      crudUuid: "",
      moment: moment,
      loading: false,
      firstLoad: false,
      item: {
        id: null
      },
      items: [],
      selectedItems: [],
      pagination: {
        current_page: 1,
        last_page: 1,
        next_page_url: "",
        prev_page_url: "",
        per_page: 20,
        total: 0
      },
      displaySearch: false,
      itemDefault: null,
      filters: [],
      filtersVisible: false,
      filterSidebarOpen: false,
      filtersVisibleReactive: {
        value: false
      },
      filterSidebarOpenReactive: {
        value: false
      },
      internalFilters: [],
      forceRecomputeCounter: 0,
      _displayMode: 1,
      // Propiedad local para displayMode (se inicializará desde la prop en created())
      displayModeReactive: {
        value: 1
      },
      // Objeto reactivo para provide/inject
      loadingReactive: {
        value: false
      },
      // Objeto reactivo para loading
      firstLoadReactive: {
        value: false
      },
      // Objeto reactivo para firstLoad
      displayModes: {
        MODE_TABLE: 1,
        MODE_CARDS: 2,
        MODE_CUSTOM: 3,
        MODE_KANBAN: 4
      },
      infiniteScrollKey: 1,
      optionsLoaded: false,
      isLoadingOptions: false,
      isMobile: false,
      refreshing: false,
      fetchError: false,
      principalSort: false,
      exportFormatReactive: {
        value: 'JSON'
      },
      // Objeto reactivo para exportFormat
      fileImport: null
    };
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
    isSplitGroups: function isSplitGroups() {
      if (this.groupedSplit) {
        return true;
      }
      return this._displayMode == this.displayModes.MODE_KANBAN;
    },
    itemsList: function itemsList() {
      var items = this.ajax ? this.items : this.items.slice(this.paginationIndexStart, this.paginationIndexEnd);
      if (this.masonrySort && !this.isMobile) {
        return this.rearrangeArray(items, this.masonryColumns);
      }
      return items;
    },
    paginationIndexStart: function paginationIndexStart() {
      return (this.pagination.current_page - 1) * this.pagination.per_page;
    },
    paginationIndexEnd: function paginationIndexEnd() {
      return this.paginationIndexStart + this.pagination.per_page;
    },
    finalFilters: function finalFilters() {
      return [].concat(_toConsumableArray$1(this.filters), _toConsumableArray$1(this.filter), _toConsumableArray$1(this.internalFilter), _toConsumableArray$1(this.sortFilter), _toConsumableArray$1(this.groupFilter));
    },
    sortFilter: function sortFilter() {
      if (this.showPrincipalSortBtn) {
        if (this.principalSort) {
          return [[this.principalSortColumn, 'SORTASC', '']];
        } else {
          return [[this.principalSortColumn, 'SORTDESC', '']];
        }
      } else {
        return [];
      }
    },
    groupFilter: function groupFilter() {
      if (this.grouped && this.groupedAttribute) {
        return [['', 'GROUPBY', this.groupedAttribute]];
      } else {
        return [];
      }
    },
    internalFilter: function internalFilter() {
      var filter = [];
      this.forceRecomputeCounter;
      this.internalFilters.forEach(function (f) {
        if (f.value) {
          var colname = f.column.replace("_sort", "").replace("_from", "").replace("_to", "");
          var op = f.op;

          // Aplicar operadores automáticamente para filtros de rango
          if (f.column.endsWith("_from")) {
            op = ">=";
          } else if (f.column.endsWith("_to")) {
            op = "<=";
          } else if (f.column.endsWith("_sort")) {
            // Aplicar operadores correctos para filtros de ordenamiento
            if (f.value === "ASC") {
              op = "SORTASC";
            } else if (f.value === "DESC") {
              op = "SORTDESC";
            }
          }
          filter.push([colname, op, f.value]);
        }
      });
      return filter;
    },
    internalFilterByProp: function internalFilterByProp() {
      var _this = this;
      return function (prop) {
        return _this.internalFilters.find(function (inf) {
          return inf.column == prop;
        });
      };
    },
    columnOptions: function columnOptions() {
      return function (column) {
        // Placeholder for column options logic
      };
    },
    // Computed property para compatibilidad con exportFormat
    exportFormat: function exportFormat() {
      return this.exportFormatReactive.value;
    }
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
    },
    models: function models(val) {
      if (!this.ajax) {
        this.items = val;
      }
    },
    limit: function limit(val) {
      if (val && val > 0) {
        this.pagination.per_page = val;
        // Resetear a la primera página y recargar datos
        this.pagination.current_page = 1;
        this.fetchItems();
      }
    },
    // Watcher para la prop displayMode (sincroniza cuando cambia desde el componente padre)
    displayMode: function displayMode(newVal) {
      // Usar $props para acceder a la prop y evitar conflictos con data properties
      var propValue = this.$props && this.$props.displayMode !== undefined ? this.$props.displayMode : newVal;
      if (propValue !== undefined && this._displayMode !== propValue) {
        this._displayMode = propValue;
        if (this.displayModeReactive) {
          this.displayModeReactive.value = propValue;
        }
      }
    },
    // Watcher para la propiedad local _displayMode (para forzar re-renderizado)
    _displayMode: function _displayMode(newVal) {
      var _this2 = this;
      // Actualizar el objeto reactivo si existe
      if (this.displayModeReactive) {
        this.displayModeReactive.value = newVal;
      }
      // Forzar re-renderizado cuando cambia el modo de visualización
      this.$nextTick(function () {
        _this2.forceRecomputeCounter++;
      });
    },
    showPaginator: function showPaginator() {
      var _this3 = this;
      // Forzar re-renderizado cuando cambia la visibilidad del paginador
      this.$nextTick(function () {
        _this3.forceRecomputeCounter++;
      });
    },
    showSearch: function showSearch() {
      var _this4 = this;
      // Forzar re-renderizado cuando cambia la visibilidad de la búsqueda
      this.$nextTick(function () {
        _this4.forceRecomputeCounter++;
      });
    },
    showCreateBtn: function showCreateBtn() {
      var _this5 = this;
      // Forzar re-renderizado cuando cambia la visibilidad del botón crear
      this.$nextTick(function () {
        _this5.forceRecomputeCounter++;
      });
    },
    showHeader: function showHeader() {
      var _this6 = this;
      // Forzar re-renderizado cuando cambia la visibilidad del header
      this.$nextTick(function () {
        _this6.forceRecomputeCounter++;
      });
    },
    tableClass: function tableClass() {
      var _this7 = this;
      // Forzar re-renderizado cuando cambian las clases de la tabla
      this.$nextTick(function () {
        _this7.forceRecomputeCounter++;
      });
    },
    cardClass: function cardClass() {
      var _this8 = this;
      // Forzar re-renderizado cuando cambian las clases de las tarjetas
      this.$nextTick(function () {
        _this8.forceRecomputeCounter++;
      });
    },
    tableContainerClass: function tableContainerClass() {
      var _this9 = this;
      // Forzar re-renderizado cuando cambian las clases del contenedor
      this.$nextTick(function () {
        _this9.forceRecomputeCounter++;
      });
    },
    columns: {
      handler: function handler() {
        var _this0 = this;
        // Evitar bucle infinito: no ejecutar si loadOptions() está modificando las columnas
        if (this.isLoadingOptions) {
          return;
        }
        // Recargar opciones cuando cambian las columnas
        this.loadOptions();
        // Forzar re-renderizado
        this.$nextTick(function () {
          _this0.forceRecomputeCounter++;
        });
      },
      deep: true
    },
    loading: {
      handler: function handler(newVal) {
        this.loadingReactive.value = newVal;
      },
      immediate: true
    },
    firstLoad: {
      handler: function handler(newVal) {
        this.firstLoadReactive.value = newVal;
      },
      immediate: true
    },
    filtersVisible: {
      handler: function handler(newVal) {
        this.filtersVisibleReactive.value = newVal;
      },
      immediate: true
    },
    filterSidebarOpen: {
      handler: function handler(newVal) {
        this.filterSidebarOpenReactive.value = newVal;
      },
      immediate: true
    }
  },
  created: function created() {
    // Inicializar _displayMode desde la prop displayMode en created() para que esté disponible en provide()
    if (this.$props && this.$props.displayMode !== undefined) {
      this._displayMode = this.$props.displayMode;
      this.displayModeReactive.value = this._displayMode;
    }
    // Inicializar valores reactivos
    this.loadingReactive.value = this.loading;
    this.firstLoadReactive.value = this.firstLoad;
    this.filtersVisibleReactive.value = this.filtersVisible;
    this.filterSidebarOpenReactive.value = this.filterSidebarOpen;
  },
  mounted: function mounted() {
    var now = Math.floor(Date.now() / 1000);
    this.crudUuid = '' + now;
    this.isMobile = window.matchMedia("(max-width: 1024px)").matches;

    // Agregar un oyente de eventos para actualizar isMobile cuando cambia el tamaño de la pantalla
    window.addEventListener("resize", this.handleResize);
    if (this.useVuexORM) {
      if (this.vuexLocalforage) {
        this.item = {};
      } else {
        this.item = new this.model();
      }
      var fields = this.model.fields();
      // Inicializa el objeto "itemDefault" con los valores por defecto
      var itemDefault = {};
      var primaryKey = this.model.primaryKey;
      for (var _i = 0, _Object$keys = Object.keys(fields); _i < _Object$keys.length; _i++) {
        var fieldName = _Object$keys[_i];
        var field = fields[fieldName];
        if (fieldName === primaryKey) {
          continue; // Salta este campo
        }
        console.debug("debug field", field);
        if (field.type === 'relation') {
          // Si es una relación, inicializa como un objeto vacío.
          console.debug("Relation", field);
          if (this.vuexInitRelations == true || Array.isArray(this.vuexInitRelations) && this.vuexInitRelations.includes(fieldName)) {
            itemDefault[fieldName] = {};
          }
        } else {
          console.debug("Field", field);
          if (typeof field.value === 'function') {
            itemDefault[fieldName] = field.value();
          } else if (field.value) {
            itemDefault[fieldName] = field.value;
          } else {
            itemDefault[fieldName] = null;
          }
        }
      }
      this.itemDefault = JSON.parse(JSON.stringify(itemDefault));
    } else {
      this.item = this.model;
      this.itemDefault = JSON.parse(JSON.stringify(this.item));
    }
    console.debug("crud mounted columns", this.columns);
    this.internalFilters = [];
    this.setupFilters();
    this.fetchItems();
    this.loadOptions();
  },
  beforeUnmount: function beforeUnmount() {
    // Eliminar el oyente de eventos al destruir el componente para evitar pérdidas de memoria
    window.removeEventListener("resize", this.handleResize);
  },
  methods: {
    handleResize: function handleResize() {
      // Actualizar isMobile cuando cambia el tamaño de la pantalla
      this.isMobile = window.matchMedia("(max-width: 1024px)").matches;
    },
    rearrangeArray: function rearrangeArray(originalArray) {
      var columns = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 3;
      var rearrangedArray = [];
      for (var i = 0; i < columns; i++) {
        for (var j = i; j < originalArray.length; j += columns) {
          rearrangedArray.push(originalArray[j]);
        }
      }
      return rearrangedArray;
    },
    clearItems: function clearItems() {
      this.items = [];
    },
    updateData: function updateData(data) {
      var _this1 = this;
      var allowCreate = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;
      // Convertir this.items a un mapa para acceso rápido por id
      var itemsMap = new Map(this.items.map(function (item) {
        return [item.id, item];
      }));

      // Recorrer cada elemento de data
      data.forEach(function (newItem) {
        if (itemsMap.has(newItem.id)) {
          // Actualizar el item existente
          var existingItem = itemsMap.get(newItem.id);
          Object.assign(existingItem, newItem);
        } else if (allowCreate) {
          // Agregar el nuevo item si allowCreate es true
          _this1.items.push(newItem);
        }
      });

      // Convertir el mapa de vuelta a un array, si es necesario
      this.items = Array.from(itemsMap.values());
    },
    externalUpdate: function externalUpdate(itemsUpdate) {
      var _this10 = this;
      var addIfNotExist = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;
      var key = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 'id';
      itemsUpdate.forEach(function (itemUpdate) {
        var itemInList = _this10.items.find(function (item) {
          return item[key] === itemUpdate[key];
        });
        if (itemInList) Object.assign(itemInList, itemUpdate);else {
          if (addIfNotExist) {
            _this10.items.push(itemUpdate);
          }
        }
      });
    },
    makePagination: function makePagination(data) {
      var _data$current_page, _data$last_page, _data$next_page_url, _data$prev_page_url, _data$total, _data$per_page;
      // Mutar propiedades existentes para mantener reactividad con provide/inject
      this.pagination.current_page = (_data$current_page = data.current_page) !== null && _data$current_page !== void 0 ? _data$current_page : 1;
      this.pagination.last_page = (_data$last_page = data.last_page) !== null && _data$last_page !== void 0 ? _data$last_page : 1;
      this.pagination.next_page_url = (_data$next_page_url = data.next_page_url) !== null && _data$next_page_url !== void 0 ? _data$next_page_url : "";
      this.pagination.prev_page_url = (_data$prev_page_url = data.prev_page_url) !== null && _data$prev_page_url !== void 0 ? _data$prev_page_url : "";
      this.pagination.total = (_data$total = data.total) !== null && _data$total !== void 0 ? _data$total : 0;
      this.pagination.per_page = (_data$per_page = data.per_page) !== null && _data$per_page !== void 0 ? _data$per_page : 20;
    }
  }
};var global$1 = (typeof global !== "undefined" ? global :
  typeof self !== "undefined" ? self :
  typeof window !== "undefined" ? window : {});// shim for using process in browser
// based off https://github.com/defunctzombie/node-process/blob/master/browser.js

function defaultSetTimout() {
    throw new Error('setTimeout has not been defined');
}
function defaultClearTimeout () {
    throw new Error('clearTimeout has not been defined');
}
var cachedSetTimeout = defaultSetTimout;
var cachedClearTimeout = defaultClearTimeout;
if (typeof global$1.setTimeout === 'function') {
    cachedSetTimeout = setTimeout;
}
if (typeof global$1.clearTimeout === 'function') {
    cachedClearTimeout = clearTimeout;
}

function runTimeout(fun) {
    if (cachedSetTimeout === setTimeout) {
        //normal enviroments in sane situations
        return setTimeout(fun, 0);
    }
    // if setTimeout wasn't available but was latter defined
    if ((cachedSetTimeout === defaultSetTimout || !cachedSetTimeout) && setTimeout) {
        cachedSetTimeout = setTimeout;
        return setTimeout(fun, 0);
    }
    try {
        // when when somebody has screwed with setTimeout but no I.E. maddness
        return cachedSetTimeout(fun, 0);
    } catch(e){
        try {
            // When we are in I.E. but the script has been evaled so I.E. doesn't trust the global object when called normally
            return cachedSetTimeout.call(null, fun, 0);
        } catch(e){
            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error
            return cachedSetTimeout.call(this, fun, 0);
        }
    }


}
function runClearTimeout(marker) {
    if (cachedClearTimeout === clearTimeout) {
        //normal enviroments in sane situations
        return clearTimeout(marker);
    }
    // if clearTimeout wasn't available but was latter defined
    if ((cachedClearTimeout === defaultClearTimeout || !cachedClearTimeout) && clearTimeout) {
        cachedClearTimeout = clearTimeout;
        return clearTimeout(marker);
    }
    try {
        // when when somebody has screwed with setTimeout but no I.E. maddness
        return cachedClearTimeout(marker);
    } catch (e){
        try {
            // When we are in I.E. but the script has been evaled so I.E. doesn't  trust the global object when called normally
            return cachedClearTimeout.call(null, marker);
        } catch (e){
            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error.
            // Some versions of I.E. have different rules for clearTimeout vs setTimeout
            return cachedClearTimeout.call(this, marker);
        }
    }



}
var queue = [];
var draining = false;
var currentQueue;
var queueIndex = -1;

function cleanUpNextTick() {
    if (!draining || !currentQueue) {
        return;
    }
    draining = false;
    if (currentQueue.length) {
        queue = currentQueue.concat(queue);
    } else {
        queueIndex = -1;
    }
    if (queue.length) {
        drainQueue();
    }
}

function drainQueue() {
    if (draining) {
        return;
    }
    var timeout = runTimeout(cleanUpNextTick);
    draining = true;

    var len = queue.length;
    while(len) {
        currentQueue = queue;
        queue = [];
        while (++queueIndex < len) {
            if (currentQueue) {
                currentQueue[queueIndex].run();
            }
        }
        queueIndex = -1;
        len = queue.length;
    }
    currentQueue = null;
    draining = false;
    runClearTimeout(timeout);
}
function nextTick(fun) {
    var args = new Array(arguments.length - 1);
    if (arguments.length > 1) {
        for (var i = 1; i < arguments.length; i++) {
            args[i - 1] = arguments[i];
        }
    }
    queue.push(new Item(fun, args));
    if (queue.length === 1 && !draining) {
        runTimeout(drainQueue);
    }
}
// v8 likes predictible objects
function Item(fun, array) {
    this.fun = fun;
    this.array = array;
}
Item.prototype.run = function () {
    this.fun.apply(null, this.array);
};
var title = 'browser';
var platform$2 = 'browser';
var browser = true;
var env = {};
var argv = [];
var version = ''; // empty string to avoid regexp issues
var versions = {};
var release = {};
var config = {};

function noop$1() {}

var on = noop$1;
var addListener = noop$1;
var once = noop$1;
var off = noop$1;
var removeListener = noop$1;
var removeAllListeners = noop$1;
var emit = noop$1;

function binding(name) {
    throw new Error('process.binding is not supported');
}

function cwd () { return '/' }
function chdir (dir) {
    throw new Error('process.chdir is not supported');
}function umask() { return 0; }

// from https://github.com/kumavis/browser-process-hrtime/blob/master/index.js
var performance = global$1.performance || {};
var performanceNow =
  performance.now        ||
  performance.mozNow     ||
  performance.msNow      ||
  performance.oNow       ||
  performance.webkitNow  ||
  function(){ return (new Date()).getTime() };

// generate timestamp or delta
// see http://nodejs.org/api/process.html#process_process_hrtime
function hrtime(previousTimestamp){
  var clocktime = performanceNow.call(performance)*1e-3;
  var seconds = Math.floor(clocktime);
  var nanoseconds = Math.floor((clocktime%1)*1e9);
  if (previousTimestamp) {
    seconds = seconds - previousTimestamp[0];
    nanoseconds = nanoseconds - previousTimestamp[1];
    if (nanoseconds<0) {
      seconds--;
      nanoseconds += 1e9;
    }
  }
  return [seconds,nanoseconds]
}

var startTime = new Date();
function uptime() {
  var currentTime = new Date();
  var dif = currentTime - startTime;
  return dif / 1000;
}

var browser$1 = {
  nextTick: nextTick,
  title: title,
  browser: browser,
  env: env,
  argv: argv,
  version: version,
  versions: versions,
  on: on,
  addListener: addListener,
  once: once,
  off: off,
  removeListener: removeListener,
  removeAllListeners: removeAllListeners,
  emit: emit,
  binding: binding,
  cwd: cwd,
  chdir: chdir,
  umask: umask,
  hrtime: hrtime,
  platform: platform$2,
  release: release,
  config: config,
  uptime: uptime
};/**
 * Create a bound version of a function with a specified `this` context
 *
 * @param {Function} fn - The function to bind
 * @param {*} thisArg - The value to be passed as the `this` parameter
 * @returns {Function} A new function that will call the original function with the specified `this` context
 */
function bind(fn, thisArg) {
  return function wrap() {
    return fn.apply(thisArg, arguments);
  };
}// utils is a library of generic helper functions non-specific to axios

const {toString: toString$1} = Object.prototype;
const {getPrototypeOf} = Object;
const {iterator, toStringTag} = Symbol;

const kindOf = (cache => thing => {
    const str = toString$1.call(thing);
    return cache[str] || (cache[str] = str.slice(8, -1).toLowerCase());
})(Object.create(null));

const kindOfTest = (type) => {
  type = type.toLowerCase();
  return (thing) => kindOf(thing) === type
};

const typeOfTest = type => thing => typeof thing === type;

/**
 * Determine if a value is an Array
 *
 * @param {Object} val The value to test
 *
 * @returns {boolean} True if value is an Array, otherwise false
 */
const {isArray: isArray$1} = Array;

/**
 * Determine if a value is undefined
 *
 * @param {*} val The value to test
 *
 * @returns {boolean} True if the value is undefined, otherwise false
 */
const isUndefined = typeOfTest('undefined');

/**
 * Determine if a value is a Buffer
 *
 * @param {*} val The value to test
 *
 * @returns {boolean} True if value is a Buffer, otherwise false
 */
function isBuffer$1(val) {
  return val !== null && !isUndefined(val) && val.constructor !== null && !isUndefined(val.constructor)
    && isFunction$1(val.constructor.isBuffer) && val.constructor.isBuffer(val);
}

/**
 * Determine if a value is an ArrayBuffer
 *
 * @param {*} val The value to test
 *
 * @returns {boolean} True if value is an ArrayBuffer, otherwise false
 */
const isArrayBuffer = kindOfTest('ArrayBuffer');


/**
 * Determine if a value is a view on an ArrayBuffer
 *
 * @param {*} val The value to test
 *
 * @returns {boolean} True if value is a view on an ArrayBuffer, otherwise false
 */
function isArrayBufferView(val) {
  let result;
  if ((typeof ArrayBuffer !== 'undefined') && (ArrayBuffer.isView)) {
    result = ArrayBuffer.isView(val);
  } else {
    result = (val) && (val.buffer) && (isArrayBuffer(val.buffer));
  }
  return result;
}

/**
 * Determine if a value is a String
 *
 * @param {*} val The value to test
 *
 * @returns {boolean} True if value is a String, otherwise false
 */
const isString = typeOfTest('string');

/**
 * Determine if a value is a Function
 *
 * @param {*} val The value to test
 * @returns {boolean} True if value is a Function, otherwise false
 */
const isFunction$1 = typeOfTest('function');

/**
 * Determine if a value is a Number
 *
 * @param {*} val The value to test
 *
 * @returns {boolean} True if value is a Number, otherwise false
 */
const isNumber = typeOfTest('number');

/**
 * Determine if a value is an Object
 *
 * @param {*} thing The value to test
 *
 * @returns {boolean} True if value is an Object, otherwise false
 */
const isObject = (thing) => thing !== null && typeof thing === 'object';

/**
 * Determine if a value is a Boolean
 *
 * @param {*} thing The value to test
 * @returns {boolean} True if value is a Boolean, otherwise false
 */
const isBoolean = thing => thing === true || thing === false;

/**
 * Determine if a value is a plain Object
 *
 * @param {*} val The value to test
 *
 * @returns {boolean} True if value is a plain Object, otherwise false
 */
const isPlainObject = (val) => {
  if (kindOf(val) !== 'object') {
    return false;
  }

  const prototype = getPrototypeOf(val);
  return (prototype === null || prototype === Object.prototype || Object.getPrototypeOf(prototype) === null) && !(toStringTag in val) && !(iterator in val);
};

/**
 * Determine if a value is an empty object (safely handles Buffers)
 *
 * @param {*} val The value to test
 *
 * @returns {boolean} True if value is an empty object, otherwise false
 */
const isEmptyObject = (val) => {
  // Early return for non-objects or Buffers to prevent RangeError
  if (!isObject(val) || isBuffer$1(val)) {
    return false;
  }

  try {
    return Object.keys(val).length === 0 && Object.getPrototypeOf(val) === Object.prototype;
  } catch (e) {
    // Fallback for any other objects that might cause RangeError with Object.keys()
    return false;
  }
};

/**
 * Determine if a value is a Date
 *
 * @param {*} val The value to test
 *
 * @returns {boolean} True if value is a Date, otherwise false
 */
const isDate = kindOfTest('Date');

/**
 * Determine if a value is a File
 *
 * @param {*} val The value to test
 *
 * @returns {boolean} True if value is a File, otherwise false
 */
const isFile = kindOfTest('File');

/**
 * Determine if a value is a Blob
 *
 * @param {*} val The value to test
 *
 * @returns {boolean} True if value is a Blob, otherwise false
 */
const isBlob = kindOfTest('Blob');

/**
 * Determine if a value is a FileList
 *
 * @param {*} val The value to test
 *
 * @returns {boolean} True if value is a File, otherwise false
 */
const isFileList = kindOfTest('FileList');

/**
 * Determine if a value is a Stream
 *
 * @param {*} val The value to test
 *
 * @returns {boolean} True if value is a Stream, otherwise false
 */
const isStream = (val) => isObject(val) && isFunction$1(val.pipe);

/**
 * Determine if a value is a FormData
 *
 * @param {*} thing The value to test
 *
 * @returns {boolean} True if value is an FormData, otherwise false
 */
const isFormData = (thing) => {
  let kind;
  return thing && (
    (typeof FormData === 'function' && thing instanceof FormData) || (
      isFunction$1(thing.append) && (
        (kind = kindOf(thing)) === 'formdata' ||
        // detect form-data instance
        (kind === 'object' && isFunction$1(thing.toString) && thing.toString() === '[object FormData]')
      )
    )
  )
};

/**
 * Determine if a value is a URLSearchParams object
 *
 * @param {*} val The value to test
 *
 * @returns {boolean} True if value is a URLSearchParams object, otherwise false
 */
const isURLSearchParams = kindOfTest('URLSearchParams');

const [isReadableStream, isRequest, isResponse, isHeaders] = ['ReadableStream', 'Request', 'Response', 'Headers'].map(kindOfTest);

/**
 * Trim excess whitespace off the beginning and end of a string
 *
 * @param {String} str The String to trim
 *
 * @returns {String} The String freed of excess whitespace
 */
const trim = (str) => str.trim ?
  str.trim() : str.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, '');

/**
 * Iterate over an Array or an Object invoking a function for each item.
 *
 * If `obj` is an Array callback will be called passing
 * the value, index, and complete array for each item.
 *
 * If 'obj' is an Object callback will be called passing
 * the value, key, and complete object for each property.
 *
 * @param {Object|Array<unknown>} obj The object to iterate
 * @param {Function} fn The callback to invoke for each item
 *
 * @param {Object} [options]
 * @param {Boolean} [options.allOwnKeys = false]
 * @returns {any}
 */
function forEach(obj, fn, {allOwnKeys = false} = {}) {
  // Don't bother if no value provided
  if (obj === null || typeof obj === 'undefined') {
    return;
  }

  let i;
  let l;

  // Force an array if not already something iterable
  if (typeof obj !== 'object') {
    /*eslint no-param-reassign:0*/
    obj = [obj];
  }

  if (isArray$1(obj)) {
    // Iterate over array values
    for (i = 0, l = obj.length; i < l; i++) {
      fn.call(null, obj[i], i, obj);
    }
  } else {
    // Buffer check
    if (isBuffer$1(obj)) {
      return;
    }

    // Iterate over object keys
    const keys = allOwnKeys ? Object.getOwnPropertyNames(obj) : Object.keys(obj);
    const len = keys.length;
    let key;

    for (i = 0; i < len; i++) {
      key = keys[i];
      fn.call(null, obj[key], key, obj);
    }
  }
}

function findKey(obj, key) {
  if (isBuffer$1(obj)){
    return null;
  }

  key = key.toLowerCase();
  const keys = Object.keys(obj);
  let i = keys.length;
  let _key;
  while (i-- > 0) {
    _key = keys[i];
    if (key === _key.toLowerCase()) {
      return _key;
    }
  }
  return null;
}

const _global = (() => {
  /*eslint no-undef:0*/
  if (typeof globalThis !== "undefined") return globalThis;
  return typeof self !== "undefined" ? self : (typeof window !== 'undefined' ? window : global$1)
})();

const isContextDefined = (context) => !isUndefined(context) && context !== _global;

/**
 * Accepts varargs expecting each argument to be an object, then
 * immutably merges the properties of each object and returns result.
 *
 * When multiple objects contain the same key the later object in
 * the arguments list will take precedence.
 *
 * Example:
 *
 * ```js
 * const result = merge({foo: 123}, {foo: 456});
 * console.log(result.foo); // outputs 456
 * ```
 *
 * @param {Object} obj1 Object to merge
 *
 * @returns {Object} Result of all merge properties
 */
function merge(/* obj1, obj2, obj3, ... */) {
  const {caseless, skipUndefined} = isContextDefined(this) && this || {};
  const result = {};
  const assignValue = (val, key) => {
    const targetKey = caseless && findKey(result, key) || key;
    if (isPlainObject(result[targetKey]) && isPlainObject(val)) {
      result[targetKey] = merge(result[targetKey], val);
    } else if (isPlainObject(val)) {
      result[targetKey] = merge({}, val);
    } else if (isArray$1(val)) {
      result[targetKey] = val.slice();
    } else if (!skipUndefined || !isUndefined(val)) {
      result[targetKey] = val;
    }
  };

  for (let i = 0, l = arguments.length; i < l; i++) {
    arguments[i] && forEach(arguments[i], assignValue);
  }
  return result;
}

/**
 * Extends object a by mutably adding to it the properties of object b.
 *
 * @param {Object} a The object to be extended
 * @param {Object} b The object to copy properties from
 * @param {Object} thisArg The object to bind function to
 *
 * @param {Object} [options]
 * @param {Boolean} [options.allOwnKeys]
 * @returns {Object} The resulting value of object a
 */
const extend = (a, b, thisArg, {allOwnKeys}= {}) => {
  forEach(b, (val, key) => {
    if (thisArg && isFunction$1(val)) {
      Object.defineProperty(a, key, {
        value: bind(val, thisArg),
        writable: true,
        enumerable: true,
        configurable: true
      });
    } else {
      Object.defineProperty(a, key, {
        value: val,
        writable: true,
        enumerable: true,
        configurable: true
      });
    }
  }, {allOwnKeys});
  return a;
};

/**
 * Remove byte order marker. This catches EF BB BF (the UTF-8 BOM)
 *
 * @param {string} content with BOM
 *
 * @returns {string} content value without BOM
 */
const stripBOM = (content) => {
  if (content.charCodeAt(0) === 0xFEFF) {
    content = content.slice(1);
  }
  return content;
};

/**
 * Inherit the prototype methods from one constructor into another
 * @param {function} constructor
 * @param {function} superConstructor
 * @param {object} [props]
 * @param {object} [descriptors]
 *
 * @returns {void}
 */
const inherits = (constructor, superConstructor, props, descriptors) => {
  constructor.prototype = Object.create(superConstructor.prototype, descriptors);
  Object.defineProperty(constructor.prototype, 'constructor', {
    value: constructor,
    writable: true,
    enumerable: false,
    configurable: true
  });
  Object.defineProperty(constructor, 'super', {
    value: superConstructor.prototype
  });
  props && Object.assign(constructor.prototype, props);
};

/**
 * Resolve object with deep prototype chain to a flat object
 * @param {Object} sourceObj source object
 * @param {Object} [destObj]
 * @param {Function|Boolean} [filter]
 * @param {Function} [propFilter]
 *
 * @returns {Object}
 */
const toFlatObject = (sourceObj, destObj, filter, propFilter) => {
  let props;
  let i;
  let prop;
  const merged = {};

  destObj = destObj || {};
  // eslint-disable-next-line no-eq-null,eqeqeq
  if (sourceObj == null) return destObj;

  do {
    props = Object.getOwnPropertyNames(sourceObj);
    i = props.length;
    while (i-- > 0) {
      prop = props[i];
      if ((!propFilter || propFilter(prop, sourceObj, destObj)) && !merged[prop]) {
        destObj[prop] = sourceObj[prop];
        merged[prop] = true;
      }
    }
    sourceObj = filter !== false && getPrototypeOf(sourceObj);
  } while (sourceObj && (!filter || filter(sourceObj, destObj)) && sourceObj !== Object.prototype);

  return destObj;
};

/**
 * Determines whether a string ends with the characters of a specified string
 *
 * @param {String} str
 * @param {String} searchString
 * @param {Number} [position= 0]
 *
 * @returns {boolean}
 */
const endsWith = (str, searchString, position) => {
  str = String(str);
  if (position === undefined || position > str.length) {
    position = str.length;
  }
  position -= searchString.length;
  const lastIndex = str.indexOf(searchString, position);
  return lastIndex !== -1 && lastIndex === position;
};


/**
 * Returns new array from array like object or null if failed
 *
 * @param {*} [thing]
 *
 * @returns {?Array}
 */
const toArray = (thing) => {
  if (!thing) return null;
  if (isArray$1(thing)) return thing;
  let i = thing.length;
  if (!isNumber(i)) return null;
  const arr = new Array(i);
  while (i-- > 0) {
    arr[i] = thing[i];
  }
  return arr;
};

/**
 * Checking if the Uint8Array exists and if it does, it returns a function that checks if the
 * thing passed in is an instance of Uint8Array
 *
 * @param {TypedArray}
 *
 * @returns {Array}
 */
// eslint-disable-next-line func-names
const isTypedArray = (TypedArray => {
  // eslint-disable-next-line func-names
  return thing => {
    return TypedArray && thing instanceof TypedArray;
  };
})(typeof Uint8Array !== 'undefined' && getPrototypeOf(Uint8Array));

/**
 * For each entry in the object, call the function with the key and value.
 *
 * @param {Object<any, any>} obj - The object to iterate over.
 * @param {Function} fn - The function to call for each entry.
 *
 * @returns {void}
 */
const forEachEntry = (obj, fn) => {
  const generator = obj && obj[iterator];

  const _iterator = generator.call(obj);

  let result;

  while ((result = _iterator.next()) && !result.done) {
    const pair = result.value;
    fn.call(obj, pair[0], pair[1]);
  }
};

/**
 * It takes a regular expression and a string, and returns an array of all the matches
 *
 * @param {string} regExp - The regular expression to match against.
 * @param {string} str - The string to search.
 *
 * @returns {Array<boolean>}
 */
const matchAll = (regExp, str) => {
  let matches;
  const arr = [];

  while ((matches = regExp.exec(str)) !== null) {
    arr.push(matches);
  }

  return arr;
};

/* Checking if the kindOfTest function returns true when passed an HTMLFormElement. */
const isHTMLForm = kindOfTest('HTMLFormElement');

const toCamelCase = str => {
  return str.toLowerCase().replace(/[-_\s]([a-z\d])(\w*)/g,
    function replacer(m, p1, p2) {
      return p1.toUpperCase() + p2;
    }
  );
};

/* Creating a function that will check if an object has a property. */
const hasOwnProperty = (({hasOwnProperty}) => (obj, prop) => hasOwnProperty.call(obj, prop))(Object.prototype);

/**
 * Determine if a value is a RegExp object
 *
 * @param {*} val The value to test
 *
 * @returns {boolean} True if value is a RegExp object, otherwise false
 */
const isRegExp = kindOfTest('RegExp');

const reduceDescriptors = (obj, reducer) => {
  const descriptors = Object.getOwnPropertyDescriptors(obj);
  const reducedDescriptors = {};

  forEach(descriptors, (descriptor, name) => {
    let ret;
    if ((ret = reducer(descriptor, name, obj)) !== false) {
      reducedDescriptors[name] = ret || descriptor;
    }
  });

  Object.defineProperties(obj, reducedDescriptors);
};

/**
 * Makes all methods read-only
 * @param {Object} obj
 */

const freezeMethods = (obj) => {
  reduceDescriptors(obj, (descriptor, name) => {
    // skip restricted props in strict mode
    if (isFunction$1(obj) && ['arguments', 'caller', 'callee'].indexOf(name) !== -1) {
      return false;
    }

    const value = obj[name];

    if (!isFunction$1(value)) return;

    descriptor.enumerable = false;

    if ('writable' in descriptor) {
      descriptor.writable = false;
      return;
    }

    if (!descriptor.set) {
      descriptor.set = () => {
        throw Error('Can not rewrite read-only method \'' + name + '\'');
      };
    }
  });
};

const toObjectSet = (arrayOrString, delimiter) => {
  const obj = {};

  const define = (arr) => {
    arr.forEach(value => {
      obj[value] = true;
    });
  };

  isArray$1(arrayOrString) ? define(arrayOrString) : define(String(arrayOrString).split(delimiter));

  return obj;
};

const noop = () => {};

const toFiniteNumber = (value, defaultValue) => {
  return value != null && Number.isFinite(value = +value) ? value : defaultValue;
};



/**
 * If the thing is a FormData object, return true, otherwise return false.
 *
 * @param {unknown} thing - The thing to check.
 *
 * @returns {boolean}
 */
function isSpecCompliantForm(thing) {
  return !!(thing && isFunction$1(thing.append) && thing[toStringTag] === 'FormData' && thing[iterator]);
}

const toJSONObject = (obj) => {
  const stack = new Array(10);

  const visit = (source, i) => {

    if (isObject(source)) {
      if (stack.indexOf(source) >= 0) {
        return;
      }

      //Buffer check
      if (isBuffer$1(source)) {
        return source;
      }

      if(!('toJSON' in source)) {
        stack[i] = source;
        const target = isArray$1(source) ? [] : {};

        forEach(source, (value, key) => {
          const reducedValue = visit(value, i + 1);
          !isUndefined(reducedValue) && (target[key] = reducedValue);
        });

        stack[i] = undefined;

        return target;
      }
    }

    return source;
  };

  return visit(obj, 0);
};

const isAsyncFn = kindOfTest('AsyncFunction');

const isThenable = (thing) =>
  thing && (isObject(thing) || isFunction$1(thing)) && isFunction$1(thing.then) && isFunction$1(thing.catch);

// original code
// https://github.com/DigitalBrainJS/AxiosPromise/blob/16deab13710ec09779922131f3fa5954320f83ab/lib/utils.js#L11-L34

const _setImmediate = ((setImmediateSupported, postMessageSupported) => {
  if (setImmediateSupported) {
    return setImmediate;
  }

  return postMessageSupported ? ((token, callbacks) => {
    _global.addEventListener("message", ({source, data}) => {
      if (source === _global && data === token) {
        callbacks.length && callbacks.shift()();
      }
    }, false);

    return (cb) => {
      callbacks.push(cb);
      _global.postMessage(token, "*");
    }
  })(`axios@${Math.random()}`, []) : (cb) => setTimeout(cb);
})(
  typeof setImmediate === 'function',
  isFunction$1(_global.postMessage)
);

const asap = typeof queueMicrotask !== 'undefined' ?
  queueMicrotask.bind(_global) : ( typeof browser$1 !== 'undefined' && browser$1.nextTick || _setImmediate);

// *********************


const isIterable = (thing) => thing != null && isFunction$1(thing[iterator]);


var utils$1 = {
  isArray: isArray$1,
  isArrayBuffer,
  isBuffer: isBuffer$1,
  isFormData,
  isArrayBufferView,
  isString,
  isNumber,
  isBoolean,
  isObject,
  isPlainObject,
  isEmptyObject,
  isReadableStream,
  isRequest,
  isResponse,
  isHeaders,
  isUndefined,
  isDate,
  isFile,
  isBlob,
  isRegExp,
  isFunction: isFunction$1,
  isStream,
  isURLSearchParams,
  isTypedArray,
  isFileList,
  forEach,
  merge,
  extend,
  trim,
  stripBOM,
  inherits,
  toFlatObject,
  kindOf,
  kindOfTest,
  endsWith,
  toArray,
  forEachEntry,
  matchAll,
  isHTMLForm,
  hasOwnProperty,
  hasOwnProp: hasOwnProperty, // an alias to avoid ESLint no-prototype-builtins detection
  reduceDescriptors,
  freezeMethods,
  toObjectSet,
  toCamelCase,
  noop,
  toFiniteNumber,
  findKey,
  global: _global,
  isContextDefined,
  isSpecCompliantForm,
  toJSONObject,
  isAsyncFn,
  isThenable,
  setImmediate: _setImmediate,
  asap,
  isIterable
};var lookup = [];
var revLookup = [];
var Arr = typeof Uint8Array !== 'undefined' ? Uint8Array : Array;
var inited = false;
function init () {
  inited = true;
  var code = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/';
  for (var i = 0, len = code.length; i < len; ++i) {
    lookup[i] = code[i];
    revLookup[code.charCodeAt(i)] = i;
  }

  revLookup['-'.charCodeAt(0)] = 62;
  revLookup['_'.charCodeAt(0)] = 63;
}

function toByteArray (b64) {
  if (!inited) {
    init();
  }
  var i, j, l, tmp, placeHolders, arr;
  var len = b64.length;

  if (len % 4 > 0) {
    throw new Error('Invalid string. Length must be a multiple of 4')
  }

  // the number of equal signs (place holders)
  // if there are two placeholders, than the two characters before it
  // represent one byte
  // if there is only one, then the three characters before it represent 2 bytes
  // this is just a cheap hack to not do indexOf twice
  placeHolders = b64[len - 2] === '=' ? 2 : b64[len - 1] === '=' ? 1 : 0;

  // base64 is 4/3 + up to two characters of the original data
  arr = new Arr(len * 3 / 4 - placeHolders);

  // if there are placeholders, only get up to the last complete 4 chars
  l = placeHolders > 0 ? len - 4 : len;

  var L = 0;

  for (i = 0, j = 0; i < l; i += 4, j += 3) {
    tmp = (revLookup[b64.charCodeAt(i)] << 18) | (revLookup[b64.charCodeAt(i + 1)] << 12) | (revLookup[b64.charCodeAt(i + 2)] << 6) | revLookup[b64.charCodeAt(i + 3)];
    arr[L++] = (tmp >> 16) & 0xFF;
    arr[L++] = (tmp >> 8) & 0xFF;
    arr[L++] = tmp & 0xFF;
  }

  if (placeHolders === 2) {
    tmp = (revLookup[b64.charCodeAt(i)] << 2) | (revLookup[b64.charCodeAt(i + 1)] >> 4);
    arr[L++] = tmp & 0xFF;
  } else if (placeHolders === 1) {
    tmp = (revLookup[b64.charCodeAt(i)] << 10) | (revLookup[b64.charCodeAt(i + 1)] << 4) | (revLookup[b64.charCodeAt(i + 2)] >> 2);
    arr[L++] = (tmp >> 8) & 0xFF;
    arr[L++] = tmp & 0xFF;
  }

  return arr
}

function tripletToBase64 (num) {
  return lookup[num >> 18 & 0x3F] + lookup[num >> 12 & 0x3F] + lookup[num >> 6 & 0x3F] + lookup[num & 0x3F]
}

function encodeChunk (uint8, start, end) {
  var tmp;
  var output = [];
  for (var i = start; i < end; i += 3) {
    tmp = (uint8[i] << 16) + (uint8[i + 1] << 8) + (uint8[i + 2]);
    output.push(tripletToBase64(tmp));
  }
  return output.join('')
}

function fromByteArray (uint8) {
  if (!inited) {
    init();
  }
  var tmp;
  var len = uint8.length;
  var extraBytes = len % 3; // if we have 1 byte left, pad 2 bytes
  var output = '';
  var parts = [];
  var maxChunkLength = 16383; // must be multiple of 3

  // go through the array every three bytes, we'll deal with trailing stuff later
  for (var i = 0, len2 = len - extraBytes; i < len2; i += maxChunkLength) {
    parts.push(encodeChunk(uint8, i, (i + maxChunkLength) > len2 ? len2 : (i + maxChunkLength)));
  }

  // pad the end with zeros, but make sure to not forget the extra bytes
  if (extraBytes === 1) {
    tmp = uint8[len - 1];
    output += lookup[tmp >> 2];
    output += lookup[(tmp << 4) & 0x3F];
    output += '==';
  } else if (extraBytes === 2) {
    tmp = (uint8[len - 2] << 8) + (uint8[len - 1]);
    output += lookup[tmp >> 10];
    output += lookup[(tmp >> 4) & 0x3F];
    output += lookup[(tmp << 2) & 0x3F];
    output += '=';
  }

  parts.push(output);

  return parts.join('')
}

function read (buffer, offset, isLE, mLen, nBytes) {
  var e, m;
  var eLen = nBytes * 8 - mLen - 1;
  var eMax = (1 << eLen) - 1;
  var eBias = eMax >> 1;
  var nBits = -7;
  var i = isLE ? (nBytes - 1) : 0;
  var d = isLE ? -1 : 1;
  var s = buffer[offset + i];

  i += d;

  e = s & ((1 << (-nBits)) - 1);
  s >>= (-nBits);
  nBits += eLen;
  for (; nBits > 0; e = e * 256 + buffer[offset + i], i += d, nBits -= 8) {}

  m = e & ((1 << (-nBits)) - 1);
  e >>= (-nBits);
  nBits += mLen;
  for (; nBits > 0; m = m * 256 + buffer[offset + i], i += d, nBits -= 8) {}

  if (e === 0) {
    e = 1 - eBias;
  } else if (e === eMax) {
    return m ? NaN : ((s ? -1 : 1) * Infinity)
  } else {
    m = m + Math.pow(2, mLen);
    e = e - eBias;
  }
  return (s ? -1 : 1) * m * Math.pow(2, e - mLen)
}

function write (buffer, value, offset, isLE, mLen, nBytes) {
  var e, m, c;
  var eLen = nBytes * 8 - mLen - 1;
  var eMax = (1 << eLen) - 1;
  var eBias = eMax >> 1;
  var rt = (mLen === 23 ? Math.pow(2, -24) - Math.pow(2, -77) : 0);
  var i = isLE ? 0 : (nBytes - 1);
  var d = isLE ? 1 : -1;
  var s = value < 0 || (value === 0 && 1 / value < 0) ? 1 : 0;

  value = Math.abs(value);

  if (isNaN(value) || value === Infinity) {
    m = isNaN(value) ? 1 : 0;
    e = eMax;
  } else {
    e = Math.floor(Math.log(value) / Math.LN2);
    if (value * (c = Math.pow(2, -e)) < 1) {
      e--;
      c *= 2;
    }
    if (e + eBias >= 1) {
      value += rt / c;
    } else {
      value += rt * Math.pow(2, 1 - eBias);
    }
    if (value * c >= 2) {
      e++;
      c /= 2;
    }

    if (e + eBias >= eMax) {
      m = 0;
      e = eMax;
    } else if (e + eBias >= 1) {
      m = (value * c - 1) * Math.pow(2, mLen);
      e = e + eBias;
    } else {
      m = value * Math.pow(2, eBias - 1) * Math.pow(2, mLen);
      e = 0;
    }
  }

  for (; mLen >= 8; buffer[offset + i] = m & 0xff, i += d, m /= 256, mLen -= 8) {}

  e = (e << mLen) | m;
  eLen += mLen;
  for (; eLen > 0; buffer[offset + i] = e & 0xff, i += d, e /= 256, eLen -= 8) {}

  buffer[offset + i - d] |= s * 128;
}

var toString = {}.toString;

var isArray = Array.isArray || function (arr) {
  return toString.call(arr) == '[object Array]';
};

/*!
 * The buffer module from node.js, for the browser.
 *
 * @author   Feross Aboukhadijeh <feross@feross.org> <http://feross.org>
 * @license  MIT
 */

var INSPECT_MAX_BYTES = 50;

/**
 * If `Buffer.TYPED_ARRAY_SUPPORT`:
 *   === true    Use Uint8Array implementation (fastest)
 *   === false   Use Object implementation (most compatible, even IE6)
 *
 * Browsers that support typed arrays are IE 10+, Firefox 4+, Chrome 7+, Safari 5.1+,
 * Opera 11.6+, iOS 4.2+.
 *
 * Due to various browser bugs, sometimes the Object implementation will be used even
 * when the browser supports typed arrays.
 *
 * Note:
 *
 *   - Firefox 4-29 lacks support for adding new properties to `Uint8Array` instances,
 *     See: https://bugzilla.mozilla.org/show_bug.cgi?id=695438.
 *
 *   - Chrome 9-10 is missing the `TypedArray.prototype.subarray` function.
 *
 *   - IE10 has a broken `TypedArray.prototype.subarray` function which returns arrays of
 *     incorrect length in some situations.

 * We detect these buggy browsers and set `Buffer.TYPED_ARRAY_SUPPORT` to `false` so they
 * get the Object implementation, which is slower but behaves correctly.
 */
Buffer.TYPED_ARRAY_SUPPORT = global$1.TYPED_ARRAY_SUPPORT !== undefined
  ? global$1.TYPED_ARRAY_SUPPORT
  : true;

/*
 * Export kMaxLength after typed array support is determined.
 */
kMaxLength();

function kMaxLength () {
  return Buffer.TYPED_ARRAY_SUPPORT
    ? 0x7fffffff
    : 0x3fffffff
}

function createBuffer (that, length) {
  if (kMaxLength() < length) {
    throw new RangeError('Invalid typed array length')
  }
  if (Buffer.TYPED_ARRAY_SUPPORT) {
    // Return an augmented `Uint8Array` instance, for best performance
    that = new Uint8Array(length);
    that.__proto__ = Buffer.prototype;
  } else {
    // Fallback: Return an object instance of the Buffer class
    if (that === null) {
      that = new Buffer(length);
    }
    that.length = length;
  }

  return that
}

/**
 * The Buffer constructor returns instances of `Uint8Array` that have their
 * prototype changed to `Buffer.prototype`. Furthermore, `Buffer` is a subclass of
 * `Uint8Array`, so the returned instances will have all the node `Buffer` methods
 * and the `Uint8Array` methods. Square bracket notation works as expected -- it
 * returns a single octet.
 *
 * The `Uint8Array` prototype remains unmodified.
 */

function Buffer (arg, encodingOrOffset, length) {
  if (!Buffer.TYPED_ARRAY_SUPPORT && !(this instanceof Buffer)) {
    return new Buffer(arg, encodingOrOffset, length)
  }

  // Common case.
  if (typeof arg === 'number') {
    if (typeof encodingOrOffset === 'string') {
      throw new Error(
        'If encoding is specified then the first argument must be a string'
      )
    }
    return allocUnsafe(this, arg)
  }
  return from(this, arg, encodingOrOffset, length)
}

Buffer.poolSize = 8192; // not used by this implementation

// TODO: Legacy, not needed anymore. Remove in next major version.
Buffer._augment = function (arr) {
  arr.__proto__ = Buffer.prototype;
  return arr
};

function from (that, value, encodingOrOffset, length) {
  if (typeof value === 'number') {
    throw new TypeError('"value" argument must not be a number')
  }

  if (typeof ArrayBuffer !== 'undefined' && value instanceof ArrayBuffer) {
    return fromArrayBuffer(that, value, encodingOrOffset, length)
  }

  if (typeof value === 'string') {
    return fromString(that, value, encodingOrOffset)
  }

  return fromObject(that, value)
}

/**
 * Functionally equivalent to Buffer(arg, encoding) but throws a TypeError
 * if value is a number.
 * Buffer.from(str[, encoding])
 * Buffer.from(array)
 * Buffer.from(buffer)
 * Buffer.from(arrayBuffer[, byteOffset[, length]])
 **/
Buffer.from = function (value, encodingOrOffset, length) {
  return from(null, value, encodingOrOffset, length)
};

if (Buffer.TYPED_ARRAY_SUPPORT) {
  Buffer.prototype.__proto__ = Uint8Array.prototype;
  Buffer.__proto__ = Uint8Array;
  if (typeof Symbol !== 'undefined' && Symbol.species &&
      Buffer[Symbol.species] === Buffer) ;
}

function assertSize (size) {
  if (typeof size !== 'number') {
    throw new TypeError('"size" argument must be a number')
  } else if (size < 0) {
    throw new RangeError('"size" argument must not be negative')
  }
}

function alloc (that, size, fill, encoding) {
  assertSize(size);
  if (size <= 0) {
    return createBuffer(that, size)
  }
  if (fill !== undefined) {
    // Only pay attention to encoding if it's a string. This
    // prevents accidentally sending in a number that would
    // be interpretted as a start offset.
    return typeof encoding === 'string'
      ? createBuffer(that, size).fill(fill, encoding)
      : createBuffer(that, size).fill(fill)
  }
  return createBuffer(that, size)
}

/**
 * Creates a new filled Buffer instance.
 * alloc(size[, fill[, encoding]])
 **/
Buffer.alloc = function (size, fill, encoding) {
  return alloc(null, size, fill, encoding)
};

function allocUnsafe (that, size) {
  assertSize(size);
  that = createBuffer(that, size < 0 ? 0 : checked(size) | 0);
  if (!Buffer.TYPED_ARRAY_SUPPORT) {
    for (var i = 0; i < size; ++i) {
      that[i] = 0;
    }
  }
  return that
}

/**
 * Equivalent to Buffer(num), by default creates a non-zero-filled Buffer instance.
 * */
Buffer.allocUnsafe = function (size) {
  return allocUnsafe(null, size)
};
/**
 * Equivalent to SlowBuffer(num), by default creates a non-zero-filled Buffer instance.
 */
Buffer.allocUnsafeSlow = function (size) {
  return allocUnsafe(null, size)
};

function fromString (that, string, encoding) {
  if (typeof encoding !== 'string' || encoding === '') {
    encoding = 'utf8';
  }

  if (!Buffer.isEncoding(encoding)) {
    throw new TypeError('"encoding" must be a valid string encoding')
  }

  var length = byteLength(string, encoding) | 0;
  that = createBuffer(that, length);

  var actual = that.write(string, encoding);

  if (actual !== length) {
    // Writing a hex string, for example, that contains invalid characters will
    // cause everything after the first invalid character to be ignored. (e.g.
    // 'abxxcd' will be treated as 'ab')
    that = that.slice(0, actual);
  }

  return that
}

function fromArrayLike (that, array) {
  var length = array.length < 0 ? 0 : checked(array.length) | 0;
  that = createBuffer(that, length);
  for (var i = 0; i < length; i += 1) {
    that[i] = array[i] & 255;
  }
  return that
}

function fromArrayBuffer (that, array, byteOffset, length) {
  array.byteLength; // this throws if `array` is not a valid ArrayBuffer

  if (byteOffset < 0 || array.byteLength < byteOffset) {
    throw new RangeError('\'offset\' is out of bounds')
  }

  if (array.byteLength < byteOffset + (length || 0)) {
    throw new RangeError('\'length\' is out of bounds')
  }

  if (byteOffset === undefined && length === undefined) {
    array = new Uint8Array(array);
  } else if (length === undefined) {
    array = new Uint8Array(array, byteOffset);
  } else {
    array = new Uint8Array(array, byteOffset, length);
  }

  if (Buffer.TYPED_ARRAY_SUPPORT) {
    // Return an augmented `Uint8Array` instance, for best performance
    that = array;
    that.__proto__ = Buffer.prototype;
  } else {
    // Fallback: Return an object instance of the Buffer class
    that = fromArrayLike(that, array);
  }
  return that
}

function fromObject (that, obj) {
  if (internalIsBuffer(obj)) {
    var len = checked(obj.length) | 0;
    that = createBuffer(that, len);

    if (that.length === 0) {
      return that
    }

    obj.copy(that, 0, 0, len);
    return that
  }

  if (obj) {
    if ((typeof ArrayBuffer !== 'undefined' &&
        obj.buffer instanceof ArrayBuffer) || 'length' in obj) {
      if (typeof obj.length !== 'number' || isnan(obj.length)) {
        return createBuffer(that, 0)
      }
      return fromArrayLike(that, obj)
    }

    if (obj.type === 'Buffer' && isArray(obj.data)) {
      return fromArrayLike(that, obj.data)
    }
  }

  throw new TypeError('First argument must be a string, Buffer, ArrayBuffer, Array, or array-like object.')
}

function checked (length) {
  // Note: cannot use `length < kMaxLength()` here because that fails when
  // length is NaN (which is otherwise coerced to zero.)
  if (length >= kMaxLength()) {
    throw new RangeError('Attempt to allocate Buffer larger than maximum ' +
                         'size: 0x' + kMaxLength().toString(16) + ' bytes')
  }
  return length | 0
}
Buffer.isBuffer = isBuffer;
function internalIsBuffer (b) {
  return !!(b != null && b._isBuffer)
}

Buffer.compare = function compare (a, b) {
  if (!internalIsBuffer(a) || !internalIsBuffer(b)) {
    throw new TypeError('Arguments must be Buffers')
  }

  if (a === b) return 0

  var x = a.length;
  var y = b.length;

  for (var i = 0, len = Math.min(x, y); i < len; ++i) {
    if (a[i] !== b[i]) {
      x = a[i];
      y = b[i];
      break
    }
  }

  if (x < y) return -1
  if (y < x) return 1
  return 0
};

Buffer.isEncoding = function isEncoding (encoding) {
  switch (String(encoding).toLowerCase()) {
    case 'hex':
    case 'utf8':
    case 'utf-8':
    case 'ascii':
    case 'latin1':
    case 'binary':
    case 'base64':
    case 'ucs2':
    case 'ucs-2':
    case 'utf16le':
    case 'utf-16le':
      return true
    default:
      return false
  }
};

Buffer.concat = function concat (list, length) {
  if (!isArray(list)) {
    throw new TypeError('"list" argument must be an Array of Buffers')
  }

  if (list.length === 0) {
    return Buffer.alloc(0)
  }

  var i;
  if (length === undefined) {
    length = 0;
    for (i = 0; i < list.length; ++i) {
      length += list[i].length;
    }
  }

  var buffer = Buffer.allocUnsafe(length);
  var pos = 0;
  for (i = 0; i < list.length; ++i) {
    var buf = list[i];
    if (!internalIsBuffer(buf)) {
      throw new TypeError('"list" argument must be an Array of Buffers')
    }
    buf.copy(buffer, pos);
    pos += buf.length;
  }
  return buffer
};

function byteLength (string, encoding) {
  if (internalIsBuffer(string)) {
    return string.length
  }
  if (typeof ArrayBuffer !== 'undefined' && typeof ArrayBuffer.isView === 'function' &&
      (ArrayBuffer.isView(string) || string instanceof ArrayBuffer)) {
    return string.byteLength
  }
  if (typeof string !== 'string') {
    string = '' + string;
  }

  var len = string.length;
  if (len === 0) return 0

  // Use a for loop to avoid recursion
  var loweredCase = false;
  for (;;) {
    switch (encoding) {
      case 'ascii':
      case 'latin1':
      case 'binary':
        return len
      case 'utf8':
      case 'utf-8':
      case undefined:
        return utf8ToBytes(string).length
      case 'ucs2':
      case 'ucs-2':
      case 'utf16le':
      case 'utf-16le':
        return len * 2
      case 'hex':
        return len >>> 1
      case 'base64':
        return base64ToBytes(string).length
      default:
        if (loweredCase) return utf8ToBytes(string).length // assume utf8
        encoding = ('' + encoding).toLowerCase();
        loweredCase = true;
    }
  }
}
Buffer.byteLength = byteLength;

function slowToString (encoding, start, end) {
  var loweredCase = false;

  // No need to verify that "this.length <= MAX_UINT32" since it's a read-only
  // property of a typed array.

  // This behaves neither like String nor Uint8Array in that we set start/end
  // to their upper/lower bounds if the value passed is out of range.
  // undefined is handled specially as per ECMA-262 6th Edition,
  // Section 13.3.3.7 Runtime Semantics: KeyedBindingInitialization.
  if (start === undefined || start < 0) {
    start = 0;
  }
  // Return early if start > this.length. Done here to prevent potential uint32
  // coercion fail below.
  if (start > this.length) {
    return ''
  }

  if (end === undefined || end > this.length) {
    end = this.length;
  }

  if (end <= 0) {
    return ''
  }

  // Force coersion to uint32. This will also coerce falsey/NaN values to 0.
  end >>>= 0;
  start >>>= 0;

  if (end <= start) {
    return ''
  }

  if (!encoding) encoding = 'utf8';

  while (true) {
    switch (encoding) {
      case 'hex':
        return hexSlice(this, start, end)

      case 'utf8':
      case 'utf-8':
        return utf8Slice(this, start, end)

      case 'ascii':
        return asciiSlice(this, start, end)

      case 'latin1':
      case 'binary':
        return latin1Slice(this, start, end)

      case 'base64':
        return base64Slice(this, start, end)

      case 'ucs2':
      case 'ucs-2':
      case 'utf16le':
      case 'utf-16le':
        return utf16leSlice(this, start, end)

      default:
        if (loweredCase) throw new TypeError('Unknown encoding: ' + encoding)
        encoding = (encoding + '').toLowerCase();
        loweredCase = true;
    }
  }
}

// The property is used by `Buffer.isBuffer` and `is-buffer` (in Safari 5-7) to detect
// Buffer instances.
Buffer.prototype._isBuffer = true;

function swap (b, n, m) {
  var i = b[n];
  b[n] = b[m];
  b[m] = i;
}

Buffer.prototype.swap16 = function swap16 () {
  var len = this.length;
  if (len % 2 !== 0) {
    throw new RangeError('Buffer size must be a multiple of 16-bits')
  }
  for (var i = 0; i < len; i += 2) {
    swap(this, i, i + 1);
  }
  return this
};

Buffer.prototype.swap32 = function swap32 () {
  var len = this.length;
  if (len % 4 !== 0) {
    throw new RangeError('Buffer size must be a multiple of 32-bits')
  }
  for (var i = 0; i < len; i += 4) {
    swap(this, i, i + 3);
    swap(this, i + 1, i + 2);
  }
  return this
};

Buffer.prototype.swap64 = function swap64 () {
  var len = this.length;
  if (len % 8 !== 0) {
    throw new RangeError('Buffer size must be a multiple of 64-bits')
  }
  for (var i = 0; i < len; i += 8) {
    swap(this, i, i + 7);
    swap(this, i + 1, i + 6);
    swap(this, i + 2, i + 5);
    swap(this, i + 3, i + 4);
  }
  return this
};

Buffer.prototype.toString = function toString () {
  var length = this.length | 0;
  if (length === 0) return ''
  if (arguments.length === 0) return utf8Slice(this, 0, length)
  return slowToString.apply(this, arguments)
};

Buffer.prototype.equals = function equals (b) {
  if (!internalIsBuffer(b)) throw new TypeError('Argument must be a Buffer')
  if (this === b) return true
  return Buffer.compare(this, b) === 0
};

Buffer.prototype.inspect = function inspect () {
  var str = '';
  var max = INSPECT_MAX_BYTES;
  if (this.length > 0) {
    str = this.toString('hex', 0, max).match(/.{2}/g).join(' ');
    if (this.length > max) str += ' ... ';
  }
  return '<Buffer ' + str + '>'
};

Buffer.prototype.compare = function compare (target, start, end, thisStart, thisEnd) {
  if (!internalIsBuffer(target)) {
    throw new TypeError('Argument must be a Buffer')
  }

  if (start === undefined) {
    start = 0;
  }
  if (end === undefined) {
    end = target ? target.length : 0;
  }
  if (thisStart === undefined) {
    thisStart = 0;
  }
  if (thisEnd === undefined) {
    thisEnd = this.length;
  }

  if (start < 0 || end > target.length || thisStart < 0 || thisEnd > this.length) {
    throw new RangeError('out of range index')
  }

  if (thisStart >= thisEnd && start >= end) {
    return 0
  }
  if (thisStart >= thisEnd) {
    return -1
  }
  if (start >= end) {
    return 1
  }

  start >>>= 0;
  end >>>= 0;
  thisStart >>>= 0;
  thisEnd >>>= 0;

  if (this === target) return 0

  var x = thisEnd - thisStart;
  var y = end - start;
  var len = Math.min(x, y);

  var thisCopy = this.slice(thisStart, thisEnd);
  var targetCopy = target.slice(start, end);

  for (var i = 0; i < len; ++i) {
    if (thisCopy[i] !== targetCopy[i]) {
      x = thisCopy[i];
      y = targetCopy[i];
      break
    }
  }

  if (x < y) return -1
  if (y < x) return 1
  return 0
};

// Finds either the first index of `val` in `buffer` at offset >= `byteOffset`,
// OR the last index of `val` in `buffer` at offset <= `byteOffset`.
//
// Arguments:
// - buffer - a Buffer to search
// - val - a string, Buffer, or number
// - byteOffset - an index into `buffer`; will be clamped to an int32
// - encoding - an optional encoding, relevant is val is a string
// - dir - true for indexOf, false for lastIndexOf
function bidirectionalIndexOf (buffer, val, byteOffset, encoding, dir) {
  // Empty buffer means no match
  if (buffer.length === 0) return -1

  // Normalize byteOffset
  if (typeof byteOffset === 'string') {
    encoding = byteOffset;
    byteOffset = 0;
  } else if (byteOffset > 0x7fffffff) {
    byteOffset = 0x7fffffff;
  } else if (byteOffset < -0x80000000) {
    byteOffset = -0x80000000;
  }
  byteOffset = +byteOffset;  // Coerce to Number.
  if (isNaN(byteOffset)) {
    // byteOffset: it it's undefined, null, NaN, "foo", etc, search whole buffer
    byteOffset = dir ? 0 : (buffer.length - 1);
  }

  // Normalize byteOffset: negative offsets start from the end of the buffer
  if (byteOffset < 0) byteOffset = buffer.length + byteOffset;
  if (byteOffset >= buffer.length) {
    if (dir) return -1
    else byteOffset = buffer.length - 1;
  } else if (byteOffset < 0) {
    if (dir) byteOffset = 0;
    else return -1
  }

  // Normalize val
  if (typeof val === 'string') {
    val = Buffer.from(val, encoding);
  }

  // Finally, search either indexOf (if dir is true) or lastIndexOf
  if (internalIsBuffer(val)) {
    // Special case: looking for empty string/buffer always fails
    if (val.length === 0) {
      return -1
    }
    return arrayIndexOf(buffer, val, byteOffset, encoding, dir)
  } else if (typeof val === 'number') {
    val = val & 0xFF; // Search for a byte value [0-255]
    if (Buffer.TYPED_ARRAY_SUPPORT &&
        typeof Uint8Array.prototype.indexOf === 'function') {
      if (dir) {
        return Uint8Array.prototype.indexOf.call(buffer, val, byteOffset)
      } else {
        return Uint8Array.prototype.lastIndexOf.call(buffer, val, byteOffset)
      }
    }
    return arrayIndexOf(buffer, [ val ], byteOffset, encoding, dir)
  }

  throw new TypeError('val must be string, number or Buffer')
}

function arrayIndexOf (arr, val, byteOffset, encoding, dir) {
  var indexSize = 1;
  var arrLength = arr.length;
  var valLength = val.length;

  if (encoding !== undefined) {
    encoding = String(encoding).toLowerCase();
    if (encoding === 'ucs2' || encoding === 'ucs-2' ||
        encoding === 'utf16le' || encoding === 'utf-16le') {
      if (arr.length < 2 || val.length < 2) {
        return -1
      }
      indexSize = 2;
      arrLength /= 2;
      valLength /= 2;
      byteOffset /= 2;
    }
  }

  function read (buf, i) {
    if (indexSize === 1) {
      return buf[i]
    } else {
      return buf.readUInt16BE(i * indexSize)
    }
  }

  var i;
  if (dir) {
    var foundIndex = -1;
    for (i = byteOffset; i < arrLength; i++) {
      if (read(arr, i) === read(val, foundIndex === -1 ? 0 : i - foundIndex)) {
        if (foundIndex === -1) foundIndex = i;
        if (i - foundIndex + 1 === valLength) return foundIndex * indexSize
      } else {
        if (foundIndex !== -1) i -= i - foundIndex;
        foundIndex = -1;
      }
    }
  } else {
    if (byteOffset + valLength > arrLength) byteOffset = arrLength - valLength;
    for (i = byteOffset; i >= 0; i--) {
      var found = true;
      for (var j = 0; j < valLength; j++) {
        if (read(arr, i + j) !== read(val, j)) {
          found = false;
          break
        }
      }
      if (found) return i
    }
  }

  return -1
}

Buffer.prototype.includes = function includes (val, byteOffset, encoding) {
  return this.indexOf(val, byteOffset, encoding) !== -1
};

Buffer.prototype.indexOf = function indexOf (val, byteOffset, encoding) {
  return bidirectionalIndexOf(this, val, byteOffset, encoding, true)
};

Buffer.prototype.lastIndexOf = function lastIndexOf (val, byteOffset, encoding) {
  return bidirectionalIndexOf(this, val, byteOffset, encoding, false)
};

function hexWrite (buf, string, offset, length) {
  offset = Number(offset) || 0;
  var remaining = buf.length - offset;
  if (!length) {
    length = remaining;
  } else {
    length = Number(length);
    if (length > remaining) {
      length = remaining;
    }
  }

  // must be an even number of digits
  var strLen = string.length;
  if (strLen % 2 !== 0) throw new TypeError('Invalid hex string')

  if (length > strLen / 2) {
    length = strLen / 2;
  }
  for (var i = 0; i < length; ++i) {
    var parsed = parseInt(string.substr(i * 2, 2), 16);
    if (isNaN(parsed)) return i
    buf[offset + i] = parsed;
  }
  return i
}

function utf8Write (buf, string, offset, length) {
  return blitBuffer(utf8ToBytes(string, buf.length - offset), buf, offset, length)
}

function asciiWrite (buf, string, offset, length) {
  return blitBuffer(asciiToBytes(string), buf, offset, length)
}

function latin1Write (buf, string, offset, length) {
  return asciiWrite(buf, string, offset, length)
}

function base64Write (buf, string, offset, length) {
  return blitBuffer(base64ToBytes(string), buf, offset, length)
}

function ucs2Write (buf, string, offset, length) {
  return blitBuffer(utf16leToBytes(string, buf.length - offset), buf, offset, length)
}

Buffer.prototype.write = function write (string, offset, length, encoding) {
  // Buffer#write(string)
  if (offset === undefined) {
    encoding = 'utf8';
    length = this.length;
    offset = 0;
  // Buffer#write(string, encoding)
  } else if (length === undefined && typeof offset === 'string') {
    encoding = offset;
    length = this.length;
    offset = 0;
  // Buffer#write(string, offset[, length][, encoding])
  } else if (isFinite(offset)) {
    offset = offset | 0;
    if (isFinite(length)) {
      length = length | 0;
      if (encoding === undefined) encoding = 'utf8';
    } else {
      encoding = length;
      length = undefined;
    }
  // legacy write(string, encoding, offset, length) - remove in v0.13
  } else {
    throw new Error(
      'Buffer.write(string, encoding, offset[, length]) is no longer supported'
    )
  }

  var remaining = this.length - offset;
  if (length === undefined || length > remaining) length = remaining;

  if ((string.length > 0 && (length < 0 || offset < 0)) || offset > this.length) {
    throw new RangeError('Attempt to write outside buffer bounds')
  }

  if (!encoding) encoding = 'utf8';

  var loweredCase = false;
  for (;;) {
    switch (encoding) {
      case 'hex':
        return hexWrite(this, string, offset, length)

      case 'utf8':
      case 'utf-8':
        return utf8Write(this, string, offset, length)

      case 'ascii':
        return asciiWrite(this, string, offset, length)

      case 'latin1':
      case 'binary':
        return latin1Write(this, string, offset, length)

      case 'base64':
        // Warning: maxLength not taken into account in base64Write
        return base64Write(this, string, offset, length)

      case 'ucs2':
      case 'ucs-2':
      case 'utf16le':
      case 'utf-16le':
        return ucs2Write(this, string, offset, length)

      default:
        if (loweredCase) throw new TypeError('Unknown encoding: ' + encoding)
        encoding = ('' + encoding).toLowerCase();
        loweredCase = true;
    }
  }
};

Buffer.prototype.toJSON = function toJSON () {
  return {
    type: 'Buffer',
    data: Array.prototype.slice.call(this._arr || this, 0)
  }
};

function base64Slice (buf, start, end) {
  if (start === 0 && end === buf.length) {
    return fromByteArray(buf)
  } else {
    return fromByteArray(buf.slice(start, end))
  }
}

function utf8Slice (buf, start, end) {
  end = Math.min(buf.length, end);
  var res = [];

  var i = start;
  while (i < end) {
    var firstByte = buf[i];
    var codePoint = null;
    var bytesPerSequence = (firstByte > 0xEF) ? 4
      : (firstByte > 0xDF) ? 3
      : (firstByte > 0xBF) ? 2
      : 1;

    if (i + bytesPerSequence <= end) {
      var secondByte, thirdByte, fourthByte, tempCodePoint;

      switch (bytesPerSequence) {
        case 1:
          if (firstByte < 0x80) {
            codePoint = firstByte;
          }
          break
        case 2:
          secondByte = buf[i + 1];
          if ((secondByte & 0xC0) === 0x80) {
            tempCodePoint = (firstByte & 0x1F) << 0x6 | (secondByte & 0x3F);
            if (tempCodePoint > 0x7F) {
              codePoint = tempCodePoint;
            }
          }
          break
        case 3:
          secondByte = buf[i + 1];
          thirdByte = buf[i + 2];
          if ((secondByte & 0xC0) === 0x80 && (thirdByte & 0xC0) === 0x80) {
            tempCodePoint = (firstByte & 0xF) << 0xC | (secondByte & 0x3F) << 0x6 | (thirdByte & 0x3F);
            if (tempCodePoint > 0x7FF && (tempCodePoint < 0xD800 || tempCodePoint > 0xDFFF)) {
              codePoint = tempCodePoint;
            }
          }
          break
        case 4:
          secondByte = buf[i + 1];
          thirdByte = buf[i + 2];
          fourthByte = buf[i + 3];
          if ((secondByte & 0xC0) === 0x80 && (thirdByte & 0xC0) === 0x80 && (fourthByte & 0xC0) === 0x80) {
            tempCodePoint = (firstByte & 0xF) << 0x12 | (secondByte & 0x3F) << 0xC | (thirdByte & 0x3F) << 0x6 | (fourthByte & 0x3F);
            if (tempCodePoint > 0xFFFF && tempCodePoint < 0x110000) {
              codePoint = tempCodePoint;
            }
          }
      }
    }

    if (codePoint === null) {
      // we did not generate a valid codePoint so insert a
      // replacement char (U+FFFD) and advance only 1 byte
      codePoint = 0xFFFD;
      bytesPerSequence = 1;
    } else if (codePoint > 0xFFFF) {
      // encode to utf16 (surrogate pair dance)
      codePoint -= 0x10000;
      res.push(codePoint >>> 10 & 0x3FF | 0xD800);
      codePoint = 0xDC00 | codePoint & 0x3FF;
    }

    res.push(codePoint);
    i += bytesPerSequence;
  }

  return decodeCodePointsArray(res)
}

// Based on http://stackoverflow.com/a/22747272/680742, the browser with
// the lowest limit is Chrome, with 0x10000 args.
// We go 1 magnitude less, for safety
var MAX_ARGUMENTS_LENGTH = 0x1000;

function decodeCodePointsArray (codePoints) {
  var len = codePoints.length;
  if (len <= MAX_ARGUMENTS_LENGTH) {
    return String.fromCharCode.apply(String, codePoints) // avoid extra slice()
  }

  // Decode in chunks to avoid "call stack size exceeded".
  var res = '';
  var i = 0;
  while (i < len) {
    res += String.fromCharCode.apply(
      String,
      codePoints.slice(i, i += MAX_ARGUMENTS_LENGTH)
    );
  }
  return res
}

function asciiSlice (buf, start, end) {
  var ret = '';
  end = Math.min(buf.length, end);

  for (var i = start; i < end; ++i) {
    ret += String.fromCharCode(buf[i] & 0x7F);
  }
  return ret
}

function latin1Slice (buf, start, end) {
  var ret = '';
  end = Math.min(buf.length, end);

  for (var i = start; i < end; ++i) {
    ret += String.fromCharCode(buf[i]);
  }
  return ret
}

function hexSlice (buf, start, end) {
  var len = buf.length;

  if (!start || start < 0) start = 0;
  if (!end || end < 0 || end > len) end = len;

  var out = '';
  for (var i = start; i < end; ++i) {
    out += toHex(buf[i]);
  }
  return out
}

function utf16leSlice (buf, start, end) {
  var bytes = buf.slice(start, end);
  var res = '';
  for (var i = 0; i < bytes.length; i += 2) {
    res += String.fromCharCode(bytes[i] + bytes[i + 1] * 256);
  }
  return res
}

Buffer.prototype.slice = function slice (start, end) {
  var len = this.length;
  start = ~~start;
  end = end === undefined ? len : ~~end;

  if (start < 0) {
    start += len;
    if (start < 0) start = 0;
  } else if (start > len) {
    start = len;
  }

  if (end < 0) {
    end += len;
    if (end < 0) end = 0;
  } else if (end > len) {
    end = len;
  }

  if (end < start) end = start;

  var newBuf;
  if (Buffer.TYPED_ARRAY_SUPPORT) {
    newBuf = this.subarray(start, end);
    newBuf.__proto__ = Buffer.prototype;
  } else {
    var sliceLen = end - start;
    newBuf = new Buffer(sliceLen, undefined);
    for (var i = 0; i < sliceLen; ++i) {
      newBuf[i] = this[i + start];
    }
  }

  return newBuf
};

/*
 * Need to make sure that buffer isn't trying to write out of bounds.
 */
function checkOffset (offset, ext, length) {
  if ((offset % 1) !== 0 || offset < 0) throw new RangeError('offset is not uint')
  if (offset + ext > length) throw new RangeError('Trying to access beyond buffer length')
}

Buffer.prototype.readUIntLE = function readUIntLE (offset, byteLength, noAssert) {
  offset = offset | 0;
  byteLength = byteLength | 0;
  if (!noAssert) checkOffset(offset, byteLength, this.length);

  var val = this[offset];
  var mul = 1;
  var i = 0;
  while (++i < byteLength && (mul *= 0x100)) {
    val += this[offset + i] * mul;
  }

  return val
};

Buffer.prototype.readUIntBE = function readUIntBE (offset, byteLength, noAssert) {
  offset = offset | 0;
  byteLength = byteLength | 0;
  if (!noAssert) {
    checkOffset(offset, byteLength, this.length);
  }

  var val = this[offset + --byteLength];
  var mul = 1;
  while (byteLength > 0 && (mul *= 0x100)) {
    val += this[offset + --byteLength] * mul;
  }

  return val
};

Buffer.prototype.readUInt8 = function readUInt8 (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 1, this.length);
  return this[offset]
};

Buffer.prototype.readUInt16LE = function readUInt16LE (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 2, this.length);
  return this[offset] | (this[offset + 1] << 8)
};

Buffer.prototype.readUInt16BE = function readUInt16BE (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 2, this.length);
  return (this[offset] << 8) | this[offset + 1]
};

Buffer.prototype.readUInt32LE = function readUInt32LE (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 4, this.length);

  return ((this[offset]) |
      (this[offset + 1] << 8) |
      (this[offset + 2] << 16)) +
      (this[offset + 3] * 0x1000000)
};

Buffer.prototype.readUInt32BE = function readUInt32BE (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 4, this.length);

  return (this[offset] * 0x1000000) +
    ((this[offset + 1] << 16) |
    (this[offset + 2] << 8) |
    this[offset + 3])
};

Buffer.prototype.readIntLE = function readIntLE (offset, byteLength, noAssert) {
  offset = offset | 0;
  byteLength = byteLength | 0;
  if (!noAssert) checkOffset(offset, byteLength, this.length);

  var val = this[offset];
  var mul = 1;
  var i = 0;
  while (++i < byteLength && (mul *= 0x100)) {
    val += this[offset + i] * mul;
  }
  mul *= 0x80;

  if (val >= mul) val -= Math.pow(2, 8 * byteLength);

  return val
};

Buffer.prototype.readIntBE = function readIntBE (offset, byteLength, noAssert) {
  offset = offset | 0;
  byteLength = byteLength | 0;
  if (!noAssert) checkOffset(offset, byteLength, this.length);

  var i = byteLength;
  var mul = 1;
  var val = this[offset + --i];
  while (i > 0 && (mul *= 0x100)) {
    val += this[offset + --i] * mul;
  }
  mul *= 0x80;

  if (val >= mul) val -= Math.pow(2, 8 * byteLength);

  return val
};

Buffer.prototype.readInt8 = function readInt8 (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 1, this.length);
  if (!(this[offset] & 0x80)) return (this[offset])
  return ((0xff - this[offset] + 1) * -1)
};

Buffer.prototype.readInt16LE = function readInt16LE (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 2, this.length);
  var val = this[offset] | (this[offset + 1] << 8);
  return (val & 0x8000) ? val | 0xFFFF0000 : val
};

Buffer.prototype.readInt16BE = function readInt16BE (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 2, this.length);
  var val = this[offset + 1] | (this[offset] << 8);
  return (val & 0x8000) ? val | 0xFFFF0000 : val
};

Buffer.prototype.readInt32LE = function readInt32LE (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 4, this.length);

  return (this[offset]) |
    (this[offset + 1] << 8) |
    (this[offset + 2] << 16) |
    (this[offset + 3] << 24)
};

Buffer.prototype.readInt32BE = function readInt32BE (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 4, this.length);

  return (this[offset] << 24) |
    (this[offset + 1] << 16) |
    (this[offset + 2] << 8) |
    (this[offset + 3])
};

Buffer.prototype.readFloatLE = function readFloatLE (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 4, this.length);
  return read(this, offset, true, 23, 4)
};

Buffer.prototype.readFloatBE = function readFloatBE (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 4, this.length);
  return read(this, offset, false, 23, 4)
};

Buffer.prototype.readDoubleLE = function readDoubleLE (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 8, this.length);
  return read(this, offset, true, 52, 8)
};

Buffer.prototype.readDoubleBE = function readDoubleBE (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 8, this.length);
  return read(this, offset, false, 52, 8)
};

function checkInt (buf, value, offset, ext, max, min) {
  if (!internalIsBuffer(buf)) throw new TypeError('"buffer" argument must be a Buffer instance')
  if (value > max || value < min) throw new RangeError('"value" argument is out of bounds')
  if (offset + ext > buf.length) throw new RangeError('Index out of range')
}

Buffer.prototype.writeUIntLE = function writeUIntLE (value, offset, byteLength, noAssert) {
  value = +value;
  offset = offset | 0;
  byteLength = byteLength | 0;
  if (!noAssert) {
    var maxBytes = Math.pow(2, 8 * byteLength) - 1;
    checkInt(this, value, offset, byteLength, maxBytes, 0);
  }

  var mul = 1;
  var i = 0;
  this[offset] = value & 0xFF;
  while (++i < byteLength && (mul *= 0x100)) {
    this[offset + i] = (value / mul) & 0xFF;
  }

  return offset + byteLength
};

Buffer.prototype.writeUIntBE = function writeUIntBE (value, offset, byteLength, noAssert) {
  value = +value;
  offset = offset | 0;
  byteLength = byteLength | 0;
  if (!noAssert) {
    var maxBytes = Math.pow(2, 8 * byteLength) - 1;
    checkInt(this, value, offset, byteLength, maxBytes, 0);
  }

  var i = byteLength - 1;
  var mul = 1;
  this[offset + i] = value & 0xFF;
  while (--i >= 0 && (mul *= 0x100)) {
    this[offset + i] = (value / mul) & 0xFF;
  }

  return offset + byteLength
};

Buffer.prototype.writeUInt8 = function writeUInt8 (value, offset, noAssert) {
  value = +value;
  offset = offset | 0;
  if (!noAssert) checkInt(this, value, offset, 1, 0xff, 0);
  if (!Buffer.TYPED_ARRAY_SUPPORT) value = Math.floor(value);
  this[offset] = (value & 0xff);
  return offset + 1
};

function objectWriteUInt16 (buf, value, offset, littleEndian) {
  if (value < 0) value = 0xffff + value + 1;
  for (var i = 0, j = Math.min(buf.length - offset, 2); i < j; ++i) {
    buf[offset + i] = (value & (0xff << (8 * (littleEndian ? i : 1 - i)))) >>>
      (littleEndian ? i : 1 - i) * 8;
  }
}

Buffer.prototype.writeUInt16LE = function writeUInt16LE (value, offset, noAssert) {
  value = +value;
  offset = offset | 0;
  if (!noAssert) checkInt(this, value, offset, 2, 0xffff, 0);
  if (Buffer.TYPED_ARRAY_SUPPORT) {
    this[offset] = (value & 0xff);
    this[offset + 1] = (value >>> 8);
  } else {
    objectWriteUInt16(this, value, offset, true);
  }
  return offset + 2
};

Buffer.prototype.writeUInt16BE = function writeUInt16BE (value, offset, noAssert) {
  value = +value;
  offset = offset | 0;
  if (!noAssert) checkInt(this, value, offset, 2, 0xffff, 0);
  if (Buffer.TYPED_ARRAY_SUPPORT) {
    this[offset] = (value >>> 8);
    this[offset + 1] = (value & 0xff);
  } else {
    objectWriteUInt16(this, value, offset, false);
  }
  return offset + 2
};

function objectWriteUInt32 (buf, value, offset, littleEndian) {
  if (value < 0) value = 0xffffffff + value + 1;
  for (var i = 0, j = Math.min(buf.length - offset, 4); i < j; ++i) {
    buf[offset + i] = (value >>> (littleEndian ? i : 3 - i) * 8) & 0xff;
  }
}

Buffer.prototype.writeUInt32LE = function writeUInt32LE (value, offset, noAssert) {
  value = +value;
  offset = offset | 0;
  if (!noAssert) checkInt(this, value, offset, 4, 0xffffffff, 0);
  if (Buffer.TYPED_ARRAY_SUPPORT) {
    this[offset + 3] = (value >>> 24);
    this[offset + 2] = (value >>> 16);
    this[offset + 1] = (value >>> 8);
    this[offset] = (value & 0xff);
  } else {
    objectWriteUInt32(this, value, offset, true);
  }
  return offset + 4
};

Buffer.prototype.writeUInt32BE = function writeUInt32BE (value, offset, noAssert) {
  value = +value;
  offset = offset | 0;
  if (!noAssert) checkInt(this, value, offset, 4, 0xffffffff, 0);
  if (Buffer.TYPED_ARRAY_SUPPORT) {
    this[offset] = (value >>> 24);
    this[offset + 1] = (value >>> 16);
    this[offset + 2] = (value >>> 8);
    this[offset + 3] = (value & 0xff);
  } else {
    objectWriteUInt32(this, value, offset, false);
  }
  return offset + 4
};

Buffer.prototype.writeIntLE = function writeIntLE (value, offset, byteLength, noAssert) {
  value = +value;
  offset = offset | 0;
  if (!noAssert) {
    var limit = Math.pow(2, 8 * byteLength - 1);

    checkInt(this, value, offset, byteLength, limit - 1, -limit);
  }

  var i = 0;
  var mul = 1;
  var sub = 0;
  this[offset] = value & 0xFF;
  while (++i < byteLength && (mul *= 0x100)) {
    if (value < 0 && sub === 0 && this[offset + i - 1] !== 0) {
      sub = 1;
    }
    this[offset + i] = ((value / mul) >> 0) - sub & 0xFF;
  }

  return offset + byteLength
};

Buffer.prototype.writeIntBE = function writeIntBE (value, offset, byteLength, noAssert) {
  value = +value;
  offset = offset | 0;
  if (!noAssert) {
    var limit = Math.pow(2, 8 * byteLength - 1);

    checkInt(this, value, offset, byteLength, limit - 1, -limit);
  }

  var i = byteLength - 1;
  var mul = 1;
  var sub = 0;
  this[offset + i] = value & 0xFF;
  while (--i >= 0 && (mul *= 0x100)) {
    if (value < 0 && sub === 0 && this[offset + i + 1] !== 0) {
      sub = 1;
    }
    this[offset + i] = ((value / mul) >> 0) - sub & 0xFF;
  }

  return offset + byteLength
};

Buffer.prototype.writeInt8 = function writeInt8 (value, offset, noAssert) {
  value = +value;
  offset = offset | 0;
  if (!noAssert) checkInt(this, value, offset, 1, 0x7f, -0x80);
  if (!Buffer.TYPED_ARRAY_SUPPORT) value = Math.floor(value);
  if (value < 0) value = 0xff + value + 1;
  this[offset] = (value & 0xff);
  return offset + 1
};

Buffer.prototype.writeInt16LE = function writeInt16LE (value, offset, noAssert) {
  value = +value;
  offset = offset | 0;
  if (!noAssert) checkInt(this, value, offset, 2, 0x7fff, -0x8000);
  if (Buffer.TYPED_ARRAY_SUPPORT) {
    this[offset] = (value & 0xff);
    this[offset + 1] = (value >>> 8);
  } else {
    objectWriteUInt16(this, value, offset, true);
  }
  return offset + 2
};

Buffer.prototype.writeInt16BE = function writeInt16BE (value, offset, noAssert) {
  value = +value;
  offset = offset | 0;
  if (!noAssert) checkInt(this, value, offset, 2, 0x7fff, -0x8000);
  if (Buffer.TYPED_ARRAY_SUPPORT) {
    this[offset] = (value >>> 8);
    this[offset + 1] = (value & 0xff);
  } else {
    objectWriteUInt16(this, value, offset, false);
  }
  return offset + 2
};

Buffer.prototype.writeInt32LE = function writeInt32LE (value, offset, noAssert) {
  value = +value;
  offset = offset | 0;
  if (!noAssert) checkInt(this, value, offset, 4, 0x7fffffff, -0x80000000);
  if (Buffer.TYPED_ARRAY_SUPPORT) {
    this[offset] = (value & 0xff);
    this[offset + 1] = (value >>> 8);
    this[offset + 2] = (value >>> 16);
    this[offset + 3] = (value >>> 24);
  } else {
    objectWriteUInt32(this, value, offset, true);
  }
  return offset + 4
};

Buffer.prototype.writeInt32BE = function writeInt32BE (value, offset, noAssert) {
  value = +value;
  offset = offset | 0;
  if (!noAssert) checkInt(this, value, offset, 4, 0x7fffffff, -0x80000000);
  if (value < 0) value = 0xffffffff + value + 1;
  if (Buffer.TYPED_ARRAY_SUPPORT) {
    this[offset] = (value >>> 24);
    this[offset + 1] = (value >>> 16);
    this[offset + 2] = (value >>> 8);
    this[offset + 3] = (value & 0xff);
  } else {
    objectWriteUInt32(this, value, offset, false);
  }
  return offset + 4
};

function checkIEEE754 (buf, value, offset, ext, max, min) {
  if (offset + ext > buf.length) throw new RangeError('Index out of range')
  if (offset < 0) throw new RangeError('Index out of range')
}

function writeFloat (buf, value, offset, littleEndian, noAssert) {
  if (!noAssert) {
    checkIEEE754(buf, value, offset, 4);
  }
  write(buf, value, offset, littleEndian, 23, 4);
  return offset + 4
}

Buffer.prototype.writeFloatLE = function writeFloatLE (value, offset, noAssert) {
  return writeFloat(this, value, offset, true, noAssert)
};

Buffer.prototype.writeFloatBE = function writeFloatBE (value, offset, noAssert) {
  return writeFloat(this, value, offset, false, noAssert)
};

function writeDouble (buf, value, offset, littleEndian, noAssert) {
  if (!noAssert) {
    checkIEEE754(buf, value, offset, 8);
  }
  write(buf, value, offset, littleEndian, 52, 8);
  return offset + 8
}

Buffer.prototype.writeDoubleLE = function writeDoubleLE (value, offset, noAssert) {
  return writeDouble(this, value, offset, true, noAssert)
};

Buffer.prototype.writeDoubleBE = function writeDoubleBE (value, offset, noAssert) {
  return writeDouble(this, value, offset, false, noAssert)
};

// copy(targetBuffer, targetStart=0, sourceStart=0, sourceEnd=buffer.length)
Buffer.prototype.copy = function copy (target, targetStart, start, end) {
  if (!start) start = 0;
  if (!end && end !== 0) end = this.length;
  if (targetStart >= target.length) targetStart = target.length;
  if (!targetStart) targetStart = 0;
  if (end > 0 && end < start) end = start;

  // Copy 0 bytes; we're done
  if (end === start) return 0
  if (target.length === 0 || this.length === 0) return 0

  // Fatal error conditions
  if (targetStart < 0) {
    throw new RangeError('targetStart out of bounds')
  }
  if (start < 0 || start >= this.length) throw new RangeError('sourceStart out of bounds')
  if (end < 0) throw new RangeError('sourceEnd out of bounds')

  // Are we oob?
  if (end > this.length) end = this.length;
  if (target.length - targetStart < end - start) {
    end = target.length - targetStart + start;
  }

  var len = end - start;
  var i;

  if (this === target && start < targetStart && targetStart < end) {
    // descending copy from end
    for (i = len - 1; i >= 0; --i) {
      target[i + targetStart] = this[i + start];
    }
  } else if (len < 1000 || !Buffer.TYPED_ARRAY_SUPPORT) {
    // ascending copy from start
    for (i = 0; i < len; ++i) {
      target[i + targetStart] = this[i + start];
    }
  } else {
    Uint8Array.prototype.set.call(
      target,
      this.subarray(start, start + len),
      targetStart
    );
  }

  return len
};

// Usage:
//    buffer.fill(number[, offset[, end]])
//    buffer.fill(buffer[, offset[, end]])
//    buffer.fill(string[, offset[, end]][, encoding])
Buffer.prototype.fill = function fill (val, start, end, encoding) {
  // Handle string cases:
  if (typeof val === 'string') {
    if (typeof start === 'string') {
      encoding = start;
      start = 0;
      end = this.length;
    } else if (typeof end === 'string') {
      encoding = end;
      end = this.length;
    }
    if (val.length === 1) {
      var code = val.charCodeAt(0);
      if (code < 256) {
        val = code;
      }
    }
    if (encoding !== undefined && typeof encoding !== 'string') {
      throw new TypeError('encoding must be a string')
    }
    if (typeof encoding === 'string' && !Buffer.isEncoding(encoding)) {
      throw new TypeError('Unknown encoding: ' + encoding)
    }
  } else if (typeof val === 'number') {
    val = val & 255;
  }

  // Invalid ranges are not set to a default, so can range check early.
  if (start < 0 || this.length < start || this.length < end) {
    throw new RangeError('Out of range index')
  }

  if (end <= start) {
    return this
  }

  start = start >>> 0;
  end = end === undefined ? this.length : end >>> 0;

  if (!val) val = 0;

  var i;
  if (typeof val === 'number') {
    for (i = start; i < end; ++i) {
      this[i] = val;
    }
  } else {
    var bytes = internalIsBuffer(val)
      ? val
      : utf8ToBytes(new Buffer(val, encoding).toString());
    var len = bytes.length;
    for (i = 0; i < end - start; ++i) {
      this[i + start] = bytes[i % len];
    }
  }

  return this
};

// HELPER FUNCTIONS
// ================

var INVALID_BASE64_RE = /[^+\/0-9A-Za-z-_]/g;

function base64clean (str) {
  // Node strips out invalid characters like \n and \t from the string, base64-js does not
  str = stringtrim(str).replace(INVALID_BASE64_RE, '');
  // Node converts strings with length < 2 to ''
  if (str.length < 2) return ''
  // Node allows for non-padded base64 strings (missing trailing ===), base64-js does not
  while (str.length % 4 !== 0) {
    str = str + '=';
  }
  return str
}

function stringtrim (str) {
  if (str.trim) return str.trim()
  return str.replace(/^\s+|\s+$/g, '')
}

function toHex (n) {
  if (n < 16) return '0' + n.toString(16)
  return n.toString(16)
}

function utf8ToBytes (string, units) {
  units = units || Infinity;
  var codePoint;
  var length = string.length;
  var leadSurrogate = null;
  var bytes = [];

  for (var i = 0; i < length; ++i) {
    codePoint = string.charCodeAt(i);

    // is surrogate component
    if (codePoint > 0xD7FF && codePoint < 0xE000) {
      // last char was a lead
      if (!leadSurrogate) {
        // no lead yet
        if (codePoint > 0xDBFF) {
          // unexpected trail
          if ((units -= 3) > -1) bytes.push(0xEF, 0xBF, 0xBD);
          continue
        } else if (i + 1 === length) {
          // unpaired lead
          if ((units -= 3) > -1) bytes.push(0xEF, 0xBF, 0xBD);
          continue
        }

        // valid lead
        leadSurrogate = codePoint;

        continue
      }

      // 2 leads in a row
      if (codePoint < 0xDC00) {
        if ((units -= 3) > -1) bytes.push(0xEF, 0xBF, 0xBD);
        leadSurrogate = codePoint;
        continue
      }

      // valid surrogate pair
      codePoint = (leadSurrogate - 0xD800 << 10 | codePoint - 0xDC00) + 0x10000;
    } else if (leadSurrogate) {
      // valid bmp char, but last char was a lead
      if ((units -= 3) > -1) bytes.push(0xEF, 0xBF, 0xBD);
    }

    leadSurrogate = null;

    // encode utf8
    if (codePoint < 0x80) {
      if ((units -= 1) < 0) break
      bytes.push(codePoint);
    } else if (codePoint < 0x800) {
      if ((units -= 2) < 0) break
      bytes.push(
        codePoint >> 0x6 | 0xC0,
        codePoint & 0x3F | 0x80
      );
    } else if (codePoint < 0x10000) {
      if ((units -= 3) < 0) break
      bytes.push(
        codePoint >> 0xC | 0xE0,
        codePoint >> 0x6 & 0x3F | 0x80,
        codePoint & 0x3F | 0x80
      );
    } else if (codePoint < 0x110000) {
      if ((units -= 4) < 0) break
      bytes.push(
        codePoint >> 0x12 | 0xF0,
        codePoint >> 0xC & 0x3F | 0x80,
        codePoint >> 0x6 & 0x3F | 0x80,
        codePoint & 0x3F | 0x80
      );
    } else {
      throw new Error('Invalid code point')
    }
  }

  return bytes
}

function asciiToBytes (str) {
  var byteArray = [];
  for (var i = 0; i < str.length; ++i) {
    // Node's code seems to be doing this and not & 0x7F..
    byteArray.push(str.charCodeAt(i) & 0xFF);
  }
  return byteArray
}

function utf16leToBytes (str, units) {
  var c, hi, lo;
  var byteArray = [];
  for (var i = 0; i < str.length; ++i) {
    if ((units -= 2) < 0) break

    c = str.charCodeAt(i);
    hi = c >> 8;
    lo = c % 256;
    byteArray.push(lo);
    byteArray.push(hi);
  }

  return byteArray
}


function base64ToBytes (str) {
  return toByteArray(base64clean(str))
}

function blitBuffer (src, dst, offset, length) {
  for (var i = 0; i < length; ++i) {
    if ((i + offset >= dst.length) || (i >= src.length)) break
    dst[i + offset] = src[i];
  }
  return i
}

function isnan (val) {
  return val !== val // eslint-disable-line no-self-compare
}


// the following is from is-buffer, also by Feross Aboukhadijeh and with same lisence
// The _isBuffer check is for Safari 5-7 support, because it's missing
// Object.prototype.constructor. Remove this eventually
function isBuffer(obj) {
  return obj != null && (!!obj._isBuffer || isFastBuffer(obj) || isSlowBuffer(obj))
}

function isFastBuffer (obj) {
  return !!obj.constructor && typeof obj.constructor.isBuffer === 'function' && obj.constructor.isBuffer(obj)
}

// For Node v0.10 support. Remove this eventually.
function isSlowBuffer (obj) {
  return typeof obj.readFloatLE === 'function' && typeof obj.slice === 'function' && isFastBuffer(obj.slice(0, 0))
}class AxiosError extends Error {
    static from(error, code, config, request, response, customProps) {
        const axiosError = new AxiosError(error.message, code || error.code, config, request, response);
        axiosError.cause = error;
        axiosError.name = error.name;
        customProps && Object.assign(axiosError, customProps);
        return axiosError;
    }

    /**
     * Create an Error with the specified message, config, error code, request and response.
     *
     * @param {string} message The error message.
     * @param {string} [code] The error code (for example, 'ECONNABORTED').
     * @param {Object} [config] The config.
     * @param {Object} [request] The request.
     * @param {Object} [response] The response.
     *
     * @returns {Error} The created error.
     */
    constructor(message, code, config, request, response) {
        super(message);
        this.name = 'AxiosError';
        this.isAxiosError = true;
        code && (this.code = code);
        config && (this.config = config);
        request && (this.request = request);
        if (response) {
            this.response = response;
            this.status = response.status;
        }
    }

    toJSON() {
        return {
            // Standard
            message: this.message,
            name: this.name,
            // Microsoft
            description: this.description,
            number: this.number,
            // Mozilla
            fileName: this.fileName,
            lineNumber: this.lineNumber,
            columnNumber: this.columnNumber,
            stack: this.stack,
            // Axios
            config: utils$1.toJSONObject(this.config),
            code: this.code,
            status: this.status,
        };
    }
}

// This can be changed to static properties as soon as the parser options in .eslint.cjs are updated.
AxiosError.ERR_BAD_OPTION_VALUE = 'ERR_BAD_OPTION_VALUE';
AxiosError.ERR_BAD_OPTION = 'ERR_BAD_OPTION';
AxiosError.ECONNABORTED = 'ECONNABORTED';
AxiosError.ETIMEDOUT = 'ETIMEDOUT';
AxiosError.ERR_NETWORK = 'ERR_NETWORK';
AxiosError.ERR_FR_TOO_MANY_REDIRECTS = 'ERR_FR_TOO_MANY_REDIRECTS';
AxiosError.ERR_DEPRECATED = 'ERR_DEPRECATED';
AxiosError.ERR_BAD_RESPONSE = 'ERR_BAD_RESPONSE';
AxiosError.ERR_BAD_REQUEST = 'ERR_BAD_REQUEST';
AxiosError.ERR_CANCELED = 'ERR_CANCELED';
AxiosError.ERR_NOT_SUPPORT = 'ERR_NOT_SUPPORT';
AxiosError.ERR_INVALID_URL = 'ERR_INVALID_URL';// eslint-disable-next-line strict
var httpAdapter = null;/**
 * Determines if the given thing is a array or js object.
 *
 * @param {string} thing - The object or array to be visited.
 *
 * @returns {boolean}
 */
function isVisitable(thing) {
  return utils$1.isPlainObject(thing) || utils$1.isArray(thing);
}

/**
 * It removes the brackets from the end of a string
 *
 * @param {string} key - The key of the parameter.
 *
 * @returns {string} the key without the brackets.
 */
function removeBrackets(key) {
  return utils$1.endsWith(key, '[]') ? key.slice(0, -2) : key;
}

/**
 * It takes a path, a key, and a boolean, and returns a string
 *
 * @param {string} path - The path to the current key.
 * @param {string} key - The key of the current object being iterated over.
 * @param {string} dots - If true, the key will be rendered with dots instead of brackets.
 *
 * @returns {string} The path to the current key.
 */
function renderKey(path, key, dots) {
  if (!path) return key;
  return path.concat(key).map(function each(token, i) {
    // eslint-disable-next-line no-param-reassign
    token = removeBrackets(token);
    return !dots && i ? '[' + token + ']' : token;
  }).join(dots ? '.' : '');
}

/**
 * If the array is an array and none of its elements are visitable, then it's a flat array.
 *
 * @param {Array<any>} arr - The array to check
 *
 * @returns {boolean}
 */
function isFlatArray(arr) {
  return utils$1.isArray(arr) && !arr.some(isVisitable);
}

const predicates = utils$1.toFlatObject(utils$1, {}, null, function filter(prop) {
  return /^is[A-Z]/.test(prop);
});

/**
 * Convert a data object to FormData
 *
 * @param {Object} obj
 * @param {?Object} [formData]
 * @param {?Object} [options]
 * @param {Function} [options.visitor]
 * @param {Boolean} [options.metaTokens = true]
 * @param {Boolean} [options.dots = false]
 * @param {?Boolean} [options.indexes = false]
 *
 * @returns {Object}
 **/

/**
 * It converts an object into a FormData object
 *
 * @param {Object<any, any>} obj - The object to convert to form data.
 * @param {string} formData - The FormData object to append to.
 * @param {Object<string, any>} options
 *
 * @returns
 */
function toFormData(obj, formData, options) {
  if (!utils$1.isObject(obj)) {
    throw new TypeError('target must be an object');
  }

  // eslint-disable-next-line no-param-reassign
  formData = formData || new (FormData)();

  // eslint-disable-next-line no-param-reassign
  options = utils$1.toFlatObject(options, {
    metaTokens: true,
    dots: false,
    indexes: false
  }, false, function defined(option, source) {
    // eslint-disable-next-line no-eq-null,eqeqeq
    return !utils$1.isUndefined(source[option]);
  });

  const metaTokens = options.metaTokens;
  // eslint-disable-next-line no-use-before-define
  const visitor = options.visitor || defaultVisitor;
  const dots = options.dots;
  const indexes = options.indexes;
  const _Blob = options.Blob || typeof Blob !== 'undefined' && Blob;
  const useBlob = _Blob && utils$1.isSpecCompliantForm(formData);

  if (!utils$1.isFunction(visitor)) {
    throw new TypeError('visitor must be a function');
  }

  function convertValue(value) {
    if (value === null) return '';

    if (utils$1.isDate(value)) {
      return value.toISOString();
    }

    if (utils$1.isBoolean(value)) {
      return value.toString();
    }

    if (!useBlob && utils$1.isBlob(value)) {
      throw new AxiosError('Blob is not supported. Use a Buffer instead.');
    }

    if (utils$1.isArrayBuffer(value) || utils$1.isTypedArray(value)) {
      return useBlob && typeof Blob === 'function' ? new Blob([value]) : Buffer.from(value);
    }

    return value;
  }

  /**
   * Default visitor.
   *
   * @param {*} value
   * @param {String|Number} key
   * @param {Array<String|Number>} path
   * @this {FormData}
   *
   * @returns {boolean} return true to visit the each prop of the value recursively
   */
  function defaultVisitor(value, key, path) {
    let arr = value;

    if (value && !path && typeof value === 'object') {
      if (utils$1.endsWith(key, '{}')) {
        // eslint-disable-next-line no-param-reassign
        key = metaTokens ? key : key.slice(0, -2);
        // eslint-disable-next-line no-param-reassign
        value = JSON.stringify(value);
      } else if (
        (utils$1.isArray(value) && isFlatArray(value)) ||
        ((utils$1.isFileList(value) || utils$1.endsWith(key, '[]')) && (arr = utils$1.toArray(value))
        )) {
        // eslint-disable-next-line no-param-reassign
        key = removeBrackets(key);

        arr.forEach(function each(el, index) {
          !(utils$1.isUndefined(el) || el === null) && formData.append(
            // eslint-disable-next-line no-nested-ternary
            indexes === true ? renderKey([key], index, dots) : (indexes === null ? key : key + '[]'),
            convertValue(el)
          );
        });
        return false;
      }
    }

    if (isVisitable(value)) {
      return true;
    }

    formData.append(renderKey(path, key, dots), convertValue(value));

    return false;
  }

  const stack = [];

  const exposedHelpers = Object.assign(predicates, {
    defaultVisitor,
    convertValue,
    isVisitable
  });

  function build(value, path) {
    if (utils$1.isUndefined(value)) return;

    if (stack.indexOf(value) !== -1) {
      throw Error('Circular reference detected in ' + path.join('.'));
    }

    stack.push(value);

    utils$1.forEach(value, function each(el, key) {
      const result = !(utils$1.isUndefined(el) || el === null) && visitor.call(
        formData, el, utils$1.isString(key) ? key.trim() : key, path, exposedHelpers
      );

      if (result === true) {
        build(el, path ? path.concat(key) : [key]);
      }
    });

    stack.pop();
  }

  if (!utils$1.isObject(obj)) {
    throw new TypeError('data must be an object');
  }

  build(obj);

  return formData;
}/**
 * It encodes a string by replacing all characters that are not in the unreserved set with
 * their percent-encoded equivalents
 *
 * @param {string} str - The string to encode.
 *
 * @returns {string} The encoded string.
 */
function encode$1(str) {
  const charMap = {
    '!': '%21',
    "'": '%27',
    '(': '%28',
    ')': '%29',
    '~': '%7E',
    '%20': '+',
    '%00': '\x00'
  };
  return encodeURIComponent(str).replace(/[!'()~]|%20|%00/g, function replacer(match) {
    return charMap[match];
  });
}

/**
 * It takes a params object and converts it to a FormData object
 *
 * @param {Object<string, any>} params - The parameters to be converted to a FormData object.
 * @param {Object<string, any>} options - The options object passed to the Axios constructor.
 *
 * @returns {void}
 */
function AxiosURLSearchParams(params, options) {
  this._pairs = [];

  params && toFormData(params, this, options);
}

const prototype = AxiosURLSearchParams.prototype;

prototype.append = function append(name, value) {
  this._pairs.push([name, value]);
};

prototype.toString = function toString(encoder) {
  const _encode = encoder ? function(value) {
    return encoder.call(this, value, encode$1);
  } : encode$1;

  return this._pairs.map(function each(pair) {
    return _encode(pair[0]) + '=' + _encode(pair[1]);
  }, '').join('&');
};/**
 * It replaces all instances of the characters `:`, `$`, `,`, `+`, `[`, and `]` with their
 * URI encoded counterparts
 *
 * @param {string} val The value to be encoded.
 *
 * @returns {string} The encoded value.
 */
function encode(val) {
  return encodeURIComponent(val).
    replace(/%3A/gi, ':').
    replace(/%24/g, '$').
    replace(/%2C/gi, ',').
    replace(/%20/g, '+');
}

/**
 * Build a URL by appending params to the end
 *
 * @param {string} url The base of the url (e.g., http://www.google.com)
 * @param {object} [params] The params to be appended
 * @param {?(object|Function)} options
 *
 * @returns {string} The formatted url
 */
function buildURL(url, params, options) {
  if (!params) {
    return url;
  }

  const _encode = options && options.encode || encode;

  const _options = utils$1.isFunction(options) ? {
    serialize: options
  } : options;

  const serializeFn = _options && _options.serialize;

  let serializedParams;

  if (serializeFn) {
    serializedParams = serializeFn(params, _options);
  } else {
    serializedParams = utils$1.isURLSearchParams(params) ?
      params.toString() :
      new AxiosURLSearchParams(params, _options).toString(_encode);
  }

  if (serializedParams) {
    const hashmarkIndex = url.indexOf("#");

    if (hashmarkIndex !== -1) {
      url = url.slice(0, hashmarkIndex);
    }
    url += (url.indexOf('?') === -1 ? '?' : '&') + serializedParams;
  }

  return url;
}class InterceptorManager {
  constructor() {
    this.handlers = [];
  }

  /**
   * Add a new interceptor to the stack
   *
   * @param {Function} fulfilled The function to handle `then` for a `Promise`
   * @param {Function} rejected The function to handle `reject` for a `Promise`
   * @param {Object} options The options for the interceptor, synchronous and runWhen
   *
   * @return {Number} An ID used to remove interceptor later
   */
  use(fulfilled, rejected, options) {
    this.handlers.push({
      fulfilled,
      rejected,
      synchronous: options ? options.synchronous : false,
      runWhen: options ? options.runWhen : null
    });
    return this.handlers.length - 1;
  }

  /**
   * Remove an interceptor from the stack
   *
   * @param {Number} id The ID that was returned by `use`
   *
   * @returns {void}
   */
  eject(id) {
    if (this.handlers[id]) {
      this.handlers[id] = null;
    }
  }

  /**
   * Clear all interceptors from the stack
   *
   * @returns {void}
   */
  clear() {
    if (this.handlers) {
      this.handlers = [];
    }
  }

  /**
   * Iterate over all the registered interceptors
   *
   * This method is particularly useful for skipping over any
   * interceptors that may have become `null` calling `eject`.
   *
   * @param {Function} fn The function to call for each interceptor
   *
   * @returns {void}
   */
  forEach(fn) {
    utils$1.forEach(this.handlers, function forEachHandler(h) {
      if (h !== null) {
        fn(h);
      }
    });
  }
}var transitionalDefaults = {
  silentJSONParsing: true,
  forcedJSONParsing: true,
  clarifyTimeoutError: false
};var URLSearchParams$1 = typeof URLSearchParams !== 'undefined' ? URLSearchParams : AxiosURLSearchParams;var FormData$1 = typeof FormData !== 'undefined' ? FormData : null;var Blob$1 = typeof Blob !== 'undefined' ? Blob : null;var platform$1 = {
  isBrowser: true,
  classes: {
    URLSearchParams: URLSearchParams$1,
    FormData: FormData$1,
    Blob: Blob$1
  },
  protocols: ['http', 'https', 'file', 'blob', 'url', 'data']
};const hasBrowserEnv = typeof window !== 'undefined' && typeof document !== 'undefined';

const _navigator = typeof navigator === 'object' && navigator || undefined;

/**
 * Determine if we're running in a standard browser environment
 *
 * This allows axios to run in a web worker, and react-native.
 * Both environments support XMLHttpRequest, but not fully standard globals.
 *
 * web workers:
 *  typeof window -> undefined
 *  typeof document -> undefined
 *
 * react-native:
 *  navigator.product -> 'ReactNative'
 * nativescript
 *  navigator.product -> 'NativeScript' or 'NS'
 *
 * @returns {boolean}
 */
const hasStandardBrowserEnv = hasBrowserEnv &&
  (!_navigator || ['ReactNative', 'NativeScript', 'NS'].indexOf(_navigator.product) < 0);

/**
 * Determine if we're running in a standard browser webWorker environment
 *
 * Although the `isStandardBrowserEnv` method indicates that
 * `allows axios to run in a web worker`, the WebWorker will still be
 * filtered out due to its judgment standard
 * `typeof window !== 'undefined' && typeof document !== 'undefined'`.
 * This leads to a problem when axios post `FormData` in webWorker
 */
const hasStandardBrowserWebWorkerEnv = (() => {
  return (
    typeof WorkerGlobalScope !== 'undefined' &&
    // eslint-disable-next-line no-undef
    self instanceof WorkerGlobalScope &&
    typeof self.importScripts === 'function'
  );
})();

const origin = hasBrowserEnv && window.location.href || 'http://localhost';
var utils=/*#__PURE__*/Object.freeze({__proto__:null,hasBrowserEnv:hasBrowserEnv,hasStandardBrowserWebWorkerEnv:hasStandardBrowserWebWorkerEnv,hasStandardBrowserEnv:hasStandardBrowserEnv,navigator:_navigator,origin:origin});var platform = {
  ...utils,
  ...platform$1
};function toURLEncodedForm(data, options) {
  return toFormData(data, new platform.classes.URLSearchParams(), {
    visitor: function(value, key, path, helpers) {
      if (platform.isNode && utils$1.isBuffer(value)) {
        this.append(key, value.toString('base64'));
        return false;
      }

      return helpers.defaultVisitor.apply(this, arguments);
    },
    ...options
  });
}/**
 * It takes a string like `foo[x][y][z]` and returns an array like `['foo', 'x', 'y', 'z']
 *
 * @param {string} name - The name of the property to get.
 *
 * @returns An array of strings.
 */
function parsePropPath(name) {
  // foo[x][y][z]
  // foo.x.y.z
  // foo-x-y-z
  // foo x y z
  return utils$1.matchAll(/\w+|\[(\w*)]/g, name).map(match => {
    return match[0] === '[]' ? '' : match[1] || match[0];
  });
}

/**
 * Convert an array to an object.
 *
 * @param {Array<any>} arr - The array to convert to an object.
 *
 * @returns An object with the same keys and values as the array.
 */
function arrayToObject(arr) {
  const obj = {};
  const keys = Object.keys(arr);
  let i;
  const len = keys.length;
  let key;
  for (i = 0; i < len; i++) {
    key = keys[i];
    obj[key] = arr[key];
  }
  return obj;
}

/**
 * It takes a FormData object and returns a JavaScript object
 *
 * @param {string} formData The FormData object to convert to JSON.
 *
 * @returns {Object<string, any> | null} The converted object.
 */
function formDataToJSON(formData) {
  function buildPath(path, value, target, index) {
    let name = path[index++];

    if (name === '__proto__') return true;

    const isNumericKey = Number.isFinite(+name);
    const isLast = index >= path.length;
    name = !name && utils$1.isArray(target) ? target.length : name;

    if (isLast) {
      if (utils$1.hasOwnProp(target, name)) {
        target[name] = [target[name], value];
      } else {
        target[name] = value;
      }

      return !isNumericKey;
    }

    if (!target[name] || !utils$1.isObject(target[name])) {
      target[name] = [];
    }

    const result = buildPath(path, value, target[name], index);

    if (result && utils$1.isArray(target[name])) {
      target[name] = arrayToObject(target[name]);
    }

    return !isNumericKey;
  }

  if (utils$1.isFormData(formData) && utils$1.isFunction(formData.entries)) {
    const obj = {};

    utils$1.forEachEntry(formData, (name, value) => {
      buildPath(parsePropPath(name), value, obj, 0);
    });

    return obj;
  }

  return null;
}/**
 * It takes a string, tries to parse it, and if it fails, it returns the stringified version
 * of the input
 *
 * @param {any} rawValue - The value to be stringified.
 * @param {Function} parser - A function that parses a string into a JavaScript object.
 * @param {Function} encoder - A function that takes a value and returns a string.
 *
 * @returns {string} A stringified version of the rawValue.
 */
function stringifySafely(rawValue, parser, encoder) {
  if (utils$1.isString(rawValue)) {
    try {
      (parser || JSON.parse)(rawValue);
      return utils$1.trim(rawValue);
    } catch (e) {
      if (e.name !== 'SyntaxError') {
        throw e;
      }
    }
  }

  return (encoder || JSON.stringify)(rawValue);
}

const defaults = {

  transitional: transitionalDefaults,

  adapter: ['xhr', 'http', 'fetch'],

  transformRequest: [function transformRequest(data, headers) {
    const contentType = headers.getContentType() || '';
    const hasJSONContentType = contentType.indexOf('application/json') > -1;
    const isObjectPayload = utils$1.isObject(data);

    if (isObjectPayload && utils$1.isHTMLForm(data)) {
      data = new FormData(data);
    }

    const isFormData = utils$1.isFormData(data);

    if (isFormData) {
      return hasJSONContentType ? JSON.stringify(formDataToJSON(data)) : data;
    }

    if (utils$1.isArrayBuffer(data) ||
      utils$1.isBuffer(data) ||
      utils$1.isStream(data) ||
      utils$1.isFile(data) ||
      utils$1.isBlob(data) ||
      utils$1.isReadableStream(data)
    ) {
      return data;
    }
    if (utils$1.isArrayBufferView(data)) {
      return data.buffer;
    }
    if (utils$1.isURLSearchParams(data)) {
      headers.setContentType('application/x-www-form-urlencoded;charset=utf-8', false);
      return data.toString();
    }

    let isFileList;

    if (isObjectPayload) {
      if (contentType.indexOf('application/x-www-form-urlencoded') > -1) {
        return toURLEncodedForm(data, this.formSerializer).toString();
      }

      if ((isFileList = utils$1.isFileList(data)) || contentType.indexOf('multipart/form-data') > -1) {
        const _FormData = this.env && this.env.FormData;

        return toFormData(
          isFileList ? {'files[]': data} : data,
          _FormData && new _FormData(),
          this.formSerializer
        );
      }
    }

    if (isObjectPayload || hasJSONContentType ) {
      headers.setContentType('application/json', false);
      return stringifySafely(data);
    }

    return data;
  }],

  transformResponse: [function transformResponse(data) {
    const transitional = this.transitional || defaults.transitional;
    const forcedJSONParsing = transitional && transitional.forcedJSONParsing;
    const JSONRequested = this.responseType === 'json';

    if (utils$1.isResponse(data) || utils$1.isReadableStream(data)) {
      return data;
    }

    if (data && utils$1.isString(data) && ((forcedJSONParsing && !this.responseType) || JSONRequested)) {
      const silentJSONParsing = transitional && transitional.silentJSONParsing;
      const strictJSONParsing = !silentJSONParsing && JSONRequested;

      try {
        return JSON.parse(data, this.parseReviver);
      } catch (e) {
        if (strictJSONParsing) {
          if (e.name === 'SyntaxError') {
            throw AxiosError.from(e, AxiosError.ERR_BAD_RESPONSE, this, null, this.response);
          }
          throw e;
        }
      }
    }

    return data;
  }],

  /**
   * A timeout in milliseconds to abort a request. If set to 0 (default) a
   * timeout is not created.
   */
  timeout: 0,

  xsrfCookieName: 'XSRF-TOKEN',
  xsrfHeaderName: 'X-XSRF-TOKEN',

  maxContentLength: -1,
  maxBodyLength: -1,

  env: {
    FormData: platform.classes.FormData,
    Blob: platform.classes.Blob
  },

  validateStatus: function validateStatus(status) {
    return status >= 200 && status < 300;
  },

  headers: {
    common: {
      'Accept': 'application/json, text/plain, */*',
      'Content-Type': undefined
    }
  }
};

utils$1.forEach(['delete', 'get', 'head', 'post', 'put', 'patch'], (method) => {
  defaults.headers[method] = {};
});// RawAxiosHeaders whose duplicates are ignored by node
// c.f. https://nodejs.org/api/http.html#http_message_headers
const ignoreDuplicateOf = utils$1.toObjectSet([
  'age', 'authorization', 'content-length', 'content-type', 'etag',
  'expires', 'from', 'host', 'if-modified-since', 'if-unmodified-since',
  'last-modified', 'location', 'max-forwards', 'proxy-authorization',
  'referer', 'retry-after', 'user-agent'
]);

/**
 * Parse headers into an object
 *
 * ```
 * Date: Wed, 27 Aug 2014 08:58:49 GMT
 * Content-Type: application/json
 * Connection: keep-alive
 * Transfer-Encoding: chunked
 * ```
 *
 * @param {String} rawHeaders Headers needing to be parsed
 *
 * @returns {Object} Headers parsed into an object
 */
var parseHeaders = rawHeaders => {
  const parsed = {};
  let key;
  let val;
  let i;

  rawHeaders && rawHeaders.split('\n').forEach(function parser(line) {
    i = line.indexOf(':');
    key = line.substring(0, i).trim().toLowerCase();
    val = line.substring(i + 1).trim();

    if (!key || (parsed[key] && ignoreDuplicateOf[key])) {
      return;
    }

    if (key === 'set-cookie') {
      if (parsed[key]) {
        parsed[key].push(val);
      } else {
        parsed[key] = [val];
      }
    } else {
      parsed[key] = parsed[key] ? parsed[key] + ', ' + val : val;
    }
  });

  return parsed;
};const $internals = Symbol('internals');

function normalizeHeader(header) {
  return header && String(header).trim().toLowerCase();
}

function normalizeValue(value) {
  if (value === false || value == null) {
    return value;
  }

  return utils$1.isArray(value) ? value.map(normalizeValue) : String(value);
}

function parseTokens(str) {
  const tokens = Object.create(null);
  const tokensRE = /([^\s,;=]+)\s*(?:=\s*([^,;]+))?/g;
  let match;

  while ((match = tokensRE.exec(str))) {
    tokens[match[1]] = match[2];
  }

  return tokens;
}

const isValidHeaderName = (str) => /^[-_a-zA-Z0-9^`|~,!#$%&'*+.]+$/.test(str.trim());

function matchHeaderValue(context, value, header, filter, isHeaderNameFilter) {
  if (utils$1.isFunction(filter)) {
    return filter.call(this, value, header);
  }

  if (isHeaderNameFilter) {
    value = header;
  }

  if (!utils$1.isString(value)) return;

  if (utils$1.isString(filter)) {
    return value.indexOf(filter) !== -1;
  }

  if (utils$1.isRegExp(filter)) {
    return filter.test(value);
  }
}

function formatHeader(header) {
  return header.trim()
    .toLowerCase().replace(/([a-z\d])(\w*)/g, (w, char, str) => {
      return char.toUpperCase() + str;
    });
}

function buildAccessors(obj, header) {
  const accessorName = utils$1.toCamelCase(' ' + header);

  ['get', 'set', 'has'].forEach(methodName => {
    Object.defineProperty(obj, methodName + accessorName, {
      value: function(arg1, arg2, arg3) {
        return this[methodName].call(this, header, arg1, arg2, arg3);
      },
      configurable: true
    });
  });
}

class AxiosHeaders {
  constructor(headers) {
    headers && this.set(headers);
  }

  set(header, valueOrRewrite, rewrite) {
    const self = this;

    function setHeader(_value, _header, _rewrite) {
      const lHeader = normalizeHeader(_header);

      if (!lHeader) {
        throw new Error('header name must be a non-empty string');
      }

      const key = utils$1.findKey(self, lHeader);

      if(!key || self[key] === undefined || _rewrite === true || (_rewrite === undefined && self[key] !== false)) {
        self[key || _header] = normalizeValue(_value);
      }
    }

    const setHeaders = (headers, _rewrite) =>
      utils$1.forEach(headers, (_value, _header) => setHeader(_value, _header, _rewrite));

    if (utils$1.isPlainObject(header) || header instanceof this.constructor) {
      setHeaders(header, valueOrRewrite);
    } else if(utils$1.isString(header) && (header = header.trim()) && !isValidHeaderName(header)) {
      setHeaders(parseHeaders(header), valueOrRewrite);
    } else if (utils$1.isObject(header) && utils$1.isIterable(header)) {
      let obj = {}, dest, key;
      for (const entry of header) {
        if (!utils$1.isArray(entry)) {
          throw TypeError('Object iterator must return a key-value pair');
        }

        obj[key = entry[0]] = (dest = obj[key]) ?
          (utils$1.isArray(dest) ? [...dest, entry[1]] : [dest, entry[1]]) : entry[1];
      }

      setHeaders(obj, valueOrRewrite);
    } else {
      header != null && setHeader(valueOrRewrite, header, rewrite);
    }

    return this;
  }

  get(header, parser) {
    header = normalizeHeader(header);

    if (header) {
      const key = utils$1.findKey(this, header);

      if (key) {
        const value = this[key];

        if (!parser) {
          return value;
        }

        if (parser === true) {
          return parseTokens(value);
        }

        if (utils$1.isFunction(parser)) {
          return parser.call(this, value, key);
        }

        if (utils$1.isRegExp(parser)) {
          return parser.exec(value);
        }

        throw new TypeError('parser must be boolean|regexp|function');
      }
    }
  }

  has(header, matcher) {
    header = normalizeHeader(header);

    if (header) {
      const key = utils$1.findKey(this, header);

      return !!(key && this[key] !== undefined && (!matcher || matchHeaderValue(this, this[key], key, matcher)));
    }

    return false;
  }

  delete(header, matcher) {
    const self = this;
    let deleted = false;

    function deleteHeader(_header) {
      _header = normalizeHeader(_header);

      if (_header) {
        const key = utils$1.findKey(self, _header);

        if (key && (!matcher || matchHeaderValue(self, self[key], key, matcher))) {
          delete self[key];

          deleted = true;
        }
      }
    }

    if (utils$1.isArray(header)) {
      header.forEach(deleteHeader);
    } else {
      deleteHeader(header);
    }

    return deleted;
  }

  clear(matcher) {
    const keys = Object.keys(this);
    let i = keys.length;
    let deleted = false;

    while (i--) {
      const key = keys[i];
      if(!matcher || matchHeaderValue(this, this[key], key, matcher, true)) {
        delete this[key];
        deleted = true;
      }
    }

    return deleted;
  }

  normalize(format) {
    const self = this;
    const headers = {};

    utils$1.forEach(this, (value, header) => {
      const key = utils$1.findKey(headers, header);

      if (key) {
        self[key] = normalizeValue(value);
        delete self[header];
        return;
      }

      const normalized = format ? formatHeader(header) : String(header).trim();

      if (normalized !== header) {
        delete self[header];
      }

      self[normalized] = normalizeValue(value);

      headers[normalized] = true;
    });

    return this;
  }

  concat(...targets) {
    return this.constructor.concat(this, ...targets);
  }

  toJSON(asStrings) {
    const obj = Object.create(null);

    utils$1.forEach(this, (value, header) => {
      value != null && value !== false && (obj[header] = asStrings && utils$1.isArray(value) ? value.join(', ') : value);
    });

    return obj;
  }

  [Symbol.iterator]() {
    return Object.entries(this.toJSON())[Symbol.iterator]();
  }

  toString() {
    return Object.entries(this.toJSON()).map(([header, value]) => header + ': ' + value).join('\n');
  }

  getSetCookie() {
    return this.get("set-cookie") || [];
  }

  get [Symbol.toStringTag]() {
    return 'AxiosHeaders';
  }

  static from(thing) {
    return thing instanceof this ? thing : new this(thing);
  }

  static concat(first, ...targets) {
    const computed = new this(first);

    targets.forEach((target) => computed.set(target));

    return computed;
  }

  static accessor(header) {
    const internals = this[$internals] = (this[$internals] = {
      accessors: {}
    });

    const accessors = internals.accessors;
    const prototype = this.prototype;

    function defineAccessor(_header) {
      const lHeader = normalizeHeader(_header);

      if (!accessors[lHeader]) {
        buildAccessors(prototype, _header);
        accessors[lHeader] = true;
      }
    }

    utils$1.isArray(header) ? header.forEach(defineAccessor) : defineAccessor(header);

    return this;
  }
}

AxiosHeaders.accessor(['Content-Type', 'Content-Length', 'Accept', 'Accept-Encoding', 'User-Agent', 'Authorization']);

// reserved names hotfix
utils$1.reduceDescriptors(AxiosHeaders.prototype, ({value}, key) => {
  let mapped = key[0].toUpperCase() + key.slice(1); // map `set` => `Set`
  return {
    get: () => value,
    set(headerValue) {
      this[mapped] = headerValue;
    }
  }
});

utils$1.freezeMethods(AxiosHeaders);/**
 * Transform the data for a request or a response
 *
 * @param {Array|Function} fns A single function or Array of functions
 * @param {?Object} response The response object
 *
 * @returns {*} The resulting transformed data
 */
function transformData(fns, response) {
  const config = this || defaults;
  const context = response || config;
  const headers = AxiosHeaders.from(context.headers);
  let data = context.data;

  utils$1.forEach(fns, function transform(fn) {
    data = fn.call(config, data, headers.normalize(), response ? response.status : undefined);
  });

  headers.normalize();

  return data;
}function isCancel(value) {
  return !!(value && value.__CANCEL__);
}class CanceledError extends AxiosError {
  /**
   * A `CanceledError` is an object that is thrown when an operation is canceled.
   *
   * @param {string=} message The message.
   * @param {Object=} config The config.
   * @param {Object=} request The request.
   *
   * @returns {CanceledError} The created error.
   */
  constructor(message, config, request) {
    super(message == null ? 'canceled' : message, AxiosError.ERR_CANCELED, config, request);
    this.name = 'CanceledError';
    this.__CANCEL__ = true;
  }
}/**
 * Resolve or reject a Promise based on response status.
 *
 * @param {Function} resolve A function that resolves the promise.
 * @param {Function} reject A function that rejects the promise.
 * @param {object} response The response.
 *
 * @returns {object} The response.
 */
function settle(resolve, reject, response) {
  const validateStatus = response.config.validateStatus;
  if (!response.status || !validateStatus || validateStatus(response.status)) {
    resolve(response);
  } else {
    reject(new AxiosError(
      'Request failed with status code ' + response.status,
      [AxiosError.ERR_BAD_REQUEST, AxiosError.ERR_BAD_RESPONSE][Math.floor(response.status / 100) - 4],
      response.config,
      response.request,
      response
    ));
  }
}function parseProtocol(url) {
  const match = /^([-+\w]{1,25})(:?\/\/|:)/.exec(url);
  return match && match[1] || '';
}/**
 * Calculate data maxRate
 * @param {Number} [samplesCount= 10]
 * @param {Number} [min= 1000]
 * @returns {Function}
 */
function speedometer(samplesCount, min) {
  samplesCount = samplesCount || 10;
  const bytes = new Array(samplesCount);
  const timestamps = new Array(samplesCount);
  let head = 0;
  let tail = 0;
  let firstSampleTS;

  min = min !== undefined ? min : 1000;

  return function push(chunkLength) {
    const now = Date.now();

    const startedAt = timestamps[tail];

    if (!firstSampleTS) {
      firstSampleTS = now;
    }

    bytes[head] = chunkLength;
    timestamps[head] = now;

    let i = tail;
    let bytesCount = 0;

    while (i !== head) {
      bytesCount += bytes[i++];
      i = i % samplesCount;
    }

    head = (head + 1) % samplesCount;

    if (head === tail) {
      tail = (tail + 1) % samplesCount;
    }

    if (now - firstSampleTS < min) {
      return;
    }

    const passed = startedAt && now - startedAt;

    return passed ? Math.round(bytesCount * 1000 / passed) : undefined;
  };
}/**
 * Throttle decorator
 * @param {Function} fn
 * @param {Number} freq
 * @return {Function}
 */
function throttle(fn, freq) {
  let timestamp = 0;
  let threshold = 1000 / freq;
  let lastArgs;
  let timer;

  const invoke = (args, now = Date.now()) => {
    timestamp = now;
    lastArgs = null;
    if (timer) {
      clearTimeout(timer);
      timer = null;
    }
    fn(...args);
  };

  const throttled = (...args) => {
    const now = Date.now();
    const passed = now - timestamp;
    if ( passed >= threshold) {
      invoke(args, now);
    } else {
      lastArgs = args;
      if (!timer) {
        timer = setTimeout(() => {
          timer = null;
          invoke(lastArgs);
        }, threshold - passed);
      }
    }
  };

  const flush = () => lastArgs && invoke(lastArgs);

  return [throttled, flush];
}const progressEventReducer = (listener, isDownloadStream, freq = 3) => {
  let bytesNotified = 0;
  const _speedometer = speedometer(50, 250);

  return throttle(e => {
    const loaded = e.loaded;
    const total = e.lengthComputable ? e.total : undefined;
    const progressBytes = loaded - bytesNotified;
    const rate = _speedometer(progressBytes);
    const inRange = loaded <= total;

    bytesNotified = loaded;

    const data = {
      loaded,
      total,
      progress: total ? (loaded / total) : undefined,
      bytes: progressBytes,
      rate: rate ? rate : undefined,
      estimated: rate && total && inRange ? (total - loaded) / rate : undefined,
      event: e,
      lengthComputable: total != null,
      [isDownloadStream ? 'download' : 'upload']: true
    };

    listener(data);
  }, freq);
};

const progressEventDecorator = (total, throttled) => {
  const lengthComputable = total != null;

  return [(loaded) => throttled[0]({
    lengthComputable,
    total,
    loaded
  }), throttled[1]];
};

const asyncDecorator = (fn) => (...args) => utils$1.asap(() => fn(...args));var isURLSameOrigin = platform.hasStandardBrowserEnv ? ((origin, isMSIE) => (url) => {
  url = new URL(url, platform.origin);

  return (
    origin.protocol === url.protocol &&
    origin.host === url.host &&
    (isMSIE || origin.port === url.port)
  );
})(
  new URL(platform.origin),
  platform.navigator && /(msie|trident)/i.test(platform.navigator.userAgent)
) : () => true;var cookies = platform.hasStandardBrowserEnv ?

  // Standard browser envs support document.cookie
  {
    write(name, value, expires, path, domain, secure, sameSite) {
      if (typeof document === 'undefined') return;

      const cookie = [`${name}=${encodeURIComponent(value)}`];

      if (utils$1.isNumber(expires)) {
        cookie.push(`expires=${new Date(expires).toUTCString()}`);
      }
      if (utils$1.isString(path)) {
        cookie.push(`path=${path}`);
      }
      if (utils$1.isString(domain)) {
        cookie.push(`domain=${domain}`);
      }
      if (secure === true) {
        cookie.push('secure');
      }
      if (utils$1.isString(sameSite)) {
        cookie.push(`SameSite=${sameSite}`);
      }

      document.cookie = cookie.join('; ');
    },

    read(name) {
      if (typeof document === 'undefined') return null;
      const match = document.cookie.match(new RegExp('(?:^|; )' + name + '=([^;]*)'));
      return match ? decodeURIComponent(match[1]) : null;
    },

    remove(name) {
      this.write(name, '', Date.now() - 86400000, '/');
    }
  }

  :

  // Non-standard browser env (web workers, react-native) lack needed support.
  {
    write() {},
    read() {
      return null;
    },
    remove() {}
  };/**
 * Determines whether the specified URL is absolute
 *
 * @param {string} url The URL to test
 *
 * @returns {boolean} True if the specified URL is absolute, otherwise false
 */
function isAbsoluteURL(url) {
  // A URL is considered absolute if it begins with "<scheme>://" or "//" (protocol-relative URL).
  // RFC 3986 defines scheme name as a sequence of characters beginning with a letter and followed
  // by any combination of letters, digits, plus, period, or hyphen.
  return /^([a-z][a-z\d+\-.]*:)?\/\//i.test(url);
}/**
 * Creates a new URL by combining the specified URLs
 *
 * @param {string} baseURL The base URL
 * @param {string} relativeURL The relative URL
 *
 * @returns {string} The combined URL
 */
function combineURLs(baseURL, relativeURL) {
  return relativeURL
    ? baseURL.replace(/\/?\/$/, '') + '/' + relativeURL.replace(/^\/+/, '')
    : baseURL;
}/**
 * Creates a new URL by combining the baseURL with the requestedURL,
 * only when the requestedURL is not already an absolute URL.
 * If the requestURL is absolute, this function returns the requestedURL untouched.
 *
 * @param {string} baseURL The base URL
 * @param {string} requestedURL Absolute or relative URL to combine
 *
 * @returns {string} The combined full path
 */
function buildFullPath(baseURL, requestedURL, allowAbsoluteUrls) {
  let isRelativeUrl = !isAbsoluteURL(requestedURL);
  if (baseURL && (isRelativeUrl || allowAbsoluteUrls == false)) {
    return combineURLs(baseURL, requestedURL);
  }
  return requestedURL;
}const headersToObject = (thing) => thing instanceof AxiosHeaders ? { ...thing } : thing;

/**
 * Config-specific merge-function which creates a new config-object
 * by merging two configuration objects together.
 *
 * @param {Object} config1
 * @param {Object} config2
 *
 * @returns {Object} New object resulting from merging config2 to config1
 */
function mergeConfig(config1, config2) {
  // eslint-disable-next-line no-param-reassign
  config2 = config2 || {};
  const config = {};

  function getMergedValue(target, source, prop, caseless) {
    if (utils$1.isPlainObject(target) && utils$1.isPlainObject(source)) {
      return utils$1.merge.call({ caseless }, target, source);
    } else if (utils$1.isPlainObject(source)) {
      return utils$1.merge({}, source);
    } else if (utils$1.isArray(source)) {
      return source.slice();
    }
    return source;
  }

  function mergeDeepProperties(a, b, prop, caseless) {
    if (!utils$1.isUndefined(b)) {
      return getMergedValue(a, b, prop, caseless);
    } else if (!utils$1.isUndefined(a)) {
      return getMergedValue(undefined, a, prop, caseless);
    }
  }

  // eslint-disable-next-line consistent-return
  function valueFromConfig2(a, b) {
    if (!utils$1.isUndefined(b)) {
      return getMergedValue(undefined, b);
    }
  }

  // eslint-disable-next-line consistent-return
  function defaultToConfig2(a, b) {
    if (!utils$1.isUndefined(b)) {
      return getMergedValue(undefined, b);
    } else if (!utils$1.isUndefined(a)) {
      return getMergedValue(undefined, a);
    }
  }

  // eslint-disable-next-line consistent-return
  function mergeDirectKeys(a, b, prop) {
    if (prop in config2) {
      return getMergedValue(a, b);
    } else if (prop in config1) {
      return getMergedValue(undefined, a);
    }
  }

  const mergeMap = {
    url: valueFromConfig2,
    method: valueFromConfig2,
    data: valueFromConfig2,
    baseURL: defaultToConfig2,
    transformRequest: defaultToConfig2,
    transformResponse: defaultToConfig2,
    paramsSerializer: defaultToConfig2,
    timeout: defaultToConfig2,
    timeoutMessage: defaultToConfig2,
    withCredentials: defaultToConfig2,
    withXSRFToken: defaultToConfig2,
    adapter: defaultToConfig2,
    responseType: defaultToConfig2,
    xsrfCookieName: defaultToConfig2,
    xsrfHeaderName: defaultToConfig2,
    onUploadProgress: defaultToConfig2,
    onDownloadProgress: defaultToConfig2,
    decompress: defaultToConfig2,
    maxContentLength: defaultToConfig2,
    maxBodyLength: defaultToConfig2,
    beforeRedirect: defaultToConfig2,
    transport: defaultToConfig2,
    httpAgent: defaultToConfig2,
    httpsAgent: defaultToConfig2,
    cancelToken: defaultToConfig2,
    socketPath: defaultToConfig2,
    responseEncoding: defaultToConfig2,
    validateStatus: mergeDirectKeys,
    headers: (a, b, prop) => mergeDeepProperties(headersToObject(a), headersToObject(b), prop, true)
  };

  utils$1.forEach(Object.keys({ ...config1, ...config2 }), function computeConfigValue(prop) {
    const merge = mergeMap[prop] || mergeDeepProperties;
    const configValue = merge(config1[prop], config2[prop], prop);
    (utils$1.isUndefined(configValue) && merge !== mergeDirectKeys) || (config[prop] = configValue);
  });

  return config;
}var resolveConfig = (config) => {
  const newConfig = mergeConfig({}, config);

  let { data, withXSRFToken, xsrfHeaderName, xsrfCookieName, headers, auth } = newConfig;

  newConfig.headers = headers = AxiosHeaders.from(headers);

  newConfig.url = buildURL(buildFullPath(newConfig.baseURL, newConfig.url, newConfig.allowAbsoluteUrls), config.params, config.paramsSerializer);

  // HTTP basic authentication
  if (auth) {
    headers.set('Authorization', 'Basic ' +
      btoa((auth.username || '') + ':' + (auth.password ? unescape(encodeURIComponent(auth.password)) : ''))
    );
  }

  if (utils$1.isFormData(data)) {
    if (platform.hasStandardBrowserEnv || platform.hasStandardBrowserWebWorkerEnv) {
      headers.setContentType(undefined); // browser handles it
    } else if (utils$1.isFunction(data.getHeaders)) {
      // Node.js FormData (like form-data package)
      const formHeaders = data.getHeaders();
      // Only set safe headers to avoid overwriting security headers
      const allowedHeaders = ['content-type', 'content-length'];
      Object.entries(formHeaders).forEach(([key, val]) => {
        if (allowedHeaders.includes(key.toLowerCase())) {
          headers.set(key, val);
        }
      });
    }
  }  

  // Add xsrf header
  // This is only done if running in a standard browser environment.
  // Specifically not if we're in a web worker, or react-native.

  if (platform.hasStandardBrowserEnv) {
    withXSRFToken && utils$1.isFunction(withXSRFToken) && (withXSRFToken = withXSRFToken(newConfig));

    if (withXSRFToken || (withXSRFToken !== false && isURLSameOrigin(newConfig.url))) {
      // Add xsrf header
      const xsrfValue = xsrfHeaderName && xsrfCookieName && cookies.read(xsrfCookieName);

      if (xsrfValue) {
        headers.set(xsrfHeaderName, xsrfValue);
      }
    }
  }

  return newConfig;
};const isXHRAdapterSupported = typeof XMLHttpRequest !== 'undefined';

var xhrAdapter = isXHRAdapterSupported && function (config) {
  return new Promise(function dispatchXhrRequest(resolve, reject) {
    const _config = resolveConfig(config);
    let requestData = _config.data;
    const requestHeaders = AxiosHeaders.from(_config.headers).normalize();
    let {responseType, onUploadProgress, onDownloadProgress} = _config;
    let onCanceled;
    let uploadThrottled, downloadThrottled;
    let flushUpload, flushDownload;

    function done() {
      flushUpload && flushUpload(); // flush events
      flushDownload && flushDownload(); // flush events

      _config.cancelToken && _config.cancelToken.unsubscribe(onCanceled);

      _config.signal && _config.signal.removeEventListener('abort', onCanceled);
    }

    let request = new XMLHttpRequest();

    request.open(_config.method.toUpperCase(), _config.url, true);

    // Set the request timeout in MS
    request.timeout = _config.timeout;

    function onloadend() {
      if (!request) {
        return;
      }
      // Prepare the response
      const responseHeaders = AxiosHeaders.from(
        'getAllResponseHeaders' in request && request.getAllResponseHeaders()
      );
      const responseData = !responseType || responseType === 'text' || responseType === 'json' ?
        request.responseText : request.response;
      const response = {
        data: responseData,
        status: request.status,
        statusText: request.statusText,
        headers: responseHeaders,
        config,
        request
      };

      settle(function _resolve(value) {
        resolve(value);
        done();
      }, function _reject(err) {
        reject(err);
        done();
      }, response);

      // Clean up request
      request = null;
    }

    if ('onloadend' in request) {
      // Use onloadend if available
      request.onloadend = onloadend;
    } else {
      // Listen for ready state to emulate onloadend
      request.onreadystatechange = function handleLoad() {
        if (!request || request.readyState !== 4) {
          return;
        }

        // The request errored out and we didn't get a response, this will be
        // handled by onerror instead
        // With one exception: request that using file: protocol, most browsers
        // will return status as 0 even though it's a successful request
        if (request.status === 0 && !(request.responseURL && request.responseURL.indexOf('file:') === 0)) {
          return;
        }
        // readystate handler is calling before onerror or ontimeout handlers,
        // so we should call onloadend on the next 'tick'
        setTimeout(onloadend);
      };
    }

    // Handle browser request cancellation (as opposed to a manual cancellation)
    request.onabort = function handleAbort() {
      if (!request) {
        return;
      }

      reject(new AxiosError('Request aborted', AxiosError.ECONNABORTED, config, request));

      // Clean up request
      request = null;
    };

    // Handle low level network errors
  request.onerror = function handleError(event) {
       // Browsers deliver a ProgressEvent in XHR onerror
       // (message may be empty; when present, surface it)
       // See https://developer.mozilla.org/docs/Web/API/XMLHttpRequest/error_event
       const msg = event && event.message ? event.message : 'Network Error';
       const err = new AxiosError(msg, AxiosError.ERR_NETWORK, config, request);
       // attach the underlying event for consumers who want details
       err.event = event || null;
       reject(err);
       request = null;
    };
    
    // Handle timeout
    request.ontimeout = function handleTimeout() {
      let timeoutErrorMessage = _config.timeout ? 'timeout of ' + _config.timeout + 'ms exceeded' : 'timeout exceeded';
      const transitional = _config.transitional || transitionalDefaults;
      if (_config.timeoutErrorMessage) {
        timeoutErrorMessage = _config.timeoutErrorMessage;
      }
      reject(new AxiosError(
        timeoutErrorMessage,
        transitional.clarifyTimeoutError ? AxiosError.ETIMEDOUT : AxiosError.ECONNABORTED,
        config,
        request));

      // Clean up request
      request = null;
    };

    // Remove Content-Type if data is undefined
    requestData === undefined && requestHeaders.setContentType(null);

    // Add headers to the request
    if ('setRequestHeader' in request) {
      utils$1.forEach(requestHeaders.toJSON(), function setRequestHeader(val, key) {
        request.setRequestHeader(key, val);
      });
    }

    // Add withCredentials to request if needed
    if (!utils$1.isUndefined(_config.withCredentials)) {
      request.withCredentials = !!_config.withCredentials;
    }

    // Add responseType to request if needed
    if (responseType && responseType !== 'json') {
      request.responseType = _config.responseType;
    }

    // Handle progress if needed
    if (onDownloadProgress) {
      ([downloadThrottled, flushDownload] = progressEventReducer(onDownloadProgress, true));
      request.addEventListener('progress', downloadThrottled);
    }

    // Not all browsers support upload events
    if (onUploadProgress && request.upload) {
      ([uploadThrottled, flushUpload] = progressEventReducer(onUploadProgress));

      request.upload.addEventListener('progress', uploadThrottled);

      request.upload.addEventListener('loadend', flushUpload);
    }

    if (_config.cancelToken || _config.signal) {
      // Handle cancellation
      // eslint-disable-next-line func-names
      onCanceled = cancel => {
        if (!request) {
          return;
        }
        reject(!cancel || cancel.type ? new CanceledError(null, config, request) : cancel);
        request.abort();
        request = null;
      };

      _config.cancelToken && _config.cancelToken.subscribe(onCanceled);
      if (_config.signal) {
        _config.signal.aborted ? onCanceled() : _config.signal.addEventListener('abort', onCanceled);
      }
    }

    const protocol = parseProtocol(_config.url);

    if (protocol && platform.protocols.indexOf(protocol) === -1) {
      reject(new AxiosError('Unsupported protocol ' + protocol + ':', AxiosError.ERR_BAD_REQUEST, config));
      return;
    }


    // Send the request
    request.send(requestData || null);
  });
};const composeSignals = (signals, timeout) => {
  const {length} = (signals = signals ? signals.filter(Boolean) : []);

  if (timeout || length) {
    let controller = new AbortController();

    let aborted;

    const onabort = function (reason) {
      if (!aborted) {
        aborted = true;
        unsubscribe();
        const err = reason instanceof Error ? reason : this.reason;
        controller.abort(err instanceof AxiosError ? err : new CanceledError(err instanceof Error ? err.message : err));
      }
    };

    let timer = timeout && setTimeout(() => {
      timer = null;
      onabort(new AxiosError(`timeout of ${timeout}ms exceeded`, AxiosError.ETIMEDOUT));
    }, timeout);

    const unsubscribe = () => {
      if (signals) {
        timer && clearTimeout(timer);
        timer = null;
        signals.forEach(signal => {
          signal.unsubscribe ? signal.unsubscribe(onabort) : signal.removeEventListener('abort', onabort);
        });
        signals = null;
      }
    };

    signals.forEach((signal) => signal.addEventListener('abort', onabort));

    const {signal} = controller;

    signal.unsubscribe = () => utils$1.asap(unsubscribe);

    return signal;
  }
};const streamChunk = function* (chunk, chunkSize) {
  let len = chunk.byteLength;

  if (!chunkSize || len < chunkSize) {
    yield chunk;
    return;
  }

  let pos = 0;
  let end;

  while (pos < len) {
    end = pos + chunkSize;
    yield chunk.slice(pos, end);
    pos = end;
  }
};

const readBytes = async function* (iterable, chunkSize) {
  for await (const chunk of readStream(iterable)) {
    yield* streamChunk(chunk, chunkSize);
  }
};

const readStream = async function* (stream) {
  if (stream[Symbol.asyncIterator]) {
    yield* stream;
    return;
  }

  const reader = stream.getReader();
  try {
    for (;;) {
      const {done, value} = await reader.read();
      if (done) {
        break;
      }
      yield value;
    }
  } finally {
    await reader.cancel();
  }
};

const trackStream = (stream, chunkSize, onProgress, onFinish) => {
  const iterator = readBytes(stream, chunkSize);

  let bytes = 0;
  let done;
  let _onFinish = (e) => {
    if (!done) {
      done = true;
      onFinish && onFinish(e);
    }
  };

  return new ReadableStream({
    async pull(controller) {
      try {
        const {done, value} = await iterator.next();

        if (done) {
         _onFinish();
          controller.close();
          return;
        }

        let len = value.byteLength;
        if (onProgress) {
          let loadedBytes = bytes += len;
          onProgress(loadedBytes);
        }
        controller.enqueue(new Uint8Array(value));
      } catch (err) {
        _onFinish(err);
        throw err;
      }
    },
    cancel(reason) {
      _onFinish(reason);
      return iterator.return();
    }
  }, {
    highWaterMark: 2
  })
};const DEFAULT_CHUNK_SIZE = 64 * 1024;

const {isFunction} = utils$1;

const globalFetchAPI = (({Request, Response}) => ({
  Request, Response
}))(utils$1.global);

const {
  ReadableStream: ReadableStream$1, TextEncoder
} = utils$1.global;


const test = (fn, ...args) => {
  try {
    return !!fn(...args);
  } catch (e) {
    return false
  }
};

const factory = (env) => {
  env = utils$1.merge.call({
    skipUndefined: true
  }, globalFetchAPI, env);

  const {fetch: envFetch, Request, Response} = env;
  const isFetchSupported = envFetch ? isFunction(envFetch) : typeof fetch === 'function';
  const isRequestSupported = isFunction(Request);
  const isResponseSupported = isFunction(Response);

  if (!isFetchSupported) {
    return false;
  }

  const isReadableStreamSupported = isFetchSupported && isFunction(ReadableStream$1);

  const encodeText = isFetchSupported && (typeof TextEncoder === 'function' ?
      ((encoder) => (str) => encoder.encode(str))(new TextEncoder()) :
      async (str) => new Uint8Array(await new Request(str).arrayBuffer())
  );

  const supportsRequestStream = isRequestSupported && isReadableStreamSupported && test(() => {
    let duplexAccessed = false;

    const hasContentType = new Request(platform.origin, {
      body: new ReadableStream$1(),
      method: 'POST',
      get duplex() {
        duplexAccessed = true;
        return 'half';
      },
    }).headers.has('Content-Type');

    return duplexAccessed && !hasContentType;
  });

  const supportsResponseStream = isResponseSupported && isReadableStreamSupported &&
    test(() => utils$1.isReadableStream(new Response('').body));

  const resolvers = {
    stream: supportsResponseStream && ((res) => res.body)
  };

  isFetchSupported && ((() => {
    ['text', 'arrayBuffer', 'blob', 'formData', 'stream'].forEach(type => {
      !resolvers[type] && (resolvers[type] = (res, config) => {
        let method = res && res[type];

        if (method) {
          return method.call(res);
        }

        throw new AxiosError(`Response type '${type}' is not supported`, AxiosError.ERR_NOT_SUPPORT, config);
      });
    });
  })());

  const getBodyLength = async (body) => {
    if (body == null) {
      return 0;
    }

    if (utils$1.isBlob(body)) {
      return body.size;
    }

    if (utils$1.isSpecCompliantForm(body)) {
      const _request = new Request(platform.origin, {
        method: 'POST',
        body,
      });
      return (await _request.arrayBuffer()).byteLength;
    }

    if (utils$1.isArrayBufferView(body) || utils$1.isArrayBuffer(body)) {
      return body.byteLength;
    }

    if (utils$1.isURLSearchParams(body)) {
      body = body + '';
    }

    if (utils$1.isString(body)) {
      return (await encodeText(body)).byteLength;
    }
  };

  const resolveBodyLength = async (headers, body) => {
    const length = utils$1.toFiniteNumber(headers.getContentLength());

    return length == null ? getBodyLength(body) : length;
  };

  return async (config) => {
    let {
      url,
      method,
      data,
      signal,
      cancelToken,
      timeout,
      onDownloadProgress,
      onUploadProgress,
      responseType,
      headers,
      withCredentials = 'same-origin',
      fetchOptions
    } = resolveConfig(config);

    let _fetch = envFetch || fetch;

    responseType = responseType ? (responseType + '').toLowerCase() : 'text';

    let composedSignal = composeSignals([signal, cancelToken && cancelToken.toAbortSignal()], timeout);

    let request = null;

    const unsubscribe = composedSignal && composedSignal.unsubscribe && (() => {
      composedSignal.unsubscribe();
    });

    let requestContentLength;

    try {
      if (
        onUploadProgress && supportsRequestStream && method !== 'get' && method !== 'head' &&
        (requestContentLength = await resolveBodyLength(headers, data)) !== 0
      ) {
        let _request = new Request(url, {
          method: 'POST',
          body: data,
          duplex: "half"
        });

        let contentTypeHeader;

        if (utils$1.isFormData(data) && (contentTypeHeader = _request.headers.get('content-type'))) {
          headers.setContentType(contentTypeHeader);
        }

        if (_request.body) {
          const [onProgress, flush] = progressEventDecorator(
            requestContentLength,
            progressEventReducer(asyncDecorator(onUploadProgress))
          );

          data = trackStream(_request.body, DEFAULT_CHUNK_SIZE, onProgress, flush);
        }
      }

      if (!utils$1.isString(withCredentials)) {
        withCredentials = withCredentials ? 'include' : 'omit';
      }

      // Cloudflare Workers throws when credentials are defined
      // see https://github.com/cloudflare/workerd/issues/902
      const isCredentialsSupported = isRequestSupported && "credentials" in Request.prototype;

      const resolvedOptions = {
        ...fetchOptions,
        signal: composedSignal,
        method: method.toUpperCase(),
        headers: headers.normalize().toJSON(),
        body: data,
        duplex: "half",
        credentials: isCredentialsSupported ? withCredentials : undefined
      };

      request = isRequestSupported && new Request(url, resolvedOptions);

      let response = await (isRequestSupported ? _fetch(request, fetchOptions) : _fetch(url, resolvedOptions));

      const isStreamResponse = supportsResponseStream && (responseType === 'stream' || responseType === 'response');

      if (supportsResponseStream && (onDownloadProgress || (isStreamResponse && unsubscribe))) {
        const options = {};

        ['status', 'statusText', 'headers'].forEach(prop => {
          options[prop] = response[prop];
        });

        const responseContentLength = utils$1.toFiniteNumber(response.headers.get('content-length'));

        const [onProgress, flush] = onDownloadProgress && progressEventDecorator(
          responseContentLength,
          progressEventReducer(asyncDecorator(onDownloadProgress), true)
        ) || [];

        response = new Response(
          trackStream(response.body, DEFAULT_CHUNK_SIZE, onProgress, () => {
            flush && flush();
            unsubscribe && unsubscribe();
          }),
          options
        );
      }

      responseType = responseType || 'text';

      let responseData = await resolvers[utils$1.findKey(resolvers, responseType) || 'text'](response, config);

      !isStreamResponse && unsubscribe && unsubscribe();

      return await new Promise((resolve, reject) => {
        settle(resolve, reject, {
          data: responseData,
          headers: AxiosHeaders.from(response.headers),
          status: response.status,
          statusText: response.statusText,
          config,
          request
        });
      })
    } catch (err) {
      unsubscribe && unsubscribe();

      if (err && err.name === 'TypeError' && /Load failed|fetch/i.test(err.message)) {
        throw Object.assign(
          new AxiosError('Network Error', AxiosError.ERR_NETWORK, config, request),
          {
            cause: err.cause || err
          }
        )
      }

      throw AxiosError.from(err, err && err.code, config, request);
    }
  }
};

const seedCache = new Map();

const getFetch = (config) => {
  let env = (config && config.env) || {};
  const {fetch, Request, Response} = env;
  const seeds = [
    Request, Response, fetch
  ];

  let len = seeds.length, i = len,
    seed, target, map = seedCache;

  while (i--) {
    seed = seeds[i];
    target = map.get(seed);

    target === undefined && map.set(seed, target = (i ? new Map() : factory(env)));

    map = target;
  }

  return target;
};

getFetch();/**
 * Known adapters mapping.
 * Provides environment-specific adapters for Axios:
 * - `http` for Node.js
 * - `xhr` for browsers
 * - `fetch` for fetch API-based requests
 * 
 * @type {Object<string, Function|Object>}
 */
const knownAdapters = {
  http: httpAdapter,
  xhr: xhrAdapter,
  fetch: {
    get: getFetch,
  }
};

// Assign adapter names for easier debugging and identification
utils$1.forEach(knownAdapters, (fn, value) => {
  if (fn) {
    try {
      Object.defineProperty(fn, 'name', { value });
    } catch (e) {
      // eslint-disable-next-line no-empty
    }
    Object.defineProperty(fn, 'adapterName', { value });
  }
});

/**
 * Render a rejection reason string for unknown or unsupported adapters
 * 
 * @param {string} reason
 * @returns {string}
 */
const renderReason = (reason) => `- ${reason}`;

/**
 * Check if the adapter is resolved (function, null, or false)
 * 
 * @param {Function|null|false} adapter
 * @returns {boolean}
 */
const isResolvedHandle = (adapter) => utils$1.isFunction(adapter) || adapter === null || adapter === false;

/**
 * Get the first suitable adapter from the provided list.
 * Tries each adapter in order until a supported one is found.
 * Throws an AxiosError if no adapter is suitable.
 * 
 * @param {Array<string|Function>|string|Function} adapters - Adapter(s) by name or function.
 * @param {Object} config - Axios request configuration
 * @throws {AxiosError} If no suitable adapter is available
 * @returns {Function} The resolved adapter function
 */
function getAdapter(adapters, config) {
  adapters = utils$1.isArray(adapters) ? adapters : [adapters];

  const { length } = adapters;
  let nameOrAdapter;
  let adapter;

  const rejectedReasons = {};

  for (let i = 0; i < length; i++) {
    nameOrAdapter = adapters[i];
    let id;

    adapter = nameOrAdapter;

    if (!isResolvedHandle(nameOrAdapter)) {
      adapter = knownAdapters[(id = String(nameOrAdapter)).toLowerCase()];

      if (adapter === undefined) {
        throw new AxiosError(`Unknown adapter '${id}'`);
      }
    }

    if (adapter && (utils$1.isFunction(adapter) || (adapter = adapter.get(config)))) {
      break;
    }

    rejectedReasons[id || '#' + i] = adapter;
  }

  if (!adapter) {
    const reasons = Object.entries(rejectedReasons)
      .map(([id, state]) => `adapter ${id} ` +
        (state === false ? 'is not supported by the environment' : 'is not available in the build')
      );

    let s = length ?
      (reasons.length > 1 ? 'since :\n' + reasons.map(renderReason).join('\n') : ' ' + renderReason(reasons[0])) :
      'as no adapter specified';

    throw new AxiosError(
      `There is no suitable adapter to dispatch the request ` + s,
      'ERR_NOT_SUPPORT'
    );
  }

  return adapter;
}

/**
 * Exports Axios adapters and utility to resolve an adapter
 */
var adapters = {
  /**
   * Resolve an adapter from a list of adapter names or functions.
   * @type {Function}
   */
  getAdapter,

  /**
   * Exposes all known adapters
   * @type {Object<string, Function|Object>}
   */
  adapters: knownAdapters
};/**
 * Throws a `CanceledError` if cancellation has been requested.
 *
 * @param {Object} config The config that is to be used for the request
 *
 * @returns {void}
 */
function throwIfCancellationRequested(config) {
  if (config.cancelToken) {
    config.cancelToken.throwIfRequested();
  }

  if (config.signal && config.signal.aborted) {
    throw new CanceledError(null, config);
  }
}

/**
 * Dispatch a request to the server using the configured adapter.
 *
 * @param {object} config The config that is to be used for the request
 *
 * @returns {Promise} The Promise to be fulfilled
 */
function dispatchRequest(config) {
  throwIfCancellationRequested(config);

  config.headers = AxiosHeaders.from(config.headers);

  // Transform request data
  config.data = transformData.call(
    config,
    config.transformRequest
  );

  if (['post', 'put', 'patch'].indexOf(config.method) !== -1) {
    config.headers.setContentType('application/x-www-form-urlencoded', false);
  }

  const adapter = adapters.getAdapter(config.adapter || defaults.adapter, config);

  return adapter(config).then(function onAdapterResolution(response) {
    throwIfCancellationRequested(config);

    // Transform response data
    response.data = transformData.call(
      config,
      config.transformResponse,
      response
    );

    response.headers = AxiosHeaders.from(response.headers);

    return response;
  }, function onAdapterRejection(reason) {
    if (!isCancel(reason)) {
      throwIfCancellationRequested(config);

      // Transform response data
      if (reason && reason.response) {
        reason.response.data = transformData.call(
          config,
          config.transformResponse,
          reason.response
        );
        reason.response.headers = AxiosHeaders.from(reason.response.headers);
      }
    }

    return Promise.reject(reason);
  });
}const VERSION = "1.13.4";const validators$1 = {};

// eslint-disable-next-line func-names
['object', 'boolean', 'number', 'function', 'string', 'symbol'].forEach((type, i) => {
  validators$1[type] = function validator(thing) {
    return typeof thing === type || 'a' + (i < 1 ? 'n ' : ' ') + type;
  };
});

const deprecatedWarnings = {};

/**
 * Transitional option validator
 *
 * @param {function|boolean?} validator - set to false if the transitional option has been removed
 * @param {string?} version - deprecated version / removed since version
 * @param {string?} message - some message with additional info
 *
 * @returns {function}
 */
validators$1.transitional = function transitional(validator, version, message) {
  function formatMessage(opt, desc) {
    return '[Axios v' + VERSION + '] Transitional option \'' + opt + '\'' + desc + (message ? '. ' + message : '');
  }

  // eslint-disable-next-line func-names
  return (value, opt, opts) => {
    if (validator === false) {
      throw new AxiosError(
        formatMessage(opt, ' has been removed' + (version ? ' in ' + version : '')),
        AxiosError.ERR_DEPRECATED
      );
    }

    if (version && !deprecatedWarnings[opt]) {
      deprecatedWarnings[opt] = true;
      // eslint-disable-next-line no-console
      console.warn(
        formatMessage(
          opt,
          ' has been deprecated since v' + version + ' and will be removed in the near future'
        )
      );
    }

    return validator ? validator(value, opt, opts) : true;
  };
};

validators$1.spelling = function spelling(correctSpelling) {
  return (value, opt) => {
    // eslint-disable-next-line no-console
    console.warn(`${opt} is likely a misspelling of ${correctSpelling}`);
    return true;
  }
};

/**
 * Assert object's properties type
 *
 * @param {object} options
 * @param {object} schema
 * @param {boolean?} allowUnknown
 *
 * @returns {object}
 */

function assertOptions(options, schema, allowUnknown) {
  if (typeof options !== 'object') {
    throw new AxiosError('options must be an object', AxiosError.ERR_BAD_OPTION_VALUE);
  }
  const keys = Object.keys(options);
  let i = keys.length;
  while (i-- > 0) {
    const opt = keys[i];
    const validator = schema[opt];
    if (validator) {
      const value = options[opt];
      const result = value === undefined || validator(value, opt, options);
      if (result !== true) {
        throw new AxiosError('option ' + opt + ' must be ' + result, AxiosError.ERR_BAD_OPTION_VALUE);
      }
      continue;
    }
    if (allowUnknown !== true) {
      throw new AxiosError('Unknown option ' + opt, AxiosError.ERR_BAD_OPTION);
    }
  }
}

var validator = {
  assertOptions,
  validators: validators$1
};const validators = validator.validators;

/**
 * Create a new instance of Axios
 *
 * @param {Object} instanceConfig The default config for the instance
 *
 * @return {Axios} A new instance of Axios
 */
class Axios {
  constructor(instanceConfig) {
    this.defaults = instanceConfig || {};
    this.interceptors = {
      request: new InterceptorManager(),
      response: new InterceptorManager()
    };
  }

  /**
   * Dispatch a request
   *
   * @param {String|Object} configOrUrl The config specific for this request (merged with this.defaults)
   * @param {?Object} config
   *
   * @returns {Promise} The Promise to be fulfilled
   */
  async request(configOrUrl, config) {
    try {
      return await this._request(configOrUrl, config);
    } catch (err) {
      if (err instanceof Error) {
        let dummy = {};

        Error.captureStackTrace ? Error.captureStackTrace(dummy) : (dummy = new Error());

        // slice off the Error: ... line
        const stack = dummy.stack ? dummy.stack.replace(/^.+\n/, '') : '';
        try {
          if (!err.stack) {
            err.stack = stack;
            // match without the 2 top stack lines
          } else if (stack && !String(err.stack).endsWith(stack.replace(/^.+\n.+\n/, ''))) {
            err.stack += '\n' + stack;
          }
        } catch (e) {
          // ignore the case where "stack" is an un-writable property
        }
      }

      throw err;
    }
  }

  _request(configOrUrl, config) {
    /*eslint no-param-reassign:0*/
    // Allow for axios('example/url'[, config]) a la fetch API
    if (typeof configOrUrl === 'string') {
      config = config || {};
      config.url = configOrUrl;
    } else {
      config = configOrUrl || {};
    }

    config = mergeConfig(this.defaults, config);

    const {transitional, paramsSerializer, headers} = config;

    if (transitional !== undefined) {
      validator.assertOptions(transitional, {
        silentJSONParsing: validators.transitional(validators.boolean),
        forcedJSONParsing: validators.transitional(validators.boolean),
        clarifyTimeoutError: validators.transitional(validators.boolean)
      }, false);
    }

    if (paramsSerializer != null) {
      if (utils$1.isFunction(paramsSerializer)) {
        config.paramsSerializer = {
          serialize: paramsSerializer
        };
      } else {
        validator.assertOptions(paramsSerializer, {
          encode: validators.function,
          serialize: validators.function
        }, true);
      }
    }

    // Set config.allowAbsoluteUrls
    if (config.allowAbsoluteUrls !== undefined) ; else if (this.defaults.allowAbsoluteUrls !== undefined) {
      config.allowAbsoluteUrls = this.defaults.allowAbsoluteUrls;
    } else {
      config.allowAbsoluteUrls = true;
    }

    validator.assertOptions(config, {
      baseUrl: validators.spelling('baseURL'),
      withXsrfToken: validators.spelling('withXSRFToken')
    }, true);

    // Set config.method
    config.method = (config.method || this.defaults.method || 'get').toLowerCase();

    // Flatten headers
    let contextHeaders = headers && utils$1.merge(
      headers.common,
      headers[config.method]
    );

    headers && utils$1.forEach(
      ['delete', 'get', 'head', 'post', 'put', 'patch', 'common'],
      (method) => {
        delete headers[method];
      }
    );

    config.headers = AxiosHeaders.concat(contextHeaders, headers);

    // filter out skipped interceptors
    const requestInterceptorChain = [];
    let synchronousRequestInterceptors = true;
    this.interceptors.request.forEach(function unshiftRequestInterceptors(interceptor) {
      if (typeof interceptor.runWhen === 'function' && interceptor.runWhen(config) === false) {
        return;
      }

      synchronousRequestInterceptors = synchronousRequestInterceptors && interceptor.synchronous;

      requestInterceptorChain.unshift(interceptor.fulfilled, interceptor.rejected);
    });

    const responseInterceptorChain = [];
    this.interceptors.response.forEach(function pushResponseInterceptors(interceptor) {
      responseInterceptorChain.push(interceptor.fulfilled, interceptor.rejected);
    });

    let promise;
    let i = 0;
    let len;

    if (!synchronousRequestInterceptors) {
      const chain = [dispatchRequest.bind(this), undefined];
      chain.unshift(...requestInterceptorChain);
      chain.push(...responseInterceptorChain);
      len = chain.length;

      promise = Promise.resolve(config);

      while (i < len) {
        promise = promise.then(chain[i++], chain[i++]);
      }

      return promise;
    }

    len = requestInterceptorChain.length;

    let newConfig = config;

    while (i < len) {
      const onFulfilled = requestInterceptorChain[i++];
      const onRejected = requestInterceptorChain[i++];
      try {
        newConfig = onFulfilled(newConfig);
      } catch (error) {
        onRejected.call(this, error);
        break;
      }
    }

    try {
      promise = dispatchRequest.call(this, newConfig);
    } catch (error) {
      return Promise.reject(error);
    }

    i = 0;
    len = responseInterceptorChain.length;

    while (i < len) {
      promise = promise.then(responseInterceptorChain[i++], responseInterceptorChain[i++]);
    }

    return promise;
  }

  getUri(config) {
    config = mergeConfig(this.defaults, config);
    const fullPath = buildFullPath(config.baseURL, config.url, config.allowAbsoluteUrls);
    return buildURL(fullPath, config.params, config.paramsSerializer);
  }
}

// Provide aliases for supported request methods
utils$1.forEach(['delete', 'get', 'head', 'options'], function forEachMethodNoData(method) {
  /*eslint func-names:0*/
  Axios.prototype[method] = function(url, config) {
    return this.request(mergeConfig(config || {}, {
      method,
      url,
      data: (config || {}).data
    }));
  };
});

utils$1.forEach(['post', 'put', 'patch'], function forEachMethodWithData(method) {
  /*eslint func-names:0*/

  function generateHTTPMethod(isForm) {
    return function httpMethod(url, data, config) {
      return this.request(mergeConfig(config || {}, {
        method,
        headers: isForm ? {
          'Content-Type': 'multipart/form-data'
        } : {},
        url,
        data
      }));
    };
  }

  Axios.prototype[method] = generateHTTPMethod();

  Axios.prototype[method + 'Form'] = generateHTTPMethod(true);
});/**
 * A `CancelToken` is an object that can be used to request cancellation of an operation.
 *
 * @param {Function} executor The executor function.
 *
 * @returns {CancelToken}
 */
class CancelToken {
  constructor(executor) {
    if (typeof executor !== 'function') {
      throw new TypeError('executor must be a function.');
    }

    let resolvePromise;

    this.promise = new Promise(function promiseExecutor(resolve) {
      resolvePromise = resolve;
    });

    const token = this;

    // eslint-disable-next-line func-names
    this.promise.then(cancel => {
      if (!token._listeners) return;

      let i = token._listeners.length;

      while (i-- > 0) {
        token._listeners[i](cancel);
      }
      token._listeners = null;
    });

    // eslint-disable-next-line func-names
    this.promise.then = onfulfilled => {
      let _resolve;
      // eslint-disable-next-line func-names
      const promise = new Promise(resolve => {
        token.subscribe(resolve);
        _resolve = resolve;
      }).then(onfulfilled);

      promise.cancel = function reject() {
        token.unsubscribe(_resolve);
      };

      return promise;
    };

    executor(function cancel(message, config, request) {
      if (token.reason) {
        // Cancellation has already been requested
        return;
      }

      token.reason = new CanceledError(message, config, request);
      resolvePromise(token.reason);
    });
  }

  /**
   * Throws a `CanceledError` if cancellation has been requested.
   */
  throwIfRequested() {
    if (this.reason) {
      throw this.reason;
    }
  }

  /**
   * Subscribe to the cancel signal
   */

  subscribe(listener) {
    if (this.reason) {
      listener(this.reason);
      return;
    }

    if (this._listeners) {
      this._listeners.push(listener);
    } else {
      this._listeners = [listener];
    }
  }

  /**
   * Unsubscribe from the cancel signal
   */

  unsubscribe(listener) {
    if (!this._listeners) {
      return;
    }
    const index = this._listeners.indexOf(listener);
    if (index !== -1) {
      this._listeners.splice(index, 1);
    }
  }

  toAbortSignal() {
    const controller = new AbortController();

    const abort = (err) => {
      controller.abort(err);
    };

    this.subscribe(abort);

    controller.signal.unsubscribe = () => this.unsubscribe(abort);

    return controller.signal;
  }

  /**
   * Returns an object that contains a new `CancelToken` and a function that, when called,
   * cancels the `CancelToken`.
   */
  static source() {
    let cancel;
    const token = new CancelToken(function executor(c) {
      cancel = c;
    });
    return {
      token,
      cancel
    };
  }
}/**
 * Syntactic sugar for invoking a function and expanding an array for arguments.
 *
 * Common use case would be to use `Function.prototype.apply`.
 *
 *  ```js
 *  function f(x, y, z) {}
 *  const args = [1, 2, 3];
 *  f.apply(null, args);
 *  ```
 *
 * With `spread` this example can be re-written.
 *
 *  ```js
 *  spread(function(x, y, z) {})([1, 2, 3]);
 *  ```
 *
 * @param {Function} callback
 *
 * @returns {Function}
 */
function spread(callback) {
  return function wrap(arr) {
    return callback.apply(null, arr);
  };
}/**
 * Determines whether the payload is an error thrown by Axios
 *
 * @param {*} payload The value to test
 *
 * @returns {boolean} True if the payload is an error thrown by Axios, otherwise false
 */
function isAxiosError(payload) {
  return utils$1.isObject(payload) && (payload.isAxiosError === true);
}const HttpStatusCode = {
  Continue: 100,
  SwitchingProtocols: 101,
  Processing: 102,
  EarlyHints: 103,
  Ok: 200,
  Created: 201,
  Accepted: 202,
  NonAuthoritativeInformation: 203,
  NoContent: 204,
  ResetContent: 205,
  PartialContent: 206,
  MultiStatus: 207,
  AlreadyReported: 208,
  ImUsed: 226,
  MultipleChoices: 300,
  MovedPermanently: 301,
  Found: 302,
  SeeOther: 303,
  NotModified: 304,
  UseProxy: 305,
  Unused: 306,
  TemporaryRedirect: 307,
  PermanentRedirect: 308,
  BadRequest: 400,
  Unauthorized: 401,
  PaymentRequired: 402,
  Forbidden: 403,
  NotFound: 404,
  MethodNotAllowed: 405,
  NotAcceptable: 406,
  ProxyAuthenticationRequired: 407,
  RequestTimeout: 408,
  Conflict: 409,
  Gone: 410,
  LengthRequired: 411,
  PreconditionFailed: 412,
  PayloadTooLarge: 413,
  UriTooLong: 414,
  UnsupportedMediaType: 415,
  RangeNotSatisfiable: 416,
  ExpectationFailed: 417,
  ImATeapot: 418,
  MisdirectedRequest: 421,
  UnprocessableEntity: 422,
  Locked: 423,
  FailedDependency: 424,
  TooEarly: 425,
  UpgradeRequired: 426,
  PreconditionRequired: 428,
  TooManyRequests: 429,
  RequestHeaderFieldsTooLarge: 431,
  UnavailableForLegalReasons: 451,
  InternalServerError: 500,
  NotImplemented: 501,
  BadGateway: 502,
  ServiceUnavailable: 503,
  GatewayTimeout: 504,
  HttpVersionNotSupported: 505,
  VariantAlsoNegotiates: 506,
  InsufficientStorage: 507,
  LoopDetected: 508,
  NotExtended: 510,
  NetworkAuthenticationRequired: 511,
  WebServerIsDown: 521,
  ConnectionTimedOut: 522,
  OriginIsUnreachable: 523,
  TimeoutOccurred: 524,
  SslHandshakeFailed: 525,
  InvalidSslCertificate: 526,
};

Object.entries(HttpStatusCode).forEach(([key, value]) => {
  HttpStatusCode[value] = key;
});/**
 * Create an instance of Axios
 *
 * @param {Object} defaultConfig The default config for the instance
 *
 * @returns {Axios} A new instance of Axios
 */
function createInstance(defaultConfig) {
  const context = new Axios(defaultConfig);
  const instance = bind(Axios.prototype.request, context);

  // Copy axios.prototype to instance
  utils$1.extend(instance, Axios.prototype, context, {allOwnKeys: true});

  // Copy context to instance
  utils$1.extend(instance, context, null, {allOwnKeys: true});

  // Factory for creating new instances
  instance.create = function create(instanceConfig) {
    return createInstance(mergeConfig(defaultConfig, instanceConfig));
  };

  return instance;
}

// Create the default instance to be exported
const axios = createInstance(defaults);

// Expose Axios class to allow class inheritance
axios.Axios = Axios;

// Expose Cancel & CancelToken
axios.CanceledError = CanceledError;
axios.CancelToken = CancelToken;
axios.isCancel = isCancel;
axios.VERSION = VERSION;
axios.toFormData = toFormData;

// Expose AxiosError class
axios.AxiosError = AxiosError;

// alias for CanceledError for backward compatibility
axios.Cancel = axios.CanceledError;

// Expose all/spread
axios.all = function all(promises) {
  return Promise.all(promises);
};

axios.spread = spread;

// Expose isAxiosError
axios.isAxiosError = isAxiosError;

// Expose mergeConfig
axios.mergeConfig = mergeConfig;

axios.AxiosHeaders = AxiosHeaders;

axios.formToJSON = thing => formDataToJSON(utils$1.isHTMLForm(thing) ? new FormData(thing) : thing);

axios.getAdapter = adapters.getAdapter;

axios.HttpStatusCode = HttpStatusCode;

axios.default = axios;

// this module should only have a default export
var axios$1 = axios;var crudApi = {
  methods: {
    fetchItemsVuex: function fetchItemsVuex() {
      var _arguments = arguments,
        _this = this;
      return _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee() {
        var page, result, itemsResult;
        return _regenerator().w(function (_context) {
          while (1) switch (_context.n) {
            case 0:
              page = _arguments.length > 0 && _arguments[0] !== undefined ? _arguments[0] : 1;
              _this.loading = true;
              _this.$emit("beforeFetch", {});
              if (!_this.vuexLocalforage) {
                _context.n = 2;
                break;
              }
              _context.n = 1;
              return _this.model.$fetch();
            case 1:
              _context.n = 4;
              break;
            case 2:
              _this.model.deleteAll();
              _context.n = 3;
              return _this.model.api().get(_this.apiUrl + "/" + _this.modelName, {
                dataKey: 'data',
                params: {
                  page: page,
                  limit: _this.pagination.per_page,
                  filters: JSON.stringify(_this.finalFilters)
                }
              });
            case 3:
              result = _context.v;
            case 4:
              itemsResult = _this.model.query().withAll().get();
              if (itemsResult) {
                _this.items = itemsResult;
              }
              console.debug("fetch page vuex ", itemsResult, page, _this.items, result);
              _this.loading = false;
              _this.firstLoad = true;
            case 5:
              return _context.a(2);
          }
        }, _callee);
      }))();
    },
    fetchItemsLocal: function fetchItemsLocal() {
      if (this.grouped) {
        this.groupItems(this.models);
      } else {
        this.items = this.models;
      }
      this.pagination.total = this.items.length;
      this.firstLoad = true;
    },
    fetchItems: function fetchItems() {
      var _this2 = this;
      var page = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 1;
      var concat = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
      this.$emit("beforeFetch", {});
      if (this.useVuexORM) {
        return this.fetchItemsVuex(page, concat);
      }
      if (!this.ajax) {
        return this.fetchItemsLocal(page, concat);
      }
      this.loading = true;
      return axios$1.get(this.apiUrl + "/" + this.modelName, {
        params: {
          page: page,
          limit: this.pagination.per_page,
          filters: JSON.stringify(this.finalFilters)
        }
      }).then(function (response) {
        console.debug("fetchItems - Response recibida:", response.data);
        _this2.makePagination(response.data);

        // Validar que response.data.data existe y es un array
        var items = response.data.data;
        if (!items) {
          console.warn("fetchItems - response.data.data es undefined o null, usando array vacío");
          items = [];
        } else if (!Array.isArray(items)) {
          console.warn("fetchItems - response.data.data no es un array, tipo:", _typeof$1(items), items);
          items = [];
        }
        console.debug("fetchItems - Items procesados:", items, "Cantidad:", items.length);
        if (_this2.grouped) {
          _this2.groupItems(items, concat, _this2.isSplitGroups);
        } else {
          if (concat) {
            var _this2$items;
            // Para concat, agregar items al array existente
            (_this2$items = _this2.items).push.apply(_this2$items, _toConsumableArray$1(items));
          } else {
            var _this2$items2;
            // Mutar el array existente en lugar de reemplazarlo para mantener reactividad con provide/inject
            (_this2$items2 = _this2.items).splice.apply(_this2$items2, [0, _this2.items.length].concat(_toConsumableArray$1(items)));
          }
        }
        console.debug("fetchItems - this.items después de asignar:", _this2.items, "Cantidad:", _this2.items ? _this2.items.length : 0);
        _this2.loading = false;
        _this2.firstLoad = true;
        _this2.$emit("afterFetch", {});
      }).catch(function (error) {
        _this2.toastError(error);
        _this2.loading = false;
        _this2.firstLoad = true;
        _this2.fetchError = true;
      });
    },
    groupItems: function groupItems(items) {
      var concat = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
      var splitGroups = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;
      var groupedAttribute = this.groupedAttribute;
      var groupLabelPre = this.groupedLabelPre || '';
      var groupLabelAfter = this.groupedLabelAfter || '';
      var itemsWithGroup = [];

      // Usamos un objeto para agrupar los elementos por groupedAttribute
      var groupedMap = items.reduce(function (acc, item) {
        var groupKey = item[groupedAttribute] || 'undefined';
        if (!acc[groupKey]) {
          acc[groupKey] = [];
        }
        acc[groupKey].push(item);
        return acc;
      }, {});
      if (splitGroups) {
        var _this$items;
        // Dividimos los grupos en arrays separados
        var groupedItems = Object.entries(groupedMap).map(function (_ref) {
          var _ref2 = _slicedToArray(_ref, 2),
            groupKey = _ref2[0],
            groupItems = _ref2[1];
          return {
            groupKey: groupKey,
            groupLabel: groupLabelPre + groupKey + groupLabelAfter,
            items: groupItems
          };
        });
        // Mutar el array existente para mantener reactividad
        (_this$items = this.items).splice.apply(_this$items, [0, this.items.length].concat(_toConsumableArray$1(groupedItems)));
      } else {
        // Creamos la estructura agrupada en un solo array
        for (var _i = 0, _Object$entries = Object.entries(groupedMap); _i < _Object$entries.length; _i++) {
          var _Object$entries$_i = _slicedToArray(_Object$entries[_i], 2),
            groupKey = _Object$entries$_i[0],
            groupItems = _Object$entries$_i[1];
          itemsWithGroup.push({
            crudgrouplabel: groupLabelPre + groupKey + groupLabelAfter,
            crudgroup: true
          });
          itemsWithGroup.push.apply(itemsWithGroup, _toConsumableArray$1(groupItems));
        }

        // Decidimos si concatenar o reemplazar los items existentes
        if (concat) {
          var _this$items2;
          (_this$items2 = this.items).push.apply(_this$items2, itemsWithGroup);
        } else {
          var _this$items3;
          // Mutar el array existente para mantener reactividad
          (_this$items3 = this.items).splice.apply(_this$items3, [0, this.items.length].concat(itemsWithGroup));
        }
      }
    },
    saveItemVuex: function saveItemVuex() {
      var _this3 = this;
      return _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee2() {
        var result, create, jsondata;
        return _regenerator().w(function (_context2) {
          while (1) switch (_context2.n) {
            case 0:
              console.debug("save item 1", _this3.item);
              create = false;
              if (!_this3.vuexLocalforage) {
                _context2.n = 5;
                break;
              }
              if (_this3.markDirty) {
                _this3.item.dirty = true;
              }
              if (!_this3.item.id) {
                _context2.n = 2;
                break;
              }
              _context2.n = 1;
              return _this3.model.$create({
                data: _this3.item
              });
            case 1:
              result = _context2.v;
              console.debug("save item 4", _this3.item, result);
              create = false;
              _context2.n = 4;
              break;
            case 2:
              _context2.n = 3;
              return _this3.model.$create({
                data: _this3.item
              });
            case 3:
              result = _context2.v;
              console.debug("save item 5", _this3.item, result);
              create = true;
            case 4:
              _context2.n = 11;
              break;
            case 5:
              jsondata = _this3.item.$toJson();
              console.debug("save item 2", _this3.item, jsondata);
              if (!_this3.item.id) {
                _context2.n = 7;
                break;
              }
              _context2.n = 6;
              return _this3.model.api().put(_this3.apiUrl + "/" + _this3.modelName + '/' + _this3.item.id, jsondata);
            case 6:
              result = _context2.v;
              create = false;
              _context2.n = 9;
              break;
            case 7:
              _context2.n = 8;
              return _this3.model.api().post(_this3.apiUrl + "/" + _this3.modelName, jsondata);
            case 8:
              result = _context2.v;
              create = true;
            case 9:
              result.response.status;
              if (!result.response.data.error) {
                _context2.n = 10;
                break;
              }
              _this3.toastError(result.response.data.error);
              _this3.loading = false;
              return _context2.a(2);
            case 10:
              result.save();
            case 11:
              if (_this3.refreshAfterSave) _this3.refresh();
              _this3.loading = false;
              _this3.toastSuccess("Elemento Modificado");
              if (_this3.hideModalAfterSave || create && _this3.hideModalAfterCreate || !create && _this3.hideModalAfterUpdate) {
                _this3.$bvModal.hide("modal-form-item-" + _this3.modelName);
              }
            case 12:
              return _context2.a(2);
          }
        }, _callee2);
      }))();
    },
    saveItemLocal: function saveItemLocal() {
      var _this4 = this;
      return _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee3() {
        var itemSave, itemIndex;
        return _regenerator().w(function (_context3) {
          while (1) switch (_context3.n) {
            case 0:
              itemSave = JSON.parse(JSON.stringify(_this4.item));
              if (_this4.item.id || _this4.item.index) {
                if (_this4.item.id) {
                  itemIndex = _this4.items.findIndex(function (item) {
                    return item.id == _this4.item.id;
                  });
                } else {
                  itemIndex = _this4.items.findIndex(function (item) {
                    return item.index == _this4.item.index;
                  });
                }
                _this4.items[itemIndex] = itemSave;
                if (_this4.hideModalAfterSave || _this4.hideModalAfterUpdate) {
                  _this4.$bvModal.hide("modal-form-item-" + _this4.modelName);
                }
              } else {
                itemSave.index = _this4.items.length + 1;
                _this4.items.push(itemSave);
                if (_this4.hideModalAfterSave || _this4.hideModalAfterCreate) {
                  _this4.$bvModal.hide("modal-form-item-" + _this4.modelName);
                }
              }
              _this4.toastSuccess("Elemento Modificado");
              _this4.loading = false;
            case 1:
              return _context3.a(2);
          }
        }, _callee3);
      }))();
    },
    saveItem: function saveItem() {
      var _arguments4 = arguments,
        _this5 = this;
      return _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee4() {
        var event, validation_result, validation_error_message, formData;
        return _regenerator().w(function (_context4) {
          while (1) switch (_context4.n) {
            case 0:
              event = _arguments4.length > 0 && _arguments4[0] !== undefined ? _arguments4[0] : null;
              _this5.loading = true;
              if (!_this5.validate) {
                _context4.n = 2;
                break;
              }
              validation_result = true;
              validation_error_message = _this5.messageDefaultValidationError;
              if (validation_result) {
                _context4.n = 1;
                break;
              }
              _this5.toastError(validation_error_message);
              return _context4.a(2);
            case 1:
              _context4.n = 3;
              break;
            case 2:
              if (event) event.preventDefault();
            case 3:
              if (!_this5.useVuexORM) {
                _context4.n = 4;
                break;
              }
              return _context4.a(2, _this5.saveItemVuex(event));
            case 4:
              if (_this5.ajax) {
                _context4.n = 5;
                break;
              }
              return _context4.a(2, _this5.saveItemLocal(event));
            case 5:
              if (_this5.item.id) {
                axios$1.put(_this5.apiUrl + "/" + _this5.modelName + "/" + _this5.item.id, _this5.item).then(function (response) {
                  if (_this5.hideModalAfterSave || _this5.hideModalAfterUpdate) {
                    _this5.$bvModal.hide("modal-form-item-" + _this5.modelName);
                  }
                  var itemSv = response.data;
                  var itemIndex = _this5.items.findIndex(function (item) {
                    return item.id == _this5.item.id;
                  });
                  _this5.items[itemIndex] = itemSv;
                  _this5.item = itemSv;
                  _this5.loading = false;
                  if (_this5.refreshAfterSave) _this5.refresh();
                  _this5.toastSuccess("Elemento Modificado");
                  _this5.$emit("itemSaved", {
                    item: _this5.item
                  });
                  _this5.$emit("itemUpdated", {
                    item: _this5.item
                  });
                }).catch(function (error) {
                  _this5.toastError(error);
                  _this5.loading = false;
                });
              } else {
                if (_this5.createMultipart) {
                  formData = new FormData();
                  Object.keys(_this5.item).forEach(function (key) {
                    if (_this5.item[key][0] && _this5.item[key][0].name) {
                      var files = _this5.item[key];
                      for (var x = 0; x < files.length; x++) {
                        formData.append(key + "[]", _this5.item[key][x], _this5.item[key][x].name);
                      }
                    } else formData.append(key, _this5.item[key]);
                  });
                  axios$1.post(_this5.apiUrl + "/" + _this5.modelName, formData).then(function (response) {
                    _this5.loading = false;
                    if (_this5.hideModalAfterSave || _this5.hideModalAfterCreate) {
                      _this5.$bvModal.hide("modal-form-item-" + _this5.modelName);
                    }
                    if (response.data.success) {
                      if (response.data.message) {
                        _this5.toastSuccess(response.data.message);
                      }
                      return;
                    }
                    var itemSv = response.data;
                    _this5.items.push(itemSv);
                    _this5.item = itemSv;
                    if (_this5.refreshAfterSave) _this5.refresh();
                    _this5.toastSuccess("Elemento Creado");
                    _this5.$emit("itemSaved", {
                      item: _this5.item
                    });
                    _this5.$emit("itemCreated", {
                      item: _this5.item
                    });
                  }).catch(function (error) {
                    _this5.toastError(error);
                    _this5.loading = false;
                  });
                } else {
                  axios$1.post(_this5.apiUrl + "/" + _this5.modelName, _this5.item).then(function (response) {
                    _this5.loading = false;
                    if (_this5.hideModalAfterSave || _this5.hideModalAfterUpdate) {
                      _this5.$bvModal.hide("modal-form-item-" + _this5.modelName);
                    }
                    if (response.data.success) {
                      if (response.data.message) {
                        _this5.toastSuccess(response.data.message);
                      }
                      return;
                    }
                    var itemSv = response.data;
                    _this5.items.push(itemSv);
                    _this5.item = itemSv;
                    if (_this5.refreshAfterSave) _this5.refresh();
                    _this5.toastSuccess("Elemento Creado");
                    _this5.$emit("itemSaved", {
                      item: _this5.item
                    });
                    _this5.$emit("itemCreated", {
                      item: _this5.item
                    });
                  }).catch(function (error) {
                    _this5.toastError(error);
                    _this5.loading = false;
                  });
                }
              }
              if (event) event.preventDefault();
            case 6:
              return _context4.a(2);
          }
        }, _callee4);
      }))();
    },
    deleteItem: function deleteItem(id, index) {
      var _this6 = this;
      if (this.useVuexORM) {
        return this.deleteItemVuex(id, index);
      }
      if (!this.ajax) {
        return this.deleteItemLocal(id, index);
      }
      this.loading = true;
      axios$1.delete(this.apiUrl + "/" + this.modelName + "/" + id).then(function (response) {
        _this6.items.splice(index, 1);
        _this6.toastSuccess("Elemento eliminado.");
        _this6.$emit("itemDeleted", {});
        _this6.loading = false;
      }).catch(function (error) {
        _this6.toastError(error);
        _this6.loading = false;
      });
    },
    deleteItemLocal: function deleteItemLocal(id, index) {
      var _this7 = this;
      return _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee5() {
        var itemIndex;
        return _regenerator().w(function (_context5) {
          while (1) switch (_context5.n) {
            case 0:
              if (id || index) {
                if (id) {
                  itemIndex = _this7.items.findIndex(function (item) {
                    return item.id == _this7.item.id;
                  });
                } else {
                  itemIndex = index;
                }
                _this7.items.splice(itemIndex, 1);
                _this7.item = null;
                _this7.toastSuccess("Elemento Eliminado");
                _this7.$emit("itemDeleted", {});
              } else {
                console.error("Cannot delete item without ID or index");
              }
              _this7.loading = false;
            case 1:
              return _context5.a(2);
          }
        }, _callee5);
      }))();
    },
    deleteItemVuex: function deleteItemVuex(id, index) {
      var _this8 = this;
      return _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee6() {
        var result;
        return _regenerator().w(function (_context6) {
          while (1) switch (_context6.n) {
            case 0:
              if (!_this8.vuexLocalforage) {
                _context6.n = 2;
                break;
              }
              _context6.n = 1;
              return _this8.model.$delete(id);
            case 1:
              _context6.n = 4;
              break;
            case 2:
              _context6.n = 3;
              return _this8.model.api().delete(_this8.apiUrl + "/" + _this8.modelName + '/' + id, {
                delete: 1
              });
            case 3:
              result = _context6.v;
              console.debug("delete item vuex", result);
              result.response.status;
              if (!result.response.data.error) {
                _context6.n = 4;
                break;
              }
              _this8.toastError(result.response.data.error);
              _this8.loading = false;
              return _context6.a(2);
            case 4:
              _this8.toastSuccess("Elemento eliminado.");
            case 5:
              return _context6.a(2);
          }
        }, _callee6);
      }))();
    },
    deleteItemBulk: function deleteItemBulk() {
      var _this9 = this;
      if (this.useVuexORM) {
        return this.deleteItemBulkVuex();
      }
      if (!this.ajax) {
        return this.deleteItemBulkLocal();
      }
      var ids = this.selectedItems.map(function (it) {
        return it.id;
      });
      this.loading = true;
      axios$1.delete(this.apiUrl + "/" + this.modelName + "/bulk-destroy", {
        params: {
          ids: ids
        }
      }).then(function (response) {
        _this9.toastSuccess("Elemento/s eliminado.");
        _this9.$emit("itemDeleted", {});
        _this9.clearSelection();
        _this9.refresh();
      }).catch(function (error) {
        _this9.toastError(error);
        _this9.loading = false;
      });
    },
    deleteItemBulkLocal: function deleteItemBulkLocal() {
      var _this0 = this;
      return _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee7() {
        var ids;
        return _regenerator().w(function (_context7) {
          while (1) switch (_context7.n) {
            case 0:
              ids = _this0.selectedItems.map(function (it) {
                return it.id;
              });
              _this0.items = _this0.items.filter(function (it) {
                return !ids.includes(it.id);
              });
              _this0.item = null;
              _this0.pagination.total = _this0.items.length;
              _this0.toastSuccess("Elemento Eliminado");
              _this0.$emit("itemDeleted", {});
              _this0.clearSelection();
              _this0.loading = false;
            case 1:
              return _context7.a(2);
          }
        }, _callee7);
      }))();
    },
    deleteItemBulkVuex: function deleteItemBulkVuex() {
      var _this1 = this;
      return _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee8() {
        var ids, result, itemsResult;
        return _regenerator().w(function (_context8) {
          while (1) switch (_context8.n) {
            case 0:
              ids = _this1.selectedItems.map(function (it) {
                return it.id;
              });
              if (!_this1.vuexLocalforage) {
                _context8.n = 2;
                break;
              }
              _context8.n = 1;
              return _this1.model.$delete(ids);
            case 1:
              _context8.n = 4;
              break;
            case 2:
              _context8.n = 3;
              return _this1.model.api().delete(_this1.apiUrl + "/" + _this1.modelName + '/bulk-destroy', {
                params: {
                  ids: ids
                },
                delete: ids
              });
            case 3:
              result = _context8.v;
              console.debug("delete item vuex", result);
              result.response.status;
              if (!result.response.data.error) {
                _context8.n = 4;
                break;
              }
              _this1.toastError(result.response.data.error);
              _this1.loading = false;
              return _context8.a(2);
            case 4:
              // Actualizar items desde el store Vuex
              itemsResult = _this1.model.query().withAll().get();
              if (itemsResult) {
                _this1.items = itemsResult;
              }
              _this1.toastSuccess("Elemento eliminados.");
              _this1.clearSelection();
              _this1.loading = false;
            case 5:
              return _context8.a(2);
          }
        }, _callee8);
      }))();
    },
    saveSort: function saveSort() {
      var _this10 = this;
      if (this.orderable) {
        this.loading = true;
        var order = [];
        this.items.forEach(function (v, k) {
          order.push({
            id: v.id,
            order: v[_this10.orderProp]
          });
        });
        if (!this.ajax) {
          return;
        }
        axios$1.post(this.apiUrl + "/" + this.modelName + "/sort", {
          order: order
        }).then(function (response) {
          response.data;
          _this10.toastSuccess("Orden Actualizado");
          if (_this10.refreshAfterSave) _this10.refresh();
          _this10.loading = false;
        }).catch(function (error) {
          _this10.toastError(error);
          _this10.loading = false;
        });
      }
    },
    exportItems: function exportItems() {
      var _this11 = this;
      if (this.useVuexORM) {
        return;
      }
      if (!this.ajax) {
        return;
      }
      var exportItems = true;
      var params;
      var ids = this.selectedItems.map(function (it) {
        return it.id;
      });
      if (ids.length) {
        params = {
          ids: ids,
          exportItems: exportItems
        };
      } else {
        params = {
          filters: JSON.stringify(this.finalFilters),
          exportItems: exportItems
        };
      }
      params.format = this.exportFormatReactive.value;
      this.loading = true;
      axios$1.get(this.apiUrl + "/" + this.modelName + "/export", {
        params: params,
        responseType: "blob"
      }).then(function (response) {
        _this11.downloadBlobResponse(response);
        _this11.loading = false;
      }).catch(function (error) {
        _this11.toastError(error);
        _this11.loading = false;
      });
    },
    importItems: function importItems() {
      var _this12 = this;
      var formData = new FormData();
      formData.append("file", this.fileImport);
      axios$1.post(this.apiUrl + "/" + this.modelName + "/import", formData, {
        headers: {
          "Content-Type": "multipart/form-data"
        }
      }).then(function (response) {
        if (response && response.data && response.data.success == true) {
          _this12.$refs["modal-import"].hide();
          _this12.toastSuccess("Datos Importados con Éxito");
          _this12.refresh();
        } else {
          _this12.toastError("No se pudo importar los datos.");
        }
      }).catch(function (error) {
        console.error(error);
        _this12.toastError(error);
      });
    },
    refresh: function refresh() {
      var _this13 = this;
      this.$emit("refresh", {});
      if (this.infiniteScroll) {
        this.pagination.current_page = 1;
        this.infiniteScrollKey++;
      }
      var fetchPromise = this.fetchItems(this.pagination.current_page);
      if (this.infiniteScroll && fetchPromise) {
        this.refreshing = true;
        fetchPromise.then(function () {
          // El infinite scroll ahora usa IntersectionObserver y se resetea automáticamente
          // No necesitamos acceder a referencias del componente
          _this13.refreshing = false;
        });
      }
    },
    onPaginationChange: function onPaginationChange(page) {
      this.fetchItems(page);
    },
    onPerPageChange: function onPerPageChange(perPage) {
      this.pagination.per_page = perPage;
      this.pagination.current_page = 1;
      this.fetchItems(1);
    },
    infiniteHandler: function infiniteHandler($state) {
      var hasNextPage = (this.pagination.total > 0 || !this.firstLoad) && (!this.firstLoad || this.pagination.current_page * this.pagination.per_page <= this.pagination.total);
      console.debug("Has next page", hasNextPage, this.pagination);
      if (hasNextPage) {
        var page = this.pagination.current_page + 1;
        this.fetchItems(page, true).then(function () {
          console.debug("infinite handler then");
          $state.loaded();
        }).catch(function (error) {
          console.debug("infinite handler error", error);
          $state.error();
        });
      } else {
        $state.complete();
      }
    }
  }
};var crudFilters = {
  methods: {
    setupFilters: function setupFilters() {
      var _this = this;
      this.columns.forEach(function (column) {
        if (_this.isColumnHasFilter(column)) {
          if (column.type == "date" || column.type == "number" || column.type == "money") {
            _this.internalFilters.push({
              column: column.prop + "_from",
              op: ">=",
              value: null
            });
            _this.internalFilters.push({
              column: column.prop + "_to",
              op: "<=",
              value: null
            });
          } else {
            _this.internalFilters.push({
              column: column.prop,
              op: column.filterOp ? column.filterOp : "=",
              value: null
            });
          }
        }
        if (_this.sortable) {
          _this.internalFilters.push({
            column: column.prop + "_sort",
            op: column.filterOp ? column.filterOp : "=",
            value: null
          });
        }
      });

      // Procesar filtros custom
      if (this.customFilters && Array.isArray(this.customFilters)) {
        this.customFilters.forEach(function (customFilter) {
          if (_this.isCustomFilterEnabled(customFilter)) {
            // Si el tipo es función (callback), no procesamos automáticamente
            // El callback se encargará del renderizado y gestión del filtro
            if (typeof customFilter.type === 'string') {
              if (customFilter.type == "date" || customFilter.type == "number" || customFilter.type == "money") {
                _this.internalFilters.push({
                  column: customFilter.prop + "_from",
                  op: ">=",
                  value: null
                });
                _this.internalFilters.push({
                  column: customFilter.prop + "_to",
                  op: "<=",
                  value: null
                });
              } else {
                _this.internalFilters.push({
                  column: customFilter.prop,
                  op: customFilter.filterOp ? customFilter.filterOp : "=",
                  value: null
                });
              }
            } else if (typeof customFilter.type === 'function') {
              // Para callbacks, solo creamos el filtro interno si no existe
              // El callback se encargará del renderizado
              if (!_this.internalFilterByProp(customFilter.prop)) {
                _this.internalFilters.push({
                  column: customFilter.prop,
                  op: customFilter.filterOp ? customFilter.filterOp : "=",
                  value: null
                });
              }
            }
          }
        });
      }
    },
    toggleSortFilter: function toggleSortFilter(column) {
      var _this2 = this;
      var value = this.internalFilterByProp(column.prop + "_sort").value;
      if (!value) {
        this.internalFilterByProp(column.prop + "_sort").value = "ASC";
      } else if (value == "ASC") {
        this.internalFilterByProp(column.prop + "_sort").value = "DESC";
      } else if (value == "DESC") {
        this.internalFilterByProp(column.prop + "_sort").value = null;
      }
      this.forceRecomputeCounter++;
      setTimeout(function () {
        _this2.refresh();
      }, 1);
    },
    toggleFilters: function toggleFilters() {
      this.filtersVisible = !this.filtersVisible;
      this.filterSidebarOpen = this.filtersVisible;

      // Si se está abriendo el sidebar y los filtros no están inicializados, inicializarlos
      if (this.filtersVisible && this.internalFilters.length === 0) {
        this.setupFilters();
      }
    },
    resetFilters: function resetFilters() {
      var _this3 = this;
      var refresh = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : true;
      this.internalFilters = [];
      this.setupFilters();
      this.forceRecomputeCounter++;
      if (refresh) {
        setTimeout(function () {
          _this3.refresh();
        }, 1);
      }
    },
    isColumnHasFilter: function isColumnHasFilter(column) {
      return column && !column.hideFilter && column.type != "actions";
    },
    /**
     * Visible en tabla: columnas normales, o hideColumn solo mientras
     * los filtros inline estén abiertos y la columna tenga filtro
     * (para alinear header vacío / celda vacía con el row de filtros).
     * Parche portado desde easy2 (vue-laravel-crud@1.8.4).
     */
    isColumnVisibleInTable: function isColumnVisibleInTable(column) {
      if (!column) return false;
      if (!column.hideColumn) return true;
      return !!(this.enableFilters && this.filtersVisible && this.isColumnHasFilter(column));
    },
    isCustomFilterEnabled: function isCustomFilterEnabled(customFilter) {
      return customFilter && customFilter.prop && !customFilter.hideFilter && customFilter.type != "actions";
    },
    setFilter: function setFilter(column, value) {
      var _this4 = this;
      var filter = this.filter.find(function (f) {
        return f.column == column;
      });
      filter.value = value;
      this.forceRecomputeCounter++;
      setTimeout(function () {
        _this4.refresh();
      }, 1);
    },
    onChangeFilter: function onChangeFilter(event) {
      var _this5 = this;
      this.forceRecomputeCounter++;
      console.debug("Filters debug ", this.finalFilters, this.internalFilter, this.internalFilters, this.filter, this.filters);
      setTimeout(function () {
        _this5.refresh();
      }, 1);
    },
    togglePrincipalSort: function togglePrincipalSort() {
      var _this6 = this;
      this.principalSort = !this.principalSort;
      setTimeout(function () {
        _this6.refresh();
      }, 1);
    }
  }
};var crudValidation = {
  methods: {
    normalizeOptions: function normalizeOptions(options) {
      if (!Array.isArray(options)) {
        return options;
      }
      return options.map(function (option) {
        var normalized = _objectSpread2$1({}, option);

        // Asegurar que siempre tenga id, value y text
        if (normalized.id === undefined && normalized.value !== undefined) {
          normalized.id = normalized.value;
        } else if (normalized.value === undefined && normalized.id !== undefined) {
          normalized.value = normalized.id;
        } else if (normalized.id === undefined && normalized.value === undefined) {
          // Si no tiene ni id ni value, usar text o label como valor por defecto
          normalized.id = normalized.text || normalized.label || "";
          normalized.value = normalized.id;
        }

        // Asegurar que siempre tenga text
        if (normalized.text === undefined) {
          normalized.text = normalized.label !== undefined ? normalized.label : "";
        }
        return normalized;
      });
    },
    loadOptions: function loadOptions() {
      var _this = this;
      return _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee() {
        var i, column, options, normalizedOptions, currentOptionsStr, normalizedOptionsStr;
        return _regenerator().w(function (_context) {
          while (1) switch (_context.p = _context.n) {
            case 0:
              // Establecer bandera para evitar que el watcher de columns se dispare
              _this.isLoadingOptions = true;
              _context.p = 1;
              i = 0;
            case 2:
              if (!(i < _this.columns.length)) {
                _context.n = 6;
                break;
              }
              column = _this.columns[i];
              if (!(column.options instanceof Promise)) {
                _context.n = 4;
                break;
              }
              _context.n = 3;
              return column.options;
            case 3:
              options = _context.v;
              // Solo actualizar si las opciones realmente cambiaron
              if (JSON.stringify(column.options) !== JSON.stringify(options)) {
                // En Vue 3, la asignación directa es reactiva
                _this.columns[i] = _objectSpread2$1(_objectSpread2$1({}, column), {}, {
                  options: options
                });
                console.debug("Options promise", _this.columns);
              }
            case 4:
              // Normalizar opciones para columnas tipo state y array
              if ((column.type === 'state' || column.type === 'array') && Array.isArray(column.options)) {
                normalizedOptions = _this.normalizeOptions(column.options); // Solo actualizar si las opciones normalizadas son diferentes
                currentOptionsStr = JSON.stringify(column.options);
                normalizedOptionsStr = JSON.stringify(normalizedOptions);
                if (currentOptionsStr !== normalizedOptionsStr) {
                  // En Vue 3, la asignación directa es reactiva
                  _this.columns[i] = _objectSpread2$1(_objectSpread2$1({}, column), {}, {
                    options: normalizedOptions
                  });
                }
              }
            case 5:
              i++;
              _context.n = 2;
              break;
            case 6:
              _this.optionsLoaded = true;
            case 7:
              _context.p = 7;
              // Restaurar bandera al finalizar, incluso si hay errores
              _this.isLoadingOptions = false;
              return _context.f(7);
            case 8:
              return _context.a(2);
          }
        }, _callee, null, [[1,, 7, 8]]);
      }))();
    },
    getArrayValue: function getArrayValue(value, displayProp) {
      var _this2 = this;
      var options = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : [];
      if (!Array.isArray(value)) return "N/A";
      var values = [];
      var valuesFinal = [];
      if (value.length > 0) {
        if (_typeof$1(value[0]) === "object" && displayProp) {
          values = value.map(function (vv) {
            return vv[displayProp];
          });
        } else {
          values = value.join(",");
        }
      } else {
        return "";
      }
      values.forEach(function (val) {
        valuesFinal.push(_this2.getStateValue(val, options));
      });
      return values.join(",");
    },
    getStateOptions: function getStateOptions(value, options) {
      if (!options || !Array.isArray(options) || options.length === 0) {
        return [];
      }

      // Asegurar que las opciones estén normalizadas (por si loadOptions no se ha ejecutado aún)
      var normalizedOptions = this.normalizeOptions(options);

      // Si el valor es null o undefined, no hay coincidencias
      if (value === null || value === undefined) {
        return [];
      }

      // Normalizar el valor para comparación (convertir a string)
      var normalizedValue = String(value).trim();
      return normalizedOptions.filter(function (option) {
        // Después de normalizar, las opciones siempre tienen id, value y text
        // Comparar tanto con id como con value para asegurar compatibilidad
        var optionId = option.id !== undefined && option.id !== null ? String(option.id).trim() : null;
        var optionValue = option.value !== undefined && option.value !== null ? String(option.value).trim() : null;
        if (Array.isArray(value)) {
          // Para arrays, verificar si alguno de los valores coincide
          return value.some(function (val) {
            if (val === null || val === undefined) return false;
            var normalizedVal = String(val).trim();
            return optionId && normalizedVal === optionId || optionValue && normalizedVal === optionValue;
          });
        } else {
          // Comparación estricta para valores únicos - comparar con ambos id y value
          return optionId && optionId === normalizedValue || optionValue && optionValue === normalizedValue;
        }
      });
    },
    getStateValue: function getStateValue(value, options) {
      if (!options) {
        console.debug("State Column Not hast options returning value", value, options);
        return value;
      }
      var ops = this.getStateOptions(value, options);
      return ops.map(function (option) {
        // Usar text directamente (ya normalizado)
        return option.text !== undefined ? option.text : "";
      }).join(", ");
    },
    getStateBadgeVariant: function getStateBadgeVariant(option) {
      // Si la opción tiene una propiedad variant, usarla
      if (option.variant) {
        return option.variant;
      }
      // Si no, intentar inferir del id/value común
      var idValue = String(option.id || option.value || '').toLowerCase();
      if (idValue.includes('active') || idValue.includes('activo')) {
        return 'success';
      } else if (idValue.includes('inactive') || idValue.includes('inactivo')) {
        return 'secondary';
      } else if (idValue.includes('pending') || idValue.includes('pendiente')) {
        return 'warning';
      } else if (idValue.includes('done') || idValue.includes('completado')) {
        return 'success';
      } else if (idValue.includes('error') || idValue.includes('error')) {
        return 'danger';
      }
      // Variante por defecto
      return 'primary';
    }
  }
};var crudHelpers = {
  computed: {
    isAllSelected: function isAllSelected() {
      // Forzar dependencia en selectedItems.length para que se recalcule cuando cambie
      var selectedCount = this.selectedItems ? this.selectedItems.length : 0;
      if (!this.itemsList || this.itemsList.length === 0) {
        return false;
      }

      // Si no hay items seleccionados, retornar false
      if (selectedCount === 0) {
        return false;
      }

      // Verificar que todos los items de la lista actual estén seleccionados
      // Usar Boolean() para manejar valores undefined/null
      var allSelected = this.itemsList.every(function (item) {
        return Boolean(item.selected) === true;
      });
      return allSelected;
    }
  },
  methods: {
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
    onSort: function onSort() {
      var _this = this;
      var event = {};
      var i = 1 + (this.pagination.current_page * this.pagination.per_page - this.pagination.per_page);
      this.items.forEach(function (item, index) {
        item[_this.orderProp] = i;
        i++;
      });
      this.$emit("sort", event);
    },
    onCheckSelect: function onCheckSelect(value, item) {
      console.debug("ON CHECK SELECT", value, item);
      if (value) {
        this.item = item;
        this.selectItem();
      } else {
        this.unSelectItem(item);
      }
      this.onSelect();
      console.debug("Selected Items", this.selectedItems);
    },
    toggleAll: function toggleAll(value) {
      var _this2 = this;
      // b-form-checkbox emite el valor booleano directamente en el evento change
      // El valor puede venir directamente como booleano o como evento del DOM
      var checked = typeof value === 'boolean' ? value : value && value.target ? value.target.checked : value;
      if (checked) {
        // Seleccionar todos los items de la lista actual (itemsList)
        this.itemsList.forEach(function (item) {
          // En Vue 3, la asignación directa es reactiva
          item.selected = true;
          // Agregar a selectedItems si no está ya
          if (!_this2.selectedItems.find(function (si) {
            return si.id === item.id;
          })) {
            _this2.selectedItems.push(item);
          }
        });
      } else {
        // Deseleccionar todos
        this.selectedItems.forEach(function (item) {
          item.selected = false;
        });
        this.items.forEach(function (item) {
          item.selected = false;
        });
        this.itemsList.forEach(function (item) {
          item.selected = false;
        });
        // Usar splice para mantener la referencia del array y reactividad con provide/inject
        this.selectedItems.splice(0, this.selectedItems.length);
      }
      this.onSelect();
      console.debug("toggle all", this.selectedItems);
    },
    unSelectItem: function unSelectItem(item) {
      var _this$selectedItems;
      // En Vue 3, la asignación directa es reactiva
      item.selected = false;

      // Filtrar el array y reasignarlo para asegurar reactividad
      var filtered = this.selectedItems.filter(function (e) {
        return e.id != item.id;
      });
      // Vaciar el array y luego agregar los elementos filtrados para mantener la referencia
      (_this$selectedItems = this.selectedItems).splice.apply(_this$selectedItems, [0, this.selectedItems.length].concat(_toConsumableArray$1(filtered)));
    },
    selectItem: function selectItem() {
      var _this3 = this;
      var sitem = this.selectedItems.find(function (e) {
        return e.id == _this3.item.id;
      });
      if (sitem) {
        var _this$selectedItems2;
        // En Vue 3, la asignación directa es reactiva
        this.item.selected = false;
        var filtered = this.selectedItems.filter(function (e) {
          return e.id != _this3.item.id;
        });
        // Usar splice para mantener la referencia del array
        (_this$selectedItems2 = this.selectedItems).splice.apply(_this$selectedItems2, [0, this.selectedItems.length].concat(_toConsumableArray$1(filtered)));
      } else {
        // En Vue 3, la asignación directa es reactiva
        this.item.selected = true;
        this.selectedItems.push(this.item);
      }
    },
    getSelectedItems: function getSelectedItems() {
      return this.selectedItems;
    },
    clearSelection: function clearSelection() {
      // Limpiar todas las selecciones
      this.selectedItems.forEach(function (item) {
        item.selected = false;
      });
      this.items.forEach(function (item) {
        item.selected = false;
      });
      this.itemsList.forEach(function (item) {
        item.selected = false;
      });
      // Vaciar el array manteniendo la referencia para reactividad con provide/inject
      this.selectedItems.splice(0, this.selectedItems.length);
      this.onSelect();
    },
    onSelect: function onSelect() {
      this.$emit("select", this.item);
      this.$emit("selectItems", this.selectedItems);
    },
    showItem: function showItem(id) {
      var _this4 = this;
      var itemIndex = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;
      var item;
      if (itemIndex == null) {
        item = this.items.find(function (it) {
          return it.id == id;
        });
      } else {
        item = this.items[itemIndex];
      }
      if (!item) {
        console.warn('Item not found for showItem');
        return;
      }

      // Hacer copia profunda del objeto para asegurar reactividad
      var itemCopy = JSON.parse(JSON.stringify(item));
      if (this.useVuexORM && !this.vuexLocalforage) {
        var modelInstance = new this.model(itemCopy);
        // En Vue 3, la asignación directa es reactiva
        Object.keys(modelInstance).forEach(function (key) {
          _this4.item[key] = modelInstance[key];
        });
        // Eliminar propiedades que ya no existen
        Object.keys(this.item).forEach(function (key) {
          if (!(key in modelInstance)) {
            delete _this4.item[key];
          }
        });
      } else {
        // En Vue 3, la asignación directa es reactiva
        Object.keys(itemCopy).forEach(function (key) {
          _this4.item[key] = itemCopy[key];
        });
        // Eliminar propiedades que ya no existen
        Object.keys(this.item).forEach(function (key) {
          if (!(key in itemCopy)) {
            delete _this4.item[key];
          }
        });
      }
      this.onSelect();
      this.$nextTick(function () {
        _this4.$bvModal.show("modal-show-item-" + _this4.modelName);
      });
    },
    createItem: function createItem() {
      var _this5 = this;
      // Asegurar que loading esté en false al abrir el modal
      this.loading = false;

      // Hacer copia profunda del objeto para asegurar reactividad
      var itemCopy = JSON.parse(JSON.stringify(this.itemDefault));
      if (this.useVuexORM && !this.vuexLocalforage) {
        var modelInstance = new this.model(itemCopy);
        // En Vue 3, la asignación directa es reactiva
        Object.keys(modelInstance).forEach(function (key) {
          _this5.item[key] = modelInstance[key];
        });
        // Eliminar propiedades que ya no existen
        Object.keys(this.item).forEach(function (key) {
          if (!(key in modelInstance)) {
            delete _this5.item[key];
          }
        });
      } else {
        // En Vue 3, la asignación directa es reactiva
        Object.keys(itemCopy).forEach(function (key) {
          _this5.item[key] = itemCopy[key];
        });
        // Eliminar propiedades que ya no existen
        Object.keys(this.item).forEach(function (key) {
          if (!(key in itemCopy)) {
            delete _this5.item[key];
          }
        });
      }
      this.onSelect();
      this.$nextTick(function () {
        _this5.$bvModal.show("modal-form-item-" + _this5.modelName);
      });
    },
    updateItem: function updateItem(id) {
      var _this6 = this;
      var itemIndex = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;
      // Asegurar que loading esté en false al abrir el modal
      this.loading = false;
      var item;
      if (itemIndex == null) {
        item = this.items.find(function (it) {
          return it.id == id;
        });
      } else {
        item = this.items[itemIndex];
      }
      if (!item) {
        console.warn('Item not found for updateItem');
        return;
      }

      // Hacer copia profunda del objeto para asegurar reactividad
      var itemCopy = JSON.parse(JSON.stringify(item));
      if (this.useVuexORM && !this.vuexLocalforage) {
        var modelInstance = new this.model(itemCopy);
        // En Vue 3, la asignación directa es reactiva
        Object.keys(modelInstance).forEach(function (key) {
          _this6.item[key] = modelInstance[key];
        });
        // Eliminar propiedades que ya no existen
        Object.keys(this.item).forEach(function (key) {
          if (!(key in modelInstance)) {
            delete _this6.item[key];
          }
        });
      } else {
        // En Vue 3, la asignación directa es reactiva
        Object.keys(itemCopy).forEach(function (key) {
          _this6.item[key] = itemCopy[key];
        });
        // Eliminar propiedades que ya no existen
        Object.keys(this.item).forEach(function (key) {
          if (!(key in itemCopy)) {
            delete _this6.item[key];
          }
        });
      }
      this.onSelect();
      this.$nextTick(function () {
        _this6.$bvModal.show("modal-form-item-" + _this6.modelName);
      });
    },
    removeItem: function removeItem(id, index) {
      var _this7 = this;
      this.$bvModal.msgBoxConfirm(this.messageRemoveConfirm, {
        size: "sm",
        buttonSize: "sm",
        okVariant: "danger",
        okTitle: this.messageRemove,
        cancelTitle: "NO",
        centered: true
      }).then(function (value) {
        if (value) {
          _this7.deleteItem(id, index);
        }
      }).catch(function (error) {
        _this7.toastError(error);
        _this7.loading = false;
      });
    },
    confirmBulkDelete: function confirmBulkDelete() {
      var _this8 = this;
      this.$bvModal.msgBoxConfirm(this.messageRemoveBulkConfirm, {
        size: "sm",
        buttonSize: "sm",
        okVariant: "danger",
        okTitle: this.messageRemove,
        cancelTitle: "NO",
        centered: true
      }).then(function (value) {
        if (value) {
          _this8.deleteItemBulk();
        }
      }).catch(function (error) {
        _this8.toastError(error);
        _this8.loading = false;
      });
    },
    toggleDisplayMode: function toggleDisplayMode() {
      // Mutar la propiedad local _displayMode y el objeto reactivo
      if (this._displayMode == this.displayModes.MODE_TABLE) {
        this._displayMode = this.displayModes.MODE_CARDS;
        if (this.displayModeReactive) {
          this.displayModeReactive.value = this.displayModes.MODE_CARDS;
        }
      } else if (this._displayMode == this.displayModes.MODE_CARDS) {
        this._displayMode = this.displayModes.MODE_TABLE;
        if (this.displayModeReactive) {
          this.displayModeReactive.value = this.displayModes.MODE_TABLE;
        }
      }
    },
    showExportModal: function showExportModal() {
      // Asegurar que loading esté en false al abrir el modal
      this.loading = false;
      if (this.$refs.crudModals && this.$refs.crudModals.$refs["modal-export"]) {
        this.$refs.crudModals.$refs["modal-export"].show();
      }
    },
    showImportModal: function showImportModal() {
      // Asegurar que loading esté en false al abrir el modal
      this.loading = false;
      if (this.$refs.crudModals && this.$refs.crudModals.$refs["modal-import"]) {
        this.$refs.crudModals.$refs["modal-import"].show();
      }
    },
    onDraggableAdded: function onDraggableAdded(event) {
      this.$emit("draggableAdded", event);
    },
    onDraggableChange: function onDraggableChange(event) {
      this.$emit("draggableChange", event);
    },
    onDragEnd: function onDragEnd(event) {
      // Handle drag end for Kanban
      if (event.added || event.moved) {
        var item = event.item.__vue__.$parent.item || event.item.__vue__.item;
        var newColumn = event.to.parentElement.getAttribute('data-column');
        if (item && newColumn) {
          // Update the item's grouped attribute
          item[this.groupedAttribute] = newColumn;

          // Save to backend if ajax is enabled
          if (this.ajax) {
            this.saveItem();
          }
          this.$emit("draggableChange", event);
        }
      }
    },
    toastError: function toastError(error) {
      var error_message = "Ha ocurrido un error";
      if (typeof error === "string") {
        error_message = error;
      } else if (error.response) {
        // handle API errors
        if (error.response.status === 401) {
          error_message = "No estás autorizado para realizar esta acción";
        } else if (error.response.status === 404) {
          error_message = "El recurso solicitado no se encontró";
        } else if (error.response.status >= 400 && error.response.status < 500) {
          error_message = "Hubo un problema con la solicitud realizada";
        } else if (error.response.status >= 500) {
          error_message = "El servidor no pudo procesar la solicitud";
        }
        if (error.response.data) {
          if (_typeof$1(error.response.data) === "object") {
            if (error.response.data.errors) {
              var errors = error.response.data.errors;
              this.responseErrors = errors;
              error_message = Object.values(errors)[0][0];
            } else if (error.response.data.message) {
              error_message = error.response.data.message;
            }
          } else if (typeof error.response.data === "string") {
            error_message = error.response.data;
          }
        }
      } else if (error.request) {
        // handle network errors
        error_message = "No se pudo conectar con el servidor. Verifique su conexión a Internet.";
      } else if (error.message) {
        // handle other errors
        error_message = error.message;
      }

      // Usar $toast si está disponible, sino usar $bvToast (compatibilidad)
      if (this.$toast) {
        this.$toast(error_message, {
          title: "Error",
          toaster: "b-toaster-bottom-right",
          variant: "danger",
          solid: true,
          appendToast: true
        });
      } else if (this.$bvToast && this.$bvToast.toast) {
        this.$bvToast.toast(error_message, {
          title: "Error",
          toaster: "b-toaster-bottom-right",
          variant: "danger",
          solid: true,
          appendToast: true
        });
      } else {
        // Fallback: usar console.error
        console.error('Error:', error_message);
      }
    },
    toastSuccess: function toastSuccess(message) {
      // Usar $toast si está disponible, sino usar $bvToast (compatibilidad)
      if (this.$toast) {
        this.$toast(message, {
          title: "Listo",
          toaster: "b-toaster-bottom-right",
          variant: "success",
          solid: true,
          appendToast: true
        });
      } else if (this.$bvToast && this.$bvToast.toast) {
        this.$bvToast.toast(message, {
          title: "Listo",
          toaster: "b-toaster-bottom-right",
          variant: "success",
          solid: true,
          appendToast: true
        });
      } else {
        // Fallback: usar console.log
        console.log('Success:', message);
      }
    },
    downloadBlobResponse: function downloadBlobResponse(response) {
      var extension = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;
      var url = window.URL.createObjectURL(new Blob([response.data]));
      var link = document.createElement("a");
      link.href = url;
      var contentdisposition = response.headers['content-disposition'];
      var filename = "Export";
      if (contentdisposition) {
        filename = contentdisposition.split('filename=')[1].split('.')[0];
        filename = filename.replace('_', '');
        filename = filename.replace('"', '');
        extension = contentdisposition.split('.')[1].split(';')[0];
        extension = extension.replace('_', '');
        extension = extension.replace('"', '');
      }
      console.debug("DOWNLOAD ", filename, extension);
      link.setAttribute("download", filename + '.' + extension);
      document.body.appendChild(link);
      link.click();
    }
  }
};/**
 * Utilidades para detectar y validar la versión de Bootstrap
 */

/**
 * Detecta la versión de Bootstrap instalada
 * @returns {number|string} 4, 5, o 'unknown'
 */
function detectBootstrapVersion() {
  try {
    // Intentar detectar Bootstrap 5
    if (typeof window !== 'undefined' && window.bootstrap) {
      // Bootstrap 5 expone window.bootstrap
      return 5;
    }

    // Intentar detectar bootstrap-vue (Bootstrap 4)
    if (typeof window !== 'undefined' && window.Vue) {
      // Verificar si bootstrap-vue está registrado
      var vue = window.Vue;
      if (vue.options && vue.options._base) {
        // Verificar componentes de bootstrap-vue
        if (vue.options._base.options.components && vue.options._base.options.components['b-button']) {
          return 4;
        }
      }
    }

    // Verificar por clases CSS en el DOM
    if (typeof document !== 'undefined') {
      var testEl = document.createElement('div');
      testEl.className = 'd-flex';
      document.body.appendChild(testEl);
      var styles = window.getComputedStyle(testEl);
      // Bootstrap 5 usa diferentes valores por defecto
      // Esta es una heurística simple
      document.body.removeChild(testEl);
    }
    return 'unknown';
  } catch (e) {
    console.warn('Error detecting Bootstrap version:', e);
    return 'unknown';
  }
}

/**
 * Normaliza la versión de Bootstrap
 * Si es 'auto', intenta detectarla, si no puede, retorna 5 como default (Vue 3 / BS5)
 * @param {number|string} version - Versión a normalizar
 * @returns {number} 4 o 5
 */
function normalizeBootstrapVersion(version) {
  if (version === 'auto' || version === 'unknown') {
    var detected = detectBootstrapVersion();
    if (detected === 4 || detected === 5) {
      return detected;
    }
    // Default Bootstrap 5 (Vue 3 stack)
    return 5;
  }
  if (version === 4 || version === 5) {
    return version;
  }

  // Default Bootstrap 5
  return 5;
}// Import estático de wrappers Bootstrap (se resuelve en build time si están disponibles)
// Nota: En contextos ESM, esto puede fallar, pero el factory tiene fallbacks
var BootstrapWrappersStatic = null;
try {
  if (typeof require !== 'undefined') {
    BootstrapWrappersStatic = require('../bootstrap-wrappers');
  }
} catch (e) {
  // Los wrappers no están disponibles en este contexto
  BootstrapWrappersStatic = null;
}

// Cache para wrappers Bootstrap (compatibles con BS4 y BS5)
var bootstrapComponents = null;
var bootstrapAvailable = null;

/**
 * Carga wrappers de Bootstrap (compatibles con BS4 y BS5)
 * @returns {Object|null}
 */
function loadBootstrapComponents() {
  if (bootstrapAvailable !== null) {
    return bootstrapComponents;
  }

  // Usar el import estático si está disponible
  if (BootstrapWrappersStatic) {
    // El módulo puede exportar como default (plugin) o como objeto
    var module = BootstrapWrappersStatic.default || BootstrapWrappersStatic;

    // Si es el plugin, extraer los componentes
    if (module.Bootstrap) {
      bootstrapComponents = module.Bootstrap;
    } else if (module.Bootstrap5) {
      // Compatibilidad con nombre anterior
      bootstrapComponents = module.Bootstrap5;
    } else {
      // Si es un plugin Vue, extraer los componentes del objeto
      // Los plugins Vue exportan los componentes como propiedades del objeto
      bootstrapComponents = {};
      Object.keys(module).forEach(function (key) {
        // Excluir propiedades especiales del plugin
        if (key !== 'install' && key !== 'Bootstrap' && key !== 'Bootstrap5') {
          var component = module[key];
          // Verificar que sea un componente Vue válido
          if (component && (_typeof$1(component) === 'object' || typeof component === 'function')) {
            // Si tiene name, __file, render o template, es un componente Vue
            if (component.name || component.__file || component.render || component.template || component.options && component.options.name) {
              bootstrapComponents[key] = component;
              // También agregar con prefijo 'b-' si es un nombre PascalCase
              if (key.startsWith('B') && key.length > 1) {
                var prefixedName = 'b-' + key.slice(1).replace(/([A-Z])/g, '-$1').toLowerCase();
                bootstrapComponents[prefixedName] = component;
              }
              // También agregar con nombre camelCase
              var camelName = key.charAt(0).toLowerCase() + key.slice(1);
              bootstrapComponents[camelName] = component;
            }
          }
        }
      });
    }
    bootstrapAvailable = true;
    return bootstrapComponents;
  }

  // Intentar require dinámico como fallback
  try {
    if (typeof require !== 'undefined') {
      var BootstrapWrappers = require('../bootstrap-wrappers');
      var _module = BootstrapWrappers.default || BootstrapWrappers;
      if (_module.Bootstrap) {
        bootstrapComponents = _module.Bootstrap;
      } else if (_module.Bootstrap5) {
        bootstrapComponents = _module.Bootstrap5;
      } else {
        // Extraer componentes del plugin
        bootstrapComponents = {};
        Object.keys(_module).forEach(function (key) {
          if (key !== 'install' && key !== 'Bootstrap' && key !== 'Bootstrap5') {
            var component = _module[key];
            if (component && (_typeof$1(component) === 'object' || typeof component === 'function')) {
              if (component.name || component.__file || component.render || component.template || component.options && component.options.name) {
                bootstrapComponents[key] = component;
                if (key.startsWith('B') && key.length > 1) {
                  var prefixedName = 'b-' + key.slice(1).replace(/([A-Z])/g, '-$1').toLowerCase();
                  bootstrapComponents[prefixedName] = component;
                }
                var camelName = key.charAt(0).toLowerCase() + key.slice(1);
                bootstrapComponents[camelName] = component;
              }
            }
          }
        });
      }
      bootstrapAvailable = true;
      return bootstrapComponents;
    }
  } catch (e) {
    // Wrappers Bootstrap no están disponibles
    console.warn('Error loading Bootstrap components:', e);
  }
  bootstrapAvailable = false;
  return null;
}

/**
 * Obtiene un componente de Bootstrap según la versión
 * @param {string} componentName - Nombre del componente (ej: 'b-button' o 'BButton')
 * @param {number|string} version - Versión de Bootstrap (4, 5, o 'auto')
 * @returns {Object|null} Componente Vue o null si no está disponible
 */
function getBootstrapComponent(componentName) {
  var version = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'auto';
  var normalizedVersion = normalizeBootstrapVersion(version);

  // Normalizar nombre del componente (b-button -> BButton, BButton -> BButton)
  var normalizedName = componentName.charAt(0).toUpperCase() + componentName.slice(1).replace(/-([a-z])/g, function (g) {
    return g[1].toUpperCase();
  });
  var prefixedName = 'b-' + componentName.replace(/^b-/, '').replace(/([A-Z])/g, '-$1').toLowerCase();

  // Los wrappers son compatibles con Bootstrap 4 y 5
  var BootstrapWrappers = loadBootstrapComponents();
  if (BootstrapWrappers) {
    if (BootstrapWrappers[normalizedName]) return BootstrapWrappers[normalizedName];
    if (BootstrapWrappers[componentName]) return BootstrapWrappers[componentName];
    if (BootstrapWrappers[prefixedName]) return BootstrapWrappers[prefixedName];
  }
  console.error("Component ".concat(componentName, " not found for Bootstrap ").concat(normalizedVersion));
  return null;
}

/**
 * Obtiene todos los componentes de Bootstrap según la versión
 * @param {number|string} version - Versión de Bootstrap (4, 5, o 'auto')
 * @returns {Object} Objeto con todos los componentes disponibles
 */
function getBootstrapComponents() {
  var version = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'auto';
  normalizeBootstrapVersion(version);

  // Los wrappers funcionan con Bootstrap 4 y 5
  var BootstrapWrappers = loadBootstrapComponents();
  if (BootstrapWrappers) {
    return BootstrapWrappers;
  }
  return {};
}/**
 * Helpers de modal compatibles con Bootstrap 4 (jQuery) y Bootstrap 5.
 * Evitan backdrops huérfanos y sincronizan instancias Vue 3 / Bootstrap.
 */

/**
 * Obtiene el elemento DOM del modal.
 * @param {string|HTMLElement} modalRef
 * @returns {HTMLElement|null}
 */
function resolveModalElement(modalRef) {
  if (!modalRef) return null;
  if (typeof modalRef !== 'string') return modalRef;
  if (typeof document === 'undefined') return null;
  return document.getElementById(modalRef);
}

/**
 * Resuelve el proxy público de un componente Vue 3/2 desde un elemento DOM.
 * @param {HTMLElement} el
 * @returns {object|null}
 */
function resolveVueComponentFromEl(el) {
  var _el$__vueParentCompon;
  if (!el) return null;

  // Vue 2
  if (el.__vue__) {
    return el.__vue__;
  }

  // Vue 3: InternalInstance en __vueParentComponent
  var inst = el.__vueParentComponent;
  while (inst) {
    var _proxy$$options;
    var proxy = inst.proxy;
    if (proxy && typeof proxy.show === 'function' && typeof proxy.hide === 'function' && (((_proxy$$options = proxy.$options) === null || _proxy$$options === void 0 ? void 0 : _proxy$$options.name) === 'BModal' || proxy.modalId !== undefined)) {
      return proxy;
    }
    inst = inst.parent;
  }

  // Fallback: el root del SFC suele ser el propio modal
  var rootProxy = (_el$__vueParentCompon = el.__vueParentComponent) === null || _el$__vueParentCompon === void 0 ? void 0 : _el$__vueParentCompon.proxy;
  if (rootProxy && typeof rootProxy.show === 'function' && typeof rootProxy.hide === 'function') {
    return rootProxy;
  }
  return null;
}

/**
 * @param {string|HTMLElement} modalRef
 * @returns {import('bootstrap').Modal|null}
 */
function getBootstrapModal(modalRef) {
  var _window$bootstrap;
  var modalEl = resolveModalElement(modalRef);
  if (!modalEl) return null;
  if (typeof window === 'undefined' || !((_window$bootstrap = window.bootstrap) !== null && _window$bootstrap !== void 0 && _window$bootstrap.Modal)) return null;
  return window.bootstrap.Modal.getInstance(modalEl) || null;
}

/**
 * @param {string|HTMLElement} modalRef
 * @param {object} [options]
 * @returns {import('bootstrap').Modal|null}
 */
function getOrCreateBootstrapModal(modalRef) {
  var _window$bootstrap2;
  var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
  var modalEl = resolveModalElement(modalRef);
  if (!modalEl) return null;
  if (typeof window === 'undefined' || !((_window$bootstrap2 = window.bootstrap) !== null && _window$bootstrap2 !== void 0 && _window$bootstrap2.Modal)) return null;
  if (typeof window.bootstrap.Modal.getOrCreateInstance === 'function') {
    return window.bootstrap.Modal.getOrCreateInstance(modalEl, options);
  }
  var instance = window.bootstrap.Modal.getInstance(modalEl);
  if (!instance) {
    instance = new window.bootstrap.Modal(modalEl, options);
  }
  return instance;
}

/**
 * Limpia backdrops y clases residuales de body cuando no queda ningún modal abierto.
 * @param {object} [options]
 * @param {boolean} [options.force=false] - forzar limpieza aunque haya .modal.show
 */
function cleanupModalArtifacts() {
  var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  if (typeof document === 'undefined') return;
  var _options$force = options.force,
    force = _options$force === void 0 ? false : _options$force;
  var openModals = document.querySelectorAll('.modal.show');
  if (!force && openModals.length > 0) {
    return;
  }
  document.querySelectorAll('.modal-backdrop').forEach(function (backdrop) {
    var _backdrop$parentNode;
    (_backdrop$parentNode = backdrop.parentNode) === null || _backdrop$parentNode === void 0 || _backdrop$parentNode.removeChild(backdrop);
  });
  document.body.classList.remove('modal-open');
  document.body.style.removeProperty('overflow');
  document.body.style.removeProperty('padding-right');
  document.body.removeAttribute('data-bs-overflow');
  document.body.removeAttribute('data-bs-padding-right');
}

/**
 * Muestra un modal con la API disponible (BS5 / jQuery / fallback manual).
 * @param {string|HTMLElement} modalRef
 * @param {object} [options]
 */
function showBootstrapModal(modalRef) {
  var _window$bootstrap3;
  var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
  var modalEl = resolveModalElement(modalRef);
  if (!modalEl) return null;
  var opts = {
    backdrop: options.backdrop === undefined ? true : options.backdrop,
    keyboard: options.keyboard === undefined ? true : options.keyboard
  };
  if (typeof window !== 'undefined' && (_window$bootstrap3 = window.bootstrap) !== null && _window$bootstrap3 !== void 0 && _window$bootstrap3.Modal) {
    var instance = getOrCreateBootstrapModal(modalEl, opts);
    instance === null || instance === void 0 || instance.show();
    return instance;
  }
  if (typeof window !== 'undefined' && window.$) {
    window.$(modalEl).modal(opts);
    window.$(modalEl).modal('show');
    return null;
  }

  // Fallback manual
  modalEl.classList.add('show', 'd-block');
  modalEl.style.display = 'block';
  modalEl.setAttribute('aria-hidden', 'false');
  modalEl.setAttribute('aria-modal', 'true');
  document.body.classList.add('modal-open');
  var backdropId = "".concat(modalEl.id || 'modal', "-backdrop");
  var backdrop = document.getElementById(backdropId);
  if (!backdrop) {
    backdrop = document.createElement('div');
    backdrop.className = 'modal-backdrop fade show';
    backdrop.id = backdropId;
    document.body.appendChild(backdrop);
  }
  return null;
}

/**
 * Oculta un modal y limpia artefactos residuales.
 * @param {string|HTMLElement} modalRef
 */
function hideBootstrapModal(modalRef) {
  var _window$bootstrap4;
  var modalEl = resolveModalElement(modalRef);
  if (!modalEl) {
    cleanupModalArtifacts({
      force: true
    });
    return;
  }
  if (typeof window !== 'undefined' && (_window$bootstrap4 = window.bootstrap) !== null && _window$bootstrap4 !== void 0 && _window$bootstrap4.Modal) {
    var instance = getBootstrapModal(modalEl);
    if (instance) {
      var _onHidden = function onHidden() {
        modalEl.removeEventListener('hidden.bs.modal', _onHidden);
        cleanupModalArtifacts();
      };
      modalEl.addEventListener('hidden.bs.modal', _onHidden);
      instance.hide();
      // Safety net if hidden event never fires
      setTimeout(function () {
        return cleanupModalArtifacts();
      }, 400);
      return;
    }

    // Sin instancia BS: limpieza manual del DOM
    modalEl.classList.remove('show', 'd-block');
    modalEl.style.display = 'none';
    modalEl.setAttribute('aria-hidden', 'true');
    modalEl.removeAttribute('aria-modal');
    cleanupModalArtifacts({
      force: true
    });
    return;
  }
  if (typeof window !== 'undefined' && window.$) {
    window.$(modalEl).one('hidden.bs.modal', function () {
      return cleanupModalArtifacts();
    });
    window.$(modalEl).modal('hide');
    setTimeout(function () {
      return cleanupModalArtifacts();
    }, 400);
    return;
  }
  modalEl.classList.remove('show', 'd-block');
  modalEl.style.display = 'none';
  modalEl.setAttribute('aria-hidden', 'true');
  modalEl.removeAttribute('aria-modal');
  cleanupModalArtifacts({
    force: true
  });
}/**
 * Sistema de toasts simple compatible con Bootstrap 4 y 5
 * Reemplaza la funcionalidad de bootstrap-vue $bvToast
 */

/**
 * Crea y muestra un toast
 * @param {string} message - Mensaje a mostrar
 * @param {Object} options - Opciones del toast
 * @param {string} options.title - Título del toast
 * @param {string} options.variant - Variante (success, danger, warning, info)
 * @param {string} options.toaster - Posición (no usado, mantenido por compatibilidad)
 * @param {boolean} options.solid - Si es true, usa fondo sólido
 * @param {boolean} options.appendToast - Si es true, agrega al contenedor existente
 */
function showToast(message) {
  var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
  var _options$title = options.title,
    title = _options$title === void 0 ? '' : _options$title,
    _options$variant = options.variant,
    variant = _options$variant === void 0 ? 'info' : _options$variant,
    _options$toaster = options.toaster,
    toaster = _options$toaster === void 0 ? 'b-toaster-bottom-right' : _options$toaster,
    _options$solid = options.solid,
    solid = _options$solid === void 0 ? false : _options$solid;
    options.appendToast;

  // Crear contenedor de toasts si no existe
  var toasterContainer = document.getElementById('vue-laravel-crud-toaster');
  if (!toasterContainer) {
    toasterContainer = document.createElement('div');
    toasterContainer.id = 'vue-laravel-crud-toaster';
    toasterContainer.className = 'vue-laravel-crud-toaster';

    // Determinar posición basada en toaster
    if (toaster.includes('bottom-right')) {
      toasterContainer.style.cssText = 'position: fixed; bottom: 0; right: 0; z-index: 9999; padding: 1rem; max-width: 350px;';
    } else if (toaster.includes('bottom-left')) {
      toasterContainer.style.cssText = 'position: fixed; bottom: 0; left: 0; z-index: 9999; padding: 1rem; max-width: 350px;';
    } else if (toaster.includes('top-right')) {
      toasterContainer.style.cssText = 'position: fixed; top: 0; right: 0; z-index: 9999; padding: 1rem; max-width: 350px;';
    } else if (toaster.includes('top-left')) {
      toasterContainer.style.cssText = 'position: fixed; top: 0; left: 0; z-index: 9999; padding: 1rem; max-width: 350px;';
    } else {
      // Default: bottom-right
      toasterContainer.style.cssText = 'position: fixed; bottom: 0; right: 0; z-index: 9999; padding: 1rem; max-width: 350px;';
    }
    document.body.appendChild(toasterContainer);
  }

  // Crear elemento toast
  var toastId = "toast-".concat(Date.now(), "-").concat(Math.random().toString(36).substr(2, 9));
  var toast = document.createElement('div');
  toast.id = toastId;
  toast.className = 'toast';
  toast.setAttribute('role', 'alert');
  toast.setAttribute('aria-live', 'assertive');
  toast.setAttribute('aria-atomic', 'true');

  // Determinar clases según variant
  var bgClass = '';
  var textClass = '';
  if (variant === 'success') {
    bgClass = solid ? 'bg-success' : 'border-success';
    textClass = solid ? 'text-white' : 'text-success';
  } else if (variant === 'danger') {
    bgClass = solid ? 'bg-danger' : 'border-danger';
    textClass = solid ? 'text-white' : 'text-danger';
  } else if (variant === 'warning') {
    bgClass = solid ? 'bg-warning' : 'border-warning';
    textClass = solid ? 'text-white' : 'text-warning';
  } else if (variant === 'info') {
    bgClass = solid ? 'bg-info' : 'border-info';
    textClass = solid ? 'text-white' : 'text-info';
  } else {
    bgClass = solid ? 'bg-secondary' : 'border-secondary';
    textClass = solid ? 'text-white' : 'text-secondary';
  }

  // Construir HTML del toast
  toast.innerHTML = "\n    <div class=\"toast-header ".concat(solid ? bgClass + ' ' + textClass : '', "\" style=\"").concat(solid ? '' : 'border-bottom-color: inherit;', "\">\n      ").concat(title ? "<strong class=\"me-auto\">".concat(title, "</strong>") : '', "\n      <button type=\"button\" class=\"btn-close ").concat(solid ? '' : 'btn-close-white', "\" data-bs-dismiss=\"toast\" aria-label=\"Close\"></button>\n    </div>\n    <div class=\"toast-body ").concat(solid ? bgClass + ' ' + textClass : textClass, "\">\n      ").concat(message, "\n    </div>\n  ");

  // Agregar clases adicionales
  if (!solid) {
    toast.classList.add('border');
  }

  // Agregar al contenedor
  toasterContainer.appendChild(toast);

  // Inicializar y mostrar toast
  // Bootstrap 5
  if (typeof window !== 'undefined' && window.bootstrap && window.bootstrap.Toast) {
    var bsToast = new window.bootstrap.Toast(toast, {
      autohide: true,
      delay: 5000
    });
    bsToast.show();

    // Remover del DOM cuando se oculte
    toast.addEventListener('hidden.bs.toast', function () {
      if (toast.parentNode) {
        toast.remove();
      }
    });
  } else {
    // Bootstrap 4 o fallback manual
    toast.classList.add('show');

    // Auto-ocultar después de 5 segundos
    setTimeout(function () {
      toast.classList.remove('show');
      setTimeout(function () {
        if (toast.parentNode) {
          toast.remove();
        }
      }, 300);
    }, 5000);
  }
  return toast;
}

/**
 * Helper para controlar modales programáticamente
 * Compatible con bootstrap-vue $bvModal API (Vue 3 + Bootstrap 5)
 */
var modalHelper = {
  show: function show(modalId) {
    var modalEl = resolveModalElement(modalId);
    if (!modalEl) {
      console.warn("Modal with id \"".concat(modalId, "\" not found"));
      return;
    }
    var vueInstance = resolveVueComponentFromEl(modalEl);
    if (vueInstance && typeof vueInstance.show === 'function') {
      vueInstance.show();
      return;
    }
    if (vueInstance && 'visible' in vueInstance) {
      vueInstance.visible = true;
      return;
    }
    showBootstrapModal(modalEl);
  },
  hide: function hide(modalId) {
    var modalEl = resolveModalElement(modalId);
    if (!modalEl) {
      console.warn("Modal with id \"".concat(modalId, "\" not found"));
      cleanupModalArtifacts({
        force: true
      });
      return;
    }
    var vueInstance = resolveVueComponentFromEl(modalEl);
    if (vueInstance && typeof vueInstance.hide === 'function') {
      vueInstance.hide();
      return;
    }
    if (vueInstance && vueInstance.$refs && vueInstance.$refs[modalId]) {
      var refComponent = vueInstance.$refs[modalId];
      if (typeof refComponent.hide === 'function') {
        refComponent.hide();
        return;
      }
    }
    hideBootstrapModal(modalEl);
  },
  msgBoxConfirm: function msgBoxConfirm(message) {
    var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
    return new Promise(function (resolve) {
      var confirmId = 'confirm-modal-' + Date.now();
      var modal = document.createElement('div');
      modal.id = confirmId;
      modal.className = 'modal fade';
      modal.innerHTML = "\n        <div class=\"modal-dialog modal-sm\">\n          <div class=\"modal-content\">\n            <div class=\"modal-header\">\n              <h5 class=\"modal-title\">".concat(options.title || 'Confirmar', "</h5>\n              <button type=\"button\" class=\"btn-close\" data-bs-dismiss=\"modal\" aria-label=\"Close\"></button>\n            </div>\n            <div class=\"modal-body\">\n              <p>").concat(message, "</p>\n            </div>\n            <div class=\"modal-footer\">\n              <button type=\"button\" class=\"btn btn-secondary\" data-bs-dismiss=\"modal\">").concat(options.cancelTitle || 'Cancelar', "</button>\n              <button type=\"button\" class=\"btn btn-").concat(options.okVariant || 'primary', "\" id=\"").concat(confirmId, "-ok\">").concat(options.okTitle || 'Aceptar', "</button>\n            </div>\n          </div>\n        </div>\n      ");
      document.body.appendChild(modal);
      var settled = false;
      var finish = function finish(result) {
        if (settled) return;
        settled = true;
        hideBootstrapModal(modal);
        setTimeout(function () {
          if (modal.parentNode) {
            modal.remove();
          }
          cleanupModalArtifacts();
        }, 200);
        resolve(result);
      };
      var okButton = document.getElementById("".concat(confirmId, "-ok"));
      var cancelButton = modal.querySelector('.btn-secondary');
      var closeButton = modal.querySelector('.btn-close');
      okButton === null || okButton === void 0 || okButton.addEventListener('click', function () {
        return finish(true);
      });
      cancelButton === null || cancelButton === void 0 || cancelButton.addEventListener('click', function () {
        return finish(false);
      });
      closeButton === null || closeButton === void 0 || closeButton.addEventListener('click', function () {
        return finish(false);
      });
      showBootstrapModal(modal);
      modal.addEventListener('hidden.bs.modal', function () {
        if (modal.parentNode) {
          modal.remove();
        }
        cleanupModalArtifacts();
        if (!settled) {
          settled = true;
          resolve(false);
        }
      });
    });
  }
};

/**
 * Plugin Vue para agregar $toast y $bvModal a las instancias
 */
var ToastPlugin = {
  install: function install(app) {
    app.config.globalProperties.$toast = showToast;

    // Compatibilidad con bootstrap-vue API
    app.config.globalProperties.$bvToast = {
      toast: showToast
    };

    // Helper para modales
    app.config.globalProperties.$bvModal = modalHelper;
  }
};/**
 * Iconos usados por el paquete + aliases comunes de bootstrap-vue.
 * Cualquier nombre adicional se puede pasar a registerBootstrapIcons(app, { icons: [...] }).
 */
var DEFAULT_ICON_NAMES = ['arrow-clockwise', 'arrow-down', 'arrow-left', 'arrow-right', 'arrow-up', 'card-list', 'check', 'check-circle', 'check-square', 'clipboard', 'clipboard-check', 'cloud-download', 'cloud-upload', 'download', 'eye', 'file-earmark', 'file-text', 'funnel', 'gear', 'github', 'grid', 'grid-3x3-gap', 'kanban', 'list', 'pencil', 'plus', 'puzzle', 'search', 'sort-down', 'sort-numeric-down', 'sort-numeric-up', 'sort-up', 'table', 'trash', 'x-circle'];

/**
 * Convierte kebab-case a PascalCase: sort-numeric-down → SortNumericDown
 */
function iconNameToPascal(iconName) {
  return String(iconName).split('-').filter(Boolean).map(function (part) {
    return part.charAt(0).toUpperCase() + part.slice(1);
  }).join('');
}

/**
 * Crea un wrapper <b-icon-{name}> alrededor de BIcon.
 */
function createIconWrapper(BIconComponent, iconName) {
  var pascal = iconNameToPascal(iconName);
  return require$$0.defineComponent({
    name: "BIcon".concat(pascal),
    props: {
      icon: {
        type: String,
        default: iconName
      }
    },
    setup: function setup(props, _ref) {
      var attrs = _ref.attrs,
        slots = _ref.slots;
      return function () {
        return require$$0.h(BIconComponent, _objectSpread2$1(_objectSpread2$1({}, attrs), {}, {
          icon: props.icon || iconName
        }), slots);
      };
    }
  });
}

/**
 * Registra BIcon, b-icon y todos los b-icon-* en la app Vue.
 * Idempotente: no sobrescribe componentes ya registrados.
 *
 * @param {import('vue').App} app
 * @param {object} options
 * @param {object} options.BIcon - componente BIcon
 * @param {string[]} [options.icons] - lista extra de nombres kebab-case
 */
function registerBootstrapIcons(app) {
  var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
  if (!app || !options.BIcon) {
    return;
  }
  var BIconComponent = options.BIcon;
  var icons = Array.from(new Set([].concat(_toConsumableArray$1(options.icons || []), DEFAULT_ICON_NAMES)));
  if (!app._context.components.BIcon) {
    app.component('BIcon', BIconComponent);
  }
  if (!app._context.components['b-icon']) {
    app.component('b-icon', BIconComponent);
  }
  icons.forEach(function (iconName) {
    var pascal = iconNameToPascal(iconName);
    var iconComponentName = "BIcon".concat(pascal);
    var iconKebabName = "b-icon-".concat(iconName);
    if (app._context.components[iconComponentName] || app._context.components[iconKebabName]) {
      return;
    }
    var IconWrapper = createIconWrapper(BIconComponent, iconName);
    app.component(iconComponentName, IconWrapper);
    app.component(iconKebabName, IconWrapper);
  });
}var css = "tr td[data-v-9cafdc0f]:last-child,\ntr td[data-v-9cafdc0f]:first-child {\n  width: 1%;\n  white-space: nowrap;\n}\n\ntbody tr.selected[data-v-9cafdc0f] {\n  background-color: #e3f2fd !important;\n}\ntbody tr.selected td[data-v-9cafdc0f] {\n  background-color: transparent !important;\n}\ntbody tr.selected:hover[data-v-9cafdc0f] {\n  background-color: #bbdefb !important;\n}\ntbody tr.selected:hover td[data-v-9cafdc0f] {\n  background-color: transparent !important;\n}\n\n.table-striped tbody tr.selected:nth-of-type(odd)[data-v-9cafdc0f] {\n  background-color: #e3f2fd !important;\n}\n.table-striped tbody tr.selected:nth-of-type(odd) td[data-v-9cafdc0f] {\n  background-color: transparent !important;\n}\n\n.table-striped tbody tr.selected:nth-of-type(even)[data-v-9cafdc0f] {\n  background-color: #e3f2fd !important;\n}\n.table-striped tbody tr.selected:nth-of-type(even) td[data-v-9cafdc0f] {\n  background-color: transparent !important;\n}\n\n.crud-pagination[data-v-9cafdc0f] {\n  display: flex;\n  align-items: center;\n  width: 100%;\n  justify-content: center;\n  margin-top: 1rem;\n}\n\n.crud-header[data-v-9cafdc0f] {\n  display: flex;\n  justify-content: space-between;\n  max-height: 3rem;\n}\n.crud-header .crud-title[data-v-9cafdc0f] {\n  margin: 0;\n}\n.crud-header .crud-search[data-v-9cafdc0f] {\n  max-width: 15rem;\n}\n.crud-header .crud-search .btn[data-v-9cafdc0f] {\n  border-top-left-radius: 0;\n  border-bottom-left-radius: 0;\n  border-top-right-radius: 0.375rem;\n  border-bottom-right-radius: 0.375rem;\n}\n.crud-header .crud-search .btn.open[data-v-9cafdc0f] {\n  border-top-right-radius: 0;\n  border-bottom-right-radius: 0;\n}\n.crud-header .table-options[data-v-9cafdc0f] {\n  margin-bottom: 1rem;\n  display: flex;\n  align-items: center;\n  justify-content: flex-end;\n}\n\n.custom-control[data-v-9cafdc0f] {\n  position: relative;\n}\n\n@media (min-width: 992px) {\n  .table[data-v-9cafdc0f] {\n    table-layout: auto;\n  }\n  .table tbody td[data-v-9cafdc0f] {\n    overflow: scroll;\n    -ms-overflow-style: none;\n    /* IE and Edge */\n    scrollbar-width: none;\n    /* Firefox */\n  }\n  .table tbody td[data-v-9cafdc0f]::-webkit-scrollbar {\n    display: none;\n  }\n}\n.kanban-board[data-v-9cafdc0f] {\n  display: flex;\n  gap: 1rem;\n  overflow-x: auto;\n  padding: 1rem;\n}\n\n.kanban-column[data-v-9cafdc0f] {\n  background: #f4f5f7;\n  border-radius: 8px;\n  width: 300px;\n  display: flex;\n  flex-direction: column;\n  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);\n}\n\n.kanban-column-header[data-v-9cafdc0f] {\n  font-weight: bold;\n  padding: 0.5rem;\n  background: #dfe1e6;\n  border-radius: 8px 8px 0 0;\n  text-align: center;\n}\n\n.kanban-column-body[data-v-9cafdc0f] {\n  padding: 0.5rem;\n  min-height: 100px;\n  background: #ffffff;\n  border-radius: 0 0 8px 8px;\n  display: flex;\n  flex-direction: column;\n  gap: 0.5rem;\n}\n\n.kanban-card[data-v-9cafdc0f] {\n  background: #ffffff;\n  border-radius: 4px;\n  padding: 1rem;\n  box-shadow: 0 1px 2px rgba(0, 0, 0, 0.1);\n  cursor: grab;\n}";
n(css, {});var _sfc_main = {
  name: "VueLaravelCrud",
  components: {
    CrudHeader: CrudHeader,
    CrudTable: CrudTable,
    CrudCards: CrudCards,
    CrudKanban: CrudKanban,
    CrudCustom: CrudCustom,
    CrudModals: CrudModals,
    CrudPagination: CrudPagination
  },
  mixins: [crudData, crudApi, crudFilters, crudValidation, crudHelpers],
  computed: {
    normalizedBootstrapVersion: function normalizedBootstrapVersion() {
      return normalizeBootstrapVersion(this.bootstrapVersion);
    },
    bootstrapFactory: function bootstrapFactory() {
      var _this = this;
      return {
        getComponent: function getComponent(name) {
          return getBootstrapComponent(name, _this.normalizedBootstrapVersion);
        },
        getComponents: function getComponents() {
          return getBootstrapComponents(_this.normalizedBootstrapVersion);
        },
        version: this.normalizedBootstrapVersion
      };
    }
  },
  created: function created() {
    // Instalar plugin de toasts si no está instalado
    try {
      var instance = require$$0.getCurrentInstance();
      if (instance && instance.appContext && !instance.appContext.config.globalProperties.$toast) {
        instance.appContext.app.use(ToastPlugin);
      }
    } catch (e) {
      console.debug('Could not install ToastPlugin:', e);
    }

    // Registrar componentes de Bootstrap globalmente según la versión
    // Esto permite que todos los componentes hijos usen <b-button>, etc.
    // Solo registrar si no están ya registrados (para evitar sobrescribir bootstrap-vue si está disponible)
    if (this.bootstrapFactory) {
      try {
        var _instance = require$$0.getCurrentInstance();
        if (!_instance || !_instance.appContext) {
          console.debug('getCurrentInstance not available, skipping component registration');
          return;
        }
        var components = this.bootstrapFactory.getComponents();
        var version = this.normalizedBootstrapVersion;
        var app = _instance.appContext.app;
        if (!app) return;

        // Registrar todos los componentes
        Object.keys(components).forEach(function (key) {
          if (components[key] && _typeof$1(components[key]) === 'object') {
            // Registrar con nombre PascalCase (BButton)
            if (!app._context.components[key]) {
              app.component(key, components[key]);
            }

            // También registrar con prefijo 'b-' (b-button)
            var prefixedName = 'b-' + key.slice(1).replace(/([A-Z])/g, '-$1').toLowerCase();
            if (!app._context.components[prefixedName]) {
              app.component(prefixedName, components[key]);
            }

            // También registrar con nombre camelCase (bButton) para compatibilidad
            var camelName = key.charAt(0).toLowerCase() + key.slice(1);
            if (!app._context.components[camelName]) {
              app.component(camelName, components[key]);
            }
          }
        });

        // Registrar componente BIcon para iconos dinámicos (b-icon-*)
        if (components.BIcon) {
          registerBootstrapIcons(app, {
            BIcon: components.BIcon
          });
        }
      } catch (e) {
        console.warn('Could not register Bootstrap components:', e);
      }
    }
  },
  mounted: function mounted() {
    var _this2 = this;
    // Verificar que Bootstrap JavaScript esté disponible después de que todo se haya montado
    this.$nextTick(function () {
      if (typeof window !== 'undefined') {
        var version = _this2.normalizedBootstrapVersion;
        if (version === 5 && !window.bootstrap) {
          console.warn('Bootstrap 5 JavaScript no está disponible. Algunos componentes pueden no funcionar correctamente.');
        } else if (version === 4 && !window.$) {
          console.warn('Bootstrap 4 requiere jQuery. Algunos componentes pueden no funcionar correctamente.');
        }
      }
    });
  },
  provide: function provide() {
    var _this3 = this;
    return {
      // Bootstrap version and factory
      bootstrapVersion: this.normalizedBootstrapVersion,
      bootstrapFactory: this.bootstrapFactory,
      // Props
      modelName: this.modelName,
      title: this.title,
      model: this.model,
      models: this.models,
      ajax: this.ajax,
      useVuexORM: this.useVuexORM,
      vuexInitRelations: this.vuexInitRelations,
      vuexLocalforage: this.vuexLocalforage,
      columns: this.columns,
      filter: this.filter,
      customFilters: this.customFilters,
      enableFilters: this.enableFilters,
      infiniteScroll: this.infiniteScroll,
      sortable: this.sortable,
      orderable: this.orderable,
      validate: this.validate,
      orderProp: this.orderProp,
      createMultipart: this.createMultipart,
      apiUrl: this.apiUrl,
      search: this.search,
      hideModalAfterSave: this.hideModalAfterSave,
      hideModalAfterCreate: this.hideModalAfterCreate,
      hideModalAfterUpdate: this.hideModalAfterUpdate,
      refreshAfterSave: this.refreshAfterSave,
      showPaginator: this.showPaginator,
      showCreateBtn: this.showCreateBtn,
      showSearch: this.showSearch,
      showPrincipalSortBtn: this.showPrincipalSortBtn,
      showHeader: this.showHeader,
      showTitle: this.showTitle,
      limit: this.limit,
      displayMode: this.displayModeReactive,
      displayModeToggler: this.displayModeToggler,
      colXs: this.colXs,
      colSm: this.colSm,
      colMd: this.colMd,
      colLg: this.colLg,
      colXl: this.colXl,
      selectHover: this.selectHover,
      selectClick: this.selectClick,
      cardClass: this.cardClass,
      listContainerClass: this.listContainerClass,
      listItemClass: this.listItemClass,
      cardHideFooter: this.cardHideFooter,
      messageRemoveConfirm: this.messageRemoveConfirm,
      messageRemoveBulkConfirm: this.messageRemoveBulkConfirm,
      messageRemove: this.messageRemove,
      messageNew: this.messageNew,
      messageImport: this.messageImport,
      messageExport: this.messageExport,
      messageEmptyResults: this.messageEmptyResults,
      messageNoMore: this.messageNoMore,
      messageLoading: this.messageLoading,
      messageSave: this.messageSave,
      messageDefaultValidationError: this.messageDefaultValidationError,
      searchPlaceholder: this.searchPlaceholder,
      tableContainerClass: this.tableContainerClass,
      tableClass: this.tableClass,
      grouped: this.grouped,
      groupedAttribute: this.groupedAttribute,
      groupedLabelPre: this.groupedLabelPre,
      groupedLabelAfter: this.groupedLabelAfter,
      groupedSplit: this.groupedSplit,
      draggableGroup: this.draggableGroup,
      draggableOptions: this.draggableOptions,
      masonryEnabled: this.masonryEnabled,
      masonrySort: this.masonrySort,
      masonryColumns: this.masonryColumns,
      principalSortColumn: this.principalSortColumn,
      bulkDelete: this.bulkDelete,
      showImport: this.showImport,
      showExport: this.showExport,
      fileImport: this.fileImport,
      markDirty: this.markDirty,
      // Data from mixins
      crudUuid: this.crudUuid,
      moment: this.moment,
      loading: this.loadingReactive,
      firstLoad: this.firstLoadReactive,
      // Proporcionar item como función getter para reactividad
      getItem: function getItem() {
        return _this3.item;
      },
      item: this.item,
      items: this.items,
      selectedItems: this.selectedItems,
      pagination: this.pagination,
      displaySearch: this.displaySearch,
      itemDefault: this.itemDefault,
      filters: this.filters,
      filtersVisible: this.filtersVisibleReactive,
      filterSidebarOpen: this.filterSidebarOpenReactive,
      internalFilters: this.internalFilters,
      forceRecomputeCounter: this.forceRecomputeCounter,
      displayModes: this.displayModes,
      infiniteScrollKey: this.infiniteScrollKey,
      optionsLoaded: this.optionsLoaded,
      isMobile: this.isMobile,
      refreshing: this.refreshing,
      fetchError: this.fetchError,
      principalSort: this.principalSort,
      exportFormat: this.exportFormatReactive,
      // Computed from mixins
      itemValue: this.itemValue,
      isSplitGroups: this.isSplitGroups,
      itemsList: this.itemsList,
      paginationIndexStart: this.paginationIndexStart,
      paginationIndexEnd: this.paginationIndexEnd,
      finalFilters: this.finalFilters,
      sortFilter: this.sortFilter,
      groupFilter: this.groupFilter,
      internalFilter: this.internalFilter,
      internalFilterByProp: this.internalFilterByProp,
      columnOptions: this.columnOptions,
      isAllSelected: this.isAllSelected,
      // Methods from mixins
      handleResize: this.handleResize,
      rearrangeArray: this.rearrangeArray,
      clearItems: this.clearItems,
      updateData: this.updateData,
      externalUpdate: this.externalUpdate,
      makePagination: this.makePagination,
      fetchItemsVuex: this.fetchItemsVuex,
      fetchItemsLocal: this.fetchItemsLocal,
      fetchItems: this.fetchItems,
      groupItems: this.groupItems,
      saveItemVuex: this.saveItemVuex,
      saveItemLocal: this.saveItemLocal,
      saveItem: this.saveItem,
      deleteItem: this.deleteItem,
      deleteItemLocal: this.deleteItemLocal,
      deleteItemVuex: this.deleteItemVuex,
      deleteItemBulk: this.deleteItemBulk,
      deleteItemBulkLocal: this.deleteItemBulkLocal,
      deleteItemBulkVuex: this.deleteItemBulkVuex,
      saveSort: this.saveSort,
      exportItems: this.exportItems,
      importItems: this.importItems,
      refresh: this.refresh,
      onPaginationChange: this.onPaginationChange,
      onPerPageChange: this.onPerPageChange,
      infiniteHandler: this.infiniteHandler,
      setupFilters: this.setupFilters,
      toggleSortFilter: this.toggleSortFilter,
      toggleFilters: this.toggleFilters,
      resetFilters: this.resetFilters,
      isColumnHasFilter: this.isColumnHasFilter,
      isColumnVisibleInTable: this.isColumnVisibleInTable,
      isCustomFilterEnabled: this.isCustomFilterEnabled,
      setFilter: this.setFilter,
      onChangeFilter: this.onChangeFilter,
      togglePrincipalSort: this.togglePrincipalSort,
      loadOptions: this.loadOptions,
      getArrayValue: this.getArrayValue,
      getStateValue: this.getStateValue,
      getStateOptions: this.getStateOptions,
      getStateBadgeVariant: this.getStateBadgeVariant,
      onRowHover: this.onRowHover,
      onRowClick: this.onRowClick,
      onSort: this.onSort,
      onCheckSelect: this.onCheckSelect,
      toggleAll: this.toggleAll,
      unSelectItem: this.unSelectItem,
      selectItem: this.selectItem,
      getSelectedItems: this.getSelectedItems,
      clearSelection: this.clearSelection,
      onSelect: this.onSelect,
      showItem: this.showItem,
      createItem: this.createItem,
      updateItem: this.updateItem,
      removeItem: this.removeItem,
      confirmBulkDelete: this.confirmBulkDelete,
      toggleDisplayMode: this.toggleDisplayMode,
      showExportModal: this.showExportModal,
      showImportModal: this.showImportModal,
      onDraggableAdded: this.onDraggableAdded,
      onDraggableChange: this.onDraggableChange,
      onDragEnd: this.onDragEnd,
      toastError: this.toastError,
      toastSuccess: this.toastSuccess,
      downloadBlobResponse: this.downloadBlobResponse
    };
  },
  props: {
    modelName: String,
    bootstrapVersion: {
      type: [Number, String],
      default: 5,
      validator: function validator(value) {
        return value === 'auto' || value === 4 || value === 5;
      }
    },
    title: String,
    model: {
      type: [Object, Function],
      default: function _default() {
        return {
          id: 0
        };
      }
    },
    models: {
      type: Array,
      default: function _default() {
        return [];
      }
    },
    ajax: {
      type: Boolean,
      default: true
    },
    useVuexORM: {
      type: Boolean,
      default: false
    },
    vuexInitRelations: {
      type: [Boolean, Array],
      default: true
    },
    vuexLocalforage: {
      type: Boolean,
      default: false
    },
    columns: {
      type: Array,
      default: function _default() {
        return [{
          label: "Id",
          prop: "id",
          type: "number"
        }];
      }
    },
    filter: {
      type: Array,
      default: function _default() {
        return [];
      }
    },
    customFilters: {
      type: Array,
      default: function _default() {
        return [];
      }
    },
    enableFilters: {
      type: Boolean,
      default: false
    },
    infiniteScroll: {
      type: Boolean,
      default: false
    },
    sortable: {
      type: Boolean,
      default: false
    },
    orderable: {
      type: Boolean,
      default: false
    },
    validate: {
      type: Boolean,
      default: false
    },
    orderProp: {
      type: String,
      default: "order"
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
    hideModalAfterSave: {
      type: Boolean,
      default: true
    },
    hideModalAfterCreate: {
      type: Boolean,
      default: false
    },
    hideModalAfterUpdate: {
      type: Boolean,
      default: false
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
    showPrincipalSortBtn: {
      type: Boolean,
      default: false
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
      default: 4,
      type: Number
    },
    selectHover: {
      type: Boolean,
      default: false
    },
    selectClick: {
      type: Boolean,
      default: false
    },
    cardClass: {
      type: String,
      default: ""
    },
    listContainerClass: {
      type: String,
      default: ""
    },
    listItemClass: {
      type: String,
      default: ""
    },
    cardHideFooter: {
      type: Boolean,
      default: false
    },
    messageRemoveConfirm: {
      type: String,
      default: "¿Esta seguro de borrar este elemento?"
    },
    messageRemoveBulkConfirm: {
      type: String,
      default: "¿Esta seguro de borrar los elementos seleccionados?"
    },
    messageRemove: {
      type: String,
      default: "BORRAR"
    },
    messageNew: {
      type: String,
      default: "Nuevo"
    },
    messageImport: {
      type: String,
      default: "Importar"
    },
    messageExport: {
      type: String,
      default: "Exportar"
    },
    messageEmptyResults: {
      type: String,
      default: "No se han encontrado resultados"
    },
    messageNoMore: {
      type: String,
      default: "No hay más elementos para mostrar."
    },
    messageLoading: {
      type: String,
      default: "Cargando..."
    },
    messageSave: {
      type: String,
      default: "Guardar"
    },
    messageDefaultValidationError: {
      type: String,
      default: "Por favor controle el formulario, contiene errores."
    },
    searchPlaceholder: {
      type: String,
      default: "Buscar..."
    },
    tableContainerClass: {
      type: String,
      default: ""
    },
    tableClass: {
      type: String,
      default: ""
    },
    grouped: {
      type: Boolean,
      default: false
    },
    groupedAttribute: {
      type: String,
      default: "name"
    },
    groupedLabelPre: {
      type: String,
      default: ""
    },
    groupedLabelAfter: {
      type: String,
      default: ""
    },
    groupedSplit: {
      type: Boolean,
      default: false
    },
    draggableGroup: {
      type: String,
      default: "people"
    },
    draggableOptions: {
      type: Object,
      default: function _default() {
        return {
          clone: false
        };
      }
    },
    masonryEnabled: {
      type: Boolean,
      default: false
    },
    masonrySort: {
      type: Boolean,
      default: false
    },
    masonryColumns: {
      type: Number,
      default: 3
    },
    principalSortColumn: {
      type: String,
      default: "id"
    },
    bulkDelete: {
      type: Boolean,
      default: false
    },
    showImport: {
      type: Boolean,
      default: false
    },
    showExport: {
      type: Boolean,
      default: false
    },
    markDirty: {
      type: Boolean,
      default: true
    }
  }
};
var _hoisted_1 = {
  class: "crud"
};
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  var _component_CrudHeader = require$$0.resolveComponent("CrudHeader");
  var _component_CrudTable = require$$0.resolveComponent("CrudTable");
  var _component_CrudCards = require$$0.resolveComponent("CrudCards");
  var _component_CrudKanban = require$$0.resolveComponent("CrudKanban");
  var _component_CrudCustom = require$$0.resolveComponent("CrudCustom");
  var _component_b_overlay = require$$0.resolveComponent("b-overlay");
  var _component_CrudPagination = require$$0.resolveComponent("CrudPagination");
  var _component_CrudModals = require$$0.resolveComponent("CrudModals");
  return require$$0.openBlock(), require$$0.createElementBlock("div", _hoisted_1, [require$$0.createVNode(_component_CrudHeader), require$$0.createVNode(_component_CrudTable, null, require$$0.createSlots({
    _: 2 /* DYNAMIC */
  }, [require$$0.renderList(_ctx.$slots, function (_, name) {
    return {
      name: name,
      fn: require$$0.withCtx(function (slotProps) {
        return [require$$0.renderSlot(_ctx.$slots, name, require$$0.normalizeProps(require$$0.guardReactiveProps(slotProps)), undefined, true)];
      })
    };
  })]), 1024 /* DYNAMIC_SLOTS */), require$$0.createVNode(_component_CrudCards, null, require$$0.createSlots({
    _: 2 /* DYNAMIC */
  }, [require$$0.renderList(_ctx.$slots, function (_, name) {
    return {
      name: name,
      fn: require$$0.withCtx(function (slotProps) {
        return [require$$0.renderSlot(_ctx.$slots, name, require$$0.normalizeProps(require$$0.guardReactiveProps(slotProps)), undefined, true)];
      })
    };
  })]), 1024 /* DYNAMIC_SLOTS */), require$$0.createVNode(_component_CrudKanban, null, require$$0.createSlots({
    _: 2 /* DYNAMIC */
  }, [require$$0.renderList(_ctx.$slots, function (_, name) {
    return {
      name: name,
      fn: require$$0.withCtx(function (slotProps) {
        return [require$$0.renderSlot(_ctx.$slots, name, require$$0.normalizeProps(require$$0.guardReactiveProps(slotProps)), undefined, true)];
      })
    };
  })]), 1024 /* DYNAMIC_SLOTS */), require$$0.createVNode(_component_CrudCustom), require$$0.createVNode(_component_b_overlay, {
    show: _ctx.loading,
    rounded: "sm"
  }, null, 8 /* PROPS */, ["show"]), require$$0.createVNode(_component_CrudPagination), require$$0.createVNode(_component_CrudModals, {
    ref: "crudModals"
  }, require$$0.createSlots({
    _: 2 /* DYNAMIC */
  }, [require$$0.renderList(_ctx.$slots, function (_, name) {
    return {
      name: name,
      fn: require$$0.withCtx(function (slotProps) {
        return [require$$0.renderSlot(_ctx.$slots, name, require$$0.normalizeProps(require$$0.guardReactiveProps(slotProps)), undefined, true)];
      })
    };
  })]), 1536 /* NEED_PATCH, DYNAMIC_SLOTS */)]);
}
var component$1 = /*#__PURE__*/_export_sfc(_sfc_main, [['render', _sfc_render], ['__scopeId', "data-v-9cafdc0f"]]);// Import vue component

// Default export is installable instance of component.
// IIFE injects install function into component, allowing component
// to be registered via app.use() as well as app.component(),
var component = /*#__PURE__*/(function () {
  // Get component instance
  var installable = component$1;

  // Attach install function executed by app.use()
  installable.install = function (app) {
    app.component('VueLaravelCrud', installable);
  };
  return installable;
})();

// It's possible to expose named exports when writing components that can
// also be used as directives, etc. - eg. import { RollupDemoDirective } from 'rollup-demo';
// export const RollupDemoDirective = directive;
var namedExports=/*#__PURE__*/Object.freeze({__proto__:null,'default':component});// Attach named exports directly to component. IIFE/CJS will
// only expose one global var, with named exports exposed as properties of
// that global var (eg. plugin.namedExport)
Object.entries(namedExports).forEach(function (_ref) {
  var _ref2 = _slicedToArray(_ref, 2),
    exportName = _ref2[0],
    exported = _ref2[1];
  if (exportName !== 'default') component[exportName] = exported;
});module.exports=component;