"use strict";(self.webpackChunkopenkruise_io=self.webpackChunkopenkruise_io||[]).push([[2362],{3905:function(e,t,a){a.d(t,{Zo:function(){return p},kt:function(){return m}});var n=a(67294);function l(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){l(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function r(e,t){if(null==e)return{};var a,n,l=function(e,t){if(null==e)return{};var a,n,l={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(l[a]=e[a]);return l}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(l[a]=e[a])}return l}var s=n.createContext({}),u=function(e){var t=n.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},p=function(e){var t=u(e.components);return n.createElement(s.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},c=n.forwardRef((function(e,t){var a=e.components,l=e.mdxType,o=e.originalType,s=e.parentName,p=r(e,["components","mdxType","originalType","parentName"]),c=u(a),m=l,g=c["".concat(s,".").concat(m)]||c[m]||d[m]||o;return a?n.createElement(g,i(i({ref:t},p),{},{components:a})):n.createElement(g,i({ref:t},p))}));function m(e,t){var a=arguments,l=t&&t.mdxType;if("string"==typeof e||l){var o=a.length,i=new Array(o);i[0]=c;var r={};for(var s in t)hasOwnProperty.call(t,s)&&(r[s]=t[s]);r.originalType=e,r.mdxType="string"==typeof e?e:l,i[1]=r;for(var u=2;u<o;u++)i[u]=a[u];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}c.displayName="MDXCreateElement"},85162:function(e,t,a){a.d(t,{Z:function(){return i}});var n=a(67294),l=a(86010),o="tabItem_Ymn6";function i(e){var t=e.children,a=e.hidden,i=e.className;return n.createElement("div",{role:"tabpanel",className:(0,l.Z)(o,i),hidden:a},t)}},65488:function(e,t,a){a.d(t,{Z:function(){return m}});var n=a(87462),l=a(67294),o=a(86010),i=a(72389),r=a(67392),s=a(7094),u=a(12466),p="tabList__CuJ",d="tabItem_LNqP";function c(e){var t,a,i=e.lazy,c=e.block,m=e.defaultValue,g=e.values,f=e.groupId,h=e.className,k=l.Children.map(e.children,(function(e){if((0,l.isValidElement)(e)&&"value"in e.props)return e;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})),b=null!=g?g:k.map((function(e){var t=e.props;return{value:t.value,label:t.label,attributes:t.attributes}})),v=(0,r.l)(b,(function(e,t){return e.value===t.value}));if(v.length>0)throw new Error('Docusaurus error: Duplicate values "'+v.map((function(e){return e.value})).join(", ")+'" found in <Tabs>. Every value needs to be unique.');var y=null===m?m:null!=(t=null!=m?m:null==(a=k.find((function(e){return e.props.default})))?void 0:a.props.value)?t:k[0].props.value;if(null!==y&&!b.some((function(e){return e.value===y})))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+y+'" but none of its children has the corresponding value. Available values are: '+b.map((function(e){return e.value})).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");var N=(0,s.U)(),w=N.tabGroupChoices,I=N.setTabGroupChoices,P=(0,l.useState)(y),x=P[0],C=P[1],S=[],A=(0,u.o5)().blockElementScrollPositionUntilNextRender;if(null!=f){var E=w[f];null!=E&&E!==x&&b.some((function(e){return e.value===E}))&&C(E)}var T=function(e){var t=e.currentTarget,a=S.indexOf(t),n=b[a].value;n!==x&&(A(t),C(n),null!=f&&I(f,String(n)))},j=function(e){var t,a=null;switch(e.key){case"ArrowRight":var n,l=S.indexOf(e.currentTarget)+1;a=null!=(n=S[l])?n:S[0];break;case"ArrowLeft":var o,i=S.indexOf(e.currentTarget)-1;a=null!=(o=S[i])?o:S[S.length-1]}null==(t=a)||t.focus()};return l.createElement("div",{className:(0,o.Z)("tabs-container",p)},l.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,o.Z)("tabs",{"tabs--block":c},h)},b.map((function(e){var t=e.value,a=e.label,i=e.attributes;return l.createElement("li",(0,n.Z)({role:"tab",tabIndex:x===t?0:-1,"aria-selected":x===t,key:t,ref:function(e){return S.push(e)},onKeyDown:j,onFocus:T,onClick:T},i,{className:(0,o.Z)("tabs__item",d,null==i?void 0:i.className,{"tabs__item--active":x===t})}),null!=a?a:t)}))),i?(0,l.cloneElement)(k.filter((function(e){return e.props.value===x}))[0],{className:"margin-top--md"}):l.createElement("div",{className:"margin-top--md"},k.map((function(e,t){return(0,l.cloneElement)(e,{key:t,hidden:e.props.value!==x})}))))}function m(e){var t=(0,i.Z)();return l.createElement(c,(0,n.Z)({key:String(t)},e))}},26636:function(e,t,a){a.r(t),a.d(t,{assets:function(){return p},contentTitle:function(){return s},default:function(){return m},frontMatter:function(){return r},metadata:function(){return u},toc:function(){return d}});var n=a(87462),l=a(63366),o=(a(67294),a(3905)),i=(a(65488),a(85162),["components"]),r={title:"ImagePullJob"},s=void 0,u={unversionedId:"user-manuals/imagepulljob",id:"version-v1.7/user-manuals/imagepulljob",title:"ImagePullJob",description:"NodeImage and ImagePullJob are new CRDs provided since Kruise v0.8.0 version.",source:"@site/versioned_docs/version-v1.7/user-manuals/imagepulljob.md",sourceDirName:"user-manuals",slug:"/user-manuals/imagepulljob",permalink:"/docs/user-manuals/imagepulljob",draft:!1,editUrl:"https://github.com/openkruise/openkruise.io/edit/master/docs/user-manuals/imagepulljob.md",tags:[],version:"v1.7",lastUpdatedBy:"berg",lastUpdatedAt:1724814279,formattedLastUpdatedAt:"8/28/2024",frontMatter:{title:"ImagePullJob"},sidebar:"docs",previous:{title:"Container Restart",permalink:"/docs/user-manuals/containerrecreaterequest"},next:{title:"ResourceDistribution",permalink:"/docs/user-manuals/resourcedistribution"}},p={},d=[{value:"Feature-gate",id:"feature-gate",level:2},{value:"ImagePullJob (high-level)",id:"imagepulljob-high-level",level:2},{value:"Configure secrets",id:"configure-secrets",level:3},{value:"Configure image credential provider",id:"configure-image-credential-provider",level:3},{value:"a. Configure image credential provider on AWS:",id:"a-configure-image-credential-provider-on-aws",level:4},{value:"Attach metadata into cri interface",id:"attach-metadata-into-cri-interface",level:3},{value:"Image Pull Policy support &#39;Always&#39;",id:"image-pull-policy-support-always",level:3},{value:"ImageListPullJob",id:"imagelistpulljob",level:2},{value:"NodeImage (low-level)",id:"nodeimage-low-level",level:2},{value:"FAQ",id:"faq",level:2}],c={toc:d};function m(e){var t=e.components,r=(0,l.Z)(e,i);return(0,o.kt)("wrapper",(0,n.Z)({},c,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"NodeImage and ImagePullJob are new CRDs provided since Kruise v0.8.0 version."),(0,o.kt)("p",null,"Kruise will create a NodeImage for each Node, and it contains images that should be downloaded on this Node."),(0,o.kt)("p",null,"Users can create an ImagePullJob to declare an image should be downloaded on which nodes."),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Image Pulling",src:a(82587).Z,width:"3053",height:"1653"})),(0,o.kt)("p",null,"Note that the NodeImage is quite ",(0,o.kt)("strong",{parentName:"p"},"a low-level API"),". You should only use it when you prepare to pull an image on a definite Node.\nOtherwise, you should ",(0,o.kt)("strong",{parentName:"p"},"use the ImagePullJob to pull an image on a batch of Nodes.")),(0,o.kt)("h2",{id:"feature-gate"},"Feature-gate"),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Since kruise v1.5.0")," ImagePullJob/ImageListPullJob feature is turned off by default to reduce the privilege of default installation. One can turn it on by setting feature-gate ImagePullJobGate."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},'$ helm install/upgrade kruise https://... --set featureGates="ImagePullJobGate=true"\n')),(0,o.kt)("h2",{id:"imagepulljob-high-level"},"ImagePullJob (high-level)"),(0,o.kt)("p",null,"ImagePullJob is a ",(0,o.kt)("strong",{parentName:"p"},"namespaced-scope")," resource."),(0,o.kt)("p",null,"API definition: ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/openkruise/kruise/blob/master/apis/apps/v1alpha1/imagepulljob_types.go"},"https://github.com/openkruise/kruise/blob/master/apis/apps/v1alpha1/imagepulljob_types.go")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-yaml"},"apiVersion: apps.kruise.io/v1alpha1\nkind: ImagePullJob\nmetadata:\n  name: job-with-always\nspec:\n  image: nginx:1.9.1   # [required] image to pull\n  parallelism: 10      # [optional] the maximal number of Nodes that pull this image at the same time, defaults to 1\n  selector:            # [optional] the names or label selector to assign Nodes (only one of them can be set)\n    names:\n    - node-1\n    - node-2\n    matchLabels:\n      node-type: xxx\n# podSelector:         # [optional] label selector over pods that should pull image on nodes of these pods. Mutually exclusive with selector.\n#   matchLabels:\n#     pod-label: xxx\n#   matchExpressions:\n#   - key: pod-label\n#     operator: In\n#     values:\n#     - xxx\n  completionPolicy:\n    type: Always                  # [optional] defaults to Always\n    activeDeadlineSeconds: 1200   # [optional] no default, only work for Always type\n    ttlSecondsAfterFinished: 300  # [optional] no default, only work for Always type\n  pullPolicy:                     # [optional] defaults to backoffLimit=3, timeoutSeconds=600\n    backoffLimit: 3\n    timeoutSeconds: 300\n")),(0,o.kt)("p",null,"You can write the names or label selector in the ",(0,o.kt)("inlineCode",{parentName:"p"},"selector")," field to assign Nodes ",(0,o.kt)("strong",{parentName:"p"},"(only one of them can be set)"),".\nIf no ",(0,o.kt)("inlineCode",{parentName:"p"},"selector")," is set, the image will be pulled on all Nodes in the cluster."),(0,o.kt)("p",null,"Or you can write the podSelector to pull image on nodes of these pods. ",(0,o.kt)("inlineCode",{parentName:"p"},"podSelector")," is mutually exclusive with ",(0,o.kt)("inlineCode",{parentName:"p"},"selector"),"."),(0,o.kt)("p",null,"Also, ImagePullJob has two completionPolicy types:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"Always")," means this job will eventually complete with either failed or succeeded.",(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"activeDeadlineSeconds"),": timeout duration for this job"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"ttlSecondsAfterFinished"),": after this job finished (including success or failure) over this time, this job will be removed"))),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"Never")," means this job will never complete, it will continuously pull image on the desired Nodes every day.")),(0,o.kt)("h3",{id:"configure-secrets"},"Configure secrets"),(0,o.kt)("p",null,"If the image is in a private registry, you may want to configure the pull secrets for the image:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-yaml"},"# ...\nspec:\n  pullSecrets:\n  - secret-name1\n  - secret-name2\n")),(0,o.kt)("p",null,"Because of ImagePullJob is a namespaced-scope resource, the secrets should be in the same namespace of this ImagePullJob,\nand you should only put the secret names into ",(0,o.kt)("inlineCode",{parentName:"p"},"pullSecrets")," field."),(0,o.kt)("p",null,"You can also use ",(0,o.kt)("strong",{parentName:"p"},"Configure image credential provider")," for private registry."),(0,o.kt)("h3",{id:"configure-image-credential-provider"},"Configure image credential provider"),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"FEATURE STATE:")," Kruise v1.7.0"),(0,o.kt)("p",null,"Starting from Kubernetes v1.20, the kubelet can dynamically retrieve credentials for a container image registry using exec plugins. Refer ",(0,o.kt)("a",{parentName:"p",href:"https://kubernetes.io/docs/tasks/administer-cluster/kubelet-credential-provider/"},"Community Documentation"),"."),(0,o.kt)("p",null,"OpenKruise also supports the same way for pre-download image with the following steps:"),(0,o.kt)("h4",{id:"a-configure-image-credential-provider-on-aws"},"a. Configure image credential provider on AWS:"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"Install ",(0,o.kt)("a",{parentName:"li",href:"https://github.com/awslabs/amazon-ecr-credential-helper"},"AWS"),"'s credential provisioning plugin on k8s nodes."),(0,o.kt)("li",{parentName:"ol"},"Create credential-provider-config Configmap in K8S:")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},'apiVersion: v1\nkind: ConfigMap\nmetadata:\n  name: credential-provider-config\n  namespace: kruise-system\ndata:\n  CredentialProviderPlugin.yaml: |\n    apiVersion: kubelet.config.k8s.io/v1\n    kind: CredentialProviderConfig\n    providers:\n    # name is the required name of the credential provider.\n    - name: ecr-credential-provider\n      matchImages:\n      - "*.dkr.ecr.*.amazonaws.com"\n      - "*.dkr.ecr.*.amazonaws.com.cn"\n      - "*.dkr.ecr-fips.*.amazonaws.com"\n      - "*.dkr.ecr.us-iso-east-1.c2s.ic.gov"\n      - "*.dkr.ecr.us-isob-east-1.sc2s.sgov.gov"\n      defaultCacheDuration: "12h"\n      apiVersion: credentialprovider.kubelet.k8s.io/v1\n      env:\n      - name: AWS_PROFILE\n        value: temp\n\n')),(0,o.kt)("ol",{start:3},(0,o.kt)("li",{parentName:"ol"},"Install kruise with AWS ",(0,o.kt)("a",{parentName:"li",href:"https://docs.aws.amazon.com/sdk-for-go/v1/developer-guide/configuring-sdk.html"},"Shared Credentials File"),".")),(0,o.kt)("p",null,"If you have a shared credentials file($HOME/.aws/credentials) on every machine, you can mount the directory to kruise-daemon for authentication, as follows:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"helm install kruise https://... --set installation.createNamespace=false --set daemon.credentialProvider.enable=true --set daemon.credentialProvider.hostPath=/etc/eks/image-credential-provider --set daemon.credentialProvider.configmap=credential-provider-config --set daemon.credentialProvider.awsCredentialsDir=/root/.aws\n")),(0,o.kt)("ol",{start:4},(0,o.kt)("li",{parentName:"ol"},"Create an ImagePullJob, authenticate the image repository via the above plugin, and complete pre-download image.")),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Note:")," If other cloud vendors (e.g., Tencent Cloud) have a similar mechanism, it should work. If you have similar needs, please contact us."),(0,o.kt)("h3",{id:"attach-metadata-into-cri-interface"},"Attach metadata into cri interface"),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"FEATURE STATE:")," Kruise v1.4.0"),(0,o.kt)("p",null,"When kubelet creates pods, kubelet will attach pod metadata as podSandboxConfig params in the PullImage CRI interface.\nThe OpenKruise ImagePullJob also supports the similar capability, as follows:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-yaml"},'apiVersion: apps.kruise.io/v1alpha1\nkind: ImagePullJob\nspec:\n  ...\n  image: nginx:1.9.1\n  sandboxConfig:\n    annotations:\n      io.kubernetes.image.metrics.tags: "cluster=cn-shanghai"\n    labels:\n      io.kubernetes.image.app: "foo"\n')),(0,o.kt)("h3",{id:"image-pull-policy-support-always"},"Image Pull Policy support 'Always'"),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"FEATURE STATE:")," Kruise v1.6.0"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"spec.imagePullPolicy=Always")," means that kruise always attempts to pull the latest image, even if with the name as previous one."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"spec.imagePullPolicy=IfNotPresent")," means that kruise only pull the image if it isn't present on node."),(0,o.kt)("li",{parentName:"ul"},"Defaults is IfNotPresent.")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-yaml"},"apiVersion: apps.kruise.io/v1alpha1\nkind: ImagePullJob\nspec:\n  ...\n  image: nginx:1.9.1\n  imagePullPolicy: Always | IfNotPresent\n")),(0,o.kt)("h2",{id:"imagelistpulljob"},"ImageListPullJob"),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"FEATURE STATE:")," Kruise v1.5.0"),(0,o.kt)("p",null,"ImagePullJob can only support a single image pre-download, one can use multiple ImagePullJob to download multiple images, or use ImageListPullJob to pre-download multiple images in a single job, as follows:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-yaml"},"apiVersion: apps.kruise.io/v1alpha1\nkind: ImageListPullJob\nmetadata:\n  name: job-with-always\nspec:\n  images:\n  - nginx:1.9.1   # [required] image to pull\n  - busybox:1.29.2\n  parallelism: 10      # [optional] the maximal number of Nodes that pull this image at the same time, defaults to 1\n  selector:            # [optional] the names or label selector to assign Nodes (only one of them can be set)\n    names:\n    - node-1\n    - node-2\n    matchLabels:\n      node-type: xxx\n  completionPolicy:\n    type: Always                  # [optional] defaults to Always\n    activeDeadlineSeconds: 1200   # [optional] no default, only work for Always type\n    ttlSecondsAfterFinished: 300  # [optional] no default, only work for Always type\n  pullPolicy:                     # [optional] defaults to backoffLimit=3, timeoutSeconds=600\n    backoffLimit: 3\n    timeoutSeconds: 300\n")),(0,o.kt)("h2",{id:"nodeimage-low-level"},"NodeImage (low-level)"),(0,o.kt)("p",null,"NodeImage is a ",(0,o.kt)("strong",{parentName:"p"},"cluster-scope")," resource."),(0,o.kt)("p",null,"API definition: ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/openkruise/kruise/blob/master/apis/apps/v1alpha1/nodeimage_types.go"},"https://github.com/openkruise/kruise/blob/master/apis/apps/v1alpha1/nodeimage_types.go")),(0,o.kt)("p",null,"When Kruise has been installed, nodeimage-controller will create NodeImages for Nodes with the same names immediately.\nAnd when a Node has been added or removed, nodeimage-controller will also create or delete NodeImage for this Node."),(0,o.kt)("p",null,"What's more, nodeimage-controller will also synchronize labels from Node to NodeImage. So the NodeImage and Node always have\nthe same name and labels. You can get NodeImage with the Node name, or list NodeImage with the Node labels as selector."),(0,o.kt)("p",null,"Typically, an empty NodeImage looks like this:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-yaml"},"apiVersion: apps.kruise.io/v1alpha1\nkind: NodeImage\nmetadata:\n  labels:\n    kubernetes.io/arch: amd64\n    kubernetes.io/os: linux\n    # ...\n  name: node-xxx\n  # ...\nspec: {}\nstatus:\n  desired: 0\n  failed: 0\n  pulling: 0\n  succeeded: 0\n")),(0,o.kt)("p",null,"If you want to pull an image such as ",(0,o.kt)("inlineCode",{parentName:"p"},"ubuntu:latest")," on this Node, you can:"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("inlineCode",{parentName:"li"},"kubectl edit nodeimage node-xxx")," and write below into it (ignore the comments):")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-yaml"},"# ...\nspec:\n  images:\n    ubuntu:  # image name\n      tags:\n      - tag: latest  # image tag\n        pullPolicy:\n          ttlSecondsAfterFinished: 300  # [required] after this image pulling finished (including success or failure) over 300s, this task will be removed\n          timeoutSeconds: 600           # [optional] timeout duration for once pulling, defaults to 600\n          backoffLimit: 3               # [optional] retry times for pulling, defaults to 3\n          activeDeadlineSeconds: 1200   # [optional] timeout duration for this task, no default\n")),(0,o.kt)("ol",{start:2},(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("inlineCode",{parentName:"li"},'kubectl patch nodeimage node-xxx --type=merge -p \'{"spec":{"images":{"ubuntu":{"tags":[{"tag":"latest","pullPolicy":{"ttlSecondsAfterFinished":300}}]}}}}\''))),(0,o.kt)("p",null,"You can read the NodeImage status using ",(0,o.kt)("inlineCode",{parentName:"p"},"kubectl get nodeimage node-xxx -o yaml"),",\nand you will find the task removed from spec and status after it has finished over 300s."),(0,o.kt)("h2",{id:"faq"},"FAQ"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"If ImagePullJob failed, as follows:")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"% kubectl get imagepulljob\n\nNAME              TOTAL   ACTIVE   SUCCEED   FAILED   AGE     MESSAGE\njob-with-always   4       0        0         4        9m49s   job has completed\n")),(0,o.kt)("ol",{start:2},(0,o.kt)("li",{parentName:"ol"},"You can find out the failed node.name from imagePullJob.status, as follows:")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},'% kubectl get imagepulljob job-with-always -oyaml\n\napiVersion: apps.kruise.io/v1alpha1\nkind: ImagePullJob\nstatus:\n  active: 0\n  completionTime: "2024-08-09T10:06:26Z"\n  desired: 4\n  failed: 4\n  failedNodes:\n  - cn-hangzhou.x.125\n  - cn-hangzhou.x.126\n  - cn-hangzhou.x.127\n  - cn-hangzhou.x.128\n  message: job has completed\n  startTime: "2024-08-09T10:03:52Z"\n  succeeded: 0\n')),(0,o.kt)("ol",{start:3},(0,o.kt)("li",{parentName:"ol"},"You can see the exact cause of failure via NodeImage, as follows:")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},'% kubectl get nodeimage cn-hangzhou.x.125 -oyaml\n\napiVersion: apps.kruise.io/v1alpha1\nkind: NodeImage\nstatus:\n  desired: 1\n  failed: 1\n  imageStatuses:\n    nginx:\n      tags:\n      - completionTime: "2024-08-09T10:06:22Z"\n        message: \'Failed to pull image reference "nginx:1.9.1": rpc error: code =\n          DeadlineExceeded desc = failed to pull and unpack image "docker.io/library/nginx:1.9.1":\n          failed to copy: httpReadSeeker: failed open: failed to do request: Get "https://production.cloudflare.docker.com/registry-v2/docker/registry/v2/blobs/sha256/c5/c5dd085dcc7c78a296c80b87916831fd19a3f447d94b99580ccd19a052720211/data?verify=1723200943-x6RCoD1a2P3aEdh1%!B(MISSING)XcQSFe2h%!B(MISSING)U%!D(MISSING)":\n          dial tcp 10.1.1.1:443: i/o timeout\'\n        phase: Failed\n        startTime: "2024-08-09T10:03:52Z"\n        tag: 1.9.1\n  pulling: 0\n  succeeded: 0\n')))}m.isMDXComponent=!0},82587:function(e,t,a){t.Z=a.p+"assets/images/imagepulling-1963144d8f1b12d5603c3606585a0b00.png"}}]);