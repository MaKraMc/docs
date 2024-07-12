(self.webpackChunkharvester_docs=self.webpackChunkharvester_docs||[]).push([[1893],{13845:(e,s,t)=>{"use strict";t.r(s),t.d(s,{default:()=>x});var n=t(85893),i=(t(67294),t(86010)),a=t(8241),r=t(31984),l=t(92210),o=t(55995),d=t(65319),c=t(39085),u=t(27391);const h={unreleased:function({siteTitle:e,versionMetadata:s}){return(0,n.jsx)(l.Z,{id:"theme.docs.versions.unreleasedVersionLabel",description:"The label used to tell the user that he's browsing an unreleased doc version",values:{siteTitle:(0,n.jsx)("b",{children:"Harvester"}),versionLabel:(0,n.jsx)("b",{children:s.label})},children:"This is unreleased documentation for {siteTitle} {versionLabel} version."})},unmaintained:function({siteTitle:e,versionMetadata:s}){return(0,n.jsx)("div",{children:(0,n.jsx)(l.Z,{id:"theme.docs.versions.unmaintainedVersionLabel",description:"The label used to tell the user that he's browsing an unmaintained doc version",values:{siteTitle:(0,n.jsx)("b",{children:"Harvester"}),versionLabel:(0,n.jsx)("b",{children:s.label}),matrix:(0,n.jsx)("a",{href:"https://www.suse.com/suse-harvester/support-matrix/all-supported-versions/",children:(0,n.jsx)("b",{children:"SUSE support matrix"})})},children:"{siteTitle} {versionLabel} is EOL and this documentation is no longer actively maintained. For more details, refer to the {matrix}."})})}};function v(e){const s=h[e.versionMetadata.banner];return(0,n.jsx)(s,{...e})}function b({versionLabel:e,to:s,onClick:t}){return(0,n.jsx)(l.Z,{id:"theme.docs.versions.latestVersionSuggestionLabel",description:"The label used to tell the user to check the latest version",values:{versionLabel:e,latestVersionLink:(0,n.jsx)("b",{children:(0,n.jsx)(r.default,{to:s,onClick:t,children:(0,n.jsx)(l.Z,{id:"theme.docs.versions.latestVersionLinkLabel",description:"The label used for the latest version suggestion link label",children:"latest version"})})})},children:"For up-to-date documentation, see the {latestVersionLink} ({versionLabel})."})}function m({className:e,versionMetadata:s}){const{siteConfig:{title:t}}=(0,a.default)(),{pluginId:r}=(0,o.gA)({failfast:!0}),{savePreferredVersionName:l}=(0,c.J)(r),{latestDocSuggestion:u,latestVersionSuggestion:h}=(0,o.Jo)(r),m=null!=u?u:(x=h).docs.find((e=>e.id===x.mainDocId));var x;return(0,n.jsxs)("div",{className:(0,i.default)(e,d.k.docs.docVersionBanner,"alert alert--warning margin-bottom--md"),role:"alert",children:[(0,n.jsx)("div",{children:(0,n.jsx)(v,{siteTitle:t,versionMetadata:s})}),(0,n.jsx)("div",{className:"margin-top--md",children:(0,n.jsx)(b,{versionLabel:h.label,to:m.path,onClick:()=>l(h.name)})})]})}function x({className:e}){const s=(0,u.E)();return s.banner?(0,n.jsx)(m,{className:e,versionMetadata:s}):null}},42391:(e,s,t)=>{"use strict";t.d(s,{Z:()=>r});t(67294);var n=t(64893),i=t(50551),a=t(53787);const r={...n.Z,TabItem:i.default,Tabs:a.Z}},69604:()=>{},45603:()=>{},44616:()=>{},42480:()=>{},24654:()=>{},52361:()=>{},94616:()=>{}}]);