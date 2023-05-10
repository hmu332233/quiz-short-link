'use strict';
exports.id = 324;
exports.ids = [324];
exports.modules = {
  /***/ 7088: /***/ (
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
    /* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ =
      __webpack_require__(1664);
    /* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default =
      /*#__PURE__*/ __webpack_require__.n(
        next_link__WEBPACK_IMPORTED_MODULE_2__,
      );
    /* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3__ =
      __webpack_require__(1853);
    /* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3___default =
      /*#__PURE__*/ __webpack_require__.n(
        next_router__WEBPACK_IMPORTED_MODULE_3__,
      );
    /* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_4__ =
      __webpack_require__(9003);
    /* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_4___default =
      /*#__PURE__*/ __webpack_require__.n(
        classnames__WEBPACK_IMPORTED_MODULE_4__,
      );

    const ITEMS = [
      {
        locale: 'en',
        text: 'English',
      },
      {
        locale: 'ko',
        text: '한국어',
      },
      {
        locale: 'ms',
        text: 'Bahasa Melayu',
      },
      {
        locale: 'tr',
        text: 'T\xfcrk\xe7e',
      },
    ];
    function LanguageSelector({ className }) {
      const router = (0, next_router__WEBPACK_IMPORTED_MODULE_3__.useRouter)();
      return /*#__PURE__*/ (0,
      react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)('div', {
        className: classnames__WEBPACK_IMPORTED_MODULE_4___default()(
          className,
          'dropdown dropdown-end',
        ),
        children: [
          /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(
            'label',
            {
              tabIndex: 0,
              className: 'btn btn-ghost m-1',
              children: 'Language',
            },
          ),
          /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(
            'ul',
            {
              tabIndex: 0,
              className:
                'dropdown-content menu bg-base-100 w-56 rounded-box shadow',
              children: ITEMS.map((item) =>
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(
                  'li',
                  {
                    children:
                      /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(
                        next_link__WEBPACK_IMPORTED_MODULE_2___default(),
                        {
                          href: router.asPath,
                          locale: item.locale,
                          className:
                            classnames__WEBPACK_IMPORTED_MODULE_4___default()(
                              router.locale === item.locale && 'active',
                            ),
                          children: item.text,
                        },
                      ),
                  },
                  item.locale,
                ),
              ),
            },
          ),
        ],
      });
    }
    /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ =
      LanguageSelector;

    /***/
  },

  /***/ 7324: /***/ (
    __unused_webpack_module,
    __webpack_exports__,
    __webpack_require__,
  ) => {
    // EXPORTS
    __webpack_require__.d(__webpack_exports__, {
      Z: () => /* binding */ components_Layout,
    });

    // EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
    var jsx_runtime = __webpack_require__(5893);
    // EXTERNAL MODULE: external "react"
    var external_react_ = __webpack_require__(6689);
    // EXTERNAL MODULE: external "classnames"
    var external_classnames_ = __webpack_require__(9003);
    var external_classnames_default =
      /*#__PURE__*/ __webpack_require__.n(external_classnames_);
    // EXTERNAL MODULE: external "next/head"
    var head_ = __webpack_require__(968);
    var head_default = /*#__PURE__*/ __webpack_require__.n(head_);
    // EXTERNAL MODULE: external "next-i18next"
    var external_next_i18next_ = __webpack_require__(1377); // CONCATENATED MODULE: ./components/Seo.tsx
    function Seo({}) {
      const { t } = (0, external_next_i18next_.useTranslation)();
      return /*#__PURE__*/ (0, jsx_runtime.jsxs)(head_default(), {
        children: [
          /*#__PURE__*/ jsx_runtime.jsx('title', {
            children: 'Q.Link',
          }),
          /*#__PURE__*/ jsx_runtime.jsx('meta', {
            name: 'description',
            content: t('common:seo.description'),
          }),
          /*#__PURE__*/ jsx_runtime.jsx('meta', {
            name: 'keywords',
            content: t('common:seo.keywords'),
          }),
          /*#__PURE__*/ jsx_runtime.jsx('meta', {
            property: 'og:type',
            content: 'website',
          }),
          /*#__PURE__*/ jsx_runtime.jsx('meta', {
            property: 'og:title',
            content: 'Q.Link',
          }),
          /*#__PURE__*/ jsx_runtime.jsx('meta', {
            property: 'og:description',
            content: t('common:seo.description'),
          }),
          /*#__PURE__*/ jsx_runtime.jsx('meta', {
            property: 'og:url',
            content: 'https://q-link.minung.dev',
          }),
        ],
      });
    }
    /* harmony default export */ const components_Seo = Seo;

    // EXTERNAL MODULE: ./node_modules/next/link.js
    var next_link = __webpack_require__(1664);
    var link_default = /*#__PURE__*/ __webpack_require__.n(next_link);
    // EXTERNAL MODULE: ./components/LanguageSelector.tsx
    var LanguageSelector = __webpack_require__(7088); // CONCATENATED MODULE: ./components/Header.tsx
    function Header({}) {
      return /*#__PURE__*/ (0, jsx_runtime.jsxs)('header', {
        className: 'p-4 flex items-center relative',
        children: [
          /*#__PURE__*/ jsx_runtime.jsx('h1', {
            className:
              'text-4xl font-bold text-center text-base-content absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2',
            children: /*#__PURE__*/ (0, jsx_runtime.jsxs)(link_default(), {
              href: '/',
              children: [
                /*#__PURE__*/ jsx_runtime.jsx('span', {
                  className: 'text-primary',
                  children: 'Q.',
                }),
                'Link',
              ],
            }),
          }),
          /*#__PURE__*/ jsx_runtime.jsx(LanguageSelector /* default */.Z, {
            className: 'ml-auto',
          }),
        ],
      });
    }
    /* harmony default export */ const components_Header = Header; // CONCATENATED MODULE: ./components/Footer.tsx

    function Footer() {
      return /*#__PURE__*/ jsx_runtime.jsx('footer', {
        className: 'mt-16 border-t',
        children: /*#__PURE__*/ (0, jsx_runtime.jsxs)('div', {
          className: 'container flex py-4 text-sm',
          children: [
            /*#__PURE__*/ (0, jsx_runtime.jsxs)('div', {
              className: '',
              children: [
                '\xa9 ',
                new Date().getFullYear(),
                ' ',
                /*#__PURE__*/ jsx_runtime.jsx('a', {
                  className: 'link link-hover',
                  href: 'https://github.com/hmu332233',
                  target: '_blank',
                  rel: 'noreferrer',
                  children: 'Minung Han',
                }),
              ],
            }),
            /*#__PURE__*/ jsx_runtime.jsx('div', {
              className: 'ml-auto',
              children: /*#__PURE__*/ jsx_runtime.jsx('a', {
                href: 'https://github.com/hmu332233/q-link',
                target: '_blank',
                rel: 'noreferrer',
                children: /*#__PURE__*/ jsx_runtime.jsx('svg', {
                  className: 'fill-current',
                  xmlns: 'http://www.w3.org/2000/svg',
                  width: '24',
                  height: '24',
                  viewBox: '0 0 24 24',
                  children: /*#__PURE__*/ jsx_runtime.jsx('path', {
                    d: 'M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z',
                  }),
                }),
              }),
            }),
          ],
        }),
      });
    }
    /* harmony default export */ const components_Footer = Footer; // CONCATENATED MODULE: ./components/Layout.tsx

    function Layout({ children, hideHeader, fluid }) {
      return /*#__PURE__*/ (0, jsx_runtime.jsxs)(jsx_runtime.Fragment, {
        children: [
          /*#__PURE__*/ jsx_runtime.jsx(components_Seo, {}),
          /*#__PURE__*/ (0, jsx_runtime.jsxs)('div', {
            className: 'flex flex-col min-h-screen',
            children: [
              hideHeader ||
                /*#__PURE__*/ jsx_runtime.jsx(components_Header, {}),
              /*#__PURE__*/ jsx_runtime.jsx('main', {
                className: external_classnames_default()(
                  'grow',
                  fluid ? 'container-fluid' : 'container',
                ),
                children: children,
              }),
              /*#__PURE__*/ jsx_runtime.jsx(components_Footer, {}),
            ],
          }),
        ],
      });
    }
    /* harmony default export */ const components_Layout = Layout;

    /***/
  },
};
