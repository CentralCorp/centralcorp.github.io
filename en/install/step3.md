---
title: Install CentralCorp web panel
description: Deploy the CentralCorp Minecraft launcher panel with the installer, PHP 8.2 and a database on compatible hosting.
---

# Step 3: Panel Installation

::: info 🎯 Objective
In this step, we will set up the web panel required for your launcher to work.
:::

## 1. Downloading Files 📥

1. Go to [the GitHub repository](https://github.com/CentralCorp/Installer/releases/latest)
2. Download the `installer.zip` file

::: tip ✨ That's it!
Simple and quick, isn't it? 😊
:::

## 2. Web Server Configuration ⚙️

### Technical Requirements

::: warning ⚠️ Required Elements
Before continuing, make sure you have:
- ✅ A web server with PHP (min v8.2)
- ✅ An empty database
- ✅ FTP/SFTP or Web Filemanager access
:::

### Installation Steps

**1. File Upload** 📤

Connect to your FTP/SFTP or web filemanager and upload the installer.zip file and extract it.

::: warning ⚠️ Important
- Do **NOT** host the panel on the same server as Azuriom
- Use a subdomain or separate hosting
:::

**2. Continue the installation** 💾

![CentralCorp Installer checking panel hosting](/img/installer.png)

**3. Administrator Account and Database Creation** 👤

![Creating the CentralCorp Panel administrator account](/img/admincr.png)


::: danger ⚠️ Warning
These credentials will be the only ones allowing access to the admin panel.
Keep them safe!
:::

::: tip ✅ Installation Complete
Your panel is now ready to use! 🎉
:::

Continue with the [Minecraft launcher panel configuration](/en/install/step4), or read the full [Minecraft Launcher Panel overview](/en/minecraft-launcher-panel).
