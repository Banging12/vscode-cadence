# Cadence Visual Studio Code Extension

This extension integrates the [Cadence](https://github.com/onflow/cadence), the resource-oriented smart contract programming language of [Flow](https://www.onflow.org/) into [Visual Studio Code](https://code.visualstudio.com/).
It provides features like syntax highlighting, type checking, code completion, etc. 

Note that most editing features (type checking, code completion, etc.) are implemented in the [Cadence Language Server](https://github.com/onflow/cadence/tree/master/languageserver).

## Developing the Extension

### Pre-requisites
- Must have Typescript installed globally: `npm i -g typescript`

### Getting Started
- Run the Typescript watcher: `tsc -watch -p ./`
- Launch the extension by pressing `F5` in VSCode
- Manually reload the extension host when you make changes to TypeScript code

### Configuration for Extension Host if Missing (`launch.json`): 
```
{
  "version": "0.2.0",
  "configurations": [
    {
      "type": "extensionHost",
      "request": "launch",
      "name": "Launch Extension",
      "runtimeExecutable": "${execPath}",
      "args": ["--extensionDevelopmentPath=${workspaceFolder}"],
      "outFiles": ["${workspaceFolder}/out/**/*.js"]
    }
  ]
}

```
---

## Features

- Syntax highlighting (including in Markdown code fences)
- Run the emulator, submit transactions, scripts from the editor

## Installation

To install the extension, ensure you [have VS Code installed](https://code.visualstudio.com/docs/setup/mac)
and have configured the [`code` command line interface](https://code.visualstudio.com/docs/setup/mac#_launching-from-the-command-line).

### Using the Flow CLI

The recommended way to install the latest released version is to use the Flow CLI.

```shell script
brew tap dapperlabs/homebrew && brew install flow-cli
```

Check that it's been installed correctly.

```shell script
flow version
```

Next, use the CLI to install the VS Code extension.

```shell script
flow cadence install-vscode-extension
```

Restart VS Code and the extension should be installed!

### Building

If you are building the extension from source, you need to build both the
extension itself and the Flow CLI (if you don't already have a version installed).
Unless you're developing the extension or need access to unreleased features,
you should use the Flow CLI install option (above). It's much easier!

#### VS Code Extension

If you haven't already, install dependencies.

```shell script
npm install
```

Next, build and package the extension.

```shell script
npm run package
```

This will result in a `.vsix` file containing the packaged extension.

Install the packaged extension.

```shell script
code --install-extension cadence-*.vsix
```

Restart VS Code and the extension should be installed!
