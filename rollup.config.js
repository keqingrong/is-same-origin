import nodeResolve from 'rollup-plugin-node-resolve';
import { author, name, version } from './package.json';

const banner =
`/** @license ${name} v${version}
 * Copyright (c) 2018-present, ${author}
 * Released under the MIT license
 */
`;
const globalName = 'isSameOrigin';
const entries = ['index.js', 'index-with-polyfill.js'];
const configs = [{
  input: `src/${entries[0]}`,
  output: {
    file: `dist/${entries[0]}`,
    name: globalName,
    format: 'umd',
    banner: banner
  }
}, {
  input: `src/${entries[1]}`,
  output: {
    file: `dist/${entries[1]}`,
    name: globalName,
    format: 'umd',
    banner: banner
  },
  plugins: [
    nodeResolve()
  ]
}, {
  input: `src/${entries[0]}`,
  output: {
    file: `lib/${entries[0]}`,
    format: 'cjs',
    banner: banner,
    intro: 'const { URL } = require(\'url\');'
  },
  external: ['url']
}];

export default configs;
