import{r as w,e as z,j as v}from"./index-CDqrw5Rb.js";function W(t,i,a,r){return new(a||(a=Promise))(function(e,l){function o(u){try{f(r.next(u))}catch(n){l(n)}}function s(u){try{f(r.throw(u))}catch(n){l(n)}}function f(u){var n;u.done?e(u.value):(n=u.value,n instanceof a?n:new a(function(d){d(n)})).then(o,s)}f((r=r.apply(t,[])).next())})}function S(t,i){var a,r,e,l,o={label:0,sent:function(){if(1&e[0])throw e[1];return e[1]},trys:[],ops:[]};return l={next:s(0),throw:s(1),return:s(2)},typeof Symbol=="function"&&(l[Symbol.iterator]=function(){return this}),l;function s(f){return function(u){return function(n){if(a)throw new TypeError("Generator is already executing.");for(;o;)try{if(a=1,r&&(e=2&n[0]?r.return:n[0]?r.throw||((e=r.return)&&e.call(r),0):r.next)&&!(e=e.call(r,n[1])).done)return e;switch(r=0,e&&(n=[2&n[0],e.value]),n[0]){case 0:case 1:e=n;break;case 4:return o.label++,{value:n[1],done:!1};case 5:o.label++,r=n[1],n=[0];continue;case 7:n=o.ops.pop(),o.trys.pop();continue;default:if(e=o.trys,!((e=e.length>0&&e[e.length-1])||n[0]!==6&&n[0]!==2)){o=0;continue}if(n[0]===3&&(!e||n[1]>e[0]&&n[1]<e[3])){o.label=n[1];break}if(n[0]===6&&o.label<e[1]){o.label=e[1],e=n;break}if(e&&o.label<e[2]){o.label=e[2],o.ops.push(n);break}e[2]&&o.ops.pop(),o.trys.pop();continue}n=i.call(t,o)}catch(d){n=[6,d],r=0}finally{a=e=0}if(5&n[0])throw n[1];return{value:n[0]?n[1]:void 0,done:!0}}([f,u])}}}function K(t){var i=typeof Symbol=="function"&&Symbol.iterator,a=i&&t[i],r=0;if(a)return a.call(t);if(t&&typeof t.length=="number")return{next:function(){return t&&r>=t.length&&(t=void 0),{value:t&&t[r++],done:!t}}};throw new TypeError(i?"Object is not iterable.":"Symbol.iterator is not defined.")}function g(t,i){var a=typeof Symbol=="function"&&t[Symbol.iterator];if(!a)return t;var r,e,l=a.call(t),o=[];try{for(;(i===void 0||i-- >0)&&!(r=l.next()).done;)o.push(r.value)}catch(s){e={error:s}}finally{try{r&&!r.done&&(a=l.return)&&a.call(l)}finally{if(e)throw e.error}}return o}function j(t,i,a){if(arguments.length===2)for(var r,e=0,l=i.length;e<l;e++)!r&&e in i||(r||(r=Array.prototype.slice.call(i,0,e)),r[e]=i[e]);return t.concat(r||Array.prototype.slice.call(i))}function U(t,i,a,r,e){for(var l=[],o=5;o<arguments.length;o++)l[o-5]=arguments[o];return W(this,void 0,void 0,function(){var s,f,u,n,d,h;return S(this,function(p){switch(p.label){case 0:p.trys.push([0,12,13,14]),s=K(l),f=s.next(),p.label=1;case 1:if(f.done)return[3,11];switch(u=f.value,typeof u){case"string":return[3,2];case"number":return[3,4];case"function":return[3,6]}return[3,8];case 2:return[4,Y(t,i,u,a,r,e)];case 3:return p.sent(),[3,10];case 4:return[4,X(u)];case 5:return p.sent(),[3,10];case 6:return[4,u.apply(void 0,j([t,i,a,r,e],g(l),!1))];case 7:return p.sent(),[3,10];case 8:return[4,u];case 9:p.sent(),p.label=10;case 10:return f=s.next(),[3,1];case 11:return[3,14];case 12:return n=p.sent(),d={error:n},[3,14];case 13:try{f&&!f.done&&(h=s.return)&&h.call(s)}finally{if(d)throw d.error}return[7];case 14:return[2]}})})}function Y(t,i,a,r,e,l){return W(this,void 0,void 0,function(){var o,s;return S(this,function(f){switch(f.label){case 0:return o=t.textContent||"",s=function(u,n){var d=g(n).slice(0);return j(j([],g(u),!1),[NaN],!1).findIndex(function(h,p){return d[p]!==h})}(o,a),[4,Z(t,j(j([],g(ee(o,i,s)),!1),g($(a,i,s)),!1),r,e,l)];case 1:return f.sent(),[2]}})})}function X(t){return W(this,void 0,void 0,function(){return S(this,function(i){switch(i.label){case 0:return[4,new Promise(function(a){return setTimeout(a,t)})];case 1:return i.sent(),[2]}})})}function Z(t,i,a,r,e){return W(this,void 0,void 0,function(){var l,o,s,f,u,n,d,h,p,D,M,O,I;return S(this,function(E){switch(E.label){case 0:if(l=i,e){for(o=0,s=1;s<i.length;s++)if(f=g([i[s-1],i[s]],2),u=f[0],(n=f[1]).length>u.length||n===""){o=s;break}l=i.slice(o,i.length)}E.label=1;case 1:E.trys.push([1,6,7,8]),d=K(function(F){var P,k,N,C,G,A,R;return S(this,function(x){switch(x.label){case 0:P=function(_){return S(this,function(q){switch(q.label){case 0:return[4,{op:function(B){return requestAnimationFrame(function(){return B.textContent=_})},opCode:function(B){var H=B.textContent||"";return _===""||H.length>_.length?"DELETE":"WRITING"}}];case 1:return q.sent(),[2]}})},x.label=1;case 1:x.trys.push([1,6,7,8]),k=K(F),N=k.next(),x.label=2;case 2:return N.done?[3,5]:(C=N.value,[5,P(C)]);case 3:x.sent(),x.label=4;case 4:return N=k.next(),[3,2];case 5:return[3,8];case 6:return G=x.sent(),A={error:G},[3,8];case 7:try{N&&!N.done&&(R=k.return)&&R.call(k)}finally{if(A)throw A.error}return[7];case 8:return[2]}})}(l)),h=d.next(),E.label=2;case 2:return h.done?[3,5]:(p=h.value,D=p.opCode(t)==="WRITING"?a+a*(Math.random()-.5):r+r*(Math.random()-.5),p.op(t),[4,X(D)]);case 3:E.sent(),E.label=4;case 4:return h=d.next(),[3,2];case 5:return[3,8];case 6:return M=E.sent(),O={error:M},[3,8];case 7:try{h&&!h.done&&(I=d.return)&&I.call(d)}finally{if(O)throw O.error}return[7];case 8:return[2]}})})}function $(t,i,a){var r,e;return a===void 0&&(a=0),S(this,function(l){switch(l.label){case 0:r=i(t),e=r.length,l.label=1;case 1:return a<e?[4,r.slice(0,++a).join("")]:[3,3];case 2:return l.sent(),[3,1];case 3:return[2]}})}function ee(t,i,a){var r,e;return a===void 0&&(a=0),S(this,function(l){switch(l.label){case 0:r=i(t),e=r.length,l.label=1;case 1:return e>a?[4,r.slice(0,--e).join("")]:[3,3];case 2:return l.sent(),[3,1];case 3:return[2]}})}var te="index-module_type__E-SaG";(function(t,i){i===void 0&&(i={});var a=i.insertAt;if(typeof document<"u"){var r=document.head||document.getElementsByTagName("head")[0],e=document.createElement("style");e.type="text/css",a==="top"&&r.firstChild?r.insertBefore(e,r.firstChild):r.appendChild(e),e.styleSheet?e.styleSheet.cssText=t:e.appendChild(document.createTextNode(t))}})(`.index-module_type__E-SaG::after {
  content: '|';
  animation: index-module_cursor__PQg0P 1.1s infinite step-start;
}

@keyframes index-module_cursor__PQg0P {
  50% {
    opacity: 0;
  }
}
`);var re=w.memo(w.forwardRef(function(t,i){var a=t.sequence,r=t.repeat,e=t.className,l=t.speed,o=l===void 0?40:l,s=t.deletionSpeed,f=t.omitDeletionAnimation,u=f!==void 0&&f,n=t.preRenderFirstString,d=n!==void 0&&n,h=t.wrapper,p=h===void 0?"span":h,D=t.splitter,M=D===void 0?function(c){return j([],g(c),!1)}:D,O=t.cursor,I=O===void 0||O,E=t.style,F=function(c,m){var b={};for(var y in c)Object.prototype.hasOwnProperty.call(c,y)&&m.indexOf(y)<0&&(b[y]=c[y]);if(c!=null&&typeof Object.getOwnPropertySymbols=="function"){var T=0;for(y=Object.getOwnPropertySymbols(c);T<y.length;T++)m.indexOf(y[T])<0&&Object.prototype.propertyIsEnumerable.call(c,y[T])&&(b[y[T]]=c[y[T]])}return b}(t,["sequence","repeat","className","speed","deletionSpeed","omitDeletionAnimation","preRenderFirstString","wrapper","splitter","cursor","style"]),P=F["aria-label"],k=F["aria-hidden"],N=F.role;s||(s=o);var C=new Array(2).fill(40);[o,s].forEach(function(c,m){switch(typeof c){case"number":C[m]=Math.abs(c-100);break;case"object":var b=c.type,y=c.value;if(typeof y!="number")break;b==="keyStrokeDelayInMs"&&(C[m]=y)}});var G,A,R,x,_,q,B=C[0],H=C[1],L=function(c,m){m===void 0&&(m=null);var b=w.useRef(m);return w.useEffect(function(){c&&(typeof c=="function"?c(b.current):c.current=b.current)},[c]),b}(i),Q=te;G=e?"".concat(I?Q+" ":"").concat(e):I?Q:"",A=w.useRef(function(){var c,m=a;r===1/0?c=U:typeof r=="number"&&(m=Array(1+r).fill(a).flat());var b=c?j(j([],g(m),!1),[c],!1):j([],g(m),!1);return U.apply(void 0,j([L.current,M,B,H,u],g(b),!1)),function(){L.current}}),R=w.useRef(),x=w.useRef(!1),_=w.useRef(!1),q=g(w.useState(0),2)[1],x.current&&(_.current=!0),w.useEffect(function(){return x.current||(R.current=A.current(),x.current=!0),q(function(c){return c+1}),function(){_.current&&R.current&&R.current()}},[]);var J=p,V=d?a.find(function(c){return typeof c=="string"})||"":null;return z.createElement(J,{"aria-hidden":k,"aria-label":P,role:N,style:E,className:G,children:P?z.createElement("span",{"aria-hidden":"true",ref:L,children:V}):V,ref:P?void 0:L})}),function(t,i){return!0});const ne="/assets/myphoto-DX8lklkg.jpg",ae="/assets/AnshKumarResume-BRFeUbC7.png",oe=()=>{w.useEffect(()=>{(()=>{const a=new SpeechSynthesisUtterance("Home page loaded of ansh kumar resume.");window.speechSynthesis.speak(a)})()},[]);const t=()=>{window.open(ae,"_blank")};return v.jsxs("div",{className:"flex flex-col-reverse items-center justify-center sm:px-10 lg:pb-40 xl:flex-row xl:pb-0 xl:pt-20",children:[v.jsx("div",{className:"flex w-full flex-col items-center py-10 text-xl xl:w-1/2 xl:items-end",children:v.jsxs("div",{className:"w-fit",children:[v.jsxs("p",{className:"text-xl text-themePrimaryColor",children:[v.jsx("span",{className:"span",children:"<"})," Hi 👋 my name is"]}),v.jsxs("h1",{className:"pt-2 text-3xl font-bold text-primaryColor opacity-70 sm:text-5xl",children:["Ansh Kumar ",v.jsx("span",{className:"text-3xl font-extrabold text-themePrimaryColor sm:text-5xl",children:"/>"})]}),v.jsx(re,{sequence:["Full-Stack Developer",1e3,"React Developer",1e3,"Back-End Developer",1e3,"Data Science Enthusiast",1e3],wrapper:"span",speed:2,style:{paddingTop:"8px",fontWeight:"300",fontSize:"1.5rem",color:"#768390",display:"inline-block"},repeat:1/0}),v.jsx("div",{className:"mt-10 flex w-full flex-col sm:flex-row",children:v.jsx("button",{id:"open-cv-button",title:"Open CV",className:"btn-secondary w-full rounded px-12 py-4 hover:brightness-110 sm:w-fit",onClick:t,children:"Open CV"})})]})}),v.jsx("div",{className:"relative w-full flex justify-center xl:w-1/2 xl:pt-10 xl:top-[-64px]",children:v.jsx("img",{className:"h-auto max-h-[300px] w-auto max-w-[215px] md:max-h-[400px] md:max-w-[286px] xl:max-h-[500px] xl:max-w-[358px] object-cover rounded-lg",loading:"lazy",src:ne,alt:"myPhoto"})})]})};export{oe as default};
