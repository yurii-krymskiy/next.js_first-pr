"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[673],{622:function(e,t,i){/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var s=i(2265),n=Symbol.for("react.element"),r=(Symbol.for("react.fragment"),Object.prototype.hasOwnProperty),o=s.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,a={key:!0,ref:!0,__self:!0,__source:!0};function q(e,t,i){var s,l={},c=null,d=null;for(s in void 0!==i&&(c=""+i),void 0!==t.key&&(c=""+t.key),void 0!==t.ref&&(d=t.ref),t)r.call(t,s)&&!a.hasOwnProperty(s)&&(l[s]=t[s]);if(e&&e.defaultProps)for(s in t=e.defaultProps)void 0===l[s]&&(l[s]=t[s]);return{$$typeof:n,type:e,key:c,ref:d,props:l,_owner:o.current}}t.jsx=q,t.jsxs=q},7437:function(e,t,i){e.exports=i(622)},6172:function(e,t,i){let s;function __awaiter(e,t,i,s){return new(i||(i=Promise))(function(n,r){function fulfilled(e){try{step(s.next(e))}catch(e){r(e)}}function rejected(e){try{step(s.throw(e))}catch(e){r(e)}}function step(e){var t;e.done?n(e.value):((t=e.value)instanceof i?t:new i(function(e){e(t)})).then(fulfilled,rejected)}step((s=s.apply(e,t||[])).next())})}i.d(t,{ZP:function(){return Client}}),"function"==typeof SuppressedError&&SuppressedError;let ClientResponseError=class ClientResponseError extends Error{constructor(e){var t,i,s,n;super("ClientResponseError"),this.url="",this.status=0,this.response={},this.isAbort=!1,this.originalError=null,Object.setPrototypeOf(this,ClientResponseError.prototype),null!==e&&"object"==typeof e&&(this.url="string"==typeof e.url?e.url:"",this.status="number"==typeof e.status?e.status:0,this.isAbort=!!e.isAbort,this.originalError=e.originalError,null!==e.response&&"object"==typeof e.response?this.response=e.response:null!==e.data&&"object"==typeof e.data?this.response=e.data:this.response={}),this.originalError||e instanceof ClientResponseError||(this.originalError=e),"undefined"!=typeof DOMException&&e instanceof DOMException&&(this.isAbort=!0),this.name="ClientResponseError "+this.status,this.message=null===(t=this.response)||void 0===t?void 0:t.message,this.message||(this.isAbort?this.message="The request was autocancelled. You can find more info in https://github.com/pocketbase/js-sdk#auto-cancellation.":(null===(n=null===(s=null===(i=this.originalError)||void 0===i?void 0:i.cause)||void 0===s?void 0:s.message)||void 0===n?void 0:n.includes("ECONNREFUSED ::1"))?this.message="Failed to connect to the PocketBase server. Try changing the SDK URL from localhost to 127.0.0.1 (https://github.com/pocketbase/js-sdk/issues/21).":this.message="Something went wrong while processing your request.")}get data(){return this.response}toJSON(){return Object.assign({},this)}};let n=/^[\u0009\u0020-\u007e\u0080-\u00ff]+$/;function cookieSerialize(e,t,i){let s=Object.assign({},i||{}),r=s.encode||defaultEncode;if(!n.test(e))throw TypeError("argument name is invalid");let o=r(t);if(o&&!n.test(o))throw TypeError("argument val is invalid");let a=e+"="+o;if(null!=s.maxAge){let e=s.maxAge-0;if(isNaN(e)||!isFinite(e))throw TypeError("option maxAge is invalid");a+="; Max-Age="+Math.floor(e)}if(s.domain){if(!n.test(s.domain))throw TypeError("option domain is invalid");a+="; Domain="+s.domain}if(s.path){if(!n.test(s.path))throw TypeError("option path is invalid");a+="; Path="+s.path}if(s.expires){var l;if(l=s.expires,"[object Date]"!==Object.prototype.toString.call(l)&&!(l instanceof Date)||isNaN(s.expires.valueOf()))throw TypeError("option expires is invalid");a+="; Expires="+s.expires.toUTCString()}if(s.httpOnly&&(a+="; HttpOnly"),s.secure&&(a+="; Secure"),s.priority)switch("string"==typeof s.priority?s.priority.toLowerCase():s.priority){case"low":a+="; Priority=Low";break;case"medium":a+="; Priority=Medium";break;case"high":a+="; Priority=High";break;default:throw TypeError("option priority is invalid")}if(s.sameSite)switch("string"==typeof s.sameSite?s.sameSite.toLowerCase():s.sameSite){case!0:case"strict":a+="; SameSite=Strict";break;case"lax":a+="; SameSite=Lax";break;case"none":a+="; SameSite=None";break;default:throw TypeError("option sameSite is invalid")}return a}function defaultDecode(e){return -1!==e.indexOf("%")?decodeURIComponent(e):e}function defaultEncode(e){return encodeURIComponent(e)}function getTokenPayload(e){if(e)try{let t=decodeURIComponent(s(e.split(".")[1]).split("").map(function(e){return"%"+("00"+e.charCodeAt(0).toString(16)).slice(-2)}).join(""));return JSON.parse(t)||{}}catch(e){}return{}}function isTokenExpired(e,t=0){let i=getTokenPayload(e);return!(Object.keys(i).length>0&&(!i.exp||i.exp-t>Date.now()/1e3))}s="function"==typeof atob?atob:e=>{let t=String(e).replace(/=+$/,"");if(t.length%4==1)throw Error("'atob' failed: The string to be decoded is not correctly encoded.");for(var i,s,n=0,r=0,o="";s=t.charAt(r++);~s&&(i=n%4?64*i+s:s,n++%4)&&(o+=String.fromCharCode(255&i>>(-2*n&6))))s="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=".indexOf(s);return o};let r="pb_auth";let BaseAuthStore=class BaseAuthStore{constructor(){this.baseToken="",this.baseModel=null,this._onChangeCallbacks=[]}get token(){return this.baseToken}get model(){return this.baseModel}get isValid(){return!isTokenExpired(this.token)}get isAdmin(){return"admin"===getTokenPayload(this.token).type}get isAuthRecord(){return"authRecord"===getTokenPayload(this.token).type}save(e,t){this.baseToken=e||"",this.baseModel=t||null,this.triggerChange()}clear(){this.baseToken="",this.baseModel=null,this.triggerChange()}loadFromCookie(e,t=r){let i=function(e,t){let i={};if("string"!=typeof e)return i;let s=Object.assign({},{}).decode||defaultDecode,n=0;for(;n<e.length;){let t=e.indexOf("=",n);if(-1===t)break;let r=e.indexOf(";",n);if(-1===r)r=e.length;else if(r<t){n=e.lastIndexOf(";",t-1)+1;continue}let o=e.slice(n,t).trim();if(void 0===i[o]){let n=e.slice(t+1,r).trim();34===n.charCodeAt(0)&&(n=n.slice(1,-1));try{i[o]=s(n)}catch(e){i[o]=n}}n=r+1}return i}(e||"")[t]||"",s={};try{s=JSON.parse(i),("object"!=typeof s||Array.isArray(s))&&(s={})}catch(e){}this.save(s.token||"",s.model||null)}exportToCookie(e,t=r){var i,s;let n={secure:!0,sameSite:!0,httpOnly:!0,path:"/"},o=getTokenPayload(this.token);(null==o?void 0:o.exp)?n.expires=new Date(1e3*o.exp):n.expires=new Date("1970-01-01"),e=Object.assign({},n,e);let a={token:this.token,model:this.model?JSON.parse(JSON.stringify(this.model)):null},l=cookieSerialize(t,JSON.stringify(a),e),c="undefined"!=typeof Blob?new Blob([l]).size:l.length;if(a.model&&c>4096){a.model={id:null===(i=null==a?void 0:a.model)||void 0===i?void 0:i.id,email:null===(s=null==a?void 0:a.model)||void 0===s?void 0:s.email};let n=["collectionId","username","verified"];for(let e in this.model)n.includes(e)&&(a.model[e]=this.model[e]);l=cookieSerialize(t,JSON.stringify(a),e)}return l}onChange(e,t=!1){return this._onChangeCallbacks.push(e),t&&e(this.token,this.model),()=>{for(let t=this._onChangeCallbacks.length-1;t>=0;t--)if(this._onChangeCallbacks[t]==e)return delete this._onChangeCallbacks[t],void this._onChangeCallbacks.splice(t,1)}}triggerChange(){for(let e of this._onChangeCallbacks)e&&e(this.token,this.model)}};let LocalAuthStore=class LocalAuthStore extends BaseAuthStore{constructor(e="pocketbase_auth"){super(),this.storageFallback={},this.storageKey=e,this._bindStorageEvent()}get token(){return(this._storageGet(this.storageKey)||{}).token||""}get model(){return(this._storageGet(this.storageKey)||{}).model||null}save(e,t){this._storageSet(this.storageKey,{token:e,model:t}),super.save(e,t)}clear(){this._storageRemove(this.storageKey),super.clear()}_storageGet(e){if("undefined"!=typeof window&&(null==window?void 0:window.localStorage)){let t=window.localStorage.getItem(e)||"";try{return JSON.parse(t)}catch(e){return t}}return this.storageFallback[e]}_storageSet(e,t){if("undefined"!=typeof window&&(null==window?void 0:window.localStorage)){let i=t;"string"!=typeof t&&(i=JSON.stringify(t)),window.localStorage.setItem(e,i)}else this.storageFallback[e]=t}_storageRemove(e){var t;"undefined"!=typeof window&&(null==window?void 0:window.localStorage)&&(null===(t=window.localStorage)||void 0===t||t.removeItem(e)),delete this.storageFallback[e]}_bindStorageEvent(){"undefined"!=typeof window&&(null==window?void 0:window.localStorage)&&window.addEventListener&&window.addEventListener("storage",e=>{if(e.key!=this.storageKey)return;let t=this._storageGet(this.storageKey)||{};super.save(t.token||"",t.model||null)})}};let BaseService=class BaseService{constructor(e){this.client=e}};let SettingsService=class SettingsService extends BaseService{getAll(e){return e=Object.assign({method:"GET"},e),this.client.send("/api/settings",e)}update(e,t){return t=Object.assign({method:"PATCH",body:e},t),this.client.send("/api/settings",t)}testS3(e="storage",t){return t=Object.assign({method:"POST",body:{filesystem:e}},t),this.client.send("/api/settings/test/s3",t).then(()=>!0)}testEmail(e,t,i){return i=Object.assign({method:"POST",body:{email:e,template:t}},i),this.client.send("/api/settings/test/email",i).then(()=>!0)}generateAppleClientSecret(e,t,i,s,n,r){return r=Object.assign({method:"POST",body:{clientId:e,teamId:t,keyId:i,privateKey:s,duration:n}},r),this.client.send("/api/settings/apple/generate-client-secret",r)}};let CrudService=class CrudService extends BaseService{decode(e){return e}getFullList(e,t){if("number"==typeof e)return this._getFullList(e,t);let i=500;return(t=Object.assign({},e,t)).batch&&(i=t.batch,delete t.batch),this._getFullList(i,t)}getList(e=1,t=30,i){return(i=Object.assign({method:"GET"},i)).query=Object.assign({page:e,perPage:t},i.query),this.client.send(this.baseCrudPath,i).then(e=>{var t;return e.items=(null===(t=e.items)||void 0===t?void 0:t.map(e=>this.decode(e)))||[],e})}getFirstListItem(e,t){return(t=Object.assign({requestKey:"one_by_filter_"+this.baseCrudPath+"_"+e},t)).query=Object.assign({filter:e,skipTotal:1},t.query),this.getList(1,1,t).then(e=>{var t;if(!(null===(t=null==e?void 0:e.items)||void 0===t?void 0:t.length))throw new ClientResponseError({status:404,data:{code:404,message:"The requested resource wasn't found.",data:{}}});return e.items[0]})}getOne(e,t){return t=Object.assign({method:"GET"},t),this.client.send(this.baseCrudPath+"/"+encodeURIComponent(e),t).then(e=>this.decode(e))}create(e,t){return t=Object.assign({method:"POST",body:e},t),this.client.send(this.baseCrudPath,t).then(e=>this.decode(e))}update(e,t,i){return i=Object.assign({method:"PATCH",body:t},i),this.client.send(this.baseCrudPath+"/"+encodeURIComponent(e),i).then(e=>this.decode(e))}delete(e,t){return t=Object.assign({method:"DELETE"},t),this.client.send(this.baseCrudPath+"/"+encodeURIComponent(e),t).then(()=>!0)}_getFullList(e=500,t){(t=t||{}).query=Object.assign({skipTotal:1},t.query);let i=[],request=s=>__awaiter(this,void 0,void 0,function*(){return this.getList(s,e||500,t).then(e=>{let t=e.items;return i=i.concat(t),t.length==e.perPage?request(s+1):i})});return request(1)}};function normalizeLegacyOptionsArgs(e,t,i,s){let n=void 0!==s;return n||void 0!==i?n?(console.warn(e),t.body=Object.assign({},t.body,i),t.query=Object.assign({},t.query,s),t):Object.assign(t,i):t}function resetAutoRefresh(e){var t;null===(t=e._resetAutoRefresh)||void 0===t||t.call(e)}let AdminService=class AdminService extends CrudService{get baseCrudPath(){return"/api/admins"}update(e,t,i){return super.update(e,t,i).then(e=>{var t,i;return(null===(t=this.client.authStore.model)||void 0===t?void 0:t.id)===e.id&&void 0===(null===(i=this.client.authStore.model)||void 0===i?void 0:i.collectionId)&&this.client.authStore.save(this.client.authStore.token,e),e})}delete(e,t){return super.delete(e,t).then(t=>{var i,s;return t&&(null===(i=this.client.authStore.model)||void 0===i?void 0:i.id)===e&&void 0===(null===(s=this.client.authStore.model)||void 0===s?void 0:s.collectionId)&&this.client.authStore.clear(),t})}authResponse(e){let t=this.decode((null==e?void 0:e.admin)||{});return(null==e?void 0:e.token)&&(null==e?void 0:e.admin)&&this.client.authStore.save(e.token,t),Object.assign({},e,{token:(null==e?void 0:e.token)||"",admin:t})}authWithPassword(e,t,i,s){return __awaiter(this,void 0,void 0,function*(){let n={method:"POST",body:{identity:e,password:t}};n=normalizeLegacyOptionsArgs("This form of authWithPassword(email, pass, body?, query?) is deprecated. Consider replacing it with authWithPassword(email, pass, options?).",n,i,s);let r=n.autoRefreshThreshold;delete n.autoRefreshThreshold,n.autoRefresh||resetAutoRefresh(this.client);let o=yield this.client.send(this.baseCrudPath+"/auth-with-password",n);return o=this.authResponse(o),r&&function(e,t,i,s){resetAutoRefresh(e);let n=e.beforeSend,r=e.authStore.model,o=e.authStore.onChange((t,i)=>{(!t||(null==i?void 0:i.id)!=(null==r?void 0:r.id)||((null==i?void 0:i.collectionId)||(null==r?void 0:r.collectionId))&&(null==i?void 0:i.collectionId)!=(null==r?void 0:r.collectionId))&&resetAutoRefresh(e)});e._resetAutoRefresh=function(){o(),e.beforeSend=n,delete e._resetAutoRefresh},e.beforeSend=(r,o)=>__awaiter(this,void 0,void 0,function*(){var a;let l=e.authStore.token;if(null===(a=o.query)||void 0===a?void 0:a.autoRefresh)return n?n(r,o):{url:r,sendOptions:o};let c=e.authStore.isValid;if(c&&isTokenExpired(e.authStore.token,t))try{yield i()}catch(e){c=!1}c||(yield s());let d=o.headers||{};for(let t in d)if("authorization"==t.toLowerCase()&&l==d[t]&&e.authStore.token){d[t]=e.authStore.token;break}return o.headers=d,n?n(r,o):{url:r,sendOptions:o}})}(this.client,r,()=>this.authRefresh({autoRefresh:!0}),()=>this.authWithPassword(e,t,Object.assign({autoRefresh:!0},n))),o})}authRefresh(e,t){let i={method:"POST"};return i=normalizeLegacyOptionsArgs("This form of authRefresh(body?, query?) is deprecated. Consider replacing it with authRefresh(options?).",i,e,t),this.client.send(this.baseCrudPath+"/auth-refresh",i).then(this.authResponse.bind(this))}requestPasswordReset(e,t,i){let s={method:"POST",body:{email:e}};return s=normalizeLegacyOptionsArgs("This form of requestPasswordReset(email, body?, query?) is deprecated. Consider replacing it with requestPasswordReset(email, options?).",s,t,i),this.client.send(this.baseCrudPath+"/request-password-reset",s).then(()=>!0)}confirmPasswordReset(e,t,i,s,n){let r={method:"POST",body:{token:e,password:t,passwordConfirm:i}};return r=normalizeLegacyOptionsArgs("This form of confirmPasswordReset(resetToken, password, passwordConfirm, body?, query?) is deprecated. Consider replacing it with confirmPasswordReset(resetToken, password, passwordConfirm, options?).",r,s,n),this.client.send(this.baseCrudPath+"/confirm-password-reset",r).then(()=>!0)}};let RealtimeService=class RealtimeService extends BaseService{constructor(){super(...arguments),this.clientId="",this.eventSource=null,this.subscriptions={},this.lastSentTopics=[],this.maxConnectTimeout=15e3,this.reconnectAttempts=0,this.maxReconnectAttempts=1/0,this.predefinedReconnectIntervals=[200,300,500,1e3,1200,1500,2e3],this.pendingConnects=[]}get isConnected(){return!!this.eventSource&&!!this.clientId&&!this.pendingConnects.length}subscribe(e,t){var i;return __awaiter(this,void 0,void 0,function*(){if(!e)throw Error("topic must be set.");let listener=function(e){let i;try{i=JSON.parse(null==e?void 0:e.data)}catch(e){}t(i||{})};return this.subscriptions[e]||(this.subscriptions[e]=[]),this.subscriptions[e].push(listener),this.isConnected?1===this.subscriptions[e].length?yield this.submitSubscriptions():null===(i=this.eventSource)||void 0===i||i.addEventListener(e,listener):yield this.connect(),()=>__awaiter(this,void 0,void 0,function*(){return this.unsubscribeByTopicAndListener(e,listener)})})}unsubscribe(e){var t;return __awaiter(this,void 0,void 0,function*(){if(this.hasSubscriptionListeners(e)){if(e){for(let i of this.subscriptions[e])null===(t=this.eventSource)||void 0===t||t.removeEventListener(e,i);delete this.subscriptions[e]}else this.subscriptions={};this.hasSubscriptionListeners()?this.hasSubscriptionListeners(e)||(yield this.submitSubscriptions()):this.disconnect()}})}unsubscribeByPrefix(e){var t;return __awaiter(this,void 0,void 0,function*(){let i=!1;for(let s in this.subscriptions)if(s.startsWith(e)){for(let e of(i=!0,this.subscriptions[s]))null===(t=this.eventSource)||void 0===t||t.removeEventListener(s,e);delete this.subscriptions[s]}i&&(this.hasSubscriptionListeners()?yield this.submitSubscriptions():this.disconnect())})}unsubscribeByTopicAndListener(e,t){var i;return __awaiter(this,void 0,void 0,function*(){if(!Array.isArray(this.subscriptions[e])||!this.subscriptions[e].length)return;let s=!1;for(let n=this.subscriptions[e].length-1;n>=0;n--)this.subscriptions[e][n]===t&&(s=!0,delete this.subscriptions[e][n],this.subscriptions[e].splice(n,1),null===(i=this.eventSource)||void 0===i||i.removeEventListener(e,t));s&&(this.subscriptions[e].length||delete this.subscriptions[e],this.hasSubscriptionListeners()?this.hasSubscriptionListeners(e)||(yield this.submitSubscriptions()):this.disconnect())})}hasSubscriptionListeners(e){var t,i;if(this.subscriptions=this.subscriptions||{},e)return!!(null===(t=this.subscriptions[e])||void 0===t?void 0:t.length);for(let e in this.subscriptions)if(null===(i=this.subscriptions[e])||void 0===i?void 0:i.length)return!0;return!1}submitSubscriptions(){return __awaiter(this,void 0,void 0,function*(){if(this.clientId)return this.addAllSubscriptionListeners(),this.lastSentTopics=this.getNonEmptySubscriptionTopics(),this.client.send("/api/realtime",{method:"POST",body:{clientId:this.clientId,subscriptions:this.lastSentTopics},query:{requestKey:this.getSubscriptionsCancelKey()}}).catch(e=>{if(!(null==e?void 0:e.isAbort))throw e})})}getSubscriptionsCancelKey(){return"realtime_"+this.clientId}getNonEmptySubscriptionTopics(){let e=[];for(let t in this.subscriptions)this.subscriptions[t].length&&e.push(t);return e}addAllSubscriptionListeners(){if(this.eventSource)for(let e in this.removeAllSubscriptionListeners(),this.subscriptions)for(let t of this.subscriptions[e])this.eventSource.addEventListener(e,t)}removeAllSubscriptionListeners(){if(this.eventSource)for(let e in this.subscriptions)for(let t of this.subscriptions[e])this.eventSource.removeEventListener(e,t)}connect(){return __awaiter(this,void 0,void 0,function*(){if(!(this.reconnectAttempts>0))return new Promise((e,t)=>{this.pendingConnects.push({resolve:e,reject:t}),this.pendingConnects.length>1||this.initConnect()})})}initConnect(){this.disconnect(!0),clearTimeout(this.connectTimeoutId),this.connectTimeoutId=setTimeout(()=>{this.connectErrorHandler(Error("EventSource connect took too long."))},this.maxConnectTimeout),this.eventSource=new EventSource(this.client.buildUrl("/api/realtime")),this.eventSource.onerror=e=>{this.connectErrorHandler(Error("Failed to establish realtime connection."))},this.eventSource.addEventListener("PB_CONNECT",e=>{this.clientId=null==e?void 0:e.lastEventId,this.submitSubscriptions().then(()=>__awaiter(this,void 0,void 0,function*(){let e=3;for(;this.hasUnsentSubscriptions()&&e>0;)e--,yield this.submitSubscriptions()})).then(()=>{for(let e of this.pendingConnects)e.resolve();this.pendingConnects=[],this.reconnectAttempts=0,clearTimeout(this.reconnectTimeoutId),clearTimeout(this.connectTimeoutId)}).catch(e=>{this.clientId="",this.connectErrorHandler(e)})})}hasUnsentSubscriptions(){let e=this.getNonEmptySubscriptionTopics();if(e.length!=this.lastSentTopics.length)return!0;for(let t of e)if(!this.lastSentTopics.includes(t))return!0;return!1}connectErrorHandler(e){if(clearTimeout(this.connectTimeoutId),clearTimeout(this.reconnectTimeoutId),!this.clientId&&!this.reconnectAttempts||this.reconnectAttempts>this.maxReconnectAttempts){for(let t of this.pendingConnects)t.reject(new ClientResponseError(e));return this.pendingConnects=[],void this.disconnect()}this.disconnect(!0);let t=this.predefinedReconnectIntervals[this.reconnectAttempts]||this.predefinedReconnectIntervals[this.predefinedReconnectIntervals.length-1];this.reconnectAttempts++,this.reconnectTimeoutId=setTimeout(()=>{this.initConnect()},t)}disconnect(e=!1){var t;if(clearTimeout(this.connectTimeoutId),clearTimeout(this.reconnectTimeoutId),this.removeAllSubscriptionListeners(),this.client.cancelRequest(this.getSubscriptionsCancelKey()),null===(t=this.eventSource)||void 0===t||t.close(),this.eventSource=null,this.clientId="",!e){for(let e of(this.reconnectAttempts=0,this.pendingConnects))e.resolve();this.pendingConnects=[]}}};let RecordService=class RecordService extends CrudService{constructor(e,t){super(e),this.collectionIdOrName=t}get baseCrudPath(){return this.baseCollectionPath+"/records"}get baseCollectionPath(){return"/api/collections/"+encodeURIComponent(this.collectionIdOrName)}subscribeOne(e,t){return __awaiter(this,void 0,void 0,function*(){return console.warn("PocketBase: subscribeOne(recordId, callback) is deprecated. Please replace it with subscribe(recordId, callback)."),this.client.realtime.subscribe(this.collectionIdOrName+"/"+e,t)})}subscribe(e,t){return __awaiter(this,void 0,void 0,function*(){if("function"==typeof e)return console.warn("PocketBase: subscribe(callback) is deprecated. Please replace it with subscribe('*', callback)."),this.client.realtime.subscribe(this.collectionIdOrName,e);if(!t)throw Error("Missing subscription callback.");if(""===e)throw Error("Missing topic.");let i=this.collectionIdOrName;return"*"!==e&&(i+="/"+e),this.client.realtime.subscribe(i,t)})}unsubscribe(e){return __awaiter(this,void 0,void 0,function*(){return"*"===e?this.client.realtime.unsubscribe(this.collectionIdOrName):e?this.client.realtime.unsubscribe(this.collectionIdOrName+"/"+e):this.client.realtime.unsubscribeByPrefix(this.collectionIdOrName)})}getFullList(e,t){if("number"==typeof e)return super.getFullList(e,t);let i=Object.assign({},e,t);return super.getFullList(i)}getList(e=1,t=30,i){return super.getList(e,t,i)}getFirstListItem(e,t){return super.getFirstListItem(e,t)}getOne(e,t){return super.getOne(e,t)}create(e,t){return super.create(e,t)}update(e,t,i){return super.update(e,t,i).then(e=>{var t,i,s;return(null===(t=this.client.authStore.model)||void 0===t?void 0:t.id)!==(null==e?void 0:e.id)||(null===(i=this.client.authStore.model)||void 0===i?void 0:i.collectionId)!==this.collectionIdOrName&&(null===(s=this.client.authStore.model)||void 0===s?void 0:s.collectionName)!==this.collectionIdOrName||this.client.authStore.save(this.client.authStore.token,e),e})}delete(e,t){return super.delete(e,t).then(t=>{var i,s,n;return t&&(null===(i=this.client.authStore.model)||void 0===i?void 0:i.id)===e&&((null===(s=this.client.authStore.model)||void 0===s?void 0:s.collectionId)===this.collectionIdOrName||(null===(n=this.client.authStore.model)||void 0===n?void 0:n.collectionName)===this.collectionIdOrName)&&this.client.authStore.clear(),t})}authResponse(e){let t=this.decode((null==e?void 0:e.record)||{});return this.client.authStore.save(null==e?void 0:e.token,t),Object.assign({},e,{token:(null==e?void 0:e.token)||"",record:t})}listAuthMethods(e){return e=Object.assign({method:"GET"},e),this.client.send(this.baseCollectionPath+"/auth-methods",e).then(e=>Object.assign({},e,{usernamePassword:!!(null==e?void 0:e.usernamePassword),emailPassword:!!(null==e?void 0:e.emailPassword),authProviders:Array.isArray(null==e?void 0:e.authProviders)?null==e?void 0:e.authProviders:[]}))}authWithPassword(e,t,i,s){let n={method:"POST",body:{identity:e,password:t}};return n=normalizeLegacyOptionsArgs("This form of authWithPassword(usernameOrEmail, pass, body?, query?) is deprecated. Consider replacing it with authWithPassword(usernameOrEmail, pass, options?).",n,i,s),this.client.send(this.baseCollectionPath+"/auth-with-password",n).then(e=>this.authResponse(e))}authWithOAuth2Code(e,t,i,s,n,r,o){let a={method:"POST",body:{provider:e,code:t,codeVerifier:i,redirectUrl:s,createData:n}};return a=normalizeLegacyOptionsArgs("This form of authWithOAuth2Code(provider, code, codeVerifier, redirectUrl, createData?, body?, query?) is deprecated. Consider replacing it with authWithOAuth2Code(provider, code, codeVerifier, redirectUrl, createData?, options?).",a,r,o),this.client.send(this.baseCollectionPath+"/auth-with-oauth2",a).then(e=>this.authResponse(e))}authWithOAuth2(...e){return __awaiter(this,void 0,void 0,function*(){if(e.length>1||"string"==typeof(null==e?void 0:e[0]))return console.warn("PocketBase: This form of authWithOAuth2() is deprecated and may get removed in the future. Please replace with authWithOAuth2Code() OR use the authWithOAuth2() realtime form as shown in https://pocketbase.io/docs/authentication/#oauth2-integration."),this.authWithOAuth2Code((null==e?void 0:e[0])||"",(null==e?void 0:e[1])||"",(null==e?void 0:e[2])||"",(null==e?void 0:e[3])||"",(null==e?void 0:e[4])||{},(null==e?void 0:e[5])||{},(null==e?void 0:e[6])||{});let t=(null==e?void 0:e[0])||{},i=(yield this.listAuthMethods()).authProviders.find(e=>e.name===t.provider);if(!i)throw new ClientResponseError(Error(`Missing or invalid provider "${t.provider}".`));let s=this.client.buildUrl("/api/oauth2-redirect"),n=new RealtimeService(this.client),r=null;function cleanup(){null==r||r.close(),n.unsubscribe()}return t.urlCallback||(r=openBrowserPopup(void 0)),new Promise((e,o)=>__awaiter(this,void 0,void 0,function*(){var a;try{yield n.subscribe("@oauth2",r=>__awaiter(this,void 0,void 0,function*(){let a=n.clientId;try{if(!r.state||a!==r.state)throw Error("State parameters don't match.");let n=Object.assign({},t);delete n.provider,delete n.scopes,delete n.createData,delete n.urlCallback;let o=yield this.authWithOAuth2Code(i.name,r.code,i.codeVerifier,s,t.createData,n);e(o)}catch(e){o(new ClientResponseError(e))}cleanup()}));let l={state:n.clientId};(null===(a=t.scopes)||void 0===a?void 0:a.length)&&(l.scope=t.scopes.join(" "));let c=this._replaceQueryParams(i.authUrl+s,l),d=t.urlCallback||function(e){r?r.location.href=e:r=openBrowserPopup(e)};yield d(c)}catch(e){cleanup(),o(new ClientResponseError(e))}}))})}authRefresh(e,t){let i={method:"POST"};return i=normalizeLegacyOptionsArgs("This form of authRefresh(body?, query?) is deprecated. Consider replacing it with authRefresh(options?).",i,e,t),this.client.send(this.baseCollectionPath+"/auth-refresh",i).then(e=>this.authResponse(e))}requestPasswordReset(e,t,i){let s={method:"POST",body:{email:e}};return s=normalizeLegacyOptionsArgs("This form of requestPasswordReset(email, body?, query?) is deprecated. Consider replacing it with requestPasswordReset(email, options?).",s,t,i),this.client.send(this.baseCollectionPath+"/request-password-reset",s).then(()=>!0)}confirmPasswordReset(e,t,i,s,n){let r={method:"POST",body:{token:e,password:t,passwordConfirm:i}};return r=normalizeLegacyOptionsArgs("This form of confirmPasswordReset(token, password, passwordConfirm, body?, query?) is deprecated. Consider replacing it with confirmPasswordReset(token, password, passwordConfirm, options?).",r,s,n),this.client.send(this.baseCollectionPath+"/confirm-password-reset",r).then(()=>!0)}requestVerification(e,t,i){let s={method:"POST",body:{email:e}};return s=normalizeLegacyOptionsArgs("This form of requestVerification(email, body?, query?) is deprecated. Consider replacing it with requestVerification(email, options?).",s,t,i),this.client.send(this.baseCollectionPath+"/request-verification",s).then(()=>!0)}confirmVerification(e,t,i){let s={method:"POST",body:{token:e}};return s=normalizeLegacyOptionsArgs("This form of confirmVerification(token, body?, query?) is deprecated. Consider replacing it with confirmVerification(token, options?).",s,t,i),this.client.send(this.baseCollectionPath+"/confirm-verification",s).then(()=>!0)}requestEmailChange(e,t,i){let s={method:"POST",body:{newEmail:e}};return s=normalizeLegacyOptionsArgs("This form of requestEmailChange(newEmail, body?, query?) is deprecated. Consider replacing it with requestEmailChange(newEmail, options?).",s,t,i),this.client.send(this.baseCollectionPath+"/request-email-change",s).then(()=>!0)}confirmEmailChange(e,t,i,s){let n={method:"POST",body:{token:e,password:t}};return n=normalizeLegacyOptionsArgs("This form of confirmEmailChange(token, password, body?, query?) is deprecated. Consider replacing it with confirmEmailChange(token, password, options?).",n,i,s),this.client.send(this.baseCollectionPath+"/confirm-email-change",n).then(()=>!0)}listExternalAuths(e,t){return t=Object.assign({method:"GET"},t),this.client.send(this.baseCrudPath+"/"+encodeURIComponent(e)+"/external-auths",t)}unlinkExternalAuth(e,t,i){return i=Object.assign({method:"DELETE"},i),this.client.send(this.baseCrudPath+"/"+encodeURIComponent(e)+"/external-auths/"+encodeURIComponent(t),i).then(()=>!0)}_replaceQueryParams(e,t={}){let i=e,s="";e.indexOf("?")>=0&&(i=e.substring(0,e.indexOf("?")),s=e.substring(e.indexOf("?")+1));let n={},r=s.split("&");for(let e of r){if(""==e)continue;let t=e.split("=");n[decodeURIComponent(t[0].replace(/\+/g," "))]=decodeURIComponent((t[1]||"").replace(/\+/g," "))}for(let e in t)t.hasOwnProperty(e)&&(null==t[e]?delete n[e]:n[e]=t[e]);for(let e in s="",n)n.hasOwnProperty(e)&&(""!=s&&(s+="&"),s+=encodeURIComponent(e.replace(/%20/g,"+"))+"="+encodeURIComponent(n[e].replace(/%20/g,"+")));return""!=s?i+"?"+s:i}};function openBrowserPopup(e){if("undefined"==typeof window||!(null==window?void 0:window.open))throw new ClientResponseError(Error("Not in a browser context - please pass a custom urlCallback function."));let t=1024,i=768,s=window.innerWidth,n=window.innerHeight;t=t>s?s:t,i=i>n?n:i;let r=s/2-t/2,o=n/2-i/2;return window.open(e,"popup_window","width="+t+",height="+i+",top="+o+",left="+r+",resizable,menubar=no")}let CollectionService=class CollectionService extends CrudService{get baseCrudPath(){return"/api/collections"}import(e,t=!1,i){return __awaiter(this,void 0,void 0,function*(){return i=Object.assign({method:"PUT",body:{collections:e,deleteMissing:t}},i),this.client.send(this.baseCrudPath+"/import",i).then(()=>!0)})}};let LogService=class LogService extends BaseService{getRequestsList(e=1,t=30,i){return(i=Object.assign({method:"GET"},i)).query=Object.assign({page:e,perPage:t},i.query),this.client.send("/api/logs/requests",i)}getRequest(e,t){return t=Object.assign({method:"GET"},t),this.client.send("/api/logs/requests/"+encodeURIComponent(e),t)}getRequestsStats(e){return e=Object.assign({method:"GET"},e),this.client.send("/api/logs/requests/stats",e)}};let HealthService=class HealthService extends BaseService{check(e){return e=Object.assign({method:"GET"},e),this.client.send("/api/health",e)}};let FileService=class FileService extends BaseService{getUrl(e,t,i={}){if(!t||!(null==e?void 0:e.id)||!(null==e?void 0:e.collectionId)&&!(null==e?void 0:e.collectionName))return"";let s=[];s.push("api"),s.push("files"),s.push(encodeURIComponent(e.collectionId||e.collectionName)),s.push(encodeURIComponent(e.id)),s.push(encodeURIComponent(t));let n=this.client.buildUrl(s.join("/"));if(Object.keys(i).length){!1===i.download&&delete i.download;let e=new URLSearchParams(i);n+=(n.includes("?")?"&":"?")+e}return n}getToken(e){return e=Object.assign({method:"POST"},e),this.client.send("/api/files/token",e).then(e=>(null==e?void 0:e.token)||"")}};let BackupService=class BackupService extends BaseService{getFullList(e){return e=Object.assign({method:"GET"},e),this.client.send("/api/backups",e)}create(e,t){return t=Object.assign({method:"POST",body:{name:e}},t),this.client.send("/api/backups",t).then(()=>!0)}upload(e,t){return t=Object.assign({method:"POST",body:e},t),this.client.send("/api/backups/upload",t).then(()=>!0)}delete(e,t){return t=Object.assign({method:"DELETE"},t),this.client.send(`/api/backups/${encodeURIComponent(e)}`,t).then(()=>!0)}restore(e,t){return t=Object.assign({method:"POST"},t),this.client.send(`/api/backups/${encodeURIComponent(e)}/restore`,t).then(()=>!0)}getDownloadUrl(e,t){return this.client.buildUrl(`/api/backups/${encodeURIComponent(t)}?token=${encodeURIComponent(e)}`)}};let o=["requestKey","$cancelKey","$autoCancel","fetch","headers","body","query","params","cache","credentials","headers","integrity","keepalive","method","mode","redirect","referrer","referrerPolicy","signal","window"];let Client=class Client{constructor(e="/",t,i="en-US"){this.cancelControllers={},this.recordServices={},this.enableAutoCancellation=!0,this.baseUrl=e,this.lang=i,this.authStore=t||new LocalAuthStore,this.admins=new AdminService(this),this.collections=new CollectionService(this),this.files=new FileService(this),this.logs=new LogService(this),this.settings=new SettingsService(this),this.realtime=new RealtimeService(this),this.health=new HealthService(this),this.backups=new BackupService(this)}collection(e){return this.recordServices[e]||(this.recordServices[e]=new RecordService(this,e)),this.recordServices[e]}autoCancellation(e){return this.enableAutoCancellation=!!e,this}cancelRequest(e){return this.cancelControllers[e]&&(this.cancelControllers[e].abort(),delete this.cancelControllers[e]),this}cancelAllRequests(){for(let e in this.cancelControllers)this.cancelControllers[e].abort();return this.cancelControllers={},this}getFileUrl(e,t,i={}){return this.files.getUrl(e,t,i)}buildUrl(e){var t;let i=this.baseUrl;return"undefined"==typeof window||!window.location||i.startsWith("https://")||i.startsWith("http://")||(i=(null===(t=window.location.origin)||void 0===t?void 0:t.endsWith("/"))?window.location.origin.substring(0,window.location.origin.length-1):window.location.origin||"",this.baseUrl.startsWith("/")||(i+=window.location.pathname||"/",i+=i.endsWith("/")?"":"/"),i+=this.baseUrl),e&&(i+=(i.endsWith("/")?"":"/")+(e.startsWith("/")?e.substring(1):e)),i}send(e,t){return __awaiter(this,void 0,void 0,function*(){t=this.initSendOptions(e,t);let i=this.buildUrl(e);if(this.beforeSend){let e=Object.assign({},(yield this.beforeSend(i,t)));void 0!==e.url||void 0!==e.options?(i=e.url||i,t=e.options||t):Object.keys(e).length&&(t=e,(null==console?void 0:console.warn)&&console.warn("Deprecated format of beforeSend return: please use `return { url, options }`, instead of `return options`."))}if(void 0!==t.query){let e=this.serializeQueryParams(t.query);e&&(i+=(i.includes("?")?"&":"?")+e),delete t.query}return"application/json"==this.getHeader(t.headers,"Content-Type")&&t.body&&"string"!=typeof t.body&&(t.body=JSON.stringify(t.body)),(t.fetch||fetch)(i,t).then(e=>__awaiter(this,void 0,void 0,function*(){let t={};try{t=yield e.json()}catch(e){}if(this.afterSend&&(t=yield this.afterSend(e,t)),e.status>=400)throw new ClientResponseError({url:e.url,status:e.status,data:t});return t})).catch(e=>{throw new ClientResponseError(e)})})}initSendOptions(e,t){for(let e in(t=Object.assign({method:"GET"},t)).query=t.query||{},t.body=this.convertToFormDataIfNeeded(t.body),t)o.includes(e)||(t.query[e]=t[e],delete t[e]);if(t.query=Object.assign({},t.params,t.query),void 0===t.requestKey&&(!1===t.$autoCancel||!1===t.query.$autoCancel?t.requestKey=null:(t.$cancelKey||t.query.$cancelKey)&&(t.requestKey=t.$cancelKey||t.query.$cancelKey)),delete t.$autoCancel,delete t.query.$autoCancel,delete t.$cancelKey,delete t.query.$cancelKey,null!==this.getHeader(t.headers,"Content-Type")||this.isFormData(t.body)||(t.headers=Object.assign({},t.headers,{"Content-Type":"application/json"})),null===this.getHeader(t.headers,"Accept-Language")&&(t.headers=Object.assign({},t.headers,{"Accept-Language":this.lang})),this.authStore.token&&null===this.getHeader(t.headers,"Authorization")&&(t.headers=Object.assign({},t.headers,{Authorization:this.authStore.token})),this.enableAutoCancellation&&null!==t.requestKey){let i=t.requestKey||(t.method||"GET")+e;delete t.requestKey,this.cancelRequest(i);let s=new AbortController;this.cancelControllers[i]=s,t.signal=s.signal}return t}convertToFormDataIfNeeded(e){if("undefined"==typeof FormData||void 0===e||"object"!=typeof e||null===e||this.isFormData(e)||!this.hasBlobField(e))return e;let t=new FormData;for(let i in e){let s=Array.isArray(e[i])?e[i]:[e[i]];for(let e of s)t.append(i,e)}return t}hasBlobField(e){for(let t in e){let i=Array.isArray(e[t])?e[t]:[e[t]];for(let e of i)if("undefined"!=typeof Blob&&e instanceof Blob||"undefined"!=typeof File&&e instanceof File)return!0}return!1}getHeader(e,t){for(let i in e=e||{},t=t.toLowerCase(),e)if(i.toLowerCase()==t)return e[i];return null}isFormData(e){return e&&("FormData"===e.constructor.name||"undefined"!=typeof FormData&&e instanceof FormData)}serializeQueryParams(e){let t=[];for(let i in e){if(null===e[i])continue;let s=e[i],n=encodeURIComponent(i);if(Array.isArray(s))for(let e of s)t.push(n+"="+encodeURIComponent(e));else s instanceof Date?t.push(n+"="+encodeURIComponent(s.toISOString())):"object"==typeof s?t.push(n+"="+encodeURIComponent(JSON.stringify(s))):t.push(n+"="+encodeURIComponent(s))}return t.join("&")}}}}]);