<<<<<<< HEAD
webpackJsonp([27],{159:function(t,a,s){var e=s(231)(s(435),s(436),!1,function(t){s(433)},null,null);t.exports=e.exports},231:function(t,a){t.exports=function(t,a,s,e,i,n){var r,o=t=t||{},l=typeof t.default;"object"!==l&&"function"!==l||(r=t,o=t.default);var c,d="function"==typeof o?o.options:o;if(a&&(d.render=a.render,d.staticRenderFns=a.staticRenderFns,d._compiled=!0),s&&(d.functional=!0),i&&(d._scopeId=i),n?(c=function(t){(t=t||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext)||"undefined"==typeof __VUE_SSR_CONTEXT__||(t=__VUE_SSR_CONTEXT__),e&&e.call(this,t),t&&t._registeredComponents&&t._registeredComponents.add(n)},d._ssrRegister=c):e&&(c=e),c){var v=d.functional,u=v?d.render:d.beforeCreate;v?(d._injectStyles=c,d.render=function(t,a){return c.call(a),u(t,a)}):d.beforeCreate=u?[].concat(u,c):[c]}return{esModule:r,exports:o,options:d}}},232:function(t,a,s){var e="undefined"!=typeof document;if("undefined"!=typeof DEBUG&&DEBUG&&!e)throw new Error("vue-style-loader cannot be used in a non-browser environment. Use { target: 'node' } in your Webpack config to indicate a server-rendering environment.");var i=s(234),n={},r=e&&(document.head||document.getElementsByTagName("head")[0]),o=null,l=0,c=!1,d=function(){},v=null,u="data-vue-ssr-id",p="undefined"!=typeof navigator&&/msie [6-9]\b/.test(navigator.userAgent.toLowerCase());function f(t){for(var a=0;a<t.length;a++){var s=t[a],e=n[s.id];if(e){e.refs++;for(var i=0;i<e.parts.length;i++)e.parts[i](s.parts[i]);for(;i<s.parts.length;i++)e.parts.push(m(s.parts[i]));e.parts.length>s.parts.length&&(e.parts.length=s.parts.length)}else{var r=[];for(i=0;i<s.parts.length;i++)r.push(m(s.parts[i]));n[s.id]={id:s.id,refs:1,parts:r}}}}function _(){var t=document.createElement("style");return t.type="text/css",r.appendChild(t),t}function m(t){var a,s,e=document.querySelector("style["+u+'~="'+t.id+'"]');if(e){if(c)return d;e.parentNode.removeChild(e)}if(p){var i=l++;e=o||(o=_()),a=g.bind(null,e,i,!1),s=g.bind(null,e,i,!0)}else e=_(),a=function(t,a){var s=a.css,e=a.media,i=a.sourceMap;e&&t.setAttribute("media",e);v.ssrId&&t.setAttribute(u,a.id);i&&(s+="\n/*# sourceURL="+i.sources[0]+" */",s+="\n/*# sourceMappingURL=data:application/json;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(i))))+" */");if(t.styleSheet)t.styleSheet.cssText=s;else{for(;t.firstChild;)t.removeChild(t.firstChild);t.appendChild(document.createTextNode(s))}}.bind(null,e),s=function(){e.parentNode.removeChild(e)};return a(t),function(e){if(e){if(e.css===t.css&&e.media===t.media&&e.sourceMap===t.sourceMap)return;a(t=e)}else s()}}t.exports=function(t,a,s,e){c=s,v=e||{};var r=i(t,a);return f(r),function(a){for(var s=[],e=0;e<r.length;e++){var o=r[e];(l=n[o.id]).refs--,s.push(l)}a?f(r=i(t,a)):r=[];for(e=0;e<s.length;e++){var l;if(0===(l=s[e]).refs){for(var c=0;c<l.parts.length;c++)l.parts[c]();delete n[l.id]}}}};var h,C=(h=[],function(t,a){return h[t]=a,h.filter(Boolean).join("\n")});function g(t,a,s,e){var i=s?"":e.css;if(t.styleSheet)t.styleSheet.cssText=C(a,i);else{var n=document.createTextNode(i),r=t.childNodes;r[a]&&t.removeChild(r[a]),r.length?t.insertBefore(n,r[a]):t.appendChild(n)}}},234:function(t,a){t.exports=function(t,a){for(var s=[],e={},i=0;i<a.length;i++){var n=a[i],r=n[0],o={id:t+":"+i,css:n[1],media:n[2],sourceMap:n[3]};e[r]?e[r].parts.push(o):s.push(e[r]={id:r,parts:[o]})}return s}},235:function(t,a,s){var e=s(231)(s(238),s(239),!1,function(t){s(236)},null,null);t.exports=e.exports},236:function(t,a,s){var e=s(237);"string"==typeof e&&(e=[[t.i,e,""]]),e.locals&&(t.exports=e.locals);s(232)("a3630c76",e,!0,{})},237:function(t,a,s){(t.exports=s(149)(!1)).push([t.i,"",""])},238:function(t,a,s){"use strict";Object.defineProperty(a,"__esModule",{value:!0}),a.default={name:"AppFooter"}},239:function(t,a){t.exports={render:function(){var t=this.$createElement,a=this._self._c||t;return a("div",["horizontal"==this.$page.configData.mainLayoutType?a("footer",{staticClass:"footer footer-light navbar-shadow",class:this.$page.configData.footerType}):a("footer",{staticClass:"footer footer-light",class:this.$page.configData.footerType},[this._m(0)])])},staticRenderFns:[function(){var t=this.$createElement,a=this._self._c||t;return a("p",{staticClass:"clearfix blue-grey lighten-2 mb-0"},[a("span",{staticClass:"float-md-left d-block d-md-inline-block mt-25"},[this._v("COPYRIGHT © 2019\n\t\t\t\t"),a("a",{staticClass:"text-bold-800 grey darken-2",attrs:{href:"http://teammahal.info/",target:"_blank"}},[this._v("Team Mahal,")]),this._v("\n\t\t\t\tAll rights Reserved\n\t\t\t")]),this._v(" "),a("span",{staticClass:"float-md-right d-none d-md-block"},[this._v("Hand-crafted & Made with"),a("i",{staticClass:"feather icon-heart pink"})]),this._v(" "),a("button",{staticClass:"btn btn-primary btn-icon scroll-top",attrs:{type:"button"}},[a("i",{staticClass:"feather icon-arrow-up"})])])}]}},242:function(t,a,s){var e=s(231)(s(245),s(259),!1,function(t){s(243)},null,null);t.exports=e.exports},243:function(t,a,s){var e=s(244);"string"==typeof e&&(e=[[t.i,e,""]]),e.locals&&(t.exports=e.locals);s(232)("3a768754",e,!0,{})},244:function(t,a,s){(t.exports=s(149)(!1)).push([t.i,"",""])},245:function(t,a,s){"use strict";Object.defineProperty(a,"__esModule",{value:!0});var e=s(246),i=s.n(e),n=s(251),r=s.n(n),o=s(235),l=s.n(o),c=s(254),d=s.n(c);a.default={name:"Layout",components:{Breadcrumb:d.a,AppFooter:l.a,Navbar:r.a,Sidebar:i.a},created:function(){},methods:{url:function(){return location.pathname.substr(1)},hideDropdownMenus:function(){this.showUserMenu=!1}}}},246:function(t,a,s){var e=s(231)(s(249),s(250),!1,function(t){s(247)},null,null);t.exports=e.exports},247:function(t,a,s){var e=s(248);"string"==typeof e&&(e=[[t.i,e,""]]),e.locals&&(t.exports=e.locals);s(232)("51b3cdb0",e,!0,{})},248:function(t,a,s){(t.exports=s(149)(!1)).push([t.i,"",""])},249:function(t,a,s){"use strict";Object.defineProperty(a,"__esModule",{value:!0}),a.default={name:"Sidebar",props:{url:String},data:function(){return{is_admin:!1}},methods:{isUrl:function(){for(var t=this,a=arguments.length,s=new Array(a),e=0;e<a;e++)s[e]=arguments[e];return""===s[0]?""===this.url:s.filter(function(a){return t.url.startsWith(a)}).length},checkAccess:function(){this.is_admin=1==this.$page.auth.is_admin}},created:function(){this.checkAccess()}}},250:function(t,a){t.exports={render:function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("div",{staticClass:"main-menu menu-accordion menu-shadow",class:t.$page.configData.menuType+" "+["light"===t.$page.configData.theme?"menu-light":"menu-dark"],attrs:{"data-scroll-to-active":"true"}},[s("div",{staticClass:"navbar-header"},[s("ul",{staticClass:"nav navbar-nav flex-row",staticStyle:{"background-image":"url(/images/logo/logo.png)","background-size":"contain","background-repeat":"no-repeat"}},[s("li",{staticClass:"nav-item mr-auto"},[s("inertia-link",{staticClass:"navbar-brand",attrs:{href:"/dashboard"}})],1),t._v(" "),t._m(0)])]),t._v(" "),s("div",{staticClass:"shadow-bottom"}),t._v(" "),s("div",{staticClass:"main-menu-content"},[s("ul",{staticClass:"navigation navigation-main",attrs:{id:"main-menu-navigation","data-menu":"menu-navigation"}},[s("li",{staticClass:"nav-item"},[s("inertia-link",{attrs:{href:"/"}},[s("i",{staticClass:"feather icon-home"}),t._v(" "),s("span",{staticClass:"menu-title",attrs:{"data-i18n":""}},[t._v(t._s(t.__("Dashboard")))])])],1),t._v(" "),t.is_admin?s("li",{staticClass:"nav-item"},[s("inertia-link",{class:t.isUrl("brand")?"active":"",attrs:{href:t.route("brand.index")}},[s("i",{staticClass:"feather icon-home"}),t._v(" "),s("span",{staticClass:"menu-title nav-link-text",attrs:{"data-i18n":""}},[t._v(t._s(t.__("Brand")))])])],1):t._e(),t._v(" "),t.is_admin?s("li",{staticClass:"nav-item"},[s("inertia-link",{class:t.isUrl("category")?"active":"",attrs:{href:t.route("category.index")}},[s("i",{staticClass:"feather icon-home"}),t._v(" "),s("span",{staticClass:"menu-title nav-link-text",attrs:{"data-i18n":""}},[t._v(t._s(t.__("Category")))])])],1):t._e(),t._v(" "),t.is_admin?s("li",{staticClass:"nav-item"},[s("inertia-link",{class:t.isUrl("product")?"active":"",attrs:{href:t.route("product.index")}},[s("i",{staticClass:"feather icon-home"}),t._v(" "),s("span",{staticClass:"menu-title nav-link-text",attrs:{"data-i18n":""}},[t._v(t._s(t.__("Product")))])])],1):t._e(),t._v(" "),t.is_admin?s("li",{staticClass:"nav-item"},[s("inertia-link",{class:t.isUrl("package")?"active":"",attrs:{href:t.route("package.index")}},[s("i",{staticClass:"feather icon-home"}),t._v(" "),s("span",{staticClass:"menu-title nav-link-text",attrs:{"data-i18n":""}},[t._v(t._s(t.__("Package")))])])],1):t._e(),t._v(" "),t.is_admin?s("li",{staticClass:"nav-item"},[s("inertia-link",{class:t.isUrl("paymentmethod")?"active":"",attrs:{href:t.route("paymentmethod.index")}},[s("i",{staticClass:"feather icon-home"}),t._v(" "),s("span",{staticClass:"menu-title nav-link-text",attrs:{"data-i18n":""}},[t._v(t._s(t.__("Payment Method")))])])],1):t._e(),t._v(" "),t.is_admin?s("li",{staticClass:"nav-item"},[s("inertia-link",{class:t.isUrl("banner")?"active":"",attrs:{href:t.route("banner.index")}},[s("i",{staticClass:"feather icon-home"}),t._v(" "),s("span",{staticClass:"menu-title nav-link-text",attrs:{"data-i18n":""}},[t._v(t._s(t.__("Banner")))])])],1):t._e(),t._v(" "),s("li",{staticClass:"nav-item"},[s("inertia-link",{class:t.isUrl("transaction")?"active":"",attrs:{href:t.route("transaction.index")}},[s("i",{staticClass:"feather icon-home"}),t._v(" "),s("span",{staticClass:"menu-title nav-link-text",attrs:{"data-i18n":""}},[t._v(t._s(t.__("Transaction")))])])],1),t._v(" "),s("li",{staticClass:"nav-item"},[s("inertia-link",{class:t.isUrl("order")?"active":"",attrs:{href:t.route("order.index")}},[s("i",{staticClass:"feather icon-home"}),t._v(" "),s("span",{staticClass:"menu-title nav-link-text",attrs:{"data-i18n":""}},[t.is_admin?s("span",[t._v(t._s(t.__("Order")))]):s("span",[t._v("Global orders")])])])],1),t._v(" "),t.is_admin?t._e():s("li",{staticClass:"nav-item"},[s("inertia-link",{class:t.isUrl("seller/orders")?"active":"",attrs:{href:t.route("seller.orders.index")}},[s("i",{staticClass:"feather icon-home"}),t._v(" "),s("span",{staticClass:"menu-title nav-link-text",attrs:{"data-i18n":""}},[s("span",[t._v("My orders")])])])],1),t._v(" "),s("li",{staticClass:"nav-item"},[s("inertia-link",{class:t.isUrl("invoice")?"active":"",attrs:{href:t.route("invoice.index")}},[s("i",{staticClass:"feather icon-home"}),t._v(" "),s("span",{staticClass:"menu-title nav-link-text",attrs:{"data-i18n":""}},[t._v(t._s(t.__("Invoice")))])])],1),t._v(" "),t.is_admin?s("li",{staticClass:"nav-item"},[s("inertia-link",{class:t.isUrl("user")?"active":"",attrs:{href:t.route("users.index")}},[s("i",{staticClass:"feather icon-users"}),t._v(" "),s("span",{staticClass:"menu-title",attrs:{"data-i18n":""}},[t._v(t._s(t.__("Users")))])])],1):t._e(),t._v(" "),t.is_admin?s("li",{staticClass:"nav-item"},[s("inertia-link",{class:t.isUrl("notice")?"active":"",attrs:{href:t.route("notice.index")}},[s("i",{staticClass:"feather icon-users"}),t._v(" "),s("span",{staticClass:"menu-title",attrs:{"data-i18n":""}},[t._v(t._s(t.__("Notice")))])])],1):t._e(),t._v(" "),t.is_admin?s("li",{staticClass:"nav-item"},[s("inertia-link",{class:t.isUrl("sms")?"active":"",attrs:{href:t.route("sms.index")}},[s("i",{staticClass:"feather icon-send"}),t._v(" "),s("span",{staticClass:"menu-title",attrs:{"data-i18n":""}},[t._v(t._s(t.__("Send SMS")))])])],1):t._e(),t._v(" "),s("li",[s("inertia-link",{class:t.isUrl("withdraw")?"active":"",attrs:{href:t.route("withdraw_requests.index")}},[s("i",{staticClass:"feather icon-users"}),t._v(" "),s("span",{staticClass:"menu-title",attrs:{"data-i18n":""}},[t._v("Withdraw Requests")])])],1),t._v(" "),t.$can("subscription_access")?s("li",{staticClass:"nav-item"},[s("inertia-link",{attrs:{href:t.route("subscriptions.index")}},[s("i",{staticClass:"feather icon-users"}),t._v(" "),s("span",{staticClass:"menu-title",attrs:{"data-i18n":""}},[t._v(t._s(t.__("Subscription")))])])],1):t._e(),t._v(" "),t.$can("role_access")?s("li",{staticClass:"nav-item"},[s("inertia-link",{attrs:{href:t.route("roles.index")}},[s("i",{staticClass:"feather icon-unlock"}),t._v(" "),s("span",{staticClass:"menu-title",attrs:{"data-i18n":""}},[t._v(t._s(t.__("Role")))])])],1):t._e(),t._v(" "),t.$can("permission_access")?s("li",{staticClass:"nav-item"},[s("inertia-link",{attrs:{href:t.route("permissions.index")}},[s("i",{staticClass:"feather icon-unlock"}),t._v(" "),s("span",{staticClass:"menu-title",attrs:{"data-i18n":""}},[t._v(t._s(t.__("Permission")))])])],1):t._e(),t._v(" "),t.$can("gender_access")?s("li",{staticClass:"nav-item"},[s("inertia-link",{attrs:{href:t.route("genders.index")}},[s("i",{staticClass:"feather icon-unlock"}),t._v(" "),s("span",{staticClass:"menu-title",attrs:{"data-i18n":""}},[t._v(t._s(t.__("Gender")))])])],1):t._e(),t._v(" "),t.$can("religion_access")?s("li",{staticClass:"nav-item"},[s("inertia-link",{attrs:{href:t.route("religions.index")}},[s("i",{staticClass:"feather icon-unlock"}),t._v(" "),s("span",{staticClass:"menu-title",attrs:{"data-i18n":""}},[t._v(t._s(t.__("Religion")))])])],1):t._e(),t._v(" "),t.$can("blood_group_access")?s("li",{staticClass:"nav-item"},[s("inertia-link",{attrs:{href:t.route("blood-groups.index")}},[s("i",{staticClass:"feather icon-unlock"}),t._v(" "),s("span",{staticClass:"menu-title",attrs:{"data-i18n":""}},[t._v(t._s(t.__("Blood Group")))])])],1):t._e()])])])},staticRenderFns:[function(){var t=this.$createElement,a=this._self._c||t;return a("li",{staticClass:"nav-item nav-toggle"},[a("a",{staticClass:"nav-link modern-nav-toggle pr-0",attrs:{"data-toggle":"collapse"}},[a("i",{staticClass:"feather icon-x d-block d-xl-none font-medium-4 primary toggle-icon"}),a("i",{staticClass:"toggle-icon feather icon-disc font-medium-4 d-none d-xl-block primary collapse-toggle-icon",attrs:{"data-ticon":"icon-disc"}})])])}]}},251:function(t,a,s){var e=s(231)(s(252),s(253),!1,null,null,null);t.exports=e.exports},252:function(t,a,s){"use strict";Object.defineProperty(a,"__esModule",{value:!0}),a.default={name:"Navbar",methods:{logout:function(){this.$inertia.post(this.route("logout"))}}}},253:function(t,a){t.exports={render:function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("div",["horizontal"==t.$page.configData.mainLayoutType?s("nav",{staticClass:"header-navbar navbar-expand-lg navbar navbar-with-menu navbar-fixed",class:t.$page.configData.navbarColor},[t._m(0)]):s("nav",{staticClass:"header-navbar navbar-expand-lg navbar navbar-with-menu navbar-light navbar-shadow",class:t.$page.configData.navbarClass+" "+t.$page.configData.navbarColor},[s("div",{staticClass:"navbar-wrapper"},[s("div",{staticClass:"navbar-container content"},[s("div",{staticClass:"navbar-collapse",attrs:{id:"navbar-mobile"}},[s("div",{staticClass:"mr-auto float-left bookmark-wrapper d-flex align-items-center"},[t._m(1),t._v(" "),s("ul",{staticClass:"nav navbar-nav"},[t.$page.app?s("li",{staticClass:"nav-item d-none d-lg-block app-title"},[s("a",{staticClass:"bookmark-star"},[s("i",{staticClass:"ficon feather icon-star warning"}),t._v(" "+t._s(t.$page.app?t.$page.app.name:""))]),t._v(" "),t._m(2)]):t._e()])]),t._v(" "),s("ul",{staticClass:"nav navbar-nav float-right"},[s("li",{staticClass:"dropdown dropdown-language nav-item"},[s("a",{staticClass:"dropdown-toggle nav-link",attrs:{id:"dropdown-flag",href:"#","data-toggle":"dropdown","aria-haspopup":"true","aria-expanded":"false"}},[s("span",{staticClass:"selected-language"},[t._v(t._s(t.currentLanguage()))])]),t._v(" "),s("div",{staticClass:"dropdown-menu",attrs:{"aria-labelledby":"dropdown-flag"}},[s("inertia-link",{staticClass:"dropdown-item",attrs:{href:t.current()+"?lang=en","data-language":"en"}},[t._v(" English")]),t._v(" "),s("inertia-link",{staticClass:"dropdown-item",attrs:{href:t.current()+"?lang=bn","data-language":"bn"}},[t._v(" বাংলা")])],1)]),t._v(" "),t._m(3),t._v(" "),t._m(4),t._v(" "),s("li",{staticClass:"dropdown dropdown-user nav-item"},[s("a",{staticClass:"dropdown-toggle nav-link dropdown-user-link",attrs:{href:"#","data-toggle":"dropdown"}},[s("div",{staticClass:"user-nav d-sm-flex d-none"},[s("span",{staticClass:"user-name text-bold-600"},[t._v(t._s(t.$page.auth.name))])]),t._v(" "),t._m(5)]),t._v(" "),s("div",{staticClass:"dropdown-menu dropdown-menu-right"},[s("a",{staticClass:"dropdown-item",attrs:{href:t.route("users.show",t.$page.auth.slug)}},[s("i",{staticClass:"feather icon-user"}),t._v(" Profile\n\t\t\t\t\t\t\t\t")]),t._v(" "),s("div",{staticClass:"dropdown-divider"}),t._v(" "),s("a",{staticClass:"dropdown-item",on:{click:t.logout}},[s("i",{staticClass:"feather icon-power"}),t._v(" Logout")])])])])])])])])])},staticRenderFns:[function(){var t=this.$createElement,a=this._self._c||t;return a("div",{staticClass:"navbar-header d-xl-block d-none"},[a("ul",{staticClass:"nav navbar-nav flex-row"},[a("li",{staticClass:"nav-item"},[a("a",{staticClass:"navbar-brand",attrs:{href:"dashboard-analytics"}},[a("div",{staticClass:"brand-logo"})])])])])},function(){var t=this.$createElement,a=this._self._c||t;return a("ul",{staticClass:"nav navbar-nav"},[a("li",{staticClass:"nav-item mobile-menu d-xl-none mr-auto"},[a("a",{staticClass:"nav-link nav-menu-main menu-toggle hidden-xs",attrs:{href:"#"}},[a("i",{staticClass:"ficon feather icon-menu"})])])])},function(){var t=this.$createElement,a=this._self._c||t;return a("div",{staticClass:"bookmark-input search-input"},[a("div",{staticClass:"bookmark-input-icon"},[a("i",{staticClass:"feather icon-search primary"})]),this._v(" "),a("input",{staticClass:"form-control input",attrs:{type:"text",placeholder:"Explore Vuexy...",tabindex:"0","data-search":"laravel-starter-list"}}),this._v(" "),a("ul",{staticClass:"search-list search-list-bookmark"})])},function(){var t=this.$createElement,a=this._self._c||t;return a("li",{staticClass:"nav-item d-none d-lg-block"},[a("a",{staticClass:"nav-link nav-link-expand"},[a("i",{staticClass:"ficon feather icon-maximize"})])])},function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("li",{staticClass:"dropdown dropdown-notification nav-item"},[s("a",{staticClass:"nav-link nav-link-label",attrs:{href:"#","data-toggle":"dropdown"}},[s("i",{staticClass:"ficon feather icon-bell"}),s("span",{staticClass:"badge badge-pill badge-primary badge-up"},[t._v("5")])]),t._v(" "),s("ul",{staticClass:"dropdown-menu dropdown-menu-media dropdown-menu-right"},[s("li",{staticClass:"dropdown-menu-header"},[s("div",{staticClass:"dropdown-header m-0 p-2"},[s("h3",{staticClass:"white"},[t._v("5 New")]),s("span",{staticClass:"grey darken-2"},[t._v("App Notifications")])])]),t._v(" "),s("li",{staticClass:"scrollable-container media-list"},[s("a",{staticClass:"d-flex justify-content-between",attrs:{href:"javascript:void(0)"}},[s("div",{staticClass:"media d-flex align-items-start"},[s("div",{staticClass:"media-left"},[s("i",{staticClass:"feather icon-download-cloud font-medium-5 success"})]),t._v(" "),s("div",{staticClass:"media-body"},[s("h6",{staticClass:"success media-heading red darken-1"},[t._v("99% Server load")]),t._v(" "),s("small",{staticClass:"notification-text"},[t._v("You got new order of goods.")])]),t._v(" "),s("small",[s("time",{staticClass:"media-meta",attrs:{datetime:"2015-06-11T18:29:20+08:00"}},[t._v("5 hour ago")])])])])]),t._v(" "),s("li",{staticClass:"dropdown-menu-footer"},[s("a",{staticClass:"dropdown-item p-1 text-center",attrs:{href:"javascript:void(0)"}},[t._v("Read all notifications")])])])])},function(){var t=this.$createElement,a=this._self._c||t;return a("span",[a("img",{staticClass:"round",attrs:{src:"/images/profile/user-uploads/user-09.jpg",alt:"avatar",height:"40",width:"40"}})])}]}},254:function(t,a,s){var e=s(231)(s(257),s(258),!1,function(t){s(255)},null,null);t.exports=e.exports},255:function(t,a,s){var e=s(256);"string"==typeof e&&(e=[[t.i,e,""]]),e.locals&&(t.exports=e.locals);s(232)("5812e8f3",e,!0,{})},256:function(t,a,s){(t.exports=s(149)(!1)).push([t.i,"",""])},257:function(t,a,s){"use strict";Object.defineProperty(a,"__esModule",{value:!0}),a.default={name:"Breadcrumb"}},258:function(t,a){t.exports={render:function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("div",{staticClass:"content-header row"},[s("div",{staticClass:"content-header-left col-md-9 col-12 mb-2"},[s("div",{staticClass:"row breadcrumbs-top"},[s("div",{staticClass:"col-12"},[s("h2",{staticClass:"content-header-title float-left mb-0"}),t._v(" "),s("div",{staticClass:"breadcrumb-wrapper col-12"},[t.$page.breadcrumbs?s("ol",{staticClass:"breadcrumb"},t._l(t.$page.breadcrumbs,function(a){return s("li",{staticClass:"breadcrumb-item"},[a.link?s("inertia-link",{attrs:{href:a.link}},[t._v("\n                "+t._s(a.name)+"\n              ")]):s("span",[t._v(t._s(a.name))])],1)}),0):t._e()])])])]),t._v(" "),t.$page.has_modal?s("div",{staticClass:"content-header-right text-md-right col-md-3 col-12 d-md-block d-none"},[t._m(0)]):t._e()])},staticRenderFns:[function(){var t=this.$createElement,a=this._self._c||t;return a("button",{staticClass:"btn-icon waves-effect waves-light btn btn-primary btn-sm",attrs:{"data-toggle":"modal","data-target":"#default",type:"button"}},[a("i",{staticClass:"feather icon-plus-circle"}),this._v(" New\n    ")])}]}},259:function(t,a){t.exports={render:function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("div",{attrs:{id:"app"}},[s("sidebar",{attrs:{url:t.url()}}),t._v(" "),s("div",{staticClass:"app-content content"},[s("div",{staticClass:"content-overlay"}),t._v(" "),s("div",{staticClass:"header-navbar-shadow"}),t._v(" "),s("navbar"),t._v(" "),t.$page.configData.contentLayout?s("div",{staticClass:"content-area-wrapper"},[s("div",{class:t.$page.configData.sidebarPositionClass},[s("div",{staticClass:"sidebar"},[t._t("default")],2)]),t._v(" "),s("div",{class:t.$page.configData.contentsidebarClass},[s("div",{staticClass:"content-wrapper"},[s("div",{staticClass:"content-body"},[t._t("default")],2)])])]):s("div",{staticClass:"content-wrapper"},[1==t.$page.configData.pageHeader?s("div",[s("breadcrumb")],1):t._e(),t._v(" "),s("div",{staticClass:"content-body"},[t._t("default")],2)])],1),t._v(" "),s("div",{staticClass:"sidenav-overlay"}),t._v(" "),s("div",{staticClass:"drag-target"}),t._v(" "),s("app-footer")],1)},staticRenderFns:[]}},433:function(t,a,s){var e=s(434);"string"==typeof e&&(e=[[t.i,e,""]]),e.locals&&(t.exports=e.locals);s(232)("79db0892",e,!0,{})},434:function(t,a,s){(t.exports=s(149)(!1)).push([t.i,"",""])},435:function(t,a,s){"use strict";Object.defineProperty(a,"__esModule",{value:!0});var e=s(242),i=s.n(e);a.default={name:"Brand",components:{Layout:i.a},props:{errors:Object},data:function(){return{sending:!1,form:{name:"",logo:""}}},methods:{create:function(){var t=this;this.sending=!0,this.$inertia.post(this.route("brand.create"),{email:this.form.name,password:this.form.logo}).then(function(){return t.sending=!1})}}}},436:function(t,a){t.exports={render:function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("layout",{attrs:{name:"Brand"}},[s("section",{attrs:{id:"dashboard-analytics"}},[s("div",{staticClass:"row"},[s("div",{staticClass:"col-12"},[s("div",{staticClass:"card"},[s("div",{staticClass:"card-header"},[s("h4",{staticClass:"mb-0"},[t._v("Create new brand")]),t._v(" "),s("inertia-link",{staticClass:"btn btn-primary float-left btn-inline",attrs:{href:t.route("brand.index")}},[t._v("Brand List")])],1),t._v(" "),s("div",{staticClass:"card-content"},[s("div",{staticClass:"col-xl-12 col-12 d-flex justify-content-center"},[s("div",{staticClass:"row m-0 w-100"},[s("div",{staticClass:"col-lg-12 col-12 p-0"},[s("div",{staticClass:"card rounded-0 mb-0 px-2 pb-2"},[s("div",{staticClass:"card-content"},[s("div",{staticClass:"card-body pt-1"},[s("form",{on:{submit:function(a){return a.preventDefault(),t.create(a)}}},[s("div",{staticClass:"row"},[s("div",{staticClass:"col-lg-4 col-md-6 col-sm-12 p-0"},[s("fieldset",{staticClass:"form-label-group position-relative has-icon-left m-3"},[s("input",{directives:[{name:"model",rawName:"v-model",value:t.form.name,expression:"form.name"}],staticClass:"form-control",class:[t.errors.name?"is-invalid":""],attrs:{type:"text",autocomplete:"current-name"},domProps:{value:t.form.name},on:{input:function(a){a.target.composing||t.$set(t.form,"name",a.target.value)}}}),t._v(" "),s("div",{staticClass:"form-control-position"}),t._v(" "),s("label",[t._v("Name")]),t._v(" "),t.errors.name?s("span",{staticClass:"invalid-feedback",attrs:{role:"alert"}},[s("strong",[t._v(t._s(t.errors.name[0]))])]):t._e()])]),t._v(" "),s("div",{staticClass:"col-lg-4 col-md-6 col-sm-12 p-0"},[s("fieldset",{staticClass:"form-label-group position-relative has-icon-left m-3"},[s("input",{staticClass:"form-control",class:[t.errors.logo?"is-invalid":""],attrs:{type:"file",autocomplete:"current-logo"}}),t._v(" "),s("div",{staticClass:"form-control-position"}),t._v(" "),s("label",[t._v("Logo")]),t._v(" "),t.errors.logo?s("span",{staticClass:"invalid-feedback",attrs:{role:"alert"}},[s("strong",[t._v(t._s(t.errors.logo[0]))])]):t._e()])]),t._v(" "),s("div",{staticClass:"col-lg-4 col-md-6 col-sm-12 p-0"},[s("button",{staticClass:"btn btn-primary btn-inline  m-3",class:[t.sending?"disabled":""],attrs:{type:"submit"}},[t._v("Create")])])])])])])])])])])])])])])])])},staticRenderFns:[]}}});
=======
webpackJsonp([27],{

/***/ 175:
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
var normalizeComponent = __webpack_require__(231)
/* script */
var __vue_script__ = __webpack_require__(502)
/* template */
var __vue_template__ = __webpack_require__(503)
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
Component.options.__file = "resources/js/Pages/Seller/MyOrders/Index.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-65531caa", Component.options)
  } else {
    hotAPI.reload("data-v-65531caa", Component.options)
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

/***/ 239:
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(240)
}
var normalizeComponent = __webpack_require__(231)
/* script */
var __vue_script__ = __webpack_require__(242)
/* template */
var __vue_template__ = __webpack_require__(256)
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

/***/ 240:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(241);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(232)("6fcb4f38", content, false, {});
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

/***/ 241:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(149)(false);
// imports


// module
exports.push([module.i, "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", ""]);

// exports


/***/ }),

/***/ 242:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Sidebar__ = __webpack_require__(243);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Sidebar___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__Sidebar__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__Navbar__ = __webpack_require__(248);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__Navbar___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__Navbar__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__AppFooter__ = __webpack_require__(234);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__AppFooter___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2__AppFooter__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__Breadcrumb__ = __webpack_require__(251);
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

/***/ 243:
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(244)
}
var normalizeComponent = __webpack_require__(231)
/* script */
var __vue_script__ = __webpack_require__(246)
/* template */
var __vue_template__ = __webpack_require__(247)
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

/***/ 244:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(245);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(232)("de8b6212", content, false, {});
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

/***/ 245:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(149)(false);
// imports


// module
exports.push([module.i, "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", ""]);

// exports


/***/ }),

/***/ 246:
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
/* harmony default export */ __webpack_exports__["default"] = ({
  name: "Sidebar",
  props: {
    url: String
  },
  data: function data() {
    return {
      is_admin: false
    };
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
    },
    checkAccess: function checkAccess() {
      this.is_admin = this.$page.auth.is_admin == 1;
    }
  },
  created: function created() {
    this.checkAccess();
  }
});

