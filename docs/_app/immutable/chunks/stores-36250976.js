import{J as l,B as _}from"./index-69c26055.js";import{_ as t}from"./preload-helper-b21cceae.js";const u=(r,i=0)=>{let a=3735928559^i,o=1103547991^i;for(let e=0,s;e<r.length;e++)s=r.charCodeAt(e),a=Math.imul(a^s,2654435761),o=Math.imul(o^s,1597334677);return a=Math.imul(a^a>>>16,2246822507)^Math.imul(o^o>>>13,3266489909),o=Math.imul(o^o>>>16,2246822507)^Math.imul(a^a>>>13,3266489909),4294967296*(2097151&o)+(a>>>0)},m=(r,i)=>{const a=r[i];return a?typeof a=="function"?a():Promise.resolve(a):new Promise((o,e)=>{(typeof queueMicrotask=="function"?queueMicrotask:setTimeout)(e.bind(null,new Error("Unknown variable dynamic import: "+i)))})},p=(r,i)=>{const a=r.replace(/(.*?)\/src\/routes\//,"/").replace(/(.*?)\/immutable\/pages\//,"/").replace(/(.*?)\/var\/task\//,"/").replace(/\/([^/])*.svelte.*/,"/");return Object.keys(i).map(e=>e.replace("../routes","")).map(e=>e.replace(/^(.\/)/,a)).filter(e=>!/(?:(?:^_|\/_)|(?:^\.|\/\.)(?!well-known))/.test(e)).filter(e=>!/\[.*\]/.test(e)).map(e=>e.replace(/(\/\+page)?(@.*)?.svelte/,"")).map(e=>e||"/").sort()};async function d(r,i){let{myMetadata:a}=await m(Object.assign({"../routes/2021/day/01/+page.svelte":()=>t(()=>import("../components/pages/2021/day/01/_page.svelte-6dcaf4a5.js"),["../components/pages/2021/day/01/_page.svelte-6dcaf4a5.js","./index-69c26055.js","./Runner-d8a84062.js","./GetUserData-6b132526.js","../assets/GetUserData-8f691bc8.css"],import.meta.url),"../routes/2022/day/01/+page.svelte":()=>t(()=>import("../components/pages/2022/day/01/_page.svelte-8936b3ea.js"),["../components/pages/2022/day/01/_page.svelte-8936b3ea.js","./index-69c26055.js","./Runner-d8a84062.js","./GetUserData-6b132526.js","../assets/GetUserData-8f691bc8.css"],import.meta.url),"../routes/2022/day/02/+page.svelte":()=>t(()=>import("../components/pages/2022/day/02/_page.svelte-cfb90214.js"),["../components/pages/2022/day/02/_page.svelte-cfb90214.js","./index-69c26055.js","./Runner-d8a84062.js","./GetUserData-6b132526.js","../assets/GetUserData-8f691bc8.css"],import.meta.url),"../routes/2022/day/03/+page.svelte":()=>t(()=>import("../components/pages/2022/day/03/_page.svelte-51c7a90b.js"),["../components/pages/2022/day/03/_page.svelte-51c7a90b.js","./index-69c26055.js","./Runner-d8a84062.js","./GetUserData-6b132526.js","../assets/GetUserData-8f691bc8.css"],import.meta.url),"../routes/2022/day/04/+page.svelte":()=>t(()=>import("../components/pages/2022/day/04/_page.svelte-bc4951c2.js"),["../components/pages/2022/day/04/_page.svelte-bc4951c2.js","./index-69c26055.js","./Runner-d8a84062.js","./GetUserData-6b132526.js","../assets/GetUserData-8f691bc8.css"],import.meta.url),"../routes/2022/day/05/+page.svelte":()=>t(()=>import("../components/pages/2022/day/05/_page.svelte-e50986fe.js"),["../components/pages/2022/day/05/_page.svelte-e50986fe.js","./index-69c26055.js","./Runner-d8a84062.js","./GetUserData-6b132526.js","../assets/GetUserData-8f691bc8.css"],import.meta.url),"../routes/2022/day/06/+page.svelte":()=>t(()=>import("../components/pages/2022/day/06/_page.svelte-1d5c1598.js"),["../components/pages/2022/day/06/_page.svelte-1d5c1598.js","./index-69c26055.js","./Runner-d8a84062.js","./GetUserData-6b132526.js","../assets/GetUserData-8f691bc8.css"],import.meta.url),"../routes/2022/day/07/+page.svelte":()=>t(()=>import("../components/pages/2022/day/07/_page.svelte-2b6604e5.js"),["../components/pages/2022/day/07/_page.svelte-2b6604e5.js","./index-69c26055.js","./Runner-d8a84062.js","./GetUserData-6b132526.js","../assets/GetUserData-8f691bc8.css"],import.meta.url),"../routes/2022/day/08/+page.svelte":()=>t(()=>import("../components/pages/2022/day/08/_page.svelte-87187307.js"),["../components/pages/2022/day/08/_page.svelte-87187307.js","./index-69c26055.js","./Runner-d8a84062.js","./GetUserData-6b132526.js","../assets/GetUserData-8f691bc8.css"],import.meta.url),"../routes/2022/day/09/+page.svelte":()=>t(()=>import("../components/pages/2022/day/09/_page.svelte-0545894c.js"),["../components/pages/2022/day/09/_page.svelte-0545894c.js","./index-69c26055.js","./Runner-d8a84062.js","./GetUserData-6b132526.js","../assets/GetUserData-8f691bc8.css"],import.meta.url),"../routes/2022/day/10/+page.svelte":()=>t(()=>import("../components/pages/2022/day/10/_page.svelte-9a82de4a.js"),["../components/pages/2022/day/10/_page.svelte-9a82de4a.js","./index-69c26055.js","./GetUserData-6b132526.js","../assets/GetUserData-8f691bc8.css","../assets/_page-e344fce4.css"],import.meta.url),"../routes/2022/day/template/+page.svelte":()=>t(()=>import("../components/pages/2022/day/template/_page.svelte-863bb891.js"),["../components/pages/2022/day/template/_page.svelte-863bb891.js","./index-69c26055.js","./Runner-d8a84062.js","./GetUserData-6b132526.js","../assets/GetUserData-8f691bc8.css"],import.meta.url)}),`../routes/20${r}/day/${i}/+page.svelte`);return a}async function n(){const i=p("",Object.assign({"../routes/2021/day/01/+page.svelte":()=>t(()=>import("../components/pages/2021/day/01/_page.svelte-6dcaf4a5.js"),["../components/pages/2021/day/01/_page.svelte-6dcaf4a5.js","./index-69c26055.js","./Runner-d8a84062.js","./GetUserData-6b132526.js","../assets/GetUserData-8f691bc8.css"],import.meta.url),"../routes/2022/day/01/+page.svelte":()=>t(()=>import("../components/pages/2022/day/01/_page.svelte-8936b3ea.js"),["../components/pages/2022/day/01/_page.svelte-8936b3ea.js","./index-69c26055.js","./Runner-d8a84062.js","./GetUserData-6b132526.js","../assets/GetUserData-8f691bc8.css"],import.meta.url),"../routes/2022/day/02/+page.svelte":()=>t(()=>import("../components/pages/2022/day/02/_page.svelte-cfb90214.js"),["../components/pages/2022/day/02/_page.svelte-cfb90214.js","./index-69c26055.js","./Runner-d8a84062.js","./GetUserData-6b132526.js","../assets/GetUserData-8f691bc8.css"],import.meta.url),"../routes/2022/day/03/+page.svelte":()=>t(()=>import("../components/pages/2022/day/03/_page.svelte-51c7a90b.js"),["../components/pages/2022/day/03/_page.svelte-51c7a90b.js","./index-69c26055.js","./Runner-d8a84062.js","./GetUserData-6b132526.js","../assets/GetUserData-8f691bc8.css"],import.meta.url),"../routes/2022/day/04/+page.svelte":()=>t(()=>import("../components/pages/2022/day/04/_page.svelte-bc4951c2.js"),["../components/pages/2022/day/04/_page.svelte-bc4951c2.js","./index-69c26055.js","./Runner-d8a84062.js","./GetUserData-6b132526.js","../assets/GetUserData-8f691bc8.css"],import.meta.url),"../routes/2022/day/05/+page.svelte":()=>t(()=>import("../components/pages/2022/day/05/_page.svelte-e50986fe.js"),["../components/pages/2022/day/05/_page.svelte-e50986fe.js","./index-69c26055.js","./Runner-d8a84062.js","./GetUserData-6b132526.js","../assets/GetUserData-8f691bc8.css"],import.meta.url),"../routes/2022/day/06/+page.svelte":()=>t(()=>import("../components/pages/2022/day/06/_page.svelte-1d5c1598.js"),["../components/pages/2022/day/06/_page.svelte-1d5c1598.js","./index-69c26055.js","./Runner-d8a84062.js","./GetUserData-6b132526.js","../assets/GetUserData-8f691bc8.css"],import.meta.url),"../routes/2022/day/07/+page.svelte":()=>t(()=>import("../components/pages/2022/day/07/_page.svelte-2b6604e5.js"),["../components/pages/2022/day/07/_page.svelte-2b6604e5.js","./index-69c26055.js","./Runner-d8a84062.js","./GetUserData-6b132526.js","../assets/GetUserData-8f691bc8.css"],import.meta.url),"../routes/2022/day/08/+page.svelte":()=>t(()=>import("../components/pages/2022/day/08/_page.svelte-87187307.js"),["../components/pages/2022/day/08/_page.svelte-87187307.js","./index-69c26055.js","./Runner-d8a84062.js","./GetUserData-6b132526.js","../assets/GetUserData-8f691bc8.css"],import.meta.url),"../routes/2022/day/09/+page.svelte":()=>t(()=>import("../components/pages/2022/day/09/_page.svelte-0545894c.js"),["../components/pages/2022/day/09/_page.svelte-0545894c.js","./index-69c26055.js","./Runner-d8a84062.js","./GetUserData-6b132526.js","../assets/GetUserData-8f691bc8.css"],import.meta.url),"../routes/2022/day/10/+page.svelte":()=>t(()=>import("../components/pages/2022/day/10/_page.svelte-9a82de4a.js"),["../components/pages/2022/day/10/_page.svelte-9a82de4a.js","./index-69c26055.js","./GetUserData-6b132526.js","../assets/GetUserData-8f691bc8.css","../assets/_page-e344fce4.css"],import.meta.url)}));let a=await Promise.all(i.map(e=>d(e.slice(3,5),e.slice(-2)))),o={};for(let e of a)e.href=`/${e.year}/day/${e.day}`,e.year in o||(o[e.year]={}),o[e.year][e.day]=e;return o}let D=_("none"),v=_(Object());async function I(){{console.log("Initialising metadata...");let r=await n();v.set(r)}}let O=_(""),T=_(""),E=_(""),A=_(""),c=l(E,r=>u(r)),y=_(""),L=_(!1),R=l([c,y],([r,i])=>r!==i);export{T as a,A as b,O as c,E as d,y as e,p as g,c as h,I as i,v as m,D as p,L as r,R as u};
