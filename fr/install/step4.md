# Étape 4 : Configuration du Panel

::: info 🎯 Prérequis
Assurez-vous d'avoir suivi et complété l'étape 3 concernant l'installation du panel avant de continuer.
:::

## 1. Connexion au Panel 🔐

1. Accédez à l'URL de votre panel
2. Connectez-vous avec vos identifiants administrateur


## 2. Configuration Principale 🎯

### URL du Site Azuriom
![alt text](/img/config.png)
::: warning ⚠️ Format Important
L'URL doit être saisie **sans** slash final :
- ✅ `https://votresite.fr`
- ❌ `https://votresite.fr/`

L'Api Key est à récupérer sur votre site Azuriom dans le plugin `API-extender`.
:::

## 4. Gestion des Fichiers 📁

### Via Panel

Accédez au gestionnaire de fichiers du panel :
![alt text](/img/fileman.png)

```plaintext
/
├── mods/          # Vos mods Minecraft
├── config/        # Fichiers de configuration
└── resources/     # Ressources personnalisées
```

### Via Plugin Azuriom

Accédez au plugin FileManager et ouvrez le dossier `data` :

```plaintext
/data
├── mods/          # Vos mods Minecraft
├── config/        # Fichiers de configuration
└── resources/     # Ressources personnalisées
```

::: tip ✅ Synchronisation Automatique
Tous les fichiers placés dans ces répertoires seront automatiquement téléchargés par vos joueurs lors du lancement.
:::

## Testons le launcher 🧪

Une fois arrivé ici, vous pouvez essayer de lancer le launcher en local, exectuer dans le même terminal que l'étape 2 :

```bash
npm run dev
```