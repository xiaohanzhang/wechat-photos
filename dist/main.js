!function(e){var n={};function t(o){if(n[o])return n[o].exports;var i=n[o]={i:o,l:!1,exports:{}};return e[o].call(i.exports,i,i.exports,t),i.l=!0,i.exports}t.m=e,t.c=n,t.d=function(e,n,o){t.o(e,n)||Object.defineProperty(e,n,{configurable:!1,enumerable:!0,get:o})},t.r=function(e){Object.defineProperty(e,"__esModule",{value:!0})},t.n=function(e){var n=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(n,"a",n),n},t.o=function(e,n){return Object.prototype.hasOwnProperty.call(e,n)},t.p="",t(t.s=0)}([function(e,n){const t=[["slide-show","","slide-hide"],["slide-show-left","","slide-hide-left"],["slide-show-right","","slide-hide-right"],["slide-show-top","","slide-hide-top"]],o=(e,n,t)=>(e.removeClass(),e.addClass(n),new Promise(function(n,o){setTimeout(function(){n(e)},1e3*t)})),i=async e=>{const n=e.shift();if(n)return await n(),i(e)},s=async(e,n,r)=>(await i(n.map(n=>()=>(async(e,n,t,s)=>{const r=e.find("#bg"),a=e.find("#display"),c={background:'url("./upload/'+n+'.jpg") center no-repeat',"background-size":"contain","animation-duration":s+"s"};return r.css(c),a.css(c),o(r,"slide-bg-show",s),await i(t.map((e,n)=>()=>(n===t.length-1&&o(r,"slide-bg-hide",s),o(a,e,s)))),a})(e,n,(()=>t[Math.floor(Math.random()*t.length)])(),r))),s(e,n,r));$(function(){const e=new Audio;e.src="./music/bg.m4a",e.loop="loop";const n=[];for(let e=0;e<9;e++)n[e]=""+(e+1);s($(".container"),n,3);let t=!1;const o=()=>{t?e.pause():e.play(),t=!t};$("#play").click(o),o()})}]);