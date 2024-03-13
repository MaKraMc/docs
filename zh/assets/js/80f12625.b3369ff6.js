"use strict";(self.webpackChunkharvester_docs=self.webpackChunkharvester_docs||[]).push([[599],{3905:(e,t,n)=>{n.d(t,{Zo:()=>k,kt:()=>m});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),p=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},k=function(e){var t=p(e.components);return a.createElement(s.Provider,{value:t},e.children)},u="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,s=e.parentName,k=l(e,["components","mdxType","originalType","parentName"]),u=p(n),d=r,m=u["".concat(s,".").concat(d)]||u[d]||c[d]||o;return n?a.createElement(m,i(i({ref:t},k),{},{components:n})):a.createElement(m,i({ref:t},k))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=d;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[u]="string"==typeof e?e:r,i[1]=l;for(var p=2;p<o;p++)i[p]=n[p];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},82317:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>c,frontMatter:()=>o,metadata:()=>l,toc:()=>p});var a=n(87462),r=(n(67294),n(3905));const o={sidebar_position:3,sidebar_label:"\u5b58\u50a8\u7f51\u7edc",title:"\u5b58\u50a8\u7f51\u7edc"},i=void 0,l={unversionedId:"advanced/storagenetwork",id:"version-v1.1/advanced/storagenetwork",title:"\u5b58\u50a8\u7f51\u7edc",description:"Harvester \u5185\u7f6e Longhorn \u4f5c\u4e3a\u5b58\u50a8\u7cfb\u7edf\uff0c\u7528\u4e8e\u4e3a VM \u548c Pod \u63d0\u4f9b\u5757\u8bbe\u5907\u5377\u3002\u5982\u679c\u7528\u6237\u5e0c\u671b\u5c06 Longhorn \u590d\u5236\u6d41\u91cf\u4e0e Kubernetes \u96c6\u7fa4\u7f51\u7edc\uff08\u5373\u7ba1\u7406\u7f51\u7edc\uff09\u6216\u5176\u5b83\u96c6\u7fa4\u5de5\u4f5c\u8d1f\u8f7d\u9694\u79bb\u5f00\u6765\uff0c\u7528\u6237\u53ef\u4ee5\u4e3a Longhorn \u590d\u5236\u6d41\u91cf\u5206\u914d\u4e00\u4e2a\u4e13\u7528\u7684\u5b58\u50a8\u7f51\u7edc\u6765\u63d0\u9ad8\u7f51\u7edc\u5e26\u5bbd\u548c\u6027\u80fd\u3002",source:"@site/i18n/zh/docusaurus-plugin-content-docs/version-v1.1/advanced/storagenetwork.md",sourceDirName:"advanced",slug:"/advanced/storagenetwork",permalink:"/zh/v1.1/advanced/storagenetwork",draft:!1,editUrl:"https://github.com/harvester/docs/edit/main/versioned_docs/version-v1.1/advanced/storagenetwork.md",tags:[],version:"v1.1",sidebarPosition:3,frontMatter:{sidebar_position:3,sidebar_label:"\u5b58\u50a8\u7f51\u7edc",title:"\u5b58\u50a8\u7f51\u7edc"},sidebar:"tutorialSidebar",previous:{title:"StorageClass",permalink:"/zh/v1.1/advanced/storageclass"},next:{title:"\u63d2\u4ef6",permalink:"/zh/v1.1/advanced/addons"}},s={},p=[{value:"\u524d\u63d0",id:"\u524d\u63d0",level:2},{value:"\u914d\u7f6e\u793a\u4f8b",id:"\u914d\u7f6e\u793a\u4f8b",level:2},{value:"\u914d\u7f6e\u8fc7\u7a0b",id:"\u914d\u7f6e\u8fc7\u7a0b",level:2},{value:"\u5e94\u7528 Harvester \u5b58\u50a8\u7f51\u7edc\u8bbe\u7f6e\u4e4b\u524d",id:"\u5e94\u7528-harvester-\u5b58\u50a8\u7f51\u7edc\u8bbe\u7f6e\u4e4b\u524d",level:3},{value:"\u76f8\u540c\u7684\u7269\u7406\u63a5\u53e3",id:"\u76f8\u540c\u7684\u7269\u7406\u63a5\u53e3",level:4},{value:"\u4e0d\u540c\u7684\u7269\u7406\u63a5\u53e3",id:"\u4e0d\u540c\u7684\u7269\u7406\u63a5\u53e3",level:4},{value:"Harvester \u5b58\u50a8\u7f51\u7edc\u8bbe\u7f6e",id:"harvester-\u5b58\u50a8\u7f51\u7edc\u8bbe\u7f6e",level:3},{value:"Web UI",id:"web-ui",level:4},{value:"CLI",id:"cli",level:4},{value:"\u5e94\u7528 Harvester \u5b58\u50a8\u7f51\u7edc\u8bbe\u7f6e\u540e",id:"\u5e94\u7528-harvester-\u5b58\u50a8\u7f51\u7edc\u8bbe\u7f6e\u540e",level:3},{value:"\u9a8c\u8bc1\u914d\u7f6e\u662f\u5426\u5b8c\u6210",id:"\u9a8c\u8bc1\u914d\u7f6e\u662f\u5426\u5b8c\u6210",level:3},{value:"\u6b65\u9aa4 1",id:"\u6b65\u9aa4-1",level:4},{value:"\u6b65\u9aa4 2",id:"\u6b65\u9aa4-2",level:4},{value:"\u624b\u52a8\u542f\u52a8\u865a\u62df\u673a",id:"\u624b\u52a8\u542f\u52a8\u865a\u62df\u673a",level:3}],k={toc:p},u="wrapper";function c(e){let{components:t,...o}=e;return(0,r.kt)(u,(0,a.Z)({},k,o,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"Harvester \u5185\u7f6e Longhorn \u4f5c\u4e3a\u5b58\u50a8\u7cfb\u7edf\uff0c\u7528\u4e8e\u4e3a VM \u548c Pod \u63d0\u4f9b\u5757\u8bbe\u5907\u5377\u3002\u5982\u679c\u7528\u6237\u5e0c\u671b\u5c06 Longhorn \u590d\u5236\u6d41\u91cf\u4e0e Kubernetes \u96c6\u7fa4\u7f51\u7edc\uff08\u5373\u7ba1\u7406\u7f51\u7edc\uff09\u6216\u5176\u5b83\u96c6\u7fa4\u5de5\u4f5c\u8d1f\u8f7d\u9694\u79bb\u5f00\u6765\uff0c\u7528\u6237\u53ef\u4ee5\u4e3a Longhorn \u590d\u5236\u6d41\u91cf\u5206\u914d\u4e00\u4e2a\u4e13\u7528\u7684\u5b58\u50a8\u7f51\u7edc\u6765\u63d0\u9ad8\u7f51\u7edc\u5e26\u5bbd\u548c\u6027\u80fd\u3002"),(0,r.kt)("p",null,"\u6709\u5173\u66f4\u591a\u4fe1\u606f\uff0c\u8bf7\u53c2\u9605 ",(0,r.kt)("a",{parentName:"p",href:"https://longhorn.io/docs/1.3.2/advanced-resources/deploy/storage-network/"},"Longhorn\u5b58\u50a8\u7f51\u7edc"),"\u3002"),(0,r.kt)("admonition",{type:"note"},(0,r.kt)("p",{parentName:"admonition"},"\u4e0d\u5efa\u8bae\u76f4\u63a5\u914d\u7f6e Longhorn \u8bbe\u7f6e\uff0c\u56e0\u4e3a\u8fd9\u53ef\u80fd\u4f1a\u5bfc\u81f4\u51fa\u73b0\u672a\u6d4b\u8bd5\u8fc7\u7684\u60c5\u51b5\u3002")),(0,r.kt)("h2",{id:"\u524d\u63d0"},"\u524d\u63d0"),(0,r.kt)("p",null,"\u5728\u914d\u7f6e Harvester \u5b58\u50a8\u7f51\u7edc\u8bbe\u7f6e\u4e4b\u524d\uff0c\u4f60\u9700\u8981\u5148\u8fdb\u884c\u4e00\u4e9b\u64cd\u4f5c\uff1a"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"\u914d\u7f6e\u597d Cluster Network \u548c VLAN Config\u3002",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"\u7528\u6237\u5fc5\u987b\u786e\u4fdd\u5df2\u914d\u7f6e\u597d Cluster Network\uff0cVLAN Config \u80fd\u591f\u8986\u76d6\u6240\u6709\u8282\u70b9\uff0c\u800c\u4e14\u6240\u6709\u8282\u70b9\u7684\u7f51\u7edc\u94fe\u63a5\u6b63\u5e38\u3002"))),(0,r.kt)("li",{parentName:"ul"},"\u505c\u6b62\u4e86\u6240\u6709 VM\u3002",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"\u6211\u4eec\u5efa\u8bae\u4f7f\u7528\u4ee5\u4e0b\u547d\u4ee4\u68c0\u67e5 VM \u72b6\u6001\uff0c\u7ed3\u679c\u5e94\u8be5\u662f\u7a7a\u7684\u3002"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"kubectl get -A vmi")))),(0,r.kt)("li",{parentName:"ul"},"\u505c\u6b62\u4e86\u8fde\u63a5\u5230 Longhorn \u5377\u7684\u6240\u6709 Pod\u3002",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"\u7528\u6237\u53ef\u4ee5\u4f7f\u7528 Harvester \u5b58\u50a8\u7f51\u7edc\u8bbe\u7f6e\u8df3\u8fc7\u6b64\u6b65\u9aa4\u3002Harvester \u5c06\u81ea\u52a8\u505c\u6b62\u4e0e Longhorn \u76f8\u5173\u7684 Pod\u3002")))),(0,r.kt)("admonition",{type:"caution"},(0,r.kt)("p",{parentName:"admonition"},"\u5982\u679c Harvester \u96c6\u7fa4\u662f\u4ece v1.0.3 \u5347\u7ea7\u6765\u7684\uff0c\u8bf7\u5728\u7ee7\u7eed\u4e0b\u4e00\u6b65\u4e4b\u524d\u68c0\u67e5\u662f\u5426\u5df2\u6b63\u786e\u5b89\u88c5 Whereabouts CNI\u3002\u6211\u4eec\u59cb\u7ec8\u5efa\u8bae\u6309\u7167\u672c\u6307\u5357\u8fdb\u884c\u68c0\u67e5\u3002",(0,r.kt)("a",{parentName:"p",href:"https://github.com/harvester/harvester/issues/3168"},"Issue 3168")," \u63cf\u8ff0\u4e86 Harvester \u96c6\u7fa4\u53ef\u80fd\u65e0\u6cd5\u6b63\u786e\u5b89\u88c5 Whereabouts CNI\u3002"),(0,r.kt)("ul",{parentName:"admonition"},(0,r.kt)("li",{parentName:"ul"},"\u4f7f\u7528\u4ee5\u4e0b\u547d\u4ee4\u9a8c\u8bc1 ",(0,r.kt)("inlineCode",{parentName:"li"},"ippools.whereabouts.cni.cncf.io")," CRD \u662f\u5426\u5b58\u5728\u3002",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"kubectl get crd ippools.whereabouts.cni.cncf.io")))),(0,r.kt)("li",{parentName:"ul"},"\u5982\u679c Harvester \u96c6\u7fa4\u6ca1\u6709 ",(0,r.kt)("inlineCode",{parentName:"li"},"ippools.whereabouts.cni.cncf.io"),"\uff0c\u8bf7\u5728\u914d\u7f6e ",(0,r.kt)("inlineCode",{parentName:"li"},"storage-network")," \u4e4b\u524d\u6dfb\u52a0",(0,r.kt)("a",{parentName:"li",href:"https://github.com/harvester/harvester/tree/v1.1.0/deploy/charts/harvester/dependency_charts/whereabouts/crds"},"\u8fd9\u4e24\u4e2a CRD"),"\u3002")),(0,r.kt)("pre",{parentName:"admonition"},(0,r.kt)("code",{parentName:"pre"},"kubectl apply -f https://raw.githubusercontent.com/harvester/harvester/v1.1.0/deploy/charts/harvester/dependency_charts/whereabouts/crds/whereabouts.cni.cncf.io_ippools.yaml\nkubectl apply -f https://raw.githubusercontent.com/harvester/harvester/v1.1.0/deploy/charts/harvester/dependency_charts/whereabouts/crds/whereabouts.cni.cncf.io_overlappingrangeipreservations.yaml\n"))),(0,r.kt)("h2",{id:"\u914d\u7f6e\u793a\u4f8b"},"\u914d\u7f6e\u793a\u4f8b"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"VLAN ID",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"\u8bf7\u68c0\u67e5\u4f60\u7684\u7f51\u7edc\u4ea4\u6362\u673a\u8bbe\u7f6e\uff0c\u5e76\u4e3a\u5b58\u50a8\u7f51\u7edc\u63d0\u4f9b\u4e13\u7528\u7684 VLAN ID\u3002"))),(0,r.kt)("li",{parentName:"ul"},"\u914d\u7f6e\u597d Cluster Network \u548c VLAN Config\u3002",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"\u5982\u9700\u66f4\u591a\u4fe1\u606f\uff0c\u8bf7\u53c2\u9605\u7f51\u7edc\u9875\u9762\uff0c\u7136\u540e\u914d\u7f6e ",(0,r.kt)("inlineCode",{parentName:"li"},"Cluster Network")," \u548c ",(0,r.kt)("inlineCode",{parentName:"li"},"VLAN Config"),"\uff0c\u4f46\u4e0d\u8981\u914d\u7f6e ",(0,r.kt)("inlineCode",{parentName:"li"},"Network"),"\u3002"))),(0,r.kt)("li",{parentName:"ul"},"\u5b58\u50a8\u7f51\u7edc\u7684 IP \u8303\u56f4",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"IP \u8303\u56f4\u4e0d\u80fd\u4e0e Kubernetes \u96c6\u7fa4\u7f51\u7edc\u51b2\u7a81\u6216\u91cd\u53e0\uff08",(0,r.kt)("inlineCode",{parentName:"li"},"10.42.0.0/16"),"\u3001",(0,r.kt)("inlineCode",{parentName:"li"},"10.43.0.0/16"),"\u3001",(0,r.kt)("inlineCode",{parentName:"li"},"10.52.0.0/16")," \u548c ",(0,r.kt)("inlineCode",{parentName:"li"},"10.53.0.0/16")," \u662f\u4fdd\u7559\u7684\uff09\u3002"),(0,r.kt)("li",{parentName:"ul"},"IP \u8303\u56f4\u683c\u5f0f\u662f IPv4 CIDR\uff0c\u800c\u4e14\u662f\u96c6\u7fa4\u8282\u70b9\u6570\u7684 4 \u500d\u3002Longhorn \u5c06\u4e3a\u6bcf\u4e2a\u8282\u70b9\u4f7f\u7528 2 \u4e2a IP\uff0c\u5347\u7ea7\u8fc7\u7a0b\u4e2d\u4f1a\u540c\u65f6\u8fd0\u884c\u4e24\u4e2a\u7248\u672c\u7684 Longhorn\u3002\u5728\u5347\u7ea7\u8fc7\u7a0b\u4e2d\uff0c\u6bcf\u4e2a\u8282\u70b9\u5c06\u6d88\u8017 4 \u4e2a IP\u3002"),(0,r.kt)("li",{parentName:"ul"},"\u5982\u679c\u4f60\u7684\u96c6\u7fa4\u6709 250 \u4e2a\u8282\u70b9\uff0c\u5219 IP \u8303\u56f4\u5e94\u5927\u4e8e ",(0,r.kt)("inlineCode",{parentName:"li"},"/22"),"\u3002")))),(0,r.kt)("p",null,"\u6211\u4eec\u5c06\u4f7f\u7528\u4e0b\u9762\u7684\u914d\u7f6e\u4e3a\u4f8b\u6765\u8be6\u7ec6\u8bf4\u660e\u5b58\u50a8\u7f51\u7edc\uff1a"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"\u5b58\u50a8\u7f51\u7edc\u7684 VLAN ID\uff1a",(0,r.kt)("inlineCode",{parentName:"li"},"100")),(0,r.kt)("li",{parentName:"ul"},"\u96c6\u7fa4\u7f51\u7edc\uff1a",(0,r.kt)("inlineCode",{parentName:"li"},"storage")),(0,r.kt)("li",{parentName:"ul"},"IP\u8303\u56f4\uff1a",(0,r.kt)("inlineCode",{parentName:"li"},"192.168.0.0/24"))),(0,r.kt)("h2",{id:"\u914d\u7f6e\u8fc7\u7a0b"},"\u914d\u7f6e\u8fc7\u7a0b"),(0,r.kt)("p",null,"Harvester \u5c06\u4f7f\u7528\u914d\u7f6e\u6765\u521b\u5efa Multus NetworkAttachmentDefinition\uff0c\u505c\u6b62\u4e0e Longhorn \u5377\u76f8\u5173\u7684 Pod\uff0c\u66f4\u65b0 Longhorn \u8bbe\u7f6e\uff0c\u5e76\u91cd\u65b0\u542f\u52a8\u4ee5\u524d\u7684 Pod\u3002"),(0,r.kt)("h3",{id:"\u5e94\u7528-harvester-\u5b58\u50a8\u7f51\u7edc\u8bbe\u7f6e\u4e4b\u524d"},"\u5e94\u7528 Harvester \u5b58\u50a8\u7f51\u7edc\u8bbe\u7f6e\u4e4b\u524d"),(0,r.kt)("p",null,"\u8fd9\u91cc\u6709\u4e24\u79cd\u60c5\u51b5\uff1a"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"VM VLAN \u6d41\u91cf\u548c Longhorn \u5b58\u50a8\u7f51\u7edc\u4f7f\u7528\u540c\u4e00\u7ec4\u7269\u7406\u63a5\u53e3\u3002"),(0,r.kt)("li",{parentName:"ul"},"VM VLAN \u6d41\u91cf\u548c Longhorn \u5b58\u50a8\u7f51\u7edc\u4f7f\u7528\u4e0d\u540c\u7684\u7269\u7406\u63a5\u53e3\u3002")),(0,r.kt)("p",null,"Longhorn \u5c06\u901a\u8fc7\u56fe\u4e2d\u7ea2\u7ebf\u6240\u793a\u7684\u63a5\u53e3\u53d1\u9001\u590d\u5236\u6d41\u91cf\u3002"),(0,r.kt)("h4",{id:"\u76f8\u540c\u7684\u7269\u7406\u63a5\u53e3"},"\u76f8\u540c\u7684\u7269\u7406\u63a5\u53e3"),(0,r.kt)("p",null,"\u4ee5\u4e0b\u793a\u4f8b\u5c06 ",(0,r.kt)("inlineCode",{parentName:"p"},"eth2")," \u548c ",(0,r.kt)("inlineCode",{parentName:"p"},"eth3")," \u7528\u4e8e\u865a\u62df\u673a VLAN \u6d41\u91cf\u548c Longhorn \u5b58\u50a8\u7f51\u7edc\u3002"),(0,r.kt)("p",null,"\u8bf7\u53c2\u8003",(0,r.kt)("strong",{parentName:"p"},"\u7f51\u7edc"),"\u9875\u9762\u4f7f\u7528 ",(0,r.kt)("inlineCode",{parentName:"p"},"eth2")," \u548c ",(0,r.kt)("inlineCode",{parentName:"p"},"eth3")," \u6765\u914d\u7f6e ",(0,r.kt)("inlineCode",{parentName:"p"},"ClusterNetwork")," \u548c ",(0,r.kt)("inlineCode",{parentName:"p"},"VLAN Config"),"\uff0c\u5e76\u8bb0\u4f4f\u4e0b\u4e00\u6b65\u9aa4\u9700\u8981\u7528\u7684 ",(0,r.kt)("inlineCode",{parentName:"p"},"ClusterNetwork")," \u540d\u79f0\u3002"),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"storagenetwork-same.png",src:n(23954).Z,width:"1521",height:"661"})),(0,r.kt)("h4",{id:"\u4e0d\u540c\u7684\u7269\u7406\u63a5\u53e3"},"\u4e0d\u540c\u7684\u7269\u7406\u63a5\u53e3"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"eth2")," \u548c ",(0,r.kt)("inlineCode",{parentName:"p"},"eth3")," \u7528\u4e8e VM VLAN \u6d41\u91cf\u3002",(0,r.kt)("inlineCode",{parentName:"p"},"eth4")," \u548c ",(0,r.kt)("inlineCode",{parentName:"p"},"eth5")," \u7528\u4e8e Longhorn \u5b58\u50a8\u7f51\u7edc\u3002"),(0,r.kt)("p",null,"\u8bf7\u53c2\u8003",(0,r.kt)("strong",{parentName:"p"},"\u7f51\u7edc"),"\u9875\u9762\u4f7f\u7528 ",(0,r.kt)("inlineCode",{parentName:"p"},"eth4")," \u548c ",(0,r.kt)("inlineCode",{parentName:"p"},"eth5")," \u6765\u914d\u7f6e ",(0,r.kt)("inlineCode",{parentName:"p"},"ClusterNetwork")," \u548c ",(0,r.kt)("inlineCode",{parentName:"p"},"VLAN Config"),"\uff08\u7528\u4e8e\u5b58\u50a8\u7f51\u7edc\uff09\uff0c\u5e76\u8bb0\u4f4f\u4e0b\u4e00\u6b65\u9aa4\u9700\u8981\u7528\u7684 ",(0,r.kt)("inlineCode",{parentName:"p"},"ClusterNetwork")," \u540d\u79f0\u3002"),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"storagenetwork-diff.png",src:n(79846).Z,width:"1551",height:"741"})),(0,r.kt)("h3",{id:"harvester-\u5b58\u50a8\u7f51\u7edc\u8bbe\u7f6e"},"Harvester \u5b58\u50a8\u7f51\u7edc\u8bbe\u7f6e"),(0,r.kt)("p",null,"Harvester \u5b58\u50a8\u7f51\u7edc\u9700\u8981 ",(0,r.kt)("inlineCode",{parentName:"p"},"range"),"\u3001",(0,r.kt)("inlineCode",{parentName:"p"},"clusterNetwork"),"\u3001",(0,r.kt)("inlineCode",{parentName:"p"},"vlan")," \u5b57\u6bb5\u6765\u6784\u5efa\u7528\u4e8e\u5b58\u50a8\u7f51\u7edc\u7684 Multus NetworkAttachmentDefinition\u3002\u4f60\u53ef\u4ee5\u901a\u8fc7 Web UI \u6216 CLI \u6765\u5e94\u7528\u6b64\u8bbe\u7f6e\u3002"),(0,r.kt)("h4",{id:"web-ui"},"Web UI"),(0,r.kt)("p",null,"\u4f60\u53ef\u4ee5\u5728 ",(0,r.kt)("inlineCode",{parentName:"p"},"Settings > storage-network")," \u9875\u9762\u4e0a\u8f7b\u677e\u4fee\u6539 Harvester \u5b58\u50a8\u7f51\u7edc\u8bbe\u7f6e\u3002"),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"storagenetwork-ui.png",src:n(66623).Z,width:"1715",height:"946"})),(0,r.kt)("h4",{id:"cli"},"CLI"),(0,r.kt)("p",null,"\u4f60\u53ef\u4ee5\u4f7f\u7528\u4ee5\u4e0b\u547d\u4ee4\u6765\u7f16\u8f91 Harvester \u5b58\u50a8\u7f51\u7edc\u8bbe\u7f6e\u3002"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"kubectl edit settings.harvesterhci.io storage-network\n")),(0,r.kt)("p",null,"\u503c\u4e3a JSON \u5b57\u7b26\u4e32\u6216\u7a7a\u5b57\u7b26\u4e32\uff0c\u5982\u4e0b\u6240\u793a\u3002"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "vlan": 100,\n    "clusterNetwork": "storage",\n    "range": "192.168.0.0/24"\n}\n')),(0,r.kt)("p",null,"\u5b8c\u6574\u914d\u7f6e\u4e0e\u4ee5\u4e0b\u793a\u4f8b\u7c7b\u4f3c\u3002"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},'apiVersion: harvesterhci.io/v1beta1\nkind: Setting\nmetadata:\n  name: storage-network\nvalue: \'{"vlan":100,"clusterNetwork":"storage","range":"192.168.0.0/24"}\'\n')),(0,r.kt)("admonition",{type:"caution"},(0,r.kt)("p",{parentName:"admonition"},"\u7531\u4e8e\u8bbe\u8ba1\u539f\u56e0\uff0c\u5982\u679c JSON \u5b57\u7b26\u4e32\u4e2d\u5b58\u5728\u591a\u4f59\u7684\u548c\u65e0\u5173\u7d27\u8981\u7684\u5b57\u7b26\uff0cHarvester \u4f1a\u5c06\u5176\u89c6\u4e3a\u4e0d\u540c\u7684\u914d\u7f6e\u3002")),(0,r.kt)("h3",{id:"\u5e94\u7528-harvester-\u5b58\u50a8\u7f51\u7edc\u8bbe\u7f6e\u540e"},"\u5e94\u7528 Harvester \u5b58\u50a8\u7f51\u7edc\u8bbe\u7f6e\u540e"),(0,r.kt)("p",null,"\u5e94\u7528 Harvester \u7684\u5b58\u50a8\u7f51\u7edc\u8bbe\u7f6e\u540e\uff0cHarvester \u5c06\u505c\u6b62\u6240\u6709\u4e0e Longhorn \u5377\u76f8\u5173\u7684 Pod\u3002Harvester \u7684\u4e00\u4e9b Pod \u5c06\u5728\u8bbe\u7f6e\u671f\u95f4\u88ab\u505c\u6b62\uff1a"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Prometheus"),(0,r.kt)("li",{parentName:"ul"},"Grafana"),(0,r.kt)("li",{parentName:"ul"},"Alertmanager"),(0,r.kt)("li",{parentName:"ul"},"VM Import Controller")),(0,r.kt)("p",null,"Harvester \u8fd8\u5c06\u521b\u5efa\u4e00\u4e2a\u65b0\u7684 NetworkAttachmentDefinition \u5e76\u66f4\u65b0 Longhorn Storage Network \u8bbe\u7f6e\u3002"),(0,r.kt)("p",null,"Longhorn \u8bbe\u7f6e\u66f4\u65b0\u540e\uff0cLonghorn \u5c06\u91cd\u65b0\u542f\u52a8\u6240\u6709 ",(0,r.kt)("inlineCode",{parentName:"p"},"instance-manager-r")," \u548c ",(0,r.kt)("inlineCode",{parentName:"p"},"instance-manager-e")," \u4ee5\u5e94\u7528\u65b0\u7684\u7f51\u7edc\u914d\u7f6e\uff0c\u5e76\u4e14 Harvester \u5c06\u91cd\u65b0\u542f\u52a8 Pod\u3002"),(0,r.kt)("admonition",{type:"note"},(0,r.kt)("p",{parentName:"admonition"},"Harvester \u4e0d\u4f1a\u81ea\u52a8\u542f\u52a8 VM\u3002\u7528\u6237\u5e94\u8be5\u5728\u4e0b\u4e00\u8282\u65f6\u68c0\u67e5\u914d\u7f6e\u662f\u5426\u5df2\u5b8c\u6210\uff0c\u5e76\u6309\u9700\u624b\u52a8\u542f\u52a8\u865a\u62df\u673a\u3002")),(0,r.kt)("h3",{id:"\u9a8c\u8bc1\u914d\u7f6e\u662f\u5426\u5b8c\u6210"},"\u9a8c\u8bc1\u914d\u7f6e\u662f\u5426\u5b8c\u6210"),(0,r.kt)("h4",{id:"\u6b65\u9aa4-1"},"\u6b65\u9aa4 1"),(0,r.kt)("p",null,"\u68c0\u67e5 Harvester Storage Network \u8bbe\u7f6e\u7684\u72b6\u6001\u662f\u5426\u4e3a ",(0,r.kt)("inlineCode",{parentName:"p"},"True")," \u4ee5\u53ca\u7c7b\u578b\u662f\u5426\u4e3a ",(0,r.kt)("inlineCode",{parentName:"p"},"configured"),"\u3002"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"kubectl get settings.harvesterhci.io storage-network -o yaml\n")),(0,r.kt)("p",null,"\u5b8c\u6574\u7684\u8bbe\u7f6e\u793a\u4f8b\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},'apiVersion: harvesterhci.io/v1beta1\nkind: Setting\nmetadata:\n  annotations:\n    storage-network.settings.harvesterhci.io/hash: da39a3ee5e6b4b0d3255bfef95601890afd80709\n    storage-network.settings.harvesterhci.io/net-attach-def: ""\n    storage-network.settings.harvesterhci.io/old-net-attach-def: ""\n  creationTimestamp: "2022-10-13T06:36:39Z"\n  generation: 51\n  name: storage-network\n  resourceVersion: "154638"\n  uid: 2233ad63-ee52-45f6-a79c-147e48fc88db\nstatus:\n  conditions:\n  - lastUpdateTime: "2022-10-13T13:05:17Z"\n    reason: Completed\n    status: "True"\n    type: configured\n')),(0,r.kt)("h4",{id:"\u6b65\u9aa4-2"},"\u6b65\u9aa4 2"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"\u68c0\u67e5\u6240\u6709 Longhorn ",(0,r.kt)("inlineCode",{parentName:"li"},"instance-manager-e")," \u548c ",(0,r.kt)("inlineCode",{parentName:"li"},"instance-manager-r")," \u662f\u5426\u51c6\u5907\u5c31\u7eea\u4ee5\u53ca\u7f51\u7edc\u662f\u5426\u6b63\u786e\u3002"),(0,r.kt)("li",{parentName:"ul"},"\u68c0\u67e5\u6ce8\u91ca ",(0,r.kt)("inlineCode",{parentName:"li"},"k8s.v1.cni.cncf.io/network-status")," \u662f\u5426\u5177\u6709\u540d\u4e3a ",(0,r.kt)("inlineCode",{parentName:"li"},"lhnet1")," \u7684\u63a5\u53e3\u5e76\u4e14 IP \u5730\u5740\u5728 IP \u8303\u56f4\u5185\u3002")),(0,r.kt)("p",null,"\u7528\u6237\u53ef\u4ee5\u4f7f\u7528\u4ee5\u4e0b\u547d\u4ee4\u6765\u5217\u51fa\u6240\u6709 Longhorn Instance Manager\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"kubectl get pods -n longhorn-system -l longhorn.io/component=instance-manager -o yaml\n")),(0,r.kt)("p",null,"\u6b63\u786e\u7684\u7f51\u7edc\u793a\u4f8b\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},'apiVersion: v1\nkind: Pod\nmetadata:\n  annotations:\n    cni.projectcalico.org/containerID: 2518b0696f6635896645b5546417447843e14208525d3c19d7ec6d7296cc13cd\n    cni.projectcalico.org/podIP: 10.52.2.122/32\n    cni.projectcalico.org/podIPs: 10.52.2.122/32\n    k8s.v1.cni.cncf.io/network-status: |-\n      [{\n          "name": "k8s-pod-network",\n          "ips": [\n              "10.52.2.122"\n          ],\n          "default": true,\n          "dns": {}\n      },{\n          "name": "harvester-system/storagenetwork-95bj4",\n          "interface": "lhnet1",\n          "ips": [\n              "192.168.0.3"\n          ],\n          "mac": "2e:51:e6:31:96:40",\n          "dns": {}\n      }]\n    k8s.v1.cni.cncf.io/networks: \'[{"namespace": "harvester-system", "name": "storagenetwork-95bj4",\n      "interface": "lhnet1"}]\'\n    k8s.v1.cni.cncf.io/networks-status: |-\n      [{\n          "name": "k8s-pod-network",\n          "ips": [\n              "10.52.2.122"\n          ],\n          "default": true,\n          "dns": {}\n      },{\n          "name": "harvester-system/storagenetwork-95bj4",\n          "interface": "lhnet1",\n          "ips": [\n              "192.168.0.3"\n          ],\n          "mac": "2e:51:e6:31:96:40",\n          "dns": {}\n      }]\n    kubernetes.io/psp: global-unrestricted-psp\n    longhorn.io/last-applied-tolerations: \'[{"key":"kubevirt.io/drain","operator":"Exists","effect":"NoSchedule"}]\'\n\nOmitted...\n')),(0,r.kt)("h3",{id:"\u624b\u52a8\u542f\u52a8\u865a\u62df\u673a"},"\u624b\u52a8\u542f\u52a8\u865a\u62df\u673a"),(0,r.kt)("p",null,"\u9a8c\u8bc1\u914d\u7f6e\u540e\uff0c\u7528\u6237\u53ef\u4ee5\u6309\u9700\u624b\u52a8\u542f\u52a8\u865a\u62df\u673a\u3002"))}c.isMDXComponent=!0},79846:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/storagenetwork-diff-27850c359733ffa1a4ce550cc16af4a5.png"},23954:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/storagenetwork-same-cc797fc537845a0b6eb4290c78252e7e.png"},66623:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/storagenetwork-ui-cb75b9781f2196e3bba724b398edd066.png"}}]);