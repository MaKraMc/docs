"use strict";(self.webpackChunkharvester_docs=self.webpackChunkharvester_docs||[]).push([[46953],{12107:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>u,frontMatter:()=>n,metadata:()=>s,toc:()=>d});var r=a(87462),i=(a(67294),a(3905));const n={sidebar_position:1,sidebar_label:"Harvester Overview",title:"Harvester Overview",keywords:["Harvester","harvester","Rancher","rancher","Harvester Intro"],description:"Harvester is an open source hyper-converged infrastructure (HCI) software built on Kubernetes. It is an open source alternative to vSphere and Nutanix."},o=void 0,s={unversionedId:"index",id:"version-v0.3/index",title:"Harvester Overview",description:"Harvester is an open source hyper-converged infrastructure (HCI) software built on Kubernetes. It is an open source alternative to vSphere and Nutanix.",source:"@site/versioned_docs/version-v0.3/index.md",sourceDirName:".",slug:"/",permalink:"/v0.3/",draft:!1,editUrl:"https://github.com/harvester/docs/edit/main/versioned_docs/version-v0.3/index.md",tags:[],version:"v0.3",sidebarPosition:1,frontMatter:{sidebar_position:1,sidebar_label:"Harvester Overview",title:"Harvester Overview",keywords:["Harvester","harvester","Rancher","rancher","Harvester Intro"],description:"Harvester is an open source hyper-converged infrastructure (HCI) software built on Kubernetes. It is an open source alternative to vSphere and Nutanix."},sidebar:"tutorialSidebar",next:{title:"ISO Installation",permalink:"/v0.3/install/iso-install"}},l={},d=[{value:"Harvester Features",id:"harvester-features",level:2},{value:"Harvester Architecture",id:"harvester-architecture",level:2},{value:"Hardware Requirements",id:"hardware-requirements",level:2},{value:"Quick Start",id:"quick-start",level:2},{value:"ISO Installation",id:"iso-installation",level:3},{value:"Other Installation Methods",id:"other-installation-methods",level:3}],p={toc:d},h="wrapper";function u(e){let{components:t,...n}=e;return(0,i.kt)(h,(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("head",null,(0,i.kt)("link",{rel:"canonical",href:"https://docs.harvesterhci.io/v1.2"})),(0,i.kt)("p",null,"Harvester is an open-source ",(0,i.kt)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/Hyper-converged_infrastructure"},"hyper-converged infrastructure")," (HCI) software built on Kubernetes. It is an open alternative to using a proprietary HCI stack that incorporates the design and ethos of ",(0,i.kt)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/Cloud_native_computing"},"Cloud Native Computing"),"."),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"harvester-ui",src:a(49987).Z,width:"2558",height:"1304"})),(0,i.kt)("h2",{id:"harvester-features"},"Harvester Features"),(0,i.kt)("p",null,"Harvester implements HCI on bare metal servers. Harvester is designed to use local, direct attached storage instead of complex external SANs. It ships as an integrated bootable appliance image that can be deployed directly to servers through an ISO or PXE boot artifact."),(0,i.kt)("p",null,"Some notable features of Harvester include the following:"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"VM lifecycle management including SSH-Key injection, cloud-init, and graphic and serial port console"),(0,i.kt)("li",{parentName:"ol"},"VM live migration support"),(0,i.kt)("li",{parentName:"ol"},"Supported VM backup and restore"),(0,i.kt)("li",{parentName:"ol"},"Distributed block storage"),(0,i.kt)("li",{parentName:"ol"},"Multiple network interface controllers (NICs) in the VM connecting to the management network or VLANs"),(0,i.kt)("li",{parentName:"ol"},"Virtual Machine and cloud-init templates"),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("a",{parentName:"li",href:"https://github.com/rancher/rancher"},"Rancher")," integration with multi-cluster management and the Harvester node driver"),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("a",{parentName:"li",href:"/v0.3/install/pxe-boot-install"},"PXE/iPXE boot support")),(0,i.kt)("li",{parentName:"ol"},"Virtual IP and bond NIC support"),(0,i.kt)("li",{parentName:"ol"},"Monitoring integration")),(0,i.kt)("h2",{id:"harvester-architecture"},"Harvester Architecture"),(0,i.kt)("p",null,"The following diagram outlines a high-level architecture of Harvester:"),(0,i.kt)("p",null,(0,i.kt)("img",{src:a(32227).Z,width:"943",height:"486"})),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://longhorn.io/"},"Longhorn")," is a lightweight, reliable and easy-to-use distributed block storage system for Kubernetes."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://kubevirt.io/"},"KubeVirt")," is a virtual machine management add-on for Kubernetes."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://github.com/rancher-sandbox/cOS-toolkit"},"Elemental for openSUSE Leap 15.3")," is a Linux distribution designed to remove as much OS maintenance as possible in a Kubernetes cluster.")),(0,i.kt)("h2",{id:"hardware-requirements"},"Hardware Requirements"),(0,i.kt)("p",null,"To get the Harvester server up and running, the following minimum hardware is required:"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,i.kt)("th",{parentName:"tr",align:"left"},"Requirements"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},"CPU"),(0,i.kt)("td",{parentName:"tr",align:"left"},"x86_64 only. Hardware-assisted virtualization is required. 8-core processor minimum; 16-core or above preferred")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},"Memory"),(0,i.kt)("td",{parentName:"tr",align:"left"},"32 GB minimum; 64 GB or above preferred")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},"Disk Capacity"),(0,i.kt)("td",{parentName:"tr",align:"left"},"140 GB minimum; 500 GB or above preferred")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},"Disk Performance"),(0,i.kt)("td",{parentName:"tr",align:"left"},"5,000+ random IOPS per disk (SSD/NVMe). Management nodes (first three nodes) must be ",(0,i.kt)("a",{parentName:"td",href:"https://www.ibm.com/cloud/blog/using-fio-to-tell-whether-your-storage-is-fast-enough-for-etcd"},"fast enough for etcd"),".")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},"Network Card"),(0,i.kt)("td",{parentName:"tr",align:"left"},"1 Gbps Ethernet minimum; 10Gbps Ethernet recommended")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},"Network Switch"),(0,i.kt)("td",{parentName:"tr",align:"left"},"Trunking of ports required for VLAN support")))),(0,i.kt)("h2",{id:"quick-start"},"Quick Start"),(0,i.kt)("p",null,"You can install Harvester via ISO installation or PXE Boot Installation. Instructions are provided in sections below."),(0,i.kt)("h3",{id:"iso-installation"},"ISO Installation"),(0,i.kt)("p",null,"You can use the ISO to install Harvester directly on the bare metal server to form a Harvester cluster. Users can add one or many compute nodes to join the existing cluster."),(0,i.kt)("p",null,"To get the Harvester ISO, download it from the ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/harvester/harvester/releases"},"Github releases"),"."),(0,i.kt)("p",null,"During the installation, you can either choose to form a new cluster or join the node to an existing cluster."),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Note:")," This ",(0,i.kt)("a",{parentName:"p",href:"https://youtu.be/97ADieBX6bE"},"video")," shows a brief overview of the ISO installation process."),(0,i.kt)("div",{class:"text-center"},(0,i.kt)("iframe",{width:"950",height:"475",src:"https://www.youtube.com/embed/97ADieBX6bE",title:"YouTube video player",frameborder:"0",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture",allowfullscreen:!0})),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"Mount the Harvester ISO disk and boot the server by selecting the ",(0,i.kt)("inlineCode",{parentName:"li"},"Harvester Installer"),".\n",(0,i.kt)("img",{alt:"iso-install.png",src:a(8176).Z,width:"1430",height:"791"})),(0,i.kt)("li",{parentName:"ol"},"Choose the installation mode by either creating a new Harvester cluster or by joining an existing one."),(0,i.kt)("li",{parentName:"ol"},"Choose the installation device to which the Harvester cluster will be formatted."),(0,i.kt)("li",{parentName:"ol"},"Configure the hostname and select the network interface for the management network. By default, Harvester will create a bond NIC named ",(0,i.kt)("inlineCode",{parentName:"li"},"harvester-mgmt"),", and the IP address can either be configured via DHCP or by static method.\n",(0,i.kt)("img",{alt:"iso-installed.png",src:a(35382).Z,width:"422",height:"317"})),(0,i.kt)("li",{parentName:"ol"},"Optional: Configure the DNS servers; use commas as delimiters."),(0,i.kt)("li",{parentName:"ol"},"Configure the Virtual IP with which you can use to access the cluster or join other nodes to the cluster."),(0,i.kt)("li",{parentName:"ol"},"Configure the ",(0,i.kt)("inlineCode",{parentName:"li"},"cluster token"),". This token will be used for adding other nodes to the cluster."),(0,i.kt)("li",{parentName:"ol"},"Configure the login password of the host. The default ssh user is ",(0,i.kt)("inlineCode",{parentName:"li"},"rancher"),"."),(0,i.kt)("li",{parentName:"ol"},"Optional: Configure the NTP Servers of the node if needed. Default is ",(0,i.kt)("inlineCode",{parentName:"li"},"0.suse.pool.ntp.org"),"."),(0,i.kt)("li",{parentName:"ol"},"Optional: If you need to use an HTTP proxy to access the outside world, enter the proxy URL address; otherwise, leave this blank."),(0,i.kt)("li",{parentName:"ol"},"Optional: You can choose to import SSH keys from a remote URL server. Your GitHub public keys can be used with ",(0,i.kt)("inlineCode",{parentName:"li"},"https://github.com/<username>.keys"),"."),(0,i.kt)("li",{parentName:"ol"},"Optional: If you need to customize the host with cloud-init configuration, enter the HTTP URL."),(0,i.kt)("li",{parentName:"ol"},"Confirm the installation options and Harvester will be installed to your host. The installation may take a few minutes to complete."),(0,i.kt)("li",{parentName:"ol"},"Once the installation is complete, the host will restart, and a console UI with management URL and status will be displayed. ",(0,i.kt)("small",null,"(You can Use F12 to switch between the Harvester console and the Shell).")),(0,i.kt)("li",{parentName:"ol"},"The default URL of the web interface is ",(0,i.kt)("inlineCode",{parentName:"li"},"https://your-virtual-ip"),".\n",(0,i.kt)("img",{alt:"iso-installed.png",src:a(12021).Z,width:"1580",height:"770"})),(0,i.kt)("li",{parentName:"ol"},"Users will be prompted to set the password for the default ",(0,i.kt)("inlineCode",{parentName:"li"},"admin")," user at first login.\n",(0,i.kt)("img",{alt:"first-login.png",src:a(33289).Z,width:"2555",height:"1295"}))),(0,i.kt)("h3",{id:"other-installation-methods"},"Other Installation Methods"),(0,i.kt)("p",null,"Harvester can be installed automatically also. Please refer to ",(0,i.kt)("a",{parentName:"p",href:"/v0.3/install/pxe-boot-install"},"PXE Boot Install")," for detailed instructions for additional guidance."),(0,i.kt)("p",null,"More iPXE usage examples are available at ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/harvester/ipxe-examples"},"harvester/ipxe-examples"),"."))}u.isMDXComponent=!0},32227:(e,t,a)=>{a.d(t,{Z:()=>r});const r=a.p+"assets/images/architecture-6e8723efeab0d976b53f60c563e3e843.svg"},49987:(e,t,a)=>{a.d(t,{Z:()=>r});const r=a.p+"assets/images/dashboard-dbd4bec01989ce3a6a3bb94a79f130f7.png"},33289:(e,t,a)=>{a.d(t,{Z:()=>r});const r=a.p+"assets/images/first-time-login-e9b3f138436f21432a6b41fcde525f74.png"},8176:(e,t,a)=>{a.d(t,{Z:()=>r});const r=a.p+"assets/images/iso-install-2091728c1c52c4f9d5ec934cac509639.png"},12021:(e,t,a)=>{a.d(t,{Z:()=>r});const r=a.p+"assets/images/iso-installed-343c1a408fde89500699144f7e2739b0.png"},35382:(e,t,a)=>{a.d(t,{Z:()=>r});const r=a.p+"assets/images/iso-nic-config-4bb63338169e1e0595130056ad1676c0.gif"}}]);