import{c as B,V as D,a2 as F,F as w,D as A,r as b,o as S,a3 as j,n as q,g as i,h as l,i as s,I as r,G as m,j as d,u as o,k as _,H as k,J as z,m as I}from"./vendor.9760fa8a.js";import{p as L}from"./index.373df683.js";import{_ as M}from"./plugin-vue_export-helper.21dcd24c.js";const G={class:"pb-5"},H={class:"flex-shrink-0 text-slate-400"},J={class:"ml-3"},R=["onClick"],T={class:"grid grid-flow-row grid-cols-6 xl:grid-cols-8 2xl:grid-cols-10 gap-5"},U=["onClick"],V=["src"],$={class:"mt-2 text-sm"},K={class:"py-10"},N=I("\u52A0\u8F7D\u66F4\u591A"),O=B({setup(P){const p=D(F,{direction:"vertical"}),g=w(),u=A([]),e=b({init:!1,loading:!1,page:1,limit:60,initial:"-1",type:-1,area:-1}),y=async()=>{e.loading=!0;try{const t=await L(e);e.page===1?u.value=t:u.value.push(...t),e.init=!0,e.loading=!1}catch{e.page--}},v=()=>{e.page++,y()};S(y);const f=(t,c)=>{console.log(t,c),e.page=1,t==="type"&&(e.type=c),t==="area"&&(e.area=c),t==="initial"&&(e.initial=c),y()},x=[{name:"\u8BED\u79CD",key:"area",list:[{key:-1,name:"\u5168\u90E8"},{key:7,name:"\u534E\u8BED"},{key:96,name:"\u6B27\u7F8E"},{key:8,name:"\u65E5\u672C"},{key:16,name:"\u97E9\u56FD"},{key:0,name:"\u5176\u4ED6"}]},{name:"\u5206\u7C7B",key:"type",list:[{key:-1,name:"\u5168\u90E8"},{key:1,name:"\u7537\u6B4C\u624B"},{key:2,name:"\u5973\u6B4C\u624B"},{key:3,name:"\u4E50\u961F\u7EC4\u5408"}]},{name:"\u7B5B\u9009",key:"initial",list:[{key:"-1",name:"\u70ED\u95E8"},{key:"a",name:"A"},{key:"b",name:"B"},{key:"c",name:"C"},{key:"d",name:"D"},{key:"e",name:"E"},{key:"f",name:"F"},{key:"g",name:"G"},{key:"h",name:"H"},{key:"i",name:"I"},{key:"j",name:"J"},{key:"k",name:"K"},{key:"l",name:"L"},{key:"m",name:"M"},{key:"n",name:"N"},{key:"o",name:"O"},{key:"p",name:"P"},{key:"q",name:"Q"},{key:"r",name:"R"},{key:"s",name:"S"},{key:"t",name:"T"},{key:"u",name:"U"},{key:"v",name:"V"},{key:"w",name:"W"},{key:"x",name:"X"},{key:"y",name:"Y"},{key:"z",name:"Z"},{key:"0",name:"#"}]}];return(t,c)=>{const h=j,E=q;return i(),l(r,null,[s("div",G,[(i(),l(r,null,m(x,a=>s("div",{key:a.key,class:"flex text-xs mb-5"},[s("div",H,k(a.name)+"\uFF1A",1),s("div",J,[d(h,{wrap:"",size:10,spacer:o(p)},{default:_(()=>[(i(!0),l(r,null,m(a.list,(n,C)=>(i(),l("div",{type:"text",class:z(["hover-text px-1 py-0.5",{active:n.key===o(e).type&&a.key==="type"||n.key===o(e).area&&a.key==="area"||n.key===o(e).initial&&a.key==="initial"}]),key:C,onClick:Q=>f(a.key,n.key)},k(n.name),11,R))),128))]),_:2},1032,["spacer"])])])),64))]),s("div",T,[(i(!0),l(r,null,m(u.value,a=>(i(),l("div",{key:a.id,class:"flex items-center flex-col",onClick:n=>o(g).push({name:"artistDetail",query:{id:a.id}})},[s("img",{src:a.img1v1Url+"?param=120y120",alt:"",class:"rounded-full cursor-pointer w-full aspect-square object-cover bg-dc"},null,8,V),s("div",$,k(a.name),1)],8,U))),128))]),s("div",K,[d(E,{type:"text",class:"text-center w-full",onClick:v,loading:o(e).loading},{default:_(()=>[N]),_:1},8,["loading"])])],64)}}});var Z=M(O,[["__scopeId","data-v-1cc54718"]]);export{Z as default};
