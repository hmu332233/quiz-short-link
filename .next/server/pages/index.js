'use strict';
(() => {
  var exports = {};
  exports.id = 405;
  exports.ids = [405];
  exports.modules = {
    /***/ 1465: /***/ (
      __unused_webpack_module,
      __webpack_exports__,
      __webpack_require__,
    ) => {
      /* harmony export */ __webpack_require__.d(__webpack_exports__, {
        /* harmony export */ Z: () => __WEBPACK_DEFAULT_EXPORT__,
        /* harmony export */
      });
      /* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ =
        __webpack_require__(5893);
      /* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ =
        __webpack_require__(6689);
      /* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default =
        /*#__PURE__*/ __webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
      /* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2__ =
        __webpack_require__(9003);
      /* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2___default =
        /*#__PURE__*/ __webpack_require__.n(
          classnames__WEBPACK_IMPORTED_MODULE_2__,
        );

      function LoadableButton({ className, children, onClick, ...props }) {
        const [isLoading, setIsLoading] = (0,
        react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
        const handleClick = (e) => {
          setIsLoading(true);
          if (onClick) {
            onClick(e);
          }
        };
        return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(
          'button',
          {
            className: classnames__WEBPACK_IMPORTED_MODULE_2___default()(
              'btn',
              isLoading && 'loading',
              className,
            ),
            onClick: handleClick,
            ...props,
            children: isLoading || children,
          },
        );
      }
      /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ =
        LoadableButton;

      /***/
    },

    /***/ 2603: /***/ (
      __unused_webpack_module,
      __webpack_exports__,
      __webpack_require__,
    ) => {
      __webpack_require__.r(__webpack_exports__);
      /* harmony export */ __webpack_require__.d(__webpack_exports__, {
        /* harmony export */ default: () => __WEBPACK_DEFAULT_EXPORT__,
        /* harmony export */ getServerSideProps: () =>
          /* binding */ getServerSideProps,
        /* harmony export */
      });
      /* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ =
        __webpack_require__(5893);
      /* harmony import */ var next_i18next_serverSideTranslations__WEBPACK_IMPORTED_MODULE_1__ =
        __webpack_require__(5460);
      /* harmony import */ var next_i18next_serverSideTranslations__WEBPACK_IMPORTED_MODULE_1___default =
        /*#__PURE__*/ __webpack_require__.n(
          next_i18next_serverSideTranslations__WEBPACK_IMPORTED_MODULE_1__,
        );
      /* harmony import */ var next_i18next__WEBPACK_IMPORTED_MODULE_2__ =
        __webpack_require__(1377);
      /* harmony import */ var next_i18next__WEBPACK_IMPORTED_MODULE_2___default =
        /*#__PURE__*/ __webpack_require__.n(
          next_i18next__WEBPACK_IMPORTED_MODULE_2__,
        );
      /* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3__ =
        __webpack_require__(1664);
      /* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3___default =
        /*#__PURE__*/ __webpack_require__.n(
          next_link__WEBPACK_IMPORTED_MODULE_3__,
        );
      /* harmony import */ var components_Layout__WEBPACK_IMPORTED_MODULE_4__ =
        __webpack_require__(7324);
      /* harmony import */ var components_LoadableButton__WEBPACK_IMPORTED_MODULE_5__ =
        __webpack_require__(1465);
      /* harmony import */ var components_LanguageSelector__WEBPACK_IMPORTED_MODULE_6__ =
        __webpack_require__(7088);

      function Index() {
        const { t } = (0,
        next_i18next__WEBPACK_IMPORTED_MODULE_2__.useTranslation)('main');
        return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(
          components_Layout__WEBPACK_IMPORTED_MODULE_4__ /* ["default"] */.Z,
          {
            hideHeader: true,
            children:
              /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(
                'div',
                {
                  className: 'flex flex-col items-center gap-y-8',
                  children:
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(
                      'div',
                      {
                        className: 'hero min-h-screen',
                        children:
                          /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(
                            'div',
                            {
                              className:
                                'hero-content w-full text-center mb-24',
                              children: /*#__PURE__*/ (0,
                              react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(
                                'div',
                                {
                                  className: 'w-full',
                                  children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(
                                      'h1',
                                      {
                                        className:
                                          'text-4xl font-bold text-base-content ',
                                        children: /*#__PURE__*/ (0,
                                        react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(
                                          next_link__WEBPACK_IMPORTED_MODULE_3___default(),
                                          {
                                            href: '/',
                                            children: [
                                              /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(
                                                'span',
                                                {
                                                  className: 'text-primary',
                                                  children: 'Q.',
                                                },
                                              ),
                                              'Link',
                                            ],
                                          },
                                        ),
                                      },
                                    ),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(
                                      'p',
                                      {
                                        className: 'py-6 whitespace-pre-line',
                                        children: t('description'),
                                      },
                                    ),
                                    /*#__PURE__*/ (0,
                                    react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(
                                      'div',
                                      {
                                        className: 'flex w-full gap-3',
                                        children: [
                                          /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(
                                            next_link__WEBPACK_IMPORTED_MODULE_3___default(),
                                            {
                                              href: '/links/new',
                                              className:
                                                'btn btn-primary flex-1',
                                              children: t('button.create'),
                                            },
                                          ),
                                          /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(
                                            next_link__WEBPACK_IMPORTED_MODULE_3___default(),
                                            {
                                              href: '/intro',
                                              className: 'btn flex-1',
                                              children: t('button.what'),
                                            },
                                          ),
                                          /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(
                                            next_link__WEBPACK_IMPORTED_MODULE_3___default(),
                                            {
                                              href: t('demoUrl'),
                                              passHref: true,
                                              className: 'inline-flex flex-1',
                                              children:
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(
                                                  components_LoadableButton__WEBPACK_IMPORTED_MODULE_5__ /* ["default"] */.Z,
                                                  {
                                                    className:
                                                      'btn-outline w-full',
                                                    children: t('button.demo'),
                                                  },
                                                ),
                                            },
                                          ),
                                        ],
                                      },
                                    ),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(
                                      'div',
                                      {
                                        className:
                                          'flex justify-center w-full mt-4',
                                        children:
                                          /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(
                                            components_LanguageSelector__WEBPACK_IMPORTED_MODULE_6__ /* ["default"] */.Z,
                                            {},
                                          ),
                                      },
                                    ),
                                  ],
                                },
                              ),
                            },
                          ),
                      },
                    ),
                },
              ),
          },
        );
      }
      const getServerSideProps = async ({ locale = 'ko' }) => {
        return {
          props: {
            ...(await (0,
            next_i18next_serverSideTranslations__WEBPACK_IMPORTED_MODULE_1__.serverSideTranslations)(
              locale,
              ['main'],
            )),
          },
        };
      };
      /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = Index;

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
  };
  // load runtime
  var __webpack_require__ = require('../webpack-runtime.js');
  __webpack_require__.C(exports);
  var __webpack_exec__ = (moduleId) =>
    __webpack_require__((__webpack_require__.s = moduleId));
  var __webpack_exports__ = __webpack_require__.X(0, [893, 664, 324], () =>
    __webpack_exec__(2603),
  );
  module.exports = __webpack_exports__;
})();
