<<<<<<< HEAD
webpackJsonp([29],{155:function(t,e,a){var o=a(231)(a(418),a(419),!1,function(t){a(416)},null,null);t.exports=o.exports},231:function(t,e){t.exports=function(t,e,a,o,s,r){var n,i=t=t||{},l=typeof t.default;"object"!==l&&"function"!==l||(n=t,i=t.default);var c,p="function"==typeof i?i.options:i;if(e&&(p.render=e.render,p.staticRenderFns=e.staticRenderFns,p._compiled=!0),a&&(p.functional=!0),s&&(p._scopeId=s),r?(c=function(t){(t=t||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext)||"undefined"==typeof __VUE_SSR_CONTEXT__||(t=__VUE_SSR_CONTEXT__),o&&o.call(this,t),t&&t._registeredComponents&&t._registeredComponents.add(r)},p._ssrRegister=c):o&&(c=o),c){var d=p.functional,m=d?p.render:p.beforeCreate;d?(p._injectStyles=c,p.render=function(t,e){return c.call(e),m(t,e)}):p.beforeCreate=m?[].concat(m,c):[c]}return{esModule:n,exports:i,options:p}}},232:function(t,e,a){var o="undefined"!=typeof document;if("undefined"!=typeof DEBUG&&DEBUG&&!o)throw new Error("vue-style-loader cannot be used in a non-browser environment. Use { target: 'node' } in your Webpack config to indicate a server-rendering environment.");var s=a(234),r={},n=o&&(document.head||document.getElementsByTagName("head")[0]),i=null,l=0,c=!1,p=function(){},d=null,m="data-vue-ssr-id",f="undefined"!=typeof navigator&&/msie [6-9]\b/.test(navigator.userAgent.toLowerCase());function u(t){for(var e=0;e<t.length;e++){var a=t[e],o=r[a.id];if(o){o.refs++;for(var s=0;s<o.parts.length;s++)o.parts[s](a.parts[s]);for(;s<a.parts.length;s++)o.parts.push(h(a.parts[s]));o.parts.length>a.parts.length&&(o.parts.length=a.parts.length)}else{var n=[];for(s=0;s<a.parts.length;s++)n.push(h(a.parts[s]));r[a.id]={id:a.id,refs:1,parts:n}}}}function v(){var t=document.createElement("style");return t.type="text/css",n.appendChild(t),t}function h(t){var e,a,o=document.querySelector("style["+m+'~="'+t.id+'"]');if(o){if(c)return p;o.parentNode.removeChild(o)}if(f){var s=l++;o=i||(i=v()),e=b.bind(null,o,s,!1),a=b.bind(null,o,s,!0)}else o=v(),e=function(t,e){var a=e.css,o=e.media,s=e.sourceMap;o&&t.setAttribute("media",o);d.ssrId&&t.setAttribute(m,e.id);s&&(a+="\n/*# sourceURL="+s.sources[0]+" */",a+="\n/*# sourceMappingURL=data:application/json;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(s))))+" */");if(t.styleSheet)t.styleSheet.cssText=a;else{for(;t.firstChild;)t.removeChild(t.firstChild);t.appendChild(document.createTextNode(a))}}.bind(null,o),a=function(){o.parentNode.removeChild(o)};return e(t),function(o){if(o){if(o.css===t.css&&o.media===t.media&&o.sourceMap===t.sourceMap)return;e(t=o)}else a()}}t.exports=function(t,e,a,o){c=a,d=o||{};var n=s(t,e);return u(n),function(e){for(var a=[],o=0;o<n.length;o++){var i=n[o];(l=r[i.id]).refs--,a.push(l)}e?u(n=s(t,e)):n=[];for(o=0;o<a.length;o++){var l;if(0===(l=a[o]).refs){for(var c=0;c<l.parts.length;c++)l.parts[c]();delete r[l.id]}}}};var g,_=(g=[],function(t,e){return g[t]=e,g.filter(Boolean).join("\n")});function b(t,e,a,o){var s=a?"":o.css;if(t.styleSheet)t.styleSheet.cssText=_(e,s);else{var r=document.createTextNode(s),n=t.childNodes;n[e]&&t.removeChild(n[e]),n.length?t.insertBefore(r,n[e]):t.appendChild(r)}}},234:function(t,e){t.exports=function(t,e){for(var a=[],o={},s=0;s<e.length;s++){var r=e[s],n=r[0],i={id:t+":"+s,css:r[1],media:r[2],sourceMap:r[3]};o[n]?o[n].parts.push(i):a.push(o[n]={id:n,parts:[i]})}return a}},235:function(t,e,a){var o=a(231)(a(238),a(239),!1,function(t){a(236)},null,null);t.exports=o.exports},236:function(t,e,a){var o=a(237);"string"==typeof o&&(o=[[t.i,o,""]]),o.locals&&(t.exports=o.locals);a(232)("a3630c76",o,!0,{})},237:function(t,e,a){(t.exports=a(149)(!1)).push([t.i,"",""])},238:function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={name:"AppFooter"}},239:function(t,e){t.exports={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",["horizontal"==this.$page.configData.mainLayoutType?e("footer",{staticClass:"footer footer-light navbar-shadow",class:this.$page.configData.footerType}):e("footer",{staticClass:"footer footer-light",class:this.$page.configData.footerType},[this._m(0)])])},staticRenderFns:[function(){var t=this.$createElement,e=this._self._c||t;return e("p",{staticClass:"clearfix blue-grey lighten-2 mb-0"},[e("span",{staticClass:"float-md-left d-block d-md-inline-block mt-25"},[this._v("COPYRIGHT © 2019\n\t\t\t\t"),e("a",{staticClass:"text-bold-800 grey darken-2",attrs:{href:"http://teammahal.info/",target:"_blank"}},[this._v("Team Mahal,")]),this._v("\n\t\t\t\tAll rights Reserved\n\t\t\t")]),this._v(" "),e("span",{staticClass:"float-md-right d-none d-md-block"},[this._v("Hand-crafted & Made with"),e("i",{staticClass:"feather icon-heart pink"})]),this._v(" "),e("button",{staticClass:"btn btn-primary btn-icon scroll-top",attrs:{type:"button"}},[e("i",{staticClass:"feather icon-arrow-up"})])])}]}},399:function(t,e,a){var o=a(231)(a(402),a(403),!1,function(t){a(400)},null,null);t.exports=o.exports},400:function(t,e,a){var o=a(401);"string"==typeof o&&(o=[[t.i,o,""]]),o.locals&&(t.exports=o.locals);a(232)("4e74591e",o,!0,{})},401:function(t,e,a){(t.exports=a(149)(!1)).push([t.i,".form-control-position{position:absolute;top:2px;right:0;z-index:2;display:block;width:2.5rem;height:2.5rem;line-height:2.5rem;text-align:center}.has-icon-left .form-control-position{right:auto;left:inherit}.has-icon-left .form-control-position i{position:relative;left:5px;color:rgba(34,41,47,.4)}.has-icon-left .form-control{padding-right:2rem;padding-left:3rem}.position-relative .form-control{padding-right:calc(1.25em + 1.4rem + 1px)}.bg-authentication{background-color:#eff2f7}.bg-authentication .login-footer{padding:0 1.5rem .5rem}.bg-authentication .login-footer .footer-btn .btn{padding:.9rem 1.2rem!important;margin:1rem 1rem 1rem 0}@media (-ms-high-contrast:none),screen and (-ms-high-contrast:active){.bg-authentication{width:100%}}",""])},402:function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var o=a(235),s=a.n(o);e.default={name:"AuthLayout",components:{AppFooter:s.a}}},403:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("body",{staticClass:"vertical-layout vertical-menu-modern 1-column",class:t.$page.configData.blankPageClass+" "+t.$page.configData.navbarType+" "+t.$page.configData.bodyClass+" "+t.$page.configData.footerType+["light"===t.$page.configData.theme?"":t.$page.configData.theme],attrs:{"data-menu":"vertical-menu-modern","data-col":"1-column"}},[a("div",{attrs:{id:"app"}},[a("div",{staticClass:"content-overlay"}),t._v(" "),a("div",{staticClass:"header-navbar-shadow"}),t._v(" "),a("div",{staticClass:"app-content content"},[a("div",{staticClass:"content-wrapper"},[a("div",{staticClass:"content-body"},[t._t("default")],2)])]),t._v(" "),a("app-footer")],1)])},staticRenderFns:[]}},416:function(t,e,a){var o=a(417);"string"==typeof o&&(o=[[t.i,o,""]]),o.locals&&(t.exports=o.locals);a(232)("8229971c",o,!0,{})},417:function(t,e,a){(t.exports=a(149)(!1)).push([t.i,"",""])},418:function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var o=a(399),s=a.n(o);e.default={name:"Register",components:{AuthLayout:s.a},props:{errors:Object},data:function(){return{form:{name:"",shop_name:"",phone:"",email:"",password:"",password_confirmation:"",accepted:!1}}},methods:{register:function(){this.$inertia.post(this.route("register"),{name:this.form.name,shop_name:this.form.shop_name,phone:this.form.phone,email:this.form.email,password:this.form.password,password_confirmation:this.form.password_confirmation})}}}},419:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("auth-layout",[a("section",{staticClass:"row flexbox-container"},[a("div",{staticClass:"col-xl-8 col-10 d-flex justify-content-center"},[a("div",{staticClass:"card bg-authentication rounded-0 mb-0"},[a("div",{staticClass:"row m-0"},[a("div",{staticClass:"col-lg-6 d-lg-block d-none text-center align-self-center pl-0 pr-3 py-0"},[a("img",{attrs:{src:"/images/pages/register.jpg",alt:"branding logo"}})]),t._v(" "),a("div",{staticClass:"col-lg-6 col-12 p-0"},[a("div",{staticClass:"card rounded-0 mb-0 p-2"},[a("div",{staticClass:"card-header pt-50 pb-1"},[a("div",{staticClass:"card-title"},[a("h4",{staticClass:"mb-0"},[t._v("Create Account")])])]),t._v(" "),a("p",{staticClass:"px-2"},[t._v("Fill the below form to create a new account.")]),t._v(" "),a("div",{staticClass:"card-content"},[a("div",{staticClass:"card-body pt-0"},[a("form",{on:{submit:function(e){return e.preventDefault(),t.register(e)}}},[a("div",{staticClass:"form-label-group"},[a("input",{directives:[{name:"model",rawName:"v-model",value:t.form.name,expression:"form.name"}],staticClass:"form-control",class:[t.errors.name?"is-invalid":""],attrs:{type:"text",placeholder:"Name",autocomplete:"name",autofocus:""},domProps:{value:t.form.name},on:{input:function(e){e.target.composing||t.$set(t.form,"name",e.target.value)}}}),t._v(" "),a("label",[t._v("Name")]),t._v(" "),t.errors.name?a("span",{staticClass:"invalid-feedback",attrs:{role:"alert"}},[a("strong",[t._v(t._s(t.errors.name[0]))])]):t._e()]),t._v(" "),a("div",{staticClass:"form-label-group"},[a("input",{directives:[{name:"model",rawName:"v-model",value:t.form.shop_name,expression:"form.shop_name"}],staticClass:"form-control",class:[t.errors.shop_name?"is-invalid":""],attrs:{type:"text",placeholder:"Shop Name",autocomplete:"shop_name"},domProps:{value:t.form.shop_name},on:{input:function(e){e.target.composing||t.$set(t.form,"shop_name",e.target.value)}}}),t._v(" "),a("label",[t._v("shop_name")]),t._v(" "),t.errors.shop_name?a("span",{staticClass:"invalid-feedback",attrs:{role:"alert"}},[a("strong",[t._v(t._s(t.errors.shop_name[0]))])]):t._e()]),t._v(" "),a("div",{staticClass:"form-label-group"},[a("input",{directives:[{name:"model",rawName:"v-model",value:t.form.phone,expression:"form.phone"}],staticClass:"form-control",class:[t.errors.phone?"is-invalid":""],attrs:{type:"text",placeholder:"Contact No.",autocomplete:"phone"},domProps:{value:t.form.phone},on:{input:function(e){e.target.composing||t.$set(t.form,"phone",e.target.value)}}}),t._v(" "),a("label",[t._v("Contact No.")]),t._v(" "),t.errors.phone?a("span",{staticClass:"invalid-feedback",attrs:{role:"alert"}},[a("strong",[t._v(t._s(t.errors.phone[0]))])]):t._e()]),t._v(" "),a("div",{staticClass:"form-label-group"},[a("input",{directives:[{name:"model",rawName:"v-model",value:t.form.email,expression:"form.email"}],staticClass:"form-control",class:[t.errors.email?"is-invalid":""],attrs:{type:"email",placeholder:"Email",autocomplete:"email"},domProps:{value:t.form.email},on:{input:function(e){e.target.composing||t.$set(t.form,"email",e.target.value)}}}),t._v(" "),a("label",[t._v("Email")]),t._v(" "),t.errors.email?a("span",{staticClass:"invalid-feedback",attrs:{role:"alert"}},[a("strong",[t._v(t._s(t.errors.email[0]))])]):t._e()]),t._v(" "),a("div",{staticClass:"form-label-group"},[a("input",{directives:[{name:"model",rawName:"v-model",value:t.form.password,expression:"form.password"}],staticClass:"form-control",class:[t.errors.password?"is-invalid":""],attrs:{type:"password",placeholder:"Password",autocomplete:"new-password"},domProps:{value:t.form.password},on:{input:function(e){e.target.composing||t.$set(t.form,"password",e.target.value)}}}),t._v(" "),a("label",[t._v("Password")]),t._v(" "),t.errors.password?a("span",{staticClass:"invalid-feedback",attrs:{role:"alert"}},[a("strong",[t._v(t._s(t.errors.password[0]))])]):t._e()]),t._v(" "),a("div",{staticClass:"form-label-group"},[a("input",{directives:[{name:"model",rawName:"v-model",value:t.form.password_confirmation,expression:"form.password_confirmation"}],staticClass:"form-control",attrs:{type:"password",name:"password_confirmation",placeholder:"Confirm Password",autocomplete:"new-password"},domProps:{value:t.form.password_confirmation},on:{input:function(e){e.target.composing||t.$set(t.form,"password_confirmation",e.target.value)}}}),t._v(" "),a("label",[t._v("Confirm Password")])]),t._v(" "),a("div",{staticClass:"form-group row"},[a("div",{staticClass:"col-12"},[a("fieldset",{staticClass:"checkbox"},[a("div",{staticClass:"vs-checkbox-con vs-checkbox-primary"},[a("input",{directives:[{name:"model",rawName:"v-model",value:t.form.accepted,expression:"form.accepted"}],attrs:{type:"checkbox"},domProps:{checked:Array.isArray(t.form.accepted)?t._i(t.form.accepted,null)>-1:t.form.accepted},on:{change:function(e){var a=t.form.accepted,o=e.target,s=!!o.checked;if(Array.isArray(a)){var r=t._i(a,null);o.checked?r<0&&t.$set(t.form,"accepted",a.concat([null])):r>-1&&t.$set(t.form,"accepted",a.slice(0,r).concat(a.slice(r+1)))}else t.$set(t.form,"accepted",s)}}}),t._v(" "),a("span",{staticClass:"vs-checkbox"},[a("span",{staticClass:"vs-checkbox--check"},[a("i",{staticClass:"vs-icon feather icon-check"})])]),t._v(" "),a("span",{},[t._v("\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tI accept the terms & conditions.")])])])])]),t._v(" "),a("inertia-link",{staticClass:"btn btn-outline-primary float-left btn-inline mb-50",attrs:{href:"/login"}},[t._v("Login")]),t._v(" "),a("button",{staticClass:"btn btn-primary float-right btn-inline mb-50",class:[t.form.accepted?"":"disabled"],attrs:{type:"submit"}},[t._v("\n\t\t\t\t\t\t\t\t\t\t\tRegister\n\t\t\t\t\t\t\t\t\t\t")])],1)])])])])])])])])])},staticRenderFns:[]}}});
=======
webpackJsonp([29],{

/***/ 155:
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(416)
}
var normalizeComponent = __webpack_require__(231)
/* script */
var __vue_script__ = __webpack_require__(418)
/* template */
var __vue_template__ = __webpack_require__(419)
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
Component.options.__file = "resources/js/Pages/Auth/Register.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-e59c811e", Component.options)
  } else {
    hotAPI.reload("data-v-e59c811e", Component.options)
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

/***/ 416:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(417);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(232)("76de52f1", content, false, {});
// Hot Module Replacement
if(false) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept("!!../../../../node_modules/css-loader/index.js!../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-e59c811e\",\"scoped\":false,\"hasInlineConfig\":true}!../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./Register.vue", function() {
     var newContent = require("!!../../../../node_modules/css-loader/index.js!../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-e59c811e\",\"scoped\":false,\"hasInlineConfig\":true}!../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./Register.vue");
     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ 417:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(149)(false);
// imports


// module
exports.push([module.i, "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", ""]);

// exports


/***/ }),

/***/ 418:
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
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
  name: "Register",
  components: {
    AuthLayout: __WEBPACK_IMPORTED_MODULE_0__Shared_AuthLayout___default.a
  },
  props: {
    errors: Object
  },
  data: function data() {
    return {
      form: {
        name: "",
        shop_name: "",
        phone: "",
        email: "",
        password: "",
        password_confirmation: "",
        accepted: false
      }
    };
  },
  methods: {
    register: function register() {
      this.$inertia.post(this.route("register"), {
        name: this.form.name,
        shop_name: this.form.shop_name,
        phone: this.form.phone,
        email: this.form.email,
        password: this.form.password,
        password_confirmation: this.form.password_confirmation
      });
    }
  }
});

