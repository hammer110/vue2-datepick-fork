module.exports = function(t) {
    function e(n) {
        if (i[n]) return i[n].exports;
        var r = i[n] = {
            i: n,
            l: !1,
            exports: {}
        };
        return t[n].call(r.exports, r, r.exports, e),
        r.l = !0,
        r.exports
    }
    var i = {};
    return e.m = t,
    e.c = i,
    e.i = function(t) {
        return t
    },
    e.d = function(t, i, n) {
        e.o(t, i) || Object.defineProperty(t, i, {
            configurable: !1,
            enumerable: !0,
            get: n
        })
    },
    e.n = function(t) {
        var i = t && t.__esModule ?
        function() {
            return t.
        default
        }:
        function() {
            return t
        };
        return e.d(i, "a", i),
        i
    },
    e.o = function(t, e) {
        return Object.prototype.hasOwnProperty.call(t, e)
    },
    e.p = "",
    e(e.s = 4)
} ([function(t, e) {
    t.exports = function(t, e, i, n) {
        var r, a = t = t || {},
        o = typeof t.
    default;
        "object" !== o && "function" !== o || (r = t, a = t.
    default);
        var s = "function" == typeof a ? a.options: a;
        if (e && (s.render = e.render, s.staticRenderFns = e.staticRenderFns), i && (s._scopeId = i), n) {
            var c = Object.create(s.computed || null);
            Object.keys(n).forEach(function(t) {
                var e = n[t];
                c[t] = function() {
                    return e
                }
            }),
            s.computed = c
        }
        return {
            esModule: r,
            exports: a,
            options: s
        }
    }
},
function(t, e, i) {
    "use strict";
    var n = i(11),
    r = i.n(n),
    a = i(5),
    o = i(10),
    s = (i.n(o),
    function() {
        function t(t, e) {
            var i = [],
            n = !0,
            r = !1,
            a = void 0;
            try {
                for (var o, s = t[Symbol.iterator](); ! (n = (o = s.next()).done) && (i.push(o.value), !e || i.length !== e); n = !0);
            } catch(t) {
                r = !0,
                a = t
            } finally {
                try { ! n && s.
                    return && s.
                    return ()
                } finally {
                    if (r) throw a
                }
            }
            return i
        }
        return function(e, i) {
            if (Array.isArray(e)) return e;
            if (Symbol.iterator in Object(e)) return t(e, i);
            throw new TypeError("Invalid attempt to destructure non-iterable instance")
        }
    } ()),
    c = {};
    c.install = function(t) {
        new Date;
        t.prototype.$calendar = {};
        var e = t.extend(r.a),
        n = new e({
            el: document.createElement("div")
        });
        document.body.appendChild(n.$el),
        t.prototype.$calendar.show = function() {
            var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
            n.show = !0;
            var e = "",
            r = t.date || n.date;
            if (r) try {
                e = r.split("-")
            } catch(t) {
                console.log(t);
                var o = new Date;
                e = [o.getFullYear(), o.getMonth() + 1, o.getDate()]
            } else {
                var c = new Date;
                e = [c.getFullYear(), c.getMonth() + 1, c.getDate()]
            }
            t.year && (console.log(e), (e[0] < t.year[0] || e[1] > t.year[1]) && (e[0] = t.year[0]));
            var l = e,
            h = s(l, 3);
            t.curYear = h[0],
            t.curMonth = h[1],
            t.curDay = h[2],
            i.i(a.a)(n, t)
        },
        t.prototype.$calendar.hide = function() {
            n.show = !1
        },
        t.prototype.$calendar.getDate = function() {
            return {
                year: n.year || (new Date).getFullYear(),
                month: n.month || (new Date).getMonth() + 1,
                day: n.day || (new Date).getDay()
            }
        }
    },
    e.a = c
},
function(t, e, i) {
    "use strict";
    Object.defineProperty(e, "__esModule", {
        value: !0
    });
    var n = i(12),
    r = i.n(n);
    e.
default = {
        data: function() {
            var t = this;
            return {
                show: !1,
                year: [1951, 2050],
                month: [1, 12],
                day: [1, 31],
                curYear: 1951,
                curMonth: 1,
                date: "",
                curDay: 1,
                onOk: function(e) {
                    console.log(t.curYear + "-" + t.curMonth + "-" + t.curDay)
                },
                onCancel: function() {
                    console.log("close")
                }
            }
        },
        mounted: function() {},
        computed: {
            isR: function() {
                return this.curYear % 4 == 0
            }
        },
        watch: {
            date: function() {
                this.changeCurVal("year", this.curYear),
                this.changeCurVal("month", this.curMonth)
            }
        },
        components: {
            picker: r.a
        },
        methods: {
            stop: function(t) {
                t.preventDefault()
            },
            close: function() {
                this.$calendar.hide(),
                this.onCancel()
            },
            chose: function() {
                this.$calendar.hide();
                var t = this.curYear + "-" + this.curMonth + "-" + this.curDay;
                this.date = this.curYear + "-" + this.curMonth + "-" + this.curDay,
                this.onOk(t)
            },
            changeDataList: function() {
                var t = 2 == this.curMonth,
                e = [1, 3, 5, 7, 8, 10, 12].join().indexOf(this.curMonth);
                t ? this.isR ? this.day = [1, 29] : this.day = [1, 28] : this.day = e < 0 ? [1, 30] : [1, 31]
            },
            changeCurVal: function(t, e) {
                "year" == t && (this.curYear = e, this.changeDataList()),
                "day" == t && (this.curDay = e),
                "month" == t && (this.curMonth = e, this.changeDataList())
            }
        }
    }
},
function(t, e, i) {
    "use strict";
    Object.defineProperty(e, "__esModule", {
        value: !0
    }),
    e.
default = {
        data: function() {
            return {
                activeItem: 0,
                itemLength: 0,
                activeItemValue: 0,
                curVal: "",
                style: {},
                Y: 0,
                t: .1,
                touchStartTime: 0,
                touchEndTime: 0,
                eY: 102,
                sY: 102,
                isMoving: !1,
                itemHeight: 34,
                isR: !1
            }
        },
        props: {
            dataList: {
                type: Array,
            default:
                []
            },
            defaultVal: [String, Number],
            type: {
                type: String,
            default:
                ""
            }
        },
        mounted: function() {
            this.defaultVal ? this.moveTo() : this.style = {
                transform: "translate3d(0px, " + this.sY + "px, 0px)"
            }
        },
        watch: {
            dataList: function() {
                this.type
            }
        },
        computed: {
            dateList: function() {
                var t = [],
                e = "";
                switch (this.type) {
                case "year":
                    e = "年";
                    break;
                case "month":
                    e = "月";
                    break;
                case "day":
                    e = "日";
                    break;
                default:
                    e = "年"
                }
                for (var i = this.dataList[0]; i <= this.dataList[1]; i++) t.push({
                    txt: i + e,
                    val: i
                });
                if (this.itemLength = t.length, "day" == this.type) {
                    var n = (this.itemLength - 1) * -this.itemHeight + 3 * this.itemHeight;
                    this.eY <= n && (this.Y = n, this.eY = n, this.activeItem = this.itemLength - 1),
                    this.style = {
                        transform: "translate3d(0px, " + this.eY + "px, 0px)",
                        transition: "all ease " + this.t + "s"
                    },
                    this.curVal = t[(parseFloat(this.activeItem)).toFixed(0)].val,
                    this.$emit("changeCurVal", this.type, this.curVal)
                }
                return t
            }
        },
        created: function() {
            this.itemHeight = this.rem2px(.8)
        },
        methods: {
            rem2px: function(t) {
                var e = parseFloat(t) * window.rem;
                return "string" == typeof t && t.match(/rem$/) && (e += "px"),
                e
            },
            start: function(t) {
                this.sY = t.touches[0].clientY,
                this.touchStartTime = t.timeStamp
            },
            moveTo: function() {
                var t = this;
                this.dateList.map(function(e, i) {
                    e.val == t.defaultVal && (t.activeItem = i, t.activeItemValue = e.val)
                }),
                this.Y = 3 * this.itemHeight - this.activeItem * this.itemHeight,
                this.eY = 3 * this.itemHeight - this.activeItem * this.itemHeight,
                this.style = {
                    transform: "translate3d(0px, " + this.Y + "px, 0px)",
                    transition: "all ease " + this.t + "s"
                }
            },
            move: function(t) {
                this.Y = this.eY + t.touches[0].clientY - this.sY,
                this.t = .1,
                this.style = {
                    transform: "translate3d(0px, " + this.Y + "px, 0px)",
                    transition: "all ease " + this.t + "s"
                }
            },
            end: function(t) {
                var e = (this.Y, 3 * this.itemHeight),
                i = (this.itemLength - 1) * -this.itemHeight + 3 * this.itemHeight;
                this.eY = this.Y,
                this.touchEndTime = t.timeStamp - this.touchStartTime,
                this.t = .1,
                this.sY != t.changedTouches[0].clientY && (this.touchEndTime < 220 && Math.abs(t.changedTouches[0].clientY - this.sY) > 100 && (this.eY = this.eY + (t.changedTouches[0].clientY - this.sY) * this.touchEndTime / 100, this.t = 25 / this.touchEndTime * 2), Math.abs(this.eY % this.itemHeight) <= this.itemHeight / 2 ? this.eY = parseInt(this.eY / this.itemHeight) * this.itemHeight: this.eY > 0 ? this.eY = parseInt(this.eY / this.itemHeight) * this.itemHeight + this.itemHeight: this.eY = parseInt(this.eY / this.itemHeight) * this.itemHeight - this.itemHeight, this.activeItem = Math.abs((this.eY - 3 * this.itemHeight) / this.itemHeight), this.eY > e && (this.Y = 3 * this.itemHeight, this.eY = 3 * this.itemHeight, this.activeItem = 0), this.eY <= i && (this.Y = i, this.eY = i, this.activeItem = this.itemLength - 1), this.style = {
                    transform: "translate3d(0px, " + this.eY + "px, 0px)",
                    transition: "all ease " + this.t + "s"
                },
                this.curVal = this.dateList[(parseFloat(this.activeItem)).toFixed(0)].val, this.$emit("changeCurVal", this.type, this.curVal))
            }
        }
    }
},
function(t, e, i) {
    "use strict";
    Object.defineProperty(e, "__esModule", {
        value: !0
    });
    var n = i(1);
    e.
default = n.a
},
function(t, e, i) {
    "use strict";
    i.d(e, "a",
    function() {
        return a
    });
    var n = i(8),
    r = i.n(n),
    a = function(t, e) {
        var i = {};
        for (var n in t.$options.props)"value" !== n && (i[n] = t.$options.props[n].
    default);
        var a = r()({},
        i, e);
        for (var o in a) t[o] = a[o]
    }
},
function(t, e, i) {
    e = t.exports = i(7)(),
    e.push([t.i, '.fade-enter-active,.fade-leave-active{transition:opacity .3s;-webkit-transition:opacity .3s;opacity:1}.fade-enter,.fade-leave-to{opacity:0}#app{position:relative;z-index:1}.com-mark{z-index:998;position:fixed;left:0;opacity:0;transition:opacity .2s ease-in}.com-calendar-box{position:fixed;width:100%;height:100%;z-index:1000;top:0;left:0}.com-calendar{position:absolute;bottom:0;left:0;z-index:1000;width:100%;background:#fff}.com-calendar .scroller-component{display:block;flex:1;position:relative;height:5.6rem;overflow:hidden;width:100%}.com-calendar .scroller-content{position:absolute;left:0;top:0;width:100%;z-index:-1}.com-calendar .scroller-mask{position:absolute;left:0;top:0;height:100%;margin:0 auto;width:100%;z-index:3;background-image:linear-gradient(180deg,hsla(0,0%,100%,.95),hsla(0,0%,100%,.6)),linear-gradient(0deg,hsla(0,0%,100%,.95),hsla(0,0%,100%,.6));background-position:top,bottom;background-size:100% 2.4rem;background-repeat:no-repeat}.com-calendar .cal-header{position:relative;width:100%;left:0;height:1rem;bottom:0;border-bottom:1px solid #ddd;background-color:#fff;display:flex;justify-content:space-between}.com-calendar .cal-header>div{height:1rem;line-height:1rem;color:#666;text-align:center;font-size:16px;padding:0 .4rem}[data-dpr="2"] .com-calendar .cal-header>div{font-size:32px}[data-dpr="2.5"] .com-calendar .cal-header>div{font-size:40px}[data-dpr="2.75"] .com-calendar .cal-header>div{font-size:44px}[data-dpr="3"] .com-calendar .cal-header>div{font-size:48px}[data-dpr="4"] .com-calendar .cal-header>div{font-size:64px}.com-calendar .cal-header .dp-right{color:#2167d7}.com-calendar .cal-content{position:relative;display:flex}.com-calendar .scroller-item{text-align:center;font-size:14px;height:.8rem;line-height:.8rem;color:#000}[data-dpr="2"] .com-calendar .scroller-item{font-size:28px}[data-dpr="2.5"] .com-calendar .scroller-item{font-size:35px}[data-dpr="2.75"] .com-calendar .scroller-item{font-size:39px}[data-dpr="3"] .com-calendar .scroller-item{font-size:42px}[data-dpr="4"] .com-calendar .scroller-item{font-size:56px}.com-calendar .scroller-indicator{width:100%;height:.8rem;position:absolute;left:0;top:2.4rem;z-index:2;background-image:linear-gradient(180deg,#d0d0d0,#d0d0d0,transparent,transparent),linear-gradient(0deg,#d0d0d0,#d0d0d0,transparent,transparent);background-position:top,bottom;background-size:100% 1px;background-repeat:no-repeat}.com-calendar .dp-container{position:fixed;width:100%;left:0;bottom:0;z-index:10000;background-color:#fff;transition:transform .3s ease;transform:translateY(0)}.com-calendar .dp-mask{position:fixed;width:100%;height:100%;left:0;top:0;opacity:0;transition:opacity .1s ease;background-color:#000;z-index:9999}.com-calendar .dp-header{display:flex;width:100%;box-align:center;align-items:center;background-image:linear-gradient(180deg,#e7e7e7,#e7e7e7,transparent,transparent);background-position:bottom;background-size:100% 1px;background-repeat:no-repeat}.com-calendar .dp-header .dp-item{color:#666;font-size:18px;height:44px;line-height:44px;cursor:pointer}.com-calendar .dp-content{display:flex;width:100%;box-align:center;align-items:center;padding:10px 0}.com-calendar .dp-content .dp-item,.com-calendar .dp-header .dp-item{box-sizing:border-box;flex:1;text-align:center}.g-calender-content{position:absolute;bottom:0;z-index:1000}.com-mark{background-color:#000;opacity:.5;width:100%;height:100%;top:0;position:absolute;z-index:999}', ""])
},
function(t, e) {
    t.exports = function() {
        var t = [];
        return t.toString = function() {
            for (var t = [], e = 0; e < this.length; e++) {
                var i = this[e];
                i[2] ? t.push("@media " + i[2] + "{" + i[1] + "}") : t.push(i[1])
            }
            return t.join("")
        },
        t.i = function(e, i) {
            "string" == typeof e && (e = [[null, e, ""]]);
            for (var n = {},
            r = 0; r < this.length; r++) {
                var a = this[r][0];
                "number" == typeof a && (n[a] = !0)
            }
            for (r = 0; r < e.length; r++) {
                var o = e[r];
                "number" == typeof o[0] && n[o[0]] || (i && !o[2] ? o[2] = i: i && (o[2] = "(" + o[2] + ") and (" + i + ")"), t.push(o))
            }
        },
        t
    }
},
function(t, e, i) {
    "use strict";

    function n(t) {
        if (null === t || void 0 === t) throw new TypeError("Object.assign cannot be called with null or undefined");
        return Object(t)
    }
    /*
    object-assign
    (c) Sindre Sorhus
    @license MIT
    */
    var r = Object.getOwnPropertySymbols,
    a = Object.prototype.hasOwnProperty,
    o = Object.prototype.propertyIsEnumerable;
    t.exports = function() {
        try {
            if (!Object.assign) return ! 1;
            var t = new String("abc");
            if (t[5] = "de", "5" === Object.getOwnPropertyNames(t)[0]) return ! 1;
            for (var e = {},
            i = 0; i < 10; i++) e["_" + String.fromCharCode(i)] = i;
            if ("0123456789" !== Object.getOwnPropertyNames(e).map(function(t) {
                return e[t]
            }).join("")) return ! 1;
            var n = {};
            return "abcdefghijklmnopqrst".split("").forEach(function(t) {
                n[t] = t
            }),
            "abcdefghijklmnopqrst" === Object.keys(Object.assign({},
            n)).join("")
        } catch(t) {
            return ! 1
        }
    } () ? Object.assign: function(t, e) {
        for (var i, s, c = n(t), l = 1; l < arguments.length; l++) {
            i = Object(arguments[l]);
            for (var h in i) a.call(i, h) && (c[h] = i[h]);
            if (r) {
                s = r(i);
                for (var d = 0; d < s.length; d++) o.call(i, s[d]) && (c[s[d]] = i[s[d]])
            }
        }
        return c
    }
},
function(t, e) {
    function i(t, e) {
        for (var i = 0; i < t.length; i++) {
            var n = t[i],
            r = u[n.id];
            if (r) {
                r.refs++;
                for (var a = 0; a < r.parts.length; a++) r.parts[a](n.parts[a]);
                for (; a < n.parts.length; a++) r.parts.push(c(n.parts[a], e))
            } else {
                for (var o = [], a = 0; a < n.parts.length; a++) o.push(c(n.parts[a], e));
                u[n.id] = {
                    id: n.id,
                    refs: 1,
                    parts: o
                }
            }
        }
    }

    function n(t) {
        for (var e = [], i = {},
        n = 0; n < t.length; n++) {
            var r = t[n],
            a = r[0],
            o = r[1],
            s = r[2],
            c = r[3],
            l = {
                css: o,
                media: s,
                sourceMap: c
            };
            i[a] ? i[a].parts.push(l) : e.push(i[a] = {
                id: a,
                parts: [l]
            })
        }
        return e
    }

    function r(t, e) {
        var i = m(),
        n = y[y.length - 1];
        if ("top" === t.insertAt) n ? n.nextSibling ? i.insertBefore(e, n.nextSibling) : i.appendChild(e) : i.insertBefore(e, i.firstChild),
        y.push(e);
        else {
            if ("bottom" !== t.insertAt) throw new Error("Invalid value for parameter 'insertAt'. Must be 'top' or 'bottom'.");
            i.appendChild(e)
        }
    }

    function a(t) {
        t.parentNode.removeChild(t);
        var e = y.indexOf(t);
        e >= 0 && y.splice(e, 1)
    }

    function o(t) {
        var e = document.createElement("style");
        return e.type = "text/css",
        r(t, e),
        e
    }

    function s(t) {
        var e = document.createElement("link");
        return e.rel = "stylesheet",
        r(t, e),
        e
    }

    function c(t, e) {
        var i, n, r;
        if (e.singleton) {
            var c = v++;
            i = g || (g = o(e)),
            n = l.bind(null, i, c, !1),
            r = l.bind(null, i, c, !0)
        } else t.sourceMap && "function" == typeof URL && "function" == typeof URL.createObjectURL && "function" == typeof URL.revokeObjectURL && "function" == typeof Blob && "function" == typeof btoa ? (i = s(e), n = d.bind(null, i), r = function() {
            a(i),
            i.href && URL.revokeObjectURL(i.href)
        }) : (i = o(e), n = h.bind(null, i), r = function() {
            a(i)
        });
        return n(t),
        function(e) {
            if (e) {
                if (e.css === t.css && e.media === t.media && e.sourceMap === t.sourceMap) return;
                n(t = e)
            } else r()
        }
    }

    function l(t, e, i, n) {
        var r = i ? "": n.css;
        if (t.styleSheet) t.styleSheet.cssText = b(e, r);
        else {
            var a = document.createTextNode(r),
            o = t.childNodes;
            o[e] && t.removeChild(o[e]),
            o.length ? t.insertBefore(a, o[e]) : t.appendChild(a)
        }
    }

    function h(t, e) {
        var i = e.css,
        n = e.media;
        if (n && t.setAttribute("media", n), t.styleSheet) t.styleSheet.cssText = i;
        else {
            for (; t.firstChild;) t.removeChild(t.firstChild);
            t.appendChild(document.createTextNode(i))
        }
    }

    function d(t, e) {
        var i = e.css,
        n = e.sourceMap;
        n && (i += "\n/*# sourceMappingURL=data:application/json;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(n)))) + " */");
        var r = new Blob([i], {
            type: "text/css"
        }),
        a = t.href;
        t.href = URL.createObjectURL(r),
        a && URL.revokeObjectURL(a)
    }
    var u = {},
    p = function(t) {
        var e;
        return function() {
            return void 0 === e && (e = t.apply(this, arguments)),
            e
        }
    },
    f = p(function() {
        return /msie [6-9]\b/.test(self.navigator.userAgent.toLowerCase())
    }),
    m = p(function() {
        return document.head || document.getElementsByTagName("head")[0]
    }),
    g = null,
    v = 0,
    y = [];
    t.exports = function(t, e) {
        if ("undefined" != typeof DEBUG && DEBUG && "object" != typeof document) throw new Error("The style-loader cannot be used in a non-browser environment");
        e = e || {},
        void 0 === e.singleton && (e.singleton = f()),
        void 0 === e.insertAt && (e.insertAt = "bottom");
        var r = n(t);
        return i(r, e),
        function(t) {
            for (var a = [], o = 0; o < r.length; o++) {
                var s = r[o],
                c = u[s.id];
                c.refs--,
                a.push(c)
            }
            if (t) {
                i(n(t), e)
            }
            for (var o = 0; o < a.length; o++) {
                var c = a[o];
                if (0 === c.refs) {
                    for (var l = 0; l < c.parts.length; l++) c.parts[l]();
                    delete u[c.id]
                }
            }
        }
    };
    var b = function() {
        var t = [];
        return function(e, i) {
            return t[e] = i,
            t.filter(Boolean).join("\n")
        }
    } ()
},
function(t, e, i) {
    var n = i(6);
    "string" == typeof n && (n = [[t.i, n, ""]]);
    i(9)(n, {});
    n.locals && (t.exports = n.locals)
},
function(t, e, i) {
    var n = i(0)(i(2), i(13), null, null);
    t.exports = n.exports
},
function(t, e, i) {
    var n = i(0)(i(3), i(14), null, null);
    t.exports = n.exports
},
function(t, e) {
    t.exports = {
        render: function() {
            var t = this,
            e = t.$createElement,
            i = t._self._c || e;
            return i("transition", {
                attrs: {
                    name: "fade"
                }
            },
            [t.show ? i("div", {
                staticClass: "com-calendar-box"
            },
            [t.show ? i("div", {
                staticClass: "com-mark",
                on: {
                    touchmove: function(e) {
                        e.preventDefault(),
                        t.stop(e)
                    },
                    click: t.close
                }
            }) : t._e(), t._v(" "), i("div", {
                staticClass: "com-calendar"
            },
            [i("div", {
                staticClass: "cal-header"
            },
            [i("div", {
                staticClass: " dp-left ",
                on: {
                    click: t.close
                }
            },
            [t._v("取消")]), t._v(" "), i("div", {
                staticClass: " dp-right ",
                on: {
                    click: t.chose
                }
            },
            [t._v("确定")])]), t._v(" "), i("div", {
                staticClass: "cal-content"
            },
            [i("picker", {
                attrs: {
                    defaultVal: t.curYear,
                    dataList: t.year,
                    type: "year"
                },
                on: {
                    changeCurVal: t.changeCurVal
                }
            }), t._v(" "), i("picker", {
                attrs: {
                    defaultVal: t.curMonth,
                    dataList: t.month,
                    type: "month"
                },
                on: {
                    changeCurVal: t.changeCurVal
                }
            }), t._v(" "), i("picker", {
                attrs: {
                    defaultVal: t.curDay,
                    dataList: t.day,
                    type: "day"
                },
                on: {
                    changeCurVal: t.changeCurVal
                }
            })], 1)])]) : t._e()])
        },
        staticRenderFns: []
    }
},
function(t, e) {
    t.exports = {
        render: function() {
            var t = this,
            e = t.$createElement,
            i = t._self._c || e;
            return i("div", {
                staticClass: "scroller-component"
            },
            [i("div", {
                staticClass: "scroller-mask",
                on: {
                    touchstart: function(e) {
                        e.preventDefault(),
                        t.start(e)
                    },
                    touchmove: function(e) {
                        e.preventDefault(),
                        t.move(e)
                    },
                    touchend: function(e) {
                        e.preventDefault(),
                        t.end(e)
                    }
                }
            }), t._v(" "), i("div", {
                staticClass: "scroller-indicator"
            }), t._v(" "), i("div", {
                staticClass: "scroller-content",
                style: t.style
            },
            t._l(t.dateList,
            function(e) {
                return i("div", {
                    staticClass: "scroller-item "
                },
                [t._v(t._s(e.txt))])
            }))])
        },
        staticRenderFns: []
    }
}]);
//# sourceMappingURL=index.js.map
