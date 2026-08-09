---
title: Launcher Minecraft gratuit avec panel web
description: Découvrez ce que CentralCorp fournit sans abonnement logiciel, les coûts d’hébergement, les licences et les étapes pour créer un launcher Minecraft.
---

# Créez gratuitement votre launcher Minecraft avec un panel web

CentralCorp permet de télécharger le code du launcher Minecraft, du panel web et de l’installer sans abonnement logiciel récurrent à CentralCorp. Cette page précise ce que signifie **launcher Minecraft gratuit** dans ce projet, les dépenses qui restent possibles et les licences à respecter.

[Commencer l’installation](/fr/install/prerequis) · [Découvrir le Minecraft Launcher Panel](/fr/minecraft-launcher-panel)

## Ce que CentralCorp fournit sans abonnement

Les repositories publics donnent accès à quatre éléments complémentaires :

- la documentation d’installation et de configuration ;
- le launcher Electron personnalisable utilisé par les joueurs ;
- le panel web Laravel qui administre le launcher ;
- l’installer qui vérifie l’hébergement et télécharge la release du panel.

CentralCorp ne demande pas d’abonnement logiciel récurrent pour télécharger et auto-héberger ces composants.

## Les coûts à prévoir

« Gratuit » ne signifie pas « infrastructure sans coût ». Le fonctionnement documenté demande un site Azuriom et, pour le panel autonome, un hébergement web séparé avec PHP, une base de données, un domaine ou sous-domaine et du stockage. Ces ressources peuvent être gratuites si vous les possédez déjà ou payantes auprès d’un prestataire.

Le plugin Azuriom CentralCorp et d’autres services tiers peuvent également avoir leur propre tarif. CentralCorp ne contrôle pas ces coûts.

## Des licences différentes selon le composant

Le **CentralCorp Launcher** est sous CC BY-NC 4.0. Son code source est disponible, mais la licence limite l’utilisation à des finalités non commerciales et impose l’attribution. Il ne faut donc pas qualifier l’ensemble CentralCorp de « 100 % open source ».

Le panel est publié sous CC0 et l’installer sous MIT. Le repository de documentation ne contient actuellement aucun fichier de licence. Vérifiez toujours le texte de licence du composant que vous utilisez.

## Un panel Minecraft gratuit à auto-héberger

Le panel web CentralCorp peut être installé sur votre propre serveur sans abonnement au logiciel CentralCorp. Vous contrôlez la base de données, les fichiers distribués, la configuration du launcher et les sauvegardes.

Cette autonomie implique aussi de maintenir PHP, la base de données, les certificats HTTPS et les mises à jour de sécurité de l’hébergement.

## Personnaliser le launcher

Le launcher permet de configurer son identité avant compilation et reçoit du panel les réglages courants : version Minecraft, Forge ou Fabric, mémoire, dossier de jeu, serveur, apparence, maintenance, accès, fichiers et mods optionnels.

Consultez le [guide de configuration du launcher Minecraft](/fr/install/step2) et l’[aperçu de l’application](/fr/preview).

## Azuriom, Forge et Fabric

L’authentification repose sur Azuriom. Le panel synchronise également des serveurs, rôles et utilisateurs via l’API configurée. Il permet de sélectionner Forge ou Fabric pour une version Minecraft, puis transmet le loader au launcher.

Le launcher cible les serveurs Minecraft en mode hors ligne liés à Azuriom. Il ne prend pas en charge les serveurs Microsoft en mode en ligne.

## Fichiers, mods et mises à jour

Le gestionnaire de fichiers du panel publie un manifeste utilisé par le launcher pour vérifier et télécharger les données du jeu. Les mods peuvent être décrits et rendus optionnels pour les joueurs. Les nouvelles versions du launcher sont compilées par le workflow GitHub du repository, puis récupérées par le mécanisme de mise à jour Electron.

## Créer votre launcher Minecraft étape par étape

1. [Préparez les outils et l’hébergement](/fr/install/prerequis).
2. [Forkez le code source du launcher](/fr/install/step1).
3. [Configurez le nom, le panel et le repository](/fr/install/step2).
4. [Installez le panel web](/fr/install/step3).
5. [Configurez Azuriom, les fichiers et les mods](/fr/install/step4).
6. [Compilez les distributions du launcher](/fr/install/step5).

## Choisir CentralCorp en connaissance de cause

CentralCorp convient à une équipe prête à administrer sa propre infrastructure et à respecter la licence non commerciale du launcher. Si vous avez besoin d’un usage commercial, vérifiez d’abord que votre projet est compatible avec la licence ou obtenez les autorisations nécessaires auprès des titulaires des droits.

## Questions fréquentes

### CentralCorp est-il 100 % gratuit ?

Non, cette formulation serait imprécise. Le logiciel CentralCorp ne demande pas d’abonnement récurrent, mais l’hébergement et des services tiers peuvent coûter de l’argent.

### Le launcher peut-il être utilisé commercialement ?

La licence CC BY-NC 4.0 du launcher restreint les usages commerciaux. Consultez la licence et demandez un avis adapté à votre situation si nécessaire.

### Le panel est-il auto-hébergeable ?

Oui. Le panel Laravel est conçu pour être installé sur un hébergement web compatible que vous administrez.

### Le code source est-il disponible ?

Oui. Le code des composants est public sur l’[organisation GitHub CentralCorp](https://github.com/CentralCorp), avec une licence propre à chaque repository.
