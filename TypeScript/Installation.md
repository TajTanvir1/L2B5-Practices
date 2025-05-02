# Installation / Setup

## Step - 1 
---
### To download TS we need to use Node update version
* Sometimes we need to use node older version so we should use Node Version Manager(NVM). Install from Node.js website.

```PowerShell
# Download and install fnm:
winget install Schniz.fnm
# Download and install Node.js:
fnm install 22
# Verify the Node.js version:
node -v # Should print "v22.15.0".
# Verify npm version:
npm -v # Should print "10.9.2".
```
* If facing Problem check solution at bottom 👇

## Step 2 (if not installed globally)
---
### Install Typescript (first time install globally)

```bash
npm install -g typescript --save-dev
```

## Step 3
---
### Setup Ts config file

```bash
tsc --init
```

* It will show a tsconfig.json file in our project folder and we should update with this or update this data's
```
{
  "compilerOptions": {
    "rootDir": "./src/",
    "outDir": "./dist/",
    "target": "es2016",
    "module": "commonjs",
    "strict": true,
    "esModuleInterop": true
  }
}
```
## Step 4
---
### We should check by creating a file with extension `file.ts` 
```bash
tsc
```
* check is there dist folder created? and is there that `file.js` showing or not. If there is that file then all setup is complete.


## Step 5
---
### We need reloading compiler to monitor changes in our Project
* What is ts-node-dev?
ts-node-dev is a tool that allows you to run TypeScript code directly in Node.js, similar to ts-node, but with faster reloading.

It improves the development experience by watching TypeScript files and only recompiling changed files instead of recompiling the entire project each time, which can be slow with large codebases.

```bash
npm install -g ts-node-dev
```

* To Run project file with ts node dev
```bash
ts-node-dev --respawn --transpile-only file.ts
```

* It will help you to monitor the files continuously with auto restart





## If facing problem to install node version manager

1. write "winget install Schniz.fnm" this command in powershell, this will Download and install fnm
2. "fnm install 22" write this command to install version 22
3. "fmn list" this command will show the list of node versions that are provided by fnm
4. "fnm env --use-on-cd | Out-String | Invoke-Expression" use this command to set the environment
5. "fnm install 22.15.0" this command to install required version
6. "fnm use 22.11.0" to switch version. follow the steps.