(window.webpackJsonp=window.webpackJsonp||[]).push([[45],{1393:function(e,a,t){"use strict";t.d(a,"a",function(){return x});var n=t(1405),l=t.n(n),r=t(55),o=t.n(r),s=t(254),p=t.n(s),c=t(1390),i=t.n(c),u=t(2),m=t.n(u),d=t(24),g=t(5),f=t(13),E=t(14),h=t(20),v=t(19),_=t(21),b=t(0),y=t.n(b),O=t(3),w=t(16);function M(e,a){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);a&&(n=n.filter(function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable})),t.push.apply(t,n)}return t}function j(e){for(var a=1;a<arguments.length;a++){var t=null!=arguments[a]?arguments[a]:{};a%2?M(t,!0).forEach(function(a){Object(d.a)(e,a,t[a])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):M(t).forEach(function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(t,a))})}return e}var x=function(e){function a(e){var t;return Object(f.a)(this,a),(t=Object(h.a)(this,Object(v.a)(a).call(this,e))).loadDatas=Object(g.a)(m.a.mark(function e(){var a,n,l,r,o=arguments;return m.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return a=o.length>0&&void 0!==o[0]?o[0]:1,n=o.length>1&&void 0!==o[1]?o[1]:40,l=t.state.filter,e.next=5,w.a.getTokens(j({sort:"rank",limit:n,start:(a-1)*n},l));case 5:return r=e.sent,e.abrupt("return",r);case 7:case"end":return e.stop()}},e)})),t.handleTableChange=function(e,a,n){var l=j({},t.state.pagination);l.current=e.current,t.setState({pagination:l}),t.fetch(j({pageSize:e.pageSize,page:e.current,sortField:n.field,sortOrder:n.order},a))},t.fetch=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};t.setState({loading:!0}),t.props.onPageChange?(t.props.onPageChange(e.page,e.pageSize),t.setState({loading:!1})):t.setState({loading:!1})},t.onInputChange=function(e){t.setState({searchText:e.target.value})},t.onReset=function(){t.setState({searchText:""},function(){t.onSearch()})},t.onSearch=function(){var e=t.props.tableData,a=t.state.searchText,n=new RegExp(a,"gi");t.setState({filterDropdownVisible:!1,filtered:!!a,data:e.map(function(e){return e.name.match(n)?j({},e,{name:y.a.createElement("span",null," ",e.name.split(new RegExp("(?<=".concat(a,")|(?=").concat(a,")"),"i")).map(function(e,t){return e.toLowerCase()===a.toLowerCase()?y.a.createElement("span",{key:t,className:"highlight"}," ",e," "):e})," ")}):null}).filter(function(e){return!!e})})},t.setColumn=function(e){function a(e){return function(a,t){return a[e]>t[e]?1:a[e]<t[e]?-1:0}}var n={filterDropdown:y.a.createElement("div",{className:"custom-filter-dropdown"},y.a.createElement(i.a,{ref:function(e){return t.searchInput=e},placeholder:"Search name",value:t.state.searchText,onChange:t.onInputChange,onPressEnter:t.onSearch})," ",y.a.createElement(p.a,{type:"primary",onClick:t.onSearch}," ",Object(O.c)("search")," ")," ",y.a.createElement(p.a,{className:"btn-secondary ml-1",onClick:t.onReset}," ",Object(O.c)("reset")," ")," "),filterIcon:y.a.createElement(o.a,{type:"filter",style:{color:t.state.filtered?"#108ee9":"#aaa"}}),filterDropdownVisible:t.state.filterDropdownVisible,onFilterDropdownVisibleChange:function(e){t.setState({filterDropdownVisible:e},function(){t.searchInput&&t.searchInput.focus()})}},l=[],r=!0,s=!1,c=void 0;try{for(var u,m=e[Symbol.iterator]();!(r=(u=m.next()).done);r=!0){var d=u.value;if(d.sorter&&!d.filterDropdown){var g={sorter:a(d.key)};l.push(j({},d,{},g))}else if(!d.sorter&&d.filterDropdown){var f=j({},n);l.push(j({},d,{},f))}else if(d.sorter&&d.filterDropdown){var E=j({sorter:a(d.key)},n);l.push(j({},d,{},E))}else l.push(d)}}catch(h){s=!0,c=h}finally{try{r||null==m.return||m.return()}finally{if(s)throw c}}return l},t.state={filterDropdownVisible:!1,data:[],searchText:"",filtered:!1,pagination:{showQuickJumper:!0,position:e.position||"both",showSizeChanger:!0,defaultPageSize:20,current:e.current||1},loading:!1},t}return Object(_.a)(a,e),Object(E.a)(a,[{key:"componentDidMount",value:function(){}},{key:"componentDidUpdate",value:function(e){var a=this.props.current,t=this.state.pagination;e.current!=a&&this.setState({pagination:j({},t,{current:a})})}},{key:"render",value:function(){var e=this.props,a=e.total,t=e.loading,n=e.data,r=e.column,o=e.bordered,s=e.pagination,p=void 0===s||s,c=e.scroll,i=e.Footer,u=e.locale,m=e.addr,d=e.transfers,g=(e.contractAddress,e.isPaddingTop,this.setColumn(r)),f=p?j({total:a},this.state.pagination):p;return y.a.createElement("div",null," ",m?y.a.createElement("div",{className:"card table_pos table_pos_addr "+(0==n.length?"table_pos_addr_data":"")+("address"==d?" transfer-mt-100":" transfer-pt-100")},y.a.createElement(l.a,{bordered:o,columns:g,rowKey:function(e,a){return a},dataSource:n,locale:u,scroll:c,footer:i,pagination:f,loading:t,onChange:this.handleTableChange})," "):y.a.createElement("div",{className:"card table_pos"},y.a.createElement(l.a,{bordered:o,columns:g,footer:i,rowKey:function(e,a){return a},dataSource:n,locale:u,scroll:c,pagination:f,loading:t,onChange:this.handleTableChange})," ")," ")}}]),a}(b.Component)},2022:function(e,a,t){(function(e){!function(e){"use strict";e.exports.is_uri=t,e.exports.is_http_uri=n,e.exports.is_https_uri=l,e.exports.is_web_uri=r,e.exports.isUri=t,e.exports.isHttpUri=n,e.exports.isHttpsUri=l,e.exports.isWebUri=r;var a=function(e){return e.match(/(?:([^:\/?#]+):)?(?:\/\/([^\/?#]*))?([^?#]*)(?:\?([^#]*))?(?:#(.*))?/)};function t(e){if(e&&!/[^a-z0-9\:\/\?\#\[\]\@\!\$\&\'\(\)\*\+\,\;\=\.\-\_\~\%]/i.test(e)&&!/%[^0-9a-f]/i.test(e)&&!/%[0-9a-f](:?[^0-9a-f]|$)/i.test(e)){var t,n,l,r,o,s="",p="";if(s=(t=a(e))[1],n=t[2],l=t[3],r=t[4],o=t[5],s&&s.length&&l.length>=0){if(n&&n.length){if(0!==l.length&&!/^\//.test(l))return}else if(/^\/\//.test(l))return;if(/^[a-z][a-z0-9\+\-\.]*$/.test(s.toLowerCase()))return p+=s+":",n&&n.length&&(p+="//"+n),p+=l,r&&r.length&&(p+="?"+r),o&&o.length&&(p+="#"+o),p}}}function n(e,n){if(t(e)){var l,r,o,s,p="",c="",i="",u="";if(p=(l=a(e))[1],c=l[2],r=l[3],o=l[4],s=l[5],p){if(n){if("https"!=p.toLowerCase())return}else if("http"!=p.toLowerCase())return;if(c)return/:(\d+)$/.test(c)&&(i=c.match(/:(\d+)$/)[0],c=c.replace(/:\d+$/,"")),u+=p+":",u+="//"+c,i&&(u+=i),u+=r,o&&o.length&&(u+="?"+o),s&&s.length&&(u+="#"+s),u}}}function l(e){return n(e,!0)}function r(e){return n(e)||l(e)}}(e)}).call(this,t(102)(e))},2642:function(e,a,t){"use strict";var n=t(2),l=t.n(n),r=t(5),o=t(13),s=t(14),p=t(20),c=t(19),i=t(21),u=t(0),m=t.n(u),d=t(31),g=t(3),f=t(16),E=t(8),h=t(51),v=t.n(h),_=t(6),b=t(10),y=t(63),O=t(2022).isWebUri,w=function(e){function a(){var e;return Object(o.a)(this,a),(e=Object(p.a)(this,Object(c.a)(a).call(this))).isValid=function(){return e.state.check&&e.isValidUrl()},e.isValidUrl=function(){var a=e.state.url;return a.length>0&&O(a)},e.doApply=Object(r.a)(l.a.mark(function a(){var t,n,r,o,s,p,c,i,u,d,E,h,b,O,w,M,j;return l.a.wrap(function(a){for(;;)switch(a.prev=a.next){case 0:if(n=e.props,r=n.account,o=n.isTronLink,s=e.state.url,e.setState({loading:!0}),!_.v){a.next=23;break}if(1!==o){a.next=16;break}return"ACCOUNT_LEDGER"===e.props.walletType.type?p=e.props.tronWeb():"ACCOUNT_TRONLINK"===e.props.walletType.type&&(p=r.tronWeb),a.next=8,p.transactionBuilder.applyForSR(p.defaultAddress.hex,s);case 8:return c=a.sent,a.next=11,Object(y.c)(c,p);case 11:i=a.sent,u=i.result,t=u,a.next=21;break;case 16:return a.next=18,f.a.applyForDelegate(r.address,s)(r.key);case 18:d=a.sent,E=d.success,t=E;case 21:a.next=42;break;case 23:if(1!==o){a.next=34;break}return a.next=26,r.sunWeb.sidechain.transactionBuilder.applyForSR(r.sunWeb.sidechain.defaultAddress.hex,s).catch(function(e){return console.log(e)});case 26:return h=a.sent,a.next=29,Object(y.e)(h,r.sunWeb);case 29:b=a.sent,O=b.result,t=O,a.next=42;break;case 34:return a.next=36,r.sunWeb.sidechain.transactionBuilder.applyForSR(r.sunWeb.sidechain.defaultAddress.hex,s).catch(function(e){return console.log(e)});case 36:return w=a.sent,a.next=39,Object(y.e)(w,r.sunWeb);case 39:M=a.sent,j=M.result,t=j;case 42:e.setState({loading:!1}),t?e.confirm():e.setState({modal:m.a.createElement(v.a,{warning:!0,title:Object(g.c)("error"),onConfirm:e.hideModal},Object(g.c)("apply_representative_error_message_0")," ",m.a.createElement("br",null),Object(g.c)("apply_representative_error_message_1"))});case 44:case"end":return a.stop()}},a)})),e.hideModal=function(){e.setState({modal:null})},e.confirm=function(){var a=e.props.onConfirm;a&&a()},e.cancel=function(){var a=e.props.onCancel;a&&a()},e.state={url:"",check:!1,applyResponse:null,loading:!1,modal:null},e}return Object(i.a)(a,e),Object(s.a)(a,[{key:"render",value:function(){var e=this,a=this.state,t=a.check,n=a.loading,l=a.modal,r=a.url,o=this.props.intl;return l||m.a.createElement(E.c,{isOpen:!0,toggle:this.cancel,fade:!1,size:"lg",className:"modal-dialog-centered apply-super-modal"},m.a.createElement(E.f,{className:"text-center _applyHeader",toggle:this.cancel},Object(g.c)("Super Representatives")),m.a.createElement(E.d,null,m.a.createElement("p",{className:"body-text text-left"},Object(g.b)("proposal_apply_super_desc")),m.a.createElement("hr",null),m.a.createElement("p",{className:"text-left"},m.a.createElement("label",{className:"_applyTitle"},Object(g.c)("proposal_apply_super_input_website")),m.a.createElement("input",{className:"form-control text-left "+(t&&!this.isValidUrl()?" is-invalid":""),type:"text",placeholder:o.formatMessage({id:"proposal_apply_super_input_website_ph"}),style:{borderRadius:"0px",background:"#F3F3F3",border:"1px solid #EEEEEE "},value:r,onChange:function(a){return e.setState({url:a.target.value})}}),m.a.createElement("div",{className:"invalid-feedback text-left text-danger"},Object(g.c)("invalid_url"))),m.a.createElement("div",{className:"text-center"},m.a.createElement("div",{className:"form-check"},m.a.createElement("label",{className:"form-check-label _apply"},m.a.createElement("input",{type:"checkbox",style:{verticalAlign:"1px",marginRight:"9px"},checked:t,onChange:function(a){return e.setState({check:a.target.checked})}}),Object(g.c)("understand_tron_sr_message_0"),m.a.createElement(b.c,{value:_.V}),"TRX",Object(g.b)("understand_tron_sr_message_1")))),m.a.createElement("div",{className:"pt-3"},m.a.createElement("p",{className:"text-center"},m.a.createElement("button",{disabled:!this.isValid()||n,className:"btn btn-success",style:{width:"220px",background:"#69C265",fontSize:"14px"},onClick:this.doApply},Object(g.c)("submit"))))))}}]),a}(u.Component);a.a=Object(d.connect)(function(e){return{account:e.app.account,walletType:e.app.wallet}},{})(Object(b.h)(w))},3500:function(e,a,t){"use strict";t.r(a);var n=t(1405),l=t.n(n),r=t(252),o=t.n(r),s=t(2),p=t.n(s),c=t(5),i=t(24),u=t(13),m=t(14),d=t(20),g=t(19),f=t(21),E=t(0),h=t.n(E),v=t(31),_=t(3),b=t(16),y=t(64),O=t(1354),w=(t(1393),t(10)),M=t(87),j=t(23),x=t(253),S=t(6),T=t(51),C=t.n(T),k=t(8),N=t(2642),A=t(11),V=t.n(A),P=t(63);function K(e,a){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);a&&(n=n.filter(function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable})),t.push.apply(t,n)}return t}function D(e){for(var a=1;a<arguments.length;a++){var t=null!=arguments[a]?arguments[a]:{};a%2?K(t,!0).forEach(function(a){Object(i.a)(e,a,t[a])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):K(t).forEach(function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(t,a))})}return e}var R=function(e){function a(){var e;return Object(u.a)(this,a),(e=Object(d.a)(this,Object(g.a)(a).call(this))).onChange=function(a,t){e.load(a,t)},e.handleTableChange=function(a,t,n){var l=D({},e.state.pagination);l.current=a.current,l.pageSize=a.pageSize,e.setState({pagination:l},function(){return e.load(l.current,l.pageSize)})},e.load=Object(c.a)(p.a.mark(function a(){var t,n,l,r,o,s,c,i,u,m,d,g,f,E=arguments;return p.a.wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return t=E.length>0&&void 0!==E[0]?E[0]:1,n=E.length>1&&void 0!==E[1]?E[1]:20,e.setState({loading:!0}),l=e.props.account,a.next=6,b.a.getProposalList({sort:"-number",limit:n,start:(t-1)*n,address:l.address||""});case 6:if(r=a.sent,o=r.proposal,s=r.total,c=["getMaintenanceTimeInterval","getAccountUpgradeCost","getCreateAccountFee","getTransactionFee","getAssetIssueFee","getWitnessPayPerBlock","getWitnessStandbyAllowance","getCreateNewAccountFeeInSystemContract","getCreateNewAccountBandwidthRate","getAllowCreationOfContracts","getRemoveThePowerOfTheGr","getEnergyFee","getExchangeCreateFee","getMaxCpuTimeOfOneTx","getAllowUpdateAccountName","getAllowSameTokenName","getAllowDelegateResource","getTotalEnergyLimit","getAllowTvmTransferTrc10","getTotalEnergyLimitNew","getAllowMultiSign","getAllowAdaptiveEnergy","getUpdateAccountPermissionFee","getMultiSignFee","getAllowProtoFilterNum","","getAllowTvmConstantinople","getAllowShieldedTransaction","getShieldedTransactionFee","getAdaptiveResourceLimitMultiplier","getChangeDelegation","getWitness127PayPerBlock","getAllowTvmSolidity059","getAdaptiveResourceLimitTargetRatio"],i=[{id:"1000000",key:"getChargingSwitch"},{id:"1000001",key:"getSideChainGateWayList"},{id:"1000003",key:"getProposalExpireTime"},{id:"1000004",key:"getVoteWitnessSwitch"},{id:"1000007",key:"getFundInjectAddress"},{id:"1000008",key:"getFundDistributeEnableSwitch"},{id:"1000009",key:"getDayToSustainByFund"},{id:"1000010",key:"getPercentToPayWitness"}],S.v)for(u in o)for(m in o[u].paramters)o[u].paramters[m].proposalKey=c[o[u].paramters[m].key],o[u].paramters[m].proposalVal=o[u].paramters[m].value;else for(d in o)for(g in o[d].paramters)for(f in i)i[f].id==o[d].paramters[g].key&&(o[d].paramters[g].proposalKey=i[f].key,o[d].paramters[g].proposalVal=o[d].paramters[g].value);e.setState({loading:!1,dataSource:o,total:s,page:t,pagination:D({},e.state.pagination,{total:s})});case 13:case"end":return a.stop()}},a)})),e.isLoggedIn=function(a){var t=e.props,n=t.account,l=t.intl;return n.isLoggedIn||1!=a&&e.setState({modal:h.a.createElement(C.a,{warning:!0,title:Object(_.c)("proposal_not_sign_in"),confirmBtnText:l.formatMessage({id:"confirm"}),confirmBtnBsStyle:"danger",onConfirm:function(){return e.setState({modal:null})},style:{marginLeft:"-240px",marginTop:"-195px"}})}),n.isLoggedIn},e.hideModal=function(){e.setState({modal:null,balanceTip:!1,isAction:!1})},e.applySuperModal=function(){e.props.intl;var a=e.state.balanceTip;e.setState({modal:h.a.createElement(k.c,{isOpen:!0,toggle:e.hideModal,className:"committee-modal modal-dialog-centered",style:{width:"460px"}},h.a.createElement(k.f,{toggle:e.hideModal,className:""}),h.a.createElement(k.d,null,h.a.createElement("div",{style:{color:"#333",padding:"10px 0 50px",fontSize:"16px",textAlign:"center"}},Object(_.c)("proposal_apply_super")),h.a.createElement("div",{style:{display:"flex",justifyContent:"center",flexDirection:"column",alignItems:"center"}},h.a.createElement("div",{className:a?"balance-tip show":"balance-tip"},Object(_.c)("proposal_balance_not_enough")),h.a.createElement("div",{style:{width:"220px",height:"38px",lineHeight:"38px",textAlign:"center",background:"#69C265",color:"#fff",cursor:"pointer"},onClick:function(){e.showApplyForDelegate()}},Object(_.c)("proposal_apply_super_btn"))))),balanceTip:!1})},e.applyForDelegate=function(){var a=e.state.privateKey;e.setState({modal:h.a.createElement(N.a,{isTronLink:e.state.isTronLink,privateKey:a,onCancel:e.hideModal,onConfirm:function(){e.setState({modal:h.a.createElement(C.a,{success:!0,timeout:"3000",onConfirm:e.hideModal},Object(_.c)("proposal_apply_super_success"))})}})})},e.state={dataSource:[],total:0,loading:!1,pagination:{showQuickJumper:!0,position:"bottom",showSizeChanger:!0,defaultPageSize:20,total:0},modal:null,isTronLink:0,balanceTip:!1,isAction:!1},e}return Object(f.a)(a,e),Object(m.a)(a,[{key:"componentDidMount",value:function(){var e=this.props,a=e.account;e.currentWallet;this.load(),a.isLoggedIn&&this.setState({isTronLink:V.a.get("islogin")})}},{key:"getColumns",value:function(){var e=this,a=this.props,t=a.account,n=a.intl;this.state.dataSource;return[{title:o()(n.formatMessage({id:"proposal_serial"})),dataIndex:"index",key:"index",className:"position-relative",render:function(e,a,t){return h.a.createElement("div",{style:{fontFamily:"HelveticaNeue-Medium"}},a.createSelf?h.a.createElement("div",{className:"mine-flag"},Object(_.c)("proposal_my")):"","#"+a.proposalId)}},{title:o()(n.formatMessage({id:"proposal_content_info"})),dataIndex:"proposalVal",key:"proposalVal",width:"40%",render:function(e,a,t){return h.a.createElement("div",{style:{fontFamily:"HelveticaNeue-Medium"}},a.paramters.map(function(e,a){return h.a.createElement("div",{key:a},S.v?h.a.createElement("div",null,"getMaintenanceTimeInterval"==e.proposalKey&&h.a.createElement("div",null,h.a.createElement("span",null,n.formatMessage({id:"propose_1"})),h.a.createElement("span",null,n.formatMessage({id:"proposal_to"})),h.a.createElement("span",null,e.proposalVal/36e5)," \xa0",h.a.createElement("span",null,n.formatMessage({id:"propose_hour"}))),"getAccountUpgradeCost"==e.proposalKey&&h.a.createElement("div",null,h.a.createElement("span",null,n.formatMessage({id:"propose_2"})),h.a.createElement("span",null,n.formatMessage({id:"proposal_to"})),h.a.createElement("span",null,e.proposalVal/S.E)," \xa0",h.a.createElement("span",null,"TRX")),"getCreateAccountFee"==e.proposalKey&&h.a.createElement("div",null,h.a.createElement("span",null,n.formatMessage({id:"propose_3"})),h.a.createElement("span",null,n.formatMessage({id:"proposal_to"})),h.a.createElement("span",null,e.proposalVal/S.E)," \xa0",h.a.createElement("span",null,"TRX")),"getTransactionFee"==e.proposalKey&&h.a.createElement("div",null,h.a.createElement("span",null,n.formatMessage({id:"propose_4"})),h.a.createElement("span",null,n.formatMessage({id:"proposal_to"})),h.a.createElement("span",null,e.proposalVal)," \xa0",h.a.createElement("span",null,"Sun/byte")),"getAssetIssueFee"==e.proposalKey&&h.a.createElement("div",null,h.a.createElement("span",null,n.formatMessage({id:"propose_5"})),h.a.createElement("span",null,n.formatMessage({id:"proposal_to"})),h.a.createElement("span",null,e.proposalVal/S.E)," \xa0",h.a.createElement("span",null,"TRX")),"getWitnessPayPerBlock"==e.proposalKey&&h.a.createElement("div",null,h.a.createElement("div",null,h.a.createElement("span",null,n.formatMessage({id:"propose_6"})),h.a.createElement("span",null,n.formatMessage({id:"proposal_to"})),h.a.createElement("span",null,e.proposalVal/S.E)," \xa0",h.a.createElement("span",null,"TRX"))),"getWitnessStandbyAllowance"==e.proposalKey&&h.a.createElement("div",null,h.a.createElement("span",null,n.formatMessage({id:"propose_7"})),h.a.createElement("span",null,n.formatMessage({id:"proposal_to"})),h.a.createElement("span",null,e.proposalVal/S.E)," \xa0",h.a.createElement("span",null,"TRX")),"getCreateNewAccountFeeInSystemContract"==e.proposalKey&&h.a.createElement("div",null,h.a.createElement("span",null,n.formatMessage({id:"propose_8"})),h.a.createElement("span",null,n.formatMessage({id:"proposal_to"})),h.a.createElement("span",null,e.proposalVal/S.E)," \xa0",h.a.createElement("span",null,"TRX")),"getCreateNewAccountBandwidthRate"==e.proposalKey&&h.a.createElement("div",null,h.a.createElement("span",null,n.formatMessage({id:"propose_9"})),h.a.createElement("span",null,n.formatMessage({id:"proposal_to"})),h.a.createElement("span",null,e.proposalVal)," \xa0",h.a.createElement("span",null,"bandwith/byte")),"getAllowCreationOfContracts"==e.proposalKey&&h.a.createElement("div",null,h.a.createElement("span",null,n.formatMessage({id:"propose_10"})),h.a.createElement("span",null,Object(_.c)("propose_activate"))),"getRemoveThePowerOfTheGr"==e.proposalKey&&h.a.createElement("div",null,h.a.createElement("span",null,n.formatMessage({id:"propose_11"}))),"getEnergyFee"==e.proposalKey&&h.a.createElement("div",null,h.a.createElement("span",null,n.formatMessage({id:"propose_12"})),h.a.createElement("span",null,n.formatMessage({id:"proposal_to"})),h.a.createElement("span",null,e.proposalVal/S.E," TRX")),"getExchangeCreateFee"==e.proposalKey&&h.a.createElement("div",null,h.a.createElement("span",null,n.formatMessage({id:"propose_13"})),h.a.createElement("span",null,n.formatMessage({id:"proposal_to"})),h.a.createElement("span",null,e.proposalVal/S.E," TRX")),"getMaxCpuTimeOfOneTx"==e.proposalKey&&h.a.createElement("div",null,h.a.createElement("span",null,n.formatMessage({id:"propose_14"})),h.a.createElement("span",null,n.formatMessage({id:"proposal_to"})),h.a.createElement("span",null,e.proposalVal," ms")),"getAllowUpdateAccountName"==e.proposalKey&&h.a.createElement("div",null,h.a.createElement("span",null,n.formatMessage({id:"propose_15"})),h.a.createElement("span",null,n.formatMessage({id:"proposal_to"})),e.proposalVal?h.a.createElement("span",null,Object(_.c)("propose_allowed")):h.a.createElement("span",null,Object(_.c)("propose_not_allowed"))),"getAllowSameTokenName"==e.proposalKey&&h.a.createElement("div",null,h.a.createElement("span",null,n.formatMessage({id:"propose_16"})),h.a.createElement("span",null,n.formatMessage({id:"proposal_to"})),e.proposalVal?h.a.createElement("span",null,Object(_.c)("propose_allowed")):h.a.createElement("span",null,Object(_.c)("propose_not_allowed"))),"getAllowDelegateResource"==e.proposalKey&&h.a.createElement("div",null,h.a.createElement("span",null,n.formatMessage({id:"propose_17"})),h.a.createElement("span",null,n.formatMessage({id:"proposal_to"})),e.proposalVal?h.a.createElement("span",null,Object(_.c)("propose_allowed")):h.a.createElement("span",null,Object(_.c)("propose_not_allowed"))),"getTotalEnergyLimit"==e.proposalKey&&h.a.createElement("div",null,h.a.createElement("span",null,n.formatMessage({id:"propose_18"})),h.a.createElement("span",null,n.formatMessage({id:"proposal_to"})),h.a.createElement("span",null,e.proposalVal)),"getAllowTvmTransferTrc10"==e.proposalKey&&h.a.createElement("div",null,h.a.createElement("span",null,n.formatMessage({id:"propose_19"})),h.a.createElement("span",null,n.formatMessage({id:"proposal_to"})),e.proposalVal?h.a.createElement("span",null,Object(_.c)("propose_allowed")):h.a.createElement("span",null,Object(_.c)("propose_not_allowed"))),"getTotalEnergyLimitNew"==e.proposalKey&&h.a.createElement("div",null,h.a.createElement("span",null,n.formatMessage({id:"propose_18_1"})),h.a.createElement("span",null,n.formatMessage({id:"proposal_to"})),h.a.createElement("span",null,e.proposalVal)),"getTotalEnergyCurrentLimit"==e.proposalKey&&h.a.createElement("div",null,h.a.createElement("span",null,n.formatMessage({id:"propose_20"})),h.a.createElement("span",null,n.formatMessage({id:"proposal_to"})),h.a.createElement("span",null,e.proposalVal)),"getAllowMultiSign"==e.proposalKey&&h.a.createElement("div",null,h.a.createElement("span",null,n.formatMessage({id:"propose_21"})),h.a.createElement("span",null,n.formatMessage({id:"proposal_to"})),e.proposalVal?h.a.createElement("span",null,Object(_.c)("propose_allowed")):h.a.createElement("span",null,Object(_.c)("propose_not_allowed"))),"getAllowAdaptiveEnergy"==e.proposalKey&&h.a.createElement("div",null,h.a.createElement("span",null,n.formatMessage({id:"propose_22"})),h.a.createElement("span",null,n.formatMessage({id:"proposal_to"})),e.proposalVal?h.a.createElement("span",null,Object(_.c)("propose_allowed")):h.a.createElement("span",null,Object(_.c)("propose_not_allowed"))),"getTotalEnergyTargetLimit"==e.proposalKey&&h.a.createElement("div",null,h.a.createElement("span",null,n.formatMessage({id:"propose_23"})),h.a.createElement("span",null,n.formatMessage({id:"proposal_to"})),h.a.createElement("span",null,e.proposalVal),"/",h.a.createElement("span",null,Object(_.c)("propose_minute"))),"getTotalEnergyAverageUsage"==e.proposalKey&&h.a.createElement("div",null,h.a.createElement("span",null,n.formatMessage({id:"propose_24"})),h.a.createElement("span",null,n.formatMessage({id:"proposal_to"})),e.proposalVal?h.a.createElement("span",null,h.a.createElement("span",null,e.proposalVal),"/",h.a.createElement("span",null,Object(_.c)("propose_minute"))):h.a.createElement("span",null,Object(_.c)("propose_unactivate"))),"getUpdateAccountPermissionFee"==e.proposalKey&&h.a.createElement("div",null,h.a.createElement("span",null,n.formatMessage({id:"propose_25"})),h.a.createElement("span",null,n.formatMessage({id:"proposal_to"})),h.a.createElement("span",null,e.proposalVal/S.E)," \xa0",h.a.createElement("span",null,"TRX")),"getMultiSignFee"==e.proposalKey&&h.a.createElement("div",null,h.a.createElement("span",null,n.formatMessage({id:"propose_26"})),h.a.createElement("span",null,n.formatMessage({id:"proposal_to"})),h.a.createElement("span",null,e.proposalVal/S.E)," \xa0",h.a.createElement("span",null,"TRX")),"getAllowProtoFilterNum"==e.proposalKey&&h.a.createElement("div",null,h.a.createElement("span",null,n.formatMessage({id:"propose_27"})),h.a.createElement("span",null,n.formatMessage({id:"proposal_to"})),e.proposalVal?h.a.createElement("span",null,Object(_.c)("propose_activate")):h.a.createElement("span",null,Object(_.c)("propose_unactivate"))),"getAllowTvmConstantinople"==e.proposalKey&&h.a.createElement("div",null,h.a.createElement("span",null,n.formatMessage({id:"propose_28"})),h.a.createElement("span",null,n.formatMessage({id:"proposal_to"})),e.proposalVal?h.a.createElement("span",null,Object(_.c)("propose_allowed")):h.a.createElement("span",null,Object(_.c)("propose_not_allowed"))),"getAllowShieldedTransaction"==e.proposalKey&&h.a.createElement("div",null,h.a.createElement("span",null,n.formatMessage({id:"propose_29"})),h.a.createElement("span",null,n.formatMessage({id:"proposal_to"})),e.proposalVal?h.a.createElement("span",null,Object(_.c)("propose_allowed")):h.a.createElement("span",null,Object(_.c)("propose_not_allowed"))),"getShieldedTransactionFee"==e.proposalKey&&h.a.createElement("div",null,h.a.createElement("span",null,n.formatMessage({id:"propose_28_1"})),h.a.createElement("span",null,n.formatMessage({id:"proposal_to"})),h.a.createElement("span",null,e.proposalVal/S.E)," \xa0",h.a.createElement("span",null,"TRX")),"getAdaptiveResourceLimitMultiplier"==e.proposalKey&&h.a.createElement("div",null,h.a.createElement("span",null,n.formatMessage({id:"propose_29_1"})),h.a.createElement("span",null,n.formatMessage({id:"proposal_to"})),h.a.createElement("span",null,e.proposalVal)),"getChangeDelegation"==e.proposalKey&&h.a.createElement("div",null,h.a.createElement("span",null,n.formatMessage({id:"propose_30"})),h.a.createElement("span",null,n.formatMessage({id:"proposal_to"})),e.proposalVal?h.a.createElement("span",null,Object(_.c)("propose_activate")):h.a.createElement("span",null,Object(_.c)("propose_unactivate"))),"getWitness127PayPerBlock"==e.proposalKey&&h.a.createElement("div",{className:"mt-1"},h.a.createElement("span",null,n.formatMessage({id:"propose_31"})),h.a.createElement("span",null,n.formatMessage({id:"proposal_to"})),h.a.createElement("span",null,e.proposalVal/S.E)," \xa0",h.a.createElement("span",null,"TRX")),"getAllowTvmSolidity059"==e.proposalKey&&h.a.createElement("div",null,h.a.createElement("span",null,n.formatMessage({id:"propose_32"})),h.a.createElement("span",null,n.formatMessage({id:"proposal_to"})),e.proposalVal?h.a.createElement("span",null,Object(_.c)("propose_allowed")):h.a.createElement("span",null,Object(_.c)("propose_not_allowed"))),"getAdaptiveResourceLimitTargetRatio"==e.proposalKey&&h.a.createElement("div",null,h.a.createElement("span",null,n.formatMessage({id:"propose_33"})),h.a.createElement("span",null,n.formatMessage({id:"proposal_to"})),h.a.createElement("span",null,e.proposalVal))):h.a.createElement("div",null,"getChargingSwitch"==e.proposalKey&&h.a.createElement("div",null,h.a.createElement("span",null,n.formatMessage({id:"sun_propose_1"})),h.a.createElement("span",null,n.formatMessage({id:"proposal_to"})),"0"!=e.proposalVal?h.a.createElement("span",null,Object(_.c)("propose_activate")):h.a.createElement("span",null,Object(_.c)("propose_unactivate"))),"getSideChainGateWayList"==e.proposalKey&&h.a.createElement("div",null,h.a.createElement("span",null,n.formatMessage({id:"sun_propose_2"})),h.a.createElement("span",null,n.formatMessage({id:"proposal_to"})),h.a.createElement("span",null,e.proposalVal)),"getProposalExpireTime"==e.proposalKey&&h.a.createElement("div",null,h.a.createElement("span",null,n.formatMessage({id:"sun_propose_3"})),h.a.createElement("span",null,n.formatMessage({id:"proposal_to"})),h.a.createElement("span",null,e.proposalVal)),"getVoteWitnessSwitch"==e.proposalKey&&h.a.createElement("div",null,h.a.createElement("span",null,n.formatMessage({id:"sun_propose_4"})),h.a.createElement("span",null,n.formatMessage({id:"proposal_to"})),"0"!=e.proposalVal?h.a.createElement("span",null,Object(_.c)("propose_activate")):h.a.createElement("span",null,Object(_.c)("propose_unactivate"))),"getFundInjectAddress"==e.proposalKey&&h.a.createElement("div",null,h.a.createElement("span",null,n.formatMessage({id:"sun_propose_5"})),h.a.createElement("span",null,n.formatMessage({id:"proposal_to"})),h.a.createElement("span",null,e.proposalVal)),"getFundDistributeEnableSwitch"==e.proposalKey&&h.a.createElement("div",null,h.a.createElement("span",null,n.formatMessage({id:"sun_propose_6"})),h.a.createElement("span",null,n.formatMessage({id:"proposal_to"})),"0"!=e.proposalVal?h.a.createElement("span",null,Object(_.c)("propose_activate")):h.a.createElement("span",null,Object(_.c)("propose_unactivate"))),"getDayToSustainByFund"==e.proposalKey&&h.a.createElement("div",null,h.a.createElement("span",null,n.formatMessage({id:"sun_propose_7"})),h.a.createElement("span",null,n.formatMessage({id:"proposal_to"})),h.a.createElement("span",null,e.proposalVal," ",Object(_.c)("day"))),"getPercentToPayWitness"==e.proposalKey&&h.a.createElement("div",null,h.a.createElement("span",null,n.formatMessage({id:"sun_propose_8"})),h.a.createElement("span",null,n.formatMessage({id:"proposal_to"})),h.a.createElement("span",null,e.proposalVal," %"))))}))}},{title:o()(n.formatMessage({id:"proposer"})),dataIndex:"name",key:"name",width:"15%",render:function(e,a,t){return a.proposer.name?h.a.createElement(j.a,{address:a.proposer.address},a.proposer.name):h.a.createElement(j.a,{address:a.proposer.address},a.proposer.address)}},{title:o()(n.formatMessage({id:"proposal_time_of_creation"}))+"/ "+o()(n.formatMessage({id:"proposal_endtime"})),dataIndex:"createTime",key:"createTime",width:"15%",align:"center",render:function(e,a,t){return h.a.createElement("div",null,h.a.createElement("div",{style:{color:"#333"}},h.a.createElement(w.a,{value:Number(e)}),"\xa0",h.a.createElement(w.e,{value:Number(e),hour:"numeric",minute:"numeric",second:"numeric",hour12:!1})),h.a.createElement("div",{style:{color:"#C23631"}},h.a.createElement(w.a,{value:Number(a.expirationTime)}),"\xa0",h.a.createElement(w.e,{value:Number(a.expirationTime),hour:"numeric",minute:"numeric",second:"numeric",hour12:!1})))}},{title:o()(n.formatMessage({id:"proposal_status"})),dataIndex:"state",key:"state",align:"center",render:function(e,a,t){return h.a.createElement("div",null,"PENDING"==e&&h.a.createElement("div",null,h.a.createElement("span",{className:"badge badge-warning text-uppercase badge-success-radius"},Object(_.c)("proposal_voting"))),"DISAPPROVED"==e&&h.a.createElement("div",null,h.a.createElement("span",{className:"badge badge-danger text-uppercase badge-success-radius"},Object(_.c)("proposal_ineffective"))),"APPROVED"==e&&h.a.createElement("div",null,h.a.createElement("span",{className:"badge badge-success text-uppercase badge-success-radius"},Object(_.c)("proposal_effective"))),"CANCELED"==e&&h.a.createElement("div",null,h.a.createElement("span",{className:"badge badge-secondary text-uppercase badge-success-radius"},Object(_.c)("proposal_cancelled"))))}},{title:function(){var e=o()(n.formatMessage({id:"proposal_valid_votes"}))+" / "+o()(n.formatMessage({id:"proposal_total_votes"})),a=o()(n.formatMessage({id:"proposal_votes_tip"}));return h.a.createElement("div",null,e,h.a.createElement("span",{className:"mr-2"},h.a.createElement(x.a,{placement:"top",text:a})))},dataIndex:"votes",key:"votes",width:"12%",align:"center",className:!S.v&&"hidden",render:function(e,a,t){return a.validVotes+" / "+a.totalVotes}},{title:o()(n.formatMessage({id:"proposal_action"})),dataIndex:"details",key:"details",width:"12%",align:"center",render:function(a,n,l){return h.a.createElement("div",{className:"detail-action"},h.a.createElement("div",null,h.a.createElement(y.a,{to:"/proposal/".concat(n.proposalId),className:"proposal-more"},Object(_.c)("proposal_more"))),t.address?h.a.createElement("div",null,"PENDING"===n.state&&!n.approveSelf&&h.a.createElement("div",null,h.a.createElement("a",{href:"javascript:;",className:"proposal-approve",onClick:function(){return e.qualificationsVerify(n.proposalId,!0)}},Object(_.c)("proposal_approve"))),"PENDING"===n.state&&n.approveSelf&&h.a.createElement("div",null,h.a.createElement("a",{href:"javascript:;",className:"proposal-cancel",onClick:function(){return e.qualificationsVerify(n.proposalId)}},Object(_.c)("proposal_cancel_approve")))):h.a.createElement("div",null,"PENDING"===n.state&&h.a.createElement("div",null,h.a.createElement("a",{href:"javascript:;",className:"proposal-approve",onClick:function(){return e.qualificationsVerify(n.proposalId,!0)}},Object(_.c)("proposal_approve")))))}}]}},{key:"qualificationsVerify",value:function(e,a){if(this.isLoggedIn()&&!this.state.isAction){this.setState({isAction:!0});var t=this.props;t.account,t.account.tronWeb;t.currentWallet.representative.enabled?a?this.voteProposal(e,a):this.cancelModal(e):this.applySuperModal()}}},{key:"voteProposal",value:function(){var e=Object(c.a)(p.a.mark(function e(a,t){return p.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this.getResult(a,t);case 2:e.sent?this.setState({modal:h.a.createElement(C.a,{success:!0,timeout:"3000",onConfirm:this.hideModal},Object(_.c)("proposal_success"))}):this.setState({modal:h.a.createElement(C.a,{warning:!0,timeout:"3000",onConfirm:this.hideModal},Object(_.c)("proposal_fail"))}),this.setState({isAction:!1});case 5:case"end":return e.stop()}},e,this)}));return function(a,t){return e.apply(this,arguments)}}()},{key:"getResult",value:function(){var e=Object(c.a)(p.a.mark(function e(a,t){var n,l,r,o,s,c,i,u,m;return p.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(this.state.isTronLink,l=this.props.account,!S.v){e.next=14;break}return"ACCOUNT_LEDGER"===this.props.walletType.type?r=this.props.tronWeb():"ACCOUNT_TRONLINK"!==this.props.walletType.type&&"ACCOUNT_PRIVATE_KEY"!==this.props.walletType.type||(r=l.tronWeb),e.next=6,r.transactionBuilder.voteProposal(a,t,l.address,1).catch(function(e){return console.log(e)});case 6:return o=e.sent,e.next=9,Object(P.c)(o,r);case 9:s=e.sent,c=s.result,n=c,e.next=22;break;case 14:return e.next=16,l.sunWeb.sidechain.transactionBuilder.voteProposal(a,t,l.address,1).catch(function(e){return console.log(e)});case 16:return i=e.sent,e.next=19,Object(P.e)(i,l.sunWeb);case 19:u=e.sent,m=u.result,n=m;case 22:return e.abrupt("return",n);case 23:case"end":return e.stop()}},e,this)}));return function(a,t){return e.apply(this,arguments)}}()},{key:"cancelModal",value:function(e){var a=this,t=this.props.intl;this.setState({modal:h.a.createElement(C.a,{showCancel:!0,title:"",confirmBtnText:t.formatMessage({id:"confirm"}),cancelBtnText:t.formatMessage({id:"cancel"}),confirmBtnBsStyle:"link",confirmBtnCssClass:"modal-confirm",cancelBtnCssClass:"modal-cancel",onCancel:function(){return a.setState({modal:null})},onConfirm:function(){return a.voteProposal(e,!1)}},h.a.createElement("div",{style:{color:"#333",padding:"30px 0"}},Object(_.c)("proposal_cancel_tip"))),isAction:!1})}},{key:"showApplyForDelegate",value:function(){this.props.currentWallet.balance>=9999e6?this.applyForDelegate():this.setState({modal:h.a.createElement(k.c,{isOpen:!0,toggle:this.hideModal,className:"committee-modal modal-dialog-centered",style:{width:"460px"}},h.a.createElement(k.f,{toggle:this.hideModal,className:""}),h.a.createElement(k.d,null,h.a.createElement("div",{style:{color:"#333",padding:"10px 0 50px",fontSize:"16px",textAlign:"center"}},Object(_.c)("proposal_apply_super")),h.a.createElement("div",{style:{display:"flex",justifyContent:"center",flexDirection:"column",alignItems:"center"}},h.a.createElement("div",{className:"balance-tip show"},Object(_.c)("proposal_balance_not_enough")),h.a.createElement("div",{style:{width:"220px",height:"38px",lineHeight:"38px",textAlign:"center",background:"#69C265",color:"#fff",cursor:"pointer"}},Object(_.c)("proposal_apply_super_btn")))))})}},{key:"pageHandle",value:function(e){if(this.isLoggedIn()){var a=this.props;a.account;a.currentWallet.representative.enabled?this.props.history.push(e?"proposalscreate":"myproposals"):this.applySuperModal()}}},{key:"render",value:function(){var e=this,a=this.state,t=a.modal,n=(a.page,a.total),r=(a.pageSize,a.loading),o=a.dataSource,s=(a.emptyState,a.pagination),p=this.getColumns(),c=this.props.intl;c.formatMessage({id:"view_total"}),c.formatMessage({id:"token_unit"}),c.formatMessage({id:"no_commission_proposed_found"});return h.a.createElement("main",{className:"container header-overlap committee"},t,h.a.createElement("div",{className:"token_black table_pos proposal-table"},S.v&&h.a.createElement("div",{className:"proposal-header"},h.a.createElement("a",{href:"javascript:;",onClick:function(){return e.pageHandle(1)}},Object(_.c)("proposal_create")),h.a.createElement("a",{href:"javascript:;",onClick:function(){return e.pageHandle()}},Object(_.c)("proposal_mine"))),r&&h.a.createElement("div",{className:"loading-style"},h.a.createElement(M.b,null)),!r&&h.a.createElement(l.a,{bordered:!0,columns:p,rowKey:function(e,a){return a},dataSource:o,scroll:scroll,pagination:s,loading:r,onChange:this.handleTableChange})))}}]),a}(h.a.Component);a.default=Object(v.connect)(function(e){return{account:e.app.account,currentWallet:e.wallet.current,walletType:e.app.wallet}},null)(Object(O.a)(Object(w.h)(R)))}}]);