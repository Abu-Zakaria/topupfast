webpackJsonp([45],{

/***/ 183:
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(539)
}
var normalizeComponent = __webpack_require__(226)
/* script */
var __vue_script__ = __webpack_require__(541)
/* template */
var __vue_template__ = __webpack_require__(547)
/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __vue_script__,
  __vue_template__,
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "resources/js/Pages/User/Profile.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-b05f0a24", Component.options)
  } else {
    hotAPI.reload("data-v-b05f0a24", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),

/***/ 226:
/***/ (function(module, exports) {

/* globals __VUE_SSR_CONTEXT__ */

// IMPORTANT: Do NOT use ES2015 features in this file.
// This module is a runtime utility for cleaner component module output and will
// be included in the final webpack user bundle.

module.exports = function normalizeComponent (
  rawScriptExports,
  compiledTemplate,
  functionalTemplate,
  injectStyles,
  scopeId,
  moduleIdentifier /* server only */
) {
  var esModule
  var scriptExports = rawScriptExports = rawScriptExports || {}

  // ES6 modules interop
  var type = typeof rawScriptExports.default
  if (type === 'object' || type === 'function') {
    esModule = rawScriptExports
    scriptExports = rawScriptExports.default
  }

  // Vue.extend constructor export interop
  var options = typeof scriptExports === 'function'
    ? scriptExports.options
    : scriptExports

  // render functions
  if (compiledTemplate) {
    options.render = compiledTemplate.render
    options.staticRenderFns = compiledTemplate.staticRenderFns
    options._compiled = true
  }

  // functional template
  if (functionalTemplate) {
    options.functional = true
  }

  // scopedId
  if (scopeId) {
    options._scopeId = scopeId
  }

  var hook
  if (moduleIdentifier) { // server build
    hook = function (context) {
      // 2.3 injection
      context =
        context || // cached call
        (this.$vnode && this.$vnode.ssrContext) || // stateful
        (this.parent && this.parent.$vnode && this.parent.$vnode.ssrContext) // functional
      // 2.2 with runInNewContext: true
      if (!context && typeof __VUE_SSR_CONTEXT__ !== 'undefined') {
        context = __VUE_SSR_CONTEXT__
      }
      // inject component styles
      if (injectStyles) {
        injectStyles.call(this, context)
      }
      // register component module identifier for async chunk inferrence
      if (context && context._registeredComponents) {
        context._registeredComponents.add(moduleIdentifier)
      }
    }
    // used by ssr in case component is cached and beforeCreate
    // never gets called
    options._ssrRegister = hook
  } else if (injectStyles) {
    hook = injectStyles
  }

  if (hook) {
    var functional = options.functional
    var existing = functional
      ? options.render
      : options.beforeCreate

    if (!functional) {
      // inject component registration as beforeCreate hook
      options.beforeCreate = existing
        ? [].concat(existing, hook)
        : [hook]
    } else {
      // for template-only hot-reload because in that case the render fn doesn't
      // go through the normalizer
      options._injectStyles = hook
      // register for functioal component in vue file
      options.render = function renderWithStyleInjection (h, context) {
        hook.call(context)
        return existing(h, context)
      }
    }
  }

  return {
    esModule: esModule,
    exports: scriptExports,
    options: options
  }
}


/***/ }),

/***/ 227:
/***/ (function(module, exports, __webpack_require__) {

/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
  Modified by Evan You @yyx990803
*/

var hasDocument = typeof document !== 'undefined'

if (typeof DEBUG !== 'undefined' && DEBUG) {
  if (!hasDocument) {
    throw new Error(
    'vue-style-loader cannot be used in a non-browser environment. ' +
    "Use { target: 'node' } in your Webpack config to indicate a server-rendering environment."
  ) }
}

var listToStyles = __webpack_require__(228)

/*
type StyleObject = {
  id: number;
  parts: Array<StyleObjectPart>
}

type StyleObjectPart = {
  css: string;
  media: string;
  sourceMap: ?string
}
*/

var stylesInDom = {/*
  [id: number]: {
    id: number,
    refs: number,
    parts: Array<(obj?: StyleObjectPart) => void>
  }
*/}

var head = hasDocument && (document.head || document.getElementsByTagName('head')[0])
var singletonElement = null
var singletonCounter = 0
var isProduction = false
var noop = function () {}
var options = null
var ssrIdKey = 'data-vue-ssr-id'

// Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
// tags it will allow on a page
var isOldIE = typeof navigator !== 'undefined' && /msie [6-9]\b/.test(navigator.userAgent.toLowerCase())

module.exports = function (parentId, list, _isProduction, _options) {
  isProduction = _isProduction

  options = _options || {}

  var styles = listToStyles(parentId, list)
  addStylesToDom(styles)

  return function update (newList) {
    var mayRemove = []
    for (var i = 0; i < styles.length; i++) {
      var item = styles[i]
      var domStyle = stylesInDom[item.id]
      domStyle.refs--
      mayRemove.push(domStyle)
    }
    if (newList) {
      styles = listToStyles(parentId, newList)
      addStylesToDom(styles)
    } else {
      styles = []
    }
    for (var i = 0; i < mayRemove.length; i++) {
      var domStyle = mayRemove[i]
      if (domStyle.refs === 0) {
        for (var j = 0; j < domStyle.parts.length; j++) {
          domStyle.parts[j]()
        }
        delete stylesInDom[domStyle.id]
      }
    }
  }
}

function addStylesToDom (styles /* Array<StyleObject> */) {
  for (var i = 0; i < styles.length; i++) {
    var item = styles[i]
    var domStyle = stylesInDom[item.id]
    if (domStyle) {
      domStyle.refs++
      for (var j = 0; j < domStyle.parts.length; j++) {
        domStyle.parts[j](item.parts[j])
      }
      for (; j < item.parts.length; j++) {
        domStyle.parts.push(addStyle(item.parts[j]))
      }
      if (domStyle.parts.length > item.parts.length) {
        domStyle.parts.length = item.parts.length
      }
    } else {
      var parts = []
      for (var j = 0; j < item.parts.length; j++) {
        parts.push(addStyle(item.parts[j]))
      }
      stylesInDom[item.id] = { id: item.id, refs: 1, parts: parts }
    }
  }
}

function createStyleElement () {
  var styleElement = document.createElement('style')
  styleElement.type = 'text/css'
  head.appendChild(styleElement)
  return styleElement
}

function addStyle (obj /* StyleObjectPart */) {
  var update, remove
  var styleElement = document.querySelector('style[' + ssrIdKey + '~="' + obj.id + '"]')

  if (styleElement) {
    if (isProduction) {
      // has SSR styles and in production mode.
      // simply do nothing.
      return noop
    } else {
      // has SSR styles but in dev mode.
      // for some reason Chrome can't handle source map in server-rendered
      // style tags - source maps in <style> only works if the style tag is
      // created and inserted dynamically. So we remove the server rendered
      // styles and inject new ones.
      styleElement.parentNode.removeChild(styleElement)
    }
  }

  if (isOldIE) {
    // use singleton mode for IE9.
    var styleIndex = singletonCounter++
    styleElement = singletonElement || (singletonElement = createStyleElement())
    update = applyToSingletonTag.bind(null, styleElement, styleIndex, false)
    remove = applyToSingletonTag.bind(null, styleElement, styleIndex, true)
  } else {
    // use multi-style-tag mode in all other cases
    styleElement = createStyleElement()
    update = applyToTag.bind(null, styleElement)
    remove = function () {
      styleElement.parentNode.removeChild(styleElement)
    }
  }

  update(obj)

  return function updateStyle (newObj /* StyleObjectPart */) {
    if (newObj) {
      if (newObj.css === obj.css &&
          newObj.media === obj.media &&
          newObj.sourceMap === obj.sourceMap) {
        return
      }
      update(obj = newObj)
    } else {
      remove()
    }
  }
}

var replaceText = (function () {
  var textStore = []

  return function (index, replacement) {
    textStore[index] = replacement
    return textStore.filter(Boolean).join('\n')
  }
})()

function applyToSingletonTag (styleElement, index, remove, obj) {
  var css = remove ? '' : obj.css

  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = replaceText(index, css)
  } else {
    var cssNode = document.createTextNode(css)
    var childNodes = styleElement.childNodes
    if (childNodes[index]) styleElement.removeChild(childNodes[index])
    if (childNodes.length) {
      styleElement.insertBefore(cssNode, childNodes[index])
    } else {
      styleElement.appendChild(cssNode)
    }
  }
}

function applyToTag (styleElement, obj) {
  var css = obj.css
  var media = obj.media
  var sourceMap = obj.sourceMap

  if (media) {
    styleElement.setAttribute('media', media)
  }
  if (options.ssrId) {
    styleElement.setAttribute(ssrIdKey, obj.id)
  }

  if (sourceMap) {
    // https://developer.chrome.com/devtools/docs/javascript-debugging
    // this makes source maps inside style tags work properly in Chrome
    css += '\n/*# sourceURL=' + sourceMap.sources[0] + ' */'
    // http://stackoverflow.com/a/26603875
    css += '\n/*# sourceMappingURL=data:application/json;base64,' + btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))) + ' */'
  }

  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild)
    }
    styleElement.appendChild(document.createTextNode(css))
  }
}


