<<<<<<< HEAD
webpackJsonp([17],{186:function(t,a,e){var s=e(231)(e(553),e(559),!1,function(t){e(551)},null,null);t.exports=s.exports},231:function(t,a){t.exports=function(t,a,e,s,i,n){var r,o=t=t||{},l=typeof t.default;"object"!==l&&"function"!==l||(r=t,o=t.default);var c,d="function"==typeof o?o.options:o;if(a&&(d.render=a.render,d.staticRenderFns=a.staticRenderFns,d._compiled=!0),e&&(d.functional=!0),i&&(d._scopeId=i),n?(c=function(t){(t=t||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext)||"undefined"==typeof __VUE_SSR_CONTEXT__||(t=__VUE_SSR_CONTEXT__),s&&s.call(this,t),t&&t._registeredComponents&&t._registeredComponents.add(n)},d._ssrRegister=c):s&&(c=s),c){var v=d.functional,u=v?d.render:d.beforeCreate;v?(d._injectStyles=c,d.render=function(t,a){return c.call(a),u(t,a)}):d.beforeCreate=u?[].concat(u,c):[c]}return{esModule:r,exports:o,options:d}}},232:function(t,a,e){var s="undefined"!=typeof document;if("undefined"!=typeof DEBUG&&DEBUG&&!s)throw new Error("vue-style-loader cannot be used in a non-browser environment. Use { target: 'node' } in your Webpack config to indicate a server-rendering environment.");var i=e(234),n={},r=s&&(document.head||document.getElementsByTagName("head")[0]),o=null,l=0,c=!1,d=function(){},v=null,u="data-vue-ssr-id",p="undefined"!=typeof navigator&&/msie [6-9]\b/.test(navigator.userAgent.toLowerCase());function m(t){for(var a=0;a<t.length;a++){var e=t[a],s=n[e.id];if(s){s.refs++;for(var i=0;i<s.parts.length;i++)s.parts[i](e.parts[i]);for(;i<e.parts.length;i++)s.parts.push(f(e.parts[i]));s.parts.length>e.parts.length&&(s.parts.length=e.parts.length)}else{var r=[];for(i=0;i<e.parts.length;i++)r.push(f(e.parts[i]));n[e.id]={id:e.id,refs:1,parts:r}}}}function _(){var t=document.createElement("style");return t.type="text/css",r.appendChild(t),t}function f(t){var a,e,s=document.querySelector("style["+u+'~="'+t.id+'"]');if(s){if(c)return d;s.parentNode.removeChild(s)}if(p){var i=l++;s=o||(o=_()),a=g.bind(null,s,i,!1),e=g.bind(null,s,i,!0)}else s=_(),a=function(t,a){var e=a.css,s=a.media,i=a.sourceMap;s&&t.setAttribute("media",s);v.ssrId&&t.setAttribute(u,a.id);i&&(e+="\n/*# sourceURL="+i.sources[0]+" */",e+="\n/*# sourceMappingURL=data:application/json;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(i))))+" */");if(t.styleSheet)t.styleSheet.cssText=e;else{for(;t.firstChild;)t.removeChild(t.firstChild);t.appendChild(document.createTextNode(e))}}.bind(null,s),e=function(){s.parentNode.removeChild(s)};return a(t),function(s){if(s){if(s.css===t.css&&s.media===t.media&&s.sourceMap===t.sourceMap)return;a(t=s)}else e()}}t.exports=function(t,a,e,s){c=e,v=s||{};var r=i(t,a);return m(r),function(a){for(var e=[],s=0;s<r.length;s++){var o=r[s];(l=n[o.id]).refs--,e.push(l)}a?m(r=i(t,a)):r=[];for(s=0;s<e.length;s++){var l;if(0===(l=e[s]).refs){for(var c=0;c<l.parts.length;c++)l.parts[c]();delete n[l.id]}}}};var h,C=(h=[],function(t,a){return h[t]=a,h.filter(Boolean).join("\n")});function g(t,a,e,s){var i=e?"":s.css;if(t.styleSheet)t.styleSheet.cssText=C(a,i);else{var n=document.createTextNode(i),r=t.childNodes;r[a]&&t.removeChild(r[a]),r.length?t.insertBefore(n,r[a]):t.appendChild(n)}}},234:function(t,a){t.exports=function(t,a){for(var e=[],s={},i=0;i<a.length;i++){var n=a[i],r=n[0],o={id:t+":"+i,css:n[1],media:n[2],sourceMap:n[3]};s[r]?s[r].parts.push(o):e.push(s[r]={id:r,parts:[o]})}return e}},235:function(t,a,e){var s=e(231)(e(238),e(239),!1,function(t){e(236)},null,null);t.exports=s.exports},236:function(t,a,e){var s=e(237);"string"==typeof s&&(s=[[t.i,s,""]]),s.locals&&(t.exports=s.locals);e(232)("a3630c76",s,!0,{})},237:function(t,a,e){(t.exports=e(149)(!1)).push([t.i,"",""])},238:function(t,a,e){"use strict";Object.defineProperty(a,"__esModule",{value:!0}),a.default={name:"AppFooter"}},239:function(t,a){t.exports={render:function(){var t=this.$createElement,a=this._self._c||t;return a("div",["horizontal"==this.$page.configData.mainLayoutType?a("footer",{staticClass:"footer footer-light navbar-shadow",class:this.$page.configData.footerType}):a("footer",{staticClass:"footer footer-light",class:this.$page.configData.footerType},[this._m(0)])])},staticRenderFns:[function(){var t=this.$createElement,a=this._self._c||t;return a("p",{staticClass:"clearfix blue-grey lighten-2 mb-0"},[a("span",{staticClass:"float-md-left d-block d-md-inline-block mt-25"},[this._v("COPYRIGHT © 2019\n\t\t\t\t"),a("a",{staticClass:"text-bold-800 grey darken-2",attrs:{href:"http://teammahal.info/",target:"_blank"}},[this._v("Team Mahal,")]),this._v("\n\t\t\t\tAll rights Reserved\n\t\t\t")]),this._v(" "),a("span",{staticClass:"float-md-right d-none d-md-block"},[this._v("Hand-crafted & Made with"),a("i",{staticClass:"feather icon-heart pink"})]),this._v(" "),a("button",{staticClass:"btn btn-primary btn-icon scroll-top",attrs:{type:"button"}},[a("i",{staticClass:"feather icon-arrow-up"})])])}]}},242:function(t,a,e){var s=e(231)(e(245),e(259),!1,function(t){e(243)},null,null);t.exports=s.exports},243:function(t,a,e){var s=e(244);"string"==typeof s&&(s=[[t.i,s,""]]),s.locals&&(t.exports=s.locals);e(232)("3a768754",s,!0,{})},244:function(t,a,e){(t.exports=e(149)(!1)).push([t.i,"",""])},245:function(t,a,e){"use strict";Object.defineProperty(a,"__esModule",{value:!0});var s=e(246),i=e.n(s),n=e(251),r=e.n(n),o=e(235),l=e.n(o),c=e(254),d=e.n(c);a.default={name:"Layout",components:{Breadcrumb:d.a,AppFooter:l.a,Navbar:r.a,Sidebar:i.a},created:function(){},methods:{url:function(){return location.pathname.substr(1)},hideDropdownMenus:function(){this.showUserMenu=!1}}}},246:function(t,a,e){var s=e(231)(e(249),e(250),!1,function(t){e(247)},null,null);t.exports=s.exports},247:function(t,a,e){var s=e(248);"string"==typeof s&&(s=[[t.i,s,""]]),s.locals&&(t.exports=s.locals);e(232)("51b3cdb0",s,!0,{})},248:function(t,a,e){(t.exports=e(149)(!1)).push([t.i,"",""])},249:function(t,a,e){"use strict";Object.defineProperty(a,"__esModule",{value:!0}),a.default={name:"Sidebar",props:{url:String},data:function(){return{is_admin:!1}},methods:{isUrl:function(){for(var t=this,a=arguments.length,e=new Array(a),s=0;s<a;s++)e[s]=arguments[s];return""===e[0]?""===this.url:e.filter(function(a){return t.url.startsWith(a)}).length},checkAccess:function(){this.is_admin=1==this.$page.auth.is_admin}},created:function(){this.checkAccess()}}},250:function(t,a){t.exports={render:function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"main-menu menu-accordion menu-shadow",class:t.$page.configData.menuType+" "+["light"===t.$page.configData.theme?"menu-light":"menu-dark"],attrs:{"data-scroll-to-active":"true"}},[e("div",{staticClass:"navbar-header"},[e("ul",{staticClass:"nav navbar-nav flex-row",staticStyle:{"background-image":"url(/images/logo/logo.png)","background-size":"contain","background-repeat":"no-repeat"}},[e("li",{staticClass:"nav-item mr-auto"},[e("inertia-link",{staticClass:"navbar-brand",attrs:{href:"/dashboard"}})],1),t._v(" "),t._m(0)])]),t._v(" "),e("div",{staticClass:"shadow-bottom"}),t._v(" "),e("div",{staticClass:"main-menu-content"},[e("ul",{staticClass:"navigation navigation-main",attrs:{id:"main-menu-navigation","data-menu":"menu-navigation"}},[e("li",{staticClass:"nav-item"},[e("inertia-link",{attrs:{href:"/"}},[e("i",{staticClass:"feather icon-home"}),t._v(" "),e("span",{staticClass:"menu-title",attrs:{"data-i18n":""}},[t._v(t._s(t.__("Dashboard")))])])],1),t._v(" "),t.is_admin?e("li",{staticClass:"nav-item"},[e("inertia-link",{class:t.isUrl("brand")?"active":"",attrs:{href:t.route("brand.index")}},[e("i",{staticClass:"feather icon-home"}),t._v(" "),e("span",{staticClass:"menu-title nav-link-text",attrs:{"data-i18n":""}},[t._v(t._s(t.__("Brand")))])])],1):t._e(),t._v(" "),t.is_admin?e("li",{staticClass:"nav-item"},[e("inertia-link",{class:t.isUrl("category")?"active":"",attrs:{href:t.route("category.index")}},[e("i",{staticClass:"feather icon-home"}),t._v(" "),e("span",{staticClass:"menu-title nav-link-text",attrs:{"data-i18n":""}},[t._v(t._s(t.__("Category")))])])],1):t._e(),t._v(" "),t.is_admin?e("li",{staticClass:"nav-item"},[e("inertia-link",{class:t.isUrl("product")?"active":"",attrs:{href:t.route("product.index")}},[e("i",{staticClass:"feather icon-home"}),t._v(" "),e("span",{staticClass:"menu-title nav-link-text",attrs:{"data-i18n":""}},[t._v(t._s(t.__("Product")))])])],1):t._e(),t._v(" "),t.is_admin?e("li",{staticClass:"nav-item"},[e("inertia-link",{class:t.isUrl("package")?"active":"",attrs:{href:t.route("package.index")}},[e("i",{staticClass:"feather icon-home"}),t._v(" "),e("span",{staticClass:"menu-title nav-link-text",attrs:{"data-i18n":""}},[t._v(t._s(t.__("Package")))])])],1):t._e(),t._v(" "),t.is_admin?e("li",{staticClass:"nav-item"},[e("inertia-link",{class:t.isUrl("paymentmethod")?"active":"",attrs:{href:t.route("paymentmethod.index")}},[e("i",{staticClass:"feather icon-home"}),t._v(" "),e("span",{staticClass:"menu-title nav-link-text",attrs:{"data-i18n":""}},[t._v(t._s(t.__("Payment Method")))])])],1):t._e(),t._v(" "),t.is_admin?e("li",{staticClass:"nav-item"},[e("inertia-link",{class:t.isUrl("banner")?"active":"",attrs:{href:t.route("banner.index")}},[e("i",{staticClass:"feather icon-home"}),t._v(" "),e("span",{staticClass:"menu-title nav-link-text",attrs:{"data-i18n":""}},[t._v(t._s(t.__("Banner")))])])],1):t._e(),t._v(" "),e("li",{staticClass:"nav-item"},[e("inertia-link",{class:t.isUrl("transaction")?"active":"",attrs:{href:t.route("transaction.index")}},[e("i",{staticClass:"feather icon-home"}),t._v(" "),e("span",{staticClass:"menu-title nav-link-text",attrs:{"data-i18n":""}},[t._v(t._s(t.__("Transaction")))])])],1),t._v(" "),e("li",{staticClass:"nav-item"},[e("inertia-link",{class:t.isUrl("order")?"active":"",attrs:{href:t.route("order.index")}},[e("i",{staticClass:"feather icon-home"}),t._v(" "),e("span",{staticClass:"menu-title nav-link-text",attrs:{"data-i18n":""}},[t.is_admin?e("span",[t._v(t._s(t.__("Order")))]):e("span",[t._v("Global orders")])])])],1),t._v(" "),t.is_admin?t._e():e("li",{staticClass:"nav-item"},[e("inertia-link",{class:t.isUrl("seller/orders")?"active":"",attrs:{href:t.route("seller.orders.index")}},[e("i",{staticClass:"feather icon-home"}),t._v(" "),e("span",{staticClass:"menu-title nav-link-text",attrs:{"data-i18n":""}},[e("span",[t._v("My orders")])])])],1),t._v(" "),e("li",{staticClass:"nav-item"},[e("inertia-link",{class:t.isUrl("invoice")?"active":"",attrs:{href:t.route("invoice.index")}},[e("i",{staticClass:"feather icon-home"}),t._v(" "),e("span",{staticClass:"menu-title nav-link-text",attrs:{"data-i18n":""}},[t._v(t._s(t.__("Invoice")))])])],1),t._v(" "),t.is_admin?e("li",{staticClass:"nav-item"},[e("inertia-link",{class:t.isUrl("user")?"active":"",attrs:{href:t.route("users.index")}},[e("i",{staticClass:"feather icon-users"}),t._v(" "),e("span",{staticClass:"menu-title",attrs:{"data-i18n":""}},[t._v(t._s(t.__("Users")))])])],1):t._e(),t._v(" "),t.is_admin?e("li",{staticClass:"nav-item"},[e("inertia-link",{class:t.isUrl("notice")?"active":"",attrs:{href:t.route("notice.index")}},[e("i",{staticClass:"feather icon-users"}),t._v(" "),e("span",{staticClass:"menu-title",attrs:{"data-i18n":""}},[t._v(t._s(t.__("Notice")))])])],1):t._e(),t._v(" "),t.is_admin?e("li",{staticClass:"nav-item"},[e("inertia-link",{class:t.isUrl("sms")?"active":"",attrs:{href:t.route("sms.index")}},[e("i",{staticClass:"feather icon-send"}),t._v(" "),e("span",{staticClass:"menu-title",attrs:{"data-i18n":""}},[t._v(t._s(t.__("Send SMS")))])])],1):t._e(),t._v(" "),e("li",[e("inertia-link",{class:t.isUrl("withdraw")?"active":"",attrs:{href:t.route("withdraw_requests.index")}},[e("i",{staticClass:"feather icon-users"}),t._v(" "),e("span",{staticClass:"menu-title",attrs:{"data-i18n":""}},[t._v("Withdraw Requests")])])],1),t._v(" "),t.$can("subscription_access")?e("li",{staticClass:"nav-item"},[e("inertia-link",{attrs:{href:t.route("subscriptions.index")}},[e("i",{staticClass:"feather icon-users"}),t._v(" "),e("span",{staticClass:"menu-title",attrs:{"data-i18n":""}},[t._v(t._s(t.__("Subscription")))])])],1):t._e(),t._v(" "),t.$can("role_access")?e("li",{staticClass:"nav-item"},[e("inertia-link",{attrs:{href:t.route("roles.index")}},[e("i",{staticClass:"feather icon-unlock"}),t._v(" "),e("span",{staticClass:"menu-title",attrs:{"data-i18n":""}},[t._v(t._s(t.__("Role")))])])],1):t._e(),t._v(" "),t.$can("permission_access")?e("li",{staticClass:"nav-item"},[e("inertia-link",{attrs:{href:t.route("permissions.index")}},[e("i",{staticClass:"feather icon-unlock"}),t._v(" "),e("span",{staticClass:"menu-title",attrs:{"data-i18n":""}},[t._v(t._s(t.__("Permission")))])])],1):t._e(),t._v(" "),t.$can("gender_access")?e("li",{staticClass:"nav-item"},[e("inertia-link",{attrs:{href:t.route("genders.index")}},[e("i",{staticClass:"feather icon-unlock"}),t._v(" "),e("span",{staticClass:"menu-title",attrs:{"data-i18n":""}},[t._v(t._s(t.__("Gender")))])])],1):t._e(),t._v(" "),t.$can("religion_access")?e("li",{staticClass:"nav-item"},[e("inertia-link",{attrs:{href:t.route("religions.index")}},[e("i",{staticClass:"feather icon-unlock"}),t._v(" "),e("span",{staticClass:"menu-title",attrs:{"data-i18n":""}},[t._v(t._s(t.__("Religion")))])])],1):t._e(),t._v(" "),t.$can("blood_group_access")?e("li",{staticClass:"nav-item"},[e("inertia-link",{attrs:{href:t.route("blood-groups.index")}},[e("i",{staticClass:"feather icon-unlock"}),t._v(" "),e("span",{staticClass:"menu-title",attrs:{"data-i18n":""}},[t._v(t._s(t.__("Blood Group")))])])],1):t._e()])])])},staticRenderFns:[function(){var t=this.$createElement,a=this._self._c||t;return a("li",{staticClass:"nav-item nav-toggle"},[a("a",{staticClass:"nav-link modern-nav-toggle pr-0",attrs:{"data-toggle":"collapse"}},[a("i",{staticClass:"feather icon-x d-block d-xl-none font-medium-4 primary toggle-icon"}),a("i",{staticClass:"toggle-icon feather icon-disc font-medium-4 d-none d-xl-block primary collapse-toggle-icon",attrs:{"data-ticon":"icon-disc"}})])])}]}},251:function(t,a,e){var s=e(231)(e(252),e(253),!1,null,null,null);t.exports=s.exports},252:function(t,a,e){"use strict";Object.defineProperty(a,"__esModule",{value:!0}),a.default={name:"Navbar",methods:{logout:function(){this.$inertia.post(this.route("logout"))}}}},253:function(t,a){t.exports={render:function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",["horizontal"==t.$page.configData.mainLayoutType?e("nav",{staticClass:"header-navbar navbar-expand-lg navbar navbar-with-menu navbar-fixed",class:t.$page.configData.navbarColor},[t._m(0)]):e("nav",{staticClass:"header-navbar navbar-expand-lg navbar navbar-with-menu navbar-light navbar-shadow",class:t.$page.configData.navbarClass+" "+t.$page.configData.navbarColor},[e("div",{staticClass:"navbar-wrapper"},[e("div",{staticClass:"navbar-container content"},[e("div",{staticClass:"navbar-collapse",attrs:{id:"navbar-mobile"}},[e("div",{staticClass:"mr-auto float-left bookmark-wrapper d-flex align-items-center"},[t._m(1),t._v(" "),e("ul",{staticClass:"nav navbar-nav"},[t.$page.app?e("li",{staticClass:"nav-item d-none d-lg-block app-title"},[e("a",{staticClass:"bookmark-star"},[e("i",{staticClass:"ficon feather icon-star warning"}),t._v(" "+t._s(t.$page.app?t.$page.app.name:""))]),t._v(" "),t._m(2)]):t._e()])]),t._v(" "),e("ul",{staticClass:"nav navbar-nav float-right"},[e("li",{staticClass:"dropdown dropdown-language nav-item"},[e("a",{staticClass:"dropdown-toggle nav-link",attrs:{id:"dropdown-flag",href:"#","data-toggle":"dropdown","aria-haspopup":"true","aria-expanded":"false"}},[e("span",{staticClass:"selected-language"},[t._v(t._s(t.currentLanguage()))])]),t._v(" "),e("div",{staticClass:"dropdown-menu",attrs:{"aria-labelledby":"dropdown-flag"}},[e("inertia-link",{staticClass:"dropdown-item",attrs:{href:t.current()+"?lang=en","data-language":"en"}},[t._v(" English")]),t._v(" "),e("inertia-link",{staticClass:"dropdown-item",attrs:{href:t.current()+"?lang=bn","data-language":"bn"}},[t._v(" বাংলা")])],1)]),t._v(" "),t._m(3),t._v(" "),t._m(4),t._v(" "),e("li",{staticClass:"dropdown dropdown-user nav-item"},[e("a",{staticClass:"dropdown-toggle nav-link dropdown-user-link",attrs:{href:"#","data-toggle":"dropdown"}},[e("div",{staticClass:"user-nav d-sm-flex d-none"},[e("span",{staticClass:"user-name text-bold-600"},[t._v(t._s(t.$page.auth.name))])]),t._v(" "),t._m(5)]),t._v(" "),e("div",{staticClass:"dropdown-menu dropdown-menu-right"},[e("a",{staticClass:"dropdown-item",attrs:{href:t.route("users.show",t.$page.auth.slug)}},[e("i",{staticClass:"feather icon-user"}),t._v(" Profile\n\t\t\t\t\t\t\t\t")]),t._v(" "),e("div",{staticClass:"dropdown-divider"}),t._v(" "),e("a",{staticClass:"dropdown-item",on:{click:t.logout}},[e("i",{staticClass:"feather icon-power"}),t._v(" Logout")])])])])])])])])])},staticRenderFns:[function(){var t=this.$createElement,a=this._self._c||t;return a("div",{staticClass:"navbar-header d-xl-block d-none"},[a("ul",{staticClass:"nav navbar-nav flex-row"},[a("li",{staticClass:"nav-item"},[a("a",{staticClass:"navbar-brand",attrs:{href:"dashboard-analytics"}},[a("div",{staticClass:"brand-logo"})])])])])},function(){var t=this.$createElement,a=this._self._c||t;return a("ul",{staticClass:"nav navbar-nav"},[a("li",{staticClass:"nav-item mobile-menu d-xl-none mr-auto"},[a("a",{staticClass:"nav-link nav-menu-main menu-toggle hidden-xs",attrs:{href:"#"}},[a("i",{staticClass:"ficon feather icon-menu"})])])])},function(){var t=this.$createElement,a=this._self._c||t;return a("div",{staticClass:"bookmark-input search-input"},[a("div",{staticClass:"bookmark-input-icon"},[a("i",{staticClass:"feather icon-search primary"})]),this._v(" "),a("input",{staticClass:"form-control input",attrs:{type:"text",placeholder:"Explore Vuexy...",tabindex:"0","data-search":"laravel-starter-list"}}),this._v(" "),a("ul",{staticClass:"search-list search-list-bookmark"})])},function(){var t=this.$createElement,a=this._self._c||t;return a("li",{staticClass:"nav-item d-none d-lg-block"},[a("a",{staticClass:"nav-link nav-link-expand"},[a("i",{staticClass:"ficon feather icon-maximize"})])])},function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("li",{staticClass:"dropdown dropdown-notification nav-item"},[e("a",{staticClass:"nav-link nav-link-label",attrs:{href:"#","data-toggle":"dropdown"}},[e("i",{staticClass:"ficon feather icon-bell"}),e("span",{staticClass:"badge badge-pill badge-primary badge-up"},[t._v("5")])]),t._v(" "),e("ul",{staticClass:"dropdown-menu dropdown-menu-media dropdown-menu-right"},[e("li",{staticClass:"dropdown-menu-header"},[e("div",{staticClass:"dropdown-header m-0 p-2"},[e("h3",{staticClass:"white"},[t._v("5 New")]),e("span",{staticClass:"grey darken-2"},[t._v("App Notifications")])])]),t._v(" "),e("li",{staticClass:"scrollable-container media-list"},[e("a",{staticClass:"d-flex justify-content-between",attrs:{href:"javascript:void(0)"}},[e("div",{staticClass:"media d-flex align-items-start"},[e("div",{staticClass:"media-left"},[e("i",{staticClass:"feather icon-download-cloud font-medium-5 success"})]),t._v(" "),e("div",{staticClass:"media-body"},[e("h6",{staticClass:"success media-heading red darken-1"},[t._v("99% Server load")]),t._v(" "),e("small",{staticClass:"notification-text"},[t._v("You got new order of goods.")])]),t._v(" "),e("small",[e("time",{staticClass:"media-meta",attrs:{datetime:"2015-06-11T18:29:20+08:00"}},[t._v("5 hour ago")])])])])]),t._v(" "),e("li",{staticClass:"dropdown-menu-footer"},[e("a",{staticClass:"dropdown-item p-1 text-center",attrs:{href:"javascript:void(0)"}},[t._v("Read all notifications")])])])])},function(){var t=this.$createElement,a=this._self._c||t;return a("span",[a("img",{staticClass:"round",attrs:{src:"/images/profile/user-uploads/user-09.jpg",alt:"avatar",height:"40",width:"40"}})])}]}},254:function(t,a,e){var s=e(231)(e(257),e(258),!1,function(t){e(255)},null,null);t.exports=s.exports},255:function(t,a,e){var s=e(256);"string"==typeof s&&(s=[[t.i,s,""]]),s.locals&&(t.exports=s.locals);e(232)("5812e8f3",s,!0,{})},256:function(t,a,e){(t.exports=e(149)(!1)).push([t.i,"",""])},257:function(t,a,e){"use strict";Object.defineProperty(a,"__esModule",{value:!0}),a.default={name:"Breadcrumb"}},258:function(t,a){t.exports={render:function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"content-header row"},[e("div",{staticClass:"content-header-left col-md-9 col-12 mb-2"},[e("div",{staticClass:"row breadcrumbs-top"},[e("div",{staticClass:"col-12"},[e("h2",{staticClass:"content-header-title float-left mb-0"}),t._v(" "),e("div",{staticClass:"breadcrumb-wrapper col-12"},[t.$page.breadcrumbs?e("ol",{staticClass:"breadcrumb"},t._l(t.$page.breadcrumbs,function(a){return e("li",{staticClass:"breadcrumb-item"},[a.link?e("inertia-link",{attrs:{href:a.link}},[t._v("\n                "+t._s(a.name)+"\n              ")]):e("span",[t._v(t._s(a.name))])],1)}),0):t._e()])])])]),t._v(" "),t.$page.has_modal?e("div",{staticClass:"content-header-right text-md-right col-md-3 col-12 d-md-block d-none"},[t._m(0)]):t._e()])},staticRenderFns:[function(){var t=this.$createElement,a=this._self._c||t;return a("button",{staticClass:"btn-icon waves-effect waves-light btn btn-primary btn-sm",attrs:{"data-toggle":"modal","data-target":"#default",type:"button"}},[a("i",{staticClass:"feather icon-plus-circle"}),this._v(" New\n    ")])}]}},259:function(t,a){t.exports={render:function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{attrs:{id:"app"}},[e("sidebar",{attrs:{url:t.url()}}),t._v(" "),e("div",{staticClass:"app-content content"},[e("div",{staticClass:"content-overlay"}),t._v(" "),e("div",{staticClass:"header-navbar-shadow"}),t._v(" "),e("navbar"),t._v(" "),t.$page.configData.contentLayout?e("div",{staticClass:"content-area-wrapper"},[e("div",{class:t.$page.configData.sidebarPositionClass},[e("div",{staticClass:"sidebar"},[t._t("default")],2)]),t._v(" "),e("div",{class:t.$page.configData.contentsidebarClass},[e("div",{staticClass:"content-wrapper"},[e("div",{staticClass:"content-body"},[t._t("default")],2)])])]):e("div",{staticClass:"content-wrapper"},[1==t.$page.configData.pageHeader?e("div",[e("breadcrumb")],1):t._e(),t._v(" "),e("div",{staticClass:"content-body"},[t._t("default")],2)])],1),t._v(" "),e("div",{staticClass:"sidenav-overlay"}),t._v(" "),e("div",{staticClass:"drag-target"}),t._v(" "),e("app-footer")],1)},staticRenderFns:[]}},551:function(t,a,e){var s=e(552);"string"==typeof s&&(s=[[t.i,s,""]]),s.locals&&(t.exports=s.locals);e(232)("5a5bd5b6",s,!0,{})},552:function(t,a,e){(t.exports=e(149)(!1)).push([t.i,"",""])},553:function(t,a,e){"use strict";Object.defineProperty(a,"__esModule",{value:!0});var s=e(242),i=e.n(s),n=e(554),r=e.n(n);a.default={name:"UserProfile",components:{Alert:r.a,Layout:i.a},props:{user:Object,genders:Array,religions:Array,errors:Object,success:String},data:function(){return{avatar:null,form:{password:"",password_confirmation:""}}},methods:{updatePassword:function(){var t=this;this.$inertia.post(this.route("users.password.update",this.user.id),{password:this.form.password,password_confirmation:this.form.password_confirmation}).then(function(a){t.form.password="",t.form.password_confirmation=""})},update:function(){this.$inertia.post(this.route("users.profile.account.update",this.user.id),{name:this.user.name,phone:this.user.phone,email:this.user.email,gender_id:this.user.gender_id,religion_id:this.user.religion_id,birth_date:this.user.birth_date})},showImage:function(t){var a=t.target.files[0],e=URL.createObjectURL(a);$("#avatar").attr("src",e),this.avatar=a},uploadImage:function(){if(null!==this.avatar){var t=new FormData;t.append("avatar",this.avatar),this.$inertia.post(this.route("users.profile.avatar.update",this.user.id),t)}}}}},554:function(t,a,e){var s=e(231)(e(557),e(558),!1,function(t){e(555)},null,null);t.exports=s.exports},555:function(t,a,e){var s=e(556);"string"==typeof s&&(s=[[t.i,s,""]]),s.locals&&(t.exports=s.locals);e(232)("702a4bc7",s,!0,{})},556:function(t,a,e){(t.exports=e(149)(!1)).push([t.i,"",""])},557:function(t,a,e){"use strict";Object.defineProperty(a,"__esModule",{value:!0}),a.default={name:"Alert",props:{alertClass:{type:String,default:"alert-primary",required:!1}}}},558:function(t,a){t.exports={render:function(){var t=this.$createElement;return(this._self._c||t)("div",{staticClass:"alert alert-dismissible fade show",class:this.alertClass,attrs:{role:"alert"}},[this._t("default")],2)},staticRenderFns:[]}},559:function(t,a){t.exports={render:function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("layout",{attrs:{name:"UserProfile"}},[e("section",{staticClass:"users-list-wrapper"},[e("div",{attrs:{id:"basic-examples"}},[e("div",{staticClass:"card"},[e("div",{staticClass:"card-content"},[e("div",{staticClass:"card-body"},[e("div",{staticClass:"card-body"},[t.success?e("alert",[t._v(t._s(t.success))]):t._e(),t._v(" "),e("ul",{staticClass:"nav nav-tabs mb-3",attrs:{role:"tablist"}},[e("li",{staticClass:"nav-item"},[e("a",{staticClass:"nav-link d-flex align-items-center active",attrs:{id:"account-tab","data-toggle":"tab",href:"#account","aria-controls":"account",role:"tab","aria-selected":"true"}},[e("i",{staticClass:"feather icon-user mr-25"}),e("span",{staticClass:"d-none d-sm-block"},[t._v("Account")])])])]),t._v(" "),e("div",{staticClass:"tab-content"},[e("div",{staticClass:"tab-pane active",attrs:{id:"account","aria-labelledby":"account-tab",role:"tabpanel"}},[e("div",{staticClass:"media mb-2"},[e("div",{staticClass:"banner-logo-upload-box mx-auto",staticStyle:{width:"105px",height:"105px"}},[e("img",{staticClass:"users-avatar-shadow rounded",attrs:{id:"avatar",height:"90",width:"90",src:t.user.avatar_small,alt:""}}),t._v(" "),e("label",{staticClass:"btn-pill"},[e("i",{staticClass:"fa fa-camera"}),t._v(" "),e("input",{staticClass:"hidden",attrs:{id:"image",type:"file",name:"avatar"},on:{change:t.showImage}})])]),t._v(" "),e("div",{staticClass:"media-body mt-50 ml-2"},[e("h4",{staticClass:"media-heading"},[t._v(t._s(t.user.name))]),t._v(" "),e("div",{staticClass:"col-12 d-flex mt-1 px-0"},[e("button",{staticClass:"btn btn-primary d-none d-sm-block mr-75 waves-effect waves-light",attrs:{type:"button"},on:{click:t.uploadImage}},[t._v("\n                          Change\n                        ")]),t._v(" "),e("a",{staticClass:"btn btn-primary d-block d-sm-none mr-75 waves-effect waves-light",attrs:{href:"#"}},[e("i",{staticClass:"feather icon-edit-1"})]),t._v(" "),e("a",{staticClass:"btn btn-outline-danger d-none d-sm-block waves-effect waves-light",attrs:{href:"#"}},[t._v("Remove")]),t._v(" "),e("a",{staticClass:"btn btn-outline-danger d-block d-sm-none waves-effect waves-light",attrs:{href:"#"}},[e("i",{staticClass:"feather icon-trash-2"})])])])]),t._v(" "),e("form",{on:{submit:function(a){return a.preventDefault(),t.update(a)}}},[e("div",{staticClass:"row"},[e("div",{staticClass:"col-12 col-sm-6"},[e("div",{staticClass:"form-group"},[e("div",{staticClass:"controls"},[e("label",[t._v("Name")]),t._v(" "),e("input",{directives:[{name:"model",rawName:"v-model",value:t.user.name,expression:"user.name"}],staticClass:"form-control",attrs:{type:"text",placeholder:"Name"},domProps:{value:t.user.name},on:{input:function(a){a.target.composing||t.$set(t.user,"name",a.target.value)}}}),t._v(" "),t.errors.name?e("div",{staticClass:"text-danger"},[t._v("\n                              "+t._s(t.errors.name[0])+"\n                            ")]):t._e()])]),t._v(" "),e("div",{staticClass:"form-group"},[e("div",{staticClass:"controls"},[e("label",[t._v("Contact No.")]),t._v(" "),e("input",{directives:[{name:"model",rawName:"v-model",value:t.user.phone,expression:"user.phone"}],staticClass:"form-control",attrs:{type:"text",placeholder:"Contact No."},domProps:{value:t.user.phone},on:{input:function(a){a.target.composing||t.$set(t.user,"phone",a.target.value)}}}),t._v(" "),t.errors.phone?e("div",{staticClass:"invalid-feedback"},[t._v("\n                              "+t._s(t.errors.phone[0])+"\n                            ")]):t._e()])]),t._v(" "),e("div",{staticClass:"form-group"},[e("div",{staticClass:"controls"},[e("label",[t._v("E-mail")]),t._v(" "),e("input",{directives:[{name:"model",rawName:"v-model",value:t.user.email,expression:"user.email"}],staticClass:"form-control",attrs:{type:"email",placeholder:"Email"},domProps:{value:t.user.email},on:{input:function(a){a.target.composing||t.$set(t.user,"email",a.target.value)}}}),t._v(" "),t.errors.email?e("div",{staticClass:"invalid-feedback"},[t._v("\n                              "+t._s(t.errors.email[0])+"\n                            ")]):t._e()])])]),t._v(" "),e("div",{staticClass:"col-12 col-sm-6"},[e("div",{staticClass:"form-group"},[e("label",[t._v("Gender")]),t._v(" "),e("select",{directives:[{name:"model",rawName:"v-model",value:t.user.gender_id,expression:"user.gender_id"}],staticClass:"form-control",on:{change:function(a){var e=Array.prototype.filter.call(a.target.options,function(t){return t.selected}).map(function(t){return"_value"in t?t._value:t.value});t.$set(t.user,"gender_id",a.target.multiple?e:e[0])}}},[e("option",[t._v("Select ...")]),t._v(" "),t._l(t.genders,function(a){return e("option",{key:a.id,domProps:{value:a.id,selected:[a.id==t.user.gender_id]}},[t._v("\n                              "+t._s(a.name)+"\n                            ")])})],2),t._v(" "),t.errors.gender_id?e("div",{staticClass:"invalid-feedback"},[t._v("\n                            "+t._s(t.errors.gender_id[0])+"\n                          ")]):t._e()]),t._v(" "),e("div",{staticClass:"form-group"},[e("label",[t._v("Role")]),t._v(" "),e("select",{directives:[{name:"model",rawName:"v-model",value:t.user.religion_id,expression:"user.religion_id"}],staticClass:"form-control",on:{change:function(a){var e=Array.prototype.filter.call(a.target.options,function(t){return t.selected}).map(function(t){return"_value"in t?t._value:t.value});t.$set(t.user,"religion_id",a.target.multiple?e:e[0])}}},[e("option",{attrs:{value:""}},[t._v("Select ...")]),t._v(" "),t._l(t.religions,function(a){return e("option",{key:a.id,domProps:{value:a.id,selected:[a.id==t.user.religion_id]}},[t._v("\n                              "+t._s(a.name)+"\n                            ")])})],2),t._v(" "),t.errors.religion_id?e("div",{staticClass:"invalid-feedback"},[t._v("\n                            "+t._s(t.errors.religion_id[0])+"\n                          ")]):t._e()]),t._v(" "),e("div",{staticClass:"form-group"},[e("div",{staticClass:"controls"},[e("label",[t._v("Birth Date")]),t._v(" "),e("date-picker",{staticClass:"form-control",attrs:{placeholder:"Birth Date"},model:{value:t.user.birth_date,callback:function(a){t.$set(t.user,"birth_date",a)},expression:"user.birth_date"}}),t._v(" "),t.errors.birth_date?e("div",{staticClass:"text-danger"},[t._v("\n                              "+t._s(t.errors.birth_date[0])+"\n                            ")]):t._e()],1)])]),t._v(" "),e("div",{staticClass:"col-12 d-flex flex-sm-row flex-column justify-content-end mt-1"},[e("button",{staticClass:"btn btn-primary glow mb-1 mb-sm-0 mr-0 mr-sm-1 waves-effect waves-light",attrs:{type:"submit"}},[t._v("\n                          Save Changes\n                        ")]),t._v(" "),e("button",{staticClass:"btn btn-outline-warning waves-effect waves-light",attrs:{type:"reset"}},[t._v("\n                          Reset\n                        ")])])])]),t._v(" "),e("form",{on:{submit:function(a){return a.preventDefault(),t.updatePassword(a)}}},[e("div",{staticClass:"row"},[e("div",{staticClass:"col-12 col-sm-6"},[e("div",{staticClass:"form-group"},[e("div",{staticClass:"controls"},[e("label",[t._v("Password")]),t._v(" "),e("input",{directives:[{name:"model",rawName:"v-model",value:t.form.password,expression:"form.password"}],staticClass:"form-control",attrs:{type:"password",placeholder:"Password"},domProps:{value:t.form.password},on:{input:function(a){a.target.composing||t.$set(t.form,"password",a.target.value)}}}),t._v(" "),t.errors.password?e("div",{staticClass:"text-danger"},[t._v("\n                              "+t._s(t.errors.password[0])+"\n                            ")]):t._e()])])]),t._v(" "),e("div",{staticClass:"col-12 col-sm-6"},[e("div",{staticClass:"form-group"},[e("div",{staticClass:"controls"},[e("label",[t._v("Confirm Password")]),t._v(" "),e("input",{directives:[{name:"model",rawName:"v-model",value:t.form.password_confirmation,expression:"form.password_confirmation"}],staticClass:"form-control",attrs:{type:"password",placeholder:"Confirm Password"},domProps:{value:t.form.password_confirmation},on:{input:function(a){a.target.composing||t.$set(t.form,"password_confirmation",a.target.value)}}}),t._v(" "),t.errors.password_confirmation?e("div",{staticClass:"text-danger"},[t._v("\n                              "+t._s(t.errors.password_confirmation[0])+"\n                            ")]):t._e()])])]),t._v(" "),e("div",{staticClass:"col-12 d-flex flex-sm-row flex-column justify-content-end mt-1"},[e("button",{staticClass:"btn btn-outline-warning waves-effect waves-light",attrs:{type:"submit"}},[t._v("\n                          Reset Password\n                        ")])])])])]),t._v(" "),e("div",{staticClass:"tab-pane",attrs:{id:"information","aria-labelledby":"information-tab",role:"tabpanel"}})])],1)])])])])])])},staticRenderFns:[]}}});
=======
webpackJsonp([17],{

/***/ 170:
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(479)
}
var normalizeComponent = __webpack_require__(231)
/* script */
var __vue_script__ = __webpack_require__(481)
/* template */
var __vue_template__ = __webpack_require__(482)
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
Component.options.__file = "resources/js/Pages/Paymentmethod/Index.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-75c0801e", Component.options)
  } else {
    hotAPI.reload("data-v-75c0801e", Component.options)
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

/***/ 271:
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
var normalizeComponent = __webpack_require__(231)
/* script */
var __vue_script__ = __webpack_require__(272)
/* template */
var __vue_template__ = __webpack_require__(273)
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
Component.options.__file = "resources/js/Shared/Pagination.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-7ed7fa14", Component.options)
  } else {
    hotAPI.reload("data-v-7ed7fa14", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),

/***/ 272:
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
/* harmony default export */ __webpack_exports__["default"] = ({
  props: {
    links: Array
  },
  computed: {
    showPagination: function showPagination() {
      return 1;
    }
  },
  methods: {
    isActive: function isActive(link) {
      return link.active === true ? 'active' : 'normal';
    },
    handleNoLink: function handleNoLink() {
      return false;
    }
  }
});

/***/ }),

/***/ 273:
/***/ (function(module, exports, __webpack_require__) {

var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _vm.showPagination
    ? _c("nav", { attrs: { "aria-label": "Page navigation example" } }, [
        _c(
          "ul",
          { staticClass: "pagination" },
          _vm._l(_vm.links, function(link, key) {
            return _c(
              "li",
              { key: key, staticClass: "page-item", class: _vm.isActive(link) },
              [
                link.url
                  ? _c(
                      "inertia-link",
                      { staticClass: "page-link", attrs: { href: link.url } },
                      [_vm._v(_vm._s(link.label))]
                    )
                  : _c(
                      "a",
                      {
                        staticClass: "page-link",
                        attrs: { href: "#" },
                        on: {
                          click: function($event) {
                            $event.preventDefault()
                            return _vm.handleNoLink($event)
                          }
                        }
                      },
                      [_vm._v(_vm._s(link.label))]
                    )
              ],
              1
            )
          }),
          0
        )
      ])
    : _vm._e()
}
var staticRenderFns = []
render._withStripped = true
module.exports = { render: render, staticRenderFns: staticRenderFns }
if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-hot-reload-api")      .rerender("data-v-7ed7fa14", module.exports)
  }
}

/***/ }),

