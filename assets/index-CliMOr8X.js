var cp = e => {
    throw TypeError(e)
}
;
var xu = (e, t, n) => t.has(e) || cp("Cannot " + n);
var A = (e, t, n) => (xu(e, t, "read from private field"),
n ? n.call(e) : t.get(e))
  , oe = (e, t, n) => t.has(e) ? cp("Cannot add the same private member more than once") : t instanceof WeakSet ? t.add(e) : t.set(e, n)
  , Q = (e, t, n, r) => (xu(e, t, "write to private field"),
r ? r.call(e, n) : t.set(e, n),
n)
  , Ue = (e, t, n) => (xu(e, t, "access private method"),
n);
var Wi = (e, t, n, r) => ({
    set _(o) {
        Q(e, t, o, n)
    },
    get _() {
        return A(e, t, r)
    }
});
function YC(e, t) {
    for (var n = 0; n < t.length; n++) {
        const r = t[n];
        if (typeof r != "string" && !Array.isArray(r)) {
            for (const o in r)
                if (o !== "default" && !(o in e)) {
                    const s = Object.getOwnPropertyDescriptor(r, o);
                    s && Object.defineProperty(e, o, s.get ? s : {
                        enumerable: !0,
                        get: () => r[o]
                    })
                }
        }
    }
    return Object.freeze(Object.defineProperty(e, Symbol.toStringTag, {
        value: "Module"
    }))
}
(function() {
    const t = document.createElement("link").relList;
    if (t && t.supports && t.supports("modulepreload"))
        return;
    for (const o of document.querySelectorAll('link[rel="modulepreload"]'))
        r(o);
    new MutationObserver(o => {
        for (const s of o)
            if (s.type === "childList")
                for (const i of s.addedNodes)
                    i.tagName === "LINK" && i.rel === "modulepreload" && r(i)
    }
    ).observe(document, {
        childList: !0,
        subtree: !0
    });
    function n(o) {
        const s = {};
        return o.integrity && (s.integrity = o.integrity),
        o.referrerPolicy && (s.referrerPolicy = o.referrerPolicy),
        o.crossOrigin === "use-credentials" ? s.credentials = "include" : o.crossOrigin === "anonymous" ? s.credentials = "omit" : s.credentials = "same-origin",
        s
    }
    function r(o) {
        if (o.ep)
            return;
        o.ep = !0;
        const s = n(o);
        fetch(o.href, s)
    }
}
)();
function Vv(e) {
    return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e
}
var Bv = {
    exports: {}
}
  , Ml = {}
  , $v = {
    exports: {}
}
  , J = {};
/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Ai = Symbol.for("react.element")
  , QC = Symbol.for("react.portal")
  , XC = Symbol.for("react.fragment")
  , qC = Symbol.for("react.strict_mode")
  , ZC = Symbol.for("react.profiler")
  , JC = Symbol.for("react.provider")
  , eb = Symbol.for("react.context")
  , tb = Symbol.for("react.forward_ref")
  , nb = Symbol.for("react.suspense")
  , rb = Symbol.for("react.memo")
  , ob = Symbol.for("react.lazy")
  , dp = Symbol.iterator;
function sb(e) {
    return e === null || typeof e != "object" ? null : (e = dp && e[dp] || e["@@iterator"],
    typeof e == "function" ? e : null)
}
var zv = {
    isMounted: function() {
        return !1
    },
    enqueueForceUpdate: function() {},
    enqueueReplaceState: function() {},
    enqueueSetState: function() {}
}
  , Uv = Object.assign
  , Wv = {};
function os(e, t, n) {
    this.props = e,
    this.context = t,
    this.refs = Wv,
    this.updater = n || zv
}
os.prototype.isReactComponent = {};
os.prototype.setState = function(e, t) {
    if (typeof e != "object" && typeof e != "function" && e != null)
        throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");
    this.updater.enqueueSetState(this, e, t, "setState")
}
;
os.prototype.forceUpdate = function(e) {
    this.updater.enqueueForceUpdate(this, e, "forceUpdate")
}
;
function Hv() {}
Hv.prototype = os.prototype;
function lf(e, t, n) {
    this.props = e,
    this.context = t,
    this.refs = Wv,
    this.updater = n || zv
}
var uf = lf.prototype = new Hv;
uf.constructor = lf;
Uv(uf, os.prototype);
uf.isPureReactComponent = !0;
var fp = Array.isArray
  , Kv = Object.prototype.hasOwnProperty
  , cf = {
    current: null
}
  , Gv = {
    key: !0,
    ref: !0,
    __self: !0,
    __source: !0
};
function Yv(e, t, n) {
    var r, o = {}, s = null, i = null;
    if (t != null)
        for (r in t.ref !== void 0 && (i = t.ref),
        t.key !== void 0 && (s = "" + t.key),
        t)
            Kv.call(t, r) && !Gv.hasOwnProperty(r) && (o[r] = t[r]);
    var a = arguments.length - 2;
    if (a === 1)
        o.children = n;
    else if (1 < a) {
        for (var l = Array(a), u = 0; u < a; u++)
            l[u] = arguments[u + 2];
        o.children = l
    }
    if (e && e.defaultProps)
        for (r in a = e.defaultProps,
        a)
            o[r] === void 0 && (o[r] = a[r]);
    return {
        $$typeof: Ai,
        type: e,
        key: s,
        ref: i,
        props: o,
        _owner: cf.current
    }
}
function ib(e, t) {
    return {
        $$typeof: Ai,
        type: e.type,
        key: t,
        ref: e.ref,
        props: e.props,
        _owner: e._owner
    }
}
function df(e) {
    return typeof e == "object" && e !== null && e.$$typeof === Ai
}
function ab(e) {
    var t = {
        "=": "=0",
        ":": "=2"
    };
    return "$" + e.replace(/[=:]/g, function(n) {
        return t[n]
    })
}
var hp = /\/+/g;
function wu(e, t) {
    return typeof e == "object" && e !== null && e.key != null ? ab("" + e.key) : t.toString(36)
}
function Sa(e, t, n, r, o) {
    var s = typeof e;
    (s === "undefined" || s === "boolean") && (e = null);
    var i = !1;
    if (e === null)
        i = !0;
    else
        switch (s) {
        case "string":
        case "number":
            i = !0;
            break;
        case "object":
            switch (e.$$typeof) {
            case Ai:
            case QC:
                i = !0
            }
        }
    if (i)
        return i = e,
        o = o(i),
        e = r === "" ? "." + wu(i, 0) : r,
        fp(o) ? (n = "",
        e != null && (n = e.replace(hp, "$&/") + "/"),
        Sa(o, t, n, "", function(u) {
            return u
        })) : o != null && (df(o) && (o = ib(o, n + (!o.key || i && i.key === o.key ? "" : ("" + o.key).replace(hp, "$&/") + "/") + e)),
        t.push(o)),
        1;
    if (i = 0,
    r = r === "" ? "." : r + ":",
    fp(e))
        for (var a = 0; a < e.length; a++) {
            s = e[a];
            var l = r + wu(s, a);
            i += Sa(s, t, n, l, o)
        }
    else if (l = sb(e),
    typeof l == "function")
        for (e = l.call(e),
        a = 0; !(s = e.next()).done; )
            s = s.value,
            l = r + wu(s, a++),
            i += Sa(s, t, n, l, o);
    else if (s === "object")
        throw t = String(e),
        Error("Objects are not valid as a React child (found: " + (t === "[object Object]" ? "object with keys {" + Object.keys(e).join(", ") + "}" : t) + "). If you meant to render a collection of children, use an array instead.");
    return i
}
function Hi(e, t, n) {
    if (e == null)
        return e;
    var r = []
      , o = 0;
    return Sa(e, r, "", "", function(s) {
        return t.call(n, s, o++)
    }),
    r
}
function lb(e) {
    if (e._status === -1) {
        var t = e._result;
        t = t(),
        t.then(function(n) {
            (e._status === 0 || e._status === -1) && (e._status = 1,
            e._result = n)
        }, function(n) {
            (e._status === 0 || e._status === -1) && (e._status = 2,
            e._result = n)
        }),
        e._status === -1 && (e._status = 0,
        e._result = t)
    }
    if (e._status === 1)
        return e._result.default;
    throw e._result
}
var nt = {
    current: null
}
  , Ca = {
    transition: null
}
  , ub = {
    ReactCurrentDispatcher: nt,
    ReactCurrentBatchConfig: Ca,
    ReactCurrentOwner: cf
};
function Qv() {
    throw Error("act(...) is not supported in production builds of React.")
}
J.Children = {
    map: Hi,
    forEach: function(e, t, n) {
        Hi(e, function() {
            t.apply(this, arguments)
        }, n)
    },
    count: function(e) {
        var t = 0;
        return Hi(e, function() {
            t++
        }),
        t
    },
    toArray: function(e) {
        return Hi(e, function(t) {
            return t
        }) || []
    },
    only: function(e) {
        if (!df(e))
            throw Error("React.Children.only expected to receive a single React element child.");
        return e
    }
};
J.Component = os;
J.Fragment = XC;
J.Profiler = ZC;
J.PureComponent = lf;
J.StrictMode = qC;
J.Suspense = nb;
J.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = ub;
J.act = Qv;
J.cloneElement = function(e, t, n) {
    if (e == null)
        throw Error("React.cloneElement(...): The argument must be a React element, but you passed " + e + ".");
    var r = Uv({}, e.props)
      , o = e.key
      , s = e.ref
      , i = e._owner;
    if (t != null) {
        if (t.ref !== void 0 && (s = t.ref,
        i = cf.current),
        t.key !== void 0 && (o = "" + t.key),
        e.type && e.type.defaultProps)
            var a = e.type.defaultProps;
        for (l in t)
            Kv.call(t, l) && !Gv.hasOwnProperty(l) && (r[l] = t[l] === void 0 && a !== void 0 ? a[l] : t[l])
    }
    var l = arguments.length - 2;
    if (l === 1)
        r.children = n;
    else if (1 < l) {
        a = Array(l);
        for (var u = 0; u < l; u++)
            a[u] = arguments[u + 2];
        r.children = a
    }
    return {
        $$typeof: Ai,
        type: e.type,
        key: o,
        ref: s,
        props: r,
        _owner: i
    }
}
;
J.createContext = function(e) {
    return e = {
        $$typeof: eb,
        _currentValue: e,
        _currentValue2: e,
        _threadCount: 0,
        Provider: null,
        Consumer: null,
        _defaultValue: null,
        _globalName: null
    },
    e.Provider = {
        $$typeof: JC,
        _context: e
    },
    e.Consumer = e
}
;
J.createElement = Yv;
J.createFactory = function(e) {
    var t = Yv.bind(null, e);
    return t.type = e,
    t
}
;
J.createRef = function() {
    return {
        current: null
    }
}
;
J.forwardRef = function(e) {
    return {
        $$typeof: tb,
        render: e
    }
}
;
J.isValidElement = df;
J.lazy = function(e) {
    return {
        $$typeof: ob,
        _payload: {
            _status: -1,
            _result: e
        },
        _init: lb
    }
}
;
J.memo = function(e, t) {
    return {
        $$typeof: rb,
        type: e,
        compare: t === void 0 ? null : t
    }
}
;
J.startTransition = function(e) {
    var t = Ca.transition;
    Ca.transition = {};
    try {
        e()
    } finally {
        Ca.transition = t
    }
}
;
J.unstable_act = Qv;
J.useCallback = function(e, t) {
    return nt.current.useCallback(e, t)
}
;
J.useContext = function(e) {
    return nt.current.useContext(e)
}
;
J.useDebugValue = function() {}
;
J.useDeferredValue = function(e) {
    return nt.current.useDeferredValue(e)
}
;
J.useEffect = function(e, t) {
    return nt.current.useEffect(e, t)
}
;
J.useId = function() {
    return nt.current.useId()
}
;
J.useImperativeHandle = function(e, t, n) {
    return nt.current.useImperativeHandle(e, t, n)
}
;
J.useInsertionEffect = function(e, t) {
    return nt.current.useInsertionEffect(e, t)
}
;
J.useLayoutEffect = function(e, t) {
    return nt.current.useLayoutEffect(e, t)
}
;
J.useMemo = function(e, t) {
    return nt.current.useMemo(e, t)
}
;
J.useReducer = function(e, t, n) {
    return nt.current.useReducer(e, t, n)
}
;
J.useRef = function(e) {
    return nt.current.useRef(e)
}
;
J.useState = function(e) {
    return nt.current.useState(e)
}
;
J.useSyncExternalStore = function(e, t, n) {
    return nt.current.useSyncExternalStore(e, t, n)
}
;
J.useTransition = function() {
    return nt.current.useTransition()
}
;
J.version = "18.3.1";
$v.exports = J;
var m = $v.exports;
const I = Vv(m)
  , ff = YC({
    __proto__: null,
    default: I
}, [m]);
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var cb = m
  , db = Symbol.for("react.element")
  , fb = Symbol.for("react.fragment")
  , hb = Object.prototype.hasOwnProperty
  , pb = cb.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner
  , mb = {
    key: !0,
    ref: !0,
    __self: !0,
    __source: !0
};
function Xv(e, t, n) {
    var r, o = {}, s = null, i = null;
    n !== void 0 && (s = "" + n),
    t.key !== void 0 && (s = "" + t.key),
    t.ref !== void 0 && (i = t.ref);
    for (r in t)
        hb.call(t, r) && !mb.hasOwnProperty(r) && (o[r] = t[r]);
    if (e && e.defaultProps)
        for (r in t = e.defaultProps,
        t)
            o[r] === void 0 && (o[r] = t[r]);
    return {
        $$typeof: db,
        type: e,
        key: s,
        ref: i,
        props: o,
        _owner: pb.current
    }
}
Ml.Fragment = fb;
Ml.jsx = Xv;
Ml.jsxs = Xv;
Bv.exports = Ml;
var y = Bv.exports
  , qv = {
    exports: {}
}
  , gt = {}
  , Zv = {
    exports: {}
}
  , Jv = {};
/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
(function(e) {
    function t(R, k) {
        var L = R.length;
        R.push(k);
        e: for (; 0 < L; ) {
            var K = L - 1 >>> 1
              , U = R[K];
            if (0 < o(U, k))
                R[K] = k,
                R[L] = U,
                L = K;
            else
                break e
        }
    }
    function n(R) {
        return R.length === 0 ? null : R[0]
    }
    function r(R) {
        if (R.length === 0)
            return null;
        var k = R[0]
          , L = R.pop();
        if (L !== k) {
            R[0] = L;
            e: for (var K = 0, U = R.length, X = U >>> 1; K < X; ) {
                var G = 2 * (K + 1) - 1
                  , ce = R[G]
                  , be = G + 1
                  , _ = R[be];
                if (0 > o(ce, L))
                    be < U && 0 > o(_, ce) ? (R[K] = _,
                    R[be] = L,
                    K = be) : (R[K] = ce,
                    R[G] = L,
                    K = G);
                else if (be < U && 0 > o(_, L))
                    R[K] = _,
                    R[be] = L,
                    K = be;
                else
                    break e
            }
        }
        return k
    }
    function o(R, k) {
        var L = R.sortIndex - k.sortIndex;
        return L !== 0 ? L : R.id - k.id
    }
    if (typeof performance == "object" && typeof performance.now == "function") {
        var s = performance;
        e.unstable_now = function() {
            return s.now()
        }
    } else {
        var i = Date
          , a = i.now();
        e.unstable_now = function() {
            return i.now() - a
        }
    }
    var l = []
      , u = []
      , c = 1
      , d = null
      , f = 3
      , h = !1
      , S = !1
      , p = !1
      , w = typeof setTimeout == "function" ? setTimeout : null
      , v = typeof clearTimeout == "function" ? clearTimeout : null
      , g = typeof setImmediate < "u" ? setImmediate : null;
    typeof navigator < "u" && navigator.scheduling !== void 0 && navigator.scheduling.isInputPending !== void 0 && navigator.scheduling.isInputPending.bind(navigator.scheduling);
    function x(R) {
        for (var k = n(u); k !== null; ) {
            if (k.callback === null)
                r(u);
            else if (k.startTime <= R)
                r(u),
                k.sortIndex = k.expirationTime,
                t(l, k);
            else
                break;
            k = n(u)
        }
    }
    function C(R) {
        if (p = !1,
        x(R),
        !S)
            if (n(l) !== null)
                S = !0,
                z(b);
            else {
                var k = n(u);
                k !== null && F(C, k.startTime - R)
            }
    }
    function b(R, k) {
        S = !1,
        p && (p = !1,
        v(P),
        P = -1),
        h = !0;
        var L = f;
        try {
            for (x(k),
            d = n(l); d !== null && (!(d.expirationTime > k) || R && !V()); ) {
                var K = d.callback;
                if (typeof K == "function") {
                    d.callback = null,
                    f = d.priorityLevel;
                    var U = K(d.expirationTime <= k);
                    k = e.unstable_now(),
                    typeof U == "function" ? d.callback = U : d === n(l) && r(l),
                    x(k)
                } else
                    r(l);
                d = n(l)
            }
            if (d !== null)
                var X = !0;
            else {
                var G = n(u);
                G !== null && F(C, G.startTime - k),
                X = !1
            }
            return X
        } finally {
            d = null,
            f = L,
            h = !1
        }
    }
    var E = !1
      , T = null
      , P = -1
      , N = 5
      , M = -1;
    function V() {
        return !(e.unstable_now() - M < N)
    }
    function O() {
        if (T !== null) {
            var R = e.unstable_now();
            M = R;
            var k = !0;
            try {
                k = T(!0, R)
            } finally {
                k ? W() : (E = !1,
                T = null)
            }
        } else
            E = !1
    }
    var W;
    if (typeof g == "function")
        W = function() {
            g(O)
        }
        ;
    else if (typeof MessageChannel < "u") {
        var D = new MessageChannel
          , H = D.port2;
        D.port1.onmessage = O,
        W = function() {
            H.postMessage(null)
        }
    } else
        W = function() {
            w(O, 0)
        }
        ;
    function z(R) {
        T = R,
        E || (E = !0,
        W())
    }
    function F(R, k) {
        P = w(function() {
            R(e.unstable_now())
        }, k)
    }
    e.unstable_IdlePriority = 5,
    e.unstable_ImmediatePriority = 1,
    e.unstable_LowPriority = 4,
    e.unstable_NormalPriority = 3,
    e.unstable_Profiling = null,
    e.unstable_UserBlockingPriority = 2,
    e.unstable_cancelCallback = function(R) {
        R.callback = null
    }
    ,
    e.unstable_continueExecution = function() {
        S || h || (S = !0,
        z(b))
    }
    ,
    e.unstable_forceFrameRate = function(R) {
        0 > R || 125 < R ? console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported") : N = 0 < R ? Math.floor(1e3 / R) : 5
    }
    ,
    e.unstable_getCurrentPriorityLevel = function() {
        return f
    }
    ,
    e.unstable_getFirstCallbackNode = function() {
        return n(l)
    }
    ,
    e.unstable_next = function(R) {
        switch (f) {
        case 1:
        case 2:
        case 3:
            var k = 3;
            break;
        default:
            k = f
        }
        var L = f;
        f = k;
        try {
            return R()
        } finally {
            f = L
        }
    }
    ,
    e.unstable_pauseExecution = function() {}
    ,
    e.unstable_requestPaint = function() {}
    ,
    e.unstable_runWithPriority = function(R, k) {
        switch (R) {
        case 1:
        case 2:
        case 3:
        case 4:
        case 5:
            break;
        default:
            R = 3
        }
        var L = f;
        f = R;
        try {
            return k()
        } finally {
            f = L
        }
    }
    ,
    e.unstable_scheduleCallback = function(R, k, L) {
        var K = e.unstable_now();
        switch (typeof L == "object" && L !== null ? (L = L.delay,
        L = typeof L == "number" && 0 < L ? K + L : K) : L = K,
        R) {
        case 1:
            var U = -1;
            break;
        case 2:
            U = 250;
            break;
        case 5:
            U = 1073741823;
            break;
        case 4:
            U = 1e4;
            break;
        default:
            U = 5e3
        }
        return U = L + U,
        R = {
            id: c++,
            callback: k,
            priorityLevel: R,
            startTime: L,
            expirationTime: U,
            sortIndex: -1
        },
        L > K ? (R.sortIndex = L,
        t(u, R),
        n(l) === null && R === n(u) && (p ? (v(P),
        P = -1) : p = !0,
        F(C, L - K))) : (R.sortIndex = U,
        t(l, R),
        S || h || (S = !0,
        z(b))),
        R
    }
    ,
    e.unstable_shouldYield = V,
    e.unstable_wrapCallback = function(R) {
        var k = f;
        return function() {
            var L = f;
            f = k;
            try {
                return R.apply(this, arguments)
            } finally {
                f = L
            }
        }
    }
}
)(Jv);
Zv.exports = Jv;
var gb = Zv.exports;
/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var vb = m
  , mt = gb;
function j(e) {
    for (var t = "https://reactjs.org/docs/error-decoder.html?invariant=" + e, n = 1; n < arguments.length; n++)
        t += "&args[]=" + encodeURIComponent(arguments[n]);
    return "Minified React error #" + e + "; visit " + t + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings."
}
var ey = new Set
  , ei = {};
function Zr(e, t) {
    Ko(e, t),
    Ko(e + "Capture", t)
}
function Ko(e, t) {
    for (ei[e] = t,
    e = 0; e < t.length; e++)
        ey.add(t[e])
}
var bn = !(typeof window > "u" || typeof window.document > "u" || typeof window.document.createElement > "u")
  , Ec = Object.prototype.hasOwnProperty
  , yb = /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/
  , pp = {}
  , mp = {};
function xb(e) {
    return Ec.call(mp, e) ? !0 : Ec.call(pp, e) ? !1 : yb.test(e) ? mp[e] = !0 : (pp[e] = !0,
    !1)
}
function wb(e, t, n, r) {
    if (n !== null && n.type === 0)
        return !1;
    switch (typeof t) {
    case "function":
    case "symbol":
        return !0;
    case "boolean":
        return r ? !1 : n !== null ? !n.acceptsBooleans : (e = e.toLowerCase().slice(0, 5),
        e !== "data-" && e !== "aria-");
    default:
        return !1
    }
}
function Sb(e, t, n, r) {
    if (t === null || typeof t > "u" || wb(e, t, n, r))
        return !0;
    if (r)
        return !1;
    if (n !== null)
        switch (n.type) {
        case 3:
            return !t;
        case 4:
            return t === !1;
        case 5:
            return isNaN(t);
        case 6:
            return isNaN(t) || 1 > t
        }
    return !1
}
function rt(e, t, n, r, o, s, i) {
    this.acceptsBooleans = t === 2 || t === 3 || t === 4,
    this.attributeName = r,
    this.attributeNamespace = o,
    this.mustUseProperty = n,
    this.propertyName = e,
    this.type = t,
    this.sanitizeURL = s,
    this.removeEmptyString = i
}
var Be = {};
"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e) {
    Be[e] = new rt(e,0,!1,e,null,!1,!1)
});
[["acceptCharset", "accept-charset"], ["className", "class"], ["htmlFor", "for"], ["httpEquiv", "http-equiv"]].forEach(function(e) {
    var t = e[0];
    Be[t] = new rt(t,1,!1,e[1],null,!1,!1)
});
["contentEditable", "draggable", "spellCheck", "value"].forEach(function(e) {
    Be[e] = new rt(e,2,!1,e.toLowerCase(),null,!1,!1)
});
["autoReverse", "externalResourcesRequired", "focusable", "preserveAlpha"].forEach(function(e) {
    Be[e] = new rt(e,2,!1,e,null,!1,!1)
});
"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e) {
    Be[e] = new rt(e,3,!1,e.toLowerCase(),null,!1,!1)
});
["checked", "multiple", "muted", "selected"].forEach(function(e) {
    Be[e] = new rt(e,3,!0,e,null,!1,!1)
});
["capture", "download"].forEach(function(e) {
    Be[e] = new rt(e,4,!1,e,null,!1,!1)
});
["cols", "rows", "size", "span"].forEach(function(e) {
    Be[e] = new rt(e,6,!1,e,null,!1,!1)
});
["rowSpan", "start"].forEach(function(e) {
    Be[e] = new rt(e,5,!1,e.toLowerCase(),null,!1,!1)
});
var hf = /[\-:]([a-z])/g;
function pf(e) {
    return e[1].toUpperCase()
}
"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e) {
    var t = e.replace(hf, pf);
    Be[t] = new rt(t,1,!1,e,null,!1,!1)
});
"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e) {
    var t = e.replace(hf, pf);
    Be[t] = new rt(t,1,!1,e,"http://www.w3.org/1999/xlink",!1,!1)
});
["xml:base", "xml:lang", "xml:space"].forEach(function(e) {
    var t = e.replace(hf, pf);
    Be[t] = new rt(t,1,!1,e,"http://www.w3.org/XML/1998/namespace",!1,!1)
});
["tabIndex", "crossOrigin"].forEach(function(e) {
    Be[e] = new rt(e,1,!1,e.toLowerCase(),null,!1,!1)
});
Be.xlinkHref = new rt("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);
["src", "href", "action", "formAction"].forEach(function(e) {
    Be[e] = new rt(e,1,!1,e.toLowerCase(),null,!0,!0)
});
function mf(e, t, n, r) {
    var o = Be.hasOwnProperty(t) ? Be[t] : null;
    (o !== null ? o.type !== 0 : r || !(2 < t.length) || t[0] !== "o" && t[0] !== "O" || t[1] !== "n" && t[1] !== "N") && (Sb(t, n, o, r) && (n = null),
    r || o === null ? xb(t) && (n === null ? e.removeAttribute(t) : e.setAttribute(t, "" + n)) : o.mustUseProperty ? e[o.propertyName] = n === null ? o.type === 3 ? !1 : "" : n : (t = o.attributeName,
    r = o.attributeNamespace,
    n === null ? e.removeAttribute(t) : (o = o.type,
    n = o === 3 || o === 4 && n === !0 ? "" : "" + n,
    r ? e.setAttributeNS(r, t, n) : e.setAttribute(t, n))))
}
var An = vb.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED
  , Ki = Symbol.for("react.element")
  , co = Symbol.for("react.portal")
  , fo = Symbol.for("react.fragment")
  , gf = Symbol.for("react.strict_mode")
  , Tc = Symbol.for("react.profiler")
  , ty = Symbol.for("react.provider")
  , ny = Symbol.for("react.context")
  , vf = Symbol.for("react.forward_ref")
  , Pc = Symbol.for("react.suspense")
  , Rc = Symbol.for("react.suspense_list")
  , yf = Symbol.for("react.memo")
  , $n = Symbol.for("react.lazy")
  , ry = Symbol.for("react.offscreen")
  , gp = Symbol.iterator;
function ws(e) {
    return e === null || typeof e != "object" ? null : (e = gp && e[gp] || e["@@iterator"],
    typeof e == "function" ? e : null)
}
var Ce = Object.assign, Su;
function Ms(e) {
    if (Su === void 0)
        try {
            throw Error()
        } catch (n) {
            var t = n.stack.trim().match(/\n( *(at )?)/);
            Su = t && t[1] || ""
        }
    return `
` + Su + e
}
var Cu = !1;
function bu(e, t) {
    if (!e || Cu)
        return "";
    Cu = !0;
    var n = Error.prepareStackTrace;
    Error.prepareStackTrace = void 0;
    try {
        if (t)
            if (t = function() {
                throw Error()
            }
            ,
            Object.defineProperty(t.prototype, "props", {
                set: function() {
                    throw Error()
                }
            }),
            typeof Reflect == "object" && Reflect.construct) {
                try {
                    Reflect.construct(t, [])
                } catch (u) {
                    var r = u
                }
                Reflect.construct(e, [], t)
            } else {
                try {
                    t.call()
                } catch (u) {
                    r = u
                }
                e.call(t.prototype)
            }
        else {
            try {
                throw Error()
            } catch (u) {
                r = u
            }
            e()
        }
    } catch (u) {
        if (u && r && typeof u.stack == "string") {
            for (var o = u.stack.split(`
`), s = r.stack.split(`
`), i = o.length - 1, a = s.length - 1; 1 <= i && 0 <= a && o[i] !== s[a]; )
                a--;
            for (; 1 <= i && 0 <= a; i--,
            a--)
                if (o[i] !== s[a]) {
                    if (i !== 1 || a !== 1)
                        do
                            if (i--,
                            a--,
                            0 > a || o[i] !== s[a]) {
                                var l = `
` + o[i].replace(" at new ", " at ");
                                return e.displayName && l.includes("<anonymous>") && (l = l.replace("<anonymous>", e.displayName)),
                                l
                            }
                        while (1 <= i && 0 <= a);
                    break
                }
        }
    } finally {
        Cu = !1,
        Error.prepareStackTrace = n
    }
    return (e = e ? e.displayName || e.name : "") ? Ms(e) : ""
}
function Cb(e) {
    switch (e.tag) {
    case 5:
        return Ms(e.type);
    case 16:
        return Ms("Lazy");
    case 13:
        return Ms("Suspense");
    case 19:
        return Ms("SuspenseList");
    case 0:
    case 2:
    case 15:
        return e = bu(e.type, !1),
        e;
    case 11:
        return e = bu(e.type.render, !1),
        e;
    case 1:
        return e = bu(e.type, !0),
        e;
    default:
        return ""
    }
}
function kc(e) {
    if (e == null)
        return null;
    if (typeof e == "function")
        return e.displayName || e.name || null;
    if (typeof e == "string")
        return e;
    switch (e) {
    case fo:
        return "Fragment";
    case co:
        return "Portal";
    case Tc:
        return "Profiler";
    case gf:
        return "StrictMode";
    case Pc:
        return "Suspense";
    case Rc:
        return "SuspenseList"
    }
    if (typeof e == "object")
        switch (e.$$typeof) {
        case ny:
            return (e.displayName || "Context") + ".Consumer";
        case ty:
            return (e._context.displayName || "Context") + ".Provider";
        case vf:
            var t = e.render;
            return e = e.displayName,
            e || (e = t.displayName || t.name || "",
            e = e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef"),
            e;
        case yf:
            return t = e.displayName || null,
            t !== null ? t : kc(e.type) || "Memo";
        case $n:
            t = e._payload,
            e = e._init;
            try {
                return kc(e(t))
            } catch {}
        }
    return null
}
function bb(e) {
    var t = e.type;
    switch (e.tag) {
    case 24:
        return "Cache";
    case 9:
        return (t.displayName || "Context") + ".Consumer";
    case 10:
        return (t._context.displayName || "Context") + ".Provider";
    case 18:
        return "DehydratedFragment";
    case 11:
        return e = t.render,
        e = e.displayName || e.name || "",
        t.displayName || (e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef");
    case 7:
        return "Fragment";
    case 5:
        return t;
    case 4:
        return "Portal";
    case 3:
        return "Root";
    case 6:
        return "Text";
    case 16:
        return kc(t);
    case 8:
        return t === gf ? "StrictMode" : "Mode";
    case 22:
        return "Offscreen";
    case 12:
        return "Profiler";
    case 21:
        return "Scope";
    case 13:
        return "Suspense";
    case 19:
        return "SuspenseList";
    case 25:
        return "TracingMarker";
    case 1:
    case 0:
    case 17:
    case 2:
    case 14:
    case 15:
        if (typeof t == "function")
            return t.displayName || t.name || null;
        if (typeof t == "string")
            return t
    }
    return null
}
function lr(e) {
    switch (typeof e) {
    case "boolean":
    case "number":
    case "string":
    case "undefined":
        return e;
    case "object":
        return e;
    default:
        return ""
    }
}
function oy(e) {
    var t = e.type;
    return (e = e.nodeName) && e.toLowerCase() === "input" && (t === "checkbox" || t === "radio")
}
function Eb(e) {
    var t = oy(e) ? "checked" : "value"
      , n = Object.getOwnPropertyDescriptor(e.constructor.prototype, t)
      , r = "" + e[t];
    if (!e.hasOwnProperty(t) && typeof n < "u" && typeof n.get == "function" && typeof n.set == "function") {
        var o = n.get
          , s = n.set;
        return Object.defineProperty(e, t, {
            configurable: !0,
            get: function() {
                return o.call(this)
            },
            set: function(i) {
                r = "" + i,
                s.call(this, i)
            }
        }),
        Object.defineProperty(e, t, {
            enumerable: n.enumerable
        }),
        {
            getValue: function() {
                return r
            },
            setValue: function(i) {
                r = "" + i
            },
            stopTracking: function() {
                e._valueTracker = null,
                delete e[t]
            }
        }
    }
}
function Gi(e) {
    e._valueTracker || (e._valueTracker = Eb(e))
}
function sy(e) {
    if (!e)
        return !1;
    var t = e._valueTracker;
    if (!t)
        return !0;
    var n = t.getValue()
      , r = "";
    return e && (r = oy(e) ? e.checked ? "true" : "false" : e.value),
    e = r,
    e !== n ? (t.setValue(e),
    !0) : !1
}
function za(e) {
    if (e = e || (typeof document < "u" ? document : void 0),
    typeof e > "u")
        return null;
    try {
        return e.activeElement || e.body
    } catch {
        return e.body
    }
}
function Nc(e, t) {
    var n = t.checked;
    return Ce({}, t, {
        defaultChecked: void 0,
        defaultValue: void 0,
        value: void 0,
        checked: n ?? e._wrapperState.initialChecked
    })
}
function vp(e, t) {
    var n = t.defaultValue == null ? "" : t.defaultValue
      , r = t.checked != null ? t.checked : t.defaultChecked;
    n = lr(t.value != null ? t.value : n),
    e._wrapperState = {
        initialChecked: r,
        initialValue: n,
        controlled: t.type === "checkbox" || t.type === "radio" ? t.checked != null : t.value != null
    }
}
function iy(e, t) {
    t = t.checked,
    t != null && mf(e, "checked", t, !1)
}
function Ac(e, t) {
    iy(e, t);
    var n = lr(t.value)
      , r = t.type;
    if (n != null)
        r === "number" ? (n === 0 && e.value === "" || e.value != n) && (e.value = "" + n) : e.value !== "" + n && (e.value = "" + n);
    else if (r === "submit" || r === "reset") {
        e.removeAttribute("value");
        return
    }
    t.hasOwnProperty("value") ? Mc(e, t.type, n) : t.hasOwnProperty("defaultValue") && Mc(e, t.type, lr(t.defaultValue)),
    t.checked == null && t.defaultChecked != null && (e.defaultChecked = !!t.defaultChecked)
}
function yp(e, t, n) {
    if (t.hasOwnProperty("value") || t.hasOwnProperty("defaultValue")) {
        var r = t.type;
        if (!(r !== "submit" && r !== "reset" || t.value !== void 0 && t.value !== null))
            return;
        t = "" + e._wrapperState.initialValue,
        n || t === e.value || (e.value = t),
        e.defaultValue = t
    }
    n = e.name,
    n !== "" && (e.name = ""),
    e.defaultChecked = !!e._wrapperState.initialChecked,
    n !== "" && (e.name = n)
}
function Mc(e, t, n) {
    (t !== "number" || za(e.ownerDocument) !== e) && (n == null ? e.defaultValue = "" + e._wrapperState.initialValue : e.defaultValue !== "" + n && (e.defaultValue = "" + n))
}
var js = Array.isArray;
function Ro(e, t, n, r) {
    if (e = e.options,
    t) {
        t = {};
        for (var o = 0; o < n.length; o++)
            t["$" + n[o]] = !0;
        for (n = 0; n < e.length; n++)
            o = t.hasOwnProperty("$" + e[n].value),
            e[n].selected !== o && (e[n].selected = o),
            o && r && (e[n].defaultSelected = !0)
    } else {
        for (n = "" + lr(n),
        t = null,
        o = 0; o < e.length; o++) {
            if (e[o].value === n) {
                e[o].selected = !0,
                r && (e[o].defaultSelected = !0);
                return
            }
            t !== null || e[o].disabled || (t = e[o])
        }
        t !== null && (t.selected = !0)
    }
}
function jc(e, t) {
    if (t.dangerouslySetInnerHTML != null)
        throw Error(j(91));
    return Ce({}, t, {
        value: void 0,
        defaultValue: void 0,
        children: "" + e._wrapperState.initialValue
    })
}
function xp(e, t) {
    var n = t.value;
    if (n == null) {
        if (n = t.children,
        t = t.defaultValue,
        n != null) {
            if (t != null)
                throw Error(j(92));
            if (js(n)) {
                if (1 < n.length)
                    throw Error(j(93));
                n = n[0]
            }
            t = n
        }
        t == null && (t = ""),
        n = t
    }
    e._wrapperState = {
        initialValue: lr(n)
    }
}
function ay(e, t) {
    var n = lr(t.value)
      , r = lr(t.defaultValue);
    n != null && (n = "" + n,
    n !== e.value && (e.value = n),
    t.defaultValue == null && e.defaultValue !== n && (e.defaultValue = n)),
    r != null && (e.defaultValue = "" + r)
}
function wp(e) {
    var t = e.textContent;
    t === e._wrapperState.initialValue && t !== "" && t !== null && (e.value = t)
}
function ly(e) {
    switch (e) {
    case "svg":
        return "http://www.w3.org/2000/svg";
    case "math":
        return "http://www.w3.org/1998/Math/MathML";
    default:
        return "http://www.w3.org/1999/xhtml"
    }
}
function Dc(e, t) {
    return e == null || e === "http://www.w3.org/1999/xhtml" ? ly(t) : e === "http://www.w3.org/2000/svg" && t === "foreignObject" ? "http://www.w3.org/1999/xhtml" : e
}
var Yi, uy = function(e) {
    return typeof MSApp < "u" && MSApp.execUnsafeLocalFunction ? function(t, n, r, o) {
        MSApp.execUnsafeLocalFunction(function() {
            return e(t, n, r, o)
        })
    }
    : e
}(function(e, t) {
    if (e.namespaceURI !== "http://www.w3.org/2000/svg" || "innerHTML"in e)
        e.innerHTML = t;
    else {
        for (Yi = Yi || document.createElement("div"),
        Yi.innerHTML = "<svg>" + t.valueOf().toString() + "</svg>",
        t = Yi.firstChild; e.firstChild; )
            e.removeChild(e.firstChild);
        for (; t.firstChild; )
            e.appendChild(t.firstChild)
    }
});
function ti(e, t) {
    if (t) {
        var n = e.firstChild;
        if (n && n === e.lastChild && n.nodeType === 3) {
            n.nodeValue = t;
            return
        }
    }
    e.textContent = t
}
var Bs = {
    animationIterationCount: !0,
    aspectRatio: !0,
    borderImageOutset: !0,
    borderImageSlice: !0,
    borderImageWidth: !0,
    boxFlex: !0,
    boxFlexGroup: !0,
    boxOrdinalGroup: !0,
    columnCount: !0,
    columns: !0,
    flex: !0,
    flexGrow: !0,
    flexPositive: !0,
    flexShrink: !0,
    flexNegative: !0,
    flexOrder: !0,
    gridArea: !0,
    gridRow: !0,
    gridRowEnd: !0,
    gridRowSpan: !0,
    gridRowStart: !0,
    gridColumn: !0,
    gridColumnEnd: !0,
    gridColumnSpan: !0,
    gridColumnStart: !0,
    fontWeight: !0,
    lineClamp: !0,
    lineHeight: !0,
    opacity: !0,
    order: !0,
    orphans: !0,
    tabSize: !0,
    widows: !0,
    zIndex: !0,
    zoom: !0,
    fillOpacity: !0,
    floodOpacity: !0,
    stopOpacity: !0,
    strokeDasharray: !0,
    strokeDashoffset: !0,
    strokeMiterlimit: !0,
    strokeOpacity: !0,
    strokeWidth: !0
}
  , Tb = ["Webkit", "ms", "Moz", "O"];
Object.keys(Bs).forEach(function(e) {
    Tb.forEach(function(t) {
        t = t + e.charAt(0).toUpperCase() + e.substring(1),
        Bs[t] = Bs[e]
    })
});
function cy(e, t, n) {
    return t == null || typeof t == "boolean" || t === "" ? "" : n || typeof t != "number" || t === 0 || Bs.hasOwnProperty(e) && Bs[e] ? ("" + t).trim() : t + "px"
}
function dy(e, t) {
    e = e.style;
    for (var n in t)
        if (t.hasOwnProperty(n)) {
            var r = n.indexOf("--") === 0
              , o = cy(n, t[n], r);
            n === "float" && (n = "cssFloat"),
            r ? e.setProperty(n, o) : e[n] = o
        }
}
var Pb = Ce({
    menuitem: !0
}, {
    area: !0,
    base: !0,
    br: !0,
    col: !0,
    embed: !0,
    hr: !0,
    img: !0,
    input: !0,
    keygen: !0,
    link: !0,
    meta: !0,
    param: !0,
    source: !0,
    track: !0,
    wbr: !0
});
function Ic(e, t) {
    if (t) {
        if (Pb[e] && (t.children != null || t.dangerouslySetInnerHTML != null))
            throw Error(j(137, e));
        if (t.dangerouslySetInnerHTML != null) {
            if (t.children != null)
                throw Error(j(60));
            if (typeof t.dangerouslySetInnerHTML != "object" || !("__html"in t.dangerouslySetInnerHTML))
                throw Error(j(61))
        }
        if (t.style != null && typeof t.style != "object")
            throw Error(j(62))
    }
}
function Oc(e, t) {
    if (e.indexOf("-") === -1)
        return typeof t.is == "string";
    switch (e) {
    case "annotation-xml":
    case "color-profile":
    case "font-face":
    case "font-face-src":
    case "font-face-uri":
    case "font-face-format":
    case "font-face-name":
    case "missing-glyph":
        return !1;
    default:
        return !0
    }
}
var Lc = null;
function xf(e) {
    return e = e.target || e.srcElement || window,
    e.correspondingUseElement && (e = e.correspondingUseElement),
    e.nodeType === 3 ? e.parentNode : e
}
var _c = null
  , ko = null
  , No = null;
function Sp(e) {
    if (e = Di(e)) {
        if (typeof _c != "function")
            throw Error(j(280));
        var t = e.stateNode;
        t && (t = Ll(t),
        _c(e.stateNode, e.type, t))
    }
}
function fy(e) {
    ko ? No ? No.push(e) : No = [e] : ko = e
}
function hy() {
    if (ko) {
        var e = ko
          , t = No;
        if (No = ko = null,
        Sp(e),
        t)
            for (e = 0; e < t.length; e++)
                Sp(t[e])
    }
}
function py(e, t) {
    return e(t)
}
function my() {}
var Eu = !1;
function gy(e, t, n) {
    if (Eu)
        return e(t, n);
    Eu = !0;
    try {
        return py(e, t, n)
    } finally {
        Eu = !1,
        (ko !== null || No !== null) && (my(),
        hy())
    }
}
function ni(e, t) {
    var n = e.stateNode;
    if (n === null)
        return null;
    var r = Ll(n);
    if (r === null)
        return null;
    n = r[t];
    e: switch (t) {
    case "onClick":
    case "onClickCapture":
    case "onDoubleClick":
    case "onDoubleClickCapture":
    case "onMouseDown":
    case "onMouseDownCapture":
    case "onMouseMove":
    case "onMouseMoveCapture":
    case "onMouseUp":
    case "onMouseUpCapture":
    case "onMouseEnter":
        (r = !r.disabled) || (e = e.type,
        r = !(e === "button" || e === "input" || e === "select" || e === "textarea")),
        e = !r;
        break e;
    default:
        e = !1
    }
    if (e)
        return null;
    if (n && typeof n != "function")
        throw Error(j(231, t, typeof n));
    return n
}
var Fc = !1;
if (bn)
    try {
        var Ss = {};
        Object.defineProperty(Ss, "passive", {
            get: function() {
                Fc = !0
            }
        }),
        window.addEventListener("test", Ss, Ss),
        window.removeEventListener("test", Ss, Ss)
    } catch {
        Fc = !1
    }
function Rb(e, t, n, r, o, s, i, a, l) {
    var u = Array.prototype.slice.call(arguments, 3);
    try {
        t.apply(n, u)
    } catch (c) {
        this.onError(c)
    }
}
var $s = !1
  , Ua = null
  , Wa = !1
  , Vc = null
  , kb = {
    onError: function(e) {
        $s = !0,
        Ua = e
    }
};
function Nb(e, t, n, r, o, s, i, a, l) {
    $s = !1,
    Ua = null,
    Rb.apply(kb, arguments)
}
function Ab(e, t, n, r, o, s, i, a, l) {
    if (Nb.apply(this, arguments),
    $s) {
        if ($s) {
            var u = Ua;
            $s = !1,
            Ua = null
        } else
            throw Error(j(198));
        Wa || (Wa = !0,
        Vc = u)
    }
}
function Jr(e) {
    var t = e
      , n = e;
    if (e.alternate)
        for (; t.return; )
            t = t.return;
    else {
        e = t;
        do
            t = e,
            t.flags & 4098 && (n = t.return),
            e = t.return;
        while (e)
    }
    return t.tag === 3 ? n : null
}
function vy(e) {
    if (e.tag === 13) {
        var t = e.memoizedState;
        if (t === null && (e = e.alternate,
        e !== null && (t = e.memoizedState)),
        t !== null)
            return t.dehydrated
    }
    return null
}
function Cp(e) {
    if (Jr(e) !== e)
        throw Error(j(188))
}
function Mb(e) {
    var t = e.alternate;
    if (!t) {
        if (t = Jr(e),
        t === null)
            throw Error(j(188));
        return t !== e ? null : e
    }
    for (var n = e, r = t; ; ) {
        var o = n.return;
        if (o === null)
            break;
        var s = o.alternate;
        if (s === null) {
            if (r = o.return,
            r !== null) {
                n = r;
                continue
            }
            break
        }
        if (o.child === s.child) {
            for (s = o.child; s; ) {
                if (s === n)
                    return Cp(o),
                    e;
                if (s === r)
                    return Cp(o),
                    t;
                s = s.sibling
            }
            throw Error(j(188))
        }
        if (n.return !== r.return)
            n = o,
            r = s;
        else {
            for (var i = !1, a = o.child; a; ) {
                if (a === n) {
                    i = !0,
                    n = o,
                    r = s;
                    break
                }
                if (a === r) {
                    i = !0,
                    r = o,
                    n = s;
                    break
                }
                a = a.sibling
            }
            if (!i) {
                for (a = s.child; a; ) {
                    if (a === n) {
                        i = !0,
                        n = s,
                        r = o;
                        break
                    }
                    if (a === r) {
                        i = !0,
                        r = s,
                        n = o;
                        break
                    }
                    a = a.sibling
                }
                if (!i)
                    throw Error(j(189))
            }
        }
        if (n.alternate !== r)
            throw Error(j(190))
    }
    if (n.tag !== 3)
        throw Error(j(188));
    return n.stateNode.current === n ? e : t
}
function yy(e) {
    return e = Mb(e),
    e !== null ? xy(e) : null
}
function xy(e) {
    if (e.tag === 5 || e.tag === 6)
        return e;
    for (e = e.child; e !== null; ) {
        var t = xy(e);
        if (t !== null)
            return t;
        e = e.sibling
    }
    return null
}
var wy = mt.unstable_scheduleCallback
  , bp = mt.unstable_cancelCallback
  , jb = mt.unstable_shouldYield
  , Db = mt.unstable_requestPaint
  , ke = mt.unstable_now
  , Ib = mt.unstable_getCurrentPriorityLevel
  , wf = mt.unstable_ImmediatePriority
  , Sy = mt.unstable_UserBlockingPriority
  , Ha = mt.unstable_NormalPriority
  , Ob = mt.unstable_LowPriority
  , Cy = mt.unstable_IdlePriority
  , jl = null
  , an = null;
function Lb(e) {
    if (an && typeof an.onCommitFiberRoot == "function")
        try {
            an.onCommitFiberRoot(jl, e, void 0, (e.current.flags & 128) === 128)
        } catch {}
}
var Wt = Math.clz32 ? Math.clz32 : Vb
  , _b = Math.log
  , Fb = Math.LN2;
function Vb(e) {
    return e >>>= 0,
    e === 0 ? 32 : 31 - (_b(e) / Fb | 0) | 0
}
var Qi = 64
  , Xi = 4194304;
function Ds(e) {
    switch (e & -e) {
    case 1:
        return 1;
    case 2:
        return 2;
    case 4:
        return 4;
    case 8:
        return 8;
    case 16:
        return 16;
    case 32:
        return 32;
    case 64:
    case 128:
    case 256:
    case 512:
    case 1024:
    case 2048:
    case 4096:
    case 8192:
    case 16384:
    case 32768:
    case 65536:
    case 131072:
    case 262144:
    case 524288:
    case 1048576:
    case 2097152:
        return e & 4194240;
    case 4194304:
    case 8388608:
    case 16777216:
    case 33554432:
    case 67108864:
        return e & 130023424;
    case 134217728:
        return 134217728;
    case 268435456:
        return 268435456;
    case 536870912:
        return 536870912;
    case 1073741824:
        return 1073741824;
    default:
        return e
    }
}
function Ka(e, t) {
    var n = e.pendingLanes;
    if (n === 0)
        return 0;
    var r = 0
      , o = e.suspendedLanes
      , s = e.pingedLanes
      , i = n & 268435455;
    if (i !== 0) {
        var a = i & ~o;
        a !== 0 ? r = Ds(a) : (s &= i,
        s !== 0 && (r = Ds(s)))
    } else
        i = n & ~o,
        i !== 0 ? r = Ds(i) : s !== 0 && (r = Ds(s));
    if (r === 0)
        return 0;
    if (t !== 0 && t !== r && !(t & o) && (o = r & -r,
    s = t & -t,
    o >= s || o === 16 && (s & 4194240) !== 0))
        return t;
    if (r & 4 && (r |= n & 16),
    t = e.entangledLanes,
    t !== 0)
        for (e = e.entanglements,
        t &= r; 0 < t; )
            n = 31 - Wt(t),
            o = 1 << n,
            r |= e[n],
            t &= ~o;
    return r
}
function Bb(e, t) {
    switch (e) {
    case 1:
    case 2:
    case 4:
        return t + 250;
    case 8:
    case 16:
    case 32:
    case 64:
    case 128:
    case 256:
    case 512:
    case 1024:
    case 2048:
    case 4096:
    case 8192:
    case 16384:
    case 32768:
    case 65536:
    case 131072:
    case 262144:
    case 524288:
    case 1048576:
    case 2097152:
        return t + 5e3;
    case 4194304:
    case 8388608:
    case 16777216:
    case 33554432:
    case 67108864:
        return -1;
    case 134217728:
    case 268435456:
    case 536870912:
    case 1073741824:
        return -1;
    default:
        return -1
    }
}
function $b(e, t) {
    for (var n = e.suspendedLanes, r = e.pingedLanes, o = e.expirationTimes, s = e.pendingLanes; 0 < s; ) {
        var i = 31 - Wt(s)
          , a = 1 << i
          , l = o[i];
        l === -1 ? (!(a & n) || a & r) && (o[i] = Bb(a, t)) : l <= t && (e.expiredLanes |= a),
        s &= ~a
    }
}
function Bc(e) {
    return e = e.pendingLanes & -1073741825,
    e !== 0 ? e : e & 1073741824 ? 1073741824 : 0
}
function by() {
    var e = Qi;
    return Qi <<= 1,
    !(Qi & 4194240) && (Qi = 64),
    e
}
function Tu(e) {
    for (var t = [], n = 0; 31 > n; n++)
        t.push(e);
    return t
}
function Mi(e, t, n) {
    e.pendingLanes |= t,
    t !== 536870912 && (e.suspendedLanes = 0,
    e.pingedLanes = 0),
    e = e.eventTimes,
    t = 31 - Wt(t),
    e[t] = n
}
function zb(e, t) {
    var n = e.pendingLanes & ~t;
    e.pendingLanes = t,
    e.suspendedLanes = 0,
    e.pingedLanes = 0,
    e.expiredLanes &= t,
    e.mutableReadLanes &= t,
    e.entangledLanes &= t,
    t = e.entanglements;
    var r = e.eventTimes;
    for (e = e.expirationTimes; 0 < n; ) {
        var o = 31 - Wt(n)
          , s = 1 << o;
        t[o] = 0,
        r[o] = -1,
        e[o] = -1,
        n &= ~s
    }
}
function Sf(e, t) {
    var n = e.entangledLanes |= t;
    for (e = e.entanglements; n; ) {
        var r = 31 - Wt(n)
          , o = 1 << r;
        o & t | e[r] & t && (e[r] |= t),
        n &= ~o
    }
}
var ae = 0;
function Ey(e) {
    return e &= -e,
    1 < e ? 4 < e ? e & 268435455 ? 16 : 536870912 : 4 : 1
}
var Ty, Cf, Py, Ry, ky, $c = !1, qi = [], er = null, tr = null, nr = null, ri = new Map, oi = new Map, Un = [], Ub = "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");
function Ep(e, t) {
    switch (e) {
    case "focusin":
    case "focusout":
        er = null;
        break;
    case "dragenter":
    case "dragleave":
        tr = null;
        break;
    case "mouseover":
    case "mouseout":
        nr = null;
        break;
    case "pointerover":
    case "pointerout":
        ri.delete(t.pointerId);
        break;
    case "gotpointercapture":
    case "lostpointercapture":
        oi.delete(t.pointerId)
    }
}
function Cs(e, t, n, r, o, s) {
    return e === null || e.nativeEvent !== s ? (e = {
        blockedOn: t,
        domEventName: n,
        eventSystemFlags: r,
        nativeEvent: s,
        targetContainers: [o]
    },
    t !== null && (t = Di(t),
    t !== null && Cf(t)),
    e) : (e.eventSystemFlags |= r,
    t = e.targetContainers,
    o !== null && t.indexOf(o) === -1 && t.push(o),
    e)
}
function Wb(e, t, n, r, o) {
    switch (t) {
    case "focusin":
        return er = Cs(er, e, t, n, r, o),
        !0;
    case "dragenter":
        return tr = Cs(tr, e, t, n, r, o),
        !0;
    case "mouseover":
        return nr = Cs(nr, e, t, n, r, o),
        !0;
    case "pointerover":
        var s = o.pointerId;
        return ri.set(s, Cs(ri.get(s) || null, e, t, n, r, o)),
        !0;
    case "gotpointercapture":
        return s = o.pointerId,
        oi.set(s, Cs(oi.get(s) || null, e, t, n, r, o)),
        !0
    }
    return !1
}
function Ny(e) {
    var t = kr(e.target);
    if (t !== null) {
        var n = Jr(t);
        if (n !== null) {
            if (t = n.tag,
            t === 13) {
                if (t = vy(n),
                t !== null) {
                    e.blockedOn = t,
                    ky(e.priority, function() {
                        Py(n)
                    });
                    return
                }
            } else if (t === 3 && n.stateNode.current.memoizedState.isDehydrated) {
                e.blockedOn = n.tag === 3 ? n.stateNode.containerInfo : null;
                return
            }
        }
    }
    e.blockedOn = null
}
function ba(e) {
    if (e.blockedOn !== null)
        return !1;
    for (var t = e.targetContainers; 0 < t.length; ) {
        var n = zc(e.domEventName, e.eventSystemFlags, t[0], e.nativeEvent);
        if (n === null) {
            n = e.nativeEvent;
            var r = new n.constructor(n.type,n);
            Lc = r,
            n.target.dispatchEvent(r),
            Lc = null
        } else
            return t = Di(n),
            t !== null && Cf(t),
            e.blockedOn = n,
            !1;
        t.shift()
    }
    return !0
}
function Tp(e, t, n) {
    ba(e) && n.delete(t)
}
function Hb() {
    $c = !1,
    er !== null && ba(er) && (er = null),
    tr !== null && ba(tr) && (tr = null),
    nr !== null && ba(nr) && (nr = null),
    ri.forEach(Tp),
    oi.forEach(Tp)
}
function bs(e, t) {
    e.blockedOn === t && (e.blockedOn = null,
    $c || ($c = !0,
    mt.unstable_scheduleCallback(mt.unstable_NormalPriority, Hb)))
}
function si(e) {
    function t(o) {
        return bs(o, e)
    }
    if (0 < qi.length) {
        bs(qi[0], e);
        for (var n = 1; n < qi.length; n++) {
            var r = qi[n];
            r.blockedOn === e && (r.blockedOn = null)
        }
    }
    for (er !== null && bs(er, e),
    tr !== null && bs(tr, e),
    nr !== null && bs(nr, e),
    ri.forEach(t),
    oi.forEach(t),
    n = 0; n < Un.length; n++)
        r = Un[n],
        r.blockedOn === e && (r.blockedOn = null);
    for (; 0 < Un.length && (n = Un[0],
    n.blockedOn === null); )
        Ny(n),
        n.blockedOn === null && Un.shift()
}
var Ao = An.ReactCurrentBatchConfig
  , Ga = !0;
function Kb(e, t, n, r) {
    var o = ae
      , s = Ao.transition;
    Ao.transition = null;
    try {
        ae = 1,
        bf(e, t, n, r)
    } finally {
        ae = o,
        Ao.transition = s
    }
}
function Gb(e, t, n, r) {
    var o = ae
      , s = Ao.transition;
    Ao.transition = null;
    try {
        ae = 4,
        bf(e, t, n, r)
    } finally {
        ae = o,
        Ao.transition = s
    }
}
function bf(e, t, n, r) {
    if (Ga) {
        var o = zc(e, t, n, r);
        if (o === null)
            Ou(e, t, r, Ya, n),
            Ep(e, r);
        else if (Wb(o, e, t, n, r))
            r.stopPropagation();
        else if (Ep(e, r),
        t & 4 && -1 < Ub.indexOf(e)) {
            for (; o !== null; ) {
                var s = Di(o);
                if (s !== null && Ty(s),
                s = zc(e, t, n, r),
                s === null && Ou(e, t, r, Ya, n),
                s === o)
                    break;
                o = s
            }
            o !== null && r.stopPropagation()
        } else
            Ou(e, t, r, null, n)
    }
}
var Ya = null;
function zc(e, t, n, r) {
    if (Ya = null,
    e = xf(r),
    e = kr(e),
    e !== null)
        if (t = Jr(e),
        t === null)
            e = null;
        else if (n = t.tag,
        n === 13) {
            if (e = vy(t),
            e !== null)
                return e;
            e = null
        } else if (n === 3) {
            if (t.stateNode.current.memoizedState.isDehydrated)
                return t.tag === 3 ? t.stateNode.containerInfo : null;
            e = null
        } else
            t !== e && (e = null);
    return Ya = e,
    null
}
function Ay(e) {
    switch (e) {
    case "cancel":
    case "click":
    case "close":
    case "contextmenu":
    case "copy":
    case "cut":
    case "auxclick":
    case "dblclick":
    case "dragend":
    case "dragstart":
    case "drop":
    case "focusin":
    case "focusout":
    case "input":
    case "invalid":
    case "keydown":
    case "keypress":
    case "keyup":
    case "mousedown":
    case "mouseup":
    case "paste":
    case "pause":
    case "play":
    case "pointercancel":
    case "pointerdown":
    case "pointerup":
    case "ratechange":
    case "reset":
    case "resize":
    case "seeked":
    case "submit":
    case "touchcancel":
    case "touchend":
    case "touchstart":
    case "volumechange":
    case "change":
    case "selectionchange":
    case "textInput":
    case "compositionstart":
    case "compositionend":
    case "compositionupdate":
    case "beforeblur":
    case "afterblur":
    case "beforeinput":
    case "blur":
    case "fullscreenchange":
    case "focus":
    case "hashchange":
    case "popstate":
    case "select":
    case "selectstart":
        return 1;
    case "drag":
    case "dragenter":
    case "dragexit":
    case "dragleave":
    case "dragover":
    case "mousemove":
    case "mouseout":
    case "mouseover":
    case "pointermove":
    case "pointerout":
    case "pointerover":
    case "scroll":
    case "toggle":
    case "touchmove":
    case "wheel":
    case "mouseenter":
    case "mouseleave":
    case "pointerenter":
    case "pointerleave":
        return 4;
    case "message":
        switch (Ib()) {
        case wf:
            return 1;
        case Sy:
            return 4;
        case Ha:
        case Ob:
            return 16;
        case Cy:
            return 536870912;
        default:
            return 16
        }
    default:
        return 16
    }
}
var Xn = null
  , Ef = null
  , Ea = null;
function My() {
    if (Ea)
        return Ea;
    var e, t = Ef, n = t.length, r, o = "value"in Xn ? Xn.value : Xn.textContent, s = o.length;
    for (e = 0; e < n && t[e] === o[e]; e++)
        ;
    var i = n - e;
    for (r = 1; r <= i && t[n - r] === o[s - r]; r++)
        ;
    return Ea = o.slice(e, 1 < r ? 1 - r : void 0)
}
function Ta(e) {
    var t = e.keyCode;
    return "charCode"in e ? (e = e.charCode,
    e === 0 && t === 13 && (e = 13)) : e = t,
    e === 10 && (e = 13),
    32 <= e || e === 13 ? e : 0
}
function Zi() {
    return !0
}
function Pp() {
    return !1
}
function vt(e) {
    function t(n, r, o, s, i) {
        this._reactName = n,
        this._targetInst = o,
        this.type = r,
        this.nativeEvent = s,
        this.target = i,
        this.currentTarget = null;
        for (var a in e)
            e.hasOwnProperty(a) && (n = e[a],
            this[a] = n ? n(s) : s[a]);
        return this.isDefaultPrevented = (s.defaultPrevented != null ? s.defaultPrevented : s.returnValue === !1) ? Zi : Pp,
        this.isPropagationStopped = Pp,
        this
    }
    return Ce(t.prototype, {
        preventDefault: function() {
            this.defaultPrevented = !0;
            var n = this.nativeEvent;
            n && (n.preventDefault ? n.preventDefault() : typeof n.returnValue != "unknown" && (n.returnValue = !1),
            this.isDefaultPrevented = Zi)
        },
        stopPropagation: function() {
            var n = this.nativeEvent;
            n && (n.stopPropagation ? n.stopPropagation() : typeof n.cancelBubble != "unknown" && (n.cancelBubble = !0),
            this.isPropagationStopped = Zi)
        },
        persist: function() {},
        isPersistent: Zi
    }),
    t
}
var ss = {
    eventPhase: 0,
    bubbles: 0,
    cancelable: 0,
    timeStamp: function(e) {
        return e.timeStamp || Date.now()
    },
    defaultPrevented: 0,
    isTrusted: 0
}, Tf = vt(ss), ji = Ce({}, ss, {
    view: 0,
    detail: 0
}), Yb = vt(ji), Pu, Ru, Es, Dl = Ce({}, ji, {
    screenX: 0,
    screenY: 0,
    clientX: 0,
    clientY: 0,
    pageX: 0,
    pageY: 0,
    ctrlKey: 0,
    shiftKey: 0,
    altKey: 0,
    metaKey: 0,
    getModifierState: Pf,
    button: 0,
    buttons: 0,
    relatedTarget: function(e) {
        return e.relatedTarget === void 0 ? e.fromElement === e.srcElement ? e.toElement : e.fromElement : e.relatedTarget
    },
    movementX: function(e) {
        return "movementX"in e ? e.movementX : (e !== Es && (Es && e.type === "mousemove" ? (Pu = e.screenX - Es.screenX,
        Ru = e.screenY - Es.screenY) : Ru = Pu = 0,
        Es = e),
        Pu)
    },
    movementY: function(e) {
        return "movementY"in e ? e.movementY : Ru
    }
}), Rp = vt(Dl), Qb = Ce({}, Dl, {
    dataTransfer: 0
}), Xb = vt(Qb), qb = Ce({}, ji, {
    relatedTarget: 0
}), ku = vt(qb), Zb = Ce({}, ss, {
    animationName: 0,
    elapsedTime: 0,
    pseudoElement: 0
}), Jb = vt(Zb), eE = Ce({}, ss, {
    clipboardData: function(e) {
        return "clipboardData"in e ? e.clipboardData : window.clipboardData
    }
}), tE = vt(eE), nE = Ce({}, ss, {
    data: 0
}), kp = vt(nE), rE = {
    Esc: "Escape",
    Spacebar: " ",
    Left: "ArrowLeft",
    Up: "ArrowUp",
    Right: "ArrowRight",
    Down: "ArrowDown",
    Del: "Delete",
    Win: "OS",
    Menu: "ContextMenu",
    Apps: "ContextMenu",
    Scroll: "ScrollLock",
    MozPrintableKey: "Unidentified"
}, oE = {
    8: "Backspace",
    9: "Tab",
    12: "Clear",
    13: "Enter",
    16: "Shift",
    17: "Control",
    18: "Alt",
    19: "Pause",
    20: "CapsLock",
    27: "Escape",
    32: " ",
    33: "PageUp",
    34: "PageDown",
    35: "End",
    36: "Home",
    37: "ArrowLeft",
    38: "ArrowUp",
    39: "ArrowRight",
    40: "ArrowDown",
    45: "Insert",
    46: "Delete",
    112: "F1",
    113: "F2",
    114: "F3",
    115: "F4",
    116: "F5",
    117: "F6",
    118: "F7",
    119: "F8",
    120: "F9",
    121: "F10",
    122: "F11",
    123: "F12",
    144: "NumLock",
    145: "ScrollLock",
    224: "Meta"
}, sE = {
    Alt: "altKey",
    Control: "ctrlKey",
    Meta: "metaKey",
    Shift: "shiftKey"
};
function iE(e) {
    var t = this.nativeEvent;
    return t.getModifierState ? t.getModifierState(e) : (e = sE[e]) ? !!t[e] : !1
}
function Pf() {
    return iE
}
var aE = Ce({}, ji, {
    key: function(e) {
        if (e.key) {
            var t = rE[e.key] || e.key;
            if (t !== "Unidentified")
                return t
        }
        return e.type === "keypress" ? (e = Ta(e),
        e === 13 ? "Enter" : String.fromCharCode(e)) : e.type === "keydown" || e.type === "keyup" ? oE[e.keyCode] || "Unidentified" : ""
    },
    code: 0,
    location: 0,
    ctrlKey: 0,
    shiftKey: 0,
    altKey: 0,
    metaKey: 0,
    repeat: 0,
    locale: 0,
    getModifierState: Pf,
    charCode: function(e) {
        return e.type === "keypress" ? Ta(e) : 0
    },
    keyCode: function(e) {
        return e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0
    },
    which: function(e) {
        return e.type === "keypress" ? Ta(e) : e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0
    }
})
  , lE = vt(aE)
  , uE = Ce({}, Dl, {
    pointerId: 0,
    width: 0,
    height: 0,
    pressure: 0,
    tangentialPressure: 0,
    tiltX: 0,
    tiltY: 0,
    twist: 0,
    pointerType: 0,
    isPrimary: 0
})
  , Np = vt(uE)
  , cE = Ce({}, ji, {
    touches: 0,
    targetTouches: 0,
    changedTouches: 0,
    altKey: 0,
    metaKey: 0,
    ctrlKey: 0,
    shiftKey: 0,
    getModifierState: Pf
})
  , dE = vt(cE)
  , fE = Ce({}, ss, {
    propertyName: 0,
    elapsedTime: 0,
    pseudoElement: 0
})
  , hE = vt(fE)
  , pE = Ce({}, Dl, {
    deltaX: function(e) {
        return "deltaX"in e ? e.deltaX : "wheelDeltaX"in e ? -e.wheelDeltaX : 0
    },
    deltaY: function(e) {
        return "deltaY"in e ? e.deltaY : "wheelDeltaY"in e ? -e.wheelDeltaY : "wheelDelta"in e ? -e.wheelDelta : 0
    },
    deltaZ: 0,
    deltaMode: 0
})
  , mE = vt(pE)
  , gE = [9, 13, 27, 32]
  , Rf = bn && "CompositionEvent"in window
  , zs = null;
bn && "documentMode"in document && (zs = document.documentMode);
var vE = bn && "TextEvent"in window && !zs
  , jy = bn && (!Rf || zs && 8 < zs && 11 >= zs)
  , Ap = " "
  , Mp = !1;
function Dy(e, t) {
    switch (e) {
    case "keyup":
        return gE.indexOf(t.keyCode) !== -1;
    case "keydown":
        return t.keyCode !== 229;
    case "keypress":
    case "mousedown":
    case "focusout":
        return !0;
    default:
        return !1
    }
}
function Iy(e) {
    return e = e.detail,
    typeof e == "object" && "data"in e ? e.data : null
}
var ho = !1;
function yE(e, t) {
    switch (e) {
    case "compositionend":
        return Iy(t);
    case "keypress":
        return t.which !== 32 ? null : (Mp = !0,
        Ap);
    case "textInput":
        return e = t.data,
        e === Ap && Mp ? null : e;
    default:
        return null
    }
}
function xE(e, t) {
    if (ho)
        return e === "compositionend" || !Rf && Dy(e, t) ? (e = My(),
        Ea = Ef = Xn = null,
        ho = !1,
        e) : null;
    switch (e) {
    case "paste":
        return null;
    case "keypress":
        if (!(t.ctrlKey || t.altKey || t.metaKey) || t.ctrlKey && t.altKey) {
            if (t.char && 1 < t.char.length)
                return t.char;
            if (t.which)
                return String.fromCharCode(t.which)
        }
        return null;
    case "compositionend":
        return jy && t.locale !== "ko" ? null : t.data;
    default:
        return null
    }
}
var wE = {
    color: !0,
    date: !0,
    datetime: !0,
    "datetime-local": !0,
    email: !0,
    month: !0,
    number: !0,
    password: !0,
    range: !0,
    search: !0,
    tel: !0,
    text: !0,
    time: !0,
    url: !0,
    week: !0
};
function jp(e) {
    var t = e && e.nodeName && e.nodeName.toLowerCase();
    return t === "input" ? !!wE[e.type] : t === "textarea"
}
function Oy(e, t, n, r) {
    fy(r),
    t = Qa(t, "onChange"),
    0 < t.length && (n = new Tf("onChange","change",null,n,r),
    e.push({
        event: n,
        listeners: t
    }))
}
var Us = null
  , ii = null;
function SE(e) {
    Ky(e, 0)
}
function Il(e) {
    var t = go(e);
    if (sy(t))
        return e
}
function CE(e, t) {
    if (e === "change")
        return t
}
var Ly = !1;
if (bn) {
    var Nu;
    if (bn) {
        var Au = "oninput"in document;
        if (!Au) {
            var Dp = document.createElement("div");
            Dp.setAttribute("oninput", "return;"),
            Au = typeof Dp.oninput == "function"
        }
        Nu = Au
    } else
        Nu = !1;
    Ly = Nu && (!document.documentMode || 9 < document.documentMode)
}
function Ip() {
    Us && (Us.detachEvent("onpropertychange", _y),
    ii = Us = null)
}
function _y(e) {
    if (e.propertyName === "value" && Il(ii)) {
        var t = [];
        Oy(t, ii, e, xf(e)),
        gy(SE, t)
    }
}
function bE(e, t, n) {
    e === "focusin" ? (Ip(),
    Us = t,
    ii = n,
    Us.attachEvent("onpropertychange", _y)) : e === "focusout" && Ip()
}
function EE(e) {
    if (e === "selectionchange" || e === "keyup" || e === "keydown")
        return Il(ii)
}
function TE(e, t) {
    if (e === "click")
        return Il(t)
}
function PE(e, t) {
    if (e === "input" || e === "change")
        return Il(t)
}
function RE(e, t) {
    return e === t && (e !== 0 || 1 / e === 1 / t) || e !== e && t !== t
}
var Kt = typeof Object.is == "function" ? Object.is : RE;
function ai(e, t) {
    if (Kt(e, t))
        return !0;
    if (typeof e != "object" || e === null || typeof t != "object" || t === null)
        return !1;
    var n = Object.keys(e)
      , r = Object.keys(t);
    if (n.length !== r.length)
        return !1;
    for (r = 0; r < n.length; r++) {
        var o = n[r];
        if (!Ec.call(t, o) || !Kt(e[o], t[o]))
            return !1
    }
    return !0
}
function Op(e) {
    for (; e && e.firstChild; )
        e = e.firstChild;
    return e
}
function Lp(e, t) {
    var n = Op(e);
    e = 0;
    for (var r; n; ) {
        if (n.nodeType === 3) {
            if (r = e + n.textContent.length,
            e <= t && r >= t)
                return {
                    node: n,
                    offset: t - e
                };
            e = r
        }
        e: {
            for (; n; ) {
                if (n.nextSibling) {
                    n = n.nextSibling;
                    break e
                }
                n = n.parentNode
            }
            n = void 0
        }
        n = Op(n)
    }
}
function Fy(e, t) {
    return e && t ? e === t ? !0 : e && e.nodeType === 3 ? !1 : t && t.nodeType === 3 ? Fy(e, t.parentNode) : "contains"in e ? e.contains(t) : e.compareDocumentPosition ? !!(e.compareDocumentPosition(t) & 16) : !1 : !1
}
function Vy() {
    for (var e = window, t = za(); t instanceof e.HTMLIFrameElement; ) {
        try {
            var n = typeof t.contentWindow.location.href == "string"
        } catch {
            n = !1
        }
        if (n)
            e = t.contentWindow;
        else
            break;
        t = za(e.document)
    }
    return t
}
function kf(e) {
    var t = e && e.nodeName && e.nodeName.toLowerCase();
    return t && (t === "input" && (e.type === "text" || e.type === "search" || e.type === "tel" || e.type === "url" || e.type === "password") || t === "textarea" || e.contentEditable === "true")
}
function kE(e) {
    var t = Vy()
      , n = e.focusedElem
      , r = e.selectionRange;
    if (t !== n && n && n.ownerDocument && Fy(n.ownerDocument.documentElement, n)) {
        if (r !== null && kf(n)) {
            if (t = r.start,
            e = r.end,
            e === void 0 && (e = t),
            "selectionStart"in n)
                n.selectionStart = t,
                n.selectionEnd = Math.min(e, n.value.length);
            else if (e = (t = n.ownerDocument || document) && t.defaultView || window,
            e.getSelection) {
                e = e.getSelection();
                var o = n.textContent.length
                  , s = Math.min(r.start, o);
                r = r.end === void 0 ? s : Math.min(r.end, o),
                !e.extend && s > r && (o = r,
                r = s,
                s = o),
                o = Lp(n, s);
                var i = Lp(n, r);
                o && i && (e.rangeCount !== 1 || e.anchorNode !== o.node || e.anchorOffset !== o.offset || e.focusNode !== i.node || e.focusOffset !== i.offset) && (t = t.createRange(),
                t.setStart(o.node, o.offset),
                e.removeAllRanges(),
                s > r ? (e.addRange(t),
                e.extend(i.node, i.offset)) : (t.setEnd(i.node, i.offset),
                e.addRange(t)))
            }
        }
        for (t = [],
        e = n; e = e.parentNode; )
            e.nodeType === 1 && t.push({
                element: e,
                left: e.scrollLeft,
                top: e.scrollTop
            });
        for (typeof n.focus == "function" && n.focus(),
        n = 0; n < t.length; n++)
            e = t[n],
            e.element.scrollLeft = e.left,
            e.element.scrollTop = e.top
    }
}
var NE = bn && "documentMode"in document && 11 >= document.documentMode
  , po = null
  , Uc = null
  , Ws = null
  , Wc = !1;
function _p(e, t, n) {
    var r = n.window === n ? n.document : n.nodeType === 9 ? n : n.ownerDocument;
    Wc || po == null || po !== za(r) || (r = po,
    "selectionStart"in r && kf(r) ? r = {
        start: r.selectionStart,
        end: r.selectionEnd
    } : (r = (r.ownerDocument && r.ownerDocument.defaultView || window).getSelection(),
    r = {
        anchorNode: r.anchorNode,
        anchorOffset: r.anchorOffset,
        focusNode: r.focusNode,
        focusOffset: r.focusOffset
    }),
    Ws && ai(Ws, r) || (Ws = r,
    r = Qa(Uc, "onSelect"),
    0 < r.length && (t = new Tf("onSelect","select",null,t,n),
    e.push({
        event: t,
        listeners: r
    }),
    t.target = po)))
}
function Ji(e, t) {
    var n = {};
    return n[e.toLowerCase()] = t.toLowerCase(),
    n["Webkit" + e] = "webkit" + t,
    n["Moz" + e] = "moz" + t,
    n
}
var mo = {
    animationend: Ji("Animation", "AnimationEnd"),
    animationiteration: Ji("Animation", "AnimationIteration"),
    animationstart: Ji("Animation", "AnimationStart"),
    transitionend: Ji("Transition", "TransitionEnd")
}
  , Mu = {}
  , By = {};
bn && (By = document.createElement("div").style,
"AnimationEvent"in window || (delete mo.animationend.animation,
delete mo.animationiteration.animation,
delete mo.animationstart.animation),
"TransitionEvent"in window || delete mo.transitionend.transition);
function Ol(e) {
    if (Mu[e])
        return Mu[e];
    if (!mo[e])
        return e;
    var t = mo[e], n;
    for (n in t)
        if (t.hasOwnProperty(n) && n in By)
            return Mu[e] = t[n];
    return e
}
var $y = Ol("animationend")
  , zy = Ol("animationiteration")
  , Uy = Ol("animationstart")
  , Wy = Ol("transitionend")
  , Hy = new Map
  , Fp = "abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");
function pr(e, t) {
    Hy.set(e, t),
    Zr(t, [e])
}
for (var ju = 0; ju < Fp.length; ju++) {
    var Du = Fp[ju]
      , AE = Du.toLowerCase()
      , ME = Du[0].toUpperCase() + Du.slice(1);
    pr(AE, "on" + ME)
}
pr($y, "onAnimationEnd");
pr(zy, "onAnimationIteration");
pr(Uy, "onAnimationStart");
pr("dblclick", "onDoubleClick");
pr("focusin", "onFocus");
pr("focusout", "onBlur");
pr(Wy, "onTransitionEnd");
Ko("onMouseEnter", ["mouseout", "mouseover"]);
Ko("onMouseLeave", ["mouseout", "mouseover"]);
Ko("onPointerEnter", ["pointerout", "pointerover"]);
Ko("onPointerLeave", ["pointerout", "pointerover"]);
Zr("onChange", "change click focusin focusout input keydown keyup selectionchange".split(" "));
Zr("onSelect", "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));
Zr("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]);
Zr("onCompositionEnd", "compositionend focusout keydown keypress keyup mousedown".split(" "));
Zr("onCompositionStart", "compositionstart focusout keydown keypress keyup mousedown".split(" "));
Zr("onCompositionUpdate", "compositionupdate focusout keydown keypress keyup mousedown".split(" "));
var Is = "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" ")
  , jE = new Set("cancel close invalid load scroll toggle".split(" ").concat(Is));
function Vp(e, t, n) {
    var r = e.type || "unknown-event";
    e.currentTarget = n,
    Ab(r, t, void 0, e),
    e.currentTarget = null
}
function Ky(e, t) {
    t = (t & 4) !== 0;
    for (var n = 0; n < e.length; n++) {
        var r = e[n]
          , o = r.event;
        r = r.listeners;
        e: {
            var s = void 0;
            if (t)
                for (var i = r.length - 1; 0 <= i; i--) {
                    var a = r[i]
                      , l = a.instance
                      , u = a.currentTarget;
                    if (a = a.listener,
                    l !== s && o.isPropagationStopped())
                        break e;
                    Vp(o, a, u),
                    s = l
                }
            else
                for (i = 0; i < r.length; i++) {
                    if (a = r[i],
                    l = a.instance,
                    u = a.currentTarget,
                    a = a.listener,
                    l !== s && o.isPropagationStopped())
                        break e;
                    Vp(o, a, u),
                    s = l
                }
        }
    }
    if (Wa)
        throw e = Vc,
        Wa = !1,
        Vc = null,
        e
}
function fe(e, t) {
    var n = t[Qc];
    n === void 0 && (n = t[Qc] = new Set);
    var r = e + "__bubble";
    n.has(r) || (Gy(t, e, 2, !1),
    n.add(r))
}
function Iu(e, t, n) {
    var r = 0;
    t && (r |= 4),
    Gy(n, e, r, t)
}
var ea = "_reactListening" + Math.random().toString(36).slice(2);
function li(e) {
    if (!e[ea]) {
        e[ea] = !0,
        ey.forEach(function(n) {
            n !== "selectionchange" && (jE.has(n) || Iu(n, !1, e),
            Iu(n, !0, e))
        });
        var t = e.nodeType === 9 ? e : e.ownerDocument;
        t === null || t[ea] || (t[ea] = !0,
        Iu("selectionchange", !1, t))
    }
}
function Gy(e, t, n, r) {
    switch (Ay(t)) {
    case 1:
        var o = Kb;
        break;
    case 4:
        o = Gb;
        break;
    default:
        o = bf
    }
    n = o.bind(null, t, n, e),
    o = void 0,
    !Fc || t !== "touchstart" && t !== "touchmove" && t !== "wheel" || (o = !0),
    r ? o !== void 0 ? e.addEventListener(t, n, {
        capture: !0,
        passive: o
    }) : e.addEventListener(t, n, !0) : o !== void 0 ? e.addEventListener(t, n, {
        passive: o
    }) : e.addEventListener(t, n, !1)
}
function Ou(e, t, n, r, o) {
    var s = r;
    if (!(t & 1) && !(t & 2) && r !== null)
        e: for (; ; ) {
            if (r === null)
                return;
            var i = r.tag;
            if (i === 3 || i === 4) {
                var a = r.stateNode.containerInfo;
                if (a === o || a.nodeType === 8 && a.parentNode === o)
                    break;
                if (i === 4)
                    for (i = r.return; i !== null; ) {
                        var l = i.tag;
                        if ((l === 3 || l === 4) && (l = i.stateNode.containerInfo,
                        l === o || l.nodeType === 8 && l.parentNode === o))
                            return;
                        i = i.return
                    }
                for (; a !== null; ) {
                    if (i = kr(a),
                    i === null)
                        return;
                    if (l = i.tag,
                    l === 5 || l === 6) {
                        r = s = i;
                        continue e
                    }
                    a = a.parentNode
                }
            }
            r = r.return
        }
    gy(function() {
        var u = s
          , c = xf(n)
          , d = [];
        e: {
            var f = Hy.get(e);
            if (f !== void 0) {
                var h = Tf
                  , S = e;
                switch (e) {
                case "keypress":
                    if (Ta(n) === 0)
                        break e;
                case "keydown":
                case "keyup":
                    h = lE;
                    break;
                case "focusin":
                    S = "focus",
                    h = ku;
                    break;
                case "focusout":
                    S = "blur",
                    h = ku;
                    break;
                case "beforeblur":
                case "afterblur":
                    h = ku;
                    break;
                case "click":
                    if (n.button === 2)
                        break e;
                case "auxclick":
                case "dblclick":
                case "mousedown":
                case "mousemove":
                case "mouseup":
                case "mouseout":
                case "mouseover":
                case "contextmenu":
                    h = Rp;
                    break;
                case "drag":
                case "dragend":
                case "dragenter":
                case "dragexit":
                case "dragleave":
                case "dragover":
                case "dragstart":
                case "drop":
                    h = Xb;
                    break;
                case "touchcancel":
                case "touchend":
                case "touchmove":
                case "touchstart":
                    h = dE;
                    break;
                case $y:
                case zy:
                case Uy:
                    h = Jb;
                    break;
                case Wy:
                    h = hE;
                    break;
                case "scroll":
                    h = Yb;
                    break;
                case "wheel":
                    h = mE;
                    break;
                case "copy":
                case "cut":
                case "paste":
                    h = tE;
                    break;
                case "gotpointercapture":
                case "lostpointercapture":
                case "pointercancel":
                case "pointerdown":
                case "pointermove":
                case "pointerout":
                case "pointerover":
                case "pointerup":
                    h = Np
                }
                var p = (t & 4) !== 0
                  , w = !p && e === "scroll"
                  , v = p ? f !== null ? f + "Capture" : null : f;
                p = [];
                for (var g = u, x; g !== null; ) {
                    x = g;
                    var C = x.stateNode;
                    if (x.tag === 5 && C !== null && (x = C,
                    v !== null && (C = ni(g, v),
                    C != null && p.push(ui(g, C, x)))),
                    w)
                        break;
                    g = g.return
                }
                0 < p.length && (f = new h(f,S,null,n,c),
                d.push({
                    event: f,
                    listeners: p
                }))
            }
        }
        if (!(t & 7)) {
            e: {
                if (f = e === "mouseover" || e === "pointerover",
                h = e === "mouseout" || e === "pointerout",
                f && n !== Lc && (S = n.relatedTarget || n.fromElement) && (kr(S) || S[En]))
                    break e;
                if ((h || f) && (f = c.window === c ? c : (f = c.ownerDocument) ? f.defaultView || f.parentWindow : window,
                h ? (S = n.relatedTarget || n.toElement,
                h = u,
                S = S ? kr(S) : null,
                S !== null && (w = Jr(S),
                S !== w || S.tag !== 5 && S.tag !== 6) && (S = null)) : (h = null,
                S = u),
                h !== S)) {
                    if (p = Rp,
                    C = "onMouseLeave",
                    v = "onMouseEnter",
                    g = "mouse",
                    (e === "pointerout" || e === "pointerover") && (p = Np,
                    C = "onPointerLeave",
                    v = "onPointerEnter",
                    g = "pointer"),
                    w = h == null ? f : go(h),
                    x = S == null ? f : go(S),
                    f = new p(C,g + "leave",h,n,c),
                    f.target = w,
                    f.relatedTarget = x,
                    C = null,
                    kr(c) === u && (p = new p(v,g + "enter",S,n,c),
                    p.target = x,
                    p.relatedTarget = w,
                    C = p),
                    w = C,
                    h && S)
                        t: {
                            for (p = h,
                            v = S,
                            g = 0,
                            x = p; x; x = io(x))
                                g++;
                            for (x = 0,
                            C = v; C; C = io(C))
                                x++;
                            for (; 0 < g - x; )
                                p = io(p),
                                g--;
                            for (; 0 < x - g; )
                                v = io(v),
                                x--;
                            for (; g--; ) {
                                if (p === v || v !== null && p === v.alternate)
                                    break t;
                                p = io(p),
                                v = io(v)
                            }
                            p = null
                        }
                    else
                        p = null;
                    h !== null && Bp(d, f, h, p, !1),
                    S !== null && w !== null && Bp(d, w, S, p, !0)
                }
            }
            e: {
                if (f = u ? go(u) : window,
                h = f.nodeName && f.nodeName.toLowerCase(),
                h === "select" || h === "input" && f.type === "file")
                    var b = CE;
                else if (jp(f))
                    if (Ly)
                        b = PE;
                    else {
                        b = EE;
                        var E = bE
                    }
                else
                    (h = f.nodeName) && h.toLowerCase() === "input" && (f.type === "checkbox" || f.type === "radio") && (b = TE);
                if (b && (b = b(e, u))) {
                    Oy(d, b, n, c);
                    break e
                }
                E && E(e, f, u),
                e === "focusout" && (E = f._wrapperState) && E.controlled && f.type === "number" && Mc(f, "number", f.value)
            }
            switch (E = u ? go(u) : window,
            e) {
            case "focusin":
                (jp(E) || E.contentEditable === "true") && (po = E,
                Uc = u,
                Ws = null);
                break;
            case "focusout":
                Ws = Uc = po = null;
                break;
            case "mousedown":
                Wc = !0;
                break;
            case "contextmenu":
            case "mouseup":
            case "dragend":
                Wc = !1,
                _p(d, n, c);
                break;
            case "selectionchange":
                if (NE)
                    break;
            case "keydown":
            case "keyup":
                _p(d, n, c)
            }
            var T;
            if (Rf)
                e: {
                    switch (e) {
                    case "compositionstart":
                        var P = "onCompositionStart";
                        break e;
                    case "compositionend":
                        P = "onCompositionEnd";
                        break e;
                    case "compositionupdate":
                        P = "onCompositionUpdate";
                        break e
                    }
                    P = void 0
                }
            else
                ho ? Dy(e, n) && (P = "onCompositionEnd") : e === "keydown" && n.keyCode === 229 && (P = "onCompositionStart");
            P && (jy && n.locale !== "ko" && (ho || P !== "onCompositionStart" ? P === "onCompositionEnd" && ho && (T = My()) : (Xn = c,
            Ef = "value"in Xn ? Xn.value : Xn.textContent,
            ho = !0)),
            E = Qa(u, P),
            0 < E.length && (P = new kp(P,e,null,n,c),
            d.push({
                event: P,
                listeners: E
            }),
            T ? P.data = T : (T = Iy(n),
            T !== null && (P.data = T)))),
            (T = vE ? yE(e, n) : xE(e, n)) && (u = Qa(u, "onBeforeInput"),
            0 < u.length && (c = new kp("onBeforeInput","beforeinput",null,n,c),
            d.push({
                event: c,
                listeners: u
            }),
            c.data = T))
        }
        Ky(d, t)
    })
}
function ui(e, t, n) {
    return {
        instance: e,
        listener: t,
        currentTarget: n
    }
}
function Qa(e, t) {
    for (var n = t + "Capture", r = []; e !== null; ) {
        var o = e
          , s = o.stateNode;
        o.tag === 5 && s !== null && (o = s,
        s = ni(e, n),
        s != null && r.unshift(ui(e, s, o)),
        s = ni(e, t),
        s != null && r.push(ui(e, s, o))),
        e = e.return
    }
    return r
}
function io(e) {
    if (e === null)
        return null;
    do
        e = e.return;
    while (e && e.tag !== 5);
    return e || null
}
function Bp(e, t, n, r, o) {
    for (var s = t._reactName, i = []; n !== null && n !== r; ) {
        var a = n
          , l = a.alternate
          , u = a.stateNode;
        if (l !== null && l === r)
            break;
        a.tag === 5 && u !== null && (a = u,
        o ? (l = ni(n, s),
        l != null && i.unshift(ui(n, l, a))) : o || (l = ni(n, s),
        l != null && i.push(ui(n, l, a)))),
        n = n.return
    }
    i.length !== 0 && e.push({
        event: t,
        listeners: i
    })
}
var DE = /\r\n?/g
  , IE = /\u0000|\uFFFD/g;
function $p(e) {
    return (typeof e == "string" ? e : "" + e).replace(DE, `
`).replace(IE, "")
}
function ta(e, t, n) {
    if (t = $p(t),
    $p(e) !== t && n)
        throw Error(j(425))
}
function Xa() {}
var Hc = null
  , Kc = null;
function Gc(e, t) {
    return e === "textarea" || e === "noscript" || typeof t.children == "string" || typeof t.children == "number" || typeof t.dangerouslySetInnerHTML == "object" && t.dangerouslySetInnerHTML !== null && t.dangerouslySetInnerHTML.__html != null
}
var Yc = typeof setTimeout == "function" ? setTimeout : void 0
  , OE = typeof clearTimeout == "function" ? clearTimeout : void 0
  , zp = typeof Promise == "function" ? Promise : void 0
  , LE = typeof queueMicrotask == "function" ? queueMicrotask : typeof zp < "u" ? function(e) {
    return zp.resolve(null).then(e).catch(_E)
}
: Yc;
function _E(e) {
    setTimeout(function() {
        throw e
    })
}
function Lu(e, t) {
    var n = t
      , r = 0;
    do {
        var o = n.nextSibling;
        if (e.removeChild(n),
        o && o.nodeType === 8)
            if (n = o.data,
            n === "/$") {
                if (r === 0) {
                    e.removeChild(o),
                    si(t);
                    return
                }
                r--
            } else
                n !== "$" && n !== "$?" && n !== "$!" || r++;
        n = o
    } while (n);
    si(t)
}
function rr(e) {
    for (; e != null; e = e.nextSibling) {
        var t = e.nodeType;
        if (t === 1 || t === 3)
            break;
        if (t === 8) {
            if (t = e.data,
            t === "$" || t === "$!" || t === "$?")
                break;
            if (t === "/$")
                return null
        }
    }
    return e
}
function Up(e) {
    e = e.previousSibling;
    for (var t = 0; e; ) {
        if (e.nodeType === 8) {
            var n = e.data;
            if (n === "$" || n === "$!" || n === "$?") {
                if (t === 0)
                    return e;
                t--
            } else
                n === "/$" && t++
        }
        e = e.previousSibling
    }
    return null
}
var is = Math.random().toString(36).slice(2)
  , rn = "__reactFiber$" + is
  , ci = "__reactProps$" + is
  , En = "__reactContainer$" + is
  , Qc = "__reactEvents$" + is
  , FE = "__reactListeners$" + is
  , VE = "__reactHandles$" + is;
function kr(e) {
    var t = e[rn];
    if (t)
        return t;
    for (var n = e.parentNode; n; ) {
        if (t = n[En] || n[rn]) {
            if (n = t.alternate,
            t.child !== null || n !== null && n.child !== null)
                for (e = Up(e); e !== null; ) {
                    if (n = e[rn])
                        return n;
                    e = Up(e)
                }
            return t
        }
        e = n,
        n = e.parentNode
    }
    return null
}
function Di(e) {
    return e = e[rn] || e[En],
    !e || e.tag !== 5 && e.tag !== 6 && e.tag !== 13 && e.tag !== 3 ? null : e
}
function go(e) {
    if (e.tag === 5 || e.tag === 6)
        return e.stateNode;
    throw Error(j(33))
}
function Ll(e) {
    return e[ci] || null
}
var Xc = []
  , vo = -1;
function mr(e) {
    return {
        current: e
    }
}
function he(e) {
    0 > vo || (e.current = Xc[vo],
    Xc[vo] = null,
    vo--)
}
function ue(e, t) {
    vo++,
    Xc[vo] = e.current,
    e.current = t
}
var ur = {}
  , Qe = mr(ur)
  , at = mr(!1)
  , Ur = ur;
function Go(e, t) {
    var n = e.type.contextTypes;
    if (!n)
        return ur;
    var r = e.stateNode;
    if (r && r.__reactInternalMemoizedUnmaskedChildContext === t)
        return r.__reactInternalMemoizedMaskedChildContext;
    var o = {}, s;
    for (s in n)
        o[s] = t[s];
    return r && (e = e.stateNode,
    e.__reactInternalMemoizedUnmaskedChildContext = t,
    e.__reactInternalMemoizedMaskedChildContext = o),
    o
}
function lt(e) {
    return e = e.childContextTypes,
    e != null
}
function qa() {
    he(at),
    he(Qe)
}
function Wp(e, t, n) {
    if (Qe.current !== ur)
        throw Error(j(168));
    ue(Qe, t),
    ue(at, n)
}
function Yy(e, t, n) {
    var r = e.stateNode;
    if (t = t.childContextTypes,
    typeof r.getChildContext != "function")
        return n;
    r = r.getChildContext();
    for (var o in r)
        if (!(o in t))
            throw Error(j(108, bb(e) || "Unknown", o));
    return Ce({}, n, r)
}
function Za(e) {
    return e = (e = e.stateNode) && e.__reactInternalMemoizedMergedChildContext || ur,
    Ur = Qe.current,
    ue(Qe, e),
    ue(at, at.current),
    !0
}
function Hp(e, t, n) {
    var r = e.stateNode;
    if (!r)
        throw Error(j(169));
    n ? (e = Yy(e, t, Ur),
    r.__reactInternalMemoizedMergedChildContext = e,
    he(at),
    he(Qe),
    ue(Qe, e)) : he(at),
    ue(at, n)
}
var yn = null
  , _l = !1
  , _u = !1;
function Qy(e) {
    yn === null ? yn = [e] : yn.push(e)
}
function BE(e) {
    _l = !0,
    Qy(e)
}
function gr() {
    if (!_u && yn !== null) {
        _u = !0;
        var e = 0
          , t = ae;
        try {
            var n = yn;
            for (ae = 1; e < n.length; e++) {
                var r = n[e];
                do
                    r = r(!0);
                while (r !== null)
            }
            yn = null,
            _l = !1
        } catch (o) {
            throw yn !== null && (yn = yn.slice(e + 1)),
            wy(wf, gr),
            o
        } finally {
            ae = t,
            _u = !1
        }
    }
    return null
}
var yo = []
  , xo = 0
  , Ja = null
  , el = 0
  , Ct = []
  , bt = 0
  , Wr = null
  , wn = 1
  , Sn = "";
function Tr(e, t) {
    yo[xo++] = el,
    yo[xo++] = Ja,
    Ja = e,
    el = t
}
function Xy(e, t, n) {
    Ct[bt++] = wn,
    Ct[bt++] = Sn,
    Ct[bt++] = Wr,
    Wr = e;
    var r = wn;
    e = Sn;
    var o = 32 - Wt(r) - 1;
    r &= ~(1 << o),
    n += 1;
    var s = 32 - Wt(t) + o;
    if (30 < s) {
        var i = o - o % 5;
        s = (r & (1 << i) - 1).toString(32),
        r >>= i,
        o -= i,
        wn = 1 << 32 - Wt(t) + o | n << o | r,
        Sn = s + e
    } else
        wn = 1 << s | n << o | r,
        Sn = e
}
function Nf(e) {
    e.return !== null && (Tr(e, 1),
    Xy(e, 1, 0))
}
function Af(e) {
    for (; e === Ja; )
        Ja = yo[--xo],
        yo[xo] = null,
        el = yo[--xo],
        yo[xo] = null;
    for (; e === Wr; )
        Wr = Ct[--bt],
        Ct[bt] = null,
        Sn = Ct[--bt],
        Ct[bt] = null,
        wn = Ct[--bt],
        Ct[bt] = null
}
var ht = null
  , ft = null
  , ve = !1
  , Ut = null;
function qy(e, t) {
    var n = Et(5, null, null, 0);
    n.elementType = "DELETED",
    n.stateNode = t,
    n.return = e,
    t = e.deletions,
    t === null ? (e.deletions = [n],
    e.flags |= 16) : t.push(n)
}
function Kp(e, t) {
    switch (e.tag) {
    case 5:
        var n = e.type;
        return t = t.nodeType !== 1 || n.toLowerCase() !== t.nodeName.toLowerCase() ? null : t,
        t !== null ? (e.stateNode = t,
        ht = e,
        ft = rr(t.firstChild),
        !0) : !1;
    case 6:
        return t = e.pendingProps === "" || t.nodeType !== 3 ? null : t,
        t !== null ? (e.stateNode = t,
        ht = e,
        ft = null,
        !0) : !1;
    case 13:
        return t = t.nodeType !== 8 ? null : t,
        t !== null ? (n = Wr !== null ? {
            id: wn,
            overflow: Sn
        } : null,
        e.memoizedState = {
            dehydrated: t,
            treeContext: n,
            retryLane: 1073741824
        },
        n = Et(18, null, null, 0),
        n.stateNode = t,
        n.return = e,
        e.child = n,
        ht = e,
        ft = null,
        !0) : !1;
    default:
        return !1
    }
}
function qc(e) {
    return (e.mode & 1) !== 0 && (e.flags & 128) === 0
}
function Zc(e) {
    if (ve) {
        var t = ft;
        if (t) {
            var n = t;
            if (!Kp(e, t)) {
                if (qc(e))
                    throw Error(j(418));
                t = rr(n.nextSibling);
                var r = ht;
                t && Kp(e, t) ? qy(r, n) : (e.flags = e.flags & -4097 | 2,
                ve = !1,
                ht = e)
            }
        } else {
            if (qc(e))
                throw Error(j(418));
            e.flags = e.flags & -4097 | 2,
            ve = !1,
            ht = e
        }
    }
}
function Gp(e) {
    for (e = e.return; e !== null && e.tag !== 5 && e.tag !== 3 && e.tag !== 13; )
        e = e.return;
    ht = e
}
function na(e) {
    if (e !== ht)
        return !1;
    if (!ve)
        return Gp(e),
        ve = !0,
        !1;
    var t;
    if ((t = e.tag !== 3) && !(t = e.tag !== 5) && (t = e.type,
    t = t !== "head" && t !== "body" && !Gc(e.type, e.memoizedProps)),
    t && (t = ft)) {
        if (qc(e))
            throw Zy(),
            Error(j(418));
        for (; t; )
            qy(e, t),
            t = rr(t.nextSibling)
    }
    if (Gp(e),
    e.tag === 13) {
        if (e = e.memoizedState,
        e = e !== null ? e.dehydrated : null,
        !e)
            throw Error(j(317));
        e: {
            for (e = e.nextSibling,
            t = 0; e; ) {
                if (e.nodeType === 8) {
                    var n = e.data;
                    if (n === "/$") {
                        if (t === 0) {
                            ft = rr(e.nextSibling);
                            break e
                        }
                        t--
                    } else
                        n !== "$" && n !== "$!" && n !== "$?" || t++
                }
                e = e.nextSibling
            }
            ft = null
        }
    } else
        ft = ht ? rr(e.stateNode.nextSibling) : null;
    return !0
}
function Zy() {
    for (var e = ft; e; )
        e = rr(e.nextSibling)
}
function Yo() {
    ft = ht = null,
    ve = !1
}
function Mf(e) {
    Ut === null ? Ut = [e] : Ut.push(e)
}
var $E = An.ReactCurrentBatchConfig;
function Ts(e, t, n) {
    if (e = n.ref,
    e !== null && typeof e != "function" && typeof e != "object") {
        if (n._owner) {
            if (n = n._owner,
            n) {
                if (n.tag !== 1)
                    throw Error(j(309));
                var r = n.stateNode
            }
            if (!r)
                throw Error(j(147, e));
            var o = r
              , s = "" + e;
            return t !== null && t.ref !== null && typeof t.ref == "function" && t.ref._stringRef === s ? t.ref : (t = function(i) {
                var a = o.refs;
                i === null ? delete a[s] : a[s] = i
            }
            ,
            t._stringRef = s,
            t)
        }
        if (typeof e != "string")
            throw Error(j(284));
        if (!n._owner)
            throw Error(j(290, e))
    }
    return e
}
function ra(e, t) {
    throw e = Object.prototype.toString.call(t),
    Error(j(31, e === "[object Object]" ? "object with keys {" + Object.keys(t).join(", ") + "}" : e))
}
function Yp(e) {
    var t = e._init;
    return t(e._payload)
}
function Jy(e) {
    function t(v, g) {
        if (e) {
            var x = v.deletions;
            x === null ? (v.deletions = [g],
            v.flags |= 16) : x.push(g)
        }
    }
    function n(v, g) {
        if (!e)
            return null;
        for (; g !== null; )
            t(v, g),
            g = g.sibling;
        return null
    }
    function r(v, g) {
        for (v = new Map; g !== null; )
            g.key !== null ? v.set(g.key, g) : v.set(g.index, g),
            g = g.sibling;
        return v
    }
    function o(v, g) {
        return v = ar(v, g),
        v.index = 0,
        v.sibling = null,
        v
    }
    function s(v, g, x) {
        return v.index = x,
        e ? (x = v.alternate,
        x !== null ? (x = x.index,
        x < g ? (v.flags |= 2,
        g) : x) : (v.flags |= 2,
        g)) : (v.flags |= 1048576,
        g)
    }
    function i(v) {
        return e && v.alternate === null && (v.flags |= 2),
        v
    }
    function a(v, g, x, C) {
        return g === null || g.tag !== 6 ? (g = Wu(x, v.mode, C),
        g.return = v,
        g) : (g = o(g, x),
        g.return = v,
        g)
    }
    function l(v, g, x, C) {
        var b = x.type;
        return b === fo ? c(v, g, x.props.children, C, x.key) : g !== null && (g.elementType === b || typeof b == "object" && b !== null && b.$$typeof === $n && Yp(b) === g.type) ? (C = o(g, x.props),
        C.ref = Ts(v, g, x),
        C.return = v,
        C) : (C = ja(x.type, x.key, x.props, null, v.mode, C),
        C.ref = Ts(v, g, x),
        C.return = v,
        C)
    }
    function u(v, g, x, C) {
        return g === null || g.tag !== 4 || g.stateNode.containerInfo !== x.containerInfo || g.stateNode.implementation !== x.implementation ? (g = Hu(x, v.mode, C),
        g.return = v,
        g) : (g = o(g, x.children || []),
        g.return = v,
        g)
    }
    function c(v, g, x, C, b) {
        return g === null || g.tag !== 7 ? (g = Br(x, v.mode, C, b),
        g.return = v,
        g) : (g = o(g, x),
        g.return = v,
        g)
    }
    function d(v, g, x) {
        if (typeof g == "string" && g !== "" || typeof g == "number")
            return g = Wu("" + g, v.mode, x),
            g.return = v,
            g;
        if (typeof g == "object" && g !== null) {
            switch (g.$$typeof) {
            case Ki:
                return x = ja(g.type, g.key, g.props, null, v.mode, x),
                x.ref = Ts(v, null, g),
                x.return = v,
                x;
            case co:
                return g = Hu(g, v.mode, x),
                g.return = v,
                g;
            case $n:
                var C = g._init;
                return d(v, C(g._payload), x)
            }
            if (js(g) || ws(g))
                return g = Br(g, v.mode, x, null),
                g.return = v,
                g;
            ra(v, g)
        }
        return null
    }
    function f(v, g, x, C) {
        var b = g !== null ? g.key : null;
        if (typeof x == "string" && x !== "" || typeof x == "number")
            return b !== null ? null : a(v, g, "" + x, C);
        if (typeof x == "object" && x !== null) {
            switch (x.$$typeof) {
            case Ki:
                return x.key === b ? l(v, g, x, C) : null;
            case co:
                return x.key === b ? u(v, g, x, C) : null;
            case $n:
                return b = x._init,
                f(v, g, b(x._payload), C)
            }
            if (js(x) || ws(x))
                return b !== null ? null : c(v, g, x, C, null);
            ra(v, x)
        }
        return null
    }
    function h(v, g, x, C, b) {
        if (typeof C == "string" && C !== "" || typeof C == "number")
            return v = v.get(x) || null,
            a(g, v, "" + C, b);
        if (typeof C == "object" && C !== null) {
            switch (C.$$typeof) {
            case Ki:
                return v = v.get(C.key === null ? x : C.key) || null,
                l(g, v, C, b);
            case co:
                return v = v.get(C.key === null ? x : C.key) || null,
                u(g, v, C, b);
            case $n:
                var E = C._init;
                return h(v, g, x, E(C._payload), b)
            }
            if (js(C) || ws(C))
                return v = v.get(x) || null,
                c(g, v, C, b, null);
            ra(g, C)
        }
        return null
    }
    function S(v, g, x, C) {
        for (var b = null, E = null, T = g, P = g = 0, N = null; T !== null && P < x.length; P++) {
            T.index > P ? (N = T,
            T = null) : N = T.sibling;
            var M = f(v, T, x[P], C);
            if (M === null) {
                T === null && (T = N);
                break
            }
            e && T && M.alternate === null && t(v, T),
            g = s(M, g, P),
            E === null ? b = M : E.sibling = M,
            E = M,
            T = N
        }
        if (P === x.length)
            return n(v, T),
            ve && Tr(v, P),
            b;
        if (T === null) {
            for (; P < x.length; P++)
                T = d(v, x[P], C),
                T !== null && (g = s(T, g, P),
                E === null ? b = T : E.sibling = T,
                E = T);
            return ve && Tr(v, P),
            b
        }
        for (T = r(v, T); P < x.length; P++)
            N = h(T, v, P, x[P], C),
            N !== null && (e && N.alternate !== null && T.delete(N.key === null ? P : N.key),
            g = s(N, g, P),
            E === null ? b = N : E.sibling = N,
            E = N);
        return e && T.forEach(function(V) {
            return t(v, V)
        }),
        ve && Tr(v, P),
        b
    }
    function p(v, g, x, C) {
        var b = ws(x);
        if (typeof b != "function")
            throw Error(j(150));
        if (x = b.call(x),
        x == null)
            throw Error(j(151));
        for (var E = b = null, T = g, P = g = 0, N = null, M = x.next(); T !== null && !M.done; P++,
        M = x.next()) {
            T.index > P ? (N = T,
            T = null) : N = T.sibling;
            var V = f(v, T, M.value, C);
            if (V === null) {
                T === null && (T = N);
                break
            }
            e && T && V.alternate === null && t(v, T),
            g = s(V, g, P),
            E === null ? b = V : E.sibling = V,
            E = V,
            T = N
        }
        if (M.done)
            return n(v, T),
            ve && Tr(v, P),
            b;
        if (T === null) {
            for (; !M.done; P++,
            M = x.next())
                M = d(v, M.value, C),
                M !== null && (g = s(M, g, P),
                E === null ? b = M : E.sibling = M,
                E = M);
            return ve && Tr(v, P),
            b
        }
        for (T = r(v, T); !M.done; P++,
        M = x.next())
            M = h(T, v, P, M.value, C),
            M !== null && (e && M.alternate !== null && T.delete(M.key === null ? P : M.key),
            g = s(M, g, P),
            E === null ? b = M : E.sibling = M,
            E = M);
        return e && T.forEach(function(O) {
            return t(v, O)
        }),
        ve && Tr(v, P),
        b
    }
    function w(v, g, x, C) {
        if (typeof x == "object" && x !== null && x.type === fo && x.key === null && (x = x.props.children),
        typeof x == "object" && x !== null) {
            switch (x.$$typeof) {
            case Ki:
                e: {
                    for (var b = x.key, E = g; E !== null; ) {
                        if (E.key === b) {
                            if (b = x.type,
                            b === fo) {
                                if (E.tag === 7) {
                                    n(v, E.sibling),
                                    g = o(E, x.props.children),
                                    g.return = v,
                                    v = g;
                                    break e
                                }
                            } else if (E.elementType === b || typeof b == "object" && b !== null && b.$$typeof === $n && Yp(b) === E.type) {
                                n(v, E.sibling),
                                g = o(E, x.props),
                                g.ref = Ts(v, E, x),
                                g.return = v,
                                v = g;
                                break e
                            }
                            n(v, E);
                            break
                        } else
                            t(v, E);
                        E = E.sibling
                    }
                    x.type === fo ? (g = Br(x.props.children, v.mode, C, x.key),
                    g.return = v,
                    v = g) : (C = ja(x.type, x.key, x.props, null, v.mode, C),
                    C.ref = Ts(v, g, x),
                    C.return = v,
                    v = C)
                }
                return i(v);
            case co:
                e: {
                    for (E = x.key; g !== null; ) {
                        if (g.key === E)
                            if (g.tag === 4 && g.stateNode.containerInfo === x.containerInfo && g.stateNode.implementation === x.implementation) {
                                n(v, g.sibling),
                                g = o(g, x.children || []),
                                g.return = v,
                                v = g;
                                break e
                            } else {
                                n(v, g);
                                break
                            }
                        else
                            t(v, g);
                        g = g.sibling
                    }
                    g = Hu(x, v.mode, C),
                    g.return = v,
                    v = g
                }
                return i(v);
            case $n:
                return E = x._init,
                w(v, g, E(x._payload), C)
            }
            if (js(x))
                return S(v, g, x, C);
            if (ws(x))
                return p(v, g, x, C);
            ra(v, x)
        }
        return typeof x == "string" && x !== "" || typeof x == "number" ? (x = "" + x,
        g !== null && g.tag === 6 ? (n(v, g.sibling),
        g = o(g, x),
        g.return = v,
        v = g) : (n(v, g),
        g = Wu(x, v.mode, C),
        g.return = v,
        v = g),
        i(v)) : n(v, g)
    }
    return w
}
var Qo = Jy(!0)
  , e0 = Jy(!1)
  , tl = mr(null)
  , nl = null
  , wo = null
  , jf = null;
function Df() {
    jf = wo = nl = null
}
function If(e) {
    var t = tl.current;
    he(tl),
    e._currentValue = t
}
function Jc(e, t, n) {
    for (; e !== null; ) {
        var r = e.alternate;
        if ((e.childLanes & t) !== t ? (e.childLanes |= t,
        r !== null && (r.childLanes |= t)) : r !== null && (r.childLanes & t) !== t && (r.childLanes |= t),
        e === n)
            break;
        e = e.return
    }
}
function Mo(e, t) {
    nl = e,
    jf = wo = null,
    e = e.dependencies,
    e !== null && e.firstContext !== null && (e.lanes & t && (it = !0),
    e.firstContext = null)
}
function kt(e) {
    var t = e._currentValue;
    if (jf !== e)
        if (e = {
            context: e,
            memoizedValue: t,
            next: null
        },
        wo === null) {
            if (nl === null)
                throw Error(j(308));
            wo = e,
            nl.dependencies = {
                lanes: 0,
                firstContext: e
            }
        } else
            wo = wo.next = e;
    return t
}
var Nr = null;
function Of(e) {
    Nr === null ? Nr = [e] : Nr.push(e)
}
function t0(e, t, n, r) {
    var o = t.interleaved;
    return o === null ? (n.next = n,
    Of(t)) : (n.next = o.next,
    o.next = n),
    t.interleaved = n,
    Tn(e, r)
}
function Tn(e, t) {
    e.lanes |= t;
    var n = e.alternate;
    for (n !== null && (n.lanes |= t),
    n = e,
    e = e.return; e !== null; )
        e.childLanes |= t,
        n = e.alternate,
        n !== null && (n.childLanes |= t),
        n = e,
        e = e.return;
    return n.tag === 3 ? n.stateNode : null
}
var zn = !1;
function Lf(e) {
    e.updateQueue = {
        baseState: e.memoizedState,
        firstBaseUpdate: null,
        lastBaseUpdate: null,
        shared: {
            pending: null,
            interleaved: null,
            lanes: 0
        },
        effects: null
    }
}
function n0(e, t) {
    e = e.updateQueue,
    t.updateQueue === e && (t.updateQueue = {
        baseState: e.baseState,
        firstBaseUpdate: e.firstBaseUpdate,
        lastBaseUpdate: e.lastBaseUpdate,
        shared: e.shared,
        effects: e.effects
    })
}
function Cn(e, t) {
    return {
        eventTime: e,
        lane: t,
        tag: 0,
        payload: null,
        callback: null,
        next: null
    }
}
function or(e, t, n) {
    var r = e.updateQueue;
    if (r === null)
        return null;
    if (r = r.shared,
    te & 2) {
        var o = r.pending;
        return o === null ? t.next = t : (t.next = o.next,
        o.next = t),
        r.pending = t,
        Tn(e, n)
    }
    return o = r.interleaved,
    o === null ? (t.next = t,
    Of(r)) : (t.next = o.next,
    o.next = t),
    r.interleaved = t,
    Tn(e, n)
}
function Pa(e, t, n) {
    if (t = t.updateQueue,
    t !== null && (t = t.shared,
    (n & 4194240) !== 0)) {
        var r = t.lanes;
        r &= e.pendingLanes,
        n |= r,
        t.lanes = n,
        Sf(e, n)
    }
}
function Qp(e, t) {
    var n = e.updateQueue
      , r = e.alternate;
    if (r !== null && (r = r.updateQueue,
    n === r)) {
        var o = null
          , s = null;
        if (n = n.firstBaseUpdate,
        n !== null) {
            do {
                var i = {
                    eventTime: n.eventTime,
                    lane: n.lane,
                    tag: n.tag,
                    payload: n.payload,
                    callback: n.callback,
                    next: null
                };
                s === null ? o = s = i : s = s.next = i,
                n = n.next
            } while (n !== null);
            s === null ? o = s = t : s = s.next = t
        } else
            o = s = t;
        n = {
            baseState: r.baseState,
            firstBaseUpdate: o,
            lastBaseUpdate: s,
            shared: r.shared,
            effects: r.effects
        },
        e.updateQueue = n;
        return
    }
    e = n.lastBaseUpdate,
    e === null ? n.firstBaseUpdate = t : e.next = t,
    n.lastBaseUpdate = t
}
function rl(e, t, n, r) {
    var o = e.updateQueue;
    zn = !1;
    var s = o.firstBaseUpdate
      , i = o.lastBaseUpdate
      , a = o.shared.pending;
    if (a !== null) {
        o.shared.pending = null;
        var l = a
          , u = l.next;
        l.next = null,
        i === null ? s = u : i.next = u,
        i = l;
        var c = e.alternate;
        c !== null && (c = c.updateQueue,
        a = c.lastBaseUpdate,
        a !== i && (a === null ? c.firstBaseUpdate = u : a.next = u,
        c.lastBaseUpdate = l))
    }
    if (s !== null) {
        var d = o.baseState;
        i = 0,
        c = u = l = null,
        a = s;
        do {
            var f = a.lane
              , h = a.eventTime;
            if ((r & f) === f) {
                c !== null && (c = c.next = {
                    eventTime: h,
                    lane: 0,
                    tag: a.tag,
                    payload: a.payload,
                    callback: a.callback,
                    next: null
                });
                e: {
                    var S = e
                      , p = a;
                    switch (f = t,
                    h = n,
                    p.tag) {
                    case 1:
                        if (S = p.payload,
                        typeof S == "function") {
                            d = S.call(h, d, f);
                            break e
                        }
                        d = S;
                        break e;
                    case 3:
                        S.flags = S.flags & -65537 | 128;
                    case 0:
                        if (S = p.payload,
                        f = typeof S == "function" ? S.call(h, d, f) : S,
                        f == null)
                            break e;
                        d = Ce({}, d, f);
                        break e;
                    case 2:
                        zn = !0
                    }
                }
                a.callback !== null && a.lane !== 0 && (e.flags |= 64,
                f = o.effects,
                f === null ? o.effects = [a] : f.push(a))
            } else
                h = {
                    eventTime: h,
                    lane: f,
                    tag: a.tag,
                    payload: a.payload,
                    callback: a.callback,
                    next: null
                },
                c === null ? (u = c = h,
                l = d) : c = c.next = h,
                i |= f;
            if (a = a.next,
            a === null) {
                if (a = o.shared.pending,
                a === null)
                    break;
                f = a,
                a = f.next,
                f.next = null,
                o.lastBaseUpdate = f,
                o.shared.pending = null
            }
        } while (!0);
        if (c === null && (l = d),
        o.baseState = l,
        o.firstBaseUpdate = u,
        o.lastBaseUpdate = c,
        t = o.shared.interleaved,
        t !== null) {
            o = t;
            do
                i |= o.lane,
                o = o.next;
            while (o !== t)
        } else
            s === null && (o.shared.lanes = 0);
        Kr |= i,
        e.lanes = i,
        e.memoizedState = d
    }
}
function Xp(e, t, n) {
    if (e = t.effects,
    t.effects = null,
    e !== null)
        for (t = 0; t < e.length; t++) {
            var r = e[t]
              , o = r.callback;
            if (o !== null) {
                if (r.callback = null,
                r = n,
                typeof o != "function")
                    throw Error(j(191, o));
                o.call(r)
            }
        }
}
var Ii = {}
  , ln = mr(Ii)
  , di = mr(Ii)
  , fi = mr(Ii);
function Ar(e) {
    if (e === Ii)
        throw Error(j(174));
    return e
}
function _f(e, t) {
    switch (ue(fi, t),
    ue(di, e),
    ue(ln, Ii),
    e = t.nodeType,
    e) {
    case 9:
    case 11:
        t = (t = t.documentElement) ? t.namespaceURI : Dc(null, "");
        break;
    default:
        e = e === 8 ? t.parentNode : t,
        t = e.namespaceURI || null,
        e = e.tagName,
        t = Dc(t, e)
    }
    he(ln),
    ue(ln, t)
}
function Xo() {
    he(ln),
    he(di),
    he(fi)
}
function r0(e) {
    Ar(fi.current);
    var t = Ar(ln.current)
      , n = Dc(t, e.type);
    t !== n && (ue(di, e),
    ue(ln, n))
}
function Ff(e) {
    di.current === e && (he(ln),
    he(di))
}
var xe = mr(0);
function ol(e) {
    for (var t = e; t !== null; ) {
        if (t.tag === 13) {
            var n = t.memoizedState;
            if (n !== null && (n = n.dehydrated,
            n === null || n.data === "$?" || n.data === "$!"))
                return t
        } else if (t.tag === 19 && t.memoizedProps.revealOrder !== void 0) {
            if (t.flags & 128)
                return t
        } else if (t.child !== null) {
            t.child.return = t,
            t = t.child;
            continue
        }
        if (t === e)
            break;
        for (; t.sibling === null; ) {
            if (t.return === null || t.return === e)
                return null;
            t = t.return
        }
        t.sibling.return = t.return,
        t = t.sibling
    }
    return null
}
var Fu = [];
function Vf() {
    for (var e = 0; e < Fu.length; e++)
        Fu[e]._workInProgressVersionPrimary = null;
    Fu.length = 0
}
var Ra = An.ReactCurrentDispatcher
  , Vu = An.ReactCurrentBatchConfig
  , Hr = 0
  , Se = null
  , je = null
  , Oe = null
  , sl = !1
  , Hs = !1
  , hi = 0
  , zE = 0;
function We() {
    throw Error(j(321))
}
function Bf(e, t) {
    if (t === null)
        return !1;
    for (var n = 0; n < t.length && n < e.length; n++)
        if (!Kt(e[n], t[n]))
            return !1;
    return !0
}
function $f(e, t, n, r, o, s) {
    if (Hr = s,
    Se = t,
    t.memoizedState = null,
    t.updateQueue = null,
    t.lanes = 0,
    Ra.current = e === null || e.memoizedState === null ? KE : GE,
    e = n(r, o),
    Hs) {
        s = 0;
        do {
            if (Hs = !1,
            hi = 0,
            25 <= s)
                throw Error(j(301));
            s += 1,
            Oe = je = null,
            t.updateQueue = null,
            Ra.current = YE,
            e = n(r, o)
        } while (Hs)
    }
    if (Ra.current = il,
    t = je !== null && je.next !== null,
    Hr = 0,
    Oe = je = Se = null,
    sl = !1,
    t)
        throw Error(j(300));
    return e
}
function zf() {
    var e = hi !== 0;
    return hi = 0,
    e
}
function Jt() {
    var e = {
        memoizedState: null,
        baseState: null,
        baseQueue: null,
        queue: null,
        next: null
    };
    return Oe === null ? Se.memoizedState = Oe = e : Oe = Oe.next = e,
    Oe
}
function Nt() {
    if (je === null) {
        var e = Se.alternate;
        e = e !== null ? e.memoizedState : null
    } else
        e = je.next;
    var t = Oe === null ? Se.memoizedState : Oe.next;
    if (t !== null)
        Oe = t,
        je = e;
    else {
        if (e === null)
            throw Error(j(310));
        je = e,
        e = {
            memoizedState: je.memoizedState,
            baseState: je.baseState,
            baseQueue: je.baseQueue,
            queue: je.queue,
            next: null
        },
        Oe === null ? Se.memoizedState = Oe = e : Oe = Oe.next = e
    }
    return Oe
}
function pi(e, t) {
    return typeof t == "function" ? t(e) : t
}
function Bu(e) {
    var t = Nt()
      , n = t.queue;
    if (n === null)
        throw Error(j(311));
    n.lastRenderedReducer = e;
    var r = je
      , o = r.baseQueue
      , s = n.pending;
    if (s !== null) {
        if (o !== null) {
            var i = o.next;
            o.next = s.next,
            s.next = i
        }
        r.baseQueue = o = s,
        n.pending = null
    }
    if (o !== null) {
        s = o.next,
        r = r.baseState;
        var a = i = null
          , l = null
          , u = s;
        do {
            var c = u.lane;
            if ((Hr & c) === c)
                l !== null && (l = l.next = {
                    lane: 0,
                    action: u.action,
                    hasEagerState: u.hasEagerState,
                    eagerState: u.eagerState,
                    next: null
                }),
                r = u.hasEagerState ? u.eagerState : e(r, u.action);
            else {
                var d = {
                    lane: c,
                    action: u.action,
                    hasEagerState: u.hasEagerState,
                    eagerState: u.eagerState,
                    next: null
                };
                l === null ? (a = l = d,
                i = r) : l = l.next = d,
                Se.lanes |= c,
                Kr |= c
            }
            u = u.next
        } while (u !== null && u !== s);
        l === null ? i = r : l.next = a,
        Kt(r, t.memoizedState) || (it = !0),
        t.memoizedState = r,
        t.baseState = i,
        t.baseQueue = l,
        n.lastRenderedState = r
    }
    if (e = n.interleaved,
    e !== null) {
        o = e;
        do
            s = o.lane,
            Se.lanes |= s,
            Kr |= s,
            o = o.next;
        while (o !== e)
    } else
        o === null && (n.lanes = 0);
    return [t.memoizedState, n.dispatch]
}
function $u(e) {
    var t = Nt()
      , n = t.queue;
    if (n === null)
        throw Error(j(311));
    n.lastRenderedReducer = e;
    var r = n.dispatch
      , o = n.pending
      , s = t.memoizedState;
    if (o !== null) {
        n.pending = null;
        var i = o = o.next;
        do
            s = e(s, i.action),
            i = i.next;
        while (i !== o);
        Kt(s, t.memoizedState) || (it = !0),
        t.memoizedState = s,
        t.baseQueue === null && (t.baseState = s),
        n.lastRenderedState = s
    }
    return [s, r]
}
function o0() {}
function s0(e, t) {
    var n = Se
      , r = Nt()
      , o = t()
      , s = !Kt(r.memoizedState, o);
    if (s && (r.memoizedState = o,
    it = !0),
    r = r.queue,
    Uf(l0.bind(null, n, r, e), [e]),
    r.getSnapshot !== t || s || Oe !== null && Oe.memoizedState.tag & 1) {
        if (n.flags |= 2048,
        mi(9, a0.bind(null, n, r, o, t), void 0, null),
        Le === null)
            throw Error(j(349));
        Hr & 30 || i0(n, t, o)
    }
    return o
}
function i0(e, t, n) {
    e.flags |= 16384,
    e = {
        getSnapshot: t,
        value: n
    },
    t = Se.updateQueue,
    t === null ? (t = {
        lastEffect: null,
        stores: null
    },
    Se.updateQueue = t,
    t.stores = [e]) : (n = t.stores,
    n === null ? t.stores = [e] : n.push(e))
}
function a0(e, t, n, r) {
    t.value = n,
    t.getSnapshot = r,
    u0(t) && c0(e)
}
function l0(e, t, n) {
    return n(function() {
        u0(t) && c0(e)
    })
}
function u0(e) {
    var t = e.getSnapshot;
    e = e.value;
    try {
        var n = t();
        return !Kt(e, n)
    } catch {
        return !0
    }
}
function c0(e) {
    var t = Tn(e, 1);
    t !== null && Ht(t, e, 1, -1)
}
function qp(e) {
    var t = Jt();
    return typeof e == "function" && (e = e()),
    t.memoizedState = t.baseState = e,
    e = {
        pending: null,
        interleaved: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: pi,
        lastRenderedState: e
    },
    t.queue = e,
    e = e.dispatch = HE.bind(null, Se, e),
    [t.memoizedState, e]
}
function mi(e, t, n, r) {
    return e = {
        tag: e,
        create: t,
        destroy: n,
        deps: r,
        next: null
    },
    t = Se.updateQueue,
    t === null ? (t = {
        lastEffect: null,
        stores: null
    },
    Se.updateQueue = t,
    t.lastEffect = e.next = e) : (n = t.lastEffect,
    n === null ? t.lastEffect = e.next = e : (r = n.next,
    n.next = e,
    e.next = r,
    t.lastEffect = e)),
    e
}
function d0() {
    return Nt().memoizedState
}
function ka(e, t, n, r) {
    var o = Jt();
    Se.flags |= e,
    o.memoizedState = mi(1 | t, n, void 0, r === void 0 ? null : r)
}
function Fl(e, t, n, r) {
    var o = Nt();
    r = r === void 0 ? null : r;
    var s = void 0;
    if (je !== null) {
        var i = je.memoizedState;
        if (s = i.destroy,
        r !== null && Bf(r, i.deps)) {
            o.memoizedState = mi(t, n, s, r);
            return
        }
    }
    Se.flags |= e,
    o.memoizedState = mi(1 | t, n, s, r)
}
function Zp(e, t) {
    return ka(8390656, 8, e, t)
}
function Uf(e, t) {
    return Fl(2048, 8, e, t)
}
function f0(e, t) {
    return Fl(4, 2, e, t)
}
function h0(e, t) {
    return Fl(4, 4, e, t)
}
function p0(e, t) {
    if (typeof t == "function")
        return e = e(),
        t(e),
        function() {
            t(null)
        }
        ;
    if (t != null)
        return e = e(),
        t.current = e,
        function() {
            t.current = null
        }
}
function m0(e, t, n) {
    return n = n != null ? n.concat([e]) : null,
    Fl(4, 4, p0.bind(null, t, e), n)
}
function Wf() {}
function g0(e, t) {
    var n = Nt();
    t = t === void 0 ? null : t;
    var r = n.memoizedState;
    return r !== null && t !== null && Bf(t, r[1]) ? r[0] : (n.memoizedState = [e, t],
    e)
}
function v0(e, t) {
    var n = Nt();
    t = t === void 0 ? null : t;
    var r = n.memoizedState;
    return r !== null && t !== null && Bf(t, r[1]) ? r[0] : (e = e(),
    n.memoizedState = [e, t],
    e)
}
function y0(e, t, n) {
    return Hr & 21 ? (Kt(n, t) || (n = by(),
    Se.lanes |= n,
    Kr |= n,
    e.baseState = !0),
    t) : (e.baseState && (e.baseState = !1,
    it = !0),
    e.memoizedState = n)
}
function UE(e, t) {
    var n = ae;
    ae = n !== 0 && 4 > n ? n : 4,
    e(!0);
    var r = Vu.transition;
    Vu.transition = {};
    try {
        e(!1),
        t()
    } finally {
        ae = n,
        Vu.transition = r
    }
}
function x0() {
    return Nt().memoizedState
}
function WE(e, t, n) {
    var r = ir(e);
    if (n = {
        lane: r,
        action: n,
        hasEagerState: !1,
        eagerState: null,
        next: null
    },
    w0(e))
        S0(t, n);
    else if (n = t0(e, t, n, r),
    n !== null) {
        var o = tt();
        Ht(n, e, r, o),
        C0(n, t, r)
    }
}
function HE(e, t, n) {
    var r = ir(e)
      , o = {
        lane: r,
        action: n,
        hasEagerState: !1,
        eagerState: null,
        next: null
    };
    if (w0(e))
        S0(t, o);
    else {
        var s = e.alternate;
        if (e.lanes === 0 && (s === null || s.lanes === 0) && (s = t.lastRenderedReducer,
        s !== null))
            try {
                var i = t.lastRenderedState
                  , a = s(i, n);
                if (o.hasEagerState = !0,
                o.eagerState = a,
                Kt(a, i)) {
                    var l = t.interleaved;
                    l === null ? (o.next = o,
                    Of(t)) : (o.next = l.next,
                    l.next = o),
                    t.interleaved = o;
                    return
                }
            } catch {} finally {}
        n = t0(e, t, o, r),
        n !== null && (o = tt(),
        Ht(n, e, r, o),
        C0(n, t, r))
    }
}
function w0(e) {
    var t = e.alternate;
    return e === Se || t !== null && t === Se
}
function S0(e, t) {
    Hs = sl = !0;
    var n = e.pending;
    n === null ? t.next = t : (t.next = n.next,
    n.next = t),
    e.pending = t
}
function C0(e, t, n) {
    if (n & 4194240) {
        var r = t.lanes;
        r &= e.pendingLanes,
        n |= r,
        t.lanes = n,
        Sf(e, n)
    }
}
var il = {
    readContext: kt,
    useCallback: We,
    useContext: We,
    useEffect: We,
    useImperativeHandle: We,
    useInsertionEffect: We,
    useLayoutEffect: We,
    useMemo: We,
    useReducer: We,
    useRef: We,
    useState: We,
    useDebugValue: We,
    useDeferredValue: We,
    useTransition: We,
    useMutableSource: We,
    useSyncExternalStore: We,
    useId: We,
    unstable_isNewReconciler: !1
}
  , KE = {
    readContext: kt,
    useCallback: function(e, t) {
        return Jt().memoizedState = [e, t === void 0 ? null : t],
        e
    },
    useContext: kt,
    useEffect: Zp,
    useImperativeHandle: function(e, t, n) {
        return n = n != null ? n.concat([e]) : null,
        ka(4194308, 4, p0.bind(null, t, e), n)
    },
    useLayoutEffect: function(e, t) {
        return ka(4194308, 4, e, t)
    },
    useInsertionEffect: function(e, t) {
        return ka(4, 2, e, t)
    },
    useMemo: function(e, t) {
        var n = Jt();
        return t = t === void 0 ? null : t,
        e = e(),
        n.memoizedState = [e, t],
        e
    },
    useReducer: function(e, t, n) {
        var r = Jt();
        return t = n !== void 0 ? n(t) : t,
        r.memoizedState = r.baseState = t,
        e = {
            pending: null,
            interleaved: null,
            lanes: 0,
            dispatch: null,
            lastRenderedReducer: e,
            lastRenderedState: t
        },
        r.queue = e,
        e = e.dispatch = WE.bind(null, Se, e),
        [r.memoizedState, e]
    },
    useRef: function(e) {
        var t = Jt();
        return e = {
            current: e
        },
        t.memoizedState = e
    },
    useState: qp,
    useDebugValue: Wf,
    useDeferredValue: function(e) {
        return Jt().memoizedState = e
    },
    useTransition: function() {
        var e = qp(!1)
          , t = e[0];
        return e = UE.bind(null, e[1]),
        Jt().memoizedState = e,
        [t, e]
    },
    useMutableSource: function() {},
    useSyncExternalStore: function(e, t, n) {
        var r = Se
          , o = Jt();
        if (ve) {
            if (n === void 0)
                throw Error(j(407));
            n = n()
        } else {
            if (n = t(),
            Le === null)
                throw Error(j(349));
            Hr & 30 || i0(r, t, n)
        }
        o.memoizedState = n;
        var s = {
            value: n,
            getSnapshot: t
        };
        return o.queue = s,
        Zp(l0.bind(null, r, s, e), [e]),
        r.flags |= 2048,
        mi(9, a0.bind(null, r, s, n, t), void 0, null),
        n
    },
    useId: function() {
        var e = Jt()
          , t = Le.identifierPrefix;
        if (ve) {
            var n = Sn
              , r = wn;
            n = (r & ~(1 << 32 - Wt(r) - 1)).toString(32) + n,
            t = ":" + t + "R" + n,
            n = hi++,
            0 < n && (t += "H" + n.toString(32)),
            t += ":"
        } else
            n = zE++,
            t = ":" + t + "r" + n.toString(32) + ":";
        return e.memoizedState = t
    },
    unstable_isNewReconciler: !1
}
  , GE = {
    readContext: kt,
    useCallback: g0,
    useContext: kt,
    useEffect: Uf,
    useImperativeHandle: m0,
    useInsertionEffect: f0,
    useLayoutEffect: h0,
    useMemo: v0,
    useReducer: Bu,
    useRef: d0,
    useState: function() {
        return Bu(pi)
    },
    useDebugValue: Wf,
    useDeferredValue: function(e) {
        var t = Nt();
        return y0(t, je.memoizedState, e)
    },
    useTransition: function() {
        var e = Bu(pi)[0]
          , t = Nt().memoizedState;
        return [e, t]
    },
    useMutableSource: o0,
    useSyncExternalStore: s0,
    useId: x0,
    unstable_isNewReconciler: !1
}
  , YE = {
    readContext: kt,
    useCallback: g0,
    useContext: kt,
    useEffect: Uf,
    useImperativeHandle: m0,
    useInsertionEffect: f0,
    useLayoutEffect: h0,
    useMemo: v0,
    useReducer: $u,
    useRef: d0,
    useState: function() {
        return $u(pi)
    },
    useDebugValue: Wf,
    useDeferredValue: function(e) {
        var t = Nt();
        return je === null ? t.memoizedState = e : y0(t, je.memoizedState, e)
    },
    useTransition: function() {
        var e = $u(pi)[0]
          , t = Nt().memoizedState;
        return [e, t]
    },
    useMutableSource: o0,
    useSyncExternalStore: s0,
    useId: x0,
    unstable_isNewReconciler: !1
};
function Ft(e, t) {
    if (e && e.defaultProps) {
        t = Ce({}, t),
        e = e.defaultProps;
        for (var n in e)
            t[n] === void 0 && (t[n] = e[n]);
        return t
    }
    return t
}
function ed(e, t, n, r) {
    t = e.memoizedState,
    n = n(r, t),
    n = n == null ? t : Ce({}, t, n),
    e.memoizedState = n,
    e.lanes === 0 && (e.updateQueue.baseState = n)
}
var Vl = {
    isMounted: function(e) {
        return (e = e._reactInternals) ? Jr(e) === e : !1
    },
    enqueueSetState: function(e, t, n) {
        e = e._reactInternals;
        var r = tt()
          , o = ir(e)
          , s = Cn(r, o);
        s.payload = t,
        n != null && (s.callback = n),
        t = or(e, s, o),
        t !== null && (Ht(t, e, o, r),
        Pa(t, e, o))
    },
    enqueueReplaceState: function(e, t, n) {
        e = e._reactInternals;
        var r = tt()
          , o = ir(e)
          , s = Cn(r, o);
        s.tag = 1,
        s.payload = t,
        n != null && (s.callback = n),
        t = or(e, s, o),
        t !== null && (Ht(t, e, o, r),
        Pa(t, e, o))
    },
    enqueueForceUpdate: function(e, t) {
        e = e._reactInternals;
        var n = tt()
          , r = ir(e)
          , o = Cn(n, r);
        o.tag = 2,
        t != null && (o.callback = t),
        t = or(e, o, r),
        t !== null && (Ht(t, e, r, n),
        Pa(t, e, r))
    }
};
function Jp(e, t, n, r, o, s, i) {
    return e = e.stateNode,
    typeof e.shouldComponentUpdate == "function" ? e.shouldComponentUpdate(r, s, i) : t.prototype && t.prototype.isPureReactComponent ? !ai(n, r) || !ai(o, s) : !0
}
function b0(e, t, n) {
    var r = !1
      , o = ur
      , s = t.contextType;
    return typeof s == "object" && s !== null ? s = kt(s) : (o = lt(t) ? Ur : Qe.current,
    r = t.contextTypes,
    s = (r = r != null) ? Go(e, o) : ur),
    t = new t(n,s),
    e.memoizedState = t.state !== null && t.state !== void 0 ? t.state : null,
    t.updater = Vl,
    e.stateNode = t,
    t._reactInternals = e,
    r && (e = e.stateNode,
    e.__reactInternalMemoizedUnmaskedChildContext = o,
    e.__reactInternalMemoizedMaskedChildContext = s),
    t
}
function em(e, t, n, r) {
    e = t.state,
    typeof t.componentWillReceiveProps == "function" && t.componentWillReceiveProps(n, r),
    typeof t.UNSAFE_componentWillReceiveProps == "function" && t.UNSAFE_componentWillReceiveProps(n, r),
    t.state !== e && Vl.enqueueReplaceState(t, t.state, null)
}
function td(e, t, n, r) {
    var o = e.stateNode;
    o.props = n,
    o.state = e.memoizedState,
    o.refs = {},
    Lf(e);
    var s = t.contextType;
    typeof s == "object" && s !== null ? o.context = kt(s) : (s = lt(t) ? Ur : Qe.current,
    o.context = Go(e, s)),
    o.state = e.memoizedState,
    s = t.getDerivedStateFromProps,
    typeof s == "function" && (ed(e, t, s, n),
    o.state = e.memoizedState),
    typeof t.getDerivedStateFromProps == "function" || typeof o.getSnapshotBeforeUpdate == "function" || typeof o.UNSAFE_componentWillMount != "function" && typeof o.componentWillMount != "function" || (t = o.state,
    typeof o.componentWillMount == "function" && o.componentWillMount(),
    typeof o.UNSAFE_componentWillMount == "function" && o.UNSAFE_componentWillMount(),
    t !== o.state && Vl.enqueueReplaceState(o, o.state, null),
    rl(e, n, o, r),
    o.state = e.memoizedState),
    typeof o.componentDidMount == "function" && (e.flags |= 4194308)
}
function qo(e, t) {
    try {
        var n = ""
          , r = t;
        do
            n += Cb(r),
            r = r.return;
        while (r);
        var o = n
    } catch (s) {
        o = `
Error generating stack: ` + s.message + `
` + s.stack
    }
    return {
        value: e,
        source: t,
        stack: o,
        digest: null
    }
}
function zu(e, t, n) {
    return {
        value: e,
        source: null,
        stack: n ?? null,
        digest: t ?? null
    }
}
function nd(e, t) {
    try {
        console.error(t.value)
    } catch (n) {
        setTimeout(function() {
            throw n
        })
    }
}
var QE = typeof WeakMap == "function" ? WeakMap : Map;
function E0(e, t, n) {
    n = Cn(-1, n),
    n.tag = 3,
    n.payload = {
        element: null
    };
    var r = t.value;
    return n.callback = function() {
        ll || (ll = !0,
        fd = r),
        nd(e, t)
    }
    ,
    n
}
function T0(e, t, n) {
    n = Cn(-1, n),
    n.tag = 3;
    var r = e.type.getDerivedStateFromError;
    if (typeof r == "function") {
        var o = t.value;
        n.payload = function() {
            return r(o)
        }
        ,
        n.callback = function() {
            nd(e, t)
        }
    }
    var s = e.stateNode;
    return s !== null && typeof s.componentDidCatch == "function" && (n.callback = function() {
        nd(e, t),
        typeof r != "function" && (sr === null ? sr = new Set([this]) : sr.add(this));
        var i = t.stack;
        this.componentDidCatch(t.value, {
            componentStack: i !== null ? i : ""
        })
    }
    ),
    n
}
function tm(e, t, n) {
    var r = e.pingCache;
    if (r === null) {
        r = e.pingCache = new QE;
        var o = new Set;
        r.set(t, o)
    } else
        o = r.get(t),
        o === void 0 && (o = new Set,
        r.set(t, o));
    o.has(n) || (o.add(n),
    e = uT.bind(null, e, t, n),
    t.then(e, e))
}
function nm(e) {
    do {
        var t;
        if ((t = e.tag === 13) && (t = e.memoizedState,
        t = t !== null ? t.dehydrated !== null : !0),
        t)
            return e;
        e = e.return
    } while (e !== null);
    return null
}
function rm(e, t, n, r, o) {
    return e.mode & 1 ? (e.flags |= 65536,
    e.lanes = o,
    e) : (e === t ? e.flags |= 65536 : (e.flags |= 128,
    n.flags |= 131072,
    n.flags &= -52805,
    n.tag === 1 && (n.alternate === null ? n.tag = 17 : (t = Cn(-1, 1),
    t.tag = 2,
    or(n, t, 1))),
    n.lanes |= 1),
    e)
}
var XE = An.ReactCurrentOwner
  , it = !1;
function qe(e, t, n, r) {
    t.child = e === null ? e0(t, null, n, r) : Qo(t, e.child, n, r)
}
function om(e, t, n, r, o) {
    n = n.render;
    var s = t.ref;
    return Mo(t, o),
    r = $f(e, t, n, r, s, o),
    n = zf(),
    e !== null && !it ? (t.updateQueue = e.updateQueue,
    t.flags &= -2053,
    e.lanes &= ~o,
    Pn(e, t, o)) : (ve && n && Nf(t),
    t.flags |= 1,
    qe(e, t, r, o),
    t.child)
}
function sm(e, t, n, r, o) {
    if (e === null) {
        var s = n.type;
        return typeof s == "function" && !Zf(s) && s.defaultProps === void 0 && n.compare === null && n.defaultProps === void 0 ? (t.tag = 15,
        t.type = s,
        P0(e, t, s, r, o)) : (e = ja(n.type, null, r, t, t.mode, o),
        e.ref = t.ref,
        e.return = t,
        t.child = e)
    }
    if (s = e.child,
    !(e.lanes & o)) {
        var i = s.memoizedProps;
        if (n = n.compare,
        n = n !== null ? n : ai,
        n(i, r) && e.ref === t.ref)
            return Pn(e, t, o)
    }
    return t.flags |= 1,
    e = ar(s, r),
    e.ref = t.ref,
    e.return = t,
    t.child = e
}
function P0(e, t, n, r, o) {
    if (e !== null) {
        var s = e.memoizedProps;
        if (ai(s, r) && e.ref === t.ref)
            if (it = !1,
            t.pendingProps = r = s,
            (e.lanes & o) !== 0)
                e.flags & 131072 && (it = !0);
            else
                return t.lanes = e.lanes,
                Pn(e, t, o)
    }
    return rd(e, t, n, r, o)
}
function R0(e, t, n) {
    var r = t.pendingProps
      , o = r.children
      , s = e !== null ? e.memoizedState : null;
    if (r.mode === "hidden")
        if (!(t.mode & 1))
            t.memoizedState = {
                baseLanes: 0,
                cachePool: null,
                transitions: null
            },
            ue(Co, ct),
            ct |= n;
        else {
            if (!(n & 1073741824))
                return e = s !== null ? s.baseLanes | n : n,
                t.lanes = t.childLanes = 1073741824,
                t.memoizedState = {
                    baseLanes: e,
                    cachePool: null,
                    transitions: null
                },
                t.updateQueue = null,
                ue(Co, ct),
                ct |= e,
                null;
            t.memoizedState = {
                baseLanes: 0,
                cachePool: null,
                transitions: null
            },
            r = s !== null ? s.baseLanes : n,
            ue(Co, ct),
            ct |= r
        }
    else
        s !== null ? (r = s.baseLanes | n,
        t.memoizedState = null) : r = n,
        ue(Co, ct),
        ct |= r;
    return qe(e, t, o, n),
    t.child
}
function k0(e, t) {
    var n = t.ref;
    (e === null && n !== null || e !== null && e.ref !== n) && (t.flags |= 512,
    t.flags |= 2097152)
}
function rd(e, t, n, r, o) {
    var s = lt(n) ? Ur : Qe.current;
    return s = Go(t, s),
    Mo(t, o),
    n = $f(e, t, n, r, s, o),
    r = zf(),
    e !== null && !it ? (t.updateQueue = e.updateQueue,
    t.flags &= -2053,
    e.lanes &= ~o,
    Pn(e, t, o)) : (ve && r && Nf(t),
    t.flags |= 1,
    qe(e, t, n, o),
    t.child)
}
function im(e, t, n, r, o) {
    if (lt(n)) {
        var s = !0;
        Za(t)
    } else
        s = !1;
    if (Mo(t, o),
    t.stateNode === null)
        Na(e, t),
        b0(t, n, r),
        td(t, n, r, o),
        r = !0;
    else if (e === null) {
        var i = t.stateNode
          , a = t.memoizedProps;
        i.props = a;
        var l = i.context
          , u = n.contextType;
        typeof u == "object" && u !== null ? u = kt(u) : (u = lt(n) ? Ur : Qe.current,
        u = Go(t, u));
        var c = n.getDerivedStateFromProps
          , d = typeof c == "function" || typeof i.getSnapshotBeforeUpdate == "function";
        d || typeof i.UNSAFE_componentWillReceiveProps != "function" && typeof i.componentWillReceiveProps != "function" || (a !== r || l !== u) && em(t, i, r, u),
        zn = !1;
        var f = t.memoizedState;
        i.state = f,
        rl(t, r, i, o),
        l = t.memoizedState,
        a !== r || f !== l || at.current || zn ? (typeof c == "function" && (ed(t, n, c, r),
        l = t.memoizedState),
        (a = zn || Jp(t, n, a, r, f, l, u)) ? (d || typeof i.UNSAFE_componentWillMount != "function" && typeof i.componentWillMount != "function" || (typeof i.componentWillMount == "function" && i.componentWillMount(),
        typeof i.UNSAFE_componentWillMount == "function" && i.UNSAFE_componentWillMount()),
        typeof i.componentDidMount == "function" && (t.flags |= 4194308)) : (typeof i.componentDidMount == "function" && (t.flags |= 4194308),
        t.memoizedProps = r,
        t.memoizedState = l),
        i.props = r,
        i.state = l,
        i.context = u,
        r = a) : (typeof i.componentDidMount == "function" && (t.flags |= 4194308),
        r = !1)
    } else {
        i = t.stateNode,
        n0(e, t),
        a = t.memoizedProps,
        u = t.type === t.elementType ? a : Ft(t.type, a),
        i.props = u,
        d = t.pendingProps,
        f = i.context,
        l = n.contextType,
        typeof l == "object" && l !== null ? l = kt(l) : (l = lt(n) ? Ur : Qe.current,
        l = Go(t, l));
        var h = n.getDerivedStateFromProps;
        (c = typeof h == "function" || typeof i.getSnapshotBeforeUpdate == "function") || typeof i.UNSAFE_componentWillReceiveProps != "function" && typeof i.componentWillReceiveProps != "function" || (a !== d || f !== l) && em(t, i, r, l),
        zn = !1,
        f = t.memoizedState,
        i.state = f,
        rl(t, r, i, o);
        var S = t.memoizedState;
        a !== d || f !== S || at.current || zn ? (typeof h == "function" && (ed(t, n, h, r),
        S = t.memoizedState),
        (u = zn || Jp(t, n, u, r, f, S, l) || !1) ? (c || typeof i.UNSAFE_componentWillUpdate != "function" && typeof i.componentWillUpdate != "function" || (typeof i.componentWillUpdate == "function" && i.componentWillUpdate(r, S, l),
        typeof i.UNSAFE_componentWillUpdate == "function" && i.UNSAFE_componentWillUpdate(r, S, l)),
        typeof i.componentDidUpdate == "function" && (t.flags |= 4),
        typeof i.getSnapshotBeforeUpdate == "function" && (t.flags |= 1024)) : (typeof i.componentDidUpdate != "function" || a === e.memoizedProps && f === e.memoizedState || (t.flags |= 4),
        typeof i.getSnapshotBeforeUpdate != "function" || a === e.memoizedProps && f === e.memoizedState || (t.flags |= 1024),
        t.memoizedProps = r,
        t.memoizedState = S),
        i.props = r,
        i.state = S,
        i.context = l,
        r = u) : (typeof i.componentDidUpdate != "function" || a === e.memoizedProps && f === e.memoizedState || (t.flags |= 4),
        typeof i.getSnapshotBeforeUpdate != "function" || a === e.memoizedProps && f === e.memoizedState || (t.flags |= 1024),
        r = !1)
    }
    return od(e, t, n, r, s, o)
}
function od(e, t, n, r, o, s) {
    k0(e, t);
    var i = (t.flags & 128) !== 0;
    if (!r && !i)
        return o && Hp(t, n, !1),
        Pn(e, t, s);
    r = t.stateNode,
    XE.current = t;
    var a = i && typeof n.getDerivedStateFromError != "function" ? null : r.render();
    return t.flags |= 1,
    e !== null && i ? (t.child = Qo(t, e.child, null, s),
    t.child = Qo(t, null, a, s)) : qe(e, t, a, s),
    t.memoizedState = r.state,
    o && Hp(t, n, !0),
    t.child
}
function N0(e) {
    var t = e.stateNode;
    t.pendingContext ? Wp(e, t.pendingContext, t.pendingContext !== t.context) : t.context && Wp(e, t.context, !1),
    _f(e, t.containerInfo)
}
function am(e, t, n, r, o) {
    return Yo(),
    Mf(o),
    t.flags |= 256,
    qe(e, t, n, r),
    t.child
}
var sd = {
    dehydrated: null,
    treeContext: null,
    retryLane: 0
};
function id(e) {
    return {
        baseLanes: e,
        cachePool: null,
        transitions: null
    }
}
function A0(e, t, n) {
    var r = t.pendingProps, o = xe.current, s = !1, i = (t.flags & 128) !== 0, a;
    if ((a = i) || (a = e !== null && e.memoizedState === null ? !1 : (o & 2) !== 0),
    a ? (s = !0,
    t.flags &= -129) : (e === null || e.memoizedState !== null) && (o |= 1),
    ue(xe, o & 1),
    e === null)
        return Zc(t),
        e = t.memoizedState,
        e !== null && (e = e.dehydrated,
        e !== null) ? (t.mode & 1 ? e.data === "$!" ? t.lanes = 8 : t.lanes = 1073741824 : t.lanes = 1,
        null) : (i = r.children,
        e = r.fallback,
        s ? (r = t.mode,
        s = t.child,
        i = {
            mode: "hidden",
            children: i
        },
        !(r & 1) && s !== null ? (s.childLanes = 0,
        s.pendingProps = i) : s = zl(i, r, 0, null),
        e = Br(e, r, n, null),
        s.return = t,
        e.return = t,
        s.sibling = e,
        t.child = s,
        t.child.memoizedState = id(n),
        t.memoizedState = sd,
        e) : Hf(t, i));
    if (o = e.memoizedState,
    o !== null && (a = o.dehydrated,
    a !== null))
        return qE(e, t, i, r, a, o, n);
    if (s) {
        s = r.fallback,
        i = t.mode,
        o = e.child,
        a = o.sibling;
        var l = {
            mode: "hidden",
            children: r.children
        };
        return !(i & 1) && t.child !== o ? (r = t.child,
        r.childLanes = 0,
        r.pendingProps = l,
        t.deletions = null) : (r = ar(o, l),
        r.subtreeFlags = o.subtreeFlags & 14680064),
        a !== null ? s = ar(a, s) : (s = Br(s, i, n, null),
        s.flags |= 2),
        s.return = t,
        r.return = t,
        r.sibling = s,
        t.child = r,
        r = s,
        s = t.child,
        i = e.child.memoizedState,
        i = i === null ? id(n) : {
            baseLanes: i.baseLanes | n,
            cachePool: null,
            transitions: i.transitions
        },
        s.memoizedState = i,
        s.childLanes = e.childLanes & ~n,
        t.memoizedState = sd,
        r
    }
    return s = e.child,
    e = s.sibling,
    r = ar(s, {
        mode: "visible",
        children: r.children
    }),
    !(t.mode & 1) && (r.lanes = n),
    r.return = t,
    r.sibling = null,
    e !== null && (n = t.deletions,
    n === null ? (t.deletions = [e],
    t.flags |= 16) : n.push(e)),
    t.child = r,
    t.memoizedState = null,
    r
}
function Hf(e, t) {
    return t = zl({
        mode: "visible",
        children: t
    }, e.mode, 0, null),
    t.return = e,
    e.child = t
}
function oa(e, t, n, r) {
    return r !== null && Mf(r),
    Qo(t, e.child, null, n),
    e = Hf(t, t.pendingProps.children),
    e.flags |= 2,
    t.memoizedState = null,
    e
}
function qE(e, t, n, r, o, s, i) {
    if (n)
        return t.flags & 256 ? (t.flags &= -257,
        r = zu(Error(j(422))),
        oa(e, t, i, r)) : t.memoizedState !== null ? (t.child = e.child,
        t.flags |= 128,
        null) : (s = r.fallback,
        o = t.mode,
        r = zl({
            mode: "visible",
            children: r.children
        }, o, 0, null),
        s = Br(s, o, i, null),
        s.flags |= 2,
        r.return = t,
        s.return = t,
        r.sibling = s,
        t.child = r,
        t.mode & 1 && Qo(t, e.child, null, i),
        t.child.memoizedState = id(i),
        t.memoizedState = sd,
        s);
    if (!(t.mode & 1))
        return oa(e, t, i, null);
    if (o.data === "$!") {
        if (r = o.nextSibling && o.nextSibling.dataset,
        r)
            var a = r.dgst;
        return r = a,
        s = Error(j(419)),
        r = zu(s, r, void 0),
        oa(e, t, i, r)
    }
    if (a = (i & e.childLanes) !== 0,
    it || a) {
        if (r = Le,
        r !== null) {
            switch (i & -i) {
            case 4:
                o = 2;
                break;
            case 16:
                o = 8;
                break;
            case 64:
            case 128:
            case 256:
            case 512:
            case 1024:
            case 2048:
            case 4096:
            case 8192:
            case 16384:
            case 32768:
            case 65536:
            case 131072:
            case 262144:
            case 524288:
            case 1048576:
            case 2097152:
            case 4194304:
            case 8388608:
            case 16777216:
            case 33554432:
            case 67108864:
                o = 32;
                break;
            case 536870912:
                o = 268435456;
                break;
            default:
                o = 0
            }
            o = o & (r.suspendedLanes | i) ? 0 : o,
            o !== 0 && o !== s.retryLane && (s.retryLane = o,
            Tn(e, o),
            Ht(r, e, o, -1))
        }
        return qf(),
        r = zu(Error(j(421))),
        oa(e, t, i, r)
    }
    return o.data === "$?" ? (t.flags |= 128,
    t.child = e.child,
    t = cT.bind(null, e),
    o._reactRetry = t,
    null) : (e = s.treeContext,
    ft = rr(o.nextSibling),
    ht = t,
    ve = !0,
    Ut = null,
    e !== null && (Ct[bt++] = wn,
    Ct[bt++] = Sn,
    Ct[bt++] = Wr,
    wn = e.id,
    Sn = e.overflow,
    Wr = t),
    t = Hf(t, r.children),
    t.flags |= 4096,
    t)
}
function lm(e, t, n) {
    e.lanes |= t;
    var r = e.alternate;
    r !== null && (r.lanes |= t),
    Jc(e.return, t, n)
}
function Uu(e, t, n, r, o) {
    var s = e.memoizedState;
    s === null ? e.memoizedState = {
        isBackwards: t,
        rendering: null,
        renderingStartTime: 0,
        last: r,
        tail: n,
        tailMode: o
    } : (s.isBackwards = t,
    s.rendering = null,
    s.renderingStartTime = 0,
    s.last = r,
    s.tail = n,
    s.tailMode = o)
}
function M0(e, t, n) {
    var r = t.pendingProps
      , o = r.revealOrder
      , s = r.tail;
    if (qe(e, t, r.children, n),
    r = xe.current,
    r & 2)
        r = r & 1 | 2,
        t.flags |= 128;
    else {
        if (e !== null && e.flags & 128)
            e: for (e = t.child; e !== null; ) {
                if (e.tag === 13)
                    e.memoizedState !== null && lm(e, n, t);
                else if (e.tag === 19)
                    lm(e, n, t);
                else if (e.child !== null) {
                    e.child.return = e,
                    e = e.child;
                    continue
                }
                if (e === t)
                    break e;
                for (; e.sibling === null; ) {
                    if (e.return === null || e.return === t)
                        break e;
                    e = e.return
                }
                e.sibling.return = e.return,
                e = e.sibling
            }
        r &= 1
    }
    if (ue(xe, r),
    !(t.mode & 1))
        t.memoizedState = null;
    else
        switch (o) {
        case "forwards":
            for (n = t.child,
            o = null; n !== null; )
                e = n.alternate,
                e !== null && ol(e) === null && (o = n),
                n = n.sibling;
            n = o,
            n === null ? (o = t.child,
            t.child = null) : (o = n.sibling,
            n.sibling = null),
            Uu(t, !1, o, n, s);
            break;
        case "backwards":
            for (n = null,
            o = t.child,
            t.child = null; o !== null; ) {
                if (e = o.alternate,
                e !== null && ol(e) === null) {
                    t.child = o;
                    break
                }
                e = o.sibling,
                o.sibling = n,
                n = o,
                o = e
            }
            Uu(t, !0, n, null, s);
            break;
        case "together":
            Uu(t, !1, null, null, void 0);
            break;
        default:
            t.memoizedState = null
        }
    return t.child
}
function Na(e, t) {
    !(t.mode & 1) && e !== null && (e.alternate = null,
    t.alternate = null,
    t.flags |= 2)
}
function Pn(e, t, n) {
    if (e !== null && (t.dependencies = e.dependencies),
    Kr |= t.lanes,
    !(n & t.childLanes))
        return null;
    if (e !== null && t.child !== e.child)
        throw Error(j(153));
    if (t.child !== null) {
        for (e = t.child,
        n = ar(e, e.pendingProps),
        t.child = n,
        n.return = t; e.sibling !== null; )
            e = e.sibling,
            n = n.sibling = ar(e, e.pendingProps),
            n.return = t;
        n.sibling = null
    }
    return t.child
}
function ZE(e, t, n) {
    switch (t.tag) {
    case 3:
        N0(t),
        Yo();
        break;
    case 5:
        r0(t);
        break;
    case 1:
        lt(t.type) && Za(t);
        break;
    case 4:
        _f(t, t.stateNode.containerInfo);
        break;
    case 10:
        var r = t.type._context
          , o = t.memoizedProps.value;
        ue(tl, r._currentValue),
        r._currentValue = o;
        break;
    case 13:
        if (r = t.memoizedState,
        r !== null)
            return r.dehydrated !== null ? (ue(xe, xe.current & 1),
            t.flags |= 128,
            null) : n & t.child.childLanes ? A0(e, t, n) : (ue(xe, xe.current & 1),
            e = Pn(e, t, n),
            e !== null ? e.sibling : null);
        ue(xe, xe.current & 1);
        break;
    case 19:
        if (r = (n & t.childLanes) !== 0,
        e.flags & 128) {
            if (r)
                return M0(e, t, n);
            t.flags |= 128
        }
        if (o = t.memoizedState,
        o !== null && (o.rendering = null,
        o.tail = null,
        o.lastEffect = null),
        ue(xe, xe.current),
        r)
            break;
        return null;
    case 22:
    case 23:
        return t.lanes = 0,
        R0(e, t, n)
    }
    return Pn(e, t, n)
}
var j0, ad, D0, I0;
j0 = function(e, t) {
    for (var n = t.child; n !== null; ) {
        if (n.tag === 5 || n.tag === 6)
            e.appendChild(n.stateNode);
        else if (n.tag !== 4 && n.child !== null) {
            n.child.return = n,
            n = n.child;
            continue
        }
        if (n === t)
            break;
        for (; n.sibling === null; ) {
            if (n.return === null || n.return === t)
                return;
            n = n.return
        }
        n.sibling.return = n.return,
        n = n.sibling
    }
}
;
ad = function() {}
;
D0 = function(e, t, n, r) {
    var o = e.memoizedProps;
    if (o !== r) {
        e = t.stateNode,
        Ar(ln.current);
        var s = null;
        switch (n) {
        case "input":
            o = Nc(e, o),
            r = Nc(e, r),
            s = [];
            break;
        case "select":
            o = Ce({}, o, {
                value: void 0
            }),
            r = Ce({}, r, {
                value: void 0
            }),
            s = [];
            break;
        case "textarea":
            o = jc(e, o),
            r = jc(e, r),
            s = [];
            break;
        default:
            typeof o.onClick != "function" && typeof r.onClick == "function" && (e.onclick = Xa)
        }
        Ic(n, r);
        var i;
        n = null;
        for (u in o)
            if (!r.hasOwnProperty(u) && o.hasOwnProperty(u) && o[u] != null)
                if (u === "style") {
                    var a = o[u];
                    for (i in a)
                        a.hasOwnProperty(i) && (n || (n = {}),
                        n[i] = "")
                } else
                    u !== "dangerouslySetInnerHTML" && u !== "children" && u !== "suppressContentEditableWarning" && u !== "suppressHydrationWarning" && u !== "autoFocus" && (ei.hasOwnProperty(u) ? s || (s = []) : (s = s || []).push(u, null));
        for (u in r) {
            var l = r[u];
            if (a = o != null ? o[u] : void 0,
            r.hasOwnProperty(u) && l !== a && (l != null || a != null))
                if (u === "style")
                    if (a) {
                        for (i in a)
                            !a.hasOwnProperty(i) || l && l.hasOwnProperty(i) || (n || (n = {}),
                            n[i] = "");
                        for (i in l)
                            l.hasOwnProperty(i) && a[i] !== l[i] && (n || (n = {}),
                            n[i] = l[i])
                    } else
                        n || (s || (s = []),
                        s.push(u, n)),
                        n = l;
                else
                    u === "dangerouslySetInnerHTML" ? (l = l ? l.__html : void 0,
                    a = a ? a.__html : void 0,
                    l != null && a !== l && (s = s || []).push(u, l)) : u === "children" ? typeof l != "string" && typeof l != "number" || (s = s || []).push(u, "" + l) : u !== "suppressContentEditableWarning" && u !== "suppressHydrationWarning" && (ei.hasOwnProperty(u) ? (l != null && u === "onScroll" && fe("scroll", e),
                    s || a === l || (s = [])) : (s = s || []).push(u, l))
        }
        n && (s = s || []).push("style", n);
        var u = s;
        (t.updateQueue = u) && (t.flags |= 4)
    }
}
;
I0 = function(e, t, n, r) {
    n !== r && (t.flags |= 4)
}
;
function Ps(e, t) {
    if (!ve)
        switch (e.tailMode) {
        case "hidden":
            t = e.tail;
            for (var n = null; t !== null; )
                t.alternate !== null && (n = t),
                t = t.sibling;
            n === null ? e.tail = null : n.sibling = null;
            break;
        case "collapsed":
            n = e.tail;
            for (var r = null; n !== null; )
                n.alternate !== null && (r = n),
                n = n.sibling;
            r === null ? t || e.tail === null ? e.tail = null : e.tail.sibling = null : r.sibling = null
        }
}
function He(e) {
    var t = e.alternate !== null && e.alternate.child === e.child
      , n = 0
      , r = 0;
    if (t)
        for (var o = e.child; o !== null; )
            n |= o.lanes | o.childLanes,
            r |= o.subtreeFlags & 14680064,
            r |= o.flags & 14680064,
            o.return = e,
            o = o.sibling;
    else
        for (o = e.child; o !== null; )
            n |= o.lanes | o.childLanes,
            r |= o.subtreeFlags,
            r |= o.flags,
            o.return = e,
            o = o.sibling;
    return e.subtreeFlags |= r,
    e.childLanes = n,
    t
}
function JE(e, t, n) {
    var r = t.pendingProps;
    switch (Af(t),
    t.tag) {
    case 2:
    case 16:
    case 15:
    case 0:
    case 11:
    case 7:
    case 8:
    case 12:
    case 9:
    case 14:
        return He(t),
        null;
    case 1:
        return lt(t.type) && qa(),
        He(t),
        null;
    case 3:
        return r = t.stateNode,
        Xo(),
        he(at),
        he(Qe),
        Vf(),
        r.pendingContext && (r.context = r.pendingContext,
        r.pendingContext = null),
        (e === null || e.child === null) && (na(t) ? t.flags |= 4 : e === null || e.memoizedState.isDehydrated && !(t.flags & 256) || (t.flags |= 1024,
        Ut !== null && (md(Ut),
        Ut = null))),
        ad(e, t),
        He(t),
        null;
    case 5:
        Ff(t);
        var o = Ar(fi.current);
        if (n = t.type,
        e !== null && t.stateNode != null)
            D0(e, t, n, r, o),
            e.ref !== t.ref && (t.flags |= 512,
            t.flags |= 2097152);
        else {
            if (!r) {
                if (t.stateNode === null)
                    throw Error(j(166));
                return He(t),
                null
            }
            if (e = Ar(ln.current),
            na(t)) {
                r = t.stateNode,
                n = t.type;
                var s = t.memoizedProps;
                switch (r[rn] = t,
                r[ci] = s,
                e = (t.mode & 1) !== 0,
                n) {
                case "dialog":
                    fe("cancel", r),
                    fe("close", r);
                    break;
                case "iframe":
                case "object":
                case "embed":
                    fe("load", r);
                    break;
                case "video":
                case "audio":
                    for (o = 0; o < Is.length; o++)
                        fe(Is[o], r);
                    break;
                case "source":
                    fe("error", r);
                    break;
                case "img":
                case "image":
                case "link":
                    fe("error", r),
                    fe("load", r);
                    break;
                case "details":
                    fe("toggle", r);
                    break;
                case "input":
                    vp(r, s),
                    fe("invalid", r);
                    break;
                case "select":
                    r._wrapperState = {
                        wasMultiple: !!s.multiple
                    },
                    fe("invalid", r);
                    break;
                case "textarea":
                    xp(r, s),
                    fe("invalid", r)
                }
                Ic(n, s),
                o = null;
                for (var i in s)
                    if (s.hasOwnProperty(i)) {
                        var a = s[i];
                        i === "children" ? typeof a == "string" ? r.textContent !== a && (s.suppressHydrationWarning !== !0 && ta(r.textContent, a, e),
                        o = ["children", a]) : typeof a == "number" && r.textContent !== "" + a && (s.suppressHydrationWarning !== !0 && ta(r.textContent, a, e),
                        o = ["children", "" + a]) : ei.hasOwnProperty(i) && a != null && i === "onScroll" && fe("scroll", r)
                    }
                switch (n) {
                case "input":
                    Gi(r),
                    yp(r, s, !0);
                    break;
                case "textarea":
                    Gi(r),
                    wp(r);
                    break;
                case "select":
                case "option":
                    break;
                default:
                    typeof s.onClick == "function" && (r.onclick = Xa)
                }
                r = o,
                t.updateQueue = r,
                r !== null && (t.flags |= 4)
            } else {
                i = o.nodeType === 9 ? o : o.ownerDocument,
                e === "http://www.w3.org/1999/xhtml" && (e = ly(n)),
                e === "http://www.w3.org/1999/xhtml" ? n === "script" ? (e = i.createElement("div"),
                e.innerHTML = "<script><\/script>",
                e = e.removeChild(e.firstChild)) : typeof r.is == "string" ? e = i.createElement(n, {
                    is: r.is
                }) : (e = i.createElement(n),
                n === "select" && (i = e,
                r.multiple ? i.multiple = !0 : r.size && (i.size = r.size))) : e = i.createElementNS(e, n),
                e[rn] = t,
                e[ci] = r,
                j0(e, t, !1, !1),
                t.stateNode = e;
                e: {
                    switch (i = Oc(n, r),
                    n) {
                    case "dialog":
                        fe("cancel", e),
                        fe("close", e),
                        o = r;
                        break;
                    case "iframe":
                    case "object":
                    case "embed":
                        fe("load", e),
                        o = r;
                        break;
                    case "video":
                    case "audio":
                        for (o = 0; o < Is.length; o++)
                            fe(Is[o], e);
                        o = r;
                        break;
                    case "source":
                        fe("error", e),
                        o = r;
                        break;
                    case "img":
                    case "image":
                    case "link":
                        fe("error", e),
                        fe("load", e),
                        o = r;
                        break;
                    case "details":
                        fe("toggle", e),
                        o = r;
                        break;
                    case "input":
                        vp(e, r),
                        o = Nc(e, r),
                        fe("invalid", e);
                        break;
                    case "option":
                        o = r;
                        break;
                    case "select":
                        e._wrapperState = {
                            wasMultiple: !!r.multiple
                        },
                        o = Ce({}, r, {
                            value: void 0
                        }),
                        fe("invalid", e);
                        break;
                    case "textarea":
                        xp(e, r),
                        o = jc(e, r),
                        fe("invalid", e);
                        break;
                    default:
                        o = r
                    }
                    Ic(n, o),
                    a = o;
                    for (s in a)
                        if (a.hasOwnProperty(s)) {
                            var l = a[s];
                            s === "style" ? dy(e, l) : s === "dangerouslySetInnerHTML" ? (l = l ? l.__html : void 0,
                            l != null && uy(e, l)) : s === "children" ? typeof l == "string" ? (n !== "textarea" || l !== "") && ti(e, l) : typeof l == "number" && ti(e, "" + l) : s !== "suppressContentEditableWarning" && s !== "suppressHydrationWarning" && s !== "autoFocus" && (ei.hasOwnProperty(s) ? l != null && s === "onScroll" && fe("scroll", e) : l != null && mf(e, s, l, i))
                        }
                    switch (n) {
                    case "input":
                        Gi(e),
                        yp(e, r, !1);
                        break;
                    case "textarea":
                        Gi(e),
                        wp(e);
                        break;
                    case "option":
                        r.value != null && e.setAttribute("value", "" + lr(r.value));
                        break;
                    case "select":
                        e.multiple = !!r.multiple,
                        s = r.value,
                        s != null ? Ro(e, !!r.multiple, s, !1) : r.defaultValue != null && Ro(e, !!r.multiple, r.defaultValue, !0);
                        break;
                    default:
                        typeof o.onClick == "function" && (e.onclick = Xa)
                    }
                    switch (n) {
                    case "button":
                    case "input":
                    case "select":
                    case "textarea":
                        r = !!r.autoFocus;
                        break e;
                    case "img":
                        r = !0;
                        break e;
                    default:
                        r = !1
                    }
                }
                r && (t.flags |= 4)
            }
            t.ref !== null && (t.flags |= 512,
            t.flags |= 2097152)
        }
        return He(t),
        null;
    case 6:
        if (e && t.stateNode != null)
            I0(e, t, e.memoizedProps, r);
        else {
            if (typeof r != "string" && t.stateNode === null)
                throw Error(j(166));
            if (n = Ar(fi.current),
            Ar(ln.current),
            na(t)) {
                if (r = t.stateNode,
                n = t.memoizedProps,
                r[rn] = t,
                (s = r.nodeValue !== n) && (e = ht,
                e !== null))
                    switch (e.tag) {
                    case 3:
                        ta(r.nodeValue, n, (e.mode & 1) !== 0);
                        break;
                    case 5:
                        e.memoizedProps.suppressHydrationWarning !== !0 && ta(r.nodeValue, n, (e.mode & 1) !== 0)
                    }
                s && (t.flags |= 4)
            } else
                r = (n.nodeType === 9 ? n : n.ownerDocument).createTextNode(r),
                r[rn] = t,
                t.stateNode = r
        }
        return He(t),
        null;
    case 13:
        if (he(xe),
        r = t.memoizedState,
        e === null || e.memoizedState !== null && e.memoizedState.dehydrated !== null) {
            if (ve && ft !== null && t.mode & 1 && !(t.flags & 128))
                Zy(),
                Yo(),
                t.flags |= 98560,
                s = !1;
            else if (s = na(t),
            r !== null && r.dehydrated !== null) {
                if (e === null) {
                    if (!s)
                        throw Error(j(318));
                    if (s = t.memoizedState,
                    s = s !== null ? s.dehydrated : null,
                    !s)
                        throw Error(j(317));
                    s[rn] = t
                } else
                    Yo(),
                    !(t.flags & 128) && (t.memoizedState = null),
                    t.flags |= 4;
                He(t),
                s = !1
            } else
                Ut !== null && (md(Ut),
                Ut = null),
                s = !0;
            if (!s)
                return t.flags & 65536 ? t : null
        }
        return t.flags & 128 ? (t.lanes = n,
        t) : (r = r !== null,
        r !== (e !== null && e.memoizedState !== null) && r && (t.child.flags |= 8192,
        t.mode & 1 && (e === null || xe.current & 1 ? De === 0 && (De = 3) : qf())),
        t.updateQueue !== null && (t.flags |= 4),
        He(t),
        null);
    case 4:
        return Xo(),
        ad(e, t),
        e === null && li(t.stateNode.containerInfo),
        He(t),
        null;
    case 10:
        return If(t.type._context),
        He(t),
        null;
    case 17:
        return lt(t.type) && qa(),
        He(t),
        null;
    case 19:
        if (he(xe),
        s = t.memoizedState,
        s === null)
            return He(t),
            null;
        if (r = (t.flags & 128) !== 0,
        i = s.rendering,
        i === null)
            if (r)
                Ps(s, !1);
            else {
                if (De !== 0 || e !== null && e.flags & 128)
                    for (e = t.child; e !== null; ) {
                        if (i = ol(e),
                        i !== null) {
                            for (t.flags |= 128,
                            Ps(s, !1),
                            r = i.updateQueue,
                            r !== null && (t.updateQueue = r,
                            t.flags |= 4),
                            t.subtreeFlags = 0,
                            r = n,
                            n = t.child; n !== null; )
                                s = n,
                                e = r,
                                s.flags &= 14680066,
                                i = s.alternate,
                                i === null ? (s.childLanes = 0,
                                s.lanes = e,
                                s.child = null,
                                s.subtreeFlags = 0,
                                s.memoizedProps = null,
                                s.memoizedState = null,
                                s.updateQueue = null,
                                s.dependencies = null,
                                s.stateNode = null) : (s.childLanes = i.childLanes,
                                s.lanes = i.lanes,
                                s.child = i.child,
                                s.subtreeFlags = 0,
                                s.deletions = null,
                                s.memoizedProps = i.memoizedProps,
                                s.memoizedState = i.memoizedState,
                                s.updateQueue = i.updateQueue,
                                s.type = i.type,
                                e = i.dependencies,
                                s.dependencies = e === null ? null : {
                                    lanes: e.lanes,
                                    firstContext: e.firstContext
                                }),
                                n = n.sibling;
                            return ue(xe, xe.current & 1 | 2),
                            t.child
                        }
                        e = e.sibling
                    }
                s.tail !== null && ke() > Zo && (t.flags |= 128,
                r = !0,
                Ps(s, !1),
                t.lanes = 4194304)
            }
        else {
            if (!r)
                if (e = ol(i),
                e !== null) {
                    if (t.flags |= 128,
                    r = !0,
                    n = e.updateQueue,
                    n !== null && (t.updateQueue = n,
                    t.flags |= 4),
                    Ps(s, !0),
                    s.tail === null && s.tailMode === "hidden" && !i.alternate && !ve)
                        return He(t),
                        null
                } else
                    2 * ke() - s.renderingStartTime > Zo && n !== 1073741824 && (t.flags |= 128,
                    r = !0,
                    Ps(s, !1),
                    t.lanes = 4194304);
            s.isBackwards ? (i.sibling = t.child,
            t.child = i) : (n = s.last,
            n !== null ? n.sibling = i : t.child = i,
            s.last = i)
        }
        return s.tail !== null ? (t = s.tail,
        s.rendering = t,
        s.tail = t.sibling,
        s.renderingStartTime = ke(),
        t.sibling = null,
        n = xe.current,
        ue(xe, r ? n & 1 | 2 : n & 1),
        t) : (He(t),
        null);
    case 22:
    case 23:
        return Xf(),
        r = t.memoizedState !== null,
        e !== null && e.memoizedState !== null !== r && (t.flags |= 8192),
        r && t.mode & 1 ? ct & 1073741824 && (He(t),
        t.subtreeFlags & 6 && (t.flags |= 8192)) : He(t),
        null;
    case 24:
        return null;
    case 25:
        return null
    }
    throw Error(j(156, t.tag))
}
function eT(e, t) {
    switch (Af(t),
    t.tag) {
    case 1:
        return lt(t.type) && qa(),
        e = t.flags,
        e & 65536 ? (t.flags = e & -65537 | 128,
        t) : null;
    case 3:
        return Xo(),
        he(at),
        he(Qe),
        Vf(),
        e = t.flags,
        e & 65536 && !(e & 128) ? (t.flags = e & -65537 | 128,
        t) : null;
    case 5:
        return Ff(t),
        null;
    case 13:
        if (he(xe),
        e = t.memoizedState,
        e !== null && e.dehydrated !== null) {
            if (t.alternate === null)
                throw Error(j(340));
            Yo()
        }
        return e = t.flags,
        e & 65536 ? (t.flags = e & -65537 | 128,
        t) : null;
    case 19:
        return he(xe),
        null;
    case 4:
        return Xo(),
        null;
    case 10:
        return If(t.type._context),
        null;
    case 22:
    case 23:
        return Xf(),
        null;
    case 24:
        return null;
    default:
        return null
    }
}
var sa = !1
  , Ge = !1
  , tT = typeof WeakSet == "function" ? WeakSet : Set
  , B = null;
function So(e, t) {
    var n = e.ref;
    if (n !== null)
        if (typeof n == "function")
            try {
                n(null)
            } catch (r) {
                Pe(e, t, r)
            }
        else
            n.current = null
}
function ld(e, t, n) {
    try {
        n()
    } catch (r) {
        Pe(e, t, r)
    }
}
var um = !1;
function nT(e, t) {
    if (Hc = Ga,
    e = Vy(),
    kf(e)) {
        if ("selectionStart"in e)
            var n = {
                start: e.selectionStart,
                end: e.selectionEnd
            };
        else
            e: {
                n = (n = e.ownerDocument) && n.defaultView || window;
                var r = n.getSelection && n.getSelection();
                if (r && r.rangeCount !== 0) {
                    n = r.anchorNode;
                    var o = r.anchorOffset
                      , s = r.focusNode;
                    r = r.focusOffset;
                    try {
                        n.nodeType,
                        s.nodeType
                    } catch {
                        n = null;
                        break e
                    }
                    var i = 0
                      , a = -1
                      , l = -1
                      , u = 0
                      , c = 0
                      , d = e
                      , f = null;
                    t: for (; ; ) {
                        for (var h; d !== n || o !== 0 && d.nodeType !== 3 || (a = i + o),
                        d !== s || r !== 0 && d.nodeType !== 3 || (l = i + r),
                        d.nodeType === 3 && (i += d.nodeValue.length),
                        (h = d.firstChild) !== null; )
                            f = d,
                            d = h;
                        for (; ; ) {
                            if (d === e)
                                break t;
                            if (f === n && ++u === o && (a = i),
                            f === s && ++c === r && (l = i),
                            (h = d.nextSibling) !== null)
                                break;
                            d = f,
                            f = d.parentNode
                        }
                        d = h
                    }
                    n = a === -1 || l === -1 ? null : {
                        start: a,
                        end: l
                    }
                } else
                    n = null
            }
        n = n || {
            start: 0,
            end: 0
        }
    } else
        n = null;
    for (Kc = {
        focusedElem: e,
        selectionRange: n
    },
    Ga = !1,
    B = t; B !== null; )
        if (t = B,
        e = t.child,
        (t.subtreeFlags & 1028) !== 0 && e !== null)
            e.return = t,
            B = e;
        else
            for (; B !== null; ) {
                t = B;
                try {
                    var S = t.alternate;
                    if (t.flags & 1024)
                        switch (t.tag) {
                        case 0:
                        case 11:
                        case 15:
                            break;
                        case 1:
                            if (S !== null) {
                                var p = S.memoizedProps
                                  , w = S.memoizedState
                                  , v = t.stateNode
                                  , g = v.getSnapshotBeforeUpdate(t.elementType === t.type ? p : Ft(t.type, p), w);
                                v.__reactInternalSnapshotBeforeUpdate = g
                            }
                            break;
                        case 3:
                            var x = t.stateNode.containerInfo;
                            x.nodeType === 1 ? x.textContent = "" : x.nodeType === 9 && x.documentElement && x.removeChild(x.documentElement);
                            break;
                        case 5:
                        case 6:
                        case 4:
                        case 17:
                            break;
                        default:
                            throw Error(j(163))
                        }
                } catch (C) {
                    Pe(t, t.return, C)
                }
                if (e = t.sibling,
                e !== null) {
                    e.return = t.return,
                    B = e;
                    break
                }
                B = t.return
            }
    return S = um,
    um = !1,
    S
}
function Ks(e, t, n) {
    var r = t.updateQueue;
    if (r = r !== null ? r.lastEffect : null,
    r !== null) {
        var o = r = r.next;
        do {
            if ((o.tag & e) === e) {
                var s = o.destroy;
                o.destroy = void 0,
                s !== void 0 && ld(t, n, s)
            }
            o = o.next
        } while (o !== r)
    }
}
function Bl(e, t) {
    if (t = t.updateQueue,
    t = t !== null ? t.lastEffect : null,
    t !== null) {
        var n = t = t.next;
        do {
            if ((n.tag & e) === e) {
                var r = n.create;
                n.destroy = r()
            }
            n = n.next
        } while (n !== t)
    }
}
function ud(e) {
    var t = e.ref;
    if (t !== null) {
        var n = e.stateNode;
        switch (e.tag) {
        case 5:
            e = n;
            break;
        default:
            e = n
        }
        typeof t == "function" ? t(e) : t.current = e
    }
}
function O0(e) {
    var t = e.alternate;
    t !== null && (e.alternate = null,
    O0(t)),
    e.child = null,
    e.deletions = null,
    e.sibling = null,
    e.tag === 5 && (t = e.stateNode,
    t !== null && (delete t[rn],
    delete t[ci],
    delete t[Qc],
    delete t[FE],
    delete t[VE])),
    e.stateNode = null,
    e.return = null,
    e.dependencies = null,
    e.memoizedProps = null,
    e.memoizedState = null,
    e.pendingProps = null,
    e.stateNode = null,
    e.updateQueue = null
}
function L0(e) {
    return e.tag === 5 || e.tag === 3 || e.tag === 4
}
function cm(e) {
    e: for (; ; ) {
        for (; e.sibling === null; ) {
            if (e.return === null || L0(e.return))
                return null;
            e = e.return
        }
        for (e.sibling.return = e.return,
        e = e.sibling; e.tag !== 5 && e.tag !== 6 && e.tag !== 18; ) {
            if (e.flags & 2 || e.child === null || e.tag === 4)
                continue e;
            e.child.return = e,
            e = e.child
        }
        if (!(e.flags & 2))
            return e.stateNode
    }
}
function cd(e, t, n) {
    var r = e.tag;
    if (r === 5 || r === 6)
        e = e.stateNode,
        t ? n.nodeType === 8 ? n.parentNode.insertBefore(e, t) : n.insertBefore(e, t) : (n.nodeType === 8 ? (t = n.parentNode,
        t.insertBefore(e, n)) : (t = n,
        t.appendChild(e)),
        n = n._reactRootContainer,
        n != null || t.onclick !== null || (t.onclick = Xa));
    else if (r !== 4 && (e = e.child,
    e !== null))
        for (cd(e, t, n),
        e = e.sibling; e !== null; )
            cd(e, t, n),
            e = e.sibling
}
function dd(e, t, n) {
    var r = e.tag;
    if (r === 5 || r === 6)
        e = e.stateNode,
        t ? n.insertBefore(e, t) : n.appendChild(e);
    else if (r !== 4 && (e = e.child,
    e !== null))
        for (dd(e, t, n),
        e = e.sibling; e !== null; )
            dd(e, t, n),
            e = e.sibling
}
var _e = null
  , zt = !1;
function On(e, t, n) {
    for (n = n.child; n !== null; )
        _0(e, t, n),
        n = n.sibling
}
function _0(e, t, n) {
    if (an && typeof an.onCommitFiberUnmount == "function")
        try {
            an.onCommitFiberUnmount(jl, n)
        } catch {}
    switch (n.tag) {
    case 5:
        Ge || So(n, t);
    case 6:
        var r = _e
          , o = zt;
        _e = null,
        On(e, t, n),
        _e = r,
        zt = o,
        _e !== null && (zt ? (e = _e,
        n = n.stateNode,
        e.nodeType === 8 ? e.parentNode.removeChild(n) : e.removeChild(n)) : _e.removeChild(n.stateNode));
        break;
    case 18:
        _e !== null && (zt ? (e = _e,
        n = n.stateNode,
        e.nodeType === 8 ? Lu(e.parentNode, n) : e.nodeType === 1 && Lu(e, n),
        si(e)) : Lu(_e, n.stateNode));
        break;
    case 4:
        r = _e,
        o = zt,
        _e = n.stateNode.containerInfo,
        zt = !0,
        On(e, t, n),
        _e = r,
        zt = o;
        break;
    case 0:
    case 11:
    case 14:
    case 15:
        if (!Ge && (r = n.updateQueue,
        r !== null && (r = r.lastEffect,
        r !== null))) {
            o = r = r.next;
            do {
                var s = o
                  , i = s.destroy;
                s = s.tag,
                i !== void 0 && (s & 2 || s & 4) && ld(n, t, i),
                o = o.next
            } while (o !== r)
        }
        On(e, t, n);
        break;
    case 1:
        if (!Ge && (So(n, t),
        r = n.stateNode,
        typeof r.componentWillUnmount == "function"))
            try {
                r.props = n.memoizedProps,
                r.state = n.memoizedState,
                r.componentWillUnmount()
            } catch (a) {
                Pe(n, t, a)
            }
        On(e, t, n);
        break;
    case 21:
        On(e, t, n);
        break;
    case 22:
        n.mode & 1 ? (Ge = (r = Ge) || n.memoizedState !== null,
        On(e, t, n),
        Ge = r) : On(e, t, n);
        break;
    default:
        On(e, t, n)
    }
}
function dm(e) {
    var t = e.updateQueue;
    if (t !== null) {
        e.updateQueue = null;
        var n = e.stateNode;
        n === null && (n = e.stateNode = new tT),
        t.forEach(function(r) {
            var o = dT.bind(null, e, r);
            n.has(r) || (n.add(r),
            r.then(o, o))
        })
    }
}
function Dt(e, t) {
    var n = t.deletions;
    if (n !== null)
        for (var r = 0; r < n.length; r++) {
            var o = n[r];
            try {
                var s = e
                  , i = t
                  , a = i;
                e: for (; a !== null; ) {
                    switch (a.tag) {
                    case 5:
                        _e = a.stateNode,
                        zt = !1;
                        break e;
                    case 3:
                        _e = a.stateNode.containerInfo,
                        zt = !0;
                        break e;
                    case 4:
                        _e = a.stateNode.containerInfo,
                        zt = !0;
                        break e
                    }
                    a = a.return
                }
                if (_e === null)
                    throw Error(j(160));
                _0(s, i, o),
                _e = null,
                zt = !1;
                var l = o.alternate;
                l !== null && (l.return = null),
                o.return = null
            } catch (u) {
                Pe(o, t, u)
            }
        }
    if (t.subtreeFlags & 12854)
        for (t = t.child; t !== null; )
            F0(t, e),
            t = t.sibling
}
function F0(e, t) {
    var n = e.alternate
      , r = e.flags;
    switch (e.tag) {
    case 0:
    case 11:
    case 14:
    case 15:
        if (Dt(t, e),
        Zt(e),
        r & 4) {
            try {
                Ks(3, e, e.return),
                Bl(3, e)
            } catch (p) {
                Pe(e, e.return, p)
            }
            try {
                Ks(5, e, e.return)
            } catch (p) {
                Pe(e, e.return, p)
            }
        }
        break;
    case 1:
        Dt(t, e),
        Zt(e),
        r & 512 && n !== null && So(n, n.return);
        break;
    case 5:
        if (Dt(t, e),
        Zt(e),
        r & 512 && n !== null && So(n, n.return),
        e.flags & 32) {
            var o = e.stateNode;
            try {
                ti(o, "")
            } catch (p) {
                Pe(e, e.return, p)
            }
        }
        if (r & 4 && (o = e.stateNode,
        o != null)) {
            var s = e.memoizedProps
              , i = n !== null ? n.memoizedProps : s
              , a = e.type
              , l = e.updateQueue;
            if (e.updateQueue = null,
            l !== null)
                try {
                    a === "input" && s.type === "radio" && s.name != null && iy(o, s),
                    Oc(a, i);
                    var u = Oc(a, s);
                    for (i = 0; i < l.length; i += 2) {
                        var c = l[i]
                          , d = l[i + 1];
                        c === "style" ? dy(o, d) : c === "dangerouslySetInnerHTML" ? uy(o, d) : c === "children" ? ti(o, d) : mf(o, c, d, u)
                    }
                    switch (a) {
                    case "input":
                        Ac(o, s);
                        break;
                    case "textarea":
                        ay(o, s);
                        break;
                    case "select":
                        var f = o._wrapperState.wasMultiple;
                        o._wrapperState.wasMultiple = !!s.multiple;
                        var h = s.value;
                        h != null ? Ro(o, !!s.multiple, h, !1) : f !== !!s.multiple && (s.defaultValue != null ? Ro(o, !!s.multiple, s.defaultValue, !0) : Ro(o, !!s.multiple, s.multiple ? [] : "", !1))
                    }
                    o[ci] = s
                } catch (p) {
                    Pe(e, e.return, p)
                }
        }
        break;
    case 6:
        if (Dt(t, e),
        Zt(e),
        r & 4) {
            if (e.stateNode === null)
                throw Error(j(162));
            o = e.stateNode,
            s = e.memoizedProps;
            try {
                o.nodeValue = s
            } catch (p) {
                Pe(e, e.return, p)
            }
        }
        break;
    case 3:
        if (Dt(t, e),
        Zt(e),
        r & 4 && n !== null && n.memoizedState.isDehydrated)
            try {
                si(t.containerInfo)
            } catch (p) {
                Pe(e, e.return, p)
            }
        break;
    case 4:
        Dt(t, e),
        Zt(e);
        break;
    case 13:
        Dt(t, e),
        Zt(e),
        o = e.child,
        o.flags & 8192 && (s = o.memoizedState !== null,
        o.stateNode.isHidden = s,
        !s || o.alternate !== null && o.alternate.memoizedState !== null || (Yf = ke())),
        r & 4 && dm(e);
        break;
    case 22:
        if (c = n !== null && n.memoizedState !== null,
        e.mode & 1 ? (Ge = (u = Ge) || c,
        Dt(t, e),
        Ge = u) : Dt(t, e),
        Zt(e),
        r & 8192) {
            if (u = e.memoizedState !== null,
            (e.stateNode.isHidden = u) && !c && e.mode & 1)
                for (B = e,
                c = e.child; c !== null; ) {
                    for (d = B = c; B !== null; ) {
                        switch (f = B,
                        h = f.child,
                        f.tag) {
                        case 0:
                        case 11:
                        case 14:
                        case 15:
                            Ks(4, f, f.return);
                            break;
                        case 1:
                            So(f, f.return);
                            var S = f.stateNode;
                            if (typeof S.componentWillUnmount == "function") {
                                r = f,
                                n = f.return;
                                try {
                                    t = r,
                                    S.props = t.memoizedProps,
                                    S.state = t.memoizedState,
                                    S.componentWillUnmount()
                                } catch (p) {
                                    Pe(r, n, p)
                                }
                            }
                            break;
                        case 5:
                            So(f, f.return);
                            break;
                        case 22:
                            if (f.memoizedState !== null) {
                                hm(d);
                                continue
                            }
                        }
                        h !== null ? (h.return = f,
                        B = h) : hm(d)
                    }
                    c = c.sibling
                }
            e: for (c = null,
            d = e; ; ) {
                if (d.tag === 5) {
                    if (c === null) {
                        c = d;
                        try {
                            o = d.stateNode,
                            u ? (s = o.style,
                            typeof s.setProperty == "function" ? s.setProperty("display", "none", "important") : s.display = "none") : (a = d.stateNode,
                            l = d.memoizedProps.style,
                            i = l != null && l.hasOwnProperty("display") ? l.display : null,
                            a.style.display = cy("display", i))
                        } catch (p) {
                            Pe(e, e.return, p)
                        }
                    }
                } else if (d.tag === 6) {
                    if (c === null)
                        try {
                            d.stateNode.nodeValue = u ? "" : d.memoizedProps
                        } catch (p) {
                            Pe(e, e.return, p)
                        }
                } else if ((d.tag !== 22 && d.tag !== 23 || d.memoizedState === null || d === e) && d.child !== null) {
                    d.child.return = d,
                    d = d.child;
                    continue
                }
                if (d === e)
                    break e;
                for (; d.sibling === null; ) {
                    if (d.return === null || d.return === e)
                        break e;
                    c === d && (c = null),
                    d = d.return
                }
                c === d && (c = null),
                d.sibling.return = d.return,
                d = d.sibling
            }
        }
        break;
    case 19:
        Dt(t, e),
        Zt(e),
        r & 4 && dm(e);
        break;
    case 21:
        break;
    default:
        Dt(t, e),
        Zt(e)
    }
}
function Zt(e) {
    var t = e.flags;
    if (t & 2) {
        try {
            e: {
                for (var n = e.return; n !== null; ) {
                    if (L0(n)) {
                        var r = n;
                        break e
                    }
                    n = n.return
                }
                throw Error(j(160))
            }
            switch (r.tag) {
            case 5:
                var o = r.stateNode;
                r.flags & 32 && (ti(o, ""),
                r.flags &= -33);
                var s = cm(e);
                dd(e, s, o);
                break;
            case 3:
            case 4:
                var i = r.stateNode.containerInfo
                  , a = cm(e);
                cd(e, a, i);
                break;
            default:
                throw Error(j(161))
            }
        } catch (l) {
            Pe(e, e.return, l)
        }
        e.flags &= -3
    }
    t & 4096 && (e.flags &= -4097)
}
function rT(e, t, n) {
    B = e,
    V0(e)
}
function V0(e, t, n) {
    for (var r = (e.mode & 1) !== 0; B !== null; ) {
        var o = B
          , s = o.child;
        if (o.tag === 22 && r) {
            var i = o.memoizedState !== null || sa;
            if (!i) {
                var a = o.alternate
                  , l = a !== null && a.memoizedState !== null || Ge;
                a = sa;
                var u = Ge;
                if (sa = i,
                (Ge = l) && !u)
                    for (B = o; B !== null; )
                        i = B,
                        l = i.child,
                        i.tag === 22 && i.memoizedState !== null ? pm(o) : l !== null ? (l.return = i,
                        B = l) : pm(o);
                for (; s !== null; )
                    B = s,
                    V0(s),
                    s = s.sibling;
                B = o,
                sa = a,
                Ge = u
            }
            fm(e)
        } else
            o.subtreeFlags & 8772 && s !== null ? (s.return = o,
            B = s) : fm(e)
    }
}
function fm(e) {
    for (; B !== null; ) {
        var t = B;
        if (t.flags & 8772) {
            var n = t.alternate;
            try {
                if (t.flags & 8772)
                    switch (t.tag) {
                    case 0:
                    case 11:
                    case 15:
                        Ge || Bl(5, t);
                        break;
                    case 1:
                        var r = t.stateNode;
                        if (t.flags & 4 && !Ge)
                            if (n === null)
                                r.componentDidMount();
                            else {
                                var o = t.elementType === t.type ? n.memoizedProps : Ft(t.type, n.memoizedProps);
                                r.componentDidUpdate(o, n.memoizedState, r.__reactInternalSnapshotBeforeUpdate)
                            }
                        var s = t.updateQueue;
                        s !== null && Xp(t, s, r);
                        break;
                    case 3:
                        var i = t.updateQueue;
                        if (i !== null) {
                            if (n = null,
                            t.child !== null)
                                switch (t.child.tag) {
                                case 5:
                                    n = t.child.stateNode;
                                    break;
                                case 1:
                                    n = t.child.stateNode
                                }
                            Xp(t, i, n)
                        }
                        break;
                    case 5:
                        var a = t.stateNode;
                        if (n === null && t.flags & 4) {
                            n = a;
                            var l = t.memoizedProps;
                            switch (t.type) {
                            case "button":
                            case "input":
                            case "select":
                            case "textarea":
                                l.autoFocus && n.focus();
                                break;
                            case "img":
                                l.src && (n.src = l.src)
                            }
                        }
                        break;
                    case 6:
                        break;
                    case 4:
                        break;
                    case 12:
                        break;
                    case 13:
                        if (t.memoizedState === null) {
                            var u = t.alternate;
                            if (u !== null) {
                                var c = u.memoizedState;
                                if (c !== null) {
                                    var d = c.dehydrated;
                                    d !== null && si(d)
                                }
                            }
                        }
                        break;
                    case 19:
                    case 17:
                    case 21:
                    case 22:
                    case 23:
                    case 25:
                        break;
                    default:
                        throw Error(j(163))
                    }
                Ge || t.flags & 512 && ud(t)
            } catch (f) {
                Pe(t, t.return, f)
            }
        }
        if (t === e) {
            B = null;
            break
        }
        if (n = t.sibling,
        n !== null) {
            n.return = t.return,
            B = n;
            break
        }
        B = t.return
    }
}
function hm(e) {
    for (; B !== null; ) {
        var t = B;
        if (t === e) {
            B = null;
            break
        }
        var n = t.sibling;
        if (n !== null) {
            n.return = t.return,
            B = n;
            break
        }
        B = t.return
    }
}
function pm(e) {
    for (; B !== null; ) {
        var t = B;
        try {
            switch (t.tag) {
            case 0:
            case 11:
            case 15:
                var n = t.return;
                try {
                    Bl(4, t)
                } catch (l) {
                    Pe(t, n, l)
                }
                break;
            case 1:
                var r = t.stateNode;
                if (typeof r.componentDidMount == "function") {
                    var o = t.return;
                    try {
                        r.componentDidMount()
                    } catch (l) {
                        Pe(t, o, l)
                    }
                }
                var s = t.return;
                try {
                    ud(t)
                } catch (l) {
                    Pe(t, s, l)
                }
                break;
            case 5:
                var i = t.return;
                try {
                    ud(t)
                } catch (l) {
                    Pe(t, i, l)
                }
            }
        } catch (l) {
            Pe(t, t.return, l)
        }
        if (t === e) {
            B = null;
            break
        }
        var a = t.sibling;
        if (a !== null) {
            a.return = t.return,
            B = a;
            break
        }
        B = t.return
    }
}
var oT = Math.ceil
  , al = An.ReactCurrentDispatcher
  , Kf = An.ReactCurrentOwner
  , Pt = An.ReactCurrentBatchConfig
  , te = 0
  , Le = null
  , Ae = null
  , Ve = 0
  , ct = 0
  , Co = mr(0)
  , De = 0
  , gi = null
  , Kr = 0
  , $l = 0
  , Gf = 0
  , Gs = null
  , st = null
  , Yf = 0
  , Zo = 1 / 0
  , vn = null
  , ll = !1
  , fd = null
  , sr = null
  , ia = !1
  , qn = null
  , ul = 0
  , Ys = 0
  , hd = null
  , Aa = -1
  , Ma = 0;
function tt() {
    return te & 6 ? ke() : Aa !== -1 ? Aa : Aa = ke()
}
function ir(e) {
    return e.mode & 1 ? te & 2 && Ve !== 0 ? Ve & -Ve : $E.transition !== null ? (Ma === 0 && (Ma = by()),
    Ma) : (e = ae,
    e !== 0 || (e = window.event,
    e = e === void 0 ? 16 : Ay(e.type)),
    e) : 1
}
function Ht(e, t, n, r) {
    if (50 < Ys)
        throw Ys = 0,
        hd = null,
        Error(j(185));
    Mi(e, n, r),
    (!(te & 2) || e !== Le) && (e === Le && (!(te & 2) && ($l |= n),
    De === 4 && Wn(e, Ve)),
    ut(e, r),
    n === 1 && te === 0 && !(t.mode & 1) && (Zo = ke() + 500,
    _l && gr()))
}
function ut(e, t) {
    var n = e.callbackNode;
    $b(e, t);
    var r = Ka(e, e === Le ? Ve : 0);
    if (r === 0)
        n !== null && bp(n),
        e.callbackNode = null,
        e.callbackPriority = 0;
    else if (t = r & -r,
    e.callbackPriority !== t) {
        if (n != null && bp(n),
        t === 1)
            e.tag === 0 ? BE(mm.bind(null, e)) : Qy(mm.bind(null, e)),
            LE(function() {
                !(te & 6) && gr()
            }),
            n = null;
        else {
            switch (Ey(r)) {
            case 1:
                n = wf;
                break;
            case 4:
                n = Sy;
                break;
            case 16:
                n = Ha;
                break;
            case 536870912:
                n = Cy;
                break;
            default:
                n = Ha
            }
            n = G0(n, B0.bind(null, e))
        }
        e.callbackPriority = t,
        e.callbackNode = n
    }
}
function B0(e, t) {
    if (Aa = -1,
    Ma = 0,
    te & 6)
        throw Error(j(327));
    var n = e.callbackNode;
    if (jo() && e.callbackNode !== n)
        return null;
    var r = Ka(e, e === Le ? Ve : 0);
    if (r === 0)
        return null;
    if (r & 30 || r & e.expiredLanes || t)
        t = cl(e, r);
    else {
        t = r;
        var o = te;
        te |= 2;
        var s = z0();
        (Le !== e || Ve !== t) && (vn = null,
        Zo = ke() + 500,
        Vr(e, t));
        do
            try {
                aT();
                break
            } catch (a) {
                $0(e, a)
            }
        while (!0);
        Df(),
        al.current = s,
        te = o,
        Ae !== null ? t = 0 : (Le = null,
        Ve = 0,
        t = De)
    }
    if (t !== 0) {
        if (t === 2 && (o = Bc(e),
        o !== 0 && (r = o,
        t = pd(e, o))),
        t === 1)
            throw n = gi,
            Vr(e, 0),
            Wn(e, r),
            ut(e, ke()),
            n;
        if (t === 6)
            Wn(e, r);
        else {
            if (o = e.current.alternate,
            !(r & 30) && !sT(o) && (t = cl(e, r),
            t === 2 && (s = Bc(e),
            s !== 0 && (r = s,
            t = pd(e, s))),
            t === 1))
                throw n = gi,
                Vr(e, 0),
                Wn(e, r),
                ut(e, ke()),
                n;
            switch (e.finishedWork = o,
            e.finishedLanes = r,
            t) {
            case 0:
            case 1:
                throw Error(j(345));
            case 2:
                Pr(e, st, vn);
                break;
            case 3:
                if (Wn(e, r),
                (r & 130023424) === r && (t = Yf + 500 - ke(),
                10 < t)) {
                    if (Ka(e, 0) !== 0)
                        break;
                    if (o = e.suspendedLanes,
                    (o & r) !== r) {
                        tt(),
                        e.pingedLanes |= e.suspendedLanes & o;
                        break
                    }
                    e.timeoutHandle = Yc(Pr.bind(null, e, st, vn), t);
                    break
                }
                Pr(e, st, vn);
                break;
            case 4:
                if (Wn(e, r),
                (r & 4194240) === r)
                    break;
                for (t = e.eventTimes,
                o = -1; 0 < r; ) {
                    var i = 31 - Wt(r);
                    s = 1 << i,
                    i = t[i],
                    i > o && (o = i),
                    r &= ~s
                }
                if (r = o,
                r = ke() - r,
                r = (120 > r ? 120 : 480 > r ? 480 : 1080 > r ? 1080 : 1920 > r ? 1920 : 3e3 > r ? 3e3 : 4320 > r ? 4320 : 1960 * oT(r / 1960)) - r,
                10 < r) {
                    e.timeoutHandle = Yc(Pr.bind(null, e, st, vn), r);
                    break
                }
                Pr(e, st, vn);
                break;
            case 5:
                Pr(e, st, vn);
                break;
            default:
                throw Error(j(329))
            }
        }
    }
    return ut(e, ke()),
    e.callbackNode === n ? B0.bind(null, e) : null
}
function pd(e, t) {
    var n = Gs;
    return e.current.memoizedState.isDehydrated && (Vr(e, t).flags |= 256),
    e = cl(e, t),
    e !== 2 && (t = st,
    st = n,
    t !== null && md(t)),
    e
}
function md(e) {
    st === null ? st = e : st.push.apply(st, e)
}
function sT(e) {
    for (var t = e; ; ) {
        if (t.flags & 16384) {
            var n = t.updateQueue;
            if (n !== null && (n = n.stores,
            n !== null))
                for (var r = 0; r < n.length; r++) {
                    var o = n[r]
                      , s = o.getSnapshot;
                    o = o.value;
                    try {
                        if (!Kt(s(), o))
                            return !1
                    } catch {
                        return !1
                    }
                }
        }
        if (n = t.child,
        t.subtreeFlags & 16384 && n !== null)
            n.return = t,
            t = n;
        else {
            if (t === e)
                break;
            for (; t.sibling === null; ) {
                if (t.return === null || t.return === e)
                    return !0;
                t = t.return
            }
            t.sibling.return = t.return,
            t = t.sibling
        }
    }
    return !0
}
function Wn(e, t) {
    for (t &= ~Gf,
    t &= ~$l,
    e.suspendedLanes |= t,
    e.pingedLanes &= ~t,
    e = e.expirationTimes; 0 < t; ) {
        var n = 31 - Wt(t)
          , r = 1 << n;
        e[n] = -1,
        t &= ~r
    }
}
function mm(e) {
    if (te & 6)
        throw Error(j(327));
    jo();
    var t = Ka(e, 0);
    if (!(t & 1))
        return ut(e, ke()),
        null;
    var n = cl(e, t);
    if (e.tag !== 0 && n === 2) {
        var r = Bc(e);
        r !== 0 && (t = r,
        n = pd(e, r))
    }
    if (n === 1)
        throw n = gi,
        Vr(e, 0),
        Wn(e, t),
        ut(e, ke()),
        n;
    if (n === 6)
        throw Error(j(345));
    return e.finishedWork = e.current.alternate,
    e.finishedLanes = t,
    Pr(e, st, vn),
    ut(e, ke()),
    null
}
function Qf(e, t) {
    var n = te;
    te |= 1;
    try {
        return e(t)
    } finally {
        te = n,
        te === 0 && (Zo = ke() + 500,
        _l && gr())
    }
}
function Gr(e) {
    qn !== null && qn.tag === 0 && !(te & 6) && jo();
    var t = te;
    te |= 1;
    var n = Pt.transition
      , r = ae;
    try {
        if (Pt.transition = null,
        ae = 1,
        e)
            return e()
    } finally {
        ae = r,
        Pt.transition = n,
        te = t,
        !(te & 6) && gr()
    }
}
function Xf() {
    ct = Co.current,
    he(Co)
}
function Vr(e, t) {
    e.finishedWork = null,
    e.finishedLanes = 0;
    var n = e.timeoutHandle;
    if (n !== -1 && (e.timeoutHandle = -1,
    OE(n)),
    Ae !== null)
        for (n = Ae.return; n !== null; ) {
            var r = n;
            switch (Af(r),
            r.tag) {
            case 1:
                r = r.type.childContextTypes,
                r != null && qa();
                break;
            case 3:
                Xo(),
                he(at),
                he(Qe),
                Vf();
                break;
            case 5:
                Ff(r);
                break;
            case 4:
                Xo();
                break;
            case 13:
                he(xe);
                break;
            case 19:
                he(xe);
                break;
            case 10:
                If(r.type._context);
                break;
            case 22:
            case 23:
                Xf()
            }
            n = n.return
        }
    if (Le = e,
    Ae = e = ar(e.current, null),
    Ve = ct = t,
    De = 0,
    gi = null,
    Gf = $l = Kr = 0,
    st = Gs = null,
    Nr !== null) {
        for (t = 0; t < Nr.length; t++)
            if (n = Nr[t],
            r = n.interleaved,
            r !== null) {
                n.interleaved = null;
                var o = r.next
                  , s = n.pending;
                if (s !== null) {
                    var i = s.next;
                    s.next = o,
                    r.next = i
                }
                n.pending = r
            }
        Nr = null
    }
    return e
}
function $0(e, t) {
    do {
        var n = Ae;
        try {
            if (Df(),
            Ra.current = il,
            sl) {
                for (var r = Se.memoizedState; r !== null; ) {
                    var o = r.queue;
                    o !== null && (o.pending = null),
                    r = r.next
                }
                sl = !1
            }
            if (Hr = 0,
            Oe = je = Se = null,
            Hs = !1,
            hi = 0,
            Kf.current = null,
            n === null || n.return === null) {
                De = 1,
                gi = t,
                Ae = null;
                break
            }
            e: {
                var s = e
                  , i = n.return
                  , a = n
                  , l = t;
                if (t = Ve,
                a.flags |= 32768,
                l !== null && typeof l == "object" && typeof l.then == "function") {
                    var u = l
                      , c = a
                      , d = c.tag;
                    if (!(c.mode & 1) && (d === 0 || d === 11 || d === 15)) {
                        var f = c.alternate;
                        f ? (c.updateQueue = f.updateQueue,
                        c.memoizedState = f.memoizedState,
                        c.lanes = f.lanes) : (c.updateQueue = null,
                        c.memoizedState = null)
                    }
                    var h = nm(i);
                    if (h !== null) {
                        h.flags &= -257,
                        rm(h, i, a, s, t),
                        h.mode & 1 && tm(s, u, t),
                        t = h,
                        l = u;
                        var S = t.updateQueue;
                        if (S === null) {
                            var p = new Set;
                            p.add(l),
                            t.updateQueue = p
                        } else
                            S.add(l);
                        break e
                    } else {
                        if (!(t & 1)) {
                            tm(s, u, t),
                            qf();
                            break e
                        }
                        l = Error(j(426))
                    }
                } else if (ve && a.mode & 1) {
                    var w = nm(i);
                    if (w !== null) {
                        !(w.flags & 65536) && (w.flags |= 256),
                        rm(w, i, a, s, t),
                        Mf(qo(l, a));
                        break e
                    }
                }
                s = l = qo(l, a),
                De !== 4 && (De = 2),
                Gs === null ? Gs = [s] : Gs.push(s),
                s = i;
                do {
                    switch (s.tag) {
                    case 3:
                        s.flags |= 65536,
                        t &= -t,
                        s.lanes |= t;
                        var v = E0(s, l, t);
                        Qp(s, v);
                        break e;
                    case 1:
                        a = l;
                        var g = s.type
                          , x = s.stateNode;
                        if (!(s.flags & 128) && (typeof g.getDerivedStateFromError == "function" || x !== null && typeof x.componentDidCatch == "function" && (sr === null || !sr.has(x)))) {
                            s.flags |= 65536,
                            t &= -t,
                            s.lanes |= t;
                            var C = T0(s, a, t);
                            Qp(s, C);
                            break e
                        }
                    }
                    s = s.return
                } while (s !== null)
            }
            W0(n)
        } catch (b) {
            t = b,
            Ae === n && n !== null && (Ae = n = n.return);
            continue
        }
        break
    } while (!0)
}
function z0() {
    var e = al.current;
    return al.current = il,
    e === null ? il : e
}
function qf() {
    (De === 0 || De === 3 || De === 2) && (De = 4),
    Le === null || !(Kr & 268435455) && !($l & 268435455) || Wn(Le, Ve)
}
function cl(e, t) {
    var n = te;
    te |= 2;
    var r = z0();
    (Le !== e || Ve !== t) && (vn = null,
    Vr(e, t));
    do
        try {
            iT();
            break
        } catch (o) {
            $0(e, o)
        }
    while (!0);
    if (Df(),
    te = n,
    al.current = r,
    Ae !== null)
        throw Error(j(261));
    return Le = null,
    Ve = 0,
    De
}
function iT() {
    for (; Ae !== null; )
        U0(Ae)
}
function aT() {
    for (; Ae !== null && !jb(); )
        U0(Ae)
}
function U0(e) {
    var t = K0(e.alternate, e, ct);
    e.memoizedProps = e.pendingProps,
    t === null ? W0(e) : Ae = t,
    Kf.current = null
}
function W0(e) {
    var t = e;
    do {
        var n = t.alternate;
        if (e = t.return,
        t.flags & 32768) {
            if (n = eT(n, t),
            n !== null) {
                n.flags &= 32767,
                Ae = n;
                return
            }
            if (e !== null)
                e.flags |= 32768,
                e.subtreeFlags = 0,
                e.deletions = null;
            else {
                De = 6,
                Ae = null;
                return
            }
        } else if (n = JE(n, t, ct),
        n !== null) {
            Ae = n;
            return
        }
        if (t = t.sibling,
        t !== null) {
            Ae = t;
            return
        }
        Ae = t = e
    } while (t !== null);
    De === 0 && (De = 5)
}
function Pr(e, t, n) {
    var r = ae
      , o = Pt.transition;
    try {
        Pt.transition = null,
        ae = 1,
        lT(e, t, n, r)
    } finally {
        Pt.transition = o,
        ae = r
    }
    return null
}
function lT(e, t, n, r) {
    do
        jo();
    while (qn !== null);
    if (te & 6)
        throw Error(j(327));
    n = e.finishedWork;
    var o = e.finishedLanes;
    if (n === null)
        return null;
    if (e.finishedWork = null,
    e.finishedLanes = 0,
    n === e.current)
        throw Error(j(177));
    e.callbackNode = null,
    e.callbackPriority = 0;
    var s = n.lanes | n.childLanes;
    if (zb(e, s),
    e === Le && (Ae = Le = null,
    Ve = 0),
    !(n.subtreeFlags & 2064) && !(n.flags & 2064) || ia || (ia = !0,
    G0(Ha, function() {
        return jo(),
        null
    })),
    s = (n.flags & 15990) !== 0,
    n.subtreeFlags & 15990 || s) {
        s = Pt.transition,
        Pt.transition = null;
        var i = ae;
        ae = 1;
        var a = te;
        te |= 4,
        Kf.current = null,
        nT(e, n),
        F0(n, e),
        kE(Kc),
        Ga = !!Hc,
        Kc = Hc = null,
        e.current = n,
        rT(n),
        Db(),
        te = a,
        ae = i,
        Pt.transition = s
    } else
        e.current = n;
    if (ia && (ia = !1,
    qn = e,
    ul = o),
    s = e.pendingLanes,
    s === 0 && (sr = null),
    Lb(n.stateNode),
    ut(e, ke()),
    t !== null)
        for (r = e.onRecoverableError,
        n = 0; n < t.length; n++)
            o = t[n],
            r(o.value, {
                componentStack: o.stack,
                digest: o.digest
            });
    if (ll)
        throw ll = !1,
        e = fd,
        fd = null,
        e;
    return ul & 1 && e.tag !== 0 && jo(),
    s = e.pendingLanes,
    s & 1 ? e === hd ? Ys++ : (Ys = 0,
    hd = e) : Ys = 0,
    gr(),
    null
}
function jo() {
    if (qn !== null) {
        var e = Ey(ul)
          , t = Pt.transition
          , n = ae;
        try {
            if (Pt.transition = null,
            ae = 16 > e ? 16 : e,
            qn === null)
                var r = !1;
            else {
                if (e = qn,
                qn = null,
                ul = 0,
                te & 6)
                    throw Error(j(331));
                var o = te;
                for (te |= 4,
                B = e.current; B !== null; ) {
                    var s = B
                      , i = s.child;
                    if (B.flags & 16) {
                        var a = s.deletions;
                        if (a !== null) {
                            for (var l = 0; l < a.length; l++) {
                                var u = a[l];
                                for (B = u; B !== null; ) {
                                    var c = B;
                                    switch (c.tag) {
                                    case 0:
                                    case 11:
                                    case 15:
                                        Ks(8, c, s)
                                    }
                                    var d = c.child;
                                    if (d !== null)
                                        d.return = c,
                                        B = d;
                                    else
                                        for (; B !== null; ) {
                                            c = B;
                                            var f = c.sibling
                                              , h = c.return;
                                            if (O0(c),
                                            c === u) {
                                                B = null;
                                                break
                                            }
                                            if (f !== null) {
                                                f.return = h,
                                                B = f;
                                                break
                                            }
                                            B = h
                                        }
                                }
                            }
                            var S = s.alternate;
                            if (S !== null) {
                                var p = S.child;
                                if (p !== null) {
                                    S.child = null;
                                    do {
                                        var w = p.sibling;
                                        p.sibling = null,
                                        p = w
                                    } while (p !== null)
                                }
                            }
                            B = s
                        }
                    }
                    if (s.subtreeFlags & 2064 && i !== null)
                        i.return = s,
                        B = i;
                    else
                        e: for (; B !== null; ) {
                            if (s = B,
                            s.flags & 2048)
                                switch (s.tag) {
                                case 0:
                                case 11:
                                case 15:
                                    Ks(9, s, s.return)
                                }
                            var v = s.sibling;
                            if (v !== null) {
                                v.return = s.return,
                                B = v;
                                break e
                            }
                            B = s.return
                        }
                }
                var g = e.current;
                for (B = g; B !== null; ) {
                    i = B;
                    var x = i.child;
                    if (i.subtreeFlags & 2064 && x !== null)
                        x.return = i,
                        B = x;
                    else
                        e: for (i = g; B !== null; ) {
                            if (a = B,
                            a.flags & 2048)
                                try {
                                    switch (a.tag) {
                                    case 0:
                                    case 11:
                                    case 15:
                                        Bl(9, a)
                                    }
                                } catch (b) {
                                    Pe(a, a.return, b)
                                }
                            if (a === i) {
                                B = null;
                                break e
                            }
                            var C = a.sibling;
                            if (C !== null) {
                                C.return = a.return,
                                B = C;
                                break e
                            }
                            B = a.return
                        }
                }
                if (te = o,
                gr(),
                an && typeof an.onPostCommitFiberRoot == "function")
                    try {
                        an.onPostCommitFiberRoot(jl, e)
                    } catch {}
                r = !0
            }
            return r
        } finally {
            ae = n,
            Pt.transition = t
        }
    }
    return !1
}
function gm(e, t, n) {
    t = qo(n, t),
    t = E0(e, t, 1),
    e = or(e, t, 1),
    t = tt(),
    e !== null && (Mi(e, 1, t),
    ut(e, t))
}
function Pe(e, t, n) {
    if (e.tag === 3)
        gm(e, e, n);
    else
        for (; t !== null; ) {
            if (t.tag === 3) {
                gm(t, e, n);
                break
            } else if (t.tag === 1) {
                var r = t.stateNode;
                if (typeof t.type.getDerivedStateFromError == "function" || typeof r.componentDidCatch == "function" && (sr === null || !sr.has(r))) {
                    e = qo(n, e),
                    e = T0(t, e, 1),
                    t = or(t, e, 1),
                    e = tt(),
                    t !== null && (Mi(t, 1, e),
                    ut(t, e));
                    break
                }
            }
            t = t.return
        }
}
function uT(e, t, n) {
    var r = e.pingCache;
    r !== null && r.delete(t),
    t = tt(),
    e.pingedLanes |= e.suspendedLanes & n,
    Le === e && (Ve & n) === n && (De === 4 || De === 3 && (Ve & 130023424) === Ve && 500 > ke() - Yf ? Vr(e, 0) : Gf |= n),
    ut(e, t)
}
function H0(e, t) {
    t === 0 && (e.mode & 1 ? (t = Xi,
    Xi <<= 1,
    !(Xi & 130023424) && (Xi = 4194304)) : t = 1);
    var n = tt();
    e = Tn(e, t),
    e !== null && (Mi(e, t, n),
    ut(e, n))
}
function cT(e) {
    var t = e.memoizedState
      , n = 0;
    t !== null && (n = t.retryLane),
    H0(e, n)
}
function dT(e, t) {
    var n = 0;
    switch (e.tag) {
    case 13:
        var r = e.stateNode
          , o = e.memoizedState;
        o !== null && (n = o.retryLane);
        break;
    case 19:
        r = e.stateNode;
        break;
    default:
        throw Error(j(314))
    }
    r !== null && r.delete(t),
    H0(e, n)
}
var K0;
K0 = function(e, t, n) {
    if (e !== null)
        if (e.memoizedProps !== t.pendingProps || at.current)
            it = !0;
        else {
            if (!(e.lanes & n) && !(t.flags & 128))
                return it = !1,
                ZE(e, t, n);
            it = !!(e.flags & 131072)
        }
    else
        it = !1,
        ve && t.flags & 1048576 && Xy(t, el, t.index);
    switch (t.lanes = 0,
    t.tag) {
    case 2:
        var r = t.type;
        Na(e, t),
        e = t.pendingProps;
        var o = Go(t, Qe.current);
        Mo(t, n),
        o = $f(null, t, r, e, o, n);
        var s = zf();
        return t.flags |= 1,
        typeof o == "object" && o !== null && typeof o.render == "function" && o.$$typeof === void 0 ? (t.tag = 1,
        t.memoizedState = null,
        t.updateQueue = null,
        lt(r) ? (s = !0,
        Za(t)) : s = !1,
        t.memoizedState = o.state !== null && o.state !== void 0 ? o.state : null,
        Lf(t),
        o.updater = Vl,
        t.stateNode = o,
        o._reactInternals = t,
        td(t, r, e, n),
        t = od(null, t, r, !0, s, n)) : (t.tag = 0,
        ve && s && Nf(t),
        qe(null, t, o, n),
        t = t.child),
        t;
    case 16:
        r = t.elementType;
        e: {
            switch (Na(e, t),
            e = t.pendingProps,
            o = r._init,
            r = o(r._payload),
            t.type = r,
            o = t.tag = hT(r),
            e = Ft(r, e),
            o) {
            case 0:
                t = rd(null, t, r, e, n);
                break e;
            case 1:
                t = im(null, t, r, e, n);
                break e;
            case 11:
                t = om(null, t, r, e, n);
                break e;
            case 14:
                t = sm(null, t, r, Ft(r.type, e), n);
                break e
            }
            throw Error(j(306, r, ""))
        }
        return t;
    case 0:
        return r = t.type,
        o = t.pendingProps,
        o = t.elementType === r ? o : Ft(r, o),
        rd(e, t, r, o, n);
    case 1:
        return r = t.type,
        o = t.pendingProps,
        o = t.elementType === r ? o : Ft(r, o),
        im(e, t, r, o, n);
    case 3:
        e: {
            if (N0(t),
            e === null)
                throw Error(j(387));
            r = t.pendingProps,
            s = t.memoizedState,
            o = s.element,
            n0(e, t),
            rl(t, r, null, n);
            var i = t.memoizedState;
            if (r = i.element,
            s.isDehydrated)
                if (s = {
                    element: r,
                    isDehydrated: !1,
                    cache: i.cache,
                    pendingSuspenseBoundaries: i.pendingSuspenseBoundaries,
                    transitions: i.transitions
                },
                t.updateQueue.baseState = s,
                t.memoizedState = s,
                t.flags & 256) {
                    o = qo(Error(j(423)), t),
                    t = am(e, t, r, n, o);
                    break e
                } else if (r !== o) {
                    o = qo(Error(j(424)), t),
                    t = am(e, t, r, n, o);
                    break e
                } else
                    for (ft = rr(t.stateNode.containerInfo.firstChild),
                    ht = t,
                    ve = !0,
                    Ut = null,
                    n = e0(t, null, r, n),
                    t.child = n; n; )
                        n.flags = n.flags & -3 | 4096,
                        n = n.sibling;
            else {
                if (Yo(),
                r === o) {
                    t = Pn(e, t, n);
                    break e
                }
                qe(e, t, r, n)
            }
            t = t.child
        }
        return t;
    case 5:
        return r0(t),
        e === null && Zc(t),
        r = t.type,
        o = t.pendingProps,
        s = e !== null ? e.memoizedProps : null,
        i = o.children,
        Gc(r, o) ? i = null : s !== null && Gc(r, s) && (t.flags |= 32),
        k0(e, t),
        qe(e, t, i, n),
        t.child;
    case 6:
        return e === null && Zc(t),
        null;
    case 13:
        return A0(e, t, n);
    case 4:
        return _f(t, t.stateNode.containerInfo),
        r = t.pendingProps,
        e === null ? t.child = Qo(t, null, r, n) : qe(e, t, r, n),
        t.child;
    case 11:
        return r = t.type,
        o = t.pendingProps,
        o = t.elementType === r ? o : Ft(r, o),
        om(e, t, r, o, n);
    case 7:
        return qe(e, t, t.pendingProps, n),
        t.child;
    case 8:
        return qe(e, t, t.pendingProps.children, n),
        t.child;
    case 12:
        return qe(e, t, t.pendingProps.children, n),
        t.child;
    case 10:
        e: {
            if (r = t.type._context,
            o = t.pendingProps,
            s = t.memoizedProps,
            i = o.value,
            ue(tl, r._currentValue),
            r._currentValue = i,
            s !== null)
                if (Kt(s.value, i)) {
                    if (s.children === o.children && !at.current) {
                        t = Pn(e, t, n);
                        break e
                    }
                } else
                    for (s = t.child,
                    s !== null && (s.return = t); s !== null; ) {
                        var a = s.dependencies;
                        if (a !== null) {
                            i = s.child;
                            for (var l = a.firstContext; l !== null; ) {
                                if (l.context === r) {
                                    if (s.tag === 1) {
                                        l = Cn(-1, n & -n),
                                        l.tag = 2;
                                        var u = s.updateQueue;
                                        if (u !== null) {
                                            u = u.shared;
                                            var c = u.pending;
                                            c === null ? l.next = l : (l.next = c.next,
                                            c.next = l),
                                            u.pending = l
                                        }
                                    }
                                    s.lanes |= n,
                                    l = s.alternate,
                                    l !== null && (l.lanes |= n),
                                    Jc(s.return, n, t),
                                    a.lanes |= n;
                                    break
                                }
                                l = l.next
                            }
                        } else if (s.tag === 10)
                            i = s.type === t.type ? null : s.child;
                        else if (s.tag === 18) {
                            if (i = s.return,
                            i === null)
                                throw Error(j(341));
                            i.lanes |= n,
                            a = i.alternate,
                            a !== null && (a.lanes |= n),
                            Jc(i, n, t),
                            i = s.sibling
                        } else
                            i = s.child;
                        if (i !== null)
                            i.return = s;
                        else
                            for (i = s; i !== null; ) {
                                if (i === t) {
                                    i = null;
                                    break
                                }
                                if (s = i.sibling,
                                s !== null) {
                                    s.return = i.return,
                                    i = s;
                                    break
                                }
                                i = i.return
                            }
                        s = i
                    }
            qe(e, t, o.children, n),
            t = t.child
        }
        return t;
    case 9:
        return o = t.type,
        r = t.pendingProps.children,
        Mo(t, n),
        o = kt(o),
        r = r(o),
        t.flags |= 1,
        qe(e, t, r, n),
        t.child;
    case 14:
        return r = t.type,
        o = Ft(r, t.pendingProps),
        o = Ft(r.type, o),
        sm(e, t, r, o, n);
    case 15:
        return P0(e, t, t.type, t.pendingProps, n);
    case 17:
        return r = t.type,
        o = t.pendingProps,
        o = t.elementType === r ? o : Ft(r, o),
        Na(e, t),
        t.tag = 1,
        lt(r) ? (e = !0,
        Za(t)) : e = !1,
        Mo(t, n),
        b0(t, r, o),
        td(t, r, o, n),
        od(null, t, r, !0, e, n);
    case 19:
        return M0(e, t, n);
    case 22:
        return R0(e, t, n)
    }
    throw Error(j(156, t.tag))
}
;
function G0(e, t) {
    return wy(e, t)
}
function fT(e, t, n, r) {
    this.tag = e,
    this.key = n,
    this.sibling = this.child = this.return = this.stateNode = this.type = this.elementType = null,
    this.index = 0,
    this.ref = null,
    this.pendingProps = t,
    this.dependencies = this.memoizedState = this.updateQueue = this.memoizedProps = null,
    this.mode = r,
    this.subtreeFlags = this.flags = 0,
    this.deletions = null,
    this.childLanes = this.lanes = 0,
    this.alternate = null
}
function Et(e, t, n, r) {
    return new fT(e,t,n,r)
}
function Zf(e) {
    return e = e.prototype,
    !(!e || !e.isReactComponent)
}
function hT(e) {
    if (typeof e == "function")
        return Zf(e) ? 1 : 0;
    if (e != null) {
        if (e = e.$$typeof,
        e === vf)
            return 11;
        if (e === yf)
            return 14
    }
    return 2
}
function ar(e, t) {
    var n = e.alternate;
    return n === null ? (n = Et(e.tag, t, e.key, e.mode),
    n.elementType = e.elementType,
    n.type = e.type,
    n.stateNode = e.stateNode,
    n.alternate = e,
    e.alternate = n) : (n.pendingProps = t,
    n.type = e.type,
    n.flags = 0,
    n.subtreeFlags = 0,
    n.deletions = null),
    n.flags = e.flags & 14680064,
    n.childLanes = e.childLanes,
    n.lanes = e.lanes,
    n.child = e.child,
    n.memoizedProps = e.memoizedProps,
    n.memoizedState = e.memoizedState,
    n.updateQueue = e.updateQueue,
    t = e.dependencies,
    n.dependencies = t === null ? null : {
        lanes: t.lanes,
        firstContext: t.firstContext
    },
    n.sibling = e.sibling,
    n.index = e.index,
    n.ref = e.ref,
    n
}
function ja(e, t, n, r, o, s) {
    var i = 2;
    if (r = e,
    typeof e == "function")
        Zf(e) && (i = 1);
    else if (typeof e == "string")
        i = 5;
    else
        e: switch (e) {
        case fo:
            return Br(n.children, o, s, t);
        case gf:
            i = 8,
            o |= 8;
            break;
        case Tc:
            return e = Et(12, n, t, o | 2),
            e.elementType = Tc,
            e.lanes = s,
            e;
        case Pc:
            return e = Et(13, n, t, o),
            e.elementType = Pc,
            e.lanes = s,
            e;
        case Rc:
            return e = Et(19, n, t, o),
            e.elementType = Rc,
            e.lanes = s,
            e;
        case ry:
            return zl(n, o, s, t);
        default:
            if (typeof e == "object" && e !== null)
                switch (e.$$typeof) {
                case ty:
                    i = 10;
                    break e;
                case ny:
                    i = 9;
                    break e;
                case vf:
                    i = 11;
                    break e;
                case yf:
                    i = 14;
                    break e;
                case $n:
                    i = 16,
                    r = null;
                    break e
                }
            throw Error(j(130, e == null ? e : typeof e, ""))
        }
    return t = Et(i, n, t, o),
    t.elementType = e,
    t.type = r,
    t.lanes = s,
    t
}
function Br(e, t, n, r) {
    return e = Et(7, e, r, t),
    e.lanes = n,
    e
}
function zl(e, t, n, r) {
    return e = Et(22, e, r, t),
    e.elementType = ry,
    e.lanes = n,
    e.stateNode = {
        isHidden: !1
    },
    e
}
function Wu(e, t, n) {
    return e = Et(6, e, null, t),
    e.lanes = n,
    e
}
function Hu(e, t, n) {
    return t = Et(4, e.children !== null ? e.children : [], e.key, t),
    t.lanes = n,
    t.stateNode = {
        containerInfo: e.containerInfo,
        pendingChildren: null,
        implementation: e.implementation
    },
    t
}
function pT(e, t, n, r, o) {
    this.tag = t,
    this.containerInfo = e,
    this.finishedWork = this.pingCache = this.current = this.pendingChildren = null,
    this.timeoutHandle = -1,
    this.callbackNode = this.pendingContext = this.context = null,
    this.callbackPriority = 0,
    this.eventTimes = Tu(0),
    this.expirationTimes = Tu(-1),
    this.entangledLanes = this.finishedLanes = this.mutableReadLanes = this.expiredLanes = this.pingedLanes = this.suspendedLanes = this.pendingLanes = 0,
    this.entanglements = Tu(0),
    this.identifierPrefix = r,
    this.onRecoverableError = o,
    this.mutableSourceEagerHydrationData = null
}
function Jf(e, t, n, r, o, s, i, a, l) {
    return e = new pT(e,t,n,a,l),
    t === 1 ? (t = 1,
    s === !0 && (t |= 8)) : t = 0,
    s = Et(3, null, null, t),
    e.current = s,
    s.stateNode = e,
    s.memoizedState = {
        element: r,
        isDehydrated: n,
        cache: null,
        transitions: null,
        pendingSuspenseBoundaries: null
    },
    Lf(s),
    e
}
function mT(e, t, n) {
    var r = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
    return {
        $$typeof: co,
        key: r == null ? null : "" + r,
        children: e,
        containerInfo: t,
        implementation: n
    }
}
function Y0(e) {
    if (!e)
        return ur;
    e = e._reactInternals;
    e: {
        if (Jr(e) !== e || e.tag !== 1)
            throw Error(j(170));
        var t = e;
        do {
            switch (t.tag) {
            case 3:
                t = t.stateNode.context;
                break e;
            case 1:
                if (lt(t.type)) {
                    t = t.stateNode.__reactInternalMemoizedMergedChildContext;
                    break e
                }
            }
            t = t.return
        } while (t !== null);
        throw Error(j(171))
    }
    if (e.tag === 1) {
        var n = e.type;
        if (lt(n))
            return Yy(e, n, t)
    }
    return t
}
function Q0(e, t, n, r, o, s, i, a, l) {
    return e = Jf(n, r, !0, e, o, s, i, a, l),
    e.context = Y0(null),
    n = e.current,
    r = tt(),
    o = ir(n),
    s = Cn(r, o),
    s.callback = t ?? null,
    or(n, s, o),
    e.current.lanes = o,
    Mi(e, o, r),
    ut(e, r),
    e
}
function Ul(e, t, n, r) {
    var o = t.current
      , s = tt()
      , i = ir(o);
    return n = Y0(n),
    t.context === null ? t.context = n : t.pendingContext = n,
    t = Cn(s, i),
    t.payload = {
        element: e
    },
    r = r === void 0 ? null : r,
    r !== null && (t.callback = r),
    e = or(o, t, i),
    e !== null && (Ht(e, o, i, s),
    Pa(e, o, i)),
    i
}
function dl(e) {
    if (e = e.current,
    !e.child)
        return null;
    switch (e.child.tag) {
    case 5:
        return e.child.stateNode;
    default:
        return e.child.stateNode
    }
}
function vm(e, t) {
    if (e = e.memoizedState,
    e !== null && e.dehydrated !== null) {
        var n = e.retryLane;
        e.retryLane = n !== 0 && n < t ? n : t
    }
}
function eh(e, t) {
    vm(e, t),
    (e = e.alternate) && vm(e, t)
}
function gT() {
    return null
}
var X0 = typeof reportError == "function" ? reportError : function(e) {
    console.error(e)
}
;
function th(e) {
    this._internalRoot = e
}
Wl.prototype.render = th.prototype.render = function(e) {
    var t = this._internalRoot;
    if (t === null)
        throw Error(j(409));
    Ul(e, t, null, null)
}
;
Wl.prototype.unmount = th.prototype.unmount = function() {
    var e = this._internalRoot;
    if (e !== null) {
        this._internalRoot = null;
        var t = e.containerInfo;
        Gr(function() {
            Ul(null, e, null, null)
        }),
        t[En] = null
    }
}
;
function Wl(e) {
    this._internalRoot = e
}
Wl.prototype.unstable_scheduleHydration = function(e) {
    if (e) {
        var t = Ry();
        e = {
            blockedOn: null,
            target: e,
            priority: t
        };
        for (var n = 0; n < Un.length && t !== 0 && t < Un[n].priority; n++)
            ;
        Un.splice(n, 0, e),
        n === 0 && Ny(e)
    }
}
;
function nh(e) {
    return !(!e || e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11)
}
function Hl(e) {
    return !(!e || e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11 && (e.nodeType !== 8 || e.nodeValue !== " react-mount-point-unstable "))
}
function ym() {}
function vT(e, t, n, r, o) {
    if (o) {
        if (typeof r == "function") {
            var s = r;
            r = function() {
                var u = dl(i);
                s.call(u)
            }
        }
        var i = Q0(t, r, e, 0, null, !1, !1, "", ym);
        return e._reactRootContainer = i,
        e[En] = i.current,
        li(e.nodeType === 8 ? e.parentNode : e),
        Gr(),
        i
    }
    for (; o = e.lastChild; )
        e.removeChild(o);
    if (typeof r == "function") {
        var a = r;
        r = function() {
            var u = dl(l);
            a.call(u)
        }
    }
    var l = Jf(e, 0, !1, null, null, !1, !1, "", ym);
    return e._reactRootContainer = l,
    e[En] = l.current,
    li(e.nodeType === 8 ? e.parentNode : e),
    Gr(function() {
        Ul(t, l, n, r)
    }),
    l
}
function Kl(e, t, n, r, o) {
    var s = n._reactRootContainer;
    if (s) {
        var i = s;
        if (typeof o == "function") {
            var a = o;
            o = function() {
                var l = dl(i);
                a.call(l)
            }
        }
        Ul(t, i, e, o)
    } else
        i = vT(n, t, e, o, r);
    return dl(i)
}
Ty = function(e) {
    switch (e.tag) {
    case 3:
        var t = e.stateNode;
        if (t.current.memoizedState.isDehydrated) {
            var n = Ds(t.pendingLanes);
            n !== 0 && (Sf(t, n | 1),
            ut(t, ke()),
            !(te & 6) && (Zo = ke() + 500,
            gr()))
        }
        break;
    case 13:
        Gr(function() {
            var r = Tn(e, 1);
            if (r !== null) {
                var o = tt();
                Ht(r, e, 1, o)
            }
        }),
        eh(e, 1)
    }
}
;
Cf = function(e) {
    if (e.tag === 13) {
        var t = Tn(e, 134217728);
        if (t !== null) {
            var n = tt();
            Ht(t, e, 134217728, n)
        }
        eh(e, 134217728)
    }
}
;
Py = function(e) {
    if (e.tag === 13) {
        var t = ir(e)
          , n = Tn(e, t);
        if (n !== null) {
            var r = tt();
            Ht(n, e, t, r)
        }
        eh(e, t)
    }
}
;
Ry = function() {
    return ae
}
;
ky = function(e, t) {
    var n = ae;
    try {
        return ae = e,
        t()
    } finally {
        ae = n
    }
}
;
_c = function(e, t, n) {
    switch (t) {
    case "input":
        if (Ac(e, n),
        t = n.name,
        n.type === "radio" && t != null) {
            for (n = e; n.parentNode; )
                n = n.parentNode;
            for (n = n.querySelectorAll("input[name=" + JSON.stringify("" + t) + '][type="radio"]'),
            t = 0; t < n.length; t++) {
                var r = n[t];
                if (r !== e && r.form === e.form) {
                    var o = Ll(r);
                    if (!o)
                        throw Error(j(90));
                    sy(r),
                    Ac(r, o)
                }
            }
        }
        break;
    case "textarea":
        ay(e, n);
        break;
    case "select":
        t = n.value,
        t != null && Ro(e, !!n.multiple, t, !1)
    }
}
;
py = Qf;
my = Gr;
var yT = {
    usingClientEntryPoint: !1,
    Events: [Di, go, Ll, fy, hy, Qf]
}
  , Rs = {
    findFiberByHostInstance: kr,
    bundleType: 0,
    version: "18.3.1",
    rendererPackageName: "react-dom"
}
  , xT = {
    bundleType: Rs.bundleType,
    version: Rs.version,
    rendererPackageName: Rs.rendererPackageName,
    rendererConfig: Rs.rendererConfig,
    overrideHookState: null,
    overrideHookStateDeletePath: null,
    overrideHookStateRenamePath: null,
    overrideProps: null,
    overridePropsDeletePath: null,
    overridePropsRenamePath: null,
    setErrorHandler: null,
    setSuspenseHandler: null,
    scheduleUpdate: null,
    currentDispatcherRef: An.ReactCurrentDispatcher,
    findHostInstanceByFiber: function(e) {
        return e = yy(e),
        e === null ? null : e.stateNode
    },
    findFiberByHostInstance: Rs.findFiberByHostInstance || gT,
    findHostInstancesForRefresh: null,
    scheduleRefresh: null,
    scheduleRoot: null,
    setRefreshHandler: null,
    getCurrentFiber: null,
    reconcilerVersion: "18.3.1-next-f1338f8080-20240426"
};
if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
    var aa = __REACT_DEVTOOLS_GLOBAL_HOOK__;
    if (!aa.isDisabled && aa.supportsFiber)
        try {
            jl = aa.inject(xT),
            an = aa
        } catch {}
}
gt.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = yT;
gt.createPortal = function(e, t) {
    var n = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
    if (!nh(t))
        throw Error(j(200));
    return mT(e, t, null, n)
}
;
gt.createRoot = function(e, t) {
    if (!nh(e))
        throw Error(j(299));
    var n = !1
      , r = ""
      , o = X0;
    return t != null && (t.unstable_strictMode === !0 && (n = !0),
    t.identifierPrefix !== void 0 && (r = t.identifierPrefix),
    t.onRecoverableError !== void 0 && (o = t.onRecoverableError)),
    t = Jf(e, 1, !1, null, null, n, !1, r, o),
    e[En] = t.current,
    li(e.nodeType === 8 ? e.parentNode : e),
    new th(t)
}
;
gt.findDOMNode = function(e) {
    if (e == null)
        return null;
    if (e.nodeType === 1)
        return e;
    var t = e._reactInternals;
    if (t === void 0)
        throw typeof e.render == "function" ? Error(j(188)) : (e = Object.keys(e).join(","),
        Error(j(268, e)));
    return e = yy(t),
    e = e === null ? null : e.stateNode,
    e
}
;
gt.flushSync = function(e) {
    return Gr(e)
}
;
gt.hydrate = function(e, t, n) {
    if (!Hl(t))
        throw Error(j(200));
    return Kl(null, e, t, !0, n)
}
;
gt.hydrateRoot = function(e, t, n) {
    if (!nh(e))
        throw Error(j(405));
    var r = n != null && n.hydratedSources || null
      , o = !1
      , s = ""
      , i = X0;
    if (n != null && (n.unstable_strictMode === !0 && (o = !0),
    n.identifierPrefix !== void 0 && (s = n.identifierPrefix),
    n.onRecoverableError !== void 0 && (i = n.onRecoverableError)),
    t = Q0(t, null, e, 1, n ?? null, o, !1, s, i),
    e[En] = t.current,
    li(e),
    r)
        for (e = 0; e < r.length; e++)
            n = r[e],
            o = n._getVersion,
            o = o(n._source),
            t.mutableSourceEagerHydrationData == null ? t.mutableSourceEagerHydrationData = [n, o] : t.mutableSourceEagerHydrationData.push(n, o);
    return new Wl(t)
}
;
gt.render = function(e, t, n) {
    if (!Hl(t))
        throw Error(j(200));
    return Kl(null, e, t, !1, n)
}
;
gt.unmountComponentAtNode = function(e) {
    if (!Hl(e))
        throw Error(j(40));
    return e._reactRootContainer ? (Gr(function() {
        Kl(null, null, e, !1, function() {
            e._reactRootContainer = null,
            e[En] = null
        })
    }),
    !0) : !1
}
;
gt.unstable_batchedUpdates = Qf;
gt.unstable_renderSubtreeIntoContainer = function(e, t, n, r) {
    if (!Hl(n))
        throw Error(j(200));
    if (e == null || e._reactInternals === void 0)
        throw Error(j(38));
    return Kl(e, t, n, !1, r)
}
;
gt.version = "18.3.1-next-f1338f8080-20240426";
function q0() {
    if (!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"))
        try {
            __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(q0)
        } catch (e) {
            console.error(e)
        }
}
q0(),
qv.exports = gt;
var eo = qv.exports;
const Z0 = Vv(eo);
var J0, xm = eo;
J0 = xm.createRoot,
xm.hydrateRoot;
const wT = 1
  , ST = 1e6;
let Ku = 0;
function CT() {
    return Ku = (Ku + 1) % Number.MAX_SAFE_INTEGER,
    Ku.toString()
}
const Gu = new Map
  , wm = e => {
    if (Gu.has(e))
        return;
    const t = setTimeout( () => {
        Gu.delete(e),
        Qs({
            type: "REMOVE_TOAST",
            toastId: e
        })
    }
    , ST);
    Gu.set(e, t)
}
  , bT = (e, t) => {
    switch (t.type) {
    case "ADD_TOAST":
        return {
            ...e,
            toasts: [t.toast, ...e.toasts].slice(0, wT)
        };
    case "UPDATE_TOAST":
        return {
            ...e,
            toasts: e.toasts.map(n => n.id === t.toast.id ? {
                ...n,
                ...t.toast
            } : n)
        };
    case "DISMISS_TOAST":
        {
            const {toastId: n} = t;
            return n ? wm(n) : e.toasts.forEach(r => {
                wm(r.id)
            }
            ),
            {
                ...e,
                toasts: e.toasts.map(r => r.id === n || n === void 0 ? {
                    ...r,
                    open: !1
                } : r)
            }
        }
    case "REMOVE_TOAST":
        return t.toastId === void 0 ? {
            ...e,
            toasts: []
        } : {
            ...e,
            toasts: e.toasts.filter(n => n.id !== t.toastId)
        }
    }
}
  , Da = [];
let Ia = {
    toasts: []
};
function Qs(e) {
    Ia = bT(Ia, e),
    Da.forEach(t => {
        t(Ia)
    }
    )
}
function ET({...e}) {
    const t = CT()
      , n = o => Qs({
        type: "UPDATE_TOAST",
        toast: {
            ...o,
            id: t
        }
    })
      , r = () => Qs({
        type: "DISMISS_TOAST",
        toastId: t
    });
    return Qs({
        type: "ADD_TOAST",
        toast: {
            ...e,
            id: t,
            open: !0,
            onOpenChange: o => {
                o || r()
            }
        }
    }),
    {
        id: t,
        dismiss: r,
        update: n
    }
}
function TT() {
    const [e,t] = m.useState(Ia);
    return m.useEffect( () => (Da.push(t),
    () => {
        const n = Da.indexOf(t);
        n > -1 && Da.splice(n, 1)
    }
    ), [e]),
    {
        ...e,
        toast: ET,
        dismiss: n => Qs({
            type: "DISMISS_TOAST",
            toastId: n
        })
    }
}
function Z(e, t, {checkForDefaultPrevented: n=!0}={}) {
    return function(o) {
        if (e == null || e(o),
        n === !1 || !o.defaultPrevented)
            return t == null ? void 0 : t(o)
    }
}
function Sm(e, t) {
    if (typeof e == "function")
        return e(t);
    e != null && (e.current = t)
}
function ex(...e) {
    return t => {
        let n = !1;
        const r = e.map(o => {
            const s = Sm(o, t);
            return !n && typeof s == "function" && (n = !0),
            s
        }
        );
        if (n)
            return () => {
                for (let o = 0; o < r.length; o++) {
                    const s = r[o];
                    typeof s == "function" ? s() : Sm(e[o], null)
                }
            }
    }
}
function me(...e) {
    return m.useCallback(ex(...e), e)
}
function PT(e, t) {
    const n = m.createContext(t)
      , r = s => {
        const {children: i, ...a} = s
          , l = m.useMemo( () => a, Object.values(a));
        return y.jsx(n.Provider, {
            value: l,
            children: i
        })
    }
    ;
    r.displayName = e + "Provider";
    function o(s) {
        const i = m.useContext(n);
        if (i)
            return i;
        if (t !== void 0)
            return t;
        throw new Error(`\`${s}\` must be used within \`${e}\``)
    }
    return [r, o]
}
function as(e, t=[]) {
    let n = [];
    function r(s, i) {
        const a = m.createContext(i)
          , l = n.length;
        n = [...n, i];
        const u = d => {
            var v;
            const {scope: f, children: h, ...S} = d
              , p = ((v = f == null ? void 0 : f[e]) == null ? void 0 : v[l]) || a
              , w = m.useMemo( () => S, Object.values(S));
            return y.jsx(p.Provider, {
                value: w,
                children: h
            })
        }
        ;
        u.displayName = s + "Provider";
        function c(d, f) {
            var p;
            const h = ((p = f == null ? void 0 : f[e]) == null ? void 0 : p[l]) || a
              , S = m.useContext(h);
            if (S)
                return S;
            if (i !== void 0)
                return i;
            throw new Error(`\`${d}\` must be used within \`${s}\``)
        }
        return [u, c]
    }
    const o = () => {
        const s = n.map(i => m.createContext(i));
        return function(a) {
            const l = (a == null ? void 0 : a[e]) || s;
            return m.useMemo( () => ({
                [`__scope${e}`]: {
                    ...a,
                    [e]: l
                }
            }), [a, l])
        }
    }
    ;
    return o.scopeName = e,
    [r, RT(o, ...t)]
}
function RT(...e) {
    const t = e[0];
    if (e.length === 1)
        return t;
    const n = () => {
        const r = e.map(o => ({
            useScope: o(),
            scopeName: o.scopeName
        }));
        return function(s) {
            const i = r.reduce( (a, {useScope: l, scopeName: u}) => {
                const d = l(s)[`__scope${u}`];
                return {
                    ...a,
                    ...d
                }
            }
            , {});
            return m.useMemo( () => ({
                [`__scope${t.scopeName}`]: i
            }), [i])
        }
    }
    ;
    return n.scopeName = t.scopeName,
    n
}
function Jo(e) {
    const t = NT(e)
      , n = m.forwardRef( (r, o) => {
        const {children: s, ...i} = r
          , a = m.Children.toArray(s)
          , l = a.find(MT);
        if (l) {
            const u = l.props.children
              , c = a.map(d => d === l ? m.Children.count(u) > 1 ? m.Children.only(null) : m.isValidElement(u) ? u.props.children : null : d);
            return y.jsx(t, {
                ...i,
                ref: o,
                children: m.isValidElement(u) ? m.cloneElement(u, void 0, c) : null
            })
        }
        return y.jsx(t, {
            ...i,
            ref: o,
            children: s
        })
    }
    );
    return n.displayName = `${e}.Slot`,
    n
}
var kT = Jo("Slot");
function NT(e) {
    const t = m.forwardRef( (n, r) => {
        const {children: o, ...s} = n;
        if (m.isValidElement(o)) {
            const i = DT(o)
              , a = jT(s, o.props);
            return o.type !== m.Fragment && (a.ref = r ? ex(r, i) : i),
            m.cloneElement(o, a)
        }
        return m.Children.count(o) > 1 ? m.Children.only(null) : null
    }
    );
    return t.displayName = `${e}.SlotClone`,
    t
}
var tx = Symbol("radix.slottable");
function AT(e) {
    const t = ({children: n}) => y.jsx(y.Fragment, {
        children: n
    });
    return t.displayName = `${e}.Slottable`,
    t.__radixId = tx,
    t
}
function MT(e) {
    return m.isValidElement(e) && typeof e.type == "function" && "__radixId"in e.type && e.type.__radixId === tx
}
function jT(e, t) {
    const n = {
        ...t
    };
    for (const r in t) {
        const o = e[r]
          , s = t[r];
        /^on[A-Z]/.test(r) ? o && s ? n[r] = (...a) => {
            const l = s(...a);
            return o(...a),
            l
        }
        : o && (n[r] = o) : r === "style" ? n[r] = {
            ...o,
            ...s
        } : r === "className" && (n[r] = [o, s].filter(Boolean).join(" "))
    }
    return {
        ...e,
        ...n
    }
}
function DT(e) {
    var r, o;
    let t = (r = Object.getOwnPropertyDescriptor(e.props, "ref")) == null ? void 0 : r.get
      , n = t && "isReactWarning"in t && t.isReactWarning;
    return n ? e.ref : (t = (o = Object.getOwnPropertyDescriptor(e, "ref")) == null ? void 0 : o.get,
    n = t && "isReactWarning"in t && t.isReactWarning,
    n ? e.props.ref : e.props.ref || e.ref)
}
function nx(e) {
    const t = e + "CollectionProvider"
      , [n,r] = as(t)
      , [o,s] = n(t, {
        collectionRef: {
            current: null
        },
        itemMap: new Map
    })
      , i = p => {
        const {scope: w, children: v} = p
          , g = I.useRef(null)
          , x = I.useRef(new Map).current;
        return y.jsx(o, {
            scope: w,
            itemMap: x,
            collectionRef: g,
            children: v
        })
    }
    ;
    i.displayName = t;
    const a = e + "CollectionSlot"
      , l = Jo(a)
      , u = I.forwardRef( (p, w) => {
        const {scope: v, children: g} = p
          , x = s(a, v)
          , C = me(w, x.collectionRef);
        return y.jsx(l, {
            ref: C,
            children: g
        })
    }
    );
    u.displayName = a;
    const c = e + "CollectionItemSlot"
      , d = "data-radix-collection-item"
      , f = Jo(c)
      , h = I.forwardRef( (p, w) => {
        const {scope: v, children: g, ...x} = p
          , C = I.useRef(null)
          , b = me(w, C)
          , E = s(c, v);
        return I.useEffect( () => (E.itemMap.set(C, {
            ref: C,
            ...x
        }),
        () => void E.itemMap.delete(C))),
        y.jsx(f, {
            [d]: "",
            ref: b,
            children: g
        })
    }
    );
    h.displayName = c;
    function S(p) {
        const w = s(e + "CollectionConsumer", p);
        return I.useCallback( () => {
            const g = w.collectionRef.current;
            if (!g)
                return [];
            const x = Array.from(g.querySelectorAll(`[${d}]`));
            return Array.from(w.itemMap.values()).sort( (E, T) => x.indexOf(E.ref.current) - x.indexOf(T.ref.current))
        }
        , [w.collectionRef, w.itemMap])
    }
    return [{
        Provider: i,
        Slot: u,
        ItemSlot: h
    }, S, r]
}
var IT = ["a", "button", "div", "form", "h2", "h3", "img", "input", "label", "li", "nav", "ol", "p", "select", "span", "svg", "ul"]
  , ne = IT.reduce( (e, t) => {
    const n = Jo(`Primitive.${t}`)
      , r = m.forwardRef( (o, s) => {
        const {asChild: i, ...a} = o
          , l = i ? n : t;
        return typeof window < "u" && (window[Symbol.for("radix-ui")] = !0),
        y.jsx(l, {
            ...a,
            ref: s
        })
    }
    );
    return r.displayName = `Primitive.${t}`,
    {
        ...e,
        [t]: r
    }
}
, {});
function rx(e, t) {
    e && eo.flushSync( () => e.dispatchEvent(t))
}
function Gt(e) {
    const t = m.useRef(e);
    return m.useEffect( () => {
        t.current = e
    }
    ),
    m.useMemo( () => (...n) => {
        var r;
        return (r = t.current) == null ? void 0 : r.call(t, ...n)
    }
    , [])
}
function OT(e, t=globalThis == null ? void 0 : globalThis.document) {
    const n = Gt(e);
    m.useEffect( () => {
        const r = o => {
            o.key === "Escape" && n(o)
        }
        ;
        return t.addEventListener("keydown", r, {
            capture: !0
        }),
        () => t.removeEventListener("keydown", r, {
            capture: !0
        })
    }
    , [n, t])
}
var LT = "DismissableLayer", gd = "dismissableLayer.update", _T = "dismissableLayer.pointerDownOutside", FT = "dismissableLayer.focusOutside", Cm, ox = m.createContext({
    layers: new Set,
    layersWithOutsidePointerEventsDisabled: new Set,
    branches: new Set
}), Oi = m.forwardRef( (e, t) => {
    const {disableOutsidePointerEvents: n=!1, onEscapeKeyDown: r, onPointerDownOutside: o, onFocusOutside: s, onInteractOutside: i, onDismiss: a, ...l} = e
      , u = m.useContext(ox)
      , [c,d] = m.useState(null)
      , f = (c == null ? void 0 : c.ownerDocument) ?? (globalThis == null ? void 0 : globalThis.document)
      , [,h] = m.useState({})
      , S = me(t, T => d(T))
      , p = Array.from(u.layers)
      , [w] = [...u.layersWithOutsidePointerEventsDisabled].slice(-1)
      , v = p.indexOf(w)
      , g = c ? p.indexOf(c) : -1
      , x = u.layersWithOutsidePointerEventsDisabled.size > 0
      , C = g >= v
      , b = BT(T => {
        const P = T.target
          , N = [...u.branches].some(M => M.contains(P));
        !C || N || (o == null || o(T),
        i == null || i(T),
        T.defaultPrevented || a == null || a())
    }
    , f)
      , E = $T(T => {
        const P = T.target;
        [...u.branches].some(M => M.contains(P)) || (s == null || s(T),
        i == null || i(T),
        T.defaultPrevented || a == null || a())
    }
    , f);
    return OT(T => {
        g === u.layers.size - 1 && (r == null || r(T),
        !T.defaultPrevented && a && (T.preventDefault(),
        a()))
    }
    , f),
    m.useEffect( () => {
        if (c)
            return n && (u.layersWithOutsidePointerEventsDisabled.size === 0 && (Cm = f.body.style.pointerEvents,
            f.body.style.pointerEvents = "none"),
            u.layersWithOutsidePointerEventsDisabled.add(c)),
            u.layers.add(c),
            bm(),
            () => {
                n && u.layersWithOutsidePointerEventsDisabled.size === 1 && (f.body.style.pointerEvents = Cm)
            }
    }
    , [c, f, n, u]),
    m.useEffect( () => () => {
        c && (u.layers.delete(c),
        u.layersWithOutsidePointerEventsDisabled.delete(c),
        bm())
    }
    , [c, u]),
    m.useEffect( () => {
        const T = () => h({});
        return document.addEventListener(gd, T),
        () => document.removeEventListener(gd, T)
    }
    , []),
    y.jsx(ne.div, {
        ...l,
        ref: S,
        style: {
            pointerEvents: x ? C ? "auto" : "none" : void 0,
            ...e.style
        },
        onFocusCapture: Z(e.onFocusCapture, E.onFocusCapture),
        onBlurCapture: Z(e.onBlurCapture, E.onBlurCapture),
        onPointerDownCapture: Z(e.onPointerDownCapture, b.onPointerDownCapture)
    })
}
);
Oi.displayName = LT;
var VT = "DismissableLayerBranch"
  , sx = m.forwardRef( (e, t) => {
    const n = m.useContext(ox)
      , r = m.useRef(null)
      , o = me(t, r);
    return m.useEffect( () => {
        const s = r.current;
        if (s)
            return n.branches.add(s),
            () => {
                n.branches.delete(s)
            }
    }
    , [n.branches]),
    y.jsx(ne.div, {
        ...e,
        ref: o
    })
}
);
sx.displayName = VT;
function BT(e, t=globalThis == null ? void 0 : globalThis.document) {
    const n = Gt(e)
      , r = m.useRef(!1)
      , o = m.useRef( () => {}
    );
    return m.useEffect( () => {
        const s = a => {
            if (a.target && !r.current) {
                let l = function() {
                    ix(_T, n, u, {
                        discrete: !0
                    })
                };
                const u = {
                    originalEvent: a
                };
                a.pointerType === "touch" ? (t.removeEventListener("click", o.current),
                o.current = l,
                t.addEventListener("click", o.current, {
                    once: !0
                })) : l()
            } else
                t.removeEventListener("click", o.current);
            r.current = !1
        }
          , i = window.setTimeout( () => {
            t.addEventListener("pointerdown", s)
        }
        , 0);
        return () => {
            window.clearTimeout(i),
            t.removeEventListener("pointerdown", s),
            t.removeEventListener("click", o.current)
        }
    }
    , [t, n]),
    {
        onPointerDownCapture: () => r.current = !0
    }
}
function $T(e, t=globalThis == null ? void 0 : globalThis.document) {
    const n = Gt(e)
      , r = m.useRef(!1);
    return m.useEffect( () => {
        const o = s => {
            s.target && !r.current && ix(FT, n, {
                originalEvent: s
            }, {
                discrete: !1
            })
        }
        ;
        return t.addEventListener("focusin", o),
        () => t.removeEventListener("focusin", o)
    }
    , [t, n]),
    {
        onFocusCapture: () => r.current = !0,
        onBlurCapture: () => r.current = !1
    }
}
function bm() {
    const e = new CustomEvent(gd);
    document.dispatchEvent(e)
}
function ix(e, t, n, {discrete: r}) {
    const o = n.originalEvent.target
      , s = new CustomEvent(e,{
        bubbles: !1,
        cancelable: !0,
        detail: n
    });
    t && o.addEventListener(e, t, {
        once: !0
    }),
    r ? rx(o, s) : o.dispatchEvent(s)
}
var zT = Oi
  , UT = sx
  , $e = globalThis != null && globalThis.document ? m.useLayoutEffect : () => {}
  , WT = "Portal"
  , Gl = m.forwardRef( (e, t) => {
    var a;
    const {container: n, ...r} = e
      , [o,s] = m.useState(!1);
    $e( () => s(!0), []);
    const i = n || o && ((a = globalThis == null ? void 0 : globalThis.document) == null ? void 0 : a.body);
    return i ? Z0.createPortal(y.jsx(ne.div, {
        ...r,
        ref: t
    }), i) : null
}
);
Gl.displayName = WT;
function HT(e, t) {
    return m.useReducer( (n, r) => t[n][r] ?? n, e)
}
var ls = e => {
    const {present: t, children: n} = e
      , r = KT(t)
      , o = typeof n == "function" ? n({
        present: r.isPresent
    }) : m.Children.only(n)
      , s = me(r.ref, GT(o));
    return typeof n == "function" || r.isPresent ? m.cloneElement(o, {
        ref: s
    }) : null
}
;
ls.displayName = "Presence";
function KT(e) {
    const [t,n] = m.useState()
      , r = m.useRef(null)
      , o = m.useRef(e)
      , s = m.useRef("none")
      , i = e ? "mounted" : "unmounted"
      , [a,l] = HT(i, {
        mounted: {
            UNMOUNT: "unmounted",
            ANIMATION_OUT: "unmountSuspended"
        },
        unmountSuspended: {
            MOUNT: "mounted",
            ANIMATION_END: "unmounted"
        },
        unmounted: {
            MOUNT: "mounted"
        }
    });
    return m.useEffect( () => {
        const u = la(r.current);
        s.current = a === "mounted" ? u : "none"
    }
    , [a]),
    $e( () => {
        const u = r.current
          , c = o.current;
        if (c !== e) {
            const f = s.current
              , h = la(u);
            e ? l("MOUNT") : h === "none" || (u == null ? void 0 : u.display) === "none" ? l("UNMOUNT") : l(c && f !== h ? "ANIMATION_OUT" : "UNMOUNT"),
            o.current = e
        }
    }
    , [e, l]),
    $e( () => {
        if (t) {
            let u;
            const c = t.ownerDocument.defaultView ?? window
              , d = h => {
                const p = la(r.current).includes(h.animationName);
                if (h.target === t && p && (l("ANIMATION_END"),
                !o.current)) {
                    const w = t.style.animationFillMode;
                    t.style.animationFillMode = "forwards",
                    u = c.setTimeout( () => {
                        t.style.animationFillMode === "forwards" && (t.style.animationFillMode = w)
                    }
                    )
                }
            }
              , f = h => {
                h.target === t && (s.current = la(r.current))
            }
            ;
            return t.addEventListener("animationstart", f),
            t.addEventListener("animationcancel", d),
            t.addEventListener("animationend", d),
            () => {
                c.clearTimeout(u),
                t.removeEventListener("animationstart", f),
                t.removeEventListener("animationcancel", d),
                t.removeEventListener("animationend", d)
            }
        } else
            l("ANIMATION_END")
    }
    , [t, l]),
    {
        isPresent: ["mounted", "unmountSuspended"].includes(a),
        ref: m.useCallback(u => {
            r.current = u ? getComputedStyle(u) : null,
            n(u)
        }
        , [])
    }
}
function la(e) {
    return (e == null ? void 0 : e.animationName) || "none"
}
function GT(e) {
    var r, o;
    let t = (r = Object.getOwnPropertyDescriptor(e.props, "ref")) == null ? void 0 : r.get
      , n = t && "isReactWarning"in t && t.isReactWarning;
    return n ? e.ref : (t = (o = Object.getOwnPropertyDescriptor(e, "ref")) == null ? void 0 : o.get,
    n = t && "isReactWarning"in t && t.isReactWarning,
    n ? e.props.ref : e.props.ref || e.ref)
}
var YT = ff[" useInsertionEffect ".trim().toString()] || $e;
function fl({prop: e, defaultProp: t, onChange: n= () => {}
, caller: r}) {
    const [o,s,i] = QT({
        defaultProp: t,
        onChange: n
    })
      , a = e !== void 0
      , l = a ? e : o;
    {
        const c = m.useRef(e !== void 0);
        m.useEffect( () => {
            const d = c.current;
            d !== a && console.warn(`${r} is changing from ${d ? "controlled" : "uncontrolled"} to ${a ? "controlled" : "uncontrolled"}. Components should not switch from controlled to uncontrolled (or vice versa). Decide between using a controlled or uncontrolled value for the lifetime of the component.`),
            c.current = a
        }
        , [a, r])
    }
    const u = m.useCallback(c => {
        var d;
        if (a) {
            const f = XT(c) ? c(e) : c;
            f !== e && ((d = i.current) == null || d.call(i, f))
        } else
            s(c)
    }
    , [a, e, s, i]);
    return [l, u]
}
function QT({defaultProp: e, onChange: t}) {
    const [n,r] = m.useState(e)
      , o = m.useRef(n)
      , s = m.useRef(t);
    return YT( () => {
        s.current = t
    }
    , [t]),
    m.useEffect( () => {
        var i;
        o.current !== n && ((i = s.current) == null || i.call(s, n),
        o.current = n)
    }
    , [n, o]),
    [n, r, s]
}
function XT(e) {
    return typeof e == "function"
}
var ax = Object.freeze({
    position: "absolute",
    border: 0,
    width: 1,
    height: 1,
    padding: 0,
    margin: -1,
    overflow: "hidden",
    clip: "rect(0, 0, 0, 0)",
    whiteSpace: "nowrap",
    wordWrap: "normal"
})
  , qT = "VisuallyHidden"
  , Yl = m.forwardRef( (e, t) => y.jsx(ne.span, {
    ...e,
    ref: t,
    style: {
        ...ax,
        ...e.style
    }
}));
Yl.displayName = qT;
var ZT = Yl
  , rh = "ToastProvider"
  , [oh,JT,eP] = nx("Toast")
  , [lx,LL] = as("Toast", [eP])
  , [tP,Ql] = lx(rh)
  , ux = e => {
    const {__scopeToast: t, label: n="Notification", duration: r=5e3, swipeDirection: o="right", swipeThreshold: s=50, children: i} = e
      , [a,l] = m.useState(null)
      , [u,c] = m.useState(0)
      , d = m.useRef(!1)
      , f = m.useRef(!1);
    return n.trim() || console.error(`Invalid prop \`label\` supplied to \`${rh}\`. Expected non-empty \`string\`.`),
    y.jsx(oh.Provider, {
        scope: t,
        children: y.jsx(tP, {
            scope: t,
            label: n,
            duration: r,
            swipeDirection: o,
            swipeThreshold: s,
            toastCount: u,
            viewport: a,
            onViewportChange: l,
            onToastAdd: m.useCallback( () => c(h => h + 1), []),
            onToastRemove: m.useCallback( () => c(h => h - 1), []),
            isFocusedToastEscapeKeyDownRef: d,
            isClosePausedRef: f,
            children: i
        })
    })
}
;
ux.displayName = rh;
var cx = "ToastViewport"
  , nP = ["F8"]
  , vd = "toast.viewportPause"
  , yd = "toast.viewportResume"
  , dx = m.forwardRef( (e, t) => {
    const {__scopeToast: n, hotkey: r=nP, label: o="Notifications ({hotkey})", ...s} = e
      , i = Ql(cx, n)
      , a = JT(n)
      , l = m.useRef(null)
      , u = m.useRef(null)
      , c = m.useRef(null)
      , d = m.useRef(null)
      , f = me(t, d, i.onViewportChange)
      , h = r.join("+").replace(/Key/g, "").replace(/Digit/g, "")
      , S = i.toastCount > 0;
    m.useEffect( () => {
        const w = v => {
            var x;
            r.length !== 0 && r.every(C => v[C] || v.code === C) && ((x = d.current) == null || x.focus())
        }
        ;
        return document.addEventListener("keydown", w),
        () => document.removeEventListener("keydown", w)
    }
    , [r]),
    m.useEffect( () => {
        const w = l.current
          , v = d.current;
        if (S && w && v) {
            const g = () => {
                if (!i.isClosePausedRef.current) {
                    const E = new CustomEvent(vd);
                    v.dispatchEvent(E),
                    i.isClosePausedRef.current = !0
                }
            }
              , x = () => {
                if (i.isClosePausedRef.current) {
                    const E = new CustomEvent(yd);
                    v.dispatchEvent(E),
                    i.isClosePausedRef.current = !1
                }
            }
              , C = E => {
                !w.contains(E.relatedTarget) && x()
            }
              , b = () => {
                w.contains(document.activeElement) || x()
            }
            ;
            return w.addEventListener("focusin", g),
            w.addEventListener("focusout", C),
            w.addEventListener("pointermove", g),
            w.addEventListener("pointerleave", b),
            window.addEventListener("blur", g),
            window.addEventListener("focus", x),
            () => {
                w.removeEventListener("focusin", g),
                w.removeEventListener("focusout", C),
                w.removeEventListener("pointermove", g),
                w.removeEventListener("pointerleave", b),
                window.removeEventListener("blur", g),
                window.removeEventListener("focus", x)
            }
        }
    }
    , [S, i.isClosePausedRef]);
    const p = m.useCallback( ({tabbingDirection: w}) => {
        const g = a().map(x => {
            const C = x.ref.current
              , b = [C, ...mP(C)];
            return w === "forwards" ? b : b.reverse()
        }
        );
        return (w === "forwards" ? g.reverse() : g).flat()
    }
    , [a]);
    return m.useEffect( () => {
        const w = d.current;
        if (w) {
            const v = g => {
                var b, E, T;
                const x = g.altKey || g.ctrlKey || g.metaKey;
                if (g.key === "Tab" && !x) {
                    const P = document.activeElement
                      , N = g.shiftKey;
                    if (g.target === w && N) {
                        (b = u.current) == null || b.focus();
                        return
                    }
                    const O = p({
                        tabbingDirection: N ? "backwards" : "forwards"
                    })
                      , W = O.findIndex(D => D === P);
                    Yu(O.slice(W + 1)) ? g.preventDefault() : N ? (E = u.current) == null || E.focus() : (T = c.current) == null || T.focus()
                }
            }
            ;
            return w.addEventListener("keydown", v),
            () => w.removeEventListener("keydown", v)
        }
    }
    , [a, p]),
    y.jsxs(UT, {
        ref: l,
        role: "region",
        "aria-label": o.replace("{hotkey}", h),
        tabIndex: -1,
        style: {
            pointerEvents: S ? void 0 : "none"
        },
        children: [S && y.jsx(xd, {
            ref: u,
            onFocusFromOutsideViewport: () => {
                const w = p({
                    tabbingDirection: "forwards"
                });
                Yu(w)
            }
        }), y.jsx(oh.Slot, {
            scope: n,
            children: y.jsx(ne.ol, {
                tabIndex: -1,
                ...s,
                ref: f
            })
        }), S && y.jsx(xd, {
            ref: c,
            onFocusFromOutsideViewport: () => {
                const w = p({
                    tabbingDirection: "backwards"
                });
                Yu(w)
            }
        })]
    })
}
);
dx.displayName = cx;
var fx = "ToastFocusProxy"
  , xd = m.forwardRef( (e, t) => {
    const {__scopeToast: n, onFocusFromOutsideViewport: r, ...o} = e
      , s = Ql(fx, n);
    return y.jsx(Yl, {
        "aria-hidden": !0,
        tabIndex: 0,
        ...o,
        ref: t,
        style: {
            position: "fixed"
        },
        onFocus: i => {
            var u;
            const a = i.relatedTarget;
            !((u = s.viewport) != null && u.contains(a)) && r()
        }
    })
}
);
xd.displayName = fx;
var Li = "Toast"
  , rP = "toast.swipeStart"
  , oP = "toast.swipeMove"
  , sP = "toast.swipeCancel"
  , iP = "toast.swipeEnd"
  , hx = m.forwardRef( (e, t) => {
    const {forceMount: n, open: r, defaultOpen: o, onOpenChange: s, ...i} = e
      , [a,l] = fl({
        prop: r,
        defaultProp: o ?? !0,
        onChange: s,
        caller: Li
    });
    return y.jsx(ls, {
        present: n || a,
        children: y.jsx(uP, {
            open: a,
            ...i,
            ref: t,
            onClose: () => l(!1),
            onPause: Gt(e.onPause),
            onResume: Gt(e.onResume),
            onSwipeStart: Z(e.onSwipeStart, u => {
                u.currentTarget.setAttribute("data-swipe", "start")
            }
            ),
            onSwipeMove: Z(e.onSwipeMove, u => {
                const {x: c, y: d} = u.detail.delta;
                u.currentTarget.setAttribute("data-swipe", "move"),
                u.currentTarget.style.setProperty("--radix-toast-swipe-move-x", `${c}px`),
                u.currentTarget.style.setProperty("--radix-toast-swipe-move-y", `${d}px`)
            }
            ),
            onSwipeCancel: Z(e.onSwipeCancel, u => {
                u.currentTarget.setAttribute("data-swipe", "cancel"),
                u.currentTarget.style.removeProperty("--radix-toast-swipe-move-x"),
                u.currentTarget.style.removeProperty("--radix-toast-swipe-move-y"),
                u.currentTarget.style.removeProperty("--radix-toast-swipe-end-x"),
                u.currentTarget.style.removeProperty("--radix-toast-swipe-end-y")
            }
            ),
            onSwipeEnd: Z(e.onSwipeEnd, u => {
                const {x: c, y: d} = u.detail.delta;
                u.currentTarget.setAttribute("data-swipe", "end"),
                u.currentTarget.style.removeProperty("--radix-toast-swipe-move-x"),
                u.currentTarget.style.removeProperty("--radix-toast-swipe-move-y"),
                u.currentTarget.style.setProperty("--radix-toast-swipe-end-x", `${c}px`),
                u.currentTarget.style.setProperty("--radix-toast-swipe-end-y", `${d}px`),
                l(!1)
            }
            )
        })
    })
}
);
hx.displayName = Li;
var [aP,lP] = lx(Li, {
    onClose() {}
})
  , uP = m.forwardRef( (e, t) => {
    const {__scopeToast: n, type: r="foreground", duration: o, open: s, onClose: i, onEscapeKeyDown: a, onPause: l, onResume: u, onSwipeStart: c, onSwipeMove: d, onSwipeCancel: f, onSwipeEnd: h, ...S} = e
      , p = Ql(Li, n)
      , [w,v] = m.useState(null)
      , g = me(t, D => v(D))
      , x = m.useRef(null)
      , C = m.useRef(null)
      , b = o || p.duration
      , E = m.useRef(0)
      , T = m.useRef(b)
      , P = m.useRef(0)
      , {onToastAdd: N, onToastRemove: M} = p
      , V = Gt( () => {
        var H;
        (w == null ? void 0 : w.contains(document.activeElement)) && ((H = p.viewport) == null || H.focus()),
        i()
    }
    )
      , O = m.useCallback(D => {
        !D || D === 1 / 0 || (window.clearTimeout(P.current),
        E.current = new Date().getTime(),
        P.current = window.setTimeout(V, D))
    }
    , [V]);
    m.useEffect( () => {
        const D = p.viewport;
        if (D) {
            const H = () => {
                O(T.current),
                u == null || u()
            }
              , z = () => {
                const F = new Date().getTime() - E.current;
                T.current = T.current - F,
                window.clearTimeout(P.current),
                l == null || l()
            }
            ;
            return D.addEventListener(vd, z),
            D.addEventListener(yd, H),
            () => {
                D.removeEventListener(vd, z),
                D.removeEventListener(yd, H)
            }
        }
    }
    , [p.viewport, b, l, u, O]),
    m.useEffect( () => {
        s && !p.isClosePausedRef.current && O(b)
    }
    , [s, b, p.isClosePausedRef, O]),
    m.useEffect( () => (N(),
    () => M()), [N, M]);
    const W = m.useMemo( () => w ? wx(w) : null, [w]);
    return p.viewport ? y.jsxs(y.Fragment, {
        children: [W && y.jsx(cP, {
            __scopeToast: n,
            role: "status",
            "aria-live": r === "foreground" ? "assertive" : "polite",
            "aria-atomic": !0,
            children: W
        }), y.jsx(aP, {
            scope: n,
            onClose: V,
            children: eo.createPortal(y.jsx(oh.ItemSlot, {
                scope: n,
                children: y.jsx(zT, {
                    asChild: !0,
                    onEscapeKeyDown: Z(a, () => {
                        p.isFocusedToastEscapeKeyDownRef.current || V(),
                        p.isFocusedToastEscapeKeyDownRef.current = !1
                    }
                    ),
                    children: y.jsx(ne.li, {
                        role: "status",
                        "aria-live": "off",
                        "aria-atomic": !0,
                        tabIndex: 0,
                        "data-state": s ? "open" : "closed",
                        "data-swipe-direction": p.swipeDirection,
                        ...S,
                        ref: g,
                        style: {
                            userSelect: "none",
                            touchAction: "none",
                            ...e.style
                        },
                        onKeyDown: Z(e.onKeyDown, D => {
                            D.key === "Escape" && (a == null || a(D.nativeEvent),
                            D.nativeEvent.defaultPrevented || (p.isFocusedToastEscapeKeyDownRef.current = !0,
                            V()))
                        }
                        ),
                        onPointerDown: Z(e.onPointerDown, D => {
                            D.button === 0 && (x.current = {
                                x: D.clientX,
                                y: D.clientY
                            })
                        }
                        ),
                        onPointerMove: Z(e.onPointerMove, D => {
                            if (!x.current)
                                return;
                            const H = D.clientX - x.current.x
                              , z = D.clientY - x.current.y
                              , F = !!C.current
                              , R = ["left", "right"].includes(p.swipeDirection)
                              , k = ["left", "up"].includes(p.swipeDirection) ? Math.min : Math.max
                              , L = R ? k(0, H) : 0
                              , K = R ? 0 : k(0, z)
                              , U = D.pointerType === "touch" ? 10 : 2
                              , X = {
                                x: L,
                                y: K
                            }
                              , G = {
                                originalEvent: D,
                                delta: X
                            };
                            F ? (C.current = X,
                            ua(oP, d, G, {
                                discrete: !1
                            })) : Em(X, p.swipeDirection, U) ? (C.current = X,
                            ua(rP, c, G, {
                                discrete: !1
                            }),
                            D.target.setPointerCapture(D.pointerId)) : (Math.abs(H) > U || Math.abs(z) > U) && (x.current = null)
                        }
                        ),
                        onPointerUp: Z(e.onPointerUp, D => {
                            const H = C.current
                              , z = D.target;
                            if (z.hasPointerCapture(D.pointerId) && z.releasePointerCapture(D.pointerId),
                            C.current = null,
                            x.current = null,
                            H) {
                                const F = D.currentTarget
                                  , R = {
                                    originalEvent: D,
                                    delta: H
                                };
                                Em(H, p.swipeDirection, p.swipeThreshold) ? ua(iP, h, R, {
                                    discrete: !0
                                }) : ua(sP, f, R, {
                                    discrete: !0
                                }),
                                F.addEventListener("click", k => k.preventDefault(), {
                                    once: !0
                                })
                            }
                        }
                        )
                    })
                })
            }), p.viewport)
        })]
    }) : null
}
)
  , cP = e => {
    const {__scopeToast: t, children: n, ...r} = e
      , o = Ql(Li, t)
      , [s,i] = m.useState(!1)
      , [a,l] = m.useState(!1);
    return hP( () => i(!0)),
    m.useEffect( () => {
        const u = window.setTimeout( () => l(!0), 1e3);
        return () => window.clearTimeout(u)
    }
    , []),
    a ? null : y.jsx(Gl, {
        asChild: !0,
        children: y.jsx(Yl, {
            ...r,
            children: s && y.jsxs(y.Fragment, {
                children: [o.label, " ", n]
            })
        })
    })
}
  , dP = "ToastTitle"
  , px = m.forwardRef( (e, t) => {
    const {__scopeToast: n, ...r} = e;
    return y.jsx(ne.div, {
        ...r,
        ref: t
    })
}
);
px.displayName = dP;
var fP = "ToastDescription"
  , mx = m.forwardRef( (e, t) => {
    const {__scopeToast: n, ...r} = e;
    return y.jsx(ne.div, {
        ...r,
        ref: t
    })
}
);
mx.displayName = fP;
var gx = "ToastAction"
  , vx = m.forwardRef( (e, t) => {
    const {altText: n, ...r} = e;
    return n.trim() ? y.jsx(xx, {
        altText: n,
        asChild: !0,
        children: y.jsx(sh, {
            ...r,
            ref: t
        })
    }) : (console.error(`Invalid prop \`altText\` supplied to \`${gx}\`. Expected non-empty \`string\`.`),
    null)
}
);
vx.displayName = gx;
var yx = "ToastClose"
  , sh = m.forwardRef( (e, t) => {
    const {__scopeToast: n, ...r} = e
      , o = lP(yx, n);
    return y.jsx(xx, {
        asChild: !0,
        children: y.jsx(ne.button, {
            type: "button",
            ...r,
            ref: t,
            onClick: Z(e.onClick, o.onClose)
        })
    })
}
);
sh.displayName = yx;
var xx = m.forwardRef( (e, t) => {
    const {__scopeToast: n, altText: r, ...o} = e;
    return y.jsx(ne.div, {
        "data-radix-toast-announce-exclude": "",
        "data-radix-toast-announce-alt": r || void 0,
        ...o,
        ref: t
    })
}
);
function wx(e) {
    const t = [];
    return Array.from(e.childNodes).forEach(r => {
        if (r.nodeType === r.TEXT_NODE && r.textContent && t.push(r.textContent),
        pP(r)) {
            const o = r.ariaHidden || r.hidden || r.style.display === "none"
              , s = r.dataset.radixToastAnnounceExclude === "";
            if (!o)
                if (s) {
                    const i = r.dataset.radixToastAnnounceAlt;
                    i && t.push(i)
                } else
                    t.push(...wx(r))
        }
    }
    ),
    t
}
function ua(e, t, n, {discrete: r}) {
    const o = n.originalEvent.currentTarget
      , s = new CustomEvent(e,{
        bubbles: !0,
        cancelable: !0,
        detail: n
    });
    t && o.addEventListener(e, t, {
        once: !0
    }),
    r ? rx(o, s) : o.dispatchEvent(s)
}
var Em = (e, t, n=0) => {
    const r = Math.abs(e.x)
      , o = Math.abs(e.y)
      , s = r > o;
    return t === "left" || t === "right" ? s && r > n : !s && o > n
}
;
function hP(e= () => {}
) {
    const t = Gt(e);
    $e( () => {
        let n = 0
          , r = 0;
        return n = window.requestAnimationFrame( () => r = window.requestAnimationFrame(t)),
        () => {
            window.cancelAnimationFrame(n),
            window.cancelAnimationFrame(r)
        }
    }
    , [t])
}
function pP(e) {
    return e.nodeType === e.ELEMENT_NODE
}
function mP(e) {
    const t = []
      , n = document.createTreeWalker(e, NodeFilter.SHOW_ELEMENT, {
        acceptNode: r => {
            const o = r.tagName === "INPUT" && r.type === "hidden";
            return r.disabled || r.hidden || o ? NodeFilter.FILTER_SKIP : r.tabIndex >= 0 ? NodeFilter.FILTER_ACCEPT : NodeFilter.FILTER_SKIP
        }
    });
    for (; n.nextNode(); )
        t.push(n.currentNode);
    return t
}
function Yu(e) {
    const t = document.activeElement;
    return e.some(n => n === t ? !0 : (n.focus(),
    document.activeElement !== t))
}
var gP = ux
  , Sx = dx
  , Cx = hx
  , bx = px
  , Ex = mx
  , Tx = vx
  , Px = sh;
function Rx(e) {
    var t, n, r = "";
    if (typeof e == "string" || typeof e == "number")
        r += e;
    else if (typeof e == "object")
        if (Array.isArray(e)) {
            var o = e.length;
            for (t = 0; t < o; t++)
                e[t] && (n = Rx(e[t])) && (r && (r += " "),
                r += n)
        } else
            for (n in e)
                e[n] && (r && (r += " "),
                r += n);
    return r
}
function kx() {
    for (var e, t, n = 0, r = "", o = arguments.length; n < o; n++)
        (e = arguments[n]) && (t = Rx(e)) && (r && (r += " "),
        r += t);
    return r
}
const Tm = e => typeof e == "boolean" ? `${e}` : e === 0 ? "0" : e
  , Pm = kx
  , Nx = (e, t) => n => {
    var r;
    if ((t == null ? void 0 : t.variants) == null)
        return Pm(e, n == null ? void 0 : n.class, n == null ? void 0 : n.className);
    const {variants: o, defaultVariants: s} = t
      , i = Object.keys(o).map(u => {
        const c = n == null ? void 0 : n[u]
          , d = s == null ? void 0 : s[u];
        if (c === null)
            return null;
        const f = Tm(c) || Tm(d);
        return o[u][f]
    }
    )
      , a = n && Object.entries(n).reduce( (u, c) => {
        let[d,f] = c;
        return f === void 0 || (u[d] = f),
        u
    }
    , {})
      , l = t == null || (r = t.compoundVariants) === null || r === void 0 ? void 0 : r.reduce( (u, c) => {
        let {class: d, className: f, ...h} = c;
        return Object.entries(h).every(S => {
            let[p,w] = S;
            return Array.isArray(w) ? w.includes({
                ...s,
                ...a
            }[p]) : {
                ...s,
                ...a
            }[p] === w
        }
        ) ? [...u, d, f] : u
    }
    , []);
    return Pm(e, i, l, n == null ? void 0 : n.class, n == null ? void 0 : n.className)
}
;
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const vP = e => e.replace(/([a-z0-9])([A-Z])/g, "$1-$2").toLowerCase()
  , Ax = (...e) => e.filter( (t, n, r) => !!t && t.trim() !== "" && r.indexOf(t) === n).join(" ").trim();
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
var yP = {
    xmlns: "http://www.w3.org/2000/svg",
    width: 24,
    height: 24,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: 2,
    strokeLinecap: "round",
    strokeLinejoin: "round"
};
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const xP = m.forwardRef( ({color: e="currentColor", size: t=24, strokeWidth: n=2, absoluteStrokeWidth: r, className: o="", children: s, iconNode: i, ...a}, l) => m.createElement("svg", {
    ref: l,
    ...yP,
    width: t,
    height: t,
    stroke: e,
    strokeWidth: r ? Number(n) * 24 / Number(t) : n,
    className: Ax("lucide", o),
    ...a
}, [...i.map( ([u,c]) => m.createElement(u, c)), ...Array.isArray(s) ? s : [s]]));
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Xt = (e, t) => {
    const n = m.forwardRef( ({className: r, ...o}, s) => m.createElement(xP, {
        ref: s,
        iconNode: t,
        className: Ax(`lucide-${vP(e)}`, r),
        ...o
    }));
    return n.displayName = `${e}`,
    n
}
;
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const wP = Xt("Check", [["path", {
    d: "M20 6 9 17l-5-5",
    key: "1gmf2c"
}]]);
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Mx = Xt("ChevronDown", [["path", {
    d: "m6 9 6 6 6-6",
    key: "qrunsl"
}]]);
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const hl = Xt("ChevronLeft", [["path", {
    d: "m15 18-6-6 6-6",
    key: "1wnfg3"
}]]);
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const SP = Xt("ChevronRight", [["path", {
    d: "m9 18 6-6-6-6",
    key: "mthhwq"
}]]);
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const CP = Xt("ChevronUp", [["path", {
    d: "m18 15-6-6-6 6",
    key: "153udz"
}]]);
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const bP = Xt("CreditCard", [["rect", {
    width: "20",
    height: "14",
    x: "2",
    y: "5",
    rx: "2",
    key: "ynyp8z"
}], ["line", {
    x1: "2",
    x2: "22",
    y1: "10",
    y2: "10",
    key: "1b3vmo"
}]]);
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Qu = Xt("Download", [["path", {
    d: "M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4",
    key: "ih7n3h"
}], ["polyline", {
    points: "7 10 12 15 17 10",
    key: "2ggqvy"
}], ["line", {
    x1: "12",
    x2: "12",
    y1: "15",
    y2: "3",
    key: "1vk2je"
}]]);
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const EP = Xt("Plus", [["path", {
    d: "M5 12h14",
    key: "1ays0h"
}], ["path", {
    d: "M12 5v14",
    key: "s699le"
}]]);
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const TP = Xt("Share", [["path", {
    d: "M4 12v8a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-8",
    key: "1b2hhj"
}], ["polyline", {
    points: "16 6 12 2 8 6",
    key: "m901s6"
}], ["line", {
    x1: "12",
    x2: "12",
    y1: "2",
    y2: "15",
    key: "1p0rca"
}]]);
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const PP = Xt("Smartphone", [["rect", {
    width: "14",
    height: "20",
    x: "5",
    y: "2",
    rx: "2",
    ry: "2",
    key: "1yt0o3"
}], ["path", {
    d: "M12 18h.01",
    key: "mhygvu"
}]]);
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const jx = Xt("X", [["path", {
    d: "M18 6 6 18",
    key: "1bl5f8"
}], ["path", {
    d: "m6 6 12 12",
    key: "d8bk6v"
}]])
  , ih = "-"
  , RP = e => {
    const t = NP(e)
      , {conflictingClassGroups: n, conflictingClassGroupModifiers: r} = e;
    return {
        getClassGroupId: i => {
            const a = i.split(ih);
            return a[0] === "" && a.length !== 1 && a.shift(),
            Dx(a, t) || kP(i)
        }
        ,
        getConflictingClassGroupIds: (i, a) => {
            const l = n[i] || [];
            return a && r[i] ? [...l, ...r[i]] : l
        }
    }
}
  , Dx = (e, t) => {
    var i;
    if (e.length === 0)
        return t.classGroupId;
    const n = e[0]
      , r = t.nextPart.get(n)
      , o = r ? Dx(e.slice(1), r) : void 0;
    if (o)
        return o;
    if (t.validators.length === 0)
        return;
    const s = e.join(ih);
    return (i = t.validators.find( ({validator: a}) => a(s))) == null ? void 0 : i.classGroupId
}
  , Rm = /^\[(.+)\]$/
  , kP = e => {
    if (Rm.test(e)) {
        const t = Rm.exec(e)[1]
          , n = t == null ? void 0 : t.substring(0, t.indexOf(":"));
        if (n)
            return "arbitrary.." + n
    }
}
  , NP = e => {
    const {theme: t, prefix: n} = e
      , r = {
        nextPart: new Map,
        validators: []
    };
    return MP(Object.entries(e.classGroups), n).forEach( ([s,i]) => {
        wd(i, r, s, t)
    }
    ),
    r
}
  , wd = (e, t, n, r) => {
    e.forEach(o => {
        if (typeof o == "string") {
            const s = o === "" ? t : km(t, o);
            s.classGroupId = n;
            return
        }
        if (typeof o == "function") {
            if (AP(o)) {
                wd(o(r), t, n, r);
                return
            }
            t.validators.push({
                validator: o,
                classGroupId: n
            });
            return
        }
        Object.entries(o).forEach( ([s,i]) => {
            wd(i, km(t, s), n, r)
        }
        )
    }
    )
}
  , km = (e, t) => {
    let n = e;
    return t.split(ih).forEach(r => {
        n.nextPart.has(r) || n.nextPart.set(r, {
            nextPart: new Map,
            validators: []
        }),
        n = n.nextPart.get(r)
    }
    ),
    n
}
  , AP = e => e.isThemeGetter
  , MP = (e, t) => t ? e.map( ([n,r]) => {
    const o = r.map(s => typeof s == "string" ? t + s : typeof s == "object" ? Object.fromEntries(Object.entries(s).map( ([i,a]) => [t + i, a])) : s);
    return [n, o]
}
) : e
  , jP = e => {
    if (e < 1)
        return {
            get: () => {}
            ,
            set: () => {}
        };
    let t = 0
      , n = new Map
      , r = new Map;
    const o = (s, i) => {
        n.set(s, i),
        t++,
        t > e && (t = 0,
        r = n,
        n = new Map)
    }
    ;
    return {
        get(s) {
            let i = n.get(s);
            if (i !== void 0)
                return i;
            if ((i = r.get(s)) !== void 0)
                return o(s, i),
                i
        },
        set(s, i) {
            n.has(s) ? n.set(s, i) : o(s, i)
        }
    }
}
  , Ix = "!"
  , DP = e => {
    const {separator: t, experimentalParseClassName: n} = e
      , r = t.length === 1
      , o = t[0]
      , s = t.length
      , i = a => {
        const l = [];
        let u = 0, c = 0, d;
        for (let w = 0; w < a.length; w++) {
            let v = a[w];
            if (u === 0) {
                if (v === o && (r || a.slice(w, w + s) === t)) {
                    l.push(a.slice(c, w)),
                    c = w + s;
                    continue
                }
                if (v === "/") {
                    d = w;
                    continue
                }
            }
            v === "[" ? u++ : v === "]" && u--
        }
        const f = l.length === 0 ? a : a.substring(c)
          , h = f.startsWith(Ix)
          , S = h ? f.substring(1) : f
          , p = d && d > c ? d - c : void 0;
        return {
            modifiers: l,
            hasImportantModifier: h,
            baseClassName: S,
            maybePostfixModifierPosition: p
        }
    }
    ;
    return n ? a => n({
        className: a,
        parseClassName: i
    }) : i
}
  , IP = e => {
    if (e.length <= 1)
        return e;
    const t = [];
    let n = [];
    return e.forEach(r => {
        r[0] === "[" ? (t.push(...n.sort(), r),
        n = []) : n.push(r)
    }
    ),
    t.push(...n.sort()),
    t
}
  , OP = e => ({
    cache: jP(e.cacheSize),
    parseClassName: DP(e),
    ...RP(e)
})
  , LP = /\s+/
  , _P = (e, t) => {
    const {parseClassName: n, getClassGroupId: r, getConflictingClassGroupIds: o} = t
      , s = []
      , i = e.trim().split(LP);
    let a = "";
    for (let l = i.length - 1; l >= 0; l -= 1) {
        const u = i[l]
          , {modifiers: c, hasImportantModifier: d, baseClassName: f, maybePostfixModifierPosition: h} = n(u);
        let S = !!h
          , p = r(S ? f.substring(0, h) : f);
        if (!p) {
            if (!S) {
                a = u + (a.length > 0 ? " " + a : a);
                continue
            }
            if (p = r(f),
            !p) {
                a = u + (a.length > 0 ? " " + a : a);
                continue
            }
            S = !1
        }
        const w = IP(c).join(":")
          , v = d ? w + Ix : w
          , g = v + p;
        if (s.includes(g))
            continue;
        s.push(g);
        const x = o(p, S);
        for (let C = 0; C < x.length; ++C) {
            const b = x[C];
            s.push(v + b)
        }
        a = u + (a.length > 0 ? " " + a : a)
    }
    return a
}
;
function FP() {
    let e = 0, t, n, r = "";
    for (; e < arguments.length; )
        (t = arguments[e++]) && (n = Ox(t)) && (r && (r += " "),
        r += n);
    return r
}
const Ox = e => {
    if (typeof e == "string")
        return e;
    let t, n = "";
    for (let r = 0; r < e.length; r++)
        e[r] && (t = Ox(e[r])) && (n && (n += " "),
        n += t);
    return n
}
;
function VP(e, ...t) {
    let n, r, o, s = i;
    function i(l) {
        const u = t.reduce( (c, d) => d(c), e());
        return n = OP(u),
        r = n.cache.get,
        o = n.cache.set,
        s = a,
        a(l)
    }
    function a(l) {
        const u = r(l);
        if (u)
            return u;
        const c = _P(l, n);
        return o(l, c),
        c
    }
    return function() {
        return s(FP.apply(null, arguments))
    }
}
const de = e => {
    const t = n => n[e] || [];
    return t.isThemeGetter = !0,
    t
}
  , Lx = /^\[(?:([a-z-]+):)?(.+)\]$/i
  , BP = /^\d+\/\d+$/
  , $P = new Set(["px", "full", "screen"])
  , zP = /^(\d+(\.\d+)?)?(xs|sm|md|lg|xl)$/
  , UP = /\d+(%|px|r?em|[sdl]?v([hwib]|min|max)|pt|pc|in|cm|mm|cap|ch|ex|r?lh|cq(w|h|i|b|min|max))|\b(calc|min|max|clamp)\(.+\)|^0$/
  , WP = /^(rgba?|hsla?|hwb|(ok)?(lab|lch))\(.+\)$/
  , HP = /^(inset_)?-?((\d+)?\.?(\d+)[a-z]+|0)_-?((\d+)?\.?(\d+)[a-z]+|0)/
  , KP = /^(url|image|image-set|cross-fade|element|(repeating-)?(linear|radial|conic)-gradient)\(.+\)$/
  , mn = e => Do(e) || $P.has(e) || BP.test(e)
  , Ln = e => us(e, "length", eR)
  , Do = e => !!e && !Number.isNaN(Number(e))
  , Xu = e => us(e, "number", Do)
  , ks = e => !!e && Number.isInteger(Number(e))
  , GP = e => e.endsWith("%") && Do(e.slice(0, -1))
  , q = e => Lx.test(e)
  , _n = e => zP.test(e)
  , YP = new Set(["length", "size", "percentage"])
  , QP = e => us(e, YP, _x)
  , XP = e => us(e, "position", _x)
  , qP = new Set(["image", "url"])
  , ZP = e => us(e, qP, nR)
  , JP = e => us(e, "", tR)
  , Ns = () => !0
  , us = (e, t, n) => {
    const r = Lx.exec(e);
    return r ? r[1] ? typeof t == "string" ? r[1] === t : t.has(r[1]) : n(r[2]) : !1
}
  , eR = e => UP.test(e) && !WP.test(e)
  , _x = () => !1
  , tR = e => HP.test(e)
  , nR = e => KP.test(e)
  , rR = () => {
    const e = de("colors")
      , t = de("spacing")
      , n = de("blur")
      , r = de("brightness")
      , o = de("borderColor")
      , s = de("borderRadius")
      , i = de("borderSpacing")
      , a = de("borderWidth")
      , l = de("contrast")
      , u = de("grayscale")
      , c = de("hueRotate")
      , d = de("invert")
      , f = de("gap")
      , h = de("gradientColorStops")
      , S = de("gradientColorStopPositions")
      , p = de("inset")
      , w = de("margin")
      , v = de("opacity")
      , g = de("padding")
      , x = de("saturate")
      , C = de("scale")
      , b = de("sepia")
      , E = de("skew")
      , T = de("space")
      , P = de("translate")
      , N = () => ["auto", "contain", "none"]
      , M = () => ["auto", "hidden", "clip", "visible", "scroll"]
      , V = () => ["auto", q, t]
      , O = () => [q, t]
      , W = () => ["", mn, Ln]
      , D = () => ["auto", Do, q]
      , H = () => ["bottom", "center", "left", "left-bottom", "left-top", "right", "right-bottom", "right-top", "top"]
      , z = () => ["solid", "dashed", "dotted", "double", "none"]
      , F = () => ["normal", "multiply", "screen", "overlay", "darken", "lighten", "color-dodge", "color-burn", "hard-light", "soft-light", "difference", "exclusion", "hue", "saturation", "color", "luminosity"]
      , R = () => ["start", "end", "center", "between", "around", "evenly", "stretch"]
      , k = () => ["", "0", q]
      , L = () => ["auto", "avoid", "all", "avoid-page", "page", "left", "right", "column"]
      , K = () => [Do, q];
    return {
        cacheSize: 500,
        separator: ":",
        theme: {
            colors: [Ns],
            spacing: [mn, Ln],
            blur: ["none", "", _n, q],
            brightness: K(),
            borderColor: [e],
            borderRadius: ["none", "", "full", _n, q],
            borderSpacing: O(),
            borderWidth: W(),
            contrast: K(),
            grayscale: k(),
            hueRotate: K(),
            invert: k(),
            gap: O(),
            gradientColorStops: [e],
            gradientColorStopPositions: [GP, Ln],
            inset: V(),
            margin: V(),
            opacity: K(),
            padding: O(),
            saturate: K(),
            scale: K(),
            sepia: k(),
            skew: K(),
            space: O(),
            translate: O()
        },
        classGroups: {
            aspect: [{
                aspect: ["auto", "square", "video", q]
            }],
            container: ["container"],
            columns: [{
                columns: [_n]
            }],
            "break-after": [{
                "break-after": L()
            }],
            "break-before": [{
                "break-before": L()
            }],
            "break-inside": [{
                "break-inside": ["auto", "avoid", "avoid-page", "avoid-column"]
            }],
            "box-decoration": [{
                "box-decoration": ["slice", "clone"]
            }],
            box: [{
                box: ["border", "content"]
            }],
            display: ["block", "inline-block", "inline", "flex", "inline-flex", "table", "inline-table", "table-caption", "table-cell", "table-column", "table-column-group", "table-footer-group", "table-header-group", "table-row-group", "table-row", "flow-root", "grid", "inline-grid", "contents", "list-item", "hidden"],
            float: [{
                float: ["right", "left", "none", "start", "end"]
            }],
            clear: [{
                clear: ["left", "right", "both", "none", "start", "end"]
            }],
            isolation: ["isolate", "isolation-auto"],
            "object-fit": [{
                object: ["contain", "cover", "fill", "none", "scale-down"]
            }],
            "object-position": [{
                object: [...H(), q]
            }],
            overflow: [{
                overflow: M()
            }],
            "overflow-x": [{
                "overflow-x": M()
            }],
            "overflow-y": [{
                "overflow-y": M()
            }],
            overscroll: [{
                overscroll: N()
            }],
            "overscroll-x": [{
                "overscroll-x": N()
            }],
            "overscroll-y": [{
                "overscroll-y": N()
            }],
            position: ["static", "fixed", "absolute", "relative", "sticky"],
            inset: [{
                inset: [p]
            }],
            "inset-x": [{
                "inset-x": [p]
            }],
            "inset-y": [{
                "inset-y": [p]
            }],
            start: [{
                start: [p]
            }],
            end: [{
                end: [p]
            }],
            top: [{
                top: [p]
            }],
            right: [{
                right: [p]
            }],
            bottom: [{
                bottom: [p]
            }],
            left: [{
                left: [p]
            }],
            visibility: ["visible", "invisible", "collapse"],
            z: [{
                z: ["auto", ks, q]
            }],
            basis: [{
                basis: V()
            }],
            "flex-direction": [{
                flex: ["row", "row-reverse", "col", "col-reverse"]
            }],
            "flex-wrap": [{
                flex: ["wrap", "wrap-reverse", "nowrap"]
            }],
            flex: [{
                flex: ["1", "auto", "initial", "none", q]
            }],
            grow: [{
                grow: k()
            }],
            shrink: [{
                shrink: k()
            }],
            order: [{
                order: ["first", "last", "none", ks, q]
            }],
            "grid-cols": [{
                "grid-cols": [Ns]
            }],
            "col-start-end": [{
                col: ["auto", {
                    span: ["full", ks, q]
                }, q]
            }],
            "col-start": [{
                "col-start": D()
            }],
            "col-end": [{
                "col-end": D()
            }],
            "grid-rows": [{
                "grid-rows": [Ns]
            }],
            "row-start-end": [{
                row: ["auto", {
                    span: [ks, q]
                }, q]
            }],
            "row-start": [{
                "row-start": D()
            }],
            "row-end": [{
                "row-end": D()
            }],
            "grid-flow": [{
                "grid-flow": ["row", "col", "dense", "row-dense", "col-dense"]
            }],
            "auto-cols": [{
                "auto-cols": ["auto", "min", "max", "fr", q]
            }],
            "auto-rows": [{
                "auto-rows": ["auto", "min", "max", "fr", q]
            }],
            gap: [{
                gap: [f]
            }],
            "gap-x": [{
                "gap-x": [f]
            }],
            "gap-y": [{
                "gap-y": [f]
            }],
            "justify-content": [{
                justify: ["normal", ...R()]
            }],
            "justify-items": [{
                "justify-items": ["start", "end", "center", "stretch"]
            }],
            "justify-self": [{
                "justify-self": ["auto", "start", "end", "center", "stretch"]
            }],
            "align-content": [{
                content: ["normal", ...R(), "baseline"]
            }],
            "align-items": [{
                items: ["start", "end", "center", "baseline", "stretch"]
            }],
            "align-self": [{
                self: ["auto", "start", "end", "center", "stretch", "baseline"]
            }],
            "place-content": [{
                "place-content": [...R(), "baseline"]
            }],
            "place-items": [{
                "place-items": ["start", "end", "center", "baseline", "stretch"]
            }],
            "place-self": [{
                "place-self": ["auto", "start", "end", "center", "stretch"]
            }],
            p: [{
                p: [g]
            }],
            px: [{
                px: [g]
            }],
            py: [{
                py: [g]
            }],
            ps: [{
                ps: [g]
            }],
            pe: [{
                pe: [g]
            }],
            pt: [{
                pt: [g]
            }],
            pr: [{
                pr: [g]
            }],
            pb: [{
                pb: [g]
            }],
            pl: [{
                pl: [g]
            }],
            m: [{
                m: [w]
            }],
            mx: [{
                mx: [w]
            }],
            my: [{
                my: [w]
            }],
            ms: [{
                ms: [w]
            }],
            me: [{
                me: [w]
            }],
            mt: [{
                mt: [w]
            }],
            mr: [{
                mr: [w]
            }],
            mb: [{
                mb: [w]
            }],
            ml: [{
                ml: [w]
            }],
            "space-x": [{
                "space-x": [T]
            }],
            "space-x-reverse": ["space-x-reverse"],
            "space-y": [{
                "space-y": [T]
            }],
            "space-y-reverse": ["space-y-reverse"],
            w: [{
                w: ["auto", "min", "max", "fit", "svw", "lvw", "dvw", q, t]
            }],
            "min-w": [{
                "min-w": [q, t, "min", "max", "fit"]
            }],
            "max-w": [{
                "max-w": [q, t, "none", "full", "min", "max", "fit", "prose", {
                    screen: [_n]
                }, _n]
            }],
            h: [{
                h: [q, t, "auto", "min", "max", "fit", "svh", "lvh", "dvh"]
            }],
            "min-h": [{
                "min-h": [q, t, "min", "max", "fit", "svh", "lvh", "dvh"]
            }],
            "max-h": [{
                "max-h": [q, t, "min", "max", "fit", "svh", "lvh", "dvh"]
            }],
            size: [{
                size: [q, t, "auto", "min", "max", "fit"]
            }],
            "font-size": [{
                text: ["base", _n, Ln]
            }],
            "font-smoothing": ["antialiased", "subpixel-antialiased"],
            "font-style": ["italic", "not-italic"],
            "font-weight": [{
                font: ["thin", "extralight", "light", "normal", "medium", "semibold", "bold", "extrabold", "black", Xu]
            }],
            "font-family": [{
                font: [Ns]
            }],
            "fvn-normal": ["normal-nums"],
            "fvn-ordinal": ["ordinal"],
            "fvn-slashed-zero": ["slashed-zero"],
            "fvn-figure": ["lining-nums", "oldstyle-nums"],
            "fvn-spacing": ["proportional-nums", "tabular-nums"],
            "fvn-fraction": ["diagonal-fractions", "stacked-fractions"],
            tracking: [{
                tracking: ["tighter", "tight", "normal", "wide", "wider", "widest", q]
            }],
            "line-clamp": [{
                "line-clamp": ["none", Do, Xu]
            }],
            leading: [{
                leading: ["none", "tight", "snug", "normal", "relaxed", "loose", mn, q]
            }],
            "list-image": [{
                "list-image": ["none", q]
            }],
            "list-style-type": [{
                list: ["none", "disc", "decimal", q]
            }],
            "list-style-position": [{
                list: ["inside", "outside"]
            }],
            "placeholder-color": [{
                placeholder: [e]
            }],
            "placeholder-opacity": [{
                "placeholder-opacity": [v]
            }],
            "text-alignment": [{
                text: ["left", "center", "right", "justify", "start", "end"]
            }],
            "text-color": [{
                text: [e]
            }],
            "text-opacity": [{
                "text-opacity": [v]
            }],
            "text-decoration": ["underline", "overline", "line-through", "no-underline"],
            "text-decoration-style": [{
                decoration: [...z(), "wavy"]
            }],
            "text-decoration-thickness": [{
                decoration: ["auto", "from-font", mn, Ln]
            }],
            "underline-offset": [{
                "underline-offset": ["auto", mn, q]
            }],
            "text-decoration-color": [{
                decoration: [e]
            }],
            "text-transform": ["uppercase", "lowercase", "capitalize", "normal-case"],
            "text-overflow": ["truncate", "text-ellipsis", "text-clip"],
            "text-wrap": [{
                text: ["wrap", "nowrap", "balance", "pretty"]
            }],
            indent: [{
                indent: O()
            }],
            "vertical-align": [{
                align: ["baseline", "top", "middle", "bottom", "text-top", "text-bottom", "sub", "super", q]
            }],
            whitespace: [{
                whitespace: ["normal", "nowrap", "pre", "pre-line", "pre-wrap", "break-spaces"]
            }],
            break: [{
                break: ["normal", "words", "all", "keep"]
            }],
            hyphens: [{
                hyphens: ["none", "manual", "auto"]
            }],
            content: [{
                content: ["none", q]
            }],
            "bg-attachment": [{
                bg: ["fixed", "local", "scroll"]
            }],
            "bg-clip": [{
                "bg-clip": ["border", "padding", "content", "text"]
            }],
            "bg-opacity": [{
                "bg-opacity": [v]
            }],
            "bg-origin": [{
                "bg-origin": ["border", "padding", "content"]
            }],
            "bg-position": [{
                bg: [...H(), XP]
            }],
            "bg-repeat": [{
                bg: ["no-repeat", {
                    repeat: ["", "x", "y", "round", "space"]
                }]
            }],
            "bg-size": [{
                bg: ["auto", "cover", "contain", QP]
            }],
            "bg-image": [{
                bg: ["none", {
                    "gradient-to": ["t", "tr", "r", "br", "b", "bl", "l", "tl"]
                }, ZP]
            }],
            "bg-color": [{
                bg: [e]
            }],
            "gradient-from-pos": [{
                from: [S]
            }],
            "gradient-via-pos": [{
                via: [S]
            }],
            "gradient-to-pos": [{
                to: [S]
            }],
            "gradient-from": [{
                from: [h]
            }],
            "gradient-via": [{
                via: [h]
            }],
            "gradient-to": [{
                to: [h]
            }],
            rounded: [{
                rounded: [s]
            }],
            "rounded-s": [{
                "rounded-s": [s]
            }],
            "rounded-e": [{
                "rounded-e": [s]
            }],
            "rounded-t": [{
                "rounded-t": [s]
            }],
            "rounded-r": [{
                "rounded-r": [s]
            }],
            "rounded-b": [{
                "rounded-b": [s]
            }],
            "rounded-l": [{
                "rounded-l": [s]
            }],
            "rounded-ss": [{
                "rounded-ss": [s]
            }],
            "rounded-se": [{
                "rounded-se": [s]
            }],
            "rounded-ee": [{
                "rounded-ee": [s]
            }],
            "rounded-es": [{
                "rounded-es": [s]
            }],
            "rounded-tl": [{
                "rounded-tl": [s]
            }],
            "rounded-tr": [{
                "rounded-tr": [s]
            }],
            "rounded-br": [{
                "rounded-br": [s]
            }],
            "rounded-bl": [{
                "rounded-bl": [s]
            }],
            "border-w": [{
                border: [a]
            }],
            "border-w-x": [{
                "border-x": [a]
            }],
            "border-w-y": [{
                "border-y": [a]
            }],
            "border-w-s": [{
                "border-s": [a]
            }],
            "border-w-e": [{
                "border-e": [a]
            }],
            "border-w-t": [{
                "border-t": [a]
            }],
            "border-w-r": [{
                "border-r": [a]
            }],
            "border-w-b": [{
                "border-b": [a]
            }],
            "border-w-l": [{
                "border-l": [a]
            }],
            "border-opacity": [{
                "border-opacity": [v]
            }],
            "border-style": [{
                border: [...z(), "hidden"]
            }],
            "divide-x": [{
                "divide-x": [a]
            }],
            "divide-x-reverse": ["divide-x-reverse"],
            "divide-y": [{
                "divide-y": [a]
            }],
            "divide-y-reverse": ["divide-y-reverse"],
            "divide-opacity": [{
                "divide-opacity": [v]
            }],
            "divide-style": [{
                divide: z()
            }],
            "border-color": [{
                border: [o]
            }],
            "border-color-x": [{
                "border-x": [o]
            }],
            "border-color-y": [{
                "border-y": [o]
            }],
            "border-color-s": [{
                "border-s": [o]
            }],
            "border-color-e": [{
                "border-e": [o]
            }],
            "border-color-t": [{
                "border-t": [o]
            }],
            "border-color-r": [{
                "border-r": [o]
            }],
            "border-color-b": [{
                "border-b": [o]
            }],
            "border-color-l": [{
                "border-l": [o]
            }],
            "divide-color": [{
                divide: [o]
            }],
            "outline-style": [{
                outline: ["", ...z()]
            }],
            "outline-offset": [{
                "outline-offset": [mn, q]
            }],
            "outline-w": [{
                outline: [mn, Ln]
            }],
            "outline-color": [{
                outline: [e]
            }],
            "ring-w": [{
                ring: W()
            }],
            "ring-w-inset": ["ring-inset"],
            "ring-color": [{
                ring: [e]
            }],
            "ring-opacity": [{
                "ring-opacity": [v]
            }],
            "ring-offset-w": [{
                "ring-offset": [mn, Ln]
            }],
            "ring-offset-color": [{
                "ring-offset": [e]
            }],
            shadow: [{
                shadow: ["", "inner", "none", _n, JP]
            }],
            "shadow-color": [{
                shadow: [Ns]
            }],
            opacity: [{
                opacity: [v]
            }],
            "mix-blend": [{
                "mix-blend": [...F(), "plus-lighter", "plus-darker"]
            }],
            "bg-blend": [{
                "bg-blend": F()
            }],
            filter: [{
                filter: ["", "none"]
            }],
            blur: [{
                blur: [n]
            }],
            brightness: [{
                brightness: [r]
            }],
            contrast: [{
                contrast: [l]
            }],
            "drop-shadow": [{
                "drop-shadow": ["", "none", _n, q]
            }],
            grayscale: [{
                grayscale: [u]
            }],
            "hue-rotate": [{
                "hue-rotate": [c]
            }],
            invert: [{
                invert: [d]
            }],
            saturate: [{
                saturate: [x]
            }],
            sepia: [{
                sepia: [b]
            }],
            "backdrop-filter": [{
                "backdrop-filter": ["", "none"]
            }],
            "backdrop-blur": [{
                "backdrop-blur": [n]
            }],
            "backdrop-brightness": [{
                "backdrop-brightness": [r]
            }],
            "backdrop-contrast": [{
                "backdrop-contrast": [l]
            }],
            "backdrop-grayscale": [{
                "backdrop-grayscale": [u]
            }],
            "backdrop-hue-rotate": [{
                "backdrop-hue-rotate": [c]
            }],
            "backdrop-invert": [{
                "backdrop-invert": [d]
            }],
            "backdrop-opacity": [{
                "backdrop-opacity": [v]
            }],
            "backdrop-saturate": [{
                "backdrop-saturate": [x]
            }],
            "backdrop-sepia": [{
                "backdrop-sepia": [b]
            }],
            "border-collapse": [{
                border: ["collapse", "separate"]
            }],
            "border-spacing": [{
                "border-spacing": [i]
            }],
            "border-spacing-x": [{
                "border-spacing-x": [i]
            }],
            "border-spacing-y": [{
                "border-spacing-y": [i]
            }],
            "table-layout": [{
                table: ["auto", "fixed"]
            }],
            caption: [{
                caption: ["top", "bottom"]
            }],
            transition: [{
                transition: ["none", "all", "", "colors", "opacity", "shadow", "transform", q]
            }],
            duration: [{
                duration: K()
            }],
            ease: [{
                ease: ["linear", "in", "out", "in-out", q]
            }],
            delay: [{
                delay: K()
            }],
            animate: [{
                animate: ["none", "spin", "ping", "pulse", "bounce", q]
            }],
            transform: [{
                transform: ["", "gpu", "none"]
            }],
            scale: [{
                scale: [C]
            }],
            "scale-x": [{
                "scale-x": [C]
            }],
            "scale-y": [{
                "scale-y": [C]
            }],
            rotate: [{
                rotate: [ks, q]
            }],
            "translate-x": [{
                "translate-x": [P]
            }],
            "translate-y": [{
                "translate-y": [P]
            }],
            "skew-x": [{
                "skew-x": [E]
            }],
            "skew-y": [{
                "skew-y": [E]
            }],
            "transform-origin": [{
                origin: ["center", "top", "top-right", "right", "bottom-right", "bottom", "bottom-left", "left", "top-left", q]
            }],
            accent: [{
                accent: ["auto", e]
            }],
            appearance: [{
                appearance: ["none", "auto"]
            }],
            cursor: [{
                cursor: ["auto", "default", "pointer", "wait", "text", "move", "help", "not-allowed", "none", "context-menu", "progress", "cell", "crosshair", "vertical-text", "alias", "copy", "no-drop", "grab", "grabbing", "all-scroll", "col-resize", "row-resize", "n-resize", "e-resize", "s-resize", "w-resize", "ne-resize", "nw-resize", "se-resize", "sw-resize", "ew-resize", "ns-resize", "nesw-resize", "nwse-resize", "zoom-in", "zoom-out", q]
            }],
            "caret-color": [{
                caret: [e]
            }],
            "pointer-events": [{
                "pointer-events": ["none", "auto"]
            }],
            resize: [{
                resize: ["none", "y", "x", ""]
            }],
            "scroll-behavior": [{
                scroll: ["auto", "smooth"]
            }],
            "scroll-m": [{
                "scroll-m": O()
            }],
            "scroll-mx": [{
                "scroll-mx": O()
            }],
            "scroll-my": [{
                "scroll-my": O()
            }],
            "scroll-ms": [{
                "scroll-ms": O()
            }],
            "scroll-me": [{
                "scroll-me": O()
            }],
            "scroll-mt": [{
                "scroll-mt": O()
            }],
            "scroll-mr": [{
                "scroll-mr": O()
            }],
            "scroll-mb": [{
                "scroll-mb": O()
            }],
            "scroll-ml": [{
                "scroll-ml": O()
            }],
            "scroll-p": [{
                "scroll-p": O()
            }],
            "scroll-px": [{
                "scroll-px": O()
            }],
            "scroll-py": [{
                "scroll-py": O()
            }],
            "scroll-ps": [{
                "scroll-ps": O()
            }],
            "scroll-pe": [{
                "scroll-pe": O()
            }],
            "scroll-pt": [{
                "scroll-pt": O()
            }],
            "scroll-pr": [{
                "scroll-pr": O()
            }],
            "scroll-pb": [{
                "scroll-pb": O()
            }],
            "scroll-pl": [{
                "scroll-pl": O()
            }],
            "snap-align": [{
                snap: ["start", "end", "center", "align-none"]
            }],
            "snap-stop": [{
                snap: ["normal", "always"]
            }],
            "snap-type": [{
                snap: ["none", "x", "y", "both"]
            }],
            "snap-strictness": [{
                snap: ["mandatory", "proximity"]
            }],
            touch: [{
                touch: ["auto", "none", "manipulation"]
            }],
            "touch-x": [{
                "touch-pan": ["x", "left", "right"]
            }],
            "touch-y": [{
                "touch-pan": ["y", "up", "down"]
            }],
            "touch-pz": ["touch-pinch-zoom"],
            select: [{
                select: ["none", "text", "all", "auto"]
            }],
            "will-change": [{
                "will-change": ["auto", "scroll", "contents", "transform", q]
            }],
            fill: [{
                fill: [e, "none"]
            }],
            "stroke-w": [{
                stroke: [mn, Ln, Xu]
            }],
            stroke: [{
                stroke: [e, "none"]
            }],
            sr: ["sr-only", "not-sr-only"],
            "forced-color-adjust": [{
                "forced-color-adjust": ["auto", "none"]
            }]
        },
        conflictingClassGroups: {
            overflow: ["overflow-x", "overflow-y"],
            overscroll: ["overscroll-x", "overscroll-y"],
            inset: ["inset-x", "inset-y", "start", "end", "top", "right", "bottom", "left"],
            "inset-x": ["right", "left"],
            "inset-y": ["top", "bottom"],
            flex: ["basis", "grow", "shrink"],
            gap: ["gap-x", "gap-y"],
            p: ["px", "py", "ps", "pe", "pt", "pr", "pb", "pl"],
            px: ["pr", "pl"],
            py: ["pt", "pb"],
            m: ["mx", "my", "ms", "me", "mt", "mr", "mb", "ml"],
            mx: ["mr", "ml"],
            my: ["mt", "mb"],
            size: ["w", "h"],
            "font-size": ["leading"],
            "fvn-normal": ["fvn-ordinal", "fvn-slashed-zero", "fvn-figure", "fvn-spacing", "fvn-fraction"],
            "fvn-ordinal": ["fvn-normal"],
            "fvn-slashed-zero": ["fvn-normal"],
            "fvn-figure": ["fvn-normal"],
            "fvn-spacing": ["fvn-normal"],
            "fvn-fraction": ["fvn-normal"],
            "line-clamp": ["display", "overflow"],
            rounded: ["rounded-s", "rounded-e", "rounded-t", "rounded-r", "rounded-b", "rounded-l", "rounded-ss", "rounded-se", "rounded-ee", "rounded-es", "rounded-tl", "rounded-tr", "rounded-br", "rounded-bl"],
            "rounded-s": ["rounded-ss", "rounded-es"],
            "rounded-e": ["rounded-se", "rounded-ee"],
            "rounded-t": ["rounded-tl", "rounded-tr"],
            "rounded-r": ["rounded-tr", "rounded-br"],
            "rounded-b": ["rounded-br", "rounded-bl"],
            "rounded-l": ["rounded-tl", "rounded-bl"],
            "border-spacing": ["border-spacing-x", "border-spacing-y"],
            "border-w": ["border-w-s", "border-w-e", "border-w-t", "border-w-r", "border-w-b", "border-w-l"],
            "border-w-x": ["border-w-r", "border-w-l"],
            "border-w-y": ["border-w-t", "border-w-b"],
            "border-color": ["border-color-s", "border-color-e", "border-color-t", "border-color-r", "border-color-b", "border-color-l"],
            "border-color-x": ["border-color-r", "border-color-l"],
            "border-color-y": ["border-color-t", "border-color-b"],
            "scroll-m": ["scroll-mx", "scroll-my", "scroll-ms", "scroll-me", "scroll-mt", "scroll-mr", "scroll-mb", "scroll-ml"],
            "scroll-mx": ["scroll-mr", "scroll-ml"],
            "scroll-my": ["scroll-mt", "scroll-mb"],
            "scroll-p": ["scroll-px", "scroll-py", "scroll-ps", "scroll-pe", "scroll-pt", "scroll-pr", "scroll-pb", "scroll-pl"],
            "scroll-px": ["scroll-pr", "scroll-pl"],
            "scroll-py": ["scroll-pt", "scroll-pb"],
            touch: ["touch-x", "touch-y", "touch-pz"],
            "touch-x": ["touch"],
            "touch-y": ["touch"],
            "touch-pz": ["touch"]
        },
        conflictingClassGroupModifiers: {
            "font-size": ["leading"]
        }
    }
}
  , oR = VP(rR);
function Re(...e) {
    return oR(kx(e))
}
const sR = gP
  , Fx = m.forwardRef( ({className: e, ...t}, n) => y.jsx(Sx, {
    ref: n,
    className: Re("fixed top-0 z-[100] flex max-h-screen w-full flex-col-reverse p-4 sm:bottom-0 sm:right-0 sm:top-auto sm:flex-col md:max-w-[420px]", e),
    ...t
}));
Fx.displayName = Sx.displayName;
const iR = Nx("group pointer-events-auto relative flex w-full items-center justify-between space-x-4 overflow-hidden rounded-md border p-6 pr-8 shadow-lg transition-all data-[swipe=cancel]:translate-x-0 data-[swipe=end]:translate-x-[var(--radix-toast-swipe-end-x)] data-[swipe=move]:translate-x-[var(--radix-toast-swipe-move-x)] data-[swipe=move]:transition-none data-[state=open]:animate-in data-[state=closed]:animate-out data-[swipe=end]:animate-out data-[state=closed]:fade-out-80 data-[state=closed]:slide-out-to-right-full data-[state=open]:slide-in-from-top-full data-[state=open]:sm:slide-in-from-bottom-full", {
    variants: {
        variant: {
            default: "border bg-background text-foreground",
            destructive: "destructive group border-destructive bg-destructive text-destructive-foreground"
        }
    },
    defaultVariants: {
        variant: "default"
    }
})
  , Vx = m.forwardRef( ({className: e, variant: t, ...n}, r) => y.jsx(Cx, {
    ref: r,
    className: Re(iR({
        variant: t
    }), e),
    ...n
}));
Vx.displayName = Cx.displayName;
const aR = m.forwardRef( ({className: e, ...t}, n) => y.jsx(Tx, {
    ref: n,
    className: Re("inline-flex h-8 shrink-0 items-center justify-center rounded-md border bg-transparent px-3 text-sm font-medium ring-offset-background transition-colors group-[.destructive]:border-muted/40 hover:bg-secondary group-[.destructive]:hover:border-destructive/30 group-[.destructive]:hover:bg-destructive group-[.destructive]:hover:text-destructive-foreground focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 group-[.destructive]:focus:ring-destructive disabled:pointer-events-none disabled:opacity-50", e),
    ...t
}));
aR.displayName = Tx.displayName;
const Bx = m.forwardRef( ({className: e, ...t}, n) => y.jsx(Px, {
    ref: n,
    className: Re("absolute right-2 top-2 rounded-md p-1 text-foreground/50 opacity-0 transition-opacity group-hover:opacity-100 group-[.destructive]:text-red-300 hover:text-foreground group-[.destructive]:hover:text-red-50 focus:opacity-100 focus:outline-none focus:ring-2 group-[.destructive]:focus:ring-red-400 group-[.destructive]:focus:ring-offset-red-600", e),
    "toast-close": "",
    ...t,
    children: y.jsx(jx, {
        className: "h-4 w-4"
    })
}));
Bx.displayName = Px.displayName;
const $x = m.forwardRef( ({className: e, ...t}, n) => y.jsx(bx, {
    ref: n,
    className: Re("text-sm font-semibold", e),
    ...t
}));
$x.displayName = bx.displayName;
const zx = m.forwardRef( ({className: e, ...t}, n) => y.jsx(Ex, {
    ref: n,
    className: Re("text-sm opacity-90", e),
    ...t
}));
zx.displayName = Ex.displayName;
function lR() {
    const {toasts: e} = TT();
    return y.jsxs(sR, {
        children: [e.map(function({id: t, title: n, description: r, action: o, ...s}) {
            return y.jsxs(Vx, {
                ...s,
                children: [y.jsxs("div", {
                    className: "grid gap-1",
                    children: [n && y.jsx($x, {
                        children: n
                    }), r && y.jsx(zx, {
                        children: r
                    })]
                }), o, y.jsx(Bx, {})]
            }, t)
        }), y.jsx(Fx, {})]
    })
}
var Nm = ["light", "dark"]
  , uR = "(prefers-color-scheme: dark)"
  , cR = m.createContext(void 0)
  , dR = {
    setTheme: e => {}
    ,
    themes: []
}
  , fR = () => {
    var e;
    return (e = m.useContext(cR)) != null ? e : dR
}
;
m.memo( ({forcedTheme: e, storageKey: t, attribute: n, enableSystem: r, enableColorScheme: o, defaultTheme: s, value: i, attrs: a, nonce: l}) => {
    let u = s === "system"
      , c = n === "class" ? `var d=document.documentElement,c=d.classList;${`c.remove(${a.map(S => `'${S}'`).join(",")})`};` : `var d=document.documentElement,n='${n}',s='setAttribute';`
      , d = o ? Nm.includes(s) && s ? `if(e==='light'||e==='dark'||!e)d.style.colorScheme=e||'${s}'` : "if(e==='light'||e==='dark')d.style.colorScheme=e" : ""
      , f = (S, p=!1, w=!0) => {
        let v = i ? i[S] : S
          , g = p ? S + "|| ''" : `'${v}'`
          , x = "";
        return o && w && !p && Nm.includes(S) && (x += `d.style.colorScheme = '${S}';`),
        n === "class" ? p || v ? x += `c.add(${g})` : x += "null" : v && (x += `d[s](n,${g})`),
        x
    }
      , h = e ? `!function(){${c}${f(e)}}()` : r ? `!function(){try{${c}var e=localStorage.getItem('${t}');if('system'===e||(!e&&${u})){var t='${uR}',m=window.matchMedia(t);if(m.media!==t||m.matches){${f("dark")}}else{${f("light")}}}else if(e){${i ? `var x=${JSON.stringify(i)};` : ""}${f(i ? "x[e]" : "e", !0)}}${u ? "" : "else{" + f(s, !1, !1) + "}"}${d}}catch(e){}}()` : `!function(){try{${c}var e=localStorage.getItem('${t}');if(e){${i ? `var x=${JSON.stringify(i)};` : ""}${f(i ? "x[e]" : "e", !0)}}else{${f(s, !1, !1)};}${d}}catch(t){}}();`;
    return m.createElement("script", {
        nonce: l,
        dangerouslySetInnerHTML: {
            __html: h
        }
    })
}
);
var hR = e => {
    switch (e) {
    case "success":
        return gR;
    case "info":
        return yR;
    case "warning":
        return vR;
    case "error":
        return xR;
    default:
        return null
    }
}
  , pR = Array(12).fill(0)
  , mR = ({visible: e, className: t}) => I.createElement("div", {
    className: ["sonner-loading-wrapper", t].filter(Boolean).join(" "),
    "data-visible": e
}, I.createElement("div", {
    className: "sonner-spinner"
}, pR.map( (n, r) => I.createElement("div", {
    className: "sonner-loading-bar",
    key: `spinner-bar-${r}`
}))))
  , gR = I.createElement("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 20 20",
    fill: "currentColor",
    height: "20",
    width: "20"
}, I.createElement("path", {
    fillRule: "evenodd",
    d: "M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z",
    clipRule: "evenodd"
}))
  , vR = I.createElement("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 24 24",
    fill: "currentColor",
    height: "20",
    width: "20"
}, I.createElement("path", {
    fillRule: "evenodd",
    d: "M9.401 3.003c1.155-2 4.043-2 5.197 0l7.355 12.748c1.154 2-.29 4.5-2.599 4.5H4.645c-2.309 0-3.752-2.5-2.598-4.5L9.4 3.003zM12 8.25a.75.75 0 01.75.75v3.75a.75.75 0 01-1.5 0V9a.75.75 0 01.75-.75zm0 8.25a.75.75 0 100-1.5.75.75 0 000 1.5z",
    clipRule: "evenodd"
}))
  , yR = I.createElement("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 20 20",
    fill: "currentColor",
    height: "20",
    width: "20"
}, I.createElement("path", {
    fillRule: "evenodd",
    d: "M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a.75.75 0 000 1.5h.253a.25.25 0 01.244.304l-.459 2.066A1.75 1.75 0 0010.747 15H11a.75.75 0 000-1.5h-.253a.25.25 0 01-.244-.304l.459-2.066A1.75 1.75 0 009.253 9H9z",
    clipRule: "evenodd"
}))
  , xR = I.createElement("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 20 20",
    fill: "currentColor",
    height: "20",
    width: "20"
}, I.createElement("path", {
    fillRule: "evenodd",
    d: "M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-5a.75.75 0 01.75.75v4.5a.75.75 0 01-1.5 0v-4.5A.75.75 0 0110 5zm0 10a1 1 0 100-2 1 1 0 000 2z",
    clipRule: "evenodd"
}))
  , wR = I.createElement("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    width: "12",
    height: "12",
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "1.5",
    strokeLinecap: "round",
    strokeLinejoin: "round"
}, I.createElement("line", {
    x1: "18",
    y1: "6",
    x2: "6",
    y2: "18"
}), I.createElement("line", {
    x1: "6",
    y1: "6",
    x2: "18",
    y2: "18"
}))
  , SR = () => {
    let[e,t] = I.useState(document.hidden);
    return I.useEffect( () => {
        let n = () => {
            t(document.hidden)
        }
        ;
        return document.addEventListener("visibilitychange", n),
        () => window.removeEventListener("visibilitychange", n)
    }
    , []),
    e
}
  , Sd = 1
  , CR = class {
    constructor() {
        this.subscribe = e => (this.subscribers.push(e),
        () => {
            let t = this.subscribers.indexOf(e);
            this.subscribers.splice(t, 1)
        }
        ),
        this.publish = e => {
            this.subscribers.forEach(t => t(e))
        }
        ,
        this.addToast = e => {
            this.publish(e),
            this.toasts = [...this.toasts, e]
        }
        ,
        this.create = e => {
            var t;
            let {message: n, ...r} = e
              , o = typeof (e == null ? void 0 : e.id) == "number" || ((t = e.id) == null ? void 0 : t.length) > 0 ? e.id : Sd++
              , s = this.toasts.find(a => a.id === o)
              , i = e.dismissible === void 0 ? !0 : e.dismissible;
            return this.dismissedToasts.has(o) && this.dismissedToasts.delete(o),
            s ? this.toasts = this.toasts.map(a => a.id === o ? (this.publish({
                ...a,
                ...e,
                id: o,
                title: n
            }),
            {
                ...a,
                ...e,
                id: o,
                dismissible: i,
                title: n
            }) : a) : this.addToast({
                title: n,
                ...r,
                dismissible: i,
                id: o
            }),
            o
        }
        ,
        this.dismiss = e => (this.dismissedToasts.add(e),
        e || this.toasts.forEach(t => {
            this.subscribers.forEach(n => n({
                id: t.id,
                dismiss: !0
            }))
        }
        ),
        this.subscribers.forEach(t => t({
            id: e,
            dismiss: !0
        })),
        e),
        this.message = (e, t) => this.create({
            ...t,
            message: e
        }),
        this.error = (e, t) => this.create({
            ...t,
            message: e,
            type: "error"
        }),
        this.success = (e, t) => this.create({
            ...t,
            type: "success",
            message: e
        }),
        this.info = (e, t) => this.create({
            ...t,
            type: "info",
            message: e
        }),
        this.warning = (e, t) => this.create({
            ...t,
            type: "warning",
            message: e
        }),
        this.loading = (e, t) => this.create({
            ...t,
            type: "loading",
            message: e
        }),
        this.promise = (e, t) => {
            if (!t)
                return;
            let n;
            t.loading !== void 0 && (n = this.create({
                ...t,
                promise: e,
                type: "loading",
                message: t.loading,
                description: typeof t.description != "function" ? t.description : void 0
            }));
            let r = e instanceof Promise ? e : e(), o = n !== void 0, s, i = r.then(async l => {
                if (s = ["resolve", l],
                I.isValidElement(l))
                    o = !1,
                    this.create({
                        id: n,
                        type: "default",
                        message: l
                    });
                else if (ER(l) && !l.ok) {
                    o = !1;
                    let u = typeof t.error == "function" ? await t.error(`HTTP error! status: ${l.status}`) : t.error
                      , c = typeof t.description == "function" ? await t.description(`HTTP error! status: ${l.status}`) : t.description;
                    this.create({
                        id: n,
                        type: "error",
                        message: u,
                        description: c
                    })
                } else if (t.success !== void 0) {
                    o = !1;
                    let u = typeof t.success == "function" ? await t.success(l) : t.success
                      , c = typeof t.description == "function" ? await t.description(l) : t.description;
                    this.create({
                        id: n,
                        type: "success",
                        message: u,
                        description: c
                    })
                }
            }
            ).catch(async l => {
                if (s = ["reject", l],
                t.error !== void 0) {
                    o = !1;
                    let u = typeof t.error == "function" ? await t.error(l) : t.error
                      , c = typeof t.description == "function" ? await t.description(l) : t.description;
                    this.create({
                        id: n,
                        type: "error",
                        message: u,
                        description: c
                    })
                }
            }
            ).finally( () => {
                var l;
                o && (this.dismiss(n),
                n = void 0),
                (l = t.finally) == null || l.call(t)
            }
            ), a = () => new Promise( (l, u) => i.then( () => s[0] === "reject" ? u(s[1]) : l(s[1])).catch(u));
            return typeof n != "string" && typeof n != "number" ? {
                unwrap: a
            } : Object.assign(n, {
                unwrap: a
            })
        }
        ,
        this.custom = (e, t) => {
            let n = (t == null ? void 0 : t.id) || Sd++;
            return this.create({
                jsx: e(n),
                id: n,
                ...t
            }),
            n
        }
        ,
        this.getActiveToasts = () => this.toasts.filter(e => !this.dismissedToasts.has(e.id)),
        this.subscribers = [],
        this.toasts = [],
        this.dismissedToasts = new Set
    }
}
  , ot = new CR
  , bR = (e, t) => {
    let n = (t == null ? void 0 : t.id) || Sd++;
    return ot.addToast({
        title: e,
        ...t,
        id: n
    }),
    n
}
  , ER = e => e && typeof e == "object" && "ok"in e && typeof e.ok == "boolean" && "status"in e && typeof e.status == "number"
  , TR = bR
  , PR = () => ot.toasts
  , RR = () => ot.getActiveToasts();
Object.assign(TR, {
    success: ot.success,
    info: ot.info,
    warning: ot.warning,
    error: ot.error,
    custom: ot.custom,
    message: ot.message,
    promise: ot.promise,
    dismiss: ot.dismiss,
    loading: ot.loading
}, {
    getHistory: PR,
    getToasts: RR
});
function kR(e, {insertAt: t}={}) {
    if (typeof document > "u")
        return;
    let n = document.head || document.getElementsByTagName("head")[0]
      , r = document.createElement("style");
    r.type = "text/css",
    t === "top" && n.firstChild ? n.insertBefore(r, n.firstChild) : n.appendChild(r),
    r.styleSheet ? r.styleSheet.cssText = e : r.appendChild(document.createTextNode(e))
}
kR(`:where(html[dir="ltr"]),:where([data-sonner-toaster][dir="ltr"]){--toast-icon-margin-start: -3px;--toast-icon-margin-end: 4px;--toast-svg-margin-start: -1px;--toast-svg-margin-end: 0px;--toast-button-margin-start: auto;--toast-button-margin-end: 0;--toast-close-button-start: 0;--toast-close-button-end: unset;--toast-close-button-transform: translate(-35%, -35%)}:where(html[dir="rtl"]),:where([data-sonner-toaster][dir="rtl"]){--toast-icon-margin-start: 4px;--toast-icon-margin-end: -3px;--toast-svg-margin-start: 0px;--toast-svg-margin-end: -1px;--toast-button-margin-start: 0;--toast-button-margin-end: auto;--toast-close-button-start: unset;--toast-close-button-end: 0;--toast-close-button-transform: translate(35%, -35%)}:where([data-sonner-toaster]){position:fixed;width:var(--width);font-family:ui-sans-serif,system-ui,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,Noto Sans,sans-serif,Apple Color Emoji,Segoe UI Emoji,Segoe UI Symbol,Noto Color Emoji;--gray1: hsl(0, 0%, 99%);--gray2: hsl(0, 0%, 97.3%);--gray3: hsl(0, 0%, 95.1%);--gray4: hsl(0, 0%, 93%);--gray5: hsl(0, 0%, 90.9%);--gray6: hsl(0, 0%, 88.7%);--gray7: hsl(0, 0%, 85.8%);--gray8: hsl(0, 0%, 78%);--gray9: hsl(0, 0%, 56.1%);--gray10: hsl(0, 0%, 52.3%);--gray11: hsl(0, 0%, 43.5%);--gray12: hsl(0, 0%, 9%);--border-radius: 8px;box-sizing:border-box;padding:0;margin:0;list-style:none;outline:none;z-index:999999999;transition:transform .4s ease}:where([data-sonner-toaster][data-lifted="true"]){transform:translateY(-10px)}@media (hover: none) and (pointer: coarse){:where([data-sonner-toaster][data-lifted="true"]){transform:none}}:where([data-sonner-toaster][data-x-position="right"]){right:var(--offset-right)}:where([data-sonner-toaster][data-x-position="left"]){left:var(--offset-left)}:where([data-sonner-toaster][data-x-position="center"]){left:50%;transform:translate(-50%)}:where([data-sonner-toaster][data-y-position="top"]){top:var(--offset-top)}:where([data-sonner-toaster][data-y-position="bottom"]){bottom:var(--offset-bottom)}:where([data-sonner-toast]){--y: translateY(100%);--lift-amount: calc(var(--lift) * var(--gap));z-index:var(--z-index);position:absolute;opacity:0;transform:var(--y);filter:blur(0);touch-action:none;transition:transform .4s,opacity .4s,height .4s,box-shadow .2s;box-sizing:border-box;outline:none;overflow-wrap:anywhere}:where([data-sonner-toast][data-styled="true"]){padding:16px;background:var(--normal-bg);border:1px solid var(--normal-border);color:var(--normal-text);border-radius:var(--border-radius);box-shadow:0 4px 12px #0000001a;width:var(--width);font-size:13px;display:flex;align-items:center;gap:6px}:where([data-sonner-toast]:focus-visible){box-shadow:0 4px 12px #0000001a,0 0 0 2px #0003}:where([data-sonner-toast][data-y-position="top"]){top:0;--y: translateY(-100%);--lift: 1;--lift-amount: calc(1 * var(--gap))}:where([data-sonner-toast][data-y-position="bottom"]){bottom:0;--y: translateY(100%);--lift: -1;--lift-amount: calc(var(--lift) * var(--gap))}:where([data-sonner-toast]) :where([data-description]){font-weight:400;line-height:1.4;color:inherit}:where([data-sonner-toast]) :where([data-title]){font-weight:500;line-height:1.5;color:inherit}:where([data-sonner-toast]) :where([data-icon]){display:flex;height:16px;width:16px;position:relative;justify-content:flex-start;align-items:center;flex-shrink:0;margin-left:var(--toast-icon-margin-start);margin-right:var(--toast-icon-margin-end)}:where([data-sonner-toast][data-promise="true"]) :where([data-icon])>svg{opacity:0;transform:scale(.8);transform-origin:center;animation:sonner-fade-in .3s ease forwards}:where([data-sonner-toast]) :where([data-icon])>*{flex-shrink:0}:where([data-sonner-toast]) :where([data-icon]) svg{margin-left:var(--toast-svg-margin-start);margin-right:var(--toast-svg-margin-end)}:where([data-sonner-toast]) :where([data-content]){display:flex;flex-direction:column;gap:2px}[data-sonner-toast][data-styled=true] [data-button]{border-radius:4px;padding-left:8px;padding-right:8px;height:24px;font-size:12px;color:var(--normal-bg);background:var(--normal-text);margin-left:var(--toast-button-margin-start);margin-right:var(--toast-button-margin-end);border:none;cursor:pointer;outline:none;display:flex;align-items:center;flex-shrink:0;transition:opacity .4s,box-shadow .2s}:where([data-sonner-toast]) :where([data-button]):focus-visible{box-shadow:0 0 0 2px #0006}:where([data-sonner-toast]) :where([data-button]):first-of-type{margin-left:var(--toast-button-margin-start);margin-right:var(--toast-button-margin-end)}:where([data-sonner-toast]) :where([data-cancel]){color:var(--normal-text);background:rgba(0,0,0,.08)}:where([data-sonner-toast][data-theme="dark"]) :where([data-cancel]){background:rgba(255,255,255,.3)}:where([data-sonner-toast]) :where([data-close-button]){position:absolute;left:var(--toast-close-button-start);right:var(--toast-close-button-end);top:0;height:20px;width:20px;display:flex;justify-content:center;align-items:center;padding:0;color:var(--gray12);border:1px solid var(--gray4);transform:var(--toast-close-button-transform);border-radius:50%;cursor:pointer;z-index:1;transition:opacity .1s,background .2s,border-color .2s}[data-sonner-toast] [data-close-button]{background:var(--gray1)}:where([data-sonner-toast]) :where([data-close-button]):focus-visible{box-shadow:0 4px 12px #0000001a,0 0 0 2px #0003}:where([data-sonner-toast]) :where([data-disabled="true"]){cursor:not-allowed}:where([data-sonner-toast]):hover :where([data-close-button]):hover{background:var(--gray2);border-color:var(--gray5)}:where([data-sonner-toast][data-swiping="true"]):before{content:"";position:absolute;left:-50%;right:-50%;height:100%;z-index:-1}:where([data-sonner-toast][data-y-position="top"][data-swiping="true"]):before{bottom:50%;transform:scaleY(3) translateY(50%)}:where([data-sonner-toast][data-y-position="bottom"][data-swiping="true"]):before{top:50%;transform:scaleY(3) translateY(-50%)}:where([data-sonner-toast][data-swiping="false"][data-removed="true"]):before{content:"";position:absolute;inset:0;transform:scaleY(2)}:where([data-sonner-toast]):after{content:"";position:absolute;left:0;height:calc(var(--gap) + 1px);bottom:100%;width:100%}:where([data-sonner-toast][data-mounted="true"]){--y: translateY(0);opacity:1}:where([data-sonner-toast][data-expanded="false"][data-front="false"]){--scale: var(--toasts-before) * .05 + 1;--y: translateY(calc(var(--lift-amount) * var(--toasts-before))) scale(calc(-1 * var(--scale)));height:var(--front-toast-height)}:where([data-sonner-toast])>*{transition:opacity .4s}:where([data-sonner-toast][data-expanded="false"][data-front="false"][data-styled="true"])>*{opacity:0}:where([data-sonner-toast][data-visible="false"]){opacity:0;pointer-events:none}:where([data-sonner-toast][data-mounted="true"][data-expanded="true"]){--y: translateY(calc(var(--lift) * var(--offset)));height:var(--initial-height)}:where([data-sonner-toast][data-removed="true"][data-front="true"][data-swipe-out="false"]){--y: translateY(calc(var(--lift) * -100%));opacity:0}:where([data-sonner-toast][data-removed="true"][data-front="false"][data-swipe-out="false"][data-expanded="true"]){--y: translateY(calc(var(--lift) * var(--offset) + var(--lift) * -100%));opacity:0}:where([data-sonner-toast][data-removed="true"][data-front="false"][data-swipe-out="false"][data-expanded="false"]){--y: translateY(40%);opacity:0;transition:transform .5s,opacity .2s}:where([data-sonner-toast][data-removed="true"][data-front="false"]):before{height:calc(var(--initial-height) + 20%)}[data-sonner-toast][data-swiping=true]{transform:var(--y) translateY(var(--swipe-amount-y, 0px)) translate(var(--swipe-amount-x, 0px));transition:none}[data-sonner-toast][data-swiped=true]{user-select:none}[data-sonner-toast][data-swipe-out=true][data-y-position=bottom],[data-sonner-toast][data-swipe-out=true][data-y-position=top]{animation-duration:.2s;animation-timing-function:ease-out;animation-fill-mode:forwards}[data-sonner-toast][data-swipe-out=true][data-swipe-direction=left]{animation-name:swipe-out-left}[data-sonner-toast][data-swipe-out=true][data-swipe-direction=right]{animation-name:swipe-out-right}[data-sonner-toast][data-swipe-out=true][data-swipe-direction=up]{animation-name:swipe-out-up}[data-sonner-toast][data-swipe-out=true][data-swipe-direction=down]{animation-name:swipe-out-down}@keyframes swipe-out-left{0%{transform:var(--y) translate(var(--swipe-amount-x));opacity:1}to{transform:var(--y) translate(calc(var(--swipe-amount-x) - 100%));opacity:0}}@keyframes swipe-out-right{0%{transform:var(--y) translate(var(--swipe-amount-x));opacity:1}to{transform:var(--y) translate(calc(var(--swipe-amount-x) + 100%));opacity:0}}@keyframes swipe-out-up{0%{transform:var(--y) translateY(var(--swipe-amount-y));opacity:1}to{transform:var(--y) translateY(calc(var(--swipe-amount-y) - 100%));opacity:0}}@keyframes swipe-out-down{0%{transform:var(--y) translateY(var(--swipe-amount-y));opacity:1}to{transform:var(--y) translateY(calc(var(--swipe-amount-y) + 100%));opacity:0}}@media (max-width: 600px){[data-sonner-toaster]{position:fixed;right:var(--mobile-offset-right);left:var(--mobile-offset-left);width:100%}[data-sonner-toaster][dir=rtl]{left:calc(var(--mobile-offset-left) * -1)}[data-sonner-toaster] [data-sonner-toast]{left:0;right:0;width:calc(100% - var(--mobile-offset-left) * 2)}[data-sonner-toaster][data-x-position=left]{left:var(--mobile-offset-left)}[data-sonner-toaster][data-y-position=bottom]{bottom:var(--mobile-offset-bottom)}[data-sonner-toaster][data-y-position=top]{top:var(--mobile-offset-top)}[data-sonner-toaster][data-x-position=center]{left:var(--mobile-offset-left);right:var(--mobile-offset-right);transform:none}}[data-sonner-toaster][data-theme=light]{--normal-bg: #fff;--normal-border: var(--gray4);--normal-text: var(--gray12);--success-bg: hsl(143, 85%, 96%);--success-border: hsl(145, 92%, 91%);--success-text: hsl(140, 100%, 27%);--info-bg: hsl(208, 100%, 97%);--info-border: hsl(221, 91%, 91%);--info-text: hsl(210, 92%, 45%);--warning-bg: hsl(49, 100%, 97%);--warning-border: hsl(49, 91%, 91%);--warning-text: hsl(31, 92%, 45%);--error-bg: hsl(359, 100%, 97%);--error-border: hsl(359, 100%, 94%);--error-text: hsl(360, 100%, 45%)}[data-sonner-toaster][data-theme=light] [data-sonner-toast][data-invert=true]{--normal-bg: #000;--normal-border: hsl(0, 0%, 20%);--normal-text: var(--gray1)}[data-sonner-toaster][data-theme=dark] [data-sonner-toast][data-invert=true]{--normal-bg: #fff;--normal-border: var(--gray3);--normal-text: var(--gray12)}[data-sonner-toaster][data-theme=dark]{--normal-bg: #000;--normal-bg-hover: hsl(0, 0%, 12%);--normal-border: hsl(0, 0%, 20%);--normal-border-hover: hsl(0, 0%, 25%);--normal-text: var(--gray1);--success-bg: hsl(150, 100%, 6%);--success-border: hsl(147, 100%, 12%);--success-text: hsl(150, 86%, 65%);--info-bg: hsl(215, 100%, 6%);--info-border: hsl(223, 100%, 12%);--info-text: hsl(216, 87%, 65%);--warning-bg: hsl(64, 100%, 6%);--warning-border: hsl(60, 100%, 12%);--warning-text: hsl(46, 87%, 65%);--error-bg: hsl(358, 76%, 10%);--error-border: hsl(357, 89%, 16%);--error-text: hsl(358, 100%, 81%)}[data-sonner-toaster][data-theme=dark] [data-sonner-toast] [data-close-button]{background:var(--normal-bg);border-color:var(--normal-border);color:var(--normal-text)}[data-sonner-toaster][data-theme=dark] [data-sonner-toast] [data-close-button]:hover{background:var(--normal-bg-hover);border-color:var(--normal-border-hover)}[data-rich-colors=true][data-sonner-toast][data-type=success],[data-rich-colors=true][data-sonner-toast][data-type=success] [data-close-button]{background:var(--success-bg);border-color:var(--success-border);color:var(--success-text)}[data-rich-colors=true][data-sonner-toast][data-type=info],[data-rich-colors=true][data-sonner-toast][data-type=info] [data-close-button]{background:var(--info-bg);border-color:var(--info-border);color:var(--info-text)}[data-rich-colors=true][data-sonner-toast][data-type=warning],[data-rich-colors=true][data-sonner-toast][data-type=warning] [data-close-button]{background:var(--warning-bg);border-color:var(--warning-border);color:var(--warning-text)}[data-rich-colors=true][data-sonner-toast][data-type=error],[data-rich-colors=true][data-sonner-toast][data-type=error] [data-close-button]{background:var(--error-bg);border-color:var(--error-border);color:var(--error-text)}.sonner-loading-wrapper{--size: 16px;height:var(--size);width:var(--size);position:absolute;inset:0;z-index:10}.sonner-loading-wrapper[data-visible=false]{transform-origin:center;animation:sonner-fade-out .2s ease forwards}.sonner-spinner{position:relative;top:50%;left:50%;height:var(--size);width:var(--size)}.sonner-loading-bar{animation:sonner-spin 1.2s linear infinite;background:var(--gray11);border-radius:6px;height:8%;left:-10%;position:absolute;top:-3.9%;width:24%}.sonner-loading-bar:nth-child(1){animation-delay:-1.2s;transform:rotate(.0001deg) translate(146%)}.sonner-loading-bar:nth-child(2){animation-delay:-1.1s;transform:rotate(30deg) translate(146%)}.sonner-loading-bar:nth-child(3){animation-delay:-1s;transform:rotate(60deg) translate(146%)}.sonner-loading-bar:nth-child(4){animation-delay:-.9s;transform:rotate(90deg) translate(146%)}.sonner-loading-bar:nth-child(5){animation-delay:-.8s;transform:rotate(120deg) translate(146%)}.sonner-loading-bar:nth-child(6){animation-delay:-.7s;transform:rotate(150deg) translate(146%)}.sonner-loading-bar:nth-child(7){animation-delay:-.6s;transform:rotate(180deg) translate(146%)}.sonner-loading-bar:nth-child(8){animation-delay:-.5s;transform:rotate(210deg) translate(146%)}.sonner-loading-bar:nth-child(9){animation-delay:-.4s;transform:rotate(240deg) translate(146%)}.sonner-loading-bar:nth-child(10){animation-delay:-.3s;transform:rotate(270deg) translate(146%)}.sonner-loading-bar:nth-child(11){animation-delay:-.2s;transform:rotate(300deg) translate(146%)}.sonner-loading-bar:nth-child(12){animation-delay:-.1s;transform:rotate(330deg) translate(146%)}@keyframes sonner-fade-in{0%{opacity:0;transform:scale(.8)}to{opacity:1;transform:scale(1)}}@keyframes sonner-fade-out{0%{opacity:1;transform:scale(1)}to{opacity:0;transform:scale(.8)}}@keyframes sonner-spin{0%{opacity:1}to{opacity:.15}}@media (prefers-reduced-motion){[data-sonner-toast],[data-sonner-toast]>*,.sonner-loading-bar{transition:none!important;animation:none!important}}.sonner-loader{position:absolute;top:50%;left:50%;transform:translate(-50%,-50%);transform-origin:center;transition:opacity .2s,transform .2s}.sonner-loader[data-visible=false]{opacity:0;transform:scale(.8) translate(-50%,-50%)}
`);
function ca(e) {
    return e.label !== void 0
}
var NR = 3
  , AR = "32px"
  , MR = "16px"
  , Am = 4e3
  , jR = 356
  , DR = 14
  , IR = 20
  , OR = 200;
function It(...e) {
    return e.filter(Boolean).join(" ")
}
function LR(e) {
    let[t,n] = e.split("-")
      , r = [];
    return t && r.push(t),
    n && r.push(n),
    r
}
var _R = e => {
    var t, n, r, o, s, i, a, l, u, c, d;
    let {invert: f, toast: h, unstyled: S, interacting: p, setHeights: w, visibleToasts: v, heights: g, index: x, toasts: C, expanded: b, removeToast: E, defaultRichColors: T, closeButton: P, style: N, cancelButtonStyle: M, actionButtonStyle: V, className: O="", descriptionClassName: W="", duration: D, position: H, gap: z, loadingIcon: F, expandByDefault: R, classNames: k, icons: L, closeButtonAriaLabel: K="Close toast", pauseWhenPageIsHidden: U} = e
      , [X,G] = I.useState(null)
      , [ce,be] = I.useState(null)
      , [_,ie] = I.useState(!1)
      , [Ee,se] = I.useState(!1)
      , [ee,re] = I.useState(!1)
      , [ze,yt] = I.useState(!1)
      , [wr,Mn] = I.useState(!1)
      , [Sr,ys] = I.useState(0)
      , [no,op] = I.useState(0)
      , xs = I.useRef(h.duration || D || Am)
      , sp = I.useRef(null)
      , Cr = I.useRef(null)
      , VC = x === 0
      , BC = x + 1 <= v
      , xt = h.type
      , ro = h.dismissible !== !1
      , $C = h.className || ""
      , zC = h.descriptionClassName || ""
      , Ui = I.useMemo( () => g.findIndex(Y => Y.toastId === h.id) || 0, [g, h.id])
      , UC = I.useMemo( () => {
        var Y;
        return (Y = h.closeButton) != null ? Y : P
    }
    , [h.closeButton, P])
      , ip = I.useMemo( () => h.duration || D || Am, [h.duration, D])
      , vu = I.useRef(0)
      , oo = I.useRef(0)
      , ap = I.useRef(0)
      , so = I.useRef(null)
      , [WC,HC] = H.split("-")
      , lp = I.useMemo( () => g.reduce( (Y, le, ge) => ge >= Ui ? Y : Y + le.height, 0), [g, Ui])
      , up = SR()
      , KC = h.invert || f
      , yu = xt === "loading";
    oo.current = I.useMemo( () => Ui * z + lp, [Ui, lp]),
    I.useEffect( () => {
        xs.current = ip
    }
    , [ip]),
    I.useEffect( () => {
        ie(!0)
    }
    , []),
    I.useEffect( () => {
        let Y = Cr.current;
        if (Y) {
            let le = Y.getBoundingClientRect().height;
            return op(le),
            w(ge => [{
                toastId: h.id,
                height: le,
                position: h.position
            }, ...ge]),
            () => w(ge => ge.filter(At => At.toastId !== h.id))
        }
    }
    , [w, h.id]),
    I.useLayoutEffect( () => {
        if (!_)
            return;
        let Y = Cr.current
          , le = Y.style.height;
        Y.style.height = "auto";
        let ge = Y.getBoundingClientRect().height;
        Y.style.height = le,
        op(ge),
        w(At => At.find(Mt => Mt.toastId === h.id) ? At.map(Mt => Mt.toastId === h.id ? {
            ...Mt,
            height: ge
        } : Mt) : [{
            toastId: h.id,
            height: ge,
            position: h.position
        }, ...At])
    }
    , [_, h.title, h.description, w, h.id]);
    let jn = I.useCallback( () => {
        se(!0),
        ys(oo.current),
        w(Y => Y.filter(le => le.toastId !== h.id)),
        setTimeout( () => {
            E(h)
        }
        , OR)
    }
    , [h, E, w, oo]);
    I.useEffect( () => {
        if (h.promise && xt === "loading" || h.duration === 1 / 0 || h.type === "loading")
            return;
        let Y;
        return b || p || U && up ? ( () => {
            if (ap.current < vu.current) {
                let le = new Date().getTime() - vu.current;
                xs.current = xs.current - le
            }
            ap.current = new Date().getTime()
        }
        )() : xs.current !== 1 / 0 && (vu.current = new Date().getTime(),
        Y = setTimeout( () => {
            var le;
            (le = h.onAutoClose) == null || le.call(h, h),
            jn()
        }
        , xs.current)),
        () => clearTimeout(Y)
    }
    , [b, p, h, xt, U, up, jn]),
    I.useEffect( () => {
        h.delete && jn()
    }
    , [jn, h.delete]);
    function GC() {
        var Y, le, ge;
        return L != null && L.loading ? I.createElement("div", {
            className: It(k == null ? void 0 : k.loader, (Y = h == null ? void 0 : h.classNames) == null ? void 0 : Y.loader, "sonner-loader"),
            "data-visible": xt === "loading"
        }, L.loading) : F ? I.createElement("div", {
            className: It(k == null ? void 0 : k.loader, (le = h == null ? void 0 : h.classNames) == null ? void 0 : le.loader, "sonner-loader"),
            "data-visible": xt === "loading"
        }, F) : I.createElement(mR, {
            className: It(k == null ? void 0 : k.loader, (ge = h == null ? void 0 : h.classNames) == null ? void 0 : ge.loader),
            visible: xt === "loading"
        })
    }
    return I.createElement("li", {
        tabIndex: 0,
        ref: Cr,
        className: It(O, $C, k == null ? void 0 : k.toast, (t = h == null ? void 0 : h.classNames) == null ? void 0 : t.toast, k == null ? void 0 : k.default, k == null ? void 0 : k[xt], (n = h == null ? void 0 : h.classNames) == null ? void 0 : n[xt]),
        "data-sonner-toast": "",
        "data-rich-colors": (r = h.richColors) != null ? r : T,
        "data-styled": !(h.jsx || h.unstyled || S),
        "data-mounted": _,
        "data-promise": !!h.promise,
        "data-swiped": wr,
        "data-removed": Ee,
        "data-visible": BC,
        "data-y-position": WC,
        "data-x-position": HC,
        "data-index": x,
        "data-front": VC,
        "data-swiping": ee,
        "data-dismissible": ro,
        "data-type": xt,
        "data-invert": KC,
        "data-swipe-out": ze,
        "data-swipe-direction": ce,
        "data-expanded": !!(b || R && _),
        style: {
            "--index": x,
            "--toasts-before": x,
            "--z-index": C.length - x,
            "--offset": `${Ee ? Sr : oo.current}px`,
            "--initial-height": R ? "auto" : `${no}px`,
            ...N,
            ...h.style
        },
        onDragEnd: () => {
            re(!1),
            G(null),
            so.current = null
        }
        ,
        onPointerDown: Y => {
            yu || !ro || (sp.current = new Date,
            ys(oo.current),
            Y.target.setPointerCapture(Y.pointerId),
            Y.target.tagName !== "BUTTON" && (re(!0),
            so.current = {
                x: Y.clientX,
                y: Y.clientY
            }))
        }
        ,
        onPointerUp: () => {
            var Y, le, ge, At;
            if (ze || !ro)
                return;
            so.current = null;
            let Mt = Number(((Y = Cr.current) == null ? void 0 : Y.style.getPropertyValue("--swipe-amount-x").replace("px", "")) || 0)
              , Dn = Number(((le = Cr.current) == null ? void 0 : le.style.getPropertyValue("--swipe-amount-y").replace("px", "")) || 0)
              , br = new Date().getTime() - ((ge = sp.current) == null ? void 0 : ge.getTime())
              , jt = X === "x" ? Mt : Dn
              , In = Math.abs(jt) / br;
            if (Math.abs(jt) >= IR || In > .11) {
                ys(oo.current),
                (At = h.onDismiss) == null || At.call(h, h),
                be(X === "x" ? Mt > 0 ? "right" : "left" : Dn > 0 ? "down" : "up"),
                jn(),
                yt(!0),
                Mn(!1);
                return
            }
            re(!1),
            G(null)
        }
        ,
        onPointerMove: Y => {
            var le, ge, At, Mt;
            if (!so.current || !ro || ((le = window.getSelection()) == null ? void 0 : le.toString().length) > 0)
                return;
            let Dn = Y.clientY - so.current.y
              , br = Y.clientX - so.current.x
              , jt = (ge = e.swipeDirections) != null ? ge : LR(H);
            !X && (Math.abs(br) > 1 || Math.abs(Dn) > 1) && G(Math.abs(br) > Math.abs(Dn) ? "x" : "y");
            let In = {
                x: 0,
                y: 0
            };
            X === "y" ? (jt.includes("top") || jt.includes("bottom")) && (jt.includes("top") && Dn < 0 || jt.includes("bottom") && Dn > 0) && (In.y = Dn) : X === "x" && (jt.includes("left") || jt.includes("right")) && (jt.includes("left") && br < 0 || jt.includes("right") && br > 0) && (In.x = br),
            (Math.abs(In.x) > 0 || Math.abs(In.y) > 0) && Mn(!0),
            (At = Cr.current) == null || At.style.setProperty("--swipe-amount-x", `${In.x}px`),
            (Mt = Cr.current) == null || Mt.style.setProperty("--swipe-amount-y", `${In.y}px`)
        }
    }, UC && !h.jsx ? I.createElement("button", {
        "aria-label": K,
        "data-disabled": yu,
        "data-close-button": !0,
        onClick: yu || !ro ? () => {}
        : () => {
            var Y;
            jn(),
            (Y = h.onDismiss) == null || Y.call(h, h)
        }
        ,
        className: It(k == null ? void 0 : k.closeButton, (o = h == null ? void 0 : h.classNames) == null ? void 0 : o.closeButton)
    }, (s = L == null ? void 0 : L.close) != null ? s : wR) : null, h.jsx || m.isValidElement(h.title) ? h.jsx ? h.jsx : typeof h.title == "function" ? h.title() : h.title : I.createElement(I.Fragment, null, xt || h.icon || h.promise ? I.createElement("div", {
        "data-icon": "",
        className: It(k == null ? void 0 : k.icon, (i = h == null ? void 0 : h.classNames) == null ? void 0 : i.icon)
    }, h.promise || h.type === "loading" && !h.icon ? h.icon || GC() : null, h.type !== "loading" ? h.icon || (L == null ? void 0 : L[xt]) || hR(xt) : null) : null, I.createElement("div", {
        "data-content": "",
        className: It(k == null ? void 0 : k.content, (a = h == null ? void 0 : h.classNames) == null ? void 0 : a.content)
    }, I.createElement("div", {
        "data-title": "",
        className: It(k == null ? void 0 : k.title, (l = h == null ? void 0 : h.classNames) == null ? void 0 : l.title)
    }, typeof h.title == "function" ? h.title() : h.title), h.description ? I.createElement("div", {
        "data-description": "",
        className: It(W, zC, k == null ? void 0 : k.description, (u = h == null ? void 0 : h.classNames) == null ? void 0 : u.description)
    }, typeof h.description == "function" ? h.description() : h.description) : null), m.isValidElement(h.cancel) ? h.cancel : h.cancel && ca(h.cancel) ? I.createElement("button", {
        "data-button": !0,
        "data-cancel": !0,
        style: h.cancelButtonStyle || M,
        onClick: Y => {
            var le, ge;
            ca(h.cancel) && ro && ((ge = (le = h.cancel).onClick) == null || ge.call(le, Y),
            jn())
        }
        ,
        className: It(k == null ? void 0 : k.cancelButton, (c = h == null ? void 0 : h.classNames) == null ? void 0 : c.cancelButton)
    }, h.cancel.label) : null, m.isValidElement(h.action) ? h.action : h.action && ca(h.action) ? I.createElement("button", {
        "data-button": !0,
        "data-action": !0,
        style: h.actionButtonStyle || V,
        onClick: Y => {
            var le, ge;
            ca(h.action) && ((ge = (le = h.action).onClick) == null || ge.call(le, Y),
            !Y.defaultPrevented && jn())
        }
        ,
        className: It(k == null ? void 0 : k.actionButton, (d = h == null ? void 0 : h.classNames) == null ? void 0 : d.actionButton)
    }, h.action.label) : null))
}
;
function Mm() {
    if (typeof window > "u" || typeof document > "u")
        return "ltr";
    let e = document.documentElement.getAttribute("dir");
    return e === "auto" || !e ? window.getComputedStyle(document.documentElement).direction : e
}
function FR(e, t) {
    let n = {};
    return [e, t].forEach( (r, o) => {
        let s = o === 1
          , i = s ? "--mobile-offset" : "--offset"
          , a = s ? MR : AR;
        function l(u) {
            ["top", "right", "bottom", "left"].forEach(c => {
                n[`${i}-${c}`] = typeof u == "number" ? `${u}px` : u
            }
            )
        }
        typeof r == "number" || typeof r == "string" ? l(r) : typeof r == "object" ? ["top", "right", "bottom", "left"].forEach(u => {
            r[u] === void 0 ? n[`${i}-${u}`] = a : n[`${i}-${u}`] = typeof r[u] == "number" ? `${r[u]}px` : r[u]
        }
        ) : l(a)
    }
    ),
    n
}
var VR = m.forwardRef(function(e, t) {
    let {invert: n, position: r="bottom-right", hotkey: o=["altKey", "KeyT"], expand: s, closeButton: i, className: a, offset: l, mobileOffset: u, theme: c="light", richColors: d, duration: f, style: h, visibleToasts: S=NR, toastOptions: p, dir: w=Mm(), gap: v=DR, loadingIcon: g, icons: x, containerAriaLabel: C="Notifications", pauseWhenPageIsHidden: b} = e
      , [E,T] = I.useState([])
      , P = I.useMemo( () => Array.from(new Set([r].concat(E.filter(U => U.position).map(U => U.position)))), [E, r])
      , [N,M] = I.useState([])
      , [V,O] = I.useState(!1)
      , [W,D] = I.useState(!1)
      , [H,z] = I.useState(c !== "system" ? c : typeof window < "u" && window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light")
      , F = I.useRef(null)
      , R = o.join("+").replace(/Key/g, "").replace(/Digit/g, "")
      , k = I.useRef(null)
      , L = I.useRef(!1)
      , K = I.useCallback(U => {
        T(X => {
            var G;
            return (G = X.find(ce => ce.id === U.id)) != null && G.delete || ot.dismiss(U.id),
            X.filter( ({id: ce}) => ce !== U.id)
        }
        )
    }
    , []);
    return I.useEffect( () => ot.subscribe(U => {
        if (U.dismiss) {
            T(X => X.map(G => G.id === U.id ? {
                ...G,
                delete: !0
            } : G));
            return
        }
        setTimeout( () => {
            Z0.flushSync( () => {
                T(X => {
                    let G = X.findIndex(ce => ce.id === U.id);
                    return G !== -1 ? [...X.slice(0, G), {
                        ...X[G],
                        ...U
                    }, ...X.slice(G + 1)] : [U, ...X]
                }
                )
            }
            )
        }
        )
    }
    ), []),
    I.useEffect( () => {
        if (c !== "system") {
            z(c);
            return
        }
        if (c === "system" && (window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches ? z("dark") : z("light")),
        typeof window > "u")
            return;
        let U = window.matchMedia("(prefers-color-scheme: dark)");
        try {
            U.addEventListener("change", ({matches: X}) => {
                z(X ? "dark" : "light")
            }
            )
        } catch {
            U.addListener( ({matches: G}) => {
                try {
                    z(G ? "dark" : "light")
                } catch (ce) {
                    console.error(ce)
                }
            }
            )
        }
    }
    , [c]),
    I.useEffect( () => {
        E.length <= 1 && O(!1)
    }
    , [E]),
    I.useEffect( () => {
        let U = X => {
            var G, ce;
            o.every(be => X[be] || X.code === be) && (O(!0),
            (G = F.current) == null || G.focus()),
            X.code === "Escape" && (document.activeElement === F.current || (ce = F.current) != null && ce.contains(document.activeElement)) && O(!1)
        }
        ;
        return document.addEventListener("keydown", U),
        () => document.removeEventListener("keydown", U)
    }
    , [o]),
    I.useEffect( () => {
        if (F.current)
            return () => {
                k.current && (k.current.focus({
                    preventScroll: !0
                }),
                k.current = null,
                L.current = !1)
            }
    }
    , [F.current]),
    I.createElement("section", {
        ref: t,
        "aria-label": `${C} ${R}`,
        tabIndex: -1,
        "aria-live": "polite",
        "aria-relevant": "additions text",
        "aria-atomic": "false",
        suppressHydrationWarning: !0
    }, P.map( (U, X) => {
        var G;
        let[ce,be] = U.split("-");
        return E.length ? I.createElement("ol", {
            key: U,
            dir: w === "auto" ? Mm() : w,
            tabIndex: -1,
            ref: F,
            className: a,
            "data-sonner-toaster": !0,
            "data-theme": H,
            "data-y-position": ce,
            "data-lifted": V && E.length > 1 && !s,
            "data-x-position": be,
            style: {
                "--front-toast-height": `${((G = N[0]) == null ? void 0 : G.height) || 0}px`,
                "--width": `${jR}px`,
                "--gap": `${v}px`,
                ...h,
                ...FR(l, u)
            },
            onBlur: _ => {
                L.current && !_.currentTarget.contains(_.relatedTarget) && (L.current = !1,
                k.current && (k.current.focus({
                    preventScroll: !0
                }),
                k.current = null))
            }
            ,
            onFocus: _ => {
                _.target instanceof HTMLElement && _.target.dataset.dismissible === "false" || L.current || (L.current = !0,
                k.current = _.relatedTarget)
            }
            ,
            onMouseEnter: () => O(!0),
            onMouseMove: () => O(!0),
            onMouseLeave: () => {
                W || O(!1)
            }
            ,
            onDragEnd: () => O(!1),
            onPointerDown: _ => {
                _.target instanceof HTMLElement && _.target.dataset.dismissible === "false" || D(!0)
            }
            ,
            onPointerUp: () => D(!1)
        }, E.filter(_ => !_.position && X === 0 || _.position === U).map( (_, ie) => {
            var Ee, se;
            return I.createElement(_R, {
                key: _.id,
                icons: x,
                index: ie,
                toast: _,
                defaultRichColors: d,
                duration: (Ee = p == null ? void 0 : p.duration) != null ? Ee : f,
                className: p == null ? void 0 : p.className,
                descriptionClassName: p == null ? void 0 : p.descriptionClassName,
                invert: n,
                visibleToasts: S,
                closeButton: (se = p == null ? void 0 : p.closeButton) != null ? se : i,
                interacting: W,
                position: U,
                style: p == null ? void 0 : p.style,
                unstyled: p == null ? void 0 : p.unstyled,
                classNames: p == null ? void 0 : p.classNames,
                cancelButtonStyle: p == null ? void 0 : p.cancelButtonStyle,
                actionButtonStyle: p == null ? void 0 : p.actionButtonStyle,
                removeToast: K,
                toasts: E.filter(ee => ee.position == _.position),
                heights: N.filter(ee => ee.position == _.position),
                setHeights: M,
                expandByDefault: s,
                gap: v,
                loadingIcon: g,
                expanded: V,
                pauseWhenPageIsHidden: b,
                swipeDirections: e.swipeDirections
            })
        }
        )) : null
    }
    ))
});
const BR = ({...e}) => {
    const {theme: t="system"} = fR();
    return y.jsx(VR, {
        theme: t,
        className: "toaster group",
        toastOptions: {
            classNames: {
                toast: "group toast group-[.toaster]:bg-background group-[.toaster]:text-foreground group-[.toaster]:border-border group-[.toaster]:shadow-lg",
                description: "group-[.toast]:text-muted-foreground",
                actionButton: "group-[.toast]:bg-primary group-[.toast]:text-primary-foreground",
                cancelButton: "group-[.toast]:bg-muted group-[.toast]:text-muted-foreground"
            }
        },
        ...e
    })
}
;
var $R = ff[" useId ".trim().toString()] || ( () => {}
)
  , zR = 0;
function Io(e) {
    const [t,n] = m.useState($R());
    return $e( () => {
        n(r => r ?? String(zR++))
    }
    , [e]),
    t ? `radix-${t}` : ""
}
const UR = ["top", "right", "bottom", "left"]
  , cr = Math.min
  , dt = Math.max
  , pl = Math.round
  , da = Math.floor
  , un = e => ({
    x: e,
    y: e
})
  , WR = {
    left: "right",
    right: "left",
    bottom: "top",
    top: "bottom"
}
  , HR = {
    start: "end",
    end: "start"
};
function Cd(e, t, n) {
    return dt(e, cr(t, n))
}
function Rn(e, t) {
    return typeof e == "function" ? e(t) : e
}
function kn(e) {
    return e.split("-")[0]
}
function cs(e) {
    return e.split("-")[1]
}
function ah(e) {
    return e === "x" ? "y" : "x"
}
function lh(e) {
    return e === "y" ? "height" : "width"
}
const KR = new Set(["top", "bottom"]);
function sn(e) {
    return KR.has(kn(e)) ? "y" : "x"
}
function uh(e) {
    return ah(sn(e))
}
function GR(e, t, n) {
    n === void 0 && (n = !1);
    const r = cs(e)
      , o = uh(e)
      , s = lh(o);
    let i = o === "x" ? r === (n ? "end" : "start") ? "right" : "left" : r === "start" ? "bottom" : "top";
    return t.reference[s] > t.floating[s] && (i = ml(i)),
    [i, ml(i)]
}
function YR(e) {
    const t = ml(e);
    return [bd(e), t, bd(t)]
}
function bd(e) {
    return e.replace(/start|end/g, t => HR[t])
}
const jm = ["left", "right"]
  , Dm = ["right", "left"]
  , QR = ["top", "bottom"]
  , XR = ["bottom", "top"];
function qR(e, t, n) {
    switch (e) {
    case "top":
    case "bottom":
        return n ? t ? Dm : jm : t ? jm : Dm;
    case "left":
    case "right":
        return t ? QR : XR;
    default:
        return []
    }
}
function ZR(e, t, n, r) {
    const o = cs(e);
    let s = qR(kn(e), n === "start", r);
    return o && (s = s.map(i => i + "-" + o),
    t && (s = s.concat(s.map(bd)))),
    s
}
function ml(e) {
    return e.replace(/left|right|bottom|top/g, t => WR[t])
}
function JR(e) {
    return {
        top: 0,
        right: 0,
        bottom: 0,
        left: 0,
        ...e
    }
}
function Ux(e) {
    return typeof e != "number" ? JR(e) : {
        top: e,
        right: e,
        bottom: e,
        left: e
    }
}
function gl(e) {
    const {x: t, y: n, width: r, height: o} = e;
    return {
        width: r,
        height: o,
        top: n,
        left: t,
        right: t + r,
        bottom: n + o,
        x: t,
        y: n
    }
}
function Im(e, t, n) {
    let {reference: r, floating: o} = e;
    const s = sn(t)
      , i = uh(t)
      , a = lh(i)
      , l = kn(t)
      , u = s === "y"
      , c = r.x + r.width / 2 - o.width / 2
      , d = r.y + r.height / 2 - o.height / 2
      , f = r[a] / 2 - o[a] / 2;
    let h;
    switch (l) {
    case "top":
        h = {
            x: c,
            y: r.y - o.height
        };
        break;
    case "bottom":
        h = {
            x: c,
            y: r.y + r.height
        };
        break;
    case "right":
        h = {
            x: r.x + r.width,
            y: d
        };
        break;
    case "left":
        h = {
            x: r.x - o.width,
            y: d
        };
        break;
    default:
        h = {
            x: r.x,
            y: r.y
        }
    }
    switch (cs(t)) {
    case "start":
        h[i] -= f * (n && u ? -1 : 1);
        break;
    case "end":
        h[i] += f * (n && u ? -1 : 1);
        break
    }
    return h
}
const ek = async (e, t, n) => {
    const {placement: r="bottom", strategy: o="absolute", middleware: s=[], platform: i} = n
      , a = s.filter(Boolean)
      , l = await (i.isRTL == null ? void 0 : i.isRTL(t));
    let u = await i.getElementRects({
        reference: e,
        floating: t,
        strategy: o
    })
      , {x: c, y: d} = Im(u, r, l)
      , f = r
      , h = {}
      , S = 0;
    for (let p = 0; p < a.length; p++) {
        const {name: w, fn: v} = a[p]
          , {x: g, y: x, data: C, reset: b} = await v({
            x: c,
            y: d,
            initialPlacement: r,
            placement: f,
            strategy: o,
            middlewareData: h,
            rects: u,
            platform: i,
            elements: {
                reference: e,
                floating: t
            }
        });
        c = g ?? c,
        d = x ?? d,
        h = {
            ...h,
            [w]: {
                ...h[w],
                ...C
            }
        },
        b && S <= 50 && (S++,
        typeof b == "object" && (b.placement && (f = b.placement),
        b.rects && (u = b.rects === !0 ? await i.getElementRects({
            reference: e,
            floating: t,
            strategy: o
        }) : b.rects),
        {x: c, y: d} = Im(u, f, l)),
        p = -1)
    }
    return {
        x: c,
        y: d,
        placement: f,
        strategy: o,
        middlewareData: h
    }
}
;
async function vi(e, t) {
    var n;
    t === void 0 && (t = {});
    const {x: r, y: o, platform: s, rects: i, elements: a, strategy: l} = e
      , {boundary: u="clippingAncestors", rootBoundary: c="viewport", elementContext: d="floating", altBoundary: f=!1, padding: h=0} = Rn(t, e)
      , S = Ux(h)
      , w = a[f ? d === "floating" ? "reference" : "floating" : d]
      , v = gl(await s.getClippingRect({
        element: (n = await (s.isElement == null ? void 0 : s.isElement(w))) == null || n ? w : w.contextElement || await (s.getDocumentElement == null ? void 0 : s.getDocumentElement(a.floating)),
        boundary: u,
        rootBoundary: c,
        strategy: l
    }))
      , g = d === "floating" ? {
        x: r,
        y: o,
        width: i.floating.width,
        height: i.floating.height
    } : i.reference
      , x = await (s.getOffsetParent == null ? void 0 : s.getOffsetParent(a.floating))
      , C = await (s.isElement == null ? void 0 : s.isElement(x)) ? await (s.getScale == null ? void 0 : s.getScale(x)) || {
        x: 1,
        y: 1
    } : {
        x: 1,
        y: 1
    }
      , b = gl(s.convertOffsetParentRelativeRectToViewportRelativeRect ? await s.convertOffsetParentRelativeRectToViewportRelativeRect({
        elements: a,
        rect: g,
        offsetParent: x,
        strategy: l
    }) : g);
    return {
        top: (v.top - b.top + S.top) / C.y,
        bottom: (b.bottom - v.bottom + S.bottom) / C.y,
        left: (v.left - b.left + S.left) / C.x,
        right: (b.right - v.right + S.right) / C.x
    }
}
const tk = e => ({
    name: "arrow",
    options: e,
    async fn(t) {
        const {x: n, y: r, placement: o, rects: s, platform: i, elements: a, middlewareData: l} = t
          , {element: u, padding: c=0} = Rn(e, t) || {};
        if (u == null)
            return {};
        const d = Ux(c)
          , f = {
            x: n,
            y: r
        }
          , h = uh(o)
          , S = lh(h)
          , p = await i.getDimensions(u)
          , w = h === "y"
          , v = w ? "top" : "left"
          , g = w ? "bottom" : "right"
          , x = w ? "clientHeight" : "clientWidth"
          , C = s.reference[S] + s.reference[h] - f[h] - s.floating[S]
          , b = f[h] - s.reference[h]
          , E = await (i.getOffsetParent == null ? void 0 : i.getOffsetParent(u));
        let T = E ? E[x] : 0;
        (!T || !await (i.isElement == null ? void 0 : i.isElement(E))) && (T = a.floating[x] || s.floating[S]);
        const P = C / 2 - b / 2
          , N = T / 2 - p[S] / 2 - 1
          , M = cr(d[v], N)
          , V = cr(d[g], N)
          , O = M
          , W = T - p[S] - V
          , D = T / 2 - p[S] / 2 + P
          , H = Cd(O, D, W)
          , z = !l.arrow && cs(o) != null && D !== H && s.reference[S] / 2 - (D < O ? M : V) - p[S] / 2 < 0
          , F = z ? D < O ? D - O : D - W : 0;
        return {
            [h]: f[h] + F,
            data: {
                [h]: H,
                centerOffset: D - H - F,
                ...z && {
                    alignmentOffset: F
                }
            },
            reset: z
        }
    }
})
  , nk = function(e) {
    return e === void 0 && (e = {}),
    {
        name: "flip",
        options: e,
        async fn(t) {
            var n, r;
            const {placement: o, middlewareData: s, rects: i, initialPlacement: a, platform: l, elements: u} = t
              , {mainAxis: c=!0, crossAxis: d=!0, fallbackPlacements: f, fallbackStrategy: h="bestFit", fallbackAxisSideDirection: S="none", flipAlignment: p=!0, ...w} = Rn(e, t);
            if ((n = s.arrow) != null && n.alignmentOffset)
                return {};
            const v = kn(o)
              , g = sn(a)
              , x = kn(a) === a
              , C = await (l.isRTL == null ? void 0 : l.isRTL(u.floating))
              , b = f || (x || !p ? [ml(a)] : YR(a))
              , E = S !== "none";
            !f && E && b.push(...ZR(a, p, S, C));
            const T = [a, ...b]
              , P = await vi(t, w)
              , N = [];
            let M = ((r = s.flip) == null ? void 0 : r.overflows) || [];
            if (c && N.push(P[v]),
            d) {
                const D = GR(o, i, C);
                N.push(P[D[0]], P[D[1]])
            }
            if (M = [...M, {
                placement: o,
                overflows: N
            }],
            !N.every(D => D <= 0)) {
                var V, O;
                const D = (((V = s.flip) == null ? void 0 : V.index) || 0) + 1
                  , H = T[D];
                if (H && (!(d === "alignment" ? g !== sn(H) : !1) || M.every(R => R.overflows[0] > 0 && sn(R.placement) === g)))
                    return {
                        data: {
                            index: D,
                            overflows: M
                        },
                        reset: {
                            placement: H
                        }
                    };
                let z = (O = M.filter(F => F.overflows[0] <= 0).sort( (F, R) => F.overflows[1] - R.overflows[1])[0]) == null ? void 0 : O.placement;
                if (!z)
                    switch (h) {
                    case "bestFit":
                        {
                            var W;
                            const F = (W = M.filter(R => {
                                if (E) {
                                    const k = sn(R.placement);
                                    return k === g || k === "y"
                                }
                                return !0
                            }
                            ).map(R => [R.placement, R.overflows.filter(k => k > 0).reduce( (k, L) => k + L, 0)]).sort( (R, k) => R[1] - k[1])[0]) == null ? void 0 : W[0];
                            F && (z = F);
                            break
                        }
                    case "initialPlacement":
                        z = a;
                        break
                    }
                if (o !== z)
                    return {
                        reset: {
                            placement: z
                        }
                    }
            }
            return {}
        }
    }
};
function Om(e, t) {
    return {
        top: e.top - t.height,
        right: e.right - t.width,
        bottom: e.bottom - t.height,
        left: e.left - t.width
    }
}
function Lm(e) {
    return UR.some(t => e[t] >= 0)
}
const rk = function(e) {
    return e === void 0 && (e = {}),
    {
        name: "hide",
        options: e,
        async fn(t) {
            const {rects: n} = t
              , {strategy: r="referenceHidden", ...o} = Rn(e, t);
            switch (r) {
            case "referenceHidden":
                {
                    const s = await vi(t, {
                        ...o,
                        elementContext: "reference"
                    })
                      , i = Om(s, n.reference);
                    return {
                        data: {
                            referenceHiddenOffsets: i,
                            referenceHidden: Lm(i)
                        }
                    }
                }
            case "escaped":
                {
                    const s = await vi(t, {
                        ...o,
                        altBoundary: !0
                    })
                      , i = Om(s, n.floating);
                    return {
                        data: {
                            escapedOffsets: i,
                            escaped: Lm(i)
                        }
                    }
                }
            default:
                return {}
            }
        }
    }
}
  , Wx = new Set(["left", "top"]);
async function ok(e, t) {
    const {placement: n, platform: r, elements: o} = e
      , s = await (r.isRTL == null ? void 0 : r.isRTL(o.floating))
      , i = kn(n)
      , a = cs(n)
      , l = sn(n) === "y"
      , u = Wx.has(i) ? -1 : 1
      , c = s && l ? -1 : 1
      , d = Rn(t, e);
    let {mainAxis: f, crossAxis: h, alignmentAxis: S} = typeof d == "number" ? {
        mainAxis: d,
        crossAxis: 0,
        alignmentAxis: null
    } : {
        mainAxis: d.mainAxis || 0,
        crossAxis: d.crossAxis || 0,
        alignmentAxis: d.alignmentAxis
    };
    return a && typeof S == "number" && (h = a === "end" ? S * -1 : S),
    l ? {
        x: h * c,
        y: f * u
    } : {
        x: f * u,
        y: h * c
    }
}
const sk = function(e) {
    return e === void 0 && (e = 0),
    {
        name: "offset",
        options: e,
        async fn(t) {
            var n, r;
            const {x: o, y: s, placement: i, middlewareData: a} = t
              , l = await ok(t, e);
            return i === ((n = a.offset) == null ? void 0 : n.placement) && (r = a.arrow) != null && r.alignmentOffset ? {} : {
                x: o + l.x,
                y: s + l.y,
                data: {
                    ...l,
                    placement: i
                }
            }
        }
    }
}
  , ik = function(e) {
    return e === void 0 && (e = {}),
    {
        name: "shift",
        options: e,
        async fn(t) {
            const {x: n, y: r, placement: o} = t
              , {mainAxis: s=!0, crossAxis: i=!1, limiter: a={
                fn: w => {
                    let {x: v, y: g} = w;
                    return {
                        x: v,
                        y: g
                    }
                }
            }, ...l} = Rn(e, t)
              , u = {
                x: n,
                y: r
            }
              , c = await vi(t, l)
              , d = sn(kn(o))
              , f = ah(d);
            let h = u[f]
              , S = u[d];
            if (s) {
                const w = f === "y" ? "top" : "left"
                  , v = f === "y" ? "bottom" : "right"
                  , g = h + c[w]
                  , x = h - c[v];
                h = Cd(g, h, x)
            }
            if (i) {
                const w = d === "y" ? "top" : "left"
                  , v = d === "y" ? "bottom" : "right"
                  , g = S + c[w]
                  , x = S - c[v];
                S = Cd(g, S, x)
            }
            const p = a.fn({
                ...t,
                [f]: h,
                [d]: S
            });
            return {
                ...p,
                data: {
                    x: p.x - n,
                    y: p.y - r,
                    enabled: {
                        [f]: s,
                        [d]: i
                    }
                }
            }
        }
    }
}
  , ak = function(e) {
    return e === void 0 && (e = {}),
    {
        options: e,
        fn(t) {
            const {x: n, y: r, placement: o, rects: s, middlewareData: i} = t
              , {offset: a=0, mainAxis: l=!0, crossAxis: u=!0} = Rn(e, t)
              , c = {
                x: n,
                y: r
            }
              , d = sn(o)
              , f = ah(d);
            let h = c[f]
              , S = c[d];
            const p = Rn(a, t)
              , w = typeof p == "number" ? {
                mainAxis: p,
                crossAxis: 0
            } : {
                mainAxis: 0,
                crossAxis: 0,
                ...p
            };
            if (l) {
                const x = f === "y" ? "height" : "width"
                  , C = s.reference[f] - s.floating[x] + w.mainAxis
                  , b = s.reference[f] + s.reference[x] - w.mainAxis;
                h < C ? h = C : h > b && (h = b)
            }
            if (u) {
                var v, g;
                const x = f === "y" ? "width" : "height"
                  , C = Wx.has(kn(o))
                  , b = s.reference[d] - s.floating[x] + (C && ((v = i.offset) == null ? void 0 : v[d]) || 0) + (C ? 0 : w.crossAxis)
                  , E = s.reference[d] + s.reference[x] + (C ? 0 : ((g = i.offset) == null ? void 0 : g[d]) || 0) - (C ? w.crossAxis : 0);
                S < b ? S = b : S > E && (S = E)
            }
            return {
                [f]: h,
                [d]: S
            }
        }
    }
}
  , lk = function(e) {
    return e === void 0 && (e = {}),
    {
        name: "size",
        options: e,
        async fn(t) {
            var n, r;
            const {placement: o, rects: s, platform: i, elements: a} = t
              , {apply: l= () => {}
            , ...u} = Rn(e, t)
              , c = await vi(t, u)
              , d = kn(o)
              , f = cs(o)
              , h = sn(o) === "y"
              , {width: S, height: p} = s.floating;
            let w, v;
            d === "top" || d === "bottom" ? (w = d,
            v = f === (await (i.isRTL == null ? void 0 : i.isRTL(a.floating)) ? "start" : "end") ? "left" : "right") : (v = d,
            w = f === "end" ? "top" : "bottom");
            const g = p - c.top - c.bottom
              , x = S - c.left - c.right
              , C = cr(p - c[w], g)
              , b = cr(S - c[v], x)
              , E = !t.middlewareData.shift;
            let T = C
              , P = b;
            if ((n = t.middlewareData.shift) != null && n.enabled.x && (P = x),
            (r = t.middlewareData.shift) != null && r.enabled.y && (T = g),
            E && !f) {
                const M = dt(c.left, 0)
                  , V = dt(c.right, 0)
                  , O = dt(c.top, 0)
                  , W = dt(c.bottom, 0);
                h ? P = S - 2 * (M !== 0 || V !== 0 ? M + V : dt(c.left, c.right)) : T = p - 2 * (O !== 0 || W !== 0 ? O + W : dt(c.top, c.bottom))
            }
            await l({
                ...t,
                availableWidth: P,
                availableHeight: T
            });
            const N = await i.getDimensions(a.floating);
            return S !== N.width || p !== N.height ? {
                reset: {
                    rects: !0
                }
            } : {}
        }
    }
};
function Xl() {
    return typeof window < "u"
}
function ds(e) {
    return Hx(e) ? (e.nodeName || "").toLowerCase() : "#document"
}
function pt(e) {
    var t;
    return (e == null || (t = e.ownerDocument) == null ? void 0 : t.defaultView) || window
}
function pn(e) {
    var t;
    return (t = (Hx(e) ? e.ownerDocument : e.document) || window.document) == null ? void 0 : t.documentElement
}
function Hx(e) {
    return Xl() ? e instanceof Node || e instanceof pt(e).Node : !1
}
function Yt(e) {
    return Xl() ? e instanceof Element || e instanceof pt(e).Element : !1
}
function fn(e) {
    return Xl() ? e instanceof HTMLElement || e instanceof pt(e).HTMLElement : !1
}
function _m(e) {
    return !Xl() || typeof ShadowRoot > "u" ? !1 : e instanceof ShadowRoot || e instanceof pt(e).ShadowRoot
}
const uk = new Set(["inline", "contents"]);
function _i(e) {
    const {overflow: t, overflowX: n, overflowY: r, display: o} = Qt(e);
    return /auto|scroll|overlay|hidden|clip/.test(t + r + n) && !uk.has(o)
}
const ck = new Set(["table", "td", "th"]);
function dk(e) {
    return ck.has(ds(e))
}
const fk = [":popover-open", ":modal"];
function ql(e) {
    return fk.some(t => {
        try {
            return e.matches(t)
        } catch {
            return !1
        }
    }
    )
}
const hk = ["transform", "translate", "scale", "rotate", "perspective"]
  , pk = ["transform", "translate", "scale", "rotate", "perspective", "filter"]
  , mk = ["paint", "layout", "strict", "content"];
function ch(e) {
    const t = dh()
      , n = Yt(e) ? Qt(e) : e;
    return hk.some(r => n[r] ? n[r] !== "none" : !1) || (n.containerType ? n.containerType !== "normal" : !1) || !t && (n.backdropFilter ? n.backdropFilter !== "none" : !1) || !t && (n.filter ? n.filter !== "none" : !1) || pk.some(r => (n.willChange || "").includes(r)) || mk.some(r => (n.contain || "").includes(r))
}
function gk(e) {
    let t = dr(e);
    for (; fn(t) && !es(t); ) {
        if (ch(t))
            return t;
        if (ql(t))
            return null;
        t = dr(t)
    }
    return null
}
function dh() {
    return typeof CSS > "u" || !CSS.supports ? !1 : CSS.supports("-webkit-backdrop-filter", "none")
}
const vk = new Set(["html", "body", "#document"]);
function es(e) {
    return vk.has(ds(e))
}
function Qt(e) {
    return pt(e).getComputedStyle(e)
}
function Zl(e) {
    return Yt(e) ? {
        scrollLeft: e.scrollLeft,
        scrollTop: e.scrollTop
    } : {
        scrollLeft: e.scrollX,
        scrollTop: e.scrollY
    }
}
function dr(e) {
    if (ds(e) === "html")
        return e;
    const t = e.assignedSlot || e.parentNode || _m(e) && e.host || pn(e);
    return _m(t) ? t.host : t
}
function Kx(e) {
    const t = dr(e);
    return es(t) ? e.ownerDocument ? e.ownerDocument.body : e.body : fn(t) && _i(t) ? t : Kx(t)
}
function yi(e, t, n) {
    var r;
    t === void 0 && (t = []),
    n === void 0 && (n = !0);
    const o = Kx(e)
      , s = o === ((r = e.ownerDocument) == null ? void 0 : r.body)
      , i = pt(o);
    if (s) {
        const a = Ed(i);
        return t.concat(i, i.visualViewport || [], _i(o) ? o : [], a && n ? yi(a) : [])
    }
    return t.concat(o, yi(o, [], n))
}
function Ed(e) {
    return e.parent && Object.getPrototypeOf(e.parent) ? e.frameElement : null
}
function Gx(e) {
    const t = Qt(e);
    let n = parseFloat(t.width) || 0
      , r = parseFloat(t.height) || 0;
    const o = fn(e)
      , s = o ? e.offsetWidth : n
      , i = o ? e.offsetHeight : r
      , a = pl(n) !== s || pl(r) !== i;
    return a && (n = s,
    r = i),
    {
        width: n,
        height: r,
        $: a
    }
}
function fh(e) {
    return Yt(e) ? e : e.contextElement
}
function Oo(e) {
    const t = fh(e);
    if (!fn(t))
        return un(1);
    const n = t.getBoundingClientRect()
      , {width: r, height: o, $: s} = Gx(t);
    let i = (s ? pl(n.width) : n.width) / r
      , a = (s ? pl(n.height) : n.height) / o;
    return (!i || !Number.isFinite(i)) && (i = 1),
    (!a || !Number.isFinite(a)) && (a = 1),
    {
        x: i,
        y: a
    }
}
const yk = un(0);
function Yx(e) {
    const t = pt(e);
    return !dh() || !t.visualViewport ? yk : {
        x: t.visualViewport.offsetLeft,
        y: t.visualViewport.offsetTop
    }
}
function xk(e, t, n) {
    return t === void 0 && (t = !1),
    !n || t && n !== pt(e) ? !1 : t
}
function Yr(e, t, n, r) {
    t === void 0 && (t = !1),
    n === void 0 && (n = !1);
    const o = e.getBoundingClientRect()
      , s = fh(e);
    let i = un(1);
    t && (r ? Yt(r) && (i = Oo(r)) : i = Oo(e));
    const a = xk(s, n, r) ? Yx(s) : un(0);
    let l = (o.left + a.x) / i.x
      , u = (o.top + a.y) / i.y
      , c = o.width / i.x
      , d = o.height / i.y;
    if (s) {
        const f = pt(s)
          , h = r && Yt(r) ? pt(r) : r;
        let S = f
          , p = Ed(S);
        for (; p && r && h !== S; ) {
            const w = Oo(p)
              , v = p.getBoundingClientRect()
              , g = Qt(p)
              , x = v.left + (p.clientLeft + parseFloat(g.paddingLeft)) * w.x
              , C = v.top + (p.clientTop + parseFloat(g.paddingTop)) * w.y;
            l *= w.x,
            u *= w.y,
            c *= w.x,
            d *= w.y,
            l += x,
            u += C,
            S = pt(p),
            p = Ed(S)
        }
    }
    return gl({
        width: c,
        height: d,
        x: l,
        y: u
    })
}
function hh(e, t) {
    const n = Zl(e).scrollLeft;
    return t ? t.left + n : Yr(pn(e)).left + n
}
function Qx(e, t, n) {
    n === void 0 && (n = !1);
    const r = e.getBoundingClientRect()
      , o = r.left + t.scrollLeft - (n ? 0 : hh(e, r))
      , s = r.top + t.scrollTop;
    return {
        x: o,
        y: s
    }
}
function wk(e) {
    let {elements: t, rect: n, offsetParent: r, strategy: o} = e;
    const s = o === "fixed"
      , i = pn(r)
      , a = t ? ql(t.floating) : !1;
    if (r === i || a && s)
        return n;
    let l = {
        scrollLeft: 0,
        scrollTop: 0
    }
      , u = un(1);
    const c = un(0)
      , d = fn(r);
    if ((d || !d && !s) && ((ds(r) !== "body" || _i(i)) && (l = Zl(r)),
    fn(r))) {
        const h = Yr(r);
        u = Oo(r),
        c.x = h.x + r.clientLeft,
        c.y = h.y + r.clientTop
    }
    const f = i && !d && !s ? Qx(i, l, !0) : un(0);
    return {
        width: n.width * u.x,
        height: n.height * u.y,
        x: n.x * u.x - l.scrollLeft * u.x + c.x + f.x,
        y: n.y * u.y - l.scrollTop * u.y + c.y + f.y
    }
}
function Sk(e) {
    return Array.from(e.getClientRects())
}
function Ck(e) {
    const t = pn(e)
      , n = Zl(e)
      , r = e.ownerDocument.body
      , o = dt(t.scrollWidth, t.clientWidth, r.scrollWidth, r.clientWidth)
      , s = dt(t.scrollHeight, t.clientHeight, r.scrollHeight, r.clientHeight);
    let i = -n.scrollLeft + hh(e);
    const a = -n.scrollTop;
    return Qt(r).direction === "rtl" && (i += dt(t.clientWidth, r.clientWidth) - o),
    {
        width: o,
        height: s,
        x: i,
        y: a
    }
}
function bk(e, t) {
    const n = pt(e)
      , r = pn(e)
      , o = n.visualViewport;
    let s = r.clientWidth
      , i = r.clientHeight
      , a = 0
      , l = 0;
    if (o) {
        s = o.width,
        i = o.height;
        const u = dh();
        (!u || u && t === "fixed") && (a = o.offsetLeft,
        l = o.offsetTop)
    }
    return {
        width: s,
        height: i,
        x: a,
        y: l
    }
}
const Ek = new Set(["absolute", "fixed"]);
function Tk(e, t) {
    const n = Yr(e, !0, t === "fixed")
      , r = n.top + e.clientTop
      , o = n.left + e.clientLeft
      , s = fn(e) ? Oo(e) : un(1)
      , i = e.clientWidth * s.x
      , a = e.clientHeight * s.y
      , l = o * s.x
      , u = r * s.y;
    return {
        width: i,
        height: a,
        x: l,
        y: u
    }
}
function Fm(e, t, n) {
    let r;
    if (t === "viewport")
        r = bk(e, n);
    else if (t === "document")
        r = Ck(pn(e));
    else if (Yt(t))
        r = Tk(t, n);
    else {
        const o = Yx(e);
        r = {
            x: t.x - o.x,
            y: t.y - o.y,
            width: t.width,
            height: t.height
        }
    }
    return gl(r)
}
function Xx(e, t) {
    const n = dr(e);
    return n === t || !Yt(n) || es(n) ? !1 : Qt(n).position === "fixed" || Xx(n, t)
}
function Pk(e, t) {
    const n = t.get(e);
    if (n)
        return n;
    let r = yi(e, [], !1).filter(a => Yt(a) && ds(a) !== "body")
      , o = null;
    const s = Qt(e).position === "fixed";
    let i = s ? dr(e) : e;
    for (; Yt(i) && !es(i); ) {
        const a = Qt(i)
          , l = ch(i);
        !l && a.position === "fixed" && (o = null),
        (s ? !l && !o : !l && a.position === "static" && !!o && Ek.has(o.position) || _i(i) && !l && Xx(e, i)) ? r = r.filter(c => c !== i) : o = a,
        i = dr(i)
    }
    return t.set(e, r),
    r
}
function Rk(e) {
    let {element: t, boundary: n, rootBoundary: r, strategy: o} = e;
    const i = [...n === "clippingAncestors" ? ql(t) ? [] : Pk(t, this._c) : [].concat(n), r]
      , a = i[0]
      , l = i.reduce( (u, c) => {
        const d = Fm(t, c, o);
        return u.top = dt(d.top, u.top),
        u.right = cr(d.right, u.right),
        u.bottom = cr(d.bottom, u.bottom),
        u.left = dt(d.left, u.left),
        u
    }
    , Fm(t, a, o));
    return {
        width: l.right - l.left,
        height: l.bottom - l.top,
        x: l.left,
        y: l.top
    }
}
function kk(e) {
    const {width: t, height: n} = Gx(e);
    return {
        width: t,
        height: n
    }
}
function Nk(e, t, n) {
    const r = fn(t)
      , o = pn(t)
      , s = n === "fixed"
      , i = Yr(e, !0, s, t);
    let a = {
        scrollLeft: 0,
        scrollTop: 0
    };
    const l = un(0);
    function u() {
        l.x = hh(o)
    }
    if (r || !r && !s)
        if ((ds(t) !== "body" || _i(o)) && (a = Zl(t)),
        r) {
            const h = Yr(t, !0, s, t);
            l.x = h.x + t.clientLeft,
            l.y = h.y + t.clientTop
        } else
            o && u();
    s && !r && o && u();
    const c = o && !r && !s ? Qx(o, a) : un(0)
      , d = i.left + a.scrollLeft - l.x - c.x
      , f = i.top + a.scrollTop - l.y - c.y;
    return {
        x: d,
        y: f,
        width: i.width,
        height: i.height
    }
}
function qu(e) {
    return Qt(e).position === "static"
}
function Vm(e, t) {
    if (!fn(e) || Qt(e).position === "fixed")
        return null;
    if (t)
        return t(e);
    let n = e.offsetParent;
    return pn(e) === n && (n = n.ownerDocument.body),
    n
}
function qx(e, t) {
    const n = pt(e);
    if (ql(e))
        return n;
    if (!fn(e)) {
        let o = dr(e);
        for (; o && !es(o); ) {
            if (Yt(o) && !qu(o))
                return o;
            o = dr(o)
        }
        return n
    }
    let r = Vm(e, t);
    for (; r && dk(r) && qu(r); )
        r = Vm(r, t);
    return r && es(r) && qu(r) && !ch(r) ? n : r || gk(e) || n
}
const Ak = async function(e) {
    const t = this.getOffsetParent || qx
      , n = this.getDimensions
      , r = await n(e.floating);
    return {
        reference: Nk(e.reference, await t(e.floating), e.strategy),
        floating: {
            x: 0,
            y: 0,
            width: r.width,
            height: r.height
        }
    }
};
function Mk(e) {
    return Qt(e).direction === "rtl"
}
const jk = {
    convertOffsetParentRelativeRectToViewportRelativeRect: wk,
    getDocumentElement: pn,
    getClippingRect: Rk,
    getOffsetParent: qx,
    getElementRects: Ak,
    getClientRects: Sk,
    getDimensions: kk,
    getScale: Oo,
    isElement: Yt,
    isRTL: Mk
};
function Zx(e, t) {
    return e.x === t.x && e.y === t.y && e.width === t.width && e.height === t.height
}
function Dk(e, t) {
    let n = null, r;
    const o = pn(e);
    function s() {
        var a;
        clearTimeout(r),
        (a = n) == null || a.disconnect(),
        n = null
    }
    function i(a, l) {
        a === void 0 && (a = !1),
        l === void 0 && (l = 1),
        s();
        const u = e.getBoundingClientRect()
          , {left: c, top: d, width: f, height: h} = u;
        if (a || t(),
        !f || !h)
            return;
        const S = da(d)
          , p = da(o.clientWidth - (c + f))
          , w = da(o.clientHeight - (d + h))
          , v = da(c)
          , x = {
            rootMargin: -S + "px " + -p + "px " + -w + "px " + -v + "px",
            threshold: dt(0, cr(1, l)) || 1
        };
        let C = !0;
        function b(E) {
            const T = E[0].intersectionRatio;
            if (T !== l) {
                if (!C)
                    return i();
                T ? i(!1, T) : r = setTimeout( () => {
                    i(!1, 1e-7)
                }
                , 1e3)
            }
            T === 1 && !Zx(u, e.getBoundingClientRect()) && i(),
            C = !1
        }
        try {
            n = new IntersectionObserver(b,{
                ...x,
                root: o.ownerDocument
            })
        } catch {
            n = new IntersectionObserver(b,x)
        }
        n.observe(e)
    }
    return i(!0),
    s
}
function Ik(e, t, n, r) {
    r === void 0 && (r = {});
    const {ancestorScroll: o=!0, ancestorResize: s=!0, elementResize: i=typeof ResizeObserver == "function", layoutShift: a=typeof IntersectionObserver == "function", animationFrame: l=!1} = r
      , u = fh(e)
      , c = o || s ? [...u ? yi(u) : [], ...yi(t)] : [];
    c.forEach(v => {
        o && v.addEventListener("scroll", n, {
            passive: !0
        }),
        s && v.addEventListener("resize", n)
    }
    );
    const d = u && a ? Dk(u, n) : null;
    let f = -1
      , h = null;
    i && (h = new ResizeObserver(v => {
        let[g] = v;
        g && g.target === u && h && (h.unobserve(t),
        cancelAnimationFrame(f),
        f = requestAnimationFrame( () => {
            var x;
            (x = h) == null || x.observe(t)
        }
        )),
        n()
    }
    ),
    u && !l && h.observe(u),
    h.observe(t));
    let S, p = l ? Yr(e) : null;
    l && w();
    function w() {
        const v = Yr(e);
        p && !Zx(p, v) && n(),
        p = v,
        S = requestAnimationFrame(w)
    }
    return n(),
    () => {
        var v;
        c.forEach(g => {
            o && g.removeEventListener("scroll", n),
            s && g.removeEventListener("resize", n)
        }
        ),
        d == null || d(),
        (v = h) == null || v.disconnect(),
        h = null,
        l && cancelAnimationFrame(S)
    }
}
const Ok = sk
  , Lk = ik
  , _k = nk
  , Fk = lk
  , Vk = rk
  , Bm = tk
  , Bk = ak
  , $k = (e, t, n) => {
    const r = new Map
      , o = {
        platform: jk,
        ...n
    }
      , s = {
        ...o.platform,
        _c: r
    };
    return ek(e, t, {
        ...o,
        platform: s
    })
}
;
var zk = typeof document < "u"
  , Uk = function() {}
  , Oa = zk ? m.useLayoutEffect : Uk;
function vl(e, t) {
    if (e === t)
        return !0;
    if (typeof e != typeof t)
        return !1;
    if (typeof e == "function" && e.toString() === t.toString())
        return !0;
    let n, r, o;
    if (e && t && typeof e == "object") {
        if (Array.isArray(e)) {
            if (n = e.length,
            n !== t.length)
                return !1;
            for (r = n; r-- !== 0; )
                if (!vl(e[r], t[r]))
                    return !1;
            return !0
        }
        if (o = Object.keys(e),
        n = o.length,
        n !== Object.keys(t).length)
            return !1;
        for (r = n; r-- !== 0; )
            if (!{}.hasOwnProperty.call(t, o[r]))
                return !1;
        for (r = n; r-- !== 0; ) {
            const s = o[r];
            if (!(s === "_owner" && e.$$typeof) && !vl(e[s], t[s]))
                return !1
        }
        return !0
    }
    return e !== e && t !== t
}
function Jx(e) {
    return typeof window > "u" ? 1 : (e.ownerDocument.defaultView || window).devicePixelRatio || 1
}
function $m(e, t) {
    const n = Jx(e);
    return Math.round(t * n) / n
}
function Zu(e) {
    const t = m.useRef(e);
    return Oa( () => {
        t.current = e
    }
    ),
    t
}
function Wk(e) {
    e === void 0 && (e = {});
    const {placement: t="bottom", strategy: n="absolute", middleware: r=[], platform: o, elements: {reference: s, floating: i}={}, transform: a=!0, whileElementsMounted: l, open: u} = e
      , [c,d] = m.useState({
        x: 0,
        y: 0,
        strategy: n,
        placement: t,
        middlewareData: {},
        isPositioned: !1
    })
      , [f,h] = m.useState(r);
    vl(f, r) || h(r);
    const [S,p] = m.useState(null)
      , [w,v] = m.useState(null)
      , g = m.useCallback(R => {
        R !== E.current && (E.current = R,
        p(R))
    }
    , [])
      , x = m.useCallback(R => {
        R !== T.current && (T.current = R,
        v(R))
    }
    , [])
      , C = s || S
      , b = i || w
      , E = m.useRef(null)
      , T = m.useRef(null)
      , P = m.useRef(c)
      , N = l != null
      , M = Zu(l)
      , V = Zu(o)
      , O = Zu(u)
      , W = m.useCallback( () => {
        if (!E.current || !T.current)
            return;
        const R = {
            placement: t,
            strategy: n,
            middleware: f
        };
        V.current && (R.platform = V.current),
        $k(E.current, T.current, R).then(k => {
            const L = {
                ...k,
                isPositioned: O.current !== !1
            };
            D.current && !vl(P.current, L) && (P.current = L,
            eo.flushSync( () => {
                d(L)
            }
            ))
        }
        )
    }
    , [f, t, n, V, O]);
    Oa( () => {
        u === !1 && P.current.isPositioned && (P.current.isPositioned = !1,
        d(R => ({
            ...R,
            isPositioned: !1
        })))
    }
    , [u]);
    const D = m.useRef(!1);
    Oa( () => (D.current = !0,
    () => {
        D.current = !1
    }
    ), []),
    Oa( () => {
        if (C && (E.current = C),
        b && (T.current = b),
        C && b) {
            if (M.current)
                return M.current(C, b, W);
            W()
        }
    }
    , [C, b, W, M, N]);
    const H = m.useMemo( () => ({
        reference: E,
        floating: T,
        setReference: g,
        setFloating: x
    }), [g, x])
      , z = m.useMemo( () => ({
        reference: C,
        floating: b
    }), [C, b])
      , F = m.useMemo( () => {
        const R = {
            position: n,
            left: 0,
            top: 0
        };
        if (!z.floating)
            return R;
        const k = $m(z.floating, c.x)
          , L = $m(z.floating, c.y);
        return a ? {
            ...R,
            transform: "translate(" + k + "px, " + L + "px)",
            ...Jx(z.floating) >= 1.5 && {
                willChange: "transform"
            }
        } : {
            position: n,
            left: k,
            top: L
        }
    }
    , [n, a, z.floating, c.x, c.y]);
    return m.useMemo( () => ({
        ...c,
        update: W,
        refs: H,
        elements: z,
        floatingStyles: F
    }), [c, W, H, z, F])
}
const Hk = e => {
    function t(n) {
        return {}.hasOwnProperty.call(n, "current")
    }
    return {
        name: "arrow",
        options: e,
        fn(n) {
            const {element: r, padding: o} = typeof e == "function" ? e(n) : e;
            return r && t(r) ? r.current != null ? Bm({
                element: r.current,
                padding: o
            }).fn(n) : {} : r ? Bm({
                element: r,
                padding: o
            }).fn(n) : {}
        }
    }
}
  , Kk = (e, t) => ({
    ...Ok(e),
    options: [e, t]
})
  , Gk = (e, t) => ({
    ...Lk(e),
    options: [e, t]
})
  , Yk = (e, t) => ({
    ...Bk(e),
    options: [e, t]
})
  , Qk = (e, t) => ({
    ..._k(e),
    options: [e, t]
})
  , Xk = (e, t) => ({
    ...Fk(e),
    options: [e, t]
})
  , qk = (e, t) => ({
    ...Vk(e),
    options: [e, t]
})
  , Zk = (e, t) => ({
    ...Hk(e),
    options: [e, t]
});
var Jk = "Arrow"
  , ew = m.forwardRef( (e, t) => {
    const {children: n, width: r=10, height: o=5, ...s} = e;
    return y.jsx(ne.svg, {
        ...s,
        ref: t,
        width: r,
        height: o,
        viewBox: "0 0 30 10",
        preserveAspectRatio: "none",
        children: e.asChild ? n : y.jsx("polygon", {
            points: "0,0 30,0 15,10"
        })
    })
}
);
ew.displayName = Jk;
var eN = ew;
function tN(e) {
    const [t,n] = m.useState(void 0);
    return $e( () => {
        if (e) {
            n({
                width: e.offsetWidth,
                height: e.offsetHeight
            });
            const r = new ResizeObserver(o => {
                if (!Array.isArray(o) || !o.length)
                    return;
                const s = o[0];
                let i, a;
                if ("borderBoxSize"in s) {
                    const l = s.borderBoxSize
                      , u = Array.isArray(l) ? l[0] : l;
                    i = u.inlineSize,
                    a = u.blockSize
                } else
                    i = e.offsetWidth,
                    a = e.offsetHeight;
                n({
                    width: i,
                    height: a
                })
            }
            );
            return r.observe(e, {
                box: "border-box"
            }),
            () => r.unobserve(e)
        } else
            n(void 0)
    }
    , [e]),
    t
}
var ph = "Popper"
  , [tw,Jl] = as(ph)
  , [nN,nw] = tw(ph)
  , rw = e => {
    const {__scopePopper: t, children: n} = e
      , [r,o] = m.useState(null);
    return y.jsx(nN, {
        scope: t,
        anchor: r,
        onAnchorChange: o,
        children: n
    })
}
;
rw.displayName = ph;
var ow = "PopperAnchor"
  , sw = m.forwardRef( (e, t) => {
    const {__scopePopper: n, virtualRef: r, ...o} = e
      , s = nw(ow, n)
      , i = m.useRef(null)
      , a = me(t, i);
    return m.useEffect( () => {
        s.onAnchorChange((r == null ? void 0 : r.current) || i.current)
    }
    ),
    r ? null : y.jsx(ne.div, {
        ...o,
        ref: a
    })
}
);
sw.displayName = ow;
var mh = "PopperContent"
  , [rN,oN] = tw(mh)
  , iw = m.forwardRef( (e, t) => {
    var _, ie, Ee, se, ee, re;
    const {__scopePopper: n, side: r="bottom", sideOffset: o=0, align: s="center", alignOffset: i=0, arrowPadding: a=0, avoidCollisions: l=!0, collisionBoundary: u=[], collisionPadding: c=0, sticky: d="partial", hideWhenDetached: f=!1, updatePositionStrategy: h="optimized", onPlaced: S, ...p} = e
      , w = nw(mh, n)
      , [v,g] = m.useState(null)
      , x = me(t, ze => g(ze))
      , [C,b] = m.useState(null)
      , E = tN(C)
      , T = (E == null ? void 0 : E.width) ?? 0
      , P = (E == null ? void 0 : E.height) ?? 0
      , N = r + (s !== "center" ? "-" + s : "")
      , M = typeof c == "number" ? c : {
        top: 0,
        right: 0,
        bottom: 0,
        left: 0,
        ...c
    }
      , V = Array.isArray(u) ? u : [u]
      , O = V.length > 0
      , W = {
        padding: M,
        boundary: V.filter(iN),
        altBoundary: O
    }
      , {refs: D, floatingStyles: H, placement: z, isPositioned: F, middlewareData: R} = Wk({
        strategy: "fixed",
        placement: N,
        whileElementsMounted: (...ze) => Ik(...ze, {
            animationFrame: h === "always"
        }),
        elements: {
            reference: w.anchor
        },
        middleware: [Kk({
            mainAxis: o + P,
            alignmentAxis: i
        }), l && Gk({
            mainAxis: !0,
            crossAxis: !1,
            limiter: d === "partial" ? Yk() : void 0,
            ...W
        }), l && Qk({
            ...W
        }), Xk({
            ...W,
            apply: ({elements: ze, rects: yt, availableWidth: wr, availableHeight: Mn}) => {
                const {width: Sr, height: ys} = yt.reference
                  , no = ze.floating.style;
                no.setProperty("--radix-popper-available-width", `${wr}px`),
                no.setProperty("--radix-popper-available-height", `${Mn}px`),
                no.setProperty("--radix-popper-anchor-width", `${Sr}px`),
                no.setProperty("--radix-popper-anchor-height", `${ys}px`)
            }
        }), C && Zk({
            element: C,
            padding: a
        }), aN({
            arrowWidth: T,
            arrowHeight: P
        }), f && qk({
            strategy: "referenceHidden",
            ...W
        })]
    })
      , [k,L] = uw(z)
      , K = Gt(S);
    $e( () => {
        F && (K == null || K())
    }
    , [F, K]);
    const U = (_ = R.arrow) == null ? void 0 : _.x
      , X = (ie = R.arrow) == null ? void 0 : ie.y
      , G = ((Ee = R.arrow) == null ? void 0 : Ee.centerOffset) !== 0
      , [ce,be] = m.useState();
    return $e( () => {
        v && be(window.getComputedStyle(v).zIndex)
    }
    , [v]),
    y.jsx("div", {
        ref: D.setFloating,
        "data-radix-popper-content-wrapper": "",
        style: {
            ...H,
            transform: F ? H.transform : "translate(0, -200%)",
            minWidth: "max-content",
            zIndex: ce,
            "--radix-popper-transform-origin": [(se = R.transformOrigin) == null ? void 0 : se.x, (ee = R.transformOrigin) == null ? void 0 : ee.y].join(" "),
            ...((re = R.hide) == null ? void 0 : re.referenceHidden) && {
                visibility: "hidden",
                pointerEvents: "none"
            }
        },
        dir: e.dir,
        children: y.jsx(rN, {
            scope: n,
            placedSide: k,
            onArrowChange: b,
            arrowX: U,
            arrowY: X,
            shouldHideArrow: G,
            children: y.jsx(ne.div, {
                "data-side": k,
                "data-align": L,
                ...p,
                ref: x,
                style: {
                    ...p.style,
                    animation: F ? void 0 : "none"
                }
            })
        })
    })
}
);
iw.displayName = mh;
var aw = "PopperArrow"
  , sN = {
    top: "bottom",
    right: "left",
    bottom: "top",
    left: "right"
}
  , lw = m.forwardRef(function(t, n) {
    const {__scopePopper: r, ...o} = t
      , s = oN(aw, r)
      , i = sN[s.placedSide];
    return y.jsx("span", {
        ref: s.onArrowChange,
        style: {
            position: "absolute",
            left: s.arrowX,
            top: s.arrowY,
            [i]: 0,
            transformOrigin: {
                top: "",
                right: "0 0",
                bottom: "center 0",
                left: "100% 0"
            }[s.placedSide],
            transform: {
                top: "translateY(100%)",
                right: "translateY(50%) rotate(90deg) translateX(-50%)",
                bottom: "rotate(180deg)",
                left: "translateY(50%) rotate(-90deg) translateX(50%)"
            }[s.placedSide],
            visibility: s.shouldHideArrow ? "hidden" : void 0
        },
        children: y.jsx(eN, {
            ...o,
            ref: n,
            style: {
                ...o.style,
                display: "block"
            }
        })
    })
});
lw.displayName = aw;
function iN(e) {
    return e !== null
}
var aN = e => ({
    name: "transformOrigin",
    options: e,
    fn(t) {
        var w, v, g;
        const {placement: n, rects: r, middlewareData: o} = t
          , i = ((w = o.arrow) == null ? void 0 : w.centerOffset) !== 0
          , a = i ? 0 : e.arrowWidth
          , l = i ? 0 : e.arrowHeight
          , [u,c] = uw(n)
          , d = {
            start: "0%",
            center: "50%",
            end: "100%"
        }[c]
          , f = (((v = o.arrow) == null ? void 0 : v.x) ?? 0) + a / 2
          , h = (((g = o.arrow) == null ? void 0 : g.y) ?? 0) + l / 2;
        let S = ""
          , p = "";
        return u === "bottom" ? (S = i ? d : `${f}px`,
        p = `${-l}px`) : u === "top" ? (S = i ? d : `${f}px`,
        p = `${r.floating.height + l}px`) : u === "right" ? (S = `${-l}px`,
        p = i ? d : `${h}px`) : u === "left" && (S = `${r.floating.width + l}px`,
        p = i ? d : `${h}px`),
        {
            data: {
                x: S,
                y: p
            }
        }
    }
});
function uw(e) {
    const [t,n="center"] = e.split("-");
    return [t, n]
}
var lN = rw
  , cw = sw
  , dw = iw
  , fw = lw
  , [eu,_L] = as("Tooltip", [Jl])
  , gh = Jl()
  , hw = "TooltipProvider"
  , uN = 700
  , zm = "tooltip.open"
  , [cN,pw] = eu(hw)
  , mw = e => {
    const {__scopeTooltip: t, delayDuration: n=uN, skipDelayDuration: r=300, disableHoverableContent: o=!1, children: s} = e
      , i = m.useRef(!0)
      , a = m.useRef(!1)
      , l = m.useRef(0);
    return m.useEffect( () => {
        const u = l.current;
        return () => window.clearTimeout(u)
    }
    , []),
    y.jsx(cN, {
        scope: t,
        isOpenDelayedRef: i,
        delayDuration: n,
        onOpen: m.useCallback( () => {
            window.clearTimeout(l.current),
            i.current = !1
        }
        , []),
        onClose: m.useCallback( () => {
            window.clearTimeout(l.current),
            l.current = window.setTimeout( () => i.current = !0, r)
        }
        , [r]),
        isPointerInTransitRef: a,
        onPointerInTransitChange: m.useCallback(u => {
            a.current = u
        }
        , []),
        disableHoverableContent: o,
        children: s
    })
}
;
mw.displayName = hw;
var gw = "Tooltip"
  , [FL,tu] = eu(gw)
  , Td = "TooltipTrigger"
  , dN = m.forwardRef( (e, t) => {
    const {__scopeTooltip: n, ...r} = e
      , o = tu(Td, n)
      , s = pw(Td, n)
      , i = gh(n)
      , a = m.useRef(null)
      , l = me(t, a, o.onTriggerChange)
      , u = m.useRef(!1)
      , c = m.useRef(!1)
      , d = m.useCallback( () => u.current = !1, []);
    return m.useEffect( () => () => document.removeEventListener("pointerup", d), [d]),
    y.jsx(cw, {
        asChild: !0,
        ...i,
        children: y.jsx(ne.button, {
            "aria-describedby": o.open ? o.contentId : void 0,
            "data-state": o.stateAttribute,
            ...r,
            ref: l,
            onPointerMove: Z(e.onPointerMove, f => {
                f.pointerType !== "touch" && !c.current && !s.isPointerInTransitRef.current && (o.onTriggerEnter(),
                c.current = !0)
            }
            ),
            onPointerLeave: Z(e.onPointerLeave, () => {
                o.onTriggerLeave(),
                c.current = !1
            }
            ),
            onPointerDown: Z(e.onPointerDown, () => {
                o.open && o.onClose(),
                u.current = !0,
                document.addEventListener("pointerup", d, {
                    once: !0
                })
            }
            ),
            onFocus: Z(e.onFocus, () => {
                u.current || o.onOpen()
            }
            ),
            onBlur: Z(e.onBlur, o.onClose),
            onClick: Z(e.onClick, o.onClose)
        })
    })
}
);
dN.displayName = Td;
var fN = "TooltipPortal"
  , [VL,hN] = eu(fN, {
    forceMount: void 0
})
  , ts = "TooltipContent"
  , vw = m.forwardRef( (e, t) => {
    const n = hN(ts, e.__scopeTooltip)
      , {forceMount: r=n.forceMount, side: o="top", ...s} = e
      , i = tu(ts, e.__scopeTooltip);
    return y.jsx(ls, {
        present: r || i.open,
        children: i.disableHoverableContent ? y.jsx(yw, {
            side: o,
            ...s,
            ref: t
        }) : y.jsx(pN, {
            side: o,
            ...s,
            ref: t
        })
    })
}
)
  , pN = m.forwardRef( (e, t) => {
    const n = tu(ts, e.__scopeTooltip)
      , r = pw(ts, e.__scopeTooltip)
      , o = m.useRef(null)
      , s = me(t, o)
      , [i,a] = m.useState(null)
      , {trigger: l, onClose: u} = n
      , c = o.current
      , {onPointerInTransitChange: d} = r
      , f = m.useCallback( () => {
        a(null),
        d(!1)
    }
    , [d])
      , h = m.useCallback( (S, p) => {
        const w = S.currentTarget
          , v = {
            x: S.clientX,
            y: S.clientY
        }
          , g = xN(v, w.getBoundingClientRect())
          , x = wN(v, g)
          , C = SN(p.getBoundingClientRect())
          , b = bN([...x, ...C]);
        a(b),
        d(!0)
    }
    , [d]);
    return m.useEffect( () => () => f(), [f]),
    m.useEffect( () => {
        if (l && c) {
            const S = w => h(w, c)
              , p = w => h(w, l);
            return l.addEventListener("pointerleave", S),
            c.addEventListener("pointerleave", p),
            () => {
                l.removeEventListener("pointerleave", S),
                c.removeEventListener("pointerleave", p)
            }
        }
    }
    , [l, c, h, f]),
    m.useEffect( () => {
        if (i) {
            const S = p => {
                const w = p.target
                  , v = {
                    x: p.clientX,
                    y: p.clientY
                }
                  , g = (l == null ? void 0 : l.contains(w)) || (c == null ? void 0 : c.contains(w))
                  , x = !CN(v, i);
                g ? f() : x && (f(),
                u())
            }
            ;
            return document.addEventListener("pointermove", S),
            () => document.removeEventListener("pointermove", S)
        }
    }
    , [l, c, i, u, f]),
    y.jsx(yw, {
        ...e,
        ref: s
    })
}
)
  , [mN,gN] = eu(gw, {
    isInside: !1
})
  , vN = AT("TooltipContent")
  , yw = m.forwardRef( (e, t) => {
    const {__scopeTooltip: n, children: r, "aria-label": o, onEscapeKeyDown: s, onPointerDownOutside: i, ...a} = e
      , l = tu(ts, n)
      , u = gh(n)
      , {onClose: c} = l;
    return m.useEffect( () => (document.addEventListener(zm, c),
    () => document.removeEventListener(zm, c)), [c]),
    m.useEffect( () => {
        if (l.trigger) {
            const d = f => {
                const h = f.target;
                h != null && h.contains(l.trigger) && c()
            }
            ;
            return window.addEventListener("scroll", d, {
                capture: !0
            }),
            () => window.removeEventListener("scroll", d, {
                capture: !0
            })
        }
    }
    , [l.trigger, c]),
    y.jsx(Oi, {
        asChild: !0,
        disableOutsidePointerEvents: !1,
        onEscapeKeyDown: s,
        onPointerDownOutside: i,
        onFocusOutside: d => d.preventDefault(),
        onDismiss: c,
        children: y.jsxs(dw, {
            "data-state": l.stateAttribute,
            ...u,
            ...a,
            ref: t,
            style: {
                ...a.style,
                "--radix-tooltip-content-transform-origin": "var(--radix-popper-transform-origin)",
                "--radix-tooltip-content-available-width": "var(--radix-popper-available-width)",
                "--radix-tooltip-content-available-height": "var(--radix-popper-available-height)",
                "--radix-tooltip-trigger-width": "var(--radix-popper-anchor-width)",
                "--radix-tooltip-trigger-height": "var(--radix-popper-anchor-height)"
            },
            children: [y.jsx(vN, {
                children: r
            }), y.jsx(mN, {
                scope: n,
                isInside: !0,
                children: y.jsx(ZT, {
                    id: l.contentId,
                    role: "tooltip",
                    children: o || r
                })
            })]
        })
    })
}
);
vw.displayName = ts;
var xw = "TooltipArrow"
  , yN = m.forwardRef( (e, t) => {
    const {__scopeTooltip: n, ...r} = e
      , o = gh(n);
    return gN(xw, n).isInside ? null : y.jsx(fw, {
        ...o,
        ...r,
        ref: t
    })
}
);
yN.displayName = xw;
function xN(e, t) {
    const n = Math.abs(t.top - e.y)
      , r = Math.abs(t.bottom - e.y)
      , o = Math.abs(t.right - e.x)
      , s = Math.abs(t.left - e.x);
    switch (Math.min(n, r, o, s)) {
    case s:
        return "left";
    case o:
        return "right";
    case n:
        return "top";
    case r:
        return "bottom";
    default:
        throw new Error("unreachable")
    }
}
function wN(e, t, n=5) {
    const r = [];
    switch (t) {
    case "top":
        r.push({
            x: e.x - n,
            y: e.y + n
        }, {
            x: e.x + n,
            y: e.y + n
        });
        break;
    case "bottom":
        r.push({
            x: e.x - n,
            y: e.y - n
        }, {
            x: e.x + n,
            y: e.y - n
        });
        break;
    case "left":
        r.push({
            x: e.x + n,
            y: e.y - n
        }, {
            x: e.x + n,
            y: e.y + n
        });
        break;
    case "right":
        r.push({
            x: e.x - n,
            y: e.y - n
        }, {
            x: e.x - n,
            y: e.y + n
        });
        break
    }
    return r
}
function SN(e) {
    const {top: t, right: n, bottom: r, left: o} = e;
    return [{
        x: o,
        y: t
    }, {
        x: n,
        y: t
    }, {
        x: n,
        y: r
    }, {
        x: o,
        y: r
    }]
}
function CN(e, t) {
    const {x: n, y: r} = e;
    let o = !1;
    for (let s = 0, i = t.length - 1; s < t.length; i = s++) {
        const a = t[s]
          , l = t[i]
          , u = a.x
          , c = a.y
          , d = l.x
          , f = l.y;
        c > r != f > r && n < (d - u) * (r - c) / (f - c) + u && (o = !o)
    }
    return o
}
function bN(e) {
    const t = e.slice();
    return t.sort( (n, r) => n.x < r.x ? -1 : n.x > r.x ? 1 : n.y < r.y ? -1 : n.y > r.y ? 1 : 0),
    EN(t)
}
function EN(e) {
    if (e.length <= 1)
        return e.slice();
    const t = [];
    for (let r = 0; r < e.length; r++) {
        const o = e[r];
        for (; t.length >= 2; ) {
            const s = t[t.length - 1]
              , i = t[t.length - 2];
            if ((s.x - i.x) * (o.y - i.y) >= (s.y - i.y) * (o.x - i.x))
                t.pop();
            else
                break
        }
        t.push(o)
    }
    t.pop();
    const n = [];
    for (let r = e.length - 1; r >= 0; r--) {
        const o = e[r];
        for (; n.length >= 2; ) {
            const s = n[n.length - 1]
              , i = n[n.length - 2];
            if ((s.x - i.x) * (o.y - i.y) >= (s.y - i.y) * (o.x - i.x))
                n.pop();
            else
                break
        }
        n.push(o)
    }
    return n.pop(),
    t.length === 1 && n.length === 1 && t[0].x === n[0].x && t[0].y === n[0].y ? t : t.concat(n)
}
var TN = mw
  , ww = vw;
const PN = TN
  , RN = m.forwardRef( ({className: e, sideOffset: t=4, ...n}, r) => y.jsx(ww, {
    ref: r,
    sideOffset: t,
    className: Re("z-50 overflow-hidden rounded-md border bg-popover px-3 py-1.5 text-sm text-popover-foreground shadow-md animate-in fade-in-0 zoom-in-95 data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=closed]:zoom-out-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2", e),
    ...n
}));
RN.displayName = ww.displayName;
var nu = class {
    constructor() {
        this.listeners = new Set,
        this.subscribe = this.subscribe.bind(this)
    }
    subscribe(e) {
        return this.listeners.add(e),
        this.onSubscribe(),
        () => {
            this.listeners.delete(e),
            this.onUnsubscribe()
        }
    }
    hasListeners() {
        return this.listeners.size > 0
    }
    onSubscribe() {}
    onUnsubscribe() {}
}
  , ru = typeof window > "u" || "Deno"in globalThis;
function Vt() {}
function kN(e, t) {
    return typeof e == "function" ? e(t) : e
}
function NN(e) {
    return typeof e == "number" && e >= 0 && e !== 1 / 0
}
function AN(e, t) {
    return Math.max(e + (t || 0) - Date.now(), 0)
}
function Pd(e, t) {
    return typeof e == "function" ? e(t) : e
}
function MN(e, t) {
    return typeof e == "function" ? e(t) : e
}
function Um(e, t) {
    const {type: n="all", exact: r, fetchStatus: o, predicate: s, queryKey: i, stale: a} = e;
    if (i) {
        if (r) {
            if (t.queryHash !== vh(i, t.options))
                return !1
        } else if (!wi(t.queryKey, i))
            return !1
    }
    if (n !== "all") {
        const l = t.isActive();
        if (n === "active" && !l || n === "inactive" && l)
            return !1
    }
    return !(typeof a == "boolean" && t.isStale() !== a || o && o !== t.state.fetchStatus || s && !s(t))
}
function Wm(e, t) {
    const {exact: n, status: r, predicate: o, mutationKey: s} = e;
    if (s) {
        if (!t.options.mutationKey)
            return !1;
        if (n) {
            if (xi(t.options.mutationKey) !== xi(s))
                return !1
        } else if (!wi(t.options.mutationKey, s))
            return !1
    }
    return !(r && t.state.status !== r || o && !o(t))
}
function vh(e, t) {
    return ((t == null ? void 0 : t.queryKeyHashFn) || xi)(e)
}
function xi(e) {
    return JSON.stringify(e, (t, n) => Rd(n) ? Object.keys(n).sort().reduce( (r, o) => (r[o] = n[o],
    r), {}) : n)
}
function wi(e, t) {
    return e === t ? !0 : typeof e != typeof t ? !1 : e && t && typeof e == "object" && typeof t == "object" ? Object.keys(t).every(n => wi(e[n], t[n])) : !1
}
function Sw(e, t) {
    if (e === t)
        return e;
    const n = Hm(e) && Hm(t);
    if (n || Rd(e) && Rd(t)) {
        const r = n ? e : Object.keys(e)
          , o = r.length
          , s = n ? t : Object.keys(t)
          , i = s.length
          , a = n ? [] : {}
          , l = new Set(r);
        let u = 0;
        for (let c = 0; c < i; c++) {
            const d = n ? c : s[c];
            (!n && l.has(d) || n) && e[d] === void 0 && t[d] === void 0 ? (a[d] = void 0,
            u++) : (a[d] = Sw(e[d], t[d]),
            a[d] === e[d] && e[d] !== void 0 && u++)
        }
        return o === i && u === o ? e : a
    }
    return t
}
function Hm(e) {
    return Array.isArray(e) && e.length === Object.keys(e).length
}
function Rd(e) {
    if (!Km(e))
        return !1;
    const t = e.constructor;
    if (t === void 0)
        return !0;
    const n = t.prototype;
    return !(!Km(n) || !n.hasOwnProperty("isPrototypeOf") || Object.getPrototypeOf(e) !== Object.prototype)
}
function Km(e) {
    return Object.prototype.toString.call(e) === "[object Object]"
}
function jN(e) {
    return new Promise(t => {
        setTimeout(t, e)
    }
    )
}
function DN(e, t, n) {
    return typeof n.structuralSharing == "function" ? n.structuralSharing(e, t) : n.structuralSharing !== !1 ? Sw(e, t) : t
}
function IN(e, t, n=0) {
    const r = [...e, t];
    return n && r.length > n ? r.slice(1) : r
}
function ON(e, t, n=0) {
    const r = [t, ...e];
    return n && r.length > n ? r.slice(0, -1) : r
}
var yh = Symbol();
function Cw(e, t) {
    return !e.queryFn && (t != null && t.initialPromise) ? () => t.initialPromise : !e.queryFn || e.queryFn === yh ? () => Promise.reject(new Error(`Missing queryFn: '${e.queryHash}'`)) : e.queryFn
}
var Dr, Hn, Fo, Mv, LN = (Mv = class extends nu {
    constructor() {
        super();
        oe(this, Dr);
        oe(this, Hn);
        oe(this, Fo);
        Q(this, Fo, t => {
            if (!ru && window.addEventListener) {
                const n = () => t();
                return window.addEventListener("visibilitychange", n, !1),
                () => {
                    window.removeEventListener("visibilitychange", n)
                }
            }
        }
        )
    }
    onSubscribe() {
        A(this, Hn) || this.setEventListener(A(this, Fo))
    }
    onUnsubscribe() {
        var t;
        this.hasListeners() || ((t = A(this, Hn)) == null || t.call(this),
        Q(this, Hn, void 0))
    }
    setEventListener(t) {
        var n;
        Q(this, Fo, t),
        (n = A(this, Hn)) == null || n.call(this),
        Q(this, Hn, t(r => {
            typeof r == "boolean" ? this.setFocused(r) : this.onFocus()
        }
        ))
    }
    setFocused(t) {
        A(this, Dr) !== t && (Q(this, Dr, t),
        this.onFocus())
    }
    onFocus() {
        const t = this.isFocused();
        this.listeners.forEach(n => {
            n(t)
        }
        )
    }
    isFocused() {
        var t;
        return typeof A(this, Dr) == "boolean" ? A(this, Dr) : ((t = globalThis.document) == null ? void 0 : t.visibilityState) !== "hidden"
    }
}
,
Dr = new WeakMap,
Hn = new WeakMap,
Fo = new WeakMap,
Mv), bw = new LN, Vo, Kn, Bo, jv, _N = (jv = class extends nu {
    constructor() {
        super();
        oe(this, Vo, !0);
        oe(this, Kn);
        oe(this, Bo);
        Q(this, Bo, t => {
            if (!ru && window.addEventListener) {
                const n = () => t(!0)
                  , r = () => t(!1);
                return window.addEventListener("online", n, !1),
                window.addEventListener("offline", r, !1),
                () => {
                    window.removeEventListener("online", n),
                    window.removeEventListener("offline", r)
                }
            }
        }
        )
    }
    onSubscribe() {
        A(this, Kn) || this.setEventListener(A(this, Bo))
    }
    onUnsubscribe() {
        var t;
        this.hasListeners() || ((t = A(this, Kn)) == null || t.call(this),
        Q(this, Kn, void 0))
    }
    setEventListener(t) {
        var n;
        Q(this, Bo, t),
        (n = A(this, Kn)) == null || n.call(this),
        Q(this, Kn, t(this.setOnline.bind(this)))
    }
    setOnline(t) {
        A(this, Vo) !== t && (Q(this, Vo, t),
        this.listeners.forEach(r => {
            r(t)
        }
        ))
    }
    isOnline() {
        return A(this, Vo)
    }
}
,
Vo = new WeakMap,
Kn = new WeakMap,
Bo = new WeakMap,
jv), yl = new _N;
function FN() {
    let e, t;
    const n = new Promise( (o, s) => {
        e = o,
        t = s
    }
    );
    n.status = "pending",
    n.catch( () => {}
    );
    function r(o) {
        Object.assign(n, o),
        delete n.resolve,
        delete n.reject
    }
    return n.resolve = o => {
        r({
            status: "fulfilled",
            value: o
        }),
        e(o)
    }
    ,
    n.reject = o => {
        r({
            status: "rejected",
            reason: o
        }),
        t(o)
    }
    ,
    n
}
function VN(e) {
    return Math.min(1e3 * 2 ** e, 3e4)
}
function Ew(e) {
    return (e ?? "online") === "online" ? yl.isOnline() : !0
}
var Tw = class extends Error {
    constructor(e) {
        super("CancelledError"),
        this.revert = e == null ? void 0 : e.revert,
        this.silent = e == null ? void 0 : e.silent
    }
}
;
function Ju(e) {
    return e instanceof Tw
}
function Pw(e) {
    let t = !1, n = 0, r = !1, o;
    const s = FN()
      , i = p => {
        var w;
        r || (f(new Tw(p)),
        (w = e.abort) == null || w.call(e))
    }
      , a = () => {
        t = !0
    }
      , l = () => {
        t = !1
    }
      , u = () => bw.isFocused() && (e.networkMode === "always" || yl.isOnline()) && e.canRun()
      , c = () => Ew(e.networkMode) && e.canRun()
      , d = p => {
        var w;
        r || (r = !0,
        (w = e.onSuccess) == null || w.call(e, p),
        o == null || o(),
        s.resolve(p))
    }
      , f = p => {
        var w;
        r || (r = !0,
        (w = e.onError) == null || w.call(e, p),
        o == null || o(),
        s.reject(p))
    }
      , h = () => new Promise(p => {
        var w;
        o = v => {
            (r || u()) && p(v)
        }
        ,
        (w = e.onPause) == null || w.call(e)
    }
    ).then( () => {
        var p;
        o = void 0,
        r || (p = e.onContinue) == null || p.call(e)
    }
    )
      , S = () => {
        if (r)
            return;
        let p;
        const w = n === 0 ? e.initialPromise : void 0;
        try {
            p = w ?? e.fn()
        } catch (v) {
            p = Promise.reject(v)
        }
        Promise.resolve(p).then(d).catch(v => {
            var E;
            if (r)
                return;
            const g = e.retry ?? (ru ? 0 : 3)
              , x = e.retryDelay ?? VN
              , C = typeof x == "function" ? x(n, v) : x
              , b = g === !0 || typeof g == "number" && n < g || typeof g == "function" && g(n, v);
            if (t || !b) {
                f(v);
                return
            }
            n++,
            (E = e.onFail) == null || E.call(e, n, v),
            jN(C).then( () => u() ? void 0 : h()).then( () => {
                t ? f(v) : S()
            }
            )
        }
        )
    }
    ;
    return {
        promise: s,
        cancel: i,
        continue: () => (o == null || o(),
        s),
        cancelRetry: a,
        continueRetry: l,
        canStart: c,
        start: () => (c() ? S() : h().then(S),
        s)
    }
}
var BN = e => setTimeout(e, 0);
function $N() {
    let e = []
      , t = 0
      , n = a => {
        a()
    }
      , r = a => {
        a()
    }
      , o = BN;
    const s = a => {
        t ? e.push(a) : o( () => {
            n(a)
        }
        )
    }
      , i = () => {
        const a = e;
        e = [],
        a.length && o( () => {
            r( () => {
                a.forEach(l => {
                    n(l)
                }
                )
            }
            )
        }
        )
    }
    ;
    return {
        batch: a => {
            let l;
            t++;
            try {
                l = a()
            } finally {
                t--,
                t || i()
            }
            return l
        }
        ,
        batchCalls: a => (...l) => {
            s( () => {
                a(...l)
            }
            )
        }
        ,
        schedule: s,
        setNotifyFunction: a => {
            n = a
        }
        ,
        setBatchNotifyFunction: a => {
            r = a
        }
        ,
        setScheduler: a => {
            o = a
        }
    }
}
var Ze = $N(), Ir, Dv, Rw = (Dv = class {
    constructor() {
        oe(this, Ir)
    }
    destroy() {
        this.clearGcTimeout()
    }
    scheduleGc() {
        this.clearGcTimeout(),
        NN(this.gcTime) && Q(this, Ir, setTimeout( () => {
            this.optionalRemove()
        }
        , this.gcTime))
    }
    updateGcTime(e) {
        this.gcTime = Math.max(this.gcTime || 0, e ?? (ru ? 1 / 0 : 5 * 60 * 1e3))
    }
    clearGcTimeout() {
        A(this, Ir) && (clearTimeout(A(this, Ir)),
        Q(this, Ir, void 0))
    }
}
,
Ir = new WeakMap,
Dv), $o, Or, St, Lr, Ke, ki, _r, Bt, gn, Iv, zN = (Iv = class extends Rw {
    constructor(t) {
        super();
        oe(this, Bt);
        oe(this, $o);
        oe(this, Or);
        oe(this, St);
        oe(this, Lr);
        oe(this, Ke);
        oe(this, ki);
        oe(this, _r);
        Q(this, _r, !1),
        Q(this, ki, t.defaultOptions),
        this.setOptions(t.options),
        this.observers = [],
        Q(this, Lr, t.client),
        Q(this, St, A(this, Lr).getQueryCache()),
        this.queryKey = t.queryKey,
        this.queryHash = t.queryHash,
        Q(this, $o, WN(this.options)),
        this.state = t.state ?? A(this, $o),
        this.scheduleGc()
    }
    get meta() {
        return this.options.meta
    }
    get promise() {
        var t;
        return (t = A(this, Ke)) == null ? void 0 : t.promise
    }
    setOptions(t) {
        this.options = {
            ...A(this, ki),
            ...t
        },
        this.updateGcTime(this.options.gcTime)
    }
    optionalRemove() {
        !this.observers.length && this.state.fetchStatus === "idle" && A(this, St).remove(this)
    }
    setData(t, n) {
        const r = DN(this.state.data, t, this.options);
        return Ue(this, Bt, gn).call(this, {
            data: r,
            type: "success",
            dataUpdatedAt: n == null ? void 0 : n.updatedAt,
            manual: n == null ? void 0 : n.manual
        }),
        r
    }
    setState(t, n) {
        Ue(this, Bt, gn).call(this, {
            type: "setState",
            state: t,
            setStateOptions: n
        })
    }
    cancel(t) {
        var r, o;
        const n = (r = A(this, Ke)) == null ? void 0 : r.promise;
        return (o = A(this, Ke)) == null || o.cancel(t),
        n ? n.then(Vt).catch(Vt) : Promise.resolve()
    }
    destroy() {
        super.destroy(),
        this.cancel({
            silent: !0
        })
    }
    reset() {
        this.destroy(),
        this.setState(A(this, $o))
    }
    isActive() {
        return this.observers.some(t => MN(t.options.enabled, this) !== !1)
    }
    isDisabled() {
        return this.getObserversCount() > 0 ? !this.isActive() : this.options.queryFn === yh || this.state.dataUpdateCount + this.state.errorUpdateCount === 0
    }
    isStatic() {
        return this.getObserversCount() > 0 ? this.observers.some(t => Pd(t.options.staleTime, this) === "static") : !1
    }
    isStale() {
        return this.getObserversCount() > 0 ? this.observers.some(t => t.getCurrentResult().isStale) : this.state.data === void 0 || this.state.isInvalidated
    }
    isStaleByTime(t=0) {
        return this.state.data === void 0 ? !0 : t === "static" ? !1 : this.state.isInvalidated ? !0 : !AN(this.state.dataUpdatedAt, t)
    }
    onFocus() {
        var n;
        const t = this.observers.find(r => r.shouldFetchOnWindowFocus());
        t == null || t.refetch({
            cancelRefetch: !1
        }),
        (n = A(this, Ke)) == null || n.continue()
    }
    onOnline() {
        var n;
        const t = this.observers.find(r => r.shouldFetchOnReconnect());
        t == null || t.refetch({
            cancelRefetch: !1
        }),
        (n = A(this, Ke)) == null || n.continue()
    }
    addObserver(t) {
        this.observers.includes(t) || (this.observers.push(t),
        this.clearGcTimeout(),
        A(this, St).notify({
            type: "observerAdded",
            query: this,
            observer: t
        }))
    }
    removeObserver(t) {
        this.observers.includes(t) && (this.observers = this.observers.filter(n => n !== t),
        this.observers.length || (A(this, Ke) && (A(this, _r) ? A(this, Ke).cancel({
            revert: !0
        }) : A(this, Ke).cancelRetry()),
        this.scheduleGc()),
        A(this, St).notify({
            type: "observerRemoved",
            query: this,
            observer: t
        }))
    }
    getObserversCount() {
        return this.observers.length
    }
    invalidate() {
        this.state.isInvalidated || Ue(this, Bt, gn).call(this, {
            type: "invalidate"
        })
    }
    fetch(t, n) {
        var u, c, d;
        if (this.state.fetchStatus !== "idle") {
            if (this.state.data !== void 0 && (n != null && n.cancelRefetch))
                this.cancel({
                    silent: !0
                });
            else if (A(this, Ke))
                return A(this, Ke).continueRetry(),
                A(this, Ke).promise
        }
        if (t && this.setOptions(t),
        !this.options.queryFn) {
            const f = this.observers.find(h => h.options.queryFn);
            f && this.setOptions(f.options)
        }
        const r = new AbortController
          , o = f => {
            Object.defineProperty(f, "signal", {
                enumerable: !0,
                get: () => (Q(this, _r, !0),
                r.signal)
            })
        }
          , s = () => {
            const f = Cw(this.options, n)
              , S = ( () => {
                const p = {
                    client: A(this, Lr),
                    queryKey: this.queryKey,
                    meta: this.meta
                };
                return o(p),
                p
            }
            )();
            return Q(this, _r, !1),
            this.options.persister ? this.options.persister(f, S, this) : f(S)
        }
          , a = ( () => {
            const f = {
                fetchOptions: n,
                options: this.options,
                queryKey: this.queryKey,
                client: A(this, Lr),
                state: this.state,
                fetchFn: s
            };
            return o(f),
            f
        }
        )();
        (u = this.options.behavior) == null || u.onFetch(a, this),
        Q(this, Or, this.state),
        (this.state.fetchStatus === "idle" || this.state.fetchMeta !== ((c = a.fetchOptions) == null ? void 0 : c.meta)) && Ue(this, Bt, gn).call(this, {
            type: "fetch",
            meta: (d = a.fetchOptions) == null ? void 0 : d.meta
        });
        const l = f => {
            var h, S, p, w;
            Ju(f) && f.silent || Ue(this, Bt, gn).call(this, {
                type: "error",
                error: f
            }),
            Ju(f) || ((S = (h = A(this, St).config).onError) == null || S.call(h, f, this),
            (w = (p = A(this, St).config).onSettled) == null || w.call(p, this.state.data, f, this)),
            this.scheduleGc()
        }
        ;
        return Q(this, Ke, Pw({
            initialPromise: n == null ? void 0 : n.initialPromise,
            fn: a.fetchFn,
            abort: r.abort.bind(r),
            onSuccess: f => {
                var h, S, p, w;
                if (f === void 0) {
                    l(new Error(`${this.queryHash} data is undefined`));
                    return
                }
                try {
                    this.setData(f)
                } catch (v) {
                    l(v);
                    return
                }
                (S = (h = A(this, St).config).onSuccess) == null || S.call(h, f, this),
                (w = (p = A(this, St).config).onSettled) == null || w.call(p, f, this.state.error, this),
                this.scheduleGc()
            }
            ,
            onError: l,
            onFail: (f, h) => {
                Ue(this, Bt, gn).call(this, {
                    type: "failed",
                    failureCount: f,
                    error: h
                })
            }
            ,
            onPause: () => {
                Ue(this, Bt, gn).call(this, {
                    type: "pause"
                })
            }
            ,
            onContinue: () => {
                Ue(this, Bt, gn).call(this, {
                    type: "continue"
                })
            }
            ,
            retry: a.options.retry,
            retryDelay: a.options.retryDelay,
            networkMode: a.options.networkMode,
            canRun: () => !0
        })),
        A(this, Ke).start()
    }
}
,
$o = new WeakMap,
Or = new WeakMap,
St = new WeakMap,
Lr = new WeakMap,
Ke = new WeakMap,
ki = new WeakMap,
_r = new WeakMap,
Bt = new WeakSet,
gn = function(t) {
    const n = r => {
        switch (t.type) {
        case "failed":
            return {
                ...r,
                fetchFailureCount: t.failureCount,
                fetchFailureReason: t.error
            };
        case "pause":
            return {
                ...r,
                fetchStatus: "paused"
            };
        case "continue":
            return {
                ...r,
                fetchStatus: "fetching"
            };
        case "fetch":
            return {
                ...r,
                ...UN(r.data, this.options),
                fetchMeta: t.meta ?? null
            };
        case "success":
            return Q(this, Or, void 0),
            {
                ...r,
                data: t.data,
                dataUpdateCount: r.dataUpdateCount + 1,
                dataUpdatedAt: t.dataUpdatedAt ?? Date.now(),
                error: null,
                isInvalidated: !1,
                status: "success",
                ...!t.manual && {
                    fetchStatus: "idle",
                    fetchFailureCount: 0,
                    fetchFailureReason: null
                }
            };
        case "error":
            const o = t.error;
            return Ju(o) && o.revert && A(this, Or) ? {
                ...A(this, Or),
                fetchStatus: "idle"
            } : {
                ...r,
                error: o,
                errorUpdateCount: r.errorUpdateCount + 1,
                errorUpdatedAt: Date.now(),
                fetchFailureCount: r.fetchFailureCount + 1,
                fetchFailureReason: o,
                fetchStatus: "idle",
                status: "error"
            };
        case "invalidate":
            return {
                ...r,
                isInvalidated: !0
            };
        case "setState":
            return {
                ...r,
                ...t.state
            }
        }
    }
    ;
    this.state = n(this.state),
    Ze.batch( () => {
        this.observers.forEach(r => {
            r.onQueryUpdate()
        }
        ),
        A(this, St).notify({
            query: this,
            type: "updated",
            action: t
        })
    }
    )
}
,
Iv);
function UN(e, t) {
    return {
        fetchFailureCount: 0,
        fetchFailureReason: null,
        fetchStatus: Ew(t.networkMode) ? "fetching" : "paused",
        ...e === void 0 && {
            error: null,
            status: "pending"
        }
    }
}
function WN(e) {
    const t = typeof e.initialData == "function" ? e.initialData() : e.initialData
      , n = t !== void 0
      , r = n ? typeof e.initialDataUpdatedAt == "function" ? e.initialDataUpdatedAt() : e.initialDataUpdatedAt : 0;
    return {
        data: t,
        dataUpdateCount: 0,
        dataUpdatedAt: n ? r ?? Date.now() : 0,
        error: null,
        errorUpdateCount: 0,
        errorUpdatedAt: 0,
        fetchFailureCount: 0,
        fetchFailureReason: null,
        fetchMeta: null,
        isInvalidated: !1,
        status: n ? "success" : "pending",
        fetchStatus: "idle"
    }
}
var en, Ov, HN = (Ov = class extends nu {
    constructor(t={}) {
        super();
        oe(this, en);
        this.config = t,
        Q(this, en, new Map)
    }
    build(t, n, r) {
        const o = n.queryKey
          , s = n.queryHash ?? vh(o, n);
        let i = this.get(s);
        return i || (i = new zN({
            client: t,
            queryKey: o,
            queryHash: s,
            options: t.defaultQueryOptions(n),
            state: r,
            defaultOptions: t.getQueryDefaults(o)
        }),
        this.add(i)),
        i
    }
    add(t) {
        A(this, en).has(t.queryHash) || (A(this, en).set(t.queryHash, t),
        this.notify({
            type: "added",
            query: t
        }))
    }
    remove(t) {
        const n = A(this, en).get(t.queryHash);
        n && (t.destroy(),
        n === t && A(this, en).delete(t.queryHash),
        this.notify({
            type: "removed",
            query: t
        }))
    }
    clear() {
        Ze.batch( () => {
            this.getAll().forEach(t => {
                this.remove(t)
            }
            )
        }
        )
    }
    get(t) {
        return A(this, en).get(t)
    }
    getAll() {
        return [...A(this, en).values()]
    }
    find(t) {
        const n = {
            exact: !0,
            ...t
        };
        return this.getAll().find(r => Um(n, r))
    }
    findAll(t={}) {
        const n = this.getAll();
        return Object.keys(t).length > 0 ? n.filter(r => Um(t, r)) : n
    }
    notify(t) {
        Ze.batch( () => {
            this.listeners.forEach(n => {
                n(t)
            }
            )
        }
        )
    }
    onFocus() {
        Ze.batch( () => {
            this.getAll().forEach(t => {
                t.onFocus()
            }
            )
        }
        )
    }
    onOnline() {
        Ze.batch( () => {
            this.getAll().forEach(t => {
                t.onOnline()
            }
            )
        }
        )
    }
}
,
en = new WeakMap,
Ov), tn, Xe, Fr, nn, Fn, Lv, KN = (Lv = class extends Rw {
    constructor(t) {
        super();
        oe(this, nn);
        oe(this, tn);
        oe(this, Xe);
        oe(this, Fr);
        this.mutationId = t.mutationId,
        Q(this, Xe, t.mutationCache),
        Q(this, tn, []),
        this.state = t.state || GN(),
        this.setOptions(t.options),
        this.scheduleGc()
    }
    setOptions(t) {
        this.options = t,
        this.updateGcTime(this.options.gcTime)
    }
    get meta() {
        return this.options.meta
    }
    addObserver(t) {
        A(this, tn).includes(t) || (A(this, tn).push(t),
        this.clearGcTimeout(),
        A(this, Xe).notify({
            type: "observerAdded",
            mutation: this,
            observer: t
        }))
    }
    removeObserver(t) {
        Q(this, tn, A(this, tn).filter(n => n !== t)),
        this.scheduleGc(),
        A(this, Xe).notify({
            type: "observerRemoved",
            mutation: this,
            observer: t
        })
    }
    optionalRemove() {
        A(this, tn).length || (this.state.status === "pending" ? this.scheduleGc() : A(this, Xe).remove(this))
    }
    continue() {
        var t;
        return ((t = A(this, Fr)) == null ? void 0 : t.continue()) ?? this.execute(this.state.variables)
    }
    async execute(t) {
        var s, i, a, l, u, c, d, f, h, S, p, w, v, g, x, C, b, E, T, P;
        const n = () => {
            Ue(this, nn, Fn).call(this, {
                type: "continue"
            })
        }
        ;
        Q(this, Fr, Pw({
            fn: () => this.options.mutationFn ? this.options.mutationFn(t) : Promise.reject(new Error("No mutationFn found")),
            onFail: (N, M) => {
                Ue(this, nn, Fn).call(this, {
                    type: "failed",
                    failureCount: N,
                    error: M
                })
            }
            ,
            onPause: () => {
                Ue(this, nn, Fn).call(this, {
                    type: "pause"
                })
            }
            ,
            onContinue: n,
            retry: this.options.retry ?? 0,
            retryDelay: this.options.retryDelay,
            networkMode: this.options.networkMode,
            canRun: () => A(this, Xe).canRun(this)
        }));
        const r = this.state.status === "pending"
          , o = !A(this, Fr).canStart();
        try {
            if (r)
                n();
            else {
                Ue(this, nn, Fn).call(this, {
                    type: "pending",
                    variables: t,
                    isPaused: o
                }),
                await ((i = (s = A(this, Xe).config).onMutate) == null ? void 0 : i.call(s, t, this));
                const M = await ((l = (a = this.options).onMutate) == null ? void 0 : l.call(a, t));
                M !== this.state.context && Ue(this, nn, Fn).call(this, {
                    type: "pending",
                    context: M,
                    variables: t,
                    isPaused: o
                })
            }
            const N = await A(this, Fr).start();
            return await ((c = (u = A(this, Xe).config).onSuccess) == null ? void 0 : c.call(u, N, t, this.state.context, this)),
            await ((f = (d = this.options).onSuccess) == null ? void 0 : f.call(d, N, t, this.state.context)),
            await ((S = (h = A(this, Xe).config).onSettled) == null ? void 0 : S.call(h, N, null, this.state.variables, this.state.context, this)),
            await ((w = (p = this.options).onSettled) == null ? void 0 : w.call(p, N, null, t, this.state.context)),
            Ue(this, nn, Fn).call(this, {
                type: "success",
                data: N
            }),
            N
        } catch (N) {
            try {
                throw await ((g = (v = A(this, Xe).config).onError) == null ? void 0 : g.call(v, N, t, this.state.context, this)),
                await ((C = (x = this.options).onError) == null ? void 0 : C.call(x, N, t, this.state.context)),
                await ((E = (b = A(this, Xe).config).onSettled) == null ? void 0 : E.call(b, void 0, N, this.state.variables, this.state.context, this)),
                await ((P = (T = this.options).onSettled) == null ? void 0 : P.call(T, void 0, N, t, this.state.context)),
                N
            } finally {
                Ue(this, nn, Fn).call(this, {
                    type: "error",
                    error: N
                })
            }
        } finally {
            A(this, Xe).runNext(this)
        }
    }
}
,
tn = new WeakMap,
Xe = new WeakMap,
Fr = new WeakMap,
nn = new WeakSet,
Fn = function(t) {
    const n = r => {
        switch (t.type) {
        case "failed":
            return {
                ...r,
                failureCount: t.failureCount,
                failureReason: t.error
            };
        case "pause":
            return {
                ...r,
                isPaused: !0
            };
        case "continue":
            return {
                ...r,
                isPaused: !1
            };
        case "pending":
            return {
                ...r,
                context: t.context,
                data: void 0,
                failureCount: 0,
                failureReason: null,
                error: null,
                isPaused: t.isPaused,
                status: "pending",
                variables: t.variables,
                submittedAt: Date.now()
            };
        case "success":
            return {
                ...r,
                data: t.data,
                failureCount: 0,
                failureReason: null,
                error: null,
                status: "success",
                isPaused: !1
            };
        case "error":
            return {
                ...r,
                data: void 0,
                error: t.error,
                failureCount: r.failureCount + 1,
                failureReason: t.error,
                isPaused: !1,
                status: "error"
            }
        }
    }
    ;
    this.state = n(this.state),
    Ze.batch( () => {
        A(this, tn).forEach(r => {
            r.onMutationUpdate(t)
        }
        ),
        A(this, Xe).notify({
            mutation: this,
            type: "updated",
            action: t
        })
    }
    )
}
,
Lv);
function GN() {
    return {
        context: void 0,
        data: void 0,
        error: null,
        failureCount: 0,
        failureReason: null,
        isPaused: !1,
        status: "idle",
        variables: void 0,
        submittedAt: 0
    }
}
var xn, $t, Ni, _v, YN = (_v = class extends nu {
    constructor(t={}) {
        super();
        oe(this, xn);
        oe(this, $t);
        oe(this, Ni);
        this.config = t,
        Q(this, xn, new Set),
        Q(this, $t, new Map),
        Q(this, Ni, 0)
    }
    build(t, n, r) {
        const o = new KN({
            mutationCache: this,
            mutationId: ++Wi(this, Ni)._,
            options: t.defaultMutationOptions(n),
            state: r
        });
        return this.add(o),
        o
    }
    add(t) {
        A(this, xn).add(t);
        const n = fa(t);
        if (typeof n == "string") {
            const r = A(this, $t).get(n);
            r ? r.push(t) : A(this, $t).set(n, [t])
        }
        this.notify({
            type: "added",
            mutation: t
        })
    }
    remove(t) {
        if (A(this, xn).delete(t)) {
            const n = fa(t);
            if (typeof n == "string") {
                const r = A(this, $t).get(n);
                if (r)
                    if (r.length > 1) {
                        const o = r.indexOf(t);
                        o !== -1 && r.splice(o, 1)
                    } else
                        r[0] === t && A(this, $t).delete(n)
            }
        }
        this.notify({
            type: "removed",
            mutation: t
        })
    }
    canRun(t) {
        const n = fa(t);
        if (typeof n == "string") {
            const r = A(this, $t).get(n)
              , o = r == null ? void 0 : r.find(s => s.state.status === "pending");
            return !o || o === t
        } else
            return !0
    }
    runNext(t) {
        var r;
        const n = fa(t);
        if (typeof n == "string") {
            const o = (r = A(this, $t).get(n)) == null ? void 0 : r.find(s => s !== t && s.state.isPaused);
            return (o == null ? void 0 : o.continue()) ?? Promise.resolve()
        } else
            return Promise.resolve()
    }
    clear() {
        Ze.batch( () => {
            A(this, xn).forEach(t => {
                this.notify({
                    type: "removed",
                    mutation: t
                })
            }
            ),
            A(this, xn).clear(),
            A(this, $t).clear()
        }
        )
    }
    getAll() {
        return Array.from(A(this, xn))
    }
    find(t) {
        const n = {
            exact: !0,
            ...t
        };
        return this.getAll().find(r => Wm(n, r))
    }
    findAll(t={}) {
        return this.getAll().filter(n => Wm(t, n))
    }
    notify(t) {
        Ze.batch( () => {
            this.listeners.forEach(n => {
                n(t)
            }
            )
        }
        )
    }
    resumePausedMutations() {
        const t = this.getAll().filter(n => n.state.isPaused);
        return Ze.batch( () => Promise.all(t.map(n => n.continue().catch(Vt))))
    }
}
,
xn = new WeakMap,
$t = new WeakMap,
Ni = new WeakMap,
_v);
function fa(e) {
    var t;
    return (t = e.options.scope) == null ? void 0 : t.id
}
function Gm(e) {
    return {
        onFetch: (t, n) => {
            var c, d, f, h, S;
            const r = t.options
              , o = (f = (d = (c = t.fetchOptions) == null ? void 0 : c.meta) == null ? void 0 : d.fetchMore) == null ? void 0 : f.direction
              , s = ((h = t.state.data) == null ? void 0 : h.pages) || []
              , i = ((S = t.state.data) == null ? void 0 : S.pageParams) || [];
            let a = {
                pages: [],
                pageParams: []
            }
              , l = 0;
            const u = async () => {
                let p = !1;
                const w = x => {
                    Object.defineProperty(x, "signal", {
                        enumerable: !0,
                        get: () => (t.signal.aborted ? p = !0 : t.signal.addEventListener("abort", () => {
                            p = !0
                        }
                        ),
                        t.signal)
                    })
                }
                  , v = Cw(t.options, t.fetchOptions)
                  , g = async (x, C, b) => {
                    if (p)
                        return Promise.reject();
                    if (C == null && x.pages.length)
                        return Promise.resolve(x);
                    const T = ( () => {
                        const V = {
                            client: t.client,
                            queryKey: t.queryKey,
                            pageParam: C,
                            direction: b ? "backward" : "forward",
                            meta: t.options.meta
                        };
                        return w(V),
                        V
                    }
                    )()
                      , P = await v(T)
                      , {maxPages: N} = t.options
                      , M = b ? ON : IN;
                    return {
                        pages: M(x.pages, P, N),
                        pageParams: M(x.pageParams, C, N)
                    }
                }
                ;
                if (o && s.length) {
                    const x = o === "backward"
                      , C = x ? QN : Ym
                      , b = {
                        pages: s,
                        pageParams: i
                    }
                      , E = C(r, b);
                    a = await g(b, E, x)
                } else {
                    const x = e ?? s.length;
                    do {
                        const C = l === 0 ? i[0] ?? r.initialPageParam : Ym(r, a);
                        if (l > 0 && C == null)
                            break;
                        a = await g(a, C),
                        l++
                    } while (l < x)
                }
                return a
            }
            ;
            t.options.persister ? t.fetchFn = () => {
                var p, w;
                return (w = (p = t.options).persister) == null ? void 0 : w.call(p, u, {
                    client: t.client,
                    queryKey: t.queryKey,
                    meta: t.options.meta,
                    signal: t.signal
                }, n)
            }
            : t.fetchFn = u
        }
    }
}
function Ym(e, {pages: t, pageParams: n}) {
    const r = t.length - 1;
    return t.length > 0 ? e.getNextPageParam(t[r], t, n[r], n) : void 0
}
function QN(e, {pages: t, pageParams: n}) {
    var r;
    return t.length > 0 ? (r = e.getPreviousPageParam) == null ? void 0 : r.call(e, t[0], t, n[0], n) : void 0
}
var Te, Gn, Yn, zo, Uo, Qn, Wo, Ho, Fv, XN = (Fv = class {
    constructor(e={}) {
        oe(this, Te);
        oe(this, Gn);
        oe(this, Yn);
        oe(this, zo);
        oe(this, Uo);
        oe(this, Qn);
        oe(this, Wo);
        oe(this, Ho);
        Q(this, Te, e.queryCache || new HN),
        Q(this, Gn, e.mutationCache || new YN),
        Q(this, Yn, e.defaultOptions || {}),
        Q(this, zo, new Map),
        Q(this, Uo, new Map),
        Q(this, Qn, 0)
    }
    mount() {
        Wi(this, Qn)._++,
        A(this, Qn) === 1 && (Q(this, Wo, bw.subscribe(async e => {
            e && (await this.resumePausedMutations(),
            A(this, Te).onFocus())
        }
        )),
        Q(this, Ho, yl.subscribe(async e => {
            e && (await this.resumePausedMutations(),
            A(this, Te).onOnline())
        }
        )))
    }
    unmount() {
        var e, t;
        Wi(this, Qn)._--,
        A(this, Qn) === 0 && ((e = A(this, Wo)) == null || e.call(this),
        Q(this, Wo, void 0),
        (t = A(this, Ho)) == null || t.call(this),
        Q(this, Ho, void 0))
    }
    isFetching(e) {
        return A(this, Te).findAll({
            ...e,
            fetchStatus: "fetching"
        }).length
    }
    isMutating(e) {
        return A(this, Gn).findAll({
            ...e,
            status: "pending"
        }).length
    }
    getQueryData(e) {
        var n;
        const t = this.defaultQueryOptions({
            queryKey: e
        });
        return (n = A(this, Te).get(t.queryHash)) == null ? void 0 : n.state.data
    }
    ensureQueryData(e) {
        const t = this.defaultQueryOptions(e)
          , n = A(this, Te).build(this, t)
          , r = n.state.data;
        return r === void 0 ? this.fetchQuery(e) : (e.revalidateIfStale && n.isStaleByTime(Pd(t.staleTime, n)) && this.prefetchQuery(t),
        Promise.resolve(r))
    }
    getQueriesData(e) {
        return A(this, Te).findAll(e).map( ({queryKey: t, state: n}) => {
            const r = n.data;
            return [t, r]
        }
        )
    }
    setQueryData(e, t, n) {
        const r = this.defaultQueryOptions({
            queryKey: e
        })
          , o = A(this, Te).get(r.queryHash)
          , s = o == null ? void 0 : o.state.data
          , i = kN(t, s);
        if (i !== void 0)
            return A(this, Te).build(this, r).setData(i, {
                ...n,
                manual: !0
            })
    }
    setQueriesData(e, t, n) {
        return Ze.batch( () => A(this, Te).findAll(e).map( ({queryKey: r}) => [r, this.setQueryData(r, t, n)]))
    }
    getQueryState(e) {
        var n;
        const t = this.defaultQueryOptions({
            queryKey: e
        });
        return (n = A(this, Te).get(t.queryHash)) == null ? void 0 : n.state
    }
    removeQueries(e) {
        const t = A(this, Te);
        Ze.batch( () => {
            t.findAll(e).forEach(n => {
                t.remove(n)
            }
            )
        }
        )
    }
    resetQueries(e, t) {
        const n = A(this, Te);
        return Ze.batch( () => (n.findAll(e).forEach(r => {
            r.reset()
        }
        ),
        this.refetchQueries({
            type: "active",
            ...e
        }, t)))
    }
    cancelQueries(e, t={}) {
        const n = {
            revert: !0,
            ...t
        }
          , r = Ze.batch( () => A(this, Te).findAll(e).map(o => o.cancel(n)));
        return Promise.all(r).then(Vt).catch(Vt)
    }
    invalidateQueries(e, t={}) {
        return Ze.batch( () => (A(this, Te).findAll(e).forEach(n => {
            n.invalidate()
        }
        ),
        (e == null ? void 0 : e.refetchType) === "none" ? Promise.resolve() : this.refetchQueries({
            ...e,
            type: (e == null ? void 0 : e.refetchType) ?? (e == null ? void 0 : e.type) ?? "active"
        }, t)))
    }
    refetchQueries(e, t={}) {
        const n = {
            ...t,
            cancelRefetch: t.cancelRefetch ?? !0
        }
          , r = Ze.batch( () => A(this, Te).findAll(e).filter(o => !o.isDisabled() && !o.isStatic()).map(o => {
            let s = o.fetch(void 0, n);
            return n.throwOnError || (s = s.catch(Vt)),
            o.state.fetchStatus === "paused" ? Promise.resolve() : s
        }
        ));
        return Promise.all(r).then(Vt)
    }
    fetchQuery(e) {
        const t = this.defaultQueryOptions(e);
        t.retry === void 0 && (t.retry = !1);
        const n = A(this, Te).build(this, t);
        return n.isStaleByTime(Pd(t.staleTime, n)) ? n.fetch(t) : Promise.resolve(n.state.data)
    }
    prefetchQuery(e) {
        return this.fetchQuery(e).then(Vt).catch(Vt)
    }
    fetchInfiniteQuery(e) {
        return e.behavior = Gm(e.pages),
        this.fetchQuery(e)
    }
    prefetchInfiniteQuery(e) {
        return this.fetchInfiniteQuery(e).then(Vt).catch(Vt)
    }
    ensureInfiniteQueryData(e) {
        return e.behavior = Gm(e.pages),
        this.ensureQueryData(e)
    }
    resumePausedMutations() {
        return yl.isOnline() ? A(this, Gn).resumePausedMutations() : Promise.resolve()
    }
    getQueryCache() {
        return A(this, Te)
    }
    getMutationCache() {
        return A(this, Gn)
    }
    getDefaultOptions() {
        return A(this, Yn)
    }
    setDefaultOptions(e) {
        Q(this, Yn, e)
    }
    setQueryDefaults(e, t) {
        A(this, zo).set(xi(e), {
            queryKey: e,
            defaultOptions: t
        })
    }
    getQueryDefaults(e) {
        const t = [...A(this, zo).values()]
          , n = {};
        return t.forEach(r => {
            wi(e, r.queryKey) && Object.assign(n, r.defaultOptions)
        }
        ),
        n
    }
    setMutationDefaults(e, t) {
        A(this, Uo).set(xi(e), {
            mutationKey: e,
            defaultOptions: t
        })
    }
    getMutationDefaults(e) {
        const t = [...A(this, Uo).values()]
          , n = {};
        return t.forEach(r => {
            wi(e, r.mutationKey) && Object.assign(n, r.defaultOptions)
        }
        ),
        n
    }
    defaultQueryOptions(e) {
        if (e._defaulted)
            return e;
        const t = {
            ...A(this, Yn).queries,
            ...this.getQueryDefaults(e.queryKey),
            ...e,
            _defaulted: !0
        };
        return t.queryHash || (t.queryHash = vh(t.queryKey, t)),
        t.refetchOnReconnect === void 0 && (t.refetchOnReconnect = t.networkMode !== "always"),
        t.throwOnError === void 0 && (t.throwOnError = !!t.suspense),
        !t.networkMode && t.persister && (t.networkMode = "offlineFirst"),
        t.queryFn === yh && (t.enabled = !1),
        t
    }
    defaultMutationOptions(e) {
        return e != null && e._defaulted ? e : {
            ...A(this, Yn).mutations,
            ...(e == null ? void 0 : e.mutationKey) && this.getMutationDefaults(e.mutationKey),
            ...e,
            _defaulted: !0
        }
    }
    clear() {
        A(this, Te).clear(),
        A(this, Gn).clear()
    }
}
,
Te = new WeakMap,
Gn = new WeakMap,
Yn = new WeakMap,
zo = new WeakMap,
Uo = new WeakMap,
Qn = new WeakMap,
Wo = new WeakMap,
Ho = new WeakMap,
Fv), qN = m.createContext(void 0), ZN = ({client: e, children: t}) => (m.useEffect( () => (e.mount(),
() => {
    e.unmount()
}
), [e]),
y.jsx(qN.Provider, {
    value: e,
    children: t
}));
/**
 * @remix-run/router v1.23.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */
function Si() {
    return Si = Object.assign ? Object.assign.bind() : function(e) {
        for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t];
            for (var r in n)
                Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
        }
        return e
    }
    ,
    Si.apply(this, arguments)
}
var Zn;
(function(e) {
    e.Pop = "POP",
    e.Push = "PUSH",
    e.Replace = "REPLACE"
}
)(Zn || (Zn = {}));
const Qm = "popstate";
function JN(e) {
    e === void 0 && (e = {});
    function t(r, o) {
        let {pathname: s, search: i, hash: a} = r.location;
        return kd("", {
            pathname: s,
            search: i,
            hash: a
        }, o.state && o.state.usr || null, o.state && o.state.key || "default")
    }
    function n(r, o) {
        return typeof o == "string" ? o : Nw(o)
    }
    return tA(t, n, null, e)
}
function Ie(e, t) {
    if (e === !1 || e === null || typeof e > "u")
        throw new Error(t)
}
function kw(e, t) {
    if (!e) {
        typeof console < "u" && console.warn(t);
        try {
            throw new Error(t)
        } catch {}
    }
}
function eA() {
    return Math.random().toString(36).substr(2, 8)
}
function Xm(e, t) {
    return {
        usr: e.state,
        key: e.key,
        idx: t
    }
}
function kd(e, t, n, r) {
    return n === void 0 && (n = null),
    Si({
        pathname: typeof e == "string" ? e : e.pathname,
        search: "",
        hash: ""
    }, typeof t == "string" ? fs(t) : t, {
        state: n,
        key: t && t.key || r || eA()
    })
}
function Nw(e) {
    let {pathname: t="/", search: n="", hash: r=""} = e;
    return n && n !== "?" && (t += n.charAt(0) === "?" ? n : "?" + n),
    r && r !== "#" && (t += r.charAt(0) === "#" ? r : "#" + r),
    t
}
function fs(e) {
    let t = {};
    if (e) {
        let n = e.indexOf("#");
        n >= 0 && (t.hash = e.substr(n),
        e = e.substr(0, n));
        let r = e.indexOf("?");
        r >= 0 && (t.search = e.substr(r),
        e = e.substr(0, r)),
        e && (t.pathname = e)
    }
    return t
}
function tA(e, t, n, r) {
    r === void 0 && (r = {});
    let {window: o=document.defaultView, v5Compat: s=!1} = r
      , i = o.history
      , a = Zn.Pop
      , l = null
      , u = c();
    u == null && (u = 0,
    i.replaceState(Si({}, i.state, {
        idx: u
    }), ""));
    function c() {
        return (i.state || {
            idx: null
        }).idx
    }
    function d() {
        a = Zn.Pop;
        let w = c()
          , v = w == null ? null : w - u;
        u = w,
        l && l({
            action: a,
            location: p.location,
            delta: v
        })
    }
    function f(w, v) {
        a = Zn.Push;
        let g = kd(p.location, w, v);
        u = c() + 1;
        let x = Xm(g, u)
          , C = p.createHref(g);
        try {
            i.pushState(x, "", C)
        } catch (b) {
            if (b instanceof DOMException && b.name === "DataCloneError")
                throw b;
            o.location.assign(C)
        }
        s && l && l({
            action: a,
            location: p.location,
            delta: 1
        })
    }
    function h(w, v) {
        a = Zn.Replace;
        let g = kd(p.location, w, v);
        u = c();
        let x = Xm(g, u)
          , C = p.createHref(g);
        i.replaceState(x, "", C),
        s && l && l({
            action: a,
            location: p.location,
            delta: 0
        })
    }
    function S(w) {
        let v = o.location.origin !== "null" ? o.location.origin : o.location.href
          , g = typeof w == "string" ? w : Nw(w);
        return g = g.replace(/ $/, "%20"),
        Ie(v, "No window.location.(origin|href) available to create URL for href: " + g),
        new URL(g,v)
    }
    let p = {
        get action() {
            return a
        },
        get location() {
            return e(o, i)
        },
        listen(w) {
            if (l)
                throw new Error("A history only accepts one active listener");
            return o.addEventListener(Qm, d),
            l = w,
            () => {
                o.removeEventListener(Qm, d),
                l = null
            }
        },
        createHref(w) {
            return t(o, w)
        },
        createURL: S,
        encodeLocation(w) {
            let v = S(w);
            return {
                pathname: v.pathname,
                search: v.search,
                hash: v.hash
            }
        },
        push: f,
        replace: h,
        go(w) {
            return i.go(w)
        }
    };
    return p
}
var qm;
(function(e) {
    e.data = "data",
    e.deferred = "deferred",
    e.redirect = "redirect",
    e.error = "error"
}
)(qm || (qm = {}));
function nA(e, t, n) {
    return n === void 0 && (n = "/"),
    rA(e, t, n, !1)
}
function rA(e, t, n, r) {
    let o = typeof t == "string" ? fs(t) : t
      , s = jw(o.pathname || "/", n);
    if (s == null)
        return null;
    let i = Aw(e);
    oA(i);
    let a = null;
    for (let l = 0; a == null && l < i.length; ++l) {
        let u = mA(s);
        a = hA(i[l], u, r)
    }
    return a
}
function Aw(e, t, n, r) {
    t === void 0 && (t = []),
    n === void 0 && (n = []),
    r === void 0 && (r = "");
    let o = (s, i, a) => {
        let l = {
            relativePath: a === void 0 ? s.path || "" : a,
            caseSensitive: s.caseSensitive === !0,
            childrenIndex: i,
            route: s
        };
        l.relativePath.startsWith("/") && (Ie(l.relativePath.startsWith(r), 'Absolute route path "' + l.relativePath + '" nested under path ' + ('"' + r + '" is not valid. An absolute child route path ') + "must start with the combined path of all its parent routes."),
        l.relativePath = l.relativePath.slice(r.length));
        let u = $r([r, l.relativePath])
          , c = n.concat(l);
        s.children && s.children.length > 0 && (Ie(s.index !== !0, "Index routes must not have child routes. Please remove " + ('all child routes from route path "' + u + '".')),
        Aw(s.children, t, c, u)),
        !(s.path == null && !s.index) && t.push({
            path: u,
            score: dA(u, s.index),
            routesMeta: c
        })
    }
    ;
    return e.forEach( (s, i) => {
        var a;
        if (s.path === "" || !((a = s.path) != null && a.includes("?")))
            o(s, i);
        else
            for (let l of Mw(s.path))
                o(s, i, l)
    }
    ),
    t
}
function Mw(e) {
    let t = e.split("/");
    if (t.length === 0)
        return [];
    let[n,...r] = t
      , o = n.endsWith("?")
      , s = n.replace(/\?$/, "");
    if (r.length === 0)
        return o ? [s, ""] : [s];
    let i = Mw(r.join("/"))
      , a = [];
    return a.push(...i.map(l => l === "" ? s : [s, l].join("/"))),
    o && a.push(...i),
    a.map(l => e.startsWith("/") && l === "" ? "/" : l)
}
function oA(e) {
    e.sort( (t, n) => t.score !== n.score ? n.score - t.score : fA(t.routesMeta.map(r => r.childrenIndex), n.routesMeta.map(r => r.childrenIndex)))
}
const sA = /^:[\w-]+$/
  , iA = 3
  , aA = 2
  , lA = 1
  , uA = 10
  , cA = -2
  , Zm = e => e === "*";
function dA(e, t) {
    let n = e.split("/")
      , r = n.length;
    return n.some(Zm) && (r += cA),
    t && (r += aA),
    n.filter(o => !Zm(o)).reduce( (o, s) => o + (sA.test(s) ? iA : s === "" ? lA : uA), r)
}
function fA(e, t) {
    return e.length === t.length && e.slice(0, -1).every( (r, o) => r === t[o]) ? e[e.length - 1] - t[t.length - 1] : 0
}
function hA(e, t, n) {
    let {routesMeta: r} = e
      , o = {}
      , s = "/"
      , i = [];
    for (let a = 0; a < r.length; ++a) {
        let l = r[a]
          , u = a === r.length - 1
          , c = s === "/" ? t : t.slice(s.length) || "/"
          , d = Jm({
            path: l.relativePath,
            caseSensitive: l.caseSensitive,
            end: u
        }, c)
          , f = l.route;
        if (!d && u && n && !r[r.length - 1].route.index && (d = Jm({
            path: l.relativePath,
            caseSensitive: l.caseSensitive,
            end: !1
        }, c)),
        !d)
            return null;
        Object.assign(o, d.params),
        i.push({
            params: o,
            pathname: $r([s, d.pathname]),
            pathnameBase: SA($r([s, d.pathnameBase])),
            route: f
        }),
        d.pathnameBase !== "/" && (s = $r([s, d.pathnameBase]))
    }
    return i
}
function Jm(e, t) {
    typeof e == "string" && (e = {
        path: e,
        caseSensitive: !1,
        end: !0
    });
    let[n,r] = pA(e.path, e.caseSensitive, e.end)
      , o = t.match(n);
    if (!o)
        return null;
    let s = o[0]
      , i = s.replace(/(.)\/+$/, "$1")
      , a = o.slice(1);
    return {
        params: r.reduce( (u, c, d) => {
            let {paramName: f, isOptional: h} = c;
            if (f === "*") {
                let p = a[d] || "";
                i = s.slice(0, s.length - p.length).replace(/(.)\/+$/, "$1")
            }
            const S = a[d];
            return h && !S ? u[f] = void 0 : u[f] = (S || "").replace(/%2F/g, "/"),
            u
        }
        , {}),
        pathname: s,
        pathnameBase: i,
        pattern: e
    }
}
function pA(e, t, n) {
    t === void 0 && (t = !1),
    n === void 0 && (n = !0),
    kw(e === "*" || !e.endsWith("*") || e.endsWith("/*"), 'Route path "' + e + '" will be treated as if it were ' + ('"' + e.replace(/\*$/, "/*") + '" because the `*` character must ') + "always follow a `/` in the pattern. To get rid of this warning, " + ('please change the route path to "' + e.replace(/\*$/, "/*") + '".'));
    let r = []
      , o = "^" + e.replace(/\/*\*?$/, "").replace(/^\/*/, "/").replace(/[\\.*+^${}|()[\]]/g, "\\$&").replace(/\/:([\w-]+)(\?)?/g, (i, a, l) => (r.push({
        paramName: a,
        isOptional: l != null
    }),
    l ? "/?([^\\/]+)?" : "/([^\\/]+)"));
    return e.endsWith("*") ? (r.push({
        paramName: "*"
    }),
    o += e === "*" || e === "/*" ? "(.*)$" : "(?:\\/(.+)|\\/*)$") : n ? o += "\\/*$" : e !== "" && e !== "/" && (o += "(?:(?=\\/|$))"),
    [new RegExp(o,t ? void 0 : "i"), r]
}
function mA(e) {
    try {
        return e.split("/").map(t => decodeURIComponent(t).replace(/\//g, "%2F")).join("/")
    } catch (t) {
        return kw(!1, 'The URL path "' + e + '" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent ' + ("encoding (" + t + ").")),
        e
    }
}
function jw(e, t) {
    if (t === "/")
        return e;
    if (!e.toLowerCase().startsWith(t.toLowerCase()))
        return null;
    let n = t.endsWith("/") ? t.length - 1 : t.length
      , r = e.charAt(n);
    return r && r !== "/" ? null : e.slice(n) || "/"
}
function gA(e, t) {
    t === void 0 && (t = "/");
    let {pathname: n, search: r="", hash: o=""} = typeof e == "string" ? fs(e) : e;
    return {
        pathname: n ? n.startsWith("/") ? n : vA(n, t) : t,
        search: CA(r),
        hash: bA(o)
    }
}
function vA(e, t) {
    let n = t.replace(/\/+$/, "").split("/");
    return e.split("/").forEach(o => {
        o === ".." ? n.length > 1 && n.pop() : o !== "." && n.push(o)
    }
    ),
    n.length > 1 ? n.join("/") : "/"
}
function ec(e, t, n, r) {
    return "Cannot include a '" + e + "' character in a manually specified " + ("`to." + t + "` field [" + JSON.stringify(r) + "].  Please separate it out to the ") + ("`to." + n + "` field. Alternatively you may provide the full path as ") + 'a string in <Link to="..."> and the router will parse it for you.'
}
function yA(e) {
    return e.filter( (t, n) => n === 0 || t.route.path && t.route.path.length > 0)
}
function xA(e, t) {
    let n = yA(e);
    return t ? n.map( (r, o) => o === n.length - 1 ? r.pathname : r.pathnameBase) : n.map(r => r.pathnameBase)
}
function wA(e, t, n, r) {
    r === void 0 && (r = !1);
    let o;
    typeof e == "string" ? o = fs(e) : (o = Si({}, e),
    Ie(!o.pathname || !o.pathname.includes("?"), ec("?", "pathname", "search", o)),
    Ie(!o.pathname || !o.pathname.includes("#"), ec("#", "pathname", "hash", o)),
    Ie(!o.search || !o.search.includes("#"), ec("#", "search", "hash", o)));
    let s = e === "" || o.pathname === "", i = s ? "/" : o.pathname, a;
    if (i == null)
        a = n;
    else {
        let d = t.length - 1;
        if (!r && i.startsWith("..")) {
            let f = i.split("/");
            for (; f[0] === ".."; )
                f.shift(),
                d -= 1;
            o.pathname = f.join("/")
        }
        a = d >= 0 ? t[d] : "/"
    }
    let l = gA(o, a)
      , u = i && i !== "/" && i.endsWith("/")
      , c = (s || i === ".") && n.endsWith("/");
    return !l.pathname.endsWith("/") && (u || c) && (l.pathname += "/"),
    l
}
const $r = e => e.join("/").replace(/\/\/+/g, "/")
  , SA = e => e.replace(/\/+$/, "").replace(/^\/*/, "/")
  , CA = e => !e || e === "?" ? "" : e.startsWith("?") ? e : "?" + e
  , bA = e => !e || e === "#" ? "" : e.startsWith("#") ? e : "#" + e;
function EA(e) {
    return e != null && typeof e.status == "number" && typeof e.statusText == "string" && typeof e.internal == "boolean" && "data"in e
}
const Dw = ["post", "put", "patch", "delete"];
new Set(Dw);
const TA = ["get", ...Dw];
new Set(TA);
/**
 * React Router v6.30.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */
function Ci() {
    return Ci = Object.assign ? Object.assign.bind() : function(e) {
        for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t];
            for (var r in n)
                Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
        }
        return e
    }
    ,
    Ci.apply(this, arguments)
}
const xh = m.createContext(null)
  , PA = m.createContext(null)
  , ou = m.createContext(null)
  , su = m.createContext(null)
  , hs = m.createContext({
    outlet: null,
    matches: [],
    isDataRoute: !1
})
  , Iw = m.createContext(null);
function iu() {
    return m.useContext(su) != null
}
function Fi() {
    return iu() || Ie(!1),
    m.useContext(su).location
}
function Ow(e) {
    m.useContext(ou).static || m.useLayoutEffect(e)
}
function wh() {
    let {isDataRoute: e} = m.useContext(hs);
    return e ? VA() : RA()
}
function RA() {
    iu() || Ie(!1);
    let e = m.useContext(xh)
      , {basename: t, future: n, navigator: r} = m.useContext(ou)
      , {matches: o} = m.useContext(hs)
      , {pathname: s} = Fi()
      , i = JSON.stringify(xA(o, n.v7_relativeSplatPath))
      , a = m.useRef(!1);
    return Ow( () => {
        a.current = !0
    }
    ),
    m.useCallback(function(u, c) {
        if (c === void 0 && (c = {}),
        !a.current)
            return;
        if (typeof u == "number") {
            r.go(u);
            return
        }
        let d = wA(u, JSON.parse(i), s, c.relative === "path");
        e == null && t !== "/" && (d.pathname = d.pathname === "/" ? t : $r([t, d.pathname])),
        (c.replace ? r.replace : r.push)(d, c.state, c)
    }, [t, r, i, s, e])
}
function kA(e, t) {
    return NA(e, t)
}
function NA(e, t, n, r) {
    iu() || Ie(!1);
    let {navigator: o} = m.useContext(ou)
      , {matches: s} = m.useContext(hs)
      , i = s[s.length - 1]
      , a = i ? i.params : {};
    i && i.pathname;
    let l = i ? i.pathnameBase : "/";
    i && i.route;
    let u = Fi(), c;
    if (t) {
        var d;
        let w = typeof t == "string" ? fs(t) : t;
        l === "/" || (d = w.pathname) != null && d.startsWith(l) || Ie(!1),
        c = w
    } else
        c = u;
    let f = c.pathname || "/"
      , h = f;
    if (l !== "/") {
        let w = l.replace(/^\//, "").split("/");
        h = "/" + f.replace(/^\//, "").split("/").slice(w.length).join("/")
    }
    let S = nA(e, {
        pathname: h
    })
      , p = IA(S && S.map(w => Object.assign({}, w, {
        params: Object.assign({}, a, w.params),
        pathname: $r([l, o.encodeLocation ? o.encodeLocation(w.pathname).pathname : w.pathname]),
        pathnameBase: w.pathnameBase === "/" ? l : $r([l, o.encodeLocation ? o.encodeLocation(w.pathnameBase).pathname : w.pathnameBase])
    })), s, n, r);
    return t && p ? m.createElement(su.Provider, {
        value: {
            location: Ci({
                pathname: "/",
                search: "",
                hash: "",
                state: null,
                key: "default"
            }, c),
            navigationType: Zn.Pop
        }
    }, p) : p
}
function AA() {
    let e = FA()
      , t = EA(e) ? e.status + " " + e.statusText : e instanceof Error ? e.message : JSON.stringify(e)
      , n = e instanceof Error ? e.stack : null
      , o = {
        padding: "0.5rem",
        backgroundColor: "rgba(200,200,200, 0.5)"
    };
    return m.createElement(m.Fragment, null, m.createElement("h2", null, "Unexpected Application Error!"), m.createElement("h3", {
        style: {
            fontStyle: "italic"
        }
    }, t), n ? m.createElement("pre", {
        style: o
    }, n) : null, null)
}
const MA = m.createElement(AA, null);
class jA extends m.Component {
    constructor(t) {
        super(t),
        this.state = {
            location: t.location,
            revalidation: t.revalidation,
            error: t.error
        }
    }
    static getDerivedStateFromError(t) {
        return {
            error: t
        }
    }
    static getDerivedStateFromProps(t, n) {
        return n.location !== t.location || n.revalidation !== "idle" && t.revalidation === "idle" ? {
            error: t.error,
            location: t.location,
            revalidation: t.revalidation
        } : {
            error: t.error !== void 0 ? t.error : n.error,
            location: n.location,
            revalidation: t.revalidation || n.revalidation
        }
    }
    componentDidCatch(t, n) {
        console.error("React Router caught the following error during render", t, n)
    }
    render() {
        return this.state.error !== void 0 ? m.createElement(hs.Provider, {
            value: this.props.routeContext
        }, m.createElement(Iw.Provider, {
            value: this.state.error,
            children: this.props.component
        })) : this.props.children
    }
}
function DA(e) {
    let {routeContext: t, match: n, children: r} = e
      , o = m.useContext(xh);
    return o && o.static && o.staticContext && (n.route.errorElement || n.route.ErrorBoundary) && (o.staticContext._deepestRenderedBoundaryId = n.route.id),
    m.createElement(hs.Provider, {
        value: t
    }, r)
}
function IA(e, t, n, r) {
    var o;
    if (t === void 0 && (t = []),
    n === void 0 && (n = null),
    r === void 0 && (r = null),
    e == null) {
        var s;
        if (!n)
            return null;
        if (n.errors)
            e = n.matches;
        else if ((s = r) != null && s.v7_partialHydration && t.length === 0 && !n.initialized && n.matches.length > 0)
            e = n.matches;
        else
            return null
    }
    let i = e
      , a = (o = n) == null ? void 0 : o.errors;
    if (a != null) {
        let c = i.findIndex(d => d.route.id && (a == null ? void 0 : a[d.route.id]) !== void 0);
        c >= 0 || Ie(!1),
        i = i.slice(0, Math.min(i.length, c + 1))
    }
    let l = !1
      , u = -1;
    if (n && r && r.v7_partialHydration)
        for (let c = 0; c < i.length; c++) {
            let d = i[c];
            if ((d.route.HydrateFallback || d.route.hydrateFallbackElement) && (u = c),
            d.route.id) {
                let {loaderData: f, errors: h} = n
                  , S = d.route.loader && f[d.route.id] === void 0 && (!h || h[d.route.id] === void 0);
                if (d.route.lazy || S) {
                    l = !0,
                    u >= 0 ? i = i.slice(0, u + 1) : i = [i[0]];
                    break
                }
            }
        }
    return i.reduceRight( (c, d, f) => {
        let h, S = !1, p = null, w = null;
        n && (h = a && d.route.id ? a[d.route.id] : void 0,
        p = d.route.errorElement || MA,
        l && (u < 0 && f === 0 ? (S = !0,
        w = null) : u === f && (S = !0,
        w = d.route.hydrateFallbackElement || null)));
        let v = t.concat(i.slice(0, f + 1))
          , g = () => {
            let x;
            return h ? x = p : S ? x = w : d.route.Component ? x = m.createElement(d.route.Component, null) : d.route.element ? x = d.route.element : x = c,
            m.createElement(DA, {
                match: d,
                routeContext: {
                    outlet: c,
                    matches: v,
                    isDataRoute: n != null
                },
                children: x
            })
        }
        ;
        return n && (d.route.ErrorBoundary || d.route.errorElement || f === 0) ? m.createElement(jA, {
            location: n.location,
            revalidation: n.revalidation,
            component: p,
            error: h,
            children: g(),
            routeContext: {
                outlet: null,
                matches: v,
                isDataRoute: !0
            }
        }) : g()
    }
    , null)
}
var Lw = function(e) {
    return e.UseBlocker = "useBlocker",
    e.UseRevalidator = "useRevalidator",
    e.UseNavigateStable = "useNavigate",
    e
}(Lw || {})
  , xl = function(e) {
    return e.UseBlocker = "useBlocker",
    e.UseLoaderData = "useLoaderData",
    e.UseActionData = "useActionData",
    e.UseRouteError = "useRouteError",
    e.UseNavigation = "useNavigation",
    e.UseRouteLoaderData = "useRouteLoaderData",
    e.UseMatches = "useMatches",
    e.UseRevalidator = "useRevalidator",
    e.UseNavigateStable = "useNavigate",
    e.UseRouteId = "useRouteId",
    e
}(xl || {});
function OA(e) {
    let t = m.useContext(xh);
    return t || Ie(!1),
    t
}
function LA(e) {
    let t = m.useContext(PA);
    return t || Ie(!1),
    t
}
function _A(e) {
    let t = m.useContext(hs);
    return t || Ie(!1),
    t
}
function _w(e) {
    let t = _A()
      , n = t.matches[t.matches.length - 1];
    return n.route.id || Ie(!1),
    n.route.id
}
function FA() {
    var e;
    let t = m.useContext(Iw)
      , n = LA(xl.UseRouteError)
      , r = _w(xl.UseRouteError);
    return t !== void 0 ? t : (e = n.errors) == null ? void 0 : e[r]
}
function VA() {
    let {router: e} = OA(Lw.UseNavigateStable)
      , t = _w(xl.UseNavigateStable)
      , n = m.useRef(!1);
    return Ow( () => {
        n.current = !0
    }
    ),
    m.useCallback(function(o, s) {
        s === void 0 && (s = {}),
        n.current && (typeof o == "number" ? e.navigate(o) : e.navigate(o, Ci({
            fromRouteId: t
        }, s)))
    }, [e, t])
}
function BA(e, t) {
    e == null || e.v7_startTransition,
    e == null || e.v7_relativeSplatPath
}
function Os(e) {
    Ie(!1)
}
function $A(e) {
    let {basename: t="/", children: n=null, location: r, navigationType: o=Zn.Pop, navigator: s, static: i=!1, future: a} = e;
    iu() && Ie(!1);
    let l = t.replace(/^\/*/, "/")
      , u = m.useMemo( () => ({
        basename: l,
        navigator: s,
        static: i,
        future: Ci({
            v7_relativeSplatPath: !1
        }, a)
    }), [l, a, s, i]);
    typeof r == "string" && (r = fs(r));
    let {pathname: c="/", search: d="", hash: f="", state: h=null, key: S="default"} = r
      , p = m.useMemo( () => {
        let w = jw(c, l);
        return w == null ? null : {
            location: {
                pathname: w,
                search: d,
                hash: f,
                state: h,
                key: S
            },
            navigationType: o
        }
    }
    , [l, c, d, f, h, S, o]);
    return p == null ? null : m.createElement(ou.Provider, {
        value: u
    }, m.createElement(su.Provider, {
        children: n,
        value: p
    }))
}
function zA(e) {
    let {children: t, location: n} = e;
    return kA(Nd(t), n)
}
new Promise( () => {}
);
function Nd(e, t) {
    t === void 0 && (t = []);
    let n = [];
    return m.Children.forEach(e, (r, o) => {
        if (!m.isValidElement(r))
            return;
        let s = [...t, o];
        if (r.type === m.Fragment) {
            n.push.apply(n, Nd(r.props.children, s));
            return
        }
        r.type !== Os && Ie(!1),
        !r.props.index || !r.props.children || Ie(!1);
        let i = {
            id: r.props.id || s.join("-"),
            caseSensitive: r.props.caseSensitive,
            element: r.props.element,
            Component: r.props.Component,
            index: r.props.index,
            path: r.props.path,
            loader: r.props.loader,
            action: r.props.action,
            errorElement: r.props.errorElement,
            ErrorBoundary: r.props.ErrorBoundary,
            hasErrorBoundary: r.props.ErrorBoundary != null || r.props.errorElement != null,
            shouldRevalidate: r.props.shouldRevalidate,
            handle: r.props.handle,
            lazy: r.props.lazy
        };
        r.props.children && (i.children = Nd(r.props.children, s)),
        n.push(i)
    }
    ),
    n
}
/**
 * React Router DOM v6.30.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */
const UA = "6";
try {
    window.__reactRouterVersion = UA
} catch {}
const WA = "startTransition"
  , eg = ff[WA];
function HA(e) {
    let {basename: t, children: n, future: r, window: o} = e
      , s = m.useRef();
    s.current == null && (s.current = JN({
        window: o,
        v5Compat: !0
    }));
    let i = s.current
      , [a,l] = m.useState({
        action: i.action,
        location: i.location
    })
      , {v7_startTransition: u} = r || {}
      , c = m.useCallback(d => {
        u && eg ? eg( () => l(d)) : l(d)
    }
    , [l, u]);
    return m.useLayoutEffect( () => i.listen(c), [i, c]),
    m.useEffect( () => BA(r), [r]),
    m.createElement($A, {
        basename: t,
        children: n,
        location: a.location,
        navigationType: a.action,
        navigator: i,
        future: r
    })
}
var tg;
(function(e) {
    e.UseScrollRestoration = "useScrollRestoration",
    e.UseSubmit = "useSubmit",
    e.UseSubmitFetcher = "useSubmitFetcher",
    e.UseFetcher = "useFetcher",
    e.useViewTransitionState = "useViewTransitionState"
}
)(tg || (tg = {}));
var ng;
(function(e) {
    e.UseFetcher = "useFetcher",
    e.UseFetchers = "useFetchers",
    e.UseScrollRestoration = "useScrollRestoration"
}
)(ng || (ng = {}));
const Sh = m.createContext({});
function Ch(e) {
    const t = m.useRef(null);
    return t.current === null && (t.current = e()),
    t.current
}
const Fw = typeof window < "u"
  , Vw = Fw ? m.useLayoutEffect : m.useEffect
  , au = m.createContext(null);
function bh(e, t) {
    e.indexOf(t) === -1 && e.push(t)
}
function Eh(e, t) {
    const n = e.indexOf(t);
    n > -1 && e.splice(n, 1)
}
const hn = (e, t, n) => n > t ? t : n < e ? e : n;
let lu = () => {}
  , ns = () => {}
;
const Nn = {}
  , Bw = e => /^-?(?:\d+(?:\.\d+)?|\.\d+)$/u.test(e);
function $w(e) {
    return typeof e == "object" && e !== null
}
const zw = e => /^0[^.\s]+$/u.test(e);
function Th(e) {
    let t;
    return () => (t === void 0 && (t = e()),
    t)
}
const Rt = e => e
  , KA = (e, t) => n => t(e(n))
  , Vi = (...e) => e.reduce(KA)
  , bi = (e, t, n) => {
    const r = t - e;
    return r === 0 ? 1 : (n - e) / r
}
;
class Ph {
    constructor() {
        this.subscriptions = []
    }
    add(t) {
        return bh(this.subscriptions, t),
        () => Eh(this.subscriptions, t)
    }
    notify(t, n, r) {
        const o = this.subscriptions.length;
        if (o)
            if (o === 1)
                this.subscriptions[0](t, n, r);
            else
                for (let s = 0; s < o; s++) {
                    const i = this.subscriptions[s];
                    i && i(t, n, r)
                }
    }
    getSize() {
        return this.subscriptions.length
    }
    clear() {
        this.subscriptions.length = 0
    }
}
const cn = e => e * 1e3
  , Tt = e => e / 1e3;
function Uw(e, t) {
    return t ? e * (1e3 / t) : 0
}
const Ww = (e, t, n) => (((1 - 3 * n + 3 * t) * e + (3 * n - 6 * t)) * e + 3 * t) * e
  , GA = 1e-7
  , YA = 12;
function QA(e, t, n, r, o) {
    let s, i, a = 0;
    do
        i = t + (n - t) / 2,
        s = Ww(i, r, o) - e,
        s > 0 ? n = i : t = i;
    while (Math.abs(s) > GA && ++a < YA);
    return i
}
function Bi(e, t, n, r) {
    if (e === t && n === r)
        return Rt;
    const o = s => QA(s, 0, 1, e, n);
    return s => s === 0 || s === 1 ? s : Ww(o(s), t, r)
}
const Hw = e => t => t <= .5 ? e(2 * t) / 2 : (2 - e(2 * (1 - t))) / 2
  , Kw = e => t => 1 - e(1 - t)
  , Gw = Bi(.33, 1.53, .69, .99)
  , Rh = Kw(Gw)
  , Yw = Hw(Rh)
  , Qw = e => (e *= 2) < 1 ? .5 * Rh(e) : .5 * (2 - Math.pow(2, -10 * (e - 1)))
  , kh = e => 1 - Math.sin(Math.acos(e))
  , Xw = Kw(kh)
  , qw = Hw(kh)
  , XA = Bi(.42, 0, 1, 1)
  , qA = Bi(0, 0, .58, 1)
  , Zw = Bi(.42, 0, .58, 1)
  , ZA = e => Array.isArray(e) && typeof e[0] != "number"
  , Jw = e => Array.isArray(e) && typeof e[0] == "number"
  , rg = {
    linear: Rt,
    easeIn: XA,
    easeInOut: Zw,
    easeOut: qA,
    circIn: kh,
    circInOut: qw,
    circOut: Xw,
    backIn: Rh,
    backInOut: Yw,
    backOut: Gw,
    anticipate: Qw
}
  , JA = e => typeof e == "string"
  , og = e => {
    if (Jw(e)) {
        ns(e.length === 4, "Cubic bezier arrays must contain four numerical values.", "cubic-bezier-length");
        const [t,n,r,o] = e;
        return Bi(t, n, r, o)
    } else if (JA(e))
        return ns(rg[e] !== void 0, `Invalid easing type '${e}'`, "invalid-easing-type"),
        rg[e];
    return e
}
  , ha = ["setup", "read", "resolveKeyframes", "preUpdate", "update", "preRender", "render", "postRender"]
  , sg = {
    value: null,
    addProjectionMetrics: null
};
function eM(e, t) {
    let n = new Set
      , r = new Set
      , o = !1
      , s = !1;
    const i = new WeakSet;
    let a = {
        delta: 0,
        timestamp: 0,
        isProcessing: !1
    }
      , l = 0;
    function u(d) {
        i.has(d) && (c.schedule(d),
        e()),
        l++,
        d(a)
    }
    const c = {
        schedule: (d, f=!1, h=!1) => {
            const p = h && o ? n : r;
            return f && i.add(d),
            p.has(d) || p.add(d),
            d
        }
        ,
        cancel: d => {
            r.delete(d),
            i.delete(d)
        }
        ,
        process: d => {
            if (a = d,
            o) {
                s = !0;
                return
            }
            o = !0,
            [n,r] = [r, n],
            n.forEach(u),
            t && sg.value && sg.value.frameloop[t].push(l),
            l = 0,
            n.clear(),
            o = !1,
            s && (s = !1,
            c.process(d))
        }
    };
    return c
}
const tM = 40;
function e1(e, t) {
    let n = !1
      , r = !0;
    const o = {
        delta: 0,
        timestamp: 0,
        isProcessing: !1
    }
      , s = () => n = !0
      , i = ha.reduce( (x, C) => (x[C] = eM(s, t ? C : void 0),
    x), {})
      , {setup: a, read: l, resolveKeyframes: u, preUpdate: c, update: d, preRender: f, render: h, postRender: S} = i
      , p = () => {
        const x = Nn.useManualTiming ? o.timestamp : performance.now();
        n = !1,
        Nn.useManualTiming || (o.delta = r ? 1e3 / 60 : Math.max(Math.min(x - o.timestamp, tM), 1)),
        o.timestamp = x,
        o.isProcessing = !0,
        a.process(o),
        l.process(o),
        u.process(o),
        c.process(o),
        d.process(o),
        f.process(o),
        h.process(o),
        S.process(o),
        o.isProcessing = !1,
        n && t && (r = !1,
        e(p))
    }
      , w = () => {
        n = !0,
        r = !0,
        o.isProcessing || e(p)
    }
    ;
    return {
        schedule: ha.reduce( (x, C) => {
            const b = i[C];
            return x[C] = (E, T=!1, P=!1) => (n || w(),
            b.schedule(E, T, P)),
            x
        }
        , {}),
        cancel: x => {
            for (let C = 0; C < ha.length; C++)
                i[ha[C]].cancel(x)
        }
        ,
        state: o,
        steps: i
    }
}
const {schedule: pe, cancel: fr, state: Fe, steps: tc} = e1(typeof requestAnimationFrame < "u" ? requestAnimationFrame : Rt, !0);
let La;
function nM() {
    La = void 0
}
const Je = {
    now: () => (La === void 0 && Je.set(Fe.isProcessing || Nn.useManualTiming ? Fe.timestamp : performance.now()),
    La),
    set: e => {
        La = e,
        queueMicrotask(nM)
    }
}
  , t1 = e => t => typeof t == "string" && t.startsWith(e)
  , n1 = t1("--")
  , rM = t1("var(--")
  , Nh = e => rM(e) ? oM.test(e.split("/*")[0].trim()) : !1
  , oM = /var\(--(?:[\w-]+\s*|[\w-]+\s*,(?:\s*[^)(\s]|\s*\((?:[^)(]|\([^)(]*\))*\))+\s*)\)$/iu;
function ig(e) {
    return typeof e != "string" ? !1 : e.split("/*")[0].includes("var(--")
}
const ps = {
    test: e => typeof e == "number",
    parse: parseFloat,
    transform: e => e
}
  , Ei = {
    ...ps,
    transform: e => hn(0, 1, e)
}
  , pa = {
    ...ps,
    default: 1
}
  , Xs = e => Math.round(e * 1e5) / 1e5
  , Ah = /-?(?:\d+(?:\.\d+)?|\.\d+)/gu;
function sM(e) {
    return e == null
}
const iM = /^(?:#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\))$/iu
  , Mh = (e, t) => n => !!(typeof n == "string" && iM.test(n) && n.startsWith(e) || t && !sM(n) && Object.prototype.hasOwnProperty.call(n, t))
  , r1 = (e, t, n) => r => {
    if (typeof r != "string")
        return r;
    const [o,s,i,a] = r.match(Ah);
    return {
        [e]: parseFloat(o),
        [t]: parseFloat(s),
        [n]: parseFloat(i),
        alpha: a !== void 0 ? parseFloat(a) : 1
    }
}
  , aM = e => hn(0, 255, e)
  , nc = {
    ...ps,
    transform: e => Math.round(aM(e))
}
  , Mr = {
    test: Mh("rgb", "red"),
    parse: r1("red", "green", "blue"),
    transform: ({red: e, green: t, blue: n, alpha: r=1}) => "rgba(" + nc.transform(e) + ", " + nc.transform(t) + ", " + nc.transform(n) + ", " + Xs(Ei.transform(r)) + ")"
};
function lM(e) {
    let t = ""
      , n = ""
      , r = ""
      , o = "";
    return e.length > 5 ? (t = e.substring(1, 3),
    n = e.substring(3, 5),
    r = e.substring(5, 7),
    o = e.substring(7, 9)) : (t = e.substring(1, 2),
    n = e.substring(2, 3),
    r = e.substring(3, 4),
    o = e.substring(4, 5),
    t += t,
    n += n,
    r += r,
    o += o),
    {
        red: parseInt(t, 16),
        green: parseInt(n, 16),
        blue: parseInt(r, 16),
        alpha: o ? parseInt(o, 16) / 255 : 1
    }
}
const Ad = {
    test: Mh("#"),
    parse: lM,
    transform: Mr.transform
}
  , $i = e => ({
    test: t => typeof t == "string" && t.endsWith(e) && t.split(" ").length === 1,
    parse: parseFloat,
    transform: t => `${t}${e}`
})
  , Vn = $i("deg")
  , dn = $i("%")
  , $ = $i("px")
  , uM = $i("vh")
  , cM = $i("vw")
  , ag = {
    ...dn,
    parse: e => dn.parse(e) / 100,
    transform: e => dn.transform(e * 100)
}
  , bo = {
    test: Mh("hsl", "hue"),
    parse: r1("hue", "saturation", "lightness"),
    transform: ({hue: e, saturation: t, lightness: n, alpha: r=1}) => "hsla(" + Math.round(e) + ", " + dn.transform(Xs(t)) + ", " + dn.transform(Xs(n)) + ", " + Xs(Ei.transform(r)) + ")"
}
  , Ne = {
    test: e => Mr.test(e) || Ad.test(e) || bo.test(e),
    parse: e => Mr.test(e) ? Mr.parse(e) : bo.test(e) ? bo.parse(e) : Ad.parse(e),
    transform: e => typeof e == "string" ? e : e.hasOwnProperty("red") ? Mr.transform(e) : bo.transform(e),
    getAnimatableNone: e => {
        const t = Ne.parse(e);
        return t.alpha = 0,
        Ne.transform(t)
    }
}
  , dM = /(?:#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\))/giu;
function fM(e) {
    var t, n;
    return isNaN(e) && typeof e == "string" && (((t = e.match(Ah)) == null ? void 0 : t.length) || 0) + (((n = e.match(dM)) == null ? void 0 : n.length) || 0) > 0
}
const o1 = "number"
  , s1 = "color"
  , hM = "var"
  , pM = "var("
  , lg = "${}"
  , mM = /var\s*\(\s*--(?:[\w-]+\s*|[\w-]+\s*,(?:\s*[^)(\s]|\s*\((?:[^)(]|\([^)(]*\))*\))+\s*)\)|#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\)|-?(?:\d+(?:\.\d+)?|\.\d+)/giu;
function Ti(e) {
    const t = e.toString()
      , n = []
      , r = {
        color: [],
        number: [],
        var: []
    }
      , o = [];
    let s = 0;
    const a = t.replace(mM, l => (Ne.test(l) ? (r.color.push(s),
    o.push(s1),
    n.push(Ne.parse(l))) : l.startsWith(pM) ? (r.var.push(s),
    o.push(hM),
    n.push(l)) : (r.number.push(s),
    o.push(o1),
    n.push(parseFloat(l))),
    ++s,
    lg)).split(lg);
    return {
        values: n,
        split: a,
        indexes: r,
        types: o
    }
}
function i1(e) {
    return Ti(e).values
}
function a1(e) {
    const {split: t, types: n} = Ti(e)
      , r = t.length;
    return o => {
        let s = "";
        for (let i = 0; i < r; i++)
            if (s += t[i],
            o[i] !== void 0) {
                const a = n[i];
                a === o1 ? s += Xs(o[i]) : a === s1 ? s += Ne.transform(o[i]) : s += o[i]
            }
        return s
    }
}
const gM = e => typeof e == "number" ? 0 : Ne.test(e) ? Ne.getAnimatableNone(e) : e;
function vM(e) {
    const t = i1(e);
    return a1(e)(t.map(gM))
}
const hr = {
    test: fM,
    parse: i1,
    createTransformer: a1,
    getAnimatableNone: vM
};
function rc(e, t, n) {
    return n < 0 && (n += 1),
    n > 1 && (n -= 1),
    n < 1 / 6 ? e + (t - e) * 6 * n : n < 1 / 2 ? t : n < 2 / 3 ? e + (t - e) * (2 / 3 - n) * 6 : e
}
function yM({hue: e, saturation: t, lightness: n, alpha: r}) {
    e /= 360,
    t /= 100,
    n /= 100;
    let o = 0
      , s = 0
      , i = 0;
    if (!t)
        o = s = i = n;
    else {
        const a = n < .5 ? n * (1 + t) : n + t - n * t
          , l = 2 * n - a;
        o = rc(l, a, e + 1 / 3),
        s = rc(l, a, e),
        i = rc(l, a, e - 1 / 3)
    }
    return {
        red: Math.round(o * 255),
        green: Math.round(s * 255),
        blue: Math.round(i * 255),
        alpha: r
    }
}
function wl(e, t) {
    return n => n > 0 ? t : e
}
const we = (e, t, n) => e + (t - e) * n
  , oc = (e, t, n) => {
    const r = e * e
      , o = n * (t * t - r) + r;
    return o < 0 ? 0 : Math.sqrt(o)
}
  , xM = [Ad, Mr, bo]
  , wM = e => xM.find(t => t.test(e));
function ug(e) {
    const t = wM(e);
    if (lu(!!t, `'${e}' is not an animatable color. Use the equivalent color code instead.`, "color-not-animatable"),
    !t)
        return !1;
    let n = t.parse(e);
    return t === bo && (n = yM(n)),
    n
}
const cg = (e, t) => {
    const n = ug(e)
      , r = ug(t);
    if (!n || !r)
        return wl(e, t);
    const o = {
        ...n
    };
    return s => (o.red = oc(n.red, r.red, s),
    o.green = oc(n.green, r.green, s),
    o.blue = oc(n.blue, r.blue, s),
    o.alpha = we(n.alpha, r.alpha, s),
    Mr.transform(o))
}
  , Md = new Set(["none", "hidden"]);
function SM(e, t) {
    return Md.has(e) ? n => n <= 0 ? e : t : n => n >= 1 ? t : e
}
function CM(e, t) {
    return n => we(e, t, n)
}
function jh(e) {
    return typeof e == "number" ? CM : typeof e == "string" ? Nh(e) ? wl : Ne.test(e) ? cg : TM : Array.isArray(e) ? l1 : typeof e == "object" ? Ne.test(e) ? cg : bM : wl
}
function l1(e, t) {
    const n = [...e]
      , r = n.length
      , o = e.map( (s, i) => jh(s)(s, t[i]));
    return s => {
        for (let i = 0; i < r; i++)
            n[i] = o[i](s);
        return n
    }
}
function bM(e, t) {
    const n = {
        ...e,
        ...t
    }
      , r = {};
    for (const o in n)
        e[o] !== void 0 && t[o] !== void 0 && (r[o] = jh(e[o])(e[o], t[o]));
    return o => {
        for (const s in r)
            n[s] = r[s](o);
        return n
    }
}
function EM(e, t) {
    const n = []
      , r = {
        color: 0,
        var: 0,
        number: 0
    };
    for (let o = 0; o < t.values.length; o++) {
        const s = t.types[o]
          , i = e.indexes[s][r[s]]
          , a = e.values[i] ?? 0;
        n[o] = a,
        r[s]++
    }
    return n
}
const TM = (e, t) => {
    const n = hr.createTransformer(t)
      , r = Ti(e)
      , o = Ti(t);
    return r.indexes.var.length === o.indexes.var.length && r.indexes.color.length === o.indexes.color.length && r.indexes.number.length >= o.indexes.number.length ? Md.has(e) && !o.values.length || Md.has(t) && !r.values.length ? SM(e, t) : Vi(l1(EM(r, o), o.values), n) : (lu(!0, `Complex values '${e}' and '${t}' too different to mix. Ensure all colors are of the same type, and that each contains the same quantity of number and color values. Falling back to instant transition.`, "complex-values-different"),
    wl(e, t))
}
;
function u1(e, t, n) {
    return typeof e == "number" && typeof t == "number" && typeof n == "number" ? we(e, t, n) : jh(e)(e, t)
}
const PM = e => {
    const t = ({timestamp: n}) => e(n);
    return {
        start: (n=!0) => pe.update(t, n),
        stop: () => fr(t),
        now: () => Fe.isProcessing ? Fe.timestamp : Je.now()
    }
}
  , c1 = (e, t, n=10) => {
    let r = "";
    const o = Math.max(Math.round(t / n), 2);
    for (let s = 0; s < o; s++)
        r += Math.round(e(s / (o - 1)) * 1e4) / 1e4 + ", ";
    return `linear(${r.substring(0, r.length - 2)})`
}
  , Sl = 2e4;
function Dh(e) {
    let t = 0;
    const n = 50;
    let r = e.next(t);
    for (; !r.done && t < Sl; )
        t += n,
        r = e.next(t);
    return t >= Sl ? 1 / 0 : t
}
function RM(e, t=100, n) {
    const r = n({
        ...e,
        keyframes: [0, t]
    })
      , o = Math.min(Dh(r), Sl);
    return {
        type: "keyframes",
        ease: s => r.next(o * s).value / t,
        duration: Tt(o)
    }
}
const kM = 5;
function d1(e, t, n) {
    const r = Math.max(t - kM, 0);
    return Uw(n - e(r), t - r)
}
const ye = {
    stiffness: 100,
    damping: 10,
    mass: 1,
    velocity: 0,
    duration: 800,
    bounce: .3,
    visualDuration: .3,
    restSpeed: {
        granular: .01,
        default: 2
    },
    restDelta: {
        granular: .005,
        default: .5
    },
    minDuration: .01,
    maxDuration: 10,
    minDamping: .05,
    maxDamping: 1
}
  , sc = .001;
function NM({duration: e=ye.duration, bounce: t=ye.bounce, velocity: n=ye.velocity, mass: r=ye.mass}) {
    let o, s;
    lu(e <= cn(ye.maxDuration), "Spring duration must be 10 seconds or less", "spring-duration-limit");
    let i = 1 - t;
    i = hn(ye.minDamping, ye.maxDamping, i),
    e = hn(ye.minDuration, ye.maxDuration, Tt(e)),
    i < 1 ? (o = u => {
        const c = u * i
          , d = c * e
          , f = c - n
          , h = jd(u, i)
          , S = Math.exp(-d);
        return sc - f / h * S
    }
    ,
    s = u => {
        const d = u * i * e
          , f = d * n + n
          , h = Math.pow(i, 2) * Math.pow(u, 2) * e
          , S = Math.exp(-d)
          , p = jd(Math.pow(u, 2), i);
        return (-o(u) + sc > 0 ? -1 : 1) * ((f - h) * S) / p
    }
    ) : (o = u => {
        const c = Math.exp(-u * e)
          , d = (u - n) * e + 1;
        return -sc + c * d
    }
    ,
    s = u => {
        const c = Math.exp(-u * e)
          , d = (n - u) * (e * e);
        return c * d
    }
    );
    const a = 5 / e
      , l = MM(o, s, a);
    if (e = cn(e),
    isNaN(l))
        return {
            stiffness: ye.stiffness,
            damping: ye.damping,
            duration: e
        };
    {
        const u = Math.pow(l, 2) * r;
        return {
            stiffness: u,
            damping: i * 2 * Math.sqrt(r * u),
            duration: e
        }
    }
}
const AM = 12;
function MM(e, t, n) {
    let r = n;
    for (let o = 1; o < AM; o++)
        r = r - e(r) / t(r);
    return r
}
function jd(e, t) {
    return e * Math.sqrt(1 - t * t)
}
const jM = ["duration", "bounce"]
  , DM = ["stiffness", "damping", "mass"];
function dg(e, t) {
    return t.some(n => e[n] !== void 0)
}
function IM(e) {
    let t = {
        velocity: ye.velocity,
        stiffness: ye.stiffness,
        damping: ye.damping,
        mass: ye.mass,
        isResolvedFromDuration: !1,
        ...e
    };
    if (!dg(e, DM) && dg(e, jM))
        if (e.visualDuration) {
            const n = e.visualDuration
              , r = 2 * Math.PI / (n * 1.2)
              , o = r * r
              , s = 2 * hn(.05, 1, 1 - (e.bounce || 0)) * Math.sqrt(o);
            t = {
                ...t,
                mass: ye.mass,
                stiffness: o,
                damping: s
            }
        } else {
            const n = NM(e);
            t = {
                ...t,
                ...n,
                mass: ye.mass
            },
            t.isResolvedFromDuration = !0
        }
    return t
}
function Cl(e=ye.visualDuration, t=ye.bounce) {
    const n = typeof e != "object" ? {
        visualDuration: e,
        keyframes: [0, 1],
        bounce: t
    } : e;
    let {restSpeed: r, restDelta: o} = n;
    const s = n.keyframes[0]
      , i = n.keyframes[n.keyframes.length - 1]
      , a = {
        done: !1,
        value: s
    }
      , {stiffness: l, damping: u, mass: c, duration: d, velocity: f, isResolvedFromDuration: h} = IM({
        ...n,
        velocity: -Tt(n.velocity || 0)
    })
      , S = f || 0
      , p = u / (2 * Math.sqrt(l * c))
      , w = i - s
      , v = Tt(Math.sqrt(l / c))
      , g = Math.abs(w) < 5;
    r || (r = g ? ye.restSpeed.granular : ye.restSpeed.default),
    o || (o = g ? ye.restDelta.granular : ye.restDelta.default);
    let x;
    if (p < 1) {
        const b = jd(v, p);
        x = E => {
            const T = Math.exp(-p * v * E);
            return i - T * ((S + p * v * w) / b * Math.sin(b * E) + w * Math.cos(b * E))
        }
    } else if (p === 1)
        x = b => i - Math.exp(-v * b) * (w + (S + v * w) * b);
    else {
        const b = v * Math.sqrt(p * p - 1);
        x = E => {
            const T = Math.exp(-p * v * E)
              , P = Math.min(b * E, 300);
            return i - T * ((S + p * v * w) * Math.sinh(P) + b * w * Math.cosh(P)) / b
        }
    }
    const C = {
        calculatedDuration: h && d || null,
        next: b => {
            const E = x(b);
            if (h)
                a.done = b >= d;
            else {
                let T = b === 0 ? S : 0;
                p < 1 && (T = b === 0 ? cn(S) : d1(x, b, E));
                const P = Math.abs(T) <= r
                  , N = Math.abs(i - E) <= o;
                a.done = P && N
            }
            return a.value = a.done ? i : E,
            a
        }
        ,
        toString: () => {
            const b = Math.min(Dh(C), Sl)
              , E = c1(T => C.next(b * T).value, b, 30);
            return b + "ms " + E
        }
        ,
        toTransition: () => {}
    };
    return C
}
Cl.applyToOptions = e => {
    const t = RM(e, 100, Cl);
    return e.ease = t.ease,
    e.duration = cn(t.duration),
    e.type = "keyframes",
    e
}
;
function Dd({keyframes: e, velocity: t=0, power: n=.8, timeConstant: r=325, bounceDamping: o=10, bounceStiffness: s=500, modifyTarget: i, min: a, max: l, restDelta: u=.5, restSpeed: c}) {
    const d = e[0]
      , f = {
        done: !1,
        value: d
    }
      , h = P => a !== void 0 && P < a || l !== void 0 && P > l
      , S = P => a === void 0 ? l : l === void 0 || Math.abs(a - P) < Math.abs(l - P) ? a : l;
    let p = n * t;
    const w = d + p
      , v = i === void 0 ? w : i(w);
    v !== w && (p = v - d);
    const g = P => -p * Math.exp(-P / r)
      , x = P => v + g(P)
      , C = P => {
        const N = g(P)
          , M = x(P);
        f.done = Math.abs(N) <= u,
        f.value = f.done ? v : M
    }
    ;
    let b, E;
    const T = P => {
        h(f.value) && (b = P,
        E = Cl({
            keyframes: [f.value, S(f.value)],
            velocity: d1(x, P, f.value),
            damping: o,
            stiffness: s,
            restDelta: u,
            restSpeed: c
        }))
    }
    ;
    return T(0),
    {
        calculatedDuration: null,
        next: P => {
            let N = !1;
            return !E && b === void 0 && (N = !0,
            C(P),
            T(P)),
            b !== void 0 && P >= b ? E.next(P - b) : (!N && C(P),
            f)
        }
    }
}
function OM(e, t, n) {
    const r = []
      , o = n || Nn.mix || u1
      , s = e.length - 1;
    for (let i = 0; i < s; i++) {
        let a = o(e[i], e[i + 1]);
        if (t) {
            const l = Array.isArray(t) ? t[i] || Rt : t;
            a = Vi(l, a)
        }
        r.push(a)
    }
    return r
}
function LM(e, t, {clamp: n=!0, ease: r, mixer: o}={}) {
    const s = e.length;
    if (ns(s === t.length, "Both input and output ranges must be the same length", "range-length"),
    s === 1)
        return () => t[0];
    if (s === 2 && t[0] === t[1])
        return () => t[1];
    const i = e[0] === e[1];
    e[0] > e[s - 1] && (e = [...e].reverse(),
    t = [...t].reverse());
    const a = OM(t, r, o)
      , l = a.length
      , u = c => {
        if (i && c < e[0])
            return t[0];
        let d = 0;
        if (l > 1)
            for (; d < e.length - 2 && !(c < e[d + 1]); d++)
                ;
        const f = bi(e[d], e[d + 1], c);
        return a[d](f)
    }
    ;
    return n ? c => u(hn(e[0], e[s - 1], c)) : u
}
function _M(e, t) {
    const n = e[e.length - 1];
    for (let r = 1; r <= t; r++) {
        const o = bi(0, t, r);
        e.push(we(n, 1, o))
    }
}
function FM(e) {
    const t = [0];
    return _M(t, e.length - 1),
    t
}
function VM(e, t) {
    return e.map(n => n * t)
}
function BM(e, t) {
    return e.map( () => t || Zw).splice(0, e.length - 1)
}
function qs({duration: e=300, keyframes: t, times: n, ease: r="easeInOut"}) {
    const o = ZA(r) ? r.map(og) : og(r)
      , s = {
        done: !1,
        value: t[0]
    }
      , i = VM(n && n.length === t.length ? n : FM(t), e)
      , a = LM(i, t, {
        ease: Array.isArray(o) ? o : BM(t, o)
    });
    return {
        calculatedDuration: e,
        next: l => (s.value = a(l),
        s.done = l >= e,
        s)
    }
}
const $M = e => e !== null;
function Ih(e, {repeat: t, repeatType: n="loop"}, r, o=1) {
    const s = e.filter($M)
      , a = o < 0 || t && n !== "loop" && t % 2 === 1 ? 0 : s.length - 1;
    return !a || r === void 0 ? s[a] : r
}
const zM = {
    decay: Dd,
    inertia: Dd,
    tween: qs,
    keyframes: qs,
    spring: Cl
};
function f1(e) {
    typeof e.type == "string" && (e.type = zM[e.type])
}
class Oh {
    constructor() {
        this.updateFinished()
    }
    get finished() {
        return this._finished
    }
    updateFinished() {
        this._finished = new Promise(t => {
            this.resolve = t
        }
        )
    }
    notifyFinished() {
        this.resolve()
    }
    then(t, n) {
        return this.finished.then(t, n)
    }
}
const UM = e => e / 100;
class Lh extends Oh {
    constructor(t) {
        super(),
        this.state = "idle",
        this.startTime = null,
        this.isStopped = !1,
        this.currentTime = 0,
        this.holdTime = null,
        this.playbackSpeed = 1,
        this.stop = () => {
            var r, o;
            const {motionValue: n} = this.options;
            n && n.updatedAt !== Je.now() && this.tick(Je.now()),
            this.isStopped = !0,
            this.state !== "idle" && (this.teardown(),
            (o = (r = this.options).onStop) == null || o.call(r))
        }
        ,
        this.options = t,
        this.initAnimation(),
        this.play(),
        t.autoplay === !1 && this.pause()
    }
    initAnimation() {
        const {options: t} = this;
        f1(t);
        const {type: n=qs, repeat: r=0, repeatDelay: o=0, repeatType: s, velocity: i=0} = t;
        let {keyframes: a} = t;
        const l = n || qs;
        l !== qs && typeof a[0] != "number" && (this.mixKeyframes = Vi(UM, u1(a[0], a[1])),
        a = [0, 100]);
        const u = l({
            ...t,
            keyframes: a
        });
        s === "mirror" && (this.mirroredGenerator = l({
            ...t,
            keyframes: [...a].reverse(),
            velocity: -i
        })),
        u.calculatedDuration === null && (u.calculatedDuration = Dh(u));
        const {calculatedDuration: c} = u;
        this.calculatedDuration = c,
        this.resolvedDuration = c + o,
        this.totalDuration = this.resolvedDuration * (r + 1) - o,
        this.generator = u
    }
    updateTime(t) {
        const n = Math.round(t - this.startTime) * this.playbackSpeed;
        this.holdTime !== null ? this.currentTime = this.holdTime : this.currentTime = n
    }
    tick(t, n=!1) {
        const {generator: r, totalDuration: o, mixKeyframes: s, mirroredGenerator: i, resolvedDuration: a, calculatedDuration: l} = this;
        if (this.startTime === null)
            return r.next(0);
        const {delay: u=0, keyframes: c, repeat: d, repeatType: f, repeatDelay: h, type: S, onUpdate: p, finalKeyframe: w} = this.options;
        this.speed > 0 ? this.startTime = Math.min(this.startTime, t) : this.speed < 0 && (this.startTime = Math.min(t - o / this.speed, this.startTime)),
        n ? this.currentTime = t : this.updateTime(t);
        const v = this.currentTime - u * (this.playbackSpeed >= 0 ? 1 : -1)
          , g = this.playbackSpeed >= 0 ? v < 0 : v > o;
        this.currentTime = Math.max(v, 0),
        this.state === "finished" && this.holdTime === null && (this.currentTime = o);
        let x = this.currentTime
          , C = r;
        if (d) {
            const P = Math.min(this.currentTime, o) / a;
            let N = Math.floor(P)
              , M = P % 1;
            !M && P >= 1 && (M = 1),
            M === 1 && N--,
            N = Math.min(N, d + 1),
            !!(N % 2) && (f === "reverse" ? (M = 1 - M,
            h && (M -= h / a)) : f === "mirror" && (C = i)),
            x = hn(0, 1, M) * a
        }
        const b = g ? {
            done: !1,
            value: c[0]
        } : C.next(x);
        s && (b.value = s(b.value));
        let {done: E} = b;
        !g && l !== null && (E = this.playbackSpeed >= 0 ? this.currentTime >= o : this.currentTime <= 0);
        const T = this.holdTime === null && (this.state === "finished" || this.state === "running" && E);
        return T && S !== Dd && (b.value = Ih(c, this.options, w, this.speed)),
        p && p(b.value),
        T && this.finish(),
        b
    }
    then(t, n) {
        return this.finished.then(t, n)
    }
    get duration() {
        return Tt(this.calculatedDuration)
    }
    get iterationDuration() {
        const {delay: t=0} = this.options || {};
        return this.duration + Tt(t)
    }
    get time() {
        return Tt(this.currentTime)
    }
    set time(t) {
        var n;
        t = cn(t),
        this.currentTime = t,
        this.startTime === null || this.holdTime !== null || this.playbackSpeed === 0 ? this.holdTime = t : this.driver && (this.startTime = this.driver.now() - t / this.playbackSpeed),
        (n = this.driver) == null || n.start(!1)
    }
    get speed() {
        return this.playbackSpeed
    }
    set speed(t) {
        this.updateTime(Je.now());
        const n = this.playbackSpeed !== t;
        this.playbackSpeed = t,
        n && (this.time = Tt(this.currentTime))
    }
    play() {
        var o, s;
        if (this.isStopped)
            return;
        const {driver: t=PM, startTime: n} = this.options;
        this.driver || (this.driver = t(i => this.tick(i))),
        (s = (o = this.options).onPlay) == null || s.call(o);
        const r = this.driver.now();
        this.state === "finished" ? (this.updateFinished(),
        this.startTime = r) : this.holdTime !== null ? this.startTime = r - this.holdTime : this.startTime || (this.startTime = n ?? r),
        this.state === "finished" && this.speed < 0 && (this.startTime += this.calculatedDuration),
        this.holdTime = null,
        this.state = "running",
        this.driver.start()
    }
    pause() {
        this.state = "paused",
        this.updateTime(Je.now()),
        this.holdTime = this.currentTime
    }
    complete() {
        this.state !== "running" && this.play(),
        this.state = "finished",
        this.holdTime = null
    }
    finish() {
        var t, n;
        this.notifyFinished(),
        this.teardown(),
        this.state = "finished",
        (n = (t = this.options).onComplete) == null || n.call(t)
    }
    cancel() {
        var t, n;
        this.holdTime = null,
        this.startTime = 0,
        this.tick(0),
        this.teardown(),
        (n = (t = this.options).onCancel) == null || n.call(t)
    }
    teardown() {
        this.state = "idle",
        this.stopDriver(),
        this.startTime = this.holdTime = null
    }
    stopDriver() {
        this.driver && (this.driver.stop(),
        this.driver = void 0)
    }
    sample(t) {
        return this.startTime = 0,
        this.tick(t, !0)
    }
    attachTimeline(t) {
        var n;
        return this.options.allowFlatten && (this.options.type = "keyframes",
        this.options.ease = "linear",
        this.initAnimation()),
        (n = this.driver) == null || n.stop(),
        t.observe(this)
    }
}
function WM(e) {
    for (let t = 1; t < e.length; t++)
        e[t] ?? (e[t] = e[t - 1])
}
const jr = e => e * 180 / Math.PI
  , Id = e => {
    const t = jr(Math.atan2(e[1], e[0]));
    return Od(t)
}
  , HM = {
    x: 4,
    y: 5,
    translateX: 4,
    translateY: 5,
    scaleX: 0,
    scaleY: 3,
    scale: e => (Math.abs(e[0]) + Math.abs(e[3])) / 2,
    rotate: Id,
    rotateZ: Id,
    skewX: e => jr(Math.atan(e[1])),
    skewY: e => jr(Math.atan(e[2])),
    skew: e => (Math.abs(e[1]) + Math.abs(e[2])) / 2
}
  , Od = e => (e = e % 360,
e < 0 && (e += 360),
e)
  , fg = Id
  , hg = e => Math.sqrt(e[0] * e[0] + e[1] * e[1])
  , pg = e => Math.sqrt(e[4] * e[4] + e[5] * e[5])
  , KM = {
    x: 12,
    y: 13,
    z: 14,
    translateX: 12,
    translateY: 13,
    translateZ: 14,
    scaleX: hg,
    scaleY: pg,
    scale: e => (hg(e) + pg(e)) / 2,
    rotateX: e => Od(jr(Math.atan2(e[6], e[5]))),
    rotateY: e => Od(jr(Math.atan2(-e[2], e[0]))),
    rotateZ: fg,
    rotate: fg,
    skewX: e => jr(Math.atan(e[4])),
    skewY: e => jr(Math.atan(e[1])),
    skew: e => (Math.abs(e[1]) + Math.abs(e[4])) / 2
};
function Ld(e) {
    return e.includes("scale") ? 1 : 0
}
function _d(e, t) {
    if (!e || e === "none")
        return Ld(t);
    const n = e.match(/^matrix3d\(([-\d.e\s,]+)\)$/u);
    let r, o;
    if (n)
        r = KM,
        o = n;
    else {
        const a = e.match(/^matrix\(([-\d.e\s,]+)\)$/u);
        r = HM,
        o = a
    }
    if (!o)
        return Ld(t);
    const s = r[t]
      , i = o[1].split(",").map(YM);
    return typeof s == "function" ? s(i) : i[s]
}
const GM = (e, t) => {
    const {transform: n="none"} = getComputedStyle(e);
    return _d(n, t)
}
;
function YM(e) {
    return parseFloat(e.trim())
}
const ms = ["transformPerspective", "x", "y", "z", "translateX", "translateY", "translateZ", "scale", "scaleX", "scaleY", "rotate", "rotateX", "rotateY", "rotateZ", "skew", "skewX", "skewY"]
  , gs = new Set(ms)
  , mg = e => e === ps || e === $
  , QM = new Set(["x", "y", "z"])
  , XM = ms.filter(e => !QM.has(e));
function qM(e) {
    const t = [];
    return XM.forEach(n => {
        const r = e.getValue(n);
        r !== void 0 && (t.push([n, r.get()]),
        r.set(n.startsWith("scale") ? 1 : 0))
    }
    ),
    t
}
const Jn = {
    width: ({x: e}, {paddingLeft: t="0", paddingRight: n="0"}) => e.max - e.min - parseFloat(t) - parseFloat(n),
    height: ({y: e}, {paddingTop: t="0", paddingBottom: n="0"}) => e.max - e.min - parseFloat(t) - parseFloat(n),
    top: (e, {top: t}) => parseFloat(t),
    left: (e, {left: t}) => parseFloat(t),
    bottom: ({y: e}, {top: t}) => parseFloat(t) + (e.max - e.min),
    right: ({x: e}, {left: t}) => parseFloat(t) + (e.max - e.min),
    x: (e, {transform: t}) => _d(t, "x"),
    y: (e, {transform: t}) => _d(t, "y")
};
Jn.translateX = Jn.x;
Jn.translateY = Jn.y;
const zr = new Set;
let Fd = !1
  , Vd = !1
  , Bd = !1;
function h1() {
    if (Vd) {
        const e = Array.from(zr).filter(r => r.needsMeasurement)
          , t = new Set(e.map(r => r.element))
          , n = new Map;
        t.forEach(r => {
            const o = qM(r);
            o.length && (n.set(r, o),
            r.render())
        }
        ),
        e.forEach(r => r.measureInitialState()),
        t.forEach(r => {
            r.render();
            const o = n.get(r);
            o && o.forEach( ([s,i]) => {
                var a;
                (a = r.getValue(s)) == null || a.set(i)
            }
            )
        }
        ),
        e.forEach(r => r.measureEndState()),
        e.forEach(r => {
            r.suspendedScrollY !== void 0 && window.scrollTo(0, r.suspendedScrollY)
        }
        )
    }
    Vd = !1,
    Fd = !1,
    zr.forEach(e => e.complete(Bd)),
    zr.clear()
}
function p1() {
    zr.forEach(e => {
        e.readKeyframes(),
        e.needsMeasurement && (Vd = !0)
    }
    )
}
function ZM() {
    Bd = !0,
    p1(),
    h1(),
    Bd = !1
}
class _h {
    constructor(t, n, r, o, s, i=!1) {
        this.state = "pending",
        this.isAsync = !1,
        this.needsMeasurement = !1,
        this.unresolvedKeyframes = [...t],
        this.onComplete = n,
        this.name = r,
        this.motionValue = o,
        this.element = s,
        this.isAsync = i
    }
    scheduleResolve() {
        this.state = "scheduled",
        this.isAsync ? (zr.add(this),
        Fd || (Fd = !0,
        pe.read(p1),
        pe.resolveKeyframes(h1))) : (this.readKeyframes(),
        this.complete())
    }
    readKeyframes() {
        const {unresolvedKeyframes: t, name: n, element: r, motionValue: o} = this;
        if (t[0] === null) {
            const s = o == null ? void 0 : o.get()
              , i = t[t.length - 1];
            if (s !== void 0)
                t[0] = s;
            else if (r && n) {
                const a = r.readValue(n, i);
                a != null && (t[0] = a)
            }
            t[0] === void 0 && (t[0] = i),
            o && s === void 0 && o.set(t[0])
        }
        WM(t)
    }
    setFinalKeyframe() {}
    measureInitialState() {}
    renderEndStyles() {}
    measureEndState() {}
    complete(t=!1) {
        this.state = "complete",
        this.onComplete(this.unresolvedKeyframes, this.finalKeyframe, t),
        zr.delete(this)
    }
    cancel() {
        this.state === "scheduled" && (zr.delete(this),
        this.state = "pending")
    }
    resume() {
        this.state === "pending" && this.scheduleResolve()
    }
}
const JM = e => e.startsWith("--");
function ej(e, t, n) {
    JM(t) ? e.style.setProperty(t, n) : e.style[t] = n
}
const tj = Th( () => window.ScrollTimeline !== void 0)
  , nj = {};
function rj(e, t) {
    const n = Th(e);
    return () => nj[t] ?? n()
}
const m1 = rj( () => {
    try {
        document.createElement("div").animate({
            opacity: 0
        }, {
            easing: "linear(0, 1)"
        })
    } catch {
        return !1
    }
    return !0
}
, "linearEasing")
  , Ls = ([e,t,n,r]) => `cubic-bezier(${e}, ${t}, ${n}, ${r})`
  , gg = {
    linear: "linear",
    ease: "ease",
    easeIn: "ease-in",
    easeOut: "ease-out",
    easeInOut: "ease-in-out",
    circIn: Ls([0, .65, .55, 1]),
    circOut: Ls([.55, 0, 1, .45]),
    backIn: Ls([.31, .01, .66, -.59]),
    backOut: Ls([.33, 1.53, .69, .99])
};
function g1(e, t) {
    if (e)
        return typeof e == "function" ? m1() ? c1(e, t) : "ease-out" : Jw(e) ? Ls(e) : Array.isArray(e) ? e.map(n => g1(n, t) || gg.easeOut) : gg[e]
}
function oj(e, t, n, {delay: r=0, duration: o=300, repeat: s=0, repeatType: i="loop", ease: a="easeOut", times: l}={}, u=void 0) {
    const c = {
        [t]: n
    };
    l && (c.offset = l);
    const d = g1(a, o);
    Array.isArray(d) && (c.easing = d);
    const f = {
        delay: r,
        duration: o,
        easing: Array.isArray(d) ? "linear" : d,
        fill: "both",
        iterations: s + 1,
        direction: i === "reverse" ? "alternate" : "normal"
    };
    return u && (f.pseudoElement = u),
    e.animate(c, f)
}
function v1(e) {
    return typeof e == "function" && "applyToOptions"in e
}
function sj({type: e, ...t}) {
    return v1(e) && m1() ? e.applyToOptions(t) : (t.duration ?? (t.duration = 300),
    t.ease ?? (t.ease = "easeOut"),
    t)
}
class ij extends Oh {
    constructor(t) {
        if (super(),
        this.finishedTime = null,
        this.isStopped = !1,
        this.manualStartTime = null,
        !t)
            return;
        const {element: n, name: r, keyframes: o, pseudoElement: s, allowFlatten: i=!1, finalKeyframe: a, onComplete: l} = t;
        this.isPseudoElement = !!s,
        this.allowFlatten = i,
        this.options = t,
        ns(typeof t.type != "string", `Mini animate() doesn't support "type" as a string.`, "mini-spring");
        const u = sj(t);
        this.animation = oj(n, r, o, u, s),
        u.autoplay === !1 && this.animation.pause(),
        this.animation.onfinish = () => {
            if (this.finishedTime = this.time,
            !s) {
                const c = Ih(o, this.options, a, this.speed);
                this.updateMotionValue ? this.updateMotionValue(c) : ej(n, r, c),
                this.animation.cancel()
            }
            l == null || l(),
            this.notifyFinished()
        }
    }
    play() {
        this.isStopped || (this.manualStartTime = null,
        this.animation.play(),
        this.state === "finished" && this.updateFinished())
    }
    pause() {
        this.animation.pause()
    }
    complete() {
        var t, n;
        (n = (t = this.animation).finish) == null || n.call(t)
    }
    cancel() {
        try {
            this.animation.cancel()
        } catch {}
    }
    stop() {
        if (this.isStopped)
            return;
        this.isStopped = !0;
        const {state: t} = this;
        t === "idle" || t === "finished" || (this.updateMotionValue ? this.updateMotionValue() : this.commitStyles(),
        this.isPseudoElement || this.cancel())
    }
    commitStyles() {
        var t, n;
        this.isPseudoElement || (n = (t = this.animation).commitStyles) == null || n.call(t)
    }
    get duration() {
        var n, r;
        const t = ((r = (n = this.animation.effect) == null ? void 0 : n.getComputedTiming) == null ? void 0 : r.call(n).duration) || 0;
        return Tt(Number(t))
    }
    get iterationDuration() {
        const {delay: t=0} = this.options || {};
        return this.duration + Tt(t)
    }
    get time() {
        return Tt(Number(this.animation.currentTime) || 0)
    }
    set time(t) {
        this.manualStartTime = null,
        this.finishedTime = null,
        this.animation.currentTime = cn(t)
    }
    get speed() {
        return this.animation.playbackRate
    }
    set speed(t) {
        t < 0 && (this.finishedTime = null),
        this.animation.playbackRate = t
    }
    get state() {
        return this.finishedTime !== null ? "finished" : this.animation.playState
    }
    get startTime() {
        return this.manualStartTime ?? Number(this.animation.startTime)
    }
    set startTime(t) {
        this.manualStartTime = this.animation.startTime = t
    }
    attachTimeline({timeline: t, observe: n}) {
        var r;
        return this.allowFlatten && ((r = this.animation.effect) == null || r.updateTiming({
            easing: "linear"
        })),
        this.animation.onfinish = null,
        t && tj() ? (this.animation.timeline = t,
        Rt) : n(this)
    }
}
const y1 = {
    anticipate: Qw,
    backInOut: Yw,
    circInOut: qw
};
function aj(e) {
    return e in y1
}
function lj(e) {
    typeof e.ease == "string" && aj(e.ease) && (e.ease = y1[e.ease])
}
const ic = 10;
class uj extends ij {
    constructor(t) {
        lj(t),
        f1(t),
        super(t),
        t.startTime !== void 0 && (this.startTime = t.startTime),
        this.options = t
    }
    updateMotionValue(t) {
        const {motionValue: n, onUpdate: r, onComplete: o, element: s, ...i} = this.options;
        if (!n)
            return;
        if (t !== void 0) {
            n.set(t);
            return
        }
        const a = new Lh({
            ...i,
            autoplay: !1
        })
          , l = Math.max(ic, Je.now() - this.startTime)
          , u = hn(0, ic, l - ic);
        n.setWithVelocity(a.sample(Math.max(0, l - u)).value, a.sample(l).value, u),
        a.stop()
    }
}
const vg = (e, t) => t === "zIndex" ? !1 : !!(typeof e == "number" || Array.isArray(e) || typeof e == "string" && (hr.test(e) || e === "0") && !e.startsWith("url("));
function cj(e) {
    const t = e[0];
    if (e.length === 1)
        return !0;
    for (let n = 0; n < e.length; n++)
        if (e[n] !== t)
            return !0
}
function dj(e, t, n, r) {
    const o = e[0];
    if (o === null)
        return !1;
    if (t === "display" || t === "visibility")
        return !0;
    const s = e[e.length - 1]
      , i = vg(o, t)
      , a = vg(s, t);
    return lu(i === a, `You are trying to animate ${t} from "${o}" to "${s}". "${i ? s : o}" is not an animatable value.`, "value-not-animatable"),
    !i || !a ? !1 : cj(e) || (n === "spring" || v1(n)) && r
}
function $d(e) {
    e.duration = 0,
    e.type = "keyframes"
}
const fj = new Set(["opacity", "clipPath", "filter", "transform"])
  , hj = Th( () => Object.hasOwnProperty.call(Element.prototype, "animate"));
function pj(e) {
    var c;
    const {motionValue: t, name: n, repeatDelay: r, repeatType: o, damping: s, type: i} = e;
    if (!(((c = t == null ? void 0 : t.owner) == null ? void 0 : c.current)instanceof HTMLElement))
        return !1;
    const {onUpdate: l, transformTemplate: u} = t.owner.getProps();
    return hj() && n && fj.has(n) && (n !== "transform" || !u) && !l && !r && o !== "mirror" && s !== 0 && i !== "inertia"
}
const mj = 40;
class gj extends Oh {
    constructor({autoplay: t=!0, delay: n=0, type: r="keyframes", repeat: o=0, repeatDelay: s=0, repeatType: i="loop", keyframes: a, name: l, motionValue: u, element: c, ...d}) {
        var S;
        super(),
        this.stop = () => {
            var p, w;
            this._animation && (this._animation.stop(),
            (p = this.stopTimeline) == null || p.call(this)),
            (w = this.keyframeResolver) == null || w.cancel()
        }
        ,
        this.createdAt = Je.now();
        const f = {
            autoplay: t,
            delay: n,
            type: r,
            repeat: o,
            repeatDelay: s,
            repeatType: i,
            name: l,
            motionValue: u,
            element: c,
            ...d
        }
          , h = (c == null ? void 0 : c.KeyframeResolver) || _h;
        this.keyframeResolver = new h(a, (p, w, v) => this.onKeyframesResolved(p, w, f, !v),l,u,c),
        (S = this.keyframeResolver) == null || S.scheduleResolve()
    }
    onKeyframesResolved(t, n, r, o) {
        var w, v;
        this.keyframeResolver = void 0;
        const {name: s, type: i, velocity: a, delay: l, isHandoff: u, onUpdate: c} = r;
        this.resolvedAt = Je.now(),
        dj(t, s, i, a) || ((Nn.instantAnimations || !l) && (c == null || c(Ih(t, r, n))),
        t[0] = t[t.length - 1],
        $d(r),
        r.repeat = 0);
        const f = {
            startTime: o ? this.resolvedAt ? this.resolvedAt - this.createdAt > mj ? this.resolvedAt : this.createdAt : this.createdAt : void 0,
            finalKeyframe: n,
            ...r,
            keyframes: t
        }
          , h = !u && pj(f)
          , S = (v = (w = f.motionValue) == null ? void 0 : w.owner) == null ? void 0 : v.current
          , p = h ? new uj({
            ...f,
            element: S
        }) : new Lh(f);
        p.finished.then( () => {
            this.notifyFinished()
        }
        ).catch(Rt),
        this.pendingTimeline && (this.stopTimeline = p.attachTimeline(this.pendingTimeline),
        this.pendingTimeline = void 0),
        this._animation = p
    }
    get finished() {
        return this._animation ? this.animation.finished : this._finished
    }
    then(t, n) {
        return this.finished.finally(t).then( () => {}
        )
    }
    get animation() {
        var t;
        return this._animation || ((t = this.keyframeResolver) == null || t.resume(),
        ZM()),
        this._animation
    }
    get duration() {
        return this.animation.duration
    }
    get iterationDuration() {
        return this.animation.iterationDuration
    }
    get time() {
        return this.animation.time
    }
    set time(t) {
        this.animation.time = t
    }
    get speed() {
        return this.animation.speed
    }
    get state() {
        return this.animation.state
    }
    set speed(t) {
        this.animation.speed = t
    }
    get startTime() {
        return this.animation.startTime
    }
    attachTimeline(t) {
        return this._animation ? this.stopTimeline = this.animation.attachTimeline(t) : this.pendingTimeline = t,
        () => this.stop()
    }
    play() {
        this.animation.play()
    }
    pause() {
        this.animation.pause()
    }
    complete() {
        this.animation.complete()
    }
    cancel() {
        var t;
        this._animation && this.animation.cancel(),
        (t = this.keyframeResolver) == null || t.cancel()
    }
}
function x1(e, t, n, r=0, o=1) {
    const s = Array.from(e).sort( (u, c) => u.sortNodePosition(c)).indexOf(t)
      , i = e.size
      , a = (i - 1) * r;
    return typeof n == "function" ? n(s, i) : o === 1 ? s * r : a - s * r
}
const vj = /^var\(--(?:([\w-]+)|([\w-]+), ?([a-zA-Z\d ()%#.,-]+))\)/u;
function yj(e) {
    const t = vj.exec(e);
    if (!t)
        return [, ];
    const [,n,r,o] = t;
    return [`--${n ?? r}`, o]
}
const xj = 4;
function w1(e, t, n=1) {
    ns(n <= xj, `Max CSS variable fallback depth detected in property "${e}". This may indicate a circular fallback dependency.`, "max-css-var-depth");
    const [r,o] = yj(e);
    if (!r)
        return;
    const s = window.getComputedStyle(t).getPropertyValue(r);
    if (s) {
        const i = s.trim();
        return Bw(i) ? parseFloat(i) : i
    }
    return Nh(o) ? w1(o, t, n + 1) : o
}
const wj = {
    type: "spring",
    stiffness: 500,
    damping: 25,
    restSpeed: 10
}
  , Sj = e => ({
    type: "spring",
    stiffness: 550,
    damping: e === 0 ? 2 * Math.sqrt(550) : 30,
    restSpeed: 10
})
  , Cj = {
    type: "keyframes",
    duration: .8
}
  , bj = {
    type: "keyframes",
    ease: [.25, .1, .35, 1],
    duration: .3
}
  , Ej = (e, {keyframes: t}) => t.length > 2 ? Cj : gs.has(e) ? e.startsWith("scale") ? Sj(t[1]) : wj : bj
  , Tj = e => e !== null;
function Pj(e, {repeat: t, repeatType: n="loop"}, r) {
    const o = e.filter(Tj)
      , s = t && n !== "loop" && t % 2 === 1 ? 0 : o.length - 1;
    return !s || r === void 0 ? o[s] : r
}
function Fh(e, t) {
    return (e == null ? void 0 : e[t]) ?? (e == null ? void 0 : e.default) ?? e
}
function Rj({when: e, delay: t, delayChildren: n, staggerChildren: r, staggerDirection: o, repeat: s, repeatType: i, repeatDelay: a, from: l, elapsed: u, ...c}) {
    return !!Object.keys(c).length
}
const Vh = (e, t, n, r={}, o, s) => i => {
    const a = Fh(r, e) || {}
      , l = a.delay || r.delay || 0;
    let {elapsed: u=0} = r;
    u = u - cn(l);
    const c = {
        keyframes: Array.isArray(n) ? n : [null, n],
        ease: "easeOut",
        velocity: t.getVelocity(),
        ...a,
        delay: -u,
        onUpdate: f => {
            t.set(f),
            a.onUpdate && a.onUpdate(f)
        }
        ,
        onComplete: () => {
            i(),
            a.onComplete && a.onComplete()
        }
        ,
        name: e,
        motionValue: t,
        element: s ? void 0 : o
    };
    Rj(a) || Object.assign(c, Ej(e, c)),
    c.duration && (c.duration = cn(c.duration)),
    c.repeatDelay && (c.repeatDelay = cn(c.repeatDelay)),
    c.from !== void 0 && (c.keyframes[0] = c.from);
    let d = !1;
    if ((c.type === !1 || c.duration === 0 && !c.repeatDelay) && ($d(c),
    c.delay === 0 && (d = !0)),
    (Nn.instantAnimations || Nn.skipAnimations) && (d = !0,
    $d(c),
    c.delay = 0),
    c.allowFlatten = !a.type && !a.ease,
    d && !s && t.get() !== void 0) {
        const f = Pj(c.keyframes, a);
        if (f !== void 0) {
            pe.update( () => {
                c.onUpdate(f),
                c.onComplete()
            }
            );
            return
        }
    }
    return a.isSync ? new Lh(c) : new gj(c)
}
;
function yg(e) {
    const t = [{}, {}];
    return e == null || e.values.forEach( (n, r) => {
        t[0][r] = n.get(),
        t[1][r] = n.getVelocity()
    }
    ),
    t
}
function Bh(e, t, n, r) {
    if (typeof t == "function") {
        const [o,s] = yg(r);
        t = t(n !== void 0 ? n : e.custom, o, s)
    }
    if (typeof t == "string" && (t = e.variants && e.variants[t]),
    typeof t == "function") {
        const [o,s] = yg(r);
        t = t(n !== void 0 ? n : e.custom, o, s)
    }
    return t
}
function Lo(e, t, n) {
    const r = e.getProps();
    return Bh(r, t, n !== void 0 ? n : r.custom, e)
}
const S1 = new Set(["width", "height", "top", "left", "right", "bottom", ...ms])
  , xg = 30
  , kj = e => !isNaN(parseFloat(e));
class Nj {
    constructor(t, n={}) {
        this.canTrackVelocity = null,
        this.events = {},
        this.updateAndNotify = r => {
            var s;
            const o = Je.now();
            if (this.updatedAt !== o && this.setPrevFrameValue(),
            this.prev = this.current,
            this.setCurrent(r),
            this.current !== this.prev && ((s = this.events.change) == null || s.notify(this.current),
            this.dependents))
                for (const i of this.dependents)
                    i.dirty()
        }
        ,
        this.hasAnimated = !1,
        this.setCurrent(t),
        this.owner = n.owner
    }
    setCurrent(t) {
        this.current = t,
        this.updatedAt = Je.now(),
        this.canTrackVelocity === null && t !== void 0 && (this.canTrackVelocity = kj(this.current))
    }
    setPrevFrameValue(t=this.current) {
        this.prevFrameValue = t,
        this.prevUpdatedAt = this.updatedAt
    }
    onChange(t) {
        return this.on("change", t)
    }
    on(t, n) {
        this.events[t] || (this.events[t] = new Ph);
        const r = this.events[t].add(n);
        return t === "change" ? () => {
            r(),
            pe.read( () => {
                this.events.change.getSize() || this.stop()
            }
            )
        }
        : r
    }
    clearListeners() {
        for (const t in this.events)
            this.events[t].clear()
    }
    attach(t, n) {
        this.passiveEffect = t,
        this.stopPassiveEffect = n
    }
    set(t) {
        this.passiveEffect ? this.passiveEffect(t, this.updateAndNotify) : this.updateAndNotify(t)
    }
    setWithVelocity(t, n, r) {
        this.set(n),
        this.prev = void 0,
        this.prevFrameValue = t,
        this.prevUpdatedAt = this.updatedAt - r
    }
    jump(t, n=!0) {
        this.updateAndNotify(t),
        this.prev = t,
        this.prevUpdatedAt = this.prevFrameValue = void 0,
        n && this.stop(),
        this.stopPassiveEffect && this.stopPassiveEffect()
    }
    dirty() {
        var t;
        (t = this.events.change) == null || t.notify(this.current)
    }
    addDependent(t) {
        this.dependents || (this.dependents = new Set),
        this.dependents.add(t)
    }
    removeDependent(t) {
        this.dependents && this.dependents.delete(t)
    }
    get() {
        return this.current
    }
    getPrevious() {
        return this.prev
    }
    getVelocity() {
        const t = Je.now();
        if (!this.canTrackVelocity || this.prevFrameValue === void 0 || t - this.updatedAt > xg)
            return 0;
        const n = Math.min(this.updatedAt - this.prevUpdatedAt, xg);
        return Uw(parseFloat(this.current) - parseFloat(this.prevFrameValue), n)
    }
    start(t) {
        return this.stop(),
        new Promise(n => {
            this.hasAnimated = !0,
            this.animation = t(n),
            this.events.animationStart && this.events.animationStart.notify()
        }
        ).then( () => {
            this.events.animationComplete && this.events.animationComplete.notify(),
            this.clearAnimation()
        }
        )
    }
    stop() {
        this.animation && (this.animation.stop(),
        this.events.animationCancel && this.events.animationCancel.notify()),
        this.clearAnimation()
    }
    isAnimating() {
        return !!this.animation
    }
    clearAnimation() {
        delete this.animation
    }
    destroy() {
        var t, n;
        (t = this.dependents) == null || t.clear(),
        (n = this.events.destroy) == null || n.notify(),
        this.clearListeners(),
        this.stop(),
        this.stopPassiveEffect && this.stopPassiveEffect()
    }
}
function rs(e, t) {
    return new Nj(e,t)
}
const zd = e => Array.isArray(e);
function Aj(e, t, n) {
    e.hasValue(t) ? e.getValue(t).set(n) : e.addValue(t, rs(n))
}
function Mj(e) {
    return zd(e) ? e[e.length - 1] || 0 : e
}
function jj(e, t) {
    const n = Lo(e, t);
    let {transitionEnd: r={}, transition: o={}, ...s} = n || {};
    s = {
        ...s,
        ...r
    };
    for (const i in s) {
        const a = Mj(s[i]);
        Aj(e, i, a)
    }
}
const Ye = e => !!(e && e.getVelocity);
function Dj(e) {
    return !!(Ye(e) && e.add)
}
function Ud(e, t) {
    const n = e.getValue("willChange");
    if (Dj(n))
        return n.add(t);
    if (!n && Nn.WillChange) {
        const r = new Nn.WillChange("auto");
        e.addValue("willChange", r),
        r.add(t)
    }
}
function $h(e) {
    return e.replace(/([A-Z])/g, t => `-${t.toLowerCase()}`)
}
const Ij = "framerAppearId"
  , C1 = "data-" + $h(Ij);
function b1(e) {
    return e.props[C1]
}
function Oj({protectedKeys: e, needsAnimating: t}, n) {
    const r = e.hasOwnProperty(n) && t[n] !== !0;
    return t[n] = !1,
    r
}
function E1(e, t, {delay: n=0, transitionOverride: r, type: o}={}) {
    let {transition: s=e.getDefaultTransition(), transitionEnd: i, ...a} = t;
    const l = s == null ? void 0 : s.reduceMotion;
    r && (s = r);
    const u = []
      , c = o && e.animationState && e.animationState.getState()[o];
    for (const d in a) {
        const f = e.getValue(d, e.latestValues[d] ?? null)
          , h = a[d];
        if (h === void 0 || c && Oj(c, d))
            continue;
        const S = {
            delay: n,
            ...Fh(s || {}, d)
        }
          , p = f.get();
        if (p !== void 0 && !f.isAnimating && !Array.isArray(h) && h === p && !S.velocity)
            continue;
        let w = !1;
        if (window.MotionHandoffAnimation) {
            const x = b1(e);
            if (x) {
                const C = window.MotionHandoffAnimation(x, d, pe);
                C !== null && (S.startTime = C,
                w = !0)
            }
        }
        Ud(e, d);
        const v = l ?? e.shouldReduceMotion;
        f.start(Vh(d, f, h, v && S1.has(d) ? {
            type: !1
        } : S, e, w));
        const g = f.animation;
        g && u.push(g)
    }
    return i && Promise.all(u).then( () => {
        pe.update( () => {
            i && jj(e, i)
        }
        )
    }
    ),
    u
}
function Wd(e, t, n={}) {
    var l;
    const r = Lo(e, t, n.type === "exit" ? (l = e.presenceContext) == null ? void 0 : l.custom : void 0);
    let {transition: o=e.getDefaultTransition() || {}} = r || {};
    n.transitionOverride && (o = n.transitionOverride);
    const s = r ? () => Promise.all(E1(e, r, n)) : () => Promise.resolve()
      , i = e.variantChildren && e.variantChildren.size ? (u=0) => {
        const {delayChildren: c=0, staggerChildren: d, staggerDirection: f} = o;
        return Lj(e, t, u, c, d, f, n)
    }
    : () => Promise.resolve()
      , {when: a} = o;
    if (a) {
        const [u,c] = a === "beforeChildren" ? [s, i] : [i, s];
        return u().then( () => c())
    } else
        return Promise.all([s(), i(n.delay)])
}
function Lj(e, t, n=0, r=0, o=0, s=1, i) {
    const a = [];
    for (const l of e.variantChildren)
        l.notify("AnimationStart", t),
        a.push(Wd(l, t, {
            ...i,
            delay: n + (typeof r == "function" ? 0 : r) + x1(e.variantChildren, l, r, o, s)
        }).then( () => l.notify("AnimationComplete", t)));
    return Promise.all(a)
}
function _j(e, t, n={}) {
    e.notify("AnimationStart", t);
    let r;
    if (Array.isArray(t)) {
        const o = t.map(s => Wd(e, s, n));
        r = Promise.all(o)
    } else if (typeof t == "string")
        r = Wd(e, t, n);
    else {
        const o = typeof t == "function" ? Lo(e, t, n.custom) : t;
        r = Promise.all(E1(e, o, n))
    }
    return r.then( () => {
        e.notify("AnimationComplete", t)
    }
    )
}
const Fj = {
    test: e => e === "auto",
    parse: e => e
}
  , T1 = e => t => t.test(e)
  , P1 = [ps, $, dn, Vn, cM, uM, Fj]
  , wg = e => P1.find(T1(e));
function Vj(e) {
    return typeof e == "number" ? e === 0 : e !== null ? e === "none" || e === "0" || zw(e) : !0
}
const Bj = new Set(["brightness", "contrast", "saturate", "opacity"]);
function $j(e) {
    const [t,n] = e.slice(0, -1).split("(");
    if (t === "drop-shadow")
        return e;
    const [r] = n.match(Ah) || [];
    if (!r)
        return e;
    const o = n.replace(r, "");
    let s = Bj.has(t) ? 1 : 0;
    return r !== n && (s *= 100),
    t + "(" + s + o + ")"
}
const zj = /\b([a-z-]*)\(.*?\)/gu
  , Hd = {
    ...hr,
    getAnimatableNone: e => {
        const t = e.match(zj);
        return t ? t.map($j).join(" ") : e
    }
}
  , Sg = {
    ...ps,
    transform: Math.round
}
  , Uj = {
    rotate: Vn,
    rotateX: Vn,
    rotateY: Vn,
    rotateZ: Vn,
    scale: pa,
    scaleX: pa,
    scaleY: pa,
    scaleZ: pa,
    skew: Vn,
    skewX: Vn,
    skewY: Vn,
    distance: $,
    translateX: $,
    translateY: $,
    translateZ: $,
    x: $,
    y: $,
    z: $,
    perspective: $,
    transformPerspective: $,
    opacity: Ei,
    originX: ag,
    originY: ag,
    originZ: $
}
  , zh = {
    borderWidth: $,
    borderTopWidth: $,
    borderRightWidth: $,
    borderBottomWidth: $,
    borderLeftWidth: $,
    borderRadius: $,
    borderTopLeftRadius: $,
    borderTopRightRadius: $,
    borderBottomRightRadius: $,
    borderBottomLeftRadius: $,
    width: $,
    maxWidth: $,
    height: $,
    maxHeight: $,
    top: $,
    right: $,
    bottom: $,
    left: $,
    inset: $,
    insetBlock: $,
    insetBlockStart: $,
    insetBlockEnd: $,
    insetInline: $,
    insetInlineStart: $,
    insetInlineEnd: $,
    padding: $,
    paddingTop: $,
    paddingRight: $,
    paddingBottom: $,
    paddingLeft: $,
    paddingBlock: $,
    paddingBlockStart: $,
    paddingBlockEnd: $,
    paddingInline: $,
    paddingInlineStart: $,
    paddingInlineEnd: $,
    margin: $,
    marginTop: $,
    marginRight: $,
    marginBottom: $,
    marginLeft: $,
    marginBlock: $,
    marginBlockStart: $,
    marginBlockEnd: $,
    marginInline: $,
    marginInlineStart: $,
    marginInlineEnd: $,
    fontSize: $,
    backgroundPositionX: $,
    backgroundPositionY: $,
    ...Uj,
    zIndex: Sg,
    fillOpacity: Ei,
    strokeOpacity: Ei,
    numOctaves: Sg
}
  , Wj = {
    ...zh,
    color: Ne,
    backgroundColor: Ne,
    outlineColor: Ne,
    fill: Ne,
    stroke: Ne,
    borderColor: Ne,
    borderTopColor: Ne,
    borderRightColor: Ne,
    borderBottomColor: Ne,
    borderLeftColor: Ne,
    filter: Hd,
    WebkitFilter: Hd
}
  , R1 = e => Wj[e];
function k1(e, t) {
    let n = R1(e);
    return n !== Hd && (n = hr),
    n.getAnimatableNone ? n.getAnimatableNone(t) : void 0
}
const Hj = new Set(["auto", "none", "0"]);
function Kj(e, t, n) {
    let r = 0, o;
    for (; r < e.length && !o; ) {
        const s = e[r];
        typeof s == "string" && !Hj.has(s) && Ti(s).values.length && (o = e[r]),
        r++
    }
    if (o && n)
        for (const s of t)
            e[s] = k1(n, o)
}
class Gj extends _h {
    constructor(t, n, r, o, s) {
        super(t, n, r, o, s, !0)
    }
    readKeyframes() {
        const {unresolvedKeyframes: t, element: n, name: r} = this;
        if (!n || !n.current)
            return;
        super.readKeyframes();
        for (let c = 0; c < t.length; c++) {
            let d = t[c];
            if (typeof d == "string" && (d = d.trim(),
            Nh(d))) {
                const f = w1(d, n.current);
                f !== void 0 && (t[c] = f),
                c === t.length - 1 && (this.finalKeyframe = d)
            }
        }
        if (this.resolveNoneKeyframes(),
        !S1.has(r) || t.length !== 2)
            return;
        const [o,s] = t
          , i = wg(o)
          , a = wg(s)
          , l = ig(o)
          , u = ig(s);
        if (l !== u && Jn[r]) {
            this.needsMeasurement = !0;
            return
        }
        if (i !== a)
            if (mg(i) && mg(a))
                for (let c = 0; c < t.length; c++) {
                    const d = t[c];
                    typeof d == "string" && (t[c] = parseFloat(d))
                }
            else
                Jn[r] && (this.needsMeasurement = !0)
    }
    resolveNoneKeyframes() {
        const {unresolvedKeyframes: t, name: n} = this
          , r = [];
        for (let o = 0; o < t.length; o++)
            (t[o] === null || Vj(t[o])) && r.push(o);
        r.length && Kj(t, r, n)
    }
    measureInitialState() {
        const {element: t, unresolvedKeyframes: n, name: r} = this;
        if (!t || !t.current)
            return;
        r === "height" && (this.suspendedScrollY = window.pageYOffset),
        this.measuredOrigin = Jn[r](t.measureViewportBox(), window.getComputedStyle(t.current)),
        n[0] = this.measuredOrigin;
        const o = n[n.length - 1];
        o !== void 0 && t.getValue(r, o).jump(o, !1)
    }
    measureEndState() {
        var a;
        const {element: t, name: n, unresolvedKeyframes: r} = this;
        if (!t || !t.current)
            return;
        const o = t.getValue(n);
        o && o.jump(this.measuredOrigin, !1);
        const s = r.length - 1
          , i = r[s];
        r[s] = Jn[n](t.measureViewportBox(), window.getComputedStyle(t.current)),
        i !== null && this.finalKeyframe === void 0 && (this.finalKeyframe = i),
        (a = this.removedTransforms) != null && a.length && this.removedTransforms.forEach( ([l,u]) => {
            t.getValue(l).set(u)
        }
        ),
        this.resolveNoneKeyframes()
    }
}
function Yj(e, t, n) {
    if (e == null)
        return [];
    if (e instanceof EventTarget)
        return [e];
    if (typeof e == "string") {
        const o = document.querySelectorAll(e);
        return o ? Array.from(o) : []
    }
    return Array.from(e).filter(r => r != null)
}
const N1 = (e, t) => t && typeof e == "number" ? t.transform(e) : e;
function Kd(e) {
    return $w(e) && "offsetHeight"in e
}
const {schedule: Uh, cancel: BL} = e1(queueMicrotask, !1)
  , Lt = {
    x: !1,
    y: !1
};
function A1() {
    return Lt.x || Lt.y
}
function Qj(e) {
    return e === "x" || e === "y" ? Lt[e] ? null : (Lt[e] = !0,
    () => {
        Lt[e] = !1
    }
    ) : Lt.x || Lt.y ? null : (Lt.x = Lt.y = !0,
    () => {
        Lt.x = Lt.y = !1
    }
    )
}
function M1(e, t) {
    const n = Yj(e)
      , r = new AbortController
      , o = {
        passive: !0,
        ...t,
        signal: r.signal
    };
    return [n, o, () => r.abort()]
}
function Cg(e) {
    return !(e.pointerType === "touch" || A1())
}
function Xj(e, t, n={}) {
    const [r,o,s] = M1(e, n)
      , i = a => {
        if (!Cg(a))
            return;
        const {target: l} = a
          , u = t(l, a);
        if (typeof u != "function" || !l)
            return;
        const c = d => {
            Cg(d) && (u(d),
            l.removeEventListener("pointerleave", c))
        }
        ;
        l.addEventListener("pointerleave", c, o)
    }
    ;
    return r.forEach(a => {
        a.addEventListener("pointerenter", i, o)
    }
    ),
    s
}
const j1 = (e, t) => t ? e === t ? !0 : j1(e, t.parentElement) : !1
  , Wh = e => e.pointerType === "mouse" ? typeof e.button != "number" || e.button <= 0 : e.isPrimary !== !1
  , qj = new Set(["BUTTON", "INPUT", "SELECT", "TEXTAREA", "A"]);
function D1(e) {
    return qj.has(e.tagName) || e.isContentEditable === !0
}
const _a = new WeakSet;
function bg(e) {
    return t => {
        t.key === "Enter" && e(t)
    }
}
function ac(e, t) {
    e.dispatchEvent(new PointerEvent("pointer" + t,{
        isPrimary: !0,
        bubbles: !0
    }))
}
const Zj = (e, t) => {
    const n = e.currentTarget;
    if (!n)
        return;
    const r = bg( () => {
        if (_a.has(n))
            return;
        ac(n, "down");
        const o = bg( () => {
            ac(n, "up")
        }
        )
          , s = () => ac(n, "cancel");
        n.addEventListener("keyup", o, t),
        n.addEventListener("blur", s, t)
    }
    );
    n.addEventListener("keydown", r, t),
    n.addEventListener("blur", () => n.removeEventListener("keydown", r), t)
}
;
function Eg(e) {
    return Wh(e) && !A1()
}
function Jj(e, t, n={}) {
    const [r,o,s] = M1(e, n)
      , i = a => {
        const l = a.currentTarget;
        if (!Eg(a))
            return;
        _a.add(l);
        const u = t(l, a)
          , c = (h, S) => {
            window.removeEventListener("pointerup", d),
            window.removeEventListener("pointercancel", f),
            _a.has(l) && _a.delete(l),
            Eg(h) && typeof u == "function" && u(h, {
                success: S
            })
        }
          , d = h => {
            c(h, l === window || l === document || n.useGlobalTarget || j1(l, h.target))
        }
          , f = h => {
            c(h, !1)
        }
        ;
        window.addEventListener("pointerup", d, o),
        window.addEventListener("pointercancel", f, o)
    }
    ;
    return r.forEach(a => {
        (n.useGlobalTarget ? window : a).addEventListener("pointerdown", i, o),
        Kd(a) && (a.addEventListener("focus", u => Zj(u, o)),
        !D1(a) && !a.hasAttribute("tabindex") && (a.tabIndex = 0))
    }
    ),
    s
}
function I1(e) {
    return $w(e) && "ownerSVGElement"in e
}
function eD(e) {
    return I1(e) && e.tagName === "svg"
}
const tD = [...P1, Ne, hr]
  , nD = e => tD.find(T1(e))
  , Tg = () => ({
    translate: 0,
    scale: 1,
    origin: 0,
    originPoint: 0
})
  , Eo = () => ({
    x: Tg(),
    y: Tg()
})
  , Pg = () => ({
    min: 0,
    max: 0
})
  , Me = () => ({
    x: Pg(),
    y: Pg()
})
  , Gd = {
    current: null
}
  , O1 = {
    current: !1
}
  , rD = typeof window < "u";
function oD() {
    if (O1.current = !0,
    !!rD)
        if (window.matchMedia) {
            const e = window.matchMedia("(prefers-reduced-motion)")
              , t = () => Gd.current = e.matches;
            e.addEventListener("change", t),
            t()
        } else
            Gd.current = !1
}
const sD = new WeakMap;
function uu(e) {
    return e !== null && typeof e == "object" && typeof e.start == "function"
}
function Pi(e) {
    return typeof e == "string" || Array.isArray(e)
}
const Hh = ["animate", "whileInView", "whileFocus", "whileHover", "whileTap", "whileDrag", "exit"]
  , Kh = ["initial", ...Hh];
function cu(e) {
    return uu(e.animate) || Kh.some(t => Pi(e[t]))
}
function L1(e) {
    return !!(cu(e) || e.variants)
}
function iD(e, t, n) {
    for (const r in t) {
        const o = t[r]
          , s = n[r];
        if (Ye(o))
            e.addValue(r, o);
        else if (Ye(s))
            e.addValue(r, rs(o, {
                owner: e
            }));
        else if (s !== o)
            if (e.hasValue(r)) {
                const i = e.getValue(r);
                i.liveStyle === !0 ? i.jump(o) : i.hasAnimated || i.set(o)
            } else {
                const i = e.getStaticValue(r);
                e.addValue(r, rs(i !== void 0 ? i : o, {
                    owner: e
                }))
            }
    }
    for (const r in n)
        t[r] === void 0 && e.removeValue(r);
    return t
}
const Rg = ["AnimationStart", "AnimationComplete", "Update", "BeforeLayoutMeasure", "LayoutMeasure", "LayoutAnimationStart", "LayoutAnimationComplete"];
let bl = {};
function _1(e) {
    bl = e
}
function aD() {
    return bl
}
class lD {
    scrapeMotionValuesFromProps(t, n, r) {
        return {}
    }
    constructor({parent: t, props: n, presenceContext: r, reducedMotionConfig: o, blockInitialAnimation: s, visualState: i}, a={}) {
        this.current = null,
        this.children = new Set,
        this.isVariantNode = !1,
        this.isControllingVariants = !1,
        this.shouldReduceMotion = null,
        this.values = new Map,
        this.KeyframeResolver = _h,
        this.features = {},
        this.valueSubscriptions = new Map,
        this.prevMotionValues = {},
        this.events = {},
        this.propEventSubscriptions = {},
        this.notifyUpdate = () => this.notify("Update", this.latestValues),
        this.render = () => {
            this.current && (this.triggerBuild(),
            this.renderInstance(this.current, this.renderState, this.props.style, this.projection))
        }
        ,
        this.renderScheduledAt = 0,
        this.scheduleRender = () => {
            const f = Je.now();
            this.renderScheduledAt < f && (this.renderScheduledAt = f,
            pe.render(this.render, !1, !0))
        }
        ;
        const {latestValues: l, renderState: u} = i;
        this.latestValues = l,
        this.baseTarget = {
            ...l
        },
        this.initialValues = n.initial ? {
            ...l
        } : {},
        this.renderState = u,
        this.parent = t,
        this.props = n,
        this.presenceContext = r,
        this.depth = t ? t.depth + 1 : 0,
        this.reducedMotionConfig = o,
        this.options = a,
        this.blockInitialAnimation = !!s,
        this.isControllingVariants = cu(n),
        this.isVariantNode = L1(n),
        this.isVariantNode && (this.variantChildren = new Set),
        this.manuallyAnimateOnMount = !!(t && t.current);
        const {willChange: c, ...d} = this.scrapeMotionValuesFromProps(n, {}, this);
        for (const f in d) {
            const h = d[f];
            l[f] !== void 0 && Ye(h) && h.set(l[f])
        }
    }
    mount(t) {
        var n;
        this.current = t,
        sD.set(t, this),
        this.projection && !this.projection.instance && this.projection.mount(t),
        this.parent && this.isVariantNode && !this.isControllingVariants && (this.removeFromVariantTree = this.parent.addVariantChild(this)),
        this.values.forEach( (r, o) => this.bindToMotionValue(o, r)),
        this.reducedMotionConfig === "never" ? this.shouldReduceMotion = !1 : this.reducedMotionConfig === "always" ? this.shouldReduceMotion = !0 : (O1.current || oD(),
        this.shouldReduceMotion = Gd.current),
        (n = this.parent) == null || n.addChild(this),
        this.update(this.props, this.presenceContext)
    }
    unmount() {
        var t;
        this.projection && this.projection.unmount(),
        fr(this.notifyUpdate),
        fr(this.render),
        this.valueSubscriptions.forEach(n => n()),
        this.valueSubscriptions.clear(),
        this.removeFromVariantTree && this.removeFromVariantTree(),
        (t = this.parent) == null || t.removeChild(this);
        for (const n in this.events)
            this.events[n].clear();
        for (const n in this.features) {
            const r = this.features[n];
            r && (r.unmount(),
            r.isMounted = !1)
        }
        this.current = null
    }
    addChild(t) {
        this.children.add(t),
        this.enteringChildren ?? (this.enteringChildren = new Set),
        this.enteringChildren.add(t)
    }
    removeChild(t) {
        this.children.delete(t),
        this.enteringChildren && this.enteringChildren.delete(t)
    }
    bindToMotionValue(t, n) {
        this.valueSubscriptions.has(t) && this.valueSubscriptions.get(t)();
        const r = gs.has(t);
        r && this.onBindTransform && this.onBindTransform();
        const o = n.on("change", i => {
            this.latestValues[t] = i,
            this.props.onUpdate && pe.preRender(this.notifyUpdate),
            r && this.projection && (this.projection.isTransformDirty = !0),
            this.scheduleRender()
        }
        );
        let s;
        typeof window < "u" && window.MotionCheckAppearSync && (s = window.MotionCheckAppearSync(this, t, n)),
        this.valueSubscriptions.set(t, () => {
            o(),
            s && s(),
            n.owner && n.stop()
        }
        )
    }
    sortNodePosition(t) {
        return !this.current || !this.sortInstanceNodePosition || this.type !== t.type ? 0 : this.sortInstanceNodePosition(this.current, t.current)
    }
    updateFeatures() {
        let t = "animation";
        for (t in bl) {
            const n = bl[t];
            if (!n)
                continue;
            const {isEnabled: r, Feature: o} = n;
            if (!this.features[t] && o && r(this.props) && (this.features[t] = new o(this)),
            this.features[t]) {
                const s = this.features[t];
                s.isMounted ? s.update() : (s.mount(),
                s.isMounted = !0)
            }
        }
    }
    triggerBuild() {
        this.build(this.renderState, this.latestValues, this.props)
    }
    measureViewportBox() {
        return this.current ? this.measureInstanceViewportBox(this.current, this.props) : Me()
    }
    getStaticValue(t) {
        return this.latestValues[t]
    }
    setStaticValue(t, n) {
        this.latestValues[t] = n
    }
    update(t, n) {
        (t.transformTemplate || this.props.transformTemplate) && this.scheduleRender(),
        this.prevProps = this.props,
        this.props = t,
        this.prevPresenceContext = this.presenceContext,
        this.presenceContext = n;
        for (let r = 0; r < Rg.length; r++) {
            const o = Rg[r];
            this.propEventSubscriptions[o] && (this.propEventSubscriptions[o](),
            delete this.propEventSubscriptions[o]);
            const s = "on" + o
              , i = t[s];
            i && (this.propEventSubscriptions[o] = this.on(o, i))
        }
        this.prevMotionValues = iD(this, this.scrapeMotionValuesFromProps(t, this.prevProps || {}, this), this.prevMotionValues),
        this.handleChildMotionValue && this.handleChildMotionValue()
    }
    getProps() {
        return this.props
    }
    getVariant(t) {
        return this.props.variants ? this.props.variants[t] : void 0
    }
    getDefaultTransition() {
        return this.props.transition
    }
    getTransformPagePoint() {
        return this.props.transformPagePoint
    }
    getClosestVariantNode() {
        return this.isVariantNode ? this : this.parent ? this.parent.getClosestVariantNode() : void 0
    }
    addVariantChild(t) {
        const n = this.getClosestVariantNode();
        if (n)
            return n.variantChildren && n.variantChildren.add(t),
            () => n.variantChildren.delete(t)
    }
    addValue(t, n) {
        const r = this.values.get(t);
        n !== r && (r && this.removeValue(t),
        this.bindToMotionValue(t, n),
        this.values.set(t, n),
        this.latestValues[t] = n.get())
    }
    removeValue(t) {
        this.values.delete(t);
        const n = this.valueSubscriptions.get(t);
        n && (n(),
        this.valueSubscriptions.delete(t)),
        delete this.latestValues[t],
        this.removeValueFromRenderState(t, this.renderState)
    }
    hasValue(t) {
        return this.values.has(t)
    }
    getValue(t, n) {
        if (this.props.values && this.props.values[t])
            return this.props.values[t];
        let r = this.values.get(t);
        return r === void 0 && n !== void 0 && (r = rs(n === null ? void 0 : n, {
            owner: this
        }),
        this.addValue(t, r)),
        r
    }
    readValue(t, n) {
        let r = this.latestValues[t] !== void 0 || !this.current ? this.latestValues[t] : this.getBaseTargetFromProps(this.props, t) ?? this.readValueFromInstance(this.current, t, this.options);
        return r != null && (typeof r == "string" && (Bw(r) || zw(r)) ? r = parseFloat(r) : !nD(r) && hr.test(n) && (r = k1(t, n)),
        this.setBaseTarget(t, Ye(r) ? r.get() : r)),
        Ye(r) ? r.get() : r
    }
    setBaseTarget(t, n) {
        this.baseTarget[t] = n
    }
    getBaseTarget(t) {
        var s;
        const {initial: n} = this.props;
        let r;
        if (typeof n == "string" || typeof n == "object") {
            const i = Bh(this.props, n, (s = this.presenceContext) == null ? void 0 : s.custom);
            i && (r = i[t])
        }
        if (n && r !== void 0)
            return r;
        const o = this.getBaseTargetFromProps(this.props, t);
        return o !== void 0 && !Ye(o) ? o : this.initialValues[t] !== void 0 && r === void 0 ? void 0 : this.baseTarget[t]
    }
    on(t, n) {
        return this.events[t] || (this.events[t] = new Ph),
        this.events[t].add(n)
    }
    notify(t, ...n) {
        this.events[t] && this.events[t].notify(...n)
    }
    scheduleRenderMicrotask() {
        Uh.render(this.render)
    }
}
class F1 extends lD {
    constructor() {
        super(...arguments),
        this.KeyframeResolver = Gj
    }
    sortInstanceNodePosition(t, n) {
        return t.compareDocumentPosition(n) & 2 ? 1 : -1
    }
    getBaseTargetFromProps(t, n) {
        const r = t.style;
        return r ? r[n] : void 0
    }
    removeValueFromRenderState(t, {vars: n, style: r}) {
        delete n[t],
        delete r[t]
    }
    handleChildMotionValue() {
        this.childSubscription && (this.childSubscription(),
        delete this.childSubscription);
        const {children: t} = this.props;
        Ye(t) && (this.childSubscription = t.on("change", n => {
            this.current && (this.current.textContent = `${n}`)
        }
        ))
    }
}
class vr {
    constructor(t) {
        this.isMounted = !1,
        this.node = t
    }
    update() {}
}
function V1({top: e, left: t, right: n, bottom: r}) {
    return {
        x: {
            min: t,
            max: n
        },
        y: {
            min: e,
            max: r
        }
    }
}
function uD({x: e, y: t}) {
    return {
        top: t.min,
        right: e.max,
        bottom: t.max,
        left: e.min
    }
}
function cD(e, t) {
    if (!t)
        return e;
    const n = t({
        x: e.left,
        y: e.top
    })
      , r = t({
        x: e.right,
        y: e.bottom
    });
    return {
        top: n.y,
        left: n.x,
        bottom: r.y,
        right: r.x
    }
}
function lc(e) {
    return e === void 0 || e === 1
}
function Yd({scale: e, scaleX: t, scaleY: n}) {
    return !lc(e) || !lc(t) || !lc(n)
}
function Rr(e) {
    return Yd(e) || B1(e) || e.z || e.rotate || e.rotateX || e.rotateY || e.skewX || e.skewY
}
function B1(e) {
    return kg(e.x) || kg(e.y)
}
function kg(e) {
    return e && e !== "0%"
}
function El(e, t, n) {
    const r = e - n
      , o = t * r;
    return n + o
}
function Ng(e, t, n, r, o) {
    return o !== void 0 && (e = El(e, o, r)),
    El(e, n, r) + t
}
function Qd(e, t=0, n=1, r, o) {
    e.min = Ng(e.min, t, n, r, o),
    e.max = Ng(e.max, t, n, r, o)
}
function $1(e, {x: t, y: n}) {
    Qd(e.x, t.translate, t.scale, t.originPoint),
    Qd(e.y, n.translate, n.scale, n.originPoint)
}
const Ag = .999999999999
  , Mg = 1.0000000000001;
function dD(e, t, n, r=!1) {
    const o = n.length;
    if (!o)
        return;
    t.x = t.y = 1;
    let s, i;
    for (let a = 0; a < o; a++) {
        s = n[a],
        i = s.projectionDelta;
        const {visualElement: l} = s.options;
        l && l.props.style && l.props.style.display === "contents" || (r && s.options.layoutScroll && s.scroll && s !== s.root && Po(e, {
            x: -s.scroll.offset.x,
            y: -s.scroll.offset.y
        }),
        i && (t.x *= i.x.scale,
        t.y *= i.y.scale,
        $1(e, i)),
        r && Rr(s.latestValues) && Po(e, s.latestValues))
    }
    t.x < Mg && t.x > Ag && (t.x = 1),
    t.y < Mg && t.y > Ag && (t.y = 1)
}
function To(e, t) {
    e.min = e.min + t,
    e.max = e.max + t
}
function jg(e, t, n, r, o=.5) {
    const s = we(e.min, e.max, o);
    Qd(e, t, n, s, r)
}
function Po(e, t) {
    jg(e.x, t.x, t.scaleX, t.scale, t.originX),
    jg(e.y, t.y, t.scaleY, t.scale, t.originY)
}
function z1(e, t) {
    return V1(cD(e.getBoundingClientRect(), t))
}
function fD(e, t, n) {
    const r = z1(e, n)
      , {scroll: o} = t;
    return o && (To(r.x, o.offset.x),
    To(r.y, o.offset.y)),
    r
}
const hD = {
    x: "translateX",
    y: "translateY",
    z: "translateZ",
    transformPerspective: "perspective"
}
  , pD = ms.length;
function mD(e, t, n) {
    let r = ""
      , o = !0;
    for (let s = 0; s < pD; s++) {
        const i = ms[s]
          , a = e[i];
        if (a === void 0)
            continue;
        let l = !0;
        if (typeof a == "number")
            l = a === (i.startsWith("scale") ? 1 : 0);
        else {
            const u = parseFloat(a);
            l = i.startsWith("scale") ? u === 1 : u === 0
        }
        if (!l || n) {
            const u = N1(a, zh[i]);
            if (!l) {
                o = !1;
                const c = hD[i] || i;
                r += `${c}(${u}) `
            }
            n && (t[i] = u)
        }
    }
    return r = r.trim(),
    n ? r = n(t, o ? "" : r) : o && (r = "none"),
    r
}
function Gh(e, t, n) {
    const {style: r, vars: o, transformOrigin: s} = e;
    let i = !1
      , a = !1;
    for (const l in t) {
        const u = t[l];
        if (gs.has(l)) {
            i = !0;
            continue
        } else if (n1(l)) {
            o[l] = u;
            continue
        } else {
            const c = N1(u, zh[l]);
            l.startsWith("origin") ? (a = !0,
            s[l] = c) : r[l] = c
        }
    }
    if (t.transform || (i || n ? r.transform = mD(t, e.transform, n) : r.transform && (r.transform = "none")),
    a) {
        const {originX: l="50%", originY: u="50%", originZ: c=0} = s;
        r.transformOrigin = `${l} ${u} ${c}`
    }
}
function U1(e, {style: t, vars: n}, r, o) {
    const s = e.style;
    let i;
    for (i in t)
        s[i] = t[i];
    o == null || o.applyProjectionStyles(s, r);
    for (i in n)
        s.setProperty(i, n[i])
}
function Dg(e, t) {
    return t.max === t.min ? 0 : e / (t.max - t.min) * 100
}
const As = {
    correct: (e, t) => {
        if (!t.target)
            return e;
        if (typeof e == "string")
            if ($.test(e))
                e = parseFloat(e);
            else
                return e;
        const n = Dg(e, t.target.x)
          , r = Dg(e, t.target.y);
        return `${n}% ${r}%`
    }
}
  , gD = {
    correct: (e, {treeScale: t, projectionDelta: n}) => {
        const r = e
          , o = hr.parse(e);
        if (o.length > 5)
            return r;
        const s = hr.createTransformer(e)
          , i = typeof o[0] != "number" ? 1 : 0
          , a = n.x.scale * t.x
          , l = n.y.scale * t.y;
        o[0 + i] /= a,
        o[1 + i] /= l;
        const u = we(a, l, .5);
        return typeof o[2 + i] == "number" && (o[2 + i] /= u),
        typeof o[3 + i] == "number" && (o[3 + i] /= u),
        s(o)
    }
}
  , Xd = {
    borderRadius: {
        ...As,
        applyTo: ["borderTopLeftRadius", "borderTopRightRadius", "borderBottomLeftRadius", "borderBottomRightRadius"]
    },
    borderTopLeftRadius: As,
    borderTopRightRadius: As,
    borderBottomLeftRadius: As,
    borderBottomRightRadius: As,
    boxShadow: gD
};
function W1(e, {layout: t, layoutId: n}) {
    return gs.has(e) || e.startsWith("origin") || (t || n !== void 0) && (!!Xd[e] || e === "opacity")
}
function Yh(e, t, n) {
    var i;
    const r = e.style
      , o = t == null ? void 0 : t.style
      , s = {};
    if (!r)
        return s;
    for (const a in r)
        (Ye(r[a]) || o && Ye(o[a]) || W1(a, e) || ((i = n == null ? void 0 : n.getValue(a)) == null ? void 0 : i.liveStyle) !== void 0) && (s[a] = r[a]);
    return s
}
function vD(e) {
    return window.getComputedStyle(e)
}
class yD extends F1 {
    constructor() {
        super(...arguments),
        this.type = "html",
        this.renderInstance = U1
    }
    readValueFromInstance(t, n) {
        var r;
        if (gs.has(n))
            return (r = this.projection) != null && r.isProjecting ? Ld(n) : GM(t, n);
        {
            const o = vD(t)
              , s = (n1(n) ? o.getPropertyValue(n) : o[n]) || 0;
            return typeof s == "string" ? s.trim() : s
        }
    }
    measureInstanceViewportBox(t, {transformPagePoint: n}) {
        return z1(t, n)
    }
    build(t, n, r) {
        Gh(t, n, r.transformTemplate)
    }
    scrapeMotionValuesFromProps(t, n, r) {
        return Yh(t, n, r)
    }
}
const xD = {
    offset: "stroke-dashoffset",
    array: "stroke-dasharray"
}
  , wD = {
    offset: "strokeDashoffset",
    array: "strokeDasharray"
};
function SD(e, t, n=1, r=0, o=!0) {
    e.pathLength = 1;
    const s = o ? xD : wD;
    e[s.offset] = `${-r}`,
    e[s.array] = `${t} ${n}`
}
const CD = ["offsetDistance", "offsetPath", "offsetRotate", "offsetAnchor"];
function H1(e, {attrX: t, attrY: n, attrScale: r, pathLength: o, pathSpacing: s=1, pathOffset: i=0, ...a}, l, u, c) {
    if (Gh(e, a, u),
    l) {
        e.style.viewBox && (e.attrs.viewBox = e.style.viewBox);
        return
    }
    e.attrs = e.style,
    e.style = {};
    const {attrs: d, style: f} = e;
    d.transform && (f.transform = d.transform,
    delete d.transform),
    (f.transform || d.transformOrigin) && (f.transformOrigin = d.transformOrigin ?? "50% 50%",
    delete d.transformOrigin),
    f.transform && (f.transformBox = (c == null ? void 0 : c.transformBox) ?? "fill-box",
    delete d.transformBox);
    for (const h of CD)
        d[h] !== void 0 && (f[h] = d[h],
        delete d[h]);
    t !== void 0 && (d.x = t),
    n !== void 0 && (d.y = n),
    r !== void 0 && (d.scale = r),
    o !== void 0 && SD(d, o, s, i, !1)
}
const K1 = new Set(["baseFrequency", "diffuseConstant", "kernelMatrix", "kernelUnitLength", "keySplines", "keyTimes", "limitingConeAngle", "markerHeight", "markerWidth", "numOctaves", "targetX", "targetY", "surfaceScale", "specularConstant", "specularExponent", "stdDeviation", "tableValues", "viewBox", "gradientTransform", "pathLength", "startOffset", "textLength", "lengthAdjust"])
  , G1 = e => typeof e == "string" && e.toLowerCase() === "svg";
function bD(e, t, n, r) {
    U1(e, t, void 0, r);
    for (const o in t.attrs)
        e.setAttribute(K1.has(o) ? o : $h(o), t.attrs[o])
}
function Y1(e, t, n) {
    const r = Yh(e, t, n);
    for (const o in e)
        if (Ye(e[o]) || Ye(t[o])) {
            const s = ms.indexOf(o) !== -1 ? "attr" + o.charAt(0).toUpperCase() + o.substring(1) : o;
            r[s] = e[o]
        }
    return r
}
class ED extends F1 {
    constructor() {
        super(...arguments),
        this.type = "svg",
        this.isSVGTag = !1,
        this.measureInstanceViewportBox = Me
    }
    getBaseTargetFromProps(t, n) {
        return t[n]
    }
    readValueFromInstance(t, n) {
        if (gs.has(n)) {
            const r = R1(n);
            return r && r.default || 0
        }
        return n = K1.has(n) ? n : $h(n),
        t.getAttribute(n)
    }
    scrapeMotionValuesFromProps(t, n, r) {
        return Y1(t, n, r)
    }
    build(t, n, r) {
        H1(t, n, this.isSVGTag, r.transformTemplate, r.style)
    }
    renderInstance(t, n, r, o) {
        bD(t, n, r, o)
    }
    mount(t) {
        this.isSVGTag = G1(t.tagName),
        super.mount(t)
    }
}
const TD = Kh.length;
function Q1(e) {
    if (!e)
        return;
    if (!e.isControllingVariants) {
        const n = e.parent ? Q1(e.parent) || {} : {};
        return e.props.initial !== void 0 && (n.initial = e.props.initial),
        n
    }
    const t = {};
    for (let n = 0; n < TD; n++) {
        const r = Kh[n]
          , o = e.props[r];
        (Pi(o) || o === !1) && (t[r] = o)
    }
    return t
}
function X1(e, t) {
    if (!Array.isArray(t))
        return !1;
    const n = t.length;
    if (n !== e.length)
        return !1;
    for (let r = 0; r < n; r++)
        if (t[r] !== e[r])
            return !1;
    return !0
}
const PD = [...Hh].reverse()
  , RD = Hh.length;
function kD(e) {
    return t => Promise.all(t.map( ({animation: n, options: r}) => _j(e, n, r)))
}
function ND(e) {
    let t = kD(e)
      , n = Ig()
      , r = !0;
    const o = l => (u, c) => {
        var f;
        const d = Lo(e, c, l === "exit" ? (f = e.presenceContext) == null ? void 0 : f.custom : void 0);
        if (d) {
            const {transition: h, transitionEnd: S, ...p} = d;
            u = {
                ...u,
                ...p,
                ...S
            }
        }
        return u
    }
    ;
    function s(l) {
        t = l(e)
    }
    function i(l) {
        const {props: u} = e
          , c = Q1(e.parent) || {}
          , d = []
          , f = new Set;
        let h = {}
          , S = 1 / 0;
        for (let w = 0; w < RD; w++) {
            const v = PD[w]
              , g = n[v]
              , x = u[v] !== void 0 ? u[v] : c[v]
              , C = Pi(x)
              , b = v === l ? g.isActive : null;
            b === !1 && (S = w);
            let E = x === c[v] && x !== u[v] && C;
            if (E && r && e.manuallyAnimateOnMount && (E = !1),
            g.protectedKeys = {
                ...h
            },
            !g.isActive && b === null || !x && !g.prevProp || uu(x) || typeof x == "boolean")
                continue;
            const T = AD(g.prevProp, x);
            let P = T || v === l && g.isActive && !E && C || w > S && C
              , N = !1;
            const M = Array.isArray(x) ? x : [x];
            let V = M.reduce(o(v), {});
            b === !1 && (V = {});
            const {prevResolvedValues: O={}} = g
              , W = {
                ...O,
                ...V
            }
              , D = F => {
                P = !0,
                f.has(F) && (N = !0,
                f.delete(F)),
                g.needsAnimating[F] = !0;
                const R = e.getValue(F);
                R && (R.liveStyle = !1)
            }
            ;
            for (const F in W) {
                const R = V[F]
                  , k = O[F];
                if (h.hasOwnProperty(F))
                    continue;
                let L = !1;
                zd(R) && zd(k) ? L = !X1(R, k) : L = R !== k,
                L ? R != null ? D(F) : f.add(F) : R !== void 0 && f.has(F) ? D(F) : g.protectedKeys[F] = !0
            }
            g.prevProp = x,
            g.prevResolvedValues = V,
            g.isActive && (h = {
                ...h,
                ...V
            }),
            r && e.blockInitialAnimation && (P = !1);
            const H = E && T;
            P && (!H || N) && d.push(...M.map(F => {
                const R = {
                    type: v
                };
                if (typeof F == "string" && r && !H && e.manuallyAnimateOnMount && e.parent) {
                    const {parent: k} = e
                      , L = Lo(k, F);
                    if (k.enteringChildren && L) {
                        const {delayChildren: K} = L.transition || {};
                        R.delay = x1(k.enteringChildren, e, K)
                    }
                }
                return {
                    animation: F,
                    options: R
                }
            }
            ))
        }
        if (f.size) {
            const w = {};
            if (typeof u.initial != "boolean") {
                const v = Lo(e, Array.isArray(u.initial) ? u.initial[0] : u.initial);
                v && v.transition && (w.transition = v.transition)
            }
            f.forEach(v => {
                const g = e.getBaseTarget(v)
                  , x = e.getValue(v);
                x && (x.liveStyle = !0),
                w[v] = g ?? null
            }
            ),
            d.push({
                animation: w
            })
        }
        let p = !!d.length;
        return r && (u.initial === !1 || u.initial === u.animate) && !e.manuallyAnimateOnMount && (p = !1),
        r = !1,
        p ? t(d) : Promise.resolve()
    }
    function a(l, u) {
        var d;
        if (n[l].isActive === u)
            return Promise.resolve();
        (d = e.variantChildren) == null || d.forEach(f => {
            var h;
            return (h = f.animationState) == null ? void 0 : h.setActive(l, u)
        }
        ),
        n[l].isActive = u;
        const c = i(l);
        for (const f in n)
            n[f].protectedKeys = {};
        return c
    }
    return {
        animateChanges: i,
        setActive: a,
        setAnimateFunction: s,
        getState: () => n,
        reset: () => {
            n = Ig()
        }
    }
}
function AD(e, t) {
    return typeof t == "string" ? t !== e : Array.isArray(t) ? !X1(t, e) : !1
}
function Er(e=!1) {
    return {
        isActive: e,
        protectedKeys: {},
        needsAnimating: {},
        prevResolvedValues: {}
    }
}
function Ig() {
    return {
        animate: Er(!0),
        whileInView: Er(),
        whileHover: Er(),
        whileTap: Er(),
        whileDrag: Er(),
        whileFocus: Er(),
        exit: Er()
    }
}
function Og(e, t) {
    e.min = t.min,
    e.max = t.max
}
function Ot(e, t) {
    Og(e.x, t.x),
    Og(e.y, t.y)
}
function Lg(e, t) {
    e.translate = t.translate,
    e.scale = t.scale,
    e.originPoint = t.originPoint,
    e.origin = t.origin
}
const q1 = 1e-4
  , MD = 1 - q1
  , jD = 1 + q1
  , Z1 = .01
  , DD = 0 - Z1
  , ID = 0 + Z1;
function et(e) {
    return e.max - e.min
}
function OD(e, t, n) {
    return Math.abs(e - t) <= n
}
function _g(e, t, n, r=.5) {
    e.origin = r,
    e.originPoint = we(t.min, t.max, e.origin),
    e.scale = et(n) / et(t),
    e.translate = we(n.min, n.max, e.origin) - e.originPoint,
    (e.scale >= MD && e.scale <= jD || isNaN(e.scale)) && (e.scale = 1),
    (e.translate >= DD && e.translate <= ID || isNaN(e.translate)) && (e.translate = 0)
}
function Zs(e, t, n, r) {
    _g(e.x, t.x, n.x, r ? r.originX : void 0),
    _g(e.y, t.y, n.y, r ? r.originY : void 0)
}
function Fg(e, t, n) {
    e.min = n.min + t.min,
    e.max = e.min + et(t)
}
function LD(e, t, n) {
    Fg(e.x, t.x, n.x),
    Fg(e.y, t.y, n.y)
}
function Vg(e, t, n) {
    e.min = t.min - n.min,
    e.max = e.min + et(t)
}
function Tl(e, t, n) {
    Vg(e.x, t.x, n.x),
    Vg(e.y, t.y, n.y)
}
function Bg(e, t, n, r, o) {
    return e -= t,
    e = El(e, 1 / n, r),
    o !== void 0 && (e = El(e, 1 / o, r)),
    e
}
function _D(e, t=0, n=1, r=.5, o, s=e, i=e) {
    if (dn.test(t) && (t = parseFloat(t),
    t = we(i.min, i.max, t / 100) - i.min),
    typeof t != "number")
        return;
    let a = we(s.min, s.max, r);
    e === s && (a -= t),
    e.min = Bg(e.min, t, n, a, o),
    e.max = Bg(e.max, t, n, a, o)
}
function $g(e, t, [n,r,o], s, i) {
    _D(e, t[n], t[r], t[o], t.scale, s, i)
}
const FD = ["x", "scaleX", "originX"]
  , VD = ["y", "scaleY", "originY"];
function zg(e, t, n, r) {
    $g(e.x, t, FD, n ? n.x : void 0, r ? r.x : void 0),
    $g(e.y, t, VD, n ? n.y : void 0, r ? r.y : void 0)
}
function Ug(e) {
    return e.translate === 0 && e.scale === 1
}
function J1(e) {
    return Ug(e.x) && Ug(e.y)
}
function Wg(e, t) {
    return e.min === t.min && e.max === t.max
}
function BD(e, t) {
    return Wg(e.x, t.x) && Wg(e.y, t.y)
}
function Hg(e, t) {
    return Math.round(e.min) === Math.round(t.min) && Math.round(e.max) === Math.round(t.max)
}
function eS(e, t) {
    return Hg(e.x, t.x) && Hg(e.y, t.y)
}
function Kg(e) {
    return et(e.x) / et(e.y)
}
function Gg(e, t) {
    return e.translate === t.translate && e.scale === t.scale && e.originPoint === t.originPoint
}
function wt(e) {
    return [e("x"), e("y")]
}
function $D(e, t, n) {
    let r = "";
    const o = e.x.translate / t.x
      , s = e.y.translate / t.y
      , i = (n == null ? void 0 : n.z) || 0;
    if ((o || s || i) && (r = `translate3d(${o}px, ${s}px, ${i}px) `),
    (t.x !== 1 || t.y !== 1) && (r += `scale(${1 / t.x}, ${1 / t.y}) `),
    n) {
        const {transformPerspective: u, rotate: c, rotateX: d, rotateY: f, skewX: h, skewY: S} = n;
        u && (r = `perspective(${u}px) ${r}`),
        c && (r += `rotate(${c}deg) `),
        d && (r += `rotateX(${d}deg) `),
        f && (r += `rotateY(${f}deg) `),
        h && (r += `skewX(${h}deg) `),
        S && (r += `skewY(${S}deg) `)
    }
    const a = e.x.scale * t.x
      , l = e.y.scale * t.y;
    return (a !== 1 || l !== 1) && (r += `scale(${a}, ${l})`),
    r || "none"
}
const tS = ["TopLeft", "TopRight", "BottomLeft", "BottomRight"]
  , zD = tS.length
  , Yg = e => typeof e == "string" ? parseFloat(e) : e
  , Qg = e => typeof e == "number" || $.test(e);
function UD(e, t, n, r, o, s) {
    o ? (e.opacity = we(0, n.opacity ?? 1, WD(r)),
    e.opacityExit = we(t.opacity ?? 1, 0, HD(r))) : s && (e.opacity = we(t.opacity ?? 1, n.opacity ?? 1, r));
    for (let i = 0; i < zD; i++) {
        const a = `border${tS[i]}Radius`;
        let l = Xg(t, a)
          , u = Xg(n, a);
        if (l === void 0 && u === void 0)
            continue;
        l || (l = 0),
        u || (u = 0),
        l === 0 || u === 0 || Qg(l) === Qg(u) ? (e[a] = Math.max(we(Yg(l), Yg(u), r), 0),
        (dn.test(u) || dn.test(l)) && (e[a] += "%")) : e[a] = u
    }
    (t.rotate || n.rotate) && (e.rotate = we(t.rotate || 0, n.rotate || 0, r))
}
function Xg(e, t) {
    return e[t] !== void 0 ? e[t] : e.borderRadius
}
const WD = nS(0, .5, Xw)
  , HD = nS(.5, .95, Rt);
function nS(e, t, n) {
    return r => r < e ? 0 : r > t ? 1 : n(bi(e, t, r))
}
function KD(e, t, n) {
    const r = Ye(e) ? e : rs(e);
    return r.start(Vh("", r, t, n)),
    r.animation
}
function Ri(e, t, n, r={
    passive: !0
}) {
    return e.addEventListener(t, n, r),
    () => e.removeEventListener(t, n)
}
const GD = (e, t) => e.depth - t.depth;
class YD {
    constructor() {
        this.children = [],
        this.isDirty = !1
    }
    add(t) {
        bh(this.children, t),
        this.isDirty = !0
    }
    remove(t) {
        Eh(this.children, t),
        this.isDirty = !0
    }
    forEach(t) {
        this.isDirty && this.children.sort(GD),
        this.isDirty = !1,
        this.children.forEach(t)
    }
}
function QD(e, t) {
    const n = Je.now()
      , r = ({timestamp: o}) => {
        const s = o - n;
        s >= t && (fr(r),
        e(s - t))
    }
    ;
    return pe.setup(r, !0),
    () => fr(r)
}
function Fa(e) {
    return Ye(e) ? e.get() : e
}
class XD {
    constructor() {
        this.members = []
    }
    add(t) {
        bh(this.members, t),
        t.scheduleRender()
    }
    remove(t) {
        if (Eh(this.members, t),
        t === this.prevLead && (this.prevLead = void 0),
        t === this.lead) {
            const n = this.members[this.members.length - 1];
            n && this.promote(n)
        }
    }
    relegate(t) {
        const n = this.members.findIndex(o => t === o);
        if (n === 0)
            return !1;
        let r;
        for (let o = n; o >= 0; o--) {
            const s = this.members[o];
            if (s.isPresent !== !1) {
                r = s;
                break
            }
        }
        return r ? (this.promote(r),
        !0) : !1
    }
    promote(t, n) {
        const r = this.lead;
        if (t !== r && (this.prevLead = r,
        this.lead = t,
        t.show(),
        r)) {
            r.instance && r.scheduleRender(),
            t.scheduleRender();
            const o = r.options.layoutDependency
              , s = t.options.layoutDependency;
            o !== void 0 && s !== void 0 && o === s || (t.resumeFrom = r,
            n && (t.resumeFrom.preserveOpacity = !0),
            r.snapshot && (t.snapshot = r.snapshot,
            t.snapshot.latestValues = r.animationValues || r.latestValues),
            t.root && t.root.isUpdating && (t.isLayoutDirty = !0));
            const {crossfade: a} = t.options;
            a === !1 && r.hide()
        }
    }
    exitAnimationComplete() {
        this.members.forEach(t => {
            const {options: n, resumingFrom: r} = t;
            n.onExitComplete && n.onExitComplete(),
            r && r.options.onExitComplete && r.options.onExitComplete()
        }
        )
    }
    scheduleRender() {
        this.members.forEach(t => {
            t.instance && t.scheduleRender(!1)
        }
        )
    }
    removeLeadSnapshot() {
        this.lead && this.lead.snapshot && (this.lead.snapshot = void 0)
    }
}
const Va = {
    hasAnimatedSinceResize: !0,
    hasEverUpdated: !1
}
  , uc = ["", "X", "Y", "Z"]
  , qD = 1e3;
let ZD = 0;
function cc(e, t, n, r) {
    const {latestValues: o} = t;
    o[e] && (n[e] = o[e],
    t.setStaticValue(e, 0),
    r && (r[e] = 0))
}
function rS(e) {
    if (e.hasCheckedOptimisedAppear = !0,
    e.root === e)
        return;
    const {visualElement: t} = e.options;
    if (!t)
        return;
    const n = b1(t);
    if (window.MotionHasOptimisedAnimation(n, "transform")) {
        const {layout: o, layoutId: s} = e.options;
        window.MotionCancelOptimisedAnimation(n, "transform", pe, !(o || s))
    }
    const {parent: r} = e;
    r && !r.hasCheckedOptimisedAppear && rS(r)
}
function oS({attachResizeListener: e, defaultParent: t, measureScroll: n, checkIsScrollRoot: r, resetTransform: o}) {
    return class {
        constructor(i={}, a=t == null ? void 0 : t()) {
            this.id = ZD++,
            this.animationId = 0,
            this.animationCommitId = 0,
            this.children = new Set,
            this.options = {},
            this.isTreeAnimating = !1,
            this.isAnimationBlocked = !1,
            this.isLayoutDirty = !1,
            this.isProjectionDirty = !1,
            this.isSharedProjectionDirty = !1,
            this.isTransformDirty = !1,
            this.updateManuallyBlocked = !1,
            this.updateBlockedByResize = !1,
            this.isUpdating = !1,
            this.isSVG = !1,
            this.needsReset = !1,
            this.shouldResetTransform = !1,
            this.hasCheckedOptimisedAppear = !1,
            this.treeScale = {
                x: 1,
                y: 1
            },
            this.eventHandlers = new Map,
            this.hasTreeAnimated = !1,
            this.layoutVersion = 0,
            this.updateScheduled = !1,
            this.scheduleUpdate = () => this.update(),
            this.projectionUpdateScheduled = !1,
            this.checkUpdateFailed = () => {
                this.isUpdating && (this.isUpdating = !1,
                this.clearAllSnapshots())
            }
            ,
            this.updateProjection = () => {
                this.projectionUpdateScheduled = !1,
                this.nodes.forEach(t2),
                this.nodes.forEach(s2),
                this.nodes.forEach(i2),
                this.nodes.forEach(n2)
            }
            ,
            this.resolvedRelativeTargetAt = 0,
            this.linkedParentVersion = 0,
            this.hasProjected = !1,
            this.isVisible = !0,
            this.animationProgress = 0,
            this.sharedNodes = new Map,
            this.latestValues = i,
            this.root = a ? a.root || a : this,
            this.path = a ? [...a.path, a] : [],
            this.parent = a,
            this.depth = a ? a.depth + 1 : 0;
            for (let l = 0; l < this.path.length; l++)
                this.path[l].shouldResetTransform = !0;
            this.root === this && (this.nodes = new YD)
        }
        addEventListener(i, a) {
            return this.eventHandlers.has(i) || this.eventHandlers.set(i, new Ph),
            this.eventHandlers.get(i).add(a)
        }
        notifyListeners(i, ...a) {
            const l = this.eventHandlers.get(i);
            l && l.notify(...a)
        }
        hasListeners(i) {
            return this.eventHandlers.has(i)
        }
        mount(i) {
            if (this.instance)
                return;
            this.isSVG = I1(i) && !eD(i),
            this.instance = i;
            const {layoutId: a, layout: l, visualElement: u} = this.options;
            if (u && !u.current && u.mount(i),
            this.root.nodes.add(this),
            this.parent && this.parent.children.add(this),
            this.root.hasTreeAnimated && (l || a) && (this.isLayoutDirty = !0),
            e) {
                let c, d = 0;
                const f = () => this.root.updateBlockedByResize = !1;
                pe.read( () => {
                    d = window.innerWidth
                }
                ),
                e(i, () => {
                    const h = window.innerWidth;
                    h !== d && (d = h,
                    this.root.updateBlockedByResize = !0,
                    c && c(),
                    c = QD(f, 250),
                    Va.hasAnimatedSinceResize && (Va.hasAnimatedSinceResize = !1,
                    this.nodes.forEach(Jg)))
                }
                )
            }
            a && this.root.registerSharedNode(a, this),
            this.options.animate !== !1 && u && (a || l) && this.addEventListener("didUpdate", ({delta: c, hasLayoutChanged: d, hasRelativeLayoutChanged: f, layout: h}) => {
                if (this.isTreeAnimationBlocked()) {
                    this.target = void 0,
                    this.relativeTarget = void 0;
                    return
                }
                const S = this.options.transition || u.getDefaultTransition() || d2
                  , {onLayoutAnimationStart: p, onLayoutAnimationComplete: w} = u.getProps()
                  , v = !this.targetLayout || !eS(this.targetLayout, h)
                  , g = !d && f;
                if (this.options.layoutRoot || this.resumeFrom || g || d && (v || !this.currentAnimation)) {
                    this.resumeFrom && (this.resumingFrom = this.resumeFrom,
                    this.resumingFrom.resumingFrom = void 0);
                    const x = {
                        ...Fh(S, "layout"),
                        onPlay: p,
                        onComplete: w
                    };
                    (u.shouldReduceMotion || this.options.layoutRoot) && (x.delay = 0,
                    x.type = !1),
                    this.startAnimation(x),
                    this.setAnimationOrigin(c, g)
                } else
                    d || Jg(this),
                    this.isLead() && this.options.onExitComplete && this.options.onExitComplete();
                this.targetLayout = h
            }
            )
        }
        unmount() {
            this.options.layoutId && this.willUpdate(),
            this.root.nodes.remove(this);
            const i = this.getStack();
            i && i.remove(this),
            this.parent && this.parent.children.delete(this),
            this.instance = void 0,
            this.eventHandlers.clear(),
            fr(this.updateProjection)
        }
        blockUpdate() {
            this.updateManuallyBlocked = !0
        }
        unblockUpdate() {
            this.updateManuallyBlocked = !1
        }
        isUpdateBlocked() {
            return this.updateManuallyBlocked || this.updateBlockedByResize
        }
        isTreeAnimationBlocked() {
            return this.isAnimationBlocked || this.parent && this.parent.isTreeAnimationBlocked() || !1
        }
        startUpdate() {
            this.isUpdateBlocked() || (this.isUpdating = !0,
            this.nodes && this.nodes.forEach(a2),
            this.animationId++)
        }
        getTransformTemplate() {
            const {visualElement: i} = this.options;
            return i && i.getProps().transformTemplate
        }
        willUpdate(i=!0) {
            if (this.root.hasTreeAnimated = !0,
            this.root.isUpdateBlocked()) {
                this.options.onExitComplete && this.options.onExitComplete();
                return
            }
            if (window.MotionCancelOptimisedAnimation && !this.hasCheckedOptimisedAppear && rS(this),
            !this.root.isUpdating && this.root.startUpdate(),
            this.isLayoutDirty)
                return;
            this.isLayoutDirty = !0;
            for (let c = 0; c < this.path.length; c++) {
                const d = this.path[c];
                d.shouldResetTransform = !0,
                d.updateScroll("snapshot"),
                d.options.layoutRoot && d.willUpdate(!1)
            }
            const {layoutId: a, layout: l} = this.options;
            if (a === void 0 && !l)
                return;
            const u = this.getTransformTemplate();
            this.prevTransformTemplateValue = u ? u(this.latestValues, "") : void 0,
            this.updateSnapshot(),
            i && this.notifyListeners("willUpdate")
        }
        update() {
            if (this.updateScheduled = !1,
            this.isUpdateBlocked()) {
                this.unblockUpdate(),
                this.clearAllSnapshots(),
                this.nodes.forEach(qg);
                return
            }
            if (this.animationId <= this.animationCommitId) {
                this.nodes.forEach(Zg);
                return
            }
            this.animationCommitId = this.animationId,
            this.isUpdating ? (this.isUpdating = !1,
            this.nodes.forEach(o2),
            this.nodes.forEach(JD),
            this.nodes.forEach(e2)) : this.nodes.forEach(Zg),
            this.clearAllSnapshots();
            const a = Je.now();
            Fe.delta = hn(0, 1e3 / 60, a - Fe.timestamp),
            Fe.timestamp = a,
            Fe.isProcessing = !0,
            tc.update.process(Fe),
            tc.preRender.process(Fe),
            tc.render.process(Fe),
            Fe.isProcessing = !1
        }
        didUpdate() {
            this.updateScheduled || (this.updateScheduled = !0,
            Uh.read(this.scheduleUpdate))
        }
        clearAllSnapshots() {
            this.nodes.forEach(r2),
            this.sharedNodes.forEach(l2)
        }
        scheduleUpdateProjection() {
            this.projectionUpdateScheduled || (this.projectionUpdateScheduled = !0,
            pe.preRender(this.updateProjection, !1, !0))
        }
        scheduleCheckAfterUnmount() {
            pe.postRender( () => {
                this.isLayoutDirty ? this.root.didUpdate() : this.root.checkUpdateFailed()
            }
            )
        }
        updateSnapshot() {
            this.snapshot || !this.instance || (this.snapshot = this.measure(),
            this.snapshot && !et(this.snapshot.measuredBox.x) && !et(this.snapshot.measuredBox.y) && (this.snapshot = void 0))
        }
        updateLayout() {
            if (!this.instance || (this.updateScroll(),
            !(this.options.alwaysMeasureLayout && this.isLead()) && !this.isLayoutDirty))
                return;
            if (this.resumeFrom && !this.resumeFrom.instance)
                for (let l = 0; l < this.path.length; l++)
                    this.path[l].updateScroll();
            const i = this.layout;
            this.layout = this.measure(!1),
            this.layoutVersion++,
            this.layoutCorrected = Me(),
            this.isLayoutDirty = !1,
            this.projectionDelta = void 0,
            this.notifyListeners("measure", this.layout.layoutBox);
            const {visualElement: a} = this.options;
            a && a.notify("LayoutMeasure", this.layout.layoutBox, i ? i.layoutBox : void 0)
        }
        updateScroll(i="measure") {
            let a = !!(this.options.layoutScroll && this.instance);
            if (this.scroll && this.scroll.animationId === this.root.animationId && this.scroll.phase === i && (a = !1),
            a && this.instance) {
                const l = r(this.instance);
                this.scroll = {
                    animationId: this.root.animationId,
                    phase: i,
                    isRoot: l,
                    offset: n(this.instance),
                    wasRoot: this.scroll ? this.scroll.isRoot : l
                }
            }
        }
        resetTransform() {
            if (!o)
                return;
            const i = this.isLayoutDirty || this.shouldResetTransform || this.options.alwaysMeasureLayout
              , a = this.projectionDelta && !J1(this.projectionDelta)
              , l = this.getTransformTemplate()
              , u = l ? l(this.latestValues, "") : void 0
              , c = u !== this.prevTransformTemplateValue;
            i && this.instance && (a || Rr(this.latestValues) || c) && (o(this.instance, u),
            this.shouldResetTransform = !1,
            this.scheduleRender())
        }
        measure(i=!0) {
            const a = this.measurePageBox();
            let l = this.removeElementScroll(a);
            return i && (l = this.removeTransform(l)),
            f2(l),
            {
                animationId: this.root.animationId,
                measuredBox: a,
                layoutBox: l,
                latestValues: {},
                source: this.id
            }
        }
        measurePageBox() {
            var u;
            const {visualElement: i} = this.options;
            if (!i)
                return Me();
            const a = i.measureViewportBox();
            if (!(((u = this.scroll) == null ? void 0 : u.wasRoot) || this.path.some(h2))) {
                const {scroll: c} = this.root;
                c && (To(a.x, c.offset.x),
                To(a.y, c.offset.y))
            }
            return a
        }
        removeElementScroll(i) {
            var l;
            const a = Me();
            if (Ot(a, i),
            (l = this.scroll) != null && l.wasRoot)
                return a;
            for (let u = 0; u < this.path.length; u++) {
                const c = this.path[u]
                  , {scroll: d, options: f} = c;
                c !== this.root && d && f.layoutScroll && (d.wasRoot && Ot(a, i),
                To(a.x, d.offset.x),
                To(a.y, d.offset.y))
            }
            return a
        }
        applyTransform(i, a=!1) {
            const l = Me();
            Ot(l, i);
            for (let u = 0; u < this.path.length; u++) {
                const c = this.path[u];
                !a && c.options.layoutScroll && c.scroll && c !== c.root && Po(l, {
                    x: -c.scroll.offset.x,
                    y: -c.scroll.offset.y
                }),
                Rr(c.latestValues) && Po(l, c.latestValues)
            }
            return Rr(this.latestValues) && Po(l, this.latestValues),
            l
        }
        removeTransform(i) {
            const a = Me();
            Ot(a, i);
            for (let l = 0; l < this.path.length; l++) {
                const u = this.path[l];
                if (!u.instance || !Rr(u.latestValues))
                    continue;
                Yd(u.latestValues) && u.updateSnapshot();
                const c = Me()
                  , d = u.measurePageBox();
                Ot(c, d),
                zg(a, u.latestValues, u.snapshot ? u.snapshot.layoutBox : void 0, c)
            }
            return Rr(this.latestValues) && zg(a, this.latestValues),
            a
        }
        setTargetDelta(i) {
            this.targetDelta = i,
            this.root.scheduleUpdateProjection(),
            this.isProjectionDirty = !0
        }
        setOptions(i) {
            this.options = {
                ...this.options,
                ...i,
                crossfade: i.crossfade !== void 0 ? i.crossfade : !0
            }
        }
        clearMeasurements() {
            this.scroll = void 0,
            this.layout = void 0,
            this.snapshot = void 0,
            this.prevTransformTemplateValue = void 0,
            this.targetDelta = void 0,
            this.target = void 0,
            this.isLayoutDirty = !1
        }
        forceRelativeParentToResolveTarget() {
            this.relativeParent && this.relativeParent.resolvedRelativeTargetAt !== Fe.timestamp && this.relativeParent.resolveTargetDelta(!0)
        }
        resolveTargetDelta(i=!1) {
            var h;
            const a = this.getLead();
            this.isProjectionDirty || (this.isProjectionDirty = a.isProjectionDirty),
            this.isTransformDirty || (this.isTransformDirty = a.isTransformDirty),
            this.isSharedProjectionDirty || (this.isSharedProjectionDirty = a.isSharedProjectionDirty);
            const l = !!this.resumingFrom || this !== a;
            if (!(i || l && this.isSharedProjectionDirty || this.isProjectionDirty || (h = this.parent) != null && h.isProjectionDirty || this.attemptToResolveRelativeTarget || this.root.updateBlockedByResize))
                return;
            const {layout: c, layoutId: d} = this.options;
            if (!this.layout || !(c || d))
                return;
            this.resolvedRelativeTargetAt = Fe.timestamp;
            const f = this.getClosestProjectingParent();
            f && this.linkedParentVersion !== f.layoutVersion && !f.options.layoutRoot && this.removeRelativeTarget(),
            !this.targetDelta && !this.relativeTarget && (f && f.layout ? this.createRelativeTarget(f, this.layout.layoutBox, f.layout.layoutBox) : this.removeRelativeTarget()),
            !(!this.relativeTarget && !this.targetDelta) && (this.target || (this.target = Me(),
            this.targetWithTransforms = Me()),
            this.relativeTarget && this.relativeTargetOrigin && this.relativeParent && this.relativeParent.target ? (this.forceRelativeParentToResolveTarget(),
            LD(this.target, this.relativeTarget, this.relativeParent.target)) : this.targetDelta ? (this.resumingFrom ? this.target = this.applyTransform(this.layout.layoutBox) : Ot(this.target, this.layout.layoutBox),
            $1(this.target, this.targetDelta)) : Ot(this.target, this.layout.layoutBox),
            this.attemptToResolveRelativeTarget && (this.attemptToResolveRelativeTarget = !1,
            f && !!f.resumingFrom == !!this.resumingFrom && !f.options.layoutScroll && f.target && this.animationProgress !== 1 ? this.createRelativeTarget(f, this.target, f.target) : this.relativeParent = this.relativeTarget = void 0))
        }
        getClosestProjectingParent() {
            if (!(!this.parent || Yd(this.parent.latestValues) || B1(this.parent.latestValues)))
                return this.parent.isProjecting() ? this.parent : this.parent.getClosestProjectingParent()
        }
        isProjecting() {
            return !!((this.relativeTarget || this.targetDelta || this.options.layoutRoot) && this.layout)
        }
        createRelativeTarget(i, a, l) {
            this.relativeParent = i,
            this.linkedParentVersion = i.layoutVersion,
            this.forceRelativeParentToResolveTarget(),
            this.relativeTarget = Me(),
            this.relativeTargetOrigin = Me(),
            Tl(this.relativeTargetOrigin, a, l),
            Ot(this.relativeTarget, this.relativeTargetOrigin)
        }
        removeRelativeTarget() {
            this.relativeParent = this.relativeTarget = void 0
        }
        calcProjection() {
            var S;
            const i = this.getLead()
              , a = !!this.resumingFrom || this !== i;
            let l = !0;
            if ((this.isProjectionDirty || (S = this.parent) != null && S.isProjectionDirty) && (l = !1),
            a && (this.isSharedProjectionDirty || this.isTransformDirty) && (l = !1),
            this.resolvedRelativeTargetAt === Fe.timestamp && (l = !1),
            l)
                return;
            const {layout: u, layoutId: c} = this.options;
            if (this.isTreeAnimating = !!(this.parent && this.parent.isTreeAnimating || this.currentAnimation || this.pendingAnimation),
            this.isTreeAnimating || (this.targetDelta = this.relativeTarget = void 0),
            !this.layout || !(u || c))
                return;
            Ot(this.layoutCorrected, this.layout.layoutBox);
            const d = this.treeScale.x
              , f = this.treeScale.y;
            dD(this.layoutCorrected, this.treeScale, this.path, a),
            i.layout && !i.target && (this.treeScale.x !== 1 || this.treeScale.y !== 1) && (i.target = i.layout.layoutBox,
            i.targetWithTransforms = Me());
            const {target: h} = i;
            if (!h) {
                this.prevProjectionDelta && (this.createProjectionDeltas(),
                this.scheduleRender());
                return
            }
            !this.projectionDelta || !this.prevProjectionDelta ? this.createProjectionDeltas() : (Lg(this.prevProjectionDelta.x, this.projectionDelta.x),
            Lg(this.prevProjectionDelta.y, this.projectionDelta.y)),
            Zs(this.projectionDelta, this.layoutCorrected, h, this.latestValues),
            (this.treeScale.x !== d || this.treeScale.y !== f || !Gg(this.projectionDelta.x, this.prevProjectionDelta.x) || !Gg(this.projectionDelta.y, this.prevProjectionDelta.y)) && (this.hasProjected = !0,
            this.scheduleRender(),
            this.notifyListeners("projectionUpdate", h))
        }
        hide() {
            this.isVisible = !1
        }
        show() {
            this.isVisible = !0
        }
        scheduleRender(i=!0) {
            var a;
            if ((a = this.options.visualElement) == null || a.scheduleRender(),
            i) {
                const l = this.getStack();
                l && l.scheduleRender()
            }
            this.resumingFrom && !this.resumingFrom.instance && (this.resumingFrom = void 0)
        }
        createProjectionDeltas() {
            this.prevProjectionDelta = Eo(),
            this.projectionDelta = Eo(),
            this.projectionDeltaWithTransform = Eo()
        }
        setAnimationOrigin(i, a=!1) {
            const l = this.snapshot
              , u = l ? l.latestValues : {}
              , c = {
                ...this.latestValues
            }
              , d = Eo();
            (!this.relativeParent || !this.relativeParent.options.layoutRoot) && (this.relativeTarget = this.relativeTargetOrigin = void 0),
            this.attemptToResolveRelativeTarget = !a;
            const f = Me()
              , h = l ? l.source : void 0
              , S = this.layout ? this.layout.source : void 0
              , p = h !== S
              , w = this.getStack()
              , v = !w || w.members.length <= 1
              , g = !!(p && !v && this.options.crossfade === !0 && !this.path.some(c2));
            this.animationProgress = 0;
            let x;
            this.mixTargetDelta = C => {
                const b = C / 1e3;
                ev(d.x, i.x, b),
                ev(d.y, i.y, b),
                this.setTargetDelta(d),
                this.relativeTarget && this.relativeTargetOrigin && this.layout && this.relativeParent && this.relativeParent.layout && (Tl(f, this.layout.layoutBox, this.relativeParent.layout.layoutBox),
                u2(this.relativeTarget, this.relativeTargetOrigin, f, b),
                x && BD(this.relativeTarget, x) && (this.isProjectionDirty = !1),
                x || (x = Me()),
                Ot(x, this.relativeTarget)),
                p && (this.animationValues = c,
                UD(c, u, this.latestValues, b, g, v)),
                this.root.scheduleUpdateProjection(),
                this.scheduleRender(),
                this.animationProgress = b
            }
            ,
            this.mixTargetDelta(this.options.layoutRoot ? 1e3 : 0)
        }
        startAnimation(i) {
            var a, l, u;
            this.notifyListeners("animationStart"),
            (a = this.currentAnimation) == null || a.stop(),
            (u = (l = this.resumingFrom) == null ? void 0 : l.currentAnimation) == null || u.stop(),
            this.pendingAnimation && (fr(this.pendingAnimation),
            this.pendingAnimation = void 0),
            this.pendingAnimation = pe.update( () => {
                Va.hasAnimatedSinceResize = !0,
                this.motionValue || (this.motionValue = rs(0)),
                this.currentAnimation = KD(this.motionValue, [0, 1e3], {
                    ...i,
                    velocity: 0,
                    isSync: !0,
                    onUpdate: c => {
                        this.mixTargetDelta(c),
                        i.onUpdate && i.onUpdate(c)
                    }
                    ,
                    onStop: () => {}
                    ,
                    onComplete: () => {
                        i.onComplete && i.onComplete(),
                        this.completeAnimation()
                    }
                }),
                this.resumingFrom && (this.resumingFrom.currentAnimation = this.currentAnimation),
                this.pendingAnimation = void 0
            }
            )
        }
        completeAnimation() {
            this.resumingFrom && (this.resumingFrom.currentAnimation = void 0,
            this.resumingFrom.preserveOpacity = void 0);
            const i = this.getStack();
            i && i.exitAnimationComplete(),
            this.resumingFrom = this.currentAnimation = this.animationValues = void 0,
            this.notifyListeners("animationComplete")
        }
        finishAnimation() {
            this.currentAnimation && (this.mixTargetDelta && this.mixTargetDelta(qD),
            this.currentAnimation.stop()),
            this.completeAnimation()
        }
        applyTransformsToTarget() {
            const i = this.getLead();
            let {targetWithTransforms: a, target: l, layout: u, latestValues: c} = i;
            if (!(!a || !l || !u)) {
                if (this !== i && this.layout && u && sS(this.options.animationType, this.layout.layoutBox, u.layoutBox)) {
                    l = this.target || Me();
                    const d = et(this.layout.layoutBox.x);
                    l.x.min = i.target.x.min,
                    l.x.max = l.x.min + d;
                    const f = et(this.layout.layoutBox.y);
                    l.y.min = i.target.y.min,
                    l.y.max = l.y.min + f
                }
                Ot(a, l),
                Po(a, c),
                Zs(this.projectionDeltaWithTransform, this.layoutCorrected, a, c)
            }
        }
        registerSharedNode(i, a) {
            this.sharedNodes.has(i) || this.sharedNodes.set(i, new XD),
            this.sharedNodes.get(i).add(a);
            const u = a.options.initialPromotionConfig;
            a.promote({
                transition: u ? u.transition : void 0,
                preserveFollowOpacity: u && u.shouldPreserveFollowOpacity ? u.shouldPreserveFollowOpacity(a) : void 0
            })
        }
        isLead() {
            const i = this.getStack();
            return i ? i.lead === this : !0
        }
        getLead() {
            var a;
            const {layoutId: i} = this.options;
            return i ? ((a = this.getStack()) == null ? void 0 : a.lead) || this : this
        }
        getPrevLead() {
            var a;
            const {layoutId: i} = this.options;
            return i ? (a = this.getStack()) == null ? void 0 : a.prevLead : void 0
        }
        getStack() {
            const {layoutId: i} = this.options;
            if (i)
                return this.root.sharedNodes.get(i)
        }
        promote({needsReset: i, transition: a, preserveFollowOpacity: l}={}) {
            const u = this.getStack();
            u && u.promote(this, l),
            i && (this.projectionDelta = void 0,
            this.needsReset = !0),
            a && this.setOptions({
                transition: a
            })
        }
        relegate() {
            const i = this.getStack();
            return i ? i.relegate(this) : !1
        }
        resetSkewAndRotation() {
            const {visualElement: i} = this.options;
            if (!i)
                return;
            let a = !1;
            const {latestValues: l} = i;
            if ((l.z || l.rotate || l.rotateX || l.rotateY || l.rotateZ || l.skewX || l.skewY) && (a = !0),
            !a)
                return;
            const u = {};
            l.z && cc("z", i, u, this.animationValues);
            for (let c = 0; c < uc.length; c++)
                cc(`rotate${uc[c]}`, i, u, this.animationValues),
                cc(`skew${uc[c]}`, i, u, this.animationValues);
            i.render();
            for (const c in u)
                i.setStaticValue(c, u[c]),
                this.animationValues && (this.animationValues[c] = u[c]);
            i.scheduleRender()
        }
        applyProjectionStyles(i, a) {
            if (!this.instance || this.isSVG)
                return;
            if (!this.isVisible) {
                i.visibility = "hidden";
                return
            }
            const l = this.getTransformTemplate();
            if (this.needsReset) {
                this.needsReset = !1,
                i.visibility = "",
                i.opacity = "",
                i.pointerEvents = Fa(a == null ? void 0 : a.pointerEvents) || "",
                i.transform = l ? l(this.latestValues, "") : "none";
                return
            }
            const u = this.getLead();
            if (!this.projectionDelta || !this.layout || !u.target) {
                this.options.layoutId && (i.opacity = this.latestValues.opacity !== void 0 ? this.latestValues.opacity : 1,
                i.pointerEvents = Fa(a == null ? void 0 : a.pointerEvents) || ""),
                this.hasProjected && !Rr(this.latestValues) && (i.transform = l ? l({}, "") : "none",
                this.hasProjected = !1);
                return
            }
            i.visibility = "";
            const c = u.animationValues || u.latestValues;
            this.applyTransformsToTarget();
            let d = $D(this.projectionDeltaWithTransform, this.treeScale, c);
            l && (d = l(c, d)),
            i.transform = d;
            const {x: f, y: h} = this.projectionDelta;
            i.transformOrigin = `${f.origin * 100}% ${h.origin * 100}% 0`,
            u.animationValues ? i.opacity = u === this ? c.opacity ?? this.latestValues.opacity ?? 1 : this.preserveOpacity ? this.latestValues.opacity : c.opacityExit : i.opacity = u === this ? c.opacity !== void 0 ? c.opacity : "" : c.opacityExit !== void 0 ? c.opacityExit : 0;
            for (const S in Xd) {
                if (c[S] === void 0)
                    continue;
                const {correct: p, applyTo: w, isCSSVariable: v} = Xd[S]
                  , g = d === "none" ? c[S] : p(c[S], u);
                if (w) {
                    const x = w.length;
                    for (let C = 0; C < x; C++)
                        i[w[C]] = g
                } else
                    v ? this.options.visualElement.renderState.vars[S] = g : i[S] = g
            }
            this.options.layoutId && (i.pointerEvents = u === this ? Fa(a == null ? void 0 : a.pointerEvents) || "" : "none")
        }
        clearSnapshot() {
            this.resumeFrom = this.snapshot = void 0
        }
        resetTree() {
            this.root.nodes.forEach(i => {
                var a;
                return (a = i.currentAnimation) == null ? void 0 : a.stop()
            }
            ),
            this.root.nodes.forEach(qg),
            this.root.sharedNodes.clear()
        }
    }
}
function JD(e) {
    e.updateLayout()
}
function e2(e) {
    var n;
    const t = ((n = e.resumeFrom) == null ? void 0 : n.snapshot) || e.snapshot;
    if (e.isLead() && e.layout && t && e.hasListeners("didUpdate")) {
        const {layoutBox: r, measuredBox: o} = e.layout
          , {animationType: s} = e.options
          , i = t.source !== e.layout.source;
        s === "size" ? wt(d => {
            const f = i ? t.measuredBox[d] : t.layoutBox[d]
              , h = et(f);
            f.min = r[d].min,
            f.max = f.min + h
        }
        ) : sS(s, t.layoutBox, r) && wt(d => {
            const f = i ? t.measuredBox[d] : t.layoutBox[d]
              , h = et(r[d]);
            f.max = f.min + h,
            e.relativeTarget && !e.currentAnimation && (e.isProjectionDirty = !0,
            e.relativeTarget[d].max = e.relativeTarget[d].min + h)
        }
        );
        const a = Eo();
        Zs(a, r, t.layoutBox);
        const l = Eo();
        i ? Zs(l, e.applyTransform(o, !0), t.measuredBox) : Zs(l, r, t.layoutBox);
        const u = !J1(a);
        let c = !1;
        if (!e.resumeFrom) {
            const d = e.getClosestProjectingParent();
            if (d && !d.resumeFrom) {
                const {snapshot: f, layout: h} = d;
                if (f && h) {
                    const S = Me();
                    Tl(S, t.layoutBox, f.layoutBox);
                    const p = Me();
                    Tl(p, r, h.layoutBox),
                    eS(S, p) || (c = !0),
                    d.options.layoutRoot && (e.relativeTarget = p,
                    e.relativeTargetOrigin = S,
                    e.relativeParent = d)
                }
            }
        }
        e.notifyListeners("didUpdate", {
            layout: r,
            snapshot: t,
            delta: l,
            layoutDelta: a,
            hasLayoutChanged: u,
            hasRelativeLayoutChanged: c
        })
    } else if (e.isLead()) {
        const {onExitComplete: r} = e.options;
        r && r()
    }
    e.options.transition = void 0
}
function t2(e) {
    e.parent && (e.isProjecting() || (e.isProjectionDirty = e.parent.isProjectionDirty),
    e.isSharedProjectionDirty || (e.isSharedProjectionDirty = !!(e.isProjectionDirty || e.parent.isProjectionDirty || e.parent.isSharedProjectionDirty)),
    e.isTransformDirty || (e.isTransformDirty = e.parent.isTransformDirty))
}
function n2(e) {
    e.isProjectionDirty = e.isSharedProjectionDirty = e.isTransformDirty = !1
}
function r2(e) {
    e.clearSnapshot()
}
function qg(e) {
    e.clearMeasurements()
}
function Zg(e) {
    e.isLayoutDirty = !1
}
function o2(e) {
    const {visualElement: t} = e.options;
    t && t.getProps().onBeforeLayoutMeasure && t.notify("BeforeLayoutMeasure"),
    e.resetTransform()
}
function Jg(e) {
    e.finishAnimation(),
    e.targetDelta = e.relativeTarget = e.target = void 0,
    e.isProjectionDirty = !0
}
function s2(e) {
    e.resolveTargetDelta()
}
function i2(e) {
    e.calcProjection()
}
function a2(e) {
    e.resetSkewAndRotation()
}
function l2(e) {
    e.removeLeadSnapshot()
}
function ev(e, t, n) {
    e.translate = we(t.translate, 0, n),
    e.scale = we(t.scale, 1, n),
    e.origin = t.origin,
    e.originPoint = t.originPoint
}
function tv(e, t, n, r) {
    e.min = we(t.min, n.min, r),
    e.max = we(t.max, n.max, r)
}
function u2(e, t, n, r) {
    tv(e.x, t.x, n.x, r),
    tv(e.y, t.y, n.y, r)
}
function c2(e) {
    return e.animationValues && e.animationValues.opacityExit !== void 0
}
const d2 = {
    duration: .45,
    ease: [.4, 0, .1, 1]
}
  , nv = e => typeof navigator < "u" && navigator.userAgent && navigator.userAgent.toLowerCase().includes(e)
  , rv = nv("applewebkit/") && !nv("chrome/") ? Math.round : Rt;
function ov(e) {
    e.min = rv(e.min),
    e.max = rv(e.max)
}
function f2(e) {
    ov(e.x),
    ov(e.y)
}
function sS(e, t, n) {
    return e === "position" || e === "preserve-aspect" && !OD(Kg(t), Kg(n), .2)
}
function h2(e) {
    var t;
    return e !== e.root && ((t = e.scroll) == null ? void 0 : t.wasRoot)
}
const p2 = oS({
    attachResizeListener: (e, t) => Ri(e, "resize", t),
    measureScroll: () => {
        var e, t;
        return {
            x: document.documentElement.scrollLeft || ((e = document.body) == null ? void 0 : e.scrollLeft) || 0,
            y: document.documentElement.scrollTop || ((t = document.body) == null ? void 0 : t.scrollTop) || 0
        }
    }
    ,
    checkIsScrollRoot: () => !0
})
  , dc = {
    current: void 0
}
  , iS = oS({
    measureScroll: e => ({
        x: e.scrollLeft,
        y: e.scrollTop
    }),
    defaultParent: () => {
        if (!dc.current) {
            const e = new p2({});
            e.mount(window),
            e.setOptions({
                layoutScroll: !0
            }),
            dc.current = e
        }
        return dc.current
    }
    ,
    resetTransform: (e, t) => {
        e.style.transform = t !== void 0 ? t : "none"
    }
    ,
    checkIsScrollRoot: e => window.getComputedStyle(e).position === "fixed"
})
  , Qh = m.createContext({
    transformPagePoint: e => e,
    isStatic: !1,
    reducedMotion: "never"
});
function sv(e, t) {
    if (typeof e == "function")
        return e(t);
    e != null && (e.current = t)
}
function m2(...e) {
    return t => {
        let n = !1;
        const r = e.map(o => {
            const s = sv(o, t);
            return !n && typeof s == "function" && (n = !0),
            s
        }
        );
        if (n)
            return () => {
                for (let o = 0; o < r.length; o++) {
                    const s = r[o];
                    typeof s == "function" ? s() : sv(e[o], null)
                }
            }
    }
}
function g2(...e) {
    return m.useCallback(m2(...e), e)
}
class v2 extends m.Component {
    getSnapshotBeforeUpdate(t) {
        const n = this.props.childRef.current;
        if (n && t.isPresent && !this.props.isPresent) {
            const r = n.offsetParent
              , o = Kd(r) && r.offsetWidth || 0
              , s = Kd(r) && r.offsetHeight || 0
              , i = this.props.sizeRef.current;
            i.height = n.offsetHeight || 0,
            i.width = n.offsetWidth || 0,
            i.top = n.offsetTop,
            i.left = n.offsetLeft,
            i.right = o - i.width - i.left,
            i.bottom = s - i.height - i.top
        }
        return null
    }
    componentDidUpdate() {}
    render() {
        return this.props.children
    }
}
function y2({children: e, isPresent: t, anchorX: n, anchorY: r, root: o}) {
    var d;
    const s = m.useId()
      , i = m.useRef(null)
      , a = m.useRef({
        width: 0,
        height: 0,
        top: 0,
        left: 0,
        right: 0,
        bottom: 0
    })
      , {nonce: l} = m.useContext(Qh)
      , u = ((d = e.props) == null ? void 0 : d.ref) ?? (e == null ? void 0 : e.ref)
      , c = g2(i, u);
    return m.useInsertionEffect( () => {
        const {width: f, height: h, top: S, left: p, right: w, bottom: v} = a.current;
        if (t || !i.current || !f || !h)
            return;
        const g = n === "left" ? `left: ${p}` : `right: ${w}`
          , x = r === "bottom" ? `bottom: ${v}` : `top: ${S}`;
        i.current.dataset.motionPopId = s;
        const C = document.createElement("style");
        l && (C.nonce = l);
        const b = o ?? document.head;
        return b.appendChild(C),
        C.sheet && C.sheet.insertRule(`
          [data-motion-pop-id="${s}"] {
            position: absolute !important;
            width: ${f}px !important;
            height: ${h}px !important;
            ${g}px !important;
            ${x}px !important;
          }
        `),
        () => {
            b.contains(C) && b.removeChild(C)
        }
    }
    , [t]),
    y.jsx(v2, {
        isPresent: t,
        childRef: i,
        sizeRef: a,
        children: m.cloneElement(e, {
            ref: c
        })
    })
}
const x2 = ({children: e, initial: t, isPresent: n, onExitComplete: r, custom: o, presenceAffectsLayout: s, mode: i, anchorX: a, anchorY: l, root: u}) => {
    const c = Ch(w2)
      , d = m.useId();
    let f = !0
      , h = m.useMemo( () => (f = !1,
    {
        id: d,
        initial: t,
        isPresent: n,
        custom: o,
        onExitComplete: S => {
            c.set(S, !0);
            for (const p of c.values())
                if (!p)
                    return;
            r && r()
        }
        ,
        register: S => (c.set(S, !1),
        () => c.delete(S))
    }), [n, c, r]);
    return s && f && (h = {
        ...h
    }),
    m.useMemo( () => {
        c.forEach( (S, p) => c.set(p, !1))
    }
    , [n]),
    m.useEffect( () => {
        !n && !c.size && r && r()
    }
    , [n]),
    i === "popLayout" && (e = y.jsx(y2, {
        isPresent: n,
        anchorX: a,
        anchorY: l,
        root: u,
        children: e
    })),
    y.jsx(au.Provider, {
        value: h,
        children: e
    })
}
;
function w2() {
    return new Map
}
function aS(e=!0) {
    const t = m.useContext(au);
    if (t === null)
        return [!0, null];
    const {isPresent: n, onExitComplete: r, register: o} = t
      , s = m.useId();
    m.useEffect( () => {
        if (e)
            return o(s)
    }
    , [e]);
    const i = m.useCallback( () => e && r && r(s), [s, r, e]);
    return !n && r ? [!1, i] : [!0]
}
const ma = e => e.key || "";
function iv(e) {
    const t = [];
    return m.Children.forEach(e, n => {
        m.isValidElement(n) && t.push(n)
    }
    ),
    t
}
const S2 = ({children: e, custom: t, initial: n=!0, onExitComplete: r, presenceAffectsLayout: o=!0, mode: s="sync", propagate: i=!1, anchorX: a="left", anchorY: l="top", root: u}) => {
    const [c,d] = aS(i)
      , f = m.useMemo( () => iv(e), [e])
      , h = i && !c ? [] : f.map(ma)
      , S = m.useRef(!0)
      , p = m.useRef(f)
      , w = Ch( () => new Map)
      , v = m.useRef(new Set)
      , [g,x] = m.useState(f)
      , [C,b] = m.useState(f);
    Vw( () => {
        S.current = !1,
        p.current = f;
        for (let P = 0; P < C.length; P++) {
            const N = ma(C[P]);
            h.includes(N) ? (w.delete(N),
            v.current.delete(N)) : w.get(N) !== !0 && w.set(N, !1)
        }
    }
    , [C, h.length, h.join("-")]);
    const E = [];
    if (f !== g) {
        let P = [...f];
        for (let N = 0; N < C.length; N++) {
            const M = C[N]
              , V = ma(M);
            h.includes(V) || (P.splice(N, 0, M),
            E.push(M))
        }
        return s === "wait" && E.length && (P = E),
        b(iv(P)),
        x(f),
        null
    }
    const {forceRender: T} = m.useContext(Sh);
    return y.jsx(y.Fragment, {
        children: C.map(P => {
            const N = ma(P)
              , M = i && !c ? !1 : f === C || h.includes(N)
              , V = () => {
                if (v.current.has(N))
                    return;
                if (v.current.add(N),
                w.has(N))
                    w.set(N, !0);
                else
                    return;
                let O = !0;
                w.forEach(W => {
                    W || (O = !1)
                }
                ),
                O && (T == null || T(),
                b(p.current),
                i && (d == null || d()),
                r && r())
            }
            ;
            return y.jsx(x2, {
                isPresent: M,
                initial: !S.current || n ? void 0 : !1,
                custom: t,
                presenceAffectsLayout: o,
                mode: s,
                root: u,
                onExitComplete: M ? void 0 : V,
                anchorX: a,
                anchorY: l,
                children: P
            }, N)
        }
        )
    })
}
  , lS = m.createContext({
    strict: !1
})
  , av = {
    animation: ["animate", "variants", "whileHover", "whileTap", "exit", "whileInView", "whileFocus", "whileDrag"],
    exit: ["exit"],
    drag: ["drag", "dragControls"],
    focus: ["whileFocus"],
    hover: ["whileHover", "onHoverStart", "onHoverEnd"],
    tap: ["whileTap", "onTap", "onTapStart", "onTapCancel"],
    pan: ["onPan", "onPanStart", "onPanSessionStart", "onPanEnd"],
    inView: ["whileInView", "onViewportEnter", "onViewportLeave"],
    layout: ["layout", "layoutId"]
};
let lv = !1;
function C2() {
    if (lv)
        return;
    const e = {};
    for (const t in av)
        e[t] = {
            isEnabled: n => av[t].some(r => !!n[r])
        };
    _1(e),
    lv = !0
}
function uS() {
    return C2(),
    aD()
}
function b2(e) {
    const t = uS();
    for (const n in e)
        t[n] = {
            ...t[n],
            ...e[n]
        };
    _1(t)
}
const E2 = new Set(["animate", "exit", "variants", "initial", "style", "values", "variants", "transition", "transformTemplate", "custom", "inherit", "onBeforeLayoutMeasure", "onAnimationStart", "onAnimationComplete", "onUpdate", "onDragStart", "onDrag", "onDragEnd", "onMeasureDragConstraints", "onDirectionLock", "onDragTransitionEnd", "_dragX", "_dragY", "onHoverStart", "onHoverEnd", "onViewportEnter", "onViewportLeave", "globalTapTarget", "ignoreStrict", "viewport"]);
function Pl(e) {
    return e.startsWith("while") || e.startsWith("drag") && e !== "draggable" || e.startsWith("layout") || e.startsWith("onTap") || e.startsWith("onPan") || e.startsWith("onLayout") || E2.has(e)
}
let cS = e => !Pl(e);
function T2(e) {
    typeof e == "function" && (cS = t => t.startsWith("on") ? !Pl(t) : e(t))
}
try {
    T2(require("@emotion/is-prop-valid").default)
} catch {}
function P2(e, t, n) {
    const r = {};
    for (const o in e)
        o === "values" && typeof e.values == "object" || (cS(o) || n === !0 && Pl(o) || !t && !Pl(o) || e.draggable && o.startsWith("onDrag")) && (r[o] = e[o]);
    return r
}
const du = m.createContext({});
function R2(e, t) {
    if (cu(e)) {
        const {initial: n, animate: r} = e;
        return {
            initial: n === !1 || Pi(n) ? n : void 0,
            animate: Pi(r) ? r : void 0
        }
    }
    return e.inherit !== !1 ? t : {}
}
function k2(e) {
    const {initial: t, animate: n} = R2(e, m.useContext(du));
    return m.useMemo( () => ({
        initial: t,
        animate: n
    }), [uv(t), uv(n)])
}
function uv(e) {
    return Array.isArray(e) ? e.join(" ") : e
}
const Xh = () => ({
    style: {},
    transform: {},
    transformOrigin: {},
    vars: {}
});
function dS(e, t, n) {
    for (const r in t)
        !Ye(t[r]) && !W1(r, n) && (e[r] = t[r])
}
function N2({transformTemplate: e}, t) {
    return m.useMemo( () => {
        const n = Xh();
        return Gh(n, t, e),
        Object.assign({}, n.vars, n.style)
    }
    , [t])
}
function A2(e, t) {
    const n = e.style || {}
      , r = {};
    return dS(r, n, e),
    Object.assign(r, N2(e, t)),
    r
}
function M2(e, t) {
    const n = {}
      , r = A2(e, t);
    return e.drag && e.dragListener !== !1 && (n.draggable = !1,
    r.userSelect = r.WebkitUserSelect = r.WebkitTouchCallout = "none",
    r.touchAction = e.drag === !0 ? "none" : `pan-${e.drag === "x" ? "y" : "x"}`),
    e.tabIndex === void 0 && (e.onTap || e.onTapStart || e.whileTap) && (n.tabIndex = 0),
    n.style = r,
    n
}
const fS = () => ({
    ...Xh(),
    attrs: {}
});
function j2(e, t, n, r) {
    const o = m.useMemo( () => {
        const s = fS();
        return H1(s, t, G1(r), e.transformTemplate, e.style),
        {
            ...s.attrs,
            style: {
                ...s.style
            }
        }
    }
    , [t]);
    if (e.style) {
        const s = {};
        dS(s, e.style, e),
        o.style = {
            ...s,
            ...o.style
        }
    }
    return o
}
const D2 = ["animate", "circle", "defs", "desc", "ellipse", "g", "image", "line", "filter", "marker", "mask", "metadata", "path", "pattern", "polygon", "polyline", "rect", "stop", "switch", "symbol", "svg", "text", "tspan", "use", "view"];
function qh(e) {
    return typeof e != "string" || e.includes("-") ? !1 : !!(D2.indexOf(e) > -1 || /[A-Z]/u.test(e))
}
function I2(e, t, n, {latestValues: r}, o, s=!1, i) {
    const l = (i ?? qh(e) ? j2 : M2)(t, r, o, e)
      , u = P2(t, typeof e == "string", s)
      , c = e !== m.Fragment ? {
        ...u,
        ...l,
        ref: n
    } : {}
      , {children: d} = t
      , f = m.useMemo( () => Ye(d) ? d.get() : d, [d]);
    return m.createElement(e, {
        ...c,
        children: f
    })
}
function O2({scrapeMotionValuesFromProps: e, createRenderState: t}, n, r, o) {
    return {
        latestValues: L2(n, r, o, e),
        renderState: t()
    }
}
function L2(e, t, n, r) {
    const o = {}
      , s = r(e, {});
    for (const f in s)
        o[f] = Fa(s[f]);
    let {initial: i, animate: a} = e;
    const l = cu(e)
      , u = L1(e);
    t && u && !l && e.inherit !== !1 && (i === void 0 && (i = t.initial),
    a === void 0 && (a = t.animate));
    let c = n ? n.initial === !1 : !1;
    c = c || i === !1;
    const d = c ? a : i;
    if (d && typeof d != "boolean" && !uu(d)) {
        const f = Array.isArray(d) ? d : [d];
        for (let h = 0; h < f.length; h++) {
            const S = Bh(e, f[h]);
            if (S) {
                const {transitionEnd: p, transition: w, ...v} = S;
                for (const g in v) {
                    let x = v[g];
                    if (Array.isArray(x)) {
                        const C = c ? x.length - 1 : 0;
                        x = x[C]
                    }
                    x !== null && (o[g] = x)
                }
                for (const g in p)
                    o[g] = p[g]
            }
        }
    }
    return o
}
const hS = e => (t, n) => {
    const r = m.useContext(du)
      , o = m.useContext(au)
      , s = () => O2(e, t, r, o);
    return n ? s() : Ch(s)
}
  , _2 = hS({
    scrapeMotionValuesFromProps: Yh,
    createRenderState: Xh
})
  , F2 = hS({
    scrapeMotionValuesFromProps: Y1,
    createRenderState: fS
})
  , V2 = Symbol.for("motionComponentSymbol");
function B2(e, t, n) {
    const r = m.useRef(n);
    m.useInsertionEffect( () => {
        r.current = n
    }
    );
    const o = m.useRef(null);
    return m.useCallback(s => {
        var a;
        s && ((a = e.onMount) == null || a.call(e, s)),
        t && (s ? t.mount(s) : t.unmount());
        const i = r.current;
        if (typeof i == "function")
            if (s) {
                const l = i(s);
                typeof l == "function" && (o.current = l)
            } else
                o.current ? (o.current(),
                o.current = null) : i(s);
        else
            i && (i.current = s)
    }
    , [t])
}
const pS = m.createContext({});
function _s(e) {
    return e && typeof e == "object" && Object.prototype.hasOwnProperty.call(e, "current")
}
function $2(e, t, n, r, o, s) {
    var v, g;
    const {visualElement: i} = m.useContext(du)
      , a = m.useContext(lS)
      , l = m.useContext(au)
      , u = m.useContext(Qh).reducedMotion
      , c = m.useRef(null)
      , d = m.useRef(!1);
    r = r || a.renderer,
    !c.current && r && (c.current = r(e, {
        visualState: t,
        parent: i,
        props: n,
        presenceContext: l,
        blockInitialAnimation: l ? l.initial === !1 : !1,
        reducedMotionConfig: u,
        isSVG: s
    }),
    d.current && c.current && (c.current.manuallyAnimateOnMount = !0));
    const f = c.current
      , h = m.useContext(pS);
    f && !f.projection && o && (f.type === "html" || f.type === "svg") && z2(c.current, n, o, h);
    const S = m.useRef(!1);
    m.useInsertionEffect( () => {
        f && S.current && f.update(n, l)
    }
    );
    const p = n[C1]
      , w = m.useRef(!!p && !((v = window.MotionHandoffIsComplete) != null && v.call(window, p)) && ((g = window.MotionHasOptimisedAnimation) == null ? void 0 : g.call(window, p)));
    return Vw( () => {
        d.current = !0,
        f && (S.current = !0,
        window.MotionIsMounted = !0,
        f.updateFeatures(),
        f.scheduleRenderMicrotask(),
        w.current && f.animationState && f.animationState.animateChanges())
    }
    ),
    m.useEffect( () => {
        f && (!w.current && f.animationState && f.animationState.animateChanges(),
        w.current && (queueMicrotask( () => {
            var x;
            (x = window.MotionHandoffMarkAsComplete) == null || x.call(window, p)
        }
        ),
        w.current = !1),
        f.enteringChildren = void 0)
    }
    ),
    f
}
function z2(e, t, n, r) {
    const {layoutId: o, layout: s, drag: i, dragConstraints: a, layoutScroll: l, layoutRoot: u, layoutCrossfade: c} = t;
    e.projection = new n(e.latestValues,t["data-framer-portal-id"] ? void 0 : mS(e.parent)),
    e.projection.setOptions({
        layoutId: o,
        layout: s,
        alwaysMeasureLayout: !!i || a && _s(a),
        visualElement: e,
        animationType: typeof s == "string" ? s : "both",
        initialPromotionConfig: r,
        crossfade: c,
        layoutScroll: l,
        layoutRoot: u
    })
}
function mS(e) {
    if (e)
        return e.options.allowProjection !== !1 ? e.projection : mS(e.parent)
}
function fc(e, {forwardMotionProps: t=!1, type: n}={}, r, o) {
    r && b2(r);
    const s = n ? n === "svg" : qh(e)
      , i = s ? F2 : _2;
    function a(u, c) {
        let d;
        const f = {
            ...m.useContext(Qh),
            ...u,
            layoutId: U2(u)
        }
          , {isStatic: h} = f
          , S = k2(u)
          , p = i(u, h);
        if (!h && Fw) {
            W2();
            const w = H2(f);
            d = w.MeasureLayout,
            S.visualElement = $2(e, p, f, o, w.ProjectionNode, s)
        }
        return y.jsxs(du.Provider, {
            value: S,
            children: [d && S.visualElement ? y.jsx(d, {
                visualElement: S.visualElement,
                ...f
            }) : null, I2(e, u, B2(p, S.visualElement, c), p, h, t, s)]
        })
    }
    a.displayName = `motion.${typeof e == "string" ? e : `create(${e.displayName ?? e.name ?? ""})`}`;
    const l = m.forwardRef(a);
    return l[V2] = e,
    l
}
function U2({layoutId: e}) {
    const t = m.useContext(Sh).id;
    return t && e !== void 0 ? t + "-" + e : e
}
function W2(e, t) {
    m.useContext(lS).strict
}
function H2(e) {
    const t = uS()
      , {drag: n, layout: r} = t;
    if (!n && !r)
        return {};
    const o = {
        ...n,
        ...r
    };
    return {
        MeasureLayout: n != null && n.isEnabled(e) || r != null && r.isEnabled(e) ? o.MeasureLayout : void 0,
        ProjectionNode: o.ProjectionNode
    }
}
function K2(e, t) {
    if (typeof Proxy > "u")
        return fc;
    const n = new Map
      , r = (s, i) => fc(s, i, e, t)
      , o = (s, i) => r(s, i);
    return new Proxy(o,{
        get: (s, i) => i === "create" ? r : (n.has(i) || n.set(i, fc(i, void 0, e, t)),
        n.get(i))
    })
}
const G2 = (e, t) => t.isSVG ?? qh(e) ? new ED(t) : new yD(t,{
    allowProjection: e !== m.Fragment
});
class Y2 extends vr {
    constructor(t) {
        super(t),
        t.animationState || (t.animationState = ND(t))
    }
    updateAnimationControlsSubscription() {
        const {animate: t} = this.node.getProps();
        uu(t) && (this.unmountControls = t.subscribe(this.node))
    }
    mount() {
        this.updateAnimationControlsSubscription()
    }
    update() {
        const {animate: t} = this.node.getProps()
          , {animate: n} = this.node.prevProps || {};
        t !== n && this.updateAnimationControlsSubscription()
    }
    unmount() {
        var t;
        this.node.animationState.reset(),
        (t = this.unmountControls) == null || t.call(this)
    }
}
let Q2 = 0;
class X2 extends vr {
    constructor() {
        super(...arguments),
        this.id = Q2++
    }
    update() {
        if (!this.node.presenceContext)
            return;
        const {isPresent: t, onExitComplete: n} = this.node.presenceContext
          , {isPresent: r} = this.node.prevPresenceContext || {};
        if (!this.node.animationState || t === r)
            return;
        const o = this.node.animationState.setActive("exit", !t);
        n && !t && o.then( () => {
            n(this.id)
        }
        )
    }
    mount() {
        const {register: t, onExitComplete: n} = this.node.presenceContext || {};
        n && n(this.id),
        t && (this.unmount = t(this.id))
    }
    unmount() {}
}
const q2 = {
    animation: {
        Feature: Y2
    },
    exit: {
        Feature: X2
    }
};
function zi(e) {
    return {
        point: {
            x: e.pageX,
            y: e.pageY
        }
    }
}
const Z2 = e => t => Wh(t) && e(t, zi(t));
function Js(e, t, n, r) {
    return Ri(e, t, Z2(n), r)
}
const gS = ({current: e}) => e ? e.ownerDocument.defaultView : null
  , cv = (e, t) => Math.abs(e - t);
function J2(e, t) {
    const n = cv(e.x, t.x)
      , r = cv(e.y, t.y);
    return Math.sqrt(n ** 2 + r ** 2)
}
const dv = new Set(["auto", "scroll"]);
class vS {
    constructor(t, n, {transformPagePoint: r, contextWindow: o=window, dragSnapToOrigin: s=!1, distanceThreshold: i=3, element: a}={}) {
        if (this.startEvent = null,
        this.lastMoveEvent = null,
        this.lastMoveEventInfo = null,
        this.handlers = {},
        this.contextWindow = window,
        this.scrollPositions = new Map,
        this.removeScrollListeners = null,
        this.onElementScroll = h => {
            this.handleScroll(h.target)
        }
        ,
        this.onWindowScroll = () => {
            this.handleScroll(window)
        }
        ,
        this.updatePoint = () => {
            if (!(this.lastMoveEvent && this.lastMoveEventInfo))
                return;
            const h = pc(this.lastMoveEventInfo, this.history)
              , S = this.startEvent !== null
              , p = J2(h.offset, {
                x: 0,
                y: 0
            }) >= this.distanceThreshold;
            if (!S && !p)
                return;
            const {point: w} = h
              , {timestamp: v} = Fe;
            this.history.push({
                ...w,
                timestamp: v
            });
            const {onStart: g, onMove: x} = this.handlers;
            S || (g && g(this.lastMoveEvent, h),
            this.startEvent = this.lastMoveEvent),
            x && x(this.lastMoveEvent, h)
        }
        ,
        this.handlePointerMove = (h, S) => {
            this.lastMoveEvent = h,
            this.lastMoveEventInfo = hc(S, this.transformPagePoint),
            pe.update(this.updatePoint, !0)
        }
        ,
        this.handlePointerUp = (h, S) => {
            this.end();
            const {onEnd: p, onSessionEnd: w, resumeAnimation: v} = this.handlers;
            if ((this.dragSnapToOrigin || !this.startEvent) && v && v(),
            !(this.lastMoveEvent && this.lastMoveEventInfo))
                return;
            const g = pc(h.type === "pointercancel" ? this.lastMoveEventInfo : hc(S, this.transformPagePoint), this.history);
            this.startEvent && p && p(h, g),
            w && w(h, g)
        }
        ,
        !Wh(t))
            return;
        this.dragSnapToOrigin = s,
        this.handlers = n,
        this.transformPagePoint = r,
        this.distanceThreshold = i,
        this.contextWindow = o || window;
        const l = zi(t)
          , u = hc(l, this.transformPagePoint)
          , {point: c} = u
          , {timestamp: d} = Fe;
        this.history = [{
            ...c,
            timestamp: d
        }];
        const {onSessionStart: f} = n;
        f && f(t, pc(u, this.history)),
        this.removeListeners = Vi(Js(this.contextWindow, "pointermove", this.handlePointerMove), Js(this.contextWindow, "pointerup", this.handlePointerUp), Js(this.contextWindow, "pointercancel", this.handlePointerUp)),
        a && this.startScrollTracking(a)
    }
    startScrollTracking(t) {
        let n = t.parentElement;
        for (; n; ) {
            const r = getComputedStyle(n);
            (dv.has(r.overflowX) || dv.has(r.overflowY)) && this.scrollPositions.set(n, {
                x: n.scrollLeft,
                y: n.scrollTop
            }),
            n = n.parentElement
        }
        this.scrollPositions.set(window, {
            x: window.scrollX,
            y: window.scrollY
        }),
        window.addEventListener("scroll", this.onElementScroll, {
            capture: !0,
            passive: !0
        }),
        window.addEventListener("scroll", this.onWindowScroll, {
            passive: !0
        }),
        this.removeScrollListeners = () => {
            window.removeEventListener("scroll", this.onElementScroll, {
                capture: !0
            }),
            window.removeEventListener("scroll", this.onWindowScroll)
        }
    }
    handleScroll(t) {
        const n = this.scrollPositions.get(t);
        if (!n)
            return;
        const r = t === window
          , o = r ? {
            x: window.scrollX,
            y: window.scrollY
        } : {
            x: t.scrollLeft,
            y: t.scrollTop
        }
          , s = {
            x: o.x - n.x,
            y: o.y - n.y
        };
        s.x === 0 && s.y === 0 || (r ? this.lastMoveEventInfo && (this.lastMoveEventInfo.point.x += s.x,
        this.lastMoveEventInfo.point.y += s.y) : this.history.length > 0 && (this.history[0].x -= s.x,
        this.history[0].y -= s.y),
        this.scrollPositions.set(t, o),
        pe.update(this.updatePoint, !0))
    }
    updateHandlers(t) {
        this.handlers = t
    }
    end() {
        this.removeListeners && this.removeListeners(),
        this.removeScrollListeners && this.removeScrollListeners(),
        this.scrollPositions.clear(),
        fr(this.updatePoint)
    }
}
function hc(e, t) {
    return t ? {
        point: t(e.point)
    } : e
}
function fv(e, t) {
    return {
        x: e.x - t.x,
        y: e.y - t.y
    }
}
function pc({point: e}, t) {
    return {
        point: e,
        delta: fv(e, yS(t)),
        offset: fv(e, eI(t)),
        velocity: tI(t, .1)
    }
}
function eI(e) {
    return e[0]
}
function yS(e) {
    return e[e.length - 1]
}
function tI(e, t) {
    if (e.length < 2)
        return {
            x: 0,
            y: 0
        };
    let n = e.length - 1
      , r = null;
    const o = yS(e);
    for (; n >= 0 && (r = e[n],
    !(o.timestamp - r.timestamp > cn(t))); )
        n--;
    if (!r)
        return {
            x: 0,
            y: 0
        };
    const s = Tt(o.timestamp - r.timestamp);
    if (s === 0)
        return {
            x: 0,
            y: 0
        };
    const i = {
        x: (o.x - r.x) / s,
        y: (o.y - r.y) / s
    };
    return i.x === 1 / 0 && (i.x = 0),
    i.y === 1 / 0 && (i.y = 0),
    i
}
function nI(e, {min: t, max: n}, r) {
    return t !== void 0 && e < t ? e = r ? we(t, e, r.min) : Math.max(e, t) : n !== void 0 && e > n && (e = r ? we(n, e, r.max) : Math.min(e, n)),
    e
}
function hv(e, t, n) {
    return {
        min: t !== void 0 ? e.min + t : void 0,
        max: n !== void 0 ? e.max + n - (e.max - e.min) : void 0
    }
}
function rI(e, {top: t, left: n, bottom: r, right: o}) {
    return {
        x: hv(e.x, n, o),
        y: hv(e.y, t, r)
    }
}
function pv(e, t) {
    let n = t.min - e.min
      , r = t.max - e.max;
    return t.max - t.min < e.max - e.min && ([n,r] = [r, n]),
    {
        min: n,
        max: r
    }
}
function oI(e, t) {
    return {
        x: pv(e.x, t.x),
        y: pv(e.y, t.y)
    }
}
function sI(e, t) {
    let n = .5;
    const r = et(e)
      , o = et(t);
    return o > r ? n = bi(t.min, t.max - r, e.min) : r > o && (n = bi(e.min, e.max - o, t.min)),
    hn(0, 1, n)
}
function iI(e, t) {
    const n = {};
    return t.min !== void 0 && (n.min = t.min - e.min),
    t.max !== void 0 && (n.max = t.max - e.min),
    n
}
const qd = .35;
function aI(e=qd) {
    return e === !1 ? e = 0 : e === !0 && (e = qd),
    {
        x: mv(e, "left", "right"),
        y: mv(e, "top", "bottom")
    }
}
function mv(e, t, n) {
    return {
        min: gv(e, t),
        max: gv(e, n)
    }
}
function gv(e, t) {
    return typeof e == "number" ? e : e[t] || 0
}
const lI = new WeakMap;
class uI {
    constructor(t) {
        this.openDragLock = null,
        this.isDragging = !1,
        this.currentDirection = null,
        this.originPoint = {
            x: 0,
            y: 0
        },
        this.constraints = !1,
        this.hasMutatedConstraints = !1,
        this.elastic = Me(),
        this.latestPointerEvent = null,
        this.latestPanInfo = null,
        this.visualElement = t
    }
    start(t, {snapToCursor: n=!1, distanceThreshold: r}={}) {
        const {presenceContext: o} = this.visualElement;
        if (o && o.isPresent === !1)
            return;
        const s = d => {
            n ? (this.stopAnimation(),
            this.snapToCursor(zi(d).point)) : this.pauseAnimation()
        }
          , i = (d, f) => {
            this.stopAnimation();
            const {drag: h, dragPropagation: S, onDragStart: p} = this.getProps();
            if (h && !S && (this.openDragLock && this.openDragLock(),
            this.openDragLock = Qj(h),
            !this.openDragLock))
                return;
            this.latestPointerEvent = d,
            this.latestPanInfo = f,
            this.isDragging = !0,
            this.currentDirection = null,
            this.resolveConstraints(),
            this.visualElement.projection && (this.visualElement.projection.isAnimationBlocked = !0,
            this.visualElement.projection.target = void 0),
            wt(v => {
                let g = this.getAxisMotionValue(v).get() || 0;
                if (dn.test(g)) {
                    const {projection: x} = this.visualElement;
                    if (x && x.layout) {
                        const C = x.layout.layoutBox[v];
                        C && (g = et(C) * (parseFloat(g) / 100))
                    }
                }
                this.originPoint[v] = g
            }
            ),
            p && pe.postRender( () => p(d, f)),
            Ud(this.visualElement, "transform");
            const {animationState: w} = this.visualElement;
            w && w.setActive("whileDrag", !0)
        }
          , a = (d, f) => {
            this.latestPointerEvent = d,
            this.latestPanInfo = f;
            const {dragPropagation: h, dragDirectionLock: S, onDirectionLock: p, onDrag: w} = this.getProps();
            if (!h && !this.openDragLock)
                return;
            const {offset: v} = f;
            if (S && this.currentDirection === null) {
                this.currentDirection = cI(v),
                this.currentDirection !== null && p && p(this.currentDirection);
                return
            }
            this.updateAxis("x", f.point, v),
            this.updateAxis("y", f.point, v),
            this.visualElement.render(),
            w && w(d, f)
        }
          , l = (d, f) => {
            this.latestPointerEvent = d,
            this.latestPanInfo = f,
            this.stop(d, f),
            this.latestPointerEvent = null,
            this.latestPanInfo = null
        }
          , u = () => wt(d => {
            var f;
            return this.getAnimationState(d) === "paused" && ((f = this.getAxisMotionValue(d).animation) == null ? void 0 : f.play())
        }
        )
          , {dragSnapToOrigin: c} = this.getProps();
        this.panSession = new vS(t,{
            onSessionStart: s,
            onStart: i,
            onMove: a,
            onSessionEnd: l,
            resumeAnimation: u
        },{
            transformPagePoint: this.visualElement.getTransformPagePoint(),
            dragSnapToOrigin: c,
            distanceThreshold: r,
            contextWindow: gS(this.visualElement),
            element: this.visualElement.current
        })
    }
    stop(t, n) {
        const r = t || this.latestPointerEvent
          , o = n || this.latestPanInfo
          , s = this.isDragging;
        if (this.cancel(),
        !s || !o || !r)
            return;
        const {velocity: i} = o;
        this.startAnimation(i);
        const {onDragEnd: a} = this.getProps();
        a && pe.postRender( () => a(r, o))
    }
    cancel() {
        this.isDragging = !1;
        const {projection: t, animationState: n} = this.visualElement;
        t && (t.isAnimationBlocked = !1),
        this.endPanSession();
        const {dragPropagation: r} = this.getProps();
        !r && this.openDragLock && (this.openDragLock(),
        this.openDragLock = null),
        n && n.setActive("whileDrag", !1)
    }
    endPanSession() {
        this.panSession && this.panSession.end(),
        this.panSession = void 0
    }
    updateAxis(t, n, r) {
        const {drag: o} = this.getProps();
        if (!r || !ga(t, o, this.currentDirection))
            return;
        const s = this.getAxisMotionValue(t);
        let i = this.originPoint[t] + r[t];
        this.constraints && this.constraints[t] && (i = nI(i, this.constraints[t], this.elastic[t])),
        s.set(i)
    }
    resolveConstraints() {
        var s;
        const {dragConstraints: t, dragElastic: n} = this.getProps()
          , r = this.visualElement.projection && !this.visualElement.projection.layout ? this.visualElement.projection.measure(!1) : (s = this.visualElement.projection) == null ? void 0 : s.layout
          , o = this.constraints;
        t && _s(t) ? this.constraints || (this.constraints = this.resolveRefConstraints()) : t && r ? this.constraints = rI(r.layoutBox, t) : this.constraints = !1,
        this.elastic = aI(n),
        o !== this.constraints && r && this.constraints && !this.hasMutatedConstraints && wt(i => {
            this.constraints !== !1 && this.getAxisMotionValue(i) && (this.constraints[i] = iI(r.layoutBox[i], this.constraints[i]))
        }
        )
    }
    resolveRefConstraints() {
        const {dragConstraints: t, onMeasureDragConstraints: n} = this.getProps();
        if (!t || !_s(t))
            return !1;
        const r = t.current;
        ns(r !== null, "If `dragConstraints` is set as a React ref, that ref must be passed to another component's `ref` prop.", "drag-constraints-ref");
        const {projection: o} = this.visualElement;
        if (!o || !o.layout)
            return !1;
        const s = fD(r, o.root, this.visualElement.getTransformPagePoint());
        let i = oI(o.layout.layoutBox, s);
        if (n) {
            const a = n(uD(i));
            this.hasMutatedConstraints = !!a,
            a && (i = V1(a))
        }
        return i
    }
    startAnimation(t) {
        const {drag: n, dragMomentum: r, dragElastic: o, dragTransition: s, dragSnapToOrigin: i, onDragTransitionEnd: a} = this.getProps()
          , l = this.constraints || {}
          , u = wt(c => {
            if (!ga(c, n, this.currentDirection))
                return;
            let d = l && l[c] || {};
            i && (d = {
                min: 0,
                max: 0
            });
            const f = o ? 200 : 1e6
              , h = o ? 40 : 1e7
              , S = {
                type: "inertia",
                velocity: r ? t[c] : 0,
                bounceStiffness: f,
                bounceDamping: h,
                timeConstant: 750,
                restDelta: 1,
                restSpeed: 10,
                ...s,
                ...d
            };
            return this.startAxisValueAnimation(c, S)
        }
        );
        return Promise.all(u).then(a)
    }
    startAxisValueAnimation(t, n) {
        const r = this.getAxisMotionValue(t);
        return Ud(this.visualElement, t),
        r.start(Vh(t, r, 0, n, this.visualElement, !1))
    }
    stopAnimation() {
        wt(t => this.getAxisMotionValue(t).stop())
    }
    pauseAnimation() {
        wt(t => {
            var n;
            return (n = this.getAxisMotionValue(t).animation) == null ? void 0 : n.pause()
        }
        )
    }
    getAnimationState(t) {
        var n;
        return (n = this.getAxisMotionValue(t).animation) == null ? void 0 : n.state
    }
    getAxisMotionValue(t) {
        const n = `_drag${t.toUpperCase()}`
          , r = this.visualElement.getProps()
          , o = r[n];
        return o || this.visualElement.getValue(t, (r.initial ? r.initial[t] : void 0) || 0)
    }
    snapToCursor(t) {
        wt(n => {
            const {drag: r} = this.getProps();
            if (!ga(n, r, this.currentDirection))
                return;
            const {projection: o} = this.visualElement
              , s = this.getAxisMotionValue(n);
            if (o && o.layout) {
                const {min: i, max: a} = o.layout.layoutBox[n]
                  , l = s.get() || 0;
                s.set(t[n] - we(i, a, .5) + l)
            }
        }
        )
    }
    scalePositionWithinConstraints() {
        if (!this.visualElement.current)
            return;
        const {drag: t, dragConstraints: n} = this.getProps()
          , {projection: r} = this.visualElement;
        if (!_s(n) || !r || !this.constraints)
            return;
        this.stopAnimation();
        const o = {
            x: 0,
            y: 0
        };
        wt(i => {
            const a = this.getAxisMotionValue(i);
            if (a && this.constraints !== !1) {
                const l = a.get();
                o[i] = sI({
                    min: l,
                    max: l
                }, this.constraints[i])
            }
        }
        );
        const {transformTemplate: s} = this.visualElement.getProps();
        this.visualElement.current.style.transform = s ? s({}, "") : "none",
        r.root && r.root.updateScroll(),
        r.updateLayout(),
        this.resolveConstraints(),
        wt(i => {
            if (!ga(i, t, null))
                return;
            const a = this.getAxisMotionValue(i)
              , {min: l, max: u} = this.constraints[i];
            a.set(we(l, u, o[i]))
        }
        )
    }
    addListeners() {
        if (!this.visualElement.current)
            return;
        lI.set(this.visualElement, this);
        const t = this.visualElement.current
          , n = Js(t, "pointerdown", l => {
            const {drag: u, dragListener: c=!0} = this.getProps()
              , d = l.target
              , f = d !== t && D1(d);
            u && c && !f && this.start(l)
        }
        )
          , r = () => {
            const {dragConstraints: l} = this.getProps();
            _s(l) && l.current && (this.constraints = this.resolveRefConstraints())
        }
          , {projection: o} = this.visualElement
          , s = o.addEventListener("measure", r);
        o && !o.layout && (o.root && o.root.updateScroll(),
        o.updateLayout()),
        pe.read(r);
        const i = Ri(window, "resize", () => this.scalePositionWithinConstraints())
          , a = o.addEventListener("didUpdate", ({delta: l, hasLayoutChanged: u}) => {
            this.isDragging && u && (wt(c => {
                const d = this.getAxisMotionValue(c);
                d && (this.originPoint[c] += l[c].translate,
                d.set(d.get() + l[c].translate))
            }
            ),
            this.visualElement.render())
        }
        );
        return () => {
            i(),
            n(),
            s(),
            a && a()
        }
    }
    getProps() {
        const t = this.visualElement.getProps()
          , {drag: n=!1, dragDirectionLock: r=!1, dragPropagation: o=!1, dragConstraints: s=!1, dragElastic: i=qd, dragMomentum: a=!0} = t;
        return {
            ...t,
            drag: n,
            dragDirectionLock: r,
            dragPropagation: o,
            dragConstraints: s,
            dragElastic: i,
            dragMomentum: a
        }
    }
}
function ga(e, t, n) {
    return (t === !0 || t === e) && (n === null || n === e)
}
function cI(e, t=10) {
    let n = null;
    return Math.abs(e.y) > t ? n = "y" : Math.abs(e.x) > t && (n = "x"),
    n
}
class dI extends vr {
    constructor(t) {
        super(t),
        this.removeGroupControls = Rt,
        this.removeListeners = Rt,
        this.controls = new uI(t)
    }
    mount() {
        const {dragControls: t} = this.node.getProps();
        t && (this.removeGroupControls = t.subscribe(this.controls)),
        this.removeListeners = this.controls.addListeners() || Rt
    }
    update() {
        const {dragControls: t} = this.node.getProps()
          , {dragControls: n} = this.node.prevProps || {};
        t !== n && (this.removeGroupControls(),
        t && (this.removeGroupControls = t.subscribe(this.controls)))
    }
    unmount() {
        this.removeGroupControls(),
        this.removeListeners(),
        this.controls.isDragging || this.controls.endPanSession()
    }
}
const vv = e => (t, n) => {
    e && pe.postRender( () => e(t, n))
}
;
class fI extends vr {
    constructor() {
        super(...arguments),
        this.removePointerDownListener = Rt
    }
    onPointerDown(t) {
        this.session = new vS(t,this.createPanHandlers(),{
            transformPagePoint: this.node.getTransformPagePoint(),
            contextWindow: gS(this.node)
        })
    }
    createPanHandlers() {
        const {onPanSessionStart: t, onPanStart: n, onPan: r, onPanEnd: o} = this.node.getProps();
        return {
            onSessionStart: vv(t),
            onStart: vv(n),
            onMove: r,
            onEnd: (s, i) => {
                delete this.session,
                o && pe.postRender( () => o(s, i))
            }
        }
    }
    mount() {
        this.removePointerDownListener = Js(this.node.current, "pointerdown", t => this.onPointerDown(t))
    }
    update() {
        this.session && this.session.updateHandlers(this.createPanHandlers())
    }
    unmount() {
        this.removePointerDownListener(),
        this.session && this.session.end()
    }
}
let mc = !1;
class hI extends m.Component {
    componentDidMount() {
        const {visualElement: t, layoutGroup: n, switchLayoutGroup: r, layoutId: o} = this.props
          , {projection: s} = t;
        s && (n.group && n.group.add(s),
        r && r.register && o && r.register(s),
        mc && s.root.didUpdate(),
        s.addEventListener("animationComplete", () => {
            this.safeToRemove()
        }
        ),
        s.setOptions({
            ...s.options,
            layoutDependency: this.props.layoutDependency,
            onExitComplete: () => this.safeToRemove()
        })),
        Va.hasEverUpdated = !0
    }
    getSnapshotBeforeUpdate(t) {
        const {layoutDependency: n, visualElement: r, drag: o, isPresent: s} = this.props
          , {projection: i} = r;
        return i && (i.isPresent = s,
        t.layoutDependency !== n && i.setOptions({
            ...i.options,
            layoutDependency: n
        }),
        mc = !0,
        o || t.layoutDependency !== n || n === void 0 || t.isPresent !== s ? i.willUpdate() : this.safeToRemove(),
        t.isPresent !== s && (s ? i.promote() : i.relegate() || pe.postRender( () => {
            const a = i.getStack();
            (!a || !a.members.length) && this.safeToRemove()
        }
        ))),
        null
    }
    componentDidUpdate() {
        const {projection: t} = this.props.visualElement;
        t && (t.root.didUpdate(),
        Uh.postRender( () => {
            !t.currentAnimation && t.isLead() && this.safeToRemove()
        }
        ))
    }
    componentWillUnmount() {
        const {visualElement: t, layoutGroup: n, switchLayoutGroup: r} = this.props
          , {projection: o} = t;
        mc = !0,
        o && (o.scheduleCheckAfterUnmount(),
        n && n.group && n.group.remove(o),
        r && r.deregister && r.deregister(o))
    }
    safeToRemove() {
        const {safeToRemove: t} = this.props;
        t && t()
    }
    render() {
        return null
    }
}
function xS(e) {
    const [t,n] = aS()
      , r = m.useContext(Sh);
    return y.jsx(hI, {
        ...e,
        layoutGroup: r,
        switchLayoutGroup: m.useContext(pS),
        isPresent: t,
        safeToRemove: n
    })
}
const pI = {
    pan: {
        Feature: fI
    },
    drag: {
        Feature: dI,
        ProjectionNode: iS,
        MeasureLayout: xS
    }
};
function yv(e, t, n) {
    const {props: r} = e;
    e.animationState && r.whileHover && e.animationState.setActive("whileHover", n === "Start");
    const o = "onHover" + n
      , s = r[o];
    s && pe.postRender( () => s(t, zi(t)))
}
class mI extends vr {
    mount() {
        const {current: t} = this.node;
        t && (this.unmount = Xj(t, (n, r) => (yv(this.node, r, "Start"),
        o => yv(this.node, o, "End"))))
    }
    unmount() {}
}
class gI extends vr {
    constructor() {
        super(...arguments),
        this.isActive = !1
    }
    onFocus() {
        let t = !1;
        try {
            t = this.node.current.matches(":focus-visible")
        } catch {
            t = !0
        }
        !t || !this.node.animationState || (this.node.animationState.setActive("whileFocus", !0),
        this.isActive = !0)
    }
    onBlur() {
        !this.isActive || !this.node.animationState || (this.node.animationState.setActive("whileFocus", !1),
        this.isActive = !1)
    }
    mount() {
        this.unmount = Vi(Ri(this.node.current, "focus", () => this.onFocus()), Ri(this.node.current, "blur", () => this.onBlur()))
    }
    unmount() {}
}
function xv(e, t, n) {
    const {props: r} = e;
    if (e.current instanceof HTMLButtonElement && e.current.disabled)
        return;
    e.animationState && r.whileTap && e.animationState.setActive("whileTap", n === "Start");
    const o = "onTap" + (n === "End" ? "" : n)
      , s = r[o];
    s && pe.postRender( () => s(t, zi(t)))
}
class vI extends vr {
    mount() {
        const {current: t} = this.node;
        t && (this.unmount = Jj(t, (n, r) => (xv(this.node, r, "Start"),
        (o, {success: s}) => xv(this.node, o, s ? "End" : "Cancel")), {
            useGlobalTarget: this.node.props.globalTapTarget
        }))
    }
    unmount() {}
}
const Zd = new WeakMap
  , gc = new WeakMap
  , yI = e => {
    const t = Zd.get(e.target);
    t && t(e)
}
  , xI = e => {
    e.forEach(yI)
}
;
function wI({root: e, ...t}) {
    const n = e || document;
    gc.has(n) || gc.set(n, {});
    const r = gc.get(n)
      , o = JSON.stringify(t);
    return r[o] || (r[o] = new IntersectionObserver(xI,{
        root: e,
        ...t
    })),
    r[o]
}
function SI(e, t, n) {
    const r = wI(t);
    return Zd.set(e, n),
    r.observe(e),
    () => {
        Zd.delete(e),
        r.unobserve(e)
    }
}
const CI = {
    some: 0,
    all: 1
};
class bI extends vr {
    constructor() {
        super(...arguments),
        this.hasEnteredView = !1,
        this.isInView = !1
    }
    startObserver() {
        this.unmount();
        const {viewport: t={}} = this.node.getProps()
          , {root: n, margin: r, amount: o="some", once: s} = t
          , i = {
            root: n ? n.current : void 0,
            rootMargin: r,
            threshold: typeof o == "number" ? o : CI[o]
        }
          , a = l => {
            const {isIntersecting: u} = l;
            if (this.isInView === u || (this.isInView = u,
            s && !u && this.hasEnteredView))
                return;
            u && (this.hasEnteredView = !0),
            this.node.animationState && this.node.animationState.setActive("whileInView", u);
            const {onViewportEnter: c, onViewportLeave: d} = this.node.getProps()
              , f = u ? c : d;
            f && f(l)
        }
        ;
        return SI(this.node.current, i, a)
    }
    mount() {
        this.startObserver()
    }
    update() {
        if (typeof IntersectionObserver > "u")
            return;
        const {props: t, prevProps: n} = this.node;
        ["amount", "margin", "root"].some(EI(t, n)) && this.startObserver()
    }
    unmount() {}
}
function EI({viewport: e={}}, {viewport: t={}}={}) {
    return n => e[n] !== t[n]
}
const TI = {
    inView: {
        Feature: bI
    },
    tap: {
        Feature: vI
    },
    focus: {
        Feature: gI
    },
    hover: {
        Feature: mI
    }
}
  , PI = {
    layout: {
        ProjectionNode: iS,
        MeasureLayout: xS
    }
}
  , RI = {
    ...q2,
    ...TI,
    ...pI,
    ...PI
}
  , kI = K2(RI, G2)
  , NI = () => {
    const [e,t] = m.useState({
        hours: 0,
        minutes: 16,
        seconds: 25
    });
    m.useEffect( () => {
        const r = setInterval( () => {
            t(o => {
                const s = o.hours * 3600 + o.minutes * 60 + o.seconds - 1;
                return s <= 0 ? {
                    hours: 0,
                    minutes: 0,
                    seconds: 0
                } : {
                    hours: Math.floor(s / 3600),
                    minutes: Math.floor(s % 3600 / 60),
                    seconds: s % 60
                }
            }
            )
        }
        , 1e3);
        return () => clearInterval(r)
    }
    , []);
    const n = r => r.toString().padStart(2, "0");
    return y.jsxs("div", {
        className: "bg-success text-white text-center py-2 text-sm font-medium tracking-wide",
        children: ["SEU SALDO EXPIRA EM", " ", y.jsxs("span", {
            className: "font-bold",
            children: [n(e.hours), ":", n(e.minutes), ":", n(e.seconds)]
        })]
    })
}
  , AI = "/assets/coin-Ch6Qvjci.png"
  , MI = ({balance: e, points: t, lastReward: n}) => {
    const r = s => s.toLocaleString("pt-BR", {
        minimumFractionDigits: 2,
        maximumFractionDigits: 2
    })
      , o = s => s.toLocaleString("pt-BR");
    return y.jsxs("div", {
        className: "bg-balance-card rounded-xl p-5 text-balance-card-foreground",
        children: [y.jsxs("div", {
            className: "flex items-start justify-between",
            children: [y.jsxs("div", {
                children: [y.jsx("p", {
                    className: "text-sm text-white/70 mb-1",
                    children: "Seu saldo"
                }), y.jsxs("h2", {
                    className: "text-3xl font-bold text-white mb-1",
                    children: ["R$ ", r(e)]
                }), y.jsxs("p", {
                    className: "text-sm text-white/60",
                    children: ["= ", o(t), " pontos (s)"]
                })]
            }), y.jsx("img", {
                src: AI,
                alt: "Moeda P",
                className: "w-14 h-14 object-contain"
            })]
        }), y.jsx("div", {
            className: "mt-4 pt-3 border-t border-white/10",
            children: y.jsxs("p", {
                className: "text-sm text-white",
                children: ["Última recompensa: R$ ", r(n)]
            })
        })]
    })
}
  , jI = Nx("inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0", {
    variants: {
        variant: {
            default: "bg-primary text-primary-foreground hover:bg-primary/90",
            destructive: "bg-destructive text-destructive-foreground hover:bg-destructive/90",
            outline: "border border-input bg-background hover:bg-accent hover:text-accent-foreground",
            secondary: "bg-secondary text-secondary-foreground hover:bg-secondary/80",
            ghost: "hover:bg-accent hover:text-accent-foreground",
            link: "text-primary underline-offset-4 hover:underline"
        },
        size: {
            default: "h-10 px-4 py-2",
            sm: "h-9 rounded-md px-3",
            lg: "h-11 rounded-md px-8",
            icon: "h-10 w-10"
        }
    },
    defaultVariants: {
        variant: "default",
        size: "default"
    }
})
  , to = m.forwardRef( ({className: e, variant: t, size: n, asChild: r=!1, ...o}, s) => {
    const i = r ? kT : "button";
    return y.jsx(i, {
        className: Re(jI({
            variant: t,
            size: n,
            className: e
        })),
        ref: s,
        ...o
    })
}
);
to.displayName = "Button";
const wS = "/assets/pix-logo-DwazX9RI.svg"
  , Rl = m.forwardRef( ({className: e, type: t, ...n}, r) => y.jsx("input", {
    type: t,
    className: Re("flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-base ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 md:text-sm", e),
    ref: r,
    ...n
}));
Rl.displayName = "Input";
var vc = "focusScope.autoFocusOnMount"
  , yc = "focusScope.autoFocusOnUnmount"
  , wv = {
    bubbles: !1,
    cancelable: !0
}
  , DI = "FocusScope"
  , Zh = m.forwardRef( (e, t) => {
    const {loop: n=!1, trapped: r=!1, onMountAutoFocus: o, onUnmountAutoFocus: s, ...i} = e
      , [a,l] = m.useState(null)
      , u = Gt(o)
      , c = Gt(s)
      , d = m.useRef(null)
      , f = me(t, p => l(p))
      , h = m.useRef({
        paused: !1,
        pause() {
            this.paused = !0
        },
        resume() {
            this.paused = !1
        }
    }).current;
    m.useEffect( () => {
        if (r) {
            let p = function(x) {
                if (h.paused || !a)
                    return;
                const C = x.target;
                a.contains(C) ? d.current = C : Bn(d.current, {
                    select: !0
                })
            }
              , w = function(x) {
                if (h.paused || !a)
                    return;
                const C = x.relatedTarget;
                C !== null && (a.contains(C) || Bn(d.current, {
                    select: !0
                }))
            }
              , v = function(x) {
                if (document.activeElement === document.body)
                    for (const b of x)
                        b.removedNodes.length > 0 && Bn(a)
            };
            document.addEventListener("focusin", p),
            document.addEventListener("focusout", w);
            const g = new MutationObserver(v);
            return a && g.observe(a, {
                childList: !0,
                subtree: !0
            }),
            () => {
                document.removeEventListener("focusin", p),
                document.removeEventListener("focusout", w),
                g.disconnect()
            }
        }
    }
    , [r, a, h.paused]),
    m.useEffect( () => {
        if (a) {
            Cv.add(h);
            const p = document.activeElement;
            if (!a.contains(p)) {
                const v = new CustomEvent(vc,wv);
                a.addEventListener(vc, u),
                a.dispatchEvent(v),
                v.defaultPrevented || (II(VI(SS(a)), {
                    select: !0
                }),
                document.activeElement === p && Bn(a))
            }
            return () => {
                a.removeEventListener(vc, u),
                setTimeout( () => {
                    const v = new CustomEvent(yc,wv);
                    a.addEventListener(yc, c),
                    a.dispatchEvent(v),
                    v.defaultPrevented || Bn(p ?? document.body, {
                        select: !0
                    }),
                    a.removeEventListener(yc, c),
                    Cv.remove(h)
                }
                , 0)
            }
        }
    }
    , [a, u, c, h]);
    const S = m.useCallback(p => {
        if (!n && !r || h.paused)
            return;
        const w = p.key === "Tab" && !p.altKey && !p.ctrlKey && !p.metaKey
          , v = document.activeElement;
        if (w && v) {
            const g = p.currentTarget
              , [x,C] = OI(g);
            x && C ? !p.shiftKey && v === C ? (p.preventDefault(),
            n && Bn(x, {
                select: !0
            })) : p.shiftKey && v === x && (p.preventDefault(),
            n && Bn(C, {
                select: !0
            })) : v === g && p.preventDefault()
        }
    }
    , [n, r, h.paused]);
    return y.jsx(ne.div, {
        tabIndex: -1,
        ...i,
        ref: f,
        onKeyDown: S
    })
}
);
Zh.displayName = DI;
function II(e, {select: t=!1}={}) {
    const n = document.activeElement;
    for (const r of e)
        if (Bn(r, {
            select: t
        }),
        document.activeElement !== n)
            return
}
function OI(e) {
    const t = SS(e)
      , n = Sv(t, e)
      , r = Sv(t.reverse(), e);
    return [n, r]
}
function SS(e) {
    const t = []
      , n = document.createTreeWalker(e, NodeFilter.SHOW_ELEMENT, {
        acceptNode: r => {
            const o = r.tagName === "INPUT" && r.type === "hidden";
            return r.disabled || r.hidden || o ? NodeFilter.FILTER_SKIP : r.tabIndex >= 0 ? NodeFilter.FILTER_ACCEPT : NodeFilter.FILTER_SKIP
        }
    });
    for (; n.nextNode(); )
        t.push(n.currentNode);
    return t
}
function Sv(e, t) {
    for (const n of e)
        if (!LI(n, {
            upTo: t
        }))
            return n
}
function LI(e, {upTo: t}) {
    if (getComputedStyle(e).visibility === "hidden")
        return !0;
    for (; e; ) {
        if (t !== void 0 && e === t)
            return !1;
        if (getComputedStyle(e).display === "none")
            return !0;
        e = e.parentElement
    }
    return !1
}
function _I(e) {
    return e instanceof HTMLInputElement && "select"in e
}
function Bn(e, {select: t=!1}={}) {
    if (e && e.focus) {
        const n = document.activeElement;
        e.focus({
            preventScroll: !0
        }),
        e !== n && _I(e) && t && e.select()
    }
}
var Cv = FI();
function FI() {
    let e = [];
    return {
        add(t) {
            const n = e[0];
            t !== n && (n == null || n.pause()),
            e = bv(e, t),
            e.unshift(t)
        },
        remove(t) {
            var n;
            e = bv(e, t),
            (n = e[0]) == null || n.resume()
        }
    }
}
function bv(e, t) {
    const n = [...e]
      , r = n.indexOf(t);
    return r !== -1 && n.splice(r, 1),
    n
}
function VI(e) {
    return e.filter(t => t.tagName !== "A")
}
var xc = 0;
function CS() {
    m.useEffect( () => {
        const e = document.querySelectorAll("[data-radix-focus-guard]");
        return document.body.insertAdjacentElement("afterbegin", e[0] ?? Ev()),
        document.body.insertAdjacentElement("beforeend", e[1] ?? Ev()),
        xc++,
        () => {
            xc === 1 && document.querySelectorAll("[data-radix-focus-guard]").forEach(t => t.remove()),
            xc--
        }
    }
    , [])
}
function Ev() {
    const e = document.createElement("span");
    return e.setAttribute("data-radix-focus-guard", ""),
    e.tabIndex = 0,
    e.style.outline = "none",
    e.style.opacity = "0",
    e.style.position = "fixed",
    e.style.pointerEvents = "none",
    e
}
var on = function() {
    return on = Object.assign || function(t) {
        for (var n, r = 1, o = arguments.length; r < o; r++) {
            n = arguments[r];
            for (var s in n)
                Object.prototype.hasOwnProperty.call(n, s) && (t[s] = n[s])
        }
        return t
    }
    ,
    on.apply(this, arguments)
};
function bS(e, t) {
    var n = {};
    for (var r in e)
        Object.prototype.hasOwnProperty.call(e, r) && t.indexOf(r) < 0 && (n[r] = e[r]);
    if (e != null && typeof Object.getOwnPropertySymbols == "function")
        for (var o = 0, r = Object.getOwnPropertySymbols(e); o < r.length; o++)
            t.indexOf(r[o]) < 0 && Object.prototype.propertyIsEnumerable.call(e, r[o]) && (n[r[o]] = e[r[o]]);
    return n
}
function BI(e, t, n) {
    if (n || arguments.length === 2)
        for (var r = 0, o = t.length, s; r < o; r++)
            (s || !(r in t)) && (s || (s = Array.prototype.slice.call(t, 0, r)),
            s[r] = t[r]);
    return e.concat(s || Array.prototype.slice.call(t))
}
var Ba = "right-scroll-bar-position"
  , $a = "width-before-scroll-bar"
  , $I = "with-scroll-bars-hidden"
  , zI = "--removed-body-scroll-bar-size";
function wc(e, t) {
    return typeof e == "function" ? e(t) : e && (e.current = t),
    e
}
function UI(e, t) {
    var n = m.useState(function() {
        return {
            value: e,
            callback: t,
            facade: {
                get current() {
                    return n.value
                },
                set current(r) {
                    var o = n.value;
                    o !== r && (n.value = r,
                    n.callback(r, o))
                }
            }
        }
    })[0];
    return n.callback = t,
    n.facade
}
var WI = typeof window < "u" ? m.useLayoutEffect : m.useEffect
  , Tv = new WeakMap;
function HI(e, t) {
    var n = UI(null, function(r) {
        return e.forEach(function(o) {
            return wc(o, r)
        })
    });
    return WI(function() {
        var r = Tv.get(n);
        if (r) {
            var o = new Set(r)
              , s = new Set(e)
              , i = n.current;
            o.forEach(function(a) {
                s.has(a) || wc(a, null)
            }),
            s.forEach(function(a) {
                o.has(a) || wc(a, i)
            })
        }
        Tv.set(n, e)
    }, [e]),
    n
}
function KI(e) {
    return e
}
function GI(e, t) {
    t === void 0 && (t = KI);
    var n = []
      , r = !1
      , o = {
        read: function() {
            if (r)
                throw new Error("Sidecar: could not `read` from an `assigned` medium. `read` could be used only with `useMedium`.");
            return n.length ? n[n.length - 1] : e
        },
        useMedium: function(s) {
            var i = t(s, r);
            return n.push(i),
            function() {
                n = n.filter(function(a) {
                    return a !== i
                })
            }
        },
        assignSyncMedium: function(s) {
            for (r = !0; n.length; ) {
                var i = n;
                n = [],
                i.forEach(s)
            }
            n = {
                push: function(a) {
                    return s(a)
                },
                filter: function() {
                    return n
                }
            }
        },
        assignMedium: function(s) {
            r = !0;
            var i = [];
            if (n.length) {
                var a = n;
                n = [],
                a.forEach(s),
                i = n
            }
            var l = function() {
                var c = i;
                i = [],
                c.forEach(s)
            }
              , u = function() {
                return Promise.resolve().then(l)
            };
            u(),
            n = {
                push: function(c) {
                    i.push(c),
                    u()
                },
                filter: function(c) {
                    return i = i.filter(c),
                    n
                }
            }
        }
    };
    return o
}
function YI(e) {
    e === void 0 && (e = {});
    var t = GI(null);
    return t.options = on({
        async: !0,
        ssr: !1
    }, e),
    t
}
var ES = function(e) {
    var t = e.sideCar
      , n = bS(e, ["sideCar"]);
    if (!t)
        throw new Error("Sidecar: please provide `sideCar` property to import the right car");
    var r = t.read();
    if (!r)
        throw new Error("Sidecar medium not found");
    return m.createElement(r, on({}, n))
};
ES.isSideCarExport = !0;
function QI(e, t) {
    return e.useMedium(t),
    ES
}
var TS = YI()
  , Sc = function() {}
  , fu = m.forwardRef(function(e, t) {
    var n = m.useRef(null)
      , r = m.useState({
        onScrollCapture: Sc,
        onWheelCapture: Sc,
        onTouchMoveCapture: Sc
    })
      , o = r[0]
      , s = r[1]
      , i = e.forwardProps
      , a = e.children
      , l = e.className
      , u = e.removeScrollBar
      , c = e.enabled
      , d = e.shards
      , f = e.sideCar
      , h = e.noRelative
      , S = e.noIsolation
      , p = e.inert
      , w = e.allowPinchZoom
      , v = e.as
      , g = v === void 0 ? "div" : v
      , x = e.gapMode
      , C = bS(e, ["forwardProps", "children", "className", "removeScrollBar", "enabled", "shards", "sideCar", "noRelative", "noIsolation", "inert", "allowPinchZoom", "as", "gapMode"])
      , b = f
      , E = HI([n, t])
      , T = on(on({}, C), o);
    return m.createElement(m.Fragment, null, c && m.createElement(b, {
        sideCar: TS,
        removeScrollBar: u,
        shards: d,
        noRelative: h,
        noIsolation: S,
        inert: p,
        setCallbacks: s,
        allowPinchZoom: !!w,
        lockRef: n,
        gapMode: x
    }), i ? m.cloneElement(m.Children.only(a), on(on({}, T), {
        ref: E
    })) : m.createElement(g, on({}, T, {
        className: l,
        ref: E
    }), a))
});
fu.defaultProps = {
    enabled: !0,
    removeScrollBar: !0,
    inert: !1
};
fu.classNames = {
    fullWidth: $a,
    zeroRight: Ba
};
var XI = function() {
    if (typeof __webpack_nonce__ < "u")
        return __webpack_nonce__
};
function qI() {
    if (!document)
        return null;
    var e = document.createElement("style");
    e.type = "text/css";
    var t = XI();
    return t && e.setAttribute("nonce", t),
    e
}
function ZI(e, t) {
    e.styleSheet ? e.styleSheet.cssText = t : e.appendChild(document.createTextNode(t))
}
function JI(e) {
    var t = document.head || document.getElementsByTagName("head")[0];
    t.appendChild(e)
}
var eO = function() {
    var e = 0
      , t = null;
    return {
        add: function(n) {
            e == 0 && (t = qI()) && (ZI(t, n),
            JI(t)),
            e++
        },
        remove: function() {
            e--,
            !e && t && (t.parentNode && t.parentNode.removeChild(t),
            t = null)
        }
    }
}
  , tO = function() {
    var e = eO();
    return function(t, n) {
        m.useEffect(function() {
            return e.add(t),
            function() {
                e.remove()
            }
        }, [t && n])
    }
}
  , PS = function() {
    var e = tO()
      , t = function(n) {
        var r = n.styles
          , o = n.dynamic;
        return e(r, o),
        null
    };
    return t
}
  , nO = {
    left: 0,
    top: 0,
    right: 0,
    gap: 0
}
  , Cc = function(e) {
    return parseInt(e || "", 10) || 0
}
  , rO = function(e) {
    var t = window.getComputedStyle(document.body)
      , n = t[e === "padding" ? "paddingLeft" : "marginLeft"]
      , r = t[e === "padding" ? "paddingTop" : "marginTop"]
      , o = t[e === "padding" ? "paddingRight" : "marginRight"];
    return [Cc(n), Cc(r), Cc(o)]
}
  , oO = function(e) {
    if (e === void 0 && (e = "margin"),
    typeof window > "u")
        return nO;
    var t = rO(e)
      , n = document.documentElement.clientWidth
      , r = window.innerWidth;
    return {
        left: t[0],
        top: t[1],
        right: t[2],
        gap: Math.max(0, r - n + t[2] - t[0])
    }
}
  , sO = PS()
  , _o = "data-scroll-locked"
  , iO = function(e, t, n, r) {
    var o = e.left
      , s = e.top
      , i = e.right
      , a = e.gap;
    return n === void 0 && (n = "margin"),
    `
  .`.concat($I, ` {
   overflow: hidden `).concat(r, `;
   padding-right: `).concat(a, "px ").concat(r, `;
  }
  body[`).concat(_o, `] {
    overflow: hidden `).concat(r, `;
    overscroll-behavior: contain;
    `).concat([t && "position: relative ".concat(r, ";"), n === "margin" && `
    padding-left: `.concat(o, `px;
    padding-top: `).concat(s, `px;
    padding-right: `).concat(i, `px;
    margin-left:0;
    margin-top:0;
    margin-right: `).concat(a, "px ").concat(r, `;
    `), n === "padding" && "padding-right: ".concat(a, "px ").concat(r, ";")].filter(Boolean).join(""), `
  }
  
  .`).concat(Ba, ` {
    right: `).concat(a, "px ").concat(r, `;
  }
  
  .`).concat($a, ` {
    margin-right: `).concat(a, "px ").concat(r, `;
  }
  
  .`).concat(Ba, " .").concat(Ba, ` {
    right: 0 `).concat(r, `;
  }
  
  .`).concat($a, " .").concat($a, ` {
    margin-right: 0 `).concat(r, `;
  }
  
  body[`).concat(_o, `] {
    `).concat(zI, ": ").concat(a, `px;
  }
`)
}
  , Pv = function() {
    var e = parseInt(document.body.getAttribute(_o) || "0", 10);
    return isFinite(e) ? e : 0
}
  , aO = function() {
    m.useEffect(function() {
        return document.body.setAttribute(_o, (Pv() + 1).toString()),
        function() {
            var e = Pv() - 1;
            e <= 0 ? document.body.removeAttribute(_o) : document.body.setAttribute(_o, e.toString())
        }
    }, [])
}
  , lO = function(e) {
    var t = e.noRelative
      , n = e.noImportant
      , r = e.gapMode
      , o = r === void 0 ? "margin" : r;
    aO();
    var s = m.useMemo(function() {
        return oO(o)
    }, [o]);
    return m.createElement(sO, {
        styles: iO(s, !t, o, n ? "" : "!important")
    })
}
  , Jd = !1;
if (typeof window < "u")
    try {
        var va = Object.defineProperty({}, "passive", {
            get: function() {
                return Jd = !0,
                !0
            }
        });
        window.addEventListener("test", va, va),
        window.removeEventListener("test", va, va)
    } catch {
        Jd = !1
    }
var ao = Jd ? {
    passive: !1
} : !1
  , uO = function(e) {
    return e.tagName === "TEXTAREA"
}
  , RS = function(e, t) {
    if (!(e instanceof Element))
        return !1;
    var n = window.getComputedStyle(e);
    return n[t] !== "hidden" && !(n.overflowY === n.overflowX && !uO(e) && n[t] === "visible")
}
  , cO = function(e) {
    return RS(e, "overflowY")
}
  , dO = function(e) {
    return RS(e, "overflowX")
}
  , Rv = function(e, t) {
    var n = t.ownerDocument
      , r = t;
    do {
        typeof ShadowRoot < "u" && r instanceof ShadowRoot && (r = r.host);
        var o = kS(e, r);
        if (o) {
            var s = NS(e, r)
              , i = s[1]
              , a = s[2];
            if (i > a)
                return !0
        }
        r = r.parentNode
    } while (r && r !== n.body);
    return !1
}
  , fO = function(e) {
    var t = e.scrollTop
      , n = e.scrollHeight
      , r = e.clientHeight;
    return [t, n, r]
}
  , hO = function(e) {
    var t = e.scrollLeft
      , n = e.scrollWidth
      , r = e.clientWidth;
    return [t, n, r]
}
  , kS = function(e, t) {
    return e === "v" ? cO(t) : dO(t)
}
  , NS = function(e, t) {
    return e === "v" ? fO(t) : hO(t)
}
  , pO = function(e, t) {
    return e === "h" && t === "rtl" ? -1 : 1
}
  , mO = function(e, t, n, r, o) {
    var s = pO(e, window.getComputedStyle(t).direction)
      , i = s * r
      , a = n.target
      , l = t.contains(a)
      , u = !1
      , c = i > 0
      , d = 0
      , f = 0;
    do {
        if (!a)
            break;
        var h = NS(e, a)
          , S = h[0]
          , p = h[1]
          , w = h[2]
          , v = p - w - s * S;
        (S || v) && kS(e, a) && (d += v,
        f += S);
        var g = a.parentNode;
        a = g && g.nodeType === Node.DOCUMENT_FRAGMENT_NODE ? g.host : g
    } while (!l && a !== document.body || l && (t.contains(a) || t === a));
    return (c && (Math.abs(d) < 1 || !o) || !c && (Math.abs(f) < 1 || !o)) && (u = !0),
    u
}
  , ya = function(e) {
    return "changedTouches"in e ? [e.changedTouches[0].clientX, e.changedTouches[0].clientY] : [0, 0]
}
  , kv = function(e) {
    return [e.deltaX, e.deltaY]
}
  , Nv = function(e) {
    return e && "current"in e ? e.current : e
}
  , gO = function(e, t) {
    return e[0] === t[0] && e[1] === t[1]
}
  , vO = function(e) {
    return `
  .block-interactivity-`.concat(e, ` {pointer-events: none;}
  .allow-interactivity-`).concat(e, ` {pointer-events: all;}
`)
}
  , yO = 0
  , lo = [];
function xO(e) {
    var t = m.useRef([])
      , n = m.useRef([0, 0])
      , r = m.useRef()
      , o = m.useState(yO++)[0]
      , s = m.useState(PS)[0]
      , i = m.useRef(e);
    m.useEffect(function() {
        i.current = e
    }, [e]),
    m.useEffect(function() {
        if (e.inert) {
            document.body.classList.add("block-interactivity-".concat(o));
            var p = BI([e.lockRef.current], (e.shards || []).map(Nv), !0).filter(Boolean);
            return p.forEach(function(w) {
                return w.classList.add("allow-interactivity-".concat(o))
            }),
            function() {
                document.body.classList.remove("block-interactivity-".concat(o)),
                p.forEach(function(w) {
                    return w.classList.remove("allow-interactivity-".concat(o))
                })
            }
        }
    }, [e.inert, e.lockRef.current, e.shards]);
    var a = m.useCallback(function(p, w) {
        if ("touches"in p && p.touches.length === 2 || p.type === "wheel" && p.ctrlKey)
            return !i.current.allowPinchZoom;
        var v = ya(p), g = n.current, x = "deltaX"in p ? p.deltaX : g[0] - v[0], C = "deltaY"in p ? p.deltaY : g[1] - v[1], b, E = p.target, T = Math.abs(x) > Math.abs(C) ? "h" : "v";
        if ("touches"in p && T === "h" && E.type === "range")
            return !1;
        var P = Rv(T, E);
        if (!P)
            return !0;
        if (P ? b = T : (b = T === "v" ? "h" : "v",
        P = Rv(T, E)),
        !P)
            return !1;
        if (!r.current && "changedTouches"in p && (x || C) && (r.current = b),
        !b)
            return !0;
        var N = r.current || b;
        return mO(N, w, p, N === "h" ? x : C, !0)
    }, [])
      , l = m.useCallback(function(p) {
        var w = p;
        if (!(!lo.length || lo[lo.length - 1] !== s)) {
            var v = "deltaY"in w ? kv(w) : ya(w)
              , g = t.current.filter(function(b) {
                return b.name === w.type && (b.target === w.target || w.target === b.shadowParent) && gO(b.delta, v)
            })[0];
            if (g && g.should) {
                w.cancelable && w.preventDefault();
                return
            }
            if (!g) {
                var x = (i.current.shards || []).map(Nv).filter(Boolean).filter(function(b) {
                    return b.contains(w.target)
                })
                  , C = x.length > 0 ? a(w, x[0]) : !i.current.noIsolation;
                C && w.cancelable && w.preventDefault()
            }
        }
    }, [])
      , u = m.useCallback(function(p, w, v, g) {
        var x = {
            name: p,
            delta: w,
            target: v,
            should: g,
            shadowParent: wO(v)
        };
        t.current.push(x),
        setTimeout(function() {
            t.current = t.current.filter(function(C) {
                return C !== x
            })
        }, 1)
    }, [])
      , c = m.useCallback(function(p) {
        n.current = ya(p),
        r.current = void 0
    }, [])
      , d = m.useCallback(function(p) {
        u(p.type, kv(p), p.target, a(p, e.lockRef.current))
    }, [])
      , f = m.useCallback(function(p) {
        u(p.type, ya(p), p.target, a(p, e.lockRef.current))
    }, []);
    m.useEffect(function() {
        return lo.push(s),
        e.setCallbacks({
            onScrollCapture: d,
            onWheelCapture: d,
            onTouchMoveCapture: f
        }),
        document.addEventListener("wheel", l, ao),
        document.addEventListener("touchmove", l, ao),
        document.addEventListener("touchstart", c, ao),
        function() {
            lo = lo.filter(function(p) {
                return p !== s
            }),
            document.removeEventListener("wheel", l, ao),
            document.removeEventListener("touchmove", l, ao),
            document.removeEventListener("touchstart", c, ao)
        }
    }, []);
    var h = e.removeScrollBar
      , S = e.inert;
    return m.createElement(m.Fragment, null, S ? m.createElement(s, {
        styles: vO(o)
    }) : null, h ? m.createElement(lO, {
        noRelative: e.noRelative,
        gapMode: e.gapMode
    }) : null)
}
function wO(e) {
    for (var t = null; e !== null; )
        e instanceof ShadowRoot && (t = e.host,
        e = e.host),
        e = e.parentNode;
    return t
}
const SO = QI(TS, xO);
var Jh = m.forwardRef(function(e, t) {
    return m.createElement(fu, on({}, e, {
        ref: t,
        sideCar: SO
    }))
});
Jh.classNames = fu.classNames;
var CO = function(e) {
    if (typeof document > "u")
        return null;
    var t = Array.isArray(e) ? e[0] : e;
    return t.ownerDocument.body
}
  , uo = new WeakMap
  , xa = new WeakMap
  , wa = {}
  , bc = 0
  , AS = function(e) {
    return e && (e.host || AS(e.parentNode))
}
  , bO = function(e, t) {
    return t.map(function(n) {
        if (e.contains(n))
            return n;
        var r = AS(n);
        return r && e.contains(r) ? r : (console.error("aria-hidden", n, "in not contained inside", e, ". Doing nothing"),
        null)
    }).filter(function(n) {
        return !!n
    })
}
  , EO = function(e, t, n, r) {
    var o = bO(t, Array.isArray(e) ? e : [e]);
    wa[n] || (wa[n] = new WeakMap);
    var s = wa[n]
      , i = []
      , a = new Set
      , l = new Set(o)
      , u = function(d) {
        !d || a.has(d) || (a.add(d),
        u(d.parentNode))
    };
    o.forEach(u);
    var c = function(d) {
        !d || l.has(d) || Array.prototype.forEach.call(d.children, function(f) {
            if (a.has(f))
                c(f);
            else
                try {
                    var h = f.getAttribute(r)
                      , S = h !== null && h !== "false"
                      , p = (uo.get(f) || 0) + 1
                      , w = (s.get(f) || 0) + 1;
                    uo.set(f, p),
                    s.set(f, w),
                    i.push(f),
                    p === 1 && S && xa.set(f, !0),
                    w === 1 && f.setAttribute(n, "true"),
                    S || f.setAttribute(r, "true")
                } catch (v) {
                    console.error("aria-hidden: cannot operate on ", f, v)
                }
        })
    };
    return c(t),
    a.clear(),
    bc++,
    function() {
        i.forEach(function(d) {
            var f = uo.get(d) - 1
              , h = s.get(d) - 1;
            uo.set(d, f),
            s.set(d, h),
            f || (xa.has(d) || d.removeAttribute(r),
            xa.delete(d)),
            h || d.removeAttribute(n)
        }),
        bc--,
        bc || (uo = new WeakMap,
        uo = new WeakMap,
        xa = new WeakMap,
        wa = {})
    }
}
  , MS = function(e, t, n) {
    n === void 0 && (n = "data-aria-hidden");
    var r = Array.from(Array.isArray(e) ? e : [e])
      , o = CO(e);
    return o ? (r.push.apply(r, Array.from(o.querySelectorAll("[aria-live]"))),
    EO(r, o, n, "aria-hidden")) : function() {
        return null
    }
}
  , hu = "Dialog"
  , [jS,zL] = as(hu)
  , [TO,qt] = jS(hu)
  , DS = e => {
    const {__scopeDialog: t, children: n, open: r, defaultOpen: o, onOpenChange: s, modal: i=!0} = e
      , a = m.useRef(null)
      , l = m.useRef(null)
      , [u,c] = fl({
        prop: r,
        defaultProp: o ?? !1,
        onChange: s,
        caller: hu
    });
    return y.jsx(TO, {
        scope: t,
        triggerRef: a,
        contentRef: l,
        contentId: Io(),
        titleId: Io(),
        descriptionId: Io(),
        open: u,
        onOpenChange: c,
        onOpenToggle: m.useCallback( () => c(d => !d), [c]),
        modal: i,
        children: n
    })
}
;
DS.displayName = hu;
var IS = "DialogTrigger"
  , PO = m.forwardRef( (e, t) => {
    const {__scopeDialog: n, ...r} = e
      , o = qt(IS, n)
      , s = me(t, o.triggerRef);
    return y.jsx(ne.button, {
        type: "button",
        "aria-haspopup": "dialog",
        "aria-expanded": o.open,
        "aria-controls": o.contentId,
        "data-state": np(o.open),
        ...r,
        ref: s,
        onClick: Z(e.onClick, o.onOpenToggle)
    })
}
);
PO.displayName = IS;
var ep = "DialogPortal"
  , [RO,OS] = jS(ep, {
    forceMount: void 0
})
  , LS = e => {
    const {__scopeDialog: t, forceMount: n, children: r, container: o} = e
      , s = qt(ep, t);
    return y.jsx(RO, {
        scope: t,
        forceMount: n,
        children: m.Children.map(r, i => y.jsx(ls, {
            present: n || s.open,
            children: y.jsx(Gl, {
                asChild: !0,
                container: o,
                children: i
            })
        }))
    })
}
;
LS.displayName = ep;
var kl = "DialogOverlay"
  , _S = m.forwardRef( (e, t) => {
    const n = OS(kl, e.__scopeDialog)
      , {forceMount: r=n.forceMount, ...o} = e
      , s = qt(kl, e.__scopeDialog);
    return s.modal ? y.jsx(ls, {
        present: r || s.open,
        children: y.jsx(NO, {
            ...o,
            ref: t
        })
    }) : null
}
);
_S.displayName = kl;
var kO = Jo("DialogOverlay.RemoveScroll")
  , NO = m.forwardRef( (e, t) => {
    const {__scopeDialog: n, ...r} = e
      , o = qt(kl, n);
    return y.jsx(Jh, {
        as: kO,
        allowPinchZoom: !0,
        shards: [o.contentRef],
        children: y.jsx(ne.div, {
            "data-state": np(o.open),
            ...r,
            ref: t,
            style: {
                pointerEvents: "auto",
                ...r.style
            }
        })
    })
}
)
  , Qr = "DialogContent"
  , FS = m.forwardRef( (e, t) => {
    const n = OS(Qr, e.__scopeDialog)
      , {forceMount: r=n.forceMount, ...o} = e
      , s = qt(Qr, e.__scopeDialog);
    return y.jsx(ls, {
        present: r || s.open,
        children: s.modal ? y.jsx(AO, {
            ...o,
            ref: t
        }) : y.jsx(MO, {
            ...o,
            ref: t
        })
    })
}
);
FS.displayName = Qr;
var AO = m.forwardRef( (e, t) => {
    const n = qt(Qr, e.__scopeDialog)
      , r = m.useRef(null)
      , o = me(t, n.contentRef, r);
    return m.useEffect( () => {
        const s = r.current;
        if (s)
            return MS(s)
    }
    , []),
    y.jsx(VS, {
        ...e,
        ref: o,
        trapFocus: n.open,
        disableOutsidePointerEvents: !0,
        onCloseAutoFocus: Z(e.onCloseAutoFocus, s => {
            var i;
            s.preventDefault(),
            (i = n.triggerRef.current) == null || i.focus()
        }
        ),
        onPointerDownOutside: Z(e.onPointerDownOutside, s => {
            const i = s.detail.originalEvent
              , a = i.button === 0 && i.ctrlKey === !0;
            (i.button === 2 || a) && s.preventDefault()
        }
        ),
        onFocusOutside: Z(e.onFocusOutside, s => s.preventDefault())
    })
}
)
  , MO = m.forwardRef( (e, t) => {
    const n = qt(Qr, e.__scopeDialog)
      , r = m.useRef(!1)
      , o = m.useRef(!1);
    return y.jsx(VS, {
        ...e,
        ref: t,
        trapFocus: !1,
        disableOutsidePointerEvents: !1,
        onCloseAutoFocus: s => {
            var i, a;
            (i = e.onCloseAutoFocus) == null || i.call(e, s),
            s.defaultPrevented || (r.current || (a = n.triggerRef.current) == null || a.focus(),
            s.preventDefault()),
            r.current = !1,
            o.current = !1
        }
        ,
        onInteractOutside: s => {
            var l, u;
            (l = e.onInteractOutside) == null || l.call(e, s),
            s.defaultPrevented || (r.current = !0,
            s.detail.originalEvent.type === "pointerdown" && (o.current = !0));
            const i = s.target;
            ((u = n.triggerRef.current) == null ? void 0 : u.contains(i)) && s.preventDefault(),
            s.detail.originalEvent.type === "focusin" && o.current && s.preventDefault()
        }
    })
}
)
  , VS = m.forwardRef( (e, t) => {
    const {__scopeDialog: n, trapFocus: r, onOpenAutoFocus: o, onCloseAutoFocus: s, ...i} = e
      , a = qt(Qr, n)
      , l = m.useRef(null)
      , u = me(t, l);
    return CS(),
    y.jsxs(y.Fragment, {
        children: [y.jsx(Zh, {
            asChild: !0,
            loop: !0,
            trapped: r,
            onMountAutoFocus: o,
            onUnmountAutoFocus: s,
            children: y.jsx(Oi, {
                role: "dialog",
                id: a.contentId,
                "aria-describedby": a.descriptionId,
                "aria-labelledby": a.titleId,
                "data-state": np(a.open),
                ...i,
                ref: u,
                onDismiss: () => a.onOpenChange(!1)
            })
        }), y.jsxs(y.Fragment, {
            children: [y.jsx(jO, {
                titleId: a.titleId
            }), y.jsx(IO, {
                contentRef: l,
                descriptionId: a.descriptionId
            })]
        })]
    })
}
)
  , tp = "DialogTitle"
  , BS = m.forwardRef( (e, t) => {
    const {__scopeDialog: n, ...r} = e
      , o = qt(tp, n);
    return y.jsx(ne.h2, {
        id: o.titleId,
        ...r,
        ref: t
    })
}
);
BS.displayName = tp;
var $S = "DialogDescription"
  , zS = m.forwardRef( (e, t) => {
    const {__scopeDialog: n, ...r} = e
      , o = qt($S, n);
    return y.jsx(ne.p, {
        id: o.descriptionId,
        ...r,
        ref: t
    })
}
);
zS.displayName = $S;
var US = "DialogClose"
  , WS = m.forwardRef( (e, t) => {
    const {__scopeDialog: n, ...r} = e
      , o = qt(US, n);
    return y.jsx(ne.button, {
        type: "button",
        ...r,
        ref: t,
        onClick: Z(e.onClick, () => o.onOpenChange(!1))
    })
}
);
WS.displayName = US;
function np(e) {
    return e ? "open" : "closed"
}
var HS = "DialogTitleWarning"
  , [UL,KS] = PT(HS, {
    contentName: Qr,
    titleName: tp,
    docsSlug: "dialog"
})
  , jO = ({titleId: e}) => {
    const t = KS(HS)
      , n = `\`${t.contentName}\` requires a \`${t.titleName}\` for the component to be accessible for screen reader users.

If you want to hide the \`${t.titleName}\`, you can wrap it with our VisuallyHidden component.

For more information, see https://radix-ui.com/primitives/docs/components/${t.docsSlug}`;
    return m.useEffect( () => {
        e && (document.getElementById(e) || console.error(n))
    }
    , [n, e]),
    null
}
  , DO = "DialogDescriptionWarning"
  , IO = ({contentRef: e, descriptionId: t}) => {
    const r = `Warning: Missing \`Description\` or \`aria-describedby={undefined}\` for {${KS(DO).contentName}}.`;
    return m.useEffect( () => {
        var s;
        const o = (s = e.current) == null ? void 0 : s.getAttribute("aria-describedby");
        t && o && (document.getElementById(t) || console.warn(r))
    }
    , [r, e, t]),
    null
}
  , OO = DS
  , LO = LS
  , GS = _S
  , YS = FS
  , QS = BS
  , XS = zS
  , _O = WS;
const FO = OO
  , VO = LO
  , qS = m.forwardRef( ({className: e, ...t}, n) => y.jsx(GS, {
    ref: n,
    className: Re("fixed inset-0 z-50 bg-black/80 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0", e),
    ...t
}));
qS.displayName = GS.displayName;
const ZS = m.forwardRef( ({className: e, children: t, ...n}, r) => y.jsxs(VO, {
    children: [y.jsx(qS, {}), y.jsxs(YS, {
        ref: r,
        className: Re("fixed left-[50%] top-[50%] z-50 grid w-full max-w-lg translate-x-[-50%] translate-y-[-50%] gap-4 border bg-background p-6 shadow-lg duration-200 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[state=closed]:slide-out-to-left-1/2 data-[state=closed]:slide-out-to-top-[48%] data-[state=open]:slide-in-from-left-1/2 data-[state=open]:slide-in-from-top-[48%] sm:rounded-lg", e),
        ...n,
        children: [t, y.jsxs(_O, {
            className: "absolute right-4 top-4 rounded-sm opacity-70 ring-offset-background transition-opacity data-[state=open]:bg-accent data-[state=open]:text-muted-foreground hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none",
            children: [y.jsx(jx, {
                className: "h-4 w-4"
            }), y.jsx("span", {
                className: "sr-only",
                children: "Close"
            })]
        })]
    })]
}));
ZS.displayName = YS.displayName;
const ef = ({className: e, ...t}) => y.jsx("div", {
    className: Re("flex flex-col space-y-1.5 text-center sm:text-left", e),
    ...t
});
ef.displayName = "DialogHeader";
const tf = m.forwardRef( ({className: e, ...t}, n) => y.jsx(QS, {
    ref: n,
    className: Re("text-lg font-semibold leading-none tracking-tight", e),
    ...t
}));
tf.displayName = QS.displayName;
const BO = m.forwardRef( ({className: e, ...t}, n) => y.jsx(XS, {
    ref: n,
    className: Re("text-sm text-muted-foreground", e),
    ...t
}));
BO.displayName = XS.displayName;
function Av(e, [t,n]) {
    return Math.min(n, Math.max(t, e))
}
var $O = m.createContext(void 0);
function zO(e) {
    const t = m.useContext($O);
    return e || t || "ltr"
}
function UO(e) {
    const t = m.useRef({
        value: e,
        previous: e
    });
    return m.useMemo( () => (t.current.value !== e && (t.current.previous = t.current.value,
    t.current.value = e),
    t.current.previous), [e])
}
var WO = [" ", "Enter", "ArrowUp", "ArrowDown"]
  , HO = [" ", "Enter"]
  , Xr = "Select"
  , [pu,mu,KO] = nx(Xr)
  , [vs,WL] = as(Xr, [KO, Jl])
  , gu = Jl()
  , [GO,yr] = vs(Xr)
  , [YO,QO] = vs(Xr)
  , JS = e => {
    const {__scopeSelect: t, children: n, open: r, defaultOpen: o, onOpenChange: s, value: i, defaultValue: a, onValueChange: l, dir: u, name: c, autoComplete: d, disabled: f, required: h, form: S} = e
      , p = gu(t)
      , [w,v] = m.useState(null)
      , [g,x] = m.useState(null)
      , [C,b] = m.useState(!1)
      , E = zO(u)
      , [T,P] = fl({
        prop: r,
        defaultProp: o ?? !1,
        onChange: s,
        caller: Xr
    })
      , [N,M] = fl({
        prop: i,
        defaultProp: a,
        onChange: l,
        caller: Xr
    })
      , V = m.useRef(null)
      , O = w ? S || !!w.closest("form") : !0
      , [W,D] = m.useState(new Set)
      , H = Array.from(W).map(z => z.props.value).join(";");
    return y.jsx(lN, {
        ...p,
        children: y.jsxs(GO, {
            required: h,
            scope: t,
            trigger: w,
            onTriggerChange: v,
            valueNode: g,
            onValueNodeChange: x,
            valueNodeHasChildren: C,
            onValueNodeHasChildrenChange: b,
            contentId: Io(),
            value: N,
            onValueChange: M,
            open: T,
            onOpenChange: P,
            dir: E,
            triggerPointerDownPosRef: V,
            disabled: f,
            children: [y.jsx(pu.Provider, {
                scope: t,
                children: y.jsx(YO, {
                    scope: e.__scopeSelect,
                    onNativeOptionAdd: m.useCallback(z => {
                        D(F => new Set(F).add(z))
                    }
                    , []),
                    onNativeOptionRemove: m.useCallback(z => {
                        D(F => {
                            const R = new Set(F);
                            return R.delete(z),
                            R
                        }
                        )
                    }
                    , []),
                    children: n
                })
            }), O ? y.jsxs(bC, {
                "aria-hidden": !0,
                required: h,
                tabIndex: -1,
                name: c,
                autoComplete: d,
                value: N,
                onChange: z => M(z.target.value),
                disabled: f,
                form: S,
                children: [N === void 0 ? y.jsx("option", {
                    value: ""
                }) : null, Array.from(W)]
            }, H) : null]
        })
    })
}
;
JS.displayName = Xr;
var eC = "SelectTrigger"
  , tC = m.forwardRef( (e, t) => {
    const {__scopeSelect: n, disabled: r=!1, ...o} = e
      , s = gu(n)
      , i = yr(eC, n)
      , a = i.disabled || r
      , l = me(t, i.onTriggerChange)
      , u = mu(n)
      , c = m.useRef("touch")
      , [d,f,h] = TC(p => {
        const w = u().filter(x => !x.disabled)
          , v = w.find(x => x.value === i.value)
          , g = PC(w, p, v);
        g !== void 0 && i.onValueChange(g.value)
    }
    )
      , S = p => {
        a || (i.onOpenChange(!0),
        h()),
        p && (i.triggerPointerDownPosRef.current = {
            x: Math.round(p.pageX),
            y: Math.round(p.pageY)
        })
    }
    ;
    return y.jsx(cw, {
        asChild: !0,
        ...s,
        children: y.jsx(ne.button, {
            type: "button",
            role: "combobox",
            "aria-controls": i.contentId,
            "aria-expanded": i.open,
            "aria-required": i.required,
            "aria-autocomplete": "none",
            dir: i.dir,
            "data-state": i.open ? "open" : "closed",
            disabled: a,
            "data-disabled": a ? "" : void 0,
            "data-placeholder": EC(i.value) ? "" : void 0,
            ...o,
            ref: l,
            onClick: Z(o.onClick, p => {
                p.currentTarget.focus(),
                c.current !== "mouse" && S(p)
            }
            ),
            onPointerDown: Z(o.onPointerDown, p => {
                c.current = p.pointerType;
                const w = p.target;
                w.hasPointerCapture(p.pointerId) && w.releasePointerCapture(p.pointerId),
                p.button === 0 && p.ctrlKey === !1 && p.pointerType === "mouse" && (S(p),
                p.preventDefault())
            }
            ),
            onKeyDown: Z(o.onKeyDown, p => {
                const w = d.current !== "";
                !(p.ctrlKey || p.altKey || p.metaKey) && p.key.length === 1 && f(p.key),
                !(w && p.key === " ") && WO.includes(p.key) && (S(),
                p.preventDefault())
            }
            )
        })
    })
}
);
tC.displayName = eC;
var nC = "SelectValue"
  , rC = m.forwardRef( (e, t) => {
    const {__scopeSelect: n, className: r, style: o, children: s, placeholder: i="", ...a} = e
      , l = yr(nC, n)
      , {onValueNodeHasChildrenChange: u} = l
      , c = s !== void 0
      , d = me(t, l.onValueNodeChange);
    return $e( () => {
        u(c)
    }
    , [u, c]),
    y.jsx(ne.span, {
        ...a,
        ref: d,
        style: {
            pointerEvents: "none"
        },
        children: EC(l.value) ? y.jsx(y.Fragment, {
            children: i
        }) : s
    })
}
);
rC.displayName = nC;
var XO = "SelectIcon"
  , oC = m.forwardRef( (e, t) => {
    const {__scopeSelect: n, children: r, ...o} = e;
    return y.jsx(ne.span, {
        "aria-hidden": !0,
        ...o,
        ref: t,
        children: r || "▼"
    })
}
);
oC.displayName = XO;
var qO = "SelectPortal"
  , sC = e => y.jsx(Gl, {
    asChild: !0,
    ...e
});
sC.displayName = qO;
var qr = "SelectContent"
  , iC = m.forwardRef( (e, t) => {
    const n = yr(qr, e.__scopeSelect)
      , [r,o] = m.useState();
    if ($e( () => {
        o(new DocumentFragment)
    }
    , []),
    !n.open) {
        const s = r;
        return s ? eo.createPortal(y.jsx(aC, {
            scope: e.__scopeSelect,
            children: y.jsx(pu.Slot, {
                scope: e.__scopeSelect,
                children: y.jsx("div", {
                    children: e.children
                })
            })
        }), s) : null
    }
    return y.jsx(lC, {
        ...e,
        ref: t
    })
}
);
iC.displayName = qr;
var _t = 10
  , [aC,xr] = vs(qr)
  , ZO = "SelectContentImpl"
  , JO = Jo("SelectContent.RemoveScroll")
  , lC = m.forwardRef( (e, t) => {
    const {__scopeSelect: n, position: r="item-aligned", onCloseAutoFocus: o, onEscapeKeyDown: s, onPointerDownOutside: i, side: a, sideOffset: l, align: u, alignOffset: c, arrowPadding: d, collisionBoundary: f, collisionPadding: h, sticky: S, hideWhenDetached: p, avoidCollisions: w, ...v} = e
      , g = yr(qr, n)
      , [x,C] = m.useState(null)
      , [b,E] = m.useState(null)
      , T = me(t, _ => C(_))
      , [P,N] = m.useState(null)
      , [M,V] = m.useState(null)
      , O = mu(n)
      , [W,D] = m.useState(!1)
      , H = m.useRef(!1);
    m.useEffect( () => {
        if (x)
            return MS(x)
    }
    , [x]),
    CS();
    const z = m.useCallback(_ => {
        const [ie,...Ee] = O().map(re => re.ref.current)
          , [se] = Ee.slice(-1)
          , ee = document.activeElement;
        for (const re of _)
            if (re === ee || (re == null || re.scrollIntoView({
                block: "nearest"
            }),
            re === ie && b && (b.scrollTop = 0),
            re === se && b && (b.scrollTop = b.scrollHeight),
            re == null || re.focus(),
            document.activeElement !== ee))
                return
    }
    , [O, b])
      , F = m.useCallback( () => z([P, x]), [z, P, x]);
    m.useEffect( () => {
        W && F()
    }
    , [W, F]);
    const {onOpenChange: R, triggerPointerDownPosRef: k} = g;
    m.useEffect( () => {
        if (x) {
            let _ = {
                x: 0,
                y: 0
            };
            const ie = se => {
                var ee, re;
                _ = {
                    x: Math.abs(Math.round(se.pageX) - (((ee = k.current) == null ? void 0 : ee.x) ?? 0)),
                    y: Math.abs(Math.round(se.pageY) - (((re = k.current) == null ? void 0 : re.y) ?? 0))
                }
            }
              , Ee = se => {
                _.x <= 10 && _.y <= 10 ? se.preventDefault() : x.contains(se.target) || R(!1),
                document.removeEventListener("pointermove", ie),
                k.current = null
            }
            ;
            return k.current !== null && (document.addEventListener("pointermove", ie),
            document.addEventListener("pointerup", Ee, {
                capture: !0,
                once: !0
            })),
            () => {
                document.removeEventListener("pointermove", ie),
                document.removeEventListener("pointerup", Ee, {
                    capture: !0
                })
            }
        }
    }
    , [x, R, k]),
    m.useEffect( () => {
        const _ = () => R(!1);
        return window.addEventListener("blur", _),
        window.addEventListener("resize", _),
        () => {
            window.removeEventListener("blur", _),
            window.removeEventListener("resize", _)
        }
    }
    , [R]);
    const [L,K] = TC(_ => {
        const ie = O().filter(ee => !ee.disabled)
          , Ee = ie.find(ee => ee.ref.current === document.activeElement)
          , se = PC(ie, _, Ee);
        se && setTimeout( () => se.ref.current.focus())
    }
    )
      , U = m.useCallback( (_, ie, Ee) => {
        const se = !H.current && !Ee;
        (g.value !== void 0 && g.value === ie || se) && (N(_),
        se && (H.current = !0))
    }
    , [g.value])
      , X = m.useCallback( () => x == null ? void 0 : x.focus(), [x])
      , G = m.useCallback( (_, ie, Ee) => {
        const se = !H.current && !Ee;
        (g.value !== void 0 && g.value === ie || se) && V(_)
    }
    , [g.value])
      , ce = r === "popper" ? nf : uC
      , be = ce === nf ? {
        side: a,
        sideOffset: l,
        align: u,
        alignOffset: c,
        arrowPadding: d,
        collisionBoundary: f,
        collisionPadding: h,
        sticky: S,
        hideWhenDetached: p,
        avoidCollisions: w
    } : {};
    return y.jsx(aC, {
        scope: n,
        content: x,
        viewport: b,
        onViewportChange: E,
        itemRefCallback: U,
        selectedItem: P,
        onItemLeave: X,
        itemTextRefCallback: G,
        focusSelectedItem: F,
        selectedItemText: M,
        position: r,
        isPositioned: W,
        searchRef: L,
        children: y.jsx(Jh, {
            as: JO,
            allowPinchZoom: !0,
            children: y.jsx(Zh, {
                asChild: !0,
                trapped: g.open,
                onMountAutoFocus: _ => {
                    _.preventDefault()
                }
                ,
                onUnmountAutoFocus: Z(o, _ => {
                    var ie;
                    (ie = g.trigger) == null || ie.focus({
                        preventScroll: !0
                    }),
                    _.preventDefault()
                }
                ),
                children: y.jsx(Oi, {
                    asChild: !0,
                    disableOutsidePointerEvents: !0,
                    onEscapeKeyDown: s,
                    onPointerDownOutside: i,
                    onFocusOutside: _ => _.preventDefault(),
                    onDismiss: () => g.onOpenChange(!1),
                    children: y.jsx(ce, {
                        role: "listbox",
                        id: g.contentId,
                        "data-state": g.open ? "open" : "closed",
                        dir: g.dir,
                        onContextMenu: _ => _.preventDefault(),
                        ...v,
                        ...be,
                        onPlaced: () => D(!0),
                        ref: T,
                        style: {
                            display: "flex",
                            flexDirection: "column",
                            outline: "none",
                            ...v.style
                        },
                        onKeyDown: Z(v.onKeyDown, _ => {
                            const ie = _.ctrlKey || _.altKey || _.metaKey;
                            if (_.key === "Tab" && _.preventDefault(),
                            !ie && _.key.length === 1 && K(_.key),
                            ["ArrowUp", "ArrowDown", "Home", "End"].includes(_.key)) {
                                let se = O().filter(ee => !ee.disabled).map(ee => ee.ref.current);
                                if (["ArrowUp", "End"].includes(_.key) && (se = se.slice().reverse()),
                                ["ArrowUp", "ArrowDown"].includes(_.key)) {
                                    const ee = _.target
                                      , re = se.indexOf(ee);
                                    se = se.slice(re + 1)
                                }
                                setTimeout( () => z(se)),
                                _.preventDefault()
                            }
                        }
                        )
                    })
                })
            })
        })
    })
}
);
lC.displayName = ZO;
var eL = "SelectItemAlignedPosition"
  , uC = m.forwardRef( (e, t) => {
    const {__scopeSelect: n, onPlaced: r, ...o} = e
      , s = yr(qr, n)
      , i = xr(qr, n)
      , [a,l] = m.useState(null)
      , [u,c] = m.useState(null)
      , d = me(t, T => c(T))
      , f = mu(n)
      , h = m.useRef(!1)
      , S = m.useRef(!0)
      , {viewport: p, selectedItem: w, selectedItemText: v, focusSelectedItem: g} = i
      , x = m.useCallback( () => {
        if (s.trigger && s.valueNode && a && u && p && w && v) {
            const T = s.trigger.getBoundingClientRect()
              , P = u.getBoundingClientRect()
              , N = s.valueNode.getBoundingClientRect()
              , M = v.getBoundingClientRect();
            if (s.dir !== "rtl") {
                const ee = M.left - P.left
                  , re = N.left - ee
                  , ze = T.left - re
                  , yt = T.width + ze
                  , wr = Math.max(yt, P.width)
                  , Mn = window.innerWidth - _t
                  , Sr = Av(re, [_t, Math.max(_t, Mn - wr)]);
                a.style.minWidth = yt + "px",
                a.style.left = Sr + "px"
            } else {
                const ee = P.right - M.right
                  , re = window.innerWidth - N.right - ee
                  , ze = window.innerWidth - T.right - re
                  , yt = T.width + ze
                  , wr = Math.max(yt, P.width)
                  , Mn = window.innerWidth - _t
                  , Sr = Av(re, [_t, Math.max(_t, Mn - wr)]);
                a.style.minWidth = yt + "px",
                a.style.right = Sr + "px"
            }
            const V = f()
              , O = window.innerHeight - _t * 2
              , W = p.scrollHeight
              , D = window.getComputedStyle(u)
              , H = parseInt(D.borderTopWidth, 10)
              , z = parseInt(D.paddingTop, 10)
              , F = parseInt(D.borderBottomWidth, 10)
              , R = parseInt(D.paddingBottom, 10)
              , k = H + z + W + R + F
              , L = Math.min(w.offsetHeight * 5, k)
              , K = window.getComputedStyle(p)
              , U = parseInt(K.paddingTop, 10)
              , X = parseInt(K.paddingBottom, 10)
              , G = T.top + T.height / 2 - _t
              , ce = O - G
              , be = w.offsetHeight / 2
              , _ = w.offsetTop + be
              , ie = H + z + _
              , Ee = k - ie;
            if (ie <= G) {
                const ee = V.length > 0 && w === V[V.length - 1].ref.current;
                a.style.bottom = "0px";
                const re = u.clientHeight - p.offsetTop - p.offsetHeight
                  , ze = Math.max(ce, be + (ee ? X : 0) + re + F)
                  , yt = ie + ze;
                a.style.height = yt + "px"
            } else {
                const ee = V.length > 0 && w === V[0].ref.current;
                a.style.top = "0px";
                const ze = Math.max(G, H + p.offsetTop + (ee ? U : 0) + be) + Ee;
                a.style.height = ze + "px",
                p.scrollTop = ie - G + p.offsetTop
            }
            a.style.margin = `${_t}px 0`,
            a.style.minHeight = L + "px",
            a.style.maxHeight = O + "px",
            r == null || r(),
            requestAnimationFrame( () => h.current = !0)
        }
    }
    , [f, s.trigger, s.valueNode, a, u, p, w, v, s.dir, r]);
    $e( () => x(), [x]);
    const [C,b] = m.useState();
    $e( () => {
        u && b(window.getComputedStyle(u).zIndex)
    }
    , [u]);
    const E = m.useCallback(T => {
        T && S.current === !0 && (x(),
        g == null || g(),
        S.current = !1)
    }
    , [x, g]);
    return y.jsx(nL, {
        scope: n,
        contentWrapper: a,
        shouldExpandOnScrollRef: h,
        onScrollButtonChange: E,
        children: y.jsx("div", {
            ref: l,
            style: {
                display: "flex",
                flexDirection: "column",
                position: "fixed",
                zIndex: C
            },
            children: y.jsx(ne.div, {
                ...o,
                ref: d,
                style: {
                    boxSizing: "border-box",
                    maxHeight: "100%",
                    ...o.style
                }
            })
        })
    })
}
);
uC.displayName = eL;
var tL = "SelectPopperPosition"
  , nf = m.forwardRef( (e, t) => {
    const {__scopeSelect: n, align: r="start", collisionPadding: o=_t, ...s} = e
      , i = gu(n);
    return y.jsx(dw, {
        ...i,
        ...s,
        ref: t,
        align: r,
        collisionPadding: o,
        style: {
            boxSizing: "border-box",
            ...s.style,
            "--radix-select-content-transform-origin": "var(--radix-popper-transform-origin)",
            "--radix-select-content-available-width": "var(--radix-popper-available-width)",
            "--radix-select-content-available-height": "var(--radix-popper-available-height)",
            "--radix-select-trigger-width": "var(--radix-popper-anchor-width)",
            "--radix-select-trigger-height": "var(--radix-popper-anchor-height)"
        }
    })
}
);
nf.displayName = tL;
var [nL,rp] = vs(qr, {})
  , rf = "SelectViewport"
  , cC = m.forwardRef( (e, t) => {
    const {__scopeSelect: n, nonce: r, ...o} = e
      , s = xr(rf, n)
      , i = rp(rf, n)
      , a = me(t, s.onViewportChange)
      , l = m.useRef(0);
    return y.jsxs(y.Fragment, {
        children: [y.jsx("style", {
            dangerouslySetInnerHTML: {
                __html: "[data-radix-select-viewport]{scrollbar-width:none;-ms-overflow-style:none;-webkit-overflow-scrolling:touch;}[data-radix-select-viewport]::-webkit-scrollbar{display:none}"
            },
            nonce: r
        }), y.jsx(pu.Slot, {
            scope: n,
            children: y.jsx(ne.div, {
                "data-radix-select-viewport": "",
                role: "presentation",
                ...o,
                ref: a,
                style: {
                    position: "relative",
                    flex: 1,
                    overflow: "hidden auto",
                    ...o.style
                },
                onScroll: Z(o.onScroll, u => {
                    const c = u.currentTarget
                      , {contentWrapper: d, shouldExpandOnScrollRef: f} = i;
                    if (f != null && f.current && d) {
                        const h = Math.abs(l.current - c.scrollTop);
                        if (h > 0) {
                            const S = window.innerHeight - _t * 2
                              , p = parseFloat(d.style.minHeight)
                              , w = parseFloat(d.style.height)
                              , v = Math.max(p, w);
                            if (v < S) {
                                const g = v + h
                                  , x = Math.min(S, g)
                                  , C = g - x;
                                d.style.height = x + "px",
                                d.style.bottom === "0px" && (c.scrollTop = C > 0 ? C : 0,
                                d.style.justifyContent = "flex-end")
                            }
                        }
                    }
                    l.current = c.scrollTop
                }
                )
            })
        })]
    })
}
);
cC.displayName = rf;
var dC = "SelectGroup"
  , [rL,oL] = vs(dC)
  , sL = m.forwardRef( (e, t) => {
    const {__scopeSelect: n, ...r} = e
      , o = Io();
    return y.jsx(rL, {
        scope: n,
        id: o,
        children: y.jsx(ne.div, {
            role: "group",
            "aria-labelledby": o,
            ...r,
            ref: t
        })
    })
}
);
sL.displayName = dC;
var fC = "SelectLabel"
  , hC = m.forwardRef( (e, t) => {
    const {__scopeSelect: n, ...r} = e
      , o = oL(fC, n);
    return y.jsx(ne.div, {
        id: o.id,
        ...r,
        ref: t
    })
}
);
hC.displayName = fC;
var Nl = "SelectItem"
  , [iL,pC] = vs(Nl)
  , mC = m.forwardRef( (e, t) => {
    const {__scopeSelect: n, value: r, disabled: o=!1, textValue: s, ...i} = e
      , a = yr(Nl, n)
      , l = xr(Nl, n)
      , u = a.value === r
      , [c,d] = m.useState(s ?? "")
      , [f,h] = m.useState(!1)
      , S = me(t, g => {
        var x;
        return (x = l.itemRefCallback) == null ? void 0 : x.call(l, g, r, o)
    }
    )
      , p = Io()
      , w = m.useRef("touch")
      , v = () => {
        o || (a.onValueChange(r),
        a.onOpenChange(!1))
    }
    ;
    if (r === "")
        throw new Error("A <Select.Item /> must have a value prop that is not an empty string. This is because the Select value can be set to an empty string to clear the selection and show the placeholder.");
    return y.jsx(iL, {
        scope: n,
        value: r,
        disabled: o,
        textId: p,
        isSelected: u,
        onItemTextChange: m.useCallback(g => {
            d(x => x || ((g == null ? void 0 : g.textContent) ?? "").trim())
        }
        , []),
        children: y.jsx(pu.ItemSlot, {
            scope: n,
            value: r,
            disabled: o,
            textValue: c,
            children: y.jsx(ne.div, {
                role: "option",
                "aria-labelledby": p,
                "data-highlighted": f ? "" : void 0,
                "aria-selected": u && f,
                "data-state": u ? "checked" : "unchecked",
                "aria-disabled": o || void 0,
                "data-disabled": o ? "" : void 0,
                tabIndex: o ? void 0 : -1,
                ...i,
                ref: S,
                onFocus: Z(i.onFocus, () => h(!0)),
                onBlur: Z(i.onBlur, () => h(!1)),
                onClick: Z(i.onClick, () => {
                    w.current !== "mouse" && v()
                }
                ),
                onPointerUp: Z(i.onPointerUp, () => {
                    w.current === "mouse" && v()
                }
                ),
                onPointerDown: Z(i.onPointerDown, g => {
                    w.current = g.pointerType
                }
                ),
                onPointerMove: Z(i.onPointerMove, g => {
                    var x;
                    w.current = g.pointerType,
                    o ? (x = l.onItemLeave) == null || x.call(l) : w.current === "mouse" && g.currentTarget.focus({
                        preventScroll: !0
                    })
                }
                ),
                onPointerLeave: Z(i.onPointerLeave, g => {
                    var x;
                    g.currentTarget === document.activeElement && ((x = l.onItemLeave) == null || x.call(l))
                }
                ),
                onKeyDown: Z(i.onKeyDown, g => {
                    var C;
                    ((C = l.searchRef) == null ? void 0 : C.current) !== "" && g.key === " " || (HO.includes(g.key) && v(),
                    g.key === " " && g.preventDefault())
                }
                )
            })
        })
    })
}
);
mC.displayName = Nl;
var Fs = "SelectItemText"
  , gC = m.forwardRef( (e, t) => {
    const {__scopeSelect: n, className: r, style: o, ...s} = e
      , i = yr(Fs, n)
      , a = xr(Fs, n)
      , l = pC(Fs, n)
      , u = QO(Fs, n)
      , [c,d] = m.useState(null)
      , f = me(t, v => d(v), l.onItemTextChange, v => {
        var g;
        return (g = a.itemTextRefCallback) == null ? void 0 : g.call(a, v, l.value, l.disabled)
    }
    )
      , h = c == null ? void 0 : c.textContent
      , S = m.useMemo( () => y.jsx("option", {
        value: l.value,
        disabled: l.disabled,
        children: h
    }, l.value), [l.disabled, l.value, h])
      , {onNativeOptionAdd: p, onNativeOptionRemove: w} = u;
    return $e( () => (p(S),
    () => w(S)), [p, w, S]),
    y.jsxs(y.Fragment, {
        children: [y.jsx(ne.span, {
            id: l.textId,
            ...s,
            ref: f
        }), l.isSelected && i.valueNode && !i.valueNodeHasChildren ? eo.createPortal(s.children, i.valueNode) : null]
    })
}
);
gC.displayName = Fs;
var vC = "SelectItemIndicator"
  , yC = m.forwardRef( (e, t) => {
    const {__scopeSelect: n, ...r} = e;
    return pC(vC, n).isSelected ? y.jsx(ne.span, {
        "aria-hidden": !0,
        ...r,
        ref: t
    }) : null
}
);
yC.displayName = vC;
var of = "SelectScrollUpButton"
  , xC = m.forwardRef( (e, t) => {
    const n = xr(of, e.__scopeSelect)
      , r = rp(of, e.__scopeSelect)
      , [o,s] = m.useState(!1)
      , i = me(t, r.onScrollButtonChange);
    return $e( () => {
        if (n.viewport && n.isPositioned) {
            let a = function() {
                const u = l.scrollTop > 0;
                s(u)
            };
            const l = n.viewport;
            return a(),
            l.addEventListener("scroll", a),
            () => l.removeEventListener("scroll", a)
        }
    }
    , [n.viewport, n.isPositioned]),
    o ? y.jsx(SC, {
        ...e,
        ref: i,
        onAutoScroll: () => {
            const {viewport: a, selectedItem: l} = n;
            a && l && (a.scrollTop = a.scrollTop - l.offsetHeight)
        }
    }) : null
}
);
xC.displayName = of;
var sf = "SelectScrollDownButton"
  , wC = m.forwardRef( (e, t) => {
    const n = xr(sf, e.__scopeSelect)
      , r = rp(sf, e.__scopeSelect)
      , [o,s] = m.useState(!1)
      , i = me(t, r.onScrollButtonChange);
    return $e( () => {
        if (n.viewport && n.isPositioned) {
            let a = function() {
                const u = l.scrollHeight - l.clientHeight
                  , c = Math.ceil(l.scrollTop) < u;
                s(c)
            };
            const l = n.viewport;
            return a(),
            l.addEventListener("scroll", a),
            () => l.removeEventListener("scroll", a)
        }
    }
    , [n.viewport, n.isPositioned]),
    o ? y.jsx(SC, {
        ...e,
        ref: i,
        onAutoScroll: () => {
            const {viewport: a, selectedItem: l} = n;
            a && l && (a.scrollTop = a.scrollTop + l.offsetHeight)
        }
    }) : null
}
);
wC.displayName = sf;
var SC = m.forwardRef( (e, t) => {
    const {__scopeSelect: n, onAutoScroll: r, ...o} = e
      , s = xr("SelectScrollButton", n)
      , i = m.useRef(null)
      , a = mu(n)
      , l = m.useCallback( () => {
        i.current !== null && (window.clearInterval(i.current),
        i.current = null)
    }
    , []);
    return m.useEffect( () => () => l(), [l]),
    $e( () => {
        var c;
        const u = a().find(d => d.ref.current === document.activeElement);
        (c = u == null ? void 0 : u.ref.current) == null || c.scrollIntoView({
            block: "nearest"
        })
    }
    , [a]),
    y.jsx(ne.div, {
        "aria-hidden": !0,
        ...o,
        ref: t,
        style: {
            flexShrink: 0,
            ...o.style
        },
        onPointerDown: Z(o.onPointerDown, () => {
            i.current === null && (i.current = window.setInterval(r, 50))
        }
        ),
        onPointerMove: Z(o.onPointerMove, () => {
            var u;
            (u = s.onItemLeave) == null || u.call(s),
            i.current === null && (i.current = window.setInterval(r, 50))
        }
        ),
        onPointerLeave: Z(o.onPointerLeave, () => {
            l()
        }
        )
    })
}
)
  , aL = "SelectSeparator"
  , CC = m.forwardRef( (e, t) => {
    const {__scopeSelect: n, ...r} = e;
    return y.jsx(ne.div, {
        "aria-hidden": !0,
        ...r,
        ref: t
    })
}
);
CC.displayName = aL;
var af = "SelectArrow"
  , lL = m.forwardRef( (e, t) => {
    const {__scopeSelect: n, ...r} = e
      , o = gu(n)
      , s = yr(af, n)
      , i = xr(af, n);
    return s.open && i.position === "popper" ? y.jsx(fw, {
        ...o,
        ...r,
        ref: t
    }) : null
}
);
lL.displayName = af;
var uL = "SelectBubbleInput"
  , bC = m.forwardRef( ({__scopeSelect: e, value: t, ...n}, r) => {
    const o = m.useRef(null)
      , s = me(r, o)
      , i = UO(t);
    return m.useEffect( () => {
        const a = o.current;
        if (!a)
            return;
        const l = window.HTMLSelectElement.prototype
          , c = Object.getOwnPropertyDescriptor(l, "value").set;
        if (i !== t && c) {
            const d = new Event("change",{
                bubbles: !0
            });
            c.call(a, t),
            a.dispatchEvent(d)
        }
    }
    , [i, t]),
    y.jsx(ne.select, {
        ...n,
        style: {
            ...ax,
            ...n.style
        },
        ref: s,
        defaultValue: t
    })
}
);
bC.displayName = uL;
function EC(e) {
    return e === "" || e === void 0
}
function TC(e) {
    const t = Gt(e)
      , n = m.useRef("")
      , r = m.useRef(0)
      , o = m.useCallback(i => {
        const a = n.current + i;
        t(a),
        function l(u) {
            n.current = u,
            window.clearTimeout(r.current),
            u !== "" && (r.current = window.setTimeout( () => l(""), 1e3))
        }(a)
    }
    , [t])
      , s = m.useCallback( () => {
        n.current = "",
        window.clearTimeout(r.current)
    }
    , []);
    return m.useEffect( () => () => window.clearTimeout(r.current), []),
    [n, o, s]
}
function PC(e, t, n) {
    const o = t.length > 1 && Array.from(t).every(u => u === t[0]) ? t[0] : t
      , s = n ? e.indexOf(n) : -1;
    let i = cL(e, Math.max(s, 0));
    o.length === 1 && (i = i.filter(u => u !== n));
    const l = i.find(u => u.textValue.toLowerCase().startsWith(o.toLowerCase()));
    return l !== n ? l : void 0
}
function cL(e, t) {
    return e.map( (n, r) => e[(t + r) % e.length])
}
var dL = JS
  , RC = tC
  , fL = rC
  , hL = oC
  , pL = sC
  , kC = iC
  , mL = cC
  , NC = hC
  , AC = mC
  , gL = gC
  , vL = yC
  , MC = xC
  , jC = wC
  , DC = CC;
const yL = dL
  , xL = fL
  , IC = m.forwardRef( ({className: e, children: t, ...n}, r) => y.jsxs(RC, {
    ref: r,
    className: Re("flex h-10 w-full items-center justify-between rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 [&>span]:line-clamp-1", e),
    ...n,
    children: [t, y.jsx(hL, {
        asChild: !0,
        children: y.jsx(Mx, {
            className: "h-4 w-4 opacity-50"
        })
    })]
}));
IC.displayName = RC.displayName;
const OC = m.forwardRef( ({className: e, ...t}, n) => y.jsx(MC, {
    ref: n,
    className: Re("flex cursor-default items-center justify-center py-1", e),
    ...t,
    children: y.jsx(CP, {
        className: "h-4 w-4"
    })
}));
OC.displayName = MC.displayName;
const LC = m.forwardRef( ({className: e, ...t}, n) => y.jsx(jC, {
    ref: n,
    className: Re("flex cursor-default items-center justify-center py-1", e),
    ...t,
    children: y.jsx(Mx, {
        className: "h-4 w-4"
    })
}));
LC.displayName = jC.displayName;
const _C = m.forwardRef( ({className: e, children: t, position: n="popper", ...r}, o) => y.jsx(pL, {
    children: y.jsxs(kC, {
        ref: o,
        className: Re("relative z-50 max-h-96 min-w-[8rem] overflow-hidden rounded-md border bg-popover text-popover-foreground shadow-md data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2", n === "popper" && "data-[side=bottom]:translate-y-1 data-[side=left]:-translate-x-1 data-[side=right]:translate-x-1 data-[side=top]:-translate-y-1", e),
        position: n,
        ...r,
        children: [y.jsx(OC, {}), y.jsx(mL, {
            className: Re("p-1", n === "popper" && "h-[var(--radix-select-trigger-height)] w-full min-w-[var(--radix-select-trigger-width)]"),
            children: t
        }), y.jsx(LC, {})]
    })
}));
_C.displayName = kC.displayName;
const wL = m.forwardRef( ({className: e, ...t}, n) => y.jsx(NC, {
    ref: n,
    className: Re("py-1.5 pl-8 pr-2 text-sm font-semibold", e),
    ...t
}));
wL.displayName = NC.displayName;
const Vs = m.forwardRef( ({className: e, children: t, ...n}, r) => y.jsxs(AC, {
    ref: r,
    className: Re("relative flex w-full cursor-default select-none items-center rounded-sm py-1.5 pl-8 pr-2 text-sm outline-none data-[disabled]:pointer-events-none data-[disabled]:opacity-50 focus:bg-success focus:text-white", e),
    ...n,
    children: [y.jsx("span", {
        className: "absolute left-2 flex h-3.5 w-3.5 items-center justify-center",
        children: y.jsx(vL, {
            children: y.jsx(wP, {
                className: "h-4 w-4"
            })
        })
    }), y.jsx(gL, {
        children: t
    })]
}));
Vs.displayName = AC.displayName;
const SL = m.forwardRef( ({className: e, ...t}, n) => y.jsx(DC, {
    ref: n,
    className: Re("-mx-1 my-1 h-px bg-muted", e),
    ...t
}));
SL.displayName = DC.displayName;
const FC = "/assets/ganhe-pix-logo-DjUMhWJR.webp"
  , CL = ({isOpen: e, onClose: t, selectedAmount: n}) => {
    const r = wh()
      , [o,s] = m.useState("select-method")
      , [i,a] = m.useState({
        nome: "",
        tipoChave: "",
        chavePix: ""
    })
      , [l,u] = m.useState("")
      , c = (v, g) => {
        const x = g.replace(/\D/g, "");
        switch (v) {
        case "cpf":
            return x.length !== 11 ? {
                valid: !1,
                error: "CPF deve ter 11 dígitos"
            } : {
                valid: !0,
                error: ""
            };
        case "telefone":
            return x.length < 10 || x.length > 11 ? {
                valid: !1,
                error: "Telefone deve ter 10 ou 11 dígitos (DDD + número)"
            } : {
                valid: !0,
                error: ""
            };
        case "email":
            return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(g) ? {
                valid: !0,
                error: ""
            } : {
                valid: !1,
                error: "E-mail inválido"
            };
        case "aleatoria":
            return g.length < 32 ? {
                valid: !1,
                error: "Chave aleatória deve ter 32 caracteres"
            } : {
                valid: !0,
                error: ""
            };
        default:
            return {
                valid: !1,
                error: "Selecione um tipo de chave"
            }
        }
    }
      , d = () => {
        s("select-method"),
        a({
            nome: "",
            tipoChave: "",
            chavePix: ""
        }),
        u(""),
        t()
    }
      , f = () => {
        s("form")
    }
      , h = () => {
        if (!i.nome || !i.tipoChave || !i.chavePix)
            return;
        const v = c(i.tipoChave, i.chavePix);
        if (!v.valid) {
            u(v.error);
            return
        }
        u(""),
        s("loading"),
        setTimeout( () => {
            t(),
            r("/confirmacao", {
                state: {
                    selectedAmount: n,
                    pixData: i
                }
            })
        }
        , 3e3)
    }
      , S = () => y.jsxs(y.Fragment, {
        children: [y.jsx(ef, {
            children: y.jsx(tf, {
                className: "text-center text-lg font-medium",
                children: "Adicionar método de saque"
            })
        }), y.jsx("div", {
            className: "mt-4",
            children: y.jsxs("button", {
                onClick: f,
                className: "w-full flex items-center justify-between p-4 border border-border rounded-lg hover:bg-secondary transition-colors",
                children: [y.jsxs("div", {
                    className: "flex items-center gap-3",
                    children: [y.jsx("img", {
                        src: wS,
                        alt: "PIX",
                        className: "h-5"
                    }), y.jsxs("div", {
                        className: "text-left",
                        children: [y.jsx("p", {
                            className: "font-medium text-foreground",
                            children: "PIX"
                        }), y.jsx("p", {
                            className: "text-sm text-muted-foreground",
                            children: "Recebimento Imediato"
                        })]
                    })]
                }), y.jsx(SP, {
                    className: "w-5 h-5 text-muted-foreground"
                })]
            })
        })]
    })
      , p = () => y.jsxs(y.Fragment, {
        children: [y.jsxs(ef, {
            className: "flex flex-row items-center gap-2",
            children: [y.jsx("button", {
                onClick: () => s("select-method"),
                className: "p-1",
                children: y.jsx(hl, {
                    className: "w-5 h-5"
                })
            }), y.jsx(tf, {
                className: "text-center text-lg font-medium flex-1",
                children: "Vincular PIX"
            })]
        }), y.jsxs("div", {
            className: "mt-6 space-y-6",
            children: [y.jsxs("div", {
                children: [y.jsx("label", {
                    className: "text-sm font-medium text-foreground",
                    children: "Nome"
                }), y.jsx(Rl, {
                    placeholder: "Nome completo",
                    value: i.nome,
                    onChange: v => a({
                        ...i,
                        nome: v.target.value
                    }),
                    className: "mt-2 border-0 border-b border-border rounded-none px-0 focus-visible:ring-0"
                })]
            }), y.jsxs("div", {
                children: [y.jsx("label", {
                    className: "text-sm font-medium text-foreground",
                    children: "Tipo de Chave PIX"
                }), y.jsxs(yL, {
                    value: i.tipoChave,
                    onValueChange: v => a({
                        ...i,
                        tipoChave: v
                    }),
                    children: [y.jsx(IC, {
                        className: "mt-2 border-0 border-b border-border rounded-none px-0 focus-visible:ring-0",
                        children: y.jsx(xL, {
                            placeholder: "Escolha o tipo de chave PIX"
                        })
                    }), y.jsxs(_C, {
                        children: [y.jsx(Vs, {
                            value: "cpf",
                            children: "CPF"
                        }), y.jsx(Vs, {
                            value: "telefone",
                            children: "Telefone"
                        }), y.jsx(Vs, {
                            value: "email",
                            children: "E-mail"
                        }), y.jsx(Vs, {
                            value: "aleatoria",
                            children: "Chave Aleatória"
                        })]
                    })]
                })]
            }), y.jsxs("div", {
                children: [y.jsx("label", {
                    className: "text-sm font-medium text-foreground",
                    children: "Chave PIX"
                }), y.jsx(Rl, {
                    placeholder: i.tipoChave === "cpf" ? "000.000.000-00" : i.tipoChave === "telefone" ? "(00) 00000-0000" : i.tipoChave === "email" ? "email@exemplo.com" : i.tipoChave === "aleatoria" ? "Chave aleatória de 32 caracteres" : "Digite sua chave PIX",
                    value: i.chavePix,
                    onChange: v => {
                        a({
                            ...i,
                            chavePix: v.target.value
                        }),
                        u("")
                    }
                    ,
                    className: "mt-2 border-0 border-b border-border rounded-none px-0 focus-visible:ring-0"
                }), l && y.jsx("p", {
                    className: "text-sm text-destructive mt-2",
                    children: l
                })]
            }), y.jsx(to, {
                onClick: h,
                className: "w-full py-6 bg-success hover:bg-success/90 text-white font-medium",
                disabled: !i.nome || !i.tipoChave || !i.chavePix,
                children: "Enviar"
            })]
        })]
    })
      , w = () => y.jsxs("div", {
        className: "flex flex-col items-center justify-center py-20",
        children: [y.jsx("img", {
            src: FC,
            alt: "Ganhe PIX",
            className: "w-48 mb-16"
        }), y.jsx("p", {
            className: "text-xl font-medium text-foreground mb-4",
            children: "Concluindo resgate..."
        }), y.jsx("div", {
            className: "w-full bg-secondary rounded-full h-2 overflow-hidden",
            children: y.jsx("div", {
                className: "bg-destructive h-2 rounded-full transition-all duration-[3000ms] ease-out",
                style: {
                    width: "100%",
                    animation: "loading-progress 3s ease-out forwards"
                }
            })
        }), y.jsx("style", {
            children: `
        @keyframes loading-progress {
          0% { width: 0%; }
          100% { width: 100%; }
        }
      `
        })]
    });
    return y.jsx(FO, {
        open: e,
        onOpenChange: d,
        children: y.jsxs(ZS, {
            className: "max-w-md max-h-[90vh] overflow-y-auto",
            children: [o === "select-method" && S(), o === "form" && p(), o === "loading" && w()]
        })
    })
}
  , bL = ({totalBalance: e}) => {
    const [t,n] = m.useState(null)
      , [r,o] = m.useState(!1)
      , s = [232.92, 533.22, 1122.93]
      , i = l => l.toLocaleString("pt-BR", {
        minimumFractionDigits: 2,
        maximumFractionDigits: 2
    })
      , a = l => {
        n(l),
        o(!0)
    }
    ;
    return y.jsxs(y.Fragment, {
        children: [y.jsxs("div", {
            className: "bg-card rounded-xl p-5 shadow-sm border border-border",
            children: [y.jsx("h3", {
                className: "text-lg font-semibold text-foreground mb-4",
                children: "Sacar dinheiro"
            }), y.jsxs("div", {
                className: "flex items-center gap-2 text-muted-foreground text-sm mb-4",
                children: [y.jsx(bP, {
                    className: "w-4 h-4"
                }), y.jsx("span", {
                    children: "Transferencia via /"
                }), y.jsx("img", {
                    src: wS,
                    alt: "PIX",
                    className: "h-4"
                })]
            }), y.jsx("div", {
                className: "grid grid-cols-3 gap-3 mb-4",
                children: s.map(l => y.jsxs("button", {
                    onClick: () => a(l),
                    className: `py-3 px-2 rounded-lg border-2 font-medium transition-all text-sm ${t === l ? "border-success bg-success/10 text-success" : "border-border bg-secondary text-foreground hover:border-success/50"}`,
                    children: ["R$", i(l)]
                }, l))
            }), y.jsx("button", {
                onClick: () => a(e),
                className: `w-full py-3 px-4 rounded-lg border-2 font-medium transition-all text-center mb-4 ${t === e ? "border-success bg-success/10 text-success" : "border-border bg-secondary text-foreground hover:border-success/50"}`,
                children: y.jsxs("span", {
                    className: "text-lg font-semibold",
                    children: ["R$", i(e)]
                })
            }), y.jsxs(to, {
                className: "w-full py-7 text-lg font-bold rounded-xl bg-gradient-to-r from-success to-success-dark hover:from-success-dark hover:to-success text-white shadow-lg shadow-success/40 animate-pulse-slow hover:animate-none transition-all duration-300 hover:scale-[1.02] hover:shadow-xl hover:shadow-success/50",
                onClick: () => {
                    n(e),
                    o(!0)
                }
                ,
                children: ["💰 SACAR AGORA - R$", i(e)]
            }), y.jsx("p", {
                className: "text-xs text-muted-foreground text-center mt-4 leading-relaxed",
                children: "Para sacar dinheiro, você precisa de um saldo mínimo de R$1,5. Os limites de saque para transações individuais e mensais podem variar conforme o país ou região."
            })]
        }), y.jsx(CL, {
            isOpen: r,
            onClose: () => o(!1),
            selectedAmount: t || e
        })]
    })
}
  , EL = () => y.jsxs("div", {
    className: "bg-card rounded-xl p-5 shadow-sm border border-border",
    children: [y.jsxs("div", {
        className: "flex items-start justify-between",
        children: [y.jsxs("div", {
            className: "flex-1",
            children: [y.jsx("h3", {
                className: "text-lg font-semibold text-foreground mb-2",
                children: "Obtenha Moedas para a LIVE"
            }), y.jsx("p", {
                className: "text-sm text-muted-foreground",
                children: "Use Moedas para enviar presentes virtuais para seus hosts de live Favoritos."
            })]
        }), y.jsx("div", {
            className: "ml-4 text-4xl",
            children: "🌹"
        })]
    }), y.jsx(to, {
        variant: "secondary",
        className: "w-full mt-4 py-5 text-muted-foreground font-medium",
        disabled: !0,
        children: "Indisponível"
    })]
})
  , TL = () => y.jsxs("div", {
    className: "bg-card rounded-xl p-5 shadow-sm border border-border",
    children: [y.jsx("h3", {
        className: "text-lg font-semibold text-foreground mb-4",
        children: "Recarga móvel"
    }), y.jsxs("div", {
        className: "flex items-center gap-3 mb-4",
        children: [y.jsx("div", {
            className: "flex items-center gap-2 px-3 py-2 bg-secondary rounded-lg",
            children: y.jsx("span", {
                className: "text-muted-foreground",
                children: "+55"
            })
        }), y.jsx(Rl, {
            type: "tel",
            placeholder: "12345678901",
            className: "flex-1 bg-transparent border-0 border-b border-border rounded-none px-0 focus-visible:ring-0 focus-visible:border-primary"
        })]
    }), y.jsx(to, {
        variant: "secondary",
        className: "w-full py-5 text-muted-foreground font-medium",
        disabled: !0,
        children: "Indisponível"
    }), y.jsx("p", {
        className: "text-xs text-muted-foreground text-center mt-4 leading-relaxed",
        children: "Voce precisa de um saldo mínimo de R$10 para recarga de celular"
    })]
})
  , PL = {
    initial: {
        opacity: 0,
        x: 20
    },
    in: {
        opacity: 1,
        x: 0
    },
    out: {
        opacity: 0,
        x: -20
    }
}
  , RL = {
    type: "tween",
    ease: "anticipate",
    duration: .4
}
  , Al = ({children: e}) => y.jsx(kI.div, {
    initial: "initial",
    animate: "in",
    exit: "out",
    variants: PL,
    transition: RL,
    children: e
})
  , kL = () => y.jsx(Al, {
    children: y.jsxs("div", {
        className: "min-h-screen bg-background",
        children: [y.jsx(NI, {}), y.jsxs("div", {
            className: "max-w-md mx-auto px-4 py-6",
            children: [y.jsx("h1", {
                className: "text-xl font-semibold text-foreground text-center mb-6",
                children: "Resgatar recompensas"
            }), y.jsxs("div", {
                className: "space-y-4",
                children: [y.jsx(MI, {
                    balance: 3056.62,
                    points: 28347200,
                    lastReward: 0
                }), y.jsx(bL, {
                    totalBalance: 3056.62
                }), y.jsx(EL, {}), y.jsx(TL, {})]
            })]
        })]
    })
})
  , NL = () => {
    const e = Fi()
      , t = wh()
      , {selectedAmount: n, pixData: r} = e.state || {
        selectedAmount: 0,
        pixData: {
            nome: "",
            tipoChave: "",
            chavePix: ""
        }
    }
      , o = () => new Date().toLocaleDateString("pt-BR")
      , s = i => ({
        cpf: "CPF",
        telefone: "Telefone",
        email: "E-mail",
        aleatoria: "Chave Aleatória"
    })[i] || i;
    return y.jsx(Al, {
        children: y.jsx("div", {
            className: "min-h-screen bg-background",
            children: y.jsxs("div", {
                className: "max-w-md mx-auto px-4 py-6 space-y-6",
                children: [y.jsxs("div", {
                    className: "flex items-center gap-2",
                    children: [y.jsx("button", {
                        onClick: () => t("/"),
                        className: "p-1",
                        children: y.jsx(hl, {
                            className: "w-5 h-5 text-foreground"
                        })
                    }), y.jsx("h1", {
                        className: "text-lg font-medium text-foreground",
                        children: "Resgatar recompensas"
                    })]
                }), y.jsx("img", {
                    src: FC,
                    alt: "Ganhe PIX",
                    className: "w-32 mx-auto"
                }), y.jsxs("div", {
                    className: "bg-balance-card rounded-xl p-4 text-white",
                    children: [y.jsx("p", {
                        className: "text-xs text-white/70 uppercase tracking-wide",
                        children: "Saldo Disponível"
                    }), y.jsx("h2", {
                        className: "text-2xl font-bold text-success mt-1",
                        children: "R$ 3.056,62"
                    }), y.jsx("p", {
                        className: "text-sm text-white/70 mt-1",
                        children: "Aguardando confirmação para saque"
                    })]
                }), y.jsxs("div", {
                    className: "bg-card rounded-xl p-4 border border-border",
                    children: [y.jsx("p", {
                        className: "text-xs text-muted-foreground uppercase tracking-wide mb-3",
                        children: "Confirmação de Identidade"
                    }), y.jsxs("div", {
                        className: "flex items-center gap-2 mb-2",
                        children: [y.jsx("span", {
                            className: "text-2xl font-bold text-destructive",
                            children: "R$ 24,33"
                        }), y.jsx("span", {
                            className: "text-xs bg-success/20 text-success px-2 py-1 rounded-full",
                            children: "VALOR REEMBOLSÁVEL"
                        })]
                    }), y.jsxs("p", {
                        className: "text-sm text-muted-foreground",
                        children: ["Taxa obrigatória para liberação do saque no valor de ", y.jsx("span", {
                            className: "text-destructive font-medium",
                            children: "R$ 3.056,62"
                        }), ". O valor de ", y.jsx("span", {
                            className: "text-destructive font-medium",
                            children: "R$ 24,33"
                        }), " será reembolsado integralmente para você em 1 minuto."]
                    })]
                }), y.jsxs("div", {
                    className: "bg-card rounded-xl p-4 border border-border",
                    children: [y.jsx("p", {
                        className: "text-xs text-muted-foreground uppercase tracking-wide mb-4",
                        children: "Dados para Reembolso"
                    }), y.jsxs("div", {
                        className: "space-y-3",
                        children: [y.jsxs("div", {
                            className: "flex justify-between",
                            children: [y.jsx("span", {
                                className: "text-muted-foreground",
                                children: "Nome"
                            }), y.jsx("span", {
                                className: "font-medium text-foreground",
                                children: r.nome.toUpperCase()
                            })]
                        }), y.jsxs("div", {
                            className: "flex justify-between",
                            children: [y.jsx("span", {
                                className: "text-muted-foreground",
                                children: "Data"
                            }), y.jsx("span", {
                                className: "font-medium text-foreground",
                                children: o()
                            })]
                        }), y.jsxs("div", {
                            className: "flex justify-between",
                            children: [y.jsx("span", {
                                className: "text-muted-foreground",
                                children: "Chave PIX"
                            }), y.jsx("span", {
                                className: "font-medium text-foreground",
                                children: s(r.tipoChave)
                            })]
                        }), y.jsxs("div", {
                            className: "flex justify-between",
                            children: [y.jsx("span", {
                                className: "text-muted-foreground",
                                children: "Valor a receber"
                            }), y.jsx("span", {
                                className: "font-medium text-success",
                                children: "R$ 3.056,62"
                            })]
                        })]
                    }), y.jsx("div", {
                        className: "mt-4 pt-4 border-t border-border",
                        children: y.jsx("p", {
                            className: "text-center text-sm text-muted-foreground font-mono",
                            children: r.chavePix
                        })
                    })]
                }), y.jsxs("div", {
                    className: "bg-card rounded-xl p-4 border border-border",
                    children: [y.jsx("p", {
                        className: "text-xs text-muted-foreground uppercase tracking-wide mb-4",
                        children: "Processo de Liberação"
                    }), y.jsxs("div", {
                        className: "space-y-4",
                        children: [y.jsxs("div", {
                            className: "flex items-start gap-3",
                            children: [y.jsx("div", {
                                className: "w-6 h-6 rounded-full bg-destructive/20 flex items-center justify-center text-destructive text-sm font-medium",
                                children: "1"
                            }), y.jsxs("div", {
                                children: [y.jsx("p", {
                                    className: "font-medium text-foreground",
                                    children: "Pagar taxa de confirmação"
                                }), y.jsx("p", {
                                    className: "text-sm text-muted-foreground",
                                    children: "R$ 24,33 para verificação de identidade"
                                })]
                            })]
                        }), y.jsxs("div", {
                            className: "flex items-start gap-3",
                            children: [y.jsx("div", {
                                className: "w-6 h-6 rounded-full bg-success/20 flex items-center justify-center text-success text-sm",
                                children: "✓"
                            }), y.jsxs("div", {
                                children: [y.jsx("p", {
                                    className: "font-medium text-success",
                                    children: "Receber reembolso automático"
                                }), y.jsx("p", {
                                    className: "text-sm text-muted-foreground",
                                    children: "Valor devolvido em 1 minuto"
                                })]
                            })]
                        }), y.jsxs("div", {
                            className: "flex items-start gap-3",
                            children: [y.jsx("div", {
                                className: "w-6 h-6 rounded-full bg-muted flex items-center justify-center text-muted-foreground text-sm font-medium",
                                children: "3"
                            }), y.jsxs("div", {
                                children: [y.jsx("p", {
                                    className: "font-medium text-foreground",
                                    children: "Acessar saldo completo"
                                }), y.jsx("p", {
                                    className: "text-sm text-muted-foreground",
                                    children: "R$ 3.056,62 liberado para saque"
                                })]
                            })]
                        })]
                    })]
                }), y.jsx(to, {
                    className: "w-full py-6 bg-success hover:bg-success/90 text-white font-semibold",
                    asChild: !0,
                    children: y.jsx("a", {
                        href: "https://pay.mestredoarr.shop/z0qn35LW2kvg98m",
                        target: "_blank",
                        rel: "noopener noreferrer",
                        children: "Pagar taxa para Liberar Saque"
                    })
                }), y.jsx("p", {
                    className: "text-center text-sm text-muted-foreground",
                    children: "⏱ Reembolso automático em 1 minuto"
                })]
            })
        })
    })
}
  , AL = () => {
    const e = wh()
      , [t,n] = m.useState(null)
      , [r,o] = m.useState(!1)
      , [s,i] = m.useState(!1)
      , [a,l] = m.useState(!1);
    m.useEffect( () => {
        const c = window.matchMedia("(display-mode: standalone)").matches;
        l(c);
        const d = /iPad|iPhone|iPod/.test(navigator.userAgent);
        i(d);
        const f = h => {
            h.preventDefault(),
            n(h),
            o(!0)
        }
        ;
        return window.addEventListener("beforeinstallprompt", f),
        () => {
            window.removeEventListener("beforeinstallprompt", f)
        }
    }
    , []);
    const u = async () => {
        if (!t)
            return;
        await t.prompt();
        const {outcome: c} = await t.userChoice;
        c === "accepted" && (n(null),
        o(!1))
    }
    ;
    return a ? y.jsx(Al, {
        children: y.jsx("div", {
            className: "min-h-screen bg-background safe-area-top safe-area-bottom",
            children: y.jsxs("div", {
                className: "max-w-md mx-auto px-4 py-6 space-y-6",
                children: [y.jsxs("div", {
                    className: "flex items-center gap-2",
                    children: [y.jsx("button", {
                        onClick: () => e("/"),
                        className: "p-1",
                        children: y.jsx(hl, {
                            className: "w-5 h-5 text-foreground"
                        })
                    }), y.jsx("h1", {
                        className: "text-lg font-medium text-foreground",
                        children: "Instalar App"
                    })]
                }), y.jsxs("div", {
                    className: "text-center py-12",
                    children: [y.jsx("div", {
                        className: "w-16 h-16 bg-success/20 rounded-full flex items-center justify-center mx-auto mb-4",
                        children: y.jsx(PP, {
                            className: "w-8 h-8 text-success"
                        })
                    }), y.jsx("h2", {
                        className: "text-xl font-semibold text-foreground mb-2",
                        children: "App já instalado!"
                    }), y.jsx("p", {
                        className: "text-muted-foreground",
                        children: "Você já está usando o app instalado no seu dispositivo."
                    })]
                })]
            })
        })
    }) : y.jsx(Al, {
        children: y.jsx("div", {
            className: "min-h-screen bg-background safe-area-top safe-area-bottom",
            children: y.jsxs("div", {
                className: "max-w-md mx-auto px-4 py-6 space-y-6",
                children: [y.jsxs("div", {
                    className: "flex items-center gap-2",
                    children: [y.jsx("button", {
                        onClick: () => e("/"),
                        className: "p-1",
                        children: y.jsx(hl, {
                            className: "w-5 h-5 text-foreground"
                        })
                    }), y.jsx("h1", {
                        className: "text-lg font-medium text-foreground",
                        children: "Instalar App"
                    })]
                }), y.jsxs("div", {
                    className: "text-center py-8",
                    children: [y.jsx("div", {
                        className: "w-20 h-20 bg-pix/20 rounded-2xl flex items-center justify-center mx-auto mb-4",
                        children: y.jsx(Qu, {
                            className: "w-10 h-10 text-pix"
                        })
                    }), y.jsx("h2", {
                        className: "text-2xl font-bold text-foreground mb-2",
                        children: "Instale o Ganhe PIX"
                    }), y.jsx("p", {
                        className: "text-muted-foreground",
                        children: "Adicione o app à sua tela inicial para acesso rápido e experiência completa."
                    })]
                }), r && !s && y.jsxs(to, {
                    onClick: u,
                    className: "w-full py-6 bg-success hover:bg-success/90 text-white font-semibold",
                    children: [y.jsx(Qu, {
                        className: "w-5 h-5 mr-2"
                    }), "Instalar Agora"]
                }), s && y.jsxs("div", {
                    className: "bg-card rounded-xl p-4 border border-border space-y-4",
                    children: [y.jsx("p", {
                        className: "text-sm text-muted-foreground uppercase tracking-wide",
                        children: "Como instalar no iPhone/iPad"
                    }), y.jsxs("div", {
                        className: "space-y-4",
                        children: [y.jsxs("div", {
                            className: "flex items-start gap-3",
                            children: [y.jsx("div", {
                                className: "w-8 h-8 rounded-full bg-pix/20 flex items-center justify-center text-pix",
                                children: y.jsx(TP, {
                                    className: "w-4 h-4"
                                })
                            }), y.jsxs("div", {
                                children: [y.jsx("p", {
                                    className: "font-medium text-foreground",
                                    children: "1. Toque em Compartilhar"
                                }), y.jsx("p", {
                                    className: "text-sm text-muted-foreground",
                                    children: "No Safari, toque no ícone de compartilhar na barra inferior"
                                })]
                            })]
                        }), y.jsxs("div", {
                            className: "flex items-start gap-3",
                            children: [y.jsx("div", {
                                className: "w-8 h-8 rounded-full bg-pix/20 flex items-center justify-center text-pix",
                                children: y.jsx(EP, {
                                    className: "w-4 h-4"
                                })
                            }), y.jsxs("div", {
                                children: [y.jsx("p", {
                                    className: "font-medium text-foreground",
                                    children: "2. Adicionar à Tela Inicial"
                                }), y.jsx("p", {
                                    className: "text-sm text-muted-foreground",
                                    children: 'Role para baixo e toque em "Adicionar à Tela de Início"'
                                })]
                            })]
                        }), y.jsxs("div", {
                            className: "flex items-start gap-3",
                            children: [y.jsx("div", {
                                className: "w-8 h-8 rounded-full bg-success/20 flex items-center justify-center text-success",
                                children: "✓"
                            }), y.jsxs("div", {
                                children: [y.jsx("p", {
                                    className: "font-medium text-foreground",
                                    children: "3. Confirmar"
                                }), y.jsx("p", {
                                    className: "text-sm text-muted-foreground",
                                    children: 'Toque em "Adicionar" no canto superior direito'
                                })]
                            })]
                        })]
                    })]
                }), !s && !r && y.jsxs("div", {
                    className: "bg-card rounded-xl p-4 border border-border space-y-4",
                    children: [y.jsx("p", {
                        className: "text-sm text-muted-foreground uppercase tracking-wide",
                        children: "Como instalar no Android"
                    }), y.jsxs("div", {
                        className: "space-y-4",
                        children: [y.jsxs("div", {
                            className: "flex items-start gap-3",
                            children: [y.jsx("div", {
                                className: "w-8 h-8 rounded-full bg-pix/20 flex items-center justify-center text-pix text-lg",
                                children: "⋮"
                            }), y.jsxs("div", {
                                children: [y.jsx("p", {
                                    className: "font-medium text-foreground",
                                    children: "1. Abra o menu do navegador"
                                }), y.jsx("p", {
                                    className: "text-sm text-muted-foreground",
                                    children: "Toque nos três pontos no canto superior direito"
                                })]
                            })]
                        }), y.jsxs("div", {
                            className: "flex items-start gap-3",
                            children: [y.jsx("div", {
                                className: "w-8 h-8 rounded-full bg-pix/20 flex items-center justify-center text-pix",
                                children: y.jsx(Qu, {
                                    className: "w-4 h-4"
                                })
                            }), y.jsxs("div", {
                                children: [y.jsx("p", {
                                    className: "font-medium text-foreground",
                                    children: "2. Instalar aplicativo"
                                }), y.jsx("p", {
                                    className: "text-sm text-muted-foreground",
                                    children: 'Toque em "Instalar aplicativo" ou "Adicionar à tela inicial"'
                                })]
                            })]
                        }), y.jsxs("div", {
                            className: "flex items-start gap-3",
                            children: [y.jsx("div", {
                                className: "w-8 h-8 rounded-full bg-success/20 flex items-center justify-center text-success",
                                children: "✓"
                            }), y.jsxs("div", {
                                children: [y.jsx("p", {
                                    className: "font-medium text-foreground",
                                    children: "3. Confirmar"
                                }), y.jsx("p", {
                                    className: "text-sm text-muted-foreground",
                                    children: 'Toque em "Instalar" para adicionar o app'
                                })]
                            })]
                        })]
                    })]
                }), y.jsxs("div", {
                    className: "bg-muted/50 rounded-xl p-4 space-y-2",
                    children: [y.jsx("p", {
                        className: "font-medium text-foreground text-sm",
                        children: "✨ Benefícios do app instalado:"
                    }), y.jsxs("ul", {
                        className: "text-sm text-muted-foreground space-y-1",
                        children: [y.jsx("li", {
                            children: "• Acesso rápido pela tela inicial"
                        }), y.jsx("li", {
                            children: "• Funciona offline"
                        }), y.jsx("li", {
                            children: "• Experiência em tela cheia"
                        }), y.jsx("li", {
                            children: "• Carregamento mais rápido"
                        })]
                    })]
                })]
            })
        })
    })
}
  , ML = () => {
    const e = Fi();
    return m.useEffect( () => {
        console.error("404 Error: User attempted to access non-existent route:", e.pathname)
    }
    , [e.pathname]),
    y.jsx("div", {
        className: "flex min-h-screen items-center justify-center bg-muted",
        children: y.jsxs("div", {
            className: "text-center",
            children: [y.jsx("h1", {
                className: "mb-4 text-4xl font-bold",
                children: "404"
            }), y.jsx("p", {
                className: "mb-4 text-xl text-muted-foreground",
                children: "Oops! Page not found"
            }), y.jsx("a", {
                href: "/",
                className: "text-primary underline hover:text-primary/90",
                children: "Return to Home"
            })]
        })
    })
}
  , jL = new XN
  , DL = () => {
    const e = Fi();
    return y.jsx(S2, {
        mode: "wait",
        children: y.jsxs(zA, {
            location: e,
            children: [y.jsx(Os, {
                path: "/",
                element: y.jsx(kL, {})
            }), y.jsx(Os, {
                path: "/confirmacao",
                element: y.jsx(NL, {})
            }), y.jsx(Os, {
                path: "/instalar",
                element: y.jsx(AL, {})
            }), y.jsx(Os, {
                path: "*",
                element: y.jsx(ML, {})
            })]
        }, e.pathname)
    })
}
  , IL = () => y.jsx(ZN, {
    client: jL,
    children: y.jsxs(PN, {
        children: [y.jsx(lR, {}), y.jsx(BR, {}), y.jsx(HA, {
            children: y.jsx(DL, {})
        })]
    })
});
J0(document.getElementById("root")).render(y.jsx(IL, {}));
