import{r as ot,b as ct}from"./@intlify.d87c91cf.js";import{r as ut}from"./vue.740c4698.js";var mt={exports:{}},C={};/*!
  * vue-i18n v9.4.1
  * (c) 2023 kazuya kawaguchi
  * Released under the MIT License.
  */var n=ot,f=ct,E=ut;const He="9.4.1",Be=f.CoreWarnCodes.__EXTEND_POINT__,j=n.incrementer(Be),L={FALLBACK_TO_ROOT:Be,NOT_SUPPORTED_PRESERVE:j(),NOT_SUPPORTED_FORMATTER:j(),NOT_SUPPORTED_PRESERVE_DIRECTIVE:j(),NOT_SUPPORTED_GET_CHOICE_INDEX:j(),COMPONENT_NAME_LEGACY_COMPATIBLE:j(),NOT_FOUND_PARENT_SCOPE:j(),IGNORE_OBJ_FLATTEN:j(),NOTICE_DROP_ALLOW_COMPOSITION:j()},_t={[L.FALLBACK_TO_ROOT]:"Fall back to {type} '{key}' with root locale.",[L.NOT_SUPPORTED_PRESERVE]:"Not supported 'preserve'.",[L.NOT_SUPPORTED_FORMATTER]:"Not supported 'formatter'.",[L.NOT_SUPPORTED_PRESERVE_DIRECTIVE]:"Not supported 'preserveDirectiveContent'.",[L.NOT_SUPPORTED_GET_CHOICE_INDEX]:"Not supported 'getChoiceIndex'.",[L.COMPONENT_NAME_LEGACY_COMPATIBLE]:"Component name legacy compatible: '{name}' -> 'i18n'",[L.NOT_FOUND_PARENT_SCOPE]:"Not found parent scope. use the global scope.",[L.IGNORE_OBJ_FLATTEN]:"Ignore object flatten: '{key}' key has an string value",[L.NOTICE_DROP_ALLOW_COMPOSITION]:"'allowComposition' option will be dropped in the next major version. For more information, please see \u{1F449} https://tinyurl.com/2p97mcze"};function S(e,...s){return n.format(_t[e],...s)}const Ge=f.CoreErrorCodes.__EXTEND_POINT__,y=n.incrementer(Ge),O={UNEXPECTED_RETURN_TYPE:Ge,INVALID_ARGUMENT:y(),MUST_BE_CALL_SETUP_TOP:y(),NOT_INSTALLED:y(),NOT_AVAILABLE_IN_LEGACY_MODE:y(),REQUIRED_VALUE:y(),INVALID_VALUE:y(),CANNOT_SETUP_VUE_DEVTOOLS_PLUGIN:y(),NOT_INSTALLED_WITH_PROVIDE:y(),UNEXPECTED_ERROR:y(),NOT_COMPATIBLE_LEGACY_VUE_I18N:y(),BRIDGE_SUPPORT_VUE_2_ONLY:y(),MUST_DEFINE_I18N_OPTION_IN_ALLOW_COMPOSITION:y(),NOT_AVAILABLE_COMPOSITION_IN_LEGACY:y(),__EXTEND_POINT__:y()};function P(e,...s){return f.createCompileError(e,null,{messages:ft,args:s})}const ft={[O.UNEXPECTED_RETURN_TYPE]:"Unexpected return type in composer",[O.INVALID_ARGUMENT]:"Invalid argument",[O.MUST_BE_CALL_SETUP_TOP]:"Must be called at the top of a `setup` function",[O.NOT_INSTALLED]:"Need to install with `app.use` function",[O.UNEXPECTED_ERROR]:"Unexpected error",[O.NOT_AVAILABLE_IN_LEGACY_MODE]:"Not available in legacy mode",[O.REQUIRED_VALUE]:"Required in value: {0}",[O.INVALID_VALUE]:"Invalid value",[O.CANNOT_SETUP_VUE_DEVTOOLS_PLUGIN]:"Cannot setup vue-devtools plugin",[O.NOT_INSTALLED_WITH_PROVIDE]:"Need to install with `provide` function",[O.NOT_COMPATIBLE_LEGACY_VUE_I18N]:"Not compatible legacy VueI18n.",[O.BRIDGE_SUPPORT_VUE_2_ONLY]:"vue-i18n-bridge support Vue 2.x only",[O.MUST_DEFINE_I18N_OPTION_IN_ALLOW_COMPOSITION]:"Must define \u2018i18n\u2019 option or custom block in Composition API with using local scope in Legacy API mode",[O.NOT_AVAILABLE_COMPOSITION_IN_LEGACY]:"Not available Compostion API in Legacy API mode. Please make sure that the legacy API mode is working properly"},Le=n.makeSymbol("__translateVNode"),Re=n.makeSymbol("__datetimeParts"),Pe=n.makeSymbol("__numberParts"),Fe=n.makeSymbol("__enableEmitter"),ke=n.makeSymbol("__disableEmitter"),Ye=n.makeSymbol("__setPluralRules");n.makeSymbol("__intlifyMeta");const Xe=n.makeSymbol("__injectWithOption"),pe=n.makeSymbol("__dispose"),gt="__VUE_I18N_BRIDGE__";function he(e){if(!n.isObject(e))return e;for(const s in e)if(!!n.hasOwn(e,s))if(!s.includes("."))n.isObject(e[s])&&he(e[s]);else{const a=s.split("."),r=a.length-1;let o=e,t=!1;for(let l=0;l<r;l++){if(a[l]in o||(o[a[l]]={}),!n.isObject(o[a[l]])){n.warn(S(L.IGNORE_OBJ_FLATTEN,{key:a[l]})),t=!0;break}o=o[a[l]]}t||(o[a[r]]=e[s],delete e[s]),n.isObject(o[a[r]])&&he(o[a[r]])}return e}function ee(e,s){const{messages:a,__i18n:r,messageResolver:o,flatJson:t}=s,l=n.isPlainObject(a)?a:n.isArray(r)?{}:{[e]:{}};if(n.isArray(r)&&r.forEach(c=>{if("locale"in c&&"resource"in c){const{locale:_,resource:g}=c;_?(l[_]=l[_]||{},X(g,l[_])):X(g,l)}else n.isString(c)&&X(JSON.parse(c),l)}),o==null&&t)for(const c in l)n.hasOwn(l,c)&&he(l[c]);return l}const z=e=>!n.isObject(e)||n.isArray(e);function X(e,s){if(z(e)||z(s))throw P(O.INVALID_VALUE);for(const a in e)n.hasOwn(e,a)&&(z(e[a])||z(s[a])?s[a]=e[a]:X(e[a],s[a]))}function Ke(e){return e.type}function Je(e,s,a){let r=n.isObject(s.messages)?s.messages:{};"__i18nGlobal"in a&&(r=ee(e.locale.value,{messages:r,__i18n:a.__i18nGlobal}));const o=Object.keys(r);o.length&&o.forEach(t=>{e.mergeLocaleMessage(t,r[t])});{if(n.isObject(s.datetimeFormats)){const t=Object.keys(s.datetimeFormats);t.length&&t.forEach(l=>{e.mergeDateTimeFormat(l,s.datetimeFormats[l])})}if(n.isObject(s.numberFormats)){const t=Object.keys(s.numberFormats);t.length&&t.forEach(l=>{e.mergeNumberFormat(l,s.numberFormats[l])})}}}function De(e){return E.createVNode(E.Text,null,e,0)}const We="__INTLIFY_META__";let we=0;function Ue(e){return(s,a,r,o)=>e(a,r,E.getCurrentInstance()||void 0,o)}const bt=()=>{const e=E.getCurrentInstance();let s=null;return e&&(s=Ke(e)[We])?{[We]:s}:null};function Se(e={},s){const{__root:a,__injectWithOption:r}=e,o=a===void 0;let t=n.isBoolean(e.inheritLocale)?e.inheritLocale:!0;const l=E.ref(a&&t?a.locale.value:n.isString(e.locale)?e.locale:f.DEFAULT_LOCALE),c=E.ref(a&&t?a.fallbackLocale.value:n.isString(e.fallbackLocale)||n.isArray(e.fallbackLocale)||n.isPlainObject(e.fallbackLocale)||e.fallbackLocale===!1?e.fallbackLocale:l.value),_=E.ref(ee(l.value,e)),g=E.ref(n.isPlainObject(e.datetimeFormats)?e.datetimeFormats:{[l.value]:{}}),v=E.ref(n.isPlainObject(e.numberFormats)?e.numberFormats:{[l.value]:{}});let T=a?a.missingWarn:n.isBoolean(e.missingWarn)||n.isRegExp(e.missingWarn)?e.missingWarn:!0,d=a?a.fallbackWarn:n.isBoolean(e.fallbackWarn)||n.isRegExp(e.fallbackWarn)?e.fallbackWarn:!0,I=a?a.fallbackRoot:n.isBoolean(e.fallbackRoot)?e.fallbackRoot:!0,F=!!e.fallbackFormat,k=n.isFunction(e.missing)?e.missing:null,M=n.isFunction(e.missing)?Ue(e.missing):null,A=n.isFunction(e.postTranslation)?e.postTranslation:null,W=a?a.warnHtmlMessage:n.isBoolean(e.warnHtmlMessage)?e.warnHtmlMessage:!0,w=!!e.escapeParameter;const H=a?a.modifiers:n.isPlainObject(e.modifiers)?e.modifiers:{};let D=e.pluralRules||a&&a.pluralRules,b;b=(()=>{o&&f.setFallbackContext(null);const i={version:He,locale:l.value,fallbackLocale:c.value,messages:_.value,modifiers:H,pluralRules:D,missing:M===null?void 0:M,missingWarn:T,fallbackWarn:d,fallbackFormat:F,unresolving:!0,postTranslation:A===null?void 0:A,warnHtmlMessage:W,escapeParameter:w,messageResolver:e.messageResolver,messageCompiler:e.messageCompiler,__meta:{framework:"vue"}};i.datetimeFormats=g.value,i.numberFormats=v.value,i.__datetimeFormatters=n.isPlainObject(b)?b.__datetimeFormatters:void 0,i.__numberFormatters=n.isPlainObject(b)?b.__numberFormatters:void 0,i.__v_emitter=n.isPlainObject(b)?b.__v_emitter:void 0;const u=f.createCoreContext(i);return o&&f.setFallbackContext(u),u})(),f.updateFallbackLocale(b,l.value,c.value);function x(){return[l.value,c.value,_.value,g.value,v.value]}const G=E.computed({get:()=>l.value,set:i=>{l.value=i,b.locale=l.value}}),ae=E.computed({get:()=>c.value,set:i=>{c.value=i,b.fallbackLocale=c.value,f.updateFallbackLocale(b,l.value,i)}}),ne=E.computed(()=>_.value),le=E.computed(()=>g.value),re=E.computed(()=>v.value);function se(){return n.isFunction(A)?A:null}function ie(i){A=i,b.postTranslation=i}function U(){return k}function oe(i){i!==null&&(M=Ue(i)),k=i,b.missing=M}function ce(i,u){return i!=="translate"||!u.resolvedMessage}const V=(i,u,h,p,Ne,q)=>{x();let Y;try{f.setAdditionalMeta(bt()),o||(b.fallbackContext=a?f.getFallbackContext():void 0),Y=i(b)}finally{f.setAdditionalMeta(null),o||(b.fallbackContext=void 0)}if(n.isNumber(Y)&&Y===f.NOT_REOSLVED){const[$,it]=u();if(a&&n.isString($)&&ce(h,it)){I&&(f.isTranslateFallbackWarn(d,$)||f.isTranslateMissingWarn(T,$))&&n.warn(S(L.FALLBACK_TO_ROOT,{key:$,type:h}));{const{__v_emitter:Me}=b;Me&&I&&Me.emit("fallback",{type:h,key:$,to:"global",groupId:`${h}:${$}`})}}return a&&I?p(a):Ne($)}else{if(q(Y))return Y;throw P(O.UNEXPECTED_RETURN_TYPE)}};function J(...i){return V(u=>Reflect.apply(f.translate,null,[u,...i]),()=>f.parseTranslateArgs(...i),"translate",u=>Reflect.apply(u.t,u,[...i]),u=>u,u=>n.isString(u))}function ue(...i){const[u,h,p]=i;if(p&&!n.isObject(p))throw P(O.INVALID_ARGUMENT);return J(u,h,n.assign({resolvedMessage:!0},p||{}))}function me(...i){return V(u=>Reflect.apply(f.datetime,null,[u,...i]),()=>f.parseDateTimeArgs(...i),"datetime format",u=>Reflect.apply(u.d,u,[...i]),()=>f.MISSING_RESOLVE_VALUE,u=>n.isString(u))}function _e(...i){return V(u=>Reflect.apply(f.number,null,[u,...i]),()=>f.parseNumberArgs(...i),"number format",u=>Reflect.apply(u.n,u,[...i]),()=>f.MISSING_RESOLVE_VALUE,u=>n.isString(u))}function fe(i){return i.map(u=>n.isString(u)||n.isNumber(u)||n.isBoolean(u)?De(String(u)):u)}const ge={normalize:fe,interpolate:i=>i,type:"vnode"};function be(...i){return V(u=>{let h;const p=u;try{p.processor=ge,h=Reflect.apply(f.translate,null,[p,...i])}finally{p.processor=null}return h},()=>f.parseTranslateArgs(...i),"translate",u=>u[Le](...i),u=>[De(u)],u=>n.isArray(u))}function Ee(...i){return V(u=>Reflect.apply(f.number,null,[u,...i]),()=>f.parseNumberArgs(...i),"number format",u=>u[Pe](...i),()=>[],u=>n.isString(u)||n.isArray(u))}function de(...i){return V(u=>Reflect.apply(f.datetime,null,[u,...i]),()=>f.parseDateTimeArgs(...i),"datetime format",u=>u[Re](...i),()=>[],u=>n.isString(u)||n.isArray(u))}function ve(i){D=i,b.pluralRules=D}function Oe(i,u){const h=n.isString(u)?u:l.value,p=m(h);return b.messageResolver(p,i)!==null}function Te(i){let u=null;const h=f.fallbackWithLocaleChain(b,c.value,l.value);for(let p=0;p<h.length;p++){const Ne=_.value[h[p]]||{},q=b.messageResolver(Ne,i);if(q!=null){u=q;break}}return u}function Ie(i){const u=Te(i);return u!=null?u:a?a.tm(i)||{}:{}}function m(i){return _.value[i]||{}}function N(i,u){_.value[i]=u,b.messages=_.value}function et(i,u){_.value[i]=_.value[i]||{},X(u,_.value[i]),b.messages=_.value}function tt(i){return g.value[i]||{}}function at(i,u){g.value[i]=u,b.datetimeFormats=g.value,f.clearDateTimeFormat(b,i,u)}function nt(i,u){g.value[i]=n.assign(g.value[i]||{},u),b.datetimeFormats=g.value,f.clearDateTimeFormat(b,i,u)}function lt(i){return v.value[i]||{}}function rt(i,u){v.value[i]=u,b.numberFormats=v.value,f.clearNumberFormat(b,i,u)}function st(i,u){v.value[i]=n.assign(v.value[i]||{},u),b.numberFormats=v.value,f.clearNumberFormat(b,i,u)}we++,a&&n.inBrowser&&(E.watch(a.locale,i=>{t&&(l.value=i,b.locale=i,f.updateFallbackLocale(b,l.value,c.value))}),E.watch(a.fallbackLocale,i=>{t&&(c.value=i,b.fallbackLocale=i,f.updateFallbackLocale(b,l.value,c.value))}));const R={id:we,locale:G,fallbackLocale:ae,get inheritLocale(){return t},set inheritLocale(i){t=i,i&&a&&(l.value=a.locale.value,c.value=a.fallbackLocale.value,f.updateFallbackLocale(b,l.value,c.value))},get availableLocales(){return Object.keys(_.value).sort()},messages:ne,get modifiers(){return H},get pluralRules(){return D||{}},get isGlobal(){return o},get missingWarn(){return T},set missingWarn(i){T=i,b.missingWarn=T},get fallbackWarn(){return d},set fallbackWarn(i){d=i,b.fallbackWarn=d},get fallbackRoot(){return I},set fallbackRoot(i){I=i},get fallbackFormat(){return F},set fallbackFormat(i){F=i,b.fallbackFormat=F},get warnHtmlMessage(){return W},set warnHtmlMessage(i){W=i,b.warnHtmlMessage=i},get escapeParameter(){return w},set escapeParameter(i){w=i,b.escapeParameter=i},t:J,getLocaleMessage:m,setLocaleMessage:N,mergeLocaleMessage:et,getPostTranslationHandler:se,setPostTranslationHandler:ie,getMissingHandler:U,setMissingHandler:oe,[Ye]:ve};return R.datetimeFormats=le,R.numberFormats=re,R.rt=ue,R.te=Oe,R.tm=Ie,R.d=me,R.n=_e,R.getDateTimeFormat=tt,R.setDateTimeFormat=at,R.mergeDateTimeFormat=nt,R.getNumberFormat=lt,R.setNumberFormat=rt,R.mergeNumberFormat=st,R[Xe]=r,R[Le]=be,R[Re]=de,R[Pe]=Ee,R[Fe]=i=>{b.__v_emitter=i},R[ke]=()=>{b.__v_emitter=void 0},R}function Et(e){const s=n.isString(e.locale)?e.locale:f.DEFAULT_LOCALE,a=n.isString(e.fallbackLocale)||n.isArray(e.fallbackLocale)||n.isPlainObject(e.fallbackLocale)||e.fallbackLocale===!1?e.fallbackLocale:s,r=n.isFunction(e.missing)?e.missing:void 0,o=n.isBoolean(e.silentTranslationWarn)||n.isRegExp(e.silentTranslationWarn)?!e.silentTranslationWarn:!0,t=n.isBoolean(e.silentFallbackWarn)||n.isRegExp(e.silentFallbackWarn)?!e.silentFallbackWarn:!0,l=n.isBoolean(e.fallbackRoot)?e.fallbackRoot:!0,c=!!e.formatFallbackMessages,_=n.isPlainObject(e.modifiers)?e.modifiers:{},g=e.pluralizationRules,v=n.isFunction(e.postTranslation)?e.postTranslation:void 0,T=n.isString(e.warnHtmlInMessage)?e.warnHtmlInMessage!=="off":!0,d=!!e.escapeParameterHtml,I=n.isBoolean(e.sync)?e.sync:!0;e.formatter&&n.warn(S(L.NOT_SUPPORTED_FORMATTER)),e.preserveDirectiveContent&&n.warn(S(L.NOT_SUPPORTED_PRESERVE_DIRECTIVE));let F=e.messages;if(n.isPlainObject(e.sharedMessages)){const D=e.sharedMessages;F=Object.keys(D).reduce((B,x)=>{const G=B[x]||(B[x]={});return n.assign(G,D[x]),B},F||{})}const{__i18n:k,__root:M,__injectWithOption:A}=e,W=e.datetimeFormats,w=e.numberFormats,H=e.flatJson;return{locale:s,fallbackLocale:a,messages:F,flatJson:H,datetimeFormats:W,numberFormats:w,missing:r,missingWarn:o,fallbackWarn:t,fallbackRoot:l,fallbackFormat:c,modifiers:_,pluralRules:g,postTranslation:v,warnHtmlMessage:T,escapeParameter:d,messageResolver:e.messageResolver,inheritLocale:I,__i18n:k,__root:M,__injectWithOption:A}}function ye(e={},s){{const a=Se(Et(e)),{__extender:r}=e,o={id:a.id,get locale(){return a.locale.value},set locale(t){a.locale.value=t},get fallbackLocale(){return a.fallbackLocale.value},set fallbackLocale(t){a.fallbackLocale.value=t},get messages(){return a.messages.value},get datetimeFormats(){return a.datetimeFormats.value},get numberFormats(){return a.numberFormats.value},get availableLocales(){return a.availableLocales},get formatter(){return n.warn(S(L.NOT_SUPPORTED_FORMATTER)),{interpolate(){return[]}}},set formatter(t){n.warn(S(L.NOT_SUPPORTED_FORMATTER))},get missing(){return a.getMissingHandler()},set missing(t){a.setMissingHandler(t)},get silentTranslationWarn(){return n.isBoolean(a.missingWarn)?!a.missingWarn:a.missingWarn},set silentTranslationWarn(t){a.missingWarn=n.isBoolean(t)?!t:t},get silentFallbackWarn(){return n.isBoolean(a.fallbackWarn)?!a.fallbackWarn:a.fallbackWarn},set silentFallbackWarn(t){a.fallbackWarn=n.isBoolean(t)?!t:t},get modifiers(){return a.modifiers},get formatFallbackMessages(){return a.fallbackFormat},set formatFallbackMessages(t){a.fallbackFormat=t},get postTranslation(){return a.getPostTranslationHandler()},set postTranslation(t){a.setPostTranslationHandler(t)},get sync(){return a.inheritLocale},set sync(t){a.inheritLocale=t},get warnHtmlInMessage(){return a.warnHtmlMessage?"warn":"off"},set warnHtmlInMessage(t){a.warnHtmlMessage=t!=="off"},get escapeParameterHtml(){return a.escapeParameter},set escapeParameterHtml(t){a.escapeParameter=t},get preserveDirectiveContent(){return n.warn(S(L.NOT_SUPPORTED_PRESERVE_DIRECTIVE)),!0},set preserveDirectiveContent(t){n.warn(S(L.NOT_SUPPORTED_PRESERVE_DIRECTIVE))},get pluralizationRules(){return a.pluralRules||{}},__composer:a,t(...t){const[l,c,_]=t,g={};let v=null,T=null;if(!n.isString(l))throw P(O.INVALID_ARGUMENT);const d=l;return n.isString(c)?g.locale=c:n.isArray(c)?v=c:n.isPlainObject(c)&&(T=c),n.isArray(_)?v=_:n.isPlainObject(_)&&(T=_),Reflect.apply(a.t,a,[d,v||T||{},g])},rt(...t){return Reflect.apply(a.rt,a,[...t])},tc(...t){const[l,c,_]=t,g={plural:1};let v=null,T=null;if(!n.isString(l))throw P(O.INVALID_ARGUMENT);const d=l;return n.isString(c)?g.locale=c:n.isNumber(c)?g.plural=c:n.isArray(c)?v=c:n.isPlainObject(c)&&(T=c),n.isString(_)?g.locale=_:n.isArray(_)?v=_:n.isPlainObject(_)&&(T=_),Reflect.apply(a.t,a,[d,v||T||{},g])},te(t,l){return a.te(t,l)},tm(t){return a.tm(t)},getLocaleMessage(t){return a.getLocaleMessage(t)},setLocaleMessage(t,l){a.setLocaleMessage(t,l)},mergeLocaleMessage(t,l){a.mergeLocaleMessage(t,l)},d(...t){return Reflect.apply(a.d,a,[...t])},getDateTimeFormat(t){return a.getDateTimeFormat(t)},setDateTimeFormat(t,l){a.setDateTimeFormat(t,l)},mergeDateTimeFormat(t,l){a.mergeDateTimeFormat(t,l)},n(...t){return Reflect.apply(a.n,a,[...t])},getNumberFormat(t){return a.getNumberFormat(t)},setNumberFormat(t,l){a.setNumberFormat(t,l)},mergeNumberFormat(t,l){a.mergeNumberFormat(t,l)},getChoiceIndex(t,l){return n.warn(S(L.NOT_SUPPORTED_GET_CHOICE_INDEX)),-1}};return o.__extender=r,o.__enableEmitter=t=>{const l=a;l[Fe]&&l[Fe](t)},o.__disableEmitter=()=>{const t=a;t[ke]&&t[ke]()},o}}const Ce={tag:{type:[String,Object]},locale:{type:String},scope:{type:String,validator:e=>e==="parent"||e==="global",default:"parent"},i18n:{type:Object}};function dt({slots:e},s){return s.length===1&&s[0]==="default"?(e.default?e.default():[]).reduce((r,o)=>[...r,...o.type===E.Fragment?o.children:[o]],[]):s.reduce((a,r)=>{const o=e[r];return o&&(a[r]=o()),a},{})}function qe(e){return E.Fragment}const vt=E.defineComponent({name:"i18n-t",props:n.assign({keypath:{type:String,required:!0},plural:{type:[Number,String],validator:e=>n.isNumber(e)||!isNaN(e)}},Ce),setup(e,s){const{slots:a,attrs:r}=s,o=e.i18n||te({useScope:e.scope,__useComponent:!0});return()=>{const t=Object.keys(a).filter(T=>T!=="_"),l={};e.locale&&(l.locale=e.locale),e.plural!==void 0&&(l.plural=n.isString(e.plural)?+e.plural:e.plural);const c=dt(s,t),_=o[Le](e.keypath,c,l),g=n.assign({},r),v=n.isString(e.tag)||n.isObject(e.tag)?e.tag:qe();return E.h(v,g,_)}}}),K=vt,Ot=K;function Tt(e){return n.isArray(e)&&!n.isString(e[0])}function ze(e,s,a,r){const{slots:o,attrs:t}=s;return()=>{const l={part:!0};let c={};e.locale&&(l.locale=e.locale),n.isString(e.format)?l.key=e.format:n.isObject(e.format)&&(n.isString(e.format.key)&&(l.key=e.format.key),c=Object.keys(e.format).reduce((d,I)=>a.includes(I)?n.assign({},d,{[I]:e.format[I]}):d,{}));const _=r(e.value,l,c);let g=[l.key];n.isArray(_)?g=_.map((d,I)=>{const F=o[d.type],k=F?F({[d.type]:d.value,index:I,parts:_}):[d.value];return Tt(k)&&(k[0].key=`${d.type}-${I}`),k}):n.isString(_)&&(g=[_]);const v=n.assign({},t),T=n.isString(e.tag)||n.isObject(e.tag)?e.tag:qe();return E.h(T,v,g)}}const It=E.defineComponent({name:"i18n-n",props:n.assign({value:{type:Number,required:!0},format:{type:[String,Object]}},Ce),setup(e,s){const a=e.i18n||te({useScope:"parent",__useComponent:!0});return ze(e,s,f.NUMBER_FORMAT_OPTIONS_KEYS,(...r)=>a[Pe](...r))}}),Q=It,Nt=Q,Lt=E.defineComponent({name:"i18n-d",props:n.assign({value:{type:[Number,Date],required:!0},format:{type:[String,Object]}},Ce),setup(e,s){const a=e.i18n||te({useScope:"parent",__useComponent:!0});return ze(e,s,f.DATETIME_FORMAT_OPTIONS_KEYS,(...r)=>a[Re](...r))}}),Z=Lt,Rt=Z;function Pt(e,s){const a=e;if(e.mode==="composition")return a.__getInstance(s)||e.global;{const r=a.__getInstance(s);return r!=null?r.__composer:e.global.__composer}}function Qe(e){const s=l=>{const{instance:c,modifiers:_,value:g}=l;if(!c||!c.$)throw P(O.UNEXPECTED_ERROR);const v=Pt(e,c.$);_.preserve&&n.warn(S(L.NOT_SUPPORTED_PRESERVE));const T=Ve(g);return[Reflect.apply(v.t,v,[...je(T)]),v]};return{created:(l,c)=>{const[_,g]=s(c);n.inBrowser&&e.global===g&&(l.__i18nWatcher=E.watch(g.locale,()=>{c.instance&&c.instance.$forceUpdate()})),l.__composer=g,l.textContent=_},unmounted:l=>{n.inBrowser&&l.__i18nWatcher&&(l.__i18nWatcher(),l.__i18nWatcher=void 0,delete l.__i18nWatcher),l.__composer&&(l.__composer=void 0,delete l.__composer)},beforeUpdate:(l,{value:c})=>{if(l.__composer){const _=l.__composer,g=Ve(c);l.textContent=Reflect.apply(_.t,_,[...je(g)])}},getSSRProps:l=>{const[c]=s(l);return{textContent:c}}}}function Ve(e){if(n.isString(e))return{path:e};if(n.isPlainObject(e)){if(!("path"in e))throw P(O.REQUIRED_VALUE,"path");return e}else throw P(O.INVALID_VALUE)}function je(e){const{path:s,locale:a,args:r,choice:o,plural:t}=e,l={},c=r||{};return n.isString(a)&&(l.locale=a),n.isNumber(o)&&(l.plural=o),n.isNumber(t)&&(l.plural=t),[s,c,l]}function Ft(e,s,...a){const r=n.isPlainObject(a[0])?a[0]:{},o=!!r.useI18nComponentName,t=n.isBoolean(r.globalInstall)?r.globalInstall:!0;t&&o&&n.warn(S(L.COMPONENT_NAME_LEGACY_COMPATIBLE,{name:K.name})),t&&([o?"i18n":K.name,"I18nT"].forEach(l=>e.component(l,K)),[Q.name,"I18nN"].forEach(l=>e.component(l,Q)),[Z.name,"I18nD"].forEach(l=>e.component(l,Z))),e.directive("t",Qe(s))}function kt(e,s,a){return{beforeCreate(){const r=E.getCurrentInstance();if(!r)throw P(O.UNEXPECTED_ERROR);const o=this.$options;if(o.i18n){const t=o.i18n;if(o.__i18n&&(t.__i18n=o.__i18n),t.__root=s,this===this.$root)this.$i18n=xe(e,t);else{t.__injectWithOption=!0,t.__extender=a.__vueI18nExtend,this.$i18n=ye(t);const l=this.$i18n;l.__extender&&(l.__disposer=l.__extender(this.$i18n))}}else if(o.__i18n)if(this===this.$root)this.$i18n=xe(e,o);else{this.$i18n=ye({__i18n:o.__i18n,__injectWithOption:!0,__extender:a.__vueI18nExtend,__root:s});const t=this.$i18n;t.__extender&&(t.__disposer=t.__extender(this.$i18n))}else this.$i18n=e;o.__i18nGlobal&&Je(s,o,o),this.$t=(...t)=>this.$i18n.t(...t),this.$rt=(...t)=>this.$i18n.rt(...t),this.$tc=(...t)=>this.$i18n.tc(...t),this.$te=(t,l)=>this.$i18n.te(t,l),this.$d=(...t)=>this.$i18n.d(...t),this.$n=(...t)=>this.$i18n.n(...t),this.$tm=t=>this.$i18n.tm(t),a.__setInstance(r,this.$i18n)},mounted(){},unmounted(){const r=E.getCurrentInstance();if(!r)throw P(O.UNEXPECTED_ERROR);const o=this.$i18n;delete this.$t,delete this.$rt,delete this.$tc,delete this.$te,delete this.$d,delete this.$n,delete this.$tm,o.__disposer&&(o.__disposer(),delete o.__disposer,delete o.__extender),a.__deleteInstance(r),delete this.$i18n}}}function xe(e,s){e.locale=s.locale||e.locale,e.fallbackLocale=s.fallbackLocale||e.fallbackLocale,e.missing=s.missing||e.missing,e.silentTranslationWarn=s.silentTranslationWarn||e.silentFallbackWarn,e.silentFallbackWarn=s.silentFallbackWarn||e.silentFallbackWarn,e.formatFallbackMessages=s.formatFallbackMessages||e.formatFallbackMessages,e.postTranslation=s.postTranslation||e.postTranslation,e.warnHtmlInMessage=s.warnHtmlInMessage||e.warnHtmlInMessage,e.escapeParameterHtml=s.escapeParameterHtml||e.escapeParameterHtml,e.sync=s.sync||e.sync,e.__composer[Ye](s.pluralizationRules||e.pluralizationRules);const a=ee(e.locale,{messages:s.messages,__i18n:s.__i18n});return Object.keys(a).forEach(r=>e.mergeLocaleMessage(r,a[r])),s.datetimeFormats&&Object.keys(s.datetimeFormats).forEach(r=>e.mergeDateTimeFormat(r,s.datetimeFormats[r])),s.numberFormats&&Object.keys(s.numberFormats).forEach(r=>e.mergeNumberFormat(r,s.numberFormats[r])),e}const Ze=n.makeSymbol("global-vue-i18n");function pt(e={},s){const a=n.isBoolean(e.legacy)?e.legacy:!0,r=n.isBoolean(e.globalInjection)?e.globalInjection:!0,o=a?!!e.allowComposition:!0,t=new Map,[l,c]=yt(e,a),_=n.makeSymbol("vue-i18n");a&&o&&n.warn(S(L.NOTICE_DROP_ALLOW_COMPOSITION));function g(d){return t.get(d)||null}function v(d,I){t.set(d,I)}function T(d){t.delete(d)}{const d={get mode(){return a?"legacy":"composition"},get allowComposition(){return o},async install(I,...F){if(I.__VUE_I18N_SYMBOL__=_,I.provide(I.__VUE_I18N_SYMBOL__,d),n.isPlainObject(F[0])){const A=F[0];d.__composerExtend=A.__composerExtend,d.__vueI18nExtend=A.__vueI18nExtend}let k=null;!a&&r&&(k=Vt(I,d.global)),Ft(I,d,...F),a&&I.mixin(kt(c,c.__composer,d));const M=I.unmount;I.unmount=()=>{k&&k(),d.dispose(),M()}},get global(){return c},dispose(){l.stop()},__instances:t,__getInstance:g,__setInstance:v,__deleteInstance:T};return d}}function te(e={}){const s=E.getCurrentInstance();if(s==null)throw P(O.MUST_BE_CALL_SETUP_TOP);if(!s.isCE&&s.appContext.app!=null&&!s.appContext.app.__VUE_I18N_SYMBOL__)throw P(O.NOT_INSTALLED);const a=St(s),r=At(a),o=Ke(s),t=Ct(e,o);if(a.mode==="legacy"&&!e.__useComponent){if(!a.allowComposition)throw P(O.NOT_AVAILABLE_IN_LEGACY_MODE);return wt(s,t,r,e)}if(t==="global")return Je(r,e,o),r;if(t==="parent"){let _=Mt(a,s,e.__useComponent);return _==null&&(n.warn(S(L.NOT_FOUND_PARENT_SCOPE)),_=r),_}const l=a;let c=l.__getInstance(s);if(c==null){const _=n.assign({},e);"__i18n"in o&&(_.__i18n=o.__i18n),r&&(_.__root=r),c=Se(_),l.__composerExtend&&(c[pe]=l.__composerExtend(c)),Wt(l,s,c),l.__setInstance(s,c)}return c}const ht=e=>{if(!(gt in e))throw P(O.NOT_COMPATIBLE_LEGACY_VUE_I18N);return e};function yt(e,s,a){const r=E.effectScope();{const o=s?r.run(()=>ye(e)):r.run(()=>Se(e));if(o==null)throw P(O.UNEXPECTED_ERROR);return[r,o]}}function St(e){{const s=E.inject(e.isCE?Ze:e.appContext.app.__VUE_I18N_SYMBOL__);if(!s)throw P(e.isCE?O.NOT_INSTALLED_WITH_PROVIDE:O.UNEXPECTED_ERROR);return s}}function Ct(e,s){return n.isEmptyObject(e)?"__i18n"in s?"local":"global":e.useScope?e.useScope:"local"}function At(e){return e.mode==="composition"?e.global:e.global.__composer}function Mt(e,s,a=!1){let r=null;const o=s.root;let t=Dt(s,a);for(;t!=null;){const l=e;if(e.mode==="composition")r=l.__getInstance(t);else{const c=l.__getInstance(t);c!=null&&(r=c.__composer,a&&r&&!r[Xe]&&(r=null))}if(r!=null||o===t)break;t=t.parent}return r}function Dt(e,s=!1){return e==null?null:s&&e.vnode.ctx||e.parent}function Wt(e,s,a){E.onMounted(()=>{},s),E.onUnmounted(()=>{const r=a;e.__deleteInstance(s);const o=r[pe];o&&(o(),delete r[pe])},s)}function wt(e,s,a,r={}){const o=s==="local",t=E.shallowRef(null);if(o&&e.proxy&&!(e.proxy.$options.i18n||e.proxy.$options.__i18n))throw P(O.MUST_DEFINE_I18N_OPTION_IN_ALLOW_COMPOSITION);const l=n.isBoolean(r.inheritLocale)?r.inheritLocale:!n.isString(r.locale),c=E.ref(!o||l?a.locale.value:n.isString(r.locale)?r.locale:f.DEFAULT_LOCALE),_=E.ref(!o||l?a.fallbackLocale.value:n.isString(r.fallbackLocale)||n.isArray(r.fallbackLocale)||n.isPlainObject(r.fallbackLocale)||r.fallbackLocale===!1?r.fallbackLocale:c.value),g=E.ref(ee(c.value,r)),v=E.ref(n.isPlainObject(r.datetimeFormats)?r.datetimeFormats:{[c.value]:{}}),T=E.ref(n.isPlainObject(r.numberFormats)?r.numberFormats:{[c.value]:{}}),d=o?a.missingWarn:n.isBoolean(r.missingWarn)||n.isRegExp(r.missingWarn)?r.missingWarn:!0,I=o?a.fallbackWarn:n.isBoolean(r.fallbackWarn)||n.isRegExp(r.fallbackWarn)?r.fallbackWarn:!0,F=o?a.fallbackRoot:n.isBoolean(r.fallbackRoot)?r.fallbackRoot:!0,k=!!r.fallbackFormat,M=n.isFunction(r.missing)?r.missing:null,A=n.isFunction(r.postTranslation)?r.postTranslation:null,W=o?a.warnHtmlMessage:n.isBoolean(r.warnHtmlMessage)?r.warnHtmlMessage:!0,w=!!r.escapeParameter,H=o?a.modifiers:n.isPlainObject(r.modifiers)?r.modifiers:{},D=r.pluralRules||o&&a.pluralRules;function b(){return[c.value,_.value,g.value,v.value,T.value]}const B=E.computed({get:()=>t.value?t.value.locale.value:c.value,set:m=>{t.value&&(t.value.locale.value=m),c.value=m}}),x=E.computed({get:()=>t.value?t.value.fallbackLocale.value:_.value,set:m=>{t.value&&(t.value.fallbackLocale.value=m),_.value=m}}),G=E.computed(()=>t.value?t.value.messages.value:g.value),ae=E.computed(()=>v.value),ne=E.computed(()=>T.value);function le(){return t.value?t.value.getPostTranslationHandler():A}function re(m){t.value&&t.value.setPostTranslationHandler(m)}function se(){return t.value?t.value.getMissingHandler():M}function ie(m){t.value&&t.value.setMissingHandler(m)}function U(m){return b(),m()}function oe(...m){return t.value?U(()=>Reflect.apply(t.value.t,null,[...m])):U(()=>"")}function ce(...m){return t.value?Reflect.apply(t.value.rt,null,[...m]):""}function V(...m){return t.value?U(()=>Reflect.apply(t.value.d,null,[...m])):U(()=>"")}function J(...m){return t.value?U(()=>Reflect.apply(t.value.n,null,[...m])):U(()=>"")}function ue(m){return t.value?t.value.tm(m):{}}function me(m,N){return t.value?t.value.te(m,N):!1}function _e(m){return t.value?t.value.getLocaleMessage(m):{}}function fe(m,N){t.value&&(t.value.setLocaleMessage(m,N),g.value[m]=N)}function Ae(m,N){t.value&&t.value.mergeLocaleMessage(m,N)}function ge(m){return t.value?t.value.getDateTimeFormat(m):{}}function be(m,N){t.value&&(t.value.setDateTimeFormat(m,N),v.value[m]=N)}function Ee(m,N){t.value&&t.value.mergeDateTimeFormat(m,N)}function de(m){return t.value?t.value.getNumberFormat(m):{}}function ve(m,N){t.value&&(t.value.setNumberFormat(m,N),T.value[m]=N)}function Oe(m,N){t.value&&t.value.mergeNumberFormat(m,N)}const Te={get id(){return t.value?t.value.id:-1},locale:B,fallbackLocale:x,messages:G,datetimeFormats:ae,numberFormats:ne,get inheritLocale(){return t.value?t.value.inheritLocale:l},set inheritLocale(m){t.value&&(t.value.inheritLocale=m)},get availableLocales(){return t.value?t.value.availableLocales:Object.keys(g.value)},get modifiers(){return t.value?t.value.modifiers:H},get pluralRules(){return t.value?t.value.pluralRules:D},get isGlobal(){return t.value?t.value.isGlobal:!1},get missingWarn(){return t.value?t.value.missingWarn:d},set missingWarn(m){t.value&&(t.value.missingWarn=m)},get fallbackWarn(){return t.value?t.value.fallbackWarn:I},set fallbackWarn(m){t.value&&(t.value.missingWarn=m)},get fallbackRoot(){return t.value?t.value.fallbackRoot:F},set fallbackRoot(m){t.value&&(t.value.fallbackRoot=m)},get fallbackFormat(){return t.value?t.value.fallbackFormat:k},set fallbackFormat(m){t.value&&(t.value.fallbackFormat=m)},get warnHtmlMessage(){return t.value?t.value.warnHtmlMessage:W},set warnHtmlMessage(m){t.value&&(t.value.warnHtmlMessage=m)},get escapeParameter(){return t.value?t.value.escapeParameter:w},set escapeParameter(m){t.value&&(t.value.escapeParameter=m)},t:oe,getPostTranslationHandler:le,setPostTranslationHandler:re,getMissingHandler:se,setMissingHandler:ie,rt:ce,d:V,n:J,tm:ue,te:me,getLocaleMessage:_e,setLocaleMessage:fe,mergeLocaleMessage:Ae,getDateTimeFormat:ge,setDateTimeFormat:be,mergeDateTimeFormat:Ee,getNumberFormat:de,setNumberFormat:ve,mergeNumberFormat:Oe};function Ie(m){m.locale.value=c.value,m.fallbackLocale.value=_.value,Object.keys(g.value).forEach(N=>{m.mergeLocaleMessage(N,g.value[N])}),Object.keys(v.value).forEach(N=>{m.mergeDateTimeFormat(N,v.value[N])}),Object.keys(T.value).forEach(N=>{m.mergeNumberFormat(N,T.value[N])}),m.escapeParameter=w,m.fallbackFormat=k,m.fallbackRoot=F,m.fallbackWarn=I,m.missingWarn=d,m.warnHtmlMessage=W}return E.onBeforeMount(()=>{if(e.proxy==null||e.proxy.$i18n==null)throw P(O.NOT_AVAILABLE_COMPOSITION_IN_LEGACY);const m=t.value=e.proxy.$i18n.__composer;s==="global"?(c.value=m.locale.value,_.value=m.fallbackLocale.value,g.value=m.messages.value,v.value=m.datetimeFormats.value,T.value=m.numberFormats.value):o&&Ie(m)}),Te}const Ut=["locale","fallbackLocale","availableLocales"],$e=["t","rt","d","n","tm","te"];function Vt(e,s){const a=Object.create(null);return Ut.forEach(o=>{const t=Object.getOwnPropertyDescriptor(s,o);if(!t)throw P(O.UNEXPECTED_ERROR);const l=E.isRef(t.value)?{get(){return t.value.value},set(c){t.value.value=c}}:{get(){return t.get&&t.get()}};Object.defineProperty(a,o,l)}),e.config.globalProperties.$i18n=a,$e.forEach(o=>{const t=Object.getOwnPropertyDescriptor(s,o);if(!t||!t.value)throw P(O.UNEXPECTED_ERROR);Object.defineProperty(e.config.globalProperties,`$${o}`,t)}),()=>{delete e.config.globalProperties.$i18n,$e.forEach(o=>{delete e.config.globalProperties[`$${o}`]})}}f.registerMessageCompiler(f.compile);f.registerMessageResolver(f.resolveValue);f.registerLocaleFallbacker(f.fallbackWithLocaleChain);{const e=n.getGlobalThis();e.__INTLIFY__=!0,f.setDevToolsHook(e.__INTLIFY_DEVTOOLS_GLOBAL_HOOK__)}C.DatetimeFormat=Z;C.I18nD=Rt;C.I18nInjectionKey=Ze;C.I18nN=Nt;C.I18nT=Ot;C.NumberFormat=Q;C.Translation=K;C.VERSION=He;C.castToVueI18n=ht;C.createI18n=pt;C.useI18n=te;C.vTDirective=Qe;(function(e){e.exports=C})(mt);export{mt as v};
