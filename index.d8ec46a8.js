!function(e,t,r,n,o){var a="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},i="function"==typeof a.parcelRequired7c6&&a.parcelRequired7c6,s=i.cache||{},c="undefined"!=typeof module&&"function"==typeof module.require&&module.require.bind(module);function l(t,r){if(!s[t]){if(!e[t]){var n="function"==typeof a.parcelRequired7c6&&a.parcelRequired7c6;if(!r&&n)return n(t,!0);if(i)return i(t,!0);if(c&&"string"==typeof t)return c(t);var o=new Error("Cannot find module '"+t+"'");throw o.code="MODULE_NOT_FOUND",o}d.resolve=function(r){var n=e[t][1][r];return null!=n?n:r},d.cache={};var u=s[t]=new l.Module(t);e[t][0].call(u.exports,d,u,u.exports,this)}return s[t].exports;function d(e){var t=d.resolve(e);return!1===t?{}:l(t)}}l.isParcelRequire=!0,l.Module=function(e){this.id=e,this.bundle=l,this.exports={}},l.modules=e,l.cache=s,l.parent=i,l.register=function(t,r){e[t]=[function(e,t){t.exports=r},{}]},Object.defineProperty(l,"root",{get:function(){return a.parcelRequired7c6}}),a.parcelRequired7c6=l;for(var u=0;u<t.length;u++)l(t[u]);var d=l(r);"object"==typeof exports&&"undefined"!=typeof module?module.exports=d:"function"==typeof define&&define.amd&&define((function(){return d}))}({"7zcRT":[function(e,t,r){e("./js/loader.js"),e("./js/form.js"),e("./js/modal-registration.js"),e("./js/homeRendering.js"),e("./js/apiServiсe.js"),e("./js/scroll.js"),e("./js/modal-footer.js"),e("./js/popup-modal"),e("./js/theme")},{"./js/loader.js":"2vm7i","./js/form.js":"9svCR","./js/modal-registration.js":"1nJfh","./js/homeRendering.js":"6Uvw0","./js/apiServiсe.js":"7TFaD","./js/scroll.js":"NzJlw","./js/modal-footer.js":"aYyaN","./js/popup-modal":"jtsLp","./js/theme":"2BIky"}],"6Uvw0":[function(e,t,r){var n=e("@parcel/transformer-js/src/esmodule-helpers.js"),o=e("@swc/helpers/lib/_async_to_generator.js"),a=n.interopDefault(o),i=e("@swc/helpers/lib/_sliced_to_array.js"),s=n.interopDefault(i),c=e("regenerator-runtime"),l=n.interopDefault(c),u=e("./apiServiсe"),d=n.interopDefault(u),f=e("./renderCard"),p=e("./getGenreName"),m=new(0,d.default),v=document.querySelector(".card__list"),g=document.querySelector(".header__nav-link"),h=document.querySelector(".header__logo"),j=document.querySelector(".loader__wrapper");function _(e){return y.apply(this,arguments)}function y(){return(y=(0,a.default)(l.default.mark((function e(t){return l.default.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),document.querySelector("#search-form").firstElementChild.value="",m.currentPage=1,v.innerHTML="",e.prev=4,j.classList.remove("hidden"),e.next=8,m.getTrendingFilms();case 8:e.sent.data.results.forEach((function(e){var t=e.title,r=e.name,n=e.poster_path,o=e.id,a=e.vote_average,i=e.genre_ids,s=e.first_air_date,c=e.release_date,l=(0,p.getGenreName)(i);(0,f.renderCard)(o,n,t,r,l,s,c,a)})),j.classList.add("hidden"),e.next=16;break;case 13:e.prev=13,e.t0=e.catch(4),console.log("error");case 16:b();case 17:case"end":return e.stop()}}),e,null,[[4,13]])})))).apply(this,arguments)}function w(){return(w=(0,a.default)(l.default.mark((function e(){return l.default.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return m.currentPage+=1,e.prev=1,e.next=4,m.getTrendingFilms();case 4:e.sent.data.results.forEach((function(e){var t=e.title,r=e.name,n=e.poster_path,o=e.id,a=e.vote_average,i=e.genre_ids,s=e.first_air_date,c=e.release_date,l=(0,p.getGenreName)(i);(0,f.renderCard)(o,n,t,r,l,s,c,a)})),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(1),console.log("error");case 11:b();case 12:case"end":return e.stop()}}),e,null,[[1,8]])})))).apply(this,arguments)}h.addEventListener("click",_),g.addEventListener("click",_),window.addEventListener("load",_);var S=new IntersectionObserver((function(e,t){var r=(0,s.default)(e,1)[0];r.isIntersecting&&(t.unobserve(r.target),function(){w.apply(this,arguments)}())}),{threshold:.5}),b=function(){var e=document.querySelector(".card__item:last-child");e&&S.observe(e)}},{"@swc/helpers/lib/_async_to_generator.js":"9wsRk","@swc/helpers/lib/_sliced_to_array.js":"lhcPt","regenerator-runtime":"3PvxL","./apiServiсe":"7TFaD","./renderCard":"8E5C5","./getGenreName":"8vaK9","@parcel/transformer-js/src/esmodule-helpers.js":"jiucr"}],NzJlw:[function(e,t,r){var n=e("@parcel/transformer-js/src/esmodule-helpers.js");n.defineInteropFlag(r),n.export(r,"onScroll",(function(){return a})),n.export(r,"onToTopBtn",(function(){return i}));var o=document.querySelector(".btn-to-top");function a(){var e=window.pageYOffset,t=document.documentElement.clientHeight;e>t&&o.classList.add("btn-to-top--visible"),e<t&&o.classList.remove("btn-to-top--visible")}function i(){window.pageYOffset>0&&window.scrollTo({top:0,behavior:"smooth"})}window.addEventListener("scroll",a),null==o||o.addEventListener("click",i)},{"@parcel/transformer-js/src/esmodule-helpers.js":"jiucr"}],jtsLp:[function(e,t,r){var n=e("@parcel/transformer-js/src/esmodule-helpers.js"),o=e("@swc/helpers/lib/_async_to_generator.js"),a=n.interopDefault(o),i=e("regenerator-runtime"),s=n.interopDefault(i),c=e("./apiServiсe"),l=n.interopDefault(c),u=e("./renderPopupCard"),d=new(0,l.default);document.querySelector(".section").addEventListener("click",(function(e){var t;if(e.preventDefault(),void 0===(null===(t=e.target.closest(".card__link"))||void 0===t?void 0:t.querySelector("card__poster")))return;(function(e){return m.apply(this,arguments)})(e.target.closest(".card__link").id).then((function(t){var r,n,o=e.target.closest(".card__link").id,a=JSON.parse(localStorage.getItem(f))||[],i=JSON.parse(localStorage.getItem(p))||[];a.find((function(e){return r=e.id==o})),i.find((function(e){return n=e.id==o}));var s="",c="";s=r?"Remove from watched":"Add to watched",c=n?"Remove from queue":"Add to queue",document.addEventListener("click",(function(e){if(e.target.classList.contains("watched-button")&&e.target.getAttribute("data-id")===o){var r;if(a.find((function(e){return r=e.id==o})),r){var n=a.findIndex((function(e){return e.id==o}));return a.splice(n,1),localStorage.setItem(f,JSON.stringify(a)),r=!1,e.target.innerText="Add to watched",void console.log("removed from watched ")}return a.push(t),localStorage.setItem(f,JSON.stringify(a)),r=!0,e.target.innerText="Remove to watched",void console.log("add to watched ")}if(e.target.classList.contains("queque-button")&&e.target.getAttribute("data-id")===o){var s;if(i.find((function(e){return s=e.id==o})),s){var c=i.findIndex((function(e){return e.id==o}));return i.splice(c,1),localStorage.setItem(p,JSON.stringify(i)),s=!1,e.target.innerText="Add to queue",void console.log("removed from queue")}return i.push(t),localStorage.setItem(p,JSON.stringify(i)),s=!0,e.target.innerText="Remove from queue",void console.log("add to queue ")}}));var l=t.title,d=t.name,m=t.poster_path,v=t.id,g=t.vote_average,h=t.vote_count,j=t.popularity,_=t.overview,y=t.genres,w=[];y.forEach((function(e){return w.push(e.name)}));try{setTimeout((function(){(0,u.renderMovieModal)(l,d,m,v,g,h,j,_,w,s,c)}),100)}catch(e){console.log("error")}}))}));var f="Watched:",p="Queque:";function m(){return(m=(0,a.default)(s.default.mark((function e(t){var r;return s.default.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,d.getFilmID(t);case 2:return r=e.sent,e.abrupt("return",r.data);case 4:case"end":return e.stop()}}),e)})))).apply(this,arguments)}var v=document.querySelector(".modal");function g(e){(e.target.classList.contains("popup")||27===e.keyCode||e.target.classList.contains("popup-button__close"))&&(v.classList.remove("popup"),v.innerHTML="")}null==v||v.addEventListener("click",g),document.addEventListener("keydown",g)},{"@swc/helpers/lib/_async_to_generator.js":"9wsRk","regenerator-runtime":"3PvxL","./apiServiсe":"7TFaD","./renderPopupCard":"aZoq3","@parcel/transformer-js/src/esmodule-helpers.js":"jiucr"}],"2BIky":[function(e,t,r){localStorage.theme||(localStorage.theme="light"),document.body.className=localStorage.theme,toggleThemeBtn.onclick=function(){document.body.classList.toggle("dark")};var n=document.querySelectorAll(".changeTheme");function o(e){n.forEach((function(e){e.style.display="block"})),document.querySelector('[data-theme="'.concat(e,'"]')).style.display="none",localStorage.setItem("theme",e)}n.forEach((function(e){e.addEventListener("click",(function(){o(this.dataset.theme),localStorage.setItem("theme",this.dataset.theme)}))}));var a=localStorage.getItem("theme");null===a||"light"===a?o("light"):"dark"===a&&o("dark")},{}]},["7zcRT"],"7zcRT");
//# sourceMappingURL=index.d8ec46a8.js.map
