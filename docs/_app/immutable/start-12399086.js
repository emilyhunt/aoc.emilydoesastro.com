import{S as xe,i as et,s as tt,a as rt,e as U,c as nt,b as G,g as Q,t as V,d as x,f as q,h as J,j as at,o as Le,k as ot,l as st,m as it,n as Re,p as H,q as lt,r as ct,u as ft,v as K,w as M,x as ce,y as z,z as W,A as he}from"./chunks/index-69c26055.js";import{g as Me,f as ze,s as Z,a as Ae,b as ut,i as pt,c as dt}from"./chunks/singletons-f4d3c52d.js";import{_ as P}from"./chunks/preload-helper-b21cceae.js";function ht(n,e){return n==="/"||e==="ignore"?n:e==="never"?n.endsWith("/")?n.slice(0,-1):n:e==="always"&&!n.endsWith("/")?n+"/":n}function _t(n){return n.split("%25").map(decodeURI).join("%25")}function mt(n){for(const e in n)n[e]=decodeURIComponent(n[e]);return n}const gt=["href","pathname","search","searchParams","toString","toJSON"];function wt(n,e){const r=new URL(n);for(const o of gt){let a=r[o];Object.defineProperty(r,o,{get(){return e(),a},enumerable:!0,configurable:!0})}return yt(r),r}function yt(n){Object.defineProperty(n,"hash",{get(){throw new Error("Cannot access event.url.hash. Consider using `$page.url.hash` inside a component instead")}})}const bt="/__data.json";function vt(n){return n.replace(/\/$/,"")+bt}function Et(n){let e=5381;if(typeof n=="string"){let r=n.length;for(;r;)e=e*33^n.charCodeAt(--r)}else if(ArrayBuffer.isView(n)){const r=new Uint8Array(n.buffer,n.byteOffset,n.byteLength);let o=r.length;for(;o;)e=e*33^r[--o]}else throw new TypeError("value must be a string or TypedArray");return(e>>>0).toString(36)}const we=window.fetch;window.fetch=(n,e)=>{if((n instanceof Request?n.method:(e==null?void 0:e.method)||"GET")!=="GET"){const o=new URL(n instanceof Request?n.url:n.toString(),document.baseURI).href;ie.delete(o)}return we(n,e)};const ie=new Map;function kt(n,e){const r=Ze(n,e),o=document.querySelector(r);if(o!=null&&o.textContent){const{body:a,...f}=JSON.parse(o.textContent),t=o.getAttribute("data-ttl");return t&&ie.set(r,{body:a,init:f,ttl:1e3*Number(t)}),Promise.resolve(new Response(a,f))}return we(n,e)}function $t(n,e,r){if(ie.size>0){const o=Ze(n,r),a=ie.get(o);if(a){if(performance.now()<a.ttl)return new Response(a.body,a.init);ie.delete(o)}}return we(e,r)}function Ze(n,e){let o=`script[data-sveltekit-fetched][data-url=${JSON.stringify(n instanceof Request?n.url:n)}]`;return(e==null?void 0:e.body)&&(typeof e.body=="string"||ArrayBuffer.isView(e.body))&&(o+=`[data-hash="${Et(e.body)}"]`),o}const Rt=/^(\[)?(\.\.\.)?(\w+)(?:=(\w+))?(\])?$/;function Ot(n){const e=[],r=[],o=[];let a=!0;return{pattern:n==="/"?/^\/$/:new RegExp(`^${St(n).map((t,l,u)=>{const h=/^\[\.\.\.(\w+)(?:=(\w+))?\]$/.exec(t);if(h)return e.push(h[1]),r.push(h[2]),o.push(!1),"(?:/(.*))?";const g=/^\[\[(\w+)(?:=(\w+))?\]\]$/.exec(t);if(g)return e.push(g[1]),r.push(g[2]),o.push(!0),"(?:/([^/]+))?";const E=l===u.length-1;return t?"/"+t.split(/\[(.+?)\](?!\])/).map((A,B)=>{if(B%2){if(A.startsWith("x+"))return Oe(String.fromCharCode(parseInt(A.slice(2),16)));if(A.startsWith("u+"))return Oe(String.fromCharCode(...A.slice(2).split("-").map(ue=>parseInt(ue,16))));const N=Rt.exec(A);if(!N)throw new Error(`Invalid param: ${A}. Params and matcher names can only have underscores and alphanumeric characters.`);const[,X,ee,fe,re]=N;return e.push(fe),r.push(re),o.push(!!X),ee?"(.*?)":X?"([^/]*)?":"([^/]+?)"}return E&&A.includes(".")&&(a=!1),Oe(A)}).join(""):void 0}).join("")}${a?"/?":""}$`),names:e,types:r,optional:o}}function It(n){return!/^\([^)]+\)$/.test(n)}function St(n){return n.slice(1).split("/").filter(It)}function Lt(n,{names:e,types:r,optional:o},a){const f={};for(let t=0;t<e.length;t+=1){const l=e[t],u=r[t];let h=n[t+1];if(h||!o[t]){if(u){const g=a[u];if(!g)throw new Error(`Missing "${u}" param matcher`);if(!g(h))return}f[l]=h!=null?h:""}}return f}function Oe(n){return n.normalize().replace(/[[\]]/g,"\\$&").replace(/%/g,"%25").replace(/\//g,"%2[Ff]").replace(/\?/g,"%3[Ff]").replace(/#/g,"%23").replace(/[.*+?^${}()|\\]/g,"\\$&")}function At(n,e,r,o){const a=new Set(e);return Object.entries(r).map(([l,[u,h,g]])=>{const{pattern:E,names:T,types:O,optional:A}=Ot(l),B={id:l,exec:N=>{const X=E.exec(N);if(X)return Lt(X,{names:T,types:O,optional:A},o)},errors:[1,...g||[]].map(N=>n[N]),layouts:[0,...h||[]].map(t),leaf:f(u)};return B.errors.length=B.layouts.length=Math.max(B.errors.length,B.layouts.length),B});function f(l){const u=l<0;return u&&(l=~l),[u,n[l]]}function t(l){return l===void 0?l:[a.has(l),n[l]]}}function Pt(n){let e,r,o;var a=n[0][0];function f(t){return{props:{data:t[2],form:t[1]}}}return a&&(e=K(a,f(n))),{c(){e&&M(e.$$.fragment),r=U()},l(t){e&&ce(e.$$.fragment,t),r=U()},m(t,l){e&&z(e,t,l),G(t,r,l),o=!0},p(t,l){const u={};if(l&4&&(u.data=t[2]),l&2&&(u.form=t[1]),a!==(a=t[0][0])){if(e){Q();const h=e;V(h.$$.fragment,1,0,()=>{W(h,1)}),x()}a?(e=K(a,f(t)),M(e.$$.fragment),q(e.$$.fragment,1),z(e,r.parentNode,r)):e=null}else a&&e.$set(u)},i(t){o||(e&&q(e.$$.fragment,t),o=!0)},o(t){e&&V(e.$$.fragment,t),o=!1},d(t){t&&J(r),e&&W(e,t)}}}function jt(n){let e,r,o;var a=n[0][0];function f(t){return{props:{data:t[2],$$slots:{default:[Ut]},$$scope:{ctx:t}}}}return a&&(e=K(a,f(n))),{c(){e&&M(e.$$.fragment),r=U()},l(t){e&&ce(e.$$.fragment,t),r=U()},m(t,l){e&&z(e,t,l),G(t,r,l),o=!0},p(t,l){const u={};if(l&4&&(u.data=t[2]),l&1051&&(u.$$scope={dirty:l,ctx:t}),a!==(a=t[0][0])){if(e){Q();const h=e;V(h.$$.fragment,1,0,()=>{W(h,1)}),x()}a?(e=K(a,f(t)),M(e.$$.fragment),q(e.$$.fragment,1),z(e,r.parentNode,r)):e=null}else a&&e.$set(u)},i(t){o||(e&&q(e.$$.fragment,t),o=!0)},o(t){e&&V(e.$$.fragment,t),o=!1},d(t){t&&J(r),e&&W(e,t)}}}function Tt(n){let e,r,o;var a=n[0][1];function f(t){return{props:{data:t[3],form:t[1]}}}return a&&(e=K(a,f(n))),{c(){e&&M(e.$$.fragment),r=U()},l(t){e&&ce(e.$$.fragment,t),r=U()},m(t,l){e&&z(e,t,l),G(t,r,l),o=!0},p(t,l){const u={};if(l&8&&(u.data=t[3]),l&2&&(u.form=t[1]),a!==(a=t[0][1])){if(e){Q();const h=e;V(h.$$.fragment,1,0,()=>{W(h,1)}),x()}a?(e=K(a,f(t)),M(e.$$.fragment),q(e.$$.fragment,1),z(e,r.parentNode,r)):e=null}else a&&e.$set(u)},i(t){o||(e&&q(e.$$.fragment,t),o=!0)},o(t){e&&V(e.$$.fragment,t),o=!1},d(t){t&&J(r),e&&W(e,t)}}}function Nt(n){let e,r,o;var a=n[0][1];function f(t){return{props:{data:t[3],$$slots:{default:[Dt]},$$scope:{ctx:t}}}}return a&&(e=K(a,f(n))),{c(){e&&M(e.$$.fragment),r=U()},l(t){e&&ce(e.$$.fragment,t),r=U()},m(t,l){e&&z(e,t,l),G(t,r,l),o=!0},p(t,l){const u={};if(l&8&&(u.data=t[3]),l&1043&&(u.$$scope={dirty:l,ctx:t}),a!==(a=t[0][1])){if(e){Q();const h=e;V(h.$$.fragment,1,0,()=>{W(h,1)}),x()}a?(e=K(a,f(t)),M(e.$$.fragment),q(e.$$.fragment,1),z(e,r.parentNode,r)):e=null}else a&&e.$set(u)},i(t){o||(e&&q(e.$$.fragment,t),o=!0)},o(t){e&&V(e.$$.fragment,t),o=!1},d(t){t&&J(r),e&&W(e,t)}}}function Dt(n){let e,r,o;var a=n[0][2];function f(t){return{props:{data:t[4],form:t[1]}}}return a&&(e=K(a,f(n))),{c(){e&&M(e.$$.fragment),r=U()},l(t){e&&ce(e.$$.fragment,t),r=U()},m(t,l){e&&z(e,t,l),G(t,r,l),o=!0},p(t,l){const u={};if(l&16&&(u.data=t[4]),l&2&&(u.form=t[1]),a!==(a=t[0][2])){if(e){Q();const h=e;V(h.$$.fragment,1,0,()=>{W(h,1)}),x()}a?(e=K(a,f(t)),M(e.$$.fragment),q(e.$$.fragment,1),z(e,r.parentNode,r)):e=null}else a&&e.$set(u)},i(t){o||(e&&q(e.$$.fragment,t),o=!0)},o(t){e&&V(e.$$.fragment,t),o=!1},d(t){t&&J(r),e&&W(e,t)}}}function Ut(n){let e,r,o,a;const f=[Nt,Tt],t=[];function l(u,h){return u[0][2]?0:1}return e=l(n),r=t[e]=f[e](n),{c(){r.c(),o=U()},l(u){r.l(u),o=U()},m(u,h){t[e].m(u,h),G(u,o,h),a=!0},p(u,h){let g=e;e=l(u),e===g?t[e].p(u,h):(Q(),V(t[g],1,1,()=>{t[g]=null}),x(),r=t[e],r?r.p(u,h):(r=t[e]=f[e](u),r.c()),q(r,1),r.m(o.parentNode,o))},i(u){a||(q(r),a=!0)},o(u){V(r),a=!1},d(u){t[e].d(u),u&&J(o)}}}function We(n){let e,r=n[6]&&He(n);return{c(){e=ot("div"),r&&r.c(),this.h()},l(o){e=st(o,"DIV",{id:!0,"aria-live":!0,"aria-atomic":!0,style:!0});var a=it(e);r&&r.l(a),a.forEach(J),this.h()},h(){Re(e,"id","svelte-announcer"),Re(e,"aria-live","assertive"),Re(e,"aria-atomic","true"),H(e,"position","absolute"),H(e,"left","0"),H(e,"top","0"),H(e,"clip","rect(0 0 0 0)"),H(e,"clip-path","inset(50%)"),H(e,"overflow","hidden"),H(e,"white-space","nowrap"),H(e,"width","1px"),H(e,"height","1px")},m(o,a){G(o,e,a),r&&r.m(e,null)},p(o,a){o[6]?r?r.p(o,a):(r=He(o),r.c(),r.m(e,null)):r&&(r.d(1),r=null)},d(o){o&&J(e),r&&r.d()}}}function He(n){let e;return{c(){e=lt(n[7])},l(r){e=ct(r,n[7])},m(r,o){G(r,e,o)},p(r,o){o&128&&ft(e,r[7])},d(r){r&&J(e)}}}function Vt(n){let e,r,o,a,f;const t=[jt,Pt],l=[];function u(g,E){return g[0][1]?0:1}e=u(n),r=l[e]=t[e](n);let h=n[5]&&We(n);return{c(){r.c(),o=rt(),h&&h.c(),a=U()},l(g){r.l(g),o=nt(g),h&&h.l(g),a=U()},m(g,E){l[e].m(g,E),G(g,o,E),h&&h.m(g,E),G(g,a,E),f=!0},p(g,[E]){let T=e;e=u(g),e===T?l[e].p(g,E):(Q(),V(l[T],1,1,()=>{l[T]=null}),x(),r=l[e],r?r.p(g,E):(r=l[e]=t[e](g),r.c()),q(r,1),r.m(o.parentNode,o)),g[5]?h?h.p(g,E):(h=We(g),h.c(),h.m(a.parentNode,a)):h&&(h.d(1),h=null)},i(g){f||(q(r),f=!0)},o(g){V(r),f=!1},d(g){l[e].d(g),g&&J(o),h&&h.d(g),g&&J(a)}}}function qt(n,e,r){let{stores:o}=e,{page:a}=e,{components:f}=e,{form:t}=e,{data_0:l=null}=e,{data_1:u=null}=e,{data_2:h=null}=e;at(o.page.notify);let g=!1,E=!1,T=null;return Le(()=>{const O=o.page.subscribe(()=>{g&&(r(6,E=!0),r(7,T=document.title||"untitled page"))});return r(5,g=!0),O}),n.$$set=O=>{"stores"in O&&r(8,o=O.stores),"page"in O&&r(9,a=O.page),"components"in O&&r(0,f=O.components),"form"in O&&r(1,t=O.form),"data_0"in O&&r(2,l=O.data_0),"data_1"in O&&r(3,u=O.data_1),"data_2"in O&&r(4,h=O.data_2)},n.$$.update=()=>{n.$$.dirty&768&&o.page.set(a)},[f,t,l,u,h,g,E,T,o,a]}class Ct extends xe{constructor(e){super(),et(this,e,qt,Vt,tt,{stores:8,page:9,components:0,form:1,data_0:2,data_1:3,data_2:4})}}const Ft={},ye=[()=>P(()=>import("./chunks/0-7c32b9e9.js"),["./chunks/0-7c32b9e9.js","./chunks/_layout-8d2a742b.js","./components/pages/_layout.svelte-2ae55be5.js","./chunks/index-69c26055.js","./chunks/stores-8f690e45.js","./chunks/singletons-f4d3c52d.js","./chunks/stores-2575d039.js","./chunks/preload-helper-b21cceae.js"],import.meta.url),()=>P(()=>import("./chunks/1-68954199.js"),["./chunks/1-68954199.js","./components/error.svelte-6f5f6b61.js","./chunks/index-69c26055.js","./chunks/stores-8f690e45.js","./chunks/singletons-f4d3c52d.js"],import.meta.url),()=>P(()=>import("./chunks/2-6e70e974.js"),["./chunks/2-6e70e974.js","./components/pages/2021/day/_layout.svelte-85f66c7e.js","./chunks/preload-helper-b21cceae.js","./chunks/index-69c26055.js","./chunks/stores-2575d039.js","./chunks/stores-8f690e45.js","./chunks/singletons-f4d3c52d.js","./assets/_layout-109cb5c3.css"],import.meta.url),()=>P(()=>import("./chunks/3-5fa7d08e.js"),["./chunks/3-5fa7d08e.js","./components/pages/2022/day/_layout.svelte-3b2b76eb.js","./chunks/preload-helper-b21cceae.js","./chunks/index-69c26055.js","./chunks/stores-2575d039.js","./chunks/stores-8f690e45.js","./chunks/singletons-f4d3c52d.js","./assets/_layout-109cb5c3.css"],import.meta.url),()=>P(()=>import("./chunks/4-c93e7709.js"),["./chunks/4-c93e7709.js","./components/pages/_page.svelte-f8dac1d0.js","./chunks/index-69c26055.js","./chunks/stores-2575d039.js","./chunks/preload-helper-b21cceae.js","./chunks/PuzzleList-0af9dde3.js"],import.meta.url),()=>P(()=>import("./chunks/5-17995605.js"),["./chunks/5-17995605.js","./components/pages/2021/_page.svelte-ddb2f7a7.js","./chunks/preload-helper-b21cceae.js","./chunks/index-69c26055.js","./chunks/stores-2575d039.js","./chunks/stores-8f690e45.js","./chunks/singletons-f4d3c52d.js"],import.meta.url),()=>P(()=>import("./chunks/6-7d43903d.js"),["./chunks/6-7d43903d.js","./components/pages/2021/day/01/_page.svelte-63e830dd.js","./chunks/index-69c26055.js","./chunks/stores-2575d039.js","./chunks/preload-helper-b21cceae.js","./chunks/Runner-8306aa72.js","./assets/Runner-de87410b.css"],import.meta.url),()=>P(()=>import("./chunks/7-6d60fc83.js"),["./chunks/7-6d60fc83.js","./components/pages/2022/_page.svelte-0847ad9a.js","./chunks/index-69c26055.js","./chunks/stores-2575d039.js","./chunks/preload-helper-b21cceae.js","./chunks/PuzzleList-0af9dde3.js"],import.meta.url),()=>P(()=>import("./chunks/8-8cd34b44.js"),["./chunks/8-8cd34b44.js","./components/pages/2022/day/01/_page.svelte-e20c3cbb.js","./chunks/index-69c26055.js","./chunks/stores-2575d039.js","./chunks/preload-helper-b21cceae.js","./chunks/Runner-8306aa72.js","./assets/Runner-de87410b.css"],import.meta.url),()=>P(()=>import("./chunks/9-2597d6d8.js"),["./chunks/9-2597d6d8.js","./components/pages/2022/day/02/_page.svelte-f0bfad8b.js","./chunks/index-69c26055.js","./chunks/stores-2575d039.js","./chunks/preload-helper-b21cceae.js","./chunks/Runner-8306aa72.js","./assets/Runner-de87410b.css"],import.meta.url),()=>P(()=>import("./chunks/10-02c04eb4.js"),["./chunks/10-02c04eb4.js","./components/pages/2022/day/03/_page.svelte-e4db345c.js","./chunks/index-69c26055.js","./chunks/stores-2575d039.js","./chunks/preload-helper-b21cceae.js","./chunks/Runner-8306aa72.js","./assets/Runner-de87410b.css"],import.meta.url),()=>P(()=>import("./chunks/11-b955ebfe.js"),["./chunks/11-b955ebfe.js","./components/pages/2022/day/04/_page.svelte-29417905.js","./chunks/index-69c26055.js","./chunks/stores-2575d039.js","./chunks/preload-helper-b21cceae.js","./chunks/Runner-8306aa72.js","./assets/Runner-de87410b.css"],import.meta.url),()=>P(()=>import("./chunks/12-8abfce76.js"),["./chunks/12-8abfce76.js","./components/pages/2022/day/05/_page.svelte-1832f380.js","./chunks/index-69c26055.js","./chunks/stores-2575d039.js","./chunks/preload-helper-b21cceae.js","./chunks/Runner-8306aa72.js","./assets/Runner-de87410b.css"],import.meta.url),()=>P(()=>import("./chunks/13-826fa064.js"),["./chunks/13-826fa064.js","./components/pages/2022/day/06/_page.svelte-524a4fd0.js","./chunks/index-69c26055.js","./chunks/stores-2575d039.js","./chunks/preload-helper-b21cceae.js","./chunks/Runner-8306aa72.js","./assets/Runner-de87410b.css"],import.meta.url),()=>P(()=>import("./chunks/14-03329a8a.js"),["./chunks/14-03329a8a.js","./components/pages/2022/day/07/_page.svelte-a0a8f107.js","./chunks/index-69c26055.js","./chunks/stores-2575d039.js","./chunks/preload-helper-b21cceae.js","./chunks/Runner-8306aa72.js","./assets/Runner-de87410b.css"],import.meta.url),()=>P(()=>import("./chunks/15-9146faf5.js"),["./chunks/15-9146faf5.js","./components/pages/2022/day/08/_page.svelte-f2dc5ed7.js","./chunks/index-69c26055.js","./chunks/stores-2575d039.js","./chunks/preload-helper-b21cceae.js","./chunks/Runner-8306aa72.js","./assets/Runner-de87410b.css"],import.meta.url),()=>P(()=>import("./chunks/16-9fe7110b.js"),["./chunks/16-9fe7110b.js","./components/pages/2022/day/09/_page.svelte-51530fd0.js","./chunks/index-69c26055.js","./chunks/stores-2575d039.js","./chunks/preload-helper-b21cceae.js","./chunks/Runner-8306aa72.js","./assets/Runner-de87410b.css"],import.meta.url),()=>P(()=>import("./chunks/17-1731d56f.js"),["./chunks/17-1731d56f.js","./components/pages/2022/day/template/_page.svelte-9ed585e2.js","./chunks/index-69c26055.js","./chunks/stores-2575d039.js","./chunks/preload-helper-b21cceae.js","./chunks/Runner-8306aa72.js","./assets/Runner-de87410b.css"],import.meta.url)],Bt=[],Jt={"/":[4],"/2021":[5],"/2021/day/01":[6,[2]],"/2022":[7],"/2022/day/01":[8,[3]],"/2022/day/02":[9,[3]],"/2022/day/03":[10,[3]],"/2022/day/04":[11,[3]],"/2022/day/05":[12,[3]],"/2022/day/06":[13,[3]],"/2022/day/07":[14,[3]],"/2022/day/08":[15,[3]],"/2022/day/09":[16,[3]],"/2022/day/template":[17,[3]]},Gt={handleError:({error:n})=>{console.error(n)}};class Pe{constructor(e,r){this.status=e,typeof r=="string"?this.body={message:r}:r?this.body=r:this.body={message:`Error: ${e}`}}toString(){return JSON.stringify(this.body)}}class Ye{constructor(e,r){this.status=e,this.location=r}}async function Kt(n){var e;for(const r in n)if(typeof((e=n[r])==null?void 0:e.then)=="function")return Object.fromEntries(await Promise.all(Object.entries(n).map(async([o,a])=>[o,await a])));return n}Object.getOwnPropertyNames(Object.prototype).sort().join("\0");Object.getOwnPropertyNames(Object.prototype).sort().join("\0");const Mt=-1,zt=-2,Wt=-3,Ht=-4,Yt=-5,Xt=-6;function Zt(n){if(typeof n=="number")return o(n,!0);if(!Array.isArray(n)||n.length===0)throw new Error("Invalid input");const e=n,r=Array(e.length);function o(a,f=!1){if(a===Mt)return;if(a===Wt)return NaN;if(a===Ht)return 1/0;if(a===Yt)return-1/0;if(a===Xt)return-0;if(f)throw new Error("Invalid input");if(a in r)return r[a];const t=e[a];if(!t||typeof t!="object")r[a]=t;else if(Array.isArray(t))if(typeof t[0]=="string")switch(t[0]){case"Date":r[a]=new Date(t[1]);break;case"Set":const u=new Set;r[a]=u;for(let E=1;E<t.length;E+=1)u.add(o(t[E]));break;case"Map":const h=new Map;r[a]=h;for(let E=1;E<t.length;E+=2)h.set(o(t[E]),o(t[E+1]));break;case"RegExp":r[a]=new RegExp(t[1],t[2]);break;case"Object":r[a]=Object(t[1]);break;case"BigInt":r[a]=BigInt(t[1]);break;case"null":const g=Object.create(null);r[a]=g;for(let E=1;E<t.length;E+=2)g[t[E]]=o(t[E+1]);break}else{const l=new Array(t.length);r[a]=l;for(let u=0;u<t.length;u+=1){const h=t[u];h!==zt&&(l[u]=o(h))}}else{const l={};r[a]=l;for(const u in t){const h=t[u];l[u]=o(h)}}return r[a]}return o(0)}const Qe="sveltekit:scroll",Y="sveltekit:index",_e=At(ye,Bt,Jt,Ft),je=ye[0],Te=ye[1];je();Te();let le={};try{le=JSON.parse(sessionStorage[Qe])}catch{}function Ie(n){le[n]=Ae()}function Qt({target:n,base:e}){var Je;const r=[];let o=null;const a={before_navigate:[],after_navigate:[]};let f={branch:[],error:null,url:null},t=!1,l=!1,u=!0,h=!1,g=!1,E=!1,T=!1,O,A=(Je=history.state)==null?void 0:Je[Y];A||(A=Date.now(),history.replaceState({...history.state,[Y]:A},"",location.href));const B=le[A];B&&(history.scrollRestoration="manual",scrollTo(B.x,B.y));let N,X,ee;async function fe(){ee=ee||Promise.resolve(),await ee,ee=null;const s=new URL(location.href),c=Ee(s,!0);o=null,await Ne(c,s,[])}async function re(s,{noScroll:c=!1,replaceState:p=!1,keepFocus:i=!1,state:d={},invalidateAll:_=!1},m,v){return typeof s=="string"&&(s=new URL(s,Me(document))),ke({url:s,scroll:c?Ae():null,keepfocus:i,redirect_chain:m,details:{state:d,replaceState:p},nav_token:v,accepted:()=>{_&&(T=!0)},blocked:()=>{},type:"goto"})}async function ue(s){const c=Ee(s,!1);if(!c)throw new Error(`Attempted to prefetch a URL that does not belong to this app: ${s}`);return o={id:c.id,promise:Ve(c).then(p=>(p.type==="loaded"&&p.state.error&&(o=null),p))},o.promise}async function Ne(s,c,p,i,d={},_){var v,k;X=d;let m=s&&await Ve(s);if(m||(m=await Be(c,{id:null},se(new Error(`Not found: ${c.pathname}`),{url:c,params:{},route:{id:null}}),404)),c=(s==null?void 0:s.url)||c,X!==d)return!1;if(m.type==="redirect")if(p.length>10||p.includes(c.pathname))m=await pe({status:500,error:se(new Error("Redirect loop"),{url:c,params:{},route:{id:null}}),url:c,route:{id:null}});else return re(new URL(m.location,c).href,{},[...p,c.pathname],d),!1;else((k=(v=m.props)==null?void 0:v.page)==null?void 0:k.status)>=400&&await Z.updated.check()&&await de(c);if(r.length=0,T=!1,h=!0,i&&i.details){const{details:y}=i,b=y.replaceState?0:1;y.state[Y]=A+=b,history[y.replaceState?"replaceState":"pushState"](y.state,"",c)}if(o=null,l){f=m.state,m.props.page&&(m.props.page.url=c);const y=ge();O.$set(m.props),y()}else De(m);if(i){const{scroll:y,keepfocus:b}=i;if(b||Se(),await he(),u){const $=c.hash&&document.getElementById(c.hash.slice(1));y?scrollTo(y.x,y.y):$?$.scrollIntoView():scrollTo(0,0)}}else await he();u=!0,m.props.page&&(N=m.props.page),_&&_(),h=!1}function De(s){var d,_;f=s.state;const c=document.querySelector("style[data-sveltekit]");c&&c.remove(),N=s.props.page;const p=ge();O=new Ct({target:n,props:{...s.props,stores:Z},hydrate:!0}),p();const i={from:null,to:me("to",{params:f.params,route:{id:(_=(d=f.route)==null?void 0:d.id)!=null?_:null},url:new URL(location.href)}),willUnload:!1,type:"enter"};a.after_navigate.forEach(m=>m(i)),l=!0}async function ne({url:s,params:c,branch:p,status:i,error:d,route:_,form:m}){var D;const v=p.filter(Boolean);let k="never";for(const I of p)(I==null?void 0:I.slash)!==void 0&&(k=I.slash);s.pathname=ht(s.pathname,k),s.search=s.search;const y={type:"loaded",state:{url:s,params:c,branch:p,error:d,route:_},props:{components:v.map(I=>I.node.component)}};m!==void 0&&(y.props.form=m);let b={},$=!N;for(let I=0;I<v.length;I+=1){const j=v[I];b={...b,...j.data},($||!f.branch.some(F=>F===j))&&(y.props[`data_${I}`]=b,$=$||Object.keys((D=j.data)!=null?D:{}).length>0)}if($||($=Object.keys(N.data).length!==Object.keys(b).length),!f.url||s.href!==f.url.href||f.error!==d||m!==void 0||$){y.props.page={error:d,params:c,route:_,status:i,url:s,form:m,data:$?b:N.data},Object.defineProperty(y.props.page,"routeId",{get(){throw new Error("$page.routeId has been replaced by $page.route.id")},enumerable:!1});const I=(j,F)=>{Object.defineProperty(y.props.page,j,{get:()=>{throw new Error(`$page.${j} has been replaced by $page.url.${F}`)}})};I("origin","origin"),I("path","pathname"),I("query","searchParams")}return y}async function be({loader:s,parent:c,url:p,params:i,route:d,server_data_node:_}){var y,b,$,C,D,I,j;let m=null;const v={dependencies:new Set,params:new Set,parent:!1,route:!1,url:!1},k=await s();if((y=k.shared)!=null&&y.load){let F=function(...w){for(const R of w){const{href:S}=new URL(R,p);v.dependencies.add(S)}};const ae={route:{get id(){return v.route=!0,d.id}},params:new Proxy(i,{get:(w,R)=>(v.params.add(R),w[R])}),data:(b=_==null?void 0:_.data)!=null?b:null,url:wt(p,()=>{v.url=!0}),async fetch(w,R){let S;w instanceof Request?(S=w.url,R={body:w.method==="GET"||w.method==="HEAD"?void 0:await w.blob(),cache:w.cache,credentials:w.credentials,headers:w.headers,integrity:w.integrity,keepalive:w.keepalive,method:w.method,mode:w.mode,redirect:w.redirect,referrer:w.referrer,referrerPolicy:w.referrerPolicy,signal:w.signal,...R}):S=w;const L=new URL(S,p).href;return F(L),l?$t(S,L,R):kt(S,R)},setHeaders:()=>{},depends:F,parent(){return v.parent=!0,c()}};Object.defineProperties(ae,{props:{get(){throw new Error("@migration task: Replace `props` with `data` stuff https://github.com/sveltejs/kit/discussions/5774#discussioncomment-3292693")},enumerable:!1},session:{get(){throw new Error("session is no longer available. See https://github.com/sveltejs/kit/discussions/5883")},enumerable:!1},stuff:{get(){throw new Error("@migration task: Remove stuff https://github.com/sveltejs/kit/discussions/5774#discussioncomment-3292693")},enumerable:!1},routeId:{get(){throw new Error("routeId has been replaced by route.id")},enumerable:!1}}),m=($=await k.shared.load.call(null,ae))!=null?$:null,m=m?await Kt(m):null}return{node:k,loader:s,server:_,shared:(C=k.shared)!=null&&C.load?{type:"data",data:m,uses:v}:null,data:(D=m!=null?m:_==null?void 0:_.data)!=null?D:null,slash:(j=(I=k.shared)==null?void 0:I.trailingSlash)!=null?j:_==null?void 0:_.slash}}function Ue(s,c,p,i,d){if(T)return!0;if(!i)return!1;if(i.parent&&s||i.route&&c||i.url&&p)return!0;for(const _ of i.params)if(d[_]!==f.params[_])return!0;for(const _ of i.dependencies)if(r.some(m=>m(new URL(_))))return!0;return!1}function ve(s,c){var p,i;return(s==null?void 0:s.type)==="data"?{type:"data",data:s.data,uses:{dependencies:new Set((p=s.uses.dependencies)!=null?p:[]),params:new Set((i=s.uses.params)!=null?i:[]),parent:!!s.uses.parent,route:!!s.uses.route,url:!!s.uses.url},slash:s.slash}:(s==null?void 0:s.type)==="skip"&&c!=null?c:null}async function Ve({id:s,invalidating:c,url:p,params:i,route:d}){var ae;if((o==null?void 0:o.id)===s)return o.promise;const{errors:_,layouts:m,leaf:v}=d,k=[...m,v];_.forEach(w=>w==null?void 0:w().catch(()=>{})),k.forEach(w=>w==null?void 0:w[1]().catch(()=>{}));let y=null;const b=f.url?s!==f.url.pathname+f.url.search:!1,$=f.route?s!==f.route.id:!1,C=k.reduce((w,R,S)=>{var oe;const L=f.branch[S],te=!!(R!=null&&R[0])&&((L==null?void 0:L.loader)!==R[1]||Ue(w.some(Boolean),$,b,(oe=L.server)==null?void 0:oe.uses,i));return w.push(te),w},[]);if(C.some(Boolean)){try{y=await Xe(p,C)}catch(w){return pe({status:500,error:se(w,{url:p,params:i,route:{id:d.id}}),url:p,route:d})}if(y.type==="redirect")return y}const D=y==null?void 0:y.nodes;let I=!1;const j=k.map(async(w,R)=>{var oe;if(!w)return;const S=f.branch[R],L=D==null?void 0:D[R];if((!L||L.type==="skip")&&w[1]===(S==null?void 0:S.loader)&&!Ue(I,$,b,(oe=S.shared)==null?void 0:oe.uses,i))return S;if(I=!0,(L==null?void 0:L.type)==="error")throw L;return be({loader:w[1],url:p,params:i,route:d,parent:async()=>{var Ke;const Ge={};for(let $e=0;$e<R;$e+=1)Object.assign(Ge,(Ke=await j[$e])==null?void 0:Ke.data);return Ge},server_data_node:ve(L===void 0&&w[0]?{type:"skip"}:L!=null?L:null,S==null?void 0:S.server)})});for(const w of j)w.catch(()=>{});const F=[];for(let w=0;w<k.length;w+=1)if(k[w])try{F.push(await j[w])}catch(R){if(R instanceof Ye)return{type:"redirect",location:R.location};let S=500,L;D!=null&&D.includes(R)?(S=(ae=R.status)!=null?ae:S,L=R.error):R instanceof Pe?(S=R.status,L=R.body):L=se(R,{params:i,url:p,route:{id:d.id}});const te=await qe(w,F,_);return te?await ne({url:p,params:i,branch:F.slice(0,te.idx).concat(te.node),status:S,error:L,route:d}):await Be(p,{id:d.id},L,S)}else F.push(void 0);return await ne({url:p,params:i,branch:F,status:200,error:null,route:d,form:c?void 0:null})}async function qe(s,c,p){for(;s--;)if(p[s]){let i=s;for(;!c[i];)i-=1;try{return{idx:i+1,node:{node:await p[s](),loader:p[s],data:{},server:null,shared:null}}}catch{continue}}}async function pe({status:s,error:c,url:p,route:i}){var y;const d={},_=await je();let m=null;if(_.server)try{const b=await Xe(p,[!0]);if(b.type!=="data"||b.nodes[0]&&b.nodes[0].type!=="data")throw 0;m=(y=b.nodes[0])!=null?y:null}catch{(p.origin!==location.origin||p.pathname!==location.pathname||t)&&await de(p)}const v=await be({loader:je,url:p,params:d,route:i,parent:()=>Promise.resolve({}),server_data_node:ve(m)}),k={node:await Te(),loader:Te,shared:null,server:null,data:null};return await ne({url:p,params:d,branch:[v,k],status:s,error:c,route:null})}function Ee(s,c){if(Ce(s))return;const p=_t(s.pathname.slice(e.length)||"/");for(const i of _e){const d=i.exec(p);if(d)return{id:s.pathname+s.search,invalidating:c,route:i,params:mt(d),url:s}}}function Ce(s){return s.origin!==location.origin||!s.pathname.startsWith(e)}function Fe({url:s,type:c,intent:p,delta:i}){var v,k,y,b,$;let d=!1;const _={from:me("from",{params:f.params,route:{id:(k=(v=f.route)==null?void 0:v.id)!=null?k:null},url:f.url}),to:me("to",{params:(y=p==null?void 0:p.params)!=null?y:null,route:{id:($=(b=p==null?void 0:p.route)==null?void 0:b.id)!=null?$:null},url:s}),willUnload:!p,type:c};i!==void 0&&(_.delta=i);const m={..._,cancel:()=>{d=!0}};return g||a.before_navigate.forEach(C=>C(m)),d?null:_}async function ke({url:s,scroll:c,keepfocus:p,redirect_chain:i,details:d,type:_,delta:m,nav_token:v,accepted:k,blocked:y}){const b=Ee(s,!1),$=Fe({url:s,type:_,delta:m,intent:b});if(!$){y();return}Ie(A),k(),g=!0,l&&Z.navigating.set($),await Ne(b,s,i,{scroll:c,keepfocus:p,details:d},v,()=>{g=!1,a.after_navigate.forEach(C=>C($)),Z.navigating.set(null)})}async function Be(s,c,p,i){return s.origin===location.origin&&s.pathname===location.pathname&&!t?await pe({status:i,error:p,url:s,route:c}):await de(s)}function de(s){return location.href=s.href,new Promise(()=>{})}return{after_navigate:s=>{Le(()=>(a.after_navigate.push(s),()=>{const c=a.after_navigate.indexOf(s);a.after_navigate.splice(c,1)}))},before_navigate:s=>{Le(()=>(a.before_navigate.push(s),()=>{const c=a.before_navigate.indexOf(s);a.before_navigate.splice(c,1)}))},disable_scroll_handling:()=>{(h||!l)&&(u=!1)},goto:(s,c={})=>{if("keepfocus"in c&&!("keepFocus"in c))throw new Error("`keepfocus` has been renamed to `keepFocus` (note the difference in casing)");if("noscroll"in c&&!("noScroll"in c))throw new Error("`noscroll` has been renamed to `noScroll` (note the difference in casing)");return re(s,c,[])},invalidate:s=>{if(s===void 0)throw new Error("`invalidate()` (with no arguments) has been replaced by `invalidateAll()`");if(typeof s=="function")r.push(s);else{const{href:c}=new URL(s,location.href);r.push(p=>p.href===c)}return fe()},invalidateAll:()=>(T=!0,fe()),prefetch:async s=>{const c=new URL(s,Me(document));await ue(c)},prefetch_routes:async s=>{const p=(s?_e.filter(i=>s.some(d=>i.exec(d))):_e).map(i=>Promise.all([...i.layouts,i.leaf].map(d=>d==null?void 0:d[1]())));await Promise.all(p)},apply_action:async s=>{if(s.type==="error"){const c=new URL(location.href),{branch:p,route:i}=f;if(!i)return;const d=await qe(f.branch.length,p,i.errors);if(d){const _=await ne({url:c,params:f.params,branch:p.slice(0,d.idx).concat(d.node),status:500,error:s.error,route:i});f=_.state;const m=ge();O.$set(_.props),m(),he().then(Se)}}else if(s.type==="redirect")re(s.location,{invalidateAll:!0},[]);else{const c={form:s.data,page:{...N,form:s.data,status:s.status}},p=ge();O.$set(c),p(),s.type==="success"&&he().then(Se)}},_start_router:()=>{history.scrollRestoration="manual",addEventListener("beforeunload",i=>{var _,m;let d=!1;if(!g){const v={from:me("from",{params:f.params,route:{id:(m=(_=f.route)==null?void 0:_.id)!=null?m:null},url:f.url}),to:null,willUnload:!0,type:"leave",cancel:()=>d=!0};a.before_navigate.forEach(k=>k(v))}d?(i.preventDefault(),i.returnValue=""):history.scrollRestoration="auto"}),addEventListener("visibilitychange",()=>{if(document.visibilityState==="hidden"){Ie(A);try{sessionStorage[Qe]=JSON.stringify(le)}catch{}}});const s=i=>{const{url:d,options:_,has:m}=ze(i);if(d&&_.prefetch&&!Ce(d)){if(_.reload||m.rel_external||m.target||m.download)return;ue(d)}};let c;const p=i=>{clearTimeout(c),c=setTimeout(()=>{var d;(d=i.target)==null||d.dispatchEvent(new CustomEvent("sveltekit:trigger_prefetch",{bubbles:!0}))},20)};addEventListener("touchstart",s),addEventListener("mousemove",p),addEventListener("sveltekit:trigger_prefetch",s),addEventListener("click",i=>{if(i.button||i.which!==1||i.metaKey||i.ctrlKey||i.shiftKey||i.altKey||i.defaultPrevented)return;const{a:d,url:_,options:m,has:v}=ze(i);if(!d||!_||!(d instanceof SVGAElement)&&_.protocol!==location.protocol&&!(_.protocol==="https:"||_.protocol==="http:")||v.download)return;if(m.reload||v.rel_external||v.target){Fe({url:_,type:"link"})||i.preventDefault(),g=!0;return}const[y,b]=_.href.split("#");if(b!==void 0&&y===location.href.split("#")[0]){E=!0,Ie(A),f.url=_,Z.page.set({...N,url:_}),Z.page.notify();return}ke({url:_,scroll:m.noscroll?Ae():null,keepfocus:!1,redirect_chain:[],details:{state:{},replaceState:_.href===location.href},accepted:()=>i.preventDefault(),blocked:()=>i.preventDefault(),type:"link"})}),addEventListener("popstate",i=>{var d;if((d=i.state)!=null&&d[Y]){if(i.state[Y]===A)return;const _=i.state[Y]-A;ke({url:new URL(location.href),scroll:le[i.state[Y]],keepfocus:!1,redirect_chain:[],details:null,accepted:()=>{A=i.state[Y]},blocked:()=>{history.go(-_)},type:"popstate",delta:_})}}),addEventListener("hashchange",()=>{E&&(E=!1,history.replaceState({...history.state,[Y]:++A},"",location.href))});for(const i of document.querySelectorAll("link"))i.rel==="icon"&&(i.href=i.href);addEventListener("pageshow",i=>{i.persisted&&Z.navigating.set(null)})},_hydrate:async({status:s,error:c,node_ids:p,params:i,route:d,data:_,form:m})=>{var y;t=!0;const v=new URL(location.href);let k;try{const b=p.map(async($,C)=>{const D=_[C];return be({loader:ye[$],url:v,params:i,route:d,parent:async()=>{const I={};for(let j=0;j<C;j+=1)Object.assign(I,(await b[j]).data);return I},server_data_node:ve(D)})});k=await ne({url:v,params:i,branch:await Promise.all(b),status:s,error:c,form:m,route:(y=_e.find(({id:$})=>$===d.id))!=null?y:null})}catch(b){if(b instanceof Ye){await de(new URL(b.location,location.href));return}k=await pe({status:b instanceof Pe?b.status:500,error:se(b,{url:v,params:i,route:d}),url:v,route:d})}De(k)}}}async function Xe(n,e){var f;const r=new URL(n);r.pathname=vt(n.pathname);const o=await we(r.href,{headers:{"x-sveltekit-invalidated":e.map(t=>t?"1":"").join(",")}}),a=await o.json();if(!o.ok)throw new Error(a);return(f=a.nodes)==null||f.forEach(t=>{var l,u;(t==null?void 0:t.type)==="data"&&(t.data=Zt(t.data),t.uses={dependencies:new Set((l=t.uses.dependencies)!=null?l:[]),params:new Set((u=t.uses.params)!=null?u:[]),parent:!!t.uses.parent,route:!!t.uses.route,url:!!t.uses.url})}),a}function se(n,e){var r;return n instanceof Pe?n.body:(r=Gt.handleError({error:n,event:e}))!=null?r:{message:e.route.id!=null?"Internal Error":"Not Found"}}const xt=["hash","href","host","hostname","origin","pathname","port","protocol","search","searchParams","toString","toJSON"];function me(n,e){for(const r of xt)Object.defineProperty(e,r,{get(){throw new Error(`The navigation shape changed - ${n}.${r} should now be ${n}.url.${r}`)},enumerable:!1});return Object.defineProperty(e,"routeId",{get(){throw new Error(`The navigation shape changed - ${n}.routeId should now be ${n}.route.id`)},enumerable:!1}),e}function ge(){return()=>{}}function Se(){const n=document.querySelector("[autofocus]");if(n)n.focus();else{const e=document.body,r=e.getAttribute("tabindex");e.tabIndex=-1,e.focus({preventScroll:!0}),setTimeout(()=>{var o;(o=getSelection())==null||o.removeAllRanges()}),r!==null?e.setAttribute("tabindex",r):e.removeAttribute("tabindex")}}async function nr({env:n,hydrate:e,paths:r,target:o,version:a}){ut(r),dt(a);const f=Qt({target:o,base:r.base});pt({client:f}),e?await f._hydrate(e):f.goto(location.href,{replaceState:!0}),f._start_router()}export{nr as start};
