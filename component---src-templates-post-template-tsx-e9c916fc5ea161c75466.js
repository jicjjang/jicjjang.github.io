(window.webpackJsonp=window.webpackJsonp||[]).push([[19],{"7yTJ":function(e,t,n){"use strict";var i=function(){function e(){}var t=e.prototype;return t.isSupportedSpeech=function(){var e=this;return"undefined"==typeof SpeechSynthesisUtterance||"undefined"==typeof speechSynthesis?(console.error("This browser does not support speech API"),!1):(window.onbeforeunload=function(){return e.stopSpeech()},!0)},t.sendMessage=function(e,t){if(void 0===t&&(t=0),this.isSupportedSpeech()){window.speechSynthesis.speaking&&window.speechSynthesis.cancel();var n=new SpeechSynthesisUtterance(e);n.rate=1;var i=speechSynthesis.getVoices();n.voice=i[t],speechSynthesis.speak(n)}},t.sendContentsMessage=function(){var e=document.querySelector(".post_article");null!=e&&e.innerText&&this.sendMessage(null==e?void 0:e.innerText)},t.stopSpeech=function(){this.isSupportedSpeech()&&window.speechSynthesis.speaking&&window.speechSynthesis.cancel()},e}();t.a=new i},"wD2/":function(e,t,n){"use strict";var i=n("q1tI"),s=n("vOnD"),o=n("Wbzz"),r=n("bHzR"),a=n("ytc1"),c=n("7yTJ"),p=s.b.header.withConfig({displayName:"PostHeader__StyledHeader",componentId:"sc-77g6iv-0"})(["margin-bottom:",";"],(function(e){return e.rhythm})),l=Object(s.b)(o.a).withConfig({displayName:"PostHeader__StyledH1Link",componentId:"sc-77g6iv-1"})(["color:#000;&:hover{color:#172fde;}"]),u=s.b.span.withConfig({displayName:"PostHeader__StyledSpeechSpan",componentId:"sc-77g6iv-2"})(["display:inline-block;width:30px;height:30px;background-image:url(/img/post/speaker.png);background-size:22px;background-repeat:no-repeat;background-position:6px 10px;&:active{background-position:6px 11px;}"]),d=s.b.time.withConfig({displayName:"PostHeader__StyledTime",componentId:"sc-77g6iv-3"})(["color:#898989;font-size:",";line-height:",";"],(function(e){return e.scale.fontSize}),(function(e){return e.scale.lineHeight}));t.a=function(e){var t=e.title,n=e.path,s=e.date,o=e.isPost,h=void 0!==o&&o;return i.createElement(p,{rhythm:Object(r.a)(1.2)},i.createElement(a.d,{scale:Object(r.b)(.5),rhythm:Object(r.a)(.2)},n?i.createElement(l,{to:n},t):t,h&&i.createElement(u,{onClick:function(){return c.a.sendContentsMessage()}})),i.createElement("p",{className:"post-meta"},i.createElement(d,{dateTime:s,scale:Object(r.b)(-.1)},s)))}},"z/DK":function(e,t,n){"use strict";n.r(t);var i=n("q1tI"),s=n("U9c2"),o=n("bHzR"),r=n("wD2/"),a=n("H3i8"),c=function(){if("undefined"!=typeof document){var e=document.querySelector(".utterances");e&&document.querySelector(".utterances-frame")&&e.remove()}},p=n("7yTJ");t.default=function(e){var t=e.data;c(),function(){if("undefined"!=typeof document){var e=document.createElement("script");e.setAttribute("src","https://utteranc.es/client.js"),e.setAttribute("repo","jicjjang/jicjjang.github.io"),e.setAttribute("issue-term","pathname"),e.setAttribute("label","✨댓글✨"),e.setAttribute("theme","github-light"),e.setAttribute("async","true"),document.body.appendChild(e)}}(),Object(i.useEffect)((function(){return function(){c(),p.a.stopSpeech()}}),[]);var n=t,l=n.site,u=n.markdownRemark,d=u.frontmatter,h=d.title,m=d.date,f=d.tags,y=u.excerpt,b=u.html;return i.createElement(s.a,{title:l.siteMetadata.title,description:y},i.createElement("article",{className:"post_article"},i.createElement(r.a,{title:h,date:m,isPost:!0}),i.createElement("section",{dangerouslySetInnerHTML:{__html:b}}),i.createElement("hr",{style:{marginBottom:Object(o.a)(1)}}),i.createElement("footer",{style:{color:"#898989"}},(null==f?void 0:f.length)&&i.createElement(a.a,{tags:f}))),i.createElement("nav",null,i.createElement("ul",{style:{display:"flex",flexWrap:"wrap",justifyContent:"space-between",listStyle:"none",padding:0}})))}}}]);
//# sourceMappingURL=component---src-templates-post-template-tsx-e9c916fc5ea161c75466.js.map