/***/ 479:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(480);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(232)("61600d74", content, false, {});
// Hot Module Replacement
if(false) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept("!!../../../../node_modules/css-loader/index.js!../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-75c0801e\",\"scoped\":false,\"hasInlineConfig\":true}!../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./Index.vue", function() {
     var newContent = require("!!../../../../node_modules/css-loader/index.js!../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-75c0801e\",\"scoped\":false,\"hasInlineConfig\":true}!../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./Index.vue");
     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ 480:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(149)(false);
// imports


// module
exports.push([module.i, "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", ""]);

// exports


/***/ }),

/***/ 481:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Shared_Layout__ = __webpack_require__(239);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Shared_Layout___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__Shared_Layout__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__Shared_Pagination__ = __webpack_require__(271);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__Shared_Pagination___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__Shared_Pagination__);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
  name: "Paymentmethod",
  components: {
    Layout: __WEBPACK_IMPORTED_MODULE_0__Shared_Layout___default.a,
    Pagination: __WEBPACK_IMPORTED_MODULE_1__Shared_Pagination___default.a
  },
  props: {
    msg: String,
    paymentmethods: Object,
    success: String,
    errors: Object
  },
  data: function data() {
    return {
      editMode: false,
      form: {
        name: null,
        number: null,
        logo: null
      }
    };
  },
  methods: {
    setLogo: function setLogo(e) {
      this.form.logo = e.target.files[0];
    },
    openModal: function openModal() {
      $('#modal').modal('show');
    },
    closeModal: function closeModal() {
      $('#modal').modal('hide');
      this.reset();
      this.editMode = false;
    },
    reset: function reset() {
      this.form = {
        name: null,
        number: null,
        logo: null
      };
    },
    save: function save(data) {
      var formData = new FormData();
      formData.append("name", data.name);
      formData.append("number", data.number);
      formData.append("logo", data.logo);
      this.$inertia.post('/paymentmethod', formData);
      this.reset();
      this.closeModal();
      this.editMode = false;
    },
    edit: function edit(data) {
      this.form = Object.assign({}, data);
      this.editMode = true;
      this.openModal();
    },
    update: function update(data) {
      if (!confirm('Sure')) return;
      var formData = new FormData();
      formData.append("name", data.name);
      formData.append("number", data.number);
      formData.append("logo", data.logo);
      formData.append("_method", 'PUT');
      this.$inertia.post('/paymentmethod/' + data.id, formData);
      this.reset();
      this.closeModal();
    },
    deleteRow: function deleteRow(data) {
      if (!confirm('Sure')) return;
      data._method = 'DELETE';
      this.$inertia.post('/paymentmethod/' + data.id, data);
      this.reset();
      this.closeModal();
    }
  }
});

