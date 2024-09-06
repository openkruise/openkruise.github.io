"use strict";(self.webpackChunkopenkruise_io=self.webpackChunkopenkruise_io||[]).push([[2920],{3905:function(e,n,t){t.d(n,{Zo:function(){return u},kt:function(){return m}});var r=t(67294);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function o(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function s(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var l=r.createContext({}),p=function(e){var n=r.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):o(o({},n),e)),t},u=function(e){var n=p(e.components);return r.createElement(l.Provider,{value:n},e.children)},c={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},d=r.forwardRef((function(e,n){var t=e.components,a=e.mdxType,i=e.originalType,l=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),d=p(t),m=a,h=d["".concat(l,".").concat(m)]||d[m]||c[m]||i;return t?r.createElement(h,o(o({ref:n},u),{},{components:t})):r.createElement(h,o({ref:n},u))}));function m(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var i=t.length,o=new Array(i);o[0]=d;var s={};for(var l in n)hasOwnProperty.call(n,l)&&(s[l]=n[l]);s.originalType=e,s.mdxType="string"==typeof e?e:a,o[1]=s;for(var p=2;p<i;p++)o[p]=t[p];return r.createElement.apply(null,o)}return r.createElement.apply(null,t)}d.displayName="MDXCreateElement"},53500:function(e,n,t){t.r(n),t.d(n,{assets:function(){return u},contentTitle:function(){return l},default:function(){return m},frontMatter:function(){return s},metadata:function(){return p},toc:function(){return c}});var r=t(87462),a=t(63366),i=(t(67294),t(3905)),o=["components"],s={title:"Job Sidecar Terminator"},l=void 0,p={unversionedId:"user-manuals/jobsidecarterminator",id:"user-manuals/jobsidecarterminator",title:"Job Sidecar Terminator",description:"FEATURE STATE: Kruise v1.4.0",source:"@site/docs/user-manuals/jobsidecarterminator.md",sourceDirName:"user-manuals",slug:"/user-manuals/jobsidecarterminator",permalink:"/docs/next/user-manuals/jobsidecarterminator",draft:!1,editUrl:"https://github.com/openkruise/openkruise.io/edit/master/docs/user-manuals/jobsidecarterminator.md",tags:[],version:"current",lastUpdatedBy:"berg",lastUpdatedAt:1724814279,formattedLastUpdatedAt:"8/28/2024",frontMatter:{title:"Job Sidecar Terminator"},sidebar:"docs",previous:{title:"SidecarSet",permalink:"/docs/next/user-manuals/sidecarset"},next:{title:"Container Launch Priority",permalink:"/docs/next/user-manuals/containerlaunchpriority"}},u={},c=[{value:"Requirements",id:"requirements",level:2},{value:"Usage",id:"usage",level:2},{value:"For Pods Running on Normal Nodes",id:"for-pods-running-on-normal-nodes",level:3},{value:"For Pods Running on Virtual Nodes",id:"for-pods-running-on-virtual-nodes",level:3},{value:"Step 1: Prepare a special image",id:"step-1-prepare-a-special-image",level:4},{value:"Step 2: Config your sidecar container",id:"step-2-config-your-sidecar-container",level:4},{value:"Ignore sidecar container with non-zero exit code",id:"ignore-sidecar-container-with-non-zero-exit-code",level:3},{value:"Notes",id:"notes",level:3}],d={toc:c};function m(e){var n=e.components,t=(0,a.Z)(e,o);return(0,i.kt)("wrapper",(0,r.Z)({},d,t,{components:n,mdxType:"MDXLayout"}),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"FEATURE STATE:")," Kruise v1.4.0"),(0,i.kt)("p",null,"In Kubernetes world, for job workload, one may expect pods enter ",(0,i.kt)("inlineCode",{parentName:"p"},"Completed")," phase once the main container exited. However, when these pods have long-running sidecar containers, these sidecars will actually remain running after the main containers completed."),(0,i.kt)("p",null,"To solve such problem, job sidecar terminator controller watches and terminates sidecar containers for such job-type Pods when its main containers completed."),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Note:")," If your kubernetes version >= 1.28, it is recommended that you use k8s native ",(0,i.kt)("a",{parentName:"p",href:"https://kubernetes.io/docs/concepts/workloads/pods/sidecar-containers"},"Sidecar Container")," to solve the above problem."),(0,i.kt)("h2",{id:"requirements"},"Requirements"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Enabled ",(0,i.kt)("inlineCode",{parentName:"li"},"SidecarTerminator")," feature gate when installing/upgrading Kruise (defaults to ",(0,i.kt)("inlineCode",{parentName:"li"},"disabled"),")."),(0,i.kt)("li",{parentName:"ul"},"Enabled ",(0,i.kt)("inlineCode",{parentName:"li"},"KruiseDaemon")," feature gate when installing/upgrading Kruise (defaults to ",(0,i.kt)("inlineCode",{parentName:"li"},"enabled"),").")),(0,i.kt)("h2",{id:"usage"},"Usage"),(0,i.kt)("h3",{id:"for-pods-running-on-normal-nodes"},"For Pods Running on Normal Nodes"),(0,i.kt)("p",null,"It is very easily to use this feature if your Pods run on normal nodes, you just need to add a special env to the sidecar containers you want to terminate in the Pods, and Kruise will terminate them using ",(0,i.kt)("a",{parentName:"p",href:"/docs/next/user-manuals/containerrecreaterequest"},"CRR")," at the right time:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-yaml"},'kind: Job\nspec:\n  template:\n    spec:\n      containers:\n        - name: sidecar\n          env:\n            - name: KRUISE_TERMINATE_SIDECAR_WHEN_JOB_EXIT\n              value: "true"\n        - name: main\n... ...\n')),(0,i.kt)("h3",{id:"for-pods-running-on-virtual-nodes"},"For Pods Running on Virtual Nodes"),(0,i.kt)("p",null,"For certain serverless container platforms like ",(0,i.kt)("a",{parentName:"p",href:"https://www.aliyun.com/product/eci"},"ECI")," and ",(0,i.kt)("a",{parentName:"p",href:"https://aws.amazon.com/cn/fargate/"},"Fargate"),", their Pods run on ",(0,i.kt)("a",{parentName:"p",href:"https://virtual-kubelet.io/#:~:text=Virtual%20Kubelet%20is%20an%20open,as%20serverless%20cloud%20container%20platforms."},"Virtual-Kubelet")," instead of normal nodes, which means Kruise cannot terminate its sidecar using CRR because Kruise Daemon cannot run on virtual-kubelet.\nHowever, we can address this issue by utilizing the pod in-place-update mechanism offered by native Kubernetes. If a sidecar container needs to be terminated, we can replace the original sidecar image with an image that exits as soon as it is pulled."),(0,i.kt)("h4",{id:"step-1-prepare-a-special-image"},"Step 1: Prepare a special image"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"This image should exit as soon as it is pulled and started."),(0,i.kt)("li",{parentName:"ul"},"This image should be compatible with the commands and args of original sidecar container.")),(0,i.kt)("h4",{id:"step-2-config-your-sidecar-container"},"Step 2: Config your sidecar container"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-yaml"},'kind: Job\nspec:\n  template:\n    spec:\n      containers:\n        - name: sidecar\n          env:\n            - name: KRUISE_TERMINATE_SIDECAR_WHEN_JOB_EXIT_WITH_IMAGE\n              value: "example/quick-exit:v1.0.0"\n        - name: main\n... ...\n')),(0,i.kt)("p",null,"Replace ",(0,i.kt)("inlineCode",{parentName:"p"},'"example/quick-exit:v1.0.0"')," with your prepared image."),(0,i.kt)("h3",{id:"ignore-sidecar-container-with-non-zero-exit-code"},"Ignore sidecar container with non-zero exit code"),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"FEATURE STATE:")," Kruise v1.6.0"),(0,i.kt)("p",null,"In previous versions, the sidecar container was required to be able to accept the ",(0,i.kt)("inlineCode",{parentName:"p"},"SIGTERM")," signal and to ensure that the exit code was ",(0,i.kt)("inlineCode",{parentName:"p"},"0"),".\nIf the sidecar container had non-zero exit code, it would result in Pod Phase=Failed."),(0,i.kt)("p",null,"As of Kruise 1.6.0, Kruise will ignore sidecar container with non-zero exit code, and Pod Phase only depend on the success or failure of the main containers."),(0,i.kt)("h3",{id:"notes"},"Notes"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Your sidecar container must respond the ",(0,i.kt)("inlineCode",{parentName:"p"},"SIGTERM")," signal, and the entrypoint should ",(0,i.kt)("inlineCode",{parentName:"p"},"exit 0")," when received this signal.")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"This feature can handle the Pods with ",(0,i.kt)("inlineCode",{parentName:"p"},"Never"),"/",(0,i.kt)("inlineCode",{parentName:"p"},"OnFailure")," restart policy, and doesn't care which type of job controllers they're controlled by.")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"The container with env ",(0,i.kt)("inlineCode",{parentName:"p"},"KRUISE_TERMINATE_SIDECAR_WHEN_JOB_EXIT")," will be treated as sidecars, the others as main containers.")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"The sidecars will be terminated when ",(0,i.kt)("strong",{parentName:"p"},"ALL")," main containers completed."),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"In ",(0,i.kt)("inlineCode",{parentName:"p"},"Never")," restart policy settings, main container will be treated as ",(0,i.kt)("inlineCode",{parentName:"p"},"completed")," once it exit.")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"In ",(0,i.kt)("inlineCode",{parentName:"p"},"OnFailure")," restart policy settings, main container will be treated as ",(0,i.kt)("inlineCode",{parentName:"p"},"completed")," once it exit and exit code must be ",(0,i.kt)("inlineCode",{parentName:"p"},"0"),".")))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"In Pods on real nodes mode, ",(0,i.kt)("inlineCode",{parentName:"p"},"KRUISE_TERMINATE_SIDECAR_WHEN_JOB_EXIT")," has a higher priority than ",(0,i.kt)("inlineCode",{parentName:"p"},"KRUISE_TERMINATE_SIDECAR_WHEN_JOB_EXIT_WITH_IMAGE")))))}m.isMDXComponent=!0}}]);