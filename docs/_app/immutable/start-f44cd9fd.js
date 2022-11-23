import{S as xe,i as et,s as tt,a as nt,e as U,c as rt,b as G,g as Q,t as D,d as x,f as V,h as B,j as at,o as Le,k as ot,l as st,m as it,n as Re,p as H,q as lt,r as ct,u as ft,v as K,w as M,x as ce,y as z,z as W,A as he}from"./chunks/index-9ebca3e7.js";import{g as Me,f as ze,s as Z,a as Ae,b as ut,i as pt,c as dt}from"./chunks/singletons-6df3a92b.js";import{_ as J}from"./chunks/preload-helper-b21cceae.js";function ht(r,e){return r==="/"||e==="ignore"?r:e==="never"?r.endsWith("/")?r.slice(0,-1):r:e==="always"&&!r.endsWith("/")?r+"/":r}function mt(r){return r.split("%25").map(decodeURI).join("%25")}function _t(r){for(const e in r)r[e]=decodeURIComponent(r[e]);return r}const gt=["href","pathname","search","searchParams","toString","toJSON"];function wt(r,e){const n=new URL(r);for(const o of gt){let a=n[o];Object.defineProperty(n,o,{get(){return e(),a},enumerable:!0,configurable:!0})}return yt(n),n}function yt(r){Object.defineProperty(r,"hash",{get(){throw new Error("Cannot access event.url.hash. Consider using `$page.url.hash` inside a component instead")}})}const bt="/__data.json";function vt(r){return r.replace(/\/$/,"")+bt}function Et(r){let e=5381;if(typeof r=="string"){let n=r.length;for(;n;)e=e*33^r.charCodeAt(--n)}else if(ArrayBuffer.isView(r)){const n=new Uint8Array(r.buffer,r.byteOffset,r.byteLength);let o=n.length;for(;o;)e=e*33^n[--o]}else throw new TypeError("value must be a string or TypedArray");return(e>>>0).toString(36)}const we=window.fetch;window.fetch=(r,e)=>{if((r instanceof Request?r.method:(e==null?void 0:e.method)||"GET")!=="GET"){const o=new URL(r instanceof Request?r.url:r.toString(),document.baseURI).href;ie.delete(o)}return we(r,e)};const ie=new Map;function kt(r,e){const n=Ze(r,e),o=document.querySelector(n);if(o!=null&&o.textContent){const{body:a,...f}=JSON.parse(o.textContent),t=o.getAttribute("data-ttl");return t&&ie.set(n,{body:a,init:f,ttl:1e3*Number(t)}),Promise.resolve(new Response(a,f))}return we(r,e)}function $t(r,e,n){if(ie.size>0){const o=Ze(r,n),a=ie.get(o);if(a){if(performance.now()<a.ttl)return new Response(a.body,a.init);ie.delete(o)}}return we(e,n)}function Ze(r,e){let o=`script[data-sveltekit-fetched][data-url=${JSON.stringify(r instanceof Request?r.url:r)}]`;return(e==null?void 0:e.body)&&(typeof e.body=="string"||ArrayBuffer.isView(e.body))&&(o+=`[data-hash="${Et(e.body)}"]`),o}const Rt=/^(\[)?(\.\.\.)?(\w+)(?:=(\w+))?(\])?$/;function St(r){const e=[],n=[],o=[];let a=!0;return{pattern:r==="/"?/^\/$/:new RegExp(`^${It(r).map((t,l,u)=>{const h=/^\[\.\.\.(\w+)(?:=(\w+))?\]$/.exec(t);if(h)return e.push(h[1]),n.push(h[2]),o.push(!1),"(?:/(.*))?";const g=/^\[\[(\w+)(?:=(\w+))?\]\]$/.exec(t);if(g)return e.push(g[1]),n.push(g[2]),o.push(!0),"(?:/([^/]+))?";const E=l===u.length-1;return t?"/"+t.split(/\[(.+?)\](?!\])/).map((A,F)=>{if(F%2){if(A.startsWith("x+"))return Se(String.fromCharCode(parseInt(A.slice(2),16)));if(A.startsWith("u+"))return Se(String.fromCharCode(...A.slice(2).split("-").map(ue=>parseInt(ue,16))));const N=Rt.exec(A);if(!N)throw new Error(`Invalid param: ${A}. Params and matcher names can only have underscores and alphanumeric characters.`);const[,X,ee,fe,ne]=N;return e.push(fe),n.push(ne),o.push(!!X),ee?"(.*?)":X?"([^/]*)?":"([^/]+?)"}return E&&A.includes(".")&&(a=!1),Se(A)}).join(""):void 0}).join("")}${a?"/?":""}$`),names:e,types:n,optional:o}}function Ot(r){return!/^\([^)]+\)$/.test(r)}function It(r){return r.slice(1).split("/").filter(Ot)}function Lt(r,{names:e,types:n,optional:o},a){const f={};for(let t=0;t<e.length;t+=1){const l=e[t],u=n[t];let h=r[t+1];if(h||!o[t]){if(u){const g=a[u];if(!g)throw new Error(`Missing "${u}" param matcher`);if(!g(h))return}f[l]=h!=null?h:""}}return f}function Se(r){return r.normalize().replace(/[[\]]/g,"\\$&").replace(/%/g,"%25").replace(/\//g,"%2[Ff]").replace(/\?/g,"%3[Ff]").replace(/#/g,"%23").replace(/[.*+?^${}()|\\]/g,"\\$&")}function At(r,e,n,o){const a=new Set(e);return Object.entries(n).map(([l,[u,h,g]])=>{const{pattern:E,names:P,types:S,optional:A}=St(l),F={id:l,exec:N=>{const X=E.exec(N);if(X)return Lt(X,{names:P,types:S,optional:A},o)},errors:[1,...g||[]].map(N=>r[N]),layouts:[0,...h||[]].map(t),leaf:f(u)};return F.errors.length=F.layouts.length=Math.max(F.errors.length,F.layouts.length),F});function f(l){const u=l<0;return u&&(l=~l),[u,r[l]]}function t(l){return l===void 0?l:[a.has(l),r[l]]}}function jt(r){let e,n,o;var a=r[0][0];function f(t){return{props:{data:t[2],form:t[1]}}}return a&&(e=K(a,f(r))),{c(){e&&M(e.$$.fragment),n=U()},l(t){e&&ce(e.$$.fragment,t),n=U()},m(t,l){e&&z(e,t,l),G(t,n,l),o=!0},p(t,l){const u={};if(l&4&&(u.data=t[2]),l&2&&(u.form=t[1]),a!==(a=t[0][0])){if(e){Q();const h=e;D(h.$$.fragment,1,0,()=>{W(h,1)}),x()}a?(e=K(a,f(t)),M(e.$$.fragment),V(e.$$.fragment,1),z(e,n.parentNode,n)):e=null}else a&&e.$set(u)},i(t){o||(e&&V(e.$$.fragment,t),o=!0)},o(t){e&&D(e.$$.fragment,t),o=!1},d(t){t&&B(n),e&&W(e,t)}}}function Pt(r){let e,n,o;var a=r[0][0];function f(t){return{props:{data:t[2],$$slots:{default:[Dt]},$$scope:{ctx:t}}}}return a&&(e=K(a,f(r))),{c(){e&&M(e.$$.fragment),n=U()},l(t){e&&ce(e.$$.fragment,t),n=U()},m(t,l){e&&z(e,t,l),G(t,n,l),o=!0},p(t,l){const u={};if(l&4&&(u.data=t[2]),l&1051&&(u.$$scope={dirty:l,ctx:t}),a!==(a=t[0][0])){if(e){Q();const h=e;D(h.$$.fragment,1,0,()=>{W(h,1)}),x()}a?(e=K(a,f(t)),M(e.$$.fragment),V(e.$$.fragment,1),z(e,n.parentNode,n)):e=null}else a&&e.$set(u)},i(t){o||(e&&V(e.$$.fragment,t),o=!0)},o(t){e&&D(e.$$.fragment,t),o=!1},d(t){t&&B(n),e&&W(e,t)}}}function Nt(r){let e,n,o;var a=r[0][1];function f(t){return{props:{data:t[3],form:t[1]}}}return a&&(e=K(a,f(r))),{c(){e&&M(e.$$.fragment),n=U()},l(t){e&&ce(e.$$.fragment,t),n=U()},m(t,l){e&&z(e,t,l),G(t,n,l),o=!0},p(t,l){const u={};if(l&8&&(u.data=t[3]),l&2&&(u.form=t[1]),a!==(a=t[0][1])){if(e){Q();const h=e;D(h.$$.fragment,1,0,()=>{W(h,1)}),x()}a?(e=K(a,f(t)),M(e.$$.fragment),V(e.$$.fragment,1),z(e,n.parentNode,n)):e=null}else a&&e.$set(u)},i(t){o||(e&&V(e.$$.fragment,t),o=!0)},o(t){e&&D(e.$$.fragment,t),o=!1},d(t){t&&B(n),e&&W(e,t)}}}function Tt(r){let e,n,o;var a=r[0][1];function f(t){return{props:{data:t[3],$$slots:{default:[Ut]},$$scope:{ctx:t}}}}return a&&(e=K(a,f(r))),{c(){e&&M(e.$$.fragment),n=U()},l(t){e&&ce(e.$$.fragment,t),n=U()},m(t,l){e&&z(e,t,l),G(t,n,l),o=!0},p(t,l){const u={};if(l&8&&(u.data=t[3]),l&1043&&(u.$$scope={dirty:l,ctx:t}),a!==(a=t[0][1])){if(e){Q();const h=e;D(h.$$.fragment,1,0,()=>{W(h,1)}),x()}a?(e=K(a,f(t)),M(e.$$.fragment),V(e.$$.fragment,1),z(e,n.parentNode,n)):e=null}else a&&e.$set(u)},i(t){o||(e&&V(e.$$.fragment,t),o=!0)},o(t){e&&D(e.$$.fragment,t),o=!1},d(t){t&&B(n),e&&W(e,t)}}}function Ut(r){let e,n,o;var a=r[0][2];function f(t){return{props:{data:t[4],form:t[1]}}}return a&&(e=K(a,f(r))),{c(){e&&M(e.$$.fragment),n=U()},l(t){e&&ce(e.$$.fragment,t),n=U()},m(t,l){e&&z(e,t,l),G(t,n,l),o=!0},p(t,l){const u={};if(l&16&&(u.data=t[4]),l&2&&(u.form=t[1]),a!==(a=t[0][2])){if(e){Q();const h=e;D(h.$$.fragment,1,0,()=>{W(h,1)}),x()}a?(e=K(a,f(t)),M(e.$$.fragment),V(e.$$.fragment,1),z(e,n.parentNode,n)):e=null}else a&&e.$set(u)},i(t){o||(e&&V(e.$$.fragment,t),o=!0)},o(t){e&&D(e.$$.fragment,t),o=!1},d(t){t&&B(n),e&&W(e,t)}}}function Dt(r){let e,n,o,a;const f=[Tt,Nt],t=[];function l(u,h){return u[0][2]?0:1}return e=l(r),n=t[e]=f[e](r),{c(){n.c(),o=U()},l(u){n.l(u),o=U()},m(u,h){t[e].m(u,h),G(u,o,h),a=!0},p(u,h){let g=e;e=l(u),e===g?t[e].p(u,h):(Q(),D(t[g],1,1,()=>{t[g]=null}),x(),n=t[e],n?n.p(u,h):(n=t[e]=f[e](u),n.c()),V(n,1),n.m(o.parentNode,o))},i(u){a||(V(n),a=!0)},o(u){D(n),a=!1},d(u){t[e].d(u),u&&B(o)}}}function We(r){let e,n=r[6]&&He(r);return{c(){e=ot("div"),n&&n.c(),this.h()},l(o){e=st(o,"DIV",{id:!0,"aria-live":!0,"aria-atomic":!0,style:!0});var a=it(e);n&&n.l(a),a.forEach(B),this.h()},h(){Re(e,"id","svelte-announcer"),Re(e,"aria-live","assertive"),Re(e,"aria-atomic","true"),H(e,"position","absolute"),H(e,"left","0"),H(e,"top","0"),H(e,"clip","rect(0 0 0 0)"),H(e,"clip-path","inset(50%)"),H(e,"overflow","hidden"),H(e,"white-space","nowrap"),H(e,"width","1px"),H(e,"height","1px")},m(o,a){G(o,e,a),n&&n.m(e,null)},p(o,a){o[6]?n?n.p(o,a):(n=He(o),n.c(),n.m(e,null)):n&&(n.d(1),n=null)},d(o){o&&B(e),n&&n.d()}}}function He(r){let e;return{c(){e=lt(r[7])},l(n){e=ct(n,r[7])},m(n,o){G(n,e,o)},p(n,o){o&128&&ft(e,n[7])},d(n){n&&B(e)}}}function Vt(r){let e,n,o,a,f;const t=[Pt,jt],l=[];function u(g,E){return g[0][1]?0:1}e=u(r),n=l[e]=t[e](r);let h=r[5]&&We(r);return{c(){n.c(),o=nt(),h&&h.c(),a=U()},l(g){n.l(g),o=rt(g),h&&h.l(g),a=U()},m(g,E){l[e].m(g,E),G(g,o,E),h&&h.m(g,E),G(g,a,E),f=!0},p(g,[E]){let P=e;e=u(g),e===P?l[e].p(g,E):(Q(),D(l[P],1,1,()=>{l[P]=null}),x(),n=l[e],n?n.p(g,E):(n=l[e]=t[e](g),n.c()),V(n,1),n.m(o.parentNode,o)),g[5]?h?h.p(g,E):(h=We(g),h.c(),h.m(a.parentNode,a)):h&&(h.d(1),h=null)},i(g){f||(V(n),f=!0)},o(g){D(n),f=!1},d(g){l[e].d(g),g&&B(o),h&&h.d(g),g&&B(a)}}}function qt(r,e,n){let{stores:o}=e,{page:a}=e,{components:f}=e,{form:t}=e,{data_0:l=null}=e,{data_1:u=null}=e,{data_2:h=null}=e;at(o.page.notify);let g=!1,E=!1,P=null;return Le(()=>{const S=o.page.subscribe(()=>{g&&(n(6,E=!0),n(7,P=document.title||"untitled page"))});return n(5,g=!0),S}),r.$$set=S=>{"stores"in S&&n(8,o=S.stores),"page"in S&&n(9,a=S.page),"components"in S&&n(0,f=S.components),"form"in S&&n(1,t=S.form),"data_0"in S&&n(2,l=S.data_0),"data_1"in S&&n(3,u=S.data_1),"data_2"in S&&n(4,h=S.data_2)},r.$$.update=()=>{r.$$.dirty&768&&o.page.set(a)},[f,t,l,u,h,g,E,P,o,a]}class Ct extends xe{constructor(e){super(),et(this,e,qt,Vt,tt,{stores:8,page:9,components:0,form:1,data_0:2,data_1:3,data_2:4})}}const Ft={},ye=[()=>J(()=>import("./chunks/0-684d89be.js"),["./chunks/0-684d89be.js","./chunks/_layout-8d2a742b.js","./components/pages/_layout.svelte-7254775e.js","./chunks/index-9ebca3e7.js","./chunks/stores-b9fa0e34.js","./chunks/singletons-6df3a92b.js","./chunks/index-c5f0cd70.js"],import.meta.url),()=>J(()=>import("./chunks/1-5a9f120d.js"),["./chunks/1-5a9f120d.js","./components/error.svelte-55c0695d.js","./chunks/index-9ebca3e7.js","./chunks/stores-b9fa0e34.js","./chunks/singletons-6df3a92b.js","./chunks/index-c5f0cd70.js"],import.meta.url),()=>J(()=>import("./chunks/2-903fbd5d.js"),["./chunks/2-903fbd5d.js","./components/pages/2021/day/_layout.svelte-f8187071.js","./chunks/preload-helper-b21cceae.js","./chunks/index-9ebca3e7.js","./chunks/singletons-6df3a92b.js","./chunks/index-c5f0cd70.js","./chunks/stores-2798e9e0.js","./chunks/stores-b9fa0e34.js"],import.meta.url),()=>J(()=>import("./chunks/3-7f165e17.js"),["./chunks/3-7f165e17.js","./components/pages/_page.svelte-76dce34b.js","./chunks/preload-helper-b21cceae.js","./chunks/index-9ebca3e7.js","./chunks/pages-36184dd3.js","./chunks/stores-b9fa0e34.js","./chunks/singletons-6df3a92b.js","./chunks/index-c5f0cd70.js"],import.meta.url),()=>J(()=>import("./chunks/4-7ca2fed7.js"),["./chunks/4-7ca2fed7.js","./components/pages/2021/_page.svelte-c4e713f1.js","./chunks/preload-helper-b21cceae.js","./chunks/index-9ebca3e7.js","./chunks/pages-36184dd3.js","./chunks/stores-b9fa0e34.js","./chunks/singletons-6df3a92b.js","./chunks/index-c5f0cd70.js"],import.meta.url),()=>J(()=>import("./chunks/5-bf7deee6.js"),["./chunks/5-bf7deee6.js","./components/pages/2021/day/01/_page.svelte-9f7984c7.js","./chunks/index-9ebca3e7.js","./chunks/stores-2798e9e0.js","./chunks/index-c5f0cd70.js"],import.meta.url),()=>J(()=>import("./chunks/6-f3ee978c.js"),["./chunks/6-f3ee978c.js","./components/pages/2021/day/02/_page.svelte-8c234a83.js","./chunks/index-9ebca3e7.js"],import.meta.url),()=>J(()=>import("./chunks/7-d7257136.js"),["./chunks/7-d7257136.js","./components/pages/2021/day/03/_page.svelte-da088859.js","./chunks/index-9ebca3e7.js"],import.meta.url),()=>J(()=>import("./chunks/8-b69f15a9.js"),["./chunks/8-b69f15a9.js","./components/pages/2022/_page.svelte-10ab24d2.js","./chunks/preload-helper-b21cceae.js","./chunks/index-9ebca3e7.js","./chunks/pages-36184dd3.js","./chunks/stores-b9fa0e34.js","./chunks/singletons-6df3a92b.js","./chunks/index-c5f0cd70.js"],import.meta.url),()=>J(()=>import("./chunks/9-571121f9.js"),["./chunks/9-571121f9.js","./components/pages/2022/day/01/_page.svelte-12defdd0.js","./chunks/index-9ebca3e7.js"],import.meta.url)],Bt=[],Jt={"/":[3],"/2021":[4],"/2021/day/01":[5,[2]],"/2021/day/02":[6,[2]],"/2021/day/03":[7,[2]],"/2022":[8],"/2022/day/01":[9]},Gt={handleError:({error:r})=>{console.error(r)}};class je{constructor(e,n){this.status=e,typeof n=="string"?this.body={message:n}:n?this.body=n:this.body={message:`Error: ${e}`}}toString(){return JSON.stringify(this.body)}}class Ye{constructor(e,n){this.status=e,this.location=n}}async function Kt(r){var e;for(const n in r)if(typeof((e=r[n])==null?void 0:e.then)=="function")return Object.fromEntries(await Promise.all(Object.entries(r).map(async([o,a])=>[o,await a])));return r}Object.getOwnPropertyNames(Object.prototype).sort().join("\0");Object.getOwnPropertyNames(Object.prototype).sort().join("\0");const Mt=-1,zt=-2,Wt=-3,Ht=-4,Yt=-5,Xt=-6;function Zt(r){if(typeof r=="number")return o(r,!0);if(!Array.isArray(r)||r.length===0)throw new Error("Invalid input");const e=r,n=Array(e.length);function o(a,f=!1){if(a===Mt)return;if(a===Wt)return NaN;if(a===Ht)return 1/0;if(a===Yt)return-1/0;if(a===Xt)return-0;if(f)throw new Error("Invalid input");if(a in n)return n[a];const t=e[a];if(!t||typeof t!="object")n[a]=t;else if(Array.isArray(t))if(typeof t[0]=="string")switch(t[0]){case"Date":n[a]=new Date(t[1]);break;case"Set":const u=new Set;n[a]=u;for(let E=1;E<t.length;E+=1)u.add(o(t[E]));break;case"Map":const h=new Map;n[a]=h;for(let E=1;E<t.length;E+=2)h.set(o(t[E]),o(t[E+1]));break;case"RegExp":n[a]=new RegExp(t[1],t[2]);break;case"Object":n[a]=Object(t[1]);break;case"BigInt":n[a]=BigInt(t[1]);break;case"null":const g=Object.create(null);n[a]=g;for(let E=1;E<t.length;E+=2)g[t[E]]=o(t[E+1]);break}else{const l=new Array(t.length);n[a]=l;for(let u=0;u<t.length;u+=1){const h=t[u];h!==zt&&(l[u]=o(h))}}else{const l={};n[a]=l;for(const u in t){const h=t[u];l[u]=o(h)}}return n[a]}return o(0)}const Qe="sveltekit:scroll",Y="sveltekit:index",me=At(ye,Bt,Jt,Ft),Pe=ye[0],Ne=ye[1];Pe();Ne();let le={};try{le=JSON.parse(sessionStorage[Qe])}catch{}function Oe(r){le[r]=Ae()}function Qt({target:r,base:e}){var Je;const n=[];let o=null;const a={before_navigate:[],after_navigate:[]};let f={branch:[],error:null,url:null},t=!1,l=!1,u=!0,h=!1,g=!1,E=!1,P=!1,S,A=(Je=history.state)==null?void 0:Je[Y];A||(A=Date.now(),history.replaceState({...history.state,[Y]:A},"",location.href));const F=le[A];F&&(history.scrollRestoration="manual",scrollTo(F.x,F.y));let N,X,ee;async function fe(){ee=ee||Promise.resolve(),await ee,ee=null;const s=new URL(location.href),c=Ee(s,!0);o=null,await Te(c,s,[])}async function ne(s,{noScroll:c=!1,replaceState:p=!1,keepFocus:i=!1,state:d={},invalidateAll:m=!1},_,v){return typeof s=="string"&&(s=new URL(s,Me(document))),ke({url:s,scroll:c?Ae():null,keepfocus:i,redirect_chain:_,details:{state:d,replaceState:p},nav_token:v,accepted:()=>{m&&(P=!0)},blocked:()=>{},type:"goto"})}async function ue(s){const c=Ee(s,!1);if(!c)throw new Error(`Attempted to prefetch a URL that does not belong to this app: ${s}`);return o={id:c.id,promise:Ve(c).then(p=>(p.type==="loaded"&&p.state.error&&(o=null),p))},o.promise}async function Te(s,c,p,i,d={},m){var v,k;X=d;let _=s&&await Ve(s);if(_||(_=await Be(c,{id:null},se(new Error(`Not found: ${c.pathname}`),{url:c,params:{},route:{id:null}}),404)),c=(s==null?void 0:s.url)||c,X!==d)return!1;if(_.type==="redirect")if(p.length>10||p.includes(c.pathname))_=await pe({status:500,error:se(new Error("Redirect loop"),{url:c,params:{},route:{id:null}}),url:c,route:{id:null}});else return ne(new URL(_.location,c).href,{},[...p,c.pathname],d),!1;else((k=(v=_.props)==null?void 0:v.page)==null?void 0:k.status)>=400&&await Z.updated.check()&&await de(c);if(n.length=0,P=!1,h=!0,i&&i.details){const{details:y}=i,b=y.replaceState?0:1;y.state[Y]=A+=b,history[y.replaceState?"replaceState":"pushState"](y.state,"",c)}if(o=null,l){f=_.state,_.props.page&&(_.props.page.url=c);const y=ge();S.$set(_.props),y()}else Ue(_);if(i){const{scroll:y,keepfocus:b}=i;if(b||Ie(),await he(),u){const $=c.hash&&document.getElementById(c.hash.slice(1));y?scrollTo(y.x,y.y):$?$.scrollIntoView():scrollTo(0,0)}}else await he();u=!0,_.props.page&&(N=_.props.page),m&&m(),h=!1}function Ue(s){var d,m;f=s.state;const c=document.querySelector("style[data-sveltekit]");c&&c.remove(),N=s.props.page;const p=ge();S=new Ct({target:r,props:{...s.props,stores:Z},hydrate:!0}),p();const i={from:null,to:_e("to",{params:f.params,route:{id:(m=(d=f.route)==null?void 0:d.id)!=null?m:null},url:new URL(location.href)}),willUnload:!1,type:"enter"};a.after_navigate.forEach(_=>_(i)),l=!0}async function re({url:s,params:c,branch:p,status:i,error:d,route:m,form:_}){var T;const v=p.filter(Boolean);let k="never";for(const O of p)(O==null?void 0:O.slash)!==void 0&&(k=O.slash);s.pathname=ht(s.pathname,k),s.search=s.search;const y={type:"loaded",state:{url:s,params:c,branch:p,error:d,route:m},props:{components:v.map(O=>O.node.component)}};_!==void 0&&(y.props.form=_);let b={},$=!N;for(let O=0;O<v.length;O+=1){const j=v[O];b={...b,...j.data},($||!f.branch.some(C=>C===j))&&(y.props[`data_${O}`]=b,$=$||Object.keys((T=j.data)!=null?T:{}).length>0)}if($||($=Object.keys(N.data).length!==Object.keys(b).length),!f.url||s.href!==f.url.href||f.error!==d||_!==void 0||$){y.props.page={error:d,params:c,route:m,status:i,url:s,form:_,data:$?b:N.data},Object.defineProperty(y.props.page,"routeId",{get(){throw new Error("$page.routeId has been replaced by $page.route.id")},enumerable:!1});const O=(j,C)=>{Object.defineProperty(y.props.page,j,{get:()=>{throw new Error(`$page.${j} has been replaced by $page.url.${C}`)}})};O("origin","origin"),O("path","pathname"),O("query","searchParams")}return y}async function be({loader:s,parent:c,url:p,params:i,route:d,server_data_node:m}){var y,b,$,q,T,O,j;let _=null;const v={dependencies:new Set,params:new Set,parent:!1,route:!1,url:!1},k=await s();if((y=k.shared)!=null&&y.load){let C=function(...w){for(const R of w){const{href:I}=new URL(R,p);v.dependencies.add(I)}};const ae={route:{get id(){return v.route=!0,d.id}},params:new Proxy(i,{get:(w,R)=>(v.params.add(R),w[R])}),data:(b=m==null?void 0:m.data)!=null?b:null,url:wt(p,()=>{v.url=!0}),async fetch(w,R){let I;w instanceof Request?(I=w.url,R={body:w.method==="GET"||w.method==="HEAD"?void 0:await w.blob(),cache:w.cache,credentials:w.credentials,headers:w.headers,integrity:w.integrity,keepalive:w.keepalive,method:w.method,mode:w.mode,redirect:w.redirect,referrer:w.referrer,referrerPolicy:w.referrerPolicy,signal:w.signal,...R}):I=w;const L=new URL(I,p).href;return C(L),l?$t(I,L,R):kt(I,R)},setHeaders:()=>{},depends:C,parent(){return v.parent=!0,c()}};Object.defineProperties(ae,{props:{get(){throw new Error("@migration task: Replace `props` with `data` stuff https://github.com/sveltejs/kit/discussions/5774#discussioncomment-3292693")},enumerable:!1},session:{get(){throw new Error("session is no longer available. See https://github.com/sveltejs/kit/discussions/5883")},enumerable:!1},stuff:{get(){throw new Error("@migration task: Remove stuff https://github.com/sveltejs/kit/discussions/5774#discussioncomment-3292693")},enumerable:!1},routeId:{get(){throw new Error("routeId has been replaced by route.id")},enumerable:!1}}),_=($=await k.shared.load.call(null,ae))!=null?$:null,_=_?await Kt(_):null}return{node:k,loader:s,server:m,shared:(q=k.shared)!=null&&q.load?{type:"data",data:_,uses:v}:null,data:(T=_!=null?_:m==null?void 0:m.data)!=null?T:null,slash:(j=(O=k.shared)==null?void 0:O.trailingSlash)!=null?j:m==null?void 0:m.slash}}function De(s,c,p,i,d){if(P)return!0;if(!i)return!1;if(i.parent&&s||i.route&&c||i.url&&p)return!0;for(const m of i.params)if(d[m]!==f.params[m])return!0;for(const m of i.dependencies)if(n.some(_=>_(new URL(m))))return!0;return!1}function ve(s,c){var p,i;return(s==null?void 0:s.type)==="data"?{type:"data",data:s.data,uses:{dependencies:new Set((p=s.uses.dependencies)!=null?p:[]),params:new Set((i=s.uses.params)!=null?i:[]),parent:!!s.uses.parent,route:!!s.uses.route,url:!!s.uses.url},slash:s.slash}:(s==null?void 0:s.type)==="skip"&&c!=null?c:null}async function Ve({id:s,invalidating:c,url:p,params:i,route:d}){var ae;if((o==null?void 0:o.id)===s)return o.promise;const{errors:m,layouts:_,leaf:v}=d,k=[..._,v];m.forEach(w=>w==null?void 0:w().catch(()=>{})),k.forEach(w=>w==null?void 0:w[1]().catch(()=>{}));let y=null;const b=f.url?s!==f.url.pathname+f.url.search:!1,$=f.route?s!==f.route.id:!1,q=k.reduce((w,R,I)=>{var oe;const L=f.branch[I],te=!!(R!=null&&R[0])&&((L==null?void 0:L.loader)!==R[1]||De(w.some(Boolean),$,b,(oe=L.server)==null?void 0:oe.uses,i));return w.push(te),w},[]);if(q.some(Boolean)){try{y=await Xe(p,q)}catch(w){return pe({status:500,error:se(w,{url:p,params:i,route:{id:d.id}}),url:p,route:d})}if(y.type==="redirect")return y}const T=y==null?void 0:y.nodes;let O=!1;const j=k.map(async(w,R)=>{var oe;if(!w)return;const I=f.branch[R],L=T==null?void 0:T[R];if((!L||L.type==="skip")&&w[1]===(I==null?void 0:I.loader)&&!De(O,$,b,(oe=I.shared)==null?void 0:oe.uses,i))return I;if(O=!0,(L==null?void 0:L.type)==="error")throw L;return be({loader:w[1],url:p,params:i,route:d,parent:async()=>{var Ke;const Ge={};for(let $e=0;$e<R;$e+=1)Object.assign(Ge,(Ke=await j[$e])==null?void 0:Ke.data);return Ge},server_data_node:ve(L===void 0&&w[0]?{type:"skip"}:L!=null?L:null,I==null?void 0:I.server)})});for(const w of j)w.catch(()=>{});const C=[];for(let w=0;w<k.length;w+=1)if(k[w])try{C.push(await j[w])}catch(R){if(R instanceof Ye)return{type:"redirect",location:R.location};let I=500,L;T!=null&&T.includes(R)?(I=(ae=R.status)!=null?ae:I,L=R.error):R instanceof je?(I=R.status,L=R.body):L=se(R,{params:i,url:p,route:{id:d.id}});const te=await qe(w,C,m);return te?await re({url:p,params:i,branch:C.slice(0,te.idx).concat(te.node),status:I,error:L,route:d}):await Be(p,{id:d.id},L,I)}else C.push(void 0);return await re({url:p,params:i,branch:C,status:200,error:null,route:d,form:c?void 0:null})}async function qe(s,c,p){for(;s--;)if(p[s]){let i=s;for(;!c[i];)i-=1;try{return{idx:i+1,node:{node:await p[s](),loader:p[s],data:{},server:null,shared:null}}}catch{continue}}}async function pe({status:s,error:c,url:p,route:i}){var y;const d={},m=await Pe();let _=null;if(m.server)try{const b=await Xe(p,[!0]);if(b.type!=="data"||b.nodes[0]&&b.nodes[0].type!=="data")throw 0;_=(y=b.nodes[0])!=null?y:null}catch{(p.origin!==location.origin||p.pathname!==location.pathname||t)&&await de(p)}const v=await be({loader:Pe,url:p,params:d,route:i,parent:()=>Promise.resolve({}),server_data_node:ve(_)}),k={node:await Ne(),loader:Ne,shared:null,server:null,data:null};return await re({url:p,params:d,branch:[v,k],status:s,error:c,route:null})}function Ee(s,c){if(Ce(s))return;const p=mt(s.pathname.slice(e.length)||"/");for(const i of me){const d=i.exec(p);if(d)return{id:s.pathname+s.search,invalidating:c,route:i,params:_t(d),url:s}}}function Ce(s){return s.origin!==location.origin||!s.pathname.startsWith(e)}function Fe({url:s,type:c,intent:p,delta:i}){var v,k,y,b,$;let d=!1;const m={from:_e("from",{params:f.params,route:{id:(k=(v=f.route)==null?void 0:v.id)!=null?k:null},url:f.url}),to:_e("to",{params:(y=p==null?void 0:p.params)!=null?y:null,route:{id:($=(b=p==null?void 0:p.route)==null?void 0:b.id)!=null?$:null},url:s}),willUnload:!p,type:c};i!==void 0&&(m.delta=i);const _={...m,cancel:()=>{d=!0}};return g||a.before_navigate.forEach(q=>q(_)),d?null:m}async function ke({url:s,scroll:c,keepfocus:p,redirect_chain:i,details:d,type:m,delta:_,nav_token:v,accepted:k,blocked:y}){const b=Ee(s,!1),$=Fe({url:s,type:m,delta:_,intent:b});if(!$){y();return}Oe(A),k(),g=!0,l&&Z.navigating.set($),await Te(b,s,i,{scroll:c,keepfocus:p,details:d},v,()=>{g=!1,a.after_navigate.forEach(q=>q($)),Z.navigating.set(null)})}async function Be(s,c,p,i){return s.origin===location.origin&&s.pathname===location.pathname&&!t?await pe({status:i,error:p,url:s,route:c}):await de(s)}function de(s){return location.href=s.href,new Promise(()=>{})}return{after_navigate:s=>{Le(()=>(a.after_navigate.push(s),()=>{const c=a.after_navigate.indexOf(s);a.after_navigate.splice(c,1)}))},before_navigate:s=>{Le(()=>(a.before_navigate.push(s),()=>{const c=a.before_navigate.indexOf(s);a.before_navigate.splice(c,1)}))},disable_scroll_handling:()=>{(h||!l)&&(u=!1)},goto:(s,c={})=>{if("keepfocus"in c&&!("keepFocus"in c))throw new Error("`keepfocus` has been renamed to `keepFocus` (note the difference in casing)");if("noscroll"in c&&!("noScroll"in c))throw new Error("`noscroll` has been renamed to `noScroll` (note the difference in casing)");return ne(s,c,[])},invalidate:s=>{if(s===void 0)throw new Error("`invalidate()` (with no arguments) has been replaced by `invalidateAll()`");if(typeof s=="function")n.push(s);else{const{href:c}=new URL(s,location.href);n.push(p=>p.href===c)}return fe()},invalidateAll:()=>(P=!0,fe()),prefetch:async s=>{const c=new URL(s,Me(document));await ue(c)},prefetch_routes:async s=>{const p=(s?me.filter(i=>s.some(d=>i.exec(d))):me).map(i=>Promise.all([...i.layouts,i.leaf].map(d=>d==null?void 0:d[1]())));await Promise.all(p)},apply_action:async s=>{if(s.type==="error"){const c=new URL(location.href),{branch:p,route:i}=f;if(!i)return;const d=await qe(f.branch.length,p,i.errors);if(d){const m=await re({url:c,params:f.params,branch:p.slice(0,d.idx).concat(d.node),status:500,error:s.error,route:i});f=m.state;const _=ge();S.$set(m.props),_(),he().then(Ie)}}else if(s.type==="redirect")ne(s.location,{invalidateAll:!0},[]);else{const c={form:s.data,page:{...N,form:s.data,status:s.status}},p=ge();S.$set(c),p(),s.type==="success"&&he().then(Ie)}},_start_router:()=>{history.scrollRestoration="manual",addEventListener("beforeunload",i=>{var m,_;let d=!1;if(!g){const v={from:_e("from",{params:f.params,route:{id:(_=(m=f.route)==null?void 0:m.id)!=null?_:null},url:f.url}),to:null,willUnload:!0,type:"leave",cancel:()=>d=!0};a.before_navigate.forEach(k=>k(v))}d?(i.preventDefault(),i.returnValue=""):history.scrollRestoration="auto"}),addEventListener("visibilitychange",()=>{if(document.visibilityState==="hidden"){Oe(A);try{sessionStorage[Qe]=JSON.stringify(le)}catch{}}});const s=i=>{const{url:d,options:m,has:_}=ze(i);if(d&&m.prefetch&&!Ce(d)){if(m.reload||_.rel_external||_.target||_.download)return;ue(d)}};let c;const p=i=>{clearTimeout(c),c=setTimeout(()=>{var d;(d=i.target)==null||d.dispatchEvent(new CustomEvent("sveltekit:trigger_prefetch",{bubbles:!0}))},20)};addEventListener("touchstart",s),addEventListener("mousemove",p),addEventListener("sveltekit:trigger_prefetch",s),addEventListener("click",i=>{if(i.button||i.which!==1||i.metaKey||i.ctrlKey||i.shiftKey||i.altKey||i.defaultPrevented)return;const{a:d,url:m,options:_,has:v}=ze(i);if(!d||!m||!(d instanceof SVGAElement)&&m.protocol!==location.protocol&&!(m.protocol==="https:"||m.protocol==="http:")||v.download)return;if(_.reload||v.rel_external||v.target){Fe({url:m,type:"link"})||i.preventDefault(),g=!0;return}const[y,b]=m.href.split("#");if(b!==void 0&&y===location.href.split("#")[0]){E=!0,Oe(A),f.url=m,Z.page.set({...N,url:m}),Z.page.notify();return}ke({url:m,scroll:_.noscroll?Ae():null,keepfocus:!1,redirect_chain:[],details:{state:{},replaceState:m.href===location.href},accepted:()=>i.preventDefault(),blocked:()=>i.preventDefault(),type:"link"})}),addEventListener("popstate",i=>{var d;if((d=i.state)!=null&&d[Y]){if(i.state[Y]===A)return;const m=i.state[Y]-A;ke({url:new URL(location.href),scroll:le[i.state[Y]],keepfocus:!1,redirect_chain:[],details:null,accepted:()=>{A=i.state[Y]},blocked:()=>{history.go(-m)},type:"popstate",delta:m})}}),addEventListener("hashchange",()=>{E&&(E=!1,history.replaceState({...history.state,[Y]:++A},"",location.href))});for(const i of document.querySelectorAll("link"))i.rel==="icon"&&(i.href=i.href);addEventListener("pageshow",i=>{i.persisted&&Z.navigating.set(null)})},_hydrate:async({status:s,error:c,node_ids:p,params:i,route:d,data:m,form:_})=>{var y;t=!0;const v=new URL(location.href);let k;try{const b=p.map(async($,q)=>{const T=m[q];return be({loader:ye[$],url:v,params:i,route:d,parent:async()=>{const O={};for(let j=0;j<q;j+=1)Object.assign(O,(await b[j]).data);return O},server_data_node:ve(T)})});k=await re({url:v,params:i,branch:await Promise.all(b),status:s,error:c,form:_,route:(y=me.find(({id:$})=>$===d.id))!=null?y:null})}catch(b){if(b instanceof Ye){await de(new URL(b.location,location.href));return}k=await pe({status:b instanceof je?b.status:500,error:se(b,{url:v,params:i,route:d}),url:v,route:d})}Ue(k)}}}async function Xe(r,e){var f;const n=new URL(r);n.pathname=vt(r.pathname);const o=await we(n.href,{headers:{"x-sveltekit-invalidated":e.map(t=>t?"1":"").join(",")}}),a=await o.json();if(!o.ok)throw new Error(a);return(f=a.nodes)==null||f.forEach(t=>{var l,u;(t==null?void 0:t.type)==="data"&&(t.data=Zt(t.data),t.uses={dependencies:new Set((l=t.uses.dependencies)!=null?l:[]),params:new Set((u=t.uses.params)!=null?u:[]),parent:!!t.uses.parent,route:!!t.uses.route,url:!!t.uses.url})}),a}function se(r,e){var n;return r instanceof je?r.body:(n=Gt.handleError({error:r,event:e}))!=null?n:{message:e.route.id!=null?"Internal Error":"Not Found"}}const xt=["hash","href","host","hostname","origin","pathname","port","protocol","search","searchParams","toString","toJSON"];function _e(r,e){for(const n of xt)Object.defineProperty(e,n,{get(){throw new Error(`The navigation shape changed - ${r}.${n} should now be ${r}.url.${n}`)},enumerable:!1});return Object.defineProperty(e,"routeId",{get(){throw new Error(`The navigation shape changed - ${r}.routeId should now be ${r}.route.id`)},enumerable:!1}),e}function ge(){return()=>{}}function Ie(){const r=document.querySelector("[autofocus]");if(r)r.focus();else{const e=document.body,n=e.getAttribute("tabindex");e.tabIndex=-1,e.focus({preventScroll:!0}),setTimeout(()=>{var o;(o=getSelection())==null||o.removeAllRanges()}),n!==null?e.setAttribute("tabindex",n):e.removeAttribute("tabindex")}}async function rn({env:r,hydrate:e,paths:n,target:o,version:a}){ut(n),dt(a);const f=Qt({target:o,base:n.base});pt({client:f}),e?await f._hydrate(e):f.goto(location.href,{replaceState:!0}),f._start_router()}export{rn as start};
