(function(e){function t(t){for(var a,o,s=t[0],u=t[1],i=t[2],d=0,f=[];d<s.length;d++)o=s[d],Object.prototype.hasOwnProperty.call(r,o)&&r[o]&&f.push(r[o][0]),r[o]=0;for(a in u)Object.prototype.hasOwnProperty.call(u,a)&&(e[a]=u[a]);l&&l(t);while(f.length)f.shift()();return c.push.apply(c,i||[]),n()}function n(){for(var e,t=0;t<c.length;t++){for(var n=c[t],a=!0,o=1;o<n.length;o++){var s=n[o];0!==r[s]&&(a=!1)}a&&(c.splice(t--,1),e=u(u.s=n[0]))}return e}var a={},o={app:0},r={app:0},c=[];function s(e){return u.p+"js/"+({}[e]||e)+"."+{"chunk-075daa12":"b9b9d09f","chunk-1a8bfb26":"76a44876","chunk-2d22bcc3":"b0fe4adc","chunk-3e4cf015":"b03eabf0","chunk-436793e2":"dfec0b0c","chunk-6267f2d6":"a3af1e27","chunk-8fd193d6":"68a5f99b","chunk-912f0a9e":"de4cf63f","chunk-6c8dae8b":"1790d0ef","chunk-76d6b0a3":"643fc223","chunk-e5267ff6":"e1d3b0ca","chunk-043fd458":"ce202ea2","chunk-53c23071":"db743aab"}[e]+".js"}function u(t){if(a[t])return a[t].exports;var n=a[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,u),n.l=!0,n.exports}u.e=function(e){var t=[],n={"chunk-075daa12":1,"chunk-6267f2d6":1,"chunk-8fd193d6":1,"chunk-912f0a9e":1,"chunk-6c8dae8b":1,"chunk-76d6b0a3":1,"chunk-043fd458":1,"chunk-53c23071":1};o[e]?t.push(o[e]):0!==o[e]&&n[e]&&t.push(o[e]=new Promise((function(t,n){for(var a="css/"+({}[e]||e)+"."+{"chunk-075daa12":"c0732149","chunk-1a8bfb26":"31d6cfe0","chunk-2d22bcc3":"31d6cfe0","chunk-3e4cf015":"31d6cfe0","chunk-436793e2":"31d6cfe0","chunk-6267f2d6":"4f14dda2","chunk-8fd193d6":"cbdf5a28","chunk-912f0a9e":"06194056","chunk-6c8dae8b":"8648db9f","chunk-76d6b0a3":"53c6dd53","chunk-e5267ff6":"31d6cfe0","chunk-043fd458":"2a1659d0","chunk-53c23071":"724155e8"}[e]+".css",r=u.p+a,c=document.getElementsByTagName("link"),s=0;s<c.length;s++){var i=c[s],d=i.getAttribute("data-href")||i.getAttribute("href");if("stylesheet"===i.rel&&(d===a||d===r))return t()}var f=document.getElementsByTagName("style");for(s=0;s<f.length;s++){i=f[s],d=i.getAttribute("data-href");if(d===a||d===r)return t()}var l=document.createElement("link");l.rel="stylesheet",l.type="text/css",l.onload=t,l.onerror=function(t){var a=t&&t.target&&t.target.src||r,c=new Error("Loading CSS chunk "+e+" failed.\n("+a+")");c.code="CSS_CHUNK_LOAD_FAILED",c.request=a,delete o[e],l.parentNode.removeChild(l),n(c)},l.href=r;var b=document.getElementsByTagName("head")[0];b.appendChild(l)})).then((function(){o[e]=0})));var a=r[e];if(0!==a)if(a)t.push(a[2]);else{var c=new Promise((function(t,n){a=r[e]=[t,n]}));t.push(a[2]=c);var i,d=document.createElement("script");d.charset="utf-8",d.timeout=120,u.nc&&d.setAttribute("nonce",u.nc),d.src=s(e);var f=new Error;i=function(t){d.onerror=d.onload=null,clearTimeout(l);var n=r[e];if(0!==n){if(n){var a=t&&("load"===t.type?"missing":t.type),o=t&&t.target&&t.target.src;f.message="Loading chunk "+e+" failed.\n("+a+": "+o+")",f.name="ChunkLoadError",f.type=a,f.request=o,n[1](f)}r[e]=void 0}};var l=setTimeout((function(){i({type:"timeout",target:d})}),12e4);d.onerror=d.onload=i,document.head.appendChild(d)}return Promise.all(t)},u.m=e,u.c=a,u.d=function(e,t,n){u.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},u.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},u.t=function(e,t){if(1&t&&(e=u(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(u.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var a in e)u.d(n,a,function(t){return e[t]}.bind(null,a));return n},u.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return u.d(t,"a",t),t},u.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},u.p="/tncems/",u.oe=function(e){throw console.error(e),e};var i=window["webpackJsonp"]=window["webpackJsonp"]||[],d=i.push.bind(i);i.push=t,i=i.slice();for(var f=0;f<i.length;f++)t(i[f]);var l=d;c.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("cd49")},"0613":function(e,t,n){"use strict";var a=n("2b0e"),o=n("2f62"),r=n("1dff"),c={namespaced:!0,state:{windowWidth:0,shallShowOverlay:!1},getters:{currentBreakPoint:function(e){var t=e.windowWidth;return t>=r["a"].xl?"xl":t>=r["a"].lg?"lg":t>=r["a"].md?"md":t>=r["a"].sm?"sm":"xs"}},mutations:{UPDATE_WINDOW_WIDTH:function(e,t){e.windowWidth=t},TOGGLE_OVERLAY:function(e,t){e.shallShowOverlay=void 0!==t?t:!e.shallShowOverlay}},actions:{}},s=(n("ac1f"),n("466d"),{namespaced:!0,state:{layout:{isRTL:r["c"].layout.isRTL,skin:localStorage.getItem("vuexy-skin")||r["c"].layout.skin,routerTransition:r["c"].layout.routerTransition,type:r["c"].layout.type,contentWidth:r["c"].layout.contentWidth,menu:{hidden:r["c"].layout.menu.hidden},navbar:{type:r["c"].layout.navbar.type,backgroundColor:r["c"].layout.navbar.backgroundColor},footer:{type:r["c"].layout.footer.type}}},getters:{},mutations:{TOGGLE_RTL:function(e){e.layout.isRTL=!e.layout.isRTL,document.documentElement.setAttribute("dir",e.layout.isRTL?"rtl":"ltr")},UPDATE_SKIN:function(e,t){e.layout.skin=t,localStorage.setItem("vuexy-skin",t),"dark"===t?document.body.classList.add("dark-layout"):document.body.className.match("dark-layout")&&document.body.classList.remove("dark-layout")},UPDATE_ROUTER_TRANSITION:function(e,t){e.layout.routerTransition=t},UPDATE_LAYOUT_TYPE:function(e,t){e.layout.type=t},UPDATE_CONTENT_WIDTH:function(e,t){e.layout.contentWidth=t},UPDATE_NAV_MENU_HIDDEN:function(e,t){e.layout.menu.hidden=t},UPDATE_NAVBAR_CONFIG:function(e,t){Object.assign(e.layout.navbar,t)},UPDATE_FOOTER_CONFIG:function(e,t){Object.assign(e.layout.footer,t)}},actions:{}}),u={namespaced:!0,state:{isVerticalMenuCollapsed:r["c"].layout.menu.isCollapsed},getters:{},mutations:{UPDATE_VERTICAL_MENU_COLLAPSED:function(e,t){e.isVerticalMenuCollapsed=t}},actions:{}},i=n("1da1"),d=(n("b0c0"),n("96cf"),n("bc3a")),f=n.n(d),l={namespaced:!0,state:{userInfo:{_id:"",name:"",phone:"",isAdmin:!1,group:"",monitorTypeOfInterest:[]}},getters:{},actions:{getUserInfo:function(e){return Object(i["a"])(regeneratorRuntime.mark((function t(){var n,a;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return n=e.commit,t.prev=1,t.next=4,f.a.get("/User");case 4:if(a=t.sent,200!==a.status){t.next=8;break}return n("setUserInfo",a.data),t.abrupt("return",a.data);case 8:t.next=13;break;case 10:throw t.prev=10,t.t0=t["catch"](1),new Error(t.t0);case 13:case"end":return t.stop()}}),t,null,[[1,10]])})))()}},mutations:{setUserInfo:function(e,t){e.userInfo._id=t._id,e.userInfo.name=t.name,e.userInfo.isAdmin=t.isAdmin,e.userInfo.group=t.group,e.userInfo.monitorTypeOfInterest=t.monitorTypeOfInterest}}};a["default"].use(o["a"]);var b={state:{isLoading:!1,loadingMessage:"...",login:!1},mutations:{setLoading:function(e,t){var n=t.loading,a=t.message;e.isLoading=n,a&&(e.loadingMessage=a)},setLogin:function(e,t){e.login=t}},modules:{app:c,appConfig:s,verticalMenu:u,user:l},strict:Object({NODE_ENV:"production",BASE_URL:"/tncems/"}).DEV};t["a"]=new o["a"].Store(b)},"1dff":function(e,t,n){"use strict";n.d(t,"b",(function(){return a})),n.d(t,"a",(function(){return o})),n.d(t,"c",(function(){return r}));var a={},o={},r={app:{appName:"TNCEMS",appLogoImage:n("ed29")},layout:{isRTL:!1,skin:"semi-dark",routerTransition:"zoom-fade",type:"vertical",contentWidth:"full",menu:{hidden:!1,isCollapsed:!0},navbar:{type:"floating",backgroundColor:""},footer:{type:"static"},customizer:!0,enableScrollToTop:!0}}},4131:function(e,t,n){},4678:function(e,t,n){var a={"./af":"2bfb","./af.js":"2bfb","./ar":"8e73","./ar-dz":"a356","./ar-dz.js":"a356","./ar-kw":"423e","./ar-kw.js":"423e","./ar-ly":"1cfd","./ar-ly.js":"1cfd","./ar-ma":"0a84","./ar-ma.js":"0a84","./ar-sa":"8230","./ar-sa.js":"8230","./ar-tn":"6d83","./ar-tn.js":"6d83","./ar.js":"8e73","./az":"485c","./az.js":"485c","./be":"1fc1","./be.js":"1fc1","./bg":"84aa","./bg.js":"84aa","./bm":"a7fa","./bm.js":"a7fa","./bn":"9043","./bn-bd":"9686","./bn-bd.js":"9686","./bn.js":"9043","./bo":"d26a","./bo.js":"d26a","./br":"6887","./br.js":"6887","./bs":"2554","./bs.js":"2554","./ca":"d716","./ca.js":"d716","./cs":"3c0d","./cs.js":"3c0d","./cv":"03ec","./cv.js":"03ec","./cy":"9797","./cy.js":"9797","./da":"0f14","./da.js":"0f14","./de":"b469","./de-at":"b3eb","./de-at.js":"b3eb","./de-ch":"bb71","./de-ch.js":"bb71","./de.js":"b469","./dv":"598a","./dv.js":"598a","./el":"8d47","./el.js":"8d47","./en-au":"0e6b","./en-au.js":"0e6b","./en-ca":"3886","./en-ca.js":"3886","./en-gb":"39a6","./en-gb.js":"39a6","./en-ie":"e1d3","./en-ie.js":"e1d3","./en-il":"7333","./en-il.js":"7333","./en-in":"ec2e","./en-in.js":"ec2e","./en-nz":"6f50","./en-nz.js":"6f50","./en-sg":"b7e9","./en-sg.js":"b7e9","./eo":"65db","./eo.js":"65db","./es":"898b","./es-do":"0a3c","./es-do.js":"0a3c","./es-mx":"b5b7","./es-mx.js":"b5b7","./es-us":"55c9","./es-us.js":"55c9","./es.js":"898b","./et":"ec18","./et.js":"ec18","./eu":"0ff2","./eu.js":"0ff2","./fa":"8df4","./fa.js":"8df4","./fi":"81e9","./fi.js":"81e9","./fil":"d69a","./fil.js":"d69a","./fo":"0721","./fo.js":"0721","./fr":"9f26","./fr-ca":"d9f8","./fr-ca.js":"d9f8","./fr-ch":"0e49","./fr-ch.js":"0e49","./fr.js":"9f26","./fy":"7118","./fy.js":"7118","./ga":"5120","./ga.js":"5120","./gd":"f6b4","./gd.js":"f6b4","./gl":"8840","./gl.js":"8840","./gom-deva":"aaf2","./gom-deva.js":"aaf2","./gom-latn":"0caa","./gom-latn.js":"0caa","./gu":"e0c5","./gu.js":"e0c5","./he":"c7aa","./he.js":"c7aa","./hi":"dc4d","./hi.js":"dc4d","./hr":"4ba9","./hr.js":"4ba9","./hu":"5b14","./hu.js":"5b14","./hy-am":"d6b6","./hy-am.js":"d6b6","./id":"5038","./id.js":"5038","./is":"0558","./is.js":"0558","./it":"6e98","./it-ch":"6f12","./it-ch.js":"6f12","./it.js":"6e98","./ja":"079e","./ja.js":"079e","./jv":"b540","./jv.js":"b540","./ka":"201b","./ka.js":"201b","./kk":"6d79","./kk.js":"6d79","./km":"e81d","./km.js":"e81d","./kn":"3e92","./kn.js":"3e92","./ko":"22f8","./ko.js":"22f8","./ku":"2421","./ku.js":"2421","./ky":"9609","./ky.js":"9609","./lb":"440c","./lb.js":"440c","./lo":"b29d","./lo.js":"b29d","./lt":"26f9","./lt.js":"26f9","./lv":"b97c","./lv.js":"b97c","./me":"293c","./me.js":"293c","./mi":"688b","./mi.js":"688b","./mk":"6909","./mk.js":"6909","./ml":"02fb","./ml.js":"02fb","./mn":"958b","./mn.js":"958b","./mr":"39bd","./mr.js":"39bd","./ms":"ebe4","./ms-my":"6403","./ms-my.js":"6403","./ms.js":"ebe4","./mt":"1b45","./mt.js":"1b45","./my":"8689","./my.js":"8689","./nb":"6ce3","./nb.js":"6ce3","./ne":"3a39","./ne.js":"3a39","./nl":"facd","./nl-be":"db29","./nl-be.js":"db29","./nl.js":"facd","./nn":"b84c","./nn.js":"b84c","./oc-lnc":"167b","./oc-lnc.js":"167b","./pa-in":"f3ff","./pa-in.js":"f3ff","./pl":"8d57","./pl.js":"8d57","./pt":"f260","./pt-br":"d2d4","./pt-br.js":"d2d4","./pt.js":"f260","./ro":"972c","./ro.js":"972c","./ru":"957c","./ru.js":"957c","./sd":"6784","./sd.js":"6784","./se":"ffff","./se.js":"ffff","./si":"eda5","./si.js":"eda5","./sk":"7be6","./sk.js":"7be6","./sl":"8155","./sl.js":"8155","./sq":"c8f3","./sq.js":"c8f3","./sr":"cf1e","./sr-cyrl":"13e9","./sr-cyrl.js":"13e9","./sr.js":"cf1e","./ss":"52bd","./ss.js":"52bd","./sv":"5fbd","./sv.js":"5fbd","./sw":"74dc","./sw.js":"74dc","./ta":"3de5","./ta.js":"3de5","./te":"5cbb","./te.js":"5cbb","./tet":"576c","./tet.js":"576c","./tg":"3b1b","./tg.js":"3b1b","./th":"10e8","./th.js":"10e8","./tk":"5aff","./tk.js":"5aff","./tl-ph":"0f38","./tl-ph.js":"0f38","./tlh":"cf755","./tlh.js":"cf755","./tr":"0e81","./tr.js":"0e81","./tzl":"cf51","./tzl.js":"cf51","./tzm":"c109","./tzm-latn":"b53d","./tzm-latn.js":"b53d","./tzm.js":"c109","./ug-cn":"6117","./ug-cn.js":"6117","./uk":"ada2","./uk.js":"ada2","./ur":"5294","./ur.js":"5294","./uz":"2e8c","./uz-latn":"010e","./uz-latn.js":"010e","./uz.js":"2e8c","./vi":"2921","./vi.js":"2921","./x-pseudo":"fd7e","./x-pseudo.js":"fd7e","./yo":"7f33","./yo.js":"7f33","./zh-cn":"5c3a","./zh-cn.js":"5c3a","./zh-hk":"49ab","./zh-hk.js":"49ab","./zh-mo":"3a6c","./zh-mo.js":"3a6c","./zh-tw":"90ea","./zh-tw.js":"90ea"};function o(e){var t=r(e);return n(t)}function r(e){if(!n.o(a,e)){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}return a[e]}o.keys=function(){return Object.keys(a)},o.resolve=r,e.exports=o,o.id="4678"},"59b8":function(e,t,n){},"5c0b":function(e,t,n){"use strict";n("9c0c")},"602d4":function(e,t,n){},"78a7":function(e,t,n){},"8bd0":function(e,t,n){"use strict";n("602d4")},"9c0c":function(e,t,n){},a18c:function(e,t,n){"use strict";n("d3b7"),n("3ca3"),n("ddb0");var a=n("2b0e"),o=n("8c4f");a["default"].use(o["a"]);var r=new o["a"]({mode:"hash",base:"/tncems/",scrollBehavior:function(){return{x:0,y:0}},routes:[{path:"/",name:"home",component:function(){return Promise.all([n.e("chunk-e5267ff6"),n.e("chunk-043fd458")]).then(n.bind(null,"bb51"))},meta:{pageTitle:"首頁",breadcrumb:[]}},{path:"/smart-grid",name:"smart-grid",component:function(){return n.e("chunk-436793e2").then(n.bind(null,"b4a1"))},meta:{pageTitle:"智能電網",breadcrumb:[]}},{path:"/neoenergy",name:"neoenergy",component:function(){return Promise.all([n.e("chunk-e5267ff6"),n.e("chunk-53c23071")]).then(n.bind(null,"e5dd"))},meta:{pageTitle:"再生能源",breadcrumb:[]}},{path:"/energy-saving",name:"energy-saving",component:function(){return n.e("chunk-6c8dae8b").then(n.bind(null,"aa31"))},meta:{pageTitle:"節電成效",breadcrumb:[]}},{path:"/requirement-adjust",name:"requirement-adjust",component:function(){return n.e("chunk-1a8bfb26").then(n.bind(null,"142b"))},meta:{pageTitle:"需量調控",breadcrumb:[]}},{path:"/links",name:"links",component:function(){return n.e("chunk-3e4cf015").then(n.bind(null,"b398"))},meta:{pageTitle:"友善連結",breadcrumb:[]}},{path:"/login",name:"login",component:function(){return n.e("chunk-76d6b0a3").then(n.bind(null,"a55b"))},meta:{layout:"full"}},{path:"/error-404",name:"error-404",component:function(){return n.e("chunk-075daa12").then(n.bind(null,"d80f"))},meta:{layout:"full"}},{path:"*",redirect:"error-404"}]});t["a"]=r},b8f2:function(e,t,n){"use strict";n.d(t,"a",(function(){return r}));var a=n("ed09"),o=n("0613");function r(){var e=Object(a["computed"])({get:function(){return o["a"].state.verticalMenu.isVerticalMenuCollapsed},set:function(e){o["a"].commit("verticalMenu/UPDATE_VERTICAL_MENU_COLLAPSED",e)}}),t=Object(a["computed"])({get:function(){return o["a"].state.appConfig.layout.isRTL},set:function(e){o["a"].commit("appConfig/TOGGLE_RTL",e)}}),n=Object(a["computed"])({get:function(){return o["a"].state.appConfig.layout.skin},set:function(e){o["a"].commit("appConfig/UPDATE_SKIN",e)}}),r=Object(a["computed"])((function(){return"bordered"===n.value?"bordered-layout":"semi-dark"===n.value?"semi-dark-layout":null})),c=Object(a["computed"])({get:function(){return o["a"].state.appConfig.layout.routerTransition},set:function(e){o["a"].commit("appConfig/UPDATE_ROUTER_TRANSITION",e)}}),s=Object(a["computed"])({get:function(){return o["a"].state.appConfig.layout.type},set:function(e){o["a"].commit("appConfig/UPDATE_LAYOUT_TYPE",e)}});Object(a["watch"])(s,(function(e){"horizontal"===e&&"semi-dark"===n.value&&(n.value="light")}));var u=Object(a["computed"])({get:function(){return o["a"].state.appConfig.layout.contentWidth},set:function(e){o["a"].commit("appConfig/UPDATE_CONTENT_WIDTH",e)}}),i=Object(a["computed"])({get:function(){return o["a"].state.appConfig.layout.menu.hidden},set:function(e){o["a"].commit("appConfig/UPDATE_NAV_MENU_HIDDEN",e)}}),d=Object(a["computed"])({get:function(){return o["a"].state.appConfig.layout.navbar.backgroundColor},set:function(e){o["a"].commit("appConfig/UPDATE_NAVBAR_CONFIG",{backgroundColor:e})}}),f=Object(a["computed"])({get:function(){return o["a"].state.appConfig.layout.navbar.type},set:function(e){o["a"].commit("appConfig/UPDATE_NAVBAR_CONFIG",{type:e})}}),l=Object(a["computed"])({get:function(){return o["a"].state.appConfig.layout.footer.type},set:function(e){o["a"].commit("appConfig/UPDATE_FOOTER_CONFIG",{type:e})}});return{isVerticalMenuCollapsed:e,isRTL:t,skin:n,skinClasses:r,routerTransition:c,navbarBackgroundColor:d,navbarType:f,footerType:l,layoutType:s,contentWidth:u,isNavMenuHidden:i}}},cc0f:function(e,t,n){},cd49:function(e,t,n){"use strict";n.r(t);n("e260"),n("e6cf"),n("cca6"),n("a79d"),n("b0c0");var a,o,r=n("2b0e"),c=n("5f5b"),s=n("b1e0"),u=n("51c2"),i=n("dbbe"),d=n("ed09"),f=n("bc3a"),l=n.n(f),b=n("c1df"),m=n.n(b),p=n("ea7f"),h=n.n(p),j=n("33c6"),g=n.n(j),y=n("0319"),k=n.n(y),v=n("d68a"),T=n.n(v),O=n("8937"),_=n.n(O),C=n("9062"),E=n.n(C),w=n("a18c"),A=n("0613"),L=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"h-100",class:[e.skinClasses],attrs:{id:"app"}},[n("loading",{attrs:{active:e.isLoading,"is-full-page":!0},on:{"update:active":function(t){e.isLoading=t}},scopedSlots:e._u([{key:"after",fn:function(){return[e._v("   "),n("i",[e._v(e._s(e.loadingMessage))])]},proxy:!0}])}),n(e.layout,{tag:"component"},[n("router-view")],1)],1)},P=[],N=(n("d3b7"),n("3ca3"),n("ddb0"),n("498a"),n("a9e3"),n("fb6a"),n("9ab4")),D=n("1dff"),I=n("04b0"),S=n("b8f2"),U=n("2f62"),z=n("16ce"),x=(n("e40d"),n("9062")),R=function(){return Promise.all([n.e("chunk-6267f2d6"),n.e("chunk-912f0a9e")]).then(n.bind(null,"03d1"))},M=function(){return Promise.all([n.e("chunk-6267f2d6"),n.e("chunk-8fd193d6")]).then(n.bind(null,"2607"))},V=function(){return n.e("chunk-2d22bcc3").then(n.bind(null,"f102"))},W=r["default"].extend({components:{LayoutHorizontal:M,LayoutVertical:R,LayoutFull:V,Loading:x},setup:function(){var e=Object(S["a"])(),t=e.skin,n=e.skinClasses;"dark"===t.value&&document.body.classList.add("dark-layout"),Object(I["provideToast"])({hideProgressBar:!0,closeOnClick:!1,closeButton:!1,icon:!1,timeout:3e3,transition:"Vue-Toastification__fade"}),A["a"].commit("app/UPDATE_WINDOW_WIDTH",window.innerWidth);var a=Object(z["b"])().width;return Object(d["watch"])(a,(function(e){A["a"].commit("app/UPDATE_WINDOW_WIDTH",e)})),{skinClasses:n}},computed:Object(N["a"])(Object(N["a"])({},Object(U["c"])(["isLoading","loadingMessage"])),{layout:function(){return this.$route&&this.$route.meta&&this.$route.meta.layout&&"full"===this.$route.meta.layout?"layout-full":"layout-"+this.contentLayoutType},contentLayoutType:function(){return this.$store.state.appConfig.layout.type}}),beforeCreate:function(){for(var e=["primary","secondary","success","info","warning","danger","light","dark"],t=D["b"],n=0,a=e.length;n<a;n++)t[e[n]]=Object(z["a"])("--"+e[n],document.documentElement).value.trim();var o=["xs","sm","md","lg","xl"],r=D["a"];for(n=0,a=o.length;n<a;n++)r[o[n]]=Number(Object(z["a"])("--breakpoint-"+o[n],document.documentElement).value.slice(0,-2));var c=D["c"].layout.isRTL;document.documentElement.setAttribute("dir",c?"rtl":"ltr")},mounted:function(){return Object(N["b"])(this,void 0,void 0,(function(){return Object(N["c"])(this,(function(e){return this.$ability.update([{action:"manage",subject:"all"}]),[2]}))}))},methods:{}}),G=W,B=(n("5c0b"),n("2877")),F=Object(B["a"])(G,L,P,!1,null,null,null),H=F.exports,$=n("7bb1"),q=n("4a7a"),J=n.n(q),Y=n("5530"),K=n("0a35"),X={name:"FeatherIcon",functional:!0,props:{icon:{required:!0,type:[String,Object]},size:{type:String,default:"14"},badge:{type:[String,Object,Number],default:null},badgeClasses:{type:[String,Object,Array],default:"badge-primary"}},render:function(e,t){var n=t.props,a=t.data,o=e(K[n.icon],Object(Y["a"])({props:{size:n.size}},a));if(!n.badge)return o;var r=e("span",{staticClass:"badge badge-up badge-pill",class:n.badgeClasses},[n.badge]);return e("span",{staticClass:"feather-icon position-relative"},[o,r])}},Z=X,Q=(n("8bd0"),Object(B["a"])(Z,a,o,!1,null,null,null)),ee=Q.exports,te=n("2b52"),ne=n("4b58"),ae=n("ff93"),oe=JSON.parse(localStorage.getItem("userData")),re=oe?oe.ability:null,ce=new ne["a"](re||ae["a"]);r["default"].use(te["a"],ce);var se=n("2b88"),ue=n.n(se);r["default"].use(ue.a);var ie=n("6c42");n("cc0f");r["default"].use(ie["default"],{hideProgressBar:!0,closeOnClick:!1,closeButton:!1,icon:!1,timeout:3e3,transition:"Vue-Toastification__fade"});n("1923");l.a.defaults.baseURL="",l.a.defaults.withCredentials=!0,m.a.locale("zh_tw"),g()(h.a),k()(h.a),T()(h.a),_()(h.a),h.a.setOptions({lang:{contextButtonTitle:"圖表功能表",downloadJPEG:"下載JPEG",downloadPDF:"下載PDF",downloadPNG:"下載PNG",downloadSVG:"下載SVG",downloadCSV:"下載CSV",downloadXLS:"下載XLS",drillUpText:"回到{series.name}.",noData:"無資料",months:["1月","2月","3月","4月","5月","6月","7月","8月","9月","10月","11月","12月"],printChart:"列印圖表",resetZoom:"重設放大區間",resetZoomTitle:"回到原圖大小",shortMonths:["1月","2月","3月","4月","5月","6月","7月","8月","9月","10月","11月","12月"],viewFullscreen:"全螢幕檢視",viewData:"檢視資料表",weekdays:["星期日","星期一","星期二","星期三","星期四","星期五","星期六"]}}),r["default"].component("VSelect",J.a),r["default"].component("ValidationProvider",$["b"]),r["default"].use(c["a"]),r["default"].use(s["a"]),r["default"].use(u["a"]),r["default"].use(i["a"]),r["default"].use(E.a),r["default"].use(d["default"]),r["default"].component(ee.name,ee),n("4131"),n("78a7"),n("59b8"),n("e40d"),r["default"].config.productionTip=!1,new r["default"]({router:w["a"],store:A["a"],render:function(e){return e(H)}}).$mount("#app")},ed29:function(e,t,n){e.exports=n.p+"img/logo.c68f7107.svg"},ff93:function(e,t,n){"use strict";n.d(t,"a",(function(){return a}));var a=[{action:"read",subject:"Auth"}]}});
//# sourceMappingURL=app.d8fe11b9.js.map