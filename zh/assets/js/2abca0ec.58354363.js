"use strict";(self.webpackChunkopenkruise_io=self.webpackChunkopenkruise_io||[]).push([[6237],{3905:function(e,n,t){t.d(n,{Zo:function(){return l},kt:function(){return k}});var a=t(67294);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function p(e,n){if(null==e)return{};var t,a,r=function(e,n){if(null==e)return{};var t,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)t=o[a],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)t=o[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var s=a.createContext({}),m=function(e){var n=a.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},l=function(e){var n=m(e.components);return a.createElement(s.Provider,{value:n},e.children)},u={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},c=a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,o=e.originalType,s=e.parentName,l=p(e,["components","mdxType","originalType","parentName"]),c=m(t),k=r,d=c["".concat(s,".").concat(k)]||c[k]||u[k]||o;return t?a.createElement(d,i(i({ref:n},l),{},{components:t})):a.createElement(d,i({ref:n},l))}));function k(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var o=t.length,i=new Array(o);i[0]=c;var p={};for(var s in n)hasOwnProperty.call(n,s)&&(p[s]=n[s]);p.originalType=e,p.mdxType="string"==typeof e?e:r,i[1]=p;for(var m=2;m<o;m++)i[m]=t[m];return a.createElement.apply(null,i)}return a.createElement.apply(null,t)}c.displayName="MDXCreateElement"},15926:function(e,n,t){t.r(n),t.d(n,{assets:function(){return l},contentTitle:function(){return s},default:function(){return k},frontMatter:function(){return p},metadata:function(){return m},toc:function(){return u}});var a=t(87462),r=t(63366),o=(t(67294),t(3905)),i=["components"],p={title:"Kustomize Schema Generator"},s=void 0,m={unversionedId:"cli-tool/kustomize-schema-generator",id:"version-v1.6/cli-tool/kustomize-schema-generator",title:"Kustomize Schema Generator",description:"kruise-api\u4e3aopenkruise\u7684\u529f\u80fd\u63d0\u4f9b\u4e86\u5de5\u5177\uff0c\u7528\u4e8e\u751f\u6210\u652f\u6301openkruise CRD\u7684kustomize schema\u6587\u4ef6\uff0c\u5e76\u63d0\u4f9b\u4e86\u5f53\u524d\u53ef\u7528\u7684OpenAPI schema\u3002",source:"@site/i18n/zh/docusaurus-plugin-content-docs/version-v1.6/cli-tool/kustomize-schema-generator.md",sourceDirName:"cli-tool",slug:"/cli-tool/kustomize-schema-generator",permalink:"/zh/docs/v1.6/cli-tool/kustomize-schema-generator",draft:!1,editUrl:"https://github.com/openkruise/openkruise.io/edit/master/docs/cli-tool/kustomize-schema-generator.md",tags:[],version:"v1.6",lastUpdatedBy:"berg",lastUpdatedAt:1711105168,formattedLastUpdatedAt:"2024/3/22",frontMatter:{title:"Kustomize Schema Generator"}},l={},u=[{value:"Schema Generator",id:"schema-generator",level:2},{value:"Schema Usage",id:"schema-usage",level:2},{value:"How to specify the schema file",id:"how-to-specify-the-schema-file",level:3},{value:"Example",id:"example",level:3}],c={toc:u};function k(e){var n=e.components,t=(0,r.Z)(e,i);return(0,o.kt)("wrapper",(0,a.Z)({},c,t,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://github.com/openkruise/kruise-api"},"kruise-api"),"\u4e3aopenkruise\u7684\u529f\u80fd\u63d0\u4f9b\u4e86\u5de5\u5177\uff0c\u7528\u4e8e\u751f\u6210\u652f\u6301openkruise CRD\u7684",(0,o.kt)("inlineCode",{parentName:"p"},"kustomize schema"),"\u6587\u4ef6\uff0c\u5e76\u63d0\u4f9b\u4e86\u5f53\u524d\u53ef\u7528\u7684",(0,o.kt)("inlineCode",{parentName:"p"},"OpenAPI schema"),"\u3002"),(0,o.kt)("h2",{id:"schema-generator"},"Schema Generator"),(0,o.kt)("p",null,"\u5728\u4f7f\u7528",(0,o.kt)("inlineCode",{parentName:"p"},"kustomize"),"\u7ba1\u7406\u5e94\u7528\u65f6\uff0c\u4e3a\u4e86\u5728\u4f7f\u7528openkruise\u8d44\u6e90\u65f6\u80fd\u591f\u4f7f\u7528",(0,o.kt)("inlineCode",{parentName:"p"},"strategic merge patches (SMPs)"),"\u6765\u5904\u7406\u8d44\u6e90\u5b9a\u4e49\u4e2d\u7684\u73af\u5883\u53d8\u91cf\u6216\u4efb\u4f55\u6570\u7ec4\u7c7b\u578b\u5b57\u6bb5\uff0c\u9700\u8981openkruise CRD\u7684",(0,o.kt)("inlineCode",{parentName:"p"},"OpenAPI schema"),"\u4e2d\u5305\u542b\u6307\u5b9a\u7684",(0,o.kt)("inlineCode",{parentName:"p"},"patch strategy"),"\u3002\n",(0,o.kt)("inlineCode",{parentName:"p"},"Schema Generator"),"\u652f\u6301\u4e86\u6839\u636eopenkruise\u7684\u8d44\u6e90\u5b9a\u4e49\u5feb\u901f\u751f\u6210",(0,o.kt)("inlineCode",{parentName:"p"},"kustomize schema"),"\u6587\u4ef6\u7684\u529f\u80fd\u3002",(0,o.kt)("inlineCode",{parentName:"p"},"kustomize schema"),"\u6587\u4ef6\u751f\u6210\u7684\u5177\u4f53\u65b9\u5f0f\u53ef\u4ee5\u67e5\u770b",(0,o.kt)("a",{parentName:"p",href:"https://github.com/openkruise/kruise-api/blob/master/cmd/gen-schema/README.md"},"README.md"),"\u3002"),(0,o.kt)("h2",{id:"schema-usage"},"Schema Usage"),(0,o.kt)("h3",{id:"how-to-specify-the-schema-file"},"How to specify the schema file"),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://github.com/openkruise/kruise-api"},"kruise-api"),"\u4e2d\u63d0\u4f9b\u4e86\u53ef\u7528\u7684",(0,o.kt)("inlineCode",{parentName:"p"},"OpenAPI schema"),"\u6587\u4ef6, \u4f60\u53ef\u4ee5\u76f4\u63a5\u4f7f\u7528\u6700\u65b0\u7248\u672c\u6216\u6307\u5b9a\u7248\u672c\u7684",(0,o.kt)("inlineCode",{parentName:"p"},"OpenAPI schema"),"\u6587\u4ef6\uff0c\u53ea\u9700\u5728",(0,o.kt)("inlineCode",{parentName:"p"},"kustomization.yaml"),"\u4e2d\u6dfb\u52a0\u5982\u4e0b\u914d\u7f6e\u5757\uff1a"),(0,o.kt)("p",null,"\u4f7f\u7528\u6700\u65b0\u7248\u672c"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-yaml"},"openapi:\n  path: https://raw.githubusercontent.com/openkruise/kruise-api/master/schema/openkruise_all_k8s_kustomize_schema.json\n")),(0,o.kt)("p",null,"\u4f7f\u7528\u6307\u5b9a\u7248\u672c"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-yaml"},"openapi:\n  path: https://raw.githubusercontent.com/openkruise/kruise-api/raw/<tag>/schema/openkruise_all_k8s_kustomize_schema.json\n")),(0,o.kt)("p",null,"\u6216\u8005\u4f60\u53ef\u4ee5\u4e0b\u8f7d",(0,o.kt)("a",{parentName:"p",href:"https://github.com/openkruise/kruise-api"},"kruise-api"),"\u5230\u672c\u5730\uff0c\u5e76\u5728\u914d\u7f6e\u5757\u4e2d\u6307\u5b9a\u672c\u5730\u6587\u4ef6\u8def\u5f84\u5373\u53ef\uff1a"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-yaml"},"openapi:\n  path: <kruise-api-local-path>/schema/openkruise_all_k8s_kustomize_schema.json\n")),(0,o.kt)("h3",{id:"example"},"Example"),(0,o.kt)("p",null,"\u4e0b\u9762\u4ee5",(0,o.kt)("inlineCode",{parentName:"p"},"sidecarset"),"\u4e3a\u4f8b\uff0c\u4ecb\u7ecd\u5982\u4f55\u5728kustomize\u4e2d\u4f7f\u7528",(0,o.kt)("inlineCode",{parentName:"p"},"kustomize OpenAPI schema"),"\u6765\u652f\u6301openkruise CRD\u7684\u5408\u5e76\u7b56\u7565\u3002"),(0,o.kt)("p",null,"\u4e00\u4e2a",(0,o.kt)("inlineCode",{parentName:"p"},"sidecarset"),"\u7684\u5b8c\u6574\u5b9a\u4e49\u5982\u4e0b\u6240\u793a\uff1a"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-yaml"},'apiVersion: apps.kruise.io/v1alpha1\nkind: SidecarSet\nmetadata:\n  name: test-sidecarset\nspec:\n  selector:\n    matchLabels:\n      app: nginx\n  updateStrategy:\n    type: RollingUpdate\n    maxUnavailable: 1\n  containers:\n    - name: sidecar1\n      image: centos:6.7\n      command: ["sleep", "999d"]\n      volumeMounts:\n        - name: log-volume1\n          mountPath: /var/log\n    - name: sidecar2\n      image: centos:6.8\n      command: ["sleep", "999d"] \n      volumeMounts:\n        - name: log-volume2\n          mountPath: /var/log\n  volumes: \n    - name: log-volume1\n      emptyDir: {}\n    - name: log-volume2\n      emptyDir: {}\n')),(0,o.kt)("p",null,"\u5f53\u524d\u5b58\u5728\u4e24\u4e2a\u5bb9\u5668\uff0c\u5206\u522b\u4e3a ",(0,o.kt)("inlineCode",{parentName:"p"},"sidecar1")," \u548c ",(0,o.kt)("inlineCode",{parentName:"p"},"sidecar2"),"\uff0c\u5b83\u4eec\u5206\u522b\u6302\u8f7d\u4e86\u4e24\u4e2a\u540d\u4e3a",(0,o.kt)("inlineCode",{parentName:"p"},"log-volume1"),"\u548c",(0,o.kt)("inlineCode",{parentName:"p"},"log-volume2"),"\u7684\u5377\u3002 \u73b0\u5728\u5e0c\u671b\u6dfb\u52a0\u4e00\u4e2a\u65b0\u7684\u5bb9\u5668",(0,o.kt)("inlineCode",{parentName:"p"},"sidecar3"),"\uff0c\u5e76\u6302\u8f7d\u4e00\u4e2a\u65b0\u589e\u7684\u540d\u4e3a ",(0,o.kt)("inlineCode",{parentName:"p"},"log-volume3")," \u7684\u5377\uff0c\u540c\u65f6\u5c06 ",(0,o.kt)("inlineCode",{parentName:"p"},"sidecar1")," \u4ee5\u53ca\u5bf9\u5e94 ",(0,o.kt)("inlineCode",{parentName:"p"},"volume")," \u5220\u9664\uff0c\u7136\u540e\u5bf9\u4e00\u4e9b\u5176\u4ed6\u5b57\u6bb5\u505a\u7b80\u5355\u4fee\u6539\u3002\u90a3\u4e48\u53ef\u4ee5\u7f16\u5199\u5982\u4e0b\u7684\u91c7\u7528\u5408\u5e76\u7b56\u7565\u7684kustomization.yaml\u6587\u4ef6\uff1a"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-yaml"},'apiVersion: kustomize.config.k8s.io/v1beta1\nkind: Kustomization\n\nresources:\n- sidecarset.yaml\n\nopenapi:\n  path: https://raw.githubusercontent.com/openkruise/kruise-api/master/schema/openkruise_all_k8s_kustomize_schema.json\n\npatchesStrategicMerge:\n- |-\n  apiVersion: apps.kruise.io/v1alpha1\n  kind: SidecarSet\n  metadata:\n    name: test-sidecarset\n  spec:\n    containers:\n      - name: sidecar1\n        $patch: delete\n      - name: sidecar2\n        volumeMounts:\n          - name: log-volume3\n            mountPath: /var/log3\n      - name: sidecar3\n        image: centos:6.9\n        command: ["sleep", "102d"]\n        volumeMounts:\n          - name: log-volume3\n            mountPath: /var/log\n    volumes:\n      - name: log-volume1\n        $patch: delete\n      - name: log-volume3\n        emptyDir: {}\n')),(0,o.kt)("p",null,"\u8fd9\u91cc\u4e3b\u8981\u989d\u5916\u6dfb\u52a0\u4e86openapi\u5b57\u6bb5\u5e76\u6307\u5b9a\u4e86\u81ea\u5b9a\u4e49 ",(0,o.kt)("inlineCode",{parentName:"p"},"OpenAPI schema")," \u6587\u4ef6\u7684\u8def\u5f84\uff0c\u6b64\u65f6kustomize\u5728patch\u65f6\u4f1a\u6839\u636e",(0,o.kt)("inlineCode",{parentName:"p"},"OpenAPI schema"),"\u6587\u4ef6\u4e2d\u7684 ",(0,o.kt)("inlineCode",{parentName:"p"},"x-kubernetes-patch-*")," \u952e\u6765\u51b3\u5b9a\u4e0d\u540c\u5b57\u6bb5\u7684\u5408\u5e76\u7b56\u7565\u3002\n\u5728\u6267\u884c\u547d\u4ee4 ",(0,o.kt)("inlineCode",{parentName:"p"},"kustomize build .")," \u540e\uff0c\u53ef\u4ee5\u5f97\u5230\u5982\u4e0b\u7ed3\u679c\uff1a"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-yaml"},"apiVersion: apps.kruise.io/v1alpha1\nkind: SidecarSet\nmetadata:\n  name: test-sidecarset\nspec:\n  containers:\n  - command:\n    - sleep\n    - 999d\n    image: centos:6.8\n    name: sidecar2\n    volumeMounts:\n    - mountPath: /var/log3\n      name: log-volume3\n    - mountPath: /var/log\n      name: log-volume2\n  - command:\n    - sleep\n    - 102d\n    image: centos:6.9\n    name: sidecar3\n    volumeMounts:\n    - mountPath: /var/log\n      name: log-volume3\n  selector:\n    matchLabels:\n      app: nginx\n  updateStrategy:\n    maxUnavailable: 1\n    type: RollingUpdate\n  volumes:\n  - emptyDir: {}\n    name: log-volume3\n  - emptyDir: {}\n    name: log-volume2\n")),(0,o.kt)("p",null,"\u5176\u4ed6\u5e38\u7528\u7684openkruise crd\u5408\u5e76\u7b56\u7565\u7684\u4f7f\u7528\u6848\u4f8b\u53ef\u4ee5\u53c2\u8003",(0,o.kt)("a",{parentName:"p",href:"https://github.com/openkruise/kruise-api/tree/master/test/kustomize/kruise"},"\u8fd9\u91cc")))}k.isMDXComponent=!0}}]);