/***/ }),

/***/ 228:
/***/ (function(module, exports) {

/**
 * Translates the list format produced by css-loader into something
 * easier to manipulate.
 */
module.exports = function listToStyles (parentId, list) {
  var styles = []
  var newStyles = {}
  for (var i = 0; i < list.length; i++) {
    var item = list[i]
    var id = item[0]
    var css = item[1]
    var media = item[2]
    var sourceMap = item[3]
    var part = {
      id: parentId + ':' + i,
      css: css,
      media: media,
      sourceMap: sourceMap
    }
    if (!newStyles[id]) {
      styles.push(newStyles[id] = { id: id, parts: [part] })
    } else {
      newStyles[id].parts.push(part)
    }
  }
  return styles
}


/***/ }),

/***/ 229:
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(230)
}
var normalizeComponent = __webpack_require__(226)
/* script */
var __vue_script__ = __webpack_require__(232)
/* template */
var __vue_template__ = __webpack_require__(233)
/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __vue_script__,
  __vue_template__,
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "resources/js/Shared/AppFooter.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-47d87520", Component.options)
  } else {
    hotAPI.reload("data-v-47d87520", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),

/***/ 230:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(231);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(227)("03a0949b", content, false, {});
// Hot Module Replacement
if(false) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept("!!../../../node_modules/css-loader/index.js!../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-47d87520\",\"scoped\":false,\"hasInlineConfig\":true}!../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./AppFooter.vue", function() {
     var newContent = require("!!../../../node_modules/css-loader/index.js!../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-47d87520\",\"scoped\":false,\"hasInlineConfig\":true}!../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./AppFooter.vue");
     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ 231:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(148)(false);
// imports


// module
exports.push([module.i, "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", ""]);

// exports


/***/ }),

/***/ 232:
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
/* harmony default export */ __webpack_exports__["default"] = ({
  name: "AppFooter"
});

/***/ }),

/***/ 233:
/***/ (function(module, exports, __webpack_require__) {

var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("div", [
    _vm.$page.configData.mainLayoutType == "horizontal"
      ? _c("footer", {
          staticClass: "footer footer-light navbar-shadow",
          class: _vm.$page.configData.footerType
        })
      : _c(
          "footer",
          {
            staticClass: "footer footer-light",
            class: _vm.$page.configData.footerType
          },
          [_vm._m(0)]
        )
  ])
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("p", { staticClass: "clearfix blue-grey lighten-2 mb-0" }, [
      _c(
        "span",
        { staticClass: "float-md-left d-block d-md-inline-block mt-25" },
        [
          _vm._v("COPYRIGHT © 2019\r\n\t\t\t\t"),
          _c(
            "a",
            {
              staticClass: "text-bold-800 grey darken-2",
              attrs: { href: "http://teammahal.info/", target: "_blank" }
            },
            [_vm._v("Team Mahal,")]
          ),
          _vm._v("\r\n\t\t\t\tAll rights Reserved\r\n\t\t\t")
        ]
      ),
      _vm._v(" "),
      _c("span", { staticClass: "float-md-right d-none d-md-block" }, [
        _vm._v("Hand-crafted & Made with"),
        _c("i", { staticClass: "feather icon-heart pink" })
      ]),
      _vm._v(" "),
      _c(
        "button",
        {
          staticClass: "btn btn-primary btn-icon scroll-top",
          attrs: { type: "button" }
        },
        [_c("i", { staticClass: "feather icon-arrow-up" })]
      )
    ])
  }
]
render._withStripped = true
module.exports = { render: render, staticRenderFns: staticRenderFns }
if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-hot-reload-api")      .rerender("data-v-47d87520", module.exports)
  }
}

/***/ }),

/***/ 234:
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(235)
}
var normalizeComponent = __webpack_require__(226)
/* script */
var __vue_script__ = __webpack_require__(237)
/* template */
var __vue_template__ = __webpack_require__(251)
/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __vue_script__,
  __vue_template__,
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "resources/js/Shared/Layout.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-6bf30086", Component.options)
  } else {
    hotAPI.reload("data-v-6bf30086", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),

/***/ 235:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(236);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(227)("24565851", content, false, {});
// Hot Module Replacement
if(false) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept("!!../../../node_modules/css-loader/index.js!../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-6bf30086\",\"scoped\":false,\"hasInlineConfig\":true}!../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./Layout.vue", function() {
     var newContent = require("!!../../../node_modules/css-loader/index.js!../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-6bf30086\",\"scoped\":false,\"hasInlineConfig\":true}!../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./Layout.vue");
     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ 236:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(148)(false);
// imports


// module
exports.push([module.i, "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", ""]);

// exports


/***/ }),

/***/ 237:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Sidebar__ = __webpack_require__(238);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Sidebar___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__Sidebar__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__Navbar__ = __webpack_require__(243);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__Navbar___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__Navbar__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__AppFooter__ = __webpack_require__(229);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__AppFooter___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2__AppFooter__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__Breadcrumb__ = __webpack_require__(246);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__Breadcrumb___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3__Breadcrumb__);
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




/* harmony default export */ __webpack_exports__["default"] = ({
  name: "Layout",
  components: {
    Breadcrumb: __WEBPACK_IMPORTED_MODULE_3__Breadcrumb___default.a,
    AppFooter: __WEBPACK_IMPORTED_MODULE_2__AppFooter___default.a,
    Navbar: __WEBPACK_IMPORTED_MODULE_1__Navbar___default.a,
    Sidebar: __WEBPACK_IMPORTED_MODULE_0__Sidebar___default.a
  },
  created: function created() {},
  methods: {
    url: function url() {
      return location.pathname.substr(1);
    },
    hideDropdownMenus: function hideDropdownMenus() {
      this.showUserMenu = false;
    }
  }
});

/***/ }),

/***/ 238:
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(239)
}
var normalizeComponent = __webpack_require__(226)
/* script */
var __vue_script__ = __webpack_require__(241)
/* template */
var __vue_template__ = __webpack_require__(242)
/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __vue_script__,
  __vue_template__,
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "resources/js/Shared/Sidebar.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-f6a89ea0", Component.options)
  } else {
    hotAPI.reload("data-v-f6a89ea0", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),

/***/ 239:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(240);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(227)("880366ac", content, false, {});
// Hot Module Replacement
if(false) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept("!!../../../node_modules/css-loader/index.js!../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-f6a89ea0\",\"scoped\":false,\"hasInlineConfig\":true}!../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./Sidebar.vue", function() {
     var newContent = require("!!../../../node_modules/css-loader/index.js!../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-f6a89ea0\",\"scoped\":false,\"hasInlineConfig\":true}!../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./Sidebar.vue");
     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ 240:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(148)(false);
// imports


// module
exports.push([module.i, "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", ""]);

// exports


/***/ }),

/***/ 241:
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
  name: "Sidebar",
  props: {
    url: String
  },
  methods: {
    isUrl: function isUrl() {
      var _this = this;

      for (var _len = arguments.length, urls = new Array(_len), _key = 0; _key < _len; _key++) {
        urls[_key] = arguments[_key];
      }

      if (urls[0] === '') {
        return this.url === '';
      }

      return urls.filter(function (url) {
        return _this.url.startsWith(url);
      }).length;
    }
  }
});

/***/ }),

