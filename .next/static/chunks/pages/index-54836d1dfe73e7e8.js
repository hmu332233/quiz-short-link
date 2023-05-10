(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [405],
  {
    48312: function (e, n, t) {
      (window.__NEXT_P = window.__NEXT_P || []).push([
        '/',
        function () {
          return t(42603);
        },
      ]);
    },
    7088: function (e, n, t) {
      'use strict';
      var s = t(85893);
      t(67294);
      var l = t(41664),
        r = t.n(l),
        a = t(11163),
        c = t(94184),
        i = t.n(c);
      let o = [
        { locale: 'en', text: 'English' },
        { locale: 'ko', text: '한국어' },
        { locale: 'ms', text: 'Bahasa Melayu' },
        { locale: 'tr', text: 'T\xfcrk\xe7e' },
      ];
      n.Z = function (e) {
        let { className: n } = e,
          t = (0, a.useRouter)();
        return (0, s.jsxs)('div', {
          className: i()(n, 'dropdown dropdown-end'),
          children: [
            (0, s.jsx)('label', {
              tabIndex: 0,
              className: 'btn btn-ghost m-1',
              children: 'Language',
            }),
            (0, s.jsx)('ul', {
              tabIndex: 0,
              className:
                'dropdown-content menu bg-base-100 w-56 rounded-box shadow',
              children: o.map((e) =>
                (0, s.jsx)(
                  'li',
                  {
                    children: (0, s.jsx)(r(), {
                      href: t.asPath,
                      locale: e.locale,
                      className: i()(t.locale === e.locale && 'active'),
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
    27324: function (e, n, t) {
      'use strict';
      t.d(n, {
        Z: function () {
          return f;
        },
      });
      var s = t(85893);
      t(67294);
      var l = t(94184),
        r = t.n(l),
        a = t(9008),
        c = t.n(a),
        i = t(99984),
        o = function (e) {
          let {} = e,
            { t: n } = (0, i.$G)();
          return (0, s.jsxs)(c(), {
            children: [
              (0, s.jsx)('title', { children: 'Q.Link' }),
              (0, s.jsx)('meta', {
                name: 'description',
                content: n('common:seo.description'),
              }),
              (0, s.jsx)('meta', {
                name: 'keywords',
                content: n('common:seo.keywords'),
              }),
              (0, s.jsx)('meta', { property: 'og:type', content: 'website' }),
              (0, s.jsx)('meta', { property: 'og:title', content: 'Q.Link' }),
              (0, s.jsx)('meta', {
                property: 'og:description',
                content: n('common:seo.description'),
              }),
              (0, s.jsx)('meta', {
                property: 'og:url',
                content: 'https://q-link.minung.dev',
              }),
            ],
          });
        },
        x = t(41664),
        d = t.n(x),
        h = t(7088),
        m = function (e) {
          let {} = e;
          return (0, s.jsxs)('header', {
            className: 'p-4 flex items-center relative',
            children: [
              (0, s.jsx)('h1', {
                className:
                  'text-4xl font-bold text-center text-base-content absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2',
                children: (0, s.jsxs)(d(), {
                  href: '/',
                  children: [
                    (0, s.jsx)('span', {
                      className: 'text-primary',
                      children: 'Q.',
                    }),
                    'Link',
                  ],
                }),
              }),
              (0, s.jsx)(h.Z, { className: 'ml-auto' }),
            ],
          });
        },
        u = function () {
          return (0, s.jsx)('footer', {
            className: 'mt-16 border-t',
            children: (0, s.jsxs)('div', {
              className: 'container flex py-4 text-sm',
              children: [
                (0, s.jsxs)('div', {
                  className: '',
                  children: [
                    '\xa9 ',
                    new Date().getFullYear(),
                    ' ',
                    (0, s.jsx)('a', {
                      className: 'link link-hover',
                      href: 'https://github.com/hmu332233',
                      target: '_blank',
                      rel: 'noreferrer',
                      children: 'Minung Han',
                    }),
                  ],
                }),
                (0, s.jsx)('div', {
                  className: 'ml-auto',
                  children: (0, s.jsx)('a', {
                    href: 'https://github.com/hmu332233/q-link',
                    target: '_blank',
                    rel: 'noreferrer',
                    children: (0, s.jsx)('svg', {
                      className: 'fill-current',
                      xmlns: 'http://www.w3.org/2000/svg',
                      width: '24',
                      height: '24',
                      viewBox: '0 0 24 24',
                      children: (0, s.jsx)('path', {
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
          let { children: n, hideHeader: t, fluid: l } = e;
          return (0, s.jsxs)(s.Fragment, {
            children: [
              (0, s.jsx)(o, {}),
              (0, s.jsxs)('div', {
                className: 'flex flex-col min-h-screen',
                children: [
                  t || (0, s.jsx)(m, {}),
                  (0, s.jsx)('main', {
                    className: r()('grow', l ? 'container-fluid' : 'container'),
                    children: n,
                  }),
                  (0, s.jsx)(u, {}),
                ],
              }),
            ],
          });
        };
    },
    51465: function (e, n, t) {
      'use strict';
      var s = t(85893),
        l = t(67294),
        r = t(94184),
        a = t.n(r);
      n.Z = function (e) {
        let { className: n, children: t, onClick: r, ...c } = e,
          [i, o] = (0, l.useState)(!1),
          x = (e) => {
            o(!0), r && r(e);
          };
        return (0, s.jsx)('button', {
          className: a()('btn', i && 'loading', n),
          onClick: x,
          ...c,
          children: i || t,
        });
      };
    },
    42603: function (e, n, t) {
      'use strict';
      t.r(n),
        t.d(n, {
          __N_SSP: function () {
            return x;
          },
        });
      var s = t(85893),
        l = t(99984),
        r = t(41664),
        a = t.n(r),
        c = t(27324),
        i = t(51465),
        o = t(7088),
        x = !0;
      n.default = function () {
        let { t: e } = (0, l.$G)('main');
        return (0, s.jsx)(c.Z, {
          hideHeader: !0,
          children: (0, s.jsx)('div', {
            className: 'flex flex-col items-center gap-y-8',
            children: (0, s.jsx)('div', {
              className: 'hero min-h-screen',
              children: (0, s.jsx)('div', {
                className: 'hero-content w-full text-center mb-24',
                children: (0, s.jsxs)('div', {
                  className: 'w-full',
                  children: [
                    (0, s.jsx)('h1', {
                      className: 'text-4xl font-bold text-base-content ',
                      children: (0, s.jsxs)(a(), {
                        href: '/',
                        children: [
                          (0, s.jsx)('span', {
                            className: 'text-primary',
                            children: 'Q.',
                          }),
                          'Link',
                        ],
                      }),
                    }),
                    (0, s.jsx)('p', {
                      className: 'py-6 whitespace-pre-line',
                      children: e('description'),
                    }),
                    (0, s.jsxs)('div', {
                      className: 'flex w-full gap-3',
                      children: [
                        (0, s.jsx)(a(), {
                          href: '/links/new',
                          className: 'btn btn-primary flex-1',
                          children: e('button.create'),
                        }),
                        (0, s.jsx)(a(), {
                          href: '/intro',
                          className: 'btn flex-1',
                          children: e('button.what'),
                        }),
                        (0, s.jsx)(a(), {
                          href: e('demoUrl'),
                          passHref: !0,
                          className: 'inline-flex flex-1',
                          children: (0, s.jsx)(i.Z, {
                            className: 'btn-outline w-full',
                            children: e('button.demo'),
                          }),
                        }),
                      ],
                    }),
                    (0, s.jsx)('div', {
                      className: 'flex justify-center w-full mt-4',
                      children: (0, s.jsx)(o.Z, {}),
                    }),
                  ],
                }),
              }),
            }),
          }),
        });
      };
    },
  },
  function (e) {
    e.O(0, [664, 774, 888, 179], function () {
      return e((e.s = 48312));
    }),
      (_N_E = e.O());
  },
]);
