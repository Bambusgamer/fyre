# Crash course JS, node.js and discord.js v14

## Installing js on your computer

To run js on your computer you have to install node.js. This is just a js engine (like a browser) that runs your js code. Js is compiled _just in time_, meaning it is compiled the moment you import the code with _import('module.js')_ or _require('module.js')_.

### Installing node.js

[Node.js Website](https://nodejs.org/en/)

I would recommend you install the v16 LTS (_long time support_) variant:
[Direct download](https://nodejs.org/dist/v16.17.1/node-v16.17.1-x64.msi)

Just click trough the installer but enable the **Tools for native modules**. After that just let the installer run and let it do its thing.

## Installing a code editor

To write your js code you should download a code editor like the open source **Vsc** (_Visual Studio Code_)

[Vsc Website](https://code.visualstudio.com/)

Click on download and then just install but don't forget to enable both **open with code** options. After that let the installer do its thing.

## Downloading the materials

### Git

To make downloading things from here easier you should also install git. Git is a program wich can interact with GitHub. We will be using it to download the files you need to continue.

[Git Website](https://git-scm.com/downloads)

Download the windows 64 bit standalone installer. When installing just use the defaults except for the text editor. Here you should select **Use Visual Studio Code as Git's default editor**. After that just let the installer do its thing.

### Downloading the files

Go to your desktop or a other folder you want to use for this. Right click in the folder and select **Git Bash Here**. This will open a terminal in the folder. In this terminal you can type commands. Copy the following command and paste it in the terminal by right clicking in the terminal and selecting **Paste**.

```bash:
git clone https://github.com/Bambusgamer/fyre.git
```

### Opening the files

After the files are downloaded you can open them in Vsc. To do this just right click in the folder and select **Open with Code**. This will open Vsc and you can start working on the files.

## Js basics and the first bot

### Js basics

Go to `files/1# Js Concepts/index.js`

### The first bot

After you have read the basics you look at the code in `files/2# The first bot/index.js`
