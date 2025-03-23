# Étape 2 : Configuration Globale ⚙️

!!! info "Objectif"
    Dans cette étape, nous allons configurer les paramètres de base de votre launcher dans le fichier `package.json`.

## Ouverture du Projet 📂

1. Une fois le clonage terminé, cliquez sur "Open in Visual Studio Code"
2. Votre éditeur s'ouvrira avec la base du launcher

## Configuration du package.json 🔧

!!! tip "Fichier à modifier"
    Localisez et ouvrez le fichier `package.json` dans votre éditeur.

Voici les éléments à configurer :

=== "Paramètres Principaux"
    ```json
    {
      "name": "votre-launcher",          // Nom technique du launcher
      "productName": "Mon Launcher",     // Nom affiché sur le bureau
      "version": "1.0.0",               // Version de votre launcher
      "description": "Description...",   // Description au survol
      "author": "Votre-Pseudo, Riptiaz/Boulldogo/Vexato/Luuxis"  // Auteurs
    }    

    ```
    !!! warning "Important"
        - La version doit être choisie avec soin
        La version que vous définissez ici :

        - N'est PAS votre version de Minecraft
        - Sera utilisée pour la compilation
        - Doit suivre le format semver (X.Y.Z)
    !!! danger "Attention"
        - Ne supprimez pas les crédits luuxis/Riptiaz ajouté juste votre nom ❤️
        - La suppression des crédits originaux entraînera un bannissement.


=== "Paramètres Serveur"
    ```json
    {
        "env": "panel", // panel ou azuriom
        "settings": "https://conflictura.eu/", // url de votre panel
    }
    ```
    !!! info "Important env"
        - "panel" si vous utilisez le panel
        - "azuriom" si vous utilisez le plugin Azuriom (Payant)


=== "Paramètres Github"
    ```json
    {
        "repository": {
            "type": "git",
            "url": "git+https://github.com/Riptiaz/CentralCorp-Launcher.git"
        }
    }
    ``` 
    !!! info "Votre URL"
        Vous devez remplacer l'URL du GitHub ORIGINAL par celle de votre FORK DU PROJET 
        
        **Exemple :**  
        ```json
        {
            "repository": {
                "type": "git",
                "url": "git+https://github.com/monpseudo/monserveur-Launcher.git"
            }
        }
        ```
        !!! warning "Cela est obligatoire pour la compilation et l'auto-update"
    
## Installation des Dépendances 📦

Ouvrez un terminal dans VS Code et exécutez :

```bash
npm install
```

!!! success "Vérification"
    L'installation est réussie si vous ne voyez pas d'erreurs dans le terminal. sinon verifier votre installation de node.js



[:octicons-arrow-right-24: Passer à l'étape suivante](){ .md-button .md-button--primary }
