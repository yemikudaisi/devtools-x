# DEVTOOLS-X

`devutils` is macOS-only, and `devtoys` is Windows-only.  
So here's DevTools-X -- an x-platform collection of dev-tools that is lighter, safer, and full of feature rich (currenltly 32 modules and growing) development utilities.

> Note: Application is under development, expect some bugs.

> In any case if the app doesn't render/load anything, just delete the file if exists or create settings.json if doesn't exist at: https://docs.rs/tauri/latest/tauri/api/path/fn.data_dir.html

![Logo](assets/banner.png)

## Badges

![MIT License](https://img.shields.io/github/license/fosslife/devtools-x.svg)
![GitHub issues](https://badgen.net/github/issues/fosslife/devtools-x) ![GitHub stars](https://badgen.net/github/stars/fosslife/devtools-x)
![Latest release](https://badgen.net/github/release/fosslife/devtools-x)

## Screenshot

<img width="1317" alt="Screenshot 2024-04-01 at 12 20 37 PM" src="https://github.com/fosslife/devtools-x/assets/24642451/4ab136a2-e8df-448e-96c2-e6525a35b393">

## Installation

Download the relevant package from Github Releases section, and start using it! :D

If you prefer compiling your own package, make sure you have all tauri pre-requisites installed:

```
https://tauri.app/v1/guides/getting-started/prerequisites
```

Then just clone and open the project in terminal and run

```
yarn tauri build
```

## Acknowledgements

This project exists solely because I was fed up switching between different tools on different OSes. Please do star their github repositories, they have inspired many modules in devtools-x

- [DevUtils](https://devutils.com/)
- [DevToys](https://github.com/veler/DevToys)

## Features

#### Checkout [features.md](features.md) for a short video demo on every feature.

DevTools-X has about **32 features** as of now, and growing. The full list in below, details of each are mentioned in a separate file. One big selling point of DevTools-X is it uses `monaco-editor`, the editor used by vscode, so tons of editor features are
available to you right from the start, as if you are using vscode. And in the backend we use `rust` so large number of heavy duty operations are given to rust to get it done quickly.

- JSON Editor/Formatter/Fixer/Minifier/Beautifier
- Text Hashes
- Hashing Files
- Password Generator
- JWT Formatter/Parser
- Number Convertor Binary/Hex/etc
- SQL Formatter
- Color Generator/Picker/Convertor
- Regex Tester
- Text/Code Diffing With Syntax Highlighting
- YAML <> JSON Convertor
- Pastebin (Github Gists)
- REST API Tester
- Programming Scratchpad
- Beautiful Markdown Preview
- Image Compressor/Convertor with Preview
- Bulk Image Compressor with Rust for Speed
- Unit Convertor (All Major Units Supported)
- React Scratchpad (Live React Editor to Get Preview)
- Unix EPOCH Convertor
- Stateless Password Generator/Manager
- BASE64 Text Convertor
- BASE64 Image Convertor
- Generating Structs/Types from JSON
- CSS/JS/HTML Minifier/Beautifier
- URL Parser
- HTML Preview
- Lorem Ipsum Sample Text Generator
- QR Code Generator
- PDF Reader
- Ping Command Preview
- Text Compressor
- And Many More Coming

## Contributing

Contributions are always welcome!

See `contributing.md` for ways to get started.

Please adhere to this project's `code of conduct`.

## Tech Stack

DevTools-X is **NOT WRITTEN IN ELECTRON**.

**Client:** React, Mantine

**Backend:** Rust

That should be enough to tell you it's built on top of [Tauri](https://tauri.app/), So we get best of the both worlds: Web + Rust. Web to create beautiful cross-platform UI, Rust to create fast and small applications. Tauri bundle is super small, about 10MB of installer.

## Authors

- [@Sparkenstein](https://www.github.com/Sparkenstein)
- You?

## FAQ

#### Migrate settings?

There's a backup/restore feature available in settings drawer. you can backup manually as well, copy `settings.json` from [appDir](https://tauri.app/v1/api/js/path#appdatadir)

#### App is not starting/showing empty screen

Most likely your db is corrupt. delete `settings.json` file in your [appDir](https://tauri.app/v1/api/js/path#appdatadir).
Create a issue if you can't find it.

#### I do not like the order of modules

All module can be rearranged with drag-n-drop. order is saved in a local db. you can edit this file manually as well, it's a simple json file.

#### Do I need to know Rust to get started?

Absolutely not. Many modules are written in pure JS, rust is only needed for performance and security sensitive features like calculating hash
or compressing image etc.

## NEED HELP WITH:

- More features
- Testing
- Can the logo be improved?
- Regex Tester is kinda broken, monaco gives a headache
- Fix ALL FIXME: s and TODO: s

## License

[MIT](https://choosealicense.com/licenses/mit/)

## Star History

[![Star History Chart](https://api.star-history.com/svg?repos=fosslife/devtools-x&type=Date)](https://star-history.com/#fosslife/devtools-x&Date)
