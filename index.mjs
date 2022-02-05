/// <reference types="./index.d.ts" />
import e from"https://cdn.jsdelivr.net/gh/stdlib-js/utils-define-nonenumerable-read-only-property@esm/index.mjs";import t from"https://cdn.jsdelivr.net/gh/stdlib-js/utils-define-nonenumerable-read-only-accessor@esm/index.mjs";import n from"https://cdn.jsdelivr.net/gh/stdlib-js/utils-define-nonenumerable-read-write-accessor@esm/index.mjs";import s from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-iterator-like@esm/index.mjs";import i from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-positive-number@esm/index.mjs";import r from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-plain-object@esm/index.mjs";import o from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-function@esm/index.mjs";import d from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-boolean@esm/index.mjs";import m from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-uint32array@esm/index.mjs";import a from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-has-own-property@esm/index.mjs";import l from"https://cdn.jsdelivr.net/gh/stdlib-js/utils-copy@esm/index.mjs";import p from"https://cdn.jsdelivr.net/gh/stdlib-js/utils-noop@esm/index.mjs";import u from"https://cdn.jsdelivr.net/gh/stdlib-js/utils-constant-function@esm/index.mjs";import h from"https://cdn.jsdelivr.net/gh/stdlib-js/symbol-iterator@esm/index.mjs";import g from"https://cdn.jsdelivr.net/gh/stdlib-js/random-base-improved-ziggurat@esm/index.mjs";var j={copy:!0},c=e,f=t,b=n,v=s,y=i.isPrimitive,x=r,w=o,L=d.isPrimitive,T=m,E=a,N=l,P=p,O=u,G=h,R=g.factory,V=j;var k=function e(t,n,s){var i,r,o,d;if(!v(t))throw new TypeError("invalid argument. First argument must be an iterator. Value: `"+t+"`.");if(!y(n))throw new TypeError("invalid argument. Second argument must be a positive number. Value: `"+n+"`.");if(r=N(V),arguments.length>2){if(!x(s))throw new TypeError("invalid argument. Third argument must be an object. Value: `"+s+"`.");if(E(s,"copy")&&(r.copy=s.copy,!L(s.copy)))throw new TypeError("invalid option. `copy` option must be a boolean. Option: `"+s.copy+"`.");if(E(s,"prng")){if(!w(s.prng))throw new TypeError("invalid option. `prng` option must be a pseudorandom number generator function. Option: `"+s.prng+"`.");i=s.prng}else if(E(s,"state")){if(r.state=s.state,!T(s.state))throw new TypeError("invalid option. `state` option must be a Uint32Array. Option: `"+s.state+"`.")}else if(E(s,"seed")&&(r.seed=s.seed,void 0===s.seed))throw new TypeError("invalid option. `seed` option must be either a positive integer less than or equal to the maximum unsigned 32-bit integer or an array-like object containing integer values less than or equal to the maximum unsigned 32-bit integer. Option: `"+s.seed+"`.")}return void 0===i&&(i=R(r)),c(o={},"next",g),c(o,"return",j),G&&w(t[G])&&c(o,G,k),s&&s.prng?(c(o,"seed",null),c(o,"seedLength",null),b(o,"state",O(null),P),c(o,"stateLength",null),c(o,"byteLength",null),c(o,"PRNG",null)):(f(o,"seed",m),f(o,"seedLength",a),b(o,"state",u,h),f(o,"stateLength",l),f(o,"byteLength",p),c(o,"PRNG",i.PRNG)),o;function m(){return i.seed}function a(){return i.seedLength}function l(){return i.stateLength}function p(){return i.byteLength}function u(){return i.state}function h(e){i.state=e}function g(){var e;return d?{done:!0}:(e=t.next()).done?(d=!0,e):{value:e="number"==typeof e.value?e.value+n*i():NaN,done:!1}}function j(e){return d=!0,arguments.length?{value:e,done:!0}:{done:!0}}function k(){return e(t[G](),n,r)}},q=k;export{q as default};
//# sourceMappingURL=index.mjs.map
