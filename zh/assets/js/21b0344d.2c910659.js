"use strict";(self.webpackChunkopenkruise_io=self.webpackChunkopenkruise_io||[]).push([[4794],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return d}});var r=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function u(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var i=r.createContext({}),c=function(e){var t=r.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},p=function(e){var t=c(e.components);return r.createElement(i.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},f=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,i=e.parentName,p=u(e,["components","mdxType","originalType","parentName"]),f=c(n),d=o,m=f["".concat(i,".").concat(d)]||f[d]||s[d]||a;return n?r.createElement(m,l(l({ref:t},p),{},{components:n})):r.createElement(m,l({ref:t},p))}));function d(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,l=new Array(a);l[0]=f;var u={};for(var i in t)hasOwnProperty.call(t,i)&&(u[i]=t[i]);u.originalType=e,u.mdxType="string"==typeof e?e:o,l[1]=u;for(var c=2;c<a;c++)l[c]=n[c];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}f.displayName="MDXCreateElement"},31769:function(e,t,n){n.r(t),n.d(t,{assets:function(){return p},contentTitle:function(){return i},default:function(){return d},frontMatter:function(){return u},metadata:function(){return c},toc:function(){return s}});var r=n(87462),o=n(63366),a=(n(67294),n(3905)),l=["components"],u={title:"Other languages"},i=void 0,c={unversionedId:"developer-manuals/other-languages",id:"developer-manuals/other-languages",title:"Other languages",description:"\u76ee\u524d\uff0cKruise \u6ca1\u6709\u63d0\u4f9b\u9664\u4e86 Golang \u548c Java \u4e4b\u5916\u8bed\u8a00\u7684 SDK\uff0c\u4e8b\u5b9e\u4e0a\u6211\u4eec\u4e5f\u53ea\u63a8\u8350\u4f60\u4f7f\u7528 Golang Client\uff0c\u5b83\u662f\u4fdd\u8bc1\u4e86\u6700\u65b0\u7248\u672c\u548c\u7a33\u5b9a\u6027\u3002",source:"@site/i18n/zh/docusaurus-plugin-content-docs/current/developer-manuals/other-languages.md",sourceDirName:"developer-manuals",slug:"/developer-manuals/other-languages",permalink:"/zh/docs/next/developer-manuals/other-languages",draft:!1,editUrl:"https://github.com/openkruise/openkruise.io/edit/master/docs/developer-manuals/other-languages.md",tags:[],version:"current",lastUpdatedBy:"FillZpp",lastUpdatedAt:1632468169,formattedLastUpdatedAt:"2021/9/24",frontMatter:{title:"Other languages"},sidebar:"docs",previous:{title:"Java client",permalink:"/zh/docs/next/developer-manuals/java-client"},next:{title:"Kubectl Plugin",permalink:"/zh/docs/next/cli-tool/kubectl-plugin"}},p={},s=[],f={toc:s};function d(e){var t=e.components,n=(0,o.Z)(e,l);return(0,a.kt)("wrapper",(0,r.Z)({},f,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"\u76ee\u524d\uff0cKruise \u6ca1\u6709\u63d0\u4f9b\u9664\u4e86 Golang \u548c Java \u4e4b\u5916\u8bed\u8a00\u7684 SDK\uff0c\u4e8b\u5b9e\u4e0a\u6211\u4eec\u4e5f\u53ea\u63a8\u8350\u4f60\u4f7f\u7528 ",(0,a.kt)("a",{parentName:"p",href:"./go-client"},"Golang Client"),"\uff0c\u5b83\u662f\u4fdd\u8bc1\u4e86\u6700\u65b0\u7248\u672c\u548c\u7a33\u5b9a\u6027\u3002"),(0,a.kt)("p",null,"\u5982\u679c\u4f60\u8981\u4f7f\u7528\u5176\u4ed6\u7f16\u7a0b\u8bed\u8a00\u6bd4\u5982 Python\uff0c\u4f60\u53ea\u80fd\u4f7f\u7528\u5b83\u4eec\u7684\u5b98\u65b9 K8s client \u6bd4\u5982 ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/kubernetes-client/python"},"kubernetes-client/python"),"\u3002\n\u901a\u5e38\u6765\u8bf4\uff0c\u5b83\u4eec\u90fd\u4f1a\u63d0\u4f9b\u4e00\u4e9b\u8ba9\u4f60\u64cd\u4f5c\u4efb\u610f CR \u81ea\u5b9a\u4e49\u8d44\u6e90\u7684\u65b9\u6cd5\u3002"))}d.isMDXComponent=!0}}]);