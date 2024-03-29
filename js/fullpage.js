! function(e, o) {
    "use strict";
    "function" == typeof define && define.amd ? define(["jquery"], function(n) {
        return o(n, e, e.document, e.Math)
    }) : "object" == typeof exports && exports ? module.exports = o(require("jquery"), e, e.document, e.Math) : o(jQuery, e, e.document, e.Math)
}("undefined" != typeof window ? window : this, function(e, o, n, t, i) {
    "use strict";
    var a = "fullpage-wrapper",
        l = "." + a,
        s = "fp-responsive",
        r = "fp-notransition",
        c = "fp-destroyed",
        d = "fp-enabled",
        f = "fp-viewing",
        u = "active",
        h = "." + u,
        v = "fp-completely",
        p = "." + v,
        g = "fp-section",
        m = "." + g,
        w = m + h,
        S = m + ":first",
        b = m + ":last",
        x = "fp-tableCell",
        y = "." + x,
        C = "fp-auto-height",
        T = "fp-normal-scroll",
        k = "fp-nav",
        L = "#" + k,
        A = "fp-tooltip",
        O = "." + A,
        I = "fp-show-active",
        E = "fp-slide",
        M = "." + E,
        B = M + h,
        R = "fp-slides",
        z = "." + R,
        H = "fp-slidesContainer",
        D = "." + H,
        P = "fp-table",
        q = "fp-slidesNav",
        F = "." + q,
        V = F + " a",
        j = "fp-controlArrow",
        Y = "." + j,
        N = "fp-prev",
        X = j + " " + N,
        U = Y + ("." + N),
        W = "fp-next",
        K = j + " " + W,
        _ = Y + ".fp-next",
        Q = e(o),
        G = e(n);
    e.fn.fullpage = function(j) {
        if (e("html").hasClass(d)) $o();
        else {
            var W = e("html, body"),
                J = e("body"),
                Z = e.fn.fullpage;
            j = e.extend({
                menu: !1,
                anchors: [],
                lockAnchors: !1,
                navigation: !1,
                navigationPosition: "right",
                navigationTooltips: [],
                showActiveTooltip: !1,
                slidesNavigation: !1,
                slidesNavPosition: "bottom",
                scrollBar: !1,
                hybrid: !1,
                css3: !0,
                scrollingSpeed: 700,
                autoScrolling: !0,
                fitToSection: !0,
                fitToSectionDelay: 1e3,
                easing: "easeInOutCubic",
                easingcss3: "ease",
                loopBottom: !1,
                loopTop: !1,
                loopHorizontal: !0,
                continuousVertical: !1,
                continuousHorizontal: !1,
                scrollHorizontally: !1,
                interlockedSlides: !1,
                dragAndMove: !1,
                offsetSections: !1,
                resetSliders: !1,
                fadingEffect: !1,
                normalScrollElements: null,
                scrollOverflow: !1,
                scrollOverflowReset: !1,
                scrollOverflowHandler: e.fn.fp_scrolloverflow ? e.fn.fp_scrolloverflow.iscrollHandler : null,
                scrollOverflowOptions: null,
                touchSensitivity: 5,
                normalScrollElementTouchThreshold: 5,
                bigSectionsDestination: null,
                keyboardScrolling: !0,
                animateAnchor: !0,
                recordHistory: !0,
                controlArrows: !0,
                controlArrowColor: "#fff",
                verticalCentered: !0,
                sectionsColor: [],
                paddingTop: 0,
                paddingBottom: 0,
                fixedElements: null,
                responsive: 0,
                responsiveWidth: 0,
                responsiveHeight: 0,
                responsiveSlides: !1,
                parallax: !1,
                parallaxOptions: {
                    type: "reveal",
                    percentage: 62,
                    property: "translate"
                },
                sectionSelector: ".section",
                slideSelector: ".slide",
                afterLoad: null,
                onLeave: null,
                afterRender: null,
                afterResize: null,
                afterReBuild: null,
                afterSlideLoad: null,
                onSlideLeave: null,
                afterResponsive: null,
                lazyLoading: !0
            }, j);
            var $, ee, oe, ne, te = !1,
                ie = navigator.userAgent.match(/(iPhone|iPod|iPad|Android|playbook|silk|BlackBerry|BB10|Windows Phone|Tizen|Bada|webOS|IEMobile|Opera Mini)/),
                ae = "ontouchstart" in o || navigator.msMaxTouchPoints > 0 || navigator.maxTouchPoints,
                le = e(this),
                se = Q.height(),
                re = !1,
                ce = !0,
                de = !0,
                fe = [],
                ue = {
                    m: {
                        up: !0,
                        down: !0,
                        left: !0,
                        right: !0
                    }
                };
            ue.k = e.extend(!0, {}, ue.m);
            var he, ve, pe, ge, me, we, Se, be = function() {
                    var e;
                    e = o.PointerEvent ? {
                        down: "pointerdown",
                        move: "pointermove"
                    } : {
                        down: "MSPointerDown",
                        move: "MSPointerMove"
                    };
                    return e
                }(),
                xe = {
                    touchmove: "ontouchmove" in o ? "touchmove" : be.move,
                    touchstart: "ontouchstart" in o ? "touchstart" : be.down
                },
                ye = 'a[href], area[href], input:not([disabled]), select:not([disabled]), textarea:not([disabled]), button:not([disabled]), iframe, object, embed, [tabindex="0"], [contenteditable]',
                Ce = e.extend(!0, {}, j);
            $o(), e.extend(e.easing, {
                easeInOutCubic: function(e, o, n, t, i) {
                    return (o /= i / 2) < 1 ? t / 2 * o * o * o + n : t / 2 * ((o -= 2) * o * o + 2) + n
                }
            }), e(this).length && (Z.version = "2.9.6", Z.setAutoScrolling = ze, Z.setRecordHistory = He, Z.setScrollingSpeed = De, Z.setFitToSection = Pe, Z.setLockAnchors = function(e) {
                j.lockAnchors = e
            }, Z.setMouseWheelScrolling = qe, Z.setAllowScrolling = Fe, Z.setKeyboardScrolling = Ve, Z.moveSectionUp = je, Z.moveSectionDown = Ye, Z.silentMoveTo = Ne, Z.moveTo = Xe, Z.moveSlideRight = Ue, Z.moveSlideLeft = We, Z.fitToSection = Je, Z.reBuild = Ke, Z.setResponsive = _e, Z.destroy = function(o) {
                ze(!1, "internal"), Fe(!1), Ve(!1), le.addClass(c), clearTimeout(ge), clearTimeout(pe), clearTimeout(ve), clearTimeout(me), clearTimeout(we), Q.off("scroll", Ge).off("hashchange", mo).off("resize", Mo), G.off("keydown", So).off("keyup", xo).off("click touchstart", L + " a").off("mouseenter", L + " li").off("mouseleave", L + " li").off("click touchstart", V).off("mouseover", j.normalScrollElements).off("mouseout", j.normalScrollElements), e(m).off("click touchstart", Y), clearTimeout(ge), clearTimeout(pe), o && function() {
                    Qo(0), le.find("img[data-src], source[data-src], audio[data-src], iframe[data-src]").each(function() {
                        co(e(this), "src")
                    }), le.find("img[data-srcset]").each(function() {
                        co(e(this), "srcset")
                    }), e(L + ", " + F + ", " + Y).remove(), e(m).css({
                        height: "",
                        "background-color": "",
                        padding: ""
                    }), e(M).css({
                        width: ""
                    }), le.css({
                        height: "",
                        position: "",
                        "-ms-touch-action": "",
                        "touch-action": ""
                    }), W.css({
                        overflow: "",
                        height: ""
                    }), e("html").removeClass(d), J.removeClass(s), e.each(J.get(0).className.split(/\s+/), function(e, o) {
                        0 === o.indexOf(f) && J.removeClass(o)
                    }), e(m + ", " + M).each(function() {
                        j.scrollOverflowHandler && j.scrollOverflowHandler.remove(e(this)), e(this).removeClass(P + " " + u), e(this).attr("style", e(this).data("fp-styles"))
                    }), zo(le), le.find(y + ", " + D + ", " + z).each(function() {
                        e(this).replaceWith(this.childNodes)
                    }), le.css({
                        "-webkit-transition": "none",
                        transition: "none"
                    }), W.scrollTop(0);
                    var o = [g, E, H];
                    e.each(o, function(o, n) {
                        e("." + n).removeClass(n)
                    })
                }()
            }, Z.shared = {
                afterRenderActions: Qe
            }, function() {
                j.css3 && (j.css3 = function() {
                    var e, t = n.createElement("p"),
                        a = {
                            webkitTransform: "-webkit-transform",
                            OTransform: "-o-transform",
                            msTransform: "-ms-transform",
                            MozTransform: "-moz-transform",
                            transform: "transform"
                        };
                    for (var l in n.body.insertBefore(t, null), a) t.style[l] !== i && (t.style[l] = "translate3d(1px,1px,1px)", e = o.getComputedStyle(t).getPropertyValue(a[l]));
                    return n.body.removeChild(t), e !== i && e.length > 0 && "none" !== e
                }());
                j.scrollBar = j.scrollBar || j.hybrid, t = le.find(j.sectionSelector), j.anchors.length || (j.anchors = t.filter("[data-anchor]").map(function() {
                    return e(this).data("anchor").toString()
                }).get()), j.navigationTooltips.length || (j.navigationTooltips = t.filter("[data-tooltip]").map(function() {
                    return e(this).data("tooltip").toString()
                }).get()), le.css({
                    height: "100%",
                    position: "relative"
                }), le.addClass(a), e("html").addClass(d), se = Q.height(), le.removeClass(c), le.find(j.sectionSelector).addClass(g), le.find(j.slideSelector).addClass(E), e(m).each(function(o) {
                    var n, t, i, a, s = e(this),
                        r = s.find(M),
                        c = r.length;
                    s.data("fp-styles", s.attr("style")), i = s, (a = o) || 0 !== e(w).length || i.addClass(u), ne = e(w), i.css("height", se + "px"), j.paddingTop && i.css("padding-top", j.paddingTop), j.paddingBottom && i.css("padding-bottom", j.paddingBottom), void 0 !== j.sectionsColor[a] && i.css("background-color", j.sectionsColor[a]), void 0 !== j.anchors[a] && i.attr("data-anchor", j.anchors[a]), n = s, t = o, void 0 !== j.anchors[t] && n.hasClass(u) && Ho(j.anchors[t], t), j.menu && j.css3 && e(j.menu).closest(l).length && e(j.menu).appendTo(J), c > 0 ? function(o, n, t) {
                        var i, a = 100 * t,
                            l = 100 / t;
                        n.wrapAll('<div class="' + H + '" />'), n.parent().wrap('<div class="' + R + '" />'), o.find(D).css("width", a + "%"), t > 1 && (j.controlArrows && ((i = o).find(z).after('<div class="' + X + '"></div><div class="' + K + '"></div>'), "#fff" != j.controlArrowColor && (i.find(_).css("border-color", "transparent transparent transparent " + j.controlArrowColor), i.find(U).css("border-color", "transparent " + j.controlArrowColor + " transparent transparent")), j.loopHorizontal || i.find(U).hide()), j.slidesNavigation && function(e, o) {
                            e.append('<div class="' + q + '"><ul></ul></div>');
                            var n = e.find(F);
                            n.addClass(j.slidesNavPosition);
                            for (var t = 0; t < o; t++) n.find("ul").append('<li><a href="#"><span></span></a></li>');
                            n.css("margin-left", "-" + n.width() / 2 + "px"), n.find("li").first().find("a").addClass(u)
                        }(o, t)), n.each(function(o) {
                            e(this).css("width", l + "%"), j.verticalCentered && Po(e(this))
                        });
                        var s = o.find(B);
                        s.length && (0 !== e(w).index(m) || 0 === e(w).index(m) && 0 !== s.index()) ? _o(s, "internal") : n.eq(0).addClass(u)
                    }(s, r, c) : j.verticalCentered && Po(s)
                }), j.fixedElements && j.css3 && e(j.fixedElements).appendTo(J), j.navigation && function() {
                    J.append('<div id="' + k + '"><ul></ul></div>');
                    var o = e(L);
                    o.addClass(function() {
                        return j.showActiveTooltip ? I + " " + j.navigationPosition : j.navigationPosition
                    });
                    for (var n = 0; n < e(m).length; n++) {
                        var t = "";
                        j.anchors.length && (t = j.anchors[n]);
                        var i = '<li><a href="#' + t + '"><span></span></a>',
                            a = j.navigationTooltips[n];
                        void 0 !== a && "" !== a && (i += '<div class="' + A + " " + j.navigationPosition + '">' + a + "</div>"), i += "</li>", o.find("ul").append(i)
                    }
                    e(L), e(L).find("li").eq(e(w).index(m)).find("a").addClass(u)
                }(), le.find('iframe[src*="youtube.com/embed/"]').each(function() {
                    var o, n, t;
                    o = e(this), n = "enablejsapi=1", t = o.attr("src"), o.attr("src", t + (/\?/.test(t) ? "&" : "?") + n)
                }), j.scrollOverflow ? he = j.scrollOverflowHandler.init(j) : Qe(), Fe(!0), ze(j.autoScrolling, "internal"), Bo(), Wo(), "complete" === n.readyState && go();
                var t;
                Q.on("load", go)
            }(), Q.on("scroll", Ge).on("hashchange", mo).blur(ko).resize(Mo), G.keydown(So).keyup(xo).on("click touchstart", L + " a", Lo).on("click touchstart", V, Ao).on("click", O, bo), e(m).on("click touchstart", Y, To), j.normalScrollElements && (G.on("mouseenter touchstart", j.normalScrollElements, function() {
                Fe(!1)
            }), G.on("mouseleave touchend", j.normalScrollElements, function() {
                Fe(!0)
            })));
            var Te = !1,
                ke = 0,
                Le = 0,
                Ae = 0,
                Oe = 0,
                Ie = 0,
                Ee = (new Date).getTime(),
                Me = 0,
                Be = 0,
                Re = se
        }

        function ze(o, n) {
            o || Qo(0), Zo("autoScrolling", o, n);
            var t = e(w);
            j.autoScrolling && !j.scrollBar ? (W.css({
                overflow: "hidden",
                height: "100%"
            }), He(Ce.recordHistory, "internal"), le.css({
                "-ms-touch-action": "none",
                "touch-action": "none"
            }), t.length && Qo(t.position().top)) : (W.css({
                overflow: "visible",
                height: "initial"
            }), He(!1, "internal"), le.css({
                "-ms-touch-action": "",
                "touch-action": ""
            }), t.length && W.scrollTop(t.position().top))
        }

        function He(e, o) {
            Zo("recordHistory", e, o)
        }

        function De(e, o) {
            Zo("scrollingSpeed", e, o)
        }

        function Pe(e, o) {
            Zo("fitToSection", e, o)
        }

        function qe(e) {
            e ? (! function() {
                var e, t = "";
                o.addEventListener ? e = "addEventListener" : (e = "attachEvent", t = "on");
                var a = "onwheel" in n.createElement("div") ? "wheel" : n.onmousewheel !== i ? "mousewheel" : "DOMMouseScroll";
                "DOMMouseScroll" == a ? n[e](t + "MozMousePixelScroll", io, !1) : n[e](t + a, io, !1)
            }(), le.on("mousedown", yo).on("mouseup", Co)) : (n.addEventListener ? (n.removeEventListener("mousewheel", io, !1), n.removeEventListener("wheel", io, !1), n.removeEventListener("MozMousePixelScroll", io, !1)) : n.detachEvent("onmousewheel", io), le.off("mousedown", yo).off("mouseup", Co))
        }

        function Fe(o, n) {
            void 0 !== n ? (n = n.replace(/ /g, "").split(","), e.each(n, function(e, n) {
                Jo(o, n, "m")
            })) : (Jo(o, "all", "m"), o ? (qe(!0), (ie || ae) && (j.autoScrolling && J.off(xe.touchmove).on(xe.touchmove, $e), e(l).off(xe.touchstart).on(xe.touchstart, no).off(xe.touchmove).on(xe.touchmove, eo))) : (qe(!1), (ie || ae) && (j.autoScrolling && J.off(xe.touchmove), e(l).off(xe.touchstart).off(xe.touchmove))))
        }

        function Ve(o, n) {
            void 0 !== n ? (n = n.replace(/ /g, "").split(","), e.each(n, function(e, n) {
                Jo(o, n, "k")
            })) : (Jo(o, "all", "k"), j.keyboardScrolling = o)
        }

        function je() {
            var o = e(w).prev(m);
            o.length || !j.loopTop && !j.continuousVertical || (o = e(m).last()), o.length && so(o, null, !0)
        }

        function Ye() {
            var o = e(w).next(m);
            o.length || !j.loopBottom && !j.continuousVertical || (o = e(m).first()), o.length && so(o, null, !1)
        }

        function Ne(e, o) {
            De(0, "internal"), Xe(e, o), De(Ce.scrollingSpeed, "internal")
        }

        function Xe(e, o) {
            var n = Vo(e);
            void 0 !== o ? jo(e, o) : n.length > 0 && so(n)
        }

        function Ue(e) {
            ao("right", e)
        }

        function We(e) {
            ao("left", e)
        }

        function Ke(o) {
            if (!le.hasClass(c)) {
                re = !0, se = Q.height(), e(m).each(function() {
                    var o = e(this).find(z),
                        n = e(this).find(M);
                    j.verticalCentered && e(this).find(y).css("height", qo(e(this)) + "px"), e(this).css("height", se + "px"), n.length > 1 && Io(o, o.find(B))
                }), j.scrollOverflow && he.createScrollBarForAll();
                var n = e(w).index(m);
                n && Ne(n + 1), re = !1, e.isFunction(j.afterResize) && o && j.afterResize.call(le), e.isFunction(j.afterReBuild) && !o && j.afterReBuild.call(le)
            }
        }

        function _e(o) {
            var n = J.hasClass(s);
            o ? n || (ze(!1, "internal"), Pe(!1, "internal"), e(L).hide(), J.addClass(s), e.isFunction(j.afterResponsive) && j.afterResponsive.call(le, o)) : n && (ze(Ce.autoScrolling, "internal"), Pe(Ce.autoScrolling, "internal"), e(L).show(), J.removeClass(s), e.isFunction(j.afterResponsive) && j.afterResponsive.call(le, o))
        }

        function Qe() {
            var o, n = e(w);
            n.addClass(v), fo(n), uo(n), j.scrollOverflow && j.scrollOverflowHandler.afterLoad(), (!(o = Vo(wo().section)) || o.length && o.index() === ne.index()) && e.isFunction(j.afterLoad) && j.afterLoad.call(n, n.data("anchor"), n.index(m) + 1), e.isFunction(j.afterRender) && j.afterRender.call(le)
        }

        function Ge() {
            var o, t, i;
            if (!j.autoScrolling || j.scrollBar) {
                var a = Q.scrollTop(),
                    l = (i = (t = a) > ke ? "down" : "up", ke = t, Me = t, i),
                    s = 0,
                    r = a + Q.height() / 2,
                    c = J.height() - Q.height() === a,
                    d = n.querySelectorAll(m);
                if (c) s = d.length - 1;
                else if (a)
                    for (var f = 0; f < d.length; ++f) {
                        d[f].offsetTop <= r && (s = f)
                    } else s = 0;
                if (function(o) {
                        var n = e(w).position().top,
                            t = n + Q.height();
                        if ("up" == o) return t >= Q.scrollTop() + Q.height();
                        return n <= Q.scrollTop()
                    }(l) && (e(w).hasClass(v) || e(w).addClass(v).siblings().removeClass(v)), !(o = e(d).eq(s)).hasClass(u)) {
                    Te = !0;
                    var h, p, g = e(w),
                        S = g.index(m) + 1,
                        b = Do(o),
                        x = o.data("anchor"),
                        y = o.index(m) + 1,
                        C = o.find(B);
                    C.length && (p = C.data("anchor"), h = C.index()), de && (o.addClass(u).siblings().removeClass(u), e.isFunction(j.onLeave) && j.onLeave.call(g, S, y, b), e.isFunction(j.afterLoad) && j.afterLoad.call(o, x, y), vo(g), fo(o), uo(o), Ho(x, y - 1), j.anchors.length && ($ = x), No(h, p, x, y)), clearTimeout(me), me = setTimeout(function() {
                        Te = !1
                    }, 100)
                }
                j.fitToSection && (clearTimeout(we), we = setTimeout(function() {
                    j.fitToSection && e(w).outerHeight() <= se && Je()
                }, j.fitToSectionDelay))
            }
        }

        function Je() {
            de && (re = !0, so(e(w)), re = !1)
        }

        function Ze(o) {
            if (ue.m[o]) {
                var n = "down" === o ? Ye : je;
                if (j.scrollOverflow) {
                    var t = j.scrollOverflowHandler.scrollable(e(w)),
                        i = "down" === o ? "bottom" : "top";
                    if (t.length > 0) {
                        if (!j.scrollOverflowHandler.isScrolled(i, t)) return !0;
                        n()
                    } else n()
                } else n()
            }
        }

        function $e(e) {
            var o = e.originalEvent;
            j.autoScrolling && oo(o) && e.preventDefault()
        }

        function eo(o) {
            var n = o.originalEvent,
                i = e(n.target).closest(m);
            if (oo(n)) {
                j.autoScrolling && o.preventDefault();
                var a = Ko(n);
                Oe = a.y, Ie = a.x, i.find(z).length && t.abs(Ae - Ie) > t.abs(Le - Oe) ? !te && t.abs(Ae - Ie) > Q.outerWidth() / 100 * j.touchSensitivity && (Ae > Ie ? ue.m.right && Ue(i) : ue.m.left && We(i)) : j.autoScrolling && de && t.abs(Le - Oe) > Q.height() / 100 * j.touchSensitivity && (Le > Oe ? Ze("down") : Oe > Le && Ze("up"))
            }
        }

        function oo(e) {
            return void 0 === e.pointerType || "mouse" != e.pointerType
        }

        function no(e) {
            var o = e.originalEvent;
            if (j.fitToSection && W.stop(), oo(o)) {
                var n = Ko(o);
                Le = n.y, Ae = n.x
            }
        }

        function to(e, o) {
            for (var n = 0, i = e.slice(t.max(e.length - o, 1)), a = 0; a < i.length; a++) n += i[a];
            return t.ceil(n / o)
        }

        function io(n) {
            var i = (new Date).getTime(),
                a = e(p).hasClass(T);
            if (j.autoScrolling && !oe && !a) {
                var l = (n = n || o.event).wheelDelta || -n.deltaY || -n.detail,
                    s = t.max(-1, t.min(1, l)),
                    r = void 0 !== n.wheelDeltaX || void 0 !== n.deltaX,
                    c = t.abs(n.wheelDeltaX) < t.abs(n.wheelDelta) || t.abs(n.deltaX) < t.abs(n.deltaY) || !r;
                fe.length > 149 && fe.shift(), fe.push(t.abs(l)), j.scrollBar && (n.preventDefault ? n.preventDefault() : n.returnValue = !1);
                var d = i - Ee;
                if (Ee = i, d > 200 && (fe = []), de) to(fe, 10) >= to(fe, 70) && c && Ze(s < 0 ? "down" : "up");
                return !1
            }
            j.fitToSection && W.stop()
        }

        function ao(o, n) {
            var t = (void 0 === n ? e(w) : n).find(z),
                i = t.find(M).length;
            if (!(!t.length || te || i < 2)) {
                var a = t.find(B),
                    l = null;
                if (!(l = "left" === o ? a.prev(M) : a.next(M)).length) {
                    if (!j.loopHorizontal) return;
                    l = "left" === o ? a.siblings(":last") : a.siblings(":first")
                }
                te = !0, Io(t, l, o)
            }
        }

        function lo() {
            e(B).each(function() {
                _o(e(this), "internal")
            })
        }

        function so(o, n, i) {
            if (void 0 !== o) {
                var a, s, r, c, d, f, h, v, p = {
                    element: o,
                    callback: n,
                    isMovementUp: i,
                    dtop: (s = (a = o).position(), r = s.top, c = s.top > Me, d = r - se + a.outerHeight(), f = j.bigSectionsDestination, a.outerHeight() > se ? (c || f) && "bottom" !== f || (r = d) : (c || re && a.is(":last-child")) && (r = d), Me = r, r),
                    yMovement: Do(o),
                    anchorLink: o.data("anchor"),
                    sectionIndex: o.index(m),
                    activeSlide: o.find(B),
                    activeSection: e(w),
                    leavingSection: e(w).index(m) + 1,
                    localIsResizing: re
                };
                if (!(p.activeSection.is(o) && !re || j.scrollBar && Q.scrollTop() === p.dtop && !o.hasClass(C))) {
                    if (p.activeSlide.length && (h = p.activeSlide.data("anchor"), v = p.activeSlide.index()), e.isFunction(j.onLeave) && !p.localIsResizing) {
                        var g = p.yMovement;
                        if (void 0 !== i && (g = i ? "up" : "down"), !1 === j.onLeave.call(p.activeSection, p.leavingSection, p.sectionIndex + 1, g)) return
                    }
                    j.autoScrolling && j.continuousVertical && void 0 !== p.isMovementUp && (!p.isMovementUp && "up" == p.yMovement || p.isMovementUp && "down" == p.yMovement) && (p = function(o) {
                            o.isMovementUp ? e(w).before(o.activeSection.nextAll(m)) : e(w).after(o.activeSection.prevAll(m).get().reverse());
                            return Qo(e(w).position().top), lo(), o.wrapAroundElements = o.activeSection, o.dtop = o.element.position().top, o.yMovement = Do(o.element), o.leavingSection = o.activeSection.index(m) + 1, o.sectionIndex = o.element.index(m), o
                        }(p)), p.localIsResizing || vo(p.activeSection), j.scrollOverflow && j.scrollOverflowHandler.beforeLeave(), o.addClass(u).siblings().removeClass(u), fo(o), j.scrollOverflow && j.scrollOverflowHandler.onLeave(), de = !1, No(v, h, p.anchorLink, p.sectionIndex),
                        function(o) {
                            if (j.css3 && j.autoScrolling && !j.scrollBar) {
                                var n = "translate3d(0px, -" + t.round(o.dtop) + "px, 0px)";
                                Fo(n, !0), j.scrollingSpeed ? (clearTimeout(pe), pe = setTimeout(function() {
                                    ro(o)
                                }, j.scrollingSpeed)) : ro(o)
                            } else {
                                var i = function(e) {
                                    var o = {};
                                    j.autoScrolling && !j.scrollBar ? (o.options = {
                                        top: -e.dtop
                                    }, o.element = l) : (o.options = {
                                        scrollTop: e.dtop
                                    }, o.element = "html, body");
                                    return o
                                }(o);
                                e(i.element).animate(i.options, j.scrollingSpeed, j.easing).promise().done(function() {
                                    j.scrollBar ? setTimeout(function() {
                                        ro(o)
                                    }, 30) : ro(o)
                                })
                            }
                        }(p), $ = p.anchorLink, Ho(p.anchorLink, p.sectionIndex)
                }
            }
        }

        function ro(o) {
            var n;
            (n = o).wrapAroundElements && n.wrapAroundElements.length && (n.isMovementUp ? e(S).before(n.wrapAroundElements) : e(b).after(n.wrapAroundElements), Qo(e(w).position().top), lo()), e.isFunction(j.afterLoad) && !o.localIsResizing && j.afterLoad.call(o.element, o.anchorLink, o.sectionIndex + 1), j.scrollOverflow && j.scrollOverflowHandler.afterLoad(), o.localIsResizing || uo(o.element), o.element.addClass(v).siblings().removeClass(v), de = !0, e.isFunction(o.callback) && o.callback.call(this)
        }

        function co(e, o) {
            e.attr(o, e.data(o)).removeAttr("data-" + o)
        }

        function fo(o) {
            var n;
            j.lazyLoading && po(o).find("img[data-src], img[data-srcset], source[data-src], source[data-srcset], video[data-src], audio[data-src], iframe[data-src]").each(function() {
                if (n = e(this), e.each(["src", "srcset"], function(e, o) {
                        var t = n.attr("data-" + o);
                        void 0 !== t && t && co(n, o)
                    }), n.is("source")) {
                    var o = n.closest("video").length ? "video" : "audio";
                    n.closest(o).get(0).load()
                }
            })
        }

        function uo(o) {
            var n = po(o);
            n.find("video, audio").each(function() {
                var o = e(this).get(0);
                o.hasAttribute("data-autoplay") && "function" == typeof o.play && o.play()
            }), n.find('iframe[src*="youtube.com/embed/"]').each(function() {
                var o = e(this).get(0);
                o.hasAttribute("data-autoplay") && ho(o), o.onload = function() {
                    o.hasAttribute("data-autoplay") && ho(o)
                }
            })
        }

        function ho(e) {
            e.contentWindow.postMessage('{"event":"command","func":"playVideo","args":""}', "*")
        }

        function vo(o) {
            var n = po(o);
            n.find("video, audio").each(function() {
                var o = e(this).get(0);
                o.hasAttribute("data-keepplaying") || "function" != typeof o.pause || o.pause()
            }), n.find('iframe[src*="youtube.com/embed/"]').each(function() {
                var o = e(this).get(0);
                /youtube\.com\/embed\//.test(e(this).attr("src")) && !o.hasAttribute("data-keepplaying") && e(this).get(0).contentWindow.postMessage('{"event":"command","func":"pauseVideo","args":""}', "*")
            })
        }

        function po(o) {
            var n = o.find(B);
            return n.length && (o = e(n)), o
        }

        function go() {
            var e = wo(),
                o = e.section,
                n = e.slide;
            o && (j.animateAnchor ? jo(o, n) : Ne(o, n))
        }

        function mo() {
            if (!Te && !j.lockAnchors) {
                var e = wo(),
                    o = e.section,
                    n = e.slide,
                    t = void 0 === $,
                    i = void 0 === $ && void 0 === n && !te;
                o && o.length && (o && o !== $ && !t || i || !te && ee != n) && jo(o, n)
            }
        }

        function wo() {
            var e, n, t = o.location.hash;
            if (t.length) {
                var i = t.replace("#", "").split("/"),
                    a = t.indexOf("#/") > -1;
                e = a ? "/" + i[1] : decodeURIComponent(i[0]);
                var l = a ? i[2] : i[1];
                l && l.length && (n = decodeURIComponent(l))
            }
            return {
                section: e,
                slide: n
            }
        }

        function So(o) {
            clearTimeout(Se);
            var n = e(":focus"),
                t = o.which;
            if (9 === t) ! function(o) {
                var n = o.shiftKey,
                    t = e(":focus"),
                    i = e(w),
                    a = i.find(B),
                    l = (a.length ? a : i).find(ye).not('[tabindex="-1"]');

                function s(e) {
                    return e.preventDefault(), l.first().focus()
                }
                t.length ? t.closest(w, B).length || (t = s(o)) : s(o);
                (!n && t.is(l.last()) || n && t.is(l.first())) && o.preventDefault()
            }(o);
            else if (!n.is("textarea") && !n.is("input") && !n.is("select") && "true" !== n.attr("contentEditable") && "" !== n.attr("contentEditable") && j.keyboardScrolling && j.autoScrolling) {
                e.inArray(t, [40, 38, 32, 33, 34]) > -1 && o.preventDefault(), oe = o.ctrlKey, Se = setTimeout(function() {
                    ! function(o) {
                        var n = o.shiftKey;
                        if (!de && [37, 39].indexOf(o.which) < 0) return;
                        switch (o.which) {
                            case 38:
                            case 33:
                                ue.k.up && je();
                                break;
                            case 32:
                                if (n && ue.k.up) {
                                    je();
                                    break
                                }
                                case 40:
                                case 34:
                                    ue.k.down && Ye();
                                    break;
                                case 36:
                                    ue.k.up && Xe(1);
                                    break;
                                case 35:
                                    ue.k.down && Xe(e(m).length);
                                    break;
                                case 37:
                                    ue.k.left && We();
                                    break;
                                case 39:
                                    ue.k.right && Ue();
                                    break;
                                default:
                        }
                    }(o)
                }, 150)
            }
        }

        function bo() {
            e(this).prev().trigger("click")
        }

        function xo(e) {
            ce && (oe = e.ctrlKey)
        }

        function yo(e) {
            2 == e.which && (Be = e.pageY, le.on("mousemove", Oo))
        }

        function Co(e) {
            2 == e.which && le.off("mousemove")
        }

        function To() {
            var o = e(this).closest(m);
            e(this).hasClass(N) ? ue.m.left && We(o) : ue.m.right && Ue(o)
        }

        function ko() {
            ce = !1, oe = !1
        }

        function Lo(o) {
            o.preventDefault();
            var n = e(this).parent().index();
            so(e(m).eq(n))
        }

        function Ao(o) {
            o.preventDefault();
            var n = e(this).closest(m).find(z);
            Io(n, n.find(M).eq(e(this).closest("li").index()))
        }

        function Oo(e) {
            de && (e.pageY < Be && ue.m.up ? je() : e.pageY > Be && ue.m.down && Ye()), Be = e.pageY
        }

        function Io(o, n, i) {
            var a = o.closest(m),
                l = {
                    slides: o,
                    destiny: n,
                    direction: i,
                    destinyPos: n.position(),
                    slideIndex: n.index(),
                    section: a,
                    sectionIndex: a.index(m),
                    anchorLink: a.data("anchor"),
                    slidesNav: a.find(F),
                    slideAnchor: Uo(n),
                    prevSlide: a.find(B),
                    prevSlideIndex: a.find(B).index(),
                    localIsResizing: re
                };
            l.xMovement = function(e, o) {
                if (e == o) return "none";
                if (e > o) return "left";
                return "right"
            }(l.prevSlideIndex, l.slideIndex), l.localIsResizing || (de = !1), j.onSlideLeave && !l.localIsResizing && "none" !== l.xMovement && e.isFunction(j.onSlideLeave) && !1 === j.onSlideLeave.call(l.prevSlide, l.anchorLink, l.sectionIndex + 1, l.prevSlideIndex, l.direction, l.slideIndex) ? te = !1 : (n.addClass(u).siblings().removeClass(u), l.localIsResizing || (vo(l.prevSlide), fo(n)), !j.loopHorizontal && j.controlArrows && (a.find(U).toggle(0 !== l.slideIndex), a.find(_).toggle(!n.is(":last-child"))), a.hasClass(u) && !l.localIsResizing && No(l.slideIndex, l.slideAnchor, l.anchorLink, l.sectionIndex), function(e, o, n) {
                var i = o.destinyPos;
                if (j.css3) {
                    var a = "translate3d(-" + t.round(i.left) + "px, 0px, 0px)";
                    Ro(e.find(D)).css(Go(a)), ge = setTimeout(function() {
                        n && Eo(o)
                    }, j.scrollingSpeed, j.easing)
                } else e.animate({
                    scrollLeft: t.round(i.left)
                }, j.scrollingSpeed, j.easing, function() {
                    n && Eo(o)
                })
            }(o, l, !0))
        }

        function Eo(o) {
            var n, t;
            n = o.slidesNav, t = o.slideIndex, n.find(h).removeClass(u), n.find("li").eq(t).find("a").addClass(u), o.localIsResizing || (e.isFunction(j.afterSlideLoad) && j.afterSlideLoad.call(o.destiny, o.anchorLink, o.sectionIndex + 1, o.slideAnchor, o.slideIndex), de = !0, uo(o.destiny)), te = !1
        }

        function Mo() {
            if (Bo(), ie) {
                var o = e(n.activeElement);
                if (!o.is("textarea") && !o.is("input") && !o.is("select")) {
                    var i = Q.height();
                    t.abs(i - Re) > 20 * t.max(Re, i) / 100 && (Ke(!0), Re = i)
                }
            } else clearTimeout(ve), ve = setTimeout(function() {
                Ke(!0)
            }, 350)
        }

        function Bo() {
            var e = j.responsive || j.responsiveWidth,
                o = j.responsiveHeight,
                n = e && Q.outerWidth() < e,
                t = o && Q.height() < o;
            e && o ? _e(n || t) : e ? _e(n) : o && _e(t)
        }

        function Ro(e) {
            var o = "all " + j.scrollingSpeed + "ms " + j.easingcss3;
            return e.removeClass(r), e.css({
                "-webkit-transition": o,
                transition: o
            })
        }

        function zo(e) {
            return e.addClass(r)
        }

        function Ho(o, n) {
            var t, i, a;
            t = o, j.menu && (e(j.menu).find(h).removeClass(u), e(j.menu).find('[data-menuanchor="' + t + '"]').addClass(u)), i = o, a = n, j.navigation && (e(L).find(h).removeClass(u), i ? e(L).find('a[href="#' + i + '"]').addClass(u) : e(L).find("li").eq(a).find("a").addClass(u))
        }

        function Do(o) {
            var n = e(w).index(m),
                t = o.index(m);
            return n == t ? "none" : n > t ? "up" : "down"
        }

        function Po(o) {
            if (!o.hasClass(P)) {
                var n = e('<div class="' + x + '" />').height(qo(o));
                o.addClass(P).wrapInner(n)
            }
        }

        function qo(e) {
            var o = se;
            if (j.paddingTop || j.paddingBottom) {
                var n = e;
                n.hasClass(g) || (n = e.closest(m));
                var t = parseInt(n.css("padding-top")) + parseInt(n.css("padding-bottom"));
                o = se - t
            }
            return o
        }

        function Fo(e, o) {
            o ? Ro(le) : zo(le), le.css(Go(e)), setTimeout(function() {
                le.removeClass(r)
            }, 10)
        }

        function Vo(o) {
            var n = le.find(m + '[data-anchor="' + o + '"]');
            if (!n.length) {
                var t = void 0 !== o ? o - 1 : 0;
                n = e(m).eq(t)
            }
            return n
        }

        function jo(e, o) {
            var n = Vo(e);
            if (n.length) {
                var t, i, a, l = (t = o, (a = (i = n).find(M + '[data-anchor="' + t + '"]')).length || (t = void 0 !== t ? t : 0, a = i.find(M).eq(t)), a);
                e === $ || n.hasClass(u) ? Yo(l) : so(n, function() {
                    Yo(l)
                })
            }
        }

        function Yo(e) {
            e.length && Io(e.closest(z), e)
        }

        function No(e, o, n, t) {
            var i = "";
            j.anchors.length && !j.lockAnchors && (e ? (void 0 !== n && (i = n), void 0 === o && (o = e), ee = o, Xo(i + "/" + o)) : void 0 !== e ? (ee = o, Xo(n)) : Xo(n)), Wo()
        }

        function Xo(e) {
            if (j.recordHistory) location.hash = e;
            else if (ie || ae) o.history.replaceState(i, i, "#" + e);
            else {
                var n = o.location.href.split("#")[0];
                o.location.replace(n + "#" + e)
            }
        }

        function Uo(e) {
            var o = e.data("anchor"),
                n = e.index();
            return void 0 === o && (o = n), o
        }

        function Wo() {
            var o = e(w),
                n = o.find(B),
                t = Uo(o),
                i = Uo(n),
                a = String(t);
            n.length && (a = a + "-" + i), a = a.replace("/", "-").replace("#", "");
            var l = new RegExp("\\b\\s?" + f + "-[^\\s]+\\b", "g");
            J[0].className = J[0].className.replace(l, ""), J.addClass(f + "-" + a)
        }

        function Ko(e) {
            var o = [];
            return o.y = void 0 !== e.pageY && (e.pageY || e.pageX) ? e.pageY : e.touches[0].pageY, o.x = void 0 !== e.pageX && (e.pageY || e.pageX) ? e.pageX : e.touches[0].pageX, ae && oo(e) && (j.scrollBar || !j.autoScrolling) && (o.y = e.touches[0].pageY, o.x = e.touches[0].pageX), o
        }

        function _o(e, o) {
            De(0, "internal"), void 0 !== o && (re = !0), Io(e.closest(z), e), void 0 !== o && (re = !1), De(Ce.scrollingSpeed, "internal")
        }

        function Qo(e) {
            var o = t.round(e);
            j.css3 && j.autoScrolling && !j.scrollBar ? Fo("translate3d(0px, -" + o + "px, 0px)", !1) : j.autoScrolling && !j.scrollBar ? le.css("top", -o) : W.scrollTop(o)
        }

        function Go(e) {
            return {
                "-webkit-transform": e,
                "-moz-transform": e,
                "-ms-transform": e,
                transform: e
            }
        }

        function Jo(o, n, t) {
            "all" !== n ? ue[t][n] = o : e.each(Object.keys(ue[t]), function(e, n) {
                ue[t][n] = o
            })
        }

        function Zo(e, o, n) {
            j[e] = o, "internal" !== n && (Ce[e] = o)
        }

        function $o() {
            e("html").hasClass(d) ? en("error", "Fullpage.js can only be initialized once and you are doing it multiple times!") : (j.continuousVertical && (j.loopTop || j.loopBottom) && (j.continuousVertical = !1, en("warn", "Option `loopTop/loopBottom` is mutually exclusive with `continuousVertical`; `continuousVertical` disabled")), j.scrollBar && j.scrollOverflow && en("warn", "Option `scrollBar` is mutually exclusive with `scrollOverflow`. Sections with scrollOverflow might not work well in Firefox"), !j.continuousVertical || !j.scrollBar && j.autoScrolling || (j.continuousVertical = !1, en("warn", "Scroll bars (`scrollBar:true` or `autoScrolling:false`) are mutually exclusive with `continuousVertical`; `continuousVertical` disabled")), j.scrollOverflow && !j.scrollOverflowHandler && (j.scrollOverflow = !1, en("error", "The option `scrollOverflow:true` requires the file `scrolloverflow.min.js`. Please include it before fullPage.js.")), e.each(["fadingEffect", "continuousHorizontal", "scrollHorizontally", "interlockedSlides", "resetSliders", "responsiveSlides", "offsetSections", "dragAndMove", "scrollOverflowReset", "parallax"], function(e, o) {
                j[o] && en("warn", "fullpage.js extensions require jquery.fullpage.extensions.min.js file instead of the usual jquery.fullpage.js. Requested: " + o)
            }), e.each(j.anchors, function(o, n) {
                var t = G.find("[name]").filter(function() {
                        return e(this).attr("name") && e(this).attr("name").toLowerCase() == n.toLowerCase()
                    }),
                    i = G.find("[id]").filter(function() {
                        return e(this).attr("id") && e(this).attr("id").toLowerCase() == n.toLowerCase()
                    });
                (i.length || t.length) && (en("error", "data-anchor tags can not have the same value as any `id` element on the site (or `name` element for IE)."), i.length && en("error", '"' + n + '" is is being used by another element `id` property'), t.length && en("error", '"' + n + '" is is being used by another element `name` property'))
            }))
        }

        function en(e, o) {
            console && console[e] && console[e]("fullPage: " + o)
        }
        document.getElementById("section-down").addEventListener("click", function() {
            Ye()
        });
        document.getElementById("section-up").addEventListener("click", function() {
            je()
        });
        document.getElementById("opk-line-btn-index").addEventListener("click", function() {
            document.getElementById("testbtn").click()
        });
        
    }
});