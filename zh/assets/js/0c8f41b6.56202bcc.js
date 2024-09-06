"use strict";(self.webpackChunkopenkruise_io=self.webpackChunkopenkruise_io||[]).push([[1872],{3905:function(e,r,t){t.d(r,{Zo:function(){return p},kt:function(){return m}});var n=t(67294);function a(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function o(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function u(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?o(Object(t),!0).forEach((function(r){a(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function l(e,r){if(null==e)return{};var t,n,a=function(e,r){if(null==e)return{};var t,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)t=o[n],r.indexOf(t)>=0||(a[t]=e[t]);return a}(e,r);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)t=o[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var i=n.createContext({}),c=function(e){var r=n.useContext(i),t=r;return e&&(t="function"==typeof e?e(r):u(u({},r),e)),t},p=function(e){var r=c(e.components);return n.createElement(i.Provider,{value:r},e.children)},s={inlineCode:"code",wrapper:function(e){var r=e.children;return n.createElement(n.Fragment,{},r)}},f=n.forwardRef((function(e,r){var t=e.components,a=e.mdxType,o=e.originalType,i=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),f=c(t),m=a,d=f["".concat(i,".").concat(m)]||f[m]||s[m]||o;return t?n.createElement(d,u(u({ref:r},p),{},{components:t})):n.createElement(d,u({ref:r},p))}));function m(e,r){var t=arguments,a=r&&r.mdxType;if("string"==typeof e||a){var o=t.length,u=new Array(o);u[0]=f;var l={};for(var i in r)hasOwnProperty.call(r,i)&&(l[i]=r[i]);l.originalType=e,l.mdxType="string"==typeof e?e:a,u[1]=l;for(var c=2;c<o;c++)u[c]=t[c];return n.createElement.apply(null,u)}return n.createElement.apply(null,t)}f.displayName="MDXCreateElement"},18988:function(e,r,t){t.r(r),t.d(r,{assets:function(){return p},contentTitle:function(){return i},default:function(){return m},frontMatter:function(){return l},metadata:function(){return c},toc:function(){return s}});var n=t(87462),a=t(63366),o=(t(67294),t(3905)),u=["components"],l={},i="FAQ",c={unversionedId:"developer-manuals/faq",id:"developer-manuals/faq",title:"FAQ",description:"\u5982\u4f55\u8c03\u8bd5\u4f60\u7684\u4ee3\u7801",source:"@site/i18n/zh/docusaurus-plugin-content-docs-kruisegame/current/developer-manuals/faq.md",sourceDirName:"developer-manuals",slug:"/developer-manuals/faq",permalink:"/zh/kruisegame/developer-manuals/faq",draft:!1,tags:[],version:"current",lastUpdatedBy:"skkkkkkk",lastUpdatedAt:1681355333,formattedLastUpdatedAt:"2023/4/13",frontMatter:{},sidebar:"kruisegame",previous:{title:"\u9879\u76ee\u8d21\u732e",permalink:"/zh/kruisegame/developer-manuals/contribution"},next:{title:"Golang Client",permalink:"/zh/kruisegame/developer-manuals/go-client"}},p={},s=[{value:"\u5982\u4f55\u8c03\u8bd5\u4f60\u7684\u4ee3\u7801",id:"\u5982\u4f55\u8c03\u8bd5\u4f60\u7684\u4ee3\u7801",level:2}],f={toc:s};function m(e){var r=e.components,t=(0,a.Z)(e,u);return(0,o.kt)("wrapper",(0,n.Z)({},f,t,{components:r,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"faq"},"FAQ"),(0,o.kt)("h2",{id:"\u5982\u4f55\u8c03\u8bd5\u4f60\u7684\u4ee3\u7801"},"\u5982\u4f55\u8c03\u8bd5\u4f60\u7684\u4ee3\u7801"),(0,o.kt)("p",null,"0) \u7f16\u8f91Makefile\uff0c\u5c06IMG\u5b57\u6bb5\u7684\u503c\u4fee\u6539\u4e3aMakefile\u7684\u4ed3\u5e93\u5730\u5740\u3002"),(0,o.kt)("p",null,"1) \u7f16\u8bd1\u6253\u5305kruise-game-manager\u955c\u50cf\u3002"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"make docker-build\n")),(0,o.kt)("p",null,"2) \u5c06\u6253\u5305\u540e\u7684\u955c\u50cf\u4e0a\u4f20\u5230\u955c\u50cf\u4ed3\u5e93\u3002"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"make docker-push\n")),(0,o.kt)("p",null,"3) \u5728 Kubernetes \u96c6\u7fa4 (~/.kube/conf) \u4e2d\u90e8\u7f72 kruise-game-manager \u7ec4\u4ef6\u3002"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"make deploy\n")))}m.isMDXComponent=!0}}]);