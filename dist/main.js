!function(e){var t={};function n(o){if(t[o])return t[o].exports;var i=t[o]={i:o,l:!1,exports:{}};return e[o].call(i.exports,i,i.exports,n),i.l=!0,i.exports}n.m=e,n.c=t,n.d=function(e,t,o){n.o(e,t)||Object.defineProperty(e,t,{configurable:!1,enumerable:!0,get:o})},n.r=function(e){Object.defineProperty(e,"__esModule",{value:!0})},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=0)}([function(e,t){const n=[["slide-show","","slide-hide"],["slide-show-left","","slide-hide-left"],["slide-show-right","","slide-hide-right"],["slide-show-top","","slide-hide-top"]],o=(e,t,n)=>(e.removeClass(),e.addClass(t),new Promise(function(t,o){setTimeout(function(){t(e)},1e3*n)})),i=async e=>{const t=e.shift();if(t)return await t(),i(e)},s=async(e,t,r)=>(await i(t.map(t=>()=>(async(e,t,n,s)=>{const r=e.find("#bg"),a=e.find("#display"),l={background:'url("./upload/tulip/'+t+'.jpg") center no-repeat',"background-size":"contain","animation-duration":s+"s"};return r.css(l),a.css(l),o(r,"slide-bg-show",s),await i(n.map((e,t)=>()=>(t===n.length-1&&o(r,"slide-bg-hide",s),o(a,e,s)))),a})(e,t,(()=>n[Math.floor(Math.random()*n.length)])(),r))),s(e,t,r));$(function(){const e=new Audio;e.src="./music/bg.m4a",e.loop="loop";const t=[];for(let e=0;e<31;e++)t[e]=""+(e+1);s($(".container"),t,3);let n=!1;const o=()=>{n?e.pause():e.play(),n=!n};$("#play").click(o),o()})}]);