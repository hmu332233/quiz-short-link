(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [927],
  {
    91893: function (e, t, n) {
      (window.__NEXT_P = window.__NEXT_P || []).push([
        '/links/[id]',
        function () {
          return n(44222);
        },
      ]);
    },
    68442: function (e, t, n) {
      'use strict';
      var r = n(85893);
      n(67294);
      var s = n(37092);
      t.Z = function (e) {
        let {
          label: t,
          feedback: n,
          name: l,
          placeholder: a,
          type: c = 'text',
          required: i,
        } = e;
        return (0, r.jsx)(s.Z, {
          label: t,
          feedback: n,
          children: (0, r.jsx)('input', {
            className: 'input input-bordered w-full',
            type: c,
            name: l,
            placeholder: a,
            required: i,
          }),
        });
      };
    },
    37092: function (e, t, n) {
      'use strict';
      var r = n(85893);
      n(67294);
      var s = n(66017);
      t.Z = function (e) {
        let { children: t, label: n, feedback: l } = e;
        return (0, r.jsxs)('div', {
          className: 'form-control',
          children: [
            n && (0, r.jsx)(s.Z, { children: n }),
            t,
            l &&
              (0, r.jsx)('label', {
                className: 'label',
                children: (0, r.jsx)('span', {
                  className: 'label-text-alt',
                  children: l,
                }),
              }),
          ],
        });
      };
    },
    66017: function (e, t, n) {
      'use strict';
      var r = n(85893);
      n(67294),
        (t.Z = function (e) {
          let { children: t } = e;
          return (0, r.jsx)('label', {
            className: 'label',
            children: (0, r.jsx)('span', {
              className: 'label-text text-lg font-semibold',
              children: t,
            }),
          });
        });
    },
    7088: function (e, t, n) {
      'use strict';
      var r = n(85893);
      n(67294);
      var s = n(41664),
        l = n.n(s),
        a = n(11163),
        c = n(94184),
        i = n.n(c);
      let o = [
        { locale: 'en', text: 'English' },
        { locale: 'ko', text: '한국어' },
        { locale: 'ms', text: 'Bahasa Melayu' },
        { locale: 'tr', text: 'T\xfcrk\xe7e' },
      ];
      t.Z = function (e) {
        let { className: t } = e,
          n = (0, a.useRouter)();
        return (0, r.jsxs)('div', {
          className: i()(t, 'dropdown dropdown-end'),
          children: [
            (0, r.jsx)('label', {
              tabIndex: 0,
              className: 'btn btn-ghost m-1',
              children: 'Language',
            }),
            (0, r.jsx)('ul', {
              tabIndex: 0,
              className:
                'dropdown-content menu bg-base-100 w-56 rounded-box shadow',
              children: o.map((e) =>
                (0, r.jsx)(
                  'li',
                  {
                    children: (0, r.jsx)(l(), {
                      href: n.asPath,
                      locale: e.locale,
                      className: i()(n.locale === e.locale && 'active'),
                      children: e.text,
                    }),
                  },
                  e.locale,
                ),
              ),
            }),
          ],
        });
      };
    },
    27324: function (e, t, n) {
      'use strict';
      n.d(t, {
        Z: function () {
          return f;
        },
      });
      var r = n(85893);
      n(67294);
      var s = n(94184),
        l = n.n(s),
        a = n(9008),
        c = n.n(a),
        i = n(99984),
        o = function (e) {
          let {} = e,
            { t } = (0, i.$G)();
          return (0, r.jsxs)(c(), {
            children: [
              (0, r.jsx)('title', { children: 'Q.Link' }),
              (0, r.jsx)('meta', {
                name: 'description',
                content: t('common:seo.description'),
              }),
              (0, r.jsx)('meta', {
                name: 'keywords',
                content: t('common:seo.keywords'),
              }),
              (0, r.jsx)('meta', { property: 'og:type', content: 'website' }),
              (0, r.jsx)('meta', { property: 'og:title', content: 'Q.Link' }),
              (0, r.jsx)('meta', {
                property: 'og:description',
                content: t('common:seo.description'),
              }),
              (0, r.jsx)('meta', {
                property: 'og:url',
                content: 'https://q-link.minung.dev',
              }),
            ],
          });
        },
        u = n(41664),
        d = n.n(u),
        x = n(7088),
        m = function (e) {
          let {} = e;
          return (0, r.jsxs)('header', {
            className: 'p-4 flex items-center relative',
            children: [
              (0, r.jsx)('h1', {
                className:
                  'text-4xl font-bold text-center text-base-content absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2',
                children: (0, r.jsxs)(d(), {
                  href: '/',
                  children: [
                    (0, r.jsx)('span', {
                      className: 'text-primary',
                      children: 'Q.',
                    }),
                    'Link',
                  ],
                }),
              }),
              (0, r.jsx)(x.Z, { className: 'ml-auto' }),
            ],
          });
        },
        h = function () {
          return (0, r.jsx)('footer', {
            className: 'mt-16 border-t',
            children: (0, r.jsxs)('div', {
              className: 'container flex py-4 text-sm',
              children: [
                (0, r.jsxs)('div', {
                  className: '',
                  children: [
                    '\xa9 ',
                    new Date().getFullYear(),
                    ' ',
                    (0, r.jsx)('a', {
                      className: 'link link-hover',
                      href: 'https://github.com/hmu332233',
                      target: '_blank',
                      rel: 'noreferrer',
                      children: 'Minung Han',
                    }),
                  ],
                }),
                (0, r.jsx)('div', {
                  className: 'ml-auto',
                  children: (0, r.jsx)('a', {
                    href: 'https://github.com/hmu332233/q-link',
                    target: '_blank',
                    rel: 'noreferrer',
                    children: (0, r.jsx)('svg', {
                      className: 'fill-current',
                      xmlns: 'http://www.w3.org/2000/svg',
                      width: '24',
                      height: '24',
                      viewBox: '0 0 24 24',
                      children: (0, r.jsx)('path', {
                        d: 'M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z',
                      }),
                    }),
                  }),
                }),
              ],
            }),
          });
        },
        f = function (e) {
          let { children: t, hideHeader: n, fluid: s } = e;
          return (0, r.jsxs)(r.Fragment, {
            children: [
              (0, r.jsx)(o, {}),
              (0, r.jsxs)('div', {
                className: 'flex flex-col min-h-screen',
                children: [
                  n || (0, r.jsx)(m, {}),
                  (0, r.jsx)('main', {
                    className: l()('grow', s ? 'container-fluid' : 'container'),
                    children: t,
                  }),
                  (0, r.jsx)(h, {}),
                ],
              }),
            ],
          });
        };
    },
    40701: function (e, t, n) {
      'use strict';
      var r = n(85893);
      n(67294);
      var s = n(78817),
        l = n(45843),
        a = n(93179),
        c = n(29623);
      t.Z = function (e) {
        let { contents: t } = e;
        return (0, r.jsx)('article', {
          className: 'prose w-full',
          children: (0, r.jsx)(s.D, {
            remarkPlugins: [l.Z],
            components: {
              code(e) {
                let { node: t, inline: n, className: s, children: l, ...i } = e;
                if (n)
                  return (0, r.jsx)('code', {
                    className: s,
                    ...i,
                    children: l,
                  });
                let [, o] = /language-(\w+)/.exec(s || '') || [];
                return (0, r.jsx)(a.Z, {
                  style: c.Z,
                  language: o || 'text',
                  PreTag: 'div',
                  ...i,
                  children: String(l).replace(/\n$/, ''),
                });
              },
            },
            children: t,
          }),
        });
      };
    },
    37350: function (e, t, n) {
      'use strict';
      n.d(t, {
        Z: function () {
          return x;
        },
      });
      var r = n(85893),
        s = n(67294),
        l = n(41664),
        a = n.n(l),
        c = n(99984),
        i = n(68442),
        o = n(40701),
        u = function (e) {
          let { isCorrect: t } = e,
            { t: n } = (0, c.$G)('links');
          return (0, r.jsx)('span', {
            className: 'countdown whitespace-pre',
            children: n(t ? 'feedback.correct' : 'feedback.fail'),
          });
        },
        d = n(53607),
        x = function (e) {
          let { url: t, contents: n, correct: l } = e,
            { t: x } = (0, c.$G)(),
            [m, h] = (0, s.useState)(!1),
            [f, j] = (0, s.useState)(!1),
            p = (e) => {
              e.preventDefault();
              let t = new FormData(e.currentTarget),
                { answer: n } = Object.fromEntries(t);
              h(l === n), j(!0);
            };
          return (
            (0, s.useEffect)(() => {
              if (!m) return;
              let e = setTimeout(() => {
                location.href = t;
              }, 4500);
              return () => clearTimeout(e);
            }, [m, t]),
            (0, r.jsxs)('div', {
              className: 'flex flex-col items-center gap-y-4',
              children: [
                (0, r.jsx)(o.Z, { contents: n }),
                (0, r.jsx)('form', {
                  className: 'w-full',
                  id: 'answer',
                  onSubmit: p,
                  children: (0, r.jsx)(i.Z, {
                    name: 'answer',
                    placeholder: x('common:contents.answerPlaceholder'),
                    feedback: f ? (0, r.jsx)(u, { isCorrect: m }) : void 0,
                  }),
                }),
                (0, r.jsx)('button', {
                  className: 'btn btn-wide',
                  type: 'submit',
                  form: 'answer',
                  children: x('common:submit'),
                }),
                (0, r.jsx)(d.Z, { outline: !0 }),
                (0, r.jsx)(a(), {
                  href: '/links/new',
                  className: 'link',
                  children: x('common:contents.createLink'),
                }),
              ],
            })
          );
        };
    },
    53607: function (e, t, n) {
      'use strict';
      var r = n(85893),
        s = n(99984),
        l = n(94184),
        a = n.n(l);
      t.Z = function (e) {
        let { outline: t, url: n } = e,
          { t: l } = (0, s.$G)(),
          c = async () => {
            null != n || (n = location.href);
            let e = void 0 !== navigator.share;
            e
              ? await navigator.share({ title: 'Q.Link', url: n })
              : (await navigator.clipboard.writeText(n),
                alert(l('common:copied')));
          };
        return (0, r.jsx)('button', {
          className: a()('btn btn-wide', t && 'btn-outline'),
          onClick: c,
          children: l('common:share'),
        });
      };
    },
    44222: function (e, t, n) {
      'use strict';
      n.r(t),
        n.d(t, {
          __N_SSP: function () {
            return i;
          },
        });
      var r = n(85893),
        s = n(9008),
        l = n.n(s),
        a = n(27324),
        c = n(37350),
        i = !0;
      t.default = function (e) {
        let { id: t, url: n, contents: s, correct: i } = e;
        return (0, r.jsxs)(a.Z, {
          children: [
            (0, r.jsx)(l(), {
              children: (0, r.jsxs)('title', { children: ['Q.Link - ', t] }),
            }),
            (0, r.jsx)(c.Z, { url: n, contents: s, correct: i }),
          ],
        });
      };
    },
  },
  function (e) {
    e.O(0, [664, 110, 774, 888, 179], function () {
      return e((e.s = 91893));
    }),
      (_N_E = e.O());
  },
]);
