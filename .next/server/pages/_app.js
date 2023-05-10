(() => {
  var exports = {};
  exports.id = 888;
  exports.ids = [888];
  exports.modules = {
    /***/ 8918: /***/ (
      __unused_webpack_module,
      __webpack_exports__,
      __webpack_require__,
    ) => {
      'use strict';
      // ESM COMPAT FLAG
      __webpack_require__.r(__webpack_exports__);

      // EXPORTS
      __webpack_require__.d(__webpack_exports__, {
        default: () => /* binding */ _app,
      });

      // EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
      var jsx_runtime = __webpack_require__(5893);
      // EXTERNAL MODULE: external "react"
      var external_react_ = __webpack_require__(6689);
      // EXTERNAL MODULE: ./styles/globals.css
      var globals = __webpack_require__(6764);
      // EXTERNAL MODULE: external "next/router"
      var router_ = __webpack_require__(1853);
      // EXTERNAL MODULE: external "next-i18next"
      var external_next_i18next_ = __webpack_require__(1377); // CONCATENATED MODULE: ./libs/gtag/index.ts
      // https://developers.google.com/analytics/devguides/collection/gtagjs/pages
      const pageview = (url) => {
        window.gtag('config', process.env.GA_ID, {
          page_path: url,
        });
      };
      // https://developers.google.com/analytics/devguides/collection/gtagjs/events
      const gtag_event = ({ action, category, label, value }) => {
        window.gtag('event', action, {
          event_category: category,
          event_label: label,
          value: value,
        });
      }; // CONCATENATED MODULE: ./pages/_app.tsx

      function MyApp({ Component, pageProps }) {
        const router = (0, router_.useRouter)();
        (0, external_react_.useEffect)(() => {
          const handleRouteChange = (url) => {
            pageview(url);
          };
          router.events.on('routeChangeComplete', handleRouteChange);
          return () => {
            router.events.off('routeChangeComplete', handleRouteChange);
          };
        }, [router.events]);
        return /*#__PURE__*/ jsx_runtime.jsx(Component, {
          ...pageProps,
        });
      }
      /* harmony default export */ const _app = (0,
      external_next_i18next_.appWithTranslation)(MyApp);

      /***/
    },

    /***/ 6764: /***/ () => {
      /***/
    },

    /***/ 1377: /***/ (module) => {
      'use strict';
      module.exports = require('next-i18next');

      /***/
    },

    /***/ 1853: /***/ (module) => {
      'use strict';
      module.exports = require('next/router');

      /***/
    },

    /***/ 6689: /***/ (module) => {
      'use strict';
      module.exports = require('react');

      /***/
    },
  };
  // load runtime
  var __webpack_require__ = require('../webpack-runtime.js');
  __webpack_require__.C(exports);
  var __webpack_exec__ = (moduleId) =>
    __webpack_require__((__webpack_require__.s = moduleId));
  var __webpack_exports__ = __webpack_require__.X(0, [893], () =>
    __webpack_exec__(8918),
  );
  module.exports = __webpack_exports__;
})();
