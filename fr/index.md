---
layout: home
title: CentralCorp — Launcher Minecraft, Panel Web & Installer
titleTemplate: false
description: CentralCorp réunit un launcher Minecraft personnalisable, un panel web auto-hébergé, un installer et la documentation nécessaire pour gérer votre infrastructure.

hero:
  name: CentralCorp
  text: Votre launcher. Votre panel. Votre infrastructure.
  tagline: Créez, personnalisez et administrez votre launcher Minecraft avec un écosystème complet que vous contrôlez.
  actions:
    - theme: brand
      text: Installer CentralCorp
      link: /fr/install/prerequis
    - theme: alt
      text: Voir le Launcher
      link: /fr/preview
    - theme: alt
      text: Découvrir le Panel
      link: /fr/minecraft-launcher-panel

features:
  - title: CentralCorp Launcher
    details: Configurez l’interface, les versions de Minecraft, la mémoire, les fichiers et l’expérience de lancement.
    link: /fr/preview
    linkText: Voir le launcher
  - title: CentralCorp Panel
    details: Administrez la configuration du launcher depuis votre propre hébergement web.
    link: /fr/minecraft-launcher-panel
    linkText: Explorer le panel
  - title: CentralCorp Installer
    details: Vérifiez les prérequis, installez le panel, configurez le launcher puis compilez vos distributions.
    link: /fr/install/prerequis
    linkText: Commencer
  - title: Documentation CentralCorp
    details: Suivez les guides pour préparer, configurer, installer et compiler les composants de l’écosystème.
    link: /fr/install/step1
    linkText: Lire les guides
---

## L’écosystème CentralCorp

CentralCorp rassemble quatre composants complémentaires pour créer, déployer et administrer un launcher Minecraft depuis une infrastructure maîtrisée.

<div class="ecosystem-grid">
  <a class="ecosystem-card" href="/fr/preview">
    <img src="/img/image.png" alt="Interface de CentralCorp Launcher">
    <span><strong>CentralCorp Launcher</strong><small>L’application desktop utilisée par les joueurs pour synchroniser les fichiers et lancer Minecraft.</small></span>
  </a>
  <a class="ecosystem-card" href="/fr/minecraft-launcher-panel">
    <img src="/img/config.png" alt="Configuration de CentralCorp Panel">
    <span><strong>CentralCorp Panel</strong><small>Le composant web qui centralise et publie la configuration consommée par le launcher.</small></span>
  </a>
  <a class="ecosystem-card" href="/fr/install/prerequis">
    <img src="/img/installer.png" alt="CentralCorp Installer">
    <span><strong>CentralCorp Installer</strong><small>L’outil qui vérifie l’hébergement avant de déployer une release compatible du panel.</small></span>
  </a>
  <a class="ecosystem-card" href="/fr/install/step1">
    <img src="/icon-512.png" alt="Documentation CentralCorp">
    <span><strong>Documentation CentralCorp</strong><small>Les guides de préparation, d’installation, de configuration et de compilation de l’écosystème.</small></span>
  </a>
</div>

## Votre launcher Minecraft, sous votre contrôle

CentralCorp est un écosystème pour les équipes qui souhaitent **créer un launcher Minecraft** et conserver la maîtrise de son déploiement. Le launcher Electron est l’application utilisée par les joueurs. Son nom, ses couleurs, son dossier de jeu, sa mémoire, son serveur et plusieurs éléments d’interface sont configurables.

