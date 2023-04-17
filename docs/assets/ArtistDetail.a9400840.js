import{j as s,c as b,g as c,h as d,i as e,H as f,u as o,m as g,D as w,o as D,a5 as P,a6 as H,a7 as T,I as $,G as L,q as V,r as z,e as E,J as F,k as y,l as M,n as A,F as S,C as N,$ as q,a0 as I}from"./vendor.9760fa8a.js";/* empty css                    */import{v as O,c as R,w as U,x as G,P as J,y as Z,z as K}from"./index.373df683.js";import{I as B,_ as p}from"./IconPark.402beefe.js";import{F as Q}from"./Fm.46f05eb0.js";import{M as X,S as Y}from"./SongListItem.f4bd4734.js";import{P as tt}from"./PlayOne.e72f474c.js";import{_ as W}from"./CoverPlay.d639e45b.js";import"./plugin-vue_export-helper.21dcd24c.js";import"./PlayTwo.fe71fa6d.js";import"./el-image-viewer.a8b12883.js";var et=B("download",!1,function(t){return s("svg",{width:t.size,height:t.size,viewBox:"0 0 48 48",fill:"none"},[s("path",{d:"M6 24.0083V42H42V24",stroke:t.colors[0],"stroke-width":t.strokeWidth,"stroke-linecap":t.strokeLinecap,"stroke-linejoin":t.strokeLinejoin},null),s("path",{d:"M33 23L24 32L15 23",stroke:t.colors[0],"stroke-width":t.strokeWidth,"stroke-linecap":t.strokeLinecap,"stroke-linejoin":t.strokeLinejoin},null),s("path",{d:"M23.9917 6V32",stroke:t.colors[0],"stroke-width":t.strokeWidth,"stroke-linecap":t.strokeLinecap,"stroke-linejoin":t.strokeLinejoin},null)])}),st=B("full-selection",!0,function(t){return s("svg",{width:t.size,height:t.size,viewBox:"0 0 48 48",fill:"none"},[s("path",{d:"M34 5H8C6.34315 5 5 6.34315 5 8V34C5 35.6569 6.34315 37 8 37H34C35.6569 37 37 35.6569 37 34V8C37 6.34315 35.6569 5 34 5Z",fill:t.colors[1],stroke:t.colors[0],"stroke-width":t.strokeWidth,"stroke-linejoin":t.strokeLinejoin},null),s("path",{d:"M43.9998 13.002V42.0001C43.9998 43.1046 43.1044 44.0001 41.9998 44.0001H13.0034",stroke:t.colors[0],"stroke-width":t.strokeWidth,"stroke-linecap":t.strokeLinecap,"stroke-linejoin":t.strokeLinejoin},null),s("path",{d:"M13 20.4858L18.9997 26.0109L29 15.7192",stroke:t.colors[2],"stroke-width":t.strokeWidth,"stroke-linecap":t.strokeLinecap,"stroke-linejoin":t.strokeLinejoin},null)])}),lt=B("plus",!1,function(t){return s("svg",{width:t.size,height:t.size,viewBox:"0 0 48 48",fill:"none"},[s("path",{d:"M24.0607 10L24.024 38",stroke:t.colors[0],"stroke-width":t.strokeWidth,"stroke-linecap":t.strokeLinecap,"stroke-linejoin":t.strokeLinejoin},null),s("path",{d:"M10 24L38 24",stroke:t.colors[0],"stroke-width":t.strokeWidth,"stroke-linecap":t.strokeLinecap,"stroke-linejoin":t.strokeLinejoin},null)])});const it={class:"flex items-stretch"},nt=["src"],ot={class:"pl-5 flex flex-col justify-between py-1 flex-1"},at={class:"flex flex-col justify-between flex-1"},ut={class:"text-2xl font-bold"},ct={class:"text-xs text-gray-500 leading-normal mt-2"},rt={class:"flex text-xs gap-x-5 text-slate-500 mt-2"},dt=g("\u5355\u66F2\u6570\uFF1A"),_t=g("\u4E13\u8F91\u6570\uFF1A"),mt=g("MV\u6570\uFF1A"),ht={class:"justify-self-stretch mt-5 gap-x-2 flex items-center"},vt={class:"w-32 button"},ft=e("span",null,"\u5173\u6CE8",-1),gt={class:"w-32 button-outline"},kt=e("span",null,"\u6B4C\u624B\u7535\u53F0",-1),xt={class:"button-outline w-8"},yt=b({props:{artistDetail:null},setup(t){return(m,i)=>(c(),d("div",it,[e("img",{src:t.artistDetail.artist.cover,alt:"",class:"w-44 h-44 object-cover rounded-full flex-shrink-0"},null,8,nt),e("div",ot,[e("div",at,[e("div",ut,f(t.artistDetail.artist.name),1),e("div",ct,f(t.artistDetail.artist.briefDesc.substring(0,90))+"... ",1),e("div",rt,[e("div",null,[dt,e("span",null,f(t.artistDetail.artist.musicSize),1)]),e("div",null,[_t,e("span",null,f(t.artistDetail.artist.albumSize),1)]),e("div",null,[mt,e("span",null,f(t.artistDetail.artist.mvSize),1)])])]),e("div",ht,[e("button",vt,[s(p,{icon:o(lt),size:"18",class:"mr-1"},null,8,["icon"]),ft]),e("button",gt,[s(p,{icon:o(Q),size:"18",class:"mr-1"},null,8,["icon"]),kt]),e("button",xt,[s(p,{icon:o(X)},null,8,["icon"])])])])]))}});const pt={style:{"min-height":"200px"}},wt={class:"py-5 font-bold text-sm"},bt=["innerHTML"],$t=b({props:{id:null},setup(t){const m=t,i=w();return D(async()=>{i.value=await O(m.id)}),(r,l)=>{var _,a,x;const k=P,n=H;return T((c(),d("div",pt,[i.value&&((a=(_=i.value)==null?void 0:_.introduction)==null?void 0:a.length)>0?(c(!0),d($,{key:0},L((x=i.value)==null?void 0:x.introduction,v=>(c(),d("div",null,[e("div",wt,f(v.ti),1),e("div",{class:"text-xs text-slate-500 leading-7",style:{"white-space":"pre-wrap"},innerHTML:v.txt},null,8,bt)]))),256)):(c(),V(k,{key:1,description:"\u6682\u65E0\u6570\u636E"}))])),[[n,!i.value]])}}}),Dt={class:"mt-5 flex items-center justify-between"},Ct={class:"flex gap-x-2"},Ft=g(" \u64AD\u653E\u5168\u90E8 "),Lt={class:"w-28 button-outline button-sm"},Mt=g(" \u4E0B\u8F7D "),jt={class:"w-28 button-outline button-sm"},zt=g(" \u6279\u91CF\u64CD\u4F5C "),Et={class:"gap-x-5 flex mr-10 text-xs"},At={class:"mt-2"},Bt=e("div",{class:"flex text-xs text-gray-400 py-2"},[e("div",{class:"flex-auto"},"\u6B4C\u66F2"),e("div",{class:"w-1/3"},"\u4E13\u8F91"),e("div",{class:"w-20"},"\u65F6\u957F")],-1),Vt={class:"text-sm"},St={key:0,class:"flex justify-center py-5"},Wt=g("\u52A0\u8F7D\u66F4\u591A"),Pt=b({props:{id:null},setup(t){const m=t,i=w([]),{pushPlayList:r,play:l}=R(),k=()=>{r(!1,...i.value),l(i.value.first().id)},n=z({order:"hot",limit:20,page:1,loading:!1,noMore:!1}),_=E(()=>n.page===1?0:i.value.length+n.limit),a=async()=>{try{n.loading=!0;const{songs:u}=await U(m.id,n.order,n.limit,_.value);n.page===1?i.value=u:i.value.push(...u),u.length<n.limit&&(n.noMore=!0)}catch{n.page--}n.loading=!1},x=()=>{n.page++,a()},v=u=>{n.page=1,n.order=u,a()};return D(async()=>{await a()}),(u,h)=>{const j=A;return c(),d($,null,[e("div",Dt,[e("div",Ct,[e("button",{class:"w-28 button-outline button-sm",onClick:k},[s(p,{icon:o(tt),class:"mr-1",size:"14"},null,8,["icon"]),Ft]),e("button",Lt,[s(p,{icon:o(et),class:"mr-1",size:"12"},null,8,["icon"]),Mt]),e("button",jt,[s(p,{icon:o(st),class:"mr-1",size:"12"},null,8,["icon"]),zt])]),e("div",Et,[e("div",{class:F(["hover-text",{"text-emerald-400":o(n).order==="hot"}]),onClick:h[0]||(h[0]=C=>v("hot"))},"\u6700\u70ED",2),e("div",{class:F(["hover-text",{"text-emerald-400":o(n).order==="time"}]),onClick:h[1]||(h[1]=C=>v("time"))},"\u6700\u65B0",2)])]),e("div",At,[Bt,e("div",Vt,[(c(!0),d($,null,L(i.value,C=>(c(),V(Y,{key:C.id,"show-ar-name":!1,"show-al-name":"",song:C},null,8,["song"]))),128))]),i.value.length>0&&!o(n).noMore?(c(),d("div",St,[s(j,{loading:o(n).loading,type:"text",class:"text-center w-full",onClick:x},{default:y(()=>[Wt]),_:1},8,["loading"])])):M("",!0)])],64)}}}),Ht={class:"mt-5"},Tt={class:"grid grid-flow-row grid-cols-3 lg:grid-cols-5 gap-5 2xl:grid-cols-8"},Nt=["onClick"],qt={class:"mt-2 text-xs truncate"},It={class:"mt-1 text-xs text-slate-400 truncate"},Ot={key:0,class:"flex justify-center py-5"},Rt=g("\u52A0\u8F7D\u66F4\u591A"),Ut=b({props:{id:null},setup(t){const m=t,i=S(),r=w([]),l=z({limit:40,page:1,loading:!1,noMore:!1}),k=E(()=>l.page===1?0:r.value.length+l.limit),n=async()=>{try{l.loading=!0;const{hotAlbums:a}=await G(m.id,l.limit,k.value);l.page===1?r.value=a:r.value.push(...a),a.length<l.limit&&(l.noMore=!0)}catch{l.page--}l.loading=!1},_=()=>{l.page++,n()};return D(async()=>{await n()}),(a,x)=>{const v=A;return c(),d("div",Ht,[e("div",Tt,[(c(!0),d($,null,L(r.value,(u,h)=>(c(),d("div",{key:h,class:F({"item-1":h===0}),onClick:j=>o(i).push({name:"album",query:{id:u.id}})},[s(W,{name:u.name,"pic-url":u.picUrl,"play-count":0},null,8,["name","pic-url"]),e("div",qt,f(u.name),1),e("div",It,f(u.publishTime.toDate()),1)],10,Nt))),128))]),r.value.length>0&&!o(l).noMore?(c(),d("div",Ot,[s(v,{loading:o(l).loading,type:"text",class:"text-center w-full",onClick:_},{default:y(()=>[Rt]),_:1},8,["loading"])])):M("",!0)])}}}),Gt={class:"mt-5"},Jt={class:"grid grid-flow-row gap-5 grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5"},Zt=["onClick"],Kt={class:"mt-2 text-xs truncate hover-text"},Qt={key:0,class:"flex justify-center py-5"},Xt=g("\u52A0\u8F7D\u66F4\u591A"),Yt=b({props:{id:null},setup(t){const m=t,i=w([]),r=S(),l=z({limit:40,page:1,loading:!1,noMore:!1}),k=E(()=>l.page===1?0:i.value.length+l.limit),n=async()=>{try{l.loading=!0;const{mvs:a}=await Z(m.id,l.limit,k.value);l.page===1?i.value=a:i.value.push(...a),a.length<l.limit&&(l.noMore=!0)}catch{l.page--}l.loading=!1},_=()=>{l.page++,n()};return D(async()=>{await n()}),(a,x)=>{const v=A;return c(),d("div",Gt,[e("div",Jt,[(c(!0),d($,null,L(i.value,(u,h)=>(c(),d("div",{key:h,class:F({"item-1":h===0}),onClick:j=>o(r).push({name:o(J).mvDetail,query:{id:u.id}})},[s(W,{name:u.name,"pic-url":u.imgurl16v9,video:"","play-count":u.playCount,"show-play-count":""},null,8,["name","pic-url","play-count"]),e("div",Kt,f(u.name),1)],10,Zt))),128))]),i.value.length>0&&!o(l).noMore?(c(),d("div",Qt,[s(v,{loading:o(l).loading,type:"text",class:"text-center w-full",onClick:_},{default:y(()=>[Xt]),_:1},8,["loading"])])):M("",!0)])}}});const te={key:0,class:"artist-detail p-5"},_e=b({setup(t){const m=N(),i=Number(m.query.id),r=w(),l=w("music");return D(async()=>{r.value=await K(i)}),(k,n)=>{const _=q,a=I;return r.value?(c(),d("div",te,[s(yt,{"artist-detail":r.value},null,8,["artist-detail"]),s(a,{class:"mt-3",modelValue:l.value,"onUpdate:modelValue":n[0]||(n[0]=x=>l.value=x)},{default:y(()=>[s(_,{lazy:"",label:"\u7CBE\u9009",name:"choice"}),s(_,{lazy:"",label:`\u6B4C\u66F2 ${r.value.artist.musicSize}`,name:"music"},{default:y(()=>[s(Pt,{id:o(i)},null,8,["id"])]),_:1},8,["label"]),s(_,{lazy:"",label:`\u4E13\u8F91 ${r.value.artist.albumSize}`,name:"album"},{default:y(()=>[s(Ut,{id:o(i)},null,8,["id"])]),_:1},8,["label"]),s(_,{lazy:"",label:`\u89C6\u9891 ${r.value.artist.mvSize}`,name:"mv"},{default:y(()=>[s(Yt,{id:o(i)},null,8,["id"])]),_:1},8,["label"]),s(_,{lazy:"",label:"\u8BE6\u60C5",name:"desc"},{default:y(()=>[s($t,{id:o(i)},null,8,["id"])]),_:1})]),_:1},8,["modelValue"])])):M("",!0)}}});export{_e as default};
