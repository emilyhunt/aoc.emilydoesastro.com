import{J as m,B as i}from"./index-69c26055.js";import{_ as e}from"./preload-helper-b21cceae.js";const l=(a,_=0)=>{let r=3735928559^_,o=1103547991^_;for(let t=0,u;t<a.length;t++)u=a.charCodeAt(t),r=Math.imul(r^u,2654435761),o=Math.imul(o^u,1597334677);return r=Math.imul(r^r>>>16,2246822507)^Math.imul(o^o>>>13,3266489909),o=Math.imul(o^o>>>16,2246822507)^Math.imul(r^r>>>13,3266489909),4294967296*(2097151&o)+(r>>>0)},s=(a,_)=>{const r=a[_];return r?typeof r=="function"?r():Promise.resolve(r):new Promise((o,t)=>{(typeof queueMicrotask=="function"?queueMicrotask:setTimeout)(t.bind(null,new Error("Unknown variable dynamic import: "+_)))})},p=(a,_)=>{const r=a.replace(/(.*?)\/src\/routes\//,"/").replace(/(.*?)\/immutable\/pages\//,"/").replace(/(.*?)\/var\/task\//,"/").replace(/\/([^/])*.svelte.*/,"/");return Object.keys(_).map(t=>t.replace("../routes","")).map(t=>t.replace(/^(.\/)/,r)).filter(t=>!/(?:(?:^_|\/_)|(?:^\.|\/\.)(?!well-known))/.test(t)).filter(t=>!/\[.*\]/.test(t)).map(t=>t.replace(/(\/\+page)?(@.*)?.svelte/,"")).map(t=>t||"/").sort()};async function d(a,_){let{myMetadata:r}=await s(Object.assign({"../routes/2021/day/01/+page.svelte":()=>e(()=>import("../components/pages/2021/day/01/_page.svelte-077f1d40.js"),["../components/pages/2021/day/01/_page.svelte-077f1d40.js","./index-69c26055.js","./Runner-d2d4c718.js","./GetUserData-4661dac6.js","../assets/GetUserData-8f691bc8.css"],import.meta.url),"../routes/2022/day/01/+page.svelte":()=>e(()=>import("../components/pages/2022/day/01/_page.svelte-82ab2ab2.js"),["../components/pages/2022/day/01/_page.svelte-82ab2ab2.js","./index-69c26055.js","./Runner-d2d4c718.js","./GetUserData-4661dac6.js","../assets/GetUserData-8f691bc8.css"],import.meta.url),"../routes/2022/day/02/+page.svelte":()=>e(()=>import("../components/pages/2022/day/02/_page.svelte-05847c55.js"),["../components/pages/2022/day/02/_page.svelte-05847c55.js","./index-69c26055.js","./Runner-d2d4c718.js","./GetUserData-4661dac6.js","../assets/GetUserData-8f691bc8.css"],import.meta.url),"../routes/2022/day/03/+page.svelte":()=>e(()=>import("../components/pages/2022/day/03/_page.svelte-388fa785.js"),["../components/pages/2022/day/03/_page.svelte-388fa785.js","./index-69c26055.js","./Runner-d2d4c718.js","./GetUserData-4661dac6.js","../assets/GetUserData-8f691bc8.css"],import.meta.url),"../routes/2022/day/04/+page.svelte":()=>e(()=>import("../components/pages/2022/day/04/_page.svelte-694bb0f5.js"),["../components/pages/2022/day/04/_page.svelte-694bb0f5.js","./index-69c26055.js","./Runner-d2d4c718.js","./GetUserData-4661dac6.js","../assets/GetUserData-8f691bc8.css"],import.meta.url),"../routes/2022/day/05/+page.svelte":()=>e(()=>import("../components/pages/2022/day/05/_page.svelte-76256619.js"),["../components/pages/2022/day/05/_page.svelte-76256619.js","./index-69c26055.js","./Runner-d2d4c718.js","./GetUserData-4661dac6.js","../assets/GetUserData-8f691bc8.css"],import.meta.url),"../routes/2022/day/06/+page.svelte":()=>e(()=>import("../components/pages/2022/day/06/_page.svelte-5aec99ea.js"),["../components/pages/2022/day/06/_page.svelte-5aec99ea.js","./index-69c26055.js","./Runner-d2d4c718.js","./GetUserData-4661dac6.js","../assets/GetUserData-8f691bc8.css"],import.meta.url),"../routes/2022/day/07/+page.svelte":()=>e(()=>import("../components/pages/2022/day/07/_page.svelte-6cda64e7.js"),["../components/pages/2022/day/07/_page.svelte-6cda64e7.js","./index-69c26055.js","./Runner-d2d4c718.js","./GetUserData-4661dac6.js","../assets/GetUserData-8f691bc8.css"],import.meta.url),"../routes/2022/day/08/+page.svelte":()=>e(()=>import("../components/pages/2022/day/08/_page.svelte-39c15fcd.js"),["../components/pages/2022/day/08/_page.svelte-39c15fcd.js","./index-69c26055.js","./Runner-d2d4c718.js","./GetUserData-4661dac6.js","../assets/GetUserData-8f691bc8.css"],import.meta.url),"../routes/2022/day/09/+page.svelte":()=>e(()=>import("../components/pages/2022/day/09/_page.svelte-6bec5ec5.js"),["../components/pages/2022/day/09/_page.svelte-6bec5ec5.js","./index-69c26055.js","./Runner-d2d4c718.js","./GetUserData-4661dac6.js","../assets/GetUserData-8f691bc8.css"],import.meta.url),"../routes/2022/day/10/+page.svelte":()=>e(()=>import("../components/pages/2022/day/10/_page.svelte-15645e15.js"),["../components/pages/2022/day/10/_page.svelte-15645e15.js","./index-69c26055.js","./GetUserData-4661dac6.js","../assets/GetUserData-8f691bc8.css","../assets/_page-e344fce4.css"],import.meta.url),"../routes/2022/day/11/+page.svelte":()=>e(()=>import("../components/pages/2022/day/11/_page.svelte-d4fa6851.js"),["../components/pages/2022/day/11/_page.svelte-d4fa6851.js","./index-69c26055.js","./Runner-d2d4c718.js","./GetUserData-4661dac6.js","../assets/GetUserData-8f691bc8.css"],import.meta.url),"../routes/2022/day/12/+page.svelte":()=>e(()=>import("../components/pages/2022/day/12/_page.svelte-b40c8a6d.js"),["../components/pages/2022/day/12/_page.svelte-b40c8a6d.js","./index-69c26055.js","./Runner-d2d4c718.js","./GetUserData-4661dac6.js","../assets/GetUserData-8f691bc8.css"],import.meta.url),"../routes/2022/day/13/+page.svelte":()=>e(()=>import("../components/pages/2022/day/13/_page.svelte-610ae317.js"),["../components/pages/2022/day/13/_page.svelte-610ae317.js","./index-69c26055.js","./Runner-d2d4c718.js","./GetUserData-4661dac6.js","../assets/GetUserData-8f691bc8.css"],import.meta.url),"../routes/2022/day/14/+page.svelte":()=>e(()=>import("../components/pages/2022/day/14/_page.svelte-4f505402.js"),["../components/pages/2022/day/14/_page.svelte-4f505402.js","./index-69c26055.js","./Runner-d2d4c718.js","./GetUserData-4661dac6.js","../assets/GetUserData-8f691bc8.css"],import.meta.url),"../routes/2022/day/15/+page.svelte":()=>e(()=>import("../components/pages/2022/day/15/_page.svelte-316798e1.js"),["../components/pages/2022/day/15/_page.svelte-316798e1.js","./index-69c26055.js","./Runner-d2d4c718.js","./GetUserData-4661dac6.js","../assets/GetUserData-8f691bc8.css"],import.meta.url),"../routes/2022/day/16/+page.svelte":()=>e(()=>import("../components/pages/2022/day/16/_page.svelte-a61111f6.js"),["../components/pages/2022/day/16/_page.svelte-a61111f6.js","./index-69c26055.js","./Runner-d2d4c718.js","./GetUserData-4661dac6.js","../assets/GetUserData-8f691bc8.css"],import.meta.url),"../routes/2022/day/template old/+page.svelte":()=>e(()=>import("../components/pages/2022/day/template old/_page.svelte-00489cb3.js"),["../components/pages/2022/day/template old/_page.svelte-00489cb3.js","./index-69c26055.js","./Runner-d2d4c718.js","./GetUserData-4661dac6.js","../assets/GetUserData-8f691bc8.css"],import.meta.url),"../routes/2022/day/template/+page.svelte":()=>e(()=>import("../components/pages/2022/day/template/_page.svelte-f82381b4.js"),["../components/pages/2022/day/template/_page.svelte-f82381b4.js","./index-69c26055.js","./Runner-d2d4c718.js","./GetUserData-4661dac6.js","../assets/GetUserData-8f691bc8.css"],import.meta.url)}),`../routes/20${a}/day/${_}/+page.svelte`);return r}async function v(){const _=p("",Object.assign({"../routes/2021/day/01/+page.svelte":()=>e(()=>import("../components/pages/2021/day/01/_page.svelte-077f1d40.js"),["../components/pages/2021/day/01/_page.svelte-077f1d40.js","./index-69c26055.js","./Runner-d2d4c718.js","./GetUserData-4661dac6.js","../assets/GetUserData-8f691bc8.css"],import.meta.url),"../routes/2022/day/01/+page.svelte":()=>e(()=>import("../components/pages/2022/day/01/_page.svelte-82ab2ab2.js"),["../components/pages/2022/day/01/_page.svelte-82ab2ab2.js","./index-69c26055.js","./Runner-d2d4c718.js","./GetUserData-4661dac6.js","../assets/GetUserData-8f691bc8.css"],import.meta.url),"../routes/2022/day/02/+page.svelte":()=>e(()=>import("../components/pages/2022/day/02/_page.svelte-05847c55.js"),["../components/pages/2022/day/02/_page.svelte-05847c55.js","./index-69c26055.js","./Runner-d2d4c718.js","./GetUserData-4661dac6.js","../assets/GetUserData-8f691bc8.css"],import.meta.url),"../routes/2022/day/03/+page.svelte":()=>e(()=>import("../components/pages/2022/day/03/_page.svelte-388fa785.js"),["../components/pages/2022/day/03/_page.svelte-388fa785.js","./index-69c26055.js","./Runner-d2d4c718.js","./GetUserData-4661dac6.js","../assets/GetUserData-8f691bc8.css"],import.meta.url),"../routes/2022/day/04/+page.svelte":()=>e(()=>import("../components/pages/2022/day/04/_page.svelte-694bb0f5.js"),["../components/pages/2022/day/04/_page.svelte-694bb0f5.js","./index-69c26055.js","./Runner-d2d4c718.js","./GetUserData-4661dac6.js","../assets/GetUserData-8f691bc8.css"],import.meta.url),"../routes/2022/day/05/+page.svelte":()=>e(()=>import("../components/pages/2022/day/05/_page.svelte-76256619.js"),["../components/pages/2022/day/05/_page.svelte-76256619.js","./index-69c26055.js","./Runner-d2d4c718.js","./GetUserData-4661dac6.js","../assets/GetUserData-8f691bc8.css"],import.meta.url),"../routes/2022/day/06/+page.svelte":()=>e(()=>import("../components/pages/2022/day/06/_page.svelte-5aec99ea.js"),["../components/pages/2022/day/06/_page.svelte-5aec99ea.js","./index-69c26055.js","./Runner-d2d4c718.js","./GetUserData-4661dac6.js","../assets/GetUserData-8f691bc8.css"],import.meta.url),"../routes/2022/day/07/+page.svelte":()=>e(()=>import("../components/pages/2022/day/07/_page.svelte-6cda64e7.js"),["../components/pages/2022/day/07/_page.svelte-6cda64e7.js","./index-69c26055.js","./Runner-d2d4c718.js","./GetUserData-4661dac6.js","../assets/GetUserData-8f691bc8.css"],import.meta.url),"../routes/2022/day/08/+page.svelte":()=>e(()=>import("../components/pages/2022/day/08/_page.svelte-39c15fcd.js"),["../components/pages/2022/day/08/_page.svelte-39c15fcd.js","./index-69c26055.js","./Runner-d2d4c718.js","./GetUserData-4661dac6.js","../assets/GetUserData-8f691bc8.css"],import.meta.url),"../routes/2022/day/09/+page.svelte":()=>e(()=>import("../components/pages/2022/day/09/_page.svelte-6bec5ec5.js"),["../components/pages/2022/day/09/_page.svelte-6bec5ec5.js","./index-69c26055.js","./Runner-d2d4c718.js","./GetUserData-4661dac6.js","../assets/GetUserData-8f691bc8.css"],import.meta.url),"../routes/2022/day/10/+page.svelte":()=>e(()=>import("../components/pages/2022/day/10/_page.svelte-15645e15.js"),["../components/pages/2022/day/10/_page.svelte-15645e15.js","./index-69c26055.js","./GetUserData-4661dac6.js","../assets/GetUserData-8f691bc8.css","../assets/_page-e344fce4.css"],import.meta.url),"../routes/2022/day/11/+page.svelte":()=>e(()=>import("../components/pages/2022/day/11/_page.svelte-d4fa6851.js"),["../components/pages/2022/day/11/_page.svelte-d4fa6851.js","./index-69c26055.js","./Runner-d2d4c718.js","./GetUserData-4661dac6.js","../assets/GetUserData-8f691bc8.css"],import.meta.url),"../routes/2022/day/12/+page.svelte":()=>e(()=>import("../components/pages/2022/day/12/_page.svelte-b40c8a6d.js"),["../components/pages/2022/day/12/_page.svelte-b40c8a6d.js","./index-69c26055.js","./Runner-d2d4c718.js","./GetUserData-4661dac6.js","../assets/GetUserData-8f691bc8.css"],import.meta.url),"../routes/2022/day/13/+page.svelte":()=>e(()=>import("../components/pages/2022/day/13/_page.svelte-610ae317.js"),["../components/pages/2022/day/13/_page.svelte-610ae317.js","./index-69c26055.js","./Runner-d2d4c718.js","./GetUserData-4661dac6.js","../assets/GetUserData-8f691bc8.css"],import.meta.url),"../routes/2022/day/14/+page.svelte":()=>e(()=>import("../components/pages/2022/day/14/_page.svelte-4f505402.js"),["../components/pages/2022/day/14/_page.svelte-4f505402.js","./index-69c26055.js","./Runner-d2d4c718.js","./GetUserData-4661dac6.js","../assets/GetUserData-8f691bc8.css"],import.meta.url),"../routes/2022/day/15/+page.svelte":()=>e(()=>import("../components/pages/2022/day/15/_page.svelte-316798e1.js"),["../components/pages/2022/day/15/_page.svelte-316798e1.js","./index-69c26055.js","./Runner-d2d4c718.js","./GetUserData-4661dac6.js","../assets/GetUserData-8f691bc8.css"],import.meta.url),"../routes/2022/day/16/+page.svelte":()=>e(()=>import("../components/pages/2022/day/16/_page.svelte-a61111f6.js"),["../components/pages/2022/day/16/_page.svelte-a61111f6.js","./index-69c26055.js","./Runner-d2d4c718.js","./GetUserData-4661dac6.js","../assets/GetUserData-8f691bc8.css"],import.meta.url)}));let r=await Promise.all(_.map(t=>d(t.slice(3,5),t.slice(-2)))),o={};for(let t of r)t.href=`/${t.year}/day/${t.day}`,t.year in o||(o[t.year]={}),o[t.year][t.day]=t;return o}let D=i("none"),E=i(Object());async function I(){{console.log("Initialising metadata...");let a=await v();E.set(a)}}let O=i(""),T=i(""),n=i(""),A=i(""),y=m(n,a=>l(a)),g=i(""),L=i(!1),R=m([y,g],([a,_])=>a!==_);export{T as a,A as b,O as c,n as d,g as e,p as g,y as h,I as i,E as m,D as p,L as r,R as u};
