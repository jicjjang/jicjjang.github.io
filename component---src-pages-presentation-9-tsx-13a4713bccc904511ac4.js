(window.webpackJsonp=window.webpackJsonp||[]).push([[15],{COYA:function(e,t,n){"use strict";n.d(t,"a",(function(){return a})),n.d(t,"b",(function(){return l})),n.d(t,"c",(function(){return r}));var a={HOME:"/",ARCHIVE:"/archive",RESUME:"/resume",PRESENTATION:"/presentation",PRESENTATION_1:"/presentation/1",PRESENTATION_2:"/presentation/2",PRESENTATION_3:"/presentation/3",PRESENTATION_4:"/presentation/4",PRESENTATION_5:"/presentation/5",PRESENTATION_6:"/presentation/6",PRESENTATION_7:"/presentation/7",PRESENTATION_8:"/presentation/8",PRESENTATION_9:"/presentation/9"},l=[{path:a.PRESENTATION_1,title:"React.js basic - NHN벅스 팀 세미나 발표 자료",date:"Nov, 23, 2016",tags:["react","nhn","bugs"]},{path:a.PRESENTATION_2,title:"Vue.js basic - NHN벅스 팀 세미나 발표 자료",date:"Apr, 08, 2017",tags:["vue","nhn","bugs"]},{path:a.PRESENTATION_3,title:"현실적인 개발로 먹고살기",date:"July, 15, 2017",tags:["developer","kookmin","university"]},{path:a.PRESENTATION_4,title:"How to use RxJs - NHN벅스 팀 세미나 발표 자료",date:"Nov, 30, 2017",tags:["rxjs","nhn","bugs"]},{path:a.PRESENTATION_5,title:"Vue pwa 시작하기 - Vuetiful korea 3rd 발표자료",date:"Nov, 30, 2017",tags:["vue","pwa","vuetifulkorea","3rd"]},{path:a.PRESENTATION_6,title:"Graphql 시작하기 (server) - NHN벅스 팀 세미나 발표 자료",date:"Mar, 05, 2018",tags:["graphql","server","nhn","bugs"]},{path:a.PRESENTATION_7,title:"Graphql 시작하기 (client) - NHN벅스 팀 세미나 발표 자료",date:"Mar, 06, 2018",tags:["graphql","client","nhn","bugs"]},{path:a.PRESENTATION_8,title:"Apollo로 알아보는 Vue in the GraphQL - Vuetiful korea 4th 발표자료",date:"Apr, 16, 2018",tags:["vue","graphql","apollo","vuetifulkorea","4th"]},{path:a.PRESENTATION_9,title:"Vuetiful korea 5회 세미나 내용 정리",date:"Aug, 15, 2018",tags:["vue","vuetifulkorea","5th"]}],r=function(e){return e.endsWith("/")?e.slice(0,-1):e}},p6Bd:function(e,t,n){"use strict";n.r(t),n.d(t,"default",(function(){return r}));var a=n("q1tI"),l=n("xbwu");function r(e){var t=e.location;return a.createElement(l.a,{pathname:t.pathname},a.createElement("div",{className:"slides"},a.createElement("section",null,a.createElement("div",null,a.createElement("img",{src:"/img/presentation/vuetiful-korea/logo.png",alt:"background",style:{width:"50%",margin:"0 auto",background:"none",border:"none"}}),a.createElement("p",{style:{margin:"20px 0 0 0"}},a.createElement("a",{href:"http://kr.vuetiful.com/"},"Vuetiful korea 5th")," 세미나 리뷰")),a.createElement("aside",{className:"notes"},"안녕하세요. 핀테크 서비스개발 파트 Jed 입니다. 이전부터 개인적으로 계속 참여하고 있던 Vue.js 국내 커뮤니티인 Vuetiful-korea 5번째 세미나에서 들었던 내용을 리뷰해보려 합니다.")),a.createElement("section",null,a.createElement("div",null,a.createElement("h2",null,"리뷰 순서"),a.createElement("ul",{style:{margin:"0"}},a.createElement("li",{className:"fragment"},"Nuxt로 Art하게 프론트 설계해보기"),a.createElement("li",{className:"fragment"},"스프링 부트에서 Vue.js 맛보기"),a.createElement("li",{className:"fragment"},"더퀴즈라이브 웹 버전 개발기"),a.createElement("li",{className:"fragment"},"전체적인 리뷰")))),a.createElement("section",null,a.createElement("div",null,a.createElement("h2",null,"Nuxt로 Art하게 프론트 설계해보기"),a.createElement("div",null,a.createElement("a",{href:"http://kr.vuetiful.com/static/pdf/01.pdf"},"발표 자료 다운로드"))),a.createElement("aside",{className:"notes"},"애초에 중점적으로 들으려 했던 발표 내용은 아니지만, 신입개발자가 express와 vue.js만으로 설계와 vue-router를 유연하게 사용하기 힘들어 nuxt.js를 선택했다는 얘기입니다. 기초적인 내용을 설명하고 ppt의 마무리 정리를 하지 않았기 때문에 따로 리뷰하지 않겠습니다.")),a.createElement("section",null,a.createElement("section",null,a.createElement("h2",null,"스프링 부트에서 Vue.js 맛보기"),a.createElement("div",null,a.createElement("a",{href:"http://kr.vuetiful.com/static/pdf/02.pdf"},"발표 자료 다운로드")),a.createElement("aside",{className:"notes"},"스프링 부트에서 Vue.js나 React.js를 사용하는 프로젝트는 진행해본 경험도 있고, 스탭들이 모여있는 slack에 미리 업로드 해주신 미완성된 발표자료를 보았기 때문에 큰 기대를 하지 않고 봤던 발표였습니다.")),a.createElement("section",null,a.createElement("div",null,a.createElement("img",{src:"/img/presentation/vuetiful-korea/5th/example2-1.png",alt:"example2-1"})),a.createElement("aside",{className:"notes"},"Vue.js를 Spring boot에서 많이 사용하시는 템플릿인 thymeleaf와 섞어서 사용하는 부분이 있었습니다. thymeleaf와 함께 사용하는 것에 대해서는 별로 생각해보지 않았기 때문에 이후 따로 찾아봤습니다. thymeleaf와 함께 사용함으로써 얻는 점은 초기 Data fetching을 서버가 해준다는 것으로, Client side rendering 이지만 초기 데이터를 화면이 그려지기 시작할 때 함께 가지고 있게 됩니다. 초기 렌더링 시, 화면 뼈대를 그린 뒤의 fetch하여 데이터를 채워넣는 방식 대신 화면을 그릴 때 데이터를 한꺼번에 그려넣어야 하는데, SSR은 과하다 판단될 때 사용할 수 있을 것입니다."))),a.createElement("section",null,a.createElement("section",null,a.createElement("h2",null,"더퀴즈라이브 웹 버전 개발기"),a.createElement("div",null,a.createElement("a",{href:"http://kr.vuetiful.com/static/pdf/03.pdf"},"발표 자료 다운로드")),a.createElement("aside",{className:"notes"},"이 발표를 들으러 간 세미나였는데, 실제 출시는 하지 않기로 됐다고 합니다.")),a.createElement("section",null,a.createElement("div",null,a.createElement("img",{src:"/img/presentation/vuetiful-korea/5th/example3-1.png",alt:"example3-1"})),a.createElement("aside",{className:"notes"},"요즘 많이들 하시는 모바일 라이브 퀴즈쇼에 대한 웹버전 개발기인데 추후 개발에 도입을 고려중인 Rxjs에 대한 설명이 있었습니다. 실제로 사용되지 않은 이유는 웹에서의 동영상 플레이어에 대한 컨트롤이 모바일에서 처럼 용이하지 않은 부분이 있었고, 특정 시간의 높은 트래픽으로 사용자들의 입력 동기화(퀴즈쇼이기 때문에 정해진 시간안에 입력이 됐는지 초 단위로 중요함)가 중요했는데 이 이슈를 해결하지 못했다고 합니다.")),a.createElement("section",null,a.createElement("div",null,a.createElement("img",{src:"/img/presentation/vuetiful-korea/5th/example3-2.png",alt:"example3-2"})),a.createElement("aside",{className:"notes"},"또한 궁금했던 영상과 퀴즈를 어떤 방식으로 컴포넌트화 해놨는지 구조에 대한 설명도 들을 수 있었습니다. 영상은 다른 컴포넌트들과 아무런 연관없이 틀어만 놓는 형식이었고 트래픽에 대한 소켓의 역활이 중요해 보였습니다.")),a.createElement("section",null,a.createElement("div",null,a.createElement("img",{src:"/img/presentation/vuetiful-korea/5th/example3-3.png",alt:"example3-3"}),a.createElement("a",{href:"https://play.thequiz.live"},"Demo")),a.createElement("aside",{className:"notes"},"실제로 라이브 퀴즈쇼 출시 초기에 사용을 해봤었는데, 동접자 10만명이 넘더라구요."))),a.createElement("section",null,a.createElement("section",null,a.createElement("h2",null,"전체적인 리뷰"),a.createElement("aside",{className:"notes"},"3, 4회 세미나에선 직접 발표도 했었는데, 다른 분들이 발표하는 모습을 보면서 발표 방식을 되돌아 보는것과 최근에는 React로만 개발을 하고있는 이유들로 스탭으로 참여를 했습니다. 2회 세미나에서 부터 참여를 해왔지만, 이 모임의 발표 레벨은 상당히 낮습니다. 발표를 자원해주시는 분들이 적을 뿐더러, 현업에서 사용이 적은게 문제이거나 존잘러들의 낮은 참여도가 문제라고 생각됩니다. Vue.js 기술에 대한 실무 적용도 고려하고 있기 때문에 이런 부분들에 대한 자료조사가 중요해 보입니다."))),a.createElement("section",null,a.createElement("h2",null,"Q&A")),a.createElement("section",null,a.createElement("h1",null,"끝"),a.createElement("div",null,"감사합니다."))))}},xbwu:function(e,t,n){"use strict";var a=n("q1tI"),l=n("1Yd/"),r=n("COYA");t.a=function(e){var t=e.pathname,n=e.description,i=e.children,c=Object(a.useState)(!1),u=c[0],o=c[1],m=r.b.find((function(e){return e.path===Object(r.c)(t)})),E=!1,p=setInterval(Object(a.useCallback)((function(){"undefined"!=typeof window&&(window.Reveal&&!E&&(d(),E=!0),window.Reveal&&!u&&(window.Reveal.isReady()?(console.log("ready"),clearInterval(p),o(!0)):d()))}),[u]),300),d=function(){Reveal.initialize({dependencies:[{src:"/js/presentation/notes.min.js",async:!0},{src:"/js/presentation/highlight.min.js",async:!0,callback:function(){hljs.initHighlightingOnLoad()}}],minScale:.66,maxScale:.66})};return Object(a.useEffect)((function(){var e;u&&(console.log("layout"),null===(e=window.Reveal)||void 0===e||e.layout())}),[u]),a.createElement(a.Fragment,null,a.createElement(l.a,{title:null==m?void 0:m.title,description:n,link:s.link,script:s.script}),a.createElement("div",{className:"reveal",style:{position:"absolute",display:u?"block":"none"}},i))};var s={link:[{rel:"stylesheet",href:"/css/presentation/reveal.min.css"},{rel:"stylesheet",href:"/css/presentation/black.min.css"},{rel:"stylesheet",href:"/css/presentation/zenburn.min.css"}],script:[{src:"/js/presentation/reveal.min.js"},{src:"/js/presentation/head.min.js"}]}}}]);
//# sourceMappingURL=component---src-pages-presentation-9-tsx-13a4713bccc904511ac4.js.map