(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [4426], {
        194: (e, t, a) => {
            "use strict";
            a.d(t, {
                AppTabBar: () => Y
            });
            var n = a(96942),
                r = a(84364),
                s = a(56978),
                i = a(14344),
                l = a(63781),
                o = a(42105),
                c = a(28176),
                d = a(11087);
            let u = [{
                    label: "Light",
                    value: "light",
                    Icon: l.A
                }, {
                    label: "Auto",
                    value: "system",
                    Icon: o.A
                }, {
                    label: "Dark",
                    value: "dark",
                    Icon: c.A
                }],
                m = e => {
                    let {
                        className: t
                    } = e, {
                        theme: a,
                        setTheme: r
                    } = (0, d.D)(), s = null != a ? a : "system", l = Math.max(0, u.findIndex(e => e.value === s));
                    return (0, n.jsxs)("div", {
                        "aria-label": "Theme",
                        className: (0, i.cn)("relative grid grid-cols-3 rounded-xl bg-secondary p-1", t),
                        role: "radiogroup",
                        style: {
                            "--i": l
                        },
                        children: [(0, n.jsx)("span", {
                            "aria-hidden": !0,
                            className: "absolute inset-y-1 left-1 w-[calc((100%-0.5rem)/3)] translate-x-[calc(var(--i)*100%)] rounded-[9px] bg-card shadow-sm transition-transform duration-300 ease-[var(--nm-ease)]"
                        }), u.map(e => {
                            let {
                                label: t,
                                value: a,
                                Icon: l
                            } = e;
                            return (0, n.jsxs)("button", {
                                "aria-checked": s === a,
                                className: (0, i.cn)("relative z-10 flex h-9 touch-manipulation select-none items-center justify-center gap-1.5 rounded-[9px] text-[13px] font-medium transition-colors [-webkit-tap-highlight-color:transparent]", "outline-none focus-visible:ring-2 focus-visible:ring-[var(--nm-focus)]", s === a ? "text-foreground" : "text-[var(--nm-muted)]"),
                                onClick: () => r(a),
                                role: "radio",
                                type: "button",
                                children: [(0, n.jsx)(l, {
                                    "aria-hidden": !0,
                                    className: "size-4"
                                }), t]
                            }, a)
                        })]
                    })
                };
            var p = a(14220),
                g = a(80756),
                h = a(3146),
                v = a(67621),
                f = a(14474),
                x = a(92884),
                b = a(57901),
                w = a(82090),
                y = a(45002),
                k = a.n(y),
                C = a(78879),
                N = a(58622),
                j = a(60914),
                _ = a(22735),
                P = a(86331),
                A = a(55435),
                W = a(14831),
                S = a(71742);
            let M = e => {
                    let t = (0, A.K)(W.f, e);
                    return {
                        tabs: t.filter(e => e.tab),
                        morePages: t.filter(e => !e.tab)
                    }
                },
                E = M(!0),
                I = M(!1),
                L = [{
                    label: "X",
                    href: "https://x.com/NullmaskETH",
                    Icon: s.F
                }, {
                    label: "Telegram",
                    href: "https://t.me/NullmaskETH",
                    Icon: r.h
                }],
                F = "[-webkit-tap-highlight-color:transparent] touch-manipulation select-none",
                T = "outline-none focus-visible:ring-2 focus-visible:ring-[var(--nm-focus)]",
                z = (0, i.cn)("group/tab relative z-10 flex h-14 min-w-0 flex-1 flex-col items-center gap-1 rounded-2xl pt-[5px]", F, T),
                H = e => {
                    let {
                        icon: t,
                        name: a,
                        active: r
                    } = e;
                    return (0, n.jsxs)(n.Fragment, {
                        children: [(0, n.jsx)("span", {
                            className: "flex h-8 w-14 items-center justify-center transition-transform duration-150 ease-out group-active/tab:scale-[0.86]",
                            children: (0, n.jsx)(t, {
                                "aria-hidden": !0,
                                className: (0, i.cn)("size-[22px] transition-colors duration-300", r ? "text-[var(--nm-on-lime)]" : "text-[var(--nm-muted)]"),
                                strokeWidth: r ? 2.25 : 1.9
                            })
                        }), (0, n.jsx)("span", {
                            className: (0, i.cn)("text-[10.5px] leading-none tracking-[0.01em] transition-colors duration-300", r ? "font-semibold text-foreground" : "font-medium text-[var(--nm-muted)]"),
                            children: a
                        })]
                    })
                },
                O = e => {
                    let {
                        icon: t,
                        label: a,
                        external: r
                    } = e;
                    return (0, n.jsxs)(n.Fragment, {
                        children: [(0, n.jsx)("span", {
                            className: "flex size-9 shrink-0 items-center justify-center rounded-xl bg-secondary text-foreground",
                            children: (0, n.jsx)(t, {
                                "aria-hidden": !0,
                                className: "size-[18px]"
                            })
                        }), (0, n.jsx)("span", {
                            className: "min-w-0 flex-1 truncate text-[15px] font-medium",
                            children: a
                        }), r ? (0, n.jsx)(g.A, {
                            "aria-hidden": !0,
                            className: "size-4 text-[var(--nm-muted)]"
                        }) : (0, n.jsx)(h.A, {
                            "aria-hidden": !0,
                            className: "size-4 text-[var(--nm-muted)]"
                        })]
                    })
                },
                B = (0, i.cn)("flex min-h-14 w-full items-center gap-3 px-3.5 text-left transition-colors active:bg-secondary/80", F, "outline-none focus-visible:bg-secondary"),
                Y = () => {
                    let e = (0, C.usePathname)(),
                        {
                            tabs: t,
                            morePages: a
                        } = (0, P.R)() ? E : I,
                        r = t.length,
                        [s, l] = (0, N.useState)(!1),
                        [o, c] = (0, N.useState)(!1),
                        [d, u] = (0, N.useState)(null);
                    (0, N.useEffect)(() => u(null), [e]);
                    let g = null != d ? d : e,
                        h = t.findIndex(e => e.href === g),
                        y = a.some(e => e.href === g),
                        A = s || y || h < 0 ? r : h,
                        W = s || y || h >= 0,
                        M = t => a => {
                            if (!a.metaKey && !a.ctrlKey && !a.shiftKey && !a.altKey && 0 === a.button) {
                                if (l(!1), t === e) {
                                    a.preventDefault(), window.scrollTo({
                                        top: 0,
                                        behavior: "smooth"
                                    });
                                    return
                                }
                                u(t)
                            }
                        };
                    return (0, n.jsxs)(n.Fragment, {
                        children: [(0, n.jsx)("nav", {
                            "aria-label": "Main",
                            className: (0, i.cn)("fixed inset-x-0 bottom-0 z-40 md:hidden", "border-[var(--nm-hairline)] border-t bg-[color-mix(in_srgb,var(--card)_88%,transparent)] backdrop-blur-2xl backdrop-saturate-150", "shadow-[0_-10px_30px_-22px_rgba(10,13,16,0.35)]", "pr-[env(safe-area-inset-right)] pb-[env(safe-area-inset-bottom)] pl-[env(safe-area-inset-left)]", "translate-y-[calc(var(--nm-typing,0)*100%)] transition-transform duration-300 ease-[var(--nm-ease)]"),
                            "data-nm-tab-bar": "",
                            children: (0, n.jsxs)("div", {
                                className: "relative mx-auto flex h-14 max-w-md items-stretch px-1.5",
                                children: [(0, n.jsx)("span", {
                                    "aria-hidden": !0,
                                    className: (0, i.cn)("pointer-events-none absolute top-0 left-1.5 flex h-14 justify-center transition-[transform,opacity] duration-[420ms] ease-[var(--nm-spring)]", 4 === r + 1 ? "w-[calc((100%-0.75rem)/4)]" : "w-[calc((100%-0.75rem)/5)]", "translate-x-[calc(var(--i)*100%)]", W ? "opacity-100" : "opacity-0"),
                                    style: {
                                        "--i": A
                                    },
                                    children: (0, n.jsx)("span", {
                                        className: "mt-[5px] h-8 w-14 rounded-full bg-[var(--nm-lime)] shadow-[0_0_18px_var(--nm-glow-soft)]"
                                    })
                                }), t.map((t, a) => (0, n.jsx)(k(), {
                                    "aria-current": e === t.href ? "page" : void 0,
                                    className: z,
                                    href: t.href,
                                    onClick: M(t.href),
                                    children: (0, n.jsx)(H, {
                                        active: A === a && W,
                                        icon: t.icon,
                                        name: t.name
                                    })
                                }, t.href)), (0, n.jsx)("button", {
                                    "aria-expanded": s,
                                    "aria-haspopup": "dialog",
                                    className: z,
                                    onClick: () => l(!0),
                                    type: "button",
                                    children: (0, n.jsx)(H, {
                                        active: A === r && W,
                                        icon: v.A,
                                        name: "More"
                                    })
                                })]
                            })
                        }), (0, n.jsx)(p._s, {
                            onOpenChange: l,
                            open: s,
                            children: (0, n.jsxs)(p.uT, {
                                children: [(0, n.jsx)(p.QP, {
                                    className: "bg-black/40 backdrop-blur-[2px]"
                                }), (0, n.jsxs)(p.BV, {
                                    className: (0, i.cn)(S._, "md:hidden"),
                                    children: [(0, n.jsxs)("div", {
                                        className: "flex items-center justify-between px-5 pt-3 pb-2",
                                        children: [(0, n.jsx)(p.gk, {
                                            className: "static translate-x-0 translate-y-0 text-[20px] font-semibold tracking-tight",
                                            children: "More"
                                        }), (0, n.jsx)(p.I6, {
                                            className: "sr-only",
                                            children: "Pages, theme and help"
                                        })]
                                    }), (0, n.jsxs)("div", {
                                        className: "space-y-4 overflow-y-auto overscroll-contain px-4 pt-1 pb-5",
                                        children: [(0, n.jsx)("nav", {
                                            "aria-label": "More pages",
                                            className: "grid grid-cols-4 gap-2",
                                            children: a.map(t => {
                                                let {
                                                    name: a,
                                                    href: r,
                                                    icon: s
                                                } = t, l = e === r;
                                                return (0, n.jsxs)(k(), {
                                                    "aria-current": l ? "page" : void 0,
                                                    className: (0, i.cn)("flex h-[84px] flex-col items-center justify-center gap-2 rounded-2xl border bg-card transition-[transform,background-color] duration-150 active:scale-[0.96] active:bg-secondary", l ? "border-[color-mix(in_srgb,var(--nm-lime)_70%,transparent)] shadow-[0_0_0_3px_var(--nm-glow-soft)]" : "border-[var(--nm-hairline)]", F, T),
                                                    href: r,
                                                    onClick: M(r),
                                                    children: [(0, n.jsx)("span", {
                                                        className: "flex size-10 items-center justify-center rounded-full bg-secondary",
                                                        children: "/gas" === r ? (0, n.jsx)(_.B, {
                                                            fallback: (0, n.jsx)(s, {
                                                                "aria-hidden": !0,
                                                                className: "size-5"
                                                            })
                                                        }) : (0, n.jsx)(s, {
                                                            "aria-hidden": !0,
                                                            className: "size-5"
                                                        })
                                                    }), (0, n.jsx)("span", {
                                                        className: "text-[13px] font-semibold",
                                                        children: a
                                                    })]
                                                }, r)
                                            })
                                        }), (0, n.jsxs)("section", {
                                            "aria-label": "Appearance",
                                            className: "space-y-2",
                                            children: [(0, n.jsx)("p", {
                                                className: "px-1 text-[12px] font-semibold uppercase tracking-[0.08em] text-[var(--nm-muted)]",
                                                children: "Appearance"
                                            }), (0, n.jsx)(m, {})]
                                        }), (0, n.jsxs)("section", {
                                            "aria-label": "Learn",
                                            className: "space-y-2",
                                            children: [(0, n.jsx)("p", {
                                                className: "px-1 text-[12px] font-semibold uppercase tracking-[0.08em] text-[var(--nm-muted)]",
                                                children: "Learn"
                                            }), (0, n.jsxs)("div", {
                                                className: "divide-y divide-[var(--nm-hairline)] overflow-hidden rounded-2xl border border-[var(--nm-hairline)] bg-card",
                                                children: [(0, n.jsx)("button", {
                                                    className: B,
                                                    onClick: () => {
                                                        l(!1), c(!0)
                                                    },
                                                    type: "button",
                                                    children: (0, n.jsx)(O, {
                                                        icon: f.A,
                                                        label: "How Nullmask works"
                                                    })
                                                }), (0, n.jsx)("a", {
                                                    className: B,
                                                    href: "/waves",
                                                    children: (0, n.jsx)(O, {
                                                        icon: x.A,
                                                        label: "How waves work"
                                                    })
                                                }), (0, n.jsx)("a", {
                                                    className: B,
                                                    href: "/rules",
                                                    children: (0, n.jsx)(O, {
                                                        icon: b.A,
                                                        label: "Privacy best practice"
                                                    })
                                                }), (0, n.jsx)("a", {
                                                    className: B,
                                                    href: "https://docs.nullmask.io",
                                                    rel: "noopener noreferrer",
                                                    target: "_blank",
                                                    children: (0, n.jsx)(O, {
                                                        external: !0,
                                                        icon: w.A,
                                                        label: "Docs"
                                                    })
                                                })]
                                            })]
                                        }), (0, n.jsxs)("div", {
                                            className: "flex items-center gap-4 px-1 text-[13px]",
                                            children: [(0, n.jsx)("a", {
                                                className: (0, i.cn)("text-[var(--nm-muted)] underline-offset-4 active:underline", T),
                                                href: "/terms",
                                                children: "Terms of Use"
                                            }), (0, n.jsx)("a", {
                                                className: (0, i.cn)("text-[var(--nm-muted)] underline-offset-4 active:underline", T),
                                                href: "/privacy",
                                                children: "Privacy Policy"
                                            })]
                                        }), (0, n.jsxs)("div", {
                                            className: "flex items-center justify-between px-1 pt-1",
                                            children: [(0, n.jsxs)("span", {
                                                className: "text-[13px] text-[var(--nm-muted)]",
                                                children: ["\xa9 ", new Date().getFullYear(), " Nullmask"]
                                            }), (0, n.jsx)("div", {
                                                className: "flex items-center gap-1",
                                                children: L.map(e => {
                                                    let {
                                                        label: t,
                                                        href: a,
                                                        Icon: r
                                                    } = e;
                                                    return (0, n.jsx)("a", {
                                                        "aria-label": t,
                                                        className: (0, i.cn)("flex size-11 items-center justify-center rounded-full text-[var(--nm-muted)] transition-colors active:bg-secondary active:text-foreground", F, T),
                                                        href: a,
                                                        rel: "noopener noreferrer",
                                                        target: "_blank",
                                                        children: (0, n.jsx)(r, {
                                                            className: "size-[18px]"
                                                        })
                                                    }, t)
                                                })
                                            })]
                                        })]
                                    })]
                                })]
                            })
                        }), (0, n.jsx)(j.D, {
                            onOpenChange: c,
                            open: o
                        })]
                    })
                }
        },
        759: (e, t, a) => {
            "use strict";
            a.d(t, {
                BY: () => i,
                DC: () => u,
                Kc: () => d,
                ZN: () => l,
                cJ: () => o,
                s_: () => m,
                z9: () => s
            });
            var n = a(14536);
            let r = "0x0000000000000000000000000000000000000000",
                s = e => {
                    var t;
                    if (e.isNative) return r;
                    let a = (null != (t = e.address) ? t : "").toLowerCase();
                    return "" === a || "0x0" === a || /^0x0+$/.test(a) ? r : a
                },
                i = (e, t) => t > 0n && e.some(e => e === t),
                l = e => 0 === e.length ? void 0 : e.reduce((e, t) => t < e ? t : e),
                o = e => [...new Set(e.filter(e => e > 0n))].sort((e, t) => e < t ? -1 : +(e > t)),
                c = (e, t) => {
                    var a;
                    let r = (0, n.rv)(e, null != (a = t.feeBps) ? a : 0n);
                    return {
                        gross: r,
                        cost: r + (t.isNative ? t.feeReserve : 0n)
                    }
                },
                d = e => o(e.grid).map(t => {
                    let {
                        gross: a,
                        cost: n
                    } = c(t, e), r = n > e.spendable;
                    return {
                        value: t,
                        gross: a,
                        disabled: r,
                        missing: r ? n - e.spendable : 0n
                    }
                }),
                u = e => {
                    var t, a;
                    let {
                        grid: r,
                        spendable: s,
                        isNative: i,
                        feeReserve: o,
                        maxInOneGo: u,
                        allowCustom: m = !0
                    } = e;
                    if (void 0 === l(r)) return {
                        available: !1,
                        reason: "no_grid"
                    };
                    if (s <= 0n) return {
                        available: !1,
                        reason: "empty"
                    };
                    let p = d(e).filter(e => !e.disabled && (void 0 === u || e.gross <= u)).at(-1);
                    if (p) {
                        let {
                            cost: t
                        } = c(p.value, e);
                        return {
                            available: !0,
                            value: p.value,
                            gross: p.gross,
                            kind: "grid",
                            leftover: s - t
                        }
                    }
                    let g = i ? s - o : s;
                    if (g <= 0n) return {
                        available: !1,
                        reason: "fee_exceeds_balance"
                    };
                    if (void 0 !== u && g > u) {
                        let a = (0, n.x7)(u > 0n ? u : 0n, null != (t = e.feeBps) ? t : 0n);
                        return !m || a <= 0n ? {
                            available: !1,
                            reason: "too_many_notes"
                        } : {
                            available: !0,
                            value: a,
                            gross: u,
                            kind: "rest",
                            leftover: g - u,
                            limited: !0
                        }
                    }
                    let h = (0, n.x7)(g, null != (a = e.feeBps) ? a : 0n);
                    return h <= 0n ? {
                        available: !1,
                        reason: "fee_exceeds_balance"
                    } : {
                        available: !0,
                        value: h,
                        gross: g,
                        kind: "rest",
                        leftover: 0n
                    }
                },
                m = (e, t) => void 0 !== t && i(e, t) ? t : void 0
        },
        1883: (e, t, a) => {
            "use strict";
            a.d(t, {
                A5: () => u,
                Au: () => I,
                DK: () => M,
                EC: () => R,
                F6: () => ei,
                IU: () => z,
                J2: () => f,
                KB: () => L,
                KP: () => q,
                Ky: () => A,
                M4: () => ea,
                N9: () => B,
                P7: () => g,
                RX: () => S,
                Td: () => x,
                UX: () => Z,
                VX: () => O,
                Ye: () => F,
                _l: () => X,
                _w: () => W,
                _y: () => $,
                ax: () => j,
                dP: () => ee,
                ff: () => G,
                fo: () => N,
                iF: () => Q,
                ib: () => k,
                ii: () => w,
                ik: () => T,
                k$: () => m,
                l$: () => _,
                lU: () => p,
                pP: () => J,
                rb: () => et,
                sG: () => U,
                tA: () => D,
                ti: () => K,
                vW: () => y,
                vl: () => b,
                x5: () => H,
                y9: () => en,
                yl: () => C
            });
            var n = a(14536),
                r = a(67622),
                s = a(28913),
                i = a(92868),
                l = a(39461);
            let o = s.L5J().transform((e, t) => {
                    let a = (0, l.Lf)(e);
                    return void 0 === a || a < 0n ? (t.addIssue({
                        code: "custom",
                        message: "Not a wei quantity"
                    }), s.tmp) : a
                }),
                c = s.Ikc({
                    reserveWei: o,
                    heldWei: o.optional().catch(void 0),
                    ethWei: o,
                    availableWei: o.optional().catch(void 0),
                    feePerWithdrawalWei: o,
                    withdrawalsLeft: s.aig().int().min(0).optional().catch(void 0),
                    pendingTopUpWei: o.optional().catch(void 0)
                }),
                d = e => {
                    var t, a, n, r;
                    let s = c.safeParse(e);
                    if (!s.success) return;
                    let i = s.data,
                        l = i.reserveWei > i.ethWei ? i.ethWei : i.reserveWei,
                        o = i.feePerWithdrawalWei;
                    return {
                        reserve: l,
                        held: null != (t = i.heldWei) ? t : l,
                        eth: i.ethWei,
                        available: null != (a = i.availableWei) ? a : i.ethWei - l,
                        feePerWithdrawal: o,
                        withdrawalsLeft: null != (n = i.withdrawalsLeft) ? n : o > 0n ? Number(l / o) : 0,
                        pendingTopUp: null != (r = i.pendingTopUpWei) ? r : 0n
                    }
                },
                u = async (e, t) => d(await e("nullmask_getGas", [{
                    from: t
                }])), m = async (e, t, a) => d(await e("nullmask_setGasReserve", [{
                    from: t,
                    reserveWei: a.toString()
                }])), p = async (e, t) => {
                    let a = {
                        from: t.from,
                        txHash: t.txHash
                    };
                    return void 0 !== t.gasWei && (a.gasWei = t.gasWei.toString()), d(await e("nullmask_recordGasTopUp", [a]))
                }, g = 3, h = 10n ** 14n, v = e => e <= h ? h : (e + h - 1n) / h * h, f = e => {
                    let [t = "0", a = ""] = (0, r.J)(v(e), 18).split("."), n = a.slice(0, 4).replace(/0+$/, "");
                    return "".concat(t).concat(n ? ".".concat(n) : "")
                }, x = e => "/gas?amount=".concat(f(e)), b = (e, t) => t > 0 ? e * BigInt(t) + e / 10n : 0n, w = e => {
                    let {
                        fastFee: t,
                        advancedReserve: a
                    } = e;
                    if (void 0 === t && void 0 === a) return;
                    let n = null != t ? t : 0n,
                        r = null != a ? a : 0n;
                    return r > n ? r : n
                }, y = (e, t) => v(b(e, t)), k = e => {
                    let t = w(e);
                    return void 0 === t ? void 0 : y(t, 1)
                }, C = (e, t) => t > 0n ? Number((100n * e + 15n * t) / (100n * t)) : 0, N = e => e <= 0 ? "under 1 withdrawal" : "~".concat(e, " withdrawal").concat(1 === e ? "" : "s"), j = (e, t) => {
                    if (0n === e.eth && 0n === e.reserve) return t ? {
                        kind: "needEth"
                    } : {
                        kind: "hidden"
                    };
                    let a = e.feePerWithdrawal > 0n && e.eth < e.feePerWithdrawal;
                    return 0n === e.reserve ? {
                        kind: "fromEth",
                        withdrawals: C(e.eth, e.feePerWithdrawal),
                        low: a
                    } : {
                        kind: "setAside",
                        withdrawals: C(e.reserve, e.feePerWithdrawal),
                        low: a
                    }
                }, _ = [1, 3, 10], P = [1, 3, 10], A = (e, t) => {
                    if (void 0 !== e && !(e <= 0n) && void 0 !== t) return v((0, n.be)(e, t))
                }, W = (e, t) => {
                    if (void 0 === e || e <= 0n) return [];
                    let a = P.map(t => ({
                        count: t,
                        value: y(e, t),
                        minimum: !1
                    }));
                    if (void 0 === t || t <= 0n || a.every(e => e.value >= t)) return a;
                    let n = {
                        count: C(t, e),
                        value: t,
                        minimum: !0
                    };
                    return [n, ...a.filter(e => e.value > t && e.count > n.count)]
                }, S = function (e) {
                    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "ETH";
                    return "Top-ups from your wallet start at ".concat(f(e), " ").concat(t, " (a deposit minimum).")
                }, M = 10, E = (e, t) => t > 0n && e > 0n ? Number(1000n * e / t) / 1e3 : 0, I = e => Number.isFinite(e) && e > 0 ? Math.min(1, e / M) : 0, L = {
                    solid: 0,
                    total: 0,
                    empty: !1,
                    withdrawals: 0
                }, F = e => {
                    let t = e.feePerWithdrawal,
                        a = e.reserve > e.eth ? e.eth : e.reserve,
                        n = I(E(a, t));
                    return {
                        solid: n,
                        total: Math.max(n, I(E(e.eth, t))),
                        empty: 0n === e.eth || t > 0n && e.eth < t,
                        withdrawals: C(a > 0n ? a : e.eth, t)
                    }
                }, T = (e, t) => {
                    let a = t > e.eth ? e.eth : t;
                    return {
                        level: I(E(a, e.feePerWithdrawal)),
                        withdrawals: C(a, e.feePerWithdrawal),
                        released: a <= 0n
                    }
                }, z = function (e, t) {
                    let a = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : e.feePerWithdrawal,
                        n = (e.reserve > e.eth ? e.eth : e.reserve) + (t > 0n ? t : 0n);
                    return {
                        level: I(E(n, a)),
                        withdrawals: C(n, a)
                    }
                }, H = (e, t) => {
                    if (void 0 === t || !Number.isFinite(t)) return null;
                    let a = Math.min(1, Math.max(0, t));
                    return .005 > Math.abs(a - e) ? null : {
                        from: Math.min(e, a),
                        to: Math.max(e, a),
                        rising: a > e
                    }
                }, O = (e, t) => e > 0 ? Math.min(1, Math.max(t, e)) : 0, B = (e, t) => t - e >= .05 - 1e-9, Y = e => e <= 0 ? "under 1 withdrawal" : "about ".concat(e, " withdrawal").concat(1 === e ? "" : "s"), R = (e, t) => {
                    let a = e.total <= 0 && e.withdrawals <= 0 ? "No gas for network fees yet" : "Gas for ".concat(Y(e.withdrawals));
                    return t ? "".concat(a, ", ").concat(t.released ? "nothing" : Y(t.withdrawals), " set aside after this") : a
                }, D = function (e, t) {
                    let a = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0n;
                    if (t <= 0n || a > e.available) return 0n;
                    let n = a + t;
                    return n > e.eth ? n - e.eth : 0n
                }, G = (e, t) => {
                    let a = e.available + t;
                    return a < e.eth ? a : e.eth
                }, V = e => e.reserve > e.eth ? e.eth : e.reserve, U = (e, t) => {
                    let a = V(e);
                    return a <= 0n ? "eth" : a >= t ? "gas" : "gasThenEth"
                }, q = (e, t) => e > 0n ? C(e, t) : 0, K = function (e, t) {
                    let a = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0n,
                        n = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 0n,
                        r = e.eth - a - t + n;
                    return r > 0n ? r : 0n
                }, J = function (e, t) {
                    let a = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0n,
                        n = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 0n,
                        r = V(e);
                    return r <= 0n ? K(e, t, a, n) : r > t ? r - t : 0n
                }, $ = (e, t) => {
                    let a = e.reserve > e.eth ? e.eth : e.reserve;
                    if (!(a <= 0n) && !(t <= 0n)) return T(e, a > t ? a - t : 0n)
                }, Z = e => "gas" === e ? "from Gas" : "eth" === e ? "from your ETH" : "from Gas, then your ETH", X = (e, t) => "gasThenEth" === e ? Z(e) : "".concat(Z(e), " \xb7 ").concat(t > 0 ? "~".concat(t) : "under 1", " left after"), Q = e => "gasThenEth" === e ? "from Gas + ETH" : Z(e), ee = (e, t) => {
                    if ("gasThenEth" === e) return "Paid ".concat(Z(e));
                    let a = t > 0 ? "~".concat(t, " swap").concat(1 === t ? "" : "s", " like this") : "under 1 swap like this";
                    return "Paid ".concat(Z(e), " \xb7 ").concat(a, " left after")
                }, et = (e, t) => e < 2 || t && e < 3, ea = (e, t) => "swap" === e ? t > 0 ? "Swapping more? After this, gas for ~".concat(t, " more swap").concat(1 === t ? "" : "s", " like this") : "Swapping more? After this, no gas left for another swap" : t > 0 ? "After this, gas for ~".concat(t, " more withdrawal").concat(1 === t ? "" : "s") : "After this, no gas left for the next withdrawal", en = (e, t) => "swap" === e ? "Add gas for ".concat(g, " swaps \xb7 ").concat(f(t), " ETH") : "Add gas \xb7 ".concat(f(t), " ETH"), er = 10n ** 12n, es = e => e > 0n ? (e + er / 2n) / er : 0n, ei = function (e) {
                    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "ETH",
                        a = es(e.eth),
                        n = es(V(e)),
                        r = n < a ? n : a,
                        s = e => (0, i.ej)(e * er, 18, 6);
                    return ["Balance ".concat(s(a - r), " ").concat(t), "Gas ".concat(s(r))]
                }
        },
        5552: (e, t, a) => {
            "use strict";
            a.d(t, {
                N: () => i
            });
            var n = a(14536),
                r = a(28913),
                s = a(23605);
            r.Ikc({
                isDev: r.zMY(),
                rpcProxy: r.Ikc({
                    url: r.YjP().min(1)
                }),
                nullmask: r.Ikc({
                    address: r.YjP().min(1),
                    chainName: r.YjP().min(1)
                }),
                faucet: r.Ikc({
                    url: r.YjP().min(1).optional()
                }),
                guard: r.Ikc({
                    url: r.YjP().min(1)
                }),
                reown: r.Ikc({
                    projectId: r.YjP().min(1)
                }),
                rpcContract: r.Ikc({
                    rpcUrl: r.YjP().min(1),
                    nullmaskContract: r.Ikc({
                        address: r.YjP().min(1)
                    })
                }),
                uniswap: r.Ikc({
                    chainId: r.YjP().min(1),
                    v2Router: r.YjP().min(1),
                    v2Factory: r.YjP().min(1),
                    mainnetRpcUrl: r.YjP().min(1),
                    wethAddress: r.YjP().min(1)
                }),
                onboarding: r.Ikc({
                    minEth: r.oad().gt(0n),
                    minUsdc: r.oad().gt(0n)
                }),
                swapsEnabled: r.zMY(),
                baseDomain: r.YjP().min(1).optional(),
                networkSwitcher: r.YOg(r.YjP().min(1)).optional(),
                networksSourceUrl: r.YjP().min(1).optional()
            });
            let i = () => {
                var e, t;
                return {
                    isDev: "production" !== String("production").toLowerCase().trim(),
                    faucet: {
                        url: void 0
                    },
                    guard: {
                        url: "https://guard.nullmask.io".trim()
                    },
                    rpcProxy: {
                        url: "https://proxy.nullmask.io".trim()
                    },
                    nullmask: {
                        address: "0xd64EF1417EB047ed0b54736a5a41F01178C391c6".trim(),
                        chainName: "ethereum".trim()
                    },
                    reown: {
                        projectId: "8e38bba9d8e334242355d43b63a071c2".trim()
                    },
                    uniswap: {
                        chainId: "ethereum".trim(),
                        v2Router: "0x7a250d5630B4cF539739dF2C5dAcb4c659F2488D".trim(),
                        v2Factory: "0x5C69bEe701ef814a2B6a3EDD4B1652CB9cc5aA6f".trim(),
                        mainnetRpcUrl: "https://ethereum-rpc.publicnode.com".trim(),
                        wethAddress: "0xC02aaA39b223FE8D0A0e5C4F27eAD9083C756Cc2".trim()
                    },
                    rpcContract: {
                        rpcUrl: "https://ethereum-rpc.publicnode.com".trim(),
                        nullmaskContract: {
                            address: "0xd64EF1417EB047ed0b54736a5a41F01178C391c6".trim()
                        }
                    },
                    onboarding: {
                        minEth: BigInt((null == (e = s.env.NEXT_PUBLIC_FAUCET_MIN_ETH) ? void 0 : e.trim()) || 10n ** 17n),
                        minUsdc: BigInt((null == (t = s.env.NEXT_PUBLIC_FAUCET_MIN_USDC) ? void 0 : t.trim()) || 150n * 10n ** 6n)
                    },
                    swapsEnabled: (0, n.zn)("", "NEXT_PUBLIC_SWAPS_ENABLED"),
                    baseDomain: "nullmask.io".trim() || void 0,
                    networkSwitcher: "ethereum,base".trim() ? "ethereum,base".split(",").map(e => e.trim().toLowerCase()).filter(Boolean) : void 0,
                    networksSourceUrl: "".trim() || void 0
                }
            }
        },
        6678: (e, t, a) => {
            "use strict";
            a.d(t, {
                $$: () => d,
                Go: () => k,
                Lj: () => W,
                Rm: () => C,
                U9: () => y,
                Ub: () => p,
                bZ: () => l,
                kJ: () => j,
                n7: () => A,
                nr: () => w,
                tD: () => x
            });
            var n = a(28913),
                r = a(39461);
            let s = ["amount_not_available", "withdraw_all_only_below_min", "token_not_withdrawable", "recipient_not_allowed", "screening_unavailable", "waves_disabled", "wave_not_available", "parts_same_wave", "too_many_parts", "insufficient_balance", "gas_fields_changed", "intent_expired", "nonce_in_use", "too_late_to_cancel", "pool_recipient", "fee_rate_changed", "amount_mismatch", "try_again_later", "recipient_daily_limit", "check_pending", "network_fee_rose", "too_many_notes", "advanced_price_above_cap", "wrong_chain", "prover_busy"],
                i = /^(\d+)(?:\.(\d+))? (ETH|0x[0-9a-fA-F]{40})$/,
                l = (e, t) => {
                    var a;
                    let n = e ? i.exec(e) : null;
                    if (!n) return;
                    let [, r = "0", s = "", l = ""] = n;
                    if ((t.isNative ? "ETH" === l : "ETH" !== l && l.toLowerCase() === (null != (a = t.address) ? a : "").toLowerCase()) && !(s.length > t.decimals)) return BigInt(r) * 10n ** BigInt(t.decimals) + BigInt(s.padEnd(t.decimals, "0") || "0")
                },
                o = ["funds_not_settled", "withdrawals_paused", "gas_spike", "relayer_balance", "screening_unavailable", "check_pending", "fee_above_reserve", "nonce_conflict", "send_failed", "schedule_changed", "waiting_for_change", "relayer_busy"],
                c = ["recipient_is_depositor", "recipient_reused_in_group", "withdraw_all_non_round"];
            class d extends Error {
                get isMethodMissing() {
                    return -32601 === this.code
                }
                constructor(e, t, a, n) {
                    super(t), this.code = e, this.reason = a, this.detail = n, this.name = "WithdrawalRpcError"
                }
            }
            let u = e => "string" == typeof e && s.includes(e),
                m = n.Ikc({
                    code: n.aig(),
                    message: n.YjP().optional().catch(void 0),
                    data: n.L5J().optional()
                }),
                p = function (e) {
                    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : fetch;
                    return async (a, n) => {
                        let r, s = {
                            method: "POST",
                            credentials: "include",
                            headers: {
                                "Content-Type": "application/json"
                            },
                            body: JSON.stringify({
                                jsonrpc: "2.0",
                                id: 1,
                                method: a,
                                params: n
                            })
                        };
                        "undefined" != typeof AbortSignal && "timeout" in AbortSignal && (s.signal = AbortSignal.timeout(2e4));
                        let i = await t(e, s);
                        try {
                            r = await i.json()
                        } catch (e) {
                            r = void 0
                        }
                        let l = null != r ? r : {};
                        if (void 0 !== l.error) {
                            let e = m.safeParse(l.error),
                                t = e.success ? e.data.code : -32603,
                                a = e.success && e.data.message || "Request failed",
                                n = e.success ? e.data.data : void 0;
                            throw new d(t, a, u(null == n ? void 0 : n.reason) ? n.reason : void 0, "string" == typeof (null == n ? void 0 : n.detail) ? n.detail : void 0)
                        }
                        if (!i.ok) throw new d(-32603, "HTTP ".concat(i.status));
                        if (!("result" in l)) throw new d(-32603, "Malformed response");
                        return l.result
                    }
                },
                g = n.YjP().regex(/^0x[0-9a-fA-F]{1,64}$/),
                h = n.k5n(o).optional().catch(void 0),
                v = n.L5J().optional().transform(e => (0, r.Lf)(e)),
                f = n.Ikc({
                    intentId: g,
                    mode: n.k5n(["fast", "advanced"]),
                    waveAt: n.aig().int().positive().nullable().optional(),
                    movedReason: h,
                    quote: n.Ikc({
                        protocolFee: v,
                        recipientAmount: v,
                        relayerFeeEstimate: v,
                        relayerFeeMax: v
                    }).optional().catch(void 0),
                    gas: n.Ikc({
                        maxFeePerGas: v,
                        maxPriorityFeePerGas: v,
                        gasLimit: v
                    }).nullable().optional(),
                    warnings: n.YOg(n.YjP()).optional().catch(void 0),
                    expiresAt: n.aig().positive()
                }),
                x = async (e, t) => {
                    let a = {
                        from: t.from,
                        to: t.to,
                        token: t.token,
                        amount: t.amount.toString(),
                        mode: t.mode
                    };
                    return void 0 !== t.recipientAmount && (a.recipientAmount = t.recipientAmount.toString()), void 0 !== t.waveAt && (a.waveAt = t.waveAt), t.group && (a.group = t.group), ((e, t) => {
                        var a, n, r, s, i, l;
                        let o = f.safeParse(e);
                        if (!o.success) throw new d(-32603, "Malformed prepare response");
                        let u = o.data;
                        if (u.mode !== t) throw new d(-32603, "Prepared for another mode");
                        let m = u.gas && void 0 !== u.gas.maxFeePerGas && void 0 !== u.gas.maxPriorityFeePerGas && void 0 !== u.gas.gasLimit ? {
                            maxFeePerGas: u.gas.maxFeePerGas,
                            maxPriorityFeePerGas: u.gas.maxPriorityFeePerGas,
                            gasLimit: u.gas.gasLimit
                        } : null;
                        if ("advanced" === u.mode && (null === m || !u.waveAt)) throw new d(-32603, "Advanced prepare without a wave or gas fields");
                        return {
                            intentId: u.intentId,
                            mode: u.mode,
                            waveAt: null != (i = u.waveAt) ? i : null,
                            movedReason: u.movedReason,
                            quote: {
                                protocolFee: null == (a = u.quote) ? void 0 : a.protocolFee,
                                recipientAmount: null == (n = u.quote) ? void 0 : n.recipientAmount,
                                relayerFeeEstimate: null == (r = u.quote) ? void 0 : r.relayerFeeEstimate,
                                relayerFeeMax: null == (s = u.quote) ? void 0 : s.relayerFeeMax
                            },
                            gas: m,
                            warnings: (null != (l = u.warnings) ? l : []).filter(e => c.includes(e)),
                            expiresAt: u.expiresAt < 1e11 ? u.expiresAt : Math.floor(u.expiresAt / 1e3)
                        }
                    })(await e("nullmask_prepareWithdrawal", [a]), t.mode)
                }, b = n.Ikc({
                    id: g,
                    groupId: g.nullable().optional().catch(null),
                    index: n.aig().int().min(0).optional().catch(void 0),
                    count: n.aig().int().min(1).optional().catch(void 0),
                    token: n.YjP().regex(/^0x([0-9a-fA-F]{40}|0)$/),
                    amount: v,
                    recipientAmount: v,
                    recipient: n.YjP().regex(/^0x[0-9a-fA-F]{40}$/),
                    step: n.k5n(["accepted", "waiting", "sending", "delivered"]),
                    state: n.k5n(["open", "delivered", "failed", "cancelled"]),
                    waveAt: n.aig().int().positive(),
                    movedFrom: n.aig().int().positive().optional().catch(void 0),
                    reason: n.k5n(["recipient_not_allowed", "simulation_failed", "reverted", "proof_failed", "expired", "cancelled", "fee_rate_changed", ...o]).optional().catch(void 0),
                    fee: v,
                    txHash: n.YjP().regex(/^0x[0-9a-fA-F]{64}$/).optional().catch(void 0),
                    cancellable: n.zMY().optional().catch(!1)
                }), w = async (e, t) => (e => {
                    if (!Array.isArray(e)) throw new d(-32603, "Malformed withdrawals list");
                    return e.flatMap(e => {
                        var t, a, n;
                        let r = b.safeParse(e);
                        if (!r.success) return [];
                        let s = r.data,
                            i = s.amount;
                        if (void 0 === i) return [];
                        let l = null != (t = s.count) ? t : 1;
                        return [{
                            id: s.id,
                            groupId: null != (a = s.groupId) ? a : null,
                            index: null != (n = s.index) ? n : 0,
                            count: l,
                            token: s.token.toLowerCase(),
                            amount: i,
                            recipientAmount: s.recipientAmount,
                            recipient: s.recipient,
                            step: s.step,
                            state: s.state,
                            waveAt: s.waveAt,
                            movedFrom: s.movedFrom,
                            reason: s.reason,
                            fee: s.fee,
                            txHash: s.txHash,
                            cancellable: "open" === s.state && !0 === s.cancellable
                        }]
                    })
                })(await e("nullmask_getWithdrawals", [{
                    from: t
                }])), y = async (e, t, a) => {
                    let n = await e("nullmask_cancelWithdrawal", [{
                        from: t,
                        id: a
                    }]);
                    if ((null == n ? void 0 : n.state) !== "cancelled") throw new d(-32603, "Cancel was not confirmed")
                }, k = e => e("nullmask_getWithdrawalPolicy", []), C = e => {
                    let t = new Set,
                        a = [],
                        n = (e, r) => {
                            if (!(null == e || r > 8 || t.has(e))) {
                                if ("string" == typeof e) return void a.push(e);
                                if ("object" == typeof e) {
                                    if (t.add(e), e instanceof d && e.reason || u(e.reason)) return e.reason;
                                    for (let t of ["data", "cause", "error", "originalError"]) {
                                        let a = n(e[t], r + 1);
                                        if (a) return a
                                    }
                                    for (let t of ["message", "details", "shortMessage"]) "string" == typeof e[t] && a.push(e[t])
                                }
                            }
                        },
                        r = n(e, 0);
                    if (r) return r;
                    let i = a.join(" ");
                    return s.find(e => new RegExp("\\b".concat(e, "\\b")).test(i))
                }, N = ["data", "cause", "error", "originalError"], j = (e, t) => {
                    let a = new Set,
                        n = (e, r, s) => !(!e || "object" != typeof e || s > 8 || a.has(e)) && (a.add(e), t(e, r) || N.some(t => n(e[t], t, s + 1)));
                    return n(e, void 0, 0)
                }, _ = new Set([-32603, -32602, -32600, -32601, -32010, -32005]), P = /internal json-rpc error|time ?out|timed out|took too long|fetch|network|load failed|gateway|status|econn|socket|connect|closed|reset|lost|abort|expired|too many errors|unavailable|server error|^request failed|json/i, A = e => j(e, (e, t) => {
                    if (-32010 === e.code || -32005 === e.code) return !0;
                    let a = e.data,
                        n = a && "object" == typeof a ? a.reason : void 0;
                    return !!("string" == typeof n && "" !== n && (-32602 === e.code || u(n))) || ("data" === t || "originalError" === t) && _.has(e.code) && "string" == typeof e.message && /\w/.test(e.message) && !P.test(e.message)
                }), W = e => {
                    let t = new Set,
                        a = (e, n) => {
                            if (!e || "object" != typeof e || n > 8 || t.has(e)) return !1;
                            if (t.add(e), 4001 === e.code || "UserRejectedRequestError" === e.name) return !0;
                            let r = "string" == typeof e.message ? e.message.toLowerCase() : "";
                            return !!(r.includes("user rejected") || r.includes("user denied")) || a(e.cause, n + 1) || a(e.error, n + 1)
                        };
                    return a(e, 0)
                }
        },
        11229: (e, t, a) => {
            "use strict";
            a.d(t, {
                VU: () => u,
                bv: () => m,
                rL: () => r,
                tJ: () => l,
                tR: () => c,
                wc: () => d,
                y1: () => o
            });
            var n = a(28913);
            let r = 3e4,
                s = "ethereum",
                i = n._H3({
                    site: n._H3({
                        networks: n.g1P(n.YjP(), n.zMY())
                    }).optional()
                }),
                l = async function (e) {
                    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : fetch,
                        a = {
                            cache: "no-store",
                            credentials: "omit"
                        };
                    "undefined" != typeof AbortSignal && "timeout" in AbortSignal && (a.signal = AbortSignal.timeout(8e3));
                    let n = await t(e, a);
                    if (!n.ok) throw Error("public-config: HTTP ".concat(n.status));
                    return (e => {
                        var t, a;
                        let n = i.safeParse(e);
                        if (!n.success) throw Error("public-config: no readable site.networks");
                        return null != (a = null == (t = n.data.site) ? void 0 : t.networks) ? a : {}
                    })(await n.json())
                }, o = e => {
                    let {
                        sourceUrl: t,
                        guardUrl: a
                    } = e;
                    return t ? {
                        url: t,
                        ownGuard: !1
                    } : {
                        url: "".concat(a.replace(/\/+$/, "")).concat("/v1/public-config"),
                        ownGuard: !0
                    }
                }, c = e => {
                    let {
                        current: t,
                        ownGuard: a
                    } = e;
                    return a || t === s
                }, d = (e, t) => t === s || !0 === e[t], u = e => {
                    let {
                        current: t,
                        state: a,
                        neverLocked: n
                    } = e;
                    return n ? "open" : "loading" === a.status ? "wait" : "failed" === a.status ? "closed" : d(a.networks, t) ? "open" : "closed"
                }, m = e => "ready" === e.status ? e.networks : null
        },
        14220: (e, t, a) => {
            "use strict";
            a.d(t, {
                BE: () => p,
                BV: () => u,
                I6: () => v,
                QP: () => d,
                Uz: () => l,
                _s: () => i,
                cp: () => c,
                gk: () => h,
                tb: () => g,
                uT: () => o,
                zj: () => m
            });
            var n = a(96942),
                r = a(14344),
                s = a(28546);

            function i(e) {
                let {
                    ...t
                } = e;
                return (0, n.jsx)(s._s.Root, {
                    "data-slot": "drawer",
                    ...t
                })
            }

            function l(e) {
                let {
                    ...t
                } = e;
                return (0, n.jsx)(s._s.Trigger, {
                    "data-slot": "drawer-trigger",
                    ...t
                })
            }

            function o(e) {
                let {
                    ...t
                } = e;
                return (0, n.jsx)(s._s.Portal, {
                    "data-slot": "drawer-portal",
                    ...t
                })
            }

            function c(e) {
                let {
                    ...t
                } = e;
                return (0, n.jsx)(s._s.Close, {
                    "data-slot": "drawer-close",
                    ...t
                })
            }

            function d(e) {
                let {
                    className: t,
                    ...a
                } = e;
                return (0, n.jsx)(s._s.Overlay, {
                    "data-slot": "drawer-overlay",
                    className: (0, r.cn)("data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 fixed inset-0 z-50 bg-black/50", t),
                    ...a
                })
            }

            function u(e) {
                let {
                    className: t,
                    children: a,
                    ...i
                } = e;
                return (0, n.jsxs)(s._s.Content, {
                    "data-slot": "drawer-content",
                    className: (0, r.cn)("group/drawer-content bg-background fixed z-50 flex h-auto flex-col", "data-[vaul-drawer-direction=bottom]:rounded-t-[24px] data-[vaul-drawer-direction=bottom]:pb-[env(safe-area-inset-bottom)] data-[vaul-drawer-direction=bottom]:shadow-[0_-12px_40px_-12px_rgba(0,0,0,0.35)]", "data-[vaul-drawer-direction=top]:inset-x-0 data-[vaul-drawer-direction=top]:top-0 data-[vaul-drawer-direction=top]:mb-24 data-[vaul-drawer-direction=top]:max-h-[90svh] data-[vaul-drawer-direction=top]:rounded-b-lg data-[vaul-drawer-direction=top]:border-b", "data-[vaul-drawer-direction=bottom]:inset-x-0 data-[vaul-drawer-direction=bottom]:bottom-0 data-[vaul-drawer-direction=bottom]:mt-24 data-[vaul-drawer-direction=bottom]:max-h-[90svh] data-[vaul-drawer-direction=bottom]:border-t", "data-[vaul-drawer-direction=right]:inset-y-0 data-[vaul-drawer-direction=right]:right-0 data-[vaul-drawer-direction=right]:w-3/4 data-[vaul-drawer-direction=right]:border-l data-[vaul-drawer-direction=right]:sm:max-w-sm", "data-[vaul-drawer-direction=left]:inset-y-0 data-[vaul-drawer-direction=left]:left-0 data-[vaul-drawer-direction=left]:w-3/4 data-[vaul-drawer-direction=left]:border-r data-[vaul-drawer-direction=left]:sm:max-w-sm", t),
                    ...i,
                    children: [(0, n.jsx)("div", {
                        className: "bg-foreground/15 mx-auto mt-2.5 hidden h-[5px] w-9 shrink-0 rounded-full group-data-[vaul-drawer-direction=bottom]/drawer-content:block"
                    }), a]
                })
            }

            function m(e) {
                let {
                    className: t,
                    children: a,
                    ...r
                } = e;
                return (0, n.jsxs)(o, {
                    "data-slot": "drawer-portal",
                    children: [(0, n.jsx)(d, {}), (0, n.jsx)(u, {
                        className: t,
                        ...r,
                        children: a
                    })]
                })
            }

            function p(e) {
                let {
                    className: t,
                    ...a
                } = e;
                return (0, n.jsx)("div", {
                    "data-slot": "drawer-header",
                    className: (0, r.cn)("min-h-14 relative flex items-center gap-0.5 p-4 group-data-[vaul-drawer-direction=bottom]/drawer-content:text-center group-data-[vaul-drawer-direction=top]/drawer-content:text-center md:gap-1.5 md:text-left", t),
                    ...a
                })
            }

            function g(e) {
                let {
                    className: t,
                    ...a
                } = e;
                return (0, n.jsx)("div", {
                    "data-slot": "drawer-footer",
                    className: (0, r.cn)("mt-auto flex flex-col gap-2 p-4", t),
                    ...a
                })
            }

            function h(e) {
                let {
                    className: t,
                    ...a
                } = e;
                return (0, n.jsx)(s._s.Title, {
                    "data-slot": "drawer-title",
                    className: (0, r.cn)("text-foreground absolute top-1/2 left-1/2 max-w-[calc(100vw-6rem)] -translate-x-1/2 -translate-y-1/2 truncate text-base leading-6 font-semibold tracking-tight", t),
                    ...a
                })
            }

            function v(e) {
                let {
                    className: t,
                    ...a
                } = e;
                return (0, n.jsx)(s._s.Description, {
                    "data-slot": "drawer-description",
                    className: (0, r.cn)("text-muted-foreground text-sm", t),
                    ...a
                })
            }
        },
        14344: (e, t, a) => {
            "use strict";
            a.d(t, {
                cn: () => s
            }), a(60904);
            var n = a(93892);
            a(56676);
            var r = a(71492);
            let s = function () {
                for (var e = arguments.length, t = Array(e), a = 0; a < e; a++) t[a] = arguments[a];
                return (0, r.QP)((0, n.$)(t))
            }
        },
        14536: (e, t, a) => {
            "use strict";
            a.d(t, {
                G_: () => I,
                YR: () => M,
                Jo: () => L,
                Je: () => l,
                nb: () => C,
                Nm: () => h,
                rv: () => p,
                pV: () => o,
                be: () => g,
                x7: () => m,
                fs: () => A,
                zn: () => E,
                sG: () => u,
                pi: () => S
            });
            var n = a(69834);
            let r = {
                    KeyDerivation: [{
                        name: "purpose",
                        type: "string"
                    }, {
                        name: "account",
                        type: "address"
                    }, {
                        name: "keyVersion",
                        type: "uint32"
                    }]
                },
                s = /^0x[0-9a-fA-F]{40}$/;
            class i extends Error {
                constructor(e) {
                    super(e), this.name = "InvalidKeyDerivationRequestError"
                }
            }
            let l = e => {
                    let {
                        account: t,
                        chainId: a,
                        keyVersion: n = 1
                    } = e;
                    if ("string" != typeof t || !s.test(t)) throw new i("account must be a 20-byte hex address");
                    if (!Number.isSafeInteger(a) || a <= 0) throw new i("chainId must be a positive integer");
                    if (!Number.isSafeInteger(n) || n < 1 || n > 0xffffffff) throw new i("keyVersion must be an integer in [".concat(1, ", 2^32)"));
                    return {
                        domain: {
                            name: "Nullmask",
                            version: "1",
                            chainId: a
                        },
                        types: r,
                        primaryType: "KeyDerivation",
                        message: {
                            purpose: "Derive view-only keys for your Nullmask account",
                            account: t.toLowerCase(),
                            keyVersion: n
                        }
                    }
                },
                o = e => (0, n.Zh)(e),
                c = e => {
                    if ("number" == typeof e && !Number.isSafeInteger(e)) throw RangeError("fee rate is not a whole number of bps: ".concat(e));
                    let t = BigInt(e);
                    if (t < 0n || t >= 10000n) throw RangeError("fee rate out of range: ".concat(t, " bps"));
                    return t
                },
                d = (e, t) => {
                    if (e < 0n) throw RangeError("".concat(t, " must not be negative: ").concat(e));
                    return e
                },
                u = (e, t) => d(e, "amount") * c(t) / 10000n,
                m = (e, t) => e - u(e, t),
                p = (e, t) => {
                    let a = c(t);
                    return 0n === d(e, "amount") ? 0n : (e - 1n) * 10000n / (10000n - a) + 1n
                },
                g = (e, t) => (c(t), 0n === d(e, "amount")) ? 0n : m(e - 1n, t) + 1n,
                h = e => {
                    let {
                        inPool: t,
                        depositFeeBps: a,
                        pullGasFee: n = 0n,
                        prepayWithdrawalFeeBps: r
                    } = e;
                    d(t, "amount"), d(n, "pull gas fee");
                    let s = void 0 === r ? t : p(t, r),
                        i = p(s + n, a);
                    return {
                        credited: s,
                        withdrawalReserve: s - t,
                        depositFee: u(i, a),
                        pullGasFee: n,
                        send: i
                    }
                };
            var v = a(28913);
            let f = v.YjP().regex(/^0x[0-9a-fA-F]{40}$/, "not an address").transform(e => e.toLowerCase()),
                x = v.YjP().regex(/^[1-9]\d{0,77}$/, "not a positive integer"),
                b = v.YjP().regex(/^(?:0|[1-9]\d{0,77})$/, "not an integer"),
                w = v.Ikc({
                    token: f,
                    decimals: v.Whr().min(0).max(36),
                    amounts: v.YOg(x).min(1).max(20)
                }).refine(e => e.amounts.every((e, t, a) => {
                    var n;
                    return 0 === t || BigInt(e) > BigInt(null != (n = a[t - 1]) ? n : "0")
                }), {
                    message: "amounts must be ascending and unique"
                }),
                y = v.Ikc({
                    intervalMinutes: v.aig().positive().max(1440),
                    offsetMinutes: v.aig().min(0).max(1439),
                    snapshotDelayMinutes: v.aig().positive().max(120),
                    cutoffMinutes: v.aig().positive().max(60)
                });
            v.Ikc({
                version: v.Whr().min(0),
                grids: v.YOg(w).max(200),
                allowCustomAmounts: v.zMY().default(!0),
                waves: y.extend({
                    enabled: v.zMY(),
                    maxParts: v.Whr().min(1).max(10),
                    maxScheduleHours: v.aig().positive().max(72),
                    gasAbsorbPct: v.aig().min(0).max(50),
                    snapshotPriceMargin: v.aig().min(1).max(3).optional()
                }),
                advancedGas: v.Ikc({
                    maxFeePerGas: b,
                    maxPriorityFeePerGas: b,
                    minFeePerGas: b.optional(),
                    baseFeeMultiplier: v.aig().min(1).max(5).optional()
                })
            }).refine(e => e.waves.offsetMinutes < e.waves.intervalMinutes, {
                message: "offsetMinutes must be below intervalMinutes"
            }).refine(e => e.waves.snapshotDelayMinutes + e.waves.cutoffMinutes < e.waves.intervalMinutes, {
                message: "snapshotDelayMinutes + cutoffMinutes must be below intervalMinutes"
            });
            let k = v.k5n(["eip155", "solana"]),
                C = v.Ikc({
                    id: v.YjP(),
                    nativeChainId: v.aig(),
                    name: v.YjP(),
                    imageUrl: v.YjP(),
                    addressRegex: v.YjP(),
                    chainNamespace: k,
                    nativeToken: v.Ikc({
                        name: v.YjP(),
                        symbol: v.YjP(),
                        decimals: v.aig()
                    }),
                    rpcUrls: v.YOg(v.YjP()),
                    blockExplorerUrls: v.YOg(v.YjP()),
                    explorerTxTemplate: v.YjP()
                });
            v.Ikc({
                tokenId: v.YjP(),
                rate: v.YjP(),
                percentChange: v.YjP()
            }), v.Ikc({
                hash: v.YjP(),
                value: v.YjP(),
                decimals: v.aig(),
                symbol: v.YjP(),
                timestamp: v.aig(),
                status: v.k5n(["success", "failed", "pending"]),
                type: v.k5n(["send", "receive"]),
                coinId: v.YjP(),
                blockNumber: v.auy.bigint()
            });
            let N = v.Ikc({
                    price: v.aig(),
                    changePercent24h: v.aig()
                }),
                j = v.Ikc({
                    usd: N
                }),
                _ = v.IeY(e => "string" == typeof e && /^0x[0-9a-fA-F]*$/.test(e)),
                P = v.Ikc({
                    address: _,
                    ticker: v.YjP(),
                    name: v.YjP(),
                    decimals: v.aig(),
                    allowed: v.zMY(),
                    isNative: v.zMY(),
                    image: v.Ikc({
                        thumb: v.YjP().optional(),
                        small: v.YjP().optional(),
                        large: v.YjP().optional()
                    }).optional(),
                    services: v.Ikc({
                        binanceSymbol: v.YjP().optional(),
                        coinDeskId: v.YjP().optional(),
                        coingeckoId: v.YjP().optional()
                    }),
                    prices: j.optional()
                }),
                A = v.Ikc({
                    transaction: v.Ikc({
                        hash: v.YjP(),
                        nullifier: v.YjP().optional(),
                        blockNumber: v.auy.bigint().optional(),
                        timestamp: v.KH5.datetime().optional(),
                        transactionIndex: v.aig().optional()
                    }),
                    eventTypes: v.YOg(v.YjP()),
                    changes: v.YOg(v.Ikc({
                        amount: v.auy.bigint(),
                        token: P
                    })),
                    fee: v.Ikc({
                        amount: v.auy.bigint(),
                        token: P
                    }).optional(),
                    status: v.k5n(["pending", "confirmed", "queued"]),
                    waveAt: v.aig().optional(),
                    groupId: v.YjP().optional(),
                    partIndex: v.aig().optional(),
                    partCount: v.aig().optional()
                }),
                W = v.Ikc({
                    chainId: v.YjP(),
                    address: v.YjP(),
                    decimals: v.aig(),
                    isNative: v.zMY()
                }),
                S = v.Ikc({
                    id: v.YjP(),
                    ticker: v.YjP(),
                    name: v.YjP(),
                    logoUrl: v.YjP().optional(),
                    nullmask: W,
                    otherChains: v.YOg(W),
                    services: v.Ikc({
                        binanceSymbol: v.YjP().optional(),
                        coinDeskId: v.YjP().optional(),
                        coingeckoId: v.YjP().optional()
                    }),
                    prices: j.optional()
                }),
                M = "Swaps are not available on this network yet.",
                E = function (e) {
                    var t;
                    let a = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "SWAPS_ENABLED",
                        n = null != (t = null == e ? void 0 : e.trim()) ? t : "";
                    if ("" === n || "true" === n) return !0;
                    if ("false" === n) return !1;
                    throw Error("".concat(a, ' must be true or false (empty = true), not "').concat(n, '"'))
                },
                I = 1.5,
                L = (e, t) => (e * BigInt(Math.round(100 * t)) + 99n) / 100n
        },
        14831: (e, t, a) => {
            "use strict";
            a.d(t, {
                f: () => u
            });
            var n = a(89070),
                r = a(28015),
                s = a(80756),
                i = a(62166),
                l = a(59950),
                o = a(64829),
                c = a(59842),
                d = a(53499);
            let u = [{
                name: "Home",
                href: "/",
                icon: n.A,
                tab: !0
            }, {
                name: "Shield",
                href: "/shield",
                icon: r.A,
                tab: !0
            }, {
                name: "Send",
                href: "/send",
                icon: s.A,
                tab: !0
            }, {
                name: "Swap",
                href: "/swap",
                icon: i.A,
                tab: !0
            }, {
                name: "Gas",
                href: "/gas",
                icon: l.A,
                tab: !1
            }, {
                name: "Points",
                href: "/points",
                icon: o.A,
                tab: !1
            }, {
                name: "History",
                href: "/history",
                icon: c.A,
                tab: !1
            }, {
                name: "Analytics",
                href: "/analytics",
                icon: d.A,
                tab: !1
            }]
        },
        15382: (e, t, a) => {
            "use strict";
            a.d(t, {
                M: () => o
            });
            var n = a(96942),
                r = a(14344);
            let s = (e, t, a) => {
                    let n = e / 12 * 2 * Math.PI - Math.PI / 2;
                    return {
                        x1: 12 + t * Math.cos(n),
                        y1: 12 + t * Math.sin(n),
                        x2: 12 + a * Math.cos(n),
                        y2: 12 + a * Math.sin(n)
                    }
                },
                i = Array.from({
                    length: 12
                }, (e, t) => s(t, 7, 10.5)),
                l = [0, 1, 2].map(e => ({
                    ...s(12 - e, 6.2, 11),
                    opacity: 1 - .32 * e
                }));

            function o(e) {
                let {
                    className: t,
                    ...a
                } = e;
                return (0, n.jsxs)("svg", {
                    "aria-hidden": !0,
                    className: (0, r.cn)("nm-ring-spinner size-[1.15em]", t),
                    fill: "none",
                    stroke: "currentColor",
                    strokeLinecap: "round",
                    viewBox: "0 0 24 24",
                    ...a,
                    children: [i.map((e, t) => (0, n.jsx)("line", {
                        opacity: .28,
                        strokeWidth: 1.6,
                        ...e
                    }, t)), (0, n.jsx)("g", {
                        className: "nm-ring-spinner-head",
                        children: l.map((e, t) => {
                            let {
                                opacity: a,
                                ...r
                            } = e;
                            return (0, n.jsx)("line", {
                                opacity: a,
                                strokeWidth: 2.1,
                                ...r
                            }, t)
                        })
                    }), (0, n.jsx)("circle", {
                        cx: "12",
                        cy: "12",
                        fill: "currentColor",
                        r: "1.4",
                        stroke: "none"
                    })]
                })
            }
        },
        22183: (e, t, a) => {
            "use strict";
            a.d(t, {
                Jt: () => u,
                Y7: () => p,
                kO: () => m
            });
            var n = a(4670),
                r = a(5552),
                s = a(24240),
                i = a(11229);
            let {
                guard: l,
                networksSourceUrl: o,
                nullmask: c
            } = (0, r.N)(), d = (0, i.y1)({
                sourceUrl: o,
                guardUrl: l.url
            }), u = c.chainName.toLowerCase(), m = (0, i.tR)({
                current: u,
                ownGuard: d.ownGuard
            }), p = () => {
                let {
                    data: e,
                    isError: t
                } = (0, n.I)({
                    queryKey: ["site-networks", d.url],
                    queryFn: async () => {
                        try {
                            return await (0, i.tJ)(d.url)
                        } catch (e) {
                            throw s.v.warn("site_networks_unavailable", {}, e), e
                        }
                    },
                    staleTime: i.rL,
                    refetchInterval: i.rL,
                    retry: !1
                });
                return e ? {
                    status: "ready",
                    networks: e
                } : t ? {
                    status: "failed"
                } : {
                    status: "loading"
                }
            }
        },
        22735: (e, t, a) => {
            "use strict";
            a.d(t, {
                B: () => o
            });
            var n = a(96942),
                r = a(23831),
                s = a(72076),
                i = a(50370);
            let l = e => {
                    let {
                        fallback: t
                    } = e, {
                        gas: a
                    } = (0, s.Z)();
                    return a ? (0, n.jsx)(i.$, {
                        decorative: !0,
                        gas: a,
                        size: "xs"
                    }) : t
                },
                o = e => {
                    let {
                        fallback: t = null
                    } = e;
                    return (0, r.N)() ? (0, n.jsx)(l, {
                        fallback: t
                    }) : t
                }
        },
        23831: (e, t, a) => {
            "use strict";
            a.d(t, {
                N: () => s,
                d: () => r
            });
            var n = a(58622);
            let r = (0, n.createContext)(!0),
                s = () => (0, n.useContext)(r)
        },
        24240: (e, t, a) => {
            "use strict";
            a.d(t, {
                v: () => h
            });
            var n = a(60904);
            class r {
                setCustomProperty(e, t) {
                    this.customUserProperties[e] = t
                }
                resetCustomProperties() {
                    this.customUserProperties = {}
                }
                constructor() {
                    this.customUserProperties = {}
                }
            }
            class s extends r {
                sendEvent(e, t, a) {
                    this.printAndFormatLog(e, t, null, a)
                }
                sendError(e, t, a, n) {
                    this.printAndFormatLog(e, t, a, n)
                }
                printAndFormatLog(e, t, a, n) {
                    let r = "[".concat(e.toUpperCase(), "], ").concat(t),
                        s = this.formatError(a),
                        i = s ? "".concat(r, "\n").concat(s) : r;
                    if (n) {
                        let e = JSON.stringify(n, null, 2),
                            t = "".concat("\n", "Context: ").concat(e);
                        console.log("".concat(i).concat(t));
                        return
                    }
                    console.log(i)
                }
                formatError(e) {
                    if (e) return "string" == typeof e ? e : e instanceof Error ? "".concat(e.name, ": ").concat((0, n.u1)(e.message)) : "Cannot get message from error"
                }
            }
            var i = a(16860);
            let l = ["accesstoken", "apikey", "authorization", "cookie", "decryptionkey", "encryptionkey", "keydata", "mnemonic", "nullifyingkey", "password", "privatekey", "receivingkey", "secret", "signature", "trapdoor", "viewingkey"],
                o = new Set(["dk", "nk", "ovk", "pnk", "sk", "querystring"]),
                c = new Set(["receivingkeyhash"]),
                d = e => {
                    let t = e.toLowerCase().replace(/[^a-z0-9]/g, "");
                    return !c.has(t) && (!!o.has(t) || l.some(e => t.includes(e)))
                },
                u = e => "object" == typeof e && null !== e,
                m = function (e, t) {
                    let a = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0,
                        n = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : new WeakSet;
                    if (n.has(e)) return {};
                    n.add(e);
                    let r = Array.isArray(e) ? [] : {};
                    for (let [s, i] of Object.entries(e)) {
                        if (d(s)) {
                            r[s] = "[redacted]";
                            continue
                        }
                        r[s] = u(i) && a < 12 ? m(i, t, a + 1, n) : t(i)
                    }
                    return r
                };
            class p {
                addExternalLogger(e) {
                    this.externalLoggers.push(e)
                }
                setLoggerOptions(e) {
                    this.options = e
                }
                setCustomProperty(e, t) {
                    this.externalLoggers.forEach(a => a.setCustomProperty(e, t))
                }
                resetCustomProperties() {
                    this.externalLoggers.forEach(e => e.resetCustomProperties())
                }
                debug(e, t, a) {
                    this.log("debug", e, t, a)
                }
                info(e, t, a) {
                    this.log("info", e, t, a)
                }
                warn(e, t, a) {
                    this.log("warn", e, t, a)
                }
                error(e, t, a) {
                    this.log("error", e, t, a)
                }
                log(e, t, a, n) {
                    if (this.checkLevel(e)) {
                        if (n) return void this.sendError(e, t, n, a);
                        this.sendEvent(e, t, a)
                    }
                }
                sendEvent(e, t, a) {
                    let n = this.formatAdditionalInfo(a);
                    this.externalLoggers.forEach(a => a.sendEvent(e, t, n))
                }
                sendError(e, t, a, n) {
                    let r = this.formatAdditionalInfo(n);
                    this.externalLoggers.forEach(n => n.sendError(e, t, a, r))
                }
                checkLevel(e) {
                    let t = {
                        debug: 1,
                        info: 2,
                        warn: 3,
                        error: 4
                    };
                    return t[e] >= t[this.options.logLevel]
                }
                formatAdditionalInfo(e) {
                    let {
                        json: t
                    } = (0, i.lK)({
                        ...e,
                        ...this.appInfo
                    });
                    return m(t, e => {
                        let t = (null == e ? void 0 : e.toString()) || "";
                        return t.length > 100 ? "".concat(t.slice(0, 100), "...") : t
                    })
                }
                constructor(e) {
                    this.appInfo = e.appInfo, this.options = {
                        logLevel: "info",
                        ...e.options
                    }, this.externalLoggers = (null == e ? void 0 : e.externalLoggers) || []
                }
            }
            var g = a(5552);
            let h = new p({
                externalLoggers: [new s],
                appInfo: {
                    env: (0, g.N)().isDev ? "development" : "production",
                    platform: "server"
                },
                options: {
                    logLevel: "info"
                }
            })
        },
        29203: () => {},
        36134: (e, t, a) => {
            "use strict";
            a.d(t, {
                v: () => u,
                R: () => o
            });
            var n = a(96942),
                r = a(14344),
                s = a(5552),
                i = a(98311),
                l = a.n(i);
            let o = e => {
                    let {
                        className: t,
                        ...a
                    } = e;
                    return (0, n.jsx)("span", {
                        "aria-hidden": !0,
                        className: (0, r.cn)("block shrink-0", l().mark, t),
                        ...a
                    })
                },
                c = ["M26.0098 0.303589H5.92726C5.51689 0.303589 5.1845 0.635976 5.1845 1.04635V4.74718C5.1845 5.15756 4.85211 5.48994 4.44173 5.48994H0.742765C0.332387 5.48994 0 5.82233 0 6.23271V28.7998C0 29.2101 0.332387 29.5425 0.742765 29.5425H5.1845C5.59488 29.5425 5.92726 29.2101 5.92726 28.7998V6.97547C5.92726 6.5651 6.25965 6.23271 6.67003 6.23271H22.5671C22.9774 6.23271 23.3098 6.5651 23.3098 6.97547V28.7998C23.3098 29.2101 23.6422 29.5425 24.0526 29.5425H28.4869C28.8973 29.5425 29.2297 29.2101 29.2297 28.7998V3.52347C29.2297 3.32664 29.1517 3.13724 29.0124 2.99797L26.5353 0.520848C26.396 0.381579 26.2066 0.303589 26.0098 0.303589Z", "M35.2355 29.5425H55.318C55.7284 29.5425 56.0608 29.2101 56.0608 28.7998V25.0989C56.0608 24.6886 56.3932 24.3562 56.8035 24.3562H60.5025C60.9129 24.3562 61.2453 24.0238 61.2453 23.6134V1.04635C61.2453 0.635976 60.9129 0.303589 60.5025 0.303589H56.0608C55.6504 0.303589 55.318 0.635976 55.318 1.04635V22.8706C55.318 23.281 54.9856 23.6134 54.5752 23.6134H38.6782C38.2678 23.6134 37.9355 23.281 37.9355 22.8706V1.04635C37.9355 0.635976 37.6031 0.303589 37.1927 0.303589H32.7584C32.348 0.303589 32.0156 0.635976 32.0156 1.04635V26.3226C32.0156 26.5195 32.0936 26.7089 32.2329 26.8482L34.71 29.3253C34.8493 29.4645 35.0387 29.5425 35.2355 29.5425Z", "M69.9604 22.8948V1.04635C69.9604 0.635976 69.628 0.303589 69.2176 0.303589H64.774C64.3636 0.303589 64.0312 0.635976 64.0312 1.04635V23.6375C64.0312 24.0479 64.3636 24.3803 64.774 24.3803H68.4748C68.8852 24.3803 69.2176 24.7127 69.2176 25.1231V28.7998C69.2176 29.2101 69.55 29.5425 69.9604 29.5425H86.2214C86.6317 29.5425 86.9641 29.2101 86.9641 28.7998V24.3803C86.9641 23.9699 86.6317 23.6375 86.2214 23.6375H70.7031C70.2928 23.6375 69.9604 23.3052 69.9604 22.8948Z", "M95.6791 22.8948V1.04635C95.6791 0.635976 95.3467 0.303589 94.9364 0.303589H90.4928C90.0824 0.303589 89.75 0.635976 89.75 1.04635V23.6375C89.75 24.0479 90.0824 24.3803 90.4928 24.3803H94.1936C94.604 24.3803 94.9364 24.7127 94.9364 25.1231V28.7998C94.9364 29.2101 95.2687 29.5425 95.6791 29.5425H111.94C112.35 29.5425 112.683 29.2101 112.683 28.7998V24.3803C112.683 23.9699 112.35 23.6375 111.94 23.6375H96.4219C96.0115 23.6375 95.6791 23.3052 95.6791 22.8948Z", "M141.475 0.303589H121.392C120.982 0.303589 120.649 0.635976 120.649 1.04635V4.74718C120.649 5.15756 120.317 5.48994 119.907 5.48994H116.208C115.797 5.48994 115.465 5.82233 115.465 6.23271V28.7998C115.465 29.2101 115.797 29.5425 116.208 29.5425H120.649C121.06 29.5425 121.392 29.2101 121.392 28.7998V6.97547C121.392 6.5651 121.725 6.23271 122.135 6.23271H126.383C126.794 6.23271 127.126 6.5651 127.126 6.97547V16.1245C127.126 16.5349 127.459 16.8672 127.869 16.8672H132.288C132.699 16.8672 133.031 16.5349 133.031 16.1245V6.97547C133.031 6.5651 133.364 6.23271 133.774 6.23271H138.032C138.442 6.23271 138.775 6.5651 138.775 6.97547V28.7998C138.775 29.2101 139.107 29.5425 139.517 29.5425H143.952C144.362 29.5425 144.695 29.2101 144.695 28.7998V3.52347C144.695 3.32664 144.617 3.13724 144.477 2.99797L142 0.520848C141.861 0.381579 141.671 0.303589 141.475 0.303589Z", "M175.967 5.48994H172.268C171.858 5.48994 171.526 5.15756 171.526 4.74718V1.04635C171.526 0.637833 171.193 0.303589 170.783 0.303589H153.408C152.997 0.303589 152.665 0.637833 152.665 1.04635V4.74718C152.665 5.15756 152.333 5.48994 151.922 5.48994H148.223C147.813 5.48994 147.48 5.82419 147.48 6.23271V28.7998C147.48 29.2101 147.813 29.5425 148.223 29.5425H152.665C152.689 29.5425 152.711 29.5407 152.734 29.5388C153.112 29.5054 153.408 29.1879 153.408 28.7998V17.9183H170.783V28.7998C170.783 29.1879 171.078 29.5054 171.457 29.5388C171.483 29.5407 171.507 29.5425 171.533 29.5425H175.967C176.378 29.5425 176.71 29.2101 176.71 28.7998V6.23271C176.71 5.82419 176.378 5.48994 175.967 5.48994ZM153.408 11.9891V6.97547C153.408 6.64123 153.631 6.35712 153.937 6.26242C153.937 6.26242 153.937 6.26428 153.939 6.26242C153.982 6.24942 154.028 6.24014 154.074 6.23642C154.1 6.23457 154.124 6.23271 154.15 6.23271H170.048C170.07 6.23271 170.094 6.23457 170.116 6.23642C170.163 6.24014 170.209 6.24942 170.252 6.26242C170.254 6.26056 170.254 6.26242 170.254 6.26242C170.56 6.35712 170.783 6.64123 170.783 6.97547V11.9891H153.408Z", "M185.425 6.97362V11.2854C185.425 11.6957 185.758 12.0281 186.168 12.0281H202.808C203.218 12.0281 203.551 12.3605 203.551 12.7709V16.4457C203.551 16.8561 203.883 17.1885 204.293 17.1885H207.985C208.395 17.1885 208.728 17.5209 208.728 17.9313V23.6394C208.728 24.0498 208.395 24.3822 207.985 24.3822H204.293C203.883 24.3822 203.551 24.7146 203.551 25.1249V28.7998C203.551 29.2101 203.218 29.5425 202.808 29.5425H180.239C179.828 29.5425 179.496 29.2101 179.496 28.7998V24.3822C179.496 23.9718 179.828 23.6394 180.239 23.6394H202.065C202.475 23.6394 202.808 23.307 202.808 22.8966V17.61C202.808 17.1996 202.475 16.8672 202.065 16.8672H185.416C185.006 16.8672 184.673 16.5349 184.673 16.1245V12.4497C184.673 12.0393 184.341 11.7069 183.93 11.7069H180.239C179.828 11.7069 179.496 11.3745 179.496 10.9641V6.23085C179.496 5.82048 179.828 5.48809 180.239 5.48809H183.94C184.35 5.48809 184.682 5.1557 184.682 4.74532V1.04635C184.682 0.635976 185.015 0.303589 185.425 0.303589H207.985C208.395 0.303589 208.728 0.635976 208.728 1.04635V5.48809C208.728 5.89847 208.395 6.23085 207.985 6.23085H186.168C185.758 6.23085 185.425 6.56324 185.425 6.97362Z", "M240.808 25.4341C241.098 25.7238 241.098 26.1936 240.808 26.4851L237.722 29.5713L237.664 29.6289C237.375 29.9186 236.903 29.9186 236.613 29.6289L236.558 29.5732L234.823 27.8388L230.655 23.6701L229.091 22.1065L226.127 19.1411L225.117 18.1309C224.978 17.9916 224.789 17.9136 224.592 17.9136H218.184C217.773 17.9136 217.441 18.246 217.441 18.6564V29.0607C217.441 29.4711 217.108 29.8034 216.698 29.8034H212.254C211.844 29.8034 211.512 29.4711 211.512 29.0607V18.285C211.512 17.8746 211.844 17.5422 212.254 17.5422H215.955C216.366 17.5422 216.698 17.2099 216.698 16.7995V13.0987C216.698 12.6883 216.366 12.3559 215.955 12.3559H212.254C211.844 12.3559 211.512 12.0235 211.512 11.6131V0.83561C211.512 0.425233 211.844 0.0928456 212.254 0.0928456H216.698C217.108 0.0928456 217.441 0.425233 217.441 0.83561V11.2399C217.441 11.6503 217.773 11.9827 218.184 11.9827H224.594C224.79 11.9827 224.98 11.9047 225.119 11.7654L226.129 10.7552L229.091 7.79532L236.554 0.332387L236.669 0.217259C236.959 -0.0724196 237.429 -0.0724196 237.718 0.217259L237.833 0.332387L240.743 3.24403L240.858 3.35915C241.148 3.64883 241.148 4.11863 240.858 4.41017L234.823 10.4451L233.284 11.9827L230.846 14.4208C230.556 14.7105 230.556 15.1803 230.846 15.4718L233.284 17.9118L240.806 25.4341H240.808Z"],
                d = e => (0, n.jsx)("svg", {
                    "aria-hidden": !0,
                    fill: "currentColor",
                    viewBox: "0 0 242 30",
                    xmlns: "http://www.w3.org/2000/svg",
                    ...e,
                    children: c.map(e => (0, n.jsx)("path", {
                        d: e
                    }, e))
                }),
                u = e => {
                    let {
                        className: t,
                        alt: a
                    } = e, i = (0, s.N)().nullmask.chainName;
                    return (0, n.jsxs)("div", {
                        className: (0, r.cn)("relative flex w-max items-center gap-2.5 text-[#202221] dark:text-[#d9d9d9]", t),
                        children: [(0, n.jsx)(o, {
                            className: "h-8 md:h-10"
                        }), (0, n.jsx)(d, {
                            className: "hidden h-auto w-[150px] md:block"
                        }), (0, n.jsx)("span", {
                            className: "sr-only",
                            children: a || "Nullmask"
                        }), i && (0, n.jsx)("span", {
                            className: "absolute -right-4 -bottom-1 hidden rounded-sm bg-background/50 px-1 font-bold text-[#122A1E] text-[10px] md:block dark:text-primary",
                            children: i
                        })]
                    })
                }
        },
        39461: (e, t, a) => {
            "use strict";
            a.d(t, {
                Dm: () => _,
                GY: () => P,
                J: () => o,
                Kf: () => W,
                Kp: () => c,
                Lf: () => u,
                ND: () => N,
                Qs: () => M,
                TY: () => I,
                U5: () => S,
                Zl: () => E,
                y9: () => A
            });
            var n = a(14536),
                r = a(1080),
                s = a(28913),
                i = a(759);
            let l = {
                    enabled: !1,
                    intervalMinutes: 60,
                    offsetMinutes: 0,
                    snapshotDelayMinutes: 10,
                    cutoffMinutes: 5,
                    maxParts: 5,
                    maxScheduleHours: 24,
                    gasAbsorbPct: 0,
                    snapshotPriceMargin: n.G_
                },
                o = {
                    USDT: ["10", "20", "50", "100", "200", "500", "1000", "2000", "5000", "10000"],
                    USDC: ["10", "20", "50", "100", "200", "500", "1000", "2000", "5000", "10000"],
                    ETH: ["0.01", "0.02", "0.05", "0.1", "0.2", "0.5", "1", "2", "5", "10"],
                    WETH: ["0.01", "0.02", "0.05", "0.1", "0.2", "0.5", "1", "2", "5", "10"]
                },
                c = e => ({
                    origin: "builtin",
                    source: "default",
                    grids: e.flatMap(e => {
                        let t = o[e.ticker.toUpperCase()];
                        return t ? [{
                            token: (0, i.z9)(e),
                            decimals: e.decimals,
                            amounts: (0, i.cJ)(t.map(t => (0, r.X)(t, e.decimals)))
                        }] : []
                    }),
                    allowCustomAmounts: !0,
                    waves: l,
                    advancedGas: {},
                    offsetMs: 0
                });
            class d extends Error {
                constructor(e) {
                    super(e), this.name = "InvalidPolicyError"
                }
            }
            let u = e => {
                    if ("bigint" == typeof e) return e >= 0n ? e : void 0;
                    if ("number" == typeof e) return Number.isSafeInteger(e) && e >= 0 ? BigInt(e) : void 0;
                    if ("string" != typeof e) return;
                    let t = e.trim();
                    if (/^0x[0-9a-fA-F]{1,64}$/.test(t) || /^\d{1,78}$/.test(t)) return BigInt(t)
                },
                m = s.L5J().optional().transform(e => u(e)),
                p = s.YjP().regex(/^0x([0-9a-fA-F]{40}|0)$/),
                g = s.Ikc({
                    token: p,
                    decimals: s.aig().int().min(0).max(36),
                    amounts: s.YOg(s.KCZ([s.YjP(), s.aig()])).min(1).max(50)
                }),
                h = e => Array.isArray(e) ? e.flatMap(e => {
                    let t = g.safeParse(e);
                    if (!t.success) return [];
                    let a = t.data.amounts.map(e => ((e, t) => {
                        if ("string" == typeof e && /^\d+\.\d+$/.test(e.trim())) try {
                            return (0, r.X)(e.trim(), t)
                        } catch (e) {
                            return
                        }
                        return u(e)
                    })(e, t.data.decimals));
                    if (a.some(e => void 0 === e)) return [];
                    let n = (0, i.cJ)(a);
                    return 0 === n.length ? [] : [{
                        token: (0, i.z9)({
                            isNative: !1,
                            address: t.data.token
                        }),
                        decimals: t.data.decimals,
                        amounts: n
                    }]
                }) : [],
                v = (e, t) => s.aig().finite().min(e).max(t),
                f = s.Ikc({
                    enabled: s.zMY(),
                    intervalMinutes: v(1, 1440),
                    offsetMinutes: v(0, 1439),
                    snapshotDelayMinutes: v(0, 1440),
                    cutoffMinutes: v(0, 1440),
                    maxParts: s.aig().int().min(1).max(20).optional(),
                    maxScheduleHours: s.aig().positive().max(168).optional(),
                    gasAbsorbPct: s.aig().min(0).max(1e3).optional(),
                    snapshotPriceMargin: s.aig().min(1).max(3).optional()
                }),
                x = e => {
                    var t, a, n, r;
                    let s = f.safeParse(e);
                    if (!s.success) return l;
                    let i = s.data,
                        o = i.snapshotDelayMinutes + i.cutoffMinutes < i.intervalMinutes;
                    return {
                        enabled: i.enabled && o,
                        intervalMinutes: i.intervalMinutes,
                        offsetMinutes: i.offsetMinutes,
                        snapshotDelayMinutes: i.snapshotDelayMinutes,
                        cutoffMinutes: i.cutoffMinutes,
                        maxParts: null != (t = i.maxParts) ? t : l.maxParts,
                        maxScheduleHours: null != (a = i.maxScheduleHours) ? a : l.maxScheduleHours,
                        gasAbsorbPct: null != (n = i.gasAbsorbPct) ? n : l.gasAbsorbPct,
                        snapshotPriceMargin: null != (r = i.snapshotPriceMargin) ? r : l.snapshotPriceMargin
                    }
                },
                b = s.Ikc({
                    maxFeePerGas: m,
                    maxPriorityFeePerGas: m,
                    gasLimit: m,
                    reservePerPart: m,
                    baseFeePerGas: m,
                    priceAboveCap: s.zMY().optional().catch(void 0)
                }).optional().catch(void 0),
                w = s.aig().positive().optional().catch(void 0),
                y = s.zMY().optional().catch(void 0),
                k = (e, t) => void 0 === e ? 0 : Math.round((e < 1e11 ? 1e3 * e : e) - t),
                C = s.Ikc({
                    grids: s.L5J(),
                    allowCustomAmounts: y,
                    waves: s.L5J(),
                    advancedGas: b,
                    serverTime: w,
                    source: s.k5n(["live", "cache", "default"]).optional().catch(void 0)
                }),
                N = (e, t) => {
                    var a, n, r, s, i, l, o, c, u;
                    let m = C.safeParse(e);
                    if (!m.success) throw new d("The fake node returned a malformed withdrawal policy");
                    let p = m.data;
                    return {
                        origin: "fake-node",
                        source: null != (o = p.source) ? o : "live",
                        grids: h(p.grids),
                        allowCustomAmounts: null == (c = p.allowCustomAmounts) || c,
                        waves: x(p.waves),
                        advancedGas: {
                            maxFeePerGas: null == (a = p.advancedGas) ? void 0 : a.maxFeePerGas,
                            maxPriorityFeePerGas: null == (n = p.advancedGas) ? void 0 : n.maxPriorityFeePerGas,
                            gasLimit: null == (r = p.advancedGas) ? void 0 : r.gasLimit,
                            reservePerPart: null == (s = p.advancedGas) ? void 0 : s.reservePerPart,
                            baseFeePerGas: null == (i = p.advancedGas) ? void 0 : i.baseFeePerGas,
                            priceAboveCap: null != (u = null == (l = p.advancedGas) ? void 0 : l.priceAboveCap) && u
                        },
                        offsetMs: k(p.serverTime, t)
                    }
                },
                j = s.Ikc({
                    serverTime: w,
                    withdrawals: s.Ikc({
                        grids: s.L5J(),
                        allowCustomAmounts: y,
                        waves: s.L5J(),
                        advancedGas: b
                    })
                }),
                _ = (e, t) => {
                    var a, n, r;
                    let s = j.safeParse(e);
                    if (!s.success) return;
                    let i = s.data;
                    return {
                        origin: "guard",
                        source: "live",
                        grids: h(i.withdrawals.grids),
                        allowCustomAmounts: null == (r = i.withdrawals.allowCustomAmounts) || r,
                        waves: x(i.withdrawals.waves),
                        advancedGas: {
                            maxFeePerGas: null == (a = i.withdrawals.advancedGas) ? void 0 : a.maxFeePerGas,
                            maxPriorityFeePerGas: null == (n = i.withdrawals.advancedGas) ? void 0 : n.maxPriorityFeePerGas
                        },
                        offsetMs: k(i.serverTime, t)
                    }
                },
                P = (e, t) => {
                    let a = (0, i.z9)(t);
                    return e.grids.find(e => e.token === a)
                },
                A = e => "fake-node" === e.origin && e.waves.enabled && !e.advancedGas.priceAboveCap,
                W = e => "fake-node" === e.origin && e.waves.enabled && !!e.advancedGas.priceAboveCap,
                S = (e, t) => t ? "fast" === e ? "fast" : "advanced" : "fast",
                M = (e, t) => "fast" === e || "advanced" === e ? e : t ? "advanced" : "fast",
                E = e => {
                    let {
                        gasLimit: t,
                        maxFeePerGas: a,
                        reservePerPart: n
                    } = e.advancedGas;
                    return void 0 !== n ? n : void 0 !== t && void 0 !== a ? t * a : void 0
                },
                I = (e, t) => {
                    let {
                        gasLimit: a,
                        maxFeePerGas: r
                    } = e.advancedGas;
                    if (void 0 === a || void 0 === t) return;
                    let s = a * (e => {
                            if (e <= 99n) return e;
                            let t = 1n;
                            for (; e / t >= 100n;) t *= 10n;
                            return (e + t - 1n) / t * t
                        })((0, n.Jo)(t, e.waves.snapshotPriceMargin)),
                        i = void 0 !== r ? a * r : void 0;
                    return void 0 !== i && s > i ? i : s
                }
        },
        46028: (e, t, a) => {
            "use strict";
            a.d(t, {
                zB: () => r,
                Br: () => w,
                ej: () => h,
                Mc: () => v,
                MZ: () => g,
                u1: () => y,
                Lc: () => L,
                lQ: () => E,
                ay: () => x,
                yy: () => I,
                tB: () => N,
                q9: () => b,
                FX: () => p,
                Cb: () => M
            });
            var n = a(59419);
            n.g.config({
                DECIMAL_PLACES: 50,
                EXPONENTIAL_AT: 50,
                FORMAT: {
                    prefix: "",
                    decimalSeparator: ".",
                    groupSeparator: "",
                    groupSize: 3,
                    secondaryGroupSize: 0,
                    fractionGroupSeparator: "",
                    fractionGroupSize: 0,
                    suffix: ""
                }
            });
            let r = n.g;
            var s = a(11199),
                i = a.n(s),
                l = a(44412),
                o = a.n(l),
                c = a(84965),
                d = a.n(c),
                u = a(97490),
                m = a.n(u);
            i().extend(o()), i().extend(d()), i().extend(m());
            let p = (e, t) => new r(e).multipliedBy("1e".concat(t)),
                g = (e, t) => new r(e).multipliedBy("1e-".concat(t)),
                h = (e, t, a) => {
                    try {
                        if (t || 0 === t) {
                            let n = r(e).toFixed(t);
                            return r(n).plus(0).toFormat(a ? t : void 0)
                        }
                        return r(e).toFormat(t)
                    } catch (e) {
                        return "0"
                    }
                },
                v = (e, t, a) => {
                    try {
                        let i = r(e);
                        if (i.lt(1) && !t) {
                            var n, s;
                            let e = i.toPrecision(2, r.ROUND_HALF_UP),
                                [t, a] = e.split(".");
                            (null == a ? void 0 : a.endsWith("00")) && a.length > 3 && (e = "".concat(t, ".").concat(a.slice(0, -2)));
                            let [l, o] = e.split(".");
                            (null == o ? void 0 : o.endsWith("0")) && o.length > 2 && (e = "".concat(l, ".").concat(o.slice(0, -1)));
                            let c = (null == (s = e.split(".")) || null == (n = s[1]) ? void 0 : n.length) || 2;
                            return h(e, c, !0)
                        }
                        return h(e, t || 2, "boolean" != typeof a || a)
                    } catch (e) {
                        return "0"
                    }
                },
                f = /\d+(?:\.\d*)?/gi,
                x = e => {
                    if (!e) return "";
                    if ("number" == typeof e) return String(e);
                    if ("string" != typeof e && "number" != typeof e) return "";
                    let t = String(e).split(" ").join(""),
                        a = t.indexOf(",") > -1,
                        n = t.indexOf(".");
                    if (a && n > -1) t = t.replace(/,/g, "");
                    else if (a) {
                        let e = t.split(",").length - 1;
                        t = t.replace(/,/g, e > 1 ? "" : ".")
                    }
                    0 === (n = t.indexOf(".")) && (t = "0".concat(t));
                    let r = t.match(f),
                        s = null == r ? void 0 : r[0];
                    return (null == s ? void 0 : s.endsWith(".")) ? s : Number.isNaN(Number(s)) || !s ? "" : s
                },
                b = e => {
                    let t = e.startsWith("0x") ? e.slice(2) : e;
                    if (t.length > 64) throw Error("value ".concat(e, " exceeds 32 bytes"));
                    return "0x".concat(t.padStart(64, "0"))
                },
                w = e => {
                    let t = e.map(e => {
                        if ("number" == typeof e || "bigint" == typeof e) {
                            let t = Number(e);
                            if (!Number.isInteger(t) || t < 0 || t > 255) throw Error("Invalid byte value: ".concat(e));
                            return t.toString(16).padStart(2, "0")
                        }
                        let t = Number.parseInt(e.startsWith("0x") ? e.slice(2) : e, 16);
                        if (Number.isNaN(t) || t < 0 || t > 255) throw Error("Invalid byte value: ".concat(e));
                        return t.toString(16).padStart(2, "0")
                    }).join("");
                    return "0x".concat(t)
                },
                y = (e, t) => "string" == typeof e ? e : e instanceof Error || (e => !!e && !!e.message)(e) ? e.message : t || "Error occurred",
                k = /[a-z][a-z0-9+.-]*:\/\/\S+/gi,
                C = /^\s*(?:URL|Request body|Request Arguments|Raw Call Arguments|Details|Version|Docs|Status|Headers)\s*:/i,
                N = e => e.split("\n").filter(e => !C.test(e)).join(" ").replace(k, "[redacted]").replace(/\s+/g, " ").trim(),
                j = {
                    cancelled: "You cancelled in your wallet",
                    feeChanged: "The network fee changed, please try again",
                    slow: "The network is slow, please try again",
                    generic: "Something went wrong, please try again"
                },
                _ = /user (?:rejected|denied|cancel+ed|disapproved)|cancel+ed by (?:the )?user/i,
                P = /network_fee_rose|insufficient relay fee|relay fee too low|fee (?:rose|went up|changed)|max fee per gas less than block base fee|(?:replacement )?transaction underpriced|fee too low/i,
                A = /timed? ?out|timeout|took too long|deadline exceeded|too many requests|rate limit/i,
                W = new Set(["TimeoutError", "WaitForTransactionReceiptTimeoutError"]),
                S = new Set([408, 429, 504]),
                M = function (e) {
                    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : j.generic;
                    switch ((e => {
                        let {
                            codes: t,
                            names: a,
                            statuses: n,
                            reasons: r,
                            texts: s
                        } = (e => {
                            let t = {
                                    codes: [],
                                    names: [],
                                    statuses: [],
                                    reasons: [],
                                    texts: []
                                },
                                a = new Set,
                                n = (e, r) => {
                                    if (!(r > 8 || null == e || a.has(e))) {
                                        let s;
                                        if ("string" == typeof e) return void t.texts.push(e);
                                        if ("object" == typeof (s = e) && null !== s) {
                                            for (let n of (a.add(e), "code" in e && t.codes.push(e.code), "string" == typeof e.name && t.names.push(e.name), "number" == typeof e.status && t.statuses.push(e.status), "string" == typeof e.reason && t.reasons.push(e.reason), ["message", "shortMessage", "details"])) "string" == typeof e[n] && t.texts.push(e[n]);
                                            for (let t of ["cause", "error", "data", "originalError"]) n(e[t], r + 1)
                                        }
                                    }
                                };
                            return n(e, 0), t
                        })(e), i = e => s.some(t => e.test(t));
                        return t.includes(4001) || a.includes("UserRejectedRequestError") || i(_) ? "cancelled" : r.includes("network_fee_rose") || i(P) ? "fee_changed" : a.some(e => W.has(e)) || n.some(e => S.has(e)) || i(A) ? "slow" : "unknown"
                    })(e)) {
                        case "cancelled":
                            return j.cancelled;
                        case "fee_changed":
                            return j.feeChanged;
                        case "slow":
                            return j.slow;
                        case "unknown":
                            return t
                    }
                },
                E = () => {},
                I = e => new Promise(t => {
                    setTimeout(t, e)
                }),
                L = function (e) {
                    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 5,
                        a = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 5;
                    return "".concat(e.slice(0, t), "...").concat(e.slice(-a))
                }
        },
        47931: (e, t, a) => {
            "use strict";
            a.d(t, {
                $: () => c
            });
            var n = a(96942),
                r = a(15382),
                s = a(14344),
                i = a(26854),
                l = a(71614);
            let o = (0, i.F)("nm-btn relative inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-xl text-sm font-medium tracking-[-0.01em] disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4 shrink-0 [&_svg]:shrink-0 outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive", {
                variants: {
                    variant: {
                        default: "nm-btn-primary font-semibold disabled:opacity-100",
                        destructive: "nm-btn-solid bg-destructive text-white hover:bg-destructive/90 focus-visible:ring-destructive/20 dark:focus-visible:ring-destructive/40 dark:bg-destructive/60",
                        outline: "nm-btn-outline border border-[var(--nm-hairline-2)] hover:border-[color-mix(in_srgb,var(--nm-focus)_55%,transparent)] hover:text-accent-foreground active:border-[color-mix(in_srgb,var(--nm-focus)_45%,transparent)]",
                        secondary: "nm-btn-solid bg-secondary text-secondary-foreground hover:bg-secondary/80",
                        ghost: "hover:bg-accent hover:text-accent-foreground dark:hover:bg-accent/50",
                        link: "text-primary underline-offset-4 hover:underline"
                    },
                    size: {
                        default: "h-9 px-4 py-2 has-[>svg]:px-3",
                        sm: "h-8 gap-1.5 px-3 has-[>svg]:px-2.5",
                        lg: "h-10 px-6 has-[>svg]:px-4",
                        cta: "h-cta px-6 text-[15px] font-semibold has-[>svg]:px-5 [&_svg:not([class*='size-'])]:size-[18px]",
                        icon: "size-9",
                        "icon-sm": "size-8",
                        "icon-lg": "size-10"
                    }
                },
                defaultVariants: {
                    variant: "default",
                    size: "default"
                }
            });

            function c(e) {
                let {
                    className: t,
                    variant: a,
                    size: i,
                    asChild: c = !1,
                    loading: d = !1,
                    children: u,
                    ...m
                } = e, p = c ? l.DX : "button";
                return (0, n.jsx)(p, {
                    "aria-busy": d || void 0,
                    "data-loading": d ? "" : void 0,
                    "data-slot": "button",
                    className: (0, s.cn)(o({
                        variant: a,
                        size: i,
                        className: t
                    })),
                    ...m,
                    children: d && !c ? (0, n.jsxs)(n.Fragment, {
                        children: [(0, n.jsx)(r.M, {}), u]
                    }) : u
                })
            }
        },
        50370: (e, t, a) => {
            "use strict";
            a.d(t, {
                $: () => u
            });
            var n = a(96942),
                r = a(14344),
                s = a(58622),
                i = a(1883),
                l = a(56239),
                o = a.n(l);
            a(29203);
            let c = {
                    xs: {
                        width: 6,
                        height: 14,
                        radius: 3,
                        head: 0,
                        floor: .2,
                        wave: 0,
                        bubbles: [],
                        sparks: []
                    },
                    sm: {
                        width: 14,
                        height: 34,
                        radius: 7,
                        head: 3,
                        floor: .08,
                        wave: 3,
                        bubbles: [
                            [30, 1.6, 0, 1],
                            [62, 1.2, .18, -1],
                            [46, 1.4, .4, .5]
                        ],
                        sparks: [
                            [22, .04, -5, 13],
                            [52, 0, 1, 17],
                            [80, .1, 6, 12]
                        ]
                    },
                    md: {
                        width: 22,
                        height: 58,
                        radius: 11,
                        head: 4,
                        floor: .06,
                        wave: 4,
                        bubbles: [
                            [28, 2, 0, 1.5],
                            [60, 1.4, .16, -1],
                            [44, 1.7, .36, 1],
                            [70, 1.2, .52, -1]
                        ],
                        sparks: [
                            [18, .04, -7, 15],
                            [50, 0, 1, 20],
                            [82, .1, 7, 14]
                        ]
                    },
                    lg: {
                        width: 36,
                        height: 96,
                        radius: 15,
                        head: 8,
                        floor: .04,
                        wave: 5,
                        bubbles: [
                            [26, 2.6, 0, 2],
                            [58, 1.6, .14, -1.5],
                            [40, 2, .32, 1],
                            [72, 1.4, .5, -1],
                            [34, 1.2, .68, 1.5]
                        ],
                        sparks: [
                            [16, .06, -10, 20],
                            [40, 0, -3, 28],
                            [62, .12, 4, 24],
                            [84, .04, 10, 18]
                        ]
                    }
                },
                d = "M0 4 Q25 1 50 4 T100 4 T150 4 T200 4 V12 H0 Z",
                u = e => {
                    let {
                        gas: t,
                        levels: a,
                        size: l = "sm",
                        preview: u,
                        scale: m,
                        decorative: p = !1,
                        inActionBar: g = !1,
                        still: h = !1,
                        primed: v = !1,
                        surge: f = 0,
                        className: x
                    } = e, b = c[l], w = null != a ? a : t ? (0, i.Ye)(t) : i.KB, y = (0, i.VX)(w.solid, b.floor), k = Math.max(y, (0, i.VX)(w.total, b.floor)), [C, N] = (0, s.useState)("xs" === l);
                    (0, s.useEffect)(() => {
                        let e = 0,
                            t = requestAnimationFrame(() => {
                                e = requestAnimationFrame(() => N(!0))
                            });
                        return () => {
                            cancelAnimationFrame(t), cancelAnimationFrame(e)
                        }
                    }, []);
                    let [j, _] = (0, s.useState)(0), P = (0, s.useRef)(null);
                    (0, s.useEffect)(() => {
                        let e = P.current;
                        P.current = w.solid, null !== e && (0, i.N9)(e, w.solid) && _(e => e + 1)
                    }, [w.solid]);
                    let [A, W] = (0, s.useState)(!1);
                    (0, s.useEffect)(() => {
                        if (f <= 0) return;
                        W(!0);
                        let e = setTimeout(() => W(!1), 1400);
                        return () => clearTimeout(e)
                    }, [f]);
                    let S = b.height - 2,
                        M = S - b.head,
                        E = e => e > 0 ? S - M * e : S + b.wave + 1,
                        I = C ? y : 0,
                        L = (0, i.x5)(y, u ? (0, i.VX)(u.level, b.floor) : void 0),
                        F = Math.min(i.DK, w.withdrawals),
                        T = (0, i.EC)(w, u),
                        z = p ? {
                            "aria-hidden": !0
                        } : {
                            "aria-label": "Gas",
                            "aria-valuemax": i.DK,
                            "aria-valuemin": 0,
                            "aria-valuenow": F,
                            "aria-valuetext": T,
                            role: "meter"
                        };
                    return (0, n.jsxs)("span", {
                        ...z,
                        className: (0, r.cn)(o().root, "nm-gas-gauge relative inline-flex shrink-0 align-middle", x),
                        "data-bar": g || void 0,
                        "data-empty": w.empty || void 0,
                        "data-lit": y > 0 || void 0,
                        "data-primed": v || void 0,
                        "data-size": l,
                        "data-still": h || void 0,
                        "data-surge": A || void 0,
                        style: {
                            width: b.width,
                            height: b.height
                        },
                        title: T,
                        children: ["xs" !== l && (0, n.jsx)("span", {
                            "aria-hidden": !0,
                            className: o().halo
                        }), A && (0, n.jsxs)("span", {
                            "aria-hidden": !0,
                            className: o().surge,
                            children: [(0, n.jsx)("span", {
                                className: o().flash
                            }), (0, n.jsx)("span", {
                                className: o().sparks,
                                children: b.sparks.map(e => {
                                    let [t, a, r, s] = e;
                                    return (0, n.jsx)("span", {
                                        className: o().spark,
                                        style: {
                                            left: "".concat(t, "%"),
                                            animationDelay: "".concat(a, "s"),
                                            "--dx": "".concat(r, "px"),
                                            "--climb": "".concat(s, "px")
                                        }
                                    }, "".concat(t, "-").concat(a))
                                })
                            })]
                        }, f), (0, n.jsxs)("span", {
                            className: o().glass,
                            style: {
                                borderRadius: b.radius
                            },
                            children: [(0, n.jsx)("span", {
                                className: o().eth,
                                style: {
                                    transform: "translateY(".concat(E(C ? k : 0), "px)")
                                }
                            }), (0, n.jsx)("span", {
                                className: o().liquid,
                                style: {
                                    transform: "translateY(".concat(E(I), "px)")
                                },
                                children: b.wave > 0 && (0, n.jsxs)(n.Fragment, {
                                    children: [(0, n.jsx)("svg", {
                                        "aria-hidden": !0,
                                        className: (0, r.cn)(o().wave, o().waveBack),
                                        preserveAspectRatio: "none",
                                        style: {
                                            height: b.wave + 1
                                        },
                                        viewBox: "0 0 200 12",
                                        children: (0, n.jsx)("path", {
                                            d: d
                                        })
                                    }), (0, n.jsxs)("svg", {
                                        "aria-hidden": !0,
                                        className: o().wave,
                                        preserveAspectRatio: "none",
                                        style: {
                                            height: b.wave
                                        },
                                        viewBox: "0 0 200 12",
                                        children: [(0, n.jsx)("path", {
                                            d: d
                                        }), (0, n.jsx)("path", {
                                            className: o().crest,
                                            d: "M0 4 Q25 1 50 4 T100 4 T150 4 T200 4",
                                            vectorEffect: "non-scaling-stroke"
                                        })]
                                    })]
                                })
                            }), j > 0 && y > 0 && (0, n.jsx)("span", {
                                "aria-hidden": !0,
                                className: o().bubbles,
                                style: {
                                    height: M * y
                                },
                                children: b.bubbles.map(e => {
                                    let [t, a, r, s] = e;
                                    return (0, n.jsx)("span", {
                                        className: o().bubble,
                                        style: {
                                            left: "".concat(t, "%"),
                                            width: a,
                                            height: a,
                                            animationDelay: "".concat(r, "s"),
                                            "--rise": "".concat(Math.max(4, M * y - 2), "px"),
                                            "--dx": "".concat(s, "px")
                                        }
                                    }, "".concat(t, "-").concat(r))
                                })
                            }, j), L && (0, n.jsx)("span", {
                                "aria-hidden": !0,
                                className: o().ghost,
                                "data-rising": L.rising || void 0,
                                style: {
                                    bottom: M * L.from,
                                    height: Math.max(1, M * L.to - M * L.from)
                                }
                            }), "xs" !== l && i.l$.map(e => (0, n.jsx)("span", {
                                "aria-hidden": !0,
                                className: o().tick,
                                style: {
                                    bottom: M * (0, i.Au)(e)
                                }
                            }, e)), "xs" !== l && (0, n.jsx)("span", {
                                "aria-hidden": !0,
                                className: o().shine
                            }), "xs" !== l && (0, n.jsx)("span", {
                                "aria-hidden": !0,
                                className: o().sweep
                            })]
                        }), (null != m ? m : "lg" === l) && (0, n.jsx)("span", {
                            "aria-hidden": !0,
                            className: o().scale,
                            children: i.l$.map(e => (0, n.jsx)("span", {
                                style: {
                                    bottom: 1 + M * (0, i.Au)(e)
                                },
                                children: e
                            }, e))
                        })]
                    })
                }
        },
        55435: (e, t, a) => {
            "use strict";
            a.d(t, {
                A: () => n,
                K: () => r
            });
            let n = (e, t) => e && !1 !== t,
                r = (e, t) => t ? e : e.filter(e => "/swap" !== e.href)
        },
        56239: e => {
            e.exports = {
                root: "gas-gauge_root__upB2d",
                glass: "gas-gauge_glass__yaPUd",
                "g-empty": "gas-gauge_g-empty__CGaF9",
                shine: "gas-gauge_shine__sgMUK",
                eth: "gas-gauge_eth__4DPxe",
                liquid: "gas-gauge_liquid__JAWMZ",
                wave: "gas-gauge_wave__ON_V1",
                "g-wave": "gas-gauge_g-wave__JCxVV",
                waveBack: "gas-gauge_waveBack__1zcB1",
                "g-wave-back": "gas-gauge_g-wave-back___S6ZR",
                crest: "gas-gauge_crest__TRReg",
                tick: "gas-gauge_tick__LAzlo",
                ghost: "gas-gauge_ghost__sMB8z",
                "g-ghost": "gas-gauge_g-ghost__RyNr_",
                "g-preview-in": "gas-gauge_g-preview-in__6QM_w",
                bubbles: "gas-gauge_bubbles__sW6ZX",
                bubble: "gas-gauge_bubble__nKRTa",
                "g-bubble": "gas-gauge_g-bubble__5Y9u2",
                scale: "gas-gauge_scale__gEsAP",
                halo: "gas-gauge_halo__vZ_nN",
                sweep: "gas-gauge_sweep__HRaz4",
                "g-sweep": "gas-gauge_g-sweep__PtcJe",
                "g-gulp": "gas-gauge_g-gulp__n8J49",
                surge: "gas-gauge_surge__9rtIV",
                flash: "gas-gauge_flash__p6CpS",
                "g-flash": "gas-gauge_g-flash__0D9WX",
                sparks: "gas-gauge_sparks__Nq0ok",
                spark: "gas-gauge_spark__Fur8I",
                "g-spark": "gas-gauge_g-spark__fnJkI"
            }
        },
        56978: (e, t, a) => {
            "use strict";
            a.d(t, {
                F: () => r
            });
            var n = a(96942);
            let r = e => (0, n.jsx)("svg", {
                fill: "none",
                height: "14",
                viewBox: "0 0 14 14",
                width: "14",
                xmlns: "http://www.w3.org/2000/svg",
                ...e,
                children: (0, n.jsx)("path", {
                    d: "M8.33327 5.92873L13.5459 0H12.3111L7.78307 5.14678L4.1692 0H0L5.46607 7.78358L0 14H1.2348L6.01347 8.56366L9.8308 14H14M1.68047 0.911107H3.57747L12.3102 13.1337H10.4127",
                    fill: "currentColor"
                })
            })
        },
        58151: (e, t, a) => {
            "use strict";
            a.d(t, {
                Cf: () => m,
                Es: () => g,
                L3: () => h,
                LC: () => d,
                QY: () => u,
                ZJ: () => o,
                c7: () => p,
                lG: () => l,
                rr: () => v
            });
            var n = a(96942),
                r = a(14344),
                s = a(23063),
                i = a(51254);

            function l(e) {
                let {
                    ...t
                } = e;
                return (0, n.jsx)(i.Root, {
                    "data-slot": "dialog",
                    ...t
                })
            }

            function o(e) {
                let {
                    ...t
                } = e;
                return (0, n.jsx)(i.Portal, {
                    "data-slot": "dialog-portal",
                    ...t
                })
            }

            function c(e) {
                let {
                    ...t
                } = e;
                return (0, n.jsx)(i.Close, {
                    "data-slot": "dialog-close",
                    ...t
                })
            }

            function d(e) {
                let {
                    className: t,
                    ...a
                } = e;
                return (0, n.jsx)(i.Overlay, {
                    "data-slot": "dialog-overlay",
                    className: (0, r.cn)("data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 fixed inset-0 z-50 bg-black/50", t),
                    ...a
                })
            }

            function u(e) {
                let {
                    className: t,
                    children: a,
                    ...s
                } = e;
                return (0, n.jsx)(i.Content, {
                    "data-slot": "dialog-content",
                    className: (0, r.cn)("data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 fixed top-[50%] left-[50%] z-50 grid w-full max-w-[calc(100%-2rem)] translate-x-[-50%] translate-y-[-50%] gap-4 rounded-lg border bg-background p-6 shadow-lg duration-200 data-[state=closed]:animate-out data-[state=open]:animate-in sm:max-w-lg", t),
                    ...s,
                    children: a
                })
            }

            function m(e) {
                let {
                    children: t,
                    ...a
                } = e;
                return (0, n.jsxs)(o, {
                    "data-slot": "dialog-portal",
                    children: [(0, n.jsx)(d, {}), (0, n.jsx)(u, {
                        ...a,
                        children: t
                    })]
                })
            }

            function p(e) {
                let {
                    className: t,
                    children: a,
                    showCloseButton: i = !0,
                    ...l
                } = e;
                return (0, n.jsxs)("div", {
                    "data-slot": "dialog-header",
                    className: (0, r.cn)("relative flex items-center justify-between py-2 gap-2 text-center sm:text-left", t),
                    ...l,
                    children: [a, i && (0, n.jsxs)(c, {
                        className: "ml-auto ring-offset-background focus:ring-ring data-[state=open]:bg-accent data-[state=open]:text-muted-foreground rounded-xs opacity-70 transition-opacity hover:opacity-100 focus:ring-2 focus:ring-offset-2 focus:outline-hidden disabled:pointer-events-none [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4",
                        children: [(0, n.jsx)(s.A, {}), (0, n.jsx)("span", {
                            className: "sr-only",
                            children: "Close"
                        })]
                    })]
                })
            }

            function g(e) {
                let {
                    className: t,
                    ...a
                } = e;
                return (0, n.jsx)("div", {
                    "data-slot": "dialog-footer",
                    className: (0, r.cn)("flex flex-col-reverse gap-2 sm:flex-row sm:justify-end", t),
                    ...a
                })
            }

            function h(e) {
                let {
                    className: t,
                    ...a
                } = e;
                return (0, n.jsx)(i.Title, {
                    "data-slot": "dialog-title",
                    className: (0, r.cn)("text-lg leading-none font-semibold", t),
                    ...a
                })
            }

            function v(e) {
                let {
                    className: t,
                    ...a
                } = e;
                return (0, n.jsx)(i.Description, {
                    "data-slot": "dialog-description",
                    className: (0, r.cn)("text-muted-foreground text-sm", t),
                    ...a
                })
            }
        },
        59233: (e, t, a) => {
            "use strict";
            a.d(t, {
                lc: () => u,
                aZ: () => e5,
                JS: () => e6,
                z8: () => W,
                F7: () => z,
                $L: () => Y,
                FX: () => R,
                c5: () => e9,
                cG: () => e1
            });
            var n, r = {};
            a.r(r), a.d(r, {
                bn: () => eH,
                de: () => eO,
                en: () => eB,
                es: () => eY,
                fr: () => eR,
                id: () => eD,
                it: () => eG,
                ja: () => eV,
                ko: () => eU,
                pt: () => eq,
                th: () => eK,
                tr: () => eJ,
                uk: () => e$,
                vi: () => eZ,
                zh: () => eX
            });
            var s = a(96942),
                i = a(14344),
                l = a(29557);

            function o(e) {
                let {
                    className: t,
                    ...a
                } = e;
                return (0, s.jsx)(l.Root, {
                    "data-slot": "avatar",
                    className: (0, i.cn)("relative flex size-8 shrink-0 overflow-hidden rounded-full", t),
                    ...a
                })
            }

            function c(e) {
                let {
                    className: t,
                    ...a
                } = e;
                return (0, s.jsx)(l.Image, {
                    "data-slot": "avatar-image",
                    className: (0, i.cn)("aspect-square size-full", t),
                    ...a
                })
            }

            function d(e) {
                let {
                    className: t,
                    ...a
                } = e;
                return (0, s.jsx)(l.Fallback, {
                    "data-slot": "avatar-fallback",
                    className: (0, i.cn)("bg-muted flex size-full items-center justify-center rounded-full", t),
                    ...a
                })
            }
            let u = e => {
                let {
                    imageSrc: t,
                    walletTitle: a,
                    className: n,
                    ...r
                } = e;
                return (0, s.jsxs)(o, {
                    className: (0, i.cn)("size-10 rounded-xs", n),
                    ...r,
                    children: [(0, s.jsx)(c, {
                        src: t
                    }), (0, s.jsx)(d, {
                        children: a[0]
                    })]
                })
            };
            var m = a(57649),
                p = a(39419),
                g = a(43583),
                h = a(76242),
                v = a(72781),
                f = a(48668);
            let x = (e, t, a) => (e.id = t, e.displayName = a, e),
                b = e => x((0, f.$)(e), "baseAccount", "Base Account");
            var w = a(45989);
            let y = e => x((0, w.m)(e), "coinbaseWalletSDK", "Coinbase Wallet");
            var k = a(76241);
            let C = e => x((0, k.e)(e), "metaMaskSDK", "MetaMask");
            var N = a(58594);
            let j = e => x((0, N.X)(e), "xyz.ithaca.porto", "Porto");
            var _ = a(21917);
            let P = e => x((0, _.u)({
                    showQrModal: !0,
                    qrModalOptions: {
                        themeVariables: {
                            "--wcm-z-index": "3000"
                        }
                    },
                    ...e
                }), "walletConnect", "WalletConnect"),
                A = e => {
                    var t, a, n, r, s, i, l, o, c, d, u, m, p, g, h, v, f, x, b, w, y, k;
                    let C = window,
                        N = /Mobi|Android/i.test(window.navigator.userAgent);
                    switch (e) {
                        case "metaMask":
                            return N || (null == C || null == (t = C.ethereum) ? void 0 : t.isMetaMask) || (null == C || null == (n = C.ethereum) || null == (a = n.providers) ? void 0 : a.some(e => null == e ? void 0 : e.isMetaMask));
                        case "coinbase":
                            return (null == C || null == (r = C.ethereum) ? void 0 : r.isCoinbaseWallet) && !(null == C || null == (s = C.ethereum) ? void 0 : s.isCoinbaseBrowser) || (null == C || null == (i = C.coinbaseWalletExtension) ? void 0 : i.isCoinbaseWallet) || (null == C || null == (o = C.ethereum) || null == (l = o.providers) ? void 0 : l.some(e => null == e ? void 0 : e.isCoinbaseWallet));
                        case "app.phantom.bitcoin":
                            return null == (d = C.phantom) || null == (c = d.bitcoin) ? void 0 : c.isPhantom;
                        case "com.okex.wallet.bitcoin":
                            return null == (m = C.okxwallet) || null == (u = m.bitcoin) ? void 0 : u.isOkxWallet;
                        case "XverseProviders.BitcoinProvider":
                            return null == (p = C.XverseProviders) ? void 0 : p.BitcoinProvider;
                        case "unisat":
                            return C.unisat && !(null == (g = C.unisat) ? void 0 : g.isBinance) && !(null == (h = C.unisat) ? void 0 : h.isBitKeep);
                        case "io.xdefi":
                            return C.xfi;
                        case "so.onekey.app.wallet.bitcoin":
                            return null == (v = C.$onekey) ? void 0 : v.btc;
                        case "LeatherProvider":
                            return C.LeatherProvider;
                        case "bitget":
                            return (null == (f = C.bitkeep) ? void 0 : f.unisat) || (null == (x = C.unisat) ? void 0 : x.isBitKeep);
                        case "OylProvider":
                            return C.oyl;
                        case "binance":
                            return (null == (b = C.binancew3w) ? void 0 : b.bitcoin) || (null == (w = C.unisat) ? void 0 : w.isBinance);
                        case "app.magiceden.bitcoin":
                            return null == C || null == (k = C.magicEden) || null == (y = k.bitcoin) ? void 0 : y.isMagicEden;
                        default:
                            return !0
                    }
                };

            function W(e) {
                var t, a, n, r, s, i, l, o, c, d;
                let u = [...null != (c = null == e ? void 0 : e.connectors) ? c : []],
                    f = window,
                    x = null == f ? void 0 : f.localStorage,
                    w = f && f.parent !== f,
                    k = !w && (null == (d = null == e || null == (t = e.wagmiConfig) ? void 0 : t.multiInjectedProviderDiscovery) || d),
                    N = (0, h.Z)({
                        chains: (null == e || null == (a = e.chains) ? void 0 : a.length) ? e.chains : [g.r],
                        client(t) {
                            var a, n;
                            let {
                                chain: r
                            } = t;
                            return (0, m.U)({
                                chain: r,
                                transport: null != (n = null == e || null == (a = e.transports) ? void 0 : a[r.id]) ? n : (0, p.L)()
                            })
                        },
                        ...null == e ? void 0 : e.wagmiConfig,
                        multiInjectedProviderDiscovery: k
                    });
                w && u.unshift((0, v.g)());
                let _ = null == x ? void 0 : x.getItem("".concat(null == (n = N.storage) ? void 0 : n.key, ".recentConnectorId"));
                return (null == e ? void 0 : e.walletConnect) && ((null == _ || null == (r = _.includes) ? void 0 : r.call(_, "walletConnect")) || !e.lazy) && u.unshift(P(e.walletConnect)), (null == e ? void 0 : e.coinbase) && !A("coinbase") && ((null == _ || null == (s = _.includes) ? void 0 : s.call(_, "coinbaseWalletSDK")) || !e.lazy) && u.unshift(y(e.coinbase)), (null == e ? void 0 : e.metaMask) && !A("metaMask") && ((null == _ || null == (i = _.includes) ? void 0 : i.call(_, "metaMaskSDK")) || !e.lazy) && u.unshift(C(e.metaMask)), (null == e ? void 0 : e.baseAccount) && ((null == _ || null == (l = _.includes) ? void 0 : l.call(_, "baseAccount")) || !e.lazy) && u.unshift(b(e.baseAccount)), ((null == _ || null == (o = _.includes) ? void 0 : o.call(_, "porto")) || !(null == e ? void 0 : e.lazy)) && u.unshift(j(null == e ? void 0 : e.porto)), {
                    config: N,
                    connectors: u
                }
            }
            var S = a(4669),
                M = a(58622),
                E = a(85851),
                I = a(63594),
                L = function (e) {
                    return e[e.ETH = 1] = "ETH", e[e.POL = 137] = "POL", e[e.BSC = 56] = "BSC", e[e.DAI = 100] = "DAI", e[e.FTM = 250] = "FTM", e[e.AVA = 43114] = "AVA", e[e.ARB = 42161] = "ARB", e[e.OPT = 10] = "OPT", e[e.ONE = 16666e5] = "ONE", e[e.FSN = 32659] = "FSN", e[e.MOR = 1285] = "MOR", e[e.CEL = 42220] = "CEL", e[e.FUS = 122] = "FUS", e[e.TLO = 40] = "TLO", e[e.CRO = 25] = "CRO", e[e.BOB = 288] = "BOB", e[e.RSK = 30] = "RSK", e[e.VEL = 106] = "VEL", e[e.MOO = 1284] = "MOO", e[e.MAM = 1088] = "MAM", e[e.AUR = 0x4e454152] = "AUR", e[e.EVM = 9001] = "EVM", e[e.ARN = 42170] = "ARN", e[e.ERA = 324] = "ERA", e[e.PZE = 1101] = "PZE", e[e.LNA = 59144] = "LNA", e[e.BAS = 8453] = "BAS", e[e.SCL = 534352] = "SCL", e[e.MOD = 34443] = "MOD", e[e.MNT = 5e3] = "MNT", e[e.BLS = 81457] = "BLS", e[e.SEI = 1329] = "SEI", e[e.FRA = 252] = "FRA", e[e.TAI = 167e3] = "TAI", e[e.GRA = 1625] = "GRA", e[e.IMX = 13371] = "IMX", e[e.KAI = 8217] = "KAI", e[e.XLY = 196] = "XLY", e[e.OPB = 204] = "OPB", e[e.WCC = 480] = "WCC", e[e.LSK = 1135] = "LSK", e[e.ABS = 2741] = "ABS", e[e.BER = 80094] = "BER", e[e.SON = 146] = "SON", e[e.UNI = 130] = "UNI", e[e.APE = 33139] = "APE", e[e.SOE = 1868] = "SOE", e[e.INK = 57073] = "INK", e[e.LNS = 232] = "LNS", e[e.SWL = 1923] = "SWL", e[e.CRN = 21e6] = "CRN", e[e.ETL = 42793] = "ETL", e[e.SUP = 55244] = "SUP", e[e.HYP = 999] = "HYP", e[e.XDC = 50] = "XDC", e[e.VIC = 88] = "VIC", e[e.FLR = 14] = "FLR", e[e.KAT = 747474] = "KAT", e[e.VAN = 1480] = "VAN", e[e.RON = 2020] = "RON", e[e.PLU = 98866] = "PLU", e[e.NIB = 6900] = "NIB", e[e.SOP = 50104] = "SOP", e[e.PLA = 9745] = "PLA", e[e.SOL = 0x536f6c4d] = "SOL", e
                }({});
            let F = e => {
                    switch (e) {
                        case "MetaMask":
                        case "metamask":
                        case "metaMaskSDK":
                        case "io.metamask":
                            return "metamask";
                        case "Phantom":
                        case "phantom":
                            return "phantom";
                        case "Rainbow":
                        case "rainbow":
                            return "rainbow";
                        case "baseAccount":
                        case "base-account":
                            return "base-account";
                        case "safe":
                            return "safe";
                        case "walletConnect":
                        case "WalletConnect":
                        case "wallet-connect":
                            return "wallet-connect";
                        case "coinbaseWalletSDK":
                        case "coinbase":
                            return "coinbase";
                        case "xyz.ithaca.porto":
                        case "porto":
                            return "porto";
                        case "io.rabby":
                            return "rabby";
                        default:
                            return "other"
                    }
                },
                T = (0, I.v)(e => ({
                    lastConnectedAccount: null,
                    setLastConnectedAccount: t => e({
                        lastConnectedAccount: t
                    })
                })),
                z = e => {
                    var t, a;
                    let n = (0, E.F)(),
                        {
                            wallet: r
                        } = (0, S.v)(),
                        {
                            lastConnectedAccount: s
                        } = T();
                    return (0, M.useMemo)(() => {
                        var t, a;
                        let i = (null == r ? void 0 : r.adapter.publicKey) ? {
                                address: null == r ? void 0 : r.adapter.publicKey.toString(),
                                chainId: L.SOL,
                                chainNamespace: "solana",
                                walletType: F(null == r || null == (t = r.adapter) ? void 0 : t.name),
                                connector: null == r ? void 0 : r.adapter,
                                isConnected: !!(null == r ? void 0 : r.adapter.publicKey),
                                isConnecting: !1,
                                isReconnecting: !1,
                                isDisconnected: !r,
                                status: "connected"
                            } : void 0,
                            l = {
                                ...n,
                                walletType: F(null == n || null == (a = n.connector) ? void 0 : a.id),
                                chainNamespace: "eip155"
                            },
                            o = [];
                        return [l, i].forEach(e => {
                            (null == e ? void 0 : e.isConnected) && (null == e ? void 0 : e.address) && o.push(e)
                        }), {
                            account: (null == e ? void 0 : e.chainNamespace) ? o.find(t => t.chainNamespace === (null == e ? void 0 : e.chainNamespace)) : void 0,
                            selectedAccount: s ? o.find(e => {
                                var t, a;
                                let n = (null == s ? void 0 : s.id) === (null == (t = e.connector) ? void 0 : t.id),
                                    r = !(null == s ? void 0 : s.id) && (null == s ? void 0 : s.name) === (null == (a = e.connector) ? void 0 : a.name);
                                return n || r
                            }) : void 0,
                            accounts: o
                        }
                    }, [null == r ? void 0 : r.adapter.publicKey, null == (t = n.connector) ? void 0 : t.uid, null == (a = n.connector) ? void 0 : a.id, n.status, n.address, n.chainId, null == e ? void 0 : e.chainNamespace, s])
                };
            var H = a(7862),
                O = a(33832),
                B = a(4157);
            let Y = () => {
                    let e = (0, H.U)(),
                        {
                            disconnect: t
                        } = (0, S.v)(),
                        a = async e => {
                            let t = (0, O.s)(e);
                            t.connector && await (0, B.Z)(e, {
                                connector: t.connector
                            })
                        };
                    return async n => {
                        switch (n.chainNamespace) {
                            case "eip155":
                                await a(e);
                                break;
                            case "solana":
                                await t()
                        }
                    }
                },
                R = () => {
                    let {
                        account: e
                    } = z({
                        chainNamespace: "eip155"
                    }), {
                        account: t
                    } = z({
                        chainNamespace: "solana"
                    }), {
                        status: a
                    } = (0, E.F)(), n = !!(null == e ? void 0 : e.isConnecting) || "reconnecting" === a || "connecting" === a;
                    return {
                        isLoading: n,
                        isInitialized: !n,
                        isConnected: !!(null == e ? void 0 : e.address),
                        evmWallet: e,
                        solanaWallet: t
                    }
                },
                D = (0, a(790).A)();
            var G = a(60491),
                V = a(60904),
                U = a(87652),
                q = a(94502),
                K = a(11119),
                J = a(22614);
            let $ = e => {
                    switch (e) {
                        case "eip155":
                            return "https://il-token-uploads.s3.us-east-1.amazonaws.com/wallet-management/chains/ethereum.svg";
                        case "solana":
                            return "https://il-token-uploads.s3.us-east-1.amazonaws.com/wallet-management/chains/solana.svg";
                        default:
                            return ""
                    }
                },
                Z = "https://il-token-uploads.s3.us-east-1.amazonaws.com/wallet-management/wallets/caishen.svg",
                X = {
                    appName: "Nullmask",
                    appLogoUrl: Z
                },
                Q = {
                    appName: "Nullmask",
                    appLogoUrl: Z
                },
                ee = {
                    dappMetadata: {
                        name: "Nullmask",
                        url: null == (n = window) ? void 0 : n.location.href,
                        iconUrl: Z
                    }
                },
                et = {
                    projectId: "8e38bba9d8e334242355d43b63a071c2".trim() || "7b1572b3ab4684db67cc704ad90b6970"
                },
                ea = {},
                en = (0, M.createContext)(ea),
                er = () => (0, M.useContext)(en),
                es = e => {
                    let t = null == e ? void 0 : e.id;
                    return t ? ((e, t) => {
                        switch (F(e)) {
                            case "wallet-connect":
                                return "https://il-token-uploads.s3.us-east-1.amazonaws.com/wallet-management/wallets/wallet-connect.svg";
                            case "coinbase":
                                return "https://il-token-uploads.s3.us-east-1.amazonaws.com/wallet-management/wallets/coinbase.svg";
                            case "safe":
                                return "https://il-token-uploads.s3.us-east-1.amazonaws.com/wallet-management/wallets/safe.svg";
                            case "metamask":
                                return "https://il-token-uploads.s3.us-east-1.amazonaws.com/wallet-management/wallets/metamask.svg";
                            case "base-account":
                                return "https://il-token-uploads.s3.us-east-1.amazonaws.com/wallet-management/wallets/base-account.svg";
                            case "porto":
                                return "https://il-token-uploads.s3.us-east-1.amazonaws.com/wallet-management/wallets/porto.svg";
                            case "rainbow":
                                return "https://il-token-uploads.s3.us-east-1.amazonaws.com/wallet-management/wallets/rainbow.svg";
                            case "phantom":
                                return "https://il-token-uploads.s3.us-east-1.amazonaws.com/wallet-management/wallets/phantom.svg";
                            default:
                                return t || "https://il-token-uploads.s3.us-east-1.amazonaws.com/wallet-management/wallets/other.svg"
                        }
                    })(t, null == e ? void 0 : e.icon) : null == e ? void 0 : e.icon
                },
                ei = {
                    MetaMask: 1,
                    metaMaskSDK: 1,
                    "io.metamask": 1,
                    "io.metamask.mobile": 1,
                    coinbaseWalletSDK: 2,
                    "com.coinbase.wallet": 2,
                    walletConnect: 3,
                    safe: 4
                },
                el = e => ei[e] || 1e3,
                eo = e => e.split(" ")[0].toLowerCase().trim(),
                ec = (e, t, a) => {
                    let n = new Map;
                    e.forEach(e => {
                        let t = (null == e ? void 0 : e.displayName) || (null == e ? void 0 : e.name),
                            a = eo(t),
                            r = n.get(a) || {
                                id: e.id,
                                name: t,
                                icon: es(e),
                                connectors: []
                            };
                        r.connectors.push({
                            connector: e,
                            chainNamespace: "eip155"
                        }), n.set(a, r)
                    }), t.forEach(e => {
                        let t = eo(e.adapter.name),
                            a = n.get(t) || {
                                id: e.adapter.name,
                                name: e.adapter.name,
                                icon: e.adapter.icon,
                                connectors: []
                            };
                        a.connectors.push({
                            connector: e.adapter,
                            chainNamespace: "solana"
                        }), n.set(t, a)
                    });
                    let r = Array.from(n.values());
                    return a && (r = r.map(e => {
                        let t = a[e.name];
                        return t ? {
                            ...e,
                            connectors: e.connectors.sort((e, a) => eu(e, a, t))
                        } : e
                    })), r.sort(ed), r
                },
                ed = (e, t) => {
                    var a;
                    let n = el(e.id),
                        r = el(t.id);
                    return n !== r ? n - r : null == (a = e.id) ? void 0 : a.localeCompare(t.id)
                },
                eu = (e, t, a) => {
                    if (!a.length) return 0;
                    let n = e.chainNamespace,
                        r = t.chainNamespace;
                    if (n === r) return 0;
                    let s = a.indexOf(n),
                        i = a.indexOf(r);
                    return -1 !== s && -1 !== i ? s - i : -1 !== s ? -1 : +(-1 !== i)
                };
            var em = function (e) {
                return e.WalletModalContent = "widget-wallet-modal-content", e.WalletConnectElement = "w3m-modal", e
            }({});
            let ep = (e, t) => e ? "id" in e && e.id ? e.id : "".concat(e.name, "-").concat(t) : "";
            var eg = function (e) {
                return e.Connected = "connected", e.Multichain = "multichain", e.Installed = "installed", e.QrCode = "qr-code", e.GetStarted = "get-started", e
            }({});
            let eh = {
                    [eg.Connected]: 0,
                    [eg.Multichain]: 1,
                    [eg.Installed]: 2,
                    [eg.QrCode]: 3,
                    [eg.GetStarted]: 4
                },
                ev = e => e.sort((e, t) => void 0 === e.tagType ? 1 : void 0 === t.tagType ? -1 : eh[e.tagType] - eh[t.tagType]),
                ef = (e, t) => t ? eg.Connected : "walletConnect" === e ? eg.QrCode : "metaMaskSDK" === e || "coinbaseWalletSDK" === e || "baseAccount" === e || "xyz.ithaca.porto" === e ? eg.GetStarted : eg.Installed;
            var ex = a(98489),
                eb = a(26854),
                ew = a(71614);
            let ey = (0, eb.F)("inline-flex items-center justify-center rounded-md border px-2 py-0.5 text-xs font-medium w-fit whitespace-nowrap shrink-0 [&>svg]:size-3 gap-1 [&>svg]:pointer-events-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive transition-[color,box-shadow] overflow-hidden", {
                variants: {
                    variant: {
                        default: "border-transparent bg-primary text-primary-foreground [a&]:hover:bg-primary/90",
                        secondary: "border-transparent bg-secondary text-secondary-foreground [a&]:hover:bg-secondary/90",
                        destructive: "border-transparent bg-destructive text-white [a&]:hover:bg-destructive/90 focus-visible:ring-destructive/20 dark:focus-visible:ring-destructive/40 dark:bg-destructive/60",
                        outline: "text-foreground [a&]:hover:bg-accent [a&]:hover:text-accent-foreground",
                        success: "bg-success text-white shadow-xs hover:bg-success/30 border border-success/25"
                    }
                },
                defaultVariants: {
                    variant: "default"
                }
            });

            function ek(e) {
                let {
                    className: t,
                    variant: a,
                    asChild: n = !1,
                    ...r
                } = e, l = n ? ew.DX : "span";
                return (0, s.jsx)(l, {
                    "data-slot": "badge",
                    className: (0, i.cn)(ey({
                        variant: a
                    }), t),
                    ...r
                })
            }
            let eC = e => {
                    let {
                        type: t,
                        label: a,
                        className: n
                    } = e, r = {
                        [eg.Connected]: "default",
                        [eg.Multichain]: "outline",
                        [eg.Installed]: "default",
                        [eg.QrCode]: "secondary",
                        [eg.GetStarted]: "outline"
                    };
                    return (0, s.jsx)(ek, {
                        className: n,
                        variant: r[t] || "secondary",
                        children: a
                    })
                },
                eN = e => {
                    let {
                        onClick: t,
                        title: a,
                        icon: n,
                        tagType: r
                    } = e, {
                        t: i
                    } = (0, U.Bd)();
                    return (0, s.jsxs)(ex.Zp, {
                        className: "flex w-full cursor-pointer flex-row items-center gap-4 overflow-hidden rounded-lg px-3 py-4",
                        onClick: t,
                        children: [(0, s.jsx)(u, {
                            imageSrc: n,
                            walletTitle: a
                        }), (0, s.jsx)("span", {
                            className: "flex-1 font-medium text-sm",
                            children: a
                        }), r && (0, s.jsx)(eC, {
                            label: (e => {
                                switch (e) {
                                    case eg.Connected:
                                        return i("tags.connected");
                                    case eg.Multichain:
                                        return i("tags.multichain");
                                    case eg.Installed:
                                        return i("tags.installed");
                                    case eg.QrCode:
                                        return i("tags.qrCode");
                                    case eg.GetStarted:
                                        return i("tags.getStarted");
                                    default:
                                        return ""
                                }
                            })(r),
                            type: r
                        })]
                    })
                };
            var ej = a(19883),
                e_ = a(17599),
                eP = a(57764),
                eA = function (e) {
                    return e.WalletConnected = "walletConnected", e
                }({});
            let eW = e => {
                    var t;
                    let {
                        ecosystemSelection: a,
                        connector: n,
                        tagType: r,
                        onNotInstalled: i,
                        onConnected: l,
                        onConnecting: o,
                        onError: c
                    } = e, d = (0, H.U)(), {
                        setLastConnectedAccount: u
                    } = T(), m = n.displayName || n.name, p = a ? "Ethereum" : m, g = async () => {
                        if (r === eg.Connected) {
                            null == l || l();
                            return
                        }
                        try {
                            var e, t, a;
                            let r;
                            if (!A(n.id)) {
                                null == i || i(n);
                                return
                            }
                            "walletConnect" === n.id && (() => {
                                if (!document.querySelector("w3m-modal")) {
                                    let e = document.createElement("w3m-modal");
                                    document.body.append(e)
                                }
                            })();
                            let s = (0, O.s)(d);
                            if (null == o || o(), (null == (e = s.connector) ? void 0 : e.id) === n.id) r = {
                                accounts: s.addresses || (s.address ? [s.address] : []),
                                chainId: s.chainId
                            };
                            else try {
                                r = await (0, e_.N)(d, {
                                    connector: n
                                })
                            } catch (e) {
                                if (e instanceof ej.nM) {
                                    let e = (await (0, eP.M)(d, {
                                        connectors: [n]
                                    }))[0];
                                    r = {
                                        accounts: null != (t = null == e ? void 0 : e.accounts) ? t : [],
                                        chainId: null != (a = null == e ? void 0 : e.chainId) ? a : 0
                                    }
                                } else throw e
                            }
                            s.connector && s.connector.id !== n.id && await (0, B.Z)(d, {
                                connector: s.connector
                            }), u(n), D.emit(eA.WalletConnected, {
                                address: r.accounts[0],
                                chainId: r.chainId,
                                chainNamespace: "eip155",
                                connectorId: n.id,
                                connectorName: m
                            }), null == l || l()
                        } catch (e) {
                            if (/Mobi|Android/i.test(window.navigator.userAgent) && "metaMask" === n.id) {
                                window.location.href = "https://metamask.app.link/dapp/".concat(window.location.host).concat(window.location.pathname);
                                return
                            }
                            null == c || c(e)
                        }
                    };
                    return (0, s.jsx)(eN, {
                        icon: a ? $("eip155") : null != (t = es(n)) ? t : "",
                        onClick: g,
                        tagType: a && r !== eg.Connected ? void 0 : r,
                        title: p
                    }, n.id)
                },
                eS = e => {
                    let {
                        ecosystemSelection: t,
                        walletAdapter: a,
                        tagType: n,
                        onConnected: r,
                        onConnecting: i,
                        onError: l
                    } = e, {
                        select: o,
                        disconnect: c,
                        connected: d
                    } = (0, S.v)(), {
                        setLastConnectedAccount: u
                    } = T(), m = a.name, p = t ? "Solana" : a.name, g = async () => {
                        if (n === eg.Connected) {
                            null == r || r();
                            return
                        }
                        try {
                            null == i || i(), d && await c(), o(a.name), a.once("connect", e => {
                                u(a), D.emit(eA.WalletConnected, {
                                    address: null == e ? void 0 : e.toString(),
                                    chainId: L.SOL,
                                    chainNamespace: "solana",
                                    connectorId: m,
                                    connectorName: m
                                })
                            }), null == r || r()
                        } catch (e) {
                            null == l || l(e)
                        }
                    };
                    return (0, s.jsx)(eN, {
                        icon: t ? $("solana") : a.icon,
                        onClick: g,
                        tagType: t && n !== eg.Connected ? void 0 : n,
                        title: p
                    }, p)
                },
                eM = e => {
                    let {
                        selectedWallet: t,
                        title: a,
                        message: n,
                        className: r
                    } = e;
                    return (0, s.jsxs)("div", {
                        className: (0, i.cn)("flex flex-col items-center justify-center px-1", r),
                        children: [t && (0, s.jsx)("div", {
                            className: "h-24 w-24",
                            children: t.icon ? (0, s.jsx)("img", {
                                alt: t.name,
                                className: "h-full w-full object-cover",
                                src: t.icon
                            }) : (0, s.jsx)("span", {
                                className: "font-medium text-2xl",
                                children: t.name[0]
                            })
                        }), a && (0, s.jsx)("h3", {
                            className: "mt-4 text-center font-bold text-base leading-6",
                            children: a
                        }), (0, s.jsx)("p", {
                            className: "mt-2 text-center font-medium text-base text-muted-foreground leading-6",
                            children: n
                        })]
                    })
                };
            var eE = a(99731);
            let eI = () => {
                let {
                    t: e
                } = (0, U.Bd)();
                return (0, s.jsxs)("div", {
                    className: "flex flex-1 flex-col items-center justify-center py-8",
                    children: [(0, s.jsx)("div", {
                        className: "pb-4",
                        children: (0, s.jsx)(eE.A, {
                            className: "h-12 w-12"
                        })
                    }), (0, s.jsx)("h3", {
                        className: "font-bold text-lg",
                        children: e("title.availableWalletsNotFound")
                    }), (0, s.jsx)("p", {
                        className: "mt-2 text-center text-muted-foreground text-sm",
                        children: e("message.availableWalletsNotFound")
                    })]
                })
            };

            function eL(e, t) {
                switch (t.type) {
                    case "SHOW_WALLET_LIST":
                        return {
                            ...e, view: "wallet-list"
                        };
                    case "SHOW_MULTI_ECOSYSTEM":
                        return {
                            view: "multi-ecosystem", selectedWalletId: t.id
                        };
                    case "SHOW_CONNECTING":
                        return {
                            view: "connecting", selectedWalletId: t.id
                        };
                    case "HANDLE_ERROR":
                        if ((0, V.u1)(t.error).includes("pending")) return {
                            view: "connecting",
                            selectedWalletId: t.id
                        };
                        return {
                            view: "wallet-list", selectedWalletId: t.id
                        };
                    default:
                        return e
                }
            }
            let eF = e => {
                    let {
                        onClose: t,
                        walletChainArgs: a
                    } = e, {
                        t: n
                    } = (0, U.Bd)(), {
                        installedWallets: r
                    } = (() => {
                        let e = er(),
                            {
                                connectors: t
                            } = (0, J.e)(),
                            {
                                wallets: a
                            } = (0, S.v)(),
                            [n, r] = (0, M.useState)(() => ({
                                installedWallets: [],
                                notDetectedWallets: []
                            })),
                            s = !(0, q.a)();
                        return (0, M.useEffect)(() => {
                            (async () => {
                                var n, i, l, o;
                                let c = Array.from(t).filter((e, t, a) => t === a.findIndex(t => t.id === e.id)),
                                    d = c.find(e => "safe" === e.id),
                                    u = !1;
                                if (d) try {
                                    await d.getProvider() || (u = !0)
                                } catch (e) {
                                    u = !0
                                }
                                u && (c = c.filter(e => "safe" !== e.id)), c.some(e => e.id.toLowerCase().includes("walletconnect")) || c.unshift(P(null != (n = null == e ? void 0 : e.walletConnect) ? n : et)), c.some(e => e.id.toLowerCase().includes("coinbase")) || c.unshift(y(null != (i = null == e ? void 0 : e.coinbase) ? i : Q)), c.some(e => e.id.toLowerCase().includes("metamask")) || c.unshift(C(null != (l = null == e ? void 0 : e.metaMask) ? l : ee)), c.some(e => e.id.toLowerCase().includes("baseaccount")) || c.unshift(b(null != (o = null == e ? void 0 : e.baseAccount) ? o : X)), c.some(e => e.id.toLowerCase().includes("porto")) || c.unshift(j(null == e ? void 0 : e.porto));
                                let m = t => !e.enabledChainNamespaces || e.enabledChainNamespaces.includes(t),
                                    p = ec(m("eip155") ? c.filter(e => A(e.id)) : [], m("solana") ? a.filter(e => e.adapter.readyState === K.Ok.Installed || e.adapter.readyState === K.Ok.Loadable) : [], e.walletEcosystemsOrder),
                                    g = ec(c.filter(e => !A(e.id) && s), a.filter(e => e.adapter.readyState !== K.Ok.Installed && e.adapter.readyState !== K.Ok.Loadable && s));
                                p.sort(ed), g.sort(ed), r({
                                    installedWallets: p,
                                    notDetectedWallets: g
                                })
                            })()
                        }, [s, a, t, e]), n
                    })(), l = (0, M.useRef)(null), {
                        accounts: o
                    } = z(), c = (0, M.useMemo)(() => o.filter(e => e.isConnected).map(e => ep(e.connector, e.chainNamespace)).filter(Boolean), [o]), [d, u] = (0, M.useReducer)(eL, {
                        view: "wallet-list"
                    }), m = e => {
                        u({
                            type: "SHOW_CONNECTING",
                            id: e
                        })
                    }, p = (e, t) => {
                        u({
                            type: "HANDLE_ERROR",
                            id: e,
                            error: t
                        })
                    }, g = (0, M.useMemo)(() => {
                        if (a) return a.chain ? a.chain.name : a.chainNamespace
                    }, [a]), h = (0, M.useMemo)(() => {
                        var e, t;
                        if (!a) return r;
                        let n = null != (t = null == (e = a.chain) ? void 0 : e.chainNamespace) ? t : a.chainNamespace;
                        return r.map(e => {
                            let t = e.connectors.filter(e => e.chainNamespace === n);
                            return t.length ? {
                                ...e,
                                connectors: t
                            } : null
                        }).filter(Boolean)
                    }, [r, a]), v = "multi-ecosystem" === d.view, f = "connecting" === d.view, x = d.selectedWalletId ? h.find(e => e.id === d.selectedWalletId) : null;
                    l.current = x || l.current, x = l.current;
                    let w = (0, M.useMemo)(() => ev(h.filter(e => {
                            var t;
                            return null == (t = e.connectors) ? void 0 : t.length
                        }).map(e => ({
                            ...e,
                            tagType: ((e, t) => {
                                let a;
                                if (e.connectors.length > 1) a = e.connectors.some(e => {
                                    let a = ep(e.connector, e.chainNamespace);
                                    return a && ef(a, t.includes(a)) === eg.Connected
                                }) ? eg.Connected : eg.Multichain;
                                else if (1 === e.connectors.length) {
                                    let n = ep(e.connectors[0].connector, e.connectors[0].chainNamespace);
                                    a = n ? ef(n, t.includes(n)) : void 0
                                }
                                return a
                            })(e, c)
                        }))), [h, c]),
                        k = (e, a, n, r, i, l) => {
                            let o = "".concat(a).concat(i ? "-".concat(n) : "");
                            switch (n) {
                                case "eip155":
                                    return (0, s.jsx)(eW, {
                                        connector: r,
                                        ecosystemSelection: i,
                                        onConnected: t,
                                        onConnecting: () => m(e),
                                        onError: t => p(e, t),
                                        tagType: l
                                    }, o);
                                case "solana":
                                    return (0, s.jsx)(eS, {
                                        ecosystemSelection: i,
                                        onConnected: t,
                                        onConnecting: () => m(e),
                                        onError: t => p(e, t),
                                        tagType: l,
                                        walletAdapter: r
                                    }, o);
                                default:
                                    return null
                            }
                        },
                        N = (0, M.useMemo)(() => {
                            var e;
                            return ev((null == x || null == (e = x.connectors) ? void 0 : e.map(e => {
                                let t = ep(e.connector, e.chainNamespace);
                                return {
                                    ...e,
                                    tagType: t ? ef(t, c.includes(t)) : void 0
                                }
                            })) || [])
                        }, [x, c]);
                    return (0, s.jsxs)(s.Fragment, {
                        children: [(0, s.jsxs)(G.a.Header, {
                            children: [(v || f) && (0, s.jsx)(G.a.BackButton, {
                                onClick: () => {
                                    u({
                                        type: "SHOW_WALLET_LIST"
                                    })
                                }
                            }), (0, s.jsx)(G.a.Title, {
                                className: (0, i.cn)((v || f) && "ml-auto"),
                                children: v ? n("title.selectEcosystem") : f ? n("title.connecting") : g ? n("title.selectWalletWithChain", {
                                    chainLabel: g
                                }) : n("title.selectWallet")
                            })]
                        }), (0, s.jsxs)("div", {
                            className: "px-0 md:pt-2",
                            id: em.WalletModalContent,
                            children: [(0, s.jsx)("div", {
                                className: (0, i.cn)("transition-opacity duration-225 ease-in-out", "wallet-list" !== d.view && "hidden"),
                                children: (0, s.jsx)("div", {
                                    className: "flex flex-col gap-2",
                                    children: w.length ? w.map(e => {
                                        let {
                                            id: t,
                                            name: a,
                                            icon: n,
                                            connectors: r,
                                            tagType: i
                                        } = e;
                                        if (1 === r.length) {
                                            let {
                                                chainNamespace: e,
                                                connector: t
                                            } = r[0];
                                            return k(ep(t, e), a, e, t, !1, i)
                                        }
                                        return (0, s.jsx)(eN, {
                                            icon: null != n ? n : "",
                                            onClick: () => {
                                                u({
                                                    type: "SHOW_MULTI_ECOSYSTEM",
                                                    id: t
                                                })
                                            },
                                            tagType: i,
                                            title: a
                                        }, a)
                                    }) : (0, s.jsx)(eI, {})
                                })
                            }), (0, s.jsx)("div", {
                                className: (0, i.cn)("transition-opacity duration-225 ease-in-out", "multi-ecosystem" !== d.view && "hidden"),
                                children: (0, s.jsxs)("div", {
                                    className: "flex flex-col gap-4",
                                    children: [(0, s.jsx)(eM, {
                                        message: n("message.multipleEcosystems", {
                                            walletName: null == x ? void 0 : x.name
                                        }),
                                        selectedWallet: x
                                    }), (0, s.jsx)("div", {
                                        className: "flex flex-col gap-2",
                                        children: N.map(e => {
                                            let {
                                                chainNamespace: t,
                                                tagType: a,
                                                connector: n
                                            } = e;
                                            return k(d.selectedWalletId, (null == x ? void 0 : x.name) || "", t, n, !0, a)
                                        })
                                    })]
                                })
                            }), (0, s.jsx)("div", {
                                className: (0, i.cn)("transition-opacity duration-225 ease-in-out", "connecting" !== d.view && "hidden"),
                                children: (0, s.jsx)(eM, {
                                    message: n("message.connecting"),
                                    selectedWallet: x,
                                    title: n("title.waitingForWallet", {
                                        walletName: null == x ? void 0 : x.name
                                    })
                                })
                            })]
                        })]
                    })
                },
                eT = e => {
                    let {
                        isOpened: t,
                        onOpenClose: a,
                        children: n
                    } = e;
                    return (0, s.jsx)(G.a.Container, {
                        isOpened: t,
                        onOpenChange: a,
                        children: (0, s.jsx)(G.a.Content, {
                            children: (0, s.jsx)("div", {
                                className: "px-4 pb-4 md:p-0",
                                children: n
                            })
                        })
                    })
                };
            var ez = a(40816);
            let eH = JSON.parse('{"title":{"connectWallet":"ওয়ালেট সংযুক্ত করুন","connecting":"","selectWallet":"","selectWalletWithChain":"","selectEcosystem":"","waitingForWallet":"","availableWalletsNotFound":""},"message":{"connecting":"","multipleEcosystems":"","availableWalletsNotFound":""},"tags":{"connected":"","multichain":"","installed":"","qrCode":"","getStarted":""}}'),
                eO = JSON.parse('{"title":{"connectWallet":"Wallet verbinden","connecting":"","selectWallet":"","selectWalletWithChain":"","selectEcosystem":"","waitingForWallet":"","availableWalletsNotFound":""},"message":{"connecting":"","multipleEcosystems":"","availableWalletsNotFound":""},"tags":{"connected":"","multichain":"","installed":"","qrCode":"","getStarted":""}}'),
                eB = JSON.parse('{"title":{"connectWallet":"Connect wallet","connecting":"Connecting","selectWallet":"Select a wallet","selectWalletWithChain":"Select {{chainLabel}} wallet","selectEcosystem":"Select an ecosystem","waitingForWallet":"Waiting for {{walletName}}","availableWalletsNotFound":"Available wallets not found"},"message":{"connecting":"Click connect in your wallet popup. Don\'t see your wallet? Check your other browser windows.","multipleEcosystems":"{{walletName}} supports multiple chain ecosystems. Select which one to connect to.","availableWalletsNotFound":"No compatible wallet extensions detected. Please install a supported wallet and refresh the page. If already installed, ensure it\'s enabled and compatible, or contact support."},"tags":{"connected":"Connected","multichain":"Multichain","installed":"Installed","qrCode":"QR Code","getStarted":"Get Started"}}'),
                eY = JSON.parse('{"title":{"connectWallet":"Conectar cartera","connecting":"Conectando","selectWallet":"","selectWalletWithChain":"","selectEcosystem":"","waitingForWallet":"Esperando conexi\xf3n con {{walletName}}","availableWalletsNotFound":"No se encontraron carteras disponibles"},"message":{"connecting":"Haz clic en conectar en la ventana emergente de tu cartera \xbfNo ves tu cartera? Revisa las otras ventanas de tu navegador.","multipleEcosystems":"","availableWalletsNotFound":"No se detectaron extensiones de cartera compatibles. Instala una cartera compatible y actualiza la p\xe1gina. Si ya est\xe1 instalada, aseg\xfarate de que est\xe9 habilitada y sea compatible, o contacta al soporte t\xe9cnico."},"tags":{"connected":"","multichain":"","installed":"","qrCode":"","getStarted":""}}'),
                eR = JSON.parse('{"title":{"connectWallet":"Connecter un portefeuille","connecting":"","selectWallet":"","selectWalletWithChain":"","selectEcosystem":"","waitingForWallet":"","availableWalletsNotFound":""},"message":{"connecting":"","multipleEcosystems":"","availableWalletsNotFound":""},"tags":{"connected":"","multichain":"","installed":"","qrCode":"","getStarted":""}}'),
                eD = JSON.parse('{"title":{"connectWallet":"Hubungkan dompet","connecting":"Menyambungkan","selectWallet":"","selectWalletWithChain":"","selectEcosystem":"","waitingForWallet":"Meunggu untuk {{walletName}}","availableWalletsNotFound":"Dompet yang tersedia tidak ditemukan"},"message":{"connecting":"Klik hubungkan pada popup dompet Anda. Tidak melihat dompet Anda? Periksa jendela peramban Anda yang lain.","multipleEcosystems":"","availableWalletsNotFound":"Tidak terdeteksi ekstensi dompet yang kompatibel. Harap pasang dompet yang didukung dan segarkan halaman. Jika sudah terpasang, pastikan dompet tersebut diaktifkan dan kompatibel, atau hubungi dukungan."},"tags":{"connected":"","multichain":"","installed":"","qrCode":"","getStarted":""}}'),
                eG = JSON.parse('{"title":{"connectWallet":"Collega il portafoglio","connecting":"","selectWallet":"","selectWalletWithChain":"","selectEcosystem":"","waitingForWallet":"","availableWalletsNotFound":""},"message":{"connecting":"","multipleEcosystems":"","availableWalletsNotFound":""},"tags":{"connected":"","multichain":"","installed":"","qrCode":"","getStarted":""}}'),
                eV = JSON.parse('{"title":{"connectWallet":"ウォレットを接続","connecting":"","selectWallet":"","selectWalletWithChain":"","selectEcosystem":"","waitingForWallet":"","availableWalletsNotFound":""},"message":{"connecting":"","multipleEcosystems":"","availableWalletsNotFound":""},"tags":{"connected":"","multichain":"","installed":"","qrCode":"","getStarted":""}}'),
                eU = JSON.parse('{"title":{"connectWallet":"지갑 연결","connecting":"","selectWallet":"","selectWalletWithChain":"","selectEcosystem":"","waitingForWallet":"","availableWalletsNotFound":""},"message":{"connecting":"","multipleEcosystems":"","availableWalletsNotFound":""},"tags":{"connected":"","multichain":"","installed":"","qrCode":"","getStarted":""}}'),
                eq = JSON.parse('{"title":{"connectWallet":"Conectar carteira","connecting":"Conectando","selectWallet":"Selecione uma carteira","selectWalletWithChain":"Selecionar carteira {{chainLabel}}","selectEcosystem":"Selecione um ecossistema","waitingForWallet":"Aguardando por {{walletName}}","availableWalletsNotFound":"N\xe3o foram encontradas carteiras dispon\xedveis"},"message":{"connecting":"Clique em conectar na janela da sua carteira. N\xe3o v\xea sua carteira? Verifique outras janelas do seu navegador.","multipleEcosystems":"{{walletName}} suporta m\xfaltiplos ecossistemas. Selecione qual ecossistema voc\xea gostaria de se conectar.","availableWalletsNotFound":"Nenhuma extens\xe3o de carteira compat\xedvel encontrada. Por favor, instale uma carteira suportada e atualize a p\xe1gina. Se j\xe1 estiver instalado, certifique-se de que esteja ativada e compat\xedvel ou entre em contato com o suporte."},"tags":{"connected":"Conectado","multichain":"Multicadeia","installed":"Instalado","qrCode":"C\xf3digo QR","getStarted":"Comece Agora"}}'),
                eK = JSON.parse('{"title":{"connectWallet":"เชื่อมต่อ กระเป๋า","connecting":"","selectWallet":"","selectWalletWithChain":"","selectEcosystem":"","waitingForWallet":"","availableWalletsNotFound":""},"message":{"connecting":"","multipleEcosystems":"","availableWalletsNotFound":""},"tags":{"connected":"","multichain":"","installed":"","qrCode":"","getStarted":""}}'),
                eJ = JSON.parse('{"title":{"connectWallet":"C\xfczdanı bağla","connecting":"Bağlanıyor","selectWallet":"","selectWalletWithChain":"","selectEcosystem":"","waitingForWallet":"{{walletName}} i\xe7in bekleniyor","availableWalletsNotFound":"Kullanılabilir c\xfczdanlar bulunamadı"},"message":{"connecting":"C\xfczdan a\xe7ılır pencerenizde bağlan\'a tıklayın. C\xfczdanınızı g\xf6remiyor musunuz? Diğer tarayıcı pencerelerinizi kontrol edin.","multipleEcosystems":"","availableWalletsNotFound":"Uyumlu c\xfczdan uzantısı algılanmadı. L\xfctfen desteklenen bir c\xfczdan y\xfckleyin ve sayfayı yenileyin. Zaten y\xfckl\xfcyse, etkin ve uyumlu olduğundan emin olun veya destek ekibiyle iletişime ge\xe7in."},"tags":{"connected":"","multichain":"","installed":"","qrCode":"","getStarted":""}}'),
                e$ = JSON.parse('{"title":{"connectWallet":"Під\'єднати гаманець","connecting":"Підключення","selectWallet":"Виберіть гаманець","selectWalletWithChain":"Виберіть {{chainLabel}} гаманець","selectEcosystem":"Виберіть екосистему","waitingForWallet":"Очікуємо {{walletName}}","availableWalletsNotFound":"Доступні гаманці не знайдено"},"message":{"connecting":"Натисніть підключитися у спливаючому вікні вашого гаманця. Не бачите свій гаманець? Перевірте інші вікна браузера.","multipleEcosystems":"{{walletName}} підтримує декілька екосистем. Виберіть, до якої екосистеми ви хотіли б під\'єднатись.","availableWalletsNotFound":"Сумісних розширень гаманця не виявлено. Будь ласка, встановіть підтримуваний гаманець і оновіть сторінку. У разі якщо він вже встановлений, переконайтеся, що він увімкнений і сумісний або зверніться до служби підтримки."},"tags":{"connected":"Підключено","multichain":"Мультичейн","installed":"Встановлено","qrCode":"QR-код","getStarted":"Розпочати"}}'),
                eZ = JSON.parse('{"title":{"connectWallet":"Kết nối v\xed","connecting":"","selectWallet":"","selectWalletWithChain":"","selectEcosystem":"","waitingForWallet":"","availableWalletsNotFound":""},"message":{"connecting":"","multipleEcosystems":"","availableWalletsNotFound":""},"tags":{"connected":"","multichain":"","installed":"","qrCode":"","getStarted":""}}'),
                eX = JSON.parse('{"title":{"connectWallet":"关联钱包","connecting":"正在连接","selectWallet":"","selectWalletWithChain":"","selectEcosystem":"","waitingForWallet":"等待 {{walletName}} 连接","availableWalletsNotFound":"找不到可用的钱包"},"message":{"connecting":"在弹出来的钱包列表中点击连接。没看到你的钱包？ 看看浏览器的其他窗口。","multipleEcosystems":"","availableWalletsNotFound":"未检测到兼容的钱包，请安装一个可用的钱包并刷新本页面。如果已经安装过了，请确保钱包已经启用并兼容本页面，或者联系客户支持。"},"tags":{"connected":"","multichain":"","installed":"","qrCode":"","getStarted":""}}'),
                eQ = e => {
                    let {
                        children: t,
                        locale: a
                    } = e, n = (0, M.useMemo)(() => {
                        var e;
                        let t = Object.keys(r).reduce((e, t) => (e[t] = {
                                translation: r[t]
                            }, e), {}),
                            n = (0, ez.Q_)({
                                lng: a || "en",
                                fallbackLng: t.en ? "en" : null == (e = Object.keys(t)) ? void 0 : e[0],
                                lowerCaseLng: !0,
                                interpolation: {
                                    escapeValue: !1
                                },
                                resources: t,
                                detection: {
                                    caches: []
                                },
                                returnEmptyString: !1
                            });
                        return n.init(), n
                    }, [a]);
                    return (0, M.useEffect)(() => {
                        a && a !== n.language && n.changeLanguage(a)
                    }, [a]), (0, s.jsx)(U.xC, {
                        i18n: n,
                        children: t
                    })
                },
                e0 = (0, M.createContext)({
                    isWalletMenuOpen: V.lQ,
                    toggleWalletMenu: V.lQ,
                    openWalletMenu: e => (0, V.lQ)(),
                    closeWalletMenu: V.lQ
                }),
                e1 = () => (0, M.useContext)(e0),
                e2 = e => {
                    let {
                        children: t
                    } = e, {
                        locale: a
                    } = er(), n = (0, M.useRef)(!1), [r, i] = (0, M.useState)(!1), [l, o] = (0, M.useState)(void 0), c = (0, M.useCallback)(() => {
                        i(e => (n.current = !e, n.current))
                    }, []), d = (0, M.useCallback)(e => {
                        e && o(e), i(!0), n.current = !0
                    }, []), u = (0, M.useCallback)(() => {
                        i(!1), n.current = !1, o(void 0)
                    }, []), m = (0, M.useMemo)(() => ({
                        isWalletMenuOpen: () => n.current,
                        toggleWalletMenu: c,
                        openWalletMenu: d,
                        closeWalletMenu: u
                    }), [u, d, c]);
                    return (0, s.jsxs)(e0.Provider, {
                        value: m,
                        children: [t, (0, s.jsx)(eQ, {
                            locale: a,
                            children: (0, s.jsx)(eT, {
                                isOpened: r,
                                onOpenClose: u,
                                children: (0, s.jsx)(eF, {
                                    onClose: u,
                                    walletChainArgs: l
                                })
                            })
                        })]
                    })
                },
                e5 = e => {
                    let {
                        children: t,
                        config: a = ea
                    } = e;
                    return (0, s.jsx)(en.Provider, {
                        value: a,
                        children: (0, s.jsx)(e2, {
                            children: t
                        })
                    })
                };
            var e4 = a(14536),
                e3 = a(82445);
            let e6 = e => (0, e3.x)({
                    id: e.nativeChainId,
                    name: e.name,
                    testnet: !1,
                    nativeCurrency: {
                        name: e.nativeToken.name,
                        symbol: e.nativeToken.symbol,
                        decimals: e.nativeToken.decimals
                    },
                    rpcUrls: {
                        default: {
                            http: e.rpcUrls
                        }
                    },
                    blockExplorers: (e => {
                        if (0 !== e.blockExplorerUrls.length) return {
                            default: {
                                name: "".concat(e.name, " explorer"),
                                url: e.blockExplorerUrls[0]
                            }
                        }
                    })(e),
                    chainNamespace: "eip155",
                    caipNetworkId: "eip155:".concat(e.nativeChainId)
                }),
                e9 = (e, t, a) => {
                    let n = (0, M.useMemo)(() => null == a ? void 0 : a.map(e => {
                        var t;
                        return (t = e, e4.nb.safeParse(t).success) ? "eip155" === e.chainNamespace ? e6(e) : void 0 : e
                    }).filter(Boolean).filter((e, t, a) => a.findIndex(t => (null == t ? void 0 : t.id) === (null == e ? void 0 : e.id)) === t), [a]);
                    (0, M.useEffect)(() => {
                        (null == n ? void 0 : n.length) && ((e, t, a) => {
                            let n = a.find(e => e.id === g.r.id);
                            n && (n.contracts = {
                                ...g.r.contracts,
                                ...n.contracts
                            }), e._internal.chains.setState(a), e._internal.connectors.setState(() => {
                                var a, n;
                                return [...t, ...null != (n = null == (a = e._internal.mipd) ? void 0 : a.getProviders().map(e._internal.connectors.providerDetailToConnector)) ? n : []].map(e._internal.connectors.setup)
                            }), "disconnected" === e.state.status && (0, eP.M)(e)
                        })(e, t, n)
                    }, [n, t, e])
                }
        },
        60491: (e, t, a) => {
            "use strict";
            a.d(t, {
                a: () => c
            });
            var n = a(96942),
                r = a(99990),
                s = a(94502),
                i = a(14344),
                l = a(58151),
                o = a(14220);
            let c = {
                Container: e => {
                    let {
                        isOpened: t,
                        onOpenChange: a,
                        children: r
                    } = e;
                    return (0, s.a)() ? (0, n.jsx)(o._s, {
                        "aria-describedby": void 0,
                        onOpenChange: a,
                        open: t,
                        children: r
                    }) : (0, n.jsx)(l.lG, {
                        "aria-describedby": void 0,
                        onOpenChange: a,
                        open: t,
                        children: r
                    })
                },
                Content: e => {
                    let {
                        children: t,
                        className: a,
                        ...r
                    } = e;
                    return (0, s.a)() ? (0, n.jsx)(o.zj, {
                        "aria-describedby": void 0,
                        className: (0, i.cn)("", a),
                        ...r,
                        children: t
                    }) : (0, n.jsx)(l.Cf, {
                        "aria-describedby": void 0,
                        className: (0, i.cn)("", a),
                        ...r,
                        children: t
                    })
                },
                Footer: e => {
                    let {
                        children: t,
                        className: a,
                        ...r
                    } = e;
                    return (0, s.a)() ? (0, n.jsx)(o.tb, {
                        className: (0, i.cn)("", a),
                        ...r,
                        children: t
                    }) : (0, n.jsx)(l.Es, {
                        className: (0, i.cn)("", a),
                        ...r,
                        children: t
                    })
                },
                Body: e => {
                    let {
                        children: t,
                        className: a,
                        ...r
                    } = e;
                    return (0, n.jsx)("div", {
                        className: (0, i.cn)("relative mx-4 mb-4 rounded-lg bg-card px-4 py-6 md:mx-0 md:mb-0", a),
                        ...r,
                        children: t
                    })
                },
                Header: e => (0, s.a)() ? (0, n.jsx)(o.BE, {
                    ...e
                }) : (0, n.jsx)(l.c7, {
                    ...e
                }),
                Title: e => (0, s.a)() ? (0, n.jsx)(o.gk, {
                    ...e
                }) : (0, n.jsx)(l.L3, {
                    ...e
                }),
                BackButton: e => {
                    let {
                        className: t,
                        ...a
                    } = e;
                    return (0, n.jsxs)("button", {
                        className: (0, i.cn)("rounded-xs opacity-70 ring-offset-background transition-opacity hover:opacity-100 focus:outline-hidden focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none data-[state=open]:bg-accent data-[state=open]:text-muted-foreground [&_svg:not([class*='size-'])]:size-4 [&_svg]:pointer-events-none [&_svg]:shrink-0", t),
                        ...a,
                        children: [(0, n.jsx)(r.A, {}), (0, n.jsx)("span", {
                            className: "sr-only",
                            children: "Back"
                        })]
                    })
                }
            }
        },
        60904: (e, t, a) => {
            "use strict";
            a.d(t, {
                Br: () => n.Br,
                Cb: () => n.Cb,
                FX: () => n.FX,
                Lc: () => n.Lc,
                MZ: () => n.MZ,
                Mc: () => n.Mc,
                ay: () => n.ay,
                ej: () => n.ej,
                lQ: () => n.lQ,
                q9: () => n.q9,
                tB: () => n.tB,
                u1: () => n.u1,
                yy: () => n.yy,
                zB: () => n.zB
            });
            var n = a(46028)
        },
        60914: (e, t, a) => {
            "use strict";
            a.d(t, {
                D: () => b
            });
            var n = a(96942),
                r = a(14344);
            let s = (0, a(26854).F)("relative w-full rounded-lg border px-4 py-3 text-sm grid has-[>svg]:grid-cols-[calc(var(--spacing)*4)_1fr] grid-cols-[0_1fr] has-[>svg]:gap-x-3 gap-y-0.5 items-start [&>svg]:size-4 [&>svg]:translate-y-0.5 [&>svg]:text-current", {
                variants: {
                    variant: {
                        default: "bg-card text-card-foreground",
                        destructive: "text-destructive bg-card [&>svg]:text-current *:data-[slot=alert-description]:text-destructive/90"
                    }
                },
                defaultVariants: {
                    variant: "default"
                }
            });

            function i(e) {
                let {
                    className: t,
                    variant: a,
                    ...i
                } = e;
                return (0, n.jsx)("div", {
                    "data-slot": "alert",
                    role: "alert",
                    className: (0, r.cn)(s({
                        variant: a
                    }), t),
                    ...i
                })
            }

            function l(e) {
                let {
                    className: t,
                    ...a
                } = e;
                return (0, n.jsx)("div", {
                    "data-slot": "alert-description",
                    className: (0, r.cn)("text-muted-foreground col-start-2 grid justify-items-start gap-1 text-sm [&_p]:leading-relaxed", t),
                    ...a
                })
            }
            var o = a(47931),
                c = a(58151),
                d = a(28015),
                u = a(71761),
                m = a(75044),
                p = a(80756),
                g = a(32074),
                h = a(88174),
                v = a(26857),
                f = a(58622);
            let x = [{
                    icon: d.A,
                    title: "What is Nullmask?",
                    content: "Privacy for your existing wallet.",
                    subcontent: "No new seeds. No new apps. Shield your tokens, and your balance and history stay private."
                }, {
                    icon: u.A,
                    title: "How it works",
                    steps: ["Shield your tokens (one deposit)", "Use your wallet as usual: send, swap, anything", "Your balance and history stay private"],
                    note: "Works with MetaMask, Rabby, or any wallet. Just switch to the Nullmask network."
                }, {
                    icon: m.A,
                    title: "Sending to anyone",
                    content: "Send to any address. Tokens arrive from the shared pool, not from your wallet.",
                    bullets: ["Recipient has Nullmask → the transfer stays inside the private pool", "Recipient doesn't → the tokens leave the pool for their address"],
                    subcontent: "On-chain, a payout from the pool shows its amount and time."
                }, {
                    icon: p.A,
                    title: "Leaving privacy",
                    content: "When you withdraw, you pick where tokens go.",
                    tips: ["Send to a fresh address", "Pick a standard amount, like 0.1 or 1 ETH, not an uneven one", "In Advanced mode, your withdrawal leaves with the next wave, together with others"],
                    more: {
                        href: "/rules",
                        label: "See the privacy best practice →"
                    }
                }],
                b = e => {
                    let {
                        open: t,
                        onOpenChange: a,
                        onComplete: s
                    } = e, [d, u] = (0, f.useState)(t), [m, p] = (0, f.useState)(0), b = x[m];
                    (0, f.useEffect)(() => {
                        t ? u(!0) : (u(!1), p(0))
                    }, [t]);
                    let w = () => {
                        u(!1), a(!1), null == s || s(), p(0)
                    };
                    return (0, n.jsx)(c.lG, {
                        open: d,
                        onOpenChange: e => {
                            u(e), a(e), e || p(0)
                        },
                        children: (0, n.jsxs)(c.Cf, {
                            className: "max-w-md gap-6 rounded-3xl border border-border/70 bg-card px-8 py-7 shadow-2xl ring-1 ring-border/40 dark:border-white/10 dark:bg-secondary",
                            children: [(0, n.jsx)(c.c7, {
                                showCloseButton: !1,
                                children: (0, n.jsx)(c.L3, {
                                    className: "sr-only",
                                    children: b.title
                                })
                            }), (0, n.jsx)("div", {
                                className: "flex justify-center gap-1.5",
                                children: x.map((e, t) => (0, n.jsx)("div", {
                                    className: (0, r.cn)("h-1.5 rounded-full transition-all duration-300", t === m ? "w-8 bg-primary shadow-sm" : "w-1.5 bg-border/80")
                                }, t))
                            }), (0, n.jsxs)("div", {
                                className: "flex flex-col items-center gap-4",
                                children: [(0, n.jsx)("div", {
                                    className: "flex size-20 items-center justify-center rounded-3xl bg-primary/10 text-[#5E7A00] shadow-[0_0_28px_-10px_var(--nm-glow)] ring-1 ring-primary/25 dark:text-primary",
                                    children: (0, n.jsx)(b.icon, {
                                        "aria-hidden": !0,
                                        className: "size-9",
                                        strokeWidth: 1.75
                                    })
                                }), (0, n.jsxs)("div", {
                                    className: "text-center space-y-2",
                                    children: [(0, n.jsx)("h2", {
                                        className: "text-2xl font-bold tracking-tight",
                                        children: b.title
                                    }), b.content && (0, n.jsx)(c.rr, {
                                        className: "text-base font-medium text-foreground/70",
                                        children: b.content
                                    }), b.subcontent && (0, n.jsx)("p", {
                                        className: "text-sm text-foreground/65",
                                        children: b.subcontent
                                    })]
                                })]
                            }), b.steps && (0, n.jsx)("div", {
                                className: "space-y-3 rounded-2xl border border-border/60 bg-secondary/40 p-5",
                                children: b.steps.map((e, t) => (0, n.jsxs)("div", {
                                    className: "flex gap-3",
                                    children: [(0, n.jsx)("span", {
                                        className: "flex size-6 shrink-0 items-center justify-center rounded-full bg-primary font-bold text-primary-foreground text-xs shadow-sm ring-1 ring-primary/30",
                                        children: t + 1
                                    }), (0, n.jsx)("span", {
                                        className: "text-sm font-medium leading-tight",
                                        children: e
                                    })]
                                }, t))
                            }), b.bullets && (0, n.jsx)("div", {
                                className: "space-y-2 rounded-2xl border border-border/60 bg-secondary/20 p-4 text-left dark:border-white/10 dark:bg-background/40",
                                children: b.bullets.map((e, t) => (0, n.jsxs)("div", {
                                    className: "flex items-center gap-3",
                                    children: [(0, n.jsx)("span", {
                                        className: "flex size-6 shrink-0 items-center justify-center rounded-full bg-primary/10 text-primary ring-1 ring-primary/20",
                                        children: (0, n.jsx)(g.A, {
                                            className: "size-3.5"
                                        })
                                    }), (0, n.jsx)("p", {
                                        className: "text-base font-semibold text-foreground",
                                        children: e
                                    })]
                                }, t))
                            }), b.note && (0, n.jsxs)(i, {
                                className: "border border-blue-200/60 bg-blue-50/70 dark:border-blue-900/40 dark:bg-blue-900/20",
                                children: [(0, n.jsx)(h.A, {
                                    className: "size-4 text-blue-600 dark:text-blue-400"
                                }), (0, n.jsx)(l, {
                                    className: "text-blue-900 text-xs font-medium dark:text-blue-100",
                                    children: b.note
                                })]
                            }), b.tips && (0, n.jsxs)(i, {
                                className: "border border-amber-200/60 bg-amber-50/70 dark:border-amber-900/40 dark:bg-amber-900/20",
                                children: [(0, n.jsx)(v.A, {
                                    className: "size-4 text-amber-600 dark:text-amber-400"
                                }), (0, n.jsxs)(l, {
                                    className: "text-amber-900 dark:text-amber-100",
                                    children: [(0, n.jsx)("p", {
                                        className: "mb-2 font-semibold text-xs",
                                        children: "For best privacy:"
                                    }), (0, n.jsx)("ul", {
                                        className: "list-inside list-disc space-y-1 text-xs",
                                        children: b.tips.map((e, t) => (0, n.jsx)("li", {
                                            children: e
                                        }, t))
                                    })]
                                })]
                            }), b.more && (0, n.jsx)("a", {
                                className: "-my-2 mx-auto inline-flex min-h-11 w-fit items-center justify-center px-2 font-semibold text-[var(--nm-lime-ink)] text-sm underline-offset-4 hover:underline dark:text-primary",
                                href: b.more.href,
                                onClick: w,
                                children: b.more.label
                            }), (0, n.jsxs)("div", {
                                className: "flex flex-col gap-3 pt-2",
                                children: [(0, n.jsxs)("div", {
                                    className: "flex gap-3",
                                    children: [m > 0 && (0, n.jsx)(o.$, {
                                        variant: "outline",
                                        onClick: () => {
                                            m > 0 && p(m - 1)
                                        },
                                        className: "h-11 flex-1 rounded-full border-border/70 bg-background text-foreground hover:bg-secondary",
                                        children: "Back"
                                    }), (0, n.jsx)(o.$, {
                                        onClick: () => {
                                            m < x.length - 1 ? p(m + 1) : w()
                                        },
                                        className: "h-11 flex-1 rounded-full font-semibold shadow-lg shadow-primary/20 transition-all hover:shadow-xl hover:shadow-primary/30",
                                        children: m < x.length - 1 ? "Next" : "Let's go"
                                    })]
                                }), m < 2 && (0, n.jsx)("button", {
                                    type: "button",
                                    onClick: () => {
                                        w()
                                    },
                                    className: "w-full py-1 text-center text-muted-foreground text-xs font-medium transition-colors hover:text-foreground",
                                    children: "Skip intro"
                                })]
                            })]
                        })
                    })
                }
        },
        71742: (e, t, a) => {
            "use strict";
            a.d(t, {
                _: () => n
            });
            let n = "max-md:data-[vaul-drawer-direction=bottom]:max-h-[88dvh] max-md:data-[vaul-drawer-direction=bottom]:rounded-t-[28px] max-md:border-[var(--nm-hairline)] max-md:bg-background max-md:pb-[env(safe-area-inset-bottom)] max-md:[&>div:first-child]:mt-2.5 max-md:[&>div:first-child]:h-[5px] max-md:[&>div:first-child]:w-9 max-md:[&>div:first-child]:bg-[color-mix(in_srgb,var(--nm-muted)_45%,transparent)]"
        },
        72034: (e, t, a) => {
            "use strict";
            a.d(t, {
                Dg: () => l,
                Kf: () => i,
                Of: () => s
            });
            var n = a(11229);
            let r = "https://raw.githubusercontent.com/trustwallet/assets/master/blockchains",
                s = [{
                    label: "Ethereum",
                    subdomain: "app",
                    chainName: "ethereum",
                    icon: "".concat(r, "/ethereum/info/logo.png")
                }, {
                    label: "BSC",
                    subdomain: "bsc",
                    chainName: "bsc",
                    icon: "".concat(r, "/smartchain/info/logo.png")
                }, {
                    label: "Base",
                    subdomain: "base",
                    chainName: "base",
                    icon: "".concat(r, "/base/info/logo.png")
                }, {
                    label: "Arbitrum",
                    subdomain: "arbitrum",
                    chainName: "arbitrum",
                    icon: "".concat(r, "/arbitrum/info/logo.png")
                }, {
                    label: "MegaETH",
                    subdomain: "mega",
                    chainName: "megaeth",
                    icon: "".concat(r, "/megaeth/info/logo.png")
                }, {
                    label: "Sepolia",
                    subdomain: "sepolia",
                    chainName: "sepolia",
                    icon: "".concat(r, "/ethereum/info/logo.png")
                }, {
                    label: "Hardhat",
                    subdomain: "app",
                    chainName: "hardhat",
                    icon: "".concat(r, "/ethereum/info/logo.png")
                }],
                i = e => {
                    let {
                        current: t,
                        switcher: a,
                        isLocal: r,
                        shown: i
                    } = e;
                    return s.filter(e => "hardhat" !== e.chainName || r).filter(e => {
                        var r;
                        return e.chainName === t || null != (r = null == a ? void 0 : a.includes(e.chainName)) && r && null !== i && (0, n.wc)(i, e.chainName)
                    })
                },
                l = (e, t) => {
                    let a = s.find(e => "ethereum" === e.chainName);
                    return e && !t && a ? "https://".concat(a.subdomain, ".").concat(e) : null
                }
        },
        72076: (e, t, a) => {
            "use strict";
            a.d(t, {
                O3: () => x,
                R$: () => h,
                Z: () => g,
                dQ: () => p
            });
            var n = a(59233),
                r = a(4670),
                s = a(70770),
                i = a(70195),
                l = a(24240),
                o = a(79231),
                c = a(77326),
                d = a(92868),
                u = a(6678),
                m = a(1883);
            let p = e => {
                    var t;
                    return ["gas", null != (t = null == e ? void 0 : e.toLowerCase()) ? t : "none"]
                },
                g = e => {
                    var t;
                    let {
                        evmWallet: a
                    } = (0, n.FX)(), s = null != e ? e : null == a ? void 0 : a.address, i = (0, r.I)({
                        queryKey: p(s),
                        queryFn: async () => {
                            if (!s) return null;
                            try {
                                var e;
                                return null != (e = await (0, m.A5)(c.t, s)) ? e : null
                            } catch (e) {
                                return null
                            }
                        },
                        enabled: !!s,
                        refetchInterval: 1e4,
                        staleTime: 5e3,
                        retry: !1
                    });
                    return {
                        gas: null != (t = i.data) ? t : void 0,
                        isLoading: i.isLoading
                    }
                },
                h = () => {
                    let {
                        evmWallet: e
                    } = (0, n.FX)(), t = null == e ? void 0 : e.address, a = (0, s.jE)(), r = (0, i.n)({
                        mutationFn: async e => {
                            if (!t) throw Error("No account");
                            return (0, m.k$)(c.t, t, e)
                        },
                        onSuccess: (e, n) => {
                            var r;
                            e && a.setQueryData(p(t), e), o.oR.success(0n === n ? "Gas released. All your ETH is free to withdraw." : "".concat((0, d.ej)(null != (r = null == e ? void 0 : e.reserve) ? r : n, 18, 4), " ETH set aside for network fees."))
                        },
                        onError: e => {
                            l.v.warn("gas_reserve_not_set", {}, e), o.oR.error("Could not set aside gas. Try again.")
                        },
                        onSettled: () => void a.invalidateQueries({
                            queryKey: p(t)
                        })
                    });
                    return {
                        setReserve: r.mutate,
                        isSetting: r.isPending
                    }
                },
                v = [0, 3e3, 1e4],
                f = e => new Promise(t => setTimeout(t, e)),
                x = e => {
                    (async () => {
                        for (let t of v) {
                            t > 0 && await f(t);
                            try {
                                await (0, m.lU)(c.t, e);
                                return
                            } catch (e) {
                                if (e instanceof u.$$ && e.isMethodMissing) return
                            }
                        }
                        l.v.warn("gas_top_up_not_recorded", {})
                    })()
                }
        },
        77326: (e, t, a) => {
            "use strict";
            let n;
            a.d(t, {
                t: () => i
            });
            var r = a(5552),
                s = a(6678);
            let i = (e, t) => (null != n || (n = (0, s.Ub)((0, r.N)().rpcProxy.url)), n(e, t))
        },
        78695: (e, t, a) => {
            "use strict";
            a.d(t, {
                Q: () => p
            });
            var n = a(4670),
                r = a(28913),
                s = a(5552),
                i = a(24240),
                l = a(14536);
            let o = /^(localhost|127\.0\.0\.1|\[::1\]|0\.0\.0\.0)$|\.(local|localhost)$/,
                c = r.YjP().refine(e => {
                    let t;
                    try {
                        t = new URL(e)
                    } catch (e) {
                        return !1
                    }
                    return "https:" === t.protocol || "http:" === t.protocol && o.test(t.hostname)
                }, {
                    message: "RPC URL must be an https URL (http is allowed for local hosts only)"
                }),
                d = l.nb.extend({
                    nativeChainId: r.aig().int().positive(),
                    rpcUrls: r.YOg(c)
                }),
                u = r.Ikc({
                    nullmask: d,
                    nullmaskContract: d,
                    otherChains: r.YOg(d),
                    swapsEnabled: r.zMY().optional()
                }),
                m = async () => {
                    let e = (0, s.N)().rpcProxy.url,
                        t = await fetch(e, {
                            credentials: "include",
                            method: "POST",
                            headers: {
                                "Content-Type": "application/json"
                            },
                            body: JSON.stringify({
                                jsonrpc: "2.0",
                                id: 1,
                                method: "nullmask_getChains",
                                params: [e]
                            })
                        });
                    if (!t.ok) throw Error("nullmask_getChains failed with HTTP ".concat(t.status));
                    let a = await t.json();
                    if (a.error) throw Error(a.error.message || "nullmask_getChains returned an error");
                    let n = u.safeParse(a.result);
                    if (!n.success) throw i.v.error("get_chains_invalid", {
                        issues: r.S1_(n.error)
                    }), Error("The network configuration could not be read");
                    return n.data
                }, p = () => {
                    let {
                        data: e,
                        isLoading: t,
                        refetch: a
                    } = (0, n.I)({
                        queryKey: ["nullmask_getChains"],
                        queryFn: m
                    });
                    return {
                        chains: e,
                        isLoading: t,
                        refetch: a
                    }
                }
        },
        79231: (e, t, a) => {
            "use strict";
            a.d(t, {
                oR: () => l
            });
            var n = a(60904),
                r = a(56676);
            let s = e => e.endsWith(".") ? e : "".concat(e, "."),
                i = e => "string" == typeof e ? (0, n.tB)(e) : e,
                l = {
                    ...r.toast,
                    error: function () {
                        for (var e, t = arguments.length, a = Array(t), n = 0; n < t; n++) a[n] = arguments[n];
                        let l = i(a[0]),
                            {
                                description: o,
                                ...c
                            } = a[1] || {},
                            d = i(o),
                            u = null != (e = null == d ? void 0 : d.toString().length) ? e : 0;
                        return r.toast.error(u && u <= 100 ? "".concat(s(l), " ").concat(s(d)) : l, {
                            ...c,
                            action: u && u > 100 ? {
                                label: "Details",
                                onClick: () => r.toast.error(l, {
                                    description: d,
                                    ...c
                                })
                            } : void 0
                        })
                    }
                }
        },
        83988: (e, t, a) => {
            "use strict";
            a.d(t, {
                Tooltip: () => l,
                TooltipContent: () => c,
                TooltipProvider: () => i,
                TooltipTrigger: () => o
            });
            var n = a(96942),
                r = a(14344),
                s = a(21986);

            function i(e) {
                let {
                    delayDuration: t = 0,
                    ...a
                } = e;
                return (0, n.jsx)(s.Provider, {
                    "data-slot": "tooltip-provider",
                    delayDuration: t,
                    ...a
                })
            }

            function l(e) {
                let {
                    ...t
                } = e;
                return (0, n.jsx)(i, {
                    children: (0, n.jsx)(s.Root, {
                        "data-slot": "tooltip",
                        ...t
                    })
                })
            }

            function o(e) {
                let {
                    ...t
                } = e;
                return (0, n.jsx)(s.Trigger, {
                    "data-slot": "tooltip-trigger",
                    ...t
                })
            }

            function c(e) {
                let {
                    className: t,
                    sideOffset: a = 0,
                    children: i,
                    ...l
                } = e;
                return (0, n.jsx)(s.Portal, {
                    children: (0, n.jsxs)(s.Content, {
                        "data-slot": "tooltip-content",
                        sideOffset: a,
                        className: (0, r.cn)("bg-foreground text-background animate-in fade-in-0 zoom-in-95 data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=closed]:zoom-out-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 z-50 w-fit origin-(--radix-tooltip-content-transform-origin) rounded-md px-3 py-1.5 text-xs text-balance", t),
                        ...l,
                        children: [i, (0, n.jsx)(s.Arrow, {
                            className: "bg-foreground fill-foreground z-50 size-2.5 translate-y-[calc(-50%_-_2px)] rotate-45 rounded-[2px]"
                        })]
                    })
                })
            }
        },
        84364: (e, t, a) => {
            "use strict";
            a.d(t, {
                h: () => r
            });
            var n = a(96942);
            let r = e => (0, n.jsx)("svg", {
                fill: "none",
                height: "14",
                viewBox: "0 0 16 14",
                width: "16",
                xmlns: "http://www.w3.org/2000/svg",
                ...e,
                children: (0, n.jsx)("path", {
                    d: "M14.6359 0.614768C14.6359 0.614768 16.116 0.0520538 15.9927 1.41865C15.9516 1.98137 15.5816 3.95087 15.2938 6.08116L14.307 12.3916C14.307 12.3916 14.2248 13.3161 13.4847 13.4769C12.7447 13.6376 11.6346 12.9141 11.429 12.7533C11.2645 12.6328 8.34545 10.824 7.31757 9.93978C7.02976 9.69861 6.70084 9.21627 7.35867 8.65356L11.6757 4.63418C12.1691 4.15185 12.6624 3.02642 10.6067 4.39301L4.85071 8.21145C4.85071 8.21145 4.19288 8.61337 2.95947 8.25164L0.287018 7.44775C0.287018 7.44775 -0.69973 6.84485 0.985963 6.24191C5.09741 4.35279 10.1545 2.42348 14.6359 0.614768Z",
                    fill: "currentColor"
                })
            })
        },
        86331: (e, t, a) => {
            "use strict";
            a.d(t, {
                R: () => i
            });
            var n = a(5552),
                r = a(78695),
                s = a(55435);
            let i = () => {
                let {
                    chains: e
                } = (0, r.Q)();
                return (0, s.A)((0, n.N)().swapsEnabled, null == e ? void 0 : e.swapsEnabled)
            }
        },
        92050: (e, t, a) => {
            "use strict";
            a.d(t, {
                AppNavigation: () => p
            });
            var n = a(96942),
                r = a(47931),
                s = a(14344),
                i = a(45002),
                l = a.n(i),
                o = a(78879),
                c = a(22735),
                d = a(86331),
                u = a(55435),
                m = a(14831);
            let p = e => {
                let {
                    className: t,
                    variant: a = "bar",
                    onNavigate: i
                } = e, p = (0, o.usePathname)(), g = (0, u.K)(m.f, (0, d.R)());
                return (0, n.jsx)("nav", {
                    "aria-label": "Main",
                    className: (0, s.cn)("menu" === a ? "flex flex-col gap-1" : "flex items-center gap-1", t),
                    children: g.map(e => {
                        let t = p === e.href;
                        return (0, n.jsx)(r.$, {
                            asChild: !0,
                            className: (0, s.cn)("rounded-full border border-transparent font-medium transition-all", "menu" === a ? "h-12 w-full justify-start px-4" : "h-9 px-4", t ? "border-primary/30 bg-primary/20 text-foreground shadow-sm hover:bg-primary/25" : "text-muted-foreground hover:bg-secondary hover:text-foreground"),
                            onClick: i,
                            size: "sm",
                            variant: "ghost",
                            children: (0, n.jsxs)(l(), {
                                "aria-current": t ? "page" : void 0,
                                href: e.href,
                                children: ["/gas" === e.href && (0, n.jsx)(c.B, {}), e.name]
                            })
                        }, e.href)
                    })
                })
            }
        },
        92868: (e, t, a) => {
            "use strict";
            a.d(t, {
                Dc: () => i,
                QR: () => l,
                aN: () => s,
                ej: () => r
            });
            var n = a(67622);
            let r = function (e, t) {
                    let a = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 6,
                        r = e < 0n,
                        s = r ? -e : e,
                        [i = "0", l = ""] = (0, n.J)(s, t).split("."),
                        o = l.slice(0, a).replace(/0+$/, "");
                    if (s > 0n && "0" === i && "" === o) return "".concat(r ? "-" : "", "<0.").concat("0".repeat(Math.max(a - 1, 0)), "1");
                    let c = i.replace(/\B(?=(\d{3})+(?!\d))/g, ",");
                    return "".concat(r ? "-" : "").concat(c).concat(o ? ".".concat(o) : "")
                },
                s = (e, t) => {
                    if (e <= 0n) return "0";
                    let a = e.toString().length - 3,
                        n = a > 0 ? 10n ** BigInt(a) : 1n;
                    return r((e + n / 2n) / n * n, t, t)
                },
                i = e => e.length > 12 ? "".concat(e.slice(0, 6), "…").concat(e.slice(-4)) : e,
                l = (e, t) => {
                    let a = e.trim().replace(/,/g, "");
                    if (!/^\d*\.?\d*$/.test(a) || "" === a || "." === a) return;
                    let [n = "0", r = ""] = a.split(".");
                    if (r.length > t) return;
                    let s = BigInt(n || "0") * 10n ** BigInt(t) + BigInt((r || "").padEnd(t, "0") || "0");
                    return s > 0n ? s : void 0
                }
        },
        94502: (e, t, a) => {
            "use strict";
            a.d(t, {
                a: () => s
            });
            var n = a(58622);
            let r = {
                sm: 640,
                md: 768,
                lg: 1024,
                xl: 1280,
                "2xl": 1536
            };

            function s() {
                let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "md",
                    [t, a] = (0, n.useState)(void 0);
                return (0, n.useLayoutEffect)(() => {
                    let t = r[e],
                        n = window.matchMedia("(max-width: ".concat(t - 1, "px)")),
                        s = () => {
                            a(window.innerWidth < t)
                        };
                    return n.addEventListener("change", s), a(window.innerWidth < t), () => n.removeEventListener("change", s)
                }, [e]), !!t
            }
        },
        98311: e => {
            e.exports = {
                mark: "brand-mark_mark__B6X8y"
            }
        },
        98489: (e, t, a) => {
            "use strict";
            a.d(t, {
                BT: () => o,
                Wu: () => c,
                ZB: () => l,
                Zp: () => s,
                aR: () => i,
                wL: () => d
            });
            var n = a(96942),
                r = a(14344);

            function s(e) {
                let {
                    className: t,
                    variant: a,
                    ...s
                } = e;
                return (0, n.jsx)("div", {
                    "data-slot": "card",
                    "data-variant": a,
                    className: (0, r.cn)("bg-card text-card-foreground flex flex-col gap-6 rounded-[22px] border border-[var(--nm-hairline)] py-6", "hero" === a && "nm-card-hero", t),
                    ...s
                })
            }

            function i(e) {
                let {
                    className: t,
                    ...a
                } = e;
                return (0, n.jsx)("div", {
                    "data-slot": "card-header",
                    className: (0, r.cn)("@container/card-header grid auto-rows-min grid-rows-[auto_auto] items-start gap-2 px-6 has-data-[slot=card-action]:grid-cols-[1fr_auto] [.border-b]:pb-6", t),
                    ...a
                })
            }

            function l(e) {
                let {
                    className: t,
                    ...a
                } = e;
                return (0, n.jsx)("div", {
                    "data-slot": "card-title",
                    className: (0, r.cn)("leading-none font-semibold", t),
                    ...a
                })
            }

            function o(e) {
                let {
                    className: t,
                    ...a
                } = e;
                return (0, n.jsx)("div", {
                    "data-slot": "card-description",
                    className: (0, r.cn)("text-muted-foreground text-sm", t),
                    ...a
                })
            }

            function c(e) {
                let {
                    className: t,
                    ...a
                } = e;
                return (0, n.jsx)("div", {
                    "data-slot": "card-content",
                    className: (0, r.cn)("px-6", t),
                    ...a
                })
            }

            function d(e) {
                let {
                    className: t,
                    ...a
                } = e;
                return (0, n.jsx)("div", {
                    "data-slot": "card-footer",
                    className: (0, r.cn)("flex items-center px-6 [.border-t]:pt-6", t),
                    ...a
                })
            }
        }
    }
]);