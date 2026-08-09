---
title: Installer le panel web CentralCorp
description: Déployez le panel launcher Minecraft CentralCorp avec l’installer, PHP 8.2 et une base de données sur votre hébergement.
---

# Étape 3 : Installation du Panel

::: info 🎯 Objectif
Dans cette étape, nous allons mettre en place le panel web nécessaire au fonctionnement de votre launcher.
:::

## 1. Téléchargement des Fichiers 📥

1. Rendez-vous sur [le repository GitHub](https://github.com/CentralCorp/Installer/releases/latest)
2. Téléchargez le fichier `installer.zip`

::: tip ✨ C'est tout !
Simple et rapide, n'est-ce pas ? 😊
:::

## 2. Configuration du Serveur Web ⚙️

### Prérequis Techniques

::: warning ⚠️ Éléments Requis
Avant de continuer, assurez-vous d'avoir :
- ✅ Un serveur web avec PHP (min v8.2)
- ✅ Une base de données vierge
- ✅ Accès FTP/SFTP ou Web Filemanager
:::

### Étapes d'Installation

**1. Upload des Fichiers** 📤

Connectez-vous à votre serveur FTP/SFTP ou web filemanager et transférez l'installer.zip et extrayez le fichier.

::: warning ⚠️ Important
- N'hébergez **PAS** le panel sur le même serveur qu'Azuriom SAUF si vous utilisez [le plugin Azuriom](https://market.azuriom.com/resources/163)
- Utilisez un sous-domaine ou un hébergement séparé
:::

**2. Continuer l'installation** 💾

![CentralCorp Installer vérifiant l’hébergement du panel](/img/installer.png)

**3. Création du Compte Administrateur et base de données** 👤

![Création du compte administrateur du panel CentralCorp](/img/admincr.png)


::: danger ⚠️ Attention
Ces identifiants seront les seuls permettant d'accéder au panel administrateur.
Gardez-les en lieu sûr !
:::

::: tip ✅ Installation Terminée
Votre panel est maintenant prêt à être utilisé ! 🎉
:::

Poursuivez avec la [configuration du panel launcher Minecraft](/fr/install/step4) ou consultez l’explication complète du [Minecraft Launcher Panel](/fr/minecraft-launcher-panel).
