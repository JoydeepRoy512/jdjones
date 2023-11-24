/*!
 * Bootstrap v3.3.7 (http://getbootstrap.com)
 * Copyright 2011-2017 Twitter, Inc.
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
 */
/*!
 * Generated using the Bootstrap Customizer (https://getbootstrap.com/customize/?id=46b88518c4aaf33add50a5bcf39dc25d)
 * Config saved to config.json and https://gist.github.com/46b88518c4aaf33add50a5bcf39dc25d
 */
if (window.Modernizr = function(f, b, g) {
        function o(a, c) {
            var b = a.charAt(0).toUpperCase() + a.substr(1);
            return v((a + " " + s.join(b + " ") + b).split(" "), c)
        }

        function v(a, c) {
            for (var b in a)
                if (w[a[b]] !== g) return "pfx" != c || a[b];
            return !1
        }

        function h(a, b) {
            return typeof a === b
        }

        function p(a) {
            w.cssText = a
        }
        var i, d, j, a = {},
            k = b.documentElement,
            q = (b.head || b.getElementsByTagName("head")[0], "modernizr"),
            l = b.createElement(q),
            w = l.style,
            r = (Object.prototype.toString, " -webkit- -moz- -o- -ms- -khtml- ".split(" ")),
            s = "Webkit Moz O ms Khtml".split(" "),
            c = {},
            m = [],
            t = function(d, i, c, e) {
                var f, g, h, a = b.createElement("div");
                if (parseInt(c, 10))
                    for (; c--;)(h = b.createElement("div")).id = e ? e[c] : q + (c + 1), a.appendChild(h);
                return f = ["&shy;", "<style>", d, "</style>"].join(""), a.id = q, a.innerHTML += f, k.appendChild(a), g = i(a, d), a.parentNode.removeChild(a), !!g
            },
            u = function(a) {
                var b;
                return f.matchMedia ? matchMedia(a).matches : (t("@media " + a + " { #" + q + " { position: absolute; } }", function(a) {
                    b = "absolute" == (f.getComputedStyle ? getComputedStyle(a, null) : a.currentStyle).position
                }), b)
            },
            n = {}.hasOwnProperty;
        for (var e in j = h(n, g) || h(n.call, g) ? function(a, b) {
                return b in a && h(a.constructor.prototype[b], g)
            } : function(a, b) {
                return n.call(a, b)
            }, c.rgba = function() {
                var a, b;
                return p("background-color:rgba(150,255,150,.5)"), a = w.backgroundColor, b = "rgba", !!~("" + a).indexOf(b)
            }, c.boxshadow = function() {
                return o("boxShadow")
            }, c.csstransitions = function() {
                return o("transitionProperty")
            }, c) j(c, e) && (a[d = e.toLowerCase()] = c[e](), m.push((a[d] ? "" : "no-") + d));
        return a.addTest = function(b, c) {
            if ("object" == typeof b)
                for (var d in b) j(b, d) && a.addTest(d, b[d]);
            else {
                if (a[b = b.toLowerCase()] !== g) return;
                c = "boolean" == typeof c ? c : !!c(), k.className += " " + (c ? "" : "no-") + b, a[b] = c
            }
            return a
        }, p(""), l = null, f.attachEvent && ((i = b.createElement("div")).innerHTML = "<elem></elem>", 1 !== i.childNodes.length) && function(b, c) {
            function f(b) {
                for (var a = -1; ++a < m;) b.createElement(i[a])
            }
            b.iepp = b.iepp || {};
            var l, a = b.iepp,
                d = a.html5elements || "abbr|article|aside|audio|canvas|datalist|details|figcaption|figure|footer|header|hgroup|mark|meter|nav|output|progress|section|summary|time|video",
                i = d.split("|"),
                m = i.length,
                n = new RegExp("(^|\\s)(" + d + ")", "gi"),
                o = new RegExp("<(/*)(" + d + ")", "gi"),
                p = /^\s*[\{\}]\s*$/,
                q = new RegExp("(^|[^\\n]*?\\s)(" + d + ")([^\\n]*)({[\\n\\w\\W]*?})", "gi"),
                j = c.createDocumentFragment(),
                k = c.documentElement,
                h = k.firstChild,
                r = c.createElement("body"),
                e = c.createElement("style"),
                s = /print|all/;
            a.getCSS = function(d, b) {
                if (d + "" === g) return "";
                for (var c, e = -1, h = d.length, f = []; ++e < h;)(c = d[e]).disabled || (b = c.media || b, s.test(b) && f.push(a.getCSS(c.imports, b), c.cssText), b = "all");
                return f.join("")
            }, a.parseCSS = function(c) {
                for (var a, b = []; null != (a = q.exec(c));) b.push(((p.exec(a[1]) ? "\n" : a[1]) + a[2] + a[3]).replace(n, "$1.iepp_$2") + a[4]);
                return b.join("\n")
            }, a.writeHTML = function() {
                var a = -1;
                for (l = l || c.body; ++a < m;)
                    for (var b = c.getElementsByTagName(i[a]), e = b.length, d = -1; ++d < e;) 0 > b[d].className.indexOf("iepp_") && (b[d].className += " iepp_" + i[a]);
                j.appendChild(l), k.appendChild(r), r.className = l.className, r.id = l.id, r.innerHTML = l.innerHTML.replace(o, "<$1font")
            }, a._beforePrint = function() {
                e.styleSheet.cssText = a.parseCSS(a.getCSS(c.styleSheets, "all")), a.writeHTML()
            }, a.restoreHTML = function() {
                r.innerHTML = "", k.removeChild(r), k.appendChild(l)
            }, a._afterPrint = function() {
                a.restoreHTML(), e.styleSheet.cssText = ""
            }, f(c), f(j), a.disablePP || (h.insertBefore(e, h.firstChild), e.media = "print", e.className = "iepp-printshim", b.attachEvent("onbeforeprint", a._beforePrint), b.attachEvent("onafterprint", a._afterPrint))
        }(f, b), a._version = "2.0.6", a._prefixes = r, a._domPrefixes = s, a.mq = u, a.testProp = function(a) {
            return v([a])
        }, a.testAllProps = o, a.testStyles = t, k.className = k.className.replace(/\bno-js\b/, "") + (" js " + m.join(" ")), a
    }(this, this.document), function(a, b) {
        function c() {
            s(!0)
        }
        if (a.respond = {}, respond.update = function() {}, respond.mediaQueriesSupported = b, !b) {
            var h, i, d = a.document,
                f = d.documentElement,
                j = [],
                k = [],
                l = [],
                m = {},
                n = 30,
                g = d.getElementsByTagName("head")[0] || f,
                o = g.getElementsByTagName("link"),
                p = [],
                e = function() {
                    for (var c, b, e, f, g = o, h = g.length, d = 0; d < h; d++) b = (c = g[d]).href, e = c.media, f = c.rel && "stylesheet" === c.rel.toLowerCase(), b && f && !m[b] && (/^([a-zA-Z]+?:(\/\/)?(www\.)?)/.test(b) && b.replace(RegExp.$1, "").split("/")[0] !== a.location.host ? m[b] = !0 : p.push({
                        href: b,
                        media: e
                    }));
                    q()
                },
                q = function() {
                    if (p.length) {
                        var a = p.shift();
                        t(a.href, function(b) {
                            r(b, a.href, a.media), m[a.href] = !0, q()
                        })
                    }
                },
                r = function(h, a, i) {
                    var b, d, c, l, m, e = h.match(/@media[^\{]+\{([^\{\}]+\{[^\}\{]+\})+/gi),
                        f = e && e.length || 0,
                        a = a.substring(0, a.lastIndexOf("/")),
                        n = function(b) {
                            return b.replace(/(url\()['"]?([^\/\)'"][^:\)'"]+)['"]?(\))/g, "$1" + a + "$2$3")
                        },
                        o = !f && i,
                        g = 0;
                    for (a.length && (a += "/"), o && (f = 1); g < f; g++)
                        for (b = 0, o ? (d = i, k.push(n(h))) : (d = e[g].match(/@media ([^\{]+)\{([\S\s]+?)$/) && RegExp.$1, k.push(RegExp.$2 && n(RegExp.$2))), m = (l = d.split(",")).length; b < m; b++) c = l[b], j.push({
                            media: c.match(/(only\s+)?([a-zA-Z]+)(\sand)?/) && RegExp.$2,
                            rules: k.length - 1,
                            minw: c.match(/\(min\-width:[\s]*([\s]*[0-9]+)px[\s]*\)/) && parseFloat(RegExp.$1),
                            maxw: c.match(/\(max\-width:[\s]*([\s]*[0-9]+)px[\s]*\)/) && parseFloat(RegExp.$1)
                        });
                    s()
                },
                s = function(v) {
                    var m = "clientWidth",
                        p = f[m],
                        q = "CSS1Compat" === d.compatMode && p || d.body[m] || p,
                        e = {},
                        r = d.createDocumentFragment(),
                        w = o[o.length - 1],
                        t = (new Date).getTime();
                    if (v && h && t - h < n) clearTimeout(i), i = setTimeout(s, n);
                    else {
                        for (var b in h = t, j) {
                            var a = j[b];
                            (!a.minw && !a.maxw || (!a.minw || a.minw && q >= a.minw) && (!a.maxw || a.maxw && q <= a.maxw)) && (e[a.media] || (e[a.media] = []), e[a.media].push(k[a.rules]))
                        }
                        for (var b in l) l[b] && l[b].parentNode === g && g.removeChild(l[b]);
                        for (var b in e) {
                            var c = d.createElement("style"),
                                u = e[b].join("\n");
                            c.type = "text/css", c.media = b, c.styleSheet ? c.styleSheet.cssText = u : c.appendChild(d.createTextNode(u)), r.appendChild(c), l.push(c)
                        }
                        g.insertBefore(r, w.nextSibling)
                    }
                },
                t = function(b, c) {
                    var a = u();
                    if (a) {
                        if (a.open("GET", b, !0), a.onreadystatechange = function() {
                                4 == a.readyState && (200 == a.status || 304 == a.status) && c(a.responseText)
                            }, 4 == a.readyState) return;
                        a.send()
                    }
                },
                u = function() {
                    for (var c = !1, a = [function() {
                            return new ActiveXObject("Microsoft.XMLHTTP")
                        }, function() {
                            return new XMLHttpRequest
                        }], b = a.length; b--;) {
                        try {
                            c = a[b]()
                        } catch (d) {
                            continue
                        }
                        break
                    }
                    return function() {
                        return c
                    }
                }();
            e(), respond.update = e, a.addEventListener ? a.addEventListener("resize", c, !1) : a.attachEvent && a.attachEvent("onresize", c)
        }
    }(this, Modernizr.mq("only all")), function(b, a, o) {
        function p(a) {
            return !a || "loaded" == a || "complete" == a
        }

        function q() {
            for (var b = 1, a = -1; u.length - ++a && (!u[a].s || (b = u[a].r)););
            b && r()
        }

        function r() {
            var b = u.shift();
            v = 1, b ? b.t ? t(function() {
                var g, h, d;
                "c" == b.t ? function(d) {
                    var h, b = a.createElement("link");
                    if (b.href = d.s, b.rel = "stylesheet", b.type = "text/css", !d.e && (f || e)) {
                        var g = function(a) {
                            t(function() {
                                if (!h) try {
                                    a.sheet.cssRules.length ? (h = 1, q()) : g(a)
                                } catch (b) {
                                    1e3 == b.code || "security" == b.message || "denied" == b.message ? (h = 1, t(function() {
                                        q()
                                    }, 0)) : g(a)
                                }
                            }, 0)
                        };
                        g(b)
                    } else b.onload = function() {
                        h || (h = 1, t(function() {
                            q()
                        }, 0))
                    }, d.e && b.onload();
                    t(function() {
                        h || (h = 1, q())
                    }, c.errorTimeout), d.e || i.parentNode.insertBefore(b, i)
                }(b) : (g = b, (d = a.createElement("script")).src = g.s, d.onreadystatechange = d.onload = function() {
                    !h && p(d.readyState) && (h = 1, q(), d.onload = d.onreadystatechange = null)
                }, t(function() {
                    h || (h = 1, q())
                }, c.errorTimeout), g.e ? d.onload() : i.parentNode.insertBefore(d, i))
            }, 0) : (b(), q()) : v = 0
        }

        function s(e, b, f) {
            var g = "c" == b ? x : n;
            return v = 0, b = b || "j", A(e) ? function(d, e, f, h, m, j) {
                function g() {
                    !n && p(b.readyState) && (l.r = n = 1, v || q(), b.onload = b.onreadystatechange = null, t(function() {
                        w.removeChild(b)
                    }, 0))
                }
                var b = a.createElement(d),
                    n = 0,
                    l = {
                        t: f,
                        s: e,
                        e: j
                    };
                b.src = b.data = e, k || (b.style.display = "none"), b.width = b.height = "0", "object" != d && (b.type = f), b.onload = b.onreadystatechange = g, "img" == d ? b.onerror = g : "script" == d && (b.onerror = function() {
                    l.e = l.r = 1, r()
                }), u.splice(h, 0, l), w.insertBefore(b, k ? null : i), t(function() {
                    n || (w.removeChild(b), l.r = l.e = n = 1, q())
                }, c.errorTimeout)
            }(g, e, b, this.i++, d, f) : (u.splice(this.i++, 0, e), 1 == u.length && r()), this
        }

        function g() {
            var a = c;
            return a.loader = {
                load: s,
                i: 0
            }, a
        }
        var h, c, d = a.documentElement,
            t = b.setTimeout,
            i = a.getElementsByTagName("script")[0],
            j = {}.toString,
            u = [],
            v = 0,
            e = "MozAppearance" in d.style,
            k = e && !!a.createRange().compareNode,
            w = k ? d : i.parentNode,
            l = b.opera && "[object Opera]" == j.call(b.opera),
            f = "webkitAppearance" in d.style,
            m = f && "async" in a.createElement("script"),
            n = e ? "object" : l || m ? "img" : "script",
            x = f ? "img" : n,
            y = Array.isArray || function(a) {
                return "[object Array]" == j.call(a)
            },
            z = function(a) {
                return Object(a) === a
            },
            A = function(a) {
                return "string" == typeof a
            },
            B = function(a) {
                return "[object Function]" == j.call(a)
            },
            C = [],
            D = {};
        (c = function(a) {
            function f(c, a, d, e, f) {
                var b = function(f) {
                        var d, a, c = f.split("!"),
                            g = C.length,
                            e = c.pop(),
                            h = c.length,
                            b = {
                                url: e,
                                origUrl: e,
                                prefixes: c
                            };
                        for (a = 0; a < h; a++)(d = D[c[a]]) && (b = d(b));
                        for (a = 0; a < g; a++) b = C[a](b);
                        return b
                    }(c),
                    h = b.autoCallback;
                if (!b.bypass) {
                    if (a && (a = B(a) ? a : a[c] || a[e] || a[c.split("/").pop().split("?")[0]]), b.instead) return b.instead(c, a, d, e, f);
                    d.load(b.url, b.forceCSS || !b.forceJS && /css$/.test(b.url) ? "c" : void 0, b.noexec), (B(a) || B(h)) && d.load(function() {
                        g(), a && a(b.origUrl, f, e), h && h(b.origUrl, f, e)
                    })
                }
            }

            function h(a, c) {
                function b(a) {
                    if (A(a)) f(a, i, c, 0, d);
                    else if (z(a))
                        for (h in a) a.hasOwnProperty(h) && f(a[h], i, c, h, d)
                }
                var h, d = !!a.test,
                    e = d ? a.yep : a.nope,
                    g = a.load || a.both,
                    i = a.callback;
                b(e), b(g), a.complete && c.load(a.complete)
            }
            var d, b, e = this.yepnope.loader;
            if (A(a)) f(a, 0, e, 0);
            else if (y(a))
                for (d = 0; d < a.length; d++) A(b = a[d]) ? f(b, 0, e, 0) : y(b) ? c(b) : z(b) && h(b, e);
            else z(a) && h(a, e)
        }).addPrefix = function(a, b) {
            D[a] = b
        }, c.addFilter = function(a) {
            C.push(a)
        }, c.errorTimeout = 1e4, null == a.readyState && a.addEventListener && (a.readyState = "loading", a.addEventListener("DOMContentLoaded", h = function() {
            a.removeEventListener("DOMContentLoaded", h, 0), a.readyState = "complete"
        }, 0)), b.yepnope = g()
    }(this, this.document), Modernizr.load = function() {
        yepnope.apply(window, [].slice.call(arguments, 0))
    }, "undefined" == typeof jQuery) throw new Error("Bootstrap's JavaScript requires jQuery");

function highlightNav() {
    var a = location.href.toLowerCase();
    jQuery(".navbar-nav > li a").each(function() {
        a.indexOf(this.href.toLowerCase()) > -1 && "#" != jQuery(this).attr("href") && "" != jQuery.trim(jQuery(this).attr("href")) && (jQuery(".current").removeClass("current"), jQuery(".navbar-nav > li a.current").removeClass("current"), jQuery(this).parent().addClass("current"), jQuery(this).parent().parent().parent().hasClass("dropdown") && jQuery(this).parent().parent().parent().addClass("current"), jQuery(this).parent().parent().parent().parent().parent().hasClass("dropdown") && jQuery(this).parent().parent().parent().parent().parent().addClass("current"))
    }), jQuery("li a.current").parents().each(function() {
        jQuery(this).is("li a") && jQuery(this).addClass("current")
    })
}(function(b) {
    "use strict";
    var a = b.fn.jquery.split(" ")[0].split(".");
    if (a[0] < 2 && a[1] < 9 || 1 == a[0] && 9 == a[1] && a[2] < 1 || a[0] > 3) throw new Error("Bootstrap's JavaScript requires jQuery version 1.9.1 or higher, but lower than version 4")
})(jQuery),
function(a) {
    "use strict";
    var c = '[data-dismiss="alert"]',
        b = function(b) {
            a(b).on("click", c, this.close)
        };
    b.VERSION = "3.3.7", b.TRANSITION_DURATION = 150, b.prototype.close = function(e) {
        function g() {
            d.detach().trigger("closed.bs.alert").remove()
        }
        var f = a(this),
            c = f.attr("data-target");
        c || (c = (c = f.attr("href")) && c.replace(/.*(?=#[^\s]*$)/, ""));
        var d = a("#" === c ? [] : c);
        e && e.preventDefault(), d.length || (d = f.closest(".alert")), d.trigger(e = a.Event("close.bs.alert")), e.isDefaultPrevented() || (d.removeClass("in"), a.support.transition && d.hasClass("fade") ? d.one("bsTransitionEnd", g).emulateTransitionEnd(b.TRANSITION_DURATION) : g())
    };
    var d = a.fn.alert;
    a.fn.alert = function(c) {
        return this.each(function() {
            var d = a(this),
                e = d.data("bs.alert");
            e || d.data("bs.alert", e = new b(this)), "string" == typeof c && e[c].call(d)
        })
    }, a.fn.alert.Constructor = b, a.fn.alert.noConflict = function() {
        return a.fn.alert = d, this
    }, a(document).on("click.bs.alert.data-api", c, b.prototype.close)
}(jQuery),
function(a) {
    "use strict";

    function c(c) {
        return this.each(function() {
            var e = a(this),
                d = e.data("bs.button");
            d || e.data("bs.button", d = new b(this, "object" == typeof c && c)), "toggle" == c ? d.toggle() : c && d.setState(c)
        })
    }
    var b = function(c, d) {
        this.$element = a(c), this.options = a.extend({}, b.DEFAULTS, d), this.isLoading = !1
    };
    b.VERSION = "3.3.7", b.DEFAULTS = {
        loadingText: "loading..."
    }, b.prototype.setState = function(c) {
        var f = "disabled",
            b = this.$element,
            d = b.is("input") ? "val" : "html",
            e = b.data();
        c += "Text", null == e.resetText && b.data("resetText", b[d]()), setTimeout(a.proxy(function() {
            b[d](null == e[c] ? this.options[c] : e[c]), "loadingText" == c ? (this.isLoading = !0, b.addClass(f).attr(f, f).prop(f, !0)) : this.isLoading && (this.isLoading = !1, b.removeClass(f).removeAttr(f).prop(f, !1))
        }, this), 0)
    }, b.prototype.toggle = function() {
        var b = !0,
            c = this.$element.closest('[data-toggle="buttons"]');
        if (c.length) {
            var a = this.$element.find("input");
            "radio" == a.prop("type") ? (a.prop("checked") && (b = !1), c.find(".active").removeClass("active"), this.$element.addClass("active")) : "checkbox" == a.prop("type") && (a.prop("checked") !== this.$element.hasClass("active") && (b = !1), this.$element.toggleClass("active")), a.prop("checked", this.$element.hasClass("active")), b && a.trigger("change")
        } else this.$element.attr("aria-pressed", !this.$element.hasClass("active")), this.$element.toggleClass("active")
    };
    var d = a.fn.button;
    a.fn.button = c, a.fn.button.Constructor = b, a.fn.button.noConflict = function() {
        return a.fn.button = d, this
    }, a(document).on("click.bs.button.data-api", '[data-toggle^="button"]', function(d) {
        var b = a(d.target).closest(".btn");
        c.call(b, "toggle"), a(d.target).is('input[type="radio"], input[type="checkbox"]') || (d.preventDefault(), b.is("input,button") ? b.trigger("focus") : b.find("input:visible,button:visible").first().trigger("focus"))
    }).on("focus.bs.button.data-api blur.bs.button.data-api", '[data-toggle^="button"]', function(b) {
        a(b.target).closest(".btn").toggleClass("focus", /^focus(in)?$/.test(b.type))
    })
}(jQuery),
function(b) {
    "use strict";

    function d(c) {
        return this.each(function() {
            var e = b(this),
                d = e.data("bs.carousel"),
                f = b.extend({}, a.DEFAULTS, e.data(), "object" == typeof c && c),
                g = "string" == typeof c ? c : f.slide;
            d || e.data("bs.carousel", d = new a(this, f)), "number" == typeof c ? d.to(c) : g ? d[g]() : f.interval && d.pause().cycle()
        })
    }
    var a = function(a, c) {
        this.$element = b(a), this.$indicators = this.$element.find(".carousel-indicators"), this.options = c, this.paused = null, this.sliding = null, this.interval = null, this.$active = null, this.$items = null, this.options.keyboard && this.$element.on("keydown.bs.carousel", b.proxy(this.keydown, this)), "hover" != this.options.pause || "ontouchstart" in document.documentElement || this.$element.on("mouseenter.bs.carousel", b.proxy(this.pause, this)).on("mouseleave.bs.carousel", b.proxy(this.cycle, this))
    };
    a.VERSION = "3.3.7", a.TRANSITION_DURATION = 600, a.DEFAULTS = {
        interval: 5e3,
        pause: "hover",
        wrap: !0,
        keyboard: !0
    }, a.prototype.keydown = function(a) {
        if (!/input|textarea/i.test(a.target.tagName)) {
            switch (a.which) {
                case 37:
                    this.prev();
                    break;
                case 39:
                    this.next();
                    break;
                default:
                    return
            }
            a.preventDefault()
        }
    }, a.prototype.cycle = function(a) {
        return a || (this.paused = !1), this.interval && clearInterval(this.interval), this.options.interval && !this.paused && (this.interval = setInterval(b.proxy(this.next, this), this.options.interval)), this
    }, a.prototype.getItemIndex = function(a) {
        return this.$items = a.parent().children(".item"), this.$items.index(a || this.$active)
    }, a.prototype.getItemForDirection = function(a, c) {
        var b = this.getItemIndex(c);
        if (("prev" == a && 0 === b || "next" == a && b == this.$items.length - 1) && !this.options.wrap) return c;
        var d = (b + ("prev" == a ? -1 : 1)) % this.$items.length;
        return this.$items.eq(d)
    }, a.prototype.to = function(a) {
        var c = this,
            b = this.getItemIndex(this.$active = this.$element.find(".item.active"));
        return a > this.$items.length - 1 || 0 > a ? void 0 : this.sliding ? this.$element.one("slid.bs.carousel", function() {
            c.to(a)
        }) : b == a ? this.pause().cycle() : this.slide(a > b ? "next" : "prev", this.$items.eq(a))
    }, a.prototype.pause = function(a) {
        return a || (this.paused = !0), this.$element.find(".next, .prev").length && b.support.transition && (this.$element.trigger(b.support.transition.end), this.cycle(!0)), this.interval = clearInterval(this.interval), this
    }, a.prototype.next = function() {
        return this.sliding ? void 0 : this.slide("next")
    }, a.prototype.prev = function() {
        return this.sliding ? void 0 : this.slide("prev")
    }, a.prototype.slide = function(f, k) {
        var d = this.$element.find(".item.active"),
            c = k || this.getItemForDirection(f, d),
            g = this.interval,
            e = "next" == f ? "left" : "right",
            m = this;
        if (c.hasClass("active")) return this.sliding = !1;
        var h = c[0],
            i = b.Event("slide.bs.carousel", {
                relatedTarget: h,
                direction: e
            });
        if (this.$element.trigger(i), !i.isDefaultPrevented()) {
            if (this.sliding = !0, g && this.pause(), this.$indicators.length) {
                this.$indicators.find(".active").removeClass("active");
                var j = b(this.$indicators.children()[this.getItemIndex(c)]);
                j && j.addClass("active")
            }
            var l = b.Event("slid.bs.carousel", {
                relatedTarget: h,
                direction: e
            });
            return b.support.transition && this.$element.hasClass("slide") ? (c.addClass(f), c[0].offsetWidth, d.addClass(e), c.addClass(e), d.one("bsTransitionEnd", function() {
                c.removeClass([f, e].join(" ")).addClass("active"), d.removeClass(["active", e].join(" ")), m.sliding = !1, setTimeout(function() {
                    m.$element.trigger(l)
                }, 0)
            }).emulateTransitionEnd(a.TRANSITION_DURATION)) : (d.removeClass("active"), c.addClass("active"), this.sliding = !1, this.$element.trigger(l)), g && this.cycle(), this
        }
    };
    var e = b.fn.carousel;
    b.fn.carousel = d, b.fn.carousel.Constructor = a, b.fn.carousel.noConflict = function() {
        return b.fn.carousel = e, this
    };
    var c = function(h) {
        var f, a = b(this),
            c = b(a.attr("data-target") || (f = a.attr("href")) && f.replace(/.*(?=#[^\s]+$)/, ""));
        if (c.hasClass("carousel")) {
            var g = b.extend({}, c.data(), a.data()),
                e = a.attr("data-slide-to");
            e && (g.interval = !1), d.call(c, g), e && c.data("bs.carousel").to(e), h.preventDefault()
        }
    };
    b(document).on("click.bs.carousel.data-api", "[data-slide]", c).on("click.bs.carousel.data-api", "[data-slide-to]", c), b(window).on("load", function() {
        b('[data-ride="carousel"]').each(function() {
            var a = b(this);
            d.call(a, a.data())
        })
    })
}(jQuery),
function(b) {
    "use strict";

    function e(c) {
        var a = c.attr("data-target");
        a || (a = (a = c.attr("href")) && /#[A-Za-z]/.test(a) && a.replace(/.*(?=#[^\s]*$)/, ""));
        var d = a && b(a);
        return d && d.length ? d : c.parent()
    }

    function d(a) {
        a && 3 === a.which || (b(f).remove(), b(c).each(function() {
            var d = b(this),
                c = e(d),
                f = {
                    relatedTarget: this
                };
            c.hasClass("open") && (a && "click" == a.type && /input|textarea/i.test(a.target.tagName) && b.contains(c[0], a.target) || (c.trigger(a = b.Event("hide.bs.dropdown", f)), a.isDefaultPrevented() || (d.attr("aria-expanded", "false"), c.removeClass("open").trigger(b.Event("hidden.bs.dropdown", f)))))
        }))
    }
    var f = ".dropdown-backdrop",
        c = '[data-toggle="dropdown"]',
        a = function(a) {
            b(a).on("click.bs.dropdown", this.toggle)
        };
    a.VERSION = "3.3.7", a.prototype.toggle = function(f) {
        var c = b(this);
        if (!c.is(".disabled, :disabled")) {
            var a = e(c),
                h = a.hasClass("open");
            if (d(), !h) {
                "ontouchstart" in document.documentElement && !a.closest(".navbar-nav").length && b(document.createElement("div")).addClass("dropdown-backdrop").insertAfter(b(this)).on("click", d);
                var g = {
                    relatedTarget: this
                };
                if (a.trigger(f = b.Event("show.bs.dropdown", g)), f.isDefaultPrevented()) return;
                c.trigger("focus").attr("aria-expanded", "true"), a.toggleClass("open").trigger(b.Event("shown.bs.dropdown", g))
            }
            return !1
        }
    }, a.prototype.keydown = function(a) {
        if (/(38|40|27|32)/.test(a.which) && !/input|textarea/i.test(a.target.tagName)) {
            var g = b(this);
            if (a.preventDefault(), a.stopPropagation(), !g.is(".disabled, :disabled")) {
                var h = e(g),
                    i = h.hasClass("open");
                if (!i && 27 != a.which || i && 27 == a.which) return 27 == a.which && h.find(c).trigger("focus"), g.trigger("click");
                var j = " li:not(.disabled):visible a",
                    f = h.find(".dropdown-menu" + j);
                if (f.length) {
                    var d = f.index(a.target);
                    38 == a.which && d > 0 && d--, 40 == a.which && d < f.length - 1 && d++, ~d || (d = 0), f.eq(d).trigger("focus")
                }
            }
        }
    };
    var g = b.fn.dropdown;
    b.fn.dropdown = function(c) {
        return this.each(function() {
            var d = b(this),
                e = d.data("bs.dropdown");
            e || d.data("bs.dropdown", e = new a(this)), "string" == typeof c && e[c].call(d)
        })
    }, b.fn.dropdown.Constructor = a, b.fn.dropdown.noConflict = function() {
        return b.fn.dropdown = g, this
    }, b(document).on("click.bs.dropdown.data-api", d).on("click.bs.dropdown.data-api", ".dropdown form", function(a) {
        a.stopPropagation()
    }).on("click.bs.dropdown.data-api", c, a.prototype.toggle).on("keydown.bs.dropdown.data-api", c, a.prototype.keydown).on("keydown.bs.dropdown.data-api", ".dropdown-menu", a.prototype.keydown)
}(jQuery),
function(b) {
    "use strict";

    function c(c, d) {
        return this.each(function() {
            var f = b(this),
                e = f.data("bs.modal"),
                g = b.extend({}, a.DEFAULTS, f.data(), "object" == typeof c && c);
            e || f.data("bs.modal", e = new a(this, g)), "string" == typeof c ? e[c](d) : g.show && e.show(d)
        })
    }
    var a = function(a, c) {
        this.options = c, this.$body = b(document.body), this.$element = b(a), this.$dialog = this.$element.find(".modal-dialog"), this.$backdrop = null, this.isShown = null, this.originalBodyPad = null, this.scrollbarWidth = 0, this.ignoreBackdropClick = !1, this.options.remote && this.$element.find(".modal-content").load(this.options.remote, b.proxy(function() {
            this.$element.trigger("loaded.bs.modal")
        }, this))
    };
    a.VERSION = "3.3.7", a.TRANSITION_DURATION = 300, a.BACKDROP_TRANSITION_DURATION = 150, a.DEFAULTS = {
        backdrop: !0,
        keyboard: !0,
        show: !0
    }, a.prototype.toggle = function(a) {
        return this.isShown ? this.hide() : this.show(a)
    }, a.prototype.show = function(d) {
        var e = this,
            c = b.Event("show.bs.modal", {
                relatedTarget: d
            });
        this.$element.trigger(c), this.isShown || c.isDefaultPrevented() || (this.isShown = !0, this.checkScrollbar(), this.setScrollbar(), this.$body.addClass("modal-open"), this.escape(), this.resize(), this.$element.on("click.dismiss.bs.modal", '[data-dismiss="modal"]', b.proxy(this.hide, this)), this.$dialog.on("mousedown.dismiss.bs.modal", function() {
            e.$element.one("mouseup.dismiss.bs.modal", function(a) {
                b(a.target).is(e.$element) && (e.ignoreBackdropClick = !0)
            })
        }), this.backdrop(function() {
            var c = b.support.transition && e.$element.hasClass("fade");
            e.$element.parent().length || e.$element.appendTo(e.$body), e.$element.show().scrollTop(0), e.adjustDialog(), c && e.$element[0].offsetWidth, e.$element.addClass("in"), e.enforceFocus();
            var f = b.Event("shown.bs.modal", {
                relatedTarget: d
            });
            c ? e.$dialog.one("bsTransitionEnd", function() {
                e.$element.trigger("focus").trigger(f)
            }).emulateTransitionEnd(a.TRANSITION_DURATION) : e.$element.trigger("focus").trigger(f)
        }))
    }, a.prototype.hide = function(c) {
        c && c.preventDefault(), c = b.Event("hide.bs.modal"), this.$element.trigger(c), this.isShown && !c.isDefaultPrevented() && (this.isShown = !1, this.escape(), this.resize(), b(document).off("focusin.bs.modal"), this.$element.removeClass("in").off("click.dismiss.bs.modal").off("mouseup.dismiss.bs.modal"), this.$dialog.off("mousedown.dismiss.bs.modal"), b.support.transition && this.$element.hasClass("fade") ? this.$element.one("bsTransitionEnd", b.proxy(this.hideModal, this)).emulateTransitionEnd(a.TRANSITION_DURATION) : this.hideModal())
    }, a.prototype.enforceFocus = function() {
        b(document).off("focusin.bs.modal").on("focusin.bs.modal", b.proxy(function(a) {
            document === a.target || this.$element[0] === a.target || this.$element.has(a.target).length || this.$element.trigger("focus")
        }, this))
    }, a.prototype.escape = function() {
        this.isShown && this.options.keyboard ? this.$element.on("keydown.dismiss.bs.modal", b.proxy(function(a) {
            27 == a.which && this.hide()
        }, this)) : this.isShown || this.$element.off("keydown.dismiss.bs.modal")
    }, a.prototype.resize = function() {
        this.isShown ? b(window).on("resize.bs.modal", b.proxy(this.handleUpdate, this)) : b(window).off("resize.bs.modal")
    }, a.prototype.hideModal = function() {
        var a = this;
        this.$element.hide(), this.backdrop(function() {
            a.$body.removeClass("modal-open"), a.resetAdjustments(), a.resetScrollbar(), a.$element.trigger("hidden.bs.modal")
        })
    }, a.prototype.removeBackdrop = function() {
        this.$backdrop && this.$backdrop.remove(), this.$backdrop = null
    }, a.prototype.backdrop = function(c) {
        var g = this,
            d = this.$element.hasClass("fade") ? "fade" : "";
        if (this.isShown && this.options.backdrop) {
            var e = b.support.transition && d;
            if (this.$backdrop = b(document.createElement("div")).addClass("modal-backdrop " + d).appendTo(this.$body), this.$element.on("click.dismiss.bs.modal", b.proxy(function(a) {
                    return this.ignoreBackdropClick ? void(this.ignoreBackdropClick = !1) : void(a.target === a.currentTarget && ("static" == this.options.backdrop ? this.$element[0].focus() : this.hide()))
                }, this)), e && this.$backdrop[0].offsetWidth, this.$backdrop.addClass("in"), !c) return;
            e ? this.$backdrop.one("bsTransitionEnd", c).emulateTransitionEnd(a.BACKDROP_TRANSITION_DURATION) : c()
        } else if (!this.isShown && this.$backdrop) {
            this.$backdrop.removeClass("in");
            var f = function() {
                g.removeBackdrop(), c && c()
            };
            b.support.transition && this.$element.hasClass("fade") ? this.$backdrop.one("bsTransitionEnd", f).emulateTransitionEnd(a.BACKDROP_TRANSITION_DURATION) : f()
        } else c && c()
    }, a.prototype.handleUpdate = function() {
        this.adjustDialog()
    }, a.prototype.adjustDialog = function() {
        var a = this.$element[0].scrollHeight > document.documentElement.clientHeight;
        this.$element.css({
            paddingLeft: !this.bodyIsOverflowing && a ? this.scrollbarWidth : "",
            paddingRight: this.bodyIsOverflowing && !a ? this.scrollbarWidth : ""
        })
    }, a.prototype.resetAdjustments = function() {
        this.$element.css({
            paddingLeft: "",
            paddingRight: ""
        })
    }, a.prototype.checkScrollbar = function() {
        var a = window.innerWidth;
        if (!a) {
            var b = document.documentElement.getBoundingClientRect();
            a = b.right - Math.abs(b.left)
        }
        this.bodyIsOverflowing = document.body.clientWidth < a, this.scrollbarWidth = this.measureScrollbar()
    }, a.prototype.setScrollbar = function() {
        var a = parseInt(this.$body.css("padding-right") || 0, 10);
        this.originalBodyPad = document.body.style.paddingRight || "", this.bodyIsOverflowing && this.$body.css("padding-right", a + this.scrollbarWidth)
    }, a.prototype.resetScrollbar = function() {
        this.$body.css("padding-right", this.originalBodyPad)
    }, a.prototype.measureScrollbar = function() {
        var a = document.createElement("div");
        a.className = "modal-scrollbar-measure", this.$body.append(a);
        var b = a.offsetWidth - a.clientWidth;
        return this.$body[0].removeChild(a), b
    };
    var d = b.fn.modal;
    b.fn.modal = c, b.fn.modal.Constructor = a, b.fn.modal.noConflict = function() {
        return b.fn.modal = d, this
    }, b(document).on("click.bs.modal.data-api", '[data-toggle="modal"]', function(f) {
        var a = b(this),
            d = a.attr("href"),
            e = b(a.attr("data-target") || d && d.replace(/.*(?=#[^\s]+$)/, "")),
            g = e.data("bs.modal") ? "toggle" : b.extend({
                remote: !/#/.test(d) && d
            }, e.data(), a.data());
        a.is("a") && f.preventDefault(), e.one("show.bs.modal", function(b) {
            b.isDefaultPrevented() || e.one("hidden.bs.modal", function() {
                a.is(":visible") && a.trigger("focus")
            })
        }), c.call(e, g, this)
    })
}(jQuery),
function(b) {
    "use strict";
    var a = function(a, b) {
        this.type = null, this.options = null, this.enabled = null, this.timeout = null, this.hoverState = null, this.$element = null, this.inState = null, this.init("tooltip", a, b)
    };
    a.VERSION = "3.3.7", a.TRANSITION_DURATION = 150, a.DEFAULTS = {
        animation: !0,
        placement: "top",
        selector: !1,
        template: '<div class="tooltip" role="tooltip"><div class="tooltip-arrow"></div><div class="tooltip-inner"></div></div>',
        trigger: "hover focus",
        title: "",
        delay: 0,
        html: !1,
        container: !1,
        viewport: {
            selector: "body",
            padding: 0
        }
    }, a.prototype.init = function(e, f, g) {
        if (this.enabled = !0, this.type = e, this.$element = b(f), this.options = this.getOptions(g), this.$viewport = this.options.viewport && b(b.isFunction(this.options.viewport) ? this.options.viewport.call(this, this.$element) : this.options.viewport.selector || this.options.viewport), this.inState = {
                click: !1,
                hover: !1,
                focus: !1
            }, this.$element[0] instanceof document.constructor && !this.options.selector) throw new Error("`selector` option must be specified when initializing " + this.type + " on the window.document object!");
        for (var c = this.options.trigger.split(" "), d = c.length; d--;) {
            var a = c[d];
            if ("click" == a) this.$element.on("click." + this.type, this.options.selector, b.proxy(this.toggle, this));
            else if ("manual" != a) {
                var h = "hover" == a ? "mouseenter" : "focusin",
                    i = "hover" == a ? "mouseleave" : "focusout";
                this.$element.on(h + "." + this.type, this.options.selector, b.proxy(this.enter, this)), this.$element.on(i + "." + this.type, this.options.selector, b.proxy(this.leave, this))
            }
        }
        this.options.selector ? this._options = b.extend({}, this.options, {
            trigger: "manual",
            selector: ""
        }) : this.fixTitle()
    }, a.prototype.getDefaults = function() {
        return a.DEFAULTS
    }, a.prototype.getOptions = function(a) {
        return (a = b.extend({}, this.getDefaults(), this.$element.data(), a)).delay && "number" == typeof a.delay && (a.delay = {
            show: a.delay,
            hide: a.delay
        }), a
    }, a.prototype.getDelegateOptions = function() {
        var a = {},
            c = this.getDefaults();
        return this._options && b.each(this._options, function(b, d) {
            c[b] != d && (a[b] = d)
        }), a
    }, a.prototype.enter = function(c) {
        var a = c instanceof this.constructor ? c : b(c.currentTarget).data("bs." + this.type);
        return a || (a = new this.constructor(c.currentTarget, this.getDelegateOptions()), b(c.currentTarget).data("bs." + this.type, a)), c instanceof b.Event && (a.inState["focusin" == c.type ? "focus" : "hover"] = !0), a.tip().hasClass("in") || "in" == a.hoverState ? void(a.hoverState = "in") : (clearTimeout(a.timeout), a.hoverState = "in", a.options.delay && a.options.delay.show ? void(a.timeout = setTimeout(function() {
            "in" == a.hoverState && a.show()
        }, a.options.delay.show)) : a.show())
    }, a.prototype.isInStateTrue = function() {
        for (var a in this.inState)
            if (this.inState[a]) return !0;
        return !1
    }, a.prototype.leave = function(c) {
        var a = c instanceof this.constructor ? c : b(c.currentTarget).data("bs." + this.type);
        return a || (a = new this.constructor(c.currentTarget, this.getDelegateOptions()), b(c.currentTarget).data("bs." + this.type, a)), c instanceof b.Event && (a.inState["focusout" == c.type ? "focus" : "hover"] = !1), a.isInStateTrue() ? void 0 : (clearTimeout(a.timeout), a.hoverState = "out", a.options.delay && a.options.delay.hide ? void(a.timeout = setTimeout(function() {
            "out" == a.hoverState && a.hide()
        }, a.options.delay.hide)) : a.hide())
    }, a.prototype.show = function() {
        var i = b.Event("show.bs." + this.type);
        if (this.hasContent() && this.enabled) {
            this.$element.trigger(i);
            var n = b.contains(this.$element[0].ownerDocument.documentElement, this.$element[0]);
            if (i.isDefaultPrevented() || !n) return;
            var q = this,
                d = this.tip(),
                j = this.getUID(this.type);
            this.setContent(), d.attr("id", j), this.$element.attr("aria-describedby", j), this.options.animation && d.addClass("fade");
            var c = "function" == typeof this.options.placement ? this.options.placement.call(this, d[0], this.$element[0]) : this.options.placement,
                k = /\s?auto?\s?/i,
                l = k.test(c);
            l && (c = c.replace(k, "") || "top"), d.detach().css({
                top: 0,
                left: 0,
                display: "block"
            }).addClass(c).data("bs." + this.type, this), this.options.container ? d.appendTo(this.options.container) : d.insertAfter(this.$element), this.$element.trigger("inserted.bs." + this.type);
            var e = this.getPosition(),
                g = d[0].offsetWidth,
                h = d[0].offsetHeight;
            if (l) {
                var o = c,
                    f = this.getPosition(this.$viewport);
                c = "bottom" == c && e.bottom + h > f.bottom ? "top" : "top" == c && e.top - h < f.top ? "bottom" : "right" == c && e.right + g > f.width ? "left" : "left" == c && e.left - g < f.left ? "right" : c, d.removeClass(o).addClass(c)
            }
            var p = this.getCalculatedOffset(c, e, g, h);
            this.applyPlacement(p, c);
            var m = function() {
                var a = q.hoverState;
                q.$element.trigger("shown.bs." + q.type), q.hoverState = null, "out" == a && q.leave(q)
            };
            b.support.transition && this.$tip.hasClass("fade") ? d.one("bsTransitionEnd", m).emulateTransitionEnd(a.TRANSITION_DURATION) : m()
        }
    }, a.prototype.applyPlacement = function(c, f) {
        var a = this.tip(),
            l = a[0].offsetWidth,
            g = a[0].offsetHeight,
            h = parseInt(a.css("margin-top"), 10),
            i = parseInt(a.css("margin-left"), 10);
        isNaN(h) && (h = 0), isNaN(i) && (i = 0), c.top += h, c.left += i, b.offset.setOffset(a[0], b.extend({
            using: function(b) {
                a.css({
                    top: Math.round(b.top),
                    left: Math.round(b.left)
                })
            }
        }, c), 0), a.addClass("in");
        var k = a[0].offsetWidth,
            e = a[0].offsetHeight;
        "top" == f && e != g && (c.top = c.top + g - e);
        var d = this.getViewportAdjustedDelta(f, c, k, e);
        d.left ? c.left += d.left : c.top += d.top;
        var j = /top|bottom/.test(f),
            m = j ? 2 * d.left - l + k : 2 * d.top - g + e;
        a.offset(c), this.replaceArrow(m, a[0][j ? "offsetWidth" : "offsetHeight"], j)
    }, a.prototype.replaceArrow = function(b, c, a) {
        this.arrow().css(a ? "left" : "top", 50 * (1 - b / c) + "%").css(a ? "top" : "left", "")
    }, a.prototype.setContent = function() {
        var a = this.tip(),
            b = this.getTitle();
        a.find(".tooltip-inner")[this.options.html ? "html" : "text"](b), a.removeClass("fade in top bottom left right")
    }, a.prototype.hide = function(f) {
        function d() {
            "in" != g.hoverState && c.detach(), g.$element && g.$element.removeAttr("aria-describedby").trigger("hidden.bs." + g.type), f && f()
        }
        var g = this,
            c = b(this.$tip),
            e = b.Event("hide.bs." + this.type);
        return this.$element.trigger(e), e.isDefaultPrevented() ? void 0 : (c.removeClass("in"), b.support.transition && c.hasClass("fade") ? c.one("bsTransitionEnd", d).emulateTransitionEnd(a.TRANSITION_DURATION) : d(), this.hoverState = null, this)
    }, a.prototype.fixTitle = function() {
        var a = this.$element;
        (a.attr("title") || "string" != typeof a.attr("data-original-title")) && a.attr("data-original-title", a.attr("title") || "").attr("title", "")
    }, a.prototype.hasContent = function() {
        return this.getTitle()
    }, a.prototype.getPosition = function(c) {
        var d = (c = c || this.$element)[0],
            e = "BODY" == d.tagName,
            a = d.getBoundingClientRect();
        null == a.width && (a = b.extend({}, a, {
            width: a.right - a.left,
            height: a.bottom - a.top
        }));
        var f = window.SVGElement && d instanceof window.SVGElement,
            g = e ? {
                top: 0,
                left: 0
            } : f ? null : c.offset(),
            h = {
                scroll: e ? document.documentElement.scrollTop || document.body.scrollTop : c.scrollTop()
            },
            i = e ? {
                width: b(window).width(),
                height: b(window).height()
            } : null;
        return b.extend({}, a, h, i, g)
    }, a.prototype.getCalculatedOffset = function(b, a, c, d) {
        return "bottom" == b ? {
            top: a.top + a.height,
            left: a.left + a.width / 2 - c / 2
        } : "top" == b ? {
            top: a.top - d,
            left: a.left + a.width / 2 - c / 2
        } : "left" == b ? {
            top: a.top + a.height / 2 - d / 2,
            left: a.left - c
        } : {
            top: a.top + a.height / 2 - d / 2,
            left: a.left + a.width
        }
    }, a.prototype.getViewportAdjustedDelta = function(i, c, j, k) {
        var b = {
            top: 0,
            left: 0
        };
        if (!this.$viewport) return b;
        var d = this.options.viewport && this.options.viewport.padding || 0,
            a = this.getPosition(this.$viewport);
        if (/right|left/.test(i)) {
            var e = c.top - d - a.scroll,
                f = c.top + d - a.scroll + k;
            e < a.top ? b.top = a.top - e : f > a.top + a.height && (b.top = a.top + a.height - f)
        } else {
            var g = c.left - d,
                h = c.left + d + j;
            g < a.left ? b.left = a.left - g : h > a.right && (b.left = a.left + a.width - h)
        }
        return b
    }, a.prototype.getTitle = function() {
        var b = this.$element,
            a = this.options;
        return b.attr("data-original-title") || ("function" == typeof a.title ? a.title.call(b[0]) : a.title)
    }, a.prototype.getUID = function(a) {
        do a += ~~(1e6 * Math.random()); while (document.getElementById(a)) return a
    }, a.prototype.tip = function() {
        if (!this.$tip && (this.$tip = b(this.options.template), 1 != this.$tip.length)) throw new Error(this.type + " `template` option must consist of exactly 1 top-level element!");
        return this.$tip
    }, a.prototype.arrow = function() {
        return this.$arrow = this.$arrow || this.tip().find(".tooltip-arrow")
    }, a.prototype.enable = function() {
        this.enabled = !0
    }, a.prototype.disable = function() {
        this.enabled = !1
    }, a.prototype.toggleEnabled = function() {
        this.enabled = !this.enabled
    }, a.prototype.toggle = function(c) {
        var a = this;
        c && ((a = b(c.currentTarget).data("bs." + this.type)) || (a = new this.constructor(c.currentTarget, this.getDelegateOptions()), b(c.currentTarget).data("bs." + this.type, a))), c ? (a.inState.click = !a.inState.click, a.isInStateTrue() ? a.enter(a) : a.leave(a)) : a.tip().hasClass("in") ? a.leave(a) : a.enter(a)
    }, a.prototype.destroy = function() {
        var a = this;
        clearTimeout(this.timeout), this.hide(function() {
            a.$element.off("." + a.type).removeData("bs." + a.type), a.$tip && a.$tip.detach(), a.$tip = null, a.$arrow = null, a.$viewport = null, a.$element = null
        })
    };
    var c = b.fn.tooltip;
    b.fn.tooltip = function(c) {
        return this.each(function() {
            var e = b(this),
                d = e.data("bs.tooltip");
            !d && /destroy|hide/.test(c) || (d || e.data("bs.tooltip", d = new a(this, "object" == typeof c && c)), "string" == typeof c && d[c]())
        })
    }, b.fn.tooltip.Constructor = a, b.fn.tooltip.noConflict = function() {
        return b.fn.tooltip = c, this
    }
}(jQuery),
function(b) {
    "use strict";
    var a = function(a, b) {
        this.init("popover", a, b)
    };
    if (!b.fn.tooltip) throw new Error("Popover requires tooltip.js");
    a.VERSION = "3.3.7", a.DEFAULTS = b.extend({}, b.fn.tooltip.Constructor.DEFAULTS, {
        placement: "right",
        trigger: "click",
        content: "",
        template: '<div class="popover" role="tooltip"><div class="arrow"></div><h3 class="popover-title"></h3><div class="popover-content"></div></div>'
    }), a.prototype = b.extend({}, b.fn.tooltip.Constructor.prototype), a.prototype.constructor = a, a.prototype.getDefaults = function() {
        return a.DEFAULTS
    }, a.prototype.setContent = function() {
        var a = this.tip(),
            c = this.getTitle(),
            b = this.getContent();
        a.find(".popover-title")[this.options.html ? "html" : "text"](c), a.find(".popover-content").children().detach().end()[this.options.html ? "string" == typeof b ? "html" : "append" : "text"](b), a.removeClass("fade top bottom left right in"), a.find(".popover-title").html() || a.find(".popover-title").hide()
    }, a.prototype.hasContent = function() {
        return this.getTitle() || this.getContent()
    }, a.prototype.getContent = function() {
        var b = this.$element,
            a = this.options;
        return b.attr("data-content") || ("function" == typeof a.content ? a.content.call(b[0]) : a.content)
    }, a.prototype.arrow = function() {
        return this.$arrow = this.$arrow || this.tip().find(".arrow")
    };
    var c = b.fn.popover;
    b.fn.popover = function(c) {
        return this.each(function() {
            var e = b(this),
                d = e.data("bs.popover");
            !d && /destroy|hide/.test(c) || (d || e.data("bs.popover", d = new a(this, "object" == typeof c && c)), "string" == typeof c && d[c]())
        })
    }, b.fn.popover.Constructor = a, b.fn.popover.noConflict = function() {
        return b.fn.popover = c, this
    }
}(jQuery),
function(a) {
    "use strict";

    function d(c) {
        return this.each(function() {
            var e = a(this),
                d = e.data("bs.tab");
            d || e.data("bs.tab", d = new b(this)), "string" == typeof c && d[c]()
        })
    }
    var b = function(b) {
        this.element = a(b)
    };
    b.VERSION = "3.3.7", b.TRANSITION_DURATION = 150, b.prototype.show = function() {
        var b = this.element,
            d = b.closest("ul:not(.dropdown-menu)"),
            c = b.data("target");
        if (c || (c = (c = b.attr("href")) && c.replace(/.*(?=#[^\s]*$)/, "")), !b.parent("li").hasClass("active")) {
            var e = d.find(".active:last a"),
                f = a.Event("hide.bs.tab", {
                    relatedTarget: b[0]
                }),
                g = a.Event("show.bs.tab", {
                    relatedTarget: e[0]
                });
            if (e.trigger(f), b.trigger(g), !g.isDefaultPrevented() && !f.isDefaultPrevented()) {
                var h = a(c);
                this.activate(b.closest("li"), d), this.activate(h, h.parent(), function() {
                    e.trigger({
                        type: "hidden.bs.tab",
                        relatedTarget: b[0]
                    }), b.trigger({
                        type: "shown.bs.tab",
                        relatedTarget: e[0]
                    })
                })
            }
        }
    }, b.prototype.activate = function(h, d, f) {
        function e() {
            c.removeClass("active").find("> .dropdown-menu > .active").removeClass("active").end().find('[data-toggle="tab"]').attr("aria-expanded", !1), h.addClass("active").find('[data-toggle="tab"]').attr("aria-expanded", !0), g ? (h[0].offsetWidth, h.addClass("in")) : h.removeClass("fade"), h.parent(".dropdown-menu").length && h.closest("li.dropdown").addClass("active").end().find('[data-toggle="tab"]').attr("aria-expanded", !0), f && f()
        }
        var c = d.find("> .active"),
            g = f && a.support.transition && (c.length && c.hasClass("fade") || !!d.find("> .fade").length);
        c.length && g ? c.one("bsTransitionEnd", e).emulateTransitionEnd(b.TRANSITION_DURATION) : e(), c.removeClass("in")
    };
    var e = a.fn.tab;
    a.fn.tab = d, a.fn.tab.Constructor = b, a.fn.tab.noConflict = function() {
        return a.fn.tab = e, this
    };
    var c = function(b) {
        b.preventDefault(), d.call(a(this), "show")
    };
    a(document).on("click.bs.tab.data-api", '[data-toggle="tab"]', c).on("click.bs.tab.data-api", '[data-toggle="pill"]', c)
}(jQuery),
function(b) {
    "use strict";

    function c(c) {
        return this.each(function() {
            var e = b(this),
                d = e.data("bs.affix");
            d || e.data("bs.affix", d = new a(this, "object" == typeof c && c)), "string" == typeof c && d[c]()
        })
    }
    var a = function(c, d) {
        this.options = b.extend({}, a.DEFAULTS, d), this.$target = b(this.options.target).on("scroll.bs.affix.data-api", b.proxy(this.checkPosition, this)).on("click.bs.affix.data-api", b.proxy(this.checkPositionWithEventLoop, this)), this.$element = b(c), this.affixed = null, this.unpin = null, this.pinnedOffset = null, this.checkPosition()
    };
    a.VERSION = "3.3.7", a.RESET = "affix affix-top affix-bottom", a.DEFAULTS = {
        offset: 0,
        target: window
    }, a.prototype.getState = function(d, h, a, c) {
        var b = this.$target.scrollTop(),
            e = this.$element.offset(),
            f = this.$target.height();
        if (null != a && "top" == this.affixed) return a > b && "top";
        if ("bottom" == this.affixed) return null != a ? !(b + this.unpin <= e.top) && "bottom" : !(d - c >= b + f) && "bottom";
        var g = null == this.affixed,
            i = g ? b : e.top,
            j = g ? f : h;
        return null != a && a >= b ? "top" : null != c && i + j >= d - c && "bottom"
    }, a.prototype.getPinnedOffset = function() {
        if (this.pinnedOffset) return this.pinnedOffset;
        this.$element.removeClass(a.RESET).addClass("affix");
        var b = this.$target.scrollTop(),
            c = this.$element.offset();
        return this.pinnedOffset = c.top - b
    }, a.prototype.checkPositionWithEventLoop = function() {
        setTimeout(b.proxy(this.checkPosition, this), 1)
    }, a.prototype.checkPosition = function() {
        if (this.$element.is(":visible")) {
            var h = this.$element.height(),
                c = this.options.offset,
                f = c.top,
                e = c.bottom,
                i = Math.max(b(document).height(), b(document.body).height());
            "object" != typeof c && (e = f = c), "function" == typeof f && (f = c.top(this.$element)), "function" == typeof e && (e = c.bottom(this.$element));
            var d = this.getState(i, h, f, e);
            if (this.affixed != d) {
                null != this.unpin && this.$element.css("top", "");
                var g = "affix" + (d ? "-" + d : ""),
                    j = b.Event(g + ".bs.affix");
                if (this.$element.trigger(j), j.isDefaultPrevented()) return;
                this.affixed = d, this.unpin = "bottom" == d ? this.getPinnedOffset() : null, this.$element.removeClass(a.RESET).addClass(g).trigger(g.replace("affix", "affixed") + ".bs.affix")
            }
            "bottom" == d && this.$element.offset({
                top: i - h - e
            })
        }
    };
    var d = b.fn.affix;
    b.fn.affix = c, b.fn.affix.Constructor = a, b.fn.affix.noConflict = function() {
        return b.fn.affix = d, this
    }, b(window).on("load", function() {
        b('[data-spy="affix"]').each(function() {
            var d = b(this),
                a = d.data();
            a.offset = a.offset || {}, null != a.offsetBottom && (a.offset.bottom = a.offsetBottom), null != a.offsetTop && (a.offset.top = a.offsetTop), c.call(d, a)
        })
    })
}(jQuery),
function(b) {
    "use strict";

    function d(a) {
        var c;
        return b(a.attr("data-target") || (c = a.attr("href")) && c.replace(/.*(?=#[^\s]+$)/, ""))
    }

    function c(c) {
        return this.each(function() {
            var e = b(this),
                d = e.data("bs.collapse"),
                f = b.extend({}, a.DEFAULTS, e.data(), "object" == typeof c && c);
            !d && f.toggle && /show|hide/.test(c) && (f.toggle = !1), d || e.data("bs.collapse", d = new a(this, f)), "string" == typeof c && d[c]()
        })
    }
    var a = function(c, d) {
        this.$element = b(c), this.options = b.extend({}, a.DEFAULTS, d), this.$trigger = b('[data-toggle="collapse"][href="#' + c.id + '"],[data-toggle="collapse"][data-target="#' + c.id + '"]'), this.transitioning = null, this.options.parent ? this.$parent = this.getParent() : this.addAriaAndCollapsedClass(this.$element, this.$trigger), this.options.toggle && this.toggle()
    };
    a.VERSION = "3.3.7", a.TRANSITION_DURATION = 350, a.DEFAULTS = {
        toggle: !0
    }, a.prototype.dimension = function() {
        return this.$element.hasClass("width") ? "width" : "height"
    }, a.prototype.show = function() {
        if (!this.transitioning && !this.$element.hasClass("in")) {
            var e, d = this.$parent && this.$parent.children(".panel").children(".in, .collapsing");
            if (!(d && d.length && (e = d.data("bs.collapse")) && e.transitioning)) {
                var g = b.Event("show.bs.collapse");
                if (this.$element.trigger(g), !g.isDefaultPrevented()) {
                    d && d.length && (c.call(d, "hide"), e || d.data("bs.collapse", null));
                    var f = this.dimension();
                    this.$element.removeClass("collapse").addClass("collapsing")[f](0).attr("aria-expanded", !0), this.$trigger.removeClass("collapsed").attr("aria-expanded", !0), this.transitioning = 1;
                    var h = function() {
                        this.$element.removeClass("collapsing").addClass("collapse in")[f](""), this.transitioning = 0, this.$element.trigger("shown.bs.collapse")
                    };
                    if (!b.support.transition) return h.call(this);
                    var i = b.camelCase(["scroll", f].join("-"));
                    this.$element.one("bsTransitionEnd", b.proxy(h, this)).emulateTransitionEnd(a.TRANSITION_DURATION)[f](this.$element[0][i])
                }
            }
        }
    }, a.prototype.hide = function() {
        if (!this.transitioning && this.$element.hasClass("in")) {
            var d = b.Event("hide.bs.collapse");
            if (this.$element.trigger(d), !d.isDefaultPrevented()) {
                var c = this.dimension();
                this.$element[c](this.$element[c]())[0].offsetHeight, this.$element.addClass("collapsing").removeClass("collapse in").attr("aria-expanded", !1), this.$trigger.addClass("collapsed").attr("aria-expanded", !1), this.transitioning = 1;
                var e = function() {
                    this.transitioning = 0, this.$element.removeClass("collapsing").addClass("collapse").trigger("hidden.bs.collapse")
                };
                return b.support.transition ? void this.$element[c](0).one("bsTransitionEnd", b.proxy(e, this)).emulateTransitionEnd(a.TRANSITION_DURATION) : e.call(this)
            }
        }
    }, a.prototype.toggle = function() {
        this[this.$element.hasClass("in") ? "hide" : "show"]()
    }, a.prototype.getParent = function() {
        return b(this.options.parent).find('[data-toggle="collapse"][data-parent="' + this.options.parent + '"]').each(b.proxy(function(e, c) {
            var a = b(c);
            this.addAriaAndCollapsedClass(d(a), a)
        }, this)).end()
    }, a.prototype.addAriaAndCollapsedClass = function(b, c) {
        var a = b.hasClass("in");
        b.attr("aria-expanded", a), c.toggleClass("collapsed", !a).attr("aria-expanded", a)
    };
    var e = b.fn.collapse;
    b.fn.collapse = c, b.fn.collapse.Constructor = a, b.fn.collapse.noConflict = function() {
        return b.fn.collapse = e, this
    }, b(document).on("click.bs.collapse.data-api", '[data-toggle="collapse"]', function(f) {
        var a = b(this);
        a.attr("data-target") || f.preventDefault();
        var e = d(a),
            g = e.data("bs.collapse") ? "toggle" : a.data();
        c.call(e, g)
    })
}(jQuery),
function(b) {
    "use strict";

    function a(c, d) {
        this.$body = b(document.body), this.$scrollElement = b(b(c).is(document.body) ? window : c), this.options = b.extend({}, a.DEFAULTS, d), this.selector = (this.options.target || "") + " .nav li > a", this.offsets = [], this.targets = [], this.activeTarget = null, this.scrollHeight = 0, this.$scrollElement.on("scroll.bs.scrollspy", b.proxy(this.process, this)), this.refresh(), this.process()
    }

    function c(c) {
        return this.each(function() {
            var e = b(this),
                d = e.data("bs.scrollspy");
            d || e.data("bs.scrollspy", d = new a(this, "object" == typeof c && c)), "string" == typeof c && d[c]()
        })
    }
    a.VERSION = "3.3.7", a.DEFAULTS = {
        offset: 10
    }, a.prototype.getScrollHeight = function() {
        return this.$scrollElement[0].scrollHeight || Math.max(this.$body[0].scrollHeight, document.documentElement.scrollHeight)
    }, a.prototype.refresh = function() {
        var d = this,
            a = "offset",
            c = 0;
        this.offsets = [], this.targets = [], this.scrollHeight = this.getScrollHeight(), b.isWindow(this.$scrollElement[0]) || (a = "position", c = this.$scrollElement.scrollTop()), this.$body.find(this.selector).map(function() {
            var f = b(this),
                e = f.data("target") || f.attr("href"),
                d = /^#./.test(e) && b(e);
            return d && d.length && d.is(":visible") && [
                [d[a]().top + c, e]
            ] || null
        }).sort(function(a, b) {
            return a[0] - b[0]
        }).each(function() {
            d.offsets.push(this[0]), d.targets.push(this[1])
        })
    }, a.prototype.process = function() {
        var a, c = this.$scrollElement.scrollTop() + this.options.offset,
            f = this.getScrollHeight(),
            g = this.options.offset + f - this.$scrollElement.height(),
            b = this.offsets,
            d = this.targets,
            e = this.activeTarget;
        if (this.scrollHeight != f && this.refresh(), c >= g) return e != (a = d[d.length - 1]) && this.activate(a);
        if (e && c < b[0]) return this.activeTarget = null, this.clear();
        for (a = b.length; a--;) e != d[a] && c >= b[a] && (void 0 === b[a + 1] || c < b[a + 1]) && this.activate(d[a])
    }, a.prototype.activate = function(c) {
        this.activeTarget = c, this.clear();
        var a = b(this.selector + '[data-target="' + c + '"],' + this.selector + '[href="' + c + '"]').parents("li").addClass("active");
        a.parent(".dropdown-menu").length && (a = a.closest("li.dropdown").addClass("active")), a.trigger("activate.bs.scrollspy")
    }, a.prototype.clear = function() {
        b(this.selector).parentsUntil(this.options.target, ".active").removeClass("active")
    };
    var d = b.fn.scrollspy;
    b.fn.scrollspy = c, b.fn.scrollspy.Constructor = a, b.fn.scrollspy.noConflict = function() {
        return b.fn.scrollspy = d, this
    }, b(window).on("load.bs.scrollspy.data-api", function() {
        b('[data-spy="scroll"]').each(function() {
            var a = b(this);
            c.call(a, a.data())
        })
    })
}(jQuery),
function(a) {
    "use strict";
    a.fn.emulateTransitionEnd = function(b) {
        var c = !1,
            d = this;
        return a(this).one("bsTransitionEnd", function() {
            c = !0
        }), setTimeout(function() {
            c || a(d).trigger(a.support.transition.end)
        }, b), this
    }, a(function() {
        a.support.transition = function() {
            var c = document.createElement("bootstrap"),
                a = {
                    WebkitTransition: "webkitTransitionEnd",
                    MozTransition: "transitionend",
                    OTransition: "oTransitionEnd otransitionend",
                    transition: "transitionend"
                };
            for (var b in a)
                if (void 0 !== c.style[b]) return {
                    end: a[b]
                };
            return !1
        }(), a.support.transition && (a.event.special.bsTransitionEnd = {
            bindType: a.support.transition.end,
            delegateType: a.support.transition.end,
            handle: function(b) {
                return a(b.target).is(this) ? b.handleObj.handler.apply(this, arguments) : void 0
            }
        })
    })
}(jQuery),
/*!
 * IE10 viewport hack for Surface/desktop Windows 8 bug
 * Copyright 2014-2015 Twitter, Inc.
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
 */
function() {
    "use strict";
    if (navigator.userAgent.match(/IEMobile\/10\.0/)) {
        var a = document.createElement("style");
        a.appendChild(document.createTextNode("@-ms-viewport{width:auto!important}")), document.querySelector("head").appendChild(a)
    }
}(),
function($) {
    $.fn.viewportChecker = function(b) {
        var a = {
            classToAdd: "visible",
            classToRemove: "invisible",
            classToAddForFullView: "full-visible",
            removeClassAfterAnimation: !1,
            offset: 100,
            repeat: !1,
            invertBottomOffset: !0,
            callbackFunction: function(a, b) {},
            scrollHorizontal: !1,
            scrollBox: window
        };
        $.extend(a, b);
        var c = this,
            d = {
                height: $(a.scrollBox).height(),
                width: $(a.scrollBox).width()
            };
        return this.checkElements = function() {
            var b, e;
            e = a.scrollHorizontal ? (b = Math.max($("html").scrollLeft(), $("body").scrollLeft(), $(window).scrollLeft())) + d.width : (b = Math.max($("html").scrollTop(), $("body").scrollTop(), $(window).scrollTop())) + d.height, c.each(function() {
                var c = $(this),
                    f = {},
                    g = {};
                if (c.data("vp-add-class") && (g.classToAdd = c.data("vp-add-class")), c.data("vp-remove-class") && (g.classToRemove = c.data("vp-remove-class")), c.data("vp-add-class-full-view") && (g.classToAddForFullView = c.data("vp-add-class-full-view")), c.data("vp-keep-add-class") && (g.removeClassAfterAnimation = c.data("vp-remove-after-animation")), c.data("vp-offset") && (g.offset = c.data("vp-offset")), c.data("vp-repeat") && (g.repeat = c.data("vp-repeat")), c.data("vp-scrollHorizontal") && (g.scrollHorizontal = c.data("vp-scrollHorizontal")), c.data("vp-invertBottomOffset") && (g.scrollHorizontal = c.data("vp-invertBottomOffset")), $.extend(f, a), $.extend(f, g), !c.data("vp-animated") || f.repeat) {
                    String(f.offset).indexOf("%") > 0 && (f.offset = parseInt(f.offset) / 100 * d.height);
                    var h = f.scrollHorizontal ? c.offset().left : c.offset().top,
                        k = f.scrollHorizontal ? h + c.width() : h + c.height(),
                        i = Math.round(h) + f.offset,
                        j = f.scrollHorizontal ? i + c.width() : i + c.height();
                    f.invertBottomOffset && (j -= 2 * f.offset), i < e && j > b ? (c.removeClass(f.classToRemove), c.addClass(f.classToAdd), f.callbackFunction(c, "add"), k <= e && h >= b ? c.addClass(f.classToAddForFullView) : c.removeClass(f.classToAddForFullView), c.data("vp-animated", !0), f.removeClassAfterAnimation && c.one("webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend", function() {
                        c.removeClass(f.classToAdd)
                    })) : c.hasClass(f.classToAdd) && f.repeat && (c.removeClass(f.classToAdd + " " + f.classToAddForFullView), f.callbackFunction(c, "remove"), c.data("vp-animated", !1))
                }
            })
        }, ("ontouchstart" in window || "onmsgesturechange" in window) && $(document).bind("touchmove MSPointerMove pointermove", this.checkElements), $(a.scrollBox).bind("load scroll", this.checkElements), $(window).resize(function(b) {
            d = {
                height: $(a.scrollBox).height(),
                width: $(a.scrollBox).width()
            }, c.checkElements()
        }), this.checkElements(), this
    }
}(jQuery),
function(a) {
    "function" == typeof define && define.amd ? define(["jquery"], a) : "object" == typeof exports ? module.exports = a(require("jquery")) : a(jQuery)
}(function($) {
    "use strict";
    var b = "readmore",
        c = {
            speed: 100,
            collapsedHeight: 200,
            heightMargin: 16,
            moreLink: '<a href="#">Read More</a>',
            lessLink: '<a href="#">Close</a>',
            embedCSS: !0,
            blockCSS: "display: block; width: 100%;",
            startOpen: !1,
            blockProcessed: function() {},
            beforeToggle: function() {},
            afterToggle: function() {}
        },
        d = {},
        e = 0;

    function f(a) {
        var b = a.clone().css({
                height: "auto",
                width: a.width(),
                maxHeight: "none",
                overflow: "hidden"
            }).insertAfter(a),
            d = b.outerHeight(),
            c = parseInt(b.css({
                maxHeight: ""
            }).css("max-height").replace(/[^-\d\.]/g, ""), 10),
            e = a.data("defaultHeight");
        b.remove();
        var f = c || a.data("collapsedHeight") || e;
        a.data({
            expandedHeight: d,
            maxHeight: c,
            collapsedHeight: f
        }).css({
            maxHeight: "none"
        })
    }
    var g = function(a, b, c) {
        var d;
        return function() {
            var b = this,
                e = arguments,
                f = function() {
                    d = null, c || a.apply(b, e)
                },
                g = c && !d;
            clearTimeout(d), d = setTimeout(f, 100), g && a.apply(b, e)
        }
    }(function() {
        $("[data-readmore]").each(function() {
            var a = $(this),
                b = "true" === a.attr("aria-expanded");
            f(a), a.css({
                height: a.data(b ? "expandedHeight" : "collapsedHeight")
            })
        })
    }, 100);

    function a(a, e) {
        this.element = a, this.options = $.extend({}, c, e),
            function(a) {
                if (!d[a.selector]) {
                    var c, e, b, f = " ";
                    a.embedCSS && "" !== a.blockCSS && (f += a.selector + " + [data-readmore-toggle], " + a.selector + "[data-readmore]{" + a.blockCSS + "}"), f += a.selector + "[data-readmore]{transition: height " + a.speed + "ms;overflow: hidden;}", c = document, e = f, (b = c.createElement("style")).type = "text/css", b.styleSheet ? b.styleSheet.cssText = e : b.appendChild(c.createTextNode(e)), c.getElementsByTagName("head")[0].appendChild(b), d[a.selector] = !0
                }
            }(this.options), this._defaults = c, this._name = b, this.init(), window.addEventListener ? (window.addEventListener("load", g), window.addEventListener("resize", g)) : (window.attachEvent("load", g), window.attachEvent("resize", g))
    }
    a.prototype = {
        init: function() {
            var a = $(this.element);
            a.data({
                defaultHeight: this.options.collapsedHeight,
                heightMargin: this.options.heightMargin
            }), f(a);
            var c = a.data("collapsedHeight"),
                h = a.data("heightMargin");
            if (a.outerHeight(!0) <= c + h) return this.options.blockProcessed && "function" == typeof this.options.blockProcessed && this.options.blockProcessed(a, !1), !0;
            var d, g, i, b = a.attr("id") || (g = ++e, String(null == d ? "rmjs-" : d) + g),
                j = this.options.startOpen ? this.options.lessLink : this.options.moreLink;
            a.attr({
                "data-readmore": "",
                "aria-expanded": this.options.startOpen,
                id: b
            }), a.after($(j).on("click", (i = this, function(b) {
                i.toggle(this, a[0], b)
            })).attr({
                "data-readmore-toggle": b,
                "aria-controls": b
            })), this.options.startOpen || a.css({
                height: c
            }), this.options.blockProcessed && "function" == typeof this.options.blockProcessed && this.options.blockProcessed(a, !0)
        },
        toggle: function(b, c, f) {
            f && f.preventDefault(), b || (b = $('[aria-controls="' + this.element.id + '"]')[0]), c || (c = this.element);
            var i, j, a = $(c),
                d = "",
                e = "",
                g = !1,
                h = a.data("collapsedHeight");
            a.height() <= h ? (d = a.data("expandedHeight") + "px", e = "lessLink", g = !0) : (d = h, e = "moreLink"), this.options.beforeToggle && "function" == typeof this.options.beforeToggle && this.options.beforeToggle(b, a, !g), a.css({
                height: d
            }), a.on("transitionend", (i = this, function() {
                i.options.afterToggle && "function" == typeof i.options.afterToggle && i.options.afterToggle(b, a, g), $(this).attr({
                    "aria-expanded": g
                }).off("transitionend")
            })), $(b).replaceWith($(this.options[e]).on("click", (j = this, function(a) {
                j.toggle(this, c, a)
            })).attr({
                "data-readmore-toggle": a.attr("id"),
                "aria-controls": a.attr("id")
            }))
        },
        destroy: function() {
            $(this.element).each(function() {
                var a = $(this);
                a.attr({
                    "data-readmore": null,
                    "aria-expanded": null
                }).css({
                    maxHeight: "",
                    height: ""
                }).next("[data-readmore-toggle]").remove(), a.removeData()
            })
        }
    }, $.fn.readmore = function(c) {
        var d = arguments,
            e = this.selector;
        return "object" == typeof(c = c || {}) ? this.each(function() {
            if ($.data(this, "plugin_" + b)) {
                var d = $.data(this, "plugin_" + b);
                d.destroy.apply(d)
            }
            c.selector = e, $.data(this, "plugin_" + b, new a(this, c))
        }) : "string" == typeof c && "_" !== c[0] && "init" !== c ? this.each(function() {
            var e = $.data(this, "plugin_" + b);
            e instanceof a && "function" == typeof e[c] && e[c].apply(e, Array.prototype.slice.call(d, 1))
        }) : void 0
    }
}), jQuery(document).ready(function() {
        setTimeout("highlightNav()", 100), jQuery(".ga-code").click(function() {
            return ga((ga_arr = (ga_attr = jQuery(this).attr("ga")).split("|"))[0], ga_arr[1], ga_arr[2], ga_arr[3]), !0
        }), jQuery("#status").fadeOut(), jQuery("#preloader").delay(300).fadeOut("slow"), jQuery("#searchSubmit").click(function() {
            key = (key = jQuery('input[name="q"]').val()).replace(/ /gi, "+"), location.href = Drupal.settings.basePath + "search.php?title=" + key
        });
        var a = jQuery("input, textarea");
        jQuery(a).each(function(b, a) {
            jQuery(a).hasClass("error") && jQuery(a).parent().siblings("p").addClass("error")
        })
    }), jQuery(function() {
        jQuery(window).on("scroll", function() {
            jQuery(window).scrollTop() > 100 ? jQuery(".navbar-fixed-top").addClass("header-active") : jQuery(".navbar-fixed-top").removeClass("header-active")
        })
    }), jQuery(document).ready(function() {
        jQuery("#myCarousel").on("slide.bs.carousel", function(a) {
            jQuery(".transition-timer-carousel-progress-bar", this).removeClass("animate").css("width", "0%")
        }).on("slid.bs.carousel", function(a) {
            jQuery(".transition-timer-carousel-progress-bar", this).addClass("animate").css("width", "100%")
        }), jQuery(".transition-timer-carousel-progress-bar", "#myCarousel").css("width", "100%")
    }), jQuery(document).ready(function() {
        jQuery(".mydata").addClass("hidden").viewportChecker({
            classToAdd: "visible animated fadeIn",
            offset: 200
        })
    }), jQuery(document).ready(function() {
        100 >= jQuery(window).scrollTop() && jQuery("#scrollUp").hide(), jQuery(window).scroll(function() {
            jQuery(this).scrollTop() > 100 ? jQuery("#scrollUp").fadeIn() : jQuery("#scrollUp").fadeOut()
        }), jQuery("#scrollUp").click(function() {
            return jQuery("html, body").animate({
                scrollTop: 0
            }, 600), !1
        }), jQuery(document.querySelector("#scrollUp .global-form-btn")).click(function(a) {
            a.stopPropagation(), jQuery("#initEnq").trigger("click")
        }), jQuery("article").readmore({
            moreLink: '<span class="text-right"><a href="#"><i class="fa fa-plus" aria-hidden="true"></i></a></span>',
            lessLink: '<span class="text-right"><a href="#"><i class="fa fa-minus" aria-hidden="true"></i></a></span>',
            speed: 700,
            collapsedHeight: 480,
            afterToggle: function(c, a, b) {
                b || jQuery("html, body").animate({
                    scrollTop: a.offset().top
                }, {
                    duration: 250
                })
            }
        })
    }), jQuery(function(a) {
        "function" == typeof define && define.amd && define.amd.jQuery ? define(["jquery"], a) : a("undefined" != typeof module && module.exports ? require("jquery") : jQuery)
    }(function(a) {
        var c = "left",
            d = "right",
            e = "down",
            f = "none",
            g = "auto",
            m = "swipe",
            n = "pinch",
            o = "doubletap",
            p = "longtap",
            h = "horizontal",
            i = "vertical",
            j = "start",
            k = "move",
            l = "cancel",
            b = "ontouchstart" in window,
            q = window.navigator.msPointerEnabled && !window.navigator.pointerEnabled && !b,
            r = (window.navigator.pointerEnabled || window.navigator.msPointerEnabled) && !b,
            s = "TouchSwipe";

        function t(b) {
            return b && void 0 === b.allowPageScroll && (void 0 !== b.swipe || void 0 !== b.swipeStatus) && (b.allowPageScroll = f), void 0 !== b.click && void 0 === b.tap && (b.tap = b.click), b || (b = {}), b = a.extend({}, a.fn.swipe.defaults, b), this.each(function() {
                var d = a(this),
                    c = d.data(s);
                c || (c = new u(this, b), d.data(s, c))
            })
        }

        function u(y, u) {
            var u = a.extend({}, u),
                t = b || r || !u.fallbackToMouseEvents,
                v = t ? r ? q ? "MSPointerDown" : "pointerdown" : "touchstart" : "mousedown",
                z = t ? r ? q ? "MSPointerMove" : "pointermove" : "touchmove" : "mousemove",
                A = t ? r ? q ? "MSPointerUp" : "pointerup" : "touchend" : "mouseup",
                B = t ? r ? "mouseleave" : null : "mouseleave",
                w = r ? q ? "MSPointerCancel" : "pointercancel" : "touchcancel",
                C = 0,
                D = null,
                E = null,
                F = 0,
                G = 0,
                H = 0,
                I = 1,
                J = 0,
                K = 0,
                L = null,
                x = a(y),
                M = "start",
                N = 0,
                O = {},
                P = 0,
                Q = 0,
                R = 0,
                S = 0,
                T = 0,
                U = null,
                V = null;
            try {
                x.bind(v, X), x.bind(w, _)
            } catch (W) {
                a.error("events not supported " + v + "," + w + " on jQuery.swipe")
            }

            function X(c) {
                if (!aB() && !(a(c.target).closest(u.excludedElements, x).length > 0)) {
                    var d, e = c.originalEvent ? c.originalEvent : c,
                        b = e.touches,
                        f = b ? b[0] : e;
                    return (M = j, b ? N = b.length : !1 !== u.preventDefaultEvents && c.preventDefault(), C = 0, D = null, E = null, K = null, F = 0, G = 0, H = 0, I = 1, J = 0, L = aI(), az(), aD(0, f), !b || N === u.fingers || "all" === u.fingers || ak() ? (P = aQ(), 2 == N && (aD(1, b[1]), G = H = aL(O[0].start, O[1].start)), (u.swipeStatus || u.pinchStatus) && (d = ad(e, M))) : d = !1, !1 === d) ? (ad(e, M = l), d) : (u.hold && (V = setTimeout(a.proxy(function() {
                        x.trigger("hold", [e.target]), u.hold && (d = u.hold.call(x, e, e.target))
                    }, this), u.longTapThreshold)), aC(!0), null)
                }
            }

            function Y(d) {
                var c = d.originalEvent ? d.originalEvent : d;
                if (!("end" === M || M === l || aA())) {
                    var f, a = c.touches,
                        g = a ? a[0] : c,
                        b = aE(g);
                    if (Q = aQ(), a && (N = a.length), u.hold && clearTimeout(V), M = k, 2 == N && (0 == G ? (aD(1, a[1]), G = H = aL(O[0].start, O[1].start)) : (aE(a[1]), H = aL(O[0].end, O[1].end), K = aN(O[0].end, O[1].end)), I = aM(G, H), J = Math.abs(G - H)), N === u.fingers || "all" === u.fingers || !a || ak()) {
                        if (D = aP(b.start, b.end), E = aP(b.last, b.end), ai(d, E), C = aO(b.start, b.end), F = aK(), aG(D, C), f = ad(c, M), !u.triggerOnTouchEnd || u.triggerOnTouchLeave) {
                            var e = !0;
                            if (u.triggerOnTouchLeave) {
                                var h = aR(this);
                                e = aS(b.end, h)
                            }!u.triggerOnTouchEnd && e ? M = ac(k) : u.triggerOnTouchLeave && !e && (M = ac("end")), (M == l || "end" == M) && ad(c, M)
                        }
                    } else ad(c, M = l);
                    !1 === f && ad(c, M = l)
                }
            }

            function Z(b) {
                var a = b.originalEvent ? b.originalEvent : b,
                    c = a.touches;
                if (c) {
                    if (c.length && !aA()) return ay(a), !0;
                    if (c.length && aA()) return !0
                }
                return aA() && (N = S), Q = aQ(), F = aK(), ag() || !af() ? ad(a, M = l) : u.triggerOnTouchEnd || !1 == u.triggerOnTouchEnd && M === k ? (!1 !== u.preventDefaultEvents && b.preventDefault(), ad(a, M = "end")) : !u.triggerOnTouchEnd && ar() ? ae(a, M = "end", "tap") : M === k && ad(a, M = l), aC(!1), null
            }

            function _() {
                N = 0, Q = 0, P = 0, G = 0, H = 0, I = 1, az(), aC(!1)
            }

            function aa(a) {
                var b = a.originalEvent ? a.originalEvent : a;
                u.triggerOnTouchLeave && (M = ac("end"), ad(b, M))
            }

            function ab() {
                x.unbind(v, X), x.unbind(w, _), x.unbind(z, Y), x.unbind(A, Z), B && x.unbind(B, aa), aC(!1)
            }

            function ac(b) {
                var a = b,
                    d = ah(),
                    c = af(),
                    e = ag();
                return !d || e ? a = l : c && b == k && (!u.triggerOnTouchEnd || u.triggerOnTouchLeave) ? a = "end" : !c && "end" == b && u.triggerOnTouchLeave && (a = l), a
            }

            function ad(b, c) {
                var a, d = b.touches;
                return (ao() || an()) && (a = ae(b, c, m)), (al() || ak()) && !1 !== a && (a = ae(b, c, n)), aw() && !1 !== a ? a = ae(b, c, o) : ax() && !1 !== a ? a = ae(b, c, p) : av() && !1 !== a && (a = ae(b, c, "tap")), c === l && (an() && (a = ae(b, c, m)), ak() && (a = ae(b, c, n)), _(b)), "end" !== c || d && d.length || _(b), a
            }

            function ae(b, g, h) {
                var f;
                if (h == m) {
                    if (x.trigger("swipeStatus", [g, D || null, C || 0, F || 0, N, O, E]), u.swipeStatus && !1 === (f = u.swipeStatus.call(x, b, g, D || null, C || 0, F || 0, N, O, E))) return !1;
                    if ("end" == g && am()) {
                        if (clearTimeout(U), clearTimeout(V), x.trigger("swipe", [D, C, F, N, O, E]), u.swipe && !1 === (f = u.swipe.call(x, b, D, C, F, N, O, E))) return !1;
                        switch (D) {
                            case c:
                                x.trigger("swipeLeft", [D, C, F, N, O, E]), u.swipeLeft && (f = u.swipeLeft.call(x, b, D, C, F, N, O, E));
                                break;
                            case d:
                                x.trigger("swipeRight", [D, C, F, N, O, E]), u.swipeRight && (f = u.swipeRight.call(x, b, D, C, F, N, O, E));
                                break;
                            case "up":
                                x.trigger("swipeUp", [D, C, F, N, O, E]), u.swipeUp && (f = u.swipeUp.call(x, b, D, C, F, N, O, E));
                                break;
                            case e:
                                x.trigger("swipeDown", [D, C, F, N, O, E]), u.swipeDown && (f = u.swipeDown.call(x, b, D, C, F, N, O, E))
                        }
                    }
                }
                if (h == n) {
                    if (x.trigger("pinchStatus", [g, K || null, J || 0, F || 0, N, I, O]), u.pinchStatus && !1 === (f = u.pinchStatus.call(x, b, g, K || null, J || 0, F || 0, N, I, O))) return !1;
                    if ("end" == g && aj()) switch (K) {
                        case "in":
                            x.trigger("pinchIn", [K || null, J || 0, F || 0, N, I, O]), u.pinchIn && (f = u.pinchIn.call(x, b, K || null, J || 0, F || 0, N, I, O));
                            break;
                        case "out":
                            x.trigger("pinchOut", [K || null, J || 0, F || 0, N, I, O]), u.pinchOut && (f = u.pinchOut.call(x, b, K || null, J || 0, F || 0, N, I, O))
                    }
                }
                return "tap" == h ? (g === l || "end" === g) && (clearTimeout(U), clearTimeout(V), as() && !au() ? (T = aQ(), U = setTimeout(a.proxy(function() {
                    T = null, x.trigger("tap", [b.target]), u.tap && (f = u.tap.call(x, b, b.target))
                }, this), u.doubleTapThreshold)) : (T = null, x.trigger("tap", [b.target]), u.tap && (f = u.tap.call(x, b, b.target)))) : h == o ? (g === l || "end" === g) && (clearTimeout(U), clearTimeout(V), T = null, x.trigger("doubletap", [b.target]), u.doubleTap && (f = u.doubleTap.call(x, b, b.target))) : h == p && (g === l || "end" === g) && (clearTimeout(U), T = null, x.trigger("longtap", [b.target]), u.longTap && (f = u.longTap.call(x, b, b.target))), f
            }

            function af() {
                var a = !0;
                return null !== u.threshold && (a = C >= u.threshold), a
            }

            function ag() {
                var a = !1;
                return null !== u.cancelThreshold && null !== D && (a = aH(D) - C >= u.cancelThreshold), a
            }

            function ah() {
                return !u.maxTimeThreshold || !(F >= u.maxTimeThreshold)
            }

            function ai(b, j) {
                if (!1 !== u.preventDefaultEvents) {
                    if (u.allowPageScroll === f) b.preventDefault();
                    else {
                        var a = u.allowPageScroll === g;
                        switch (j) {
                            case c:
                                (u.swipeLeft && a || !a && u.allowPageScroll != h) && b.preventDefault();
                                break;
                            case d:
                                (u.swipeRight && a || !a && u.allowPageScroll != h) && b.preventDefault();
                                break;
                            case "up":
                                (u.swipeUp && a || !a && u.allowPageScroll != i) && b.preventDefault();
                                break;
                            case e:
                                (u.swipeDown && a || !a && u.allowPageScroll != i) && b.preventDefault()
                        }
                    }
                }
            }

            function aj() {
                var a = ap(),
                    b = aq(),
                    c = null === u.pinchThreshold || J >= u.pinchThreshold;
                return a && b && c
            }

            function ak() {
                return !!(u.pinchStatus || u.pinchIn || u.pinchOut)
            }

            function al() {
                return !!(aj() && ak())
            }

            function am() {
                var a = ah(),
                    b = af(),
                    c = ap(),
                    d = aq();
                return !ag() && d && c && b && a
            }

            function an() {
                return !!(u.swipe || u.swipeStatus || u.swipeLeft || u.swipeRight || u.swipeUp || u.swipeDown)
            }

            function ao() {
                return !!(am() && an())
            }

            function ap() {
                return N === u.fingers || "all" === u.fingers || !b
            }

            function aq() {
                return 0 !== O[0].end.x
            }

            function ar() {
                return !!u.tap
            }

            function as() {
                return !!u.doubleTap
            }

            function at() {
                if (null == T) return !1;
                var a = aQ();
                return as() && a - T <= u.doubleTapThreshold
            }

            function au() {
                return at()
            }

            function av() {
                return !!((1 === N || !b) && (isNaN(C) || C < u.threshold) && ar())
            }

            function aw() {
                return !!(at() && as())
            }

            function ax() {
                return !!(F > u.longTapThreshold && C < 10 && u.longTap)
            }

            function ay(a) {
                R = aQ(), S = a.touches.length + 1
            }

            function az() {
                R = 0, S = 0
            }

            function aA() {
                var a = !1;
                return R && aQ() - R <= u.fingerReleaseThreshold && (a = !0), a
            }

            function aB() {
                return !(!0 !== x.data(s + "_intouch"))
            }

            function aC(a) {
                x && (!0 === a ? (x.bind(z, Y), x.bind(A, Z), B && x.bind(B, aa)) : (x.unbind(z, Y, !1), x.unbind(A, Z, !1), B && x.unbind(B, aa, !1)), x.data(s + "_intouch", !0 === a))
            }

            function aD(c, b) {
                var a = {
                    start: {
                        x: 0,
                        y: 0
                    },
                    last: {
                        x: 0,
                        y: 0
                    },
                    end: {
                        x: 0,
                        y: 0
                    }
                };
                return a.start.x = a.last.x = a.end.x = b.pageX || b.clientX, a.start.y = a.last.y = a.end.y = b.pageY || b.clientY, O[c] = a, a
            }

            function aE(b) {
                var c = void 0 !== b.identifier ? b.identifier : 0,
                    a = aF(c);
                return null === a && (a = aD(c, b)), a.last.x = a.end.x, a.last.y = a.end.y, a.end.x = b.pageX || b.clientX, a.end.y = b.pageY || b.clientY, a
            }

            function aF(a) {
                return O[a] || null
            }

            function aG(b, a) {
                a = Math.max(a, aH(b)), L[b].distance = a
            }

            function aH(a) {
                if (L[a]) return L[a].distance
            }

            function aI() {
                var a = {};
                return a[c] = aJ(c), a[d] = aJ(d), a.up = aJ("up"), a[e] = aJ(e), a
            }

            function aJ(a) {
                return {
                    direction: a,
                    distance: 0
                }
            }

            function aK() {
                return Q - P
            }

            function aL(a, b) {
                var c = Math.abs(a.x - b.x),
                    d = Math.abs(a.y - b.y);
                return Math.round(Math.sqrt(c * c + d * d))
            }

            function aM(a, b) {
                return (b / a * 1).toFixed(2)
            }

            function aN() {
                return I < 1 ? "out" : "in"
            }

            function aO(a, b) {
                return Math.round(Math.sqrt(Math.pow(b.x - a.x, 2) + Math.pow(b.y - a.y, 2)))
            }

            function aP(j, k) {
                var f, g, h, i, b, a = (f = j, g = k, h = f.x - g.x, i = g.y - f.y, b = Math.round(180 * Math.atan2(i, h) / Math.PI), b < 0 && (b = 360 - Math.abs(b)), b);
                return a <= 45 && a >= 0 ? c : a <= 360 && a >= 315 ? c : a >= 135 && a <= 225 ? d : a > 45 && a < 135 ? e : "up"
            }

            function aQ() {
                return new Date().getTime()
            }

            function aR(b) {
                var c = (b = a(b)).offset();
                return {
                    left: c.left,
                    right: c.left + b.outerWidth(),
                    top: c.top,
                    bottom: c.top + b.outerHeight()
                }
            }

            function aS(a, b) {
                return a.x > b.left && a.x < b.right && a.y > b.top && a.y < b.bottom
            }
            this.enable = function() {
                return x.bind(v, X), x.bind(w, _), x
            }, this.disable = function() {
                return ab(), x
            }, this.destroy = function() {
                ab(), x.data(s, null), x = null
            }, this.option = function(b, c) {
                if ("object" == typeof b) u = a.extend(u, b);
                else if (void 0 !== u[b]) {
                    if (void 0 === c) return u[b];
                    u[b] = c
                } else {
                    if (!b) return u;
                    a.error("Option " + b + " does not exist on jQuery.swipe.options")
                }
                return null
            }
        }
        a.fn.swipe = function(b) {
            var d = a(this),
                c = d.data(s);
            if (c && "string" == typeof b) {
                if (c[b]) return c[b].apply(this, Array.prototype.slice.call(arguments, 1));
                a.error("Method " + b + " does not exist on jQuery.swipe")
            } else if (c && "object" == typeof b) c.option.apply(this, arguments);
            else if (!c && ("object" == typeof b || !b)) return t.apply(this, arguments);
            return d
        }, a.fn.swipe.version = "1.6.15", a.fn.swipe.defaults = {
            fingers: 1,
            threshold: 75,
            cancelThreshold: null,
            pinchThreshold: 20,
            maxTimeThreshold: null,
            fingerReleaseThreshold: 250,
            longTapThreshold: 500,
            doubleTapThreshold: 200,
            swipe: null,
            swipeLeft: null,
            swipeRight: null,
            swipeUp: null,
            swipeDown: null,
            swipeStatus: null,
            pinchIn: null,
            pinchOut: null,
            pinchStatus: null,
            click: null,
            tap: null,
            doubleTap: null,
            longTap: null,
            hold: null,
            triggerOnTouchEnd: !0,
            triggerOnTouchLeave: !1,
            allowPageScroll: "auto",
            fallbackToMouseEvents: !0,
            excludedElements: "label, button, input, select, textarea, a, .noSwipe",
            preventDefaultEvents: !0
        }, a.fn.swipe.phases = {
            PHASE_START: j,
            PHASE_MOVE: k,
            PHASE_END: "end",
            PHASE_CANCEL: l
        }, a.fn.swipe.directions = {
            LEFT: c,
            RIGHT: d,
            UP: "up",
            DOWN: e,
            IN: "in",
            OUT: "out"
        }, a.fn.swipe.pageScroll = {
            NONE: f,
            HORIZONTAL: h,
            VERTICAL: i,
            AUTO: g
        }, a.fn.swipe.fingers = {
            ONE: 1,
            TWO: 2,
            THREE: 3,
            FOUR: 4,
            FIVE: 5,
            ALL: "all"
        }
    })),
    function(a) {
        "use strict";
        a.fn.bsTouchSlider = function(b) {
            var c = a(".carousel");
            return this.each(function() {
                function b(b) {
                    b.each(function() {
                        var b = a(this),
                            c = b.data("animation");
                        b.addClass(c).one("webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend", function() {
                            b.removeClass(c)
                        })
                    })
                }
                var d = c.find(".item:first").find("[data-animation ^= 'animated']");
                c.carousel(), b(d), c.on("slide.bs.carousel", function(c) {
                    b(a(c.relatedTarget).find("[data-animation ^= 'animated']"))
                }), a(".carousel .carousel-inner").swipe({
                    swipeLeft: function(a, b, c, d, e) {
                        this.parent().carousel("next")
                    },
                    swipeRight: function() {
                        this.parent().carousel("prev")
                    },
                    threshold: 0
                })
            })
        }
    }(jQuery), jQuery("#myCarousel").bsTouchSlider(), jQuery(function() {
        jQuery("a[href*=#]:not([href=#],[href=#myCarousel],[href=#myCarousel2],[href=#myCarousel3])").click(function() {
            if (location.pathname.replace(/^\//, "") == this.pathname.replace(/^\//, "") && location.hostname == this.hostname) {
                var a = jQuery(this.hash);
                if ((a = a.length ? a : jQuery("[name=" + this.hash.slice(1) + "]")).length) return jQuery("html,body").animate({
                    scrollTop: a.offset().top
                }, 1500), !1
            }
        })
    }), jQuery(function() {
        "placeholder" in document.createElement("input") == !1 && jQuery("[placeholder]").focus(function() {
            var a = jQuery(this);
            a.val() == a.attr("placeholder") && (a.val("").removeClass("placeholder"), a.hasClass("password") && (a.removeClass("password"), this.type = "password"))
        }).blur(function() {
            var a = jQuery(this);
            ("" == a.val() || a.val() == a.attr("placeholder")) && ("password" == this.type && (a.addClass("password"), this.type = "text"), a.addClass("placeholder").val(a.attr("placeholder")))
        }).blur().parents("form").submit(function() {
            jQuery(this).find("[placeholder]").each(function() {
                var a = jQuery(this);
                a.val() == a.attr("placeholder") && a.val("")
            })
        })
    }), jQuery(".modal").on("hidden.bs.modal", function(a) {
        jQuery(this).find("iframe").attr("src", jQuery(this).find("iframe").attr("src"))
    })