(window.webpackJsonp=window.webpackJsonp||[]).push([[16,13],{100:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a=(0,s(n(13)).default)(["\n  query get_actions($account_name: String!, $pos: Int, $offset: Int) {\n    total: actions(account_name: $account_name, pos: -1, offset: -1) {\n      actions {\n        account_action_seq\n      }\n    }\n    actions(account_name: $account_name, pos: $pos, offset: $offset) {\n      actions {\n        global_action_seq\n        account_action_seq\n        block_num\n        block_time\n        action_trace {\n          receipt {\n            receiver\n            act_digest\n            global_sequence\n          }\n          act {\n            account\n            name\n            authorization {\n              actor\n              permission\n            }\n            data\n          }\n          trx_id\n        }\n      }\n      last_irreversible_block\n    }\n    chain {\n      head_block_num\n    }\n  }\n"],["\n  query get_actions($account_name: String!, $pos: Int, $offset: Int) {\n    total: actions(account_name: $account_name, pos: -1, offset: -1) {\n      actions {\n        account_action_seq\n      }\n    }\n    actions(account_name: $account_name, pos: $pos, offset: $offset) {\n      actions {\n        global_action_seq\n        account_action_seq\n        block_num\n        block_time\n        action_trace {\n          receipt {\n            receiver\n            act_digest\n            global_sequence\n          }\n          act {\n            account\n            name\n            authorization {\n              actor\n              permission\n            }\n            data\n          }\n          trx_id\n        }\n      }\n      last_irreversible_block\n    }\n    chain {\n      head_block_num\n    }\n  }\n"]),o=s(n(12));function s(e){return e&&e.__esModule?e:{default:e}}t.default=(0,o.default)(a)},101:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a=E(n(50)),o=E(n(59)),s=E(n(3)),i=E(n(7)),c=E(n(6)),l=E(n(5)),r=E(n(4)),u=n(0),d=E(u),p=n(27),m=n(2),f=E(n(100)),h=n(10),g=n(9),b=E(n(49)),v=n(67),_=n(66),k=n(65),y=n(34);function E(e){return e&&e.__esModule?e:{default:e}}var N="",x=null,S=0,I=0,O=!0,A=function(){return d.default.createElement("div",null,d.default.createElement("div",{className:"card-block pt-1 pb-0 pr-1 pl-1 "},d.default.createElement("div",{className:"text-center align-middle pd-vi"},d.default.createElement(m.FontAwesomeIcon,{icon:"spinner",spin:!0,className:"text-info fa-2x"}))))},F=function(e){function t(){return(0,i.default)(this,t),(0,l.default)(this,(t.__proto__||(0,s.default)(t)).apply(this,arguments))}return(0,r.default)(t,e),(0,c.default)(t,[{key:"renderLoadMoreBtn",value:function(e,t){var n=this;return this.props.eosActions.islive?d.default.createElement("button",{type:"button",className:"btn btn-outline-info text-light w-100"},"Fetch more"):O?this.props.eosActions.isbuttonloading?d.default.createElement("div",{className:"w-100 text-center"},d.default.createElement(m.FontAwesomeIcon,{icon:"spinner",spin:!0,className:"text-info fa-2x"})):d.default.createElement("button",{type:"button",className:"btn btn-outline-info w-100",onClick:function(){n.props.setIsButtonLoading(!0),e({variables:{offset:0-Number(t)-Number(n.props.eosActions.limit)},updateQuery:function(e,s){var i=s.fetchMoreResult;return i||i.actions?(I=Number(t)+Number(n.props.eosActions.limit),n.props.setIsButtonLoading(!1),O=0!=i.actions.actions[0].account_action_seq,(0,o.default)({},{total:i.total,chain:i.chain,actions:{actions:[].concat((0,a.default)(i.actions.actions)),last_irreversible_block:i.actions.last_irreversible_block,__typename:"ActionsType"}})):(n.props.setIsButtonLoading(!1),e)}}).catch(function(e){return n.props.setIsButtonLoading(!1),!0})}},"Fetch more(fetched:",I,"/",S,")"):d.default.createElement("button",{type:"button",className:"btn btn-outline-info text-light w-100",disabled:!0},"END(fetched:",S,"/",S,")")}},{key:"componentDidMount",value:function(){this.props.setRefetchFunc(this.props.data.refetch)}},{key:"componentWillMount",value:function(){this.props.setLiveActions(this.props.isLive),this.props.setIsSettingOpen(!1),I=Number(this.props.eosActions.limit),O=!0}},{key:"render",value:function(){if(this.props.data.loading)return d.default.createElement(A,null);var e=this.props,t=e.data,n=e.eosActions,o=e.account_name,s=e.setIsSettingOpen,i=e.isDarkMode,c=this.props.data.fetchMore,l=n.isAntiSpamed,r=n.isFilterOthers,u=n.isFilterSmartContract,f=n.isFilterResources,h=n.isFilterSendReceiveTokens,g=n.isFilterSendReceiveEOS,y=n.memoTags,E=n.isSettingOpen;if(n.actionsLength,t.error)return d.default.createElement(A,null);var F=[];return t&&t.actions&&t.chain&&t.total&&t.total.actions[0]?(N="",x=[].concat((0,a.default)(t.actions.actions)).sort(function(e,t){return Number(t.account_action_seq)-Number(e.account_action_seq)}),S=Number(t.total.actions[0].account_action_seq)+1,I=t.actions.actions.length,O=I<S,x.map(function(e){e.action_trace.receipt.act_digest!==N&&!(0,v.IsSpam)(e.action_trace,l)&&(0,_.IsFiltered)(e.action_trace,r,u,f,h,g)&&(0,k.IsSearched)(e.action_trace,y)&&(N=e.action_trace.receipt.act_digest,F.push(d.default.createElement(b.default,{key:e.global_action_seq,action_trace:e.action_trace,block_time:e.block_time,block_num:e.block_num,last_irreversible_block:t.actions.last_irreversible_block,head_block_num:t.chain.head_block_num,account_name:o,get_block_status:!1,trx_id:e.action_trace.trx_id,isDarkMode:i})))}),F.length>0?d.default.createElement("div",{className:"pb-0 "+(i?"bg-action-dark":"bg-actions")+"  ",style:{padding:2}},d.default.createElement(p.CSSTransitionGroup,{component:"div",transitionName:"example",transitionEnterTimeout:100,transitionLeaveTimeout:50},F),this.renderLoadMoreBtn(c,I)):d.default.createElement("div",null,d.default.createElement("div",{className:"pt-1 pb-0"},d.default.createElement("div",{className:"ftz-11 text-danger p-2"},'Oops! No action found! Do you want to "Fetch more" or change actions view settings',d.default.createElement("button",{type:"button",className:"btn btn-light btn-pill p-1","data-toggle":"collapse","data-target":"#collapseExample","aria-expanded":"false","aria-controls":"collapseExample",onClick:function(){s(!E)}},E?d.default.createElement("i",{className:"fa fa-chevron-circle-up fa-lg text-success"}):d.default.createElement(m.FontAwesomeIcon,{icon:"cog",className:"text-info",size:"lg"}))),this.renderLoadMoreBtn(c,I)))):d.default.createElement(A,null)}}]),t}(u.Component);t.default=(0,g.connect)(function(e){var t=e.myStore;return{eosActions:t.eosActions,antispam:t.antispam}},{setLiveActions:y.setLiveActions,setIsRefetch:y.setIsRefetch,setIsButtonLoading:y.setIsButtonLoading,setIsMore:y.setIsMore,setIsAntiSpam:y.setIsAntiSpam,setRefetchFunc:y.setRefetchFunc,setActionChecking:y.setActionChecking,setIsSettingOpen:y.setIsSettingOpen,setLimitValue:y.setLimitValue,setActionsLength:y.setActionsLength})((0,h.graphql)(f.default,{options:function(e){var t=e.account_name,n=e.eosActions;return{variables:{account_name:t,pos:-1,offset:n.islive?-20:0-n.limit},pollInterval:n.islive?5e3:0}}})(F))},102:function(e,t,n){var a,o,s;o=[e,t,n(0),n(43)],void 0===(s="function"==typeof(a=function(e,t,n,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var o=s(n);function s(e){return e&&e.__esModule?e:{default:e}}s(a);var i=function(){function e(e,t){for(var n=0;n<t.length;n++){var a=t[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}return function(t,n,a){return n&&e(t.prototype,n),a&&e(t,a),t}}(),c=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e};function l(e,t){var n={};for(var a in e)t.indexOf(a)>=0||Object.prototype.hasOwnProperty.call(e,a)&&(n[a]=e[a]);return n}var r={className:"react-tagsinput-input",placeholder:"Add a tag"},u=function(e){function t(){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);var e=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(t.__proto__||Object.getPrototypeOf(t)).call(this));return e.state={tag:"",isFocused:!1},e.focus=e.focus.bind(e),e.blur=e.blur.bind(e),e}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,o.default.Component),i(t,[{key:"_getTagDisplayValue",value:function(e){var t=this.props.tagDisplayProp;return t?e[t]:e}},{key:"_makeTag",value:function(e){var t,n,a,o=this.props.tagDisplayProp;return o?(a=e,(n=o)in(t={})?Object.defineProperty(t,n,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[n]=a,t):e}},{key:"_removeTag",value:function(e){var t=this.props.value.concat([]);if(e>-1&&e<t.length){var n=t.splice(e,1);this.props.onChange(t,n,[e])}}},{key:"_clearInput",value:function(){this.hasControlledInput()?this.props.onChangeInput(""):this.setState({tag:""})}},{key:"_tag",value:function(){return this.hasControlledInput()?this.props.inputValue:this.state.tag}},{key:"_addTags",value:function(e){var t=this,n=this.props,a=n.validationRegex,o=n.onChange,s=n.onValidationReject,i=n.onlyUnique,c=n.maxTags,l=n.value;i&&(e=(e=function(e){for(var t=[],n=0;n<e.length;n++)-1===t.indexOf(e[n])&&t.push(e[n]);return t}(e)).filter(function(e){return l.every(function(n){return t._getTagDisplayValue(n)!==t._getTagDisplayValue(e)})}));var r=e.filter(function(e){return!a.test(t._getTagDisplayValue(e))});if(e=(e=e.filter(function(e){return a.test(t._getTagDisplayValue(e))})).filter(function(e){var n=t._getTagDisplayValue(e);return"function"==typeof n.trim?n.trim().length>0:n}),c>=0){var u=Math.max(c-l.length,0);e=e.slice(0,u)}if(s&&r.length>0&&s(r),e.length>0){for(var d=l.concat(e),p=[],m=0;m<e.length;m++)p.push(l.length+m);return o(d,e,p),this._clearInput(),!0}return!(r.length>0||(this._clearInput(),1))}},{key:"_shouldPreventDefaultEventOnAdd",value:function(e,t,n){return!!e||13===n&&(this.props.preventSubmit||!this.props.preventSubmit&&!t)}},{key:"focus",value:function(){this.input&&"function"==typeof this.input.focus&&this.input.focus(),this.handleOnFocus()}},{key:"blur",value:function(){this.input&&"function"==typeof this.input.blur&&this.input.blur(),this.handleOnBlur()}},{key:"accept",value:function(){var e=this._tag();return""!==e&&(e=this._makeTag(e),this._addTags([e]))}},{key:"addTag",value:function(e){return this._addTags([e])}},{key:"clearInput",value:function(){this._clearInput()}},{key:"handlePaste",value:function(e){var t=this,n=this.props,a=n.addOnPaste,o=n.pasteSplit;if(a){e.preventDefault();var s=o(function(e){return window.clipboardData?window.clipboardData.getData("Text"):e.clipboardData?e.clipboardData.getData("text/plain"):""}(e)).map(function(e){return t._makeTag(e)});this._addTags(s)}}},{key:"handleKeyDown",value:function(e){if(!e.defaultPrevented){var t=this.props,n=t.value,a=t.removeKeys,o=t.addKeys,s=""===this._tag(),i=e.keyCode,c=e.key,l=-1!==o.indexOf(i)||-1!==o.indexOf(c),r=-1!==a.indexOf(i)||-1!==a.indexOf(c);if(l){var u=this.accept();this._shouldPreventDefaultEventOnAdd(u,s,i)&&e.preventDefault()}r&&n.length>0&&s&&(e.preventDefault(),this._removeTag(n.length-1))}}},{key:"handleClick",value:function(e){e.target===this.div&&this.focus()}},{key:"handleChange",value:function(e){var t=this.props.onChangeInput,n=this.props.inputProps.onChange,a=e.target.value;n&&n(e),this.hasControlledInput()?t(a):this.setState({tag:a})}},{key:"handleOnFocus",value:function(e){var t=this.props.inputProps.onFocus;t&&t(e),this.setState({isFocused:!0})}},{key:"handleOnBlur",value:function(e){var t=this.props.inputProps.onBlur;if(this.setState({isFocused:!1}),null!=e&&(t&&t(e),this.props.addOnBlur)){var n=this._makeTag(e.target.value);this._addTags([n])}}},{key:"handleRemove",value:function(e){this._removeTag(e)}},{key:"inputProps",value:function(){var e=this.props.inputProps,t=(e.onChange,e.onFocus,e.onBlur,l(e,["onChange","onFocus","onBlur"])),n=c({},r,t);return this.props.disabled&&(n.disabled=!0),n}},{key:"inputValue",value:function(e){return e.currentValue||e.inputValue||""}},{key:"hasControlledInput",value:function(){var e=this.props,t=e.inputValue;return"function"==typeof e.onChangeInput&&"string"==typeof t}},{key:"componentDidMount",value:function(){this.hasControlledInput()||this.setState({tag:this.inputValue(this.props)})}},{key:"componentWillReceiveProps",value:function(e){this.hasControlledInput()||this.inputValue(e)&&this.setState({tag:this.inputValue(e)})}},{key:"render",value:function(){var e=this,t=this.props,n=t.value,a=(t.onChange,t.tagProps),s=t.renderLayout,i=t.renderTag,r=t.renderInput,u=(t.addKeys,t.removeKeys,t.className),d=t.focusedClassName,p=(t.addOnBlur,t.addOnPaste,t.inputProps,t.pasteSplit,t.onlyUnique,t.maxTags,t.validationRegex,t.disabled);(t.tagDisplayProp,t.inputValue,t.onChangeInput,l(t,["value","onChange","tagProps","renderLayout","renderTag","renderInput","addKeys","removeKeys","className","focusedClassName","addOnBlur","addOnPaste","inputProps","pasteSplit","onlyUnique","maxTags","validationRegex","disabled","tagDisplayProp","inputValue","onChangeInput"]),this.state.isFocused)&&(u+=" "+d);var m=n.map(function(t,n){return i(c({key:n,tag:t,onRemove:e.handleRemove.bind(e),disabled:p,getTagDisplayValue:e._getTagDisplayValue.bind(e)},a))}),f=r(c({ref:function(t){e.input=t},value:this._tag(),onPaste:this.handlePaste.bind(this),onKeyDown:this.handleKeyDown.bind(this),onChange:this.handleChange.bind(this),onFocus:this.handleOnFocus.bind(this),onBlur:this.handleOnBlur.bind(this),addTag:this.addTag.bind(this)},this.inputProps()));return o.default.createElement("div",{ref:function(t){e.div=t},onClick:this.handleClick.bind(this),className:u},s(m,f))}}]),t}();u.defaultProps={className:"react-tagsinput",focusedClassName:"react-tagsinput--focused",addKeys:[9,13],addOnBlur:!1,addOnPaste:!1,inputProps:{},removeKeys:[8],renderInput:function(e){e.addTag;var t=l(e,["addTag"]),n=t.onChange,a=t.value,s=l(t,["onChange","value"]);return o.default.createElement("input",c({type:"text",onChange:n,value:a},s))},renderTag:function(e){var t=e.tag,n=e.key,a=e.disabled,s=e.onRemove,i=e.classNameRemove,r=e.getTagDisplayValue,u=l(e,["tag","key","disabled","onRemove","classNameRemove","getTagDisplayValue"]);return o.default.createElement("span",c({key:n},u),r(t),!a&&o.default.createElement("a",{className:i,onClick:function(e){return s(n)}}))},renderLayout:function(e,t){return o.default.createElement("span",null,e,t)},pasteSplit:function(e){return e.split(" ").map(function(e){return e.trim()})},tagProps:{className:"react-tagsinput-tag",classNameRemove:"react-tagsinput-remove"},onlyUnique:!1,maxTags:-1,validationRegex:/.*/,disabled:!1,tagDisplayProp:null,preventSubmit:!0},t.default=u,e.exports=t.default})?a.apply(t,o):a)||(e.exports=s)},103:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a=r(n(0)),o=r(n(102)),s=n(16),i=n(2),c=n(9),l=n(34);function r(e){return e&&e.__esModule?e:{default:e}}t.default=(0,c.connect)(function(e){return{eosActions:e.myStore.eosActions}},{setLiveActions:l.setLiveActions,setIsRefetch:l.setIsRefetch,setIsButtonLoading:l.setIsButtonLoading,setIsMore:l.setIsMore,setIsAntiSpam:l.setIsAntiSpam,setLimitValue:l.setLimitValue,setFilterOthers:l.setFilterOthers,setFilterResources:l.setFilterResources,setFilterSendReceieEOS:l.setFilterSendReceieEOS,setFilterSendReceieTokens:l.setFilterSendReceieTokens,setFilterSmartContract:l.setFilterSmartContract,setMemoTag:l.setMemoTag,setIsSettingOpen:l.setIsSettingOpen})(function(e){var t=e.eosActions,n=e.account_name,c=e.setLiveActions,l=e.setIsRefetch,r=(e.setIsButtonLoading,e.setIsMore),u=e.setIsAntiSpam,d=e.setLimitValue,p=e.setFilterOthers,m=e.setFilterResources,f=e.setFilterSendReceieEOS,h=e.setFilterSendReceieTokens,g=e.setFilterSmartContract,b=e.setMemoTag,v=e.setIsSettingOpen,_=e.isDarkMode,k=t.refetch,y=t.isAntiSpamed,E=t.islive,N=t.limit,x=t.isrefetch,S=t.isFilterOthers,I=t.isFilterSmartContract,O=t.isFilterResources,A=t.isFilterSendReceiveTokens,F=t.isFilterSendReceiveEOS,w=t.memoTags,C=t.isSettingOpen;return a.default.createElement("div",null,a.default.createElement("div",{className:"card-header row m-0 "+(_?"bg-dark":"bg-white")+"  "},a.default.createElement("div",{className:"header-block pl-1 col stat-col"},a.default.createElement(i.FontAwesomeIcon,{icon:"list-alt",className:"mr-2 text-info fa-lg"}),a.default.createElement("h1",{className:"title text-info"},"Recent ",a.default.createElement("span",{className:"ml-1 mr-1"},(0,s.renderAccountLink)(n))," actions")),a.default.createElement("div",{className:"col-auto pt-atb pr-1"},function(e,t,n,o,s,c){return E?null:x?void 0:a.default.createElement("button",{type:"button",className:"btn "+(c?"bg-dark":"btn-white")+"  btn-pill p-1",onClick:function(){t(!0),e().then(function(){t(!1),n(!0)})}},a.default.createElement(i.FontAwesomeIcon,{icon:"sync-alt",className:"text-info",size:"lg"}))}(k,l,r,0,0,_),a.default.createElement("button",{type:"button",className:"btn "+(_?"btn-dark":"btn-white")+"  btn-pill p-1","data-toggle":"collapse","data-target":"#collapseExample","aria-expanded":"false","aria-controls":"collapseExample",onClick:function(){v(!C)}},C?a.default.createElement("i",{className:"fa fa-chevron-circle-up fa-lg text-success"}):a.default.createElement(i.FontAwesomeIcon,{icon:"cog",className:"text-info",size:"lg"})))),a.default.createElement("div",{className:"collapse shadow-sm",id:"collapseExample"},a.default.createElement("div",{className:"card card-body pt-2 pb-0 pd-action-setting"},a.default.createElement("div",{className:"row  "},a.default.createElement("div",{className:"col-6 font-weight-normal"},a.default.createElement("fieldset",null,a.default.createElement("strong",{className:"text-muted d-block mb-2 h6"},"Config"),a.default.createElement("div",{className:"custom-control  custom-toggle mb-3"},a.default.createElement("input",{type:"checkbox",id:"antiSpam",name:"antiSpam",className:"custom-control-input",checked:y,onChange:function(){u(!y)}}),a.default.createElement("label",{className:"custom-control-label font-weight-normal",htmlFor:"antiSpam"},"Anti spam")),a.default.createElement("div",{className:"custom-control custom-toggle  mb-3"},a.default.createElement("input",{type:"checkbox",id:"liveAction",name:"liveAction",className:"custom-control-input",checked:E,onChange:function(){c(!E)}}),a.default.createElement("label",{className:"custom-control-label font-weight-normal",htmlFor:"liveAction"},"Live Actions")),a.default.createElement("label",{className:"font-weight-normal"},a.default.createElement("select",{id:"inputLimit",className:"form-control-sm mr-2",value:N,onChange:function(e){d(e.target.value)}},a.default.createElement("option",{value:20,defaultChecked:!0},"20"),a.default.createElement("option",{value:50},"50"),a.default.createElement("option",{value:100},"100"),a.default.createElement("option",{value:500},"500")),"Offset"))),a.default.createElement("div",{className:"col-6 ftz-12 pl-0"},a.default.createElement("strong",{className:"text-muted d-block mb-2 h6"},"Show/Filter"),a.default.createElement("fieldset",null,a.default.createElement("div",{className:"custom-control custom-checkbox mb-1 pt-actgrp"},a.default.createElement("input",{type:"checkbox",className:"custom-control-input",id:"ckxSendReceiveEOS",checked:F,onChange:function(e){f(e.target.checked)}}),a.default.createElement("label",{className:"custom-control-label font-weight-normal  text-success",htmlFor:"ckxSendReceiveEOS"},"Send/Receive EOS")),a.default.createElement("div",{className:"custom-control custom-checkbox mb-1 pt-actgrp"},a.default.createElement("input",{type:"checkbox",className:"custom-control-input",id:"cbxSendReceiveToken",checked:A,onChange:function(e){h(e.target.checked)}}),a.default.createElement("label",{className:"custom-control-label font-weight-normal  text-info",htmlFor:"cbxSendReceiveToken"},"Send/Receive tokens")),a.default.createElement("div",{className:"custom-control custom-checkbox mb-1 pt-actgrp"},a.default.createElement("input",{type:"checkbox",className:"custom-control-input",id:"cbxResources",checked:O,onChange:function(e){m(e.target.checked)}}),a.default.createElement("label",{className:"custom-control-label font-weight-normal text-primary",htmlFor:"cbxResources"},"Account, Resources, Contract")),a.default.createElement("div",{className:"custom-control custom-checkbox mb-1 pt-actgrp"},a.default.createElement("input",{type:"checkbox",className:"custom-control-input",id:"cbxSmartContract",checked:I,onChange:function(e){g(e.target.checked)}}),a.default.createElement("label",{className:"custom-control-label font-weight-normal text-danger",htmlFor:"cbxSmartContract"},"Vote,Producers")),a.default.createElement("div",{className:"custom-control custom-checkbox mb-1 pt-actgrp"},a.default.createElement("input",{type:"checkbox",className:"custom-control-input",id:"cbxOthers",checked:S,onChange:function(e){p(e.target.checked)}}),a.default.createElement("label",{className:"custom-control-label font-weight-normal text-warning",htmlFor:"cbxOthers"},"Others")))),a.default.createElement("div",{className:"col-12 ftz-12"},a.default.createElement("strong",{className:"text-muted d-block mb-2 h6"},"Search"),a.default.createElement("fieldset",null,a.default.createElement(o.default,{value:w,onChange:function(e){return b(e)},className:"input-tag-form-control rounded border border-info",inputProps:{className:"react-tagsinput-input",placeholder:"Memo/Receiver/Account/Actname"},tagProps:{className:"react-tagsinput-tag badge-success",classNameRemove:"react-tagsinput-remove"}})))))))})},65:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.IsSearched=function(e,t){if(0==t.length)return!0;for(var n=0;n<t.length;n++){if(e.act.data&&e.act.data.memo&&"string"==typeof e.act.data.memo&&e.act.data.memo.includes(t[n]))return!0;if(e.receipt.receiver.includes(t[n])||e.act.account.includes(t[n])||e.act.name.includes(t[n]))return!0}return!1}},66:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.IsFiltered=function(e,t,n,a,o,s){if(e.act)switch(e.act.name){case"transfer":switch(e.act.account){case"eosio.token":return s;default:return o}case"delegatebw":case"undelegatebw":case"buyram":case"buyrambytes":case"sellram":case"newaccount":return a;case"voteproducer":return n;case"updateauth":case"bidname":case"setabi":case"setcode":case"refund":return a;case"claimrewards":return n;case"canceldelay":default:return t}return!1}},67:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.IsSpam=void 0;var a=n(74);t.IsSpam=function(e,t){var n=!1;return t&&e.act&&(a.AntiSpams.black_account.map(function(t){return t==e.act.account&&(n=!0),n}),a.AntiSpams.black_list.map(function(t){if(t.act_account==e.act.account&&t.act_name==e.act.name)return n=!0}),"transfer"==e.act.name&&"eosio.token"==e.act.account&&e.act.data.quantity&&Number(e.act.data.quantity.split(" ")[0])<=a.AntiSpams.min_eos_ammount)?n=!0:n}},69:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a=i(n(0)),o=i(n(103)),s=i(n(101));function i(e){return e&&e.__esModule?e:{default:e}}i(n(99)),t.default=function(e){var t=e.account_name,n=e.showRefetch,i=e.isLive,c=e.isDarkMode,l=e.defaultLimit;return a.default.createElement("div",{className:"card mb-1 pb-1 "+(c?"bg-dark":"bg-white")+" ","data-exclude":"xs"},a.default.createElement(o.default,{account_name:t,isDarkMode:c,defaultLimit:l}),a.default.createElement(s.default,{account_name:t,showRefetch:n,isLive:i,isDarkMode:c}))}},98:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a=(0,s(n(13)).default)(["\n  query get_actions_mongo($account_name: String!, $skip: Int, $limit: Int) {\n    mongo_actions(account_name: $account_name, skip: $skip, limit: $limit) {\n      actions {\n        block_num\n        block_time\n        trx_id\n        receipt {\n          receiver\n          act_digest\n          global_sequence\n          recv_sequence\n        }\n        act {\n          account\n          name\n          authorization {\n            actor\n            permission\n          }\n          data\n        }\n      }\n    }\n    chain {\n      head_block_num\n      last_irreversible_block_num\n    }\n  }\n"],["\n  query get_actions_mongo($account_name: String!, $skip: Int, $limit: Int) {\n    mongo_actions(account_name: $account_name, skip: $skip, limit: $limit) {\n      actions {\n        block_num\n        block_time\n        trx_id\n        receipt {\n          receiver\n          act_digest\n          global_sequence\n          recv_sequence\n        }\n        act {\n          account\n          name\n          authorization {\n            actor\n            permission\n          }\n          data\n        }\n      }\n    }\n    chain {\n      head_block_num\n      last_irreversible_block_num\n    }\n  }\n"]),o=s(n(12));function s(e){return e&&e.__esModule?e:{default:e}}t.default=(0,o.default)(a)},99:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a=E(n(50)),o=E(n(59)),s=E(n(3)),i=E(n(7)),c=E(n(6)),l=E(n(5)),r=E(n(4)),u=n(0),d=E(u),p=n(27),m=n(2),f=E(n(98)),h=n(10),g=n(9),b=E(n(49)),v=n(67),_=n(66),k=n(65),y=n(34);function E(e){return e&&e.__esModule?e:{default:e}}var N="",x=function(){return d.default.createElement("div",null,d.default.createElement("div",{className:"card-block pt-1 pb-0 pr-1 pl-1 "},d.default.createElement("div",{className:"text-center align-middle pd-vi"},d.default.createElement(m.FontAwesomeIcon,{icon:"spinner",spin:!0,className:"text-info fa-2x"}))))},S=function(e){function t(){return(0,i.default)(this,t),(0,l.default)(this,(t.__proto__||(0,s.default)(t)).apply(this,arguments))}return(0,r.default)(t,e),(0,c.default)(t,[{key:"renderLoadMoreBtn",value:function(e){var t=this;return this.props.eosActions.islive?d.default.createElement("button",{type:"button",className:"btn btn-outline-info text-light w-100",disabled:!0},"Fetch more"):this.props.eosActions.ismore?this.props.eosActions.isbuttonloading?d.default.createElement("div",{className:"w-100 text-center"},d.default.createElement(m.FontAwesomeIcon,{icon:"spinner",spin:!0,className:"text-info fa-2x"})):d.default.createElement("button",{type:"button",className:"btn btn-outline-info w-100",onClick:function(){t.props.setIsButtonLoading(!0),e({variables:{skip:t.props.eosActions.actionsLength,limit:Number(t.props.eosActions.limit)},updateQuery:function(e,n){var s=n.fetchMoreResult;return s?(t.props.setActionsLength(Number(t.props.eosActions.actionsLength)+Number(t.props.eosActions.limit)),t.props.setIsButtonLoading(!1),0==s.mongo_actions.actions.length?t.props.setIsMore(!1):t.props.setIsMore(!0),(0,o.default)({},{chain:s.chain,mongo_actions:{actions:[].concat((0,a.default)(e.mongo_actions.actions),(0,a.default)(s.mongo_actions.actions)),__typename:"MongoActionsType"}})):(t.props.setIsButtonLoading(!1),e)}}).catch(function(e){return t.props.setIsButtonLoading(!1),!0})}},"Fetch more"):d.default.createElement("button",{type:"button",className:"btn btn-outline-info text-light w-100",disabled:!0},"Fetch more")}},{key:"componentDidMount",value:function(){this.props.setRefetchFunc(this.props.data.refetch)}},{key:"componentWillMount",value:function(){this.props.setLiveActions(this.props.isLive),this.props.setIsSettingOpen(!1),this.props.setActionsLength(Number(this.props.eosActions.actionsLength)+Number(this.props.eosActions.limit))}},{key:"render",value:function(){if(this.props.data.loading)return d.default.createElement(x,null);var e=this.props,t=e.data,n=e.eosActions,a=e.account_name,o=e.setIsSettingOpen,s=e.isDarkMode,i=this.props.data.fetchMore,c=n.isAntiSpamed,l=n.isFilterOthers,r=n.isFilterSmartContract,u=n.isFilterResources,f=n.isFilterSendReceiveTokens,h=n.isFilterSendReceiveEOS,g=n.memoTags,y=n.isSettingOpen,E=n.actionsLength;if(t.error)return d.default.createElement(x,null);var S=[];return t&&t.mongo_actions&&t.chain?(N="",t.mongo_actions.actions.map(function(e){e.receipt.act_digest!==N&&!(0,v.IsSpam)(e,c)&&(0,_.IsFiltered)(e,l,r,u,f,h)&&(0,k.IsSearched)(e,g)&&(N=e.receipt.act_digest,S.push(d.default.createElement(b.default,{key:e.receipt.global_sequence,action_trace:e,block_time:e.block_time,block_num:e.block_num,last_irreversible_block:t.chain.last_irreversible_block,head_block_num:t.chain.head_block_num,account_name:a,get_block_status:!1,trx_id:e.trx_id,isDarkMode:s})))}),S.length>0?d.default.createElement("div",{className:"pb-0 "+(s?"bg-action-dark":"bg-actions")+"  ",style:{padding:2}},d.default.createElement(p.CSSTransitionGroup,{component:"div",transitionName:"example",transitionEnterTimeout:100,transitionLeaveTimeout:50},S),this.renderLoadMoreBtn(i)):d.default.createElement("div",null,d.default.createElement("div",{className:"pt-1 pb-0"},d.default.createElement("div",{className:"ftz-11 text-danger p-2"},'Oops! No action found! Do you want to "Fetch more" or change actions view settings',d.default.createElement("button",{type:"button",className:"btn btn-light btn-pill p-1","data-toggle":"collapse","data-target":"#collapseExample","aria-expanded":"false","aria-controls":"collapseExample",onClick:function(){o(!y)}},y?d.default.createElement("i",{className:"fa fa-chevron-circle-up fa-lg text-success"}):d.default.createElement(m.FontAwesomeIcon,{icon:"cog",className:"text-info",size:"lg"}))),this.renderLoadMoreBtn(i,E)))):d.default.createElement(x,null)}}]),t}(u.Component);t.default=(0,g.connect)(function(e){return{eosActions:e.eosActions,antispam:e.antispam}},{setLiveActions:y.setLiveActions,setIsRefetch:y.setIsRefetch,setIsButtonLoading:y.setIsButtonLoading,setIsMore:y.setIsMore,setIsAntiSpam:y.setIsAntiSpam,setRefetchFunc:y.setRefetchFunc,setActionChecking:y.setActionChecking,setIsSettingOpen:y.setIsSettingOpen,setActionsLength:y.setActionsLength})((0,h.graphql)(f.default,{options:function(e){var t=e.account_name,n=e.eosActions;return{variables:{account_name:t,skip:0,limit:n.islive?25:Number(n.limit)},pollInterval:n.islive?5e3:0}}})(S))}}]);