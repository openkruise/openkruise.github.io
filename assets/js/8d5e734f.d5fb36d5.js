"use strict";(self.webpackChunkopenkruise_io=self.webpackChunkopenkruise_io||[]).push([[7852],{3905:function(e,n,t){t.d(n,{Zo:function(){return c},kt:function(){return m}});var a=t(67294);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function l(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function o(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?l(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):l(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function i(e,n){if(null==e)return{};var t,a,r=function(e,n){if(null==e)return{};var t,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)t=l[a],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)t=l[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var u=a.createContext({}),s=function(e){var n=a.useContext(u),t=n;return e&&(t="function"==typeof e?e(n):o(o({},n),e)),t},c=function(e){var n=s(e.components);return a.createElement(u.Provider,{value:n},e.children)},p={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},d=a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,l=e.originalType,u=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),d=s(t),m=r,f=d["".concat(u,".").concat(m)]||d[m]||p[m]||l;return t?a.createElement(f,o(o({ref:n},c),{},{components:t})):a.createElement(f,o({ref:n},c))}));function m(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var l=t.length,o=new Array(l);o[0]=d;var i={};for(var u in n)hasOwnProperty.call(n,u)&&(i[u]=n[u]);i.originalType=e,i.mdxType="string"==typeof e?e:r,o[1]=i;for(var s=2;s<l;s++)o[s]=t[s];return a.createElement.apply(null,o)}return a.createElement.apply(null,t)}d.displayName="MDXCreateElement"},62852:function(e,n,t){t.r(n),t.d(n,{assets:function(){return d},contentTitle:function(){return c},default:function(){return v},frontMatter:function(){return s},metadata:function(){return p},toc:function(){return m}});var a=t(87462),r=t(63366),l=(t(67294),t(3905)),o=t(65488),i=t(85162),u=["components"],s={},c="Canary Release",p={unversionedId:"user-manuals/strategy-canary-update",id:"user-manuals/strategy-canary-update",title:"Canary Release",description:"Canary Release Process",source:"@site/rollouts/user-manuals/strategy-canary-update.md",sourceDirName:"user-manuals",slug:"/user-manuals/strategy-canary-update",permalink:"/rollouts/user-manuals/strategy-canary-update",draft:!1,tags:[],version:"current",lastUpdatedBy:"Zhen Zhang",lastUpdatedAt:1705494569,formattedLastUpdatedAt:"1/17/2024",frontMatter:{},sidebar:"rollouts",previous:{title:"Basic Usage Guide",permalink:"/rollouts/user-manuals/basic-usage"},next:{title:"Multi-Batch Release",permalink:"/rollouts/user-manuals/strategy-multi-batch-update"}},d={},m=[{value:"Canary Release Process",id:"canary-release-process",level:2},{value:"Recommended Configuration",id:"recommended-configuration",level:2},{value:"Behavior Explanation",id:"behavior-explanation",level:3}],f={toc:m};function v(e){var n=e.components,s=(0,r.Z)(e,u);return(0,l.kt)("wrapper",(0,a.Z)({},f,s,{components:n,mdxType:"MDXLayout"}),(0,l.kt)("h1",{id:"canary-release"},"Canary Release"),(0,l.kt)("h2",{id:"canary-release-process"},"Canary Release Process"),(0,l.kt)("p",null,(0,l.kt)("img",{alt:"ab",src:t(4763).Z,width:"4643",height:"1583"})),(0,l.kt)("h2",{id:"recommended-configuration"},"Recommended Configuration"),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Note: v1beta1 available from Kruise Rollout v0.5.0.")),(0,l.kt)(o.Z,{mdxType:"Tabs"},(0,l.kt)(i.Z,{value:"v1beta1",label:"v1beta1",default:!0,mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-YAML"},"apiVersion: rollouts.kruise.io/v1beta1\nkind: Rollout\nmetadata:\n  name: rollouts-demo\nspec:\n  workloadRef:\n    apiVersion: apps/v1\n    kind: Deployment\n    name: workload-demo\n  strategy:\n    canary:\n      enableExtraWorkloadForCanary: true\n      steps:\n      - traffic: 20%\n        replicas: 20%\n      trafficRoutings:\n      - service: service-demo\n        ingress:\n          classType: nginx\n          name: ingress-demo\n"))),(0,l.kt)(i.Z,{value:"v1alpha1",label:"v1alpha1",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-YAML"},"apiVersion: rollouts.kruise.io/v1alpha1\nkind: Rollout\nmetadata:\n  name: rollouts-demo\n  annotations:\n    rollouts.kruise.io/rolling-style: canary\nspec:\n  objectRef:\n    workloadRef:\n      apiVersion: apps/v1\n      kind: Deployment\n      name: workload-demo\n  strategy:\n    canary:\n      steps:\n      - weight: 20\n      trafficRoutings:\n      - service: service-demo\n        ingress:\n          classType: nginx\n          name: ingress-demo\n")))),(0,l.kt)("h3",{id:"behavior-explanation"},"Behavior Explanation"),(0,l.kt)("p",null,"When you apply a new revision for ",(0,l.kt)("inlineCode",{parentName:"p"},"workload-demo"),":"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"The workload ",(0,l.kt)("inlineCode",{parentName:"li"},"workload-demo")," will be paused, and no Pod is updated;"),(0,l.kt)("li",{parentName:"ul"},'A new canary Deployment will be created, and its replicas is "20%" of ',(0,l.kt)("inlineCode",{parentName:"li"},"workload-demo")," (There will be ",(0,l.kt)("inlineCode",{parentName:"li"},"120%")," Pods totally);"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"20%")," traffic will be guided to the new canary Deployment Pods.")),(0,l.kt)("p",null,"When you thought the verification of canary is ok, and confirmed to next step:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"The workload ",(0,l.kt)("inlineCode",{parentName:"li"},"workload-demo")," will be upgraded using native rolling update strategy;"),(0,l.kt)("li",{parentName:"ul"},"The traffic will be restored to native load balance strategy."),(0,l.kt)("li",{parentName:"ul"},"The canary Deployment and Pods will be deleted.")))}v.isMDXComponent=!0},85162:function(e,n,t){t.d(n,{Z:function(){return o}});var a=t(67294),r=t(86010),l="tabItem_Ymn6";function o(e){var n=e.children,t=e.hidden,o=e.className;return a.createElement("div",{role:"tabpanel",className:(0,r.Z)(l,o),hidden:t},n)}},65488:function(e,n,t){t.d(n,{Z:function(){return m}});var a=t(87462),r=t(67294),l=t(86010),o=t(72389),i=t(67392),u=t(7094),s=t(12466),c="tabList__CuJ",p="tabItem_LNqP";function d(e){var n,t,o=e.lazy,d=e.block,m=e.defaultValue,f=e.values,v=e.groupId,y=e.className,b=r.Children.map(e.children,(function(e){if((0,r.isValidElement)(e)&&"value"in e.props)return e;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})),g=null!=f?f:b.map((function(e){var n=e.props;return{value:n.value,label:n.label,attributes:n.attributes}})),h=(0,i.l)(g,(function(e,n){return e.value===n.value}));if(h.length>0)throw new Error('Docusaurus error: Duplicate values "'+h.map((function(e){return e.value})).join(", ")+'" found in <Tabs>. Every value needs to be unique.');var k=null===m?m:null!=(n=null!=m?m:null==(t=b.find((function(e){return e.props.default})))?void 0:t.props.value)?n:b[0].props.value;if(null!==k&&!g.some((function(e){return e.value===k})))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+k+'" but none of its children has the corresponding value. Available values are: '+g.map((function(e){return e.value})).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");var w=(0,u.U)(),N=w.tabGroupChoices,T=w.setTabGroupChoices,O=(0,r.useState)(k),C=O[0],E=O[1],x=[],P=(0,s.o5)().blockElementScrollPositionUntilNextRender;if(null!=v){var j=N[v];null!=j&&j!==C&&g.some((function(e){return e.value===j}))&&E(j)}var R=function(e){var n=e.currentTarget,t=x.indexOf(n),a=g[t].value;a!==C&&(P(n),E(a),null!=v&&T(v,String(a)))},Z=function(e){var n,t=null;switch(e.key){case"ArrowRight":var a,r=x.indexOf(e.currentTarget)+1;t=null!=(a=x[r])?a:x[0];break;case"ArrowLeft":var l,o=x.indexOf(e.currentTarget)-1;t=null!=(l=x[o])?l:x[x.length-1]}null==(n=t)||n.focus()};return r.createElement("div",{className:(0,l.Z)("tabs-container",c)},r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,l.Z)("tabs",{"tabs--block":d},y)},g.map((function(e){var n=e.value,t=e.label,o=e.attributes;return r.createElement("li",(0,a.Z)({role:"tab",tabIndex:C===n?0:-1,"aria-selected":C===n,key:n,ref:function(e){return x.push(e)},onKeyDown:Z,onFocus:R,onClick:R},o,{className:(0,l.Z)("tabs__item",p,null==o?void 0:o.className,{"tabs__item--active":C===n})}),null!=t?t:n)}))),o?(0,r.cloneElement)(b.filter((function(e){return e.props.value===C}))[0],{className:"margin-top--md"}):r.createElement("div",{className:"margin-top--md"},b.map((function(e,n){return(0,r.cloneElement)(e,{key:n,hidden:e.props.value!==C})}))))}function m(e){var n=(0,o.Z)();return r.createElement(d,(0,a.Z)({key:String(n)},e))}},4763:function(e,n,t){n.Z=t.p+"assets/images/canary-cd02349ab581eac50c75ad0a3a1edc35.jpg"}}]);