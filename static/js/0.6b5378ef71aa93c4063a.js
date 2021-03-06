webpackJsonp([0],{

/***/ 505:
/***/ (function(module, exports, __webpack_require__) {


/* styles */
__webpack_require__(670)

var Component = __webpack_require__(197)(
  /* script */
  __webpack_require__(545),
  /* template */
  __webpack_require__(630),
  /* scopeId */
  "data-v-14c0e3c5",
  /* cssModules */
  null
)

module.exports = Component.exports


/***/ }),

/***/ 544:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
//
//
//
//
//
//
//
//

/* harmony default export */ __webpack_exports__["default"] = ({
    data() {
        return {
            //     seltext:'',
            name: 'Emily'
        };
    },
    computed: {},
    methods: {}
});

/***/ }),

/***/ 545:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Header_vue__ = __webpack_require__(625);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Header_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__Header_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__Sidebar_vue__ = __webpack_require__(626);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__Sidebar_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__Sidebar_vue__);
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



/* harmony default export */ __webpack_exports__["default"] = ({
    components: {
        vHead: __WEBPACK_IMPORTED_MODULE_0__Header_vue___default.a, vSidebar: __WEBPACK_IMPORTED_MODULE_1__Sidebar_vue___default.a
    }
});

/***/ }),

/***/ 546:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
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

/* harmony default export */ __webpack_exports__["default"] = ({
    data() {
        return {
            screenWidth: document.body.clientWidth,
            timer: false,
            isCollapse: true,
            items: [{
                // icon: 'el-icon-menu',
                index: '1',
                title: '产品简介',
                subs: [{
                    index: 'home',
                    title: '产品概述'
                }, {
                    index: 'apiDescription',
                    title: '调用说明'
                    // {
                    //     index: 'basicConcept',
                    //     title: '基本概念'
                    // },
                    // {
                    //     index:'public_chain_solution',
                    //     title:'公有链解决方案'
                    // },
                    // {
                    //     index:'private_chain_solution',
                    //     title:'私有链解决方案'
                    // },
                    // {
                    //     index:'solution',
                    //     title:'行业解决方案'
                    // }
                }]
            }, {
                // icon: 'el-icon-menu',
                index: '3',
                title: '公链API参考',
                subs: [{
                    index: '5',
                    group: '授权',
                    // title: '授权',
                    subs: [{
                        index: 'tokenApply',
                        title: '请求授权'
                    }, {
                        index: 'tokenRefresh',
                        title: '刷新授权'
                    }]
                }, {
                    index: '6',
                    group: '合约',
                    subs: [{
                        index: 'complieContract',
                        title: '编译验证合约'
                    }, {
                        index: 'deployContract',
                        title: '部署合约'
                    }, {
                        index: 'invokeContract',
                        title: '调用合约'
                    }, {
                        index: 'getContractStatus',
                        title: '查询合约状态'
                    }]
                }, {
                    index: '7',
                    group: '账户',
                    subs: [{
                        index: 'account_add',
                        title: '账户创建'
                    }, {
                        index: 'account_list',
                        title: '账户集合'
                    }, {
                        index: 'account_balance',
                        title: '账户余额'
                    }]
                }, {

                    index: '8',
                    group: '区块',
                    subs: [{
                        index: 'block_detail',
                        title: '区块详情'
                    }, {
                        index: 'block_page',
                        title: '区块分页'
                    }, {
                        index: 'block_range',
                        title: '查询指定范围内的区块列表'
                    }, {
                        index: 'block_count',
                        title: '区块总数'
                    }]
                }, {
                    index: '9',
                    group: '交易',
                    subs: [{
                        index: 'transaction_count',
                        title: '查询交易总数'
                    }, {
                        index: 'transaction_receipt',
                        title: '查询交易回执'
                    }, {
                        index: 'transaction_detail',
                        title: '查询交易详情'
                    }, {
                        index: 'transaction_discard',
                        title: '查询指定时区间内的非法交易'
                    }, {
                        index: 'transaction_add',
                        title: '新增交易'
                    }, {
                        index: 'transaction_batch',
                        title: '批量交易'
                    }]
                }, {
                    index: '10',
                    group: '数据',
                    subs: [{
                        index: 'data_write',
                        title: '数据写入链中'
                    }, {
                        index: 'data_read',
                        title: '查询链中数据'
                    }]
                }, {
                    index: '11',
                    group: '错误码说明',
                    subs: [{
                        index: 'code_desc',
                        title: '错误码说明'
                    }]
                }]
            }, {
                // icon: 'el-icon-menu',
                index: 'log-history',
                title: '更新日志'
            }]
        };
    },
    mounted() {
        const that = this;
        if (parseInt(that.screenWidth) <= 768) {
            that.isCollapse = false;
        } else {
            that.isCollapse = true;
        }
        window.onresize = () => {
            return (() => {
                window.screenWidth = document.body.clientWidth;
                that.screenWidth = window.screenWidth;
            })();
        };
    },
    methods: {
        toggleList() {
            this.isCollapse = !this.isCollapse;
        }
    },
    computed: {
        onRoutes() {
            //this.isCollapse=!this.isCollapse;
            return this.$route.path.replace('/', '');
        }
    },
    watch: {
        screenWidth(val) {
            if (!this.timer) {
                this.screenWidth = val;
                this.timer = true;
                let that = this;
                setTimeout(function () {
                    // that.screenWidth = that.$store.state.canvasWidth
                    if (parseInt(that.screenWidth) <= 768) {
                        that.isCollapse = false;
                    } else {
                        that.isCollapse = true;
                    }
                    that.timer = false;
                }, 400);
            }
        }
    }
});

