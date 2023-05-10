(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [888],
  {
    8679: function (e, t, n) {
      'use strict';
      var r = n(59864),
        o = {
          childContextTypes: !0,
          contextType: !0,
          contextTypes: !0,
          defaultProps: !0,
          displayName: !0,
          getDefaultProps: !0,
          getDerivedStateFromError: !0,
          getDerivedStateFromProps: !0,
          mixins: !0,
          propTypes: !0,
          type: !0,
        },
        i = {
          name: !0,
          length: !0,
          prototype: !0,
          caller: !0,
          callee: !0,
          arguments: !0,
          arity: !0,
        },
        a = {
          $$typeof: !0,
          compare: !0,
          defaultProps: !0,
          displayName: !0,
          propTypes: !0,
          type: !0,
        },
        s = {};
      function c(e) {
        return r.isMemo(e) ? a : s[e.$$typeof] || o;
      }
      (s[r.ForwardRef] = {
        $$typeof: !0,
        render: !0,
        defaultProps: !0,
        displayName: !0,
        propTypes: !0,
      }),
        (s[r.Memo] = a);
      var u = Object.defineProperty,
        l = Object.getOwnPropertyNames,
        f = Object.getOwnPropertySymbols,
        p = Object.getOwnPropertyDescriptor,
        g = Object.getPrototypeOf,
        d = Object.prototype;
      e.exports = function e(t, n, r) {
        if ('string' != typeof n) {
          if (d) {
            var o = g(n);
            o && o !== d && e(t, o, r);
          }
          var a = l(n);
          f && (a = a.concat(f(n)));
          for (var s = c(t), h = c(n), v = 0; v < a.length; ++v) {
            var y = a[v];
            if (!i[y] && !(r && r[y]) && !(h && h[y]) && !(s && s[y])) {
              var m = p(n, y);
              try {
                u(t, y, m);
              } catch (e) {}
            }
          }
        }
        return t;
      };
    },
    99984: function (e, t, n) {
      'use strict';
      n.d(t, {
        cC: function () {
          return F;
        },
        Jc: function () {
          return e9;
        },
        $G: function () {
          return Z;
        },
      });
      var r,
        o = n(91);
      function i(e) {
        return (i =
          'function' == typeof Symbol && 'symbol' == typeof Symbol.iterator
            ? function (e) {
                return typeof e;
              }
            : function (e) {
                return e &&
                  'function' == typeof Symbol &&
                  e.constructor === Symbol &&
                  e !== Symbol.prototype
                  ? 'symbol'
                  : typeof e;
              })(e);
      }
      var a = n(4942),
        s = n(67294),
        c = n(71739),
        u = n.n(c),
        l = /\s([^'"/\s><]+?)[\s/>]|([^\s=]+)=\s?(".*?"|'.*?')/g;
      function f(e) {
        var t = {
            type: 'tag',
            name: '',
            voidElement: !1,
            attrs: {},
            children: [],
          },
          n = e.match(/<\/?([^\s]+?)[/\s>]/);
        if (
          n &&
          ((t.name = n[1]),
          (u()[n[1]] || '/' === e.charAt(e.length - 2)) && (t.voidElement = !0),
          t.name.startsWith('!--'))
        ) {
          var r = e.indexOf('-->');
          return { type: 'comment', comment: -1 !== r ? e.slice(4, r) : '' };
        }
        for (var o = new RegExp(l), i = null; null !== (i = o.exec(e)); )
          if (i[0].trim()) {
            if (i[1]) {
              var a = i[1].trim(),
                s = [a, ''];
              a.indexOf('=') > -1 && (s = a.split('=')),
                (t.attrs[s[0]] = s[1]),
                o.lastIndex--;
            } else
              i[2] &&
                (t.attrs[i[2]] = i[3].trim().substring(1, i[3].length - 1));
          }
        return t;
      }
      var p = /<[a-zA-Z0-9\-\!\/](?:"[^"]*"|'[^']*'|[^'">])*>/g,
        g = /^\s*$/,
        d = Object.create(null),
        h = {
          parse: function (e, t) {
            t || (t = {}), t.components || (t.components = d);
            var n,
              r = [],
              o = [],
              i = -1,
              a = !1;
            if (0 !== e.indexOf('<')) {
              var s = e.indexOf('<');
              r.push({
                type: 'text',
                content: -1 === s ? e : e.substring(0, s),
              });
            }
            return (
              e.replace(p, function (s, c) {
                if (a) {
                  if (s !== '</' + n.name + '>') return;
                  a = !1;
                }
                var u,
                  l = '/' !== s.charAt(1),
                  p = s.startsWith('<!--'),
                  d = c + s.length,
                  h = e.charAt(d);
                if (p) {
                  var v = f(s);
                  return i < 0
                    ? (r.push(v), r)
                    : ((u = o[i]).children.push(v), r);
                }
                if (
                  (l &&
                    (i++,
                    'tag' === (n = f(s)).type &&
                      t.components[n.name] &&
                      ((n.type = 'component'), (a = !0)),
                    n.voidElement ||
                      a ||
                      !h ||
                      '<' === h ||
                      n.children.push({
                        type: 'text',
                        content: e.slice(d, e.indexOf('<', d)),
                      }),
                    0 === i && r.push(n),
                    (u = o[i - 1]) && u.children.push(n),
                    (o[i] = n)),
                  (!l || n.voidElement) &&
                    (i > -1 &&
                      (n.voidElement || n.name === s.slice(2, -1)) &&
                      (n = -1 == --i ? r : o[i]),
                    !a && '<' !== h && h))
                ) {
                  u = -1 === i ? r : o[i].children;
                  var y = e.indexOf('<', d),
                    m = e.slice(d, -1 === y ? void 0 : y);
                  g.test(m) && (m = ' '),
                    ((y > -1 && i + u.length >= 0) || ' ' !== m) &&
                      u.push({ type: 'text', content: m });
                }
              }),
              r
            );
          },
          stringify: function (e) {
            return e.reduce(function (e, t) {
              return (
                e +
                (function e(t, n) {
                  switch (n.type) {
                    case 'text':
                      return t + n.content;
                    case 'tag':
                      return (
                        (t +=
                          '<' +
                          n.name +
                          (n.attrs
                            ? (function (e) {
                                var t = [];
                                for (var n in e) t.push(n + '="' + e[n] + '"');
                                return t.length ? ' ' + t.join(' ') : '';
                              })(n.attrs)
                            : '') +
                          (n.voidElement ? '/>' : '>')),
                        n.voidElement
                          ? t
                          : t + n.children.reduce(e, '') + '</' + n.name + '>'
                      );
                    case 'comment':
                      return t + '<!--' + n.comment + '-->';
                  }
                })('', t)
              );
            }, '');
          },
        };
      function v(e, t) {
        if (!(e instanceof t))
          throw TypeError('Cannot call a class as a function');
      }
      function y(e, t) {
        for (var n = 0; n < t.length; n++) {
          var r = t[n];
          (r.enumerable = r.enumerable || !1),
            (r.configurable = !0),
            'value' in r && (r.writable = !0),
            Object.defineProperty(e, r.key, r);
        }
      }
      function m(e, t, n) {
        return (
          t && y(e.prototype, t),
          n && y(e, n),
          Object.defineProperty(e, 'prototype', { writable: !1 }),
          e
        );
      }
      var b =
          /&(?:amp|#38|lt|#60|gt|#62|apos|#39|quot|#34|nbsp|#160|copy|#169|reg|#174|hellip|#8230|#x2F|#47);/g,
        O = {
          '&amp;': '&',
          '&#38;': '&',
          '&lt;': '<',
          '&#60;': '<',
          '&gt;': '>',
          '&#62;': '>',
          '&apos;': "'",
          '&#39;': "'",
          '&quot;': '"',
          '&#34;': '"',
          '&nbsp;': ' ',
          '&#160;': ' ',
          '&copy;': '\xa9',
          '&#169;': '\xa9',
          '&reg;': '\xae',
          '&#174;': '\xae',
          '&hellip;': '…',
          '&#8230;': '…',
          '&#x2F;': '/',
          '&#47;': '/',
        },
        k = function (e) {
          return O[e];
        },
        x = {
          bindI18n: 'languageChanged',
          bindI18nStore: '',
          transEmptyNodeValue: '',
          transSupportBasicHtmlNodes: !0,
          transWrapTextNodes: '',
          transKeepBasicHtmlNodesFor: ['br', 'strong', 'i', 'p'],
          useSuspense: !0,
          unescape: function (e) {
            return e.replace(b, k);
          },
        },
        w = (0, s.createContext)(),
        j = (function () {
          function e() {
            v(this, e), (this.usedNamespaces = {});
          }
          return (
            m(e, [
              {
                key: 'addUsedNamespaces',
                value: function (e) {
                  var t = this;
                  e.forEach(function (e) {
                    t.usedNamespaces[e] || (t.usedNamespaces[e] = !0);
                  });
                },
              },
              {
                key: 'getUsedNamespaces',
                value: function () {
                  return Object.keys(this.usedNamespaces);
                },
              },
            ]),
            e
          );
        })();
      function S() {
        if (console && console.warn) {
          for (var e, t = arguments.length, n = Array(t), r = 0; r < t; r++)
            n[r] = arguments[r];
          'string' == typeof n[0] && (n[0] = 'react-i18next:: '.concat(n[0])),
            (e = console).warn.apply(e, n);
        }
      }
      var P = {};
      function L() {
        for (var e = arguments.length, t = Array(e), n = 0; n < e; n++)
          t[n] = arguments[n];
        ('string' == typeof t[0] && P[t[0]]) ||
          ('string' == typeof t[0] && (P[t[0]] = new Date()),
          S.apply(void 0, t));
      }
      function N(e, t, n) {
        e.loadNamespaces(t, function () {
          e.isInitialized
            ? n()
            : e.on('initialized', function t() {
                setTimeout(function () {
                  e.off('initialized', t);
                }, 0),
                  n();
              });
        });
      }
      var E = ['format'],
        R = [
          'children',
          'count',
          'parent',
          'i18nKey',
          'context',
          'tOptions',
          'values',
          'defaults',
          'components',
          'ns',
          'i18n',
          't',
          'shouldUnescape',
        ];
      function C(e, t) {
        var n = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var r = Object.getOwnPropertySymbols(e);
          t &&
            (r = r.filter(function (t) {
              return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            n.push.apply(n, r);
        }
        return n;
      }
      function D(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = null != arguments[t] ? arguments[t] : {};
          t % 2
            ? C(Object(n), !0).forEach(function (t) {
                (0, a.Z)(e, t, n[t]);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
            : C(Object(n)).forEach(function (t) {
                Object.defineProperty(
                  e,
                  t,
                  Object.getOwnPropertyDescriptor(n, t),
                );
              });
        }
        return e;
      }
      function T(e, t) {
        if (!e) return !1;
        var n = e.props ? e.props.children : e.children;
        return t ? n.length > 0 : !!n;
      }
      function I(e) {
        return e ? (e.props ? e.props.children : e.children) : [];
      }
      function A(e) {
        return Array.isArray(e) ? e : [e];
      }
      function F(e) {
        var t = e.children,
          n = e.count,
          a = e.parent,
          c = e.i18nKey,
          u = e.context,
          l = e.tOptions,
          f = void 0 === l ? {} : l,
          p = e.values,
          g = e.defaults,
          d = e.components,
          v = e.ns,
          y = e.i18n,
          m = e.t,
          b = e.shouldUnescape,
          O = (0, o.Z)(e, R),
          k = (0, s.useContext)(w) || {},
          j = k.i18n,
          P = k.defaultNS,
          N = y || j || r;
        if (!N)
          return (
            L(
              'You will need to pass in an i18next instance by using i18nextReactModule',
            ),
            t
          );
        var C =
          m ||
          N.t.bind(N) ||
          function (e) {
            return e;
          };
        u && (f.context = u);
        var F = D(D({}, x), N.options && N.options.react),
          V = v || C.ns || P || (N.options && N.options.defaultNS);
        V = 'string' == typeof V ? [V] : V || ['translation'];
        var $ =
            g ||
            (function e(t, n) {
              if (!t) return '';
              var r = '',
                a = A(t),
                c =
                  n.transSupportBasicHtmlNodes && n.transKeepBasicHtmlNodesFor
                    ? n.transKeepBasicHtmlNodesFor
                    : [];
              return (
                a.forEach(function (t, a) {
                  if ('string' == typeof t) r += ''.concat(t);
                  else if ((0, s.isValidElement)(t)) {
                    var u = Object.keys(t.props).length,
                      l = c.indexOf(t.type) > -1,
                      f = t.props.children;
                    if (!f && l && 0 === u) r += '<'.concat(t.type, '/>');
                    else if (f || (l && 0 === u)) {
                      if (t.props.i18nIsDynamicList)
                        r += '<'.concat(a, '></').concat(a, '>');
                      else if (l && 1 === u && 'string' == typeof f)
                        r += '<'
                          .concat(t.type, '>')
                          .concat(f, '</')
                          .concat(t.type, '>');
                      else {
                        var p = e(f, n);
                        r += '<'.concat(a, '>').concat(p, '</').concat(a, '>');
                      }
                    } else r += '<'.concat(a, '></').concat(a, '>');
                  } else if (null === t)
                    S(
                      'Trans: the passed in value is invalid - seems you passed in a null child.',
                    );
                  else if ('object' === i(t)) {
                    var g = t.format,
                      d = Object.keys((0, o.Z)(t, E));
                    if (1 === d.length) {
                      var h = g ? ''.concat(d[0], ', ').concat(g) : d[0];
                      r += '{{'.concat(h, '}}');
                    } else
                      S(
                        'react-i18next: the passed in object contained more than one variable - the object should look like {{ value, format }} where format is optional.',
                        t,
                      );
                  } else
                    S(
                      'Trans: the passed in value is invalid - seems you passed in a variable like {number} - please pass in variables for interpolation as full objects like {{number}}.',
                      t,
                    );
                }),
                r
              );
            })(t, F) ||
            F.transEmptyNodeValue ||
            c,
          M = F.hashTransKey,
          U = c || (M ? M($) : $),
          B = p
            ? f.interpolation
            : {
                interpolation: D(
                  D({}, f.interpolation),
                  {},
                  { prefix: '#$?', suffix: '?$#' },
                ),
              },
          K = D(
            D(D(D({}, f), {}, { count: n }, p), B),
            {},
            { defaultValue: $, ns: V },
          ),
          _ = U ? C(U, K) : $,
          Z = (function (e, t, n, r, o, a) {
            if ('' === t) return [];
            var c = r.transKeepBasicHtmlNodesFor || [],
              u = t && new RegExp(c.join('|')).test(t);
            if (!e && !u) return [t];
            var l = {};
            !(function e(t) {
              A(t).forEach(function (t) {
                'string' == typeof t ||
                  (T(t)
                    ? e(I(t))
                    : 'object' !== i(t) ||
                      (0, s.isValidElement)(t) ||
                      Object.assign(l, t));
              });
            })(e);
            var f = h.parse('<0>'.concat(t, '</0>')),
              p = D(D({}, l), o);
            function g(e, t, n) {
              var r = I(e),
                o = v(r, t.children, n);
              return '[object Array]' === Object.prototype.toString.call(r) &&
                r.every(function (e) {
                  return (0, s.isValidElement)(e);
                }) &&
                0 === o.length
                ? r
                : o;
            }
            function d(e, t, n, r, o) {
              e.dummy && (e.children = t),
                n.push(
                  (0, s.cloneElement)(
                    e,
                    D(D({}, e.props), {}, { key: r }),
                    o ? void 0 : t,
                  ),
                );
            }
            function v(t, o, l) {
              var f = A(t);
              return A(o).reduce(function (t, o, h) {
                var y =
                  o.children &&
                  o.children[0] &&
                  o.children[0].content &&
                  n.services.interpolator.interpolate(
                    o.children[0].content,
                    p,
                    n.language,
                  );
                if ('tag' === o.type) {
                  var m,
                    b,
                    O,
                    k = f[parseInt(o.name, 10)];
                  !k && 1 === l.length && l[0][o.name] && (k = l[0][o.name]),
                    k || (k = {});
                  var x =
                      0 !== Object.keys(o.attrs).length
                        ? ((m = { props: o.attrs }),
                          ((O = D({}, (b = k))).props = Object.assign(
                            m.props,
                            b.props,
                          )),
                          O)
                        : k,
                    w = (0, s.isValidElement)(x),
                    j = w && T(o, !0) && !o.voidElement,
                    S = u && 'object' === i(x) && x.dummy && !w,
                    P =
                      'object' === i(e) &&
                      null !== e &&
                      Object.hasOwnProperty.call(e, o.name);
                  if ('string' == typeof x) {
                    var L = n.services.interpolator.interpolate(
                      x,
                      p,
                      n.language,
                    );
                    t.push(L);
                  } else if (T(x) || j) {
                    var N = g(x, o, l);
                    d(x, N, t, h);
                  } else if (S) {
                    var E = v(f, o.children, l);
                    t.push(
                      (0, s.cloneElement)(
                        x,
                        D(D({}, x.props), {}, { key: h }),
                        E,
                      ),
                    );
                  } else if (Number.isNaN(parseFloat(o.name))) {
                    if (P) {
                      var R = g(x, o, l);
                      d(x, R, t, h, o.voidElement);
                    } else if (
                      r.transSupportBasicHtmlNodes &&
                      c.indexOf(o.name) > -1
                    ) {
                      if (o.voidElement)
                        t.push(
                          (0, s.createElement)(o.name, {
                            key: ''.concat(o.name, '-').concat(h),
                          }),
                        );
                      else {
                        var C = v(f, o.children, l);
                        t.push(
                          (0, s.createElement)(
                            o.name,
                            { key: ''.concat(o.name, '-').concat(h) },
                            C,
                          ),
                        );
                      }
                    } else if (o.voidElement) t.push('<'.concat(o.name, ' />'));
                    else {
                      var I = v(f, o.children, l);
                      t.push(
                        '<'
                          .concat(o.name, '>')
                          .concat(I, '</')
                          .concat(o.name, '>'),
                      );
                    }
                  } else if ('object' !== i(x) || w)
                    1 === o.children.length && y
                      ? t.push(
                          (0, s.cloneElement)(
                            x,
                            D(D({}, x.props), {}, { key: h }),
                            y,
                          ),
                        )
                      : t.push(
                          (0, s.cloneElement)(
                            x,
                            D(D({}, x.props), {}, { key: h }),
                          ),
                        );
                  else {
                    var A = o.children[0] ? y : null;
                    A && t.push(A);
                  }
                } else if ('text' === o.type) {
                  var F = r.transWrapTextNodes,
                    V = a
                      ? r.unescape(
                          n.services.interpolator.interpolate(
                            o.content,
                            p,
                            n.language,
                          ),
                        )
                      : n.services.interpolator.interpolate(
                          o.content,
                          p,
                          n.language,
                        );
                  F
                    ? t.push(
                        (0, s.createElement)(
                          F,
                          { key: ''.concat(o.name, '-').concat(h) },
                          V,
                        ),
                      )
                    : t.push(V);
                }
                return t;
              }, []);
            }
            return I(v([{ dummy: !0, children: e || [] }], f, A(e || []))[0]);
          })(d || t, _, N, F, K, b),
          H = void 0 !== a ? a : F.defaultTransParent;
        return H ? (0, s.createElement)(H, O, Z) : Z;
      }
      function V(e) {
        if (Array.isArray(e)) return e;
      }
      var $ = n(40181);
      function M() {
        throw TypeError(
          'Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.',
        );
      }
      function U(e, t) {
        return (
          V(e) ||
          (function (e, t) {
            var n,
              r,
              o =
                null == e
                  ? null
                  : ('undefined' != typeof Symbol && e[Symbol.iterator]) ||
                    e['@@iterator'];
            if (null != o) {
              var i = [],
                a = !0,
                s = !1;
              try {
                for (
                  o = o.call(e);
                  !(a = (n = o.next()).done) &&
                  (i.push(n.value), !t || i.length !== t);
                  a = !0
                );
              } catch (e) {
                (s = !0), (r = e);
              } finally {
                try {
                  a || null == o.return || o.return();
                } finally {
                  if (s) throw r;
                }
              }
              return i;
            }
          })(e, t) ||
          (0, $.Z)(e, t) ||
          M()
        );
      }
      function B(e, t) {
        var n = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var r = Object.getOwnPropertySymbols(e);
          t &&
            (r = r.filter(function (t) {
              return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            n.push.apply(n, r);
        }
        return n;
      }
      function K(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = null != arguments[t] ? arguments[t] : {};
          t % 2
            ? B(Object(n), !0).forEach(function (t) {
                (0, a.Z)(e, t, n[t]);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
            : B(Object(n)).forEach(function (t) {
                Object.defineProperty(
                  e,
                  t,
                  Object.getOwnPropertyDescriptor(n, t),
                );
              });
        }
        return e;
      }
      var _ = function (e, t) {
        var n = (0, s.useRef)();
        return (
          (0, s.useEffect)(
            function () {
              n.current = t ? n.current : e;
            },
            [e, t],
          ),
          n.current
        );
      };
      function Z(e) {
        var t =
            arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
          n = t.i18n,
          o = (0, s.useContext)(w) || {},
          i = o.i18n,
          a = o.defaultNS,
          c = n || i || r;
        if ((c && !c.reportNamespaces && (c.reportNamespaces = new j()), !c)) {
          L(
            'You will need to pass in an i18next instance by using initReactI18next',
          );
          var u = function (e) {
              return Array.isArray(e) ? e[e.length - 1] : e;
            },
            l = [u, {}, !1];
          return (l.t = u), (l.i18n = {}), (l.ready = !1), l;
        }
        c.options.react &&
          void 0 !== c.options.react.wait &&
          L(
            'It seems you are still using the old wait option, you may migrate to the new useSuspense behaviour.',
          );
        var f = K(K(K({}, x), c.options.react), t),
          p = f.useSuspense,
          g = f.keyPrefix,
          d = e || a || (c.options && c.options.defaultNS);
        (d = 'string' == typeof d ? [d] : d || ['translation']),
          c.reportNamespaces.addUsedNamespaces &&
            c.reportNamespaces.addUsedNamespaces(d);
        var h =
          (c.isInitialized || c.initializedStoreOnce) &&
          d.every(function (e) {
            return (function (e, t) {
              var n =
                arguments.length > 2 && void 0 !== arguments[2]
                  ? arguments[2]
                  : {};
              return t.languages && t.languages.length
                ? void 0 !== t.options.ignoreJSONStructure
                  ? t.hasLoadedNamespace(e, {
                      precheck: function (t, r) {
                        if (
                          n.bindI18n &&
                          n.bindI18n.indexOf('languageChanging') > -1 &&
                          t.services.backendConnector.backend &&
                          t.isLanguageChangingTo &&
                          !r(t.isLanguageChangingTo, e)
                        )
                          return !1;
                      },
                    })
                  : (function (e, t) {
                      var n =
                          arguments.length > 2 && void 0 !== arguments[2]
                            ? arguments[2]
                            : {},
                        r = t.languages[0],
                        o = !!t.options && t.options.fallbackLng,
                        i = t.languages[t.languages.length - 1];
                      if ('cimode' === r.toLowerCase()) return !0;
                      var a = function (e, n) {
                        var r =
                          t.services.backendConnector.state[
                            ''.concat(e, '|').concat(n)
                          ];
                        return -1 === r || 2 === r;
                      };
                      return (
                        (!(
                          n.bindI18n &&
                          n.bindI18n.indexOf('languageChanging') > -1
                        ) ||
                          !t.services.backendConnector.backend ||
                          !t.isLanguageChangingTo ||
                          !!a(t.isLanguageChangingTo, e)) &&
                        !!(
                          t.hasResourceBundle(r, e) ||
                          !t.services.backendConnector.backend ||
                          (t.options.resources &&
                            !t.options.partialBundledLanguages) ||
                          (a(r, e) && (!o || a(i, e)))
                        )
                      );
                    })(e, t, n)
                : (L('i18n.languages were undefined or empty', t.languages),
                  !0);
            })(e, c, f);
          });
        function v() {
          return c.getFixedT(null, 'fallback' === f.nsMode ? d : d[0], g);
        }
        var y = U((0, s.useState)(v), 2),
          m = y[0],
          b = y[1],
          O = d.join(),
          k = _(O),
          S = (0, s.useRef)(!0);
        (0, s.useEffect)(
          function () {
            var e = f.bindI18n,
              t = f.bindI18nStore;
            function n() {
              S.current && b(v);
            }
            return (
              (S.current = !0),
              h ||
                p ||
                N(c, d, function () {
                  S.current && b(v);
                }),
              h && k && k !== O && S.current && b(v),
              e && c && c.on(e, n),
              t && c && c.store.on(t, n),
              function () {
                (S.current = !1),
                  e &&
                    c &&
                    e.split(' ').forEach(function (e) {
                      return c.off(e, n);
                    }),
                  t &&
                    c &&
                    t.split(' ').forEach(function (e) {
                      return c.store.off(e, n);
                    });
              }
            );
          },
          [c, O],
        );
        var P = (0, s.useRef)(!0);
        (0, s.useEffect)(
          function () {
            S.current && !P.current && b(v), (P.current = !1);
          },
          [c, g],
        );
        var E = [m, c, h];
        if (((E.t = m), (E.i18n = c), (E.ready = h), h || (!h && !p))) return E;
        throw new Promise(function (e) {
          N(c, d, function () {
            e();
          });
        });
      }
      var H = n(87462),
        z = n(8679),
        J = n.n(z);
      function q(e) {
        var t = e.i18n,
          n = e.defaultNS,
          r = e.children,
          o = (0, s.useMemo)(
            function () {
              return { i18n: t, defaultNS: n };
            },
            [t, n],
          );
        return (0, s.createElement)(w.Provider, { value: o }, r);
      }
      var W = n(74902),
        Y = {
          defaultNS: 'common',
          errorStackTraceLimit: 0,
          i18n: { defaultLocale: 'en', locales: ['en'] },
          get initImmediate() {
            return 'undefined' != typeof window;
          },
          interpolation: { escapeValue: !1 },
          load: 'currentOnly',
          localeExtension: 'json',
          localePath: './public/locales',
          localeStructure: '{{lng}}/{{ns}}',
          react: { useSuspense: !1 },
          reloadOnPrerender: !1,
          serializeConfig: !0,
          use: [],
        },
        G = ['i18n'],
        X = ['i18n'];
      function Q(e, t) {
        var n = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var r = Object.getOwnPropertySymbols(e);
          t &&
            (r = r.filter(function (t) {
              return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            n.push.apply(n, r);
        }
        return n;
      }
      function ee(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = null != arguments[t] ? arguments[t] : {};
          t % 2
            ? Q(Object(n), !0).forEach(function (t) {
                (0, a.Z)(e, t, n[t]);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
            : Q(Object(n)).forEach(function (t) {
                Object.defineProperty(
                  e,
                  t,
                  Object.getOwnPropertyDescriptor(n, t),
                );
              });
        }
        return e;
      }
      var et = ['backend', 'detection'],
        en = function (e) {
          if ('string' != typeof (null == e ? void 0 : e.lng))
            throw Error('config.lng was not passed into createConfig');
          var t,
            n = e.i18n,
            r = (0, o.Z)(e, G),
            a = Y.i18n,
            s = ee(ee(ee(ee({}, (0, o.Z)(Y, X)), r), a), n),
            c = s.defaultNS,
            u = s.lng,
            l = s.localeExtension,
            f = s.localePath,
            p = s.localeStructure,
            g = s.nonExplicitSupportedLngs,
            d = s.locales.filter(function (e) {
              return 'default' !== e;
            });
          if ('cimode' === u) return s;
          if (
            void 0 === s.fallbackLng &&
            ((s.fallbackLng = s.defaultLocale), 'default' === s.fallbackLng)
          ) {
            var h = U(d, 1);
            s.fallbackLng = h[0];
          }
          var v = s.fallbackLng;
          if (g) {
            var y = function (e, t) {
              var n = U(t.split('-'), 1)[0];
              return (e[t] = [n]), e;
            };
            if ('string' == typeof v)
              s.fallbackLng = s.locales
                .filter(function (e) {
                  return e.includes('-');
                })
                .reduce(y, { default: [v] });
            else if (Array.isArray(v))
              s.fallbackLng = s.locales
                .filter(function (e) {
                  return e.includes('-');
                })
                .reduce(y, { default: v });
            else if ('object' === i(v))
              s.fallbackLng = Object.entries(s.fallbackLng).reduce(function (
                e,
                t,
              ) {
                var n,
                  r = U(t, 2),
                  o = r[0],
                  i = r[1];
                return (
                  (e[o] = o.includes('-')
                    ? ((n = [o.split('-')[0]].concat((0, W.Z)(i))),
                      Array.from(new Set(n)))
                    : i),
                  e
                );
              },
              v);
            else if ('function' == typeof v)
              throw Error(
                'If nonExplicitSupportedLngs is true, no functions are allowed for fallbackLng',
              );
          }
          return (
            (null == e
              ? void 0
              : null === (t = e.use) || void 0 === t
              ? void 0
              : t.some(function (e) {
                  return 'backend' === e.type;
                })) ||
              ('string' == typeof f
                ? (s.backend = {
                    addPath: ''.concat(f, '/').concat(p, '.missing.').concat(l),
                    loadPath: ''.concat(f, '/').concat(p, '.').concat(l),
                  })
                : 'function' != typeof f ||
                  (s.backend = {
                    addPath: function (e, t) {
                      return f(e, t, !0);
                    },
                    loadPath: function (e, t) {
                      return f(e, t, !1);
                    },
                  })),
            'string' == typeof s.ns || Array.isArray(s.ns) || (s.ns = [c]),
            et.forEach(function (t) {
              e[t] && (s[t] = ee(ee({}, s[t]), e[t]));
            }),
            s
          );
        };
      function er(e) {
        if (void 0 === e)
          throw ReferenceError(
            "this hasn't been initialised - super() hasn't been called",
          );
        return e;
      }
      function eo(e, t) {
        return (eo = Object.setPrototypeOf
          ? Object.setPrototypeOf.bind()
          : function (e, t) {
              return (e.__proto__ = t), e;
            })(e, t);
      }
      function ei(e, t) {
        if ('function' != typeof t && null !== t)
          throw TypeError('Super expression must either be null or a function');
        (e.prototype = Object.create(t && t.prototype, {
          constructor: { value: e, writable: !0, configurable: !0 },
        })),
          Object.defineProperty(e, 'prototype', { writable: !1 }),
          t && eo(e, t);
      }
      function ea(e, t) {
        if (t && ('object' === i(t) || 'function' == typeof t)) return t;
        if (void 0 !== t)
          throw TypeError(
            'Derived constructors may only return object or undefined',
          );
        return er(e);
      }
      function es(e) {
        return (es = Object.setPrototypeOf
          ? Object.getPrototypeOf.bind()
          : function (e) {
              return e.__proto__ || Object.getPrototypeOf(e);
            })(e);
      }
      var ec = n(59199);
      function eu(e, t) {
        var n = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var r = Object.getOwnPropertySymbols(e);
          t &&
            (r = r.filter(function (t) {
              return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            n.push.apply(n, r);
        }
        return n;
      }
      function el(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = null != arguments[t] ? arguments[t] : {};
          t % 2
            ? eu(Object(n), !0).forEach(function (t) {
                (0, a.Z)(e, t, n[t]);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
            : eu(Object(n)).forEach(function (t) {
                Object.defineProperty(
                  e,
                  t,
                  Object.getOwnPropertyDescriptor(n, t),
                );
              });
        }
        return e;
      }
      var ef = {
          type: 'logger',
          log: function (e) {
            this.output('log', e);
          },
          warn: function (e) {
            this.output('warn', e);
          },
          error: function (e) {
            this.output('error', e);
          },
          output: function (e, t) {
            console && console[e] && console[e].apply(console, t);
          },
        },
        ep = new ((function () {
          function e(t) {
            var n =
              arguments.length > 1 && void 0 !== arguments[1]
                ? arguments[1]
                : {};
            v(this, e), this.init(t, n);
          }
          return (
            m(e, [
              {
                key: 'init',
                value: function (e) {
                  var t =
                    arguments.length > 1 && void 0 !== arguments[1]
                      ? arguments[1]
                      : {};
                  (this.prefix = t.prefix || 'i18next:'),
                    (this.logger = e || ef),
                    (this.options = t),
                    (this.debug = t.debug);
                },
              },
              {
                key: 'setDebug',
                value: function (e) {
                  this.debug = e;
                },
              },
              {
                key: 'log',
                value: function () {
                  for (
                    var e = arguments.length, t = Array(e), n = 0;
                    n < e;
                    n++
                  )
                    t[n] = arguments[n];
                  return this.forward(t, 'log', '', !0);
                },
              },
              {
                key: 'warn',
                value: function () {
                  for (
                    var e = arguments.length, t = Array(e), n = 0;
                    n < e;
                    n++
                  )
                    t[n] = arguments[n];
                  return this.forward(t, 'warn', '', !0);
                },
              },
              {
                key: 'error',
                value: function () {
                  for (
                    var e = arguments.length, t = Array(e), n = 0;
                    n < e;
                    n++
                  )
                    t[n] = arguments[n];
                  return this.forward(t, 'error', '');
                },
              },
              {
                key: 'deprecate',
                value: function () {
                  for (
                    var e = arguments.length, t = Array(e), n = 0;
                    n < e;
                    n++
                  )
                    t[n] = arguments[n];
                  return this.forward(t, 'warn', 'WARNING DEPRECATED: ', !0);
                },
              },
              {
                key: 'forward',
                value: function (e, t, n, r) {
                  return r && !this.debug
                    ? null
                    : ('string' == typeof e[0] &&
                        (e[0] = ''
                          .concat(n)
                          .concat(this.prefix, ' ')
                          .concat(e[0])),
                      this.logger[t](e));
                },
              },
              {
                key: 'create',
                value: function (t) {
                  return new e(
                    this.logger,
                    el(
                      el(
                        {},
                        { prefix: ''.concat(this.prefix, ':').concat(t, ':') },
                      ),
                      this.options,
                    ),
                  );
                },
              },
            ]),
            e
          );
        })())(),
        eg = (function () {
          function e() {
            v(this, e), (this.observers = {});
          }
          return (
            m(e, [
              {
                key: 'on',
                value: function (e, t) {
                  var n = this;
                  return (
                    e.split(' ').forEach(function (e) {
                      (n.observers[e] = n.observers[e] || []),
                        n.observers[e].push(t);
                    }),
                    this
                  );
                },
              },
              {
                key: 'off',
                value: function (e, t) {
                  if (this.observers[e]) {
                    if (!t) {
                      delete this.observers[e];
                      return;
                    }
                    this.observers[e] = this.observers[e].filter(function (e) {
                      return e !== t;
                    });
                  }
                },
              },
              {
                key: 'emit',
                value: function (e) {
                  for (
                    var t = arguments.length,
                      n = Array(t > 1 ? t - 1 : 0),
                      r = 1;
                    r < t;
                    r++
                  )
                    n[r - 1] = arguments[r];
                  this.observers[e] &&
                    [].concat(this.observers[e]).forEach(function (e) {
                      e.apply(void 0, n);
                    }),
                    this.observers['*'] &&
                      [].concat(this.observers['*']).forEach(function (t) {
                        t.apply(t, [e].concat(n));
                      });
                },
              },
            ]),
            e
          );
        })();
      function ed() {
        var e,
          t,
          n = new Promise(function (n, r) {
            (e = n), (t = r);
          });
        return (n.resolve = e), (n.reject = t), n;
      }
      function eh(e) {
        return null == e ? '' : '' + e;
      }
      function ev(e, t, n) {
        function r(e) {
          return e && e.indexOf('###') > -1 ? e.replace(/###/g, '.') : e;
        }
        function o() {
          return !e || 'string' == typeof e;
        }
        for (
          var i = 'string' != typeof t ? [].concat(t) : t.split('.');
          i.length > 1;

        ) {
          if (o()) return {};
          var a = r(i.shift());
          !e[a] && n && (e[a] = new n()),
            (e = Object.prototype.hasOwnProperty.call(e, a) ? e[a] : {});
        }
        return o() ? {} : { obj: e, k: r(i.shift()) };
      }
      function ey(e, t, n) {
        var r = ev(e, t, Object);
        r.obj[r.k] = n;
      }
      function em(e, t) {
        var n = ev(e, t),
          r = n.obj,
          o = n.k;
        if (r) return r[o];
      }
      function eb(e, t, n) {
        var r = em(e, n);
        return void 0 !== r ? r : em(t, n);
      }
      function eO(e) {
        return e.replace(/[\-\[\]\/\{\}\(\)\*\+\?\.\\\^\$\|]/g, '\\$&');
      }
      var ek = {
        '&': '&amp;',
        '<': '&lt;',
        '>': '&gt;',
        '"': '&quot;',
        "'": '&#39;',
        '/': '&#x2F;',
      };
      function ex(e) {
        return 'string' == typeof e
          ? e.replace(/[&<>"'\/]/g, function (e) {
              return ek[e];
            })
          : e;
      }
      var ew =
          'undefined' != typeof window &&
          window.navigator &&
          void 0 === window.navigator.userAgentData &&
          window.navigator.userAgent &&
          window.navigator.userAgent.indexOf('MSIE') > -1,
        ej = [' ', ',', '?', '!', ';'];
      function eS(e, t) {
        var n = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var r = Object.getOwnPropertySymbols(e);
          t &&
            (r = r.filter(function (t) {
              return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            n.push.apply(n, r);
        }
        return n;
      }
      function eP(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = null != arguments[t] ? arguments[t] : {};
          t % 2
            ? eS(Object(n), !0).forEach(function (t) {
                (0, a.Z)(e, t, n[t]);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
            : eS(Object(n)).forEach(function (t) {
                Object.defineProperty(
                  e,
                  t,
                  Object.getOwnPropertyDescriptor(n, t),
                );
              });
        }
        return e;
      }
      var eL = (function (e) {
          ei(r, e);
          var t,
            n =
              ((t = (function () {
                if (
                  'undefined' == typeof Reflect ||
                  !Reflect.construct ||
                  Reflect.construct.sham
                )
                  return !1;
                if ('function' == typeof Proxy) return !0;
                try {
                  return (
                    Boolean.prototype.valueOf.call(
                      Reflect.construct(Boolean, [], function () {}),
                    ),
                    !0
                  );
                } catch (e) {
                  return !1;
                }
              })()),
              function () {
                var e,
                  n = es(r);
                if (t) {
                  var o = es(this).constructor;
                  e = Reflect.construct(n, arguments, o);
                } else e = n.apply(this, arguments);
                return ea(this, e);
              });
          function r(e) {
            var t,
              o =
                arguments.length > 1 && void 0 !== arguments[1]
                  ? arguments[1]
                  : { ns: ['translation'], defaultNS: 'translation' };
            return (
              v(this, r),
              (t = n.call(this)),
              ew && eg.call(er(t)),
              (t.data = e || {}),
              (t.options = o),
              void 0 === t.options.keySeparator &&
                (t.options.keySeparator = '.'),
              void 0 === t.options.ignoreJSONStructure &&
                (t.options.ignoreJSONStructure = !0),
              t
            );
          }
          return (
            m(r, [
              {
                key: 'addNamespaces',
                value: function (e) {
                  0 > this.options.ns.indexOf(e) && this.options.ns.push(e);
                },
              },
              {
                key: 'removeNamespaces',
                value: function (e) {
                  var t = this.options.ns.indexOf(e);
                  t > -1 && this.options.ns.splice(t, 1);
                },
              },
              {
                key: 'getResource',
                value: function (e, t, n) {
                  var r =
                      arguments.length > 3 && void 0 !== arguments[3]
                        ? arguments[3]
                        : {},
                    o =
                      void 0 !== r.keySeparator
                        ? r.keySeparator
                        : this.options.keySeparator,
                    i =
                      void 0 !== r.ignoreJSONStructure
                        ? r.ignoreJSONStructure
                        : this.options.ignoreJSONStructure,
                    a = [e, t];
                  n && 'string' != typeof n && (a = a.concat(n)),
                    n &&
                      'string' == typeof n &&
                      (a = a.concat(o ? n.split(o) : n)),
                    e.indexOf('.') > -1 && (a = e.split('.'));
                  var s = em(this.data, a);
                  return s || !i || 'string' != typeof n
                    ? s
                    : (function e(t, n) {
                        var r =
                          arguments.length > 2 && void 0 !== arguments[2]
                            ? arguments[2]
                            : '.';
                        if (t) {
                          if (t[n]) return t[n];
                          for (
                            var o = n.split(r), i = t, a = 0;
                            a < o.length;
                            ++a
                          ) {
                            if (
                              !i ||
                              ('string' == typeof i[o[a]] && a + 1 < o.length)
                            )
                              return;
                            if (void 0 === i[o[a]]) {
                              for (
                                var s = 2,
                                  c = o.slice(a, a + s).join(r),
                                  u = i[c];
                                void 0 === u && o.length > a + s;

                              )
                                s++, (u = i[(c = o.slice(a, a + s).join(r))]);
                              if (void 0 === u) return;
                              if (null === u) return null;
                              if (n.endsWith(c)) {
                                if ('string' == typeof u) return u;
                                if (c && 'string' == typeof u[c]) return u[c];
                              }
                              var l = o.slice(a + s).join(r);
                              if (l) return e(u, l, r);
                              return;
                            }
                            i = i[o[a]];
                          }
                          return i;
                        }
                      })(this.data && this.data[e] && this.data[e][t], n, o);
                },
              },
              {
                key: 'addResource',
                value: function (e, t, n, r) {
                  var o =
                      arguments.length > 4 && void 0 !== arguments[4]
                        ? arguments[4]
                        : { silent: !1 },
                    i = this.options.keySeparator;
                  void 0 === i && (i = '.');
                  var a = [e, t];
                  n && (a = a.concat(i ? n.split(i) : n)),
                    e.indexOf('.') > -1 &&
                      ((a = e.split('.')), (r = t), (t = a[1])),
                    this.addNamespaces(t),
                    ey(this.data, a, r),
                    o.silent || this.emit('added', e, t, n, r);
                },
              },
              {
                key: 'addResources',
                value: function (e, t, n) {
                  var r =
                    arguments.length > 3 && void 0 !== arguments[3]
                      ? arguments[3]
                      : { silent: !1 };
                  for (var o in n)
                    ('string' == typeof n[o] ||
                      '[object Array]' ===
                        Object.prototype.toString.apply(n[o])) &&
                      this.addResource(e, t, o, n[o], { silent: !0 });
                  r.silent || this.emit('added', e, t, n);
                },
              },
              {
                key: 'addResourceBundle',
                value: function (e, t, n, r, o) {
                  var i =
                      arguments.length > 5 && void 0 !== arguments[5]
                        ? arguments[5]
                        : { silent: !1 },
                    a = [e, t];
                  e.indexOf('.') > -1 &&
                    ((a = e.split('.')), (r = n), (n = t), (t = a[1])),
                    this.addNamespaces(t);
                  var s = em(this.data, a) || {};
                  r
                    ? (function e(t, n, r) {
                        for (var o in n)
                          '__proto__' !== o &&
                            'constructor' !== o &&
                            (o in t
                              ? 'string' == typeof t[o] ||
                                t[o] instanceof String ||
                                'string' == typeof n[o] ||
                                n[o] instanceof String
                                ? r && (t[o] = n[o])
                                : e(t[o], n[o], r)
                              : (t[o] = n[o]));
                        return t;
                      })(s, n, o)
                    : (s = eP(eP({}, s), n)),
                    ey(this.data, a, s),
                    i.silent || this.emit('added', e, t, n);
                },
              },
              {
                key: 'removeResourceBundle',
                value: function (e, t) {
                  this.hasResourceBundle(e, t) && delete this.data[e][t],
                    this.removeNamespaces(t),
                    this.emit('removed', e, t);
                },
              },
              {
                key: 'hasResourceBundle',
                value: function (e, t) {
                  return void 0 !== this.getResource(e, t);
                },
              },
              {
                key: 'getResourceBundle',
                value: function (e, t) {
                  return (t || (t = this.options.defaultNS),
                  'v1' === this.options.compatibilityAPI)
                    ? eP(eP({}, {}), this.getResource(e, t))
                    : this.getResource(e, t);
                },
              },
              {
                key: 'getDataByLanguage',
                value: function (e) {
                  return this.data[e];
                },
              },
              {
                key: 'hasLanguageSomeTranslations',
                value: function (e) {
                  var t = this.getDataByLanguage(e);
                  return !!((t && Object.keys(t)) || []).find(function (e) {
                    return t[e] && Object.keys(t[e]).length > 0;
                  });
                },
              },
              {
                key: 'toJSON',
                value: function () {
                  return this.data;
                },
              },
            ]),
            r
          );
        })(eg),
        eN = {
          processors: {},
          addPostProcessor: function (e) {
            this.processors[e.name] = e;
          },
          handle: function (e, t, n, r, o) {
            var i = this;
            return (
              e.forEach(function (e) {
                i.processors[e] && (t = i.processors[e].process(t, n, r, o));
              }),
              t
            );
          },
        };
      function eE(e, t) {
        var n = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var r = Object.getOwnPropertySymbols(e);
          t &&
            (r = r.filter(function (t) {
              return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            n.push.apply(n, r);
        }
        return n;
      }
      function eR(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = null != arguments[t] ? arguments[t] : {};
          t % 2
            ? eE(Object(n), !0).forEach(function (t) {
                (0, a.Z)(e, t, n[t]);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
            : eE(Object(n)).forEach(function (t) {
                Object.defineProperty(
                  e,
                  t,
                  Object.getOwnPropertyDescriptor(n, t),
                );
              });
        }
        return e;
      }
      var eC = {},
        eD = (function (e) {
          ei(r, e);
          var t,
            n =
              ((t = (function () {
                if (
                  'undefined' == typeof Reflect ||
                  !Reflect.construct ||
                  Reflect.construct.sham
                )
                  return !1;
                if ('function' == typeof Proxy) return !0;
                try {
                  return (
                    Boolean.prototype.valueOf.call(
                      Reflect.construct(Boolean, [], function () {}),
                    ),
                    !0
                  );
                } catch (e) {
                  return !1;
                }
              })()),
              function () {
                var e,
                  n = es(r);
                if (t) {
                  var o = es(this).constructor;
                  e = Reflect.construct(n, arguments, o);
                } else e = n.apply(this, arguments);
                return ea(this, e);
              });
          function r(e) {
            var t,
              o =
                arguments.length > 1 && void 0 !== arguments[1]
                  ? arguments[1]
                  : {};
            return (
              v(this, r),
              (t = n.call(this)),
              ew && eg.call(er(t)),
              !(function (e, t, n) {
                e.forEach(function (e) {
                  t[e] && (n[e] = t[e]);
                });
              })(
                [
                  'resourceStore',
                  'languageUtils',
                  'pluralResolver',
                  'interpolator',
                  'backendConnector',
                  'i18nFormat',
                  'utils',
                ],
                e,
                er(t),
              ),
              (t.options = o),
              void 0 === t.options.keySeparator &&
                (t.options.keySeparator = '.'),
              (t.logger = ep.create('translator')),
              t
            );
          }
          return (
            m(
              r,
              [
                {
                  key: 'changeLanguage',
                  value: function (e) {
                    e && (this.language = e);
                  },
                },
                {
                  key: 'exists',
                  value: function (e) {
                    var t =
                      arguments.length > 1 && void 0 !== arguments[1]
                        ? arguments[1]
                        : { interpolation: {} };
                    if (null == e) return !1;
                    var n = this.resolve(e, t);
                    return n && void 0 !== n.res;
                  },
                },
                {
                  key: 'extractFromKey',
                  value: function (e, t) {
                    var n =
                      void 0 !== t.nsSeparator
                        ? t.nsSeparator
                        : this.options.nsSeparator;
                    void 0 === n && (n = ':');
                    var r =
                        void 0 !== t.keySeparator
                          ? t.keySeparator
                          : this.options.keySeparator,
                      o = t.ns || this.options.defaultNS || [],
                      i = n && e.indexOf(n) > -1,
                      a =
                        !this.options.userDefinedKeySeparator &&
                        !t.keySeparator &&
                        !this.options.userDefinedNsSeparator &&
                        !t.nsSeparator &&
                        !(function (e, t, n) {
                          (t = t || ''), (n = n || '');
                          var r = ej.filter(function (e) {
                            return 0 > t.indexOf(e) && 0 > n.indexOf(e);
                          });
                          if (0 === r.length) return !0;
                          var o = new RegExp(
                              '('.concat(
                                r
                                  .map(function (e) {
                                    return '?' === e ? '\\?' : e;
                                  })
                                  .join('|'),
                                ')',
                              ),
                            ),
                            i = !o.test(e);
                          if (!i) {
                            var a = e.indexOf(n);
                            a > 0 && !o.test(e.substring(0, a)) && (i = !0);
                          }
                          return i;
                        })(e, n, r);
                    if (i && !a) {
                      var s = e.match(this.interpolator.nestingRegexp);
                      if (s && s.length > 0) return { key: e, namespaces: o };
                      var c = e.split(n);
                      (n !== r ||
                        (n === r && this.options.ns.indexOf(c[0]) > -1)) &&
                        (o = c.shift()),
                        (e = c.join(r));
                    }
                    return (
                      'string' == typeof o && (o = [o]),
                      { key: e, namespaces: o }
                    );
                  },
                },
                {
                  key: 'translate',
                  value: function (e, t, n) {
                    var o = this;
                    if (
                      ('object' !== i(t) &&
                        this.options.overloadTranslationOptionHandler &&
                        (t =
                          this.options.overloadTranslationOptionHandler(
                            arguments,
                          )),
                      t || (t = {}),
                      null == e)
                    )
                      return '';
                    Array.isArray(e) || (e = [String(e)]);
                    var a =
                        void 0 !== t.returnDetails
                          ? t.returnDetails
                          : this.options.returnDetails,
                      s =
                        void 0 !== t.keySeparator
                          ? t.keySeparator
                          : this.options.keySeparator,
                      c = this.extractFromKey(e[e.length - 1], t),
                      u = c.key,
                      l = c.namespaces,
                      f = l[l.length - 1],
                      p = t.lng || this.language,
                      g =
                        t.appendNamespaceToCIMode ||
                        this.options.appendNamespaceToCIMode;
                    if (p && 'cimode' === p.toLowerCase()) {
                      if (g) {
                        var d = t.nsSeparator || this.options.nsSeparator;
                        return a
                          ? ((h.res = ''.concat(f).concat(d).concat(u)), h)
                          : ''.concat(f).concat(d).concat(u);
                      }
                      return a ? ((h.res = u), h) : u;
                    }
                    var h = this.resolve(e, t),
                      v = h && h.res,
                      y = (h && h.usedKey) || u,
                      m = (h && h.exactUsedKey) || u,
                      b = Object.prototype.toString.apply(v),
                      O =
                        void 0 !== t.joinArrays
                          ? t.joinArrays
                          : this.options.joinArrays,
                      k = !this.i18nFormat || this.i18nFormat.handleAsObject,
                      x =
                        'string' != typeof v &&
                        'boolean' != typeof v &&
                        'number' != typeof v;
                    if (
                      k &&
                      v &&
                      x &&
                      0 >
                        [
                          '[object Number]',
                          '[object Function]',
                          '[object RegExp]',
                        ].indexOf(b) &&
                      !('string' == typeof O && '[object Array]' === b)
                    ) {
                      if (!t.returnObjects && !this.options.returnObjects) {
                        this.options.returnedObjectHandler ||
                          this.logger.warn(
                            'accessing an object - but returnObjects options is not enabled!',
                          );
                        var w = this.options.returnedObjectHandler
                          ? this.options.returnedObjectHandler(
                              y,
                              v,
                              eR(eR({}, t), {}, { ns: l }),
                            )
                          : "key '"
                              .concat(u, ' (')
                              .concat(
                                this.language,
                                ")' returned an object instead of string.",
                              );
                        return a ? ((h.res = w), h) : w;
                      }
                      if (s) {
                        var j = '[object Array]' === b,
                          S = j ? [] : {},
                          P = j ? m : y;
                        for (var L in v)
                          if (Object.prototype.hasOwnProperty.call(v, L)) {
                            var N = ''.concat(P).concat(s).concat(L);
                            (S[L] = this.translate(
                              N,
                              eR(eR({}, t), { joinArrays: !1, ns: l }),
                            )),
                              S[L] === N && (S[L] = v[L]);
                          }
                        v = S;
                      }
                    } else if (
                      k &&
                      'string' == typeof O &&
                      '[object Array]' === b
                    )
                      (v = v.join(O)) &&
                        (v = this.extendTranslation(v, e, t, n));
                    else {
                      var E = !1,
                        R = !1,
                        C = void 0 !== t.count && 'string' != typeof t.count,
                        D = r.hasDefaultValue(t),
                        T = C
                          ? this.pluralResolver.getSuffix(p, t.count, t)
                          : '',
                        I = t['defaultValue'.concat(T)] || t.defaultValue;
                      !this.isValidLookup(v) && D && ((E = !0), (v = I)),
                        this.isValidLookup(v) || ((R = !0), (v = u));
                      var A =
                          (t.missingKeyNoValueFallbackToKey ||
                            this.options.missingKeyNoValueFallbackToKey) &&
                          R
                            ? void 0
                            : v,
                        F = D && I !== v && this.options.updateMissing;
                      if (R || E || F) {
                        if (
                          (this.logger.log(
                            F ? 'updateKey' : 'missingKey',
                            p,
                            f,
                            u,
                            F ? I : v,
                          ),
                          s)
                        ) {
                          var V = this.resolve(
                            u,
                            eR(eR({}, t), {}, { keySeparator: !1 }),
                          );
                          V &&
                            V.res &&
                            this.logger.warn(
                              'Seems the loaded translations were in flat JSON format instead of nested. Either set keySeparator: false on init or make sure your translations are published in nested format.',
                            );
                        }
                        var $ = [],
                          M = this.languageUtils.getFallbackCodes(
                            this.options.fallbackLng,
                            t.lng || this.language,
                          );
                        if (
                          'fallback' === this.options.saveMissingTo &&
                          M &&
                          M[0]
                        )
                          for (var U = 0; U < M.length; U++) $.push(M[U]);
                        else
                          'all' === this.options.saveMissingTo
                            ? ($ = this.languageUtils.toResolveHierarchy(
                                t.lng || this.language,
                              ))
                            : $.push(t.lng || this.language);
                        var B = function (e, n, r) {
                          var i = D && r !== v ? r : A;
                          o.options.missingKeyHandler
                            ? o.options.missingKeyHandler(e, f, n, i, F, t)
                            : o.backendConnector &&
                              o.backendConnector.saveMissing &&
                              o.backendConnector.saveMissing(e, f, n, i, F, t),
                            o.emit('missingKey', e, f, n, v);
                        };
                        this.options.saveMissing &&
                          (this.options.saveMissingPlurals && C
                            ? $.forEach(function (e) {
                                o.pluralResolver
                                  .getSuffixes(e, t)
                                  .forEach(function (n) {
                                    B(
                                      [e],
                                      u + n,
                                      t['defaultValue'.concat(n)] || I,
                                    );
                                  });
                              })
                            : B($, u, I));
                      }
                      (v = this.extendTranslation(v, e, t, h, n)),
                        R &&
                          v === u &&
                          this.options.appendNamespaceToMissingKey &&
                          (v = ''.concat(f, ':').concat(u)),
                        (R || E) &&
                          this.options.parseMissingKeyHandler &&
                          (v =
                            'v1' !== this.options.compatibilityAPI
                              ? this.options.parseMissingKeyHandler(
                                  this.options.appendNamespaceToMissingKey
                                    ? ''.concat(f, ':').concat(u)
                                    : u,
                                  E ? v : void 0,
                                )
                              : this.options.parseMissingKeyHandler(v));
                    }
                    return a ? ((h.res = v), h) : v;
                  },
                },
                {
                  key: 'extendTranslation',
                  value: function (e, t, n, r, o) {
                    var i = this;
                    if (this.i18nFormat && this.i18nFormat.parse)
                      e = this.i18nFormat.parse(
                        e,
                        eR(
                          eR({}, this.options.interpolation.defaultVariables),
                          n,
                        ),
                        r.usedLng,
                        r.usedNS,
                        r.usedKey,
                        { resolved: r },
                      );
                    else if (!n.skipInterpolation) {
                      n.interpolation &&
                        this.interpolator.init(
                          eR(eR({}, n), {
                            interpolation: eR(
                              eR({}, this.options.interpolation),
                              n.interpolation,
                            ),
                          }),
                        );
                      var a,
                        s =
                          'string' == typeof e &&
                          (n &&
                          n.interpolation &&
                          void 0 !== n.interpolation.skipOnVariables
                            ? n.interpolation.skipOnVariables
                            : this.options.interpolation.skipOnVariables);
                      if (s) {
                        var c = e.match(this.interpolator.nestingRegexp);
                        a = c && c.length;
                      }
                      var u =
                        n.replace && 'string' != typeof n.replace
                          ? n.replace
                          : n;
                      if (
                        (this.options.interpolation.defaultVariables &&
                          (u = eR(
                            eR({}, this.options.interpolation.defaultVariables),
                            u,
                          )),
                        (e = this.interpolator.interpolate(
                          e,
                          u,
                          n.lng || this.language,
                          n,
                        )),
                        s)
                      ) {
                        var l = e.match(this.interpolator.nestingRegexp);
                        a < (l && l.length) && (n.nest = !1);
                      }
                      !1 !== n.nest &&
                        (e = this.interpolator.nest(
                          e,
                          function () {
                            for (
                              var e = arguments.length, r = Array(e), a = 0;
                              a < e;
                              a++
                            )
                              r[a] = arguments[a];
                            return o && o[0] === r[0] && !n.context
                              ? (i.logger.warn(
                                  'It seems you are nesting recursively key: '
                                    .concat(r[0], ' in key: ')
                                    .concat(t[0]),
                                ),
                                null)
                              : i.translate.apply(i, r.concat([t]));
                          },
                          n,
                        )),
                        n.interpolation && this.interpolator.reset();
                    }
                    var f = n.postProcess || this.options.postProcess,
                      p = 'string' == typeof f ? [f] : f;
                    return (
                      null != e &&
                        p &&
                        p.length &&
                        !1 !== n.applyPostProcessor &&
                        (e = eN.handle(
                          p,
                          e,
                          t,
                          this.options && this.options.postProcessPassResolved
                            ? eR({ i18nResolved: r }, n)
                            : n,
                          this,
                        )),
                      e
                    );
                  },
                },
                {
                  key: 'resolve',
                  value: function (e) {
                    var t,
                      n,
                      r,
                      o,
                      i,
                      a = this,
                      s =
                        arguments.length > 1 && void 0 !== arguments[1]
                          ? arguments[1]
                          : {};
                    return (
                      'string' == typeof e && (e = [e]),
                      e.forEach(function (e) {
                        if (!a.isValidLookup(t)) {
                          var c = a.extractFromKey(e, s),
                            u = c.key;
                          n = u;
                          var l = c.namespaces;
                          a.options.fallbackNS &&
                            (l = l.concat(a.options.fallbackNS));
                          var f =
                              void 0 !== s.count && 'string' != typeof s.count,
                            p =
                              f &&
                              !s.ordinal &&
                              0 === s.count &&
                              a.pluralResolver.shouldUseIntlApi(),
                            g =
                              void 0 !== s.context &&
                              ('string' == typeof s.context ||
                                'number' == typeof s.context) &&
                              '' !== s.context,
                            d = s.lngs
                              ? s.lngs
                              : a.languageUtils.toResolveHierarchy(
                                  s.lng || a.language,
                                  s.fallbackLng,
                                );
                          l.forEach(function (e) {
                            a.isValidLookup(t) ||
                              ((i = e),
                              !eC[''.concat(d[0], '-').concat(e)] &&
                                a.utils &&
                                a.utils.hasLoadedNamespace &&
                                !a.utils.hasLoadedNamespace(i) &&
                                ((eC[''.concat(d[0], '-').concat(e)] = !0),
                                a.logger.warn(
                                  'key "'
                                    .concat(n, '" for languages "')
                                    .concat(
                                      d.join(', '),
                                      '" won\'t get resolved as namespace "',
                                    )
                                    .concat(i, '" was not yet loaded'),
                                  'This means something IS WRONG in your setup. You access the t function before i18next.init / i18next.loadNamespace / i18next.changeLanguage was done. Wait for the callback or Promise to resolve before accessing it!!!',
                                )),
                              d.forEach(function (n) {
                                if (!a.isValidLookup(t)) {
                                  o = n;
                                  var i,
                                    c = [u];
                                  if (
                                    a.i18nFormat &&
                                    a.i18nFormat.addLookupKeys
                                  )
                                    a.i18nFormat.addLookupKeys(c, u, n, e, s);
                                  else {
                                    f &&
                                      (l = a.pluralResolver.getSuffix(
                                        n,
                                        s.count,
                                        s,
                                      ));
                                    var l,
                                      d = ''.concat(
                                        a.options.pluralSeparator,
                                        'zero',
                                      );
                                    if (
                                      (f && (c.push(u + l), p && c.push(u + d)),
                                      g)
                                    ) {
                                      var h = ''
                                        .concat(u)
                                        .concat(a.options.contextSeparator)
                                        .concat(s.context);
                                      c.push(h),
                                        f &&
                                          (c.push(h + l), p && c.push(h + d));
                                    }
                                  }
                                  for (; (i = c.pop()); )
                                    a.isValidLookup(t) ||
                                      ((r = i),
                                      (t = a.getResource(n, e, i, s)));
                                }
                              }));
                          });
                        }
                      }),
                      {
                        res: t,
                        usedKey: n,
                        exactUsedKey: r,
                        usedLng: o,
                        usedNS: i,
                      }
                    );
                  },
                },
                {
                  key: 'isValidLookup',
                  value: function (e) {
                    return (
                      void 0 !== e &&
                      !(!this.options.returnNull && null === e) &&
                      !(!this.options.returnEmptyString && '' === e)
                    );
                  },
                },
                {
                  key: 'getResource',
                  value: function (e, t, n) {
                    var r =
                      arguments.length > 3 && void 0 !== arguments[3]
                        ? arguments[3]
                        : {};
                    return this.i18nFormat && this.i18nFormat.getResource
                      ? this.i18nFormat.getResource(e, t, n, r)
                      : this.resourceStore.getResource(e, t, n, r);
                  },
                },
              ],
              [
                {
                  key: 'hasDefaultValue',
                  value: function (e) {
                    var t = 'defaultValue';
                    for (var n in e)
                      if (
                        Object.prototype.hasOwnProperty.call(e, n) &&
                        t === n.substring(0, t.length) &&
                        void 0 !== e[n]
                      )
                        return !0;
                    return !1;
                  },
                },
              ],
            ),
            r
          );
        })(eg);
      function eT(e) {
        return e.charAt(0).toUpperCase() + e.slice(1);
      }
      var eI = (function () {
          function e(t) {
            v(this, e),
              (this.options = t),
              (this.supportedLngs = this.options.supportedLngs || !1),
              (this.logger = ep.create('languageUtils'));
          }
          return (
            m(e, [
              {
                key: 'getScriptPartFromCode',
                value: function (e) {
                  if (!e || 0 > e.indexOf('-')) return null;
                  var t = e.split('-');
                  return 2 === t.length
                    ? null
                    : (t.pop(), 'x' === t[t.length - 1].toLowerCase())
                    ? null
                    : this.formatLanguageCode(t.join('-'));
                },
              },
              {
                key: 'getLanguagePartFromCode',
                value: function (e) {
                  if (!e || 0 > e.indexOf('-')) return e;
                  var t = e.split('-');
                  return this.formatLanguageCode(t[0]);
                },
              },
              {
                key: 'formatLanguageCode',
                value: function (e) {
                  if ('string' == typeof e && e.indexOf('-') > -1) {
                    var t = [
                        'hans',
                        'hant',
                        'latn',
                        'cyrl',
                        'cans',
                        'mong',
                        'arab',
                      ],
                      n = e.split('-');
                    return (
                      this.options.lowerCaseLng
                        ? (n = n.map(function (e) {
                            return e.toLowerCase();
                          }))
                        : 2 === n.length
                        ? ((n[0] = n[0].toLowerCase()),
                          (n[1] = n[1].toUpperCase()),
                          t.indexOf(n[1].toLowerCase()) > -1 &&
                            (n[1] = eT(n[1].toLowerCase())))
                        : 3 === n.length &&
                          ((n[0] = n[0].toLowerCase()),
                          2 === n[1].length && (n[1] = n[1].toUpperCase()),
                          'sgn' !== n[0] &&
                            2 === n[2].length &&
                            (n[2] = n[2].toUpperCase()),
                          t.indexOf(n[1].toLowerCase()) > -1 &&
                            (n[1] = eT(n[1].toLowerCase())),
                          t.indexOf(n[2].toLowerCase()) > -1 &&
                            (n[2] = eT(n[2].toLowerCase()))),
                      n.join('-')
                    );
                  }
                  return this.options.cleanCode || this.options.lowerCaseLng
                    ? e.toLowerCase()
                    : e;
                },
              },
              {
                key: 'isSupportedCode',
                value: function (e) {
                  return (
                    ('languageOnly' === this.options.load ||
                      this.options.nonExplicitSupportedLngs) &&
                      (e = this.getLanguagePartFromCode(e)),
                    !this.supportedLngs ||
                      !this.supportedLngs.length ||
                      this.supportedLngs.indexOf(e) > -1
                  );
                },
              },
              {
                key: 'getBestMatchFromCodes',
                value: function (e) {
                  var t,
                    n = this;
                  return e
                    ? (e.forEach(function (e) {
                        if (!t) {
                          var r = n.formatLanguageCode(e);
                          (!n.options.supportedLngs || n.isSupportedCode(r)) &&
                            (t = r);
                        }
                      }),
                      !t &&
                        this.options.supportedLngs &&
                        e.forEach(function (e) {
                          if (!t) {
                            var r = n.getLanguagePartFromCode(e);
                            if (n.isSupportedCode(r)) return (t = r);
                            t = n.options.supportedLngs.find(function (e) {
                              if (0 === e.indexOf(r)) return e;
                            });
                          }
                        }),
                      t ||
                        (t = this.getFallbackCodes(
                          this.options.fallbackLng,
                        )[0]),
                      t)
                    : null;
                },
              },
              {
                key: 'getFallbackCodes',
                value: function (e, t) {
                  if (!e) return [];
                  if (
                    ('function' == typeof e && (e = e(t)),
                    'string' == typeof e && (e = [e]),
                    '[object Array]' === Object.prototype.toString.apply(e))
                  )
                    return e;
                  if (!t) return e.default || [];
                  var n = e[t];
                  return (
                    n || (n = e[this.getScriptPartFromCode(t)]),
                    n || (n = e[this.formatLanguageCode(t)]),
                    n || (n = e[this.getLanguagePartFromCode(t)]),
                    n || (n = e.default),
                    n || []
                  );
                },
              },
              {
                key: 'toResolveHierarchy',
                value: function (e, t) {
                  var n = this,
                    r = this.getFallbackCodes(
                      t || this.options.fallbackLng || [],
                      e,
                    ),
                    o = [],
                    i = function (e) {
                      e &&
                        (n.isSupportedCode(e)
                          ? o.push(e)
                          : n.logger.warn(
                              'rejecting language code not found in supportedLngs: '.concat(
                                e,
                              ),
                            ));
                    };
                  return (
                    'string' == typeof e && e.indexOf('-') > -1
                      ? ('languageOnly' !== this.options.load &&
                          i(this.formatLanguageCode(e)),
                        'languageOnly' !== this.options.load &&
                          'currentOnly' !== this.options.load &&
                          i(this.getScriptPartFromCode(e)),
                        'currentOnly' !== this.options.load &&
                          i(this.getLanguagePartFromCode(e)))
                      : 'string' == typeof e && i(this.formatLanguageCode(e)),
                    r.forEach(function (e) {
                      0 > o.indexOf(e) && i(n.formatLanguageCode(e));
                    }),
                    o
                  );
                },
              },
            ]),
            e
          );
        })(),
        eA = [
          {
            lngs: [
              'ach',
              'ak',
              'am',
              'arn',
              'br',
              'fil',
              'gun',
              'ln',
              'mfe',
              'mg',
              'mi',
              'oc',
              'pt',
              'pt-BR',
              'tg',
              'tl',
              'ti',
              'tr',
              'uz',
              'wa',
            ],
            nr: [1, 2],
            fc: 1,
          },
          {
            lngs: [
              'af',
              'an',
              'ast',
              'az',
              'bg',
              'bn',
              'ca',
              'da',
              'de',
              'dev',
              'el',
              'en',
              'eo',
              'es',
              'et',
              'eu',
              'fi',
              'fo',
              'fur',
              'fy',
              'gl',
              'gu',
              'ha',
              'hi',
              'hu',
              'hy',
              'ia',
              'it',
              'kk',
              'kn',
              'ku',
              'lb',
              'mai',
              'ml',
              'mn',
              'mr',
              'nah',
              'nap',
              'nb',
              'ne',
              'nl',
              'nn',
              'no',
              'nso',
              'pa',
              'pap',
              'pms',
              'ps',
              'pt-PT',
              'rm',
              'sco',
              'se',
              'si',
              'so',
              'son',
              'sq',
              'sv',
              'sw',
              'ta',
              'te',
              'tk',
              'ur',
              'yo',
            ],
            nr: [1, 2],
            fc: 2,
          },
          {
            lngs: [
              'ay',
              'bo',
              'cgg',
              'fa',
              'ht',
              'id',
              'ja',
              'jbo',
              'ka',
              'km',
              'ko',
              'ky',
              'lo',
              'ms',
              'sah',
              'su',
              'th',
              'tt',
              'ug',
              'vi',
              'wo',
              'zh',
            ],
            nr: [1],
            fc: 3,
          },
          {
            lngs: ['be', 'bs', 'cnr', 'dz', 'hr', 'ru', 'sr', 'uk'],
            nr: [1, 2, 5],
            fc: 4,
          },
          { lngs: ['ar'], nr: [0, 1, 2, 3, 11, 100], fc: 5 },
          { lngs: ['cs', 'sk'], nr: [1, 2, 5], fc: 6 },
          { lngs: ['csb', 'pl'], nr: [1, 2, 5], fc: 7 },
          { lngs: ['cy'], nr: [1, 2, 3, 8], fc: 8 },
          { lngs: ['fr'], nr: [1, 2], fc: 9 },
          { lngs: ['ga'], nr: [1, 2, 3, 7, 11], fc: 10 },
          { lngs: ['gd'], nr: [1, 2, 3, 20], fc: 11 },
          { lngs: ['is'], nr: [1, 2], fc: 12 },
          { lngs: ['jv'], nr: [0, 1], fc: 13 },
          { lngs: ['kw'], nr: [1, 2, 3, 4], fc: 14 },
          { lngs: ['lt'], nr: [1, 2, 10], fc: 15 },
          { lngs: ['lv'], nr: [1, 2, 0], fc: 16 },
          { lngs: ['mk'], nr: [1, 2], fc: 17 },
          { lngs: ['mnk'], nr: [0, 1, 2], fc: 18 },
          { lngs: ['mt'], nr: [1, 2, 11, 20], fc: 19 },
          { lngs: ['or'], nr: [2, 1], fc: 2 },
          { lngs: ['ro'], nr: [1, 2, 20], fc: 20 },
          { lngs: ['sl'], nr: [5, 1, 2, 3], fc: 21 },
          { lngs: ['he', 'iw'], nr: [1, 2, 20, 21], fc: 22 },
        ],
        eF = {
          1: function (e) {
            return Number(e > 1);
          },
          2: function (e) {
            return Number(1 != e);
          },
          3: function (e) {
            return 0;
          },
          4: function (e) {
            return Number(
              e % 10 == 1 && e % 100 != 11
                ? 0
                : e % 10 >= 2 && e % 10 <= 4 && (e % 100 < 10 || e % 100 >= 20)
                ? 1
                : 2,
            );
          },
          5: function (e) {
            return Number(
              0 == e
                ? 0
                : 1 == e
                ? 1
                : 2 == e
                ? 2
                : e % 100 >= 3 && e % 100 <= 10
                ? 3
                : e % 100 >= 11
                ? 4
                : 5,
            );
          },
          6: function (e) {
            return Number(1 == e ? 0 : e >= 2 && e <= 4 ? 1 : 2);
          },
          7: function (e) {
            return Number(
              1 == e
                ? 0
                : e % 10 >= 2 && e % 10 <= 4 && (e % 100 < 10 || e % 100 >= 20)
                ? 1
                : 2,
            );
          },
          8: function (e) {
            return Number(1 == e ? 0 : 2 == e ? 1 : 8 != e && 11 != e ? 2 : 3);
          },
          9: function (e) {
            return Number(e >= 2);
          },
          10: function (e) {
            return Number(1 == e ? 0 : 2 == e ? 1 : e < 7 ? 2 : e < 11 ? 3 : 4);
          },
          11: function (e) {
            return Number(
              1 == e || 11 == e
                ? 0
                : 2 == e || 12 == e
                ? 1
                : e > 2 && e < 20
                ? 2
                : 3,
            );
          },
          12: function (e) {
            return Number(e % 10 != 1 || e % 100 == 11);
          },
          13: function (e) {
            return Number(0 !== e);
          },
          14: function (e) {
            return Number(1 == e ? 0 : 2 == e ? 1 : 3 == e ? 2 : 3);
          },
          15: function (e) {
            return Number(
              e % 10 == 1 && e % 100 != 11
                ? 0
                : e % 10 >= 2 && (e % 100 < 10 || e % 100 >= 20)
                ? 1
                : 2,
            );
          },
          16: function (e) {
            return Number(e % 10 == 1 && e % 100 != 11 ? 0 : 0 !== e ? 1 : 2);
          },
          17: function (e) {
            return Number(1 == e || (e % 10 == 1 && e % 100 != 11) ? 0 : 1);
          },
          18: function (e) {
            return Number(0 == e ? 0 : 1 == e ? 1 : 2);
          },
          19: function (e) {
            return Number(
              1 == e
                ? 0
                : 0 == e || (e % 100 > 1 && e % 100 < 11)
                ? 1
                : e % 100 > 10 && e % 100 < 20
                ? 2
                : 3,
            );
          },
          20: function (e) {
            return Number(
              1 == e ? 0 : 0 == e || (e % 100 > 0 && e % 100 < 20) ? 1 : 2,
            );
          },
          21: function (e) {
            return Number(
              e % 100 == 1
                ? 1
                : e % 100 == 2
                ? 2
                : e % 100 == 3 || e % 100 == 4
                ? 3
                : 0,
            );
          },
          22: function (e) {
            return Number(
              1 == e
                ? 0
                : 2 == e
                ? 1
                : (e < 0 || e > 10) && e % 10 == 0
                ? 2
                : 3,
            );
          },
        },
        eV = ['v1', 'v2', 'v3'],
        e$ = { zero: 0, one: 1, two: 2, few: 3, many: 4, other: 5 },
        eM = (function () {
          function e(t) {
            var n,
              r =
                arguments.length > 1 && void 0 !== arguments[1]
                  ? arguments[1]
                  : {};
            v(this, e),
              (this.languageUtils = t),
              (this.options = r),
              (this.logger = ep.create('pluralResolver')),
              (this.options.compatibilityJSON &&
                'v4' !== this.options.compatibilityJSON) ||
                ('undefined' != typeof Intl && Intl.PluralRules) ||
                ((this.options.compatibilityJSON = 'v3'),
                this.logger.error(
                  'Your environment seems not to be Intl API compatible, use an Intl.PluralRules polyfill. Will fallback to the compatibilityJSON v3 format handling.',
                )),
              (this.rules =
                ((n = {}),
                eA.forEach(function (e) {
                  e.lngs.forEach(function (t) {
                    n[t] = { numbers: e.nr, plurals: eF[e.fc] };
                  });
                }),
                n));
          }
          return (
            m(e, [
              {
                key: 'addRule',
                value: function (e, t) {
                  this.rules[e] = t;
                },
              },
              {
                key: 'getRule',
                value: function (e) {
                  var t =
                    arguments.length > 1 && void 0 !== arguments[1]
                      ? arguments[1]
                      : {};
                  if (this.shouldUseIntlApi())
                    try {
                      return new Intl.PluralRules(e, {
                        type: t.ordinal ? 'ordinal' : 'cardinal',
                      });
                    } catch (e) {
                      return;
                    }
                  return (
                    this.rules[e] ||
                    this.rules[this.languageUtils.getLanguagePartFromCode(e)]
                  );
                },
              },
              {
                key: 'needsPlural',
                value: function (e) {
                  var t =
                      arguments.length > 1 && void 0 !== arguments[1]
                        ? arguments[1]
                        : {},
                    n = this.getRule(e, t);
                  return this.shouldUseIntlApi()
                    ? n && n.resolvedOptions().pluralCategories.length > 1
                    : n && n.numbers.length > 1;
                },
              },
              {
                key: 'getPluralFormsOfKey',
                value: function (e, t) {
                  var n =
                    arguments.length > 2 && void 0 !== arguments[2]
                      ? arguments[2]
                      : {};
                  return this.getSuffixes(e, n).map(function (e) {
                    return ''.concat(t).concat(e);
                  });
                },
              },
              {
                key: 'getSuffixes',
                value: function (e) {
                  var t = this,
                    n =
                      arguments.length > 1 && void 0 !== arguments[1]
                        ? arguments[1]
                        : {},
                    r = this.getRule(e, n);
                  return r
                    ? this.shouldUseIntlApi()
                      ? r
                          .resolvedOptions()
                          .pluralCategories.sort(function (e, t) {
                            return e$[e] - e$[t];
                          })
                          .map(function (e) {
                            return ''.concat(t.options.prepend).concat(e);
                          })
                      : r.numbers.map(function (r) {
                          return t.getSuffix(e, r, n);
                        })
                    : [];
                },
              },
              {
                key: 'getSuffix',
                value: function (e, t) {
                  var n =
                      arguments.length > 2 && void 0 !== arguments[2]
                        ? arguments[2]
                        : {},
                    r = this.getRule(e, n);
                  return r
                    ? this.shouldUseIntlApi()
                      ? ''.concat(this.options.prepend).concat(r.select(t))
                      : this.getSuffixRetroCompatible(r, t)
                    : (this.logger.warn('no plural rule found for: '.concat(e)),
                      '');
                },
              },
              {
                key: 'getSuffixRetroCompatible',
                value: function (e, t) {
                  var n = this,
                    r = e.noAbs ? e.plurals(t) : e.plurals(Math.abs(t)),
                    o = e.numbers[r];
                  this.options.simplifyPluralSuffix &&
                    2 === e.numbers.length &&
                    1 === e.numbers[0] &&
                    (2 === o ? (o = 'plural') : 1 === o && (o = ''));
                  var i = function () {
                    return n.options.prepend && o.toString()
                      ? n.options.prepend + o.toString()
                      : o.toString();
                  };
                  return 'v1' === this.options.compatibilityJSON
                    ? 1 === o
                      ? ''
                      : 'number' == typeof o
                      ? '_plural_'.concat(o.toString())
                      : i()
                    : 'v2' === this.options.compatibilityJSON ||
                      (this.options.simplifyPluralSuffix &&
                        2 === e.numbers.length &&
                        1 === e.numbers[0])
                    ? i()
                    : this.options.prepend && r.toString()
                    ? this.options.prepend + r.toString()
                    : r.toString();
                },
              },
              {
                key: 'shouldUseIntlApi',
                value: function () {
                  return !eV.includes(this.options.compatibilityJSON);
                },
              },
            ]),
            e
          );
        })();
      function eU(e, t) {
        var n = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var r = Object.getOwnPropertySymbols(e);
          t &&
            (r = r.filter(function (t) {
              return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            n.push.apply(n, r);
        }
        return n;
      }
      function eB(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = null != arguments[t] ? arguments[t] : {};
          t % 2
            ? eU(Object(n), !0).forEach(function (t) {
                (0, a.Z)(e, t, n[t]);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
            : eU(Object(n)).forEach(function (t) {
                Object.defineProperty(
                  e,
                  t,
                  Object.getOwnPropertyDescriptor(n, t),
                );
              });
        }
        return e;
      }
      var eK = (function () {
        function e() {
          var t =
            arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
          v(this, e),
            (this.logger = ep.create('interpolator')),
            (this.options = t),
            (this.format =
              (t.interpolation && t.interpolation.format) ||
              function (e) {
                return e;
              }),
            this.init(t);
        }
        return (
          m(e, [
            {
              key: 'init',
              value: function () {
                var e =
                  arguments.length > 0 && void 0 !== arguments[0]
                    ? arguments[0]
                    : {};
                e.interpolation || (e.interpolation = { escapeValue: !0 });
                var t = e.interpolation;
                (this.escape = void 0 !== t.escape ? t.escape : ex),
                  (this.escapeValue =
                    void 0 === t.escapeValue || t.escapeValue),
                  (this.useRawValueToEscape =
                    void 0 !== t.useRawValueToEscape && t.useRawValueToEscape),
                  (this.prefix = t.prefix
                    ? eO(t.prefix)
                    : t.prefixEscaped || '{{'),
                  (this.suffix = t.suffix
                    ? eO(t.suffix)
                    : t.suffixEscaped || '}}'),
                  (this.formatSeparator = t.formatSeparator
                    ? t.formatSeparator
                    : t.formatSeparator || ','),
                  (this.unescapePrefix = t.unescapeSuffix
                    ? ''
                    : t.unescapePrefix || '-'),
                  (this.unescapeSuffix = this.unescapePrefix
                    ? ''
                    : t.unescapeSuffix || ''),
                  (this.nestingPrefix = t.nestingPrefix
                    ? eO(t.nestingPrefix)
                    : t.nestingPrefixEscaped || eO('$t(')),
                  (this.nestingSuffix = t.nestingSuffix
                    ? eO(t.nestingSuffix)
                    : t.nestingSuffixEscaped || eO(')')),
                  (this.nestingOptionsSeparator = t.nestingOptionsSeparator
                    ? t.nestingOptionsSeparator
                    : t.nestingOptionsSeparator || ','),
                  (this.maxReplaces = t.maxReplaces ? t.maxReplaces : 1e3),
                  (this.alwaysFormat =
                    void 0 !== t.alwaysFormat && t.alwaysFormat),
                  this.resetRegExp();
              },
            },
            {
              key: 'reset',
              value: function () {
                this.options && this.init(this.options);
              },
            },
            {
              key: 'resetRegExp',
              value: function () {
                var e = ''.concat(this.prefix, '(.+?)').concat(this.suffix);
                this.regexp = RegExp(e, 'g');
                var t = ''
                  .concat(this.prefix)
                  .concat(this.unescapePrefix, '(.+?)')
                  .concat(this.unescapeSuffix)
                  .concat(this.suffix);
                this.regexpUnescape = RegExp(t, 'g');
                var n = ''
                  .concat(this.nestingPrefix, '(.+?)')
                  .concat(this.nestingSuffix);
                this.nestingRegexp = RegExp(n, 'g');
              },
            },
            {
              key: 'interpolate',
              value: function (e, t, n, r) {
                var o,
                  i,
                  a,
                  s = this,
                  c =
                    (this.options &&
                      this.options.interpolation &&
                      this.options.interpolation.defaultVariables) ||
                    {};
                function u(e) {
                  return e.replace(/\$/g, '$$$$');
                }
                var l = function (e) {
                  if (0 > e.indexOf(s.formatSeparator)) {
                    var o = eb(t, c, e);
                    return s.alwaysFormat
                      ? s.format(
                          o,
                          void 0,
                          n,
                          eB(eB(eB({}, r), t), {}, { interpolationkey: e }),
                        )
                      : o;
                  }
                  var i = e.split(s.formatSeparator),
                    a = i.shift().trim(),
                    u = i.join(s.formatSeparator).trim();
                  return s.format(
                    eb(t, c, a),
                    u,
                    n,
                    eB(eB(eB({}, r), t), {}, { interpolationkey: a }),
                  );
                };
                this.resetRegExp();
                var f =
                    (r && r.missingInterpolationHandler) ||
                    this.options.missingInterpolationHandler,
                  p =
                    r &&
                    r.interpolation &&
                    void 0 !== r.interpolation.skipOnVariables
                      ? r.interpolation.skipOnVariables
                      : this.options.interpolation.skipOnVariables;
                return (
                  [
                    {
                      regex: this.regexpUnescape,
                      safeValue: function (e) {
                        return u(e);
                      },
                    },
                    {
                      regex: this.regexp,
                      safeValue: function (e) {
                        return s.escapeValue ? u(s.escape(e)) : u(e);
                      },
                    },
                  ].forEach(function (t) {
                    for (a = 0; (o = t.regex.exec(e)); ) {
                      var n = o[1].trim();
                      if (void 0 === (i = l(n))) {
                        if ('function' == typeof f) {
                          var c = f(e, o, r);
                          i = 'string' == typeof c ? c : '';
                        } else if (r && r.hasOwnProperty(n)) i = '';
                        else if (p) {
                          i = o[0];
                          continue;
                        } else
                          s.logger.warn(
                            'missed to pass in variable '
                              .concat(n, ' for interpolating ')
                              .concat(e),
                          ),
                            (i = '');
                      } else
                        'string' == typeof i ||
                          s.useRawValueToEscape ||
                          (i = eh(i));
                      var u = t.safeValue(i);
                      if (
                        ((e = e.replace(o[0], u)),
                        p
                          ? ((t.regex.lastIndex += i.length),
                            (t.regex.lastIndex -= o[0].length))
                          : (t.regex.lastIndex = 0),
                        ++a >= s.maxReplaces)
                      )
                        break;
                    }
                  }),
                  e
                );
              },
            },
            {
              key: 'nest',
              value: function (e, t) {
                var n,
                  r,
                  o = this,
                  i =
                    arguments.length > 2 && void 0 !== arguments[2]
                      ? arguments[2]
                      : {},
                  a = eB({}, i);
                function s(e, t) {
                  var n = this.nestingOptionsSeparator;
                  if (0 > e.indexOf(n)) return e;
                  var r = e.split(new RegExp(''.concat(n, '[ ]*{'))),
                    o = '{'.concat(r[1]);
                  (e = r[0]),
                    (o = (o = this.interpolate(o, a)).replace(/'/g, '"'));
                  try {
                    (a = JSON.parse(o)), t && (a = eB(eB({}, t), a));
                  } catch (t) {
                    return (
                      this.logger.warn(
                        'failed parsing options string in nesting for key '.concat(
                          e,
                        ),
                        t,
                      ),
                      ''.concat(e).concat(n).concat(o)
                    );
                  }
                  return delete a.defaultValue, e;
                }
                for (
                  a.applyPostProcessor = !1, delete a.defaultValue;
                  (n = this.nestingRegexp.exec(e));

                ) {
                  var c = [],
                    u = !1;
                  if (
                    -1 !== n[0].indexOf(this.formatSeparator) &&
                    !/{.*}/.test(n[1])
                  ) {
                    var l = n[1].split(this.formatSeparator).map(function (e) {
                      return e.trim();
                    });
                    (n[1] = l.shift()), (c = l), (u = !0);
                  }
                  if (
                    (r = t(s.call(this, n[1].trim(), a), a)) &&
                    n[0] === e &&
                    'string' != typeof r
                  )
                    return r;
                  'string' != typeof r && (r = eh(r)),
                    r ||
                      (this.logger.warn(
                        'missed to resolve '
                          .concat(n[1], ' for nesting ')
                          .concat(e),
                      ),
                      (r = '')),
                    u &&
                      (r = c.reduce(function (e, t) {
                        return o.format(
                          e,
                          t,
                          i.lng,
                          eB(eB({}, i), {}, { interpolationkey: n[1].trim() }),
                        );
                      }, r.trim())),
                    (e = e.replace(n[0], r)),
                    (this.regexp.lastIndex = 0);
                }
                return e;
              },
            },
          ]),
          e
        );
      })();
      function e_(e, t) {
        var n = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var r = Object.getOwnPropertySymbols(e);
          t &&
            (r = r.filter(function (t) {
              return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            n.push.apply(n, r);
        }
        return n;
      }
      function eZ(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = null != arguments[t] ? arguments[t] : {};
          t % 2
            ? e_(Object(n), !0).forEach(function (t) {
                (0, a.Z)(e, t, n[t]);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
            : e_(Object(n)).forEach(function (t) {
                Object.defineProperty(
                  e,
                  t,
                  Object.getOwnPropertyDescriptor(n, t),
                );
              });
        }
        return e;
      }
      var eH = (function () {
        function e() {
          var t =
            arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
          v(this, e),
            (this.logger = ep.create('formatter')),
            (this.options = t),
            (this.formats = {
              number: function (e, t, n) {
                return new Intl.NumberFormat(t, n).format(e);
              },
              currency: function (e, t, n) {
                return new Intl.NumberFormat(
                  t,
                  eZ(eZ({}, n), {}, { style: 'currency' }),
                ).format(e);
              },
              datetime: function (e, t, n) {
                return new Intl.DateTimeFormat(t, eZ({}, n)).format(e);
              },
              relativetime: function (e, t, n) {
                return new Intl.RelativeTimeFormat(t, eZ({}, n)).format(
                  e,
                  n.range || 'day',
                );
              },
              list: function (e, t, n) {
                return new Intl.ListFormat(t, eZ({}, n)).format(e);
              },
            }),
            this.init(t);
        }
        return (
          m(e, [
            {
              key: 'init',
              value: function (e) {
                var t =
                    arguments.length > 1 && void 0 !== arguments[1]
                      ? arguments[1]
                      : { interpolation: {} },
                  n = t.interpolation;
                this.formatSeparator = n.formatSeparator
                  ? n.formatSeparator
                  : n.formatSeparator || ',';
              },
            },
            {
              key: 'add',
              value: function (e, t) {
                this.formats[e.toLowerCase().trim()] = t;
              },
            },
            {
              key: 'format',
              value: function (e, t, n, r) {
                var o = this;
                return t.split(this.formatSeparator).reduce(function (e, t) {
                  var i = (function (e) {
                      var t = e.toLowerCase().trim(),
                        n = {};
                      if (e.indexOf('(') > -1) {
                        var r = e.split('(');
                        t = r[0].toLowerCase().trim();
                        var o = r[1].substring(0, r[1].length - 1);
                        'currency' === t && 0 > o.indexOf(':')
                          ? n.currency || (n.currency = o.trim())
                          : 'relativetime' === t && 0 > o.indexOf(':')
                          ? n.range || (n.range = o.trim())
                          : o.split(';').forEach(function (e) {
                              if (e) {
                                var t,
                                  r =
                                    V((t = e.split(':'))) ||
                                    (0, ec.Z)(t) ||
                                    (0, $.Z)(t) ||
                                    M(),
                                  o = r[0],
                                  i = r
                                    .slice(1)
                                    .join(':')
                                    .trim()
                                    .replace(/^'+|'+$/g, '');
                                n[o.trim()] || (n[o.trim()] = i),
                                  'false' === i && (n[o.trim()] = !1),
                                  'true' === i && (n[o.trim()] = !0),
                                  isNaN(i) || (n[o.trim()] = parseInt(i, 10));
                              }
                            });
                      }
                      return { formatName: t, formatOptions: n };
                    })(t),
                    a = i.formatName,
                    s = i.formatOptions;
                  if (o.formats[a]) {
                    var c = e;
                    try {
                      var u =
                          (r &&
                            r.formatParams &&
                            r.formatParams[r.interpolationkey]) ||
                          {},
                        l = u.locale || u.lng || r.locale || r.lng || n;
                      c = o.formats[a](e, l, eZ(eZ(eZ({}, s), r), u));
                    } catch (e) {
                      o.logger.warn(e);
                    }
                    return c;
                  }
                  return (
                    o.logger.warn(
                      'there was no format function for '.concat(a),
                    ),
                    e
                  );
                }, e);
              },
            },
          ]),
          e
        );
      })();
      function ez(e, t) {
        var n = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var r = Object.getOwnPropertySymbols(e);
          t &&
            (r = r.filter(function (t) {
              return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            n.push.apply(n, r);
        }
        return n;
      }
      function eJ(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = null != arguments[t] ? arguments[t] : {};
          t % 2
            ? ez(Object(n), !0).forEach(function (t) {
                (0, a.Z)(e, t, n[t]);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
            : ez(Object(n)).forEach(function (t) {
                Object.defineProperty(
                  e,
                  t,
                  Object.getOwnPropertyDescriptor(n, t),
                );
              });
        }
        return e;
      }
      var eq = (function (e) {
        ei(r, e);
        var t,
          n =
            ((t = (function () {
              if (
                'undefined' == typeof Reflect ||
                !Reflect.construct ||
                Reflect.construct.sham
              )
                return !1;
              if ('function' == typeof Proxy) return !0;
              try {
                return (
                  Boolean.prototype.valueOf.call(
                    Reflect.construct(Boolean, [], function () {}),
                  ),
                  !0
                );
              } catch (e) {
                return !1;
              }
            })()),
            function () {
              var e,
                n = es(r);
              if (t) {
                var o = es(this).constructor;
                e = Reflect.construct(n, arguments, o);
              } else e = n.apply(this, arguments);
              return ea(this, e);
            });
        function r(e, t, o) {
          var i,
            a =
              arguments.length > 3 && void 0 !== arguments[3]
                ? arguments[3]
                : {};
          return (
            v(this, r),
            (i = n.call(this)),
            ew && eg.call(er(i)),
            (i.backend = e),
            (i.store = t),
            (i.services = o),
            (i.languageUtils = o.languageUtils),
            (i.options = a),
            (i.logger = ep.create('backendConnector')),
            (i.waitingReads = []),
            (i.maxParallelReads = a.maxParallelReads || 10),
            (i.readingCalls = 0),
            (i.maxRetries = a.maxRetries >= 0 ? a.maxRetries : 5),
            (i.retryTimeout = a.retryTimeout >= 1 ? a.retryTimeout : 350),
            (i.state = {}),
            (i.queue = []),
            i.backend && i.backend.init && i.backend.init(o, a.backend, a),
            i
          );
        }
        return (
          m(r, [
            {
              key: 'queueLoad',
              value: function (e, t, n, r) {
                var o = this,
                  i = {},
                  a = {},
                  s = {},
                  c = {};
                return (
                  e.forEach(function (e) {
                    var r = !0;
                    t.forEach(function (t) {
                      var s = ''.concat(e, '|').concat(t);
                      !n.reload && o.store.hasResourceBundle(e, t)
                        ? (o.state[s] = 2)
                        : o.state[s] < 0 ||
                          (1 === o.state[s]
                            ? void 0 === a[s] && (a[s] = !0)
                            : ((o.state[s] = 1),
                              (r = !1),
                              void 0 === a[s] && (a[s] = !0),
                              void 0 === i[s] && (i[s] = !0),
                              void 0 === c[t] && (c[t] = !0)));
                    }),
                      r || (s[e] = !0);
                  }),
                  (Object.keys(i).length || Object.keys(a).length) &&
                    this.queue.push({
                      pending: a,
                      pendingCount: Object.keys(a).length,
                      loaded: {},
                      errors: [],
                      callback: r,
                    }),
                  {
                    toLoad: Object.keys(i),
                    pending: Object.keys(a),
                    toLoadLanguages: Object.keys(s),
                    toLoadNamespaces: Object.keys(c),
                  }
                );
              },
            },
            {
              key: 'loaded',
              value: function (e, t, n) {
                var r = e.split('|'),
                  o = r[0],
                  i = r[1];
                t && this.emit('failedLoading', o, i, t),
                  n && this.store.addResourceBundle(o, i, n),
                  (this.state[e] = t ? -1 : 2);
                var a = {};
                this.queue.forEach(function (n) {
                  var r, s, c, u, l;
                  ((c = (s = ev(n.loaded, [o], Object)).obj)[(u = s.k)] =
                    c[u] || []),
                    r && (c[u] = c[u].concat(i)),
                    r || c[u].push(i),
                    void 0 !== (l = n).pending[e] &&
                      (delete l.pending[e], l.pendingCount--),
                    t && n.errors.push(t),
                    0 !== n.pendingCount ||
                      n.done ||
                      (Object.keys(n.loaded).forEach(function (e) {
                        a[e] || (a[e] = {});
                        var t = n.loaded[e];
                        t.length &&
                          t.forEach(function (t) {
                            void 0 === a[e][t] && (a[e][t] = !0);
                          });
                      }),
                      (n.done = !0),
                      n.errors.length ? n.callback(n.errors) : n.callback());
                }),
                  this.emit('loaded', a),
                  (this.queue = this.queue.filter(function (e) {
                    return !e.done;
                  }));
              },
            },
            {
              key: 'read',
              value: function (e, t, n) {
                var r = this,
                  o =
                    arguments.length > 3 && void 0 !== arguments[3]
                      ? arguments[3]
                      : 0,
                  i =
                    arguments.length > 4 && void 0 !== arguments[4]
                      ? arguments[4]
                      : this.retryTimeout,
                  a = arguments.length > 5 ? arguments[5] : void 0;
                if (!e.length) return a(null, {});
                if (this.readingCalls >= this.maxParallelReads) {
                  this.waitingReads.push({
                    lng: e,
                    ns: t,
                    fcName: n,
                    tried: o,
                    wait: i,
                    callback: a,
                  });
                  return;
                }
                return (
                  this.readingCalls++,
                  this.backend[n](e, t, function (s, c) {
                    if ((r.readingCalls--, r.waitingReads.length > 0)) {
                      var u = r.waitingReads.shift();
                      r.read(
                        u.lng,
                        u.ns,
                        u.fcName,
                        u.tried,
                        u.wait,
                        u.callback,
                      );
                    }
                    if (s && c && o < r.maxRetries) {
                      setTimeout(function () {
                        r.read.call(r, e, t, n, o + 1, 2 * i, a);
                      }, i);
                      return;
                    }
                    a(s, c);
                  })
                );
              },
            },
            {
              key: 'prepareLoading',
              value: function (e, t) {
                var n = this,
                  r =
                    arguments.length > 2 && void 0 !== arguments[2]
                      ? arguments[2]
                      : {},
                  o = arguments.length > 3 ? arguments[3] : void 0;
                if (!this.backend)
                  return (
                    this.logger.warn(
                      'No backend was added via i18next.use. Will not load resources.',
                    ),
                    o && o()
                  );
                'string' == typeof e &&
                  (e = this.languageUtils.toResolveHierarchy(e)),
                  'string' == typeof t && (t = [t]);
                var i = this.queueLoad(e, t, r, o);
                if (!i.toLoad.length) return i.pending.length || o(), null;
                i.toLoad.forEach(function (e) {
                  n.loadOne(e);
                });
              },
            },
            {
              key: 'load',
              value: function (e, t, n) {
                this.prepareLoading(e, t, {}, n);
              },
            },
            {
              key: 'reload',
              value: function (e, t, n) {
                this.prepareLoading(e, t, { reload: !0 }, n);
              },
            },
            {
              key: 'loadOne',
              value: function (e) {
                var t = this,
                  n =
                    arguments.length > 1 && void 0 !== arguments[1]
                      ? arguments[1]
                      : '',
                  r = e.split('|'),
                  o = r[0],
                  i = r[1];
                this.read(o, i, 'read', void 0, void 0, function (r, a) {
                  r &&
                    t.logger.warn(
                      ''
                        .concat(n, 'loading namespace ')
                        .concat(i, ' for language ')
                        .concat(o, ' failed'),
                      r,
                    ),
                    !r &&
                      a &&
                      t.logger.log(
                        ''
                          .concat(n, 'loaded namespace ')
                          .concat(i, ' for language ')
                          .concat(o),
                        a,
                      ),
                    t.loaded(e, r, a);
                });
              },
            },
            {
              key: 'saveMissing',
              value: function (e, t, n, r, o) {
                var i =
                  arguments.length > 5 && void 0 !== arguments[5]
                    ? arguments[5]
                    : {};
                if (
                  this.services.utils &&
                  this.services.utils.hasLoadedNamespace &&
                  !this.services.utils.hasLoadedNamespace(t)
                ) {
                  this.logger.warn(
                    'did not save key "'
                      .concat(n, '" as the namespace "')
                      .concat(t, '" was not yet loaded'),
                    'This means something IS WRONG in your setup. You access the t function before i18next.init / i18next.loadNamespace / i18next.changeLanguage was done. Wait for the callback or Promise to resolve before accessing it!!!',
                  );
                  return;
                }
                null != n &&
                  '' !== n &&
                  (this.backend &&
                    this.backend.create &&
                    this.backend.create(
                      e,
                      t,
                      n,
                      r,
                      null,
                      eJ(eJ({}, i), {}, { isUpdate: o }),
                    ),
                  e && e[0] && this.store.addResource(e[0], t, n, r));
              },
            },
          ]),
          r
        );
      })(eg);
      function eW(e) {
        return (
          'string' == typeof e.ns && (e.ns = [e.ns]),
          'string' == typeof e.fallbackLng && (e.fallbackLng = [e.fallbackLng]),
          'string' == typeof e.fallbackNS && (e.fallbackNS = [e.fallbackNS]),
          e.supportedLngs &&
            0 > e.supportedLngs.indexOf('cimode') &&
            (e.supportedLngs = e.supportedLngs.concat(['cimode'])),
          e
        );
      }
      function eY(e, t) {
        var n = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var r = Object.getOwnPropertySymbols(e);
          t &&
            (r = r.filter(function (t) {
              return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            n.push.apply(n, r);
        }
        return n;
      }
      function eG(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = null != arguments[t] ? arguments[t] : {};
          t % 2
            ? eY(Object(n), !0).forEach(function (t) {
                (0, a.Z)(e, t, n[t]);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
            : eY(Object(n)).forEach(function (t) {
                Object.defineProperty(
                  e,
                  t,
                  Object.getOwnPropertyDescriptor(n, t),
                );
              });
        }
        return e;
      }
      function eX() {}
      var eQ = (function (e) {
        ei(r, e);
        var t,
          n =
            ((t = (function () {
              if (
                'undefined' == typeof Reflect ||
                !Reflect.construct ||
                Reflect.construct.sham
              )
                return !1;
              if ('function' == typeof Proxy) return !0;
              try {
                return (
                  Boolean.prototype.valueOf.call(
                    Reflect.construct(Boolean, [], function () {}),
                  ),
                  !0
                );
              } catch (e) {
                return !1;
              }
            })()),
            function () {
              var e,
                n = es(r);
              if (t) {
                var o = es(this).constructor;
                e = Reflect.construct(n, arguments, o);
              } else e = n.apply(this, arguments);
              return ea(this, e);
            });
        function r() {
          var e,
            t =
              arguments.length > 0 && void 0 !== arguments[0]
                ? arguments[0]
                : {},
            o = arguments.length > 1 ? arguments[1] : void 0;
          if (
            (v(this, r),
            (e = n.call(this)),
            ew && eg.call(er(e)),
            (e.options = eW(t)),
            (e.services = {}),
            (e.logger = ep),
            (e.modules = { external: [] }),
            !(function (e) {
              Object.getOwnPropertyNames(Object.getPrototypeOf(e)).forEach(
                function (t) {
                  'function' == typeof e[t] && (e[t] = e[t].bind(e));
                },
              );
            })(er(e)),
            o && !e.isInitialized && !t.isClone)
          ) {
            if (!e.options.initImmediate) return e.init(t, o), ea(e, er(e));
            setTimeout(function () {
              e.init(t, o);
            }, 0);
          }
          return e;
        }
        return (
          m(r, [
            {
              key: 'init',
              value: function () {
                var e = this,
                  t =
                    arguments.length > 0 && void 0 !== arguments[0]
                      ? arguments[0]
                      : {},
                  n = arguments.length > 1 ? arguments[1] : void 0;
                'function' == typeof t && ((n = t), (t = {})),
                  !t.defaultNS &&
                    !1 !== t.defaultNS &&
                    t.ns &&
                    ('string' == typeof t.ns
                      ? (t.defaultNS = t.ns)
                      : 0 > t.ns.indexOf('translation') &&
                        (t.defaultNS = t.ns[0]));
                var r = {
                  debug: !1,
                  initImmediate: !0,
                  ns: ['translation'],
                  defaultNS: ['translation'],
                  fallbackLng: ['dev'],
                  fallbackNS: !1,
                  supportedLngs: !1,
                  nonExplicitSupportedLngs: !1,
                  load: 'all',
                  preload: !1,
                  simplifyPluralSuffix: !0,
                  keySeparator: '.',
                  nsSeparator: ':',
                  pluralSeparator: '_',
                  contextSeparator: '_',
                  partialBundledLanguages: !1,
                  saveMissing: !1,
                  updateMissing: !1,
                  saveMissingTo: 'fallback',
                  saveMissingPlurals: !0,
                  missingKeyHandler: !1,
                  missingInterpolationHandler: !1,
                  postProcess: !1,
                  postProcessPassResolved: !1,
                  returnNull: !0,
                  returnEmptyString: !0,
                  returnObjects: !1,
                  joinArrays: !1,
                  returnedObjectHandler: !1,
                  parseMissingKeyHandler: !1,
                  appendNamespaceToMissingKey: !1,
                  appendNamespaceToCIMode: !1,
                  overloadTranslationOptionHandler: function (e) {
                    var t = {};
                    if (
                      ('object' === i(e[1]) && (t = e[1]),
                      'string' == typeof e[1] && (t.defaultValue = e[1]),
                      'string' == typeof e[2] && (t.tDescription = e[2]),
                      'object' === i(e[2]) || 'object' === i(e[3]))
                    ) {
                      var n = e[3] || e[2];
                      Object.keys(n).forEach(function (e) {
                        t[e] = n[e];
                      });
                    }
                    return t;
                  },
                  interpolation: {
                    escapeValue: !0,
                    format: function (e, t, n, r) {
                      return e;
                    },
                    prefix: '{{',
                    suffix: '}}',
                    formatSeparator: ',',
                    unescapePrefix: '-',
                    nestingPrefix: '$t(',
                    nestingSuffix: ')',
                    nestingOptionsSeparator: ',',
                    maxReplaces: 1e3,
                    skipOnVariables: !0,
                  },
                };
                function o(e) {
                  return e ? ('function' == typeof e ? new e() : e) : null;
                }
                if (
                  ((this.options = eG(eG(eG({}, r), this.options), eW(t))),
                  'v1' !== this.options.compatibilityAPI &&
                    (this.options.interpolation = eG(
                      eG({}, r.interpolation),
                      this.options.interpolation,
                    )),
                  void 0 !== t.keySeparator &&
                    (this.options.userDefinedKeySeparator = t.keySeparator),
                  void 0 !== t.nsSeparator &&
                    (this.options.userDefinedNsSeparator = t.nsSeparator),
                  !this.options.isClone)
                ) {
                  this.modules.logger
                    ? ep.init(o(this.modules.logger), this.options)
                    : ep.init(null, this.options),
                    this.modules.formatter
                      ? (a = this.modules.formatter)
                      : 'undefined' != typeof Intl && (a = eH);
                  var a,
                    s = new eI(this.options);
                  this.store = new eL(this.options.resources, this.options);
                  var c = this.services;
                  (c.logger = ep),
                    (c.resourceStore = this.store),
                    (c.languageUtils = s),
                    (c.pluralResolver = new eM(s, {
                      prepend: this.options.pluralSeparator,
                      compatibilityJSON: this.options.compatibilityJSON,
                      simplifyPluralSuffix: this.options.simplifyPluralSuffix,
                    })),
                    a &&
                      (!this.options.interpolation.format ||
                        this.options.interpolation.format ===
                          r.interpolation.format) &&
                      ((c.formatter = o(a)),
                      c.formatter.init(c, this.options),
                      (this.options.interpolation.format =
                        c.formatter.format.bind(c.formatter))),
                    (c.interpolator = new eK(this.options)),
                    (c.utils = {
                      hasLoadedNamespace: this.hasLoadedNamespace.bind(this),
                    }),
                    (c.backendConnector = new eq(
                      o(this.modules.backend),
                      c.resourceStore,
                      c,
                      this.options,
                    )),
                    c.backendConnector.on('*', function (t) {
                      for (
                        var n = arguments.length,
                          r = Array(n > 1 ? n - 1 : 0),
                          o = 1;
                        o < n;
                        o++
                      )
                        r[o - 1] = arguments[o];
                      e.emit.apply(e, [t].concat(r));
                    }),
                    this.modules.languageDetector &&
                      ((c.languageDetector = o(this.modules.languageDetector)),
                      c.languageDetector.init(
                        c,
                        this.options.detection,
                        this.options,
                      )),
                    this.modules.i18nFormat &&
                      ((c.i18nFormat = o(this.modules.i18nFormat)),
                      c.i18nFormat.init && c.i18nFormat.init(this)),
                    (this.translator = new eD(this.services, this.options)),
                    this.translator.on('*', function (t) {
                      for (
                        var n = arguments.length,
                          r = Array(n > 1 ? n - 1 : 0),
                          o = 1;
                        o < n;
                        o++
                      )
                        r[o - 1] = arguments[o];
                      e.emit.apply(e, [t].concat(r));
                    }),
                    this.modules.external.forEach(function (t) {
                      t.init && t.init(e);
                    });
                }
                if (
                  ((this.format = this.options.interpolation.format),
                  n || (n = eX),
                  this.options.fallbackLng &&
                    !this.services.languageDetector &&
                    !this.options.lng)
                ) {
                  var u = this.services.languageUtils.getFallbackCodes(
                    this.options.fallbackLng,
                  );
                  u.length > 0 && 'dev' !== u[0] && (this.options.lng = u[0]);
                }
                this.services.languageDetector ||
                  this.options.lng ||
                  this.logger.warn(
                    'init: no languageDetector is used and no lng is defined',
                  ),
                  [
                    'getResource',
                    'hasResourceBundle',
                    'getResourceBundle',
                    'getDataByLanguage',
                  ].forEach(function (t) {
                    e[t] = function () {
                      var n;
                      return (n = e.store)[t].apply(n, arguments);
                    };
                  }),
                  [
                    'addResource',
                    'addResources',
                    'addResourceBundle',
                    'removeResourceBundle',
                  ].forEach(function (t) {
                    e[t] = function () {
                      var n;
                      return (n = e.store)[t].apply(n, arguments), e;
                    };
                  });
                var l = ed(),
                  f = function () {
                    var t = function (t, r) {
                      e.isInitialized &&
                        !e.initializedStoreOnce &&
                        e.logger.warn(
                          'init: i18next is already initialized. You should call init just once!',
                        ),
                        (e.isInitialized = !0),
                        e.options.isClone ||
                          e.logger.log('initialized', e.options),
                        e.emit('initialized', e.options),
                        l.resolve(r),
                        n(t, r);
                    };
                    if (
                      e.languages &&
                      'v1' !== e.options.compatibilityAPI &&
                      !e.isInitialized
                    )
                      return t(null, e.t.bind(e));
                    e.changeLanguage(e.options.lng, t);
                  };
                return (
                  this.options.resources || !this.options.initImmediate
                    ? f()
                    : setTimeout(f, 0),
                  l
                );
              },
            },
            {
              key: 'loadResources',
              value: function (e) {
                var t = this,
                  n =
                    arguments.length > 1 && void 0 !== arguments[1]
                      ? arguments[1]
                      : eX,
                  r = n,
                  o = 'string' == typeof e ? e : this.language;
                if (
                  ('function' == typeof e && (r = e),
                  !this.options.resources ||
                    this.options.partialBundledLanguages)
                ) {
                  if (o && 'cimode' === o.toLowerCase()) return r();
                  var i = [],
                    a = function (e) {
                      e &&
                        t.services.languageUtils
                          .toResolveHierarchy(e)
                          .forEach(function (e) {
                            0 > i.indexOf(e) && i.push(e);
                          });
                    };
                  o
                    ? a(o)
                    : this.services.languageUtils
                        .getFallbackCodes(this.options.fallbackLng)
                        .forEach(function (e) {
                          return a(e);
                        }),
                    this.options.preload &&
                      this.options.preload.forEach(function (e) {
                        return a(e);
                      }),
                    this.services.backendConnector.load(
                      i,
                      this.options.ns,
                      function (e) {
                        e ||
                          t.resolvedLanguage ||
                          !t.language ||
                          t.setResolvedLanguage(t.language),
                          r(e);
                      },
                    );
                } else r(null);
              },
            },
            {
              key: 'reloadResources',
              value: function (e, t, n) {
                var r = ed();
                return (
                  e || (e = this.languages),
                  t || (t = this.options.ns),
                  n || (n = eX),
                  this.services.backendConnector.reload(e, t, function (e) {
                    r.resolve(), n(e);
                  }),
                  r
                );
              },
            },
            {
              key: 'use',
              value: function (e) {
                if (!e)
                  throw Error(
                    'You are passing an undefined module! Please check the object you are passing to i18next.use()',
                  );
                if (!e.type)
                  throw Error(
                    'You are passing a wrong module! Please check the object you are passing to i18next.use()',
                  );
                return (
                  'backend' === e.type && (this.modules.backend = e),
                  ('logger' === e.type || (e.log && e.warn && e.error)) &&
                    (this.modules.logger = e),
                  'languageDetector' === e.type &&
                    (this.modules.languageDetector = e),
                  'i18nFormat' === e.type && (this.modules.i18nFormat = e),
                  'postProcessor' === e.type && eN.addPostProcessor(e),
                  'formatter' === e.type && (this.modules.formatter = e),
                  '3rdParty' === e.type && this.modules.external.push(e),
                  this
                );
              },
            },
            {
              key: 'setResolvedLanguage',
              value: function (e) {
                if (e && this.languages && !(['cimode', 'dev'].indexOf(e) > -1))
                  for (var t = 0; t < this.languages.length; t++) {
                    var n = this.languages[t];
                    if (
                      !(['cimode', 'dev'].indexOf(n) > -1) &&
                      this.store.hasLanguageSomeTranslations(n)
                    ) {
                      this.resolvedLanguage = n;
                      break;
                    }
                  }
              },
            },
            {
              key: 'changeLanguage',
              value: function (e, t) {
                var n = this;
                this.isLanguageChangingTo = e;
                var r = ed();
                this.emit('languageChanging', e);
                var o = function (e) {
                    (n.language = e),
                      (n.languages =
                        n.services.languageUtils.toResolveHierarchy(e)),
                      (n.resolvedLanguage = void 0),
                      n.setResolvedLanguage(e);
                  },
                  i = function (e, i) {
                    i
                      ? (o(i),
                        n.translator.changeLanguage(i),
                        (n.isLanguageChangingTo = void 0),
                        n.emit('languageChanged', i),
                        n.logger.log('languageChanged', i))
                      : (n.isLanguageChangingTo = void 0),
                      r.resolve(function () {
                        return n.t.apply(n, arguments);
                      }),
                      t &&
                        t(e, function () {
                          return n.t.apply(n, arguments);
                        });
                  },
                  a = function (t) {
                    e || t || !n.services.languageDetector || (t = []);
                    var r =
                      'string' == typeof t
                        ? t
                        : n.services.languageUtils.getBestMatchFromCodes(t);
                    r &&
                      (n.language || o(r),
                      n.translator.language || n.translator.changeLanguage(r),
                      n.services.languageDetector &&
                        n.services.languageDetector.cacheUserLanguage(r)),
                      n.loadResources(r, function (e) {
                        i(e, r);
                      });
                  };
                return (
                  e ||
                  !this.services.languageDetector ||
                  this.services.languageDetector.async
                    ? !e &&
                      this.services.languageDetector &&
                      this.services.languageDetector.async
                      ? this.services.languageDetector.detect(a)
                      : a(e)
                    : a(this.services.languageDetector.detect()),
                  r
                );
              },
            },
            {
              key: 'getFixedT',
              value: function (e, t, n) {
                var r = this,
                  o = function e(t, o) {
                    if ('object' !== i(o)) {
                      for (
                        var a,
                          s = arguments.length,
                          c = Array(s > 2 ? s - 2 : 0),
                          u = 2;
                        u < s;
                        u++
                      )
                        c[u - 2] = arguments[u];
                      a = r.options.overloadTranslationOptionHandler(
                        [t, o].concat(c),
                      );
                    } else a = eG({}, o);
                    (a.lng = a.lng || e.lng),
                      (a.lngs = a.lngs || e.lngs),
                      (a.ns = a.ns || e.ns),
                      (a.keyPrefix = a.keyPrefix || n || e.keyPrefix);
                    var l = r.options.keySeparator || '.',
                      f = a.keyPrefix
                        ? ''.concat(a.keyPrefix).concat(l).concat(t)
                        : t;
                    return r.t(f, a);
                  };
                return (
                  'string' == typeof e ? (o.lng = e) : (o.lngs = e),
                  (o.ns = t),
                  (o.keyPrefix = n),
                  o
                );
              },
            },
            {
              key: 't',
              value: function () {
                var e;
                return (
                  this.translator &&
                  (e = this.translator).translate.apply(e, arguments)
                );
              },
            },
            {
              key: 'exists',
              value: function () {
                var e;
                return (
                  this.translator &&
                  (e = this.translator).exists.apply(e, arguments)
                );
              },
            },
            {
              key: 'setDefaultNamespace',
              value: function (e) {
                this.options.defaultNS = e;
              },
            },
            {
              key: 'hasLoadedNamespace',
              value: function (e) {
                var t = this,
                  n =
                    arguments.length > 1 && void 0 !== arguments[1]
                      ? arguments[1]
                      : {};
                if (!this.isInitialized)
                  return (
                    this.logger.warn(
                      'hasLoadedNamespace: i18next was not initialized',
                      this.languages,
                    ),
                    !1
                  );
                if (!this.languages || !this.languages.length)
                  return (
                    this.logger.warn(
                      'hasLoadedNamespace: i18n.languages were undefined or empty',
                      this.languages,
                    ),
                    !1
                  );
                var r = this.resolvedLanguage || this.languages[0],
                  o = !!this.options && this.options.fallbackLng,
                  i = this.languages[this.languages.length - 1];
                if ('cimode' === r.toLowerCase()) return !0;
                var a = function (e, n) {
                  var r =
                    t.services.backendConnector.state[
                      ''.concat(e, '|').concat(n)
                    ];
                  return -1 === r || 2 === r;
                };
                if (n.precheck) {
                  var s = n.precheck(this, a);
                  if (void 0 !== s) return s;
                }
                return !!(
                  this.hasResourceBundle(r, e) ||
                  !this.services.backendConnector.backend ||
                  (this.options.resources &&
                    !this.options.partialBundledLanguages) ||
                  (a(r, e) && (!o || a(i, e)))
                );
              },
            },
            {
              key: 'loadNamespaces',
              value: function (e, t) {
                var n = this,
                  r = ed();
                return this.options.ns
                  ? ('string' == typeof e && (e = [e]),
                    e.forEach(function (e) {
                      0 > n.options.ns.indexOf(e) && n.options.ns.push(e);
                    }),
                    this.loadResources(function (e) {
                      r.resolve(), t && t(e);
                    }),
                    r)
                  : (t && t(), Promise.resolve());
              },
            },
            {
              key: 'loadLanguages',
              value: function (e, t) {
                var n = ed();
                'string' == typeof e && (e = [e]);
                var r = this.options.preload || [],
                  o = e.filter(function (e) {
                    return 0 > r.indexOf(e);
                  });
                return o.length
                  ? ((this.options.preload = r.concat(o)),
                    this.loadResources(function (e) {
                      n.resolve(), t && t(e);
                    }),
                    n)
                  : (t && t(), Promise.resolve());
              },
            },
            {
              key: 'dir',
              value: function (e) {
                return (e ||
                  (e =
                    this.resolvedLanguage ||
                    (this.languages && this.languages.length > 0
                      ? this.languages[0]
                      : this.language)),
                e)
                  ? [
                      'ar',
                      'shu',
                      'sqr',
                      'ssh',
                      'xaa',
                      'yhd',
                      'yud',
                      'aao',
                      'abh',
                      'abv',
                      'acm',
                      'acq',
                      'acw',
                      'acx',
                      'acy',
                      'adf',
                      'ads',
                      'aeb',
                      'aec',
                      'afb',
                      'ajp',
                      'apc',
                      'apd',
                      'arb',
                      'arq',
                      'ars',
                      'ary',
                      'arz',
                      'auz',
                      'avl',
                      'ayh',
                      'ayl',
                      'ayn',
                      'ayp',
                      'bbz',
                      'pga',
                      'he',
                      'iw',
                      'ps',
                      'pbt',
                      'pbu',
                      'pst',
                      'prp',
                      'prd',
                      'ug',
                      'ur',
                      'ydd',
                      'yds',
                      'yih',
                      'ji',
                      'yi',
                      'hbo',
                      'men',
                      'xmn',
                      'fa',
                      'jpr',
                      'peo',
                      'pes',
                      'prs',
                      'dv',
                      'sam',
                      'ckb',
                    ].indexOf(
                      this.services.languageUtils.getLanguagePartFromCode(e),
                    ) > -1 || e.toLowerCase().indexOf('-arab') > 1
                    ? 'rtl'
                    : 'ltr'
                  : 'rtl';
              },
            },
            {
              key: 'cloneInstance',
              value: function () {
                var e = this,
                  t =
                    arguments.length > 0 && void 0 !== arguments[0]
                      ? arguments[0]
                      : {},
                  n =
                    arguments.length > 1 && void 0 !== arguments[1]
                      ? arguments[1]
                      : eX,
                  o = eG(eG(eG({}, this.options), t), { isClone: !0 }),
                  i = new r(o);
                return (
                  ['store', 'services', 'language'].forEach(function (t) {
                    i[t] = e[t];
                  }),
                  (i.services = eG({}, this.services)),
                  (i.services.utils = {
                    hasLoadedNamespace: i.hasLoadedNamespace.bind(i),
                  }),
                  (i.translator = new eD(i.services, i.options)),
                  i.translator.on('*', function (e) {
                    for (
                      var t = arguments.length,
                        n = Array(t > 1 ? t - 1 : 0),
                        r = 1;
                      r < t;
                      r++
                    )
                      n[r - 1] = arguments[r];
                    i.emit.apply(i, [e].concat(n));
                  }),
                  i.init(o, n),
                  (i.translator.options = i.options),
                  (i.translator.backendConnector.services.utils = {
                    hasLoadedNamespace: i.hasLoadedNamespace.bind(i),
                  }),
                  i
                );
              },
            },
            {
              key: 'toJSON',
              value: function () {
                return {
                  options: this.options,
                  store: this.store,
                  language: this.language,
                  languages: this.languages,
                  resolvedLanguage: this.resolvedLanguage,
                };
              },
            },
          ]),
          r
        );
      })(eg);
      (0, a.Z)(eQ, 'createInstance', function () {
        var e =
            arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
          t = arguments.length > 1 ? arguments[1] : void 0;
        return new eQ(e, t);
      });
      var e0 = eQ.createInstance();
      (e0.createInstance = eQ.createInstance),
        e0.createInstance,
        e0.init,
        e0.loadResources,
        e0.reloadResources,
        e0.use,
        e0.changeLanguage,
        e0.getFixedT,
        e0.t,
        e0.exists,
        e0.setDefaultNamespace,
        e0.hasLoadedNamespace,
        e0.loadNamespaces,
        e0.loadLanguages;
      var e1 = function (e) {
          void 0 === e.ns && (e.ns = []);
          var t,
            n,
            r = e0.createInstance(e);
          return (
            r.isInitialized
              ? (t = Promise.resolve(e0.t))
              : (null == e ||
                  null === (n = e.use) ||
                  void 0 === n ||
                  n.forEach(function (e) {
                    return r.use(e);
                  }),
                (t = r.init(e))),
            { i18n: r, initPromise: t }
          );
        },
        e2 = s.createElement;
      function e8(e, t) {
        var n = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var r = Object.getOwnPropertySymbols(e);
          t &&
            (r = r.filter(function (t) {
              return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            n.push.apply(n, r);
        }
        return n;
      }
      function e3(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = null != arguments[t] ? arguments[t] : {};
          t % 2
            ? e8(Object(n), !0).forEach(function (t) {
                (0, a.Z)(e, t, n[t]);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
            : e8(Object(n)).forEach(function (t) {
                Object.defineProperty(
                  e,
                  t,
                  Object.getOwnPropertyDescriptor(n, t),
                );
              });
        }
        return e;
      }
      var e9 = function (e) {
        var t =
          arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
        return J()(function (n) {
          var r,
            o,
            i = n.pageProps._nextI18Next,
            a =
              null !== (r = null == i ? void 0 : i.initialLocale) &&
              void 0 !== r
                ? r
                : null == n
                ? void 0
                : null === (o = n.router) || void 0 === o
                ? void 0
                : o.locale,
            c = null == i ? void 0 : i.ns,
            u = (0, s.useMemo)(
              function () {
                if (!i && !t) return null;
                var e,
                  n,
                  r,
                  o = null != t ? t : null == i ? void 0 : i.userConfig;
                if (!o && null === t)
                  throw Error(
                    'appWithTranslation was called without a next-i18next config',
                  );
                if (
                  (null !== t && (o = t),
                  !(null !== (e = o) && void 0 !== e && e.i18n))
                )
                  throw Error(
                    'appWithTranslation was called without config.i18n',
                  );
                if (
                  !(
                    null !== (n = o) &&
                    void 0 !== n &&
                    null !== (r = n.i18n) &&
                    void 0 !== r &&
                    r.defaultLocale
                  )
                )
                  throw Error(
                    'config.i18n does not include a defaultLocale property',
                  );
                var s = (i || {}).initialI18nStore,
                  u = null != t && t.resources ? t.resources : s;
                return (
                  a || (a = o.i18n.defaultLocale),
                  e1(
                    e3(
                      e3({}, en(e3(e3({}, o), {}, { lng: a }))),
                      {},
                      { lng: a, ns: c, resources: u },
                    ),
                  ).i18n
                );
              },
              [i, a, t, c],
            );
          return null !== u
            ? e2(q, { i18n: u }, e2(e, (0, H.Z)({ key: a }, n)))
            : e2(e, (0, H.Z)({ key: a }, n));
        }, e);
      };
    },
    83454: function (e, t, n) {
      'use strict';
      var r, o;
      e.exports =
        (null == (r = n.g.process) ? void 0 : r.env) &&
        'object' == typeof (null == (o = n.g.process) ? void 0 : o.env)
          ? n.g.process
          : n(77663);
    },
    6840: function (e, t, n) {
      (window.__NEXT_P = window.__NEXT_P || []).push([
        '/_app',
        function () {
          return n(78918);
        },
      ]);
    },
    78918: function (e, t, n) {
      'use strict';
      n.r(t),
        n.d(t, {
          default: function () {
            return u;
          },
        });
      var r = n(85893),
        o = n(67294);
      n(93814);
      var i = n(11163),
        a = n(99984),
        s = n(83454);
      let c = (e) => {
        window.gtag('config', s.env.GA_ID, { page_path: e });
      };
      var u = (0, a.Jc)(function (e) {
        let { Component: t, pageProps: n } = e,
          a = (0, i.useRouter)();
        return (
          (0, o.useEffect)(() => {
            let e = (e) => {
              c(e);
            };
            return (
              a.events.on('routeChangeComplete', e),
              () => {
                a.events.off('routeChangeComplete', e);
              }
            );
          }, [a.events]),
          (0, r.jsx)(t, { ...n })
        );
      });
    },
    93814: function () {},
    77663: function (e) {
      !(function () {
        var t = {
            229: function (e) {
              var t,
                n,
                r,
                o = (e.exports = {});
              function i() {
                throw Error('setTimeout has not been defined');
              }
              function a() {
                throw Error('clearTimeout has not been defined');
              }
              function s(e) {
                if (t === setTimeout) return setTimeout(e, 0);
                if ((t === i || !t) && setTimeout)
                  return (t = setTimeout), setTimeout(e, 0);
                try {
                  return t(e, 0);
                } catch (n) {
                  try {
                    return t.call(null, e, 0);
                  } catch (n) {
                    return t.call(this, e, 0);
                  }
                }
              }
              !(function () {
                try {
                  t = 'function' == typeof setTimeout ? setTimeout : i;
                } catch (e) {
                  t = i;
                }
                try {
                  n = 'function' == typeof clearTimeout ? clearTimeout : a;
                } catch (e) {
                  n = a;
                }
              })();
              var c = [],
                u = !1,
                l = -1;
              function f() {
                u &&
                  r &&
                  ((u = !1),
                  r.length ? (c = r.concat(c)) : (l = -1),
                  c.length && p());
              }
              function p() {
                if (!u) {
                  var e = s(f);
                  u = !0;
                  for (var t = c.length; t; ) {
                    for (r = c, c = []; ++l < t; ) r && r[l].run();
                    (l = -1), (t = c.length);
                  }
                  (r = null),
                    (u = !1),
                    (function (e) {
                      if (n === clearTimeout) return clearTimeout(e);
                      if ((n === a || !n) && clearTimeout)
                        return (n = clearTimeout), clearTimeout(e);
                      try {
                        n(e);
                      } catch (t) {
                        try {
                          return n.call(null, e);
                        } catch (t) {
                          return n.call(this, e);
                        }
                      }
                    })(e);
                }
              }
              function g(e, t) {
                (this.fun = e), (this.array = t);
              }
              function d() {}
              (o.nextTick = function (e) {
                var t = Array(arguments.length - 1);
                if (arguments.length > 1)
                  for (var n = 1; n < arguments.length; n++)
                    t[n - 1] = arguments[n];
                c.push(new g(e, t)), 1 !== c.length || u || s(p);
              }),
                (g.prototype.run = function () {
                  this.fun.apply(null, this.array);
                }),
                (o.title = 'browser'),
                (o.browser = !0),
                (o.env = {}),
                (o.argv = []),
                (o.version = ''),
                (o.versions = {}),
                (o.on = d),
                (o.addListener = d),
                (o.once = d),
                (o.off = d),
                (o.removeListener = d),
                (o.removeAllListeners = d),
                (o.emit = d),
                (o.prependListener = d),
                (o.prependOnceListener = d),
                (o.listeners = function (e) {
                  return [];
                }),
                (o.binding = function (e) {
                  throw Error('process.binding is not supported');
                }),
                (o.cwd = function () {
                  return '/';
                }),
                (o.chdir = function (e) {
                  throw Error('process.chdir is not supported');
                }),
                (o.umask = function () {
                  return 0;
                });
            },
          },
          n = {};
        function r(e) {
          var o = n[e];
          if (void 0 !== o) return o.exports;
          var i = (n[e] = { exports: {} }),
            a = !0;
          try {
            t[e](i, i.exports, r), (a = !1);
          } finally {
            a && delete n[e];
          }
          return i.exports;
        }
        r.ab = '//';
        var o = r(229);
        e.exports = o;
      })();
    },
    11163: function (e, t, n) {
      e.exports = n(96885);
    },
    69921: function (e, t) {
      'use strict';
      /** @license React v16.13.1
       * react-is.production.min.js
       *
       * Copyright (c) Facebook, Inc. and its affiliates.
       *
       * This source code is licensed under the MIT license found in the
       * LICENSE file in the root directory of this source tree.
       */ var n = 'function' == typeof Symbol && Symbol.for,
        r = n ? Symbol.for('react.element') : 60103,
        o = n ? Symbol.for('react.portal') : 60106,
        i = n ? Symbol.for('react.fragment') : 60107,
        a = n ? Symbol.for('react.strict_mode') : 60108,
        s = n ? Symbol.for('react.profiler') : 60114,
        c = n ? Symbol.for('react.provider') : 60109,
        u = n ? Symbol.for('react.context') : 60110,
        l = n ? Symbol.for('react.async_mode') : 60111,
        f = n ? Symbol.for('react.concurrent_mode') : 60111,
        p = n ? Symbol.for('react.forward_ref') : 60112,
        g = n ? Symbol.for('react.suspense') : 60113,
        d = n ? Symbol.for('react.suspense_list') : 60120,
        h = n ? Symbol.for('react.memo') : 60115,
        v = n ? Symbol.for('react.lazy') : 60116,
        y = n ? Symbol.for('react.block') : 60121,
        m = n ? Symbol.for('react.fundamental') : 60117,
        b = n ? Symbol.for('react.responder') : 60118,
        O = n ? Symbol.for('react.scope') : 60119;
      function k(e) {
        if ('object' == typeof e && null !== e) {
          var t = e.$$typeof;
          switch (t) {
            case r:
              switch ((e = e.type)) {
                case l:
                case f:
                case i:
                case s:
                case a:
                case g:
                  return e;
                default:
                  switch ((e = e && e.$$typeof)) {
                    case u:
                    case p:
                    case v:
                    case h:
                    case c:
                      return e;
                    default:
                      return t;
                  }
              }
            case o:
              return t;
          }
        }
      }
      function x(e) {
        return k(e) === f;
      }
      (t.AsyncMode = l),
        (t.ConcurrentMode = f),
        (t.ContextConsumer = u),
        (t.ContextProvider = c),
        (t.Element = r),
        (t.ForwardRef = p),
        (t.Fragment = i),
        (t.Lazy = v),
        (t.Memo = h),
        (t.Portal = o),
        (t.Profiler = s),
        (t.StrictMode = a),
        (t.Suspense = g),
        (t.isAsyncMode = function (e) {
          return x(e) || k(e) === l;
        }),
        (t.isConcurrentMode = x),
        (t.isContextConsumer = function (e) {
          return k(e) === u;
        }),
        (t.isContextProvider = function (e) {
          return k(e) === c;
        }),
        (t.isElement = function (e) {
          return 'object' == typeof e && null !== e && e.$$typeof === r;
        }),
        (t.isForwardRef = function (e) {
          return k(e) === p;
        }),
        (t.isFragment = function (e) {
          return k(e) === i;
        }),
        (t.isLazy = function (e) {
          return k(e) === v;
        }),
        (t.isMemo = function (e) {
          return k(e) === h;
        }),
        (t.isPortal = function (e) {
          return k(e) === o;
        }),
        (t.isProfiler = function (e) {
          return k(e) === s;
        }),
        (t.isStrictMode = function (e) {
          return k(e) === a;
        }),
        (t.isSuspense = function (e) {
          return k(e) === g;
        }),
        (t.isValidElementType = function (e) {
          return (
            'string' == typeof e ||
            'function' == typeof e ||
            e === i ||
            e === f ||
            e === s ||
            e === a ||
            e === g ||
            e === d ||
            ('object' == typeof e &&
              null !== e &&
              (e.$$typeof === v ||
                e.$$typeof === h ||
                e.$$typeof === c ||
                e.$$typeof === u ||
                e.$$typeof === p ||
                e.$$typeof === m ||
                e.$$typeof === b ||
                e.$$typeof === O ||
                e.$$typeof === y))
          );
        }),
        (t.typeOf = k);
    },
    59864: function (e, t, n) {
      'use strict';
      e.exports = n(69921);
    },
    71739: function (e) {
      e.exports = {
        area: !0,
        base: !0,
        br: !0,
        col: !0,
        embed: !0,
        hr: !0,
        img: !0,
        input: !0,
        link: !0,
        meta: !0,
        param: !0,
        source: !0,
        track: !0,
        wbr: !0,
      };
    },
    30907: function (e, t, n) {
      'use strict';
      function r(e, t) {
        (null == t || t > e.length) && (t = e.length);
        for (var n = 0, r = Array(t); n < t; n++) r[n] = e[n];
        return r;
      }
      n.d(t, {
        Z: function () {
          return r;
        },
      });
    },
    4942: function (e, t, n) {
      'use strict';
      function r(e, t, n) {
        return (
          t in e
            ? Object.defineProperty(e, t, {
                value: n,
                enumerable: !0,
                configurable: !0,
                writable: !0,
              })
            : (e[t] = n),
          e
        );
      }
      n.d(t, {
        Z: function () {
          return r;
        },
      });
    },
    87462: function (e, t, n) {
      'use strict';
      function r() {
        return (r = Object.assign
          ? Object.assign.bind()
          : function (e) {
              for (var t = 1; t < arguments.length; t++) {
                var n = arguments[t];
                for (var r in n)
                  Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
              }
              return e;
            }).apply(this, arguments);
      }
      n.d(t, {
        Z: function () {
          return r;
        },
      });
    },
    59199: function (e, t, n) {
      'use strict';
      function r(e) {
        if (
          ('undefined' != typeof Symbol && null != e[Symbol.iterator]) ||
          null != e['@@iterator']
        )
          return Array.from(e);
      }
      n.d(t, {
        Z: function () {
          return r;
        },
      });
    },
    91: function (e, t, n) {
      'use strict';
      function r(e, t) {
        if (null == e) return {};
        var n,
          r,
          o = (function (e, t) {
            if (null == e) return {};
            var n,
              r,
              o = {},
              i = Object.keys(e);
            for (r = 0; r < i.length; r++)
              (n = i[r]), t.indexOf(n) >= 0 || (o[n] = e[n]);
            return o;
          })(e, t);
        if (Object.getOwnPropertySymbols) {
          var i = Object.getOwnPropertySymbols(e);
          for (r = 0; r < i.length; r++)
            (n = i[r]),
              !(t.indexOf(n) >= 0) &&
                Object.prototype.propertyIsEnumerable.call(e, n) &&
                (o[n] = e[n]);
        }
        return o;
      }
      n.d(t, {
        Z: function () {
          return r;
        },
      });
    },
    74902: function (e, t, n) {
      'use strict';
      n.d(t, {
        Z: function () {
          return a;
        },
      });
      var r = n(30907),
        o = n(59199),
        i = n(40181);
      function a(e) {
        return (
          (function (e) {
            if (Array.isArray(e)) return (0, r.Z)(e);
          })(e) ||
          (0, o.Z)(e) ||
          (0, i.Z)(e) ||
          (function () {
            throw TypeError(
              'Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.',
            );
          })()
        );
      }
    },
    40181: function (e, t, n) {
      'use strict';
      n.d(t, {
        Z: function () {
          return o;
        },
      });
      var r = n(30907);
      function o(e, t) {
        if (e) {
          if ('string' == typeof e) return (0, r.Z)(e, t);
          var n = Object.prototype.toString.call(e).slice(8, -1);
          if (
            ('Object' === n && e.constructor && (n = e.constructor.name),
            'Map' === n || 'Set' === n)
          )
            return Array.from(e);
          if (
            'Arguments' === n ||
            /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)
          )
            return (0, r.Z)(e, t);
        }
      }
    },
  },
  function (e) {
    var t = function (t) {
      return e((e.s = t));
    };
    e.O(0, [774, 179], function () {
      return t(6840), t(96885);
    }),
      (_N_E = e.O());
  },
]);
