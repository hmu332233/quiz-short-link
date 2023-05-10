'use strict';
(() => {
  var exports = {};
  exports.id = 553;
  exports.ids = [553];
  exports.modules = {
    /***/ 3607: /***/ (
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
      /* harmony import */ var next_i18next__WEBPACK_IMPORTED_MODULE_1__ =
        __webpack_require__(1377);
      /* harmony import */ var next_i18next__WEBPACK_IMPORTED_MODULE_1___default =
        /*#__PURE__*/ __webpack_require__.n(
          next_i18next__WEBPACK_IMPORTED_MODULE_1__,
        );
      /* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2__ =
        __webpack_require__(9003);
      /* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2___default =
        /*#__PURE__*/ __webpack_require__.n(
          classnames__WEBPACK_IMPORTED_MODULE_2__,
        );

      function ShareButton({ outline, url }) {
        const { t } = (0,
        next_i18next__WEBPACK_IMPORTED_MODULE_1__.useTranslation)();
        const handleClick = async () => {
          url ??= location.href;
          const isAvailable = typeof navigator.share !== 'undefined';
          if (isAvailable) {
            await navigator.share({
              title: 'Q.Link',
              url,
            });
          } else {
            // share api 지원하지 않을시 clipboard 복사로 대체
            await navigator.clipboard.writeText(url);
            alert(t('common:copied'));
          }
        };
        return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(
          'button',
          {
            className: classnames__WEBPACK_IMPORTED_MODULE_2___default()(
              'btn btn-wide',
              outline && 'btn-outline',
            ),
            onClick: handleClick,
            children: t('common:share'),
          },
        );
      }
      /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ =
        ShareButton;

      /***/
    },

    /***/ 7974: /***/ (
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
      /* harmony import */ var next_i18next__WEBPACK_IMPORTED_MODULE_1__ =
        __webpack_require__(1377);
      /* harmony import */ var next_i18next__WEBPACK_IMPORTED_MODULE_1___default =
        /*#__PURE__*/ __webpack_require__.n(
          next_i18next__WEBPACK_IMPORTED_MODULE_1__,
        );
      /* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2__ =
        __webpack_require__(9003);
      /* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2___default =
        /*#__PURE__*/ __webpack_require__.n(
          classnames__WEBPACK_IMPORTED_MODULE_2__,
        );

      const STEP_ITEMS = [
        {
          id: 'quiz',
          textId: 'steps.two',
        },
        {
          id: 'link',
          textId: 'steps.one',
        },
        {
          id: 'complete',
          textId: 'steps.three',
        },
      ];
      function Steps({ step }) {
        const { t } = (0,
        next_i18next__WEBPACK_IMPORTED_MODULE_1__.useTranslation)('links');
        return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(
          'ul',
          {
            className: 'steps w-96',
            children: STEP_ITEMS.map((item, index) =>
              /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(
                'li',
                {
                  className: classnames__WEBPACK_IMPORTED_MODULE_2___default()(
                    'step',
                    step > index && 'step-primary',
                  ),
                  children: t(item.textId),
                },
                item.id,
              ),
            ),
          },
        );
      }
      /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = Steps;

      /***/
    },

    /***/ 945: /***/ (
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
      /* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ =
        __webpack_require__(6689);
      /* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default =
        /*#__PURE__*/ __webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
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
      /* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4__ =
        __webpack_require__(1853);
      /* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4___default =
        /*#__PURE__*/ __webpack_require__.n(
          next_router__WEBPACK_IMPORTED_MODULE_4__,
        );
      /* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_5__ =
        __webpack_require__(1664);
      /* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_5___default =
        /*#__PURE__*/ __webpack_require__.n(
          next_link__WEBPACK_IMPORTED_MODULE_5__,
        );
      /* harmony import */ var components_Layout__WEBPACK_IMPORTED_MODULE_6__ =
        __webpack_require__(7324);
      /* harmony import */ var components_Steps__WEBPACK_IMPORTED_MODULE_7__ =
        __webpack_require__(7974);
      /* harmony import */ var components_ShareButton__WEBPACK_IMPORTED_MODULE_8__ =
        __webpack_require__(3607);

      function LinkComplete() {
        const { t } = (0,
        next_i18next__WEBPACK_IMPORTED_MODULE_3__.useTranslation)('common');
        const [copied, setCopied] = (0,
        react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
        const router = (0,
        next_router__WEBPACK_IMPORTED_MODULE_4__.useRouter)();
        const {
          query: { link = '' },
        } = router;
        const handleCopyClick = async () => {
          await navigator.clipboard.writeText(link);
          setCopied(true);
        };
        return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(
          components_Layout__WEBPACK_IMPORTED_MODULE_6__ /* ["default"] */.Z,
          {
            children: /*#__PURE__*/ (0,
            react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)('div', {
              className: 'flex flex-col items-center gap-y-4',
              children: [
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(
                  components_Steps__WEBPACK_IMPORTED_MODULE_7__ /* ["default"] */.Z,
                  {
                    step: 3,
                  },
                ),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(
                  next_link__WEBPACK_IMPORTED_MODULE_5___default(),
                  {
                    href: link,
                    className: 'link link-accent',
                    children: link,
                  },
                ),
                /*#__PURE__*/ (0,
                react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)('div', {
                  className: 'indicator',
                  children: [
                    copied &&
                      /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(
                        'span',
                        {
                          className: 'indicator-item',
                          children:
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(
                              'span',
                              {
                                className:
                                  'badge badge-secondary animate-head-shake',
                                children: t('copied'),
                              },
                            ),
                        },
                      ),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(
                      components_ShareButton__WEBPACK_IMPORTED_MODULE_8__ /* ["default"] */.Z,
                      {
                        url: link,
                      },
                    ),
                  ],
                }),
              ],
            }),
          },
        );
      }
      const getServerSideProps = async ({ locale = 'ko' }) => {
        return {
          props: {
            ...(await (0,
            next_i18next_serverSideTranslations__WEBPACK_IMPORTED_MODULE_2__.serverSideTranslations)(
              locale,
              ['common'],
            )),
          },
        };
      };
      /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ =
        LinkComplete;

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
  var __webpack_require__ = require('../../webpack-runtime.js');
  __webpack_require__.C(exports);
  var __webpack_exec__ = (moduleId) =>
    __webpack_require__((__webpack_require__.s = moduleId));
  var __webpack_exports__ = __webpack_require__.X(0, [893, 664, 324], () =>
    __webpack_exec__(945),
  );
  module.exports = __webpack_exports__;
})();