/***/ }),

/***/ 587:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(196)(false);
// imports


// module
exports.push([module.i, ".scrollbar[data-v-14c0e3c5]{overflow:scroll;height:100%}.container[data-v-14c0e3c5]{width:1140px;margin:0 auto;min-height:900px;margin-top:20px}.relative[data-v-14c0e3c5]{position:relative}.content[data-v-14c0e3c5]{width:1040px;padding-left:270px;padding-right:20px;padding-bottom:300px;margin:auto;box-sizing:border-box}@media (max-width:767px){.container[data-v-14c0e3c5]{width:100%}.content[data-v-14c0e3c5]{width:100%;padding-left:20px;padding-right:20px;padding-bottom:300px;box-sizing:border-box}}.container[data-v-14c0e3c5]::-webkit-scrollbar{width:2px;height:2px}.container[data-v-14c0e3c5]::-webkit-scrollbar-track-piece{background-color:rgba(0,0,0,.1);-webkit-border-radius:6px}.container[data-v-14c0e3c5]::-webkit-scrollbar-thumb:vertical{height:5px;background-color:hsla(0,0%,49%,.1);-webkit-border-radius:6px}.container[data-v-14c0e3c5]::-webkit-scrollbar-thumb:horizontal{width:5px;background-color:hsla(0,0%,49%,.1);-webkit-border-radius:6px}", ""]);

// exports


/***/ }),

/***/ 591:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(196)(false);
// imports


// module
exports.push([module.i, ".sidebardiv[data-v-2b29b166]{position:fixed;width:250px;top:90px;bottom:0;z-index:666;min-height:0;overflow:auto;background-color:#fff}.sidebar[data-v-2b29b166]{display:block;position:absolute;width:248px;left:0;top:0;z-index:3;overflow:scroll}.sidebar>ul[data-v-2b29b166]{height:100%}@media (max-width:767px){.sidebardiv[data-v-2b29b166]{height:85%;top:70px}.sidebar[data-v-2b29b166]{display:block;position:relative;left:0;top:0;bottom:0;verflow-y:auto;height:100%;font-size:10px;overflow-x:scroll;z-index:2}.sidebar-toggle[data-v-2b29b166]{width:100%}}.el-submenu .el-menu[data-v-2b29b166]{background-color:#fff!important}.container[data-v-2b29b166]::-webkit-scrollbar,.sidebardiv[data-v-2b29b166]::-webkit-scrollbar{width:2px;height:2px}.container[data-v-2b29b166]::-webkit-scrollbar-track-piece,.sidebardiv[data-v-2b29b166]::-webkit-scrollbar-track-piece{background-color:rgba(0,0,0,.1);-webkit-border-radius:6px}.container[data-v-2b29b166]::-webkit-scrollbar-thumb:vertical,.sidebardiv[data-v-2b29b166]::-webkit-scrollbar-thumb:vertical{height:5px;background-color:hsla(0,0%,49%,.1);-webkit-border-radius:6px}.container[data-v-2b29b166]::-webkit-scrollbar-thumb:horizontal,.sidebardiv[data-v-2b29b166]::-webkit-scrollbar-thumb:horizontal{width:5px;background-color:hsla(0,0%,49%,.1);-webkit-border-radius:6px}", ""]);

// exports


/***/ }),

/***/ 605:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(196)(false);
// imports


