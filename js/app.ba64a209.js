(function(e){function t(t){for(var n,o,u=t[0],l=t[1],c=t[2],s=0,f=[];s<u.length;s++)o=u[s],Object.prototype.hasOwnProperty.call(a,o)&&a[o]&&f.push(a[o][0]),a[o]=0;for(n in l)Object.prototype.hasOwnProperty.call(l,n)&&(e[n]=l[n]);d&&d(t);while(f.length)f.shift()();return i.push.apply(i,c||[]),r()}function r(){for(var e,t=0;t<i.length;t++){for(var r=i[t],n=!0,o=1;o<r.length;o++){var u=r[o];0!==a[u]&&(n=!1)}n&&(i.splice(t--,1),e=l(l.s=r[0]))}return e}var n={},o={1:0},a={1:0},i=[];function u(e){return l.p+"js/"+({}[e]||e)+"."+{2:"fc7fe16f",3:"ee7ecafe",4:"4e8c3ebb",5:"368a08d4"}[e]+".js"}function l(t){if(n[t])return n[t].exports;var r=n[t]={i:t,l:!1,exports:{}};return e[t].call(r.exports,r,r.exports,l),r.l=!0,r.exports}l.e=function(e){var t=[],r={2:1};o[e]?t.push(o[e]):0!==o[e]&&r[e]&&t.push(o[e]=new Promise((function(t,r){for(var n="css/"+({}[e]||e)+"."+{2:"f8dc4591",3:"31d6cfe0",4:"31d6cfe0",5:"31d6cfe0"}[e]+".css",a=l.p+n,i=document.getElementsByTagName("link"),u=0;u<i.length;u++){var c=i[u],s=c.getAttribute("data-href")||c.getAttribute("href");if("stylesheet"===c.rel&&(s===n||s===a))return t()}var f=document.getElementsByTagName("style");for(u=0;u<f.length;u++){c=f[u],s=c.getAttribute("data-href");if(s===n||s===a)return t()}var d=document.createElement("link");d.rel="stylesheet",d.type="text/css",d.onload=t,d.onerror=function(t){var n=t&&t.target&&t.target.src||a,i=new Error("Loading CSS chunk "+e+" failed.\n("+n+")");i.code="CSS_CHUNK_LOAD_FAILED",i.request=n,delete o[e],d.parentNode.removeChild(d),r(i)},d.href=a;var p=document.getElementsByTagName("head")[0];p.appendChild(d)})).then((function(){o[e]=0})));var n=a[e];if(0!==n)if(n)t.push(n[2]);else{var i=new Promise((function(t,r){n=a[e]=[t,r]}));t.push(n[2]=i);var c,s=document.createElement("script");s.charset="utf-8",s.timeout=120,l.nc&&s.setAttribute("nonce",l.nc),s.src=u(e);var f=new Error;c=function(t){s.onerror=s.onload=null,clearTimeout(d);var r=a[e];if(0!==r){if(r){var n=t&&("load"===t.type?"missing":t.type),o=t&&t.target&&t.target.src;f.message="Loading chunk "+e+" failed.\n("+n+": "+o+")",f.name="ChunkLoadError",f.type=n,f.request=o,r[1](f)}a[e]=void 0}};var d=setTimeout((function(){c({type:"timeout",target:s})}),12e4);s.onerror=s.onload=c,document.head.appendChild(s)}return Promise.all(t)},l.m=e,l.c=n,l.d=function(e,t,r){l.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},l.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},l.t=function(e,t){if(1&t&&(e=l(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(l.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var n in e)l.d(r,n,function(t){return e[t]}.bind(null,n));return r},l.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return l.d(t,"a",t),t},l.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},l.p="",l.oe=function(e){throw console.error(e),e};var c=window["webpackJsonp"]=window["webpackJsonp"]||[],s=c.push.bind(c);c.push=t,c=c.slice();for(var f=0;f<c.length;f++)t(c[f]);var d=s;i.push([0,0]),r()})({0:function(e,t,r){e.exports=r("2f39")},"2f39":function(e,t,r){"use strict";r.r(t);r("5319"),r("f707"),r("7d6e"),r("e54f"),r("62f2"),r("7e6d");var n=r("2b0e"),o=r("1f91"),a=r("9e23"),i=r("b05d");n["a"].use(i["a"],{config:{dark:!0},lang:o["a"],iconSet:a["a"]});var u=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{attrs:{id:"q-app"}},[r("router-view")],1)},l=[],c={name:"App",mounted(){this.$q.platform.within.iframe&&(document.querySelector("body").style.overflow="hidden")}},s=c,f=r("2877"),d=Object(f["a"])(s,u,l,!1,null,null,null),p=d.exports,h=r("8c4f");r("ddb0");const m=[{path:"/",component:()=>Promise.all([r.e(0),r.e(3)]).then(r.bind(null,"713b")),children:[{path:"",component:()=>Promise.all([r.e(0),r.e(2)]).then(r.bind(null,"8b24"))},{path:"test",component:()=>r.e(5).then(r.bind(null,"9502"))}]},{path:"*",component:()=>Promise.all([r.e(0),r.e(4)]).then(r.bind(null,"e51e"))}];var v=m;n["a"].use(h["a"]);var b=function(){const e=new h["a"]({scrollBehavior:()=>({x:0,y:0}),routes:v,mode:"hash",base:""});return e},y=async function(){const e="function"===typeof b?await b({Vue:n["a"]}):b,t={router:e,render:e=>e(p),el:"#q-app"};return{app:t,router:e}},g=r("bc3a"),w=r.n(g);n["a"].prototype.$axios=w.a;const P="";async function O(){const{app:e,router:t}=await y();let r=!1;const o=e=>{r=!0;const n=Object(e)===e?t.resolve(e).route.fullPath:e;window.location.href=n},a=window.location.href.replace(window.location.origin,""),i=[void 0];for(let l=0;!1===r&&l<i.length;l++)if("function"===typeof i[l])try{await i[l]({app:e,router:t,Vue:n["a"],ssrContext:null,redirect:o,urlPath:a,publicPath:P})}catch(u){return u&&u.url?void(window.location.href=u.url):void console.error("[Quasar] boot error:",u)}!0!==r&&new n["a"](e)}O()},"7e6d":function(e,t,r){}});