import{c as g,t as v,F as y,o as k,g as o,h as e,i as t,I as c,G as a,u,j as _,H as l}from"./vendor.9760fa8a.js";import{_ as p}from"./CoverPlay.d639e45b.js";import{u as x}from"./music.991378cb.js";import"./el-image-viewer.a8b12883.js";import"./IconPark.402beefe.js";import"./index.373df683.js";import"./PlayOne.e72f474c.js";const C=t("div",{class:"text-xl pb-5 font-bold"},"\u5B98\u65B9\u699C",-1),w={class:"grid grid-flow-row grid-cols-2 2xl:grid-cols-4 gap-5"},b=["onClick"],B={class:"px-5 flex-1 flex-shrink-0 flex flex-col"},D={class:"text-xl font-bold"},I={class:"text-xs text-main mt-2"},L={class:"mt-2"},$={class:"flex"},F={class:"mr-1"},M={class:"flex-auto w-20 truncate"},N=t("div",{class:"text-xl py-5 font-bold"},"\u7279\u8272\u699C",-1),R={class:"grid grid-flow-row grid-cols-5 2xl:grid-cols-10 gap-5"},S=["onClick"],U={class:"text-xs mt-2"},A=g({setup(V){const{topListDetailData:i}=v(x()),{getTopListDetailData:f}=x(),m=y();k(async()=>{await f()});const r=d=>{m.push({name:"playlist",query:{id:d.id}})};return(d,j)=>(o(),e(c,null,[C,t("div",w,[(o(!0),e(c,null,a(u(i).slice(0,4),s=>(o(),e("div",{key:s.id,class:"flex bg-dc rounded-lg items-center cursor-pointer",onClick:n=>r(s)},[_(p,{name:s.name,"pic-url":s.coverImgUrl,"play-count":s.playCount,class:"w-36 flex-shrink-0","show-play-count":""},null,8,["name","pic-url","play-count"]),t("div",B,[t("div",D,l(s.name),1),t("div",I,[(o(!0),e(c,null,a(s.tracks,(n,h)=>(o(),e("div",L,[t("div",$,[t("span",F,l(h+1),1),t("div",M,l(n.first)+" - "+l(n.second),1)])]))),256))])])],8,b))),128))]),N,t("div",R,[(o(!0),e(c,null,a(u(i).slice(4),s=>(o(),e("div",{key:s.id,onClick:n=>r(s)},[_(p,{name:s.name,"pic-url":s.coverImgUrl,"play-count":s.playCount},null,8,["name","pic-url","play-count"]),t("div",U,l(s.name),1)],8,S))),128))])],64))}});export{A as default};