// module
exports.push([module.i, ".main[data-v-67788ef3]{width:100%;background:#393d49}.header[data-v-67788ef3]{position:relative;box-sizing:border-box;width:100%;height:70px;font-size:22px;line-height:70px;color:#fff;max-width:1140px;margin:0 auto}.header .logo img[data-v-67788ef3]{float:left;height:30px;margin-top:20px;text-align:center}.sel-info[data-v-67788ef3]{float:right;padding-right:50px;font-size:16px;color:#fff;border:0}@media (max-width:767px){.header[data-v-67788ef3]{height:50px;line-height:50px}.header .logo img[data-v-67788ef3]{margin-top:15px;height:20px;margin-left:10px}}", ""]);

// exports


/***/ }),

/***/ 624:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/img/logo.f4232cd.png";

/***/ }),

/***/ 625:
/***/ (function(module, exports, __webpack_require__) {


/* styles */
__webpack_require__(688)

var Component = __webpack_require__(197)(
  /* script */
  __webpack_require__(544),
  /* template */
  __webpack_require__(648),
  /* scopeId */
  "data-v-67788ef3",
  /* cssModules */
  null
)

module.exports = Component.exports


/***/ }),

/***/ 626:
/***/ (function(module, exports, __webpack_require__) {


/* styles */
__webpack_require__(674)

var Component = __webpack_require__(197)(
  /* script */
  __webpack_require__(546),
  /* template */
  __webpack_require__(634),
  /* scopeId */
  "data-v-2b29b166",
  /* cssModules */
  null
)

module.exports = Component.exports


/***/ }),

/***/ 630:
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "wrapper"
  }, [_c('v-head'), _vm._v(" "), _c('div', {
    staticClass: "container scrollbar"
  }, [_c('div', {
    staticClass: "relative"
  }, [_c('v-sidebar'), _vm._v(" "), _c('div', {
    staticClass: "content"
  }, [_c('transition', {
    attrs: {
      "name": "move",
      "mode": "out-in"
    }
  }, [_c('router-view')], 1)], 1)], 1)])], 1)
},staticRenderFns: []}

/***/ }),

/***/ 634:
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', [_c('div', {
    directives: [{
      name: "show",
      rawName: "v-show",
      value: (_vm.isCollapse),
      expression: "isCollapse"
    }],
    staticClass: "sidebardiv"
  }, [_c('div', {
    staticClass: "sidebar"
  }, [_c('el-menu', {
    staticClass: "el-menu-vertical-demo",
    attrs: {
      "default-active": _vm.onRoutes,
      "collapse": "true",
      "router": ""
    }
  }, [_vm._l((_vm.items), function(item) {
    return [(item.subs) ? [_c('el-submenu', {
      staticClass: "one",
      attrs: {
        "index": item.index
      }
    }, [_c('template', {
      slot: "title"
    }, [_c('i', {
      class: item.icon
    }), _vm._v(_vm._s(item.title))]), _vm._v(" "), _vm._l((item.subs), function(subItem) {
      return [(subItem.group) ? _c('el-submenu', {
        staticClass: "two",
        attrs: {
          "index": subItem.index
        }
      }, [_c('span', {
        attrs: {
          "slot": "title"
        },
        slot: "title"
      }, [_vm._v(_vm._s(subItem.group))]), _vm._v(" "), _vm._l((subItem.subs), function(index) {
        return _c('el-menu-item', {
          attrs: {
            "index": index.index
          }
        }, [_vm._v(_vm._s(index.title))])
      })], 2) : _c('el-menu-item', {
        attrs: {
          "index": subItem.index
        }
      }, [_vm._v(_vm._s(subItem.title) + "\n                            ")])]
    })], 2)] : [_c('el-menu-item', {
      attrs: {
        "index": item.index
      }
    }, [_c('i', {
      class: item.icon
    }), _vm._v(_vm._s(item.title) + "\n                    ")])]]
  })], 2)], 1)]), _vm._v(" "), _c('button', {
    staticClass: "sidebar-toggle",
    on: {
      "click": _vm.toggleList
    }
  }, [_c('el-col', {
    staticClass: "sidebar-toggle-button"
  }, [_c('span'), _vm._v(" "), _c('span'), _vm._v(" "), _c('span')])], 1)])
},staticRenderFns: []}

/***/ }),

/***/ 648:
/***/ (function(module, exports, __webpack_require__) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _vm._m(0)
},staticRenderFns: [function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "main"
  }, [_c('div', {
    staticClass: "header"
  }, [_c('div', {
    staticClass: "logo"
  }, [_c('img', {
    attrs: {
      "src": __webpack_require__(624)
    }
  })]), _vm._v(" "), _c('div', {
    staticClass: "sel-info"
  })])])
}]}

/***/ }),

/***/ 670:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(587);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(198)("0347d9c3", content, true);

/***/ }),

/***/ 674:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(591);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(198)("4b0f778c", content, true);

/***/ }),

/***/ 688:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(605);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(198)("97c70dae", content, true);

/***/ })

});