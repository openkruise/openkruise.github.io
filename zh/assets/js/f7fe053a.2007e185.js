"use strict";(self.webpackChunkopenkruise_io=self.webpackChunkopenkruise_io||[]).push([[583],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return m}});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var u=r.createContext({}),s=function(e){var t=r.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},p=function(e){var t=s(e.components);return r.createElement(u.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,u=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),d=s(n),m=a,f=d["".concat(u,".").concat(m)]||d[m]||c[m]||o;return n?r.createElement(f,l(l({ref:t},p),{},{components:n})):r.createElement(f,l({ref:t},p))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,l=new Array(o);l[0]=d;var i={};for(var u in t)hasOwnProperty.call(t,u)&&(i[u]=t[u]);i.originalType=e,i.mdxType="string"==typeof e?e:a,l[1]=i;for(var s=2;s<o;s++)l[s]=n[s];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},30179:function(e,t,n){n.r(t),n.d(t,{assets:function(){return p},contentTitle:function(){return u},default:function(){return m},frontMatter:function(){return i},metadata:function(){return s},toc:function(){return c}});var r=n(87462),a=n(63366),o=(n(67294),n(3905)),l=["components"],i={},u="A/B \u6d4b\u8bd5",s={unversionedId:"user-manuals/strategy-ab-testing",id:"user-manuals/strategy-ab-testing",title:"A/B \u6d4b\u8bd5",description:"A/B \u6d4b\u8bd5\u6d41\u7a0b",source:"@site/i18n/zh/docusaurus-plugin-content-docs-rollouts/current/user-manuals/strategy-ab-testing.md",sourceDirName:"user-manuals",slug:"/user-manuals/strategy-ab-testing",permalink:"/zh/rollouts/user-manuals/strategy-ab-testing",draft:!1,tags:[],version:"current",lastUpdatedBy:"Zhen Zhang",lastUpdatedAt:1708579440,formattedLastUpdatedAt:"2024/2/22",frontMatter:{},sidebar:"rollouts",previous:{title:"\u591a\u6279\u6b21\u53d1\u5e03",permalink:"/zh/rollouts/user-manuals/strategy-multi-batch-update"},next:{title:"\u5168\u94fe\u8def\u7070\u5ea6",permalink:"/zh/rollouts/user-manuals/strategy-end2end-canary-update"}},p={},c=[{value:"A/B \u6d4b\u8bd5\u6d41\u7a0b",id:"ab-\u6d4b\u8bd5\u6d41\u7a0b",level:2},{value:"\u914d\u7f6e\u793a\u4f8b",id:"\u914d\u7f6e\u793a\u4f8b",level:2},{value:"\u884c\u4e3a\u89e3\u91ca",id:"\u884c\u4e3a\u89e3\u91ca",level:3}],d={toc:c};function m(e){var t=e.components,i=(0,a.Z)(e,l);return(0,o.kt)("wrapper",(0,r.Z)({},d,i,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"ab-\u6d4b\u8bd5"},"A/B \u6d4b\u8bd5"),(0,o.kt)("h2",{id:"ab-\u6d4b\u8bd5\u6d41\u7a0b"},"A/B \u6d4b\u8bd5\u6d41\u7a0b"),(0,o.kt)("p",null,"A/B\u6d4b\u8bd5\u6d41\u7a0b\u7ed3\u5408\u4e86",(0,o.kt)("strong",{parentName:"p"},"\u91d1\u4e1d\u96c0\u53d1\u5e03"),"\uff1a"),(0,o.kt)("center",null,(0,o.kt)("img",{src:n(27048).Z,width:"90%"})),(0,o.kt)("h2",{id:"\u914d\u7f6e\u793a\u4f8b"},"\u914d\u7f6e\u793a\u4f8b"),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"\u6ce8\u610f\uff1a\u76ee\u524d\uff0cA/B\u6d4b\u8bd5\u7b56\u7565\u53ef\u7528\u4e8eCloneSet\u3001StatefulSet\u3001Advanced StatefulSet\u548cDeployment\u3002")),(0,o.kt)("p",null,"\u5b9e\u9645\u4e0a\uff0cA/B\u6d4b\u8bd5\u9700\u8981\u4e0e\u91d1\u4e1d\u96c0\u6216\u591a\u6279\u6b21\u53d1\u5e03\u7b56\u7565\u7ed3\u5408\u4f7f\u7528\uff0c\u5982\u4e0a\u56fe\u6240\u793a\u3002"),(0,o.kt)("p",null,"\u63a5\u4e0b\u6765\uff0c\u6211\u4eec\u5c06\u63d0\u4f9b\u4e00\u4e2a\u5173\u4e8e",(0,o.kt)("strong",{parentName:"p"},"A/B\u6d4b\u8bd5\u4e0e\u591a\u6279\u6b21\u53d1\u5e03\u7b56\u7565"),"\u7684\u793a\u4f8b\uff1a"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-YAML"},"apiVersion: rollouts.kruise.io/v1beta1\nkind: Rollout\nmetadata:\n  name: rollouts-demo\nspec:\n  workloadRef:\n    apiVersion: apps/v1\n    kind: Deployment\n    name: workload-demo\n  strategy:\n    canary:\n      enableExtraWorkloadForCanary: false\n      steps:\n      - replicas: 1\n        matches:\n        - headers:\n          - name: user-agent\n            type: Exact\n            value: pc\n      - replicas: 50%\n      - replicas: 100%\n      trafficRoutings:\n      - service: service-demo\n        ingress:\n          classType: nginx\n          name: ingress-demo\n")),(0,o.kt)("h3",{id:"\u884c\u4e3a\u89e3\u91ca"},"\u884c\u4e3a\u89e3\u91ca"),(0,o.kt)("p",null,"\u5f53\u60a8\u4e3a ",(0,o.kt)("inlineCode",{parentName:"p"},"workload-demo")," \u5e94\u7528\u65b0\u4fee\u8ba2\u7248\u672c\u65f6\uff1a"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"\u5728\u7b2c\u4e00\u6279\u4e2d\u5c06\u66f4\u65b0",(0,o.kt)("inlineCode",{parentName:"li"},"1"),"\u4e2aPod\uff0c\u5177\u6709HTTP\u5934",(0,o.kt)("inlineCode",{parentName:"li"},"user-agent=pc"),"\u7684\u6d41\u91cf\u5c06\u88ab\u5f15\u5bfc\u5230\u65b0\u7248\u672cPod\uff0c\u5176\u4ed6\u6d41\u91cf\u5c06\u88ab\u5f15\u5bfc\u5230\u7a33\u5b9a\u7248\u672cPod\u3002\u9700\u8981\u624b\u52a8\u786e\u8ba4\u5230\u4e0b\u4e00\u6279\u3002"),(0,o.kt)("li",{parentName:"ul"},"\u5728\u7b2c\u4e8c\u6279\u4e2d\u5c06\u66f4\u65b0",(0,o.kt)("inlineCode",{parentName:"li"},"50%"),"\u7684Pod\uff0cHeader\u5339\u914d\u89c4\u5219\u5c06\u88ab\u53d6\u6d88\uff0c\u6240\u6709\u6d41\u91cf\u5c06\u9075\u5faa\u539f\u59cb\u8d1f\u8f7d\u5747\u8861\u89c4\u5219\u3002\u9700\u8981\u624b\u52a8\u786e\u8ba4\u5230\u4e0b\u4e00\u6279\u3002"),(0,o.kt)("li",{parentName:"ul"},"\u5728\u7b2c\u4e09\u6279\u4e2d\u5c06\u66f4\u65b0",(0,o.kt)("inlineCode",{parentName:"li"},"100%"),"\u7684Pod\uff0cHeader\u5339\u914d\u89c4\u5219\u5c06\u88ab\u53d6\u6d88\uff0c\u6240\u6709\u6d41\u91cf\u5c06\u9075\u5faa\u539f\u59cb\u8d1f\u8f7d\u5747\u8861\u89c4\u5219\u3002")))}m.isMDXComponent=!0},27048:function(e,t,n){t.Z=n.p+"assets/images/ab-testing-e537fc007e1e4a9500eeb07d38faa639.jpg"}}]);