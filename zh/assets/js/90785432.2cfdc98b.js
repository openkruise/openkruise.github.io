"use strict";(self.webpackChunkopenkruise_io=self.webpackChunkopenkruise_io||[]).push([[5421],{3905:function(e,t,n){n.d(t,{Zo:function(){return d},kt:function(){return m}});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var i=r.createContext({}),p=function(e){var t=r.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},d=function(e){var t=p(e.components);return r.createElement(i.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},c=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,i=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),c=p(n),m=a,k=c["".concat(i,".").concat(m)]||c[m]||u[m]||o;return n?r.createElement(k,s(s({ref:t},d),{},{components:n})):r.createElement(k,s({ref:t},d))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,s=new Array(o);s[0]=c;var l={};for(var i in t)hasOwnProperty.call(t,i)&&(l[i]=t[i]);l.originalType=e,l.mdxType="string"==typeof e?e:a,s[1]=l;for(var p=2;p<o;p++)s[p]=n[p];return r.createElement.apply(null,s)}return r.createElement.apply(null,n)}c.displayName="MDXCreateElement"},60514:function(e,t,n){n.r(t),n.d(t,{assets:function(){return d},contentTitle:function(){return i},default:function(){return m},frontMatter:function(){return l},metadata:function(){return p},toc:function(){return u}});var r=n(87462),a=n(63366),o=(n(67294),n(3905)),s=["components"],l={title:"PodProbeMarker"},i=void 0,p={unversionedId:"user-manuals/podprobemarker",id:"version-v1.6/user-manuals/podprobemarker",title:"PodProbeMarker",description:"FEATURE STATE: Kruise v1.3.0",source:"@site/i18n/zh/docusaurus-plugin-content-docs/version-v1.6/user-manuals/podprobemarker.md",sourceDirName:"user-manuals",slug:"/user-manuals/podprobemarker",permalink:"/zh/docs/v1.6/user-manuals/podprobemarker",draft:!1,editUrl:"https://github.com/openkruise/openkruise.io/edit/master/docs/user-manuals/podprobemarker.md",tags:[],version:"v1.6",lastUpdatedBy:"berg",lastUpdatedAt:1711105168,formattedLastUpdatedAt:"2024/3/22",frontMatter:{title:"PodProbeMarker"},sidebar:"docs",previous:{title:"PersistentPodState",permalink:"/zh/docs/v1.6/user-manuals/persistentpodstate"},next:{title:"Deletion Protection",permalink:"/zh/docs/v1.6/user-manuals/deletionprotection"}},d={},u=[{value:"Feature-gate",id:"feature-gate",level:2},{value:"Usage",id:"usage",level:2},{value:"\u652f\u6301 TcpSocket Probe",id:"\u652f\u6301-tcpsocket-probe",level:3},{value:"How to view Probe results?",id:"how-to-view-probe-results",level:2},{value:"Pod Status Conditions",id:"pod-status-conditions",level:3},{value:"Pod Metadata",id:"pod-metadata",level:3},{value:"Pod Event",id:"pod-event",level:3}],c={toc:u};function m(e){var t=e.components,n=(0,a.Z)(e,s);return(0,o.kt)("wrapper",(0,r.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"FEATURE STATE:")," Kruise v1.3.0"),(0,o.kt)("p",null,"Kubernetes\u63d0\u4f9b\u4e86\u4e09\u79cd\u9ed8\u8ba4\u7684Pod\u751f\u547d\u5468\u671f\u7ba1\u7406\uff1a"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Readiness Probe")," \u7528\u6765\u5224\u65ad\u4e1a\u52a1\u5bb9\u5668\u662f\u5426\u5df2\u7ecf\u51c6\u5907\u597d\u54cd\u5e94\u7528\u6237\u8bf7\u6c42\uff0c\u5982\u679c\u68c0\u67e5\u5931\u8d25\uff0c\u4f1a\u5c06\u8be5Pod\u4eceService Endpoints\u4e2d\u5254\u9664\u3002"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Liveness Probe")," \u7528\u6765\u5224\u65ad\u5bb9\u5668\u7684\u5065\u5eb7\u72b6\u6001\uff0c\u5982\u679c\u68c0\u67e5\u5931\u8d25\uff0ckubelet\u5c06\u4f1a\u91cd\u542f\u8be5\u5bb9\u5668\u3002"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Startup Probe")," \u7528\u6765\u5224\u65ad\u5bb9\u5668\u662f\u5426\u542f\u52a8\u5b8c\u6210\uff0c\u5982\u679c\u5b9a\u4e49\u4e86\u8be5Probe\uff0c\u90a3\u4e48Readiness Probe\u4e0eLiveness Probe\u5c06\u4f1a\u5728\u5b83\u6210\u529f\u4e4b\u540e\u518d\u6267\u884c\u3002")),(0,o.kt)("p",null,"\u6240\u4ee5Kubernetes\u4e2d\u63d0\u4f9b\u7684Probe\u80fd\u529b\u90fd\u5df2\u7ecf\u9650\u5b9a\u4e86\u7279\u5b9a\u7684\u8bed\u4e49\u4ee5\u53ca\u76f8\u5173\u7684\u884c\u4e3a\u3002",(0,o.kt)("strong",{parentName:"p"},"\u9664\u6b64\u4e4b\u5916\uff0c\u5176\u5b9e\u8fd8\u662f\u5b58\u5728\u81ea\u5b9a\u4e49Probe\u8bed\u4e49\u4ee5\u53ca\u76f8\u5173\u884c\u4e3a\u7684\u9700\u6c42"),"\uff0c\u4f8b\u5982\uff1a"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"GameServer\u5b9a\u4e49 Idle Probe \u7528\u6765\u5224\u65ad\u8be5Pod\u5f53\u524d\u662f\u5426\u5b58\u5728\u6e38\u620f\u5bf9\u5c40"),"\uff0c\u5982\u679c\u6ca1\u6709\uff0c\u4ece\u6210\u672c\u4f18\u5316\u7684\u89d2\u5ea6\uff0c\u53ef\u4ee5\u5c06\u8be5Pod\u7f29\u5bb9\u6389\u3002"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"K8S Operator\u5b9a\u4e49 main-secondary Probe \u6765\u5224\u65ad\u5f53\u524dPod\u7684\u89d2\u8272\uff08main or secondary\uff09"),"\uff0c\u5347\u7ea7\u7684\u65f6\u5019\uff0c\u53ef\u4ee5\u4f18\u5148\u5347\u7ea7 secondary\uff0c\u8fdb\u800c\u8fbe\u5230\u5347\u7ea7\u8fc7\u7a0b\u53ea\u6709\u4e00\u6b21\u9009\u4e3b\u7684\u884c\u4e3a\uff0c\u964d\u4f4e\u5347\u7ea7\u8fc7\u7a0b\u4e2d\u670d\u52a1\u6296\u52a8\u65f6\u95f4\u3002")),(0,o.kt)("p",null,"OpenKruise\u63d0\u4f9b\u4e86\u81ea\u5b9a\u4e49Probe\u7684\u80fd\u529b\uff0c\u5e76\u5c06\u7ed3\u679c\u8fd4\u56de\u5230Pod Status\u4e2d\uff0c\u7528\u6237\u53ef\u4ee5\u6839\u636e\u8be5\u7ed3\u679c\u51b3\u5b9a\u540e\u7eed\u7684\u884c\u4e3a\u3002"),(0,o.kt)("h2",{id:"feature-gate"},"Feature-gate"),(0,o.kt)("p",null,"PodProbeMarker\u80fd\u529b\u9ed8\u8ba4\u662f\u5173\u95ed\u7684, \u4f60\u53ef\u4ee5\u901a\u8fc7 feature-gate ",(0,o.kt)("em",{parentName:"p"},"PodProbeMarkerGate")," \u6253\u5f00\uff0c\u5982\u4e0b\uff1a"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},'$ helm install kruise https://... --set featureGates="PodProbeMarkerGate=true"\n')),(0,o.kt)("h2",{id:"usage"},"Usage"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-yaml"},"apiVersion: apps.kruise.io/v1alpha1\nkind: PodProbeMarker\nmetadata:\n  name: game-server-probe\n  namespace: ns\nspec:\n  selector:\n    matchLabels:\n      app: game-server\n  probes:\n  - name: Idle\n    containerName: game-server\n    probe:\n      exec:\n        command:\n        - /home/game/idle.sh\n      initialDelaySeconds: 10\n      timeoutSeconds: 3\n      periodSeconds: 10\n      successThreshold: 1\n      failureThreshold: 3\n    markerPolicy:\n    - state: Succeeded\n      labels:\n        gameserver-idle: 'true'\n      annotations:\n        controller.kubernetes.io/pod-deletion-cost: '-10'\n    - state: Failed\n      labels:\n        gameserver-idle: 'false'\n      annotations:\n        controller.kubernetes.io/pod-deletion-cost: '10'\n    podConditionType: game.io/idle\n")),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"spec.selector"),": \u6839\u636eLabel\u9009\u62e9\u5339\u914d\u7684Pods\uff0cMatchLabels\u548cMatchExpressions\u90fd\u652f\u6301\u3002\u8be6\u60c5\u8bf7\u53c2\u8003\uff1a",(0,o.kt)("a",{parentName:"li",href:"https://kubernetes.io/docs/concepts/overview/working-with-objects/labels"},"https://kubernetes.io/docs/concepts/overview/working-with-objects/labels")," \u3002\n\u5b9a\u4e49\u540e\uff0c\u8be5selector\u4e0d\u5141\u8bb8\u4fee\u6539\u3002"),(0,o.kt)("li",{parentName:"ul"},"spec.probes",(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"name"),": probe\u540d\u5b57\uff0c\u9700\u8981\u5728Pod\u5185\u662f\u552f\u4e00\u7684\uff0c\u54ea\u6015\u4e0d\u540c\u7684\u5bb9\u5668\u4e4b\u95f4\u4e5f\u9700\u8981\u552f\u4e00"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"containerName"),": \u6267\u884cprobe\u7684\u5bb9\u5668"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"probe"),": probe\u76f8\u5173\u7684API\u5b9a\u4e49\uff0c\u4e0e\u539f\u751fK8S probe\u4e00\u81f4\uff08\u5f53\u524d\u53ea\u652f\u6301 Exec\uff09\u3002\u8be6\u60c5\u8bf7\u53c2\u8003\uff1a",(0,o.kt)("a",{parentName:"li",href:"https://kubernetes.io/docs/tasks/configure-pod-container/configure-liveness-readiness-startup-probes/#configure-probes"},"https://kubernetes.io/docs/tasks/configure-pod-container/configure-liveness-readiness-startup-probes/#configure-probes")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"markerPolicy"),": \u6839\u636eProbe\u6267\u884c\u7ed3\u679c\uff08Succeeded\u6216Failed\uff09\uff0c\u5728Pod\u4e0a\u9762\u6253\u7279\u5b9a\u7684Labels\u548cAnnotations\u3002",(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"state: probe\u7ed3\u679c\uff0cSucceeded \u6216 Failed"),(0,o.kt)("li",{parentName:"ul"},"labels: \u5982\u679c\u7ed3\u679c\u6ee1\u8db3\uff0c\u6253 labels \u5230Pod\u4e0a"),(0,o.kt)("li",{parentName:"ul"},"annotations: \u5982\u679c\u7ed3\u679c\u6ee1\u8db3\uff0c\u6253 annotations \u5230Pod\u4e0a"))),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"podConditionType"),": \u5c06Probe\u6267\u884c\u7ed3\u679c\uff08Succeeded\u6216Failed\uff09\u4fdd\u5b58\u5230pod condition\u4e0a\u3002\u5982\u679c\u8be5\u5b57\u6bb5\u4e3a\u7a7a\uff0cprobe\u6267\u884c\u7ed3\u679c\u5c06\u4e0d\u4f1a\u540c\u6b65\u5230pod condition\u3002")))),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"\u6ce8\u610f\uff1a")," \u5982\u679c\u53ea\u5b9a\u4e49\u4e86\u4e00\u79cdMarker Policy\u7b56\u7565\uff0c\u4f8b\u5982\uff1a\u53ea\u5b9a\u4e49\u4e86 State=Succeeded\uff0cPatch Labels","[healthy]","='true'\u3002\u5f53Probe\u6267\u884c\u6210\u529f\u65f6\uff0c\u5c06\u4f1aPatch Label","[healthy]","='true' \u5230Pod\u4e0a\u3002\u5f53Probe\u6267\u884c\u5931\u8d25\u65f6\uff0cLabel","[healthy]","\u5c06\u4f1a\u88ab\u5220\u9664\u3002"),(0,o.kt)("h3",{id:"\u652f\u6301-tcpsocket-probe"},"\u652f\u6301 TcpSocket Probe"),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"FEATURE STATE:")," Kruise v1.6.0"),(0,o.kt)("p",null,"\u6839\u636e\u5982\u4e0b\u914d\u7f6e\uff0ckruise-daemon \u4f1a\u5c1d\u8bd5\u4e0e\u5bb9\u5668 Port \u5efa\u7acb\u4e00\u4e2asocket\u8fde\u63a5\uff0c\u5982\u679c\u5efa\u7acb\u6210\u529f\uff0c\u5219 Probe \u5c06\u4f1a\u8fd4\u56de ",(0,o.kt)("inlineCode",{parentName:"p"},"Succeeded"),"\uff0c\u5426\u5219 ",(0,o.kt)("inlineCode",{parentName:"p"},"Failed"),"\u3002"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-yaml"},"apiVersion: apps.kruise.io/v1alpha1\nkind: PodProbeMarker\nmetadata:\n  name: game-server-probe\n  namespace: ns\nspec:\n  selector:\n    matchLabels:\n      app: game-server\n  probes:\n  - name: Idle\n    containerName: game-server\n    probe:\n      tcpSocket:\n        port: 8080\n      initialDelaySeconds: 15\n      periodSeconds: 10\n")),(0,o.kt)("h2",{id:"how-to-view-probe-results"},"How to view Probe results?"),(0,o.kt)("h3",{id:"pod-status-conditions"},"Pod Status Conditions"),(0,o.kt)("p",null,"\u5982\u679c\u7528\u6237\u5b9a\u4e49\u4e86podConditionType\uff0c\u5c06Probe\u6267\u884c\u7ed3\u679c\uff08Succeeded\u6216Failed\uff09\u4fdd\u5b58\u5230pod condition\u4e0a\uff0c\u5176\u4e2d",(0,o.kt)("strong",{parentName:"p"},"condition.type=podConditionType"),"\uff0c\u5177\u4f53\u5982\u4e0b\uff1a"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-yaml"},"apiVersion: v1\nkind: Pod\nmetadata:\n  labels:\n    app: game-server\n  name: game-server-58cb9f5688-7sbd8\n  namespace: ns\n...\nstatus:\n  conditions:\n    # podConditionType\n  - type: game.io/idle\n    # Probe State 'Succeeded' indicates 'True', and 'Failed' indicates 'False'\n    status: \"True\"\n    lastProbeTime: \"2022-09-09T07:13:04Z\"\n    lastTransitionTime: \"2022-09-09T07:13:04Z\"\n    # If the probe fails to execute, the message is stderr\n    message: \"\"\n")),(0,o.kt)("p",null,"\u8be5\u79cd\u65b9\u5f0f\u53ef\u4ee5\u4e0eKubernetes ",(0,o.kt)("a",{parentName:"p",href:"https://kubernetes.io/docs/concepts/workloads/pods/pod-lifecycle/#pod-readiness-gate"},"Readiness Gate"),"\u7ed3\u5408\u4f7f\u7528\uff0c\u8fbe\u5230\u7075\u6d3b\u63a7\u5236Pod\u662f\u5426Ready\u7684\u6548\u679c\u3002"),(0,o.kt)("h3",{id:"pod-metadata"},"Pod Metadata"),(0,o.kt)("p",null,"\u5982\u679c\u7528\u6237\u5b9a\u4e49\u4e86 MarkerPolicy\uff0cOpenKruise\u5c06\u4f1aPatch\u7279\u5b9a\u7684Metadata\u5230Pod\u4e0a\uff0c\u5982\u4e0b\uff1a"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-yaml"},"apiVersion: v1\nkind: Pod\nmetadata:\n  labels:\n    app: game-server\n    gameserver-idle: 'true'\n  annotations:\n    controller.kubernetes.io/pod-deletion-cost: '-10'\n  name: game-server-58cb9f5688-7sbd8\n  namespace: ns\n")),(0,o.kt)("p",null,"OpenKruise ",(0,o.kt)("a",{parentName:"p",href:"https://openkruise.io/docs/user-manuals/cloneset#update-sequence"},"CloneSet")," \u4e0e\n",(0,o.kt)("a",{parentName:"p",href:"https://openkruise.io/docs/user-manuals/advancedstatefulset#update-sequence"},"Advanced StatefulSet")," \u90fd\u652f\u6301\u6839\u636ePod Label\u63a7\u5236\u5347\u7ea7\u4f18\u5148\u7ea7\u7684\u80fd\u529b\u3002\n\u4e0e\u6b64\u540c\u65f6\uff0c\u793e\u533a\u539f\u751fDeployment\u4e0eKruise CloneSet\u4e5f\u652f\u6301\u57fa\u4e8e ",(0,o.kt)("a",{parentName:"p",href:"https://kubernetes.io/docs/concepts/workloads/controllers/replicaset/#pod-deletion-cost"},"Deletion Cost")," \u7684\u7f29\u5bb9\u4f18\u5148\u7ea7\u4ee5\u53ca\u5347\u7ea7\u987a\u5e8f\u3002\n\u6240\u4ee5Custom Probe MarkerPolicy\u53ef\u4ee5\u4e0e\u4e0a\u9762\u80fd\u529b\u76f8\u7ed3\u5408\uff0c\u8fbe\u5230\u7f29\u5bb9\u6216\u5347\u7ea7\u4f18\u5148\u7ea7\u7684\u6548\u679c\u3002"),(0,o.kt)("h3",{id:"pod-event"},"Pod Event"),(0,o.kt)("p",null,"\u901a\u8fc7pod event\u53ef\u4ee5\u67e5\u770b\u5386\u53f2\u7684probe\u6267\u884c\u7ed3\u679c\uff0c\u5982\u4e0b\uff1a"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"$ kubectl describe pods -n ns game-server-58cb9f5688-7sbd8\nEvents:\n  Type    Reason                Age                From                         Message\n  ----    ------                ----               ----                         -------\n  Normal  KruiseProbeFailed     37s (x2 over 47s)  kruise-daemon-podprobe\n  Normal  KruiseProbeSucceeded  36s (x2 over 37s)  kruise-daemon-podprobe\n")))}m.isMDXComponent=!0}}]);