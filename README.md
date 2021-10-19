# fxStripJsDoc

[![npm version](https://badge.fury.io/js/fxstripjsdoc.svg)](https://badge.fury.io/js/fxstripjsdoc.js)
![npm bundle size](https://img.shields.io/bundlephobia/min/fxstripjsdoc)
![npm](https://img.shields.io/npm/dw/fxstripjsdoc)
![GitHub last commit](https://img.shields.io/github/last-commit/MichaelRFox/fxStripJsDoc)
![GitHub top language](https://img.shields.io/github/languages/top/MichaelRFox/fxStripJsDoc)
![NPM](https://img.shields.io/npm/l/fxstripjsdoc)

## Description

fxStripJsDoc is used to strip out jsDoc-style comments from a javascript file. One may want to do this to reduce the size of a distribution file while retaining jsDoc comments in the source file. This utility will not strip out inline comments.

Example: 

```javascript

/**
 * @desc The fxStripJsDoc utility will strip out comments
 * like this one.
 */

/** Or single line comments like this one */

// but not comments like this
````

## Installation

```bash
npm install fxstripjsdoc --save-dev
```

## Usage

The fxStripJsDoc utility takes one required argument, the path to the file to be stripped. To use the the fxStripJsDoc utility simply add a script to your package.json file like this:

```json

"scripts": {
	"stripComments": "fxstripjsdoc ./dist/myFile.js"
}

```