import{S as E,i as O,s as k,k as u,r as d,a as j,l as v,m as h,u as y,h as o,c as w,b as p,F as b,v as H,n as x}from"../chunks/index.155e9c59.js";const A=async function({fetch:l}){return{...await(await l("/api/hello")).json()}},N=Object.freeze(Object.defineProperty({__proto__:null,load:A},Symbol.toStringTag,{value:"Module"}));function G(l){let t,r,n,s,m,c,i,f=JSON.stringify(l[0])+"",_;return{c(){t=u("h1"),r=d("Hello!"),n=j(),s=u("p"),m=d("Got the following API response from the backend server"),c=j(),i=u("pre"),_=d(f)},l(e){t=v(e,"H1",{});var a=h(t);r=y(a,"Hello!"),a.forEach(o),n=w(e),s=v(e,"P",{});var P=h(s);m=y(P,"Got the following API response from the backend server"),P.forEach(o),c=w(e),i=v(e,"PRE",{});var S=h(i);_=y(S,f),S.forEach(o)},m(e,a){p(e,t,a),b(t,r),p(e,n,a),p(e,s,a),b(s,m),p(e,c,a),p(e,i,a),b(i,_)},p(e,[a]){a&1&&f!==(f=JSON.stringify(e[0])+"")&&H(_,f)},i:x,o:x,d(e){e&&o(t),e&&o(n),e&&o(s),e&&o(c),e&&o(i)}}}function I(l,t,r){let{data:n}=t;return l.$$set=s=>{"data"in s&&r(0,n=s.data)},[n]}class g extends E{constructor(t){super(),O(this,t,I,G,k,{data:0})}}export{g as component,N as universal};
