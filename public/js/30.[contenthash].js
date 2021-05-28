<<<<<<< HEAD
webpackJsonp([30],{154:function(t,e,a){var s=a(231)(a(414),a(415),!1,function(t){a(412)},null,null);t.exports=s.exports},231:function(t,e){t.exports=function(t,e,a,s,o,r){var n,i=t=t||{},l=typeof t.default;"object"!==l&&"function"!==l||(n=t,i=t.default);var c,d="function"==typeof i?i.options:i;if(e&&(d.render=e.render,d.staticRenderFns=e.staticRenderFns,d._compiled=!0),a&&(d.functional=!0),o&&(d._scopeId=o),r?(c=function(t){(t=t||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext)||"undefined"==typeof __VUE_SSR_CONTEXT__||(t=__VUE_SSR_CONTEXT__),s&&s.call(this,t),t&&t._registeredComponents&&t._registeredComponents.add(r)},d._ssrRegister=c):s&&(c=s),c){var p=d.functional,f=p?d.render:d.beforeCreate;p?(d._injectStyles=c,d.render=function(t,e){return c.call(e),f(t,e)}):d.beforeCreate=f?[].concat(f,c):[c]}return{esModule:n,exports:i,options:d}}},232:function(t,e,a){var s="undefined"!=typeof document;if("undefined"!=typeof DEBUG&&DEBUG&&!s)throw new Error("vue-style-loader cannot be used in a non-browser environment. Use { target: 'node' } in your Webpack config to indicate a server-rendering environment.");var o=a(234),r={},n=s&&(document.head||document.getElementsByTagName("head")[0]),i=null,l=0,c=!1,d=function(){},p=null,f="data-vue-ssr-id",u="undefined"!=typeof navigator&&/msie [6-9]\b/.test(navigator.userAgent.toLowerCase());function m(t){for(var e=0;e<t.length;e++){var a=t[e],s=r[a.id];if(s){s.refs++;for(var o=0;o<s.parts.length;o++)s.parts[o](a.parts[o]);for(;o<a.parts.length;o++)s.parts.push(h(a.parts[o]));s.parts.length>a.parts.length&&(s.parts.length=a.parts.length)}else{var n=[];for(o=0;o<a.parts.length;o++)n.push(h(a.parts[o]));r[a.id]={id:a.id,refs:1,parts:n}}}}function v(){var t=document.createElement("style");return t.type="text/css",n.appendChild(t),t}function h(t){var e,a,s=document.querySelector("style["+f+'~="'+t.id+'"]');if(s){if(c)return d;s.parentNode.removeChild(s)}if(u){var o=l++;s=i||(i=v()),e=_.bind(null,s,o,!1),a=_.bind(null,s,o,!0)}else s=v(),e=function(t,e){var a=e.css,s=e.media,o=e.sourceMap;s&&t.setAttribute("media",s);p.ssrId&&t.setAttribute(f,e.id);o&&(a+="\n/*# sourceURL="+o.sources[0]+" */",a+="\n/*# sourceMappingURL=data:application/json;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(o))))+" */");if(t.styleSheet)t.styleSheet.cssText=a;else{for(;t.firstChild;)t.removeChild(t.firstChild);t.appendChild(document.createTextNode(a))}}.bind(null,s),a=function(){s.parentNode.removeChild(s)};return e(t),function(s){if(s){if(s.css===t.css&&s.media===t.media&&s.sourceMap===t.sourceMap)return;e(t=s)}else a()}}t.exports=function(t,e,a,s){c=a,p=s||{};var n=o(t,e);return m(n),function(e){for(var a=[],s=0;s<n.length;s++){var i=n[s];(l=r[i.id]).refs--,a.push(l)}e?m(n=o(t,e)):n=[];for(s=0;s<a.length;s++){var l;if(0===(l=a[s]).refs){for(var c=0;c<l.parts.length;c++)l.parts[c]();delete r[l.id]}}}};var g,b=(g=[],function(t,e){return g[t]=e,g.filter(Boolean).join("\n")});function _(t,e,a,s){var o=a?"":s.css;if(t.styleSheet)t.styleSheet.cssText=b(e,o);else{var r=document.createTextNode(o),n=t.childNodes;n[e]&&t.removeChild(n[e]),n.length?t.insertBefore(r,n[e]):t.appendChild(r)}}},234:function(t,e){t.exports=function(t,e){for(var a=[],s={},o=0;o<e.length;o++){var r=e[o],n=r[0],i={id:t+":"+o,css:r[1],media:r[2],sourceMap:r[3]};s[n]?s[n].parts.push(i):a.push(s[n]={id:n,parts:[i]})}return a}},235:function(t,e,a){var s=a(231)(a(238),a(239),!1,function(t){a(236)},null,null);t.exports=s.exports},236:function(t,e,a){var s=a(237);"string"==typeof s&&(s=[[t.i,s,""]]),s.locals&&(t.exports=s.locals);a(232)("a3630c76",s,!0,{})},237:function(t,e,a){(t.exports=a(149)(!1)).push([t.i,"",""])},238:function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={name:"AppFooter"}},239:function(t,e){t.exports={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",["horizontal"==this.$page.configData.mainLayoutType?e("footer",{staticClass:"footer footer-light navbar-shadow",class:this.$page.configData.footerType}):e("footer",{staticClass:"footer footer-light",class:this.$page.configData.footerType},[this._m(0)])])},staticRenderFns:[function(){var t=this.$createElement,e=this._self._c||t;return e("p",{staticClass:"clearfix blue-grey lighten-2 mb-0"},[e("span",{staticClass:"float-md-left d-block d-md-inline-block mt-25"},[this._v("COPYRIGHT © 2019\n\t\t\t\t"),e("a",{staticClass:"text-bold-800 grey darken-2",attrs:{href:"http://teammahal.info/",target:"_blank"}},[this._v("Team Mahal,")]),this._v("\n\t\t\t\tAll rights Reserved\n\t\t\t")]),this._v(" "),e("span",{staticClass:"float-md-right d-none d-md-block"},[this._v("Hand-crafted & Made with"),e("i",{staticClass:"feather icon-heart pink"})]),this._v(" "),e("button",{staticClass:"btn btn-primary btn-icon scroll-top",attrs:{type:"button"}},[e("i",{staticClass:"feather icon-arrow-up"})])])}]}},399:function(t,e,a){var s=a(231)(a(402),a(403),!1,function(t){a(400)},null,null);t.exports=s.exports},400:function(t,e,a){var s=a(401);"string"==typeof s&&(s=[[t.i,s,""]]),s.locals&&(t.exports=s.locals);a(232)("4e74591e",s,!0,{})},401:function(t,e,a){(t.exports=a(149)(!1)).push([t.i,".form-control-position{position:absolute;top:2px;right:0;z-index:2;display:block;width:2.5rem;height:2.5rem;line-height:2.5rem;text-align:center}.has-icon-left .form-control-position{right:auto;left:inherit}.has-icon-left .form-control-position i{position:relative;left:5px;color:rgba(34,41,47,.4)}.has-icon-left .form-control{padding-right:2rem;padding-left:3rem}.position-relative .form-control{padding-right:calc(1.25em + 1.4rem + 1px)}.bg-authentication{background-color:#eff2f7}.bg-authentication .login-footer{padding:0 1.5rem .5rem}.bg-authentication .login-footer .footer-btn .btn{padding:.9rem 1.2rem!important;margin:1rem 1rem 1rem 0}@media (-ms-high-contrast:none),screen and (-ms-high-contrast:active){.bg-authentication{width:100%}}",""])},402:function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var s=a(235),o=a.n(s);e.default={name:"AuthLayout",components:{AppFooter:o.a}}},403:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("body",{staticClass:"vertical-layout vertical-menu-modern 1-column",class:t.$page.configData.blankPageClass+" "+t.$page.configData.navbarType+" "+t.$page.configData.bodyClass+" "+t.$page.configData.footerType+["light"===t.$page.configData.theme?"":t.$page.configData.theme],attrs:{"data-menu":"vertical-menu-modern","data-col":"1-column"}},[a("div",{attrs:{id:"app"}},[a("div",{staticClass:"content-overlay"}),t._v(" "),a("div",{staticClass:"header-navbar-shadow"}),t._v(" "),a("div",{staticClass:"app-content content"},[a("div",{staticClass:"content-wrapper"},[a("div",{staticClass:"content-body"},[t._t("default")],2)])]),t._v(" "),a("app-footer")],1)])},staticRenderFns:[]}},412:function(t,e,a){var s=a(413);"string"==typeof s&&(s=[[t.i,s,""]]),s.locals&&(t.exports=s.locals);a(232)("1b11b1ce",s,!0,{})},413:function(t,e,a){(t.exports=a(149)(!1)).push([t.i,"",""])},414:function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var s=a(399),o=a.n(s);e.default={name:"PasswordReset",components:{AuthLayout:o.a},props:{token:String,email:String,errors:Object},data:function(){return{form:{password:"",password_confirmation:""}}},methods:{resetPassword:function(){this.$inertia.post(this.route("passwordrecet"),{email:this.email,password:this.form.password,password_confirmation:this.form.password_confirmation,token:this.token})}}}},415:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("auth-layout",[a("section",{staticClass:"row flexbox-container"},[a("div",{staticClass:"col-xl-7 col-10 d-flex justify-content-center"},[a("div",{staticClass:"card bg-authentication rounded-0 mb-0 w-100"},[a("div",{staticClass:"row m-0"},[a("div",{staticClass:"col-lg-6 d-lg-block d-none text-center align-self-center p-0"},[a("img",{attrs:{src:"/images/pages/reset-password.png",alt:"branding logo"}})]),t._v(" "),a("div",{staticClass:"col-lg-6 col-12 p-0"},[a("div",{staticClass:"card rounded-0 mb-0 px-2"},[a("div",{staticClass:"card-header pb-1"},[a("div",{staticClass:"card-title"},[a("h4",{staticClass:"mb-0"},[t._v("Reset Password")])])]),t._v(" "),a("p",{staticClass:"px-2"},[t._v("Please enter your new password.")]),t._v(" "),a("div",{staticClass:"card-content"},[a("div",{staticClass:"card-body pt-1"},[a("form",{on:{submit:function(e){return e.preventDefault(),t.resetPassword(e)}}},[a("fieldset",{staticClass:"form-label-group"},[a("input",{directives:[{name:"model",rawName:"v-model",value:t.email,expression:"email"}],staticClass:"form-control",attrs:{type:"email",placeholder:"Email",autocomplete:"email",autofocus:""},domProps:{value:t.email},on:{input:function(e){e.target.composing||(t.email=e.target.value)}}}),t._v(" "),a("label",[t._v("Email")])]),t._v(" "),a("fieldset",{staticClass:"form-label-group"},[a("input",{directives:[{name:"model",rawName:"v-model",value:t.form.password,expression:"form.password"}],staticClass:"form-control",class:[t.errors.password?"is-invalid":""],attrs:{type:"password",placeholder:"Password",autocomplete:"new-password"},domProps:{value:t.form.password},on:{input:function(e){e.target.composing||t.$set(t.form,"password",e.target.value)}}}),t._v(" "),a("label",[t._v("Password")]),t._v(" "),t.errors.password?a("span",{staticClass:"invalid-feedback",attrs:{role:"alert"}},[a("strong",[t._v(t._s(t.errors.password))])]):t._e()]),t._v(" "),a("fieldset",{staticClass:"form-label-group"},[a("input",{directives:[{name:"model",rawName:"v-model",value:t.form.password_confirmation,expression:"form.password_confirmation"}],staticClass:"form-control",attrs:{type:"password",placeholder:"Confirm Password",autocomplete:"new-password"},domProps:{value:t.form.password_confirmation},on:{input:function(e){e.target.composing||t.$set(t.form,"password_confirmation",e.target.value)}}}),t._v(" "),a("label",[t._v("Confirm Password")])]),t._v(" "),a("div",{staticClass:"row pt-2"},[a("div",{staticClass:"col-12 col-md-6 mb-1"},[a("inertia-link",{staticClass:"btn btn-outline-primary btn-block px-0",attrs:{href:t.route("login")}},[t._v("Go Back to Login")])],1),t._v(" "),a("div",{staticClass:"col-12 col-md-6 mb-1"},[a("button",{staticClass:"btn btn-primary btn-block px-0",attrs:{type:"submit"}},[t._v("Reset")])])])])])])])])])])])])])},staticRenderFns:[]}}});
=======
webpackJsonp([30],{

/***/ 154:
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(412)
}
var normalizeComponent = __webpack_require__(231)
/* script */
var __vue_script__ = __webpack_require__(414)
/* template */
var __vue_template__ = __webpack_require__(415)
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
Component.options.__file = "resources/js/Pages/Auth/PasswordReset.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-1e83a3d4", Component.options)
  } else {
    hotAPI.reload("data-v-1e83a3d4", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),

/***/ 231:
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

/***/ 232:
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

var listToStyles = __webpack_require__(233)

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

/***/ 233:
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

/***/ 234:
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(235)
}
var normalizeComponent = __webpack_require__(231)
/* script */
var __vue_script__ = __webpack_require__(237)
/* template */
var __vue_template__ = __webpack_require__(238)
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

