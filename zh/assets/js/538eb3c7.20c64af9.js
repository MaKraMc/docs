"use strict";(self.webpackChunkharvester_docs=self.webpackChunkharvester_docs||[]).push([[4609],{3905:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>m});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var p=n.createContext({}),l=function(e){var t=n.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},u=function(e){var t=l(e.components);return n.createElement(p.Provider,{value:t},e.children)},c="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},v=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,p=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),c=l(r),v=a,m=c["".concat(p,".").concat(v)]||c[v]||d[v]||o;return r?n.createElement(m,i(i({ref:t},u),{},{components:r})):n.createElement(m,i({ref:t},u))}));function m(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,i=new Array(o);i[0]=v;var s={};for(var p in t)hasOwnProperty.call(t,p)&&(s[p]=t[p]);s.originalType=e,s[c]="string"==typeof e?e:a,i[1]=s;for(var l=2;l<o;l++)i[l]=r[l];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}v.displayName="MDXCreateElement"},66163:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>p,contentTitle:()=>i,default:()=>d,frontMatter:()=>o,metadata:()=>s,toc:()=>l});var n=r(87462),a=(r(67294),r(3905));const o={sidebar_position:2,sidebar_label:"Upgrade from v1.1.2/v1.2.0 to v1.2.1",title:"Upgrade from v1.1.2/v1.2.0 to v1.2.1"},i=void 0,s={unversionedId:"upgrade/v1-2-0-to-v1-2-1",id:"upgrade/v1-2-0-to-v1-2-1",title:"Upgrade from v1.1.2/v1.2.0 to v1.2.1",description:"Important changes to this version",source:"@site/docs/upgrade/v1-2-0-to-v1-2-1.md",sourceDirName:"upgrade",slug:"/upgrade/v1-2-0-to-v1-2-1",permalink:"/zh/v1.3/upgrade/v1-2-0-to-v1-2-1",draft:!1,editUrl:"https://github.com/harvester/docs/edit/main/docs/upgrade/v1-2-0-to-v1-2-1.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2,sidebar_label:"Upgrade from v1.1.2/v1.2.0 to v1.2.1",title:"Upgrade from v1.1.2/v1.2.0 to v1.2.1"},sidebar:"docs",previous:{title:"Upgrade from v1.1.2 to v1.2.0",permalink:"/zh/v1.3/upgrade/v1-1-2-to-v1-2-0"},next:{title:"\u4ece v1.1.0/v1.1.1 \u5347\u7ea7\u5230 v1.1.2",permalink:"/zh/v1.3/upgrade/v1-1-to-v1-1-2"}},p={},l=[{value:"Important changes to this version",id:"important-changes-to-this-version",level:2},{value:"General information",id:"general-information",level:2},{value:"Known issues",id:"known-issues",level:2}],u={toc:l},c="wrapper";function d(e){let{components:t,...r}=e;return(0,a.kt)(c,(0,n.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("head",null,(0,a.kt)("link",{rel:"canonical",href:"https://docs.harvesterhci.io/v1.3/upgrade/v1-2-0-to-v1-2-1"})),(0,a.kt)("h2",{id:"important-changes-to-this-version"},"Important changes to this version"),(0,a.kt)("p",null,"Harvester ",(0,a.kt)("inlineCode",{parentName:"p"},"v1.2.1")," fixes upgrade known issues found in ",(0,a.kt)("inlineCode",{parentName:"p"},"v1.2.0"),", we suggest upgrading ",(0,a.kt)("inlineCode",{parentName:"p"},"v1.1.2")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"v1.2.0")," clusters to ",(0,a.kt)("inlineCode",{parentName:"p"},"v1.2.1"),". The known issues found in ",(0,a.kt)("inlineCode",{parentName:"p"},"v1.2.0")," are:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"./v1-1-2-to-v1-2-0.md#9-an-upgrade-is-stuck-in-the-post-draining-state"},"An Upgrade is stuck in the Post-draining state")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"./v1-1-2-to-v1-2-0.md#10-an-upgrade-is-stuck-in-the-upgrading-system-service-state-due-to-the-customer-provided-ssl-certificate-without-ip-san-error-in-fleet-agent"},"An upgrade is stuck in the Upgrading System Service state due to the customer provided SSL certificate without IP SAN error in fleet-agent"))),(0,a.kt)("p",null,"For clusters already upgraded to v1.2.0, please refer to the ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/harvester/harvester/releases/tag/v1.2.1"},"release note")," for new changes."),(0,a.kt)("h2",{id:"general-information"},"General information"),(0,a.kt)("admonition",{type:"tip"},(0,a.kt)("p",{parentName:"admonition"},"Before you start an upgrade, you can run the pre-check script to make sure the cluster is in a stable state. For more details, please visit this ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/harvester/upgrade-helpers/tree/main/pre-check/v1.1.x"},"URL")," for the script.")),(0,a.kt)("p",null,"Once there is an upgradable version, the Harvester GUI Dashboard page will show an upgrade button. For more details, please refer to ",(0,a.kt)("a",{parentName:"p",href:"./automatic.md#start-an-upgrade"},"start an upgrade"),"."),(0,a.kt)("p",null,"For the air-gap env upgrade, please refer to ",(0,a.kt)("a",{parentName:"p",href:"./automatic.md#prepare-an-air-gapped-upgrade"},"prepare an air-gapped upgrade"),"."),(0,a.kt)("h2",{id:"known-issues"},"Known issues"),(0,a.kt)("p",null,"Please check v1.2.0 ",(0,a.kt)("a",{parentName:"p",href:"./v1-1-2-to-v1-2-0.md#known-issues"},"known issues"),"."))}d.isMDXComponent=!0}}]);