"use strict";exports.id=337,exports.ids=[337],exports.modules={4642:(t,e,o)=>{o.d(e,{Q:()=>pocketbase,Y:()=>getData});var s=o(5537);let pocketbase=()=>{let t=new s.ZP("http://127.0.0.1:8090/api/collections/posts/records");t.autoCancellation(!1);let getPosts=async()=>t.collection("posts").getFullList();return{getPosts}},getData=async()=>{try{let t=await fetch("http://127.0.0.1:8090/api/collections/posts/records");if(!t.ok)throw Error(`HTTP error! Статус: ${t.status}`);let e=await t.json();return e}catch(t){throw console.error("Виникла помилка:",t),t}}},7481:(t,e,o)=>{o.r(e),o.d(e,{default:()=>__WEBPACK_DEFAULT_EXPORT__});var s=o(6885);let __WEBPACK_DEFAULT_EXPORT__=t=>{let e=(0,s.fillMetadataSegment)(".",t.params,"favicon.ico");return[{type:"image/x-icon",sizes:"16x16",url:e+""}]}}};