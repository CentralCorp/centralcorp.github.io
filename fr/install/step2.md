---
title: Configurer CentralCorp Minecraft Launcher
description: Configurez le nom, la version, le panel web, Azuriom et le repository de votre launcher Minecraft CentralCorp.
---

# Étape 2 : Configuration Globale

::: info 🎯 Objectif
Dans cette étape, nous allons configurer les paramètres de base de votre launcher dans le fichier `package.json`.
:::

## Ouverture du Projet 📂

1. Une fois le clonage terminé, cliquez sur "Open in Visual Studio Code"
2. Votre éditeur s'ouvrira avec la base du launcher

## Configuration du package.json 🔧

::: tip 📁 Fichier à modifier
Localisez et ouvrez le fichier `package.json` dans votre éditeur.
:::

### Paramètres Principaux

```json
{
  "name": "votre-launcher",          // Nom technique du launcher
  "preductname": "Mon Launcher",     // Clé actuellement lue par le script de build
  "version": "1.0.0",                // Version de votre launcher
  "description": "Description...",   // Description au survol
  "author": "Votre-Pseudo, Riptiaz/Boulldogo/Vexato/Luuxis"
}
```

::: warning ⚠️ Important
La version que vous définissez ici :
- N'est **PAS** votre version de Minecraft
- Sera utilisée pour la compilation
- Doit suivre le format semver (X.Y.Z)
:::

::: danger ❌ Attribution
Conservez les crédits existants et ajoutez votre nom sans retirer les auteurs d’origine, conformément à l’obligation d’attribution de la licence.
:::

### Paramètres Serveur

```json
{
  "env": "panel",                    // panel ou azuriom
  "settings": "https://votresite.eu/" // URL de votre panel
}
```

::: info 💡 Type d'environnement
- `"panel"` si vous utilisez le panel
- `"azuriom"` si vous utilisez [le plugin Azuriom](https://market.azuriom.com/resources/163) (Payant)
:::

### Paramètres GitHub

```json
{
  "repository": {
    "type": "git",
    "url": "git+https://github.com/monpseudo/monserveur-Launcher.git"
  }
}
```

::: warning ⚠️ Obligatoire
Remplacez l'URL par celle de votre FORK. Cela est obligatoire pour la compilation et l'auto-update.
:::

## Installation des Dépendances 📦

Ouvrez un terminal dans VS Code et exécutez :

```bash
npm install
```

::: tip ✅ Vérification
L'installation est réussie si vous ne voyez pas d'erreurs dans le terminal. Sinon, vérifiez votre installation de Node.js.
:::

Une fois le launcher configuré, [installez le panel web CentralCorp](/fr/install/step3) qui lui fournira ses paramètres et ses fichiers.
