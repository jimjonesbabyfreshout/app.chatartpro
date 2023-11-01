import{d as M,r as C,b as y,aQ as E,aI as f,a7 as U,a8 as l,Q as a,ae as n,af as d,ba as u,u as s,X as V,aO as x,a5 as P,ax as B,bx as S,by as T}from"./@vue.54607f99.js";import{r as b,v as N,d as R,m as K,M as L}from"./rules.6c0e9e72.js";import{u as D,l as Q,ap as j,j as q,t as A,k as G,aq as $,b as H}from"./index.feaeb45b.js";import{b as O}from"./vue-router.438671b5.js";import{E as X,a as z}from"./index.aa7e464c.js";import"./js-md5.820e2c50.js";import"./@intlify.d87c91cf.js";import"./pinia.ad627e1a.js";import"./js-cookie.711e9524.js";import"./vue-i18n.efbbbf24.js";import"./vue.740c4698.js";import"./@vueuse.dfe8520e.js";import"./lodash-es.6c80442e.js";import"./dayjs.b1bb3b84.js";import"./axios.3560a3fb.js";import"./fingerprintjs2.15a42352.js";import"./@ctrl.b082b0c1.js";import"./@popperjs.c3f81369.js";import"./async-validator.fb49d0f5.js";const J={class:"sign-up"},W={class:"account"},Y={class:"policy"},Z=M({__name:"signUp",setup(ee){const c=C(),_=D(),k=O(),v="https://www.chatartpro.com",i=y({email:{type:"text",prop:"email",value:"",placeholder:"login.emailPlaceholder",maxlength:50},password:{type:"password",prop:"password",value:"",placeholder:"login.passwordPlaceholder",maxlength:16}}),I=y({email:b(N),password:b(R)}),w=e=>{!e||e.validate(t=>{if(t){const g={email:i.email.value,password:K(i.password.value)};_.setLoading(!0),j(g).then(r=>{const p=new q;p.setToken(r.token),p.setUserInfo({...r}),A({customClass:"bg-black-light",message:i18n.t("signUp.success")}),G({event:"sign_up","event-action":"user_web","event-label":window.location.hostname,userId:r.member_id}),setTimeout(()=>{const m=sessionStorage.getItem("origin");m?(sessionStorage.removeItem("origin"),location.href=m):k.push({name:"Home"})},1e3)}).finally(()=>{_.setLoading(!1)})}else return!1})};return(e,t)=>{const g=E("router-link"),r=X,p=z,m=Q;return f(),U("div",J,[l("h2",null,a(e.$t("signUp.title")),1),l("p",W,[n(a(e.$t("signUp.account"))+" ",1),d(g,{to:"/login"},{default:u(()=>[n(a(e.$t("signUp.login")),1)]),_:1})]),d(p,{ref_key:"signFormRef",ref:c,model:s(i),rules:s(I)},{default:u(()=>[(f(!0),U(V,null,x(s(i),(o,F)=>(f(),P(r,{key:F,prop:o.prop},{default:u(()=>[d(L,B({modelValue:o.value,"onUpdate:modelValue":h=>o.value=h,modelModifiers:{trim:!0},type:o.type},{maxlength:o.maxlength,placeholder:e.$t(o.placeholder)},{onKeydown:S(T(h=>o.prop==="password"&&w(s(c)),["stop"]),["enter"])}),null,16,["modelValue","onUpdate:modelValue","type","onKeydown"])]),_:2},1032,["prop"]))),128))]),_:1},8,["model","rules"]),d(m,{class:"user-blue-btn",onClick:t[0]||(t[0]=o=>w(s(c)))},{default:u(()=>[n(a(e.$t("signUp.createAccount")),1)]),_:1}),l("p",Y,[n(a(e.$t("signUp.agreeText1"))+" ",1),l("span",{class:"forgot",onClick:t[1]||(t[1]=o=>s($)(`${s(v)}/terms-conditions/`))},a(e.$t("signUp.terms")),1),n(" "+a(e.$t("signUp.agreeText2"))+" ",1),l("span",{class:"forgot",onClick:t[2]||(t[2]=o=>s($)(`${s(v)}/privacy-policy/`))},a(e.$t("signUp.policy")),1),n(". ")])])}}});const ye=H(Z,[["__scopeId","data-v-37537122"]]);export{ye as default};
