!function(e){var t={};function n(c){if(t[c])return t[c].exports;var d=t[c]={i:c,l:!1,exports:{}};return e[c].call(d.exports,d,d.exports,n),d.l=!0,d.exports}n.m=e,n.c=t,n.d=function(e,t,c){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:c})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var c=Object.create(null);if(n.r(c),Object.defineProperty(c,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var d in e)n.d(c,d,function(t){return e[t]}.bind(null,d));return c},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=0)}([function(e,t,n){"use strict";function c(){const e=document.createElement("div");e.classList.add("home");const t=document.createElement("img");t.id="logo",t.src="./img/logo.jpg",e.appendChild(t);const n=document.createElement("span");n.classList.add("restaurant-name"),n.textContent="Miracle Bakery",e.appendChild(n);const c=document.createElement("ul");c.classList.add("top-navigation");const d=document.createElement("li");d.id="home1",d.textContent="Home",c.appendChild(d);const a=document.createElement("li");a.id="menu",a.textContent="Menu",c.appendChild(a);const i=document.createElement("li");i.id="about",i.textContent="About",c.appendChild(i);const l=document.createElement("li");l.id="contact",l.textContent="Contact",c.appendChild(l);const r=document.createElement("div");r.id="main";const s=document.createElement("div");s.classList.add("center-text-container");const u=document.createElement("h1");u.classList.add("center-text"),u.textContent="Cupcakes! Pastries! Waffles!",s.appendChild(u),r.appendChild(s),o.appendChild(e),o.appendChild(c),o.appendChild(r)}function d(){!function(){const e=document.createElement("div");e.id="cupcakes",e.classList.add("menu");const t=document.createElement("h3");t.textContent="Cupcakes",e.appendChild(t);const n=document.createElement("div");n.classList.add("cupcakes-items");const c=document.createElement("div");c.textContent="ButterScotch Cupcake",n.appendChild(c);const d=document.createElement("div");d.textContent="Nutella Cupcake",n.appendChild(d);const o=document.createElement("div");o.textContent="Strawberry Cupcake",n.appendChild(o);const i=document.createElement("div");i.textContent="Oreo Cupcake",n.appendChild(i);const l=document.createElement("div");l.textContent="Red Velvet Cupcake",n.appendChild(l);const r=document.createElement("div");r.textContent="Caramel Cupcake",n.appendChild(r),e.appendChild(n),a.appendChild(e)}(),function(){const e=document.createElement("div");e.id="pastries",e.classList.add("menu");const t=document.createElement("h3");t.textContent="Pastries",e.appendChild(t);const n=document.createElement("div");n.classList.add("pastry-items");const c=document.createElement("div");c.textContent="Tiramisu",n.appendChild(c);const d=document.createElement("div");d.textContent="Black Forest",n.appendChild(d);const o=document.createElement("div");o.textContent="Salted Caramel",n.appendChild(o);const i=document.createElement("div");i.textContent="Pine Apple",n.appendChild(i);const l=document.createElement("div");l.textContent="NY Chocolate",n.appendChild(l),e.appendChild(n),a.appendChild(e)}(),function(){const e=document.createElement("div");e.id="waffles",e.classList.add("menu");const t=document.createElement("h3");t.textContent="Waffles",e.appendChild(t);const n=document.createElement("div");n.classList.add("waffles-items");const c=document.createElement("div");c.textContent="White chocolate",n.appendChild(c);const d=document.createElement("div");d.textContent="Blueberry",n.appendChild(d);const o=document.createElement("div");o.textContent="Triple Chocolate",n.appendChild(o);const i=document.createElement("div");i.textContent="Honey",n.appendChild(i),e.appendChild(n),a.appendChild(e)}()}n.r(t),n.d(t,"content",(function(){return o})),n.d(t,"main",(function(){return a}));const o=document.getElementById("content");c();const a=document.getElementById("main");document.querySelector(".home").addEventListener("click",()=>{a.innerHTML="";const e=document.createElement("div");e.classList.add("center-text-container");const t=document.createElement("h1");t.classList.add("center-text"),t.textContent="Cupcakes! Pastries! Waffles!",e.appendChild(t),a.appendChild(e)});document.querySelectorAll(".top-navigation li").forEach(e=>e.addEventListener("click",e=>{switch(a.innerHTML="",e.target.id){case"home":c();break;case"menu":d();break;case"about":!function(){const e=document.createElement("div");e.id="about-info";const t=document.createElement("p");t.textContent="Miracle Bakery provides a scrumptious assortments of delicasies that would definitely satisfy your sweet tooth. Do visit us and try them for yourself. Utmost care is taken to ensure health and hygiene.",e.appendChild(t),a.appendChild(e)}();break;case"contact":!function(){const e=document.createElement("div");e.id="contact-info";const t=document.createElement("h2");t.textContent="Contact Info";const n=document.createElement("ul"),c=document.createElement("li");c.textContent="Email ID: enquiry@miracle.com",n.appendChild(c);const d=document.createElement("li");d.textContent="Contact Number: +91 9936662970",n.appendChild(d),e.appendChild(t),e.appendChild(n),a.appendChild(e)}()}}))}]);