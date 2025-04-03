# Step 2: Global Configuration

!!! info "Objective"
    In this step, we will configure the basic settings of your launcher in the `package.json` file.

## Opening the Project 📂

1. Once cloning is complete, click on "Open in Visual Studio Code"
2. Your editor will open with the launcher base

## package.json Configuration 🔧

!!! tip "File to modify"
    Locate and open the `package.json` file in your editor.

Here are the elements to configure:

=== "Main Parameters"
    ```json
    {
      "name": "your-launcher",          // Technical name of the launcher
      "productName": "My Launcher",     // Display name on desktop
      "version": "1.0.0",               // Version of your launcher
      "description": "Description...",   // Description on hover
      "author": "Your-Username, Riptiaz/Boulldogo/Vexato/Luuxis"  // Authors
    }    
    ```
    !!! warning "Important"
        - Version must be chosen carefully
        The version you set here:

        - Is NOT your Minecraft version
        - Will be used for compilation
        - Must follow semver format (X.Y.Z)
    !!! danger "Attention"
        - Do not remove the luuxis/Riptiaz credits, just add your name ❤️
        - Removing original credits will result in a ban.


=== "Server Parameters"
    ```json
    {
        "env": "panel", // panel or azuriom
        "settings": "https://conflictura.eu/", // url of your panel
    }
    ```
    !!! info "Important env"
        - "panel" if you use the panel
        - "azuriom" if you use the Azuriom plugin (Paid)
  
    
=== "Github Settings"
    ```json
    {
        "repository": {
            "type": "git",
            "url": "git+https://github.com/Riptiaz/CentralCorp-Launcher.git"
        }
    }
    ``` 
    !!! info "Your URL"
        You need to replace the ORIGINAL GitHub URL with your FORK OF THE PROJECT 

        **Example :**  
        ```json
        {
            "repository": {
                "type": "git",
                "url": "git+https://github.com/myusername/myserver-Launcher.git"
            }
        }
        ```
        !!! warning "This is required for compilation and auto-update"

## Installing Dependencies 📦

Open a terminal in VS Code and run:

```bash
npm install
```

!!! success "Verification"
    The installation is successful if you don't see any errors in the terminal. Otherwise, check your Node.js installation.

[:octicons-arrow-right-24: Proceed to next step](){ .md-button .md-button--primary } 