/***/ }),

/***/ 482:
/***/ (function(module, exports, __webpack_require__) {

var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("layout", { attrs: { name: "Paymentmethod" } }, [
    _c("section", { staticClass: "users-list-wrapper" }, [
      _c("div", { attrs: { id: "basic-examples" } }, [
        _c("div", { staticClass: "card" }, [
          _c("div", { staticClass: "card-content" }, [
            _c(
              "div",
              { staticClass: "card-body" },
              [
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
                _c("div", { staticClass: "mb-2 text-right" }, [
                  _c(
                    "button",
                    {
                      staticClass: "btn btn-sm btn-primary",
                      on: {
                        click: function($event) {
                          return _vm.openModal()
                        }
                      }
                    },
                    [_vm._v("Add New")]
                  )
                ]),
                _vm._v(" "),
                _c(
                  "table",
                  {
                    staticClass: "table table-bordered table-sm table-condensed"
                  },
                  [
                    _c("thead", [
                      _c("tr", [
                        _c("th", [_vm._v("#")]),
                        _vm._v(" "),
                        _c("th", [_vm._v("Name")]),
                        _vm._v(" "),
                        _c("th", [_vm._v("Number")]),
                        _vm._v(" "),
                        _c("th", [_vm._v("Logo")]),
                        _vm._v(" "),
                        _c("th", [_vm._v("Action")])
                      ])
                    ]),
                    _vm._v(" "),
                    _vm._l(_vm.paymentmethods.data, function(row, index) {
                      return _c("tr", { key: index }, [
                        _c("td", [_vm._v(_vm._s(index + 1))]),
                        _vm._v(" "),
                        _c("td", [_vm._v(_vm._s(row.name))]),
                        _vm._v(" "),
                        _c("td", [_vm._v(_vm._s(row.number))]),
                        _vm._v(" "),
                        _c("td", [
                          _c("img", {
                            staticStyle: { height: "50px", width: "auto" },
                            attrs: {
                              src: "paymentmethods/" + row.logo,
                              alt: "opps"
                            }
                          })
                        ]),
                        _vm._v(" "),
                        _c("td", { attrs: { width: "200" } }, [
                          _c(
                            "button",
                            {
                              staticClass: "btn btn-sm btn-primary",
                              on: {
                                click: function($event) {
                                  return _vm.edit(row)
                                }
                              }
                            },
                            [_vm._v("Edit")]
                          ),
                          _vm._v(" "),
                          _c(
                            "button",
                            {
                              staticClass: "btn btn-sm btn-danger",
                              on: {
                                click: function($event) {
                                  return _vm.deleteRow(row)
                                }
                              }
                            },
                            [_vm._v("Del")]
                          )
                        ])
                      ])
                    })
                  ],
                  2
                ),
                _vm._v(" "),
                _c("pagination", {
                  attrs: { links: _vm.paymentmethods.links }
                }),
                _vm._v(" "),
                _c(
                  "div",
                  { staticClass: "modal fade", attrs: { id: "modal" } },
                  [
                    _c("div", { staticClass: "modal-dialog" }, [
                      _c("div", { staticClass: "modal-content" }, [
                        _c("div", { staticClass: "modal-header" }, [
                          _c("h4", { staticClass: "modal-title" }, [
                            _vm._v("New Contact")
                          ])
                        ]),
                        _vm._v(" "),
                        _c("div", { staticClass: "modal-body" }, [
                          _c("div", { staticClass: "form-group" }, [
                            _c("label", { attrs: { for: "name" } }, [
                              _c("b", [_vm._v("Name")])
                            ]),
                            _vm._v(" "),
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
                                required: "",
                                id: "name",
                                placeholder: "Name"
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
                          _c("div", { staticClass: "form-group" }, [
                            _c("label", { attrs: { for: "number" } }, [
                              _c("b", [_vm._v("Number")])
                            ]),
                            _vm._v(" "),
                            _c("input", {
                              directives: [
                                {
                                  name: "model",
                                  rawName: "v-model",
                                  value: _vm.form.number,
                                  expression: "form.number"
                                }
                              ],
                              staticClass: "form-control",
                              class: [_vm.errors.number ? "is-invalid" : ""],
                              attrs: {
                                required: "",
                                id: "number",
                                placeholder: "Number"
                              },
                              domProps: { value: _vm.form.number },
                              on: {
                                input: function($event) {
                                  if ($event.target.composing) {
                                    return
                                  }
                                  _vm.$set(
                                    _vm.form,
                                    "number",
                                    $event.target.value
                                  )
                                }
                              }
                            }),
                            _vm._v(" "),
                            _vm.errors.number
                              ? _c(
                                  "span",
                                  {
                                    staticClass: "invalid-feedback",
                                    attrs: { role: "alert" }
                                  },
                                  [
                                    _c("strong", [
                                      _vm._v(_vm._s(_vm.errors.number[0]))
                                    ])
                                  ]
                                )
                              : _vm._e()
                          ]),
                          _vm._v(" "),
                          _c("div", { staticClass: "form-group" }, [
                            _c("label", { attrs: { for: "logo" } }, [
                              _c("b", [_vm._v("Logo")])
                            ]),
                            _vm._v(" "),
                            _c("input", {
                              staticClass: "form-control",
                              class: [_vm.errors.logo ? "is-invalid" : ""],
                              attrs: {
                                type: "file",
                                accept: "image/*",
                                required: "",
                                id: "logo",
                                name: "logo"
                              },
                              on: { change: _vm.setLogo }
                            }),
                            _vm._v(" "),
                            _vm.errors.logo
                              ? _c(
                                  "span",
                                  {
                                    staticClass: "invalid-feedback",
                                    attrs: { role: "alert" }
                                  },
                                  [
                                    _c("strong", [
                                      _vm._v(_vm._s(_vm.errors.logo[0]))
                                    ])
                                  ]
                                )
                              : _vm._e()
                          ])
                        ]),
                        _vm._v(" "),
                        _c("div", { staticClass: "modal-footer" }, [
                          _c(
                            "button",
                            {
                              staticClass: "btn btn-default",
                              attrs: { type: "button" },
                              on: {
                                click: function($event) {
                                  return _vm.closeModal()
                                }
                              }
                            },
                            [_vm._v("Close")]
                          ),
                          _vm._v(" "),
                          _c(
                            "button",
                            {
                              directives: [
                                {
                                  name: "show",
                                  rawName: "v-show",
                                  value: !_vm.editMode,
                                  expression: "!editMode"
                                }
                              ],
                              staticClass: "btn btn-primary",
                              attrs: { type: "submit" },
                              on: {
                                click: function($event) {
                                  return _vm.save(_vm.form)
                                }
                              }
                            },
                            [_vm._v("Save\n\t\t\t\t                        ")]
                          ),
                          _vm._v(" "),
                          _c(
                            "button",
                            {
                              directives: [
                                {
                                  name: "show",
                                  rawName: "v-show",
                                  value: _vm.editMode,
                                  expression: "editMode"
                                }
                              ],
                              staticClass: "btn btn-primary",
                              attrs: { type: "submit" },
                              on: {
                                click: function($event) {
                                  return _vm.update(_vm.form)
                                }
                              }
                            },
                            [_vm._v("Update\n\t\t\t\t                        ")]
                          )
                        ])
                      ])
                    ])
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
}
var staticRenderFns = []
render._withStripped = true
module.exports = { render: render, staticRenderFns: staticRenderFns }
if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-hot-reload-api")      .rerender("data-v-75c0801e", module.exports)
  }
}

/***/ })

});
>>>>>>> 57d8579bea4cf58db48c584e37a5960227da494e
