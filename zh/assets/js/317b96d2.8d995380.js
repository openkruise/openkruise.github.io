"use strict";(self.webpackChunkopenkruise_io=self.webpackChunkopenkruise_io||[]).push([[9067],{3905:function(e,n,t){t.d(n,{Zo:function(){return m},kt:function(){return u}});var r=t(67294);function i(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function a(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function s(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?a(Object(t),!0).forEach((function(n){i(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function o(e,n){if(null==e)return{};var t,r,i=function(e,n){if(null==e)return{};var t,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||(i[t]=e[t]);return i}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var l=r.createContext({}),c=function(e){var n=r.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):s(s({},n),e)),t},m=function(e){var n=c(e.components);return r.createElement(l.Provider,{value:n},e.children)},p={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},d=r.forwardRef((function(e,n){var t=e.components,i=e.mdxType,a=e.originalType,l=e.parentName,m=o(e,["components","mdxType","originalType","parentName"]),d=c(t),u=i,h=d["".concat(l,".").concat(u)]||d[u]||p[u]||a;return t?r.createElement(h,s(s({ref:n},m),{},{components:t})):r.createElement(h,s({ref:n},m))}));function u(e,n){var t=arguments,i=n&&n.mdxType;if("string"==typeof e||i){var a=t.length,s=new Array(a);s[0]=d;var o={};for(var l in n)hasOwnProperty.call(n,l)&&(o[l]=n[l]);o.originalType=e,o.mdxType="string"==typeof e?e:i,s[1]=o;for(var c=2;c<a;c++)s[c]=t[c];return r.createElement.apply(null,s)}return r.createElement.apply(null,t)}d.displayName="MDXCreateElement"},40245:function(e,n,t){t.r(n),t.d(n,{assets:function(){return m},contentTitle:function(){return l},default:function(){return u},frontMatter:function(){return o},metadata:function(){return c},toc:function(){return p}});var r=t(87462),i=t(63366),a=(t(67294),t(3905)),s=["components"],o={},l="\u6e38\u620f\u670d\u5171\u4eab\u5185\u5b58\u6700\u4f73\u5b9e\u8df5",c={unversionedId:"best-practices/shared-mem",id:"best-practices/shared-mem",title:"\u6e38\u620f\u670d\u5171\u4eab\u5185\u5b58\u6700\u4f73\u5b9e\u8df5",description:"\u80cc\u666f\u8bf4\u660e",source:"@site/i18n/zh/docusaurus-plugin-content-docs-kruisegame/current/best-practices/shared-mem.md",sourceDirName:"best-practices",slug:"/best-practices/shared-mem",permalink:"/zh/kruisegame/best-practices/shared-mem",draft:!1,tags:[],version:"current",lastUpdatedBy:"ChrisLiu",lastUpdatedAt:1708654862,formattedLastUpdatedAt:"2024/2/23",frontMatter:{},sidebar:"kruisegame",previous:{title:"\u4f20\u7edf\u533a\u670d\u7c7b\u6e38\u620f\uff08PvE\uff09\u6700\u4f73\u5b9e\u8df5",permalink:"/zh/kruisegame/best-practices/pve-game"},next:{title:"\u6e38\u620f\u670d\u654f\u6377\u4ea4\u4ed8\u4e0e\u8fd0\u7ef4\u7ba1\u7406\u6700\u4f73\u5b9e\u8df5",permalink:"/zh/kruisegame/best-practices/gameserver-delivery-management"}},m={},p=[{value:"\u80cc\u666f\u8bf4\u660e",id:"\u80cc\u666f\u8bf4\u660e",level:2},{value:"\u65b9\u6848\u4ecb\u7ecd",id:"\u65b9\u6848\u4ecb\u7ecd",level:2},{value:"\u5b9e\u8df5\u793a\u4f8b",id:"\u5b9e\u8df5\u793a\u4f8b",level:2},{value:"1. init\u8fdb\u7a0b\u7a0b\u5e8f\u793a\u4f8b\uff08\u5199\u5185\u5b58\uff09",id:"1-init\u8fdb\u7a0b\u7a0b\u5e8f\u793a\u4f8b\u5199\u5185\u5b58",level:3},{value:"2. gs\u8fdb\u7a0b\u7a0b\u5e8f\u793a\u4f8b\uff08\u8bfb\u5185\u5b58\uff09",id:"2-gs\u8fdb\u7a0b\u7a0b\u5e8f\u793a\u4f8b\u8bfb\u5185\u5b58",level:3},{value:"3. \u5236\u4f5c\u955c\u50cf",id:"3-\u5236\u4f5c\u955c\u50cf",level:3},{value:"4. \u90e8\u7f72init\u8fdb\u7a0b",id:"4-\u90e8\u7f72init\u8fdb\u7a0b",level:3},{value:"5. \u90e8\u7f72gs\u8fdb\u7a0b",id:"5-\u90e8\u7f72gs\u8fdb\u7a0b",level:3}],d={toc:p};function u(e){var n=e.components,o=(0,i.Z)(e,s);return(0,a.kt)("wrapper",(0,r.Z)({},d,o,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"\u6e38\u620f\u670d\u5171\u4eab\u5185\u5b58\u6700\u4f73\u5b9e\u8df5"},"\u6e38\u620f\u670d\u5171\u4eab\u5185\u5b58\u6700\u4f73\u5b9e\u8df5"),(0,a.kt)("h2",{id:"\u80cc\u666f\u8bf4\u660e"},"\u80cc\u666f\u8bf4\u660e"),(0,a.kt)("p",null,"\u5185\u5b58\u654f\u611f\u578b\u6e38\u620f\u670d\u52a1\uff0c\u7279\u6307\u5bf9\u4e8e\u5185\u5b58\u8d44\u6e90\u9700\u6c42\u8f83\u5927\u7684\u6e38\u620f\u670d\uff0c\u5728\u542f\u52a8\u65f6\u5f80\u5f80\u9700\u8981\u52a0\u8f7d\u4f17\u591a\u8d44\u6e90\u5230\u5185\u5b58\u4e4b\u4e2d\u4ee5\u63d0\u5347\u73a9\u5bb6\u6e38\u620f\u4ea4\u4e92\u4f53\u9a8c\u3002\u4f46\u4e5f\u6b63\u56e0\u4e8e\u6b64\uff0c\u5e26\u6765\u4e861\uff09\u6e38\u620f\u670d\u542f\u52a8\u901f\u5ea6\u6162\u3001\u7248\u672c\u66f4\u65b0\u65f6\u6548\u7387\u4f4e\uff1b2\uff09\u6e38\u620f\u670d\u4e4b\u95f4\u5b58\u5728\u76f8\u540c\u5185\u5b58\u6570\u636e\u4f46\u65e0\u6cd5\u88ab\u670d\u7528\uff0c\u8282\u70b9\u5185\u5b58\u8d44\u6e90\u88ab\u8fc7\u5ea6\u6d6a\u8d39\u7684\u95ee\u9898\u3002"),(0,a.kt)("p",null,"\u6e38\u620f\u5f00\u53d1\u8005\u5f80\u5f80\u4f7f\u7528\u5171\u4eab\u5185\u5b58\u6280\u672f\u6765\u89e3\u51b3\u4e0a\u8ff0\u95ee\u9898\uff0c\u4ee5\u63d0\u5347\u6e38\u620f\u670d\u542f\u52a8\u6548\u7387\u548c\u5185\u5b58\u8d44\u6e90\u6548\u7387\u3002\u901a\u5e38\uff0c\u5b58\u5728\u4e00\u4e2ainit\u8fdb\u7a0b\uff0c\u6267\u884c\u6e38\u620f\u670d\u521d\u59cb\u5316\u52a0\u8f7d\u7684\u529f\u80fd\uff0c\u5c06\u6570\u636e\u5199\u5165\u5171\u4eab\u5185\u5b58\uff1b\u5728\u6b64\u4e4b\u540e\uff0c\u5728\u8be5\u673a\u5668\u4e0a\u65b0\u521b\u5efa\u7684\u6240\u6709\u6e38\u620f\u670d\u90fd\u65e0\u9700\u91cd\u590d\u6267\u884c\u8be5\u8fc7\u7a0b\uff0c\u53ea\u9700\u8bfb\u53d6\u540c\u4e00\u5757\u5730\u5740\u5bf9\u5e94\u7684\u5185\u5b58\u6570\u636e\u5373\u53ef\uff0c\u542f\u52a8\u901f\u5ea6\u63d0\u5347\u4e86\uff0c\u4e14\u5185\u5b58\u8d44\u6e90\u88ab\u590d\u7528\uff0c\u4e0d\u4f1a\u9020\u6210\u8d44\u6e90\u6d6a\u8d39\u3002"),(0,a.kt)("p",null,"\u672c\u6587\u5c06\u5173\u6ce8\u5bb9\u5668\u5316\u6e38\u620f\u670d\u5171\u4eab\u5185\u5b58\u4f7f\u7528\u65b9\u6848\uff0c\u63d0\u4f9b\u6700\u4f73\u5b9e\u8df5\u3002"),(0,a.kt)("h2",{id:"\u65b9\u6848\u4ecb\u7ecd"},"\u65b9\u6848\u4ecb\u7ecd"),(0,a.kt)("p",null,"\u65b9\u6848\u6d89\u53ca\u5230\u4e24\u79cd\u7c7b\u578b\u7684\u8fdb\u7a0b\uff0c\u5982\u4e0a\u6587\u4e2d\u63d0\u5230\u7684init\u8fdb\u7a0b\uff0c\u8fdb\u884c\u5199\u5185\u5b58\uff1bgs\u8fdb\u7a0b\u5728\u542f\u52a8\u65f6\u8fdb\u884c\u8bfb\u5185\u5b58\u3002"),(0,a.kt)("img",{src:t(21685).Z,style:{width:"500px"}}),(0,a.kt)("p",null,"\u67b6\u6784\u56fe\u82e5\u4e0a\u6240\u793a\uff0cinit\u8fdb\u7a0b\u4f7f\u7528DaemonSet\u8fdb\u884c\u7ba1\u7406\uff0c\u6bcf\u4e2a\u6e38\u620f\u670d\u8282\u70b9\u90e8\u7f72\u4e00\u4e2ainit\uff1b\u800cgs\u8fdb\u7a0b\u4f7f\u7528GameServerSet\u8fdb\u884c\u7ba1\u7406\uff0c\u6bcf\u4e2a\u8282\u70b9\u53ef\u4ee5\u6709\u591a\u4e2ags\u3002\u5f53DaemonSet\u90e8\u7f72\u5b8c\u6210\u5e76\u4e14\u5bf9\u5e94\u7684init pod\u6210\u529f\u6267\u884c\u540e\uff0c\u8fdb\u884cGameServerSet\u90e8\u7f72\uff0c\u5f00\u542f\u6e38\u620f\u670d\u3002\u6b64\u65f6\uff0cgs\u5c06\u5feb\u901f\u542f\u52a8\uff0c\u5e76\u4e14\u540c\u4e00\u4e2a\u8282\u70b9\u4e0a\u7684gs\u4f1a\u521d\u59cb\u65f6\u590d\u7528\u540c\u4e00\u5757\u5185\u5b58\u7a7a\u95f4\u3002"),(0,a.kt)("h2",{id:"\u5b9e\u8df5\u793a\u4f8b"},"\u5b9e\u8df5\u793a\u4f8b"),(0,a.kt)("h3",{id:"1-init\u8fdb\u7a0b\u7a0b\u5e8f\u793a\u4f8b\u5199\u5185\u5b58"},"1. init\u8fdb\u7a0b\u7a0b\u5e8f\u793a\u4f8b\uff08\u5199\u5185\u5b58\uff09"),(0,a.kt)("p",null,"\u4f7f\u7528\u4e0b\u9762\u4ee3\u7801\u521b\u5efa\u4e00\u5757\u5171\u4eab\u5185\u5b58\uff0c\u7136\u540e\u6bcf\u9694\u4e00\u79d2\u5411\u5185\u5b58\u5199\u5165id\u6570\u636e\uff0cid\u6bcf\u79d2\u9012\u589e\u52a0\u4e00"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-cpp"},'/* study.cpp \u5199\u7aef\u4ee3\u7801 */\n#include<sys/ipc.h>\n#include<sys/types.h>\n#include<sys/shm.h>\n#include<stdio.h>\n#include<stdlib.h>\n#include<string.h>\n\n/* \u7528\u4e8e\u4f20\u9012\u6d88\u606f\u7684\u7ed3\u6784\u4f53 */\ntypedef struct _msg\n{\n    int  id;\n    char str[64];\n}MSG;\n\nint main()\n{\n    MSG* msg;\n\n    /* \u83b7\u53d6\u952e\u503c */\n    key_t key = ftok("./",2015);\n    if(key == -1)\n    {\n        perror("ftok");\n        exit(-1);\n    }\n\n    /* \u521b\u5efa\u6216\u6253\u5f00\u4e00\u5757\u5171\u4eab\u5185\u5b58\uff0c\u5e76\u8fd4\u56de\u5185\u5b58\u6807\u8bc6\u7b26 */\n    int shd = shmget(key,sizeof(MSG),IPC_CREAT | 0666);\n    if(shd == -1)\n    {\n        perror("shmget");\n        exit(-1);\n    }\n\n    /* \u6620\u5c04\u5185\u5b58\u5730\u5740\u5230\u5f53\u524d\u8fdb\u7a0b\uff0c\u5e76\u8fd4\u56de\u5185\u5b58\u5757\u7684\u5730\u5740 */\n    msg = (MSG*)shmat(shd,NULL,0);\n    if(msg == (MSG*)-1)\n    {\n        perror("shmat");\n        exit(-1);\n    }\n\n    /* \u6539\u53d8\u5185\u5b58\u5730\u5740\u7684\u6570\u636e */\n    memset((void*)msg,0,sizeof(MSG));\n    for(int i = 0;i < 100000;i++)\n    {\n        msg->id = i;\n        printf("msg->id = %d\\n",msg->id);\n        sleep(1);\n    }\n\n    /* \u67e5\u770b\u7cfb\u7edf\u4e2d\u7684\u5171\u4eab\u5185\u5b58 */\n    system("ipcs -m");\n\n    return 0;\n}\n')),(0,a.kt)("h3",{id:"2-gs\u8fdb\u7a0b\u7a0b\u5e8f\u793a\u4f8b\u8bfb\u5185\u5b58"},"2. gs\u8fdb\u7a0b\u7a0b\u5e8f\u793a\u4f8b\uff08\u8bfb\u5185\u5b58\uff09"),(0,a.kt)("p",null,"\u4ee5\u4e0b\u4e3a\u8bfb\u53d6\u5171\u4eab\u5185\u5b58\u7684\u4ee3\u7801, \u4ee3\u7801\u83b7\u53d6shm_id\u4e3a0\u7684\u5171\u4eab\u5185\u5b58\u6570\u636e\uff0c\u5faa\u73af\u6253\u5370id\u6570\u636e\u3002"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-cpp"},'#include <stdio.h>\n#include <stdlib.h>\n#include <sys/ipc.h>\n#include <sys/shm.h>\n\nint main() {\n    int shm_id;\n    void *shared_memory;\n\n    // \u83b7\u53d6\u5171\u4eab\u5185\u5b58\u6807\u8bc6\u7b26\n    shm_id = 0;\n    printf("shm_id: %d\\n", shm_id);\n//    if (shm_id == -1) {\n//        perror("shmget failed");\n//        exit(1);\n//    }\n\n    // \u8fde\u63a5\u5171\u4eab\u5185\u5b58\n    shared_memory = shmat(shm_id, NULL, 0);\n    if (shared_memory == (void *) -1) {\n        perror("shmat failed");\n        exit(1);\n    }\n\n    // \u8bfb\u53d6\u5171\u4eab\u5185\u5b58\u6570\u636e\n    while(1) {\n        printf("Value from shared memory: %d\\n", *((int *)shared_memory));\n    }\n\n    // \u65ad\u5f00\u4e0e\u5171\u4eab\u5185\u5b58\u7684\u8fde\u63a5\n    if (shmdt(shared_memory) == -1) {\n        perror("shmdt failed");\n        exit(1);\n    }\n\n    return 0;\n}\n')),(0,a.kt)("h3",{id:"3-\u5236\u4f5c\u955c\u50cf"},"3. \u5236\u4f5c\u955c\u50cf"),(0,a.kt)("p",null,"gs\u7684Dockerfile\u5982\u4e0b\uff08init \u4e0e\u4e4b\u7c7b\u4f3c\uff09\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-docker"},'FROM gcc:latest\n\nWORKDIR /usr/src/myapp\nCOPY . .\n\nRUN gcc -o read read.c\n\nUSER root\n\nRUN chmod 777 /usr/src/myapp/read\n\nEntryPoint ["/usr/src/myapp/read"]\n\nCMD ["sleep 300000"]\n')),(0,a.kt)("h3",{id:"4-\u90e8\u7f72init\u8fdb\u7a0b"},"4. \u90e8\u7f72init\u8fdb\u7a0b"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-yaml"},"apiVersion: apps/v1\nkind: DaemonSet\nmetadata:\n  name: shm-daemonset\n  namespace: default\nspec:\n  selector:\n    matchLabels:\n      name: init\n  template:\n    metadata:\n      labels:\n        name: init\n    spec:\n      hostIPC: true #\u8bbe\u7f6e hostIPC: true \u65f6\uff0cPod\u5c06\u4f7f\u7528\u5bbf\u4e3b\u673a\u7684IPC\u547d\u540d\u7a7a\u95f4,\u4f7f\u7528\u5bbf\u4e3bIPC\u7684Pod\u53ef\u4ee5\u8bbf\u95ee\u5bbf\u4e3b\u673a\u4e0a\u7684\u5171\u4eab\u5185\u5b58\u6bb5\n      nodeSelector:\n        app: shared-mem #\u901a\u8fc7\u6807\u7b7e\u63a7\u5236\u5171\u4eab\u5185\u5b58\u4f5c\u7528\u7684\u8282\u70b9\u8303\u56f4\n      containers:\n      - name: init\n        image: registry.cn-hangzhou.aliyuncs.com/skkk/testc:write27_v2\n        volumeMounts:\n        - name: shm\n          mountPath: /dev/shm\n      volumes:\n      - name: shm\n        hostPath:\n          path: /dev/shm\n          type: Directory\n")),(0,a.kt)("p",null,"\u521b\u5efads\u540e\uff0c\u53ef\u4ee5\u5728\u5bbf\u4e3b\u673a\u4e0a\u770b\u5230\u521b\u5efa\u7684\u5171\u4eab\u5185\u5b58"),(0,a.kt)("img",{src:t(9611).Z,style:{width:"500px"}}),(0,a.kt)("p",null,"\u53ef\u4ee5\u5728\u5bb9\u5668\u65e5\u5fd7\u4e2d\u770b\u5230\u6bcf\u9694\u4e00\u79d2\u4fee\u6539id\u7684\u503c"),(0,a.kt)("img",{src:t(92137).Z,style:{width:"200px"}}),(0,a.kt)("h3",{id:"5-\u90e8\u7f72gs\u8fdb\u7a0b"},"5. \u90e8\u7f72gs\u8fdb\u7a0b"),(0,a.kt)("p",null,"\u521b\u5efags\u4ece\u5171\u4eab\u5185\u5b58\u4e2d\u8bfb\u53d6id\u7684\u503c"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-yaml"},"apiVersion: game.kruise.io/v1alpha1\nkind: GameServerSet\nmetadata:\n  name: gameserver\n  namespace: default\nspec:\n  replicas: 2\n  updateStrategy:\n    rollingUpdate:\n      podUpdatePolicy: InPlaceIfPossible\n  gameServerTemplate:\n    spec:\n      hostIPC: true\n      nodeSelector:\n        app: shared-mem\n      containers:\n      - image: registry.cn-hangzhou.aliyuncs.com/skkk/testc:readtest\n        imagePullPolicy: Always\n        name: gs\n        volumeMounts:\n          - name: shm\n            mountPath: /dev/shm\n      volumes:\n        - hostPath:\n            path: /dev/shm\n            type: Directory\n          name: shm\n")),(0,a.kt)("p",null,"\u90e8\u7f72\u6210\u529f\u540e\u5728\u5bb9\u5668\u65e5\u5fd7\u4e2d\u53ef\u4ee5\u770b\u5230\u5df2\u7ecf\u83b7\u53d6\u5230\u5171\u4eab\u5185\u5b58\u4e2d\u7684id\u503c"),(0,a.kt)("img",{src:t(42463).Z,style:{width:"200px"}}))}u.isMDXComponent=!0},21685:function(e,n,t){n.Z=t.p+"assets/images/shm-arch-e27f4ac127953e2b47470b953ef24507.png"},42463:function(e,n,t){n.Z=t.p+"assets/images/shm-gs-log-4e9477a7ebe7cd5308d91bf1e825b1e9.png"},9611:function(e,n,t){n.Z=t.p+"assets/images/shm-host-ipcs-e3f0bec3ab9ef527b21208fdb60a17ec.png"},92137:function(e,n,t){n.Z=t.p+"assets/images/shm-init-log-057cc63b67ac81d5771a718ad616df84.png"}}]);