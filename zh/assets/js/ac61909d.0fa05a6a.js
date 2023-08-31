"use strict";(self.webpackChunkharvester_docs=self.webpackChunkharvester_docs||[]).push([[7774],{3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>u});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),p=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},d=function(e){var t=p(e.components);return r.createElement(s.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,s=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),m=p(n),u=a,k=m["".concat(s,".").concat(u)]||m[u]||c[u]||i;return n?r.createElement(k,o(o({ref:t},d),{},{components:n})):r.createElement(k,o({ref:t},d))}));function u(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=m;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:a,o[1]=l;for(var p=2;p<i;p++)o[p]=n[p];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},79889:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>c,frontMatter:()=>i,metadata:()=>l,toc:()=>p});var r=n(87462),a=(n(67294),n(3905));const i={sidebar_position:1,sidebar_label:"\u4e3b\u673a\u7ba1\u7406",title:"\u4e3b\u673a\u7ba1\u7406"},o=void 0,l={unversionedId:"host/host",id:"version-v1.0/host/host",title:"\u4e3b\u673a\u7ba1\u7406",description:"\u7528\u6237\u53ef\u4ee5\u4ece\u4e3b\u673a\u9875\u9762\u67e5\u770b\u548c\u7ba1\u7406 Harvester \u8282\u70b9\u3002\u7b2c\u4e00\u4e2a\u8282\u70b9\u9ed8\u8ba4\u4e3a\u96c6\u7fa4\u7684\u7ba1\u7406\u8282\u70b9\u3002\u5f53\u8282\u70b9\u6570\u91cf\u5927\u4e8e\u7b49\u4e8e\u4e09\u4e2a\u65f6\uff0c\u5148\u52a0\u5165\u7684\u53e6\u5916\u4e24\u4e2a\u8282\u70b9\u4f1a\u81ea\u52a8\u5347\u7ea7\u4e3a\u7ba1\u7406\u8282\u70b9\uff0c\u4ece\u800c\u5f62\u6210\u4e00\u4e2a\u9ad8\u53ef\u7528 (HA) \u96c6\u7fa4\u3002",source:"@site/i18n/zh/docusaurus-plugin-content-docs/version-v1.0/host/host.md",sourceDirName:"host",slug:"/host/",permalink:"/zh/v1.0/host/",draft:!1,editUrl:"https://github.com/harvester/docs/edit/main/versioned_docs/version-v1.0/host/host.md",tags:[],version:"v1.0",sidebarPosition:1,frontMatter:{sidebar_position:1,sidebar_label:"\u4e3b\u673a\u7ba1\u7406",title:"\u4e3b\u673a\u7ba1\u7406"},sidebar:"tutorialSidebar",previous:{title:"\u4e0a\u4f20\u955c\u50cf",permalink:"/zh/v1.0/upload-image"},next:{title:"\u521b\u5efa\u865a\u62df\u673a",permalink:"/zh/v1.0/vm/create-vm"}},s={},p=[{value:"\u8282\u70b9\u7ef4\u62a4",id:"\u8282\u70b9\u7ef4\u62a4",level:2},{value:"\u5c01\u9501\u8282\u70b9 (Cordon)",id:"\u5c01\u9501\u8282\u70b9-cordon",level:2},{value:"\u5220\u9664\u8282\u70b9",id:"\u5220\u9664\u8282\u70b9",level:2},{value:"\u591a\u78c1\u76d8\u7ba1\u7406 - <code>\u9884\u89c8\u7248\u672c</code>",id:"\u591a\u78c1\u76d8\u7ba1\u7406---\u9884\u89c8\u7248\u672c",level:2}],d={toc:p};function c(e){let{components:t,...i}=e;return(0,a.kt)("wrapper",(0,r.Z)({},d,i,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"\u7528\u6237\u53ef\u4ee5\u4ece\u4e3b\u673a\u9875\u9762\u67e5\u770b\u548c\u7ba1\u7406 Harvester \u8282\u70b9\u3002\u7b2c\u4e00\u4e2a\u8282\u70b9\u9ed8\u8ba4\u4e3a\u96c6\u7fa4\u7684\u7ba1\u7406\u8282\u70b9\u3002\u5f53\u8282\u70b9\u6570\u91cf\u5927\u4e8e\u7b49\u4e8e\u4e09\u4e2a\u65f6\uff0c\u5148\u52a0\u5165\u7684\u53e6\u5916\u4e24\u4e2a\u8282\u70b9\u4f1a\u81ea\u52a8\u5347\u7ea7\u4e3a\u7ba1\u7406\u8282\u70b9\uff0c\u4ece\u800c\u5f62\u6210\u4e00\u4e2a\u9ad8\u53ef\u7528 (HA) \u96c6\u7fa4\u3002"),(0,a.kt)("admonition",{type:"note"},(0,a.kt)("p",{parentName:"admonition"},"\u7531\u4e8e Harvester \u5efa\u7acb\u5728 Kubernetes \u4e4b\u4e0a\u5e76\u4f7f\u7528 etcd \u4f5c\u4e3a\u6570\u636e\u5e93\uff0c\u56e0\u6b64\u5f53\u7ba1\u7406\u8282\u70b9\u7684\u6570\u91cf\u662f 3 \u65f6\uff0c\u6700\u5927\u8282\u70b9\u5bb9\u9519\u4e3a 1\u3002")),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"host.png",src:n(78588).Z,width:"3578",height:"1254"})),(0,a.kt)("h2",{id:"\u8282\u70b9\u7ef4\u62a4"},"\u8282\u70b9\u7ef4\u62a4"),(0,a.kt)("p",null,"Admin \u7528\u6237\u53ef\u4ee5\u70b9\u51fb ",(0,a.kt)("strong",{parentName:"p"},"Enable Maintenance Mode")," \u6765\u81ea\u52a8\u9a71\u9010\u8282\u70b9\u4e2d\u6240\u6709\u7684\u865a\u62df\u673a\u3002\u8fd9\u5c06\u4f7f\u7528",(0,a.kt)("inlineCode",{parentName:"p"},"\u865a\u62df\u673a\u70ed\u8fc1\u79fb"),"\u529f\u80fd\uff0c\u6765\u5c06\u6240\u6709\u865a\u62df\u673a\u81ea\u52a8\u8fc1\u79fb\u5230\u5176\u4ed6\u8282\u70b9\u3002\u8981\u4f7f\u7528\u8fd9\u4e2a\u529f\u80fd\uff0c\u81f3\u5c11\u9700\u8981\u6709\u4e24\u4e2a ",(0,a.kt)("inlineCode",{parentName:"p"},"active")," \u7684\u8282\u70b9\u3002"),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"node-maintenance.png",src:n(49726).Z,width:"3042",height:"1058"})),(0,a.kt)("h2",{id:"\u5c01\u9501\u8282\u70b9-cordon"},"\u5c01\u9501\u8282\u70b9 (Cordon)"),(0,a.kt)("p",null,"\u5c01\u9501\u8282\u70b9\u4f1a\u5c06\u8282\u70b9\u6807\u8bb0\u4e3a\u4e0d\u53ef\u8c03\u5ea6\u3002\u6b64\u529f\u80fd\u9002\u7528\u4e8e\u5728\u77ed\u671f\u7ef4\u62a4\uff08\u5982\u91cd\u542f\uff0c\u5347\u7ea7\u6216\u505c\u7528\uff09\u65f6\u5728\u8282\u70b9\u4e0a\u6267\u884c\u77ed\u671f\u4efb\u52a1\u3002\u5b8c\u6210\u540e\uff0c\u91cd\u65b0\u6253\u5f00\u7535\u6e90\u5e76\u901a\u8fc7\u53d6\u6d88\u5c01\u9501\u4f7f\u8282\u70b9\u518d\u6b21\u53ef\u8c03\u5ea6\u3002"),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"cordon-node.png",src:n(14477).Z,width:"3062",height:"1554"})),(0,a.kt)("h2",{id:"\u5220\u9664\u8282\u70b9"},"\u5220\u9664\u8282\u70b9"),(0,a.kt)("p",null,"\u5220\u9664\u8282\u70b9\u6709\u4e24\u4e2a\u6b65\u9aa4\uff1a"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"\u4ece Harvester \u5220\u9664\u8282\u70b9"),(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"\u524d\u5f80 ",(0,a.kt)("strong",{parentName:"li"},"Hosts")," \u9875\u9762"),(0,a.kt)("li",{parentName:"ul"},"\u627e\u5230\u9700\u8981\u4fee\u6539\u7684\u8282\u70b9\uff0c\u70b9\u51fb ",(0,a.kt)("strong",{parentName:"li"},"\u22ee > Delete"),"\u3002"))),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"\u5728\u8282\u70b9\u4e2d\u5378\u8f7d RKE2"),(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"\u4f5c\u4e3a ",(0,a.kt)("inlineCode",{parentName:"li"},"root")," \u7528\u6237\u767b\u5f55\u5230\u8282\u70b9\u3002"),(0,a.kt)("li",{parentName:"ul"},"\u8fd0\u884c ",(0,a.kt)("inlineCode",{parentName:"li"},"rke2-uninstall.sh")," \u5220\u9664\u6574\u4e2a RKE2 \u670d\u52a1\u3002")))),(0,a.kt)("admonition",{type:"caution"},(0,a.kt)("p",{parentName:"admonition"},"\u5220\u9664 RKE2 \u670d\u52a1\u540e\uff0c\u4f60\u5c06\u4e22\u5931 control plane \u8282\u70b9\u7684\u6240\u6709\u6570\u636e\u3002")),(0,a.kt)("admonition",{type:"note"},(0,a.kt)("p",{parentName:"admonition"},"\u8282\u70b9\u786c\u5220\u9664\u5b58\u5728\u4e00\u4e2a",(0,a.kt)("a",{parentName:"p",href:"https://github.com/harvester/harvester/issues/1497"},"\u5df2\u77e5\u95ee\u9898"),"\u3002\n\u8be5\u95ee\u9898\u89e3\u51b3\u540e\uff0c\u53ef\u4ee5\u8df3\u8fc7 RKE2 \u8282\u70b9\u5378\u8f7d\u7684\u6b65\u9aa4\u3002")),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"delete.png",src:n(85627).Z,width:"1241",height:"482"})),(0,a.kt)("h2",{id:"\u591a\u78c1\u76d8\u7ba1\u7406---\u9884\u89c8\u7248\u672c"},"\u591a\u78c1\u76d8\u7ba1\u7406 - ",(0,a.kt)("inlineCode",{parentName:"h2"},"\u9884\u89c8\u7248\u672c")),(0,a.kt)("p",null,"\u7528\u6237\u53ef\u4ee5\u4ece\u4e3b\u673a\u8be6\u60c5\u9875\u9762\u67e5\u770b\u548c\u6dfb\u52a0\u591a\u4e2a\u78c1\u76d8\u4f5c\u4e3a\u9644\u52a0\u6570\u636e\u5377\u3002"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"\u524d\u5f80 ",(0,a.kt)("strong",{parentName:"li"},"Hosts")," \u9875\u9762\u3002"),(0,a.kt)("li",{parentName:"ol"},"\u627e\u5230\u9700\u8981\u4fee\u6539\u7684\u8282\u70b9\uff0c\u70b9\u51fb ",(0,a.kt)("strong",{parentName:"li"},"\u22ee > Edit Config"),"\u3002"),(0,a.kt)("li",{parentName:"ol"},"\u9009\u62e9 ",(0,a.kt)("strong",{parentName:"li"},"Disks")," \u9009\u9879\u5361\u5e76\u70b9\u51fb ",(0,a.kt)("strong",{parentName:"li"},"Add Disks"),"\u3002"),(0,a.kt)("li",{parentName:"ol"},"\u9009\u62e9\u989d\u5916\u7684\u539f\u59cb\u5757\u8bbe\u5907\uff0c\u5c06\u5176\u6dfb\u52a0\u4e3a\u989d\u5916\u7684\u6570\u636e\u5377\u3002",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"\u5982\u679c\u5757\u8bbe\u5907\u4ece\u672a\u88ab\u5f3a\u5236\u683c\u5f0f\u5316\uff0c\u5219\u9700\u8981 ",(0,a.kt)("inlineCode",{parentName:"li"},"Force Formatted")," \u9009\u9879\u3002")))),(0,a.kt)("admonition",{type:"note"},(0,a.kt)("p",{parentName:"admonition"},"\u8981\u8ba9 Harvester \u8bc6\u522b\u78c1\u76d8\uff0c\u6bcf\u4e2a\u78c1\u76d8\u90fd\u9700\u8981\u6709\u4e00\u4e2a\u552f\u4e00\u7684 ",(0,a.kt)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/World_Wide_Name"},"WWN"),"\u3002\u5426\u5219\uff0cHarvester \u5c06\u62d2\u7edd\u6dfb\u52a0\u78c1\u76d8\u3002\n\u5982\u679c\u4f60\u7684\u78c1\u76d8\u6ca1\u6709 WWN\uff0c\u4f60\u53ef\u4ee5\u4f7f\u7528 ",(0,a.kt)("inlineCode",{parentName:"p"},"EXT4")," \u6587\u4ef6\u7cfb\u7edf\u5bf9\u5176\u8fdb\u884c\u683c\u5f0f\u5316\uff0c\u4ee5\u5e2e\u52a9 Harvester \u8bc6\u522b\u78c1\u76d8\u3002")),(0,a.kt)("admonition",{type:"note"},(0,a.kt)("p",{parentName:"admonition"},"\u5982\u679c\u4f60\u5728 QEMU \u73af\u5883\u4e2d\u6d4b\u8bd5 Harvester\uff0c\u4f60\u9700\u8981\u4f7f\u7528 QEMU v6.0 \u6216\u66f4\u9ad8\u7248\u672c\u3002\u4ee5\u524d\u7248\u672c\u7684 QEMU \u5c06\u59cb\u7ec8\u4e3a NVMe \u78c1\u76d8\u6a21\u62df\u751f\u6210\u76f8\u540c\u7684 WWN\uff0c\u8fd9\u5c06\u5bfc\u81f4 Harvester \u4e0d\u6dfb\u52a0\u5176\u4ed6\u78c1\u76d8\u3002")),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"Edit Config",src:n(37007).Z,width:"1186",height:"460"}),"\n",(0,a.kt)("img",{alt:"Add Disks",src:n(50825).Z,width:"1177",height:"800"})))}c.isMDXComponent=!0},50825:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/add-disks-d7316fc96b86f8d9ac43b333d3fc1a59.png"},14477:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/cordon-nodes-daa88373ce3b754fb6824073f2af4ae3.png"},85627:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/delete-c6b5ae377dce51029b8762fa93d00f8a.png"},37007:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/edit-config-e4c98701a436a19352ff90a42981f193.png"},78588:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/host-c992bf7b8372681205a1d62da54342c1.png"},49726:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/node-maintenance-d0d14c089568bcc6d40d8b5b431dc7c2.png"}}]);