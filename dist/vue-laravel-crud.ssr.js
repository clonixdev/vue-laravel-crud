'use strict';var require$$0=require('vue');function _arrayLikeToArray$1(r, a) {
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
function _createForOfIteratorHelper(r, e) {
  var t = "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"];
  if (!t) {
    if (Array.isArray(r) || (t = _unsupportedIterableToArray$1(r)) || e) {
      t && (r = t);
      var n = 0,
        F = function () {};
      return {
        s: F,
        n: function () {
          return n >= r.length ? {
            done: true
          } : {
            done: false,
            value: r[n++]
          };
        },
        e: function (r) {
          throw r;
        },
        f: F
      };
    }
    throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
  }
  var o,
    a = true,
    u = false;
  return {
    s: function () {
      t = t.call(r);
    },
    n: function () {
      var r = t.next();
      return a = r.done, r;
    },
    e: function (r) {
      u = true, o = r;
    },
    f: function () {
      try {
        a || null == t.return || t.return();
      } finally {
        if (u) throw o;
      }
    }
  };
}
function _defineProperty$1(e, r, t) {
  return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, {
    value: t,
    enumerable: true,
    configurable: true,
    writable: true
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
      f = true,
      o = false;
    try {
      if (i = (t = t.call(r)).next, 0 === l) ; else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0);
    } catch (r) {
      o = true, n = r;
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
    r % 2 ? ownKeys$1(Object(t), true).forEach(function (r) {
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
        y = false,
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
        throw y = true, n;
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
    }(r, o, i), true), u;
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
    var i = e.call(t, r);
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
var _sfc_main$k = {
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
var _hoisted_1$j = {
  class: "px-3 py-2"
};
var _hoisted_2$g = {
  key: 0
};
var _hoisted_3$f = {
  key: 0,
  class: "form-group"
};
var _hoisted_4$f = ["onUpdate:modelValue"];
var _hoisted_5$b = {
  key: 1,
  class: "form-group"
};
var _hoisted_6$a = {
  class: "row"
};
var _hoisted_7$9 = {
  class: "col-6"
};
var _hoisted_8$9 = {
  class: "col-6"
};
var _hoisted_9$6 = {
  key: 2,
  class: "form-group"
};
var _hoisted_10$5 = {
  class: "row"
};
var _hoisted_11$4 = {
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
var _hoisted_25$1 = ["onUpdate:modelValue"];
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
function _sfc_render$k(_ctx, _cache, $props, $setup, $data, $options) {
  var _component_b_form_datepicker = require$$0.resolveComponent("b-form-datepicker");
  var _component_RenderCustomFilter = require$$0.resolveComponent("RenderCustomFilter");
  return require$$0.openBlock(), require$$0.createElementBlock("div", _hoisted_1$j, [(require$$0.openBlock(true), require$$0.createElementBlock(require$$0.Fragment, null, require$$0.renderList($options.columns, function (column, indexc) {
    return require$$0.openBlock(), require$$0.createElementBlock("div", {
      key: indexc
    }, [$options.isColumnHasFilter(column) ? (require$$0.openBlock(), require$$0.createElementBlock("div", _hoisted_2$g, [require$$0.renderSlot(_ctx.$slots, 'sidebar-filter-' + column.prop, {
      column: column,
      filter: $options.filter,
      internalFilterByProp: $options.internalFilterByProp,
      getFilterForColumn: $options.getFilterForColumn
    }, function () {
      return [column.type == 'boolean' ? (require$$0.openBlock(), require$$0.createElementBlock("div", _hoisted_3$f, [require$$0.createElementVNode("label", null, require$$0.toDisplayString(column.label), 1 /* TEXT */), require$$0.withDirectives(require$$0.createElementVNode("select", {
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
      }, "No", -1 /* CACHED */)])), 40 /* PROPS, NEED_HYDRATION */, _hoisted_4$f), [[require$$0.vModelSelect, $options.getFilterForColumn(column).value]])])) : column.type == 'date' ? (require$$0.openBlock(), require$$0.createElementBlock("div", _hoisted_5$b, [require$$0.createElementVNode("div", _hoisted_6$a, [require$$0.createElementVNode("div", _hoisted_7$9, [require$$0.createVNode(_component_b_form_datepicker, {
        modelValue: $options.getFilterForDateFrom(column).value,
        "onUpdate:modelValue": function onUpdateModelValue($event) {
          return $options.getFilterForDateFrom(column).value = $event;
        },
        "today-button": "",
        "reset-button": "",
        "close-button": "",
        locale: "es"
      }, null, 8 /* PROPS */, ["modelValue", "onUpdate:modelValue"])]), require$$0.createElementVNode("div", _hoisted_8$9, [require$$0.createVNode(_component_b_form_datepicker, {
        modelValue: $options.getFilterForDateTo(column).value,
        "onUpdate:modelValue": function onUpdateModelValue($event) {
          return $options.getFilterForDateTo(column).value = $event;
        },
        "today-button": "",
        "reset-button": "",
        "close-button": "",
        locale: "es"
      }, null, 8 /* PROPS */, ["modelValue", "onUpdate:modelValue"])])])])) : column.type == 'number' || column.type == 'money' || column.type == 'price' ? (require$$0.openBlock(), require$$0.createElementBlock("div", _hoisted_9$6, [require$$0.createElementVNode("label", null, require$$0.toDisplayString(column.label), 1 /* TEXT */), require$$0.createElementVNode("div", _hoisted_10$5, [require$$0.createElementVNode("div", _hoisted_11$4, [require$$0.withDirectives(require$$0.createElementVNode("input", {
        type: "number",
        class: "form-control",
        "onUpdate:modelValue": function onUpdateModelValue($event) {
          return $options.getFilterForDateFrom(column).value = $event;
        },
        step: column.type == 'money' || column.type == 'price' ? '0.01' : '1',
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
        step: column.type == 'money' || column.type == 'price' ? '0.01' : '1',
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
      }, "No", -1 /* CACHED */)])), 40 /* PROPS, NEED_HYDRATION */, _hoisted_25$1), [[require$$0.vModelSelect, $options.getFilterForColumn(customFilter).value]])])) : customFilter.type == 'date' ? (require$$0.openBlock(), require$$0.createElementBlock("div", _hoisted_26, [require$$0.createElementVNode("label", null, require$$0.toDisplayString(customFilter.label), 1 /* TEXT */), require$$0.createElementVNode("div", _hoisted_27, [require$$0.createElementVNode("div", _hoisted_28, [require$$0.createVNode(_component_b_form_datepicker, {
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
      }, null, 8 /* PROPS */, ["modelValue", "onUpdate:modelValue"])])])])) : customFilter.type == 'number' || customFilter.type == 'money' || customFilter.type == 'price' ? (require$$0.openBlock(), require$$0.createElementBlock("div", _hoisted_30, [require$$0.createElementVNode("label", null, require$$0.toDisplayString(customFilter.label), 1 /* TEXT */), require$$0.createElementVNode("div", _hoisted_31, [require$$0.createElementVNode("div", _hoisted_32, [require$$0.withDirectives(require$$0.createElementVNode("input", {
        type: "number",
        class: "form-control",
        "onUpdate:modelValue": function onUpdateModelValue($event) {
          return $options.getFilterForDateFrom(customFilter).value = $event;
        },
        step: customFilter.type == 'money' || customFilter.type == 'price' ? '0.01' : '1',
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
        step: customFilter.type == 'money' || customFilter.type == 'price' ? '0.01' : '1',
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
var CrudFilters = /*#__PURE__*/_export_sfc(_sfc_main$k, [['render', _sfc_render$k]]);function styleInject(css, ref) {
  if ( ref === void 0 ) ref = {};
  var insertAt = ref.insertAt;

  if (!css || typeof document === 'undefined') { return; }

  var head = document.head || document.getElementsByTagName('head')[0];
  var style = document.createElement('style');
  style.type = 'text/css';

  if (insertAt === 'top') {
    if (head.firstChild) {
      head.insertBefore(style, head.firstChild);
    } else {
      head.appendChild(style);
    }
  } else {
    head.appendChild(style);
  }

  if (style.styleSheet) {
    style.styleSheet.cssText = css;
  } else {
    style.appendChild(document.createTextNode(css));
  }
}var css_248z$d = "\n.crud-quick-filters[data-v-86f1c0de] {\r\n  display: inline-flex;\r\n  flex-wrap: wrap;\r\n  align-items: center;\r\n  gap: 0.35rem;\r\n  min-width: 0;\n}\n.crud-quick-filters--segmented[data-v-86f1c0de] {\r\n  gap: 0;\r\n  padding: 0.2rem;\r\n  border-radius: 999px;\r\n  background: rgba(15, 23, 42, 0.05);\n}\n.crud-quick-filters--segmented .crud-quick-filter[data-v-86f1c0de] {\r\n  border-radius: 999px;\r\n  border-color: transparent;\r\n  background: transparent;\n}\n.crud-quick-filters--tabs[data-v-86f1c0de] {\r\n  gap: 0;\r\n  border-bottom: 1px solid rgba(15, 23, 42, 0.08);\r\n  padding-bottom: 0;\n}\n.crud-quick-filters--tabs .crud-quick-filter[data-v-86f1c0de] {\r\n  border: 0;\r\n  border-bottom: 2px solid transparent;\r\n  border-radius: 0;\r\n  background: transparent;\r\n  padding: 0.35rem 0.75rem;\n}\n.crud-quick-filter[data-v-86f1c0de] {\r\n  display: inline-flex;\r\n  align-items: center;\r\n  gap: 0.35rem;\r\n  margin: 0;\r\n  padding: 0.3rem 0.75rem;\r\n  border: 1px solid rgba(15, 23, 42, 0.12);\r\n  border-radius: 999px;\r\n  background: #fff;\r\n  color: #334155;\r\n  font-size: 0.8125rem;\r\n  font-weight: 500;\r\n  line-height: 1.2;\r\n  white-space: nowrap;\r\n  cursor: pointer;\r\n  transition: background-color 0.15s ease, border-color 0.15s ease, color 0.15s ease, box-shadow 0.15s ease;\n}\n.crud-quick-filter[data-v-86f1c0de]:hover:not(:disabled):not(.is-active) {\r\n  background: rgba(15, 23, 42, 0.04);\r\n  border-color: rgba(15, 23, 42, 0.2);\n}\n.crud-quick-filter[data-v-86f1c0de]:focus-visible {\r\n  outline: 2px solid rgba(13, 110, 253, 0.45);\r\n  outline-offset: 1px;\n}\n.crud-quick-filter[data-v-86f1c0de]:disabled,\r\n.crud-quick-filter.is-disabled[data-v-86f1c0de] {\r\n  opacity: 0.55;\r\n  cursor: not-allowed;\n}\n.crud-quick-filter__icon[data-v-86f1c0de] {\r\n  font-size: 0.95em;\r\n  opacity: 0.9;\n}\n.crud-quick-filter__count[data-v-86f1c0de] {\r\n  display: inline-flex;\r\n  align-items: center;\r\n  justify-content: center;\r\n  min-width: 1.25rem;\r\n  padding: 0.05rem 0.35rem;\r\n  border-radius: 999px;\r\n  background: rgba(15, 23, 42, 0.08);\r\n  font-size: 0.75em;\r\n  font-weight: 600;\n}\n.crud-quick-filter.is-active[data-v-86f1c0de] {\r\n  color: #fff;\r\n  border-color: transparent;\r\n  box-shadow: 0 1px 2px rgba(15, 23, 42, 0.12);\n}\n.crud-quick-filter.is-active .crud-quick-filter__count[data-v-86f1c0de] {\r\n  background: rgba(255, 255, 255, 0.22);\n}\n.crud-quick-filter--secondary.is-active[data-v-86f1c0de],\r\n.crud-quick-filter--default.is-active[data-v-86f1c0de] {\r\n  background: #475569;\n}\n.crud-quick-filter--primary.is-active[data-v-86f1c0de] {\r\n  background: #0d6efd;\n}\n.crud-quick-filter--info.is-active[data-v-86f1c0de] {\r\n  background: #0dcaf0;\r\n  color: #053b4a;\n}\n.crud-quick-filter--success.is-active[data-v-86f1c0de] {\r\n  background: #198754;\n}\n.crud-quick-filter--warning.is-active[data-v-86f1c0de] {\r\n  background: #ffc107;\r\n  color: #5c4400;\n}\n.crud-quick-filter--danger.is-active[data-v-86f1c0de] {\r\n  background: #dc3545;\n}\n.crud-quick-filters--tabs .crud-quick-filter.is-active[data-v-86f1c0de] {\r\n  background: transparent;\r\n  color: #0d6efd;\r\n  border-bottom-color: #0d6efd;\r\n  box-shadow: none;\n}\n.crud-quick-filters--tabs .crud-quick-filter--success.is-active[data-v-86f1c0de] {\r\n  color: #198754;\r\n  border-bottom-color: #198754;\n}\n.crud-quick-filters--tabs .crud-quick-filter--warning.is-active[data-v-86f1c0de] {\r\n  color: #b58100;\r\n  border-bottom-color: #ffc107;\n}\n.crud-quick-filters--tabs .crud-quick-filter--danger.is-active[data-v-86f1c0de] {\r\n  color: #dc3545;\r\n  border-bottom-color: #dc3545;\n}\n.crud-quick-filters--tabs .crud-quick-filter--info.is-active[data-v-86f1c0de] {\r\n  color: #087990;\r\n  border-bottom-color: #0dcaf0;\n}\r\n";
styleInject(css_248z$d);var _sfc_main$j = {
  name: 'CrudQuickFilters',
  inject: {
    quickFilters: {
      default: function _default() {
        return [];
      }
    },
    quickFiltersVariant: {
      default: 'pills'
    },
    quickFiltersAriaLabel: {
      default: 'Filtros rápidos'
    },
    quickFiltersClass: {
      default: ''
    },
    activeQuickFilterKey: {
      default: null
    },
    selectQuickFilter: {
      default: function _default() {}
    },
    loading: {
      default: null
    }
  },
  computed: {
    items: function items() {
      var list = this.quickFilters;
      return Array.isArray(list) ? list : [];
    },
    hasItems: function hasItems() {
      return this.normalizedItems.length > 0;
    },
    normalizedVariant: function normalizedVariant() {
      var v = String(this.quickFiltersVariant || 'pills').toLowerCase();
      return ['pills', 'tabs', 'segmented'].includes(v) ? v : 'pills';
    },
    ariaLabel: function ariaLabel() {
      return this.quickFiltersAriaLabel || 'Filtros rápidos';
    },
    rootClass: function rootClass() {
      return this.quickFiltersClass || '';
    },
    activeKey: function activeKey() {
      if (this.activeQuickFilterKey && this.activeQuickFilterKey.value !== undefined) {
        return this.activeQuickFilterKey.value;
      }
      return this.activeQuickFilterKey;
    },
    loadingValue: function loadingValue() {
      return this.loading && this.loading.value !== undefined ? this.loading.value : this.loading;
    },
    normalizedItems: function normalizedItems() {
      return this.items.filter(function (item) {
        return item && (item.key != null || item.value != null || item.id != null);
      }).map(function (item) {
        var key = String(item.key != null ? item.key : item.value != null ? item.value : item.id);
        return _objectSpread2$1(_objectSpread2$1({}, item), {}, {
          key: key,
          label: item.label != null ? String(item.label) : key,
          icon: item.icon || null,
          tone: String(item.variant || item.tone || 'secondary').toLowerCase(),
          count: item.count,
          disabled: !!item.disabled,
          class: item.class || '',
          filter: item.filter
        });
      });
    },
    slotScope: function slotScope() {
      return {
        items: this.normalizedItems,
        active: this.activeKey,
        select: this.select,
        loading: this.loadingValue
      };
    }
  },
  methods: {
    select: function select(item) {
      if (!item || item.disabled || this.loadingValue) {
        return;
      }
      if (typeof this.selectQuickFilter === 'function') {
        this.selectQuickFilter(item.key, item);
      }
    }
  }
};
var _hoisted_1$i = ["aria-label"];
var _hoisted_2$f = ["aria-selected", "disabled", "onClick"];
var _hoisted_3$e = {
  class: "crud-quick-filter__label"
};
var _hoisted_4$e = {
  key: 1,
  class: "crud-quick-filter__count"
};
function _sfc_render$j(_ctx, _cache, $props, $setup, $data, $options) {
  var _component_b_icon = require$$0.resolveComponent("b-icon");
  return $options.hasItems ? (require$$0.openBlock(), require$$0.createElementBlock("div", {
    key: 0,
    class: require$$0.normalizeClass(["crud-quick-filters", [$options.rootClass, "crud-quick-filters--".concat($options.normalizedVariant)]]),
    role: "tablist",
    "aria-label": $options.ariaLabel
  }, [require$$0.renderSlot(_ctx.$slots, "quickFilters", require$$0.normalizeProps(require$$0.guardReactiveProps($options.slotScope)), function () {
    return [(require$$0.openBlock(true), require$$0.createElementBlock(require$$0.Fragment, null, require$$0.renderList($options.normalizedItems, function (item) {
      return require$$0.openBlock(), require$$0.createElementBlock("button", {
        key: item.key,
        type: "button",
        role: "tab",
        class: require$$0.normalizeClass(["crud-quick-filter", [item.class, "crud-quick-filter--".concat(item.tone), {
          'is-active': item.key === $options.activeKey,
          'is-disabled': item.disabled
        }]]),
        "aria-selected": item.key === $options.activeKey,
        disabled: item.disabled || $options.loadingValue,
        onClick: function onClick($event) {
          return $options.select(item);
        }
      }, [require$$0.renderSlot(_ctx.$slots, "quickFilterItem", require$$0.mergeProps({
        ref_for: true
      }, {
        item: item,
        active: item.key === $options.activeKey,
        select: function select() {
          return $options.select(item);
        }
      }), function () {
        return [item.icon ? (require$$0.openBlock(), require$$0.createBlock(_component_b_icon, {
          key: 0,
          icon: item.icon,
          class: "crud-quick-filter__icon"
        }, null, 8 /* PROPS */, ["icon"])) : require$$0.createCommentVNode("v-if", true), require$$0.createElementVNode("span", _hoisted_3$e, require$$0.toDisplayString(item.label), 1 /* TEXT */), item.count != null ? (require$$0.openBlock(), require$$0.createElementBlock("span", _hoisted_4$e, require$$0.toDisplayString(item.count), 1 /* TEXT */)) : require$$0.createCommentVNode("v-if", true)];
      }, true)], 10 /* CLASS, PROPS */, _hoisted_2$f);
    }), 128 /* KEYED_FRAGMENT */))];
  }, true)], 10 /* CLASS, PROPS */, _hoisted_1$i)) : require$$0.createCommentVNode("v-if", true);
}
var CrudQuickFilters = /*#__PURE__*/_export_sfc(_sfc_main$j, [['render', _sfc_render$j], ['__scopeId', "data-v-86f1c0de"]]);var css_248z$c = "\n.crud-header[data-v-b1534978] {\r\n  display: flex;\r\n  flex-direction: column;\r\n  gap: 0.5rem;\r\n  margin: 0 0 0.25rem;\r\n  padding: 0;\n}\n.crud-header__main[data-v-b1534978] {\r\n  display: flex;\r\n  flex-wrap: wrap;\r\n  align-items: flex-start;\r\n  justify-content: space-between;\r\n  gap: 0.75rem 1rem;\n}\n.crud-header__heading[data-v-b1534978] {\r\n  display: flex;\r\n  flex-wrap: wrap;\r\n  align-items: center;\r\n  gap: 0.65rem 0.85rem;\r\n  min-width: 0;\r\n  flex: 1 1 auto;\r\n  margin-right: auto;\n}\n.crud-title[data-v-b1534978] {\r\n  margin: 0;\r\n  flex: 0 1 auto;\r\n  min-width: 0;\r\n  white-space: nowrap;\r\n  padding: 0.25rem 0;\n}\n.crud-header__quick-filters-row[data-v-b1534978] {\r\n  width: 100%;\n}\n.table-options[data-v-b1534978] {\r\n  flex: 1 1 100%;\r\n  display: flex;\r\n  align-items: center;\r\n  justify-content: flex-end;\r\n  margin: 0 0 0 auto;\r\n  padding: 0;\n}\n@media (min-width: 768px) {\n.table-options[data-v-b1534978] {\r\n    flex: 0 0 auto;\r\n    max-width: 100%;\n}\n}\n.crud-toolbar[data-v-b1534978] {\r\n  display: flex;\r\n  flex-wrap: wrap;\r\n  align-items: center;\r\n  justify-content: flex-end;\r\n  gap: 0.5rem;\r\n  width: 100%;\n}\n.crud-toolbar__prepend[data-v-b1534978],\r\n.crud-toolbar__append[data-v-b1534978] {\r\n  display: flex;\r\n  flex-wrap: wrap;\r\n  align-items: center;\r\n  gap: 0.5rem;\n}\n.crud-toolbar__actions[data-v-b1534978] {\r\n  flex-wrap: wrap;\n}\n.crud-search[data-v-b1534978] {\r\n  width: auto;\r\n  flex: 0 0 auto;\n}\n.crud-search.is-open[data-v-b1534978] {\r\n  width: min(100%, 16rem);\r\n  flex: 0 1 16rem;\n}\n.crud-search__toggle.open[data-v-b1534978] {\r\n  border-top-right-radius: 0;\r\n  border-bottom-right-radius: 0;\n}\n.crud-search__input[data-v-b1534978] {\r\n  border-top-left-radius: 0;\r\n  border-bottom-left-radius: 0;\n}\r\n";
styleInject(css_248z$c);var _sfc_main$i = {
  name: 'CrudHeader',
  components: {
    CrudFilters: CrudFilters,
    CrudQuickFilters: CrudQuickFilters
  },
  data: function data() {
    return {
      searchInput: '',
      searchTimer: null
    };
  },
  inject: {
    bootstrapFactory: {
      default: null
    },
    showHeader: {
      default: true
    },
    showTitle: {
      default: true
    },
    title: {
      default: ''
    },
    filterSidebarOpen: {
      default: null
    },
    setFilterSidebarOpen: {
      default: null
    },
    crudUuid: {
      default: 'default'
    },
    showImport: {
      default: false
    },
    showExport: {
      default: false
    },
    showPrincipalSortBtn: {
      default: false
    },
    principalSort: {
      default: false
    },
    bulkDelete: {
      default: false
    },
    showCreateBtn: {
      default: true
    },
    enableFilters: {
      default: false
    },
    displayModeToggler: {
      default: false
    },
    displayMode: {
      default: null
    },
    getDisplayMode: {
      default: null
    },
    displayModes: {
      default: function _default() {
        return {
          MODE_TABLE: 1,
          MODE_CARDS: 2
        };
      }
    },
    showSearch: {
      default: true
    },
    displaySearch: {
      default: null
    },
    search: {
      default: null
    },
    searchPlaceholder: {
      default: 'Buscar...'
    },
    loading: {
      default: null
    },
    firstLoad: {
      default: null
    },
    messageImport: {
      default: 'Importar'
    },
    messageExport: {
      default: 'Exportar'
    },
    messageNew: {
      default: 'Nuevo'
    },
    createItem: {
      default: function _default() {}
    },
    toggleDisplayMode: {
      default: function _default() {}
    },
    togglePrincipalSort: {
      default: function _default() {}
    },
    confirmBulkDelete: {
      default: function _default() {}
    },
    toggleFilters: {
      default: function _default() {}
    },
    refresh: {
      default: function _default() {}
    },
    showImportModal: {
      default: function _default() {}
    },
    showExportModal: {
      default: function _default() {}
    },
    quickFilters: {
      default: function _default() {
        return [];
      }
    },
    quickFiltersPlacement: {
      default: 'title'
    }
  },
  computed: {
    filtersSidebarId: function filtersSidebarId() {
      return "crud-filters-sidebar-".concat(this.crudUuid || 'default');
    },
    quickFiltersPlacementValue: function quickFiltersPlacementValue() {
      return String(this.quickFiltersPlacement || 'title').toLowerCase();
    },
    hasQuickFilters: function hasQuickFilters() {
      return Array.isArray(this.quickFilters) && this.quickFilters.length > 0;
    },
    showQuickFiltersWithTitle: function showQuickFiltersWithTitle() {
      return this.hasQuickFilters && ['title', 'with-title', 'heading'].includes(this.quickFiltersPlacementValue);
    },
    showQuickFiltersInToolbar: function showQuickFiltersInToolbar() {
      return this.hasQuickFilters && ['toolbar', 'actions'].includes(this.quickFiltersPlacementValue);
    },
    showQuickFiltersBelowTitle: function showQuickFiltersBelowTitle() {
      return this.hasQuickFilters && ['below', 'below-title', 'row'].includes(this.quickFiltersPlacementValue);
    },
    sidebarOpen: {
      get: function get() {
        if (this.filterSidebarOpen && this.filterSidebarOpen.value !== undefined) {
          return !!this.filterSidebarOpen.value;
        }
        return false;
      },
      set: function set(val) {
        if (typeof this.setFilterSidebarOpen === 'function') {
          this.setFilterSidebarOpen(!!val);
          return;
        }
        if (this.filterSidebarOpen && this.filterSidebarOpen.value !== undefined) {
          this.filterSidebarOpen.value = !!val;
        }
      }
    },
    currentDisplayMode: function currentDisplayMode() {
      if (typeof this.getDisplayMode === 'function') {
        return this.getDisplayMode();
      }
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
    },
    isInitialLoading: function isInitialLoading() {
      return this.loadingValue && !this.firstLoadValue;
    },
    displaySearchValue: function displaySearchValue() {
      if (this.displaySearch && this.displaySearch.value !== undefined) {
        return !!this.displaySearch.value;
      }
      return !!this.displaySearch;
    },
    searchReactiveValue: function searchReactiveValue() {
      if (this.search && this.search.value !== undefined) {
        return this.search.value;
      }
      return this.search || '';
    }
  },
  watch: {
    searchInput: function searchInput(val) {
      var _this = this;
      if (this.searchTimer) {
        clearTimeout(this.searchTimer);
      }
      this.searchTimer = setTimeout(function () {
        if (_this.search && _typeof$1(_this.search) === 'object' && 'value' in _this.search) {
          _this.search.value = val;
        }
      }, 500);
    },
    searchReactiveValue: function searchReactiveValue(val) {
      if (val !== this.searchInput) {
        this.searchInput = val || '';
      }
    }
  },
  mounted: function mounted() {
    this.searchInput = this.searchReactiveValue || '';
  },
  methods: {
    toggleSearchField: function toggleSearchField() {
      if (this.displaySearch && _typeof$1(this.displaySearch) === 'object' && 'value' in this.displaySearch) {
        this.displaySearch.value = !this.displaySearch.value;
        return;
      }
      if (this.$parent && this.$parent.displaySearch !== undefined) {
        this.$parent.displaySearch = !this.$parent.displaySearch;
      }
    }
  },
  beforeUnmount: function beforeUnmount() {
    if (this.searchTimer) {
      clearTimeout(this.searchTimer);
    }
  }
};
var _hoisted_1$h = {
  key: 0,
  class: "crud-header"
};
var _hoisted_2$e = {
  class: "crud-header__main"
};
var _hoisted_3$d = {
  class: "crud-header__heading"
};
var _hoisted_4$d = {
  key: 0,
  class: "crud-title"
};
var _hoisted_5$a = {
  class: "table-options"
};
var _hoisted_6$9 = {
  class: "crud-toolbar"
};
var _hoisted_7$8 = {
  class: "crud-toolbar__prepend"
};
var _hoisted_8$8 = {
  class: "btn-group crud-toolbar__actions",
  role: "group"
};
var _hoisted_9$5 = ["disabled"];
var _hoisted_10$4 = ["placeholder", "disabled"];
var _hoisted_11$3 = {
  class: "crud-toolbar__append"
};
function _sfc_render$i(_ctx, _cache, $props, $setup, $data, $options) {
  var _component_CrudQuickFilters = require$$0.resolveComponent("CrudQuickFilters");
  var _component_b_icon_cloud_upload = require$$0.resolveComponent("b-icon-cloud-upload");
  var _component_b_button = require$$0.resolveComponent("b-button");
  var _component_b_icon_cloud_download = require$$0.resolveComponent("b-icon-cloud-download");
  var _component_b_icon_sort_numeric_down = require$$0.resolveComponent("b-icon-sort-numeric-down");
  var _component_b_icon_sort_numeric_up = require$$0.resolveComponent("b-icon-sort-numeric-up");
  var _component_b_icon_trash = require$$0.resolveComponent("b-icon-trash");
  var _component_b_icon_plus = require$$0.resolveComponent("b-icon-plus");
  var _component_b_icon_card_list = require$$0.resolveComponent("b-icon-card-list");
  var _component_b_icon_table = require$$0.resolveComponent("b-icon-table");
  var _component_b_icon_arrow_clockwise = require$$0.resolveComponent("b-icon-arrow-clockwise");
  var _component_b_icon_search = require$$0.resolveComponent("b-icon-search");
  var _component_CrudFilters = require$$0.resolveComponent("CrudFilters");
  var _component_b_sidebar = require$$0.resolveComponent("b-sidebar");
  return $options.showHeader ? (require$$0.openBlock(), require$$0.createElementBlock("div", _hoisted_1$h, [require$$0.createElementVNode("div", _hoisted_2$e, [require$$0.createElementVNode("div", _hoisted_3$d, [$options.showTitle ? (require$$0.openBlock(), require$$0.createElementBlock("h4", _hoisted_4$d, require$$0.toDisplayString($options.title), 1 /* TEXT */)) : require$$0.createCommentVNode("v-if", true), $options.showQuickFiltersWithTitle ? (require$$0.openBlock(), require$$0.createBlock(_component_CrudQuickFilters, {
    key: 1
  }, require$$0.createSlots({
    _: 2 /* DYNAMIC */
  }, [require$$0.renderList(_ctx.$slots, function (_, name) {
    return {
      name: name,
      fn: require$$0.withCtx(function (slotProps) {
        return [require$$0.renderSlot(_ctx.$slots, name, require$$0.normalizeProps(require$$0.guardReactiveProps(slotProps)), undefined, true)];
      })
    };
  })]), 1024 /* DYNAMIC_SLOTS */)) : require$$0.createCommentVNode("v-if", true)]), require$$0.createElementVNode("div", _hoisted_5$a, [require$$0.renderSlot(_ctx.$slots, "tableActions", {
    createItem: $options.createItem,
    toggleDisplayMode: $options.toggleDisplayMode,
    loading: $options.loading
  }, function () {
    return [require$$0.createElementVNode("div", _hoisted_6$9, [require$$0.createElementVNode("div", _hoisted_7$8, [require$$0.renderSlot(_ctx.$slots, "tableActionsPrepend", {
      loading: $options.loading
    }, undefined, true), $options.showQuickFiltersInToolbar ? (require$$0.openBlock(), require$$0.createBlock(_component_CrudQuickFilters, {
      key: 0
    }, require$$0.createSlots({
      _: 2 /* DYNAMIC */
    }, [require$$0.renderList(_ctx.$slots, function (_, name) {
      return {
        name: name,
        fn: require$$0.withCtx(function (slotProps) {
          return [require$$0.renderSlot(_ctx.$slots, name, require$$0.normalizeProps(require$$0.guardReactiveProps(slotProps)), undefined, true)];
        })
      };
    })]), 1024 /* DYNAMIC_SLOTS */)) : require$$0.createCommentVNode("v-if", true)]), require$$0.createElementVNode("div", _hoisted_8$8, [$options.showImport ? (require$$0.openBlock(), require$$0.createBlock(_component_b_button, {
      key: 0,
      variant: "info",
      onClick: _cache[0] || (_cache[0] = function ($event) {
        return $options.showImportModal();
      }),
      disabled: $options.loadingValue
    }, {
      default: require$$0.withCtx(function () {
        return [require$$0.createVNode(_component_b_icon_cloud_upload), require$$0.createTextVNode(require$$0.toDisplayString($options.messageImport), 1 /* TEXT */)];
      }),
      _: 1 /* STABLE */
    }, 8 /* PROPS */, ["disabled"])) : require$$0.createCommentVNode("v-if", true), $options.showExport ? (require$$0.openBlock(), require$$0.createBlock(_component_b_button, {
      key: 1,
      variant: "info",
      onClick: _cache[1] || (_cache[1] = function ($event) {
        return $options.showExportModal();
      }),
      disabled: $options.loadingValue
    }, {
      default: require$$0.withCtx(function () {
        return [require$$0.createVNode(_component_b_icon_cloud_download), require$$0.createTextVNode(require$$0.toDisplayString($options.messageExport), 1 /* TEXT */)];
      }),
      _: 1 /* STABLE */
    }, 8 /* PROPS */, ["disabled"])) : require$$0.createCommentVNode("v-if", true), $options.showPrincipalSortBtn ? (require$$0.openBlock(), require$$0.createBlock(_component_b_button, {
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
      }),
      disabled: $options.loadingValue
    }, {
      default: require$$0.withCtx(function () {
        return [require$$0.createVNode(_component_b_icon_trash)];
      }),
      _: 1 /* STABLE */
    }, 8 /* PROPS */, ["disabled"])) : require$$0.createCommentVNode("v-if", true), $options.showCreateBtn ? (require$$0.openBlock(), require$$0.createBlock(_component_b_button, {
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
      }),
      disabled: $options.loadingValue
    }, {
      default: require$$0.withCtx(function () {
        return _toConsumableArray$1(_cache[11] || (_cache[11] = [require$$0.createTextVNode("Filtros", -1 /* CACHED */)]));
      }),
      _: 1 /* STABLE */
    }, 8 /* PROPS */, ["disabled"])) : require$$0.createCommentVNode("v-if", true), $options.displayModeToggler ? (require$$0.openBlock(), require$$0.createBlock(_component_b_button, {
      key: 6,
      variant: "info",
      onClick: _cache[6] || (_cache[6] = function ($event) {
        return $options.toggleDisplayMode();
      }),
      disabled: $options.loadingValue
    }, {
      default: require$$0.withCtx(function () {
        return [$options.currentDisplayMode == $options.displayModes.MODE_TABLE ? (require$$0.openBlock(), require$$0.createBlock(_component_b_icon_card_list, {
          key: 0
        })) : (require$$0.openBlock(), require$$0.createBlock(_component_b_icon_table, {
          key: 1
        }))];
      }),
      _: 1 /* STABLE */
    }, 8 /* PROPS */, ["disabled"])) : require$$0.createCommentVNode("v-if", true), require$$0.createVNode(_component_b_button, {
      variant: "info",
      onClick: _cache[7] || (_cache[7] = function ($event) {
        return $options.refresh();
      }),
      disabled: $options.loadingValue
    }, {
      default: require$$0.withCtx(function () {
        return [require$$0.createVNode(_component_b_icon_arrow_clockwise)];
      }),
      _: 1 /* STABLE */
    }, 8 /* PROPS */, ["disabled"])]), $options.showSearch ? (require$$0.openBlock(), require$$0.createElementBlock("div", {
      key: 0,
      class: require$$0.normalizeClass(["crud-search input-group", {
        'is-open': $options.displaySearchValue
      }])
    }, [require$$0.createElementVNode("button", {
      type: "button",
      class: require$$0.normalizeClass(["btn btn-info crud-search__toggle", {
        open: $options.displaySearchValue
      }]),
      onClick: _cache[8] || (_cache[8] = function () {
        return $options.toggleSearchField && $options.toggleSearchField.apply($options, arguments);
      }),
      "aria-label": "Buscar",
      disabled: $options.loadingValue
    }, [require$$0.createVNode(_component_b_icon_search)], 10 /* CLASS, PROPS */, _hoisted_9$5), $options.displaySearchValue ? require$$0.withDirectives((require$$0.openBlock(), require$$0.createElementBlock("input", {
      key: 0,
      "onUpdate:modelValue": _cache[9] || (_cache[9] = function ($event) {
        return $data.searchInput = $event;
      }),
      class: "form-control crud-search__input",
      type: "search",
      placeholder: $options.searchPlaceholder,
      disabled: $options.loadingValue
    }, null, 8 /* PROPS */, _hoisted_10$4)), [[require$$0.vModelText, $data.searchInput]]) : require$$0.createCommentVNode("v-if", true)], 2 /* CLASS */)) : require$$0.createCommentVNode("v-if", true), require$$0.createElementVNode("div", _hoisted_11$3, [require$$0.renderSlot(_ctx.$slots, "tableActionsAppend", {
      loading: $options.loading
    }, undefined, true)])])];
  }, true)])]), $options.showQuickFiltersBelowTitle ? (require$$0.openBlock(), require$$0.createBlock(_component_CrudQuickFilters, {
    key: 0,
    class: "crud-header__quick-filters-row"
  }, require$$0.createSlots({
    _: 2 /* DYNAMIC */
  }, [require$$0.renderList(_ctx.$slots, function (_, name) {
    return {
      name: name,
      fn: require$$0.withCtx(function (slotProps) {
        return [require$$0.renderSlot(_ctx.$slots, name, require$$0.normalizeProps(require$$0.guardReactiveProps(slotProps)), undefined, true)];
      })
    };
  })]), 1024 /* DYNAMIC_SLOTS */)) : require$$0.createCommentVNode("v-if", true), require$$0.createVNode(_component_b_sidebar, {
    id: $options.filtersSidebarId,
    modelValue: $options.sidebarOpen,
    "onUpdate:modelValue": _cache[10] || (_cache[10] = function ($event) {
      return $options.sidebarOpen = $event;
    }),
    title: "Filtrar",
    right: "",
    shadow: ""
  }, {
    default: require$$0.withCtx(function () {
      return [require$$0.createVNode(_component_CrudFilters)];
    }),
    _: 1 /* STABLE */
  }, 8 /* PROPS */, ["id", "modelValue"])])) : require$$0.createCommentVNode("v-if", true);
}
var CrudHeader = /*#__PURE__*/_export_sfc(_sfc_main$i, [['render', _sfc_render$i], ['__scopeId', "data-v-b1534978"]]);function getDefaultExportFromCjs (x) {
	return x && x.__esModule && Object.prototype.hasOwnProperty.call(x, 'default') ? x['default'] : x;
}

function getAugmentedNamespace(n) {
  if (Object.prototype.hasOwnProperty.call(n, '__esModule')) return n;
  var f = n.default;
	if (typeof f == "function") {
		var a = function a () {
			var isInstance = false;
      try {
        isInstance = this instanceof a;
      } catch (e) {}
			if (isInstance) {
        return Reflect.construct(f, arguments, this.constructor);
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
}var vuedraggable_umd$1 = {exports: {}};/**!
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

var version = "1.14.0";

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

function on(el, event, fn) {
  el.addEventListener(event, fn, !IE11OrLess && captureMode);
}

function off(el, event, fn) {
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

function css(el, prop, val) {
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
      var transform = css(el, 'transform');

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
        if (container && container.getBoundingClientRect && (css(container, 'transform') !== 'none' || relativeToNonStaticParent && css(container, 'position') !== 'static')) {
          var containerRect = container.getBoundingClientRect(); // Set relative to edges of padding box of container

          top -= containerRect.top + parseInt(css(container, 'border-top-width'));
          left -= containerRect.left + parseInt(css(container, 'border-left-width'));
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

    {
      visible = elSideVal >= parentSideVal;
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

  while (last && (last === Sortable.ghost || css(last, 'display') === 'none' || selector && !matches(last, selector))) {
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
      var elemCSS = css(elem);

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
  css(el, 'position', 'absolute');
  css(el, 'top', rect.top);
  css(el, 'left', rect.left);
  css(el, 'width', rect.width);
  css(el, 'height', rect.height);
}

function unsetRect(el) {
  css(el, 'position', '');
  css(el, 'top', '');
  css(el, 'left', '');
  css(el, 'width', '');
  css(el, 'height', '');
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
        if (css(child, 'display') === 'none' || child === Sortable.ghost) return;
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
        css(target, 'transition', '');
        css(target, 'transform', '');
        var elMatrix = matrix(this.el),
            scaleX = elMatrix && elMatrix.a,
            scaleY = elMatrix && elMatrix.d,
            translateX = (currentRect.left - toRect.left) / (scaleX || 1),
            translateY = (currentRect.top - toRect.top) / (scaleY || 1);
        target.animatingX = !!translateX;
        target.animatingY = !!translateY;
        css(target, 'transform', 'translate3d(' + translateX + 'px,' + translateY + 'px,0)');
        this.forRepaintDummy = repaint(target); // repaint

        css(target, 'transition', 'transform ' + duration + 'ms' + (this.options.easing ? ' ' + this.options.easing : ''));
        css(target, 'transform', 'translate3d(0,0,0)');
        typeof target.animated === 'number' && clearTimeout(target.animated);
        target.animated = setTimeout(function () {
          css(target, 'transition', '');
          css(target, 'transform', '');
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
  var elCSS = css(el),
      elWidth = parseInt(elCSS.width) - parseInt(elCSS.paddingLeft) - parseInt(elCSS.paddingRight) - parseInt(elCSS.borderLeftWidth) - parseInt(elCSS.borderRightWidth),
      child1 = getChild(el, 0, options),
      child2 = getChild(el, 1, options),
      firstChildCSS = child1 && css(child1),
      secondChildCSS = child2 && css(child2),
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
    css(ghostEl, 'display', 'none');
  }
},
    _unhideGhostForTarget = function _unhideGhostForTarget() {
  if (!supportCssPointerEvents && ghostEl) {
    css(ghostEl, 'display', '');
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
    on(el, 'pointerdown', this._onTapStart);
  } else {
    on(el, 'mousedown', this._onTapStart);
    on(el, 'touchstart', this._onTapStart);
  }

  if (this.nativeDraggable) {
    on(el, 'dragover', this);
    on(el, 'dragenter', this);
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
      on(ownerDocument, 'dragover', nearestEmptyInsertDetectEvent);
      on(ownerDocument, 'mousemove', nearestEmptyInsertDetectEvent);
      on(ownerDocument, 'touchmove', nearestEmptyInsertDetectEvent);
      on(ownerDocument, 'mouseup', _this._onDrop);
      on(ownerDocument, 'touchend', _this._onDrop);
      on(ownerDocument, 'touchcancel', _this._onDrop); // Make dragEl draggable (must be before delay for FireFox)

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


        on(ownerDocument, 'mouseup', _this._disableDelayedDrag);
        on(ownerDocument, 'touchend', _this._disableDelayedDrag);
        on(ownerDocument, 'touchcancel', _this._disableDelayedDrag);
        on(ownerDocument, 'mousemove', _this._delayedDragTouchMoveHandler);
        on(ownerDocument, 'touchmove', _this._delayedDragTouchMoveHandler);
        options.supportPointer && on(ownerDocument, 'pointermove', _this._delayedDragTouchMoveHandler);
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
    off(ownerDocument, 'mouseup', this._disableDelayedDrag);
    off(ownerDocument, 'touchend', this._disableDelayedDrag);
    off(ownerDocument, 'touchcancel', this._disableDelayedDrag);
    off(ownerDocument, 'mousemove', this._delayedDragTouchMoveHandler);
    off(ownerDocument, 'touchmove', this._delayedDragTouchMoveHandler);
    off(ownerDocument, 'pointermove', this._delayedDragTouchMoveHandler);
  },
  _triggerDragStart: function _triggerDragStart(
  /** Event */
  evt,
  /** Touch */
  touch) {
    touch = touch || evt.pointerType == 'touch' && evt;

    if (!this.nativeDraggable || touch) {
      if (this.options.supportPointer) {
        on(document, 'pointermove', this._onTouchMove);
      } else if (touch) {
        on(document, 'touchmove', this._onTouchMove);
      } else {
        on(document, 'mousemove', this._onTouchMove);
      }
    } else {
      on(dragEl, 'dragend', this);
      on(rootEl, 'dragstart', this._onDragStart);
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
        on(document, 'dragover', _checkOutsideTargetEl);
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
        css(ghostEl, 'webkitTransform', cssMatrix);
        css(ghostEl, 'mozTransform', cssMatrix);
        css(ghostEl, 'msTransform', cssMatrix);
        css(ghostEl, 'transform', cssMatrix);
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

        while (css(ghostRelativeParent, 'position') === 'static' && css(ghostRelativeParent, 'transform') === 'none' && ghostRelativeParent !== document) {
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
      css(ghostEl, 'transition', '');
      css(ghostEl, 'transform', '');
      css(ghostEl, 'box-sizing', 'border-box');
      css(ghostEl, 'margin', 0);
      css(ghostEl, 'top', rect.top);
      css(ghostEl, 'left', rect.left);
      css(ghostEl, 'width', rect.width);
      css(ghostEl, 'height', rect.height);
      css(ghostEl, 'opacity', '0.8');
      css(ghostEl, 'position', PositionGhostAbsolutely ? 'absolute' : 'fixed');
      css(ghostEl, 'zIndex', '100000');
      css(ghostEl, 'pointerEvents', 'none');
      Sortable.ghost = ghostEl;
      container.appendChild(ghostEl); // Set transform-origin

      css(ghostEl, 'transform-origin', tapDistanceLeft / parseInt(ghostEl.style.width) * 100 + '% ' + tapDistanceTop / parseInt(ghostEl.style.height) * 100 + '%');
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
      off(document, 'mouseup', _this._onDrop);
      off(document, 'touchend', _this._onDrop);
      off(document, 'touchcancel', _this._onDrop);

      if (dataTransfer) {
        dataTransfer.effectAllowed = 'move';
        options.setData && options.setData.call(_this, dataTransfer, dragEl);
      }

      on(document, 'drop', _this); // #1276 fix:

      css(dragEl, 'transform', 'translateZ(0)');
    }

    awaitingDragStarted = true;
    _this._dragStartId = _nextTick(_this._dragStarted.bind(_this, fallback, evt));
    on(document, 'selectstart', _this);
    moved = true;

    if (Safari) {
      css(document.body, 'user-select', 'none');
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
          } while (sibling && (css(sibling, 'display') === 'none' || sibling === ghostEl));
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
    off(document, 'mousemove', this._onTouchMove);
    off(document, 'touchmove', this._onTouchMove);
    off(document, 'pointermove', this._onTouchMove);
    off(document, 'dragover', nearestEmptyInsertDetectEvent);
    off(document, 'mousemove', nearestEmptyInsertDetectEvent);
    off(document, 'touchmove', nearestEmptyInsertDetectEvent);
  },
  _offUpEvents: function _offUpEvents() {
    var ownerDocument = this.el.ownerDocument;
    off(ownerDocument, 'mouseup', this._onDrop);
    off(ownerDocument, 'touchend', this._onDrop);
    off(ownerDocument, 'pointerup', this._onDrop);
    off(ownerDocument, 'touchcancel', this._onDrop);
    off(document, 'selectstart', this);
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
      off(document, 'drop', this);
      off(el, 'dragstart', this._onDragStart);
    }

    this._offMoveEvents();

    this._offUpEvents();

    if (Safari) {
      css(document.body, 'user-select', '');
    }

    css(dragEl, 'transform', '');

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
          off(dragEl, 'dragend', this);
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
    off(el, 'mousedown', this._onTapStart);
    off(el, 'touchstart', this._onTapStart);
    off(el, 'pointerdown', this._onTapStart);

    if (this.nativeDraggable) {
      off(el, 'dragover', this);
      off(el, 'dragenter', this);
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
      css(cloneEl, 'display', 'none');

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

      css(cloneEl, 'display', '');
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
  on(document, 'touchmove', function (evt) {
    if ((Sortable.active || awaitingDragStarted) && evt.cancelable) {
      evt.preventDefault();
    }
  });
} // Export utils


Sortable.utils = {
  on: on,
  off: off,
  css: css,
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


Sortable.version = version;

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
        on(document, 'dragover', this._handleAutoScroll);
      } else {
        if (this.options.supportPointer) {
          on(document, 'pointermove', this._handleFallbackAutoScroll);
        } else if (originalEvent.touches) {
          on(document, 'touchmove', this._handleFallbackAutoScroll);
        } else {
          on(document, 'mousemove', this._handleFallbackAutoScroll);
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
        off(document, 'dragover', this._handleAutoScroll);
      } else {
        off(document, 'pointermove', this._handleFallbackAutoScroll);
        off(document, 'touchmove', this._handleFallbackAutoScroll);
        off(document, 'mousemove', this._handleFallbackAutoScroll);
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
        elCSS = css(el),
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
      on(document, 'pointerup', this._deselectMultiDrag);
    } else {
      on(document, 'mouseup', this._deselectMultiDrag);
      on(document, 'touchend', this._deselectMultiDrag);
    }

    on(document, 'keydown', this._checkKeyDown);
    on(document, 'keyup', this._checkKeyUp);
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
        css(clone, 'display', '');
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
        css(clone, 'display', 'none');

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
            css(multiDragElement, 'position', 'absolute');
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
            targetEl: dragEl$1}); // Modifier activated, select from last to dragEl

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
                  targetEl: children[i]});
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
            targetEl: dragEl$1});
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

      off(document, 'pointerup', this._deselectMultiDrag);
      off(document, 'mouseup', this._deselectMultiDrag);
      off(document, 'touchend', this._deselectMultiDrag);
      off(document, 'keydown', this._checkKeyDown);
      off(document, 'keyup', this._checkKeyUp);
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
          targetEl: el});
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
Sortable.mount(Remove, Revert);var sortable_esm=/*#__PURE__*/Object.freeze({__proto__:null,MultiDrag:MultiDragPlugin,Sortable:Sortable,Swap:SwapPlugin,default:Sortable});var require$$1 = /*@__PURE__*/getAugmentedNamespace(sortable_esm);var vuedraggable_umd = vuedraggable_umd$1.exports;

var hasRequiredVuedraggable_umd;

function requireVuedraggable_umd () {
	if (hasRequiredVuedraggable_umd) return vuedraggable_umd$1.exports;
	hasRequiredVuedraggable_umd = 1;
	(function (module, exports) {
		(function webpackUniversalModuleDefinition(root, factory) {
			module.exports = factory(require$$0, require$$1);
		})((typeof self !== 'undefined' ? self : vuedraggable_umd), function(__WEBPACK_EXTERNAL_MODULE__8bbf__, __WEBPACK_EXTERNAL_MODULE_a352__) {
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
		
	} (vuedraggable_umd$1));
	return vuedraggable_umd$1.exports;
}var vuedraggable_umdExports = requireVuedraggable_umd();
var draggable = /*@__PURE__*/getDefaultExportFromCjs(vuedraggable_umdExports);var css_248z$b = "\r\n/* Fijar ancho de la columna de acciones en el header */\n.actions-header[data-v-92534bce] {\r\n  width: 1%;\r\n  white-space: nowrap;\n}\r\n\r\n/* Alinear checkbox en el header */\n.checkbox-header[data-v-92534bce] {\r\n  vertical-align: middle !important;\r\n  text-align: center;\n}\n.header-checkbox-wrapper[data-v-92534bce] {\r\n  display: inline-flex;\r\n  align-items: center;\r\n  vertical-align: middle;\n}\r\n\r\n/* Asegurar que el form-check dentro del header esté alineado */\n.checkbox-header[data-v-92534bce] .form-check {\r\n  margin: 0 !important;\r\n  display: inline-flex;\r\n  align-items: center;\r\n  min-height: auto;\r\n  padding: 0;\r\n  vertical-align: middle;\n}\n.checkbox-header[data-v-92534bce] .form-check-input {\r\n  margin: 0 !important;\r\n  margin-top: 0 !important;\r\n  margin-right: 0.5rem !important;\r\n  vertical-align: middle;\r\n  position: relative;\r\n  float: none;\r\n  top: 0;\r\n  align-self: center;\n}\n.checkbox-header[data-v-92534bce] .form-check-label {\r\n  margin-left: 0;\r\n  margin-bottom: 0;\r\n  vertical-align: middle;\r\n  display: inline;\r\n  align-self: center;\n}\n.sort-filter[data-v-92534bce] {\r\n  cursor: pointer;\r\n  visibility: hidden;\r\n  display: inline-flex;\r\n  align-items: center;\r\n  gap: 0.15rem;\r\n  vertical-align: middle;\n}\n.sort-filter-visible[data-v-92534bce] {\r\n  visibility: visible;\n}\n.sort-priority[data-v-92534bce] {\r\n  display: inline-flex;\r\n  align-items: center;\r\n  justify-content: center;\r\n  min-width: 1rem;\r\n  height: 1rem;\r\n  padding: 0 0.2rem;\r\n  border-radius: 999px;\r\n  background: #5f76e8;\r\n  color: #fff;\r\n  font-size: 0.65rem;\r\n  font-weight: 600;\r\n  line-height: 1;\n}\r\n";
styleInject(css_248z$b);var _sfc_main$h = {
  name: 'TableHeader',
  inject: ['bootstrapFactory', 'columns', 'enableFilters', 'filtersVisible', 'isColumnHasFilter', 'isColumnVisibleInTable', 'internalFilterByProp', 'onChangeFilter', 'toggleAll', 'toggleSortFilter', 'getSortPriority', 'sortable', 'optionsLoaded', 'isAllSelected'],
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
      var sortValue = sortFilter && sortFilter.value;
      if (sortValue === 'DESC') {
        return 'down';
      } else if (sortValue === 'ASC') {
        return 'up';
      } else if (this.hoveredColumn === column.prop) {
        return 'up';
      }
      return null;
    },
    sortPriorityFor: function sortPriorityFor(column) {
      if (typeof this.getSortPriority === 'function') {
        return this.getSortPriority(column);
      }
      return null;
    }
  }
};
var _hoisted_1$g = {
  class: "thead-light"
};
var _hoisted_2$d = ["onMouseenter"];
var _hoisted_3$c = {
  class: "form-group"
};
var _hoisted_4$c = ["onUpdate:modelValue"];
var _hoisted_5$9 = {
  value: ""
};
var _hoisted_6$8 = {
  key: 1,
  class: "row"
};
var _hoisted_7$7 = {
  class: "col-6"
};
var _hoisted_8$7 = {
  class: "col-6"
};
var _hoisted_9$4 = {
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
var _hoisted_25 = {
  key: 0,
  class: "sort-priority"
};
function _sfc_render$h(_ctx, _cache, $props, $setup, $data, $options) {
  var _component_b_form_datepicker = require$$0.resolveComponent("b-form-datepicker");
  var _component_b_form_checkbox = require$$0.resolveComponent("b-form-checkbox");
  var _component_b_icon_sort_up = require$$0.resolveComponent("b-icon-sort-up");
  var _component_b_icon_sort_down = require$$0.resolveComponent("b-icon-sort-down");
  return require$$0.openBlock(), require$$0.createElementBlock("thead", _hoisted_1$g, [require$$0.createElementVNode("tr", null, [require$$0.renderSlot(_ctx.$slots, "rowHead", {}, function () {
    return [(require$$0.openBlock(true), require$$0.createElementBlock(require$$0.Fragment, null, require$$0.renderList($options.columns, function (column, indexc) {
      return require$$0.openBlock(), require$$0.createElementBlock(require$$0.Fragment, null, [$options.isColumnVisibleInTable(column) ? (require$$0.openBlock(), require$$0.createElementBlock("th", {
        key: 'th-' + (column.prop || indexc),
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
        column: column,
        filter: _ctx.filter,
        internalFilterByProp: $options.internalFilterByProp
      }, function () {
        return [require$$0.createElementVNode("div", _hoisted_3$c, [column.type == 'boolean' ? require$$0.withDirectives((require$$0.openBlock(), require$$0.createElementBlock("select", {
          key: 0,
          class: "form-control form-control-md p-2",
          "onUpdate:modelValue": function onUpdateModelValue($event) {
            return $options.internalFilterByProp(column.prop).value = $event;
          },
          onChange: _cache[0] || (_cache[0] = function ($event) {
            return $options.onChangeFilter($event);
          })
        }, [require$$0.createElementVNode("option", _hoisted_5$9, require$$0.toDisplayString(column.label), 1 /* TEXT */), _cache[7] || (_cache[7] = require$$0.createElementVNode("option", {
          value: "1"
        }, "Sí", -1 /* CACHED */)), _cache[8] || (_cache[8] = require$$0.createElementVNode("option", {
          value: "0"
        }, "No", -1 /* CACHED */))], 40 /* PROPS, NEED_HYDRATION */, _hoisted_4$c)), [[require$$0.vModelSelect, $options.internalFilterByProp(column.prop).value]]) : column.type == 'date' ? (require$$0.openBlock(), require$$0.createElementBlock("div", _hoisted_6$8, [require$$0.createElementVNode("div", _hoisted_7$7, [require$$0.createVNode(_component_b_form_datepicker, {
          modelValue: $options.internalFilterByProp(column.prop + '_from').value,
          "onUpdate:modelValue": function onUpdateModelValue($event) {
            return $options.internalFilterByProp(column.prop + '_from').value = $event;
          },
          "today-button": "",
          "reset-button": "",
          "close-button": "",
          locale: "es",
          class: "form-control-md p-2"
        }, null, 8 /* PROPS */, ["modelValue", "onUpdate:modelValue"])]), require$$0.createElementVNode("div", _hoisted_8$7, [require$$0.createVNode(_component_b_form_datepicker, {
          modelValue: $options.internalFilterByProp(column.prop + '_to').value,
          "onUpdate:modelValue": function onUpdateModelValue($event) {
            return $options.internalFilterByProp(column.prop + '_to').value = $event;
          },
          "today-button": "",
          "reset-button": "",
          "close-button": "",
          locale: "es",
          class: "form-control-md p-2"
        }, null, 8 /* PROPS */, ["modelValue", "onUpdate:modelValue"])])])) : column.type == 'number' || column.type == 'money' || column.type == 'price' ? (require$$0.openBlock(), require$$0.createElementBlock("div", _hoisted_9$4, [require$$0.createElementVNode("div", _hoisted_10$3, [require$$0.withDirectives(require$$0.createElementVNode("input", {
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
      }, true, 0) : column.type == 'select' ? (require$$0.openBlock(), require$$0.createElementBlock("span", _hoisted_21, [require$$0.createVNode(_component_b_form_checkbox, {
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
        onClick: require$$0.withModifiers(function ($event) {
          return $options.toggleSortFilter(column);
        }, ["stop"])
      }, [$options.sortPriorityFor(column) ? (require$$0.openBlock(), require$$0.createElementBlock("span", _hoisted_25, require$$0.toDisplayString($options.sortPriorityFor(column)), 1 /* TEXT */)) : require$$0.createCommentVNode("v-if", true), $options.getSortIconDirection(column) === 'up' ? (require$$0.openBlock(), require$$0.createBlock(_component_b_icon_sort_up, {
        key: 1
      })) : $options.getSortIconDirection(column) === 'down' ? (require$$0.openBlock(), require$$0.createBlock(_component_b_icon_sort_down, {
        key: 2
      })) : (require$$0.openBlock(), require$$0.createBlock(_component_b_icon_sort_up, {
        key: 3,
        style: {
          "visibility": "hidden"
        }
      }))], 10 /* CLASS, PROPS */, _hoisted_24)) : require$$0.createCommentVNode("v-if", true)], 46 /* CLASS, STYLE, PROPS, NEED_HYDRATION */, _hoisted_2$d)) : require$$0.createCommentVNode("v-if", true)], 64 /* STABLE_FRAGMENT */);
    }), 256 /* UNKEYED_FRAGMENT */))];
  }, true)])]);
}
var TableHeader = /*#__PURE__*/_export_sfc(_sfc_main$h, [['render', _sfc_render$h], ['__scopeId', "data-v-92534bce"]]);var dayjs_min$1 = {exports: {}};var dayjs_min = dayjs_min$1.exports;

var hasRequiredDayjs_min;

function requireDayjs_min () {
	if (hasRequiredDayjs_min) return dayjs_min$1.exports;
	hasRequiredDayjs_min = 1;
	(function (module, exports) {
		!function(t,e){module.exports=e();}(dayjs_min,(function(){var t=1e3,e=6e4,n=36e5,r="millisecond",i="second",s="minute",u="hour",a="day",o="week",c="month",f="quarter",h="year",d="date",l="Invalid Date",$=/^(\d{4})[-/]?(\d{1,2})?[-/]?(\d{0,2})[Tt\s]*(\d{1,2})?:?(\d{1,2})?:?(\d{1,2})?[.:]?(\d+)?$/,y=/\[([^\]]+)]|YYYY|YY|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g,M={name:"en",weekdays:"Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),months:"January_February_March_April_May_June_July_August_September_October_November_December".split("_"),ordinal:function(t){var e=["th","st","nd","rd"],n=t%100;return "["+t+(e[(n-20)%10]||e[n]||e[0])+"]"}},m=function(t,e,n){var r=String(t);return !r||r.length>=e?t:""+Array(e+1-r.length).join(n)+t},v={s:m,z:function(t){var e=-t.utcOffset(),n=Math.abs(e),r=Math.floor(n/60),i=n%60;return (e<=0?"+":"-")+m(r,2,"0")+":"+m(i,2,"0")},m:function t(e,n){if(e.date()<n.date())return -t(n,e);var r=12*(n.year()-e.year())+(n.month()-e.month()),i=e.clone().add(r,c),s=n-i<0,u=e.clone().add(r+(s?-1:1),c);return +(-(r+(n-i)/(s?i-u:u-i))||0)},a:function(t){return t<0?Math.ceil(t)||0:Math.floor(t)},p:function(t){return {M:c,y:h,w:o,d:a,D:d,h:u,m:s,s:i,ms:r,Q:f}[t]||String(t||"").toLowerCase().replace(/s$/,"")},u:function(t){return void 0===t}},g="en",D={};D[g]=M;var p="$isDayjsObject",S=function(t){return t instanceof _||!(!t||!t[p])},w=function t(e,n,r){var i;if(!e)return g;if("string"==typeof e){var s=e.toLowerCase();D[s]&&(i=s),n&&(D[s]=n,i=s);var u=e.split("-");if(!i&&u.length>1)return t(u[0])}else {var a=e.name;D[a]=e,i=a;}return !r&&i&&(g=i),i||!r&&g},O=function(t,e){if(S(t))return t.clone();var n="object"==typeof e?e:{};return n.date=t,n.args=arguments,new _(n)},b=v;b.l=w,b.i=S,b.w=function(t,e){return O(t,{locale:e.$L,utc:e.$u,x:e.$x,$offset:e.$offset})};var _=function(){function M(t){this.$L=w(t.locale,null,true),this.parse(t),this.$x=this.$x||t.x||{},this[p]=true;}var m=M.prototype;return m.parse=function(t){this.$d=function(t){var e=t.date,n=t.utc;if(null===e)return new Date(NaN);if(b.u(e))return new Date;if(e instanceof Date)return new Date(e);if("string"==typeof e&&!/Z$/i.test(e)){var r=e.match($);if(r){var i=r[2]-1||0,s=(r[7]||"0").substring(0,3);return n?new Date(Date.UTC(r[1],i,r[3]||1,r[4]||0,r[5]||0,r[6]||0,s)):new Date(r[1],i,r[3]||1,r[4]||0,r[5]||0,r[6]||0,s)}}return new Date(e)}(t),this.init();},m.init=function(){var t=this.$d;this.$y=t.getFullYear(),this.$M=t.getMonth(),this.$D=t.getDate(),this.$W=t.getDay(),this.$H=t.getHours(),this.$m=t.getMinutes(),this.$s=t.getSeconds(),this.$ms=t.getMilliseconds();},m.$utils=function(){return b},m.isValid=function(){return !(this.$d.toString()===l)},m.isSame=function(t,e){var n=O(t);return this.startOf(e)<=n&&n<=this.endOf(e)},m.isAfter=function(t,e){return O(t)<this.startOf(e)},m.isBefore=function(t,e){return this.endOf(e)<O(t)},m.$g=function(t,e,n){return b.u(t)?this[e]:this.set(n,t)},m.unix=function(){return Math.floor(this.valueOf()/1e3)},m.valueOf=function(){return this.$d.getTime()},m.startOf=function(t,e){var n=this,r=!!b.u(e)||e,f=b.p(t),l=function(t,e){var i=b.w(n.$u?Date.UTC(n.$y,e,t):new Date(n.$y,e,t),n);return r?i:i.endOf(a)},$=function(t,e){return b.w(n.toDate()[t].apply(n.toDate("s"),(r?[0,0,0,0]:[23,59,59,999]).slice(e)),n)},y=this.$W,M=this.$M,m=this.$D,v="set"+(this.$u?"UTC":"");switch(f){case h:return r?l(1,0):l(31,11);case c:return r?l(1,M):l(0,M+1);case o:var g=this.$locale().weekStart||0,D=(y<g?y+7:y)-g;return l(r?m-D:m+(6-D),M);case a:case d:return $(v+"Hours",0);case u:return $(v+"Minutes",1);case s:return $(v+"Seconds",2);case i:return $(v+"Milliseconds",3);default:return this.clone()}},m.endOf=function(t){return this.startOf(t,false)},m.$set=function(t,e){var n,o=b.p(t),f="set"+(this.$u?"UTC":""),l=(n={},n[a]=f+"Date",n[d]=f+"Date",n[c]=f+"Month",n[h]=f+"FullYear",n[u]=f+"Hours",n[s]=f+"Minutes",n[i]=f+"Seconds",n[r]=f+"Milliseconds",n)[o],$=o===a?this.$D+(e-this.$W):e;if(o===c||o===h){var y=this.clone().set(d,1);y.$d[l]($),y.init(),this.$d=y.set(d,Math.min(this.$D,y.daysInMonth())).$d;}else l&&this.$d[l]($);return this.init(),this},m.set=function(t,e){return this.clone().$set(t,e)},m.get=function(t){return this[b.p(t)]()},m.add=function(r,f){var d,l=this;r=Number(r);var $=b.p(f),y=function(t){var e=O(l);return b.w(e.date(e.date()+Math.round(t*r)),l)};if($===c)return this.set(c,this.$M+r);if($===h)return this.set(h,this.$y+r);if($===a)return y(1);if($===o)return y(7);var M=(d={},d[s]=e,d[u]=n,d[i]=t,d)[$]||1,m=this.$d.getTime()+r*M;return b.w(m,this)},m.subtract=function(t,e){return this.add(-1*t,e)},m.format=function(t){var e=this,n=this.$locale();if(!this.isValid())return n.invalidDate||l;var r=t||"YYYY-MM-DDTHH:mm:ssZ",i=b.z(this),s=this.$H,u=this.$m,a=this.$M,o=n.weekdays,c=n.months,f=n.meridiem,h=function(t,n,i,s){return t&&(t[n]||t(e,r))||i[n].slice(0,s)},d=function(t){return b.s(s%12||12,t,"0")},$=f||function(t,e,n){var r=t<12?"AM":"PM";return n?r.toLowerCase():r};return r.replace(y,(function(t,r){return r||function(t){switch(t){case "YY":return String(e.$y).slice(-2);case "YYYY":return b.s(e.$y,4,"0");case "M":return a+1;case "MM":return b.s(a+1,2,"0");case "MMM":return h(n.monthsShort,a,c,3);case "MMMM":return h(c,a);case "D":return e.$D;case "DD":return b.s(e.$D,2,"0");case "d":return String(e.$W);case "dd":return h(n.weekdaysMin,e.$W,o,2);case "ddd":return h(n.weekdaysShort,e.$W,o,3);case "dddd":return o[e.$W];case "H":return String(s);case "HH":return b.s(s,2,"0");case "h":return d(1);case "hh":return d(2);case "a":return $(s,u,true);case "A":return $(s,u,false);case "m":return String(u);case "mm":return b.s(u,2,"0");case "s":return String(e.$s);case "ss":return b.s(e.$s,2,"0");case "SSS":return b.s(e.$ms,3,"0");case "Z":return i}return null}(t)||i.replace(":","")}))},m.utcOffset=function(){return 15*-Math.round(this.$d.getTimezoneOffset()/15)},m.diff=function(r,d,l){var $,y=this,M=b.p(d),m=O(r),v=(m.utcOffset()-this.utcOffset())*e,g=this-m,D=function(){return b.m(y,m)};switch(M){case h:$=D()/12;break;case c:$=D();break;case f:$=D()/3;break;case o:$=(g-v)/6048e5;break;case a:$=(g-v)/864e5;break;case u:$=g/n;break;case s:$=g/e;break;case i:$=g/t;break;default:$=g;}return l?$:b.a($)},m.daysInMonth=function(){return this.endOf(c).$D},m.$locale=function(){return D[this.$L]},m.locale=function(t,e){if(!t)return this.$L;var n=this.clone(),r=w(t,e,true);return r&&(n.$L=r),n},m.clone=function(){return b.w(this.$d,this)},m.toDate=function(){return new Date(this.valueOf())},m.toJSON=function(){return this.isValid()?this.toISOString():null},m.toISOString=function(){return this.$d.toISOString()},m.toString=function(){return this.$d.toUTCString()},M}(),Y=_.prototype;return O.prototype=Y,[["$ms",r],["$s",i],["$m",s],["$H",u],["$W",a],["$M",c],["$y",h],["$D",d]].forEach((function(t){Y[t[1]]=function(e){return this.$g(e,t[0],t[1])};})),O.extend=function(t,e){return t.$i||(t(e,_,O),t.$i=true),O},O.locale=w,O.isDayjs=S,O.unix=function(t){return O(1e3*t)},O.en=D[g],O.Ls=D,O.p={},O})); 
	} (dayjs_min$1));
	return dayjs_min$1.exports;
}var dayjs_minExports = requireDayjs_min();
var dayjs = /*@__PURE__*/getDefaultExportFromCjs(dayjs_minExports);var localizedFormat$2 = {exports: {}};var localizedFormat$1 = localizedFormat$2.exports;

var hasRequiredLocalizedFormat;

function requireLocalizedFormat () {
	if (hasRequiredLocalizedFormat) return localizedFormat$2.exports;
	hasRequiredLocalizedFormat = 1;
	(function (module, exports) {
		!function(e,t){module.exports=t();}(localizedFormat$1,(function(){var e={LTS:"h:mm:ss A",LT:"h:mm A",L:"MM/DD/YYYY",LL:"MMMM D, YYYY",LLL:"MMMM D, YYYY h:mm A",LLLL:"dddd, MMMM D, YYYY h:mm A"};return function(t,o,n){var r=o.prototype,i=r.format;n.en.formats=e,r.format=function(t){ void 0===t&&(t="YYYY-MM-DDTHH:mm:ssZ");var o=this.$locale().formats,n=function(t,o){return t.replace(/(\[[^\]]+])|(LTS?|l{1,4}|L{1,4})/g,(function(t,n,r){var i=r&&r.toUpperCase();return n||o[r]||e[r]||o[i].replace(/(\[[^\]]+])|(MMMM|MM|DD|dddd)/g,(function(e,t,o){return t||o.slice(1)}))}))}(t,void 0===o?{}:o);return i.call(this,n)};}})); 
	} (localizedFormat$2));
	return localizedFormat$2.exports;
}var localizedFormatExports = requireLocalizedFormat();
var localizedFormat = /*@__PURE__*/getDefaultExportFromCjs(localizedFormatExports);var css_248z$a = "\r\n/* Fijar ancho de la columna de acciones */\n.actions-cell[data-v-36cccca8] {\r\n  width: 1%;\r\n  white-space: nowrap;\n}\n.actions-button-group[data-v-36cccca8] {\r\n  display: inline-flex;\r\n  flex-wrap: nowrap;\n}\n.actions-dropdown[data-v-36cccca8] {\r\n  display: inline-block;\n}\r\n\r\n/* Asegurar que los botones no se expandan */\n.actions-button-group .btn[data-v-36cccca8] {\r\n  flex-shrink: 0;\n}\r\n";
styleInject(css_248z$a);dayjs.extend(localizedFormat);
var _sfc_main$g = {
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
      dayjs: dayjs
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
var _hoisted_1$f = ["scope"];
var _hoisted_2$c = {
  key: 0
};
var _hoisted_3$b = {
  key: 1
};
var _hoisted_4$b = {
  key: 2
};
var _hoisted_5$8 = {
  key: 3
};
var _hoisted_6$7 = {
  key: 4
};
var _hoisted_7$6 = {
  key: 1
};
var _hoisted_8$6 = {
  key: 5
};
var _hoisted_9$3 = {
  key: 6
};
var _hoisted_10$2 = {
  key: 7
};
var _hoisted_11$1 = {
  key: 8
};
function _sfc_render$g(_ctx, _cache, $props, $setup, $data, $options) {
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
    return [$props.column.type == 'boolean' ? (require$$0.openBlock(), require$$0.createElementBlock("span", _hoisted_2$c, [$options.itemValue($props.column, $props.item) == 'true' || $options.itemValue($props.column, $props.item) == 1 || $options.itemValue($props.column, $props.item) == '1' ? (require$$0.openBlock(), require$$0.createBlock(_component_b_badge, {
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
    })) : require$$0.createCommentVNode("v-if", true)])) : $props.column.type == 'date' ? (require$$0.openBlock(), require$$0.createElementBlock("span", _hoisted_3$b, require$$0.toDisplayString($options.itemValue($props.column, $props.item) ? $data.dayjs($options.itemValue($props.column, $props.item)).format($props.column.format ? $props.column.format : 'L LT') : $options.itemValue($props.column, $props.item)), 1 /* TEXT */)) : $props.column.type == 'select' ? (require$$0.openBlock(), require$$0.createElementBlock("span", _hoisted_4$b, [require$$0.createVNode(_component_b_form_checkbox, {
      modelValue: $props.item.selected,
      "onUpdate:modelValue": _cache[0] || (_cache[0] = function ($event) {
        return $props.item.selected = $event;
      }),
      onChange: _cache[1] || (_cache[1] = function ($event) {
        return $options.onCheckSelect($event, $props.item);
      })
    }, null, 8 /* PROPS */, ["modelValue"])])) : $props.column.type == 'checkbox' ? (require$$0.openBlock(), require$$0.createElementBlock("span", _hoisted_5$8, [require$$0.createVNode(_component_b_form_checkbox, {
      modelValue: $props.item.selected,
      "onUpdate:modelValue": _cache[2] || (_cache[2] = function ($event) {
        return $props.item.selected = $event;
      }),
      onChange: _cache[3] || (_cache[3] = function ($event) {
        return $options.onCheckSelect($event, $props.item);
      })
    }, null, 8 /* PROPS */, ["modelValue"])])) : $props.column.type == 'state' ? (require$$0.openBlock(), require$$0.createElementBlock("span", _hoisted_6$7, [$options.stateOptions.length > 0 ? (require$$0.openBlock(true), require$$0.createElementBlock(require$$0.Fragment, {
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
    }), 128 /* KEYED_FRAGMENT */)) : (require$$0.openBlock(), require$$0.createElementBlock("span", _hoisted_7$6, require$$0.toDisplayString($options.itemValue($props.column, $props.item)), 1 /* TEXT */))])) : $props.column.type == 'array' && $options.optionsLoaded ? (require$$0.openBlock(), require$$0.createElementBlock("span", _hoisted_8$6, require$$0.toDisplayString($options.getArrayValue($options.itemValue($props.column, $props.item), $props.column.displayProp, $props.column.options)), 1 /* TEXT */)) : $props.column.type == 'money' || $props.column.type == 'price' ? (require$$0.openBlock(), require$$0.createElementBlock("span", _hoisted_9$3, require$$0.toDisplayString($options.formatMoney($options.itemValue($props.column, $props.item), $props.column)), 1 /* TEXT */)) : $props.column.type == 'number' && ($props.column.thousandsSeparator || $props.column.decimalSeparator || $props.column.decimals !== undefined) ? (require$$0.openBlock(), require$$0.createElementBlock("span", _hoisted_10$2, require$$0.toDisplayString($options.formatNumber($options.itemValue($props.column, $props.item), $props.column)), 1 /* TEXT */)) : (require$$0.openBlock(), require$$0.createElementBlock("span", _hoisted_11$1, require$$0.toDisplayString($options.itemValue($props.column, $props.item)), 1 /* TEXT */))];
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
  })], 2112 /* STABLE_FRAGMENT, DEV_ROOT_FRAGMENT */)) : require$$0.createCommentVNode("v-if", true)], 64 /* STABLE_FRAGMENT */)) : require$$0.createCommentVNode("v-if", true)], 10 /* CLASS, PROPS */, _hoisted_1$f);
}
var TableCell = /*#__PURE__*/_export_sfc(_sfc_main$g, [['render', _sfc_render$g], ['__scopeId', "data-v-36cccca8"]]);var _sfc_main$f = {
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
var _hoisted_1$e = ["colspan"];
function _sfc_render$f(_ctx, _cache, $props, $setup, $data, $options) {
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
  }, [require$$0.createElementVNode("span", null, require$$0.toDisplayString($props.item.crudgrouplabel), 1 /* TEXT */)], 8 /* PROPS */, _hoisted_1$e)) : require$$0.renderSlot(_ctx.$slots, "row", {
    item: $props.item
  }, function () {
    return [(require$$0.openBlock(true), require$$0.createElementBlock(require$$0.Fragment, null, require$$0.renderList($options.columns, function (column, indexc) {
      return require$$0.openBlock(), require$$0.createElementBlock(require$$0.Fragment, null, [$options.isColumnVisibleInTable(column) ? (require$$0.openBlock(), require$$0.createBlock(_component_TableCell, {
        key: 'td-' + (column.prop || indexc),
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
    }), 256 /* UNKEYED_FRAGMENT */))];
  }, undefined, 1)], 34 /* CLASS, NEED_HYDRATION */);
}
var TableRow = /*#__PURE__*/_export_sfc(_sfc_main$f, [['render', _sfc_render$f]]);var css_248z$9 = "\n.crud-skeleton__toolbar[data-v-14f86999] {\r\n  display: flex;\r\n  flex-wrap: wrap;\r\n  justify-content: flex-end;\r\n  gap: 0.5rem;\r\n  margin-bottom: 1rem;\n}\n.crud-skeleton__bar[data-v-14f86999] {\r\n  display: inline-block;\r\n  height: 2.25rem;\r\n  border-radius: 0.375rem;\r\n  min-width: 4rem;\n}\n.crud-skeleton__table-wrap[data-v-14f86999] {\r\n  position: relative;\r\n  min-height: 14rem;\r\n  border: 1px solid #e9ecef;\r\n  border-radius: 0.375rem;\r\n  overflow: hidden;\r\n  background: #fff;\n}\n.crud-skeleton__table-wrap table[data-v-14f86999] {\r\n  margin-bottom: 0;\n}\n.crud-skeleton__table-wrap th[data-v-14f86999],\r\n.crud-skeleton__table-wrap td[data-v-14f86999] {\r\n  vertical-align: middle;\n}\n.crud-skeleton__overlay[data-v-14f86999] {\r\n  position: absolute;\r\n  inset: 0;\r\n  display: flex;\r\n  flex-direction: column;\r\n  align-items: center;\r\n  justify-content: center;\r\n  background: rgba(255, 255, 255, 0.72);\r\n  backdrop-filter: blur(1px);\r\n  z-index: 2;\n}\n.crud-skeleton__message[data-v-14f86999] {\r\n  margin: 0.75rem 0 0;\r\n  color: #495057;\r\n  font-size: 0.9rem;\n}\n.crud-skeleton__paginator[data-v-14f86999] {\r\n  display: flex;\r\n  justify-content: space-between;\r\n  align-items: center;\r\n  gap: 1rem;\r\n  margin-top: 1rem;\n}\r\n";
styleInject(css_248z$9);var _sfc_main$e = {
  name: 'CrudSkeleton',
  props: {
    columns: {
      type: Array,
      default: function _default() {
        return [];
      }
    },
    rowCount: {
      type: Number,
      default: 5
    },
    showToolbar: {
      type: Boolean,
      default: false
    },
    showTable: {
      type: Boolean,
      default: true
    },
    showPaginator: {
      type: Boolean,
      default: false
    },
    message: {
      type: String,
      default: ''
    },
    isColumnVisibleInTable: {
      type: Function,
      default: null
    }
  },
  computed: {
    skeletonColumns: function skeletonColumns() {
      var _this = this;
      var cols = Array.isArray(this.columns) ? this.columns : [];
      var visible = cols.filter(function (col) {
        if (typeof _this.isColumnVisibleInTable === 'function') {
          return _this.isColumnVisibleInTable(col);
        }
        return col && col.type !== 'hidden';
      });
      var count = visible.length || 4;
      return Array.from({
        length: count
      }, function (_, i) {
        return visible[i] || {
          label: "col-".concat(i)
        };
      });
    }
  },
  methods: {
    cellPlaceholderClass: function cellPlaceholderClass(idx) {
      if (idx === this.skeletonColumns.length - 1) {
        return 'col-4';
      }
      return idx % 2 === 0 ? 'col-10' : 'col-7';
    }
  }
};
var _hoisted_1$d = {
  class: "crud-skeleton",
  "aria-busy": "true",
  "aria-live": "polite"
};
var _hoisted_2$b = {
  key: 0,
  class: "crud-skeleton__toolbar placeholder-glow"
};
var _hoisted_3$a = {
  key: 1,
  class: "crud-skeleton__table-wrap"
};
var _hoisted_4$a = {
  class: "table table-borderless mb-0"
};
var _hoisted_5$7 = {
  class: "placeholder-glow"
};
var _hoisted_6$6 = {
  class: "crud-skeleton__overlay"
};
var _hoisted_7$5 = {
  key: 0,
  class: "crud-skeleton__message"
};
var _hoisted_8$5 = {
  key: 2,
  class: "crud-skeleton__paginator placeholder-glow"
};
function _sfc_render$e(_ctx, _cache, $props, $setup, $data, $options) {
  var _component_b_spinner = require$$0.resolveComponent("b-spinner");
  return require$$0.openBlock(), require$$0.createElementBlock("div", _hoisted_1$d, [$props.showToolbar ? (require$$0.openBlock(), require$$0.createElementBlock("div", _hoisted_2$b, _toConsumableArray$1(_cache[0] || (_cache[0] = [require$$0.createElementVNode("span", {
    class: "placeholder col-4 crud-skeleton__bar"
  }, null, -1 /* CACHED */), require$$0.createElementVNode("span", {
    class: "placeholder col-3 crud-skeleton__bar"
  }, null, -1 /* CACHED */), require$$0.createElementVNode("span", {
    class: "placeholder col-2 crud-skeleton__bar"
  }, null, -1 /* CACHED */)])))) : require$$0.createCommentVNode("v-if", true), $props.showTable ? (require$$0.openBlock(), require$$0.createElementBlock("div", _hoisted_3$a, [require$$0.createElementVNode("table", _hoisted_4$a, [require$$0.createElementVNode("thead", null, [require$$0.createElementVNode("tr", null, [(require$$0.openBlock(true), require$$0.createElementBlock(require$$0.Fragment, null, require$$0.renderList($options.skeletonColumns, function (col, idx) {
    return require$$0.openBlock(), require$$0.createElementBlock("th", {
      key: 'h-' + idx,
      scope: "col"
    }, _toConsumableArray$1(_cache[1] || (_cache[1] = [require$$0.createElementVNode("span", {
      class: "placeholder col-8"
    }, null, -1 /* CACHED */)])));
  }), 128 /* KEYED_FRAGMENT */))])]), require$$0.createElementVNode("tbody", _hoisted_5$7, [(require$$0.openBlock(true), require$$0.createElementBlock(require$$0.Fragment, null, require$$0.renderList($props.rowCount, function (row) {
    return require$$0.openBlock(), require$$0.createElementBlock("tr", {
      key: 'r-' + row
    }, [(require$$0.openBlock(true), require$$0.createElementBlock(require$$0.Fragment, null, require$$0.renderList($options.skeletonColumns, function (col, idx) {
      return require$$0.openBlock(), require$$0.createElementBlock("td", {
        key: 'c-' + row + '-' + idx
      }, [require$$0.createElementVNode("span", {
        class: require$$0.normalizeClass(["placeholder", $options.cellPlaceholderClass(idx)])
      }, null, 2 /* CLASS */)]);
    }), 128 /* KEYED_FRAGMENT */))]);
  }), 128 /* KEYED_FRAGMENT */))])]), require$$0.createElementVNode("div", _hoisted_6$6, [require$$0.createVNode(_component_b_spinner, {
    variant: "primary",
    label: "Cargando"
  }), $props.message ? (require$$0.openBlock(), require$$0.createElementBlock("p", _hoisted_7$5, require$$0.toDisplayString($props.message), 1 /* TEXT */)) : require$$0.createCommentVNode("v-if", true)])])) : require$$0.createCommentVNode("v-if", true), $props.showPaginator ? (require$$0.openBlock(), require$$0.createElementBlock("div", _hoisted_8$5, _toConsumableArray$1(_cache[2] || (_cache[2] = [require$$0.createElementVNode("span", {
    class: "placeholder col-2 crud-skeleton__bar"
  }, null, -1 /* CACHED */), require$$0.createElementVNode("span", {
    class: "placeholder col-3 crud-skeleton__bar"
  }, null, -1 /* CACHED */)])))) : require$$0.createCommentVNode("v-if", true)]);
}
var CrudSkeleton = /*#__PURE__*/_export_sfc(_sfc_main$e, [['render', _sfc_render$e], ['__scopeId', "data-v-14f86999"]]);var css_248z$8 = "\n.crud-empty-state[data-v-ad0841aa] {\r\n  display: flex;\r\n  flex-direction: column;\r\n  align-items: center;\r\n  justify-content: center;\r\n  text-align: center;\r\n  padding: 2.5rem 1.5rem;\r\n  color: #6c757d;\n}\n.crud-empty-state__icon[data-v-ad0841aa] {\r\n  display: flex;\r\n  align-items: center;\r\n  justify-content: center;\r\n  width: 3.5rem;\r\n  height: 3.5rem;\r\n  margin-bottom: 0.75rem;\r\n  border-radius: 50%;\r\n  background: #f1f3f5;\r\n  color: #868e96;\r\n  font-size: 1.5rem;\n}\n.crud-empty-state__message[data-v-ad0841aa] {\r\n  margin: 0;\r\n  max-width: 28rem;\r\n  font-size: 0.95rem;\r\n  line-height: 1.5;\n}\n.crud-empty-state__actions[data-v-ad0841aa] {\r\n  margin-top: 1rem;\n}\r\n";
styleInject(css_248z$8);var _sfc_main$d = {
  name: 'CrudEmptyState',
  props: {
    message: {
      type: String,
      default: 'No hay resultados'
    },
    icon: {
      type: String,
      default: 'inbox'
    }
  },
  computed: {
    iconClass: function iconClass() {
      return "bi bi-".concat(this.icon);
    }
  }
};
var _hoisted_1$c = {
  class: "crud-empty-state"
};
var _hoisted_2$a = {
  class: "crud-empty-state__icon",
  "aria-hidden": "true"
};
var _hoisted_3$9 = {
  class: "crud-empty-state__message"
};
var _hoisted_4$9 = {
  key: 0,
  class: "crud-empty-state__actions"
};
function _sfc_render$d(_ctx, _cache, $props, $setup, $data, $options) {
  return require$$0.openBlock(), require$$0.createElementBlock("div", _hoisted_1$c, [require$$0.createElementVNode("div", _hoisted_2$a, [require$$0.createElementVNode("i", {
    class: require$$0.normalizeClass($options.iconClass)
  }, null, 2 /* CLASS */)]), require$$0.createElementVNode("p", _hoisted_3$9, require$$0.toDisplayString($props.message), 1 /* TEXT */), _ctx.$slots.default ? (require$$0.openBlock(), require$$0.createElementBlock("div", _hoisted_4$9, [require$$0.renderSlot(_ctx.$slots, "default", {}, undefined, true)])) : require$$0.createCommentVNode("v-if", true)]);
}
var CrudEmptyState = /*#__PURE__*/_export_sfc(_sfc_main$d, [['render', _sfc_render$d], ['__scopeId', "data-v-ad0841aa"]]);var _sfc_main$c = {
  name: 'CrudTable',
  components: {
    draggable: draggable,
    TableHeader: TableHeader,
    TableRow: TableRow,
    CrudSkeleton: CrudSkeleton,
    CrudEmptyState: CrudEmptyState
  },
  inject: {
    bootstrapFactory: {
      default: null
    },
    displayMode: {
      default: null
    },
    getDisplayMode: {
      default: null
    },
    displayModes: {
      default: function _default() {
        return {
          MODE_TABLE: 1,
          MODE_CARDS: 2
        };
      }
    },
    tableContainerClass: {
      default: ''
    },
    tableClass: {
      default: ''
    },
    columns: {
      default: function _default() {
        return [];
      }
    },
    items: {
      default: function _default() {
        return [];
      }
    },
    draggableGroup: {
      default: null
    },
    orderable: {
      default: false
    },
    draggableOptions: {
      default: function _default() {
        return {};
      }
    },
    itemsList: {
      default: function _default() {
        return [];
      }
    },
    grouped: {
      default: false
    },
    loading: {
      default: null
    },
    firstLoad: {
      default: null
    },
    infiniteScroll: {
      default: false
    },
    messageEmptyResults: {
      default: ''
    },
    messageLoading: {
      default: ''
    },
    isColumnVisibleInTable: {
      default: null
    },
    onSort: {
      default: function _default() {}
    },
    onDraggableAdded: {
      default: function _default() {}
    },
    onDraggableChange: {
      default: function _default() {}
    }
  },
  data: function data() {
    return {
      drag: false
    };
  },
  computed: {
    currentDisplayMode: function currentDisplayMode() {
      if (typeof this.getDisplayMode === 'function') {
        return this.getDisplayMode();
      }
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
    },
    isInitialLoading: function isInitialLoading() {
      return this.loadingValue && !this.firstLoadValue;
    },
    columnsList: function columnsList() {
      return Array.isArray(this.columns) ? this.columns : [];
    },
    isColumnVisibleInTableFn: function isColumnVisibleInTableFn() {
      return typeof this.isColumnVisibleInTable === 'function' ? this.isColumnVisibleInTable : null;
    }
  }
};
function _sfc_render$c(_ctx, _cache, $props, $setup, $data, $options) {
  var _component_CrudSkeleton = require$$0.resolveComponent("CrudSkeleton");
  var _component_TableHeader = require$$0.resolveComponent("TableHeader");
  var _component_TableRow = require$$0.resolveComponent("TableRow");
  var _component_draggable = require$$0.resolveComponent("draggable");
  var _component_CrudEmptyState = require$$0.resolveComponent("CrudEmptyState");
  return $options.currentDisplayMode == $options.displayModes.MODE_TABLE ? (require$$0.openBlock(), require$$0.createElementBlock("div", {
    key: 0,
    class: require$$0.normalizeClass(['table-responsive', $options.tableContainerClass])
  }, [$options.isInitialLoading ? (require$$0.openBlock(), require$$0.createBlock(_component_CrudSkeleton, {
    key: 0,
    columns: $options.columnsList,
    message: $options.messageLoading,
    "is-column-visible-in-table": $options.isColumnVisibleInTableFn,
    "show-table": ""
  }, null, 8 /* PROPS */, ["columns", "message", "is-column-visible-in-table"])) : (require$$0.openBlock(), require$$0.createElementBlock(require$$0.Fragment, {
    key: 1
  }, [require$$0.createElementVNode("table", {
    class: require$$0.normalizeClass(['table table-hover table-striped w-100', $options.tableClass])
  }, [require$$0.createVNode(_component_TableHeader), require$$0.createVNode(_component_draggable, require$$0.mergeProps({
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
    })
  }, $options.draggableOptions, {
    "item-key": "id"
  }), {
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
  }, 16 /* FULL_PROPS */, ["list", "group", "draggable"])], 2 /* CLASS */), $options.firstLoadValue && $options.itemsList && $options.itemsList.length == 0 && !$options.infiniteScroll ? (require$$0.openBlock(), require$$0.createBlock(_component_CrudEmptyState, {
    key: 0,
    message: $options.messageEmptyResults,
    icon: "inbox"
  }, null, 8 /* PROPS */, ["message"])) : require$$0.createCommentVNode("v-if", true)], 64 /* STABLE_FRAGMENT */))], 2 /* CLASS */)) : require$$0.createCommentVNode("v-if", true);
}
var CrudTable = /*#__PURE__*/_export_sfc(_sfc_main$c, [['render', _sfc_render$c]]);var _sfc_main$b = {
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
var _hoisted_1$b = {
  key: 0
};
var _hoisted_2$9 = {
  key: 1
};
var _hoisted_3$8 = {
  key: 2
};
var _hoisted_4$8 = {
  key: 1
};
var _hoisted_5$6 = {
  key: 3
};
var _hoisted_6$5 = {
  key: 4
};
var _hoisted_7$4 = {
  key: 5
};
var _hoisted_8$4 = {
  key: 6
};
function _sfc_render$b(_ctx, _cache, $props, $setup, $data, $options) {
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
                return [column.type === 'boolean' ? (require$$0.openBlock(), require$$0.createElementBlock("span", _hoisted_1$b, [$props.itemValue(column, $props.item) ? (require$$0.openBlock(), require$$0.createBlock(_component_b_badge, {
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
                }))])) : column.type === 'date' ? (require$$0.openBlock(), require$$0.createElementBlock("span", _hoisted_2$9, require$$0.toDisplayString($props.itemValue(column, $props.item)), 1 /* TEXT */)) : column.type === 'state' ? (require$$0.openBlock(), require$$0.createElementBlock("span", _hoisted_3$8, [$options.getStateOptionsForColumn(column, $props.item).length > 0 ? (require$$0.openBlock(true), require$$0.createElementBlock(require$$0.Fragment, {
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
                }), 128 /* KEYED_FRAGMENT */)) : (require$$0.openBlock(), require$$0.createElementBlock("span", _hoisted_4$8, require$$0.toDisplayString($props.itemValue(column, $props.item)), 1 /* TEXT */))])) : column.type === 'array' ? (require$$0.openBlock(), require$$0.createElementBlock("span", _hoisted_5$6, require$$0.toDisplayString($props.getArrayValue($props.itemValue(column, $props.item), column.displayProp, column.options)), 1 /* TEXT */)) : column.type === 'money' || column.type === 'price' ? (require$$0.openBlock(), require$$0.createElementBlock("span", _hoisted_6$5, require$$0.toDisplayString($options.formatMoney($props.itemValue(column, $props.item), column)), 1 /* TEXT */)) : column.type === 'number' && (column.thousandsSeparator || column.decimalSeparator || column.decimals !== undefined) ? (require$$0.openBlock(), require$$0.createElementBlock("span", _hoisted_7$4, require$$0.toDisplayString($options.formatNumber($props.itemValue(column, $props.item), column)), 1 /* TEXT */)) : (require$$0.openBlock(), require$$0.createElementBlock("span", _hoisted_8$4, require$$0.toDisplayString($props.itemValue(column, $props.item)), 1 /* TEXT */))];
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
var ItemCard = /*#__PURE__*/_export_sfc(_sfc_main$b, [['render', _sfc_render$b]]);var _sfc_main$a = {
  name: 'CrudCards',
  components: {
    ItemCard: ItemCard,
    CrudSkeleton: CrudSkeleton,
    CrudEmptyState: CrudEmptyState
  },
  inject: {
    bootstrapFactory: {
      default: null
    },
    displayMode: {
      default: null
    },
    getDisplayMode: {
      default: null
    },
    displayModes: {
      default: function _default() {
        return {
          MODE_TABLE: 1,
          MODE_CARDS: 2
        };
      }
    },
    columns: {
      default: function _default() {
        return [];
      }
    },
    items: {
      default: function _default() {
        return [];
      }
    },
    itemsList: {
      default: function _default() {
        return [];
      }
    },
    loading: {
      default: null
    },
    firstLoad: {
      default: null
    },
    infiniteScroll: {
      default: false
    },
    messageEmptyResults: {
      default: ''
    },
    messageLoading: {
      default: ''
    },
    colXs: {
      default: 12
    },
    colSm: {
      default: 6
    },
    colMd: {
      default: 4
    },
    colLg: {
      default: 3
    },
    colXl: {
      default: 3
    },
    cardClass: {
      default: ''
    },
    cardHideFooter: {
      default: false
    },
    itemValue: {
      default: null
    },
    getStateValue: {
      default: null
    },
    getStateOptions: {
      default: null
    },
    getStateBadgeVariant: {
      default: null
    },
    getArrayValue: {
      default: null
    },
    showItem: {
      default: function _default() {}
    },
    updateItem: {
      default: function _default() {}
    },
    removeItem: {
      default: function _default() {}
    }
  },
  computed: {
    currentDisplayMode: function currentDisplayMode() {
      if (typeof this.getDisplayMode === 'function') {
        return this.getDisplayMode();
      }
      if (!this.displayMode) return 1;
      if (this.displayMode.value !== undefined) {
        return this.displayMode.value;
      }
      if (typeof this.displayMode === 'function') {
        return this.displayMode();
      }
      return this.displayMode;
    },
    colClasses: function colClasses() {
      var xs = this.colXs || 12;
      var sm = this.colSm || 6;
      var md = this.colMd || 4;
      var lg = this.colLg || 3;
      var xl = this.colXl || lg;
      return ["col-".concat(xs), "col-sm-".concat(sm), "col-md-".concat(md), "col-lg-".concat(lg), "col-xl-".concat(xl)];
    },
    loadingValue: function loadingValue() {
      return this.loading && this.loading.value !== undefined ? this.loading.value : this.loading;
    },
    firstLoadValue: function firstLoadValue() {
      return this.firstLoad && this.firstLoad.value !== undefined ? this.firstLoad.value : this.firstLoad;
    },
    isInitialLoading: function isInitialLoading() {
      return this.loadingValue && !this.firstLoadValue;
    },
    columnsList: function columnsList() {
      return Array.isArray(this.columns) ? this.columns : [];
    },
    cardItems: function cardItems() {
      if (Array.isArray(this.itemsList) && this.itemsList.length) {
        return this.itemsList;
      }
      return Array.isArray(this.items) ? this.items : [];
    }
  }
};
var _hoisted_1$a = {
  key: 0,
  class: "crud-cards"
};
var _hoisted_2$8 = {
  class: "row g-3"
};
function _sfc_render$a(_ctx, _cache, $props, $setup, $data, $options) {
  var _component_CrudSkeleton = require$$0.resolveComponent("CrudSkeleton");
  var _component_ItemCard = require$$0.resolveComponent("ItemCard");
  var _component_CrudEmptyState = require$$0.resolveComponent("CrudEmptyState");
  return $options.currentDisplayMode == $options.displayModes.MODE_CARDS ? (require$$0.openBlock(), require$$0.createElementBlock("div", _hoisted_1$a, [$options.isInitialLoading ? (require$$0.openBlock(), require$$0.createBlock(_component_CrudSkeleton, {
    key: 0,
    columns: $options.columnsList,
    message: $options.messageLoading,
    "show-table": "",
    "row-count": 4
  }, null, 8 /* PROPS */, ["columns", "message"])) : (require$$0.openBlock(), require$$0.createElementBlock(require$$0.Fragment, {
    key: 1
  }, [require$$0.createElementVNode("div", _hoisted_2$8, [(require$$0.openBlock(true), require$$0.createElementBlock(require$$0.Fragment, null, require$$0.renderList($options.cardItems, function (element, index) {
    return require$$0.openBlock(), require$$0.createElementBlock("div", {
      key: element.id || index,
      class: require$$0.normalizeClass(["item", $options.colClasses])
    }, [require$$0.renderSlot(_ctx.$slots, "card", {
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
            return [require$$0.renderSlot(_ctx.$slots, name, require$$0.mergeProps({
              ref_for: true
            }, slotProps))];
          })
        };
      })]), 1032 /* PROPS, DYNAMIC_SLOTS */, ["item", "columns", "index", "cardClass", "cardHideFooter", "itemValue", "getStateValue", "getStateOptions", "getStateBadgeVariant", "getArrayValue", "showItem", "updateItem", "removeItem"])];
    })], 2 /* CLASS */);
  }), 128 /* KEYED_FRAGMENT */))]), $options.firstLoadValue && $options.itemsList && $options.itemsList.length == 0 && !$options.infiniteScroll ? (require$$0.openBlock(), require$$0.createBlock(_component_CrudEmptyState, {
    key: 0,
    message: $options.messageEmptyResults,
    icon: "inbox"
  }, null, 8 /* PROPS */, ["message"])) : require$$0.createCommentVNode("v-if", true)], 64 /* STABLE_FRAGMENT */))])) : require$$0.createCommentVNode("v-if", true);
}
var CrudCards = /*#__PURE__*/_export_sfc(_sfc_main$a, [['render', _sfc_render$a]]);var css_248z$7 = "\n.kanban-card[data-v-57f270bd] {\r\n  background: #ffffff;\r\n  border-radius: 4px;\r\n  padding: 0.5rem;\r\n  box-shadow: 0 1px 2px rgba(0, 0, 0, 0.1);\r\n  cursor: grab;\r\n  transition: box-shadow 0.2s ease;\n}\n.kanban-card[data-v-57f270bd]:hover {\r\n  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.15);\n}\n.kanban-card[data-v-57f270bd]:active {\r\n  cursor: grabbing;\n}\n.card-crud[data-v-57f270bd] {\r\n  border: 1px solid #e1e5e9;\n}\n.card-crud .card-title[data-v-57f270bd] {\r\n  font-size: 0.9rem;\r\n  margin-bottom: 0.5rem;\n}\n.card-crud .card-text[data-v-57f270bd] {\r\n  font-size: 0.8rem;\r\n  margin-bottom: 0.25rem;\n}\r\n";
styleInject(css_248z$7);var _sfc_main$9 = {
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
var _hoisted_1$9 = {
  class: "kanban-card"
};
var _hoisted_2$7 = {
  class: "text-muted"
};
var _hoisted_3$7 = {
  class: "mb-1"
};
var _hoisted_4$7 = {
  key: 0
};
var _hoisted_5$5 = {
  key: 1
};
var _hoisted_6$4 = {
  key: 2
};
var _hoisted_7$3 = {
  key: 1
};
var _hoisted_8$3 = {
  key: 3
};
var _hoisted_9$2 = {
  key: 4
};
var _hoisted_10$1 = {
  key: 5
};
var _hoisted_11 = {
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
  return require$$0.openBlock(), require$$0.createElementBlock("div", _hoisted_1$9, [require$$0.createVNode(_component_b_card, {
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
              return [require$$0.createElementVNode("small", _hoisted_2$7, require$$0.toDisplayString(column.label) + ":", 1 /* TEXT */), require$$0.createElementVNode("div", _hoisted_3$7, [require$$0.renderSlot(_ctx.$slots, 'cell-' + column.prop, {
                item: $props.item,
                index: $props.index,
                itemindex: $props.index,
                columnindex: indexc
              }, function () {
                return [column.type === 'boolean' ? (require$$0.openBlock(), require$$0.createElementBlock("span", _hoisted_4$7, [$props.itemValue(column, $props.item) ? (require$$0.openBlock(), require$$0.createBlock(_component_b_badge, {
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
                }))])) : column.type === 'date' ? (require$$0.openBlock(), require$$0.createElementBlock("span", _hoisted_5$5, require$$0.toDisplayString($props.itemValue(column, $props.item)), 1 /* TEXT */)) : column.type === 'state' ? (require$$0.openBlock(), require$$0.createElementBlock("span", _hoisted_6$4, [$options.getStateOptionsForColumn(column, $props.item).length > 0 ? (require$$0.openBlock(true), require$$0.createElementBlock(require$$0.Fragment, {
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
                }), 128 /* KEYED_FRAGMENT */)) : (require$$0.openBlock(), require$$0.createElementBlock("span", _hoisted_7$3, require$$0.toDisplayString($props.itemValue(column, $props.item)), 1 /* TEXT */))])) : column.type === 'array' ? (require$$0.openBlock(), require$$0.createElementBlock("span", _hoisted_8$3, require$$0.toDisplayString($props.getArrayValue($props.itemValue(column, $props.item), column.displayProp, column.options)), 1 /* TEXT */)) : column.type === 'money' || column.type === 'price' ? (require$$0.openBlock(), require$$0.createElementBlock("span", _hoisted_9$2, require$$0.toDisplayString($options.formatMoney($props.itemValue(column, $props.item), column)), 1 /* TEXT */)) : column.type === 'number' && (column.thousandsSeparator || column.decimalSeparator || column.decimals !== undefined) ? (require$$0.openBlock(), require$$0.createElementBlock("span", _hoisted_10$1, require$$0.toDisplayString($options.formatNumber($props.itemValue(column, $props.item), column)), 1 /* TEXT */)) : (require$$0.openBlock(), require$$0.createElementBlock("span", _hoisted_11, require$$0.toDisplayString($props.itemValue(column, $props.item)), 1 /* TEXT */))];
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
var KanbanCard = /*#__PURE__*/_export_sfc(_sfc_main$9, [['render', _sfc_render$9], ['__scopeId', "data-v-57f270bd"]]);var css_248z$6 = "\n.kanban-column[data-v-81291b30] {\r\n  background: #f4f5f7;\r\n  border-radius: 8px;\r\n  width: 300px;\r\n  display: flex;\r\n  flex-direction: column;\r\n  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);\n}\n.kanban-column-header[data-v-81291b30] {\r\n  font-weight: bold;\r\n  padding: 0.5rem;\r\n  background: #dfe1e6;\r\n  border-radius: 8px 8px 0 0;\r\n  text-align: center;\n}\n.kanban-column-body[data-v-81291b30] {\r\n  padding: 0.5rem;\r\n  min-height: 100px;\r\n  background: #ffffff;\r\n  border-radius: 0 0 8px 8px;\r\n  display: flex;\r\n  flex-direction: column;\r\n  gap: 0.5rem;\n}\r\n";
styleInject(css_248z$6);var _sfc_main$8 = {
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
var _hoisted_1$8 = {
  class: "kanban-column"
};
var _hoisted_2$6 = {
  class: "kanban-column-header"
};
var _hoisted_3$6 = {
  class: "d-flex justify-content-between align-items-center"
};
var _hoisted_4$6 = {
  class: "item"
};
function _sfc_render$8(_ctx, _cache, $props, $setup, $data, $options) {
  var _component_b_badge = require$$0.resolveComponent("b-badge");
  var _component_KanbanCard = require$$0.resolveComponent("KanbanCard");
  var _component_draggable = require$$0.resolveComponent("draggable");
  return require$$0.openBlock(), require$$0.createElementBlock("div", _hoisted_1$8, [require$$0.createElementVNode("div", _hoisted_2$6, [require$$0.createElementVNode("div", _hoisted_3$6, [require$$0.createElementVNode("span", null, require$$0.toDisplayString($props.column.groupLabel), 1 /* TEXT */), require$$0.createVNode(_component_b_badge, {
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
      return [require$$0.createElementVNode("div", _hoisted_4$6, [require$$0.renderSlot(_ctx.$slots, "card", {
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
var KanbanColumn = /*#__PURE__*/_export_sfc(_sfc_main$8, [['render', _sfc_render$8], ['__scopeId', "data-v-81291b30"]]);var css_248z$5 = "\n.kanban-board[data-v-0f90608c] {\r\n  display: flex;\r\n  gap: 1rem;\r\n  overflow-x: auto;\r\n  padding: 1rem;\n}\n.kanban-column[data-v-0f90608c] {\r\n  background: #f4f5f7;\r\n  border-radius: 8px;\r\n  width: 300px;\r\n  display: flex;\r\n  flex-direction: column;\r\n  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);\r\n  min-width: 300px;\n}\r\n";
styleInject(css_248z$5);var _sfc_main$7 = {
  name: 'KanbanBoard',
  components: {
    KanbanColumn: KanbanColumn
  },
  inject: ['items', 'groupedAttribute', 'columns', 'itemValue', 'getStateValue', 'getStateOptions', 'getStateBadgeVariant', 'getArrayValue', 'showItem', 'updateItem', 'removeItem', 'cardClass', 'cardHideFooter', 'onDraggableChange']
};
var _hoisted_1$7 = {
  class: "kanban-board"
};
function _sfc_render$7(_ctx, _cache, $props, $setup, $data, $options) {
  var _component_KanbanColumn = require$$0.resolveComponent("KanbanColumn");
  return require$$0.openBlock(), require$$0.createElementBlock("div", _hoisted_1$7, [(require$$0.openBlock(true), require$$0.createElementBlock(require$$0.Fragment, null, require$$0.renderList($options.items, function (column, colIndex) {
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
var KanbanBoard = /*#__PURE__*/_export_sfc(_sfc_main$7, [['render', _sfc_render$7], ['__scopeId', "data-v-0f90608c"]]);var _sfc_main$6 = {
  name: 'CrudKanban',
  components: {
    KanbanBoard: KanbanBoard
  },
  inject: {
    displayMode: {
      default: null
    },
    getDisplayMode: {
      default: null
    },
    displayModes: {
      default: function _default() {
        return {
          MODE_TABLE: 1,
          MODE_CARDS: 2,
          MODE_KANBAN: 3,
          MODE_CUSTOM: 4
        };
      }
    }
  },
  computed: {
    currentDisplayMode: function currentDisplayMode() {
      if (typeof this.getDisplayMode === 'function') {
        return this.getDisplayMode();
      }
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
var _hoisted_1$6 = {
  key: 0
};
function _sfc_render$6(_ctx, _cache, $props, $setup, $data, $options) {
  var _component_KanbanBoard = require$$0.resolveComponent("KanbanBoard");
  return $options.currentDisplayMode == $options.displayModes.MODE_KANBAN ? (require$$0.openBlock(), require$$0.createElementBlock("div", _hoisted_1$6, [require$$0.createVNode(_component_KanbanBoard, null, require$$0.createSlots({
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
var CrudKanban = /*#__PURE__*/_export_sfc(_sfc_main$6, [['render', _sfc_render$6]]);var _sfc_main$5 = {
  name: 'CrudCustom',
  inject: {
    bootstrapFactory: {
      default: null
    },
    displayMode: {
      default: null
    },
    getDisplayMode: {
      default: null
    },
    displayModes: {
      default: function _default() {
        return {
          MODE_TABLE: 1,
          MODE_CARDS: 2,
          MODE_KANBAN: 3,
          MODE_CUSTOM: 4
        };
      }
    },
    listContainerClass: {
      default: ''
    },
    listItemClass: {
      default: ''
    },
    loading: {
      default: null
    },
    firstLoad: {
      default: null
    },
    items: {
      default: function _default() {
        return [];
      }
    },
    infiniteScroll: {
      default: false
    },
    messageEmptyResults: {
      default: ''
    },
    messageLoading: {
      default: ''
    },
    itemsList: {
      default: function _default() {
        return [];
      }
    }
  },
  computed: {
    currentDisplayMode: function currentDisplayMode() {
      if (typeof this.getDisplayMode === 'function') {
        return this.getDisplayMode();
      }
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
var _hoisted_1$5 = {
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
  key: 0,
  class: "p-3"
};
function _sfc_render$5(_ctx, _cache, $props, $setup, $data, $options) {
  var _component_b_spinner = require$$0.resolveComponent("b-spinner");
  return $options.currentDisplayMode == $options.displayModes.MODE_CUSTOM ? (require$$0.openBlock(), require$$0.createElementBlock("div", _hoisted_1$5, [require$$0.createElementVNode("div", {
    class: require$$0.normalizeClass($options.listContainerClass)
  }, [require$$0.createCommentVNode(" Spinner durante la carga inicial "), $options.loadingValue || !$options.firstLoadValue ? (require$$0.openBlock(), require$$0.createElementBlock("div", _hoisted_2$5, [require$$0.createVNode(_component_b_spinner, {
    variant: "primary",
    label: "Cargando..."
  }), require$$0.createElementVNode("p", _hoisted_3$5, require$$0.toDisplayString($options.messageLoading), 1 /* TEXT */)])) : (require$$0.openBlock(), require$$0.createElementBlock(require$$0.Fragment, {
    key: 1
  }, [require$$0.createCommentVNode(" Contenido con datos "), $options.firstLoadValue && $options.itemsList && $options.itemsList.length == 0 && !$options.infiniteScroll ? (require$$0.openBlock(), require$$0.createElementBlock("p", _hoisted_4$5, require$$0.toDisplayString($options.messageEmptyResults), 1 /* TEXT */)) : require$$0.createCommentVNode("v-if", true), (require$$0.openBlock(true), require$$0.createElementBlock(require$$0.Fragment, null, require$$0.renderList($options.itemsList, function (item, index) {
    return require$$0.openBlock(), require$$0.createElementBlock("div", {
      class: require$$0.normalizeClass($options.listItemClass),
      key: index
    }, [require$$0.renderSlot(_ctx.$slots, "card", {
      item: item
    })], 2 /* CLASS */);
  }), 128 /* KEYED_FRAGMENT */))], 64 /* STABLE_FRAGMENT */))], 2 /* CLASS */)])) : require$$0.createCommentVNode("v-if", true);
}
var CrudCustom = /*#__PURE__*/_export_sfc(_sfc_main$5, [['render', _sfc_render$5]]);var css_248z$4 = "\n.export-format-options[data-v-267d6a56] {\r\n  display: flex;\r\n  gap: 1rem;\r\n  justify-content: center;\r\n  flex-wrap: wrap;\n}\n.export-format-radio[data-v-267d6a56] {\r\n  flex: 1;\r\n  min-width: 150px;\r\n  padding: 1rem;\r\n  border: 2px solid #dee2e6;\r\n  border-radius: 0.5rem;\r\n  cursor: pointer;\r\n  transition: all 0.3s ease;\r\n  text-align: center;\r\n  display: flex;\r\n  align-items: center;\r\n  justify-content: center;\r\n  background-color: #fff;\n}\n.export-format-radio[data-v-267d6a56]:hover {\r\n  border-color: #007bff;\r\n  background-color: #f8f9fa;\r\n  transform: translateY(-2px);\r\n  box-shadow: 0 2px 8px rgba(0, 123, 255, 0.2);\n}\n.export-format-radio[data-v-267d6a56] .custom-control-input:checked ~ .custom-control-label {\r\n  color: #007bff;\r\n  font-weight: 600;\n}\n.export-format-radio[data-v-267d6a56] .custom-control-input:checked ~ .custom-control-label::before {\r\n  border-color: #007bff;\r\n  background-color: #007bff;\n}\n.export-format-radio[data-v-267d6a56] .custom-control-label {\r\n  display: flex;\r\n  align-items: center;\r\n  justify-content: center;\r\n  width: 100%;\r\n  cursor: pointer;\r\n  font-size: 1rem;\n}\n.export-format-radio[data-v-267d6a56] .custom-control-label::before {\r\n  margin-right: 0.5rem;\n}\n.export-format-radio[data-v-267d6a56] svg {\r\n  font-size: 1.5rem;\r\n  color: #495057;\n}\n.export-format-radio[data-v-267d6a56] .custom-control-input:checked ~ .custom-control-label svg {\r\n  color: #007bff;\n}\r\n";
styleInject(css_248z$4);var _sfc_main$4 = {
  name: 'CrudModals',
  inject: ['bootstrapFactory', 'modelName', 'title', 'loading', 'validate', 'item', 'getItem', 'messageSave', 'showImport', 'showExport', 'fileImport', 'selectedItems', 'exportFormat', 'saveItem', 'importItems', 'exportItems', 'closeUi', 'uiMode'],
  computed: {
    formModalId: function formModalId() {
      return 'modal-form-item-' + this.modelName;
    },
    formId: function formId() {
      return 'crud-form-' + this.modelName;
    },
    reactiveItem: function reactiveItem() {
      if (this.getItem && typeof this.getItem === 'function') {
        try {
          return this.getItem();
        } catch (e) {
          console.debug('Error getting item from getItem function:', e);
          return this.item || {};
        }
      }
      return this.item || {};
    },
    loadingValue: function loadingValue() {
      return this.loading && this.loading.value !== undefined ? this.loading.value : this.loading;
    },
    exportFormatValue: {
      get: function get() {
        return this.exportFormat && this.exportFormat.value !== undefined ? this.exportFormat.value : this.exportFormat;
      },
      set: function set(value) {
        if (this.exportFormat && this.exportFormat.value !== undefined) {
          this.exportFormat.value = value;
        }
      }
    },
    footerSlotProps: function footerSlotProps() {
      return {
        save: this.saveItem,
        loading: this.loadingValue,
        hide: this.hideFormModal,
        messageSave: this.messageSave,
        item: this.reactiveItem,
        formId: this.formId
      };
    }
  },
  methods: {
    hideFormModal: function hideFormModal() {
      var _this$$refs$formModal, _this$$refs$formModal2;
      if (typeof this.closeUi === 'function') {
        this.closeUi();
        return;
      }
      (_this$$refs$formModal = this.$refs.formModal) === null || _this$$refs$formModal === void 0 || (_this$$refs$formModal2 = _this$$refs$formModal.hide) === null || _this$$refs$formModal2 === void 0 || _this$$refs$formModal2.call(_this$$refs$formModal);
    },
    hideShowModal: function hideShowModal() {
      var _this$$refs$showModal, _this$$refs$showModal2;
      if (typeof this.closeUi === 'function') {
        this.closeUi();
        return;
      }
      (_this$$refs$showModal = this.$refs.showModal) === null || _this$$refs$showModal === void 0 || (_this$$refs$showModal2 = _this$$refs$showModal.hide) === null || _this$$refs$showModal2 === void 0 || _this$$refs$showModal2.call(_this$$refs$showModal);
    },
    onFormHidden: function onFormHidden() {
      var mode = this.uiMode && this.uiMode.value !== undefined ? this.uiMode.value : this.uiMode;
      if (mode === 'create' || mode === 'edit') {
        var _this$closeUi;
        (_this$closeUi = this.closeUi) === null || _this$closeUi === void 0 || _this$closeUi.call(this);
      }
    },
    onShowHidden: function onShowHidden() {
      var mode = this.uiMode && this.uiMode.value !== undefined ? this.uiMode.value : this.uiMode;
      if (mode === 'show') {
        var _this$closeUi2;
        (_this$closeUi2 = this.closeUi) === null || _this$closeUi2 === void 0 || _this$closeUi2.call(this);
      }
    },
    hideImportModal: function hideImportModal() {
      var _this$$refs$modalImp, _this$$refs$modalImp$;
      (_this$$refs$modalImp = this.$refs['modal-import']) === null || _this$$refs$modalImp === void 0 || (_this$$refs$modalImp$ = _this$$refs$modalImp.hide) === null || _this$$refs$modalImp$ === void 0 || _this$$refs$modalImp$.call(_this$$refs$modalImp);
    },
    hideExportModal: function hideExportModal() {
      var _this$$refs$modalExp, _this$$refs$modalExp$;
      (_this$$refs$modalExp = this.$refs['modal-export']) === null || _this$$refs$modalExp === void 0 || (_this$$refs$modalExp$ = _this$$refs$modalExp.hide) === null || _this$$refs$modalExp$ === void 0 || _this$$refs$modalExp$.call(_this$$refs$modalExp);
    },
    onFooterSaveClick: function onFooterSaveClick(event) {
      // Si el botón está fuera del form (p.ej. browsers sin soporte form=), guardar igual.
      if (!this.validate) {
        event.preventDefault();
        this.saveItem();
      }
    }
  }
};
var _hoisted_1$4 = ["id"];
var _hoisted_2$4 = ["id"];
var _hoisted_3$4 = {
  key: 0
};
var _hoisted_4$4 = {
  key: 1
};
var _hoisted_5$4 = {
  class: "export-format-options"
};
function _sfc_render$4(_ctx, _cache, $props, $setup, $data, $options) {
  var _component_b_form_input = require$$0.resolveComponent("b-form-input");
  var _component_b_form_group = require$$0.resolveComponent("b-form-group");
  var _component_b_overlay = require$$0.resolveComponent("b-overlay");
  var _component_b_button = require$$0.resolveComponent("b-button");
  var _component_b_spinner = require$$0.resolveComponent("b-spinner");
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
    ref: "formModal",
    id: $options.formModalId,
    size: "xl",
    title: $options.title,
    onHidden: $options.onFormHidden
  }, {
    "modal-footer": require$$0.withCtx(function () {
      return [require$$0.renderSlot(_ctx.$slots, "modal-footer", require$$0.normalizeProps(require$$0.guardReactiveProps($options.footerSlotProps)), function () {
        return [require$$0.renderSlot(_ctx.$slots, "modal-footer-prepend", require$$0.normalizeProps(require$$0.guardReactiveProps($options.footerSlotProps)), undefined, true), require$$0.createVNode(_component_b_button, {
          variant: "secondary",
          onClick: $options.hideFormModal
        }, {
          default: require$$0.withCtx(function () {
            return _toConsumableArray$1(_cache[8] || (_cache[8] = [require$$0.createTextVNode(" Cancelar ", -1 /* CACHED */)]));
          }),
          _: 1 /* STABLE */
        }, 8 /* PROPS */, ["onClick"]), require$$0.createVNode(_component_b_button, {
          type: "submit",
          form: $options.formId,
          variant: "success",
          disabled: $options.loadingValue,
          onClick: $options.onFooterSaveClick
        }, {
          default: require$$0.withCtx(function () {
            return [$options.loadingValue ? (require$$0.openBlock(), require$$0.createBlock(_component_b_spinner, {
              key: 0,
              small: ""
            })) : require$$0.createCommentVNode("v-if", true), require$$0.createTextVNode(require$$0.toDisplayString($options.messageSave), 1 /* TEXT */)];
          }),
          _: 1 /* STABLE */
        }, 8 /* PROPS */, ["form", "disabled", "onClick"]), require$$0.renderSlot(_ctx.$slots, "modal-footer-append", require$$0.normalizeProps(require$$0.guardReactiveProps($options.footerSlotProps)), undefined, true)];
      }, true)];
    }),
    default: require$$0.withCtx(function () {
      return [require$$0.createVNode(_component_b_overlay, {
        show: $options.loadingValue,
        rounded: "sm"
      }, {
        default: require$$0.withCtx(function () {
          return [$options.validate ? (require$$0.openBlock(), require$$0.createElementBlock("form", {
            key: 0,
            id: $options.formId,
            onSubmit: _cache[1] || (_cache[1] = require$$0.withModifiers(function () {
              return $options.saveItem && $options.saveItem.apply($options, arguments);
            }, ["prevent"]))
          }, [$options.reactiveItem ? require$$0.renderSlot(_ctx.$slots, "form", {
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
          }, true, 0) : require$$0.createCommentVNode("v-if", true)], 40 /* PROPS, NEED_HYDRATION */, _hoisted_1$4)) : (require$$0.openBlock(), require$$0.createElementBlock("form", {
            key: 1,
            id: $options.formId,
            onSubmit: _cache[2] || (_cache[2] = require$$0.withModifiers(function () {
              return $options.saveItem && $options.saveItem.apply($options, arguments);
            }, ["prevent"]))
          }, [$options.reactiveItem ? require$$0.renderSlot(_ctx.$slots, "form", {
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
          }, true, 0) : require$$0.createCommentVNode("v-if", true)], 40 /* PROPS, NEED_HYDRATION */, _hoisted_2$4))];
        }),
        _: 3 /* FORWARDED */
      }, 8 /* PROPS */, ["show"])];
    }),
    _: 3 /* FORWARDED */
  }, 8 /* PROPS */, ["id", "title", "onHidden"]), require$$0.createCommentVNode(" Modal de visualización "), require$$0.createVNode(_component_b_modal, {
    ref: "showModal",
    id: 'modal-show-item-' + $options.modelName,
    size: "xl",
    title: $options.title,
    onHidden: $options.onShowHidden
  }, {
    "modal-footer": require$$0.withCtx(function () {
      return [require$$0.renderSlot(_ctx.$slots, "show-modal-footer", require$$0.normalizeProps(require$$0.guardReactiveProps({
        hide: $options.hideShowModal,
        item: $options.reactiveItem
      })), function () {
        return [require$$0.createVNode(_component_b_button, {
          variant: "secondary",
          onClick: $options.hideShowModal
        }, {
          default: require$$0.withCtx(function () {
            return _toConsumableArray$1(_cache[9] || (_cache[9] = [require$$0.createTextVNode(" Cerrar ", -1 /* CACHED */)]));
          }),
          _: 1 /* STABLE */
        }, 8 /* PROPS */, ["onClick"])];
      }, true)];
    }),
    default: require$$0.withCtx(function () {
      return [$options.reactiveItem ? require$$0.renderSlot(_ctx.$slots, "show", {
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
      }, true, 0) : require$$0.createCommentVNode("v-if", true)];
    }),
    _: 3 /* FORWARDED */
  }, 8 /* PROPS */, ["id", "title", "onHidden"]), require$$0.createCommentVNode(" Modal de importación "), $options.showImport ? (require$$0.openBlock(), require$$0.createBlock(_component_b_modal, {
    key: 0,
    ref: "modal-import",
    title: "Importar"
  }, {
    "modal-footer": require$$0.withCtx(function () {
      return [require$$0.renderSlot(_ctx.$slots, "import-modal-footer", require$$0.normalizeProps(require$$0.guardReactiveProps({
        importItems: $options.importItems,
        loading: $options.loadingValue,
        hide: $options.hideImportModal
      })), function () {
        return [require$$0.createVNode(_component_b_button, {
          variant: "secondary",
          onClick: $options.hideImportModal
        }, {
          default: require$$0.withCtx(function () {
            return _toConsumableArray$1(_cache[10] || (_cache[10] = [require$$0.createTextVNode(" Cancelar ", -1 /* CACHED */)]));
          }),
          _: 1 /* STABLE */
        }, 8 /* PROPS */, ["onClick"]), require$$0.createVNode(_component_b_button, {
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
        }, 8 /* PROPS */, ["disabled"])];
      }, true)];
    }),
    default: require$$0.withCtx(function () {
      return [$options.item ? require$$0.renderSlot(_ctx.$slots, "import", {
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
            }, null, 8 /* PROPS */, ["modelValue", "state"])];
          }),
          _: 1 /* STABLE */
        }, 8 /* PROPS */, ["show"])];
      }, true, 0) : require$$0.createCommentVNode("v-if", true)];
    }),
    _: 3 /* FORWARDED */
  }, 512 /* NEED_PATCH */)) : require$$0.createCommentVNode("v-if", true), require$$0.createCommentVNode(" Modal de exportación "), $options.showExport ? (require$$0.openBlock(), require$$0.createBlock(_component_b_modal, {
    key: 1,
    ref: "modal-export",
    title: "Exportar"
  }, {
    "modal-footer": require$$0.withCtx(function () {
      return [require$$0.renderSlot(_ctx.$slots, "export-modal-footer", require$$0.normalizeProps(require$$0.guardReactiveProps({
        exportItems: $options.exportItems,
        loading: $options.loadingValue,
        hide: $options.hideExportModal
      })), function () {
        return [require$$0.createVNode(_component_b_button, {
          variant: "secondary",
          onClick: $options.hideExportModal
        }, {
          default: require$$0.withCtx(function () {
            return _toConsumableArray$1(_cache[13] || (_cache[13] = [require$$0.createTextVNode(" Cancelar ", -1 /* CACHED */)]));
          }),
          _: 1 /* STABLE */
        }, 8 /* PROPS */, ["onClick"]), require$$0.createVNode(_component_b_button, {
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
        }, 8 /* PROPS */, ["disabled"])];
      }, true)];
    }),
    default: require$$0.withCtx(function () {
      return [$options.item ? require$$0.renderSlot(_ctx.$slots, "export", {
        item: $options.item
      }, function () {
        return [require$$0.createVNode(_component_b_overlay, {
          show: $options.loadingValue,
          rounded: "sm"
        }, {
          default: require$$0.withCtx(function () {
            return [$options.selectedItems.length ? (require$$0.openBlock(), require$$0.createElementBlock("p", _hoisted_3$4, "Se exportará " + require$$0.toDisplayString($options.selectedItems.length) + " elementos.", 1 /* TEXT */)) : (require$$0.openBlock(), require$$0.createElementBlock("p", _hoisted_4$4, "Se exportará la consulta actual.")), require$$0.createVNode(_component_b_form_group, {
              label: "Seleccione el formato de exportación:",
              class: "mt-3"
            }, {
              default: require$$0.withCtx(function () {
                return [require$$0.createElementVNode("div", _hoisted_5$4, [require$$0.createVNode(_component_b_form_radio, {
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
                    }), _cache[11] || (_cache[11] = require$$0.createTextVNode(" JSON ", -1 /* CACHED */))];
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
                    }), _cache[12] || (_cache[12] = require$$0.createTextVNode(" XLSX ", -1 /* CACHED */))];
                  }),
                  _: 1 /* STABLE */
                }, 8 /* PROPS */, ["modelValue"])])];
              }),
              _: 1 /* STABLE */
            })];
          }),
          _: 1 /* STABLE */
        }, 8 /* PROPS */, ["show"])];
      }, true, 0) : require$$0.createCommentVNode("v-if", true)];
    }),
    _: 3 /* FORWARDED */
  }, 512 /* NEED_PATCH */)) : require$$0.createCommentVNode("v-if", true)]);
}
var CrudModals = /*#__PURE__*/_export_sfc(_sfc_main$4, [['render', _sfc_render$4], ['__scopeId', "data-v-267d6a56"]]);var css_248z$3 = "\n.paginator-container[data-v-3be00b06] {\r\n  display: grid;\r\n  grid-template-columns: 1fr auto 1fr;\r\n  align-items: center;\r\n  width: 100%;\r\n  margin-top: 0;\r\n  gap: 0.75rem;\n}\n.paginator-data[data-v-3be00b06] {\r\n  display: flex;\r\n  flex-wrap: nowrap;\r\n  justify-content: flex-start;\r\n  align-items: center;\r\n  gap: 0.5rem;\r\n  font-size: 0.875rem;\r\n  grid-column: 1;\n}\n.paginator-badge[data-v-3be00b06] {\r\n  display: inline-flex;\r\n  align-items: center;\r\n  gap: 0.25rem;\r\n  padding: 0.375rem 0.625rem;\r\n  background-color: #f8f9fa;\r\n  border: 1px solid #dee2e6;\r\n  border-radius: 0.375rem;\r\n  color: #495057;\r\n  transition: all 0.2s ease;\n}\n.paginator-badge[data-v-3be00b06]:hover {\r\n  background-color: #e9ecef;\r\n  border-color: #ced4da;\n}\n.paginator-label[data-v-3be00b06] {\r\n  font-weight: 500;\r\n  color: #6c757d;\n}\n.paginator-value[data-v-3be00b06] {\r\n  font-weight: 600;\r\n  color: #212529;\n}\n.paginator-dropdown[data-v-3be00b06] {\r\n  font-size: 0.875rem;\n}\n.paginator-dropdown[data-v-3be00b06] .btn {\r\n  padding: 0.375rem 0.625rem;\r\n  font-size: 0.875rem;\r\n  background-color: #f8f9fa;\r\n  border: 1px solid #dee2e6;\r\n  color: #495057;\n}\n.paginator-dropdown[data-v-3be00b06] .btn:hover {\r\n  background-color: #e9ecef;\r\n  border-color: #ced4da;\n}\n.crud-paginator[data-v-3be00b06] {\r\n  display: flex;\r\n  justify-content: center;\r\n  align-items: center;\r\n  grid-column: 2;\n}\n.paginator-badge-dropdown[data-v-3be00b06] {\r\n  z-index: 1;\r\n  position: relative;\n}\n.paginator-badge-dropdown[data-v-3be00b06] .btn {\r\n  padding: 0.375rem 0.625rem;\r\n  font-size: 0.875rem;\r\n  background-color: #f8f9fa;\r\n  border: 1px solid #dee2e6;\r\n  color: #495057;\r\n  display: inline-flex;\r\n  align-items: center;\r\n  gap: 0.25rem;\n}\n.paginator-badge-dropdown[data-v-3be00b06] .btn:hover {\r\n  background-color: #e9ecef;\r\n  border-color: #ced4da;\n}\n.infinite-loading-trigger[data-v-3be00b06] {\r\n  min-height: 50px;\r\n  margin-top: 1rem;\n}\r\n";
styleInject(css_248z$3);var _sfc_main$3 = {
  name: 'CrudPagination',
  components: {
    CrudSkeleton: CrudSkeleton,
    CrudEmptyState: CrudEmptyState
  },
  inject: ['bootstrapFactory', 'infiniteScroll', 'infiniteScrollKey', 'messageLoading', 'messageNoMore', 'messageEmptyResults', 'loading', 'firstLoad', 'items', 'pagination', 'selectedItems', 'showPaginator', 'infiniteHandler', 'onPaginationChange', 'onPerPageChange', 'clearSelection'],
  data: function data() {
    return {
      perPageOptions: [10, 20, 50, 100],
      observer: null
    };
  },
  computed: {
    selectedItemsCount: function selectedItemsCount() {
      return this.selectedItems ? this.selectedItems.length : 0;
    },
    loadingValue: function loadingValue() {
      return this.loading && this.loading.value !== undefined ? this.loading.value : this.loading;
    },
    firstLoadValue: function firstLoadValue() {
      return this.firstLoad && this.firstLoad.value !== undefined ? this.firstLoad.value : this.firstLoad;
    },
    isInitialLoading: function isInitialLoading() {
      return this.loadingValue && !this.firstLoadValue;
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
      } else if (this.observer) {
        this.observer.disconnect();
        this.observer = null;
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
      if (this.observer) {
        this.observer.disconnect();
        this.observer = null;
      }
      this.$nextTick(function () {
        var trigger = _this3.$refs.infiniteLoadingTrigger;
        if (!trigger) return;
        _this3.observer = new IntersectionObserver(function (entries) {
          entries.forEach(function (entry) {
            if (entry.isIntersecting && !_this3.loadingValue && _this3.hasMorePages) {
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
var _hoisted_1$3 = {
  key: 0,
  class: "text-center p-3"
};
var _hoisted_2$3 = {
  class: "mt-2"
};
var _hoisted_3$3 = {
  key: 2,
  class: "text-center p-3 text-muted"
};
var _hoisted_4$3 = {
  key: 2,
  class: "paginator-container"
};
var _hoisted_5$3 = {
  class: "paginator-data"
};
var _hoisted_6$3 = {
  class: "paginator-badge"
};
var _hoisted_7$2 = {
  class: "paginator-value"
};
var _hoisted_8$2 = {
  key: 0,
  class: "crud-paginator"
};
function _sfc_render$3(_ctx, _cache, $props, $setup, $data, $options) {
  var _component_b_spinner = require$$0.resolveComponent("b-spinner");
  var _component_CrudEmptyState = require$$0.resolveComponent("CrudEmptyState");
  var _component_CrudSkeleton = require$$0.resolveComponent("CrudSkeleton");
  var _component_b_dropdown_item = require$$0.resolveComponent("b-dropdown-item");
  var _component_b_dropdown = require$$0.resolveComponent("b-dropdown");
  var _component_b_icon_x_circle = require$$0.resolveComponent("b-icon-x-circle");
  var _component_b_pagination = require$$0.resolveComponent("b-pagination");
  return require$$0.openBlock(), require$$0.createElementBlock("div", null, [$options.infiniteScroll ? (require$$0.openBlock(), require$$0.createElementBlock("div", {
    ref: "infiniteLoadingTrigger",
    class: "infinite-loading-trigger",
    key: $options.infiniteScrollKey
  }, [$options.loadingValue ? (require$$0.openBlock(), require$$0.createElementBlock("div", _hoisted_1$3, [require$$0.createVNode(_component_b_spinner, {
    variant: "primary",
    label: "Cargando..."
  }), require$$0.createElementVNode("div", _hoisted_2$3, require$$0.toDisplayString($options.messageLoading), 1 /* TEXT */)])) : !$options.hasMorePages && $options.firstLoadValue && $options.items.length == 0 ? (require$$0.openBlock(), require$$0.createBlock(_component_CrudEmptyState, {
    key: 1,
    message: $options.messageEmptyResults,
    icon: "inbox"
  }, null, 8 /* PROPS */, ["message"])) : !$options.hasMorePages && $options.firstLoadValue ? (require$$0.openBlock(), require$$0.createElementBlock("div", _hoisted_3$3, require$$0.toDisplayString($options.messageNoMore), 1 /* TEXT */)) : require$$0.createCommentVNode("v-if", true)])) : require$$0.createCommentVNode("v-if", true), !$options.infiniteScroll && $options.isInitialLoading ? (require$$0.openBlock(), require$$0.createBlock(_component_CrudSkeleton, {
    key: 1,
    "show-table": false,
    "show-paginator": ""
  })) : !$options.infiniteScroll && $options.firstLoadValue ? (require$$0.openBlock(), require$$0.createElementBlock("div", _hoisted_4$3, [require$$0.createElementVNode("div", _hoisted_5$3, [require$$0.createElementVNode("span", _hoisted_6$3, [_cache[2] || (_cache[2] = require$$0.createElementVNode("span", {
    class: "paginator-label"
  }, "Filas:", -1 /* CACHED */)), require$$0.createElementVNode("span", _hoisted_7$2, require$$0.toDisplayString($options.pagination.total), 1 /* TEXT */)]), require$$0.createVNode(_component_b_dropdown, {
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
  }, 8 /* PROPS */, ["text"])) : require$$0.createCommentVNode("v-if", true)]), $options.showPaginator && $options.pagination.total > 0 ? (require$$0.openBlock(), require$$0.createElementBlock("div", _hoisted_8$2, [require$$0.createVNode(_component_b_pagination, {
    modelValue: $options.pagination.current_page,
    "onUpdate:modelValue": _cache[0] || (_cache[0] = function ($event) {
      return $options.pagination.current_page = $event;
    }),
    "total-rows": $options.pagination.total,
    "per-page": $options.pagination.per_page,
    "prev-text": "Anterior",
    "next-text": "Siguiente",
    onChange: _cache[1] || (_cache[1] = function ($event) {
      return $options.onPaginationChange($event);
    })
  }, null, 8 /* PROPS */, ["modelValue", "total-rows", "per-page"])])) : require$$0.createCommentVNode("v-if", true)])) : require$$0.createCommentVNode("v-if", true)]);
}
var CrudPagination = /*#__PURE__*/_export_sfc(_sfc_main$3, [['render', _sfc_render$3], ['__scopeId', "data-v-3be00b06"]]);var css_248z$2 = "\n.crud-detail-view__header[data-v-daa0a46b] {\r\n  display: flex;\r\n  justify-content: space-between;\r\n  align-items: flex-start;\r\n  gap: 1rem;\r\n  margin-bottom: 1rem;\n}\n.crud-detail-view__body[data-v-daa0a46b] {\r\n  border: 0;\n}\r\n";
styleInject(css_248z$2);var _sfc_main$2 = {
  name: 'CrudDetailView',
  inject: {
    modelName: {
      default: ''
    },
    title: {
      default: ''
    },
    loading: {
      default: null
    },
    item: {
      default: function _default() {
        return {};
      }
    },
    getItem: {
      default: null
    },
    messageSave: {
      default: 'Guardar'
    },
    saveItem: {
      default: function _default() {}
    },
    closeUi: {
      default: function _default() {}
    },
    updateItem: {
      default: function _default() {}
    },
    uiMode: {
      default: null
    }
  },
  computed: {
    mode: function mode() {
      if (this.uiMode && this.uiMode.value !== undefined) {
        return this.uiMode.value;
      }
      return this.uiMode;
    },
    isOpen: function isOpen() {
      return !!this.mode;
    },
    modeLabel: function modeLabel() {
      if (this.mode === 'create') return 'Crear';
      if (this.mode === 'edit') return 'Editar';
      if (this.mode === 'show') return 'Detalle';
      return '';
    },
    formId: function formId() {
      return 'crud-form-page-' + this.modelName;
    },
    reactiveItem: function reactiveItem() {
      if (this.getItem && typeof this.getItem === 'function') {
        try {
          return this.getItem() || {};
        } catch (e) {
          return this.item || {};
        }
      }
      return this.item || {};
    },
    loadingValue: function loadingValue() {
      return this.loading && this.loading.value !== undefined ? this.loading.value : this.loading;
    },
    footerSlotProps: function footerSlotProps() {
      return {
        save: this.saveItem,
        loading: this.loadingValue,
        hide: this.closeUi,
        messageSave: this.messageSave,
        item: this.reactiveItem,
        formId: this.formId
      };
    }
  }
};
var _hoisted_1$2 = {
  key: 0,
  class: "crud-detail-view"
};
var _hoisted_2$2 = {
  class: "crud-detail-view__header"
};
var _hoisted_3$2 = {
  class: "mb-1"
};
var _hoisted_4$2 = {
  class: "text-muted small"
};
var _hoisted_5$2 = {
  class: "d-flex gap-2"
};
var _hoisted_6$2 = {
  class: "crud-detail-view__body card shadow-sm"
};
var _hoisted_7$1 = {
  class: "card-body"
};
var _hoisted_8$1 = ["id"];
var _hoisted_9$1 = {
  key: 0,
  class: "card-footer d-flex justify-content-end gap-2"
};
var _hoisted_10 = {
  key: 1,
  class: "card-footer d-flex justify-content-end gap-2"
};
function _sfc_render$2(_ctx, _cache, $props, $setup, $data, $options) {
  var _$options$item;
  var _component_b_button = require$$0.resolveComponent("b-button");
  var _component_b_col = require$$0.resolveComponent("b-col");
  var _component_b_row = require$$0.resolveComponent("b-row");
  var _component_b_list_group_item = require$$0.resolveComponent("b-list-group-item");
  var _component_b_list_group = require$$0.resolveComponent("b-list-group");
  var _component_b_form_input = require$$0.resolveComponent("b-form-input");
  var _component_b_form_group = require$$0.resolveComponent("b-form-group");
  var _component_b_spinner = require$$0.resolveComponent("b-spinner");
  var _component_b_overlay = require$$0.resolveComponent("b-overlay");
  return $options.isOpen ? (require$$0.openBlock(), require$$0.createElementBlock("div", _hoisted_1$2, [require$$0.createElementVNode("div", _hoisted_2$2, [require$$0.createElementVNode("div", null, [require$$0.createElementVNode("h4", _hoisted_3$2, require$$0.toDisplayString($options.title), 1 /* TEXT */), require$$0.createElementVNode("div", _hoisted_4$2, require$$0.toDisplayString($options.modeLabel), 1 /* TEXT */)]), require$$0.createElementVNode("div", _hoisted_5$2, [require$$0.createVNode(_component_b_button, {
    variant: "outline-secondary",
    onClick: _cache[0] || (_cache[0] = function ($event) {
      return $options.closeUi();
    })
  }, {
    default: require$$0.withCtx(function () {
      return _toConsumableArray$1(_cache[5] || (_cache[5] = [require$$0.createTextVNode(" Volver ", -1 /* CACHED */)]));
    }),
    _: 1 /* STABLE */
  }), $options.mode === 'show' && (_$options$item = $options.item) !== null && _$options$item !== void 0 && _$options$item.id ? (require$$0.openBlock(), require$$0.createBlock(_component_b_button, {
    key: 0,
    variant: "secondary",
    onClick: _cache[1] || (_cache[1] = function ($event) {
      return $options.updateItem($options.item.id);
    })
  }, {
    default: require$$0.withCtx(function () {
      return _toConsumableArray$1(_cache[6] || (_cache[6] = [require$$0.createTextVNode(" Editar ", -1 /* CACHED */)]));
    }),
    _: 1 /* STABLE */
  })) : require$$0.createCommentVNode("v-if", true)])]), require$$0.createVNode(_component_b_overlay, {
    show: $options.loadingValue,
    rounded: "sm"
  }, {
    default: require$$0.withCtx(function () {
      return [require$$0.createElementVNode("div", _hoisted_6$2, [require$$0.createElementVNode("div", _hoisted_7$1, [$options.mode === 'show' ? require$$0.renderSlot(_ctx.$slots, "show", {
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
      }, true, 0) : (require$$0.openBlock(), require$$0.createElementBlock("form", {
        key: 1,
        id: $options.formId,
        onSubmit: _cache[2] || (_cache[2] = require$$0.withModifiers(function () {
          return $options.saveItem && $options.saveItem.apply($options, arguments);
        }, ["prevent"]))
      }, [require$$0.renderSlot(_ctx.$slots, "form", {
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
                type: "text"
              }, null, 8 /* PROPS */, ["modelValue", "onUpdate:modelValue"])];
            }),
            _: 2 /* DYNAMIC */
          }, 1032 /* PROPS, DYNAMIC_SLOTS */, ["label"]);
        }), 128 /* KEYED_FRAGMENT */))];
      }, true)], 40 /* PROPS, NEED_HYDRATION */, _hoisted_8$1))]), $options.mode !== 'show' ? (require$$0.openBlock(), require$$0.createElementBlock("div", _hoisted_9$1, [require$$0.renderSlot(_ctx.$slots, "modal-footer", require$$0.normalizeProps(require$$0.guardReactiveProps($options.footerSlotProps)), function () {
        return [require$$0.createVNode(_component_b_button, {
          variant: "secondary",
          onClick: _cache[3] || (_cache[3] = function ($event) {
            return $options.closeUi();
          })
        }, {
          default: require$$0.withCtx(function () {
            return _toConsumableArray$1(_cache[7] || (_cache[7] = [require$$0.createTextVNode("Cancelar", -1 /* CACHED */)]));
          }),
          _: 1 /* STABLE */
        }), require$$0.createVNode(_component_b_button, {
          type: "submit",
          form: $options.formId,
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
        }, 8 /* PROPS */, ["form", "disabled"])];
      }, true)])) : (require$$0.openBlock(), require$$0.createElementBlock("div", _hoisted_10, [require$$0.renderSlot(_ctx.$slots, "show-modal-footer", require$$0.normalizeProps(require$$0.guardReactiveProps({
        hide: $options.closeUi,
        item: $options.reactiveItem
      })), function () {
        return [require$$0.createVNode(_component_b_button, {
          variant: "secondary",
          onClick: _cache[4] || (_cache[4] = function ($event) {
            return $options.closeUi();
          })
        }, {
          default: require$$0.withCtx(function () {
            return _toConsumableArray$1(_cache[8] || (_cache[8] = [require$$0.createTextVNode("Cerrar", -1 /* CACHED */)]));
          }),
          _: 1 /* STABLE */
        })];
      }, true)]))])];
    }),
    _: 3 /* FORWARDED */
  }, 8 /* PROPS */, ["show"])])) : require$$0.createCommentVNode("v-if", true);
}
var CrudDetailView = /*#__PURE__*/_export_sfc(_sfc_main$2, [['render', _sfc_render$2], ['__scopeId', "data-v-daa0a46b"]]);dayjs.extend(localizedFormat);
var crudData = {
  data: function data() {
    return {
      crudUuid: "",
      dayjs: dayjs,
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
      searchReactive: {
        value: ''
      },
      displaySearchReactive: {
        value: false
      },
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
      fetchSeq: 0,
      principalSort: false,
      exportFormatReactive: {
        value: 'JSON'
      },
      // Objeto reactivo para exportFormat
      fileImport: null,
      activeQuickFilterKey: null,
      activeQuickFilterKeyReactive: {
        value: null
      }
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
      return [].concat(_toConsumableArray$1(this.filters), _toConsumableArray$1(this.filter), _toConsumableArray$1(this.quickFilterApplied), _toConsumableArray$1(this.internalFilter), _toConsumableArray$1(this.sortFilter), _toConsumableArray$1(this.groupFilter));
    },
    quickFilterApplied: function quickFilterApplied() {
      this.forceRecomputeCounter;
      var item = this.findQuickFilterItem(this.activeQuickFilterKey);
      return this.resolveQuickFilterPayload(item);
    },
    sortFilter: function sortFilter() {
      if (!this.showPrincipalSortBtn) {
        return [];
      }
      // No mezclar sort principal con sort de columna (pisa el ORDER BY)
      var hasColumnSort = (this.internalFilters || []).some(function (f) {
        return f && f.column && String(f.column).endsWith('_sort') && f.value !== null && f.value !== undefined && f.value !== '';
      });
      if (hasColumnSort) {
        return [];
      }
      if (this.principalSort) {
        return [[this.principalSortColumn, 'SORTASC', '']];
      }
      return [[this.principalSortColumn, 'SORTDESC', '']];
    },
    activeFilters: function activeFilters() {
      var _this = this;
      this.forceRecomputeCounter;
      var result = [];
      (this.columns || []).forEach(function (column) {
        if (!_this.isColumnHasFilter(column)) return;
        if (_this.isRangeFilterColumn(column)) {
          var from = _this.internalFilterByProp(column.prop + '_from');
          var to = _this.internalFilterByProp(column.prop + '_to');
          var fromVal = from ? from.value : null;
          var toVal = to ? to.value : null;
          if (_this.hasFilterValue(fromVal) || _this.hasFilterValue(toVal)) {
            result.push({
              key: column.prop,
              label: column.label || column.prop,
              displayValue: _this.formatRangeDisplayValue(column, fromVal, toVal)
            });
          }
        } else {
          var f = _this.internalFilterByProp(column.prop);
          if (f && _this.hasFilterValue(f.value)) {
            result.push({
              key: column.prop,
              label: column.label || column.prop,
              displayValue: _this.formatFilterDisplayValue(column, f.value)
            });
          }
        }
      });
      return result;
    },
    groupFilter: function groupFilter() {
      if (this.grouped && this.groupedAttribute) {
        return [['', 'GROUPBY', this.groupedAttribute]];
      } else {
        return [];
      }
    },
    internalFilter: function internalFilter() {
      var _this2 = this;
      var filter = [];
      this.forceRecomputeCounter;
      var entries = _toConsumableArray$1(this.internalFilters).sort(function (a, b) {
        var aSort = a.column.endsWith('_sort');
        var bSort = b.column.endsWith('_sort');
        if (aSort && bSort) {
          return (a.sortPriority || 999) - (b.sortPriority || 999);
        }
        return 0;
      });
      entries.forEach(function (f) {
        if (_this2.hasFilterValue(f.value)) {
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
      var _this3 = this;
      return function (prop) {
        return _this3.internalFilters.find(function (inf) {
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
      if (this.searchReactive.value !== val) {
        this.searchReactive.value = val || '';
      }
    },
    'searchReactive.value': function searchReactiveValue(val) {
      if (val && val != "") {
        this.filters = [];
        this.filters.push(["search", "LIKE", val]);
        this.fetchItems();
      } else {
        this.filters = [];
        this.fetchItems();
      }
    },
    displaySearch: function displaySearch(val) {
      this.displaySearchReactive.value = !!val;
    },
    'displaySearchReactive.value': function displaySearchReactiveValue(val) {
      this.displaySearch = !!val;
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
      var _this4 = this;
      // Actualizar el objeto reactivo si existe
      if (this.displayModeReactive) {
        this.displayModeReactive.value = newVal;
      }
      // Forzar re-renderizado cuando cambia el modo de visualización
      this.$nextTick(function () {
        _this4.forceRecomputeCounter++;
      });
    },
    showPaginator: function showPaginator() {
      var _this5 = this;
      // Forzar re-renderizado cuando cambia la visibilidad del paginador
      this.$nextTick(function () {
        _this5.forceRecomputeCounter++;
      });
    },
    showSearch: function showSearch() {
      var _this6 = this;
      // Forzar re-renderizado cuando cambia la visibilidad de la búsqueda
      this.$nextTick(function () {
        _this6.forceRecomputeCounter++;
      });
    },
    showCreateBtn: function showCreateBtn() {
      var _this7 = this;
      // Forzar re-renderizado cuando cambia la visibilidad del botón crear
      this.$nextTick(function () {
        _this7.forceRecomputeCounter++;
      });
    },
    showHeader: function showHeader() {
      var _this8 = this;
      // Forzar re-renderizado cuando cambia la visibilidad del header
      this.$nextTick(function () {
        _this8.forceRecomputeCounter++;
      });
    },
    tableClass: function tableClass() {
      var _this9 = this;
      // Forzar re-renderizado cuando cambian las clases de la tabla
      this.$nextTick(function () {
        _this9.forceRecomputeCounter++;
      });
    },
    cardClass: function cardClass() {
      var _this0 = this;
      // Forzar re-renderizado cuando cambian las clases de las tarjetas
      this.$nextTick(function () {
        _this0.forceRecomputeCounter++;
      });
    },
    tableContainerClass: function tableContainerClass() {
      var _this1 = this;
      // Forzar re-renderizado cuando cambian las clases del contenedor
      this.$nextTick(function () {
        _this1.forceRecomputeCounter++;
      });
    },
    columns: {
      handler: function handler() {
        var _this10 = this;
        // Evitar bucle infinito: no ejecutar si loadOptions() está modificando las columnas
        if (this.isLoadingOptions) {
          return;
        }
        // Recargar opciones cuando cambian las columnas
        this.loadOptions();
        // Forzar re-renderizado
        this.$nextTick(function () {
          _this10.forceRecomputeCounter++;
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
    },
    quickFilter: {
      handler: function handler(newVal) {
        if (newVal == null || newVal === '') {
          return;
        }
        var key = String(newVal);
        if (this.activeQuickFilterKey !== key) {
          this.activeQuickFilterKey = key;
          this.activeQuickFilterKeyReactive.value = key;
        }
      },
      immediate: true
    },
    quickFilters: {
      handler: function handler() {
        this.ensureActiveQuickFilter();
      },
      deep: false
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
    this.searchReactive.value = this.search || '';
    this.displaySearchReactive.value = !!this.displaySearch;
    this.initQuickFilterState();
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
      var _this11 = this;
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
          _this11.items.push(newItem);
        }
      });

      // Convertir el mapa de vuelta a un array, si es necesario
      this.items = Array.from(itemsMap.values());
    },
    externalUpdate: function externalUpdate(itemsUpdate) {
      var _this12 = this;
      var addIfNotExist = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;
      var key = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 'id';
      itemsUpdate.forEach(function (itemUpdate) {
        var itemInList = _this12.items.find(function (item) {
          return item[key] === itemUpdate[key];
        });
        if (itemInList) Object.assign(itemInList, itemUpdate);else {
          if (addIfNotExist) {
            _this12.items.push(itemUpdate);
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

// from https://github.com/kumavis/browser-process-hrtime/blob/master/index.js
var performance = global$1.performance || {};
performance.now        ||
  performance.mozNow     ||
  performance.msNow      ||
  performance.oNow       ||
  performance.webkitNow  ||
  function(){ return (new Date()).getTime() };

var browser$1 = {
  nextTick: nextTick};/**
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

const { toString } = Object.prototype;
const { getPrototypeOf } = Object;
const { iterator, toStringTag } = Symbol;

/* Creating a function that will check if an object has a property. */
const hasOwnProperty = (
  ({ hasOwnProperty }) =>
  (obj, prop) =>
    hasOwnProperty.call(obj, prop)
)(Object.prototype);

const isUnsafeObjectKey = (prop) =>
  typeof prop === 'string' &&
  (prop === '__proto__' || prop === 'constructor' || prop === 'prototype');

/**
 * Determine whether an inherited object must be treated as a shared-prototype
 * boundary. Cross-realm Object.prototype objects cannot be distinguished
 * reliably from application-created null-prototype objects because their
 * properties are mutable, so all inherited terminal prototypes are excluded
 * as a fail-closed boundary. A null-prototype source still keeps its own
 * properties, as produced by mergeConfig and other safe materialization paths.
 *
 * @param {*} obj The object to inspect
 * @param {*} prototype The object's prototype
 * @param {boolean} source Whether obj is the original traversal source
 *
 * @returns {boolean} True when obj is a safe prototype traversal boundary
 */
const isPrototypeBoundary = (obj, prototype, source) =>
  obj === Object.prototype || (!source && prototype === null);

/**
 * Determine whether an object can retain its identity through code paths that
 * add, replace, and remove config properties without bypassing unsafe-key
 * filtering. Immutable objects, unsafe-key-bearing objects, and objects with
 * accessor or restricted data properties must be materialized instead.
 *
 * @param {*} obj The object to inspect
 *
 * @returns {boolean} True when every own property is safe and fully mutable
 */
const isSafeAndFullyMutable = (obj) => {
  if (!Object.isExtensible(obj)) {
    return false;
  }

  const props = Object.getOwnPropertyNames(obj);

  if (Object.getOwnPropertySymbols) {
    props.push(...Object.getOwnPropertySymbols(obj));
  }

  return props.every((prop) => {
    if (isUnsafeObjectKey(prop)) {
      return false;
    }

    const descriptor = Object.getOwnPropertyDescriptor(obj, prop);

    return !!descriptor && descriptor.configurable && descriptor.writable === true;
  });
};

/**
 * Walk the prototype chain (excluding the source realm's Object.prototype)
 * looking for an own `prop`. This distinguishes genuine own/inherited members
 * — including class accessors and template prototypes — from members injected
 * via Object.prototype pollution (e.g. `Object.prototype.username = '...'`),
 * which live on Object.prototype itself and are therefore never matched.
 *
 * @param {*} thing The value whose chain to inspect
 * @param {string|symbol} prop The property key to look for
 *
 * @returns {boolean} True when `prop` is owned below Object.prototype
 */
const hasOwnInPrototypeChain = (thing, prop) => {
  let obj = thing;
  const seen = [];

  while (obj != null) {
    if (seen.indexOf(obj) !== -1) {
      return false;
    }
    seen.push(obj);

    const prototype = getPrototypeOf(obj);

    if (isPrototypeBoundary(obj, prototype, obj === thing)) {
      return false;
    }

    if (hasOwnProperty(obj, prop)) {
      return true;
    }
    obj = prototype;
  }
  return false;
};

/**
 * Read `obj[prop]` only when it is safe from Object.prototype pollution. Own
 * properties and members inherited from a non-Object.prototype source (a class
 * instance or template object) are honored; a value reachable only through a
 * polluted Object.prototype is ignored and `undefined` is returned.
 *
 * @param {*} obj The source object
 * @param {string|symbol} prop The property key to read
 *
 * @returns {*} The resolved value, or undefined when unsafe/absent
 */
const getSafeProp = (obj, prop) =>
  obj != null && hasOwnInPrototypeChain(obj, prop) ? obj[prop] : undefined;

/**
 * Flatten an object and its application-defined prototype chain into a
 * null-prototype object. Members inherited only from the source realm's
 * Object.prototype are deliberately excluded, while class/template members
 * below that boundary are preserved.
 *
 * @param {*} thing The value to flatten
 *
 * @returns {*} A null-prototype copy, or the original value when it is already
 * structurally safe or is not an object
 */
const toSafeFlatObject = (thing) => {
  if (thing == null || (typeof thing !== 'object' && typeof thing !== 'function')) {
    return thing;
  }

  const sourcePrototype = getPrototypeOf(thing);

  if (sourcePrototype === null && isSafeAndFullyMutable(thing)) {
    return thing;
  }

  const result = Object.create(null);
  const merged = Object.create(null);
  const seen = [];
  let current = thing;

  while (current != null) {
    if (seen.indexOf(current) !== -1) {
      break;
    }

    seen.push(current);

    const prototype = current === thing ? sourcePrototype : getPrototypeOf(current);

    if (isPrototypeBoundary(current, prototype, current === thing)) {
      break;
    }

    const props = Object.getOwnPropertyNames(current);

    if (Object.getOwnPropertySymbols) {
      props.push(...Object.getOwnPropertySymbols(current));
    }

    for (const prop of props) {
      if (isUnsafeObjectKey(prop)) {
        continue;
      }

      if (!hasOwnProperty(merged, prop)) {
        result[prop] = thing[prop];
        merged[prop] = true;
      }
    }

    current = prototype;
  }

  return result;
};

const kindOf = ((cache) => (thing) => {
  const str = toString.call(thing);
  return cache[str] || (cache[str] = str.slice(8, -1).toLowerCase());
})(Object.create(null));

const kindOfTest = (type) => {
  type = type.toLowerCase();
  return (thing) => kindOf(thing) === type;
};

const typeOfTest = (type) => (thing) => typeof thing === type;

/**
 * Determine if a value is a non-null object
 *
 * @param {Object} val The value to test
 *
 * @returns {boolean} True if value is an Array, otherwise false
 */
const { isArray } = Array;

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
function isBuffer(val) {
  return (
    val !== null &&
    !isUndefined(val) &&
    val.constructor !== null &&
    !isUndefined(val.constructor) &&
    isFunction$1(val.constructor.isBuffer) &&
    val.constructor.isBuffer(val)
  );
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
  if (typeof ArrayBuffer !== 'undefined' && ArrayBuffer.isView) {
    result = ArrayBuffer.isView(val);
  } else {
    result = val && val.buffer && isArrayBuffer(val.buffer);
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
const isBoolean = (thing) => thing === true || thing === false;

/**
 * Determine if a value is a plain Object
 *
 * @param {*} val The value to test
 *
 * @returns {boolean} True if value is a plain Object, otherwise false
 */
const isPlainObject = (val) => {
  if (!isObject(val)) {
    return false;
  }

  const prototype = getPrototypeOf(val);
  return (
    (prototype === null || prototype === Object.prototype || getPrototypeOf(prototype) === null) &&
    // Treat safe own/inherited Symbol.toStringTag or Symbol.iterator members as
    // evidence the value is tagged/iterable, while ignoring members reachable
    // only through shared or terminal prototype boundaries.
    !hasOwnInPrototypeChain(val, toStringTag) &&
    !hasOwnInPrototypeChain(val, iterator)
  );
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
  if (!isObject(val) || isBuffer(val)) {
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
 * Determine if a value is a React Native Blob
 * React Native "blob": an object with a `uri` attribute. Optionally, it can
 * also have a `name` and `type` attribute to specify filename and content type
 *
 * @see https://github.com/facebook/react-native/blob/26684cf3adf4094eb6c405d345a75bf8c7c0bf88/Libraries/Network/FormData.js#L68-L71
 *
 * @param {*} value The value to test
 *
 * @returns {boolean} True if value is a React Native Blob, otherwise false
 */
const isReactNativeBlob = (value) => {
  return !!(value && typeof value.uri !== 'undefined');
};

/**
 * Determine if environment is React Native
 * ReactNative `FormData` has a non-standard `getParts()` method
 *
 * @param {*} formData The formData to test
 *
 * @returns {boolean} True if environment is React Native, otherwise false
 */
const isReactNative = (formData) => formData && typeof formData.getParts !== 'undefined';

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
 * @returns {boolean} True if value is a FileList, otherwise false
 */
const isFileList = kindOfTest('FileList');
const isSet = kindOfTest('Set');

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
function getGlobal() {
  if (typeof globalThis !== 'undefined') return globalThis;
  if (typeof self !== 'undefined') return self;
  if (typeof window !== 'undefined') return window;
  if (typeof global$1 !== 'undefined') return global$1;
  return {};
}

const G = getGlobal();
const FormDataCtor = typeof G.FormData !== 'undefined' ? G.FormData : undefined;

const isFormData = (thing) => {
  if (!thing) return false;
  if (FormDataCtor && thing instanceof FormDataCtor) return true;
  // Reject plain objects inheriting directly from Object.prototype so prototype-pollution gadgets can't spoof FormData.
  const proto = getPrototypeOf(thing);
  if (!proto || proto === Object.prototype) return false;
  if (!isFunction$1(thing.append)) return false;
  const kind = kindOf(thing);
  return (
    kind === 'formdata' ||
    // detect form-data instance
    (kind === 'object' && isFunction$1(thing.toString) && thing.toString() === '[object FormData]')
  );
};

/**
 * Determine if a value is a URLSearchParams object
 *
 * @param {*} val The value to test
 *
 * @returns {boolean} True if value is a URLSearchParams object, otherwise false
 */
const isURLSearchParams = kindOfTest('URLSearchParams');

const [isReadableStream, isRequest, isResponse, isHeaders] = [
  'ReadableStream',
  'Request',
  'Response',
  'Headers',
].map(kindOfTest);

/**
 * Trim excess whitespace off the beginning and end of a string
 *
 * @param {String} str The String to trim
 *
 * @returns {String} The String freed of excess whitespace
 */
const trim = (str) => {
  return str.trim ? str.trim() : str.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, '');
};
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
function forEach(obj, fn, { allOwnKeys = false } = {}) {
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

  if (isArray(obj)) {
    // Iterate over array values
    for (i = 0, l = obj.length; i < l; i++) {
      fn.call(null, obj[i], i, obj);
    }
  } else {
    // Buffer check
    if (isBuffer(obj)) {
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

/**
 * Finds a key in an object, case-insensitive, returning the actual key name.
 * Returns null if the object is a Buffer or if no match is found.
 *
 * @param {Object} obj - The object to search.
 * @param {string} key - The key to find (case-insensitive).
 * @returns {?string} The actual key name if found, otherwise null.
 */
function findKey(obj, key) {
  if (isBuffer(obj)) {
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
  if (typeof globalThis !== 'undefined') return globalThis;
  return typeof self !== 'undefined' ? self : typeof window !== 'undefined' ? window : global$1;
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
function merge(...objs) {
  const { caseless, skipUndefined } = (isContextDefined(this) && this) || {};
  const result = {};
  const assignValue = (val, key) => {
    // Skip dangerous property names to prevent prototype pollution
    if (key === '__proto__' || key === 'constructor' || key === 'prototype') {
      return;
    }

    // findKey lowercases the key, so caseless lookup only applies to strings —
    // symbol keys are identity-matched.
    const targetKey = (caseless && typeof key === 'string' && findKey(result, key)) || key;
    // Read via own-prop only — a bare `result[targetKey]` walks the prototype
    // chain, so a polluted Object.prototype value could surface here and get
    // copied into the merged result.
    const existing = hasOwnProperty(result, targetKey) ? result[targetKey] : undefined;
    if (isPlainObject(existing) && isPlainObject(val)) {
      result[targetKey] = merge(existing, val);
    } else if (isPlainObject(val)) {
      result[targetKey] = merge({}, val);
    } else if (isArray(val)) {
      result[targetKey] = val.slice();
    } else if (!skipUndefined || !isUndefined(val)) {
      result[targetKey] = val;
    }
  };

  for (let i = 0, l = objs.length; i < l; i++) {
    const source = objs[i];
    if (!source || isBuffer(source)) {
      continue;
    }

    forEach(source, assignValue);

    if (typeof source !== 'object' || isArray(source)) {
      continue;
    }

    const symbols = Object.getOwnPropertySymbols(source);
    for (let j = 0; j < symbols.length; j++) {
      const symbol = symbols[j];
      if (propertyIsEnumerable.call(source, symbol)) {
        assignValue(source[symbol], symbol);
      }
    }
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
const extend = (a, b, thisArg, { allOwnKeys } = {}) => {
  forEach(
    b,
    (val, key) => {
      if (thisArg && isFunction$1(val)) {
        Object.defineProperty(a, key, {
          // Null-proto descriptor so a polluted Object.prototype.get cannot
          // hijack defineProperty's accessor-vs-data resolution.
          __proto__: null,
          value: bind(val, thisArg),
          writable: true,
          enumerable: true,
          configurable: true,
        });
      } else {
        Object.defineProperty(a, key, {
          __proto__: null,
          value: val,
          writable: true,
          enumerable: true,
          configurable: true,
        });
      }
    },
    { allOwnKeys }
  );
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
  if (content.charCodeAt(0) === 0xfeff) {
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
    __proto__: null,
    value: constructor,
    writable: true,
    enumerable: false,
    configurable: true,
  });
  Object.defineProperty(constructor, 'super', {
    __proto__: null,
    value: superConstructor.prototype,
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
  if (isArray(thing)) return thing;
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
const isTypedArray = ((TypedArray) => {
  // eslint-disable-next-line func-names
  return (thing) => {
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

const toCamelCase = (str) => {
  return str.toLowerCase().replace(/[-_\s]([a-z\d])(\w*)/g, function replacer(m, p1, p2) {
    return p1.toUpperCase() + p2;
  });
};

const { propertyIsEnumerable } = Object.prototype;

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
    if (isFunction$1(obj) && ['arguments', 'caller', 'callee'].includes(name)) {
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
        throw Error("Can not rewrite read-only method '" + name + "'");
      };
    }
  });
};

/**
 * Converts an array or a delimited string into an object set with values as keys and true as values.
 * Useful for fast membership checks.
 *
 * @param {Array|string} arrayOrString - The array or string to convert.
 * @param {string} delimiter - The delimiter to use if input is a string.
 * @returns {Object} An object with keys from the array or string, values set to true.
 */
const toObjectSet = (arrayOrString, delimiter) => {
  const obj = {};

  const define = (arr) => {
    arr.forEach((value) => {
      obj[value] = true;
    });
  };

  isArray(arrayOrString) ? define(arrayOrString) : define(String(arrayOrString).split(delimiter));

  return obj;
};

const noop = () => {};

const toFiniteNumber = (value, defaultValue) => {
  return value != null && Number.isFinite((value = +value)) ? value : defaultValue;
};

/**
 * If the thing is a FormData object, return true, otherwise return false.
 *
 * @param {unknown} thing - The thing to check.
 *
 * @returns {boolean}
 */
function isSpecCompliantForm(thing) {
  return !!(
    thing &&
    isFunction$1(thing.append) &&
    thing[toStringTag] === 'FormData' &&
    thing[iterator]
  );
}

/**
 * Recursively converts an object to a JSON-compatible object, handling circular references and Buffers.
 *
 * @param {Object} obj - The object to convert.
 * @returns {Object} The JSON-compatible object.
 */
const toJSONObject = (obj) => {
  const visited = new WeakSet();

  const visit = (source) => {
    if (isObject(source)) {
      if (visited.has(source)) {
        return;
      }

      //Buffer check
      if (isBuffer(source)) {
        return source;
      }

      if (!('toJSON' in source)) {
        // add-on descent / delete-on-ascent: preserves path semantics, so DAG nodes serialise at every occurrence (see #7230).
        visited.add(source);

        let target;

        if (isSet(source)) {
          target = [];
          for (const value of source) {
            const reducedValue = visit(value);
            !isUndefined(reducedValue) && target.push(reducedValue);
          }
        } else {
          target = isArray(source) ? [] : {};

          forEach(source, (value, key) => {
            const reducedValue = visit(value);
            !isUndefined(reducedValue) && (target[key] = reducedValue);
          });
        }

        visited.delete(source);

        return target;
      }
    }

    return source;
  };

  return visit(obj);
};

/**
 * Determines if a value is an async function.
 *
 * @param {*} thing - The value to test.
 * @returns {boolean} True if value is an async function, otherwise false.
 */
const isAsyncFn = kindOfTest('AsyncFunction');

/**
 * Determines if a value is thenable (has then and catch methods).
 *
 * @param {*} thing - The value to test.
 * @returns {boolean} True if value is thenable, otherwise false.
 */
const isThenable = (thing) =>
  thing &&
  (isObject(thing) || isFunction$1(thing)) &&
  isFunction$1(thing.then) &&
  isFunction$1(thing.catch);

// original code
// https://github.com/DigitalBrainJS/AxiosPromise/blob/16deab13710ec09779922131f3fa5954320f83ab/lib/utils.js#L11-L34

/**
 * Provides a cross-platform setImmediate implementation.
 * Uses native setImmediate if available, otherwise falls back to postMessage or setTimeout.
 *
 * @param {boolean} setImmediateSupported - Whether setImmediate is supported.
 * @param {boolean} postMessageSupported - Whether postMessage is supported.
 * @returns {Function} A function to schedule a callback asynchronously.
 */
const _setImmediate = ((setImmediateSupported, postMessageSupported) => {
  if (setImmediateSupported) {
    return setImmediate;
  }

  return postMessageSupported
    ? ((token, callbacks) => {
        _global.addEventListener(
          'message',
          ({ source, data }) => {
            if (source === _global && data === token) {
              callbacks.length && callbacks.shift()();
            }
          },
          false
        );

        return (cb) => {
          callbacks.push(cb);
          _global.postMessage(token, '*');
        };
      })(`axios@${Math.random()}`, [])
    : (cb) => setTimeout(cb);
})(typeof setImmediate === 'function', isFunction$1(_global.postMessage));

/**
 * Schedules a microtask or asynchronous callback as soon as possible.
 * Uses queueMicrotask if available, otherwise falls back to process.nextTick or _setImmediate.
 *
 * @type {Function}
 */
const asap =
  typeof queueMicrotask !== 'undefined'
    ? queueMicrotask.bind(_global)
    : (typeof browser$1 !== 'undefined' && browser$1.nextTick) || _setImmediate;

// *********************

const isIterable = (thing) => thing != null && isFunction$1(thing[iterator]);

/**
 * Determine if a value is iterable via an iterator that is NOT sourced solely
 * from a polluted Object.prototype. Use this instead of `isIterable` whenever
 * the iterable comes from untrusted input (e.g. user-supplied header sources),
 * so `Object.prototype[Symbol.iterator] = ...` cannot turn an ordinary object
 * into an attacker-controlled entries iterator.
 *
 * @param {*} thing The value to test
 *
 * @returns {boolean} True if value has a non-polluted iterator
 */
const isSafeIterable = (thing) =>
  thing != null && hasOwnInPrototypeChain(thing, iterator) && isIterable(thing);

var utils$1 = {
  isArray,
  isArrayBuffer,
  isBuffer,
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
  isReactNativeBlob,
  isReactNative,
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
  hasOwnInPrototypeChain,
  getSafeProp,
  toSafeFlatObject,
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
  isIterable,
  isSafeIterable,
};// RawAxiosHeaders whose duplicates are ignored by node
// c.f. https://nodejs.org/api/http.html#http_message_headers
const ignoreDuplicateOf = utils$1.toObjectSet([
  'age',
  'authorization',
  'content-length',
  'content-type',
  'etag',
  'expires',
  'from',
  'host',
  'if-modified-since',
  'if-unmodified-since',
  'last-modified',
  'location',
  'max-forwards',
  'proxy-authorization',
  'referer',
  'retry-after',
  'user-agent',
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
var parseHeaders = (rawHeaders) => {
  const parsed = {};
  let key;
  let val;
  let i;

  rawHeaders &&
    rawHeaders.split('\n').forEach(function parser(line) {
      i = line.indexOf(':');
      key = line.substring(0, i).trim().toLowerCase();
      val = line.substring(i + 1).trim();

      const hasKey = utils$1.hasOwnProp(parsed, key);

      if (!key || (hasKey && utils$1.hasOwnProp(ignoreDuplicateOf, key))) {
        return;
      }

      if (key === 'set-cookie') {
        if (hasKey) {
          parsed[key].push(val);
        } else {
          parsed[key] = [val];
        }
      } else {
        parsed[key] = hasKey ? parsed[key] + ', ' + val : val;
      }
    });

  return parsed;
};function trimSPorHTAB(str) {
  let start = 0;
  let end = str.length;

  while (start < end) {
    const code = str.charCodeAt(start);

    if (code !== 0x09 && code !== 0x20) {
      break;
    }

    start += 1;
  }

  while (end > start) {
    const code = str.charCodeAt(end - 1);

    if (code !== 0x09 && code !== 0x20) {
      break;
    }

    end -= 1;
  }

  return start === 0 && end === str.length ? str : str.slice(start, end);
}

// The control-code ranges are intentional: header sanitization strips C0/DEL bytes.
// eslint-disable-next-line no-control-regex
const INVALID_UNICODE_HEADER_VALUE_CHARS = new RegExp('[\\u0000-\\u0008\\u000a-\\u001f\\u007f]+', 'g');
// eslint-disable-next-line no-control-regex
const INVALID_BYTE_STRING_HEADER_VALUE_CHARS = new RegExp('[^\\u0009\\u0020-\\u007e\\u0080-\\u00ff]+', 'g');

function sanitizeValue(value, invalidChars) {
  if (utils$1.isArray(value)) {
    return value.map((item) => sanitizeValue(item, invalidChars));
  }

  return trimSPorHTAB(String(value).replace(invalidChars, ''));
}

const sanitizeHeaderValue = (value) =>
  sanitizeValue(value, INVALID_UNICODE_HEADER_VALUE_CHARS);

const sanitizeByteStringHeaderValue = (value) =>
  sanitizeValue(value, INVALID_BYTE_STRING_HEADER_VALUE_CHARS);

function toByteStringHeaderObject(headers) {
  const byteStringHeaders = Object.create(null);

  utils$1.forEach(headers.toJSON(), (value, header) => {
    byteStringHeaders[header] = sanitizeByteStringHeaderValue(value);
  });

  return byteStringHeaders;
}const $internals$1 = Symbol('internals');

function normalizeHeader(header) {
  return header && String(header).trim().toLowerCase();
}

function normalizeValue(value) {
  if (value === false || value == null) {
    return value;
  }

  return utils$1.isArray(value) ? value.map(normalizeValue) : sanitizeHeaderValue(String(value));
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

const parameterNameRE = /^[!#$%&'*+\-.^_`|~0-9A-Za-z]+$/;

function trimOWS(value) {
  let start = 0;
  let end = value.length;

  while (start < end) {
    const code = value.charCodeAt(start);

    if (code !== 0x09 && code !== 0x20) {
      break;
    }

    start += 1;
  }

  while (end > start) {
    const code = value.charCodeAt(end - 1);

    if (code !== 0x09 && code !== 0x20) {
      break;
    }

    end -= 1;
  }

  return start === 0 && end === value.length ? value : value.slice(start, end);
}

function decodeQuotedString(value) {
  const last = value.length - 1;

  if (last < 1 || value.charCodeAt(0) !== 0x22 || value.charCodeAt(last) !== 0x22) {
    return value;
  }

  let decoded = '';

  for (let i = 1; i < last; i++) {
    const code = value.charCodeAt(i);

    if (code === 0x22) {
      return value;
    }

    if (code === 0x5c) {
      i += 1;

      if (i >= last) {
        return value;
      }
    }

    decoded += value[i];
  }

  return decoded;
}

function parseParameters(value) {
  const parameters = Object.create(null);
  const str = String(value);
  let start = 0;
  let quoted = false;
  let escaped = false;

  function parseParameter(end) {
    const part = trimOWS(str.slice(start, end));
    const equals = part.indexOf('=');

    if (equals < 1) {
      return;
    }

    const name = trimOWS(part.slice(0, equals));

    if (!parameterNameRE.test(name)) {
      return;
    }

    const normalizedName = name.toLowerCase();

    if (
      normalizedName === '__proto__' ||
      normalizedName === 'constructor' ||
      normalizedName === 'prototype'
    ) {
      return;
    }

    const parameterValue = trimOWS(part.slice(equals + 1));
    parameters[normalizedName] = decodeQuotedString(parameterValue);
  }

  for (let i = 0; i < str.length; i++) {
    const code = str.charCodeAt(i);

    if (quoted) {
      if (escaped) {
        escaped = false;
      } else if (code === 0x5c) {
        escaped = true;
      } else if (code === 0x22) {
        quoted = false;
      }
    } else if (code === 0x22) {
      quoted = true;
    } else if (code === 0x2c || code === 0x3b) {
      parseParameter(i);
      start = i + 1;
    }
  }

  parseParameter(str.length);

  return parameters;
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
  return header
    .trim()
    .toLowerCase()
    .replace(/([a-z\d])(\w*)/g, (w, char, str) => {
      return char.toUpperCase() + str;
    });
}

function buildAccessors(obj, header) {
  const accessorName = utils$1.toCamelCase(' ' + header);

  ['get', 'set', 'has'].forEach((methodName) => {
    Object.defineProperty(obj, methodName + accessorName, {
      // Null-proto descriptor so a polluted Object.prototype.get cannot turn
      // this data descriptor into an accessor descriptor on the way in.
      __proto__: null,
      value: function (arg1, arg2, arg3) {
        return this[methodName].call(this, header, arg1, arg2, arg3);
      },
      configurable: true,
    });
  });
}

let AxiosHeaders$1=class AxiosHeaders {
  constructor(headers) {
    headers && this.set(headers);
  }

  set(header, valueOrRewrite, rewrite) {
    const self = this;

    function setHeader(_value, _header, _rewrite) {
      const lHeader = normalizeHeader(_header);

      if (!lHeader) {
        return;
      }

      const key = utils$1.findKey(self, lHeader);

      if (
        !key ||
        self[key] === undefined ||
        _rewrite === true ||
        (_rewrite === undefined && self[key] !== false)
      ) {
        self[key || _header] = normalizeValue(_value);
      }
    }

    const setHeaders = (headers, _rewrite) =>
      utils$1.forEach(headers, (_value, _header) => setHeader(_value, _header, _rewrite));

    if (utils$1.isPlainObject(header) || header instanceof this.constructor) {
      setHeaders(header, valueOrRewrite);
    } else if (utils$1.isString(header) && (header = header.trim()) && !isValidHeaderName(header)) {
      setHeaders(parseHeaders(header), valueOrRewrite);
    } else if (utils$1.isObject(header) && utils$1.isSafeIterable(header)) {
      let obj = Object.create(null),
        dest,
        key;
      for (const entry of header) {
        if (!utils$1.isArray(entry)) {
          throw new TypeError('Object iterator must return a key-value pair');
        }

        key = entry[0];

        if (utils$1.hasOwnProp(obj, key)) {
          dest = obj[key];
          obj[key] = utils$1.isArray(dest) ? [...dest, entry[1]] : [dest, entry[1]];
        } else {
          obj[key] = entry[1];
        }
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

      return !!(
        key &&
        this[key] !== undefined &&
        (!matcher || matchHeaderValue(this, this[key], key, matcher))
      );
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
      if (!matcher || matchHeaderValue(this, this[key], key, matcher, true)) {
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
      value != null &&
        value !== false &&
        (obj[header] = asStrings && utils$1.isArray(value) ? value.join(', ') : value);
    });

    return obj;
  }

  [Symbol.iterator]() {
    return Object.entries(this.toJSON())[Symbol.iterator]();
  }

  toString() {
    return Object.entries(this.toJSON())
      .map(([header, value]) => header + ': ' + value)
      .join('\n');
  }

  getSetCookie() {
    const value = this.get('set-cookie');
    return utils$1.isArray(value) ? value : value == null || value === false ? [] : [value];
  }

  get [Symbol.toStringTag]() {
    return 'AxiosHeaders';
  }

  static from(thing) {
    return thing instanceof this ? thing : new this(thing);
  }

  static parseParameters(value) {
    return parseParameters(value);
  }

  static concat(first, ...targets) {
    const computed = new this(first);

    targets.forEach((target) => computed.set(target));

    return computed;
  }

  static accessor(header) {
    const internals =
      (this[$internals$1] =
      this[$internals$1] =
        {
          accessors: {},
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
};

AxiosHeaders$1.accessor([
  'Content-Type',
  'Content-Length',
  'Accept',
  'Accept-Encoding',
  'User-Agent',
  'Authorization',
]);

// reserved names hotfix
utils$1.reduceDescriptors(AxiosHeaders$1.prototype, ({ value }, key) => {
  let mapped = key[0].toUpperCase() + key.slice(1); // map `set` => `Set`
  return {
    get: () => value,
    set(headerValue) {
      this[mapped] = headerValue;
    },
  };
});

utils$1.freezeMethods(AxiosHeaders$1);const REDACTED = '[REDACTED ****]';

function hasOwnOrPrototypeToJSON(source) {
  if (utils$1.hasOwnProp(source, 'toJSON')) {
    return true;
  }

  let prototype = Object.getPrototypeOf(source);

  while (prototype && prototype !== Object.prototype) {
    if (utils$1.hasOwnProp(prototype, 'toJSON')) {
      return true;
    }

    prototype = Object.getPrototypeOf(prototype);
  }

  return false;
}

// Build a plain-object snapshot of `config` and replace the value of any key
// (case-insensitive) listed in `redactKeys` with REDACTED. Walks through arrays
// and AxiosHeaders, and short-circuits on circular references.
function redactConfig(config, redactKeys) {
  const lowerKeys = new Set(redactKeys.map((k) => String(k).toLowerCase()));
  const seen = [];

  const visit = (source) => {
    if (source === null || typeof source !== 'object') return source;
    if (utils$1.isBuffer(source)) return source;
    if (seen.indexOf(source) !== -1) return undefined;

    if (source instanceof AxiosHeaders$1) {
      source = source.toJSON();
    }

    seen.push(source);

    let result;
    if (utils$1.isArray(source)) {
      result = [];
      source.forEach((v, i) => {
        const reducedValue = visit(v);
        if (!utils$1.isUndefined(reducedValue)) {
          result[i] = reducedValue;
        }
      });
    } else {
      if (!utils$1.isPlainObject(source) && hasOwnOrPrototypeToJSON(source)) {
        seen.pop();
        return source;
      }

      result = Object.create(null);
      for (const [key, value] of Object.entries(source)) {
        const reducedValue = lowerKeys.has(key.toLowerCase()) ? REDACTED : visit(value);
        if (!utils$1.isUndefined(reducedValue)) {
          result[key] = reducedValue;
        }
      }
    }

    seen.pop();
    return result;
  };

  return visit(config);
}

function stringifySafely$1(value) {
  try {
    return String(value);
  } catch (err) {
    return '';
  }
}

function aggregateErrorMessage(error) {
  const message = error.errors
    .map((entry) => {
      try {
        return entry && entry.message ? stringifySafely$1(entry.message) : stringifySafely$1(entry);
      } catch (err) {
        return '';
      }
    })
    .filter(Boolean)
    .join('; ');

  return message || error.name || 'AggregateError';
}

let AxiosError$1=class AxiosError extends Error {
  static from(error, code, config, request, response, customProps) {
    // `AggregateError` (thrown by Node on dual-stack/Happy-Eyeballs connection
    // failures) has an empty `message`; its detail lives in `errors[]`. Without
    // this, the wrapped error surfaces with a blank message (see #6721).
    let message = error.message;
    if (!message && utils$1.isArray(error.errors) && error.errors.length) {
      message = aggregateErrorMessage(error);
    }

    const axiosError = new AxiosError(message, code || error.code, config, request, response);
    // Match native `Error` `cause` semantics: non-enumerable. The wrapped
    // error often carries circular internals (sockets, requests, agents), so
    // an enumerable `cause` makes structured loggers (pino/winston) and any
    // own-property walk throw "Converting circular structure to JSON".
    // Regression from #6982; see #7205. `__proto__: null` mirrors the
    // `message` descriptor below (prototype-pollution-safe descriptor).
    Object.defineProperty(axiosError, 'cause', {
      __proto__: null,
      value: error,
      writable: true,
      enumerable: false,
      configurable: true,
    });
    axiosError.name = error.name;

    // Preserve status from the original error if not already set from response
    if (error.status != null && axiosError.status == null) {
      axiosError.status = error.status;
    }

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

    // Make message enumerable to maintain backward compatibility
    // The native Error constructor sets message as non-enumerable,
    // but axios < v1.13.3 had it as enumerable
    Object.defineProperty(this, 'message', {
      // Null-proto descriptor so a polluted Object.prototype.get cannot turn
      // this data descriptor into an accessor descriptor on the way in.
      __proto__: null,
      value: message,
      enumerable: true,
      writable: true,
      configurable: true,
    });

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
    // Opt-in redaction: when the request config carries a `redact` array, the
    // value of any matching key (case-insensitive, at any depth) is replaced
    // with REDACTED in the serialized snapshot. Undefined or empty leaves the
    // existing serialization behavior unchanged.
    const config = this.config;
    const redactKeys = config && utils$1.hasOwnProp(config, 'redact') ? config.redact : undefined;
    const serializedConfig =
      utils$1.isArray(redactKeys) && redactKeys.length > 0
        ? redactConfig(config, redactKeys)
        : utils$1.toJSONObject(config);

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
      config: serializedConfig,
      code: this.code,
      status: this.status,
    };
  }
};

// This can be changed to static properties as soon as the parser options in .eslint.cjs are updated.
AxiosError$1.ERR_BAD_OPTION_VALUE = 'ERR_BAD_OPTION_VALUE';
AxiosError$1.ERR_BAD_OPTION = 'ERR_BAD_OPTION';
AxiosError$1.ECONNABORTED = 'ECONNABORTED';
AxiosError$1.ETIMEDOUT = 'ETIMEDOUT';
AxiosError$1.ECONNREFUSED = 'ECONNREFUSED';
AxiosError$1.ERR_NETWORK = 'ERR_NETWORK';
AxiosError$1.ERR_FR_TOO_MANY_REDIRECTS = 'ERR_FR_TOO_MANY_REDIRECTS';
AxiosError$1.ERR_DEPRECATED = 'ERR_DEPRECATED';
AxiosError$1.ERR_BAD_RESPONSE = 'ERR_BAD_RESPONSE';
AxiosError$1.ERR_BAD_REQUEST = 'ERR_BAD_REQUEST';
AxiosError$1.ERR_CANCELED = 'ERR_CANCELED';
AxiosError$1.ERR_NOT_SUPPORT = 'ERR_NOT_SUPPORT';
AxiosError$1.ERR_INVALID_URL = 'ERR_INVALID_URL';
AxiosError$1.ERR_FORM_DATA_DEPTH_EXCEEDED = 'ERR_FORM_DATA_DEPTH_EXCEEDED';// eslint-disable-next-line strict
var httpAdapter = null;// Default nesting limit shared with the inverse transform (formDataToJSON) so
// the FormData <-> JSON round-trip stays symmetric.
const DEFAULT_FORM_DATA_MAX_DEPTH = 100;

/**
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
  return path
    .concat(key)
    .map(function each(token, i) {
      // eslint-disable-next-line no-param-reassign
      token = removeBrackets(token);
      return !dots && i ? '[' + token + ']' : token;
    })
    .join(dots ? '.' : '');
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
function toFormData$1(obj, formData, options) {
  if (!utils$1.isObject(obj)) {
    throw new TypeError('target must be an object');
  }

  // eslint-disable-next-line no-param-reassign
  formData = formData || new (FormData)();

  const option = (name, fallback) => {
    const value = utils$1.getSafeProp(options, name);
    return utils$1.isUndefined(value) ? fallback : value;
  };

  const metaTokens = option('metaTokens', true);
  // eslint-disable-next-line no-use-before-define
  const visitor = option('visitor') || defaultVisitor;
  const dots = option('dots', false);
  const indexes = option('indexes', false);
  const _Blob = option('Blob') || (typeof Blob !== 'undefined' && Blob);
  const maxDepth = option('maxDepth', DEFAULT_FORM_DATA_MAX_DEPTH);
  const useBlob = _Blob && utils$1.isSpecCompliantForm(formData);
  const stack = [];

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
      throw new AxiosError$1('Blob is not supported. Use a Buffer instead.');
    }

    if (utils$1.isArrayBuffer(value) || utils$1.isTypedArray(value)) {
      if (useBlob && typeof _Blob === 'function') {
        return new _Blob([value]);
      }
      throw new AxiosError$1(
        'Blob is not supported. Use a Buffer instead.',
        AxiosError$1.ERR_NOT_SUPPORT
      );
    }

    return value;
  }

  function throwIfMaxDepthExceeded(depth) {
    if (depth > maxDepth) {
      throw new AxiosError$1(
        'Object is too deeply nested (' + depth + ' levels). Max depth: ' + maxDepth,
        AxiosError$1.ERR_FORM_DATA_DEPTH_EXCEEDED
      );
    }
  }

  function stringifyWithDepthLimit(value, depth) {
    if (maxDepth === Infinity) {
      return JSON.stringify(value);
    }

    const ancestors = [];

    return JSON.stringify(value, function limitDepth(_key, currentValue) {
      if (!utils$1.isObject(currentValue)) {
        return currentValue;
      }

      while (ancestors.length && ancestors[ancestors.length - 1] !== this) {
        ancestors.pop();
      }

      ancestors.push(currentValue);
      throwIfMaxDepthExceeded(depth + ancestors.length - 1);

      return currentValue;
    });
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

    if (utils$1.isReactNative(formData) && utils$1.isReactNativeBlob(value)) {
      formData.append(renderKey(path, key, dots), convertValue(value));
      return false;
    }

    if (value && !path && typeof value === 'object') {
      if (utils$1.endsWith(key, '{}')) {
        // eslint-disable-next-line no-param-reassign
        key = metaTokens ? key : key.slice(0, -2);
        // eslint-disable-next-line no-param-reassign
        value = stringifyWithDepthLimit(value, 1);
      } else if (
        (utils$1.isArray(value) && isFlatArray(value)) ||
        ((utils$1.isFileList(value) || utils$1.endsWith(key, '[]')) && (arr = utils$1.toArray(value)))
      ) {
        // eslint-disable-next-line no-param-reassign
        key = removeBrackets(key);

        arr.forEach(function each(el, index) {
          !(utils$1.isUndefined(el) || el === null) &&
            formData.append(
              // eslint-disable-next-line no-nested-ternary
              indexes === true
                ? renderKey([key], index, dots)
                : indexes === null
                  ? key
                  : key + '[]',
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

  const exposedHelpers = Object.assign(predicates, {
    defaultVisitor,
    convertValue,
    isVisitable,
  });

  function build(value, path, depth = 0) {
    if (utils$1.isUndefined(value)) return;

    throwIfMaxDepthExceeded(depth);

    if (stack.indexOf(value) !== -1) {
      throw new Error('Circular reference detected in ' + path.join('.'));
    }

    stack.push(value);

    utils$1.forEach(value, function each(el, key) {
      const result =
        !(utils$1.isUndefined(el) || el === null) &&
        visitor.call(formData, el, utils$1.isString(key) ? key.trim() : key, path, exposedHelpers);

      if (result === true) {
        build(el, path ? path.concat(key) : [key], depth + 1);
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
  };
  return encodeURIComponent(str).replace(/[!'()~]|%20/g, function replacer(match) {
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

  params && toFormData$1(params, this, options);
}

const prototype = AxiosURLSearchParams.prototype;

prototype.append = function append(name, value) {
  this._pairs.push([name, value]);
};

prototype.toString = function toString(encoder) {
  const _encode = encoder
    ? (value) => encoder.call(this, value, encode$1)
    : encode$1;

  return this._pairs
    .map(function each(pair) {
      return _encode(pair[0]) + '=' + _encode(pair[1]);
    }, '')
    .join('&');
};/**
 * It replaces URL-encoded forms of `:`, `$`, `,`, and spaces with
 * their plain counterparts (`:`, `$`, `,`, `+`).
 *
 * @param {string} val The value to be encoded.
 *
 * @returns {string} The encoded value.
 */
function encode(val) {
  return encodeURIComponent(val)
    .replace(/%3A/gi, ':')
    .replace(/%24/g, '$')
    .replace(/%2C/gi, ',')
    .replace(/%20/g, '+');
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
  url = url || '';

  const _options = utils$1.isFunction(options)
    ? {
        serialize: options,
      }
    : options;

  // Read serializer options pollution-safely: own properties and methods on a
  // class/template prototype are honored, but values injected onto a polluted
  // Object.prototype are ignored.
  const _encode = utils$1.getSafeProp(_options, 'encode') || encode;
  const serializeFn = utils$1.getSafeProp(_options, 'serialize');

  let serializedParams;

  if (serializeFn) {
    serializedParams = serializeFn(params, _options);
  } else {
    serializedParams = utils$1.isURLSearchParams(params)
      ? params.toString()
      : new AxiosURLSearchParams(params, _options).toString(_encode);
  }

  if (serializedParams) {
    const hashmarkIndex = url.indexOf('#');

    if (hashmarkIndex !== -1) {
      url = url.slice(0, hashmarkIndex);
    }
    url += (url.indexOf('?') === -1 ? '?' : '&') + serializedParams;
  }

  return url;
}const $internals = Symbol('internals');

// `handlers` is public and may be replaced with a nullish value by user code;
// `clear()` has always tolerated that. Treat it as an empty stack rather than
// dereferencing it.
function countHandlers(handlers) {
  return handlers ? handlers.length : 0;
}

function trimHandlers(handlers) {
  if (!handlers) {
    return;
  }

  while (handlers.length && handlers[handlers.length - 1] === null) {
    handlers.pop();
  }
}

function syncHandlerEntries(manager, internals) {
  const handlers = manager.handlers;
  const length = countHandlers(handlers);

  if (handlers !== internals.handlersRef) {
    internals.handlersRef = handlers;
    internals.handlerEntries.clear();
  } else if (length !== internals.handlersLength) {
    if (!length) {
      internals.handlerEntries.clear();
    } else {
      internals.handlerEntries.forEach(function removeStaleEntry(entry, id) {
        if (handlers[entry.index] !== entry.handler) {
          internals.handlerEntries.delete(id);
        }
      });
    }
  }

  internals.handlersLength = length;
}

class InterceptorManager {
  constructor() {
    this.handlers = [];
    this[$internals] = {
      handlersRef: this.handlers,
      handlersLength: this.handlers.length,
      handlerEntries: new Map(),
      iterationDepth: 0,
      nextId: 0,
    };
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
    const handler = {
      fulfilled,
      rejected,
      synchronous: options ? options.synchronous : false,
      runWhen: options ? options.runWhen : null,
    };
    const internals = this[$internals];

    if (this.handlers == null) {
      this.handlers = [];
    }

    syncHandlerEntries(this, internals);

    const id = internals.nextId++;

    this.handlers.push(handler);
    internals.handlerEntries.set(id, {
      handler,
      index: this.handlers.length - 1,
    });
    internals.handlersLength = this.handlers.length;

    return id;
  }

  /**
   * Remove an interceptor from the stack
   *
   * @param {Number} id The ID that was returned by `use`
   *
   * @returns {void}
   */
  eject(id) {
    const internals = this[$internals];

    syncHandlerEntries(this, internals);

    const entry = internals.handlerEntries.get(id);

    if (entry) {
      internals.handlerEntries.delete(id);

      // Ignore IDs invalidated by clear or direct replacement of handlers.
      if (this.handlers[entry.index] !== entry.handler) {
        return;
      }

      this.handlers[entry.index] = null;

      // Do not reuse an index while forEach is walking its length snapshot.
      if (!internals.iterationDepth) {
        trimHandlers(this.handlers);
        internals.handlersLength = this.handlers.length;
      }
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
      syncHandlerEntries(this, this[$internals]);
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
    const internals = this[$internals];

    syncHandlerEntries(this, internals);

    internals.iterationDepth++;

    try {
      utils$1.forEach(this.handlers, function forEachHandler(h) {
        if (h !== null) {
          fn(h);
        }
      });
    } finally {
      if (!--internals.iterationDepth) {
        syncHandlerEntries(this, internals);
        trimHandlers(this.handlers);
        internals.handlersLength = countHandlers(this.handlers);
      }
    }
  }
}var transitionalDefaults = {
  silentJSONParsing: true,
  forcedJSONParsing: true,
  clarifyTimeoutError: false,
  legacyInterceptorReqResOrdering: true,
  advertiseZstdAcceptEncoding: false,
  validateStatusUndefinedResolves: true,
};var URLSearchParams$1 = typeof URLSearchParams !== 'undefined' ? URLSearchParams : AxiosURLSearchParams;var FormData$1 = typeof FormData !== 'undefined' ? FormData : null;var Blob$1 = typeof Blob !== 'undefined' ? Blob : null;var platform$1 = {
  isBrowser: true,
  classes: {
    URLSearchParams: URLSearchParams$1,
    FormData: FormData$1,
    Blob: Blob$1,
  },
  protocols: ['http', 'https', 'file', 'blob', 'url', 'data'],
};const hasBrowserEnv = typeof window !== 'undefined' && typeof document !== 'undefined';

const _navigator = (typeof navigator === 'object' && navigator) || undefined;

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
const hasStandardBrowserEnv =
  hasBrowserEnv &&
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

const origin = (hasBrowserEnv && window.location.href) || 'http://localhost';
var utils=/*#__PURE__*/Object.freeze({__proto__:null,hasBrowserEnv:hasBrowserEnv,hasStandardBrowserEnv:hasStandardBrowserEnv,hasStandardBrowserWebWorkerEnv:hasStandardBrowserWebWorkerEnv,navigator:_navigator,origin:origin});var platform = {
  ...utils,
  ...platform$1,
};function toURLEncodedForm(data, options) {
  return toFormData$1(data, new platform.classes.URLSearchParams(), {
    visitor: function (value, key, path, helpers) {
      if (platform.isNode && utils$1.isBuffer(value)) {
        this.append(key, value.toString('base64'));
        return false;
      }

      return helpers.defaultVisitor.apply(this, arguments);
    },
    ...options,
  });
}const MAX_DEPTH = DEFAULT_FORM_DATA_MAX_DEPTH;

function throwIfDepthExceeded(index) {
  if (index > MAX_DEPTH) {
    throw new AxiosError$1(
      'FormData field is too deeply nested (' + index + ' levels). Max depth: ' + MAX_DEPTH,
      AxiosError$1.ERR_FORM_DATA_DEPTH_EXCEEDED
    );
  }
}

/**
 * It takes a string like `foo[x][y][z]` and returns an array like `['foo', 'x', 'y', 'z']
 *
 * @param {string} name - The name of the property to get.
 *
 * @returns An array of strings.
 */
function parsePropPath(name) {
  // foo[x][y][z] -> ['foo', 'x', 'y', 'z']
  // foo.x.y.z    -> ['foo', 'x', 'y', 'z']
  // A path is split on `.` and on `[...]` groups. A segment — whether written
  // in dot notation or captured inside brackets — may contain any character
  // except `.`, `[` and `]`, so a key like `user-name` or `user name` is kept
  // literal instead of being split (#5402). `.`, `[` and `]` keep their existing
  // meaning, e.g. `foo[bar.baz]` -> ['foo', 'bar', 'baz'] and `[]` is an array push.
  // Excluding `[` from the bracket group also makes the match fail fast at the
  // next `[`, so a malformed name cannot rescan to the end of the string from
  // every unmatched `[` — parsing stays linear in the length of the name.
  const path = [];
  const pattern = /[^.[\]]+|\[([^.[\]]*)]/g;
  let match;

  while ((match = pattern.exec(name)) !== null) {
    throwIfDepthExceeded(path.length);
    path.push(match[0] === '[]' ? '' : match[1] || match[0]);
  }

  return path;
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
    throwIfDepthExceeded(index);

    let name = path[index++];

    if (name === '__proto__') return true;

    const isNumericKey = Number.isFinite(+name);
    const isLast = index >= path.length;
    name = !name && utils$1.isArray(target) ? target.length : name;

    if (isLast) {
      if (utils$1.hasOwnProp(target, name)) {
        target[name] = utils$1.isArray(target[name])
          ? target[name].concat(value)
          : [target[name], value];
      } else {
        target[name] = value;
      }

      return !isNumericKey;
    }

    if (!utils$1.hasOwnProp(target, name) || !utils$1.isObject(target[name])) {
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
}const methodList = Object.freeze([
  'get',
  'delete',
  'head',
  'options',
  'post',
  'put',
  'patch',
  'purge',
  'link',
  'unlink',
  'query',
]);const own = (obj, key) => (obj != null && utils$1.hasOwnProp(obj, key) ? obj[key] : undefined);

/**
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

  transformRequest: [
    function transformRequest(data, headers) {
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

      if (
        utils$1.isArrayBuffer(data) ||
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
        const formSerializer = own(this, 'formSerializer');
        if (contentType.indexOf('application/x-www-form-urlencoded') > -1) {
          return toURLEncodedForm(data, formSerializer).toString();
        }

        if (
          (isFileList = utils$1.isFileList(data)) ||
          contentType.indexOf('multipart/form-data') > -1
        ) {
          const env = own(this, 'env');
          const _FormData = env && env.FormData;

          return toFormData$1(
            isFileList ? { 'files[]': data } : data,
            _FormData && new _FormData(),
            formSerializer
          );
        }
      }

      if (isObjectPayload || hasJSONContentType) {
        headers.setContentType('application/json', false);
        return stringifySafely(data);
      }

      return data;
    },
  ],

  transformResponse: [
    function transformResponse(data) {
      const transitional = own(this, 'transitional') || defaults.transitional;
      const forcedJSONParsing = transitional && transitional.forcedJSONParsing;
      const responseType = own(this, 'responseType');
      const JSONRequested = responseType === 'json';

      if (utils$1.isResponse(data) || utils$1.isReadableStream(data)) {
        return data;
      }

      if (
        data &&
        utils$1.isString(data) &&
        ((forcedJSONParsing && !responseType) || JSONRequested)
      ) {
        const silentJSONParsing = transitional && transitional.silentJSONParsing;
        const strictJSONParsing = !silentJSONParsing && JSONRequested;

        try {
          return JSON.parse(data, own(this, 'parseReviver'));
        } catch (e) {
          if (strictJSONParsing) {
            if (e.name === 'SyntaxError') {
              throw AxiosError$1.from(e, AxiosError$1.ERR_BAD_RESPONSE, this, null, own(this, 'response'));
            }
            throw e;
          }
        }
      }

      return data;
    },
  ],

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
    Blob: platform.classes.Blob,
  },

  validateStatus: function validateStatus(status) {
    return status >= 200 && status < 300;
  },

  headers: {
    common: {
      Accept: 'application/json, text/plain, */*',
      'Content-Type': undefined,
    },
  },
};

utils$1.forEach(methodList, (method) => {
  defaults.headers[method] = {};
});/**
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
  const headers = AxiosHeaders$1.from(context.headers);
  let data = context.data;

  utils$1.forEach(fns, function transform(fn) {
    data = fn.call(config, data, headers.normalize(), response ? response.status : undefined);
  });

  headers.normalize();

  return data;
}function isCancel$1(value) {
  return !!(value && value.__CANCEL__);
}let CanceledError$1=class CanceledError extends AxiosError$1 {
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
    super(message == null ? 'canceled' : message, AxiosError$1.ERR_CANCELED, config, request);
    this.name = 'CanceledError';
    this.__CANCEL__ = true;
  }
};/**
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
    reject(new AxiosError$1(
      'Request failed with status code ' + response.status,
      response.status >= 400 && response.status < 500 ? AxiosError$1.ERR_BAD_REQUEST : AxiosError$1.ERR_BAD_RESPONSE,
      response.config,
      response.request,
      response
    ));
  }
}const urlParserControlCharacters = /[\t\n\r]/g;

/**
 * Match WHATWG URL preprocessing before checking a URL's protocol.
 *
 * @param {string} url
 *
 * @returns {string}
 */
function normalizeURLForProtocolCheck(url) {
  if (typeof url !== 'string') {
    return url;
  }

  let start = 0;

  while (start < url.length && url.charCodeAt(start) <= 0x20) {
    start++;
  }

  return url.slice(start).replace(urlParserControlCharacters, '');
}function parseProtocol(url) {
  const match = /^([-+\w]{1,25}):(?:\/\/)?/.exec(url);
  return (match && match[1]) || '';
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

    return passed ? Math.round((bytesCount * 1000) / passed) : undefined;
  };
}/**
 * Throttle decorator
 * @param {Function} fn
 * @param {Number} freq
 * @return {Array<Function>}
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
    if (passed >= threshold) {
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
  const flushWith = (...args) => invoke(args);

  return [throttled, flush, flushWith];
}const progressEventReducer = (listener, isDownloadStream, freq = 3) => {
  let bytesNotified = 0;
  const _speedometer = speedometer(50, 250);

  return throttle((e) => {
    if (!e || !utils$1.isNumber(e.loaded)) {
      return;
    }
    const rawLoaded = e.loaded;
    const total = e.lengthComputable ? e.total : undefined;
    const loaded = Math.max(0, total != null ? Math.min(rawLoaded, total) : rawLoaded);
    const progressBytes = Math.max(0, loaded - bytesNotified);
    const rate = _speedometer(progressBytes);

    bytesNotified = Math.max(bytesNotified, loaded);

    const data = {
      loaded,
      total,
      progress: total ? loaded / total : undefined,
      bytes: progressBytes,
      rate: rate ? rate : undefined,
      estimated: rate && total ? (total - loaded) / rate : undefined,
      event: e,
      lengthComputable: total != null,
      [isDownloadStream ? 'download' : 'upload']: true,
    };

    listener(data);
  }, freq);
};

const progressEventDecorator = (total, throttled) => {
  const lengthComputable = total != null;

  return [
    (loaded) =>
      throttled[0]({
        lengthComputable,
        total,
        loaded,
      }),
    throttled[1],
  ];
};

const asyncDecorator =
  (fn, scheduler = utils$1.asap) =>
  (...args) =>
    scheduler(() => fn(...args));var isURLSameOrigin = platform.hasStandardBrowserEnv
  ? ((origin, isMSIE) => (url) => {
      url = new URL(url, platform.origin);

      return (
        origin.protocol === url.protocol &&
        origin.host === url.host &&
        (isMSIE || origin.port === url.port)
      );
    })(
      new URL(platform.origin),
      platform.navigator && /(msie|trident)/i.test(platform.navigator.userAgent)
    )
  : () => true;var cookies = platform.hasStandardBrowserEnv
  ? // Standard browser envs support document.cookie
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
        // Match name=value by splitting on the semicolon separator instead of building a
        // RegExp from `name` — interpolating an unescaped string into a RegExp would let
        // metacharacters (e.g. `.+?` in an attacker-influenced cookie name) cause ReDoS or
        // match the wrong cookie. Browsers may serialize cookie pairs as either ";" or
        // "; ", so ignore optional whitespace before each cookie name.
        const cookies = document.cookie.split(';');
        for (let i = 0; i < cookies.length; i++) {
          const cookie = cookies[i].replace(/^\s+/, '');
          const eq = cookie.indexOf('=');
          if (eq !== -1 && cookie.slice(0, eq) === name) {
            try {
              return decodeURIComponent(cookie.slice(eq + 1));
            } catch (e) {
              return cookie.slice(eq + 1);
            }
          }
        }
        return null;
      },

      remove(name) {
        this.write(name, '', Date.now() - 86400000, '/');
      },
    }
  : // Non-standard browser env (web workers, react-native) lack needed support.
    {
      write() {},
      read() {
        return null;
      },
      remove() {},
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
  if (typeof url !== 'string') {
    return false;
  }

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
  if (!relativeURL) {
    return baseURL;
  }

  let end = baseURL.length;

  while (end > 0 && baseURL.charCodeAt(end - 1) === 47) {
    end--;
  }

  return baseURL.slice(0, end) + '/' + relativeURL.replace(/^\/+/, '');
}const malformedHttpProtocol = /^https?:(?!\/\/)/i;

// Redact the parts of a URL that can carry secrets before it is embedded in an
// error message. AxiosError.toJSON() serializes `message` verbatim and errors
// are commonly logged, while the opt-in `config.redact` model only cleans
// config keys — it cannot reach the message. Redact only the genuinely
// sensitive substrings — userinfo (credentials), query parameter values and
// fragment contents — with the same REDACTED marker the config redaction uses,
// while keeping the scheme, host, path and parameter names so the offending
// request stays accurately identifiable.
function redactFragment(fragment) {
  if (!fragment) {
    return fragment;
  }

  return fragment.replace(/(^|&)([^=&]*=)?[^&]+/g, (match, separator, parameterName = '') => {
    return `${separator}${parameterName}${REDACTED}`;
  });
}

function redactSensitiveURLParts(url) {
  const redactedURL = url.replace(/^(https?:\/{0,2})[^/?#]*@/i, `$1${REDACTED}@`);
  const fragmentIndex = redactedURL.indexOf('#');
  const urlWithoutFragment =
    fragmentIndex === -1 ? redactedURL : redactedURL.slice(0, fragmentIndex);
  const redactedURLWithoutFragment = urlWithoutFragment.replace(
    /([?&][^=&#]*=)[^&#]*/g,
    `$1${REDACTED}`
  );

  if (fragmentIndex === -1) {
    return redactedURLWithoutFragment;
  }

  return `${redactedURLWithoutFragment}#${redactFragment(redactedURL.slice(fragmentIndex + 1))}`;
}

function assertValidHttpProtocolURL(url, config) {
  if (typeof url === 'string') {
    const normalizedURL = normalizeURLForProtocolCheck(url);
    if (malformedHttpProtocol.test(normalizedURL)) {
      throw new AxiosError$1(
        `Invalid URL ${JSON.stringify(redactSensitiveURLParts(normalizedURL))}: missing "//" after protocol`,
        AxiosError$1.ERR_INVALID_URL,
        config
      );
    }
  }
}

/**
 * Creates a new URL by combining the baseURL with the requestedURL,
 * only when the requestedURL is not already an absolute URL.
 * If the requestURL is absolute, this function returns the requestedURL untouched.
 *
 * @param {string} baseURL The base URL
 * @param {string} requestedURL Absolute or relative URL to combine
 *
 * @returns {string} The combined full path
 */
function buildFullPath(baseURL, requestedURL, allowAbsoluteUrls, config) {
  assertValidHttpProtocolURL(requestedURL, config);
  let isRelativeUrl = !isAbsoluteURL(requestedURL);
  if (baseURL && (isRelativeUrl || allowAbsoluteUrls === false)) {
    assertValidHttpProtocolURL(baseURL, config);
    return combineURLs(baseURL, requestedURL);
  }
  return requestedURL;
}const headersToObject = (thing) => (thing instanceof AxiosHeaders$1 ? { ...thing } : thing);

const ownEnumerableKeys = (thing) => {
  if (Object.getOwnPropertySymbols && Object.getOwnPropertyDescriptor) {
    return Object.keys(thing).concat(
      Object.getOwnPropertySymbols(thing).filter(
        (symbol) => Object.getOwnPropertyDescriptor(thing, symbol).enumerable
      )
    );
  }
  return Object.keys(thing);
};

/**
 * Config-specific merge-function which creates a new config-object
 * by merging two configuration objects together.
 *
 * @param {Object} config1
 * @param {Object} config2
 *
 * @returns {Object} New object resulting from merging config2 to config1
 */
function mergeConfig$1(config1, config2) {
  // eslint-disable-next-line no-param-reassign
  config1 = config1 || {};
  config2 = config2 || {};

  // Use a null-prototype object so that downstream reads such as `config.auth`
  // or `config.baseURL` cannot inherit polluted values from Object.prototype.
  // `hasOwnProperty` is restored as a non-enumerable own slot to preserve
  // ergonomics for user code that relies on it.
  const config = Object.create(null);
  Object.defineProperty(config, 'hasOwnProperty', {
    // Null-proto descriptor so a polluted Object.prototype.get cannot turn
    // this data descriptor into an accessor descriptor on the way in.
    __proto__: null,
    value: Object.prototype.hasOwnProperty,
    enumerable: false,
    writable: true,
    configurable: true,
  });

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

  function getMergedTransitionalOption(prop) {
    const transitional2 = utils$1.hasOwnProp(config2, 'transitional')
      ? config2.transitional
      : undefined;

    if (!utils$1.isUndefined(transitional2)) {
      if (utils$1.isPlainObject(transitional2)) {
        if (utils$1.hasOwnProp(transitional2, prop)) {
          return transitional2[prop];
        }
      } else {
        return undefined;
      }
    }

    const transitional1 = utils$1.hasOwnProp(config1, 'transitional')
      ? config1.transitional
      : undefined;

    if (utils$1.isPlainObject(transitional1) && utils$1.hasOwnProp(transitional1, prop)) {
      return transitional1[prop];
    }

    return undefined;
  }

  // eslint-disable-next-line consistent-return
  function mergeDirectKeys(a, b, prop) {
    if (utils$1.hasOwnProp(config2, prop)) {
      return getMergedValue(a, b);
    } else if (utils$1.hasOwnProp(config1, prop)) {
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
    timeoutErrorMessage: defaultToConfig2,
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
    allowedSocketPaths: defaultToConfig2,
    responseEncoding: defaultToConfig2,
    validateStatus: mergeDirectKeys,
    headers: (a, b, prop) =>
      mergeDeepProperties(headersToObject(a), headersToObject(b), prop, true),
  };

  utils$1.forEach(ownEnumerableKeys({ ...config1, ...config2 }), function computeConfigValue(prop) {
    if (prop === '__proto__' || prop === 'constructor' || prop === 'prototype') return;
    const merge = utils$1.hasOwnProp(mergeMap, prop) ? mergeMap[prop] : mergeDeepProperties;
    const a = utils$1.hasOwnProp(config1, prop) ? config1[prop] : undefined;
    const b = utils$1.hasOwnProp(config2, prop) ? config2[prop] : undefined;
    const configValue = merge(a, b, prop);
    (utils$1.isUndefined(configValue) && merge !== mergeDirectKeys) || (config[prop] = configValue);
  });

  if (
    utils$1.hasOwnProp(config2, 'validateStatus') &&
    utils$1.isUndefined(config2.validateStatus) &&
    getMergedTransitionalOption('validateStatusUndefinedResolves') === false
  ) {
    if (utils$1.hasOwnProp(config1, 'validateStatus')) {
      config.validateStatus = getMergedValue(undefined, config1.validateStatus);
    } else {
      delete config.validateStatus;
    }
  }

  return config;
}const FORM_DATA_CONTENT_HEADERS = ['content-type', 'content-length'];

/**
 * Apply the headers generated by a FormData implementation to the request headers,
 * honoring the `formDataHeaderPolicy` option: with 'content-only', copy only the
 * content-* headers; otherwise merge all of them.
 *
 * @param {AxiosHeaders} headers - the request headers to mutate
 * @param {Object | null | undefined} formHeaders - headers produced by the FormData implementation
 * @param {String} [policy] - the resolved `formDataHeaderPolicy` config value
 *
 * @returns {void}
 */
function setFormDataHeaders(headers, formHeaders, policy) {
  if (policy !== 'content-only') {
    headers.set(formHeaders);
    return;
  }

  Object.entries(formHeaders || {}).forEach(([key, val]) => {
    if (FORM_DATA_CONTENT_HEADERS.includes(key.toLowerCase())) {
      headers.set(key, val);
    }
  });
}/**
 * Encode a UTF-8 string to a Latin-1 byte string for use with btoa().
 * This is a modern replacement for the deprecated unescape(encodeURIComponent(str)) pattern.
 *
 * @param {string} str The string to encode
 *
 * @returns {string} UTF-8 bytes as a Latin-1 string
 */
const encodeUTF8$1 = (str) =>
  encodeURIComponent(str).replace(/%([0-9A-F]{2})/gi, (_, hex) =>
    String.fromCharCode(parseInt(hex, 16))
  );

function resolveConfig(config) {
  const newConfig = mergeConfig$1({}, config);

  // Read only own properties to prevent prototype pollution gadgets
  // (e.g. Object.prototype.baseURL = 'https://evil.com').
  const own = (key) => (utils$1.hasOwnProp(newConfig, key) ? newConfig[key] : undefined);

  const data = own('data');
  let withXSRFToken = own('withXSRFToken');
  const xsrfHeaderName = own('xsrfHeaderName');
  const xsrfCookieName = own('xsrfCookieName');
  let headers = own('headers');
  const auth = own('auth');
  const baseURL = own('baseURL');
  const allowAbsoluteUrls = own('allowAbsoluteUrls');
  const url = own('url');

  newConfig.headers = headers = AxiosHeaders$1.from(headers);

  newConfig.url = buildURL(
    buildFullPath(baseURL, url, allowAbsoluteUrls, newConfig),
    own('params'),
    own('paramsSerializer')
  );

  // HTTP basic authentication
  if (auth) {
    const username = utils$1.getSafeProp(auth, 'username') || '';
    const password = utils$1.getSafeProp(auth, 'password') || '';

    try {
      headers.set(
        'Authorization',
        'Basic ' + btoa(username + ':' + (password ? encodeUTF8$1(password) : ''))
      );
    } catch (e) {
      throw AxiosError$1.from(e, AxiosError$1.ERR_BAD_OPTION_VALUE, config);
    }
  }

  if (utils$1.isFormData(data)) {
    const getHeaders = utils$1.getSafeProp(data, 'getHeaders');

    if (
      platform.hasStandardBrowserEnv ||
      platform.hasStandardBrowserWebWorkerEnv ||
      utils$1.isReactNative(data)
    ) {
      headers.setContentType(undefined); // browser/web worker/RN handles it
    } else if (utils$1.isFunction(getHeaders)) {
      // Node.js FormData (like form-data package)
      setFormDataHeaders(headers, getHeaders.call(data), own('formDataHeaderPolicy'));
    }
  }

  // Add xsrf header
  // This is only done if running in a standard browser environment.
  // Specifically not if we're in a web worker, or react-native.

  if (platform.hasStandardBrowserEnv) {
    if (utils$1.isFunction(withXSRFToken)) {
      withXSRFToken = withXSRFToken(newConfig);
    }

    // Strict boolean check — prevents proto-pollution gadgets (e.g. Object.prototype.withXSRFToken = 1)
    // and misconfigurations (e.g. "false") from short-circuiting the same-origin check and leaking
    // the XSRF token cross-origin.
    const shouldSendXSRF =
      withXSRFToken === true || (withXSRFToken == null && isURLSameOrigin(newConfig.url));

    if (shouldSendXSRF) {
      const xsrfValue = xsrfHeaderName && xsrfCookieName && cookies.read(xsrfCookieName);

      if (xsrfValue) {
        headers.set(xsrfHeaderName, xsrfValue);
      }
    }
  }

  return newConfig;
}const isXHRAdapterSupported = typeof XMLHttpRequest !== 'undefined';

var xhrAdapter = isXHRAdapterSupported &&
  function (config) {
    return new Promise(function dispatchXhrRequest(resolve, reject) {
      const _config = resolveConfig(config);
      let requestData = _config.data;
      const requestHeaders = AxiosHeaders$1.from(_config.headers).normalize();
      let { responseType, onUploadProgress, onDownloadProgress } = _config;
      let onCanceled;
      let uploadThrottled, downloadThrottled;
      let flushUpload, flushDownload, flushDownloadWithEvent;

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

      function onloadend(event) {
        if (!request) {
          return;
        }

        // Status 0 means no response was received, which onerror and onabort normally
        // reject before this runs. Firefox 152 fires only readystatechange and loadend for
        // navigation-canceled requests (https://bugzilla.mozilla.org/show_bug.cgi?id=1505389),
        // leaving settle() to resolve them as an empty success. ECONNABORTED is the error
        // onabort raised on Firefox 151. Reads over file:, which some environments report as
        // status 0 on success, are excluded by the request URL's scheme after browser-style
        // preprocessing, by the page origin's scheme for relative URLs (which inherit it), or
        // by responseURL where implemented.
        if (
          request.status === 0 &&
          (parseProtocol(normalizeURLForProtocolCheck(_config.url)) ||
            parseProtocol(platform.origin)) !== 'file' &&
          !(request.responseURL && request.responseURL.startsWith('file:'))
        ) {
          reject(new AxiosError$1('Request aborted', AxiosError$1.ECONNABORTED, config, request));
          done();

          // Clean up request
          request = null;
          return;
        }

        // When loadend is still dispatching, flushing with it gives progress
        // listeners a final delivery whose event has a live target. The legacy
        // ready-state fallback has no event, so replay its pending progress.
        // A throwing listener must not block settlement; rethrow asynchronously,
        // matching how listener errors surface on the throttle timer path.
        try {
          if (event) {
            flushDownloadWithEvent && flushDownloadWithEvent(event);
          } else {
            flushDownload && flushDownload();
          }
        } catch (err) {
          setTimeout(() => {
            throw err;
          });
        }

        // A final progress callback can cancel the request synchronously.
        if (!request) {
          return;
        }

        // Prepare the response
        const responseHeaders = AxiosHeaders$1.from(
          'getAllResponseHeaders' in request && request.getAllResponseHeaders()
        );
        const responseData =
          !responseType || responseType === 'text' || responseType === 'json'
            ? request.responseText
            : request.response;
        const response = {
          data: responseData,
          status: request.status,
          statusText: request.statusText,
          headers: responseHeaders,
          config,
          request,
        };

        settle(
          function _resolve(value) {
            resolve(value);
            done();
          },
          function _reject(err) {
            reject(err);
            done();
          },
          response
        );

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
          if (
            request.status === 0 &&
            !(request.responseURL && request.responseURL.startsWith('file:'))
          ) {
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

        reject(new AxiosError$1('Request aborted', AxiosError$1.ECONNABORTED, config, request));
        done();

        // Clean up request
        request = null;
      };

      // Handle low level network errors
      request.onerror = function handleError(event) {
        // Browsers deliver a ProgressEvent in XHR onerror
        // (message may be empty; when present, surface it)
        // See https://developer.mozilla.org/docs/Web/API/XMLHttpRequest/error_event
        const msg = event && event.message ? event.message : 'Network Error';
        const err = new AxiosError$1(msg, AxiosError$1.ERR_NETWORK, config, request);
        // attach the underlying event for consumers who want details
        err.event = event || null;
        reject(err);
        done();
        request = null;
      };

      // Handle timeout
      request.ontimeout = function handleTimeout() {
        let timeoutErrorMessage = _config.timeout
          ? 'timeout of ' + _config.timeout + 'ms exceeded'
          : 'timeout exceeded';
        const transitional = _config.transitional || transitionalDefaults;
        if (_config.timeoutErrorMessage) {
          timeoutErrorMessage = _config.timeoutErrorMessage;
        }
        reject(
          new AxiosError$1(
            timeoutErrorMessage,
            transitional.clarifyTimeoutError ? AxiosError$1.ETIMEDOUT : AxiosError$1.ECONNABORTED,
            config,
            request
          )
        );
        done();

        // Clean up request
        request = null;
      };

      // Remove Content-Type if data is undefined
      requestData === undefined && requestHeaders.setContentType(null);

      // Add headers to the request
      if ('setRequestHeader' in request) {
        utils$1.forEach(toByteStringHeaderObject(requestHeaders), function setRequestHeader(val, key) {
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
        [downloadThrottled, flushDownload, flushDownloadWithEvent] = progressEventReducer(
          onDownloadProgress,
          true
        );
        request.addEventListener('progress', downloadThrottled);
      }

      // Not all browsers support upload events
      if (onUploadProgress && request.upload) {
        [uploadThrottled, flushUpload] = progressEventReducer(onUploadProgress);

        request.upload.addEventListener('progress', uploadThrottled);

        request.upload.addEventListener('loadend', flushUpload);
      }

      if (_config.cancelToken || _config.signal) {
        // Handle cancellation
        // eslint-disable-next-line func-names
        onCanceled = (cancel) => {
          if (!request) {
            return;
          }
          reject(!cancel || cancel.type ? new CanceledError$1(null, config, request) : cancel);
          request.abort();
          done();
          request = null;
        };

        _config.cancelToken && _config.cancelToken.subscribe(onCanceled);
        if (_config.signal) {
          _config.signal.aborted
            ? onCanceled()
            : _config.signal.addEventListener('abort', onCanceled);
        }
      }

      const protocol = parseProtocol(_config.url);

      if (protocol && !platform.protocols.includes(protocol)) {
        reject(
          new AxiosError$1(
            'Unsupported protocol ' + protocol + ':',
            AxiosError$1.ERR_BAD_REQUEST,
            config
          )
        );
        done();
        return;
      }

      // Send the request
      request.send(requestData || null);
    });
  };const composeSignals = (signals, timeout) => {
  signals = signals ? signals.filter(Boolean) : [];

  if (!timeout && !signals.length) {
    return;
  }

  const controller = new AbortController();

  let aborted = false;

  const onabort = function (reason) {
    if (!aborted) {
      aborted = true;
      unsubscribe();
      const err = reason instanceof Error ? reason : this.reason;
      controller.abort(
        err instanceof AxiosError$1
          ? err
          : new CanceledError$1(err instanceof Error ? err.message : err)
      );
    }
  };

  let timer =
    timeout &&
    setTimeout(() => {
      timer = null;
      onabort(new AxiosError$1(`timeout of ${timeout}ms exceeded`, AxiosError$1.ETIMEDOUT));
    }, timeout);

  const unsubscribe = () => {
    if (!signals) { return; }
    timer && clearTimeout(timer);
    timer = null;
    signals.forEach((signal) => {
      signal.unsubscribe
        ? signal.unsubscribe(onabort)
        : signal.removeEventListener('abort', onabort);
    });
    signals = null;
  };

  signals.forEach((signal) => {
    if (aborted) {
      return;
    }

    if (signal.aborted) {
      onabort.call(signal);
      return;
    }

    signal.addEventListener('abort', onabort, { once: true });
  });

  const { signal } = controller;

  signal.unsubscribe = () => utils$1.asap(unsubscribe);

  return signal;
};const streamChunk = function* (chunk, chunkSize) {
  let len = chunk.byteLength;

  if (len < chunkSize) {
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
      const { done, value } = await reader.read();
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

  return new ReadableStream(
    {
      async pull(controller) {
        try {
          const { done, value } = await iterator.next();

          if (done) {
            _onFinish();
            controller.close();
            return;
          }

          let len = value.byteLength;
          if (onProgress) {
            let loadedBytes = (bytes += len);
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
      },
    },
    {
      highWaterMark: 2,
    }
  );
};/**
 * Estimate data: URL byte lengths *without* allocating large buffers.
 * - Fetch percent-decodes a base64 body before decoding it.
 * - Node's Buffer.from(body, 'base64') sizes its backing allocation from the
 *   raw body, including ignored characters and content after padding.
 * - Non-base64 data is percent-decoded and then encoded as UTF-8.
 */
const isHexDigit = (charCode) =>
  (charCode >= 48 && charCode <= 57) ||
  (charCode >= 65 && charCode <= 70) ||
  (charCode >= 97 && charCode <= 102);

const isPercentEncodedByte = (str, i, len) =>
  i + 2 < len && isHexDigit(str.charCodeAt(i + 1)) && isHexDigit(str.charCodeAt(i + 2));

const hexValue = (charCode) => (charCode <= 57 ? charCode - 48 : (charCode & 0xdf) - 55);

const isBase64Char = (charCode) =>
  (charCode >= 65 && charCode <= 90) || // A-Z
  (charCode >= 97 && charCode <= 122) || // a-z
  (charCode >= 48 && charCode <= 57) || // 0-9
  charCode === 43 || // +
  charCode === 47 || // /
  charCode === 45 || // - (base64url)
  charCode === 95; // _ (base64url)

const isBase64Whitespace = (charCode) =>
  charCode === 9 || charCode === 10 || charCode === 12 || charCode === 13 || charCode === 32;

const base64Bytes = (significant) => {
  const groups = Math.floor(significant / 4);
  const remainder = significant % 4;
  return groups * 3 + (remainder === 2 ? 1 : remainder === 3 ? 2 : 0);
};

// Buffer.byteLength(body, 'base64') uses the raw string length as an allocation
// upper bound even when Buffer.from later ignores characters or stops at '='.
const estimateBase64BufferAllocation = (body) => {
  const len = body.length;
  let padding = 0;

  if (len > 0 && body.charCodeAt(len - 1) === 61 /* '=' */) {
    padding++;

    if (len > 1 && body.charCodeAt(len - 2) === 61 /* '=' */) {
      padding++;
    }
  }

  return Math.floor(((len - padding) * 3) / 4);
};

const estimatePercentDecodedBase64Bytes = (body) => {
  const len = body.length;
  let significant = 0;
  let padding = 0;
  let invalid = false;

  for (let i = 0; i < len; i++) {
    let code = body.charCodeAt(i);

    if (code === 37 /* '%' */ && isPercentEncodedByte(body, i, len)) {
      code = hexValue(body.charCodeAt(i + 1)) * 16 + hexValue(body.charCodeAt(i + 2));
      i += 2;
    }

    if (isBase64Whitespace(code)) {
      continue;
    }

    if (code === 61 /* '=' */) {
      padding++;
      continue;
    }

    if (!isBase64Char(code) || padding > 0) {
      invalid = true;
      continue;
    }

    significant++;
  }

  // Fetch rejects malformed forgiving-base64 input. Returning the raw-size
  // allocation bound keeps that invalid input from becoming a pre-check bypass.
  if (
    invalid ||
    padding > 2 ||
    (padding > 0 && (significant + padding) % 4 !== 0) ||
    significant % 4 === 1
  ) {
    return estimateBase64BufferAllocation(body);
  }

  return base64Bytes(significant);
};

const estimateDataURLBytes = (url, estimateBase64) => {
  if (!url || typeof url !== 'string') return 0;
  if (!url.startsWith('data:')) return 0;

  const comma = url.indexOf(',');
  if (comma < 0) return 0;

  const meta = url.slice(5, comma);
  const body = url.slice(comma + 1);
  const isBase64 = /;base64/i.test(meta);

  if (isBase64) {
    return estimateBase64(body);
  }

  // Compute UTF-8 byte length directly from UTF-16 code units without allocating
  // a byte buffer (TextEncoder.encode would defeat the DoS guard on large bodies).
  // Valid %XX triplets count as one decoded byte; this matches the bytes that
  // decodeURIComponent(body) would produce before Buffer re-encodes the string.
  let bytes = 0;
  for (let i = 0, len = body.length; i < len; i++) {
    const c = body.charCodeAt(i);
    if (c === 37 /* '%' */ && isPercentEncodedByte(body, i, len)) {
      bytes += 1;
      i += 2;
    } else if (c < 0x80) {
      bytes += 1;
    } else if (c < 0x800) {
      bytes += 2;
    } else if (c >= 0xd800 && c <= 0xdbff && i + 1 < len) {
      const next = body.charCodeAt(i + 1);
      if (next >= 0xdc00 && next <= 0xdfff) {
        bytes += 4;
        i++;
      } else {
        bytes += 3;
      }
    } else {
      bytes += 3;
    }
  }
  return bytes;
};

/**
 * Estimate the percent-decoded payload size used by Fetch data: URLs.
 *
 * @param {string} url
 * @returns {number}
 */
function estimateDataURLDecodedBytes(url) {
  // Fetch removes URL fragments before processing a data: URL.
  const fragmentIndex = typeof url === 'string' ? url.indexOf('#') : -1;

  return estimateDataURLBytes(
    fragmentIndex === -1 ? url : url.slice(0, fragmentIndex),
    estimatePercentDecodedBase64Bytes
  );
}const VERSION$1 = "1.20.0";const DEFAULT_CHUNK_SIZE = 64 * 1024;

const DEFAULT_REQUEST_OPTIONS = {
  cache: 'default',
  redirect: 'follow',
  referrer: 'about:client',
  referrerPolicy: '',
  mode: 'cors',
  integrity: '',
  keepalive: false,
  priority: 'auto',
  window: null,
};

const { isFunction } = utils$1;

/**
 * Encode a UTF-8 string to a Latin-1 byte string for use with btoa().
 * This is a modern replacement for the deprecated unescape(encodeURIComponent(str)) pattern.
 *
 * @param {string} str The string to encode
 *
 * @returns {string} UTF-8 bytes as a Latin-1 string
 */
const encodeUTF8 = (str) =>
  encodeURIComponent(str).replace(/%([0-9A-F]{2})/gi, (_, hex) =>
    String.fromCharCode(parseInt(hex, 16))
  );

// Node's WHATWG URL parser returns `username` and `password` percent-encoded.
// Decode before composing the `auth` option so credentials such as
// `my%40email.com:pass` are sent as `my@email.com:pass`. Falls back to the
// original value for malformed input so a bad encoding never throws.
const decodeURIComponentSafe = (value) => {
  if (!utils$1.isString(value)) {
    return value;
  }

  try {
    return decodeURIComponent(value);
  } catch (error) {
    return value;
  }
};

const test = (fn, ...args) => {
  try {
    return !!fn(...args);
  } catch (e) {
    return false;
  }
};

const maybeWithAuthCredentials = (url) => {
  const protocolIndex = url.indexOf('://');
  let urlToCheck = url;
  if (protocolIndex !== -1) {
    urlToCheck = urlToCheck.slice(protocolIndex + 3);
  }
  return urlToCheck.includes('@') || urlToCheck.includes(':');
};

const factory = (env) => {
  const globalObject =
    utils$1.global !== undefined && utils$1.global !== null ? utils$1.global : globalThis;
  const { ReadableStream, TextEncoder } = globalObject;

  env = utils$1.merge.call(
    {
      skipUndefined: true,
    },
    {
      Request: globalObject.Request,
      Response: globalObject.Response,
    },
    env
  );

  const { fetch: envFetch, Request, Response } = env;
  const isFetchSupported = envFetch ? isFunction(envFetch) : typeof fetch === 'function';
  const isRequestSupported = isFunction(Request);
  const isResponseSupported = isFunction(Response);

  if (!isFetchSupported) {
    return false;
  }

  const isReadableStreamSupported = isFetchSupported && isFunction(ReadableStream);

  const encodeText =
    isFetchSupported &&
    (typeof TextEncoder === 'function'
      ? (
          (encoder) => (str) =>
            encoder.encode(str)
        )(new TextEncoder())
      : async (str) => new Uint8Array(await new Request(str).arrayBuffer()));

  const supportsRequestStream =
    isRequestSupported &&
    isReadableStreamSupported &&
    test(() => {
      let duplexAccessed = false;

      const request = new Request(platform.origin, {
        body: new ReadableStream(),
        method: 'POST',
        get duplex() {
          duplexAccessed = true;
          return 'half';
        },
      });

      const hasContentType = request.headers.has('Content-Type');

      if (request.body != null) {
        request.body.cancel();
      }

      return duplexAccessed && !hasContentType;
    });

  const supportsResponseStream =
    isResponseSupported &&
    isReadableStreamSupported &&
    test(() => utils$1.isReadableStream(new Response('').body));

  const resolvers = {
    stream: supportsResponseStream && ((res) => res.body),
  };

  isFetchSupported &&
    (() => {
      ['text', 'arrayBuffer', 'blob', 'formData', 'stream'].forEach((type) => {
        !resolvers[type] &&
          (resolvers[type] = (res, config) => {
            let method = res && res[type];

            if (method) {
              return method.call(res);
            }

            throw new AxiosError$1(
              `Response type '${type}' is not supported`,
              AxiosError$1.ERR_NOT_SUPPORT,
              config
            );
          });
      });
    })();

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
      fetchOptions,
      maxContentLength,
      maxBodyLength,
      maxRedirects,
    } = resolveConfig(config);

    const hasMaxContentLength = utils$1.isNumber(maxContentLength) && maxContentLength > -1;
    const hasMaxBodyLength = utils$1.isNumber(maxBodyLength) && maxBodyLength > -1;
    const own = (key) => (utils$1.hasOwnProp(config, key) ? config[key] : undefined);

    let _fetch = envFetch || fetch;

    responseType = responseType ? (responseType + '').toLowerCase() : 'text';

    let composedSignal = composeSignals(
      [signal, cancelToken && cancelToken.toAbortSignal()],
      timeout
    );

    let request = null;

    const unsubscribe =
      composedSignal &&
      composedSignal.unsubscribe &&
      (() => {
        composedSignal.unsubscribe();
      });

    let requestContentLength;

    // AxiosError we raise while the request body is being streamed. Captured
    // by identity so the catch block can surface it directly, regardless of
    // how the runtime wraps the resulting fetch rejection (undici exposes it
    // as `err.cause`; some browsers drop the original error entirely).
    let pendingBodyError = null;

    const maxBodyLengthError = () =>
      new AxiosError$1(
        'Request body larger than maxBodyLength limit',
        AxiosError$1.ERR_BAD_REQUEST,
        config,
        request
      );

    try {
      // HTTP basic authentication
      let auth = undefined;
      const configAuth = own('auth');

      if (configAuth) {
        const username = utils$1.getSafeProp(configAuth, 'username') || '';
        const password = utils$1.getSafeProp(configAuth, 'password') || '';
        auth = {
          username,
          password,
        };
      }

      if (maybeWithAuthCredentials(url)) {
        const parsedURL = new URL(url, platform.origin);

        if (!auth && (parsedURL.username || parsedURL.password)) {
          const urlUsername = decodeURIComponentSafe(parsedURL.username);
          const urlPassword = decodeURIComponentSafe(parsedURL.password);
          auth = {
            username: urlUsername,
            password: urlPassword,
          };
        }

        if (parsedURL.username || parsedURL.password) {
          parsedURL.username = '';
          parsedURL.password = '';
          url = parsedURL.href;
        }
      }

      if (auth) {
        headers.delete('authorization');
        headers.set(
          'Authorization',
          'Basic ' + btoa(encodeUTF8((auth.username || '') + ':' + (auth.password || '')))
        );
      }

      // Enforce maxContentLength for data: URLs up-front so we never materialize
      // an oversized payload. The HTTP adapter applies the same check (see http.js
      // "if (protocol === 'data:')" branch).
      if (hasMaxContentLength && typeof url === 'string' && url.startsWith('data:')) {
        const estimated = estimateDataURLDecodedBytes(url);
        if (estimated > maxContentLength) {
          throw new AxiosError$1(
            'maxContentLength size of ' + maxContentLength + ' exceeded',
            AxiosError$1.ERR_BAD_RESPONSE,
            config,
            request
          );
        }
      }

      // Enforce maxBodyLength against known-size bodies before dispatch using
      // the body's *actual* size — never a caller-declared Content-Length,
      // which could under-report to slip an oversized body past the check.
      // Unknown-size streams return undefined here and are counted per-chunk
      // below as fetch consumes them.
      if (hasMaxBodyLength && method !== 'get' && method !== 'head') {
        const outboundLength = await getBodyLength(data);
        if (typeof outboundLength === 'number' && isFinite(outboundLength)) {
          requestContentLength = outboundLength;
          if (outboundLength > maxBodyLength) {
            throw maxBodyLengthError();
          }
        }
      }

      // A streamed body under maxBodyLength must be counted as fetch consumes
      // it; its size is never trusted from a caller-declared Content-Length.
      const mustEnforceStreamBody =
        hasMaxBodyLength && (utils$1.isReadableStream(data) || utils$1.isStream(data));

      const trackRequestStream = (stream, onProgress, flush) =>
        trackStream(
          stream,
          DEFAULT_CHUNK_SIZE,
          (loadedBytes) => {
            if (hasMaxBodyLength && loadedBytes > maxBodyLength) {
              throw (pendingBodyError = maxBodyLengthError());
            }
            onProgress && onProgress(loadedBytes);
          },
          flush
        );

      if (
        supportsRequestStream &&
        method !== 'get' &&
        method !== 'head' &&
        (onUploadProgress || mustEnforceStreamBody)
      ) {
        requestContentLength =
          requestContentLength == null
            ? await resolveBodyLength(headers, data)
            : requestContentLength;

        // A declared length of 0 is only trusted to skip the wrap when we are
        // not enforcing a stream limit (which must not rely on that header).
        if (requestContentLength !== 0 || mustEnforceStreamBody) {
          let _request = new Request(url, {
            method: 'POST',
            body: data,
            duplex: 'half',
          });

          let contentTypeHeader;

          if (
            utils$1.isFormData(data) &&
            (contentTypeHeader = _request.headers.get('content-type'))
          ) {
            headers.setContentType(contentTypeHeader);
          }

          if (_request.body) {
            const [onProgress, flush] =
              (onUploadProgress &&
                progressEventDecorator(
                  requestContentLength,
                  progressEventReducer(asyncDecorator(onUploadProgress))
                )) ||
              [];

            data = trackRequestStream(_request.body, onProgress, flush);
          }
        }
      } else if (
        mustEnforceStreamBody &&
        !isRequestSupported &&
        isReadableStreamSupported &&
        method !== 'get' &&
        method !== 'head'
      ) {
        data = trackRequestStream(data);
      } else if (
        mustEnforceStreamBody &&
        isRequestSupported &&
        !supportsRequestStream &&
        method !== 'get' &&
        method !== 'head'
      ) {
        throw new AxiosError$1(
          'Stream request bodies are not supported by the current fetch implementation',
          AxiosError$1.ERR_NOT_SUPPORT,
          config,
          request
        );
      }

      if (!utils$1.isString(withCredentials)) {
        withCredentials = withCredentials ? 'include' : 'omit';
      }

      // Cloudflare Workers throws when credentials are defined
      // see https://github.com/cloudflare/workerd/issues/902
      const isCredentialsSupported = isRequestSupported && 'credentials' in Request.prototype;

      // If data is FormData and Content-Type is multipart/form-data without boundary,
      // delete it so fetch can set it correctly with the boundary
      if (utils$1.isFormData(data)) {
        const contentType = headers.getContentType();
        if (
          contentType &&
          /^multipart\/form-data/i.test(contentType) &&
          !/boundary=/i.test(contentType)
        ) {
          headers.delete('content-type');
        }
      }

      // Set User-Agent header if not already set (fetch defaults to 'node' in Node.js)
      headers.set('User-Agent', 'axios/' + VERSION$1, false);

      const safeFetchOptions =
        fetchOptions == null ? fetchOptions : Object.assign(Object.create(null), fetchOptions);

      if (safeFetchOptions) {
        // These options are owned by Axios and are already reflected in the
        // resolved Request passed to fetch.
        delete safeFetchOptions.body;
        delete safeFetchOptions.headers;
        delete safeFetchOptions.method;
        delete safeFetchOptions.signal;
        delete safeFetchOptions.duplex;
        delete safeFetchOptions.credentials;
      }

      const resolvedOptions = Object.assign(Object.create(null), safeFetchOptions, {
        signal: composedSignal,
        method: method.toUpperCase(),
        headers: toByteStringHeaderObject(headers.normalize()),
        body: data,
        duplex: 'half',
        credentials: isCredentialsSupported ? withCredentials : undefined,
      });

      if (isRequestSupported) {
        utils$1.forEach(DEFAULT_REQUEST_OPTIONS, (value, key) => {
          if (resolvedOptions[key] === undefined) {
            resolvedOptions[key] = value;
          }
        });

        if (resolvedOptions.signal === undefined) {
          resolvedOptions.signal = null;
        }

        if (resolvedOptions.body === undefined) {
          resolvedOptions.body = null;
        }
      }

      if (maxRedirects === 0) {
        resolvedOptions.redirect = 'manual';

        if (safeFetchOptions) {
          safeFetchOptions.redirect = 'manual';
        }
      }

      request = isRequestSupported && new Request(url, resolvedOptions);

      let response = await (isRequestSupported
        ? _fetch(request, safeFetchOptions)
        : _fetch(url, resolvedOptions));

      const responseHeaders = AxiosHeaders$1.from(response.headers);

      // Cheap pre-check: if the server honestly declares a content-length that
      // already exceeds the cap, reject before we start streaming.
      if (hasMaxContentLength) {
        const declaredLength = utils$1.toFiniteNumber(responseHeaders.getContentLength());
        if (declaredLength != null && declaredLength > maxContentLength) {
          throw new AxiosError$1(
            'maxContentLength size of ' + maxContentLength + ' exceeded',
            AxiosError$1.ERR_BAD_RESPONSE,
            config,
            request
          );
        }
      }

      const isStreamResponse =
        supportsResponseStream && (responseType === 'stream' || responseType === 'response');

      if (
        supportsResponseStream &&
        response.body &&
        (onDownloadProgress || hasMaxContentLength || (isStreamResponse && unsubscribe))
      ) {
        const options = {};

        ['status', 'statusText', 'headers'].forEach((prop) => {
          options[prop] = response[prop];
        });

        const responseContentLength = utils$1.toFiniteNumber(responseHeaders.getContentLength());

        const [onProgress, flush] =
          (onDownloadProgress &&
            progressEventDecorator(
              responseContentLength,
              progressEventReducer(asyncDecorator(onDownloadProgress), true)
            )) ||
          [];

        let bytesRead = 0;
        const onChunkProgress = (loadedBytes) => {
          if (hasMaxContentLength) {
            bytesRead = loadedBytes;
            if (bytesRead > maxContentLength) {
              throw new AxiosError$1(
                'maxContentLength size of ' + maxContentLength + ' exceeded',
                AxiosError$1.ERR_BAD_RESPONSE,
                config,
                request
              );
            }
          }
          onProgress && onProgress(loadedBytes);
        };

        response = new Response(
          trackStream(response.body, DEFAULT_CHUNK_SIZE, onChunkProgress, () => {
            flush && flush();
            unsubscribe && unsubscribe();
          }),
          options
        );
      }

      responseType = responseType || 'text';

      let responseData = await resolvers[utils$1.findKey(resolvers, responseType) || 'text'](
        response,
        config
      );

      // Fallback enforcement for environments without ReadableStream support
      // (legacy runtimes). Detect materialized size from typed output; skip
      // streams/Response passthrough since the user will read those themselves.
      if (hasMaxContentLength && !supportsResponseStream && !isStreamResponse) {
        let materializedSize;
        if (responseData != null) {
          if (typeof responseData.byteLength === 'number') {
            materializedSize = responseData.byteLength;
          } else if (typeof responseData.size === 'number') {
            materializedSize = responseData.size;
          } else if (typeof responseData === 'string') {
            materializedSize =
              typeof TextEncoder === 'function'
                ? new TextEncoder().encode(responseData).byteLength
                : responseData.length;
          }
        }
        if (typeof materializedSize === 'number' && materializedSize > maxContentLength) {
          throw new AxiosError$1(
            'maxContentLength size of ' + maxContentLength + ' exceeded',
            AxiosError$1.ERR_BAD_RESPONSE,
            config,
            request
          );
        }
      }

      !isStreamResponse && unsubscribe && unsubscribe();

      return await new Promise((resolve, reject) => {
        settle(resolve, reject, {
          data: responseData,
          headers: AxiosHeaders$1.from(response.headers),
          status: response.status,
          statusText: response.statusText,
          config,
          request,
        });
      });
    } catch (err) {
      unsubscribe && unsubscribe();

      // Safari can surface fetch aborts as a DOMException-like object whose
      // branded getters throw. Prefer our composed signal reason before reading
      // the caught error, preserving timeout vs cancellation semantics.
      if (composedSignal && composedSignal.aborted && composedSignal.reason instanceof AxiosError$1) {
        const canceledError = composedSignal.reason;
        canceledError.config = config;
        request && (canceledError.request = request);
        if (err !== canceledError) {
          // Non-enumerable to match native Error `cause` semantics so loggers
          // don't recurse into circular fetch internals (see #7205).
          Object.defineProperty(canceledError, 'cause', {
            __proto__: null,
            value: err,
            writable: true,
            enumerable: false,
            configurable: true,
          });
        }
        throw canceledError;
      }

      // Surface a maxBodyLength violation we raised while the request body was
      // being streamed. Matching by identity (rather than reading
      // `err.cause.isAxiosError`) keeps the error deterministic across runtimes
      // and avoids both prototype-pollution reads and mis-attributing a foreign
      // AxiosError that merely happened to land in `err.cause`.
      if (pendingBodyError) {
        request && !pendingBodyError.request && (pendingBodyError.request = request);
        throw pendingBodyError;
      }

      // Re-throw AxiosErrors we raised synchronously (data: URL / content-length
      // pre-checks, response size enforcement) without re-wrapping them.
      if (err instanceof AxiosError$1) {
        request && !err.request && (err.request = request);
        throw err;
      }

      if (err && err.name === 'TypeError' && /Load failed|fetch/i.test(err.message)) {
        const networkError = new AxiosError$1(
          'Network Error',
          AxiosError$1.ERR_NETWORK,
          config,
          request,
          err && err.response
        );
        // Non-enumerable to match native Error `cause` semantics so loggers
        // don't recurse into circular fetch internals (see #7205).
        Object.defineProperty(networkError, 'cause', {
          __proto__: null,
          value: err.cause || err,
          writable: true,
          enumerable: false,
          configurable: true,
        });
        throw networkError;
      }

      throw AxiosError$1.from(err, err && err.code, config, request, err && err.response);
    }
  };
};

const seedCache = new Map();

const getFetch = (config) => {
  let env = (config && config.env) || {};
  const { fetch, Request, Response } = env;
  const seeds = [Request, Response, fetch];

  let len = seeds.length,
    i = len,
    seed,
    target,
    map = seedCache;

  while (i--) {
    seed = seeds[i];
    target = map.get(seed);

    target === undefined && map.set(seed, (target = i ? new Map() : factory(env)));

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
  },
};

// Assign adapter names for easier debugging and identification
utils$1.forEach(knownAdapters, (fn, value) => {
  if (fn) {
    try {
      // Null-proto descriptors so a polluted Object.prototype.get cannot turn
      // these data descriptors into accessor descriptors on the way in.
      Object.defineProperty(fn, 'name', { __proto__: null, value });
    } catch (e) {
      // eslint-disable-next-line no-empty
    }
    Object.defineProperty(fn, 'adapterName', { __proto__: null, value });
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
const isResolvedHandle = (adapter) =>
  utils$1.isFunction(adapter) || adapter === null || adapter === false;

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
function getAdapter$1(adapters, config) {
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
        throw new AxiosError$1(`Unknown adapter '${id}'`);
      }
    }

    if (adapter && (utils$1.isFunction(adapter) || (adapter = adapter.get(config)))) {
      break;
    }

    rejectedReasons[id || '#' + i] = adapter;
  }

  if (!adapter) {
    const reasons = Object.entries(rejectedReasons).map(
      ([id, state]) =>
        `adapter ${id} ` +
        (state === false ? 'is not supported by the environment' : 'is not available in the build')
    );

    let s = length
      ? reasons.length > 1
        ? 'since :\n' + reasons.map(renderReason).join('\n')
        : ' ' + renderReason(reasons[0])
      : 'as no adapter specified';

    throw new AxiosError$1(
      `There is no suitable adapter to dispatch the request ` + s,
      AxiosError$1.ERR_NOT_SUPPORT
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
  getAdapter: getAdapter$1,

  /**
   * Exposes all known adapters
   * @type {Object<string, Function|Object>}
   */
  adapters: knownAdapters,
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
    throw new CanceledError$1(null, config);
  }
}

/**
 * Dispatch a request to the server using the configured adapter.
 *
 * @param {object} config The config that is to be used for the request
 *
 * @returns {Promise} The Promise to be fulfilled
 */
function dispatchRequest(_config) {
  // Interceptors may replace the merged config with an ordinary object. Flatten
  // it at the dispatch boundary so shared prototype members cannot become
  // request behavior, while preserving intentional template/class members.
  const config = utils$1.toSafeFlatObject(_config);

  throwIfCancellationRequested(config);

  config.headers = AxiosHeaders$1.from(utils$1.getSafeProp(config, 'headers'));

  // Transform request data
  config.data = transformData.call(config, config.transformRequest);

  if (['post', 'put', 'patch'].indexOf(config.method) !== -1) {
    config.headers.setContentType('application/x-www-form-urlencoded', false);
  }

  const adapter = adapters.getAdapter(config.adapter || defaults.adapter, config);

  return adapter(config).then(
    function onAdapterResolution(response) {
      throwIfCancellationRequested(config);

      // Expose the current response on config so that transformResponse can
      // attach it to any AxiosError it throws (e.g. on JSON parse failure).
      // We clean it up afterwards to avoid polluting the config object.
      config.response = response;
      try {
        response.data = transformData.call(config, config.transformResponse, response);
      } finally {
        delete config.response;
      }

      response.headers = AxiosHeaders$1.from(response.headers);

      return response;
    },
    function onAdapterRejection(reason) {
      if (!isCancel$1(reason)) {
        throwIfCancellationRequested(config);

        // Transform response data
        if (reason && reason.response) {
          config.response = reason.response;
          try {
            reason.response.data = transformData.call(
              config,
              config.transformResponse,
              reason.response
            );
          } finally {
            delete config.response;
          }
          reason.response.headers = AxiosHeaders$1.from(reason.response.headers);
        }
      }

      return Promise.reject(reason);
    }
  );
}const validators$1 = {};

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
    return (
      '[Axios v' +
      VERSION$1 +
      "] Transitional option '" +
      opt +
      "'" +
      desc +
      (message ? '. ' + message : '')
    );
  }

  // eslint-disable-next-line func-names
  return (value, opt, opts) => {
    if (validator === false) {
      throw new AxiosError$1(
        formatMessage(opt, ' has been removed' + (version ? ' in ' + version : '')),
        AxiosError$1.ERR_DEPRECATED
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
  };
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
  if (typeof options !== 'object' || options === null) {
    throw new AxiosError$1('options must be an object', AxiosError$1.ERR_BAD_OPTION_VALUE);
  }
  const keys = Object.keys(options);
  let i = keys.length;
  while (i-- > 0) {
    const opt = keys[i];
    // Use hasOwnProperty so a polluted Object.prototype.<opt> cannot supply
    // a non-function validator and cause a TypeError.
    const validator = Object.prototype.hasOwnProperty.call(schema, opt) ? schema[opt] : undefined;
    if (validator) {
      const value = options[opt];
      const result = value === undefined || validator(value, opt, options);
      if (result !== true) {
        throw new AxiosError$1(
          'option ' + opt + ' must be ' + result,
          AxiosError$1.ERR_BAD_OPTION_VALUE
        );
      }
      continue;
    }
    if (allowUnknown !== true) {
      throw new AxiosError$1('Unknown option ' + opt, AxiosError$1.ERR_BAD_OPTION);
    }
  }
}

var validator = {
  assertOptions,
  validators: validators$1,
};const validators = validator.validators;

/**
 * Create a new instance of Axios
 *
 * @param {Object} instanceConfig The default config for the instance
 *
 * @return {Axios} A new instance of Axios
 */
let Axios$1=class Axios {
  constructor(instanceConfig) {
    this.defaults = instanceConfig || {};
    this.interceptors = {
      request: new InterceptorManager(),
      response: new InterceptorManager(),
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
        try {
          let dummy = {};

          Error.captureStackTrace ? Error.captureStackTrace(dummy) : (dummy = new Error());

          const dummyStack = dummy.stack;
          let stack = '';

          // slice off the Error: ... line
          if (typeof dummyStack === 'string') {
            const firstNewlineIndex = dummyStack.indexOf('\n');

            stack = firstNewlineIndex === -1 ? '' : dummyStack.slice(firstNewlineIndex + 1);
          }

          if (!err.stack) {
            err.stack = stack;
            // match without the 2 top stack lines
          } else if (stack) {
            const firstNewlineIndex = stack.indexOf('\n');
            const secondNewlineIndex =
              firstNewlineIndex === -1 ? -1 : stack.indexOf('\n', firstNewlineIndex + 1);
            const stackWithoutTwoTopLines =
              secondNewlineIndex === -1 ? '' : stack.slice(secondNewlineIndex + 1);

            if (!String(err.stack).endsWith(stackWithoutTwoTopLines)) {
              err.stack += '\n' + stack;
            }
          }
        } catch (e) {
          // Ignore failures from custom stack hooks or un-writable stack properties.
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

    config = mergeConfig$1(this.defaults, config);

    const { transitional, paramsSerializer, headers } = config;

    if (transitional !== undefined) {
      validator.assertOptions(
        transitional,
        {
          silentJSONParsing: validators.transitional(validators.boolean),
          forcedJSONParsing: validators.transitional(validators.boolean),
          clarifyTimeoutError: validators.transitional(validators.boolean),
          legacyInterceptorReqResOrdering: validators.transitional(validators.boolean),
          advertiseZstdAcceptEncoding: validators.transitional(validators.boolean),
          validateStatusUndefinedResolves: validators.transitional(validators.boolean),
        },
        false
      );
    }

    if (paramsSerializer != null) {
      if (utils$1.isFunction(paramsSerializer)) {
        config.paramsSerializer = {
          serialize: paramsSerializer,
        };
      } else {
        validator.assertOptions(
          paramsSerializer,
          {
            encode: validators.function,
            serialize: validators.function,
          },
          true
        );
      }
    }

    // Set config.allowAbsoluteUrls
    if (config.allowAbsoluteUrls !== undefined) ; else if (this.defaults.allowAbsoluteUrls !== undefined) {
      config.allowAbsoluteUrls = this.defaults.allowAbsoluteUrls;
    } else {
      config.allowAbsoluteUrls = true;
    }

    validator.assertOptions(
      config,
      {
        baseUrl: validators.spelling('baseURL'),
        withXsrfToken: validators.spelling('withXSRFToken'),
      },
      true
    );

    // Set config.method
    config.method = (
      utils$1.getSafeProp(config, 'method') ||
      utils$1.getSafeProp(this.defaults, 'method') ||
      'get'
    ).toLowerCase();

    // Flatten headers
    let contextHeaders = headers && utils$1.merge(headers.common, headers[config.method]);

    headers &&
      utils$1.forEach(methodList.concat('common'), (method) => {
        delete headers[method];
      });

    config.headers = AxiosHeaders$1.concat(contextHeaders, headers);

    // filter out skipped interceptors
    const requestInterceptorChain = [];
    let synchronousRequestInterceptors = true;
    this.interceptors.request.forEach(function unshiftRequestInterceptors(interceptor) {
      if (typeof interceptor.runWhen === 'function' && interceptor.runWhen(config) === false) {
        return;
      }

      synchronousRequestInterceptors = synchronousRequestInterceptors && interceptor.synchronous;

      const transitional = config.transitional || transitionalDefaults;
      const legacyInterceptorReqResOrdering =
        transitional && transitional.legacyInterceptorReqResOrdering;

      if (legacyInterceptorReqResOrdering) {
        requestInterceptorChain.unshift(interceptor.fulfilled, interceptor.rejected);
      } else {
        requestInterceptorChain.push(interceptor.fulfilled, interceptor.rejected);
      }
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
        newConfig = onFulfilled ? onFulfilled(newConfig) : newConfig;
      } catch (error) {
        if (!onRejected) {
          promise = Promise.reject(error);
          break;
        }

        try {
          const rejectedResult = onRejected.call(this, error);

          if (utils$1.isThenable(rejectedResult)) {
            promise = Promise.resolve(rejectedResult).then(() =>
              dispatchRequest.call(this, newConfig)
            );
          }
        } catch (rejectedError) {
          promise = Promise.reject(rejectedError);
        }

        break;
      }
    }

    if (!promise) {
      try {
        promise = dispatchRequest.call(this, newConfig);
      } catch (error) {
        promise = Promise.reject(error);
      }
    }

    i = 0;
    len = responseInterceptorChain.length;

    while (i < len) {
      promise = promise.then(responseInterceptorChain[i++], responseInterceptorChain[i++]);
    }

    return promise;
  }

  getUri(config) {
    config = mergeConfig$1(this.defaults, config);
    const fullPath = buildFullPath(config.baseURL, config.url, config.allowAbsoluteUrls, config);
    return buildURL(fullPath, config.params, config.paramsSerializer);
  }
};

// Provide aliases for supported request methods
utils$1.forEach(['delete', 'get', 'head', 'options'], function forEachMethodNoData(method) {
  /*eslint func-names:0*/
  Axios$1.prototype[method] = function (url, config) {
    return this.request(
      mergeConfig$1(config || {}, {
        method,
        url,
        data: config && utils$1.hasOwnProp(config, 'data') ? config.data : undefined,
      })
    );
  };
});

utils$1.forEach(['post', 'put', 'patch', 'query'], function forEachMethodWithData(method) {
  function generateHTTPMethod(isForm) {
    return function httpMethod(url, data, config) {
      return this.request(
        mergeConfig$1(config || {}, {
          method,
          headers: isForm
            ? {
                'Content-Type': 'multipart/form-data',
              }
            : {},
          url,
          data,
        })
      );
    };
  }

  Axios$1.prototype[method] = generateHTTPMethod();

  // QUERY is a safe/idempotent read method; multipart form bodies don't fit
  // its semantics, so no queryForm shorthand is generated.
  if (method !== 'query') {
    Axios$1.prototype[method + 'Form'] = generateHTTPMethod(true);
  }
});/**
 * A `CancelToken` is an object that can be used to request cancellation of an operation.
 *
 * @param {Function} executor The executor function.
 *
 * @returns {CancelToken}
 */
let CancelToken$1=class CancelToken {
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
    this.promise.then((cancel) => {
      if (!token._listeners) return;

      let i = token._listeners.length;

      while (i-- > 0) {
        token._listeners[i](cancel);
      }
      token._listeners = null;
    });

    // eslint-disable-next-line func-names
    this.promise.then = (onfulfilled) => {
      let _resolve;
      // eslint-disable-next-line func-names
      const promise = new Promise((resolve) => {
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

      token.reason = new CanceledError$1(message, config, request);
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
      cancel,
    };
  }
};/**
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
function spread$1(callback) {
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
function isAxiosError$1(payload) {
  return utils$1.isObject(payload) && payload.isAxiosError === true;
}const HttpStatusCode$1 = {
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
  /**
   * @deprecated Use `ContentTooLarge` instead.
   */
  PayloadTooLarge: 413,
  ContentTooLarge: 413,
  UriTooLong: 414,
  UnsupportedMediaType: 415,
  RangeNotSatisfiable: 416,
  ExpectationFailed: 417,
  ImATeapot: 418,
  MisdirectedRequest: 421,
  /**
   * @deprecated Use `UnprocessableContent` instead.
   */
  UnprocessableEntity: 422,
  UnprocessableContent: 422,
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
  WebServerReturnsAnUnknownError: 520,
  WebServerIsDown: 521,
  ConnectionTimedOut: 522,
  OriginIsUnreachable: 523,
  TimeoutOccurred: 524,
  SslHandshakeFailed: 525,
  InvalidSslCertificate: 526,
};

Object.entries(HttpStatusCode$1).forEach(([key, value]) => {
  if (HttpStatusCode$1[value] === undefined) {
    HttpStatusCode$1[value] = key;
  }
});/**
 * Create an instance of Axios
 *
 * @param {Object} defaultConfig The default config for the instance
 *
 * @returns {Axios} A new instance of Axios
 */
function createInstance(defaultConfig) {
  const context = new Axios$1(defaultConfig);
  const instance = bind(Axios$1.prototype.request, context);

  // Copy axios.prototype to instance
  utils$1.extend(instance, Axios$1.prototype, context, { allOwnKeys: true });

  // Copy context to instance
  utils$1.extend(instance, context, null, { allOwnKeys: true });

  // Factory for creating new instances
  instance.create = function create(instanceConfig) {
    return createInstance(mergeConfig$1(defaultConfig, instanceConfig));
  };

  return instance;
}

// Create the default instance to be exported
const axios = createInstance(defaults);

// Expose Axios class to allow class inheritance
axios.Axios = Axios$1;

// Expose Cancel & CancelToken
axios.CanceledError = CanceledError$1;
axios.CancelToken = CancelToken$1;
axios.isCancel = isCancel$1;
axios.VERSION = VERSION$1;
axios.toFormData = toFormData$1;

// Expose AxiosError class
axios.AxiosError = AxiosError$1;

// alias for CanceledError for backward compatibility
axios.Cancel = axios.CanceledError;

// Expose all/spread
axios.all = function all(promises) {
  return Promise.all(promises);
};

axios.spread = spread$1;

// Expose isAxiosError
axios.isAxiosError = isAxiosError$1;

// Expose mergeConfig
axios.mergeConfig = mergeConfig$1;

axios.AxiosHeaders = AxiosHeaders$1;

axios.formToJSON = (thing) => formDataToJSON(utils$1.isHTMLForm(thing) ? new FormData(thing) : thing);

axios.getAdapter = adapters.getAdapter;

axios.HttpStatusCode = HttpStatusCode$1;

axios.default = axios;// This module is intended to unwrap Axios default export as named.
// Keep top-level export same with static properties
// so that it can keep same with es module or cjs
const {
  Axios,
  AxiosError,
  CanceledError,
  isCancel,
  CancelToken,
  VERSION,
  all,
  Cancel,
  isAxiosError,
  spread,
  toFormData,
  AxiosHeaders,
  HttpStatusCode,
  formToJSON,
  getAdapter,
  mergeConfig,
  create,
} = axios;var crudApi = {
  methods: {
    fetchItemsVuex: function fetchItemsVuex() {
      var _arguments = arguments,
        _this = this;
      return _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee() {
        var page, seq, result, itemsResult, _t;
        return _regenerator().w(function (_context) {
          while (1) switch (_context.p = _context.n) {
            case 0:
              page = _arguments.length > 0 && _arguments[0] !== undefined ? _arguments[0] : 1;
              seq = ++_this.fetchSeq;
              _this.loading = true;
              _this.$emit("beforeFetch", {});
              _context.p = 1;
              if (!_this.vuexLocalforage) {
                _context.n = 3;
                break;
              }
              _context.n = 2;
              return _this.model.$fetch();
            case 2:
              _context.n = 5;
              break;
            case 3:
              _this.model.deleteAll();
              _context.n = 4;
              return _this.model.api().get(_this.apiUrl + "/" + _this.modelName, {
                dataKey: 'data',
                params: {
                  page: page,
                  limit: _this.pagination.per_page,
                  filters: JSON.stringify(_this.finalFilters)
                }
              });
            case 4:
              result = _context.v;
            case 5:
              if (!(seq !== _this.fetchSeq)) {
                _context.n = 6;
                break;
              }
              return _context.a(2);
            case 6:
              itemsResult = _this.model.query().withAll().get();
              if (itemsResult) {
                _this.items = itemsResult;
              }
              console.debug("fetch page vuex ", itemsResult, page, _this.items, result);
              _this.firstLoad = true;
              _context.n = 9;
              break;
            case 7:
              _context.p = 7;
              _t = _context.v;
              if (!(seq !== _this.fetchSeq)) {
                _context.n = 8;
                break;
              }
              return _context.a(2);
            case 8:
              _this.toastError(_t);
              _this.fetchError = true;
              _this.firstLoad = true;
            case 9:
              _context.p = 9;
              if (seq === _this.fetchSeq) {
                _this.loading = false;
              }
              return _context.f(9);
            case 10:
              return _context.a(2);
          }
        }, _callee, null, [[1, 7, 9, 10]]);
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
    fetchItem: function fetchItem(id) {
      var _this2 = this;
      return _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee2() {
        var _this2$model, _response$data, _result$response, _result$response2, result, entities, row, response, _t2;
        return _regenerator().w(function (_context2) {
          while (1) switch (_context2.p = _context2.n) {
            case 0:
              if (!(id == null || id === '')) {
                _context2.n = 1;
                break;
              }
              return _context2.a(2, null);
            case 1:
              _this2.loading = true;
              _context2.p = 2;
              if (!(_this2.useVuexORM && (_this2$model = _this2.model) !== null && _this2$model !== void 0 && _this2$model.api)) {
                _context2.n = 4;
                break;
              }
              _context2.n = 3;
              return _this2.model.api().get("".concat(_this2.apiUrl, "/").concat(_this2.modelName, "/").concat(id), {
                dataKey: null
              });
            case 3:
              result = _context2.v;
              entities = (result === null || result === void 0 ? void 0 : result.entities) || (result === null || result === void 0 || (_result$response = result.response) === null || _result$response === void 0 ? void 0 : _result$response.data);
              row = Array.isArray(entities) ? entities[0] : (entities === null || entities === void 0 ? void 0 : entities.data) || (result === null || result === void 0 || (_result$response2 = result.response) === null || _result$response2 === void 0 ? void 0 : _result$response2.data) || null;
              _this2.loading = false;
              return _context2.a(2, row);
            case 4:
              _context2.n = 5;
              return axios.get("".concat(_this2.apiUrl, "/").concat(_this2.modelName, "/").concat(id));
            case 5:
              response = _context2.v;
              _this2.loading = false;
              return _context2.a(2, ((_response$data = response.data) === null || _response$data === void 0 ? void 0 : _response$data.data) || response.data || null);
            case 6:
              _context2.p = 6;
              _t2 = _context2.v;
              _this2.loading = false;
              _this2.toastError(_t2);
              return _context2.a(2, null);
          }
        }, _callee2, null, [[2, 6]]);
      }))();
    },
    closeDetailAfterSave: function closeDetailAfterSave(create) {
      var shouldClose = this.hideModalAfterSave || create && this.hideModalAfterCreate || !create && this.hideModalAfterUpdate;
      if (!shouldClose) {
        return;
      }
      if (typeof this.closeUi === 'function') {
        this.closeUi();
      } else {
        this.$bvModal.hide('modal-form-item-' + this.modelName);
      }
    },
    fetchItems: function fetchItems() {
      var _this3 = this;
      var page = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 1;
      var concat = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
      this.$emit("beforeFetch", {});
      if (this.useVuexORM) {
        return this.fetchItemsVuex(page, concat);
      }
      if (!this.ajax) {
        return this.fetchItemsLocal(page, concat);
      }
      var seq = ++this.fetchSeq;
      this.loading = true;
      return axios.get(this.apiUrl + "/" + this.modelName, {
        params: {
          page: page,
          limit: this.pagination.per_page,
          filters: JSON.stringify(this.finalFilters)
        }
      }).then(function (response) {
        if (seq !== _this3.fetchSeq) return;
        console.debug("fetchItems - Response recibida:", response.data);
        _this3.makePagination(response.data);

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
        if (_this3.grouped) {
          _this3.groupItems(items, concat, _this3.isSplitGroups);
        } else {
          if (concat) {
            var _this3$items;
            // Para concat, agregar items al array existente
            (_this3$items = _this3.items).push.apply(_this3$items, _toConsumableArray$1(items));
          } else {
            var _this3$items2;
            // Mutar el array existente en lugar de reemplazarlo para mantener reactividad con provide/inject
            (_this3$items2 = _this3.items).splice.apply(_this3$items2, [0, _this3.items.length].concat(_toConsumableArray$1(items)));
          }
        }
        console.debug("fetchItems - this.items después de asignar:", _this3.items, "Cantidad:", _this3.items ? _this3.items.length : 0);
        _this3.firstLoad = true;
        _this3.$emit("afterFetch", {});
      }).catch(function (error) {
        if (seq !== _this3.fetchSeq) return;
        _this3.toastError(error);
        _this3.firstLoad = true;
        _this3.fetchError = true;
      }).finally(function () {
        if (seq === _this3.fetchSeq) {
          _this3.loading = false;
        }
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
      var _this4 = this;
      return _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee3() {
        var result, create, jsondata;
        return _regenerator().w(function (_context3) {
          while (1) switch (_context3.n) {
            case 0:
              console.debug("save item 1", _this4.item);
              create = false;
              if (!_this4.vuexLocalforage) {
                _context3.n = 5;
                break;
              }
              if (_this4.markDirty) {
                _this4.item.dirty = true;
              }
              if (!_this4.item.id) {
                _context3.n = 2;
                break;
              }
              _context3.n = 1;
              return _this4.model.$create({
                data: _this4.item
              });
            case 1:
              result = _context3.v;
              console.debug("save item 4", _this4.item, result);
              create = false;
              _context3.n = 4;
              break;
            case 2:
              _context3.n = 3;
              return _this4.model.$create({
                data: _this4.item
              });
            case 3:
              result = _context3.v;
              console.debug("save item 5", _this4.item, result);
              create = true;
            case 4:
              _context3.n = 11;
              break;
            case 5:
              jsondata = _this4.item.$toJson();
              console.debug("save item 2", _this4.item, jsondata);
              if (!_this4.item.id) {
                _context3.n = 7;
                break;
              }
              _context3.n = 6;
              return _this4.model.api().put(_this4.apiUrl + "/" + _this4.modelName + '/' + _this4.item.id, jsondata);
            case 6:
              result = _context3.v;
              create = false;
              _context3.n = 9;
              break;
            case 7:
              _context3.n = 8;
              return _this4.model.api().post(_this4.apiUrl + "/" + _this4.modelName, jsondata);
            case 8:
              result = _context3.v;
              create = true;
            case 9:
              result.response.status;
              if (!result.response.data.error) {
                _context3.n = 10;
                break;
              }
              _this4.toastError(result.response.data.error);
              _this4.loading = false;
              return _context3.a(2);
            case 10:
              result.save();
            case 11:
              if (_this4.refreshAfterSave) _this4.refresh();
              _this4.loading = false;
              _this4.toastSuccess("Elemento Modificado");
              _this4.closeDetailAfterSave(create);
            case 12:
              return _context3.a(2);
          }
        }, _callee3);
      }))();
    },
    saveItemLocal: function saveItemLocal() {
      var _this5 = this;
      return _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee4() {
        var itemSave, itemIndex;
        return _regenerator().w(function (_context4) {
          while (1) switch (_context4.n) {
            case 0:
              itemSave = JSON.parse(JSON.stringify(_this5.item));
              if (_this5.item.id || _this5.item.index) {
                if (_this5.item.id) {
                  itemIndex = _this5.items.findIndex(function (item) {
                    return item.id == _this5.item.id;
                  });
                } else {
                  itemIndex = _this5.items.findIndex(function (item) {
                    return item.index == _this5.item.index;
                  });
                }
                _this5.items[itemIndex] = itemSave;
                _this5.closeDetailAfterSave(false);
              } else {
                itemSave.index = _this5.items.length + 1;
                _this5.items.push(itemSave);
                _this5.closeDetailAfterSave(true);
              }
              _this5.toastSuccess("Elemento Modificado");
              _this5.loading = false;
            case 1:
              return _context4.a(2);
          }
        }, _callee4);
      }))();
    },
    saveItem: function saveItem() {
      var _arguments4 = arguments,
        _this6 = this;
      return _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee5() {
        var event, validation_result, validation_error_message, formData;
        return _regenerator().w(function (_context5) {
          while (1) switch (_context5.n) {
            case 0:
              event = _arguments4.length > 0 && _arguments4[0] !== undefined ? _arguments4[0] : null;
              _this6.loading = true;
              if (!_this6.validate) {
                _context5.n = 2;
                break;
              }
              validation_result = true;
              validation_error_message = _this6.messageDefaultValidationError;
              if (validation_result) {
                _context5.n = 1;
                break;
              }
              _this6.toastError(validation_error_message);
              return _context5.a(2);
            case 1:
              _context5.n = 3;
              break;
            case 2:
              if (event) event.preventDefault();
            case 3:
              if (!_this6.useVuexORM) {
                _context5.n = 4;
                break;
              }
              return _context5.a(2, _this6.saveItemVuex(event));
            case 4:
              if (_this6.ajax) {
                _context5.n = 5;
                break;
              }
              return _context5.a(2, _this6.saveItemLocal(event));
            case 5:
              if (_this6.item.id) {
                axios.put(_this6.apiUrl + "/" + _this6.modelName + "/" + _this6.item.id, _this6.item).then(function (response) {
                  _this6.closeDetailAfterSave(false);
                  var itemSv = response.data;
                  var itemIndex = _this6.items.findIndex(function (item) {
                    return item.id == _this6.item.id;
                  });
                  _this6.items[itemIndex] = itemSv;
                  _this6.item = itemSv;
                  _this6.loading = false;
                  if (_this6.refreshAfterSave) _this6.refresh();
                  _this6.toastSuccess("Elemento Modificado");
                  _this6.$emit("itemSaved", {
                    item: _this6.item
                  });
                  _this6.$emit("itemUpdated", {
                    item: _this6.item
                  });
                }).catch(function (error) {
                  _this6.toastError(error);
                  _this6.loading = false;
                });
              } else {
                if (_this6.createMultipart) {
                  formData = new FormData();
                  Object.keys(_this6.item).forEach(function (key) {
                    if (_this6.item[key][0] && _this6.item[key][0].name) {
                      var files = _this6.item[key];
                      for (var x = 0; x < files.length; x++) {
                        formData.append(key + "[]", _this6.item[key][x], _this6.item[key][x].name);
                      }
                    } else formData.append(key, _this6.item[key]);
                  });
                  axios.post(_this6.apiUrl + "/" + _this6.modelName, formData).then(function (response) {
                    _this6.loading = false;
                    _this6.closeDetailAfterSave(true);
                    if (response.data.success) {
                      if (response.data.message) {
                        _this6.toastSuccess(response.data.message);
                      }
                      return;
                    }
                    var itemSv = response.data;
                    _this6.items.push(itemSv);
                    _this6.item = itemSv;
                    if (_this6.refreshAfterSave) _this6.refresh();
                    _this6.toastSuccess("Elemento Creado");
                    _this6.$emit("itemSaved", {
                      item: _this6.item
                    });
                    _this6.$emit("itemCreated", {
                      item: _this6.item
                    });
                  }).catch(function (error) {
                    _this6.toastError(error);
                    _this6.loading = false;
                  });
                } else {
                  axios.post(_this6.apiUrl + "/" + _this6.modelName, _this6.item).then(function (response) {
                    _this6.loading = false;
                    _this6.closeDetailAfterSave(true);
                    if (response.data.success) {
                      if (response.data.message) {
                        _this6.toastSuccess(response.data.message);
                      }
                      return;
                    }
                    var itemSv = response.data;
                    _this6.items.push(itemSv);
                    _this6.item = itemSv;
                    if (_this6.refreshAfterSave) _this6.refresh();
                    _this6.toastSuccess("Elemento Creado");
                    _this6.$emit("itemSaved", {
                      item: _this6.item
                    });
                    _this6.$emit("itemCreated", {
                      item: _this6.item
                    });
                  }).catch(function (error) {
                    _this6.toastError(error);
                    _this6.loading = false;
                  });
                }
              }
              if (event) event.preventDefault();
            case 6:
              return _context5.a(2);
          }
        }, _callee5);
      }))();
    },
    deleteItem: function deleteItem(id, index) {
      var _this7 = this;
      if (this.useVuexORM) {
        return this.deleteItemVuex(id, index);
      }
      if (!this.ajax) {
        return this.deleteItemLocal(id, index);
      }
      this.loading = true;
      axios.delete(this.apiUrl + "/" + this.modelName + "/" + id).then(function (response) {
        _this7.items.splice(index, 1);
        _this7.toastSuccess("Elemento eliminado.");
        _this7.$emit("itemDeleted", {});
        _this7.loading = false;
      }).catch(function (error) {
        _this7.toastError(error);
        _this7.loading = false;
      });
    },
    deleteItemLocal: function deleteItemLocal(id, index) {
      var _this8 = this;
      return _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee6() {
        var itemIndex;
        return _regenerator().w(function (_context6) {
          while (1) switch (_context6.n) {
            case 0:
              if (id || index) {
                if (id) {
                  itemIndex = _this8.items.findIndex(function (item) {
                    return item.id == _this8.item.id;
                  });
                } else {
                  itemIndex = index;
                }
                _this8.items.splice(itemIndex, 1);
                _this8.item = null;
                _this8.toastSuccess("Elemento Eliminado");
                _this8.$emit("itemDeleted", {});
              } else {
                console.error("Cannot delete item without ID or index");
              }
              _this8.loading = false;
            case 1:
              return _context6.a(2);
          }
        }, _callee6);
      }))();
    },
    deleteItemVuex: function deleteItemVuex(id, index) {
      var _this9 = this;
      return _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee7() {
        var result;
        return _regenerator().w(function (_context7) {
          while (1) switch (_context7.n) {
            case 0:
              if (!_this9.vuexLocalforage) {
                _context7.n = 2;
                break;
              }
              _context7.n = 1;
              return _this9.model.$delete(id);
            case 1:
              _context7.n = 4;
              break;
            case 2:
              _context7.n = 3;
              return _this9.model.api().delete(_this9.apiUrl + "/" + _this9.modelName + '/' + id, {
                delete: 1
              });
            case 3:
              result = _context7.v;
              console.debug("delete item vuex", result);
              result.response.status;
              if (!result.response.data.error) {
                _context7.n = 4;
                break;
              }
              _this9.toastError(result.response.data.error);
              _this9.loading = false;
              return _context7.a(2);
            case 4:
              _this9.toastSuccess("Elemento eliminado.");
            case 5:
              return _context7.a(2);
          }
        }, _callee7);
      }))();
    },
    deleteItemBulk: function deleteItemBulk() {
      var _this0 = this;
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
      axios.delete(this.apiUrl + "/" + this.modelName + "/bulk-destroy", {
        params: {
          ids: ids
        }
      }).then(function (response) {
        _this0.toastSuccess("Elemento/s eliminado.");
        _this0.$emit("itemDeleted", {});
        _this0.clearSelection();
        _this0.refresh();
      }).catch(function (error) {
        _this0.toastError(error);
        _this0.loading = false;
      });
    },
    deleteItemBulkLocal: function deleteItemBulkLocal() {
      var _this1 = this;
      return _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee8() {
        var ids;
        return _regenerator().w(function (_context8) {
          while (1) switch (_context8.n) {
            case 0:
              ids = _this1.selectedItems.map(function (it) {
                return it.id;
              });
              _this1.items = _this1.items.filter(function (it) {
                return !ids.includes(it.id);
              });
              _this1.item = null;
              _this1.pagination.total = _this1.items.length;
              _this1.toastSuccess("Elemento Eliminado");
              _this1.$emit("itemDeleted", {});
              _this1.clearSelection();
              _this1.loading = false;
            case 1:
              return _context8.a(2);
          }
        }, _callee8);
      }))();
    },
    deleteItemBulkVuex: function deleteItemBulkVuex() {
      var _this10 = this;
      return _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee9() {
        var ids, result, itemsResult;
        return _regenerator().w(function (_context9) {
          while (1) switch (_context9.n) {
            case 0:
              ids = _this10.selectedItems.map(function (it) {
                return it.id;
              });
              if (!_this10.vuexLocalforage) {
                _context9.n = 2;
                break;
              }
              _context9.n = 1;
              return _this10.model.$delete(ids);
            case 1:
              _context9.n = 4;
              break;
            case 2:
              _context9.n = 3;
              return _this10.model.api().delete(_this10.apiUrl + "/" + _this10.modelName + '/bulk-destroy', {
                params: {
                  ids: ids
                },
                delete: ids
              });
            case 3:
              result = _context9.v;
              console.debug("delete item vuex", result);
              result.response.status;
              if (!result.response.data.error) {
                _context9.n = 4;
                break;
              }
              _this10.toastError(result.response.data.error);
              _this10.loading = false;
              return _context9.a(2);
            case 4:
              // Actualizar items desde el store Vuex
              itemsResult = _this10.model.query().withAll().get();
              if (itemsResult) {
                _this10.items = itemsResult;
              }
              _this10.toastSuccess("Elemento eliminados.");
              _this10.clearSelection();
              _this10.loading = false;
            case 5:
              return _context9.a(2);
          }
        }, _callee9);
      }))();
    },
    saveSort: function saveSort() {
      var _this11 = this;
      if (this.orderable) {
        this.loading = true;
        var order = [];
        this.items.forEach(function (v, k) {
          order.push({
            id: v.id,
            order: v[_this11.orderProp]
          });
        });
        if (!this.ajax) {
          return;
        }
        axios.post(this.apiUrl + "/" + this.modelName + "/sort", {
          order: order
        }).then(function (response) {
          response.data;
          _this11.toastSuccess("Orden Actualizado");
          if (_this11.refreshAfterSave) _this11.refresh();
          _this11.loading = false;
        }).catch(function (error) {
          _this11.toastError(error);
          _this11.loading = false;
        });
      }
    },
    exportItems: function exportItems() {
      var _this12 = this;
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
      axios.get(this.apiUrl + "/" + this.modelName + "/export", {
        params: params,
        responseType: "blob"
      }).then(function (response) {
        _this12.downloadBlobResponse(response);
        _this12.loading = false;
      }).catch(function (error) {
        _this12.toastError(error);
        _this12.loading = false;
      });
    },
    importItems: function importItems() {
      var _this13 = this;
      var formData = new FormData();
      formData.append("file", this.fileImport);
      axios.post(this.apiUrl + "/" + this.modelName + "/import", formData, {
        headers: {
          "Content-Type": "multipart/form-data"
        }
      }).then(function (response) {
        if (response && response.data && response.data.success == true) {
          _this13.$refs["modal-import"].hide();
          _this13.toastSuccess("Datos Importados con Éxito");
          _this13.refresh();
        } else {
          _this13.toastError("No se pudo importar los datos.");
        }
      }).catch(function (error) {
        console.error(error);
        _this13.toastError(error);
      });
    },
    refresh: function refresh() {
      var _this14 = this;
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
          _this14.refreshing = false;
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
    hasFilterValue: function hasFilterValue(value) {
      return value !== null && value !== undefined && value !== '';
    },
    isRangeFilterColumn: function isRangeFilterColumn(column) {
      return column && (column.type == 'date' || column.type == 'number' || column.type == 'money' || column.type == 'price');
    },
    formatFilterDisplayValue: function formatFilterDisplayValue(column, value) {
      if (column.type == 'boolean') {
        return value == 1 || value == '1' || value === true ? 'Sí' : 'No';
      }
      if ((column.type == 'state' || column.type == 'array') && column.options) {
        var option = column.options.find(function (o) {
          return String(o.id !== undefined ? o.id : o.value) === String(value);
        });
        if (option) {
          return option.text || option.label || String(value);
        }
      }
      return String(value);
    },
    formatRangeDisplayValue: function formatRangeDisplayValue(column, fromVal, toVal) {
      var _this = this;
      var hasFrom = this.hasFilterValue(fromVal);
      var hasTo = this.hasFilterValue(toVal);
      var formatOne = function formatOne(v) {
        if (column.type == 'date' && v) {
          return _this.dayjs(v).format(column.format ? column.format : 'L');
        }
        return String(v);
      };
      if (hasFrom && hasTo) {
        return formatOne(fromVal) + ' – ' + formatOne(toVal);
      }
      if (hasFrom) {
        return 'Desde: ' + formatOne(fromVal);
      }
      if (hasTo) {
        return 'Hasta: ' + formatOne(toVal);
      }
      return '';
    },
    clearActiveFilter: function clearActiveFilter(key) {
      var _this2 = this;
      var column = (this.columns || []).find(function (c) {
        return c.prop === key;
      });
      if (column && this.isRangeFilterColumn(column)) {
        var from = this.internalFilterByProp(key + '_from');
        var to = this.internalFilterByProp(key + '_to');
        if (from) from.value = null;
        if (to) to.value = null;
      } else {
        var f = this.internalFilterByProp(key);
        if (f) f.value = null;
      }
      this.forceRecomputeCounter++;
      setTimeout(function () {
        _this2.refresh();
      }, 1);
    },
    setupFilters: function setupFilters() {
      var _this3 = this;
      this.columns.forEach(function (column) {
        if (_this3.isColumnHasFilter(column)) {
          if (_this3.isRangeFilterColumn(column)) {
            _this3.internalFilters.push({
              column: column.prop + "_from",
              op: ">=",
              value: null
            });
            _this3.internalFilters.push({
              column: column.prop + "_to",
              op: "<=",
              value: null
            });
          } else {
            _this3.internalFilters.push({
              column: column.prop,
              op: column.filterOp ? column.filterOp : "=",
              value: null
            });
          }
        }
        if (_this3.sortable && column.type != 'actions' && column.type != 'checkbox' && column.type != 'select') {
          _this3.internalFilters.push({
            column: column.prop + "_sort",
            op: column.filterOp ? column.filterOp : "=",
            value: null,
            sortPriority: null
          });
        }
      });

      // Procesar filtros custom
      if (this.customFilters && Array.isArray(this.customFilters)) {
        this.customFilters.forEach(function (customFilter) {
          if (_this3.isCustomFilterEnabled(customFilter)) {
            // Si el tipo es función (callback), no procesamos automáticamente
            // El callback se encargará del renderizado y gestión del filtro
            if (typeof customFilter.type === 'string') {
              if (_this3.isRangeFilterColumn(customFilter)) {
                _this3.internalFilters.push({
                  column: customFilter.prop + "_from",
                  op: ">=",
                  value: null
                });
                _this3.internalFilters.push({
                  column: customFilter.prop + "_to",
                  op: "<=",
                  value: null
                });
              } else {
                _this3.internalFilters.push({
                  column: customFilter.prop,
                  op: customFilter.filterOp ? customFilter.filterOp : "=",
                  value: null
                });
              }
            } else if (typeof customFilter.type === 'function') {
              // Para callbacks, solo creamos el filtro interno si no existe
              // El callback se encargará del renderizado
              if (!_this3.internalFilterByProp(customFilter.prop)) {
                _this3.internalFilters.push({
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
      var _this4 = this;
      var sortEntry = this.internalFilterByProp(column.prop + '_sort');
      if (!sortEntry) {
        return;
      }
      var value = sortEntry.value;
      if (!value) {
        sortEntry.value = 'ASC';
        sortEntry.sortPriority = this.nextSortPriority();
      } else if (value == 'ASC') {
        sortEntry.value = 'DESC';
        if (!sortEntry.sortPriority) {
          sortEntry.sortPriority = this.nextSortPriority();
        }
      } else if (value == 'DESC') {
        sortEntry.value = null;
        sortEntry.sortPriority = null;
        this.normalizeSortPriorities();
      }
      this.forceRecomputeCounter++;
      setTimeout(function () {
        _this4.refresh();
      }, 1);
    },
    nextSortPriority: function nextSortPriority() {
      var priorities = this.internalFilters.filter(function (f) {
        return f.column.endsWith('_sort') && f.value && f.sortPriority;
      }).map(function (f) {
        return f.sortPriority;
      });
      return priorities.length ? Math.max.apply(Math, _toConsumableArray$1(priorities)) + 1 : 1;
    },
    normalizeSortPriorities: function normalizeSortPriorities() {
      var active = this.internalFilters.filter(function (f) {
        return f.column.endsWith('_sort') && f.value;
      }).sort(function (a, b) {
        return (a.sortPriority || 0) - (b.sortPriority || 0);
      });
      active.forEach(function (f, idx) {
        f.sortPriority = idx + 1;
      });
    },
    getSortPriority: function getSortPriority(column) {
      var sortEntry = this.internalFilterByProp(column.prop + '_sort');
      if (!sortEntry || !sortEntry.value) {
        return null;
      }
      return sortEntry.sortPriority || null;
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
      var _this5 = this;
      var refresh = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : true;
      this.internalFilters = [];
      this.setupFilters();
      this.forceRecomputeCounter++;
      if (refresh) {
        setTimeout(function () {
          _this5.refresh();
        }, 1);
      }
    },
    isColumnHasFilter: function isColumnHasFilter(column) {
      return column && !column.hideFilter && column.type != 'actions' && column.type != 'checkbox' && column.type != 'select';
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
      var _this6 = this;
      var filter = this.filter.find(function (f) {
        return f.column == column;
      });
      filter.value = value;
      this.forceRecomputeCounter++;
      setTimeout(function () {
        _this6.refresh();
      }, 1);
    },
    onChangeFilter: function onChangeFilter(event) {
      var _this7 = this;
      this.forceRecomputeCounter++;
      console.debug("Filters debug ", this.finalFilters, this.internalFilter, this.internalFilters, this.filter, this.filters);
      setTimeout(function () {
        _this7.refresh();
      }, 1);
    },
    togglePrincipalSort: function togglePrincipalSort() {
      var _this8 = this;
      this.principalSort = !this.principalSort;
      setTimeout(function () {
        _this8.refresh();
      }, 1);
    },
    initQuickFilterState: function initQuickFilterState() {
      var fromProp = this.quickFilter != null && this.quickFilter !== '' ? String(this.quickFilter) : null;
      if (fromProp) {
        this.activeQuickFilterKey = fromProp;
        this.activeQuickFilterKeyReactive.value = fromProp;
        return;
      }
      this.ensureActiveQuickFilter();
    },
    ensureActiveQuickFilter: function ensureActiveQuickFilter() {
      var items = Array.isArray(this.quickFilters) ? this.quickFilters : [];
      if (!items.length) {
        this.activeQuickFilterKey = null;
        this.activeQuickFilterKeyReactive.value = null;
        return;
      }
      if (this.activeQuickFilterKey && this.findQuickFilterItem(this.activeQuickFilterKey)) {
        return;
      }
      var preferred = items.find(function (item) {
        return item && item.default;
      }) || items.find(function (item) {
        return item && (item.filter == null || Array.isArray(item.filter) && item.filter.length === 0);
      }) || items[0];
      var key = this.normalizeQuickFilterKey(preferred);
      this.activeQuickFilterKey = key;
      this.activeQuickFilterKeyReactive.value = key;
    },
    normalizeQuickFilterKey: function normalizeQuickFilterKey(item) {
      if (!item) return null;
      if (item.key != null) return String(item.key);
      if (item.value != null) return String(item.value);
      if (item.id != null) return String(item.id);
      return null;
    },
    findQuickFilterItem: function findQuickFilterItem(key) {
      var _this9 = this;
      if (key == null || key === '') return null;
      var list = Array.isArray(this.quickFilters) ? this.quickFilters : [];
      return list.find(function (item) {
        return _this9.normalizeQuickFilterKey(item) === String(key);
      }) || null;
    },
    resolveQuickFilterPayload: function resolveQuickFilterPayload(item) {
      if (!item) return [];
      if (typeof item.apply === 'function') {
        try {
          var result = item.apply(item, this);
          return Array.isArray(result) ? result : [];
        } catch (e) {
          console.warn('quickFilter.apply failed', e);
          return [];
        }
      }
      if (item.filter == null) return [];
      if (typeof item.filter === 'function') {
        try {
          var _result = item.filter(item, this);
          return Array.isArray(_result) ? _result : [];
        } catch (e) {
          console.warn('quickFilter.filter failed', e);
          return [];
        }
      }
      return Array.isArray(item.filter) ? item.filter : [];
    },
    selectQuickFilter: function selectQuickFilter(key) {
      var _this0 = this;
      var item = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;
      var resolved = item || this.findQuickFilterItem(key);
      var normalizedKey = resolved ? this.normalizeQuickFilterKey(resolved) : key != null ? String(key) : null;
      if (!normalizedKey) {
        return;
      }
      if (this.activeQuickFilterKey === normalizedKey) {
        this.$emit('quick-filter-click', {
          key: normalizedKey,
          item: resolved,
          filter: this.resolveQuickFilterPayload(resolved)
        });
        return;
      }
      this.activeQuickFilterKey = normalizedKey;
      this.activeQuickFilterKeyReactive.value = normalizedKey;
      this.forceRecomputeCounter++;
      var payload = {
        key: normalizedKey,
        item: resolved,
        filter: this.resolveQuickFilterPayload(resolved)
      };
      this.$emit('update:quickFilter', normalizedKey);
      this.$emit('quick-filter-change', payload);
      this.$emit('quick-filter-click', payload);
      setTimeout(function () {
        _this0.refresh();
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
    assignWorkingItem: function assignWorkingItem(source) {
      var _this4 = this;
      var itemCopy = JSON.parse(JSON.stringify(source || {}));
      if (this.useVuexORM && !this.vuexLocalforage && this.model) {
        var modelInstance = new this.model(itemCopy);
        Object.keys(modelInstance).forEach(function (key) {
          _this4.item[key] = modelInstance[key];
        });
        Object.keys(this.item).forEach(function (key) {
          if (!(key in modelInstance)) {
            delete _this4.item[key];
          }
        });
        return;
      }
      Object.keys(itemCopy).forEach(function (key) {
        _this4.item[key] = itemCopy[key];
      });
      Object.keys(this.item).forEach(function (key) {
        if (!(key in itemCopy)) {
          delete _this4.item[key];
        }
      });
    },
    openUi: function openUi(mode) {
      var _this5 = this;
      var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
      this.uiMode = mode;
      if (this.uiModeReactive) {
        this.uiModeReactive.value = mode;
      }
      this.onSelect();
      if (!options.skipUrl) {
        var _this$syncUrlFromUi, _this$item;
        (_this$syncUrlFromUi = this.syncUrlFromUi) === null || _this$syncUrlFromUi === void 0 || _this$syncUrlFromUi.call(this, mode, (_this$item = this.item) === null || _this$item === void 0 ? void 0 : _this$item.id);
      }
      this.$nextTick(function () {
        if (_this5.isModalViewMode) {
          if (mode === 'show') {
            _this5.$bvModal.show('modal-show-item-' + _this5.modelName);
          } else {
            _this5.$bvModal.show('modal-form-item-' + _this5.modelName);
          }
        }
      });
    },
    closeUi: function closeUi() {
      var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
      var previous = this.uiMode;
      if (!previous && options.skipUrl) {
        return;
      }
      this.uiMode = null;
      if (this.uiModeReactive) {
        this.uiModeReactive.value = null;
      }
      if (this.isModalViewMode && previous) {
        if (previous === 'show') {
          this.$bvModal.hide('modal-show-item-' + this.modelName);
        } else {
          this.$bvModal.hide('modal-form-item-' + this.modelName);
        }
      }
      if (!options.skipUrl) {
        var _this$syncUrlFromUi2;
        (_this$syncUrlFromUi2 = this.syncUrlFromUi) === null || _this$syncUrlFromUi2 === void 0 || _this$syncUrlFromUi2.call(this, null, null);
      }
      if (previous) {
        this.$emit('ui-closed', {
          previous: previous
        });
      }
    },
    findItemLocal: function findItemLocal(id) {
      var itemIndex = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;
      if (itemIndex != null && this.items[itemIndex]) {
        return this.items[itemIndex];
      }
      if (id == null) {
        return null;
      }
      return this.items.find(function (it) {
        return String(it.id) === String(id);
      }) || null;
    },
    resolveItem: function resolveItem(id) {
      var _arguments = arguments,
        _this6 = this;
      return _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee() {
        var itemIndex, options, item;
        return _regenerator().w(function (_context) {
          while (1) switch (_context.n) {
            case 0:
              itemIndex = _arguments.length > 1 && _arguments[1] !== undefined ? _arguments[1] : null;
              options = _arguments.length > 2 && _arguments[2] !== undefined ? _arguments[2] : {};
              item = _this6.findItemLocal(id, itemIndex);
              if (!item) {
                _context.n = 1;
                break;
              }
              return _context.a(2, item);
            case 1:
              if (!(options.fetchIfMissing && id != null && typeof _this6.fetchItem === 'function')) {
                _context.n = 3;
                break;
              }
              _context.n = 2;
              return _this6.fetchItem(id);
            case 2:
              item = _context.v;
            case 3:
              return _context.a(2, item);
          }
        }, _callee);
      }))();
    },
    showItem: function showItem(id) {
      var _arguments2 = arguments,
        _this7 = this;
      return _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee2() {
        var itemIndex, options, item;
        return _regenerator().w(function (_context2) {
          while (1) switch (_context2.n) {
            case 0:
              itemIndex = _arguments2.length > 1 && _arguments2[1] !== undefined ? _arguments2[1] : null;
              options = _arguments2.length > 2 && _arguments2[2] !== undefined ? _arguments2[2] : {};
              _context2.n = 1;
              return _this7.resolveItem(id, itemIndex, options);
            case 1:
              item = _context2.v;
              if (item) {
                _context2.n = 2;
                break;
              }
              console.warn('Item not found for showItem');
              return _context2.a(2);
            case 2:
              _this7.assignWorkingItem(item);
              _this7.openUi('show', options);
            case 3:
              return _context2.a(2);
          }
        }, _callee2);
      }))();
    },
    createItem: function createItem() {
      var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
      this.loading = false;
      this.assignWorkingItem(this.itemDefault || {
        id: null
      });
      this.openUi('create', options);
    },
    updateItem: function updateItem(id) {
      var _arguments3 = arguments,
        _this8 = this;
      return _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee3() {
        var itemIndex, options, item;
        return _regenerator().w(function (_context3) {
          while (1) switch (_context3.n) {
            case 0:
              itemIndex = _arguments3.length > 1 && _arguments3[1] !== undefined ? _arguments3[1] : null;
              options = _arguments3.length > 2 && _arguments3[2] !== undefined ? _arguments3[2] : {};
              _this8.loading = false;
              _context3.n = 1;
              return _this8.resolveItem(id, itemIndex, options);
            case 1:
              item = _context3.v;
              if (item) {
                _context3.n = 2;
                break;
              }
              console.warn('Item not found for updateItem');
              return _context3.a(2);
            case 2:
              _this8.assignWorkingItem(item);
              _this8.openUi('edit', options);
            case 3:
              return _context3.a(2);
          }
        }, _callee3);
      }))();
    },
    removeItem: function removeItem(id, index) {
      var _this9 = this;
      this.$bvModal.msgBoxConfirm(this.messageRemoveConfirm, {
        size: 'sm',
        buttonSize: 'sm',
        okVariant: 'danger',
        okTitle: this.messageRemove,
        cancelTitle: 'NO',
        centered: true
      }).then(function (value) {
        if (value) {
          _this9.deleteItem(id, index);
        }
      }).catch(function (error) {
        _this9.toastError(error);
        _this9.loading = false;
      });
    },
    confirmBulkDelete: function confirmBulkDelete() {
      var _this0 = this;
      this.$bvModal.msgBoxConfirm(this.messageRemoveBulkConfirm, {
        size: 'sm',
        buttonSize: 'sm',
        okVariant: 'danger',
        okTitle: this.messageRemove,
        cancelTitle: 'NO',
        centered: true
      }).then(function (value) {
        if (value) {
          _this0.deleteItemBulk();
        }
      }).catch(function (error) {
        _this0.toastError(error);
        _this0.loading = false;
      });
    },
    toggleDisplayMode: function toggleDisplayMode() {
      var next = this._displayMode == this.displayModes.MODE_TABLE ? this.displayModes.MODE_CARDS : this.displayModes.MODE_TABLE;
      this._displayMode = next;
      if (this.displayModeReactive) {
        this.displayModeReactive.value = next;
      }
      this.forceRecomputeCounter++;
    },
    showExportModal: function showExportModal() {
      // Asegurar que loading esté en false al abrir el modal
      this.loading = false;
      if (this.$refs.crudModals && this.$refs.crudModals.$refs['modal-export']) {
        this.$refs.crudModals.$refs['modal-export'].show();
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

      // Sistema unificado: $toast / $bvToast apuntan al mismo helper (con dedupe)
      if (this.$toast) {
        this.$toast(error_message, {
          title: "Error",
          toaster: "b-toaster-bottom-right",
          variant: "danger",
          solid: true,
          appendToast: true
        });
      } else {
        console.error('Error:', error_message);
      }
    },
    toastSuccess: function toastSuccess(message) {
      if (this.$toast) {
        this.$toast(message, {
          title: "Listo",
          toaster: "b-toaster-bottom-right",
          variant: "success",
          solid: true,
          appendToast: true
        });
      } else {
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
 * Sincronización de create/show/edit con la URL (query o path).
 * Reutiliza createItem/showItem/updateItem; solo cambia cómo se refleja en el router.
 */
function normalizeUrlSync(urlSync) {
  if (!urlSync) {
    return null;
  }
  var defaults = {
    strategy: 'path',
    // 'path' | 'query'
    paramAction: 'action',
    paramId: 'id',
    replace: false,
    actions: {
      create: 'create',
      show: 'show',
      edit: 'edit'
    }
  };
  if (urlSync === true) {
    return _objectSpread2$1({}, defaults);
  }
  return _objectSpread2$1(_objectSpread2$1(_objectSpread2$1({}, defaults), urlSync), {}, {
    actions: _objectSpread2$1(_objectSpread2$1({}, defaults.actions), urlSync.actions || {})
  });
}

/**
 * Genera rutas Vue Router para deep-link de un CRUD.
 * Uso: ...crudRoutes('/products', 'products', () => import('...'), { meta })
 */
function crudRoutes(basePath, name, component) {
  var options = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : {};
  var meta = options.meta || {};
  var _props = options.props;
  var base = String(basePath || '').replace(/\/$/, '') || '/';
  return [{
    path: base,
    name: name,
    component: component,
    props: _props,
    meta: meta
  }, {
    path: "".concat(base, "/create"),
    name: "".concat(name, "-create"),
    component: component,
    props: function props(route) {
      return _objectSpread2$1(_objectSpread2$1({}, typeof _props === 'function' ? _props(route) : _props || {}), {}, {
        crudAction: 'create'
      });
    },
    meta: _objectSpread2$1(_objectSpread2$1({}, meta), {}, {
      crudAction: 'create'
    })
  }, {
    path: "".concat(base, "/:id/edit"),
    name: "".concat(name, "-edit"),
    component: component,
    props: function props(route) {
      return _objectSpread2$1(_objectSpread2$1({}, typeof _props === 'function' ? _props(route) : _props || {}), {}, {
        id: route.params.id,
        crudAction: 'edit'
      });
    },
    meta: _objectSpread2$1(_objectSpread2$1({}, meta), {}, {
      crudAction: 'edit'
    })
  }, {
    path: "".concat(base, "/:id"),
    name: "".concat(name, "-show"),
    component: component,
    props: function props(route) {
      return _objectSpread2$1(_objectSpread2$1({}, typeof _props === 'function' ? _props(route) : _props || {}), {}, {
        id: route.params.id,
        crudAction: 'show'
      });
    },
    meta: _objectSpread2$1(_objectSpread2$1({}, meta), {}, {
      crudAction: 'show'
    })
  }];
}
var crudUrlSync = {
  data: function data() {
    return {
      // null | 'create' | 'show' | 'edit'
      uiMode: null,
      uiModeReactive: {
        value: null
      },
      _urlSyncApplying: false,
      _urlSyncReady: false
    };
  },
  computed: {
    urlSyncConfig: function urlSyncConfig() {
      return normalizeUrlSync(this.urlSync);
    },
    urlSyncEnabled: function urlSyncEnabled() {
      return !!this.urlSyncConfig;
    },
    isDetailOpen: function isDetailOpen() {
      return !!this.uiMode;
    },
    isPageViewMode: function isPageViewMode() {
      return String(this.viewMode || 'modal').toLowerCase() === 'page';
    },
    isModalViewMode: function isModalViewMode() {
      return !this.isPageViewMode;
    },
    listVisible: function listVisible() {
      // En modo página, al abrir detalle se oculta el listado
      if (this.isPageViewMode && this.isDetailOpen) {
        return false;
      }
      return true;
    }
  },
  watch: {
    uiMode: function uiMode(val) {
      this.uiModeReactive.value = val;
    },
    '$route': function $route(to, from) {
      if (!this.urlSyncEnabled || this._urlSyncApplying) {
        return;
      }
      this.applyRouteToUi(to);
    }
  },
  methods: {
    getRouter: function getRouter() {
      return this.$router || null;
    },
    getRoute: function getRoute() {
      return this.$route || null;
    },
    crudIndexPath: function crudIndexPath() {
      var route = this.getRoute();
      if (!route) {
        return null;
      }
      var cfg = this.urlSyncConfig;
      if (!cfg || cfg.strategy !== 'path') {
        return route.path;
      }
      // Quitar /create, /:id, /:id/edit del path actual
      var path = route.path.replace(/\/$/, '');
      path = path.replace(/\/create$/i, '');
      path = path.replace(/\/[^/]+\/edit$/i, '');
      // si quedó .../123 (show), quitar id
      var baseFromName = this.resolveCrudBasePath();
      if (baseFromName) {
        return baseFromName;
      }
      // fallback: parent path segments
      var parts = path.split('/').filter(Boolean);
      if (parts.length >= 2 && route.params && route.params.id) {
        parts.pop();
        return '/' + parts.join('/');
      }
      return path || '/';
    },
    resolveCrudBasePath: function resolveCrudBasePath() {
      var route = this.getRoute();
      var router = this.getRouter();
      if (!route || !router) {
        return null;
      }
      // Si la ruta se llama products-show / products-edit / products-create → base name products
      var name = String(route.name || '');
      var baseName = name.replace(/-(create|show|edit)$/i, '');
      if (baseName && baseName !== name) {
        try {
          var resolved = router.resolve({
            name: baseName
          });
          if (resolved && resolved.href) {
            return resolved.path || resolved.href.replace(/^#/, '');
          }
        } catch (e) {
          /* ignore */
        }
      }
      return null;
    },
    parseRouteAction: function parseRouteAction() {
      var _route$meta, _route$meta2, _route$meta3, _route$params3;
      var route = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : this.getRoute();
      if (!route || !this.urlSyncConfig) {
        return {
          action: null,
          id: null
        };
      }
      var cfg = this.urlSyncConfig;
      if (cfg.strategy === 'query') {
        var action = route.query[cfg.paramAction] || null;
        var id = route.query[cfg.paramId] || null;
        return {
          action: action ? String(action) : null,
          id: id
        };
      }
      // path
      var name = String(route.name || '');
      if (name.endsWith('-create') || ((_route$meta = route.meta) === null || _route$meta === void 0 ? void 0 : _route$meta.crudAction) === 'create') {
        return {
          action: 'create',
          id: null
        };
      }
      if (name.endsWith('-edit') || ((_route$meta2 = route.meta) === null || _route$meta2 === void 0 ? void 0 : _route$meta2.crudAction) === 'edit') {
        var _route$params$id, _route$params;
        return {
          action: 'edit',
          id: (_route$params$id = (_route$params = route.params) === null || _route$params === void 0 ? void 0 : _route$params.id) !== null && _route$params$id !== void 0 ? _route$params$id : null
        };
      }
      if (name.endsWith('-show') || ((_route$meta3 = route.meta) === null || _route$meta3 === void 0 ? void 0 : _route$meta3.crudAction) === 'show') {
        var _route$params$id2, _route$params2;
        return {
          action: 'show',
          id: (_route$params$id2 = (_route$params2 = route.params) === null || _route$params2 === void 0 ? void 0 : _route$params2.id) !== null && _route$params$id2 !== void 0 ? _route$params$id2 : null
        };
      }
      // path heuristics
      var path = String(route.path || '');
      if (/\/create\/?$/i.test(path)) {
        return {
          action: 'create',
          id: null
        };
      }
      var editMatch = path.match(/\/([^/]+)\/edit\/?$/i);
      if (editMatch) {
        return {
          action: 'edit',
          id: editMatch[1]
        };
      }
      if ((_route$params3 = route.params) !== null && _route$params3 !== void 0 && _route$params3.id) {
        return {
          action: 'show',
          id: route.params.id
        };
      }
      return {
        action: null,
        id: null
      };
    },
    buildRouteLocation: function buildRouteLocation(action) {
      var id = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;
      var cfg = this.urlSyncConfig;
      var route = this.getRoute();
      var router = this.getRouter();
      if (!cfg || !route || !router) {
        return null;
      }
      if (cfg.strategy === 'query') {
        var query = _objectSpread2$1({}, route.query);
        if (!action) {
          delete query[cfg.paramAction];
          delete query[cfg.paramId];
        } else {
          query[cfg.paramAction] = cfg.actions[action] || action;
          if (id != null) {
            query[cfg.paramId] = String(id);
          } else {
            delete query[cfg.paramId];
          }
        }
        return {
          path: route.path,
          query: query,
          hash: route.hash
        };
      }

      // path strategy via named routes when possible
      var baseName = String(route.name || '').replace(/-(create|show|edit)$/i, '') || null;
      if (baseName) {
        if (!action) {
          return {
            name: baseName
          };
        }
        if (action === 'create') {
          return {
            name: "".concat(baseName, "-create")
          };
        }
        if (action === 'edit') {
          return {
            name: "".concat(baseName, "-edit"),
            params: {
              id: String(id)
            }
          };
        }
        if (action === 'show') {
          return {
            name: "".concat(baseName, "-show"),
            params: {
              id: String(id)
            }
          };
        }
      }
      var base = this.crudIndexPath() || '/';
      if (!action) {
        return {
          path: base
        };
      }
      if (action === 'create') {
        return {
          path: "".concat(base, "/create")
        };
      }
      if (action === 'edit') {
        return {
          path: "".concat(base, "/").concat(id, "/edit")
        };
      }
      return {
        path: "".concat(base, "/").concat(id)
      };
    },
    syncUrlFromUi: function syncUrlFromUi() {
      var _this$item,
        _this = this;
      var action = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : this.uiMode;
      var id = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : (_this$item = this.item) === null || _this$item === void 0 ? void 0 : _this$item.id;
      if (!this.urlSyncEnabled || this._urlSyncApplying) {
        return;
      }
      var router = this.getRouter();
      if (!router) {
        return;
      }
      var location = this.buildRouteLocation(action, id);
      if (!location) {
        return;
      }
      var current = this.getRoute();
      var resolved = router.resolve(location);
      if (current && resolved && resolved.fullPath === current.fullPath) {
        return;
      }
      this._urlSyncApplying = true;
      var nav = this.urlSyncConfig.replace ? router.replace(location) : router.push(location);
      Promise.resolve(nav).catch(function () {}).finally(function () {
        _this.$nextTick(function () {
          _this._urlSyncApplying = false;
        });
      });
    },
    applyRouteToUi: function applyRouteToUi() {
      var route = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : this.getRoute();
      if (!this.urlSyncEnabled || !route) {
        return;
      }
      var _this$parseRouteActio = this.parseRouteAction(route),
        action = _this$parseRouteActio.action,
        id = _this$parseRouteActio.id;
      var normalized = action === this.urlSyncConfig.actions.create ? 'create' : action === this.urlSyncConfig.actions.edit ? 'edit' : action === this.urlSyncConfig.actions.show ? 'show' : action;
      if (!normalized) {
        if (this.uiMode) {
          this.closeUi({
            skipUrl: true
          });
        }
        return;
      }
      if (normalized === 'create') {
        if (this.uiMode !== 'create') {
          this.createItem({
            skipUrl: true
          });
        }
        return;
      }
      if (normalized === 'show' || normalized === 'edit') {
        var _this$item2;
        if (this.uiMode === normalized && String((_this$item2 = this.item) === null || _this$item2 === void 0 ? void 0 : _this$item2.id) === String(id)) {
          return;
        }
        var opener = normalized === 'show' ? this.showItem : this.updateItem;
        opener.call(this, id, null, {
          skipUrl: true,
          fetchIfMissing: true
        });
      }
    }
  },
  mounted: function mounted() {
    var _this2 = this;
    this.$nextTick(function () {
      _this2._urlSyncReady = true;
      if (_this2.urlSyncEnabled) {
        _this2.applyRouteToUi(_this2.getRoute());
      }
      // Props externas (crudAction / id) desde rutas con props:true
      if (_this2.crudAction) {
        var action = _this2.crudAction;
        var itemId = _this2.effectiveCrudItemId != null ? _this2.effectiveCrudItemId : _this2.id;
        if (action === 'create') {
          _this2.createItem({
            skipUrl: true
          });
        } else if ((action === 'show' || action === 'edit') && itemId != null) {
          var opener = action === 'show' ? _this2.showItem : _this2.updateItem;
          opener.call(_this2, itemId, null, {
            skipUrl: true,
            fetchIfMissing: true
          });
        }
      }
    });
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
}var DEDUPE_WINDOW_MS = 1800;
var recentToasts = new Map();
function toastFingerprint(message, title, variant) {
  return "".concat(variant, "::").concat(title, "::").concat(String(message)).slice(0, 500);
}
function shouldSkipDuplicate(fingerprint) {
  var now = Date.now();
  var _iterator = _createForOfIteratorHelper(recentToasts.entries()),
    _step;
  try {
    for (_iterator.s(); !(_step = _iterator.n()).done;) {
      var _step$value = _slicedToArray(_step.value, 2),
        key = _step$value[0],
        ts = _step$value[1];
      if (now - ts > DEDUPE_WINDOW_MS) {
        recentToasts.delete(key);
      }
    }
  } catch (err) {
    _iterator.e(err);
  } finally {
    _iterator.f();
  }
  var last = recentToasts.get(fingerprint);
  if (last && now - last < DEDUPE_WINDOW_MS) {
    return true;
  }
  recentToasts.set(fingerprint, now);
  return false;
}
function ensureToasterContainer() {
  var toaster = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'b-toaster-bottom-right';
  // Unificar contenedores legacy (app-toast-container / vue-laravel-crud-toaster)
  var legacy = document.getElementById('app-toast-container');
  if (legacy && legacy.id !== 'vue-laravel-crud-toaster') {
    legacy.remove();
  }
  var toasterContainer = document.getElementById('vue-laravel-crud-toaster');
  if (!toasterContainer) {
    toasterContainer = document.createElement('div');
    toasterContainer.id = 'vue-laravel-crud-toaster';
    toasterContainer.className = 'toast-container position-fixed p-3 vue-laravel-crud-toaster';
    if (toaster.includes('bottom-left')) {
      toasterContainer.classList.add('bottom-0', 'start-0');
    } else if (toaster.includes('top-right')) {
      toasterContainer.classList.add('top-0', 'end-0');
    } else if (toaster.includes('top-left')) {
      toasterContainer.classList.add('top-0', 'start-0');
    } else {
      toasterContainer.classList.add('bottom-0', 'end-0');
    }
    toasterContainer.style.zIndex = '1090';
    toasterContainer.style.maxWidth = '360px';
    document.body.appendChild(toasterContainer);
  }
  return toasterContainer;
}

/**
 * Crea y muestra un toast
 * @param {string} message - Mensaje a mostrar
 * @param {Object} options - Opciones del toast
 */
function showToast(message) {
  var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
  // Compat: showToast(message, title, variant) desde mixins legacy
  if (typeof options === 'string') {
    var _title = options;
    var _variant = arguments[2] || 'info';
    options = {
      title: _title,
      variant: _variant,
      solid: true
    };
  }
  var _options = options,
    _options$title = _options.title,
    title = _options$title === void 0 ? '' : _options$title,
    _options$variant = _options.variant,
    variant = _options$variant === void 0 ? 'info' : _options$variant,
    _options$toaster = _options.toaster,
    toaster = _options$toaster === void 0 ? 'b-toaster-bottom-right' : _options$toaster,
    _options$solid = _options.solid,
    solid = _options$solid === void 0 ? true : _options$solid,
    _options$appendToast = _options.appendToast,
    appendToast = _options$appendToast === void 0 ? true : _options$appendToast,
    _options$delay = _options.delay,
    delay = _options$delay === void 0 ? 5000 : _options$delay;
  var fingerprint = toastFingerprint(message, title, variant);
  if (shouldSkipDuplicate(fingerprint)) {
    return null;
  }
  var toasterContainer = ensureToasterContainer(toaster);
  if (!appendToast) {
    toasterContainer.innerHTML = '';
  }
  var toastId = "toast-".concat(Date.now(), "-").concat(Math.random().toString(36).slice(2, 9));
  var toast = document.createElement('div');
  toast.id = toastId;
  toast.className = 'toast align-items-center border-0 shadow mb-2';
  toast.setAttribute('role', 'alert');
  toast.setAttribute('aria-live', 'assertive');
  toast.setAttribute('aria-atomic', 'true');
  toast.dataset.fingerprint = fingerprint;
  var bgClass = 'bg-secondary';
  var textClass = 'text-white';
  if (variant === 'success') {
    bgClass = 'bg-success';
  } else if (variant === 'danger') {
    bgClass = 'bg-danger';
  } else if (variant === 'warning') {
    bgClass = 'bg-warning';
    textClass = 'text-dark';
  } else if (variant === 'info') {
    bgClass = 'bg-info';
    textClass = 'text-dark';
  }
  if (solid) {
    toast.classList.add(bgClass, textClass);
  } else {
    toast.classList.add("border-".concat(variant || 'secondary'));
  }
  toast.innerHTML = "\n    <div class=\"d-flex\">\n      <div class=\"toast-body\">\n        ".concat(title ? "<strong class=\"d-block mb-1\">".concat(title, "</strong>") : '', "\n        <div>").concat(message, "</div>\n      </div>\n      <button type=\"button\" class=\"btn-close ").concat(textClass === 'text-white' ? 'btn-close-white' : '', " me-2 m-auto\" data-bs-dismiss=\"toast\" aria-label=\"Close\"></button>\n    </div>\n  ");
  toasterContainer.appendChild(toast);
  if (typeof window !== 'undefined' && window.bootstrap && window.bootstrap.Toast) {
    var bsToast = new window.bootstrap.Toast(toast, {
      autohide: true,
      delay: delay
    });
    bsToast.show();
    toast.addEventListener('hidden.bs.toast', function () {
      if (toast.parentNode) {
        toast.remove();
      }
    });
  } else {
    toast.classList.add('show');
    setTimeout(function () {
      toast.classList.remove('show');
      setTimeout(function () {
        if (toast.parentNode) {
          toast.remove();
        }
      }, 300);
    }, delay);
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
    app.config.globalProperties.$bvToast = {
      toast: showToast
    };
    app.config.globalProperties.$bvModal = modalHelper;
  }
};/**
 * Iconos usados por el paquete + aliases comunes de bootstrap-vue / consumidores.
 * Cualquier nombre adicional se puede pasar a registerBootstrapIcons(app, { icons: [...] })
 * o se registra on-demand vía installOnDemandIconResolver.
 */
var DEFAULT_ICON_NAMES = ['arrow-clockwise', 'arrow-down', 'arrow-left', 'arrow-right', 'arrow-up', 'asterisk', 'bar-chart', 'card-list', 'cart-check', 'cart', 'check', 'check-all', 'check-circle', 'check-square', 'clipboard', 'clipboard-check', 'clock-history', 'cloud-download', 'cloud-upload', 'download', 'eye', 'facebook', 'file-earmark', 'file-text', 'funnel', 'gear', 'github', 'grid', 'grid-3x3-gap', 'info-circle', 'instagram', 'kanban', 'list', 'pencil', 'people-fill', 'person', 'plus', 'puzzle', 'search', 'sort-down', 'sort-numeric-down', 'sort-numeric-up', 'sort-up', 'table', 'telephone', 'tools', 'trash', 'x', 'x-circle'];
var ICON_RESOLVER_INSTALLED = new WeakMap();

/**
 * Convierte kebab-case a PascalCase: sort-numeric-down → SortNumericDown
 */
function iconNameToPascal(iconName) {
  return String(iconName).split('-').filter(Boolean).map(function (part) {
    return part.charAt(0).toUpperCase() + part.slice(1);
  }).join('');
}

/**
 * Convierte el sufijo Pascal de BIcon* a kebab-case: PeopleFill → people-fill
 */
function pascalIconToKebab(pascal) {
  return String(pascal).replace(/([a-z0-9])([A-Z])/g, '$1-$2').replace(/([A-Z])([A-Z][a-z])/g, '$1-$2').toLowerCase();
}

/**
 * Extrae el nombre kebab del icono desde un nombre de componente Vue.
 * @returns {string|null}
 */
function parseIconComponentName(componentName) {
  if (typeof componentName !== 'string') {
    return null;
  }
  if (componentName === 'b-icon' || componentName === 'BIcon') {
    return null;
  }
  var kebabMatch = componentName.match(/^b-icon-(.+)$/);
  if (kebabMatch) {
    return kebabMatch[1];
  }
  var pascalMatch = componentName.match(/^BIcon(.+)$/);
  if (pascalMatch) {
    return pascalIconToKebab(pascalMatch[1]);
  }
  return null;
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
 * Registra un único b-icon-* / BIcon* si aún no existe.
 *
 * @returns {object|null} el wrapper registrado o null
 */
function ensureIconRegistered(app, BIconComponent, iconName) {
  if (!app || !BIconComponent || !iconName) {
    return null;
  }
  var pascal = iconNameToPascal(iconName);
  var iconComponentName = "BIcon".concat(pascal);
  var iconKebabName = "b-icon-".concat(iconName);
  var registry = app._context.components;
  if (registry[iconComponentName] || registry[iconKebabName]) {
    return registry[iconComponentName] || registry[iconKebabName];
  }
  var IconWrapper = createIconWrapper(BIconComponent, iconName);
  app.component(iconComponentName, IconWrapper);
  app.component(iconKebabName, IconWrapper);
  return IconWrapper;
}

/**
 * Proxy sobre el registro de componentes para crear b-icon-* on-demand.
 * Así cualquier <b-icon-foo> funciona sin whitelist previa.
 * Registra directo en el target para evitar recursión del Proxy.
 */
function installOnDemandIconResolver(app, BIconComponent) {
  if (!app || !BIconComponent || ICON_RESOLVER_INSTALLED.get(app)) {
    return;
  }
  var original = app._context.components;
  app._context.components = new Proxy(original, {
    get: function get(target, prop, receiver) {
      if (typeof prop === 'string') {
        var iconName = parseIconComponentName(prop);
        if (iconName) {
          var pascalName = "BIcon".concat(iconNameToPascal(iconName));
          var kebabName = "b-icon-".concat(iconName);
          if (!Object.prototype.hasOwnProperty.call(target, kebabName) && !Object.prototype.hasOwnProperty.call(target, pascalName)) {
            var IconWrapper = createIconWrapper(BIconComponent, iconName);
            target[pascalName] = IconWrapper;
            target[kebabName] = IconWrapper;
          }
        }
      }
      return Reflect.get(target, prop, receiver);
    },
    has: function has(target, prop) {
      if (typeof prop === 'string' && parseIconComponentName(prop)) {
        return true;
      }
      return Reflect.has(target, prop);
    }
  });
  ICON_RESOLVER_INSTALLED.set(app, true);
}

/**
 * Registra BIcon, b-icon y todos los b-icon-* en la app Vue.
 * Idempotente: no sobrescribe componentes ya registrados.
 * También instala resolución on-demand para cualquier b-icon-* no listado.
 *
 * @param {import('vue').App} app
 * @param {object} options
 * @param {object} options.BIcon - componente BIcon
 * @param {string[]} [options.icons] - lista extra de nombres kebab-case
 * @param {boolean} [options.onDemand=true] - registrar iconos desconocidos al resolver
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
    ensureIconRegistered(app, BIconComponent, iconName);
  });
  if (options.onDemand !== false) {
    installOnDemandIconResolver(app, BIconComponent);
  }
}var css_248z$1 = ".crud[data-v-9cafdc0f] {\n  display: flex;\n  flex-direction: column;\n  gap: 0.75rem;\n  margin: 0;\n  padding: 0;\n}\n\n.crud-body[data-v-9cafdc0f] {\n  margin: 0;\n  padding: 0;\n  min-width: 0;\n}\n\n.crud-active-filters[data-v-9cafdc0f] {\n  display: flex;\n  justify-content: flex-start;\n  align-items: center;\n  flex-wrap: wrap;\n  gap: 0.4rem 0.5rem;\n  width: 100%;\n  padding: 0.15rem 0 0.35rem;\n}\n\n.crud-active-filters-label[data-v-9cafdc0f] {\n  flex: 0 0 auto;\n  font-size: 0.875rem;\n  font-weight: 600;\n  margin: 0;\n}\n\n.crud-active-filters-list[data-v-9cafdc0f] {\n  display: inline-flex;\n  justify-content: flex-start;\n  align-items: center;\n  flex-wrap: wrap;\n  gap: 0.35rem;\n  flex: 0 1 auto;\n  margin: 0;\n}\n\n.crud-active-filter-badge[data-v-9cafdc0f] {\n  display: inline-flex;\n  align-items: center;\n  font-size: 0.875rem;\n  font-weight: 400;\n  padding: 0.35rem 0.5rem;\n  margin: 0;\n}\n\n.crud-active-filter-remove[data-v-9cafdc0f] {\n  background: transparent;\n  border: 0;\n  color: inherit;\n  opacity: 0.75;\n  font-size: 1rem;\n  line-height: 1;\n  padding: 0;\n  cursor: pointer;\n}\n\n.crud-active-filter-remove[data-v-9cafdc0f]:hover {\n  opacity: 1;\n}\n\n.crud[data-v-9cafdc0f] .table-responsive {\n  margin: 0;\n}\n\n.crud[data-v-9cafdc0f] .table {\n  margin-bottom: 0;\n}\n\n.crud[data-v-9cafdc0f] .paginator-container {\n  margin-top: 0;\n  padding-top: 0.25rem;\n}\n\ntr td[data-v-9cafdc0f]:last-child,\ntr td[data-v-9cafdc0f]:first-child {\n  width: 1%;\n  white-space: nowrap;\n}\n\ntbody tr.selected[data-v-9cafdc0f] {\n  background-color: #e3f2fd !important;\n}\ntbody tr.selected td[data-v-9cafdc0f] {\n  background-color: transparent !important;\n}\ntbody tr.selected:hover[data-v-9cafdc0f] {\n  background-color: #bbdefb !important;\n}\ntbody tr.selected:hover td[data-v-9cafdc0f] {\n  background-color: transparent !important;\n}\n\n.table-striped tbody tr.selected:nth-of-type(odd)[data-v-9cafdc0f] {\n  background-color: #e3f2fd !important;\n}\n.table-striped tbody tr.selected:nth-of-type(odd) td[data-v-9cafdc0f] {\n  background-color: transparent !important;\n}\n\n.table-striped tbody tr.selected:nth-of-type(even)[data-v-9cafdc0f] {\n  background-color: #e3f2fd !important;\n}\n.table-striped tbody tr.selected:nth-of-type(even) td[data-v-9cafdc0f] {\n  background-color: transparent !important;\n}\n\n.crud-pagination[data-v-9cafdc0f] {\n  display: flex;\n  align-items: center;\n  width: 100%;\n  justify-content: center;\n  margin-top: 0;\n}\n\n.crud-header[data-v-9cafdc0f] {\n  display: flex;\n  flex-wrap: wrap;\n  align-items: flex-start;\n  justify-content: space-between;\n  gap: 0.75rem 1rem;\n  margin: 0;\n  padding: 0;\n}\n.crud-header .crud-title[data-v-9cafdc0f] {\n  margin: 0;\n  padding: 0.25rem 0;\n}\n.crud-header .table-options[data-v-9cafdc0f] {\n  margin: 0;\n  padding: 0;\n  display: flex;\n  align-items: center;\n  justify-content: flex-end;\n  width: 100%;\n}\n\n.custom-control[data-v-9cafdc0f] {\n  position: relative;\n}\n\n@media (min-width: 992px) {\n  .table[data-v-9cafdc0f] {\n    table-layout: auto;\n  }\n  .table tbody td[data-v-9cafdc0f] {\n    overflow: scroll;\n    -ms-overflow-style: none;\n    /* IE and Edge */\n    scrollbar-width: none;\n    /* Firefox */\n  }\n  .table tbody td[data-v-9cafdc0f]::-webkit-scrollbar {\n    display: none;\n  }\n}\n.kanban-board[data-v-9cafdc0f] {\n  display: flex;\n  gap: 1rem;\n  overflow-x: auto;\n  padding: 1rem;\n}\n\n.kanban-column[data-v-9cafdc0f] {\n  background: #f4f5f7;\n  border-radius: 8px;\n  width: 300px;\n  display: flex;\n  flex-direction: column;\n  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);\n}\n\n.kanban-column-header[data-v-9cafdc0f] {\n  font-weight: bold;\n  padding: 0.5rem;\n  background: #dfe1e6;\n  border-radius: 8px 8px 0 0;\n  text-align: center;\n}\n\n.kanban-column-body[data-v-9cafdc0f] {\n  padding: 0.5rem;\n  min-height: 100px;\n  background: #ffffff;\n  border-radius: 0 0 8px 8px;\n  display: flex;\n  flex-direction: column;\n  gap: 0.5rem;\n}\n\n.kanban-card[data-v-9cafdc0f] {\n  background: #ffffff;\n  border-radius: 4px;\n  padding: 1rem;\n  box-shadow: 0 1px 2px rgba(0, 0, 0, 0.1);\n  cursor: grab;\n}";
styleInject(css_248z$1);var _sfc_main$1 = {
  name: "VueLaravelCrud",
  components: {
    CrudHeader: CrudHeader,
    CrudTable: CrudTable,
    CrudCards: CrudCards,
    CrudKanban: CrudKanban,
    CrudCustom: CrudCustom,
    CrudModals: CrudModals,
    CrudPagination: CrudPagination,
    CrudDetailView: CrudDetailView
  },
  mixins: [crudData, crudApi, crudFilters, crudValidation, crudHelpers, crudUrlSync],
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
    },
    effectiveCrudItemId: function effectiveCrudItemId() {
      return this.crudItemId != null ? this.crudItemId : this.id;
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
    var vm = this;
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
      quickFilters: this.quickFilters,
      quickFiltersPlacement: this.quickFiltersPlacement,
      quickFiltersVariant: this.quickFiltersVariant,
      quickFiltersClass: this.quickFiltersClass,
      quickFiltersAriaLabel: this.quickFiltersAriaLabel,
      activeQuickFilterKey: this.activeQuickFilterKeyReactive,
      selectQuickFilter: this.selectQuickFilter,
      infiniteScroll: this.infiniteScroll,
      sortable: this.sortable,
      orderable: this.orderable,
      validate: this.validate,
      orderProp: this.orderProp,
      createMultipart: this.createMultipart,
      apiUrl: this.apiUrl,
      search: this.searchReactive,
      displaySearch: this.displaySearchReactive,
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
      // Objeto reactivo mutable (no ComputedRef) para inject Options API
      displayMode: this.displayModeReactive,
      getDisplayMode: function getDisplayMode() {
        return vm._displayMode;
      },
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
      // dayjs sustituye a moment (mantenemos alias moment por compatibilidad)
      dayjs: this.dayjs,
      moment: this.dayjs,
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
      itemDefault: this.itemDefault,
      filters: this.filters,
      filtersVisible: this.filtersVisibleReactive,
      filterSidebarOpen: this.filterSidebarOpenReactive,
      setFilterSidebarOpen: function setFilterSidebarOpen(val) {
        var open = !!val;
        vm.filtersVisible = open;
        vm.filterSidebarOpen = open;
        if (open && (!vm.internalFilters || vm.internalFilters.length === 0)) {
          vm.setupFilters();
        }
      },
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
      getSortPriority: this.getSortPriority,
      toggleFilters: this.toggleFilters,
      resetFilters: this.resetFilters,
      activeFilters: this.activeFilters,
      clearActiveFilter: this.clearActiveFilter,
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
      closeUi: this.closeUi,
      openUi: this.openUi,
      uiMode: this.uiModeReactive,
      isPageViewMode: function isPageViewMode() {
        return _this3.isPageViewMode;
      },
      isModalViewMode: function isModalViewMode() {
        return _this3.isModalViewMode;
      },
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
    /**
     * Filtros rápidos (pills/tabs) junto al título u otras ubicaciones.
     * [{ key, label, icon?, variant?, count?, filter?, apply?, default?, disabled?, class? }]
     */
    quickFilters: {
      type: Array,
      default: function _default() {
        return [];
      }
    },
    /** v-model:quickFilter — key activa */
    quickFilter: {
      type: [String, Number],
      default: null
    },
    /** title | toolbar | below */
    quickFiltersPlacement: {
      type: String,
      default: 'title'
    },
    /** pills | tabs | segmented */
    quickFiltersVariant: {
      type: String,
      default: 'pills'
    },
    quickFiltersClass: {
      type: String,
      default: ''
    },
    quickFiltersAriaLabel: {
      type: String,
      default: 'Filtros rápidos'
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
    },
    /**
     * Cómo mostrar create/show/edit:
     * - modal: comportamiento clásico (default)
     * - page: vista dedicada reutilizando slots form/show
     */
    viewMode: {
      type: String,
      default: 'modal',
      validator: function validator(v) {
        return ['modal', 'page'].includes(String(v || '').toLowerCase());
      }
    },
    /**
     * Sincronizar create/show/edit con la URL.
     * true => path (/resource/create, /resource/:id, /resource/:id/edit)
     * o { strategy: 'query'|'path', ... }
     */
    urlSync: {
      type: [Boolean, Object],
      default: false
    },
    /** Acción inicial desde props de ruta (create|show|edit) */
    crudAction: {
      type: String,
      default: null
    },
    /** Id inicial desde props de ruta */
    crudItemId: {
      type: [String, Number],
      default: null
    },
    /** Alias conveniente: id de ruta */
    id: {
      type: [String, Number],
      default: null
    }
  }
};
var _hoisted_1$1 = {
  class: "crud"
};
var _hoisted_2$1 = {
  key: 0,
  class: "crud-active-filters"
};
var _hoisted_3$1 = {
  class: "crud-active-filters-label text-muted"
};
var _hoisted_4$1 = {
  class: "crud-active-filters-list"
};
var _hoisted_5$1 = ["onClick"];
var _hoisted_6$1 = {
  class: "crud-body"
};
function _sfc_render$1(_ctx, _cache, $props, $setup, $data, $options) {
  var _component_CrudDetailView = require$$0.resolveComponent("CrudDetailView");
  var _component_CrudHeader = require$$0.resolveComponent("CrudHeader");
  var _component_b_icon_funnel = require$$0.resolveComponent("b-icon-funnel");
  var _component_b_badge = require$$0.resolveComponent("b-badge");
  var _component_b_button = require$$0.resolveComponent("b-button");
  var _component_CrudTable = require$$0.resolveComponent("CrudTable");
  var _component_CrudCards = require$$0.resolveComponent("CrudCards");
  var _component_CrudKanban = require$$0.resolveComponent("CrudKanban");
  var _component_CrudCustom = require$$0.resolveComponent("CrudCustom");
  var _component_CrudPagination = require$$0.resolveComponent("CrudPagination");
  var _component_CrudModals = require$$0.resolveComponent("CrudModals");
  return require$$0.openBlock(), require$$0.createElementBlock("div", _hoisted_1$1, [_ctx.isPageViewMode && _ctx.isDetailOpen ? (require$$0.openBlock(), require$$0.createBlock(_component_CrudDetailView, {
    key: 0
  }, require$$0.createSlots({
    _: 2 /* DYNAMIC */
  }, [require$$0.renderList(_ctx.$slots, function (_, name) {
    return {
      name: name,
      fn: require$$0.withCtx(function (slotProps) {
        return [require$$0.renderSlot(_ctx.$slots, name, require$$0.normalizeProps(require$$0.guardReactiveProps(slotProps)), undefined, true)];
      })
    };
  })]), 1024 /* DYNAMIC_SLOTS */)) : require$$0.createCommentVNode("v-if", true), _ctx.listVisible ? (require$$0.openBlock(), require$$0.createElementBlock(require$$0.Fragment, {
    key: 1
  }, [require$$0.createVNode(_component_CrudHeader, null, require$$0.createSlots({
    _: 2 /* DYNAMIC */
  }, [require$$0.renderList(_ctx.$slots, function (_, name) {
    return {
      name: name,
      fn: require$$0.withCtx(function (slotProps) {
        return [require$$0.renderSlot(_ctx.$slots, name, require$$0.normalizeProps(require$$0.guardReactiveProps(slotProps)), undefined, true)];
      })
    };
  })]), 1024 /* DYNAMIC_SLOTS */), $props.enableFilters && _ctx.activeFilters.length > 0 ? (require$$0.openBlock(), require$$0.createElementBlock("div", _hoisted_2$1, [require$$0.createElementVNode("span", _hoisted_3$1, [require$$0.createVNode(_component_b_icon_funnel, {
    class: "me-1"
  }), _cache[1] || (_cache[1] = require$$0.createTextVNode(" Filtros activos: ", -1 /* CACHED */))]), require$$0.createElementVNode("div", _hoisted_4$1, [(require$$0.openBlock(true), require$$0.createElementBlock(require$$0.Fragment, null, require$$0.renderList(_ctx.activeFilters, function (af) {
    return require$$0.openBlock(), require$$0.createBlock(_component_b_badge, {
      key: af.key,
      variant: "primary",
      class: "crud-active-filter-badge"
    }, {
      default: require$$0.withCtx(function () {
        return [require$$0.createElementVNode("strong", null, require$$0.toDisplayString(af.label) + ":", 1 /* TEXT */), require$$0.createTextVNode(" " + require$$0.toDisplayString(af.displayValue) + " ", 1 /* TEXT */), require$$0.createElementVNode("button", {
          type: "button",
          class: "crud-active-filter-remove ms-1",
          "aria-label": "Quitar filtro",
          onClick: function onClick($event) {
            return _ctx.clearActiveFilter(af.key);
          }
        }, "×", 8 /* PROPS */, _hoisted_5$1)];
      }),
      _: 2 /* DYNAMIC */
    }, 1024 /* DYNAMIC_SLOTS */);
  }), 128 /* KEYED_FRAGMENT */)), _ctx.activeFilters.length > 1 ? (require$$0.openBlock(), require$$0.createBlock(_component_b_button, {
    key: 0,
    variant: "link",
    size: "sm",
    class: "text-danger p-0",
    onClick: _cache[0] || (_cache[0] = function ($event) {
      return _ctx.resetFilters();
    })
  }, {
    default: require$$0.withCtx(function () {
      return _toConsumableArray$1(_cache[2] || (_cache[2] = [require$$0.createTextVNode(" Limpiar todos ", -1 /* CACHED */)]));
    }),
    _: 1 /* STABLE */
  })) : require$$0.createCommentVNode("v-if", true)])])) : require$$0.createCommentVNode("v-if", true), require$$0.createElementVNode("div", _hoisted_6$1, [require$$0.createVNode(_component_CrudTable, null, require$$0.createSlots({
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
  })]), 1024 /* DYNAMIC_SLOTS */), require$$0.createVNode(_component_CrudCustom)]), require$$0.createVNode(_component_CrudPagination)], 64 /* STABLE_FRAGMENT */)) : require$$0.createCommentVNode("v-if", true), _ctx.isModalViewMode ? (require$$0.openBlock(), require$$0.createBlock(_component_CrudModals, {
    key: 2,
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
  })]), 1536 /* NEED_PATCH, DYNAMIC_SLOTS */)) : require$$0.createCommentVNode("v-if", true)]);
}
var component$1 = /*#__PURE__*/_export_sfc(_sfc_main$1, [['render', _sfc_render$1], ['__scopeId', "data-v-9cafdc0f"]]);var css_248z = "\n.perm-tree-editor[data-v-f074defb] {\r\n  border: 1px solid #e9ecef;\r\n  border-radius: 0.5rem;\r\n  padding: 0.75rem;\r\n  background: #fff;\n}\n.perm-tree-editor__toolbar[data-v-f074defb] {\r\n  display: flex;\r\n  flex-wrap: wrap;\r\n  gap: 0.5rem;\r\n  align-items: center;\r\n  justify-content: space-between;\r\n  margin-bottom: 0.75rem;\n}\n.perm-tree-editor__search[data-v-f074defb] {\r\n  max-width: 18rem;\r\n  flex: 1 1 14rem;\n}\n.perm-tree-editor__tree[data-v-f074defb] {\r\n  max-height: 28rem;\r\n  overflow: auto;\r\n  border: 1px solid #f1f3f5;\r\n  border-radius: 0.375rem;\r\n  padding: 0.5rem 0.75rem;\r\n  background: #fafbfc;\n}\n.perm-tree__row[data-v-f074defb] {\r\n  display: flex;\r\n  align-items: center;\r\n  min-height: 1.9rem;\r\n  padding: 0.15rem 0;\n}\n.perm-tree__toggle[data-v-f074defb] {\r\n  width: 1.25rem;\r\n  line-height: 1;\r\n  text-decoration: none;\r\n  color: #495057;\n}\n.perm-tree__label[data-v-f074defb] {\r\n  font-size: 0.875rem;\r\n  word-break: break-word;\n}\r\n";
styleInject(css_248z);var PermTreeNode = require$$0.defineComponent({
  name: 'PermTreeNode',
  props: {
    node: {
      type: Object,
      required: true
    },
    depth: {
      type: Number,
      default: 0
    },
    expandedMap: {
      type: Object,
      required: true
    },
    grantedSet: {
      type: Object,
      required: true
    },
    viaRoleSet: {
      type: Object,
      required: true
    },
    readonly: {
      type: Boolean,
      default: false
    }
  },
  emits: ['toggle-expand', 'toggle-permission', 'toggle-group'],
  computed: {
    expanded: function expanded() {
      return !!this.expandedMap[this.node.path];
    },
    hasChildren: function hasChildren() {
      return Array.isArray(this.node.children) && this.node.children.length > 0;
    },
    leafNames: function leafNames() {
      var names = [];
      var _walk = function walk(n) {
        var _n$permission;
        if ((_n$permission = n.permission) !== null && _n$permission !== void 0 && _n$permission.name) names.push(n.permission.name);
        (n.children || []).forEach(_walk);
      };
      _walk(this.node);
      return names;
    },
    grantedLeaves: function grantedLeaves() {
      var _this = this;
      return this.leafNames.filter(function (n) {
        return _this.grantedSet[n];
      });
    },
    groupState: function groupState() {
      var total = this.leafNames.length;
      var granted = this.grantedLeaves.length;
      if (!total || granted === 0) return 'none';
      if (granted === total) return 'all';
      return 'some';
    },
    viaRole: function viaRole() {
      var _this$node$permission;
      return (_this$node$permission = this.node.permission) !== null && _this$node$permission !== void 0 && _this$node$permission.name ? !!this.viaRoleSet[this.node.permission.name] : false;
    }
  },
  methods: {
    onGroupChange: function onGroupChange(event) {
      this.$emit('toggle-group', {
        names: this.leafNames,
        grant: event.target.checked
      });
    },
    onLeafChange: function onLeafChange(event) {
      this.$emit('toggle-permission', {
        name: this.node.permission.name,
        grant: event.target.checked
      });
    }
  },
  render: function render() {
    var _this2 = this;
    var pad = {
      paddingLeft: "".concat(this.depth * 1.1, "rem")
    };
    var children = [];
    if (this.hasChildren) {
      children.push(require$$0.h('div', {
        class: 'perm-tree__row perm-tree__row--group',
        style: pad
      }, [require$$0.h('button', {
        type: 'button',
        class: 'btn btn-sm btn-link perm-tree__toggle p-0 me-1',
        onClick: function onClick() {
          return _this2.$emit('toggle-expand', _this2.node.path);
        }
      }, this.expanded ? '▾' : '▸'), require$$0.h('input', {
        class: 'form-check-input me-2',
        type: 'checkbox',
        checked: this.groupState === 'all',
        disabled: this.readonly,
        onChange: this.onGroupChange,
        onVnodeMounted: function onVnodeMounted(vnode) {
          if (vnode.el) vnode.el.indeterminate = _this2.groupState === 'some';
        },
        onVnodeUpdated: function onVnodeUpdated(vnode) {
          if (vnode.el) vnode.el.indeterminate = _this2.groupState === 'some';
        }
      }), require$$0.h('span', {
        class: 'perm-tree__label fw-semibold'
      }, this.node.label), require$$0.h('span', {
        class: 'badge text-bg-light ms-2'
      }, "".concat(this.grantedLeaves.length, "/").concat(this.leafNames.length))]));
      if (this.expanded) {
        children.push(require$$0.h('ul', {
          class: 'list-unstyled mb-0'
        }, this.node.children.map(function (child) {
          return require$$0.h(PermTreeNode, {
            key: child.path,
            node: child,
            depth: _this2.depth + 1,
            expandedMap: _this2.expandedMap,
            grantedSet: _this2.grantedSet,
            viaRoleSet: _this2.viaRoleSet,
            readonly: _this2.readonly,
            onToggleExpand: function onToggleExpand(p) {
              return _this2.$emit('toggle-expand', p);
            },
            onTogglePermission: function onTogglePermission(p) {
              return _this2.$emit('toggle-permission', p);
            },
            onToggleGroup: function onToggleGroup(p) {
              return _this2.$emit('toggle-group', p);
            }
          });
        })));
      }
    } else if (this.node.permission) {
      children.push(require$$0.h('div', {
        class: 'perm-tree__row',
        style: pad
      }, [require$$0.h('input', {
        class: 'form-check-input me-2',
        type: 'checkbox',
        checked: !!this.grantedSet[this.node.permission.name],
        disabled: this.readonly,
        onChange: this.onLeafChange
      }), require$$0.h('span', {
        class: 'perm-tree__label'
      }, this.node.permission.name), this.viaRole ? require$$0.h('span', {
        class: 'badge text-bg-info ms-2'
      }, 'vía rol') : null]));
    }
    return require$$0.h('li', {
      class: 'perm-tree__node'
    }, children);
  }
});
function buildPermissionTree(permissions) {
  var root = {
    children: [],
    map: {}
  };
  var ensure = function ensure(parent, segment, path) {
    if (!parent.map[segment]) {
      var node = {
        path: path,
        label: segment,
        children: [],
        map: {},
        permission: null
      };
      parent.map[segment] = node;
      parent.children.push(node);
    }
    return parent.map[segment];
  };
  (permissions || []).forEach(function (perm) {
    var name = typeof perm === 'string' ? perm : perm === null || perm === void 0 ? void 0 : perm.name;
    if (!name) return;
    var segments = String(name).split('.').filter(Boolean);
    if (!segments.length) return;
    var current = root;
    var path = '';
    segments.forEach(function (segment, idx) {
      path = path ? "".concat(path, ".").concat(segment) : segment;
      current = ensure(current, segment, path);
      if (idx === segments.length - 1) {
        current.permission = typeof perm === 'string' ? {
          name: perm
        } : perm;
      }
    });
  });
  var _sortNodes = function sortNodes(nodes) {
    nodes.sort(function (a, b) {
      return a.label.localeCompare(b.label);
    });
    nodes.forEach(function (n) {
      return _sortNodes(n.children || []);
    });
  };
  _sortNodes(root.children);
  return root.children;
}
function filterTree(nodes, query) {
  if (!query) return nodes;
  var q = query.toLowerCase();
  var _walk2 = function walk(list) {
    var out = [];
    list.forEach(function (node) {
      var _node$permission;
      var childMatches = _walk2(node.children || []);
      var selfMatch = node.label && node.label.toLowerCase().includes(q) || ((_node$permission = node.permission) === null || _node$permission === void 0 ? void 0 : _node$permission.name) && node.permission.name.toLowerCase().includes(q);
      if (selfMatch || childMatches.length) {
        out.push(_objectSpread2$1(_objectSpread2$1({}, node), {}, {
          children: selfMatch ? node.children : childMatches
        }));
      }
    });
    return out;
  };
  return _walk2(nodes);
}
function collectPaths(nodes) {
  var acc = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : [];
  nodes.forEach(function (n) {
    acc.push(n.path);
    collectPaths(n.children || [], acc);
  });
  return acc;
}
function normalizePermissionNames(value) {
  if (!Array.isArray(value)) return [];
  return value.map(function (p) {
    return typeof p === 'string' ? p : p === null || p === void 0 ? void 0 : p.name;
  }).filter(Boolean);
}
var _sfc_main = {
  name: 'PermissionTreeEditor',
  components: {
    PermTreeNode: PermTreeNode
  },
  props: {
    permissions: {
      type: Array,
      default: function _default() {
        return [];
      }
    },
    modelValue: {
      type: Array,
      default: function _default() {
        return [];
      }
    },
    viaRolePermissions: {
      type: Array,
      default: function _default() {
        return [];
      }
    },
    readonly: {
      type: Boolean,
      default: false
    }
  },
  emits: ['update:modelValue'],
  data: function data() {
    return {
      search: '',
      expandedMap: {}
    };
  },
  computed: {
    permissionsList: function permissionsList() {
      return Array.isArray(this.permissions) ? this.permissions : [];
    },
    tree: function tree() {
      return buildPermissionTree(this.permissionsList);
    },
    filteredTree: function filteredTree() {
      return filterTree(this.tree, this.search.trim());
    },
    effectiveExpandedMap: function effectiveExpandedMap() {
      // Con búsqueda activa, expandir coincidencias para poder trabajar
      if (this.search.trim()) {
        var map = _objectSpread2$1({}, this.expandedMap);
        collectPaths(this.filteredTree).forEach(function (p) {
          map[p] = true;
        });
        return map;
      }
      return this.expandedMap;
    },
    grantedNames: function grantedNames() {
      return normalizePermissionNames(this.modelValue);
    },
    grantedSet: function grantedSet() {
      var set = {};
      this.grantedNames.forEach(function (n) {
        set[n] = true;
      });
      return set;
    },
    viaRoleNames: function viaRoleNames() {
      return normalizePermissionNames(this.viaRolePermissions);
    },
    viaRoleSet: function viaRoleSet() {
      var set = {};
      this.viaRoleNames.forEach(function (n) {
        set[n] = true;
      });
      return set;
    },
    grantedCount: function grantedCount() {
      return this.grantedNames.length;
    }
  },
  methods: {
    emitNames: function emitNames(names) {
      var unique = _toConsumableArray$1(new Set(names));
      var byName = {};
      this.permissionsList.forEach(function (p) {
        var name = typeof p === 'string' ? p : p === null || p === void 0 ? void 0 : p.name;
        if (name) byName[name] = typeof p === 'string' ? {
          name: p
        } : p;
      });
      this.$emit('update:modelValue', unique.map(function (name) {
        return byName[name] || {
          name: name
        };
      }));
    },
    toggleExpand: function toggleExpand(path) {
      this.expandedMap = _objectSpread2$1(_objectSpread2$1({}, this.expandedMap), {}, _defineProperty$1({}, path, !this.expandedMap[path]));
    },
    expandAll: function expandAll() {
      var map = {};
      collectPaths(this.filteredTree).forEach(function (p) {
        map[p] = true;
      });
      this.expandedMap = _objectSpread2$1(_objectSpread2$1({}, this.expandedMap), map);
    },
    collapseAll: function collapseAll() {
      this.expandedMap = {};
    },
    togglePermission: function togglePermission(_ref) {
      var name = _ref.name,
        grant = _ref.grant;
      var set = new Set(this.grantedNames);
      if (grant) set.add(name);else set.delete(name);
      this.emitNames(_toConsumableArray$1(set));
    },
    toggleGroup: function toggleGroup(_ref2) {
      var names = _ref2.names,
        grant = _ref2.grant;
      var set = new Set(this.grantedNames);
      names.forEach(function (n) {
        if (grant) set.add(n);else set.delete(n);
      });
      this.emitNames(_toConsumableArray$1(set));
    },
    visibleLeafNames: function visibleLeafNames() {
      var names = [];
      var _walk3 = function walk(nodes) {
        nodes.forEach(function (n) {
          var _n$permission2;
          if ((_n$permission2 = n.permission) !== null && _n$permission2 !== void 0 && _n$permission2.name) names.push(n.permission.name);
          _walk3(n.children || []);
        });
      };
      _walk3(this.filteredTree);
      return names;
    },
    grantVisible: function grantVisible() {
      var set = new Set(this.grantedNames);
      this.visibleLeafNames().forEach(function (n) {
        return set.add(n);
      });
      this.emitNames(_toConsumableArray$1(set));
    },
    denyVisible: function denyVisible() {
      var deny = new Set(this.visibleLeafNames());
      this.emitNames(this.grantedNames.filter(function (n) {
        return !deny.has(n);
      }));
    }
  }
};
var _hoisted_1 = {
  class: "perm-tree-editor"
};
var _hoisted_2 = {
  key: 0,
  class: "perm-tree-editor__toolbar"
};
var _hoisted_3 = {
  class: "input-group input-group-sm perm-tree-editor__search"
};
var _hoisted_4 = {
  class: "btn-group btn-group-sm"
};
var _hoisted_5 = {
  class: "perm-tree-editor__meta text-muted small mb-2"
};
var _hoisted_6 = {
  key: 0,
  class: "ms-2"
};
var _hoisted_7 = {
  class: "perm-tree-editor__tree"
};
var _hoisted_8 = {
  key: 0,
  class: "text-muted text-center py-4"
};
var _hoisted_9 = {
  key: 1,
  class: "perm-tree list-unstyled mb-0"
};
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  var _component_perm_tree_node = require$$0.resolveComponent("perm-tree-node");
  return require$$0.openBlock(), require$$0.createElementBlock("div", _hoisted_1, [!$props.readonly ? (require$$0.openBlock(), require$$0.createElementBlock("div", _hoisted_2, [require$$0.createElementVNode("div", _hoisted_3, [_cache[5] || (_cache[5] = require$$0.createElementVNode("span", {
    class: "input-group-text"
  }, [require$$0.createElementVNode("i", {
    class: "bi bi-search"
  })], -1 /* CACHED */)), require$$0.withDirectives(require$$0.createElementVNode("input", {
    "onUpdate:modelValue": _cache[0] || (_cache[0] = function ($event) {
      return $data.search = $event;
    }),
    type: "search",
    class: "form-control",
    placeholder: "Buscar permiso o grupo..."
  }, null, 512 /* NEED_PATCH */), [[require$$0.vModelText, $data.search]])]), require$$0.createElementVNode("div", _hoisted_4, [require$$0.createElementVNode("button", {
    type: "button",
    class: "btn btn-outline-secondary",
    onClick: _cache[1] || (_cache[1] = function () {
      return $options.expandAll && $options.expandAll.apply($options, arguments);
    })
  }, "Expandir"), require$$0.createElementVNode("button", {
    type: "button",
    class: "btn btn-outline-secondary",
    onClick: _cache[2] || (_cache[2] = function () {
      return $options.collapseAll && $options.collapseAll.apply($options, arguments);
    })
  }, "Colapsar"), require$$0.createElementVNode("button", {
    type: "button",
    class: "btn btn-outline-success",
    onClick: _cache[3] || (_cache[3] = function () {
      return $options.grantVisible && $options.grantVisible.apply($options, arguments);
    })
  }, "Habilitar visibles"), require$$0.createElementVNode("button", {
    type: "button",
    class: "btn btn-outline-danger",
    onClick: _cache[4] || (_cache[4] = function () {
      return $options.denyVisible && $options.denyVisible.apply($options, arguments);
    })
  }, "Quitar visibles")])])) : require$$0.createCommentVNode("v-if", true), require$$0.createElementVNode("div", _hoisted_5, [require$$0.createElementVNode("span", null, require$$0.toDisplayString($options.grantedCount) + " habilitados", 1 /* TEXT */), _cache[6] || (_cache[6] = require$$0.createElementVNode("span", {
    class: "mx-1"
  }, "·", -1 /* CACHED */)), require$$0.createElementVNode("span", null, require$$0.toDisplayString($options.permissionsList.length) + " totales", 1 /* TEXT */), $options.viaRoleNames.length ? (require$$0.openBlock(), require$$0.createElementBlock("span", _hoisted_6, " (" + require$$0.toDisplayString($options.viaRoleNames.length) + " vía rol) ", 1 /* TEXT */)) : require$$0.createCommentVNode("v-if", true)]), require$$0.createElementVNode("div", _hoisted_7, [!$options.filteredTree.length ? (require$$0.openBlock(), require$$0.createElementBlock("div", _hoisted_8, " No hay permisos para mostrar ")) : (require$$0.openBlock(), require$$0.createElementBlock("ul", _hoisted_9, [(require$$0.openBlock(true), require$$0.createElementBlock(require$$0.Fragment, null, require$$0.renderList($options.filteredTree, function (node) {
    return require$$0.openBlock(), require$$0.createBlock(_component_perm_tree_node, {
      key: node.path,
      node: node,
      depth: 0,
      "expanded-map": $options.effectiveExpandedMap,
      "granted-set": $options.grantedSet,
      "via-role-set": $options.viaRoleSet,
      readonly: $props.readonly,
      onToggleExpand: $options.toggleExpand,
      onTogglePermission: $options.togglePermission,
      onToggleGroup: $options.toggleGroup
    }, null, 8 /* PROPS */, ["node", "expanded-map", "granted-set", "via-role-set", "readonly", "onToggleExpand", "onTogglePermission", "onToggleGroup"]);
  }), 128 /* KEYED_FRAGMENT */))]))])]);
}
var PermissionTreeEditor = /*#__PURE__*/_export_sfc(_sfc_main, [['render', _sfc_render], ['__scopeId', "data-v-f074defb"]]);// Import vue component

// Default export is installable instance of component.
var component = /*#__PURE__*/(function () {
  var installable = component$1;
  installable.install = function (app) {
    app.component('VueLaravelCrud', installable);
    app.component('PermissionTreeEditor', PermissionTreeEditor);
  };
  return installable;
})();var namedExports=/*#__PURE__*/Object.freeze({__proto__:null,PermissionTreeEditor:PermissionTreeEditor,crudRoutes:crudRoutes,default:component,normalizeUrlSync:normalizeUrlSync});// Attach named exports directly to component. IIFE/CJS will
// only expose one global var, with named exports exposed as properties of
// that global var (eg. plugin.namedExport)
Object.entries(namedExports).forEach(function (_ref) {
  var _ref2 = _slicedToArray(_ref, 2),
    exportName = _ref2[0],
    exported = _ref2[1];
  if (exportName !== 'default') component[exportName] = exported;
});module.exports=component;