---
layout: home
title: CentralCorp — Minecraft Launcher, Web Panel & Installer
titleTemplate: false
description: CentralCorp brings together a customizable Minecraft launcher, a self-hosted web panel, an installer and the documentation needed to manage your infrastructure.

hero:
  name: CentralCorp
  text: Your launcher. Your panel. Your infrastructure.
  tagline: Build, customize and manage your Minecraft launcher with a complete ecosystem you control.
  actions:
    - theme: brand
      text: Install CentralCorp
      link: /en/install/prerequis
    - theme: alt
      text: View the Launcher
      link: /en/preview
    - theme: alt
      text: Explore the Panel
      link: /en/minecraft-launcher-panel

features:
  - title: CentralCorp Launcher
    details: Configure the interface, Minecraft version, memory, files and player launch experience.
    link: /en/preview
    linkText: View the launcher
  - title: CentralCorp Panel
    details: Manage the launcher configuration from a web panel deployed on your own hosting.
    link: /en/minecraft-launcher-panel
    linkText: Explore the panel
  - title: CentralCorp Installer
    details: Check requirements, install the panel, configure the launcher and build distributions.
    link: /en/install/prerequis
    linkText: Get started
  - title: CentralCorp documentation
    details: Follow the guides to prepare, configure, install and build every component in the ecosystem.
    link: /en/install/step1
    linkText: Read the guides
---

## The CentralCorp ecosystem

CentralCorp brings together four complementary components for building, deploying and managing a Minecraft launcher on infrastructure you control.

<div class="ecosystem-grid">
  <a class="ecosystem-card" href="/en/preview">
    <img src="/img/image.png" alt="CentralCorp Launcher interface">
    <span><strong>CentralCorp Launcher</strong><small>The desktop application used by players to synchronize files and start Minecraft.</small></span>
  </a>
  <a class="ecosystem-card" href="/en/minecraft-launcher-panel">
    <img src="/img/config.png" alt="CentralCorp Panel configuration">
    <span><strong>CentralCorp Panel</strong><small>The web component that centralizes and publishes the configuration consumed by the launcher.</small></span>
  </a>
  <a class="ecosystem-card" href="/en/install/prerequis">
    <img src="/img/installer.png" alt="CentralCorp Installer">
    <span><strong>CentralCorp Installer</strong><small>The tool that checks hosting before deploying a compatible panel release.</small></span>
  </a>
  <a class="ecosystem-card" href="/en/install/step1">
    <img src="/icon-512.png" alt="CentralCorp documentation">
    <span><strong>CentralCorp documentation</strong><small>The preparation, installation, configuration and build guides for the ecosystem.</small></span>
  </a>
</div>

## Your Minecraft launcher, under your control

CentralCorp is an ecosystem for teams that want to create and distribute a **custom Minecraft launcher** while controlling its deployment. The Electron launcher is the player-facing application. Its name, colors, game directory, memory, server and several interface elements can be configured.

[Preview CentralCorp Launcher](/en/preview) or browse the [available launcher source code](https://github.com/CentralCorp/CentralCorp-Launcher).

## CentralCorp Panel: manage your launcher from the web

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

## Install the CentralCorp ecosystem

The [CentralCorp Installer](https://github.com/CentralCorp/Installer) checks PHP, required extensions, write permissions and URL rewriting before downloading the latest compatible panel release. The documentation then guides launcher configuration and builds.

[Start with the CentralCorp prerequisites](/en/install/prerequis).

## From deployment to launch

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
