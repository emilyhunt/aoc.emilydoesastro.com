import{J as i,B as a}from"./index-83d3324c.js";import{g as u}from"./pages-fec9818e.js";const h=(e,l=0)=>{let t=3735928559^l,r=1103547991^l;for(let s=0,n;s<e.length;s++)n=e.charCodeAt(s),t=Math.imul(t^n,2654435761),r=Math.imul(r^n,1597334677);return t=Math.imul(t^t>>>16,2246822507)^Math.imul(r^r>>>13,3266489909),r=Math.imul(r^r>>>16,2246822507)^Math.imul(t^t>>>13,3266489909),4294967296*(2097151&r)+(t>>>0)};let g=a("undefined"),M=a(!1),m=a(Object());async function D(){{console.log("Initialising metadata...");let e=await u();m.set(e)}}let b=a(""),U=a(""),c=a(""),x=a(""),d=i(c,e=>h(e)),o=a(""),I=a(!1),v=i([d,o],([e,l])=>e!==l);export{U as a,x as b,b as c,c as d,o as e,d as h,D as i,M as l,m,g as p,I as r,v as u};
