import{S as j,i as z,s as J,k as $,l as v,m as T,h as c,n as d,b as h,B as O,C as Ie,D as ne,q as F,r as V,E as se,F as y,G as Q,a as E,c as I,H as A,I as X,J as Y,K as Z,f as w,t as S,L as ie,M as Ae,N as Ue,O as Ne,e as W,g as re,d as oe,P as qe,Q as Be,R as Ce,T as De,U as C,w as G,x as H,y as R,z as K,V as Me,u as fe,W as le,X as Le}from"../../chunks/index-335ca1a6.js";import{b as ae}from"../../chunks/paths-b4419565.js";import{p as Fe}from"../../chunks/stores-69ecd341.js";import{a as _e,A as Ve}from"../../chunks/Alerts-9bc75023.js";import{m as pe}from"../../chunks/stores-ef1c9eb6.js";import{b as Ge}from"../../chunks/navigation-e6b51ede.js";import{c as x,p as He,a as Re}from"../../chunks/index-b9006f2c.js";import{w as Ke}from"../../chunks/index-09b591d5.js";const ue={name:"PocketBase SvelteKit Starter",description:"A start app showing how to use SvelteKit frontend with PocketBase backend"};function me(i,e,n){const t=i.slice();t[2]=e[n][0],t[3]=e[n][1];const l=t[0].url.pathname==t[2];return t[4]=l,t}function he(i){let e,n=i[3]+"",t;return{c(){e=$("a"),t=F(n),this.h()},l(l){e=v(l,"A",{href:!0,class:!0});var r=T(e);t=V(r,n),r.forEach(c),this.h()},h(){d(e,"href",`${ae}${i[2]}`),d(e,"class","svelte-49k3ov"),se(e,"active",i[4])},m(l,r){h(l,e,r),y(e,t)},p(l,r){r&3&&se(e,"active",l[4])},d(l){l&&c(e)}}}function We(i){let e,n=i[1],t=[];for(let l=0;l<n.length;l+=1)t[l]=he(me(i,n,l));return{c(){e=$("nav");for(let l=0;l<t.length;l+=1)t[l].c();this.h()},l(l){e=v(l,"NAV",{class:!0});var r=T(e);for(let s=0;s<t.length;s+=1)t[s].l(r);r.forEach(c),this.h()},h(){d(e,"class","svelte-49k3ov")},m(l,r){h(l,e,r);for(let s=0;s<t.length;s+=1)t[s].m(e,null)},p(l,[r]){if(r&3){n=l[1];let s;for(s=0;s<n.length;s+=1){const a=me(l,n,s);t[s]?t[s].p(a,r):(t[s]=he(a),t[s].c(),t[s].m(e,null))}for(;s<t.length;s+=1)t[s].d(1);t.length=n.length}},i:O,o:O,d(l){l&&c(e),Ie(t,l)}}}function je(i,e,n){let t;return ne(i,Fe,r=>n(0,t=r)),[t,[["/","Home"],["/posts/","Posts"],["/hello/","Hello"]]]}class ze extends j{constructor(e){super(),z(this,e,je,We,J,{})}}const Je=i=>({}),de=i=>({});function Qe(i){let e,n;return{c(){e=$("button"),n=F("Open Dialog")},l(t){e=v(t,"BUTTON",{});var l=T(e);n=V(l,"Open Dialog"),l.forEach(c)},m(t,l){h(t,e,l),y(e,n)},p:O,d(t){t&&c(e)}}}function Xe(i){let e,n,t,l,r,s;const a=i[2].trigger,u=Q(a,i,i[1],de),o=u||Qe(),_=i[2].default,m=Q(_,i,i[1],null);return{c(){e=$("span"),o&&o.c(),n=E(),t=$("dialog"),m&&m.c()},l(f){e=v(f,"SPAN",{});var g=T(e);o&&o.l(g),g.forEach(c),n=I(f),t=v(f,"DIALOG",{});var N=T(t);m&&m.l(N),N.forEach(c)},m(f,g){h(f,e,g),o&&o.m(e,null),h(f,n,g),h(f,t,g),m&&m.m(t,null),i[4](t),l=!0,r||(s=[A(e,"click",i[3]),A(t,"click",Ye)],r=!0)},p(f,[g]){u&&u.p&&(!l||g&2)&&X(u,a,f,f[1],l?Z(a,f[1],g,Je):Y(f[1]),de),m&&m.p&&(!l||g&2)&&X(m,_,f,f[1],l?Z(_,f[1],g,null):Y(f[1]),null)},i(f){l||(w(o,f),w(m,f),l=!0)},o(f){S(o,f),S(m,f),l=!1},d(f){f&&c(e),o&&o.d(f),f&&c(n),f&&c(t),m&&m.d(f),i[4](null),r=!1,ie(s)}}}function Ye(i){var e;typeof((e=i==null?void 0:i.target)==null?void 0:e.close)=="function"&&i.target.close()}function Ze(i,e,n){let{$$slots:t={},$$scope:l}=e,r;const s=u=>r.showModal();function a(u){Ae[u?"unshift":"push"](()=>{r=u,n(0,r)})}return i.$$set=u=>{"$$scope"in u&&n(1,l=u.$$scope)},[r,l,t,s,a]}class Pe extends j{constructor(e){super(),z(this,e,Ze,Xe,J,{})}}function xe(i){let e,n,t,l;const r=i[4].default,s=Q(r,i,i[3],null);return{c(){e=$("button"),s&&s.c(),this.h()},l(a){e=v(a,"BUTTON",{type:!0,class:!0});var u=T(e);s&&s.l(u),u.forEach(c),this.h()},h(){d(e,"type","button"),d(e,"class","title svelte-1ygvho2"),se(e,"active",i[1]===i[0])},m(a,u){h(a,e,u),s&&s.m(e,null),n=!0,t||(l=A(e,"click",i[5]),t=!0)},p(a,[u]){s&&s.p&&(!n||u&8)&&X(s,r,a,a[3],n?Z(r,a[3],u,null):Y(a[3]),null),(!n||u&3)&&se(e,"active",a[1]===a[0])},i(a){n||(w(s,a),n=!0)},o(a){S(s,a),n=!1},d(a){a&&c(e),s&&s.d(a),t=!1,l()}}}function et(i,e,n){let t,{$$slots:l={},$$scope:r}=e,{key:s}=e;const a=Ue("activeTab");ne(i,a,o=>n(1,t=o));const u=()=>Ne(a,t=s,t);return i.$$set=o=>{"key"in o&&n(0,s=o.key),"$$scope"in o&&n(3,r=o.$$scope)},[s,t,a,r,l,u]}class ge extends j{constructor(e){super(),z(this,e,et,xe,J,{key:0})}}function be(i){let e;const n=i[4].default,t=Q(n,i,i[3],null);return{c(){t&&t.c()},l(l){t&&t.l(l)},m(l,r){t&&t.m(l,r),e=!0},p(l,r){t&&t.p&&(!e||r&8)&&X(t,n,l,l[3],e?Z(n,l[3],r,null):Y(l[3]),null)},i(l){e||(w(t,l),e=!0)},o(l){S(t,l),e=!1},d(l){t&&t.d(l)}}}function tt(i){let e,n,t=i[1]===i[0]&&be(i);return{c(){t&&t.c(),e=W()},l(l){t&&t.l(l),e=W()},m(l,r){t&&t.m(l,r),h(l,e,r),n=!0},p(l,[r]){l[1]===l[0]?t?(t.p(l,r),r&3&&w(t,1)):(t=be(l),t.c(),w(t,1),t.m(e.parentNode,e)):t&&(re(),S(t,1,1,()=>{t=null}),oe())},i(l){n||(w(t),n=!0)},o(l){S(t),n=!1},d(l){t&&t.d(l),l&&c(e)}}}function lt(i,e,n){let t,{$$slots:l={},$$scope:r}=e,{key:s}=e;const a=Ue("activeTab");return ne(i,a,u=>n(1,t=u)),i.$$set=u=>{"key"in u&&n(0,s=u.key),"$$scope"in u&&n(3,r=u.$$scope)},[s,t,a,r,l]}class $e extends j{constructor(e){super(),z(this,e,lt,tt,J,{key:0})}}const nt=i=>({}),ve=i=>({});function st(i){let e,n,t,l;const r=i[2].tabs,s=Q(r,i,i[1],ve),a=i[2].default,u=Q(a,i,i[1],null);return{c(){e=$("div"),s&&s.c(),n=E(),t=$("div"),u&&u.c(),this.h()},l(o){e=v(o,"DIV",{class:!0});var _=T(e);s&&s.l(_),_.forEach(c),n=I(o),t=v(o,"DIV",{class:!0});var m=T(t);u&&u.l(m),m.forEach(c),this.h()},h(){d(e,"class","tabs svelte-xgf0me"),d(t,"class","tab-content svelte-xgf0me")},m(o,_){h(o,e,_),s&&s.m(e,null),h(o,n,_),h(o,t,_),u&&u.m(t,null),l=!0},p(o,[_]){s&&s.p&&(!l||_&2)&&X(s,r,o,o[1],l?Z(r,o[1],_,nt):Y(o[1]),ve),u&&u.p&&(!l||_&2)&&X(u,a,o,o[1],l?Z(a,o[1],_,null):Y(o[1]),null)},i(o){l||(w(s,o),w(u,o),l=!0)},o(o){S(s,o),S(u,o),l=!1},d(o){o&&c(e),s&&s.d(o),o&&c(n),o&&c(t),u&&u.d(o)}}}function it(i,e,n){let{$$slots:t={},$$scope:l}=e,{active:r=0}=e;const s=Ke(r);return qe("activeTab",s),i.$$set=a=>{"active"in a&&n(0,r=a.active),"$$scope"in a&&n(1,l=a.$$scope)},[r,l,t]}class rt extends j{constructor(e){super(),z(this,e,it,st,J,{active:0})}}function ke(i,e,n){const t=i.slice();return t[23]=e[n],t}function ye(i){let e,n,t,l;const r=[ut,ot],s=[];function a(u,o){return u[1]?0:1}return e=a(i),n=s[e]=r[e](i),{c(){n.c(),t=W()},l(u){n.l(u),t=W()},m(u,o){s[e].m(u,o),h(u,t,o),l=!0},p(u,o){let _=e;e=a(u),e===_?s[e].p(u,o):(re(),S(s[_],1,1,()=>{s[_]=null}),oe(),n=s[e],n?n.p(u,o):(n=s[e]=r[e](u),n.c()),w(n,1),n.m(t.parentNode,t))},i(u){l||(w(n),l=!0)},o(u){S(n),l=!1},d(u){s[e].d(u),u&&c(t)}}}function ot(i){let e,n,t,l,r,s,a,u,o,_,m;return{c(){e=$("h2"),n=F("Sign In"),t=E(),l=$("input"),r=E(),s=$("input"),a=E(),u=$("button"),o=F("Sign In"),this.h()},l(f){e=v(f,"H2",{});var g=T(e);n=V(g,"Sign In"),g.forEach(c),t=I(f),l=v(f,"INPUT",{type:!0,placeholder:!0}),r=I(f),s=v(f,"INPUT",{type:!0,placeholder:!0}),a=I(f),u=v(f,"BUTTON",{type:!0});var N=T(u);o=V(N,"Sign In"),N.forEach(c),this.h()},h(){l.required=!0,d(l,"type","text"),d(l,"placeholder","email"),s.required=!0,d(s,"type","password"),d(s,"placeholder","password"),d(u,"type","submit")},m(f,g){h(f,e,g),y(e,n),h(f,t,g),h(f,l,g),C(l,i[2]),h(f,r,g),h(f,s,g),C(s,i[4]),h(f,a,g),h(f,u,g),y(u,o),_||(m=[A(l,"input",i[18]),A(s,"input",i[19]),A(u,"click",i[20])],_=!0)},p(f,g){g&4&&l.value!==f[2]&&C(l,f[2]),g&16&&s.value!==f[4]&&C(s,f[4])},i:O,o:O,d(f){f&&c(e),f&&c(t),f&&c(l),f&&c(r),f&&c(s),f&&c(a),f&&c(u),_=!1,ie(m)}}}function ut(i){let e,n;return e=new rt({props:{active:"SignIn",$$slots:{tabs:[mt],default:[ct]},$$scope:{ctx:i}}}),{c(){G(e.$$.fragment)},l(t){H(e.$$.fragment,t)},m(t,l){R(e,t,l),n=!0},p(t,l){const r={};l&67108988&&(r.$$scope={dirty:l,ctx:t}),e.$set(r)},i(t){n||(w(e.$$.fragment,t),n=!0)},o(t){S(e.$$.fragment,t),n=!1},d(t){K(e,t)}}}function at(i){let e,n,t,l,r,s,a,u;return{c(){e=$("input"),n=E(),t=$("input"),l=E(),r=$("button"),s=F("Sign In"),this.h()},l(o){e=v(o,"INPUT",{type:!0,placeholder:!0}),n=I(o),t=v(o,"INPUT",{type:!0,placeholder:!0}),l=I(o),r=v(o,"BUTTON",{type:!0});var _=T(r);s=V(_,"Sign In"),_.forEach(c),this.h()},h(){e.required=!0,d(e,"type","text"),d(e,"placeholder","email"),t.required=!0,d(t,"type","password"),d(t,"placeholder","password"),d(r,"type","submit")},m(o,_){h(o,e,_),C(e,i[2]),h(o,n,_),h(o,t,_),C(t,i[4]),h(o,l,_),h(o,r,_),y(r,s),a||(u=[A(e,"input",i[10]),A(t,"input",i[11]),A(r,"click",i[12])],a=!0)},p(o,_){_&4&&e.value!==o[2]&&C(e,o[2]),_&16&&t.value!==o[4]&&C(t,o[4])},d(o){o&&c(e),o&&c(n),o&&c(t),o&&c(l),o&&c(r),a=!1,ie(u)}}}function ft(i){let e,n,t,l,r,s,a,u,o,_,m,f,g,N;return{c(){e=$("input"),n=E(),t=$("input"),l=E(),r=$("input"),s=E(),a=$("input"),u=E(),o=$("input"),_=E(),m=$("button"),f=F("Sign Up"),this.h()},l(p){e=v(p,"INPUT",{type:!0,placeholder:!0}),n=I(p),t=v(p,"INPUT",{type:!0,placeholder:!0}),l=I(p),r=v(p,"INPUT",{type:!0,placeholder:!0}),s=I(p),a=v(p,"INPUT",{type:!0,placeholder:!0}),u=I(p),o=v(p,"INPUT",{type:!0,name:!0}),_=I(p),m=v(p,"BUTTON",{type:!0});var k=T(m);f=V(k,"Sign Up"),k.forEach(c),this.h()},h(){e.required=!0,d(e,"type","text"),d(e,"placeholder","email"),t.required=!0,d(t,"type","password"),d(t,"placeholder","password"),r.required=!0,d(r,"type","password"),d(r,"placeholder","confirm password"),a.required=!0,d(a,"type","text"),d(a,"placeholder","name / label"),d(o,"type","hidden"),d(o,"name","register"),o.value=!0,d(m,"type","submit")},m(p,k){h(p,e,k),C(e,i[2]),h(p,n,k),h(p,t,k),C(t,i[4]),h(p,l,k),h(p,r,k),C(r,i[5]),h(p,s,k),h(p,a,k),C(a,i[3]),h(p,u,k),h(p,o,k),h(p,_,k),h(p,m,k),y(m,f),g||(N=[A(e,"input",i[13]),A(t,"input",i[14]),A(r,"input",i[15]),A(a,"input",i[16]),A(m,"click",i[17])],g=!0)},p(p,k){k&4&&e.value!==p[2]&&C(e,p[2]),k&16&&t.value!==p[4]&&C(t,p[4]),k&32&&r.value!==p[5]&&C(r,p[5]),k&8&&a.value!==p[3]&&C(a,p[3])},d(p){p&&c(e),p&&c(n),p&&c(t),p&&c(l),p&&c(r),p&&c(s),p&&c(a),p&&c(u),p&&c(o),p&&c(_),p&&c(m),g=!1,ie(N)}}}function ct(i){let e,n,t,l;return e=new $e({props:{key:"SignIn",$$slots:{default:[at]},$$scope:{ctx:i}}}),t=new $e({props:{key:"SignUp",$$slots:{default:[ft]},$$scope:{ctx:i}}}),{c(){G(e.$$.fragment),n=E(),G(t.$$.fragment)},l(r){H(e.$$.fragment,r),n=I(r),H(t.$$.fragment,r)},m(r,s){R(e,r,s),h(r,n,s),R(t,r,s),l=!0},p(r,s){const a={};s&67108948&&(a.$$scope={dirty:s,ctx:r}),e.$set(a);const u={};s&67108988&&(u.$$scope={dirty:s,ctx:r}),t.$set(u)},i(r){l||(w(e.$$.fragment,r),w(t.$$.fragment,r),l=!0)},o(r){S(e.$$.fragment,r),S(t.$$.fragment,r),l=!1},d(r){K(e,r),r&&c(n),K(t,r)}}}function _t(i){let e;return{c(){e=F("Sign In")},l(n){e=V(n,"Sign In")},m(n,t){h(n,e,t)},d(n){n&&c(e)}}}function pt(i){let e;return{c(){e=F("Sign Up")},l(n){e=V(n,"Sign Up")},m(n,t){h(n,e,t)},d(n){n&&c(e)}}}function mt(i){let e,n,t,l,r;return n=new ge({props:{key:"SignIn",$$slots:{default:[_t]},$$scope:{ctx:i}}}),l=new ge({props:{key:"SignUp",$$slots:{default:[pt]},$$scope:{ctx:i}}}),{c(){e=$("div"),G(n.$$.fragment),t=E(),G(l.$$.fragment),this.h()},l(s){e=v(s,"DIV",{slot:!0});var a=T(e);H(n.$$.fragment,a),t=I(a),H(l.$$.fragment,a),a.forEach(c),this.h()},h(){d(e,"slot","tabs")},m(s,a){h(s,e,a),R(n,e,null),y(e,t),R(l,e,null),r=!0},p(s,a){const u={};a&67108864&&(u.$$scope={dirty:a,ctx:s}),n.$set(u);const o={};a&67108864&&(o.$$scope={dirty:a,ctx:s}),l.$set(o)},i(s){r||(w(n.$$.fragment,s),w(l.$$.fragment,s),r=!0)},o(s){S(n.$$.fragment,s),S(l.$$.fragment,s),r=!1},d(s){s&&c(e),K(n),K(l)}}}function ht(i){return{c:O,l:O,m:O,p:O,d:O}}function dt(i){let e,n=i[22].authProviders,t=[];for(let l=0;l<n.length;l+=1)t[l]=we(ke(i,n,l));return{c(){for(let l=0;l<t.length;l+=1)t[l].c();e=W()},l(l){for(let r=0;r<t.length;r+=1)t[r].l(l);e=W()},m(l,r){for(let s=0;s<t.length;s+=1)t[s].m(l,r);h(l,e,r)},p(l,r){if(r&128){n=l[22].authProviders;let s;for(s=0;s<n.length;s+=1){const a=ke(l,n,s);t[s]?t[s].p(a,r):(t[s]=we(a),t[s].c(),t[s].m(e.parentNode,e))}for(;s<t.length;s+=1)t[s].d(1);t.length=n.length}},d(l){Ie(t,l),l&&c(e)}}}function we(i){let e,n,t=i[23].name+"",l,r,s;function a(){return i[21](i[23])}return{c(){e=$("button"),n=F("Sign-in with "),l=F(t),this.h()},l(u){e=v(u,"BUTTON",{type:!0});var o=T(e);n=V(o,"Sign-in with "),l=V(o,t),o.forEach(c),this.h()},h(){d(e,"type","button")},m(u,o){h(u,e,o),y(e,n),y(e,l),r||(s=A(e,"click",a),r=!0)},p(u,o){i=u},d(u){u&&c(e),r=!1,s()}}}function gt(i){return{c:O,l:O,m:O,p:O,d:O}}function bt(i){let e,n,t,l,r,s=i[0]&&ye(i),a={ctx:i,current:null,token:null,hasCatch:!0,pending:gt,then:dt,catch:ht,value:22};return Be(i[7].listAuthMethods({$autoCancel:!1}),a),{c(){e=$("form"),s&&s.c(),n=E(),a.block.c()},l(u){e=v(u,"FORM",{});var o=T(e);s&&s.l(o),n=I(o),a.block.l(o),o.forEach(c)},m(u,o){h(u,e,o),s&&s.m(e,null),y(e,n),a.block.m(e,a.anchor=null),a.mount=()=>e,a.anchor=null,t=!0,l||(r=A(e,"submit",Ce(i[8])),l=!0)},p(u,[o]){i=u,i[0]?s?(s.p(i,o),o&1&&w(s,1)):(s=ye(i),s.c(),w(s,1),s.m(e,n)):s&&(re(),S(s,1,1,()=>{s=null}),oe()),De(a,i,o)},i(u){t||(w(s),t=!0)},o(u){S(s),t=!1},d(u){u&&c(e),s&&s.d(),a.block.d(),a.token=null,a=null,l=!1,r()}}}function $t(i,e,n){let{authCollection:t="users"}=e,{passwordLogin:l=!0}=e,{signup:r=!0}=e;const s=x.collection(t);let a,u,o,_,m=!1;async function f(){m&&await s.create({email:a,name:u,password:o,passwordConfirm:_}),await s.authWithPassword(a,o)}function g(){a=this.value,n(2,a)}function N(){o=this.value,n(4,o)}const p=()=>n(6,m=!1);function k(){a=this.value,n(2,a)}function q(){o=this.value,n(4,o)}function D(){_=this.value,n(5,_)}function B(){u=this.value,n(3,u)}const U=()=>n(6,m=!0);function te(){a=this.value,n(2,a)}function M(){o=this.value,n(4,o)}const b=()=>n(6,m=!1),P=L=>He(L,s);return i.$$set=L=>{"authCollection"in L&&n(9,t=L.authCollection),"passwordLogin"in L&&n(0,l=L.passwordLogin),"signup"in L&&n(1,r=L.signup)},[l,r,a,u,o,_,m,s,f,t,g,N,p,k,q,D,B,U,te,M,b,P]}class vt extends j{constructor(e){super(),z(this,e,$t,bt,J,{authCollection:9,passwordLogin:0,signup:1})}}function kt(i){let e,n;return e=new Pe({props:{$$slots:{trigger:[Tt],default:[wt]},$$scope:{ctx:i}}}),{c(){G(e.$$.fragment)},l(t){H(e.$$.fragment,t)},m(t,l){R(e,t,l),n=!0},p(t,l){const r={};l&8&&(r.$$scope={dirty:l,ctx:t}),e.$set(r)},i(t){n||(w(e.$$.fragment,t),n=!0)},o(t){S(e.$$.fragment,t),n=!1},d(t){K(e,t)}}}function yt(i){let e,n;return e=new Pe({props:{$$slots:{trigger:[Et],default:[St]},$$scope:{ctx:i}}}),{c(){G(e.$$.fragment)},l(t){H(e.$$.fragment,t)},m(t,l){R(e,t,l),n=!0},p(t,l){const r={};l&9&&(r.$$scope={dirty:l,ctx:t}),e.$set(r)},i(t){n||(w(e.$$.fragment,t),n=!0)},o(t){S(e.$$.fragment,t),n=!1},d(t){K(e,t)}}}function wt(i){let e,n;return e=new vt({props:{signup:Ut}}),{c(){G(e.$$.fragment)},l(t){H(e.$$.fragment,t)},m(t,l){R(e,t,l),n=!0},p:O,i(t){n||(w(e.$$.fragment,t),n=!0)},o(t){S(e.$$.fragment,t),n=!1},d(t){K(e,t)}}}function Tt(i){let e,n="Sign In / Sign Up",t;return{c(){e=$("button"),t=F(n),this.h()},l(l){e=v(l,"BUTTON",{slot:!0});var r=T(e);t=V(r,n),r.forEach(c),this.h()},h(){d(e,"slot","trigger")},m(l,r){h(l,e,r),y(e,t)},p:O,d(l){l&&c(e)}}}function Te(i){let e,n;return{c(){e=$("img"),this.h()},l(t){e=v(t,"IMG",{src:!0,alt:!0,class:!0}),this.h()},h(){le(e.src,n=x.getFileUrl(i[0],i[0].avatar))||d(e,"src",n),d(e,"alt","profile pic"),d(e,"class","svelte-6b3v9b")},m(t,l){h(t,e,l)},p(t,l){l&1&&!le(e.src,n=x.getFileUrl(t[0],t[0].avatar))&&d(e,"src",n)},d(t){t&&c(e)}}}function St(i){var g,N,p;let e,n,t,l,r=(((g=i[0])==null?void 0:g.name)??((N=i[0])==null?void 0:N.username)??((p=i[0])==null?void 0:p.email))+"",s,a,u,o,_,m,f=i[0].avatar&&Te(i);return{c(){e=$("div"),n=$("div"),f&&f.c(),t=E(),l=$("samp"),s=F(r),a=E(),u=$("button"),o=F("Sign Out"),this.h()},l(k){e=v(k,"DIV",{class:!0});var q=T(e);n=v(q,"DIV",{class:!0});var D=T(n);f&&f.l(D),t=I(D),l=v(D,"SAMP",{});var B=T(l);s=V(B,r),B.forEach(c),D.forEach(c),a=I(q),u=v(q,"BUTTON",{});var U=T(u);o=V(U,"Sign Out"),U.forEach(c),q.forEach(c),this.h()},h(){d(n,"class","badge svelte-6b3v9b"),d(e,"class","wrapper svelte-6b3v9b")},m(k,q){h(k,e,q),y(e,n),f&&f.m(n,null),y(n,t),y(n,l),y(l,s),y(e,a),y(e,u),y(u,o),_||(m=A(u,"click",i[1]),_=!0)},p(k,q){var D,B,U;k[0].avatar?f?f.p(k,q):(f=Te(k),f.c(),f.m(n,t)):f&&(f.d(1),f=null),q&1&&r!==(r=(((D=k[0])==null?void 0:D.name)??((B=k[0])==null?void 0:B.username)??((U=k[0])==null?void 0:U.email))+"")&&fe(s,r)},d(k){k&&c(e),f&&f.d(),_=!1,m()}}}function Se(i){let e,n;return{c(){e=$("img"),this.h()},l(t){e=v(t,"IMG",{src:!0,alt:!0,class:!0}),this.h()},h(){le(e.src,n=x.getFileUrl(i[0],i[0].avatar))||d(e,"src",n),d(e,"alt","profile pic"),d(e,"class","svelte-6b3v9b")},m(t,l){h(t,e,l)},p(t,l){l&1&&!le(e.src,n=x.getFileUrl(t[0],t[0].avatar))&&d(e,"src",n)},d(t){t&&c(e)}}}function Et(i){var a,u,o;let e,n,t,l=(((a=i[0])==null?void 0:a.name)||((u=i[0])==null?void 0:u.username)||((o=i[0])==null?void 0:o.email))+"",r,s=i[0].avatar&&Se(i);return{c(){e=$("div"),s&&s.c(),n=E(),t=$("samp"),r=F(l),this.h()},l(_){e=v(_,"DIV",{class:!0,slot:!0});var m=T(e);s&&s.l(m),n=I(m),t=v(m,"SAMP",{});var f=T(t);r=V(f,l),f.forEach(c),m.forEach(c),this.h()},h(){d(e,"class","badge svelte-6b3v9b"),d(e,"slot","trigger")},m(_,m){h(_,e,m),s&&s.m(e,null),y(e,n),y(e,t),y(t,r)},p(_,m){var f,g,N;_[0].avatar?s?s.p(_,m):(s=Se(_),s.c(),s.m(e,n)):s&&(s.d(1),s=null),m&1&&l!==(l=(((f=_[0])==null?void 0:f.name)||((g=_[0])==null?void 0:g.username)||((N=_[0])==null?void 0:N.email))+"")&&fe(r,l)},d(_){_&&c(e),s&&s.d()}}}function It(i){let e,n,t,l;const r=[yt,kt],s=[];function a(u,o){return u[0]?0:1}return e=a(i),n=s[e]=r[e](i),{c(){n.c(),t=W()},l(u){n.l(u),t=W()},m(u,o){s[e].m(u,o),h(u,t,o),l=!0},p(u,[o]){let _=e;e=a(u),e===_?s[e].p(u,o):(re(),S(s[_],1,1,()=>{s[_]=null}),oe(),n=s[e],n?n.p(u,o):(n=s[e]=r[e](u),n.c()),w(n,1),n.m(t.parentNode,t))},i(u){l||(w(n),l=!0)},o(u){S(n),l=!1},d(u){s[e].d(u),u&&c(t)}}}let Ut=!0;function Nt(i,e,n){let t;ne(i,Re,s=>n(0,t=s));async function l(){x.authStore.clear()}const r=x.authStore.onChange((s,a)=>{if(a){const{name:u,username:o}=a;_e.success(`Signed in as ${u||o}`,5e3)}else _e.success("Signed out",5e3)},!1);return Me(()=>{r()}),i.$$.update=()=>{i.$$.dirty&1&&console.log({$authModel:t})},[t,l]}class Pt extends j{constructor(e){super(),z(this,e,Nt,It,J,{})}}function Ee(i){let e,n;return{c(){e=$("h1"),n=F(i[0])},l(t){e=v(t,"H1",{});var l=T(e);n=V(l,i[0]),l.forEach(c)},m(t,l){h(t,e,l),y(e,n)},p(t,l){l&1&&fe(n,t[0])},d(t){t&&c(e)}}}function Ot(i){let e,n,t,l,r,s,a,u,o,_,m,f,g,N,p,k,q,D,B;document.title=e=i[2],o=new ze({}),m=new Pt({});let U=i[0]&&Ee(i);p=new Ve({});const te=i[5].default,M=Q(te,i,i[4],null);return{c(){n=$("meta"),t=E(),l=$("header"),r=$("a"),s=$("img"),u=E(),G(o.$$.fragment),_=E(),G(m.$$.fragment),f=E(),g=$("main"),U&&U.c(),N=E(),G(p.$$.fragment),k=E(),M&&M.c(),q=E(),D=$("footer"),this.h()},l(b){const P=Le("svelte-1law5hj",document.head);n=v(P,"META",{name:!0,content:!0}),P.forEach(c),t=I(b),l=v(b,"HEADER",{class:!0});var L=T(l);r=v(L,"A",{href:!0,class:!0});var ce=T(r);s=v(ce,"IMG",{src:!0,alt:!0}),ce.forEach(c),u=I(L),H(o.$$.fragment,L),_=I(L),H(m.$$.fragment,L),L.forEach(c),f=I(b),g=v(b,"MAIN",{});var ee=T(g);U&&U.l(ee),N=I(ee),H(p.$$.fragment,ee),k=I(ee),M&&M.l(ee),ee.forEach(c),q=I(b),D=v(b,"FOOTER",{});var Oe=T(D);Oe.forEach(c),this.h()},h(){d(n,"name","description"),d(n,"content",i[1]),le(s.src,a=`${ae}/favicon.ico`)||d(s,"src",a),d(s,"alt","application logo"),d(r,"href",`${ae}/`),d(r,"class","logo svelte-yg7qut"),d(l,"class","svelte-yg7qut")},m(b,P){y(document.head,n),h(b,t,P),h(b,l,P),y(l,r),y(r,s),y(l,u),R(o,l,null),y(l,_),R(m,l,null),h(b,f,P),h(b,g,P),U&&U.m(g,null),y(g,N),R(p,g,null),y(g,k),M&&M.m(g,null),h(b,q,P),h(b,D,P),B=!0},p(b,[P]){(!B||P&4)&&e!==(e=b[2])&&(document.title=e),(!B||P&2)&&d(n,"content",b[1]),b[0]?U?U.p(b,P):(U=Ee(b),U.c(),U.m(g,N)):U&&(U.d(1),U=null),M&&M.p&&(!B||P&16)&&X(M,te,b,b[4],B?Z(te,b[4],P,null):Y(b[4]),null)},i(b){B||(w(o.$$.fragment,b),w(m.$$.fragment,b),w(p.$$.fragment,b),w(M,b),B=!0)},o(b){S(o.$$.fragment,b),S(m.$$.fragment,b),S(p.$$.fragment,b),S(M,b),B=!1},d(b){c(n),b&&c(t),b&&c(l),K(o),K(m),b&&c(f),b&&c(g),U&&U.d(),K(p),M&&M.d(b),b&&c(q),b&&c(D)}}}function At(i,e,n){let t,l,r,s;ne(i,pe,o=>n(3,s=o));let{$$slots:a={},$$scope:u}=e;return Ge(()=>{Ne(pe,s={},s)}),i.$$set=o=>{"$$scope"in o&&n(4,u=o.$$scope)},i.$$.update=()=>{i.$$.dirty&8&&n(2,t=s.title?s.title+" | "+ue.name:ue.name),i.$$.dirty&8&&n(1,l=s.description??ue.description),i.$$.dirty&8&&n(0,r=s.headline??s.title)},[r,l,t,s,u,a]}class Gt extends j{constructor(e){super(),z(this,e,At,Ot,J,{})}}export{Gt as default};
