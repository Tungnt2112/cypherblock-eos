(window.webpackJsonp=window.webpackJsonp||[]).push([[2],{100:function(e,t,a){e.exports=a(99)()},101:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var l=function(){function e(e,t){for(var a=0;a<t.length;a++){var l=t[a];l.enumerable=l.enumerable||!1,l.configurable=!0,"value"in l&&(l.writable=!0),Object.defineProperty(e,l.key,l)}}return function(t,a,l){return a&&e(t.prototype,a),l&&e(t,l),t}}(),n=a(0),r=i(n),s=i(a(100)),c=i(a(97)),o=i(a(96));function i(e){return e&&e.__esModule?e:{default:e}}var m=function(e){function t(e){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);var a=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return a.handlePreviousPage=function(e){var t=a.state.selected;e.preventDefault?e.preventDefault():e.returnValue=!1,t>0&&a.handlePageSelected(t-1,e)},a.handleNextPage=function(e){var t=a.state.selected,l=a.props.pageCount;e.preventDefault?e.preventDefault():e.returnValue=!1,t<l-1&&a.handlePageSelected(t+1,e)},a.handlePageSelected=function(e,t){t.preventDefault?t.preventDefault():t.returnValue=!1,a.state.selected!==e&&(a.setState({selected:e}),a.callCallback(e))},a.handleBreakClick=function(e,t){t.preventDefault?t.preventDefault():t.returnValue=!1;var l=a.state.selected;a.handlePageSelected(l<e?a.getForwardJump():a.getBackwardJump(),t)},a.callCallback=function(e){void 0!==a.props.onPageChange&&"function"==typeof a.props.onPageChange&&a.props.onPageChange({selected:e})},a.pagination=function(){var e=[],t=a.props,l=t.pageRangeDisplayed,n=t.pageCount,s=t.marginPagesDisplayed,c=t.breakLabel,i=t.breakClassName,m=a.state.selected;if(n<=l)for(var u=0;u<n;u++)e.push(a.getPageElement(u));else{var d=l/2,f=l-d;m>n-l/2?d=l-(f=n-m):m<l/2&&(f=l-(d=m));var p=void 0,g=void 0,b=void 0,N=function(e){return a.getPageElement(e)};for(p=0;p<n;p++)(g=p+1)<=s?e.push(N(p)):g>n-s?e.push(N(p)):p>=m-d&&p<=m+f?e.push(N(p)):c&&e[e.length-1]!==b&&(b=r.default.createElement(o.default,{key:p,breakLabel:c,breakClassName:i,onClick:a.handleBreakClick.bind(null,p)}),e.push(b))}return e},a.state={selected:e.initialPage?e.initialPage:e.forcePage?e.forcePage:0},a}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,n.Component),l(t,[{key:"componentDidMount",value:function(){var e=this.props,t=e.initialPage,a=e.disableInitialCallback;void 0===t||a||this.callCallback(t)}},{key:"componentWillReceiveProps",value:function(e){void 0!==e.forcePage&&this.props.forcePage!==e.forcePage&&this.setState({selected:e.forcePage})}},{key:"getForwardJump",value:function(){var e=this.state.selected,t=this.props,a=t.pageCount,l=e+t.pageRangeDisplayed;return l>=a?a-1:l}},{key:"getBackwardJump",value:function(){var e=this.state.selected-this.props.pageRangeDisplayed;return e<0?0:e}},{key:"hrefBuilder",value:function(e){var t=this.props,a=t.hrefBuilder,l=t.pageCount;if(a&&e!==this.state.selected&&e>=0&&e<l)return a(e+1)}},{key:"getPageElement",value:function(e){var t=this.state.selected,a=this.props,l=a.pageClassName,n=a.pageLinkClassName,s=a.activeClassName,o=a.activeLinkClassName,i=a.extraAriaContext;return r.default.createElement(c.default,{key:e,onClick:this.handlePageSelected.bind(null,e),selected:t===e,pageClassName:l,pageLinkClassName:n,activeClassName:s,activeLinkClassName:o,extraAriaContext:i,href:this.hrefBuilder(e),page:e+1})}},{key:"render",value:function(){var e=this.props,t=e.disabledClassName,a=e.previousClassName,l=e.nextClassName,n=e.pageCount,s=e.containerClassName,c=e.previousLinkClassName,o=e.previousLabel,i=e.nextLinkClassName,m=e.nextLabel,u=this.state.selected,d=a+(0===u?" "+t:""),f=l+(u===n-1?" "+t:"");return r.default.createElement("ul",{className:s},r.default.createElement("li",{className:d},r.default.createElement("a",{onClick:this.handlePreviousPage,className:c,href:this.hrefBuilder(u-1),tabIndex:"0",role:"button",onKeyPress:this.handlePreviousPage},o)),this.pagination(),r.default.createElement("li",{className:f},r.default.createElement("a",{onClick:this.handleNextPage,className:i,href:this.hrefBuilder(u+1),tabIndex:"0",role:"button",onKeyPress:this.handleNextPage},m)))}}]),t}();m.propTypes={pageCount:s.default.number.isRequired,pageRangeDisplayed:s.default.number.isRequired,marginPagesDisplayed:s.default.number.isRequired,previousLabel:s.default.node,nextLabel:s.default.node,breakLabel:s.default.oneOfType([s.default.string,s.default.node]),hrefBuilder:s.default.func,onPageChange:s.default.func,initialPage:s.default.number,forcePage:s.default.number,disableInitialCallback:s.default.bool,containerClassName:s.default.string,pageClassName:s.default.string,pageLinkClassName:s.default.string,activeClassName:s.default.string,activeLinkClassName:s.default.string,previousClassName:s.default.string,nextClassName:s.default.string,previousLinkClassName:s.default.string,nextLinkClassName:s.default.string,disabledClassName:s.default.string,breakClassName:s.default.string},m.defaultProps={pageCount:10,pageRangeDisplayed:2,marginPagesDisplayed:3,activeClassName:"selected",previousClassName:"previous",nextClassName:"next",previousLabel:"Previous",nextLabel:"Next",breakLabel:"...",disabledClassName:"disabled",disableInitialCallback:!1},t.default=m},102:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var l,n=(l=a(101))&&l.__esModule?l:{default:l};t.default=n.default},191:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var l=w(a(52)),n=w(a(3)),r=w(a(7)),s=w(a(6)),c=w(a(5)),o=w(a(4)),i=w(a(76)),m=a(0),u=w(m),d=a(8),f=a(11),p=w(a(48)),g=w(a(102)),b=a(29),N=a(19),h=a(13),v=a(26),E=a(27),x=w(a(47)),y=a(62),k=w(a(95)),C=a(35);function w(e){return e&&e.__esModule?e:{default:e}}var P=49,_=[],S=[],M=0,L=0,D=0,O=0,A=0,I=0,T=0,j=0,R=[],U=[],F=function(e){var t=e.isDarkMode;return u.default.createElement("article",{className:"content dashboard-page"},u.default.createElement("section",{className:"section"},u.default.createElement("div",{className:"card mlr-2px shadow-sm ftz-marketcap mb-1 "+(t?"bg-dark":"bg-white")},u.default.createElement("div",{className:"card-header border-bottom pl-2 "+(t?"bg-dark border-secondary":"bg-actions border-light")},u.default.createElement("i",{className:"fa fa-chart-bar text-info fa-lg mr-2"}),u.default.createElement("h1",{className:"title text-info"},"EOS Marketcap")),u.default.createElement("div",{className:"card-body bg-white p-0"},u.default.createElement("div",{style:{height:50}}),u.default.createElement("div",{className:"text-center align-middle overlay",style:{paddingTop:55}},u.default.createElement("i",{className:"fa fa-spinner fa-spin text-info fa-2x"}))))))},B=function(e,t,a,l){var n=[].concat((0,i.default)(e)).sort(function(e,t){return t.percent-e.percent});return S=[],n.map(function(e){S.push(u.default.createElement("div",{className:"row mt-1 shadow-sm mb-1 mbt-1px pt-1 pb-1 border-bottom "+(t?"border-secondary":"")+" ",key:e.name},u.default.createElement("div",{className:"col-6 row pl-2 p-0 m-0 d-flex align-items-center "},u.default.createElement("div",{className:"mr-1 bg-white logo-exc d-flex align-items-center"},u.default.createElement(p.default,{src:"./imgs/"+e.name.toLowerCase()+".png",fallbackImage:"./imgs/COMMON.png",alt:e.name+" token airdrop",className:"exchange_logo"})),u.default.createElement("div",null,u.default.createElement("a",{href:e.url,target:"_blank",rel:"noopener",className:(t?"linkcolor-dark":"")+"  font-weight-normal"},e.name," (",u.default.createElement("span",{className:"ftz-10"},e.percent,"%"),")"))),u.default.createElement("div",{className:"col-3 row p-0 m-0 d-flex align-items-center "},u.default.createElement("div",{className:"col-12 col-sm-6 p-0 text-right"},z(e.volume,a,l)),u.default.createElement("div",{className:"col-12 col-sm-6 p-0 text-right"},Number(e.amount).toLocaleString(void 0,{maximumFractionDigits:0}))),u.default.createElement("div",{className:"col-3 row p-0 m-0 d-flex align-items-center "},u.default.createElement("div",{className:"col-12 col-sm-7 p-0 text-right pr-1"},V(e.last,a,l)),u.default.createElement("div",{className:"col-12 col-sm-5 p-0 text-right pr-1"},e.change?(0,N.renderPPColor)(Number(e.change).toFixed(2)):""," "))))}),S},q=function(e,t,a){t(e==a+"_DEC"?a+"_ASC":a+"_DEC")},z=function(e,t,a){return u.default.createElement("div",null,1==t?u.default.createElement("img",{src:x.default,alt:"eos",className:"eos-unit"}):"$",1==t?Number(e).toLocaleString(void 0,{maximumFractionDigits:0}):(Number(e)*Number(a)).toLocaleString(void 0,{maximumFractionDigits:0}))},V=function(e,t,a){return u.default.createElement("div",null,1==t?u.default.createElement("img",{src:x.default,alt:"eos",className:"eos-unit"}):"$",1==t?Number(e).toLocaleString(void 0,{maximumSignificantDigits:4}):(Number(e)*Number(a)).toLocaleString(void 0,{maximumSignificantDigits:4}))},G=function(e,t){return e==t+"_DEC"?u.default.createElement("i",{className:"fa fa-sort-down text-success"}):e==t+"_ASC"?u.default.createElement("i",{className:"fa fa-sort-up text-success "}):null},H=function(e){function t(){var e,a,l,s;(0,r.default)(this,t);for(var o=arguments.length,i=Array(o),m=0;m<o;m++)i[m]=arguments[m];return a=l=(0,c.default)(this,(e=t.__proto__||(0,n.default)(t)).call.apply(e,[this].concat(i))),l.handlePageClick=function(e){var t=e.selected;l.props.setMCPGPageSelected(t),l.props.setMCPGOffset(Math.ceil(t*P))},s=a,(0,c.default)(l,s)}return(0,o.default)(t,e),(0,s.default)(t,[{key:"componentWillMount",value:function(){this.props.setActiveLinkID(3)}},{key:"render",value:function(){var e=this,t=this.props.sidebar,a=t.isDarkMode,n=t.mcUnit,r=this.props.common,s=r.mc_symbol,c=r.mc_sortby,o=r.mcpg_offset,m=r.mcpg_selected,d=this.props.setMcSortBy;return _=[],S=[],T=0,j=0,u.default.createElement(f.Query,{query:k.default,pollInterval:0},function(t){var r=t.loading,f=t.error,v=t.data;if(r)return u.default.createElement(F,{isDarkMode:a});if(f)return u.default.createElement(F,{isDarkMode:a});if(v&&v.global_data&&v.eos_stat&&v.table_rows&&v.cmc&&v.eosmarketcap&&v.companies){var E=v.global_data,x=v.eos_stat,k=v.table_rows,w=v.cmc,S=v.eosmarketcap,H=v.companies;switch(T=0,j=0,S.data.map(function(e){j+=Number(e.volume),T+=Number(e.last)*Number(e.supply.current)}),M=(Number(k.rows[0].quote.balance.split(" ")[0])/Number(k.rows[0].base.balance.split(" ")[0])*1024).toFixed(4),L=Number(E.rows[0].max_ram_size),D=Number(x.rows[0].supply.split(" ")[0]),O=Number(w.data.quotes.USD.price),A=w.data.quotes.USD.percent_change_24h,I=w.data.quotes.USD.volume_24h,_.push(u.default.createElement("div",{className:"row p-1 shadow-sm mbt-1px "+(a?"bg-dark":"bg-white"),key:"EOSTOKEN"},u.default.createElement("div",{className:"col-3 pl-1 row m-0 d-flex align-items-center"},u.default.createElement("div",{className:"col-2 p-0 d-flex align-items-center"},0),u.default.createElement("div",{className:"col-10 p-0 pl-2 d-flex align-items-center"},u.default.createElement("div",{className:" mr-2 token_logo",style:{fontSize:16}},u.default.createElement("i",{className:"fa fa-memory"})),u.default.createElement("div",null,"RAM(KB)"))),u.default.createElement("div",{className:"col-3 row p-0 m-0 d-flex align-items-center flex-row-reverse"},u.default.createElement("div",{className:"col-12 col-sm-6 p-0 text-right"},(0,C.formatBandUnits)(L)),u.default.createElement("div",{className:"col-12 col-sm-6 p-0 text-right"},z(L/1024*M,n,O))),u.default.createElement("div",{className:"col-3 row p-0 m-0 d-flex align-items-center flex-row-reverse"},u.default.createElement("div",{className:"col-12 col-sm-6 p-0 text-right"}),u.default.createElement("div",{className:"col-12 col-sm-6 p-0 text-right"}," ")),u.default.createElement("div",{className:"col-3 row p-0 m-0 d-flex align-items-center "},u.default.createElement("div",{className:"col-12 col-sm-7 p-0 text-right pr-1"},V(M,n,O)),u.default.createElement("div",{className:"col-12 col-sm-5 p-0 text-right pr-1"})))),_.push(u.default.createElement("div",{className:"row p-1 shadow-sm mbt-1px "+(a?"bg-dark":"bg-white"),key:"RAM"},u.default.createElement("div",{className:"col-3 pl-1 row m-0 d-flex align-items-center"},u.default.createElement("div",{className:"col-2 p-0 d-flex align-items-center"},1),u.default.createElement("div",{className:"col-10 p-0 pl-2 d-flex align-items-center"},u.default.createElement("div",{className:"mr-2 logo-bgr"},u.default.createElement(p.default,{src:"./imgs/EOS.png",fallbackImage:"./imgs/COMMON.png",alt:"eos token airdrop",className:"token_logo"})),u.default.createElement("div",null,"EOS"))),u.default.createElement("div",{className:"col-3 row p-0 m-0 d-flex align-items-center"},u.default.createElement("div",{className:"col-12 col-sm-6 p-0 text-right"},z(D,n,O)),u.default.createElement("div",{className:"col-12 col-sm-6 p-0 text-right"},D.toLocaleString(void 0,{maximumFractionDigits:0}))),u.default.createElement("div",{className:"col-3 row p-0 m-0 d-flex align-items-center "},u.default.createElement("div",{className:"col-12 col-sm-6 p-0 text-right"},z(I/O,n,O)),u.default.createElement("div",{className:"col-12 col-sm-6 p-0 text-right"},Number(I/O).toLocaleString(void 0,{maximumFractionDigits:0}))),u.default.createElement("div",{className:"col-3 row p-0 m-0 d-flex align-items-center "},u.default.createElement("div",{className:"col-12 col-sm-7 p-0 text-right pr-1"},"$",O.toFixed(2)),u.default.createElement("div",{className:"col-12 col-sm-5 p-0 text-right pr-1"},(0,N.renderPPColor)(A))))),R=[],U=[],U=S.data.filter(function(e){return"eosio.token-eos-eusd"!=e.symbol&&"-eos"==e.symbol.substring(e.symbol.length-4)}).map(function(e,t){return(0,l.default)({},e,{rank:t})}),c){case"VOL_DEC":R=[].concat((0,i.default)(U)).sort(function(e,t){return Number(t.volume)-Number(e.volume)});break;case"VOL_ASC":R=[].concat((0,i.default)(U)).sort(function(e,t){return Number(e.volume)-Number(t.volume)});break;case"AMT_DEC":R=[].concat((0,i.default)(U)).sort(function(e,t){return Number(t.amount)-Number(e.amount)});break;case"AMT_ASC":R=[].concat((0,i.default)(U)).sort(function(e,t){return Number(e.amount)-Number(t.amount)});break;case"LAST_DEC":R=[].concat((0,i.default)(U)).sort(function(e,t){return Number(t.last)-Number(e.last)});break;case"LAST_ASC":R=[].concat((0,i.default)(U)).sort(function(e,t){return Number(e.last)-Number(t.last)});break;case"CHANGE_DEC":R=[].concat((0,i.default)(U)).sort(function(e,t){return Number(t.change)-Number(e.change)});break;case"CHANGE_ASC":R=[].concat((0,i.default)(U)).sort(function(e,t){return Number(e.change)-Number(t.change)});break;case"MCAP_DEC":R=[].concat((0,i.default)(U)).sort(function(e,t){return Number(t.supply.current)*Number(t.last)-Number(e.supply.current)*Number(e.last)});break;case"MCAP_ASC":R=[].concat((0,i.default)(U)).sort(function(e,t){return Number(e.supply.current)*Number(e.last)-Number(t.supply.current)*Number(t.last)});break;case"SUPP_DEC":R=[].concat((0,i.default)(U)).sort(function(e,t){return Number(t.supply.current)-Number(e.supply.current)});break;case"SUPP_ASC":R=[].concat((0,i.default)(U)).sort(function(e,t){return Number(e.supply.current)-Number(t.supply.current)});break;default:R=[].concat((0,i.default)(S.data))}return R.map(function(e,t){s&&(0,y.IsTokenSearched)(e,s)?_.push(u.default.createElement("div",{className:"row p-1 shadow-sm mbt-1px "+(a?"bg-dark":"bg-white"),key:e.symbol},u.default.createElement("div",{className:"col-3 pl-1 row m-0 d-flex align-items-center"},u.default.createElement("div",{className:"col-2 p-0 d-flex align-items-center"},e.rank+2),u.default.createElement("div",{className:"col-10 p-0 pl-2 d-flex align-items-center"},u.default.createElement("div",{className:"mr-2 bg-white logo-bgr"},u.default.createElement(p.default,{src:"./imgs/"+e.symbol+".png",fallbackImage:"./imgs/COMMON.png",alt:e.currency+" eos token airdrop",className:"token_logo"})),u.default.createElement("div",{className:"d-flex align-items-center"},(0,h.renderProjectLink)(e),u.default.createElement("a",{className:"font-weight-normal","data-toggle":"collapse",href:"#collapse"+e.symbol,role:"button","aria-expanded":"true","aria-controls":"collapse"+e.symbol},u.default.createElement("i",{className:"fa fa-info-circle ml-1 "}))))),u.default.createElement("div",{className:"col-3 row p-0 m-0 d-flex align-items-center"},u.default.createElement("div",{className:"col-12 col-sm-6 p-0 text-right"},z(Number(e.supply.current)*Number(e.last),n,O)),u.default.createElement("div",{className:"col-12 col-sm-6 p-0 text-right"},Number(e.supply.current).toLocaleString(void 0,{maximumFractionDigits:0}))),u.default.createElement("div",{className:"col-3 row p-0 m-0 d-flex align-items-center"},u.default.createElement("div",{className:"col-12 col-sm-6 p-0 text-right"},u.default.createElement("a",{className:"font-weight-normal","data-toggle":"collapse",href:"#collapse"+e.symbol,role:"button","aria-expanded":"true","aria-controls":"collapse"+e.symbol},z(e.volume,n,O))),u.default.createElement("div",{className:"col-12 col-sm-6 p-0 text-right"},u.default.createElement("a",{className:"font-weight-normal","data-toggle":"collapse",href:"#collapse"+e.symbol,role:"button","aria-expanded":"true","aria-controls":"collapse"+e.symbol},Number(e.amount).toLocaleString(void 0,{maximumFractionDigits:0})))),u.default.createElement("div",{className:"col-3 row p-0 m-0 d-flex align-items-center "},u.default.createElement("div",{className:"col-12 col-sm-7 p-0 text-right pr-1"},u.default.createElement("a",{className:"font-weight-normal","data-toggle":"collapse",href:"#collapse"+e.symbol,role:"button","aria-expanded":"true","aria-controls":"collapse"+e.symbol},V(e.last,n,O))),u.default.createElement("div",{className:"col-12 col-sm-5 p-0 text-right pr-1"},u.default.createElement("a",{className:"font-weight-normal","data-toggle":"collapse",href:"#collapse"+e.symbol,role:"button","aria-expanded":"true","aria-controls":"collapse"+e.symbol},(0,N.renderPPColor)(Number(e.change).toFixed(2))))),u.default.createElement("div",{className:"mt-1 collapse w-100 "+(a?"bg-dark-1":"bg-actions"),id:"collapse"+e.symbol},B(e.exchanges,a,n,O),u.default.createElement("div",{className:"pl-2 text-info p-1"},"Contract: ",(0,h.renderAccountLink)(e.contract)," website:"," ",H.data.findIndex(function(t){return t.symbol==e.symbol})>=0?u.default.createElement("a",{href:H.data[H.data.findIndex(function(t){return t.symbol==e.symbol})].website,target:"_blank",rel:"noopener"},H.data[H.data.findIndex(function(t){return t.symbol==e.symbol})].website):"")))):!s&&t>=o&&t<o+P&&_.push(u.default.createElement("div",{className:"row p-1 shadow-sm mbt-1px "+(a?"bg-dark":"bg-white"),key:e.symbol},u.default.createElement("div",{className:"col-3 pl-1 row m-0 d-flex align-items-center"},u.default.createElement("div",{className:"col-2 p-0 d-flex align-items-center"},e.rank+2),u.default.createElement("div",{className:"col-10 p-0 pl-2 d-flex align-items-center"},u.default.createElement("div",{className:"mr-2 bg-white logo-bgr"},u.default.createElement(p.default,{src:"./imgs/"+e.symbol+".png",fallbackImage:"./imgs/COMMON.png",alt:e.currency+" eos token airdrop",className:"token_logo"})),u.default.createElement("div",{className:"d-flex align-items-center"},(0,h.renderProjectLink)(e),u.default.createElement("a",{className:"font-weight-normal","data-toggle":"collapse",href:"#collapse"+e.symbol,role:"button","aria-expanded":"true","aria-controls":"collapse"+e.symbol},u.default.createElement("i",{className:"fa fa-info-circle ml-1 "}))))),u.default.createElement("div",{className:"col-3 row p-0 m-0 d-flex align-items-center"},u.default.createElement("div",{className:"col-12 col-sm-6 p-0 text-right"},z(Number(e.supply.current)*Number(e.last),n,O)),u.default.createElement("div",{className:"col-12 col-sm-6 p-0 text-right"},Number(e.supply.current).toLocaleString(void 0,{maximumFractionDigits:0}))),u.default.createElement("div",{className:"col-3 row p-0 m-0 d-flex align-items-center"},u.default.createElement("div",{className:"col-12 col-sm-6 p-0 text-right"},u.default.createElement("a",{className:"font-weight-normal","data-toggle":"collapse",href:"#collapse"+e.symbol,role:"button","aria-expanded":"true","aria-controls":"collapse"+e.symbol},z(e.volume,n,O))),u.default.createElement("div",{className:"col-12 col-sm-6 p-0 text-right"},u.default.createElement("a",{className:"font-weight-normal","data-toggle":"collapse",href:"#collapse"+e.symbol,role:"button","aria-expanded":"true","aria-controls":"collapse"+e.symbol},Number(e.amount).toLocaleString(void 0,{maximumFractionDigits:0})))),u.default.createElement("div",{className:"col-3 row p-0 m-0 d-flex align-items-center "},u.default.createElement("div",{className:"col-12 col-sm-7 p-0 text-right pr-1"},u.default.createElement("a",{className:"font-weight-normal","data-toggle":"collapse",href:"#collapse"+e.symbol,role:"button","aria-expanded":"true","aria-controls":"collapse"+e.symbol},V(e.last,n,O))),u.default.createElement("div",{className:"col-12 col-sm-5 p-0 text-right pr-1"},u.default.createElement("a",{className:"font-weight-normal","data-toggle":"collapse",href:"#collapse"+e.symbol,role:"button","aria-expanded":"true","aria-controls":"collapse"+e.symbol},(0,N.renderPPColor)(Number(e.change).toFixed(2))))),u.default.createElement("div",{className:"mt-1 collapse w-100 "+(a?"bg-dark-1":"bg-actions"),id:"collapse"+e.symbol},B(e.exchanges,a,n,O),u.default.createElement("div",{className:"pl-2 text-info p-1"},"Contract: ",(0,h.renderAccountLink)(e.contract)," website:"," ",H.data.findIndex(function(t){return t.symbol==e.symbol})>=0?u.default.createElement("a",{href:H.data[H.data.findIndex(function(t){return t.symbol==e.symbol})].website,target:"_blank",rel:"noopener"},H.data[H.data.findIndex(function(t){return t.symbol==e.symbol})].website):""))))}),u.default.createElement("article",{className:"content dashboard-page"},u.default.createElement(b.Helmet,null,u.default.createElement("title",null,"Cypherblock | EOS Marketcap | Token, Project, Price, Ranking")),u.default.createElement("section",{className:"section"},u.default.createElement("div",{className:"card mlr-2px shadow-sm ftz-marketcap mb-1 "+(a?"bg-dark":"bg-white")},u.default.createElement("div",{className:"card-header row m-0 "+(a?"bg-dark":"bg-actions")},u.default.createElement("div",{className:"col-12 p-2 row m-0"},u.default.createElement("div",{className:"col p-0 d-flex align-items-center"},u.default.createElement("i",{className:"fa fa-chart-bar text-info fa-lg mr-2"}),u.default.createElement("h1",{className:"title text-info"},"EOS Marketcap")),u.default.createElement("label",{className:"font-weight-normal float-right mb-0"},u.default.createElement("select",{id:"inputmcUnit",className:"form-control-sm border-0",value:n,onChange:function(t){e.props.setMarketcapUnit(t.target.value)},style:{height:30}},u.default.createElement("option",{value:1},"EOS"),u.default.createElement("option",{value:2},"USD"))),u.default.createElement("div",{className:"ml-1"},u.default.createElement("div",{className:"input-group input-group-seamless mb-0 pr-1 float-right",style:{width:100,height:30}},u.default.createElement("input",{type:"text",className:"form-control border-0","aria-label":"Text input with checkbox",onChange:function(t){e.props.setMCSearchSymbol(t.target.value)}}),u.default.createElement("div",{className:"input-group-append"},u.default.createElement("div",{className:"input-group-text"},u.default.createElement("i",{className:"fa fa-search"})))))),u.default.createElement("div",{className:"col-12 row pt-2 pb-1 pl-0 pr-4 shadow-sm m-0 "+(a?"bg-dark-1":"bg-white"),key:2},u.default.createElement("div",{className:"col-4  row pl-0 m-0"},u.default.createElement("div",{className:"col-12 col-sm-6 p-0"},u.default.createElement("div",{className:"text-info ftz-headermc text-right"}," 24H VOLUME "),u.default.createElement("div",{className:"text-right"},z(j,n,O))),u.default.createElement("div",{className:"col-12 col-sm-6 p-0 "},u.default.createElement("div",{className:"text-info ftz-headermc text-right"}," 24H VOLUME(+EOS) "),u.default.createElement("div",{className:"text-right"},z(j+I/O,n,O)))),u.default.createElement("div",{className:"col-4  row pl-0 m-0"},u.default.createElement("div",{className:"col-12 col-sm-6 p-0"},u.default.createElement("div",{className:"text-info ftz-headermc text-right"}," MARKETCAP "),u.default.createElement("div",{className:"text-right"},z(T,n,O))),u.default.createElement("div",{className:"col-12 col-sm-6 p-0 "},u.default.createElement("div",{className:"text-info ftz-headermc text-right"}," MARKETCAP(+EOS) "),u.default.createElement("div",{className:"text-right"},z(T+D,n,O)))),u.default.createElement("div",{className:"col-4 row pl-0 m-0"},u.default.createElement("div",{className:"col-12 col-sm-6 p-0 "},u.default.createElement("div",{className:"text-info ftz-headermc text-right"}," EOS VOL DOMINANCE "),u.default.createElement("div",{className:"text-right"},(I/O*100/(I/O+j)).toLocaleString(void 0,{maximumFractionDigits:2}),"%")),u.default.createElement("div",{className:"col-12 col-sm-6 p-0 "},u.default.createElement("div",{className:"text-info ftz-headermc text-right"}," EOS MC DOMINANCE "),u.default.createElement("div",{className:"text-right"},(100*D/(D+T)).toLocaleString(void 0,{maximumFractionDigits:2}),"%"))))),u.default.createElement("div",{className:"pt-2 pr-2 row m-0"},u.default.createElement("div",{className:"text-info ml-2 col p-0"}," Count: ",R.length+2," "),u.default.createElement("div",{className:"col text-right pr-1 "},u.default.createElement(g.default,{previousLabel:"Previous",nextLabel:"Next",breakLabel:"...",pageCount:Math.ceil(R.length/P),marginPagesDisplayed:2,pageRangeDisplayed:5,onPageChange:e.handlePageClick,containerClassName:"pagination mb-1 cp ftz-12",subContainerClassName:"pages pagination",activeClassName:"active "+(a?"bg-white":"bg-success")+"  rounded",pageClassName:"mr-1 ml-1 pr-1 pl-1",forcePage:m}))),u.default.createElement("div",{className:"bg-white p-0 m-0 card-body "},u.default.createElement("div",{className:"row p-1 shadow-sm mc-headfont mbt-1px text-info border-top border-bottom "+(a?"bg-dark border-secondary":"bg-white"),key:1},u.default.createElement("div",{className:"col-3 pl-1 row m-0 d-flex align-items-center"},u.default.createElement("div",{className:"col-2 p-0 d-flex align-items-center"},"#"),u.default.createElement("div",{className:"col-10 p-0 pl-2 d-flex align-items-center"},"Name")),u.default.createElement("div",{className:"col-3 row p-0 m-0 d-flex align-items-center"},u.default.createElement("a",{href:"#",className:"col-12 col-sm-6 p-0 text-right font-weight-normal text-info",onClick:function(){return q(c,d,"MCAP")}},G(c,"MCAP")," Marketcap"),u.default.createElement("a",{href:"#",className:"col-12 col-sm-6 p-0 text-right font-weight-normal text-info",onClick:function(){return q(c,d,"SUPP")}},G(c,"SUPP")," Circulating Supply")),u.default.createElement("div",{className:"col-3 row p-0 m-0 d-flex align-items-center"},u.default.createElement("a",{href:"#",className:"col-12 col-sm-6 p-0 text-right font-weight-normal text-info",onClick:function(){return q(c,d,"VOL")}},G(c,"VOL")," 24h Volume"),u.default.createElement("a",{href:"#",className:"col-12 col-sm-6 p-0 text-right font-weight-normal text-info",onClick:function(){return q(c,d,"AMT")}},G(c,"AMT")," 24h Amount")),u.default.createElement("div",{className:"col-3 row p-0 m-0 d-flex align-items-center "},u.default.createElement("a",{href:"#",className:"col-12 col-sm-7 p-0 text-right pr-1 font-weight-normal text-info",onClick:function(){return q(c,d,"LAST")}},G(c,"LAST")," Price"),u.default.createElement("a",{href:"#",className:"col-12 col-sm-5 p-0 text-right pr-1 font-weight-normal text-info",onClick:function(){return q(c,d,"CHANGE")}},G(c,"CHANGE")," 24h Change"))),_),u.default.createElement("div",{className:"pt-2 pr-2 row m-0"},u.default.createElement("div",{className:"col text-right pr-1"},u.default.createElement(g.default,{previousLabel:"Previous",nextLabel:"Next",breakLabel:"...",breakClassName:"p-1",pageCount:Math.ceil(R.length/P),marginPagesDisplayed:2,pageRangeDisplayed:5,onPageChange:e.handlePageClick,containerClassName:"pagination mb-1 cp ftz-12",subContainerClassName:"pages pagination",activeClassName:"active "+(a?"bg-white":"bg-success")+"  rounded",pageClassName:"mr-1 ml-1 pr-1 pl-1",forcePage:m}))))))}return u.default.createElement(F,{isDarkMode:a})})}}]),t}(m.Component);t.default=(0,d.connect)(function(e){var t=e.myStore;return{sidebar:t.sidebar,common:t.common}},{setActiveLinkID:v.setActiveLinkID,setMarketcapUnit:v.setMarketcapUnit,setMCSearchSymbol:E.setMCSearchSymbol,setMcSortBy:E.setMcSortBy,setMCPGOffset:E.setMCPGOffset,setMCPGPageSelected:E.setMCPGPageSelected})(H)},95:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var l=(0,r(a(15)).default)(['\n  query eos_marketcap($limit: String) {\n    eosmarketcap(limit: $limit) {\n      data {\n        symbol\n        contract\n        currency\n        supply {\n          current\n          max\n        }\n        last\n        change\n        amount\n        volume\n        exchanges {\n          name\n          url\n          percent\n          last\n          change\n          amount\n          volume\n        }\n      }\n    }\n    companies {\n      data {\n        symbol\n        website\n      }\n    }\n    table_rows(json: "true", code: "eosio", scope: "eosio", table: "rammarket", limit: "10") {\n      rows {\n        supply\n        base {\n          balance\n          weight\n        }\n        quote {\n          balance\n          weight\n        }\n      }\n    }\n    eos_stat(json: "true", code: "eosio.token", scope: "EOS", table: "stat", limit: "10") {\n      rows {\n        supply\n      }\n    }\n    global_data(json: "true", code: "eosio", scope: "eosio", table: "global", limit: "10") {\n      rows {\n        max_ram_size\n      }\n    }\n    cmc {\n      data {\n        quotes {\n          USD {\n            price\n            volume_24h\n            percent_change_24h\n          }\n        }\n      }\n    }\n  }\n'],['\n  query eos_marketcap($limit: String) {\n    eosmarketcap(limit: $limit) {\n      data {\n        symbol\n        contract\n        currency\n        supply {\n          current\n          max\n        }\n        last\n        change\n        amount\n        volume\n        exchanges {\n          name\n          url\n          percent\n          last\n          change\n          amount\n          volume\n        }\n      }\n    }\n    companies {\n      data {\n        symbol\n        website\n      }\n    }\n    table_rows(json: "true", code: "eosio", scope: "eosio", table: "rammarket", limit: "10") {\n      rows {\n        supply\n        base {\n          balance\n          weight\n        }\n        quote {\n          balance\n          weight\n        }\n      }\n    }\n    eos_stat(json: "true", code: "eosio.token", scope: "EOS", table: "stat", limit: "10") {\n      rows {\n        supply\n      }\n    }\n    global_data(json: "true", code: "eosio", scope: "eosio", table: "global", limit: "10") {\n      rows {\n        max_ram_size\n      }\n    }\n    cmc {\n      data {\n        quotes {\n          USD {\n            price\n            volume_24h\n            percent_change_24h\n          }\n        }\n      }\n    }\n  }\n']),n=r(a(14));function r(e){return e&&e.__esModule?e:{default:e}}t.default=(0,n.default)(l)},96:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var l,n=(l=a(0))&&l.__esModule?l:{default:l};t.default=function(e){var t=e.breakLabel,a=e.breakClassName||"break",l=e.onClick;return n.default.createElement("li",{className:a},n.default.createElement("a",{onClick:l,role:"button",tabIndex:"0",onKeyPress:l},t))}},97:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var l,n=(l=a(0))&&l.__esModule?l:{default:l};t.default=function(e){var t=e.pageClassName,a=e.pageLinkClassName,l=e.onClick,r=e.href,s="Page "+e.page+(e.extraAriaContext?" "+e.extraAriaContext:""),c=null;return e.selected&&(c="page",s="Page "+e.page+" is your current page",t=void 0!==t?t+" "+e.activeClassName:e.activeClassName,void 0!==a?(a=a,void 0!==e.activeLinkClassName&&(a=a+" "+e.activeLinkClassName)):a=e.activeLinkClassName),n.default.createElement("li",{className:t},n.default.createElement("a",{onClick:l,role:"button",className:a,href:r,tabIndex:"0","aria-label":s,"aria-current":c,onKeyPress:l},e.page))}},98:function(e,t,a){"use strict";e.exports="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED"},99:function(e,t,a){"use strict";var l=a(98);function n(){}e.exports=function(){function e(e,t,a,n,r,s){if(s!==l){var c=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw c.name="Invariant Violation",c}}function t(){return e}e.isRequired=e;var a={array:e,bool:e,func:e,number:e,object:e,string:e,symbol:e,any:e,arrayOf:t,element:e,instanceOf:t,node:e,objectOf:t,oneOf:t,oneOfType:t,shape:t,exact:t};return a.checkPropTypes=n,a.PropTypes=a,a}}}]);