'use strict';
const { URL } = require('url');

/**
 * Check if two URLs are same origin
 * @param {string} a - URL A
 * @param {string} b - URL B
 *
 * See
 * https://html.spec.whatwg.org/multipage/origin.html#same-origin
 * https://nodejs.org/dist/latest/docs/api/url.html
 */
function isSameOrigin(a, b) {
  const urlA = new URL(a);
  const urlB = new URL(b);
  if (urlA.origin === urlB.origin) {
    return true;
  }
  if (
    urlA.protocol === urlB.protocol &&
    urlA.hostname === urlB.hostname &&
    urlA.port === urlB.port
  ) {
    return true;
  }
  return false;
}

module.exports = isSameOrigin;
