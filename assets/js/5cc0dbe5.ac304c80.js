"use strict";(self.webpackChunkopenkruise_io=self.webpackChunkopenkruise_io||[]).push([[4424],{3905:function(A,e,t){t.d(e,{Zo:function(){return c},kt:function(){return p}});var n=t(67294);function a(A,e,t){return e in A?Object.defineProperty(A,e,{value:t,enumerable:!0,configurable:!0,writable:!0}):A[e]=t,A}function r(A,e){var t=Object.keys(A);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(A);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(A,e).enumerable}))),t.push.apply(t,n)}return t}function i(A){for(var e=1;e<arguments.length;e++){var t=null!=arguments[e]?arguments[e]:{};e%2?r(Object(t),!0).forEach((function(e){a(A,e,t[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(A,Object.getOwnPropertyDescriptors(t)):r(Object(t)).forEach((function(e){Object.defineProperty(A,e,Object.getOwnPropertyDescriptor(t,e))}))}return A}function s(A,e){if(null==A)return{};var t,n,a=function(A,e){if(null==A)return{};var t,n,a={},r=Object.keys(A);for(n=0;n<r.length;n++)t=r[n],e.indexOf(t)>=0||(a[t]=A[t]);return a}(A,e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(A);for(n=0;n<r.length;n++)t=r[n],e.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(A,t)&&(a[t]=A[t])}return a}var o=n.createContext({}),l=function(A){var e=n.useContext(o),t=e;return A&&(t="function"==typeof A?A(e):i(i({},e),A)),t},c=function(A){var e=l(A.components);return n.createElement(o.Provider,{value:e},A.children)},d={inlineCode:"code",wrapper:function(A){var e=A.children;return n.createElement(n.Fragment,{},e)}},u=n.forwardRef((function(A,e){var t=A.components,a=A.mdxType,r=A.originalType,o=A.parentName,c=s(A,["components","mdxType","originalType","parentName"]),u=l(t),p=a,m=u["".concat(o,".").concat(p)]||u[p]||d[p]||r;return t?n.createElement(m,i(i({ref:e},c),{},{components:t})):n.createElement(m,i({ref:e},c))}));function p(A,e){var t=arguments,a=e&&e.mdxType;if("string"==typeof A||a){var r=t.length,i=new Array(r);i[0]=u;var s={};for(var o in e)hasOwnProperty.call(e,o)&&(s[o]=e[o]);s.originalType=A,s.mdxType="string"==typeof A?A:a,i[1]=s;for(var l=2;l<r;l++)i[l]=t[l];return n.createElement.apply(null,i)}return n.createElement.apply(null,t)}u.displayName="MDXCreateElement"},39853:function(A,e,t){t.r(e),t.d(e,{assets:function(){return c},contentTitle:function(){return o},default:function(){return p},frontMatter:function(){return s},metadata:function(){return l},toc:function(){return d}});var n=t(87462),a=t(63366),r=(t(67294),t(3905)),i=["components"],s={},o="Introduction",l={unversionedId:"introduction",id:"introduction",title:"Introduction",description:"\u2b50 If you like OpenKruiseGame, give it a star on GitHub!",source:"@site/kruisegame/introduction.md",sourceDirName:".",slug:"/introduction",permalink:"/kruisegame/introduction",draft:!1,tags:[],version:"current",lastUpdatedBy:"ChrisLiu",lastUpdatedAt:1724372089,formattedLastUpdatedAt:"8/23/2024",frontMatter:{},sidebar:"kruisegame",next:{title:"Installation",permalink:"/kruisegame/installation"}},c={},d=[{value:"Overview",id:"overview",level:3},{value:"What is OpenKruiseGame(OKG)?",id:"what-is-openkruisegameokg",level:2},{value:"Why is OpenKruiseGame(OKG) needed?",id:"why-is-openkruisegameokg-needed",level:2},{value:"List of core features",id:"list-of-core-features",level:2},{value:"Users of OpenKruiseGame(OKG)",id:"users-of-openkruisegameokg",level:2},{value:"What&#39;s Next",id:"whats-next",level:2}],u={toc:d};function p(A){var e=A.components,s=(0,a.Z)(A,i);return(0,r.kt)("wrapper",(0,n.Z)({},u,s,{components:e,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"introduction"},"Introduction"),(0,r.kt)("p",null,"\u2b50 ",(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("em",{parentName:"strong"},"If you like OpenKruiseGame, give it a star on ",(0,r.kt)("a",{target:"_blank",rel:"noopener noreferrer",href:"https://github.com/openkruise/kruise-game"},"GitHub"),"!"))),(0,r.kt)("h3",{id:"overview"},"Overview"),(0,r.kt)("p",null,"OpenKruiseGame (OKG) is a multicloud-oriented, open source Kubernetes workload specialized for game servers. It is a sub-project of the open source workload project OpenKruise of the Cloud Native Computing Foundation (CNCF) in the gaming field. OpenKruiseGame makes the cloud-native transformation of game servers easier, faster, and stabler."),(0,r.kt)("img",{src:t(46130).Z,width:"90%"}),(0,r.kt)("h2",{id:"what-is-openkruisegameokg"},"What is OpenKruiseGame(OKG)?"),(0,r.kt)("p",null,"OpenKruiseGame is a custom Kubernetes workload designed specially for game server scenarios. It simplifies the cloud-native transformation of game servers. Compared with the built-in workloads of Kubernetes, such as Deployment and StatefulSet, OpenKruiseGame provides common game server management features, such as hot update, in-place update, and management of specified game servers.\nIn addition, OpenKruiseGame connects game servers to cloud service providers, matchmaking services, and O&M platforms. It automatically integrates features such as logging, monitoring, network, storage, elasticity, and matching by using low-code or zero-code technologies during the cloud-native transformation of game servers. With the consistent delivery standard of Kubernetes, OpenKruiseGame implements centralized management of clusters on multiple clouds and hybrid clouds.\nOpenKruiseGame is a fully open source project. It allows developers to customize workloads and build the release and O&M platforms for game servers by using custom development. OpenKruiseGame can use Kubernetes templates or call APIs to use or extend features. It can also connect to delivery systems, such as KubeVela, to implement the orchestration and full lifecycle management of game servers on a GUI."),(0,r.kt)("h2",{id:"why-is-openkruisegameokg-needed"},"Why is OpenKruiseGame(OKG) needed?"),(0,r.kt)("p",null,"Kubernetes is an application delivery and O&M standard in the cloud-native era. The capabilities of Kubernetes such as declarative resource management, auto scaling, and consistent delivery in a multi-cloud environment can provide support for game server scenarios that cover fast server activation, cost control, version management, and global reach. However, certain features of game servers make it difficult to adapt game servers for Kubernetes. For example:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Hot update or hot reload\nTo ensure a better game experience for players, many game servers are updated by using hot update or hot reload. However, for various workloads of Kubernetes, the lifecycle of pods is consistent with that of images. When an image is published, pods are recreated. When pods are recreated, issues may occur such as interruptions to player battles and changes in the network metadata of player servers."),(0,r.kt)("li",{parentName:"ul"},"O&M for specified game servers\nGame servers are stateful in most scenarios. For example, when a player versus player (PVP) game is updated or goes offline, only game servers without online active players can be changed; when game servers for a player versus environment (PVE) game are suspended or merged, you can perform operations on game servers with specific IDs."),(0,r.kt)("li",{parentName:"ul"},"Network models suitable for games\nThe network models in Kubernetes are implemented by declaring Services. In most cases, the network models are applicable to stateless scenarios. For network-sensitive game servers, a solution with high-performance gateways, fixed IP addresses and ports, or lossless direct connections is more suitable for actual business scenarios."),(0,r.kt)("li",{parentName:"ul"},"Game server orchestration\nThe architecture of game servers has become increasingly complex. The player servers for many massive multiplayer online role-playing games (MMORPGs) are combinations of game servers with different features and purposes, such as a gateway server responsible for network access, a central server for running the game engine, and a policy server responsible for game scripts and gameplay. Different game servers have different capacities and management policies. Hence, it is difficult to describe and quickly deliver all the game servers by using a single workload type.\nThe preceding challenges make it difficult to implement cloud-native transformation of game servers. OpenKruiseGame is aimed to abstract the common requirements of the gaming industry, and use the semantic method to make the cloud-native transformation of various game servers simple, efficient, and secure.")),(0,r.kt)("h2",{id:"list-of-core-features"},"List of core features"),(0,r.kt)("p",null,"OpenKruiseGame(OKG) has the following core features:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Hot update based on images and hot reload of configurations"),(0,r.kt)("li",{parentName:"ul"},"Update, deletion, and isolation of specified game servers"),(0,r.kt)("li",{parentName:"ul"},"Multiple built-in network models (fixed IP address and port, lossless direct connection, and global acceleration)"),(0,r.kt)("li",{parentName:"ul"},"Auto scaling"),(0,r.kt)("li",{parentName:"ul"},"Automated O&M (service quality)"),(0,r.kt)("li",{parentName:"ul"},"Independent of cloud service providers"),(0,r.kt)("li",{parentName:"ul"},"Complex game server orchestration")),(0,r.kt)("h2",{id:"users-of-openkruisegameokg"},"Users of OpenKruiseGame(OKG)"),(0,r.kt)("table",null,(0,r.kt)("tr",{style:{border:0}},(0,r.kt)("td",{style:{border:0}},(0,r.kt)("center",null,(0,r.kt)("img",{src:t(9280).Z,width:"120"}))),(0,r.kt)("td",{style:{border:0}},(0,r.kt)("center",null,(0,r.kt)("img",{src:t(34284).Z,width:"130"}))),(0,r.kt)("td",{style:{border:0}},(0,r.kt)("center",null,(0,r.kt)("img",{src:t(76268).Z,width:"130"}))),(0,r.kt)("td",{style:{border:0}},(0,r.kt)("center",null,(0,r.kt)("img",{src:t(96487).Z,width:"130"}))),(0,r.kt)("td",{style:{border:0}},(0,r.kt)("center",null,(0,r.kt)("img",{src:t(89752).Z,width:"125"})))),(0,r.kt)("tr",{style:{border:0}}),(0,r.kt)("tr",{style:{border:0}},(0,r.kt)("td",{style:{border:0}},(0,r.kt)("center",null,(0,r.kt)("img",{src:t(46637).Z,width:"95"}))),(0,r.kt)("td",{style:{border:0}},(0,r.kt)("center",null,(0,r.kt)("img",{src:t(23760).Z,width:"120"}))),(0,r.kt)("td",{style:{border:0}},(0,r.kt)("center",null,(0,r.kt)("img",{src:t(44267).Z,width:"130"}))),(0,r.kt)("td",{style:{border:0}},(0,r.kt)("center",null,(0,r.kt)("img",{src:t(17194).Z,width:"130"}))),(0,r.kt)("td",{style:{border:0}},(0,r.kt)("center",null,(0,r.kt)("img",{src:t(82489).Z,width:"110"})))),(0,r.kt)("tr",{style:{border:0}}),(0,r.kt)("tr",{style:{border:0}},(0,r.kt)("td",{style:{border:0}},(0,r.kt)("center",null,(0,r.kt)("img",{src:t(37027).Z,width:"145"}))),(0,r.kt)("td",{style:{border:0}},(0,r.kt)("center",null,(0,r.kt)("img",{src:t(46874).Z,width:"140"}))),(0,r.kt)("td",{style:{border:0}},(0,r.kt)("center",null,(0,r.kt)("img",{src:t(63928).Z,width:"130"}))),(0,r.kt)("td",{style:{border:0}},(0,r.kt)("center",null,(0,r.kt)("img",{src:t(35718).Z,width:"140"}))),(0,r.kt)("td",{style:{border:0}},(0,r.kt)("center",null,(0,r.kt)("img",{src:t(52638).Z,width:"130"})))),(0,r.kt)("tr",{style:{border:0}}),(0,r.kt)("tr",{style:{border:0}},(0,r.kt)("td",{style:{border:0}},(0,r.kt)("center",null,(0,r.kt)("img",{src:t(27234).Z,width:"160"}))),(0,r.kt)("td",{style:{border:0}},(0,r.kt)("center",null,(0,r.kt)("img",{src:t(32645).Z,width:"140"}))),(0,r.kt)("td",{style:{border:0}},(0,r.kt)("center",null,(0,r.kt)("img",{src:t(4e4).Z,width:"150"}))),(0,r.kt)("td",{style:{border:0}},(0,r.kt)("center",null,(0,r.kt)("img",{src:t(80989).Z,width:"145"}))),(0,r.kt)("td",{style:{border:0}},(0,r.kt)("center",null,(0,r.kt)("img",{src:t(30067).Z,width:"130"}))))),(0,r.kt)("h2",{id:"whats-next"},"What's Next"),(0,r.kt)("p",null,"Here are some recommended next steps:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Install OpenKruiseGame. For more information, see ",(0,r.kt)("a",{parentName:"li",href:"/kruisegame/installation"},"Install"),"."),(0,r.kt)("li",{parentName:"ul"},"Submit code for OpenKruiseGame. For more information, see ",(0,r.kt)("a",{parentName:"li",href:"/kruisegame/developer-manuals/contribution"},"Developer Guide"),"."),(0,r.kt)("li",{parentName:"ul"},"Join the DingTalk group (ID: 44862615) to have a discussion with core contributors to OpenKruiseGame."),(0,r.kt)("li",{parentName:"ul"},"Contact us by email at ",(0,r.kt)("a",{parentName:"li",href:"mailto:zhongwei.lzw@alibaba-inc.com"},"zhongwei.lzw@alibaba-inc.com"),".")))}p.isMDXComponent=!0},4e4:function(A,e,t){e.Z=t.p+"assets/images/360-logo-e38ccb2eb65cc02b22e7e47d0eb658c1.png"},23760:function(A,e,t){e.Z=t.p+"assets/images/baibian-logo-54bfadd94cae93e42fbdc726bbcd7e52.png"},30067:function(A,e,t){e.Z=t.p+"assets/images/bekko-logo-eaf298306ff5865cd9c733951adab218.png"},76268:function(A,e,t){e.Z=t.p+"assets/images/bilibili-logo-68ac19dfd55e7ade1ccb37483b99fcb6.png"},63928:function(A,e,t){e.Z=t.p+"assets/images/booming-logo-49b172d211cd48db9115cfdd87163434.png"},44267:function(A,e,t){e.Z=t.p+"assets/images/chillyroom-logo-42ed30b7a13f0670ef4c3be960e7ae64.png"},35718:function(A,e,t){e.Z=t.p+"assets/images/gsshosting-logo-6f49981c7c056b50be5817c364a7a59e.png"},46874:function(A,e,t){e.Z=t.p+"assets/images/guanying-logo-c9f62b3de19a351a161a9674d1800c04.png"},34284:function(A,e,t){e.Z=t.p+"assets/images/hypergryph-logo-e31c691b7385505c7d46ec30861050de.png"},46130:function(A,e,t){e.Z=t.p+"assets/images/intro-9682456be506826ca4a7a2304a7c10f0.png"},46637:function(A,e,t){e.Z=t.p+"assets/images/juren-logo-b0deb451c77439d77b8aad76910eb5ff.png"},9280:function(A,e,t){e.Z=t.p+"assets/images/lilith-logo-2e8f2519ab05a6652a9f7e6a8929bf06.png"},96487:function(A,e,t){e.Z=t.p+"assets/images/shangyou-logo-17639796d29300fb8a422ac4b6fc465c.jpeg"},80989:function(A,e,t){e.Z=t.p+"assets/images/vma-logo-7527037755e888f207bcf14199959359.png"},37027:function(A,e,t){e.Z=t.p+"assets/images/wanglong-logo-7647c1d87927254059e35ad053440520.png"},17194:function(A,e,t){e.Z=t.p+"assets/images/wuduan-logo-1702ca470eb440da418df286b26d75dc.png"},82489:function(A,e){e.Z="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAMgAAADICAYAAACtWK6eAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyZpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDYuMC1jMDA2IDc5LmRhYmFjYmIsIDIwMjEvMDQvMTQtMDA6Mzk6NDQgICAgICAgICI+IDxyZGY6UkRGIHhtbG5zOnJkZj0iaHR0cDovL3d3dy53My5vcmcvMTk5OS8wMi8yMi1yZGYtc3ludGF4LW5zIyI+IDxyZGY6RGVzY3JpcHRpb24gcmRmOmFib3V0PSIiIHhtbG5zOnhtcD0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wLyIgeG1sbnM6eG1wTU09Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9tbS8iIHhtbG5zOnN0UmVmPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvc1R5cGUvUmVzb3VyY2VSZWYjIiB4bXA6Q3JlYXRvclRvb2w9IkFkb2JlIFBob3Rvc2hvcCAyMi40IChNYWNpbnRvc2gpIiB4bXBNTTpJbnN0YW5jZUlEPSJ4bXAuaWlkOjk0MzI0MjdEOTU3ODExRUVBOTg3QTk2RDlCQkNCQUVGIiB4bXBNTTpEb2N1bWVudElEPSJ4bXAuZGlkOjk0MzI0MjdFOTU3ODExRUVBOTg3QTk2RDlCQkNCQUVGIj4gPHhtcE1NOkRlcml2ZWRGcm9tIHN0UmVmOmluc3RhbmNlSUQ9InhtcC5paWQ6OTQzMjQyN0I5NTc4MTFFRUE5ODdBOTZEOUJCQ0JBRUYiIHN0UmVmOmRvY3VtZW50SUQ9InhtcC5kaWQ6OTQzMjQyN0M5NTc4MTFFRUE5ODdBOTZEOUJCQ0JBRUYiLz4gPC9yZGY6RGVzY3JpcHRpb24+IDwvcmRmOlJERj4gPC94OnhtcG1ldGE+IDw/eHBhY2tldCBlbmQ9InIiPz7xJ+h2AAAavklEQVR42uxd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"},89752:function(A,e,t){e.Z=t.p+"assets/images/xingzhe-logo-ada3dd5cbfcaf5e75f7ca923ac7811d1.png"},27234:function(A,e,t){e.Z=t.p+"assets/images/yahaha-logo-86f54ca2d1b05d8ac145d9402ca2a6b8.png"},52638:function(A,e,t){e.Z=t.p+"assets/images/yongshi-logo-e8f8a132393c02a46fc3cbde20766b61.png"},32645:function(A,e){e.Z="data:image/png;base64,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"}}]);