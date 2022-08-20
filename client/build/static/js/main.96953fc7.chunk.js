(this.webpackJsonpclient = this.webpackJsonpclient || []).push([
  [0],
  {
    26: function (e, t, n) {},
    33: function (e, t, n) {
      'use strict';
      n.r(t);
      var a = n(0),
        r = n.n(a),
        c = n(9),
        o = n.n(c),
        s = (n(26), n(10)),
        i = n(8),
        u = n.n(i),
        l = n(11),
        j = n(35),
        d = n(39),
        h = n(38),
        b = n(37),
        f = n(36);
      function m(e) {
        return p.apply(this, arguments);
      }
      function p() {
        return (p = Object(l.a)(
          u.a.mark(function e(t) {
            var n, a;
            return u.a.wrap(function (e) {
              for (;;)
                switch ((e.prev = e.next)) {
                  case 0:
                    return (
                      (n = t.email),
                      (a = t.password),
                      (e.next = 3),
                      fetch('/api/auth/login', {
                        method: 'POST',
                        body: JSON.stringify({ email: n, password: a }),
                        headers: { 'Content-Type': 'application/json' }
                      })
                        .then(function (e) {
                          if (!e.ok) throw new Error('HTTP status ' + e.status);
                          return e.json();
                        })
                        .catch(function (e) {
                          console.log(e);
                        })
                    );
                  case 3:
                    return e.abrupt('return', e.sent);
                  case 4:
                  case 'end':
                    return e.stop();
                }
            }, e);
          })
        )).apply(this, arguments);
      }
      var O = n(5);
      var g = function (e) {
        var t = e.onLoginSuccessful,
          n = Object(a.useState)(''),
          r = Object(s.a)(n, 2),
          c = r[0],
          o = r[1],
          i = Object(a.useState)(''),
          p = Object(s.a)(i, 2),
          g = p[0],
          x = p[1],
          v = Object(a.useState)(!1),
          w = Object(s.a)(v, 2),
          y = w[0],
          S = w[1],
          L = (function () {
            var e = Object(l.a)(
              u.a.mark(function e(n) {
                var a, r, o;
                return u.a.wrap(function (e) {
                  for (;;)
                    switch ((e.prev = e.next)) {
                      case 0:
                        return (
                          n.preventDefault(), S(!1), (e.next = 4), m({ email: c, password: g })
                        );
                      case 4:
                        (a = e.sent)
                          ? ((r = a.name),
                            (o = a.token),
                            localStorage.setItem('name', r),
                            localStorage.setItem('token', o),
                            t())
                          : S(!0);
                      case 6:
                      case 'end':
                        return e.stop();
                    }
                }, e);
              })
            );
            return function (t) {
              return e.apply(this, arguments);
            };
          })();
        return Object(O.jsx)(j.a, {
          children: Object(O.jsxs)(d.a, {
            className: 'mt-5',
            children: [
              Object(O.jsx)(d.a.Header, { as: 'h1', children: 'Login' }),
              Object(O.jsx)(d.a.Body, {
                children: Object(O.jsxs)(h.a, {
                  className: 'w-100',
                  onSubmit: L,
                  children: [
                    Object(O.jsxs)(h.a.Group, {
                      controlId: 'formBasicEmail',
                      children: [
                        Object(O.jsx)(h.a.Label, { children: 'Email address' }),
                        Object(O.jsx)(h.a.Control, {
                          type: 'email',
                          placeholder: 'Enter email',
                          onChange: function (e) {
                            return o(e.target.value);
                          },
                          value: c
                        }),
                        Object(O.jsx)(h.a.Text, {
                          className: 'text-muted',
                          children: "We'll never share your email with anyone else."
                        })
                      ]
                    }),
                    Object(O.jsxs)(h.a.Group, {
                      controlId: 'formBasicPassword',
                      children: [
                        Object(O.jsx)(h.a.Label, { children: 'Password' }),
                        Object(O.jsx)(h.a.Control, {
                          type: 'password',
                          placeholder: 'Password',
                          onChange: function (e) {
                            return x(e.target.value);
                          },
                          value: g
                        })
                      ]
                    }),
                    y &&
                      Object(O.jsx)(b.a, {
                        variant: 'danger',
                        children:
                          "The email address and password you entered don't match any account. Please try again."
                      }),
                    Object(O.jsx)(f.a, { variant: 'primary', type: 'submit', children: 'Submit' })
                  ]
                })
              })
            ]
          })
        });
      };
      console.log('the-------------------\x3e test');
      var x = function (e) {
        return e.onLogout, Object(O.jsx)(j.a, { fluid: !0, children: 'HELLO' });
      };
      var v = function () {
          var e = Object(a.useState)(!1),
            t = Object(s.a)(e, 2),
            n = t[0],
            r = t[1];
          return (
            Object(a.useEffect)(function () {
              localStorage.getItem('token') ? r(!0) : r(!1);
            }, []),
            (n &&
              Object(O.jsx)(x, {
                onLogout: function () {
                  localStorage.removeItem('name'), localStorage.removeItem('token'), r(!1);
                }
              })) ||
              Object(O.jsx)(g, {
                onLoginSuccessful: function () {
                  r(!0);
                }
              })
          );
        },
        w = function (e) {
          e &&
            e instanceof Function &&
            n
              .e(3)
              .then(n.bind(null, 40))
              .then(function (t) {
                var n = t.getCLS,
                  a = t.getFID,
                  r = t.getFCP,
                  c = t.getLCP,
                  o = t.getTTFB;
                n(e), a(e), r(e), c(e), o(e);
              });
        };
      n(32);
      o.a.render(
        Object(O.jsx)(r.a.StrictMode, { children: Object(O.jsx)(v, {}) }),
        document.getElementById('root')
      ),
        w();
    }
  },
  [[33, 1, 2]]
]);
//# sourceMappingURL=main.96953fc7.chunk.js.map
