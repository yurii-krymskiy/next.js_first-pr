(()=>{var e={};e.id=722,e.ids=[722],e.modules={2934:e=>{"use strict";e.exports=require("next/dist/client/components/action-async-storage.external.js")},5403:e=>{"use strict";e.exports=require("next/dist/client/components/request-async-storage.external")},4580:e=>{"use strict";e.exports=require("next/dist/client/components/request-async-storage.external.js")},4749:e=>{"use strict";e.exports=require("next/dist/client/components/static-generation-async-storage.external")},5869:e=>{"use strict";e.exports=require("next/dist/client/components/static-generation-async-storage.external.js")},399:e=>{"use strict";e.exports=require("next/dist/compiled/next-server/app-page.runtime.prod.js")},1017:e=>{"use strict";e.exports=require("path")},7310:e=>{"use strict";e.exports=require("url")},712:(e,t,s)=>{"use strict";s.r(t),s.d(t,{GlobalError:()=>n.a,__next_app__:()=>p,originalPathname:()=>u,pages:()=>m,routeModule:()=>x,tree:()=>c});var a=s(3137),r=s(4647),i=s(4183),n=s.n(i),o=s(1775),l={};for(let e in o)0>["default","tree","pages","GlobalError","originalPathname","__next_app__","routeModule"].indexOf(e)&&(l[e]=()=>o[e]);s.d(t,l);let d=a.AppPageRouteModule,c=["",{children:["posts",{children:["[id]",{children:["__PAGE__",{},{page:[()=>Promise.resolve().then(s.bind(s,5325)),"/Users/yurii/test/blog/app/posts/[id]/page.tsx"]}]},{}]},{metadata:{icon:[async e=>(await Promise.resolve().then(s.bind(s,7481))).default(e)],apple:[],openGraph:[],twitter:[],manifest:void 0}}]},{layout:[()=>Promise.resolve().then(s.bind(s,1335)),"/Users/yurii/test/blog/app/layout.tsx"],"not-found":[()=>Promise.resolve().then(s.t.bind(s,1918,23)),"next/dist/client/components/not-found-error"],metadata:{icon:[async e=>(await Promise.resolve().then(s.bind(s,7481))).default(e)],apple:[],openGraph:[],twitter:[],manifest:void 0}}],m=["/Users/yurii/test/blog/app/posts/[id]/page.tsx"],u="/posts/[id]/page",p={require:s,loadChunk:()=>Promise.resolve()},x=new d({definition:{kind:r.x.APP_PAGE,page:"/posts/[id]/page",pathname:"/posts/[id]",bundlePath:"",filename:"",appPaths:[]},userland:{loaderTree:c}})},2184:(e,t,s)=>{Promise.resolve().then(s.bind(s,2121))},4642:(e,t,s)=>{"use strict";s.d(t,{Q:()=>pocketbase});var a=s(5537);let pocketbase=()=>{let e=new a.ZP("http://127.0.0.1:8090");e.autoCancellation(!1);let getPosts=async()=>e.collection("posts").getFullList();return{getPosts}}},2121:(e,t,s)=>{"use strict";s.r(t),s.d(t,{default:()=>page});var a=s(80),r=s(4642),i=s(9885),n=s(5537);let addComments=async e=>{let t=new n.ZP("http://127.0.0.1:8090"),s=await t.collection("comments").create(e);return{record:s}},getComment=async()=>{let e=new n.ZP("http://127.0.0.1:8090");e.autoCancellation(!1);let t=await e.collection("comments").getFullList();return{record:t}},CommentForm=({onSubmit:e,id:t})=>{let[s,r]=(0,i.useState)(""),[n,o]=(0,i.useState)(""),[l,d]=(0,i.useState)(""),[c,m]=(0,i.useState)(!1),handleReset=()=>{r(""),o(""),d("")},u={personalId:t,name:s,email:n,comment:l};return a.jsx("div",{children:(0,a.jsxs)("form",{onSubmit:a=>{a.preventDefault(),(s||n||l)&&(e({id:t,name:s,email:n,comment:l}),handleReset(),m(!0),addComments(u))},children:[(0,a.jsxs)("div",{className:"mb-4",children:[a.jsx("label",{htmlFor:"name",className:"block text-sm font-medium text-gray-700",children:"Ім'я:"}),a.jsx("input",{type:"text",id:"name",value:s,onChange:e=>{r(e.target.value)},required:!0,className:"mt-1 p-2 block w-full rounded-md border-gray-300 shadow-sm focus:ring-indigo-500 focus:border-indigo-500"})]}),(0,a.jsxs)("div",{className:"mb-4",children:[a.jsx("label",{htmlFor:"email",className:"block text-sm font-medium text-gray-700",children:"Електронна пошта:"}),a.jsx("input",{type:"email",id:"email",value:n,onChange:e=>{o(e.target.value)},required:!0,className:"mt-1 p-2 block w-full rounded-md border-gray-300 shadow-sm focus:ring-indigo-500 focus:border-indigo-500"})]}),(0,a.jsxs)("div",{className:"mb-4",children:[a.jsx("label",{htmlFor:"comment",className:"block text-sm font-medium text-gray-700",children:"Коментар:"}),a.jsx("textarea",{id:"comment",value:l,onChange:e=>{d(e.target.value)},required:!0,className:"mt-1 p-2 block w-full rounded-md border-gray-300 shadow-sm focus:ring-indigo-500 focus:border-indigo-500"})]}),a.jsx("div",{children:a.jsx("button",{type:"submit",className:"inline-block bg-96B6C5 text-white px-4 py-2 rounded-md hover:bg-indigo-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500",children:"Відправити коментар"})})]})})},CommentInfo=({comment:e})=>(0,a.jsxs)("article",{className:"bg-gray-100 border p-4 rounded-md",children:[a.jsx("h2",{className:"text-xl font-semibold mt-2",children:e.name}),a.jsx("p",{className:"mt-2",children:e.comment})]}),CommentList=({comment:e})=>a.jsx("section",{className:"space-y-4",children:e?e.map((e,t)=>a.jsx(CommentInfo,{comment:e},t)):null}),page=({params:e})=>{let[t,s]=(0,i.useState)([]),n=e.id,{getPosts:o}=(0,r.Q)(),[l,d]=(0,i.useState)(null);return(0,i.useEffect)(()=>{let loadData=async()=>{try{let t=await o(),a=t.find(t=>t.id===e.id);d(a||null);let r=await getComment(),i=r.record.filter(t=>t.personalId===e.id);s(i)}catch(e){console.error("Error loading data:",e)}};loadData()},[e.id]),(0,a.jsxs)("div",{className:"bg-EEE0C9 min-h-screen p-8",children:[a.jsx("div",{className:"max-w-2xl mx-auto bg-white p-6 rounded-lg shadow-lg",children:l?a.jsx("div",{children:(0,a.jsxs)("div",{children:[a.jsx("h2",{className:"text-2xl font-semibold mb-4 sm:text-3xl md:text-4xl lg:text-5xl",children:l.title}),a.jsx("img",{src:l.url,className:"text-blue-500"}),a.jsx("p",{className:"mt-6",children:l.fulldesc}),a.jsx("p",{className:"mt-6 text-gray-600",children:l.date})]})}):a.jsx("p",{children:"Loading..."})}),a.jsx("div",{className:"max-w-2xl mx-auto mt-8",children:a.jsx(CommentForm,{id:n,onSubmit:({...e})=>{let t={id:"",collectionId:"",collectionName:"",created:"",updated:"",...e};s(e=>[...e,t]),console.log(t)}})}),a.jsx("div",{className:"max-w-2xl mx-auto mt-8",children:a.jsx(CommentList,{comment:t})})]})}},5325:(e,t,s)=>{"use strict";s.r(t),s.d(t,{$$typeof:()=>n,__esModule:()=>i,default:()=>l});var a=s(7536);let r=(0,a.createProxy)(String.raw`/Users/yurii/test/blog/app/posts/[id]/page.tsx`),{__esModule:i,$$typeof:n}=r,o=r.default,l=o},7481:(e,t,s)=>{"use strict";s.r(t),s.d(t,{default:()=>__WEBPACK_DEFAULT_EXPORT__});var a=s(6885);let __WEBPACK_DEFAULT_EXPORT__=e=>{let t=(0,a.fillMetadataSegment)(".",e.params,"favicon.ico");return[{type:"image/x-icon",sizes:"16x16",url:t+""}]}}};var t=require("../../../webpack-runtime.js");t.C(e);var __webpack_exec__=e=>t(t.s=e),s=t.X(0,[318,237,302],()=>__webpack_exec__(712));module.exports=s})();