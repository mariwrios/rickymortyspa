!function(n){var t={};function e(a){if(t[a])return t[a].exports;var r=t[a]={i:a,l:!1,exports:{}};return n[a].call(r.exports,r,r.exports,e),r.l=!0,r.exports}e.m=n,e.c=t,e.d=function(n,t,a){e.o(n,t)||Object.defineProperty(n,t,{enumerable:!0,get:a})},e.r=function(n){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(n,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(n,"__esModule",{value:!0})},e.t=function(n,t){if(1&t&&(n=e(n)),8&t)return n;if(4&t&&"object"==typeof n&&n&&n.__esModule)return n;var a=Object.create(null);if(e.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:n}),2&t&&"string"!=typeof n)for(var r in n)e.d(a,r,function(t){return n[t]}.bind(null,r));return a},e.n=function(n){var t=n&&n.__esModule?function(){return n.default}:function(){return n};return e.d(t,"a",t),t},e.o=function(n,t){return Object.prototype.hasOwnProperty.call(n,t)},e.p="",e(e.s=0)}([function(n,t,e){"use strict";e.r(t);var a=()=>'\n    <div class="Header-main">\n        <div class="Header-nav">\n            <a href="#/about/">\n                About\n            </a>\n        </div>\n    </div>\n    ';const r="https://rickandmortyapi.com/api/character/";var o=()=>location.hash.slice(1).toLocaleLowerCase().split("/")[1]||"/";var c=()=>'\n        <div class="Error404">\n            <h2> Error 404 </h2>\n        </div>\n    ';var i=n=>{if(n.length<=3){return"/"===n?n:"/:id"}return"/${route}"};const s={"/":async()=>{const n=await(async n=>{const t=n?`${r}${n}`:r;try{const n=await fetch(t);return await n.json()}catch(n){console.log("Fetch Error",n)}})();await(async n=>{const t=n?`${r}?page=${n}`:r;try{const n=await fetch(t),e=await n.json();return console.log("pages",e),e}catch(n){console.log("Fetch Error",n)}})();return`\n    <div class="Characters">\n        ${n.results.map(n=>`\n            <article Class="Character-item">\n                <div class="home_card_img" >\n                    <img src="${n.image}" alt="${n.name}">\n                </div>\n                <a class="tittle_name" href="#/${n.id}/">\n                    <h2 >${n.name}</h2>\n                </a>\n            </article>\n        `).join("")}\n           <div class="buttonContainer">\n            <button class="button" ><</button>\n            <button class="button" >></button>\n      </div>\n    </>\n`},"/:id":async()=>{const n=o(),t=await(void 0)(n);return`\n        <div class="Characters-inner">\n            <article class="Characters-card">\n                <img src="${t.image}" alt="${t.name}";\n                <h2>${t.name}</h2>\n            </article>\n            <article class="Characters-card">\n                <h3>Episodes: ${t.episode.length}</h3>\n                <h3>Status: ${t.status}</h3>\n                <h3>Species: ${t.species}</h3>\n                <h3>Gender: ${t.gender}</h3>\n                <h3>Origin: ${t.origin.name}</h3>\n                <h3>Last Location: ${t.location.name}</h3>                         \n            </article>\n        </div>\n    `},"/contact":"Contact"};var l=async()=>{const n=document.getElementById("header"),t=document.getElementById("content");n.innerHTML=await a();let e=o(),r=await i(e),l=s[r]?s[r]:c;t.innerHTML=await l()};window.addEventListener("load",l),window.addEventListener("hashchange",l)}]);