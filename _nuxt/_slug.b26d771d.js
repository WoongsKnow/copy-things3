import{_ as o,l as r,k as u}from"./entry.ba7947c1.js";const _={name:"_slug",async asyncData({$content:e,params:s,error:t}){const a=s.slug||"index";return{page:await e(a).fetch().catch(c=>{t({statusCode:404,message:"Page not found"})})}}};function p(e,s,t,a,n,c){return u(),r("div")}const d=o(_,[["render",p]]);export{d as default};