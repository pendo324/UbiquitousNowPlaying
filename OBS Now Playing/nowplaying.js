var requirejs, require, define; !function (ba) { function G(e) { return "[object Function]" === K.call(e) } function H(e) { return "[object Array]" === K.call(e) } function v(e, t) { if (e) { var i; for (i = 0; i < e.length && (!e[i] || !t(e[i], i, e)) ; i += 1); } } function T(e, t) { if (e) { var i; for (i = e.length - 1; i > -1 && (!e[i] || !t(e[i], i, e)) ; i -= 1); } } function t(e, t) { return fa.call(e, t) } function m(e, i) { return t(e, i) && e[i] } function B(e, i) { for (var n in e) if (t(e, n) && i(e[n], n)) break } function U(e, i, n, r) { return i && B(i, function (i, o) { (n || !t(e, o)) && (!r || "object" != typeof i || !i || H(i) || G(i) || i instanceof RegExp ? e[o] = i : (e[o] || (e[o] = {}), U(e[o], i, n, r))) }), e } function u(e, t) { return function () { return t.apply(e, arguments) } } function ca(e) { throw e } function da(e) { if (!e) return e; var t = ba; return v(e.split("."), function (e) { t = t[e] }), t } function C(e, t, i, n) { return t = Error(t + "\nhttp://requirejs.org/docs/errors.html#" + e), t.requireType = e, t.requireModules = n, i && (t.originalError = i), t } function ga(e) { function i(e, t, i) { var n, r, o, a, s, u, d, c, t = t && t.split("/"), f = D.map, p = f && f["*"]; if (e) { for (e = e.split("/"), r = e.length - 1, D.nodeIdCompat && Q.test(e[r]) && (e[r] = e[r].replace(Q, "")), "." === e[0].charAt(0) && t && (r = t.slice(0, t.length - 1), e = r.concat(e)), r = e, o = 0; o < r.length; o++) a = r[o], "." === a ? (r.splice(o, 1), o -= 1) : ".." === a && 0 !== o && (1 !== o || ".." !== r[2]) && ".." !== r[o - 1] && o > 0 && (r.splice(o - 1, 2), o -= 2); e = e.join("/") } if (i && f && (t || p)) { r = e.split("/"), o = r.length; e: for (; o > 0; o -= 1) { if (s = r.slice(0, o).join("/"), t) for (a = t.length; a > 0; a -= 1) if ((i = m(f, t.slice(0, a).join("/"))) && (i = m(i, s))) { n = i, u = o; break e } !d && p && m(p, s) && (d = m(p, s), c = o) } !n && d && (n = d, u = c), n && (r.splice(0, u, n), e = r.join("/")) } return (n = m(D.pkgs, e)) ? n : e } function n(e) { z && v(document.getElementsByTagName("script"), function (t) { return t.getAttribute("data-requiremodule") === e && t.getAttribute("data-requirecontext") === k.contextName ? (t.parentNode.removeChild(t), !0) : void 0 }) } function r(e) { var t = m(D.paths, e); return t && H(t) && 1 < t.length ? (t.shift(), k.require.undef(e), k.makeRequire(null, { skipMap: !0 })([e]), !0) : void 0 } function o(e) { var t, i = e ? e.indexOf("!") : -1; return i > -1 && (t = e.substring(0, i), e = e.substring(i + 1, e.length)), [t, e] } function a(e, t, n, r) { var a, s, u = null, d = t ? t.name : null, c = e, f = !0, p = ""; return e || (f = !1, e = "_@r" + (J += 1)), e = o(e), u = e[0], e = e[1], u && (u = i(u, d, r), s = m(F, u)), e && (u ? p = s && s.normalize ? s.normalize(e, function (e) { return i(e, d, r) }) : -1 === e.indexOf("!") ? i(e, d, r) : e : (p = i(e, d, r), e = o(p), u = e[0], p = e[1], n = !0, a = k.nameToUrl(p))), n = !u || s || n ? "" : "_unnormalized" + (P += 1), { prefix: u, name: p, parentMap: t, unnormalized: !!n, url: a, originalName: c, isDefine: f, id: (u ? u + "!" + p : p) + n } } function s(e) { var t = e.id, i = m(w, t); return i || (i = w[t] = new k.Module(e)), i } function d(e, i, n) { var r = e.id, o = m(w, r); !t(F, r) || o && !o.defineEmitComplete ? (o = s(e), o.error && "error" === i ? n(o.error) : o.on(i, n)) : "defined" === i && n(F[r]) } function c(e, t) { var i = e.requireModules, n = !1; t ? t(e) : (v(i, function (t) { (t = m(w, t)) && (t.error = e, t.events.error && (n = !0, t.emit("error", e))) }), n || g.onError(e)) } function f() { R.length && (ha.apply(O, [O.length, 0].concat(R)), R = []) } function p(e) { delete w[e], delete A[e] } function l(e, t, i) { var n = e.map.id; e.error ? e.emit("error", e.error) : (t[n] = !0, v(e.depMaps, function (n, r) { var o = n.id, a = m(w, o); a && !e.depMatched[r] && !i[o] && (m(t, o) ? (e.defineDep(r, F[o]), e.check()) : l(a, t, i)) }), i[n] = !0) } function h() { var e, t, i = (e = 1e3 * D.waitSeconds) && k.startTime + e < (new Date).getTime(), o = [], a = [], s = !1, u = !0; if (!y) { if (y = !0, B(A, function (e) { var d = e.map, c = d.id; if (e.enabled && (d.isDefine || a.push(e), !e.error)) if (!e.inited && i) r(c) ? s = t = !0 : (o.push(c), n(c)); else if (!e.inited && e.fetched && d.isDefine && (s = !0, !d.prefix)) return u = !1 }), i && o.length) return e = C("timeout", "Load timeout for modules: " + o, null, o), e.contextName = k.contextName, c(e); u && v(a, function (e) { l(e, {}, {}) }), i && !t || !s || !z && !ea || S || (S = setTimeout(function () { S = 0, h() }, 50)), y = !1 } } function x(e) { t(F, e[0]) || s(a(e[0], null, !0)).init(e[1], e[2]) } function b(e) { var e = e.currentTarget || e.srcElement, t = k.onScriptLoad; return e.detachEvent && !Y ? e.detachEvent("onreadystatechange", t) : e.removeEventListener("load", t, !1), t = k.onScriptError, (!e.detachEvent || Y) && e.removeEventListener("error", t, !1), { node: e, id: e && e.getAttribute("data-requiremodule") } } function q() { var e; for (f() ; O.length;) { if (e = O.shift(), null === e[0]) return c(C("mismatch", "Mismatched anonymous define() module: " + e[e.length - 1])); x(e) } } var y, E, k, j, S, D = { waitSeconds: 7, baseUrl: "./", paths: {}, bundles: {}, pkgs: {}, shim: {}, config: {} }, w = {}, A = {}, L = {}, O = [], F = {}, I = {}, _ = {}, J = 1, P = 1; return j = { require: function (e) { return e.require ? e.require : e.require = k.makeRequire(e.map) }, exports: function (e) { return e.usingExports = !0, e.map.isDefine ? e.exports ? F[e.map.id] = e.exports : e.exports = F[e.map.id] = {} : void 0 }, module: function (e) { return e.module ? e.module : e.module = { id: e.map.id, uri: e.map.url, config: function () { return m(D.config, e.map.id) || {} }, exports: e.exports || (e.exports = {}) } } }, E = function (e) { this.events = m(L, e.id) || {}, this.map = e, this.shim = m(D.shim, e.id), this.depExports = [], this.depMaps = [], this.depMatched = [], this.pluginMaps = {}, this.depCount = 0 }, E.prototype = { init: function (e, t, i, n) { n = n || {}, this.inited || (this.factory = t, i ? this.on("error", i) : this.events.error && (i = u(this, function (e) { this.emit("error", e) })), this.depMaps = e && e.slice(0), this.errback = i, this.inited = !0, this.ignore = n.ignore, n.enabled || this.enabled ? this.enable() : this.check()) }, defineDep: function (e, t) { this.depMatched[e] || (this.depMatched[e] = !0, this.depCount -= 1, this.depExports[e] = t) }, fetch: function () { if (!this.fetched) { this.fetched = !0, k.startTime = (new Date).getTime(); var e = this.map; if (!this.shim) return e.prefix ? this.callPlugin() : this.load(); k.makeRequire(this.map, { enableBuildCallback: !0 })(this.shim.deps || [], u(this, function () { return e.prefix ? this.callPlugin() : this.load() })) } }, load: function () { var e = this.map.url; I[e] || (I[e] = !0, k.load(this.map.id, e)) }, check: function () { if (this.enabled && !this.enabling) { var e, t, i = this.map.id; t = this.depExports; var n = this.exports, r = this.factory; if (this.inited) { if (this.error) this.emit("error", this.error); else if (!this.defining) { if (this.defining = !0, 1 > this.depCount && !this.defined) { if (G(r)) { if (this.events.error && this.map.isDefine || g.onError !== ca) try { n = k.execCb(i, r, t, n) } catch (o) { e = o } else n = k.execCb(i, r, t, n); if (this.map.isDefine && void 0 === n && ((t = this.module) ? n = t.exports : this.usingExports && (n = this.exports)), e) return e.requireMap = this.map, e.requireModules = this.map.isDefine ? [this.map.id] : null, e.requireType = this.map.isDefine ? "define" : "require", c(this.error = e) } else n = r; this.exports = n, this.map.isDefine && !this.ignore && (F[i] = n, g.onResourceLoad) && g.onResourceLoad(k, this.map, this.depMaps), p(i), this.defined = !0 } this.defining = !1, this.defined && !this.defineEmitted && (this.defineEmitted = !0, this.emit("defined", this.exports), this.defineEmitComplete = !0) } } else this.fetch() } }, callPlugin: function () { var e = this.map, n = e.id, r = a(e.prefix); this.depMaps.push(r), d(r, "defined", u(this, function (r) { var o, f; f = m(_, this.map.id); var l = this.map.name, h = this.map.parentMap ? this.map.parentMap.name : null, v = k.makeRequire(e.parentMap, { enableBuildCallback: !0 }); this.map.unnormalized ? (r.normalize && (l = r.normalize(l, function (e) { return i(e, h, !0) }) || ""), r = a(e.prefix + "!" + l, this.map.parentMap), d(r, "defined", u(this, function (e) { this.init([], function () { return e }, null, { enabled: !0, ignore: !0 }) })), (f = m(w, r.id)) && (this.depMaps.push(r), this.events.error && f.on("error", u(this, function (e) { this.emit("error", e) })), f.enable())) : f ? (this.map.url = k.nameToUrl(f), this.load()) : (o = u(this, function (e) { this.init([], function () { return e }, null, { enabled: !0 }) }), o.error = u(this, function (e) { this.inited = !0, this.error = e, e.requireModules = [n], B(w, function (e) { 0 === e.map.id.indexOf(n + "_unnormalized") && p(e.map.id) }), c(e) }), o.fromText = u(this, function (i, r) { var u = e.name, d = a(u), f = M; r && (i = r), f && (M = !1), s(d), t(D.config, n) && (D.config[u] = D.config[n]); try { g.exec(i) } catch (p) { return c(C("fromtexteval", "fromText eval for " + n + " failed: " + p, p, [n])) } f && (M = !0), this.depMaps.push(d), k.completeLoad(u), v([u], o) }), r.load(e.name, v, o, D)) })), k.enable(r, this), this.pluginMaps[r.id] = r }, enable: function () { A[this.map.id] = this, this.enabling = this.enabled = !0, v(this.depMaps, u(this, function (e, i) { var n, r; if ("string" == typeof e) { if (e = a(e, this.map.isDefine ? this.map : this.map.parentMap, !1, !this.skipMap), this.depMaps[i] = e, n = m(j, e.id)) return void (this.depExports[i] = n(this)); this.depCount += 1, d(e, "defined", u(this, function (e) { this.undefed || (this.defineDep(i, e), this.check()) })), this.errback ? d(e, "error", u(this, this.errback)) : this.events.error && d(e, "error", u(this, function (e) { this.emit("error", e) })) } n = e.id, r = w[n], !t(j, n) && r && !r.enabled && k.enable(e, this) })), B(this.pluginMaps, u(this, function (e) { var t = m(w, e.id); t && !t.enabled && k.enable(e, this) })), this.enabling = !1, this.check() }, on: function (e, t) { var i = this.events[e]; i || (i = this.events[e] = []), i.push(t) }, emit: function (e, t) { v(this.events[e], function (e) { e(t) }), "error" === e && delete this.events[e] } }, k = { config: D, contextName: e, registry: w, defined: F, urlFetched: I, defQueue: O, Module: E, makeModuleMap: a, nextTick: g.nextTick, onError: c, configure: function (e) { e.baseUrl && "/" !== e.baseUrl.charAt(e.baseUrl.length - 1) && (e.baseUrl += "/"); var t = D.shim, i = { paths: !0, bundles: !0, config: !0, map: !0 }; B(e, function (e, t) { i[t] ? (D[t] || (D[t] = {}), U(D[t], e, !0, !0)) : D[t] = e }), e.bundles && B(e.bundles, function (e, t) { v(e, function (e) { e !== t && (_[e] = t) }) }), e.shim && (B(e.shim, function (e, i) { H(e) && (e = { deps: e }), !e.exports && !e.init || e.exportsFn || (e.exportsFn = k.makeShimExports(e)), t[i] = e }), D.shim = t), e.packages && v(e.packages, function (e) { var t, e = "string" == typeof e ? { name: e } : e; t = e.name, e.location && (D.paths[t] = e.location), D.pkgs[t] = e.name + "/" + (e.main || "main").replace(ia, "").replace(Q, "") }), B(w, function (e, t) { !e.inited && !e.map.unnormalized && (e.map = a(t, null, !0)) }), (e.deps || e.callback) && k.require(e.deps || [], e.callback) }, makeShimExports: function (e) { return function () { var t; return e.init && (t = e.init.apply(ba, arguments)), t || e.exports && da(e.exports) } }, makeRequire: function (r, o) { function u(i, n, d) { var f, p; return o.enableBuildCallback && n && G(n) && (n.__requireJsBuild = !0), "string" == typeof i ? G(n) ? c(C("requireargs", "Invalid require call"), d) : r && t(j, i) ? j[i](w[r.id]) : g.get ? g.get(k, i, r, u) : (f = a(i, r, !1, !0), f = f.id, t(F, f) ? F[f] : c(C("notloaded", 'Module name "' + f + '" has not been loaded yet for context: ' + e + (r ? "" : ". Use require([])")))) : (q(), k.nextTick(function () { q(), p = s(a(null, r)), p.skipMap = o.skipMap, p.init(i, n, d, { enabled: !0 }), h() }), u) } return o = o || {}, U(u, { isBrowser: z, toUrl: function (e) { var t, n = e.lastIndexOf("."), o = e.split("/")[0]; return -1 !== n && ("." !== o && ".." !== o || n > 1) && (t = e.substring(n, e.length), e = e.substring(0, n)), k.nameToUrl(i(e, r && r.id, !0), t, !0) }, defined: function (e) { return t(F, a(e, r, !1, !0).id) }, specified: function (e) { return e = a(e, r, !1, !0).id, t(F, e) || t(w, e) } }), r || (u.undef = function (e) { f(); var t = a(e, r, !0), i = m(w, e); i.undefed = !0, n(e), delete F[e], delete I[t.url], delete L[e], T(O, function (t, i) { t[0] === e && O.splice(i, 1) }), i && (i.events.defined && (L[e] = i.events), p(e)) }), u }, enable: function (e) { m(w, e.id) && s(e).enable() }, completeLoad: function (e) { var i, n, o = m(D.shim, e) || {}, a = o.exports; for (f() ; O.length;) { if (n = O.shift(), null === n[0]) { if (n[0] = e, i) break; i = !0 } else n[0] === e && (i = !0); x(n) } if (n = m(w, e), !i && !t(F, e) && n && !n.inited) { if (D.enforceDefine && (!a || !da(a))) return r(e) ? void 0 : c(C("nodefine", "No define call for " + e, null, [e])); x([e, o.deps || [], o.exportsFn]) } h() }, nameToUrl: function (e, t, i) { var n, r, o; if ((n = m(D.pkgs, e)) && (e = n), n = m(_, e)) return k.nameToUrl(n, t, i); if (g.jsExtRegExp.test(e)) n = e + (t || ""); else { for (n = D.paths, e = e.split("/"), r = e.length; r > 0; r -= 1) if (o = e.slice(0, r).join("/"), o = m(n, o)) { H(o) && (o = o[0]), e.splice(0, r, o); break } n = e.join("/"), n += t || (/^data\:|\?/.test(n) || i ? "" : ".js"), n = ("/" === n.charAt(0) || n.match(/^[\w\+\.\-]+:/) ? "" : D.baseUrl) + n } return D.urlArgs ? n + ((-1 === n.indexOf("?") ? "?" : "&") + D.urlArgs) : n }, load: function (e, t) { g.load(k, e, t) }, execCb: function (e, t, i, n) { return t.apply(n, i) }, onScriptLoad: function (e) { ("load" === e.type || ja.test((e.currentTarget || e.srcElement).readyState)) && (N = null, e = b(e), k.completeLoad(e.id)) }, onScriptError: function (e) { var t = b(e); return r(t.id) ? void 0 : c(C("scripterror", "Script error for: " + t.id, e, [t.id])) } }, k.require = k.makeRequire(), k } var g, x, y, D, I, E, N, J, s, O, ka = /(\/\*([\s\S]*?)\*\/|([^:]|^)\/\/(.*)$)/gm, la = /[^.]\s*require\s*\(\s*["']([^'"\s]+)["']\s*\)/g, Q = /\.js$/, ia = /^\.\//; x = Object.prototype; var K = x.toString, fa = x.hasOwnProperty, ha = Array.prototype.splice, z = !("undefined" == typeof window || "undefined" == typeof navigator || !window.document), ea = !z && "undefined" != typeof importScripts, ja = z && "PLAYSTATION 3" === navigator.platform ? /^complete$/ : /^(complete|loaded)$/, Y = "undefined" != typeof opera && "[object Opera]" === opera.toString(), F = {}, q = {}, R = [], M = !1; if ("undefined" == typeof define) { if ("undefined" != typeof requirejs) { if (G(requirejs)) return; q = requirejs, requirejs = void 0 } "undefined" != typeof require && !G(require) && (q = require, require = void 0), g = requirejs = function (e, t, i, n) { var r, o = "_"; return !H(e) && "string" != typeof e && (r = e, H(t) ? (e = t, t = i, i = n) : e = []), r && r.context && (o = r.context), (n = m(F, o)) || (n = F[o] = g.s.newContext(o)), r && n.configure(r), n.require(e, t, i) }, g.config = function (e) { return g(e) }, g.nextTick = "undefined" != typeof setTimeout ? function (e) { setTimeout(e, 4) } : function (e) { e() }, require || (require = g), g.version = "2.1.18", g.jsExtRegExp = /^\/|:|\?|\.js$/, g.isBrowser = z, x = g.s = { contexts: F, newContext: ga }, g({}), v(["toUrl", "undef", "defined", "specified"], function (e) { g[e] = function () { var t = F._; return t.require[e].apply(t, arguments) } }), z && (y = x.head = document.getElementsByTagName("head")[0], D = document.getElementsByTagName("base")[0]) && (y = x.head = D.parentNode), g.onError = ca, g.createNode = function (e) { var t = e.xhtml ? document.createElementNS("http://www.w3.org/1999/xhtml", "html:script") : document.createElement("script"); return t.type = e.scriptType || "text/javascript", t.charset = "utf-8", t.async = !0, t }, g.load = function (e, t, i) { var n = e && e.config || {}; if (z) return n = g.createNode(n, t, i), n.setAttribute("data-requirecontext", e.contextName), n.setAttribute("data-requiremodule", t), !n.attachEvent || n.attachEvent.toString && 0 > n.attachEvent.toString().indexOf("[native code") || Y ? (n.addEventListener("load", e.onScriptLoad, !1), n.addEventListener("error", e.onScriptError, !1)) : (M = !0, n.attachEvent("onreadystatechange", e.onScriptLoad)), n.src = i, J = n, D ? y.insertBefore(n, D) : y.appendChild(n), J = null, n; if (ea) try { importScripts(i), e.completeLoad(t) } catch (r) { e.onError(C("importscripts", "importScripts failed for " + t + " at " + i, r, [t])) } }, z && !q.skipDataMain && T(document.getElementsByTagName("script"), function (e) { return y || (y = e.parentNode), (I = e.getAttribute("data-main")) ? (s = I, q.baseUrl || (E = s.split("/"), s = E.pop(), O = E.length ? E.join("/") + "/" : "./", q.baseUrl = O), s = s.replace(Q, ""), g.jsExtRegExp.test(s) && (s = I), q.deps = q.deps ? q.deps.concat(s) : [s], !0) : void 0 }), define = function (e, t, i) { var n, r; "string" != typeof e && (i = t, t = e, e = null), H(t) || (i = t, t = null), !t && G(i) && (t = [], i.length && (i.toString().replace(ka, "").replace(la, function (e, i) { t.push(i) }), t = (1 === i.length ? ["require"] : ["require", "exports", "module"]).concat(t))), M && ((n = J) || (N && "interactive" === N.readyState || T(document.getElementsByTagName("script"), function (e) { return "interactive" === e.readyState ? N = e : void 0 }), n = N), n && (e || (e = n.getAttribute("data-requiremodule")), r = F[n.getAttribute("data-requirecontext")])), (r ? r.defQueue : R).push([e, t, i]) }, define.amd = { jQuery: !0 }, g.exec = function (b) { return eval(b) }, g(q) } }(this);

"use strict";
var player;
var interval;
var players;
var supported;

require.config({
    paths: {
        "jquery": "//ajax.googleapis.com/ajax/libs/jquery/1.7.2/jquery.min"
    }
});

require(['jquery'], function () {
    var $ = window.jQuery;

    supported = false;

    players = {
        "pandora": pandora,
        "play": play,
        "spotify": spotify,
        "soundcloud": soundcloud,
        "youtube": youtube
    };

    function pandora() {
        var songTitle = "";
        var wp = "Pandora";

        return {
            song: songTitle,
            webPlayer: wp
        }
    }

    function play() {
        var artist = $("#player-artist").text();
        var song = $("#player-song-title").text();
        var songTitle = artist + " - " + song;
        var wp = "Google Play";

        return {
            song: songTitle,
            webPlayer: wp
        };
    }

    function spotify() {
        var artist = $("#track-name:nth-child(1)").text();
        var song = "";
        var songTitle = "";
        var wp = "";

        return {
            song: songTitle,
            webPlayer: wp
        }
    }

    function soundcloud() {
        var songTitle = $('.playbackSoundBadge__title').title;
        var wp = "SoundCloud";

        console.log(songTitle);

        return {
            song: songTitle,
            webPlayer: wp
        }
    }

    function youtube() {
        var songTitle = $('#eow-title').text();
        var wp = "YouTube";
        var song = songTitle; //unfortunately there is no good way to
        return {              //determine an 'artists' or songName here
            song: songTitle,
            webPlayer: wp
        };
    }

    // sets the song variable, send it to localhost and makes the 
    // appropriate changes to the html object(s)
    // TODO: add the html shit
    function setSong() {
        var song = player();
        console.log(song.song);
        if (song.song !== '') {
            $('.NowPlayingBody').text(song.song);
            sendLocalPOST(song.webPlayer, song.song);
        }
        else {
            $('.NowPlayingBody').text("No song playing");
        }
    }

    function init() {
        if ($('.NowPlayingContainer').length > 0) {
            return;
        }
        addHTML();
        checkSupport();
        if (supported) {
            $('.NowPlayingButton').click(function () {
                if ($('.NowPlayingButton').text() == 'Start') {
                    $('.NowPlayingButton').text('Stop');
                    start();
                }
                else if ($('.NowPlayingButton').text() == 'Stop') {
                    $('.NowPlayingButton').text('Start');
                    stop();
                }
            });
        }
    }

    function start() {
        setSong();
        interval = setInterval(setSong, 2000);
    }

    function stop() {
        if (interval != null) {
            clearInterval(interval);
        }
    }

    function checkSupport() {
        var website = window.location.host;

        for (var p in players) {
            if (!~website.indexOf(p)) {
                player = players[p];
                $('.NowPlayingSupported').text(website + ' is supported!').css('color', 'green');
                supported = true;
            }
            else {
                supported = false;
            }
        }
        if (supported == false) {
            $('.NowPlayingSupported').text(website).append(' <a href="https://github.com/pendo324/OBS-Now-Playing">is not supported.</a>').css('color', 'red');
        }
    }

    function addHTML() {
        var html = "<div class=NowPlayingContainer><style>.NowPlayingContainer{background-color:#343434;border:2px solid #3c3c3c;color:#f5f5f5;position:fixed;bottom:30px;right:30px;width:300px;height:100px}.NowPlayingHeader{margin:10px;line-height:18px;font-family:arial;font-size:16px}.NowPlayingBody{margin-top:15px;margin-left:10px;line-height:16px;font-family:arial;font-size:14px}.NowPlayingSupported{margin-left:65px;margin-top:-20px;line-height:16px;font-family:arial;font-size:14px}.NowPlayingSupported a:link{color:#09F}.NowPlayingSupported a:visited{color: #CC0099;}.NowPlayingButton{margin-left:10px;line-height:16px;font-family:arial;font-size:14px}</style><div><div class=NowPlayingHeader>OBS Now Playing</div><button class=NowPlayingButton>Start</button><div class=NowPlayingSupported></div><div class=NowPlayingBody></div></div></div>";
        $('body').append(html);
    }

    function sendLocalPOST(player, song) {
        var url = "http://localhost:13337/";

        $.ajax({
            type: "POST",
            crossdomain: true,
            contentType: "application/json; charset=utf-8",
            url: url,
            dataType: "json",
            data: { 'song': song.title },
            success: function (data) {
            }
        });
    }
    init();

});
