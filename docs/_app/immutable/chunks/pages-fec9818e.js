import{_ as r}from"./preload-helper-b21cceae.js";const l=(o,a)=>{const t=o[a];return t?typeof t=="function"?t():Promise.resolve(t):new Promise((s,e)=>{(typeof queueMicrotask=="function"?queueMicrotask:setTimeout)(e.bind(null,new Error("Unknown variable dynamic import: "+a)))})},i=(o,a)=>{const t=o.replace(/(.*?)\/src\/routes\//,"/").replace(/(.*?)\/immutable\/pages\//,"/").replace(/(.*?)\/var\/task\//,"/").replace(/\/([^/])*.svelte.*/,"/");return Object.keys(a).map(e=>e.replace("../routes","")).map(e=>e.replace(/^(.\/)/,t)).filter(e=>!/(?:(?:^_|\/_)|(?:^\.|\/\.)(?!well-known))/.test(e)).filter(e=>!/\[.*\]/.test(e)).map(e=>e.replace(/(\/\+page)?(@.*)?.svelte/,"")).map(e=>e||"/").sort()};async function p(o,a){let{myMetadata:t}=await l(Object.assign({"../routes/2021/day/01/+page.svelte":()=>r(()=>import("../components/pages/2021/day/01/_page.svelte-011b8485.js"),["../components/pages/2021/day/01/_page.svelte-011b8485.js","./index-83d3324c.js","./stores-5b12132a.js","./Runner-f713d2e9.js","../assets/Runner-de87410b.css"],import.meta.url),"../routes/2021/day/template/+page.svelte":()=>r(()=>import("../components/pages/2021/day/template/_page.svelte-5c9fc52a.js"),["../components/pages/2021/day/template/_page.svelte-5c9fc52a.js","./index-83d3324c.js","./stores-5b12132a.js","./Runner-f713d2e9.js","../assets/Runner-de87410b.css"],import.meta.url),"../routes/2022/day/01/+page.svelte":()=>r(()=>import("../components/pages/2022/day/01/_page.svelte-f46c86da.js"),["../components/pages/2022/day/01/_page.svelte-f46c86da.js","./index-83d3324c.js","./stores-5b12132a.js","./Runner-f713d2e9.js","../assets/Runner-de87410b.css"],import.meta.url),"../routes/2022/day/02/+page.svelte":()=>r(()=>import("../components/pages/2022/day/02/_page.svelte-e62efff5.js"),["../components/pages/2022/day/02/_page.svelte-e62efff5.js","./index-83d3324c.js","./stores-5b12132a.js","./Runner-f713d2e9.js","../assets/Runner-de87410b.css"],import.meta.url),"../routes/2022/day/template/+page.svelte":()=>r(()=>import("../components/pages/2022/day/template/_page.svelte-1042bd5c.js"),["../components/pages/2022/day/template/_page.svelte-1042bd5c.js","./index-83d3324c.js","./stores-5b12132a.js","./Runner-f713d2e9.js","../assets/Runner-de87410b.css"],import.meta.url)}),`../routes/20${o}/day/${a}/+page.svelte`);return t}async function _(){const a=i("",Object.assign({"../routes/2021/day/01/+page.svelte":()=>r(()=>import("../components/pages/2021/day/01/_page.svelte-011b8485.js"),["../components/pages/2021/day/01/_page.svelte-011b8485.js","./index-83d3324c.js","./stores-5b12132a.js","./Runner-f713d2e9.js","../assets/Runner-de87410b.css"],import.meta.url),"../routes/2022/day/01/+page.svelte":()=>r(()=>import("../components/pages/2022/day/01/_page.svelte-f46c86da.js"),["../components/pages/2022/day/01/_page.svelte-f46c86da.js","./index-83d3324c.js","./stores-5b12132a.js","./Runner-f713d2e9.js","../assets/Runner-de87410b.css"],import.meta.url),"../routes/2022/day/02/+page.svelte":()=>r(()=>import("../components/pages/2022/day/02/_page.svelte-e62efff5.js"),["../components/pages/2022/day/02/_page.svelte-e62efff5.js","./index-83d3324c.js","./stores-5b12132a.js","./Runner-f713d2e9.js","../assets/Runner-de87410b.css"],import.meta.url)}));console.log(a);let t={},s;for(const e of a)s=await p(e.slice(3,5),e.slice(-2)),t[s.year+s.day]=s;return t.generated=!0,console.log(t),t}export{i as a,_ as g};
