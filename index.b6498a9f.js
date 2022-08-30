!function(e,t,r,n,a){var i="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},o="function"==typeof i.parcelRequired7c6&&i.parcelRequired7c6,u=o.cache||{},s="undefined"!=typeof module&&"function"==typeof module.require&&module.require.bind(module);function c(t,r){if(!u[t]){if(!e[t]){var n="function"==typeof i.parcelRequired7c6&&i.parcelRequired7c6;if(!r&&n)return n(t,!0);if(o)return o(t,!0);if(s&&"string"==typeof t)return s(t);var a=new Error("Cannot find module '"+t+"'");throw a.code="MODULE_NOT_FOUND",a}f.resolve=function(r){var n=e[t][1][r];return null!=n?n:r},f.cache={};var l=u[t]=new c.Module(t);e[t][0].call(l.exports,f,l,l.exports,this)}return u[t].exports;function f(e){var t=f.resolve(e);return!1===t?{}:c(t)}}c.isParcelRequire=!0,c.Module=function(e){this.id=e,this.bundle=c,this.exports={}},c.modules=e,c.cache=u,c.parent=o,c.register=function(t,r){e[t]=[function(e,t){t.exports=r},{}]},Object.defineProperty(c,"root",{get:function(){return i.parcelRequired7c6}}),i.parcelRequired7c6=c;for(var l=0;l<t.length;l++)c(t[l]);var f=c(r);"object"==typeof exports&&"undefined"!=typeof module?module.exports=f:"function"==typeof define&&define.amd&&define((function(){return f}))}({"7zcRT":[function(e,t,r){e("./js/auth.js"),e("./js/loader.js"),e("./js/form.js"),e("./js/modal-registration.js"),e("./js/homeRendering.js"),e("./js/apiServiсe.js"),e("./js/scroll.js"),e("./js/modal-footer.js"),e("./js/popup-modal"),e("./js/theme")},{"./js/auth.js":"6SURF","./js/loader.js":"2vm7i","./js/form.js":"9svCR","./js/modal-registration.js":"1nJfh","./js/homeRendering.js":"6Uvw0","./js/apiServiсe.js":"7TFaD","./js/scroll.js":"NzJlw","./js/modal-footer.js":"aYyaN","./js/popup-modal":"jtsLp","./js/theme":"2BIky"}],"6SURF":[function(e,t,r){var n=e("firebase/app"),a=e("firebase/auth"),i=(0,n.initializeApp)({apiKey:"AIzaSyBxK5_h_ujvAsW-jGS7sZP1o86rN6KTw8k",authDomain:"filmoteca-07-2022.firebaseapp.com",projectId:"filmoteca-07-2022",storageBucket:"filmoteca-07-2022.appspot.com",messagingSenderId:"628934586572",appId:"1:628934586572:web:0e49d0218d443fe2319269",measurementId:"G-21XLJKH2KG"}),o=(0,a.getAuth)(i);function u(e){var t=JSON.parse(localStorage.getItem("movies")||"[]");t.push(e),localStorage.setItem("movies",JSON.stringify(t))}(0,a.onAuthStateChanged)(o,(function(e){})),document.getElementById("login_form").addEventListener("submit",(function(e){e.preventDefault();var t=e.target.querySelector("#email").value,r=e.target.querySelector("#password").value;console.log(t,r),function(e,t){return fetch("https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=".concat("AIzaSyBxK5_h_ujvAsW-jGS7sZP1o86rN6KTw8k"),{method:"POST",body:JSON.stringify({email:e,password:t,returnSecureToken:!0}),headers:{"Content-Type":"application/json"}}).then((function(e){return e.json()})).then((function(e){return e.idToken}))}(t,r).then((function(e){return function(e){return e||console.log("no authorize"),fetch("https://filmoteca-07-2022-default-rtdb.firebaseio.com/movies.json?auth=".concat(e)).then((function(e){return e.json()})).then((function(e){console.log("movies",e)})).then(console.log("Authorized Welcome"))}(e)}))})),document.getElementById("register_form").addEventListener("submit",(function(e){e.preventDefault();var t=e.target.querySelector("#reg_email").value,r=e.target.querySelector("#reg_password").value;console.log(t,r),function(e,t){fetch("https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=".concat("AIzaSyBxK5_h_ujvAsW-jGS7sZP1o86rN6KTw8k"),{method:"POST",body:JSON.stringify({email:e,password:t,returnSecureToken:!0}),headers:{"Content-Type":"application/json"}}).then((function(e){return e.json()})).then((function(e){return console.log(e)}))}(t,r)})),document.getElementById("test_form").addEventListener("submit",(function(e){e.preventDefault();var t,r=e.target.querySelector("#test_input").value,n={text:r,date:(new Date).toJSON()};console.log(n),(t=n,fetch("https://filmoteca-07-2022-default-rtdb.firebaseio.com/movies.json",{method:"POST",body:JSON.stringify(t),headers:{"Content-Type":"application/json"}}).then((function(e){return e.json()})).then((function(e){return t.id=e.name,t})).then(u)).then((function(){r.value=""}))}))},{"firebase/app":"e581y","firebase/auth":"g6w4l"}],e581y:[function(e,t,r){var n=e("@parcel/transformer-js/src/esmodule-helpers.js");n.defineInteropFlag(r);var a=e("@firebase/app");n.exportAll(a,r);
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
(0,a.registerVersion)("firebase","9.9.3","app")},{"@firebase/app":"6ftlq","@parcel/transformer-js/src/esmodule-helpers.js":"jiucr"}],"6ftlq":[function(e,t,r){var n=e("@parcel/transformer-js/src/esmodule-helpers.js");n.defineInteropFlag(r),n.export(r,"FirebaseError",(function(){return y.FirebaseError})),n.export(r,"SDK_VERSION",(function(){return F})),n.export(r,"_DEFAULT_ENTRY_NAME",(function(){return T})),n.export(r,"_addComponent",(function(){return N})),n.export(r,"_addOrOverwriteComponent",(function(){return R})),n.export(r,"_apps",(function(){return A})),n.export(r,"_clearComponents",(function(){return L})),n.export(r,"_components",(function(){return O})),n.export(r,"_getProvider",(function(){return C})),n.export(r,"_registerComponent",(function(){return D})),n.export(r,"_removeServiceInstance",(function(){return P})),n.export(r,"deleteApp",(function(){return z})),n.export(r,"getApp",(function(){return q})),n.export(r,"getApps",(function(){return H})),n.export(r,"initializeApp",(function(){return V})),n.export(r,"onLog",(function(){return G})),n.export(r,"registerVersion",(function(){return W})),n.export(r,"setLogLevel",(function(){return K}));var a=e("@swc/helpers/lib/_async_to_generator.js"),i=n.interopDefault(a),o=e("@swc/helpers/lib/_class_call_check.js"),u=n.interopDefault(o),s=e("@swc/helpers/lib/_create_class.js"),c=n.interopDefault(s),l=e("@swc/helpers/lib/_define_property.js"),f=n.interopDefault(l),d=e("@swc/helpers/lib/_to_consumable_array.js"),p=n.interopDefault(d),h=e("regenerator-runtime"),v=n.interopDefault(h),m=e("@firebase/component"),g=e("@firebase/logger"),y=e("@firebase/util"),b=e("idb"),_=function(){"use strict";function e(t){(0,u.default)(this,e),this.container=t}return(0,c.default)(e,[{key:"getPlatformInfoString",value:function(){return this.container.getProviders().map((function(e){if(function(e){var t=e.getComponent();return"VERSION"===(null==t?void 0:t.type)}(e)){var t=e.getImmediate();return"".concat(t.library,"/").concat(t.version)}return null})).filter((function(e){return e})).join(" ")}}]),e}();var k,w,x="@firebase/app",I="0.7.31",E=new(0,g.Logger)("@firebase/app"),T="[DEFAULT]",S=(k={},(0,f.default)(k,x,"fire-core"),(0,f.default)(k,"@firebase/app-compat","fire-core-compat"),(0,f.default)(k,"@firebase/analytics","fire-analytics"),(0,f.default)(k,"@firebase/analytics-compat","fire-analytics-compat"),(0,f.default)(k,"@firebase/app-check","fire-app-check"),(0,f.default)(k,"@firebase/app-check-compat","fire-app-check-compat"),(0,f.default)(k,"@firebase/auth","fire-auth"),(0,f.default)(k,"@firebase/auth-compat","fire-auth-compat"),(0,f.default)(k,"@firebase/database","fire-rtdb"),(0,f.default)(k,"@firebase/database-compat","fire-rtdb-compat"),(0,f.default)(k,"@firebase/functions","fire-fn"),(0,f.default)(k,"@firebase/functions-compat","fire-fn-compat"),(0,f.default)(k,"@firebase/installations","fire-iid"),(0,f.default)(k,"@firebase/installations-compat","fire-iid-compat"),(0,f.default)(k,"@firebase/messaging","fire-fcm"),(0,f.default)(k,"@firebase/messaging-compat","fire-fcm-compat"),(0,f.default)(k,"@firebase/performance","fire-perf"),(0,f.default)(k,"@firebase/performance-compat","fire-perf-compat"),(0,f.default)(k,"@firebase/remote-config","fire-rc"),(0,f.default)(k,"@firebase/remote-config-compat","fire-rc-compat"),(0,f.default)(k,"@firebase/storage","fire-gcs"),(0,f.default)(k,"@firebase/storage-compat","fire-gcs-compat"),(0,f.default)(k,"@firebase/firestore","fire-fst"),(0,f.default)(k,"@firebase/firestore-compat","fire-fst-compat"),(0,f.default)(k,"fire-js","fire-js"),(0,f.default)(k,"firebase","fire-js-all"),k),A=new Map,O=new Map;function N(e,t){try{e.container.addComponent(t)}catch(r){E.debug("Component ".concat(t.name," failed to register with FirebaseApp ").concat(e.name),r)}}function R(e,t){e.container.addOrOverwriteComponent(t)}function D(e){var t=e.name;if(O.has(t))return E.debug("There were multiple attempts to register component ".concat(t,".")),!1;O.set(t,e);var r=!0,n=!1,a=void 0;try{for(var i,o=A.values()[Symbol.iterator]();!(r=(i=o.next()).done);r=!0){N(i.value,e)}}catch(e){n=!0,a=e}finally{try{r||null==o.return||o.return()}finally{if(n)throw a}}return!0}function C(e,t){var r=e.container.getProvider("heartbeat").getImmediate({optional:!0});return r&&r.triggerHeartbeat(),e.container.getProvider(t)}function P(e,t){var r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:T;C(e,t).clearInstance(r)}function L(){O.clear()}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
var j=(w={},(0,f.default)(w,"no-app","No Firebase App '{$appName}' has been created - call Firebase App.initializeApp()"),(0,f.default)(w,"bad-app-name","Illegal App name: '{$appName}"),(0,f.default)(w,"duplicate-app","Firebase App named '{$appName}' already exists with different options or config"),(0,f.default)(w,"app-deleted","Firebase App named '{$appName}' already deleted"),(0,f.default)(w,"invalid-app-argument","firebase.{$appName}() takes either no argument or a Firebase App instance."),(0,f.default)(w,"invalid-log-argument","First argument to `onLog` must be null or a function."),(0,f.default)(w,"idb-open","Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}."),(0,f.default)(w,"idb-get","Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}."),(0,f.default)(w,"idb-set","Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}."),(0,f.default)(w,"idb-delete","Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}."),w),M=new(0,y.ErrorFactory)("app","Firebase",j),U=function(){"use strict";function e(t,r,n){var a=this;(0,u.default)(this,e),this._isDeleted=!1,this._options=Object.assign({},t),this._config=Object.assign({},r),this._name=r.name,this._automaticDataCollectionEnabled=r.automaticDataCollectionEnabled,this._container=n,this.container.addComponent(new(0,m.Component)("app",(function(){return a}),"PUBLIC"))}return(0,c.default)(e,[{key:"automaticDataCollectionEnabled",get:function(){return this.checkDestroyed(),this._automaticDataCollectionEnabled},set:function(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}},{key:"name",get:function(){return this.checkDestroyed(),this._name}},{key:"options",get:function(){return this.checkDestroyed(),this._options}},{key:"config",get:function(){return this.checkDestroyed(),this._config}},{key:"container",get:function(){return this._container}},{key:"isDeleted",get:function(){return this._isDeleted},set:function(e){this._isDeleted=e}},{key:"checkDestroyed",value:function(){if(this.isDeleted)throw M.create("app-deleted",{appName:this._name})}}]),e}(),F="9.9.3";function V(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};if("object"!=typeof t){var r=t;t={name:r}}var n=Object.assign({name:T,automaticDataCollectionEnabled:!1},t),a=n.name;if("string"!=typeof a||!a)throw M.create("bad-app-name",{appName:String(a)});var i=A.get(a);if(i){if((0,y.deepEqual)(e,i.options)&&(0,y.deepEqual)(n,i.config))return i;throw M.create("duplicate-app",{appName:a})}var o=new(0,m.ComponentContainer)(a),u=!0,s=!1,c=void 0;try{for(var l,f=O.values()[Symbol.iterator]();!(u=(l=f.next()).done);u=!0){var d=l.value;o.addComponent(d)}}catch(e){s=!0,c=e}finally{try{u||null==f.return||f.return()}finally{if(s)throw c}}var p=new U(e,n,o);return A.set(a,p),p}function q(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:T,t=A.get(e);if(!t)throw M.create("no-app",{appName:e});return t}function H(){return Array.from(A.values())}function z(e){return B.apply(this,arguments)}function B(){return(B=(0,i.default)(v.default.mark((function e(t){var r;return v.default.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(r=t.name,!A.has(r)){e.next=6;break}return A.delete(r),e.next=5,Promise.all(t.container.getProviders().map((function(e){return e.delete()})));case 5:t.isDeleted=!0;case 6:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function W(e,t,r){var n,a=null!==(n=S[e])&&void 0!==n?n:e;r&&(a+="-".concat(r));var i=a.match(/\s|\//),o=t.match(/\s|\//);if(i||o){var u=['Unable to register library "'.concat(a,'" with version "').concat(t,'":')];return i&&u.push('library name "'.concat(a,'" contains illegal characters (whitespace or "/")')),i&&o&&u.push("and"),o&&u.push('version name "'.concat(t,'" contains illegal characters (whitespace or "/")')),void E.warn(u.join(" "))}D(new(0,m.Component)("".concat(a,"-version"),(function(){return{library:a,version:t}}),"VERSION"))}function G(e,t){if(null!==e&&"function"!=typeof e)throw M.create("invalid-log-argument");(0,g.setUserLogHandler)(e,t)}function K(e){(0,g.setLogLevel)(e)}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var J="firebase-heartbeat-store",Y=null;function X(){return Y||(Y=(0,b.openDB)("firebase-heartbeat-database",1,{upgrade:function(e,t){if(0===t)e.createObjectStore(J)}}).catch((function(e){throw M.create("idb-open",{originalErrorMessage:e.message})}))),Y}function Z(e){return Q.apply(this,arguments)}function Q(){return(Q=(0,i.default)(v.default.mark((function e(t){var r,n,a;return v.default.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=1,e.next=4,X();case 4:return n=e.sent,e.abrupt("return",n.transaction(J).objectStore(J).get(te(t)));case 8:e.prev=8,e.t0=e.catch(1),e.t0 instanceof y.FirebaseError?E.warn(e.t0.message):(a=M.create("idb-get",{originalErrorMessage:null===(r=e.t0)||void 0===r?void 0:r.message}),E.warn(a.message));case 11:case"end":return e.stop()}}),e,null,[[1,8]])})))).apply(this,arguments)}function $(e,t){return ee.apply(this,arguments)}function ee(){return(ee=(0,i.default)(v.default.mark((function e(t,r){var n,a,i,o,u;return v.default.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=1,e.next=4,X();case 4:return a=e.sent,i=a.transaction(J,"readwrite"),o=i.objectStore(J),e.next=9,o.put(r,te(t));case 9:return e.abrupt("return",i.done);case 12:e.prev=12,e.t0=e.catch(1),e.t0 instanceof y.FirebaseError?E.warn(e.t0.message):(u=M.create("idb-set",{originalErrorMessage:null===(n=e.t0)||void 0===n?void 0:n.message}),E.warn(u.message));case 15:case"end":return e.stop()}}),e,null,[[1,12]])})))).apply(this,arguments)}function te(e){return"".concat(e.name,"!").concat(e.options.appId)}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var re=function(){"use strict";function e(t){var r=this;(0,u.default)(this,e),this.container=t,this._heartbeatsCache=null;var n=this.container.getProvider("app").getImmediate();this._storage=new oe(n),this._heartbeatsCachePromise=this._storage.read().then((function(e){return r._heartbeatsCache=e,e}))}return(0,c.default)(e,[{key:"triggerHeartbeat",value:function(){var e=this;return(0,i.default)(v.default.mark((function t(){var r,n,a;return v.default.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(r=e.container.getProvider("platform-logger").getImmediate(),n=r.getPlatformInfoString(),a=ne(),null!==e._heartbeatsCache){t.next=7;break}return t.next=6,e._heartbeatsCachePromise;case 6:e._heartbeatsCache=t.sent;case 7:if(e._heartbeatsCache.lastSentHeartbeatDate!==a&&!e._heartbeatsCache.heartbeats.some((function(e){return e.date===a}))){t.next=11;break}return t.abrupt("return");case 11:e._heartbeatsCache.heartbeats.push({date:a,agent:n});case 12:return e._heartbeatsCache.heartbeats=e._heartbeatsCache.heartbeats.filter((function(e){var t=new Date(e.date).valueOf();return Date.now()-t<=2592e6})),t.abrupt("return",e._storage.overwrite(e._heartbeatsCache));case 14:case"end":return t.stop()}}),t)})))()}},{key:"getHeartbeatsHeader",value:function(){var e=this;return(0,i.default)(v.default.mark((function t(){var r,n,a,i,o;return v.default.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(null!==e._heartbeatsCache){t.next=3;break}return t.next=3,e._heartbeatsCachePromise;case 3:if(null!==e._heartbeatsCache&&0!==e._heartbeatsCache.heartbeats.length){t.next=5;break}return t.abrupt("return","");case 5:if(r=ne(),n=ae(e._heartbeatsCache.heartbeats),a=n.heartbeatsToSend,i=n.unsentEntries,o=(0,y.base64urlEncodeWithoutPadding)(JSON.stringify({version:2,heartbeats:a})),e._heartbeatsCache.lastSentHeartbeatDate=r,!(i.length>0)){t.next=15;break}return e._heartbeatsCache.heartbeats=i,t.next=13,e._storage.overwrite(e._heartbeatsCache);case 13:t.next=16;break;case 15:e._heartbeatsCache.heartbeats=[],e._storage.overwrite(e._heartbeatsCache);case 16:return t.abrupt("return",o);case 17:case"end":return t.stop()}}),t)})))()}}]),e}();function ne(){return(new Date).toISOString().substring(0,10)}function ae(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:1024,r=[],n=e.slice(),a=!0,i=!1,o=void 0;try{for(var u,s=function(e,a){var i=a.value,o=r.find((function(e){return e.agent===i.agent}));if(o){if(o.dates.push(i.date),ue(r)>t)return o.dates.pop(),"break"}else if(r.push({agent:i.agent,dates:[i.date]}),ue(r)>t)return r.pop(),"break";n=n.slice(1)},c=e[Symbol.iterator]();!(a=(u=c.next()).done);a=!0){var l=s(c,u);if("break"===l)break}}catch(e){i=!0,o=e}finally{try{a||null==c.return||c.return()}finally{if(i)throw o}}return{heartbeatsToSend:r,unsentEntries:n}}var ie,oe=function(){"use strict";function e(t){(0,u.default)(this,e),this.app=t,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}return(0,c.default)(e,[{key:"runIndexedDBEnvironmentCheck",value:function(){return(0,i.default)(v.default.mark((function e(){return v.default.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if((0,y.isIndexedDBAvailable)()){e.next=4;break}return e.abrupt("return",!1);case 4:return e.abrupt("return",(0,y.validateIndexedDBOpenable)().then((function(){return!0})).catch((function(){return!1})));case 5:case"end":return e.stop()}}),e)})))()}},{key:"read",value:function(){var e=this;return(0,i.default)(v.default.mark((function t(){var r;return v.default.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,e._canUseIndexedDBPromise;case 2:if(t.sent){t.next=7;break}return t.abrupt("return",{heartbeats:[]});case 7:return t.next=9,Z(e.app);case 9:return r=t.sent,t.abrupt("return",r||{heartbeats:[]});case 11:case"end":return t.stop()}}),t)})))()}},{key:"overwrite",value:function(e){var t=this;return(0,i.default)(v.default.mark((function r(){var n,a;return v.default.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.next=3,t._canUseIndexedDBPromise;case 3:if(r.sent){r.next=8;break}return r.abrupt("return");case 8:return r.next=10,t.read();case 10:return a=r.sent,r.abrupt("return",$(t.app,{lastSentHeartbeatDate:null!==(n=e.lastSentHeartbeatDate)&&void 0!==n?n:a.lastSentHeartbeatDate,heartbeats:e.heartbeats}));case 12:case"end":return r.stop()}}),r)})))()}},{key:"add",value:function(e){var t=this;return(0,i.default)(v.default.mark((function r(){var n,a;return v.default.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.next=3,t._canUseIndexedDBPromise;case 3:if(r.sent){r.next=8;break}return r.abrupt("return");case 8:return r.next=10,t.read();case 10:return a=r.sent,r.abrupt("return",$(t.app,{lastSentHeartbeatDate:null!==(n=e.lastSentHeartbeatDate)&&void 0!==n?n:a.lastSentHeartbeatDate,heartbeats:(0,p.default)(a.heartbeats).concat((0,p.default)(e.heartbeats))}));case 12:case"end":return r.stop()}}),r)})))()}}]),e}();function ue(e){return(0,y.base64urlEncodeWithoutPadding)(JSON.stringify({version:2,heartbeats:e})).length}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ie="",D(new(0,m.Component)("platform-logger",(function(e){return new _(e)}),"PRIVATE")),D(new(0,m.Component)("heartbeat",(function(e){return new re(e)}),"PRIVATE")),W(x,I,ie),W(x,I,"esm2017"),W("fire-js","")},{"@swc/helpers/lib/_async_to_generator.js":"9wsRk","@swc/helpers/lib/_class_call_check.js":"bhoK3","@swc/helpers/lib/_create_class.js":"gwn5H","@swc/helpers/lib/_define_property.js":"ir6l0","@swc/helpers/lib/_to_consumable_array.js":"lNLC6","regenerator-runtime":"3PvxL","@firebase/component":"2B1ci","@firebase/logger":"9CEZ1","@firebase/util":"3o5x8",idb:"kNCfo","@parcel/transformer-js/src/esmodule-helpers.js":"jiucr"}],ir6l0:[function(e,t,r){"use strict";Object.defineProperty(r,"__esModule",{value:!0}),r.default=function(e,t,r){t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r;return e}},{}],lNLC6:[function(e,t,r){"use strict";Object.defineProperty(r,"__esModule",{value:!0}),r.default=function(e){return n.default(e)||a.default(e)||o.default(e)||i.default()};var n=u(e("./_array_without_holes")),a=u(e("./_iterable_to_array")),i=u(e("./_non_iterable_spread")),o=u(e("./_unsupported_iterable_to_array"));function u(e){return e&&e.__esModule?e:{default:e}}},{"./_array_without_holes":"61mu9","./_iterable_to_array":"lwYud","./_non_iterable_spread":"43sDC","./_unsupported_iterable_to_array":"jFa9m"}],"61mu9":[function(e,t,r){"use strict";Object.defineProperty(r,"__esModule",{value:!0}),r.default=function(e){if(Array.isArray(e))return a.default(e)};var n,a=(n=e("./_array_like_to_array"))&&n.__esModule?n:{default:n}},{"./_array_like_to_array":"lloMm"}],"43sDC":[function(e,t,r){"use strict";Object.defineProperty(r,"__esModule",{value:!0}),r.default=function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}},{}],"2B1ci":[function(e,t,r){var n=e("@parcel/transformer-js/src/esmodule-helpers.js");n.defineInteropFlag(r),n.export(r,"Component",(function(){return g})),n.export(r,"ComponentContainer",(function(){return _})),n.export(r,"Provider",(function(){return b}));var a=e("@swc/helpers/lib/_async_to_generator.js"),i=n.interopDefault(a),o=e("@swc/helpers/lib/_class_call_check.js"),u=n.interopDefault(o),s=e("@swc/helpers/lib/_create_class.js"),c=n.interopDefault(s),l=e("@swc/helpers/lib/_sliced_to_array.js"),f=n.interopDefault(l),d=e("@swc/helpers/lib/_to_consumable_array.js"),p=n.interopDefault(d),h=e("regenerator-runtime"),v=n.interopDefault(h),m=e("@firebase/util"),g=function(){"use strict";function e(t,r,n){(0,u.default)(this,e),this.name=t,this.instanceFactory=r,this.type=n,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}return(0,c.default)(e,[{key:"setInstantiationMode",value:function(e){return this.instantiationMode=e,this}},{key:"setMultipleInstances",value:function(e){return this.multipleInstances=e,this}},{key:"setServiceProps",value:function(e){return this.serviceProps=e,this}},{key:"setInstanceCreatedCallback",value:function(e){return this.onInstanceCreated=e,this}}]),e}(),y="[DEFAULT]",b=function(){"use strict";function e(t,r){(0,u.default)(this,e),this.name=t,this.container=r,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}return(0,c.default)(e,[{key:"get",value:function(e){var t=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(t)){var r=new(0,m.Deferred);if(this.instancesDeferred.set(t,r),this.isInitialized(t)||this.shouldAutoInitialize())try{var n=this.getOrInitializeService({instanceIdentifier:t});n&&r.resolve(n)}catch(e){}}return this.instancesDeferred.get(t).promise}},{key:"getImmediate",value:function(e){var t,r=this.normalizeInstanceIdentifier(null==e?void 0:e.identifier),n=null!==(t=null==e?void 0:e.optional)&&void 0!==t&&t;if(!this.isInitialized(r)&&!this.shouldAutoInitialize()){if(n)return null;throw Error("Service ".concat(this.name," is not available"))}try{return this.getOrInitializeService({instanceIdentifier:r})}catch(e){if(n)return null;throw e}}},{key:"getComponent",value:function(){return this.component}},{key:"setComponent",value:function(e){if(e.name!==this.name)throw Error("Mismatching Component ".concat(e.name," for Provider ").concat(this.name,"."));if(this.component)throw Error("Component for ".concat(this.name," has already been provided"));if(this.component=e,this.shouldAutoInitialize()){if(function(e){return"EAGER"===e.instantiationMode}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(e))try{this.getOrInitializeService({instanceIdentifier:y})}catch(e){}var t=!0,r=!1,n=void 0;try{for(var a,i=this.instancesDeferred.entries()[Symbol.iterator]();!(t=(a=i.next()).done);t=!0){var o=(0,f.default)(a.value,2),u=o[0],s=o[1],c=this.normalizeInstanceIdentifier(u);try{var l=this.getOrInitializeService({instanceIdentifier:c});s.resolve(l)}catch(e){}}}catch(e){r=!0,n=e}finally{try{t||null==i.return||i.return()}finally{if(r)throw n}}}}},{key:"clearInstance",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:y;this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}},{key:"delete",value:function(){var e=this;return(0,i.default)(v.default.mark((function t(){var r;return v.default.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return r=Array.from(e.instances.values()),t.next=3,Promise.all((0,p.default)(r.filter((function(e){return"INTERNAL"in e})).map((function(e){return e.INTERNAL.delete()}))).concat((0,p.default)(r.filter((function(e){return"_delete"in e})).map((function(e){return e._delete()})))));case 3:case"end":return t.stop()}}),t)})))()}},{key:"isComponentSet",value:function(){return null!=this.component}},{key:"isInitialized",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:y;return this.instances.has(e)}},{key:"getOptions",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:y;return this.instancesOptions.get(e)||{}}},{key:"initialize",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.options,r=void 0===t?{}:t,n=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(n))throw Error("".concat(this.name,"(").concat(n,") has already been initialized"));if(!this.isComponentSet())throw Error("Component ".concat(this.name," has not been registered yet"));var a=this.getOrInitializeService({instanceIdentifier:n,options:r}),i=!0,o=!1,u=void 0;try{for(var s,c=this.instancesDeferred.entries()[Symbol.iterator]();!(i=(s=c.next()).done);i=!0){var l=(0,f.default)(s.value,2),d=l[0],p=l[1],h=this.normalizeInstanceIdentifier(d);n===h&&p.resolve(a)}}catch(e){o=!0,u=e}finally{try{i||null==c.return||c.return()}finally{if(o)throw u}}return a}},{key:"onInit",value:function(e,t){var r,n=this.normalizeInstanceIdentifier(t),a=null!==(r=this.onInitCallbacks.get(n))&&void 0!==r?r:new Set;a.add(e),this.onInitCallbacks.set(n,a);var i=this.instances.get(n);return i&&e(i,n),function(){a.delete(e)}}},{key:"invokeOnInitCallbacks",value:function(e,t){var r=this.onInitCallbacks.get(t);if(r){var n=!0,a=!1,i=void 0;try{for(var o,u=r[Symbol.iterator]();!(n=(o=u.next()).done);n=!0){var s=o.value;try{s(e,t)}catch(e){}}}catch(e){a=!0,i=e}finally{try{n||null==u.return||u.return()}finally{if(a)throw i}}}}},{key:"getOrInitializeService",value:function(e){var t,r=e.instanceIdentifier,n=e.options,a=void 0===n?{}:n,i=this.instances.get(r);if(!i&&this.component&&(i=this.component.instanceFactory(this.container,{instanceIdentifier:(t=r,t===y?void 0:t),options:a}),this.instances.set(r,i),this.instancesOptions.set(r,a),this.invokeOnInitCallbacks(i,r),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,r,i)}catch(e){}return i||null}},{key:"normalizeInstanceIdentifier",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:y;return this.component?this.component.multipleInstances?e:y:e}},{key:"shouldAutoInitialize",value:function(){return!!this.component&&"EXPLICIT"!==this.component.instantiationMode}}]),e}();var _=function(){"use strict";function e(t){(0,u.default)(this,e),this.name=t,this.providers=new Map}return(0,c.default)(e,[{key:"addComponent",value:function(e){var t=this.getProvider(e.name);if(t.isComponentSet())throw new Error("Component ".concat(e.name," has already been registered with ").concat(this.name));t.setComponent(e)}},{key:"addOrOverwriteComponent",value:function(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}},{key:"getProvider",value:function(e){if(this.providers.has(e))return this.providers.get(e);var t=new b(e,this);return this.providers.set(e,t),t}},{key:"getProviders",value:function(){return Array.from(this.providers.values())}}]),e}()},{"@swc/helpers/lib/_async_to_generator.js":"9wsRk","@swc/helpers/lib/_class_call_check.js":"bhoK3","@swc/helpers/lib/_create_class.js":"gwn5H","@swc/helpers/lib/_sliced_to_array.js":"lhcPt","@swc/helpers/lib/_to_consumable_array.js":"lNLC6","regenerator-runtime":"3PvxL","@firebase/util":"3o5x8","@parcel/transformer-js/src/esmodule-helpers.js":"jiucr"}],"3o5x8":[function(e,t,r){var n=e("@parcel/transformer-js/src/esmodule-helpers.js");n.defineInteropFlag(r),n.export(r,"CONSTANTS",(function(){return k})),n.export(r,"Deferred",(function(){return C})),n.export(r,"ErrorFactory",(function(){return Q})),n.export(r,"FirebaseError",(function(){return Z})),n.export(r,"MAX_VALUE_MILLIS",(function(){return Pe})),n.export(r,"RANDOM_FACTOR",(function(){return Le})),n.export(r,"Sha1",(function(){return ye})),n.export(r,"areCookiesEnabled",(function(){return J})),n.export(r,"assert",(function(){return w})),n.export(r,"assertionError",(function(){return x})),n.export(r,"async",(function(){return ke})),n.export(r,"base64",(function(){return T})),n.export(r,"base64Decode",(function(){return O})),n.export(r,"base64Encode",(function(){return S})),n.export(r,"base64urlEncodeWithoutPadding",(function(){return A})),n.export(r,"calculateBackoffMillis",(function(){return je})),n.export(r,"contains",(function(){return se})),n.export(r,"createMockUserToken",(function(){return P})),n.export(r,"createSubscribe",(function(){return be})),n.export(r,"decode",(function(){return ne})),n.export(r,"deepCopy",(function(){return N})),n.export(r,"deepEqual",(function(){return de})),n.export(r,"deepExtend",(function(){return R})),n.export(r,"errorPrefix",(function(){return Ee})),n.export(r,"extractQuerystring",(function(){return ge})),n.export(r,"getGlobal",(function(){return Y})),n.export(r,"getModularInstance",(function(){return Fe})),n.export(r,"getUA",(function(){return L})),n.export(r,"isAdmin",(function(){return ue})),n.export(r,"isBrowser",(function(){return U})),n.export(r,"isBrowserExtension",(function(){return F})),n.export(r,"isElectron",(function(){return q})),n.export(r,"isEmpty",(function(){return le})),n.export(r,"isIE",(function(){return H})),n.export(r,"isIndexedDBAvailable",(function(){return G})),n.export(r,"isMobileCordova",(function(){return j})),n.export(r,"isNode",(function(){return M})),n.export(r,"isNodeSdk",(function(){return B})),n.export(r,"isReactNative",(function(){return V})),n.export(r,"isSafari",(function(){return W})),n.export(r,"isUWP",(function(){return z})),n.export(r,"isValidFormat",(function(){return oe})),n.export(r,"isValidTimestamp",(function(){return ae})),n.export(r,"issuedAtTime",(function(){return ie})),n.export(r,"jsonEval",(function(){return te})),n.export(r,"map",(function(){return fe})),n.export(r,"ordinal",(function(){return Me})),n.export(r,"promiseWithTimeout",(function(){return he})),n.export(r,"querystring",(function(){return ve})),n.export(r,"querystringDecode",(function(){return me})),n.export(r,"safeGet",(function(){return ce})),n.export(r,"stringLength",(function(){return Ne})),n.export(r,"stringToByteArray",(function(){return Oe})),n.export(r,"stringify",(function(){return re})),n.export(r,"uuidv4",(function(){return Re})),n.export(r,"validateArgCount",(function(){return Ie})),n.export(r,"validateCallback",(function(){return Se})),n.export(r,"validateContextObject",(function(){return Ae})),n.export(r,"validateIndexedDBOpenable",(function(){return K})),n.export(r,"validateNamespace",(function(){return Te}));var a=e("@swc/helpers/lib/_assert_this_initialized.js"),i=n.interopDefault(a),o=e("@swc/helpers/lib/_class_call_check.js"),u=n.interopDefault(o),s=e("@swc/helpers/lib/_create_class.js"),c=n.interopDefault(s),l=e("@swc/helpers/lib/_inherits.js"),f=n.interopDefault(l),d=e("@swc/helpers/lib/_sliced_to_array.js"),p=n.interopDefault(d),h=e("@swc/helpers/lib/_to_consumable_array.js"),v=n.interopDefault(h),m=e("@swc/helpers/lib/_wrap_native_super.js"),g=n.interopDefault(m),y=e("@swc/helpers/lib/_create_super.js"),b=n.interopDefault(y),_=arguments[3],k={NODE_CLIENT:!1,NODE_ADMIN:!1,SDK_VERSION:"${JSCORE_VERSION}"},w=function(e,t){if(!e)throw x(t)},x=function(e){return new Error("Firebase Database ("+k.SDK_VERSION+") INTERNAL ASSERT FAILED: "+e)},I=function(e){for(var t=[],r=0,n=0;n<e.length;n++){var a=e.charCodeAt(n);a<128?t[r++]=a:a<2048?(t[r++]=a>>6|192,t[r++]=63&a|128):55296==(64512&a)&&n+1<e.length&&56320==(64512&e.charCodeAt(n+1))?(a=65536+((1023&a)<<10)+(1023&e.charCodeAt(++n)),t[r++]=a>>18|240,t[r++]=a>>12&63|128,t[r++]=a>>6&63|128,t[r++]=63&a|128):(t[r++]=a>>12|224,t[r++]=a>>6&63|128,t[r++]=63&a|128)}return t},E=function(e){for(var t=[],r=0,n=0;r<e.length;){var a=e[r++];if(a<128)t[n++]=String.fromCharCode(a);else if(a>191&&a<224){var i=e[r++];t[n++]=String.fromCharCode((31&a)<<6|63&i)}else if(a>239&&a<365){var o=((7&a)<<18|(63&e[r++])<<12|(63&e[r++])<<6|63&e[r++])-65536;t[n++]=String.fromCharCode(55296+(o>>10)),t[n++]=String.fromCharCode(56320+(1023&o))}else{var u=e[r++],s=e[r++];t[n++]=String.fromCharCode((15&a)<<12|(63&u)<<6|63&s)}}return t.join("")},T={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:"function"==typeof atob,encodeByteArray:function(e,t){if(!Array.isArray(e))throw Error("encodeByteArray takes an array as a parameter");this.init_();for(var r=t?this.byteToCharMapWebSafe_:this.byteToCharMap_,n=[],a=0;a<e.length;a+=3){var i=e[a],o=a+1<e.length,u=o?e[a+1]:0,s=a+2<e.length,c=s?e[a+2]:0,l=i>>2,f=(3&i)<<4|u>>4,d=(15&u)<<2|c>>6,p=63&c;s||(p=64,o||(d=64)),n.push(r[l],r[f],r[d],r[p])}return n.join("")},encodeString:function(e,t){return this.HAS_NATIVE_SUPPORT&&!t?btoa(e):this.encodeByteArray(I(e),t)},decodeString:function(e,t){return this.HAS_NATIVE_SUPPORT&&!t?atob(e):E(this.decodeStringToByteArray(e,t))},decodeStringToByteArray:function(e,t){this.init_();for(var r=t?this.charToByteMapWebSafe_:this.charToByteMap_,n=[],a=0;a<e.length;){var i=r[e.charAt(a++)],o=a<e.length?r[e.charAt(a)]:0,u=++a<e.length?r[e.charAt(a)]:64,s=++a<e.length?r[e.charAt(a)]:64;if(++a,null==i||null==o||null==u||null==s)throw Error();var c=i<<2|o>>4;if(n.push(c),64!==u){var l=o<<4&240|u>>2;if(n.push(l),64!==s){var f=u<<6&192|s;n.push(f)}}}return n},init_:function(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(var e=0;e<this.ENCODED_VALS.length;e++)this.byteToCharMap_[e]=this.ENCODED_VALS.charAt(e),this.charToByteMap_[this.byteToCharMap_[e]]=e,this.byteToCharMapWebSafe_[e]=this.ENCODED_VALS_WEBSAFE.charAt(e),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[e]]=e,e>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(e)]=e,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(e)]=e)}}},S=function(e){var t=I(e);return T.encodeByteArray(t,!0)},A=function(e){return S(e).replace(/\./g,"")},O=function(e){try{return T.decodeString(e,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function N(e){return R(void 0,e)}function R(e,t){if(!(t instanceof Object))return t;switch(t.constructor){case Date:return new Date(t.getTime());case Object:void 0===e&&(e={});break;case Array:e=[];break;default:return t}for(var r in t)t.hasOwnProperty(r)&&D(r)&&(e[r]=R(e[r],t[r]));return e}function D(e){return"__proto__"!==e}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var C=function(){"use strict";function e(){var t=this;(0,u.default)(this,e),this.reject=function(){},this.resolve=function(){},this.promise=new Promise((function(e,r){t.resolve=e,t.reject=r}))}return(0,c.default)(e,[{key:"wrapCallback",value:function(e){var t=this;return function(r,n){r?t.reject(r):t.resolve(n),"function"==typeof e&&(t.promise.catch((function(){})),1===e.length?e(r):e(r,n))}}}]),e}();
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function P(e,t){if(e.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');var r=t||"demo-project",n=e.iat||0,a=e.sub||e.user_id;if(!a)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");var i=Object.assign({iss:"https://securetoken.google.com/".concat(r),aud:r,iat:n,exp:n+3600,auth_time:n,sub:a,user_id:a,firebase:{sign_in_provider:"custom",identities:{}}},e);return[A(JSON.stringify({alg:"none",type:"JWT"})),A(JSON.stringify(i)),""].join(".")}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function L(){return"undefined"!=typeof navigator&&"string"==typeof navigator.userAgent?navigator.userAgent:""}function j(){return"undefined"!=typeof window&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(L())}function M(){try{return"[object process]"===Object.prototype.toString.call(_.process)}catch(e){return!1}}function U(){return"object"==typeof self&&self.self===self}function F(){var e="object"==typeof chrome?chrome.runtime:"object"==typeof browser?browser.runtime:void 0;return"object"==typeof e&&void 0!==e.id}function V(){return"object"==typeof navigator&&"ReactNative"===navigator.product}function q(){return L().indexOf("Electron/")>=0}function H(){var e=L();return e.indexOf("MSIE ")>=0||e.indexOf("Trident/")>=0}function z(){return L().indexOf("MSAppHost/")>=0}function B(){return!0===k.NODE_CLIENT||!0===k.NODE_ADMIN}function W(){return!M()&&navigator.userAgent.includes("Safari")&&!navigator.userAgent.includes("Chrome")}function G(){return"object"==typeof indexedDB}function K(){return new Promise((function(e,t){try{var r=!0,n="validate-browser-context-for-indexeddb-analytics-module",a=self.indexedDB.open(n);a.onsuccess=function(){a.result.close(),r||self.indexedDB.deleteDatabase(n),e(!0)},a.onupgradeneeded=function(){r=!1},a.onerror=function(){var e;t((null===(e=a.error)||void 0===e?void 0:e.message)||"")}}catch(e){t(e)}}))}function J(){return!("undefined"==typeof navigator||!navigator.cookieEnabled)}function Y(){if("undefined"!=typeof self)return self;if("undefined"!=typeof window)return window;if(void 0!==_)return _;throw new Error("Unable to locate global object.")}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var X="FirebaseError",Z=function(e){"use strict";(0,f.default)(r,e);var t=(0,b.default)(r);function r(e,n,a){var o;return(0,u.default)(this,r),(o=t.call(this,n)).code=e,o.customData=a,o.name=X,Object.setPrototypeOf((0,i.default)(o),r.prototype),Error.captureStackTrace&&Error.captureStackTrace((0,i.default)(o),Q.prototype.create),o}return r}((0,g.default)(Error)),Q=function(){"use strict";function e(t,r,n){(0,u.default)(this,e),this.service=t,this.serviceName=r,this.errors=n}return(0,c.default)(e,[{key:"create",value:function(e){for(var t=arguments.length,r=new Array(t>1?t-1:0),n=1;n<t;n++)r[n-1]=arguments[n];var a=r[0]||{},i="".concat(this.service,"/").concat(e),o=this.errors[e],u=o?$(o,a):"Error",s="".concat(this.serviceName,": ").concat(u," (").concat(i,")."),c=new Z(i,s,a);return c}}]),e}();function $(e,t){return e.replace(ee,(function(e,r){var n=t[r];return null!=n?String(n):"<".concat(r,"?>")}))}var ee=/\{\$([^}]+)}/g;
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function te(e){return JSON.parse(e)}function re(e){return JSON.stringify(e)}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var ne=function(e){var t={},r={},n={},a="";try{var i=e.split(".");t=te(O(i[0])||""),r=te(O(i[1])||""),a=i[2],n=r.d||{},delete r.d}catch(e){}return{header:t,claims:r,data:n,signature:a}},ae=function(e){var t=ne(e).claims,r=Math.floor((new Date).getTime()/1e3),n=0,a=0;return"object"==typeof t&&(t.hasOwnProperty("nbf")?n=t.nbf:t.hasOwnProperty("iat")&&(n=t.iat),a=t.hasOwnProperty("exp")?t.exp:n+86400),!!r&&!!n&&!!a&&r>=n&&r<=a},ie=function(e){var t=ne(e).claims;return"object"==typeof t&&t.hasOwnProperty("iat")?t.iat:null},oe=function(e){var t=ne(e).claims;return!!t&&"object"==typeof t&&t.hasOwnProperty("iat")},ue=function(e){var t=ne(e).claims;return"object"==typeof t&&!0===t.admin};
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function se(e,t){return Object.prototype.hasOwnProperty.call(e,t)}function ce(e,t){return Object.prototype.hasOwnProperty.call(e,t)?e[t]:void 0}function le(e){for(var t in e)if(Object.prototype.hasOwnProperty.call(e,t))return!1;return!0}function fe(e,t,r){var n={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&(n[a]=t.call(r,e[a],a,e));return n}function de(e,t){if(e===t)return!0;var r=Object.keys(e),n=Object.keys(t),a=!0,i=!1,o=void 0;try{for(var u,s=r[Symbol.iterator]();!(a=(u=s.next()).done);a=!0){var c=u.value;if(!n.includes(c))return!1;var l=e[c],f=t[c];if(pe(l)&&pe(f)){if(!de(l,f))return!1}else if(l!==f)return!1}}catch(e){i=!0,o=e}finally{try{a||null==s.return||s.return()}finally{if(i)throw o}}var d=!0,p=!1,h=void 0;try{for(var v,m=n[Symbol.iterator]();!(d=(v=m.next()).done);d=!0){var g=v.value;if(!r.includes(g))return!1}}catch(e){p=!0,h=e}finally{try{d||null==m.return||m.return()}finally{if(p)throw h}}return!0}function pe(e){return null!==e&&"object"==typeof e}
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function he(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:2e3,r=new C;return setTimeout((function(){return r.reject("timeout!")}),t),e.then(r.resolve,r.reject),r.promise}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ve(e){var t=[],r=!0,n=!1,a=void 0;try{for(var i,o=function(e,r){var n=(0,p.default)(r.value,2),a=n[0],i=n[1];Array.isArray(i)?i.forEach((function(e){t.push(encodeURIComponent(a)+"="+encodeURIComponent(e))})):t.push(encodeURIComponent(a)+"="+encodeURIComponent(i))},u=Object.entries(e)[Symbol.iterator]();!(r=(i=u.next()).done);r=!0)o(0,i)}catch(e){n=!0,a=e}finally{try{r||null==u.return||u.return()}finally{if(n)throw a}}return t.length?"&"+t.join("&"):""}function me(e){var t={};return e.replace(/^\?/,"").split("&").forEach((function(e){if(e){var r=(0,p.default)(e.split("="),2),n=r[0],a=r[1];t[decodeURIComponent(n)]=decodeURIComponent(a)}})),t}function ge(e){var t=e.indexOf("?");if(!t)return"";var r=e.indexOf("#",t);return e.substring(t,r>0?r:void 0)}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var ye=function(){"use strict";function e(){(0,u.default)(this,e),this.chain_=[],this.buf_=[],this.W_=[],this.pad_=[],this.inbuf_=0,this.total_=0,this.blockSize=64,this.pad_[0]=128;for(var t=1;t<this.blockSize;++t)this.pad_[t]=0;this.reset()}return(0,c.default)(e,[{key:"reset",value:function(){this.chain_[0]=1732584193,this.chain_[1]=4023233417,this.chain_[2]=2562383102,this.chain_[3]=271733878,this.chain_[4]=3285377520,this.inbuf_=0,this.total_=0}},{key:"compress_",value:function(e,t){t||(t=0);var r=this.W_;if("string"==typeof e)for(var n=0;n<16;n++)r[n]=e.charCodeAt(t)<<24|e.charCodeAt(t+1)<<16|e.charCodeAt(t+2)<<8|e.charCodeAt(t+3),t+=4;else for(var a=0;a<16;a++)r[a]=e[t]<<24|e[t+1]<<16|e[t+2]<<8|e[t+3],t+=4;for(var i=16;i<80;i++){var o=r[i-3]^r[i-8]^r[i-14]^r[i-16];r[i]=4294967295&(o<<1|o>>>31)}for(var u,s,c=this.chain_[0],l=this.chain_[1],f=this.chain_[2],d=this.chain_[3],p=this.chain_[4],h=0;h<80;h++){h<40?h<20?(u=d^l&(f^d),s=1518500249):(u=l^f^d,s=1859775393):h<60?(u=l&f|d&(l|f),s=2400959708):(u=l^f^d,s=3395469782);var v=(c<<5|c>>>27)+u+p+s+r[h]&4294967295;p=d,d=f,f=4294967295&(l<<30|l>>>2),l=c,c=v}this.chain_[0]=this.chain_[0]+c&4294967295,this.chain_[1]=this.chain_[1]+l&4294967295,this.chain_[2]=this.chain_[2]+f&4294967295,this.chain_[3]=this.chain_[3]+d&4294967295,this.chain_[4]=this.chain_[4]+p&4294967295}},{key:"update",value:function(e,t){if(null!=e){void 0===t&&(t=e.length);for(var r=t-this.blockSize,n=0,a=this.buf_,i=this.inbuf_;n<t;){if(0===i)for(;n<=r;)this.compress_(e,n),n+=this.blockSize;if("string"==typeof e){for(;n<t;)if(a[i]=e.charCodeAt(n),++n,++i===this.blockSize){this.compress_(a),i=0;break}}else for(;n<t;)if(a[i]=e[n],++n,++i===this.blockSize){this.compress_(a),i=0;break}}this.inbuf_=i,this.total_+=t}}},{key:"digest",value:function(){var e=[],t=8*this.total_;this.inbuf_<56?this.update(this.pad_,56-this.inbuf_):this.update(this.pad_,this.blockSize-(this.inbuf_-56));for(var r=this.blockSize-1;r>=56;r--)this.buf_[r]=255&t,t/=256;this.compress_(this.buf_);for(var n=0,a=0;a<5;a++)for(var i=24;i>=0;i-=8)e[n]=this.chain_[a]>>i&255,++n;return e}}]),e}();function be(e,t){var r=new _e(e,t);return r.subscribe.bind(r)}var _e=function(){"use strict";function e(t,r){var n=this;(0,u.default)(this,e),this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=r,this.task.then((function(){t(n)})).catch((function(e){n.error(e)}))}return(0,c.default)(e,[{key:"next",value:function(e){this.forEachObserver((function(t){t.next(e)}))}},{key:"error",value:function(e){this.forEachObserver((function(t){t.error(e)})),this.close(e)}},{key:"complete",value:function(){this.forEachObserver((function(e){e.complete()})),this.close()}},{key:"subscribe",value:function(e,t,r){var n,a=this;if(void 0===e&&void 0===t&&void 0===r)throw new Error("Missing Observer.");void 0===(n=we(e,["next","error","complete"])?e:{next:e,error:t,complete:r}).next&&(n.next=xe),void 0===n.error&&(n.error=xe),void 0===n.complete&&(n.complete=xe);var i=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then((function(){try{a.finalError?n.error(a.finalError):n.complete()}catch(e){}})),this.observers.push(n),i}},{key:"unsubscribeOne",value:function(e){void 0!==this.observers&&void 0!==this.observers[e]&&(delete this.observers[e],this.observerCount-=1,0===this.observerCount&&void 0!==this.onNoObservers&&this.onNoObservers(this))}},{key:"forEachObserver",value:function(e){if(!this.finalized)for(var t=0;t<this.observers.length;t++)this.sendOne(t,e)}},{key:"sendOne",value:function(e,t){var r=this;this.task.then((function(){if(void 0!==r.observers&&void 0!==r.observers[e])try{t(r.observers[e])}catch(e){"undefined"!=typeof console&&console.error&&console.error(e)}}))}},{key:"close",value:function(e){var t=this;this.finalized||(this.finalized=!0,void 0!==e&&(this.finalError=e),this.task.then((function(){t.observers=void 0,t.onNoObservers=void 0})))}}]),e}();function ke(e,t){return function(){for(var r=arguments.length,n=new Array(r),a=0;a<r;a++)n[a]=arguments[a];Promise.resolve(!0).then((function(){e.apply(void 0,(0,v.default)(n))})).catch((function(e){t&&t(e)}))}}function we(e,t){if("object"!=typeof e||null===e)return!1;var r=!0,n=!1,a=void 0;try{for(var i,o=t[Symbol.iterator]();!(r=(i=o.next()).done);r=!0){var u=i.value;if(u in e&&"function"==typeof e[u])return!0}}catch(e){n=!0,a=e}finally{try{r||null==o.return||o.return()}finally{if(n)throw a}}return!1}function xe(){}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Ie=function(e,t,r,n){var a;if(n<t?a="at least "+t:n>r&&(a=0===r?"none":"no more than "+r),a)throw new Error(e+" failed: Was called with "+n+(1===n?" argument.":" arguments.")+" Expects "+a+".")};function Ee(e,t){return"".concat(e," failed: ").concat(t," argument ")}function Te(e,t,r){if((!r||t)&&"string"!=typeof t)throw new Error(Ee(e,"namespace")+"must be a valid firebase namespace.")}function Se(e,t,r,n){if((!n||r)&&"function"!=typeof r)throw new Error(Ee(e,t)+"must be a valid function.")}function Ae(e,t,r,n){if((!n||r)&&("object"!=typeof r||null===r))throw new Error(Ee(e,t)+"must be a valid context object.")}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Oe=function(e){for(var t=[],r=0,n=0;n<e.length;n++){var a=e.charCodeAt(n);if(a>=55296&&a<=56319){var i=a-55296;n++,w(n<e.length,"Surrogate pair missing trail surrogate."),a=65536+(i<<10)+(e.charCodeAt(n)-56320)}a<128?t[r++]=a:a<2048?(t[r++]=a>>6|192,t[r++]=63&a|128):a<65536?(t[r++]=a>>12|224,t[r++]=a>>6&63|128,t[r++]=63&a|128):(t[r++]=a>>18|240,t[r++]=a>>12&63|128,t[r++]=a>>6&63|128,t[r++]=63&a|128)}return t},Ne=function(e){for(var t=0,r=0;r<e.length;r++){var n=e.charCodeAt(r);n<128?t++:n<2048?t+=2:n>=55296&&n<=56319?(t+=4,r++):t+=3}return t},Re=function(){return"xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g,(function(e){var t=16*Math.random()|0;return("x"===e?t:3&t|8).toString(16)}))},De=1e3,Ce=2,Pe=144e5,Le=.5;function je(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:De,r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:Ce,n=t*Math.pow(r,e),a=Math.round(Le*n*(Math.random()-.5)*2);return Math.min(Pe,n+a)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Me(e){return Number.isFinite(e)?e+Ue(e):"".concat(e)}function Ue(e){var t=(e=Math.abs(e))%100;if(t>=10&&t<=20)return"th";var r=e%10;return 1===r?"st":2===r?"nd":3===r?"rd":"th"}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Fe(e){return e&&e._delegate?e._delegate:e}},{"@swc/helpers/lib/_assert_this_initialized.js":"3hGWF","@swc/helpers/lib/_class_call_check.js":"bhoK3","@swc/helpers/lib/_create_class.js":"gwn5H","@swc/helpers/lib/_inherits.js":"1n7Yn","@swc/helpers/lib/_sliced_to_array.js":"lhcPt","@swc/helpers/lib/_to_consumable_array.js":"lNLC6","@swc/helpers/lib/_wrap_native_super.js":"8JfLs","@swc/helpers/lib/_create_super.js":"6Wrz5","@parcel/transformer-js/src/esmodule-helpers.js":"jiucr"}],"8JfLs":[function(e,t,r){"use strict";Object.defineProperty(r,"__esModule",{value:!0}),r.default=function(e){return s(e)};var n=u(e("./_construct")),a=u(e("./_is_native_function")),i=u(e("./_get_prototype_of")),o=u(e("./_set_prototype_of"));function u(e){return e&&e.__esModule?e:{default:e}}function s(e){var t="function"==typeof Map?new Map:void 0;return s=function(e){if(null===e||!a.default(e))return e;if("function"!=typeof e)throw new TypeError("Super expression must either be null or a function");if(void 0!==t){if(t.has(e))return t.get(e);t.set(e,r)}function r(){return n.default(e,arguments,i.default(this).constructor)}return r.prototype=Object.create(e.prototype,{constructor:{value:r,enumerable:!1,writable:!0,configurable:!0}}),o.default(r,e)},s(e)}},{"./_construct":"1EZd8","./_is_native_function":"h9W9g","./_get_prototype_of":"eJ2fZ","./_set_prototype_of":"2zNfa"}],"1EZd8":[function(e,t,r){"use strict";Object.defineProperty(r,"__esModule",{value:!0}),r.default=function(e,t,r){return o.apply(null,arguments)};var n,a=(n=e("./_set_prototype_of"))&&n.__esModule?n:{default:n};function i(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}function o(e,t,r){return(o=i()?Reflect.construct:function(e,t,r){var n=[null];n.push.apply(n,t);var i=new(Function.bind.apply(e,n));return r&&a.default(i,r.prototype),i}).apply(null,arguments)}},{"./_set_prototype_of":"2zNfa"}],h9W9g:[function(e,t,r){"use strict";Object.defineProperty(r,"__esModule",{value:!0}),r.default=function(e){return-1!==Function.toString.call(e).indexOf("[native code]")}},{}],"9CEZ1":[function(e,t,r){var n=e("@parcel/transformer-js/src/esmodule-helpers.js");n.defineInteropFlag(r),n.export(r,"LogLevel",(function(){return a})),n.export(r,"Logger",(function(){return _})),n.export(r,"setLogLevel",(function(){return k})),n.export(r,"setUserLogHandler",(function(){return w}));var a,i,o=e("@swc/helpers/lib/_class_call_check.js"),u=n.interopDefault(o),s=e("@swc/helpers/lib/_create_class.js"),c=n.interopDefault(s),l=e("@swc/helpers/lib/_define_property.js"),f=n.interopDefault(l),d=e("@swc/helpers/lib/_to_consumable_array.js"),p=n.interopDefault(d),h=[];(i=a||(a={}))[i.DEBUG=0]="DEBUG",i[i.VERBOSE=1]="VERBOSE",i[i.INFO=2]="INFO",i[i.WARN=3]="WARN",i[i.ERROR=4]="ERROR",i[i.SILENT=5]="SILENT";var v,m={debug:a.DEBUG,verbose:a.VERBOSE,info:a.INFO,warn:a.WARN,error:a.ERROR,silent:a.SILENT},g=a.INFO,y=(v={},(0,f.default)(v,a.DEBUG,"log"),(0,f.default)(v,a.VERBOSE,"log"),(0,f.default)(v,a.INFO,"info"),(0,f.default)(v,a.WARN,"warn"),(0,f.default)(v,a.ERROR,"error"),v),b=function(e,t){for(var r=arguments.length,n=new Array(r>2?r-2:0),a=2;a<r;a++)n[a-2]=arguments[a];var i;if(!(t<e.logLevel)){var o=(new Date).toISOString(),u=y[t];if(!u)throw new Error("Attempted to log a message with an invalid logType (value: ".concat(t,")"));(i=console)[u].apply(i,["[".concat(o,"]  ").concat(e.name,":")].concat((0,p.default)(n)))}},_=function(){"use strict";function e(t){(0,u.default)(this,e),this.name=t,this._logLevel=g,this._logHandler=b,this._userLogHandler=null,h.push(this)}return(0,c.default)(e,[{key:"logLevel",get:function(){return this._logLevel},set:function(e){if(!(e in a))throw new TypeError('Invalid value "'.concat(e,'" assigned to `logLevel`'));this._logLevel=e}},{key:"setLogLevel",value:function(e){this._logLevel="string"==typeof e?m[e]:e}},{key:"logHandler",get:function(){return this._logHandler},set:function(e){if("function"!=typeof e)throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}},{key:"userLogHandler",get:function(){return this._userLogHandler},set:function(e){this._userLogHandler=e}},{key:"debug",value:function(){for(var e=arguments.length,t=new Array(e),r=0;r<e;r++)t[r]=arguments[r];this._userLogHandler&&this._userLogHandler.apply(this,[this,a.DEBUG].concat((0,p.default)(t))),this._logHandler.apply(this,[this,a.DEBUG].concat((0,p.default)(t)))}},{key:"log",value:function(){for(var e=arguments.length,t=new Array(e),r=0;r<e;r++)t[r]=arguments[r];this._userLogHandler&&this._userLogHandler.apply(this,[this,a.VERBOSE].concat((0,p.default)(t))),this._logHandler.apply(this,[this,a.VERBOSE].concat((0,p.default)(t)))}},{key:"info",value:function(){for(var e=arguments.length,t=new Array(e),r=0;r<e;r++)t[r]=arguments[r];this._userLogHandler&&this._userLogHandler.apply(this,[this,a.INFO].concat((0,p.default)(t))),this._logHandler.apply(this,[this,a.INFO].concat((0,p.default)(t)))}},{key:"warn",value:function(){for(var e=arguments.length,t=new Array(e),r=0;r<e;r++)t[r]=arguments[r];this._userLogHandler&&this._userLogHandler.apply(this,[this,a.WARN].concat((0,p.default)(t))),this._logHandler.apply(this,[this,a.WARN].concat((0,p.default)(t)))}},{key:"error",value:function(){for(var e=arguments.length,t=new Array(e),r=0;r<e;r++)t[r]=arguments[r];this._userLogHandler&&this._userLogHandler.apply(this,[this,a.ERROR].concat((0,p.default)(t))),this._logHandler.apply(this,[this,a.ERROR].concat((0,p.default)(t)))}}]),e}();function k(e){h.forEach((function(t){t.setLogLevel(e)}))}function w(e,t){var r=!0,n=!1,i=void 0;try{for(var o,u=h[Symbol.iterator]();!(r=(o=u.next()).done);r=!0){var s=o.value,c=null;t&&t.level&&(c=m[t.level]),s.userLogHandler=null===e?null:function(t,r){for(var n=arguments.length,i=new Array(n>2?n-2:0),o=2;o<n;o++)i[o-2]=arguments[o];var u=i.map((function(e){if(null==e)return null;if("string"==typeof e)return e;if("number"==typeof e||"boolean"==typeof e)return e.toString();if(e instanceof Error)return e.message;try{return JSON.stringify(e)}catch(e){return null}})).filter((function(e){return e})).join(" ");r>=(null!=c?c:t.logLevel)&&e({level:a[r].toLowerCase(),message:u,args:i,type:t.name})}}}catch(e){n=!0,i=e}finally{try{r||null==u.return||u.return()}finally{if(n)throw i}}}},{"@swc/helpers/lib/_class_call_check.js":"bhoK3","@swc/helpers/lib/_create_class.js":"gwn5H","@swc/helpers/lib/_define_property.js":"ir6l0","@swc/helpers/lib/_to_consumable_array.js":"lNLC6","@parcel/transformer-js/src/esmodule-helpers.js":"jiucr"}],kNCfo:[function(e,t,r){var n=e("@parcel/transformer-js/src/esmodule-helpers.js");n.defineInteropFlag(r),n.export(r,"unwrap",(function(){return d.u})),n.export(r,"wrap",(function(){return d.w})),n.export(r,"deleteDB",(function(){return h})),n.export(r,"openDB",(function(){return p}));var a=e("@swc/helpers/lib/_async_to_generator.js"),i=n.interopDefault(a),o=e("@swc/helpers/lib/_object_spread.js"),u=n.interopDefault(o),s=e("@swc/helpers/lib/_to_consumable_array.js"),c=n.interopDefault(s),l=e("regenerator-runtime"),f=n.interopDefault(l),d=e("./wrap-idb-value.js");function p(e,t){var r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{},n=r.blocked,a=r.upgrade,i=r.blocking,o=r.terminated,u=indexedDB.open(e,t),s=(0,d.w)(u);return a&&u.addEventListener("upgradeneeded",(function(e){a((0,d.w)(u.result),e.oldVersion,e.newVersion,(0,d.w)(u.transaction))})),n&&u.addEventListener("blocked",(function(){return n()})),s.then((function(e){o&&e.addEventListener("close",(function(){return o()})),i&&e.addEventListener("versionchange",(function(){return i()}))})).catch((function(){})),s}function h(e){var t=(arguments.length>1&&void 0!==arguments[1]?arguments[1]:{}).blocked,r=indexedDB.deleteDatabase(e);return t&&r.addEventListener("blocked",(function(){return t()})),(0,d.w)(r).then((function(){}))}var v=["get","getKey","getAll","getAllKeys","count"],m=["put","add","delete","clear"],g=new Map;function y(e,t){if(e instanceof IDBDatabase&&!(t in e)&&"string"==typeof t){if(g.get(t))return g.get(t);var r=t.replace(/FromIndex$/,""),n=t!==r,a=m.includes(r);if(r in(n?IDBIndex:IDBObjectStore).prototype&&(a||v.includes(r))){var o,u=(o=(0,i.default)(f.default.mark((function e(t){var i,o,u,s,l,d,p=arguments;return f.default.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:for(i=p.length,o=new Array(i>1?i-1:0),u=1;u<i;u++)o[u-1]=p[u];return l=this.transaction(t,a?"readwrite":"readonly"),d=l.store,n&&(d=d.index(o.shift())),e.next=7,Promise.all([(s=d)[r].apply(s,(0,c.default)(o)),a&&l.done]);case 7:return e.abrupt("return",e.sent[0]);case 8:case"end":return e.stop()}}),e,this)}))),function(e){return o.apply(this,arguments)});return g.set(t,u),u}}}(0,d.r)((function(e){return(0,u.default)({},e,{get:function(t,r,n){return y(t,r)||e.get(t,r,n)},has:function(t,r){return!!y(t,r)||e.has(t,r)}})}))},{"@swc/helpers/lib/_async_to_generator.js":"9wsRk","@swc/helpers/lib/_object_spread.js":"2e9Yn","@swc/helpers/lib/_to_consumable_array.js":"lNLC6","regenerator-runtime":"3PvxL","./wrap-idb-value.js":"isjyS","@parcel/transformer-js/src/esmodule-helpers.js":"jiucr"}],"2e9Yn":[function(e,t,r){"use strict";Object.defineProperty(r,"__esModule",{value:!0}),r.default=function(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{},n=Object.keys(r);"function"==typeof Object.getOwnPropertySymbols&&(n=n.concat(Object.getOwnPropertySymbols(r).filter((function(e){return Object.getOwnPropertyDescriptor(r,e).enumerable})))),n.forEach((function(t){a.default(e,t,r[t])}))}return e};var n,a=(n=e("./_define_property"))&&n.__esModule?n:{default:n}},{"./_define_property":"ir6l0"}],isjyS:[function(e,t,r){var n=e("@parcel/transformer-js/src/esmodule-helpers.js");n.defineInteropFlag(r),n.export(r,"a",(function(){return p})),n.export(r,"i",(function(){return s})),n.export(r,"r",(function(){return v})),n.export(r,"u",(function(){return b})),n.export(r,"w",(function(){return y}));var a,i,o=e("@swc/helpers/lib/_to_consumable_array.js"),u=n.interopDefault(o),s=function(e,t){return t.some((function(t){return e instanceof t}))};var c=new WeakMap,l=new WeakMap,f=new WeakMap,d=new WeakMap,p=new WeakMap;var h={get:function(e,t,r){if(e instanceof IDBTransaction){if("done"===t)return l.get(e);if("objectStoreNames"===t)return e.objectStoreNames||f.get(e);if("store"===t)return r.objectStoreNames[1]?void 0:r.objectStore(r.objectStoreNames[0])}return y(e[t])},set:function(e,t,r){return e[t]=r,!0},has:function(e,t){return e instanceof IDBTransaction&&("done"===t||"store"===t)||t in e}};function v(e){h=e(h)}function m(e){return e!==IDBDatabase.prototype.transaction||"objectStoreNames"in IDBTransaction.prototype?(i||(i=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])).includes(e)?function(){for(var t=arguments.length,r=new Array(t),n=0;n<t;n++)r[n]=arguments[n];return e.apply(b(this),r),y(c.get(this))}:function(){for(var t=arguments.length,r=new Array(t),n=0;n<t;n++)r[n]=arguments[n];return y(e.apply(b(this),r))}:function(t){for(var r=arguments.length,n=new Array(r>1?r-1:0),a=1;a<r;a++)n[a-1]=arguments[a];var i,o=(i=e).call.apply(i,[b(this),t].concat((0,u.default)(n)));return f.set(o,t.sort?t.sort():[t]),y(o)}}function g(e){return"function"==typeof e?m(e):(e instanceof IDBTransaction&&function(e){if(!l.has(e)){var t=new Promise((function(t,r){var n=function(){e.removeEventListener("complete",a),e.removeEventListener("error",i),e.removeEventListener("abort",i)},a=function(){t(),n()},i=function(){r(e.error||new DOMException("AbortError","AbortError")),n()};e.addEventListener("complete",a),e.addEventListener("error",i),e.addEventListener("abort",i)}));l.set(e,t)}}(e),s(e,a||(a=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction]))?new Proxy(e,h):e)}function y(e){if(e instanceof IDBRequest)return t=e,(r=new Promise((function(e,r){var n=function(){t.removeEventListener("success",a),t.removeEventListener("error",i)},a=function(){e(y(t.result)),n()},i=function(){r(t.error),n()};t.addEventListener("success",a),t.addEventListener("error",i)}))).then((function(e){e instanceof IDBCursor&&c.set(e,t)})).catch((function(){})),p.set(r,t),r;var t,r;if(d.has(e))return d.get(e);var n=g(e);return n!==e&&(d.set(e,n),p.set(n,e)),n}var b=function(e){return p.get(e)}},{"@swc/helpers/lib/_to_consumable_array.js":"lNLC6","@parcel/transformer-js/src/esmodule-helpers.js":"jiucr"}],g6w4l:[function(e,t,r){var n=e("@parcel/transformer-js/src/esmodule-helpers.js");n.defineInteropFlag(r);var a=e("@firebase/auth");n.exportAll(a,r)},{"@firebase/auth":"epKsT","@parcel/transformer-js/src/esmodule-helpers.js":"jiucr"}],epKsT:[function(e,t,r){var n=e("@parcel/transformer-js/src/esmodule-helpers.js");n.defineInteropFlag(r),n.export(r,"ActionCodeOperation",(function(){return a.A})),n.export(r,"ActionCodeURL",(function(){return a.ad})),n.export(r,"AuthCredential",(function(){return a.H})),n.export(r,"AuthErrorCodes",(function(){return a.D})),n.export(r,"EmailAuthCredential",(function(){return a.I})),n.export(r,"EmailAuthProvider",(function(){return a.M})),n.export(r,"FacebookAuthProvider",(function(){return a.N})),n.export(r,"FactorId",(function(){return a.F})),n.export(r,"GithubAuthProvider",(function(){return a.T})),n.export(r,"GoogleAuthProvider",(function(){return a.Q})),n.export(r,"OAuthCredential",(function(){return a.J})),n.export(r,"OAuthProvider",(function(){return a.U})),n.export(r,"OperationType",(function(){return a.O})),n.export(r,"PhoneAuthCredential",(function(){return a.K})),n.export(r,"PhoneAuthProvider",(function(){return a.P})),n.export(r,"PhoneMultiFactorGenerator",(function(){return a.m})),n.export(r,"ProviderId",(function(){return a.o})),n.export(r,"RecaptchaVerifier",(function(){return a.R})),n.export(r,"SAMLAuthProvider",(function(){return a.V})),n.export(r,"SignInMethod",(function(){return a.S})),n.export(r,"TwitterAuthProvider",(function(){return a.W})),n.export(r,"applyActionCode",(function(){return a.a2})),n.export(r,"beforeAuthStateChanged",(function(){return a.t})),n.export(r,"browserLocalPersistence",(function(){return a.b})),n.export(r,"browserPopupRedirectResolver",(function(){return a.k})),n.export(r,"browserSessionPersistence",(function(){return a.a})),n.export(r,"checkActionCode",(function(){return a.a3})),n.export(r,"confirmPasswordReset",(function(){return a.a1})),n.export(r,"connectAuthEmulator",(function(){return a.G})),n.export(r,"createUserWithEmailAndPassword",(function(){return a.a5})),n.export(r,"debugErrorMap",(function(){return a.B})),n.export(r,"deleteUser",(function(){return a.z})),n.export(r,"fetchSignInMethodsForEmail",(function(){return a.aa})),n.export(r,"getAdditionalUserInfo",(function(){return a.al})),n.export(r,"getAuth",(function(){return a.n})),n.export(r,"getIdToken",(function(){return a.ai})),n.export(r,"getIdTokenResult",(function(){return a.aj})),n.export(r,"getMultiFactorResolver",(function(){return a.an})),n.export(r,"getRedirectResult",(function(){return a.j})),n.export(r,"inMemoryPersistence",(function(){return a.L})),n.export(r,"indexedDBLocalPersistence",(function(){return a.i})),n.export(r,"initializeAuth",(function(){return a.E})),n.export(r,"isSignInWithEmailLink",(function(){return a.a8})),n.export(r,"linkWithCredential",(function(){return a.Z})),n.export(r,"linkWithPhoneNumber",(function(){return a.l})),n.export(r,"linkWithPopup",(function(){return a.d})),n.export(r,"linkWithRedirect",(function(){return a.g})),n.export(r,"multiFactor",(function(){return a.ao})),n.export(r,"onAuthStateChanged",(function(){return a.v})),n.export(r,"onIdTokenChanged",(function(){return a.q})),n.export(r,"parseActionCodeURL",(function(){return a.ae})),n.export(r,"prodErrorMap",(function(){return a.C})),n.export(r,"reauthenticateWithCredential",(function(){return a._})),n.export(r,"reauthenticateWithPhoneNumber",(function(){return a.r})),n.export(r,"reauthenticateWithPopup",(function(){return a.e})),n.export(r,"reauthenticateWithRedirect",(function(){return a.h})),n.export(r,"reload",(function(){return a.am})),n.export(r,"sendEmailVerification",(function(){return a.ab})),n.export(r,"sendPasswordResetEmail",(function(){return a.a0})),n.export(r,"sendSignInLinkToEmail",(function(){return a.a7})),n.export(r,"setPersistence",(function(){return a.p})),n.export(r,"signInAnonymously",(function(){return a.X})),n.export(r,"signInWithCredential",(function(){return a.Y})),n.export(r,"signInWithCustomToken",(function(){return a.$})),n.export(r,"signInWithEmailAndPassword",(function(){return a.a6})),n.export(r,"signInWithEmailLink",(function(){return a.a9})),n.export(r,"signInWithPhoneNumber",(function(){return a.s})),n.export(r,"signInWithPopup",(function(){return a.c})),n.export(r,"signInWithRedirect",(function(){return a.f})),n.export(r,"signOut",(function(){return a.y})),n.export(r,"unlink",(function(){return a.ak})),n.export(r,"updateCurrentUser",(function(){return a.x})),n.export(r,"updateEmail",(function(){return a.ag})),n.export(r,"updatePassword",(function(){return a.ah})),n.export(r,"updatePhoneNumber",(function(){return a.u})),n.export(r,"updateProfile",(function(){return a.af})),n.export(r,"useDeviceLanguage",(function(){return a.w})),n.export(r,"verifyBeforeUpdateEmail",(function(){return a.ac})),n.export(r,"verifyPasswordResetCode",(function(){return a.a4}));e("@firebase/util"),e("@firebase/app"),e("tslib"),e("@firebase/logger"),e("@firebase/component");var a=e("./index-90ebcfae.js")},{"@firebase/util":"3o5x8","@firebase/app":"6ftlq",tslib:"b4wpY","@firebase/logger":"9CEZ1","@firebase/component":"2B1ci","./index-90ebcfae.js":"ay5Q2","@parcel/transformer-js/src/esmodule-helpers.js":"jiucr"}],b4wpY:[function(e,t,r){var n=e("@parcel/transformer-js/src/esmodule-helpers.js");n.defineInteropFlag(r),n.export(r,"__extends",(function(){return i})),n.export(r,"__assign",(function(){return o})),n.export(r,"__rest",(function(){return u})),n.export(r,"__decorate",(function(){return s})),n.export(r,"__param",(function(){return c})),n.export(r,"__metadata",(function(){return l})),n.export(r,"__awaiter",(function(){return f})),n.export(r,"__generator",(function(){return d})),n.export(r,"__createBinding",(function(){return p})),n.export(r,"__exportStar",(function(){return h})),n.export(r,"__values",(function(){return v})),n.export(r,"__read",(function(){return m})),n.export(r,"__spread",(function(){return g})),n.export(r,"__spreadArrays",(function(){return y})),n.export(r,"__spreadArray",(function(){return b})),n.export(r,"__await",(function(){return _})),n.export(r,"__asyncGenerator",(function(){return k})),n.export(r,"__asyncDelegator",(function(){return w})),n.export(r,"__asyncValues",(function(){return x})),n.export(r,"__makeTemplateObject",(function(){return I})),n.export(r,"__importStar",(function(){return T})),n.export(r,"__importDefault",(function(){return S})),n.export(r,"__classPrivateFieldGet",(function(){return A})),n.export(r,"__classPrivateFieldSet",(function(){return O})),n.export(r,"__classPrivateFieldIn",(function(){return N}));var a=function(e,t){return(a=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r])})(e,t)};function i(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Class extends value "+String(t)+" is not a constructor or null");function r(){this.constructor=e}a(e,t),e.prototype=null===t?Object.create(t):(r.prototype=t.prototype,new r)}var o=function(){return o=Object.assign||function(e){for(var t,r=1,n=arguments.length;r<n;r++)for(var a in t=arguments[r])Object.prototype.hasOwnProperty.call(t,a)&&(e[a]=t[a]);return e},o.apply(this,arguments)};function u(e,t){var r={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var a=0;for(n=Object.getOwnPropertySymbols(e);a<n.length;a++)t.indexOf(n[a])<0&&Object.prototype.propertyIsEnumerable.call(e,n[a])&&(r[n[a]]=e[n[a]])}return r}function s(e,t,r,n){var a,i=arguments.length,o=i<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,r):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)o=Reflect.decorate(e,t,r,n);else for(var u=e.length-1;u>=0;u--)(a=e[u])&&(o=(i<3?a(o):i>3?a(t,r,o):a(t,r))||o);return i>3&&o&&Object.defineProperty(t,r,o),o}function c(e,t){return function(r,n){t(r,n,e)}}function l(e,t){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,t)}function f(e,t,r,n){return new(r||(r=Promise))((function(a,i){function o(e){try{s(n.next(e))}catch(e){i(e)}}function u(e){try{s(n.throw(e))}catch(e){i(e)}}function s(e){var t;e.done?a(e.value):(t=e.value,t instanceof r?t:new r((function(e){e(t)}))).then(o,u)}s((n=n.apply(e,t||[])).next())}))}function d(e,t){var r,n,a,i,o={label:0,sent:function(){if(1&a[0])throw a[1];return a[1]},trys:[],ops:[]};return i={next:u(0),throw:u(1),return:u(2)},"function"==typeof Symbol&&(i[Symbol.iterator]=function(){return this}),i;function u(i){return function(u){return function(i){if(r)throw new TypeError("Generator is already executing.");for(;o;)try{if(r=1,n&&(a=2&i[0]?n.return:i[0]?n.throw||((a=n.return)&&a.call(n),0):n.next)&&!(a=a.call(n,i[1])).done)return a;switch(n=0,a&&(i=[2&i[0],a.value]),i[0]){case 0:case 1:a=i;break;case 4:return o.label++,{value:i[1],done:!1};case 5:o.label++,n=i[1],i=[0];continue;case 7:i=o.ops.pop(),o.trys.pop();continue;default:if(!(a=o.trys,(a=a.length>0&&a[a.length-1])||6!==i[0]&&2!==i[0])){o=0;continue}if(3===i[0]&&(!a||i[1]>a[0]&&i[1]<a[3])){o.label=i[1];break}if(6===i[0]&&o.label<a[1]){o.label=a[1],a=i;break}if(a&&o.label<a[2]){o.label=a[2],o.ops.push(i);break}a[2]&&o.ops.pop(),o.trys.pop();continue}i=t.call(e,o)}catch(e){i=[6,e],n=0}finally{r=a=0}if(5&i[0])throw i[1];return{value:i[0]?i[1]:void 0,done:!0}}([i,u])}}}var p=Object.create?function(e,t,r,n){void 0===n&&(n=r);var a=Object.getOwnPropertyDescriptor(t,r);a&&!("get"in a?!t.__esModule:a.writable||a.configurable)||(a={enumerable:!0,get:function(){return t[r]}}),Object.defineProperty(e,n,a)}:function(e,t,r,n){void 0===n&&(n=r),e[n]=t[r]};function h(e,t){for(var r in e)"default"===r||Object.prototype.hasOwnProperty.call(t,r)||p(t,e,r)}function v(e){var t="function"==typeof Symbol&&Symbol.iterator,r=t&&e[t],n=0;if(r)return r.call(e);if(e&&"number"==typeof e.length)return{next:function(){return e&&n>=e.length&&(e=void 0),{value:e&&e[n++],done:!e}}};throw new TypeError(t?"Object is not iterable.":"Symbol.iterator is not defined.")}function m(e,t){var r="function"==typeof Symbol&&e[Symbol.iterator];if(!r)return e;var n,a,i=r.call(e),o=[];try{for(;(void 0===t||t-- >0)&&!(n=i.next()).done;)o.push(n.value)}catch(e){a={error:e}}finally{try{n&&!n.done&&(r=i.return)&&r.call(i)}finally{if(a)throw a.error}}return o}function g(){for(var e=[],t=0;t<arguments.length;t++)e=e.concat(m(arguments[t]));return e}function y(){for(var e=0,t=0,r=arguments.length;t<r;t++)e+=arguments[t].length;var n=Array(e),a=0;for(t=0;t<r;t++)for(var i=arguments[t],o=0,u=i.length;o<u;o++,a++)n[a]=i[o];return n}function b(e,t,r){if(r||2===arguments.length)for(var n,a=0,i=t.length;a<i;a++)!n&&a in t||(n||(n=Array.prototype.slice.call(t,0,a)),n[a]=t[a]);return e.concat(n||Array.prototype.slice.call(t))}function _(e){return this instanceof _?(this.v=e,this):new _(e)}function k(e,t,r){if(!Symbol.asyncIterator)throw new TypeError("Symbol.asyncIterator is not defined.");var n,a=r.apply(e,t||[]),i=[];return n={},o("next"),o("throw"),o("return"),n[Symbol.asyncIterator]=function(){return this},n;function o(e){a[e]&&(n[e]=function(t){return new Promise((function(r,n){i.push([e,t,r,n])>1||u(e,t)}))})}function u(e,t){try{(r=a[e](t)).value instanceof _?Promise.resolve(r.value.v).then(s,c):l(i[0][2],r)}catch(e){l(i[0][3],e)}var r}function s(e){u("next",e)}function c(e){u("throw",e)}function l(e,t){e(t),i.shift(),i.length&&u(i[0][0],i[0][1])}}function w(e){var t,r;return t={},n("next"),n("throw",(function(e){throw e})),n("return"),t[Symbol.iterator]=function(){return this},t;function n(n,a){t[n]=e[n]?function(t){return(r=!r)?{value:_(e[n](t)),done:"return"===n}:a?a(t):t}:a}}function x(e){if(!Symbol.asyncIterator)throw new TypeError("Symbol.asyncIterator is not defined.");var t,r=e[Symbol.asyncIterator];return r?r.call(e):(e=v(e),t={},n("next"),n("throw"),n("return"),t[Symbol.asyncIterator]=function(){return this},t);function n(r){t[r]=e[r]&&function(t){return new Promise((function(n,a){(function(e,t,r,n){Promise.resolve(n).then((function(t){e({value:t,done:r})}),t)})(n,a,(t=e[r](t)).done,t.value)}))}}}function I(e,t){return Object.defineProperty?Object.defineProperty(e,"raw",{value:t}):e.raw=t,e}var E=Object.create?function(e,t){Object.defineProperty(e,"default",{enumerable:!0,value:t})}:function(e,t){e.default=t};function T(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var r in e)"default"!==r&&Object.prototype.hasOwnProperty.call(e,r)&&p(t,e,r);return E(t,e),t}function S(e){return e&&e.__esModule?e:{default:e}}function A(e,t,r,n){if("a"===r&&!n)throw new TypeError("Private accessor was defined without a getter");if("function"==typeof t?e!==t||!n:!t.has(e))throw new TypeError("Cannot read private member from an object whose class did not declare it");return"m"===r?n:"a"===r?n.call(e):n?n.value:t.get(e)}function O(e,t,r,n,a){if("m"===n)throw new TypeError("Private method is not writable");if("a"===n&&!a)throw new TypeError("Private accessor was defined without a setter");if("function"==typeof t?e!==t||!a:!t.has(e))throw new TypeError("Cannot write private member to an object whose class did not declare it");return"a"===n?a.call(e,r):a?a.value=r:t.set(e,r),r}function N(e,t){if(null===t||"object"!=typeof t&&"function"!=typeof t)throw new TypeError("Cannot use 'in' operator on non-object");return"function"==typeof e?t===e:e.has(t)}},{"@parcel/transformer-js/src/esmodule-helpers.js":"jiucr"}],ay5Q2:[function(e,t,r){var n=e("@parcel/transformer-js/src/esmodule-helpers.js");n.defineInteropFlag(r),n.export(r,"$",(function(){return Fr})),n.export(r,"A",(function(){return M})),n.export(r,"B",(function(){return F})),n.export(r,"C",(function(){return V})),n.export(r,"D",(function(){return H})),n.export(r,"E",(function(){return te})),n.export(r,"F",(function(){return C})),n.export(r,"G",(function(){return gt})),n.export(r,"H",(function(){return _t})),n.export(r,"I",(function(){return zt})),n.export(r,"J",(function(){return Gt})),n.export(r,"K",(function(){return $t})),n.export(r,"L",(function(){return Xe})),n.export(r,"M",(function(){return rr})),n.export(r,"N",(function(){return or})),n.export(r,"O",(function(){return j})),n.export(r,"P",(function(){return Za})),n.export(r,"Q",(function(){return ur})),n.export(r,"R",(function(){return Ua})),n.export(r,"S",(function(){return L})),n.export(r,"T",(function(){return sr})),n.export(r,"U",(function(){return ir})),n.export(r,"V",(function(){return lr})),n.export(r,"W",(function(){return fr})),n.export(r,"X",(function(){return mr})),n.export(r,"Y",(function(){return Rr})),n.export(r,"Z",(function(){return Cr})),n.export(r,"_",(function(){return Lr})),n.export(r,"a",(function(){return $n})),n.export(r,"a0",(function(){return Br})),n.export(r,"a1",(function(){return Gr})),n.export(r,"a2",(function(){return Jr})),n.export(r,"a3",(function(){return Xr})),n.export(r,"a4",(function(){return Qr})),n.export(r,"a5",(function(){return en})),n.export(r,"a6",(function(){return rn})),n.export(r,"a7",(function(){return nn})),n.export(r,"a8",(function(){return on})),n.export(r,"a9",(function(){return un})),n.export(r,"aA",(function(){return Li})),n.export(r,"aB",(function(){return Ri})),n.export(r,"aC",(function(){return _i})),n.export(r,"aD",(function(){return bi})),n.export(r,"aE",(function(){return vt})),n.export(r,"aF",(function(){return Je})),n.export(r,"aG",(function(){return ht})),n.export(r,"aH",(function(){return dt})),n.export(r,"aI",(function(){return ra})),n.export(r,"aJ",(function(){return no})),n.export(r,"aK",(function(){return se})),n.export(r,"aL",(function(){return cr})),n.export(r,"aa",(function(){return fn})),n.export(r,"ab",(function(){return pn})),n.export(r,"ac",(function(){return vn})),n.export(r,"ad",(function(){return er})),n.export(r,"ae",(function(){return tr})),n.export(r,"af",(function(){return bn})),n.export(r,"ag",(function(){return kn})),n.export(r,"ah",(function(){return wn})),n.export(r,"ai",(function(){return Ae})),n.export(r,"aj",(function(){return Oe})),n.export(r,"ak",(function(){return kr})),n.export(r,"al",(function(){return Rn})),n.export(r,"am",(function(){return Ve})),n.export(r,"an",(function(){return zn})),n.export(r,"ao",(function(){return Kn})),n.export(r,"ap",(function(){return st})),n.export(r,"aq",(function(){return Q})),n.export(r,"ar",(function(){return ut})),n.export(r,"as",(function(){return at})),n.export(r,"at",(function(){return W})),n.export(r,"au",(function(){return so})),n.export(r,"av",(function(){return Ui})),n.export(r,"aw",(function(){return G})),n.export(r,"ax",(function(){return X})),n.export(r,"ay",(function(){return ee})),n.export(r,"az",(function(){return Ze})),n.export(r,"b",(function(){return Zn})),n.export(r,"c",(function(){return oi})),n.export(r,"d",(function(){return li})),n.export(r,"e",(function(){return si})),n.export(r,"f",(function(){return xi})),n.export(r,"g",(function(){return Si})),n.export(r,"h",(function(){return Ei})),n.export(r,"i",(function(){return ka})),n.export(r,"j",(function(){return Oi})),n.export(r,"k",(function(){return fo})),n.export(r,"l",(function(){return za})),n.export(r,"m",(function(){return ho})),n.export(r,"n",(function(){return bo})),n.export(r,"o",(function(){return P})),n.export(r,"p",(function(){return Dn})),n.export(r,"q",(function(){return Cn})),n.export(r,"r",(function(){return Wa})),n.export(r,"s",(function(){return qa})),n.export(r,"t",(function(){return Pn})),n.export(r,"u",(function(){return Ya})),n.export(r,"v",(function(){return Ln})),n.export(r,"w",(function(){return jn})),n.export(r,"x",(function(){return Mn})),n.export(r,"y",(function(){return Un})),n.export(r,"z",(function(){return Fn}));var a=e("@swc/helpers/lib/_assert_this_initialized.js"),i=n.interopDefault(a),o=e("@swc/helpers/lib/_async_to_generator.js"),u=n.interopDefault(o),s=e("@swc/helpers/lib/_class_call_check.js"),c=n.interopDefault(s),l=e("@swc/helpers/lib/_create_class.js"),f=n.interopDefault(l),d=e("@swc/helpers/lib/_define_property.js"),p=n.interopDefault(d),h=e("@swc/helpers/lib/_get.js"),v=n.interopDefault(h),m=e("@swc/helpers/lib/_get_prototype_of.js"),g=n.interopDefault(m),y=e("@swc/helpers/lib/_inherits.js"),b=n.interopDefault(y),_=e("@swc/helpers/lib/_sliced_to_array.js"),k=n.interopDefault(_),w=e("@swc/helpers/lib/_to_consumable_array.js"),x=n.interopDefault(w),I=e("@swc/helpers/lib/_create_super.js"),E=n.interopDefault(I),T=e("regenerator-runtime"),S=n.interopDefault(T),A=e("@firebase/util"),O=e("@firebase/app"),N=e("tslib"),R=e("@firebase/logger"),D=e("@firebase/component"),C={PHONE:"phone"},P={FACEBOOK:"facebook.com",GITHUB:"github.com",GOOGLE:"google.com",PASSWORD:"password",PHONE:"phone",TWITTER:"twitter.com"},L={EMAIL_LINK:"emailLink",EMAIL_PASSWORD:"password",FACEBOOK:"facebook.com",GITHUB:"github.com",GOOGLE:"google.com",PHONE:"phone",TWITTER:"twitter.com"},j={LINK:"link",REAUTHENTICATE:"reauthenticate",SIGN_IN:"signIn"},M={EMAIL_SIGNIN:"EMAIL_SIGNIN",PASSWORD_RESET:"PASSWORD_RESET",RECOVER_EMAIL:"RECOVER_EMAIL",REVERT_SECOND_FACTOR_ADDITION:"REVERT_SECOND_FACTOR_ADDITION",VERIFY_AND_CHANGE_EMAIL:"VERIFY_AND_CHANGE_EMAIL",VERIFY_EMAIL:"VERIFY_EMAIL"};function U(){return(0,p.default)({},"dependent-sdk-initialized-before-auth","Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK.")}var F=
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function(){var e;return e={},(0,p.default)(e,"admin-restricted-operation","This operation is restricted to administrators only."),(0,p.default)(e,"argument-error",""),(0,p.default)(e,"app-not-authorized","This app, identified by the domain where it's hosted, is not authorized to use Firebase Authentication with the provided API key. Review your key configuration in the Google API console."),(0,p.default)(e,"app-not-installed","The requested mobile application corresponding to the identifier (Android package name or iOS bundle ID) provided is not installed on this device."),(0,p.default)(e,"captcha-check-failed","The reCAPTCHA response token provided is either invalid, expired, already used or the domain associated with it does not match the list of whitelisted domains."),(0,p.default)(e,"code-expired","The SMS code has expired. Please re-send the verification code to try again."),(0,p.default)(e,"cordova-not-ready","Cordova framework is not ready."),(0,p.default)(e,"cors-unsupported","This browser is not supported."),(0,p.default)(e,"credential-already-in-use","This credential is already associated with a different user account."),(0,p.default)(e,"custom-token-mismatch","The custom token corresponds to a different audience."),(0,p.default)(e,"requires-recent-login","This operation is sensitive and requires recent authentication. Log in again before retrying this request."),(0,p.default)(e,"dependent-sdk-initialized-before-auth","Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."),(0,p.default)(e,"dynamic-link-not-activated","Please activate Dynamic Links in the Firebase Console and agree to the terms and conditions."),(0,p.default)(e,"email-change-needs-verification","Multi-factor users must always have a verified email."),(0,p.default)(e,"email-already-in-use","The email address is already in use by another account."),(0,p.default)(e,"emulator-config-failed",'Auth instance has already been used to make a network call. Auth can no longer be configured to use the emulator. Try calling "connectAuthEmulator()" sooner.'),(0,p.default)(e,"expired-action-code","The action code has expired."),(0,p.default)(e,"cancelled-popup-request","This operation has been cancelled due to another conflicting popup being opened."),(0,p.default)(e,"internal-error","An internal AuthError has occurred."),(0,p.default)(e,"invalid-app-credential","The phone verification request contains an invalid application verifier. The reCAPTCHA token response is either invalid or expired."),(0,p.default)(e,"invalid-app-id","The mobile app identifier is not registed for the current project."),(0,p.default)(e,"invalid-user-token","This user's credential isn't valid for this project. This can happen if the user's token has been tampered with, or if the user isn't for the project associated with this API key."),(0,p.default)(e,"invalid-auth-event","An internal AuthError has occurred."),(0,p.default)(e,"invalid-verification-code","The SMS verification code used to create the phone auth credential is invalid. Please resend the verification code sms and be sure to use the verification code provided by the user."),(0,p.default)(e,"invalid-continue-uri","The continue URL provided in the request is invalid."),(0,p.default)(e,"invalid-cordova-configuration","The following Cordova plugins must be installed to enable OAuth sign-in: cordova-plugin-buildinfo, cordova-universal-links-plugin, cordova-plugin-browsertab, cordova-plugin-inappbrowser and cordova-plugin-customurlscheme."),(0,p.default)(e,"invalid-custom-token","The custom token format is incorrect. Please check the documentation."),(0,p.default)(e,"invalid-dynamic-link-domain","The provided dynamic link domain is not configured or authorized for the current project."),(0,p.default)(e,"invalid-email","The email address is badly formatted."),(0,p.default)(e,"invalid-emulator-scheme","Emulator URL must start with a valid scheme (http:// or https://)."),(0,p.default)(e,"invalid-api-key","Your API key is invalid, please check you have copied it correctly."),(0,p.default)(e,"invalid-cert-hash","The SHA-1 certificate hash provided is invalid."),(0,p.default)(e,"invalid-credential","The supplied auth credential is malformed or has expired."),(0,p.default)(e,"invalid-message-payload","The email template corresponding to this action contains invalid characters in its message. Please fix by going to the Auth email templates section in the Firebase Console."),(0,p.default)(e,"invalid-multi-factor-session","The request does not contain a valid proof of first factor successful sign-in."),(0,p.default)(e,"invalid-oauth-provider","EmailAuthProvider is not supported for this operation. This operation only supports OAuth providers."),(0,p.default)(e,"invalid-oauth-client-id","The OAuth client ID provided is either invalid or does not match the specified API key."),(0,p.default)(e,"unauthorized-domain","This domain is not authorized for OAuth operations for your Firebase project. Edit the list of authorized domains from the Firebase console."),(0,p.default)(e,"invalid-action-code","The action code is invalid. This can happen if the code is malformed, expired, or has already been used."),(0,p.default)(e,"wrong-password","The password is invalid or the user does not have a password."),(0,p.default)(e,"invalid-persistence-type","The specified persistence type is invalid. It can only be local, session or none."),(0,p.default)(e,"invalid-phone-number","The format of the phone number provided is incorrect. Please enter the phone number in a format that can be parsed into E.164 format. E.164 phone numbers are written in the format [+][country code][subscriber number including area code]."),(0,p.default)(e,"invalid-provider-id","The specified provider ID is invalid."),(0,p.default)(e,"invalid-recipient-email","The email corresponding to this action failed to send as the provided recipient email address is invalid."),(0,p.default)(e,"invalid-sender","The email template corresponding to this action contains an invalid sender email or name. Please fix by going to the Auth email templates section in the Firebase Console."),(0,p.default)(e,"invalid-verification-id","The verification ID used to create the phone auth credential is invalid."),(0,p.default)(e,"invalid-tenant-id","The Auth instance's tenant ID is invalid."),(0,p.default)(e,"login-blocked","Login blocked by user-provided method: {$originalMessage}"),(0,p.default)(e,"missing-android-pkg-name","An Android Package Name must be provided if the Android App is required to be installed."),(0,p.default)(e,"auth-domain-config-required","Be sure to include authDomain when calling firebase.initializeApp(), by following the instructions in the Firebase console."),(0,p.default)(e,"missing-app-credential","The phone verification request is missing an application verifier assertion. A reCAPTCHA response token needs to be provided."),(0,p.default)(e,"missing-verification-code","The phone auth credential was created with an empty SMS verification code."),(0,p.default)(e,"missing-continue-uri","A continue URL must be provided in the request."),(0,p.default)(e,"missing-iframe-start","An internal AuthError has occurred."),(0,p.default)(e,"missing-ios-bundle-id","An iOS Bundle ID must be provided if an App Store ID is provided."),(0,p.default)(e,"missing-or-invalid-nonce","The request does not contain a valid nonce. This can occur if the SHA-256 hash of the provided raw nonce does not match the hashed nonce in the ID token payload."),(0,p.default)(e,"missing-multi-factor-info","No second factor identifier is provided."),(0,p.default)(e,"missing-multi-factor-session","The request is missing proof of first factor successful sign-in."),(0,p.default)(e,"missing-phone-number","To send verification codes, provide a phone number for the recipient."),(0,p.default)(e,"missing-verification-id","The phone auth credential was created with an empty verification ID."),(0,p.default)(e,"app-deleted","This instance of FirebaseApp has been deleted."),(0,p.default)(e,"multi-factor-info-not-found","The user does not have a second factor matching the identifier provided."),(0,p.default)(e,"multi-factor-auth-required","Proof of ownership of a second factor is required to complete sign-in."),(0,p.default)(e,"account-exists-with-different-credential","An account already exists with the same email address but different sign-in credentials. Sign in using a provider associated with this email address."),(0,p.default)(e,"network-request-failed","A network AuthError (such as timeout, interrupted connection or unreachable host) has occurred."),(0,p.default)(e,"no-auth-event","An internal AuthError has occurred."),(0,p.default)(e,"no-such-provider","User was not linked to an account with the given provider."),(0,p.default)(e,"null-user","A null user object was provided as the argument for an operation which requires a non-null user object."),(0,p.default)(e,"operation-not-allowed","The given sign-in provider is disabled for this Firebase project. Enable it in the Firebase console, under the sign-in method tab of the Auth section."),(0,p.default)(e,"operation-not-supported-in-this-environment",'This operation is not supported in the environment this application is running on. "location.protocol" must be http, https or chrome-extension and web storage must be enabled.'),(0,p.default)(e,"popup-blocked","Unable to establish a connection with the popup. It may have been blocked by the browser."),(0,p.default)(e,"popup-closed-by-user","The popup has been closed by the user before finalizing the operation."),(0,p.default)(e,"provider-already-linked","User can only be linked to one identity for the given provider."),(0,p.default)(e,"quota-exceeded","The project's quota for this operation has been exceeded."),(0,p.default)(e,"redirect-cancelled-by-user","The redirect operation has been cancelled by the user before finalizing."),(0,p.default)(e,"redirect-operation-pending","A redirect sign-in operation is already pending."),(0,p.default)(e,"rejected-credential","The request contains malformed or mismatching credentials."),(0,p.default)(e,"second-factor-already-in-use","The second factor is already enrolled on this account."),(0,p.default)(e,"maximum-second-factor-count-exceeded","The maximum allowed number of second factors on a user has been exceeded."),(0,p.default)(e,"tenant-id-mismatch","The provided tenant ID does not match the Auth instance's tenant ID"),(0,p.default)(e,"timeout","The operation has timed out."),(0,p.default)(e,"user-token-expired","The user's credential is no longer valid. The user must sign in again."),(0,p.default)(e,"too-many-requests","We have blocked all requests from this device due to unusual activity. Try again later."),(0,p.default)(e,"unauthorized-continue-uri","The domain of the continue URL is not whitelisted.  Please whitelist the domain in the Firebase console."),(0,p.default)(e,"unsupported-first-factor","Enrolling a second factor or signing in with a multi-factor account requires sign-in with a supported first factor."),(0,p.default)(e,"unsupported-persistence-type","The current environment does not support the specified persistence type."),(0,p.default)(e,"unsupported-tenant-operation","This operation is not supported in a multi-tenant context."),(0,p.default)(e,"unverified-email","The operation requires a verified email."),(0,p.default)(e,"user-cancelled","The user did not grant your application the permissions it requested."),(0,p.default)(e,"user-not-found","There is no user record corresponding to this identifier. The user may have been deleted."),(0,p.default)(e,"user-disabled","The user account has been disabled by an administrator."),(0,p.default)(e,"user-mismatch","The supplied credentials do not correspond to the previously signed in user."),(0,p.default)(e,"user-signed-out",""),(0,p.default)(e,"weak-password","The password must be 6 characters long or more."),(0,p.default)(e,"web-storage-unsupported","This browser is not supported or 3rd party cookies and data may be disabled."),(0,p.default)(e,"already-initialized","initializeAuth() has already been called with different options. To avoid this error, call initializeAuth() with the same options as when it was originally called, or call getAuth() to return the already initialized instance."),e},V=U,q=new(0,A.ErrorFactory)("auth","Firebase",U()),H={ADMIN_ONLY_OPERATION:"auth/admin-restricted-operation",ARGUMENT_ERROR:"auth/argument-error",APP_NOT_AUTHORIZED:"auth/app-not-authorized",APP_NOT_INSTALLED:"auth/app-not-installed",CAPTCHA_CHECK_FAILED:"auth/captcha-check-failed",CODE_EXPIRED:"auth/code-expired",CORDOVA_NOT_READY:"auth/cordova-not-ready",CORS_UNSUPPORTED:"auth/cors-unsupported",CREDENTIAL_ALREADY_IN_USE:"auth/credential-already-in-use",CREDENTIAL_MISMATCH:"auth/custom-token-mismatch",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"auth/requires-recent-login",DEPENDENT_SDK_INIT_BEFORE_AUTH:"auth/dependent-sdk-initialized-before-auth",DYNAMIC_LINK_NOT_ACTIVATED:"auth/dynamic-link-not-activated",EMAIL_CHANGE_NEEDS_VERIFICATION:"auth/email-change-needs-verification",EMAIL_EXISTS:"auth/email-already-in-use",EMULATOR_CONFIG_FAILED:"auth/emulator-config-failed",EXPIRED_OOB_CODE:"auth/expired-action-code",EXPIRED_POPUP_REQUEST:"auth/cancelled-popup-request",INTERNAL_ERROR:"auth/internal-error",INVALID_API_KEY:"auth/invalid-api-key",INVALID_APP_CREDENTIAL:"auth/invalid-app-credential",INVALID_APP_ID:"auth/invalid-app-id",INVALID_AUTH:"auth/invalid-user-token",INVALID_AUTH_EVENT:"auth/invalid-auth-event",INVALID_CERT_HASH:"auth/invalid-cert-hash",INVALID_CODE:"auth/invalid-verification-code",INVALID_CONTINUE_URI:"auth/invalid-continue-uri",INVALID_CORDOVA_CONFIGURATION:"auth/invalid-cordova-configuration",INVALID_CUSTOM_TOKEN:"auth/invalid-custom-token",INVALID_DYNAMIC_LINK_DOMAIN:"auth/invalid-dynamic-link-domain",INVALID_EMAIL:"auth/invalid-email",INVALID_EMULATOR_SCHEME:"auth/invalid-emulator-scheme",INVALID_IDP_RESPONSE:"auth/invalid-credential",INVALID_MESSAGE_PAYLOAD:"auth/invalid-message-payload",INVALID_MFA_SESSION:"auth/invalid-multi-factor-session",INVALID_OAUTH_CLIENT_ID:"auth/invalid-oauth-client-id",INVALID_OAUTH_PROVIDER:"auth/invalid-oauth-provider",INVALID_OOB_CODE:"auth/invalid-action-code",INVALID_ORIGIN:"auth/unauthorized-domain",INVALID_PASSWORD:"auth/wrong-password",INVALID_PERSISTENCE:"auth/invalid-persistence-type",INVALID_PHONE_NUMBER:"auth/invalid-phone-number",INVALID_PROVIDER_ID:"auth/invalid-provider-id",INVALID_RECIPIENT_EMAIL:"auth/invalid-recipient-email",INVALID_SENDER:"auth/invalid-sender",INVALID_SESSION_INFO:"auth/invalid-verification-id",INVALID_TENANT_ID:"auth/invalid-tenant-id",MFA_INFO_NOT_FOUND:"auth/multi-factor-info-not-found",MFA_REQUIRED:"auth/multi-factor-auth-required",MISSING_ANDROID_PACKAGE_NAME:"auth/missing-android-pkg-name",MISSING_APP_CREDENTIAL:"auth/missing-app-credential",MISSING_AUTH_DOMAIN:"auth/auth-domain-config-required",MISSING_CODE:"auth/missing-verification-code",MISSING_CONTINUE_URI:"auth/missing-continue-uri",MISSING_IFRAME_START:"auth/missing-iframe-start",MISSING_IOS_BUNDLE_ID:"auth/missing-ios-bundle-id",MISSING_OR_INVALID_NONCE:"auth/missing-or-invalid-nonce",MISSING_MFA_INFO:"auth/missing-multi-factor-info",MISSING_MFA_SESSION:"auth/missing-multi-factor-session",MISSING_PHONE_NUMBER:"auth/missing-phone-number",MISSING_SESSION_INFO:"auth/missing-verification-id",MODULE_DESTROYED:"auth/app-deleted",NEED_CONFIRMATION:"auth/account-exists-with-different-credential",NETWORK_REQUEST_FAILED:"auth/network-request-failed",NULL_USER:"auth/null-user",NO_AUTH_EVENT:"auth/no-auth-event",NO_SUCH_PROVIDER:"auth/no-such-provider",OPERATION_NOT_ALLOWED:"auth/operation-not-allowed",OPERATION_NOT_SUPPORTED:"auth/operation-not-supported-in-this-environment",POPUP_BLOCKED:"auth/popup-blocked",POPUP_CLOSED_BY_USER:"auth/popup-closed-by-user",PROVIDER_ALREADY_LINKED:"auth/provider-already-linked",QUOTA_EXCEEDED:"auth/quota-exceeded",REDIRECT_CANCELLED_BY_USER:"auth/redirect-cancelled-by-user",REDIRECT_OPERATION_PENDING:"auth/redirect-operation-pending",REJECTED_CREDENTIAL:"auth/rejected-credential",SECOND_FACTOR_ALREADY_ENROLLED:"auth/second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"auth/maximum-second-factor-count-exceeded",TENANT_ID_MISMATCH:"auth/tenant-id-mismatch",TIMEOUT:"auth/timeout",TOKEN_EXPIRED:"auth/user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"auth/too-many-requests",UNAUTHORIZED_DOMAIN:"auth/unauthorized-continue-uri",UNSUPPORTED_FIRST_FACTOR:"auth/unsupported-first-factor",UNSUPPORTED_PERSISTENCE:"auth/unsupported-persistence-type",UNSUPPORTED_TENANT_OPERATION:"auth/unsupported-tenant-operation",UNVERIFIED_EMAIL:"auth/unverified-email",USER_CANCELLED:"auth/user-cancelled",USER_DELETED:"auth/user-not-found",USER_DISABLED:"auth/user-disabled",USER_MISMATCH:"auth/user-mismatch",USER_SIGNED_OUT:"auth/user-signed-out",WEAK_PASSWORD:"auth/weak-password",WEB_STORAGE_UNSUPPORTED:"auth/web-storage-unsupported",ALREADY_INITIALIZED:"auth/already-initialized"},z=new(0,R.Logger)("@firebase/auth");function B(e){for(var t=arguments.length,r=new Array(t>1?t-1:0),n=1;n<t;n++)r[n-1]=arguments[n];var a;z.logLevel<=R.LogLevel.ERROR&&(a=z).error.apply(a,["Auth (".concat(O.SDK_VERSION,"): ").concat(e)].concat((0,x.default)(r)))}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function W(e){for(var t=arguments.length,r=new Array(t>1?t-1:0),n=1;n<t;n++)r[n-1]=arguments[n];throw Y.apply(void 0,[e].concat((0,x.default)(r)))}function G(e){for(var t=arguments.length,r=new Array(t>1?t-1:0),n=1;n<t;n++)r[n-1]=arguments[n];return Y.apply(void 0,[e].concat((0,x.default)(r)))}function K(e,t,r){var n=Object.assign(Object.assign({},V()),(0,p.default)({},t,r));return new(0,A.ErrorFactory)("auth","Firebase",n).create(t,{appName:e.name})}function J(e,t,r){if(!(t instanceof r))throw r.name!==t.constructor.name&&W(e,"argument-error"),K(e,"argument-error","Type of ".concat(t.constructor.name," does not match expected instance.")+"Did you pass a reference from a different Auth SDK?")}function Y(e){for(var t=arguments.length,r=new Array(t>1?t-1:0),n=1;n<t;n++)r[n-1]=arguments[n];var a;if("string"!=typeof e){var i,o=r[0],u=(0,x.default)(r.slice(1));return u[0]&&(u[0].appName=e.name),(i=e._errorFactory).create.apply(i,[o].concat((0,x.default)(u)))}return(a=q).create.apply(a,[e].concat((0,x.default)(r)))}function X(e,t){for(var r=arguments.length,n=new Array(r>2?r-2:0),a=2;a<r;a++)n[a-2]=arguments[a];if(!e)throw Y.apply(void 0,[t].concat((0,x.default)(n)))}function Z(e){var t="INTERNAL ASSERTION FAILED: "+e;throw B(t),new Error(t)}function Q(e,t){e||Z(t)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var $=new Map;function ee(e){Q(e instanceof Function,"Expected a class definition");var t=$.get(e);return t?(Q(t instanceof e,"Instance stored in cache mismatched with class"),t):(t=new e,$.set(e,t),t)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function te(e,t){var r=(0,O._getProvider)(e,"auth");if(r.isInitialized()){var n=r.getImmediate(),a=r.getOptions();if((0,A.deepEqual)(a,null!=t?t:{}))return n;W(n,"already-initialized")}return r.initialize({options:t})}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function re(){var e;return"undefined"!=typeof self&&(null===(e=self.location)||void 0===e?void 0:e.href)||""}function ne(){return"http:"===ae()||"https:"===ae()}function ae(){var e;return"undefined"!=typeof self&&(null===(e=self.location)||void 0===e?void 0:e.protocol)||null}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
var ie=function(){"use strict";function e(t,r){(0,c.default)(this,e),this.shortDelay=t,this.longDelay=r,Q(r>t,"Short delay should be less than long delay!"),this.isMobile=(0,A.isMobileCordova)()||(0,A.isReactNative)()}return(0,f.default)(e,[{key:"get",value:function(){return"undefined"!=typeof navigator&&navigator&&"onLine"in navigator&&"boolean"==typeof navigator.onLine&&(ne()||(0,A.isBrowserExtension)()||"connection"in navigator)&&!navigator.onLine?Math.min(5e3,this.shortDelay):this.isMobile?this.longDelay:this.shortDelay}}]),e}();
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function oe(e,t){Q(e.emulator,"Emulator should always be set here");var r=e.emulator.url;return t?"".concat(r).concat(t.startsWith("/")?t.slice(1):t):r}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var ue,se=function(){"use strict";function e(){(0,c.default)(this,e)}return(0,f.default)(e,null,[{key:"initialize",value:function(e,t,r){this.fetchImpl=e,t&&(this.headersImpl=t),r&&(this.responseImpl=r)}},{key:"fetch",value:function(){return this.fetchImpl?this.fetchImpl:"undefined"!=typeof self&&"fetch"in self?self.fetch:void Z("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}},{key:"headers",value:function(){return this.headersImpl?this.headersImpl:"undefined"!=typeof self&&"Headers"in self?self.Headers:void Z("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}},{key:"response",value:function(){return this.responseImpl?this.responseImpl:"undefined"!=typeof self&&"Response"in self?self.Response:void Z("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}]),e}(),ce=(ue={},(0,p.default)(ue,"CREDENTIAL_MISMATCH","custom-token-mismatch"),(0,p.default)(ue,"MISSING_CUSTOM_TOKEN","internal-error"),(0,p.default)(ue,"INVALID_IDENTIFIER","invalid-email"),(0,p.default)(ue,"MISSING_CONTINUE_URI","internal-error"),(0,p.default)(ue,"INVALID_PASSWORD","wrong-password"),(0,p.default)(ue,"MISSING_PASSWORD","internal-error"),(0,p.default)(ue,"EMAIL_EXISTS","email-already-in-use"),(0,p.default)(ue,"PASSWORD_LOGIN_DISABLED","operation-not-allowed"),(0,p.default)(ue,"INVALID_IDP_RESPONSE","invalid-credential"),(0,p.default)(ue,"INVALID_PENDING_TOKEN","invalid-credential"),(0,p.default)(ue,"FEDERATED_USER_ID_ALREADY_LINKED","credential-already-in-use"),(0,p.default)(ue,"MISSING_REQ_TYPE","internal-error"),(0,p.default)(ue,"EMAIL_NOT_FOUND","user-not-found"),(0,p.default)(ue,"RESET_PASSWORD_EXCEED_LIMIT","too-many-requests"),(0,p.default)(ue,"EXPIRED_OOB_CODE","expired-action-code"),(0,p.default)(ue,"INVALID_OOB_CODE","invalid-action-code"),(0,p.default)(ue,"MISSING_OOB_CODE","internal-error"),(0,p.default)(ue,"CREDENTIAL_TOO_OLD_LOGIN_AGAIN","requires-recent-login"),(0,p.default)(ue,"INVALID_ID_TOKEN","invalid-user-token"),(0,p.default)(ue,"TOKEN_EXPIRED","user-token-expired"),(0,p.default)(ue,"USER_NOT_FOUND","user-token-expired"),(0,p.default)(ue,"TOO_MANY_ATTEMPTS_TRY_LATER","too-many-requests"),(0,p.default)(ue,"INVALID_CODE","invalid-verification-code"),(0,p.default)(ue,"INVALID_SESSION_INFO","invalid-verification-id"),(0,p.default)(ue,"INVALID_TEMPORARY_PROOF","invalid-credential"),(0,p.default)(ue,"MISSING_SESSION_INFO","missing-verification-id"),(0,p.default)(ue,"SESSION_EXPIRED","code-expired"),(0,p.default)(ue,"MISSING_ANDROID_PACKAGE_NAME","missing-android-pkg-name"),(0,p.default)(ue,"UNAUTHORIZED_DOMAIN","unauthorized-continue-uri"),(0,p.default)(ue,"INVALID_OAUTH_CLIENT_ID","invalid-oauth-client-id"),(0,p.default)(ue,"ADMIN_ONLY_OPERATION","admin-restricted-operation"),(0,p.default)(ue,"INVALID_MFA_PENDING_CREDENTIAL","invalid-multi-factor-session"),(0,p.default)(ue,"MFA_ENROLLMENT_NOT_FOUND","multi-factor-info-not-found"),(0,p.default)(ue,"MISSING_MFA_ENROLLMENT_ID","missing-multi-factor-info"),(0,p.default)(ue,"MISSING_MFA_PENDING_CREDENTIAL","missing-multi-factor-session"),(0,p.default)(ue,"SECOND_FACTOR_EXISTS","second-factor-already-in-use"),(0,p.default)(ue,"SECOND_FACTOR_LIMIT_EXCEEDED","maximum-second-factor-count-exceeded"),(0,p.default)(ue,"BLOCKING_FUNCTION_ERROR_RESPONSE","internal-error"),ue),le=new ie(3e4,6e4);function fe(e,t){return e.tenantId&&!t.tenantId?Object.assign(Object.assign({},t),{tenantId:e.tenantId}):t}function de(e,t,r,n){return pe.apply(this,arguments)}function pe(){return pe=(0,u.default)(S.default.mark((function e(t,r,n,a){var i,o=arguments;return S.default.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return i=o.length>4&&void 0!==o[4]?o[4]:{},e.abrupt("return",he(t,i,(0,u.default)(S.default.mark((function e(){var i,o,u,s;return S.default.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return i={},o={},a&&("GET"===r?o=a:i={body:JSON.stringify(a)}),u=(0,A.querystring)(Object.assign({key:t.config.apiKey},o)).slice(1),e.next=6,t._getAdditionalHeaders();case 6:return(s=e.sent)["Content-Type"]="application/json",t.languageCode&&(s["X-Firebase-Locale"]=t.languageCode),e.abrupt("return",se.fetch()(ye(t,t.config.apiHost,n,u),Object.assign({method:r,headers:s,referrerPolicy:"no-referrer"},i)));case 10:case"end":return e.stop()}}),e)})))));case 2:case"end":return e.stop()}}),e)}))),pe.apply(this,arguments)}function he(e,t,r){return ve.apply(this,arguments)}function ve(){return(ve=(0,u.default)(S.default.mark((function e(t,r,n){var a,i,o,u,s,c,l,f,d;return S.default.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t._canInitEmulator=!1,a=Object.assign(Object.assign({},ce),r),e.prev=2,i=new be(t),e.next=6,Promise.race([n(),i.promise]);case 6:return o=e.sent,i.clearNetworkTimeout(),e.next=10,o.json();case 10:if(!("needConfirmation"in(u=e.sent))){e.next=13;break}throw _e(t,"account-exists-with-different-credential",u);case 13:if(!o.ok||"errorMessage"in u){e.next=17;break}return e.abrupt("return",u);case 17:if(s=o.ok?u.errorMessage:u.error.message,c=(0,k.default)(s.split(" : "),2),l=c[0],f=c[1],"FEDERATED_USER_ID_ALREADY_LINKED"!==l){e.next=23;break}throw _e(t,"credential-already-in-use",u);case 23:if("EMAIL_EXISTS"!==l){e.next=27;break}throw _e(t,"email-already-in-use",u);case 27:if("USER_DISABLED"!==l){e.next=29;break}throw _e(t,"user-disabled",u);case 29:if(d=a[l]||l.toLowerCase().replace(/[_\s]+/g,"-"),!f){e.next=34;break}throw K(t,d,f);case 34:W(t,d);case 35:e.next=42;break;case 37:if(e.prev=37,e.t0=e.catch(2),!(e.t0 instanceof A.FirebaseError)){e.next=41;break}throw e.t0;case 41:W(t,"network-request-failed");case 42:case"end":return e.stop()}}),e,null,[[2,37]])})))).apply(this,arguments)}function me(e,t,r,n){return ge.apply(this,arguments)}function ge(){return ge=(0,u.default)(S.default.mark((function e(t,r,n,a){var i,o,u=arguments;return S.default.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return i=u.length>4&&void 0!==u[4]?u[4]:{},e.next=3,de(t,r,n,a,i);case 3:return"mfaPendingCredential"in(o=e.sent)&&W(t,"multi-factor-auth-required",{_serverResponse:o}),e.abrupt("return",o);case 6:case"end":return e.stop()}}),e)}))),ge.apply(this,arguments)}function ye(e,t,r,n){var a="".concat(t).concat(r,"?").concat(n);return e.config.emulator?oe(e.config,a):"".concat(e.config.apiScheme,"://").concat(a)}var be=function(){"use strict";function e(t){var r=this;(0,c.default)(this,e),this.auth=t,this.timer=null,this.promise=new Promise((function(e,t){var n=r;r.timer=setTimeout((function(){return t(G(n.auth,"network-request-failed"))}),le.get())}))}return(0,f.default)(e,[{key:"clearNetworkTimeout",value:function(){clearTimeout(this.timer)}}]),e}();function _e(e,t,r){var n={appName:e.name};r.email&&(n.email=r.email),r.phoneNumber&&(n.phoneNumber=r.phoneNumber);var a=G(e,t,n);return a.customData._tokenResponse=r,a}function ke(e,t){return we.apply(this,arguments)}function we(){return(we=
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
(0,u.default)(S.default.mark((function e(t,r){return S.default.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",de(t,"POST","/v1/accounts:delete",r));case 1:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function xe(e,t){return Ie.apply(this,arguments)}function Ie(){return(Ie=(0,u.default)(S.default.mark((function e(t,r){return S.default.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",de(t,"POST","/v1/accounts:update",r));case 1:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function Ee(e,t){return Te.apply(this,arguments)}function Te(){return(Te=(0,u.default)(S.default.mark((function e(t,r){return S.default.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",de(t,"POST","/v1/accounts:lookup",r));case 1:case"end":return e.stop()}}),e)})))).apply(this,arguments)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Se(e){if(e)try{var t=new Date(Number(e));if(!isNaN(t.getTime()))return t.toUTCString()}catch(e){}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ae(e){var t=arguments.length>1&&void 0!==arguments[1]&&arguments[1];return(0,A.getModularInstance)(e).getIdToken(t)}function Oe(e){return Ne.apply(this,arguments)}function Ne(){return Ne=(0,u.default)(S.default.mark((function e(t){var r,n,a,i,o,u,s=arguments;return S.default.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=s.length>1&&void 0!==s[1]&&s[1],n=(0,A.getModularInstance)(t),e.next=4,n.getIdToken(r);case 4:return a=e.sent,X((i=De(a))&&i.exp&&i.auth_time&&i.iat,n.auth,"internal-error"),o="object"==typeof i.firebase?i.firebase:void 0,u=null==o?void 0:o.sign_in_provider,e.abrupt("return",{claims:i,token:a,authTime:Se(Re(i.auth_time)),issuedAtTime:Se(Re(i.iat)),expirationTime:Se(Re(i.exp)),signInProvider:u||null,signInSecondFactor:(null==o?void 0:o.sign_in_second_factor)||null});case 10:case"end":return e.stop()}}),e)}))),Ne.apply(this,arguments)}function Re(e){return 1e3*Number(e)}function De(e){var t,r=(0,k.default)(e.split("."),3),n=r[0],a=r[1],i=r[2];if(void 0===n||void 0===a||void 0===i)return B("JWT malformed, contained fewer than 3 sections"),null;try{var o=(0,A.base64Decode)(a);return o?JSON.parse(o):(B("Failed to decode base64 JWT payload"),null)}catch(e){return B("Caught error parsing JWT payload as JSON",null===(t=e)||void 0===t?void 0:t.toString()),null}}function Ce(e,t){return Pe.apply(this,arguments)}function Pe(){return Pe=
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
(0,u.default)(S.default.mark((function e(t,r){var n=arguments;return S.default.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!(n.length>2&&void 0!==n[2]&&n[2])){e.next=3;break}return e.abrupt("return",r);case 3:return e.prev=3,e.next=6,r;case 6:return e.abrupt("return",e.sent);case 9:if(e.prev=9,e.t0=e.catch(3),!(e.t0 instanceof A.FirebaseError&&Le(e.t0))){e.next=15;break}if(t.auth.currentUser!==t){e.next=15;break}return e.next=15,t.auth.signOut();case 15:throw e.t0;case 16:case"end":return e.stop()}}),e,null,[[3,9]])}))),Pe.apply(this,arguments)}function Le(e){var t=e.code;return"auth/user-disabled"===t||"auth/user-token-expired"===t}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var je=function(){"use strict";function e(t){(0,c.default)(this,e),this.user=t,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}return(0,f.default)(e,[{key:"_start",value:function(){this.isRunning||(this.isRunning=!0,this.schedule())}},{key:"_stop",value:function(){this.isRunning&&(this.isRunning=!1,null!==this.timerId&&clearTimeout(this.timerId))}},{key:"getInterval",value:function(e){var t;if(e){var r=this.errorBackoff;return this.errorBackoff=Math.min(2*this.errorBackoff,96e4),r}this.errorBackoff=3e4;var n=(null!==(t=this.user.stsTokenManager.expirationTime)&&void 0!==t?t:0)-Date.now()-3e5;return Math.max(0,n)}},{key:"schedule",value:function(){var e=arguments.length>0&&void 0!==arguments[0]&&arguments[0];if(this.isRunning){var t=this.getInterval(e),r=this;this.timerId=setTimeout((0,u.default)(S.default.mark((function e(){return S.default.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,r.iteration();case 2:case"end":return e.stop()}}),e)}))),t)}}},{key:"iteration",value:function(){var e=this;return(0,u.default)(S.default.mark((function t(){var r;return S.default.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=1,t.next=4,e.user.getIdToken(!0);case 4:t.next=10;break;case 6:return t.prev=6,t.t0=t.catch(1),"auth/network-request-failed"===(null===(r=t.t0)||void 0===r?void 0:r.code)&&e.schedule(!0),t.abrupt("return");case 10:e.schedule();case 11:case"end":return t.stop()}}),t,null,[[1,6]])})))()}}]),e}(),Me=function(){"use strict";function e(t,r){(0,c.default)(this,e),this.createdAt=t,this.lastLoginAt=r,this._initializeTime()}return(0,f.default)(e,[{key:"_initializeTime",value:function(){this.lastSignInTime=Se(this.lastLoginAt),this.creationTime=Se(this.createdAt)}},{key:"_copy",value:function(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}},{key:"toJSON",value:function(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}]),e}();
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ue(e){return Fe.apply(this,arguments)}function Fe(){return(Fe=
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
(0,u.default)(S.default.mark((function e(t){var r,n,a,i,o,u,s,c,l,f,d;return S.default.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=t.auth,e.next=4,t.getIdToken();case 4:return a=e.sent,e.next=7,Ce(t,Ee(n,{idToken:a}));case 7:X(null==(i=e.sent)?void 0:i.users.length,n,"internal-error"),o=i.users[0],t._notifyReloadListener(o),u=(null===(r=o.providerUserInfo)||void 0===r?void 0:r.length)?ze(o.providerUserInfo):[],s=He(t.providerData,u),c=t.isAnonymous,l=!(t.email&&o.passwordHash||(null==s?void 0:s.length)),f=!!c&&l,d={uid:o.localId,displayName:o.displayName||null,photoURL:o.photoUrl||null,email:o.email||null,emailVerified:o.emailVerified||!1,phoneNumber:o.phoneNumber||null,tenantId:o.tenantId||null,providerData:s,metadata:new Me(o.createdAt,o.lastLoginAt),isAnonymous:f},Object.assign(t,d);case 18:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function Ve(e){return qe.apply(this,arguments)}function qe(){return(qe=(0,u.default)(S.default.mark((function e(t){var r;return S.default.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=(0,A.getModularInstance)(t),e.next=3,Ue(r);case 3:return e.next=5,r.auth._persistUserIfCurrent(r);case 5:r.auth._notifyListenersIfCurrent(r);case 6:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function He(e,t){var r=e.filter((function(e){return!t.some((function(t){return t.providerId===e.providerId}))}));return(0,x.default)(r).concat((0,x.default)(t))}function ze(e){return e.map((function(e){var t=e.providerId,r=(0,N.__rest)(e,["providerId"]);return{providerId:t,uid:r.rawId||"",displayName:r.displayName||null,email:r.email||null,phoneNumber:r.phoneNumber||null,photoURL:r.photoUrl||null}}))}function Be(e,t){return We.apply(this,arguments)}function We(){return(We=
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
(0,u.default)(S.default.mark((function e(t,r){var n;return S.default.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,he(t,{},(0,u.default)(S.default.mark((function e(){var n,a,i,o,u,s;return S.default.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=(0,A.querystring)({grant_type:"refresh_token",refresh_token:r}).slice(1),a=t.config,i=a.tokenApiHost,o=a.apiKey,u=ye(t,i,"/v1/token","key=".concat(o)),e.next=5,t._getAdditionalHeaders();case 5:return(s=e.sent)["Content-Type"]="application/x-www-form-urlencoded",e.abrupt("return",se.fetch()(u,{method:"POST",headers:s,body:n}));case 8:case"end":return e.stop()}}),e)}))));case 2:return n=e.sent,e.abrupt("return",{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token});case 4:case"end":return e.stop()}}),e)})))).apply(this,arguments)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Ge=function(){"use strict";function e(){(0,c.default)(this,e),this.refreshToken=null,this.accessToken=null,this.expirationTime=null}return(0,f.default)(e,[{key:"isExpired",get:function(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}},{key:"updateFromServerResponse",value:function(e){X(e.idToken,"internal-error"),X(void 0!==e.idToken,"internal-error"),X(void 0!==e.refreshToken,"internal-error");var t,r,n="expiresIn"in e&&void 0!==e.expiresIn?Number(e.expiresIn):(t=e.idToken,X(r=De(t),"internal-error"),X(void 0!==r.exp,"internal-error"),X(void 0!==r.iat,"internal-error"),Number(r.exp)-Number(r.iat));this.updateTokensAndExpiration(e.idToken,e.refreshToken,n)}},{key:"getToken",value:function(e){var t=arguments.length>1&&void 0!==arguments[1]&&arguments[1],r=this;return(0,u.default)(S.default.mark((function n(){return S.default.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:if(X(!r.accessToken||r.refreshToken,e,"user-token-expired"),t||!r.accessToken||r.isExpired){n.next=3;break}return n.abrupt("return",r.accessToken);case 3:if(!r.refreshToken){n.next=7;break}return n.next=6,r.refresh(e,r.refreshToken);case 6:return n.abrupt("return",r.accessToken);case 7:return n.abrupt("return",null);case 8:case"end":return n.stop()}}),n)})))()}},{key:"clearRefreshToken",value:function(){this.refreshToken=null}},{key:"refresh",value:function(e,t){var r=this;return(0,u.default)(S.default.mark((function n(){var a,i,o,u;return S.default.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,Be(e,t);case 2:a=n.sent,i=a.accessToken,o=a.refreshToken,u=a.expiresIn,r.updateTokensAndExpiration(i,o,Number(u));case 7:case"end":return n.stop()}}),n)})))()}},{key:"updateTokensAndExpiration",value:function(e,t,r){this.refreshToken=t||null,this.accessToken=e||null,this.expirationTime=Date.now()+1e3*r}},{key:"toJSON",value:function(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}},{key:"_assign",value:function(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}},{key:"_clone",value:function(){return Object.assign(new e,this.toJSON())}},{key:"_performRefresh",value:function(){return Z("not implemented")}}],[{key:"fromJSON",value:function(t,r){var n=r.refreshToken,a=r.accessToken,i=r.expirationTime,o=new e;return n&&(X("string"==typeof n,"internal-error",{appName:t}),o.refreshToken=n),a&&(X("string"==typeof a,"internal-error",{appName:t}),o.accessToken=a),i&&(X("number"==typeof i,"internal-error",{appName:t}),o.expirationTime=i),o}}]),e}();
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ke(e,t){X("string"==typeof e||void 0===e,"internal-error",{appName:t})}var Je=function(){"use strict";function e(t){(0,c.default)(this,e);var r=t.uid,n=t.auth,a=t.stsTokenManager,i=(0,N.__rest)(t,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new je(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=r,this.auth=n,this.stsTokenManager=a,this.accessToken=a.accessToken,this.displayName=i.displayName||null,this.email=i.email||null,this.emailVerified=i.emailVerified||!1,this.phoneNumber=i.phoneNumber||null,this.photoURL=i.photoURL||null,this.isAnonymous=i.isAnonymous||!1,this.tenantId=i.tenantId||null,this.providerData=i.providerData?(0,x.default)(i.providerData):[],this.metadata=new Me(i.createdAt||void 0,i.lastLoginAt||void 0)}return(0,f.default)(e,[{key:"getIdToken",value:function(e){var t=this;return(0,u.default)(S.default.mark((function r(){var n;return S.default.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.next=2,Ce(t,t.stsTokenManager.getToken(t.auth,e));case 2:if(X(n=r.sent,t.auth,"internal-error"),t.accessToken===n){r.next=9;break}return t.accessToken=n,r.next=8,t.auth._persistUserIfCurrent(t);case 8:t.auth._notifyListenersIfCurrent(t);case 9:return r.abrupt("return",n);case 10:case"end":return r.stop()}}),r)})))()}},{key:"getIdTokenResult",value:function(e){return Oe(this,e)}},{key:"reload",value:function(){return Ve(this)}},{key:"_assign",value:function(e){this!==e&&(X(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map((function(e){return Object.assign({},e)})),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}},{key:"_clone",value:function(t){return new e(Object.assign(Object.assign({},this),{auth:t,stsTokenManager:this.stsTokenManager._clone()}))}},{key:"_onReload",value:function(e){X(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}},{key:"_notifyReloadListener",value:function(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}},{key:"_startProactiveRefresh",value:function(){this.proactiveRefresh._start()}},{key:"_stopProactiveRefresh",value:function(){this.proactiveRefresh._stop()}},{key:"_updateTokensIfNecessary",value:function(e){var t=arguments.length>1&&void 0!==arguments[1]&&arguments[1],r=this;return(0,u.default)(S.default.mark((function n(){var a;return S.default.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:if(a=!1,e.idToken&&e.idToken!==r.stsTokenManager.accessToken&&(r.stsTokenManager.updateFromServerResponse(e),a=!0),!t){n.next=5;break}return n.next=5,Ue(r);case 5:return n.next=7,r.auth._persistUserIfCurrent(r);case 7:a&&r.auth._notifyListenersIfCurrent(r);case 8:case"end":return n.stop()}}),n)})))()}},{key:"delete",value:function(){var e=this;return(0,u.default)(S.default.mark((function t(){var r;return S.default.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,e.getIdToken();case 2:return r=t.sent,t.next=5,Ce(e,ke(e.auth,{idToken:r}));case 5:return e.stsTokenManager.clearRefreshToken(),t.abrupt("return",e.auth.signOut());case 7:case"end":return t.stop()}}),t)})))()}},{key:"toJSON",value:function(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map((function(e){return Object.assign({},e)})),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}},{key:"refreshToken",get:function(){return this.stsTokenManager.refreshToken||""}}],[{key:"_fromJSON",value:function(t,r){var n,a,i,o,u,s,c,l,f=null!==(n=r.displayName)&&void 0!==n?n:void 0,d=null!==(a=r.email)&&void 0!==a?a:void 0,p=null!==(i=r.phoneNumber)&&void 0!==i?i:void 0,h=null!==(o=r.photoURL)&&void 0!==o?o:void 0,v=null!==(u=r.tenantId)&&void 0!==u?u:void 0,m=null!==(s=r._redirectEventId)&&void 0!==s?s:void 0,g=null!==(c=r.createdAt)&&void 0!==c?c:void 0,y=null!==(l=r.lastLoginAt)&&void 0!==l?l:void 0,b=r.uid,_=r.emailVerified,k=r.isAnonymous,w=r.providerData,x=r.stsTokenManager;X(b&&x,t,"internal-error");var I=Ge.fromJSON(this.name,x);X("string"==typeof b,t,"internal-error"),Ke(f,t.name),Ke(d,t.name),X("boolean"==typeof _,t,"internal-error"),X("boolean"==typeof k,t,"internal-error"),Ke(p,t.name),Ke(h,t.name),Ke(v,t.name),Ke(m,t.name),Ke(g,t.name),Ke(y,t.name);var E=new e({uid:b,auth:t,email:d,emailVerified:_,displayName:f,isAnonymous:k,photoURL:h,phoneNumber:p,tenantId:v,stsTokenManager:I,createdAt:g,lastLoginAt:y});return w&&Array.isArray(w)&&(E.providerData=w.map((function(e){return Object.assign({},e)}))),m&&(E._redirectEventId=m),E}},{key:"_fromIdTokenResponse",value:function(t,r){var n=arguments.length>2&&void 0!==arguments[2]&&arguments[2];return(0,u.default)(S.default.mark((function a(){var i,o;return S.default.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return(i=new Ge).updateFromServerResponse(r),o=new e({uid:r.localId,auth:t,stsTokenManager:i,isAnonymous:n}),a.next=5,Ue(o);case 5:return a.abrupt("return",o);case 6:case"end":return a.stop()}}),a)})))()}}]),e}(),Ye=function(){"use strict";function e(){(0,c.default)(this,e),this.type="NONE",this.storage={}}return(0,f.default)(e,[{key:"_isAvailable",value:function(){return(0,u.default)(S.default.mark((function e(){return S.default.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",!0);case 1:case"end":return e.stop()}}),e)})))()}},{key:"_set",value:function(e,t){var r=this;return(0,u.default)(S.default.mark((function n(){return S.default.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:r.storage[e]=t;case 1:case"end":return n.stop()}}),n)})))()}},{key:"_get",value:function(e){var t=this;return(0,u.default)(S.default.mark((function r(){var n;return S.default.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return n=t.storage[e],r.abrupt("return",void 0===n?null:n);case 2:case"end":return r.stop()}}),r)})))()}},{key:"_remove",value:function(e){var t=this;return(0,u.default)(S.default.mark((function r(){return S.default.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:delete t.storage[e];case 1:case"end":return r.stop()}}),r)})))()}},{key:"_addListener",value:function(e,t){}},{key:"_removeListener",value:function(e,t){}}]),e}();
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Ye.type="NONE";var Xe=Ye;
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ze(e,t,r){return"firebase:".concat(e,":").concat(t,":").concat(r)}var Qe=function(){"use strict";function e(t,r,n){(0,c.default)(this,e),this.persistence=t,this.auth=r,this.userKey=n;var a=this.auth,i=a.config,o=a.name;this.fullUserKey=Ze(this.userKey,i.apiKey,o),this.fullPersistenceKey=Ze("persistence",i.apiKey,o),this.boundEventHandler=r._onStorageEvent.bind(r),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}return(0,f.default)(e,[{key:"setCurrentUser",value:function(e){return this.persistence._set(this.fullUserKey,e.toJSON())}},{key:"getCurrentUser",value:function(){var e=this;return(0,u.default)(S.default.mark((function t(){var r;return S.default.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,e.persistence._get(e.fullUserKey);case 2:return r=t.sent,t.abrupt("return",r?Je._fromJSON(e.auth,r):null);case 4:case"end":return t.stop()}}),t)})))()}},{key:"removeCurrentUser",value:function(){return this.persistence._remove(this.fullUserKey)}},{key:"savePersistenceForRedirect",value:function(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}},{key:"setPersistence",value:function(e){var t=this;return(0,u.default)(S.default.mark((function r(){var n;return S.default.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:if(t.persistence!==e){r.next=2;break}return r.abrupt("return");case 2:return r.next=4,t.getCurrentUser();case 4:return n=r.sent,r.next=7,t.removeCurrentUser();case 7:if(t.persistence=e,!n){r.next=10;break}return r.abrupt("return",t.setCurrentUser(n));case 10:case"end":return r.stop()}}),r)})))()}},{key:"delete",value:function(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}}],[{key:"create",value:function(t,r){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"authUser";return(0,u.default)(S.default.mark((function a(){var i,o,s,c,l,f,d,p,h,v,m,g,y;return S.default.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:if(r.length){a.next=2;break}return a.abrupt("return",new e(ee(Xe),t,n));case 2:return a.next=4,Promise.all(r.map(function(){var e=(0,u.default)(S.default.mark((function e(t){return S.default.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t._isAvailable();case 2:if(!e.sent){e.next=4;break}return e.abrupt("return",t);case 4:return e.abrupt("return",void 0);case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()));case 4:i=a.sent.filter((function(e){return e})),o=i[0]||ee(Xe),s=Ze(n,t.config.apiKey,t.name),c=null,l=!0,f=!1,d=void 0,a.prev=9,p=r[Symbol.iterator]();case 11:if(l=(h=p.next()).done){a.next=29;break}return v=h.value,a.prev=13,a.next=16,v._get(s);case 16:if(!(m=a.sent)){a.next=22;break}return g=Je._fromJSON(t,m),v!==o&&(c=g),o=v,a.abrupt("break",29);case 22:a.next=26;break;case 24:a.prev=24,a.t0=a.catch(13);case 26:l=!0,a.next=11;break;case 29:a.next=35;break;case 31:a.prev=31,a.t1=a.catch(9),f=!0,d=a.t1;case 35:a.prev=35,a.prev=36,l||null==p.return||p.return();case 38:if(a.prev=38,!f){a.next=41;break}throw d;case 41:return a.finish(38);case 42:return a.finish(35);case 43:if(y=i.filter((function(e){return e._shouldAllowMigration})),o._shouldAllowMigration&&y.length){a.next=46;break}return a.abrupt("return",new e(o,t,n));case 46:if(o=y[0],!c){a.next=50;break}return a.next=50,o._set(s,c.toJSON());case 50:return a.next=52,Promise.all(r.map(function(){var e=(0,u.default)(S.default.mark((function e(t){return S.default.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t===o){e.next=8;break}return e.prev=1,e.next=4,t._remove(s);case 4:e.next=8;break;case 6:e.prev=6,e.t0=e.catch(1);case 8:case"end":return e.stop()}}),e,null,[[1,6]])})));return function(t){return e.apply(this,arguments)}}()));case 52:return a.abrupt("return",new e(o,t,n));case 53:case"end":return a.stop()}}),a,null,[[9,31,35,43],[13,24],[36,,38,42]])})))()}}]),e}();
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function $e(e){var t=e.toLowerCase();if(t.includes("opera/")||t.includes("opr/")||t.includes("opios/"))return"Opera";if(nt(t))return"IEMobile";if(t.includes("msie")||t.includes("trident/"))return"IE";if(t.includes("edge/"))return"Edge";if(et(t))return"Firefox";if(t.includes("silk/"))return"Silk";if(it(t))return"Blackberry";if(ot(t))return"Webos";if(tt(t))return"Safari";if((t.includes("chrome/")||rt(t))&&!t.includes("edge/"))return"Chrome";if(at(t))return"Android";var r=e.match(/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/);return 2===(null==r?void 0:r.length)?r[1]:"Other"}function et(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:(0,A.getUA)();return/firefox\//i.test(e)}function tt(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:(0,A.getUA)(),t=e.toLowerCase();return t.includes("safari/")&&!t.includes("chrome/")&&!t.includes("crios/")&&!t.includes("android")}function rt(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:(0,A.getUA)();return/crios\//i.test(e)}function nt(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:(0,A.getUA)();return/iemobile/i.test(e)}function at(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:(0,A.getUA)();return/android/i.test(e)}function it(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:(0,A.getUA)();return/blackberry/i.test(e)}function ot(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:(0,A.getUA)();return/webos/i.test(e)}function ut(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:(0,A.getUA)();return/iphone|ipad|ipod/i.test(e)||/macintosh/i.test(e)&&/mobile/i.test(e)}function st(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:(0,A.getUA)();return/(iPad|iPhone|iPod).*OS 7_\d/i.test(e)||/(iPad|iPhone|iPod).*OS 8_\d/i.test(e)}function ct(){var e,t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:(0,A.getUA)();return ut(t)&&!!(null===(e=window.navigator)||void 0===e?void 0:e.standalone)}function lt(){return(0,A.isIE)()&&10===document.documentMode}function ft(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:(0,A.getUA)();return ut(e)||at(e)||ot(e)||it(e)||/windows phone/i.test(e)||nt(e)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function dt(e){var t,r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:[];switch(e){case"Browser":t=$e((0,A.getUA)());break;case"Worker":t="".concat($e((0,A.getUA)()),"-").concat(e);break;default:t=e}var n=r.length?r.join(","):"FirebaseCore-web";return"".concat(t,"/","JsCore","/").concat(O.SDK_VERSION,"/").concat(n)}
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var pt=function(){"use strict";function e(t){(0,c.default)(this,e),this.auth=t,this.queue=[]}return(0,f.default)(e,[{key:"pushCallback",value:function(e,t){var r=this,n=function(t){return new Promise((function(r,n){try{r(e(t))}catch(e){n(e)}}))};n.onAbort=t,this.queue.push(n);var a=this.queue.length-1;return function(){r.queue[a]=function(){return Promise.resolve()}}}},{key:"runMiddleware",value:function(e){var t=this;return(0,u.default)(S.default.mark((function r(){var n,a,i,o,u,s,c,l,f,d,p,h,v,m;return S.default.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:if(t.auth.currentUser!==e){r.next=3;break}return r.abrupt("return");case 3:a=[],r.prev=4,i=!0,o=!1,u=void 0,r.prev=6,s=t.queue[Symbol.iterator]();case 8:if(i=(c=s.next()).done){r.next=16;break}return l=c.value,r.next=12,l(e);case 12:l.onAbort&&a.push(l.onAbort);case 13:i=!0,r.next=8;break;case 16:r.next=22;break;case 18:r.prev=18,r.t0=r.catch(6),o=!0,u=r.t0;case 22:r.prev=22,r.prev=23,i||null==s.return||s.return();case 25:if(r.prev=25,!o){r.next=28;break}throw u;case 28:return r.finish(25);case 29:return r.finish(22);case 30:r.next=53;break;case 32:for(r.prev=32,r.t1=r.catch(4),a.reverse(),f=!0,d=!1,p=void 0,r.prev=36,h=a[Symbol.iterator]();!(f=(v=h.next()).done);f=!0){m=v.value;try{m()}catch(e){}}r.next=44;break;case 40:r.prev=40,r.t2=r.catch(36),d=!0,p=r.t2;case 44:r.prev=44,r.prev=45,f||null==h.return||h.return();case 47:if(r.prev=47,!d){r.next=50;break}throw p;case 50:return r.finish(47);case 51:return r.finish(44);case 52:throw t.auth._errorFactory.create("login-blocked",{originalMessage:null===(n=r.t1)||void 0===n?void 0:n.message});case 53:case"end":return r.stop()}}),r,null,[[4,32],[6,18,22,30],[23,,25,29],[36,40,44,52],[45,,47,51]])})))()}}]),e}(),ht=function(){"use strict";function e(t,r,n){(0,c.default)(this,e),this.app=t,this.heartbeatServiceProvider=r,this.config=n,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new mt(this),this.idTokenSubscription=new mt(this),this.beforeStateQueue=new pt(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=q,this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=t.name,this.clientVersion=n.sdkClientVersion}return(0,f.default)(e,[{key:"_initializeWithPersistence",value:function(e,t){t&&(this._popupRedirectResolver=ee(t));var r=this;return this._initializationPromise=this.queue((0,u.default)(S.default.mark((function n(){var a,i;return S.default.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:if(!r._deleted){n.next=3;break}return n.abrupt("return");case 3:return n.next=5,Qe.create(r,e);case 5:if(r.persistenceManager=n.sent,!r._deleted){n.next=8;break}return n.abrupt("return");case 8:if(!(null===(a=r._popupRedirectResolver)||void 0===a?void 0:a._shouldInitProactively)){n.next=16;break}return n.prev=9,n.next=12,r._popupRedirectResolver._initialize(r);case 12:n.next=16;break;case 14:n.prev=14,n.t0=n.catch(9);case 16:return n.next=18,r.initializeCurrentUser(t);case 18:if(r.lastNotifiedUid=(null===(i=r.currentUser)||void 0===i?void 0:i.uid)||null,!r._deleted){n.next=21;break}return n.abrupt("return");case 21:r._isInitialized=!0;case 22:case"end":return n.stop()}}),n,null,[[9,14]])})))),this._initializationPromise}},{key:"_onStorageEvent",value:function(){var e=this;return(0,u.default)(S.default.mark((function t(){var r;return S.default.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(!e._deleted){t.next=2;break}return t.abrupt("return");case 2:return t.next=4,e.assertedPersistence.getCurrentUser();case 4:if(r=t.sent,e.currentUser||r){t.next=7;break}return t.abrupt("return");case 7:if(!e.currentUser||!r||e.currentUser.uid!==r.uid){t.next=12;break}return e._currentUser._assign(r),t.next=11,e.currentUser.getIdToken();case 11:return t.abrupt("return");case 12:return t.next=14,e._updateCurrentUser(r,!0);case 14:case"end":return t.stop()}}),t)})))()}},{key:"initializeCurrentUser",value:function(e){var t=this;return(0,u.default)(S.default.mark((function r(){var n,a,i,o,u,s,c;return S.default.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.next=3,t.assertedPersistence.getCurrentUser();case 3:if(a=r.sent,i=a,o=!1,!e||!t.config.authDomain){r.next=15;break}return r.next=9,t.getOrInitRedirectPersistenceManager();case 9:return u=null===(n=t.redirectUser)||void 0===n?void 0:n._redirectEventId,s=null==i?void 0:i._redirectEventId,r.next=13,t.tryRedirectSignIn(e);case 13:c=r.sent,u&&u!==s||!(null==c?void 0:c.user)||(i=c.user,o=!0);case 15:if(i){r.next=17;break}return r.abrupt("return",t.directlySetCurrentUser(null));case 17:if(i._redirectEventId){r.next=33;break}if(!o){r.next=28;break}return r.prev=19,r.next=22,t.beforeStateQueue.runMiddleware(i);case 22:r.next=28;break;case 24:r.prev=24,r.t0=r.catch(19),i=a,t._popupRedirectResolver._overrideRedirectResult(t,(function(){return Promise.reject(r.t0)}));case 28:if(!i){r.next=32;break}return r.abrupt("return",t.reloadAndSetCurrentUserOrClear(i));case 32:return r.abrupt("return",t.directlySetCurrentUser(null));case 33:return X(t._popupRedirectResolver,t,"argument-error"),r.next=36,t.getOrInitRedirectPersistenceManager();case 36:if(!t.redirectUser||t.redirectUser._redirectEventId!==i._redirectEventId){r.next=38;break}return r.abrupt("return",t.directlySetCurrentUser(i));case 38:return r.abrupt("return",t.reloadAndSetCurrentUserOrClear(i));case 39:case"end":return r.stop()}}),r,null,[[19,24]])})))()}},{key:"tryRedirectSignIn",value:function(e){var t=this;return(0,u.default)(S.default.mark((function r(){var n;return S.default.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return n=null,r.prev=1,r.next=4,t._popupRedirectResolver._completeRedirectFn(t,e,!0);case 4:n=r.sent,r.next=11;break;case 7:return r.prev=7,r.t0=r.catch(1),r.next=11,t._setRedirectUser(null);case 11:return r.abrupt("return",n);case 12:case"end":return r.stop()}}),r,null,[[1,7]])})))()}},{key:"reloadAndSetCurrentUserOrClear",value:function(e){var t=this;return(0,u.default)(S.default.mark((function r(){var n;return S.default.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.prev=1,r.next=4,Ue(e);case 4:r.next=10;break;case 6:if(r.prev=6,r.t0=r.catch(1),"auth/network-request-failed"===(null===(n=r.t0)||void 0===n?void 0:n.code)){r.next=10;break}return r.abrupt("return",t.directlySetCurrentUser(null));case 10:return r.abrupt("return",t.directlySetCurrentUser(e));case 11:case"end":return r.stop()}}),r,null,[[1,6]])})))()}},{key:"useDeviceLanguage",value:function(){this.languageCode=function(){if("undefined"==typeof navigator)return null;var e=navigator;return e.languages&&e.languages[0]||e.language||null}()}},{key:"_delete",value:function(){var e=this;return(0,u.default)(S.default.mark((function t(){return S.default.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:e._deleted=!0;case 1:case"end":return t.stop()}}),t)})))()}},{key:"updateCurrentUser",value:function(e){var t=this;return(0,u.default)(S.default.mark((function r(){var n;return S.default.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return(n=e?(0,A.getModularInstance)(e):null)&&X(n.auth.config.apiKey===t.config.apiKey,t,"invalid-user-token"),r.abrupt("return",t._updateCurrentUser(n&&n._clone(t)));case 3:case"end":return r.stop()}}),r)})))()}},{key:"_updateCurrentUser",value:function(e){var t=arguments.length>1&&void 0!==arguments[1]&&arguments[1],r=this;return(0,u.default)(S.default.mark((function n(){return S.default.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:if(!r._deleted){n.next=2;break}return n.abrupt("return");case 2:if(e&&X(r.tenantId===e.tenantId,r,"tenant-id-mismatch"),t){n.next=6;break}return n.next=6,r.beforeStateQueue.runMiddleware(e);case 6:return n.abrupt("return",r.queue((0,u.default)(S.default.mark((function t(){return S.default.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,r.directlySetCurrentUser(e);case 2:r.notifyAuthListeners();case 3:case"end":return t.stop()}}),t)})))));case 7:case"end":return n.stop()}}),n)})))()}},{key:"signOut",value:function(){var e=this;return(0,u.default)(S.default.mark((function t(){return S.default.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,e.beforeStateQueue.runMiddleware(null);case 2:if(!e.redirectPersistenceManager&&!e._popupRedirectResolver){t.next=5;break}return t.next=5,e._setRedirectUser(null);case 5:return t.abrupt("return",e._updateCurrentUser(null,!0));case 6:case"end":return t.stop()}}),t)})))()}},{key:"setPersistence",value:function(e){var t=this;return this.queue((0,u.default)(S.default.mark((function r(){return S.default.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.next=2,t.assertedPersistence.setPersistence(ee(e));case 2:case"end":return r.stop()}}),r)}))))}},{key:"_getPersistence",value:function(){return this.assertedPersistence.persistence.type}},{key:"_updateErrorMap",value:function(e){this._errorFactory=new(0,A.ErrorFactory)("auth","Firebase",e())}},{key:"onAuthStateChanged",value:function(e,t,r){return this.registerStateListener(this.authStateSubscription,e,t,r)}},{key:"beforeAuthStateChanged",value:function(e,t){return this.beforeStateQueue.pushCallback(e,t)}},{key:"onIdTokenChanged",value:function(e,t,r){return this.registerStateListener(this.idTokenSubscription,e,t,r)}},{key:"toJSON",value:function(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:null===(e=this._currentUser)||void 0===e?void 0:e.toJSON()}}},{key:"_setRedirectUser",value:function(e,t){var r=this;return(0,u.default)(S.default.mark((function n(){var a;return S.default.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,r.getOrInitRedirectPersistenceManager(t);case 2:return a=n.sent,n.abrupt("return",null===e?a.removeCurrentUser():a.setCurrentUser(e));case 4:case"end":return n.stop()}}),n)})))()}},{key:"getOrInitRedirectPersistenceManager",value:function(e){var t=this;return(0,u.default)(S.default.mark((function r(){var n;return S.default.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:if(t.redirectPersistenceManager){r.next=9;break}return X(n=e&&ee(e)||t._popupRedirectResolver,t,"argument-error"),r.next=5,Qe.create(t,[ee(n._redirectPersistence)],"redirectUser");case 5:return t.redirectPersistenceManager=r.sent,r.next=8,t.redirectPersistenceManager.getCurrentUser();case 8:t.redirectUser=r.sent;case 9:return r.abrupt("return",t.redirectPersistenceManager);case 10:case"end":return r.stop()}}),r)})))()}},{key:"_redirectUserForId",value:function(e){var t=this;return(0,u.default)(S.default.mark((function r(){var n,a;return S.default.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:if(!t._isInitialized){r.next=4;break}return r.next=4,t.queue((0,u.default)(S.default.mark((function e(){return S.default.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:case"end":return e.stop()}}),e)}))));case 4:if((null===(n=t._currentUser)||void 0===n?void 0:n._redirectEventId)!==e){r.next=6;break}return r.abrupt("return",t._currentUser);case 6:if((null===(a=t.redirectUser)||void 0===a?void 0:a._redirectEventId)!==e){r.next=8;break}return r.abrupt("return",t.redirectUser);case 8:return r.abrupt("return",null);case 9:case"end":return r.stop()}}),r)})))()}},{key:"_persistUserIfCurrent",value:function(e){var t=this;return(0,u.default)(S.default.mark((function r(){return S.default.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:if(e!==t.currentUser){r.next=2;break}return r.abrupt("return",t.queue((0,u.default)(S.default.mark((function r(){return S.default.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.abrupt("return",t.directlySetCurrentUser(e));case 1:case"end":return r.stop()}}),r)})))));case 2:case"end":return r.stop()}}),r)})))()}},{key:"_notifyListenersIfCurrent",value:function(e){e===this.currentUser&&this.notifyAuthListeners()}},{key:"_key",value:function(){return"".concat(this.config.authDomain,":").concat(this.config.apiKey,":").concat(this.name)}},{key:"_startProactiveRefresh",value:function(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}},{key:"_stopProactiveRefresh",value:function(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}},{key:"_currentUser",get:function(){return this.currentUser}},{key:"notifyAuthListeners",value:function(){var e,t;if(this._isInitialized){this.idTokenSubscription.next(this.currentUser);var r=null!==(t=null===(e=this.currentUser)||void 0===e?void 0:e.uid)&&void 0!==t?t:null;this.lastNotifiedUid!==r&&(this.lastNotifiedUid=r,this.authStateSubscription.next(this.currentUser))}}},{key:"registerStateListener",value:function(e,t,r,n){var a=this;if(this._deleted)return function(){};var i="function"==typeof t?t:t.next.bind(t),o=this._isInitialized?Promise.resolve():this._initializationPromise;return X(o,this,"internal-error"),o.then((function(){return i(a.currentUser)})),"function"==typeof t?e.addObserver(t,r,n):e.addObserver(t)}},{key:"directlySetCurrentUser",value:function(e){var t=this;return(0,u.default)(S.default.mark((function r(){return S.default.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:if(t.currentUser&&t.currentUser!==e&&(t._currentUser._stopProactiveRefresh(),e&&t.isProactiveRefreshEnabled&&e._startProactiveRefresh()),t.currentUser=e,!e){r.next=7;break}return r.next=5,t.assertedPersistence.setCurrentUser(e);case 5:r.next=9;break;case 7:return r.next=9,t.assertedPersistence.removeCurrentUser();case 9:case"end":return r.stop()}}),r)})))()}},{key:"queue",value:function(e){return this.operations=this.operations.then(e,e),this.operations}},{key:"assertedPersistence",get:function(){return X(this.persistenceManager,this,"internal-error"),this.persistenceManager}},{key:"_logFramework",value:function(e){e&&!this.frameworks.includes(e)&&(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=dt(this.config.clientPlatform,this._getFrameworks()))}},{key:"_getFrameworks",value:function(){return this.frameworks}},{key:"_getAdditionalHeaders",value:function(){var e=this;return(0,u.default)(S.default.mark((function t(){var r,n,a;return S.default.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n=(0,p.default)({},"X-Client-Version",e.clientVersion),e.app.options.appId&&(n["X-Firebase-gmpid"]=e.app.options.appId),t.next=5,null===(r=e.heartbeatServiceProvider.getImmediate({optional:!0}))||void 0===r?void 0:r.getHeartbeatsHeader();case 5:return(a=t.sent)&&(n["X-Firebase-Client"]=a),t.abrupt("return",n);case 8:case"end":return t.stop()}}),t)})))()}}]),e}();
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function vt(e){return(0,A.getModularInstance)(e)}var mt=function(){"use strict";function e(t){var r=this;(0,c.default)(this,e),this.auth=t,this.observer=null,this.addObserver=(0,A.createSubscribe)((function(e){return r.observer=e}))}return(0,f.default)(e,[{key:"next",get:function(){return X(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}]),e}();function gt(e,t,r){var n=vt(e);X(n._canInitEmulator,n,"emulator-config-failed"),X(/^https?:\/\//.test(t),n,"invalid-emulator-scheme");var a=!!(null==r?void 0:r.disableWarnings),i=yt(t),o=function(e){var t=yt(e),r=/(\/\/)?([^?#/]+)/.exec(e.substr(t.length));if(!r)return{host:"",port:null};var n=r[2].split("@").pop()||"",a=/^(\[[^\]]+\])(:|$)/.exec(n);if(a){var i=a[1];return{host:i,port:bt(n.substr(i.length+1))}}var o=(0,k.default)(n.split(":"),2);return{host:o[0],port:bt(o[1])}}(t),u=o.host,s=o.port,c=null===s?"":":".concat(s);n.config.emulator={url:"".concat(i,"//").concat(u).concat(c,"/")},n.settings.appVerificationDisabledForTesting=!0,n.emulatorConfig=Object.freeze({host:u,port:s,protocol:i.replace(":",""),options:Object.freeze({disableWarnings:a})}),a||function(){function e(){var e=document.createElement("p"),t=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",t.position="fixed",t.width="100%",t.backgroundColor="#ffffff",t.border=".1em solid #000000",t.color="#b50000",t.bottom="0px",t.left="0px",t.margin="0px",t.zIndex="10000",t.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}"undefined"!=typeof console&&"function"==typeof console.info&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials.");"undefined"!=typeof window&&"undefined"!=typeof document&&("loading"===document.readyState?window.addEventListener("DOMContentLoaded",e):e())}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */()}function yt(e){var t=e.indexOf(":");return t<0?"":e.substr(0,t+1)}function bt(e){if(!e)return null;var t=Number(e);return isNaN(t)?null:t}var _t=function(){"use strict";function e(t,r){(0,c.default)(this,e),this.providerId=t,this.signInMethod=r}return(0,f.default)(e,[{key:"toJSON",value:function(){return Z("not implemented")}},{key:"_getIdTokenResponse",value:function(e){return Z("not implemented")}},{key:"_linkToIdToken",value:function(e,t){return Z("not implemented")}},{key:"_getReauthenticationResolver",value:function(e){return Z("not implemented")}}]),e}();function kt(e,t){return wt.apply(this,arguments)}function wt(){return(wt=
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
(0,u.default)(S.default.mark((function e(t,r){return S.default.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",de(t,"POST","/v1/accounts:resetPassword",fe(t,r)));case 1:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function xt(e,t){return It.apply(this,arguments)}function It(){return(It=(0,u.default)(S.default.mark((function e(t,r){return S.default.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",de(t,"POST","/v1/accounts:update",r));case 1:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function Et(e,t){return Tt.apply(this,arguments)}function Tt(){return(Tt=(0,u.default)(S.default.mark((function e(t,r){return S.default.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",de(t,"POST","/v1/accounts:update",fe(t,r)));case 1:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function St(e,t){return At.apply(this,arguments)}function At(){return(At=
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
(0,u.default)(S.default.mark((function e(t,r){return S.default.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",me(t,"POST","/v1/accounts:signInWithPassword",fe(t,r)));case 1:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function Ot(e,t){return Nt.apply(this,arguments)}function Nt(){return(Nt=(0,u.default)(S.default.mark((function e(t,r){return S.default.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",de(t,"POST","/v1/accounts:sendOobCode",fe(t,r)));case 1:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function Rt(e,t){return Dt.apply(this,arguments)}function Dt(){return(Dt=(0,u.default)(S.default.mark((function e(t,r){return S.default.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",Ot(t,r));case 1:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function Ct(e,t){return Pt.apply(this,arguments)}function Pt(){return(Pt=(0,u.default)(S.default.mark((function e(t,r){return S.default.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",Ot(t,r));case 1:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function Lt(e,t){return jt.apply(this,arguments)}function jt(){return(jt=(0,u.default)(S.default.mark((function e(t,r){return S.default.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",Ot(t,r));case 1:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function Mt(e,t){return Ut.apply(this,arguments)}function Ut(){return(Ut=(0,u.default)(S.default.mark((function e(t,r){return S.default.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",Ot(t,r));case 1:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function Ft(e,t){return Vt.apply(this,arguments)}function Vt(){return(Vt=
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
(0,u.default)(S.default.mark((function e(t,r){return S.default.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",me(t,"POST","/v1/accounts:signInWithEmailLink",fe(t,r)));case 1:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function qt(e,t){return Ht.apply(this,arguments)}function Ht(){return(Ht=(0,u.default)(S.default.mark((function e(t,r){return S.default.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",me(t,"POST","/v1/accounts:signInWithEmailLink",fe(t,r)));case 1:case"end":return e.stop()}}),e)})))).apply(this,arguments)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var zt=function(e){"use strict";(0,b.default)(r,e);var t=(0,E.default)(r);function r(e,n,a){var i,o=arguments.length>3&&void 0!==arguments[3]?arguments[3]:null;return(0,c.default)(this,r),(i=t.call(this,"password",a))._email=e,i._password=n,i._tenantId=o,i}return(0,f.default)(r,[{key:"toJSON",value:function(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}},{key:"_getIdTokenResponse",value:function(e){var t=this;return(0,u.default)(S.default.mark((function r(){return S.default.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:r.t0=t.signInMethod,r.next="password"===r.t0?3:"emailLink"===r.t0?4:5;break;case 3:return r.abrupt("return",St(e,{returnSecureToken:!0,email:t._email,password:t._password}));case 4:return r.abrupt("return",Ft(e,{email:t._email,oobCode:t._password}));case 5:W(e,"internal-error");case 6:case"end":return r.stop()}}),r)})))()}},{key:"_linkToIdToken",value:function(e,t){var r=this;return(0,u.default)(S.default.mark((function n(){return S.default.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:n.t0=r.signInMethod,n.next="password"===n.t0?3:"emailLink"===n.t0?4:5;break;case 3:return n.abrupt("return",xt(e,{idToken:t,returnSecureToken:!0,email:r._email,password:r._password}));case 4:return n.abrupt("return",qt(e,{idToken:t,email:r._email,oobCode:r._password}));case 5:W(e,"internal-error");case 6:case"end":return n.stop()}}),n)})))()}},{key:"_getReauthenticationResolver",value:function(e){return this._getIdTokenResponse(e)}}],[{key:"_fromEmailAndPassword",value:function(e,t){return new r(e,t,"password")}},{key:"_fromEmailAndCode",value:function(e,t){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:null;return new r(e,t,"emailLink",n)}},{key:"fromJSON",value:function(e){var t="string"==typeof e?JSON.parse(e):e;if((null==t?void 0:t.email)&&(null==t?void 0:t.password)){if("password"===t.signInMethod)return this._fromEmailAndPassword(t.email,t.password);if("emailLink"===t.signInMethod)return this._fromEmailAndCode(t.email,t.password,t.tenantId)}return null}}]),r}(_t);function Bt(e,t){return Wt.apply(this,arguments)}function Wt(){return(Wt=
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
(0,u.default)(S.default.mark((function e(t,r){return S.default.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",me(t,"POST","/v1/accounts:signInWithIdp",fe(t,r)));case 1:case"end":return e.stop()}}),e)})))).apply(this,arguments)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Gt=function(e){"use strict";(0,b.default)(r,e);var t=(0,E.default)(r);function r(){var e;return(0,c.default)(this,r),(e=t.call.apply(t,[this].concat(Array.prototype.slice.call(arguments)))).pendingToken=null,e}return(0,f.default)(r,[{key:"toJSON",value:function(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}},{key:"_getIdTokenResponse",value:function(e){return Bt(e,this.buildRequest())}},{key:"_linkToIdToken",value:function(e,t){var r=this.buildRequest();return r.idToken=t,Bt(e,r)}},{key:"_getReauthenticationResolver",value:function(e){var t=this.buildRequest();return t.autoCreate=!1,Bt(e,t)}},{key:"buildRequest",value:function(){var e={requestUri:"http://localhost",returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{var t={};this.idToken&&(t.id_token=this.idToken),this.accessToken&&(t.access_token=this.accessToken),this.secret&&(t.oauth_token_secret=this.secret),t.providerId=this.providerId,this.nonce&&!this.pendingToken&&(t.nonce=this.nonce),e.postBody=(0,A.querystring)(t)}return e}}],[{key:"_fromParams",value:function(e){var t=new r(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(t.idToken=e.idToken),e.accessToken&&(t.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(t.nonce=e.nonce),e.pendingToken&&(t.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(t.accessToken=e.oauthToken,t.secret=e.oauthTokenSecret):W("argument-error"),t}},{key:"fromJSON",value:function(e){var t="string"==typeof e?JSON.parse(e):e,n=t.providerId,a=t.signInMethod,i=(0,N.__rest)(t,["providerId","signInMethod"]);if(!n||!a)return null;var o=new r(n,a);return o.idToken=i.idToken||void 0,o.accessToken=i.accessToken||void 0,o.secret=i.secret,o.nonce=i.nonce,o.pendingToken=i.pendingToken||null,o}}]),r}(_t);function Kt(e,t){return Jt.apply(this,arguments)}function Jt(){return(Jt=
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
(0,u.default)(S.default.mark((function e(t,r){return S.default.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",de(t,"POST","/v1/accounts:sendVerificationCode",fe(t,r)));case 1:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function Yt(){return(Yt=(0,u.default)(S.default.mark((function e(t,r){return S.default.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",me(t,"POST","/v1/accounts:signInWithPhoneNumber",fe(t,r)));case 1:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function Xt(){return(Xt=(0,u.default)(S.default.mark((function e(t,r){var n;return S.default.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,me(t,"POST","/v1/accounts:signInWithPhoneNumber",fe(t,r));case 2:if(!(n=e.sent).temporaryProof){e.next=5;break}throw _e(t,"account-exists-with-different-credential",n);case 5:return e.abrupt("return",n);case 6:case"end":return e.stop()}}),e)})))).apply(this,arguments)}var Zt=(0,p.default)({},"USER_NOT_FOUND","user-not-found");function Qt(){return(Qt=(0,u.default)(S.default.mark((function e(t,r){var n;return S.default.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=Object.assign(Object.assign({},r),{operation:"REAUTH"}),e.abrupt("return",me(t,"POST","/v1/accounts:signInWithPhoneNumber",fe(t,n),Zt));case 2:case"end":return e.stop()}}),e)})))).apply(this,arguments)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var $t=function(e){"use strict";(0,b.default)(r,e);var t=(0,E.default)(r);function r(e){var n;return(0,c.default)(this,r),(n=t.call(this,"phone","phone")).params=e,n}return(0,f.default)(r,[{key:"_getIdTokenResponse",value:function(e){return function(e,t){return Yt.apply(this,arguments)}(e,this._makeVerificationRequest())}},{key:"_linkToIdToken",value:function(e,t){return function(e,t){return Xt.apply(this,arguments)}(e,Object.assign({idToken:t},this._makeVerificationRequest()))}},{key:"_getReauthenticationResolver",value:function(e){return function(e,t){return Qt.apply(this,arguments)}(e,this._makeVerificationRequest())}},{key:"_makeVerificationRequest",value:function(){var e=this.params,t=e.temporaryProof,r=e.phoneNumber,n=e.verificationId,a=e.verificationCode;return t&&r?{temporaryProof:t,phoneNumber:r}:{sessionInfo:n,code:a}}},{key:"toJSON",value:function(){var e={providerId:this.providerId};return this.params.phoneNumber&&(e.phoneNumber=this.params.phoneNumber),this.params.temporaryProof&&(e.temporaryProof=this.params.temporaryProof),this.params.verificationCode&&(e.verificationCode=this.params.verificationCode),this.params.verificationId&&(e.verificationId=this.params.verificationId),e}}],[{key:"_fromVerification",value:function(e,t){return new r({verificationId:e,verificationCode:t})}},{key:"_fromTokenResponse",value:function(e,t){return new r({phoneNumber:e,temporaryProof:t})}},{key:"fromJSON",value:function(e){"string"==typeof e&&(e=JSON.parse(e));var t=e.verificationId,n=e.verificationCode,a=e.phoneNumber,i=e.temporaryProof;return n||t||a||i?new r({verificationId:t,verificationCode:n,phoneNumber:a,temporaryProof:i}):null}}]),r}(_t);
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var er=function(){"use strict";function e(t){var r,n,a,i,o,u;(0,c.default)(this,e);var s=(0,A.querystringDecode)((0,A.extractQuerystring)(t)),l=null!==(r=s.apiKey)&&void 0!==r?r:null,f=null!==(n=s.oobCode)&&void 0!==n?n:null,d=function(e){switch(e){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}(null!==(a=s.mode)&&void 0!==a?a:null);X(l&&f&&d,"argument-error"),this.apiKey=l,this.operation=d,this.code=f,this.continueUrl=null!==(i=s.continueUrl)&&void 0!==i?i:null,this.languageCode=null!==(o=s.languageCode)&&void 0!==o?o:null,this.tenantId=null!==(u=s.tenantId)&&void 0!==u?u:null}return(0,f.default)(e,null,[{key:"parseLink",value:function(t){var r=function(e){var t=(0,A.querystringDecode)((0,A.extractQuerystring)(e)).link,r=t?(0,A.querystringDecode)((0,A.extractQuerystring)(t)).deep_link_id:null,n=(0,A.querystringDecode)((0,A.extractQuerystring)(e)).deep_link_id;return(n?(0,A.querystringDecode)((0,A.extractQuerystring)(n)).link:null)||n||r||t||e}(t);try{return new e(r)}catch(e){return null}}}]),e}();function tr(e){return er.parseLink(e)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var rr=function(){"use strict";function e(){(0,c.default)(this,e),this.providerId=e.PROVIDER_ID}return(0,f.default)(e,null,[{key:"credential",value:function(e,t){return zt._fromEmailAndPassword(e,t)}},{key:"credentialWithLink",value:function(e,t){var r=er.parseLink(t);return X(r,"argument-error"),zt._fromEmailAndCode(e,r.code,r.tenantId)}}]),e}();rr.PROVIDER_ID="password",rr.EMAIL_PASSWORD_SIGN_IN_METHOD="password",rr.EMAIL_LINK_SIGN_IN_METHOD="emailLink";
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
var nr=function(){"use strict";function e(t){(0,c.default)(this,e),this.providerId=t,this.defaultLanguageCode=null,this.customParameters={}}return(0,f.default)(e,[{key:"setDefaultLanguage",value:function(e){this.defaultLanguageCode=e}},{key:"setCustomParameters",value:function(e){return this.customParameters=e,this}},{key:"getCustomParameters",value:function(){return this.customParameters}}]),e}(),ar=function(e){"use strict";(0,b.default)(r,e);var t=(0,E.default)(r);function r(){var e;return(0,c.default)(this,r),(e=t.call.apply(t,[this].concat(Array.prototype.slice.call(arguments)))).scopes=[],e}return(0,f.default)(r,[{key:"addScope",value:function(e){return this.scopes.includes(e)||this.scopes.push(e),this}},{key:"getScopes",value:function(){return(0,x.default)(this.scopes)}}]),r}(nr),ir=function(e){"use strict";(0,b.default)(r,e);var t=(0,E.default)(r);function r(){return(0,c.default)(this,r),t.apply(this,arguments)}return(0,f.default)(r,[{key:"credential",value:function(e){return this._credential(Object.assign(Object.assign({},e),{nonce:e.rawNonce}))}},{key:"_credential",value:function(e){return X(e.idToken||e.accessToken,"argument-error"),Gt._fromParams(Object.assign(Object.assign({},e),{providerId:this.providerId,signInMethod:this.providerId}))}}],[{key:"credentialFromJSON",value:function(e){var t="string"==typeof e?JSON.parse(e):e;return X("providerId"in t&&"signInMethod"in t,"argument-error"),Gt._fromParams(t)}},{key:"credentialFromResult",value:function(e){return r.oauthCredentialFromTaggedObject(e)}},{key:"credentialFromError",value:function(e){return r.oauthCredentialFromTaggedObject(e.customData||{})}},{key:"oauthCredentialFromTaggedObject",value:function(e){var t=e._tokenResponse;if(!t)return null;var n=t.oauthIdToken,a=t.oauthAccessToken,i=t.oauthTokenSecret,o=t.pendingToken,u=t.nonce,s=t.providerId;if(!(a||i||n||o))return null;if(!s)return null;try{return new r(s)._credential({idToken:n,accessToken:a,nonce:u,pendingToken:o})}catch(e){return null}}}]),r}(ar),or=function(e){"use strict";(0,b.default)(r,e);var t=(0,E.default)(r);function r(){return(0,c.default)(this,r),t.call(this,"facebook.com")}return(0,f.default)(r,null,[{key:"credential",value:function(e){return Gt._fromParams({providerId:r.PROVIDER_ID,signInMethod:r.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}},{key:"credentialFromResult",value:function(e){return r.credentialFromTaggedObject(e)}},{key:"credentialFromError",value:function(e){return r.credentialFromTaggedObject(e.customData||{})}},{key:"credentialFromTaggedObject",value:function(e){var t=e._tokenResponse;if(!t||!("oauthAccessToken"in t))return null;if(!t.oauthAccessToken)return null;try{return r.credential(t.oauthAccessToken)}catch(e){return null}}}]),r}(ar);
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */or.FACEBOOK_SIGN_IN_METHOD="facebook.com",or.PROVIDER_ID="facebook.com";
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
var ur=function(e){"use strict";(0,b.default)(r,e);var t=(0,E.default)(r);function r(){var e;return(0,c.default)(this,r),(e=t.call(this,"google.com")).addScope("profile"),e}return(0,f.default)(r,null,[{key:"credential",value:function(e,t){return Gt._fromParams({providerId:r.PROVIDER_ID,signInMethod:r.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:t})}},{key:"credentialFromResult",value:function(e){return r.credentialFromTaggedObject(e)}},{key:"credentialFromError",value:function(e){return r.credentialFromTaggedObject(e.customData||{})}},{key:"credentialFromTaggedObject",value:function(e){var t=e._tokenResponse;if(!t)return null;var n=t.oauthIdToken,a=t.oauthAccessToken;if(!n&&!a)return null;try{return r.credential(n,a)}catch(e){return null}}}]),r}(ar);ur.GOOGLE_SIGN_IN_METHOD="google.com",ur.PROVIDER_ID="google.com";
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
var sr=function(e){"use strict";(0,b.default)(r,e);var t=(0,E.default)(r);function r(){return(0,c.default)(this,r),t.call(this,"github.com")}return(0,f.default)(r,null,[{key:"credential",value:function(e){return Gt._fromParams({providerId:r.PROVIDER_ID,signInMethod:r.GITHUB_SIGN_IN_METHOD,accessToken:e})}},{key:"credentialFromResult",value:function(e){return r.credentialFromTaggedObject(e)}},{key:"credentialFromError",value:function(e){return r.credentialFromTaggedObject(e.customData||{})}},{key:"credentialFromTaggedObject",value:function(e){var t=e._tokenResponse;if(!t||!("oauthAccessToken"in t))return null;if(!t.oauthAccessToken)return null;try{return r.credential(t.oauthAccessToken)}catch(e){return null}}}]),r}(ar);sr.GITHUB_SIGN_IN_METHOD="github.com",sr.PROVIDER_ID="github.com";
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
var cr=function(e){"use strict";(0,b.default)(r,e);var t=(0,E.default)(r);function r(e,n){var a;return(0,c.default)(this,r),(a=t.call(this,e,e)).pendingToken=n,a}return(0,f.default)(r,[{key:"_getIdTokenResponse",value:function(e){return Bt(e,this.buildRequest())}},{key:"_linkToIdToken",value:function(e,t){var r=this.buildRequest();return r.idToken=t,Bt(e,r)}},{key:"_getReauthenticationResolver",value:function(e){var t=this.buildRequest();return t.autoCreate=!1,Bt(e,t)}},{key:"toJSON",value:function(){return{signInMethod:this.signInMethod,providerId:this.providerId,pendingToken:this.pendingToken}}},{key:"buildRequest",value:function(){return{requestUri:"http://localhost",returnSecureToken:!0,pendingToken:this.pendingToken}}}],[{key:"fromJSON",value:function(e){var t="string"==typeof e?JSON.parse(e):e,n=t.providerId,a=t.signInMethod,i=t.pendingToken;return n&&a&&i&&n===a?new r(n,i):null}},{key:"_create",value:function(e,t){return new r(e,t)}}]),r}(_t),lr=function(e){"use strict";(0,b.default)(r,e);var t=(0,E.default)(r);function r(e){return(0,c.default)(this,r),X(e.startsWith("saml."),"argument-error"),t.call(this,e)}return(0,f.default)(r,null,[{key:"credentialFromResult",value:function(e){return r.samlCredentialFromTaggedObject(e)}},{key:"credentialFromError",value:function(e){return r.samlCredentialFromTaggedObject(e.customData||{})}},{key:"credentialFromJSON",value:function(e){var t=cr.fromJSON(e);return X(t,"argument-error"),t}},{key:"samlCredentialFromTaggedObject",value:function(e){var t=e._tokenResponse;if(!t)return null;var r=t.pendingToken,n=t.providerId;if(!r||!n)return null;try{return cr._create(n,r)}catch(e){return null}}}]),r}(nr),fr=function(e){"use strict";(0,b.default)(r,e);var t=(0,E.default)(r);function r(){return(0,c.default)(this,r),t.call(this,"twitter.com")}return(0,f.default)(r,null,[{key:"credential",value:function(e,t){return Gt._fromParams({providerId:r.PROVIDER_ID,signInMethod:r.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:t})}},{key:"credentialFromResult",value:function(e){return r.credentialFromTaggedObject(e)}},{key:"credentialFromError",value:function(e){return r.credentialFromTaggedObject(e.customData||{})}},{key:"credentialFromTaggedObject",value:function(e){var t=e._tokenResponse;if(!t)return null;var n=t.oauthAccessToken,a=t.oauthTokenSecret;if(!n||!a)return null;try{return r.credential(n,a)}catch(e){return null}}}]),r}(ar);function dr(e,t){return pr.apply(this,arguments)}function pr(){return(pr=
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
(0,u.default)(S.default.mark((function e(t,r){return S.default.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",me(t,"POST","/v1/accounts:signUp",fe(t,r)));case 1:case"end":return e.stop()}}),e)})))).apply(this,arguments)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */fr.TWITTER_SIGN_IN_METHOD="twitter.com",fr.PROVIDER_ID="twitter.com";var hr=function(){"use strict";function e(t){(0,c.default)(this,e),this.user=t.user,this.providerId=t.providerId,this._tokenResponse=t._tokenResponse,this.operationType=t.operationType}return(0,f.default)(e,null,[{key:"_fromIdTokenResponse",value:function(t,r,n){var a=arguments.length>3&&void 0!==arguments[3]&&arguments[3];return(0,u.default)(S.default.mark((function i(){var o,u,s;return S.default.wrap((function(i){for(;;)switch(i.prev=i.next){case 0:return i.next=2,Je._fromIdTokenResponse(t,n,a);case 2:return o=i.sent,u=vr(n),s=new e({user:o,providerId:u,_tokenResponse:n,operationType:r}),i.abrupt("return",s);case 6:case"end":return i.stop()}}),i)})))()}},{key:"_forOperation",value:function(t,r,n){return(0,u.default)(S.default.mark((function a(){var i;return S.default.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,t._updateTokensIfNecessary(n,!0);case 2:return i=vr(n),a.abrupt("return",new e({user:t,providerId:i,_tokenResponse:n,operationType:r}));case 4:case"end":return a.stop()}}),a)})))()}}]),e}();function vr(e){return e.providerId?e.providerId:"phoneNumber"in e?"phone":null}function mr(e){return gr.apply(this,arguments)}function gr(){return(gr=
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
(0,u.default)(S.default.mark((function e(t){var r,n,a,i;return S.default.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=vt(t),e.next=4,n._initializationPromise;case 4:if(!(null===(r=n.currentUser)||void 0===r?void 0:r.isAnonymous)){e.next=6;break}return e.abrupt("return",new hr({user:n.currentUser,providerId:null,operationType:"signIn"}));case 6:return e.next=8,dr(n,{returnSecureToken:!0});case 8:return a=e.sent,e.next=11,hr._fromIdTokenResponse(n,"signIn",a,!0);case 11:return i=e.sent,e.next=14,n._updateCurrentUser(i.user);case 14:return e.abrupt("return",i);case 15:case"end":return e.stop()}}),e)})))).apply(this,arguments)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var yr=function(e){"use strict";(0,b.default)(r,e);var t=(0,E.default)(r);function r(e,n,a,o){var u,s;return(0,c.default)(this,r),(u=t.call(this,n.code,n.message)).operationType=a,u.user=o,Object.setPrototypeOf((0,i.default)(u),r.prototype),u.customData={appName:e.name,tenantId:null!==(s=e.tenantId)&&void 0!==s?s:void 0,_serverResponse:n.customData._serverResponse,operationType:a},u}return(0,f.default)(r,null,[{key:"_fromErrorAndOperation",value:function(e,t,n,a){return new r(e,t,n,a)}}]),r}(A.FirebaseError);function br(e,t,r,n){return("reauthenticate"===t?r._getReauthenticationResolver(e):r._getIdTokenResponse(e)).catch((function(r){if("auth/multi-factor-auth-required"===r.code)throw yr._fromErrorAndOperation(e,r,t,n);throw r}))}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function _r(e){return new Set(e.map((function(e){return e.providerId})).filter((function(e){return!!e})))}function kr(e,t){return wr.apply(this,arguments)}function wr(){return(wr=
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
(0,u.default)(S.default.mark((function e(t,r){var n,a,i;return S.default.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=(0,A.getModularInstance)(t),e.next=3,Er(!0,n,r);case 3:return e.t0=xe,e.t1=n.auth,e.next=7,n.getIdToken();case 7:return e.t2=e.sent,e.t3=[r],e.t4={idToken:e.t2,deleteProvider:e.t3},e.next=12,(0,e.t0)(e.t1,e.t4);case 12:return a=e.sent.providerUserInfo,i=_r(a||[]),n.providerData=n.providerData.filter((function(e){return i.has(e.providerId)})),i.has("phone")||(n.phoneNumber=null),e.next=18,n.auth._persistUserIfCurrent(n);case 18:return e.abrupt("return",n);case 19:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function xr(e,t){return Ir.apply(this,arguments)}function Ir(){return Ir=(0,u.default)(S.default.mark((function e(t,r){var n,a,i=arguments;return S.default.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=i.length>2&&void 0!==i[2]&&i[2],e.t0=Ce,e.t1=t,e.t2=r,e.t3=t.auth,e.next=7,t.getIdToken();case 7:return e.t4=e.sent,e.t5=e.t2._linkToIdToken.call(e.t2,e.t3,e.t4),e.t6=n,e.next=12,(0,e.t0)(e.t1,e.t5,e.t6);case 12:return a=e.sent,e.abrupt("return",hr._forOperation(t,"link",a));case 14:case"end":return e.stop()}}),e)}))),Ir.apply(this,arguments)}function Er(e,t,r){return Tr.apply(this,arguments)}function Tr(){return(Tr=(0,u.default)(S.default.mark((function e(t,r,n){var a,i;return S.default.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Ue(r);case 2:a=_r(r.providerData),i=!1===t?"provider-already-linked":"no-such-provider",X(a.has(n)===t,r.auth,i);case 5:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function Sr(e,t){return Ar.apply(this,arguments)}function Ar(){return Ar=
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
(0,u.default)(S.default.mark((function e(t,r){var n,a,i,o,u,s,c,l=arguments;return S.default.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=l.length>2&&void 0!==l[2]&&l[2],i=t.auth,o="reauthenticate",e.prev=4,e.next=7,Ce(t,br(i,o,r,t),n);case 7:return X((u=e.sent).idToken,i,"internal-error"),X(s=De(u.idToken),i,"internal-error"),c=s.sub,X(t.uid===c,i,"user-mismatch"),e.abrupt("return",hr._forOperation(t,o,u));case 16:throw e.prev=16,e.t0=e.catch(4),"auth/user-not-found"===(null===(a=e.t0)||void 0===a?void 0:a.code)&&W(i,"user-mismatch"),e.t0;case 20:case"end":return e.stop()}}),e,null,[[4,16]])}))),Ar.apply(this,arguments)}function Or(e,t){return Nr.apply(this,arguments)}function Nr(){return Nr=
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
(0,u.default)(S.default.mark((function e(t,r){var n,a,i,o,u=arguments;return S.default.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=u.length>2&&void 0!==u[2]&&u[2],a="signIn",e.next=4,br(t,a,r);case 4:return i=e.sent,e.next=7,hr._fromIdTokenResponse(t,a,i);case 7:if(o=e.sent,n){e.next=11;break}return e.next=11,t._updateCurrentUser(o.user);case 11:return e.abrupt("return",o);case 12:case"end":return e.stop()}}),e)}))),Nr.apply(this,arguments)}function Rr(e,t){return Dr.apply(this,arguments)}function Dr(){return(Dr=(0,u.default)(S.default.mark((function e(t,r){return S.default.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",Or(vt(t),r));case 1:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function Cr(e,t){return Pr.apply(this,arguments)}function Pr(){return(Pr=(0,u.default)(S.default.mark((function e(t,r){var n;return S.default.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=(0,A.getModularInstance)(t),e.next=3,Er(!1,n,r.providerId);case 3:return e.abrupt("return",xr(n,r));case 4:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function Lr(e,t){return jr.apply(this,arguments)}function jr(){return(jr=(0,u.default)(S.default.mark((function e(t,r){return S.default.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",Sr((0,A.getModularInstance)(t),r));case 1:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function Mr(e,t){return Ur.apply(this,arguments)}function Ur(){return(Ur=
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
(0,u.default)(S.default.mark((function e(t,r){return S.default.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",me(t,"POST","/v1/accounts:signInWithCustomToken",fe(t,r)));case 1:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function Fr(e,t){return Vr.apply(this,arguments)}function Vr(){return(Vr=
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
(0,u.default)(S.default.mark((function e(t,r){var n,a,i;return S.default.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=vt(t),e.next=3,Mr(n,{token:r,returnSecureToken:!0});case 3:return a=e.sent,e.next=6,hr._fromIdTokenResponse(n,"signIn",a);case 6:return i=e.sent,e.next=9,n._updateCurrentUser(i.user);case 9:return e.abrupt("return",i);case 10:case"end":return e.stop()}}),e)})))).apply(this,arguments)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var qr=function(){"use strict";function e(t,r){(0,c.default)(this,e),this.factorId=t,this.uid=r.mfaEnrollmentId,this.enrollmentTime=new Date(r.enrolledAt).toUTCString(),this.displayName=r.displayName}return(0,f.default)(e,null,[{key:"_fromServerResponse",value:function(e,t){return"phoneInfo"in t?Hr._fromServerResponse(e,t):W(e,"internal-error")}}]),e}(),Hr=function(e){"use strict";(0,b.default)(r,e);var t=(0,E.default)(r);function r(e){var n;return(0,c.default)(this,r),(n=t.call(this,"phone",e)).phoneNumber=e.phoneInfo,n}return(0,f.default)(r,null,[{key:"_fromServerResponse",value:function(e,t){return new r(t)}}]),r}(qr);
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function zr(e,t,r){var n;X((null===(n=r.url)||void 0===n?void 0:n.length)>0,e,"invalid-continue-uri"),X(void 0===r.dynamicLinkDomain||r.dynamicLinkDomain.length>0,e,"invalid-dynamic-link-domain"),t.continueUrl=r.url,t.dynamicLinkDomain=r.dynamicLinkDomain,t.canHandleCodeInApp=r.handleCodeInApp,r.iOS&&(X(r.iOS.bundleId.length>0,e,"missing-ios-bundle-id"),t.iOSBundleId=r.iOS.bundleId),r.android&&(X(r.android.packageName.length>0,e,"missing-android-pkg-name"),t.androidInstallApp=r.android.installApp,t.androidMinimumVersionCode=r.android.minimumVersion,t.androidPackageName=r.android.packageName)}function Br(e,t,r){return Wr.apply(this,arguments)}function Wr(){return(Wr=
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
(0,u.default)(S.default.mark((function e(t,r,n){var a,i;return S.default.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=(0,A.getModularInstance)(t),i={requestType:"PASSWORD_RESET",email:r},n&&zr(a,i,n),e.next=5,Ct(a,i);case 5:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function Gr(e,t,r){return Kr.apply(this,arguments)}function Kr(){return(Kr=(0,u.default)(S.default.mark((function e(t,r,n){return S.default.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,kt((0,A.getModularInstance)(t),{oobCode:r,newPassword:n});case 2:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function Jr(e,t){return Yr.apply(this,arguments)}function Yr(){return(Yr=(0,u.default)(S.default.mark((function e(t,r){return S.default.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Et((0,A.getModularInstance)(t),{oobCode:r});case 2:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function Xr(e,t){return Zr.apply(this,arguments)}function Zr(){return(Zr=(0,u.default)(S.default.mark((function e(t,r){var n,a,i,o;return S.default.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=(0,A.getModularInstance)(t),e.next=3,kt(n,{oobCode:r});case 3:a=e.sent,X(i=a.requestType,n,"internal-error"),e.t0=i,e.next="EMAIL_SIGNIN"===e.t0?9:"VERIFY_AND_CHANGE_EMAIL"===e.t0?10:"REVERT_SECOND_FACTOR_ADDITION"===e.t0?12:13;break;case 9:return e.abrupt("break",14);case 10:return X(a.newEmail,n,"internal-error"),e.abrupt("break",14);case 12:X(a.mfaInfo,n,"internal-error");case 13:X(a.email,n,"internal-error");case 14:return o=null,a.mfaInfo&&(o=qr._fromServerResponse(vt(n),a.mfaInfo)),e.abrupt("return",{data:{email:("VERIFY_AND_CHANGE_EMAIL"===a.requestType?a.newEmail:a.email)||null,previousEmail:("VERIFY_AND_CHANGE_EMAIL"===a.requestType?a.email:a.newEmail)||null,multiFactorInfo:o},operation:i});case 17:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function Qr(e,t){return $r.apply(this,arguments)}function $r(){return($r=(0,u.default)(S.default.mark((function e(t,r){var n;return S.default.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Xr((0,A.getModularInstance)(t),r);case 2:return n=e.sent.data,e.abrupt("return",n.email);case 4:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function en(e,t,r){return tn.apply(this,arguments)}function tn(){return(tn=(0,u.default)(S.default.mark((function e(t,r,n){var a,i,o;return S.default.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=vt(t),e.next=3,dr(a,{returnSecureToken:!0,email:r,password:n});case 3:return i=e.sent,e.next=6,hr._fromIdTokenResponse(a,"signIn",i);case 6:return o=e.sent,e.next=9,a._updateCurrentUser(o.user);case 9:return e.abrupt("return",o);case 10:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function rn(e,t,r){return Rr((0,A.getModularInstance)(e),rr.credential(t,r))}function nn(e,t,r){return an.apply(this,arguments)}function an(){return(an=
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
(0,u.default)(S.default.mark((function e(t,r,n){var a,i;return S.default.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=(0,A.getModularInstance)(t),i={requestType:"EMAIL_SIGNIN",email:r},X(n.handleCodeInApp,a,"argument-error"),n&&zr(a,i,n),e.next=6,Lt(a,i);case 6:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function on(e,t){var r=er.parseLink(t);return"EMAIL_SIGNIN"===(null==r?void 0:r.operation)}function un(e,t,r){return sn.apply(this,arguments)}function sn(){return(sn=(0,u.default)(S.default.mark((function e(t,r,n){var a,i;return S.default.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=(0,A.getModularInstance)(t),X((i=rr.credentialWithLink(r,n||re()))._tenantId===(a.tenantId||null),a,"tenant-id-mismatch"),e.abrupt("return",Rr(a,i));case 4:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function cn(e,t){return ln.apply(this,arguments)}function ln(){return(ln=
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
(0,u.default)(S.default.mark((function e(t,r){return S.default.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",de(t,"POST","/v1/accounts:createAuthUri",fe(t,r)));case 1:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function fn(e,t){return dn.apply(this,arguments)}function dn(){return(dn=
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
(0,u.default)(S.default.mark((function e(t,r){var n,a,i;return S.default.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=ne()?re():"http://localhost",a={identifier:r,continueUri:n},e.next=4,cn((0,A.getModularInstance)(t),a);case 4:return i=e.sent.signinMethods,e.abrupt("return",i||[]);case 6:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function pn(e,t){return hn.apply(this,arguments)}function hn(){return(hn=(0,u.default)(S.default.mark((function e(t,r){var n,a,i;return S.default.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=(0,A.getModularInstance)(t),e.next=3,t.getIdToken();case 3:return a=e.sent,i={requestType:"VERIFY_EMAIL",idToken:a},r&&zr(n.auth,i,r),e.next=8,Rt(n.auth,i);case 8:if(e.sent.email===t.email){e.next=12;break}return e.next=12,t.reload();case 12:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function vn(e,t,r){return mn.apply(this,arguments)}function mn(){return(mn=(0,u.default)(S.default.mark((function e(t,r,n){var a,i,o;return S.default.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=(0,A.getModularInstance)(t),e.next=3,t.getIdToken();case 3:return i=e.sent,o={requestType:"VERIFY_AND_CHANGE_EMAIL",idToken:i,newEmail:r},n&&zr(a.auth,o,n),e.next=8,Mt(a.auth,o);case 8:if(e.sent.email===t.email){e.next=12;break}return e.next=12,t.reload();case 12:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function gn(e,t){return yn.apply(this,arguments)}function yn(){return(yn=
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
(0,u.default)(S.default.mark((function e(t,r){return S.default.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",de(t,"POST","/v1/accounts:update",r));case 1:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function bn(e,t){return _n.apply(this,arguments)}function _n(){return(_n=
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
(0,u.default)(S.default.mark((function e(t,r){var n,a,i,o,u,s,c;return S.default.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(n=r.displayName,a=r.photoURL,void 0!==n||void 0!==a){e.next=3;break}return e.abrupt("return");case 3:return i=(0,A.getModularInstance)(t),e.next=6,i.getIdToken();case 6:return o=e.sent,u={idToken:o,displayName:n,photoUrl:a,returnSecureToken:!0},e.next=10,Ce(i,gn(i.auth,u));case 10:return s=e.sent,i.displayName=s.displayName||null,i.photoURL=s.photoUrl||null,(c=i.providerData.find((function(e){return"password"===e.providerId})))&&(c.displayName=i.displayName,c.photoURL=i.photoURL),e.next=17,i._updateTokensIfNecessary(s);case 17:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function kn(e,t){return xn((0,A.getModularInstance)(e),t,null)}function wn(e,t){return xn((0,A.getModularInstance)(e),null,t)}function xn(e,t,r){return In.apply(this,arguments)}function In(){return(In=(0,u.default)(S.default.mark((function e(t,r,n){var a,i,o,u;return S.default.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=t.auth,e.next=3,t.getIdToken();case 3:return i=e.sent,o={idToken:i,returnSecureToken:!0},r&&(o.email=r),n&&(o.password=n),e.next=9,Ce(t,xt(a,o));case 9:return u=e.sent,e.next=12,t._updateTokensIfNecessary(u,!0);case 12:case"end":return e.stop()}}),e)})))).apply(this,arguments)}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var En=function e(t,r){"use strict";var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};(0,c.default)(this,e),this.isNewUser=t,this.providerId=r,this.profile=n},Tn=function(e){"use strict";(0,b.default)(r,e);var t=(0,E.default)(r);function r(e,n,a,i){var o;return(0,c.default)(this,r),(o=t.call(this,e,n,a)).username=i,o}return r}(En),Sn=function(e){"use strict";(0,b.default)(r,e);var t=(0,E.default)(r);function r(e,n){return(0,c.default)(this,r),t.call(this,e,"facebook.com",n)}return r}(En),An=function(e){"use strict";(0,b.default)(r,e);var t=(0,E.default)(r);function r(e,n){return(0,c.default)(this,r),t.call(this,e,"github.com",n,"string"==typeof(null==n?void 0:n.login)?null==n?void 0:n.login:null)}return r}(Tn),On=function(e){"use strict";(0,b.default)(r,e);var t=(0,E.default)(r);function r(e,n){return(0,c.default)(this,r),t.call(this,e,"google.com",n)}return r}(En),Nn=function(e){"use strict";(0,b.default)(r,e);var t=(0,E.default)(r);function r(e,n,a){return(0,c.default)(this,r),t.call(this,e,"twitter.com",n,a)}return r}(Tn);function Rn(e){var t=e.user,r=e._tokenResponse;return t.isAnonymous&&!r?{providerId:null,isNewUser:!1,profile:null}:function(e){var t,r;if(!e)return null;var n=e.providerId,a=e.rawUserInfo?JSON.parse(e.rawUserInfo):{},i=e.isNewUser||"identitytoolkit#SignupNewUserResponse"===e.kind;if(!n&&(null==e?void 0:e.idToken)){var o=null===(r=null===(t=De(e.idToken))||void 0===t?void 0:t.firebase)||void 0===r?void 0:r.sign_in_provider;if(o)return new En(i,"anonymous"!==o&&"custom"!==o?o:null)}if(!n)return null;switch(n){case"facebook.com":return new Sn(i,a);case"github.com":return new An(i,a);case"google.com":return new On(i,a);case"twitter.com":return new Nn(i,a,e.screenName||null);case"custom":case"anonymous":return new En(i,null);default:return new En(i,n,a)}}(r)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Dn(e,t){return(0,A.getModularInstance)(e).setPersistence(t)}function Cn(e,t,r,n){return(0,A.getModularInstance)(e).onIdTokenChanged(t,r,n)}function Pn(e,t,r){return(0,A.getModularInstance)(e).beforeAuthStateChanged(t,r)}function Ln(e,t,r,n){return(0,A.getModularInstance)(e).onAuthStateChanged(t,r,n)}function jn(e){(0,A.getModularInstance)(e).useDeviceLanguage()}function Mn(e,t){return(0,A.getModularInstance)(e).updateCurrentUser(t)}function Un(e){return(0,A.getModularInstance)(e).signOut()}function Fn(e){return Vn.apply(this,arguments)}function Vn(){return(Vn=(0,u.default)(S.default.mark((function e(t){return S.default.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",(0,A.getModularInstance)(t).delete());case 1:case"end":return e.stop()}}),e)})))).apply(this,arguments)}var qn=function(){"use strict";function e(t,r){(0,c.default)(this,e),this.type=t,this.credential=r}return(0,f.default)(e,[{key:"toJSON",value:function(){var e="enroll"===this.type?"idToken":"pendingCredential";return{multiFactorSession:(0,p.default)({},e,this.credential)}}}],[{key:"_fromIdtoken",value:function(t){return new e("enroll",t)}},{key:"_fromMfaPendingCredential",value:function(t){return new e("signin",t)}},{key:"fromJSON",value:function(t){var r,n;if(null==t?void 0:t.multiFactorSession){if(null===(r=t.multiFactorSession)||void 0===r?void 0:r.pendingCredential)return e._fromMfaPendingCredential(t.multiFactorSession.pendingCredential);if(null===(n=t.multiFactorSession)||void 0===n?void 0:n.idToken)return e._fromIdtoken(t.multiFactorSession.idToken)}return null}}]),e}(),Hn=function(){"use strict";function e(t,r,n){(0,c.default)(this,e),this.session=t,this.hints=r,this.signInResolver=n}return(0,f.default)(e,[{key:"resolveSignIn",value:function(e){var t=this;return(0,u.default)(S.default.mark((function r(){var n;return S.default.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return n=e,r.abrupt("return",t.signInResolver(n));case 2:case"end":return r.stop()}}),r)})))()}}],[{key:"_fromError",value:function(t,r){var n=vt(t),a=r.customData._serverResponse,i=(a.mfaInfo||[]).map((function(e){return qr._fromServerResponse(n,e)}));X(a.mfaPendingCredential,n,"internal-error");var o,s=qn._fromMfaPendingCredential(a.mfaPendingCredential);return new e(s,i,(o=(0,u.default)(S.default.mark((function e(t){var i,o,u;return S.default.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t._process(n,s);case 2:i=e.sent,delete a.mfaInfo,delete a.mfaPendingCredential,o=Object.assign(Object.assign({},a),{idToken:i.idToken,refreshToken:i.refreshToken}),e.t0=r.operationType,e.next="signIn"===e.t0?9:"reauthenticate"===e.t0?15:17;break;case 9:return e.next=11,hr._fromIdTokenResponse(n,r.operationType,o);case 11:return u=e.sent,e.next=14,n._updateCurrentUser(u.user);case 14:return e.abrupt("return",u);case 15:return X(r.user,n,"internal-error"),e.abrupt("return",hr._forOperation(r.user,r.operationType,o));case 17:W(n,"internal-error");case 18:case"end":return e.stop()}}),e)}))),function(e){return o.apply(this,arguments)}))}}]),e}();
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function zn(e,t){var r,n=(0,A.getModularInstance)(e),a=t;return X(t.customData.operationType,n,"argument-error"),X(null===(r=a.customData._serverResponse)||void 0===r?void 0:r.mfaPendingCredential,n,"argument-error"),Hn._fromError(n,a)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Bn(e,t){return de(e,"POST","/v2/accounts/mfaEnrollment:start",fe(e,t))}var Wn=function(){"use strict";function e(t){var r=this;(0,c.default)(this,e),this.user=t,this.enrolledFactors=[],t._onReload((function(e){e.mfaInfo&&(r.enrolledFactors=e.mfaInfo.map((function(e){return qr._fromServerResponse(t.auth,e)})))}))}return(0,f.default)(e,[{key:"getSession",value:function(){var e=this;return(0,u.default)(S.default.mark((function t(){return S.default.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.t0=qn,t.next=3,e.user.getIdToken();case 3:return t.t1=t.sent,t.abrupt("return",t.t0._fromIdtoken.call(t.t0,t.t1));case 5:case"end":return t.stop()}}),t)})))()}},{key:"enroll",value:function(e,t){var r=this;return(0,u.default)(S.default.mark((function n(){var a,i,o;return S.default.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return a=e,n.next=3,r.getSession();case 3:return i=n.sent,n.next=6,Ce(r.user,a._process(r.user.auth,i,t));case 6:return o=n.sent,n.next=9,r.user._updateTokensIfNecessary(o);case 9:return n.abrupt("return",r.user.reload());case 10:case"end":return n.stop()}}),n)})))()}},{key:"unenroll",value:function(e){var t=this;return(0,u.default)(S.default.mark((function r(){var n,a,i,o;return S.default.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return a="string"==typeof e?e:e.uid,r.next=4,t.user.getIdToken();case 4:return i=r.sent,r.next=7,Ce(t.user,de(u=t.user.auth,"POST","/v2/accounts/mfaEnrollment:withdraw",fe(u,{idToken:i,mfaEnrollmentId:a})));case 7:return o=r.sent,t.enrolledFactors=t.enrolledFactors.filter((function(e){return e.uid!==a})),r.next=11,t.user._updateTokensIfNecessary(o);case 11:return r.prev=11,r.next=14,t.user.reload();case 14:r.next=20;break;case 16:if(r.prev=16,r.t0=r.catch(11),"auth/user-token-expired"===(null===(n=r.t0)||void 0===n?void 0:n.code)){r.next=20;break}throw r.t0;case 20:case"end":return r.stop()}var u}),r,null,[[11,16]])})))()}}],[{key:"_fromUser",value:function(t){return new e(t)}}]),e}(),Gn=new WeakMap;function Kn(e){var t=(0,A.getModularInstance)(e);return Gn.has(t)||Gn.set(t,Wn._fromUser(t)),Gn.get(t)}var Jn="__sak",Yn=function(){"use strict";function e(t,r){(0,c.default)(this,e),this.storageRetriever=t,this.type=r}return(0,f.default)(e,[{key:"_isAvailable",value:function(){try{return this.storage?(this.storage.setItem(Jn,"1"),this.storage.removeItem(Jn),Promise.resolve(!0)):Promise.resolve(!1)}catch(e){return Promise.resolve(!1)}}},{key:"_set",value:function(e,t){return this.storage.setItem(e,JSON.stringify(t)),Promise.resolve()}},{key:"_get",value:function(e){var t=this.storage.getItem(e);return Promise.resolve(t?JSON.parse(t):null)}},{key:"_remove",value:function(e){return this.storage.removeItem(e),Promise.resolve()}},{key:"storage",get:function(){return this.storageRetriever()}}]),e}();
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Xn=function(e){"use strict";(0,b.default)(r,e);var t=(0,E.default)(r);function r(){var e,n;return(0,c.default)(this,r),(e=t.call(this,(function(){return window.localStorage}),"LOCAL")).boundEventHandler=function(t,r){return e.onStorageEvent(t,r)},e.listeners={},e.localCache={},e.pollTimer=null,e.safariLocalStorageNotSynced=(tt(n=(0,A.getUA)())||ut(n))&&function(){try{return!(!window||window===window.top)}catch(e){return!1}}(),e.fallbackToPolling=ft(),e._shouldAllowMigration=!0,e}return(0,f.default)(r,[{key:"forAllChangedKeys",value:function(e){var t=!0,r=!1,n=void 0;try{for(var a,i=Object.keys(this.listeners)[Symbol.iterator]();!(t=(a=i.next()).done);t=!0){var o=a.value,u=this.storage.getItem(o),s=this.localCache[o];u!==s&&e(o,s,u)}}catch(e){r=!0,n=e}finally{try{t||null==i.return||i.return()}finally{if(r)throw n}}}},{key:"onStorageEvent",value:function(e){var t=arguments.length>1&&void 0!==arguments[1]&&arguments[1],r=this;if(e.key){var n=e.key;if(t?this.detachListener():this.stopPolling(),this.safariLocalStorageNotSynced){var a=this.storage.getItem(n);if(e.newValue!==a)null!==e.newValue?this.storage.setItem(n,e.newValue):this.storage.removeItem(n);else if(this.localCache[n]===e.newValue&&!t)return}var i=function(){var e=r.storage.getItem(n);(t||r.localCache[n]!==e)&&r.notifyListeners(n,e)},o=this.storage.getItem(n);lt()&&o!==e.newValue&&e.newValue!==e.oldValue?setTimeout(i,10):i()}else{var u=this;this.forAllChangedKeys((function(e,t,r){u.notifyListeners(e,r)}))}}},{key:"notifyListeners",value:function(e,t){this.localCache[e]=t;var r=this.listeners[e],n=!0,a=!1,i=void 0;if(r)try{for(var o,u=Array.from(r)[Symbol.iterator]();!(n=(o=u.next()).done);n=!0){(0,o.value)(t?JSON.parse(t):t)}}catch(e){a=!0,i=e}finally{try{n||null==u.return||u.return()}finally{if(a)throw i}}}},{key:"startPolling",value:function(){var e=this;this.stopPolling(),this.pollTimer=setInterval((function(){var t=e;e.forAllChangedKeys((function(e,r,n){t.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:r,newValue:n}),!0)}))}),1e3)}},{key:"stopPolling",value:function(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}},{key:"attachListener",value:function(){window.addEventListener("storage",this.boundEventHandler)}},{key:"detachListener",value:function(){window.removeEventListener("storage",this.boundEventHandler)}},{key:"_addListener",value:function(e,t){0===Object.keys(this.listeners).length&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(t)}},{key:"_removeListener",value:function(e,t){this.listeners[e]&&(this.listeners[e].delete(t),0===this.listeners[e].size&&delete this.listeners[e]),0===Object.keys(this.listeners).length&&(this.detachListener(),this.stopPolling())}},{key:"_set",value:function(e,t){var n=this,a=this;return(0,u.default)(S.default.mark((function i(){return S.default.wrap((function(i){for(;;)switch(i.prev=i.next){case 0:return i.next=2,(0,v.default)((0,g.default)(r.prototype),"_set",n).call(a,e,t);case 2:a.localCache[e]=JSON.stringify(t);case 3:case"end":return i.stop()}}),i)})))()}},{key:"_get",value:function(e){var t=this,n=this;return(0,u.default)(S.default.mark((function a(){var i;return S.default.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,(0,v.default)((0,g.default)(r.prototype),"_get",t).call(n,e);case 2:return i=a.sent,n.localCache[e]=JSON.stringify(i),a.abrupt("return",i);case 5:case"end":return a.stop()}}),a)})))()}},{key:"_remove",value:function(e){var t=this,n=this;return(0,u.default)(S.default.mark((function a(){return S.default.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,(0,v.default)((0,g.default)(r.prototype),"_remove",t).call(n,e);case 2:delete n.localCache[e];case 3:case"end":return a.stop()}}),a)})))()}}]),r}(Yn);Xn.type="LOCAL";var Zn=Xn,Qn=function(e){"use strict";(0,b.default)(r,e);var t=(0,E.default)(r);function r(){return(0,c.default)(this,r),t.call(this,(function(){return window.sessionStorage}),"SESSION")}return(0,f.default)(r,[{key:"_addListener",value:function(e,t){}},{key:"_removeListener",value:function(e,t){}}]),r}(Yn);
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Qn.type="SESSION";var $n=Qn;
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ea(e){return Promise.all(e.map((t=(0,u.default)(S.default.mark((function e(t){var r;return S.default.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,t;case 3:return r=e.sent,e.abrupt("return",{fulfilled:!0,value:r});case 7:return e.prev=7,e.t0=e.catch(0),e.abrupt("return",{fulfilled:!1,reason:e.t0});case 10:case"end":return e.stop()}}),e,null,[[0,7]])}))),function(e){return t.apply(this,arguments)})));var t}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var ta=function(){"use strict";function e(t){(0,c.default)(this,e),this.eventTarget=t,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}return(0,f.default)(e,[{key:"isListeningto",value:function(e){return this.eventTarget===e}},{key:"handleEvent",value:function(e){var t=this;return(0,u.default)(S.default.mark((function r(){var n,a,i,o,s,c,l,f;return S.default.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:if(a=(n=e).data,i=a.eventId,o=a.eventType,s=a.data,null==(c=t.handlersMap[o])?void 0:c.size){r.next=5;break}return r.abrupt("return");case 5:return n.ports[0].postMessage({status:"ack",eventId:i,eventType:o}),l=Array.from(c).map(function(){var e=(0,u.default)(S.default.mark((function e(t){return S.default.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",t(n.origin,s));case 1:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()),r.next=9,ea(l);case 9:f=r.sent,n.ports[0].postMessage({status:"done",eventId:i,eventType:o,response:f});case 11:case"end":return r.stop()}}),r)})))()}},{key:"_subscribe",value:function(e,t){0===Object.keys(this.handlersMap).length&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(t)}},{key:"_unsubscribe",value:function(e,t){this.handlersMap[e]&&t&&this.handlersMap[e].delete(t),t&&0!==this.handlersMap[e].size||delete this.handlersMap[e],0===Object.keys(this.handlersMap).length&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}],[{key:"_getInstance",value:function(t){var r=this.receivers.find((function(e){return e.isListeningto(t)}));if(r)return r;var n=new e(t);return this.receivers.push(n),n}}]),e}();
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function ra(){for(var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:10,r="",n=0;n<t;n++)r+=Math.floor(10*Math.random());return e+r}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ta.receivers=[];var na=function(){"use strict";function e(t){(0,c.default)(this,e),this.target=t,this.handlers=new Set}return(0,f.default)(e,[{key:"removeMessageHandler",value:function(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}},{key:"_send",value:function(e,t){var r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:50,n=this;return(0,u.default)(S.default.mark((function a(){var i,o,u;return S.default.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:if(i="undefined"!=typeof MessageChannel?new MessageChannel:null){a.next=3;break}throw new Error("connection_unavailable");case 3:return a.abrupt("return",new Promise((function(a,s){var c=ra("",20);i.port1.start();var l=setTimeout((function(){s(new Error("unsupported_event"))}),r);u={messageChannel:i,onMessage:function(e){var t=e;if(t.data.eventId===c)switch(t.data.status){case"ack":clearTimeout(l),o=setTimeout((function(){s(new Error("timeout"))}),3e3);break;case"done":clearTimeout(o),a(t.data.response);break;default:clearTimeout(l),clearTimeout(o),s(new Error("invalid_response"))}}},n.handlers.add(u),i.port1.addEventListener("message",u.onMessage),n.target.postMessage({eventType:e,eventId:c,data:t},[i.port2])})).finally((function(){u&&n.removeMessageHandler(u)})));case 6:case"end":return a.stop()}}),a)})))()}}]),e}();
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function aa(){return window}
/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function ia(){return void 0!==aa().WorkerGlobalScope&&"function"==typeof aa().importScripts}function oa(){return ua.apply(this,arguments)}function ua(){return(ua=(0,u.default)(S.default.mark((function e(){var t;return S.default.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(null===navigator||void 0===navigator?void 0:navigator.serviceWorker){e.next=2;break}return e.abrupt("return",null);case 2:return e.prev=2,e.next=5,navigator.serviceWorker.ready;case 5:return t=e.sent,e.abrupt("return",t.active);case 9:return e.prev=9,e.t0=e.catch(2),e.abrupt("return",null);case 12:case"end":return e.stop()}}),e,null,[[2,9]])})))).apply(this,arguments)}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
var sa="firebaseLocalStorageDb",ca="firebaseLocalStorage",la="fbase_key",fa=function(){"use strict";function e(t){(0,c.default)(this,e),this.request=t}return(0,f.default)(e,[{key:"toPromise",value:function(){var e=this;return new Promise((function(t,r){var n=e;e.request.addEventListener("success",(function(){t(n.request.result)})),e.request.addEventListener("error",(function(){r(n.request.error)}))}))}}]),e}();function da(e,t){return e.transaction([ca],t?"readwrite":"readonly").objectStore(ca)}function pa(){var e=indexedDB.deleteDatabase(sa);return new fa(e).toPromise()}function ha(){var e=indexedDB.open(sa,1);return new Promise((function(t,r){e.addEventListener("error",(function(){r(e.error)})),e.addEventListener("upgradeneeded",(function(){var t=e.result;try{t.createObjectStore(ca,{keyPath:la})}catch(e){r(e)}})),e.addEventListener("success",(0,u.default)(S.default.mark((function r(){var n;return S.default.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:if((n=e.result).objectStoreNames.contains(ca)){r.next=12;break}return n.close(),r.next=5,pa();case 5:return r.t0=t,r.next=8,ha();case 8:r.t1=r.sent,(0,r.t0)(r.t1),r.next=13;break;case 12:t(n);case 13:case"end":return r.stop()}}),r)}))))}))}function va(e,t,r){return ma.apply(this,arguments)}function ma(){return(ma=(0,u.default)(S.default.mark((function e(t,r,n){var a,i;return S.default.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return i=da(t,!0).put((a={},(0,p.default)(a,la,r),(0,p.default)(a,"value",n),a)),e.abrupt("return",new fa(i).toPromise());case 3:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function ga(e,t){return ya.apply(this,arguments)}function ya(){return(ya=(0,u.default)(S.default.mark((function e(t,r){var n,a;return S.default.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=da(t,!1).get(r),e.next=3,new fa(n).toPromise();case 3:return a=e.sent,e.abrupt("return",void 0===a?null:a.value);case 5:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function ba(e,t){var r=da(e,!0).delete(t);return new fa(r).toPromise()}var _a=function(){"use strict";function e(){(0,c.default)(this,e),this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then((function(){}),(function(){}))}return(0,f.default)(e,[{key:"_openDb",value:function(){var e=this;return(0,u.default)(S.default.mark((function t(){return S.default.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(!e.db){t.next=2;break}return t.abrupt("return",e.db);case 2:return t.next=4,ha();case 4:return e.db=t.sent,t.abrupt("return",e.db);case 6:case"end":return t.stop()}}),t)})))()}},{key:"_withRetries",value:function(e){var t=this;return(0,u.default)(S.default.mark((function r(){var n,a;return S.default.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:n=0;case 1:return r.prev=2,r.next=5,t._openDb();case 5:return a=r.sent,r.next=8,e(a);case 8:return r.abrupt("return",r.sent);case 11:if(r.prev=11,r.t0=r.catch(2),!(n++>3)){r.next=15;break}throw r.t0;case 15:t.db&&(t.db.close(),t.db=void 0);case 16:r.next=1;break;case 18:case"end":return r.stop()}}),r,null,[[2,11]])})))()}},{key:"initializeServiceWorkerMessaging",value:function(){var e=this;return(0,u.default)(S.default.mark((function t(){return S.default.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.abrupt("return",ia()?e.initializeReceiver():e.initializeSender());case 1:case"end":return t.stop()}}),t)})))()}},{key:"initializeReceiver",value:function(){var e=this;return(0,u.default)(S.default.mark((function t(){return S.default.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:e.receiver=ta._getInstance(ia()?self:null),e.receiver._subscribe("keyChanged",function(){var t=(0,u.default)(S.default.mark((function t(r,n){var a;return S.default.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,e._poll();case 2:return a=t.sent,t.abrupt("return",{keyProcessed:a.includes(n.key)});case 4:case"end":return t.stop()}}),t)})));return function(e,r){return t.apply(this,arguments)}}()),e.receiver._subscribe("ping",function(){var e=(0,u.default)(S.default.mark((function e(t,r){return S.default.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",["keyChanged"]);case 1:case"end":return e.stop()}}),e)})));return function(t,r){return e.apply(this,arguments)}}());case 3:case"end":return t.stop()}}),t)})))()}},{key:"initializeSender",value:function(){var e=this;return(0,u.default)(S.default.mark((function t(){var r,n,a;return S.default.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=3,oa();case 3:if(e.activeServiceWorker=t.sent,e.activeServiceWorker){t.next=6;break}return t.abrupt("return");case 6:return e.sender=new na(e.activeServiceWorker),t.next=9,e.sender._send("ping",{},800);case 9:if(a=t.sent){t.next=12;break}return t.abrupt("return");case 12:(null===(r=a[0])||void 0===r?void 0:r.fulfilled)&&(null===(n=a[0])||void 0===n?void 0:n.value.includes("keyChanged"))&&(e.serviceWorkerReceiverAvailable=!0);case 13:case"end":return t.stop()}}),t)})))()}},{key:"notifyServiceWorker",value:function(e){var t=this;return(0,u.default)(S.default.mark((function r(){return S.default.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:if(t.sender&&t.activeServiceWorker&&(n=void 0,((null===(n=null===navigator||void 0===navigator?void 0:navigator.serviceWorker)||void 0===n?void 0:n.controller)||null)===t.activeServiceWorker)){r.next=2;break}return r.abrupt("return");case 2:return r.prev=2,r.next=5,t.sender._send("keyChanged",{key:e},t.serviceWorkerReceiverAvailable?800:50);case 5:r.next=9;break;case 7:r.prev=7,r.t0=r.catch(2);case 9:case"end":return r.stop()}var n}),r,null,[[2,7]])})))()}},{key:"_isAvailable",value:function(){return(0,u.default)(S.default.mark((function e(){var t;return S.default.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(e.prev=0,indexedDB){e.next=3;break}return e.abrupt("return",!1);case 3:return e.next=5,ha();case 5:return t=e.sent,e.next=8,va(t,Jn,"1");case 8:return e.next=10,ba(t,Jn);case 10:return e.abrupt("return",!0);case 13:e.prev=13,e.t0=e.catch(0);case 15:return e.abrupt("return",!1);case 16:case"end":return e.stop()}}),e,null,[[0,13]])})))()}},{key:"_withPendingWrite",value:function(e){var t=this;return(0,u.default)(S.default.mark((function r(){return S.default.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return t.pendingWrites++,r.prev=1,r.next=4,e();case 4:return r.prev=4,t.pendingWrites--,r.finish(4);case 7:case"end":return r.stop()}}),r,null,[[1,,4,7]])})))()}},{key:"_set",value:function(e,t){var r=this;return(0,u.default)(S.default.mark((function n(){return S.default.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.abrupt("return",r._withPendingWrite((0,u.default)(S.default.mark((function n(){return S.default.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,r._withRetries((function(r){return va(r,e,t)}));case 2:return r.localCache[e]=t,n.abrupt("return",r.notifyServiceWorker(e));case 4:case"end":return n.stop()}}),n)})))));case 1:case"end":return n.stop()}}),n)})))()}},{key:"_get",value:function(e){var t=this;return(0,u.default)(S.default.mark((function r(){var n;return S.default.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.next=2,t._withRetries((function(t){return ga(t,e)}));case 2:return n=r.sent,t.localCache[e]=n,r.abrupt("return",n);case 5:case"end":return r.stop()}}),r)})))()}},{key:"_remove",value:function(e){var t=this;return(0,u.default)(S.default.mark((function r(){return S.default.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.abrupt("return",t._withPendingWrite((0,u.default)(S.default.mark((function r(){return S.default.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.next=2,t._withRetries((function(t){return ba(t,e)}));case 2:return delete t.localCache[e],r.abrupt("return",t.notifyServiceWorker(e));case 4:case"end":return r.stop()}}),r)})))));case 1:case"end":return r.stop()}}),r)})))()}},{key:"_poll",value:function(){var e=this;return(0,u.default)(S.default.mark((function t(){var r,n,a,i,o,u,s,c,l,f,d,p,h,v,m,g,y;return S.default.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,e._withRetries((function(e){var t=da(e,!1).getAll();return new fa(t).toPromise()}));case 2:if(r=t.sent){t.next=5;break}return t.abrupt("return",[]);case 5:if(0===e.pendingWrites){t.next=7;break}return t.abrupt("return",[]);case 7:for(n=[],a=new Set,i=!0,o=!1,u=void 0,t.prev=10,s=r[Symbol.iterator]();!(i=(c=s.next()).done);i=!0)l=c.value,f=l.fbase_key,d=l.value,a.add(f),JSON.stringify(e.localCache[f])!==JSON.stringify(d)&&(e.notifyListeners(f,d),n.push(f));t.next=18;break;case 14:t.prev=14,t.t0=t.catch(10),o=!0,u=t.t0;case 18:t.prev=18,t.prev=19,i||null==s.return||s.return();case 21:if(t.prev=21,!o){t.next=24;break}throw u;case 24:return t.finish(21);case 25:return t.finish(18);case 26:for(p=!0,h=!1,v=void 0,t.prev=27,m=Object.keys(e.localCache)[Symbol.iterator]();!(p=(g=m.next()).done);p=!0)y=g.value,e.localCache[y]&&!a.has(y)&&(e.notifyListeners(y,null),n.push(y));t.next=35;break;case 31:t.prev=31,t.t1=t.catch(27),h=!0,v=t.t1;case 35:t.prev=35,t.prev=36,p||null==m.return||m.return();case 38:if(t.prev=38,!h){t.next=41;break}throw v;case 41:return t.finish(38);case 42:return t.finish(35);case 43:return t.abrupt("return",n);case 44:case"end":return t.stop()}}),t,null,[[10,14,18,26],[19,,21,25],[27,31,35,43],[36,,38,42]])})))()}},{key:"notifyListeners",value:function(e,t){this.localCache[e]=t;var r=this.listeners[e],n=!0,a=!1,i=void 0;if(r)try{for(var o,u=Array.from(r)[Symbol.iterator]();!(n=(o=u.next()).done);n=!0){(0,o.value)(t)}}catch(e){a=!0,i=e}finally{try{n||null==u.return||u.return()}finally{if(a)throw i}}}},{key:"startPolling",value:function(){this.stopPolling();var e=this;this.pollTimer=setInterval((0,u.default)(S.default.mark((function t(){return S.default.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.abrupt("return",e._poll());case 1:case"end":return t.stop()}}),t)}))),800)}},{key:"stopPolling",value:function(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}},{key:"_addListener",value:function(e,t){0===Object.keys(this.listeners).length&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(t)}},{key:"_removeListener",value:function(e,t){this.listeners[e]&&(this.listeners[e].delete(t),0===this.listeners[e].size&&delete this.listeners[e]),0===Object.keys(this.listeners).length&&this.stopPolling()}}]),e}();_a.type="LOCAL";var ka=_a;
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function wa(e,t){return de(e,"POST","/v2/accounts/mfaSignIn:start",fe(e,t))}function xa(e){return Ia.apply(this,arguments)}function Ia(){return(Ia=
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
(0,u.default)(S.default.mark((function e(t){return S.default.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,de(t,"GET","/v1/recaptchaParams");case 2:if(e.t0=e.sent.recaptchaSiteKey,e.t0){e.next=5;break}e.t0="";case 5:return e.abrupt("return",e.t0);case 6:case"end":return e.stop()}}),e)})))).apply(this,arguments)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ea(e){return new Promise((function(t,r){var n,a,i=document.createElement("script");i.setAttribute("src",e),i.onload=t,i.onerror=function(e){var t=G("internal-error");t.customData=e,r(t)},i.type="text/javascript",i.charset="UTF-8",(null!==(a=null===(n=document.getElementsByTagName("head"))||void 0===n?void 0:n[0])&&void 0!==a?a:document).appendChild(i)}))}function Ta(e){return"__".concat(e).concat(Math.floor(1e6*Math.random()))}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Sa=1e12,Aa=function(){"use strict";function e(t){(0,c.default)(this,e),this.auth=t,this.counter=Sa,this._widgets=new Map}return(0,f.default)(e,[{key:"render",value:function(e,t){var r=this.counter;return this._widgets.set(r,new Oa(e,this.auth.name,t||{})),this.counter++,r}},{key:"reset",value:function(e){var t,r=e||Sa;null===(t=this._widgets.get(r))||void 0===t||t.delete(),this._widgets.delete(r)}},{key:"getResponse",value:function(e){var t,r=e||Sa;return(null===(t=this._widgets.get(r))||void 0===t?void 0:t.getResponse())||""}},{key:"execute",value:function(e){var t=this;return(0,u.default)(S.default.mark((function r(){var n,a;return S.default.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return a=e||Sa,null===(n=t._widgets.get(a))||void 0===n||n.execute(),r.abrupt("return","");case 4:case"end":return r.stop()}}),r)})))()}}]),e}(),Oa=function(){"use strict";function e(t,r,n){var a=this;(0,c.default)(this,e),this.params=n,this.timerId=null,this.deleted=!1,this.responseToken=null,this.clickHandler=function(){a.execute()};var i="string"==typeof t?document.getElementById(t):t;X(i,"argument-error",{appName:r}),this.container=i,this.isVisible="invisible"!==this.params.size,this.isVisible?this.execute():this.container.addEventListener("click",this.clickHandler)}return(0,f.default)(e,[{key:"getResponse",value:function(){return this.checkIfDeleted(),this.responseToken}},{key:"delete",value:function(){this.checkIfDeleted(),this.deleted=!0,this.timerId&&(clearTimeout(this.timerId),this.timerId=null),this.container.removeEventListener("click",this.clickHandler)}},{key:"execute",value:function(){var e=this;this.checkIfDeleted(),this.timerId||(this.timerId=window.setTimeout((function(){var t=e;e.responseToken=function(e){for(var t=[],r="1234567890abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ",n=0;n<e;n++)t.push(r.charAt(Math.floor(Math.random()*r.length)));return t.join("")}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(50);var r=e.params,n=r.callback,a=r["expired-callback"];if(n)try{n(e.responseToken)}catch(e){}e.timerId=window.setTimeout((function(){if(t.timerId=null,t.responseToken=null,a)try{a()}catch(e){}t.isVisible&&t.execute()}),6e4)}),500))}},{key:"checkIfDeleted",value:function(){if(this.deleted)throw new Error("reCAPTCHA mock was already deleted!")}}]),e}();var Na=Ta("rcb"),Ra=new ie(3e4,6e4),Da="https://www.google.com/recaptcha/api.js?",Ca=function(){"use strict";function e(){var t;(0,c.default)(this,e),this.hostLanguage="",this.counter=0,this.librarySeparatelyLoaded=!!(null===(t=aa().grecaptcha)||void 0===t?void 0:t.render)}return(0,f.default)(e,[{key:"load",value:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"",r=this;return X(Pa(t),e,"argument-error"),this.shouldResolveImmediately(t)?Promise.resolve(aa().grecaptcha):new Promise((function(n,a){var i=r,o=aa().setTimeout((function(){a(G(e,"network-request-failed"))}),Ra.get());aa()[Na]=function(){var r=i;aa().clearTimeout(o),delete aa()[Na];var u=aa().grecaptcha;if(u){var s=u.render;u.render=function(e,t){var n=s(e,t);return r.counter++,n},i.hostLanguage=t,n(u)}else a(G(e,"internal-error"))},Ea("".concat(Da,"?").concat((0,A.querystring)({onload:Na,render:"explicit",hl:t}))).catch((function(){clearTimeout(o),a(G(e,"internal-error"))}))}))}},{key:"clearedOneInstance",value:function(){this.counter--}},{key:"shouldResolveImmediately",value:function(e){var t;return!!(null===(t=aa().grecaptcha)||void 0===t?void 0:t.render)&&(e===this.hostLanguage||this.counter>0||this.librarySeparatelyLoaded)}}]),e}();function Pa(e){return e.length<=6&&/^\s*[a-zA-Z0-9\-]*\s*$/.test(e)}var La=function(){"use strict";function e(){(0,c.default)(this,e)}return(0,f.default)(e,[{key:"load",value:function(e){return(0,u.default)(S.default.mark((function t(){return S.default.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.abrupt("return",new Aa(e));case 1:case"end":return t.stop()}}),t)})))()}},{key:"clearedOneInstance",value:function(){}}]),e}(),ja="recaptcha",Ma={theme:"light",type:"image"},Ua=function(){"use strict";function e(t){var r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:Object.assign({},Ma),n=arguments.length>2?arguments[2]:void 0;(0,c.default)(this,e),this.parameters=r,this.type=ja,this.destroyed=!1,this.widgetId=null,this.tokenChangeListeners=new Set,this.renderPromise=null,this.recaptcha=null,this.auth=vt(n),this.isInvisible="invisible"===this.parameters.size,X("undefined"!=typeof document,this.auth,"operation-not-supported-in-this-environment");var a="string"==typeof t?document.getElementById(t):t;X(a,this.auth,"argument-error"),this.container=a,this.parameters.callback=this.makeTokenCallback(this.parameters.callback),this._recaptchaLoader=this.auth.settings.appVerificationDisabledForTesting?new La:new Ca,this.validateStartingState()}return(0,f.default)(e,[{key:"verify",value:function(){var e=this;return(0,u.default)(S.default.mark((function t(){var r,n,a;return S.default.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return e.assertNotDestroyed(),t.next=3,e.render();case 3:if(r=t.sent,n=e.getAssertedRecaptcha(),!(a=n.getResponse(r))){t.next=8;break}return t.abrupt("return",a);case 8:return t.abrupt("return",new Promise((function(t){var a=function(r){r&&(e.tokenChangeListeners.delete(a),t(r))};e.tokenChangeListeners.add(a),e.isInvisible&&n.execute(r)})));case 9:case"end":return t.stop()}}),t)})))()}},{key:"render",value:function(){var e=this;try{this.assertNotDestroyed()}catch(e){return Promise.reject(e)}return this.renderPromise||(this.renderPromise=this.makeRenderPromise().catch((function(t){throw e.renderPromise=null,t}))),this.renderPromise}},{key:"_reset",value:function(){this.assertNotDestroyed(),null!==this.widgetId&&this.getAssertedRecaptcha().reset(this.widgetId)}},{key:"clear",value:function(){var e=this;this.assertNotDestroyed(),this.destroyed=!0,this._recaptchaLoader.clearedOneInstance(),this.isInvisible||this.container.childNodes.forEach((function(t){e.container.removeChild(t)}))}},{key:"validateStartingState",value:function(){X(!this.parameters.sitekey,this.auth,"argument-error"),X(this.isInvisible||!this.container.hasChildNodes(),this.auth,"argument-error"),X("undefined"!=typeof document,this.auth,"operation-not-supported-in-this-environment")}},{key:"makeTokenCallback",value:function(e){var t=this;return function(r){if(t.tokenChangeListeners.forEach((function(e){return e(r)})),"function"==typeof e)e(r);else if("string"==typeof e){var n=aa()[e];"function"==typeof n&&n(r)}}}},{key:"assertNotDestroyed",value:function(){X(!this.destroyed,this.auth,"internal-error")}},{key:"makeRenderPromise",value:function(){var e=this;return(0,u.default)(S.default.mark((function t(){var r,n;return S.default.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,e.init();case 2:return e.widgetId||(r=e.container,e.isInvisible||(n=document.createElement("div"),r.appendChild(n),r=n),e.widgetId=e.getAssertedRecaptcha().render(r,e.parameters)),t.abrupt("return",e.widgetId);case 4:case"end":return t.stop()}}),t)})))()}},{key:"init",value:function(){var e=this;return(0,u.default)(S.default.mark((function t(){var r;return S.default.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return X(ne()&&!ia(),e.auth,"internal-error"),t.next=3,Fa();case 3:return t.next=5,e._recaptchaLoader.load(e.auth,e.auth.languageCode||void 0);case 5:return e.recaptcha=t.sent,t.next=8,xa(e.auth);case 8:X(r=t.sent,e.auth,"internal-error"),e.parameters.sitekey=r;case 11:case"end":return t.stop()}}),t)})))()}},{key:"getAssertedRecaptcha",value:function(){return X(this.recaptcha,this.auth,"internal-error"),this.recaptcha}}]),e}();
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Fa(){var e=null;return new Promise((function(t){"complete"!==document.readyState?(e=function(){return t()},window.addEventListener("load",e)):t()})).catch((function(t){throw e&&window.removeEventListener("load",e),t}))}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Va=function(){"use strict";function e(t,r){(0,c.default)(this,e),this.verificationId=t,this.onConfirmation=r}return(0,f.default)(e,[{key:"confirm",value:function(e){var t=$t._fromVerification(this.verificationId,e);return this.onConfirmation(t)}}]),e}();function qa(e,t,r){return Ha.apply(this,arguments)}function Ha(){return(Ha=(0,u.default)(S.default.mark((function e(t,r,n){var a,i;return S.default.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=vt(t),e.next=3,Ka(a,r,(0,A.getModularInstance)(n));case 3:return i=e.sent,e.abrupt("return",new Va(i,(function(e){return Rr(a,e)})));case 5:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function za(e,t,r){return Ba.apply(this,arguments)}function Ba(){return(Ba=(0,u.default)(S.default.mark((function e(t,r,n){var a,i;return S.default.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=(0,A.getModularInstance)(t),e.next=3,Er(!1,a,"phone");case 3:return e.next=5,Ka(a.auth,r,(0,A.getModularInstance)(n));case 5:return i=e.sent,e.abrupt("return",new Va(i,(function(e){return Cr(a,e)})));case 7:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function Wa(e,t,r){return Ga.apply(this,arguments)}function Ga(){return(Ga=(0,u.default)(S.default.mark((function e(t,r,n){var a,i;return S.default.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=(0,A.getModularInstance)(t),e.next=3,Ka(a.auth,r,(0,A.getModularInstance)(n));case 3:return i=e.sent,e.abrupt("return",new Va(i,(function(e){return Lr(a,e)})));case 5:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function Ka(e,t,r){return Ja.apply(this,arguments)}function Ja(){return(Ja=(0,u.default)(S.default.mark((function e(t,r,n){var a,i,o,u,s,c,l,f;return S.default.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=3,n.verify();case 3:if(i=e.sent,e.prev=4,X("string"==typeof i,t,"argument-error"),X(n.type===ja,t,"argument-error"),!("session"in(o="string"==typeof r?{phoneNumber:r}:r))){e.next=28;break}if(u=o.session,!("phoneNumber"in o)){e.next=19;break}return X("enroll"===u.type,t,"internal-error"),e.next=15,Bn(t,{idToken:u.credential,phoneEnrollmentInfo:{phoneNumber:o.phoneNumber,recaptchaToken:i}});case 15:return s=e.sent,e.abrupt("return",s.phoneSessionInfo.sessionInfo);case 19:return X("signin"===u.type,t,"internal-error"),X(c=(null===(a=o.multiFactorHint)||void 0===a?void 0:a.uid)||o.multiFactorUid,t,"missing-multi-factor-info"),e.next=24,wa(t,{mfaPendingCredential:u.credential,mfaEnrollmentId:c,phoneSignInInfo:{recaptchaToken:i}});case 24:return l=e.sent,e.abrupt("return",l.phoneResponseInfo.sessionInfo);case 26:e.next=32;break;case 28:return e.next=30,Kt(t,{phoneNumber:o.phoneNumber,recaptchaToken:i});case 30:return f=e.sent.sessionInfo,e.abrupt("return",f);case 32:return e.prev=32,n._reset(),e.finish(32);case 35:case"end":return e.stop()}}),e,null,[[4,,32,35]])})))).apply(this,arguments)}function Ya(e,t){return Xa.apply(this,arguments)}function Xa(){return(Xa=(0,u.default)(S.default.mark((function e(t,r){return S.default.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,xr((0,A.getModularInstance)(t),r);case 2:case"end":return e.stop()}}),e)})))).apply(this,arguments)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Za=function(){"use strict";function e(t){(0,c.default)(this,e),this.providerId=e.PROVIDER_ID,this.auth=vt(t)}return(0,f.default)(e,[{key:"verifyPhoneNumber",value:function(e,t){return Ka(this.auth,e,(0,A.getModularInstance)(t))}}],[{key:"credential",value:function(e,t){return $t._fromVerification(e,t)}},{key:"credentialFromResult",value:function(t){var r=t;return e.credentialFromTaggedObject(r)}},{key:"credentialFromError",value:function(t){return e.credentialFromTaggedObject(t.customData||{})}},{key:"credentialFromTaggedObject",value:function(e){var t=e._tokenResponse;if(!t)return null;var r=t.phoneNumber,n=t.temporaryProof;return r&&n?$t._fromTokenResponse(r,n):null}}]),e}();
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function Qa(e,t){return t?ee(t):(X(e._popupRedirectResolver,e,"argument-error"),e._popupRedirectResolver)}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Za.PROVIDER_ID="phone",Za.PHONE_SIGN_IN_METHOD="phone";var $a=function(e){"use strict";(0,b.default)(r,e);var t=(0,E.default)(r);function r(e){var n;return(0,c.default)(this,r),(n=t.call(this,"custom","custom")).params=e,n}return(0,f.default)(r,[{key:"_getIdTokenResponse",value:function(e){return Bt(e,this._buildIdpRequest())}},{key:"_linkToIdToken",value:function(e,t){return Bt(e,this._buildIdpRequest(t))}},{key:"_getReauthenticationResolver",value:function(e){return Bt(e,this._buildIdpRequest())}},{key:"_buildIdpRequest",value:function(e){var t={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(t.idToken=e),t}}]),r}(_t);function ei(e){return Or(e.auth,new $a(e),e.bypassAuthState)}function ti(e){var t=e.auth,r=e.user;return X(r,t,"internal-error"),Sr(r,new $a(e),e.bypassAuthState)}function ri(e){return ni.apply(this,arguments)}function ni(){return(ni=(0,u.default)(S.default.mark((function e(t){var r,n;return S.default.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=t.auth,X(n=t.user,r,"internal-error"),e.abrupt("return",xr(n,new $a(t),t.bypassAuthState));case 3:case"end":return e.stop()}}),e)})))).apply(this,arguments)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var ai=function(){"use strict";function e(t,r,n,a){var i=arguments.length>4&&void 0!==arguments[4]&&arguments[4];(0,c.default)(this,e),this.auth=t,this.resolver=n,this.user=a,this.bypassAuthState=i,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(r)?r:[r]}return(0,f.default)(e,[{key:"execute",value:function(){var e,t=this;return new Promise((e=(0,u.default)(S.default.mark((function e(r,n){return S.default.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.pendingPromise={resolve:r,reject:n},e.prev=1,e.next=4,t.resolver._initialize(t.auth);case 4:return t.eventManager=e.sent,e.next=7,t.onExecution();case 7:t.eventManager.registerConsumer(t),e.next=13;break;case 10:e.prev=10,e.t0=e.catch(1),t.reject(e.t0);case 13:case"end":return e.stop()}}),e,null,[[1,10]])}))),function(t,r){return e.apply(this,arguments)}))}},{key:"onAuthEvent",value:function(e){var t=this;return(0,u.default)(S.default.mark((function r(){var n,a,i,o,u,s,c;return S.default.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:if(n=e.urlResponse,a=e.sessionId,i=e.postBody,o=e.tenantId,u=e.error,s=e.type,!u){r.next=4;break}return t.reject(u),r.abrupt("return");case 4:return c={auth:t.auth,requestUri:n,sessionId:a,tenantId:o||void 0,postBody:i||void 0,user:t.user,bypassAuthState:t.bypassAuthState},r.prev=5,r.t0=t,r.next=9,t.getIdpTask(s)(c);case 9:r.t1=r.sent,r.t0.resolve.call(r.t0,r.t1),r.next=16;break;case 13:r.prev=13,r.t2=r.catch(5),t.reject(r.t2);case 16:case"end":return r.stop()}}),r,null,[[5,13]])})))()}},{key:"onError",value:function(e){this.reject(e)}},{key:"getIdpTask",value:function(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return ei;case"linkViaPopup":case"linkViaRedirect":return ri;case"reauthViaPopup":case"reauthViaRedirect":return ti;default:W(this.auth,"internal-error")}}},{key:"resolve",value:function(e){Q(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}},{key:"reject",value:function(e){Q(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}},{key:"unregisterAndCleanUp",value:function(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}]),e}(),ii=new ie(2e3,1e4);
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function oi(e,t,r){return ui.apply(this,arguments)}function ui(){return(ui=(0,u.default)(S.default.mark((function e(t,r,n){var a,i,o;return S.default.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=vt(t),J(t,r,nr),i=Qa(a,n),o=new di(a,"signInViaPopup",r,i),e.abrupt("return",o.executeNotNull());case 5:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function si(e,t,r){return ci.apply(this,arguments)}function ci(){return(ci=(0,u.default)(S.default.mark((function e(t,r,n){var a,i,o;return S.default.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return J((a=(0,A.getModularInstance)(t)).auth,r,nr),i=Qa(a.auth,n),o=new di(a.auth,"reauthViaPopup",r,i,a),e.abrupt("return",o.executeNotNull());case 5:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function li(e,t,r){return fi.apply(this,arguments)}function fi(){return(fi=(0,u.default)(S.default.mark((function e(t,r,n){var a,i,o;return S.default.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return J((a=(0,A.getModularInstance)(t)).auth,r,nr),i=Qa(a.auth,n),o=new di(a.auth,"linkViaPopup",r,i,a),e.abrupt("return",o.executeNotNull());case 5:case"end":return e.stop()}}),e)})))).apply(this,arguments)}var di=function(e){"use strict";(0,b.default)(r,e);var t=(0,E.default)(r);function r(e,n,a,o,u){var s;return(0,c.default)(this,r),(s=t.call(this,e,n,o,u)).provider=a,s.authWindow=null,s.pollId=null,r.currentPopupAction&&r.currentPopupAction.cancel(),r.currentPopupAction=(0,i.default)(s),s}return(0,f.default)(r,[{key:"executeNotNull",value:function(){var e=this;return(0,u.default)(S.default.mark((function t(){var r;return S.default.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,e.execute();case 2:return X(r=t.sent,e.auth,"internal-error"),t.abrupt("return",r);case 5:case"end":return t.stop()}}),t)})))()}},{key:"onExecution",value:function(){var e=this;return(0,u.default)(S.default.mark((function t(){var r;return S.default.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return Q(1===e.filter.length,"Popup operations only handle one event"),r=ra(),t.next=4,e.resolver._openPopup(e.auth,e.provider,e.filter[0],r);case 4:e.authWindow=t.sent,e.authWindow.associatedEvent=r,e.resolver._originValidation(e.auth).catch((function(t){e.reject(t)})),e.resolver._isIframeWebStorageSupported(e.auth,(function(t){t||e.reject(G(e.auth,"web-storage-unsupported"))})),e.pollUserCancellation();case 9:case"end":return t.stop()}}),t)})))()}},{key:"eventId",get:function(){var e;return(null===(e=this.authWindow)||void 0===e?void 0:e.associatedEvent)||null}},{key:"cancel",value:function(){this.reject(G(this.auth,"cancelled-popup-request"))}},{key:"cleanUp",value:function(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,r.currentPopupAction=null}},{key:"pollUserCancellation",value:function(){var e=this,t=function(){var r,n;if(null===(n=null===(r=e.authWindow)||void 0===r?void 0:r.window)||void 0===n?void 0:n.closed){var a=e;e.pollId=window.setTimeout((function(){a.pollId=null,a.reject(G(a.auth,"popup-closed-by-user"))}),2e3)}else e.pollId=window.setTimeout(t,ii.get())};t()}}]),r}(ai);di.currentPopupAction=null;
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
var pi=new Map,hi=function(e){"use strict";(0,b.default)(r,e);var t=(0,E.default)(r);function r(e,n){var a,i=arguments.length>2&&void 0!==arguments[2]&&arguments[2];return(0,c.default)(this,r),(a=t.call(this,e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],n,void 0,i)).eventId=null,a}return(0,f.default)(r,[{key:"execute",value:function(){var e=this,t=this;return(0,u.default)(S.default.mark((function n(){var a,i;return S.default.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:if(a=pi.get(t.auth._key())){n.next=21;break}return n.prev=2,n.next=5,vi(t.resolver,t.auth);case 5:if(!n.sent){n.next=12;break}return n.next=9,(0,v.default)((0,g.default)(r.prototype),"execute",e).call(t);case 9:n.t0=n.sent,n.next=13;break;case 12:n.t0=null;case 13:i=n.t0,a=function(){return Promise.resolve(i)},n.next=20;break;case 17:n.prev=17,n.t1=n.catch(2),a=function(){return Promise.reject(n.t1)};case 20:pi.set(t.auth._key(),a);case 21:return t.bypassAuthState||pi.set(t.auth._key(),(function(){return Promise.resolve(null)})),n.abrupt("return",a());case 23:case"end":return n.stop()}}),n,null,[[2,17]])})))()}},{key:"onAuthEvent",value:function(e){var t=this,n=this,a=function(){return(0,v.default)((0,g.default)(r.prototype),"onAuthEvent",t)};return(0,u.default)(S.default.mark((function t(){var r;return S.default.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if("signInViaRedirect"!==e.type){t.next=4;break}return t.abrupt("return",a().call(n,e));case 4:if("unknown"!==e.type){t.next=7;break}return n.resolve(null),t.abrupt("return");case 7:if(!e.eventId){t.next=17;break}return t.next=10,n.auth._redirectUserForId(e.eventId);case 10:if(!(r=t.sent)){t.next=16;break}return n.user=r,t.abrupt("return",a().call(n,e));case 16:n.resolve(null);case 17:case"end":return t.stop()}}),t)})))()}},{key:"onExecution",value:function(){return(0,u.default)(S.default.mark((function e(){return S.default.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:case"end":return e.stop()}}),e)})))()}},{key:"cleanUp",value:function(){}}]),r}(ai);function vi(e,t){return mi.apply(this,arguments)}function mi(){return(mi=(0,u.default)(S.default.mark((function e(t,r){var n,a,i;return S.default.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=wi(r),a=ki(t),e.next=4,a._isAvailable();case 4:if(e.sent){e.next=6;break}return e.abrupt("return",!1);case 6:return e.next=8,a._get(n);case 8:return e.t0=e.sent,i="true"===e.t0,e.next=12,a._remove(n);case 12:return e.abrupt("return",i);case 13:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function gi(e,t){return yi.apply(this,arguments)}function yi(){return(yi=(0,u.default)(S.default.mark((function e(t,r){return S.default.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",ki(t)._set(wi(r),"true"));case 1:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function bi(){pi.clear()}function _i(e,t){pi.set(e._key(),t)}function ki(e){return ee(e._redirectPersistence)}function wi(e){return Ze("pendingRedirect",e.config.apiKey,e.name)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function xi(e,t,r){return function(e,t,r){return Ii.apply(this,arguments)}(e,t,r)}function Ii(){return(Ii=(0,u.default)(S.default.mark((function e(t,r,n){var a,i;return S.default.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=vt(t),J(t,r,nr),i=Qa(a,n),e.next=5,gi(i,a);case 5:return e.abrupt("return",i._openRedirect(a,r,"signInViaRedirect"));case 6:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function Ei(e,t,r){return function(e,t,r){return Ti.apply(this,arguments)}(e,t,r)}function Ti(){return(Ti=(0,u.default)(S.default.mark((function e(t,r,n){var a,i,o;return S.default.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return J((a=(0,A.getModularInstance)(t)).auth,r,nr),i=Qa(a.auth,n),e.next=5,gi(i,a.auth);case 5:return e.next=7,Ci(a);case 7:return o=e.sent,e.abrupt("return",i._openRedirect(a.auth,r,"reauthViaRedirect",o));case 9:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function Si(e,t,r){return function(e,t,r){return Ai.apply(this,arguments)}(e,t,r)}function Ai(){return(Ai=(0,u.default)(S.default.mark((function e(t,r,n){var a,i,o;return S.default.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return J((a=(0,A.getModularInstance)(t)).auth,r,nr),i=Qa(a.auth,n),e.next=5,Er(!1,a,r.providerId);case 5:return e.next=7,gi(i,a.auth);case 7:return e.next=9,Ci(a);case 9:return o=e.sent,e.abrupt("return",i._openRedirect(a.auth,r,"linkViaRedirect",o));case 11:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function Oi(e,t){return Ni.apply(this,arguments)}function Ni(){return(Ni=(0,u.default)(S.default.mark((function e(t,r){return S.default.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,vt(t)._initializationPromise;case 2:return e.abrupt("return",Ri(t,r,!1));case 3:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function Ri(e,t){return Di.apply(this,arguments)}function Di(){return Di=(0,u.default)(S.default.mark((function e(t,r){var n,a,i,o,u,s=arguments;return S.default.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=s.length>2&&void 0!==s[2]&&s[2],a=vt(t),i=Qa(a,r),o=new hi(a,i,n),e.next=6,o.execute();case 6:if(!(u=e.sent)||n){e.next=13;break}return delete u.user._redirectEventId,e.next=11,a._persistUserIfCurrent(u.user);case 11:return e.next=13,a._setRedirectUser(null,r);case 13:return e.abrupt("return",u);case 14:case"end":return e.stop()}}),e)}))),Di.apply(this,arguments)}function Ci(e){return Pi.apply(this,arguments)}function Pi(){return(Pi=(0,u.default)(S.default.mark((function e(t){var r;return S.default.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=ra("".concat(t.uid,":::")),t._redirectEventId=r,e.next=4,t.auth._setRedirectUser(t);case 4:return e.next=6,t.auth._persistUserIfCurrent(t);case 6:return e.abrupt("return",r);case 7:case"end":return e.stop()}}),e)})))).apply(this,arguments)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Li=function(){"use strict";function e(t){(0,c.default)(this,e),this.auth=t,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}return(0,f.default)(e,[{key:"registerConsumer",value:function(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}},{key:"unregisterConsumer",value:function(e){this.consumers.delete(e)}},{key:"onEvent",value:function(e){var t=this;if(this.hasEventBeenHandled(e))return!1;var r=!1;return this.consumers.forEach((function(n){t.isEventForConsumer(e,n)&&(r=!0,t.sendToConsumer(e,n),t.saveEventToCache(e))})),this.hasHandledPotentialRedirect||!function(e){switch(e.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return Mi(e);default:return!1}}(e)||(this.hasHandledPotentialRedirect=!0,r||(this.queuedRedirectEvent=e,r=!0)),r}},{key:"sendToConsumer",value:function(e,t){var r;if(e.error&&!Mi(e)){var n=(null===(r=e.error.code)||void 0===r?void 0:r.split("auth/")[1])||"internal-error";t.onError(G(this.auth,n))}else t.onAuthEvent(e)}},{key:"isEventForConsumer",value:function(e,t){var r=null===t.eventId||!!e.eventId&&e.eventId===t.eventId;return t.filter.includes(e.type)&&r}},{key:"hasEventBeenHandled",value:function(e){return Date.now()-this.lastProcessedEventTime>=6e5&&this.cachedEventUids.clear(),this.cachedEventUids.has(ji(e))}},{key:"saveEventToCache",value:function(e){this.cachedEventUids.add(ji(e)),this.lastProcessedEventTime=Date.now()}}]),e}();function ji(e){return[e.type,e.eventId,e.sessionId,e.tenantId].filter((function(e){return e})).join("-")}function Mi(e){var t=e.type,r=e.error;return"unknown"===t&&"auth/no-auth-event"===(null==r?void 0:r.code)}function Ui(e){return Fi.apply(this,arguments)}function Fi(){return Fi=
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
(0,u.default)(S.default.mark((function e(t){var r,n=arguments;return S.default.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=n.length>1&&void 0!==n[1]?n[1]:{},e.abrupt("return",de(t,"GET","/v1/projects",r));case 2:case"end":return e.stop()}}),e)}))),Fi.apply(this,arguments)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Vi=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,qi=/^https?/;function Hi(){return(Hi=(0,u.default)(S.default.mark((function e(t){var r,n,a,i,o,u,s;return S.default.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!t.config.emulator){e.next=2;break}return e.abrupt("return");case 2:return e.next=4,Ui(t);case 4:r=e.sent.authorizedDomains,n=!0,a=!1,i=void 0,e.prev=6,o=r[Symbol.iterator]();case 8:if(n=(u=o.next()).done){e.next=20;break}if(s=u.value,e.prev=10,!zi(s)){e.next=13;break}return e.abrupt("return");case 13:e.next=17;break;case 15:e.prev=15,e.t0=e.catch(10);case 17:n=!0,e.next=8;break;case 20:e.next=26;break;case 22:e.prev=22,e.t1=e.catch(6),a=!0,i=e.t1;case 26:e.prev=26,e.prev=27,n||null==o.return||o.return();case 29:if(e.prev=29,!a){e.next=32;break}throw i;case 32:return e.finish(29);case 33:return e.finish(26);case 34:W(t,"unauthorized-domain");case 35:case"end":return e.stop()}}),e,null,[[6,22,26,34],[10,15],[27,,29,33]])})))).apply(this,arguments)}function zi(e){var t=re(),r=new URL(t),n=r.protocol,a=r.hostname;if(e.startsWith("chrome-extension://")){var i=new URL(e);return""===i.hostname&&""===a?"chrome-extension:"===n&&e.replace("chrome-extension://","")===t.replace("chrome-extension://",""):"chrome-extension:"===n&&i.hostname===a}if(!qi.test(n))return!1;if(Vi.test(e))return a===e;var o=e.replace(/\./g,"\\.");return new RegExp("^(.+\\."+o+"|"+o+")$","i").test(a)}
/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Bi=new ie(3e4,6e4);function Wi(){var e=aa().___jsl,t=!0,r=!1,n=void 0;if(null==e?void 0:e.H)try{for(var a,i=Object.keys(e.H)[Symbol.iterator]();!(t=(a=i.next()).done);t=!0){var o=a.value;if(e.H[o].r=e.H[o].r||[],e.H[o].L=e.H[o].L||[],e.H[o].r=(0,x.default)(e.H[o].L),e.CP)for(var u=0;u<e.CP.length;u++)e.CP[u]=null}}catch(e){r=!0,n=e}finally{try{t||null==i.return||i.return()}finally{if(r)throw n}}}var Gi=null;function Ki(e){return Gi=Gi||function(e){return new Promise((function(t,r){var n,a,i;function o(){Wi(),gapi.load("gapi.iframes",{callback:function(){t(gapi.iframes.getContext())},ontimeout:function(){Wi(),r(G(e,"network-request-failed"))},timeout:Bi.get()})}if(null===(a=null===(n=aa().gapi)||void 0===n?void 0:n.iframes)||void 0===a?void 0:a.Iframe)t(gapi.iframes.getContext());else{if(!(null===(i=aa().gapi)||void 0===i?void 0:i.load)){var u=Ta("iframefcb");return aa()[u]=function(){gapi.load?o():r(G(e,"network-request-failed"))},Ea("https://apis.google.com/js/api.js?onload=".concat(u)).catch((function(e){return r(e)}))}o()}})).catch((function(e){throw Gi=null,e}))}(e),Gi}
/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Ji=new ie(5e3,15e3),Yi={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},Xi=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function Zi(e){var t=e.config;X(t.authDomain,e,"auth-domain-config-required");var r=t.emulator?oe(t,"emulator/auth/iframe"):"https://".concat(e.config.authDomain,"/").concat("__/auth/iframe"),n={apiKey:t.apiKey,appName:e.name,v:O.SDK_VERSION},a=Xi.get(e.config.apiHost);a&&(n.eid=a);var i=e._getFrameworks();return i.length&&(n.fw=i.join(",")),"".concat(r,"?").concat((0,A.querystring)(n).slice(1))}function Qi(e){return $i.apply(this,arguments)}function $i(){return $i=(0,u.default)(S.default.mark((function e(t){var r,n;return S.default.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Ki(t);case 2:return r=e.sent,X(n=aa().gapi,t,"internal-error"),e.abrupt("return",r.open({where:document.body,url:Zi(t),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:Yi,dontclear:!0},(function(e){return new Promise((r=(0,u.default)(S.default.mark((function r(n,a){var i,o,u;return S.default.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return u=function(){aa().clearTimeout(o),n(e)},r.next=3,e.restyle({setHideOnLeave:!1});case 3:i=G(t,"network-request-failed"),o=aa().setTimeout((function(){a(i)}),Ji.get()),e.ping(u).then(u,(function(){a(i)}));case 7:case"end":return r.stop()}}),r)}))),function(e,t){return r.apply(this,arguments)}));var r})));case 6:case"end":return e.stop()}}),e)}))),$i.apply(this,arguments)}
/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var eo={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},to="_blank",ro="http://localhost",no=function(){"use strict";function e(t){(0,c.default)(this,e),this.window=t,this.associatedEvent=null}return(0,f.default)(e,[{key:"close",value:function(){if(this.window)try{this.window.close()}catch(e){}}}]),e}();function ao(e,t,r){var n=arguments.length>3&&void 0!==arguments[3]?arguments[3]:500,a=arguments.length>4&&void 0!==arguments[4]?arguments[4]:600,i=Math.max((window.screen.availHeight-a)/2,0).toString(),o=Math.max((window.screen.availWidth-n)/2,0).toString(),u="",s=Object.assign(Object.assign({},eo),{width:n.toString(),height:a.toString(),top:i,left:o}),c=(0,A.getUA)().toLowerCase();r&&(u=rt(c)?to:r),et(c)&&(t=t||ro,s.scrollbars="yes");var l=Object.entries(s).reduce((function(e,t){var r=(0,k.default)(t,2),n=r[0],a=r[1];return"".concat(e).concat(n,"=").concat(a,",")}),"");if(ct(c)&&"_self"!==u)return io(t||"",u),new no(null);var f=window.open(t||"",u,l);X(f,e,"popup-blocked");try{f.focus()}catch(e){}return new no(f)}function io(e,t){var r=document.createElement("a");r.href=e,r.target=t;var n=document.createEvent("MouseEvent");n.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),r.dispatchEvent(n)}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var oo="__/auth/handler",uo="emulator/auth/handler";function so(e,t,r,n,a,i){X(e.config.authDomain,e,"auth-domain-config-required"),X(e.config.apiKey,e,"invalid-api-key");var o={apiKey:e.config.apiKey,appName:e.name,authType:r,redirectUrl:n,v:O.SDK_VERSION,eventId:a};if(t instanceof nr){t.setDefaultLanguage(e.languageCode),o.providerId=t.providerId||"",(0,A.isEmpty)(t.getCustomParameters())||(o.customParameters=JSON.stringify(t.getCustomParameters()));var u=!0,s=!1,c=void 0;try{for(var l,f=Object.entries(i||{})[Symbol.iterator]();!(u=(l=f.next()).done);u=!0){var d=(0,k.default)(l.value,2),p=d[0],h=d[1];o[p]=h}}catch(e){s=!0,c=e}finally{try{u||null==f.return||f.return()}finally{if(s)throw c}}}if(t instanceof ar){var v=t.getScopes().filter((function(e){return""!==e}));v.length>0&&(o.scopes=v.join(","))}e.tenantId&&(o.tid=e.tenantId);var m,g,y=o,b=!0,_=!1,w=void 0;try{for(var x,I=Object.keys(y)[Symbol.iterator]();!(b=(x=I.next()).done);b=!0){var E=x.value;void 0===y[E]&&delete y[E]}}catch(e){_=!0,w=e}finally{try{b||null==I.return||I.return()}finally{if(_)throw w}}return"".concat((m=e,g=m.config,g.emulator?oe(g,uo):"https://".concat(g.authDomain,"/").concat(oo)),"?").concat((0,A.querystring)(y).slice(1))}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
var co="webStorageSupport",lo=function(){"use strict";function e(){(0,c.default)(this,e),this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=$n,this._completeRedirectFn=Ri,this._overrideRedirectResult=_i}return(0,f.default)(e,[{key:"_openPopup",value:function(e,t,r,n){var a=this;return(0,u.default)(S.default.mark((function i(){var o,u;return S.default.wrap((function(i){for(;;)switch(i.prev=i.next){case 0:return Q(null===(o=a.eventManagers[e._key()])||void 0===o?void 0:o.manager,"_initialize() not called before _openPopup()"),u=so(e,t,r,re(),n),i.abrupt("return",ao(e,u,ra()));case 4:case"end":return i.stop()}}),i)})))()}},{key:"_openRedirect",value:function(e,t,r,n){var a=this;return(0,u.default)(S.default.mark((function i(){return S.default.wrap((function(i){for(;;)switch(i.prev=i.next){case 0:return i.next=2,a._originValidation(e);case 2:return o=so(e,t,r,re(),n),aa().location.href=o,i.abrupt("return",new Promise((function(){})));case 4:case"end":return i.stop()}var o}),i)})))()}},{key:"_initialize",value:function(e){var t=this,r=e._key();if(this.eventManagers[r]){var n=this.eventManagers[r],a=n.manager,i=n.promise;return a?Promise.resolve(a):(Q(i,"If manager is not set, promise should be"),i)}var o=this.initAndGetManager(e);return this.eventManagers[r]={promise:o},o.catch((function(){delete t.eventManagers[r]})),o}},{key:"initAndGetManager",value:function(e){var t=this;return(0,u.default)(S.default.mark((function r(){var n,a;return S.default.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.next=2,Qi(e);case 2:return n=r.sent,a=new Li(e),n.register("authEvent",(function(t){return X(null==t?void 0:t.authEvent,e,"invalid-auth-event"),{status:a.onEvent(t.authEvent)?"ACK":"ERROR"}}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),t.eventManagers[e._key()]={manager:a},t.iframes[e._key()]=n,r.abrupt("return",a);case 8:case"end":return r.stop()}}),r)})))()}},{key:"_isIframeWebStorageSupported",value:function(e,t){this.iframes[e._key()].send(co,{type:co},(function(r){var n,a=null===(n=null==r?void 0:r[0])||void 0===n?void 0:n.webStorageSupport;void 0!==a&&t(!!a),W(e,"internal-error")}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}},{key:"_originValidation",value:function(e){var t=e._key();return this.originValidationPromises[t]||(this.originValidationPromises[t]=function(e){return Hi.apply(this,arguments)}(e)),this.originValidationPromises[t]}},{key:"_shouldInitProactively",get:function(){return ft()||tt()||ut()}}]),e}(),fo=lo,po=function(e){"use strict";(0,b.default)(r,e);var t=(0,E.default)(r);function r(e){var n;return(0,c.default)(this,r),(n=t.call(this,"phone")).credential=e,n}return(0,f.default)(r,[{key:"_finalizeEnroll",value:function(e,t,r){return function(e,t){return de(e,"POST","/v2/accounts/mfaEnrollment:finalize",fe(e,t))}(e,{idToken:t,displayName:r,phoneVerificationInfo:this.credential._makeVerificationRequest()})}},{key:"_finalizeSignIn",value:function(e,t){return function(e,t){return de(e,"POST","/v2/accounts/mfaSignIn:finalize",fe(e,t))}(e,{mfaPendingCredential:t,phoneVerificationInfo:this.credential._makeVerificationRequest()})}}],[{key:"_fromCredential",value:function(e){return new r(e)}}]),r}(function(){"use strict";function e(t){(0,c.default)(this,e),this.factorId=t}return(0,f.default)(e,[{key:"_process",value:function(e,t,r){switch(t.type){case"enroll":return this._finalizeEnroll(e,t.credential,r);case"signin":return this._finalizeSignIn(e,t.credential);default:return Z("unexpected MultiFactorSessionType")}}}]),e}()),ho=function(){"use strict";function e(){(0,c.default)(this,e)}return(0,f.default)(e,null,[{key:"assertion",value:function(e){return po._fromCredential(e)}}]),e}();ho.FACTOR_ID="phone";var vo,mo="@firebase/auth",go="0.20.5",yo=function(){"use strict";function e(t){(0,c.default)(this,e),this.auth=t,this.internalListeners=new Map}return(0,f.default)(e,[{key:"getUid",value:function(){var e;return this.assertAuthConfigured(),(null===(e=this.auth.currentUser)||void 0===e?void 0:e.uid)||null}},{key:"getToken",value:function(e){var t=this;return(0,u.default)(S.default.mark((function r(){var n;return S.default.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return t.assertAuthConfigured(),r.next=3,t.auth._initializationPromise;case 3:if(t.auth.currentUser){r.next=5;break}return r.abrupt("return",null);case 5:return r.next=7,t.auth.currentUser.getIdToken(e);case 7:return n=r.sent,r.abrupt("return",{accessToken:n});case 9:case"end":return r.stop()}}),r)})))()}},{key:"addAuthTokenListener",value:function(e){if(this.assertAuthConfigured(),!this.internalListeners.has(e)){var t=this.auth.onIdTokenChanged((function(t){var r;e((null===(r=t)||void 0===r?void 0:r.stsTokenManager.accessToken)||null)}));this.internalListeners.set(e,t),this.updateProactiveRefresh()}}},{key:"removeAuthTokenListener",value:function(e){this.assertAuthConfigured();var t=this.internalListeners.get(e);t&&(this.internalListeners.delete(e),t(),this.updateProactiveRefresh())}},{key:"assertAuthConfigured",value:function(){X(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}},{key:"updateProactiveRefresh",value:function(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}]),e}();
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function bo(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:(0,O.getApp)(),t=(0,O._getProvider)(e,"auth");return t.isInitialized()?t.getImmediate():te(e,{popupRedirectResolver:fo,persistence:[ka,Zn,$n]})}vo="Browser",(0,O._registerComponent)(new(0,D.Component)("auth",(function(e,t){var r=t.options,n=e.getProvider("app").getImmediate(),a=e.getProvider("heartbeat"),i=n.options,o=i.apiKey,u=i.authDomain;return function(e,t){X(o&&!o.includes(":"),"invalid-api-key",{appName:e.name}),X(!(null==u?void 0:u.includes(":")),"argument-error",{appName:e.name});var n={apiKey:o,authDomain:u,clientPlatform:vo,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:dt(vo)},a=new ht(e,t,n);return function(e,t){var r=(null==t?void 0:t.persistence)||[],n=(Array.isArray(r)?r:[r]).map(ee);(null==t?void 0:t.errorMap)&&e._updateErrorMap(t.errorMap),e._initializeWithPersistence(n,null==t?void 0:t.popupRedirectResolver)}(a,r),a}(n,a)}),"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((function(e,t,r){e.getProvider("auth-internal").initialize()}))),(0,O._registerComponent)(new(0,D.Component)("auth-internal",(function(e){var t=vt(e.getProvider("auth").getImmediate());return new yo(t)}),"PRIVATE").setInstantiationMode("EXPLICIT")),(0,O.registerVersion)(mo,go,
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function(e){switch(e){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";default:return}}(vo)),(0,O.registerVersion)(mo,go,"esm2017")},{"@swc/helpers/lib/_assert_this_initialized.js":"3hGWF","@swc/helpers/lib/_async_to_generator.js":"9wsRk","@swc/helpers/lib/_class_call_check.js":"bhoK3","@swc/helpers/lib/_create_class.js":"gwn5H","@swc/helpers/lib/_define_property.js":"ir6l0","@swc/helpers/lib/_get.js":"hLPyj","@swc/helpers/lib/_get_prototype_of.js":"eJ2fZ","@swc/helpers/lib/_inherits.js":"1n7Yn","@swc/helpers/lib/_sliced_to_array.js":"lhcPt","@swc/helpers/lib/_to_consumable_array.js":"lNLC6","@swc/helpers/lib/_create_super.js":"6Wrz5","regenerator-runtime":"3PvxL","@firebase/util":"3o5x8","@firebase/app":"6ftlq",tslib:"b4wpY","@firebase/logger":"9CEZ1","@firebase/component":"2B1ci","@parcel/transformer-js/src/esmodule-helpers.js":"jiucr"}],hLPyj:[function(e,t,r){"use strict";Object.defineProperty(r,"__esModule",{value:!0}),r.default=function(e,t,r){return i(e,t,r)};var n,a=(n=e("./_super_prop_base"))&&n.__esModule?n:{default:n};function i(e,t,r){return(i="undefined"!=typeof Reflect&&Reflect.get?Reflect.get:function(e,t,r){var n=a.default(e,t);if(n){var i=Object.getOwnPropertyDescriptor(n,t);return i.get?i.get.call(r||e):i.value}})(e,t,r)}},{"./_super_prop_base":"axMTN"}],axMTN:[function(e,t,r){"use strict";Object.defineProperty(r,"__esModule",{value:!0}),r.default=function(e,t){for(;!Object.prototype.hasOwnProperty.call(e,t)&&null!==(e=a.default(e)););return e};var n,a=(n=e("./_get_prototype_of"))&&n.__esModule?n:{default:n}},{"./_get_prototype_of":"eJ2fZ"}],"6Uvw0":[function(e,t,r){var n=e("@parcel/transformer-js/src/esmodule-helpers.js"),a=e("@swc/helpers/lib/_async_to_generator.js"),i=n.interopDefault(a),o=e("@swc/helpers/lib/_sliced_to_array.js"),u=n.interopDefault(o),s=e("regenerator-runtime"),c=n.interopDefault(s),l=e("./apiServiсe"),f=n.interopDefault(l),d=e("./renderCard"),p=e("./getGenreName"),h=new(0,f.default),v=document.querySelector(".card__list"),m=document.querySelector(".header__nav-link"),g=document.querySelector(".header__logo"),y=document.querySelector(".loader__wrapper");function b(e){return _.apply(this,arguments)}function _(){return(_=(0,i.default)(c.default.mark((function e(t){return c.default.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),document.querySelector("#search-form").firstElementChild.value="",h.currentPage=1,v.innerHTML="",e.prev=4,y.classList.remove("hidden"),e.next=8,h.getTrendingFilms();case 8:e.sent.data.results.forEach((function(e){var t=e.title,r=e.name,n=e.poster_path,a=e.id,i=e.vote_average,o=e.genre_ids,u=e.first_air_date,s=e.release_date,c=(0,p.getGenreName)(o);(0,d.renderCard)(a,n,t,r,c,u,s,i)})),y.classList.add("hidden"),e.next=16;break;case 13:e.prev=13,e.t0=e.catch(4),console.log("error");case 16:x();case 17:case"end":return e.stop()}}),e,null,[[4,13]])})))).apply(this,arguments)}function k(){return(k=(0,i.default)(c.default.mark((function e(){return c.default.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return h.currentPage+=1,e.prev=1,e.next=4,h.getTrendingFilms();case 4:e.sent.data.results.forEach((function(e){var t=e.title,r=e.name,n=e.poster_path,a=e.id,i=e.vote_average,o=e.genre_ids,u=e.first_air_date,s=e.release_date,c=(0,p.getGenreName)(o);(0,d.renderCard)(a,n,t,r,c,u,s,i)})),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(1),console.log("error");case 11:x();case 12:case"end":return e.stop()}}),e,null,[[1,8]])})))).apply(this,arguments)}g.addEventListener("click",b),m.addEventListener("click",b),window.addEventListener("load",b);var w=new IntersectionObserver((function(e,t){var r=(0,u.default)(e,1)[0];r.isIntersecting&&(t.unobserve(r.target),function(){k.apply(this,arguments)}())}),{threshold:.5}),x=function(){var e=document.querySelector(".card__item:last-child");e&&w.observe(e)}},{"@swc/helpers/lib/_async_to_generator.js":"9wsRk","@swc/helpers/lib/_sliced_to_array.js":"lhcPt","regenerator-runtime":"3PvxL","./apiServiсe":"7TFaD","./renderCard":"8E5C5","./getGenreName":"8vaK9","@parcel/transformer-js/src/esmodule-helpers.js":"jiucr"}],NzJlw:[function(e,t,r){var n=e("@parcel/transformer-js/src/esmodule-helpers.js");n.defineInteropFlag(r),n.export(r,"onScroll",(function(){return i})),n.export(r,"onToTopBtn",(function(){return o}));var a=document.querySelector(".btn-to-top");function i(){var e=window.pageYOffset,t=document.documentElement.clientHeight;e>t&&a.classList.add("btn-to-top--visible"),e<t&&a.classList.remove("btn-to-top--visible")}function o(){window.pageYOffset>0&&window.scrollTo({top:0,behavior:"smooth"})}window.addEventListener("scroll",i),null==a||a.addEventListener("click",o)},{"@parcel/transformer-js/src/esmodule-helpers.js":"jiucr"}],jtsLp:[function(e,t,r){var n=e("@parcel/transformer-js/src/esmodule-helpers.js"),a=e("@swc/helpers/lib/_async_to_generator.js"),i=n.interopDefault(a),o=e("regenerator-runtime"),u=n.interopDefault(o),s=e("./apiServiсe"),c=n.interopDefault(s),l=e("./renderPopupCard"),f=new(0,c.default);document.querySelector(".section").addEventListener("click",(function(e){var t;if(e.preventDefault(),void 0===(null===(t=e.target.closest(".card__link"))||void 0===t?void 0:t.querySelector(".card__poster")))return;(function(e){return h.apply(this,arguments)})(e.target.closest(".card__link").id).then((function(t){var r,n,a=e.target.closest(".card__link").id,i=JSON.parse(localStorage.getItem(d))||[],o=JSON.parse(localStorage.getItem(p))||[];i.find((function(e){return r=e.id==a})),o.find((function(e){return n=e.id==a}));var u="",s="";u=r?"Remove from watched":"Add to watched",s=n?"Remove from queue":"Add to queue",document.addEventListener("click",(function(e){if(e.target.classList.contains("watched-button")&&e.target.getAttribute("data-id")===a){var r;if(i.find((function(e){return r=e.id==a})),r){var n=i.findIndex((function(e){return e.id==a}));return i.splice(n,1),localStorage.setItem(d,JSON.stringify(i)),r=!1,void(e.target.innerText="Add to watched")}return i.push(t),localStorage.setItem(d,JSON.stringify(i)),r=!0,void(e.target.innerText="Remove to watched")}if(e.target.classList.contains("queque-button")&&e.target.getAttribute("data-id")===a){var u;if(o.find((function(e){return u=e.id==a})),u){var s=o.findIndex((function(e){return e.id==a}));return o.splice(s,1),localStorage.setItem(p,JSON.stringify(o)),u=!1,void(e.target.innerText="Add to queue")}return o.push(t),localStorage.setItem(p,JSON.stringify(o)),u=!0,void(e.target.innerText="Remove from queue")}}));var c=t.title,f=t.name,h=t.poster_path,v=t.id,m=t.vote_average,g=t.vote_count,y=t.popularity,b=t.overview,_=t.genres,k=[];_.forEach((function(e){return k.push(e.name)}));try{setTimeout((function(){(0,l.renderMovieModal)(c,f,h,v,m,g,y,b,k,u,s)}),100)}catch(e){console.log("error")}}))}));var d="Watched:",p="Queque:";function h(){return(h=(0,i.default)(u.default.mark((function e(t){var r;return u.default.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,f.getFilmID(t);case 2:return r=e.sent,e.abrupt("return",r.data);case 4:case"end":return e.stop()}}),e)})))).apply(this,arguments)}var v=document.querySelector(".modal");function m(e){(e.target.classList.contains("popup")||27===e.keyCode||e.target.classList.contains("popup-button__close"))&&(v.classList.remove("popup"),v.innerHTML="")}null==v||v.addEventListener("click",m),document.addEventListener("keydown",m)},{"@swc/helpers/lib/_async_to_generator.js":"9wsRk","regenerator-runtime":"3PvxL","./apiServiсe":"7TFaD","./renderPopupCard":"aZoq3","@parcel/transformer-js/src/esmodule-helpers.js":"jiucr"}],"2BIky":[function(e,t,r){localStorage.theme||(localStorage.theme="light"),document.body.className=localStorage.theme,toggleThemeBtn.onclick=function(){document.body.classList.toggle("dark")};var n=document.querySelectorAll(".changeTheme");function a(e){n.forEach((function(e){e.style.display="block"})),document.querySelector('[data-theme="'.concat(e,'"]')).style.display="none",localStorage.setItem("theme",e)}n.forEach((function(e){e.addEventListener("click",(function(){a(this.dataset.theme),localStorage.setItem("theme",this.dataset.theme)}))}));var i=localStorage.getItem("theme");null===i||"light"===i?a("light"):"dark"===i&&a("dark")},{}]},["7zcRT"],"7zcRT");
//# sourceMappingURL=index.b6498a9f.js.map
