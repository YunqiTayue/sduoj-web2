(this.webpackJsonpsduoj=this.webpackJsonpsduoj||[]).push([[46],{1015:function(e,t,a){"use strict";var c=a(1071),n=a.n(c),s=a(67);const i="https://oj.qd.sdu.edu.cn";var r=a(0),o=a(5);t.a=e=>{const[t,a]=Object(r.useState)(!1),[c,l]=Object(r.useState)(!1);return Object(r.useEffect)((()=>{Object(s.c)(e.text)||t||c===e.text||(a(!0),l(e.text),function(e,t){var a,c,r;(Object(s.c)(e)||Object(s.c)(null===(a=e)||void 0===a?void 0:a.trim()))&&(e=""),e=null===(r=e=null===(c=e)||void 0===c?void 0:c.replaceAll(/`{3}\n([-|0-9a-zA-Z])/g,"```plaintext\n$1"))||void 0===r?void 0:r.replaceAll(/\$\n(.*)\n\$/g,"$ $1 $");const o={mode:"light",cdn:i+"/vditor",emojiPath:i+"/vditor/dist/images/emoji",theme:{path:i+"/vditor/dist/css/content-theme"},hljs:{lineNumber:!1},markdown:{toc:!0,mark:!0,footnotes:!0,autoSpace:!0},math:{inlineDigit:!0,engine:"KaTeX"}};return n.a.preview(document.getElementById(t),e,o)}(e.text,e.id).then((e=>{a(!1)})))}),[e.id,e.text,t]),Object(o.jsx)("div",{id:e.id,style:{overflowY:"hidden"}})}},1302:function(e,t,a){"use strict";var c=a(100),n=a(965),s=a(299),i=a(166),r=a(1085),o=a(1108),l=a(970),d=a(127),j=a.n(d),u=a(1369),b=a(967),m=a(1357),O=a(243),p=a(0),h=a(40),x=a(87),g=a(1004),v=a(298),f=a(5);t.a=Object(v.a)()(Object(h.e)((e=>{var t;const[a,d]=Object(p.useState)(void 0);return Object(p.useEffect)((()=>{c.a.getMyGroup().then((e=>{d(e)}))}),[]),Object(f.jsx)(f.Fragment,{children:Object(f.jsx)("div",{className:"ListPage",children:Object(f.jsx)(g.a,{useList:!0,title:e.t("contestList"),API:async t=>c.a.getContestList({...t,...e.apiProp}),size:"small",getForm:t=>Object(f.jsxs)(n.b,{size:30,children:[void 0===e.useGroup&&void 0!==a&&Object(f.jsx)(s.a.Item,{label:e.t("group"),name:"groupId",children:Object(f.jsxs)(i.a,{onChange:t,style:{width:200},defaultValue:"",children:[Object(f.jsx)(i.a.Option,{value:"",children:e.t("All")}),a.map((e=>Object(f.jsxs)(i.a.Option,{value:e.groupId,children:[e.groupId,": ",e.title]})))]})}),Object(f.jsx)(s.a.Item,{label:e.t("contestRules"),name:"mode",children:Object(f.jsxs)(i.a,{onChange:t,style:{width:80},defaultValue:"",children:[Object(f.jsx)(i.a.Option,{value:"",children:e.t("All")}),Object(f.jsx)(i.a.Option,{value:"acm",children:"ACM"}),Object(f.jsx)(i.a.Option,{value:"ioi",children:"IOI"}),Object(f.jsx)(i.a.Option,{value:"oi",children:"OI"})]})})]}),useFormBtn:!1,defaultPageSize:15,renderItem:t=>Object(f.jsx)(r.b.Item,{children:Object(f.jsx)(r.b.Item.Meta,{avatar:Object(f.jsxs)("div",{style:{},children:[Object(f.jsx)("div",{style:{textAlign:"center",fontSize:"30px"},children:j()(parseInt(t.gmtStart)).format("DD")}),Object(f.jsx)("div",{style:{color:"#aaa"},children:j()(parseInt(t.gmtStart)).format("YYYY-MM")})]}),title:Object(f.jsxs)(f.Fragment,{children:[Object(f.jsx)("a",{type:"text",style:{marginRight:10},onClick:()=>{e.history.push(x.g+"/contest/"+t.contestId)},children:t.contestTitle}),"private"===t.features.openness&&Object(f.jsx)(u.a,{style:{color:"red"}}),"protected"===t.features.openness&&Object(f.jsx)(u.a,{style:{color:"orange"}})]}),description:Object(f.jsxs)(n.b,{size:10,children:["acm"===t.features.mode&&Object(f.jsx)("span",{style:{backgroundColor:"#3676b6",color:"#fff",padding:"0 10px",borderRadius:".75rem"},children:"ACM"}),"ioi"===t.features.mode&&Object(f.jsx)("span",{style:{backgroundColor:"#ea517f",color:"#fff",padding:"0 10px",borderRadius:".75rem"},children:"IOI"}),"oi"===t.features.mode&&Object(f.jsx)("span",{style:{backgroundColor:"#f8df72",color:"#fff",padding:"0 10px",borderRadius:".75rem"},children:"OI"}),Object(f.jsx)(o.a,{type:"vertical"}),Object(f.jsx)("span",{children:j()(parseInt(t.gmtStart)).format("HH:mm:ss")}),Object(f.jsx)(o.a,{type:"vertical"}),Object(f.jsxs)("span",{children:[Object(f.jsx)(b.a,{})," ",Object(O.a)(t.gmtStart,t.gmtEnd)]}),Object(f.jsx)(o.a,{type:"vertical"}),Object(f.jsxs)("span",{children:[Object(f.jsx)(m.a,{})," ",t.participantNum]}),Object(f.jsx)(o.a,{type:"vertical"}),"end"===Object(O.b)(t.gmtStart,t.gmtEnd)&&Object(f.jsx)(l.a,{color:"green",children:e.t("end")}),"running"===Object(O.b)(t.gmtStart,t.gmtEnd)&&Object(f.jsx)(l.a,{color:"orange",children:e.t("running")}),0===t.isPublic&&Object(f.jsx)(l.a,{color:"red",children:e.t("private")})]})})},t.contestId),name:null!==(t=e.name)&&void 0!==t?t:"ContestList"})})})})))},1357:function(e,t,a){"use strict";var c=a(1),n=a(0),s={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M824.2 699.9a301.55 301.55 0 00-86.4-60.4C783.1 602.8 812 546.8 812 484c0-110.8-92.4-201.7-203.2-200-109.1 1.7-197 90.6-197 200 0 62.8 29 118.8 74.2 155.5a300.95 300.95 0 00-86.4 60.4C345 754.6 314 826.8 312 903.8a8 8 0 008 8.2h56c4.3 0 7.9-3.4 8-7.7 1.9-58 25.4-112.3 66.7-153.5A226.62 226.62 0 01612 684c60.9 0 118.2 23.7 161.3 66.8C814.5 792 838 846.3 840 904.3c.1 4.3 3.7 7.7 8 7.7h56a8 8 0 008-8.2c-2-77-33-149.2-87.8-203.9zM612 612c-34.2 0-66.4-13.3-90.5-37.5a126.86 126.86 0 01-37.5-91.8c.3-32.8 13.4-64.5 36.3-88 24-24.6 56.1-38.3 90.4-38.7 33.9-.3 66.8 12.9 91 36.6 24.8 24.3 38.4 56.8 38.4 91.4 0 34.2-13.3 66.3-37.5 90.5A127.3 127.3 0 01612 612zM361.5 510.4c-.9-8.7-1.4-17.5-1.4-26.4 0-15.9 1.5-31.4 4.3-46.5.7-3.6-1.2-7.3-4.5-8.8-13.6-6.1-26.1-14.5-36.9-25.1a127.54 127.54 0 01-38.7-95.4c.9-32.1 13.8-62.6 36.3-85.6 24.7-25.3 57.9-39.1 93.2-38.7 31.9.3 62.7 12.6 86 34.4 7.9 7.4 14.7 15.6 20.4 24.4 2 3.1 5.9 4.4 9.3 3.2 17.6-6.1 36.2-10.4 55.3-12.4 5.6-.6 8.8-6.6 6.3-11.6-32.5-64.3-98.9-108.7-175.7-109.9-110.9-1.7-203.3 89.2-203.3 199.9 0 62.8 28.9 118.8 74.2 155.5-31.8 14.7-61.1 35-86.5 60.4-54.8 54.7-85.8 126.9-87.8 204a8 8 0 008 8.2h56.1c4.3 0 7.9-3.4 8-7.7 1.9-58 25.4-112.3 66.7-153.5 29.4-29.4 65.4-49.8 104.7-59.7 3.9-1 6.5-4.7 6-8.7z"}}]},name:"team",theme:"outlined"},i=a(12),r=function(e,t){return n.createElement(i.a,Object(c.a)(Object(c.a)({},e),{},{ref:t,icon:s}))};r.displayName="TeamOutlined";t.a=n.forwardRef(r)},1369:function(e,t,a){"use strict";var c=a(1),n=a(0),s={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M832 464h-68V240c0-70.7-57.3-128-128-128H388c-70.7 0-128 57.3-128 128v224h-68c-17.7 0-32 14.3-32 32v384c0 17.7 14.3 32 32 32h640c17.7 0 32-14.3 32-32V496c0-17.7-14.3-32-32-32zM540 701v53c0 4.4-3.6 8-8 8h-40c-4.4 0-8-3.6-8-8v-53a48.01 48.01 0 1156 0zm152-237H332V240c0-30.9 25.1-56 56-56h248c30.9 0 56 25.1 56 56v224z"}}]},name:"lock",theme:"filled"},i=a(12),r=function(e,t){return n.createElement(i.a,Object(c.a)(Object(c.a)({},e),{},{ref:t,icon:s}))};r.displayName="LockFilled";t.a=n.forwardRef(r)},1376:function(e,t,a){},1400:function(e,t,a){"use strict";a.r(t);var c=a(40),n=a(975),s=a(970),i=a(253),r=a(0),o=a(100),l=a(83),d=a(67),j=a(1302),u=a(1365),b=a(1366),m=a(66),O=a(302),p=a(965),h=a(1085),x=a(1213),g=a(401),v=(a(1376),a(5));var f=e=>{const[t,a]=Object(r.useState)(),[c,s]=Object(r.useState)(1),[i,o]=Object(r.useState)(24),{t:l}=Object(g.a)();return Object(v.jsx)(v.Fragment,{children:Object(v.jsx)(n.a,{bordered:!1,extra:Object(v.jsxs)(p.b,{children:[Object(v.jsxs)("div",{children:[l("search"),":"]}),Object(v.jsx)(O.a,{onSearch:e=>{a(e),s(1)},style:{width:300}},"search")]}),children:Object(v.jsx)(h.b,{bordered:!1,grid:{gutter:8,column:6,lg:6,xl:6,md:4,sm:4,xs:2},renderItem:e=>Object(v.jsx)(h.b.Item.Meta,{style:{padding:8,margin:6,boxShadow:"0 0 3px rgba(0, 0, 0, 0.3)",borderRadius:"10px"},title:e.username,avatar:Object(v.jsx)(x.a,{email:e.email}),description:e.nickname,className:"group-user-list"}),dataSource:e.members.filter((e=>!!Object(d.c)(t)||(-1!==e.username.indexOf(t)||-1!==e.nickname.indexOf(t)))),pagination:{total:e.members.length,size:"small",pageSizeOptions:["24","48","72"],defaultPageSize:24,hideOnSinglePage:!0,showQuickJumper:!0,showLessItems:!0,current:c,pageSize:i,onChange:(e,t)=>{s(e),o(t)}}})})})},y=a(1004),I=a(60);var S=Object(c.e)((e=>Object(v.jsx)(v.Fragment,{children:Object(v.jsx)(y.a,{name:"ProblemSetList-group-".concat(e.groupId,"-tag-").concat(e.tag),columns:[{title:"ID",dataIndex:"psid"},{title:"\u6807\u9898",dataIndex:"name",render:(t,a)=>Object(v.jsx)(I.a,{type:"text",size:"small",onClick:()=>{e.history.push("/v2/problemSet/".concat(a.psid))},children:t})},{title:"\u5206\u6570",dataIndex:"global_score"}],API:t=>o.a.getProblemSetList({...t,groupId:e.groupId,tag:e.tag}),size:"small"})}))),k=a(1015);t.default=Object(m.b)((e=>({keyValueData:e.CommonReducer.keyValueData})),(e=>({setKeyValueData:(t,a)=>e({type:"setKeyValue",key:t,value:a})})))(Object(c.e)((e=>{const t=e.match.params.groupId,[a,c]=Object(r.useState)(),[m,O]=Object(r.useState)("Announcement"),[p,h]=Object(r.useState)(),[x,y]=Object(r.useState)(),[I,C]=Object(r.useState)(),{t:A}=Object(g.a)();return Object(r.useEffect)((()=>{const a=e.keyValueData["Group-C-activeKey-"+t],n=e.keyValueData["Group-C-activeKey-".concat(t,"-ProblemSet")];o.a.getGroupInfo({groupId:t}).then((e=>{c(e)}));void 0!==a&&O(a),o.a.getProblemSetLabelList({groupId:t}).then((e=>{const a=e.label,c=e.score,s=[];for(let n of a)s.push({key:n,label:n+"(".concat(c[n]).concat(A("point"),")"),children:Object(v.jsx)(S,{groupId:t,tag:n})});const i=n;0!==a.length&&h(void 0!==i?i:a[0]),C(s),y(e.sum)}))}),[t]),Object(v.jsx)(v.Fragment,{children:Object(v.jsx)("div",{style:{textAlign:"center",margin:"0 auto"},children:Object(v.jsx)("div",{style:{textAlign:"left",maxWidth:"1500px",margin:"0 auto"},children:Object(v.jsx)("div",{children:Object(v.jsx)(n.a,{title:Object(v.jsxs)(l.a,{level:2,children:[null===a||void 0===a?void 0:a.title,Object(v.jsxs)("span",{style:{color:"grey"},children:[" (Group ID: ",null===a||void 0===a?void 0:a.groupId,")"]})]}),extra:Object(v.jsxs)("div",{children:[1===(null===a||void 0===a?void 0:a.status)&&Object(v.jsx)(s.a,{color:"green",children:A("ApplicationInProgress")}),2===(null===a||void 0===a?void 0:a.status)&&Object(v.jsx)(u.a,{groupId:null===a||void 0===a?void 0:a.groupId,groupName:null===a||void 0===a?void 0:a.title}),3===(null===a||void 0===a?void 0:a.status)&&Object(v.jsx)(s.a,{color:"orange",children:A("ApplicationRejected")}),(0===(null===a||void 0===a?void 0:a.status)||3===(null===a||void 0===a?void 0:a.status))&&2!==(null===a||void 0===a?void 0:a.openness)&&Object(v.jsx)(b.a,{groupId:null===a||void 0===a?void 0:a.groupId,groupName:null===a||void 0===a?void 0:a.title}),0===(null===a||void 0===a?void 0:a.status)&&2===(null===a||void 0===a?void 0:a.openness)&&Object(v.jsx)(s.a,{color:"red",children:A("private")})]}),style:{marginTop:25},children:Object(v.jsxs)(i.a,{activeKey:m,onChange:a=>{O(a),e.setKeyValueData("Group-C-activeKey-"+t,a)},children:[Object(v.jsx)(i.a.TabPane,{tab:A("Announcement"),children:Object(v.jsx)(k.a,{id:"AnnouncementMD",text:Object(d.c)(null===a||void 0===a?void 0:a.markdown)?A("notAvailable"):null===a||void 0===a?void 0:a.markdown})},"Announcement"),!Object(d.c)(I)&&0!==I.length&&Object(v.jsx)(i.a.TabPane,{tab:"".concat(A("problemSet"),"(").concat(x).concat(A("point"),")"),children:Object(v.jsx)(i.a,{activeKey:p,onChange:a=>{h(a),e.setKeyValueData("Group-C-activeKey-".concat(t,"-ProblemSet"),a)},children:I.map((e=>Object(v.jsx)(i.a.TabPane,{tab:e.label,children:e.children},e.key)))})},"practice"),Object(v.jsx)(i.a.TabPane,{tab:A("contest"),children:Object(v.jsx)(j.a,{name:"GroupInfo-"+t+"-ContestList",apiProp:{groupId:t},useGroup:!1})},"contest"),Object(v.jsx)(i.a.TabPane,{tab:A("user"),children:void 0!==a&&Object(v.jsx)(f,{members:a.members})},"member")]})})})})})})})))}}]);
//# sourceMappingURL=46.f24d3d09.chunk.js.map