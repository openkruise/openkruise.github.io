"use strict";(self.webpackChunkopenkruise_io=self.webpackChunkopenkruise_io||[]).push([[4424],{3905:function(e,t,r){r.d(t,{Zo:function(){return u},kt:function(){return m}});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function s(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function o(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var l=n.createContext({}),c=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):s(s({},t),e)),r},u=function(e){var t=c(e.components);return n.createElement(l.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},p=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,i=e.originalType,l=e.parentName,u=o(e,["components","mdxType","originalType","parentName"]),p=c(r),m=a,A=p["".concat(l,".").concat(m)]||p[m]||d[m]||i;return r?n.createElement(A,s(s({ref:t},u),{},{components:r})):n.createElement(A,s({ref:t},u))}));function m(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=r.length,s=new Array(i);s[0]=p;var o={};for(var l in t)hasOwnProperty.call(t,l)&&(o[l]=t[l]);o.originalType=e,o.mdxType="string"==typeof e?e:a,s[1]=o;for(var c=2;c<i;c++)s[c]=r[c];return n.createElement.apply(null,s)}return n.createElement.apply(null,r)}p.displayName="MDXCreateElement"},9853:function(e,t,r){r.r(t),r.d(t,{assets:function(){return u},contentTitle:function(){return l},default:function(){return m},frontMatter:function(){return o},metadata:function(){return c},toc:function(){return d}});var n=r(7462),a=r(3366),i=(r(7294),r(3905)),s=["components"],o={},l="Introduction",c={unversionedId:"introduction",id:"introduction",title:"Introduction",description:"\u2b50 If you like OpenKruiseGame, give it a star on GitHub!",source:"@site/kruisegame/introduction.md",sourceDirName:".",slug:"/introduction",permalink:"/kruisegame/introduction",draft:!1,tags:[],version:"current",lastUpdatedBy:"ChrisLiu",lastUpdatedAt:1715309173,formattedLastUpdatedAt:"5/10/2024",frontMatter:{},sidebar:"kruisegame",next:{title:"Installation",permalink:"/kruisegame/installation"}},u={},d=[{value:"Overview",id:"overview",level:3},{value:"What is OpenKruiseGame(OKG)?",id:"what-is-openkruisegameokg",level:2},{value:"Why is OpenKruiseGame(OKG) needed?",id:"why-is-openkruisegameokg-needed",level:2},{value:"List of core features",id:"list-of-core-features",level:2},{value:"Users of OpenKruiseGame(OKG)",id:"users-of-openkruisegameokg",level:2},{value:"What&#39;s Next",id:"whats-next",level:2}],p={toc:d};function m(e){var t=e.components,o=(0,a.Z)(e,s);return(0,i.kt)("wrapper",(0,n.Z)({},p,o,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"introduction"},"Introduction"),(0,i.kt)("p",null,"\u2b50 ",(0,i.kt)("strong",{parentName:"p"},(0,i.kt)("em",{parentName:"strong"},"If you like OpenKruiseGame, give it a star on ",(0,i.kt)("a",{target:"_blank",rel:"noopener noreferrer",href:"https://github.com/openkruise/kruise-game"},"GitHub"),"!"))),(0,i.kt)("h3",{id:"overview"},"Overview"),(0,i.kt)("p",null,"OpenKruiseGame (OKG) is a multicloud-oriented, open source Kubernetes workload specialized for game servers. It is a sub-project of the open source workload project OpenKruise of the Cloud Native Computing Foundation (CNCF) in the gaming field. OpenKruiseGame makes the cloud-native transformation of game servers easier, faster, and stabler."),(0,i.kt)("img",{src:r(6130).Z,width:"90%"}),(0,i.kt)("h2",{id:"what-is-openkruisegameokg"},"What is OpenKruiseGame(OKG)?"),(0,i.kt)("p",null,"OpenKruiseGame is a custom Kubernetes workload designed specially for game server scenarios. It simplifies the cloud-native transformation of game servers. Compared with the built-in workloads of Kubernetes, such as Deployment and StatefulSet, OpenKruiseGame provides common game server management features, such as hot update, in-place update, and management of specified game servers.\nIn addition, OpenKruiseGame connects game servers to cloud service providers, matchmaking services, and O&M platforms. It automatically integrates features such as logging, monitoring, network, storage, elasticity, and matching by using low-code or zero-code technologies during the cloud-native transformation of game servers. With the consistent delivery standard of Kubernetes, OpenKruiseGame implements centralized management of clusters on multiple clouds and hybrid clouds.\nOpenKruiseGame is a fully open source project. It allows developers to customize workloads and build the release and O&M platforms for game servers by using custom development. OpenKruiseGame can use Kubernetes templates or call APIs to use or extend features. It can also connect to delivery systems, such as KubeVela, to implement the orchestration and full lifecycle management of game servers on a GUI."),(0,i.kt)("h2",{id:"why-is-openkruisegameokg-needed"},"Why is OpenKruiseGame(OKG) needed?"),(0,i.kt)("p",null,"Kubernetes is an application delivery and O&M standard in the cloud-native era. The capabilities of Kubernetes such as declarative resource management, auto scaling, and consistent delivery in a multi-cloud environment can provide support for game server scenarios that cover fast server activation, cost control, version management, and global reach. However, certain features of game servers make it difficult to adapt game servers for Kubernetes. For example:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Hot update or hot reload\nTo ensure a better game experience for players, many game servers are updated by using hot update or hot reload. However, for various workloads of Kubernetes, the lifecycle of pods is consistent with that of images. When an image is published, pods are recreated. When pods are recreated, issues may occur such as interruptions to player battles and changes in the network metadata of player servers."),(0,i.kt)("li",{parentName:"ul"},"O&M for specified game servers\nGame servers are stateful in most scenarios. For example, when a player versus player (PVP) game is updated or goes offline, only game servers without online active players can be changed; when game servers for a player versus environment (PVE) game are suspended or merged, you can perform operations on game servers with specific IDs."),(0,i.kt)("li",{parentName:"ul"},"Network models suitable for games\nThe network models in Kubernetes are implemented by declaring Services. In most cases, the network models are applicable to stateless scenarios. For network-sensitive game servers, a solution with high-performance gateways, fixed IP addresses and ports, or lossless direct connections is more suitable for actual business scenarios."),(0,i.kt)("li",{parentName:"ul"},"Game server orchestration\nThe architecture of game servers has become increasingly complex. The player servers for many massive multiplayer online role-playing games (MMORPGs) are combinations of game servers with different features and purposes, such as a gateway server responsible for network access, a central server for running the game engine, and a policy server responsible for game scripts and gameplay. Different game servers have different capacities and management policies. Hence, it is difficult to describe and quickly deliver all the game servers by using a single workload type.\nThe preceding challenges make it difficult to implement cloud-native transformation of game servers. OpenKruiseGame is aimed to abstract the common requirements of the gaming industry, and use the semantic method to make the cloud-native transformation of various game servers simple, efficient, and secure.")),(0,i.kt)("h2",{id:"list-of-core-features"},"List of core features"),(0,i.kt)("p",null,"OpenKruiseGame(OKG) has the following core features:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Hot update based on images and hot reload of configurations"),(0,i.kt)("li",{parentName:"ul"},"Update, deletion, and isolation of specified game servers"),(0,i.kt)("li",{parentName:"ul"},"Multiple built-in network models (fixed IP address and port, lossless direct connection, and global acceleration)"),(0,i.kt)("li",{parentName:"ul"},"Auto scaling"),(0,i.kt)("li",{parentName:"ul"},"Automated O&M (service quality)"),(0,i.kt)("li",{parentName:"ul"},"Independent of cloud service providers"),(0,i.kt)("li",{parentName:"ul"},"Complex game server orchestration")),(0,i.kt)("h2",{id:"users-of-openkruisegameokg"},"Users of OpenKruiseGame(OKG)"),(0,i.kt)("table",null,(0,i.kt)("tr",{style:{border:0}},(0,i.kt)("td",{style:{border:0}},(0,i.kt)("center",null,(0,i.kt)("img",{src:r(4284).Z,width:"130"}))),(0,i.kt)("td",{style:{border:0}},(0,i.kt)("center",null,(0,i.kt)("img",{src:r(9280).Z,width:"125"}))),(0,i.kt)("td",{style:{border:0}},(0,i.kt)("center",null,(0,i.kt)("img",{src:r(6268).Z,width:"130"}))),(0,i.kt)("td",{style:{border:0}},(0,i.kt)("center",null,(0,i.kt)("img",{src:r(6487).Z,width:"130"}))),(0,i.kt)("td",{style:{border:0}},(0,i.kt)("center",null,(0,i.kt)("img",{src:r(9752).Z,width:"125"})))),(0,i.kt)("tr",{style:{border:0}}),(0,i.kt)("tr",{style:{border:0}},(0,i.kt)("td",{style:{border:0}},(0,i.kt)("center",null,(0,i.kt)("img",{src:r(6637).Z,width:"100"}))),(0,i.kt)("td",{style:{border:0}},(0,i.kt)("center",null,(0,i.kt)("img",{src:r(3760).Z,width:"130"}))),(0,i.kt)("td",{style:{border:0}},(0,i.kt)("center",null,(0,i.kt)("img",{src:r(4267).Z,width:"140"}))),(0,i.kt)("td",{style:{border:0}},(0,i.kt)("center",null,(0,i.kt)("img",{src:r(7194).Z,width:"140"}))),(0,i.kt)("td",{style:{border:0}},(0,i.kt)("center",null,(0,i.kt)("img",{src:r(2489).Z,width:"120"})))),(0,i.kt)("tr",{style:{border:0}}),(0,i.kt)("tr",{style:{border:0}},(0,i.kt)("td",{style:{border:0}},(0,i.kt)("center",null,(0,i.kt)("img",{src:r(7027).Z,width:"145"}))),(0,i.kt)("td",{style:{border:0}},(0,i.kt)("center",null,(0,i.kt)("img",{src:r(6874).Z,width:"140"}))),(0,i.kt)("td",{style:{border:0}},(0,i.kt)("center",null,(0,i.kt)("img",{src:r(3928).Z,width:"140"}))),(0,i.kt)("td",{style:{border:0}},(0,i.kt)("center",null,(0,i.kt)("img",{src:r(5718).Z,width:"150"}))))),(0,i.kt)("h2",{id:"whats-next"},"What's Next"),(0,i.kt)("p",null,"Here are some recommended next steps:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Install OpenKruiseGame. For more information, see ",(0,i.kt)("a",{parentName:"li",href:"/kruisegame/installation"},"Install"),"."),(0,i.kt)("li",{parentName:"ul"},"Submit code for OpenKruiseGame. For more information, see ",(0,i.kt)("a",{parentName:"li",href:"/kruisegame/developer-manuals/contribution"},"Developer Guide"),"."),(0,i.kt)("li",{parentName:"ul"},"Join the DingTalk group (ID: 44862615) to have a discussion with core contributors to OpenKruiseGame."),(0,i.kt)("li",{parentName:"ul"},"Contact us by email at ",(0,i.kt)("a",{parentName:"li",href:"mailto:zhongwei.lzw@alibaba-inc.com"},"zhongwei.lzw@alibaba-inc.com"),".")))}m.isMDXComponent=!0},3760:function(e,t,r){t.Z=r.p+"assets/images/baibian-logo-54bfadd94cae93e42fbdc726bbcd7e52.png"},6268:function(e,t,r){t.Z=r.p+"assets/images/bilibili-logo-68ac19dfd55e7ade1ccb37483b99fcb6.png"},3928:function(e,t,r){t.Z=r.p+"assets/images/booming-logo-49b172d211cd48db9115cfdd87163434.png"},4267:function(e,t,r){t.Z=r.p+"assets/images/chillyroom-logo-42ed30b7a13f0670ef4c3be960e7ae64.png"},5718:function(e,t,r){t.Z=r.p+"assets/images/gsshosting-logo-6f49981c7c056b50be5817c364a7a59e.png"},6874:function(e,t,r){t.Z=r.p+"assets/images/guanying-logo-c9f62b3de19a351a161a9674d1800c04.png"},4284:function(e,t,r){t.Z=r.p+"assets/images/hypergryph-logo-e31c691b7385505c7d46ec30861050de.png"},6130:function(e,t,r){t.Z=r.p+"assets/images/intro-9682456be506826ca4a7a2304a7c10f0.png"},6637:function(e,t,r){t.Z=r.p+"assets/images/juren-logo-b0deb451c77439d77b8aad76910eb5ff.png"},9280:function(e,t,r){t.Z=r.p+"assets/images/lilith-logo-2e8f2519ab05a6652a9f7e6a8929bf06.png"},6487:function(e,t,r){t.Z=r.p+"assets/images/shangyou-logo-17639796d29300fb8a422ac4b6fc465c.jpeg"},7027:function(e,t,r){t.Z=r.p+"assets/images/wanglong-logo-7647c1d87927254059e35ad053440520.png"},7194:function(e,t,r){t.Z=r.p+"assets/images/wuduan-logo-1702ca470eb440da418df286b26d75dc.png"},2489:function(e,t){t.Z="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAMgAAADICAYAAACtWK6eAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyZpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDYuMC1jMDA2IDc5LmRhYmFjYmIsIDIwMjEvMDQvMTQtMDA6Mzk6NDQgICAgICAgICI+IDxyZGY6UkRGIHhtbG5zOnJkZj0iaHR0cDovL3d3dy53My5vcmcvMTk5OS8wMi8yMi1yZGYtc3ludGF4LW5zIyI+IDxyZGY6RGVzY3JpcHRpb24gcmRmOmFib3V0PSIiIHhtbG5zOnhtcD0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wLyIgeG1sbnM6eG1wTU09Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9tbS8iIHhtbG5zOnN0UmVmPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvc1R5cGUvUmVzb3VyY2VSZWYjIiB4bXA6Q3JlYXRvclRvb2w9IkFkb2JlIFBob3Rvc2hvcCAyMi40IChNYWNpbnRvc2gpIiB4bXBNTTpJbnN0YW5jZUlEPSJ4bXAuaWlkOjk0MzI0MjdEOTU3ODExRUVBOTg3QTk2RDlCQkNCQUVGIiB4bXBNTTpEb2N1bWVudElEPSJ4bXAuZGlkOjk0MzI0MjdFOTU3ODExRUVBOTg3QTk2RDlCQkNCQUVGIj4gPHhtcE1NOkRlcml2ZWRGcm9tIHN0UmVmOmluc3RhbmNlSUQ9InhtcC5paWQ6OTQzMjQyN0I5NTc4MTFFRUE5ODdBOTZEOUJCQ0JBRUYiIHN0UmVmOmRvY3VtZW50SUQ9InhtcC5kaWQ6OTQzMjQyN0M5NTc4MTFFRUE5ODdBOTZEOUJCQ0JBRUYiLz4gPC9yZGY6RGVzY3JpcHRpb24+IDwvcmRmOlJERj4gPC94OnhtcG1ldGE+IDw/eHBhY2tldCBlbmQ9InIiPz7xJ+h2AAAavklEQVR42uxd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"},9752:function(e,t,r){t.Z=r.p+"assets/images/xingzhe-logo-ada3dd5cbfcaf5e75f7ca923ac7811d1.png"}}]);