/***/ 242:
/***/ (function(module, exports, __webpack_require__) {

var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    {
      staticClass: "main-menu menu-accordion menu-shadow",
      class:
        _vm.$page.configData.menuType +
        " " +
        [_vm.$page.configData.theme === "light" ? "menu-light" : "menu-dark"],
      attrs: { "data-scroll-to-active": "true" }
    },
    [
      _c("div", { staticClass: "navbar-header" }, [
        _c(
          "ul",
          {
            staticClass: "nav navbar-nav flex-row",
            staticStyle: {
              "background-image": "url(/images/logo/logo.png)",
              "background-size": "contain",
              "background-repeat": "no-repeat"
            }
          },
          [
            _c(
              "li",
              { staticClass: "nav-item mr-auto" },
              [
                _c("inertia-link", {
                  staticClass: "navbar-brand",
                  attrs: { href: "/dashboard" }
                })
              ],
              1
            ),
            _vm._v(" "),
            _vm._m(0)
          ]
        )
      ]),
      _vm._v(" "),
      _c("div", { staticClass: "shadow-bottom" }),
      _vm._v(" "),
      _c("div", { staticClass: "main-menu-content" }, [
        _c(
          "ul",
          {
            staticClass: "navigation navigation-main",
            attrs: {
              id: "main-menu-navigation",
              "data-menu": "menu-navigation"
            }
          },
          [
            _c(
              "li",
              { staticClass: "nav-item" },
              [
                _c("inertia-link", { attrs: { href: "/" } }, [
                  _c("i", { staticClass: "feather icon-home" }),
                  _vm._v(" "),
                  _c(
                    "span",
                    { staticClass: "menu-title", attrs: { "data-i18n": "" } },
                    [_vm._v(_vm._s(_vm.__("Dashboard")))]
                  )
                ])
              ],
              1
            ),
            _vm._v(" "),
            _c(
              "li",
              { staticClass: "nav-item" },
              [
                _c(
                  "inertia-link",
                  {
                    class: _vm.isUrl("brand") ? "active" : "",
                    attrs: { href: _vm.route("brand.index") }
                  },
                  [
                    _c("i", { staticClass: "feather icon-home" }),
                    _vm._v(" "),
                    _c(
                      "span",
                      {
                        staticClass: "menu-title nav-link-text",
                        attrs: { "data-i18n": "" }
                      },
                      [_vm._v(_vm._s(_vm.__("Brand")))]
                    )
                  ]
                )
              ],
              1
            ),
            _vm._v(" "),
            _c(
              "li",
              { staticClass: "nav-item" },
              [
                _c(
                  "inertia-link",
                  {
                    class: _vm.isUrl("category") ? "active" : "",
                    attrs: { href: _vm.route("category.index") }
                  },
                  [
                    _c("i", { staticClass: "feather icon-home" }),
                    _vm._v(" "),
                    _c(
                      "span",
                      {
                        staticClass: "menu-title nav-link-text",
                        attrs: { "data-i18n": "" }
                      },
                      [_vm._v(_vm._s(_vm.__("Category")))]
                    )
                  ]
                )
              ],
              1
            ),
            _vm._v(" "),
            _c(
              "li",
              { staticClass: "nav-item" },
              [
                _c(
                  "inertia-link",
                  {
                    class: _vm.isUrl("product") ? "active" : "",
                    attrs: { href: _vm.route("product.index") }
                  },
                  [
                    _c("i", { staticClass: "feather icon-home" }),
                    _vm._v(" "),
                    _c(
                      "span",
                      {
                        staticClass: "menu-title nav-link-text",
                        attrs: { "data-i18n": "" }
                      },
                      [_vm._v(_vm._s(_vm.__("Product")))]
                    )
                  ]
                )
              ],
              1
            ),
            _vm._v(" "),
            _c(
              "li",
              { staticClass: "nav-item" },
              [
                _c(
                  "inertia-link",
                  {
                    class: _vm.isUrl("package") ? "active" : "",
                    attrs: { href: _vm.route("package.index") }
                  },
                  [
                    _c("i", { staticClass: "feather icon-home" }),
                    _vm._v(" "),
                    _c(
                      "span",
                      {
                        staticClass: "menu-title nav-link-text",
                        attrs: { "data-i18n": "" }
                      },
                      [_vm._v(_vm._s(_vm.__("Package")))]
                    )
                  ]
                )
              ],
              1
            ),
            _vm._v(" "),
            _c(
              "li",
              { staticClass: "nav-item" },
              [
                _c(
                  "inertia-link",
                  {
                    class: _vm.isUrl("paymentmethod") ? "active" : "",
                    attrs: { href: _vm.route("paymentmethod.index") }
                  },
                  [
                    _c("i", { staticClass: "feather icon-home" }),
                    _vm._v(" "),
                    _c(
                      "span",
                      {
                        staticClass: "menu-title nav-link-text",
                        attrs: { "data-i18n": "" }
                      },
                      [_vm._v(_vm._s(_vm.__("Payment Method")))]
                    )
                  ]
                )
              ],
              1
            ),
            _vm._v(" "),
            _c(
              "li",
              { staticClass: "nav-item" },
              [
                _c(
                  "inertia-link",
                  {
                    class: _vm.isUrl("banner") ? "active" : "",
                    attrs: { href: _vm.route("banner.index") }
                  },
                  [
                    _c("i", { staticClass: "feather icon-home" }),
                    _vm._v(" "),
                    _c(
                      "span",
                      {
                        staticClass: "menu-title nav-link-text",
                        attrs: { "data-i18n": "" }
                      },
                      [_vm._v(_vm._s(_vm.__("Banner")))]
                    )
                  ]
                )
              ],
              1
            ),
            _vm._v(" "),
            _c(
              "li",
              { staticClass: "nav-item" },
              [
                _c(
                  "inertia-link",
                  {
                    class: _vm.isUrl("transaction") ? "active" : "",
                    attrs: { href: _vm.route("transaction.index") }
                  },
                  [
                    _c("i", { staticClass: "feather icon-home" }),
                    _vm._v(" "),
                    _c(
                      "span",
                      {
                        staticClass: "menu-title nav-link-text",
                        attrs: { "data-i18n": "" }
                      },
                      [_vm._v(_vm._s(_vm.__("Transaction")))]
                    )
                  ]
                )
              ],
              1
            ),
            _vm._v(" "),
            _c(
              "li",
              { staticClass: "nav-item" },
              [
                _c(
                  "inertia-link",
                  {
                    class: _vm.isUrl("order") ? "active" : "",
                    attrs: { href: _vm.route("order.index") }
                  },
                  [
                    _c("i", { staticClass: "feather icon-home" }),
                    _vm._v(" "),
                    _c(
                      "span",
                      {
                        staticClass: "menu-title nav-link-text",
                        attrs: { "data-i18n": "" }
                      },
                      [_vm._v(_vm._s(_vm.__("Order")))]
                    )
                  ]
                )
              ],
              1
            ),
            _vm._v(" "),
            _c(
              "li",
              { staticClass: "nav-item" },
              [
                _c(
                  "inertia-link",
                  {
                    class: _vm.isUrl("user") ? "active" : "",
                    attrs: { href: _vm.route("users.index") }
                  },
                  [
                    _c("i", { staticClass: "feather icon-users" }),
                    _vm._v(" "),
                    _c(
                      "span",
                      { staticClass: "menu-title", attrs: { "data-i18n": "" } },
                      [_vm._v(_vm._s(_vm.__("Users")))]
                    )
                  ]
                )
              ],
              1
            ),
            _vm._v(" "),
            _c(
              "li",
              { staticClass: "nav-item" },
              [
                _c(
                  "inertia-link",
                  {
                    class: _vm.isUrl("notice") ? "active" : "",
                    attrs: { href: _vm.route("notice.index") }
                  },
                  [
                    _c("i", { staticClass: "feather icon-users" }),
                    _vm._v(" "),
                    _c(
                      "span",
                      { staticClass: "menu-title", attrs: { "data-i18n": "" } },
                      [_vm._v(_vm._s(_vm.__("Notice")))]
                    )
                  ]
                )
              ],
              1
            ),
            _vm._v(" "),
            _c("li", { staticClass: "nav-item" }, [
              _vm._m(1),
              _vm._v(" "),
              _c(
                "div",
                {
                  staticClass: "collapse show-test",
                  attrs: { id: "navbar-examples" }
                },
                [
                  _c("ul", { staticClass: "nav nav-sm flex-column" }, [
                    _c(
                      "li",
                      { staticClass: "nav-item" },
                      [
                        _c(
                          "inertia-link",
                          { attrs: { href: _vm.route("brand.index") } },
                          [
                            _c("i", { staticClass: "feather icon-brands" }),
                            _vm._v(" "),
                            _c(
                              "span",
                              {
                                staticClass: "menu-title",
                                attrs: { "data-i18n": "" }
                              },
                              [_vm._v(_vm._s(_vm.__("Brand")))]
                            )
                          ]
                        )
                      ],
                      1
                    ),
                    _vm._v(" "),
                    _c(
                      "li",
                      { staticClass: "nav-item" },
                      [
                        _c(
                          "inertia-link",
                          { attrs: { href: _vm.route("category.index") } },
                          [
                            _c("i", { staticClass: "feather icon-brands" }),
                            _vm._v(" "),
                            _c(
                              "span",
                              {
                                staticClass: "menu-title",
                                attrs: { "data-i18n": "" }
                              },
                              [_vm._v(_vm._s(_vm.__("Category")))]
                            )
                          ]
                        )
                      ],
                      1
                    )
                  ])
                ]
              )
            ]),
            _vm._v(" "),
            _vm.$can("subscription_access")
              ? _c(
                  "li",
                  { staticClass: "nav-item" },
                  [
                    _c(
                      "inertia-link",
                      { attrs: { href: _vm.route("subscriptions.index") } },
                      [
                        _c("i", { staticClass: "feather icon-users" }),
                        _vm._v(" "),
                        _c(
                          "span",
                          {
                            staticClass: "menu-title",
                            attrs: { "data-i18n": "" }
                          },
                          [_vm._v(_vm._s(_vm.__("Subscription")))]
                        )
                      ]
                    )
                  ],
                  1
                )
              : _vm._e(),
            _vm._v(" "),
            _vm._m(2),
            _vm._v(" "),
            _vm.$can("role_access")
              ? _c(
                  "li",
                  { staticClass: "nav-item" },
                  [
                    _c(
                      "inertia-link",
                      { attrs: { href: _vm.route("roles.index") } },
                      [
                        _c("i", { staticClass: "feather icon-unlock" }),
                        _vm._v(" "),
                        _c(
                          "span",
                          {
                            staticClass: "menu-title",
                            attrs: { "data-i18n": "" }
                          },
                          [_vm._v(_vm._s(_vm.__("Role")))]
                        )
                      ]
                    )
                  ],
                  1
                )
              : _vm._e(),
            _vm._v(" "),
            _vm.$can("permission_access")
              ? _c(
                  "li",
                  { staticClass: "nav-item" },
                  [
                    _c(
                      "inertia-link",
                      { attrs: { href: _vm.route("permissions.index") } },
                      [
                        _c("i", { staticClass: "feather icon-unlock" }),
                        _vm._v(" "),
                        _c(
                          "span",
                          {
                            staticClass: "menu-title",
                            attrs: { "data-i18n": "" }
                          },
                          [_vm._v(_vm._s(_vm.__("Permission")))]
                        )
                      ]
                    )
                  ],
                  1
                )
              : _vm._e(),
            _vm._v(" "),
            _vm.$can("gender_access")
              ? _c(
                  "li",
                  { staticClass: "nav-item" },
                  [
                    _c(
                      "inertia-link",
                      { attrs: { href: _vm.route("genders.index") } },
                      [
                        _c("i", { staticClass: "feather icon-unlock" }),
                        _vm._v(" "),
                        _c(
                          "span",
                          {
                            staticClass: "menu-title",
                            attrs: { "data-i18n": "" }
                          },
                          [_vm._v(_vm._s(_vm.__("Gender")))]
                        )
                      ]
                    )
                  ],
                  1
                )
              : _vm._e(),
            _vm._v(" "),
            _vm.$can("religion_access")
              ? _c(
                  "li",
                  { staticClass: "nav-item" },
                  [
                    _c(
                      "inertia-link",
                      { attrs: { href: _vm.route("religions.index") } },
                      [
                        _c("i", { staticClass: "feather icon-unlock" }),
                        _vm._v(" "),
                        _c(
                          "span",
                          {
                            staticClass: "menu-title",
                            attrs: { "data-i18n": "" }
                          },
                          [_vm._v(_vm._s(_vm.__("Religion")))]
                        )
                      ]
                    )
                  ],
                  1
                )
              : _vm._e(),
            _vm._v(" "),
            _vm.$can("blood_group_access")
              ? _c(
                  "li",
                  { staticClass: "nav-item" },
                  [
                    _c(
                      "inertia-link",
                      { attrs: { href: _vm.route("blood-groups.index") } },
                      [
                        _c("i", { staticClass: "feather icon-unlock" }),
                        _vm._v(" "),
                        _c(
                          "span",
                          {
                            staticClass: "menu-title",
                            attrs: { "data-i18n": "" }
                          },
                          [_vm._v(_vm._s(_vm.__("Blood Group")))]
                        )
                      ]
                    )
                  ],
                  1
                )
              : _vm._e(),
            _vm._v(" "),
            _vm._m(3),
            _vm._v(" "),
            _vm.$can("shop_access")
              ? _c(
                  "li",
                  { staticClass: "nav-item" },
                  [
                    _c(
                      "inertia-link",
                      { attrs: { href: _vm.route("shops.index") } },
                      [
                        _c("i", { staticClass: "feather icon-unlock" }),
                        _vm._v(" "),
                        _c(
                          "span",
                          {
                            staticClass: "menu-title",
                            attrs: { "data-i18n": "" }
                          },
                          [_vm._v(_vm._s(_vm.__("Shops")))]
                        )
                      ]
                    )
                  ],
                  1
                )
              : _vm._e(),
            _vm._v(" "),
            _vm._m(4),
            _vm._v(" "),
            _vm.$can("invoice_type_access")
              ? _c(
                  "li",
                  { staticClass: "nav-item" },
                  [
                    _c(
                      "inertia-link",
                      { attrs: { href: _vm.route("invoice-types.index") } },
                      [
                        _c("i", { staticClass: "feather icon-unlock" }),
                        _vm._v(" "),
                        _c(
                          "span",
                          {
                            staticClass: "menu-title",
                            attrs: { "data-i18n": "" }
                          },
                          [_vm._v(_vm._s(_vm.__("Invoice Types")))]
                        )
                      ]
                    )
                  ],
                  1
                )
              : _vm._e(),
            _vm._v(" "),
            _vm.$can("branch_access")
              ? _c(
                  "li",
                  { staticClass: "nav-item" },
                  [
                    _c(
                      "inertia-link",
                      { attrs: { href: _vm.route("shops.branches.index") } },
                      [
                        _c("i", { staticClass: "feather icon-unlock" }),
                        _vm._v(" "),
                        _c(
                          "span",
                          {
                            staticClass: "menu-title",
                            attrs: { "data-i18n": "" }
                          },
                          [_vm._v(_vm._s(_vm.__("Branchs")))]
                        )
                      ]
                    )
                  ],
                  1
                )
              : _vm._e(),
            _vm._v(" "),
            _vm.$can("customer_access")
              ? _c(
                  "li",
                  { staticClass: "nav-item" },
                  [
                    _c(
                      "inertia-link",
                      { attrs: { href: _vm.route("customers.index") } },
                      [
                        _c("i", { staticClass: "feather icon-unlock" }),
                        _vm._v(" "),
                        _c(
                          "span",
                          {
                            staticClass: "menu-title",
                            attrs: { "data-i18n": "" }
                          },
                          [_vm._v(_vm._s(_vm.__("Customers")))]
                        )
                      ]
                    )
                  ],
                  1
                )
              : _vm._e()
          ]
        )
      ])
    ]
  )
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("li", { staticClass: "nav-item nav-toggle" }, [
      _c(
        "a",
        {
          staticClass: "nav-link modern-nav-toggle pr-0",
          attrs: { "data-toggle": "collapse" }
        },
        [
          _c("i", {
            staticClass:
              "feather icon-x d-block d-xl-none font-medium-4 primary toggle-icon"
          }),
          _c("i", {
            staticClass:
              "toggle-icon feather icon-disc font-medium-4 d-none d-xl-block primary collapse-toggle-icon",
            attrs: { "data-ticon": "icon-disc" }
          })
        ]
      )
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c(
      "a",
      {
        staticClass: "nav-link",
        attrs: {
          href: "#navbar-examples",
          "data-toggle": "collapse",
          role: "button",
          "aria-expanded": "true",
          "aria-controls": "navbar-examples",
          "data-value": "navbar-examples"
        }
      },
      [
        _c("i", {
          staticClass: "feather icon-settings",
          staticStyle: { color: "#8B81F2" }
        }),
        _vm._v(" "),
        _c(
          "span",
          { staticClass: "nav-link-text", staticStyle: { color: "#8B81F2" } },
          [_vm._v("Setup")]
        )
      ]
    )
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("li", { staticClass: "navigation-header" }, [
      _c("span", [_vm._v("Settings")])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("li", { staticClass: "navigation-header" }, [
      _c("span", [_vm._v("Configration")])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("li", { staticClass: "navigation-header" }, [
      _c("span", [_vm._v("Setup")])
    ])
  }
]
render._withStripped = true
module.exports = { render: render, staticRenderFns: staticRenderFns }
if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-hot-reload-api")      .rerender("data-v-f6a89ea0", module.exports)
  }
}

/***/ }),

/***/ 243:
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
var normalizeComponent = __webpack_require__(226)
/* script */
var __vue_script__ = __webpack_require__(244)
/* template */
var __vue_template__ = __webpack_require__(245)
/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = null
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __vue_script__,
  __vue_template__,
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "resources/js/Shared/Navbar.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-4af43e6c", Component.options)
  } else {
    hotAPI.reload("data-v-4af43e6c", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),

/***/ 244:
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
/* harmony default export */ __webpack_exports__["default"] = ({
  name: "Navbar",
  methods: {
    logout: function logout() {
      this.$inertia.post(this.route('logout'));
    }
  }
});

/***/ }),

