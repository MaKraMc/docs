"use strict";(self.webpackChunkharvester_docs=self.webpackChunkharvester_docs||[]).push([[4832],{3905:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>b});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var s=n.createContext({}),l=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},p=function(e){var t=l(e.components);return n.createElement(s.Provider,{value:t},e.children)},v={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,i=e.originalType,s=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),u=l(r),b=a,m=u["".concat(s,".").concat(b)]||u[b]||v[b]||i;return r?n.createElement(m,o(o({ref:t},p),{},{components:r})):n.createElement(m,o({ref:t},p))}));function b(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=r.length,o=new Array(i);o[0]=u;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c.mdxType="string"==typeof e?e:a,o[1]=c;for(var l=2;l<i;l++)o[l]=r[l];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}u.displayName="MDXCreateElement"},17548:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>v,frontMatter:()=>i,metadata:()=>c,toc:()=>l});var n=r(87462),a=(r(67294),r(3905));const i={sidebar_position:1,sidebar_label:"\u6982\u8ff0",title:"\u6982\u8ff0",keywords:["Harvester","harvester","Rancher","rancher","\u7f51\u7edc","network","VLAN","vlan"],Description:"Harvester \u6784\u5efa\u5728 Kubernetes \u4e4b\u4e0a\uff0c\u800c Kubernetes \u4f7f\u7528 [CNI](https://github.com/containernetworking/cni) \u4f5c\u4e3a\u7f51\u7edc\u63d0\u4f9b\u5546\u548c Kubernetes Pod \u7f51\u7edc\u4e4b\u95f4\u7684\u63a5\u53e3\u3002\u56e0\u6b64\uff0c\u6211\u4eec\u4e5f\u57fa\u4e8e CNI \u5b9e\u73b0 Harvester \u7f51\u7edc\u3002\u6b64\u5916\uff0cHarvester UI \u96c6\u6210\u4e86\u7f51\u7edc\u914d\u7f6e\uff0c\u6765\u5b9e\u73b0\u7528\u6237\u53cb\u597d\u7684\u865a\u62df\u673a\u7f51\u7edc\u914d\u7f6e\u3002"},o=void 0,c={unversionedId:"networking/best-practice/overview",id:"version-v1.0/networking/best-practice/overview",title:"\u6982\u8ff0",description:"\u5728\u5b9e\u9645\u751f\u4ea7\u73af\u5883\u4e2d\uff0c\u6211\u4eec\u5efa\u8bae\u4f60\u7684\u4e3b\u673a\u4f7f\u7528\u591a\u4e2a\u7f51\u5361\uff0c\u4e00\u4e2a\u7528\u4e8e\u8282\u70b9\u8bbf\u95ee\uff0c\u4e00\u4e2a\u7528\u4e8e VM \u7f51\u7edc\u3002\u5982\u679c\u4f60\u7684\u4e3b\u673a\u6709\u591a\u4e2a NIC\uff0c\u8bf7\u53c2\u9605\u591a\u4e2a NIC \u4ee5\u4e86\u89e3\u6700\u4f73\u5b9e\u8df5\u3002\u5426\u5219\uff0c\u8bf7\u53c2\u9605\u5355 NIC \u6700\u4f73\u5b9e\u8df5\u3002",source:"@site/i18n/zh/docusaurus-plugin-content-docs/version-v1.0/networking/best-practice/overview.md",sourceDirName:"networking/best-practice",slug:"/networking/best-practice/overview",permalink:"/zh/v1.0/networking/best-practice/overview",draft:!1,editUrl:"https://github.com/harvester/docs/edit/main/versioned_docs/version-v1.0/networking/best-practice/overview.md",tags:[],version:"v1.0",sidebarPosition:1,frontMatter:{sidebar_position:1,sidebar_label:"\u6982\u8ff0",title:"\u6982\u8ff0",keywords:["Harvester","harvester","Rancher","rancher","\u7f51\u7edc","network","VLAN","vlan"],Description:"Harvester \u6784\u5efa\u5728 Kubernetes \u4e4b\u4e0a\uff0c\u800c Kubernetes \u4f7f\u7528 [CNI](https://github.com/containernetworking/cni) \u4f5c\u4e3a\u7f51\u7edc\u63d0\u4f9b\u5546\u548c Kubernetes Pod \u7f51\u7edc\u4e4b\u95f4\u7684\u63a5\u53e3\u3002\u56e0\u6b64\uff0c\u6211\u4eec\u4e5f\u57fa\u4e8e CNI \u5b9e\u73b0 Harvester \u7f51\u7edc\u3002\u6b64\u5916\uff0cHarvester UI \u96c6\u6210\u4e86\u7f51\u7edc\u914d\u7f6e\uff0c\u6765\u5b9e\u73b0\u7528\u6237\u53cb\u597d\u7684\u865a\u62df\u673a\u7f51\u7edc\u914d\u7f6e\u3002"},sidebar:"tutorialSidebar",previous:{title:"Harvester \u7f51\u7edc",permalink:"/zh/v1.0/networking/harvester-network"},next:{title:"\u5177\u6709 VLAN \u611f\u77e5\u4ea4\u6362\u673a\u7684\u591a\u4e2a NIC",permalink:"/zh/v1.0/networking/best-practice/multiple-nics-vlan-aware-switch"}},s={},l=[{value:"\u6700\u4f73\u5b9e\u8df5",id:"\u6700\u4f73\u5b9e\u8df5",level:2}],p={toc:l};function v(e){let{components:t,...r}=e;return(0,a.kt)("wrapper",(0,n.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"\u5728\u5b9e\u9645\u751f\u4ea7\u73af\u5883\u4e2d\uff0c\u6211\u4eec\u5efa\u8bae\u4f60\u7684\u4e3b\u673a\u4f7f\u7528\u591a\u4e2a\u7f51\u5361\uff0c\u4e00\u4e2a\u7528\u4e8e\u8282\u70b9\u8bbf\u95ee\uff0c\u4e00\u4e2a\u7528\u4e8e VM \u7f51\u7edc\u3002\u5982\u679c\u4f60\u7684\u4e3b\u673a\u6709\u591a\u4e2a NIC\uff0c\u8bf7\u53c2\u9605",(0,a.kt)("a",{parentName:"p",href:"/zh/v1.0/networking/best-practice/multiple-nics-vlan-aware-switch"},"\u591a\u4e2a NIC")," \u4ee5\u4e86\u89e3\u6700\u4f73\u5b9e\u8df5\u3002\u5426\u5219\uff0c\u8bf7\u53c2\u9605",(0,a.kt)("a",{parentName:"p",href:"/zh/v1.0/networking/best-practice/single-nic-vlan-aware-switch"},"\u5355 NIC")," \u6700\u4f73\u5b9e\u8df5\u3002"),(0,a.kt)("admonition",{type:"note"},(0,a.kt)("p",{parentName:"admonition"},"\u5982\u679c ",(0,a.kt)("inlineCode",{parentName:"p"},"bond")," \u63a5\u53e3\u914d\u7f6e\u4e86\u591a\u4e2a NIC\uff0c\u9664\u975e Harvester \u8282\u70b9\u6709\u591a\u4e2a ",(0,a.kt)("inlineCode",{parentName:"p"},"bond")," \u63a5\u53e3\u3002\u5426\u5219\u8bf7\u53c2\u9605\u5355 NIC \u573a\u666f\u3002")),(0,a.kt)("h2",{id:"\u6700\u4f73\u5b9e\u8df5"},"\u6700\u4f73\u5b9e\u8df5"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/zh/v1.0/networking/best-practice/multiple-nics-vlan-aware-switch"},"\u5177\u6709 VLAN \u611f\u77e5\u4ea4\u6362\u673a\u7684\u591a\u4e2a NIC")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/zh/v1.0/networking/best-practice/multiple-nics-non-vlan-aware-switch"},"\u5177\u6709\u975e VLAN \u611f\u77e5\u4ea4\u6362\u673a\u7684\u591a\u4e2a NIC")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/zh/v1.0/networking/best-practice/single-nic-vlan-aware-switch"},"\u5177\u6709 VLAN \u611f\u77e5\u4ea4\u6362\u673a\u7684\u5355\u4e2a NIC")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/zh/v1.0/networking/best-practice/single-nic-non-vlan-aware-switch"},"\u5e26\u6709\u975e VLAN \u611f\u77e5\u4ea4\u6362\u673a\u7684\u5355\u4e2a NIC"))))}v.isMDXComponent=!0}}]);