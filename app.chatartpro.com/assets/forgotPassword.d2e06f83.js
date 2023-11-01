import{j as K,ar as H,l as M,aq as J,f as z,b as G,A as W,t as Y,as as Z,u as ee,at as oe,h as te}from"./index.feaeb45b.js";import{d as D,r as k,y as N,b as P,aI as i,a7 as C,af as v,ba as h,X as $,aO as x,a5 as E,ax as U,by as L,ae as S,Q as p,u as t,a8 as y,N as ae,a6 as V,j as se,o as Q,a as le,bx as ne}from"./@vue.54607f99.js";import{r as R,v as re,M as B,a as ie,d as O}from"./rules.6c0e9e72.js";import{E as j,a as T}from"./index.aa7e464c.js";import{E as de}from"./index.fb5a9e7a.js";import{C as ce}from"./CaptchaCode.77f9b375.js";import{m as q}from"./js-md5.820e2c50.js";import{b as X}from"./vue-router.438671b5.js";import"./pinia.ad627e1a.js";import"./js-cookie.711e9524.js";import"./vue-i18n.efbbbf24.js";import"./@intlify.d87c91cf.js";import"./vue.740c4698.js";import"./@vueuse.dfe8520e.js";import"./lodash-es.6c80442e.js";import"./dayjs.b1bb3b84.js";import"./axios.3560a3fb.js";import"./fingerprintjs2.15a42352.js";import"./@ctrl.b082b0c1.js";import"./@popperjs.c3f81369.js";import"./async-validator.fb49d0f5.js";const me=D({__name:"DefalutForm",emits:["data"],setup(F,{emit:_}){const c=k(),n=new K,l=N(()=>u.email.value===""),d=P({email:R(re)}),u=P({email:{type:"text",prop:"email",value:"",config:{placeholder:"forgotPassword.placeholder.emailAddress",maxlength:50}}}),w=s=>{!s||s.validate(o=>{if(o)H({email:u.email.value}).then(e=>{n.setUserInfo({email:e.email,notice_email:e.notice_email}),sessionStorage.removeItem("captchaCodeClick"),_("data",e)});else return!1})};return(s,o)=>{const e=j,a=T,r=M;return i(),C($,null,[v(a,{ref_key:"defalutFormRef",ref:c,model:u,rules:d,onSubmit:o[0]||(o[0]=L(()=>{},["prevent"]))},{default:h(()=>[(i(!0),C($,null,x(u,(g,m)=>(i(),E(e,{key:m,prop:g.prop},{default:h(()=>[v(B,U({modelValue:g.value,"onUpdate:modelValue":f=>g.value=f,modelModifiers:{trim:!0},type:g.type},{...g.config,placeholder:s.$t(g.config.placeholder),autocomplete:"new-password"}),null,16,["modelValue","onUpdate:modelValue","type"])]),_:2},1032,["prop"]))),128))]),_:1},8,["model","rules"]),v(r,{disabled:t(l),class:"user-blue-btn",onClick:o[1]||(o[1]=g=>w(c.value))},{default:h(()=>[S(p(s.$t("forgotPassword.next")),1)]),_:1},8,["disabled"])],64)}}}),pe={class:"title"},ue=["onClick"],fe={class:"email"},_e={key:0,class:"radio"},ge={class:"desc"},ye=D({__name:"NotifyEmailDialog",emits:["info"],setup(F,{expose:_,emit:c}){const n=P({active:"accountEmail",value:"",data:[{type:"accountEmail",name:"Account Email:",email:""},{type:"notificationEmail",name:"Notification Email:",email:""}]}),l=k(!1),d=(o,e)=>{l.value=!0,n.data=s(String(o),String(e))},u=o=>{o.email!==""&&(n.active=o.type)},w=()=>{const o=n.data.find(e=>n.active===e.type);c("info",o),l.value=!1},s=(o,e)=>[{type:"accountEmail",name:"subscriptions.accountEmail",email:o},{type:"notificationEmail",name:"subscriptions.notificationEmail",email:e}];return _({open:d}),(o,e)=>{const a=z,r=M,g=de;return i(),E(g,{modelValue:l.value,"onUpdate:modelValue":e[1]||(e[1]=m=>l.value=m),class:"notify-email-dialog","append-to-body":!0},{default:h(()=>[y("p",pe,p(o.$t("forgotPassword.sentTo")),1),(i(!0),C($,null,x(n.data,(m,f)=>(i(),C("div",{key:f,class:ae(["card",{active:m.type===n.active,disabled:m.email===""}]),onClick:b=>u(m)},[y("div",fe,[y("p",null,p(o.$t(m.name)),1),y("p",null,p(m.email||o.$t("forgotPassword.notSet")),1)]),m.email!==""?(i(),C("div",_e,[m.type===n.active?(i(),E(a,{key:0,icon:"login-radio",size:24})):V("",!0)])):V("",!0)],10,ue))),128)),y("p",ge,[S(p(o.$t("forgotPassword.notifyDesc")),1),y("span",{onClick:e[0]||(e[0]=m=>t(J)("https://www.imyfone.com/support/"))},p(o.$t("forgotPassword.supportTeam")),1),S(p(o.$t("forgotPassword.symbol")),1)]),v(r,{class:"next",type:"primary",onClick:w},{default:h(()=>[S(p(o.$t("forgotPassword.next")),1)]),_:1})]),_:1},8,["modelValue"])}}});const ve=G(ye,[["__scopeId","data-v-c4cf0ebe"]]),we=D({__name:"CaptchaCodeForm",props:{email:{type:String,default:""},notifyEmail:{type:String,default:""}},emits:["data"],setup(F,{emit:_}){const c=F,n=k(null),l=k(null),d=N(()=>s.code.value.length!==6),u=P({code:R(ie)}),w=k(!1),s=P({code:{type:"text",prop:"code",value:"",config:{placeholder:"forgotPassword.placeholder.verificationCode",maxlength:6}}});se(()=>c.notifyEmail,()=>{n.value[0].end()}),Q(()=>{sessionStorage.getItem("captchaCodeClick")||(o(l.value),sessionStorage.setItem("captchaCodeClick","1"))}),le(()=>{sessionStorage.removeItem("captchaCodeClick")});const o=a=>{!a||a.validateField("email",r=>{r&&(w.value=!0,W({notice_email:c.notifyEmail,email:c.email,email_type:"1"}).then(()=>{Y({message:`${i18n.t("forgotPassword.verificationCode")} ${c.notifyEmail}`,customClass:"bg-black-light"}),n.value[0].start()}).finally(()=>{w.value=!1}))})},e=a=>{!a||a.validate(r=>{if(r)Z({email:c.email,code:s.code.value,email_type:"1"}).then(()=>{_("data",s.code.value)});else return!1})};return(a,r)=>{const g=j,m=M,f=T;return i(),E(f,{ref_key:"captchaCodeFormRef",ref:l,model:t(s),rules:t(u),onSubmit:r[2]||(r[2]=L(()=>{},["prevent"]))},{default:h(()=>[(i(!0),C($,null,x(t(s),(b,I)=>(i(),E(g,{key:I,class:"vercode-input",prop:b.prop},{default:h(()=>[v(B,U({modelValue:b.value,"onUpdate:modelValue":A=>b.value=A,modelModifiers:{trim:!0},type:b.type},{...b.config,placeholder:a.$t(b.config.placeholder),autocomplete:"new-password"}),null,16,["modelValue","onUpdate:modelValue","type"]),v(ce,{ref_for:!0,ref_key:"captchaCodeRef",ref:n,time:60,value:"Get",loading:t(w),onClick:r[0]||(r[0]=A=>o(t(l)))},null,8,["loading"])]),_:2},1032,["prop"]))),128)),v(m,{disabled:t(d),class:"user-blue-btn",onClick:r[1]||(r[1]=b=>e(t(l)))},{default:h(()=>[S(p(a.$t("forgotPassword.next")),1)]),_:1},8,["disabled"])]),_:1},8,["model","rules"])}}}),he=D({__name:"ResetForm",props:{data:{type:Object,default:()=>({email:"",code:"",notifyEmail:""})}},setup(F){const _=F,c=X(),n=ee(),l=new K,d=N(()=>s.password.value===""||s.resetPassword.value===""),u=k(null),w=P({password:R(O),resetPassword:R(O,{isValid:!0,password:N(()=>s.password.value)})}),s=P({email:{type:"email",prop:"email",value:_.data.email,config:{placeholder:"forgotPassword.placeholder.emailAddress",maxlength:16,disabled:!0}},password:{type:"password",prop:"password",value:"",config:{placeholder:"forgotPassword.placeholder.newPassword",maxlength:16}},resetPassword:{type:"password",prop:"resetPassword",value:"",config:{placeholder:"forgotPassword.placeholder.resetPassword",maxlength:16}}}),o=e=>{!e||e.validate(a=>{if(!a)return!1;n.setLoading(!0),oe({email:_.data.email,code:_.data.code,password:q(s.password.value),password_confirmation:q(s.resetPassword.value)}).then(()=>{l.exitLogin(i18n.t("forgotPassword.success"),!1),setTimeout(()=>{c.push({name:"Login"})},1e3)}).finally(()=>{n.setLoading(!1)})})};return(e,a)=>{const r=j,g=T,m=M;return i(),C($,null,[v(g,{ref_key:"resetFormRef",ref:u,model:t(s),rules:t(w)},{default:h(()=>[(i(!0),C($,null,x(t(s),(f,b)=>(i(),E(r,{key:b,prop:f.prop},{default:h(()=>[v(B,U({modelValue:f.value,"onUpdate:modelValue":I=>f.value=I,modelModifiers:{trim:!0},type:f.type},{...f.config,placeholder:e.$t(f.config.placeholder),autocomplete:"new-password"},{onKeydown:ne(L(I=>f.prop==="resetPassword"&&o(t(u)),["stop"]),["enter"])}),null,16,["modelValue","onUpdate:modelValue","type","onKeydown"])]),_:2},1032,["prop"]))),128))]),_:1},8,["model","rules"]),v(m,{disabled:t(d),class:"user-blue-btn",onClick:a[0]||(a[0]=f=>o(t(u)))},{default:h(()=>[S(p(e.$t("forgotPassword.submit")),1)]),_:1},8,["disabled"])],64)}}}),be={class:"forgot"},Ce={class:"desc"},Ee={class:"notify-email"},ke={class:"email"},Pe={class:"back"},$e=D({__name:"forgotPassword",setup(F){const _=X(),c=te(),n=k(null),l=k(1),d=P({email:"",code:"",notifyEmail:"",postEmail:""});Q(()=>{if(!c.token||c.user.is_member===2)_.push({name:"ForgotPassword",query:{step:1}});else{l.value=2,_.push({query:{step:l.value}});const{email:e,notice_email:a}=c.user;Object.assign(d,{email:e,notifyEmail:a,postEmail:e})}});const u=e=>{if(e){const{email:a,notice_email:r}=e;Object.assign(d,{email:a,notifyEmail:r,postEmail:a}),l.value=2}},w=e=>{e&&(d.code=e,l.value=3)},s=e=>{d.postEmail=e.email},o=()=>{_.push({name:"Login"})};return(e,a)=>(i(),C("div",be,[y("h2",null,p(e.$t("forgotPassword.title")),1),t(l)===2?(i(),C($,{key:0},[y("p",Ce,p(e.$t("forgotPassword.desc")),1),y("p",Ee,[y("span",ke,p(t(d).postEmail),1),y("span",{class:"change",onClick:a[0]||(a[0]=r=>t(n).open(t(d).email,t(d).notifyEmail))},p(e.$t("forgotPassword.chang")),1)])],64)):V("",!0),t(l)===1?(i(),E(me,{key:1,onData:u})):V("",!0),t(l)===2?(i(),E(we,{key:2,"notify-email":t(d).postEmail,email:t(d).email,onData:w},null,8,["notify-email","email"])):V("",!0),t(l)===3?(i(),E(he,{key:3,data:t(d)},null,8,["data"])):V("",!0),y("div",Pe,[v(z,{icon:"login-back","class-name":"icon-back","custom-style":!1}),y("p",{onClick:o},p(e.$t("forgotPassword.back")),1)]),v(ve,{ref_key:"notifyEmailDialogRef",ref:n,onInfo:s},null,512)]))}});const Xe=G($e,[["__scopeId","data-v-8dccad73"]]);export{Xe as default};