/***/ 245:
/***/ (function(module, exports, __webpack_require__) {

var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("div", [
    _vm.$page.configData.mainLayoutType == "horizontal"
      ? _c(
          "nav",
          {
            staticClass:
              "header-navbar navbar-expand-lg navbar navbar-with-menu navbar-fixed",
            class: _vm.$page.configData.navbarColor
          },
          [_vm._m(0)]
        )
      : _c(
          "nav",
          {
            staticClass:
              "header-navbar navbar-expand-lg navbar navbar-with-menu navbar-light navbar-shadow",
            class:
              _vm.$page.configData.navbarClass +
              " " +
              _vm.$page.configData.navbarColor
          },
          [
            _c("div", { staticClass: "navbar-wrapper" }, [
              _c("div", { staticClass: "navbar-container content" }, [
                _c(
                  "div",
                  {
                    staticClass: "navbar-collapse",
                    attrs: { id: "navbar-mobile" }
                  },
                  [
                    _c(
                      "div",
                      {
                        staticClass:
                          "mr-auto float-left bookmark-wrapper d-flex align-items-center"
                      },
                      [
                        _vm._m(1),
                        _vm._v(" "),
                        _c("ul", { staticClass: "nav navbar-nav" }, [
                          _vm.$page.app
                            ? _c(
                                "li",
                                {
                                  staticClass:
                                    "nav-item d-none d-lg-block app-title"
                                },
                                [
                                  _c("a", { staticClass: "bookmark-star" }, [
                                    _c("i", {
                                      staticClass:
                                        "ficon feather icon-star warning"
                                    }),
                                    _vm._v(
                                      " " +
                                        _vm._s(
                                          _vm.$page.app
                                            ? _vm.$page.app.name
                                            : ""
                                        )
                                    )
                                  ]),
                                  _vm._v(" "),
                                  _vm._m(2)
                                ]
                              )
                            : _vm._e()
                        ])
                      ]
                    ),
                    _vm._v(" "),
                    _c("ul", { staticClass: "nav navbar-nav float-right" }, [
                      _c(
                        "li",
                        { staticClass: "dropdown dropdown-language nav-item" },
                        [
                          _c(
                            "a",
                            {
                              staticClass: "dropdown-toggle nav-link",
                              attrs: {
                                id: "dropdown-flag",
                                href: "#",
                                "data-toggle": "dropdown",
                                "aria-haspopup": "true",
                                "aria-expanded": "false"
                              }
                            },
                            [
                              _c("span", { staticClass: "selected-language" }, [
                                _vm._v(_vm._s(_vm.currentLanguage()))
                              ])
                            ]
                          ),
                          _vm._v(" "),
                          _c(
                            "div",
                            {
                              staticClass: "dropdown-menu",
                              attrs: { "aria-labelledby": "dropdown-flag" }
                            },
                            [
                              _c(
                                "inertia-link",
                                {
                                  staticClass: "dropdown-item",
                                  attrs: {
                                    href: _vm.current() + "?lang=en",
                                    "data-language": "en"
                                  }
                                },
                                [_vm._v(" English")]
                              ),
                              _vm._v(" "),
                              _c(
                                "inertia-link",
                                {
                                  staticClass: "dropdown-item",
                                  attrs: {
                                    href: _vm.current() + "?lang=bn",
                                    "data-language": "bn"
                                  }
                                },
                                [_vm._v(" বাংলা")]
                              )
                            ],
                            1
                          )
                        ]
                      ),
                      _vm._v(" "),
                      _vm._m(3),
                      _vm._v(" "),
                      _vm._m(4),
                      _vm._v(" "),
                      _c(
                        "li",
                        { staticClass: "dropdown dropdown-user nav-item" },
                        [
                          _c(
                            "a",
                            {
                              staticClass:
                                "dropdown-toggle nav-link dropdown-user-link",
                              attrs: { href: "#", "data-toggle": "dropdown" }
                            },
                            [
                              _c(
                                "div",
                                { staticClass: "user-nav d-sm-flex d-none" },
                                [
                                  _c(
                                    "span",
                                    { staticClass: "user-name text-bold-600" },
                                    [_vm._v(_vm._s(_vm.$page.auth.name))]
                                  )
                                ]
                              ),
                              _vm._v(" "),
                              _vm._m(5)
                            ]
                          ),
                          _vm._v(" "),
                          _c(
                            "div",
                            {
                              staticClass: "dropdown-menu dropdown-menu-right"
                            },
                            [
                              _c(
                                "a",
                                {
                                  staticClass: "dropdown-item",
                                  attrs: {
                                    href: _vm.route(
                                      "users.show",
                                      _vm.$page.auth.slug
                                    )
                                  }
                                },
                                [
                                  _c("i", { staticClass: "feather icon-user" }),
                                  _vm._v(" Profile\r\n\t\t\t\t\t\t\t\t")
                                ]
                              ),
                              _vm._v(" "),
                              _c("div", { staticClass: "dropdown-divider" }),
                              _vm._v(" "),
                              _c(
                                "a",
                                {
                                  staticClass: "dropdown-item",
                                  on: { click: _vm.logout }
                                },
                                [
                                  _c("i", {
                                    staticClass: "feather icon-power"
                                  }),
                                  _vm._v(" Logout")
                                ]
                              )
                            ]
                          )
                        ]
                      )
                    ])
                  ]
                )
              ])
            ])
          ]
        )
  ])
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "navbar-header d-xl-block d-none" }, [
      _c("ul", { staticClass: "nav navbar-nav flex-row" }, [
        _c("li", { staticClass: "nav-item" }, [
          _c(
            "a",
            {
              staticClass: "navbar-brand",
              attrs: { href: "dashboard-analytics" }
            },
            [_c("div", { staticClass: "brand-logo" })]
          )
        ])
      ])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("ul", { staticClass: "nav navbar-nav" }, [
      _c("li", { staticClass: "nav-item mobile-menu d-xl-none mr-auto" }, [
        _c(
          "a",
          {
            staticClass: "nav-link nav-menu-main menu-toggle hidden-xs",
            attrs: { href: "#" }
          },
          [_c("i", { staticClass: "ficon feather icon-menu" })]
        )
      ])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "bookmark-input search-input" }, [
      _c("div", { staticClass: "bookmark-input-icon" }, [
        _c("i", { staticClass: "feather icon-search primary" })
      ]),
      _vm._v(" "),
      _c("input", {
        staticClass: "form-control input",
        attrs: {
          type: "text",
          placeholder: "Explore Vuexy...",
          tabindex: "0",
          "data-search": "laravel-starter-list"
        }
      }),
      _vm._v(" "),
      _c("ul", { staticClass: "search-list search-list-bookmark" })
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("li", { staticClass: "nav-item d-none d-lg-block" }, [
      _c("a", { staticClass: "nav-link nav-link-expand" }, [
        _c("i", { staticClass: "ficon feather icon-maximize" })
      ])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c(
      "li",
      { staticClass: "dropdown dropdown-notification nav-item" },
      [
        _c(
          "a",
          {
            staticClass: "nav-link nav-link-label",
            attrs: { href: "#", "data-toggle": "dropdown" }
          },
          [
            _c("i", { staticClass: "ficon feather icon-bell" }),
            _c(
              "span",
              { staticClass: "badge badge-pill badge-primary badge-up" },
              [_vm._v("5")]
            )
          ]
        ),
        _vm._v(" "),
        _c(
          "ul",
          {
            staticClass: "dropdown-menu dropdown-menu-media dropdown-menu-right"
          },
          [
            _c("li", { staticClass: "dropdown-menu-header" }, [
              _c("div", { staticClass: "dropdown-header m-0 p-2" }, [
                _c("h3", { staticClass: "white" }, [_vm._v("5 New")]),
                _c("span", { staticClass: "grey darken-2" }, [
                  _vm._v("App Notifications")
                ])
              ])
            ]),
            _vm._v(" "),
            _c("li", { staticClass: "scrollable-container media-list" }, [
              _c(
                "a",
                {
                  staticClass: "d-flex justify-content-between",
                  attrs: { href: "javascript:void(0)" }
                },
                [
                  _c("div", { staticClass: "media d-flex align-items-start" }, [
                    _c("div", { staticClass: "media-left" }, [
                      _c("i", {
                        staticClass:
                          "feather icon-download-cloud font-medium-5 success"
                      })
                    ]),
                    _vm._v(" "),
                    _c("div", { staticClass: "media-body" }, [
                      _c(
                        "h6",
                        { staticClass: "success media-heading red darken-1" },
                        [_vm._v("99% Server load")]
                      ),
                      _vm._v(" "),
                      _c("small", { staticClass: "notification-text" }, [
                        _vm._v("You got new order of goods.")
                      ])
                    ]),
                    _vm._v(" "),
                    _c("small", [
                      _c(
                        "time",
                        {
                          staticClass: "media-meta",
                          attrs: { datetime: "2015-06-11T18:29:20+08:00" }
                        },
                        [_vm._v("5 hour ago")]
                      )
                    ])
                  ])
                ]
              )
            ]),
            _vm._v(" "),
            _c("li", { staticClass: "dropdown-menu-footer" }, [
              _c(
                "a",
                {
                  staticClass: "dropdown-item p-1 text-center",
                  attrs: { href: "javascript:void(0)" }
                },
                [_vm._v("Read all notifications")]
              )
            ])
          ]
        )
      ]
    )
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("span", [
      _c("img", {
        staticClass: "round",
        attrs: {
          src: "/images/profile/user-uploads/user-09.jpg",
          alt: "avatar",
          height: "40",
          width: "40"
        }
      })
    ])
  }
]
render._withStripped = true
module.exports = { render: render, staticRenderFns: staticRenderFns }
if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-hot-reload-api")      .rerender("data-v-4af43e6c", module.exports)
  }
}

/***/ }),

