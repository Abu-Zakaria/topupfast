<<<<<<< HEAD
webpackJsonp([28],{156:function(e,t,o){var s=o(231)(o(423),o(424),!1,function(e){o(420)},null,null);e.exports=s.exports},231:function(e,t){e.exports=function(e,t,o,s,i,r){var a,n=e=e||{},l=typeof e.default;"object"!==l&&"function"!==l||(a=e,n=e.default);var c,p="function"==typeof n?n.options:n;if(t&&(p.render=t.render,p.staticRenderFns=t.staticRenderFns,p._compiled=!0),o&&(p.functional=!0),i&&(p._scopeId=i),r?(c=function(e){(e=e||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext)||"undefined"==typeof __VUE_SSR_CONTEXT__||(e=__VUE_SSR_CONTEXT__),s&&s.call(this,e),e&&e._registeredComponents&&e._registeredComponents.add(r)},p._ssrRegister=c):s&&(c=s),c){var d=p.functional,m=d?p.render:p.beforeCreate;d?(p._injectStyles=c,p.render=function(e,t){return c.call(t),m(e,t)}):p.beforeCreate=m?[].concat(m,c):[c]}return{esModule:a,exports:n,options:p}}},232:function(e,t,o){var s="undefined"!=typeof document;if("undefined"!=typeof DEBUG&&DEBUG&&!s)throw new Error("vue-style-loader cannot be used in a non-browser environment. Use { target: 'node' } in your Webpack config to indicate a server-rendering environment.");var i=o(234),r={},a=s&&(document.head||document.getElementsByTagName("head")[0]),n=null,l=0,c=!1,p=function(){},d=null,m="data-vue-ssr-id",u="undefined"!=typeof navigator&&/msie [6-9]\b/.test(navigator.userAgent.toLowerCase());function f(e){for(var t=0;t<e.length;t++){var o=e[t],s=r[o.id];if(s){s.refs++;for(var i=0;i<s.parts.length;i++)s.parts[i](o.parts[i]);for(;i<o.parts.length;i++)s.parts.push(v(o.parts[i]));s.parts.length>o.parts.length&&(s.parts.length=o.parts.length)}else{var a=[];for(i=0;i<o.parts.length;i++)a.push(v(o.parts[i]));r[o.id]={id:o.id,refs:1,parts:a}}}}function h(){var e=document.createElement("style");return e.type="text/css",a.appendChild(e),e}function v(e){var t,o,s=document.querySelector("style["+m+'~="'+e.id+'"]');if(s){if(c)return p;s.parentNode.removeChild(s)}if(u){var i=l++;s=n||(n=h()),t=g.bind(null,s,i,!1),o=g.bind(null,s,i,!0)}else s=h(),t=function(e,t){var o=t.css,s=t.media,i=t.sourceMap;s&&e.setAttribute("media",s);d.ssrId&&e.setAttribute(m,t.id);i&&(o+="\n/*# sourceURL="+i.sources[0]+" */",o+="\n/*# sourceMappingURL=data:application/json;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(i))))+" */");if(e.styleSheet)e.styleSheet.cssText=o;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(o))}}.bind(null,s),o=function(){s.parentNode.removeChild(s)};return t(e),function(s){if(s){if(s.css===e.css&&s.media===e.media&&s.sourceMap===e.sourceMap)return;t(e=s)}else o()}}e.exports=function(e,t,o,s){c=o,d=s||{};var a=i(e,t);return f(a),function(t){for(var o=[],s=0;s<a.length;s++){var n=a[s];(l=r[n.id]).refs--,o.push(l)}t?f(a=i(e,t)):a=[];for(s=0;s<o.length;s++){var l;if(0===(l=o[s]).refs){for(var c=0;c<l.parts.length;c++)l.parts[c]();delete r[l.id]}}}};var _,b=(_=[],function(e,t){return _[e]=t,_.filter(Boolean).join("\n")});function g(e,t,o,s){var i=o?"":s.css;if(e.styleSheet)e.styleSheet.cssText=b(t,i);else{var r=document.createTextNode(i),a=e.childNodes;a[t]&&e.removeChild(a[t]),a.length?e.insertBefore(r,a[t]):e.appendChild(r)}}},234:function(e,t){e.exports=function(e,t){for(var o=[],s={},i=0;i<t.length;i++){var r=t[i],a=r[0],n={id:e+":"+i,css:r[1],media:r[2],sourceMap:r[3]};s[a]?s[a].parts.push(n):o.push(s[a]={id:a,parts:[n]})}return o}},235:function(e,t,o){var s=o(231)(o(238),o(239),!1,function(e){o(236)},null,null);e.exports=s.exports},236:function(e,t,o){var s=o(237);"string"==typeof s&&(s=[[e.i,s,""]]),s.locals&&(e.exports=s.locals);o(232)("a3630c76",s,!0,{})},237:function(e,t,o){(e.exports=o(149)(!1)).push([e.i,"",""])},238:function(e,t,o){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default={name:"AppFooter"}},239:function(e,t){e.exports={render:function(){var e=this.$createElement,t=this._self._c||e;return t("div",["horizontal"==this.$page.configData.mainLayoutType?t("footer",{staticClass:"footer footer-light navbar-shadow",class:this.$page.configData.footerType}):t("footer",{staticClass:"footer footer-light",class:this.$page.configData.footerType},[this._m(0)])])},staticRenderFns:[function(){var e=this.$createElement,t=this._self._c||e;return t("p",{staticClass:"clearfix blue-grey lighten-2 mb-0"},[t("span",{staticClass:"float-md-left d-block d-md-inline-block mt-25"},[this._v("COPYRIGHT © 2019\n\t\t\t\t"),t("a",{staticClass:"text-bold-800 grey darken-2",attrs:{href:"http://teammahal.info/",target:"_blank"}},[this._v("Team Mahal,")]),this._v("\n\t\t\t\tAll rights Reserved\n\t\t\t")]),this._v(" "),t("span",{staticClass:"float-md-right d-none d-md-block"},[this._v("Hand-crafted & Made with"),t("i",{staticClass:"feather icon-heart pink"})]),this._v(" "),t("button",{staticClass:"btn btn-primary btn-icon scroll-top",attrs:{type:"button"}},[t("i",{staticClass:"feather icon-arrow-up"})])])}]}},399:function(e,t,o){var s=o(231)(o(402),o(403),!1,function(e){o(400)},null,null);e.exports=s.exports},400:function(e,t,o){var s=o(401);"string"==typeof s&&(s=[[e.i,s,""]]),s.locals&&(e.exports=s.locals);o(232)("4e74591e",s,!0,{})},401:function(e,t,o){(e.exports=o(149)(!1)).push([e.i,".form-control-position{position:absolute;top:2px;right:0;z-index:2;display:block;width:2.5rem;height:2.5rem;line-height:2.5rem;text-align:center}.has-icon-left .form-control-position{right:auto;left:inherit}.has-icon-left .form-control-position i{position:relative;left:5px;color:rgba(34,41,47,.4)}.has-icon-left .form-control{padding-right:2rem;padding-left:3rem}.position-relative .form-control{padding-right:calc(1.25em + 1.4rem + 1px)}.bg-authentication{background-color:#eff2f7}.bg-authentication .login-footer{padding:0 1.5rem .5rem}.bg-authentication .login-footer .footer-btn .btn{padding:.9rem 1.2rem!important;margin:1rem 1rem 1rem 0}@media (-ms-high-contrast:none),screen and (-ms-high-contrast:active){.bg-authentication{width:100%}}",""])},402:function(e,t,o){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var s=o(235),i=o.n(s);t.default={name:"AuthLayout",components:{AppFooter:i.a}}},403:function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("body",{staticClass:"vertical-layout vertical-menu-modern 1-column",class:e.$page.configData.blankPageClass+" "+e.$page.configData.navbarType+" "+e.$page.configData.bodyClass+" "+e.$page.configData.footerType+["light"===e.$page.configData.theme?"":e.$page.configData.theme],attrs:{"data-menu":"vertical-menu-modern","data-col":"1-column"}},[o("div",{attrs:{id:"app"}},[o("div",{staticClass:"content-overlay"}),e._v(" "),o("div",{staticClass:"header-navbar-shadow"}),e._v(" "),o("div",{staticClass:"app-content content"},[o("div",{staticClass:"content-wrapper"},[o("div",{staticClass:"content-body"},[e._t("default")],2)])]),e._v(" "),o("app-footer")],1)])},staticRenderFns:[]}},420:function(e,t,o){var s=o(421);"string"==typeof s&&(s=[[e.i,s,""]]),s.locals&&(e.exports=s.locals);o(232)("62fbc6ca",s,!0,{})},421:function(e,t,o){(t=e.exports=o(149)(!1)).i(o(422),""),t.push([e.i,"",""])},422:function(e,t,o){(e.exports=o(149)(!1)).push([e.i,".vue__time-picker{display:inline-block;position:relative;font-size:1em;width:10em;font-family:sans-serif;vertical-align:middle}.vue__time-picker *{-webkit-box-sizing:border-box;box-sizing:border-box}.vue__time-picker input.display-time{border:1px solid #d2d2d2;width:10em;height:2.2em;padding:.3em .5em;font-size:1em}.vue__time-picker input.has-custom-icon{padding-left:1.8em}.vue__time-picker input.display-time.invalid:not(.skip-error-style){border-color:#c03;outline-color:#c03}.vue__time-picker input.display-time.disabled,.vue__time-picker input.display-time:disabled{color:#d2d2d2}.vue__time-picker .controls{position:absolute;top:0;bottom:0;right:0;z-index:3;-webkit-box-orient:horizontal;-ms-flex-flow:row nowrap;flex-flow:row nowrap;-webkit-box-pack:end;-ms-flex-pack:end;justify-content:flex-end;-webkit-box-align:stretch;-ms-flex-align:stretch;align-items:stretch;pointer-events:none}.vue__time-picker .controls,.vue__time-picker .controls>*{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-direction:normal}.vue__time-picker .controls>*{cursor:pointer;width:auto;-webkit-box-orient:vertical;-ms-flex-flow:column nowrap;flex-flow:column nowrap;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;padding:0 .35em;color:#d2d2d2;line-height:100%;font-style:normal;pointer-events:auto;-webkit-transition:color .2s,opacity .2s;transition:color .2s,opacity .2s}.vue__time-picker .controls>:hover{color:#797979}.vue__time-picker .controls>:active,.vue__time-picker .controls>:focus{outline:0}.vue__time-picker .controls .char{font-size:1.1em;line-height:100%;-webkit-margin-before:-.15em}.vue__time-picker .custom-icon{z-index:2;position:absolute;left:0;top:0;bottom:0;width:1.8em;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-ms-flex-flow:column nowrap;flex-flow:column nowrap;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;pointer-events:none}.vue__time-picker .controls img,.vue__time-picker .controls svg,.vue__time-picker .custom-icon img,.vue__time-picker .custom-icon svg{display:inline-block;vertical-align:middle;margin:0;border:0;outline:0;max-width:1em;height:auto}.vue__time-picker .time-picker-overlay{z-index:4;position:fixed;top:0;left:0;right:0;bottom:0}.vue__time-picker .dropdown{position:absolute;z-index:5;top:calc(2.2em + 2px);left:0;background:#fff;-webkit-box-shadow:0 1px 6px rgba(0,0,0,.15);box-shadow:0 1px 6px rgba(0,0,0,.15);width:10em;height:10em;font-weight:400}.vue__time-picker .dropdown.drop-up{top:auto;bottom:calc(2.2em + 1px)}.vue__time-picker .dropdown .select-list{width:10em;height:10em;overflow:hidden;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-ms-flex-flow:row nowrap;flex-flow:row nowrap;-webkit-box-align:stretch;-ms-flex-align:stretch;align-items:stretch;-webkit-box-pack:justify;-ms-flex-pack:justify;justify-content:space-between}.vue__time-picker .dropdown .select-list:active,.vue__time-picker .dropdown .select-list:focus{outline:0}.vue__time-picker .dropdown ul{padding:0;margin:0;list-style:none;outline:0;-webkit-box-flex:1;-ms-flex:1 1 0.00001px;flex:1 1 0.00001px;overflow-x:hidden;overflow-y:auto}.vue__time-picker .dropdown ul.apms,.vue__time-picker .dropdown ul.minutes,.vue__time-picker .dropdown ul.seconds{border-left:1px solid #fff}.vue__time-picker .dropdown ul li{list-style:none;text-align:center;padding:.3em 0;color:#161616}.vue__time-picker .dropdown ul li:not(.hint):not([disabled]):focus,.vue__time-picker .dropdown ul li:not(.hint):not([disabled]):hover{background:rgba(0,0,0,.08);color:#161616;cursor:pointer}.vue__time-picker .dropdown ul li:not([disabled]).active,.vue__time-picker .dropdown ul li:not([disabled]).active:focus,.vue__time-picker .dropdown ul li:not([disabled]).active:hover{background:#41b883;color:#fff}.vue__time-picker .dropdown ul li[disabled],.vue__time-picker .dropdown ul li[disabled]:hover{background:transparent;opacity:.3;cursor:not-allowed}.vue__time-picker .dropdown .hint{color:#a5a5a5;cursor:default;font-size:.8em}",""])},423:function(e,t,o){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var s=o(399),i=o.n(s);t.default={name:"Subscribe",components:{AuthLayout:i.a},props:{errors:Object},data:function(){return{form:{shop_name:"",shop_phone:"",shop_email:"",shop_address:"",shop_logo:null,shop_open:"",shop_close:"",accepted:!1},shop_logo_url:""}},methods:{showImage:function(e){var t=e.target.files[0];this.form.shop_logo=t,this.shop_logo_url=URL.createObjectURL(t)},subscribe:function(){var e=new FormData;e.append("shop_name",this.form.shop_name),e.append("shop_phone",this.form.shop_phone),e.append("shop_email",this.form.shop_email),e.append("shop_address",this.form.shop_address),e.append("shop_logo",this.form.shop_logo),e.append("shop_open",this.form.shop_open),e.append("shop_close",this.form.shop_close),this.$inertia.post(this.route("subscribe.store"),e)}}}},424:function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("auth-layout",{attrs:{name:"Subscribe"}},[o("section",{staticClass:"row flexbox-container"},[o("div",{staticClass:"col-xl-12 col-10 d-flex justify-content-center"},[o("div",{staticClass:"card bg-authentication rounded-0 mb-0"},[o("div",{staticClass:"row m-0"},[o("div",{staticClass:"col-lg-12 d-lg-block d-none text-center align-self-center pl-0 pr-3 py-0"},[o("img",{attrs:{src:"/images/pages/register.jpg",alt:"branding logo"}})]),e._v(" "),o("div",{staticClass:"col-12 p-0"},[o("div",{staticClass:"card rounded-0 mb-0 p-2"},[o("div",{staticClass:"card-header pt-50 pb-1"},[o("div",{staticClass:"card-title"},[o("h4",{staticClass:"mb-0"},[e._v("Subscribe Now")])])]),e._v(" "),o("div",{staticClass:"card-content"},[o("div",{staticClass:"card-body pt-0"},[o("form",{on:{submit:function(t){return t.preventDefault(),e.subscribe(t)}}},[o("div",{staticClass:"row form-label-group"},[o("div",{staticClass:"col-md-4 col-sm-12"},[o("label",[e._v("Shop Name "),o("span",{staticClass:"text-danger"},[e._v("*")])]),e._v(" "),o("input",{directives:[{name:"model",rawName:"v-model",value:e.form.shop_name,expression:"form.shop_name"}],staticClass:"form-control",class:[e.errors.shop_name?"is-invalid":""],attrs:{type:"text",placeholder:"Shop Name",autofocus:""},domProps:{value:e.form.shop_name},on:{input:function(t){t.target.composing||e.$set(e.form,"shop_name",t.target.value)}}}),e._v(" "),e.errors.shop_name?o("span",{staticClass:"invalid-feedback",attrs:{role:"alert"}},[o("strong",[e._v(e._s(e.errors.shop_name[0]))])]):e._e()]),e._v(" "),o("div",{staticClass:"col-md-4 col-sm-12"},[o("label",[e._v("Shop Contact No.\n                          "),o("span",{staticClass:"text-danger"},[e._v("*")])]),e._v(" "),o("input",{directives:[{name:"model",rawName:"v-model",value:e.form.shop_phone,expression:"form.shop_phone"}],staticClass:"form-control",class:[e.errors.shop_phone?"is-invalid":""],attrs:{type:"text",placeholder:"Shop Contact No."},domProps:{value:e.form.shop_phone},on:{input:function(t){t.target.composing||e.$set(e.form,"shop_phone",t.target.value)}}}),e._v(" "),e.errors.shop_phone?o("span",{staticClass:"invalid-feedback",attrs:{role:"alert"}},[o("strong",[e._v(e._s(e.errors.shop_phone[0]))])]):e._e()]),e._v(" "),o("div",{staticClass:"col-md-4 col-sm-12"},[o("label",[e._v("Shop Email")]),e._v(" "),o("input",{directives:[{name:"model",rawName:"v-model",value:e.form.shop_email,expression:"form.shop_email"}],staticClass:"form-control",class:[e.errors.shop_email?"is-invalid":""],attrs:{type:"email",placeholder:"Shop Email"},domProps:{value:e.form.shop_email},on:{input:function(t){t.target.composing||e.$set(e.form,"shop_email",t.target.value)}}}),e._v(" "),e.errors.shop_email?o("span",{staticClass:"invalid-feedback",attrs:{role:"alert"}},[o("strong",[e._v(e._s(e.errors.shop_email[0]))])]):e._e()])]),e._v(" "),o("div",{staticClass:"row form-label-group"},[o("div",{staticClass:"col-md-4 col-sm-12 text-center"},[o("label",[e._v("Shop Logo")]),e._v(" "),o("div",{staticClass:"banner-logo-upload-box mx-auto",staticStyle:{width:"200px",height:"200px",border:"1px solid #ddd","border-radius":"4px","box-shadow":"0px 0px 6px 4px rgba(0, 0, 0, 0.1)"}},[o("img",{staticClass:"users-avatar-shadow rounded",attrs:{id:"avatar",height:"90",width:"90",src:e.shop_logo_url,alt:""}}),e._v(" "),o("label",{staticClass:"btn-pill"},[o("i",{staticClass:"fa fa-camera"}),e._v(" "),o("input",{staticClass:"hidden",attrs:{id:"image",type:"file",name:"avatar"},on:{change:e.showImage}})])])]),e._v(" "),o("div",{staticClass:"col-md-8 col-sm-12"},[o("div",{staticClass:"row form-group"},[o("div",{staticClass:"col-12"},[o("label",[e._v("Shop Address\n                              "),o("span",{staticClass:"text-danger"},[e._v("*")])]),e._v(" "),o("textarea",{directives:[{name:"model",rawName:"v-model",value:e.form.shop_address,expression:"form.shop_address"}],staticClass:"form-control",class:[e.errors.shop_address?"is-invalid":""],attrs:{rows:"3"},domProps:{value:e.form.shop_address},on:{input:function(t){t.target.composing||e.$set(e.form,"shop_address",t.target.value)}}}),e._v(" "),e.errors.shop_address?o("span",{staticClass:"invalid-feedback",attrs:{role:"alert"}},[o("strong",[e._v(e._s(e.errors.shop_address[0]))])]):e._e()])]),e._v(" "),o("div",{staticClass:"row form-group"},[o("div",{staticClass:"col-md-6 col-sm-12"},[o("label",[e._v("Shop Start At")]),e._v(" "),o("vue-timepicker",{class:[e.errors.shop_open?"is-invalid":""],attrs:{placeholder:"Shop Close At",format:"hh:mm A"},model:{value:e.form.shop_open,callback:function(t){e.$set(e.form,"shop_open",t)},expression:"form.shop_open"}}),e._v(" "),e.errors.shop_open?o("span",{staticClass:"invalid-feedback",attrs:{role:"alert"}},[o("strong",[e._v(e._s(e.errors.shop_open[0]))])]):e._e()],1),e._v(" "),o("div",{staticClass:"col-md-6 col-sm-12"},[o("label",[e._v("Shop Close At")]),e._v(" "),o("vue-timepicker",{class:[e.errors.shop_close?"is-invalid":""],attrs:{placeholder:"Shop Close At",format:"hh:mm A"},model:{value:e.form.shop_close,callback:function(t){e.$set(e.form,"shop_close",t)},expression:"form.shop_close"}}),e._v(" "),e.errors.shop_close?o("span",{staticClass:"invalid-feedback",attrs:{role:"alert"}},[o("strong",[e._v(e._s(e.errors.shop_close[0]))])]):e._e()],1)])])]),e._v(" "),o("div",{staticClass:"form-group row"},[o("div",{staticClass:"col-12"},[o("fieldset",{staticClass:"checkbox"},[o("div",{staticClass:"vs-checkbox-con vs-checkbox-primary"},[o("input",{directives:[{name:"model",rawName:"v-model",value:e.form.accepted,expression:"form.accepted"}],attrs:{type:"checkbox"},domProps:{checked:Array.isArray(e.form.accepted)?e._i(e.form.accepted,null)>-1:e.form.accepted},on:{change:function(t){var o=e.form.accepted,s=t.target,i=!!s.checked;if(Array.isArray(o)){var r=e._i(o,null);s.checked?r<0&&e.$set(e.form,"accepted",o.concat([null])):r>-1&&e.$set(e.form,"accepted",o.slice(0,r).concat(o.slice(r+1)))}else e.$set(e.form,"accepted",i)}}}),e._v(" "),o("span",{staticClass:"vs-checkbox"},[o("span",{staticClass:"vs-checkbox--check"},[o("i",{staticClass:"vs-icon feather icon-check"})])]),e._v(" "),o("span",{},[e._v("\n                              I accept the terms & conditions.")])])])])]),e._v(" "),o("inertia-link",{staticClass:"btn btn-outline-primary float-left btn-inline mb-50",attrs:{href:"/login"}},[e._v("Login")]),e._v(" "),o("button",{staticClass:"btn btn-primary float-right btn-inline mb-50",class:[e.form.accepted?"":"disabled"],attrs:{type:"submit"}},[e._v("\n                      Subscribe Now\n                    ")])],1)])])])])])])])])])},staticRenderFns:[]}}});
=======
webpackJsonp([28],{

/***/ 156:
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(420)
}
var normalizeComponent = __webpack_require__(231)
/* script */
var __vue_script__ = __webpack_require__(423)
/* template */
var __vue_template__ = __webpack_require__(424)
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
Component.options.__file = "resources/js/Pages/Auth/Subscription.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-2f7751eb", Component.options)
  } else {
    hotAPI.reload("data-v-2f7751eb", Component.options)
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

/***/ 420:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(421);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(232)("179f9caa", content, false, {});
// Hot Module Replacement
if(false) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept("!!../../../../node_modules/css-loader/index.js!../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-2f7751eb\",\"scoped\":false,\"hasInlineConfig\":true}!../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./Subscription.vue", function() {
     var newContent = require("!!../../../../node_modules/css-loader/index.js!../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-2f7751eb\",\"scoped\":false,\"hasInlineConfig\":true}!../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./Subscription.vue");
     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ 421:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(149)(false);
// imports
exports.i(__webpack_require__(422), "");

// module
exports.push([module.i, "\n", ""]);

// exports


/***/ }),

/***/ 422:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(149)(false);
// imports


// module
exports.push([module.i, ".vue__time-picker{display:inline-block;position:relative;font-size:1em;width:10em;font-family:sans-serif;vertical-align:middle}.vue__time-picker *{-webkit-box-sizing:border-box;box-sizing:border-box}.vue__time-picker input.display-time{border:1px solid #d2d2d2;width:10em;height:2.2em;padding:.3em .5em;font-size:1em}.vue__time-picker input.has-custom-icon{padding-left:1.8em}.vue__time-picker input.display-time.invalid:not(.skip-error-style){border-color:#c03;outline-color:#c03}.vue__time-picker input.display-time.disabled,.vue__time-picker input.display-time:disabled{color:#d2d2d2}.vue__time-picker .controls{position:absolute;top:0;bottom:0;right:0;z-index:3;-webkit-box-orient:horizontal;-ms-flex-flow:row nowrap;flex-flow:row nowrap;-webkit-box-pack:end;-ms-flex-pack:end;justify-content:flex-end;-webkit-box-align:stretch;-ms-flex-align:stretch;align-items:stretch;pointer-events:none}.vue__time-picker .controls,.vue__time-picker .controls>*{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-direction:normal}.vue__time-picker .controls>*{cursor:pointer;width:auto;-webkit-box-orient:vertical;-ms-flex-flow:column nowrap;flex-flow:column nowrap;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;padding:0 .35em;color:#d2d2d2;line-height:100%;font-style:normal;pointer-events:auto;-webkit-transition:color .2s,opacity .2s;transition:color .2s,opacity .2s}.vue__time-picker .controls>:hover{color:#797979}.vue__time-picker .controls>:active,.vue__time-picker .controls>:focus{outline:0}.vue__time-picker .controls .char{font-size:1.1em;line-height:100%;-webkit-margin-before:-.15em}.vue__time-picker .custom-icon{z-index:2;position:absolute;left:0;top:0;bottom:0;width:1.8em;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-ms-flex-flow:column nowrap;flex-flow:column nowrap;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;pointer-events:none}.vue__time-picker .controls img,.vue__time-picker .controls svg,.vue__time-picker .custom-icon img,.vue__time-picker .custom-icon svg{display:inline-block;vertical-align:middle;margin:0;border:0;outline:0;max-width:1em;height:auto}.vue__time-picker .time-picker-overlay{z-index:4;position:fixed;top:0;left:0;right:0;bottom:0}.vue__time-picker .dropdown{position:absolute;z-index:5;top:calc(2.2em + 2px);left:0;background:#fff;-webkit-box-shadow:0 1px 6px rgba(0,0,0,.15);box-shadow:0 1px 6px rgba(0,0,0,.15);width:10em;height:10em;font-weight:400}.vue__time-picker .dropdown.drop-up{top:auto;bottom:calc(2.2em + 1px)}.vue__time-picker .dropdown .select-list{width:10em;height:10em;overflow:hidden;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-ms-flex-flow:row nowrap;flex-flow:row nowrap;-webkit-box-align:stretch;-ms-flex-align:stretch;align-items:stretch;-webkit-box-pack:justify;-ms-flex-pack:justify;justify-content:space-between}.vue__time-picker .dropdown .select-list:active,.vue__time-picker .dropdown .select-list:focus{outline:0}.vue__time-picker .dropdown ul{padding:0;margin:0;list-style:none;outline:0;-webkit-box-flex:1;-ms-flex:1 1 0.00001px;flex:1 1 0.00001px;overflow-x:hidden;overflow-y:auto}.vue__time-picker .dropdown ul.apms,.vue__time-picker .dropdown ul.minutes,.vue__time-picker .dropdown ul.seconds{border-left:1px solid #fff}.vue__time-picker .dropdown ul li{list-style:none;text-align:center;padding:.3em 0;color:#161616}.vue__time-picker .dropdown ul li:not(.hint):not([disabled]):focus,.vue__time-picker .dropdown ul li:not(.hint):not([disabled]):hover{background:rgba(0,0,0,.08);color:#161616;cursor:pointer}.vue__time-picker .dropdown ul li:not([disabled]).active,.vue__time-picker .dropdown ul li:not([disabled]).active:focus,.vue__time-picker .dropdown ul li:not([disabled]).active:hover{background:#41b883;color:#fff}.vue__time-picker .dropdown ul li[disabled],.vue__time-picker .dropdown ul li[disabled]:hover{background:transparent;opacity:.3;cursor:not-allowed}.vue__time-picker .dropdown .hint{color:#a5a5a5;cursor:default;font-size:.8em}", ""]);

// exports


/***/ }),

/***/ 423:
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
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
  name: "Subscribe",
  components: {
    AuthLayout: __WEBPACK_IMPORTED_MODULE_0__Shared_AuthLayout___default.a
  },
  props: {
    errors: Object
  },
  data: function data() {
    return {
      form: {
        shop_name: "",
        shop_phone: "",
        shop_email: "",
        shop_address: "",
        shop_logo: null,
        shop_open: "",
        shop_close: "",
        accepted: false
      },
      shop_logo_url: ""
    };
  },
  methods: {
    showImage: function showImage(e) {
      var shopLogo = e.target.files[0];
      this.form.shop_logo = shopLogo;
      this.shop_logo_url = URL.createObjectURL(shopLogo);
    },
    subscribe: function subscribe() {
      var formData = new FormData();
      formData.append("shop_name", this.form.shop_name);
      formData.append("shop_phone", this.form.shop_phone);
      formData.append("shop_email", this.form.shop_email);
      formData.append("shop_address", this.form.shop_address);
      formData.append("shop_logo", this.form.shop_logo);
      formData.append("shop_open", this.form.shop_open);
      formData.append("shop_close", this.form.shop_close);
      this.$inertia.post(this.route("subscribe.store"), formData);
    }
  }
});

/***/ }),

