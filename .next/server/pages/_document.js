'use strict';
(() => {
  var exports = {};
  exports.id = 660;
  exports.ids = [660];
  exports.modules = {
    /***/ 3162: /***/ (
      __unused_webpack_module,
      __webpack_exports__,
      __webpack_require__,
    ) => {
      __webpack_require__.r(__webpack_exports__);
      /* harmony export */ __webpack_require__.d(__webpack_exports__, {
        /* harmony export */ default: () => __WEBPACK_DEFAULT_EXPORT__,
        /* harmony export */
      });
      /* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ =
        __webpack_require__(5893);
      /* harmony import */ var next_document__WEBPACK_IMPORTED_MODULE_1__ =
        __webpack_require__(6859);
      /* harmony import */ var next_document__WEBPACK_IMPORTED_MODULE_1___default =
        /*#__PURE__*/ __webpack_require__.n(
          next_document__WEBPACK_IMPORTED_MODULE_1__,
        );

      function Document() {
        return /*#__PURE__*/ (0,
        react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(
          next_document__WEBPACK_IMPORTED_MODULE_1__.Html,
          {
            'data-theme': 'bumblebee',
            children: [
              /*#__PURE__*/ (0,
              react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(
                next_document__WEBPACK_IMPORTED_MODULE_1__.Head,
                {
                  children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(
                      'script',
                      {
                        async: true,
                        src: `https://www.googletagmanager.com/gtag/js?id=${process.env.GA_ID}`,
                      },
                    ),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(
                      'script',
                      {
                        dangerouslySetInnerHTML: {
                          __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', '${process.env.GA_ID}');
            `,
                        },
                      },
                    ),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(
                      'link',
                      {
                        rel: 'stylesheet',
                        as: 'style',
                        crossOrigin: '',
                        href: 'https://cdn.jsdelivr.net/gh/orioncactus/pretendard/dist/web/static/pretendard.css',
                      },
                    ),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(
                      'meta',
                      {
                        name: 'viewport',
                        content:
                          'width=device-width, height=device-height,  initial-scale=1.0, user-scalable=no;user-scalable=0;',
                      },
                    ),
                  ],
                },
              ),
              /*#__PURE__*/ (0,
              react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)('body', {
                children: [
                  /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(
                    next_document__WEBPACK_IMPORTED_MODULE_1__.Main,
                    {},
                  ),
                  /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(
                    next_document__WEBPACK_IMPORTED_MODULE_1__.NextScript,
                    {},
                  ),
                ],
              }),
            ],
          },
        );
      }
      /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = Document;

      /***/
    },

    /***/ 4140: /***/ (module) => {
      module.exports = require('next/dist/server/get-page-files.js');

      /***/
    },

    /***/ 9716: /***/ (module) => {
      module.exports = require('next/dist/server/htmlescape.js');

      /***/
    },

    /***/ 6368: /***/ (module) => {
      module.exports = require('next/dist/server/utils.js');

      /***/
    },

    /***/ 6724: /***/ (module) => {
      module.exports = require('next/dist/shared/lib/constants.js');

      /***/
    },

    /***/ 8743: /***/ (module) => {
      module.exports = require('next/dist/shared/lib/html-context.js');

      /***/
    },

    /***/ 8524: /***/ (module) => {
      module.exports = require('next/dist/shared/lib/is-plain-object.js');

      /***/
    },

    /***/ 6689: /***/ (module) => {
      module.exports = require('react');

      /***/
    },
  };
  // load runtime
  var __webpack_require__ = require('../webpack-runtime.js');
  __webpack_require__.C(exports);
  var __webpack_exec__ = (moduleId) =>
    __webpack_require__((__webpack_require__.s = moduleId));
  var __webpack_exports__ = __webpack_require__.X(0, [893, 859], () =>
    __webpack_exec__(3162),
  );
  module.exports = __webpack_exports__;
})();
