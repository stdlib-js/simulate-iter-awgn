// Copyright (c) 2024 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./index.d.ts" />
import e from"https://cdn.jsdelivr.net/gh/stdlib-js/utils-define-nonenumerable-read-only-property@v0.1.0-esm/index.mjs";import t from"https://cdn.jsdelivr.net/gh/stdlib-js/utils-define-nonenumerable-read-only-accessor@v0.1.0-esm/index.mjs";import n from"https://cdn.jsdelivr.net/gh/stdlib-js/utils-define-nonenumerable-read-write-accessor@v0.2.0-esm/index.mjs";import s from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-iterator-like@v0.2.0-esm/index.mjs";import{isPrimitive as r}from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-positive-number@v0.2.0-esm/index.mjs";import i from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-plain-object@v0.2.0-esm/index.mjs";import o from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-function@v0.2.0-esm/index.mjs";import{isPrimitive as d}from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-boolean@v0.2.0-esm/index.mjs";import m from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-uint32array@v0.2.0-esm/index.mjs";import a from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-has-own-property@v0.2.0-esm/index.mjs";import l from"https://cdn.jsdelivr.net/gh/stdlib-js/utils-noop@v0.2.0-esm/index.mjs";import p from"https://cdn.jsdelivr.net/gh/stdlib-js/utils-constant-function@v0.2.0-esm/index.mjs";import u from"https://cdn.jsdelivr.net/gh/stdlib-js/symbol-iterator@v0.2.0-esm/index.mjs";import h from"https://cdn.jsdelivr.net/gh/stdlib-js/string-format@v0.1.1-esm/index.mjs";import{factory as v}from"https://cdn.jsdelivr.net/gh/stdlib-js/random-base-improved-ziggurat@v0.1.0-esm/index.mjs";function g(j,c,f){var b,y,x,w;if(!s(j))throw new TypeError(h("invalid argument. First argument must be an iterator. Value: `%s`.",j));if(!r(c))throw new TypeError(h("invalid argument. Second argument must be a positive number. Value: `%s`.",c));if(y={copy:!0},arguments.length>2){if(!i(f))throw new TypeError(h("invalid argument. Third argument must be an object. Value: `%s`.",f));if(a(f,"copy")&&(y.copy=f.copy,!d(f.copy)))throw new TypeError(h("invalid option. `%s` option must be a boolean. Option: `%s`.","copy",f.copy));if(a(f,"prng")){if(!o(f.prng))throw new TypeError(h("invalid option. `%s` option must be a pseudorandom number generator function. Option: `%s`.","prng",f.prng));b=f.prng}else if(a(f,"state")){if(y.state=f.state,!m(f.state))throw new TypeError(h("invalid option. `%s` option must be a Uint32Array. Option: `%s`.","state",f.state))}else if(a(f,"seed")&&(y.seed=f.seed,void 0===f.seed))throw new TypeError(h("invalid option. `%s` option must be either a positive integer less than or equal to the maximum unsigned 32-bit integer or an array-like object containing integer values less than or equal to the maximum unsigned 32-bit integer. Option: `%s`.","seed",f.seed))}return void 0===b&&(b=v(y)),e(x={},"next",G),e(x,"return",R),u&&o(j[u])&&e(x,u,V),f&&f.prng?(e(x,"seed",null),e(x,"seedLength",null),n(x,"state",p(null),l),e(x,"stateLength",null),e(x,"byteLength",null),e(x,"PRNG",null)):(t(x,"seed",L),t(x,"seedLength",T),n(x,"state",O,P),t(x,"stateLength",E),t(x,"byteLength",N),e(x,"PRNG",b.PRNG)),x;function L(){return b.seed}function T(){return b.seedLength}function E(){return b.stateLength}function N(){return b.byteLength}function O(){return b.state}function P(e){b.state=e}function G(){var e;return w?{done:!0}:(e=j.next()).done?(w=!0,e):{value:e="number"==typeof e.value?e.value+c*b():NaN,done:!1}}function R(e){return w=!0,arguments.length?{value:e,done:!0}:{done:!0}}function V(){return g(j[u](),c,y)}}export{g as default};
//# sourceMappingURL=index.mjs.map
