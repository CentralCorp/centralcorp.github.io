# Étape 3 : Installation du Panel 

!!! info "Objectif"
    Dans cette étape, nous allons mettre en place le panel web nécessaire au fonctionnement de votre launcher.

## 1. Téléchargement des Fichiers 📥

=== "Option 1 : GitHub"
    1. Rendez-vous sur [:octicons-mark-github-16: le repository](https://github.com/Riptiaz/CentralCorp-Panel)
    2. Cliquez sur le bouton vert "Code"
    3. Sélectionnez "Download ZIP"
    4. Extrayez l'archive sur votre bureau

    !!! success "C'est tout !"
        Simple et rapide, n'est-ce pas ? 😊


## 2. Configuration du Serveur Web ⚙️

### Prérequis Techniques

!!! warning "Éléments Requis"
    Avant de continuer, assurez-vous d'avoir :

    - [x] Un serveur web avec PHP (min v8.2)
    - [x] Une base de données vierge
    - [x] Accès FTP/SFTP ou Web Filemanager

!!! tip "Hébergement Recommandé"
    Nous recommandons [HWHost](https://hwhost.fr/) qui propose :

    - ✅ Compatibilité garantie
    - ✅ Tous les prérequis inclus
    - ✅ Plan gratuit disponible

### Étapes d'Installation

1. **Upload des Fichiers** 📤
    - Connectez-vous à votre serveur FTP/SFTP ou web filemanager
    - Transférez tous les fichiers du panel

    !!! warning "Important"
        - N'hébergez PAS le panel sur le même serveur qu'Azuriom
        - Utilisez un sous-domaine ou un hébergement séparé
        - Pour certains hébergeurs, uploadez dans le dossier `httpdocs`

2. **Configuration de la Base de Données** 💾
    - Accédez à votre panel via l'URL de votre serveur web
    - Remplissez les informations de votre base de données

3. **Création du Compte Administrateur** 👤
    - Créez votre compte administrateur
    - Conservez précieusement vos identifiants

    !!! danger "Attention"
        Ces identifiants seront les seuls permettant d'accéder au panel administrateur.
        Gardez-les en lieu sûr !

!!! success "Installation Terminée"
    Votre panel est maintenant prêt à être utilisé ! 🎉

[:octicons-arrow-right-24: Passer à l'étape suivante](){ .md-button .md-button--primary }
