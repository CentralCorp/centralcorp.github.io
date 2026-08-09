---
title: Minecraft Launcher Panel – Self-Hosted Launcher Management
description: Manage a custom Minecraft launcher with the self-hosted CentralCorp web panel, Azuriom authentication, Forge, Fabric, files and optional mods.
---

# Minecraft Launcher Panel

**CentralCorp Panel** is the web component of the CentralCorp ecosystem that administers and configures CentralCorp Launcher. As a **Minecraft Launcher Panel**, it gives administrators one interface for player authentication, file synchronization and Minecraft version settings on self-hosted infrastructure.

[Install CentralCorp](/en/install/prerequis) · [Preview CentralCorp Launcher](/en/preview) · [View CentralCorp Panel source](https://github.com/CentralCorp/centralpanel-v2)

## What is a Minecraft Launcher Panel?

A launcher management panel is separate from the desktop application installed by players. CentralCorp Panel stores launcher settings in a database and exposes dedicated endpoints for configuration, file manifests and optional mod information.

The launcher remains the player-facing application. It downloads those settings, verifies local files and starts Minecraft with the selected loader.

## Why manage a Minecraft launcher from the web?

The web panel lets administrators change routine settings without rebuilding the desktop application. The current panel covers the Minecraft version, loader, default memory, server, maintenance mode, access lists, interface settings and file delivery.

Because it is a **self-hosted Minecraft launcher** panel, you also decide where its database and downloadable files are stored.

## How CentralCorp works

1. The panel connects to Azuriom and stores launcher settings.
2. The launcher retrieves those settings and authenticates the player through Azuriom.
3. It compares the panel file manifest with local files and downloads changes.
4. The launch engine prepares the selected Minecraft version and loader.

The [CentralCorp Installer guide](/en/install/step3) covers the initial web deployment, while the [build guide](/en/install/step5) covers launcher distribution.

## CentralCorp Panel: the ecosystem’s web component

Verified administration areas include general configuration, Azuriom, servers, UI settings, security, user and role access lists, ignored files, optional mods, loaders, rich presence, administrator accounts, role backgrounds and panel updates.

Public launcher endpoints return configuration, the file manifest and optional mod metadata. Administrative routes require authentication.

## Customize your Minecraft launcher

The panel configures the main color, alerts, video content, game directory, memory defaults, role and currency display, default server, maintenance, access controls, rich presence and role backgrounds. The forked launcher repository controls application-specific settings such as its name, icon and publishing details.

[Read the launcher configuration guide](/en/install/step2).

## Azuriom integration

The standalone panel requires an Azuriom website URL and API key. It uses the API to synchronize servers and retrieve roles and users for access controls. The launcher authenticates players through Azuriom and consumes profile data used by several UI features.

The launcher also supports a configuration mode that talks directly to the CentralCorp Azuriom plugin.

## Forge and Fabric

Administrators select a Minecraft version and loader in the panel. Forge build information and Fabric loader versions can be retrieved from their respective metadata sources. The selected values are passed to the launcher engine. LegacyFabric, NeoForge and Quilt are also accepted by the current panel code.

Modpack compatibility still depends on the exact Minecraft version, loader and mods you choose.

## File management

The file manager publishes folders such as `mods`, `config` and `resources`. The panel generates a path, size, SHA-1 hash and URL for each distributed file. Administrators can exclude selected folders from the manifest.

[Configure launcher files in the panel](/en/install/step4).

## Optional mod management

The panel detects `.jar` files in the mods directory. An administrator can mark a mod as optional and add a name, description, recommendation and image. Players can then enable or disable those mods in the launcher.

## Automated launcher builds

Builds do not run inside the web panel. Electron Builder and the GitHub workflow in the Launcher repository produce Windows, Linux and macOS packages and attach them to a release.

[Follow the launcher build and distribution guide](/en/install/step5).

## Updates

The launcher contains an Electron release update flow. The panel separately checks its own repository releases and can install a compatible update package. These release cycles are managed independently.

## Self-hosting requirements

The web panel requires PHP 8.2 or newer, a database, the listed PHP extensions and writable storage. You choose the domain, hosting provider, backup policy and deployment process. In the documented standalone setup, the panel and Azuriom website use separate hosting locations unless the CentralCorp Azuriom plugin scenario applies.

## Install the Minecraft Launcher Panel

1. [Check the prerequisites](/en/install/prerequis).
2. [Fork the launcher repository](/en/install/step1).
3. [Configure the launcher](/en/install/step2).
4. [Deploy the panel with the installer](/en/install/step3).
5. [Configure Azuriom, files and mods](/en/install/step4).
6. [Build and distribute the launcher](/en/install/step5).

## Is CentralCorp free?

CentralCorp does not require a recurring CentralCorp software subscription. Hosting and third-party services may still cost money. The launcher uses CC BY-NC 4.0 and restricts commercial use, the panel uses CC0, and the installer uses MIT.

## Current limitations

- The launcher is designed for Azuriom authentication and offline-mode Minecraft servers; Microsoft online-mode servers are not supported.
- The standalone panel requires a configured Azuriom website, API key and compatible web hosting.
- Server maintenance, database backups and infrastructure security remain the operator's responsibility.
- The launcher's non-commercial license must be reviewed before commercial use.

## Frequently asked questions

### How do I create a custom Minecraft launcher?

Fork the Launcher repository, set its application and panel configuration, test locally, and use the documented GitHub build workflow to produce distributions.

### Can the panel manage mods?

Yes. It publishes game files and marks selected mods as optional for players.

### Is the source code available?

Yes. Public repositories are available for the [Launcher](https://github.com/CentralCorp/CentralCorp-Launcher), [Panel](https://github.com/CentralCorp/centralpanel-v2) and [Installer](https://github.com/CentralCorp/Installer), under different licenses.
