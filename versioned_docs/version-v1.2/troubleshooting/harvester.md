---
sidebar_position: 2
sidebar_label: Harvester
title: "Harvester"
---

<head>
  <link rel="canonical" href="https://docs.harvesterhci.io/v1.1/troubleshooting/harvester"/>
</head>

## Fail to Deploy a Multi-node Cluster Due to Incorrect HTTP Proxy Setting

### ISO Installation Without a Harvester Configuration File

#### Configure HTTP Proxy During Harvester Installation

In some environments, you configure [http-proxy](../airgap.md#configure-an-http-proxy-during-installation) of [OS Environment](../install/harvester-configuration.md#osenvironment) during Harvester installation.

#### Configure HTTP Proxy After First Node is Ready

After the first node is installed successfully, you login into the `Harvester GUI` to configure [http-proxy](../airgap.md#configure-an-http-proxy-in-harvester-settings) of [Harvester System Settings](../install/harvester-configuration.md#system_settings).

Then you continue to add more nodes to the cluster.

#### One Node Becomes Unavailable

The issue you may encounter:

```
The first node is installed successfully.

The second node is installed successfully.

The third node is installed successfully.

Then the second node changes to Unavialable state and cannot recover automatically.
```

#### Solution

When the nodes in the cluster do not use the HTTP Proxy to communicate with each other, after the first node is installed successfully, you need to configure [http-proxy.noProxy](../airgap.md#configure-an-http-proxy-in-harvester-settings) against the CIDR used by those nodes.

For example, your cluster assigns IPs from CIDR `172.26.50.128/27` to nodes via DHCP/static setting, please add this CIDR to `noProxy`.

After setting this, you can continue to add new nodes to the cluster.

For more details, please refer to [Harvester issue 3091](https://github.com/harvester/harvester/issues/3091).

### ISO Installation With a Harvester Configuration File

When a Harvester configuration file is used in ISO installation, please configure proper `http-proxy` in [Harvester System Settings](../install/harvester-configuration.md#system_settings).

### PXE Boot Installation

When [PXE Boot Installation](../install/pxe-boot-install.md) is adopted, please configure proper `http-proxy` in [OS Environment](../install/harvester-configuration.md#osenvironment) and [Harvester System Settings](../install/harvester-configuration.md#system_settings).

## Generate a Support Bundle

Users can generate a support bundle in the Harvester GUI with the following steps:

- Click the `Support` link at the bottom-left of Harvester Web UI.
    ![](/img/v1.2/troubleshooting/harvester-sb-support-link.png)

- Click `Generate Support Bundle` button.
    ![](/img/v1.2/troubleshooting/harvester-sb-support-button.png)

- Enter a useful description for the support bundle and click `Create` to generate and download a support bundle.
    ![](/img/v1.2/troubleshooting/harvester-sb-support-modal.png)

## Access Embedded Rancher and Longhorn Dashboards

_Available as of v1.1.0_

You can now access the embedded Rancher and Longhorn dashboards directly on the `Support` page, but you must first go to the `Preferences` page and check the `Enable Extension developer features` box under `Advanced Features`.

![](/img/v1.2/troubleshooting/support-access-embedded-ui.png)

:::note

We only support using the embedded Rancher and Longhorn dashboards for debugging and validation purposes.
For Rancher's multi-cluster and multi-tenant integration, please refer to the docs [here](../rancher/rancher-integration.md).

:::

## I can't access Harvester after I changed SSL/TLS enabled protocols and ciphers

If you changed
[SSL/TLS enabled protocols and ciphers settings](../advanced/settings.md#ssl-parameters)
and you no longer have access to Harvester GUI and API,
it's highly possible that NGINX Ingress Controller has stopped working due to the misconfigured SSL/TLS protocols and ciphers.
Follow these steps to reset the setting:

1. Following [FAQ](../faq.md) to SSH into Harvester node and switch to `root` user.
```
$ sudo -s
```
2. Editing setting `ssl-parameters` manually using `kubectl`:
```
# kubectl edit settings ssl-parameters
```
3. Deleting the line `value: ...` so that NGINX Ingress Controller
will use the default protocols and ciphers.
```
apiVersion: harvesterhci.io/v1beta1
default: '{}'
kind: Setting
metadata:
  name: ssl-parameters
...
value: '{"protocols":"TLS99","ciphers":"WRONG_CIPHER"}' # <- Delete this line
```
4. Save the change and you should see the following response after exit from the editor:
```
setting.harvesterhci.io/ssl-parameters edited
```

You can further check the logs of Pod `rke2-ingress-nginx-controller` to see if NGINX Ingress Controller is working correctly.


## Network interfaces are not showing up

You may need help finding the correct interface with a 10G uplink since the interface is not showing up. The uplink doesn't show up when the ixgbe module fails to load because an unsupported SFP+ module type is detected.

#### How to identify the issue with the unsupported SFP?

Execute the command `lspci | grep -i net` to see the number of NIC ports connected to the motherboard. By running the command `ip a`, you can gather information about the detected interfaces. If the number of detected interfaces is less than the number of identified NIC ports, then it's likely that the problem arises from using an unsupported SFP+ module.

##### Testing

You can perform a simple test to verify whether the unsupported SFP+ is the cause. Follow these steps on a running node:

1. Create the file `/etc/modprobe.d/ixgbe.conf` manually with the content:

```
options ixgbe allow_unsupported_sfp=1
```

1. Then run following command:

```
rmmod ixgbe && modprobe ixgbe
```

If the above steps are successful and the missing interface shows, we can confirm that the issue is an unsupported SFP+. However, the above test is not permanent and will be flushed out once rebooted.

#### Solution

Due to support issues, Intel restricts the types of SFPs used on their NICs. To make the above changes persistent, adding the following content to a [config.yaml](/install/harvester-configuration.md) during installation is recommended.

```YAML
os:
  write_files:
  - content: |
     options ixgbe allow_unsupported_sfp=1
    path: /etc/modprobe.d/ixgbe.conf
  - content: |
      name: "reload ixgbe module"
      stages:
        boot:
          - commands:
            - rmmod ixgbe && modprobe ixgbe
    path: /oem/99_ixgbe.yaml
```