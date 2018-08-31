pluginWebpack([1],[
/* 0 */,
/* 1 */,
/* 2 */,
/* 3 */,
/* 4 */,
/* 5 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
//
//
//
//
//
//
//

/* harmony default export */ __webpack_exports__["a"] = ({
    name: 'App'
});

/***/ }),
/* 6 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ __webpack_exports__["a"] = ({

    name: 'Home',

    data() {
        return {
            debt: '',
            prgrm_length: '',
            estimated_settlement: '',
            frequeny: '',
            admin_fee: '',
            service_fee: '',
            total_cost: '',
            estimated_saving: '',
            if_monthly: '',
            if_biweekly: '',
            if_weekly: '',
            is_calculated: false,
            hasError: false
        };
    },
    methods: {
        calculate_mortgage: function () {
            if (this.debt == '' || this.prgrm_length == '' || this.estimated_settlement == '' || this.admin_fee == '' || this.service_fee == '') {
                this.hasError = true;
            } else {
                this.hasError = false;
                var est_settelement = this.estimated_settlement / 100;
                var adminFee = this.admin_fee / 100;
                var serviceFee = this.service_fee / 100;
                this.total_cost = this.debt * adminFee + this.debt * est_settelement * (1 + serviceFee);
                //this.total_cost = this.total_cost.toFixed(2);
                this.estimated_saving = this.debt - this.total_cost;
                this.if_monthly = this.total_cost / this.prgrm_length;
                this.if_biweekly = this.total_cost / (this.prgrm_length * 2);
                this.if_weekly = this.total_cost / (this.prgrm_length * 4);
                this.is_calculated = true;
            }
        }
    }
});

/***/ }),
/* 7 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
//
//
//
//
//
//

/* harmony default export */ __webpack_exports__["a"] = ({

    name: 'Profile',

    data() {
        return {};
    }
});

/***/ }),
/* 8 */,
/* 9 */,
/* 10 */,
/* 11 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _vue = __webpack_require__(1);

var _vue2 = _interopRequireDefault(_vue);

var _App = __webpack_require__(14);

var _App2 = _interopRequireDefault(_App);

var _router = __webpack_require__(18);

var _router2 = _interopRequireDefault(_router);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

_vue2.default.config.productionTip = false;

/* eslint-disable no-new */
new _vue2.default({
    el: '#vue-frontend-app',
    router: _router2.default,
    render: function render(h) {
        return h(_App2.default);
    }
});

/***/ }),
/* 12 */,
/* 13 */,
/* 14 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_App_vue__ = __webpack_require__(5);
/* empty harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_c687af6c_hasScoped_false_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_App_vue__ = __webpack_require__(17);
var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(15)
}
var normalizeComponent = __webpack_require__(0)
/* script */


/* template */

/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_App_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_c687af6c_hasScoped_false_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_App_vue__["a" /* default */],
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "assets\\src\\frontend\\App.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-c687af6c", Component.options)
  } else {
    hotAPI.reload("data-v-c687af6c", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

/* harmony default export */ __webpack_exports__["default"] = (Component.exports);


/***/ }),
/* 15 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 16 */,
/* 17 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    { attrs: { id: "vue-frontend-app" } },
    [_c("router-link", { attrs: { to: "/" } }), _vm._v(" "), _c("router-view")],
    1
  )
}
var staticRenderFns = []
render._withStripped = true
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);
if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-hot-reload-api")      .rerender("data-v-c687af6c", esExports)
  }
}

/***/ }),
/* 18 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _vue = __webpack_require__(1);

var _vue2 = _interopRequireDefault(_vue);

var _vueRouter = __webpack_require__(4);

var _vueRouter2 = _interopRequireDefault(_vueRouter);

var _Home = __webpack_require__(19);

var _Home2 = _interopRequireDefault(_Home);

var _Profile = __webpack_require__(22);

var _Profile2 = _interopRequireDefault(_Profile);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

_vue2.default.use(_vueRouter2.default);

exports.default = new _vueRouter2.default({
    routes: [{
        path: '/',
        name: 'Home',
        component: _Home2.default
    }, {
        path: '/profile',
        name: 'Profile',
        component: _Profile2.default
    }]
});

/***/ }),
/* 19 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_Home_vue__ = __webpack_require__(6);
/* empty harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_c0d2ce64_hasScoped_true_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_Home_vue__ = __webpack_require__(21);
var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(20)
}
var normalizeComponent = __webpack_require__(0)
/* script */


/* template */

