"use strict";(self.webpackChunkopenkruise_io=self.webpackChunkopenkruise_io||[]).push([[8707],{3905:function(e,n,t){t.d(n,{Zo:function(){return u},kt:function(){return m}});var a=t(67294);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function s(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function o(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?s(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):s(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function p(e,n){if(null==e)return{};var t,a,r=function(e,n){if(null==e)return{};var t,a,r={},s=Object.keys(e);for(a=0;a<s.length;a++)t=s[a],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(a=0;a<s.length;a++)t=s[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var i=a.createContext({}),l=function(e){var n=a.useContext(i),t=n;return e&&(t="function"==typeof e?e(n):o(o({},n),e)),t},u=function(e){var n=l(e.components);return a.createElement(i.Provider,{value:n},e.children)},c={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},d=a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,s=e.originalType,i=e.parentName,u=p(e,["components","mdxType","originalType","parentName"]),d=l(t),m=r,h=d["".concat(i,".").concat(m)]||d[m]||c[m]||s;return t?a.createElement(h,o(o({ref:n},u),{},{components:t})):a.createElement(h,o({ref:n},u))}));function m(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var s=t.length,o=new Array(s);o[0]=d;var p={};for(var i in n)hasOwnProperty.call(n,i)&&(p[i]=n[i]);p.originalType=e,p.mdxType="string"==typeof e?e:r,o[1]=p;for(var l=2;l<s;l++)o[l]=t[l];return a.createElement.apply(null,o)}return a.createElement.apply(null,t)}d.displayName="MDXCreateElement"},26119:function(e,n,t){t.r(n),t.d(n,{assets:function(){return u},contentTitle:function(){return i},default:function(){return m},frontMatter:function(){return p},metadata:function(){return l},toc:function(){return c}});var a=t(87462),r=t(63366),s=(t(67294),t(3905)),o=["components"],p={title:"\u4e91\u539f\u751fDevops\u6700\u4f73\u5b9e\u8df5\uff082\uff09\uff1aGitOps + OpenKruise CloneSet"},i=void 0,l={unversionedId:"best-practices/gitops-with-kruise",id:"version-v1.7/best-practices/gitops-with-kruise",title:"\u4e91\u539f\u751fDevops\u6700\u4f73\u5b9e\u8df5\uff082\uff09\uff1aGitOps + OpenKruise CloneSet",description:"\u4ec0\u4e48\u662fGitOps\uff1f",source:"@site/i18n/zh/docusaurus-plugin-content-docs/version-v1.7/best-practices/gitops-with-kruise.md",sourceDirName:"best-practices",slug:"/best-practices/gitops-with-kruise",permalink:"/zh/docs/best-practices/gitops-with-kruise",draft:!1,editUrl:"https://github.com/openkruise/openkruise.io/edit/master/docs/best-practices/gitops-with-kruise.md",tags:[],version:"v1.7",lastUpdatedBy:"berg",lastUpdatedAt:1724814279,formattedLastUpdatedAt:"2024/8/28",frontMatter:{title:"\u4e91\u539f\u751fDevops\u6700\u4f73\u5b9e\u8df5\uff082\uff09\uff1aGitOps + OpenKruise CloneSet"},sidebar:"docs",previous:{title:"\u4e91\u539f\u751fDevops\u6700\u4f73\u5b9e\u8df5\uff081\uff09\uff1a\u6301\u7eed\u96c6\u6210\uff08CI\uff09+ OpenKruise\u955c\u50cf\u9884\u70ed",permalink:"/zh/docs/best-practices/ci-pipeline-image-predownload"},next:{title:"\u7ba1\u7406\u65e5\u5fd7\u91c7\u96c6sidecar\u5bb9\u5668\u6700\u4f73\u5b9e\u8df5",permalink:"/zh/docs/best-practices/log-container-sidecarset"}},u={},c=[{value:"\u4ec0\u4e48\u662fGitOps\uff1f",id:"\u4ec0\u4e48\u662fgitops",level:2},{value:"GitOps + OpenKruise CloneSet\u5b9e\u8df5",id:"gitops--openkruise-cloneset\u5b9e\u8df5",level:2},{value:"\u524d\u7f6e\u6761\u4ef6",id:"\u524d\u7f6e\u6761\u4ef6",level:3},{value:"Install OpenKruise\uff08Enable: TemplateNoDefaults\uff09",id:"install-openkruiseenable-templatenodefaults",level:4},{value:"CloneSet\u90e8\u7f72\u65e0\u72b6\u6001\u5e94\u7528",id:"cloneset\u90e8\u7f72\u65e0\u72b6\u6001\u5e94\u7528",level:3},{value:"Argo-cd CloneSet Health Check",id:"argo-cd-cloneset-health-check",level:3},{value:"Tekton Pipeline + Argo-cd",id:"tekton-pipeline--argo-cd",level:3},{value:"\u6267\u884cTekton Pipeline",id:"\u6267\u884ctekton-pipeline",level:3},{value:"\u603b\u7ed3",id:"\u603b\u7ed3",level:2}],d={toc:c};function m(e){var n=e.components,p=(0,r.Z)(e,o);return(0,s.kt)("wrapper",(0,a.Z)({},d,p,{components:n,mdxType:"MDXLayout"}),(0,s.kt)("h2",{id:"\u4ec0\u4e48\u662fgitops"},"\u4ec0\u4e48\u662fGitOps\uff1f"),(0,s.kt)("p",null,"GitOps\u662f\u4e00\u79cd\u6301\u7eed\u4ea4\u4ed8\u7684\u65b9\u5f0f\u3002\u5b83\u7684\u6838\u5fc3\u601d\u60f3\u662f\u5c06\u5e94\u7528\u7cfb\u7edf\u7684\u58f0\u660e\u6027\u57fa\u7840\u67b6\u6784\u548c\u5e94\u7528\u7a0b\u5e8f\u5b58\u653e\u5728Git\u7248\u672c\u5e93\u4e2d\u3002"),(0,s.kt)("p",null,"\u5c06Git\u4f5c\u4e3a\u4ea4\u4ed8\u6d41\u6c34\u7ebf\u7684\u6838\u5fc3\uff0c\u6bcf\u4e2a\u5f00\u53d1\u4eba\u5458\u90fd\u53ef\u4ee5\u63d0\u4ea4\u62c9\u53d6\u8bf7\u6c42\uff08Pull Request\uff09\u5e76\u4f7f\u7528Git\u6765\u52a0\u901f\u548c\u7b80\u5316Kubernetes\u7684\u5e94\u7528\u7a0b\u5e8f\u90e8\u7f72\u548c\u8fd0\u7ef4\u4efb\u52a1\u3002\u901a\u8fc7\u4f7f\u7528\u50cfGit\u8fd9\u6837\u7684\u7b80\u5355\u5de5\u5177\uff0c\u5f00\u53d1\u4eba\u5458\u53ef\u4ee5\u66f4\u9ad8\u6548\u5730\u5c06\u6ce8\u610f\u529b\u96c6\u4e2d\u5728\u521b\u5efa\u65b0\u529f\u80fd\u800c\u4e0d\u662f\u8fd0\u7ef4\u76f8\u5173\u4efb\u52a1\u4e0a\uff08\u4f8b\u5982\uff0c\u5e94\u7528\u7cfb\u7edf\u5b89\u88c5\u3001\u914d\u7f6e\u3001\u8fc1\u79fb\u7b49\uff09\u3002"),(0,s.kt)("p",null,"\u968f\u7740gitops\u8d8a\u6765\u8d8a\u6df1\u5165\u4eba\u5fc3\uff0c\u793e\u533a\u6d8c\u73b0\u4e86\u975e\u5e38\u591a\u7684\u4f18\u79c0\u4ea7\u54c1\uff0c\u4f8b\u5982\uff1aJenkins X\u3001Argo CD\u3001Weave Flux\u7b49\u3002\u672c\u6587\u5c06\u4ee5argo-cd\u4e3a\u4f8b\u4ecb\u7ecd\u4e00\u4e0b\u5982\u4f55\u4f7f\u7528gitops\u53d1\u5e03kruise workload\uff0c\u65b9\u4fbf\u793e\u533a\u7684\u7528\u6237\u80fd\u591f\u66f4\u52a0\u65b9\u4fbf\u7684\u4f7f\u7528openKruise\u3002"),(0,s.kt)("p",null,(0,s.kt)("img",{alt:"argo-cd",src:t(99835).Z,width:"1080",height:"712"})),(0,s.kt)("h2",{id:"gitops--openkruise-cloneset\u5b9e\u8df5"},"GitOps + OpenKruise CloneSet\u5b9e\u8df5"),(0,s.kt)("h3",{id:"\u524d\u7f6e\u6761\u4ef6"},"\u524d\u7f6e\u6761\u4ef6"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},"Kubernetes\u96c6\u7fa4\uff0c\u4ecev1.0.0(alpha/beta)\u5f00\u59cb\uff0cOpenKruise\u8981\u6c42\u5728Kubernetes >= 1.16\u4ee5\u4e0a\u7248\u672c\u7684\u96c6\u7fa4\u4e2d\u5b89\u88c5\u548c\u4f7f\u7528\u3002"),(0,s.kt)("li",{parentName:"ul"},"\u5b89\u88c5Tekton, \u53c2\u8003",(0,s.kt)("a",{parentName:"li",href:"https://tekton.dev/docs/getting-started/"},"\u5b98\u65b9\u6587\u6863"),"\uff0cTekton\u662f\u4e00\u79cd\u9002\u7528\u4e8e\u521b\u5efa\u6301\u7eed\u96c6\u6210\u548c\u6301\u7eed\u90e8\u7f72/\u4ea4\u4ed8(CI/CD)\u7cfb\u7edf\u7684\u8c37\u6b4c\u5f00\u6e90\u7684Kubernetes\u539f\u751f\u6846\u67b6\u3002"),(0,s.kt)("li",{parentName:"ul"},"\u5b89\u88c5argo-cd, \u53c2\u8003",(0,s.kt)("a",{parentName:"li",href:"https://argo-cd.readthedocs.io/en/stable/getting_started/"},"\u5b98\u65b9\u6587\u6863"),"\uff0cArgo-cd\u662f\u7528\u4e8eKubernetes\u7684\u58f0\u660e\u6027GitOps\u8fde\u7eed\u4ea4\u4ed8\u5de5\u5177\u3002")),(0,s.kt)("h4",{id:"install-openkruiseenable-templatenodefaults"},"Install OpenKruise\uff08Enable: TemplateNoDefaults\uff09"),(0,s.kt)("p",null,"\u9ed8\u8ba4\u5b89\u88c5\u7684OpenKruise\u4f1a\u8fdb\u884cpod/pvc template\u7684\u9ed8\u8ba4\u503c\u6ce8\u5165\uff0c\u8fd9\u4e2a\u884c\u4e3a\u4f1a\u8ddfargo-cd\u7684sync\u5224\u65ad\u903b\u8f91\u51b2\u7a81\uff0c\u6240\u4ee5\u5728\u5b89\u88c5OpenKruise\u9700\u8981\u6253\u5f00Gates ",(0,s.kt)("strong",{parentName:"p"},"TemplateNoDefaults"),"\uff0c\u5982\u4e0b\uff1a"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre"},'# Firstly add openkruise charts repository if you haven\'t do this.\n$ helm repo add openkruise https://openkruise.github.io/charts/\n\n# [Optional]\n$ helm repo update\n\n# Install the latest version.\n$ helm install kruise openkruise/kruise --set featureGates="TemplateNoDefaults=true"\n\n# Those that have been installed need to be upgraded\n$ helm upgrade kruise openkruise/kruise --set featureGates="TemplateNoDefaults=true"\n')),(0,s.kt)("h3",{id:"cloneset\u90e8\u7f72\u65e0\u72b6\u6001\u5e94\u7528"},"CloneSet\u90e8\u7f72\u65e0\u72b6\u6001\u5e94\u7528"),(0,s.kt)("p",null,(0,s.kt)("strong",{parentName:"p"},"CloneSet\u662fOpenKruise\u63d0\u4f9b\u7684\u9ad8\u6548\u7ba1\u7406\u65e0\u72b6\u6001\u5e94\u7528\u7684\u80fd\u529b\uff0c\u5b83\u53ef\u4ee5\u5bf9\u6807\u539f\u751f\u7684 Deployment\uff0c\u4f46 CloneSet \u63d0\u4f9b\u4e86\u5f88\u591a\u589e\u5f3a\u529f\u80fd\uff0c\u4f8b\u5982\uff1a\u539f\u5730\u5347\u7ea7\u3001\u5206\u6279\u53d1\u5e03\uff0c"),"\u8bf7\u53c2\u8003\u6587\u6863\uff1a",(0,s.kt)("a",{parentName:"p",href:"https://openkruise.io/zh/docs/user-manuals/cloneset"},"CloneSet"),"\u3002\n\u672c\u7bc7\u6587\u7ae0\u63d0\u4f9b\u4e86\u4e00\u4e2ahello world\u670d\u52a1 ",(0,s.kt)("a",{parentName:"p",href:"https://github.com/zmberg/samples/tree/hello_world/helloworld"},"Demo"),"\uff0c\u5b83\u5305\u542bHelm charts\uff0c\u5176\u4e2dCloneSet\u914d\u7f6e\u5982\u4e0b\uff1a"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-yaml"},'apiVersion: apps.kruise.io/v1alpha1\nkind: CloneSet\nmetadata:\n  name: helloworld-server\n  labels:\n    app: helloworld-server\nspec:\n  updateStrategy:\n  # CloneSet\u4f1a\u4f18\u5148\u5c1d\u8bd5\u539f\u5730\u5347\u7ea7 Pod\uff0c\u5982\u679c\u4e0d\u884c\u518d\u91c7\u7528\u91cd\u5efa\u5347\u7ea7\n    type: InPlaceIfPossible\n  # \u5206\u6279\u53d1\u5e03\uff0c\u5f53\u524d\u6279\u6b21\u53ea\u5347\u7ea71\u4e2aPod\n    partition: 1\n  replicas: 2\n  selector:\n    matchLabels:\n      app: helloworld-server\n  template:\n    metadata:\n      labels:\n        app: helloworld-server\n    spec:\n      containers:\n      - name: helloworld\n        image: "openkruise/kruise:hello_world-d92ae174b"\n')),(0,s.kt)("h3",{id:"argo-cd-cloneset-health-check"},"Argo-cd CloneSet Health Check"),(0,s.kt)("p",null,"\u914d\u7f6eCloneSet Argo-cd ",(0,s.kt)("a",{parentName:"p",href:"https://argo-cd.readthedocs.io/en/stable/operator-manual/health/#custom-health-checks"},"Custom CRD Health Checks"),"\uff0c\n",(0,s.kt)("strong",{parentName:"p"},"Argo-cd\u6839\u636e\u8be5\u914d\u7f6e\u80fd\u591f\u5b9e\u73b0CloneSet\u81ea\u5b9a\u4e49\u8d44\u6e90\u7684\u68c0\u67e5\uff0c\u5982CloneSet\u662f\u5426\u53d1\u5e03\u5b8c\u6210\uff0c\u4ee5\u53caPod\u662f\u5426ready\u7b49\uff0c"),"\u5982\u4e0b\uff1a"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-yaml"},'apiVersion: v1\nkind: ConfigMap\nmetadata:\n  labels:\n    app.kubernetes.io/name: argocd-cm\n    app.kubernetes.io/part-of: argocd\n  name: argocd-cm\n  namespace: argocd\ndata:\n  resource.customizations.health.apps.kruise.io_CloneSet: |\n    hs = {}\n    -- if paused\n    if obj.spec.updateStrategy.paused then\n      hs.status = "Suspended"\n      hs.message = "CloneSet is Suspended"\n      return hs\n    end\n\n    -- check cloneSet status\n    if obj.status ~= nil then\n      if obj.status.observedGeneration < obj.metadata.generation then\n        hs.status = "Progressing"\n        hs.message = "Waiting for rollout to finish: observed cloneSet generation less then desired generation"\n        return hs\n      end\n\n      if obj.status.updatedReplicas < obj.spec.replicas then\n        hs.status = "Progressing"\n        hs.message = "Waiting for rollout to finish: replicas hasn\'t finished updating..."\n        return hs\n      end\n\n      if obj.status.updatedReadyReplicas < obj.status.updatedReplicas then\n        hs.status = "Progressing"\n        hs.message = "Waiting for rollout to finish: replicas hasn\'t finished updating..."\n        return hs\n      end\n\n      hs.status = "Healthy"\n      return hs\n    end\n\n    -- if status == nil\n    hs.status = "Progressing"\n    hs.message = "Waiting for cloneSet"\n    return hs\n')),(0,s.kt)("p",null,(0,s.kt)("strong",{parentName:"p"},"kruise\u5185\u90e8\u81ea\u5b9a\u4e49CRD\u8d44\u6e90\u9664CloneSet\uff0c\u5176\u5b83\u5982\uff1aAdvanced StatefulSet\u3001SidecarSet\u7b49\u90fd\u53ef\u4ee5\u7c7b\u4f3c\u4e0a\u9762\u7684\u65b9\u5f0f\u5b9e\u73b0Custom Resource Health\u3002")),(0,s.kt)("h3",{id:"tekton-pipeline--argo-cd"},"Tekton Pipeline + Argo-cd"),(0,s.kt)("p",null,"\u901a\u8fc7Tekton Pipeline\u8fdb\u884cArgo-cd\u90e8\u7f72\u5e94\u7528\uff0c\u53ef\u4ee5\u66f4\u597d\u7684\u8df5\u884cDevops\u601d\u60f3\uff0c\u4e0eCI\u6d41\u7a0b\u6253\u901a\u3002\u5176\u4e2d\u9700\u8981\u5c06Argo-cd\u7684\u5bc6\u94a5\uff08",(0,s.kt)("a",{parentName:"p",href:"https://argo-cd.readthedocs.io/en/stable/getting_started/#4-login-using-the-cli"},"\u5bc6\u94a5\u83b7\u53d6\u65b9\u6cd5"),"\uff09\u5b58\u50a8\u5230Secret\u5f53\u4e2d\uff0c\u8fdb\u800c\u5728Tekton Pipeline\u4e2d\u4f7f\u7528\uff0c\u5982\u4e0b\uff1a"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-yaml"},'apiVersion: v1\ndata:\n  # argo-cd admin secret\n  username: xxxxx\n  password: xxxxx\n  server: xxxxx\nkind: Secret\nmetadata:\n  name: argosecret\n---\napiVersion: tekton.dev/v1beta1\nkind: Task\nmetadata:\n  labels:\n    app: helloworld\n  name: helloworld-argocd\nspec:\n  params:\n  - name: gitrepositoryurl\n    type: string\n  - name: branch\n    type: string\n  - name: short_sha\n    type: string\n  - name: docker_repo\n    type: string\n  - name: app_name\n    type: string\n  - name: app_ns\n    type: string\n  - name: k8s_server\n    type: string\n  steps:\n  - name: argocd-deploy\n    image: argoproj/argocd:latest\n    command:\n    - sh\n    args:\n    - \'-ce\'\n    - >\n      set -e\n\n      echo "upgrade app $(params.app_name)"; username=`cat /var/secret/username`; password=`cat /var/secret/password`; server=`cat /var/secret/server`;\n\n      argocd login ${server} --insecure --username ${username} --password ${password}\n\n      argocd app create $(params.app_name) --upsert --repo $(params.gitrepositoryurl) --path $(params.app_name)/charts --dest-namespace $(params.app_ns) --dest-server $(params.k8s_server) --revision $(params.branch) --helm-set image.repository=$(params.docker_repo) --helm-set image.tag=$(params.branch)-$(params.short_sha) --helm-set installation.namespace=$(params.app_ns)\n\n      argocd app list; argocd app sync $(params.app_name)\n\n      argocd app wait $(params.app_name) --health\n    volumeMounts:\n    - name: argocd-secret\n      mountPath: "/var/secret"\n  volumes:\n  - name: argocd-secret\n    secret:\n      secretName: argosecret\n---\napiVersion: tekton.dev/v1beta1\nkind: Pipeline\nmetadata:\n  name: helloworld-pipeline\nspec:\n  params:\n  - name: gitrepositoryurl\n    type: string\n  - name: branch\n    type: string\n  - name: short_sha\n    type: string\n  - name: docker_repo\n    type: string\n  - name: app_name\n    type: string\n  - name: app_ns\n    type: string\n  - name: k8s_server\n    type: string\n  # \u6b64\u5904\u53ef\u4ee5\u4e0eCI\u6d41\u7a0b\u6253\u901a\uff0c\u5b9e\u73b0CI/CD Pipeline\n  tasks:\n  - name: helloworld-argocd\n    taskRef:\n      name: helloworld-argocd\n    params:\n    - name: gitrepositoryurl\n      value: $(params.gitrepositoryurl)\n    - name: short_sha\n      value: $(params.short_sha)\n    - name: branch\n      value: $(params.branch)\n    - name: docker_repo\n      value: $(params.docker_repo)\n    - name: app_name\n      value: $(params.app_name)\n    - name: app_ns\n      value: $(params.app_ns)\n    - name: k8s_server\n      value: $(params.k8s_server)\n')),(0,s.kt)("h3",{id:"\u6267\u884ctekton-pipeline"},"\u6267\u884cTekton Pipeline"),(0,s.kt)("p",null,"\u5b9a\u4e49PipelineRun CRD\u8d44\u6e90\uff0c\u5e76kubectl apply -f \u5230k8s\u96c6\u7fa4\u6267\u884cPipeline\uff0c\u5982\u4e0b\uff1a"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-yaml"},"apiVersion: tekton.dev/v1beta1\nkind: PipelineRun\nmetadata:\n  name: helloworld-pipeline-run-1\nspec:\n  pipelineRef:\n    name: helloworld-pipeline\n  params:\n  - name: gitrepositoryurl\n    value: https://github.com/zmberg/samples.git\n  - name: branch\n    value: hello_world\n  - name: short_sha\n    value: d92ae174b\n  - name: docker_repo\n    value: zhaomingshan/kruise\n  - name: app_name\n    value: helloworld\n  - name: app_ns\n    value: helloworld\n  - name: k8s_server\n    value: https://kubernetes.default.svc\n")),(0,s.kt)("p",null,"\u53ef\u4ee5\u901a\u8fc7Argo-cd cli\u67e5\u770b\u90e8\u7f72\u60c5\u51b5\uff0c\u5982\u4e0b\uff1a"),(0,s.kt)("p",null,(0,s.kt)("img",{alt:"guestbook",src:t(486).Z,width:"1226",height:"628"})),(0,s.kt)("h2",{id:"\u603b\u7ed3"},"\u603b\u7ed3"),(0,s.kt)("p",null,"OpenKruise\u66f4\u591a\u662fKubernetes\u5c42\u9762\u6269\u5c55\u7684\u80fd\u529b\uff0c\u5982 \u539f\u5730\u5347\u7ea7\u3001\u955c\u50cf\u9884\u70ed\u7b49\uff0c\u6240\u4ee5\u5f88\u591a\u793e\u533a\u7684\u7528\u6237\u5728\u751f\u4ea7\u73af\u5883\u4f7f\u7528OpenKruise\u8fd8\u6709\u4e00\u4e9b\u989d\u5916\u7684\u6210\u672c\uff0c\u9700\u8981\u96c6\u6210\u6216\u81ea\u7814\u5bb9\u5668PaaS\u65b9\u6848\u3002\n\u672c\u6587\u7684\u4e3b\u8981\u76ee\u7684\u662f\u60f3\u5c06\u793e\u533a\u7684\u4e00\u4e9b\u4f18\u79c0\u7684Paas\u65b9\u6848\u4e0eOpenKruise\u7ed3\u5408\u8d77\u6765\uff0c\u5c3d\u91cf\u8ba9\u66f4\u591a\u7684\u4eba\u80fd\u591f\u66f4\u5c0f\u7684\u6210\u672c\u4eab\u53d7\u4e91\u539f\u751f\u5e26\u6765\u7684\u7ea2\u5229\u3002Argo-cd\u662f\u76ee\u524d\u793e\u533a\u975e\u5e38\u4f18\u79c0\u7684\u4e00\u6b3e\u4ea7\u54c1\uff0c\n\u5e76\u4e14\u5b83\u5bf9\u4e8eOpenKruise\u4f17\u591a\u7684\u81ea\u5b9a\u4e49CRD\u8d44\u6e90\u4e5f\u80fd\u591f\u975e\u5e38\u4fbf\u6377\u7684\u5bf9\u63a5\uff0c\u5bf9\u4f7f\u7528\u8005\u800c\u8a00\u5f88\u53cb\u597d\u3002\u672c\u6587\u4e5f\u7b97\u662f\u4e00\u4e2a\u629b\u7816\u5f15\u7389\uff0c\u5e0c\u671b\u793e\u533a\u7684\u4f17\u591a\u5c0f\u4f19\u4f34\u80fd\u591f\u63d0\u4f9b\u66f4\u591a\u7684\u601d\u8def\uff0c\u540e\u9762\u4e5f\u4f1a\u5c1d\u8bd5\u4e0e\u4e00\u4e9b\u5176\u5b83CI/CD\u6d41\u6c34\u7ebf\u7ed3\u5408\uff0c\u4e89\u53d6\u80fd\u591f\u66f4\u597d\u7684\u8df5\u884cdevops\u7406\u5ff5\u3002"))}m.isMDXComponent=!0},486:function(e,n,t){n.Z=t.p+"assets/images/argo_sync_healthy-47754891eaf67731ab458189bd61ce7b.png"},99835:function(e,n,t){n.Z=t.p+"assets/images/argocd-9b2263b3527910a6a839509239e3ebbf.jpeg"}}]);