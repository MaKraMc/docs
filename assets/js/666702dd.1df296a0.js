"use strict";(self.webpackChunkharvester_docs=self.webpackChunkharvester_docs||[]).push([[59827],{45618:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>r,contentTitle:()=>o,default:()=>d,frontMatter:()=>i,metadata:()=>l,toc:()=>s});a(67294);var n=a(3905);const i={sidebar_position:1,sidebar_label:"Installation",title:"Installation"},o=void 0,l={unversionedId:"troubleshooting/installation",id:"version-v0.3/troubleshooting/installation",title:"Installation",description:"The following sections contain tips to troubleshoot or get assistance with failed installations.",source:"@site/versioned_docs/version-v0.3/troubleshooting/installation.md",sourceDirName:"troubleshooting",slug:"/troubleshooting/installation",permalink:"/v0.3/troubleshooting/installation",draft:!1,editUrl:"https://github.com/harvester/docs/edit/main/versioned_docs/version-v0.3/troubleshooting/installation.md",tags:[],version:"v0.3",lastUpdatedAt:1720781072,formattedLastUpdatedAt:"Jul 12, 2024",sidebarPosition:1,frontMatter:{sidebar_position:1,sidebar_label:"Installation",title:"Installation"},sidebar:"api",previous:{title:"Harvester Terraform Provider",permalink:"/v0.3/terraform/terraform-provider"},next:{title:"Harvester",permalink:"/v0.3/troubleshooting/harvester"}},r={},s=[{value:"Logging into the Harvester Installer (a live OS)",id:"logging-into-the-harvester-installer-a-live-os",level:2},{value:"Meeting hardware requirements",id:"meeting-hardware-requirements",level:2},{value:"Receiving the message <code>&quot;Loading images. This may take a few minutes...&quot;</code>",id:"receiving-the-message-loading-images-this-may-take-a-few-minutes",level:2},{value:"Collecting Information",id:"collecting-information",level:2}],u={toc:s},m="wrapper";function d({components:e,...t}){return(0,n.kt)(m,{...u,...t,components:e,mdxType:"MDXLayout"},(0,n.kt)("head",null,(0,n.kt)("link",{rel:"canonical",href:"https://docs.harvesterhci.io/v1.1/troubleshooting/installation"})),(0,n.kt)("p",null,"The following sections contain tips to troubleshoot or get assistance with failed installations."),(0,n.kt)("h2",{id:"logging-into-the-harvester-installer-a-live-os"},"Logging into the Harvester Installer (a live OS)"),(0,n.kt)("p",null,"Users can press the key combination ",(0,n.kt)("inlineCode",{parentName:"p"},"CTRL + ALT + F2")," to switch to another TTY and log in with the following credentials:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"User: ",(0,n.kt)("inlineCode",{parentName:"li"},"rancher")),(0,n.kt)("li",{parentName:"ul"},"Password: ",(0,n.kt)("inlineCode",{parentName:"li"},"rancher"))),(0,n.kt)("h2",{id:"meeting-hardware-requirements"},"Meeting hardware requirements"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Check that your hardware meets the ",(0,n.kt)("a",{parentName:"li",href:"/v0.3/#hardware-requirements"},"minimum requirements")," to complete installation.")),(0,n.kt)("h2",{id:"receiving-the-message-loading-images-this-may-take-a-few-minutes"},"Receiving the message ",(0,n.kt)("inlineCode",{parentName:"h2"},'"Loading images. This may take a few minutes..."')),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},'Because the system doesn\'t have a default route, your installer may become "stuck" in this state. You can check your route status by executing the following command:')),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-console"},"$ ip route\ndefault via 10.10.0.10 dev harvester-mgmt proto dhcp        <-- Does a default route exist?\n10.10.0.0/24 dev harvester-mgmt proto kernel scope link src 10.10.0.15\n")),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Check that your DHCP server offers a default route option. Attaching content from ",(0,n.kt)("inlineCode",{parentName:"li"},"/run/cos/target/rke2.log")," is helpful too.")),(0,n.kt)("h2",{id:"collecting-information"},"Collecting Information"),(0,n.kt)("p",null,"Please include the following information in a bug report when reporting a failed installation:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"A failed installation screenshot.")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"Content of these files:"),(0,n.kt)("pre",{parentName:"li"},(0,n.kt)("code",{parentName:"pre"},"/var/log/console.log\n/run/cos/target/rke2.log\n/tmp/harvester.*\n/tmp/cos.*\n"))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"Output of these commands:"),(0,n.kt)("pre",{parentName:"li"},(0,n.kt)("code",{parentName:"pre"},"blkid\ndmesg\n")))))}d.isMDXComponent=!0}}]);