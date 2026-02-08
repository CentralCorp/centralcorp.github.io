# Step 2: Global Configuration

::: info 🎯 Objective
In this step, we will configure the basic settings of your launcher in the `package.json` file.
:::

## Opening the Project 📂

1. Once cloning is complete, click on "Open in Visual Studio Code"
2. Your editor will open with the launcher base

## Configuring package.json 🔧

::: tip 📁 File to modify
Locate and open the `package.json` file in your editor.
:::

### Main Parameters

```json
{
  "name": "your-launcher",           // Technical name of the launcher
  "productName": "My Launcher",      // Name displayed on desktop
  "version": "1.0.0",                // Your launcher version
  "description": "Description...",   // Hover description
  "author": "Your-Pseudo, Riptiaz/Boulldogo/Vexato/Luuxis"
}
```

::: warning ⚠️ Important
The version you define here:
- Is **NOT** your Minecraft version
- Will be used for compilation
- Must follow semver format (X.Y.Z)
:::

::: danger ❌ Warning
Do not remove the luuxis/Riptiaz credits, just add your name ❤️
Removing original credits will result in a ban.
:::

### Server Parameters

```json
{
  "env": "panel",                    // panel or azuriom
  "settings": "https://yoursite.eu/" // Your panel URL
}
```

::: info 💡 Environment Type
- `"panel"` if you use the panel
- `"azuriom"` if you use [the Azuriom plugin](https://market.azuriom.com/resources/163) (Paid)
:::

### GitHub Parameters

```json
{
  "repository": {
    "type": "git",
    "url": "git+https://github.com/mypseudo/myserver-Launcher.git"
  }
}
```

::: warning ⚠️ Required
Replace the URL with your FORK's URL. This is mandatory for compilation and auto-update.
:::

## Installing Dependencies 📦

Open a terminal in VS Code and run:

```bash
npm install
```

::: tip ✅ Verification
Installation is successful if you don't see any errors in the terminal. Otherwise, check your Node.js installation.
:::