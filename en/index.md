---
layout: home
title: Minecraft launcher with a self-hosted web panel
description: Build, customize and manage a Minecraft launcher with the self-hosted CentralCorp web panel, Azuriom, Forge and Fabric.

hero:
  name: CentralCorp
  text: Minecraft launcher with a web panel
  tagline: Build, customize and manage your Minecraft launcher from infrastructure you control.
  image:
    src: /img/logo.png
    alt: CentralCorp Minecraft Launcher
  actions:
    - theme: brand
      text: Use CentralCorp
      link: /en/install/prerequis
    - theme: alt
      text: Explore the panel
      link: /en/minecraft-launcher-panel
    - theme: alt
      text: View the launcher
      link: https://github.com/CentralCorp/CentralCorp-Launcher
    - theme: alt
      text: CentralCorp on GitHub
      link: https://github.com/CentralCorp

features:
  - icon: 🖥️
    title: Custom Minecraft launcher
    details: Configure the interface, Minecraft version, memory, files and player launch experience.
    link: /en/preview
    linkText: View the launcher
  - icon: ⚙️
    title: Self-hosted web panel
    details: Manage the launcher configuration from a web panel deployed on your own hosting.
    link: /en/minecraft-launcher-panel
    linkText: Explore the panel
  - icon: 📦
    title: Guided installation
    details: Check requirements, install the panel, configure the launcher and build distributions.
    link: /en/install/prerequis
    linkText: Get started
---

## Build a custom Minecraft launcher

CentralCorp is an ecosystem for teams that want to create and distribute a **custom Minecraft launcher** while controlling its deployment. The Electron launcher is the player-facing application. Its name, colors, game directory, memory, server and several interface elements can be configured.

[Preview CentralCorp Launcher](/en/preview) or browse the [available launcher source code](https://github.com/CentralCorp/CentralCorp-Launcher).

## Manage the launcher from a web panel

CentralCorp Panel is a **Minecraft launcher management panel** built with Laravel. It provides the configuration consumed by the launcher: Minecraft and loader versions, files, optional mods, maintenance settings, access lists, the default server, UI settings and rich presence.

[Learn how the Minecraft Launcher Panel works](/en/minecraft-launcher-panel).

## Azuriom integration

CentralCorp uses Azuriom authentication. The panel connects to an Azuriom website with its URL and an API key to synchronize server, role and user data used by the launcher. The launcher can also be configured to use the CentralCorp Azuriom plugin directly.

This integration targets offline-mode Minecraft server setups connected to Azuriom. Microsoft online-mode servers are not supported by the launcher.

## Forge, Fabric and Minecraft versions

Administrators select the Minecraft version and loader in the panel. Forge and Fabric are supported, including Forge build lookup and Fabric loader version lookup. The current code also accepts LegacyFabric, NeoForge and Quilt.

## Manage mods and files

The panel file manager supplies the manifest downloaded by the launcher. Administrators can organize mods, configuration and resources, exclude selected folders from verification, and mark mods as optional with a name, description, recommendation and image.

[Configure launcher files and mods](/en/install/step4).

## Automated builds and updates

The launcher repository includes a GitHub workflow that creates a release and builds Windows, Linux and macOS packages after a push to the configured branch. The app uses Electron updates, while the web panel has its own release-based update flow.

[Build and distribute the launcher](/en/install/step5).

## Self-hosted software without a CentralCorp subscription

CentralCorp repositories can be downloaded without a recurring CentralCorp software subscription. Hosting is still required for Azuriom and the standalone panel, and third-party services or plugins may have their own costs.

Licensing differs by component. The launcher uses CC BY-NC 4.0 and restricts commercial use, the panel uses CC0, and the installer uses MIT. Review the relevant repository license before deploying the software.

The [free Minecraft launcher panel guide](/en/free-minecraft-launcher-panel) explains this scope, hosting costs and licensing in more detail.

## Keep control of your infrastructure

The panel is self-hosted. You choose the web server, database, domain, file storage and deployment process, keeping control of the launcher configuration and delivery infrastructure.

## Install CentralCorp

The [CentralCorp Installer](https://github.com/CentralCorp/Installer) checks PHP, required extensions, write permissions and URL rewriting before downloading the latest compatible panel release. The documentation then guides launcher configuration and builds.

[Start with the CentralCorp prerequisites](/en/install/prerequis).

## How the CentralCorp ecosystem fits together

1. **Documentation** covers installation, configuration and builds.
2. **Launcher** authenticates through Azuriom, synchronizes files and starts Minecraft.
3. **Panel** is the self-hosted administration interface for launcher settings.
4. **Installer** checks the hosting environment and deploys the panel release.

## Frequently asked questions

### What is a Minecraft Launcher Panel?

It is a web administration interface that supplies a Minecraft launcher with its configuration, files and runtime settings. CentralCorp Panel runs on hosting you control.

### Is CentralCorp free?

CentralCorp does not require a recurring software subscription. Hosting and third-party services may still cost money, and the launcher's non-commercial license must be respected.

### Does CentralCorp work with Azuriom?

Yes. Launcher authentication and several panel data flows rely on Azuriom and its API.

### Are Forge and Fabric supported?

Yes. The panel configures Forge or Fabric and sends that configuration to the launcher.

### Can the panel manage mods?

Yes. It manages game files and lets administrators identify mods that players may enable or disable in the launcher.

### Is the source code available?

Yes. The [Launcher](https://github.com/CentralCorp/CentralCorp-Launcher), [Panel](https://github.com/CentralCorp/centralpanel-v2) and [Installer](https://github.com/CentralCorp/Installer) repositories are public, under different licenses.
