(this.webpackJsonpsduoj=this.webpackJsonpsduoj||[]).push([[52],{1082:function(e,t,a){"use strict";var n=a(40),c=a(0),i=a(66),l=a(298),o=a(100),s=a(87),r=a(5);t.a=Object(l.a)()(Object(n.e)((e=>{const t=Object(i.c)(),a=Object(i.d)((e=>e.UserReducer.isLogin));return Object(c.useEffect)((()=>{!1===a&&o.a.getProfile().then((e=>{t({type:"setUserInfo",data:e}),t({type:"userLogin"})})).catch((()=>{e.jump&&e.history.replace(s.g+"/login?to="+e.location.pathname)}))}),[a]),Object(r.jsx)(r.Fragment,{})})))},1213:function(e,t,a){"use strict";var n=a(1431),c=a(1041),i=a.n(c),l=(a(0),a(1230)),o=a(5);t.a=e=>void 0!==e.email&&null!==e.email?Object(o.jsx)(l.a,{shape:e.shape,src:"https://cravatar.cn/avatar/"+i()(e.email)+("number"===typeof e.size?"?s="+e.size:"")+("number"===typeof e.size?"&d=identicon":"?d=identicon"),alt:"\u5934\u50cf",size:e.size}):Object(o.jsx)(l.a,{icon:Object(o.jsx)(n.a,{})})},1238:function(e,t,a){"use strict";t.a=a.p+"static/media/logo.871e1201.png"},1269:function(e,t,a){"use strict";var n=a(0),c=a(166),i=a(965),l=a(265),o=a(261),s=a(66),r=a(127),h=a.n(r),d=(a(1273),a(198)),m=a(5);const{Option:j}=c.a;class p extends n.Component{constructor(e){super(e),this.defLang=Object(d.a)(),l.a.languages.map((e=>{0!==o.a.filter((t=>t.id===e)).length&&0===this.defLang.length&&(this.defLang=e)})),this.changeLang=this.changeLang.bind(this),this.changeLang(this.defLang)}changeLang(e){l.a.changeLanguage(e);const t=o.a.findIndex((t=>t.id===e));this.props.ChangeLanguage(o.b[e],o.a[t].code),h.a.locale(o.a[t].time),localStorage.setItem("language",o.a[t].code)}render(){return Object(m.jsx)(m.Fragment,{children:Object(m.jsxs)(i.b,{children:[Object(m.jsx)("img",{src:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAAAXNSR0IArs4c6QAAAlBJREFUWEfFlo0xBEEQhd9FgAgQASJABIgAESACRIAIEAEiQAROBIgAEVDf1vTpmp2/rVO1XaVOzU/369eve3aikW0ycnwNAbAo6UjSraT3/wI+BMCTpE1JX5KWxgDw44IOAV7Eao52A72lw1tuEzZKRpluWlgyANC60HJhwJnVFq0YAKvvAP/Fo6+S1luc+Vp6ilvucuYsCJP/ryTdh4vTINaqn3nERFu+SeIXa6I8RlQCgDCvQx23ExkdhH18Pkji/GArAYDOneDxPNDtAzCMlsPCnqN/EIgaA3fBG10CxfxiPvsPSSuJqKwB8LmEqKYB3x0wQqaYz/4w0fMEfwn6SLE3w1QDQCvhyAwArJ2GhVz2l26wARb2klYDwCVazQJSAlM9e4gzNRXjwZZiqQPUAoBz9PValAJ9f5xIy+vDtgEJ2J61AqCm9LxZLErvODdVk3OiFQAPy34EnzWo9eY18x1a0+4lGWsBkApuQdk7ce3pzxIQMRpzSdZKABDbReh5C0hLoWompJlNwdxo9iXpiTEHAGeP0YvGG4/AMC80Bg0PWW40+3XEvOFrlgJgb4Bvt1QbEZQ/BhSOS6PZ7wGA853FAPwAYR8h0Wq1rxuAwJhZPBsQpyXkmewB8PXiowL6Zmh7Tfy3UBJq6hoftd27EjNAJkw+gPDbYmT22XLQnaFzYLt5Epb8+1GNIHPAGWbWPbP3oWUO1JLzAsu9DeajJ9R5AXjx5V5GnwCCZrZg3TM9LwAcoRdUjmDtozTHGnrhPOUA/PQ/ANRKVNwfHcAv9/p/IZj3OnUAAAAASUVORK5CYII=",alt:"lang",width:20}),Object(m.jsx)(c.a,{onChange:this.changeLang,defaultValue:this.defLang,bordered:!1,style:{marginLeft:-15},children:o.a.map(((e,t)=>Object(m.jsx)(j,{value:e.id,children:e.name},t.toString())))})]})})}}t.a=Object(s.b)((e=>({lang:e.ConfigReducer.lang})),(e=>({ChangeLanguage:(t,a)=>e({type:"updateLanguage",lang:t,langCode:a})})))(p)},979:function(e,t,a){"use strict";a.r(t);var n=a(0),c=a(1372),i=a(1238),l=a(190),o=a(240),s=a(40),r=a(298),h=a(1431),d=a(1),m={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M832 64H192c-17.7 0-32 14.3-32 32v832c0 17.7 14.3 32 32 32h640c17.7 0 32-14.3 32-32V96c0-17.7-14.3-32-32-32zm-40 824H232V687h97.9c11.6 32.8 32 62.3 59.1 84.7 34.5 28.5 78.2 44.3 123 44.3s88.5-15.7 123-44.3c27.1-22.4 47.5-51.9 59.1-84.7H792v-63H643.6l-5.2 24.7C626.4 708.5 573.2 752 512 752s-114.4-43.5-126.5-103.3l-5.2-24.7H232V136h560v752zM320 341h384c4.4 0 8-3.6 8-8v-48c0-4.4-3.6-8-8-8H320c-4.4 0-8 3.6-8 8v48c0 4.4 3.6 8 8 8zm0 160h384c4.4 0 8-3.6 8-8v-48c0-4.4-3.6-8-8-8H320c-4.4 0-8 3.6-8 8v48c0 4.4 3.6 8 8 8z"}}]},name:"container",theme:"outlined"},j=a(12),p=function(e,t){return n.createElement(j.a,Object(d.a)(Object(d.a)({},e),{},{ref:t,icon:m}))};p.displayName="ContainerOutlined";var g=n.forwardRef(p),b={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M956.9 845.1L896.4 632V168c0-17.7-14.3-32-32-32h-704c-17.7 0-32 14.3-32 32v464L67.9 845.1C60.4 866 75.8 888 98 888h828.8c22.2 0 37.6-22 30.1-42.9zM200.4 208h624v395h-624V208zm228.3 608l8.1-37h150.3l8.1 37H428.7zm224 0l-19.1-86.7c-.8-3.7-4.1-6.3-7.8-6.3H398.2c-3.8 0-7 2.6-7.8 6.3L371.3 816H151l42.3-149h638.2l42.3 149H652.7z"}}]},name:"laptop",theme:"outlined"},u=function(e,t){return n.createElement(j.a,Object(d.a)(Object(d.a)({},e),{},{ref:t,icon:b}))};u.displayName="LaptopOutlined";var O=n.forwardRef(u),v=a(238),x={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M916 210H376c-17.7 0-32 14.3-32 32v236H108c-17.7 0-32 14.3-32 32v272c0 17.7 14.3 32 32 32h540c17.7 0 32-14.3 32-32V546h236c17.7 0 32-14.3 32-32V242c0-17.7-14.3-32-32-32zm-504 68h200v200H412V278zm-68 468H144V546h200v200zm268 0H412V546h200v200zm268-268H680V278h200v200z"}}]},name:"build",theme:"outlined"},f=function(e,t){return n.createElement(j.a,Object(d.a)(Object(d.a)({},e),{},{ref:t,icon:x}))};f.displayName="BuildOutlined";var A=n.forwardRef(f),z={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M856 376H648V168c0-8.8-7.2-16-16-16H168c-8.8 0-16 7.2-16 16v464c0 8.8 7.2 16 16 16h208v208c0 8.8 7.2 16 16 16h464c8.8 0 16-7.2 16-16V392c0-8.8-7.2-16-16-16zm-480 16v188H220V220h360v156H392c-8.8 0-16 7.2-16 16zm204 52v136H444V444h136zm224 360H444V648h188c8.8 0 16-7.2 16-16V444h156v360z"}}]},name:"block",theme:"outlined"},y=function(e,t){return n.createElement(j.a,Object(d.a)(Object(d.a)({},e),{},{ref:t,icon:z}))};y.displayName="BlockOutlined";var w=n.forwardRef(y),H=a(413),V={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M839.2 278.1a32 32 0 00-30.4-22.1H736V144c0-17.7-14.3-32-32-32H320c-17.7 0-32 14.3-32 32v112h-72.8a31.9 31.9 0 00-30.4 22.1L112 502v378c0 17.7 14.3 32 32 32h736c17.7 0 32-14.3 32-32V502l-72.8-223.9zM360 184h304v72H360v-72zm480 656H184V513.4L244.3 328h535.4L840 513.4V840zM652 572H544V464c0-4.4-3.6-8-8-8h-48c-4.4 0-8 3.6-8 8v108H372c-4.4 0-8 3.6-8 8v48c0 4.4 3.6 8 8 8h108v108c0 4.4 3.6 8 8 8h48c4.4 0 8-3.6 8-8V636h108c4.4 0 8-3.6 8-8v-48c0-4.4-3.6-8-8-8z"}}]},name:"medicine-box",theme:"outlined"},C=function(e,t){return n.createElement(j.a,Object(d.a)(Object(d.a)({},e),{},{ref:t,icon:V}))};C.displayName="MedicineBoxOutlined";var L=n.forwardRef(C),E={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M676 565c-50.8 0-92 41.2-92 92s41.2 92 92 92 92-41.2 92-92-41.2-92-92-92zm0 126c-18.8 0-34-15.2-34-34s15.2-34 34-34 34 15.2 34 34-15.2 34-34 34zm204-523H668c0-30.9-25.1-56-56-56h-80c-30.9 0-56 25.1-56 56H264c-17.7 0-32 14.3-32 32v200h-88c-17.7 0-32 14.3-32 32v448c0 17.7 14.3 32 32 32h336c17.7 0 32-14.3 32-32v-16h368c17.7 0 32-14.3 32-32V200c0-17.7-14.3-32-32-32zm-412 64h72v-56h64v56h72v48H468v-48zm-20 616H176V616h272v232zm0-296H176v-88h272v88zm392 240H512V432c0-17.7-14.3-32-32-32H304V240h100v104h336V240h100v552zM704 408v96c0 4.4 3.6 8 8 8h48c4.4 0 8-3.6 8-8v-96c0-4.4-3.6-8-8-8h-48c-4.4 0-8 3.6-8 8zM592 512h48c4.4 0 8-3.6 8-8v-56c0-4.4-3.6-8-8-8h-48c-4.4 0-8 3.6-8 8v56c0 4.4 3.6 8 8 8z"}}]},name:"reconciliation",theme:"outlined"},P=function(e,t){return n.createElement(j.a,Object(d.a)(Object(d.a)({},e),{},{ref:t,icon:E}))};P.displayName="ReconciliationOutlined";var B=n.forwardRef(P),R={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M892 772h-80v-80c0-4.4-3.6-8-8-8h-48c-4.4 0-8 3.6-8 8v80h-80c-4.4 0-8 3.6-8 8v48c0 4.4 3.6 8 8 8h80v80c0 4.4 3.6 8 8 8h48c4.4 0 8-3.6 8-8v-80h80c4.4 0 8-3.6 8-8v-48c0-4.4-3.6-8-8-8zM373.5 498.4c-.9-8.7-1.4-17.5-1.4-26.4 0-15.9 1.5-31.4 4.3-46.5.7-3.6-1.2-7.3-4.5-8.8-13.6-6.1-26.1-14.5-36.9-25.1a127.54 127.54 0 01-38.7-95.4c.9-32.1 13.8-62.6 36.3-85.6 24.7-25.3 57.9-39.1 93.2-38.7 31.9.3 62.7 12.6 86 34.4 7.9 7.4 14.7 15.6 20.4 24.4 2 3.1 5.9 4.4 9.3 3.2 17.6-6.1 36.2-10.4 55.3-12.4 5.6-.6 8.8-6.6 6.3-11.6-32.5-64.3-98.9-108.7-175.7-109.9-110.8-1.7-203.2 89.2-203.2 200 0 62.8 28.9 118.8 74.2 155.5-31.8 14.7-61.1 35-86.5 60.4-54.8 54.7-85.8 126.9-87.8 204a8 8 0 008 8.2h56.1c4.3 0 7.9-3.4 8-7.7 1.9-58 25.4-112.3 66.7-153.5 29.4-29.4 65.4-49.8 104.7-59.7 3.8-1.1 6.4-4.8 5.9-8.8zM824 472c0-109.4-87.9-198.3-196.9-200C516.3 270.3 424 361.2 424 472c0 62.8 29 118.8 74.2 155.5a300.95 300.95 0 00-86.4 60.4C357 742.6 326 814.8 324 891.8a8 8 0 008 8.2h56c4.3 0 7.9-3.4 8-7.7 1.9-58 25.4-112.3 66.7-153.5C505.8 695.7 563 672 624 672c110.4 0 200-89.5 200-200zm-109.5 90.5C690.3 586.7 658.2 600 624 600s-66.3-13.3-90.5-37.5a127.26 127.26 0 01-37.5-91.8c.3-32.8 13.4-64.5 36.3-88 24-24.6 56.1-38.3 90.4-38.7 33.9-.3 66.8 12.9 91 36.6 24.8 24.3 38.4 56.8 38.4 91.4-.1 34.2-13.4 66.3-37.6 90.5z"}}]},name:"usergroup-add",theme:"outlined"},M=function(e,t){return n.createElement(j.a,Object(d.a)(Object(d.a)({},e),{},{ref:t,icon:R}))};M.displayName="UsergroupAddOutlined";var S=n.forwardRef(M),I={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M880 112c-3.8 0-7.7.7-11.6 2.3L292 345.9H128c-8.8 0-16 7.4-16 16.6v299c0 9.2 7.2 16.6 16 16.6h101.7c-3.7 11.6-5.7 23.9-5.7 36.4 0 65.9 53.8 119.5 120 119.5 55.4 0 102.1-37.6 115.9-88.4l408.6 164.2c3.9 1.5 7.8 2.3 11.6 2.3 16.9 0 32-14.2 32-33.2V145.2C912 126.2 897 112 880 112zM344 762.3c-26.5 0-48-21.4-48-47.8 0-11.2 3.9-21.9 11-30.4l84.9 34.1c-2 24.6-22.7 44.1-47.9 44.1zm496 58.4L318.8 611.3l-12.9-5.2H184V417.9h121.9l12.9-5.2L840 203.3v617.4z"}}]},name:"notification",theme:"outlined"},N=function(e,t){return n.createElement(j.a,Object(d.a)(Object(d.a)({},e),{},{ref:t,icon:I}))};N.displayName="NotificationOutlined";var k=n.forwardRef(N),J={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M433.1 657.7a31.8 31.8 0 0051.7 0l210.6-292c3.8-5.3 0-12.7-6.5-12.7H642c-10.2 0-19.9 4.9-25.9 13.3L459 584.3l-71.2-98.8c-6-8.3-15.6-13.3-25.9-13.3H315c-6.5 0-10.3 7.4-6.5 12.7l124.6 172.8z"}},{tag:"path",attrs:{d:"M880 112H144c-17.7 0-32 14.3-32 32v736c0 17.7 14.3 32 32 32h736c17.7 0 32-14.3 32-32V144c0-17.7-14.3-32-32-32zm-40 728H184V184h656v656z"}}]},name:"check-square",theme:"outlined"},Q=function(e,t){return n.createElement(j.a,Object(d.a)(Object(d.a)({},e),{},{ref:t,icon:J}))};Q.displayName="CheckSquareOutlined";var U=n.forwardRef(Q),D=a(87),F=a(5);const _=[{id:0,path:D.g+"/manage/user",title_i18n:"user",exact:!1,icon:Object(F.jsx)(h.a,{}),component:Object(n.lazy)((()=>Promise.all([a.e(0),a.e(2),a.e(1),a.e(5),a.e(36)]).then(a.bind(null,1427))))},{id:11,path:D.g+"/manage/problem/program",exact:!0,title_i18n:"\u9898\u76ee",icon:Object(F.jsx)(g,{}),component:Object(n.lazy)((()=>Promise.all([a.e(0),a.e(2),a.e(1),a.e(11),a.e(30)]).then(a.bind(null,1423))))},{id:21,path:D.g+"/manage/contest",exact:!0,title_i18n:"contest",icon:Object(F.jsx)(O,{}),component:Object(n.lazy)((()=>Promise.all([a.e(0),a.e(2),a.e(1),a.e(4),a.e(26)]).then(a.bind(null,1426))))},{id:3,path:D.g+"/manage/template",title_i18n:"template",exact:!1,icon:Object(F.jsx)(v.a,{}),component:Object(n.lazy)((()=>Promise.all([a.e(0),a.e(1),a.e(7),a.e(8)]).then(a.bind(null,1419)))),children:[{id:31,path:D.g+"/manage/template/io",exact:!0,title_i18n:"ioTemplate",icon:Object(F.jsx)(A,{}),component:Object(n.lazy)((()=>Promise.all([a.e(0),a.e(1),a.e(7),a.e(8)]).then(a.bind(null,1419))))},{id:32,path:D.g+"/manage/template/advanced",exact:!0,title_i18n:"advancedTemplate",icon:Object(F.jsx)(w,{}),component:Object(n.lazy)((()=>Promise.all([a.e(0),a.e(1),a.e(7),a.e(8)]).then(a.bind(null,1419))))}]},{id:9,path:D.g+"/manage/problemSet",title_i18n:"problemSetMod",exact:!1,icon:Object(F.jsx)(H.a,{}),children:[{id:91,path:D.g+"/manage/problemSet/problem_group",exact:!0,title_i18n:"problemGroup",icon:Object(F.jsx)(L,{}),component:Object(n.lazy)((()=>Promise.all([a.e(0),a.e(2),a.e(1),a.e(4),a.e(27)]).then(a.bind(null,1424))))},{id:92,path:D.g+"/manage/problemSet/problem_set",exact:!0,title_i18n:"problemSet",icon:Object(F.jsx)(B,{}),component:Object(n.lazy)((()=>Promise.all([a.e(0),a.e(1),a.e(4),a.e(5),a.e(28)]).then(a.bind(null,1425))))}]},{id:4,path:D.g+"/manage/group",title_i18n:"group",exact:!1,icon:Object(F.jsx)(S,{}),component:Object(n.lazy)((()=>Promise.all([a.e(0),a.e(1),a.e(18),a.e(42)]).then(a.bind(null,1428))))},{id:7,path:D.g+"/manage/announcement",title_i18n:"Announcement",exact:!0,icon:Object(F.jsx)(k,{}),component:Object(n.lazy)((()=>Promise.all([a.e(0),a.e(1),a.e(18),a.e(41)]).then(a.bind(null,1430))))},{id:11,path:D.g+"/manage/sign",exact:!1,title_i18n:"sign",icon:Object(F.jsx)(U,{}),component:Object(n.lazy)((()=>a.e(53).then(a.bind(null,1420))))}];var T=Object(r.a)()(Object(s.e)((e=>{const[t,a]=Object(n.useState)([]);Object(n.useEffect)((()=>{let t=[];const n=a=>{for(let c=0;c<a.length;c++)null!==RegExp(a[c].path).exec(e.location.pathname)&&(t.push(a[c].id.toString()),void 0!==a[c].children&&n(a[c].children))};n(_),a(t)}),[e.location.pathname]);const c=t=>t.map(((t,a)=>void 0===t.children?Object(F.jsx)(l.a.Item,{icon:t.icon,children:Object(F.jsx)(o.b,{to:t.path,children:e.t(t.title_i18n)})},t.id):Object(F.jsx)(l.a.SubMenu,{title:e.t(t.title_i18n),icon:t.icon,children:c(t.children)},t.id)));return Object(F.jsx)(F.Fragment,{children:Object(F.jsx)("div",{children:Object(F.jsx)(l.a,{selectedKeys:t,openKeys:t,onOpenChange:e=>{a([...t,...e])},mode:"inline",theme:"dark",children:c(_)})})})}))),W=a(186),G=a(60),Y=a(965),q=a(1108),Z=a(129),K=a(196),X=a(1213);class $ extends n.Component{render(){return Object(F.jsx)(F.Fragment,{children:Object(F.jsx)(W.a,{overlay:Object(F.jsx)(l.a,{children:Object(F.jsx)(l.a.Item,{icon:Object(F.jsx)(Z.a,{}),onClick:()=>{this.props.history.push(D.g+"/")},children:this.props.t("backToOJ")},"0")}),children:Object(F.jsx)(G.a,{type:"text",size:"large",children:Object(F.jsxs)(Y.b,{children:[Object(F.jsxs)("div",{style:{marginTop:-10},children:[null!==this.props.email&&Object(F.jsxs)(F.Fragment,{children:[Object(F.jsx)(X.a,{email:this.props.email}),Object(F.jsx)(q.a,{type:"vertical"})]}),this.props.username]}),Object(F.jsx)(K.a,{style:{fontSize:10,marginBottom:20}})]})})})})}}var ee=Object(r.a)()(Object(s.e)($)),te=a(1269),ae=a(66);const{Header:ne}=c.a;class ce extends n.Component{render(){return Object(F.jsx)(ne,{className:"site-layout-sub-header-background",style:{minWidth:550,position:"fixed",zIndex:1,width:"100%"},children:Object(F.jsx)("div",{style:{float:"right"},children:Object(F.jsxs)("div",{style:{position:"relative",right:"200px"},children:[Object(F.jsx)(G.a,{type:"text",onClick:()=>{this.props.history.replace("/manage"),window.location.reload()},children:"\u8fd4\u56de\u8001\u7248"}),Object(F.jsx)(te.a,{}),this.props.isLogin&&Object(F.jsx)(ee,{email:this.props.email,username:this.props.username})]})})})}}var ie=Object(ae.b)((e=>{var t,a;const n=e.UserReducer;return{isLogin:n.isLogin,email:null===(t=n.userInfo)||void 0===t?void 0:t.email,username:null===(a=n.userInfo)||void 0===a?void 0:a.username}}),(e=>({})))(Object(r.a)()(Object(s.e)(ce))),le=a(322),oe=a(1082);const{Sider:se,Content:re}=c.a;class he extends n.Component{componentDidMount(){this.props.location.pathname!==D.g+"/manage"&&this.props.location.pathname!==D.g+"/manage/"||0===_.length||this.props.history.push(_[0].path)}render(){const e=t=>t.map((t=>void 0!==t.children?e(t.children):Object(F.jsx)(s.a,{path:t.path,exact:t.exact,component:t.component},t.id)));return Object(F.jsxs)(F.Fragment,{children:[Object(F.jsx)(oe.a,{jump:!0}),Object(F.jsxs)(c.a,{style:{height:"max-content",minHeight:"100%"},children:[Object(F.jsxs)(se,{theme:"dark",style:{position:"fixed",zIndex:50,height:"100vh",overflow:"auto"},children:[Object(F.jsx)("div",{className:"logo",children:Object(F.jsx)("img",{src:i.a,style:{width:"125px",height:"30px"},alt:"SDUOJ-logo"})}),Object(F.jsx)(T,{id:1,roles:["superadmin"]})]}),Object(F.jsxs)(c.a,{style:{minWidth:1200,marginLeft:200},children:[Object(F.jsx)(ie,{}),Object(F.jsx)(re,{style:{backgroundColor:"#ffffff",paddingTop:64,margin:"20px 16px 0",display:"table",height:"auto"},children:Object(F.jsx)("div",{className:"site-layout-background",style:{padding:24},children:Object(F.jsx)(n.Suspense,{fallback:Object(F.jsx)(le.a,{}),children:e(_)})})})]})]})]})}}t.default=Object(r.a)()(Object(s.e)(he))}}]);
//# sourceMappingURL=52.bd609436.chunk.js.map