(this.webpackJsonpsduoj=this.webpackJsonpsduoj||[]).push([[3],{1071:function(e,t,n){e.exports=(()=>{"use strict";var e={54:(e,t,n)=>{n.d(t,{g:()=>r});var r=function(){function e(){}return e.ZWSP="\u200b",e.DROP_EDITOR="application/editor",e.MOBILE_WIDTH=520,e.CLASS_MENU_DISABLED="vditor-menu--disabled",e.EDIT_TOOLBARS=["emoji","headings","bold","italic","strike","link","list","ordered-list","outdent","indent","check","line","quote","code","inline-code","insert-after","insert-before","upload","record","table"],e.CODE_THEME=["abap","algol","algol_nu","arduino","autumn","borland","bw","colorful","dracula","emacs","friendly","fruity","github","igor","lovelace","manni","monokai","monokailight","murphy","native","paraiso-dark","paraiso-light","pastie","perldoc","pygments","rainbow_dash","rrt","solarized-dark","solarized-dark256","solarized-light","swapoff","tango","trac","vim","vs","xcode","ant-design"],e.CODE_LANGUAGES=["mermaid","echarts","mindmap","plantuml","abc","graphviz","flowchart","apache","js","ts","html","markmap","properties","apache","bash","c","csharp","cpp","css","coffeescript","diff","go","xml","http","json","java","javascript","kotlin","less","lua","makefile","markdown","nginx","objectivec","php","php-template","perl","plaintext","python","python-repl","r","ruby","rust","scss","sql","shell","swift","ini","typescript","vbnet","yaml","ada","clojure","dart","erb","fortran","gradle","haskell","julia","julia-repl","lisp","matlab","pgsql","powershell","sql_more","stata","cmake","mathematica","solidity","yul"],e.CDN="https://unpkg.com/vditor@3.9.0",e.MARKDOWN_OPTIONS={autoSpace:!1,codeBlockPreview:!0,fixTermTypo:!1,footnotes:!0,linkBase:"",linkPrefix:"",listStyle:!1,mark:!1,mathBlockPreview:!0,paragraphBeginningSpace:!1,sanitize:!0,toc:!1},e.HLJS_OPTIONS={enable:!0,lineNumber:!1,style:"github"},e.MATH_OPTIONS={engine:"KaTeX",inlineDigit:!1,macros:{}},e.THEME_OPTIONS={current:"light",list:{"ant-design":"Ant Design",dark:"Dark",light:"Light",wechat:"WeChat"},path:e.CDN+"/dist/css/content-theme"},e}()},478:(e,t,n)=>{n.d(t,{Q:()=>o});var r=n(54),i=n(526),a=n(156),o=function(e,t){void 0===e&&(e=document),void 0===t&&(t=r.g.CDN);var n=a.abcRenderAdapter.getElements(e);n.length>0&&(0,i.G)(t+"/dist/js/abcjs/abcjs_basic.min.js","vditorAbcjsScript").then((function(){n.forEach((function(e){e.parentElement.classList.contains("vditor-wysiwyg__pre")||e.parentElement.classList.contains("vditor-ir__marker--pre")||"true"!==e.getAttribute("data-processed")&&(ABCJS.renderAbc(e,a.abcRenderAdapter.getCode(e).trim()),e.style.overflowX="auto",e.setAttribute("data-processed","true"))}))}))}},156:(e,t,n)=>{n.r(t),n.d(t,{mathRenderAdapter:()=>r,mermaidRenderAdapter:()=>i,markmapRenderAdapter:()=>a,mindmapRenderAdapter:()=>o,chartRenderAdapter:()=>s,abcRenderAdapter:()=>c,graphvizRenderAdapter:()=>d,flowchartRenderAdapter:()=>l,plantumlRenderAdapter:()=>m});var r={getCode:function(e){return e.textContent},getElements:function(e){return e.querySelectorAll(".language-math")}},i={getCode:function(e){return e.textContent},getElements:function(e){return e.querySelectorAll(".language-mermaid")}},a={getCode:function(e){return e.textContent},getElements:function(e){return e.querySelectorAll(".language-markmap")}},o={getCode:function(e){return e.getAttribute("data-code")},getElements:function(e){return e.querySelectorAll(".language-mindmap")}},s={getCode:function(e){return e.innerText},getElements:function(e){return e.querySelectorAll(".language-echarts")}},c={getCode:function(e){return e.textContent},getElements:function(e){return e.querySelectorAll(".language-abc")}},d={getCode:function(e){return e.textContent},getElements:function(e){return e.querySelectorAll(".language-graphviz")}},l={getCode:function(e){return e.textContent},getElements:function(e){return e.querySelectorAll(".language-flowchart")}},m={getCode:function(e){return e.textContent},getElements:function(e){return e.querySelectorAll(".language-plantuml")}}},314:(e,t,n)=>{n.d(t,{p:()=>o});var r=n(54),i=n(526),a=n(156),o=function(e,t,n){void 0===e&&(e=document),void 0===t&&(t=r.g.CDN);var o=a.chartRenderAdapter.getElements(e);o.length>0&&(0,i.G)(t+"/dist/js/echarts/echarts.min.js","vditorEchartsScript").then((function(){o.forEach((function(e){if(!e.parentElement.classList.contains("vditor-wysiwyg__pre")&&!e.parentElement.classList.contains("vditor-ir__marker--pre")){var t=a.chartRenderAdapter.getCode(e).trim();if(t)try{if("true"===e.getAttribute("data-processed"))return;var r=JSON.parse(t);echarts.init(e,"dark"===n?"dark":void 0).setOption(r),e.setAttribute("data-processed","true")}catch(t){e.className="vditor-reset--error",e.innerHTML="echarts render error: <br>"+t}}}))}))}},730:(e,t,n)=>{n.d(t,{O:()=>i});var r=n(51),i=function(e){e.querySelectorAll("pre > code").forEach((function(t,n){var i,a,o;if(!t.parentElement.classList.contains("vditor-wysiwyg__pre")&&!t.parentElement.classList.contains("vditor-ir__marker--pre")&&!(t.classList.contains("language-mermaid")||t.classList.contains("language-flowchart")||t.classList.contains("language-echarts")||t.classList.contains("language-mindmap")||t.classList.contains("language-plantuml")||t.classList.contains("language-markmap")||t.classList.contains("language-abc")||t.classList.contains("language-graphviz")||t.classList.contains("language-math")||t.style.maxHeight.indexOf("px")>-1||e.classList.contains("vditor-preview")&&n>5)){var s=t.innerText;if(t.classList.contains("highlight-chroma")){var c=document.createElement("code");c.innerHTML=t.innerHTML,c.querySelectorAll(".highlight-ln").forEach((function(e){e.remove()})),s=c.innerText}else s.endsWith("\n")&&(s=s.substr(0,s.length-1));var d='<svg><use xlink:href="#vditor-icon-copy"></use></svg>';document.getElementById("vditorIconScript")||(d='<svg viewBox="0 0 32 32"><path d="M22.545-0h-17.455c-1.6 0-2.909 1.309-2.909 2.909v20.364h2.909v-20.364h17.455v-2.909zM26.909 5.818h-16c-1.6 0-2.909 1.309-2.909 2.909v20.364c0 1.6 1.309 2.909 2.909 2.909h16c1.6 0 2.909-1.309 2.909-2.909v-20.364c0-1.6-1.309-2.909-2.909-2.909zM26.909 29.091h-16v-20.364h16v20.364z"></path></svg>');var l=document.createElement("div");l.className="vditor-copy",l.innerHTML='<span aria-label="'+((null===(i=window.VditorI18n)||void 0===i?void 0:i.copy)||"\u590d\u5236")+"\"\nonmouseover=\"this.setAttribute('aria-label', '"+((null===(a=window.VditorI18n)||void 0===a?void 0:a.copy)||"\u590d\u5236")+"')\"\nclass=\"vditor-tooltipped vditor-tooltipped__w\"\nonclick=\"this.previousElementSibling.select();document.execCommand('copy');this.setAttribute('aria-label', '"+((null===(o=window.VditorI18n)||void 0===o?void 0:o.copied)||"\u5df2\u590d\u5236")+"')\">"+d+"</span>";var m=document.createElement("textarea");m.value=(0,r.X)(s),l.insertAdjacentElement("afterbegin",m),t.before(l),t.style.maxHeight=window.outerHeight-40+"px"}}))}},66:(e,t,n)=>{n.d(t,{P:()=>o});var r=n(54),i=n(526),a=n(156),o=function(e,t){void 0===t&&(t=r.g.CDN);var n=a.flowchartRenderAdapter.getElements(e);0!==n.length&&(0,i.G)(t+"/dist/js/flowchart.js/flowchart.min.js","vditorFlowchartScript").then((function(){n.forEach((function(e){if("true"!==e.getAttribute("data-processed")){var t=flowchart.parse(a.flowchartRenderAdapter.getCode(e));e.innerHTML="",t.drawSVG(e),e.setAttribute("data-processed","true")}}))}))}},218:(e,t,n)=>{n.d(t,{v:()=>o});var r=n(54),i=n(526),a=n(156),o=function(e,t){void 0===t&&(t=r.g.CDN);var n=a.graphvizRenderAdapter.getElements(e);0!==n.length&&(0,i.G)(t+"/dist/js/graphviz/viz.js","vditorGraphVizScript").then((function(){n.forEach((function(e){var t=a.graphvizRenderAdapter.getCode(e);if(!e.parentElement.classList.contains("vditor-wysiwyg__pre")&&!e.parentElement.classList.contains("vditor-ir__marker--pre")&&"true"!==e.getAttribute("data-processed")&&""!==t.trim()){try{var n=new Blob(["importScripts('"+document.getElementById("vditorGraphVizScript").src.replace("viz.js","full.render.js")+"');"],{type:"application/javascript"}),r=(window.URL||window.webkitURL).createObjectURL(n),i=new Worker(r);new Viz({worker:i}).renderSVGElement(t).then((function(t){e.innerHTML=t.outerHTML})).catch((function(t){e.innerHTML="graphviz render error: <br>"+t,e.className="vditor-reset--error"}))}catch(e){console.error("graphviz error",e)}e.setAttribute("data-processed","true")}}))}))}},702:(e,t,n)=>{n.d(t,{s:()=>o});var r=n(54),i=n(526),a=n(578),o=function(e,t,n){void 0===t&&(t=document),void 0===n&&(n=r.g.CDN);var o=e.style;r.g.CODE_THEME.includes(o)||(o="github");var s=document.getElementById("vditorHljsStyle"),c=n+"/dist/js/highlight.js/styles/"+o+".css";s&&s.href!==c&&s.remove(),(0,a.c)(n+"/dist/js/highlight.js/styles/"+o+".css","vditorHljsStyle"),!1!==e.enable&&0!==t.querySelectorAll("pre > code").length&&(0,i.G)(n+"/dist/js/highlight.js/highlight.pack.js","vditorHljsScript").then((function(){(0,i.G)(n+"/dist/js/highlight.js/solidity.min.js","vditorHljsSolidityScript").then((function(){(0,i.G)(n+"/dist/js/highlight.js/yul.min.js","vditorHljsYulScript").then((function(){t.querySelectorAll("pre > code").forEach((function(t){if(!t.parentElement.classList.contains("vditor-ir__marker--pre")&&!t.parentElement.classList.contains("vditor-wysiwyg__pre")&&!(t.classList.contains("language-mermaid")||t.classList.contains("language-flowchart")||t.classList.contains("language-echarts")||t.classList.contains("language-mindmap")||t.classList.contains("language-plantuml")||t.classList.contains("language-abc")||t.classList.contains("language-graphviz")||t.classList.contains("language-math"))&&(hljs.highlightElement(t),e.lineNumber)){t.classList.add("vditor-linenumber");var n=t.querySelector(".vditor-linenumber__temp");n||((n=document.createElement("div")).className="vditor-linenumber__temp",t.insertAdjacentElement("beforeend",n));var r=getComputedStyle(t).whiteSpace,i=!1;"pre-wrap"!==r&&"pre-line"!==r||(i=!0);var a="",o=t.textContent.split(/\r\n|\r|\n/g);o.pop(),o.map((function(e){var t="";i&&(n.textContent=e||"\n",t=' style="height:'+n.getBoundingClientRect().height+'px"'),a+="<span"+t+"></span>"})),n.style.display="none",a='<span class="vditor-linenumber__rows">'+a+"</span>",t.insertAdjacentHTML("beforeend",a)}}))}))}))}))}},563:(e,t,n)=>{n.d(t,{K:()=>c});var r=n(54),i=n(526),a=n(156),o={},s=function(e,t){var n=window.markmap,r=n.Transformer,i=n.Markmap,a=n.deriveOptions,s=(n.globalCSS,new r);e.innerHTML='<svg style="width:100%"></svg>';var c=e.firstChild,d=i.create(c,null),l=function(e,t){var n=e.transform(t),r=Object.keys(n.features).filter((function(e){return!o[e]}));r.forEach((function(e){o[e]=!0}));var i=e.getAssets(r),a=i.styles,s=i.scripts,c=window.markmap;return a&&c.loadCSS(a),s&&c.loadJS(s),n}(s,t),m=l.root,u=l.frontmatter,p=a(null==u?void 0:u.markmap);d.setData(m,p),d.fit()},c=function(e,t,n){void 0===t&&(t=r.g.CDN);var o=a.markmapRenderAdapter.getElements(e);0!==o.length&&(0,i.G)(t+"/src/js/markmap/markmap.min.js","vditorMermaidScript").then((function(){o.forEach((function(e){var t=a.markmapRenderAdapter.getCode(e);if("true"!==e.getAttribute("data-processed")&&""!==t.trim()){var n=document.createElement("div");n.className="language-markmap",e.parentNode.appendChild(n),s(n,t),"CODE"==e.parentNode.childNodes[0].nodeName&&e.parentNode.removeChild(e.parentNode.childNodes[0])}}))}))}},466:(e,t,n)=>{n.d(t,{H:()=>c});var r=n(54),i=n(526),a=n(578),o=n(51),s=n(156),c=function(e,t){var n=s.mathRenderAdapter.getElements(e);if(0!==n.length){var c={cdn:r.g.CDN,math:{engine:"KaTeX",inlineDigit:!1,macros:{}}};if(t&&t.math&&(t.math=Object.assign({},c.math,t.math)),"KaTeX"===(t=Object.assign({},c,t)).math.engine)(0,a.c)(t.cdn+"/dist/js/katex/katex.min.css","vditorKatexStyle"),(0,i.G)(t.cdn+"/dist/js/katex/katex.min.js","vditorKatexScript").then((function(){(0,i.G)(t.cdn+"/dist/js/katex/mhchem.min.js","vditorKatexChemScript").then((function(){n.forEach((function(e){if(!e.parentElement.classList.contains("vditor-wysiwyg__pre")&&!e.parentElement.classList.contains("vditor-ir__marker--pre")&&!e.getAttribute("data-math")){var t=(0,o.X)(s.mathRenderAdapter.getCode(e));e.setAttribute("data-math",t);try{e.innerHTML=katex.renderToString(t,{displayMode:"DIV"===e.tagName,output:"html"})}catch(t){e.innerHTML=t.message,e.className="language-math vditor-reset--error"}e.addEventListener("copy",(function(e){e.stopPropagation(),e.preventDefault();var t=e.currentTarget.closest(".language-math");e.clipboardData.setData("text/html",t.innerHTML),e.clipboardData.setData("text/plain",t.getAttribute("data-math"))}))}}))}))}));else if("MathJax"===t.math.engine){window.MathJax||(window.MathJax={loader:{paths:{mathjax:t.cdn+"/dist/js/mathjax"}},startup:{typeset:!1},tex:{macros:t.math.macros}}),(0,i.J)(t.cdn+"/dist/js/mathjax/tex-svg-full.js","protyleMathJaxScript");var d=function(e,t){var n=(0,o.X)(e.textContent).trim(),r=window.MathJax.getMetricsFor(e);r.display="DIV"===e.tagName,window.MathJax.tex2svgPromise(n,r).then((function(r){e.innerHTML="",e.setAttribute("data-math",n),e.append(r),window.MathJax.startup.document.clear(),window.MathJax.startup.document.updateDocument();var i=r.querySelector('[data-mml-node="merror"]');i&&""!==i.textContent.trim()&&(e.innerHTML=i.textContent.trim(),e.className="vditor-reset--error"),t&&t()}))};window.MathJax.startup.promise.then((function(){for(var e=[],t=function(t){var r=n[t];r.parentElement.classList.contains("vditor-wysiwyg__pre")||r.parentElement.classList.contains("vditor-ir__marker--pre")||r.getAttribute("data-math")||!(0,o.X)(r.textContent).trim()||e.push((function(e){t===n.length-1?d(r):d(r,e)}))},r=0;r<n.length;r++)t(r);!function(e){if(0!==e.length){var t=0,n=e[e.length-1],r=function(){var i=e[t++];i===n?i():i(r)};r()}}(e)}))}}}},554:(e,t,n)=>{n.d(t,{Y:()=>r});var r=function(e){e&&e.querySelectorAll("a").forEach((function(e){var t=e.getAttribute("href");t&&(t.match(/^.+.(mp4|m4v|ogg|ogv|webm)$/)?function(e,t){e.insertAdjacentHTML("afterend",'<video controls="controls" src="'+t+'"></video>'),e.remove()}(e,t):t.match(/^.+.(mp3|wav|flac)$/)?function(e,t){e.insertAdjacentHTML("afterend",'<audio controls="controls" src="'+t+'"></audio>'),e.remove()}(e,t):function(e,t){var n=t.match(/\/\/(?:www\.)?(?:youtu\.be\/|youtube\.com\/(?:embed\/|v\/|watch\?v=|watch\?.+&v=))([\w|-]{11})(?:(?:[\?&]t=)(\S+))?/),r=t.match(/\/\/v\.youku\.com\/v_show\/id_(\w+)=*\.html/),i=t.match(/\/\/v\.qq\.com\/x\/cover\/.*\/([^\/]+)\.html\??.*/),a=t.match(/(?:www\.|\/\/)coub\.com\/view\/(\w+)/),o=t.match(/(?:www\.|\/\/)facebook\.com\/([^\/]+)\/videos\/([0-9]+)/),s=t.match(/.+dailymotion.com\/(video|hub)\/(\w+)\?/),c=t.match(/(?:www\.|\/\/)bilibili\.com\/video\/(\w+)/),d=t.match(/(?:www\.|\/\/)ted\.com\/talks\/(\w+)/);n&&11===n[1].length?(e.insertAdjacentHTML("afterend",'<iframe class="iframe__video" src="//www.youtube.com/embed/'+n[1]+(n[2]?"?start="+n[2]:"")+'"></iframe>'),e.remove()):r&&r[1]?(e.insertAdjacentHTML("afterend",'<iframe class="iframe__video" src="//player.youku.com/embed/'+r[1]+'"></iframe>'),e.remove()):i&&i[1]?(e.insertAdjacentHTML("afterend",'<iframe class="iframe__video" src="https://v.qq.com/txp/iframe/player.html?vid='+i[1]+'"></iframe>'),e.remove()):a&&a[1]?(e.insertAdjacentHTML("afterend",'<iframe class="iframe__video"\n src="//coub.com/embed/'+a[1]+'?muted=false&autostart=false&originalSize=true&startWithHD=true"></iframe>'),e.remove()):o&&o[0]?(e.insertAdjacentHTML("afterend",'<iframe class="iframe__video"\n src="https://www.facebook.com/plugins/video.php?href='+encodeURIComponent(o[0])+'"></iframe>'),e.remove()):s&&s[2]?(e.insertAdjacentHTML("afterend",'<iframe class="iframe__video"\n src="https://www.dailymotion.com/embed/video/'+s[2]+'"></iframe>'),e.remove()):c&&c[1]?(e.insertAdjacentHTML("afterend",'<iframe class="iframe__video"\n src="//player.bilibili.com/player.html?bvid='+c[1]+'"></iframe>'),e.remove()):d&&d[1]&&(e.insertAdjacentHTML("afterend",'<iframe class="iframe__video" src="//embed.ted.com/talks/'+d[1]+'"></iframe>'),e.remove())}(e,t))}))}},40:(e,t,n)=>{n.d(t,{i:()=>o});var r=n(54),i=n(526),a=n(156),o=function(e,t,n){void 0===t&&(t=r.g.CDN);var o=a.mermaidRenderAdapter.getElements(e);0!==o.length&&(0,i.G)(t+"/dist/js/mermaid/mermaid.min.js","vditorMermaidScript").then((function(){var e={securityLevel:"loose",altFontFamily:"sans-serif",fontFamily:"sans-serif",startOnLoad:!1,flowchart:{htmlLabels:!0,useMaxWidth:!0},sequence:{useMaxWidth:!0,diagramMarginX:8,diagramMarginY:8,boxMargin:8},gantt:{leftPadding:75,rightPadding:20}};"dark"===n&&(e.theme="dark"),mermaid.initialize(e),o.forEach((function(e){var t=a.mermaidRenderAdapter.getCode(e);"true"!==e.getAttribute("data-processed")&&""!==t.trim()&&(mermaid.init(void 0,e),e.setAttribute("data-processed","true"))}))}))}},749:(e,t,n)=>{n.d(t,{P:()=>o});var r=n(54),i=n(526),a=n(156),o=function(e,t,n){void 0===e&&(e=document),void 0===t&&(t=r.g.CDN);var o=a.mindmapRenderAdapter.getElements(e);o.length>0&&(0,i.G)(t+"/dist/js/echarts/echarts.min.js","vditorEchartsScript").then((function(){o.forEach((function(e){if(!e.parentElement.classList.contains("vditor-wysiwyg__pre")&&!e.parentElement.classList.contains("vditor-ir__marker--pre")){var t=a.mindmapRenderAdapter.getCode(e);if(t)try{if("true"===e.getAttribute("data-processed"))return;echarts.init(e,"dark"===n?"dark":void 0).setOption({series:[{data:[JSON.parse(decodeURIComponent(t))],initialTreeDepth:-1,itemStyle:{borderWidth:0,color:"#4285f4"},label:{backgroundColor:"#f6f8fa",borderColor:"#d1d5da",borderRadius:5,borderWidth:.5,color:"#586069",lineHeight:20,offset:[-5,0],padding:[0,5],position:"insideRight"},lineStyle:{color:"#d1d5da",width:1},roam:!0,symbol:function(e,t){var n;return(null===(n=null==t?void 0:t.data)||void 0===n?void 0:n.children)?"circle":"path://"},type:"tree"}],tooltip:{trigger:"item",triggerOn:"mousemove"}}),e.setAttribute("data-processed","true")}catch(t){e.className="vditor-reset--error",e.innerHTML="mindmap render error: <br>"+t}}}))}))}},818:(e,t,n)=>{n.d(t,{k:()=>a});var r=n(64),i=n(466),a=function(e,t,n){var a="",o=[];if(Array.from(e.children).forEach((function(e,t){if((0,r.W)(e)){if(n){var i=e.id.lastIndexOf("_");e.id=e.id.substring(0,-1===i?void 0:i)+"_"+t}o.push(e.id),a+=e.outerHTML.replace("<wbr>","")}})),""===a)return t.innerHTML="","";var s=document.createElement("div");if(n)n.lute.SetToC(!0),"wysiwyg"!==n.currentMode||n.preview.element.contains(e)?"ir"!==n.currentMode||n.preview.element.contains(e)?s.innerHTML=n.lute.HTML2VditorDOM("<p>[ToC]</p>"+a):s.innerHTML=n.lute.SpinVditorIRDOM("<p>[ToC]</p>"+a):s.innerHTML=n.lute.SpinVditorDOM("<p>[ToC]</p>"+a),n.lute.SetToC(n.options.preview.markdown.toc);else{t.classList.add("vditor-outline");var c=Lute.New();c.SetToC(!0),s.innerHTML=c.HTML2VditorDOM("<p>[ToC]</p>"+a)}var d=s.firstElementChild.querySelectorAll("li > span[data-target-id]");return d.forEach((function(e,t){if(e.nextElementSibling&&"UL"===e.nextElementSibling.tagName){var n="<svg class='vditor-outline__action'><use xlink:href='#vditor-icon-down'></use></svg>";document.getElementById("vditorIconScript")||(n='<svg class="vditor-outline__action" viewBox="0 0 32 32"><path d="M3.76 6.12l12.24 12.213 12.24-12.213 3.76 3.76-16 16-16-16 3.76-3.76z"></path></svg>'),e.innerHTML=n+"<span>"+e.innerHTML+"</span>"}else e.innerHTML="<svg></svg><span>"+e.innerHTML+"</span>";e.setAttribute("data-target-id",o[t])})),a=s.firstElementChild.innerHTML,0===d.length?(t.innerHTML="",a):(t.innerHTML=a,n&&(0,i.H)(t,{cdn:n.options.cdn,math:n.options.preview.math}),t.firstElementChild.addEventListener("click",(function(r){for(var i=r.target;i&&!i.isEqualNode(t);){if(i.classList.contains("vditor-outline__action")){i.classList.contains("vditor-outline__action--close")?(i.classList.remove("vditor-outline__action--close"),i.parentElement.nextElementSibling.setAttribute("style","display:block")):(i.classList.add("vditor-outline__action--close"),i.parentElement.nextElementSibling.setAttribute("style","display:none")),r.preventDefault(),r.stopPropagation();break}if(i.getAttribute("data-target-id")){r.preventDefault(),r.stopPropagation();var a=document.getElementById(i.getAttribute("data-target-id"));if(!a)return;if(n)if("auto"===n.options.height){var o=a.offsetTop+n.element.offsetTop;n.options.toolbarConfig.pin||(o+=n.toolbar.element.offsetHeight),window.scrollTo(window.scrollX,o)}else n.element.offsetTop<window.scrollY&&window.scrollTo(window.scrollX,n.element.offsetTop),n.preview.element.contains(e)?e.parentElement.scrollTop=a.offsetTop:e.scrollTop=a.offsetTop;else window.scrollTo(window.scrollX,a.offsetTop);break}i=i.parentElement}})),a)}},408:(e,t,n)=>{n.d(t,{B:()=>o});var r=n(54),i=n(526),a=n(156),o=function(e,t){void 0===e&&(e=document),void 0===t&&(t=r.g.CDN);var n=a.plantumlRenderAdapter.getElements(e);0!==n.length&&(0,i.G)(t+"/dist/js/plantuml/plantuml-encoder.min.js","vditorPlantumlScript").then((function(){n.forEach((function(e){if(!e.parentElement.classList.contains("vditor-wysiwyg__pre")&&!e.parentElement.classList.contains("vditor-ir__marker--pre")){var t=a.plantumlRenderAdapter.getCode(e).trim();if(t)try{e.innerHTML='<img src="http://www.plantuml.com/plantuml/svg/~1'+plantumlEncoder.encode(t)+'">'}catch(t){e.className="vditor-reset--error",e.innerHTML="plantuml render error: <br>"+t}}}))}))}},895:(e,t,n)=>{n.d(t,{X:()=>r});var r=function(e){var t=Lute.New();return t.PutEmojis(e.emojis),t.SetEmojiSite(e.emojiSite),t.SetHeadingAnchor(e.headingAnchor),t.SetInlineMathAllowDigitAfterOpenMarker(e.inlineMathDigit),t.SetAutoSpace(e.autoSpace),t.SetToC(e.toc),t.SetFootnotes(e.footnotes),t.SetFixTermTypo(e.fixTermTypo),t.SetVditorCodeBlockPreview(e.codeBlockPreview),t.SetVditorMathBlockPreview(e.mathBlockPreview),t.SetSanitize(e.sanitize),t.SetChineseParagraphBeginningSpace(e.paragraphBeginningSpace),t.SetRenderListStyle(e.listStyle),t.SetLinkBase(e.linkBase),t.SetLinkPrefix(e.linkPrefix),t.SetMark(e.mark),e.lazyLoadImage&&t.SetImageLazyLoading(e.lazyLoadImage),t}},863:(e,t,n)=>{n.d(t,{E:()=>r});var r=function(e,t,n){void 0===t&&(t="zh_CN"),void 0===n&&(n="classic");var r=e.getBoundingClientRect();document.body.insertAdjacentHTML("beforeend",'<div class="vditor vditor-img'+("dark"===n?" vditor--dark":"")+'">\n    <div class="vditor-img__bar">\n      <span class="vditor-img__btn" data-deg="0">\n        <svg><use xlink:href="#vditor-icon-redo"></use></svg>\n        '+window.VditorI18n.spin+"\n      </span>\n      <span class=\"vditor-img__btn\"  onclick=\"this.parentElement.parentElement.outerHTML = '';document.body.style.overflow = ''\">\n        X &nbsp;"+window.VditorI18n.close+'\n      </span>\n    </div>\n    <div class="vditor-img__img" onclick="this.parentElement.outerHTML = \'\';document.body.style.overflow = \'\'">\n      <img style="width: '+e.width+"px;height:"+e.height+"px;transform: translate3d("+r.left+"px, "+(r.top-36)+'px, 0)" src="'+e.getAttribute("src")+'">\n    </div>\n</div>'),document.body.style.overflow="hidden";var i=document.querySelector(".vditor-img img"),a="translate3d("+Math.max(0,window.innerWidth-e.naturalWidth)/2+"px, "+Math.max(0,window.innerHeight-36-e.naturalHeight)/2+"px, 0)";setTimeout((function(){i.setAttribute("style","transition: transform .3s ease-in-out;transform: "+a),setTimeout((function(){i.parentElement.scrollTo((i.parentElement.scrollWidth-i.parentElement.clientWidth)/2,(i.parentElement.scrollHeight-i.parentElement.clientHeight)/2)}),400)}));var o=document.querySelector(".vditor-img__btn");o.addEventListener("click",(function(){var t=parseInt(o.getAttribute("data-deg"),10)+90;t/90%2==1&&e.naturalWidth>i.parentElement.clientHeight?i.style.transform="translate3d("+Math.max(0,window.innerWidth-e.naturalWidth)/2+"px, "+(e.naturalWidth/2-e.naturalHeight/2)+"px, 0) rotateZ("+t+"deg)":i.style.transform=a+" rotateZ("+t+"deg)",o.setAttribute("data-deg",t.toString()),setTimeout((function(){i.parentElement.scrollTo((i.parentElement.scrollWidth-i.parentElement.clientWidth)/2,(i.parentElement.scrollHeight-i.parentElement.clientHeight)/2)}),400)}))}},312:(e,t,n)=>{n.d(t,{Y:()=>a});var r=n(54),i=n(578),a=function(e,t){void 0===t&&(t=r.g.CDN),r.g.CODE_THEME.includes(e)||(e="github");var n=document.getElementById("vditorHljsStyle"),a=t+"/dist/js/highlight.js/styles/"+e+".css";n?n.href!==a&&(n.remove(),(0,i.c)(a,"vditorHljsStyle")):(0,i.c)(a,"vditorHljsStyle")}},227:(e,t,n)=>{n.d(t,{Z:()=>i});var r=n(578),i=function(e,t){if(e&&t){var n=document.getElementById("vditorContentTheme"),i=t+"/"+e+".css";n?n.getAttribute("href")!==i&&(n.remove(),(0,r.c)(i,"vditorContentTheme")):(0,r.c)(i,"vditorContentTheme")}}},526:(e,t,n)=>{n.d(t,{J:()=>r,G:()=>i});var r=function(e,t){if(document.getElementById(t))return!1;var n=new XMLHttpRequest;n.open("GET",e,!1),n.setRequestHeader("Accept","text/javascript, application/javascript, application/ecmascript, application/x-ecmascript, */*; q=0.01"),n.send("");var r=document.createElement("script");r.type="text/javascript",r.text=n.responseText,r.id=t,document.head.appendChild(r)},i=function(e,t){return new Promise((function(n,r){if(document.getElementById(t))return n(),!1;var i=document.createElement("script");i.src=e,i.async=!0,document.head.appendChild(i),i.onload=function(){if(document.getElementById(t))return i.remove(),n(),!1;i.id=t,n()}}))}},578:(e,t,n)=>{n.d(t,{c:()=>r});var r=function(e,t){if(!document.getElementById(t)){var n=document.createElement("link");n.id=t,n.rel="stylesheet",n.type="text/css",n.href=e,document.getElementsByTagName("head")[0].appendChild(n)}}},51:(e,t,n)=>{n.d(t,{X:()=>r});var r=function(e){return e.replace(/\u00a0/g," ")}},827:(e,t,n)=>{n.d(t,{lG:()=>r,fb:()=>i});var r=function(e,t){if(!e)return!1;3===e.nodeType&&(e=e.parentElement);for(var n=e,r=!1;n&&!r&&!n.classList.contains("vditor-reset");)n.nodeName===t?r=!0:n=n.parentElement;return r&&n},i=function(e,t){if(!e)return!1;3===e.nodeType&&(e=e.parentElement);for(var n=e,r=!1;n&&!r&&!n.classList.contains("vditor-reset");)n.classList.contains(t)?r=!0:n=n.parentElement;return r&&n}},64:(e,t,n)=>{n.d(t,{W:()=>r});var r=function(e){var t=function(e,t){if(!e)return!1;3===e.nodeType&&(e=e.parentElement);for(var n=e,r=!1;n&&!r&&!n.classList.contains("vditor-reset");)0===n.nodeName.indexOf(t)?r=!0:n=n.parentElement;return r&&n}(e,"H");return!(!t||2!==t.tagName.length||"HR"===t.tagName)&&t}},640:(e,t,n)=>{n.d(t,{T:()=>r});var r=function(){for(var e=[],t=0;t<arguments.length;t++)e[t]=arguments[t];for(var n={},i=function(e){for(var t in e)e.hasOwnProperty(t)&&("[object Object]"===Object.prototype.toString.call(e[t])?n[t]=r(n[t],e[t]):n[t]=e[t])},a=0;a<e.length;a++)i(e[a]);return n}},393:(e,t,n)=>{n.d(t,{Hc:()=>r}),n(54);var r=function(e){var t=window.getSelection();t.removeAllRanges(),t.addRange(e)}}},t={};function n(r){var i=t[r];if(void 0!==i)return i.exports;var a=t[r]={exports:{}};return e[r](a,a.exports,n),a.exports}n.d=(e,t)=>{for(var r in t)n.o(t,r)&&!n.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:t[r]})},n.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),n.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})};var r={};return(()=>{n.d(r,{default:()=>C});var e=n(478),t=n(156),i=n(314),a=n(730),o=n(66),s=n(218),c=n(702),d=function(e){void 0===e&&(e=document);var t=function(e){var t=document.createElement("img");t.src=e.getAttribute("data-src"),t.addEventListener("load",(function(){e.getAttribute("style")||e.getAttribute("class")||e.getAttribute("width")||e.getAttribute("height")||t.naturalHeight>t.naturalWidth&&t.naturalWidth/t.naturalHeight<document.querySelector(".vditor-reset").clientWidth/(window.innerHeight-40)&&t.naturalHeight>window.innerHeight-40&&(e.style.height=window.innerHeight-40+"px"),e.src=t.src})),e.removeAttribute("data-src")};if(!("IntersectionObserver"in window))return e.querySelectorAll("img").forEach((function(e){e.getAttribute("data-src")&&t(e)})),!1;window.vditorImageIntersectionObserver?(window.vditorImageIntersectionObserver.disconnect(),e.querySelectorAll("img").forEach((function(e){window.vditorImageIntersectionObserver.observe(e)}))):(window.vditorImageIntersectionObserver=new IntersectionObserver((function(e){e.forEach((function(e){(void 0===e.isIntersecting?0!==e.intersectionRatio:e.isIntersecting)&&e.target.getAttribute("data-src")&&t(e.target)}))})),e.querySelectorAll("img").forEach((function(e){window.vditorImageIntersectionObserver.observe(e)})))},l=n(466),m=n(554),u=n(40),p=n(563),h=n(749),v=n(818),g=n(408),f=n(54),w=n(227),y=n(526),b=n(827),S=n(640),E=n(895),T=n(393),L=function(e,t){if(void 0===t&&(t="zh_CN"),"undefined"!=typeof speechSynthesis&&"undefined"!=typeof SpeechSynthesisUtterance){var n='<svg><use xlink:href="#vditor-icon-play"></use></svg>',r='<svg><use xlink:href="#vditor-icon-pause"></use></svg>';document.getElementById("vditorIconScript")||(n='<svg viewBox="0 0 32 32"><path d="M3.436 0l25.128 16-25.128 16v-32z"></path></svg>',r='<svg viewBox="0 0 32 32"><path d="M20.617 0h9.128v32h-9.128v-32zM2.255 32v-32h9.128v32h-9.128z"></path></svg>');var i=document.querySelector(".vditor-speech");if(!i){(i=document.createElement("div")).className="vditor-speech",document.body.insertAdjacentElement("beforeend",i);var a=function(){var e,n;return speechSynthesis.getVoices().forEach((function(r){r.lang===t.replace("_","-")&&(e=r),r.default&&(n=r)})),e||(e=n),e};void 0!==speechSynthesis.onvoiceschanged&&(speechSynthesis.onvoiceschanged=a);var o=a();i.onclick=function(){if("vditor-speech"===i.className){var e=new SpeechSynthesisUtterance(i.getAttribute("data-text"));e.voice=o,e.onend=function(){i.className="vditor-speech",speechSynthesis.cancel(),i.innerHTML=n},speechSynthesis.speak(e),i.className="vditor-speech vditor-speech--current",i.innerHTML=r}else speechSynthesis.speaking&&(speechSynthesis.paused?(speechSynthesis.resume(),i.innerHTML=r):(speechSynthesis.pause(),i.innerHTML=n));(0,T.Hc)(window.vditorSpeechRange)},document.body.addEventListener("click",(function(){""===getSelection().toString().trim()&&"block"===i.style.display&&(i.className="vditor-speech",speechSynthesis.cancel(),i.style.display="none")}))}e.addEventListener("mouseup",(function(e){var t=getSelection().toString().trim();if(speechSynthesis.cancel(),""!==getSelection().toString().trim()){window.vditorSpeechRange=getSelection().getRangeAt(0).cloneRange();var r=getSelection().getRangeAt(0).getBoundingClientRect();i.innerHTML=n,i.style.display="block",i.style.top=r.top+r.height+document.querySelector("html").scrollTop-20+"px",i.style.left=e.screenX+2+"px",i.setAttribute("data-text",t)}else"block"===i.style.display&&(i.className="vditor-speech",i.style.display="none")}))}},k=function(e,t,n,r){return new(n||(n=Promise))((function(i,a){function o(e){try{c(r.next(e))}catch(e){a(e)}}function s(e){try{c(r.throw(e))}catch(e){a(e)}}function c(e){var t;e.done?i(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(o,s)}c((r=r.apply(e,t||[])).next())}))},A=function(e,t){var n,r,i,a,o={label:0,sent:function(){if(1&i[0])throw i[1];return i[1]},trys:[],ops:[]};return a={next:s(0),throw:s(1),return:s(2)},"function"==typeof Symbol&&(a[Symbol.iterator]=function(){return this}),a;function s(a){return function(s){return function(a){if(n)throw new TypeError("Generator is already executing.");for(;o;)try{if(n=1,r&&(i=2&a[0]?r.return:a[0]?r.throw||((i=r.return)&&i.call(r),0):r.next)&&!(i=i.call(r,a[1])).done)return i;switch(r=0,i&&(a=[2&a[0],i.value]),a[0]){case 0:case 1:i=a;break;case 4:return o.label++,{value:a[1],done:!1};case 5:o.label++,r=a[1],a=[0];continue;case 7:a=o.ops.pop(),o.trys.pop();continue;default:if(!((i=(i=o.trys).length>0&&i[i.length-1])||6!==a[0]&&2!==a[0])){o=0;continue}if(3===a[0]&&(!i||a[1]>i[0]&&a[1]<i[3])){o.label=a[1];break}if(6===a[0]&&o.label<i[1]){o.label=i[1],i=a;break}if(i&&o.label<i[2]){o.label=i[2],o.ops.push(a);break}i[2]&&o.ops.pop(),o.trys.pop();continue}a=t.call(e,o)}catch(e){a=[6,e],r=0}finally{n=i=0}if(5&a[0])throw a[1];return{value:a[0]?a[1]:void 0,done:!0}}([a,s])}}},j=function(e){var t={anchor:0,cdn:f.g.CDN,customEmoji:{},emojiPath:(e&&e.emojiPath||f.g.CDN)+"/dist/images/emoji",hljs:f.g.HLJS_OPTIONS,icon:"ant",lang:"zh_CN",markdown:f.g.MARKDOWN_OPTIONS,math:f.g.MATH_OPTIONS,mode:"light",speech:{enable:!1},theme:f.g.THEME_OPTIONS};return(0,S.T)(t,e)},_=function(e,t){var n=j(t);return(0,y.G)(n.cdn+"/dist/js/lute/lute.min.js","vditorLuteScript").then((function(){var r=(0,E.X)({autoSpace:n.markdown.autoSpace,codeBlockPreview:n.markdown.codeBlockPreview,emojiSite:n.emojiPath,emojis:n.customEmoji,fixTermTypo:n.markdown.fixTermTypo,footnotes:n.markdown.footnotes,headingAnchor:0!==n.anchor,inlineMathDigit:n.math.inlineDigit,lazyLoadImage:n.lazyLoadImage,linkBase:n.markdown.linkBase,linkPrefix:n.markdown.linkPrefix,listStyle:n.markdown.listStyle,mark:n.markdown.mark,mathBlockPreview:n.markdown.mathBlockPreview,paragraphBeginningSpace:n.markdown.paragraphBeginningSpace,sanitize:n.markdown.sanitize,toc:n.markdown.toc});return(null==t?void 0:t.renderers)&&r.SetJSRenderers({renderers:{Md2HTML:t.renderers}}),r.SetHeadingID(!0),r.Md2HTML(e)}))},x=function(t,n,r){return k(void 0,void 0,void 0,(function(){var v,f,S;return A(this,(function(E){switch(E.label){case 0:return v=j(r),[4,_(n,v)];case 1:if(f=E.sent(),v.transform&&(f=v.transform(f)),t.innerHTML=f,t.classList.add("vditor-reset"),v.i18n)return[3,5];if(["en_US","ja_JP","ko_KR","ru_RU","zh_CN","zh_TW"].includes(v.lang))return[3,2];throw new Error("options.lang error, see https://ld246.com/article/1549638745630#options");case 2:return S="vditorI18nScript"+v.lang,document.querySelectorAll('head script[id^="vditorI18nScript"]').forEach((function(e){e.id!==S&&document.head.removeChild(e)})),[4,(0,y.G)(v.cdn+"/dist/js/i18n/"+v.lang+".js",S)];case 3:E.sent(),E.label=4;case 4:return[3,6];case 5:window.VditorI18n=v.i18n,E.label=6;case 6:return v.icon?[4,(0,y.G)(v.cdn+"/dist/js/icons/"+v.icon+".js","vditorIconScript")]:[3,8];case 7:E.sent(),E.label=8;case 8:return(0,w.Z)(v.theme.current,v.theme.path),1===v.anchor&&t.classList.add("vditor-reset--anchor"),(0,a.O)(t),(0,c.s)(v.hljs,t,v.cdn),(0,l.H)(t,{cdn:v.cdn,math:v.math}),(0,u.i)(t,v.cdn,v.mode),(0,p.K)(t,v.cdn,v.mode),(0,o.P)(t,v.cdn),(0,s.v)(t,v.cdn),(0,i.p)(t,v.cdn,v.mode),(0,h.P)(t,v.cdn,v.mode),(0,g.B)(t,v.cdn),(0,e.Q)(t,v.cdn),(0,m.Y)(t),v.speech.enable&&L(t),0!==v.anchor&&(T=v.anchor,document.querySelectorAll(".vditor-anchor").forEach((function(e){1===T&&e.classList.add("vditor-anchor--left"),e.onclick=function(){var t=e.getAttribute("href").substr(1),n=document.getElementById("vditorAnchor-"+t).offsetTop;document.querySelector("html").scrollTop=n}})),window.onhashchange=function(){var e=document.getElementById("vditorAnchor-"+decodeURIComponent(window.location.hash.substr(1)));e&&(document.querySelector("html").scrollTop=e.offsetTop)}),v.after&&v.after(),v.lazyLoadImage&&d(t),t.addEventListener("click",(function(e){var n=(0,b.lG)(e.target,"SPAN");if(n&&(0,b.fb)(n,"vditor-toc")){var r=t.querySelector("#"+n.getAttribute("data-target-id"));r&&window.scrollTo(window.scrollX,r.offsetTop)}})),[2]}var T}))}))},M=n(863),H=n(312);const C=function(){function n(){}return n.adapterRender=t,n.previewImage=M.E,n.codeRender=a.O,n.graphvizRender=s.v,n.highlightRender=c.s,n.mathRender=l.H,n.mermaidRender=u.i,n.markmapRender=p.K,n.flowchartRender=o.P,n.chartRender=i.p,n.abcRender=e.Q,n.mindmapRender=h.P,n.plantumlRender=g.B,n.outlineRender=v.k,n.mediaRender=m.Y,n.speechRender=L,n.lazyLoadImageRender=d,n.md2html=_,n.preview=x,n.setCodeTheme=H.Y,n.setContentTheme=w.Z,n}()})(),r.default})()}}]);
//# sourceMappingURL=3.a181a3fb.chunk.js.map