/***/ }),

/***/ 419:
/***/ (function(module, exports, __webpack_require__) {

var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("auth-layout", [
    _c("section", { staticClass: "row flexbox-container" }, [
      _c(
        "div",
        { staticClass: "col-xl-8 col-10 d-flex justify-content-center" },
        [
          _c("div", { staticClass: "card bg-authentication rounded-0 mb-0" }, [
            _c("div", { staticClass: "row m-0" }, [
              _c(
                "div",
                {
                  staticClass:
                    "col-lg-6 d-lg-block d-none text-center align-self-center pl-0 pr-3 py-0"
                },
                [
                  _c("img", {
                    attrs: {
                      src: "/images/pages/register.jpg",
                      alt: "branding logo"
                    }
                  })
                ]
              ),
              _vm._v(" "),
              _c("div", { staticClass: "col-lg-6 col-12 p-0" }, [
                _c("div", { staticClass: "card rounded-0 mb-0 p-2" }, [
                  _c("div", { staticClass: "card-header pt-50 pb-1" }, [
                    _c("div", { staticClass: "card-title" }, [
                      _c("h4", { staticClass: "mb-0" }, [
                        _vm._v("Create Account")
                      ])
                    ])
                  ]),
                  _vm._v(" "),
                  _c("p", { staticClass: "px-2" }, [
                    _vm._v("Fill the below form to create a new account.")
                  ]),
                  _vm._v(" "),
                  _c("div", { staticClass: "card-content" }, [
                    _c("div", { staticClass: "card-body pt-0" }, [
                      _c(
                        "form",
                        {
                          on: {
                            submit: function($event) {
                              $event.preventDefault()
                              return _vm.register($event)
                            }
                          }
                        },
                        [
                          _c("div", { staticClass: "form-label-group" }, [
                            _c("input", {
                              directives: [
                                {
                                  name: "model",
                                  rawName: "v-model",
                                  value: _vm.form.name,
                                  expression: "form.name"
                                }
                              ],
                              staticClass: "form-control",
                              class: [_vm.errors.name ? "is-invalid" : ""],
                              attrs: {
                                type: "text",
                                placeholder: "Name",
                                autocomplete: "name",
                                autofocus: ""
                              },
                              domProps: { value: _vm.form.name },
                              on: {
                                input: function($event) {
                                  if ($event.target.composing) {
                                    return
                                  }
                                  _vm.$set(
                                    _vm.form,
                                    "name",
                                    $event.target.value
                                  )
                                }
                              }
                            }),
                            _vm._v(" "),
                            _c("label", [_vm._v("Name")]),
                            _vm._v(" "),
                            _vm.errors.name
                              ? _c(
                                  "span",
                                  {
                                    staticClass: "invalid-feedback",
                                    attrs: { role: "alert" }
                                  },
                                  [
                                    _c("strong", [
                                      _vm._v(_vm._s(_vm.errors.name[0]))
                                    ])
                                  ]
                                )
                              : _vm._e()
                          ]),
                          _vm._v(" "),
                          _c("div", { staticClass: "form-label-group" }, [
                            _c("input", {
                              directives: [
                                {
                                  name: "model",
                                  rawName: "v-model",
                                  value: _vm.form.shop_name,
                                  expression: "form.shop_name"
                                }
                              ],
                              staticClass: "form-control",
                              class: [_vm.errors.shop_name ? "is-invalid" : ""],
                              attrs: {
                                type: "text",
                                placeholder: "Shop Name",
                                autocomplete: "shop_name"
                              },
                              domProps: { value: _vm.form.shop_name },
                              on: {
                                input: function($event) {
                                  if ($event.target.composing) {
                                    return
                                  }
                                  _vm.$set(
                                    _vm.form,
                                    "shop_name",
                                    $event.target.value
                                  )
                                }
                              }
                            }),
                            _vm._v(" "),
                            _c("label", [_vm._v("shop_name")]),
                            _vm._v(" "),
                            _vm.errors.shop_name
                              ? _c(
                                  "span",
                                  {
                                    staticClass: "invalid-feedback",
                                    attrs: { role: "alert" }
                                  },
                                  [
                                    _c("strong", [
                                      _vm._v(_vm._s(_vm.errors.shop_name[0]))
                                    ])
                                  ]
                                )
                              : _vm._e()
                          ]),
                          _vm._v(" "),
                          _c("div", { staticClass: "form-label-group" }, [
                            _c("input", {
                              directives: [
                                {
                                  name: "model",
                                  rawName: "v-model",
                                  value: _vm.form.phone,
                                  expression: "form.phone"
                                }
                              ],
                              staticClass: "form-control",
                              class: [_vm.errors.phone ? "is-invalid" : ""],
                              attrs: {
                                type: "text",
                                placeholder: "Contact No.",
                                autocomplete: "phone"
                              },
                              domProps: { value: _vm.form.phone },
                              on: {
                                input: function($event) {
                                  if ($event.target.composing) {
                                    return
                                  }
                                  _vm.$set(
                                    _vm.form,
                                    "phone",
                                    $event.target.value
                                  )
                                }
                              }
                            }),
                            _vm._v(" "),
                            _c("label", [_vm._v("Contact No.")]),
                            _vm._v(" "),
                            _vm.errors.phone
                              ? _c(
                                  "span",
                                  {
                                    staticClass: "invalid-feedback",
                                    attrs: { role: "alert" }
                                  },
                                  [
                                    _c("strong", [
                                      _vm._v(_vm._s(_vm.errors.phone[0]))
                                    ])
                                  ]
                                )
                              : _vm._e()
                          ]),
                          _vm._v(" "),
                          _c("div", { staticClass: "form-label-group" }, [
                            _c("input", {
                              directives: [
                                {
                                  name: "model",
                                  rawName: "v-model",
                                  value: _vm.form.email,
                                  expression: "form.email"
                                }
                              ],
                              staticClass: "form-control",
                              class: [_vm.errors.email ? "is-invalid" : ""],
                              attrs: {
                                type: "email",
                                placeholder: "Email",
                                autocomplete: "email"
                              },
                              domProps: { value: _vm.form.email },
                              on: {
                                input: function($event) {
                                  if ($event.target.composing) {
                                    return
                                  }
                                  _vm.$set(
                                    _vm.form,
                                    "email",
                                    $event.target.value
                                  )
                                }
                              }
                            }),
                            _vm._v(" "),
                            _c("label", [_vm._v("Email")]),
                            _vm._v(" "),
                            _vm.errors.email
                              ? _c(
                                  "span",
                                  {
                                    staticClass: "invalid-feedback",
                                    attrs: { role: "alert" }
                                  },
                                  [
                                    _c("strong", [
                                      _vm._v(_vm._s(_vm.errors.email[0]))
                                    ])
                                  ]
                                )
                              : _vm._e()
                          ]),
                          _vm._v(" "),
                          _c("div", { staticClass: "form-label-group" }, [
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
                              class: [_vm.errors.password ? "is-invalid" : ""],
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
                                      _vm._v(_vm._s(_vm.errors.password[0]))
                                    ])
                                  ]
                                )
                              : _vm._e()
                          ]),
                          _vm._v(" "),
                          _c("div", { staticClass: "form-label-group" }, [
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
                                name: "password_confirmation",
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
                          ]),
                          _vm._v(" "),
                          _c("div", { staticClass: "form-group row" }, [
                            _c("div", { staticClass: "col-12" }, [
                              _c("fieldset", { staticClass: "checkbox" }, [
                                _c(
                                  "div",
                                  {
                                    staticClass:
                                      "vs-checkbox-con vs-checkbox-primary"
                                  },
                                  [
                                    _c("input", {
                                      directives: [
                                        {
                                          name: "model",
                                          rawName: "v-model",
                                          value: _vm.form.accepted,
                                          expression: "form.accepted"
                                        }
                                      ],
                                      attrs: { type: "checkbox" },
                                      domProps: {
                                        checked: Array.isArray(
                                          _vm.form.accepted
                                        )
                                          ? _vm._i(_vm.form.accepted, null) > -1
                                          : _vm.form.accepted
                                      },
                                      on: {
                                        change: function($event) {
                                          var $$a = _vm.form.accepted,
                                            $$el = $event.target,
                                            $$c = $$el.checked ? true : false
                                          if (Array.isArray($$a)) {
                                            var $$v = null,
                                              $$i = _vm._i($$a, $$v)
                                            if ($$el.checked) {
                                              $$i < 0 &&
                                                _vm.$set(
                                                  _vm.form,
                                                  "accepted",
                                                  $$a.concat([$$v])
                                                )
                                            } else {
                                              $$i > -1 &&
                                                _vm.$set(
                                                  _vm.form,
                                                  "accepted",
                                                  $$a
                                                    .slice(0, $$i)
                                                    .concat($$a.slice($$i + 1))
                                                )
                                            }
                                          } else {
                                            _vm.$set(_vm.form, "accepted", $$c)
                                          }
                                        }
                                      }
                                    }),
                                    _vm._v(" "),
                                    _c("span", { staticClass: "vs-checkbox" }, [
                                      _c(
                                        "span",
                                        { staticClass: "vs-checkbox--check" },
                                        [
                                          _c("i", {
                                            staticClass:
                                              "vs-icon feather icon-check"
                                          })
                                        ]
                                      )
                                    ]),
                                    _vm._v(" "),
                                    _c("span", {}, [
                                      _vm._v(
                                        "\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tI accept the terms & conditions."
                                      )
                                    ])
                                  ]
                                )
                              ])
                            ])
                          ]),
                          _vm._v(" "),
                          _c(
                            "inertia-link",
                            {
                              staticClass:
                                "btn btn-outline-primary float-left btn-inline mb-50",
                              attrs: { href: "/login" }
                            },
                            [_vm._v("Login")]
                          ),
                          _vm._v(" "),
                          _c(
                            "button",
                            {
                              staticClass:
                                "btn btn-primary float-right btn-inline mb-50",
                              class: [_vm.form.accepted ? "" : "disabled"],
                              attrs: { type: "submit" }
                            },
                            [
                              _vm._v(
                                "\n\t\t\t\t\t\t\t\t\t\t\tRegister\n\t\t\t\t\t\t\t\t\t\t"
                              )
                            ]
                          )
                        ],
                        1
                      )
                    ])
                  ])
                ])
              ])
            ])
          ])
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
    require("vue-hot-reload-api")      .rerender("data-v-e59c811e", module.exports)
  }
}

/***/ })

});
>>>>>>> 57d8579bea4cf58db48c584e37a5960227da494e