/***/ 246:
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(247)
}
var normalizeComponent = __webpack_require__(226)
/* script */
var __vue_script__ = __webpack_require__(249)
/* template */
var __vue_template__ = __webpack_require__(250)
/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __vue_script__,
  __vue_template__,
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "resources/js/Shared/Breadcrumb.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-6984c242", Component.options)
  } else {
    hotAPI.reload("data-v-6984c242", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),

/***/ 247:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(248);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(227)("c3dd8234", content, false, {});
// Hot Module Replacement
if(false) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept("!!../../../node_modules/css-loader/index.js!../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-6984c242\",\"scoped\":false,\"hasInlineConfig\":true}!../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./Breadcrumb.vue", function() {
     var newContent = require("!!../../../node_modules/css-loader/index.js!../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-6984c242\",\"scoped\":false,\"hasInlineConfig\":true}!../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./Breadcrumb.vue");
     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ 248:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(148)(false);
// imports


// module
exports.push([module.i, "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", ""]);

// exports


/***/ }),

/***/ 249:
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
/* harmony default export */ __webpack_exports__["default"] = ({
  name: "Breadcrumb"
});

/***/ }),

/***/ 250:
/***/ (function(module, exports, __webpack_require__) {

var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("div", { staticClass: "content-header row" }, [
    _c("div", { staticClass: "content-header-left col-md-9 col-12 mb-2" }, [
      _c("div", { staticClass: "row breadcrumbs-top" }, [
        _c("div", { staticClass: "col-12" }, [
          _c("h2", { staticClass: "content-header-title float-left mb-0" }),
          _vm._v(" "),
          _c("div", { staticClass: "breadcrumb-wrapper col-12" }, [
            _vm.$page.breadcrumbs
              ? _c(
                  "ol",
                  { staticClass: "breadcrumb" },
                  _vm._l(_vm.$page.breadcrumbs, function(breadcrumb) {
                    return _c(
                      "li",
                      { staticClass: "breadcrumb-item" },
                      [
                        breadcrumb.link
                          ? _c(
                              "inertia-link",
                              { attrs: { href: breadcrumb.link } },
                              [
                                _vm._v(
                                  "\n                " +
                                    _vm._s(breadcrumb.name) +
                                    "\n              "
                                )
                              ]
                            )
                          : _c("span", [_vm._v(_vm._s(breadcrumb.name))])
                      ],
                      1
                    )
                  }),
                  0
                )
              : _vm._e()
          ])
        ])
      ])
    ]),
    _vm._v(" "),
    _vm.$page.has_modal
      ? _c(
          "div",
          {
            staticClass:
              "content-header-right text-md-right col-md-3 col-12 d-md-block d-none"
          },
          [_vm._m(0)]
        )
      : _vm._e()
  ])
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c(
      "button",
      {
        staticClass: "btn-icon waves-effect waves-light btn btn-primary btn-sm",
        attrs: {
          "data-toggle": "modal",
          "data-target": "#default",
          type: "button"
        }
      },
      [
        _c("i", { staticClass: "feather icon-plus-circle" }),
        _vm._v(" New\n    ")
      ]
    )
  }
]
render._withStripped = true
module.exports = { render: render, staticRenderFns: staticRenderFns }
if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-hot-reload-api")      .rerender("data-v-6984c242", module.exports)
  }
}