/***/ 424:
/***/ (function(module, exports, __webpack_require__) {

var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("auth-layout", { attrs: { name: "Subscribe" } }, [
    _c("section", { staticClass: "row flexbox-container" }, [
      _c(
        "div",
        { staticClass: "col-xl-12 col-10 d-flex justify-content-center" },
        [
          _c("div", { staticClass: "card bg-authentication rounded-0 mb-0" }, [
            _c("div", { staticClass: "row m-0" }, [
              _c(
                "div",
                {
                  staticClass:
                    "col-lg-12 d-lg-block d-none text-center align-self-center pl-0 pr-3 py-0"
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
              _c("div", { staticClass: "col-12 p-0" }, [
                _c("div", { staticClass: "card rounded-0 mb-0 p-2" }, [
                  _c("div", { staticClass: "card-header pt-50 pb-1" }, [
                    _c("div", { staticClass: "card-title" }, [
                      _c("h4", { staticClass: "mb-0" }, [
                        _vm._v("Subscribe Now")
                      ])
                    ])
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
                              return _vm.subscribe($event)
                            }
                          }
                        },
                        [
                          _c("div", { staticClass: "row form-label-group" }, [
                            _c("div", { staticClass: "col-md-4 col-sm-12" }, [
                              _c("label", [
                                _vm._v("Shop Name "),
                                _c("span", { staticClass: "text-danger" }, [
                                  _vm._v("*")
                                ])
                              ]),
                              _vm._v(" "),
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
                                class: [
                                  _vm.errors.shop_name ? "is-invalid" : ""
                                ],
                                attrs: {
                                  type: "text",
                                  placeholder: "Shop Name",
                                  autofocus: ""
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
                            _c("div", { staticClass: "col-md-4 col-sm-12" }, [
                              _c("label", [
                                _vm._v(
                                  "Shop Contact No.\n                          "
                                ),
                                _c("span", { staticClass: "text-danger" }, [
                                  _vm._v("*")
                                ])
                              ]),
                              _vm._v(" "),
                              _c("input", {
                                directives: [
                                  {
                                    name: "model",
                                    rawName: "v-model",
                                    value: _vm.form.shop_phone,
                                    expression: "form.shop_phone"
                                  }
                                ],
                                staticClass: "form-control",
                                class: [
                                  _vm.errors.shop_phone ? "is-invalid" : ""
                                ],
                                attrs: {
                                  type: "text",
                                  placeholder: "Shop Contact No."
                                },
                                domProps: { value: _vm.form.shop_phone },
                                on: {
                                  input: function($event) {
                                    if ($event.target.composing) {
                                      return
                                    }
                                    _vm.$set(
                                      _vm.form,
                                      "shop_phone",
                                      $event.target.value
                                    )
                                  }
                                }
                              }),
                              _vm._v(" "),
                              _vm.errors.shop_phone
                                ? _c(
                                    "span",
                                    {
                                      staticClass: "invalid-feedback",
                                      attrs: { role: "alert" }
                                    },
                                    [
                                      _c("strong", [
                                        _vm._v(_vm._s(_vm.errors.shop_phone[0]))
                                      ])
                                    ]
                                  )
                                : _vm._e()
                            ]),
                            _vm._v(" "),
                            _c("div", { staticClass: "col-md-4 col-sm-12" }, [
                              _c("label", [_vm._v("Shop Email")]),
                              _vm._v(" "),
                              _c("input", {
                                directives: [
                                  {
                                    name: "model",
                                    rawName: "v-model",
                                    value: _vm.form.shop_email,
                                    expression: "form.shop_email"
                                  }
                                ],
                                staticClass: "form-control",
                                class: [
                                  _vm.errors.shop_email ? "is-invalid" : ""
                                ],
                                attrs: {
                                  type: "email",
                                  placeholder: "Shop Email"
                                },
                                domProps: { value: _vm.form.shop_email },
                                on: {
                                  input: function($event) {
                                    if ($event.target.composing) {
                                      return
                                    }
                                    _vm.$set(
                                      _vm.form,
                                      "shop_email",
                                      $event.target.value
                                    )
                                  }
                                }
                              }),
                              _vm._v(" "),
                              _vm.errors.shop_email
                                ? _c(
                                    "span",
                                    {
                                      staticClass: "invalid-feedback",
                                      attrs: { role: "alert" }
                                    },
                                    [
                                      _c("strong", [
                                        _vm._v(_vm._s(_vm.errors.shop_email[0]))
                                      ])
                                    ]
                                  )
                                : _vm._e()
                            ])
                          ]),
                          _vm._v(" "),
                          _c("div", { staticClass: "row form-label-group" }, [
                            _c(
                              "div",
                              { staticClass: "col-md-4 col-sm-12 text-center" },
                              [
                                _c("label", [_vm._v("Shop Logo")]),
                                _vm._v(" "),
                                _c(
                                  "div",
                                  {
                                    staticClass:
                                      "banner-logo-upload-box mx-auto",
                                    staticStyle: {
                                      width: "200px",
                                      height: "200px",
                                      border: "1px solid #ddd",
                                      "border-radius": "4px",
                                      "box-shadow":
                                        "0px 0px 6px 4px rgba(0, 0, 0, 0.1)"
                                    }
                                  },
                                  [
                                    _c("img", {
                                      staticClass:
                                        "users-avatar-shadow rounded",
                                      attrs: {
                                        id: "avatar",
                                        height: "90",
                                        width: "90",
                                        src: _vm.shop_logo_url,
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
                                )
                              ]
                            ),
                            _vm._v(" "),
                            _c("div", { staticClass: "col-md-8 col-sm-12" }, [
                              _c("div", { staticClass: "row form-group" }, [
                                _c("div", { staticClass: "col-12" }, [
                                  _c("label", [
                                    _vm._v(
                                      "Shop Address\n                              "
                                    ),
                                    _c("span", { staticClass: "text-danger" }, [
                                      _vm._v("*")
                                    ])
                                  ]),
                                  _vm._v(" "),
                                  _c("textarea", {
                                    directives: [
                                      {
                                        name: "model",
                                        rawName: "v-model",
                                        value: _vm.form.shop_address,
                                        expression: "form.shop_address"
                                      }
                                    ],
                                    staticClass: "form-control",
                                    class: [
                                      _vm.errors.shop_address
                                        ? "is-invalid"
                                        : ""
                                    ],
                                    attrs: { rows: "3" },
                                    domProps: { value: _vm.form.shop_address },
                                    on: {
                                      input: function($event) {
                                        if ($event.target.composing) {
                                          return
                                        }
                                        _vm.$set(
                                          _vm.form,
                                          "shop_address",
                                          $event.target.value
                                        )
                                      }
                                    }
                                  }),
                                  _vm._v(" "),
                                  _vm.errors.shop_address
                                    ? _c(
                                        "span",
                                        {
                                          staticClass: "invalid-feedback",
                                          attrs: { role: "alert" }
                                        },
                                        [
                                          _c("strong", [
                                            _vm._v(
                                              _vm._s(_vm.errors.shop_address[0])
                                            )
                                          ])
                                        ]
                                      )
                                    : _vm._e()
                                ])
                              ]),
                              _vm._v(" "),
                              _c("div", { staticClass: "row form-group" }, [
                                _c(
                                  "div",
                                  { staticClass: "col-md-6 col-sm-12" },
                                  [
                                    _c("label", [_vm._v("Shop Start At")]),
                                    _vm._v(" "),
                                    _c("vue-timepicker", {
                                      class: [
                                        _vm.errors.shop_open ? "is-invalid" : ""
                                      ],
                                      attrs: {
                                        placeholder: "Shop Close At",
                                        format: "hh:mm A"
                                      },
                                      model: {
                                        value: _vm.form.shop_open,
                                        callback: function($$v) {
                                          _vm.$set(_vm.form, "shop_open", $$v)
                                        },
                                        expression: "form.shop_open"
                                      }
                                    }),
                                    _vm._v(" "),
                                    _vm.errors.shop_open
                                      ? _c(
                                          "span",
                                          {
                                            staticClass: "invalid-feedback",
                                            attrs: { role: "alert" }
                                          },
                                          [
                                            _c("strong", [
                                              _vm._v(
                                                _vm._s(_vm.errors.shop_open[0])
                                              )
                                            ])
                                          ]
                                        )
                                      : _vm._e()
                                  ],
                                  1
                                ),
                                _vm._v(" "),
                                _c(
                                  "div",
                                  { staticClass: "col-md-6 col-sm-12" },
                                  [
                                    _c("label", [_vm._v("Shop Close At")]),
                                    _vm._v(" "),
                                    _c("vue-timepicker", {
                                      class: [
                                        _vm.errors.shop_close
                                          ? "is-invalid"
                                          : ""
                                      ],
                                      attrs: {
                                        placeholder: "Shop Close At",
                                        format: "hh:mm A"
                                      },
                                      model: {
                                        value: _vm.form.shop_close,
                                        callback: function($$v) {
                                          _vm.$set(_vm.form, "shop_close", $$v)
                                        },
                                        expression: "form.shop_close"
                                      }
                                    }),
                                    _vm._v(" "),
                                    _vm.errors.shop_close
                                      ? _c(
                                          "span",
                                          {
                                            staticClass: "invalid-feedback",
                                            attrs: { role: "alert" }
                                          },
                                          [
                                            _c("strong", [
                                              _vm._v(
                                                _vm._s(_vm.errors.shop_close[0])
                                              )
                                            ])
                                          ]
                                        )
                                      : _vm._e()
                                  ],
                                  1
                                )
                              ])
                            ])
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
                                        "\n                              I accept the terms & conditions."
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
                                "\n                      Subscribe Now\n                    "
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
    require("vue-hot-reload-api")      .rerender("data-v-2f7751eb", module.exports)
  }
}

/***/ })

});
>>>>>>> 57d8579bea4cf58db48c584e37a5960227da494e
