import{a as s}from"./Alerts-9bc75023.js";const a=!1,t=!1,o="always",r=async({fetch:e})=>{(await e("/_/")).redirected&&s.add({message:'Please visit <a href="/_/">/_</a> to finalize installation of PocketBase',type:"error",html:!0})},i=Object.freeze(Object.defineProperty({__proto__:null,ssr:a,prerender:t,trailingSlash:o,load:r},Symbol.toStringTag,{value:"Module"}));export{i as _,r as l,t as p,a as s,o as t};