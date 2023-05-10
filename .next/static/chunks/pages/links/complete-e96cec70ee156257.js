(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [553],
  {
    92561: function (e, t, n) {
      (window.__NEXT_P = window.__NEXT_P || []).push([
        '/links/complete',
        function () {
          return n(80945);
        },
      ]);
    },
    7088: function (e, t, n) {
      'use strict';
      var s = n(85893);
      n(67294);
      var a = n(41664),
        r = n.n(a),
        l = n(11163),
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
          n = (0, l.useRouter)();
        return (0, s.jsxs)('div', {
          className: i()(t, 'dropdown dropdown-end'),
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
          return p;
        },
      });
      var s = n(85893);
      n(67294);
      var a = n(94184),
        r = n.n(a),
        l = n(9008),
        c = n.n(l),
        i = n(99984),
        o = function (e) {
          let {} = e,
            { t } = (0, i.$G)();
          return (0, s.jsxs)(c(), {
            children: [
              (0, s.jsx)('title', { children: 'Q.Link' }),
              (0, s.jsx)('meta', {
                name: 'description',
                content: t('common:seo.description'),
              }),
              (0, s.jsx)('meta', {
                name: 'keywords',
                content: t('common:seo.keywords'),
              }),
              (0, s.jsx)('meta', { property: 'og:type', content: 'website' }),
              (0, s.jsx)('meta', { property: 'og:title', content: 'Q.Link' }),
              (0, s.jsx)('meta', {
                property: 'og:description',
                content: t('common:seo.description'),
              }),
              (0, s.jsx)('meta', {
                property: 'og:url',
                content: 'https://q-link.minung.dev',
              }),
            ],
          });
        },
        d = n(41664),
        x = n.n(d),
        m = n(7088),
        u = function (e) {
          let {} = e;
          return (0, s.jsxs)('header', {
            className: 'p-4 flex items-center relative',
            children: [
              (0, s.jsx)('h1', {
                className:
                  'text-4xl font-bold text-center text-base-content absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2',
                children: (0, s.jsxs)(x(), {
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
              (0, s.jsx)(m.Z, { className: 'ml-auto' }),
            ],
          });
        },
        h = function () {
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
        p = function (e) {
          let { children: t, hideHeader: n, fluid: a } = e;
          return (0, s.jsxs)(s.Fragment, {
            children: [
              (0, s.jsx)(o, {}),
              (0, s.jsxs)('div', {
                className: 'flex flex-col min-h-screen',
                children: [
                  n || (0, s.jsx)(u, {}),
                  (0, s.jsx)('main', {
                    className: r()('grow', a ? 'container-fluid' : 'container'),
                    children: t,
                  }),
                  (0, s.jsx)(h, {}),
                ],
              }),
            ],
          });
        };
    },
    53607: function (e, t, n) {
      'use strict';
      var s = n(85893),
        a = n(99984),
        r = n(94184),
        l = n.n(r);
      t.Z = function (e) {
        let { outline: t, url: n } = e,
          { t: r } = (0, a.$G)(),
          c = async () => {
            null != n || (n = location.href);
            let e = void 0 !== navigator.share;
            e
              ? await navigator.share({ title: 'Q.Link', url: n })
              : (await navigator.clipboard.writeText(n),
                alert(r('common:copied')));
          };
        return (0, s.jsx)('button', {
          className: l()('btn btn-wide', t && 'btn-outline'),
          onClick: c,
          children: r('common:share'),
        });
      };
    },
    17974: function (e, t, n) {
      'use strict';
      var s = n(85893),
        a = n(99984),
        r = n(94184),
        l = n.n(r);
      let c = [
        { id: 'quiz', textId: 'steps.two' },
        { id: 'link', textId: 'steps.one' },
        { id: 'complete', textId: 'steps.three' },
      ];
      t.Z = function (e) {
        let { step: t } = e,
          { t: n } = (0, a.$G)('links');
        return (0, s.jsx)('ul', {
          className: 'steps w-96',
          children: c.map((e, a) =>
            (0, s.jsx)(
              'li',
              {
                className: l()('step', t > a && 'step-primary'),
                children: n(e.textId),
              },
              e.id,
            ),
          ),
        });
      };
    },
    80945: function (e, t, n) {
      'use strict';
      n.r(t),
        n.d(t, {
          __N_SSP: function () {
            return m;
          },
        });
      var s = n(85893),
        a = n(67294),
        r = n(99984),
        l = n(11163),
        c = n(41664),
        i = n.n(c),
        o = n(27324),
        d = n(17974),
        x = n(53607),
        m = !0;
      t.default = function () {
        let { t: e } = (0, r.$G)('common'),
          [t, n] = (0, a.useState)(!1),
          c = (0, l.useRouter)(),
          {
            query: { link: m = '' },
          } = c;
        return (0, s.jsx)(o.Z, {
          children: (0, s.jsxs)('div', {
            className: 'flex flex-col items-center gap-y-4',
            children: [
              (0, s.jsx)(d.Z, { step: 3 }),
              (0, s.jsx)(i(), {
                href: m,
                className: 'link link-accent',
                children: m,
              }),
              (0, s.jsxs)('div', {
                className: 'indicator',
                children: [
                  t &&
                    (0, s.jsx)('span', {
                      className: 'indicator-item',
                      children: (0, s.jsx)('span', {
                        className: 'badge badge-secondary animate-head-shake',
                        children: e('copied'),
                      }),
                    }),
                  (0, s.jsx)(x.Z, { url: m }),
                ],
              }),
            ],
          }),
        });
      };
    },
  },
  function (e) {
    e.O(0, [664, 774, 888, 179], function () {
      return e((e.s = 92561));
    }),
      (_N_E = e.O());
  },
]);
