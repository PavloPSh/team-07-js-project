!function(e,t,r,n,o){var a="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},i="function"==typeof a.parcelRequired7c6&&a.parcelRequired7c6,c=i.cache||{},l="undefined"!=typeof module&&"function"==typeof module.require&&module.require.bind(module);function s(t,r){if(!c[t]){if(!e[t]){var n="function"==typeof a.parcelRequired7c6&&a.parcelRequired7c6;if(!r&&n)return n(t,!0);if(i)return i(t,!0);if(l&&"string"==typeof t)return l(t);var o=new Error("Cannot find module '"+t+"'");throw o.code="MODULE_NOT_FOUND",o}u.resolve=function(r){var n=e[t][1][r];return null!=n?n:r},u.cache={};var d=c[t]=new s.Module(t);e[t][0].call(d.exports,u,d,d.exports,this)}return c[t].exports;function u(e){var t=u.resolve(e);return!1===t?{}:s(t)}}s.isParcelRequire=!0,s.Module=function(e){this.id=e,this.bundle=s,this.exports={}},s.modules=e,s.cache=c,s.parent=i,s.register=function(t,r){e[t]=[function(e,t){t.exports=r},{}]},Object.defineProperty(s,"root",{get:function(){return a.parcelRequired7c6}}),a.parcelRequired7c6=s;for(var d=0;d<t.length;d++)s(t[d]);var u=s(r);"object"==typeof exports&&"undefined"!=typeof module?module.exports=u:"function"==typeof define&&define.amd&&define((function(){return u}))}({"7zcRT":[function(e,t,r){e("./js/loader.js"),e("./js/form.js"),e("./js/homeRendering.js"),e("./js/apiServiсe.js"),e("./js/scroll.js"),e("./js/modal-footer.js"),e("./js/popup-modal"),e("./js/theme")},{"./js/loader.js":"2vm7i","./js/form.js":"9svCR","./js/homeRendering.js":"6Uvw0","./js/apiServiсe.js":"7TFaD","./js/scroll.js":"NzJlw","./js/modal-footer.js":"aYyaN","./js/popup-modal":"jtsLp","./js/theme":"2BIky"}],"6Uvw0":[function(e,t,r){var n=e("@parcel/transformer-js/src/esmodule-helpers.js"),o=e("@swc/helpers/lib/_sliced_to_array.js"),a=n.interopDefault(o),i=e("./apiServiсe"),c=n.interopDefault(i),l=e("./renderCard"),s=e("./getGenreName"),d=new(0,c.default),u=document.querySelector(".card__list"),f=document.querySelector(".header__nav-link");function m(e){e.preventDefault(),document.querySelector("#search-form").firstElementChild.value="",d.currentPage=1,u.innerHTML="",d.getTrendingFilms().then((function(e){e.data.results.forEach((function(e){var t=e.title,r=e.name,n=e.poster_path,o=e.id,a=e.vote_average,i=e.genre_ids,c=e.first_air_date,d=e.release_date,u=(0,s.getGenreName)(i);try{setTimeout((function(){(0,l.renderCard)(o,n,t,r,u,c,d,a)}),100),setTimeout((function(){p()}),500)}catch(e){console.log("error")}}))}))}document.querySelector(".header__logo").addEventListener("click",m),f.addEventListener("click",m),window.addEventListener("load",m);var h=new IntersectionObserver((function(e,t){var r=(0,a.default)(e,1)[0];r.isIntersecting&&(t.unobserve(r.target),d.currentPage+=1,d.getTrendingFilms().then((function(e){e.data.results.forEach((function(e){var t=e.title,r=e.name,n=e.poster_path,o=e.id,a=e.vote_average,i=e.genre_ids,c=e.first_air_date,d=e.release_date,u=(0,s.getGenreName)(i);try{setTimeout((function(){(0,l.renderCard)(o,n,t,r,u,c,d,a)}),500),setTimeout((function(){p()}),500)}catch(e){console.log("error")}}))})),setTimeout((function(){p()}),500))}),{threshold:.5}),p=function(){var e=document.querySelector(".card__item:last-child");e&&h.observe(e)}},{"@swc/helpers/lib/_sliced_to_array.js":"lhcPt","./apiServiсe":"7TFaD","./renderCard":"8E5C5","./getGenreName":"8vaK9","@parcel/transformer-js/src/esmodule-helpers.js":"jiucr"}],"2BIky":[function(e,t,r){localStorage.theme||(localStorage.theme="light"),document.body.className=localStorage.theme,toggleThemeBtn.onclick=function(){document.body.classList.toggle("dark")};var n=document.querySelectorAll(".changeTheme");function o(e){n.forEach((function(e){e.style.display="block"})),document.querySelector('[data-theme="'.concat(e,'"]')).style.display="none",localStorage.setItem("theme",e)}n.forEach((function(e){e.addEventListener("click",(function(){o(this.dataset.theme),localStorage.setItem("theme",this.dataset.theme)}))}));var a=localStorage.getItem("theme");null===a||"light"===a?o("light"):"dark"===a&&o("dark")},{}]},["7zcRT"],"7zcRT");
//# sourceMappingURL=index.7dcf0b88.js.map
