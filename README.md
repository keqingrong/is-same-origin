# is-same-origin

[![npm version](https://img.shields.io/npm/v/is-same-origin.svg)](https://www.npmjs.com/package/is-same-origin)

> Check if two URLs are same origin, for Node & Browsers

## Installation

```sh
npm install is-same-origin
```

```js
// Using ES6 modules
import isSameOrigin from 'is-same-origin';

// Using CommonJS modules
const isSameOrigin = require('is-same-origin');
```

The CDN build is also available on unpkg:

- [unpkg.com/is-same-origin/dist/index.min.js](https://unpkg.com/is-same-origin/dist/index.min.js)
- [unpkg.com/is-same-origin/dist/index-with-polyfill.min.js](https://unpkg.com/is-same-origin/dist/index-with-polyfill.min.js) - With a [URL API](https://caniuse.com/#feat=url) polyfill 

## Usage

```js
const isSameOrigin = require('is-same-origin');

isSameOrigin('http://www.example.com/dir/page.html',
  'http://www.example.com/dir/page2.html');
// => true

isSameOrigin('http://www.example.com/dir/page.html',
  'http://en.example.com/dir/other.html');
// => false
```

## License

MIT
