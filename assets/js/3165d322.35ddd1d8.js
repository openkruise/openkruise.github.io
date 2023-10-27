"use strict";(self.webpackChunkopenkruise_io=self.webpackChunkopenkruise_io||[]).push([[9022],{3905:function(e,t,a){a.d(t,{Zo:function(){return m},kt:function(){return p}});var n=a(7294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function s(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?s(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):s(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},s=Object.keys(e);for(n=0;n<s.length;n++)a=s[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(n=0;n<s.length;n++)a=s[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var o=n.createContext({}),c=function(e){var t=n.useContext(o),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},m=function(e){var t=c(e.components);return n.createElement(o.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,s=e.originalType,o=e.parentName,m=l(e,["components","mdxType","originalType","parentName"]),d=c(a),p=r,g=d["".concat(o,".").concat(p)]||d[p]||u[p]||s;return a?n.createElement(g,i(i({ref:t},m),{},{components:a})):n.createElement(g,i({ref:t},m))}));function p(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var s=a.length,i=new Array(s);i[0]=d;var l={};for(var o in t)hasOwnProperty.call(t,o)&&(l[o]=t[o]);l.originalType=e,l.mdxType="string"==typeof e?e:r,i[1]=l;for(var c=2;c<s;c++)i[c]=a[c];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}d.displayName="MDXCreateElement"},7711:function(e,t,a){a.r(t),a.d(t,{assets:function(){return m},contentTitle:function(){return o},default:function(){return p},frontMatter:function(){return l},metadata:function(){return c},toc:function(){return u}});var n=a(7462),r=a(3366),s=(a(7294),a(3905)),i=["components"],l={},o="Gameservers Scale",c={unversionedId:"user-manuals/gameservers-scale",id:"user-manuals/gameservers-scale",title:"Gameservers Scale",description:"The horizontal scaling feature of OpenKruiseGame",source:"@site/kruisegame/user-manuals/gameservers-scale.md",sourceDirName:"user-manuals",slug:"/user-manuals/gameservers-scale",permalink:"/kruisegame/user-manuals/gameservers-scale",draft:!1,tags:[],version:"current",lastUpdatedBy:"ChrisLiu",lastUpdatedAt:1698374509,formattedLastUpdatedAt:"10/27/2023",frontMatter:{},sidebar:"kruisegame",previous:{title:"Update Strategy",permalink:"/kruisegame/user-manuals/update-strategy"},next:{title:"Startup Sequence Control",permalink:"/kruisegame/user-manuals/container-startup-sequence-control"}},m={},u=[{value:"The horizontal scaling feature of OpenKruiseGame",id:"the-horizontal-scaling-feature-of-openkruisegame",level:2},{value:"Sequence of scale-down",id:"sequence-of-scale-down",level:3},{value:"Examples",id:"examples",level:4},{value:"GameServer ID Reserve",id:"gameserver-id-reserve",level:3},{value:"Kill GameServer",id:"kill-gameserver",level:3},{value:"Strategy of scale-down",id:"strategy-of-scale-down",level:3},{value:"General",id:"general",level:4},{value:"ReserveIds",id:"reserveids",level:4},{value:"Examples",id:"examples-1",level:4},{value:"Horizontal autoscale of gameserver",id:"horizontal-autoscale-of-gameserver",level:2},{value:"Auto Scaling-down",id:"auto-scaling-down",level:3},{value:"Auto Scaling-up",id:"auto-scaling-up",level:3},{value:"Scaling with resource metrics or custom metrics",id:"scaling-with-resource-metrics-or-custom-metrics",level:4},{value:"Set the minimum number of game servers whose opsState is None",id:"set-the-minimum-number-of-game-servers-whose-opsstate-is-none",level:4},{value:"Other Settings",id:"other-settings",level:3}],d={toc:u};function p(e){var t=e.components,l=(0,r.Z)(e,i);return(0,s.kt)("wrapper",(0,n.Z)({},d,l,{components:t,mdxType:"MDXLayout"}),(0,s.kt)("h1",{id:"gameservers-scale"},"Gameservers Scale"),(0,s.kt)("h2",{id:"the-horizontal-scaling-feature-of-openkruisegame"},"The horizontal scaling feature of OpenKruiseGame"),(0,s.kt)("h3",{id:"sequence-of-scale-down"},"Sequence of scale-down"),(0,s.kt)("p",null,"OpenKruiseGame allows you to set the states of game servers. You can manually set the value of opsState or DeletionPriority for a game server. You can also use the service quality feature to automatically set the value of opsState or DeletionPriority for a game server. During scale-in, a proper GameServerSet workload is selected for scale-down based on the states of game servers. The scale-down rules are as follows:"),(0,s.kt)("ol",null,(0,s.kt)("li",{parentName:"ol"},(0,s.kt)("p",{parentName:"li"},"Scale in game servers based on the opsState values. Scale in the game servers for which the opsState values are ",(0,s.kt)("inlineCode",{parentName:"p"},"WaitToBeDeleted"),", ",(0,s.kt)("inlineCode",{parentName:"p"},"None"),", ",(0,s.kt)("inlineCode",{parentName:"p"},"Allocated"),", and ",(0,s.kt)("inlineCode",{parentName:"p"},"Maintaining")," in sequence.")),(0,s.kt)("li",{parentName:"ol"},(0,s.kt)("p",{parentName:"li"},"If two or more game servers have the same opsState value, game servers are scaled-down based on the values of DeletionPriority. The game server with the largest DeletionPriority value is deleted first.")),(0,s.kt)("li",{parentName:"ol"},(0,s.kt)("p",{parentName:"li"},"If two or multiple game servers have the same opsState value and DeletionPriority value, the game server whose name contains the largest sequence number in the end is deleted first."))),(0,s.kt)("h4",{id:"examples"},"Examples"),(0,s.kt)("p",null,"Deploy a game server with five replicas:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-bash"},"cat <<EOF | kubectl apply -f -\napiVersion: game.kruise.io/v1alpha1\nkind: GameServerSet\nmetadata:\n  name: minecraft\n  namespace: default\nspec:\n  replicas: 5\n  updateStrategy:\n    rollingUpdate:\n      podUpdatePolicy: InPlaceIfPossible\n  gameServerTemplate:\n    spec:\n      containers:\n        - image: registry.cn-hangzhou.aliyuncs.com/acs/minecraft-demo:1.12.2\n          name: minecraft\nEOF\n")),(0,s.kt)("p",null,"Five game servers are generated:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-bash"},"kubectl get gs\nNAME          STATE   OPSSTATE   DP    UP\nminecraft-0   Ready   None       0     0\nminecraft-1   Ready   None       0     0\nminecraft-2   Ready   None       0     0\nminecraft-3   Ready   None       0     0\nminecraft-4   Ready   None       0     0\n")),(0,s.kt)("p",null,"Set DeletionPriority to 10 for minecraft-2:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-bash"},"kubectl edit gs minecraft-2\n\n...\nspec:\n  DeletionPriority: 10 # Change the value of DeletionPriority from the initial value 0 to 10.\n  opsState: None\n  updatePriority: 0\n...\n")),(0,s.kt)("p",null,"Manually perform scale-down to reduce the number of the game servers to 4:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-bash"},"kubectl scale gss minecraft --replicas=4\ngameserverset.game.kruise.io/minecraft scale\n")),(0,s.kt)("p",null,"The number of the game servers is changed to 4. The following example shows that minecraft-2 is deleted because it has the largest DeletionPriority value."),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-bash"},"kubectl get gs\nNAME          STATE      OPSSTATE   DP    UP\nminecraft-0   Ready      None       0     0\nminecraft-1   Ready      None       0     0\nminecraft-2   Deleting   None       10    0\nminecraft-3   Ready      None       0     0\nminecraft-4   Ready      None       0     0\n\n# After a while\n...\n\nkubectl get gs\nNAME          STATE   OPSSTATE   DP    UP\nminecraft-0   Ready   None       0     0\nminecraft-1   Ready   None       0     0\nminecraft-3   Ready   None       0     0\nminecraft-4   Ready   None       0     0\n")),(0,s.kt)("p",null,"Set opsState to WaitToBeDeleted for minecraft-3:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-bash"},"kubectl edit gs minecraft-3\n\n...\nspec:\n  deletionPriority: 0\n  opsState: WaitToBeDeleted # Change the value of opsState from the initial value None to WaitToBeDeleted.\n  updatePriority: 0\n...\n")),(0,s.kt)("p",null,"Manually perform scale-down to reduce the number of the game servers to 3:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-bash"},"kubectl scale gss minecraft --replicas=3\ngameserverset.game.kruise.io/minecraft scaled\n")),(0,s.kt)("p",null,"The number of replicas for the game server is changed to 3. You can see that minecraft-3 is deleted because its opsState value is WaitToBeDeleted."),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-bash"},"kubectl get gs\nNAME          STATE      OPSSTATE          DP    UP\nminecraft-0   Ready      None              0     0\nminecraft-1   Ready      None              0     0\nminecraft-3   Deleting   WaitToBeDeleted   0     0\nminecraft-4   Ready      None              0     0\n\n# After a while\n...\n\nkubectl get gs\nNAME          STATE   OPSSTATE   DP    UP\nminecraft-0   Ready   None       0     0\nminecraft-1   Ready   None       0     0\nminecraft-4   Ready   None       0     0\n")),(0,s.kt)("p",null,"Manually perform scale-up and change the number of replicas for the game server back to 5:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-bash"},"kubectl scale gss minecraft --replicas=5\ngameserverset.game.kruise.io/minecraft scaled\n")),(0,s.kt)("p",null,"The number of replicas for the game server is changed back to 5. You can see that minecraft-2 and minecraft-3 are added for the game server."),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-bash"},"kubectl get gs\nNAME          STATE   OPSSTATE   DP    UP\nminecraft-0   Ready   None       0     0\nminecraft-1   Ready   None       0     0\nminecraft-2   Ready   None       0     0\nminecraft-3   Ready   None       0     0\nminecraft-4   Ready   None       0     0\n")),(0,s.kt)("h3",{id:"gameserver-id-reserve"},"GameServer ID Reserve"),(0,s.kt)("p",null,"GameServerSet provides the ",(0,s.kt)("inlineCode",{parentName:"p"},"Spec.ReserveGameServerIds")," field. Through this field, the user specifies the ID to delete the corresponding game service; or to avoid the generation of the game service corresponding to this serial number when creating a new game service."),(0,s.kt)("p",null,"For example, there exist 5 game suits under gss with IDs 0, 1, 2, 3 and 4. At this time, set ",(0,s.kt)("inlineCode",{parentName:"p"},"ReserveGameServerIds")," and fill in 3 and 4, without changing the number of copies, gss will delete 3 and 4 and generate game suits of 5 and 6 at the same time, as follows:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-bash"},"kubectl edit gss minecraft\n...\nspec:\n  reserveGameServerIds:\n  - 3\n  - 4\n...\n\n# After a while\nkubectl get gs\nNAME          STATE      OPSSTATE   DP    UP    AGE\nminecraft-0   Ready      None       0     0     79s\nminecraft-1   Ready      None       0     0     79s\nminecraft-2   Ready      None       0     0     79s\nminecraft-3   Deleting   None       0     0     78s\nminecraft-4   Deleting   None       0     0     78s\nminecraft-5   Ready      None       0     0     23s\nminecraft-6   Ready      None       0     0     23s\n")),(0,s.kt)("p",null,"If you fill in the ",(0,s.kt)("inlineCode",{parentName:"p"},"ReserveGameServerIds")," field by adding 5 and 6 while decreasing the number of copies to 3, gss will delete the game service for 5 and 6, as follows:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-bash"},"kubectl edit gss minecraft\n...\nspec:\n  replicas: 3\n  reserveGameServerIds:\n  - 3\n  - 4\n  - 5\n  - 6\n...\n\n# After a while\nkubectl get gs\nNAME          STATE      OPSSTATE   DP    UP    AGE\nminecraft-0   Ready      None       0     0     10m\nminecraft-1   Ready      None       0     0     10m\nminecraft-2   Ready      None       0     0     10m\nminecraft-5   Deleting   None       0     0     9m55s\nminecraft-6   Deleting   None       0     0     9m55s\n")),(0,s.kt)("p",null,(0,s.kt)("strong",{parentName:"p"},"When downsizing, OKG will give priority to the game suits that are Reserved, and then follow the downsizing order mentioned above")),(0,s.kt)("h3",{id:"kill-gameserver"},"Kill GameServer"),(0,s.kt)("p",null,'OKG provides Kill mode to delete specified game server. Users only need to mark the OpsState of the game server they want to delete as "Kill".\nDifferent from ',(0,s.kt)("inlineCode",{parentName:"p"},"Game Server ID Reserved"),", in this mode, users do not need to manually adjust the replicas, OKG will automatically reduce replicas according to the number of GameServers whose OpsState is Kill; in addition, the deleted game server ID will not appear in the ",(0,s.kt)("inlineCode",{parentName:"p"},"ReserveGameServerIds")," field(With General scaleDownStrategyType), which means that the game server with the corresponding serial number may be regenerated during scaling-up."),(0,s.kt)("p",null,"For example:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-bash"},'# There are 3 GameServers\nkubectl get gs\nNAME          STATE      OPSSTATE   DP    UP    AGE\nminecraft-0   Ready      None       0     0     70s\nminecraft-1   Ready      None       0     0     70s\nminecraft-2   Ready      None       0     0     70s\n\n# If you want to delete game server 1, just mark its OpsState as "Kill"\nkubectl edit gs minecraft-1\n...\nspec:\n  opsState: Kill\n...\n\n# minecraft-1 will be deleted, and the replicas of gss becomes 2\nkubectl get gs\nNAME          STATE      OPSSTATE   DP    UP    AGE\nminecraft-0   Ready      None       0     0     78s\nminecraft-1   Deleting   Kill       0     0     78s\nminecraft-2   Ready      None       0     0     78s\n\nkubectl get gs\nNAME          STATE      OPSSTATE   DP    UP    AGE\nminecraft-0   Ready      None       0     0     82s\nminecraft-2   Ready      None       0     0     82s\n')),(0,s.kt)("h3",{id:"strategy-of-scale-down"},"Strategy of scale-down"),(0,s.kt)("p",null,"OKG provides two kinds of scale-down strategies: 1) General; 2) ReserveIds. You can set the corresponding strategy in ",(0,s.kt)("inlineCode",{parentName:"p"},"GameServerSet.Spec.ScaleStrategy"),"."),(0,s.kt)("h4",{id:"general"},"General"),(0,s.kt)("p",null,"When the user does not configure the ScaleDownStrategyType field, General is the default configuration. The scale-down behavior is as described above."),(0,s.kt)("h4",{id:"reserveids"},"ReserveIds"),(0,s.kt)("p",null,"The user sets the ScaleDownStrategyType to ",(0,s.kt)("inlineCode",{parentName:"p"},"ReserveIds"),", when the game service is scale-down, the deleted game service tail serial numbers will be recorded in reserveGameServerIds, and these tail serial numbers will not be used again when scale-up; if you want to use these tail serial numbers again, you only need to take them out from reserveGameServerIds and adjust the number of copies at the same time."),(0,s.kt)("h4",{id:"examples-1"},"Examples"),(0,s.kt)("p",null,"For example, there are 5 game services under gss, with IDs 0, 1, 2, 3, 4. Set ",(0,s.kt)("inlineCode",{parentName:"p"},"GameServerSet.Spec.ScaleStrategy.ScaleDownStrategyType")," to ",(0,s.kt)("inlineCode",{parentName:"p"},"ReserveIds")," and reduce the number of copies to 3."),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-bash"},"kubectl edit gss minecraft\n...\nspec:\n  replicas: 3\n  scaleStrategy:\n    scaleDownStrategyType: ReserveIds\n...\n\n# After a while\nkubectl get gs\nNAME          STATE      OPSSTATE   DP    UP    AGE\nminecraft-0   Ready      None       0     0     10m\nminecraft-1   Ready      None       0     0     10m\nminecraft-2   Ready      None       0     0     10m\nminecraft-3   Deleting   None       0     0     9m55s\nminecraft-4   Deleting   None       0     0     9m55s\n...\n\nkubectl get gss minecraft -o yaml\nspec:\n  replicas: 3\n  reserveGameServerIds:\n  - 3\n  - 4\n  scaleStrategy:\n  scaleDownStrategyType: ReserveIds\n")),(0,s.kt)("p",null,"As you can see, the game services with serial numbers 3 and 4 are backfilled into the ",(0,s.kt)("inlineCode",{parentName:"p"},"reserveGameServerIds")," field. At this point, if you wish to specify the expansion of game service number 4, remove 4 from the reserveGameServerIds and increase the number of copies to 4:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-bash"},"kubectl edit gss minecraft\n...\nspec:\n  replicas: 4\n  reserveGameServerIds:\n  - 3\n  scaleStrategy:\n    scaleDownStrategyType: ReserveIds\n...\n\n# After a while\n\nkubectl get gs\nNAME          STATE   OPSSTATE   DP    UP    AGE\nminecraft-0   Ready   None       0     0     17m\nminecraft-1   Ready   None       0     0     17m\nminecraft-2   Ready   None       0     0     17m\nminecraft-4   Ready   None       0     0     6s\n")),(0,s.kt)("p",null,"This function can scale up the game service with the specified serial number."),(0,s.kt)("h2",{id:"horizontal-autoscale-of-gameserver"},"Horizontal autoscale of gameserver"),(0,s.kt)("h3",{id:"auto-scaling-down"},"Auto Scaling-down"),(0,s.kt)("p",null,"Compared to stateless service types, game servers have higher requirements for automatic scaling, especially in terms of scaling down."),(0,s.kt)("p",null,"The differences between game servers become more and more obvious over time, and the precision requirements for scaling down are extremely high. Coarse-grained scaling mechanisms can easily cause negative effects such as player disconnections, resulting in huge losses for the business."),(0,s.kt)("p",null,"The horizontal scaling mechanism in native Kubernetes is shown in the following figure:"),(0,s.kt)("img",{src:a(2818).Z,style:{height:"400px",width:"700px"}}),(0,s.kt)("p",null,"In the game scenario, its main problems are:"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},"At the pod level, it is unable to perceive the game server game status and therefore cannot set deletion priority based on game status."),(0,s.kt)("li",{parentName:"ul"},"At the workload level, it cannot select scale-down objects based on game status."),(0,s.kt)("li",{parentName:"ul"},"At the autoscaler level, it cannot accurately calculate the appropriate number of replicas based on the game server game status.")),(0,s.kt)("p",null,"In this way, the automatic scaling mechanism based on native Kubernetes will cause two major problems in the game scenario:"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},"The number of scale-down is not accurate. It is easy to delete too many or too few game servers."),(0,s.kt)("li",{parentName:"ul"},"The scale-down object is not accurate. It is easy to delete game servers with high game load levels.")),(0,s.kt)("p",null,"The automatic scaling mechanism of OKG is shown in the following figure:"),(0,s.kt)("img",{src:a(7333).Z,style:{height:"400px",width:"700px"}}),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},"At the game server level, each game server can report its own status and expose whether it is in the WaitToBeDeleted state through custom service quality or external components."),(0,s.kt)("li",{parentName:"ul"},"At the workload level, the GameServerSet can determine the scale-down object based on the business status reported by the game server. As described in ",(0,s.kt)("a",{parentName:"li",href:"/kruisegame/user-manuals/gameservers-scale"},"Game Server Horizontal Scaling"),", the game server in the WaitToBeDeleted state is the highest priority game server to be deleted during scale-down."),(0,s.kt)("li",{parentName:"ul"},"At the autoscaler level, accurately calculate the number of game servers in the WaitToBeDeleted state, and use it as the scale-down quantity to avoid accidental deletion.")),(0,s.kt)("p",null,"In this way, OKG's automatic scaler will only delete game servers in the WaitToBeDeleted state during the scale-down window, achieving targeted and precise scale-down."),(0,s.kt)("p",null,(0,s.kt)("strong",{parentName:"p"},"Usage Example")),(0,s.kt)("p",null,(0,s.kt)("em",{parentName:"p"},(0,s.kt)("strong",{parentName:"em"},"Prerequisites: Install ",(0,s.kt)("a",{parentName:"strong",href:"https://keda.sh/docs/2.10/deploy/"},"KEDA")," in the cluster."))),(0,s.kt)("p",null,"Deploy the ScaledObject object to set the automatic scaling strategy. Refer to the ",(0,s.kt)("a",{parentName:"p",href:"https://github.com/kedacore/keda/blob/main/apis/keda/v1alpha1/scaledobject_types.go"},"ScaledObject API")," for the specific field meanings."),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-yaml"},"apiVersion: keda.sh/v1alpha1\nkind: ScaledObject\nmetadata:\n  name: minecraft # Fill in the name of the corresponding GameServerSet\nspec:\n  scaleTargetRef:\n    name: minecraft # Fill in the name of the corresponding GameServerSet\n    apiVersion: game.kruise.io/v1alpha1 \n    kind: GameServerSet\n  pollingInterval: 30\n  minReplicaCount: 0\n  advanced:\n    horizontalPodAutoscalerConfig: \n      behavior: # Inherit from HPA behavior, refer to https://kubernetes.io/zh-cn/docs/tasks/run-application/horizontal-pod-autoscale/#configurable-scaling-behavior\n        scaleDown:\n          stabilizationWindowSeconds: 45 # Set the scaling-down stabilization window time to 45 seconds\n          policies:\n            - type: Percent\n              value: 100\n              periodSeconds: 15\n  triggers:\n    - type: external\n      metricType: AverageValue\n      metadata:\n        scalerAddress: kruise-game-external-scaler.kruise-game-system:6000\n\n")),(0,s.kt)("p",null,"After deployment, change the opsState of the gs minecraft-0 to WaitToBeDeleted (see ",(0,s.kt)("a",{parentName:"p",href:"/kruisegame/user-manuals/service-qualities"},"Custom Service Quality")," for automated setting of game server status)."),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-bash"},"kubectl edit gs minecraft-0\n\n...\nspec:\n  deletionPriority: 0 \n  opsState: WaitToBeDeleted # Set to None initially, and change it to WaitToBeDeleted\n  updatePriority: 0\n...\n\n")),(0,s.kt)("p",null,"After the scale-down window period, the game server minecraft-0 is automatically deleted."),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-bash"},"kubectl get gs\nNAME          STATE      OPSSTATE          DP    UP\nminecraft-0   Deleting   WaitToBeDeleted   0     0\nminecraft-1   Ready      None              0     0\nminecraft-2   Ready      None              0     0\n\n# After a while\n\n\nkubectl get gs\nNAME          STATE   OPSSTATE   DP    UP\nminecraft-1   Ready   None       0     0\nminecraft-2   Ready   None       0     0\n")),(0,s.kt)("h3",{id:"auto-scaling-up"},"Auto Scaling-up"),(0,s.kt)("p",null,"In addition to setting the automatic scaling policy, you can also set the automatic scaling policy."),(0,s.kt)("h4",{id:"scaling-with-resource-metrics-or-custom-metrics"},"Scaling with resource metrics or custom metrics"),(0,s.kt)("p",null,"Native Kubernetes supports auto scaling-up using CPU utilization, and its complete yaml is as follows:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-yaml"},"apiVersion: keda.sh/v1alpha1\nkind: ScaledObject\nmetadata:\n  name: minecraft # Fill in the name of the corresponding GameServerSet\nspec:\n  scaleTargetRef:\n    name: minecraft # Fill in the name of the corresponding GameServerSet\n    apiVersion: game.kruise.io/v1alpha1\n    kind: GameServerSet\n  pollingInterval: 30\n  minReplicaCount: 0\n  advanced:\n    horizontalPodAutoscalerConfig:\n      behavior: # Inherit from HPA behavior, refer to https://kubernetes.io/zh-cn/docs/tasks/run-application/horizontal-pod-autoscale/#configurable-scaling-behavior\n        scaleDown:\n          stabilizationWindowSeconds: 45 # Set the scaling-down stabilization window time to 45 seconds\n          policies:\n            - type: Percent\n              value: 100\n              periodSeconds: 15\n  triggers:\n    - type: external\n      metricType: AverageValue\n      metadata:\n        scalerAddress: kruise-game-external-scaler.kruise-game-system:6000\n    - type: cpu\n      metricType: Utilization    # Allowed types are 'Utilization' or 'AverageValue'\n      metadata:\n        value: \"50\"\n")),(0,s.kt)("p",null,"Pressure testing of the gameserver, you can see that the gameserver began to scale-up"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-bash"},"kubectl get gss\nNAME        DESIRED   CURRENT   UPDATED   READY   MAINTAINING   WAITTOBEDELETED   AGE\nminecraft   5         5         5         0       0             0                 7s\n\n# After a while\n\nkubectl get gss\nNAME        DESIRED   CURRENT   UPDATED   READY   MAINTAINING   WAITTOBEDELETED   AGE\nminecraft   20        20        20        20      0             0                 137s\n")),(0,s.kt)("h4",{id:"set-the-minimum-number-of-game-servers-whose-opsstate-is-none"},"Set the minimum number of game servers whose opsState is None"),(0,s.kt)("p",null,"OKG supports setting the minimum number of game servers. When the current number of game servers whose opsState is None is less than the set value, OKG will automatically expand new game servers so that the number of game servers whose opsState is None meets the set minimum number."),(0,s.kt)("p",null,"The configuration method is as follows. In this example, the minimum number of game servers with opsState set to None is 3:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-yaml"},'apiVersion: keda.sh/v1alpha1\nkind: ScaledObject\nmetadata:\n  name: minecraft # Fill in the name of the corresponding GameServerSet\nspec:\n  scaleTargetRef:\n    name: minecraft # Fill in the name of the corresponding GameServerSet\n    apiVersion: game.kruise.io/v1alpha1\n    kind: GameServerSet\n  pollingInterval: 30\n  minReplicaCount: 0\n  advanced:\n    horizontalPodAutoscalerConfig:\n      behavior: # Inherit from HPA behavior, refer to https://kubernetes.io/zh-cn/docs/tasks/run-application/horizontal-pod-autoscale/#configurable-scaling-behavior\n        scaleDown:\n          stabilizationWindowSeconds: 45 # Set the scaling-down stabilization window time to 45 seconds\n          policies:\n            - type: Percent\n              value: 100\n              periodSeconds: 15\n  triggers:\n    - type: external\n      metricType: AverageValue\n      metadata:\n        minAvailable: "3" # \u8bbe\u7f6eopsState\u4e3aNone\u7684\u6e38\u620f\u670d\u7684\u6700\u5c0f\u4e2a\u6570\n        scalerAddress: kruise-game-external-scaler.kruise-game-system:6000\n')),(0,s.kt)("p",null,"First apply a GameServerSet with 1 replicas, after the KEDA detection cycle, immediately scale up two new game servers. At this time, the number of game servers whose opsState is None is not less than the minAvailable value, and scale-up process is completed."),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-bash"},"kubectl get gs\nNAME          STATE   OPSSTATE   DP    UP   AGE\nminecraft-0   Ready   None       0     0    7s\n\n# After a while\n\nkubectl get gs\nNAME          STATE   OPSSTATE   DP    UP   AGE\nminecraft-0   Ready   None       0     0    20s\nminecraft-1   Ready   None       0     0    5s\nminecraft-2   Ready   None       0     0    5s\n")),(0,s.kt)("h3",{id:"other-settings"},"Other Settings"),(0,s.kt)("p",null,"Kubernetes has a certain tolerance for automatic scaling behavior, which is determined by the kube-controller-manager parameter --horizontal-pod-autoscaler-tolerance, and the default is 0.1, which means that the difference between the desired replicas and the current replicas is 10% No expansion or contraction will be triggered when the value is within.\nIf more accurate auto-scaling is achieved, this parameter can be lowered. For example, when it is set to 0.0, OKG will scale down all GameServers with WaitToBeDeleted opsState."))}p.isMDXComponent=!0},2818:function(e,t,a){t.Z=a.p+"assets/images/autoscaling-k8s-en-4d7f2d592f92c8846f1d3f6440d72ac5.png"},7333:function(e,t,a){t.Z=a.p+"assets/images/autoscaling-okg-en-c3cb7a80d8eab95350d5cab61c39cc9f.png"}}]);