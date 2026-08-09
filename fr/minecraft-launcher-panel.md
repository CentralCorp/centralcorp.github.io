---
title: "Minecraft Launcher Panel : créer et gérer un launcher"
description: Gérez un launcher Minecraft depuis le panel web auto-hébergé CentralCorp avec Azuriom, Forge, Fabric, fichiers, mods et mises à jour.
---

# Minecraft Launcher Panel : gérez votre launcher Minecraft depuis le web

**CentralCorp Panel** est le composant web de l’écosystème CentralCorp qui administre et configure CentralCorp Launcher. En tant que **Minecraft Launcher Panel**, il centralise les réglages utilisés pour authentifier les joueurs, synchroniser les fichiers et lancer la bonne version de Minecraft depuis votre propre hébergement.

[Installer CentralCorp](/fr/install/prerequis) · [Voir CentralCorp Launcher](/fr/preview) · [Consulter CentralCorp Panel sur GitHub](https://github.com/CentralCorp/centralpanel-v2)

## Qu’est-ce qu’un Minecraft Launcher Panel ?

Un panel launcher Minecraft est une interface d’administration séparée de l’application installée par le joueur. Dans CentralCorp, le panel enregistre les paramètres en base de données et les expose au launcher par des routes dédiées. Il publie aussi le manifeste des fichiers à télécharger et les informations relatives aux mods optionnels.

Le panel ne remplace pas le launcher : les deux composants travaillent ensemble. Le launcher affiche l’interface au joueur, récupère la configuration, vérifie les fichiers et démarre Minecraft.

## Pourquoi utiliser un panel pour un launcher Minecraft ?

Une configuration web évite de recompiler l’application pour chaque changement courant. L’administrateur peut notamment modifier la version du jeu, le loader, la mémoire par défaut, le serveur, le mode maintenance, l’apparence ou la liste d’accès depuis le navigateur.

L’auto-hébergement permet également de choisir où résident la base de données et les fichiers distribués aux joueurs.

## Comment fonctionne CentralCorp ?

Le flux principal suit quatre étapes :

1. le panel se connecte à Azuriom et stocke la configuration du launcher ;
2. le launcher récupère cette configuration et authentifie le joueur via Azuriom ;
3. le launcher compare le manifeste du panel aux fichiers locaux et télécharge les changements ;
4. le moteur de lancement prépare la version Minecraft et le loader choisis.

L’[installer CentralCorp](/fr/install/step3) facilite le déploiement initial du panel, tandis que la [documentation de compilation](/fr/install/step5) explique la distribution du launcher.

## CentralCorp Panel : le composant web de l’écosystème

Le panel web comprend des écrans pour la configuration générale, l’intégration Azuriom, les serveurs, l’interface, la sécurité, les listes d’accès, les fichiers ignorés, les mods, les loaders, la présence enrichie, les utilisateurs administrateurs, les arrière-plans et les mises à jour.

Son gestionnaire de fichiers travaille dans l’espace de stockage public du panel. Les routes publiques nécessaires au launcher fournissent la configuration, le manifeste des fichiers et les mods optionnels ; l’administration reste protégée par authentification.

## Personnaliser votre launcher Minecraft

Les réglages vérifiés dans le panel couvrent notamment :

- la couleur principale, le message d’alerte et le contenu vidéo ;
- le dossier de jeu et les limites de mémoire proposées ;
- l’affichage du rôle et de la monnaie Azuriom ;
- le serveur par défaut et son icône ;
- le mode maintenance et la liste d’accès par joueur ou rôle ;
- la présence enrichie et les arrière-plans associés aux rôles.

Les éléments propres à l’application, comme son nom, son icône et les informations de publication, se configurent dans le fork du launcher avant compilation. Le [guide de configuration du launcher](/fr/install/step2) détaille ce point.

## Intégration Azuriom

Le panel demande l’URL du site Azuriom et une clé API. Il utilise l’API pour synchroniser les serveurs et proposer les utilisateurs et rôles dans la liste d’accès. Le launcher utilise l’authentification Azuriom, ainsi que les données de profil nécessaires à certaines fonctions d’interface.

Une clé et l’extension API documentée sont donc nécessaires au fonctionnement du panel autonome. Le projet prévoit aussi un mode dans lequel le launcher interroge directement le plugin Azuriom CentralCorp.

## Forge et Fabric

Le panel permet de choisir la version de Minecraft et un loader. Pour Forge, il récupère les builds disponibles pour la version sélectionnée. Pour Fabric, il récupère les versions du loader. Ces valeurs sont ensuite envoyées au launcher, qui les transmet à son moteur de lancement.

LegacyFabric, NeoForge et Quilt figurent également parmi les valeurs acceptées par le panel actuel. La compatibilité d’un modpack donné reste à tester avec la version Minecraft, le loader et les mods concernés.

## Gestion des fichiers

Le gestionnaire de fichiers sert à publier les dossiers tels que `mods`, `config` et `resources`. Le panel calcule pour chaque fichier son chemin, sa taille, son empreinte SHA-1 et son URL. Le launcher peut alors vérifier et récupérer les fichiers nécessaires.

Des dossiers peuvent être exclus du manifeste depuis l’administration. Consultez le guide [gérer les fichiers du launcher depuis le panel](/fr/install/step4).

## Gestion des mods

Le panel détecte les fichiers `.jar` présents dans le dossier `mods`. Un administrateur peut déclarer un mod comme optionnel et lui ajouter un nom, une description, une recommandation et une image. Le launcher présente ensuite ces choix au joueur et active ou désactive les fichiers correspondants localement.

## Builds du launcher

Le build du launcher n’est pas exécuté dans le panel. Il est assuré par le script Electron Builder et le workflow GitHub présents dans le repository Launcher. Le workflow produit des distributions Windows, Linux et macOS et les attache à une release.

[Suivre le guide de compilation du launcher Minecraft](/fr/install/step5).

## Mises à jour

Le launcher inclut un mécanisme Electron de détection, téléchargement et installation de ses releases. Le panel dispose séparément d’un écran de mise à jour qui recherche les packages publiés dans les releases de son repository. Ces deux cycles de publication doivent être gérés indépendamment.

## Auto-hébergement

Le **minecraft launcher web panel** s’installe sur un serveur web PHP 8.2 ou plus récent, avec une base de données et les extensions requises. Vous choisissez le domaine, l’hébergeur, le stockage et la politique de sauvegarde. Le site Azuriom et le panel autonome ne doivent pas partager la même installation, sauf dans le scénario du plugin Azuriom documenté.

## Installer le Minecraft Launcher Panel

Le parcours recommandé est le suivant :

1. [vérifier les prérequis](/fr/install/prerequis) ;
2. [créer le fork du launcher](/fr/install/step1) ;
3. [configurer le launcher](/fr/install/step2) ;
4. [déployer le panel avec l’installer](/fr/install/step3) ;
5. [configurer Azuriom, les fichiers et les mods](/fr/install/step4) ;
6. [compiler et distribuer le launcher](/fr/install/step5).

## CentralCorp est-il gratuit ?

Le téléchargement des repositories ne nécessite pas d’abonnement logiciel CentralCorp. Un hébergement reste nécessaire et certains plugins ou services tiers peuvent être payants. Le launcher est sous licence CC BY-NC 4.0 : son utilisation commerciale est restreinte. Le panel est publié sous CC0 et l’installer sous MIT.

La page [launcher Minecraft gratuit avec panel web](/fr/launcher-minecraft-gratuit) explique plus précisément les coûts et licences à anticiper.

## Limites actuelles

- le launcher est conçu pour l’authentification Azuriom et les serveurs Minecraft en mode hors ligne ; les serveurs Microsoft en mode en ligne ne sont pas pris en charge ;
- le panel autonome requiert un site Azuriom configuré, une clé API et un hébergement séparé dans le scénario documenté ;
- l’installation et la maintenance du serveur web, de la base de données et des sauvegardes restent sous votre responsabilité ;
- la licence non commerciale du launcher doit être examinée avant tout usage commercial.

## Questions fréquentes

### Comment créer un launcher Minecraft personnalisé ?

Forkez le repository Launcher, configurez son identité et l’URL du panel, installez les dépendances, testez-le localement puis utilisez le workflow de build documenté.

### Faut-il héberger CentralCorp ?

Oui. Le panel et ses fichiers doivent être accessibles au launcher. Vous êtes libre de choisir votre propre hébergement compatible.

### Peut-on gérer les mods depuis le panel ?

Oui. Le gestionnaire de fichiers publie les mods et l’écran dédié définit ceux que le joueur peut activer ou désactiver.

### Comment mettre à jour le launcher ?

Publiez une nouvelle version via le repository configuré. Le workflow génère les distributions et le mécanisme de mise à jour du launcher récupère la release.

### Où se trouve le code source ?

Les repositories publics sont disponibles pour le [Launcher](https://github.com/CentralCorp/CentralCorp-Launcher), le [Panel](https://github.com/CentralCorp/centralpanel-v2) et l’[Installer](https://github.com/CentralCorp/Installer).
