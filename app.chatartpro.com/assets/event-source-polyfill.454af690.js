import{c as Pe}from"./@intlify.d87c91cf.js";var Se={exports:{}};/** @license
 * eventsource.js
 * Available under MIT License (MIT)
 * https://github.com/Yaffle/EventSource/
 */(function(_e,Re){(function(m){var O=m.setTimeout,j=m.clearTimeout,w=m.XMLHttpRequest,se=m.XDomainRequest,fe=m.ActiveXObject,z=m.EventSource,N=m.document,be=m.Promise,K=m.fetch,de=m.Response,Z=m.TextDecoder,ue=m.TextEncoder,Y=m.AbortController;if(typeof window<"u"&&typeof N<"u"&&!("readyState"in N)&&N.body==null&&(N.readyState="loading",window.addEventListener("load",function(e){N.readyState="complete"},!1)),w==null&&fe!=null&&(w=function(){return new fe("Microsoft.XMLHTTP")}),Object.create==null&&(Object.create=function(e){function r(){}return r.prototype=e,new r}),Date.now||(Date.now=function(){return new Date().getTime()}),Y==null){var Ae=K;K=function(e,r){var n=r.signal;return Ae(e,{headers:r.headers,credentials:r.credentials,cache:r.cache}).then(function(t){var i=t.body.getReader();return n._reader=i,n._aborted&&n._reader.cancel(),{status:t.status,statusText:t.statusText,headers:t.headers,body:{getReader:function(){return i}}}})},Y=function(){this.signal={_reader:null,_aborted:!1},this.abort=function(){this.signal._reader!=null&&this.signal._reader.cancel(),this.signal._aborted=!0}}}function ce(){this.bitsNeeded=0,this.codePoint=0}ce.prototype.decode=function(e){function r(d,u,o){if(o===1)return d>=128>>u&&d<<u<=2047;if(o===2)return d>=2048>>u&&d<<u<=55295||d>=57344>>u&&d<<u<=65535;if(o===3)return d>=65536>>u&&d<<u<=1114111;throw new Error}function n(d,u){if(d===6*1)return u>>6>15?3:u>31?2:1;if(d===6*2)return u>15?3:2;if(d===6*3)return 3;throw new Error}for(var t=65533,i="",a=this.bitsNeeded,s=this.codePoint,c=0;c<e.length;c+=1){var f=e[c];a!==0&&(f<128||f>191||!r(s<<6|f&63,a-6,n(a,s)))&&(a=0,s=t,i+=String.fromCharCode(s)),a===0?(f>=0&&f<=127?(a=0,s=f):f>=192&&f<=223?(a=6*1,s=f&31):f>=224&&f<=239?(a=6*2,s=f&15):f>=240&&f<=247?(a=6*3,s=f&7):(a=0,s=t),a!==0&&!r(s,a,n(a,s))&&(a=0,s=t)):(a-=6,s=s<<6|f&63),a===0&&(s<=65535?i+=String.fromCharCode(s):(i+=String.fromCharCode(55296+(s-65535-1>>10)),i+=String.fromCharCode(56320+(s-65535-1&1023))))}return this.bitsNeeded=a,this.codePoint=s,i};var De=function(){try{return new Z().decode(new ue().encode("test"),{stream:!0})==="test"}catch(e){console.debug("TextDecoder does not support streaming option. Using polyfill instead: "+e)}return!1};(Z==null||ue==null||!De())&&(Z=ce);var _=function(){};function L(e){this.withCredentials=!1,this.readyState=0,this.status=0,this.statusText="",this.responseText="",this.onprogress=_,this.onload=_,this.onerror=_,this.onreadystatechange=_,this._contentType="",this._xhr=e,this._sendTimeout=0,this._abort=_}L.prototype.open=function(e,r){this._abort(!0);var n=this,t=this._xhr,i=1,a=0;this._abort=function(o){n._sendTimeout!==0&&(j(n._sendTimeout),n._sendTimeout=0),(i===1||i===2||i===3)&&(i=4,t.onload=_,t.onerror=_,t.onabort=_,t.onprogress=_,t.onreadystatechange=_,t.abort(),a!==0&&(j(a),a=0),o||(n.readyState=4,n.onabort(null),n.onreadystatechange())),i=0};var s=function(){if(i===1){var o=0,l="",A=void 0;if("contentType"in t)o=200,l="OK",A=t.contentType;else try{o=t.status,l=t.statusText,A=t.getResponseHeader("Content-Type")}catch{o=0,l="",A=void 0}o!==0&&(i=2,n.readyState=2,n.status=o,n.statusText=l,n._contentType=A,n.onreadystatechange())}},c=function(){if(s(),i===2||i===3){i=3;var o="";try{o=t.responseText}catch{}n.readyState=3,n.responseText=o,n.onprogress()}},f=function(o,l){if((l==null||l.preventDefault==null)&&(l={preventDefault:_}),c(),i===1||i===2||i===3){if(i=4,a!==0&&(j(a),a=0),n.readyState=4,o==="load")n.onload(l);else if(o==="error")n.onerror(l);else if(o==="abort")n.onabort(l);else throw new TypeError;n.onreadystatechange()}},d=function(o){t!=null&&(t.readyState===4?(!("onload"in t)||!("onerror"in t)||!("onabort"in t))&&f(t.responseText===""?"error":"load",o):t.readyState===3?"onprogress"in t||c():t.readyState===2&&s())},u=function(){a=O(function(){u()},500),t.readyState===3&&c()};"onload"in t&&(t.onload=function(o){f("load",o)}),"onerror"in t&&(t.onerror=function(o){f("error",o)}),"onabort"in t&&(t.onabort=function(o){f("abort",o)}),"onprogress"in t&&(t.onprogress=c),"onreadystatechange"in t&&(t.onreadystatechange=function(o){d(o)}),("contentType"in t||!("ontimeout"in w.prototype))&&(r+=(r.indexOf("?")===-1?"?":"&")+"padding=true"),t.open(e,r,!0),"readyState"in t&&(a=O(function(){u()},0))},L.prototype.abort=function(){this._abort(!1)},L.prototype.getResponseHeader=function(e){return this._contentType},L.prototype.setRequestHeader=function(e,r){var n=this._xhr;"setRequestHeader"in n&&n.setRequestHeader(e,r)},L.prototype.getAllResponseHeaders=function(){return this._xhr.getAllResponseHeaders!=null&&this._xhr.getAllResponseHeaders()||""},L.prototype.send=function(){if((!("ontimeout"in w.prototype)||!("sendAsBinary"in w.prototype)&&!("mozAnon"in w.prototype))&&N!=null&&N.readyState!=null&&N.readyState!=="complete"){var e=this;e._sendTimeout=O(function(){e._sendTimeout=0,e.send()},4);return}var r=this._xhr;"withCredentials"in r&&(r.withCredentials=this.withCredentials);try{r.send(void 0)}catch(n){throw n}};function le(e){return e.replace(/[A-Z]/g,function(r){return String.fromCharCode(r.charCodeAt(0)+32)})}function ve(e){for(var r=Object.create(null),n=e.split(`\r
`),t=0;t<n.length;t+=1){var i=n[t],a=i.split(": "),s=a.shift(),c=a.join(": ");r[le(s)]=c}this._map=r}ve.prototype.get=function(e){return this._map[le(e)]},w!=null&&w.HEADERS_RECEIVED==null&&(w.HEADERS_RECEIVED=2);function he(){}he.prototype.open=function(e,r,n,t,i,a,s){e.open("GET",i);var c=0;e.onprogress=function(){var d=e.responseText,u=d.slice(c);c+=u.length,n(u)},e.onerror=function(d){d.preventDefault(),t(new Error("NetworkError"))},e.onload=function(){t(null)},e.onabort=function(){t(null)},e.onreadystatechange=function(){if(e.readyState===w.HEADERS_RECEIVED){var d=e.status,u=e.statusText,o=e.getResponseHeader("Content-Type"),l=e.getAllResponseHeaders();r(d,u,o,new ve(l))}},e.withCredentials=a;for(var f in s)Object.prototype.hasOwnProperty.call(s,f)&&e.setRequestHeader(f,s[f]);return e.send(),e};function pe(e){this._headers=e}pe.prototype.get=function(e){return this._headers.get(e)};function ye(){}ye.prototype.open=function(e,r,n,t,i,a,s){var c=null,f=new Y,d=f.signal,u=new Z;return K(i,{headers:s,credentials:a?"include":"same-origin",signal:d,cache:"no-store"}).then(function(o){return c=o.body.getReader(),r(o.status,o.statusText,o.headers.get("Content-Type"),new pe(o.headers)),new be(function(l,A){var W=function(){c.read().then(function(T){if(T.done)l(void 0);else{var y=u.decode(T.value,{stream:!0});n(y),W()}}).catch(function(T){A(T)})};W()})}).catch(function(o){if(o.name!=="AbortError")return o}).then(function(o){t(o)}),{abort:function(){c!=null&&c.cancel(),f.abort()}}};function G(){this._listeners=Object.create(null)}function Ee(e){O(function(){throw e},0)}G.prototype.dispatchEvent=function(e){e.target=this;var r=this._listeners[e.type];if(r!=null)for(var n=r.length,t=0;t<n;t+=1){var i=r[t];try{typeof i.handleEvent=="function"?i.handleEvent(e):i.call(this,e)}catch(a){Ee(a)}}},G.prototype.addEventListener=function(e,r){e=String(e);var n=this._listeners,t=n[e];t==null&&(t=[],n[e]=t);for(var i=!1,a=0;a<t.length;a+=1)t[a]===r&&(i=!0);i||t.push(r)},G.prototype.removeEventListener=function(e,r){e=String(e);var n=this._listeners,t=n[e];if(t!=null){for(var i=[],a=0;a<t.length;a+=1)t[a]!==r&&i.push(t[a]);i.length===0?delete n[e]:n[e]=i}};function P(e){this.type=e,this.target=void 0}function ge(e,r){P.call(this,e),this.data=r.data,this.lastEventId=r.lastEventId}ge.prototype=Object.create(P.prototype);function k(e,r){P.call(this,e),this.status=r.status,this.statusText=r.statusText,this.headers=r.headers}k.prototype=Object.create(P.prototype);function we(e,r){P.call(this,e),this.error=r.error}we.prototype=Object.create(P.prototype);var ee=-1,I=0,X=1,V=2,te=-1,H=0,re=1,me=2,xe=3,Fe=/^text\/event\-stream(;.*)?$/i,Oe=1e3,Ne=18e6,ne=function(e,r){var n=e==null?r:parseInt(e,10);return n!==n&&(n=r),ae(n)},ae=function(e){return Math.min(Math.max(e,Oe),Ne)},q=function(e,r,n){try{typeof r=="function"&&r.call(e,n)}catch(t){Ee(t)}};function R(e,r){G.call(this),r=r||{},this.onopen=void 0,this.onmessage=void 0,this.onerror=void 0,this.url=void 0,this.readyState=void 0,this.withCredentials=void 0,this.headers=void 0,this._close=void 0,Le(this,e,r)}function Ie(){return w!=null&&"withCredentials"in w.prototype||se==null?new w:new se}var He=K!=null&&de!=null&&"body"in de.prototype;function Le(e,r,n){r=String(r);var t=Boolean(n.withCredentials),i=n.lastEventIdQueryParameterName||"lastEventId",a=ae(1e3),s=ne(n.heartbeatTimeout,45e3),c="",f=a,d=!1,u=0,o=n.headers||{},l=n.Transport,A=He&&l==null?void 0:new L(l!=null?new l:Ie()),W=l!=null&&typeof l!="string"?new l:A==null?new ye:new he,T=void 0,y=0,b=ee,U="",$="",D="",J="",E=H,ie=0,M=0,Me=function(h,v,C,S){if(b===I)if(h===200&&C!=null&&Fe.test(C)){b=X,d=Date.now(),f=a,e.readyState=X;var g=new k("open",{status:h,statusText:v,headers:S});e.dispatchEvent(g),q(e,e.onopen,g)}else{var p="";h!==200?(v&&(v=v.replace(/\s+/g," ")),p="EventSource's response has a status "+h+" "+v+" that is not 200. Aborting the connection."):p="EventSource's response has a Content-Type specifying an unsupported type: "+(C==null?"-":C.replace(/\s+/g," "))+". Aborting the connection.",oe();var g=new k("error",{status:h,statusText:v,headers:S});e.dispatchEvent(g),q(e,e.onerror,g),console.error(p)}},je=function(h){if(b===X){for(var v=-1,C=0;C<h.length;C+=1){var S=h.charCodeAt(C);(S===`
`.charCodeAt(0)||S==="\r".charCodeAt(0))&&(v=C)}var g=(v!==-1?J:"")+h.slice(0,v+1);J=(v===-1?J:"")+h.slice(v+1),h!==""&&(d=Date.now(),u+=h.length);for(var p=0;p<g.length;p+=1){var S=g.charCodeAt(p);if(E===te&&S===`
`.charCodeAt(0))E=H;else if(E===te&&(E=H),S==="\r".charCodeAt(0)||S===`
`.charCodeAt(0)){if(E!==H){E===re&&(M=p+1);var x=g.slice(ie,M-1),F=g.slice(M+(M<p&&g.charCodeAt(M)===" ".charCodeAt(0)?1:0),p);x==="data"?(U+=`
`,U+=F):x==="id"?$=F:x==="event"?D=F:x==="retry"?(a=ne(F,a),f=a):x==="heartbeatTimeout"&&(s=ne(F,s),y!==0&&(j(y),y=O(function(){Q()},s)))}if(E===H){if(U!==""){c=$,D===""&&(D="message");var B=new ge(D,{data:U.slice(1),lastEventId:$});if(e.dispatchEvent(B),D==="open"?q(e,e.onopen,B):D==="message"?q(e,e.onmessage,B):D==="error"&&q(e,e.onerror,B),b===V)return}U="",D=""}E=S==="\r".charCodeAt(0)?te:H}else E===H&&(ie=p,E=re),E===re?S===":".charCodeAt(0)&&(M=p+1,E=me):E===me&&(E=xe)}}},Ce=function(h){if(b===X||b===I){b=ee,y!==0&&(j(y),y=0),y=O(function(){Q()},f),f=ae(Math.min(a*16,f*2)),e.readyState=I;var v=new we("error",{error:h});e.dispatchEvent(v),q(e,e.onerror,v),h!=null&&console.error(h)}},oe=function(){b=V,T!=null&&(T.abort(),T=void 0),y!==0&&(j(y),y=0),e.readyState=V},Q=function(){if(y=0,b!==ee){if(!d&&T!=null)Ce(new Error("No activity within "+s+" milliseconds. "+(b===I?"No response received.":u+" chars received.")+" Reconnecting.")),T!=null&&(T.abort(),T=void 0);else{var h=Math.max((d||Date.now())+s-Date.now(),1);d=!1,y=O(function(){Q()},h)}return}d=!1,u=0,y=O(function(){Q()},s),b=I,U="",D="",$=c,J="",ie=0,M=0,E=H;var v=r;if(r.slice(0,5)!=="data:"&&r.slice(0,5)!=="blob:"&&c!==""){var C=r.indexOf("?");v=C===-1?r:r.slice(0,C+1)+r.slice(C+1).replace(/(?:^|&)([^=&]*)(?:=[^&]*)?/g,function(F,B){return B===i?"":F}),v+=(r.indexOf("?")===-1?"?":"&")+i+"="+encodeURIComponent(c)}var S=e.withCredentials,g={};g.Accept="text/event-stream";var p=e.headers;if(p!=null)for(var x in p)Object.prototype.hasOwnProperty.call(p,x)&&(g[x]=p[x]);try{T=W.open(A,Me,je,Ce,v,S,g)}catch(F){throw oe(),F}};e.url=r,e.readyState=I,e.withCredentials=t,e.headers=o,e._close=oe,Q()}R.prototype=Object.create(G.prototype),R.prototype.CONNECTING=I,R.prototype.OPEN=X,R.prototype.CLOSED=V,R.prototype.close=function(){this._close()},R.CONNECTING=I,R.OPEN=X,R.CLOSED=V,R.prototype.withCredentials=void 0;var Te=z;w!=null&&(z==null||!("withCredentials"in z.prototype))&&(Te=R),function(e){{var r=e(Re);r!==void 0&&(_e.exports=r)}}(function(e){e.EventSourcePolyfill=R,e.NativeEventSource=z,e.EventSource=Te})})(typeof globalThis>"u"?typeof window<"u"?window:typeof self<"u"?self:Pe:globalThis)})(Se,Se.exports);export{Se as e};
