import test from 'ava';
import isSameOrigin from '..';

// https://en.wikipedia.org/wiki/Same-origin_policy
const urls = [
  'http://www.example.com/dir/page.html',

  'http://www.example.com/dir/page2.html',
  'http://www.example.com/dir2/other.html',
  'http://username:password@www.example.com/dir2/other.html',

  'http://www.example.com:81/dir/other.html',
  'https://www.example.com/dir/other.html',
  'http://en.example.com/dir/other.html',
  'http://example.com/dir/other.html',
  'http://v2.www.example.com/dir/other.html',

  'http://www.example.com:80/dir/other.html'
];

test('Same protocol, host and port', t => {
  t.deepEqual(isSameOrigin(urls[0], urls[1]), true);
});

test('Same protocol, host and port', t => {
  t.deepEqual(isSameOrigin(urls[0], urls[2]), true);
});

test('Same protocol, host and port', t => {
  t.deepEqual(isSameOrigin(urls[0], urls[3]), true);
});

test('Same protocol and host but different port', t => {
  t.deepEqual(isSameOrigin(urls[0], urls[4]), false);
});

test('Different protocol', t => {
  t.deepEqual(isSameOrigin(urls[0], urls[5]), false);
});

test('Different host', t => {
  t.deepEqual(isSameOrigin(urls[0], urls[6]), false);
});

test('Different host (exact match required)', t => {
  t.deepEqual(isSameOrigin(urls[0], urls[7]), false);
});

test('Different host (exact match required)', t => {
  t.deepEqual(isSameOrigin(urls[0], urls[8]), false);
});

test('Port explicit', t => {
  t.deepEqual(isSameOrigin(urls[0], urls[9]), true);
});