[Découvrez l’interface du CentralCorp Launcher](/fr/preview) ou consultez le [code source disponible du launcher](https://github.com/CentralCorp/CentralCorp-Launcher).

## CentralCorp Panel : gérez votre launcher depuis le web

Le **Minecraft Launcher Panel** CentralCorp est l’interface d’administration du launcher. Ce panel web Laravel expose la configuration consommée par l’application : version de Minecraft, loader, fichiers, mods optionnels, maintenance, liste d’accès, serveur par défaut, apparence et présence enrichie.

[Comprendre le panel web pour launcher Minecraft](/fr/minecraft-launcher-panel).

## Intégration avec Azuriom

CentralCorp utilise l’authentification Azuriom. Le panel se connecte à un site Azuriom avec son URL et une clé API afin de synchroniser les serveurs, les rôles et les utilisateurs nécessaires aux fonctions du launcher. Une utilisation directe avec le plugin Azuriom CentralCorp est également prévue dans la configuration du launcher.

Cette intégration cible les infrastructures Minecraft en mode hors ligne reliées à Azuriom ; le launcher ne prend pas en charge les serveurs Microsoft en mode en ligne.

## Forge, Fabric et versions Minecraft

Depuis le panel, vous choisissez la version de Minecraft et le loader transmis au launcher. Forge et Fabric sont pris en charge, avec récupération des builds Forge et des versions du loader Fabric. Le code accepte également LegacyFabric, NeoForge et Quilt.

## Gérez vos mods et fichiers

Le gestionnaire de fichiers du panel alimente le manifeste téléchargé par le launcher. Les administrateurs peuvent organiser les mods, configurations et ressources, exclure certains dossiers de la vérification et déclarer des mods optionnels avec un nom, une description, une recommandation et une image.

[Configurer les fichiers et les mods du launcher](/fr/install/step4).

## Builds et mises à jour

Le repository du launcher contient un workflow GitHub qui crée une release et compile les distributions Windows, Linux et macOS après un push sur la branche prévue. L’application utilise aussi son mécanisme de mise à jour Electron. Le panel possède de son côté un système de mise à jour depuis ses releases.

[Compiler et distribuer votre launcher Minecraft](/fr/install/step5).

## Un launcher Minecraft sans abonnement logiciel CentralCorp

Les repositories CentralCorp peuvent être téléchargés sans abonnement logiciel récurrent à CentralCorp. Cela ne signifie pas que toute l’infrastructure est sans coût : un hébergement pour Azuriom et un hébergement adapté au panel restent nécessaires, et certains services ou plugins tiers peuvent être payants.

La licence varie selon le composant. Le launcher est publié sous CC BY-NC 4.0, qui réserve les usages commerciaux, tandis que le panel est sous CC0 et l’installer sous MIT. Consultez toujours la licence du repository concerné avant utilisation. La page [launcher Minecraft gratuit avec panel web](/fr/launcher-minecraft-gratuit) détaille ce périmètre.

## Gardez le contrôle de votre infrastructure

Le panel est **auto-hébergeable** : vous choisissez le serveur web, la base de données, le domaine et la manière de publier les fichiers. Vous gardez ainsi le contrôle de la configuration, du stockage et des mises à jour de votre panel launcher Minecraft.

## Installer l’écosystème CentralCorp

Le [CentralCorp Installer](https://github.com/CentralCorp/Installer) vérifie notamment la version de PHP, les extensions requises, les droits d’écriture et la réécriture d’URL, puis télécharge la dernière release compatible du panel. Le guide complet couvre ensuite la configuration et le build du launcher.

[Vérifier les prérequis et installer CentralCorp](/fr/install/prerequis).

## Du déploiement au lancement

1. **Documentation** : elle guide l’installation, la configuration et la compilation.
2. **Launcher** : l’application Electron authentifie le joueur via Azuriom, synchronise les fichiers et lance Minecraft.
3. **Panel** : l’interface web Laravel centralise les paramètres servis au launcher.
4. **Installer** : il vérifie l’hébergement et déploie la release du panel.

## Questions fréquentes

### Qu’est-ce qu’un Minecraft Launcher Panel ?

C’est une interface web d’administration qui fournit au launcher Minecraft sa configuration, ses fichiers et les paramètres nécessaires à son fonctionnement. Avec CentralCorp, le panel est hébergé sur votre propre infrastructure.

### CentralCorp est-il gratuit ?

CentralCorp ne demande pas d’abonnement logiciel récurrent. L’hébergement et certains services tiers peuvent cependant avoir un coût. La licence non commerciale du launcher doit aussi être respectée.

### CentralCorp fonctionne-t-il avec Azuriom ?

Oui. L’authentification du launcher et plusieurs données du panel s’appuient sur Azuriom et son API.

### Forge et Fabric sont-ils supportés ?

Oui. Le panel configure Forge ou Fabric et le launcher transmet ce choix au moteur de lancement Minecraft.

### Peut-on gérer les mods depuis le panel ?

Oui. Le panel gère les fichiers du jeu et permet de déclarer les mods proposés comme optionnels dans le launcher.

### Le code source est-il disponible ?

Oui, les repositories [Launcher](https://github.com/CentralCorp/CentralCorp-Launcher), [Panel](https://github.com/CentralCorp/centralpanel-v2) et [Installer](https://github.com/CentralCorp/Installer) sont publics. Leurs licences ne sont pas identiques.
