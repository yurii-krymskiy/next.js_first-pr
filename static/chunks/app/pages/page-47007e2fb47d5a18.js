(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[342,931],{1582:function(e,t,s){Promise.resolve().then(s.bind(s,7171))},4864:function(e,t,s){"use strict";s.d(t,{Q:function(){return pocketbase}});var n=s(6172);let pocketbase=()=>{let e=new n.ZP("http://127.0.0.1:8090/");e.autoCancellation(!1);let getPosts=async()=>e.collection("posts").getFullList();return{getPosts}}},7171:function(e,t,s){"use strict";s.r(t),s.d(t,{HomePage:function(){return HomePage},default:function(){return a}});var n=s(7437),r=s(2265),c=s(4864);s(5202);var components_Card_Card=e=>{let{title:t,shortdes:s,date:r,children:c}=e;return(0,n.jsxs)("div",{className:"bg-F1F0E8 p-4 rounded-md shadow-md inline-block",children:[(0,n.jsx)("h2",{className:"text-lg font-semibold mb-4 cursor-pointer",children:t}),(0,n.jsx)("p",{className:"text-sm mb-6 cursor-pointer",children:s}),(0,n.jsx)("p",{className:"text-xs mb-6 text-gray-500 cursor-pointer",children:r}),c]})},l=s(1396),o=s.n(l);let HomePage=()=>{let{getPosts:e}=(0,c.Q)(),[t,s]=(0,r.useState)([]),[l,a]=(0,r.useState)(null);return(0,r.useEffect)(()=>{let loadData=async()=>{try{let t=await e();s(t),console.log(t)}catch(e){a("Error")}};loadData()},[]),(0,n.jsx)("div",{children:(0,n.jsxs)("main",{className:"bg-ADC4CE p-4 flex flex-col justify-center items-center bg-cover bg-center min-h-screen",children:[(0,n.jsx)("h1",{className:"text-3xl font-semibold text-center mx-auto",children:"Welcome to main page"}),l?"Error":"",(0,n.jsx)("div",{className:"grid mt-[100px] grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4 bg-EEE0C9 p-4",children:t.map(e=>{let{id:t,title:s,shortdes:c,date:l,fulldesc:a,url:i}=e;return(0,n.jsx)(r.Fragment,{children:(0,n.jsx)(components_Card_Card,{fulldesc:a,url:i,title:s,shortdes:c,date:l,children:(0,n.jsx)(o(),{href:"/posts/".concat(t),as:"/posts/".concat(t),className:"mt-4",title:s,children:"Visit"})})},t)})})]})})};var a=HomePage},5202:function(){},1396:function(e,t,s){e.exports=s(4724)}},function(e){e.O(0,[724,673,971,864,744],function(){return e(e.s=1582)}),_N_E=e.O()}]);