/***/ 235:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(236);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(232)("cd3590b0", content, false, {});
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

/***/ 236:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(149)(false);
// imports


// module
exports.push([module.i, "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", ""]);

// exports


/***/ }),

/***/ 237:
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

/***/ 238:
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
          _vm._v("COPYRIGHT © 2019\n\t\t\t\t"),
          _c(
            "a",
            {
              staticClass: "text-bold-800 grey darken-2",
              attrs: { href: "http://teammahal.info/", target: "_blank" }
            },
            [_vm._v("Team Mahal,")]
          ),
          _vm._v("\n\t\t\t\tAll rights Reserved\n\t\t\t")
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

/***/ 309:
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(310)
}
var normalizeComponent = __webpack_require__(231)
/* script */
var __vue_script__ = __webpack_require__(312)
/* template */
var __vue_template__ = __webpack_require__(313)
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
Component.options.__file = "resources/js/Shared/AuthLayout.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-58e37364", Component.options)
  } else {
    hotAPI.reload("data-v-58e37364", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),

/***/ 310:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(311);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(232)("10e06850", content, false, {});
// Hot Module Replacement
if(false) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept("!!../../../node_modules/css-loader/index.js!../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-58e37364\",\"scoped\":false,\"hasInlineConfig\":true}!../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./AuthLayout.vue", function() {
     var newContent = require("!!../../../node_modules/css-loader/index.js!../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-58e37364\",\"scoped\":false,\"hasInlineConfig\":true}!../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./AuthLayout.vue");
     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ 311:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(149)(false);
// imports


// module
exports.push([module.i, "\n.form-control-position {\n  position: absolute;\n  top: 2px;\n  right: 0;\n  z-index: 2;\n  display: block;\n  width: 2.5rem;\n  height: 2.5rem;\n  line-height: 2.5rem;\n  text-align: center;\n}\n.has-icon-left .form-control-position {\n  right: auto;\n  left: inherit;\n}\n.has-icon-left .form-control-position i {\n  position: relative;\n  left: 5px;\n  color: rgba(34, 41, 47, 0.4);\n}\n.has-icon-left .form-control {\n  padding-right: 2rem;\n  padding-left: 3rem;\n}\n.position-relative .form-control {\n  padding-right: calc(1.25em + 1.4rem + 1px);\n}\n.bg-authentication {\n  background-color: #eff2f7;\n}\n.bg-authentication .login-footer {\n  padding: 0rem 1.5rem 0.5rem;\n}\n.bg-authentication .login-footer .footer-btn .btn {\n  padding: 0.9rem 1.2rem !important;\n  margin: 1rem 1rem 1rem 0rem;\n}\n@media screen and (-ms-high-contrast: active), (-ms-high-contrast: none) {\n.bg-authentication {\n    width: 100%;\n}\n}\n\n", ""]);

// exports


/***/ }),

/***/ 312:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__AppFooter__ = __webpack_require__(234);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__AppFooter___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__AppFooter__);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
  name: "AuthLayout",
  components: {
    AppFooter: __WEBPACK_IMPORTED_MODULE_0__AppFooter___default.a
  }
});