/***/ }),

/***/ 247:
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
            _vm.is_admin
              ? _c(
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
                        _c("i", { staticClass: "feather icon-box" }),
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
                )
              : _vm._e(),
            _vm._v(" "),
            _vm.is_admin
              ? _c(
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
                        _c("i", { staticClass: "feather icon-aperture" }),
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
                )
              : _vm._e(),
            _vm._v(" "),
            _vm.is_admin
              ? _c(
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
                        _c("i", { staticClass: "feather icon-gift" }),
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
                )
              : _vm._e(),
            _vm._v(" "),
            _vm.is_admin
              ? _c(
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
                        _c("i", { staticClass: "feather icon-package" }),
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
                )
              : _vm._e(),
            _vm._v(" "),
            _vm.is_admin
              ? _c(
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
                        _c("i", { staticClass: "feather icon-dollar-sign" }),
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
                )
              : _vm._e(),
            _vm._v(" "),
            _vm.is_admin
              ? _c(
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
                        _c("i", { staticClass: "feather icon-sliders" }),
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
                )
              : _vm._e(),
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
                    _c("i", { staticClass: "feather icon-sliders" }),
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
                    _c("i", { staticClass: "feather icon-shopping-cart" }),
                    _vm._v(" "),
                    _c(
                      "span",
                      {
                        staticClass: "menu-title nav-link-text",
                        attrs: { "data-i18n": "" }
                      },
                      [
                        _vm.is_admin
                          ? _c("span", [_vm._v(_vm._s(_vm.__("Order")))])
                          : _c("span", [_vm._v("Global orders")])
                      ]
                    )
                  ]
                )
              ],
              1
            ),
            _vm._v(" "),
            !_vm.is_admin
              ? _c(
                  "li",
                  { staticClass: "nav-item" },
                  [
                    _c(
                      "inertia-link",
                      {
                        class: _vm.isUrl("seller/orders") ? "active" : "",
                        attrs: { href: _vm.route("seller.orders.index") }
                      },
                      [
                        _c("i", { staticClass: "feather icon-shopping-cart" }),
                        _vm._v(" "),
                        _c(
                          "span",
                          {
                            staticClass: "menu-title nav-link-text",
                            attrs: { "data-i18n": "" }
                          },
                          [_c("span", [_vm._v("My orders")])]
                        )
                      ]
                    )
                  ],
                  1
                )
              : _vm._e(),
            _vm._v(" "),
            _c(
              "li",
              { staticClass: "nav-item" },
              [
                _c(
                  "inertia-link",
                  {
                    class: _vm.isUrl("invoice") ? "active" : "",
                    attrs: { href: _vm.route("invoice.index") }
                  },
                  [
                    _c("i", { staticClass: "feather icon-printer" }),
                    _vm._v(" "),
                    _c(
                      "span",
                      {
                        staticClass: "menu-title nav-link-text",
                        attrs: { "data-i18n": "" }
                      },
                      [_vm._v(_vm._s(_vm.__("Invoice")))]
                    )
                  ]
                )
              ],
              1
            ),
            _vm._v(" "),
            _vm.is_admin
              ? _c(
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
                          {
                            staticClass: "menu-title",
                            attrs: { "data-i18n": "" }
                          },
                          [_vm._v(_vm._s(_vm.__("Users")))]
                        )
                      ]
                    )
                  ],
                  1
                )
              : _vm._e(),
            _vm._v(" "),
            _vm.is_admin
              ? _c(
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
                          {
                            staticClass: "menu-title",
                            attrs: { "data-i18n": "" }
                          },
                          [_vm._v(_vm._s(_vm.__("Notice")))]
                        )
                      ]
                    )
                  ],
                  1
                )
              : _vm._e(),
            _vm._v(" "),
            _vm.is_admin
              ? _c(
                  "li",
                  { staticClass: "nav-item" },
                  [
                    _c(
                      "inertia-link",
                      {
                        class: _vm.isUrl("sms") ? "active" : "",
                        attrs: { href: _vm.route("sms.index") }
                      },
                      [
                        _c("i", { staticClass: "feather icon-send" }),
                        _vm._v(" "),
                        _c(
                          "span",
                          {
                            staticClass: "menu-title",
                            attrs: { "data-i18n": "" }
                          },
                          [_vm._v(_vm._s(_vm.__("Send SMS")))]
                        )
                      ]
                    )
                  ],
                  1
                )
              : _vm._e(),
            _vm._v(" "),
            _c(
              "li",
              [
                _c(
                  "inertia-link",
                  {
                    class: _vm.isUrl("withdraw") ? "active" : "",
                    attrs: { href: _vm.route("withdraw.index") }
                  },
                  [
                    _c("i", { staticClass: "feather icon-users" }),
                    _vm._v(" "),
                    _c(
                      "span",
                      { staticClass: "menu-title", attrs: { "data-i18n": "" } },
                      [_vm._v("Withdraw")]
                    )
                  ]
                )
              ],
              1
            ),
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

