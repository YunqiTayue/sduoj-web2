(this.webpackJsonpsduoj=this.webpackJsonpsduoj||[]).push([[44],{1004:function(e,t,a){"use strict";var n=a(975),r=a(299),i=a(965),c=a(60),o=a(1085),s=a(974),l=a(0),d=a(87),u=a(66),j=a(298),m=a(40),b=a(302),g=a(67),h=a(292),p=a(5);t.a=Object(u.b)((e=>{var t;const a=e.UserReducer,n=e.TableReduce;return{roles:null===(t=a.userInfo)||void 0===t?void 0:t.roles,tableData:{...n.tableData}}}),(e=>({setTableInfo:(t,a)=>e({type:"setTableInfo",name:t,data:a}),setDataSource:(t,a)=>e({type:"setDataSource",data:t,name:a,add:!1})})))(Object(j.a)()(Object(m.e)((e=>{var t,a;const[u,j]=Object(l.useState)(0),[m,v]=Object(l.useState)(),[O,f]=Object(l.useState)(!0),[x,y]=Object(l.useState)(1),[S,w]=Object(l.useState)(Object(g.a)(e.defaultPageSize,d.h)),[C,k]=Object(l.useState)(),[I,z]=Object(l.useState)(0),N=t=>{v(t),void 0!==e.setDataSource&&void 0!==e.name&&e.setDataSource(t,e.name)},P=(t,a,n,r)=>{var i,c,o,s,l;const d=null===(i=e.tableData[e.name])||void 0===i?void 0:i.tableInfo;var u,m,b,g;void 0!==d&&(void 0===r&&void 0!==d.moreProps&&E.setFieldsValue(d.moreProps),t=null!==(u=t)&&void 0!==u?u:d.pageNow,a=null!==(m=a)&&void 0!==m?m:d.pageSize,n=null!==(b=n)&&void 0!==b?b:d.searchKey,r=null!==(g=r)&&void 0!==g?g:d.moreProps);let h=null!==(c=t)&&void 0!==c?c:x,p=null!==(o=a)&&void 0!==o?o:S,v=null!==(s=n)&&void 0!==s?s:C,O=null!==(l=r)&&void 0!==l?l:E.getFieldsValue();y(h),w(p),k(v),f(!0),e.API({pageNow:h,pageSize:p,searchKey:v,...O}).then((t=>{null===t.rows&&(t.rows=[]),void 0!==e.APIRowsTransForm?N(e.APIRowsTransForm(t.rows)):N(t.rows),void 0!==t.totalNum&&"0"!==t.totalNum?(j(t.totalNum),e.name&&e.setTableInfo(e.name,{total:t.totalNum,pageNow:h,pageSize:p,searchKey:v,moreProps:O})):(j(p*t.totalPage),e.name&&e.setTableInfo(e.name,{total:p*t.totalPage,pageNow:h,pageSize:p,searchKey:v,moreProps:O})),f(!1)}))};Object(l.useEffect)((()=>{E.setFieldsValue(e.initRequestProps),P()}),[e.name]);const[E]=Object(h.a)(),L=()=>{const e=E.getFieldsValue();"{}"!==JSON.stringify(e)&&P(1,S,void 0,e)},F=()=>{var t;const a=E.getFieldsValue();E.resetFields();const n=null===(t=e.tableData[e.name])||void 0===t?void 0:t.tableInfo;e.name&&e.setTableInfo(e.name,{total:n.total,pageNow:n.pageNow,pageSize:n.pageSize,searchKey:n.searchKey,moreProps:void 0});const r=E.getFieldsValue();JSON.stringify(a)!==JSON.stringify(r)&&P(1,S,void 0,void 0)};return Object(l.useEffect)((()=>{var t;const a=null===(t=e.tableData[e.name])||void 0===t?void 0:t.tableVersion;if(void 0!==a&&I!==a)if(a<0){var n;z(-a),v(null===(n=e.tableData[e.name])||void 0===n?void 0:n.dataSource)}else{z(a);const e=E.getFieldsValue();P(x,S,C,e)}}),[e.tableData,I]),Object(p.jsxs)(p.Fragment,{children:[e.useList&&Object(p.jsx)(n.a,{title:e.title,bordered:!0,size:"default",className:null!==(t=e.cardProps)&&void 0!==t?t:"zeroBodyPaddingLeft",extra:(!0===e.search||void 0!==e.getForm)&&Object(p.jsxs)(p.Fragment,{children:[!0===e.search&&Object(p.jsx)(b.a,{placeholder:e.t("searchUser"),onSearch:e=>{k(e),y(1);const t=E.getFieldsValue();P(1,S,e,t)},enterButton:!0,style:{width:300}},"search"),void 0!==e.getForm&&Object(p.jsxs)(r.a,{form:E,children:[e.getForm(L),e.useFormBtn&&Object(p.jsxs)(i.b,{style:{marginLeft:"30px"},size:20,children:[Object(p.jsx)(c.a,{type:"primary",onClick:L,children:"\u7b5b\u9009"}),Object(p.jsx)(c.a,{htmlType:"button",onClick:F,children:"\u91cd\u7f6e"})]})]})]}),children:Object(p.jsx)(o.b,{grid:e.grid,itemLayout:"vertical",loading:O,size:e.size,dataSource:m,renderItem:e.renderItem,pagination:{onChange:(e,t)=>{P(e,t)},current:x,pageSize:S,total:u,size:"small",hideOnSinglePage:!0,showQuickJumper:!0,showLessItems:!0,showSizeChanger:Object(g.a)(e.showSizeChanger,!0),pageSizeOptions:["5","15","20","50","80"]}})}),!e.useList&&Object(p.jsx)(n.a,{bordered:!1,size:"small",extra:(!0===e.search||void 0!==e.getForm)&&Object(p.jsxs)(p.Fragment,{children:[!0===e.search&&Object(p.jsx)(b.a,{placeholder:"\u641c\u7d22",onSearch:e=>{k(e),y(1),P(1,S,e)},enterButton:!0,style:{width:300}},"search"),void 0!==e.getForm&&Object(p.jsxs)(r.a,{form:E,children:[e.getForm(L),Object(p.jsxs)(i.b,{style:{marginLeft:"30px"},size:20,children:[Object(p.jsx)(c.a,{type:"primary",onClick:L,children:e.t("filtering")}),Object(p.jsx)(c.a,{htmlType:"button",onClick:F,children:e.t("Reset")})]})]})]}),children:Object(p.jsx)(s.a,{rowKey:e.rowKey,loading:O,size:e.size,columns:e.columns,rowSelection:e.rowSelection,dataSource:m,pagination:null!==(a=e.pagination)&&void 0!==a?a:{onChange:(e,t)=>{P(e,t)},current:x,pageSize:S,total:u,hideOnSinglePage:!1,showQuickJumper:!0,showLessItems:!0,showSizeChanger:Object(g.a)(e.showSizeChanger,!0),pageSizeOptions:["5","15","20","50","80"]}})})]})}))))},1015:function(e,t,a){"use strict";var n=a(1071),r=a.n(n),i=a(67);const c="https://oj.qd.sdu.edu.cn";var o=a(0),s=a(5);t.a=e=>{const[t,a]=Object(o.useState)(!1),[n,l]=Object(o.useState)(!1);return Object(o.useEffect)((()=>{Object(i.c)(e.text)||t||n===e.text||(a(!0),l(e.text),function(e,t){var a,n,o;(Object(i.c)(e)||Object(i.c)(null===(a=e)||void 0===a?void 0:a.trim()))&&(e=""),e=null===(o=e=null===(n=e)||void 0===n?void 0:n.replaceAll(/`{3}\n([-|0-9a-zA-Z])/g,"```plaintext\n$1"))||void 0===o?void 0:o.replaceAll(/\$\n(.*)\n\$/g,"$ $1 $");const s={mode:"light",cdn:c+"/vditor",emojiPath:c+"/vditor/dist/images/emoji",theme:{path:c+"/vditor/dist/css/content-theme"},hljs:{lineNumber:!1},markdown:{toc:!0,mark:!0,footnotes:!0,autoSpace:!0},math:{inlineDigit:!0,engine:"KaTeX"}};return r.a.preview(document.getElementById(t),e,s)}(e.text,e.id).then((e=>{a(!1)})))}),[e.id,e.text,t]),Object(s.jsx)("div",{id:e.id,style:{overflowY:"hidden"}})}},1085:function(e,t,a){"use strict";a.d(t,"a",(function(){return k}));var n=a(16),r=a(3),i=a(4),c=a(10),o=a(15),s=a(2),l=a.n(s),d=a(0),u=a.n(d),j=a(36),m=a(184),b=a(962),g=a(138),h=a(306),p=a(241),v=a(112),O=a(177),f=a(23),x=function(e,t){var a={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(a[n]=e[n]);if(null!=e&&"function"===typeof Object.getOwnPropertySymbols){var r=0;for(n=Object.getOwnPropertySymbols(e);r<n.length;r++)t.indexOf(n[r])<0&&Object.prototype.propertyIsEnumerable.call(e,n[r])&&(a[n[r]]=e[n[r]])}return a},y=function(e,t){var a=e.prefixCls,n=e.children,c=e.actions,o=e.extra,s=e.className,m=e.colStyle,b=x(e,["prefixCls","children","actions","extra","className","colStyle"]),g=Object(d.useContext)(k),h=g.grid,p=g.itemLayout,v=Object(d.useContext)(j.b).getPrefixCls,y=v("list",a),S=c&&c.length>0&&u.a.createElement("ul",{className:"".concat(y,"-item-action"),key:"actions"},c.map((function(e,t){return u.a.createElement("li",{key:"".concat(y,"-item-action-").concat(t)},e,t!==c.length-1&&u.a.createElement("em",{className:"".concat(y,"-item-action-split")}))}))),w=h?"div":"li",C=u.a.createElement(w,Object(r.a)({},b,h?{}:{ref:t},{className:l()("".concat(y,"-item"),Object(i.a)({},"".concat(y,"-item-no-flex"),!("vertical"===p?o:!function(){var e;return d.Children.forEach(n,(function(t){"string"===typeof t&&(e=!0)})),e&&d.Children.count(n)>1}())),s)}),"vertical"===p&&o?[u.a.createElement("div",{className:"".concat(y,"-item-main"),key:"content"},n,S),u.a.createElement("div",{className:"".concat(y,"-item-extra"),key:"extra"},o)]:[n,S,Object(f.a)(o,{key:"extra"})]);return h?u.a.createElement(O.a,{ref:t,flex:1,style:m},C):C},S=Object(d.forwardRef)(y);S.Meta=function(e){var t=e.prefixCls,a=e.className,n=e.avatar,i=e.title,c=e.description,o=x(e,["prefixCls","className","avatar","title","description"]),s=(0,Object(d.useContext)(j.b).getPrefixCls)("list",t),m=l()("".concat(s,"-item-meta"),a),b=u.a.createElement("div",{className:"".concat(s,"-item-meta-content")},i&&u.a.createElement("h4",{className:"".concat(s,"-item-meta-title")},i),c&&u.a.createElement("div",{className:"".concat(s,"-item-meta-description")},c));return u.a.createElement("div",Object(r.a)({},o,{className:m}),n&&u.a.createElement("div",{className:"".concat(s,"-item-meta-avatar")},n),(i||c)&&b)};var w=S,C=function(e,t){var a={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(a[n]=e[n]);if(null!=e&&"function"===typeof Object.getOwnPropertySymbols){var r=0;for(n=Object.getOwnPropertySymbols(e);r<n.length;r++)t.indexOf(n[r])<0&&Object.prototype.propertyIsEnumerable.call(e,n[r])&&(a[n[r]]=e[n[r]])}return a},k=d.createContext({});k.Consumer;function I(e){var t,a=e.pagination,s=void 0!==a&&a,u=e.prefixCls,O=e.bordered,f=void 0!==O&&O,x=e.split,y=void 0===x||x,S=e.className,w=e.children,I=e.itemLayout,z=e.loadMore,N=e.grid,P=e.dataSource,E=void 0===P?[]:P,L=e.size,F=e.header,T=e.footer,J=e.loading,V=void 0!==J&&J,D=e.rowKey,R=e.renderItem,K=e.locale,A=C(e,["pagination","prefixCls","bordered","split","className","children","itemLayout","loadMore","grid","dataSource","size","header","footer","loading","rowKey","renderItem","locale"]),M=s&&"object"===Object(o.a)(s)?s:{},B=d.useState(M.defaultCurrent||1),_=Object(c.a)(B,2),$=_[0],U=_[1],q=d.useState(M.defaultPageSize||10),Q=Object(c.a)(q,2),W=Q[0],G=Q[1],H=d.useContext(j.b),X=H.getPrefixCls,Y=H.renderEmpty,Z=H.direction,ee={},te=function(e){return function(t,a){U(t),G(a),s&&s[e]&&s[e](t,a)}},ae=te("onChange"),ne=te("onShowSizeChange"),re=X("list",u),ie=V;"boolean"===typeof ie&&(ie={spinning:ie});var ce=ie&&ie.spinning,oe="";switch(L){case"large":oe="lg";break;case"small":oe="sm"}var se=l()(re,(t={},Object(i.a)(t,"".concat(re,"-vertical"),"vertical"===I),Object(i.a)(t,"".concat(re,"-").concat(oe),oe),Object(i.a)(t,"".concat(re,"-split"),y),Object(i.a)(t,"".concat(re,"-bordered"),f),Object(i.a)(t,"".concat(re,"-loading"),ce),Object(i.a)(t,"".concat(re,"-grid"),!!N),Object(i.a)(t,"".concat(re,"-something-after-last-item"),!!(z||s||T)),Object(i.a)(t,"".concat(re,"-rtl"),"rtl"===Z),t),S),le=Object(r.a)(Object(r.a)(Object(r.a)({},{current:1,total:0}),{total:E.length,current:$,pageSize:W}),s||{}),de=Math.ceil(le.total/le.pageSize);le.current>de&&(le.current=de);var ue=s?d.createElement("div",{className:"".concat(re,"-pagination")},d.createElement(h.a,Object(r.a)({},le,{onChange:ae,onShowSizeChange:ne}))):null,je=Object(n.a)(E);s&&E.length>(le.current-1)*le.pageSize&&(je=Object(n.a)(E).splice((le.current-1)*le.pageSize,le.pageSize));var me=Object.keys(N||{}).some((function(e){return["xs","sm","md","lg","xl","xxl"].includes(e)})),be=Object(g.a)(me),ge=d.useMemo((function(){for(var e=0;e<v.b.length;e+=1){var t=v.b[e];if(be[t])return t}}),[be]),he=d.useMemo((function(){if(N){var e=ge&&N[ge]?N[ge]:N.column;return e?{width:"".concat(100/e,"%"),maxWidth:"".concat(100/e,"%")}:void 0}}),[null===N||void 0===N?void 0:N.column,ge]),pe=ce&&d.createElement("div",{style:{minHeight:53}});if(je.length>0){var ve=je.map((function(e,t){return function(e,t){return R?((a="function"===typeof D?D(e):D?e[D]:e.key)||(a="list-item-".concat(t)),ee[t]=a,R(e,t)):null;var a}(e,t)})),Oe=d.Children.map(ve,(function(e,t){return d.createElement("div",{key:ee[t],style:he},e)}));pe=N?d.createElement(b.a,{gutter:N.gutter},Oe):d.createElement("ul",{className:"".concat(re,"-items")},ve)}else w||ce||(pe=function(e,t){return d.createElement("div",{className:"".concat(e,"-empty-text")},K&&K.emptyText||t("List"))}(re,Y||m.a));var fe=le.position||"bottom",xe=d.useMemo((function(){return{grid:N,itemLayout:I}}),[JSON.stringify(N),I]);return d.createElement(k.Provider,{value:xe},d.createElement("div",Object(r.a)({className:se},A),("top"===fe||"both"===fe)&&ue,F&&d.createElement("div",{className:"".concat(re,"-header")},F),d.createElement(p.a,Object(r.a)({},ie),pe,w),T&&d.createElement("div",{className:"".concat(re,"-footer")},T),z||("bottom"===fe||"both"===fe)&&ue))}I.Item=w;t.b=I},1222:function(e,t,a){"use strict";var n=a(66),r=a(100),i=a(0);t.a=function(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:void 0;const a=Object(n.d)((t=>t.ProblemSetReducer.problemSetInfo[e])),c=Object(n.d)((t=>t.ProblemSetReducer.problemSetInfo[e+"-cache"])),o=Object(n.c)(),[s,l]=Object(i.useState)(),[d,u]=Object(i.useState)();return Object(i.useEffect)((()=>{s!==e?(void 0===c&&void 0===a?(o({type:"setProblemSetInfo",key:e+"-cache",data:!0}),r.a.getProblemSetInfo({psid:parseInt(e)}).then((t=>{o({type:"setProblemSetInfo",key:e,data:t}),o({type:"setProblemSetInfo",key:e+"-cache",data:void 0}),u(t)})).catch((e=>{t&&t(e)}))):u(a),l(e)):u(a)}),[a,e]),d}},1234:function(e,t,a){"use strict";var n=a(1069),r=a(123),i=a(61),c=(a(0),a(5));t.a=e=>{var t,a;const{value:o,onChange:s}=e;return Object(c.jsx)(c.Fragment,{children:Object(c.jsx)(n.a,{checked:1===o,onChange:e=>{s(e?1:0)},checkedChildren:null!==(t=e.ck)&&void 0!==t?t:Object(c.jsx)(r.a,{}),unCheckedChildren:null!==(a=e.unck)&&void 0!==a?a:Object(c.jsx)(i.a,{})})})}},1315:function(e,t,a){"use strict";var n=a(975),r=a(60),i=a(83),c=a(1015),o=a(0),s=a(5);t.a=e=>{var t,a,l;const[d,u]=Object(o.useState)(240),[j,m]=Object(o.useState)(!1);return Object(o.useEffect)((()=>{u(240)}),[e.description,e.answer]),Object(s.jsxs)(s.Fragment,{children:[Object(s.jsx)("div",{children:Object(s.jsx)(n.a,{title:Object(s.jsx)(i.a,{level:5,children:" \u539f\u95ee\u9898 "}),style:{marginTop:24},extra:Object(s.jsx)(r.a,{type:"default",onClick:()=>{u(998244353===d?240:998244353)},children:998244353===d?"\u6536\u9f50\u5168\u6587":"\u5c55\u5f00\u5168\u6587"}),children:Object(s.jsx)(c.a,{id:"proDescription",text:(null!==(t=null===e||void 0===e?void 0:e.description)&&void 0!==t?t:"").substr(0,d)})})}),Object(s.jsxs)(n.a,{title:Object(s.jsx)(i.a,{level:5,children:" \u5b66\u751f\u7b54\u6848 "}),style:{marginTop:24},extra:Object(s.jsx)(r.a,{type:"default",onClick:()=>{m(!j)},children:j?"\u663e\u793a\u6e32\u67d3":"\u663e\u793a\u539f\u6587"}),children:[j&&Object(s.jsx)("pre",{children:null===e||void 0===e||null===(a=e.answer)||void 0===a?void 0:a[0]}),!j&&Object(s.jsx)(c.a,{id:"userAnswer",text:null===e||void 0===e||null===(l=e.answer)||void 0===l?void 0:l[0]})]})]})}},1381:function(e,t,a){},1407:function(e,t,a){"use strict";a.r(t);var n=a(60),r=a(965),i=a(299),c=a(178),o=a(166),s=a(968),l=a(972),d=a(973),u=a(975),j=a(97),m=a(0),b=(a(1381),a(298)),g=a(1010),h=a(976),p=a(193),v=a(123),O=a(61),f=a(1015),x=a(5);var y=Object(b.a)()((e=>{const{reviewInfo:t,setReviewInfo:a}=e,i=(e,n)=>{var r,i;let c={...t},o=e.split("-"),s="";c[e]=null!==(r=c[e])&&void 0!==r?r:0,c[0]=(null!==(i=c[0])&&void 0!==i?i:0)-c[e]+n;for(let t of o){var l;s+=t,c[s]=(null!==(l=c[s])&&void 0!==l?l:0)+n-c[e],s+="-"}a(c)},c=e=>{var a;return Object(x.jsxs)(u.a,{title:e.title,size:"small",bordered:!1,children:[Object(x.jsx)("div",{style:{float:"right"},children:Object(x.jsxs)(r.b,{children:[void 0===e.children&&Object(x.jsxs)(r.b,{children:[Object(x.jsx)(n.a,{type:"primary",shape:"round",size:"small",icon:Object(x.jsx)(v.a,{}),onClick:()=>{i(e.key,e.score)}}),Object(x.jsx)(n.a,{type:"primary",shape:"round",size:"small",danger:!0,icon:Object(x.jsx)(O.a,{}),onClick:()=>{i(e.key,0)}})]}),Object(x.jsxs)("span",{children:["0"===e.key?"\u603b\u5206\uff1a":"\u5206\u6570\uff1a",void 0===e.children&&Object(x.jsx)(g.a,{style:{width:64},size:"small",min:0,max:e.score,value:t[e.key],onChange:t=>{i(e.key,t)}}),void 0!==e.children&&(null!==(a=t[e.key])&&void 0!==a?a:0)," ","/ ",e.score]})]})}),Object(x.jsx)("div",{style:{marginTop:32},children:void 0===e.children?Object(x.jsxs)(x.Fragment,{children:[void 0!==e.answer&&Object(x.jsx)(h.a,{message:Object(x.jsx)(f.a,{id:"problemReview-answer-".concat(e.key),text:e.answer}),type:"success"}),(()=>{if(void 0!==e.info)return Object(x.jsx)(p.a.Group,{onChange:t=>{i(e.key,t.target.value)},value:t[e.key],children:Object(x.jsx)(l.a,{children:e.info&&e.info.map((e=>Object(x.jsx)(d.a,{span:12,children:Object(x.jsxs)(p.a,{value:e[0],children:[" ",e[0],"\u5206 ",e[1]]})})))})})})()]}):e.children.map((e=>c(e)))})]})};return Object(x.jsx)(x.Fragment,{children:c(e.scoreModeInfo)})})),S=a(1004),w=a(100),C=a(243),k=a(1222),I=a(67),z=a(66),N=a(40),P=a(1315),E=a(1234);t.default=Object(z.b)((e=>{var t;return{username:null===(t=e.UserReducer.userInfo)||void 0===t?void 0:t.username}}),(e=>({addTableVersion:t=>e({type:"addTableVersion",name:t})})))(Object(b.a)()(Object(N.e)((e=>{const t=parseInt(e.match.params.problemSetId),a=Object(k.a)(t.toString()),[b,g]=Object(m.useState)({}),[h,p]=Object(m.useState)({}),[v,O]=Object(m.useState)(),[f,z]=Object(m.useState)(!1),[N,L]=Object(m.useState)(0),[F,T]=Object(m.useState)(!1);Object(m.useEffect)((()=>{!1===f&&(g({}),p({}))}),[t,f]);const J=[];if(void 0!==a)for(let n of a.groupInfo)if(1===n.type)for(let e of n.problemInfo)J.push({value:"".concat(n.index,"-").concat(e.index),label:n.name+"-"+(e.index+1).toString()});const V=e=>{w.a.getJudgeInfo({psid:t,gid:e.gid,pid:e.pid,username:e.username}).then((t=>{for(let e=0;e<t.judgeConfig.length;e++){const a=t.judgeConfig[e];a.title=a.name,a.key=(e+1).toString()}if(t.judgeConfig={key:"0",score:100,children:t.judgeConfig},t.pid=e.pid,t.gid=e.gid,!Object(I.c)(t.judgeLog)){let e=0,a={};for(let n=0;n<t.judgeLog.length;n++){let r=t.judgeLog[n];a[(n+1).toString()]=r.jScore,e+=r.jScore}a[0]=e,g(a)}p(t),O(t.judgeComment),z(!0)}))};return Object(x.jsxs)("div",{style:{marginTop:24},className:"ListPage",children:[Object(x.jsx)(S.a,{name:"problemSetSubjectiveJudgeList",columns:[{title:"\u9898\u76ee\u540d",dataIndex:"name",key:"name"},{title:"\u7528\u6237\u540d",dataIndex:"username",key:"username"},{title:"\u63d0\u4ea4\u65f6\u95f4",dataIndex:"tm_answer_submit",key:"tm_answer_submit",render:e=>Object(C.e)(e)},{title:"\u6279\u9605\u72b6\u6001",dataIndex:"hasJudge",key:"hasJudge",render:e=>e?"\u5df2\u6279\u9605":"\u672a\u6279\u9605"},{title:"\u6279\u9605\u4eba",dataIndex:"judgeLock",key:"judgeLock"},{title:"\u64cd\u4f5c",key:"operator",render:e=>Object(x.jsx)(n.a,{type:"link",onClick:()=>{V(e)},children:"\u5f00\u59cb\u6253\u5206"})}],API:e=>w.a.getJudgeList({psid:t,...e}).then((e=>{if(1===N&&0!==e.rows.length&&F)for(let t=0;t<e.rows.length;t++)if(!e.rows[t].hasJudge){V(e.rows[t]);break}return T(!1),Promise.resolve(e)})),size:"small",getForm:e=>Object(x.jsxs)(r.b,{size:30,children:[Object(x.jsx)(i.a.Item,{label:"\u7528\u6237\u540d",name:"username",children:Object(x.jsx)(c.a,{onPressEnter:()=>{e()}})}),Object(x.jsx)(i.a.Item,{label:"\u6279\u9605\u4eba",name:"judgeLock",children:Object(x.jsx)(c.a,{onPressEnter:()=>{e()}})}),Object(x.jsx)(i.a.Item,{label:"\u6279\u9605\u72b6\u6001",name:"hasJudge",children:Object(x.jsx)(o.a,{onChange:e,style:{width:120},allowClear:!0,options:[{value:0,label:"\u672a\u6279\u9605"},{value:1,label:"\u5df2\u6279\u9605"}]})}),Object(x.jsx)(i.a.Item,{label:"\u9898\u76ee",name:"proStr",children:Object(x.jsx)(o.a,{onChange:e,style:{width:240},allowClear:!0,options:J})})]}),useFormBtn:!1}),Object(x.jsx)("div",{style:{marginTop:12,float:"right"},children:Object(x.jsx)("span",{children:"\u63d0\u793a\uff1a\u5982\u679c\u5bf9\u4e3b\u89c2\u9898\u8fdb\u884c\u4e86\u6279\u9605\uff0c\u4f1a\u5bfc\u81f4\u5b66\u751f\u65e0\u6cd5\u518d\u6b21\u63d0\u4ea4\uff0c\u8bf7\u786e\u5b9a\u4f5c\u7b54\u5b8c\u6210\u540e\u518d\u8fdb\u884c\u6279\u9605"})}),Object(x.jsx)(s.a,{title:"\u4e3b\u89c2\u9898\u8bc4\u5206",width:1400,visible:f,maskClosable:!1,onCancel:()=>{z(!1),e.addTableVersion("problemSetSubjectiveJudgeList")},footer:!1,destroyOnClose:!0,children:Object(x.jsxs)(l.a,{gutter:24,children:[Object(x.jsx)(d.a,{span:14,children:Object(x.jsx)(P.a,{description:null===h||void 0===h?void 0:h.description,answer:null===h||void 0===h?void 0:h.answer})}),Object(x.jsx)(d.a,{span:10,children:Object(x.jsx)(u.a,{className:"scorePane",title:"\u5206\u6570\u9762\u677f",children:Object(x.jsxs)("div",{children:[Object(x.jsx)(y,{reviewInfo:b,setReviewInfo:g,scoreModeInfo:h.judgeConfig}),Object(x.jsx)(i.a,{layout:"vertical",style:{marginBottom:32},children:Object(x.jsx)(i.a.Item,{label:"\u8bc4\u9605\u5907\u6ce8",children:Object(x.jsx)(c.a.TextArea,{value:v,onChange:e=>{O(e.target.value)}})})}),Object(x.jsx)("div",{style:{marginTop:12,marginBottom:12},children:Object(x.jsx)(i.a.Item,{label:"\u81ea\u52a8\u6253\u5f00\u4e0b\u4e00\u4e2a",children:Object(x.jsx)(E.a,{value:N,onChange:L,ck:"Auto Next",unck:"Manual Next"})})}),Object(x.jsx)(n.a,{disabled:h.judgeLock_username!==e.username,block:!0,type:"primary",onClick:()=>{if(Object.keys(b).length<h.judgeConfig.children.length+1)return void j.b.error("\u5206\u6570\u4e0d\u5b8c\u6574");let a=[];for(let e=0;e<h.judgeConfig.children.length;e++){let t=h.judgeConfig.children[e];a.push({name:t.name,score:t.score,jScore:b[e+1]})}w.a.updateJudgeInfo({psid:t,gid:h.gid,pid:h.pid,username:h.username,judgeLog:a,judgeComment:v}).then((()=>{T(!0),z(!1),e.addTableVersion("problemSetSubjectiveJudgeList")}))},children:" \u63d0\u4ea4\u5206\u6570 "}),Object(x.jsxs)(n.a,{disabled:h.judgeLock_username!==e.username||0!==Object.keys(b).length,block:!0,style:{marginTop:12},type:"ghost",danger:!0,onClick:()=>{let a=[];for(let e=0;e<h.judgeConfig.children.length;e++){let t=h.judgeConfig.children[e];a.push({name:t.name,score:t.score,jScore:t.score})}w.a.updateJudgeInfo({psid:t,gid:h.gid,pid:h.pid,username:h.username,judgeLog:a,judgeComment:v}).then((()=>{T(!0),z(!1),e.addTableVersion("problemSetSubjectiveJudgeList")}))},children:["\u8bbe\u4e3a",Object(x.jsx)("span",{style:{fontWeight:"bolder"},children:"\u6ee1\u5206"}),"\u5e76\u63d0\u4ea4\u5206\u6570"]}),h.judgeLock_username===e.username&&Object(x.jsx)(n.a,{danger:!0,block:!0,type:"primary",style:{marginTop:12},onClick:()=>{w.a.updateJudgeInfo({psid:t,gid:h.gid,pid:h.pid,username:h.username,judgeLog:[],cancel:1}).then((()=>{z(!1),e.addTableVersion("problemSetSubjectiveJudgeList")}))},children:"\u53d6\u6d88\u8bc4\u6d4b"})]})})})]})})]})}))))}}]);
//# sourceMappingURL=44.208f2439.chunk.js.map