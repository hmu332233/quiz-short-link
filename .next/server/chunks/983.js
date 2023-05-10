'use strict';
exports.id = 983;
exports.ids = [983];
exports.modules = {
  /***/ 8442: /***/ (
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
    /* harmony import */ var components_FormGroup__WEBPACK_IMPORTED_MODULE_2__ =
      __webpack_require__(7092);

    function DefaultInput({
      label,
      feedback,
      name,
      placeholder,
      type = 'text',
      required,
    }) {
      return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(
        components_FormGroup__WEBPACK_IMPORTED_MODULE_2__ /* ["default"] */.Z,
        {
          label: label,
          feedback: feedback,
          children:
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(
              'input',
              {
                className: 'input input-bordered w-full',
                type: type,
                name: name,
                placeholder: placeholder,
                required: required,
              },
            ),
        },
      );
    }
    /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ =
      DefaultInput;

    /***/
  },

  /***/ 7092: /***/ (
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
    /* harmony import */ var components_Label__WEBPACK_IMPORTED_MODULE_2__ =
      __webpack_require__(6017);

    function FormGroup({ children, label, feedback }) {
      return /*#__PURE__*/ (0,
      react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)('div', {
        className: 'form-control',
        children: [
          label &&
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(
              components_Label__WEBPACK_IMPORTED_MODULE_2__ /* ["default"] */.Z,
              {
                children: label,
              },
            ),
          children,
          feedback &&
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(
              'label',
              {
                className: 'label',
                children:
                  /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(
                    'span',
                    {
                      className: 'label-text-alt',
                      children: feedback,
                    },
                  ),
              },
            ),
        ],
      });
    }
    /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = FormGroup;

    /***/
  },

  /***/ 6017: /***/ (
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

    function Label({ children }) {
      return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(
        'label',
        {
          className: 'label',
          children:
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(
              'span',
              {
                className: 'label-text text-lg font-semibold',
                children: children,
              },
            ),
        },
      );
    }
    /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = Label;

    /***/
  },

  /***/ 701: /***/ (module, __webpack_exports__, __webpack_require__) => {
    __webpack_require__.a(
      module,
      async (
        __webpack_handle_async_dependencies__,
        __webpack_async_result__,
      ) => {
        try {
          /* harmony export */ __webpack_require__.d(__webpack_exports__, {
            /* harmony export */ Z: () => __WEBPACK_DEFAULT_EXPORT__,
            /* harmony export */
          });
          /* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ =
            __webpack_require__(5893);
          /* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ =
            __webpack_require__(6689);
          /* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default =
            /*#__PURE__*/ __webpack_require__.n(
              react__WEBPACK_IMPORTED_MODULE_1__,
            );
          /* harmony import */ var react_markdown__WEBPACK_IMPORTED_MODULE_2__ =
            __webpack_require__(3135);
          /* harmony import */ var remark_gfm__WEBPACK_IMPORTED_MODULE_3__ =
            __webpack_require__(6809);
          /* harmony import */ var react_syntax_highlighter__WEBPACK_IMPORTED_MODULE_4__ =
            __webpack_require__(727);
          /* harmony import */ var react_syntax_highlighter__WEBPACK_IMPORTED_MODULE_4___default =
            /*#__PURE__*/ __webpack_require__.n(
              react_syntax_highlighter__WEBPACK_IMPORTED_MODULE_4__,
            );
          /* harmony import */ var react_syntax_highlighter_dist_cjs_styles_prism_tomorrow__WEBPACK_IMPORTED_MODULE_5__ =
            __webpack_require__(2381);
          /* harmony import */ var react_syntax_highlighter_dist_cjs_styles_prism_tomorrow__WEBPACK_IMPORTED_MODULE_5___default =
            /*#__PURE__*/ __webpack_require__.n(
              react_syntax_highlighter_dist_cjs_styles_prism_tomorrow__WEBPACK_IMPORTED_MODULE_5__,
            );
          var __webpack_async_dependencies__ =
            __webpack_handle_async_dependencies__([
              react_markdown__WEBPACK_IMPORTED_MODULE_2__,
              remark_gfm__WEBPACK_IMPORTED_MODULE_3__,
            ]);
          [
            react_markdown__WEBPACK_IMPORTED_MODULE_2__,
            remark_gfm__WEBPACK_IMPORTED_MODULE_3__,
          ] = __webpack_async_dependencies__.then
            ? (await __webpack_async_dependencies__)()
            : __webpack_async_dependencies__;

          function MarkdownView({ contents }) {
            return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(
              'article',
              {
                className: 'prose w-full',
                children:
                  /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(
                    react_markdown__WEBPACK_IMPORTED_MODULE_2__['default'],
                    {
                      remarkPlugins: [
                        remark_gfm__WEBPACK_IMPORTED_MODULE_3__['default'],
                      ],
                      components: {
                        code({ node, inline, className, children, ...props }) {
                          if (inline) {
                            return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(
                              'code',
                              {
                                className: className,
                                ...props,
                                children: children,
                              },
                            );
                          }
                          const [, language] =
                            /language-(\w+)/.exec(className || '') || [];
                          return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(
                            react_syntax_highlighter__WEBPACK_IMPORTED_MODULE_4__.Prism,
                            {
                              // @ts-ignore
                              style:
                                react_syntax_highlighter_dist_cjs_styles_prism_tomorrow__WEBPACK_IMPORTED_MODULE_5___default(),
                              language: language || 'text',
                              PreTag: 'div',
                              ...props,
                              children: String(children).replace(/\n$/, ''),
                            },
                          );
                        },
                      },
                      children: contents,
                    },
                  ),
              },
            );
          }
          /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ =
            MarkdownView;

          __webpack_async_result__();
        } catch (e) {
          __webpack_async_result__(e);
        }
      },
    );

    /***/
  },
};
