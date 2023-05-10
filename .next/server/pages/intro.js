'use strict';
(() => {
  var exports = {};
  exports.id = 23;
  exports.ids = [23];
  exports.modules = {
    /***/ 2230: /***/ (module, __webpack_exports__, __webpack_require__) => {
      __webpack_require__.a(
        module,
        async (
          __webpack_handle_async_dependencies__,
          __webpack_async_result__,
        ) => {
          try {
            __webpack_require__.r(__webpack_exports__);
            /* harmony export */ __webpack_require__.d(__webpack_exports__, {
              /* harmony export */ default: () => __WEBPACK_DEFAULT_EXPORT__,
              /* harmony export */ getServerSideProps: () =>
                /* binding */ getServerSideProps,
              /* harmony export */
            });
            /* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ =
              __webpack_require__(5893);
            /* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1__ =
              __webpack_require__(968);
            /* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1___default =
              /*#__PURE__*/ __webpack_require__.n(
                next_head__WEBPACK_IMPORTED_MODULE_1__,
              );
            /* harmony import */ var next_i18next_serverSideTranslations__WEBPACK_IMPORTED_MODULE_2__ =
              __webpack_require__(5460);
            /* harmony import */ var next_i18next_serverSideTranslations__WEBPACK_IMPORTED_MODULE_2___default =
              /*#__PURE__*/ __webpack_require__.n(
                next_i18next_serverSideTranslations__WEBPACK_IMPORTED_MODULE_2__,
              );
            /* harmony import */ var next_i18next__WEBPACK_IMPORTED_MODULE_3__ =
              __webpack_require__(1377);
            /* harmony import */ var next_i18next__WEBPACK_IMPORTED_MODULE_3___default =
              /*#__PURE__*/ __webpack_require__.n(
                next_i18next__WEBPACK_IMPORTED_MODULE_3__,
              );
            /* harmony import */ var components_Layout__WEBPACK_IMPORTED_MODULE_4__ =
              __webpack_require__(7324);
            /* harmony import */ var components_QLinkContents__WEBPACK_IMPORTED_MODULE_5__ =
              __webpack_require__(3650);
            var __webpack_async_dependencies__ =
              __webpack_handle_async_dependencies__([
                components_QLinkContents__WEBPACK_IMPORTED_MODULE_5__,
              ]);
            components_QLinkContents__WEBPACK_IMPORTED_MODULE_5__ = (
              __webpack_async_dependencies__.then
                ? (await __webpack_async_dependencies__)()
                : __webpack_async_dependencies__
            )[0];

            const url = 'https://q-link.minung.dev';
            function LinkIntro() {
              const { t } = (0,
              next_i18next__WEBPACK_IMPORTED_MODULE_3__.useTranslation)(
                'intro',
              );
              return /*#__PURE__*/ (0,
              react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(
                components_Layout__WEBPACK_IMPORTED_MODULE_4__ /* ["default"] */.Z,
                {
                  children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(
                      next_head__WEBPACK_IMPORTED_MODULE_1___default(),
                      {
                        children:
                          /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(
                            'title',
                            {
                              children: 'Q.Link - intro',
                            },
                          ),
                      },
                    ),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(
                      components_QLinkContents__WEBPACK_IMPORTED_MODULE_5__ /* ["default"] */.Z,
                      {
                        url: url,
                        contents: t('contents'),
                        correct: t('correct'),
                      },
                    ),
                  ],
                },
              );
            }
            const getServerSideProps = async ({ locale = 'ko' }) => {
              return {
                props: {
                  ...(await (0,
                  next_i18next_serverSideTranslations__WEBPACK_IMPORTED_MODULE_2__.serverSideTranslations)(
                    locale,
                    ['common', 'intro', 'links'],
                  )),
                },
              };
            };
            /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ =
              LinkIntro;

            __webpack_async_result__();
          } catch (e) {
            __webpack_async_result__(e);
          }
        },
      );

      /***/
    },

    /***/ 9003: /***/ (module) => {
      module.exports = require('classnames');

      /***/
    },

    /***/ 1377: /***/ (module) => {
      module.exports = require('next-i18next');

      /***/
    },

    /***/ 5460: /***/ (module) => {
      module.exports = require('next-i18next/serverSideTranslations');

      /***/
    },

    /***/ 3280: /***/ (module) => {
      module.exports = require('next/dist/shared/lib/app-router-context.js');

      /***/
    },

    /***/ 3539: /***/ (module) => {
      module.exports = require('next/dist/shared/lib/i18n/detect-domain-locale.js');

      /***/
    },

    /***/ 4014: /***/ (module) => {
      module.exports = require('next/dist/shared/lib/i18n/normalize-locale-path.js');

      /***/
    },

    /***/ 4964: /***/ (module) => {
      module.exports = require('next/dist/shared/lib/router-context.js');

      /***/
    },

    /***/ 3431: /***/ (module) => {
      module.exports = require('next/dist/shared/lib/router/utils/add-locale.js');

      /***/
    },

    /***/ 1751: /***/ (module) => {
      module.exports = require('next/dist/shared/lib/router/utils/add-path-prefix.js');

      /***/
    },

    /***/ 3938: /***/ (module) => {
      module.exports = require('next/dist/shared/lib/router/utils/format-url.js');

      /***/
    },

    /***/ 1109: /***/ (module) => {
      module.exports = require('next/dist/shared/lib/router/utils/is-local-url.js');

      /***/
    },

    /***/ 8854: /***/ (module) => {
      module.exports = require('next/dist/shared/lib/router/utils/parse-path.js');

      /***/
    },

    /***/ 3297: /***/ (module) => {
      module.exports = require('next/dist/shared/lib/router/utils/remove-trailing-slash.js');

      /***/
    },

    /***/ 7782: /***/ (module) => {
      module.exports = require('next/dist/shared/lib/router/utils/resolve-href.js');

      /***/
    },

    /***/ 9232: /***/ (module) => {
      module.exports = require('next/dist/shared/lib/utils.js');

      /***/
    },

    /***/ 968: /***/ (module) => {
      module.exports = require('next/head');

      /***/
    },

    /***/ 1853: /***/ (module) => {
      module.exports = require('next/router');

      /***/
    },

    /***/ 6689: /***/ (module) => {
      module.exports = require('react');

      /***/
    },

    /***/ 727: /***/ (module) => {
      module.exports = require('react-syntax-highlighter');

      /***/
    },

    /***/ 2381: /***/ (module) => {
      module.exports = require('react-syntax-highlighter/dist/cjs/styles/prism/tomorrow');

      /***/
    },

    /***/ 3135: /***/ (module) => {
      module.exports = import('react-markdown');

      /***/
    },

    /***/ 6809: /***/ (module) => {
      module.exports = import('remark-gfm');

      /***/
    },
  };
  // load runtime
  var __webpack_require__ = require('../webpack-runtime.js');
  __webpack_require__.C(exports);
  var __webpack_exec__ = (moduleId) =>
    __webpack_require__((__webpack_require__.s = moduleId));
  var __webpack_exports__ = __webpack_require__.X(
    0,
    [893, 664, 324, 983, 650],
    () => __webpack_exec__(2230),
  );
  module.exports = __webpack_exports__;
})();
