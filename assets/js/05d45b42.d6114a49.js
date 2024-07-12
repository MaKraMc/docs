"use strict";(self.webpackChunkharvester_docs=self.webpackChunkharvester_docs||[]).push([[31156],{56682:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>u,frontMatter:()=>r,metadata:()=>i,toc:()=>s});n(67294);var a=n(3905);const r={sidebar_position:2,sidebar_label:"Harvester",title:"Harvester"},o=void 0,i={unversionedId:"troubleshooting/harvester",id:"version-v1.2/troubleshooting/harvester",title:"Harvester",description:"Fail to Deploy a Multi-node Cluster Due to Incorrect HTTP Proxy Setting",source:"@site/versioned_docs/version-v1.2/troubleshooting/harvester.md",sourceDirName:"troubleshooting",slug:"/troubleshooting/harvester",permalink:"/v1.2/troubleshooting/harvester",draft:!1,editUrl:"https://github.com/harvester/docs/edit/main/versioned_docs/version-v1.2/troubleshooting/harvester.md",tags:[],version:"v1.2",lastUpdatedAt:1720781072,formattedLastUpdatedAt:"Jul 12, 2024",sidebarPosition:2,frontMatter:{sidebar_position:2,sidebar_label:"Harvester",title:"Harvester"},sidebar:"api",previous:{title:"Installation",permalink:"/v1.2/troubleshooting/index"},next:{title:"Operating System",permalink:"/v1.2/troubleshooting/os"}},l={},s=[{value:"Fail to Deploy a Multi-node Cluster Due to Incorrect HTTP Proxy Setting",id:"fail-to-deploy-a-multi-node-cluster-due-to-incorrect-http-proxy-setting",level:2},{value:"ISO Installation Without a Harvester Configuration File",id:"iso-installation-without-a-harvester-configuration-file",level:3},{value:"Configure HTTP Proxy During Harvester Installation",id:"configure-http-proxy-during-harvester-installation",level:4},{value:"Configure HTTP Proxy After First Node is Ready",id:"configure-http-proxy-after-first-node-is-ready",level:4},{value:"One Node Becomes Unavailable",id:"one-node-becomes-unavailable",level:4},{value:"Solution",id:"solution",level:4},{value:"ISO Installation With a Harvester Configuration File",id:"iso-installation-with-a-harvester-configuration-file",level:3},{value:"PXE Boot Installation",id:"pxe-boot-installation",level:3},{value:"Generate a Support Bundle",id:"generate-a-support-bundle",level:2},{value:"Manually Download and Retain a Support Bundle File",id:"manually-download-and-retain-a-support-bundle-file",level:3},{value:"Generate the File and Prevent Automatic Downloading",id:"generate-the-file-and-prevent-automatic-downloading",level:4},{value:"Download the File",id:"download-the-file",level:4},{value:"Delete the Related Resources",id:"delete-the-related-resources",level:4},{value:"Manually Copy the Support Bundle File",id:"manually-copy-the-support-bundle-file",level:3},{value:"Known Limitations",id:"known-limitations",level:3},{value:"Access Embedded Rancher and Longhorn Dashboards",id:"access-embedded-rancher-and-longhorn-dashboards",level:2},{value:"I can&#39;t access Harvester after I changed SSL/TLS enabled protocols and ciphers",id:"i-cant-access-harvester-after-i-changed-ssltls-enabled-protocols-and-ciphers",level:2},{value:"Network interfaces are not showing up",id:"network-interfaces-are-not-showing-up",level:2},{value:"How to identify the issue with the unsupported SFP?",id:"how-to-identify-the-issue-with-the-unsupported-sfp",level:4},{value:"Testing",id:"testing",level:5},{value:"Solution",id:"solution-1",level:4}],p={toc:s},d="wrapper";function u({components:e,...t}){return(0,a.kt)(d,{...p,...t,components:e,mdxType:"MDXLayout"},(0,a.kt)("head",null,(0,a.kt)("link",{rel:"canonical",href:"https://docs.harvesterhci.io/v1.1/troubleshooting/harvester"})),(0,a.kt)("h2",{id:"fail-to-deploy-a-multi-node-cluster-due-to-incorrect-http-proxy-setting"},"Fail to Deploy a Multi-node Cluster Due to Incorrect HTTP Proxy Setting"),(0,a.kt)("h3",{id:"iso-installation-without-a-harvester-configuration-file"},"ISO Installation Without a Harvester Configuration File"),(0,a.kt)("h4",{id:"configure-http-proxy-during-harvester-installation"},"Configure HTTP Proxy During Harvester Installation"),(0,a.kt)("p",null,"In some environments, you configure ",(0,a.kt)("a",{parentName:"p",href:"/v1.2/airgap#configure-an-http-proxy-during-installation"},"http-proxy")," of ",(0,a.kt)("a",{parentName:"p",href:"/v1.2/install/harvester-configuration#osenvironment"},"OS Environment")," during Harvester installation."),(0,a.kt)("h4",{id:"configure-http-proxy-after-first-node-is-ready"},"Configure HTTP Proxy After First Node is Ready"),(0,a.kt)("p",null,"After the first node is installed successfully, you login into the ",(0,a.kt)("inlineCode",{parentName:"p"},"Harvester GUI")," to configure ",(0,a.kt)("a",{parentName:"p",href:"/v1.2/airgap#configure-an-http-proxy-in-harvester-settings"},"http-proxy")," of ",(0,a.kt)("a",{parentName:"p",href:"/v1.2/install/harvester-configuration#system_settings"},"Harvester System Settings"),"."),(0,a.kt)("p",null,"Then you continue to add more nodes to the cluster."),(0,a.kt)("h4",{id:"one-node-becomes-unavailable"},"One Node Becomes Unavailable"),(0,a.kt)("p",null,"The issue you may encounter:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"The first node is installed successfully.\n\nThe second node is installed successfully.\n\nThe third node is installed successfully.\n\nThen the second node changes to Unavialable state and cannot recover automatically.\n")),(0,a.kt)("h4",{id:"solution"},"Solution"),(0,a.kt)("p",null,"When the nodes in the cluster do not use the HTTP Proxy to communicate with each other, after the first node is installed successfully, you need to configure ",(0,a.kt)("a",{parentName:"p",href:"/v1.2/airgap#configure-an-http-proxy-in-harvester-settings"},"http-proxy.noProxy")," against the CIDR used by those nodes."),(0,a.kt)("p",null,"For example, your cluster assigns IPs from CIDR ",(0,a.kt)("inlineCode",{parentName:"p"},"172.26.50.128/27")," to nodes via DHCP/static setting, please add this CIDR to ",(0,a.kt)("inlineCode",{parentName:"p"},"noProxy"),"."),(0,a.kt)("p",null,"After setting this, you can continue to add new nodes to the cluster."),(0,a.kt)("p",null,"For more details, please refer to ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/harvester/harvester/issues/3091"},"Harvester issue 3091"),"."),(0,a.kt)("h3",{id:"iso-installation-with-a-harvester-configuration-file"},"ISO Installation With a Harvester Configuration File"),(0,a.kt)("p",null,"When a Harvester configuration file is used in ISO installation, please configure proper ",(0,a.kt)("inlineCode",{parentName:"p"},"http-proxy")," in ",(0,a.kt)("a",{parentName:"p",href:"/v1.2/install/harvester-configuration#system_settings"},"Harvester System Settings"),"."),(0,a.kt)("h3",{id:"pxe-boot-installation"},"PXE Boot Installation"),(0,a.kt)("p",null,"When ",(0,a.kt)("a",{parentName:"p",href:"/v1.2/install/pxe-boot-install"},"PXE Boot Installation")," is adopted, please configure proper ",(0,a.kt)("inlineCode",{parentName:"p"},"http-proxy")," in ",(0,a.kt)("a",{parentName:"p",href:"/v1.2/install/harvester-configuration#osenvironment"},"OS Environment")," and ",(0,a.kt)("a",{parentName:"p",href:"/v1.2/install/harvester-configuration#system_settings"},"Harvester System Settings"),"."),(0,a.kt)("h2",{id:"generate-a-support-bundle"},"Generate a Support Bundle"),(0,a.kt)("p",null,"Users can generate a support bundle in the Harvester GUI with the following steps:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"Click the ",(0,a.kt)("inlineCode",{parentName:"p"},"Support")," link at the bottom-left of Harvester Web UI.\n",(0,a.kt)("img",{src:n(57725).Z,width:"955",height:"902"}))),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"Click ",(0,a.kt)("inlineCode",{parentName:"p"},"Generate Support Bundle")," button.\n",(0,a.kt)("img",{src:n(97708).Z,width:"953",height:"286"}))),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"Enter a useful description for the support bundle and click ",(0,a.kt)("inlineCode",{parentName:"p"},"Create")," to generate and download a support bundle.\n",(0,a.kt)("img",{src:n(48289).Z,width:"941",height:"436"})))),(0,a.kt)("admonition",{type:"note"},(0,a.kt)("p",{parentName:"admonition"},"Whenever you encounter an issue that may be related to workloads deployed in custom namespaces, configure the ",(0,a.kt)("a",{parentName:"p",href:"/v1.2/advanced/index#support-bundle-namespaces"},"support-bundle-namespaces")," setting to include those namespaces as data sources. The support bundle only collects data from the configured namespaces."),(0,a.kt)("p",{parentName:"admonition"},"For timeout errors, you can adjust the value of the ",(0,a.kt)("a",{parentName:"p",href:"/v1.2/advanced/index#support-bundle-timeout"},"support-bundle-timeout")," setting and then restart the support bundle generation process."),(0,a.kt)("p",{parentName:"admonition"},"If you intend to use a non-default container image, you can configure the ",(0,a.kt)("a",{parentName:"p",href:"/v1.2/advanced/index#support-bundle-image"},"support-bundle-image")," setting.")),(0,a.kt)("h3",{id:"manually-download-and-retain-a-support-bundle-file"},"Manually Download and Retain a Support Bundle File"),(0,a.kt)("p",null,"By default, a support bundle file is automatically generated, downloaded, and deleted after you click ",(0,a.kt)("strong",{parentName:"p"},"Create")," on the Harvester UI. However, you may want to retain a file for various reasons, including the following:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"You are unable to download the file because of network connectivity errors and other issues.")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"You must use a previously generated file to troubleshoot issues (because generating a support bundle file takes time).")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"You want to view information that only exists in a previously generated file."))),(0,a.kt)("p",null,"Even if the file remains in the cluster, the Harvester UI does not provide a download link. Use the following workaround to generate, manually download, and retain a support bundle file:"),(0,a.kt)("h4",{id:"generate-the-file-and-prevent-automatic-downloading"},"Generate the File and Prevent Automatic Downloading"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"On the Harvester UI, click ",(0,a.kt)("strong",{parentName:"p"},"Generate Support Bundle"),".")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"When the progress indicator reaches 20% to 80%, close the browser tab to prevent automatic downloading of the generated file.")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Retrieve a list of all support bundles in all namespaces using kubectl."),(0,a.kt)("p",{parentName:"li"},"Example:"),(0,a.kt)("pre",{parentName:"li"},(0,a.kt)("code",{parentName:"pre"},"$ kubectl get supportbundle -A\nNAMESPACE          NAME           ISSUE_URL   DESCRIPTION   AGE\nharvester-system   bundle-htl5f               sp1           3h43m\n"))),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Retrieve the details of all existing support bundles using the command ",(0,a.kt)("inlineCode",{parentName:"p"},"kubectl get supportbundle -A -o yaml"),"."),(0,a.kt)("p",{parentName:"li"},"Example:"),(0,a.kt)("pre",{parentName:"li"},(0,a.kt)("code",{parentName:"pre"},'$ kubectl get supportbundle -A -oyaml\napiVersion: v1\nitems:\n- apiVersion: harvesterhci.io/v1beta1\n  kind: SupportBundle\n  metadata:\n    creationTimestamp: "2024-02-02T11:18:09Z"\n    generation: 5\n    name: bundle-htl5f  // resource name\n    namespace: harvester-system\n    resourceVersion: "1218311"\n    uid: a3776373-05fe-4584-8a9a-baac3fa91bbf\n  spec:\n    description: sp1\n    issueURL: ""\n  status:\n    conditions:\n    - lastUpdateTime: "2024-02-02T11:18:38Z"\n      status: "True"\n      type: Initialized\n    filename: supportbundle_db25ccb6-b52a-4f9d-97dd-db2df2b004d4_2024-02-02T11-18-10Z.zip  // support bundle file name\n    filesize: 8868712\n    progress: 100  // 100 means successfully generated\n    state: ready\n')))),(0,a.kt)("p",null,"The file is ready for downloading when the value of ",(0,a.kt)("inlineCode",{parentName:"p"},"progress"),' is "100" and the value of ',(0,a.kt)("inlineCode",{parentName:"p"},"state"),' is "ready".'),(0,a.kt)("h4",{id:"download-the-file"},"Download the File"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Create a download URL that includes the following information:"),(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/v1.2/install/management-address"},"VIP")," or DNS name"),(0,a.kt)("li",{parentName:"ul"},"Resource name of the file"),(0,a.kt)("li",{parentName:"ul"},"Parameter ",(0,a.kt)("inlineCode",{parentName:"li"},"?retain=true"),": If you do not include this parameter, resources related to the support bundle are automatically deleted after the file is successfully downloaded.")),(0,a.kt)("p",{parentName:"li"},"Example:"),(0,a.kt)("p",{parentName:"li"},(0,a.kt)("inlineCode",{parentName:"p"},"https://{vip/dns-name}/v1/harvester/supportbundles/bundle-htl5f/download?retain=true"))),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Download the file using either a command-line tool (for example, curl and wget) or a web browser."),(0,a.kt)("p",{parentName:"li"},"Example:"),(0,a.kt)("p",{parentName:"li"},(0,a.kt)("inlineCode",{parentName:"p"},"curl -k https://{vip/dns-name}/v1/harvester/supportbundles/bundle-htl5f/download?retain=true -o sb2.zip"))),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Verify that resources related to the support bundle were not deleted."),(0,a.kt)("p",{parentName:"li"},"Example:"),(0,a.kt)("pre",{parentName:"li"},(0,a.kt)("code",{parentName:"pre"},"$ kubectl get supportbundle -A\nNAMESPACE          NAME           ISSUE_URL   DESCRIPTION   AGE\nharvester-system   bundle-htl5f               sp1           3h43m\n")))),(0,a.kt)("h4",{id:"delete-the-related-resources"},"Delete the Related Resources"),(0,a.kt)("p",null,"Retained support bundle files consume memory and storage resources. Each file is backed by a ",(0,a.kt)("inlineCode",{parentName:"p"},"supportbundle-manager-bundle*")," pod in the ",(0,a.kt)("inlineCode",{parentName:"p"},"harvester-system")," namespace, and the generated ZIP file is stored in the ",(0,a.kt)("inlineCode",{parentName:"p"},"/tmp")," folder of the pod's memory-based filesystem."),(0,a.kt)("p",null,"Example:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"$ kubectl get pods -n harvester-system\nNAME                                                    READY   STATUS    RESTARTS       AGE\nsupportbundle-manager-bundle-dtl2k-69dcc69b59-w64vl     1/1     Running   0              8m18s\n")),(0,a.kt)("p",null,"You can delete the related resources using the following method:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"Manual: Run the command ",(0,a.kt)("inlineCode",{parentName:"p"},"kubectl delete supportbundle -n {namespace} {resource-name}"),". Deleting a support bundle object automatically deletes the pod that backs it."),(0,a.kt)("p",{parentName:"li"},"  Example:"),(0,a.kt)("pre",{parentName:"li"},(0,a.kt)("code",{parentName:"pre"},'$ kubectl delete supportbundle -n harvester-system bundle-htl5f\nsupportbundle.harvesterhci.io "bundle-htl5f" deleted\n\n$ kubectl get supportbundle -A\nNo resources found\n')))),(0,a.kt)("h3",{id:"manually-copy-the-support-bundle-file"},"Manually Copy the Support Bundle File"),(0,a.kt)("p",null,"You can run the command ",(0,a.kt)("inlineCode",{parentName:"p"},"kubectl cp")," to copy the generated file from the backing pod."),(0,a.kt)("p",null,"Example:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"kubectl cp harvester-system/supportbundle-manager-bundle-dtl2k-69dcc69b59-w64vl:/tmp/support-bundle-kit/supportbundle_db25ccb6-b52a-4f9d-97dd-db2df2b004d4_2024-02-02T11-18-10Z.zip bundle.zip\n")),(0,a.kt)("h3",{id:"known-limitations"},"Known Limitations"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"Replacing the backing pod prevents the support bundle file from being downloaded."),(0,a.kt)("p",{parentName:"li"},"  The support bundle file is stored in the ",(0,a.kt)("inlineCode",{parentName:"p"},"/tmp")," folder of the pod's memory-based filesystem so it is removed when the pod is replaced during cluster and node rebooting, Kubernetes pod rescheduling, and other processes. After starting, the new pod regenerates the file but assigns a name that is different from the file name in the support bundle object."),(0,a.kt)("p",{parentName:"li"},"  Example:"),(0,a.kt)("ol",{parentName:"li"},(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"A support bundle file is generated and retained."),(0,a.kt)("pre",{parentName:"li"},(0,a.kt)("code",{parentName:"pre"},'$ kubectl get supportbundle -A -oyaml\napiVersion: v1\nitems:\n- apiVersion: harvesterhci.io/v1beta1\n  kind: SupportBundle\n  metadata:\n    creationTimestamp: "2024-02-06T11:01:19Z"\n    generation: 5\n    name: bundle-yr2vq\n    namespace: harvester-system\n    resourceVersion: "1583252"\n    uid: eb8538cf-886b-4791-a7b0-dbc34dcee524\n  spec:\n    description: sp2\n    issueURL: ""\n  status:\n    conditions:\n    - lastUpdateTime: "2024-02-06T11:01:47Z"\n      status: "True"\n      type: Initialized\n    filename: supportbundle_db25ccb6-b52a-4f9d-97dd-db2df2b004d4_2024-02-06T11-01-20Z.zip // file is ready to download\n    filesize: 7832010\n    progress: 100\n    state: ready\nkind: List\nmetadata:\n  resourceVersion: ""\n'))),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"The backing pod restarts."),(0,a.kt)("pre",{parentName:"li"},(0,a.kt)("code",{parentName:"pre"},"$ kubectl get pods -n harvester-system supportbundle-manager-bundle-yr2vq-c5484fbdf-9pz8d -oyaml\napiVersion: v1\nkind: Pod\nmetadata:\n...\n  labels:\n    app: support-bundle-manager\n    pod-template-hash: c5484fbdf\n    rancher/supportbundle: bundle-yr2vq\n  name: supportbundle-manager-bundle-yr2vq-c5484fbdf-9pz8d\n  namespace: harvester-system\n\n  containerStatuses:\n  - containerID: containerd://ea82b63875c18a2b5b36afea6a47a99a5efd26464f94d401cde1727d175ef740\n    ...\n    name: manager\n    ready: true\n    restartCount: 1\n    started: true\n    state:\n      running:\n        startedAt: \"2024-02-06T11:05:33Z\" // pod's latest starting timestamp, newer than the timestamp in support bundle's file name\n"))),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"The backing pod regenerates the file after it starts."),(0,a.kt)("p",{parentName:"li"},"The name of the regenerated file is different from the file name recorded in the support bundle object."),(0,a.kt)("pre",{parentName:"li"},(0,a.kt)("code",{parentName:"pre"},"$ kubectl exec -i -t -n harvester-system supportbundle-manager-bundle-yr2vq-c5484fbdf-9pz8d -- ls /tmp/support-bundle-kit -alth\ntotal 2.2M\ndrwxr-xr-x 3 root root 4.0K Feb  6 11:05 .\n-rw-r--r-- 1 root root 2.2M Feb  6 11:05 supportbundle_db25ccb6-b52a-4f9d-97dd-db2df2b004d4_2024-02-06T11-05-34Z.zip // different with above file name\n"))),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Attempts to download the regenerated file fail."),(0,a.kt)("p",{parentName:"li"}," The following download URL cannot be used to access the regenerated file."),(0,a.kt)("p",{parentName:"li"},(0,a.kt)("inlineCode",{parentName:"p"},"https://{vip/dns-name}/v1/harvester/supportbundles/bundle-yr2vq/download?retain=true"),".")))),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"Retained support bundle files may affect system and node rebooting, node draining, and system upgrades."),(0,a.kt)("p",{parentName:"li"}," Retained support bundle files are backed by pods in the ",(0,a.kt)("inlineCode",{parentName:"p"},"harvester-system")," namespace. These pods are replaced during system and node rebooting, node draining, and system upgrades, consuming CPU and memory resources. Moreover, the regenerated files are very similar in content to the retained files, which means that storage resources are also unnecessarily consumed."))),(0,a.kt)("p",null,"For more information, see ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/harvester/harvester/issues/3383"},"Issue 3383"),"."),(0,a.kt)("h2",{id:"access-embedded-rancher-and-longhorn-dashboards"},"Access Embedded Rancher and Longhorn Dashboards"),(0,a.kt)("p",null,(0,a.kt)("em",{parentName:"p"},"Available as of v1.1.0")),(0,a.kt)("p",null,"You can now access the embedded Rancher and Longhorn dashboards directly on the ",(0,a.kt)("inlineCode",{parentName:"p"},"Support")," page, but you must first go to the ",(0,a.kt)("inlineCode",{parentName:"p"},"Preferences")," page and check the ",(0,a.kt)("inlineCode",{parentName:"p"},"Enable Extension developer features")," box under ",(0,a.kt)("inlineCode",{parentName:"p"},"Advanced Features"),"."),(0,a.kt)("p",null,(0,a.kt)("img",{src:n(83377).Z,width:"3308",height:"1462"})),(0,a.kt)("admonition",{type:"note"},(0,a.kt)("p",{parentName:"admonition"},"We only support using the embedded Rancher and Longhorn dashboards for debugging and validation purposes.\nFor Rancher's multi-cluster and multi-tenant integration, please refer to the docs ",(0,a.kt)("a",{parentName:"p",href:"/v1.2/rancher/index"},"here"),".")),(0,a.kt)("h2",{id:"i-cant-access-harvester-after-i-changed-ssltls-enabled-protocols-and-ciphers"},"I can't access Harvester after I changed SSL/TLS enabled protocols and ciphers"),(0,a.kt)("p",null,"If you changed\n",(0,a.kt)("a",{parentName:"p",href:"/v1.2/advanced/index#ssl-parameters"},"SSL/TLS enabled protocols and ciphers settings"),"\nand you no longer have access to Harvester GUI and API,\nit's highly possible that NGINX Ingress Controller has stopped working due to the misconfigured SSL/TLS protocols and ciphers.\nFollow these steps to reset the setting:"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"Following ",(0,a.kt)("a",{parentName:"li",href:"/v1.2/faq"},"FAQ")," to SSH into Harvester node and switch to ",(0,a.kt)("inlineCode",{parentName:"li"},"root")," user.")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"$ sudo -s\n")),(0,a.kt)("ol",{start:2},(0,a.kt)("li",{parentName:"ol"},"Editing setting ",(0,a.kt)("inlineCode",{parentName:"li"},"ssl-parameters")," manually using ",(0,a.kt)("inlineCode",{parentName:"li"},"kubectl"),":")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"# kubectl edit settings ssl-parameters\n")),(0,a.kt)("ol",{start:3},(0,a.kt)("li",{parentName:"ol"},"Deleting the line ",(0,a.kt)("inlineCode",{parentName:"li"},"value: ...")," so that NGINX Ingress Controller\nwill use the default protocols and ciphers.")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},'apiVersion: harvesterhci.io/v1beta1\ndefault: \'{}\'\nkind: Setting\nmetadata:\n  name: ssl-parameters\n...\nvalue: \'{"protocols":"TLS99","ciphers":"WRONG_CIPHER"}\' # <- Delete this line\n')),(0,a.kt)("ol",{start:4},(0,a.kt)("li",{parentName:"ol"},"Save the change and you should see the following response after exit from the editor:")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"setting.harvesterhci.io/ssl-parameters edited\n")),(0,a.kt)("p",null,"You can further check the logs of Pod ",(0,a.kt)("inlineCode",{parentName:"p"},"rke2-ingress-nginx-controller")," to see if NGINX Ingress Controller is working correctly."),(0,a.kt)("h2",{id:"network-interfaces-are-not-showing-up"},"Network interfaces are not showing up"),(0,a.kt)("p",null,"You may need help finding the correct interface with a 10G uplink since the interface is not showing up. The uplink doesn't show up when the ixgbe module fails to load because an unsupported SFP+ module type is detected."),(0,a.kt)("h4",{id:"how-to-identify-the-issue-with-the-unsupported-sfp"},"How to identify the issue with the unsupported SFP?"),(0,a.kt)("p",null,"Execute the command ",(0,a.kt)("inlineCode",{parentName:"p"},"lspci | grep -i net")," to see the number of NIC ports connected to the motherboard. By running the command ",(0,a.kt)("inlineCode",{parentName:"p"},"ip a"),", you can gather information about the detected interfaces. If the number of detected interfaces is less than the number of identified NIC ports, then it's likely that the problem arises from using an unsupported SFP+ module."),(0,a.kt)("h5",{id:"testing"},"Testing"),(0,a.kt)("p",null,"You can perform a simple test to verify whether the unsupported SFP+ is the cause. Follow these steps on a running node:"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"Create the file ",(0,a.kt)("inlineCode",{parentName:"li"},"/etc/modprobe.d/ixgbe.conf")," manually with the content:")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"options ixgbe allow_unsupported_sfp=1\n")),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"Then run following command:")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"rmmod ixgbe && modprobe ixgbe\n")),(0,a.kt)("p",null,"If the above steps are successful and the missing interface shows, we can confirm that the issue is an unsupported SFP+. However, the above test is not permanent and will be flushed out once rebooted."),(0,a.kt)("h4",{id:"solution-1"},"Solution"),(0,a.kt)("p",null,"Due to support issues, Intel restricts the types of SFPs used on their NICs. To make the above changes persistent, adding the following content to a ",(0,a.kt)("a",{parentName:"p",href:"/v1.2/install/harvester-configuration"},"config.yaml")," during installation is recommended."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-YAML"},'os:\n  write_files:\n  - content: |\n     options ixgbe allow_unsupported_sfp=1\n    path: /etc/modprobe.d/ixgbe.conf\n  - content: |\n      name: "reload ixgbe module"\n      stages:\n        boot:\n          - commands:\n            - rmmod ixgbe && modprobe ixgbe\n    path: /oem/99_ixgbe.yaml\n')))}u.isMDXComponent=!0},97708:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/harvester-sb-support-button-481867fa7c7e1284b77c3a328cdc06ba.png"},57725:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/harvester-sb-support-link-37d8e3a1cf4a0db290c41adeea228f3a.png"},48289:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/harvester-sb-support-modal-2926ec28f3190a25f618cedfe7975687.png"},83377:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/support-access-embedded-ui-db8c2edddf3a26facf679c28492cb3e1.png"}}]);