/***/ }),

/***/ 313:
/***/ (function(module, exports, __webpack_require__) {

var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "body",
    {
      staticClass: "vertical-layout vertical-menu-modern 1-column",
      class:
        _vm.$page.configData.blankPageClass +
        " " +
        _vm.$page.configData.navbarType +
        " " +
        _vm.$page.configData.bodyClass +
        " " +
        _vm.$page.configData.footerType +
        [
          _vm.$page.configData.theme === "light"
            ? ""
            : _vm.$page.configData.theme
        ],
      attrs: { "data-menu": "vertical-menu-modern", "data-col": "1-column" }
    },
    [
      _c(
        "div",
        { attrs: { id: "app" } },
        [
          _c("div", { staticClass: "content-overlay" }),
          _vm._v(" "),
          _c("div", { staticClass: "header-navbar-shadow" }),
          _vm._v(" "),
          _c("div", { staticClass: "app-content content" }, [
            _c("div", { staticClass: "content-wrapper" }, [
              _c("div", { staticClass: "content-body" }, [_vm._t("default")], 2)
            ])
          ]),
          _vm._v(" "),
          _c("app-footer")
        ],
        1
      )
    ]
  )
}
var staticRenderFns = []
render._withStripped = true
module.exports = { render: render, staticRenderFns: staticRenderFns }
if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-hot-reload-api")      .rerender("data-v-58e37364", module.exports)
  }
}

