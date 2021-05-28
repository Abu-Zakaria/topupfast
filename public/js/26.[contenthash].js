<<<<<<< HEAD
webpackJsonp([26],{163:function(t,a,s){var e=s(231)(s(456),s(457),!1,function(t){s(454)},null,null);t.exports=e.exports},231:function(t,a){t.exports=function(t,a,s,e,i,n){var r,l=t=t||{},o=typeof t.default;"object"!==o&&"function"!==o||(r=t,l=t.default);var c,d="function"==typeof l?l.options:l;if(a&&(d.render=a.render,d.staticRenderFns=a.staticRenderFns,d._compiled=!0),s&&(d.functional=!0),i&&(d._scopeId=i),n?(c=function(t){(t=t||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext)||"undefined"==typeof __VUE_SSR_CONTEXT__||(t=__VUE_SSR_CONTEXT__),e&&e.call(this,t),t&&t._registeredComponents&&t._registeredComponents.add(n)},d._ssrRegister=c):e&&(c=e),c){var v=d.functional,_=v?d.render:d.beforeCreate;v?(d._injectStyles=c,d.render=function(t,a){return c.call(a),_(t,a)}):d.beforeCreate=_?[].concat(_,c):[c]}return{esModule:r,exports:l,options:d}}},232:function(t,a,s){var e="undefined"!=typeof document;if("undefined"!=typeof DEBUG&&DEBUG&&!e)throw new Error("vue-style-loader cannot be used in a non-browser environment. Use { target: 'node' } in your Webpack config to indicate a server-rendering environment.");var i=s(234),n={},r=e&&(document.head||document.getElementsByTagName("head")[0]),l=null,o=0,c=!1,d=function(){},v=null,_="data-vue-ssr-id",u="undefined"!=typeof navigator&&/msie [6-9]\b/.test(navigator.userAgent.toLowerCase());function m(t){for(var a=0;a<t.length;a++){var s=t[a],e=n[s.id];if(e){e.refs++;for(var i=0;i<e.parts.length;i++)e.parts[i](s.parts[i]);for(;i<s.parts.length;i++)e.parts.push(h(s.parts[i]));e.parts.length>s.parts.length&&(e.parts.length=s.parts.length)}else{var r=[];for(i=0;i<s.parts.length;i++)r.push(h(s.parts[i]));n[s.id]={id:s.id,refs:1,parts:r}}}}function p(){var t=document.createElement("style");return t.type="text/css",r.appendChild(t),t}function h(t){var a,s,e=document.querySelector("style["+_+'~="'+t.id+'"]');if(e){if(c)return d;e.parentNode.removeChild(e)}if(u){var i=o++;e=l||(l=p()),a=g.bind(null,e,i,!1),s=g.bind(null,e,i,!0)}else e=p(),a=function(t,a){var s=a.css,e=a.media,i=a.sourceMap;e&&t.setAttribute("media",e);v.ssrId&&t.setAttribute(_,a.id);i&&(s+="\n/*# sourceURL="+i.sources[0]+" */",s+="\n/*# sourceMappingURL=data:application/json;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(i))))+" */");if(t.styleSheet)t.styleSheet.cssText=s;else{for(;t.firstChild;)t.removeChild(t.firstChild);t.appendChild(document.createTextNode(s))}}.bind(null,e),s=function(){e.parentNode.removeChild(e)};return a(t),function(e){if(e){if(e.css===t.css&&e.media===t.media&&e.sourceMap===t.sourceMap)return;a(t=e)}else s()}}t.exports=function(t,a,s,e){c=s,v=e||{};var r=i(t,a);return m(r),function(a){for(var s=[],e=0;e<r.length;e++){var l=r[e];(o=n[l.id]).refs--,s.push(o)}a?m(r=i(t,a)):r=[];for(e=0;e<s.length;e++){var o;if(0===(o=s[e]).refs){for(var c=0;c<o.parts.length;c++)o.parts[c]();delete n[o.id]}}}};var f,C=(f=[],function(t,a){return f[t]=a,f.filter(Boolean).join("\n")});function g(t,a,s,e){var i=s?"":e.css;if(t.styleSheet)t.styleSheet.cssText=C(a,i);else{var n=document.createTextNode(i),r=t.childNodes;r[a]&&t.removeChild(r[a]),r.length?t.insertBefore(n,r[a]):t.appendChild(n)}}},234:function(t,a){t.exports=function(t,a){for(var s=[],e={},i=0;i<a.length;i++){var n=a[i],r=n[0],l={id:t+":"+i,css:n[1],media:n[2],sourceMap:n[3]};e[r]?e[r].parts.push(l):s.push(e[r]={id:r,parts:[l]})}return s}},235:function(t,a,s){var e=s(231)(s(238),s(239),!1,function(t){s(236)},null,null);t.exports=e.exports},236:function(t,a,s){var e=s(237);"string"==typeof e&&(e=[[t.i,e,""]]),e.locals&&(t.exports=e.locals);s(232)("a3630c76",e,!0,{})},237:function(t,a,s){(t.exports=s(149)(!1)).push([t.i,"",""])},238:function(t,a,s){"use strict";Object.defineProperty(a,"__esModule",{value:!0}),a.default={name:"AppFooter"}},239:function(t,a){t.exports={render:function(){var t=this.$createElement,a=this._self._c||t;return a("div",["horizontal"==this.$page.configData.mainLayoutType?a("footer",{staticClass:"footer footer-light navbar-shadow",class:this.$page.configData.footerType}):a("footer",{staticClass:"footer footer-light",class:this.$page.configData.footerType},[this._m(0)])])},staticRenderFns:[function(){var t=this.$createElement,a=this._self._c||t;return a("p",{staticClass:"clearfix blue-grey lighten-2 mb-0"},[a("span",{staticClass:"float-md-left d-block d-md-inline-block mt-25"},[this._v("COPYRIGHT © 2019\n\t\t\t\t"),a("a",{staticClass:"text-bold-800 grey darken-2",attrs:{href:"http://teammahal.info/",target:"_blank"}},[this._v("Team Mahal,")]),this._v("\n\t\t\t\tAll rights Reserved\n\t\t\t")]),this._v(" "),a("span",{staticClass:"float-md-right d-none d-md-block"},[this._v("Hand-crafted & Made with"),a("i",{staticClass:"feather icon-heart pink"})]),this._v(" "),a("button",{staticClass:"btn btn-primary btn-icon scroll-top",attrs:{type:"button"}},[a("i",{staticClass:"feather icon-arrow-up"})])])}]}},242:function(t,a,s){var e=s(231)(s(245),s(259),!1,function(t){s(243)},null,null);t.exports=e.exports},243:function(t,a,s){var e=s(244);"string"==typeof e&&(e=[[t.i,e,""]]),e.locals&&(t.exports=e.locals);s(232)("3a768754",e,!0,{})},244:function(t,a,s){(t.exports=s(149)(!1)).push([t.i,"",""])},245:function(t,a,s){"use strict";Object.defineProperty(a,"__esModule",{value:!0});var e=s(246),i=s.n(e),n=s(251),r=s.n(n),l=s(235),o=s.n(l),c=s(254),d=s.n(c);a.default={name:"Layout",components:{Breadcrumb:d.a,AppFooter:o.a,Navbar:r.a,Sidebar:i.a},created:function(){},methods:{url:function(){return location.pathname.substr(1)},hideDropdownMenus:function(){this.showUserMenu=!1}}}},246:function(t,a,s){var e=s(231)(s(249),s(250),!1,function(t){s(247)},null,null);t.exports=e.exports},247:function(t,a,s){var e=s(248);"string"==typeof e&&(e=[[t.i,e,""]]),e.locals&&(t.exports=e.locals);s(232)("51b3cdb0",e,!0,{})},248:function(t,a,s){(t.exports=s(149)(!1)).push([t.i,"",""])},249:function(t,a,s){"use strict";Object.defineProperty(a,"__esModule",{value:!0}),a.default={name:"Sidebar",props:{url:String},data:function(){return{is_admin:!1}},methods:{isUrl:function(){for(var t=this,a=arguments.length,s=new Array(a),e=0;e<a;e++)s[e]=arguments[e];return""===s[0]?""===this.url:s.filter(function(a){return t.url.startsWith(a)}).length},checkAccess:function(){this.is_admin=1==this.$page.auth.is_admin}},created:function(){this.checkAccess()}}},250:function(t,a){t.exports={render:function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("div",{staticClass:"main-menu menu-accordion menu-shadow",class:t.$page.configData.menuType+" "+["light"===t.$page.configData.theme?"menu-light":"menu-dark"],attrs:{"data-scroll-to-active":"true"}},[s("div",{staticClass:"navbar-header"},[s("ul",{staticClass:"nav navbar-nav flex-row",staticStyle:{"background-image":"url(/images/logo/logo.png)","background-size":"contain","background-repeat":"no-repeat"}},[s("li",{staticClass:"nav-item mr-auto"},[s("inertia-link",{staticClass:"navbar-brand",attrs:{href:"/dashboard"}})],1),t._v(" "),t._m(0)])]),t._v(" "),s("div",{staticClass:"shadow-bottom"}),t._v(" "),s("div",{staticClass:"main-menu-content"},[s("ul",{staticClass:"navigation navigation-main",attrs:{id:"main-menu-navigation","data-menu":"menu-navigation"}},[s("li",{staticClass:"nav-item"},[s("inertia-link",{attrs:{href:"/"}},[s("i",{staticClass:"feather icon-home"}),t._v(" "),s("span",{staticClass:"menu-title",attrs:{"data-i18n":""}},[t._v(t._s(t.__("Dashboard")))])])],1),t._v(" "),t.is_admin?s("li",{staticClass:"nav-item"},[s("inertia-link",{class:t.isUrl("brand")?"active":"",attrs:{href:t.route("brand.index")}},[s("i",{staticClass:"feather icon-home"}),t._v(" "),s("span",{staticClass:"menu-title nav-link-text",attrs:{"data-i18n":""}},[t._v(t._s(t.__("Brand")))])])],1):t._e(),t._v(" "),t.is_admin?s("li",{staticClass:"nav-item"},[s("inertia-link",{class:t.isUrl("category")?"active":"",attrs:{href:t.route("category.index")}},[s("i",{staticClass:"feather icon-home"}),t._v(" "),s("span",{staticClass:"menu-title nav-link-text",attrs:{"data-i18n":""}},[t._v(t._s(t.__("Category")))])])],1):t._e(),t._v(" "),t.is_admin?s("li",{staticClass:"nav-item"},[s("inertia-link",{class:t.isUrl("product")?"active":"",attrs:{href:t.route("product.index")}},[s("i",{staticClass:"feather icon-home"}),t._v(" "),s("span",{staticClass:"menu-title nav-link-text",attrs:{"data-i18n":""}},[t._v(t._s(t.__("Product")))])])],1):t._e(),t._v(" "),t.is_admin?s("li",{staticClass:"nav-item"},[s("inertia-link",{class:t.isUrl("package")?"active":"",attrs:{href:t.route("package.index")}},[s("i",{staticClass:"feather icon-home"}),t._v(" "),s("span",{staticClass:"menu-title nav-link-text",attrs:{"data-i18n":""}},[t._v(t._s(t.__("Package")))])])],1):t._e(),t._v(" "),t.is_admin?s("li",{staticClass:"nav-item"},[s("inertia-link",{class:t.isUrl("paymentmethod")?"active":"",attrs:{href:t.route("paymentmethod.index")}},[s("i",{staticClass:"feather icon-home"}),t._v(" "),s("span",{staticClass:"menu-title nav-link-text",attrs:{"data-i18n":""}},[t._v(t._s(t.__("Payment Method")))])])],1):t._e(),t._v(" "),t.is_admin?s("li",{staticClass:"nav-item"},[s("inertia-link",{class:t.isUrl("banner")?"active":"",attrs:{href:t.route("banner.index")}},[s("i",{staticClass:"feather icon-home"}),t._v(" "),s("span",{staticClass:"menu-title nav-link-text",attrs:{"data-i18n":""}},[t._v(t._s(t.__("Banner")))])])],1):t._e(),t._v(" "),s("li",{staticClass:"nav-item"},[s("inertia-link",{class:t.isUrl("transaction")?"active":"",attrs:{href:t.route("transaction.index")}},[s("i",{staticClass:"feather icon-home"}),t._v(" "),s("span",{staticClass:"menu-title nav-link-text",attrs:{"data-i18n":""}},[t._v(t._s(t.__("Transaction")))])])],1),t._v(" "),s("li",{staticClass:"nav-item"},[s("inertia-link",{class:t.isUrl("order")?"active":"",attrs:{href:t.route("order.index")}},[s("i",{staticClass:"feather icon-home"}),t._v(" "),s("span",{staticClass:"menu-title nav-link-text",attrs:{"data-i18n":""}},[t.is_admin?s("span",[t._v(t._s(t.__("Order")))]):s("span",[t._v("Global orders")])])])],1),t._v(" "),t.is_admin?t._e():s("li",{staticClass:"nav-item"},[s("inertia-link",{class:t.isUrl("seller/orders")?"active":"",attrs:{href:t.route("seller.orders.index")}},[s("i",{staticClass:"feather icon-home"}),t._v(" "),s("span",{staticClass:"menu-title nav-link-text",attrs:{"data-i18n":""}},[s("span",[t._v("My orders")])])])],1),t._v(" "),s("li",{staticClass:"nav-item"},[s("inertia-link",{class:t.isUrl("invoice")?"active":"",attrs:{href:t.route("invoice.index")}},[s("i",{staticClass:"feather icon-home"}),t._v(" "),s("span",{staticClass:"menu-title nav-link-text",attrs:{"data-i18n":""}},[t._v(t._s(t.__("Invoice")))])])],1),t._v(" "),t.is_admin?s("li",{staticClass:"nav-item"},[s("inertia-link",{class:t.isUrl("user")?"active":"",attrs:{href:t.route("users.index")}},[s("i",{staticClass:"feather icon-users"}),t._v(" "),s("span",{staticClass:"menu-title",attrs:{"data-i18n":""}},[t._v(t._s(t.__("Users")))])])],1):t._e(),t._v(" "),t.is_admin?s("li",{staticClass:"nav-item"},[s("inertia-link",{class:t.isUrl("notice")?"active":"",attrs:{href:t.route("notice.index")}},[s("i",{staticClass:"feather icon-users"}),t._v(" "),s("span",{staticClass:"menu-title",attrs:{"data-i18n":""}},[t._v(t._s(t.__("Notice")))])])],1):t._e(),t._v(" "),t.is_admin?s("li",{staticClass:"nav-item"},[s("inertia-link",{class:t.isUrl("sms")?"active":"",attrs:{href:t.route("sms.index")}},[s("i",{staticClass:"feather icon-send"}),t._v(" "),s("span",{staticClass:"menu-title",attrs:{"data-i18n":""}},[t._v(t._s(t.__("Send SMS")))])])],1):t._e(),t._v(" "),s("li",[s("inertia-link",{class:t.isUrl("withdraw")?"active":"",attrs:{href:t.route("withdraw_requests.index")}},[s("i",{staticClass:"feather icon-users"}),t._v(" "),s("span",{staticClass:"menu-title",attrs:{"data-i18n":""}},[t._v("Withdraw Requests")])])],1),t._v(" "),t.$can("subscription_access")?s("li",{staticClass:"nav-item"},[s("inertia-link",{attrs:{href:t.route("subscriptions.index")}},[s("i",{staticClass:"feather icon-users"}),t._v(" "),s("span",{staticClass:"menu-title",attrs:{"data-i18n":""}},[t._v(t._s(t.__("Subscription")))])])],1):t._e(),t._v(" "),t.$can("role_access")?s("li",{staticClass:"nav-item"},[s("inertia-link",{attrs:{href:t.route("roles.index")}},[s("i",{staticClass:"feather icon-unlock"}),t._v(" "),s("span",{staticClass:"menu-title",attrs:{"data-i18n":""}},[t._v(t._s(t.__("Role")))])])],1):t._e(),t._v(" "),t.$can("permission_access")?s("li",{staticClass:"nav-item"},[s("inertia-link",{attrs:{href:t.route("permissions.index")}},[s("i",{staticClass:"feather icon-unlock"}),t._v(" "),s("span",{staticClass:"menu-title",attrs:{"data-i18n":""}},[t._v(t._s(t.__("Permission")))])])],1):t._e(),t._v(" "),t.$can("gender_access")?s("li",{staticClass:"nav-item"},[s("inertia-link",{attrs:{href:t.route("genders.index")}},[s("i",{staticClass:"feather icon-unlock"}),t._v(" "),s("span",{staticClass:"menu-title",attrs:{"data-i18n":""}},[t._v(t._s(t.__("Gender")))])])],1):t._e(),t._v(" "),t.$can("religion_access")?s("li",{staticClass:"nav-item"},[s("inertia-link",{attrs:{href:t.route("religions.index")}},[s("i",{staticClass:"feather icon-unlock"}),t._v(" "),s("span",{staticClass:"menu-title",attrs:{"data-i18n":""}},[t._v(t._s(t.__("Religion")))])])],1):t._e(),t._v(" "),t.$can("blood_group_access")?s("li",{staticClass:"nav-item"},[s("inertia-link",{attrs:{href:t.route("blood-groups.index")}},[s("i",{staticClass:"feather icon-unlock"}),t._v(" "),s("span",{staticClass:"menu-title",attrs:{"data-i18n":""}},[t._v(t._s(t.__("Blood Group")))])])],1):t._e()])])])},staticRenderFns:[function(){var t=this.$createElement,a=this._self._c||t;return a("li",{staticClass:"nav-item nav-toggle"},[a("a",{staticClass:"nav-link modern-nav-toggle pr-0",attrs:{"data-toggle":"collapse"}},[a("i",{staticClass:"feather icon-x d-block d-xl-none font-medium-4 primary toggle-icon"}),a("i",{staticClass:"toggle-icon feather icon-disc font-medium-4 d-none d-xl-block primary collapse-toggle-icon",attrs:{"data-ticon":"icon-disc"}})])])}]}},251:function(t,a,s){var e=s(231)(s(252),s(253),!1,null,null,null);t.exports=e.exports},252:function(t,a,s){"use strict";Object.defineProperty(a,"__esModule",{value:!0}),a.default={name:"Navbar",methods:{logout:function(){this.$inertia.post(this.route("logout"))}}}},253:function(t,a){t.exports={render:function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("div",["horizontal"==t.$page.configData.mainLayoutType?s("nav",{staticClass:"header-navbar navbar-expand-lg navbar navbar-with-menu navbar-fixed",class:t.$page.configData.navbarColor},[t._m(0)]):s("nav",{staticClass:"header-navbar navbar-expand-lg navbar navbar-with-menu navbar-light navbar-shadow",class:t.$page.configData.navbarClass+" "+t.$page.configData.navbarColor},[s("div",{staticClass:"navbar-wrapper"},[s("div",{staticClass:"navbar-container content"},[s("div",{staticClass:"navbar-collapse",attrs:{id:"navbar-mobile"}},[s("div",{staticClass:"mr-auto float-left bookmark-wrapper d-flex align-items-center"},[t._m(1),t._v(" "),s("ul",{staticClass:"nav navbar-nav"},[t.$page.app?s("li",{staticClass:"nav-item d-none d-lg-block app-title"},[s("a",{staticClass:"bookmark-star"},[s("i",{staticClass:"ficon feather icon-star warning"}),t._v(" "+t._s(t.$page.app?t.$page.app.name:""))]),t._v(" "),t._m(2)]):t._e()])]),t._v(" "),s("ul",{staticClass:"nav navbar-nav float-right"},[s("li",{staticClass:"dropdown dropdown-language nav-item"},[s("a",{staticClass:"dropdown-toggle nav-link",attrs:{id:"dropdown-flag",href:"#","data-toggle":"dropdown","aria-haspopup":"true","aria-expanded":"false"}},[s("span",{staticClass:"selected-language"},[t._v(t._s(t.currentLanguage()))])]),t._v(" "),s("div",{staticClass:"dropdown-menu",attrs:{"aria-labelledby":"dropdown-flag"}},[s("inertia-link",{staticClass:"dropdown-item",attrs:{href:t.current()+"?lang=en","data-language":"en"}},[t._v(" English")]),t._v(" "),s("inertia-link",{staticClass:"dropdown-item",attrs:{href:t.current()+"?lang=bn","data-language":"bn"}},[t._v(" বাংলা")])],1)]),t._v(" "),t._m(3),t._v(" "),t._m(4),t._v(" "),s("li",{staticClass:"dropdown dropdown-user nav-item"},[s("a",{staticClass:"dropdown-toggle nav-link dropdown-user-link",attrs:{href:"#","data-toggle":"dropdown"}},[s("div",{staticClass:"user-nav d-sm-flex d-none"},[s("span",{staticClass:"user-name text-bold-600"},[t._v(t._s(t.$page.auth.name))])]),t._v(" "),t._m(5)]),t._v(" "),s("div",{staticClass:"dropdown-menu dropdown-menu-right"},[s("a",{staticClass:"dropdown-item",attrs:{href:t.route("users.show",t.$page.auth.slug)}},[s("i",{staticClass:"feather icon-user"}),t._v(" Profile\n\t\t\t\t\t\t\t\t")]),t._v(" "),s("div",{staticClass:"dropdown-divider"}),t._v(" "),s("a",{staticClass:"dropdown-item",on:{click:t.logout}},[s("i",{staticClass:"feather icon-power"}),t._v(" Logout")])])])])])])])])])},staticRenderFns:[function(){var t=this.$createElement,a=this._self._c||t;return a("div",{staticClass:"navbar-header d-xl-block d-none"},[a("ul",{staticClass:"nav navbar-nav flex-row"},[a("li",{staticClass:"nav-item"},[a("a",{staticClass:"navbar-brand",attrs:{href:"dashboard-analytics"}},[a("div",{staticClass:"brand-logo"})])])])])},function(){var t=this.$createElement,a=this._self._c||t;return a("ul",{staticClass:"nav navbar-nav"},[a("li",{staticClass:"nav-item mobile-menu d-xl-none mr-auto"},[a("a",{staticClass:"nav-link nav-menu-main menu-toggle hidden-xs",attrs:{href:"#"}},[a("i",{staticClass:"ficon feather icon-menu"})])])])},function(){var t=this.$createElement,a=this._self._c||t;return a("div",{staticClass:"bookmark-input search-input"},[a("div",{staticClass:"bookmark-input-icon"},[a("i",{staticClass:"feather icon-search primary"})]),this._v(" "),a("input",{staticClass:"form-control input",attrs:{type:"text",placeholder:"Explore Vuexy...",tabindex:"0","data-search":"laravel-starter-list"}}),this._v(" "),a("ul",{staticClass:"search-list search-list-bookmark"})])},function(){var t=this.$createElement,a=this._self._c||t;return a("li",{staticClass:"nav-item d-none d-lg-block"},[a("a",{staticClass:"nav-link nav-link-expand"},[a("i",{staticClass:"ficon feather icon-maximize"})])])},function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("li",{staticClass:"dropdown dropdown-notification nav-item"},[s("a",{staticClass:"nav-link nav-link-label",attrs:{href:"#","data-toggle":"dropdown"}},[s("i",{staticClass:"ficon feather icon-bell"}),s("span",{staticClass:"badge badge-pill badge-primary badge-up"},[t._v("5")])]),t._v(" "),s("ul",{staticClass:"dropdown-menu dropdown-menu-media dropdown-menu-right"},[s("li",{staticClass:"dropdown-menu-header"},[s("div",{staticClass:"dropdown-header m-0 p-2"},[s("h3",{staticClass:"white"},[t._v("5 New")]),s("span",{staticClass:"grey darken-2"},[t._v("App Notifications")])])]),t._v(" "),s("li",{staticClass:"scrollable-container media-list"},[s("a",{staticClass:"d-flex justify-content-between",attrs:{href:"javascript:void(0)"}},[s("div",{staticClass:"media d-flex align-items-start"},[s("div",{staticClass:"media-left"},[s("i",{staticClass:"feather icon-download-cloud font-medium-5 success"})]),t._v(" "),s("div",{staticClass:"media-body"},[s("h6",{staticClass:"success media-heading red darken-1"},[t._v("99% Server load")]),t._v(" "),s("small",{staticClass:"notification-text"},[t._v("You got new order of goods.")])]),t._v(" "),s("small",[s("time",{staticClass:"media-meta",attrs:{datetime:"2015-06-11T18:29:20+08:00"}},[t._v("5 hour ago")])])])])]),t._v(" "),s("li",{staticClass:"dropdown-menu-footer"},[s("a",{staticClass:"dropdown-item p-1 text-center",attrs:{href:"javascript:void(0)"}},[t._v("Read all notifications")])])])])},function(){var t=this.$createElement,a=this._self._c||t;return a("span",[a("img",{staticClass:"round",attrs:{src:"/images/profile/user-uploads/user-09.jpg",alt:"avatar",height:"40",width:"40"}})])}]}},254:function(t,a,s){var e=s(231)(s(257),s(258),!1,function(t){s(255)},null,null);t.exports=e.exports},255:function(t,a,s){var e=s(256);"string"==typeof e&&(e=[[t.i,e,""]]),e.locals&&(t.exports=e.locals);s(232)("5812e8f3",e,!0,{})},256:function(t,a,s){(t.exports=s(149)(!1)).push([t.i,"",""])},257:function(t,a,s){"use strict";Object.defineProperty(a,"__esModule",{value:!0}),a.default={name:"Breadcrumb"}},258:function(t,a){t.exports={render:function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("div",{staticClass:"content-header row"},[s("div",{staticClass:"content-header-left col-md-9 col-12 mb-2"},[s("div",{staticClass:"row breadcrumbs-top"},[s("div",{staticClass:"col-12"},[s("h2",{staticClass:"content-header-title float-left mb-0"}),t._v(" "),s("div",{staticClass:"breadcrumb-wrapper col-12"},[t.$page.breadcrumbs?s("ol",{staticClass:"breadcrumb"},t._l(t.$page.breadcrumbs,function(a){return s("li",{staticClass:"breadcrumb-item"},[a.link?s("inertia-link",{attrs:{href:a.link}},[t._v("\n                "+t._s(a.name)+"\n              ")]):s("span",[t._v(t._s(a.name))])],1)}),0):t._e()])])])]),t._v(" "),t.$page.has_modal?s("div",{staticClass:"content-header-right text-md-right col-md-3 col-12 d-md-block d-none"},[t._m(0)]):t._e()])},staticRenderFns:[function(){var t=this.$createElement,a=this._self._c||t;return a("button",{staticClass:"btn-icon waves-effect waves-light btn btn-primary btn-sm",attrs:{"data-toggle":"modal","data-target":"#default",type:"button"}},[a("i",{staticClass:"feather icon-plus-circle"}),this._v(" New\n    ")])}]}},259:function(t,a){t.exports={render:function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("div",{attrs:{id:"app"}},[s("sidebar",{attrs:{url:t.url()}}),t._v(" "),s("div",{staticClass:"app-content content"},[s("div",{staticClass:"content-overlay"}),t._v(" "),s("div",{staticClass:"header-navbar-shadow"}),t._v(" "),s("navbar"),t._v(" "),t.$page.configData.contentLayout?s("div",{staticClass:"content-area-wrapper"},[s("div",{class:t.$page.configData.sidebarPositionClass},[s("div",{staticClass:"sidebar"},[t._t("default")],2)]),t._v(" "),s("div",{class:t.$page.configData.contentsidebarClass},[s("div",{staticClass:"content-wrapper"},[s("div",{staticClass:"content-body"},[t._t("default")],2)])])]):s("div",{staticClass:"content-wrapper"},[1==t.$page.configData.pageHeader?s("div",[s("breadcrumb")],1):t._e(),t._v(" "),s("div",{staticClass:"content-body"},[t._t("default")],2)])],1),t._v(" "),s("div",{staticClass:"sidenav-overlay"}),t._v(" "),s("div",{staticClass:"drag-target"}),t._v(" "),s("app-footer")],1)},staticRenderFns:[]}},454:function(t,a,s){var e=s(455);"string"==typeof e&&(e=[[t.i,e,""]]),e.locals&&(t.exports=e.locals);s(232)("b04f2c6a",e,!0,{})},455:function(t,a,s){(t.exports=s(149)(!1)).push([t.i,"",""])},456:function(t,a,s){"use strict";Object.defineProperty(a,"__esModule",{value:!0});var e=s(242),i=s.n(e);a.default={name:"Dashboard",components:{Layout:i.a},props:["msg","users","orders","usertoday","ordertoday","wallet","tenorder","tenwallet","success","invoice","seller_wallet","withdraw_amount"],data:function(){return{editMode:!0,form:{comment:"",status:"",id:null}}},methods:{accept:function(t){var a=this;axios.post("seller/order/accept",t).then(function(s){1==s.data.success?(a.$toast(s.data.message),t.accept_id=a.$page.auth.id):a.$toast(s.data.message,"error")}).catch(function(t){a.$toast("Something went wrong","error"),console.error(">",t)})},is_admin:function(){return 1==this.$page.auth.is_admin},is_seller:function(){return 2==this.$page.auth.is_admin},check:function(t){this.searchfrom.user_id=t},searchemail:function(t){this.searchfrom.order_id=t},openModal:function(){$("#modal").modal("show")},closeModal:function(){$("#modal").modal("hide"),this.reset(),this.editMode=!1},reset:function(){this.form={status:"",id:null}},save:function(t){this.$inertia.post("/product",t),this.reset(),this.closeModal(),this.editMode=!1},edit:function(t){this.form=Object.assign({},t),this.editMode=!0,this.openModal()},update:function(t){t._method="PUT",this.$inertia.post("/order/"+t.id,t),this.reset(),this.closeModal()},updatetransaction:function(t){t._method="PUT",this.$inertia.post("/transaction/"+t.id,t),this.reset(),this.closeModal()},deleteRow:function(t){confirm("Sure")&&(t._method="DELETE",this.$inertia.post("/product/"+t.id,t),this.reset(),this.closeModal())}}}},457:function(t,a){t.exports={render:function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("layout",{attrs:{name:"Dashboard"}},[s("section",{attrs:{id:"dashboard-analytics"}},[s("div",{staticClass:"row"},[s("div",{staticClass:"col-lg-6 col-md-12 col-sm-12"},[s("div",{staticClass:"card bg-analytics text-white"},[s("div",{staticClass:"card-content"},[s("div",{staticClass:"card-body text-center"},[s("img",{staticClass:"img-left",attrs:{src:"/images/elements/decore-left.png",alt:"card-img-left"}}),t._v(" "),s("img",{staticClass:"img-right",attrs:{src:"/images/elements/decore-right.png",alt:"card-img-right"}}),t._v(" "),s("div",{staticClass:"avatar avatar-xl bg-primary shadow mt-0"},[s("div",{staticClass:"avatar-content"},[s("i",{staticClass:"feather icon-award white font-large-1"})])]),t._v(" "),s("div",{staticClass:"text-center"},[s("h1",{staticClass:"mb-2 text-white"},[t._v(t._s(t.__("Congratulations"))+" "+t._s(t.$page.auth.name)+",")])])])])])]),t._v(" "),1==t.$page.auth.is_admin?s("div",{staticClass:"col-lg-3 col-md-6 col-12"},[s("div",{staticClass:"card"},[s("div",{staticClass:"card-header d-flex flex-column align-items-start pb-0"},[s("div",{staticClass:"avatar bg-rgba-primary p-50 m-0"},[s("div",{staticClass:"avatar-content"},[s("i",{staticClass:"feather icon-users text-primary font-medium-5"})])]),t._v(" "),s("h2",{staticClass:"text-bold-700 mt-1 mb-25"},[t._v(t._s(t.users))]),t._v(" "),s("p",{staticClass:"mb-0"},[t._v("Users Gained")])]),t._v(" "),s("div",{staticClass:"card-content"},[s("div",{attrs:{id:"subscribe-gain-chart"}})])])]):t._e(),t._v(" "),1==t.$page.auth.is_admin?s("div",{staticClass:"col-lg-3 col-md-6 col-12"},[s("div",{staticClass:"card"},[s("div",{staticClass:"card-header d-flex flex-column align-items-start pb-0"},[s("div",{staticClass:"avatar bg-rgba-primary p-50 m-0"},[s("div",{staticClass:"avatar-content"},[s("i",{staticClass:"feather icon-users text-primary font-medium-5"})])]),t._v(" "),s("h2",{staticClass:"text-bold-700 mt-1 mb-25"},[t._v(t._s(t.usertoday))]),t._v(" "),s("p",{staticClass:"mb-0"},[t._v("Users Today")])]),t._v(" "),s("div",{staticClass:"card-content"},[s("div",{attrs:{id:"subscribe-gain-chart"}})])])]):t._e(),t._v(" "),1==t.$page.auth.is_admin?s("div",{staticClass:"col-lg-3 col-md-6 col-12"},[s("div",{staticClass:"card"},[s("div",{staticClass:"card-header d-flex flex-column align-items-start pb-0"},[s("div",{staticClass:"avatar bg-rgba-primary p-50 m-0"},[s("div",{staticClass:"avatar-content"},[s("i",{staticClass:"feather icon-users text-primary font-medium-5"})])]),t._v(" "),s("h2",{staticClass:"text-bold-700 mt-1 mb-25"},[t._v(t._s(t.ordertoday))]),t._v(" "),s("p",{staticClass:"mb-0"},[t._v("Today Orders")])]),t._v(" "),s("div",{staticClass:"card-content"},[s("div",{attrs:{id:"subscribe-gain-chart"}})])])]):t._e(),t._v(" "),s("div",{staticClass:"col-lg-3 col-md-6 col-12"},[s("div",{staticClass:"card"},[s("div",{staticClass:"card-header d-flex flex-column align-items-start pb-0"},[s("div",{staticClass:"avatar bg-rgba-primary p-50 m-0"},[s("div",{staticClass:"avatar-content"},[s("i",{staticClass:"feather icon-users text-primary font-medium-5"})])]),t._v(" "),s("h2",{staticClass:"text-bold-700 mt-1 mb-25"},[t._v(t._s(t.seller_wallet))]),t._v(" "),s("p",{staticClass:"mb-0"},[2==t.$page.auth.is_admin?s("span",[t._v("Seller")]):t._e(),t._v(" Wallet")])]),t._v(" "),s("div",{staticClass:"card-content"},[s("div",{attrs:{id:"subscribe-gain-chart"}})])])]),t._v(" "),2==t.$page.auth.is_admin?s("div",{staticClass:"col-lg-3 col-md-6 col-12"},[s("div",{staticClass:"card"},[s("div",{staticClass:"card-header d-flex flex-column align-items-start pb-0"},[s("div",{staticClass:"avatar bg-rgba-primary p-50 m-0"},[s("div",{staticClass:"avatar-content"},[s("i",{staticClass:"feather icon-users text-primary font-medium-5"})])]),t._v(" "),s("h2",{staticClass:"text-bold-700 mt-1 mb-25"},[t._v(t._s(t.withdraw_amount))]),t._v(" "),s("p",{staticClass:"mb-0"},[t._v("Withdraw Amount")])]),t._v(" "),s("div",{staticClass:"card-content"},[s("div",{attrs:{id:"subscribe-gain-chart"}})])])]):t._e(),t._v(" "),1==t.$page.auth.is_admin?s("div",{staticClass:"col-lg-3 col-md-6 col-12"},[s("div",{staticClass:"card"},[s("div",{staticClass:"card-header d-flex flex-column align-items-start pb-0"},[s("div",{staticClass:"avatar bg-rgba-warning p-50 m-0"},[s("div",{staticClass:"avatar-content"},[s("i",{staticClass:"feather icon-package text-warning font-medium-5"})])]),t._v(" "),s("h2",{staticClass:"text-bold-700 mt-1 mb-25"},[t._v(t._s(t.orders))]),t._v(" "),s("p",{staticClass:"mb-0"},[t._v("Orders Received")])]),t._v(" "),s("div",{staticClass:"card-content"},[s("div",{attrs:{id:"orders-received-chart"}})])])]):t._e()]),t._v(" "),t.success?s("div",{staticClass:"alert alert-success"},[t._v("\n\t\t\t"+t._s(t.success)+"\n\t\t")]):t._e(),t._v(" "),s("div",{staticClass:"row"},[s("div",{staticClass:"col-12"},[s("div",{staticClass:"card"},[s("div",{staticClass:"card-header"},[s("h4",{staticClass:"mb-0"},[t.is_seller()?s("span",[t._v("Global ")]):t._e(),t._v("Orders")])]),t._v(" "),s("div",{staticClass:"card-content"},[s("div",{staticClass:"table-responsive"},[s("table",{staticClass:"table table-bordered responsive table-sm table-condensed"},[s("thead",[s("tr",[s("th",[t._v("ID")]),t._v(" "),s("th",[t._v("Package")]),t._v(" "),s("th",[t._v("User ")]),t._v(" "),s("th",[t._v("Sale Price")]),t._v(" "),s("th",[t._v("Buy Price")]),t._v(" "),s("th",[t._v("Player id")]),t._v(" "),s("th",[t._v("Password")]),t._v(" "),s("th",[t._v("Accounttype")]),t._v(" "),s("th",[t._v("Security Code")]),t._v(" "),s("th",[t._v("Status")]),t._v(" "),s("th",[t._v("Action")])])]),t._v(" "),t._l(t.tenorder,function(a,e){return s("tr",{key:e},[s("td",[t._v(t._s(a.id))]),t._v(" "),s("td",[t._v(t._s(a.package_name))]),t._v(" "),s("td",[t._v(t._s(a.user_id))]),t._v(" "),s("td",[t._v(t._s(a.sale_price))]),t._v(" "),s("td",[t._v(t._s(a.buy_price))]),t._v(" "),s("td",[t._v(t._s(a.playerid))]),t._v(" "),s("td",[t._v(t._s(a.password))]),t._v(" "),s("td",[t._v(t._s(a.accounttype))]),t._v(" "),s("td",[t._v(t._s(a.securitycode))]),t._v(" "),s("td",[t._v(t._s(a.status))]),t._v(" "),t.is_admin()||a.accept_id==t.$page.auth.id&&"pending"==a.status?s("td",{attrs:{width:"200"}},[s("button",{staticClass:"btn btn-sm btn-primary",on:{click:function(s){return t.edit(a)}}},[t._v("Edit")])]):t._e(),t._v(" "),t.is_seller()&&0==a.accept_id&&"pending"==a.status?s("td",{attrs:{width:"200"}},[s("button",{staticClass:"btn btn-sm btn-primary",on:{click:function(s){return t.accept(a)}}},[t._v("Accept")])]):t._e(),t._v(" "),0!=a.accept_id&&a.accept_id!=t.$page.auth.id?s("td",{attrs:{width:"200"}},[s("span",[t._v("Accepted by "+t._s(a.accept_by.name))])]):t._e(),t._v(" "),"pending"!=a.status&&a.accept_id==t.$page.auth.id?s("td",{attrs:{width:"200"}},[t._v("\n\t\t\t\t\t                \tAccepted by you\n\t\t\t\t\t                ")]):t._e()])})],2)])])])])]),t._v(" "),s("div",{staticClass:"row"},[s("div",{staticClass:"col-12"},[s("div",{staticClass:"card"},[s("div",{staticClass:"card-header"},[s("h4",{staticClass:"mb-0"},[t._v("Transaction")])]),t._v(" "),s("div",{staticClass:"card-content"},[s("div",{staticClass:"table-responsive"},[s("table",{staticClass:"table table-bordered responsive table-sm table-condensed"},[s("thead",[s("tr",[s("th",[t._v("Name")]),t._v(" "),s("th",[t._v("User id")]),t._v(" "),s("th",[t._v("purpose")]),t._v(" "),s("th",[t._v("Amount")]),t._v(" "),s("th",[t._v("Number")]),t._v(" "),s("th",[t._v("Paymentmethod")]),t._v(" "),s("th",[t._v("Status")]),t._v(" "),s("th",[t._v("Created At")]),t._v(" "),s("th",[t._v("Action")])])]),t._v(" "),t._l(t.tenwallet,function(a,e){return s("tr",{key:e},[s("td",[t._v(t._s(e+1))]),t._v(" "),s("td",[t._v(t._s(a.user_id))]),t._v(" "),s("td",[t._v(t._s(a.purpose))]),t._v(" "),s("td",[t._v(t._s(a.amount))]),t._v(" "),s("td",[t._v(t._s(a.number))]),t._v(" "),s("td",[t._v(t._s(a.paymentmethod.name))]),t._v(" "),s("td",[t._v(t._s(a.status))]),t._v(" "),s("td",[t._v(t._s(a.created_at))]),t._v(" "),s("td",{attrs:{width:"200"}},["pending"==a.status?s("button",{staticClass:"btn btn-sm btn-primary",on:{click:function(s){return t.edit(a)}}},[t._v("Edit")]):t._e(),t._v(" "),s("button",{staticClass:"btn btn-sm btn-danger d-none",on:{click:function(s){return t.deleteRow(a)}}},[t._v("Del")])])])})],2)])])])])]),t._v(" "),s("div",{staticClass:"row"},[s("div",{staticClass:"col-12"},[s("div",{staticClass:"card"},[s("div",{staticClass:"card-header"},[s("h4",{staticClass:"mb-0"},[t._v("Invoice")])]),t._v(" "),s("div",{staticClass:"card-content"},[s("div",{staticClass:"table-responsive"},[s("table",{staticClass:"table table-bordered responsive table-sm table-condensed"},[s("tr",[s("th",[t._v("ID")]),t._v(" "),s("th",[t._v("Product")]),t._v(" "),s("th",[t._v("User ")]),t._v(" "),s("th",[t._v("Price")]),t._v(" "),s("th",[t._v("Details")]),t._v(" "),s("th",[t._v("Status")])]),t._v(" "),t._l(t.invoice,function(a,e){return s("tr",{key:e},[s("td",[t._v(t._s(a.id))]),t._v(" "),s("td",[t._v(t._s(a.product_id))]),t._v(" "),s("td",[t._v(t._s(a.user_id))]),t._v(" "),s("td",[t._v(t._s(a.price))]),t._v(" "),s("td",[t._v(t._s(a.details))]),t._v(" "),s("td",[t._v(t._s(a.status))])])})],2)])])])])]),t._v(" "),s("div",{staticClass:"modal fade",attrs:{id:"modal"}},[s("div",{staticClass:"modal-dialog"},[s("div",{staticClass:"modal-content"},[s("div",{staticClass:"modal-header"},[s("h4",{staticClass:"modal-title"},[t._v("New Contact")])]),t._v(" "),s("div",{staticClass:"modal-body"},[s("div",{staticClass:"form-group"},[s("label",{attrs:{for:"name"}},[s("b",[t._v("Status")])]),t._v(" "),s("select",{directives:[{name:"model",rawName:"v-model",value:t.form.status,expression:"form.status"}],staticClass:"form-control",on:{change:function(a){var s=Array.prototype.filter.call(a.target.options,function(t){return t.selected}).map(function(t){return"_value"in t?t._value:t.value});t.$set(t.form,"status",a.target.multiple?s:s[0])}}},[s("option",{attrs:{value:"pending"}},[t._v("pending")]),t._v(" "),s("option",{attrs:{value:"complete"}},[t._v("complete")]),t._v(" "),s("option",{attrs:{value:"cancel"}},[t._v("cancel")])])]),t._v(" "),s("div",{staticClass:"form-group"},[s("label",[s("b",[t._v("Comment")])]),t._v(" "),s("input",{directives:[{name:"model",rawName:"v-model",value:t.form.comment,expression:"form.comment"}],staticClass:"form-control",attrs:{type:"text"},domProps:{value:t.form.comment},on:{input:function(a){a.target.composing||t.$set(t.form,"comment",a.target.value)}}})])]),t._v(" "),s("div",{staticClass:"modal-footer"},[s("button",{staticClass:"btn btn-default",attrs:{type:"button"},on:{click:function(a){return t.closeModal()}}},[t._v("Close")]),t._v(" "),t.form.paymentmethod?s("button",{staticClass:"btn btn-primary",attrs:{type:"submit"},on:{click:function(a){return t.updatetransaction(t.form)}}},[t._v("Save\n                        ")]):s("button",{staticClass:"btn btn-primary",attrs:{type:"submit"},on:{click:function(a){return t.update(t.form)}}},[t._v("Update\n                        ")])])])])])])])},staticRenderFns:[]}}});
=======
webpackJsonp([26],{

/***/ 187:
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
var normalizeComponent = __webpack_require__(231)
/* script */
var __vue_script__ = __webpack_require__(560)
/* template */
var __vue_template__ = __webpack_require__(561)
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
Component.options.__file = "resources/js/Pages/Withdraw/Index.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-d3bd5e54", Component.options)
  } else {
    hotAPI.reload("data-v-d3bd5e54", Component.options)
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

/***/ 560:
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

/***/ 561:
/***/ (function(module, exports, __webpack_require__) {

var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("Layout", { attrs: { name: "Withdraw" } }, [
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
                : _vm._e()
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
    require("vue-hot-reload-api")      .rerender("data-v-d3bd5e54", module.exports)
  }
}

/***/ })

});
>>>>>>> 57d8579bea4cf58db48c584e37a5960227da494e
