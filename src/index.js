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
  var urlA = parseURL(a);
  var urlB = parseURL(b);
  if (!urlA || !urlB) {
    return false;
  }
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

/**
 * Parse the URL string
 * @param {string} s - URL string
 * @returns {URL|null}
 */
function parseURL(s) {
  var url = null;
  try {
    url = new URL(s);
  } catch (error) {
    console.error(error);
  }
  return url;
}

export default isSameOrigin;