/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-c0d2ce64"
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_Home_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_c0d2ce64_hasScoped_true_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_Home_vue__["a" /* default */],
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "assets\\src\\frontend\\components\\Home.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-c0d2ce64", Component.options)
  } else {
    hotAPI.reload("data-v-c0d2ce64", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

/* harmony default export */ __webpack_exports__["default"] = (Component.exports);


/***/ }),
/* 20 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 21 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("div", { staticClass: "mortgage_calculator" }, [
    _vm.hasError
      ? _c("div", { staticClass: "error row" }, [_vm._m(0)])
      : _vm._e(),
    _vm._v(" "),
    _c(
      "div",
      { staticClass: "mortgage_input row" },
      [
        _c("h2", { staticClass: "heading" }, [_vm._v("Program Details")]),
        _vm._v(" "),
        _vm._m(1),
        _vm._v(" "),
        _c("div", { staticClass: "col-75" }, [
          _c("input", {
            directives: [
              {
                name: "model",
                rawName: "v-model",
                value: _vm.debt,
                expression: "debt"
              }
            ],
            staticClass: "debt",
            attrs: { type: "text", placeholder: "10000", required: "" },
            domProps: { value: _vm.debt },
            on: {
              input: function($event) {
                if ($event.target.composing) {
                  return
                }
                _vm.debt = $event.target.value
              }
            }
          })
        ]),
        _vm._v(" "),
        _vm._m(2),
        _vm._v(" "),
        _c("div", { staticClass: "col-75" }, [
          _c("input", {
            directives: [
              {
                name: "model",
                rawName: "v-model",
                value: _vm.prgrm_length,
                expression: "prgrm_length"
              }
            ],
            staticClass: "prgrm_length",
            attrs: { type: "text", placeholder: "24", required: "" },
            domProps: { value: _vm.prgrm_length },
            on: {
              input: function($event) {
                if ($event.target.composing) {
                  return
                }
                _vm.prgrm_length = $event.target.value
              }
            }
          })
        ]),
        _vm._v(" "),
        _vm._m(3),
        _vm._v(" "),
        _c("div", { staticClass: "col-75" }, [
          _c("input", {
            directives: [
              {
                name: "model",
                rawName: "v-model",
                value: _vm.estimated_settlement,
                expression: "estimated_settlement"
              }
            ],
            staticClass: "estimated_settlement",
            attrs: { type: "text", placeholder: "5", required: "" },
            domProps: { value: _vm.estimated_settlement },
            on: {
              input: function($event) {
                if ($event.target.composing) {
                  return
                }
                _vm.estimated_settlement = $event.target.value
              }
            }
          })
        ]),
        _vm._v(" "),
        _vm._m(4),
        _vm._v(" "),
        _c("div", { staticClass: "col-75" }, [
          _c(
            "select",
            {
              directives: [
                {
                  name: "model",
                  rawName: "v-model",
                  value: _vm.frequeny,
                  expression: "frequeny"
                }
              ],
              staticClass: "frequeny",
              on: {
                change: function($event) {
                  var $$selectedVal = Array.prototype.filter
                    .call($event.target.options, function(o) {
                      return o.selected
                    })
                    .map(function(o) {
                      var val = "_value" in o ? o._value : o.value
                      return val
                    })
                  _vm.frequeny = $event.target.multiple
                    ? $$selectedVal
                    : $$selectedVal[0]
                }
              }
            },
            [
              _c("option", { attrs: { value: "1" } }, [_vm._v("Monthly")]),
              _vm._v(" "),
              _c("option", { attrs: { value: "2" } }, [_vm._v("Bi-Weekly")]),
              _vm._v(" "),
              _c("option", { attrs: { value: "4" } }, [_vm._v("Weekly")])
            ]
          )
        ]),
        _vm._v(" "),
        _c("h2", { staticClass: "heading" }, [_vm._v("Program Details")]),
        _vm._v(" "),
        _vm._m(5),
        _vm._v(" "),
        _c("div", { staticClass: "col-75" }, [
          _c("input", {
            directives: [
              {
                name: "model",
                rawName: "v-model",
                value: _vm.admin_fee,
                expression: "admin_fee"
              }
            ],
            staticClass: "admin_fee",
            attrs: { placeholder: "5", type: "text", required: "" },
            domProps: { value: _vm.admin_fee },
            on: {
              input: function($event) {
                if ($event.target.composing) {
                  return
                }
                _vm.admin_fee = $event.target.value
              }
            }
          })
        ]),
        _vm._v(" "),
        _vm._m(6),
        _vm._v(" "),
        _c("div", { staticClass: "col-75" }, [
          _c("input", {
            directives: [
              {
                name: "model",
                rawName: "v-model",
                value: _vm.service_fee,
                expression: "service_fee"
              }
            ],
            staticClass: "service_fee",
            attrs: { type: "text", placeholder: "5", required: "" },
            domProps: { value: _vm.service_fee },
            on: {
              input: function($event) {
                if ($event.target.composing) {
                  return
                }
                _vm.service_fee = $event.target.value
              }
            }
          })
        ]),
        _vm._v(" "),
        _vm.is_calculated
          ? _c("div", { staticClass: "mortgage_calculated" }, [
              _c("h2", { staticClass: "heading" }, [_vm._v("Cost")]),
              _vm._v(" "),
              _vm._m(7),
              _vm._v(" "),
              _c("div", { staticClass: "col-75" }, [
                _c("p", [_vm._v(_vm._s(_vm.total_cost.toFixed(2)))])
              ]),
              _vm._v(" "),
              _vm._m(8),
              _vm._v(" "),
              _c("div", { staticClass: "col-75" }, [
                _c("p", [_vm._v(_vm._s(_vm.estimated_saving.toFixed(2)))])
              ]),
              _vm._v(" "),
              _c("h2", { staticClass: "heading" }, [_vm._v("Payments")]),
              _vm._v(" "),
              _vm._m(9),
              _vm._v(" "),
              _c("div", { staticClass: "col-75" }, [
                _c("p", [_vm._v(_vm._s(_vm.if_monthly.toFixed(2)))])
              ]),
              _vm._v(" "),
              _vm._m(10),
              _vm._v(" "),
              _c("div", { staticClass: "col-75" }, [
                _c("p", [_vm._v(_vm._s(_vm.if_biweekly.toFixed(2)))])
              ]),
              _vm._v(" "),
              _vm._m(11),
              _vm._v(" "),
              _c("div", { staticClass: "col-75" }, [
                _c("p", [_vm._v(_vm._s(_vm.if_weekly.toFixed(2)))])
              ])
            ])
          : _vm._e(),
        _vm._v(" "),
        _c("center", [
          _c(
            "button",
            {
              staticClass: "mortgage_submit",
              on: {
                click: function($event) {
                  _vm.calculate_mortgage()
                }
              }
            },
            [_vm._v("Calculate")]
          )
        ])
      ],
      1
    ),
    _vm._v(" "),
    _vm.hasError
      ? _c("div", { staticClass: "error row" }, [_vm._m(12)])
      : _vm._e()
  ])
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("p", [
      _vm._v("Please enter value for all "),
      _c("sup", [_vm._v("(*)")]),
      _vm._v(" fields")
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "col-25" }, [
      _c("label", { attrs: { for: "debt" } }, [
        _vm._v("Total Debt"),
        _c("sup", [_vm._v("*")])
      ])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "col-25" }, [
      _c("label", { attrs: { for: "plm" } }, [
        _vm._v("Program Length in Month"),
        _c("sup", [_vm._v("*")])
      ])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "col-25" }, [
      _c("label", { attrs: { for: "debt" } }, [
        _vm._v("Estimated Settlement"),
        _c("sup", [_vm._v("*")])
      ])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "col-25" }, [
      _c("label", { attrs: { for: "debt" } }, [_vm._v("Frequency")])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "col-25" }, [
      _c("label", { attrs: { for: "debt" } }, [
        _vm._v("Admin Fee (%)"),
        _c("sup", [_vm._v("*")])
      ])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "col-25" }, [
      _c("label", { attrs: { for: "debt" } }, [
        _vm._v("Service Fee (%)"),
        _c("sup", [_vm._v("*")])
      ])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "col-25" }, [
      _c("label", { attrs: { for: "debt" } }, [_vm._v("Total Cost")])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "col-25" }, [
      _c("label", { attrs: { for: "debt" } }, [_vm._v("Estimated Saving")])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "col-25" }, [
      _c("label", { attrs: { for: "debt" } }, [_vm._v("If Monthly")])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "col-25" }, [
      _c("label", { attrs: { for: "debt" } }, [_vm._v("If Biweekly")])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "col-25" }, [
      _c("label", { attrs: { for: "debt" } }, [_vm._v("If Weekly")])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("p", [
      _vm._v("Please enter value for all "),
      _c("sup", [_vm._v("(*)")]),
      _vm._v(" fields")
    ])
  }
]
render._withStripped = true
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);
if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-hot-reload-api")      .rerender("data-v-c0d2ce64", esExports)
  }
}

/***/ }),
/* 22 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_Profile_vue__ = __webpack_require__(7);
/* empty harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_acdaf8ec_hasScoped_true_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_Profile_vue__ = __webpack_require__(24);
var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(23)
}
var normalizeComponent = __webpack_require__(0)
/* script */


/* template */

/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-acdaf8ec"
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_Profile_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_acdaf8ec_hasScoped_true_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_Profile_vue__["a" /* default */],
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "assets\\src\\frontend\\components\\Profile.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-acdaf8ec", Component.options)
  } else {
    hotAPI.reload("data-v-acdaf8ec", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

/* harmony default export */ __webpack_exports__["default"] = (Component.exports);


/***/ }),
/* 23 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 24 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("div", { staticClass: "profile" }, [
    _vm._v("\n    The Profile Page\n")
  ])
}
var staticRenderFns = []
render._withStripped = true
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);
if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-hot-reload-api")      .rerender("data-v-acdaf8ec", esExports)
  }
}

/***/ })
],[11]);