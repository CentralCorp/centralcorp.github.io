---
title: Forker le code source de CentralCorp Launcher
description: Créez votre fork public du launcher Minecraft CentralCorp, clonez le code source et préparez sa configuration locale.
---

# Étape 1 : Configuration GitHub

::: info 🎯 Objectif
Dans cette étape, nous allons forker le projet CentralCorp Launcher et le cloner sur votre machine locale.
:::

## 1. Forker le Projet 🔄

::: danger ⚠️ Licence
Le launcher est publié sous CC BY-NC 4.0. Conservez l’attribution, indiquez vos modifications et vérifiez la restriction d’usage commercial avant de partager votre version. Le terme « open source » ne décrit pas précisément cette licence non commerciale.
:::

### Instructions

1. Rendez-vous sur [ce lien](https://github.com/CentralCorp/CentralCorp-Launcher/fork) pour forker le projet

::: tip ✅ Vérification
Après le fork, vous devriez voir le projet dans votre compte GitHub avec la mention "forked from CentralCorp/CentralCorp-Launcher"
:::

## 2. Cloner le Projet 💻

::: code-group

```bash [GitHub Desktop]
# 1. Créez un dossier vide sur votre PC
# 2. Ouvrez GitHub Desktop
# 3. Cliquez sur File > Clone Repository
# 4. Sélectionnez le dossier créé
# 5. Choisissez le repository forké du CentralCorp Launcher
# 6. Cliquez sur "Clone"
```

```bash [Git CLI]
# PLUS COMPLIQUÉ QUE GitHub Desktop
# Créez et accédez au dossier
mkdir centralcorp-launcher
cd centralcorp-launcher

# Clonez le repository
git clone https://github.com/VOTRE-USERNAME/VOTRE-REPO.git .
```

:::

::: tip 💡 Conseil
Assurez-vous d'avoir [Git](https://git-scm.com/) installé sur votre machine avant de commencer le clonage.
:::

## Prochaines Étapes 🎯

Une fois le clonage terminé, vous aurez une copie locale du projet sur votre machine. 🚀

Vous pourrez ensuite [configurer votre launcher Minecraft](/fr/install/step2). Pour une vue d’ensemble, consultez la page [Minecraft Launcher Panel](/fr/minecraft-launcher-panel).

::: info ❓ Besoin d'aide ?
Si vous rencontrez des problèmes, n'hésitez pas à :
- Vérifier les [issues GitHub](https://github.com/CentralCorp/CentralCorp-Launcher/issues)
- Rejoindre notre [Discord](https://discord.gg/VCmNXHvf77)
:::
