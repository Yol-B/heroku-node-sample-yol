! function(e, t) { "object" == typeof exports && "object" == typeof module ? module.exports = t() : "function" == typeof define && define.amd ? define([], t) : "object" == typeof exports ? exports._vantaEffect = t() : e._vantaEffect = t() }("undefined" != typeof self ? self : this, function() {
    return function(e) {
        var t = {};

        function i(n) { if (t[n]) return t[n].exports; var o = t[n] = { i: n, l: !1, exports: {} }; return e[n].call(o.exports, o, o.exports, i), o.l = !0, o.exports }
        return i.m = e, i.c = t, i.d = function(e, t, n) { i.o(e, t) || Object.defineProperty(e, t, { enumerable: !0, get: n }) }, i.r = function(e) { "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, { value: "Module" }), Object.defineProperty(e, "__esModule", { value: !0 }) }, i.t = function(e, t) {
            if (1 & t && (e = i(e)), 8 & t) return e;
            if (4 & t && "object" == typeof e && e && e.__esModule) return e;
            var n = Object.create(null);
            if (i.r(n), Object.defineProperty(n, "default", { enumerable: !0, value: e }), 2 & t && "string" != typeof e)
                for (var o in e) i.d(n, o, function(t) { return e[t] }.bind(null, o));
            return n
        }, i.n = function(e) { var t = e && e.__esModule ? function() { return e.default } : function() { return e }; return i.d(t, "a", t), t }, i.o = function(e, t) { return Object.prototype.hasOwnProperty.call(e, t) }, i.p = "", i(i.s = 17)
    }({
        0: function(e, t, i) {
            "use strict";

            function n(e, t) { for (var i in t) t.hasOwnProperty(i) && (e[i] = t[i]); return e }

            function o() { return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) || window.innerWidth < 600 }
            i.d(t, "c", function() { return n }), i.d(t, "d", function() { return o }), i.d(t, "h", function() { return r }), i.d(t, "g", function() { return s }), i.d(t, "f", function() { return a }), i.d(t, "e", function() { return l }), i.d(t, "a", function() { return h }), i.d(t, "b", function() { return c }), Number.prototype.clamp = function(e, t) { return Math.min(Math.max(this, e), t) };
            const r = e => e[Math.floor(Math.random() * e.length)];

            function s(e, t) { return null == e && (e = 0), null == t && (t = 1), e + Math.random() * (t - e) }

            function a(e, t) { return null == e && (e = 0), null == t && (t = 1), Math.floor(e + Math.random() * (t - e + 1)) }
            var l = e => document.querySelector(e);
            const h = e => "number" == typeof e ? "#" + ("00000" + e.toString(16)).slice(-6) : e,
                c = (e, t = 1) => {
                    const i = h(e),
                        n = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(i),
                        o = n ? { r: parseInt(n[1], 16), g: parseInt(n[2], 16), b: parseInt(n[3], 16) } : null;
                    return "rgba(" + o.r + "," + o.g + "," + o.b + "," + t + ")"
                }
        },
        1: function(e, t, i) {
            "use strict";
            i.d(t, "a", function() { return s });
            var n = i(0);
            const o = "object" == typeof window,
                r = o && window.THREE || {};
            o && !window.VANTA && (window.VANTA = {});
            const s = o && window.VANTA || {};
            s.register = (e, t) => s[e] = e => new t(e), s.version = "0.5.1";
            var a = function() { return Array.prototype.unshift.call(arguments, "[VANTA]"), console.error.apply(this, arguments) };
            s.VantaBase = class {
                constructor(e = {}) {
                    if (!o) return !1;
                    var t, i, l, h;
                    if (s.current = this, this.windowMouseMoveWrapper = this.windowMouseMoveWrapper.bind(this), this.windowTouchWrapper = this.windowTouchWrapper.bind(this), this.resize = this.resize.bind(this), this.animationLoop = this.animationLoop.bind(this), this.restart = this.restart.bind(this), this.options = Object(n.c)({}, this.defaultOptions), e instanceof HTMLElement || "string" == typeof e ? Object(n.c)(this.options, { el: e }) : Object(n.c)(this.options, e), this.el = this.options.el, null == this.el) a('Instance needs "el" param!');
                    else if (!(this.options.el instanceof HTMLElement || (h = this.el, this.el = Object(n.e)(h), this.el))) return void a("Cannot find element", h);
                    for (l = 0; l < this.el.children.length; l++) t = this.el.children[l], "static" === getComputedStyle(t).position && (t.style.position = "relative"), "auto" === getComputedStyle(t).zIndex && (t.style.zIndex = 1);
                    "static" === getComputedStyle(this.el).position && (this.el.style.position = "relative"), this.initThree(), this.setSize(), this.uniforms = { u_time: { type: "f", value: 1 }, u_resolution: { type: "v2", value: new r.Vector2(1, 1) }, u_mouse: { type: "v2", value: new r.Vector2(0, 0) } };
                    try { this.init() } catch (e) { return i = e, a("Init error"), a(i), this.el.removeChild(this.renderer.domElement), void(this.options.backgroundColor && (console.log("[VANTA] Falling back to backgroundColor"), this.el.style.background = Object(n.a)(this.options.backgroundColor))) }
                    window.addEventListener("resize", this.resize), this.resize(), this.animationLoop(), window.addEventListener("scroll", this.windowMouseMoveWrapper), window.addEventListener("mousemove", this.windowMouseMoveWrapper), window.addEventListener("touchstart", this.windowTouchWrapper), window.addEventListener("touchmove", this.windowTouchWrapper)
                }
                applyCanvasStyles(e, t = {}) { Object(n.c)(e.style, { position: "absolute", zIndex: 0, top: 0, left: 0, background: "" }), Object(n.c)(e.style, t), e.classList.add("vanta-canvas") }
                initThree() { r.WebGLRenderer ? (this.renderer = new r.WebGLRenderer({ alpha: !0, antialias: !0 }), this.el.appendChild(this.renderer.domElement), this.applyCanvasStyles(this.renderer.domElement), isNaN(this.options.backgroundAlpha) && (this.options.backgroundAlpha = 1), this.scene = new r.Scene) : console.warn("[VANTA] No THREE defined on window") }
                windowMouseMoveWrapper(e) {
                    const t = this.renderer.domElement.getBoundingClientRect(),
                        i = e.clientX - t.left,
                        n = e.clientY - t.top;
                    i >= 0 && n >= 0 && i <= t.width && n <= t.height && (this.mouseX = i, this.mouseY = n, this.options.mouseEase || this.triggerMouseMove(i, n))
                }
                windowTouchWrapper(e) {
                    if (1 === e.touches.length) {
                        const t = this.renderer.domElement.getBoundingClientRect(),
                            i = e.touches[0].clientX - t.left,
                            n = e.touches[0].clientY - t.top;
                        i >= 0 && n >= 0 && i <= t.width && n <= t.height && (this.mouseX = i, this.mouseY = n, this.options.mouseEase || this.triggerMouseMove(i, n))
                    }
                }
                triggerMouseMove(e, t) {
                    this.uniforms && (this.uniforms.u_mouse.value.x = e / this.scale, this.uniforms.u_mouse.value.y = t / this.scale);
                    const i = e / this.width,
                        n = t / this.height;
                    "function" == typeof this.onMouseMove && this.onMouseMove(i, n)
                }
                setSize() { this.scale || (this.scale = 1), Object(n.d)() && this.options.scaleMobile ? this.scale = this.options.scaleMobile : this.options.scale && (this.scale = this.options.scale), this.width = this.el.offsetWidth || window.innerWidth, this.height = this.el.offsetHeight || window.innerHeight }
                resize() {
                    var e, t;
                    this.setSize(), null != (e = this.camera) && (e.aspect = this.width / this.height), null != (t = this.camera) && "function" == typeof t.updateProjectionMatrix && t.updateProjectionMatrix(), this.renderer && (this.renderer.setSize(this.width, this.height), this.renderer.setPixelRatio(window.devicePixelRatio / this.scale)), "function" == typeof this.onResize && this.onResize()
                }
                animationLoop() { var e, t, i, n, o, r; return this.t || (this.t = 0), this.t += 1, this.t2 || (this.t2 = 0), this.t2 += this.options.speed || 1, this.uniforms && (this.uniforms.u_time.value = .016667 * this.t2), e = this.el.offsetHeight, t = this.el.getBoundingClientRect(), r = window.pageYOffset || (document.documentElement || document.body.parentNode || document.body).scrollTop, n = (o = t.top + r) - window.innerHeight, i = o + e, this.options.mouseEase && (this.mouseEaseX = this.mouseEaseX || this.mouseX || 0, this.mouseEaseY = this.mouseEaseY || this.mouseY || 0, Math.abs(this.mouseEaseX - this.mouseX) + Math.abs(this.mouseEaseY - this.mouseY) > .1 && (this.mouseEaseX = this.mouseEaseX + .05 * (this.mouseX - this.mouseEaseX), this.mouseEaseY = this.mouseEaseY + .05 * (this.mouseY - this.mouseEaseY), this.triggerMouseMove(this.mouseEaseX, this.mouseEaseY))), n <= r && r <= i && ("function" == typeof this.onUpdate && this.onUpdate(), this.scene && this.camera && (this.renderer.render(this.scene, this.camera), this.renderer.setClearColor(this.options.backgroundColor, this.options.backgroundAlpha)), this.fps && this.fps.update && this.fps.update()), this.req = window.requestAnimationFrame(this.animationLoop) }
                restart() {
                    if (this.scene)
                        for (; this.scene.children.length;) this.scene.remove(this.scene.children[0]);
                    "function" == typeof this.onRestart && this.onRestart(), this.init()
                }
                init() { "function" == typeof this.onInit && this.onInit() }
                destroy() { "function" == typeof this.onDestroy && this.onDestroy(), window.removeEventListener("touchstart", this.windowTouchWrapper), window.removeEventListener("touchmove", this.windowTouchWrapper), window.removeEventListener("scroll", this.windowMouseMoveWrapper), window.removeEventListener("mousemove", this.windowMouseMoveWrapper), window.removeEventListener("resize", this.resize), window.cancelAnimationFrame(this.req), this.renderer && (this.el.removeChild(this.renderer.domElement), this.renderer = null, this.scene = null) }
            }, t.b = s.VantaBase
        },
        17: function(e, t, i) {
            "use strict";
            i.r(t);
            var n = i(1),
                o = i(0);

            function r(e, t, i) {
                this.variables = [], this.currentTextureIndex = 0;
                var n = new THREE.Scene,
                    o = new THREE.Camera;
                o.position.z = 1;
                var r = { texture: { value: null } },
                    s = h("uniform sampler2D texture;\n\nvoid main() {\n\n\tvec2 uv = gl_FragCoord.xy / resolution.xy;\n\n\tgl_FragColor = texture2D( texture, uv );\n\n}\n", r),
                    a = new THREE.Mesh(new THREE.PlaneBufferGeometry(2, 2), s);

                function l(i) { i.defines.resolution = "vec2( " + e.toFixed(1) + ", " + t.toFixed(1) + " )" }

                function h(e, t) { t = t || {}; var i = new THREE.ShaderMaterial({ uniforms: t, vertexShader: "void main()\t{\n\n\tgl_Position = vec4( position, 1.0 );\n\n}\n", fragmentShader: e }); return l(i), i }
                n.add(a), this.addVariable = function(e, t, i) { var n = { name: e, initialValueTexture: i, material: this.createShaderMaterial(t), dependencies: null, renderTargets: [], wrapS: null, wrapT: null, minFilter: THREE.NearestFilter, magFilter: THREE.NearestFilter }; return this.variables.push(n), n }, this.setVariableDependencies = function(e, t) { e.dependencies = t }, this.init = function() {
                    if (!i.extensions.get("OES_texture_float")) return "No OES_texture_float support for float textures.";
                    if (0 === i.capabilities.maxVertexTextures) return "No support for vertex shader textures.";
                    for (var n = 0; n < this.variables.length; n++) {
                        var o = this.variables[n];
                        o.renderTargets[0] = this.createRenderTarget(e, t, o.wrapS, o.wrapT, o.minFilter, o.magFilter), o.renderTargets[1] = this.createRenderTarget(e, t, o.wrapS, o.wrapT, o.minFilter, o.magFilter), this.renderTexture(o.initialValueTexture, o.renderTargets[0]), this.renderTexture(o.initialValueTexture, o.renderTargets[1]);
                        var r = o.material,
                            s = r.uniforms;
                        if (null !== o.dependencies)
                            for (var a = 0; a < o.dependencies.length; a++) {
                                var l = o.dependencies[a];
                                if (l.name !== o.name) {
                                    for (var h = !1, c = 0; c < this.variables.length; c++)
                                        if (l.name === this.variables[c].name) { h = !0; break }
                                    if (!h) return "Variable dependency not found. Variable=" + o.name + ", dependency=" + l.name
                                }
                                s[l.name] = { value: null }, r.fragmentShader = "\nuniform sampler2D " + l.name + ";\n" + r.fragmentShader
                            }
                    }
                    return this.currentTextureIndex = 0, null
                }, this.compute = function() {
                    for (var e = this.currentTextureIndex, t = 0 === this.currentTextureIndex ? 1 : 0, i = 0, n = this.variables.length; i < n; i++) {
                        var o = this.variables[i];
                        if (null !== o.dependencies)
                            for (var r = o.material.uniforms, s = 0, a = o.dependencies.length; s < a; s++) {
                                var l = o.dependencies[s];
                                r[l.name].value = l.renderTargets[e].texture
                            }
                        this.doRenderTarget(o.material, o.renderTargets[t])
                    }
                    this.currentTextureIndex = t
                }, this.getCurrentRenderTarget = function(e) { return e.renderTargets[this.currentTextureIndex] }, this.getAlternateRenderTarget = function(e) { return e.renderTargets[0 === this.currentTextureIndex ? 1 : 0] }, this.addResolutionDefine = l, this.createShaderMaterial = h, this.createRenderTarget = function(i, n, o, r, s, a) { return i = i || e, n = n || t, o = o || THREE.ClampToEdgeWrapping, r = r || THREE.ClampToEdgeWrapping, s = s || THREE.NearestFilter, a = a || THREE.NearestFilter, new THREE.WebGLRenderTarget(i, n, { wrapS: o, wrapT: r, minFilter: s, magFilter: a, format: THREE.RGBAFormat, type: /(iPad|iPhone|iPod)/g.test(navigator.userAgent) ? THREE.HalfFloatType : THREE.FloatType, stencilBuffer: !1 }) }, this.createTexture = function(i, n) {
                    i = i || e, n = n || t;
                    var o = new Float32Array(i * n * 4),
                        r = new THREE.DataTexture(o, e, t, THREE.RGBAFormat, THREE.FloatType);
                    return r.needsUpdate = !0, r
                }, this.renderTexture = function(e, t) { r.texture.value = e, this.doRenderTarget(s, t), r.texture.value = null }, this.doRenderTarget = function(e, t) { a.material = e, i.render(n, o, t), a.material = s }
            }
            const s = "object" == typeof window && window.THREE || {},
                a = !Object(o.d)();
            let l = 32,
                h = l * l;
            const c = 800,
                u = c / 2;
            var d = function(e = {}) {
                var t = this;

                function i(i, n, o) {
                    const r = 1.5 * (e.birdSize || 1);
                    t.vertices.push(new s.Vector3(i * r, n * r, o * r))
                }

                function n(e, i, n) { t.faces.push(new s.Face3(e, i, n)) }
                s.Geometry.call(this), i(5, 0, 0), i(-5, -1, 1), i(-5, 0, 0), i(-5, -2, -1), i(0, 2, -6), i(0, 2, 6), i(2, 0, 0), i(-3, 0, 0), n(0, 2, 1), n(4, 7, 6), n(5, 6, 7), this.computeFaceNormals()
            };
            d.prototype = Object.create(s.Geometry.prototype);
            var p = function(e) {
                var t, i, n = new s.Vector3,
                    o = 500,
                    r = 500,
                    a = 200,
                    l = e;
                this.position = new s.Vector3, this.velocity = new s.Vector3, t = new s.Vector3, this.setGoal = function(e) { i = e }, this.setWorldSize = function(e, t, i) { o = e, r = t, a = i }, this.run = function(e) { n.set(-o, this.position.y, this.position.z), (n = this.avoid(n)).multiplyScalar(5), t.add(n), n.set(o, this.position.y, this.position.z), (n = this.avoid(n)).multiplyScalar(5), t.add(n), n.set(this.position.x, -r, this.position.z), (n = this.avoid(n)).multiplyScalar(5), t.add(n), n.set(this.position.x, r, this.position.z), (n = this.avoid(n)).multiplyScalar(5), t.add(n), n.set(this.position.x, this.position.y, -a), (n = this.avoid(n)).multiplyScalar(5), t.add(n), n.set(this.position.x, this.position.y, a), (n = this.avoid(n)).multiplyScalar(5), t.add(n), Math.random() > .5 && this.flock(e), this.move() }, this.flock = function(e) { i && t.add(this.reach(i, .005)), t.add(this.alignment(e)), t.add(this.cohesion(e)), t.add(this.separation(e)) }, this.move = function() {
                    this.velocity.add(t);
                    var e = this.velocity.length();
                    e > 2.5 && this.velocity.divideScalar(e / 2.5), this.position.add(this.velocity), t.set(0, 0, 0)
                }, this.checkBounds = function() { this.position.x > o && (this.position.x = -o), this.position.x < -o && (this.position.x = o), this.position.y > r && (this.position.y = -r), this.position.y < -r && (this.position.y = r), this.position.z > a && (this.position.z = -a), this.position.z < -a && (this.position.z = a) }, this.avoid = function(e) { var t = new s.Vector3; return t.copy(this.position), t.sub(e), t.multiplyScalar(1 / this.position.distanceToSquared(e)), t }, this.repulse = function(e) {
                    var i = this.position.distanceTo(e);
                    if (i < 150) {
                        var n = new s.Vector3;
                        n.subVectors(this.position, e), n.multiplyScalar(.5 / i), t.add(n)
                    }
                }, this.reach = function(e, t) { var i = new s.Vector3; return i.subVectors(e, this.position), i.multiplyScalar(t), i }, this.alignment = function(e) {
                    var t, i, n = new s.Vector3,
                        o = 0;
                    const r = 100 * l.alignment / 20;
                    for (var a = 0, h = e.length; a < h; a++) Math.random() > .6 || (i = (t = e[a]).position.distanceTo(this.position)) > 0 && i <= r && (n.add(t.velocity), o++);
                    if (o > 0) {
                        n.divideScalar(o);
                        var c = n.length();
                        c > .1 && n.divideScalar(c / .1)
                    }
                    return n
                }, this.cohesion = function(e) {
                    var t, i, n = new s.Vector3,
                        o = new s.Vector3,
                        r = 0;
                    const a = 100 * l.cohesion / 20;
                    for (var h = 0, c = e.length; h < c; h++) Math.random() > .6 || (i = (t = e[h]).position.distanceTo(this.position)) > 0 && i <= a && (n.add(t.position), r++);
                    r > 0 && n.divideScalar(r), o.subVectors(n, this.position);
                    var u = o.length();
                    return u > .1 && o.divideScalar(u / .1), o
                }, this.separation = function(e) {
                    var t, i, n = new s.Vector3,
                        o = new s.Vector3;
                    const r = 100 * l.separation / 20;
                    for (var a = 0, h = e.length; a < h; a++) Math.random() > .6 || (i = (t = e[a]).position.distanceTo(this.position)) > 0 && i <= r && (o.subVectors(this.position, t.position), o.normalize(), o.divideScalar(i), n.add(o));
                    return n
                }
            };
            const f = "uniform float time;\nuniform float delta;\n\nvoid main() {\n\n  vec2 uv = gl_FragCoord.xy / resolution.xy;\n  vec4 tmpPos = texture2D( texturePosition, uv );\n  vec3 position = tmpPos.xyz;\n  vec3 velocity = texture2D( textureVelocity, uv ).xyz;\n\n  float phase = tmpPos.w;\n\n  phase = mod( ( phase + delta +\n    length( velocity.xz ) * delta * 3. +\n    max( velocity.y, 0.0 ) * delta * 6. ), 62.83 );\n\n  gl_FragColor = vec4( position + velocity * delta * 15. , phase );\n\n}",
                m = "uniform float time;\nuniform float testing;\nuniform float delta; // about 0.016\nuniform float separationDistance; // 20\nuniform float alignmentDistance; // 40\nuniform float cohesionDistance;\nuniform float speedLimit;\nuniform float freedomFactor;\nuniform vec3 predator;\n\nconst float width = resolution.x;\nconst float height = resolution.y;\n\nconst float PI = 3.141592653589793;\nconst float PI_2 = PI * 2.0;\n// const float VISION = PI * 0.55;\n\nfloat zoneRadius = 40.0;\nfloat zoneRadiusSquared = 1600.0;\n\nfloat separationThresh = 0.45;\nfloat alignmentThresh = 0.65;\n\nconst float UPPER_BOUNDS = BOUNDS;\nconst float LOWER_BOUNDS = -UPPER_BOUNDS;\n\nfloat rand(vec2 co){\n  return fract(sin(dot(co.xy ,vec2(12.9898,78.233))) * 43758.5453);\n}\n\nvoid main() {\n\n  zoneRadius = separationDistance + alignmentDistance + cohesionDistance;\n  separationThresh = separationDistance / zoneRadius;\n  alignmentThresh = ( separationDistance + alignmentDistance ) / zoneRadius;\n  zoneRadiusSquared = zoneRadius * zoneRadius;\n\n\n  vec2 uv = gl_FragCoord.xy / resolution.xy;\n  vec3 birdPosition, birdVelocity;\n\n  vec3 selfPosition = texture2D( texturePosition, uv ).xyz;\n  vec3 selfVelocity = texture2D( textureVelocity, uv ).xyz;\n\n  float dist;\n  vec3 dir; // direction\n  float distSquared;\n\n  float separationSquared = separationDistance * separationDistance;\n  float cohesionSquared = cohesionDistance * cohesionDistance;\n\n  float f;\n  float percent;\n\n  vec3 velocity = selfVelocity;\n\n  float limit = speedLimit;\n\n  dir = predator * UPPER_BOUNDS - selfPosition;\n  dir.z = 0.;\n  // dir.z *= 0.6;\n  dist = length( dir );\n  distSquared = dist * dist;\n\n  float preyRadius = 150.0;\n  float preyRadiusSq = preyRadius * preyRadius;\n\n  // move birds away from predator\n  if (dist < preyRadius) {\n\n    f = ( distSquared / preyRadiusSq - 1.0 ) * delta * 100.;\n    velocity += normalize( dir ) * f;\n    limit += 5.0;\n  }\n\n  // if (testing == 0.0) {}\n  // if ( rand( uv + time ) < freedomFactor ) {}\n\n  // Attract flocks to the center\n  vec3 central = vec3( 0., 0., 0. );\n  dir = selfPosition - central;\n  dist = length( dir );\n\n  dir.y *= 2.5;\n  velocity -= normalize( dir ) * delta * 5.;\n\n  for (float y=0.0;y<height;y++) {\n    for (float x=0.0;x<width;x++) {\n\n      vec2 ref = vec2( x + 0.5, y + 0.5 ) / resolution.xy;\n      birdPosition = texture2D( texturePosition, ref ).xyz;\n\n      dir = birdPosition - selfPosition;\n      dist = length(dir);\n\n      if (dist < 0.0001) continue;\n\n      distSquared = dist * dist;\n\n      if (distSquared > zoneRadiusSquared ) continue;\n\n      percent = distSquared / zoneRadiusSquared;\n\n      if ( percent < separationThresh ) { // low\n\n        // Separation - Move apart for comfort\n        f = (separationThresh / percent - 1.0) * delta;\n        velocity -= normalize(dir) * f;\n\n      } else if ( percent < alignmentThresh ) { // high\n\n        // Alignment - fly the same direction\n        float threshDelta = alignmentThresh - separationThresh;\n        float adjustedPercent = ( percent - separationThresh ) / threshDelta;\n\n        birdVelocity = texture2D( textureVelocity, ref ).xyz;\n\n        f = ( 0.5 - cos( adjustedPercent * PI_2 ) * 0.5 + 0.5 ) * delta;\n        velocity += normalize(birdVelocity) * f;\n\n      } else {\n\n        // Attraction / Cohesion - move closer\n        float threshDelta = 1.0 - alignmentThresh;\n        float adjustedPercent = ( percent - alignmentThresh ) / threshDelta;\n\n        f = ( 0.5 - ( cos( adjustedPercent * PI_2 ) * -0.5 + 0.5 ) ) * delta;\n\n        velocity += normalize(dir) * f;\n\n      }\n    }\n  }\n\n  // this make tends to fly around than down or up\n  // if (velocity.y > 0.) velocity.y *= (1. - 0.2 * delta);\n\n  // Speed Limits\n  if ( length( velocity ) > limit ) {\n    velocity = normalize( velocity ) * limit;\n  }\n\n  gl_FragColor = vec4( velocity, 1.0 );\n\n}",
                v = "attribute vec2 reference;\nattribute float birdVertex;\n\nattribute vec3 birdColor;\n\nuniform sampler2D texturePosition;\nuniform sampler2D textureVelocity;\n\nvarying vec4 vColor;\nvarying float z;\n\nuniform float time;\nuniform float birdSize;\n\nvoid main() {\n\n  vec4 tmpPos = texture2D( texturePosition, reference );\n  vec3 pos = tmpPos.xyz;\n  vec3 velocity = normalize(texture2D( textureVelocity, reference ).xyz);\n\n  vec3 newPosition = position;\n\n  if ( birdVertex == 4.0 || birdVertex == 7.0 ) {\n    // flap wings\n    newPosition.y = sin( tmpPos.w ) * 5. * birdSize;\n  }\n\n  newPosition = mat3( modelMatrix ) * newPosition;\n\n  velocity.z *= -1.;\n  float xz = length( velocity.xz );\n  float xyz = 1.;\n  float x = sqrt( 1. - velocity.y * velocity.y );\n\n  float cosry = velocity.x / xz;\n  float sinry = velocity.z / xz;\n\n  float cosrz = x / xyz;\n  float sinrz = velocity.y / xyz;\n\n  mat3 maty =  mat3(\n    cosry, 0, -sinry,\n    0    , 1, 0     ,\n    sinry, 0, cosry\n  );\n\n  mat3 matz =  mat3(\n    cosrz , sinrz, 0,\n    -sinrz, cosrz, 0,\n    0     , 0    , 1\n  );\n  newPosition =  maty * matz * newPosition;\n  newPosition += pos;\n  z = newPosition.z;\n\n  vColor = vec4( birdColor, 1.0 );\n  gl_Position = projectionMatrix *  viewMatrix  * vec4( newPosition, 1.0 );\n}",
                y = "varying vec4 vColor;\nvarying float z;\nuniform vec3 color;\nvoid main() {\n  // Fake colors for now\n  float rr = 0.2 + ( 1000. - z ) / 1000. * vColor.x;\n  float gg = 0.2 + ( 1000. - z ) / 1000. * vColor.y;\n  float bb = 0.2 + ( 1000. - z ) / 1000. * vColor.z;\n  gl_FragColor = vec4( rr, gg, bb, 1. );\n}",
                g = function(e) {
                    const t = e.image.data;
                    let i = 0;
                    const n = t.length;
                    return (() => {
                        const e = [];
                        for (; i < n;) {
                            const n = Math.random() * c - u,
                                o = Math.random() * c - u,
                                r = Math.random() * c - u;
                            t[i + 0] = n, t[i + 1] = o, t[i + 2] = r, t[i + 3] = 1, e.push(i += 4)
                        }
                        return e
                    })()
                },
                w = function(e) {
                    const t = e.image.data;
                    let i = 0;
                    const n = t.length;
                    return (() => {
                        const e = [];
                        for (; i < n;) {
                            const n = Math.random() - .5,
                                o = Math.random() - .5,
                                r = Math.random() - .5;
                            t[i + 0] = 10 * n, t[i + 1] = 10 * o, t[i + 2] = 10 * r, t[i + 3] = 1, e.push(i += 4)
                        }
                        return e
                    })()
                };
            s.BirdGeometry = function(e) {
                e.quantity && (l = Math.pow(2, e.quantity), h = l * l);
                const t = 3 * h,
                    i = 3 * t;
                s.BufferGeometry.call(this);
                const n = new s.BufferAttribute(new Float32Array(3 * i), 3),
                    o = new s.BufferAttribute(new Float32Array(3 * i), 3),
                    r = new s.BufferAttribute(new Float32Array(2 * i), 2),
                    a = new s.BufferAttribute(new Float32Array(i), 1);
                this.addAttribute("position", n), this.addAttribute("birdColor", o), this.addAttribute("reference", r), this.addAttribute("birdVertex", a);
                let c = 0;
                const u = function() { for (let e = 0; e < arguments.length; e++) n.array[c++] = arguments[e] },
                    d = e.wingSpan || 20,
                    p = e.birdSize || 1;
                for (let e = 0; e < h; e++) u(0, -0, -20 * p, 0, 4 * p, -20 * p, 0, 0, 30 * p), u(0, 0, -15 * p, -d * p, 0, 0, 0, 0, 15 * p), u(0, 0, 15 * p, d * p, 0, 0, 0, 0, -15 * p);
                const f = {};
                for (c = 0; c < 3 * t; c++) {
                    const t = ~~(c / 3),
                        i = t % l / l,
                        n = ~~(t / l) / l,
                        s = ~~(c / 9) / h,
                        u = s.toString(),
                        d = -1 != e.colorMode.indexOf("Gradient");
                    let p;
                    p = !d && f[u] ? f[u] : e.effect.getNewCol(s), d || f[u] || (f[u] = p), o.array[3 * c + 0] = p.r, o.array[3 * c + 1] = p.g, o.array[3 * c + 2] = p.b, r.array[2 * c] = i, r.array[2 * c + 1] = n, a.array[c] = c % 9
                }
                return this.scale(.2, .2, .2)
            }, s.BirdGeometry.prototype = Object.create(s.BufferGeometry.prototype);
            class b extends n.b {
                static initClass() { this.prototype.defaultOptions = { backgroundColor: 465199, color1: 16711680, color2: 53759, colorMode: "varianceGradient", birdSize: 1, wingSpan: 30, speedLimit: 5, separation: 20, alignment: 20, cohesion: 20, quantity: 5 } }
                initComputeRenderer() {
                    this.gpuCompute = new r(l, l, this.renderer);
                    const e = this.gpuCompute.createTexture(),
                        t = this.gpuCompute.createTexture();
                    g(e), w(t), this.velocityVariable = this.gpuCompute.addVariable("textureVelocity", m, t), this.positionVariable = this.gpuCompute.addVariable("texturePosition", f, e), this.gpuCompute.setVariableDependencies(this.velocityVariable, [this.positionVariable, this.velocityVariable]), this.gpuCompute.setVariableDependencies(this.positionVariable, [this.positionVariable, this.velocityVariable]), this.positionUniforms = this.positionVariable.material.uniforms, this.velocityUniforms = this.velocityVariable.material.uniforms, this.positionUniforms.time = { value: 0 }, this.positionUniforms.delta = { value: 0 }, this.velocityUniforms.time = { value: 1 }, this.velocityUniforms.delta = { value: 0 }, this.velocityUniforms.testing = { value: 1 }, this.velocityUniforms.separationDistance = { value: 1 }, this.velocityUniforms.alignmentDistance = { value: 1 }, this.velocityUniforms.cohesionDistance = { value: 1 }, this.velocityUniforms.speedLimit = { value: 1 }, this.velocityUniforms.freedomFactor = { value: 1 }, this.velocityUniforms.predator = { value: new s.Vector3 }, this.velocityVariable.material.defines.BOUNDS = c.toFixed(2), this.velocityVariable.wrapS = s.RepeatWrapping, this.velocityVariable.wrapT = s.RepeatWrapping, this.positionVariable.wrapS = s.RepeatWrapping, this.positionVariable.wrapT = s.RepeatWrapping;
                    const i = this.gpuCompute.init();
                    null !== i && console.error(i)
                }
                initGpgpuBirds() {
                    const e = Object.assign({}, this.options, { effect: this }),
                        t = new s.BirdGeometry(e);
                    this.birdUniforms = { color: { value: new s.Color(16720384) }, texturePosition: { value: null }, textureVelocity: { value: null }, time: { value: 1 }, delta: { value: 0 }, birdSize: { value: this.options.birdSize } };
                    const i = new s.ShaderMaterial({ uniforms: this.birdUniforms, vertexShader: v, fragmentShader: y, side: s.DoubleSide }),
                        n = new s.Mesh(t, i);
                    return n.rotation.y = Math.PI / 2, n.matrixAutoUpdate = !1, n.updateMatrix(), this.scene.add(n)
                }
                getNewCol(e) {
                    const t = this.options,
                        i = null != t.color1 ? t.color1 : 4456448,
                        n = null != t.color2 ? t.color2 : 6684672,
                        o = new s.Color(i),
                        r = new s.Color(n);
                    let a, l;
                    if (l = -1 != t.colorMode.indexOf("Gradient") ? Math.random() : e, 0 == t.colorMode.indexOf("variance")) {
                        const e = (o.r + Math.random() * r.r).clamp(0, 1),
                            t = (o.g + Math.random() * r.g).clamp(0, 1),
                            i = (o.b + Math.random() * r.b).clamp(0, 1);
                        a = new s.Color(e, t, i)
                    } else a = 0 == t.colorMode.indexOf("mix") ? new s.Color(i + l * n) : o.lerp(r, l);
                    return a
                }
                onInit() {
                    this.camera = new s.PerspectiveCamera(75, this.width / this.height, 1, 3e3), this.camera.position.z = 350, this.fog = new s.Fog(16777215, 100, 1e3), this.mouseX = this.mouseY = 0;
                    const e = this.birds = [],
                        t = this.boids = [],
                        i = this.options;
                    let n, o;
                    if (a) try { this.initComputeRenderer(), this.valuesChanger = this.valuesChanger.bind(this), this.valuesChanger(), this.initGpgpuBirds() } catch (e) { console.error("[vanta.js] birds init error: ", e) } else {
                        const a = 6 * Math.pow(2, i.quantity);
                        for (var r = 0; r < a; r++) {
                            (n = t[r] = new p(i)).position.x = 400 * Math.random() - 200, n.position.y = 400 * Math.random() - 200, n.position.z = 400 * Math.random() - 200, n.velocity.x = 2 * Math.random() - 1, n.velocity.y = 2 * Math.random() - 1, n.velocity.z = 2 * Math.random() - 1, n.setWorldSize(500, 500, 300);
                            const c = -1 != i.colorMode.indexOf("Gradient"),
                                u = new d(i);
                            for (var l = 0; l < u.faces.length; l++)
                                if (c)
                                    for (var h = 0; h < 3; h++) {
                                        const e = this.getNewCol();
                                        u.faces[l].vertexColors[h] = e
                                    } else {
                                        const e = this.getNewCol(r / a);
                                        u.faces[l].vertexColors[0] = e, u.faces[l].vertexColors[1] = e, u.faces[l].vertexColors[2] = e
                                    }(o = e[r] = new s.Mesh(u, new s.MeshBasicMaterial({ color: 16777215, side: s.DoubleSide, vertexColors: s.VertexColors }))).phase = Math.floor(62.83 * Math.random()), o.position.x = t[r].position.x, o.position.y = t[r].position.y, o.position.z = t[r].position.z, this.scene.add(o)
                        }
                    }
                }
                valuesChanger() { this.velocityUniforms && (this.velocityUniforms.separationDistance.value = this.options.separation, this.velocityUniforms.alignmentDistance.value = this.options.alignment, this.velocityUniforms.speedLimit.value = this.options.speedLimit, this.velocityUniforms.cohesionDistance.value = this.options.cohesion) }
                onUpdate() {
                    this.now = performance.now(), this.last || (this.last = this.now);
                    let e = (this.now - this.last) / 1e3;
                    if (e > 1 && (e = 1), this.last = this.now, a) this.positionUniforms.time.value = this.now, this.positionUniforms.delta.value = e, this.velocityUniforms.time.value = this.now, this.velocityUniforms.delta.value = e, this.birdUniforms.time.value = this.now, this.birdUniforms.delta.value = e, this.velocityUniforms.predator.value.set(this.mouseX, -this.mouseY, 0), this.mouseX = 1e4, this.mouseY = 1e4, this.gpuCompute.compute(), this.birdUniforms.texturePosition.value = this.gpuCompute.getCurrentRenderTarget(this.positionVariable).texture, this.birdUniforms.textureVelocity.value = this.gpuCompute.getCurrentRenderTarget(this.velocityVariable).texture;
                    else {
                        const e = this.birds,
                            n = this.boids;
                        let o, r;
                        for (var t = 0, i = e.length; t < i; t++)(o = n[t]).run(n), (r = e[t]).rotation.y = Math.atan2(-o.velocity.z, o.velocity.x), r.rotation.z = Math.asin(o.velocity.y / o.velocity.length()), r.phase = (r.phase + (Math.max(0, r.rotation.z) + .1)) % 62.83, r.geometry.vertices[5].y = r.geometry.vertices[4].y = 5 * Math.sin(r.phase) * this.options.birdSize, r.geometry.verticesNeedUpdate = !0, r.position.x = n[t].position.x, r.position.y = n[t].position.y, r.position.z = n[t].position.z
                    }
                }
                onMouseMove(e, t) { if (this.mouseX = e - .5, this.mouseY = t - .5, !a) { const e = this.boids; let t; for (var i = new s.Vector3(this.mouseX * this.width, -this.mouseY * this.height, 0), n = 0, o = e.length; n < o; n++) t = e[n], i.z = t.position.z, t.repulse(i) } }
                onDestroy() {}
                onResize() {}
            }
            b.initClass();
            t.default = n.a.register("BIRDS", b)
        }
    })
});