(self.__BUILD_MANIFEST = (function (s, e) {
  return {
    __rewrites: { beforeFiles: [], afterFiles: [], fallback: [] },
    '/': [s, 'static/chunks/pages/index-54836d1dfe73e7e8.js'],
    '/_error': ['static/chunks/pages/_error-3f6d1c55bb8051ab.js'],
    '/intro': [s, e, 'static/chunks/pages/intro-3e16a16fa80e85f9.js'],
    '/links/complete': [
      s,
      'static/chunks/pages/links/complete-e96cec70ee156257.js',
    ],
    '/links/new': [
      s,
      e,
      'static/chunks/669-2a8e7781e222a5ac.js',
      'static/chunks/pages/links/new-f065baacb812ac6c.js',
    ],
    '/links/[id]': [s, e, 'static/chunks/pages/links/[id]-309e2be562d428af.js'],
    sortedPages: [
      '/',
      '/_app',
      '/_error',
      '/intro',
      '/links/complete',
      '/links/new',
      '/links/[id]',
    ],
  };
})(
  'static/chunks/664-c9224777e2b9e95a.js',
  'static/chunks/110-a9cba2d62a368f13.js',
)),
  self.__BUILD_MANIFEST_CB && self.__BUILD_MANIFEST_CB();
