!function(e){function t(t){for(var a,i,l=t[0],s=t[1],c=t[2],f=0,m=[];f<l.length;f++)i=l[f],r[i]&&m.push(r[i][0]),r[i]=0;for(a in s)Object.prototype.hasOwnProperty.call(s,a)&&(e[a]=s[a]);for(u&&u(t);m.length;)m.shift()();return o.push.apply(o,c||[]),n()}function n(){for(var e,t=0;t<o.length;t++){for(var n=o[t],a=!0,l=1;l<n.length;l++){var s=n[l];0!==r[s]&&(a=!1)}a&&(o.splice(t--,1),e=i(i.s=n[0]))}return e}var a={},r={2:0},o=[];function i(t){if(a[t])return a[t].exports;var n=a[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,i),n.l=!0,n.exports}i.e=function(e){var t=[],n=r[e];if(0!==n)if(n)t.push(n[2]);else{var a=new Promise(function(t,a){n=r[e]=[t,a]});t.push(n[2]=a);var o=document.getElementsByTagName("head")[0],l=document.createElement("script");l.charset="utf-8",l.timeout=120,i.nc&&l.setAttribute("nonce",i.nc),l.src=function(e){return i.p+""+({}[e]||e)+".js"}(e);var s=setTimeout(function(){c({type:"timeout",target:l})},12e4);function c(t){l.onerror=l.onload=null,clearTimeout(s);var n=r[e];if(0!==n){if(n){var a=t&&("load"===t.type?"missing":t.type),o=t&&t.target&&t.target.src,i=new Error("Loading chunk "+e+" failed.\n("+a+": "+o+")");i.type=a,i.request=o,n[1](i)}r[e]=void 0}}l.onerror=l.onload=c,o.appendChild(l)}return Promise.all(t)},i.m=e,i.c=a,i.d=function(e,t,n){i.o(e,t)||Object.defineProperty(e,t,{configurable:!1,enumerable:!0,get:n})},i.r=function(e){Object.defineProperty(e,"__esModule",{value:!0})},i.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return i.d(t,"a",t),t},i.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},i.p="/",i.oe=function(e){throw console.error(e),e};var l=window.webpackJsonp=window.webpackJsonp||[],s=l.push.bind(l);l.push=t,l=l.slice();for(var c=0;c<l.length;c++)t(l[c]);var u=s;o.push([158,0]),n()}({105:function(e,t,n){var a,r,o,i,l="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e};i=function(e){"use strict";function t(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},a=Object.keys(n);"function"==typeof Object.getOwnPropertySymbols&&(a=a.concat(Object.getOwnPropertySymbols(n).filter(function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable}))),a.forEach(function(t){var a,r,o;a=e,o=n[r=t],r in a?Object.defineProperty(a,r,{value:o,enumerable:!0,configurable:!0,writable:!0}):a[r]=o})}return e}var n,a,r,o,i,s,c,u,f=function(e){var t="transitionend",n={TRANSITION_END:"mmTransitionEnd",triggerTransitionEnd:function(n){e(n).trigger(t)},supportsTransitionEnd:function(){return Boolean(t)}};return e.fn.mmEmulateTransitionEnd=function(t){var a=this,r=!1;return e(this).one(n.TRANSITION_END,function(){r=!0}),setTimeout(function(){r||n.triggerTransitionEnd(a)},t),this},e.event.special[n.TRANSITION_END]={bindType:t,delegateType:t,handle:function(t){if(e(t.target).is(this))return t.handleObj.handler.apply(this,arguments)}},n}(e=e&&e.hasOwnProperty("default")?e.default:e);return o="."+(r=a="metisMenu"),i=(n=e).fn[a],s={toggle:!0,preventDefault:!0,activeClass:"active",collapseClass:"collapse",collapseInClass:"in",collapsingClass:"collapsing",triggerElement:"a",parentTrigger:"li",subMenu:"ul"},c={SHOW:"show"+o,SHOWN:"shown"+o,HIDE:"hide"+o,HIDDEN:"hidden"+o,CLICK_DATA_API:"click"+o+".data-api"},u=function(){function e(e,n){this.element=e,this.config=t({},s,n),this.transitioning=null,this.init()}var a=e.prototype;return a.init=function(){var e=this,t=this.config;n(this.element).find(t.parentTrigger+"."+t.activeClass).has(t.subMenu).children(t.subMenu).addClass(t.collapseClass+" "+t.collapseInClass),n(this.element).find(t.parentTrigger).not("."+t.activeClass).has(t.subMenu).children(t.subMenu).addClass(t.collapseClass),n(this.element).find(t.parentTrigger).has(t.subMenu).children(t.triggerElement).on(c.CLICK_DATA_API,function(a){var r=n(this),o=r.parent(t.parentTrigger),i=o.siblings(t.parentTrigger).children(t.triggerElement),l=o.children(t.subMenu);t.preventDefault&&a.preventDefault(),"true"!==r.attr("aria-disabled")&&(o.hasClass(t.activeClass)?(r.attr("aria-expanded",!1),e.hide(l)):(e.show(l),r.attr("aria-expanded",!0),t.toggle&&i.attr("aria-expanded",!1)),t.onTransitionStart&&t.onTransitionStart(a))})},a.show=function(e){var t=this;if(!this.transitioning&&!n(e).hasClass(this.config.collapsingClass)){var a=n(e),r=n.Event(c.SHOW);a.trigger(r),r.isDefaultPrevented()||(a.parent(this.config.parentTrigger).addClass(this.config.activeClass),this.config.toggle&&this.hide(a.parent(this.config.parentTrigger).siblings().children(this.config.subMenu+"."+this.config.collapseInClass)),a.removeClass(this.config.collapseClass).addClass(this.config.collapsingClass).height(0),this.setTransitioning(!0),a.height(e[0].scrollHeight).one(f.TRANSITION_END,function(){t.config&&t.element&&(a.removeClass(t.config.collapsingClass).addClass(t.config.collapseClass+" "+t.config.collapseInClass).height(""),t.setTransitioning(!1),a.trigger(c.SHOWN))}).mmEmulateTransitionEnd(350))}},a.hide=function(e){var t=this;if(!this.transitioning&&n(e).hasClass(this.config.collapseInClass)){var a=n(e),r=n.Event(c.HIDE);if(a.trigger(r),!r.isDefaultPrevented()){a.parent(this.config.parentTrigger).removeClass(this.config.activeClass),a.height(a.height())[0].offsetHeight,a.addClass(this.config.collapsingClass).removeClass(this.config.collapseClass).removeClass(this.config.collapseInClass),this.setTransitioning(!0);var o=function(){t.config&&t.element&&(t.transitioning&&t.config.onTransitionEnd&&t.config.onTransitionEnd(),t.setTransitioning(!1),a.trigger(c.HIDDEN),a.removeClass(t.config.collapsingClass).addClass(t.config.collapseClass))};0===a.height()||"none"===a.css("display")?o():a.height(0).one(f.TRANSITION_END,o).mmEmulateTransitionEnd(350)}}},a.setTransitioning=function(e){this.transitioning=e},a.dispose=function(){n.removeData(this.element,r),n(this.element).find(this.config.parentTrigger).has(this.config.subMenu).children(this.config.triggerElement).off("click"),this.transitioning=null,this.config=null,this.element=null},e.jQueryInterface=function(a){return this.each(function(){var o=n(this),i=o.data(r),c=t({},s,o.data(),"object"==(void 0===a?"undefined":l(a))&&a?a:{});if(!i&&/dispose/.test(a)&&this.dispose(),i||(i=new e(this,c),o.data(r,i)),"string"==typeof a){if(void 0===i[a])throw new Error('No method named "'+a+'"');i[a]()}})},e}(),n.fn[a]=u.jQueryInterface,n.fn[a].Constructor=u,n.fn[a].noConflict=function(){return n.fn[a]=i,u.jQueryInterface},u},"object"==l(t)&&void 0!==e?e.exports=i(n(15)):(r=[n(15)],void 0===(o="function"==typeof(a=i)?a.apply(t,r):a)||(e.exports=o))},158:function(e,t,n){e.exports=n(82)},164:function(e,t){},166:function(e,t){},168:function(e,t){},82:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),o=n(57),i=n.n(o),l=n(49),s=n(12),c=n(160),u=n(59),f=n(159),m=n(5),p=n(48),d=n(52),h=n(161),g=(n(168),n(166),n(107),n(164),n(105),n(15)),b=n.n(g);b()(function(){b()("#sidebar-menu, #customize-menu").metisMenu({activeClass:"open"}),b()("#sidebar-collapse-btn").on("click",function(e){e.preventDefault(),b()("#app").toggleClass("sidebar-open")}),b()(".sidebar-overlay").on("click",function(){b()("#app").removeClass("sidebar-open")}),b()("#sidebar-menu").on("click",function(){b()("#app").removeClass("sidebar-open")})});var v,E,y=n(18),N=n(10),w=function(){return r.a.createElement("article",{className:"content dashboard-page"},r.a.createElement("section",{className:"section"},r.a.createElement("div",null," this is dashboard ")))},C=n(13),O=n.n(C),T=(v=["\n  {\n    user {\n      id\n      email\n    }\n  }\n"],E=["\n  {\n    user {\n      id\n      email\n    }\n  }\n"],Object.freeze(Object.defineProperties(v,{raw:{value:Object.freeze(E)}}))),j=O()(T),k=n(19),_=n(3),P=function(){return r.a.createElement("div",null,r.a.createElement("aside",{className:"sidebar"},r.a.createElement("div",{className:"sidebar-container"},r.a.createElement("div",{className:"sidebar-header"},r.a.createElement("div",{className:"brand"},r.a.createElement("div",{className:"logo"},r.a.createElement("span",{className:"l l1"}),r.a.createElement("span",{className:"l l2"}),r.a.createElement("span",{className:"l l3"}),r.a.createElement("span",{className:"l l4"}),r.a.createElement("span",{className:"l l5"})),"Cypherblock")),r.a.createElement("nav",{className:"menu"},r.a.createElement("ul",{className:"sidebar-menu metismenu",id:"sidebar-menu"},r.a.createElement("li",{className:"border-bottom border-top border-secondary"},r.a.createElement(k.a,{to:"/",className:"text-secondary"},r.a.createElement(_.a,{icon:"home",className:"mr-2"})," Dashboard")),r.a.createElement("li",{className:"border-bottom border-secondary"},r.a.createElement(k.a,{to:"/account/cyphercrypto",className:"text-secondary"},r.a.createElement(_.a,{icon:"chalkboard-teacher",className:"mr-2"})," Account"))))),r.a.createElement("footer",{className:"sidebar-footer"})),r.a.createElement("div",{className:"sidebar-overlay",id:"sidebar-overlay"}),r.a.createElement("div",{className:"sidebar-mobile-menu-handle",id:"sidebar-mobile-menu-handle"}),r.a.createElement("div",{className:"mobile-menu-handle"}))},S=function(){function e(e,t){for(var n=0;n<t.length;n++){var a=t[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}return function(t,n,a){return n&&e(t.prototype,n),a&&e(t,a),t}}(),I=function(e){function t(){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,a.Component),S(t,[{key:"render",value:function(){var e=this.props.data;return e.loadding,e.user,r.a.createElement(P,null)}}]),t}(),D=Object(s.graphql)(j)(I),x=Object.freeze(Object.defineProperties(["\n  mutation {\n    logout {\n      id\n      email\n    }\n  }\n"],{raw:{value:Object.freeze(["\n  mutation {\n    logout {\n      id\n      email\n    }\n  }\n"])}})),A=O()(x),M=n(51),H=n.n(M)()(),L=function(){function e(e,t){for(var n=0;n<t.length;n++){var a=t[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}return function(t,n,a){return n&&e(t.prototype,n),a&&e(t,a),t}}(),q=function(e){function t(e){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);var n=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return n.state={term:""},n.submit=n.submit.bind(n),n.changeTerm=n.changeTerm.bind(n),n}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,a.Component),L(t,[{key:"changeTerm",value:function(e){this.setState({term:e.target.value})}},{key:"submit",value:function(e){e.preventDefault(),H.push("/account/"+this.state.term)}},{key:"onLogoutClick",value:function(){this.props.mutate({refetchQueries:[{query:j}]})}},{key:"render",value:function(){var e=this.props.data,t=e.loadding,n=e.user;return t?r.a.createElement("div",null):n?r.a.createElement("header",{className:"header"},r.a.createElement("div",{className:"header-block header-block-collapse d-lg-none d-xl-none"},r.a.createElement("button",{className:"collapse-btn",id:"sidebar-collapse-btn"},r.a.createElement(_.a,{icon:"lock-open"}))),r.a.createElement("div",{className:"header-block"},r.a.createElement("form",{role:"search",onSubmit:this.submit},r.a.createElement("div",{className:"input-container"},r.a.createElement("i",{className:"fa fa-search"}),r.a.createElement("input",{type:"search",placeholder:"AccountName/Public Key/Tx",onChange:this.changeTerm}),r.a.createElement("div",{className:"underline"})))),r.a.createElement("div",{className:"header-block header-block-nav"},r.a.createElement("ul",{className:"nav-profile"},r.a.createElement("li",{className:"profile dropdown"},r.a.createElement("a",{className:"nav-link dropdown-toggle","data-toggle":"dropdown",href:"#",role:"button","aria-haspopup":"true","aria-expanded":"false"},r.a.createElement("div",{className:"img"}),r.a.createElement("span",{className:"name"}," ")),r.a.createElement("div",{className:"dropdown-menu profile-dropdown-menu","aria-labelledby":"dropdownMenu1"},r.a.createElement("a",{className:"dropdown-item",href:"#"},r.a.createElement("i",{className:"fa fa-user icon"})," Profile"," "),r.a.createElement("a",{className:"dropdown-item",href:"#"},r.a.createElement("i",{className:"fa fa-bell icon"})," Notifications"," "),r.a.createElement("a",{className:"dropdown-item",href:"#"},r.a.createElement("i",{className:"fa fa-gear icon"})," Settings"," "),r.a.createElement("div",{className:"dropdown-divider"}),r.a.createElement("a",{className:"dropdown-item",href:"login.html"},r.a.createElement("i",{className:"fa fa-power-off icon"})," Logout"," ")))))):r.a.createElement("header",{className:"header shadow-sm bg-light"},r.a.createElement("div",{className:"header-block header-block-collapse d-lg-none d-xl-none"},r.a.createElement("button",{className:"collapse-btn",id:"sidebar-collapse-btn"},r.a.createElement(_.a,{icon:"bars"}))),r.a.createElement("div",{className:"header-block header-block-search w-100 pr-2 pt-2"},r.a.createElement("form",{role:"search",className:"float-left card w-100",onSubmit:this.submit},r.a.createElement("div",{className:"input-container"},r.a.createElement("input",{type:"search",placeholder:"Search by ACCOUNT/PUBKEY/TX",className:"search_font w-100 form-control",onChange:this.changeTerm,name:"search"})))))}}]),t}(),R=Object(s.graphql)(A)(Object(s.graphql)(j)(q)),Q=function(e){return r.a.createElement("footer",{className:"footer"},r.a.createElement("div",{className:"footer-block buttons"}),r.a.createElement("div",{className:"footer-block author"},r.a.createElement("ul",null,r.a.createElement("li",null,"created by"," ",r.a.createElement("a",{href:"https://github.com/Cypherman1/CypherBlock"},"Cypherblock")))))},z=function(){function e(e,t){for(var n=0;n<t.length;n++){var a=t[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}return function(t,n,a){return n&&e(t.prototype,n),a&&e(t,a),t}}();function B(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}y.b.add(N.j,N.b,N.k,N.h,N.i,N.f,N.m,N.a,N.l,N.e,N.c,N.g,N.n,N.o,N.d);var K=function(e){function t(){var e,n,a;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);for(var r=arguments.length,o=Array(r),i=0;i<r;i++)o[i]=arguments[i];return n=a=B(this,(e=t.__proto__||Object.getPrototypeOf(t)).call.apply(e,[this].concat(o))),a.state={component:null},B(a,n)}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,a.Component),z(t,[{key:"componentDidMount",value:function(){var e=this;this.props.load().then(function(t){e.setState(function(){return{component:t.default?t.default:t}})})}},{key:"render",value:function(){return this.props.children(this.state.component)}}]),t}(),W=function(e){return r.a.createElement(K,{load:function(){return Promise.all([n.e(0),n.e(1)]).then(n.bind(null,83))}},function(t){return null===t?r.a.createElement("p",null,"Loading"):r.a.createElement(t,e)})},J=Object(d.a)(function(e){var t=e.graphQLErrors,n=e.networkError,a=(e.operation,e.response);t&&t.map(function(e){var t=e.message,n=e.locations,a=e.path;return console.log("[GraphQL error]: Message: "+t+", Location: "+n+", Path: "+a)}),n&&a&&(a.errors=null)}),U=Object(p.a)({uri:"/graphql"}),G=m.a.from([J,U]),X=new l.default({link:G,cache:new h.a,queryDeduplication:!0});i.a.render(r.a.createElement(function(){return r.a.createElement(s.ApolloProvider,{client:X},r.a.createElement(c.a,{history:H},r.a.createElement("div",{id:"main-wrapper"},r.a.createElement("div",{className:"app",id:"app"},r.a.createElement(R,null),r.a.createElement(D,null),r.a.createElement(f.a,null,r.a.createElement(u.a,{path:"/",exact:!0,component:w}),r.a.createElement(u.a,{path:"/account/:account_name",component:W})),r.a.createElement(Q,null)))))},null),document.querySelector("#root"))}});