/***/ }),

/***/ 251:
/***/ (function(module, exports, __webpack_require__) {

var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    { attrs: { id: "app" } },
    [
      _c("sidebar", { attrs: { url: _vm.url() } }),
      _vm._v(" "),
      _c(
        "div",
        { staticClass: "app-content content" },
        [
          _c("div", { staticClass: "content-overlay" }),
          _vm._v(" "),
          _c("div", { staticClass: "header-navbar-shadow" }),
          _vm._v(" "),
          _c("navbar"),
          _vm._v(" "),
          _vm.$page.configData.contentLayout
            ? _c("div", { staticClass: "content-area-wrapper" }, [
                _c(
                  "div",
                  { class: _vm.$page.configData.sidebarPositionClass },
                  [
                    _c(
                      "div",
                      { staticClass: "sidebar" },
                      [_vm._t("default")],
                      2
                    )
                  ]
                ),
                _vm._v(" "),
                _c("div", { class: _vm.$page.configData.contentsidebarClass }, [
                  _c("div", { staticClass: "content-wrapper" }, [
                    _c(
                      "div",
                      { staticClass: "content-body" },
                      [_vm._t("default")],
                      2
                    )
                  ])
                ])
              ])
            : _c("div", { staticClass: "content-wrapper" }, [
                _vm.$page.configData.pageHeader == true
                  ? _c("div", [_c("breadcrumb")], 1)
                  : _vm._e(),
                _vm._v(" "),
                _c(
                  "div",
                  { staticClass: "content-body" },
                  [_vm._t("default")],
                  2
                )
              ])
        ],
        1
      ),
      _vm._v(" "),
      _c("div", { staticClass: "sidenav-overlay" }),
      _vm._v(" "),
      _c("div", { staticClass: "drag-target" }),
      _vm._v(" "),
      _c("app-footer")
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true
module.exports = { render: render, staticRenderFns: staticRenderFns }
if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-hot-reload-api")      .rerender("data-v-6bf30086", module.exports)
  }
}

/***/ }),

/***/ 539:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(540);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(227)("451780a7", content, false, {});
// Hot Module Replacement
if(false) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept("!!../../../../node_modules/css-loader/index.js!../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-b05f0a24\",\"scoped\":false,\"hasInlineConfig\":true}!../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./Profile.vue", function() {
     var newContent = require("!!../../../../node_modules/css-loader/index.js!../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-b05f0a24\",\"scoped\":false,\"hasInlineConfig\":true}!../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./Profile.vue");
     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ 540:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(148)(false);
// imports


// module
exports.push([module.i, "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", ""]);

// exports


/***/ }),

/***/ 541:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Shared_Layout__ = __webpack_require__(234);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Shared_Layout___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__Shared_Layout__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__Components_Alert__ = __webpack_require__(542);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__Components_Alert___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__Components_Alert__);
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
  name: "UserProfile",
  components: {
    Alert: __WEBPACK_IMPORTED_MODULE_1__Components_Alert___default.a,
    Layout: __WEBPACK_IMPORTED_MODULE_0__Shared_Layout___default.a
  },
  props: {
    user: Object,
    genders: Array,
    religions: Array,
    errors: Object,
    success: String
  },
  data: function data() {
    return {
      avatar: null,
      form: {
        password: "",
        password_confirmation: ""
      }
    };
  },
  methods: {
    updatePassword: function updatePassword() {
      var self = this;
      this.$inertia.post(this.route("users.password.update", this.user.id), {
        password: this.form.password,
        password_confirmation: this.form.password_confirmation
      }).then(function (response) {
        self.form.password = "";
        self.form.password_confirmation = "";
      });
    },
    update: function update() {
      this.$inertia.post(this.route("users.profile.account.update", this.user.id), {
        name: this.user.name,
        phone: this.user.phone,
        email: this.user.email,
        gender_id: this.user.gender_id,
        religion_id: this.user.religion_id,
        birth_date: this.user.birth_date
      });
    },
    showImage: function showImage(e) {
      var file = e.target.files[0];
      var url = URL.createObjectURL(file);
      $("#avatar").attr("src", url);
      this.avatar = file;
    },
    uploadImage: function uploadImage() {
      if (this.avatar !== null) {
        var formData = new FormData();
        formData.append("avatar", this.avatar);
        this.$inertia.post(this.route("users.profile.avatar.update", this.user.id), formData);
      }
    }
  }
});

/***/ }),

/***/ 542:
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(543)
}
var normalizeComponent = __webpack_require__(226)
/* script */
var __vue_script__ = __webpack_require__(545)
/* template */
var __vue_template__ = __webpack_require__(546)
/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __vue_script__,
  __vue_template__,
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "resources/js/Components/Alert.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-f21dafbe", Component.options)
  } else {
    hotAPI.reload("data-v-f21dafbe", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),

/***/ 543:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(544);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(227)("c04d2140", content, false, {});
// Hot Module Replacement
if(false) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept("!!../../../node_modules/css-loader/index.js!../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-f21dafbe\",\"scoped\":false,\"hasInlineConfig\":true}!../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./Alert.vue", function() {
     var newContent = require("!!../../../node_modules/css-loader/index.js!../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-f21dafbe\",\"scoped\":false,\"hasInlineConfig\":true}!../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./Alert.vue");
     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ 544:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(148)(false);
// imports


// module
exports.push([module.i, "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", ""]);

// exports


/***/ }),

/***/ 545:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
//
//
//
//
//
//
/* harmony default export */ __webpack_exports__["default"] = ({
  name: "Alert",
  props: {
    alertClass: {
      type: String,
      "default": 'alert-primary',
      required: false
    }
  }
});

/***/ }),

/***/ 546:
/***/ (function(module, exports, __webpack_require__) {

var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    {
      staticClass: "alert alert-dismissible fade show",
      class: _vm.alertClass,
      attrs: { role: "alert" }
    },
    [_vm._t("default")],
    2
  )
}
var staticRenderFns = []
render._withStripped = true
module.exports = { render: render, staticRenderFns: staticRenderFns }
if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-hot-reload-api")      .rerender("data-v-f21dafbe", module.exports)
  }
}

/***/ }),