/***/ }),

/***/ 412:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(413);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(232)("b2965e4a", content, false, {});
// Hot Module Replacement
if(false) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept("!!../../../../node_modules/css-loader/index.js!../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-1e83a3d4\",\"scoped\":false,\"hasInlineConfig\":true}!../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./PasswordReset.vue", function() {
     var newContent = require("!!../../../../node_modules/css-loader/index.js!../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-1e83a3d4\",\"scoped\":false,\"hasInlineConfig\":true}!../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./PasswordReset.vue");
     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ 413:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(149)(false);
// imports


// module
exports.push([module.i, "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", ""]);

// exports


/***/ }),

/***/ 414:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Shared_AuthLayout__ = __webpack_require__(309);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Shared_AuthLayout___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__Shared_AuthLayout__);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
  name: "PasswordReset",
  components: {
    AuthLayout: __WEBPACK_IMPORTED_MODULE_0__Shared_AuthLayout___default.a
  },
  props: {
    token: String,
    email: String,
    errors: Object
  },
  data: function data() {
    return {
      form: {
        password: '',
        password_confirmation: ''
      }
    };
  },
  methods: {
    resetPassword: function resetPassword() {
      this.$inertia.post(this.route('passwordrecet'), {
        email: this.email,
        password: this.form.password,
        password_confirmation: this.form.password_confirmation,
        token: this.token
      });
    }
  }
});

