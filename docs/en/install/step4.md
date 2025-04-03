# Step 4: Panel Configuration

!!! info "Prerequisites"
    Make sure you have followed and completed step 3 regarding panel installation before continuing.

## 1. Panel Login 🔐

1. Access your panel URL
2. Log in with your administrator credentials

## 2. Configuration Types ⚙️

The panel offers three types of configurations:

=== "Text Configurations"
    - Allow writing or pasting text
    - Are directly displayed in the launcher
    - Ideal for descriptions and messages

=== "Selective Configurations"
    - Checkbox options
    - Simple and intuitive interface
    - Perfect for optional features

=== "Dropdown Configurations"
    - Dropdown menu with predefined options
    - Choice among several possibilities
    - Useful for version selections

## 3. Main Configuration 🎯

=== "Panel Configuration"
    ### Azuriom Site URL

    !!! warning "Important Format"
        The URL must be entered without a trailing slash:
        
        ✅ `https://yoursite.com`
        ❌ `https://yoursite.com/`

        You can test your URL with the verification button.

    

=== "Azuriom Plugin Configuration"
    !!! info "Required Plugin"
        Make sure you have installed and activated the FileManager plugin on your Azuriom site.
### Loader Type

!!! tip "Forge Configuration"
    1. Go to [:fontawesome-brands-java: the official Forge website](https://files.minecraftforge.net/net/minecraftforge/forge/)
    2. Select your Minecraft version
    3. Choose a recommended version (ex: `1.21.4 - 54.1.3`)
    !!! example "Recommended Versions"
        Always prefer versions marked as "Recommended" for better stability.
Check other panel parameters/categories to configure it completely and get the most out of it.

## 4. File Management 📁

=== "Via Panel"
    1. Access the panel's file manager (`yoururl.com/file`)
    2. Organize your files like a `.minecraft` folder:

    ```plaintext
    /
    ├── mods/          # Your Minecraft mods
    ├── config/        # Configuration files
    └── resources/     # Custom resources
    ```

=== "Via Azuriom Plugin"
    1. Access the FileManager plugin
    2. Open the 'data' folder
    3. Organize your files as follows:

    ```plaintext
    /data
    ├── mods/          # Your Minecraft mods
    ├── config/        # Configuration files
    └── resources/     # Custom resources
    ```

    !!! warning "If you encounter an error with the Filemanager plugin"
        contact the discord support

!!! success "Automatic Synchronization"
    All files placed in these directories will be automatically downloaded by your players when launching.

[:octicons-arrow-right-24: Proceed to next step](){ .md-button .md-button--primary } 