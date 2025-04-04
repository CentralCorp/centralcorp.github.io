# Étape 4 : Configuration du Panel 

!!! info "Prérequis"
    Assurez-vous d'avoir suivi et complété l'étape 3 concernant l'installation du panel avant de continuer.

## 1. Connexion au Panel 🔐

1. Accédez à l'URL de votre panel
2. Connectez-vous avec vos identifiants administrateur

## 2. Types de Configuration ⚙️

Le panel propose trois types de configurations :

=== "Configurations Textuelles"
    - Permettent d'écrire ou coller du texte
    - Sont directement affichées dans le launcher
    - Idéales pour les descriptions et messages

=== "Configurations Sélectives"
    - Options à cocher/décocher
    - Interface simple et intuitive
    - Parfaites pour les fonctionnalités optionnelles

=== "Configurations Déroulantes"
    - Menu déroulant avec options prédéfinies
    - Choix parmi plusieurs possibilités
    - Utiles pour les sélections de versions

## 3. Configuration Principale 🎯

=== "Configuration via Panel"
    ### URL du Site Azuriom

    !!! warning "Format Important"
        L'URL doit être saisie sans slash final :
        
        ✅ `https://votresite.fr`
        ❌ `https://votresite.fr/`

        Vous pouvez tester votre URL avec le bouton de vérification.

    

=== "Configuration via Plugin Azuriom"
    !!! info "Plugin Requis"
        Assurez-vous d'avoir installé et activé le plugin FileManager sur votre site Azuriom.
### Type de Loader

!!! tip "Configuration de Forge"
    1. Rendez-vous sur [:fontawesome-brands-java: le site officiel de Forge](https://files.minecraftforge.net/net/minecraftforge/forge/)
    2. Sélectionnez votre version de Minecraft
    3. Choisissez une version recommandée (ex: `1.21.4 - 54.1.3`)
    !!! example "Versions Recommandées"
        Privilégiez toujours les versions marquées "Recommended" pour une meilleure stabilité.
Vérifiez les autres paramètres/catégories du panel afin de le configurer complètement et d’en profiter un maximum.

## 4. Gestion des Fichiers 📁

=== "Via Panel"
    1. Accédez au gestionnaire de fichiers du panel (`votreurl.fr/file`)
    2. Organisez vos fichiers comme un dossier `.minecraft` :

    ```plaintext
    /
    ├── mods/          # Vos mods Minecraft
    ├── config/        # Fichiers de configuration
    └── resources/     # Ressources personnalisées
    ```

=== "Via Plugin Azuriom"
    1. Accédez au plugin FileManager
    2. Ouvrez le dossier 'data'
    3. Organisez vos fichiers ainsi :

    ```plaintext
    /data
    ├── mods/          # Vos mods Minecraft
    ├── config/        # Fichiers de configuration
    └── resources/     # Ressources personnalisées
    ```

    !!! warning "En cas d'erreur avec le plugin Filemanager"
        contactez le support discord

!!! success "Synchronisation Automatique"
    Tous les fichiers placés dans ces répertoires seront automatiquement téléchargés par vos joueurs lors du lancement.

!!! info "Testons le launcher"
    Une fois arrivé ici, vous pouvez essayer de lancer le launcher.
    Exécutez cette commande dans le terminal de votre éditeur de code (là où vous avez fait 'npm install' ) :
    ```bash
    npm run dev

    ```

Vous pouvez passer à la prochaine étape.