/***/ 248:
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
var normalizeComponent = __webpack_require__(231)
/* script */
var __vue_script__ = __webpack_require__(249)
/* template */
var __vue_template__ = __webpack_require__(250)
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
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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

/***/ 250:
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
                                  _vm._v(" Profile\n\t\t\t\t\t\t\t\t")
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

/***/ 251:
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(252)
}
var normalizeComponent = __webpack_require__(231)
/* script */
var __vue_script__ = __webpack_require__(254)
/* template */
var __vue_template__ = __webpack_require__(255)
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

/***/ 252:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(253);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(232)("7e3e050e", content, false, {});
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

/***/ 253:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(149)(false);
// imports


// module
exports.push([module.i, "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", ""]);

// exports


/***/ }),

/***/ 254:
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

/***/ 255:
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

/***/ 256:
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

/***/ 502:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Shared_Layout__ = __webpack_require__(239);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Shared_Layout___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__Shared_Layout__);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
  name: "MyOrders",
  components: {
    Layout: __WEBPACK_IMPORTED_MODULE_0__Shared_Layout___default.a
  },
  props: {
    msg: String,
    orders: Array,
    success: String,
    errors: Object
  },
  data: function data() {
    return {};
  }
});

/***/ }),

/***/ 503:
/***/ (function(module, exports, __webpack_require__) {

var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("Layout", { attrs: { name: "My Orders" } }, [
    _c("section", { staticClass: "users-list-wrapper" }, [
      _c("div", { attrs: { id: "basic-examples" } }, [
        _c("div", { staticClass: "card" }, [
          _c("div", { staticClass: "card-content" }, [
            _c("div", { staticClass: "card-body" }, [
              _vm.success
                ? _c("div", { staticClass: "alert alert-success" }, [
                    _vm._v(
                      "\n\t\t\t\t\t\t\t" +
                        _vm._s(_vm.success) +
                        "\n\t\t\t\t\t\t"
                    )
                  ])
                : _vm._e(),
              _vm._v(" "),
              _c("div", { staticClass: "table-responsive" }, [
                _c(
                  "table",
                  {
                    staticClass:
                      "table table-bordered responsive table-sm table-condensed"
                  },
                  [
                    _c("thead", [
                      _c("tr", [
                        _c("th", [_vm._v("ID")]),
                        _vm._v(" "),
                        _c("th", { staticStyle: { width: "440px" } }, [
                          _vm._v("Package")
                        ]),
                        _vm._v(" "),
                        _c("th", [_vm._v("User ")]),
                        _vm._v(" "),
                        _c("th", [_vm._v("Buy Price")]),
                        _vm._v(" "),
                        _c("th", [_vm._v("Sale Price")]),
                        _vm._v(" "),
                        _c("th", [_vm._v("Player id")]),
                        _vm._v(" "),
                        _c("th", [_vm._v("Password")]),
                        _vm._v(" "),
                        _c("th", [_vm._v("Accounttype")]),
                        _vm._v(" "),
                        _c("th", [_vm._v("Security Code")]),
                        _vm._v(" "),
                        _c("th", [_vm._v("Status")]),
                        _vm._v(" "),
                        _c("th", [_vm._v("Date")])
                      ])
                    ]),
                    _vm._v(" "),
                    _c(
                      "tbody",
                      _vm._l(_vm.orders, function(row, index) {
                        return _c("tr", { key: index }, [
                          _c("td", [_vm._v(_vm._s(row.id))]),
                          _vm._v(" "),
                          _c("td", { attrs: { width: "7%" } }, [
                            _vm._v(_vm._s(row.package_name) + " ( "),
                            row.package
                              ? _c("span", [
                                  _vm._v(" " + _vm._s(row.package.product_id))
                                ])
                              : _vm._e(),
                            _vm._v(" )")
                          ]),
                          _vm._v(" "),
                          _c("td", { attrs: { width: "20%" } }, [
                            _vm._v(_vm._s(row.user_id) + " ("),
                            row.user
                              ? _c("span", [
                                  _vm._v(" " + _vm._s(row.user.phone) + " ")
                                ])
                              : _vm._e(),
                            _vm._v(")")
                          ]),
                          _vm._v(" "),
                          _c("td", [_vm._v(_vm._s(row.buy_price))]),
                          _vm._v(" "),
                          _c("td", [_vm._v(_vm._s(row.sale_price))]),
                          _vm._v(" "),
                          _c("td", [_vm._v(_vm._s(row.playerid))]),
                          _vm._v(" "),
                          _c("td", [_vm._v(_vm._s(row.password))]),
                          _vm._v(" "),
                          _c("td", [_vm._v(_vm._s(row.accounttype))]),
                          _vm._v(" "),
                          _c("td", [_vm._v(_vm._s(row.securitycode))]),
                          _vm._v(" "),
                          _c("td", [_vm._v(_vm._s(row.status))]),
                          _vm._v(" "),
                          _c("td", [_vm._v(_vm._s(row.created_at))])
                        ])
                      }),
                      0
                    )
                  ]
                )
              ])
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
    require("vue-hot-reload-api")      .rerender("data-v-65531caa", module.exports)
  }
}

/***/ })

});
>>>>>>> 57d8579bea4cf58db48c584e37a5960227da494e
