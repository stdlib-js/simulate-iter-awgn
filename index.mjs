// Copyright (c) 2024 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./index.d.ts" />
import e from"https://cdn.jsdelivr.net/gh/stdlib-js/utils-define-nonenumerable-read-only-property@v0.2.1-esm/index.mjs";import t from"https://cdn.jsdelivr.net/gh/stdlib-js/utils-define-nonenumerable-read-only-accessor@v0.2.2-esm/index.mjs";import s from"https://cdn.jsdelivr.net/gh/stdlib-js/utils-define-nonenumerable-read-write-accessor@v0.2.1-esm/index.mjs";import r from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-iterator-like@v0.2.1-esm/index.mjs";import{isPrimitive as n}from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-positive-number@v0.2.1-esm/index.mjs";import i from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-plain-object@v0.2.1-esm/index.mjs";import o from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-function@v0.2.1-esm/index.mjs";import{isPrimitive as d}from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-boolean@v0.2.1-esm/index.mjs";import m from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-uint32array@v0.2.1-esm/index.mjs";import l from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-has-own-property@v0.2.1-esm/index.mjs";import p from"https://cdn.jsdelivr.net/gh/stdlib-js/utils-noop@v0.2.1-esm/index.mjs";import a from"https://cdn.jsdelivr.net/gh/stdlib-js/utils-constant-function@v0.2.1-esm/index.mjs";import h from"https://cdn.jsdelivr.net/gh/stdlib-js/symbol-iterator@v0.2.1-esm/index.mjs";import u from"https://cdn.jsdelivr.net/gh/stdlib-js/error-tools-fmtprodmsg@v0.2.1-esm/index.mjs";import{factory as f}from"https://cdn.jsdelivr.net/gh/stdlib-js/random-base-improved-ziggurat@v0.2.1-esm/index.mjs";function j(v,c,g){var b,y,x,w;if(!r(v))throw new TypeError(u("0t53v",v));if(!n(c))throw new TypeError(u("0t572",c));if(y={copy:!0},arguments.length>2){if(!i(g))throw new TypeError(u("0t58J",g));if(l(g,"copy")&&(y.copy=g.copy,!d(g.copy)))throw new TypeError(u("0t52o","copy",g.copy));if(l(g,"prng")){if(!o(g.prng))throw new TypeError(u("0t56u","prng",g.prng));b=g.prng}else if(l(g,"state")){if(y.state=g.state,!m(g.state))throw new TypeError(u("0t56z","state",g.state))}else if(l(g,"seed")&&(y.seed=g.seed,void 0===g.seed))throw new TypeError(u("0t574","seed",g.seed))}return void 0===b&&(b=f(y)),e(x={},"next",(function(){var e;if(w)return{done:!0};if((e=v.next()).done)return w=!0,e;e="number"==typeof e.value?e.value+c*b():NaN;return{value:e,done:!1}})),e(x,"return",(function(e){if(w=!0,arguments.length)return{value:e,done:!0};return{done:!0}})),h&&o(v[h])&&e(x,h,(function(){return j(v[h](),c,y)})),g&&g.prng?(e(x,"seed",null),e(x,"seedLength",null),s(x,"state",a(null),p),e(x,"stateLength",null),e(x,"byteLength",null),e(x,"PRNG",null)):(t(x,"seed",(function(){return b.seed})),t(x,"seedLength",(function(){return b.seedLength})),s(x,"state",(function(){return b.state}),(function(e){b.state=e})),t(x,"stateLength",(function(){return b.stateLength})),t(x,"byteLength",(function(){return b.byteLength})),e(x,"PRNG",b.PRNG)),x}export{j as default};
//# sourceMappingURL=index.mjs.map
