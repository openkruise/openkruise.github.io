"use strict";(self.webpackChunkopenkruise_io=self.webpackChunkopenkruise_io||[]).push([[1079],{3905:function(e,t,r){r.d(t,{Zo:function(){return c},kt:function(){return d}});var a=r(67294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},o=Object.keys(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var m=a.createContext({}),l=function(e){var t=a.useContext(m),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},c=function(e){var t=l(e.components);return a.createElement(m.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},p=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,o=e.originalType,m=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),p=l(r),d=n,h=p["".concat(m,".").concat(d)]||p[d]||u[d]||o;return r?a.createElement(h,i(i({ref:t},c),{},{components:r})):a.createElement(h,i({ref:t},c))}));function d(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=r.length,i=new Array(o);i[0]=p;var s={};for(var m in t)hasOwnProperty.call(t,m)&&(s[m]=t[m]);s.originalType=e,s.mdxType="string"==typeof e?e:n,i[1]=s;for(var l=2;l<o;l++)i[l]=r[l];return a.createElement.apply(null,i)}return a.createElement.apply(null,r)}p.displayName="MDXCreateElement"},67450:function(e,t,r){r.r(t),r.d(t,{assets:function(){return c},contentTitle:function(){return m},default:function(){return d},frontMatter:function(){return s},metadata:function(){return l},toc:function(){return u}});var a=r(87462),n=r(63366),o=(r(67294),r(3905)),i=["components"],s={},m="Game MatchMaking",l={unversionedId:"user-manuals/game-matchmaking",id:"user-manuals/game-matchmaking",title:"Game MatchMaking",description:"Session-based games usually require matchmaking service, which allow players to find suitable teammates and opponents to form a match, and allocates suitable game server for the match. After thar, players can enter the game with address of the game server.",source:"@site/kruisegame/user-manuals/game-matchmaking.md",sourceDirName:"user-manuals",slug:"/user-manuals/game-matchmaking",permalink:"/kruisegame/user-manuals/game-matchmaking",draft:!1,tags:[],version:"current",lastUpdatedBy:"ChrisLiu",lastUpdatedAt:1691721700,formattedLastUpdatedAt:"8/11/2023",frontMatter:{},sidebar:"kruisegame",previous:{title:"GameServer Monitor",permalink:"/kruisegame/user-manuals/gameserver-monitor"},next:{title:"OKG Dashboard",permalink:"/kruisegame/user-manuals/game-dashboard"}},c={},u=[{value:"Introduction",id:"introduction",level:2}],p={toc:u};function d(e){var t=e.components,r=(0,n.Z)(e,i);return(0,o.kt)("wrapper",(0,a.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"game-matchmaking"},"Game MatchMaking"),(0,o.kt)("p",null,"Session-based games usually require ",(0,o.kt)("inlineCode",{parentName:"p"},"matchmaking service"),", which allow players to find suitable teammates and opponents to form a match, and allocates suitable game server for the match. After thar, players can enter the game with address of the game server."),(0,o.kt)("p",null,"OKG supports the cloud-native game matching framework ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/googleforgames/open-match"},"Open Match"),",\nand the ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/CloudNativeGame/kruise-game-open-match-director"},"kruise-game-open-match-director")," component is built based on that,\nwhich can allocates game servers addresses to players in matches."),(0,o.kt)("h2",{id:"introduction"},"Introduction"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"OpenKruiseGame"),", ",(0,o.kt)("inlineCode",{parentName:"li"},"Open Match")," and ",(0,o.kt)("inlineCode",{parentName:"li"},"kruise-game-open-match-director")," need to be installed in the Kubernetes cluster."),(0,o.kt)("li",{parentName:"ul"},"The game servers managed by GameServerSet and to be matched needs to configure the Network field. For details, please refer to ",(0,o.kt)("a",{parentName:"li",href:"/kruisegame/user-manuals/network"},"Network Documentation"),"."),(0,o.kt)("li",{parentName:"ul"},"kruise-game-open-match-director will select a game server whose network is Ready and OpsState is None, obtain the corresponding network connection information, and distribute it to Tickets in a Match."),(0,o.kt)("li",{parentName:"ul"},"kruise-game-open-match-director marks the OpsState field to the allocated GameServer as Allocated. After that, the GameServer will not be allocated again, and the priority of horizontal scaling-down of the GS is low to avoid being easily deleted. For the specific scaling order of the game server, please refer to ",(0,o.kt)("a",{parentName:"li",href:"/kruisegame/user-manuals/gameservers-scale"},"Game Servers Scale Document"),"."),(0,o.kt)("li",{parentName:"ul"},"kruise-game-open-match-director For more functions, please refer to ",(0,o.kt)("a",{parentName:"li",href:"https://github.com/CloudNativeGame/kruise-game-open-match-director"},"GitHub"),"."),(0,o.kt)("li",{parentName:"ul"},"For more examples of OKG + Open Match, please refer to ",(0,o.kt)("a",{parentName:"li",href:"https://github.com/CloudNativeGame/kruise-game-open-match-example"},"GitHub"),".")))}d.isMDXComponent=!0}}]);