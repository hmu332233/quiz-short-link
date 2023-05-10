'use strict';
exports.id = 650;
exports.ids = [650];
exports.modules = {
  /***/ 15: /***/ (
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

    function FeedbackMessage({ isCorrect }) {
      const { t } = (0,
      next_i18next__WEBPACK_IMPORTED_MODULE_1__.useTranslation)('links');
      return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(
        'span',
        {
          className: 'countdown whitespace-pre',
          children: isCorrect ? t('feedback.correct') : t('feedback.fail'),
        },
      );
    }
    /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ =
      FeedbackMessage;

    /***/
  },

  /***/ 3650: /***/ (module, __webpack_exports__, __webpack_require__) => {
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
          /* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ =
            __webpack_require__(1664);
          /* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default =
            /*#__PURE__*/ __webpack_require__.n(
              next_link__WEBPACK_IMPORTED_MODULE_2__,
            );
          /* harmony import */ var next_i18next__WEBPACK_IMPORTED_MODULE_3__ =
            __webpack_require__(1377);
          /* harmony import */ var next_i18next__WEBPACK_IMPORTED_MODULE_3___default =
            /*#__PURE__*/ __webpack_require__.n(
              next_i18next__WEBPACK_IMPORTED_MODULE_3__,
            );
          /* harmony import */ var components_DefaultInput__WEBPACK_IMPORTED_MODULE_4__ =
            __webpack_require__(8442);
          /* harmony import */ var components_MarkdownView__WEBPACK_IMPORTED_MODULE_5__ =
            __webpack_require__(701);
          /* harmony import */ var components_FeedbackMessage__WEBPACK_IMPORTED_MODULE_6__ =
            __webpack_require__(15);
          /* harmony import */ var components_ShareButton__WEBPACK_IMPORTED_MODULE_7__ =
            __webpack_require__(3607);
          var __webpack_async_dependencies__ =
            __webpack_handle_async_dependencies__([
              components_MarkdownView__WEBPACK_IMPORTED_MODULE_5__,
            ]);
          components_MarkdownView__WEBPACK_IMPORTED_MODULE_5__ = (
            __webpack_async_dependencies__.then
              ? (await __webpack_async_dependencies__)()
              : __webpack_async_dependencies__
          )[0];

          function QLinkContents({ url, contents, correct }) {
            const { t } = (0,
            next_i18next__WEBPACK_IMPORTED_MODULE_3__.useTranslation)();
            const [isCorrect, setIsCorrect] = (0,
            react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
            const [showFeedback, setShowFeedback] = (0,
            react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
            const handleSubmit = (e) => {
              e.preventDefault();
              const formData = new FormData(e.currentTarget);
              const { answer } = Object.fromEntries(formData);
              setIsCorrect(correct === answer);
              setShowFeedback(true);
            };
            (0, react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(() => {
              if (!isCorrect) return;
              const timeoutId = setTimeout(() => {
                location.href = url;
              }, 4500);
              return () => clearTimeout(timeoutId);
            }, [isCorrect, url]);
            return /*#__PURE__*/ (0,
            react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)('div', {
              className: 'flex flex-col items-center gap-y-4',
              children: [
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(
                  components_MarkdownView__WEBPACK_IMPORTED_MODULE_5__ /* ["default"] */.Z,
                  {
                    contents: contents,
                  },
                ),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(
                  'form',
                  {
                    className: 'w-full',
                    id: 'answer',
                    onSubmit: handleSubmit,
                    children:
                      /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(
                        components_DefaultInput__WEBPACK_IMPORTED_MODULE_4__ /* ["default"] */.Z,
                        {
                          name: 'answer',
                          placeholder: t('common:contents.answerPlaceholder'),
                          feedback: showFeedback
                            ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(
                                components_FeedbackMessage__WEBPACK_IMPORTED_MODULE_6__ /* ["default"] */.Z,
                                {
                                  isCorrect: isCorrect,
                                },
                              )
                            : undefined,
                        },
                      ),
                  },
                ),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(
                  'button',
                  {
                    className: 'btn btn-wide',
                    type: 'submit',
                    form: 'answer',
                    children: t('common:submit'),
                  },
                ),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(
                  components_ShareButton__WEBPACK_IMPORTED_MODULE_7__ /* ["default"] */.Z,
                  {
                    outline: true,
                  },
                ),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(
                  next_link__WEBPACK_IMPORTED_MODULE_2___default(),
                  {
                    href: '/links/new',
                    className: 'link',
                    children: t('common:contents.createLink'),
                  },
                ),
              ],
            });
          }
          /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ =
            QLinkContents;

          __webpack_async_result__();
        } catch (e) {
          __webpack_async_result__(e);
        }
      },
    );

    /***/
  },

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
    /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ShareButton;

    /***/
  },
};
