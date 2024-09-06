"use strict";(self.webpackChunkopenkruise_io=self.webpackChunkopenkruise_io||[]).push([[2521],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return h}});var a=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=a.createContext({}),p=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},u=function(e){var t=p(e.components);return a.createElement(s.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),d=p(n),h=o,m=d["".concat(s,".").concat(h)]||d[h]||c[h]||i;return n?a.createElement(m,r(r({ref:t},u),{},{components:n})):a.createElement(m,r({ref:t},u))}));function h(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,r=new Array(i);r[0]=d;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:o,r[1]=l;for(var p=2;p<i;p++)r[p]=n[p];return a.createElement.apply(null,r)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},47592:function(e,t,n){n.r(t),n.d(t,{assets:function(){return u},contentTitle:function(){return s},default:function(){return h},frontMatter:function(){return l},metadata:function(){return p},toc:function(){return c}});var a=n(87462),o=n(63366),i=(n(67294),n(3905)),r=["components"],l={slug:"openkruise-1.1",title:"OpenKruise v1.1, features enhanced, improve performance in large-scale clusters",authors:["FillZpp"],tags:["release"]},s=void 0,p={permalink:"/blog/openkruise-1.1",editUrl:"https://github.com/openkruise/openkruise.io/edit/master/blog/2022-03-29-release-1.1.md",source:"@site/blog/2022-03-29-release-1.1.md",title:"OpenKruise v1.1, features enhanced, improve performance in large-scale clusters",description:"We\u2019re pleased to announce the release of Kubernetes 1.1, which is a CNCF Sandbox level project.",date:"2022-03-29T00:00:00.000Z",formattedDate:"March 29, 2022",tags:[{label:"release",permalink:"/blog/tags/release"}],readingTime:7.9,truncated:!1,authors:[{name:"Siyu Wang",title:"Maintainer of OpenKruise",url:"https://github.com/FillZpp",imageURL:"https://github.com/FillZpp.png",key:"FillZpp"}],frontMatter:{slug:"openkruise-1.1",title:"OpenKruise v1.1, features enhanced, improve performance in large-scale clusters",authors:["FillZpp"],tags:["release"]},prevItem:{title:"OpenKruise v1.2, new PersistentPodState feature to achieve IP retention",permalink:"/blog/openkruise-1.2"},nextItem:{title:"OpenKruise v1.0, Reaching New Peaks of application automation",permalink:"/blog/openkruise-1.0"}},u={authorsImageUrls:[void 0]},c=[{value:"What&#39;s new?",id:"whats-new",level:2},{value:"1. Keep containers order for in-place update",id:"1-keep-containers-order-for-in-place-update",level:3},{value:"2. StatefulSetAutoDeletePVC",id:"2-statefulsetautodeletepvc",level:3},{value:"3. Advanced DaemonSet refactor, lifecycle hook",id:"3-advanced-daemonset-refactor-lifecycle-hook",level:3},{value:"4. Improve performance by disable DeepCopy",id:"4-improve-performance-by-disable-deepcopy",level:3},{value:"5. Other changes",id:"5-other-changes",level:3},{value:"Get Involved",id:"get-involved",level:2}],d={toc:c};function h(e){var t=e.components,n=(0,o.Z)(e,r);return(0,i.kt)("wrapper",(0,a.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"We\u2019re pleased to announce the release of Kubernetes 1.1, which is a CNCF Sandbox level project."),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://openkruise.io"},"OpenKruise")," is an extended component suite for Kubernetes, which mainly focuses on application automations, such as deployment, upgrade, ops and availability protection. Mostly features provided by OpenKruise are built primarily based on CRD extensions. They can work in pure Kubernetes clusters without any other dependences."),(0,i.kt)("h2",{id:"whats-new"},"What's new?"),(0,i.kt)("p",null,"In release v1.1, OpenKruise optimizes some existing features, and improves its performance in large-scale clusters.\nHere we are going to introduce some changes of it."),(0,i.kt)("p",null,"Note that OpenKruise v1.1 bumps Kubernetes dependencies to v1.22, which means we can use new fields of up to K8s v1.22 in Pod template of workloads like CloneSet and Advanced StatefulSet.\nBut OpenKruise can still be used in Kubernetes cluster >= 1.16 version."),(0,i.kt)("h3",{id:"1-keep-containers-order-for-in-place-update"},"1. Keep containers order for in-place update"),(0,i.kt)("p",null,"In the release v1.0 we published last year, OpenKruise has intruduced ",(0,i.kt)("a",{parentName:"p",href:"/docs/user-manuals/containerlaunchpriority/"},"Container Launch Priority"),",\nwhich supports to define different priorities for containers in a Pod and keeps their start order during Pod creation."),(0,i.kt)("p",null,"But in v1.0, it can only control the order in Pod creation. If you try to update the containers in-place, they will be updated at the same time."),(0,i.kt)("p",null,"Recently, the community has discussed with some companies such as LinkedIn and get more input from the users.\nIn some scenarios, the containers in Pod may have special relationship, for example base-container should firstly update its configuration before app-container update,\nor we have to forbid multiple containers updating together to avoid log-container losing the logs of app-container."),(0,i.kt)("p",null,"So, OpenKruise supports in-place update with container priorities since v1.1."),(0,i.kt)("p",null,"There is no extra options, just make sure containers have their launch priorities since Pod creation.\nIf you modify them ",(0,i.kt)("strong",{parentName:"p"},"both in once in-place update"),", Kruise will firstly update the containers with higher priority.\nThen Kruise will not update the containers with lower priority util the higher one has updated successfully."),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"The in-place udpate here includes both modification of image and env from metadata, read the ",(0,i.kt)("a",{parentName:"strong",href:"/docs/core-concepts/inplace-update"},"concept doc")," for more details")),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"For pods without container launch priorities, no guarantees of the execution order during in-place update multiple containers."),(0,i.kt)("li",{parentName:"ul"},"For pods with container launch priorities:",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"keep execution order during in-place update multiple containers with different priorities."),(0,i.kt)("li",{parentName:"ul"},"no guarantees of the execution order during in-place update multiple containers with the same priority.")))),(0,i.kt)("p",null,"For example, we have the CloneSet that includes two containers with different priorities:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-yaml"},'apiVersion: apps.kruise.io/v1alpha1\nkind: CloneSet\nmetadata:\n  ...\nspec:\n  replicas: 1\n  template:\n    metadata:\n      annotations:\n        app-config: "... config v1 ..."\n    spec:\n      containers:\n      - name: sidecar\n        env:\n        - name: KRUISE_CONTAINER_PRIORITY\n          value: "10"\n        - name: APP_CONFIG\n          valueFrom:\n            fieldRef:\n              fieldPath: metadata.annotations[\'app-config\']\n      - name: main\n        image: main-image:v1\n  updateStrategy:\n    type: InPlaceIfPossible\n')),(0,i.kt)("p",null,"When we update the CloneSet to change ",(0,i.kt)("inlineCode",{parentName:"p"},"app-config")," annotation and image of main container, which means both sidecar and main containers need to update,\nKruise will firstly in-place update pods that recreates sidecar container with the new env from annotation."),(0,i.kt)("p",null,"At this moment, we can find the ",(0,i.kt)("inlineCode",{parentName:"p"},"apps.kruise.io/inplace-update-state")," annotation in updated Pod and see its value:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "revision": "{CLONESET_NAME}-{HASH}",         // the target revision name of this in-place update\n  "updateTimestamp": "2022-03-22T09:06:55Z",    // the start time of this whole update\n  "nextContainerImages": {"main": "main-image:v2"},                // the next containers that should update images\n  // "nextContainerRefMetadata": {...},                            // the next containers that should update env from annotations/labels\n  "preCheckBeforeNext": {"containersRequiredReady": ["sidecar"]},  // the pre-check must be satisfied before the next containers can update\n  "containerBatchesRecord":[\n    {"timestamp":"2022-03-22T09:06:55Z","containers":["sidecar"]}  // the first batch of containers that have updated (it just means the spec of containers has updated, such as images in pod.spec.container or annotaions/labels, but dosn\'t mean the real containers on node have been updated completely)\n  ]\n}\n')),(0,i.kt)("p",null,"When the sidecar container has been updated successfully, Kruise will update the next main container. Finally, you will find the ",(0,i.kt)("inlineCode",{parentName:"p"},"apps.kruise.io/inplace-update-state")," annotation looks like:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "revision": "{CLONESET_NAME}-{HASH}",\n  "updateTimestamp": "2022-03-22T09:06:55Z",\n  "lastContainerStatuses":{"main":{"imageID":"THE IMAGE ID OF OLD MAIN CONTAINER"}},\n  "containerBatchesRecord":[\n    {"timestamp":"2022-03-22T09:06:55Z","containers":["sidecar"]},\n    {"timestamp":"2022-03-22T09:07:20Z","containers":["main"]}\n  ]\n}\n')),(0,i.kt)("p",null,"Usually, users only have to care about the ",(0,i.kt)("inlineCode",{parentName:"p"},"containerBatchesRecord")," to make sure the containers are updated in different batches. If the Pod is blocking during in-place update, you should check the ",(0,i.kt)("inlineCode",{parentName:"p"},"nextContainerImages/nextContainerRefMetadata")," and see if the previous containers in ",(0,i.kt)("inlineCode",{parentName:"p"},"preCheckBeforeNext")," have been updated successfully and ready."),(0,i.kt)("h3",{id:"2-statefulsetautodeletepvc"},"2. StatefulSetAutoDeletePVC"),(0,i.kt)("p",null,"Since Kubernetes v1.23, the upstream StatefulSet has supported StatefulSetAutoDeletePVC feature, it ",(0,i.kt)("strong",{parentName:"p"},"controls if and how PVCs are deleted during the lifecycle of a StatefulSet"),", refer to ",(0,i.kt)("a",{parentName:"p",href:"https://kubernetes.io/docs/concepts/workloads/controllers/statefulset/#persistentvolumeclaim-retention"},"this doc"),"."),(0,i.kt)("p",null,"So, Advanced StatefulSet has rebased this feature from upstream, which also requires you to enable ",(0,i.kt)("inlineCode",{parentName:"p"},"StatefulSetAutoDeletePVC")," feature-gate during install/upgrade Kruise."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-yaml"},"apiVersion: apps.kruise.io/v1beta1\nkind: StatefulSet\nspec:\n  ...\n  persistentVolumeClaimRetentionPolicy:  # optional\n    whenDeleted: Retain | Delete\n    whenScaled: Retain | Delete\n")),(0,i.kt)("p",null,"Once enabled, there are two policies you can configure for each StatefulSet:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"whenDeleted"),": configures the volume retention behavior that applies when the StatefulSet is deleted."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"whenScaled"),": configures the volume retention behavior that applies when the replica count of the StatefulSet is reduced; for example, when scaling down the set.")),(0,i.kt)("p",null,"For each policy that you can configure, you can set the value to either ",(0,i.kt)("inlineCode",{parentName:"p"},"Delete")," or ",(0,i.kt)("inlineCode",{parentName:"p"},"Retain"),"."),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"Retain")," (default): PVCs from the ",(0,i.kt)("inlineCode",{parentName:"li"},"volumeClaimTemplate")," are not affected when their Pod is deleted. This is the behavior before this new feature."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"Delete"),": The PVCs created from the ",(0,i.kt)("inlineCode",{parentName:"li"},"volumeClaimTemplate")," are deleted for each Pod affected by the policy. With the ",(0,i.kt)("inlineCode",{parentName:"li"},"whenDeleted")," policy all PVCs from the ",(0,i.kt)("inlineCode",{parentName:"li"},"volumeClaimTemplate")," are deleted after their Pods have been deleted. With the ",(0,i.kt)("inlineCode",{parentName:"li"},"whenScaled")," policy, only PVCs corresponding to Pod replicas being scaled down are deleted, after their Pods have been deleted.")),(0,i.kt)("p",null,"Note that:"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"StatefulSetAutoDeletePVC only deletes PVCs created by ",(0,i.kt)("inlineCode",{parentName:"li"},"volumeClaimTemplate")," instead of the PVCs created by user or related to StatefulSet Pod."),(0,i.kt)("li",{parentName:"ol"},"The policies only apply when Pods are being removed due to the StatefulSet being deleted or scaled down. For example, if a Pod associated with a StatefulSet fails due to node failure, and the control plane creates a replacement Pod, the StatefulSet retains the existing PVC. The existing volume is unaffected, and the cluster will attach it to the node where the new Pod is about to launch.")),(0,i.kt)("h3",{id:"3-advanced-daemonset-refactor-lifecycle-hook"},"3. Advanced DaemonSet refactor, lifecycle hook"),(0,i.kt)("p",null,"The behavior of Advanced DaemonSet used to be a little different with the upstream controller,\nsuch as it required extra configuration to choose whether not-ready and unschedulable nodes should be handled,\nwhich makes users confused and hard to understand."),(0,i.kt)("p",null,"In release v1.1, we have refactored Advanced DaemonSet to make it rebase with upstream.\nNow, the default behavior of Advanced DaemonSet should be same with the upstream DaemonSet,\nwhich means users can conveniently modify the ",(0,i.kt)("inlineCode",{parentName:"p"},"apiVersion")," field to convert a built-in DaemonSet to Advanced DaemonSet."),(0,i.kt)("p",null,"Meanwhile, we also add lifecycle hook for Advanced DaemonSet.\nCurrently it supports preDelete hook, which allows users to do something (for example check node resources) before Pod deleting."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-yaml"},'apiVersion: apps.kruise.io/v1alpha1\nkind: DaemonSet\nspec:\n  ...\n  # define with label\n  lifecycle:\n    preDelete:\n      labelsHandler:\n        example.io/block-deleting: "true"\n')),(0,i.kt)("p",null,"When Advanced DaemonSet delete a Pod (including scale in and recreate update):"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Delete it directly if no lifecycle hook definition or Pod not matched preDelete hook"),(0,i.kt)("li",{parentName:"ul"},"Otherwise, Advanced DaemonSet will firstly update Pod to ",(0,i.kt)("inlineCode",{parentName:"li"},"PreparingDelete")," state and wait for user controller to remove the label/finalizer and Pod not matched preDelete hook")),(0,i.kt)("h3",{id:"4-improve-performance-by-disable-deepcopy"},"4. Improve performance by disable DeepCopy"),(0,i.kt)("p",null,"By default, when we are writing Operator/Controller with controller-runtime and use the Client interface in ",(0,i.kt)("inlineCode",{parentName:"p"},"sigs.k8s.io/controller-runtime/pkg/client")," to get/list typed objects,\nit will always get objects from Informer. That's known by most people."),(0,i.kt)("p",null,"But what's many people don't know, is that controller-runtime will firstly deep copy all the objects got from Informer and then return the copied objects."),(0,i.kt)("p",null,"This design aims to avoid developers directly modifying the objects in Informer.\nAfter DeepCopy, no matter how developers modify the objected returned by get/list, it will not change the objects in Informer, which are only synced by ListWatch from kube-apiserver."),(0,i.kt)("p",null,"However, in some large-scale clusters, mutliple controllers of OpenKruise and their workers are reconciling together, which may bring so many DeepCopy operations.\nFor example, there are a lot of application CloneSets and some of them have managed thousands of Pods,\nthen each worker will list all Pod of the CloneSet during Reconcile and there exists multiple workers.\nIt brings CPU and Memory pressure to kruise-manager and even sometimes makes it Out-Of-Memory."),(0,i.kt)("p",null,"So I have submitted and merged ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/kubernetes-sigs/controller-runtime/pull/1274"},"DisableDeepCopy feature")," in upstream,\nwhich contains in controller-runtime >= v0.10 version.\nIt allows developers to specify some resource types that will directly return the objects from Informer without DeepCopy during get/list."),(0,i.kt)("p",null,"For example, we can add cache options when initialize ",(0,i.kt)("inlineCode",{parentName:"p"},"Manager")," in ",(0,i.kt)("inlineCode",{parentName:"p"},"main.go")," to avoid DeepCopy for Pod objects."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-go"},"    mgr, err := ctrl.NewManager(cfg, ctrl.Options{\n        ...\n        NewCache: cache.BuilderWithOptions(cache.Options{\n            UnsafeDisableDeepCopyByObject: map[client.Object]bool{\n                &v1.Pod{}: true,\n            },\n        }),\n    })\n")),(0,i.kt)("p",null,"But in Kruise v1.1, we re-implement ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/openkruise/kruise/blob/master/pkg/util/client/delegating_client.go"},"Delegating Client")," instead of using the feature of controller-runtime.\nIt allows developers to avoid DeepCopy with ",(0,i.kt)("inlineCode",{parentName:"p"},"DisableDeepCopy ListOption")," in any list places, which is more flexible."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-go"},'    if err := r.List(context.TODO(), &podList, client.InNamespace("default"), utilclient.DisableDeepCopy); err != nil {\n        return nil, nil, err\n    }\n')),(0,i.kt)("h3",{id:"5-other-changes"},"5. Other changes"),(0,i.kt)("p",null,"For more changes, their authors and commits, you can read the ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/openkruise/kruise/releases"},"Github release"),"."),(0,i.kt)("h2",{id:"get-involved"},"Get Involved"),(0,i.kt)("p",null,"Welcome to get involved with OpenKruise by joining us in Github/Slack/DingTalk/WeChat.\nHave something you\u2019d like to broadcast to our community?\nShare your voice at our ",(0,i.kt)("a",{parentName:"p",href:"https://shimo.im/docs/gXqmeQOYBehZ4vqo"},"Bi-weekly community meeting (Chinese)"),", or through the channels below:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Join the community on ",(0,i.kt)("a",{parentName:"li",href:"https://kubernetes.slack.com/channels/openkruise"},"Slack")," (English)."),(0,i.kt)("li",{parentName:"ul"},"Join the community on DingTalk: Search GroupID ",(0,i.kt)("inlineCode",{parentName:"li"},"23330762")," (Chinese)."),(0,i.kt)("li",{parentName:"ul"},"Join the community on WeChat (new): Search User ",(0,i.kt)("inlineCode",{parentName:"li"},"openkruise")," and let the robot invite you (Chinese).")))}h.isMDXComponent=!0}}]);