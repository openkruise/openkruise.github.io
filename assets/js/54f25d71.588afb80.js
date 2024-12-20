"use strict";(self.webpackChunkopenkruise_io=self.webpackChunkopenkruise_io||[]).push([[7822],{54163:function(e){e.exports=JSON.parse('{"pluginId":"kruisegame","version":"current","label":"Next","banner":null,"badge":false,"className":"docs-version-current","isLast":true,"docsSidebars":{"kruisegame":[{"type":"category","label":"Getting Started","collapsed":false,"items":[{"type":"link","label":"Introduction","href":"/kruisegame/introduction","docId":"introduction"},{"type":"link","label":"Installation","href":"/kruisegame/installation","docId":"installation"},{"type":"link","label":"Design Concept","href":"/kruisegame/design-concept","docId":"design-concept"}],"collapsible":true},{"type":"category","label":"User Manuals","collapsed":false,"items":[{"type":"link","label":"Deploy Gameservers","href":"/kruisegame/user-manuals/deploy-gameservers","docId":"user-manuals/deploy-gameservers"},{"type":"link","label":"Hot Update","href":"/kruisegame/user-manuals/hot-update","docId":"user-manuals/hot-update"},{"type":"link","label":"Update Strategy","href":"/kruisegame/user-manuals/update-strategy","docId":"user-manuals/update-strategy"},{"type":"link","label":"Gameservers Scale","href":"/kruisegame/user-manuals/gameservers-scale","docId":"user-manuals/gameservers-scale"},{"type":"link","label":"Startup Sequence Control","href":"/kruisegame/user-manuals/container-startup-sequence-control","docId":"user-manuals/container-startup-sequence-control"},{"type":"link","label":"Service Qualities","href":"/kruisegame/user-manuals/service-qualities","docId":"user-manuals/service-qualities"},{"type":"link","label":"Network","href":"/kruisegame/user-manuals/network","docId":"user-manuals/network"},{"type":"link","label":"Custom Lifecycle Management","href":"/kruisegame/user-manuals/lifecycle","docId":"user-manuals/lifecycle"},{"type":"link","label":"GameServer Monitor","href":"/kruisegame/user-manuals/gameserver-monitor","docId":"user-manuals/gameserver-monitor"},{"type":"link","label":"Game MatchMaking","href":"/kruisegame/user-manuals/game-matchmaking","docId":"user-manuals/game-matchmaking"},{"type":"link","label":"OKG Dashboard","href":"/kruisegame/user-manuals/game-dashboard","docId":"user-manuals/game-dashboard"},{"type":"link","label":"CRD Field Description","href":"/kruisegame/user-manuals/crd-field-description","docId":"user-manuals/crd-field-description"},{"type":"link","label":"FAQ","href":"/kruisegame/user-manuals/faq","docId":"user-manuals/faq"}],"collapsible":true},{"type":"category","label":"Best Practices","collapsed":false,"items":[{"type":"link","label":"Best Practice for Session-Based Games(PvP room)","href":"/kruisegame/best-practices/session-based-game","docId":"best-practices/session-based-game"},{"type":"link","label":"Best Practices for Traditional PvE Games","href":"/kruisegame/best-practices/pve-game","docId":"best-practices/pve-game"},{"type":"link","label":"Best Practice for Shard-Memory of GameServers","href":"/kruisegame/best-practices/shared-mem","docId":"best-practices/shared-mem"},{"type":"link","label":"Best Practices for Agile Delivery and Operations Management of GameServers","href":"/kruisegame/best-practices/gameserver-delivery-management","docId":"best-practices/gameserver-delivery-management"},{"type":"link","label":"Best Practices for Game O&M Workflow","href":"/kruisegame/best-practices/workflow","docId":"best-practices/workflow"}],"collapsible":true},{"type":"category","label":"Developer Manuals","collapsed":false,"items":[{"type":"link","label":"contribution","href":"/kruisegame/developer-manuals/contribution","docId":"developer-manuals/contribution"},{"type":"link","label":"FAQ","href":"/kruisegame/developer-manuals/faq","docId":"developer-manuals/faq"},{"type":"link","label":"Golang Client","href":"/kruisegame/developer-manuals/go-client","docId":"developer-manuals/go-client"}],"collapsible":true},{"type":"category","label":"Blog & Video","collapsed":false,"items":[{"type":"link","label":"ShangYou\'s Cloud-Native Practice of GameServers based on OpenKruiseGame","href":"/kruisegame/blog-video/kubecon-shangyou-20230926","docId":"blog-video/kubecon-shangyou-20230926"},{"type":"link","label":"The Experience of ChillyRoom Developing & Managing Session-Based Game","href":"/kruisegame/blog-video/kubecon-chillyroom-20240823","docId":"blog-video/kubecon-chillyroom-20240823"},{"type":"link","label":"OpenKruiseGame Supports Game Ops & Management to Improve Efficiency","href":"/kruisegame/blog-video/meetup-guangzhou-20231125","docId":"blog-video/meetup-guangzhou-20231125"},{"type":"link","label":"Lilith Games\' Path to Cloud Native","href":"/kruisegame/blog-video/lilith-okg","docId":"blog-video/lilith-okg"},{"type":"link","label":"Upgrading Game Cloud-Native Architecture with OpenKrusieGame","href":"/kruisegame/blog-video/guanying-20231129","docId":"blog-video/guanying-20231129"},{"type":"link","label":"Best Practice for Gaming Gateway of Higress \xd7 OpenKruiseGame","href":"/kruisegame/blog-video/higress","docId":"blog-video/higress"},{"type":"link","label":"Cloud Forward | Cloud Native Game Solution","href":"/kruisegame/blog-video/cloud-forward-okg","docId":"blog-video/cloud-forward-okg"},{"type":"link","label":"Best Practices for Consistent Delivery of Global Game Services in Multiple Regions","href":"/kruisegame/blog-video/ack-one-okg","docId":"blog-video/ack-one-okg"},{"type":"link","label":"911 Technology\'s \\"Detective Conan\\" game cloud native architecture implementation practice","href":"/kruisegame/blog-video/okg-911","docId":"blog-video/okg-911"},{"type":"link","label":"GssHosting game hosting platform realizes efficient management in multiple regions","href":"/kruisegame/blog-video/okg-gsshosting","docId":"blog-video/okg-gsshosting"},{"type":"link","label":"Landing of 360 Game Containerization","href":"/kruisegame/blog-video/okg-360","docId":"blog-video/okg-360"}],"collapsible":true}]},"docs":{"best-practices/gameserver-delivery-management":{"id":"best-practices/gameserver-delivery-management","title":"Best Practices for Agile Delivery and Operations Management of GameServers","description":"In the traditional operation and maintenance model, the deployment of game servers inevitably leads to the close coupling of business and underlying infrastructure. This process-oriented delivery method often leads to inefficient deployment and difficult troubleshooting in case of problems due to the low degree of automation and lack of effective batch management capabilities.","sidebar":"kruisegame"},"best-practices/pve-game":{"id":"best-practices/pve-game","title":"Best Practices for Traditional PvE Games","description":"Challenges of Implementing PvE Games on Kubernetes","sidebar":"kruisegame"},"best-practices/session-based-game":{"id":"best-practices/session-based-game","title":"Best Practice for Session-Based Games(PvP room)","description":"Session-based games refer to a type of game where players are gathered in a specific game scenario within a limited time frame. In general, a session is equivalent to a match, and after the match ends, the game relationship between players also ends, and the session terminates as well. Therefore, in the industry, session-based games are commonly understood as \\"room-based games,\\" where a room hosts the corresponding game session. These types of games often have the following characteristics:","sidebar":"kruisegame"},"best-practices/shared-mem":{"id":"best-practices/shared-mem","title":"Best Practice for Shard-Memory of GameServers","description":"Background","sidebar":"kruisegame"},"best-practices/workflow":{"id":"best-practices/workflow","title":"Best Practices for Game O&M Workflow","description":"Background","sidebar":"kruisegame"},"blog-video/ack-one-okg":{"id":"blog-video/ack-one-okg","title":"Best Practices for Consistent Delivery of Global Game Services in Multiple Regions","description":"Author: ChrisLiu, Jing Cai","sidebar":"kruisegame"},"blog-video/cloud-forward-okg":{"id":"blog-video/cloud-forward-okg","title":"Cloud Forward | Cloud Native Game Solution","description":"Cost Efficiency and DevOps Boost Optimization in the Gaming Industry","sidebar":"kruisegame"},"blog-video/guanying-20231129":{"id":"blog-video/guanying-20231129","title":"Upgrading Game Cloud-Native Architecture with OpenKrusieGame","description":"Summary: The practice of smooth implementation of traditional zone server PvE games on Kubernetes","sidebar":"kruisegame"},"blog-video/higress":{"id":"blog-video/higress","title":"Best Practice for Gaming Gateway of Higress \xd7 OpenKruiseGame","description":"Author: Weiji Zhao/ChrisLiu/Tianyi Zhang","sidebar":"kruisegame"},"blog-video/kubecon-chillyroom-20240823":{"id":"blog-video/kubecon-chillyroom-20240823","title":"The Experience of ChillyRoom Developing & Managing Session-Based Game","description":"KubeCon & CloudNativeCon 2024","sidebar":"kruisegame"},"blog-video/kubecon-shangyou-20230926":{"id":"blog-video/kubecon-shangyou-20230926","title":"ShangYou\'s Cloud-Native Practice of GameServers based on OpenKruiseGame","description":"KubeCon & CloudNativeCon 2023","sidebar":"kruisegame"},"blog-video/lilith-okg":{"id":"blog-video/lilith-okg","title":"Lilith Games\' Path to Cloud Native","description":"Author: ChrisLiu, beastpu","sidebar":"kruisegame"},"blog-video/meetup-guangzhou-20231125":{"id":"blog-video/meetup-guangzhou-20231125","title":"OpenKruiseGame Supports Game Ops & Management to Improve Efficiency","description":"KubeSphere CloudNative Meetup Guangzhou","sidebar":"kruisegame"},"blog-video/okg-360":{"id":"blog-video/okg-360","title":"Landing of 360 Game Containerization","description":"Author: Yuliang Zhang","sidebar":"kruisegame"},"blog-video/okg-911":{"id":"blog-video/okg-911","title":"911 Technology\'s \\"Detective Conan\\" game cloud native architecture implementation practice","description":"Architecture","sidebar":"kruisegame"},"blog-video/okg-gsshosting":{"id":"blog-video/okg-gsshosting","title":"GssHosting game hosting platform realizes efficient management in multiple regions","description":"Architecture","sidebar":"kruisegame"},"design-concept":{"id":"design-concept","title":"Design Concept","description":"Purpose of Open Source OpenKruiseGame","sidebar":"kruisegame"},"developer-manuals/contribution":{"id":"developer-manuals/contribution","title":"contribution","description":"Contribute to OpenKruiseGame","sidebar":"kruisegame"},"developer-manuals/faq":{"id":"developer-manuals/faq","title":"FAQ","description":"How to debug your code","sidebar":"kruisegame"},"developer-manuals/go-client":{"id":"developer-manuals/go-client","title":"Golang Client","description":"If you want to create/get/update/delete those OKG resources in a Golang project or list-watch them using informer,","sidebar":"kruisegame"},"installation":{"id":"installation","title":"Installation","description":"Install OpenKruiseGame\uff08OKG)","sidebar":"kruisegame"},"introduction":{"id":"introduction","title":"Introduction","description":"\u2b50 If you like OpenKruiseGame, give it a star on GitHub!","sidebar":"kruisegame"},"user-manuals/container-startup-sequence-control":{"id":"user-manuals/container-startup-sequence-control","title":"Startup Sequence Control","description":"Feature overview","sidebar":"kruisegame"},"user-manuals/crd-field-description":{"id":"user-manuals/crd-field-description","title":"CRD Field Description","description":"GameServerSet","sidebar":"kruisegame"},"user-manuals/deploy-gameservers":{"id":"user-manuals/deploy-gameservers","title":"Deploy Gameservers","description":"\u201cHello World\u201d of OKG","sidebar":"kruisegame"},"user-manuals/faq":{"id":"user-manuals/faq","title":"FAQ","description":"The State and OpsState of GameServer respectively represent what? What is the difference?","sidebar":"kruisegame"},"user-manuals/game-dashboard":{"id":"user-manuals/game-dashboard","title":"OKG Dashboard","description":"OpenKruiseGame provides a console for game servers based on KubeSphere 4.0 LuBan architecture. This article introduces how to install KubeSphere and OKG Dashboard, as well as the corresponding usage instructions.","sidebar":"kruisegame"},"user-manuals/game-matchmaking":{"id":"user-manuals/game-matchmaking","title":"Game MatchMaking","description":"Session-based games usually require matchmaking service, which allow players to find suitable teammates and opponents to form a match, and allocates suitable game server for the match. After thar, players can enter the game with address of the game server.","sidebar":"kruisegame"},"user-manuals/gameserver-monitor":{"id":"user-manuals/gameserver-monitor","title":"GameServer Monitor","description":"Metrics available","sidebar":"kruisegame"},"user-manuals/gameservers-scale":{"id":"user-manuals/gameservers-scale","title":"Gameservers Scale","description":"The horizontal scaling feature of OpenKruiseGame","sidebar":"kruisegame"},"user-manuals/hot-update":{"id":"user-manuals/hot-update","title":"Hot Update","description":"Game server update is a crucial part of game server application delivery.","sidebar":"kruisegame"},"user-manuals/lifecycle":{"id":"user-manuals/lifecycle","title":"Custom Lifecycle Management","description":"Game servers, due to their strong stateful characteristics, have a high demand for graceful shutdown operations.","sidebar":"kruisegame"},"user-manuals/network":{"id":"user-manuals/network","title":"Network","description":"Feature overview","sidebar":"kruisegame"},"user-manuals/service-qualities":{"id":"user-manuals/service-qualities","title":"Service Qualities","description":"Feature overview","sidebar":"kruisegame"},"user-manuals/update-strategy":{"id":"user-manuals/update-strategy","title":"Update Strategy","description":"Feature overview","sidebar":"kruisegame"}}}')}}]);