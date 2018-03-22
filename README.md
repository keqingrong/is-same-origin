# is-same-origin

[![npm version](https://img.shields.io/npm/v/is-same-origin.svg)](https://www.npmjs.com/package/is-same-origin)

> Check if two URLs are same origin

## Installation

```sh
npm install is-same-origin
```

## Usage

```js
const isSameOrigin = require('is-same-origin');

isSameOrigin('http://www.example.com/dir/page.html', 'http://www.example.com/dir/page2.html');
// => true

isSameOrigin('http://www.example.com/dir/page.html', 'http://en.example.com/dir/other.html');
// => false
```

## TODO

- Add support to browser

## License

MIT
