import{w as u}from"./index-09b591d5.js";import{a as h}from"./paths-b4419565.js";let _="";function R(e){_=e}const k="sveltekit:scroll",x="sveltekit:index",f={tap:1,hover:2,viewport:3,eager:4,off:-1};function I(e){let t=e.baseURI;if(!t){const n=e.getElementsByTagName("base");t=n.length?n[0].href:e.URL}return t}function y(){return{x:pageXOffset,y:pageYOffset}}function l(e,t){return e.getAttribute(`data-sveltekit-${t}`)}const d={...f,"":f.hover};function g(e){let t=e.assignedSlot??e.parentNode;return(t==null?void 0:t.nodeType)===11&&(t=t.host),t}function A(e,t){for(;e&&e!==t;){if(e.nodeName.toUpperCase()==="A")return e;e=g(e)}}function S(e,t){let n;try{n=new URL(e instanceof SVGAElement?e.href.baseVal:e.href,document.baseURI)}catch{}const o={rel_external:(e.getAttribute("rel")||"").split(/\s+/).includes("external"),download:e.hasAttribute("download"),target:!!(e instanceof SVGAElement?e.target.baseVal:e.target)},a=!n||v(n,t)||o.rel_external||o.target||o.download;return{url:n,has:o,external:a}}function T(e){let t=null,n=null,o=null,a=null,r=e;for(;r&&r!==document.documentElement;)n===null&&(n=l(r,"preload-code")),o===null&&(o=l(r,"preload-data")),t===null&&(t=l(r,"noscroll")),a===null&&(a=l(r,"reload")),r=g(r);return{preload_code:d[n??"off"],preload_data:d[o??"off"],noscroll:t==="off"?!1:t===""?!0:null,reload:a==="off"?!1:a===""?!0:null}}function p(e){const t=u(e);let n=!0;function o(){n=!0,t.update(s=>s)}function a(s){n=!1,t.set(s)}function r(s){let i;return t.subscribe(c=>{(i===void 0||n&&c!==i)&&s(i=c)})}return{notify:o,set:a,subscribe:r}}function b(){const{set:e,subscribe:t}=u(!1);let n;async function o(){clearTimeout(n);const a=await fetch(`${h}/_app/version.json`,{headers:{pragma:"no-cache","cache-control":"no-cache"}});if(a.ok){const s=(await a.json()).version!==_;return s&&(e(!0),clearTimeout(n)),s}else throw new Error(`Version check failed: ${a.status}`)}return{subscribe:t,check:o}}function v(e,t){return e.origin!==location.origin||!e.pathname.startsWith(t)}let m;function U(e){m=e.client}const L={url:p({}),page:p({}),navigating:u(null),updated:b()};export{x as I,f as P,k as S,S as a,T as b,y as c,U as d,R as e,A as f,I as g,m as h,v as i,L as s};
