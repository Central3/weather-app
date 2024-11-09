(()=>{var n={208:(n,e,t)=>{"use strict";t.d(e,{A:()=>s});var o=t(354),r=t.n(o),i=t(314),a=t.n(i)()(r());a.push([n.id,'/* CSS Reset */\n/*\n  1. Use a more-intuitive box-sizing model.\n*/\n*,\n*::before,\n*::after {\n  box-sizing: border-box;\n}\n\n/*\n  2. Remove default margin\n*/\n* {\n  margin: 0;\n  padding: 0;\n}\n\n/*\n  Typographic tweaks!\n  3. Add accessible line-height\n*/\nbody {\n  line-height: 1.5;\n  -webkit-font-smoothing: antialiased;\n}\n\n/*\n  5. Improve media defaults\n*/\nimg,\npicture,\nvideo,\ncanvas,\nsvg {\n  display: block;\n  max-width: 100%;\n}\n\n/*\n  6. Remove built-in form typography styles\n*/\ninput,\nbutton,\ntextarea,\nselect {\n  font: inherit;\n}\n\n/*\n  7. Avoid text overflows\n*/\np,\nh1,\nh2,\nh3,\nh4,\nh5,\nh6 {\n  overflow-wrap: break-word;\n}\n\n/* fonts */\n.poppins-extralight {\n  font-family: "Poppins", sans-serif;\n  font-weight: 200;\n  font-style: normal;\n}\n\n.poppins-regular {\n  font-family: "Poppins", sans-serif;\n  font-weight: 400;\n  font-style: normal;\n}\n\n.poppins-medium {\n  font-family: "Poppins", sans-serif;\n  font-weight: 500;\n  font-style: normal;\n}\n\n.poppins-semibold {\n  font-family: "Poppins", sans-serif;\n  font-weight: 600;\n  font-style: normal;\n}\n\n.poppins-bold {\n  font-family: "Poppins", sans-serif;\n  font-weight: 700;\n  font-style: normal;\n}\n\n.poppins-extrabold {\n  font-family: "Poppins", sans-serif;\n  font-weight: 800;\n  font-style: normal;\n}\n\n.poppins-black {\n  font-family: "Poppins", sans-serif;\n  font-weight: 900;\n  font-style: normal;\n}\n\n.poppins-regular-italic {\n  font-family: "Poppins", sans-serif;\n  font-weight: 400;\n  font-style: italic;\n}\n\n/* Custom properties */\n:root {\n  --nav-color: #3e2248ff;\n  --english-violet: #5b3f64ff;\n  --dark-purple-2: #3e2248ff;\n  --chinese-violet: #775c7fff;\n  --mountbatten-pink: #93799aff;\n  --lilac: #b096b6ff;\n  --thistle: #ccb3d1ff;\n}\n\n/* Navbar */\n.navigation-bar {\n  background-color: var(--nav-color);\n  padding: 12px 16px;\n}\n\n.search-box {\n  border-radius: 12px;\n  border: 1px solid #ffffff1f;\n  padding: 4px 16px;\n  background-color: var(--english-violet);\n  width: 30%;\n  display: inline-block;\n}\n\n.search-box:focus-within {\n  background-color: #ffffff0f;\n  border: 1px solid #ffffff5f;\n}\n\n.search-form {\n  width: 100%;\n  display: flex;\n  align-items: center;\n}\n\n#location {\n  outline: none;\n  background-color: inherit;\n  border: none;\n  color: #fff;\n  flex: 1;\n  width: 100%;\n}\n\n.btn {\n  cursor: pointer;\n}\n\n#search-btn {\n  border: none;\n  color: rgba(255, 255, 255, 1);\n}\n\n.toggle-unit {\n  border-radius: 12px;\n  border: 1px solid #ffffff1f;\n  padding: 4px 16px;\n  background-color: var(--english-violet);\n  color: #fff;\n  display: inline;\n}\n\n.toggle-unit * {\n  margin: 0.5rem;\n}\n\n.toggle-unit:hover {\n  background-color: #ffffff0f;\n  border: 1px solid #ffffff5f;\n}\n\n.select-unit {\n  font-weight: 700;\n  text-decoration: underline;\n}\n\n/* Main section */\nmain {\n  background: linear-gradient(\n    180deg,\n    hsla(284, 36%, 21%, 1) 0%,\n    hsla(285, 23%, 32%, 1) 23%,\n    hsla(286, 16%, 43%, 1) 72%\n  );\n  height: 95vh;\n  padding: 12px 16px;\n}\n\n.card {\n  background-color: var(--thistle);\n  border-radius: 12px;\n  padding: 12px 16px;\n}\n\n.temp-data {\n  font-size: 4rem;\n}\n\n.location-icon {\n  font-size: 16px;\n}\n\n.location-container {\n  display: flex;\n  align-items: center;\n}\n\n.conditions-data {\n  font-size: 1.2rem;\n}\n\n.main-data-container {\n  display: flex;\n  align-items: center;\n  gap: 1rem;\n  flex-wrap: wrap;\n}\n\n.misc-data {\n  display: flex;\n  gap: 8px;\n  justify-content: space-between;\n  margin-top: 16px;\n  flex-wrap: wrap;\n}\n\n.misc-data > div {\n  display: flex;\n  flex-direction: column;\n}\n\n.data-heading {\n  font-weight: 700;\n}\n\n.forecast-heading {\n  margin: 16px 0 4px;\n  color: #fff;\n}\n\n.forecast-container {\n  display: flex;\n  width: 100%;\n  gap: 4px;\n  overflow-x: auto;\n}\n\n.forecast-card {\n  background-color: var(--thistle);\n  border-radius: 12px;\n  padding: 12px 16px;\n  flex-shrink: 0;\n  margin-bottom: 8px;\n  flex-basis: 150px;\n}\n\n.forecast-data-container {\n  display: flex;\n  align-items: center;\n  gap: 1rem;\n}\n',"",{version:3,sources:["webpack://./src/style.css"],names:[],mappings:"AAAA,cAAc;AACd;;CAEC;AACD;;;EAGE,sBAAsB;AACxB;;AAEA;;CAEC;AACD;EACE,SAAS;EACT,UAAU;AACZ;;AAEA;;;CAGC;AACD;EACE,gBAAgB;EAChB,mCAAmC;AACrC;;AAEA;;CAEC;AACD;;;;;EAKE,cAAc;EACd,eAAe;AACjB;;AAEA;;CAEC;AACD;;;;EAIE,aAAa;AACf;;AAEA;;CAEC;AACD;;;;;;;EAOE,yBAAyB;AAC3B;;AAEA,UAAU;AACV;EACE,kCAAkC;EAClC,gBAAgB;EAChB,kBAAkB;AACpB;;AAEA;EACE,kCAAkC;EAClC,gBAAgB;EAChB,kBAAkB;AACpB;;AAEA;EACE,kCAAkC;EAClC,gBAAgB;EAChB,kBAAkB;AACpB;;AAEA;EACE,kCAAkC;EAClC,gBAAgB;EAChB,kBAAkB;AACpB;;AAEA;EACE,kCAAkC;EAClC,gBAAgB;EAChB,kBAAkB;AACpB;;AAEA;EACE,kCAAkC;EAClC,gBAAgB;EAChB,kBAAkB;AACpB;;AAEA;EACE,kCAAkC;EAClC,gBAAgB;EAChB,kBAAkB;AACpB;;AAEA;EACE,kCAAkC;EAClC,gBAAgB;EAChB,kBAAkB;AACpB;;AAEA,sBAAsB;AACtB;EACE,sBAAsB;EACtB,2BAA2B;EAC3B,0BAA0B;EAC1B,2BAA2B;EAC3B,6BAA6B;EAC7B,kBAAkB;EAClB,oBAAoB;AACtB;;AAEA,WAAW;AACX;EACE,kCAAkC;EAClC,kBAAkB;AACpB;;AAEA;EACE,mBAAmB;EACnB,2BAA2B;EAC3B,iBAAiB;EACjB,uCAAuC;EACvC,UAAU;EACV,qBAAqB;AACvB;;AAEA;EACE,2BAA2B;EAC3B,2BAA2B;AAC7B;;AAEA;EACE,WAAW;EACX,aAAa;EACb,mBAAmB;AACrB;;AAEA;EACE,aAAa;EACb,yBAAyB;EACzB,YAAY;EACZ,WAAW;EACX,OAAO;EACP,WAAW;AACb;;AAEA;EACE,eAAe;AACjB;;AAEA;EACE,YAAY;EACZ,6BAA6B;AAC/B;;AAEA;EACE,mBAAmB;EACnB,2BAA2B;EAC3B,iBAAiB;EACjB,uCAAuC;EACvC,WAAW;EACX,eAAe;AACjB;;AAEA;EACE,cAAc;AAChB;;AAEA;EACE,2BAA2B;EAC3B,2BAA2B;AAC7B;;AAEA;EACE,gBAAgB;EAChB,0BAA0B;AAC5B;;AAEA,iBAAiB;AACjB;EACE;;;;;GAKC;EACD,YAAY;EACZ,kBAAkB;AACpB;;AAEA;EACE,gCAAgC;EAChC,mBAAmB;EACnB,kBAAkB;AACpB;;AAEA;EACE,eAAe;AACjB;;AAEA;EACE,eAAe;AACjB;;AAEA;EACE,aAAa;EACb,mBAAmB;AACrB;;AAEA;EACE,iBAAiB;AACnB;;AAEA;EACE,aAAa;EACb,mBAAmB;EACnB,SAAS;EACT,eAAe;AACjB;;AAEA;EACE,aAAa;EACb,QAAQ;EACR,8BAA8B;EAC9B,gBAAgB;EAChB,eAAe;AACjB;;AAEA;EACE,aAAa;EACb,sBAAsB;AACxB;;AAEA;EACE,gBAAgB;AAClB;;AAEA;EACE,kBAAkB;EAClB,WAAW;AACb;;AAEA;EACE,aAAa;EACb,WAAW;EACX,QAAQ;EACR,gBAAgB;AAClB;;AAEA;EACE,gCAAgC;EAChC,mBAAmB;EACnB,kBAAkB;EAClB,cAAc;EACd,kBAAkB;EAClB,iBAAiB;AACnB;;AAEA;EACE,aAAa;EACb,mBAAmB;EACnB,SAAS;AACX",sourcesContent:['/* CSS Reset */\n/*\n  1. Use a more-intuitive box-sizing model.\n*/\n*,\n*::before,\n*::after {\n  box-sizing: border-box;\n}\n\n/*\n  2. Remove default margin\n*/\n* {\n  margin: 0;\n  padding: 0;\n}\n\n/*\n  Typographic tweaks!\n  3. Add accessible line-height\n*/\nbody {\n  line-height: 1.5;\n  -webkit-font-smoothing: antialiased;\n}\n\n/*\n  5. Improve media defaults\n*/\nimg,\npicture,\nvideo,\ncanvas,\nsvg {\n  display: block;\n  max-width: 100%;\n}\n\n/*\n  6. Remove built-in form typography styles\n*/\ninput,\nbutton,\ntextarea,\nselect {\n  font: inherit;\n}\n\n/*\n  7. Avoid text overflows\n*/\np,\nh1,\nh2,\nh3,\nh4,\nh5,\nh6 {\n  overflow-wrap: break-word;\n}\n\n/* fonts */\n.poppins-extralight {\n  font-family: "Poppins", sans-serif;\n  font-weight: 200;\n  font-style: normal;\n}\n\n.poppins-regular {\n  font-family: "Poppins", sans-serif;\n  font-weight: 400;\n  font-style: normal;\n}\n\n.poppins-medium {\n  font-family: "Poppins", sans-serif;\n  font-weight: 500;\n  font-style: normal;\n}\n\n.poppins-semibold {\n  font-family: "Poppins", sans-serif;\n  font-weight: 600;\n  font-style: normal;\n}\n\n.poppins-bold {\n  font-family: "Poppins", sans-serif;\n  font-weight: 700;\n  font-style: normal;\n}\n\n.poppins-extrabold {\n  font-family: "Poppins", sans-serif;\n  font-weight: 800;\n  font-style: normal;\n}\n\n.poppins-black {\n  font-family: "Poppins", sans-serif;\n  font-weight: 900;\n  font-style: normal;\n}\n\n.poppins-regular-italic {\n  font-family: "Poppins", sans-serif;\n  font-weight: 400;\n  font-style: italic;\n}\n\n/* Custom properties */\n:root {\n  --nav-color: #3e2248ff;\n  --english-violet: #5b3f64ff;\n  --dark-purple-2: #3e2248ff;\n  --chinese-violet: #775c7fff;\n  --mountbatten-pink: #93799aff;\n  --lilac: #b096b6ff;\n  --thistle: #ccb3d1ff;\n}\n\n/* Navbar */\n.navigation-bar {\n  background-color: var(--nav-color);\n  padding: 12px 16px;\n}\n\n.search-box {\n  border-radius: 12px;\n  border: 1px solid #ffffff1f;\n  padding: 4px 16px;\n  background-color: var(--english-violet);\n  width: 30%;\n  display: inline-block;\n}\n\n.search-box:focus-within {\n  background-color: #ffffff0f;\n  border: 1px solid #ffffff5f;\n}\n\n.search-form {\n  width: 100%;\n  display: flex;\n  align-items: center;\n}\n\n#location {\n  outline: none;\n  background-color: inherit;\n  border: none;\n  color: #fff;\n  flex: 1;\n  width: 100%;\n}\n\n.btn {\n  cursor: pointer;\n}\n\n#search-btn {\n  border: none;\n  color: rgba(255, 255, 255, 1);\n}\n\n.toggle-unit {\n  border-radius: 12px;\n  border: 1px solid #ffffff1f;\n  padding: 4px 16px;\n  background-color: var(--english-violet);\n  color: #fff;\n  display: inline;\n}\n\n.toggle-unit * {\n  margin: 0.5rem;\n}\n\n.toggle-unit:hover {\n  background-color: #ffffff0f;\n  border: 1px solid #ffffff5f;\n}\n\n.select-unit {\n  font-weight: 700;\n  text-decoration: underline;\n}\n\n/* Main section */\nmain {\n  background: linear-gradient(\n    180deg,\n    hsla(284, 36%, 21%, 1) 0%,\n    hsla(285, 23%, 32%, 1) 23%,\n    hsla(286, 16%, 43%, 1) 72%\n  );\n  height: 95vh;\n  padding: 12px 16px;\n}\n\n.card {\n  background-color: var(--thistle);\n  border-radius: 12px;\n  padding: 12px 16px;\n}\n\n.temp-data {\n  font-size: 4rem;\n}\n\n.location-icon {\n  font-size: 16px;\n}\n\n.location-container {\n  display: flex;\n  align-items: center;\n}\n\n.conditions-data {\n  font-size: 1.2rem;\n}\n\n.main-data-container {\n  display: flex;\n  align-items: center;\n  gap: 1rem;\n  flex-wrap: wrap;\n}\n\n.misc-data {\n  display: flex;\n  gap: 8px;\n  justify-content: space-between;\n  margin-top: 16px;\n  flex-wrap: wrap;\n}\n\n.misc-data > div {\n  display: flex;\n  flex-direction: column;\n}\n\n.data-heading {\n  font-weight: 700;\n}\n\n.forecast-heading {\n  margin: 16px 0 4px;\n  color: #fff;\n}\n\n.forecast-container {\n  display: flex;\n  width: 100%;\n  gap: 4px;\n  overflow-x: auto;\n}\n\n.forecast-card {\n  background-color: var(--thistle);\n  border-radius: 12px;\n  padding: 12px 16px;\n  flex-shrink: 0;\n  margin-bottom: 8px;\n  flex-basis: 150px;\n}\n\n.forecast-data-container {\n  display: flex;\n  align-items: center;\n  gap: 1rem;\n}\n'],sourceRoot:""}]);const s=a},314:n=>{"use strict";n.exports=function(n){var e=[];return e.toString=function(){return this.map((function(e){var t="",o=void 0!==e[5];return e[4]&&(t+="@supports (".concat(e[4],") {")),e[2]&&(t+="@media ".concat(e[2]," {")),o&&(t+="@layer".concat(e[5].length>0?" ".concat(e[5]):""," {")),t+=n(e),o&&(t+="}"),e[2]&&(t+="}"),e[4]&&(t+="}"),t})).join("")},e.i=function(n,t,o,r,i){"string"==typeof n&&(n=[[null,n,void 0]]);var a={};if(o)for(var s=0;s<this.length;s++){var A=this[s][0];null!=A&&(a[A]=!0)}for(var c=0;c<n.length;c++){var p=[].concat(n[c]);o&&a[p[0]]||(void 0!==i&&(void 0===p[5]||(p[1]="@layer".concat(p[5].length>0?" ".concat(p[5]):""," {").concat(p[1],"}")),p[5]=i),t&&(p[2]?(p[1]="@media ".concat(p[2]," {").concat(p[1],"}"),p[2]=t):p[2]=t),r&&(p[4]?(p[1]="@supports (".concat(p[4],") {").concat(p[1],"}"),p[4]=r):p[4]="".concat(r)),e.push(p))}},e}},354:n=>{"use strict";n.exports=function(n){var e=n[1],t=n[3];if(!t)return e;if("function"==typeof btoa){var o=btoa(unescape(encodeURIComponent(JSON.stringify(t)))),r="sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(o),i="/*# ".concat(r," */");return[e].concat([i]).join("\n")}return[e].join("\n")}},72:n=>{"use strict";var e=[];function t(n){for(var t=-1,o=0;o<e.length;o++)if(e[o].identifier===n){t=o;break}return t}function o(n,o){for(var i={},a=[],s=0;s<n.length;s++){var A=n[s],c=o.base?A[0]+o.base:A[0],p=i[c]||0,l="".concat(c," ").concat(p);i[c]=p+1;var d=t(l),f={css:A[1],media:A[2],sourceMap:A[3],supports:A[4],layer:A[5]};if(-1!==d)e[d].references++,e[d].updater(f);else{var u=r(f,o);o.byIndex=s,e.splice(s,0,{identifier:l,updater:u,references:1})}a.push(l)}return a}function r(n,e){var t=e.domAPI(e);return t.update(n),function(e){if(e){if(e.css===n.css&&e.media===n.media&&e.sourceMap===n.sourceMap&&e.supports===n.supports&&e.layer===n.layer)return;t.update(n=e)}else t.remove()}}n.exports=function(n,r){var i=o(n=n||[],r=r||{});return function(n){n=n||[];for(var a=0;a<i.length;a++){var s=t(i[a]);e[s].references--}for(var A=o(n,r),c=0;c<i.length;c++){var p=t(i[c]);0===e[p].references&&(e[p].updater(),e.splice(p,1))}i=A}}},659:n=>{"use strict";var e={};n.exports=function(n,t){var o=function(n){if(void 0===e[n]){var t=document.querySelector(n);if(window.HTMLIFrameElement&&t instanceof window.HTMLIFrameElement)try{t=t.contentDocument.head}catch(n){t=null}e[n]=t}return e[n]}(n);if(!o)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");o.appendChild(t)}},540:n=>{"use strict";n.exports=function(n){var e=document.createElement("style");return n.setAttributes(e,n.attributes),n.insert(e,n.options),e}},56:(n,e,t)=>{"use strict";n.exports=function(n){var e=t.nc;e&&n.setAttribute("nonce",e)}},206:n=>{"use strict";n.exports=function(n){if("undefined"==typeof document)return{update:function(){},remove:function(){}};var e=n.insertStyleElement(n);return{update:function(t){!function(n,e,t){var o="";t.supports&&(o+="@supports (".concat(t.supports,") {")),t.media&&(o+="@media ".concat(t.media," {"));var r=void 0!==t.layer;r&&(o+="@layer".concat(t.layer.length>0?" ".concat(t.layer):""," {")),o+=t.css,r&&(o+="}"),t.media&&(o+="}"),t.supports&&(o+="}");var i=t.sourceMap;i&&"undefined"!=typeof btoa&&(o+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(i))))," */")),e.styleTagTransform(o,n,e.options)}(e,n,t)},remove:function(){!function(n){if(null===n.parentNode)return!1;n.parentNode.removeChild(n)}(e)}}}},113:n=>{"use strict";n.exports=function(n,e){if(e.styleSheet)e.styleSheet.cssText=n;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(n))}}},207:(n,e,t)=>{var o={"./clear-day.png":327,"./clear-night.png":107,"./cloudy.png":825,"./fog.png":809,"./hail.png":639,"./partly-cloudy-day.png":55,"./partly-cloudy-night.png":675,"./rain-snow-showers-day.png":484,"./rain-snow-showers-night.png":992,"./rain-snow.png":451,"./rain.png":167,"./showers-day.png":657,"./showers-night.png":557,"./sleet.png":676,"./snow-showers-day.png":543,"./snow-showers-night.png":83,"./snow.png":184,"./thunder-rain.png":480,"./thunder-showers-day.png":784,"./thunder-showers-night.png":612,"./thunder.png":831,"./wind.png":319};function r(n){var e=i(n);return t(e)}function i(n){if(!t.o(o,n)){var e=new Error("Cannot find module '"+n+"'");throw e.code="MODULE_NOT_FOUND",e}return o[n]}r.keys=function(){return Object.keys(o)},r.resolve=i,n.exports=r,r.id=207},327:(n,e,t)=>{"use strict";n.exports=t.p+"49a92278086475c7c840.png"},107:(n,e,t)=>{"use strict";n.exports=t.p+"d5b481d65d6728015aa7.png"},825:(n,e,t)=>{"use strict";n.exports=t.p+"ff85b2e81d3543451d70.png"},809:(n,e,t)=>{"use strict";n.exports=t.p+"bec51c6b905e71a69c73.png"},639:(n,e,t)=>{"use strict";n.exports=t.p+"e5a324637505df18d2e5.png"},55:(n,e,t)=>{"use strict";n.exports=t.p+"9ccf1783955d7c47bce4.png"},675:(n,e,t)=>{"use strict";n.exports=t.p+"e82491d914f1b4e751e7.png"},484:(n,e,t)=>{"use strict";n.exports=t.p+"4e3195e20db723b75b2f.png"},992:(n,e,t)=>{"use strict";n.exports=t.p+"c2788e154501ed6e195a.png"},451:(n,e,t)=>{"use strict";n.exports=t.p+"560fa082b9506b2826e8.png"},167:(n,e,t)=>{"use strict";n.exports=t.p+"89c8d14229f87a236fe0.png"},657:(n,e,t)=>{"use strict";n.exports=t.p+"302ae48c90c390866931.png"},557:(n,e,t)=>{"use strict";n.exports=t.p+"fbefbc64a4c9b84edb6a.png"},676:(n,e,t)=>{"use strict";n.exports=t.p+"0335ffe923ac8081fcd9.png"},543:(n,e,t)=>{"use strict";n.exports=t.p+"653aae7993df59bc9edf.png"},83:(n,e,t)=>{"use strict";n.exports=t.p+"992f3427910628059ef4.png"},184:(n,e,t)=>{"use strict";n.exports=t.p+"f72b71c0da5cb78e0844.png"},480:(n,e,t)=>{"use strict";n.exports=t.p+"f216f30e368ba0b6eef0.png"},784:(n,e,t)=>{"use strict";n.exports=t.p+"08dc25396dd350cafbce.png"},612:(n,e,t)=>{"use strict";n.exports=t.p+"b94c0677a77e0021caf4.png"},831:(n,e,t)=>{"use strict";n.exports=t.p+"68c58b5ee4603ed53a41.png"},319:(n,e,t)=>{"use strict";n.exports=t.p+"7689f6c733214fb7a9f8.png"}},e={};function t(o){var r=e[o];if(void 0!==r)return r.exports;var i=e[o]={id:o,exports:{}};return n[o](i,i.exports,t),i.exports}t.n=n=>{var e=n&&n.__esModule?()=>n.default:()=>n;return t.d(e,{a:e}),e},t.d=(n,e)=>{for(var o in e)t.o(e,o)&&!t.o(n,o)&&Object.defineProperty(n,o,{enumerable:!0,get:e[o]})},t.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(n){if("object"==typeof window)return window}}(),t.o=(n,e)=>Object.prototype.hasOwnProperty.call(n,e),(()=>{var n;t.g.importScripts&&(n=t.g.location+"");var e=t.g.document;if(!n&&e&&(e.currentScript&&"SCRIPT"===e.currentScript.tagName.toUpperCase()&&(n=e.currentScript.src),!n)){var o=e.getElementsByTagName("script");if(o.length)for(var r=o.length-1;r>-1&&(!n||!/^http(s?):/.test(n));)n=o[r--].src}if(!n)throw new Error("Automatic publicPath is not supported in this browser");n=n.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),t.p=n})(),t.nc=void 0,(()=>{"use strict";function n(n,e={},t=""){const o=document.createElement(n);return Object.entries(e).forEach((n=>{o.setAttribute(n[0],n[1])})),t&&(o.textContent=t),o}function e(n,...e){e.forEach((e=>{n.appendChild(e)}))}const o=function(n){const e={};return n.keys().map((t=>{e[t.replace("./","")]=n(t)})),e}(t(207));const r=document.querySelector("main");async function i(t,i){if(""===t||void 0===t)return;const a=await async function(n,e){const t=`https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${n}?key=NQKN5AVWBNRCTF8RZJK8UMLCS&unitGroup=${e?"metric":"us"}`;try{const n=await fetch(t,{mode:"cors"});if(!n.ok)switch(n.status){case 400:throw new Error("Format of the API is incorrect.");case 401:throw new Error("There is a problem with the API key.");case 404:throw new Error("The request cannot be matched to any valid API request endpoint structure.");case 429:throw new Error("Too many requests.");case 500:throw new Error("A general error has occurred processing the request.");default:throw new Error(`Response status: ${n.status}`)}return await n.json()}catch(n){console.error(n)}}(t,i),s=function(n){if(!n)return;const{resolvedAddress:e="Unknown location",description:t="No description available",currentConditions:{conditions:o="N/A",feelslike:r="N/A",humidity:i="N/A",pressure:a="N/A",temp:s="N/A",visibility:A="N/A",windspeed:c="N/A",dew:p="N/A",icon:l="N/A"}}=n;return{resolvedAddress:e,description:t,conditions:o,feelslike:r,humidity:i,pressure:a,temp:s,visibility:A,windspeed:c,dew:p,icon:l}}(a);s&&(r.textContent="",function(t,r,i){const a=document.createDocumentFragment(),s=n("div",{class:"weather-data card"}),A=n("div",{class:"main-data-container"}),c=n("div"),p=n("div"),l=n("div"),d=n("img",{class:"weather-icon",src:o[`${r.icon}.png`]}),f=n("p",{class:"temp-data"},`${Math.round(r.temp)}${i?"°C":"°F"}`),u=n("p",{class:"conditions-data poppins-bold"},r.conditions),g=n("p",{class:"feels-like-data"},`Feels Like ${Math.round(r.feelslike)}${i?"°C":"°F"}`),C=n("span",{class:"material-icons location-icon"},"location_on"),h=n("div",{class:"location-container"}),m=document.createTextNode(r.resolvedAddress),E=document.createTextNode(r.description),B=n("div",{class:"misc-data"}),b=n("div"),v=n("span",{class:"data-heading"},"Wind"),x=document.createTextNode(`${r.windspeed} ${i?"km/h":"mph"}`),y=n("div"),w=n("span",{class:"data-heading"},"Humidity"),k=document.createTextNode(`${r.humidity}%`),S=n("div"),N=n("span",{class:"data-heading"},"Visibility"),T=document.createTextNode(`${r.visibility} ${i?"km":"mi."}`),P=n("div"),j=n("span",{class:"data-heading"},"Pressure"),$=document.createTextNode(`${r.pressure} mb`),U=n("div"),D=n("span",{class:"data-heading"},"Dew Point"),M=document.createTextNode(`${r.dew}°`);e(h,C,m),l.appendChild(d),c.appendChild(f),e(p,u,g),e(A,l,c,p),e(b,v,x),e(y,w,k),e(S,N,T),e(P,j,$),e(U,D,M),e(B,b,y,S,P,U),e(a,h,A,E,B),s.appendChild(a),t.appendChild(s)}(r,s,i),function(t,r){const i=n("p",{class:"forecast-heading poppins-bold"},"10 day forecast"),a=n("div",{class:"forecast-container"});r.forEach((t=>{a.appendChild(function(t){const{datetime:r,conditions:i,feelslike:a,temp:s,icon:A}=t,c=function(n){const e=new Date(n),t=new Intl.DateTimeFormat("en-US",{weekday:"short"}),o=new Intl.DateTimeFormat("en-US",{day:"numeric"});return`${t.format(e)} ${o.format(e)}`}(r),p=document.createDocumentFragment(),l=n("div",{class:"forecast-card"}),d=n("p",{},c),f=n("div",{class:"forecast-data-container"}),u=n("div"),g=n("img",{class:"weather-icon",src:o[`${A}.png`]}),C=n("div"),h=n("p",{class:"poppins-bold"},`${Math.round(s)}°`),m=n("p",{},`${Math.round(a)}°`);return u.appendChild(g),e(C,h,m),e(f,u,C),e(p,d,f),l.appendChild(p),l}(t))})),e(t,i,a)}(r,a.days.slice(0,10)))}const a=document.querySelector(".search-form"),s=document.querySelector("#search-btn"),A=document.querySelector("#celsius-unit"),c=document.querySelector(".toggle-unit"),p=document.querySelector("#celsius-unit"),l=document.querySelector("#fahrenheit-unit");var d=t(72),f=t.n(d),u=t(206),g=t.n(u),C=t(659),h=t.n(C),m=t(56),E=t.n(m),B=t(540),b=t.n(B),v=t(113),x=t.n(v),y=t(208),w={};w.styleTagTransform=x(),w.setAttributes=E(),w.insert=h().bind(null,"head"),w.domAPI=g(),w.insertStyleElement=b(),f()(y.A,w),y.A&&y.A.locals&&y.A.locals,a.addEventListener("submit",(function(n){n.preventDefault(),i(a.querySelector("#location").value,A.classList.contains("select-unit"))})),s.addEventListener("click",(()=>{const n=new CustomEvent("submit");a.dispatchEvent(n)})),c.addEventListener("click",(()=>{const n=document.querySelector("#location").value,e=p.classList.toggle("select-unit");l.classList.toggle("select-unit",!e),i(n,e)}))})()})();
//# sourceMappingURL=bundle.js.map