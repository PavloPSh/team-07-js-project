!function(e,t,r,n,o){var a="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},i="function"==typeof a.parcelRequired7c6&&a.parcelRequired7c6,u=i.cache||{},s="undefined"!=typeof module&&"function"==typeof module.require&&module.require.bind(module);function c(t,r){if(!u[t]){if(!e[t]){var n="function"==typeof a.parcelRequired7c6&&a.parcelRequired7c6;if(!r&&n)return n(t,!0);if(i)return i(t,!0);if(s&&"string"==typeof t)return s(t);var o=new Error("Cannot find module '"+t+"'");throw o.code="MODULE_NOT_FOUND",o}l.resolve=function(r){var n=e[t][1][r];return null!=n?n:r},l.cache={};var d=u[t]=new c.Module(t);e[t][0].call(d.exports,l,d,d.exports,this)}return u[t].exports;function l(e){var t=l.resolve(e);return!1===t?{}:c(t)}}c.isParcelRequire=!0,c.Module=function(e){this.id=e,this.bundle=c,this.exports={}},c.modules=e,c.cache=u,c.parent=i,c.register=function(t,r){e[t]=[function(e,t){t.exports=r},{}]},Object.defineProperty(c,"root",{get:function(){return a.parcelRequired7c6}}),a.parcelRequired7c6=c;for(var d=0;d<t.length;d++)c(t[d]);var l=c(r);"object"==typeof exports&&"undefined"!=typeof module?module.exports=l:"function"==typeof define&&define.amd&&define((function(){return l}))}({j8lgt:[function(e,t,r){e("./js/loader.js"),e("./js/form.js"),e("./js/modal-registration.js"),e("./js/apiServiсe.js"),e("./js/modal-footer.js"),e("./js/popup-modal-lib"),e("./js/watched-btn.js"),e("./js/queue-btn.js"),e("./js/auth.js")},{"./js/loader.js":"2vm7i","./js/form.js":"9svCR","./js/modal-registration.js":"1nJfh","./js/apiServiсe.js":"7TFaD","./js/modal-footer.js":"aYyaN","./js/popup-modal-lib":"CQLDx","./js/watched-btn.js":"241I5","./js/queue-btn.js":"5yYtv","./js/auth.js":"6SURF"}],CQLDx:[function(e,t,r){var n=e("@parcel/transformer-js/src/esmodule-helpers.js"),o=e("@swc/helpers/lib/_async_to_generator.js"),a=n.interopDefault(o),i=e("regenerator-runtime"),u=n.interopDefault(i),s=e("./apiServiсe"),c=n.interopDefault(s),d=e("./renderPopupCard"),l=(e("./queue-btn"),e("./watched-btn"),new(0,c.default));document.querySelector(".section").addEventListener("click",(function(e){var t;if(e.preventDefault(),void 0===(null===(t=e.target.closest(".card__link"))||void 0===t?void 0:t.querySelector(".card__poster")))return;(function(e){return m.apply(this,arguments)})(e.target.closest(".card__link").id).then((function(t){var r,n,o=e.target.closest(".card__link").id,a=JSON.parse(localStorage.getItem(f))||[],i=JSON.parse(localStorage.getItem(p))||[];a.find((function(e){return r=e.id==o})),i.find((function(e){return n=e.id==o}));var u="",s="";u=r?"Remove from watched":"Add to watched",s=n?"Remove from queue":"Add to queue",document.addEventListener("click",(function(e){if(e.target.classList.contains("watched-button")&&e.target.getAttribute("data-id")===o){var r;if(a.find((function(e){return r=e.id==o})),r){var n=a.findIndex((function(e){return e.id==o}));return a.splice(n,1),localStorage.setItem(f,JSON.stringify(a)),r=!1,e.target.innerText="Add to watched",void console.log("removed from watched ")}return a.push(t),localStorage.setItem(f,JSON.stringify(a)),r=!0,e.target.innerText="Remove to watched",void console.log("add to watched ")}if(e.target.classList.contains("queque-button")&&e.target.getAttribute("data-id")===o){var u;if(i.find((function(e){return u=e.id==o})),u){var s=i.findIndex((function(e){return e.id==o}));return i.splice(s,1),localStorage.setItem(p,JSON.stringify(i)),u=!1,e.target.innerText="Add to queue",void console.log("removed from queue")}return i.push(t),localStorage.setItem(p,JSON.stringify(i)),u=!0,e.target.innerText="Remove from queue",void console.log("add to queue ")}}));var c=t.title,l=t.name,m=t.poster_path,v=t.id,g=t.vote_average,h=t.vote_count,b=t.popularity,j=t.overview,y=t.genres,q=[];0===y.length?q.push("Unknown"):y.forEach((function(e){return q.push(e.name)}));try{setTimeout((function(){(0,d.renderMovieModal)(c,l,m,v,g,h,b,j,q,u,s)}),100)}catch(e){console.log("error")}}))}));var f="Watched:",p="Queque:";function m(){return(m=(0,a.default)(u.default.mark((function e(t){var r;return u.default.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,l.getFilmID(t);case 2:return r=e.sent,e.abrupt("return",r.data);case 4:case"end":return e.stop()}}),e)})))).apply(this,arguments)}var v=document.querySelector(".modal");function g(e){(e.target.classList.contains("popup")||27===e.keyCode||e.target.classList.contains("popup-button__close"))&&(window.location.reload(),v.classList.remove("popup"),v.innerHTML="")}null==v||v.addEventListener("click",g),document.addEventListener("keydown",g)},{"@swc/helpers/lib/_async_to_generator.js":"9wsRk","regenerator-runtime":"3PvxL","./apiServiсe":"7TFaD","./renderPopupCard":"aZoq3","./queue-btn":"5yYtv","./watched-btn":"241I5","@parcel/transformer-js/src/esmodule-helpers.js":"jiucr"}],"5yYtv":[function(e,t,r){var n=e("@parcel/transformer-js/src/esmodule-helpers.js");n.defineInteropFlag(r),n.export(r,"onQueueBtnClick",(function(){return m})),n.export(r,"renderQueueCard",(function(){return v}));var o=e("notiflix"),a=n.interopDefault(o),i=e("./renderCard"),u=e("./watched-btn"),s=document.querySelector('button[data-action="queue"]'),c=document.querySelector('button[data-action="watched"]'),d=document.querySelector(".card__list"),l=JSON.parse(localStorage.getItem("Queque:")),f=document.querySelector(".clear-btn"),p=document.querySelector(".loader__wrapper");function m(){if(p.classList.remove("hidden"),c.classList.remove("current-btn"),s.classList.add("current-btn"),f.classList.add("clear-btn--visible"),localStorage.setItem("last-active-btn","queueButton"),null===l||0===l.length)return f.classList.remove("clear-btn--visible"),f.classList.add("clear-btn"),(0,u.onEmptyMoviesStorage)(),p.classList.add("hidden"),a.default.Notify.failure("You need to add at least 1 movie.",{timeout:1500,clickToClose:!0});d.innerHTML="",v(),p.classList.add("hidden")}function v(){l.map((function(e){var t=e.genres.map((function(e){return e.name}));(0,i.renderCard)(e.id,e.poster_path,e.title,e.name,t,e.first_air_date,e.release_date,e.vote_average)}))}null==s||s.addEventListener("click",m),null==f||f.addEventListener("click",(function(){s.classList.contains("current-btn")&&(localStorage.removeItem("Queque:"),location.reload())}))},{notiflix:"fQTvO","./renderCard":"8E5C5","./watched-btn":"241I5","@parcel/transformer-js/src/esmodule-helpers.js":"jiucr"}],"241I5":[function(e,t,r){var n=e("@parcel/transformer-js/src/esmodule-helpers.js");n.defineInteropFlag(r),n.export(r,"renderWatchedCard",(function(){return v})),n.export(r,"onEmptyMoviesStorage",(function(){return g}));var o=e("notiflix"),a=n.interopDefault(o),i=e("./renderCard"),u=e("./queue-btn"),s=document.querySelector('button[data-action="watched"]'),c=document.querySelector('button[data-action="queue"]'),d=document.querySelector(".card__list"),l=JSON.parse(localStorage.getItem("Watched:")),f=document.querySelector(".clear-btn"),p=document.querySelector(".loader__wrapper");function m(){if(p.classList.remove("hidden"),s.classList.add("current-btn"),c.classList.remove("current-btn"),f.classList.add("clear-btn--visible"),localStorage.setItem("last-active-btn","watchedButton"),null===l||0===s.length)return f.classList.remove("clear-btn--visible"),f.classList.add("clear-btn"),g(),p.classList.add("hidden"),a.default.Notify.failure("You need to add at least 1 movie.",{timeout:1500,clickToClose:!0});d.innerHTML="",v(),p.classList.add("hidden")}function v(){l.map((function(e){var t=e.genres.map((function(e){return e.name}));(0,i.renderCard)(e.id,e.poster_path,e.title,e.name,t,e.first_air_date,e.release_date,e.vote_average)}))}function g(){d.innerHTML='<li class="card__notification">You don\'t have any movies added</li>'}null==s||s.addEventListener("click",m),null==f||f.addEventListener("click",(function(){s.classList.contains("current-btn")&&(localStorage.removeItem("Watched:"),location.reload())})),function(){if("watchedButton"===localStorage.getItem("last-active-btn"))return m();if("queueButton"===localStorage.getItem("last-active-btn"))return(0,u.onQueueBtnClick)();m()}()},{notiflix:"fQTvO","./renderCard":"8E5C5","./queue-btn":"5yYtv","@parcel/transformer-js/src/esmodule-helpers.js":"jiucr"}]},["j8lgt"],"j8lgt");
//# sourceMappingURL=library.36fad03b.js.map