import{S as H,i as q,s as w,k as d,q as u,a as S,l as h,m as v,r as P,h as l,c as b,b as f,F as x,u as A,B as k}from"../../../chunks/index-335ca1a6.js";function G(p){let t,o,r,s,_,c,i,n=JSON.stringify(p[0])+"",m;return{c(){t=d("h1"),o=u("Hello!"),r=S(),s=d("p"),_=u("Got the following API response from the backend server"),c=S(),i=d("pre"),m=u(n)},l(e){t=h(e,"H1",{});var a=v(t);o=P(a,"Hello!"),a.forEach(l),r=b(e),s=h(e,"P",{});var y=v(s);_=P(y,"Got the following API response from the backend server"),y.forEach(l),c=b(e),i=h(e,"PRE",{});var E=v(i);m=P(E,n),E.forEach(l)},m(e,a){f(e,t,a),x(t,o),f(e,r,a),f(e,s,a),x(s,_),f(e,c,a),f(e,i,a),x(i,m)},p(e,[a]){a&1&&n!==(n=JSON.stringify(e[0])+"")&&A(m,n)},i:k,o:k,d(e){e&&l(t),e&&l(r),e&&l(s),e&&l(c),e&&l(i)}}}function I(p,t,o){let{data:r}=t;return p.$$set=s=>{"data"in s&&o(0,r=s.data)},[r]}class N extends H{constructor(t){super(),q(this,t,I,G,w,{data:0})}}export{N as default};