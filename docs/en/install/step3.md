# Step 3: Panel Installation

!!! info "Objective"
    In this step, we will set up the web panel necessary for your launcher to function.

## 1. Downloading Files 📥

=== "Option 1: GitHub"
    1. Go to [:octicons-mark-github-16: the repository](https://github.com/Riptiaz/CentralCorp-Panel)
    2. Click on the green "Code" button
    3. Select "Download ZIP"
    4. Extract the archive to your desktop

    !!! success "That's it!"
        Simple and quick, right? 😊


## 2. Web Server Configuration ⚙️

### Technical Prerequisites

!!! warning "Required Elements"
    Before continuing, make sure you have:

    - [x] A web server with PHP (min v8.2)
    - [x] A blank database
    - [x] FTP/SFTP or Web Filemanager access

!!! tip "Recommended Hosting"
    We recommend [HWHost](https://hwhost.fr/) which offers:

    - ✅ Guaranteed compatibility
    - ✅ All prerequisites included
    - ✅ Free plan available

### Installation Steps

1. **File Upload** 📤
    - Connect to your FTP/SFTP or web filemanager
    - Transfer all panel files

    !!! warning "Important"
        - Do NOT host the panel on the same server as Azuriom
        - Use a subdomain or separate hosting
        - For some hosts, upload to the `httpdocs` folder

2. **Database Configuration** 💾
    - Access your panel via your web server URL
    - Fill in your database information

3. **Administrator Account Creation** 👤
    - Create your administrator account
    - Keep your credentials safe

    !!! danger "Attention"
        These credentials will be the only ones allowing access to the admin panel.
        Keep them in a safe place!

!!! success "Installation Complete"
    Your panel is now ready to use! 🎉

You can move on to the next step.