/***/ }),

/***/ 415:
/***/ (function(module, exports, __webpack_require__) {

var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("auth-layout", [
    _c("section", { staticClass: "row flexbox-container" }, [
      _c(
        "div",
        { staticClass: "col-xl-7 col-10 d-flex justify-content-center" },
        [
          _c(
            "div",
            { staticClass: "card bg-authentication rounded-0 mb-0 w-100" },
            [
              _c("div", { staticClass: "row m-0" }, [
                _c(
                  "div",
                  {
                    staticClass:
                      "col-lg-6 d-lg-block d-none text-center align-self-center p-0"
                  },
                  [
                    _c("img", {
                      attrs: {
                        src: "/images/pages/reset-password.png",
                        alt: "branding logo"
                      }
                    })
                  ]
                ),
                _vm._v(" "),
                _c("div", { staticClass: "col-lg-6 col-12 p-0" }, [
                  _c("div", { staticClass: "card rounded-0 mb-0 px-2" }, [
                    _c("div", { staticClass: "card-header pb-1" }, [
                      _c("div", { staticClass: "card-title" }, [
                        _c("h4", { staticClass: "mb-0" }, [
                          _vm._v("Reset Password")
                        ])
                      ])
                    ]),
                    _vm._v(" "),
                    _c("p", { staticClass: "px-2" }, [
                      _vm._v("Please enter your new password.")
                    ]),
                    _vm._v(" "),
                    _c("div", { staticClass: "card-content" }, [
                      _c("div", { staticClass: "card-body pt-1" }, [
                        _c(
                          "form",
                          {
                            on: {
                              submit: function($event) {
                                $event.preventDefault()
                                return _vm.resetPassword($event)
                              }
                            }
                          },
                          [
                            _c(
                              "fieldset",
                              { staticClass: "form-label-group" },
                              [
                                _c("input", {
                                  directives: [
                                    {
                                      name: "model",
                                      rawName: "v-model",
                                      value: _vm.email,
                                      expression: "email"
                                    }
                                  ],
                                  staticClass: "form-control",
                                  attrs: {
                                    type: "email",
                                    placeholder: "Email",
                                    autocomplete: "email",
                                    autofocus: ""
                                  },
                                  domProps: { value: _vm.email },
                                  on: {
                                    input: function($event) {
                                      if ($event.target.composing) {
                                        return
                                      }
                                      _vm.email = $event.target.value
                                    }
                                  }
                                }),
                                _vm._v(" "),
                                _c("label", [_vm._v("Email")])
                              ]
                            ),
                            _vm._v(" "),
                            _c(
                              "fieldset",
                              { staticClass: "form-label-group" },
                              [
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
                                  class: [
                                    _vm.errors.password ? "is-invalid" : ""
                                  ],
                                  attrs: {
                                    type: "password",
                                    placeholder: "Password",
                                    autocomplete: "new-password"
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
                                _c("label", [_vm._v("Password")]),
                                _vm._v(" "),
                                _vm.errors.password
                                  ? _c(
                                      "span",
                                      {
                                        staticClass: "invalid-feedback",
                                        attrs: { role: "alert" }
                                      },
                                      [
                                        _c("strong", [
                                          _vm._v(_vm._s(_vm.errors.password))
                                        ])
                                      ]
                                    )
                                  : _vm._e()
                              ]
                            ),
                            _vm._v(" "),
                            _c(
                              "fieldset",
                              { staticClass: "form-label-group" },
                              [
                                _c("input", {
                                  directives: [
                                    {
                                      name: "model",
                                      rawName: "v-model",
                                      value: _vm.form.password_confirmation,
                                      expression: "form.password_confirmation"
                                    }
                                  ],
                                  staticClass: "form-control",
                                  attrs: {
                                    type: "password",
                                    placeholder: "Confirm Password",
                                    autocomplete: "new-password"
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
                                _c("label", [_vm._v("Confirm Password")])
                              ]
                            ),
                            _vm._v(" "),
                            _c("div", { staticClass: "row pt-2" }, [
                              _c(
                                "div",
                                { staticClass: "col-12 col-md-6 mb-1" },
                                [
                                  _c(
                                    "inertia-link",
                                    {
                                      staticClass:
                                        "btn btn-outline-primary btn-block px-0",
                                      attrs: { href: _vm.route("login") }
                                    },
                                    [_vm._v("Go Back to Login")]
                                  )
                                ],
                                1
                              ),
                              _vm._v(" "),
                              _c(
                                "div",
                                { staticClass: "col-12 col-md-6 mb-1" },
                                [
                                  _c(
                                    "button",
                                    {
                                      staticClass:
                                        "btn btn-primary btn-block px-0",
                                      attrs: { type: "submit" }
                                    },
                                    [_vm._v("Reset")]
                                  )
                                ]
                              )
                            ])
                          ]
                        )
                      ])
                    ])
                  ])
                ])
              ])
            ]
          )
        ]
      )
    ])
  ])
}
var staticRenderFns = []
render._withStripped = true
module.exports = { render: render, staticRenderFns: staticRenderFns }
if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-hot-reload-api")      .rerender("data-v-1e83a3d4", module.exports)
  }
}

/***/ })

});
>>>>>>> 57d8579bea4cf58db48c584e37a5960227da494e
