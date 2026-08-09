---
title: Configure CentralCorp Minecraft launcher panel
description: Connect the panel to Azuriom and manage the files, mods, configuration and resources synchronized by the Minecraft launcher.
---

# Step 4: Panel Configuration

::: info 🎯 Prerequisites
Make sure you have followed and completed step 3 regarding panel installation before continuing.
:::

## 1. Panel Login 🔐

1. Access your panel URL
2. Log in with your administrator credentials


## 2. Main Configuration 🎯

### Azuriom Site URL
![Azuriom configuration in CentralCorp Panel](/img/config.png)
::: warning ⚠️ Important Format
The URL must be entered **without** trailing slash:
- ✅ `https://yoursite.com`
- ❌ `https://yoursite.com/`

The API Key can be retrieved from your Azuriom site in the `API-extender` plugin.
:::

## 4. File Management 📁

### Via Panel

Access the panel file manager:
![CentralCorp file manager for Minecraft launcher files](/img/fileman.png)

```plaintext
/
├── mods/          # Your Minecraft mods
├── config/        # Configuration files
└── resources/     # Custom resources
```

### Via Azuriom Plugin

Access the FileManager plugin and open the `data` folder:

```plaintext
/data
├── mods/          # Your Minecraft mods
├── config/        # Configuration files
└── resources/     # Custom resources
```

::: tip ✅ Automatic Sync
All files placed in these directories will be automatically downloaded by your players when launching.
:::

## Let's Test the Launcher 🧪

Once you're here, you can try launching the launcher locally, run in the same terminal as step 2:

```bash
npm run dev
```

After validating the configuration, continue with the [launcher build and distribution guide](/en/install/step5).
