import{J as u,B as s}from"./index-69c26055.js";import{_ as r}from"./preload-helper-b21cceae.js";const _=(o,i=0)=>{let e=3735928559^i,t=1103547991^i;for(let a=0,l;a<o.length;a++)l=o.charCodeAt(a),e=Math.imul(e^l,2654435761),t=Math.imul(t^l,1597334677);return e=Math.imul(e^e>>>16,2246822507)^Math.imul(t^t>>>13,3266489909),t=Math.imul(t^t>>>16,2246822507)^Math.imul(e^e>>>13,3266489909),4294967296*(2097151&t)+(e>>>0)},m=(o,i)=>{const e=o[i];return e?typeof e=="function"?e():Promise.resolve(e):new Promise((t,a)=>{(typeof queueMicrotask=="function"?queueMicrotask:setTimeout)(a.bind(null,new Error("Unknown variable dynamic import: "+i)))})},p=(o,i)=>{const e=o.replace(/(.*?)\/src\/routes\//,"/").replace(/(.*?)\/immutable\/pages\//,"/").replace(/(.*?)\/var\/task\//,"/").replace(/\/([^/])*.svelte.*/,"/");return Object.keys(i).map(a=>a.replace("../routes","")).map(a=>a.replace(/^(.\/)/,e)).filter(a=>!/(?:(?:^_|\/_)|(?:^\.|\/\.)(?!well-known))/.test(a)).filter(a=>!/\[.*\]/.test(a)).map(a=>a.replace(/(\/\+page)?(@.*)?.svelte/,"")).map(a=>a||"/").sort()};async function n(o,i){let{myMetadata:e}=await m(Object.assign({"../routes/2021/day/01/+page.svelte":()=>r(()=>import("../components/pages/2021/day/01/_page.svelte-63be68fc.js"),["../components/pages/2021/day/01/_page.svelte-63be68fc.js","./index-69c26055.js","./Runner-b4930d06.js","../assets/Runner-de87410b.css"],import.meta.url),"../routes/2022/day/01/+page.svelte":()=>r(()=>import("../components/pages/2022/day/01/_page.svelte-011040cc.js"),["../components/pages/2022/day/01/_page.svelte-011040cc.js","./index-69c26055.js","./Runner-b4930d06.js","../assets/Runner-de87410b.css"],import.meta.url),"../routes/2022/day/02/+page.svelte":()=>r(()=>import("../components/pages/2022/day/02/_page.svelte-6ccf8216.js"),["../components/pages/2022/day/02/_page.svelte-6ccf8216.js","./index-69c26055.js","./Runner-b4930d06.js","../assets/Runner-de87410b.css"],import.meta.url),"../routes/2022/day/03/+page.svelte":()=>r(()=>import("../components/pages/2022/day/03/_page.svelte-024024ae.js"),["../components/pages/2022/day/03/_page.svelte-024024ae.js","./index-69c26055.js","./Runner-b4930d06.js","../assets/Runner-de87410b.css"],import.meta.url),"../routes/2022/day/04/+page.svelte":()=>r(()=>import("../components/pages/2022/day/04/_page.svelte-f8eef8c7.js"),["../components/pages/2022/day/04/_page.svelte-f8eef8c7.js","./index-69c26055.js","./Runner-b4930d06.js","../assets/Runner-de87410b.css"],import.meta.url),"../routes/2022/day/05/+page.svelte":()=>r(()=>import("../components/pages/2022/day/05/_page.svelte-f0f20371.js"),["../components/pages/2022/day/05/_page.svelte-f0f20371.js","./index-69c26055.js","./Runner-b4930d06.js","../assets/Runner-de87410b.css"],import.meta.url),"../routes/2022/day/06/+page.svelte":()=>r(()=>import("../components/pages/2022/day/06/_page.svelte-096e6ee8.js"),["../components/pages/2022/day/06/_page.svelte-096e6ee8.js","./index-69c26055.js","./Runner-b4930d06.js","../assets/Runner-de87410b.css"],import.meta.url),"../routes/2022/day/07/+page.svelte":()=>r(()=>import("../components/pages/2022/day/07/_page.svelte-d78ec1be.js"),["../components/pages/2022/day/07/_page.svelte-d78ec1be.js","./index-69c26055.js","./Runner-b4930d06.js","../assets/Runner-de87410b.css"],import.meta.url),"../routes/2022/day/template/+page.svelte":()=>r(()=>import("../components/pages/2022/day/template/_page.svelte-1b808ab5.js"),["../components/pages/2022/day/template/_page.svelte-1b808ab5.js","./index-69c26055.js","./Runner-b4930d06.js","../assets/Runner-de87410b.css"],import.meta.url)}),`../routes/20${o}/day/${i}/+page.svelte`);return e}async function d(){const i=p("",Object.assign({"../routes/2021/day/01/+page.svelte":()=>r(()=>import("../components/pages/2021/day/01/_page.svelte-63be68fc.js"),["../components/pages/2021/day/01/_page.svelte-63be68fc.js","./index-69c26055.js","./Runner-b4930d06.js","../assets/Runner-de87410b.css"],import.meta.url),"../routes/2022/day/01/+page.svelte":()=>r(()=>import("../components/pages/2022/day/01/_page.svelte-011040cc.js"),["../components/pages/2022/day/01/_page.svelte-011040cc.js","./index-69c26055.js","./Runner-b4930d06.js","../assets/Runner-de87410b.css"],import.meta.url),"../routes/2022/day/02/+page.svelte":()=>r(()=>import("../components/pages/2022/day/02/_page.svelte-6ccf8216.js"),["../components/pages/2022/day/02/_page.svelte-6ccf8216.js","./index-69c26055.js","./Runner-b4930d06.js","../assets/Runner-de87410b.css"],import.meta.url),"../routes/2022/day/03/+page.svelte":()=>r(()=>import("../components/pages/2022/day/03/_page.svelte-024024ae.js"),["../components/pages/2022/day/03/_page.svelte-024024ae.js","./index-69c26055.js","./Runner-b4930d06.js","../assets/Runner-de87410b.css"],import.meta.url),"../routes/2022/day/04/+page.svelte":()=>r(()=>import("../components/pages/2022/day/04/_page.svelte-f8eef8c7.js"),["../components/pages/2022/day/04/_page.svelte-f8eef8c7.js","./index-69c26055.js","./Runner-b4930d06.js","../assets/Runner-de87410b.css"],import.meta.url),"../routes/2022/day/05/+page.svelte":()=>r(()=>import("../components/pages/2022/day/05/_page.svelte-f0f20371.js"),["../components/pages/2022/day/05/_page.svelte-f0f20371.js","./index-69c26055.js","./Runner-b4930d06.js","../assets/Runner-de87410b.css"],import.meta.url),"../routes/2022/day/06/+page.svelte":()=>r(()=>import("../components/pages/2022/day/06/_page.svelte-096e6ee8.js"),["../components/pages/2022/day/06/_page.svelte-096e6ee8.js","./index-69c26055.js","./Runner-b4930d06.js","../assets/Runner-de87410b.css"],import.meta.url),"../routes/2022/day/07/+page.svelte":()=>r(()=>import("../components/pages/2022/day/07/_page.svelte-d78ec1be.js"),["../components/pages/2022/day/07/_page.svelte-d78ec1be.js","./index-69c26055.js","./Runner-b4930d06.js","../assets/Runner-de87410b.css"],import.meta.url)}));let e={},t;for(const a of i)t=await n(a.slice(3,5),a.slice(-2)),t.href=`/${t.year}/day/${t.day}`,t.year in e||(e[t.year]={}),e[t.year][t.day]=t;return e}let D=s("none"),c=s(Object());async function f(){{console.log("Initialising metadata...");let o=await d();c.set(o)}}let I=s(""),O=s(""),v=s(""),T=s(""),y=u(v,o=>_(o)),E=s(""),h=s(!1),L=u([y,E],([o,i])=>o!==i);export{O as a,T as b,I as c,v as d,E as e,p as g,y as h,f as i,c as m,D as p,h as r,L as u};
