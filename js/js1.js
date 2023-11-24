!
/*! jQuery v1.10.2 | (c) 2005, 2013 jQuery Foundation, Inc. | jquery.org/license
//@ sourceMappingURL=jquery-1.10.2.min.map
*/
function(b, u) {
    var I, v, J = typeof u,
        w = b.location,
        e = b.document,
        K = e.documentElement,
        L = b.jQuery,
        M = b.$,
        m = {},
        h = [],
        j = "1.10.2",
        N = h.concat,
        x = h.push,
        O = h.slice,
        P = h.indexOf,
        Q = m.toString,
        R = m.hasOwnProperty,
        n = j.trim,
        a = function(b, c) {
            return new a.fn.init(b, c, v)
        },
        i = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,
        S = /\S+/g,
        T = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,
        U = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]*))$/,
        V = /^<(\w+)\s*\/?>(?:<\/\1>|)$/,
        W = /^[\],:{}\s]*$/,
        X = /(?:^|:|,)(?:\s*\[)+/g,
        Y = /\\(?:["\\\/bfnrt]|u[\da-fA-F]{4})/g,
        Z = /"[^"\\\r\n]*"|true|false|null|-?(?:\d+\.|)\d+(?:[eE][+-]?\d+|)/g,
        aa = /^-ms-/,
        ab = /-([\da-z])/gi,
        ac = function(b, a) {
            return a.toUpperCase()
        },
        ad = function(b) {
            (e.addEventListener || "load" === b.type || "complete" === e.readyState) && (_(), a.ready())
        },
        _ = function() {
            e.addEventListener ? (e.removeEventListener("DOMContentLoaded", ad, !1), b.removeEventListener("load", ad, !1)) : (e.detachEvent("onreadystatechange", ad), b.detachEvent("onload", ad))
        };

    function ae(b) {
        var c = b.length,
            d = a.type(b);
        return !a.isWindow(b) && (1 === b.nodeType && !!c || "array" === d || "function" !== d && (0 === c || "number" == typeof c && c > 0 && c - 1 in b))
    }
    a.fn = a.prototype = {
            jquery: j,
            constructor: a,
            init: function(b, c, g) {
                var d, f;
                if (!b) return this;
                if ("string" == typeof b) {
                    if (!(d = "<" === b.charAt(0) && ">" === b.charAt(b.length - 1) && b.length >= 3 ? [null, b, null] : U.exec(b)) || !d[1] && c) return !c || c.jquery ? (c || g).find(b) : this.constructor(c).find(b);
                    if (d[1]) {
                        if (c = c instanceof a ? c[0] : c, a.merge(this, a.parseHTML(d[1], c && c.nodeType ? c.ownerDocument || c : e, !0)), V.test(d[1]) && a.isPlainObject(c))
                            for (d in c) a.isFunction(this[d]) ? this[d](c[d]) : this.attr(d, c[d]);
                        return this
                    }
                    if ((f = e.getElementById(d[2])) && f.parentNode) {
                        if (f.id !== d[2]) return g.find(b);
                        this.length = 1, this[0] = f
                    }
                    return this.context = e, this.selector = b, this
                }
                return b.nodeType ? (this.context = this[0] = b, this.length = 1, this) : a.isFunction(b) ? g.ready(b) : (b.selector !== u && (this.selector = b.selector, this.context = b.context), a.makeArray(b, this))
            },
            selector: "",
            length: 0,
            toArray: function() {
                return O.call(this)
            },
            get: function(a) {
                return null == a ? this.toArray() : 0 > a ? this[this.length + a] : this[a]
            },
            pushStack: function(c) {
                var b = a.merge(this.constructor(), c);
                return b.prevObject = this, b.context = this.context, b
            },
            each: function(b, c) {
                return a.each(this, b, c)
            },
            ready: function(b) {
                return a.ready.promise().done(b), this
            },
            slice: function() {
                return this.pushStack(O.apply(this, arguments))
            },
            first: function() {
                return this.eq(0)
            },
            last: function() {
                return this.eq(-1)
            },
            eq: function(b) {
                var c = this.length,
                    a = +b + (0 > b ? c : 0);
                return this.pushStack(a >= 0 && c > a ? [this[a]] : [])
            },
            map: function(b) {
                return this.pushStack(a.map(this, function(a, c) {
                    return b.call(a, c, a)
                }))
            },
            end: function() {
                return this.prevObject || this.constructor(null)
            },
            push: x,
            sort: [].sort,
            splice: [].splice
        }, a.fn.init.prototype = a.fn, a.extend = a.fn.extend = function() {
            var d, g, c, f, h, i, b = arguments[0] || {},
                e = 1,
                k = arguments.length,
                j = !1;
            for ("boolean" == typeof b && (j = b, b = arguments[1] || {}, e = 2), "object" == typeof b || a.isFunction(b) || (b = {}), k === e && (b = this, --e); k > e; e++)
                if (null != (h = arguments[e]))
                    for (f in h) d = b[f], c = h[f], b !== c && (j && c && (a.isPlainObject(c) || (g = a.isArray(c))) ? (g ? (g = !1, i = d && a.isArray(d) ? d : []) : i = d && a.isPlainObject(d) ? d : {}, b[f] = a.extend(j, i, c)) : c !== u && (b[f] = c));
            return b
        }, a.extend({
            expando: "jQuery" + (j + Math.random()).replace(/\D/g, ""),
            noConflict: function(c) {
                return b.$ === a && (b.$ = M), c && b.jQuery === a && (b.jQuery = L), a
            },
            isReady: !1,
            readyWait: 1,
            holdReady: function(b) {
                b ? a.readyWait++ : a.ready(!0)
            },
            ready: function(b) {
                if (!0 === b ? !--a.readyWait : !a.isReady) {
                    if (!e.body) return setTimeout(a.ready);
                    a.isReady = !0, !0 !== b && --a.readyWait > 0 || (I.resolveWith(e, [a]), a.fn.trigger && a(e).trigger("ready").off("ready"))
                }
            },
            isFunction: function(b) {
                return "function" === a.type(b)
            },
            isArray: Array.isArray || function(b) {
                return "array" === a.type(b)
            },
            isWindow: function(a) {
                return null != a && a == a.window
            },
            isNumeric: function(a) {
                return !isNaN(parseFloat(a)) && isFinite(a)
            },
            type: function(a) {
                return null == a ? a + "" : "object" == typeof a || "function" == typeof a ? m[Q.call(a)] || "object" : typeof a
            },
            isPlainObject: function(b) {
                var c;
                if (!b || "object" !== a.type(b) || b.nodeType || a.isWindow(b)) return !1;
                try {
                    if (b.constructor && !R.call(b, "constructor") && !R.call(b.constructor.prototype, "isPrototypeOf")) return !1
                } catch (d) {
                    return !1
                }
                if (a.support.ownLast)
                    for (c in b) return R.call(b, c);
                for (c in b);
                return c === u || R.call(b, c)
            },
            isEmptyObject: function(a) {
                var b;
                for (b in a) return !1;
                return !0
            },
            error: function(a) {
                throw Error(a)
            },
            parseHTML: function(c, b, g) {
                if (!c || "string" != typeof c) return null;
                "boolean" == typeof b && (g = b, b = !1), b = b || e;
                var d = V.exec(c),
                    f = !g && [];
                return d ? [b.createElement(d[1])] : (d = a.buildFragment([c], b, f), f && a(f).remove(), a.merge([], d.childNodes))
            },
            parseJSON: function(c) {
                return b.JSON && b.JSON.parse ? b.JSON.parse(c) : null === c ? c : "string" == typeof c && (c = a.trim(c)) && W.test(c.replace(Y, "@").replace(Z, "]").replace(X, "")) ? Function("return " + c)() : (a.error("Invalid JSON: " + c), u)
            },
            parseXML: function(d) {
                var c;
                if (!d || "string" != typeof d) return null;
                try {
                    b.DOMParser ? c = (new DOMParser).parseFromString(d, "text/xml") : ((c = new ActiveXObject("Microsoft.XMLDOM")).async = "false", c.loadXML(d))
                } catch (e) {
                    c = u
                }
                return c && c.documentElement && !c.getElementsByTagName("parsererror").length || a.error("Invalid XML: " + d), c
            },
            noop: function() {},
            globalEval: function(c) {
                c && a.trim(c) && (b.execScript || function(a) {
                    b.eval.call(b, a)
                })(c)
            },
            camelCase: function(a) {
                return a.replace(aa, "ms-").replace(ab, ac)
            },
            nodeName: function(a, b) {
                return a.nodeName && a.nodeName.toLowerCase() === b.toLowerCase()
            },
            each: function(b, c, d) {
                var a = 0,
                    e = b.length,
                    f = ae(b);
                if (d) {
                    if (f)
                        for (; e > a && !1 !== c.apply(b[a], d); a++);
                    else
                        for (a in b)
                            if (!1 === c.apply(b[a], d)) break
                } else if (f)
                    for (; e > a && !1 !== c.call(b[a], a, b[a]); a++);
                else
                    for (a in b)
                        if (!1 === c.call(b[a], a, b[a])) break;
                return b
            },
            trim: n && !n.call("\uFEFF\xa0") ? function(a) {
                return null == a ? "" : n.call(a)
            } : function(a) {
                return null == a ? "" : (a + "").replace(T, "")
            },
            makeArray: function(b, d) {
                var c = d || [];
                return null != b && (ae(Object(b)) ? a.merge(c, "string" == typeof b ? [b] : b) : x.call(c, b)), c
            },
            inArray: function(d, b, a) {
                var c;
                if (b) {
                    if (P) return P.call(b, d, a);
                    for (c = b.length, a = a ? 0 > a ? Math.max(0, c + a) : a : 0; c > a; a++)
                        if (a in b && b[a] === d) return a
                }
                return -1
            },
            merge: function(a, c) {
                var e = c.length,
                    d = a.length,
                    b = 0;
                if ("number" == typeof e)
                    for (; e > b; b++) a[d++] = c[b];
                else
                    for (; c[b] !== u;) a[d++] = c[b++];
                return a.length = d, a
            },
            grep: function(b, e, c) {
                var d = [],
                    a = 0,
                    f = b.length;
                for (c = !!c; f > a; a++) !!e(b[a], a) !== c && d.push(b[a]);
                return d
            },
            map: function(b, e, f) {
                var d, a = 0,
                    g = b.length,
                    h = ae(b),
                    c = [];
                if (h)
                    for (; g > a; a++) null != (d = e(b[a], a, f)) && (c[c.length] = d);
                else
                    for (a in b) null != (d = e(b[a], a, f)) && (c[c.length] = d);
                return N.apply([], c)
            },
            guid: 1,
            proxy: function(b, c) {
                var f, d, e;
                return "string" == typeof c && (e = b[c], c = b, b = e), a.isFunction(b) ? (f = O.call(arguments, 2), (d = function() {
                    return b.apply(c || this, f.concat(O.call(arguments)))
                }).guid = b.guid = b.guid || a.guid++, d) : u
            },
            access: function(c, b, e, f, h, j, g) {
                var d = 0,
                    k = c.length,
                    i = null == e;
                if ("object" === a.type(e))
                    for (d in h = !0, e) a.access(c, b, d, e[d], !0, j, g);
                else if (f !== u && (h = !0, a.isFunction(f) || (g = !0), i && (g ? (b.call(c, f), b = null) : (i = b, b = function(b, d, c) {
                        return i.call(a(b), c)
                    })), b))
                    for (; k > d; d++) b(c[d], e, g ? f : f.call(c[d], d, b(c[d], e)));
                return h ? c : i ? b.call(c) : k ? b(c[0], e) : j
            },
            now: function() {
                return (new Date).getTime()
            },
            swap: function(b, c, f, g) {
                var d, a, e = {};
                for (a in c) e[a] = b.style[a], b.style[a] = c[a];
                for (a in d = f.apply(b, g || []), c) b.style[a] = e[a];
                return d
            }
        }), a.ready.promise = function(d) {
            if (!I) {
                if (I = a.Deferred(), "complete" === e.readyState) setTimeout(a.ready);
                else if (e.addEventListener) e.addEventListener("DOMContentLoaded", ad, !1), b.addEventListener("load", ad, !1);
                else {
                    e.attachEvent("onreadystatechange", ad), b.attachEvent("onload", ad);
                    var c = !1;
                    try {
                        c = null == b.frameElement && e.documentElement
                    } catch (f) {}
                    c && c.doScroll && function b() {
                        if (!a.isReady) {
                            try {
                                c.doScroll("left")
                            } catch (d) {
                                return setTimeout(b, 50)
                            }
                            _(), a.ready()
                        }
                    }()
                }
            }
            return I.promise(d)
        }, a.each("Boolean Number String Function Array Date RegExp Object Error".split(" "), function(b, a) {
            m["[object " + a + "]"] = a.toLowerCase()
        }), v = a(e),
        function(u, v) {
            var g, i, F, d, w, x, y, G, H, n, I, J, K, L, M, N, O, o = "sizzle" + -new Date,
                l = u.document,
                P = 0,
                Q = 0,
                R = ao(),
                S = ao(),
                T = ao(),
                z = !1,
                A = function(a, b) {
                    return a === b && (z = !0), 0
                },
                U = typeof v,
                V = -2147483648,
                W = {}.hasOwnProperty,
                e = [],
                X = e.pop,
                _ = e.push,
                p = e.push,
                B = e.slice,
                Y = e.indexOf || function(b) {
                    for (var a = 0, c = this.length; c > a; a++)
                        if (this[a] === b) return a;
                    return -1
                },
                q = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",
                b = "[\\x20\\t\\r\\n\\f]",
                h = "(?:\\\\.|[\\w-]|[^\\x00-\\xa0])+",
                r = h.replace("w", "w#"),
                $ = "\\[" + b + "*(" + h + ")" + b + "*(?:([*^$|!~]?=)" + b + "*(?:(['\"])((?:\\\\.|[^\\\\])*?)\\3|(" + r + ")|)|)" + b + "*\\]",
                s = ":(" + h + ")(?:\\(((['\"])((?:\\\\.|[^\\\\])*?)\\3|((?:\\\\.|[^\\\\()[\\]]|" + $.replace(3, 8) + ")*)|.*)\\)|)",
                Z = RegExp("^" + b + "+|((?:^|[^\\\\])(?:\\\\.)*)" + b + "+$", "g"),
                aa = RegExp("^" + b + "*," + b + "*"),
                ab = RegExp("^" + b + "*([>+~]|" + b + ")" + b + "*"),
                ac = RegExp(b + "*[+~]"),
                ad = RegExp("=" + b + "*([^\\]'\"]*)" + b + "*\\]", "g"),
                ae = RegExp(s),
                af = RegExp("^" + r + "$"),
                C = {
                    ID: RegExp("^#(" + h + ")"),
                    CLASS: RegExp("^\\.(" + h + ")"),
                    TAG: RegExp("^(" + h.replace("w", "w*") + ")"),
                    ATTR: RegExp("^" + $),
                    PSEUDO: RegExp("^" + s),
                    CHILD: RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + b + "*(even|odd|(([+-]|)(\\d*)n|)" + b + "*(?:([+-]|)" + b + "*(\\d+)|))" + b + "*\\)|)", "i"),
                    bool: RegExp("^(?:" + q + ")$", "i"),
                    needsContext: RegExp("^" + b + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + b + "*((?:-\\d)?\\d*)" + b + "*\\)|)(?=[^-]|$)", "i")
                },
                ag = /^[^{]+\{\s*\[native \w/,
                ah = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,
                ai = /^(?:input|select|textarea|button)$/i,
                aj = /^h\d$/i,
                ak = /'|\\/g,
                al = RegExp("\\\\([\\da-f]{1,6}" + b + "?|(" + b + ")|.)", "ig"),
                am = function(d, b, c) {
                    var a = "0x" + b - 65536;
                    return a != a || c ? b : 0 > a ? String.fromCharCode(a + 65536) : String.fromCharCode(55296 | a >> 10, 56320 | 1023 & a)
                };
            try {
                p.apply(e = B.call(l.childNodes), l.childNodes), e[l.childNodes.length].nodeType
            } catch (an) {
                p = {
                    apply: e.length ? function(a, b) {
                        _.apply(a, B.call(b))
                    } : function(a, c) {
                        for (var b = a.length, d = 0; a[b++] = c[d++];);
                        a.length = b - 1
                    }
                }
            }

            function c(c, a, b, s) {
                var j, d, e, g, k, h, m, f, r, q;
                if ((a ? a.ownerDocument || a : l) !== I && n(a), a = a || I, b = b || [], !c || "string" != typeof c) return b;
                if (1 !== (g = a.nodeType) && 9 !== g) return [];
                if (K && !s) {
                    if (j = ah.exec(c)) {
                        if (e = j[1]) {
                            if (9 === g) {
                                if (!(d = a.getElementById(e)) || !d.parentNode) return b;
                                if (d.id === e) return b.push(d), b
                            } else if (a.ownerDocument && (d = a.ownerDocument.getElementById(e)) && O(a, d) && d.id === e) return b.push(d), b
                        } else {
                            if (j[2]) return p.apply(b, a.getElementsByTagName(c)), b;
                            if ((e = j[3]) && i.getElementsByClassName && a.getElementsByClassName) return p.apply(b, a.getElementsByClassName(e)), b
                        }
                    }
                    if (i.qsa && (!L || !L.test(c))) {
                        if (f = m = o, r = a, q = 9 === g && c, 1 === g && "object" !== a.nodeName.toLowerCase()) {
                            for (h = aq(c), (m = a.getAttribute("id")) ? f = m.replace(ak, "\\$&") : a.setAttribute("id", f), f = "[id='" + f + "'] ", k = h.length; k--;) h[k] = f + ar(h[k]);
                            r = ac.test(c) && a.parentNode || a, q = h.join(",")
                        }
                        if (q) try {
                            return p.apply(b, r.querySelectorAll(q)), b
                        } catch (t) {} finally {
                            m || a.removeAttribute("id")
                        }
                    }
                }
                return ay(c.replace(Z, "$1"), a, b, s)
            }

            function ao() {
                var b = [];

                function a(c, e) {
                    return b.push(c += " ") > d.cacheLength && delete a[b.shift()], a[c] = e
                }
                return a
            }

            function j(a) {
                return a[o] = !0, a
            }

            function k(b) {
                var a = I.createElement("div");
                try {
                    return !!b(a)
                } catch (c) {
                    return !1
                } finally {
                    a.parentNode && a.parentNode.removeChild(a), a = null
                }
            }

            function m(a, c) {
                for (var e = a.split("|"), b = a.length; b--;) d.attrHandle[e[b]] = c
            }

            function ap(b, c) {
                var a = c && b,
                    d = a && 1 === b.nodeType && 1 === c.nodeType && (~c.sourceIndex || V) - (~b.sourceIndex || V);
                if (d) return d;
                if (a) {
                    for (; a = a.nextSibling;)
                        if (a === c) return -1
                }
                return b ? 1 : -1
            }

            function D(a) {
                return function(b) {
                    return "input" === b.nodeName.toLowerCase() && b.type === a
                }
            }

            function E(a) {
                return function(b) {
                    var c = b.nodeName.toLowerCase();
                    return ("input" === c || "button" === c) && b.type === a
                }
            }

            function f(a) {
                return j(function(b) {
                    return b = +b, j(function(c, g) {
                        for (var d, e = a([], c.length, b), f = e.length; f--;) c[d = e[f]] && (c[d] = !(g[d] = c[d]))
                    })
                })
            }
            for (g in x = c.isXML = function(a) {
                    var b = a && (a.ownerDocument || a).documentElement;
                    return !!b && "HTML" !== b.nodeName
                }, i = c.support = {}, n = c.setDocument = function(e) {
                    var a = e ? e.ownerDocument || e : l,
                        c = a.defaultView;
                    return a !== I && 9 === a.nodeType && a.documentElement ? (I = a, J = a.documentElement, K = !x(a), c && c.attachEvent && c !== c.top && c.attachEvent("onbeforeunload", function() {
                        n()
                    }), i.attributes = k(function(a) {
                        return a.className = "i", !a.getAttribute("className")
                    }), i.getElementsByTagName = k(function(b) {
                        return b.appendChild(a.createComment("")), !b.getElementsByTagName("*").length
                    }), i.getElementsByClassName = k(function(a) {
                        return a.innerHTML = "<div class='a'></div><div class='a i'></div>", a.firstChild.className = "i", 2 === a.getElementsByClassName("i").length
                    }), i.getById = k(function(b) {
                        return J.appendChild(b).id = o, !a.getElementsByName || !a.getElementsByName(o).length
                    }), i.getById ? (d.find.ID = function(c, b) {
                        if (typeof b.getElementById !== U && K) {
                            var a = b.getElementById(c);
                            return a && a.parentNode ? [a] : []
                        }
                    }, d.filter.ID = function(a) {
                        var b = a.replace(al, am);
                        return function(a) {
                            return a.getAttribute("id") === b
                        }
                    }) : (delete d.find.ID, d.filter.ID = function(a) {
                        var b = a.replace(al, am);
                        return function(a) {
                            var c = typeof a.getAttributeNode !== U && a.getAttributeNode("id");
                            return c && c.value === b
                        }
                    }), d.find.TAG = i.getElementsByTagName ? function(b, a) {
                        return typeof a.getElementsByTagName !== U ? a.getElementsByTagName(b) : v
                    } : function(b, e) {
                        var a, c = [],
                            f = 0,
                            d = e.getElementsByTagName(b);
                        if ("*" === b) {
                            for (; a = d[f++];) 1 === a.nodeType && c.push(a);
                            return c
                        }
                        return d
                    }, d.find.CLASS = i.getElementsByClassName && function(b, a) {
                        return typeof a.getElementsByClassName !== U && K ? a.getElementsByClassName(b) : v
                    }, M = [], L = [], (i.qsa = ag.test(a.querySelectorAll)) && (k(function(a) {
                        a.innerHTML = "<select><option selected=''></option></select>", a.querySelectorAll("[selected]").length || L.push("\\[" + b + "*(?:value|" + q + ")"), a.querySelectorAll(":checked").length || L.push(":checked")
                    }), k(function(c) {
                        var d = a.createElement("input");
                        d.setAttribute("type", "hidden"), c.appendChild(d).setAttribute("t", ""), c.querySelectorAll("[t^='']").length && L.push("[*^$]=" + b + "*(?:''|\"\")"), c.querySelectorAll(":enabled").length || L.push(":enabled", ":disabled"), c.querySelectorAll("*,:x"), L.push(",.*:")
                    })), (i.matchesSelector = ag.test(N = J.webkitMatchesSelector || J.mozMatchesSelector || J.oMatchesSelector || J.msMatchesSelector)) && k(function(a) {
                        i.disconnectedMatch = N.call(a, "div"), N.call(a, "[s!='']:x"), M.push("!=", s)
                    }), L = L.length && RegExp(L.join("|")), M = M.length && RegExp(M.join("|")), O = ag.test(J.contains) || J.compareDocumentPosition ? function(a, c) {
                        var d = 9 === a.nodeType ? a.documentElement : a,
                            b = c && c.parentNode;
                        return a === b || !(!b || 1 !== b.nodeType || !(d.contains ? d.contains(b) : a.compareDocumentPosition && 16 & a.compareDocumentPosition(b)))
                    } : function(b, a) {
                        if (a) {
                            for (; a = a.parentNode;)
                                if (a === b) return !0
                        }
                        return !1
                    }, A = J.compareDocumentPosition ? function(b, c) {
                        if (b === c) return z = !0, 0;
                        var d = c.compareDocumentPosition && b.compareDocumentPosition && b.compareDocumentPosition(c);
                        return d ? 1 & d || !i.sortDetached && c.compareDocumentPosition(b) === d ? b === a || O(l, b) ? -1 : c === a || O(l, c) ? 1 : H ? Y.call(H, b) - Y.call(H, c) : 0 : 4 & d ? -1 : 1 : b.compareDocumentPosition ? -1 : 1
                    } : function(d, e) {
                        var b, c = 0,
                            h = d.parentNode,
                            i = e.parentNode,
                            f = [d],
                            g = [e];
                        if (d === e) return z = !0, 0;
                        if (!h || !i) return d === a ? -1 : e === a ? 1 : h ? -1 : i ? 1 : H ? Y.call(H, d) - Y.call(H, e) : 0;
                        if (h === i) return ap(d, e);
                        for (b = d; b = b.parentNode;) f.unshift(b);
                        for (b = e; b = b.parentNode;) g.unshift(b);
                        for (; f[c] === g[c];) c++;
                        return c ? ap(f[c], g[c]) : f[c] === l ? -1 : g[c] === l ? 1 : 0
                    }, a) : I
                }, c.matches = function(a, b) {
                    return c(a, null, null, b)
                }, c.matchesSelector = function(a, b) {
                    if ((a.ownerDocument || a) !== I && n(a), b = b.replace(ad, "='$1']"), !(!i.matchesSelector || !K || M && M.test(b) || L && L.test(b))) try {
                        var d = N.call(a, b);
                        if (d || i.disconnectedMatch || a.document && 11 !== a.document.nodeType) return d
                    } catch (e) {}
                    return c(b, I, null, [a]).length > 0
                }, c.contains = function(a, b) {
                    return (a.ownerDocument || a) !== I && n(a), O(a, b)
                }, c.attr = function(a, b) {
                    (a.ownerDocument || a) !== I && n(a);
                    var e = d.attrHandle[b.toLowerCase()],
                        c = e && W.call(d.attrHandle, b.toLowerCase()) ? e(a, b, !K) : v;
                    return c === v ? i.attributes || !K ? a.getAttribute(b) : (c = a.getAttributeNode(b)) && c.specified ? c.value : null : c
                }, c.error = function(a) {
                    throw Error("Syntax error, unrecognized expression: " + a)
                }, c.uniqueSort = function(a) {
                    var d, e = [],
                        b = 0,
                        c = 0;
                    if (z = !i.detectDuplicates, H = !i.sortStable && a.slice(0), a.sort(A), z) {
                        for (; d = a[c++];) d === a[c] && (b = e.push(c));
                        for (; b--;) a.splice(e[b], 1)
                    }
                    return a
                }, w = c.getText = function(a) {
                    var d, c = "",
                        e = 0,
                        b = a.nodeType;
                    if (b) {
                        if (1 === b || 9 === b || 11 === b) {
                            if ("string" == typeof a.textContent) return a.textContent;
                            for (a = a.firstChild; a; a = a.nextSibling) c += w(a)
                        } else if (3 === b || 4 === b) return a.nodeValue
                    } else
                        for (; d = a[e]; e++) c += w(d);
                    return c
                }, d = c.selectors = {
                    cacheLength: 50,
                    createPseudo: j,
                    match: C,
                    attrHandle: {},
                    find: {},
                    relative: {
                        ">": {
                            dir: "parentNode",
                            first: !0
                        },
                        " ": {
                            dir: "parentNode"
                        },
                        "+": {
                            dir: "previousSibling",
                            first: !0
                        },
                        "~": {
                            dir: "previousSibling"
                        }
                    },
                    preFilter: {
                        ATTR: function(a) {
                            return a[1] = a[1].replace(al, am), a[3] = (a[4] || a[5] || "").replace(al, am), "~=" === a[2] && (a[3] = " " + a[3] + " "), a.slice(0, 4)
                        },
                        CHILD: function(a) {
                            return a[1] = a[1].toLowerCase(), "nth" === a[1].slice(0, 3) ? (a[3] || c.error(a[0]), a[4] = +(a[4] ? a[5] + (a[6] || 1) : 2 * ("even" === a[3] || "odd" === a[3])), a[5] = +(a[7] + a[8] || "odd" === a[3])) : a[3] && c.error(a[0]), a
                        },
                        PSEUDO: function(a) {
                            var c, b = !a[5] && a[2];
                            return C.CHILD.test(a[0]) ? null : (a[3] && a[4] !== v ? a[2] = a[4] : b && ae.test(b) && (c = aq(b, !0)) && (c = b.indexOf(")", b.length - c) - b.length) && (a[0] = a[0].slice(0, c), a[2] = b.slice(0, c)), a.slice(0, 3))
                        }
                    },
                    filter: {
                        TAG: function(a) {
                            var b = a.replace(al, am).toLowerCase();
                            return "*" === a ? function() {
                                return !0
                            } : function(a) {
                                return a.nodeName && a.nodeName.toLowerCase() === b
                            }
                        },
                        CLASS: function(a) {
                            var c = R[a + " "];
                            return c || (c = RegExp("(^|" + b + ")" + a + "(" + b + "|$)")) && R(a, function(a) {
                                return c.test("string" == typeof a.className && a.className || typeof a.getAttribute !== U && a.getAttribute("class") || "")
                            })
                        },
                        ATTR: function(a, b, d) {
                            return function(f) {
                                var e = c.attr(f, a);
                                return null == e ? "!=" === b : !b || (e += "", "=" === b ? e === d : "!=" === b ? e !== d : "^=" === b ? d && 0 === e.indexOf(d) : "*=" === b ? d && e.indexOf(d) > -1 : "$=" === b ? d && e.slice(-d.length) === d : "~=" === b ? (" " + e + " ").indexOf(d) > -1 : "|=" === b && (e === d || e.slice(0, d.length + 1) === d + "-"))
                            }
                        },
                        CHILD: function(a, b, e, c, d) {
                            var f = "nth" !== a.slice(0, 3),
                                g = "last" !== a.slice(-4),
                                h = "of-type" === b;
                            return 1 === c && 0 === d ? function(a) {
                                return !!a.parentNode
                            } : function(j, t, s) {
                                var k, q, b, e, i, m, n = f !== g ? "nextSibling" : "previousSibling",
                                    l = j.parentNode,
                                    r = h && j.nodeName.toLowerCase(),
                                    p = !s && !h;
                                if (l) {
                                    if (f) {
                                        for (; n;) {
                                            for (b = j; b = b[n];)
                                                if (h ? b.nodeName.toLowerCase() === r : 1 === b.nodeType) return !1;
                                            m = n = "only" === a && !m && "nextSibling"
                                        }
                                        return !0
                                    }
                                    if (m = [g ? l.firstChild : l.lastChild], g && p) {
                                        for (i = (k = (q = l[o] || (l[o] = {}))[a] || [])[0] === P && k[1], e = k[0] === P && k[2], b = i && l.childNodes[i]; b = ++i && b && b[n] || (e = i = 0) || m.pop();)
                                            if (1 === b.nodeType && ++e && b === j) {
                                                q[a] = [P, i, e];
                                                break
                                            }
                                    } else if (p && (k = (j[o] || (j[o] = {}))[a]) && k[0] === P) e = k[1];
                                    else
                                        for (;
                                            (b = ++i && b && b[n] || (e = i = 0) || m.pop()) && (!((h ? b.nodeName.toLowerCase() === r : 1 === b.nodeType) && ++e) || (p && ((b[o] || (b[o] = {}))[a] = [P, e]), b !== j)););
                                    return (e -= d) === c || 0 == e % c && e / c >= 0
                                }
                            }
                        },
                        PSEUDO: function(a, e) {
                            var f, b = d.pseudos[a] || d.setFilters[a.toLowerCase()] || c.error("unsupported pseudo: " + a);
                            return b[o] ? b(e) : b.length > 1 ? (f = [a, a, "", e], d.setFilters.hasOwnProperty(a.toLowerCase()) ? j(function(a, g) {
                                for (var c, d = b(a, e), f = d.length; f--;) c = Y.call(a, d[f]), a[c] = !(g[c] = d[f])
                            }) : function(a) {
                                return b(a, 0, f)
                            }) : b
                        }
                    },
                    pseudos: {
                        not: j(function(a) {
                            var c = [],
                                d = [],
                                b = y(a.replace(Z, "$1"));
                            return b[o] ? j(function(c, e, h, f) {
                                for (var d, g = b(c, null, f, []), a = c.length; a--;)(d = g[a]) && (c[a] = !(e[a] = d))
                            }) : function(a, f, e) {
                                return c[0] = a, b(c, null, e, d), !d.pop()
                            }
                        }),
                        has: j(function(a) {
                            return function(b) {
                                return c(a, b).length > 0
                            }
                        }),
                        contains: j(function(a) {
                            return function(b) {
                                return (b.textContent || b.innerText || w(b)).indexOf(a) > -1
                            }
                        }),
                        lang: j(function(a) {
                            return af.test(a || "") || c.error("unsupported lang: " + a), a = a.replace(al, am).toLowerCase(),
                                function(b) {
                                    var c;
                                    do
                                        if (c = K ? b.lang : b.getAttribute("xml:lang") || b.getAttribute("lang")) return (c = c.toLowerCase()) === a || 0 === c.indexOf(a + "-"); while ((b = b.parentNode) && 1 === b.nodeType) return !1
                                }
                        }),
                        target: function(b) {
                            var a = u.location && u.location.hash;
                            return a && a.slice(1) === b.id
                        },
                        root: function(a) {
                            return a === J
                        },
                        focus: function(a) {
                            return a === I.activeElement && (!I.hasFocus || I.hasFocus()) && !!(a.type || a.href || ~a.tabIndex)
                        },
                        enabled: function(a) {
                            return !1 === a.disabled
                        },
                        disabled: function(a) {
                            return !0 === a.disabled
                        },
                        checked: function(a) {
                            var b = a.nodeName.toLowerCase();
                            return "input" === b && !!a.checked || "option" === b && !!a.selected
                        },
                        selected: function(a) {
                            return a.parentNode && a.parentNode.selectedIndex, !0 === a.selected
                        },
                        empty: function(a) {
                            for (a = a.firstChild; a; a = a.nextSibling)
                                if (a.nodeName > "@" || 3 === a.nodeType || 4 === a.nodeType) return !1;
                            return !0
                        },
                        parent: function(a) {
                            return !d.pseudos.empty(a)
                        },
                        header: function(a) {
                            return aj.test(a.nodeName)
                        },
                        input: function(a) {
                            return ai.test(a.nodeName)
                        },
                        button: function(a) {
                            var b = a.nodeName.toLowerCase();
                            return "input" === b && "button" === a.type || "button" === b
                        },
                        text: function(a) {
                            var b;
                            return "input" === a.nodeName.toLowerCase() && "text" === a.type && (null == (b = a.getAttribute("type")) || b.toLowerCase() === a.type)
                        },
                        first: f(function() {
                            return [0]
                        }),
                        last: f(function(b, a) {
                            return [a - 1]
                        }),
                        eq: f(function(c, b, a) {
                            return [0 > a ? a + b : a]
                        }),
                        even: f(function(b, c) {
                            for (var a = 0; c > a; a += 2) b.push(a);
                            return b
                        }),
                        odd: f(function(b, c) {
                            for (var a = 1; c > a; a += 2) b.push(a);
                            return b
                        }),
                        lt: f(function(b, d, a) {
                            for (var c = 0 > a ? a + d : a; --c >= 0;) b.push(c);
                            return b
                        }),
                        gt: f(function(b, c, a) {
                            for (var d = 0 > a ? a + c : a; c > ++d;) b.push(d);
                            return b
                        })
                    }
                }, d.pseudos.nth = d.pseudos.eq, {
                    radio: !0,
                    checkbox: !0,
                    file: !0,
                    password: !0,
                    image: !0
                }) d.pseudos[g] = D(g);
            for (g in {
                    submit: !0,
                    reset: !0
                }) d.pseudos[g] = E(g);

            function t() {}

            function aq(g, k) {
                var e, b, h, f, a, i, j, l = S[g + " "];
                if (l) return k ? 0 : l.slice(0);
                for (a = g, i = [], j = d.preFilter; a;) {
                    for (f in (!e || (b = aa.exec(a))) && (b && (a = a.slice(b[0].length) || a), i.push(h = [])), e = !1, (b = ab.exec(a)) && (e = b.shift(), h.push({
                            value: e,
                            type: b[0].replace(Z, " ")
                        }), a = a.slice(e.length)), d.filter)(b = C[f].exec(a)) && (!j[f] || (b = j[f](b))) && (e = b.shift(), h.push({
                        value: e,
                        type: f,
                        matches: b
                    }), a = a.slice(e.length));
                    if (!e) break
                }
                return k ? a.length : a ? c.error(g) : S(g, i).slice(0)
            }

            function ar(b) {
                for (var a = 0, d = b.length, c = ""; d > a; a++) c += b[a].value;
                return c
            }

            function as(d, a, b) {
                var c = a.dir,
                    e = b && "parentNode" === c,
                    f = Q++;
                return a.first ? function(a, b, f) {
                    for (; a = a[c];)
                        if (1 === a.nodeType || e) return d(a, b, f)
                } : function(a, i, g) {
                    var h, b, j, k = P + " " + f;
                    if (g) {
                        for (; a = a[c];)
                            if ((1 === a.nodeType || e) && d(a, i, g)) return !0
                    } else
                        for (; a = a[c];)
                            if (1 === a.nodeType || e) {
                                if ((b = (j = a[o] || (a[o] = {}))[c]) && b[0] === k) {
                                    if (!0 === (h = b[1]) || h === F) return !0 === h
                                } else if ((b = j[c] = [k])[1] = d(a, i, g) || F, !0 === b[1]) return !0
                            }
                }
            }

            function at(a) {
                return a.length > 1 ? function(c, d, e) {
                    for (var b = a.length; b--;)
                        if (!a[b](c, d, e)) return !1;
                    return !0
                } : a[0]
            }

            function au(c, d, e, g, h) {
                for (var b, f = [], a = 0, i = c.length, j = null != d; i > a; a++)(b = c[a]) && (!e || e(b, g, h)) && (f.push(b), j && d.push(a));
                return f
            }

            function av(d, e, f, a, b, c) {
                return a && !a[o] && (a = av(a)), b && !b[o] && (b = av(b, c)), j(function(j, k, l, m) {
                    var h, g, i, q = [],
                        o = [],
                        r = k.length,
                        s = j || ax(e || "*", l.nodeType ? [l] : l, []),
                        n = d && (j || !e) ? au(s, q, d, l, m) : s,
                        c = f ? b || (j ? d : r || a) ? [] : k : n;
                    if (f && f(n, c, l, m), a)
                        for (h = au(c, o), a(h, [], l, m), g = h.length; g--;)(i = h[g]) && (c[o[g]] = !(n[o[g]] = i));
                    if (j) {
                        if (b || d) {
                            if (b) {
                                for (h = [], g = c.length; g--;)(i = c[g]) && h.push(n[g] = i);
                                b(null, c = [], h, m)
                            }
                            for (g = c.length; g--;)(i = c[g]) && (h = b ? Y.call(j, i) : q[g]) > -1 && (j[h] = !(k[h] = i))
                        }
                    } else c = au(c === k ? c.splice(r, c.length) : c), b ? b(null, k, c, m) : p.apply(k, c)
                })
            }

            function aw(a) {
                for (var j, e, c, g = a.length, h = d.relative[a[0].type], i = h || d.relative[" "], b = h ? 1 : 0, k = as(function(a) {
                        return a === j
                    }, i, !0), l = as(function(a) {
                        return Y.call(j, a) > -1
                    }, i, !0), f = [function(c, a, b) {
                        return !h && (b || a !== G) || ((j = a).nodeType ? k(c, a, b) : l(c, a, b))
                    }]; g > b; b++)
                    if (e = d.relative[a[b].type]) f = [as(at(f), e)];
                    else {
                        if ((e = d.filter[a[b].type].apply(null, a[b].matches))[o]) {
                            for (c = ++b; g > c && !d.relative[a[c].type]; c++);
                            return av(b > 1 && at(f), b > 1 && ar(a.slice(0, b - 1).concat({
                                value: " " === a[b - 2].type ? "*" : ""
                            })).replace(Z, "$1"), e, c > b && aw(a.slice(b, c)), g > c && aw(a = a.slice(c)), g > c && ar(a))
                        }
                        f.push(e)
                    }
                return at(f)
            }

            function ax(e, b, d) {
                for (var a = 0, f = b.length; f > a; a++) c(e, b[a], d);
                return d
            }

            function ay(b, c, e, f) {
                var h, a, g, k, l, j = aq(b);
                if (!f && 1 === j.length) {
                    if ((a = j[0] = j[0].slice(0)).length > 2 && "ID" === (g = a[0]).type && i.getById && 9 === c.nodeType && K && d.relative[a[1].type]) {
                        if (!(c = (d.find.ID(g.matches[0].replace(al, am), c) || [])[0])) return e;
                        b = b.slice(a.shift().value.length)
                    }
                    for (h = C.needsContext.test(b) ? 0 : a.length;
                        (h--) && (g = a[h], !d.relative[k = g.type]);)
                        if ((l = d.find[k]) && (f = l(g.matches[0].replace(al, am), ac.test(a[0].type) && c.parentNode || c))) {
                            if (a.splice(h, 1), !(b = f.length && ar(a))) return p.apply(e, f), e;
                            break
                        }
                }
                return y(b, j)(f, c, !K, e, ac.test(b)), e
            }
            t.prototype = d.filters = d.pseudos, d.setFilters = new t, y = c.compile = function(e, b) {
                var h, m, n, i, q, f, g, k = [],
                    l = [],
                    a = T[e + " "];
                if (!a) {
                    for (b || (b = aq(e)), g = b.length; g--;)(a = aw(b[g]))[o] ? k.push(a) : l.push(a);
                    a = T(e, (h = l, n = 0, i = (m = k).length > 0, q = h.length > 0, f = function(g, f, t, l, u) {
                        var b, o, j, e = [],
                            k = 0,
                            a = "0",
                            r = g && [],
                            s = null != u,
                            v = G,
                            x = g || q && d.find.TAG("*", u && f.parentNode || f),
                            w = P += null == v ? 1 : Math.random() || .1;
                        for (s && (G = f !== I && f, F = n); null != (b = x[a]); a++) {
                            if (q && b) {
                                for (o = 0; j = h[o++];)
                                    if (j(b, f, t)) {
                                        l.push(b);
                                        break
                                    }
                                s && (P = w, F = ++n)
                            }
                            i && ((b = !j && b) && k--, g && r.push(b))
                        }
                        if (k += a, i && a !== k) {
                            for (o = 0; j = m[o++];) j(r, e, f, t);
                            if (g) {
                                if (k > 0)
                                    for (; a--;) r[a] || e[a] || (e[a] = X.call(l));
                                e = au(e)
                            }
                            p.apply(l, e), s && !g && e.length > 0 && k + m.length > 1 && c.uniqueSort(l)
                        }
                        return s && (P = w, G = v), r
                    }, i ? j(f) : f))
                }
                return a
            }, i.sortStable = o.split("").sort(A).join("") === o, i.detectDuplicates = z, n(), i.sortDetached = k(function(a) {
                return 1 & a.compareDocumentPosition(I.createElement("div"))
            }), k(function(a) {
                return a.innerHTML = "<a href='#'></a>", "#" === a.firstChild.getAttribute("href")
            }) || m("type|href|height|width", function(b, a, c) {
                return c ? v : b.getAttribute(a, "type" === a.toLowerCase() ? 1 : 2)
            }), i.attributes && k(function(a) {
                return a.innerHTML = "<input/>", a.firstChild.setAttribute("value", ""), "" === a.firstChild.getAttribute("value")
            }) || m("value", function(a, c, b) {
                return b || "input" !== a.nodeName.toLowerCase() ? v : a.defaultValue
            }), k(function(a) {
                return null == a.getAttribute("disabled")
            }) || m(q, function(c, a, d) {
                var b;
                return d ? v : (b = c.getAttributeNode(a)) && b.specified ? b.value : !0 === c[a] ? a.toLowerCase() : null
            }), a.find = c, a.expr = c.selectors, a.expr[":"] = a.expr.pseudos, a.unique = c.uniqueSort, a.text = c.getText, a.isXMLDoc = c.isXML, a.contains = c.contains
        }(b);
    var af = {};
    a.Callbacks = function(b) {
        b = "string" == typeof b ? af[b] || (e = af[d = b] = {}, a.each(d.match(S) || [], function(b, a) {
            e[a] = !0
        }), e) : a.extend({}, b);
        var d, e, f, g, h, i, j, k, l = [],
            m = !b.once && [],
            n = function(a) {
                for (g = b.memory && a, h = !0, j = k || 0, k = 0, i = l.length, f = !0; l && i > j; j++)
                    if (!1 === l[j].apply(a[0], a[1]) && b.stopOnFalse) {
                        g = !1;
                        break
                    }
                f = !1, l && (m ? m.length && n(m.shift()) : g ? l = [] : c.disable())
            },
            c = {
                add: function() {
                    if (l) {
                        var d = l.length;
                        (function e(d) {
                            a.each(d, function(g, d) {
                                var f = a.type(d);
                                "function" === f ? b.unique && c.has(d) || l.push(d) : d && d.length && "string" !== f && e(d)
                            })
                        })(arguments), f ? i = l.length : g && (k = d, n(g))
                    }
                    return this
                },
                remove: function() {
                    return l && a.each(arguments, function(d, c) {
                        for (var b;
                            (b = a.inArray(c, l, b)) > -1;) l.splice(b, 1), f && (i >= b && i--, j >= b && j--)
                    }), this
                },
                has: function(b) {
                    return b ? a.inArray(b, l) > -1 : !(!l || !l.length)
                },
                empty: function() {
                    return l = [], i = 0, this
                },
                disable: function() {
                    return l = m = g = u, this
                },
                disabled: function() {
                    return !l
                },
                lock: function() {
                    return m = u, g || c.disable(), this
                },
                locked: function() {
                    return !m
                },
                fireWith: function(b, a) {
                    return l && (!h || m) && (a = [b, (a = a || []).slice ? a.slice() : a], f ? m.push(a) : n(a)), this
                },
                fire: function() {
                    return c.fireWith(this, arguments), this
                },
                fired: function() {
                    return !!h
                }
            };
        return c
    }, a.extend({
        Deferred: function(d) {
            var e = [
                    ["resolve", "done", a.Callbacks("once memory"), "resolved"],
                    ["reject", "fail", a.Callbacks("once memory"), "rejected"],
                    ["notify", "progress", a.Callbacks("memory")]
                ],
                f = "pending",
                c = {
                    state: function() {
                        return f
                    },
                    always: function() {
                        return b.done(arguments).fail(arguments), this
                    },
                    then: function() {
                        var d = arguments;
                        return a.Deferred(function(f) {
                            a.each(e, function(e, g) {
                                var h = g[0],
                                    i = a.isFunction(d[e]) && d[e];
                                b[g[1]](function() {
                                    var b = i && i.apply(this, arguments);
                                    b && a.isFunction(b.promise) ? b.promise().done(f.resolve).fail(f.reject).progress(f.notify) : f[h + "With"](this === c ? f.promise() : this, i ? [b] : arguments)
                                })
                            }), d = null
                        }).promise()
                    },
                    promise: function(b) {
                        return null != b ? a.extend(b, c) : c
                    }
                },
                b = {};
            return c.pipe = c.then, a.each(e, function(g, a) {
                var d = a[2],
                    h = a[3];
                c[a[1]] = d.add, h && d.add(function() {
                    f = h
                }, e[1 ^ g][2].disable, e[2][2].lock), b[a[0]] = function() {
                    return b[a[0] + "With"](this === b ? c : this, arguments), this
                }, b[a[0] + "With"] = d.fireWith
            }), c.promise(b), d && d.call(b, b), b
        },
        when: function(e) {
            var i, j, f, b = 0,
                d = O.call(arguments),
                c = d.length,
                g = 1 !== c || e && a.isFunction(e.promise) ? c : 0,
                h = 1 === g ? e : a.Deferred(),
                k = function(a, b, c) {
                    return function(d) {
                        b[a] = this, c[a] = arguments.length > 1 ? O.call(arguments) : d, c === i ? h.notifyWith(b, c) : --g || h.resolveWith(b, c)
                    }
                };
            if (c > 1)
                for (i = Array(c), j = Array(c), f = Array(c); c > b; b++) d[b] && a.isFunction(d[b].promise) ? d[b].promise().done(k(b, f, d)).fail(h.reject).progress(k(b, j, i)) : --g;
            return g || h.resolveWith(f, d), h.promise()
        }
    }), a.support = function(c) {
        var j, g, f, k, l, i, m, n, h, d = e.createElement("div");
        if (d.setAttribute("className", "t"), d.innerHTML = "  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>", j = d.getElementsByTagName("*") || [], g = d.getElementsByTagName("a")[0], !g || !g.style || !j.length) return c;
        i = (k = e.createElement("select")).appendChild(e.createElement("option")), f = d.getElementsByTagName("input")[0], g.style.cssText = "top:1px;float:left;opacity:.5", c.getSetAttribute = "t" !== d.className, c.leadingWhitespace = 3 === d.firstChild.nodeType, c.tbody = !d.getElementsByTagName("tbody").length, c.htmlSerialize = !!d.getElementsByTagName("link").length, c.style = /top/.test(g.getAttribute("style")), c.hrefNormalized = "/a" === g.getAttribute("href"), c.opacity = /^0.5/.test(g.style.opacity), c.cssFloat = !!g.style.cssFloat, c.checkOn = !!f.value, c.optSelected = i.selected, c.enctype = !!e.createElement("form").enctype, c.html5Clone = "<:nav></:nav>" !== e.createElement("nav").cloneNode(!0).outerHTML, c.inlineBlockNeedsLayout = !1, c.shrinkWrapBlocks = !1, c.pixelPosition = !1, c.deleteExpando = !0, c.noCloneEvent = !0, c.reliableMarginRight = !0, c.boxSizingReliable = !0, f.checked = !0, c.noCloneChecked = f.cloneNode(!0).checked, k.disabled = !0, c.optDisabled = !i.disabled;
        try {
            delete d.test
        } catch (o) {
            c.deleteExpando = !1
        }
        for (h in (f = e.createElement("input")).setAttribute("value", ""), c.input = "" === f.getAttribute("value"), f.value = "t", f.setAttribute("type", "radio"), c.radioValue = "t" === f.value, f.setAttribute("checked", "t"), f.setAttribute("name", "t"), (l = e.createDocumentFragment()).appendChild(f), c.appendChecked = f.checked, c.checkClone = l.cloneNode(!0).cloneNode(!0).lastChild.checked, d.attachEvent && (d.attachEvent("onclick", function() {
                c.noCloneEvent = !1
            }), d.cloneNode(!0).click()), {
                submit: !0,
                change: !0,
                focusin: !0
            }) d.setAttribute(m = "on" + h, "t"), c[h + "Bubbles"] = m in b || !1 === d.attributes[m].expando;
        for (h in d.style.backgroundClip = "content-box", d.cloneNode(!0).style.backgroundClip = "", c.clearCloneStyle = "content-box" === d.style.backgroundClip, a(c)) break;
        return c.ownLast = "0" !== h, a(function() {
            var i, h, f, j = "padding:0;margin:0;border:0;display:block;box-sizing:content-box;-moz-box-sizing:content-box;-webkit-box-sizing:content-box;",
                g = e.getElementsByTagName("body")[0];
            g && ((i = e.createElement("div")).style.cssText = "border:0;width:0;height:0;position:absolute;top:0;left:-9999px;margin-top:1px", g.appendChild(i).appendChild(d), d.innerHTML = "<table><tr><td></td><td>t</td></tr></table>", (f = d.getElementsByTagName("td"))[0].style.cssText = "padding:0;margin:0;border:0;display:none", n = 0 === f[0].offsetHeight, f[0].style.display = "", f[1].style.display = "none", c.reliableHiddenOffsets = n && 0 === f[0].offsetHeight, d.innerHTML = "", d.style.cssText = "box-sizing:border-box;-moz-box-sizing:border-box;-webkit-box-sizing:border-box;padding:1px;border:1px;display:block;width:4px;margin-top:1%;position:absolute;top:1%;", a.swap(g, null != g.style.zoom ? {
                zoom: 1
            } : {}, function() {
                c.boxSizing = 4 === d.offsetWidth
            }), b.getComputedStyle && (c.pixelPosition = "1%" !== (b.getComputedStyle(d, null) || {}).top, c.boxSizingReliable = "4px" === (b.getComputedStyle(d, null) || {
                width: "4px"
            }).width, (h = d.appendChild(e.createElement("div"))).style.cssText = d.style.cssText = j, h.style.marginRight = h.style.width = "0", d.style.width = "1px", c.reliableMarginRight = !parseFloat((b.getComputedStyle(h, null) || {}).marginRight)), typeof d.style.zoom !== J && (d.innerHTML = "", d.style.cssText = j + "width:1px;padding:1px;display:inline;zoom:1", c.inlineBlockNeedsLayout = 3 === d.offsetWidth, d.style.display = "block", d.innerHTML = "<div></div>", d.firstChild.style.width = "5px", c.shrinkWrapBlocks = 3 !== d.offsetWidth, c.inlineBlockNeedsLayout && (g.style.zoom = 1)), g.removeChild(i), i = d = f = h = null)
        }), j = k = l = i = g = f = null, c
    }({});
    var ag = /(?:\{[\s\S]*\}|\[[\s\S]*\])$/,
        ah = /([A-Z])/g;

    function ai(f, c, k, l) {
        if (a.acceptData(f)) {
            var i, d, g = a.expando,
                j = f.nodeType,
                e = j ? a.cache : f,
                b = j ? f[g] : f[g] && g;
            if (b && e[b] && (l || e[b].data) || k !== u || "string" != typeof c) return b || (b = j ? f[g] = h.pop() || a.guid++ : g), e[b] || (e[b] = j ? {} : {
                toJSON: a.noop
            }), ("object" == typeof c || "function" == typeof c) && (l ? e[b] = a.extend(e[b], c) : e[b].data = a.extend(e[b].data, c)), d = e[b], l || (d.data || (d.data = {}), d = d.data), k !== u && (d[a.camelCase(c)] = k), "string" == typeof c ? null == (i = d[c]) && (i = d[a.camelCase(c)]) : i = d, i
        }
    }

    function aj(f, b, g) {
        if (a.acceptData(f)) {
            var e, h, i = f.nodeType,
                c = i ? a.cache : f,
                d = i ? f[a.expando] : a.expando;
            if (c[d]) {
                if (b && (e = g ? c[d] : c[d].data)) {
                    for (h = (b = a.isArray(b) ? b.concat(a.map(b, a.camelCase)) : (b in e) ? [b] : ((b = a.camelCase(b)) in e) ? [b] : b.split(" ")).length; h--;) delete e[b[h]];
                    if (g ? !ak(e) : !a.isEmptyObject(e)) return
                }(g || (delete c[d].data, ak(c[d]))) && (i ? a.cleanData([f], !0) : a.support.deleteExpando || c != c.window ? delete c[d] : c[d] = null)
            }
        }
    }

    function $(c, d, b) {
        if (b === u && 1 === c.nodeType) {
            var e = "data-" + d.replace(ah, "-$1").toLowerCase();
            if ("string" == typeof(b = c.getAttribute(e))) {
                try {
                    b = "true" === b || "false" !== b && ("null" === b ? null : +b + "" === b ? +b : ag.test(b) ? a.parseJSON(b) : b)
                } catch (f) {}
                a.data(c, d, b)
            } else b = u
        }
        return b
    }

    function ak(c) {
        var b;
        for (b in c)
            if (("data" !== b || !a.isEmptyObject(c[b])) && "toJSON" !== b) return !1;
        return !0
    }
    a.extend({
        cache: {},
        noData: {
            applet: !0,
            embed: !0,
            object: "clsid:D27CDB6E-AE6D-11cf-96B8-444553540000"
        },
        hasData: function(b) {
            return !!(b = b.nodeType ? a.cache[b[a.expando]] : b[a.expando]) && !ak(b)
        },
        data: function(a, b, c) {
            return ai(a, b, c)
        },
        removeData: function(a, b) {
            return aj(a, b)
        },
        _data: function(a, b, c) {
            return ai(a, b, c, !0)
        },
        _removeData: function(a, b) {
            return aj(a, b, !0)
        },
        acceptData: function(b) {
            if (b.nodeType && 1 !== b.nodeType && 9 !== b.nodeType) return !1;
            var c = b.nodeName && a.noData[b.nodeName.toLowerCase()];
            return !c || !0 !== c && b.getAttribute("classid") === c
        }
    }), a.fn.extend({
        data: function(c, h) {
            var e, d, f = null,
                g = 0,
                b = this[0];
            if (c === u) {
                if (this.length && (f = a.data(b), 1 === b.nodeType && !a._data(b, "parsedAttrs"))) {
                    for (e = b.attributes; e.length > g; g++) 0 === (d = e[g].name).indexOf("data-") && $(b, d = a.camelCase(d.slice(5)), f[d]);
                    a._data(b, "parsedAttrs", !0)
                }
                return f
            }
            return "object" == typeof c ? this.each(function() {
                a.data(this, c)
            }) : arguments.length > 1 ? this.each(function() {
                a.data(this, c, h)
            }) : b ? $(b, c, a.data(b, c)) : null
        },
        removeData: function(b) {
            return this.each(function() {
                a.removeData(this, b)
            })
        }
    }), a.extend({
        queue: function(e, c, d) {
            var b;
            return e ? (c = (c || "fx") + "queue", b = a._data(e, c), d && (!b || a.isArray(d) ? b = a._data(e, c, a.makeArray(d)) : b.push(d)), b || []) : u
        },
        dequeue: function(f, b) {
            b = b || "fx";
            var c = a.queue(f, b),
                g = c.length,
                d = c.shift(),
                e = a._queueHooks(f, b),
                h = function() {
                    a.dequeue(f, b)
                };
            "inprogress" === d && (d = c.shift(), g--), d && ("fx" === b && c.unshift("inprogress"), delete e.stop, d.call(f, h, e)), !g && e && e.empty.fire()
        },
        _queueHooks: function(b, d) {
            var c = d + "queueHooks";
            return a._data(b, c) || a._data(b, c, {
                empty: a.Callbacks("once memory").add(function() {
                    a._removeData(b, d + "queue"), a._removeData(b, c)
                })
            })
        }
    }), a.fn.extend({
        queue: function(b, c) {
            var d = 2;
            return "string" != typeof b && (c = b, b = "fx", d--), d > arguments.length ? a.queue(this[0], b) : c === u ? this : this.each(function() {
                var d = a.queue(this, b, c);
                a._queueHooks(this, b), "fx" === b && "inprogress" !== d[0] && a.dequeue(this, b)
            })
        },
        dequeue: function(b) {
            return this.each(function() {
                a.dequeue(this, b)
            })
        },
        delay: function(b, c) {
            return b = a.fx && a.fx.speeds[b] || b, c = c || "fx", this.queue(c, function(a, c) {
                var d = setTimeout(a, b);
                c.stop = function() {
                    clearTimeout(d)
                }
            })
        },
        clearQueue: function(a) {
            return this.queue(a || "fx", [])
        },
        promise: function(b, d) {
            var c, g = 1,
                h = a.Deferred(),
                i = this,
                e = this.length,
                f = function() {
                    --g || h.resolveWith(i, [i])
                };
            for ("string" != typeof b && (d = b, b = u), b = b || "fx"; e--;)(c = a._data(i[e], b + "queueHooks")) && c.empty && (g++, c.empty.add(f));
            return f(), h.promise(d)
        }
    });
    var o, y, al = /[\t\r\n\f]/g,
        am = /\r/g,
        an = /^(?:input|select|textarea|button|object)$/i,
        ao = /^(?:a|area)$/i,
        ap = /^(?:checked|selected)$/i,
        p = a.support.getSetAttribute,
        z = a.support.input;
    a.fn.extend({
        attr: function(b, c) {
            return a.access(this, a.attr, b, c, arguments.length > 1)
        },
        removeAttr: function(b) {
            return this.each(function() {
                a.removeAttr(this, b)
            })
        },
        prop: function(b, c) {
            return a.access(this, a.prop, b, c, arguments.length > 1)
        },
        removeProp: function(b) {
            return b = a.propFix[b] || b, this.each(function() {
                try {
                    this[b] = u, delete this[b]
                } catch (a) {}
            })
        },
        addClass: function(b) {
            var g, c, d, e, h, f = 0,
                i = this.length;
            if (a.isFunction(b)) return this.each(function(c) {
                a(this).addClass(b.call(this, c, this.className))
            });
            if ("string" == typeof b && b) {
                for (g = (b || "").match(S) || []; i > f; f++)
                    if (d = 1 === (c = this[f]).nodeType && (c.className ? (" " + c.className + " ").replace(al, " ") : " ")) {
                        for (h = 0; e = g[h++];) 0 > d.indexOf(" " + e + " ") && (d += e + " ");
                        c.className = a.trim(d)
                    }
            }
            return this
        },
        removeClass: function(b) {
            var g, d, c, e, h, f = 0,
                i = this.length,
                j = 0 === arguments.length || "string" == typeof b && b;
            if (a.isFunction(b)) return this.each(function(c) {
                a(this).removeClass(b.call(this, c, this.className))
            });
            if (j) {
                for (g = (b || "").match(S) || []; i > f; f++)
                    if (c = 1 === (d = this[f]).nodeType && (d.className ? (" " + d.className + " ").replace(al, " ") : "")) {
                        for (h = 0; e = g[h++];)
                            for (; c.indexOf(" " + e + " ") >= 0;) c = c.replace(" " + e + " ", " ");
                        d.className = b ? a.trim(c) : ""
                    }
            }
            return this
        },
        toggleClass: function(b, c) {
            var d = typeof b;
            return "boolean" == typeof c && "string" === d ? c ? this.addClass(b) : this.removeClass(b) : a.isFunction(b) ? this.each(function(d) {
                a(this).toggleClass(b.call(this, d, this.className, c), c)
            }) : this.each(function() {
                if ("string" === d)
                    for (var c, f = 0, e = a(this), g = b.match(S) || []; c = g[f++];) e.hasClass(c) ? e.removeClass(c) : e.addClass(c);
                else(d === J || "boolean" === d) && (this.className && a._data(this, "__className__", this.className), this.className = this.className || !1 === b ? "" : a._data(this, "__className__") || "")
            })
        },
        hasClass: function(b) {
            for (var c = " " + b + " ", a = 0, d = this.length; d > a; a++)
                if (1 === this[a].nodeType && (" " + this[a].className + " ").replace(al, " ").indexOf(c) >= 0) return !0;
            return !1
        },
        val: function(e) {
            var b, d, f, c = this[0];
            return arguments.length ? (f = a.isFunction(e), this.each(function(c) {
                var b;
                1 === this.nodeType && (null == (b = f ? e.call(this, c, a(this).val()) : e) ? b = "" : "number" == typeof b ? b += "" : a.isArray(b) && (b = a.map(b, function(a) {
                    return null == a ? "" : a + ""
                })), (d = a.valHooks[this.type] || a.valHooks[this.nodeName.toLowerCase()]) && "set" in d && d.set(this, b, "value") !== u || (this.value = b))
            })) : c ? (d = a.valHooks[c.type] || a.valHooks[c.nodeName.toLowerCase()]) && "get" in d && (b = d.get(c, "value")) !== u ? b : "string" == typeof(b = c.value) ? b.replace(am, "") : null == b ? "" : b : void 0
        }
    }), a.extend({
        valHooks: {
            option: {
                get: function(b) {
                    var c = a.find.attr(b, "value");
                    return null != c ? c : b.text
                }
            },
            select: {
                get: function(f) {
                    for (var g, b, h = f.options, c = f.selectedIndex, d = "select-one" === f.type || 0 > c, i = d ? null : [], j = d ? c + 1 : h.length, e = 0 > c ? j : d ? c : 0; j > e; e++)
                        if (!(!(b = h[e]).selected && e !== c || (a.support.optDisabled ? b.disabled : null !== b.getAttribute("disabled")) || b.parentNode.disabled && a.nodeName(b.parentNode, "optgroup"))) {
                            if (g = a(b).val(), d) return g;
                            i.push(g)
                        }
                    return i
                },
                set: function(b, h) {
                    for (var c, d, e = b.options, f = a.makeArray(h), g = e.length; g--;)((d = e[g]).selected = a.inArray(a(d).val(), f) >= 0) && (c = !0);
                    return c || (b.selectedIndex = -1), f
                }
            }
        },
        attr: function(b, c, e) {
            var d, f, g = b.nodeType;
            if (b && 3 !== g && 8 !== g && 2 !== g) return typeof b.getAttribute === J ? a.prop(b, c, e) : (1 === g && a.isXMLDoc(b) || (c = c.toLowerCase(), d = a.attrHooks[c] || (a.expr.match.bool.test(c) ? y : o)), e === u ? d && "get" in d && null !== (f = d.get(b, c)) ? f : null == (f = a.find.attr(b, c)) ? u : f : null !== e ? d && "set" in d && (f = d.set(b, e, c)) !== u ? f : (b.setAttribute(c, e + ""), e) : (a.removeAttr(b, c), u))
        },
        removeAttr: function(c, e) {
            var b, d, g = 0,
                f = e && e.match(S);
            if (f && 1 === c.nodeType)
                for (; b = f[g++];) d = a.propFix[b] || b, a.expr.match.bool.test(b) ? z && p || !ap.test(b) ? c[d] = !1 : c[a.camelCase("default-" + b)] = c[d] = !1 : a.attr(c, b, ""), c.removeAttribute(p ? b : d)
        },
        attrHooks: {
            type: {
                set: function(b, c) {
                    if (!a.support.radioValue && "radio" === c && a.nodeName(b, "input")) {
                        var d = b.value;
                        return b.setAttribute("type", c), d && (b.value = d), c
                    }
                }
            }
        },
        propFix: {
            for: "htmlFor",
            class: "className"
        },
        prop: function(c, b, g) {
            var e, d, f = c.nodeType;
            if (c && 3 !== f && 8 !== f && 2 !== f) return 1 === f && a.isXMLDoc(c) || (b = a.propFix[b] || b, d = a.propHooks[b]), g !== u ? d && "set" in d && (e = d.set(c, g, b)) !== u ? e : c[b] = g : d && "get" in d && null !== (e = d.get(c, b)) ? e : c[b]
        },
        propHooks: {
            tabIndex: {
                get: function(b) {
                    var c = a.find.attr(b, "tabindex");
                    return c ? parseInt(c, 10) : an.test(b.nodeName) || ao.test(b.nodeName) && b.href ? 0 : -1
                }
            }
        }
    }), y = {
        set: function(c, d, b) {
            return !1 === d ? a.removeAttr(c, b) : z && p || !ap.test(b) ? c.setAttribute(!p && a.propFix[b] || b, b) : c[a.camelCase("default-" + b)] = c[b] = !0, b
        }
    }, a.each(a.expr.match.bool.source.match(/\w+/g), function(c, b) {
        var d = a.expr.attrHandle[b] || a.find.attr;
        a.expr.attrHandle[b] = z && p || !ap.test(b) ? function(e, b, c) {
            var f = a.expr.attrHandle[b],
                g = c ? u : (a.expr.attrHandle[b] = u) != d(e, b, c) ? b.toLowerCase() : null;
            return a.expr.attrHandle[b] = f, g
        } : function(c, b, d) {
            return d ? u : c[a.camelCase("default-" + b)] ? b.toLowerCase() : null
        }
    }), z && p || (a.attrHooks.value = {
        set: function(b, c, d) {
            return a.nodeName(b, "input") ? (b.defaultValue = c, u) : o && o.set(b, c, d)
        }
    }), p || (o = {
        set: function(a, c, b) {
            var d = a.getAttributeNode(b);
            return d || a.setAttributeNode(d = a.ownerDocument.createAttribute(b)), d.value = c += "", "value" === b || c === a.getAttribute(b) ? c : u
        }
    }, a.expr.attrHandle.id = a.expr.attrHandle.name = a.expr.attrHandle.coords = function(b, c, d) {
        var a;
        return d ? u : (a = b.getAttributeNode(c)) && "" !== a.value ? a.value : null
    }, a.valHooks.button = {
        get: function(b, c) {
            var a = b.getAttributeNode(c);
            return a && a.specified ? a.value : u
        },
        set: o.set
    }, a.attrHooks.contenteditable = {
        set: function(b, a, c) {
            o.set(b, "" !== a && a, c)
        }
    }, a.each(["width", "height"], function(c, b) {
        a.attrHooks[b] = {
            set: function(c, a) {
                return "" === a ? (c.setAttribute(b, "auto"), a) : u
            }
        }
    })), a.support.hrefNormalized || a.each(["href", "src"], function(c, b) {
        a.propHooks[b] = {
            get: function(a) {
                return a.getAttribute(b, 4)
            }
        }
    }), a.support.style || (a.attrHooks.style = {
        get: function(a) {
            return a.style.cssText || u
        },
        set: function(a, b) {
            return a.style.cssText = b + ""
        }
    }), a.support.optSelected || (a.propHooks.selected = {
        get: function(b) {
            var a = b.parentNode;
            return a && (a.selectedIndex, a.parentNode && a.parentNode.selectedIndex), null
        }
    }), a.each(["tabIndex", "readOnly", "maxLength", "cellSpacing", "cellPadding", "rowSpan", "colSpan", "useMap", "frameBorder", "contentEditable"], function() {
        a.propFix[this.toLowerCase()] = this
    }), a.support.enctype || (a.propFix.enctype = "encoding"), a.each(["radio", "checkbox"], function() {
        a.valHooks[this] = {
            set: function(b, c) {
                return a.isArray(c) ? b.checked = a.inArray(a(b).val(), c) >= 0 : u
            }
        }, a.support.checkOn || (a.valHooks[this].get = function(a) {
            return null === a.getAttribute("value") ? "on" : a.value
        })
    });
    var aq = /^(?:input|select|textarea)$/i,
        ar = /^key/,
        as = /^(?:mouse|contextmenu)|click/,
        at = /^(?:focusinfocus|focusoutblur)$/,
        au = /^([^.]*)(?:\.(.+)|)$/;

    function av() {
        return !0
    }

    function k() {
        return !1
    }

    function aw() {
        try {
            return e.activeElement
        } catch (a) {}
    }
    a.event = {
        global: {},
        add: function(c, l, d, p, f) {
            var q, k, m, n, e, h, g, i, b, o, r, j = a._data(c);
            if (j) {
                for (d.handler && (d = (n = d).handler, f = n.selector), d.guid || (d.guid = a.guid++), (k = j.events) || (k = j.events = {}), (h = j.handle) || ((h = j.handle = function(b) {
                        return "function" === J || b && a.event.triggered === b.type ? u : a.event.dispatch.apply(h.elem, arguments)
                    }).elem = c), m = (l = (l || "").match(S) || [""]).length; m--;) b = r = (q = au.exec(l[m]) || [])[1], o = (q[2] || "").split(".").sort(), b && (e = a.event.special[b] || {}, b = (f ? e.delegateType : e.bindType) || b, e = a.event.special[b] || {}, g = a.extend({
                    type: b,
                    origType: r,
                    data: p,
                    handler: d,
                    guid: d.guid,
                    selector: f,
                    needsContext: f && a.expr.match.needsContext.test(f),
                    namespace: o.join(".")
                }, n), (i = k[b]) || ((i = k[b] = []).delegateCount = 0, e.setup && !1 !== e.setup.call(c, p, o, h) || (c.addEventListener ? c.addEventListener(b, h, !1) : c.attachEvent && c.attachEvent("on" + b, h))), e.add && (e.add.call(c, g), g.handler.guid || (g.handler.guid = d.guid)), f ? i.splice(i.delegateCount++, 0, g) : i.push(g), a.event.global[b] = !0);
                c = null
            }
        },
        remove: function(d, k, n, h, r) {
            var l, c, f, p, m, i, e, g, b, o, q, j = a.hasData(d) && a._data(d);
            if (j && (i = j.events)) {
                for (m = (k = (k || "").match(S) || [""]).length; m--;)
                    if (b = q = (f = au.exec(k[m]) || [])[1], o = (f[2] || "").split(".").sort(), b) {
                        for (e = a.event.special[b] || {}, g = i[b = (h ? e.delegateType : e.bindType) || b] || [], f = f[2] && RegExp("(^|\\.)" + o.join("\\.(?:.*\\.|)") + "(\\.|$)"), p = l = g.length; l--;) c = g[l], !r && q !== c.origType || n && n.guid !== c.guid || f && !f.test(c.namespace) || h && h !== c.selector && ("**" !== h || !c.selector) || (g.splice(l, 1), c.selector && g.delegateCount--, e.remove && e.remove.call(d, c));
                        p && !g.length && (e.teardown && !1 !== e.teardown.call(d, o, j.handle) || a.removeEvent(d, b, j.handle), delete i[b])
                    } else
                        for (b in i) a.event.remove(d, b + k[m], n, h, !0);
                a.isEmptyObject(i) && (delete j.handle, a._removeData(d, "events"))
            }
        },
        trigger: function(c, j, d, m) {
            var l, k, f, p, h, i, q, n = [d || e],
                g = R.call(c, "type") ? c.type : c,
                o = R.call(c, "namespace") ? c.namespace.split(".") : [];
            if (f = i = d = d || e, 3 !== d.nodeType && 8 !== d.nodeType && !at.test(g + a.event.triggered) && (g.indexOf(".") >= 0 && (g = (o = g.split(".")).shift(), o.sort()), k = 0 > g.indexOf(":") && "on" + g, (c = c[a.expando] ? c : new a.Event(g, "object" == typeof c && c)).isTrigger = m ? 2 : 3, c.namespace = o.join("."), c.namespace_re = c.namespace ? RegExp("(^|\\.)" + o.join("\\.(?:.*\\.|)") + "(\\.|$)") : null, c.result = u, c.target || (c.target = d), j = null == j ? [c] : a.makeArray(j, [c]), h = a.event.special[g] || {}, m || !h.trigger || !1 !== h.trigger.apply(d, j))) {
                if (!m && !h.noBubble && !a.isWindow(d)) {
                    for (p = h.delegateType || g, at.test(p + g) || (f = f.parentNode); f; f = f.parentNode) n.push(f), i = f;
                    i === (d.ownerDocument || e) && n.push(i.defaultView || i.parentWindow || b)
                }
                for (q = 0;
                    (f = n[q++]) && !c.isPropagationStopped();) c.type = q > 1 ? p : h.bindType || g, (l = (a._data(f, "events") || {})[c.type] && a._data(f, "handle")) && l.apply(f, j), (l = k && f[k]) && a.acceptData(f) && l.apply && !1 === l.apply(f, j) && c.preventDefault();
                if (c.type = g, !m && !c.isDefaultPrevented() && (!h._default || !1 === h._default.apply(n.pop(), j)) && a.acceptData(d) && k && d[g] && !a.isWindow(d)) {
                    (i = d[k]) && (d[k] = null), a.event.triggered = g;
                    try {
                        d[g]()
                    } catch (r) {}
                    a.event.triggered = u, i && (d[k] = i)
                }
                return c.result
            }
        },
        dispatch: function(b) {
            b = a.event.fix(b);
            var f, g, c, d, h, i = [],
                j = O.call(arguments),
                k = (a._data(this, "events") || {})[b.type] || [],
                e = a.event.special[b.type] || {};
            if (j[0] = b, b.delegateTarget = this, !e.preDispatch || !1 !== e.preDispatch.call(this, b)) {
                for (i = a.event.handlers.call(this, b, k), f = 0;
                    (d = i[f++]) && !b.isPropagationStopped();)
                    for (b.currentTarget = d.elem, h = 0;
                        (c = d.handlers[h++]) && !b.isImmediatePropagationStopped();)(!b.namespace_re || b.namespace_re.test(c.namespace)) && (b.handleObj = c, b.data = c.data, (g = ((a.event.special[c.origType] || {}).handle || c.handler).apply(d.elem, j)) !== u && !1 === (b.result = g) && (b.preventDefault(), b.stopPropagation()));
                return e.postDispatch && e.postDispatch.call(this, b), b.result
            }
        },
        handlers: function(e, f) {
            var d, i, c, g, j = [],
                h = f.delegateCount,
                b = e.target;
            if (h && b.nodeType && (!e.button || "click" !== e.type)) {
                for (; b != this; b = b.parentNode || this)
                    if (1 === b.nodeType && (!0 !== b.disabled || "click" !== e.type)) {
                        for (c = [], g = 0; h > g; g++) c[d = (i = f[g]).selector + " "] === u && (c[d] = i.needsContext ? a(d, this).index(b) >= 0 : a.find(d, this, null, [b]).length), c[d] && c.push(i);
                        c.length && j.push({
                            elem: b,
                            handlers: c
                        })
                    }
            }
            return f.length > h && j.push({
                elem: this,
                handlers: f.slice(h)
            }), j
        },
        fix: function(b) {
            if (b[a.expando]) return b;
            var g, i, h, d = b.type,
                f = b,
                c = this.fixHooks[d];
            for (c || (this.fixHooks[d] = c = as.test(d) ? this.mouseHooks : ar.test(d) ? this.keyHooks : {}), h = c.props ? this.props.concat(c.props) : this.props, b = new a.Event(f), g = h.length; g--;) b[i = h[g]] = f[i];
            return b.target || (b.target = f.srcElement || e), 3 === b.target.nodeType && (b.target = b.target.parentNode), b.metaKey = !!b.metaKey, c.filter ? c.filter(b, f) : b
        },
        props: "altKey bubbles cancelable ctrlKey currentTarget eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(" "),
        fixHooks: {},
        keyHooks: {
            props: "char charCode key keyCode".split(" "),
            filter: function(a, b) {
                return null == a.which && (a.which = null != b.charCode ? b.charCode : b.keyCode), a
            }
        },
        mouseHooks: {
            props: "button buttons clientX clientY fromElement offsetX offsetY pageX pageY screenX screenY toElement".split(" "),
            filter: function(a, d) {
                var b, h, c, f = d.button,
                    g = d.fromElement;
                return null == a.pageX && null != d.clientX && (c = (h = a.target.ownerDocument || e).documentElement, b = h.body, a.pageX = d.clientX + (c && c.scrollLeft || b && b.scrollLeft || 0) - (c && c.clientLeft || b && b.clientLeft || 0), a.pageY = d.clientY + (c && c.scrollTop || b && b.scrollTop || 0) - (c && c.clientTop || b && b.clientTop || 0)), !a.relatedTarget && g && (a.relatedTarget = g === a.target ? d.toElement : g), a.which || f === u || (a.which = 1 & f ? 1 : 2 & f ? 3 : 4 & f ? 2 : 0), a
            }
        },
        special: {
            load: {
                noBubble: !0
            },
            focus: {
                trigger: function() {
                    if (this !== aw() && this.focus) try {
                        return this.focus(), !1
                    } catch (a) {}
                },
                delegateType: "focusin"
            },
            blur: {
                trigger: function() {
                    return this === aw() && this.blur ? (this.blur(), !1) : u
                },
                delegateType: "focusout"
            },
            click: {
                trigger: function() {
                    return a.nodeName(this, "input") && "checkbox" === this.type && this.click ? (this.click(), !1) : u
                },
                _default: function(b) {
                    return a.nodeName(b.target, "a")
                }
            },
            beforeunload: {
                postDispatch: function(a) {
                    a.result !== u && (a.originalEvent.returnValue = a.result)
                }
            }
        },
        simulate: function(e, c, d, f) {
            var b = a.extend(new a.Event, d, {
                type: e,
                isSimulated: !0,
                originalEvent: {}
            });
            f ? a.event.trigger(b, null, c) : a.event.dispatch.call(c, b), b.isDefaultPrevented() && d.preventDefault()
        }
    }, a.removeEvent = e.removeEventListener ? function(a, b, c) {
        a.removeEventListener && a.removeEventListener(b, c, !1)
    } : function(a, c, d) {
        var b = "on" + c;
        a.detachEvent && (typeof a[b] === J && (a[b] = null), a.detachEvent(b, d))
    }, a.Event = function(b, c) {
        return this instanceof a.Event ? (b && b.type ? (this.originalEvent = b, this.type = b.type, this.isDefaultPrevented = b.defaultPrevented || !1 === b.returnValue || b.getPreventDefault && b.getPreventDefault() ? av : k) : this.type = b, c && a.extend(this, c), this.timeStamp = b && b.timeStamp || a.now(), this[a.expando] = !0, u) : new a.Event(b, c)
    }, a.Event.prototype = {
        isDefaultPrevented: k,
        isPropagationStopped: k,
        isImmediatePropagationStopped: k,
        preventDefault: function() {
            var a = this.originalEvent;
            this.isDefaultPrevented = av, a && (a.preventDefault ? a.preventDefault() : a.returnValue = !1)
        },
        stopPropagation: function() {
            var a = this.originalEvent;
            this.isPropagationStopped = av, a && (a.stopPropagation && a.stopPropagation(), a.cancelBubble = !0)
        },
        stopImmediatePropagation: function() {
            this.isImmediatePropagationStopped = av, this.stopPropagation()
        }
    }, a.each({
        mouseenter: "mouseover",
        mouseleave: "mouseout"
    }, function(c, b) {
        a.event.special[c] = {
            delegateType: b,
            bindType: b,
            handle: function(c) {
                var e, d = c.relatedTarget,
                    f = c.handleObj;
                return d && (d === this || a.contains(this, d)) || (c.type = f.origType, e = f.handler.apply(this, arguments), c.type = b), e
            }
        }
    }), a.support.submitBubbles || (a.event.special.submit = {
        setup: function() {
            return !a.nodeName(this, "form") && (a.event.add(this, "click._submit keypress._submit", function(d) {
                var c = d.target,
                    b = a.nodeName(c, "input") || a.nodeName(c, "button") ? c.form : u;
                b && !a._data(b, "submitBubbles") && (a.event.add(b, "submit._submit", function(a) {
                    a._submit_bubble = !0
                }), a._data(b, "submitBubbles", !0))
            }), u)
        },
        postDispatch: function(b) {
            b._submit_bubble && (delete b._submit_bubble, this.parentNode && !b.isTrigger && a.event.simulate("submit", this.parentNode, b, !0))
        },
        teardown: function() {
            return !a.nodeName(this, "form") && (a.event.remove(this, "._submit"), u)
        }
    }), a.support.changeBubbles || (a.event.special.change = {
        setup: function() {
            return aq.test(this.nodeName) ? (("checkbox" === this.type || "radio" === this.type) && (a.event.add(this, "propertychange._change", function(a) {
                "checked" === a.originalEvent.propertyName && (this._just_changed = !0)
            }), a.event.add(this, "click._change", function(b) {
                this._just_changed && !b.isTrigger && (this._just_changed = !1), a.event.simulate("change", this, b, !0)
            })), !1) : (a.event.add(this, "beforeactivate._change", function(c) {
                var b = c.target;
                aq.test(b.nodeName) && !a._data(b, "changeBubbles") && (a.event.add(b, "change._change", function(b) {
                    !this.parentNode || b.isSimulated || b.isTrigger || a.event.simulate("change", this.parentNode, b, !0)
                }), a._data(b, "changeBubbles", !0))
            }), u)
        },
        handle: function(a) {
            var b = a.target;
            return this !== b || a.isSimulated || a.isTrigger || "radio" !== b.type && "checkbox" !== b.type ? a.handleObj.handler.apply(this, arguments) : u
        },
        teardown: function() {
            return a.event.remove(this, "._change"), !aq.test(this.nodeName)
        }
    }), a.support.focusinBubbles || a.each({
        focus: "focusin",
        blur: "focusout"
    }, function(c, b) {
        var d = 0,
            f = function(c) {
                a.event.simulate(b, c.target, a.event.fix(c), !0)
            };
        a.event.special[b] = {
            setup: function() {
                0 == d++ && e.addEventListener(c, f, !0)
            },
            teardown: function() {
                0 == --d && e.removeEventListener(c, f, !0)
            }
        }
    }), a.fn.extend({
        on: function(e, c, d, b, h) {
            var f, g;
            if ("object" == typeof e) {
                for (f in "string" != typeof c && (d = d || c, c = u), e) this.on(f, c, d, e[f], h);
                return this
            }
            if (null == d && null == b ? (b = c, d = c = u) : null == b && ("string" == typeof c ? (b = d, d = u) : (b = d, d = c, c = u)), !1 === b) b = k;
            else if (!b) return this;
            return 1 === h && (g = b, (b = function(b) {
                return a().off(b), g.apply(this, arguments)
            }).guid = g.guid || (g.guid = a.guid++)), this.each(function() {
                a.event.add(this, e, b, d, c)
            })
        },
        one: function(a, b, c, d) {
            return this.on(a, b, c, d, 1)
        },
        off: function(b, d, e) {
            var c, f;
            if (b && b.preventDefault && b.handleObj) return c = b.handleObj, a(b.delegateTarget).off(c.namespace ? c.origType + "." + c.namespace : c.origType, c.selector, c.handler), this;
            if ("object" == typeof b) {
                for (f in b) this.off(f, d, b[f]);
                return this
            }
            return (!1 === d || "function" == typeof d) && (e = d, d = u), !1 === e && (e = k), this.each(function() {
                a.event.remove(this, b, e, d)
            })
        },
        trigger: function(b, c) {
            return this.each(function() {
                a.event.trigger(b, c, this)
            })
        },
        triggerHandler: function(c, d) {
            var b = this[0];
            return b ? a.event.trigger(c, d, b, !0) : u
        }
    });
    var ax = /^.[^:#\[\.,]*$/,
        ay = /^(?:parents|prev(?:Until|All))/,
        az = a.expr.match.needsContext,
        aA = {
            children: !0,
            contents: !0,
            next: !0,
            prev: !0
        };

    function aB(a, b) {
        do a = a[b]; while (a && 1 !== a.nodeType) return a
    }

    function aC(c, b, d) {
        if (a.isFunction(b)) return a.grep(c, function(a, c) {
            return !!b.call(a, c, a) !== d
        });
        if (b.nodeType) return a.grep(c, function(a) {
            return a === b !== d
        });
        if ("string" == typeof b) {
            if (ax.test(b)) return a.filter(b, c, d);
            b = a.filter(b, c)
        }
        return a.grep(c, function(c) {
            return a.inArray(c, b) >= 0 !== d
        })
    }

    function A(c) {
        var b = B.split("|"),
            a = c.createDocumentFragment();
        if (a.createElement)
            for (; b.length;) a.createElement(b.pop());
        return a
    }
    a.fn.extend({
        find: function(b) {
            var d, c = [],
                e = this,
                f = e.length;
            if ("string" != typeof b) return this.pushStack(a(b).filter(function() {
                for (d = 0; f > d; d++)
                    if (a.contains(e[d], this)) return !0
            }));
            for (d = 0; f > d; d++) a.find(b, e[d], c);
            return (c = this.pushStack(f > 1 ? a.unique(c) : c)).selector = this.selector ? this.selector + " " + b : b, c
        },
        has: function(b) {
            var d, c = a(b, this),
                e = c.length;
            return this.filter(function() {
                for (d = 0; e > d; d++)
                    if (a.contains(this, c[d])) return !0
            })
        },
        not: function(a) {
            return this.pushStack(aC(this, a || [], !0))
        },
        filter: function(a) {
            return this.pushStack(aC(this, a || [], !1))
        },
        is: function(b) {
            return !!aC(this, "string" == typeof b && az.test(b) ? a(b) : b || [], !1).length
        },
        closest: function(c, f) {
            for (var b, e = 0, h = this.length, d = [], g = az.test(c) || "string" != typeof c ? a(c, f || this.context) : 0; h > e; e++)
                for (b = this[e]; b && b !== f; b = b.parentNode)
                    if (11 > b.nodeType && (g ? g.index(b) > -1 : 1 === b.nodeType && a.find.matchesSelector(b, c))) {
                        b = d.push(b);
                        break
                    }
            return this.pushStack(d.length > 1 ? a.unique(d) : d)
        },
        index: function(b) {
            return b ? "string" == typeof b ? a.inArray(this[0], a(b)) : a.inArray(b.jquery ? b[0] : b, this) : this[0] && this[0].parentNode ? this.first().prevAll().length : -1
        },
        add: function(b, c) {
            var d = "string" == typeof b ? a(b, c) : a.makeArray(b && b.nodeType ? [b] : b),
                e = a.merge(this.get(), d);
            return this.pushStack(a.unique(e))
        },
        addBack: function(a) {
            return this.add(null == a ? this.prevObject : this.prevObject.filter(a))
        }
    }), a.each({
        parent: function(b) {
            var a = b.parentNode;
            return a && 11 !== a.nodeType ? a : null
        },
        parents: function(b) {
            return a.dir(b, "parentNode")
        },
        parentsUntil: function(b, d, c) {
            return a.dir(b, "parentNode", c)
        },
        next: function(a) {
            return aB(a, "nextSibling")
        },
        prev: function(a) {
            return aB(a, "previousSibling")
        },
        nextAll: function(b) {
            return a.dir(b, "nextSibling")
        },
        prevAll: function(b) {
            return a.dir(b, "previousSibling")
        },
        nextUntil: function(b, d, c) {
            return a.dir(b, "nextSibling", c)
        },
        prevUntil: function(b, d, c) {
            return a.dir(b, "previousSibling", c)
        },
        siblings: function(b) {
            return a.sibling((b.parentNode || {}).firstChild, b)
        },
        children: function(b) {
            return a.sibling(b.firstChild)
        },
        contents: function(b) {
            return a.nodeName(b, "iframe") ? b.contentDocument || b.contentWindow.document : a.merge([], b.childNodes)
        }
    }, function(b, c) {
        a.fn[b] = function(f, e) {
            var d = a.map(this, c, f);
            return "Until" !== b.slice(-5) && (e = f), e && "string" == typeof e && (d = a.filter(e, d)), this.length > 1 && (aA[b] || (d = a.unique(d)), ay.test(b) && (d = d.reverse())), this.pushStack(d)
        }
    }), a.extend({
        filter: function(b, c, e) {
            var d = c[0];
            return e && (b = ":not(" + b + ")"), 1 === c.length && 1 === d.nodeType ? a.find.matchesSelector(d, b) ? [d] : [] : a.find.matches(b, a.grep(c, function(a) {
                return 1 === a.nodeType
            }))
        },
        dir: function(f, c, d) {
            for (var e = [], b = f[c]; b && 9 !== b.nodeType && (d === u || 1 !== b.nodeType || !a(b).is(d));) 1 === b.nodeType && e.push(b), b = b[c];
            return e
        },
        sibling: function(a, c) {
            for (var b = []; a; a = a.nextSibling) 1 === a.nodeType && a !== c && b.push(a);
            return b
        }
    });
    var B = "abbr|article|aside|audio|bdi|canvas|data|datalist|details|figcaption|figure|footer|header|hgroup|mark|meter|nav|output|progress|section|summary|time|video",
        aD = / jQuery\d+="(?:null|\d+)"/g,
        aE = RegExp("<(?:" + B + ")[\\s/>]", "i"),
        aF = /^\s+/,
        aG = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/gi,
        aH = /<([\w:]+)/,
        aI = /<tbody/i,
        aJ = /<|&#?\w+;/,
        aK = /<(?:script|style|link)/i,
        aL = /^(?:checkbox|radio)$/i,
        aM = /checked\s*(?:[^=]|=\s*.checked.)/i,
        aN = /^$|\/(?:java|ecma)script/i,
        aO = /^true\/(.*)/,
        aP = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g,
        c = {
            option: [1, "<select multiple='multiple'>", "</select>"],
            legend: [1, "<fieldset>", "</fieldset>"],
            area: [1, "<map>", "</map>"],
            param: [1, "<object>", "</object>"],
            thead: [1, "<table>", "</table>"],
            tr: [2, "<table><tbody>", "</tbody></table>"],
            col: [2, "<table><tbody></tbody><colgroup>", "</colgroup></table>"],
            td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],
            _default: a.support.htmlSerialize ? [0, "", ""] : [1, "X<div>", "</div>"]
        },
        aQ = A(e).appendChild(e.createElement("div"));

    function aR(b, c) {
        return a.nodeName(b, "table") && a.nodeName(1 === c.nodeType ? c : c.firstChild, "tr") ? b.getElementsByTagName("tbody")[0] || b.appendChild(b.ownerDocument.createElement("tbody")) : b
    }

    function aS(b) {
        return b.type = (null !== a.find.attr(b, "type")) + "/" + b.type, b
    }

    function aT(a) {
        var b = aO.exec(a.type);
        return b ? a.type = b[1] : a.removeAttribute("type"), a
    }

    function aU(e, c) {
        for (var d, b = 0; null != (d = e[b]); b++) a._data(d, "globalEval", !c || a._data(c[b], "globalEval"))
    }

    function aV(g, f) {
        if (1 === f.nodeType && a.hasData(g)) {
            var c, d, h, i = a._data(g),
                b = a._data(f, i),
                e = i.events;
            if (e)
                for (c in delete b.handle, b.events = {}, e)
                    for (d = 0, h = e[c].length; h > d; d++) a.event.add(f, c, e[c][d]);
            b.data && (b.data = a.extend({}, b.data))
        }
    }

    function aW(c, b) {
        var d, e, f;
        if (1 === b.nodeType) {
            if (d = b.nodeName.toLowerCase(), !a.support.noCloneEvent && b[a.expando]) {
                for (e in (f = a._data(b)).events) a.removeEvent(b, e, f.handle);
                b.removeAttribute(a.expando)
            }
            "script" === d && b.text !== c.text ? (aS(b).text = c.text, aT(b)) : "object" === d ? (b.parentNode && (b.outerHTML = c.outerHTML), a.support.html5Clone && c.innerHTML && !a.trim(b.innerHTML) && (b.innerHTML = c.innerHTML)) : "input" === d && aL.test(c.type) ? (b.defaultChecked = b.checked = c.checked, b.value !== c.value && (b.value = c.value)) : "option" === d ? b.defaultSelected = b.selected = c.defaultSelected : ("input" === d || "textarea" === d) && (b.defaultValue = c.defaultValue)
        }
    }

    function aX(b, c) {
        var f, e, g = 0,
            d = typeof b.getElementsByTagName !== J ? b.getElementsByTagName(c || "*") : typeof b.querySelectorAll !== J ? b.querySelectorAll(c || "*") : u;
        if (!d)
            for (d = [], f = b.childNodes || b; null != (e = f[g]); g++) !c || a.nodeName(e, c) ? d.push(e) : a.merge(d, aX(e, c));
        return c === u || c && a.nodeName(b, c) ? a.merge([b], d) : d
    }

    function aY(a) {
        aL.test(a.type) && (a.defaultChecked = a.checked)
    }
    c.optgroup = c.option, c.tbody = c.tfoot = c.colgroup = c.caption = c.thead, c.th = c.td, a.fn.extend({
        text: function(b) {
            return a.access(this, function(b) {
                return b === u ? a.text(this) : this.empty().append((this[0] && this[0].ownerDocument || e).createTextNode(b))
            }, null, b, arguments.length)
        },
        append: function() {
            return this.domManip(arguments, function(a) {
                (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) && aR(this, a).appendChild(a)
            })
        },
        prepend: function() {
            return this.domManip(arguments, function(a) {
                if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
                    var b = aR(this, a);
                    b.insertBefore(a, b.firstChild)
                }
            })
        },
        before: function() {
            return this.domManip(arguments, function(a) {
                this.parentNode && this.parentNode.insertBefore(a, this)
            })
        },
        after: function() {
            return this.domManip(arguments, function(a) {
                this.parentNode && this.parentNode.insertBefore(a, this.nextSibling)
            })
        },
        remove: function(c, d) {
            for (var b, f = c ? a.filter(c, this) : this, e = 0; null != (b = f[e]); e++) d || 1 !== b.nodeType || a.cleanData(aX(b)), b.parentNode && (d && a.contains(b.ownerDocument, b) && aU(aX(b, "script")), b.parentNode.removeChild(b));
            return this
        },
        empty: function() {
            for (var b, c = 0; null != (b = this[c]); c++) {
                for (1 === b.nodeType && a.cleanData(aX(b, !1)); b.firstChild;) b.removeChild(b.firstChild);
                b.options && a.nodeName(b, "select") && (b.options.length = 0)
            }
            return this
        },
        clone: function(b, c) {
            return b = null != b && b, c = null == c ? b : c, this.map(function() {
                return a.clone(this, b, c)
            })
        },
        html: function(b) {
            return a.access(this, function(b) {
                var d = this[0] || {},
                    e = 0,
                    f = this.length;
                if (b === u) return 1 === d.nodeType ? d.innerHTML.replace(aD, "") : u;
                if (!("string" != typeof b || aK.test(b) || !a.support.htmlSerialize && aE.test(b) || !a.support.leadingWhitespace && aF.test(b) || c[(aH.exec(b) || ["", ""])[1].toLowerCase()])) {
                    b = b.replace(aG, "<$1></$2>");
                    try {
                        for (; f > e; e++) d = this[e] || {}, 1 === d.nodeType && (a.cleanData(aX(d, !1)), d.innerHTML = b);
                        d = 0
                    } catch (g) {}
                }
                d && this.empty().append(b)
            }, null, b, arguments.length)
        },
        replaceWith: function() {
            var c = a.map(this, function(a) {
                    return [a.nextSibling, a.parentNode]
                }),
                b = 0;
            return this.domManip(arguments, function(f) {
                var d = c[b++],
                    e = c[b++];
                e && (d && d.parentNode !== e && (d = this.nextSibling), a(this).remove(), e.insertBefore(f, d))
            }, !0), b ? this : this.remove()
        },
        detach: function(a) {
            return this.remove(a, !0)
        },
        domManip: function(f, l, m) {
            f = N.apply([], f);
            var g, b, h, d, k, e, c = 0,
                i = this.length,
                p = this,
                n = i - 1,
                j = f[0],
                o = a.isFunction(j);
            if (o || !(1 >= i || "string" != typeof j || a.support.checkClone) && aM.test(j)) return this.each(function(a) {
                var b = p.eq(a);
                o && (f[0] = j.call(this, a, b.html())), b.domManip(f, l, m)
            });
            if (i && (g = (e = a.buildFragment(f, this[0].ownerDocument, !1, !m && this)).firstChild, 1 === e.childNodes.length && (e = g), g)) {
                for (h = (d = a.map(aX(e, "script"), aS)).length; i > c; c++) b = e, c !== n && (b = a.clone(b, !0, !0), h && a.merge(d, aX(b, "script"))), l.call(this[c], b, c);
                if (h)
                    for (k = d[d.length - 1].ownerDocument, a.map(d, aT), c = 0; h > c; c++) b = d[c], aN.test(b.type || "") && !a._data(b, "globalEval") && a.contains(k, b) && (b.src ? a._evalUrl(b.src) : a.globalEval((b.text || b.textContent || b.innerHTML || "").replace(aP, "")));
                e = g = null
            }
            return this
        }
    }), a.each({
        appendTo: "append",
        prependTo: "prepend",
        insertBefore: "before",
        insertAfter: "after",
        replaceAll: "replaceWith"
    }, function(b, c) {
        a.fn[b] = function(h) {
            for (var d, b = 0, e = [], f = a(h), g = f.length - 1; g >= b; b++) d = b === g ? this : this.clone(!0), a(f[b])[c](d), x.apply(e, d.get());
            return this.pushStack(e)
        }
    }), a.extend({
        clone: function(b, h, i) {
            var c, g, e, d, f, j = a.contains(b.ownerDocument, b);
            if (a.support.html5Clone || a.isXMLDoc(b) || !aE.test("<" + b.nodeName + ">") ? e = b.cloneNode(!0) : (aQ.innerHTML = b.outerHTML, aQ.removeChild(e = aQ.firstChild)), !(a.support.noCloneEvent && a.support.noCloneChecked || 1 !== b.nodeType && 11 !== b.nodeType || a.isXMLDoc(b)))
                for (c = aX(e), f = aX(b), d = 0; null != (g = f[d]); ++d) c[d] && aW(g, c[d]);
            if (h) {
                if (i)
                    for (f = f || aX(b), c = c || aX(e), d = 0; null != (g = f[d]); d++) aV(g, c[d]);
                else aV(b, e)
            }
            return (c = aX(e, "script")).length > 0 && aU(c, !j && aX(b, "script")), c = f = g = null, e
        },
        buildFragment: function(l, j, m, n) {
            for (var e, b, o, d, p, k, g, q = l.length, h = A(j), f = [], i = 0; q > i; i++)
                if ((b = l[i]) || 0 === b) {
                    if ("object" === a.type(b)) a.merge(f, b.nodeType ? [b] : b);
                    else if (aJ.test(b)) {
                        for (d = d || h.appendChild(j.createElement("div")), g = c[p = (aH.exec(b) || ["", ""])[1].toLowerCase()] || c._default, d.innerHTML = g[1] + b.replace(aG, "<$1></$2>") + g[2], e = g[0]; e--;) d = d.lastChild;
                        if (!a.support.leadingWhitespace && aF.test(b) && f.push(j.createTextNode(aF.exec(b)[0])), !a.support.tbody)
                            for (e = (b = "table" !== p || aI.test(b) ? "<table>" !== g[1] || aI.test(b) ? 0 : d : d.firstChild) && b.childNodes.length; e--;) a.nodeName(k = b.childNodes[e], "tbody") && !k.childNodes.length && b.removeChild(k);
                        for (a.merge(f, d.childNodes), d.textContent = ""; d.firstChild;) d.removeChild(d.firstChild);
                        d = h.lastChild
                    } else f.push(j.createTextNode(b))
                }
            for (d && h.removeChild(d), a.support.appendChecked || a.grep(aX(f, "input"), aY), i = 0; b = f[i++];)
                if ((!n || -1 === a.inArray(b, n)) && (o = a.contains(b.ownerDocument, b), d = aX(h.appendChild(b), "script"), o && aU(d), m))
                    for (e = 0; b = d[e++];) aN.test(b.type || "") && m.push(b);
            return d = null, h
        },
        cleanData: function(j, k) {
            for (var b, d, c, e, i = 0, f = a.expando, g = a.cache, l = a.support.deleteExpando, m = a.event.special; null != (b = j[i]); i++)
                if ((k || a.acceptData(b)) && (e = (c = b[f]) && g[c])) {
                    if (e.events)
                        for (d in e.events) m[d] ? a.event.remove(b, d) : a.removeEvent(b, d, e.handle);
                    g[c] && (delete g[c], l ? delete b[f] : typeof b.removeAttribute !== J ? b.removeAttribute(f) : b[f] = null, h.push(c))
                }
        },
        _evalUrl: function(b) {
            return a.ajax({
                url: b,
                type: "GET",
                dataType: "script",
                async: !1,
                global: !1,
                throws: !0
            })
        }
    }), a.fn.extend({
        wrapAll: function(b) {
            if (a.isFunction(b)) return this.each(function(c) {
                a(this).wrapAll(b.call(this, c))
            });
            if (this[0]) {
                var c = a(b, this[0].ownerDocument).eq(0).clone(!0);
                this[0].parentNode && c.insertBefore(this[0]), c.map(function() {
                    for (var a = this; a.firstChild && 1 === a.firstChild.nodeType;) a = a.firstChild;
                    return a
                }).append(this)
            }
            return this
        },
        wrapInner: function(b) {
            return a.isFunction(b) ? this.each(function(c) {
                a(this).wrapInner(b.call(this, c))
            }) : this.each(function() {
                var c = a(this),
                    d = c.contents();
                d.length ? d.wrapAll(b) : c.append(b)
            })
        },
        wrap: function(b) {
            var c = a.isFunction(b);
            return this.each(function(d) {
                a(this).wrapAll(c ? b.call(this, d) : b)
            })
        },
        unwrap: function() {
            return this.parent().each(function() {
                a.nodeName(this, "body") || a(this).replaceWith(this.childNodes)
            }).end()
        }
    });
    var aZ, q, r, a$ = /alpha\([^)]*\)/i,
        a_ = /opacity\s*=\s*([^)]*)/,
        a0 = /^(top|right|bottom|left)$/,
        a1 = /^(none|table(?!-c[ea]).+)/,
        a2 = /^margin/,
        a3 = RegExp("^(" + i + ")(.*)$", "i"),
        a4 = RegExp("^(" + i + ")(?!px)[a-z%]+$", "i"),
        a5 = RegExp("^([+-])=(" + i + ")", "i"),
        a6 = {
            BODY: "block"
        },
        a7 = {
            position: "absolute",
            visibility: "hidden",
            display: "block"
        },
        a8 = {
            letterSpacing: 0,
            fontWeight: 400
        },
        a9 = ["Top", "Right", "Bottom", "Left"],
        ba = ["Webkit", "O", "Moz", "ms"];

    function bb(b, a) {
        if (a in b) return a;
        for (var d = a.charAt(0).toUpperCase() + a.slice(1), e = a, c = ba.length; c--;)
            if ((a = ba[c] + d) in b) return a;
        return e
    }

    function bc(b, c) {
        return b = c || b, "none" === a.css(b, "display") || !a.contains(b.ownerDocument, b)
    }

    function bd(f, g) {
        for (var d, b, h, e = [], c = 0, i = f.length; i > c; c++)(b = f[c]).style && (e[c] = a._data(b, "olddisplay"), d = b.style.display, g ? (e[c] || "none" !== d || (b.style.display = ""), "" === b.style.display && bc(b) && (e[c] = a._data(b, "olddisplay", bh(b.nodeName)))) : e[c] || (h = bc(b), (d && "none" !== d || !h) && a._data(b, "olddisplay", h ? d : a.css(b, "display"))));
        for (c = 0; i > c; c++)(b = f[c]).style && (g && "none" !== b.style.display && "" !== b.style.display || (b.style.display = g ? e[c] || "" : "none"));
        return f
    }

    function be(d, b, c) {
        var a = a3.exec(b);
        return a ? Math.max(0, a[1] - (c || 0)) + (a[2] || "px") : b
    }

    function bf(e, h, c, g, f) {
        for (var b = c === (g ? "border" : "content") ? 4 : "width" === h ? 1 : 0, d = 0; 4 > b; b += 2) "margin" === c && (d += a.css(e, c + a9[b], !0, f)), g ? ("content" === c && (d -= a.css(e, "padding" + a9[b], !0, f)), "margin" !== c && (d -= a.css(e, "border" + a9[b] + "Width", !0, f))) : (d += a.css(e, "padding" + a9[b], !0, f), "padding" !== c && (d += a.css(e, "border" + a9[b] + "Width", !0, f)));
        return d
    }

    function bg(c, d, h) {
        var f = !0,
            b = "width" === d ? c.offsetWidth : c.offsetHeight,
            e = q(c),
            g = a.support.boxSizing && "border-box" === a.css(c, "boxSizing", !1, e);
        if (0 >= b || null == b) {
            if ((0 > (b = r(c, d, e)) || null == b) && (b = c.style[d]), a4.test(b)) return b;
            f = g && (a.support.boxSizingReliable || b === c.style[d]), b = parseFloat(b) || 0
        }
        return b + bf(c, d, h || (g ? "border" : "content"), f, e) + "px"
    }

    function bh(d) {
        var c = e,
            b = a6[d];
        return b || ("none" !== (b = bi(d, c)) && b || ((c = ((aZ = (aZ || a("<iframe frameborder='0' width='0' height='0'/>").css("cssText", "display:block !important")).appendTo(c.documentElement))[0].contentWindow || aZ[0].contentDocument).document).write("<!doctype html><html><body>"), c.close(), b = bi(d, c), aZ.detach()), a6[d] = b), b
    }

    function bi(d, b) {
        var c = a(b.createElement(d)).appendTo(b.body),
            e = a.css(c[0], "display");
        return c.remove(), e
    }
    a.fn.extend({
        css: function(b, c) {
            return a.access(this, function(c, b, e) {
                var f, g, h = {},
                    d = 0;
                if (a.isArray(b)) {
                    for (g = q(c), f = b.length; f > d; d++) h[b[d]] = a.css(c, b[d], !1, g);
                    return h
                }
                return e !== u ? a.style(c, b, e) : a.css(c, b)
            }, b, c, arguments.length > 1)
        },
        show: function() {
            return bd(this, !0)
        },
        hide: function() {
            return bd(this)
        },
        toggle: function(b) {
            return "boolean" == typeof b ? b ? this.show() : this.hide() : this.each(function() {
                bc(this) ? a(this).show() : a(this).hide()
            })
        }
    }), a.extend({
        cssHooks: {
            opacity: {
                get: function(b, c) {
                    if (c) {
                        var a = r(b, "opacity");
                        return "" === a ? "1" : a
                    }
                }
            }
        },
        cssNumber: {
            columnCount: !0,
            fillOpacity: !0,
            fontWeight: !0,
            lineHeight: !0,
            opacity: !0,
            order: !0,
            orphans: !0,
            widows: !0,
            zIndex: !0,
            zoom: !0
        },
        cssProps: {
            float: a.support.cssFloat ? "cssFloat" : "styleFloat"
        },
        style: function(c, d, b, j) {
            if (c && 3 !== c.nodeType && 8 !== c.nodeType && c.style) {
                var f, h, e, g = a.camelCase(d),
                    i = c.style;
                if (d = a.cssProps[g] || (a.cssProps[g] = bb(i, g)), e = a.cssHooks[d] || a.cssHooks[g], b === u) return e && "get" in e && (f = e.get(c, !1, j)) !== u ? f : i[d];
                if ("string" == (h = typeof b) && (f = a5.exec(b)) && (b = (f[1] + 1) * f[2] + parseFloat(a.css(c, d)), h = "number"), !(null == b || "number" === h && isNaN(b) || ("number" !== h || a.cssNumber[g] || (b += "px"), a.support.clearCloneStyle || "" !== b || 0 !== d.indexOf("background") || (i[d] = "inherit"), e && "set" in e && (b = e.set(c, b, j)) === u))) try {
                    i[d] = b
                } catch (k) {}
            }
        },
        css: function(g, c, d, i) {
            var h, b, e, f = a.camelCase(c);
            return c = a.cssProps[f] || (a.cssProps[f] = bb(g.style, f)), e = a.cssHooks[c] || a.cssHooks[f], e && "get" in e && (b = e.get(g, !0, d)), b === u && (b = r(g, c, i)), "normal" === b && c in a8 && (b = a8[c]), "" === d || d ? (h = parseFloat(b), !0 === d || a.isNumeric(h) ? h || 0 : b) : b
        }
    }), b.getComputedStyle ? (q = function(a) {
        return b.getComputedStyle(a, null)
    }, r = function(d, f, j) {
        var g, h, i, e = j || q(d),
            c = e ? e.getPropertyValue(f) || e[f] : u,
            b = d.style;
        return e && ("" !== c || a.contains(d.ownerDocument, d) || (c = a.style(d, f)), a4.test(c) && a2.test(f) && (g = b.width, h = b.minWidth, i = b.maxWidth, b.minWidth = b.maxWidth = b.width = c, c = e.width, b.width = g, b.minWidth = h, b.maxWidth = i)), c
    }) : e.documentElement.currentStyle && (q = function(a) {
        return a.currentStyle
    }, r = function(d, c, i) {
        var g, e, f, h = i || q(d),
            a = h ? h[c] : u,
            b = d.style;
        return null == a && b && b[c] && (a = b[c]), a4.test(a) && !a0.test(c) && (g = b.left, (f = (e = d.runtimeStyle) && e.left) && (e.left = d.currentStyle.left), b.left = "fontSize" === c ? "1em" : a, a = b.pixelLeft + "px", b.left = g, f && (e.left = f)), "" === a ? "auto" : a
    }), a.each(["height", "width"], function(c, b) {
        a.cssHooks[b] = {
            get: function(c, d, e) {
                return d ? 0 === c.offsetWidth && a1.test(a.css(c, "display")) ? a.swap(c, a7, function() {
                    return bg(c, b, e)
                }) : bg(c, b, e) : u
            },
            set: function(c, f, d) {
                var e = d && q(c);
                return be(c, f, d ? bf(c, b, d, a.support.boxSizing && "border-box" === a.css(c, "boxSizing", !1, e), e) : 0)
            }
        }
    }), a.support.opacity || (a.cssHooks.opacity = {
        get: function(a, b) {
            return a_.test((b && a.currentStyle ? a.currentStyle.filter : a.style.filter) || "") ? .01 * parseFloat(RegExp.$1) + "" : b ? "1" : ""
        },
        set: function(f, b) {
            var c = f.style,
                d = f.currentStyle,
                g = a.isNumeric(b) ? "alpha(opacity=" + 100 * b + ")" : "",
                e = d && d.filter || c.filter || "";
            c.zoom = 1, (b >= 1 || "" === b) && "" === a.trim(e.replace(a$, "")) && c.removeAttribute && (c.removeAttribute("filter"), "" === b || d && !d.filter) || (c.filter = a$.test(e) ? e.replace(a$, g) : e + " " + g)
        }
    }), a(function() {
        a.support.reliableMarginRight || (a.cssHooks.marginRight = {
            get: function(b, c) {
                return c ? a.swap(b, {
                    display: "inline-block"
                }, r, [b, "marginRight"]) : u
            }
        }), !a.support.pixelPosition && a.fn.position && a.each(["top", "left"], function(c, b) {
            a.cssHooks[b] = {
                get: function(d, c) {
                    return c ? (c = r(d, b), a4.test(c) ? a(d).position()[b] + "px" : c) : u
                }
            }
        })
    }), a.expr && a.expr.filters && (a.expr.filters.hidden = function(b) {
        return 0 >= b.offsetWidth && 0 >= b.offsetHeight || !a.support.reliableHiddenOffsets && "none" === (b.style && b.style.display || a.css(b, "display"))
    }, a.expr.filters.visible = function(b) {
        return !a.expr.filters.hidden(b)
    }), a.each({
        margin: "",
        padding: "",
        border: "Width"
    }, function(b, c) {
        a.cssHooks[b + c] = {
            expand: function(d) {
                for (var a = 0, f = {}, e = "string" == typeof d ? d.split(" ") : [d]; 4 > a; a++) f[b + a9[a] + c] = e[a] || e[a - 2] || e[0];
                return f
            }
        }, a2.test(b) || (a.cssHooks[b + c].set = be)
    });
    var bj = /%20/g,
        bk = /\[\]$/,
        bl = /\r?\n/g,
        bm = /^(?:submit|button|image|reset|file)$/i,
        bn = /^(?:input|select|textarea|keygen)/i;

    function bo(d, b, e, f) {
        var c;
        if (a.isArray(b)) a.each(b, function(b, a) {
            e || bk.test(d) ? f(d, a) : bo(d + "[" + ("object" == typeof a ? b : "") + "]", a, e, f)
        });
        else if (e || "object" !== a.type(b)) f(d, b);
        else
            for (c in b) bo(d + "[" + c + "]", b[c], e, f)
    }
    a.fn.extend({
        serialize: function() {
            return a.param(this.serializeArray())
        },
        serializeArray: function() {
            return this.map(function() {
                var b = a.prop(this, "elements");
                return b ? a.makeArray(b) : this
            }).filter(function() {
                var b = this.type;
                return this.name && !a(this).is(":disabled") && bn.test(this.nodeName) && !bm.test(b) && (this.checked || !aL.test(b))
            }).map(function(d, c) {
                var b = a(this).val();
                return null == b ? null : a.isArray(b) ? a.map(b, function(a) {
                    return {
                        name: c.name,
                        value: a.replace(bl, "\r\n")
                    }
                }) : {
                    name: c.name,
                    value: b.replace(bl, "\r\n")
                }
            }).get()
        }
    }), a.param = function(b, c) {
        var d, e = [],
            f = function(c, b) {
                b = a.isFunction(b) ? b() : null == b ? "" : b, e[e.length] = encodeURIComponent(c) + "=" + encodeURIComponent(b)
            };
        if (c === u && (c = a.ajaxSettings && a.ajaxSettings.traditional), a.isArray(b) || b.jquery && !a.isPlainObject(b)) a.each(b, function() {
            f(this.name, this.value)
        });
        else
            for (d in b) bo(d, b[d], c, f);
        return e.join("&").replace(bj, "+")
    }, a.each("blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu".split(" "), function(c, b) {
        a.fn[b] = function(a, c) {
            return arguments.length > 0 ? this.on(b, null, a, c) : this.trigger(b)
        }
    }), a.fn.extend({
        hover: function(a, b) {
            return this.mouseenter(a).mouseleave(b || a)
        },
        bind: function(a, b, c) {
            return this.on(a, null, b, c)
        },
        unbind: function(a, b) {
            return this.off(a, null, b)
        },
        delegate: function(a, b, c, d) {
            return this.on(b, a, c, d)
        },
        undelegate: function(a, b, c) {
            return 1 === arguments.length ? this.off(a, "**") : this.off(b, a || "**", c)
        }
    });
    var s, f, bp = a.now(),
        bq = /\?/,
        br = /#.*$/,
        bs = /([?&])_=[^&]*/,
        bt = /^(.*?):[ \t]*([^\r\n]*)\r?$/gm,
        bu = /^(?:GET|HEAD)$/,
        bv = /^\/\//,
        C = /^([\w.+-]+:)(?:\/\/([^\/?#:]*)(?::(\d+)|)|)/,
        bw = a.fn.load,
        D = {},
        E = {},
        F = "*/".concat("*");
    try {
        f = w.href
    } catch (bx) {
        (f = e.createElement("a")).href = "", f = f.href
    }

    function t(b) {
        return function(d, e) {
            "string" != typeof d && (e = d, d = "*");
            var c, f = 0,
                g = d.toLowerCase().match(S) || [];
            if (a.isFunction(e))
                for (; c = g[f++];) "+" === c[0] ? (b[c = c.slice(1) || "*"] = b[c] || []).unshift(e) : (b[c] = b[c] || []).push(e)
        }
    }

    function by(c, d, f, g) {
        var e = {},
            h = c === E;

        function b(i) {
            var j;
            return e[i] = !0, a.each(c[i] || [], function(i, c) {
                var a = c(d, f, g);
                return "string" != typeof a || h || e[a] ? h ? !(j = a) : u : (d.dataTypes.unshift(a), b(a), !1)
            }), j
        }
        return b(d.dataTypes[0]) || !e["*"] && b("*")
    }

    function bz(d, e) {
        var c, b, f = a.ajaxSettings.flatOptions || {};
        for (b in e) e[b] !== u && ((f[b] ? d : c || (c = {}))[b] = e[b]);
        return c && a.extend(!0, d, c), d
    }
    s = C.exec(f.toLowerCase()) || [], a.fn.load = function(b, c, e) {
        if ("string" != typeof b && bw) return bw.apply(this, arguments);
        var g, i, f, h = this,
            d = b.indexOf(" ");
        return d >= 0 && (g = b.slice(d, b.length), b = b.slice(0, d)), a.isFunction(c) ? (e = c, c = u) : c && "object" == typeof c && (f = "POST"), h.length > 0 && a.ajax({
            url: b,
            type: f,
            dataType: "html",
            data: c
        }).done(function(b) {
            i = arguments, h.html(g ? a("<div>").append(a.parseHTML(b)).find(g) : b)
        }).complete(e && function(a, b) {
            h.each(e, i || [a.responseText, b, a])
        }), this
    }, a.each(["ajaxStart", "ajaxStop", "ajaxComplete", "ajaxError", "ajaxSuccess", "ajaxSend"], function(c, b) {
        a.fn[b] = function(a) {
            return this.on(b, a)
        }
    }), a.extend({
        active: 0,
        lastModified: {},
        etag: {},
        ajaxSettings: {
            url: f,
            type: "GET",
            isLocal: /^(?:about|app|app-storage|.+-extension|file|res|widget):$/.test(s[1]),
            global: !0,
            processData: !0,
            async: !0,
            contentType: "application/x-www-form-urlencoded; charset=UTF-8",
            accepts: {
                "*": F,
                text: "text/plain",
                html: "text/html",
                xml: "application/xml, text/xml",
                json: "application/json, text/javascript"
            },
            contents: {
                xml: /xml/,
                html: /html/,
                json: /json/
            },
            responseFields: {
                xml: "responseXML",
                text: "responseText",
                json: "responseJSON"
            },
            converters: {
                "* text": String,
                "text html": !0,
                "text json": a.parseJSON,
                "text xml": a.parseXML
            },
            flatOptions: {
                url: !0,
                context: !0
            }
        },
        ajaxSetup: function(b, c) {
            return c ? bz(bz(b, a.ajaxSettings), c) : bz(a.ajaxSettings, b)
        },
        ajaxPrefilter: t(D),
        ajaxTransport: t(E),
        ajax: function(i, e) {
            "object" == typeof i && (e = i, i = u), e = e || {};
            var g, h, d, w, o, l, m, x, b = a.ajaxSetup({}, e),
                j = b.context || b,
                p = b.context && (j.nodeType || j.jquery) ? a(j) : a.event,
                q = a.Deferred(),
                r = a.Callbacks("once memory"),
                y = b.statusCode || {},
                t = {},
                z = {},
                k = 0,
                v = "canceled",
                c = {
                    readyState: 0,
                    getResponseHeader: function(b) {
                        var a;
                        if (2 === k) {
                            if (!x)
                                for (x = {}; a = bt.exec(w);) x[a[1].toLowerCase()] = a[2];
                            a = x[b.toLowerCase()]
                        }
                        return null == a ? null : a
                    },
                    getAllResponseHeaders: function() {
                        return 2 === k ? w : null
                    },
                    setRequestHeader: function(a, c) {
                        var b = a.toLowerCase();
                        return k || (t[a = z[b] = z[b] || a] = c), this
                    },
                    overrideMimeType: function(a) {
                        return k || (b.mimeType = a), this
                    },
                    statusCode: function(a) {
                        var b;
                        if (a) {
                            if (2 > k)
                                for (b in a) y[b] = [y[b], a[b]];
                            else c.always(a[c.status])
                        }
                        return this
                    },
                    abort: function(b) {
                        var a = b || v;
                        return m && m.abort(a), A(0, a), this
                    }
                };
            if (q.promise(c).complete = r.add, c.success = c.done, c.error = c.fail, b.url = ((i || b.url || f) + "").replace(br, "").replace(bv, s[1] + "//"), b.type = e.method || e.type || b.method || b.type, b.dataTypes = a.trim(b.dataType || "*").toLowerCase().match(S) || [""], null == b.crossDomain && (g = C.exec(b.url.toLowerCase()), b.crossDomain = !(!g || g[1] === s[1] && g[2] === s[2] && (g[3] || ("http:" === g[1] ? "80" : "443")) === (s[3] || ("http:" === s[1] ? "80" : "443")))), b.data && b.processData && "string" != typeof b.data && (b.data = a.param(b.data, b.traditional)), by(D, b, e, c), 2 === k) return c;
            for (h in (l = b.global) && 0 == a.active++ && a.event.trigger("ajaxStart"), b.type = b.type.toUpperCase(), b.hasContent = !bu.test(b.type), d = b.url, b.hasContent || (b.data && (d = b.url += (bq.test(d) ? "&" : "?") + b.data, delete b.data), !1 === b.cache && (b.url = bs.test(d) ? d.replace(bs, "$1_=" + bp++) : d + (bq.test(d) ? "&" : "?") + "_=" + bp++)), b.ifModified && (a.lastModified[d] && c.setRequestHeader("If-Modified-Since", a.lastModified[d]), a.etag[d] && c.setRequestHeader("If-None-Match", a.etag[d])), (b.data && b.hasContent && !1 !== b.contentType || e.contentType) && c.setRequestHeader("Content-Type", b.contentType), c.setRequestHeader("Accept", b.dataTypes[0] && b.accepts[b.dataTypes[0]] ? b.accepts[b.dataTypes[0]] + ("*" !== b.dataTypes[0] ? ", " + F + "; q=0.01" : "") : b.accepts["*"]), b.headers) c.setRequestHeader(h, b.headers[h]);
            if (b.beforeSend && (!1 === b.beforeSend.call(j, c, b) || 2 === k)) return c.abort();
            for (h in v = "abort", {
                    success: 1,
                    error: 1,
                    complete: 1
                }) c[h](b[h]);
            if (m = by(E, b, e, c)) {
                c.readyState = 1, l && p.trigger("ajaxSend", [c, b]), b.async && b.timeout > 0 && (o = setTimeout(function() {
                    c.abort("timeout")
                }, b.timeout));
                try {
                    k = 1, m.send(t, A)
                } catch (n) {
                    if (!(2 > k)) throw n;
                    A(-1, n)
                }
            } else A(-1, "No Transport");

            function A(e, t, v, x) {
                var g, s, i, h, n, f = t;
                2 !== k && (k = 2, o && clearTimeout(o), m = u, w = x || "", c.readyState = e > 0 ? 4 : 0, g = e >= 200 && 300 > e || 304 === e, v && (h = function(d, i, f) {
                    for (var g, e, b, c, h = d.contents, a = d.dataTypes;
                        "*" === a[0];) a.shift(), e === u && (e = d.mimeType || i.getResponseHeader("Content-Type"));
                    if (e) {
                        for (c in h)
                            if (h[c] && h[c].test(e)) {
                                a.unshift(c);
                                break
                            }
                    }
                    if (a[0] in f) b = a[0];
                    else {
                        for (c in f) {
                            if (!a[0] || d.converters[c + " " + a[0]]) {
                                b = c;
                                break
                            }
                            g || (g = c)
                        }
                        b = b || g
                    }
                    return b ? (b !== a[0] && a.unshift(b), f[b]) : u
                }(b, c, v)), h = function(c, d, j, k) {
                    var h, a, b, g, e, f = {},
                        i = c.dataTypes.slice();
                    if (i[1])
                        for (b in c.converters) f[b.toLowerCase()] = c.converters[b];
                    for (a = i.shift(); a;)
                        if (c.responseFields[a] && (j[c.responseFields[a]] = d), !e && k && c.dataFilter && (d = c.dataFilter(d, c.dataType)), e = a, a = i.shift()) {
                            if ("*" === a) a = e;
                            else if ("*" !== e && e !== a) {
                                if (!(b = f[e + " " + a] || f["* " + a])) {
                                    for (h in f)
                                        if ((g = h.split(" "))[1] === a && (b = f[e + " " + g[0]] || f["* " + g[0]])) {
                                            !0 === b ? b = f[h] : !0 !== f[h] && (a = g[0], i.unshift(g[1]));
                                            break
                                        }
                                }
                                if (!0 !== b) {
                                    if (b && c.throws) d = b(d);
                                    else try {
                                        d = b(d)
                                    } catch (l) {
                                        return {
                                            state: "parsererror",
                                            error: b ? l : "No conversion from " + e + " to " + a
                                        }
                                    }
                                }
                            }
                        }
                    return {
                        state: "success",
                        data: d
                    }
                }(b, h, c, g), g ? (b.ifModified && ((n = c.getResponseHeader("Last-Modified")) && (a.lastModified[d] = n), (n = c.getResponseHeader("etag")) && (a.etag[d] = n)), 204 === e || "HEAD" === b.type ? f = "nocontent" : 304 === e ? f = "notmodified" : (f = h.state, s = h.data, i = h.error, g = !i)) : (i = f, (e || !f) && (f = "error", 0 > e && (e = 0))), c.status = e, c.statusText = (t || f) + "", g ? q.resolveWith(j, [s, f, c]) : q.rejectWith(j, [c, f, i]), c.statusCode(y), y = u, l && p.trigger(g ? "ajaxSuccess" : "ajaxError", [c, b, g ? s : i]), r.fireWith(j, [c, f]), l && (p.trigger("ajaxComplete", [c, b]), --a.active || a.event.trigger("ajaxStop")))
            }
            return c
        },
        getJSON: function(b, c, d) {
            return a.get(b, c, d, "json")
        },
        getScript: function(b, c) {
            return a.get(b, u, c, "script")
        }
    }), a.each(["get", "post"], function(c, b) {
        a[b] = function(f, c, d, e) {
            return a.isFunction(c) && (e = e || d, d = c, c = u), a.ajax({
                url: f,
                type: b,
                dataType: e,
                data: c,
                success: d
            })
        }
    }), a.ajaxSetup({
        accepts: {
            script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"
        },
        contents: {
            script: /(?:java|ecma)script/
        },
        converters: {
            "text script": function(b) {
                return a.globalEval(b), b
            }
        }
    }), a.ajaxPrefilter("script", function(a) {
        a.cache === u && (a.cache = !1), a.crossDomain && (a.type = "GET", a.global = !1)
    }), a.ajaxTransport("script", function(b) {
        if (b.crossDomain) {
            var c, d = e.head || a("head")[0] || e.documentElement;
            return {
                send: function(a, f) {
                    (c = e.createElement("script")).async = !0, b.scriptCharset && (c.charset = b.scriptCharset), c.src = b.url, c.onload = c.onreadystatechange = function(b, a) {
                        (a || !c.readyState || /loaded|complete/.test(c.readyState)) && (c.onload = c.onreadystatechange = null, c.parentNode && c.parentNode.removeChild(c), c = null, a || f(200, "success"))
                    }, d.insertBefore(c, d.firstChild)
                },
                abort: function() {
                    c && c.onload(u, !0)
                }
            }
        }
    });
    var bA = [],
        bB = /(=)\?(?=&|$)|\?\?/;
    a.ajaxSetup({
        jsonp: "callback",
        jsonpCallback: function() {
            var b = bA.pop() || a.expando + "_" + bp++;
            return this[b] = !0, b
        }
    }), a.ajaxPrefilter("json jsonp", function(c, h, f) {
        var d, g, i, e = !1 !== c.jsonp && (bB.test(c.url) ? "url" : "string" == typeof c.data && !(c.contentType || "").indexOf("application/x-www-form-urlencoded") && bB.test(c.data) && "data");
        return e || "jsonp" === c.dataTypes[0] ? (d = c.jsonpCallback = a.isFunction(c.jsonpCallback) ? c.jsonpCallback() : c.jsonpCallback, e ? c[e] = c[e].replace(bB, "$1" + d) : !1 !== c.jsonp && (c.url += (bq.test(c.url) ? "&" : "?") + c.jsonp + "=" + d), c.converters["script json"] = function() {
            return i || a.error(d + " was not called"), i[0]
        }, c.dataTypes[0] = "json", g = b[d], b[d] = function() {
            i = arguments
        }, f.always(function() {
            b[d] = g, c[d] && (c.jsonpCallback = h.jsonpCallback, bA.push(d)), i && a.isFunction(g) && g(i[0]), i = g = u
        }), "script") : u
    });
    var bC, g, bD = 0,
        bE = b.ActiveXObject && function() {
            var a;
            for (a in bC) bC[a](u, !0)
        };

    function G() {
        try {
            return new b.XMLHttpRequest
        } catch (a) {}
    }
    a.ajaxSettings.xhr = b.ActiveXObject ? function() {
        return !this.isLocal && G() || function() {
            try {
                return new b.ActiveXObject("Microsoft.XMLHTTP")
            } catch (a) {}
        }()
    } : G, g = a.ajaxSettings.xhr(), a.support.cors = !!g && "withCredentials" in g, g = a.support.ajax = !!g, g && a.ajaxTransport(function(c) {
        if (!c.crossDomain || a.support.cors) {
            var d;
            return {
                send: function(g, i) {
                    var h, f, e = c.xhr();
                    if (c.username ? e.open(c.type, c.url, c.async, c.username, c.password) : e.open(c.type, c.url, c.async), c.xhrFields)
                        for (f in c.xhrFields) e[f] = c.xhrFields[f];
                    c.mimeType && e.overrideMimeType && e.overrideMimeType(c.mimeType), c.crossDomain || g["X-Requested-With"] || (g["X-Requested-With"] = "XMLHttpRequest");
                    try {
                        for (f in g) e.setRequestHeader(f, g[f])
                    } catch (j) {}
                    e.send(c.hasContent && c.data || null), d = function(m, g) {
                        var b, k, j, f;
                        try {
                            if (d && (g || 4 === e.readyState)) {
                                if (d = u, h && (e.onreadystatechange = a.noop, bE && delete bC[h]), g) 4 !== e.readyState && e.abort();
                                else {
                                    f = {}, b = e.status, k = e.getAllResponseHeaders(), "string" == typeof e.responseText && (f.text = e.responseText);
                                    try {
                                        j = e.statusText
                                    } catch (n) {
                                        j = ""
                                    }
                                    b || !c.isLocal || c.crossDomain ? 1223 === b && (b = 204) : b = f.text ? 200 : 404
                                }
                            }
                        } catch (l) {
                            g || i(-1, l)
                        }
                        f && i(b, j, f, k)
                    }, c.async ? 4 === e.readyState ? setTimeout(d) : (h = ++bD, bE && (bC || (bC = {}, a(b).unload(bE)), bC[h] = d), e.onreadystatechange = d) : d()
                },
                abort: function() {
                    d && d(u, !0)
                }
            }
        }
    });
    var bF, bG, bH = /^(?:toggle|show|hide)$/,
        bI = RegExp("^(?:([+-])=|)(" + i + ")([a-z%]*)$", "i"),
        bJ = /queueHooks$/,
        bK = [function(c, g, l) {
            var b, k, m, h, i, o, j = this,
                n = {},
                e = c.style,
                f = c.nodeType && bc(c),
                d = a._data(c, "fxshow");
            for (b in l.queue || (null == (i = a._queueHooks(c, "fx")).unqueued && (i.unqueued = 0, o = i.empty.fire, i.empty.fire = function() {
                    i.unqueued || o()
                }), i.unqueued++, j.always(function() {
                    j.always(function() {
                        i.unqueued--, a.queue(c, "fx").length || i.empty.fire()
                    })
                })), 1 === c.nodeType && ("height" in g || "width" in g) && (l.overflow = [e.overflow, e.overflowX, e.overflowY], "inline" === a.css(c, "display") && "none" === a.css(c, "float") && (a.support.inlineBlockNeedsLayout && "inline" !== bh(c.nodeName) ? e.zoom = 1 : e.display = "inline-block")), l.overflow && (e.overflow = "hidden", a.support.shrinkWrapBlocks || j.always(function() {
                    e.overflow = l.overflow[0], e.overflowX = l.overflow[1], e.overflowY = l.overflow[2]
                })), g)
                if (k = g[b], bH.exec(k)) {
                    if (delete g[b], m = m || "toggle" === k, k === (f ? "hide" : "show")) continue;
                    n[b] = d && d[b] || a.style(c, b)
                }
            if (!a.isEmptyObject(n))
                for (b in d ? "hidden" in d && (f = d.hidden) : d = a._data(c, "fxshow", {}), m && (d.hidden = !f), f ? a(c).show() : j.done(function() {
                        a(c).hide()
                    }), j.done(function() {
                        var b;
                        for (b in a._removeData(c, "fxshow"), n) a.style(c, b, n[b])
                    }), n) h = bN(f ? d[b] : 0, b, j), b in d || (d[b] = h.start, f && (h.end = h.start, h.start = "width" === b || "height" === b ? 1 : 0))
        }],
        bL = {
            "*": [function(f, i) {
                var d = this.createTween(f, i),
                    h = d.cur(),
                    b = bI.exec(i),
                    e = b && b[3] || (a.cssNumber[f] ? "" : "px"),
                    c = (a.cssNumber[f] || "px" !== e && +h) && bI.exec(a.css(d.elem, f)),
                    g = 1,
                    j = 20;
                if (c && c[3] !== e) {
                    e = e || c[3], b = b || [], c = +h || 1;
                    do c /= g = g || ".5", a.style(d.elem, f, c + e); while (g !== (g = d.cur() / h) && 1 !== g && --j)
                }
                return b && (c = d.start = +c || +h || 0, d.unit = e, d.end = b[1] ? c + (b[1] + 1) * b[2] : +b[2]), d
            }]
        };

    function bM() {
        return setTimeout(function() {
            bF = u
        }), bF = a.now()
    }

    function bN(e, b, f) {
        for (var c, d = (bL[b] || []).concat(bL["*"]), a = 0, g = d.length; g > a; a++)
            if (c = d[a].call(f, b, e)) return c
    }

    function H(c, g, d) {
        var h, l, e = 0,
            i = bK.length,
            j = a.Deferred().always(function() {
                delete k.elem
            }),
            k = function() {
                if (l) return !1;
                for (var g = bF || bM(), a = Math.max(0, b.startTime + b.duration - g), d = 1 - (a / b.duration || 0), e = 0, f = b.tweens.length; f > e; e++) b.tweens[e].run(d);
                return j.notifyWith(c, [b, d, a]), 1 > d && f ? a : (j.resolveWith(c, [b]), !1)
            },
            b = j.promise({
                elem: c,
                props: a.extend({}, g),
                opts: a.extend(!0, {
                    specialEasing: {}
                }, d),
                originalProperties: g,
                originalOptions: d,
                startTime: bF || bM(),
                duration: d.duration,
                tweens: [],
                createTween: function(d, f) {
                    var e = a.Tween(c, b.opts, d, f, b.opts.specialEasing[d] || b.opts.easing);
                    return b.tweens.push(e), e
                },
                stop: function(a) {
                    var d = 0,
                        e = a ? b.tweens.length : 0;
                    if (l) return this;
                    for (l = !0; e > d; d++) b.tweens[d].run(1);
                    return a ? j.resolveWith(c, [b, a]) : j.rejectWith(c, [b, a]), this
                }
            }),
            f = b.props;
        for (bO(f, b.opts.specialEasing); i > e; e++)
            if (h = bK[e].call(b, c, f, b.opts)) return h;
        return a.map(f, bN, b), a.isFunction(b.opts.start) && b.opts.start.call(c, b), a.fx.timer(a.extend(k, {
            elem: c,
            anim: b,
            queue: b.opts.queue
        })), b.progress(b.opts.progress).done(b.opts.done, b.opts.complete).fail(b.opts.fail).always(b.opts.always)
    }

    function bO(d, h) {
        var b, e, f, c, g;
        for (b in d)
            if (f = h[e = a.camelCase(b)], c = d[b], a.isArray(c) && (f = c[1], c = d[b] = c[0]), b !== e && (d[e] = c, delete d[b]), g = a.cssHooks[e], g && "expand" in g)
                for (b in c = g.expand(c), delete d[e], c) b in d || (d[b] = c[b], h[b] = f);
            else h[e] = f
    }

    function d(a, b, c, e, f) {
        return new d.prototype.init(a, b, c, e, f)
    }

    function l(c, b) {
        var e, a = {
                height: c
            },
            d = 0;
        for (b = b ? 1 : 0; 4 > d; d += 2 - b) a["margin" + (e = a9[d])] = a["padding" + e] = c;
        return b && (a.opacity = a.width = c), a
    }

    function bP(b) {
        return a.isWindow(b) ? b : 9 === b.nodeType && (b.defaultView || b.parentWindow)
    }
    a.Animation = a.extend(H, {
        tweener: function(b, e) {
            a.isFunction(b) ? (e = b, b = ["*"]) : b = b.split(" ");
            for (var c, d = 0, f = b.length; f > d; d++) bL[c = b[d]] = bL[c] || [], bL[c].unshift(e)
        },
        prefilter: function(a, b) {
            b ? bK.unshift(a) : bK.push(a)
        }
    }), a.Tween = d, d.prototype = {
        constructor: d,
        init: function(c, d, b, e, f, g) {
            this.elem = c, this.prop = b, this.easing = f || "swing", this.options = d, this.start = this.now = this.cur(), this.end = e, this.unit = g || (a.cssNumber[b] ? "" : "px")
        },
        cur: function() {
            var a = d.propHooks[this.prop];
            return a && a.get ? a.get(this) : d.propHooks._default.get(this)
        },
        run: function(b) {
            var e, c = d.propHooks[this.prop];
            return this.pos = e = this.options.duration ? a.easing[this.easing](b, this.options.duration * b, 0, 1, this.options.duration) : b, this.now = (this.end - this.start) * e + this.start, this.options.step && this.options.step.call(this.elem, this.now, this), c && c.set ? c.set(this) : d.propHooks._default.set(this), this
        }
    }, d.prototype.init.prototype = d.prototype, d.propHooks = {
        _default: {
            get: function(b) {
                var c;
                return null == b.elem[b.prop] || b.elem.style && null != b.elem.style[b.prop] ? (c = a.css(b.elem, b.prop, "")) && "auto" !== c ? c : 0 : b.elem[b.prop]
            },
            set: function(b) {
                a.fx.step[b.prop] ? a.fx.step[b.prop](b) : b.elem.style && (null != b.elem.style[a.cssProps[b.prop]] || a.cssHooks[b.prop]) ? a.style(b.elem, b.prop, b.now + b.unit) : b.elem[b.prop] = b.now
            }
        }
    }, d.propHooks.scrollTop = d.propHooks.scrollLeft = {
        set: function(a) {
            a.elem.nodeType && a.elem.parentNode && (a.elem[a.prop] = a.now)
        }
    }, a.each(["toggle", "show", "hide"], function(c, b) {
        var d = a.fn[b];
        a.fn[b] = function(a, c, e) {
            return null == a || "boolean" == typeof a ? d.apply(this, arguments) : this.animate(l(b, !0), a, c, e)
        }
    }), a.fn.extend({
        fadeTo: function(a, b, c, d) {
            return this.filter(bc).css("opacity", 0).show().end().animate({
                opacity: b
            }, a, c, d)
        },
        animate: function(d, e, f, g) {
            var h = a.isEmptyObject(d),
                c = a.speed(e, f, g),
                b = function() {
                    var b = H(this, a.extend({}, d), c);
                    (h || a._data(this, "finish")) && b.stop(!0)
                };
            return b.finish = b, h || !1 === c.queue ? this.each(b) : this.queue(c.queue, b)
        },
        stop: function(b, c, d) {
            var e = function(a) {
                var b = a.stop;
                delete a.stop, b(d)
            };
            return "string" != typeof b && (d = c, c = b, b = u), c && !1 !== b && this.queue(b || "fx", []), this.each(function() {
                var h = !0,
                    c = null != b && b + "queueHooks",
                    g = a.timers,
                    f = a._data(this);
                if (c) f[c] && f[c].stop && e(f[c]);
                else
                    for (c in f) f[c] && f[c].stop && bJ.test(c) && e(f[c]);
                for (c = g.length; c--;) g[c].elem !== this || null != b && g[c].queue !== b || (g[c].anim.stop(d), h = !1, g.splice(c, 1));
                (h || !d) && a.dequeue(this, b)
            })
        },
        finish: function(b) {
            return !1 !== b && (b = b || "fx"), this.each(function() {
                var c, f = a._data(this),
                    d = f[b + "queue"],
                    g = f[b + "queueHooks"],
                    e = a.timers,
                    h = d ? d.length : 0;
                for (f.finish = !0, a.queue(this, b, []), g && g.stop && g.stop.call(this, !0), c = e.length; c--;) e[c].elem === this && e[c].queue === b && (e[c].anim.stop(!0), e.splice(c, 1));
                for (c = 0; h > c; c++) d[c] && d[c].finish && d[c].finish.call(this);
                delete f.finish
            })
        }
    }), a.each({
        slideDown: l("show"),
        slideUp: l("hide"),
        slideToggle: l("toggle"),
        fadeIn: {
            opacity: "show"
        },
        fadeOut: {
            opacity: "hide"
        },
        fadeToggle: {
            opacity: "toggle"
        }
    }, function(b, c) {
        a.fn[b] = function(a, b, d) {
            return this.animate(c, a, b, d)
        }
    }), a.speed = function(c, d, e) {
        var b = c && "object" == typeof c ? a.extend({}, c) : {
            complete: e || !e && d || a.isFunction(c) && c,
            duration: c,
            easing: e && d || d && !a.isFunction(d) && d
        };
        return b.duration = a.fx.off ? 0 : "number" == typeof b.duration ? b.duration : b.duration in a.fx.speeds ? a.fx.speeds[b.duration] : a.fx.speeds._default, (null == b.queue || !0 === b.queue) && (b.queue = "fx"), b.old = b.complete, b.complete = function() {
            a.isFunction(b.old) && b.old.call(this), b.queue && a.dequeue(this, b.queue)
        }, b
    }, a.easing = {
        linear: function(a) {
            return a
        },
        swing: function(a) {
            return .5 - Math.cos(a * Math.PI) / 2
        }
    }, a.timers = [], a.fx = d.prototype.init, a.fx.tick = function() {
        var d, b = a.timers,
            c = 0;
        for (bF = a.now(); b.length > c; c++)(d = b[c])() || b[c] !== d || b.splice(c--, 1);
        b.length || a.fx.stop(), bF = u
    }, a.fx.timer = function(b) {
        b() && a.timers.push(b) && a.fx.start()
    }, a.fx.interval = 13, a.fx.start = function() {
        bG || (bG = setInterval(a.fx.tick, a.fx.interval))
    }, a.fx.stop = function() {
        clearInterval(bG), bG = null
    }, a.fx.speeds = {
        slow: 600,
        fast: 200,
        _default: 400
    }, a.fx.step = {}, a.expr && a.expr.filters && (a.expr.filters.animated = function(b) {
        return a.grep(a.timers, function(a) {
            return b === a.elem
        }).length
    }), a.fn.offset = function(g) {
        if (arguments.length) return g === u ? this : this.each(function(b) {
            a.offset.setOffset(this, g, b)
        });
        var b, e, d = {
                top: 0,
                left: 0
            },
            c = this[0],
            f = c && c.ownerDocument;
        if (f) return b = f.documentElement, a.contains(b, c) ? (typeof c.getBoundingClientRect !== J && (d = c.getBoundingClientRect()), e = bP(f), {
            top: d.top + (e.pageYOffset || b.scrollTop) - (b.clientTop || 0),
            left: d.left + (e.pageXOffset || b.scrollLeft) - (b.clientLeft || 0)
        }) : d
    }, a.offset = {
        setOffset: function(c, b, m) {
            var e = a.css(c, "position");
            "static" === e && (c.style.position = "relative");
            var f, g, h = a(c),
                i = h.offset(),
                j = a.css(c, "top"),
                k = a.css(c, "left"),
                n = ("absolute" === e || "fixed" === e) && a.inArray("auto", [j, k]) > -1,
                d = {},
                l = {};
            n ? (f = (l = h.position()).top, g = l.left) : (f = parseFloat(j) || 0, g = parseFloat(k) || 0), a.isFunction(b) && (b = b.call(c, m, i)), null != b.top && (d.top = b.top - i.top + f), null != b.left && (d.left = b.left - i.left + g), "using" in b ? b.using.call(c, d) : h.css(d)
        }
    }, a.fn.extend({
        position: function() {
            if (this[0]) {
                var b, d, c = {
                        top: 0,
                        left: 0
                    },
                    e = this[0];
                return "fixed" === a.css(e, "position") ? d = e.getBoundingClientRect() : (b = this.offsetParent(), d = this.offset(), a.nodeName(b[0], "html") || (c = b.offset()), c.top += a.css(b[0], "borderTopWidth", !0), c.left += a.css(b[0], "borderLeftWidth", !0)), {
                    top: d.top - c.top - a.css(e, "marginTop", !0),
                    left: d.left - c.left - a.css(e, "marginLeft", !0)
                }
            }
        },
        offsetParent: function() {
            return this.map(function() {
                for (var b = this.offsetParent || K; b && !a.nodeName(b, "html") && "static" === a.css(b, "position");) b = b.offsetParent;
                return b || K
            })
        }
    }), a.each({
        scrollLeft: "pageXOffset",
        scrollTop: "pageYOffset"
    }, function(b, c) {
        var d = /Y/.test(c);
        a.fn[b] = function(e) {
            return a.access(this, function(f, g, e) {
                var b = bP(f);
                return e === u ? b ? c in b ? b[c] : b.document.documentElement[g] : f[g] : (b ? b.scrollTo(d ? a(b).scrollLeft() : e, d ? e : a(b).scrollTop()) : f[g] = e, u)
            }, b, e, arguments.length, null)
        }
    }), a.each({
        Height: "height",
        Width: "width"
    }, function(b, c) {
        a.each({
            padding: "inner" + b,
            content: c,
            "": "outer" + b
        }, function(e, d) {
            a.fn[d] = function(d, g) {
                var f = arguments.length && (e || "boolean" != typeof d),
                    h = e || (!0 === d || !0 === g ? "margin" : "border");
                return a.access(this, function(c, e, f) {
                    var d;
                    return a.isWindow(c) ? c.document.documentElement["client" + b] : 9 === c.nodeType ? (d = c.documentElement, Math.max(c.body["scroll" + b], d["scroll" + b], c.body["offset" + b], d["offset" + b], d["client" + b])) : f === u ? a.css(c, e, h) : a.style(c, e, f, h)
                }, c, f ? d : u, f, null)
            }
        })
    }), a.fn.size = function() {
        return this.length
    }, a.fn.andSelf = a.fn.addBack, "object" == typeof module && module && "object" == typeof module.exports ? module.exports = a : (b.jQuery = b.$ = a, "function" == typeof define && define.amd && define("jquery", [], function() {
        return a
    }))
}(window),
function($) {
    var a = {},
        b = 0;
    $.fn.once = function(c, d) {
        "string" != typeof c && (c in a || (a[c] = ++b), d || (d = c), c = "jquery-once-" + a[c]);
        var e = c + "-processed",
            f = this.not("." + e).addClass(e);
        return $.isFunction(d) ? f.each(d) : f
    }, $.fn.removeOnce = function(d, a) {
        var b = d + "-processed",
            c = this.filter("." + b).removeClass(b);
        return $.isFunction(a) ? c.each(a) : c
    }
}(jQuery);
var Drupal = Drupal || {
    settings: {},
    behaviors: {},
    locale: {}
};
jQuery.noConflict(),
    function($) {
        var a = $.fn.init;
        if ($.fn.init = function(b, d, e) {
                if (b && "string" == typeof b) {
                    var c = b.indexOf("#");
                    if (c >= 0 && b.indexOf("<") > c) throw "Syntax error, unrecognized expression: " + b
                }
                return a.call(this, b, d, e)
            }, $.fn.init.prototype = a.prototype, $.ajaxPrefilter) $.ajaxPrefilter(function(a) {
            a.crossDomain && (a.contents.script = !1)
        });
        else if ($.httpData) {
            var b = $.httpData;
            $.httpData = function(c, a, d) {
                return a || Drupal.urlIsLocal(d.url) || (c.getResponseHeader("content-type") || "").indexOf("javascript") >= 0 && (a = "text"), b.call(this, c, a, d)
            }, $.httpData.prototype = b.prototype
        }
        Drupal.attachBehaviors = function(a, b) {
            a = a || document, b = b || Drupal.settings, $.each(Drupal.behaviors, function() {
                $.isFunction(this.attach) && this.attach(a, b)
            })
        }, Drupal.detachBehaviors = function(a, b, c) {
            a = a || document, b = b || Drupal.settings, c = c || "unload", $.each(Drupal.behaviors, function() {
                $.isFunction(this.detach) && this.detach(a, b, c)
            })
        }, Drupal.checkPlain = function(a) {
            var b, d, c = {
                "&": "&amp;",
                "'": "&#39;",
                '"': "&quot;",
                "<": "&lt;",
                ">": "&gt;"
            };
            for (b in a = String(a), c) c.hasOwnProperty(b) && (d = new RegExp(b, "g"), a = a.replace(d, c[b]));
            return a
        }, Drupal.formatString = function(c, a) {
            for (var b in a)
                if (a.hasOwnProperty(b)) switch (b.charAt(0)) {
                    case "@":
                        a[b] = Drupal.checkPlain(a[b]);
                        break;
                    case "!":
                        break;
                    default:
                        a[b] = Drupal.theme("placeholder", a[b])
                }
            return Drupal.stringReplace(c, a, null)
        }, Drupal.stringReplace = function(b, c, a) {
            if (0 === b.length) return b;
            if (!$.isArray(a)) {
                for (var f in a = [], c) c.hasOwnProperty(f) && a.push(f);
                a.sort(function(a, b) {
                    return a.length - b.length
                })
            }
            if (0 === a.length) return b;
            var g = a.pop(),
                d = b.split(g);
            if (a.length)
                for (var e = 0; e < d.length; e++) d[e] = Drupal.stringReplace(d[e], c, a.slice(0));
            return d.join(c[g])
        }, Drupal.t = function(a, c, b) {
            return (b = b || {}).context = b.context || "", Drupal.locale.strings && Drupal.locale.strings[b.context] && Drupal.locale.strings[b.context][a] && (a = Drupal.locale.strings[b.context][a]), c && (a = Drupal.formatString(a, c)), a
        }, Drupal.formatPlural = function(e, f, d, a, c) {
            (a = a || {})["@count"] = e;
            var b = Drupal.locale.pluralFormula ? Drupal.locale.pluralFormula(a["@count"]) : 1 == a["@count"] ? 0 : 1;
            return 0 == b ? Drupal.t(f, a, c) : 1 == b ? Drupal.t(d, a, c) : (a["@count[" + b + "]"] = a["@count"], delete a["@count"], Drupal.t(d.replace("@count", "@count[" + b + "]"), a, c))
        }, Drupal.absoluteUrl = function(a) {
            var b = document.createElement("a");
            try {
                a = decodeURIComponent(a)
            } catch (c) {}
            return b.setAttribute("href", a), b.cloneNode(!1).href
        }, Drupal.urlIsLocal = function(d) {
            var a = Drupal.absoluteUrl(d),
                c = location.protocol;
            "http:" === c && 0 === a.indexOf("https:") && (c = "https:");
            var b = c + "//" + location.host + Drupal.settings.basePath.slice(0, -1);
            try {
                a = decodeURIComponent(a)
            } catch (e) {}
            try {
                b = decodeURIComponent(b)
            } catch (f) {}
            return a === b || 0 === a.indexOf(b + "/")
        }, Drupal.theme = function(a) {
            var b = Array.prototype.slice.apply(arguments, [1]);
            return (Drupal.theme[a] || Drupal.theme.prototype[a]).apply(this, b)
        }, Drupal.freezeHeight = function() {
            Drupal.unfreezeHeight(), $('<div id="freeze-height"></div>').css({
                position: "absolute",
                top: "0px",
                left: "0px",
                width: "1px",
                height: $("body").css("height")
            }).appendTo("body")
        }, Drupal.unfreezeHeight = function() {
            $("#freeze-height").remove()
        }, Drupal.encodePath = function(b, a) {
            return a = a || location.href, encodeURIComponent(b).replace(/%2F/g, "/")
        }, Drupal.getSelection = function(a) {
            if ("number" != typeof a.selectionStart && document.selection) {
                var b = document.selection.createRange(),
                    c = b.duplicate();
                c.moveToElementText(a), c.setEndPoint("EndToEnd", b);
                var d = c.text.length - b.text.length,
                    e = d + b.text.length;
                return {
                    start: d,
                    end: e
                }
            }
            return {
                start: a.selectionStart,
                end: a.selectionEnd
            }
        }, Drupal.beforeUnloadCalled = !1, $(window).bind("beforeunload pagehide", function() {
            Drupal.beforeUnloadCalled = !0
        }), Drupal.displayAjaxError = function(a) {
            Drupal.beforeUnloadCalled || alert(a)
        }, Drupal.ajaxError = function(a, h, c) {
            var d, e, f, b, g;
            d = a.status ? "\n" + Drupal.t("An AJAX HTTP error occurred.") + "\n" + Drupal.t("HTTP Result Code: !status", {
                "!status": a.status
            }) : "\n" + Drupal.t("An AJAX HTTP request terminated abnormally."), d += "\n" + Drupal.t("Debugging information follows."), f = "\n" + Drupal.t("Path: !uri", {
                "!uri": h
            }), e = "";
            try {
                e = "\n" + Drupal.t("StatusText: !statusText", {
                    "!statusText": $.trim(a.statusText)
                })
            } catch (i) {}
            b = "";
            try {
                b = "\n" + Drupal.t("ResponseText: !responseText", {
                    "!responseText": $.trim(a.responseText)
                })
            } catch (j) {}
            return b = (b = b.replace(/<("[^"]*"|'[^']*'|[^'">])*>/gi, "")).replace(/[\n]+\s+/g, "\n"), g = 0 == a.status ? "\n" + Drupal.t("ReadyState: !readyState", {
                "!readyState": a.readyState
            }) : "", d + f + e + (c = c ? "\n" + Drupal.t("CustomMessage: !customMessage", {
                "!customMessage": c
            }) : "") + b + g
        }, $("html").addClass("js"), document.cookie = "has_js=1; path=/", $(function() {
            if (void 0 === jQuery.support.positionFixed) {
                var a = $('<div style="position:fixed; top:10px" />').appendTo(document.body);
                jQuery.support.positionFixed = 10 === a[0].offsetTop, a.remove()
            }
        }), $(function() {
            Drupal.attachBehaviors(document, Drupal.settings)
        }), Drupal.theme.prototype = {
            placeholder: function(a) {
                return '<em class="placeholder">' + Drupal.checkPlain(a) + "</em>"
            }
        }
    }(jQuery)