/***/ 547:
/***/ (function(module, exports, __webpack_require__) {

var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("layout", { attrs: { name: "UserProfile" } }, [
    _c("section", { staticClass: "users-list-wrapper" }, [
      _c("div", { attrs: { id: "basic-examples" } }, [
        _c("div", { staticClass: "card" }, [
          _c("div", { staticClass: "card-content" }, [
            _c("div", { staticClass: "card-body" }, [
              _c(
                "div",
                { staticClass: "card-body" },
                [
                  _vm.success
                    ? _c("alert", [_vm._v(_vm._s(_vm.success))])
                    : _vm._e(),
                  _vm._v(" "),
                  _c(
                    "ul",
                    {
                      staticClass: "nav nav-tabs mb-3",
                      attrs: { role: "tablist" }
                    },
                    [
                      _c("li", { staticClass: "nav-item" }, [
                        _c(
                          "a",
                          {
                            staticClass:
                              "nav-link d-flex align-items-center active",
                            attrs: {
                              id: "account-tab",
                              "data-toggle": "tab",
                              href: "#account",
                              "aria-controls": "account",
                              role: "tab",
                              "aria-selected": "true"
                            }
                          },
                          [
                            _c("i", { staticClass: "feather icon-user mr-25" }),
                            _c("span", { staticClass: "d-none d-sm-block" }, [
                              _vm._v("Account")
                            ])
                          ]
                        )
                      ])
                    ]
                  ),
                  _vm._v(" "),
                  _c("div", { staticClass: "tab-content" }, [
                    _c(
                      "div",
                      {
                        staticClass: "tab-pane active",
                        attrs: {
                          id: "account",
                          "aria-labelledby": "account-tab",
                          role: "tabpanel"
                        }
                      },
                      [
                        _c("div", { staticClass: "media mb-2" }, [
                          _c(
                            "div",
                            {
                              staticClass: "banner-logo-upload-box mx-auto",
                              staticStyle: { width: "105px", height: "105px" }
                            },
                            [
                              _c("img", {
                                staticClass: "users-avatar-shadow rounded",
                                attrs: {
                                  id: "avatar",
                                  height: "90",
                                  width: "90",
                                  src: _vm.user.avatar_small,
                                  alt: ""
                                }
                              }),
                              _vm._v(" "),
                              _c("label", { staticClass: "btn-pill" }, [
                                _c("i", { staticClass: "fa fa-camera" }),
                                _vm._v(" "),
                                _c("input", {
                                  staticClass: "hidden",
                                  attrs: {
                                    id: "image",
                                    type: "file",
                                    name: "avatar"
                                  },
                                  on: { change: _vm.showImage }
                                })
                              ])
                            ]
                          ),
                          _vm._v(" "),
                          _c("div", { staticClass: "media-body mt-50 ml-2" }, [
                            _c("h4", { staticClass: "media-heading" }, [
                              _vm._v(_vm._s(_vm.user.name))
                            ]),
                            _vm._v(" "),
                            _c(
                              "div",
                              { staticClass: "col-12 d-flex mt-1 px-0" },
                              [
                                _c(
                                  "button",
                                  {
                                    staticClass:
                                      "btn btn-primary d-none d-sm-block mr-75 waves-effect waves-light",
                                    attrs: { type: "button" },
                                    on: { click: _vm.uploadImage }
                                  },
                                  [
                                    _vm._v(
                                      "\n                          Change\n                        "
                                    )
                                  ]
                                ),
                                _vm._v(" "),
                                _c(
                                  "a",
                                  {
                                    staticClass:
                                      "btn btn-primary d-block d-sm-none mr-75 waves-effect waves-light",
                                    attrs: { href: "#" }
                                  },
                                  [
                                    _c("i", {
                                      staticClass: "feather icon-edit-1"
                                    })
                                  ]
                                ),
                                _vm._v(" "),
                                _c(
                                  "a",
                                  {
                                    staticClass:
                                      "btn btn-outline-danger d-none d-sm-block waves-effect waves-light",
                                    attrs: { href: "#" }
                                  },
                                  [_vm._v("Remove")]
                                ),
                                _vm._v(" "),
                                _c(
                                  "a",
                                  {
                                    staticClass:
                                      "btn btn-outline-danger d-block d-sm-none waves-effect waves-light",
                                    attrs: { href: "#" }
                                  },
                                  [
                                    _c("i", {
                                      staticClass: "feather icon-trash-2"
                                    })
                                  ]
                                )
                              ]
                            )
                          ])
                        ]),
                        _vm._v(" "),
                        _c(
                          "form",
                          {
                            on: {
                              submit: function($event) {
                                $event.preventDefault()
                                return _vm.update($event)
                              }
                            }
                          },
                          [
                            _c("div", { staticClass: "row" }, [
                              _c("div", { staticClass: "col-12 col-sm-6" }, [
                                _c("div", { staticClass: "form-group" }, [
                                  _c("div", { staticClass: "controls" }, [
                                    _c("label", [_vm._v("Name")]),
                                    _vm._v(" "),
                                    _c("input", {
                                      directives: [
                                        {
                                          name: "model",
                                          rawName: "v-model",
                                          value: _vm.user.name,
                                          expression: "user.name"
                                        }
                                      ],
                                      staticClass: "form-control",
                                      attrs: {
                                        type: "text",
                                        placeholder: "Name"
                                      },
                                      domProps: { value: _vm.user.name },
                                      on: {
                                        input: function($event) {
                                          if ($event.target.composing) {
                                            return
                                          }
                                          _vm.$set(
                                            _vm.user,
                                            "name",
                                            $event.target.value
                                          )
                                        }
                                      }
                                    }),
                                    _vm._v(" "),
                                    _vm.errors.name
                                      ? _c(
                                          "div",
                                          { staticClass: "text-danger" },
                                          [
                                            _vm._v(
                                              "\n                              " +
                                                _vm._s(_vm.errors.name[0]) +
                                                "\n                            "
                                            )
                                          ]
                                        )
                                      : _vm._e()
                                  ])
                                ]),
                                _vm._v(" "),
                                _c("div", { staticClass: "form-group" }, [
                                  _c("div", { staticClass: "controls" }, [
                                    _c("label", [_vm._v("Contact No.")]),
                                    _vm._v(" "),
                                    _c("input", {
                                      directives: [
                                        {
                                          name: "model",
                                          rawName: "v-model",
                                          value: _vm.user.phone,
                                          expression: "user.phone"
                                        }
                                      ],
                                      staticClass: "form-control",
                                      attrs: {
                                        type: "text",
                                        placeholder: "Contact No."
                                      },
                                      domProps: { value: _vm.user.phone },
                                      on: {
                                        input: function($event) {
                                          if ($event.target.composing) {
                                            return
                                          }
                                          _vm.$set(
                                            _vm.user,
                                            "phone",
                                            $event.target.value
                                          )
                                        }
                                      }
                                    }),
                                    _vm._v(" "),
                                    _vm.errors.phone
                                      ? _c(
                                          "div",
                                          { staticClass: "invalid-feedback" },
                                          [
                                            _vm._v(
                                              "\n                              " +
                                                _vm._s(_vm.errors.phone[0]) +
                                                "\n                            "
                                            )
                                          ]
                                        )
                                      : _vm._e()
                                  ])
                                ]),
                                _vm._v(" "),
                                _c("div", { staticClass: "form-group" }, [
                                  _c("div", { staticClass: "controls" }, [
                                    _c("label", [_vm._v("E-mail")]),
                                    _vm._v(" "),
                                    _c("input", {
                                      directives: [
                                        {
                                          name: "model",
                                          rawName: "v-model",
                                          value: _vm.user.email,
                                          expression: "user.email"
                                        }
                                      ],
                                      staticClass: "form-control",
                                      attrs: {
                                        type: "email",
                                        placeholder: "Email"
                                      },
                                      domProps: { value: _vm.user.email },
                                      on: {
                                        input: function($event) {
                                          if ($event.target.composing) {
                                            return
                                          }
                                          _vm.$set(
                                            _vm.user,
                                            "email",
                                            $event.target.value
                                          )
                                        }
                                      }
                                    }),
                                    _vm._v(" "),
                                    _vm.errors.email
                                      ? _c(
                                          "div",
                                          { staticClass: "invalid-feedback" },
                                          [
                                            _vm._v(
                                              "\n                              " +
                                                _vm._s(_vm.errors.email[0]) +
                                                "\n                            "
                                            )
                                          ]
                                        )
                                      : _vm._e()
                                  ])
                                ])
                              ]),
                              _vm._v(" "),
                              _c("div", { staticClass: "col-12 col-sm-6" }, [
                                _c("div", { staticClass: "form-group" }, [
                                  _c("label", [_vm._v("Gender")]),
                                  _vm._v(" "),
                                  _c(
                                    "select",
                                    {
                                      directives: [
                                        {
                                          name: "model",
                                          rawName: "v-model",
                                          value: _vm.user.gender_id,
                                          expression: "user.gender_id"
                                        }
                                      ],
                                      staticClass: "form-control",
                                      on: {
                                        change: function($event) {
                                          var $$selectedVal = Array.prototype.filter
                                            .call(
                                              $event.target.options,
                                              function(o) {
                                                return o.selected
                                              }
                                            )
                                            .map(function(o) {
                                              var val =
                                                "_value" in o
                                                  ? o._value
                                                  : o.value
                                              return val
                                            })
                                          _vm.$set(
                                            _vm.user,
                                            "gender_id",
                                            $event.target.multiple
                                              ? $$selectedVal
                                              : $$selectedVal[0]
                                          )
                                        }
                                      }
                                    },
                                    [
                                      _c("option", [_vm._v("Select ...")]),
                                      _vm._v(" "),
                                      _vm._l(_vm.genders, function(gender) {
                                        return _c(
                                          "option",
                                          {
                                            key: gender.id,
                                            domProps: {
                                              value: gender.id,
                                              selected: [
                                                gender.id == _vm.user.gender_id
                                                  ? true
                                                  : false
                                              ]
                                            }
                                          },
                                          [
                                            _vm._v(
                                              "\n                              " +
                                                _vm._s(gender.name) +
                                                "\n                            "
                                            )
                                          ]
                                        )
                                      })
                                    ],
                                    2
                                  ),
                                  _vm._v(" "),
                                  _vm.errors.gender_id
                                    ? _c(
                                        "div",
                                        { staticClass: "invalid-feedback" },
                                        [
                                          _vm._v(
                                            "\n                            " +
                                              _vm._s(_vm.errors.gender_id[0]) +
                                              "\n                          "
                                          )
                                        ]
                                      )
                                    : _vm._e()
                                ]),
                                _vm._v(" "),
                                _c("div", { staticClass: "form-group" }, [
                                  _c("label", [_vm._v("Role")]),
                                  _vm._v(" "),
                                  _c(
                                    "select",
                                    {
                                      directives: [
                                        {
                                          name: "model",
                                          rawName: "v-model",
                                          value: _vm.user.religion_id,
                                          expression: "user.religion_id"
                                        }
                                      ],
                                      staticClass: "form-control",
                                      on: {
                                        change: function($event) {
                                          var $$selectedVal = Array.prototype.filter
                                            .call(
                                              $event.target.options,
                                              function(o) {
                                                return o.selected
                                              }
                                            )
                                            .map(function(o) {
                                              var val =
                                                "_value" in o
                                                  ? o._value
                                                  : o.value
                                              return val
                                            })
                                          _vm.$set(
                                            _vm.user,
                                            "religion_id",
                                            $event.target.multiple
                                              ? $$selectedVal
                                              : $$selectedVal[0]
                                          )
                                        }
                                      }
                                    },
                                    [
                                      _c("option", { attrs: { value: "" } }, [
                                        _vm._v("Select ...")
                                      ]),
                                      _vm._v(" "),
                                      _vm._l(_vm.religions, function(religion) {
                                        return _c(
                                          "option",
                                          {
                                            key: religion.id,
                                            domProps: {
                                              value: religion.id,
                                              selected: [
                                                religion.id ==
                                                _vm.user.religion_id
                                                  ? true
                                                  : false
                                              ]
                                            }
                                          },
                                          [
                                            _vm._v(
                                              "\n                              " +
                                                _vm._s(religion.name) +
                                                "\n                            "
                                            )
                                          ]
                                        )
                                      })
                                    ],
                                    2
                                  ),
                                  _vm._v(" "),
                                  _vm.errors.religion_id
                                    ? _c(
                                        "div",
                                        { staticClass: "invalid-feedback" },
                                        [
                                          _vm._v(
                                            "\n                            " +
                                              _vm._s(
                                                _vm.errors.religion_id[0]
                                              ) +
                                              "\n                          "
                                          )
                                        ]
                                      )
                                    : _vm._e()
                                ]),
                                _vm._v(" "),
                                _c("div", { staticClass: "form-group" }, [
                                  _c(
                                    "div",
                                    { staticClass: "controls" },
                                    [
                                      _c("label", [_vm._v("Birth Date")]),
                                      _vm._v(" "),
                                      _c("date-picker", {
                                        staticClass: "form-control",
                                        attrs: { placeholder: "Birth Date" },
                                        model: {
                                          value: _vm.user.birth_date,
                                          callback: function($$v) {
                                            _vm.$set(
                                              _vm.user,
                                              "birth_date",
                                              $$v
                                            )
                                          },
                                          expression: "user.birth_date"
                                        }
                                      }),
                                      _vm._v(" "),
                                      _vm.errors.birth_date
                                        ? _c(
                                            "div",
                                            { staticClass: "text-danger" },
                                            [
                                              _vm._v(
                                                "\n                              " +
                                                  _vm._s(
                                                    _vm.errors.birth_date[0]
                                                  ) +
                                                  "\n                            "
                                              )
                                            ]
                                          )
                                        : _vm._e()
                                    ],
                                    1
                                  )
                                ])
                              ]),
                              _vm._v(" "),
                              _c(
                                "div",
                                {
                                  staticClass:
                                    "col-12 d-flex flex-sm-row flex-column justify-content-end mt-1"
                                },
                                [
                                  _c(
                                    "button",
                                    {
                                      staticClass:
                                        "btn btn-primary glow mb-1 mb-sm-0 mr-0 mr-sm-1 waves-effect waves-light",
                                      attrs: { type: "submit" }
                                    },
                                    [
                                      _vm._v(
                                        "\n                          Save Changes\n                        "
                                      )
                                    ]
                                  ),
                                  _vm._v(" "),
                                  _c(
                                    "button",
                                    {
                                      staticClass:
                                        "btn btn-outline-warning waves-effect waves-light",
                                      attrs: { type: "reset" }
                                    },
                                    [
                                      _vm._v(
                                        "\n                          Reset\n                        "
                                      )
                                    ]
                                  )
                                ]
                              )
                            ])
                          ]
                        ),
                        _vm._v(" "),
                        _c(
                          "form",
                          {
                            on: {
                              submit: function($event) {
                                $event.preventDefault()
                                return _vm.updatePassword($event)
                              }
                            }
                          },
                          [
                            _c("div", { staticClass: "row" }, [
                              _c("div", { staticClass: "col-12 col-sm-6" }, [
                                _c("div", { staticClass: "form-group" }, [
                                  _c("div", { staticClass: "controls" }, [
                                    _c("label", [_vm._v("Password")]),
                                    _vm._v(" "),
                                    _c("input", {
                                      directives: [
                                        {
                                          name: "model",
                                          rawName: "v-model",
                                          value: _vm.form.password,
                                          expression: "form.password"
                                        }
                                      ],
                                      staticClass: "form-control",
                                      attrs: {
                                        type: "password",
                                        placeholder: "Password"
                                      },
                                      domProps: { value: _vm.form.password },
                                      on: {
                                        input: function($event) {
                                          if ($event.target.composing) {
                                            return
                                          }
                                          _vm.$set(
                                            _vm.form,
                                            "password",
                                            $event.target.value
                                          )
                                        }
                                      }
                                    }),
                                    _vm._v(" "),
                                    _vm.errors.password
                                      ? _c(
                                          "div",
                                          { staticClass: "text-danger" },
                                          [
                                            _vm._v(
                                              "\n                              " +
                                                _vm._s(_vm.errors.password[0]) +
                                                "\n                            "
                                            )
                                          ]
                                        )
                                      : _vm._e()
                                  ])
                                ])
                              ]),
                              _vm._v(" "),
                              _c("div", { staticClass: "col-12 col-sm-6" }, [
                                _c("div", { staticClass: "form-group" }, [
                                  _c("div", { staticClass: "controls" }, [
                                    _c("label", [_vm._v("Confirm Password")]),
                                    _vm._v(" "),
                                    _c("input", {
                                      directives: [
                                        {
                                          name: "model",
                                          rawName: "v-model",
                                          value: _vm.form.password_confirmation,
                                          expression:
                                            "form.password_confirmation"
                                        }
                                      ],
                                      staticClass: "form-control",
                                      attrs: {
                                        type: "password",
                                        placeholder: "Confirm Password"
                                      },
                                      domProps: {
                                        value: _vm.form.password_confirmation
                                      },
                                      on: {
                                        input: function($event) {
                                          if ($event.target.composing) {
                                            return
                                          }
                                          _vm.$set(
                                            _vm.form,
                                            "password_confirmation",
                                            $event.target.value
                                          )
                                        }
                                      }
                                    }),
                                    _vm._v(" "),
                                    _vm.errors.password_confirmation
                                      ? _c(
                                          "div",
                                          { staticClass: "text-danger" },
                                          [
                                            _vm._v(
                                              "\n                              " +
                                                _vm._s(
                                                  _vm.errors
                                                    .password_confirmation[0]
                                                ) +
                                                "\n                            "
                                            )
                                          ]
                                        )
                                      : _vm._e()
                                  ])
                                ])
                              ]),
                              _vm._v(" "),
                              _c(
                                "div",
                                {
                                  staticClass:
                                    "col-12 d-flex flex-sm-row flex-column justify-content-end mt-1"
                                },
                                [
                                  _c(
                                    "button",
                                    {
                                      staticClass:
                                        "btn btn-outline-warning waves-effect waves-light",
                                      attrs: { type: "submit" }
                                    },
                                    [
                                      _vm._v(
                                        "\n                          Reset Password\n                        "
                                      )
                                    ]
                                  )
                                ]
                              )
                            ])
                          ]
                        )
                      ]
                    ),
                    _vm._v(" "),
                    _c("div", {
                      staticClass: "tab-pane",
                      attrs: {
                        id: "information",
                        "aria-labelledby": "information-tab",
                        role: "tabpanel"
                      }
                    })
                  ])
                ],
                1
              )
            ])
          ])
        ])
      ])
    ])
  ])
}
var staticRenderFns = []
render._withStripped = true
module.exports = { render: render, staticRenderFns: staticRenderFns }
if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-hot-reload-api")      .rerender("data-v-b05f0a24", module.exports)
  }
}

/***/ })

});